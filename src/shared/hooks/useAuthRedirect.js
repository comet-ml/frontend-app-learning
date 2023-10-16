import { useContext } from 'react';
import { AppContext } from '@edx/frontend-platform/react';

const useAuthRedirect = () => {
  const { authenticatedUser } = useContext(AppContext);

  if (!authenticatedUser) {
    window.location.href = 'https://apps.courses.comet.com/authn/login';
  }
};

export default useAuthRedirect;
