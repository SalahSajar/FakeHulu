import {createContext ,useState} from "react";

export const UserWatchlistContext = createContext({
    userWatchlistMovies:null,
    userWatchlistTvShows:null,
});

const UserWatchlistContextProvider = ({children}) => {
    const [userWatchlistMovies, setUserWatchlistMovies] = useState(null);
    const [userWatchlistTvShows, setUserWatchlistTvShows] = useState(null);

    const userWatchlistHandler = (watchlist, type) => {
        if(type === "movies") setUserWatchlistMovies(watchlist);
        if(type === "tvShows") setUserWatchlistTvShows(watchlist);
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