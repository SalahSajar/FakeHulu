import {useState} from 'react';

import { auth } from '../configs/firebaseConfig';

export const useUserAuth = () => {
    const [userIsAuthenticated, setUserIsAuthenticated] = useState(false);

    const checkUserAuthHandler = (accountID) => {
        const sessionUserUid = sessionStorage.getItem('uid');
        const sessionUserToken = sessionStorage.getItem('token');
        const userAuthUid = auth.currentUser.uid;
        const userAuthToken = auth.currentUser.accessToken;

        if(userAuthUid === accountID) {
          setUserIsAuthenticated(true);

          if(sessionUserUid !== userAuthUid || sessionUserToken !== userAuthToken){
            sessionStorage.setItem('uid' , userAuthUid);
            sessionStorage.setItem('token' , userAuthToken);
          }
        } else {
          setUserIsAuthenticated(false);
          window.location.replace('/welcome');
        }
    }

    const quickUserAuthCheckHandler = (accountID) => {
      const sessionUserUid = sessionStorage.getItem('uid');
      const sessionUserToken = sessionStorage.getItem('token');
      // const userAuthUid = auth.currentUser.uid;
      // const userAuthToken = auth.currentUser.accessToken;

      return sessionUserUid === accountID && sessionUserToken !== "null";
    }

  return {
    userIsAuthenticated,
    checkUserAuthHandler,
    quickUserAuthCheckHandler
  }
}
