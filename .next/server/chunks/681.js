"use strict";
exports.id = 681;
exports.ids = [681];
exports.modules = {

/***/ 8681:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "c": () => (/* binding */ SearchContext),
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const SearchContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({
    showsFounded: [],
    actorsFounded: [],
    loading: null,
    error: null
});
const SearchContextProvider = ({ children  })=>{
    const { 0: showsFounded , 1: setShowsFounded  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const { 0: actorsFounded , 1: setActorsFounded  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const { 0: loading , 1: setLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: error , 1: setError  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const searchHandler = async (searchValue, type)=>{
        try {
            setError(false);
            setLoading(true);
            const searchRes = await fetch(`https://api.themoviedb.org/3/search/${type}?api_key=${"657e51592b92e407833dfe0fdc0a408a"}&language=en-US&page=1&query=${searchValue}&include_adult=false`);
            if (!searchRes.ok) {
                throw Error("Something Went Wrong");
                return;
            }
            let searchData = await searchRes.json();
            if (type === "person") setActorsFounded(()=>searchData.results.filter((searchDataItem)=>searchDataItem.known_for_department.toLowerCase() === "acting"
                )
            );
            if (type !== "person") setShowsFounded(searchData.results.sort((a, b)=>b.popularity - a.popularity
            ));
            setError(false);
            setLoading(false);
        } catch (err) {
            setError(true);
            setLoading(false);
            console.log(err);
        }
    };
    const searchMostPapularActors = async ()=>{
        try {
            setError(false);
            setLoading(true);
            const popularActorsRes = await fetch(`https://api.themoviedb.org/3/person/popular?api_key=${"657e51592b92e407833dfe0fdc0a408a"}&language=en-US&page=1`);
            if (!popularActorsRes.ok) {
                throw Error("Something Went Wrong");
                return;
            }
            const popularActors = await popularActorsRes.json();
            setError(false);
            setLoading(false);
            setActorsFounded(()=>{
                return popularActors.results.filter((popularActor)=>popularActor.known_for_department.toLowerCase() === "acting"
                );
            });
        } catch (err) {
            setError(true);
            setLoading(false);
            console.log(err);
        }
    };
    const searchTrendingShows = async (type)=>{
        try {
            setError(false);
            setLoading(true);
            const trendingShowsRes = await fetch(`https://api.themoviedb.org/3/trending/${type}/week?api_key=${"657e51592b92e407833dfe0fdc0a408a"}`);
            if (!trendingShowsRes.ok) {
                throw Error("Something Went Wrong");
                return;
            }
            const trendingShowsData = await trendingShowsRes.json();
            setError(false);
            setLoading(false);
            setShowsFounded(trendingShowsData.results);
        } catch (err) {
            setError(true);
            setLoading(false);
            console.log(err);
        }
    };
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SearchContext.Provider, {
        value: {
            showsFounded,
            actorsFounded,
            loading,
            error,
            searchHandler,
            searchMostPapularActors,
            searchTrendingShows
        },
        children: children
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SearchContextProvider);


/***/ })

};
;