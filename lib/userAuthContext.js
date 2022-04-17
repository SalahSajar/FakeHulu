import {createContext ,useState} from "react";

export const UserAuthContext = createContext({
    userloggedIn:false,
    loggedInUserDetails: null
});

const UserAuthContextProvider = ({children}) => {
    const [userloggedIn, setUserloggedIn] = useState(false);
    const [loggedInUserDetails, setLoggedInUserDetails] = useState(null);

    const logoutHandler = () => {
        setUserloggedIn(false);
        setLoggedInUserDetails(null);

        sessionStorage.setItem('uid' , null);
        sessionStorage.setItem('token' , null);
    }

    return <UserAuthContext.Provider value={{
        userloggedIn,
        loggedInUserDetails,
        logoutHandler,
    }}>
        {children}
    </UserAuthContext.Provider>
}

export default UserAuthContextProvider;