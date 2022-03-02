import {createContext ,useState} from "react";

export const GenresContext = createContext({
    movieGenres: null,
    tvShowGenres: null,
});

const GenresContextProvider = ({children}) => {
    const [movieGenres, setMovieGenres] = useState(null);
    const [tvShowGenres, setTvShowGenres] = useState(null);

    const fetchGenresHandler = async () => {
        const movieGenresRes = await fetch(
            `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&language=en-US`
        );
        const tvShowGenresRes = await fetch(
            `https://api.themoviedb.org/3/genre/tv/list?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&language=en-US`
        );

        if(movieGenresRes.ok){
            const movieGenresData = await movieGenresRes.json();
            setMovieGenres(movieGenresData.genres);
        }
        if(tvShowGenresRes.ok){
            const tvShowGenresData = await tvShowGenresRes.json();
            setTvShowGenres(tvShowGenresData.genres);
        }
    }

    const movieGenresHandler = async () => {
        const movieGenresRes = await fetch(
            `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&language=en-US`
        );

        if(movieGenresRes.ok){
            const movieGenresData = await movieGenresRes.json();
            setMovieGenres(movieGenresData.genres);
        }
    }
    const tvShowGenresHandler = async () => {
        const tvShowGenresRes = await fetch(
            `https://api.themoviedb.org/3/genre/tv/list?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&language=en-US`
        );

        if(tvShowGenresRes.ok){
            const tvShowGenresData = await tvShowGenresRes.json();
            setTvShowGenres(tvShowGenresData.genres);
        }
    }

    return <GenresContext.Provider value={{fetchGenresHandler ,movieGenresHandler,tvShowGenresHandler, movieGenres , tvShowGenres}}>
        {children}
    </GenresContext.Provider>
}

export default GenresContextProvider;