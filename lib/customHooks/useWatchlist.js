import {useState , useContext} from "react";

import { UserWatchlistContext } from "../userWatchlistContext";

export const useWatchlist = () => {
    const [watchlistIsLoading, setWatchlistIsLoading] = useState(false);
    const [watchlistError, setWatchlistError] = useState(false);
    
    const {userWatchlistHandler,userWatchlistMovies,userWatchlistTvShows} = useContext(UserWatchlistContext);
    
    const fetchUserWatchlistFromDB___Handler = async(accountID,type) => {
        try{
            setWatchlistIsLoading(true);
            setWatchlistError(false);

            const fetchShowsRes = await fetch(`https://fakehulu-default-rtdb.europe-west1.firebasedatabase.app/FakeUsersWatchlist/${accountID}/${type}.json`);

            if(!fetchShowsRes.ok){
                throw Error('something Went very Wrong');
                return;
            }

            const userWatchlistShows = await fetchShowsRes.json();

            let watchlistShowsArr = [];

            if(!!userWatchlistShows){
                for(const key in userWatchlistShows){
                    watchlistShowsArr.push(userWatchlistShows[key]);
                }
            }

            userWatchlistHandler(watchlistShowsArr , type);

            setWatchlistIsLoading(false);
            setWatchlistError(false);

        } catch(err){
            setWatchlistIsLoading(false);
            setWatchlistError(true);
        }
    }

    const storeShowToWatchlistDB___Handler = async(accountID, showDetails, type) => {
        try{
            setWatchlistIsLoading(true);
            setWatchlistError(false);

            const storeShowRes = await fetch(`https://fakehulu-default-rtdb.europe-west1.firebasedatabase.app/FakeUsersWatchlist/${accountID}/${type}.json`,{
                method:"POST",
                headers:{
                    'Content-Type': 'application/json'
                },
                body:JSON.stringify(showDetails)
            });

            if(!storeShowRes.ok){
                throw Error('something Went very Wrong');
                return;
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

            let updatedWatchlistData;
            if(type === "movies"){
                updatedWatchlistData = userWatchlistMovies.filter(userWatchlistMovie => userWatchlistMovie.id !== showID);
            }
            if(type === "tvShows"){
                updatedWatchlistData = userWatchlistTvShows.filter(userWatchlistTvShow => userWatchlistTvShow.id !== showID);
            }

            const storeShowRes = await fetch(`https://fakehulu-default-rtdb.europe-west1.firebasedatabase.app/FakeUsersWatchlist/${accountID}/${type}.json`,{
                method:"PUT",
                headers:{
                    'Content-Type': 'application/json'
                },
                body:JSON.stringify(updatedWatchlistData)
            });
            if(!storeShowRes.ok){
                throw Error('something Went very Wrong');
                return;
            }

            const storeShowData = await storeShowRes.json();
            
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