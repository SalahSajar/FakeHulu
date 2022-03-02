exports.id = 869;
exports.ids = [869];
exports.modules = {

/***/ 5408:
/***/ ((module) => {

// Exports
module.exports = {
	"showdetails_content--CONTAINER": "ShowDetailsUi_showdetails_content--CONTAINER__kkgGL",
	"show_image--WRAPPER": "ShowDetailsUi_show_image--WRAPPER__361bK",
	"show_details--WRAPPER": "ShowDetailsUi_show_details--WRAPPER__0lSmb",
	"show_details_header--CONTAINER": "ShowDetailsUi_show_details_header--CONTAINER__8AuVq",
	"show_title--EL": "ShowDetailsUi_show_title--EL__KE__d",
	"show_mini_details--EL": "ShowDetailsUi_show_mini_details--EL__6zAJn",
	"show_detail_header--EL": "ShowDetailsUi_show_detail_header--EL__kgNfk",
	"show_description--CONTAINER": "ShowDetailsUi_show_description--CONTAINER__jxdIZ",
	"show_decription--EL": "ShowDetailsUi_show_decription--EL__1M0u4",
	"show_ratings--CONTAINER": "ShowDetailsUi_show_ratings--CONTAINER__0Lh6b",
	"show_rating_block--EL": "ShowDetailsUi_show_rating_block--EL__9pe6Q",
	"show_companies--CONTAINER": "ShowDetailsUi_show_companies--CONTAINER__x_2AB",
	"show_companies_blocks--WRAPPER": "ShowDetailsUi_show_companies_blocks--WRAPPER__j3tHI",
	"show_company_details--BLOCK": "ShowDetailsUi_show_company_details--BLOCK__NNgW8",
	"show_company_image--EL": "ShowDetailsUi_show_company_image--EL__cvYJk",
	"show_company_title--EL": "ShowDetailsUi_show_company_title--EL__zGrA3",
	"show_cta_btns--CONTAINER": "ShowDetailsUi_show_cta_btns--CONTAINER__5BcOX",
	"watchTrailer--BTN": "ShowDetailsUi_watchTrailer--BTN__f0q3m",
	"show_watchlist--BTN": "ShowDetailsUi_show_watchlist--BTN__19TJm",
	"addToWatchlist_BTN": "ShowDetailsUi_addToWatchlist_BTN__0HYj5",
	"removeFromWatchlist_BTN": "ShowDetailsUi_removeFromWatchlist_BTN__BKZfY",
	"watchlist_loading--IMG": "ShowDetailsUi_watchlist_loading--IMG__DqPHY",
	"show_cta_icon--CONTAINER": "ShowDetailsUi_show_cta_icon--CONTAINER__acvAL"
};


/***/ }),

/***/ 7406:
/***/ ((module) => {

// Exports
module.exports = {
	"trailer_modal--BLOCK": "TrailerModal_trailer_modal--BLOCK__sdFXa",
	"trailer_modal_content--CONTAINER": "TrailerModal_trailer_modal_content--CONTAINER__QKDeT",
	"close_trailer_modal--BTN": "TrailerModal_close_trailer_modal--BTN__cRQ1A",
	"trailer_video--EL": "TrailerModal_trailer_video--EL__cgH8N"
};


/***/ }),

/***/ 4274:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_TrailerModal_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7406);
/* harmony import */ var _style_TrailerModal_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_TrailerModal_module_css__WEBPACK_IMPORTED_MODULE_2__);



const TrailerModal = ({ displayTrailerModalHandler , displayTrailerModal , showTrailerDetails ,  })=>{
    const trailerModalHandler = (e)=>{
        e.preventDefault();
        displayTrailerModalHandler(false);
    };
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            "data-visible": displayTrailerModal,
            className: `f-center-center ${(_style_TrailerModal_module_css__WEBPACK_IMPORTED_MODULE_2___default()["trailer_modal--BLOCK"])}`,
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: `${(_style_TrailerModal_module_css__WEBPACK_IMPORTED_MODULE_2___default()["trailer_modal_content--CONTAINER"])}`,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                        href: "#",
                        className: (_style_TrailerModal_module_css__WEBPACK_IMPORTED_MODULE_2___default()["close_trailer_modal--BTN"]),
                        onClick: trailerModalHandler,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                            src: "/assets/accountPage-assets/icons/close.svg",
                            alt: "Close"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("iframe", {
                        className: (_style_TrailerModal_module_css__WEBPACK_IMPORTED_MODULE_2___default()["trailer_video--EL"]),
                        width: "100%",
                        src: `https://www.youtube.com/embed/${showTrailerDetails.key}`,
                        title: `Trailer`,
                        frameBorder: "0",
                        allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
                        allowFullScreen: true
                    })
                ]
            })
        })
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TrailerModal);


/***/ }),

/***/ 1096:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_customHooks_useWatchlist__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(724);
/* harmony import */ var _lib_customHooks_useUserAuth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6634);
/* harmony import */ var _lib_userWatchlistContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9716);
/* harmony import */ var _style_ShowDetailsUi_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5408);
/* harmony import */ var _style_ShowDetailsUi_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_style_ShowDetailsUi_module_css__WEBPACK_IMPORTED_MODULE_6__);







const ShowDetailsUi = ({ type , showDetails , displayTrailerModalHandler  })=>{
    const { accountID  } = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)().query;
    const { storeShowToWatchlistDB___Handler , removeShowFromWatchlistDB___Handler , watchlistIsLoading ,  } = (0,_lib_customHooks_useWatchlist__WEBPACK_IMPORTED_MODULE_3__/* .useWatchlist */ .B)();
    const { quickUserAuthCheckHandler  } = (0,_lib_customHooks_useUserAuth__WEBPACK_IMPORTED_MODULE_4__/* .useUserAuth */ .I)();
    const { userWatchlistMovies , userWatchlistTvShows  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_lib_userWatchlistContext__WEBPACK_IMPORTED_MODULE_5__/* .UserWatchlistContext */ .m);
    const runTimeHander = (runtime)=>{
        const hours = Math.floor(runtime / 60);
        const minutes = runtime % 60;
        return `${!!hours && `${hours}h`} ${minutes}min`;
    };
    const addToWatchlistHandler = ()=>{
        const quickAuthCheck = quickUserAuthCheckHandler(accountID);
        const { title , tagline , release_date , id , genres , poster_path  } = showDetails;
        if (accountID && quickAuthCheck) {
            storeShowToWatchlistDB___Handler(accountID, {
                title,
                tagline,
                release_date,
                id,
                genres,
                poster_path
            }, type);
        }
    };
    const removeFromWatchlistHandler = ()=>{
        const quickAuthCheck = quickUserAuthCheckHandler(accountID);
        const { id  } = showDetails;
        if (accountID && quickAuthCheck) {
            removeShowFromWatchlistDB___Handler(accountID, id, type);
        }
    };
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            style: {
                backgroundImage: `url(https://image.tmdb.org/t/p/original${showDetails.backdrop_path})`
            },
            className: (_style_ShowDetailsUi_module_css__WEBPACK_IMPORTED_MODULE_6___default()["showdetails_content--CONTAINER"]),
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: (_style_ShowDetailsUi_module_css__WEBPACK_IMPORTED_MODULE_6___default()["show_image--WRAPPER"]),
                    children: showDetails.poster_path ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                        loading: "eager",
                        src: `https://image.tmdb.org/t/p/original${showDetails.poster_path}`,
                        alt: `${type === "movies" ? showDetails.title : showDetails.name} poster`
                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                        src: "/assets/accountPage-assets/",
                        alt: `${type === "movies" ? "movie" : "tv Show"}`
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: (_style_ShowDetailsUi_module_css__WEBPACK_IMPORTED_MODULE_6___default()["show_details--WRAPPER"]),
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: (_style_ShowDetailsUi_module_css__WEBPACK_IMPORTED_MODULE_6___default()["show_details_header--CONTAINER"]),
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                    className: (_style_ShowDetailsUi_module_css__WEBPACK_IMPORTED_MODULE_6___default()["show_title--EL"]),
                                    children: type === "movies" ? showDetails.title : showDetails.name
                                }),
                                type === "movies" ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                    className: (_style_ShowDetailsUi_module_css__WEBPACK_IMPORTED_MODULE_6___default()["show_mini_details--EL"]),
                                    children: [
                                        showDetails.release_date.replaceAll("-", "/"),
                                        " ✦",
                                        " ",
                                        showDetails.genres.map((genre)=>genre.name
                                        ).join(", "),
                                        " ",
                                        "✦",
                                        " ",
                                        !!showDetails.runtime && runTimeHander(showDetails.runtime)
                                    ]
                                }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                    className: (_style_ShowDetailsUi_module_css__WEBPACK_IMPORTED_MODULE_6___default()["show_mini_details--EL"]),
                                    children: [
                                        showDetails.first_air_date.replaceAll("-", "/"),
                                        " ✦",
                                        " ",
                                        showDetails.genres.map((genre)=>genre.name
                                        ).join(", "),
                                        " ",
                                        "✦",
                                        " ",
                                        `${showDetails.number_of_seasons} ${showDetails.number_of_seasons > 1 ? "Seasons" : "Season"}`
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: (_style_ShowDetailsUi_module_css__WEBPACK_IMPORTED_MODULE_6___default()["show_description--CONTAINER"]),
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: `${(_style_ShowDetailsUi_module_css__WEBPACK_IMPORTED_MODULE_6___default()["show_detail_header--EL"])} ${(_style_ShowDetailsUi_module_css__WEBPACK_IMPORTED_MODULE_6___default()["show_description_header--EL"])}`,
                                    children: "Storyline"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: (_style_ShowDetailsUi_module_css__WEBPACK_IMPORTED_MODULE_6___default()["show_decription--EL"]),
                                    children: showDetails.overview
                                })
                            ]
                        }),
                        !!showDetails.vote_average && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: (_style_ShowDetailsUi_module_css__WEBPACK_IMPORTED_MODULE_6___default()["show_ratings--CONTAINER"]),
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: `${(_style_ShowDetailsUi_module_css__WEBPACK_IMPORTED_MODULE_6___default()["show_detail_header--EL"])} ${(_style_ShowDetailsUi_module_css__WEBPACK_IMPORTED_MODULE_6___default()["show_ratings_header--EL"])}`,
                                    children: "Rating"
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: (_style_ShowDetailsUi_module_css__WEBPACK_IMPORTED_MODULE_6___default()["show_rating_block--EL"]),
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                            src: "/assets/accountPage-assets/logos/imdb_icon.png",
                                            alt: "imdb icon"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: (_style_ShowDetailsUi_module_css__WEBPACK_IMPORTED_MODULE_6___default()["show_rating--EL"]),
                                            children: showDetails.vote_average
                                        })
                                    ]
                                })
                            ]
                        }),
                        showDetails.production_companies && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: (_style_ShowDetailsUi_module_css__WEBPACK_IMPORTED_MODULE_6___default()["show_companies--CONTAINER"]),
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: `${(_style_ShowDetailsUi_module_css__WEBPACK_IMPORTED_MODULE_6___default()["show_detail_header--EL"])} ${(_style_ShowDetailsUi_module_css__WEBPACK_IMPORTED_MODULE_6___default()["show_companies_header--EL"])}`,
                                    children: "Production Companies"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: (_style_ShowDetailsUi_module_css__WEBPACK_IMPORTED_MODULE_6___default()["show_companies_blocks--WRAPPER"]),
                                    children: showDetails.production_companies.map((productionCompany)=>{
                                        return productionCompany.logo_path && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: (_style_ShowDetailsUi_module_css__WEBPACK_IMPORTED_MODULE_6___default()["show_company_details--BLOCK"]),
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: (_style_ShowDetailsUi_module_css__WEBPACK_IMPORTED_MODULE_6___default()["show_company_image--EL"]),
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                        src: `https://image.tmdb.org/t/p/original${productionCompany.logo_path}`,
                                                        alt: `${productionCompany.name} logo`
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: (_style_ShowDetailsUi_module_css__WEBPACK_IMPORTED_MODULE_6___default()["show_company_title--EL"]),
                                                    children: productionCompany.name
                                                })
                                            ]
                                        }, productionCompany.name);
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: (_style_ShowDetailsUi_module_css__WEBPACK_IMPORTED_MODULE_6___default()["show_cta_btns--CONTAINER"]),
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                    type: "button",
                                    className: (_style_ShowDetailsUi_module_css__WEBPACK_IMPORTED_MODULE_6___default()["watchTrailer--BTN"]),
                                    onClick: ()=>displayTrailerModalHandler(true)
                                    ,
                                    children: [
                                        "watch trailer",
                                        " ",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: (_style_ShowDetailsUi_module_css__WEBPACK_IMPORTED_MODULE_6___default()["show_cta_icon--CONTAINER"]),
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                src: "/assets/accountPage-assets/icons/play.png"
                                            })
                                        })
                                    ]
                                }),
                                type === "movies" ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
                                    children: [
                                        !userWatchlistMovies || !userWatchlistMovies.length || !userWatchlistMovies.find((userWatchlistMovie)=>userWatchlistMovie.id === showDetails.id
                                        ) ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                            type: "button",
                                            className: `${(_style_ShowDetailsUi_module_css__WEBPACK_IMPORTED_MODULE_6___default()["show_watchlist--BTN"])} ${(_style_ShowDetailsUi_module_css__WEBPACK_IMPORTED_MODULE_6___default().addToWatchlist_BTN)}`,
                                            disabled: watchlistIsLoading,
                                            onClick: addToWatchlistHandler,
                                            children: [
                                                !watchlistIsLoading && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    children: [
                                                        "add to watchlist",
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: (_style_ShowDetailsUi_module_css__WEBPACK_IMPORTED_MODULE_6___default()["show_cta_icon--CONTAINER"]),
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                src: "/assets/accountPage-assets/icons/plus.png"
                                                            })
                                                        })
                                                    ]
                                                }),
                                                watchlistIsLoading && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                    className: (_style_ShowDetailsUi_module_css__WEBPACK_IMPORTED_MODULE_6___default()["watchlist_loading--IMG"]),
                                                    src: "/assets/accountPage-assets/icons/loading-circle.gif",
                                                    alt: "loading circle"
                                                })
                                            ]
                                        }) : "",
                                        !!userWatchlistMovies && !!userWatchlistMovies.length && !!userWatchlistMovies.find((userWatchlistMovie)=>userWatchlistMovie.id === showDetails.id
                                        ) && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                            type: "button",
                                            className: `${(_style_ShowDetailsUi_module_css__WEBPACK_IMPORTED_MODULE_6___default()["show_watchlist--BTN"])} ${(_style_ShowDetailsUi_module_css__WEBPACK_IMPORTED_MODULE_6___default().removeFromWatchlist_BTN)}`,
                                            disabled: watchlistIsLoading,
                                            onClick: removeFromWatchlistHandler,
                                            children: [
                                                !watchlistIsLoading && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    children: [
                                                        "remove from watchlist",
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: (_style_ShowDetailsUi_module_css__WEBPACK_IMPORTED_MODULE_6___default()["show_cta_icon--CONTAINER"]),
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                src: "/assets/accountPage-assets/icons/minus.png"
                                                            })
                                                        })
                                                    ]
                                                }),
                                                watchlistIsLoading && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                    className: (_style_ShowDetailsUi_module_css__WEBPACK_IMPORTED_MODULE_6___default()["watchlist_loading--IMG"]),
                                                    src: "/assets/accountPage-assets/icons/loading-circle.gif",
                                                    alt: "loading circle"
                                                })
                                            ]
                                        })
                                    ]
                                }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
                                    children: [
                                        !userWatchlistTvShows || !userWatchlistTvShows.length || !userWatchlistTvShows.find((userWatchlistMovie)=>userWatchlistMovie.id === showDetails.id
                                        ) ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                            type: "button",
                                            className: `${(_style_ShowDetailsUi_module_css__WEBPACK_IMPORTED_MODULE_6___default()["show_watchlist--BTN"])} ${(_style_ShowDetailsUi_module_css__WEBPACK_IMPORTED_MODULE_6___default().addToWatchlist_BTN)}`,
                                            disabled: watchlistIsLoading,
                                            onClick: addToWatchlistHandler,
                                            children: [
                                                !watchlistIsLoading && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    children: [
                                                        "add to watchlist",
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: (_style_ShowDetailsUi_module_css__WEBPACK_IMPORTED_MODULE_6___default()["show_cta_icon--CONTAINER"]),
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                src: "/assets/accountPage-assets/icons/plus.png"
                                                            })
                                                        })
                                                    ]
                                                }),
                                                watchlistIsLoading && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                    className: (_style_ShowDetailsUi_module_css__WEBPACK_IMPORTED_MODULE_6___default()["watchlist_loading--IMG"]),
                                                    src: "/assets/accountPage-assets/icons/loading-circle.gif",
                                                    alt: "loading circle"
                                                })
                                            ]
                                        }) : "",
                                        !!userWatchlistTvShows && !!userWatchlistTvShows.length && !!userWatchlistTvShows.find((userWatchlistTvShow)=>userWatchlistTvShow.id === showDetails.id
                                        ) && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                            type: "button",
                                            className: `${(_style_ShowDetailsUi_module_css__WEBPACK_IMPORTED_MODULE_6___default()["show_watchlist--BTN"])} ${(_style_ShowDetailsUi_module_css__WEBPACK_IMPORTED_MODULE_6___default().removeFromWatchlist_BTN)}`,
                                            disabled: watchlistIsLoading,
                                            onClick: removeFromWatchlistHandler,
                                            children: [
                                                !watchlistIsLoading && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    children: [
                                                        "remove from watchlist",
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: (_style_ShowDetailsUi_module_css__WEBPACK_IMPORTED_MODULE_6___default()["show_cta_icon--CONTAINER"]),
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                src: "/assets/accountPage-assets/icons/minus.png"
                                                            })
                                                        })
                                                    ]
                                                }),
                                                watchlistIsLoading && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                    className: (_style_ShowDetailsUi_module_css__WEBPACK_IMPORTED_MODULE_6___default()["watchlist_loading--IMG"]),
                                                    src: "/assets/accountPage-assets/icons/loading-circle.gif",
                                                    alt: "loading circle"
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ShowDetailsUi);


/***/ })

};
;