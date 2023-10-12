import { useContext } from 'react';
import { AppContext } from '@edx/frontend-platform/react';

const useAuthRedirect = () => {
  const { authenticatedUser } = useContext(AppContext);

  if (!authenticatedUser) {
    window.location.href = 'https://tutor.nothingtochere.com/authn/login';
  }
};

export default useAuthRedirect;
