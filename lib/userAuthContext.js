import {createContext ,useState} from "react";

export const UserAuthContext = createContext({
    userloggedIn:false,
    loggedInUserDetails: null
});

const UserAuthContextProvider = ({children}) => {
    const [userloggedIn, setUserloggedIn] = useState(false);
    const [loggedInUserDetails, setLoggedInUserDetails] = useState(null);

    const loginHandler = (userDetails) => {
        setUserloggedIn(true);
        setLoggedInUserDetails(userDetails);
        
        localStorage.setItem('loggedIn' , true);
        localStorage.setItem('loggedInAccountID' , userDetails.id);
    }

    const logoutHandler = () => {
        setUserloggedIn(false);
        setLoggedInUserDetails(null);

        localStorage.setItem('loggedIn' , false);
        localStorage.setItem('loggedInAccountID' , null);
    }

    return <UserAuthContext.Provider value={{
        userloggedIn,
        loggedInUserDetails,
        loginHandler,
        logoutHandler,
    }}>
        {children}
    </UserAuthContext.Provider>
}

export default UserAuthContextProvider;