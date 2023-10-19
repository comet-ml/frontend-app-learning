import { useContext } from 'react';
import { AppContext } from '@edx/frontend-platform/react';
import useEnvironment from './useEnvironment';

const useAuthRedirect = () => {
  const { authenticatedUser } = useContext(AppContext);
  const environment = useEnvironment();

  if (!authenticatedUser) {
    const redirectUrl = environment === 'staging'
      ? 'https://apps.courses.dev.comet.com/authn/login'
      : 'https://apps.courses.comet.com/authn/login';

    window.location.href = redirectUrl;
  }
};

export default useAuthRedirect;
