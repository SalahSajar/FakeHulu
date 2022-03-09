import {Fragment, useEffect} from "react";
import Head from "next/head";

import UserAuthContextProvider from "../lib/userAuthContext";
import SignupContextProvider from "../lib/signupContext";
import GenresContextProvider from "../lib/genresContext";
import SearchContextProvider from "../lib/searchContext";
import UserWatchlistContextProvider from "../lib/userWatchlistContext";

import "../style/Global.css";


function MyApp({Component , pageProps}) {
    
    useEffect(() => {
        if("serviceWorker" in navigator){
            navigator.serviceWorker.register("/service-worker.js")
        }
    })

    return (
        <Fragment>
            <Head>
                <link rel="manifest" href="/manifest.json" />
                <link rel="shortcut icon" href="/favicon.ico" />
                <link rel="apple-touch-icon" href="/icons/manifest-icon-192.maskable.png"/>
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