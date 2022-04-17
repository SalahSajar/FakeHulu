import {createContext ,useState} from "react";

export const UserWatchlistContext = createContext({
    userWatchlistMovies:null,
    userWatchlistTvShows:null,
});

const UserWatchlistContextProvider = ({children}) => {
    const [userWatchlistMovies, setUserWatchlistMovies] = useState(null);
    const [userWatchlistTvShows, setUserWatchlistTvShows] = useState(null);

    const userWatchlistHandler = (userDetails, type) => {
        
        if(type === "movies") setUserWatchlistMovies(userDetails.watchlist.movies);
        if(type === "tvShows") setUserWatchlistTvShows(userDetails.watchlist.tvShows);
    }
    
    return <UserWatchlistContext.Provider value={{
        userWatchlistMovies,
        userWatchlistTvShows,
        userWatchlistHandler,
    }}>
        {children}
    </UserWatchlistContext.Provider>
}

export default UserWatchlistContextProvider;