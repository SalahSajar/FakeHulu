exports.id = 746;
exports.ids = [746];
exports.modules = {

/***/ 3869:
/***/ ((module) => {

// Exports
module.exports = {
	"search--BLOCK": "SearchLayout_search--BLOCK__8ksy_",
	"search_header--WRAPPER": "SearchLayout_search_header--WRAPPER__bKZg_",
	"search_header_content--CONTAINER": "SearchLayout_search_header_content--CONTAINER__U_53l",
	"search_form--EL": "SearchLayout_search_form--EL____6Tt",
	"search_form_content--WRAPPER": "SearchLayout_search_form_content--WRAPPER__7msq7",
	"search_input--EL": "SearchLayout_search_input--EL__V54CP",
	"search_form_submit--BTN": "SearchLayout_search_form_submit--BTN__PdZGT",
	"defaultSearch--BTN": "SearchLayout_defaultSearch--BTN__GE_L8"
};


/***/ }),

/***/ 1327:
/***/ ((module) => {

// Exports
module.exports = {
	"error_modal--EL": "movies_error_modal--EL__hfEzd",
	"error_content_block--EL": "movies_error_content_block--EL__YwtVH"
};


/***/ }),

/***/ 7155:
/***/ ((module) => {

// Exports
module.exports = {
	"searchResults--CONTAINER": "searchResultsModal_searchResults--CONTAINER__zcS0t",
	"searchResult_card--EL": "searchResultsModal_searchResult_card--EL__x4LfX",
	"searchResult_image--WRAPPER": "searchResultsModal_searchResult_image--WRAPPER__CdXz2",
	"searchResult_mini_details--CONTAINER": "searchResultsModal_searchResult_mini_details--CONTAINER__l2WJ8",
	"searchResult_name--EL": "searchResultsModal_searchResult_name--EL__1Je1N",
	"searchResult_extra_mini_details--EL": "searchResultsModal_searchResult_extra_mini_details--EL__c9vWj"
};


/***/ }),

/***/ 4146:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_searchContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8681);
/* harmony import */ var _AccountLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1245);
/* harmony import */ var _style_SearchLayout_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3869);
/* harmony import */ var _style_SearchLayout_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_style_SearchLayout_module_css__WEBPACK_IMPORTED_MODULE_4__);





const firstRenderBlocker = true;
const SearchLayout = ({ children , type , accountPage  })=>{
    const { 0: searchValue , 1: setSearchValue  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { searchMostPapularActors , searchTrendingShows , searchHandler  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_lib_searchContext__WEBPACK_IMPORTED_MODULE_2__/* .SearchContext */ .c);
    const defaultSearchHandler = ()=>{
        if (type === "person") searchMostPapularActors();
        if (type !== "person") searchTrendingShows(type);
    };
    const changeSearchHandler = (e)=>{
        const inputSearchValue = e.target.value;
        setSearchValue(inputSearchValue);
    };
    const submitSearchHandler = (e)=>{
        e.preventDefault();
        searchHandler(searchValue, type);
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (firstRenderBlocker) {
            firstRenderBlocker = false;
            return;
        }
        const searchSetTimeout = setTimeout(()=>{
            !!searchValue && searchHandler(searchValue, type);
        }, 1000);
        return ()=>{
            clearTimeout(searchSetTimeout);
        };
    }, [
        searchValue
    ]);
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_AccountLayout__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
            showNavbar: true,
            accountPage: accountPage,
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_style_SearchLayout_module_css__WEBPACK_IMPORTED_MODULE_4___default()["search--BLOCK"]),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_style_SearchLayout_module_css__WEBPACK_IMPORTED_MODULE_4___default()["search_header--WRAPPER"]),
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: (_style_SearchLayout_module_css__WEBPACK_IMPORTED_MODULE_4___default()["search_header_content--CONTAINER"]),
                            children: [
                                type === "person" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                    children: "Search for Your Favorite Actor"
                                }),
                                type === "movie" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                    children: "Search for Your Favorite Movie"
                                }),
                                type === "tv" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                    children: "Search for Your Favorite TV Shows"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("form", {
                                    className: (_style_SearchLayout_module_css__WEBPACK_IMPORTED_MODULE_4___default()["search_form--EL"]),
                                    onSubmit: (e)=>submitSearchHandler(e)
                                    ,
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: `f-center-center ${(_style_SearchLayout_module_css__WEBPACK_IMPORTED_MODULE_4___default()["search_form_content--WRAPPER"])}`,
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                className: (_style_SearchLayout_module_css__WEBPACK_IMPORTED_MODULE_4___default()["search_input--EL"]),
                                                type: "text",
                                                placeholder: type === "person" ? "Search for an Actor" : type === "movie" ? "Search for a Movie" : "Search for a TV Show",
                                                name: "search",
                                                id: "search",
                                                onChange: changeSearchHandler
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                type: "submit",
                                                className: (_style_SearchLayout_module_css__WEBPACK_IMPORTED_MODULE_4___default()["search_form_submit--BTN"]),
                                                children: "Search"
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                    type: "button",
                                    className: (_style_SearchLayout_module_css__WEBPACK_IMPORTED_MODULE_4___default()["defaultSearch--BTN"]),
                                    onClick: defaultSearchHandler,
                                    children: [
                                        type === "person" && "most Popular Actors",
                                        type === "movie" && "trending Movies",
                                        type === "tv" && "trending TV Shows"
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("hr", {}),
                    children
                ]
            })
        })
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SearchLayout);


/***/ }),

/***/ 480:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _lib_genresContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4537);
/* harmony import */ var _style_searchResultsModal_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7155);
/* harmony import */ var _style_searchResultsModal_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_style_searchResultsModal_module_css__WEBPACK_IMPORTED_MODULE_5__);






const SearchResultsModal = ({ type , searchResults  })=>{
    const { accountID  } = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)().query;
    const { movieGenresHandler , tvShowGenresHandler , movieGenres , tvShowGenres  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_lib_genresContext__WEBPACK_IMPORTED_MODULE_4__/* .GenresContext */ .U);
    const findGenresHandler = (genres)=>{
        let GenresResult;
        if (type === "movies") {
            GenresResult = genres.reduce((acc, genre)=>{
                const genreObj = movieGenres.find((movieGenre)=>movieGenre.id === genre
                );
                if (!!genreObj) acc.push(genreObj.name);
                return acc;
            }, []).join(", ");
        }
        if (type === "tvShows") {
            GenresResult = genres.reduce((acc, genre)=>{
                const genreObj = tvShowGenres.find((tvShowGenre)=>tvShowGenre.id === genre
                );
                if (!!genreObj) acc.push(genreObj.name);
                return acc;
            }, []).join(", ");
        }
        return GenresResult;
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (type === "movies") movieGenresHandler();
        if (type === "tvShows") tvShowGenresHandler();
    }, []);
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: (_style_searchResultsModal_module_css__WEBPACK_IMPORTED_MODULE_5___default()["searchResults--CONTAINER"]),
        children: searchResults.map((searchResult)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
                href: `/account/${accountID}/${type}/${searchResult.id}`,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                    className: (_style_searchResultsModal_module_css__WEBPACK_IMPORTED_MODULE_5___default()["searchResult_card--EL"]),
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: (_style_searchResultsModal_module_css__WEBPACK_IMPORTED_MODULE_5___default()["searchResult_image--WRAPPER"]),
                            children: type === "actors" ? !!searchResult.profile_path ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                src: `https://www.themoviedb.org/t/p/original${searchResult.profile_path}`,
                                alt: `${searchResult.name}'s profile picture`
                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                src: `/assets/accountPage-assets/default_images/${searchResult.gender === 1 ? "default-female-avatar" : "default-male-avatar"}.jpg`,
                                alt: `${searchResult.name}'s profile picture Not Found`
                            }) : !!searchResult.poster_path ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                src: `https://www.themoviedb.org/t/p/original${searchResult.poster_path}`,
                                alt: `${searchResult.title || searchResult.name}'s poster`
                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                src: `/assets/accountPage-assets/default_images/showPosterNotAvailable.png`,
                                alt: `${searchResult.title || searchResult.name}'s poster Not Found`
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: (_style_searchResultsModal_module_css__WEBPACK_IMPORTED_MODULE_5___default()["searchResult_mini_details--CONTAINER"]),
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                                    className: (_style_searchResultsModal_module_css__WEBPACK_IMPORTED_MODULE_5___default()["searchResult_name--EL"]),
                                    children: searchResult.name || searchResult.title
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: (_style_searchResultsModal_module_css__WEBPACK_IMPORTED_MODULE_5___default()["searchResult_extra_mini_details--EL"]),
                                    children: type === "actors" ? searchResult.known_for.map((actorWork)=>actorWork.title || actorWork.name
                                    ).join(", ") : type === "movies" ? !!movieGenres && !!searchResult.genre_ids.length && findGenresHandler(searchResult.genre_ids) : !!tvShowGenres && !!searchResult.genre_ids.length && findGenresHandler(searchResult.genre_ids)
                                })
                            ]
                        })
                    ]
                })
            }, searchResult.id)
        )
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SearchResultsModal);


/***/ })

};
;