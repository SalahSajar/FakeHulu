import {Fragment} from "react";

import UserAuthContextProvider from "../lib/userAuthContext";
import SignupContextProvider from "../lib/signupContext";
import GenresContextProvider from "../lib/genresContext";
import SearchContextProvider from "../lib/searchContext";
import UserWatchlistContextProvider from "../lib/userWatchlistContext";

import "../style/Global.css";

function MyApp({Component , pageProps}) {
    return (
        <Fragment>
            <UserWatchlistContextProvider>
                <SearchContextProvider>
                    <GenresContextProvider>
                        <UserAuthContextProvider>
                            <SignupContextProvider>
                                <Component {...pageProps} />
                            </SignupContextProvider>
                        </UserAuthContextProvider>
                    </GenresContextProvider>
                </SearchContextProvider>
            </UserWatchlistContextProvider>
        </Fragment>
    )
}

export default MyApp;