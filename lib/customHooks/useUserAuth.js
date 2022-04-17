import {useState} from 'react';

export const useUserAuth = () => {
    const [userIsAuthenticated, setUserIsAuthenticated] = useState(false);

    const checkUserAuthHandler = (accountID) => {
        const sessionUserUid = sessionStorage.getItem('uid');
        const sessionUserToken = sessionStorage.getItem('token');

        if( sessionUserUid === accountID && sessionUserToken !== "null") {
          setUserIsAuthenticated(true);

        } else {
          setUserIsAuthenticated(false);
          window.location.replace('/welcome');
        }
    }

    const quickUserAuthCheckHandler = (accountID) => {
      const sessionUserUid = sessionStorage.getItem('uid');

      return sessionUserUid === accountID && sessionUserToken !== "null";
    }

  return {
    userIsAuthenticated,
    checkUserAuthHandler,
    quickUserAuthCheckHandler
  }
}
