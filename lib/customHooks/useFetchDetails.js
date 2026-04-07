import {useState} from "react";

import {InDevEnv} from "@lib/scripts/CheckIfInDevEnv";

export const useFetchDetails = (showType) => {

    const [accountHomePageShows,setAccountHomePageShows] = useState(null);
    const [showDetails, setShowDetails] = useState(null);
    const [showTrailerDetails, setShowTrailerDetails] = useState(null);
    const [similarShows,setSimilarShows ] = useState([]);
    const [actorDetails, setActorDetails] = useState(null);
    const [actorMovies, setActorMovies] = useState(null);
    const [actorTvShows, setActorTvShows] = useState(null);
    const [actorSocialMedia, setActorSocialMedia] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);

    const TMDb__API_KEY = InDevEnv ? process.env.NEXT_PUBLIC__TMDB__API_KEY : process.env.NEXT_PUBLIC_VERCEL_TMDB__API_KEY;

    const fetchShowDetailsHandler = async (showID) => {
        try{
            setIsLoading(true);
            setError(false);
            
            const showEndpoint =`https://api.themoviedb.org/3/${showType === "movie" ? "movie" : "tv"}/${showID}?api_key=${TMDb__API_KEY}&language=en-US`;
            const similarShowsEndpoint =`https://api.themoviedb.org/3/${showType === "movie" ? "movie" : "tv"}/${showID}/recommendations?api_key=${TMDb__API_KEY}&language=en-US&page=1`;
            const showVideosEndPoint = `https://api.themoviedb.org/3/${showType === "movie" ? "movie" : "tv"}/${showID}/videos?api_key=${TMDb__API_KEY}&language=en-US`

            const showDetailsRes = await fetch(showEndpoint);
            const similarShowsRes = await fetch(similarShowsEndpoint);
            const showVideosRes = await fetch(showVideosEndPoint);
            
            if(!showDetailsRes.ok || !showVideosRes.ok || !similarShowsRes.ok){
                
                throw Error("Something Went Wrong , Soooooooo Try Again Later");
                return ;
            }

            const showDetailsData = await showDetailsRes.json();
            const similarShowsData = await similarShowsRes.json();
            const showVideosData = await showVideosRes.json();

            const trailerKey = showVideosData.results.find(showVideo => showVideo.type.toLowerCase() == "trailer"); 
            
            setShowDetails(showDetailsData);
            setSimilarShows(similarShowsData.results);
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

            const actorDetailsRes = await fetch(`https://api.themoviedb.org/3/person/${actorID}?api_key=${TMDb__API_KEY}&language=en-US`);
            const actorMoviesRes = await fetch(`https://api.themoviedb.org/3/person/${actorID}/movie_credits?api_key=${TMDb__API_KEY}&language=en-US`);
            const actorTvShowsRes = await fetch(`https://api.themoviedb.org/3/person/${actorID}/tv_credits?api_key=${TMDb__API_KEY}&language=en-US`);
            const actorSocialMediaRes = await fetch(`https://api.themoviedb.org/3/person/${actorID}/external_ids?api_key=${TMDb__API_KEY}&language=en-US`);
            
            if(!actorDetailsRes.ok || !actorMoviesRes.ok || !actorTvShowsRes.ok || !actorSocialMediaRes.ok){
                
                throw Error("Something Went Wrong , Soooooooo Try Again Later");
                return;
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


            console.log("---- ActorDetailsData");
            console.log(actorDetailsData);
            console.log("---- ActorMoviesData");
            console.log(actorMoviesData);
            console.log("---- FixedTvShowsData");
            console.log(fixedTvShowsData);
            console.log("---- ActorSocialMediaData");
            console.log(actorSocialMediaData);

            setIsLoading(false);
            setError(false);

        } catch (err){
            console.log(err);
            setError(true);
            setIsLoading(false);
        }
    }

    const fetchAccountHomePageShowsHandler = async () => {
        const year = new Date().getFullYear() - 1;

        try{
            setIsLoading(true);
            setError(false);

            const trendingMoviesRes = await fetch(
                `https://api.themoviedb.org/3/trending/movie/day?api_key=${TMDb__API_KEY}`
            );
            const trendingTvShowsRes = await fetch(
                `https://api.themoviedb.org/3/trending/tv/day?api_key=${TMDb__API_KEY}`
            );

            const topRatedMoviesRes = await fetch(
                `https://api.themoviedb.org/3/discover/movie?api_key=${TMDb__API_KEY}&include_adult=false&language=en-US&page=1&sort_by=vote_count.desc`
            );

            const topRatedTvShowsRes = await fetch(
                `https://api.themoviedb.org/3/discover/tv?api_key=${TMDb__API_KEY}&include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=vote_count.desc&without_genres=news|documentary|talk`
            );
            

            if(!trendingMoviesRes.ok || !trendingTvShowsRes.ok || !topRatedMoviesRes.ok || !topRatedTvShowsRes.ok){
                throw Error("Something Went Wrong. Please try again Later.")
                return;
            }

            const trendingMovies = await trendingMoviesRes.json();
            const trendingTvShows = await trendingTvShowsRes.json();

            const topRatedMovies = await topRatedMoviesRes.json();
            const topRatedTvShows = await topRatedTvShowsRes.json();

            setAccountHomePageShows({
                trendingMovies,
                trendingTvShows,
                topRatedMovies,
                topRatedTvShows,
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
        similarShows,
        showTrailerDetails,
        actorDetails,
        actorMovies,
        actorTvShows,
        actorSocialMedia,
        isLoading,
        error
    }
}