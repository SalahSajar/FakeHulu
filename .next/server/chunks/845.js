"use strict";
exports.id = 845;
exports.ids = [845];
exports.modules = {

/***/ 1845:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "E": () => (/* binding */ useFetchDetails)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const useFetchDetails = (showType)=>{
    const { 0: accountHomePageShows , 1: setAccountHomePageShows  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
    const { 0: showDetails , 1: setShowDetails  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
    const { 0: showTrailerDetails , 1: setShowTrailerDetails  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
    const { 0: simularShows , 1: setSimularShows  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
    const { 0: actorDetails , 1: setActorDetails  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
    const { 0: actorMovies , 1: setActorMovies  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
    const { 0: actorTvShows , 1: setActorTvShows  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
    const { 0: actorSocialMedia , 1: setActorSocialMedia  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
    const { 0: isLoading , 1: setIsLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const { 0: error , 1: setError  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const fetchShowDetailsHandler = async (showID)=>{
        try {
            setIsLoading(true);
            setError(false);
            const showEndpoint = `https://api.themoviedb.org/3/${showType === "movie" ? "movie" : "tv"}/${showID}?api_key=${"657e51592b92e407833dfe0fdc0a408a"}&language=en-US`;
            const simularShowsEndpoint = `https://api.themoviedb.org/3/${showType === "movie" ? "movie" : "tv"}/${showID}/recommendations?api_key=${"657e51592b92e407833dfe0fdc0a408a"}&language=en-US&page=1`;
            const showVideosEndPoint = `https://api.themoviedb.org/3/${showType === "movie" ? "movie" : "tv"}/${showID}/videos?api_key=${"657e51592b92e407833dfe0fdc0a408a"}&language=en-US`;
            const showDetailsRes = await fetch(showEndpoint);
            const simularShowsRes = await fetch(simularShowsEndpoint);
            const showVideosRes = await fetch(showVideosEndPoint);
            if (!showDetailsRes.ok || !showVideosRes.ok || !simularShowsRes.ok) {
                throw Error("Something Went Wrong , Soooooooo Try Again Later");
                return;
            }
            const showDetailsData = await showDetailsRes.json();
            const simularShowsData = await simularShowsRes.json();
            const showVideosData = await showVideosRes.json();
            const trailerKey = showVideosData.results.find((showVideo)=>showVideo.type.toLowerCase() == "trailer"
            );
            setShowDetails(showDetailsData);
            setSimularShows(simularShowsData.results);
            setShowTrailerDetails(trailerKey);
            setIsLoading(false);
            setError(false);
        } catch (err) {
            console.log(err);
            setError(true);
            setIsLoading(false);
        }
    };
    const fetchActorDetailsHandler = async (actorID)=>{
        try {
            setIsLoading(true);
            setError(false);
            const actorDetailsRes = await fetch(`https://api.themoviedb.org/3/person/${actorID}?api_key=${"657e51592b92e407833dfe0fdc0a408a"}&language=en-US`);
            const actorMoviesRes = await fetch(`https://api.themoviedb.org/3/person/${actorID}/movie_credits?api_key=${"657e51592b92e407833dfe0fdc0a408a"}&language=en-US`);
            const actorTvShowsRes = await fetch(`https://api.themoviedb.org/3/person/${actorID}/tv_credits?api_key=${"657e51592b92e407833dfe0fdc0a408a"}&language=en-US`);
            const actorSocialMediaRes = await fetch(`https://api.themoviedb.org/3/person/${actorID}/external_ids?api_key=${"657e51592b92e407833dfe0fdc0a408a"}&language=en-US`);
            if (!actorDetailsRes.ok || !actorMoviesRes.ok || !actorTvShowsRes.ok || !actorSocialMediaRes.ok) {
                throw Error("Something Went Wrong , Soooooooo Try Again Later");
                return;
            }
            const actorDetailsData = await actorDetailsRes.json();
            const actorMoviesData = await actorMoviesRes.json();
            const actorTvShowsData = await actorTvShowsRes.json();
            const actorSocialMediaData = await actorSocialMediaRes.json();
            const fixedTvShowsData = actorTvShowsData.cast.reduce((acc, actorTvShow)=>{
                const itemFounded = acc.find((item)=>item.id === actorTvShow.id
                );
                if (!itemFounded) acc.push(actorTvShow);
                return acc;
            }, []);
            setActorDetails(actorDetailsData);
            setActorMovies(actorMoviesData.cast);
            setActorTvShows(fixedTvShowsData);
            setActorSocialMedia(actorSocialMediaData);
            setIsLoading(false);
            setError(false);
        } catch (err) {
            console.log(err);
            setError(true);
            setIsLoading(false);
        }
    };
    const fetchAccountHomePageShowsHandler = async ()=>{
        try {
            setIsLoading(true);
            setError(false);
            const trendingMoviesRes = await fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=${"657e51592b92e407833dfe0fdc0a408a"}`);
            const trendingTvShowsRes = await fetch(`https://api.themoviedb.org/3/trending/tv/day?api_key=${"657e51592b92e407833dfe0fdc0a408a"}`);
            const bestMoviesOf2021Res = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${"657e51592b92e407833dfe0fdc0a408a"}&language=en-US&sort_by=popularity.desc&include_adult=false&page=1&primary_release_year=${new Date().getFullYear() - 1}&with_watch_monetization_types=flatrate`);
            const bestTvShowsOf2021Res = await fetch(`https://api.themoviedb.org/3/discover/tv?api_key=${"657e51592b92e407833dfe0fdc0a408a"}&language=en-US&sort_by=popularity.desc&first_air_date_year=2021&page=1&include_null_first_air_dates=false&with_watch_monetization_types=flatrate&with_status=0&with_type=0`);
            if (!trendingMoviesRes.ok || !trendingTvShowsRes.ok || !bestMoviesOf2021Res.ok || !bestTvShowsOf2021Res.ok) {
                throw Error("Something Went Wrong. Please try again Later.");
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
                bestTvShowsOf2021
            });
            setIsLoading(false);
            setError(false);
        } catch (err) {
            console.log(err);
            setError(true);
            setIsLoading(false);
        }
    };
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
    };
};


/***/ })

};
;