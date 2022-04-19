import {useState} from 'react';

export const useUserAuth = () => {
    const [userIsAuthenticated, setUserIsAuthenticated] = useState(false);

    const checkUserAuthHandler = (accountID, uid) => {
        if( uid === accountID) {
          setUserIsAuthenticated(true);
        } else {
          setUserIsAuthenticated(false);
          window.location.replace('/welcome');
        }
    }

    const quickUserAuthCheckHandler = (accountID) => {
      const localUserUid = localStorage.getItem('uid');
      const localUserToken = localStorage.getItem('token');

      return localUserUid === accountID && localUserToken !== "null";
    }

  return {
    userIsAuthenticated,
    checkUserAuthHandler,
    quickUserAuthCheckHandler
  }
}
