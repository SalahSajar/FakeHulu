"use strict";
exports.id = 537;
exports.ids = [537];
exports.modules = {

/***/ 4537:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "U": () => (/* binding */ GenresContext),
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const GenresContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({
    movieGenres: null,
    tvShowGenres: null
});
const GenresContextProvider = ({ children  })=>{
    const { 0: movieGenres , 1: setMovieGenres  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const { 0: tvShowGenres , 1: setTvShowGenres  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const fetchGenresHandler = async ()=>{
        const movieGenresRes = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${"657e51592b92e407833dfe0fdc0a408a"}&language=en-US`);
        const tvShowGenresRes = await fetch(`https://api.themoviedb.org/3/genre/tv/list?api_key=${"657e51592b92e407833dfe0fdc0a408a"}&language=en-US`);
        if (movieGenresRes.ok) {
            const movieGenresData = await movieGenresRes.json();
            setMovieGenres(movieGenresData.genres);
        }
        if (tvShowGenresRes.ok) {
            const tvShowGenresData = await tvShowGenresRes.json();
            setTvShowGenres(tvShowGenresData.genres);
        }
    };
    const movieGenresHandler = async ()=>{
        const movieGenresRes = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${"657e51592b92e407833dfe0fdc0a408a"}&language=en-US`);
        if (movieGenresRes.ok) {
            const movieGenresData = await movieGenresRes.json();
            setMovieGenres(movieGenresData.genres);
        }
    };
    const tvShowGenresHandler = async ()=>{
        const tvShowGenresRes = await fetch(`https://api.themoviedb.org/3/genre/tv/list?api_key=${"657e51592b92e407833dfe0fdc0a408a"}&language=en-US`);
        if (tvShowGenresRes.ok) {
            const tvShowGenresData = await tvShowGenresRes.json();
            setTvShowGenres(tvShowGenresData.genres);
        }
    };
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(GenresContext.Provider, {
        value: {
            fetchGenresHandler,
            movieGenresHandler,
            tvShowGenresHandler,
            movieGenres,
            tvShowGenres
        },
        children: children
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GenresContextProvider);


/***/ })

};
;