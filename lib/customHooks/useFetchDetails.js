import {useState} from "react";

export const useFetchDetails = (showType) => {
    const [accountHomePageShows,setAccountHomePageShows] = useState(null);
    const [showDetails, setShowDetails] = useState(null);
    const [showTrailerDetails, setShowTrailerDetails] = useState(null);
    const [simularShows,setSimularShows ] = useState([]);
    const [actorDetails, setActorDetails] = useState(null);
    const [actorMovies, setActorMovies] = useState(null);
    const [actorTvShows, setActorTvShows] = useState(null);
    const [actorSocialMedia, setActorSocialMedia] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);

    const fetchShowDetailsHandler = async (showID) => {
        try{
            setIsLoading(true);
            setError(false);
            
            const showEndpoint =`https://api.themoviedb.org/3/${showType === "movie" ? "movie" : "tv"}/${showID}?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY || process.env.NEXT_PUBLIC_VERCEL_TMDB_API_KEY}&language=en-US`;
            const simularShowsEndpoint =`https://api.themoviedb.org/3/${showType === "movie" ? "movie" : "tv"}/${showID}/recommendations?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY || process.env.NEXT_PUBLIC_VERCEL_TMDB_API_KEY}&language=en-US&page=1`;
            const showVideosEndPoint = `https://api.themoviedb.org/3/${showType === "movie" ? "movie" : "tv"}/${showID}/videos?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY || process.env.NEXT_PUBLIC_VERCEL_TMDB_API_KEY}&language=en-US`

            const showDetailsRes = await fetch(showEndpoint);
            const simularShowsRes = await fetch(simularShowsEndpoint);
            const showVideosRes = await fetch(showVideosEndPoint);
            
            if(!showDetailsRes.ok || !showVideosRes.ok || !simularShowsRes.ok){
                
                throw Error("Something Went Wrong , Soooooooo Try Again Later");
                return ;
            }

            const showDetailsData = await showDetailsRes.json();
            const simularShowsData = await simularShowsRes.json();
            const showVideosData = await showVideosRes.json();

            const trailerKey = showVideosData.results.find(showVideo => showVideo.type.toLowerCase() == "trailer"); 
            
            setShowDetails(showDetailsData);
            setSimularShows(simularShowsData.results);
            setShowTrailerDetails(trailerKey);

            setIsLoading(false);
            setError(false);

        } catch (err){
            console.log(err);
            setError(true);
            setIsLoading(false);
        }
    }

    const fetchActorDetailsHandler = async (actorID) => {
        try{
            setIsLoading(true);
            setError(false);

            const actorDetailsRes = await fetch(`https://api.themoviedb.org/3/person/${actorID}?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY || process.env.NEXT_PUBLIC_VERCEL_TMDB_API_KEY}&language=en-US`);
            const actorMoviesRes = await fetch(`https://api.themoviedb.org/3/person/${actorID}/movie_credits?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY || process.env.NEXT_PUBLIC_VERCEL_TMDB_API_KEY}&language=en-US`);
            const actorTvShowsRes = await fetch(`https://api.themoviedb.org/3/person/${actorID}/tv_credits?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY || process.env.NEXT_PUBLIC_VERCEL_TMDB_API_KEY}&language=en-US`);
            const actorSocialMediaRes = await fetch(`https://api.themoviedb.org/3/person/${actorID}/external_ids?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY || process.env.NEXT_PUBLIC_VERCEL_TMDB_API_KEY}&language=en-US`);
            
            if(!actorDetailsRes.ok || !actorMoviesRes.ok || !actorTvShowsRes.ok || !actorSocialMediaRes.ok){
                
                throw Error("Something Went Wrong , Soooooooo Try Again Later");
                return ;
            }

            const actorDetailsData = await actorDetailsRes.json();
            const actorMoviesData = await actorMoviesRes.json();
            const actorTvShowsData = await actorTvShowsRes.json();
            const actorSocialMediaData = await actorSocialMediaRes.json();

            const fixedTvShowsData = actorTvShowsData.cast.reduce((acc,actorTvShow) => {
                const itemFounded = acc.find(item => item.id === actorTvShow.id);

                if(!itemFounded) acc.push(actorTvShow);
                return acc;
            },[]);

            setActorDetails(actorDetailsData);
            setActorMovies(actorMoviesData.cast);
            setActorTvShows(fixedTvShowsData);
            setActorSocialMedia(actorSocialMediaData);

            setIsLoading(false);
            setError(false);

        } catch (err){
            console.log(err);
            setError(true);
            setIsLoading(false);
        }
    }

    const fetchAccountHomePageShowsHandler = async () => {

        try{
            setIsLoading(true);
            setError(false);

            const trendingMoviesRes = await fetch(
                `https://api.themoviedb.org/3/trending/movie/day?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY || process.env.NEXT_PUBLIC_VERCEL_TMDB_API_KEY}`
            );
            const trendingTvShowsRes = await fetch(
                `https://api.themoviedb.org/3/trending/tv/day?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY || process.env.NEXT_PUBLIC_VERCEL_TMDB_API_KEY}`
            );
            const bestMoviesOf2021Res = await fetch(
                `https://api.themoviedb.org/3/discover/movie?api_key=${
                process.env.NEXT_PUBLIC_TMDB_API_KEY || process.env.NEXT_PUBLIC_VERCEL_TMDB_API_KEY
                }&language=en-US&sort_by=popularity.desc&include_adult=false&page=1&primary_release_year=${
                new Date().getFullYear() - 1
                }&with_watch_monetization_types=flatrate`
            );
            const bestTvShowsOf2021Res = await fetch(
                `https://api.themoviedb.org/3/discover/tv?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY || process.env.NEXT_PUBLIC_VERCEL_TMDB_API_KEY}&language=en-US&sort_by=popularity.desc&first_air_date_year=2021&page=1&include_null_first_air_dates=false&with_watch_monetization_types=flatrate&with_status=0&with_type=0`
            );
            

            if(!trendingMoviesRes.ok || !trendingTvShowsRes.ok || !bestMoviesOf2021Res.ok || !bestTvShowsOf2021Res.ok){
                throw Error("Something Went Wrong. Please try again Later.")
                return;
            }

            const trendingMovies = await trendingMoviesRes.json();
            const trendingTvShows = await trendingTvShowsRes.json();

            const bestMoviesOf2021 = await bestMoviesOf2021Res.json();
            const bestTvShowsOf2021 = await bestTvShowsOf2021Res.json();

            setAccountHomePageShows({
                trendingMovies,
                trendingTvShows,
                bestMoviesOf2021,
                bestTvShowsOf2021,
            })

            setIsLoading(false);
            setError(false);

        } catch (err){
            console.log(err);
            setError(true);
            setIsLoading(false);
        }
    }

    return {
        fetchAccountHomePageShowsHandler,
        fetchShowDetailsHandler,
        fetchActorDetailsHandler,
        accountHomePageShows,
        showDetails,
        simularShows,
        showTrailerDetails,
        actorDetails,
        actorMovies,
        actorTvShows,
        actorSocialMedia,
        isLoading,
        error
    }
}