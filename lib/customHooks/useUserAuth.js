import {useState} from 'react';

export const useUserAuth = () => {
    const [userIsAuthenticated, setUserIsAuthenticated] = useState(false);

    const checkUserAuthHandler = (accountID) => {
        const userAuthChecker_1 = localStorage.getItem("loggedIn");
        const userAuthChecker_2 = localStorage.getItem("loggedInAccountID");

        if(userAuthChecker_1 && userAuthChecker_2 === accountID){
            setUserIsAuthenticated(true);
        } else {
            setUserIsAuthenticated(false);
            window.location.replace('/welcome');
        }
    }


    const quickUserAuthCheckHandler = (accountID) => {
      const userAuthChecker_1 = localStorage.getItem("loggedIn");
      const userAuthChecker_2 = localStorage.getItem("loggedInAccountID");

      return userAuthChecker_1 && userAuthChecker_2 === accountID
    }

  return {
    userIsAuthenticated,
    checkUserAuthHandler,
    quickUserAuthCheckHandler
  }
}
