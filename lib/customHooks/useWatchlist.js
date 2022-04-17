import {useState , useContext} from "react";

import { db } from "../configs/firebaseConfig";

import {collection, doc, updateDoc , setDoc ,getDoc} from "firebase/firestore";

import { UserWatchlistContext } from "../userWatchlistContext";

export const useWatchlist = () => {
    const [watchlistIsLoading, setWatchlistIsLoading] = useState(false);
    const [watchlistError, setWatchlistError] = useState(false);
    
    const {userWatchlistHandler,userWatchlistMovies,userWatchlistTvShows} = useContext(UserWatchlistContext);
    
    const fetchUserWatchlistFromDB___Handler = async(accountID,type) => {
        try{
            setWatchlistIsLoading(true);
            setWatchlistError(false);

            const userWatchlist_ref = doc(db, "users", accountID);
            const fetchUserDetails_res = await getDoc(userWatchlist_ref);
            const fetchUserDetails_Data = fetchUserDetails_res.data();

            userWatchlistHandler(fetchUserDetails_Data , type);
            
            setWatchlistIsLoading(false);
            setWatchlistError(false);
        } catch(err) {
            setWatchlistIsLoading(false);
            setWatchlistError(true);
        }
    }

    const storeShowToWatchlistDB___Handler = async(accountID, showDetails, type) => {
        try{
            setWatchlistIsLoading(true);
            setWatchlistError(false);

            const userWatchlist_ref = doc(db, "users", accountID);
            const fetchUserDetails_res = await getDoc(userWatchlist_ref);
            const fetchUserDetails_Data = fetchUserDetails_res.data();

            let updatedUserShowsWatchList;
            
            if(type === "movies"){
                updatedUserShowsWatchList = [...fetchUserDetails_Data.watchlist.movies, showDetails];
                
                await setDoc(userWatchlist_ref, {...fetchUserDetails_Data, watchlist: {movies: updatedUserShowsWatchList,tvShows: [...fetchUserDetails_Data.watchlist.tvShows]}})
            }
            if(type === "tvShows"){
                updatedUserShowsWatchList = [...fetchUserDetails_Data.watchlist.tvShows, showDetails];
                
                await setDoc(userWatchlist_ref, {...fetchUserDetails_Data, watchlist: {movies: [...fetchUserDetails_Data.watchlist.movies],tvShows: updatedUserShowsWatchList}})
            }

            setWatchlistIsLoading(false);
            setWatchlistError(false);

            fetchUserWatchlistFromDB___Handler(accountID, type);
        } catch(err){
            setWatchlistIsLoading(false);
            setWatchlistError(true);
        }
    }
    
    const removeShowFromWatchlistDB___Handler = async(accountID, showID, type) => {
        try{
            setWatchlistIsLoading(true);
            setWatchlistError(false);

            const userWatchlist_ref = doc(db, "users", accountID);
            const fetchUserDetails_res = await getDoc(userWatchlist_ref);
            const fetchUserDetails_Data = fetchUserDetails_res.data();

            let updatedWatchlistData;

            if(type === "movies"){
                updatedWatchlistData = userWatchlistMovies.filter(userWatchlistMovie => userWatchlistMovie.id !== showID);
                
                await setDoc(userWatchlist_ref, {...fetchUserDetails_Data, watchlist: {movies:updatedWatchlistData ,tvShows: [...fetchUserDetails_Data.watchlist.tvShows]}})
            }
            if(type === "tvShows"){
                updatedWatchlistData = userWatchlistTvShows.filter(userWatchlistTvShow => userWatchlistTvShow.id !== showID);
                
                await setDoc(userWatchlist_ref, {...fetchUserDetails_Data, watchlist: {movies: [...fetchUserDetails_Data.watchlist.movies],tvShows: updatedWatchlistData}})
            }
            
            
            setWatchlistIsLoading(false);
            setWatchlistError(false);

            fetchUserWatchlistFromDB___Handler(accountID, type);
        } catch(err){
            setWatchlistIsLoading(false);
            setWatchlistError(true);
        }
    }


    return {
        fetchUserWatchlistFromDB___Handler,
        storeShowToWatchlistDB___Handler,
        removeShowFromWatchlistDB___Handler,
        watchlistIsLoading,
        watchlistError
    }
}