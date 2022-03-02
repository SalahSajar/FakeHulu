"use strict";
exports.id = 724;
exports.ids = [724];
exports.modules = {

/***/ 724:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "B": () => (/* binding */ useWatchlist)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _userWatchlistContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9716);


const useWatchlist = ()=>{
    const { 0: watchlistIsLoading , 1: setWatchlistIsLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const { 0: watchlistError , 1: setWatchlistError  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const { userWatchlistHandler , userWatchlistMovies , userWatchlistTvShows  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_userWatchlistContext__WEBPACK_IMPORTED_MODULE_1__/* .UserWatchlistContext */ .m);
    const fetchUserWatchlistFromDB___Handler = async (accountID, type)=>{
        try {
            setWatchlistIsLoading(true);
            setWatchlistError(false);
            const fetchShowsRes = await fetch(`https://fakehulu-default-rtdb.europe-west1.firebasedatabase.app/FakeUsersWatchlist/${accountID}/${type}.json`);
            if (!fetchShowsRes.ok) {
                throw Error('something Went very Wrong');
                return;
            }
            const userWatchlistShows = await fetchShowsRes.json();
            let watchlistShowsArr = [];
            if (!!userWatchlistShows) {
                for(const key in userWatchlistShows){
                    watchlistShowsArr.push(userWatchlistShows[key]);
                }
            }
            userWatchlistHandler(watchlistShowsArr, type);
            setWatchlistIsLoading(false);
            setWatchlistError(false);
        } catch (err) {
            setWatchlistIsLoading(false);
            setWatchlistError(true);
        }
    };
    const storeShowToWatchlistDB___Handler = async (accountID, showDetails, type)=>{
        try {
            setWatchlistIsLoading(true);
            setWatchlistError(false);
            const storeShowRes = await fetch(`https://fakehulu-default-rtdb.europe-west1.firebasedatabase.app/FakeUsersWatchlist/${accountID}/${type}.json`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(showDetails)
            });
            if (!storeShowRes.ok) {
                throw Error('something Went very Wrong');
                return;
            }
            setWatchlistIsLoading(false);
            setWatchlistError(false);
            fetchUserWatchlistFromDB___Handler(accountID, type);
        } catch (err) {
            setWatchlistIsLoading(false);
            setWatchlistError(true);
        }
    };
    const removeShowFromWatchlistDB___Handler = async (accountID, showID, type)=>{
        try {
            setWatchlistIsLoading(true);
            setWatchlistError(false);
            let updatedWatchlistData;
            if (type === "movies") {
                updatedWatchlistData = userWatchlistMovies.filter((userWatchlistMovie)=>userWatchlistMovie.id !== showID
                );
            }
            if (type === "tvShows") {
                updatedWatchlistData = userWatchlistTvShows.filter((userWatchlistTvShow)=>userWatchlistTvShow.id !== showID
                );
            }
            const storeShowRes = await fetch(`https://fakehulu-default-rtdb.europe-west1.firebasedatabase.app/FakeUsersWatchlist/${accountID}/${type}.json`, {
                method: "PUT",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(updatedWatchlistData)
            });
            if (!storeShowRes.ok) {
                throw Error('something Went very Wrong');
                return;
            }
            const storeShowData = await storeShowRes.json();
            setWatchlistIsLoading(false);
            setWatchlistError(false);
            fetchUserWatchlistFromDB___Handler(accountID, type);
        } catch (err) {
            setWatchlistIsLoading(false);
            setWatchlistError(true);
        }
    };
    return {
        fetchUserWatchlistFromDB___Handler,
        storeShowToWatchlistDB___Handler,
        removeShowFromWatchlistDB___Handler,
        watchlistIsLoading,
        watchlistError
    };
};


/***/ }),

/***/ 9716:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "m": () => (/* binding */ UserWatchlistContext),
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const UserWatchlistContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({
    userWatchlistMovies: null,
    userWatchlistTvShows: null
});
const UserWatchlistContextProvider = ({ children  })=>{
    const { 0: userWatchlistMovies , 1: setUserWatchlistMovies  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const { 0: userWatchlistTvShows , 1: setUserWatchlistTvShows  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const userWatchlistHandler = (watchlist, type)=>{
        if (type === "movies") setUserWatchlistMovies(watchlist);
        if (type === "tvShows") setUserWatchlistTvShows(watchlist);
    };
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(UserWatchlistContext.Provider, {
        value: {
            userWatchlistMovies,
            userWatchlistTvShows,
            userWatchlistHandler
        },
        children: children
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UserWatchlistContextProvider);


/***/ })

};
;