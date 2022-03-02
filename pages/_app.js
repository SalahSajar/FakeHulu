import {Fragment} from "react";
import Head from "next/head";

import UserAuthContextProvider from "../lib/userAuthContext";
import SignupContextProvider from "../lib/signupContext";
import GenresContextProvider from "../lib/genresContext";
import SearchContextProvider from "../lib/searchContext";
import UserWatchlistContextProvider from "../lib/userWatchlistContext";

import "../style/Global.css";


function MyApp({Component , pageProps}) {
    
    return (
        <Fragment>
            <Head>
                <link rel="shortcut icon" href="/favicon.ico" />
            </Head>
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