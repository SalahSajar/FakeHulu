exports.id = 297;
exports.ids = [297];
exports.modules = {

/***/ 4811:
/***/ ((module) => {

// Exports
module.exports = {
	"mainNavbar--EL": "Navbar_mainNavbar--EL__LFHuN",
	"signupPage_navbar--EL": "Navbar_signupPage_navbar--EL__ENm48",
	"accountNavbar--EL": "Navbar_accountNavbar--EL__lole_",
	"navbar_menu--BTN": "Navbar_navbar_menu--BTN__YjTSH",
	"accountSubpages_links--CONTAINER": "Navbar_accountSubpages_links--CONTAINER__V8Fp9",
	"openNavbarMenu": "Navbar_openNavbarMenu__p07nu",
	"account_subpage_link--EL": "Navbar_account_subpage_link--EL__KGZ8l",
	"activeLink": "Navbar_activeLink__A1_jo",
	"homeLink": "Navbar_homeLink__Jug2L",
	"trendingLink": "Navbar_trendingLink__D40vj",
	"playlistLink": "Navbar_playlistLink__9PlvC",
	"moviesLink": "Navbar_moviesLink__cpTAs",
	"tvShowsLink": "Navbar_tvShowsLink__8VVZ2",
	"usersLink": "Navbar_usersLink__OdqNd",
	"githubLink": "Navbar_githubLink__To_kq",
	"hulu_nav_logo--WRAPPER": "Navbar_hulu_nav_logo--WRAPPER__V8Yux"
};


/***/ }),

/***/ 297:
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
/* harmony import */ var _style_Navbar_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4811);
/* harmony import */ var _style_Navbar_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_style_Navbar_module_css__WEBPACK_IMPORTED_MODULE_4__);





const Navbar = ({ changeModalStateHandler , page , params  })=>{
    const { 0: navbarMenuIsOpen , 1: setNavbarMenuIsOpen  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
    const navbarLogoPath = page ? "/assets/signupPage-assets/logos/hulu-dark.svg" : "/assets/welcomePage-assets/logos/logo.png";
    const accountIconsPath = "/assets/accountPage-assets/icons";
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    const { asPath  } = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    const { accountID  } = router.query;
    const changeNavbarMenuState = ()=>setNavbarMenuIsOpen((prev)=>!prev
        )
    ;
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const navbar_menu_EL = document.querySelector(`.${(_style_Navbar_module_css__WEBPACK_IMPORTED_MODULE_4___default()["accountSubpages_links--CONTAINER"])}`);
        if (!!navbar_menu_EL) {
            const classNameCheck = navbar_menu_EL.classList.contains((_style_Navbar_module_css__WEBPACK_IMPORTED_MODULE_4___default().openNavbarMenu));
            classNameCheck && navbar_menu_EL.classList.remove((_style_Navbar_module_css__WEBPACK_IMPORTED_MODULE_4___default().openNavbarMenu));
        }
    }, [
        asPath
    ]);
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
        children: page === "accountNavbar" ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("nav", {
            className: `f-center-between ${(_style_Navbar_module_css__WEBPACK_IMPORTED_MODULE_4___default()["mainNavbar--EL"])} ${(_style_Navbar_module_css__WEBPACK_IMPORTED_MODULE_4___default()["accountNavbar--EL"])}`,
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                    className: (_style_Navbar_module_css__WEBPACK_IMPORTED_MODULE_4___default()["navbar_menu--BTN"]),
                    onClick: changeNavbarMenuState,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                        src: "/assets/accountPage-assets/icons/menu.png",
                        alt: "close navbar menu icon"
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                    className: `${(_style_Navbar_module_css__WEBPACK_IMPORTED_MODULE_4___default()["accountSubpages_links--CONTAINER"])} ${navbarMenuIsOpen && (_style_Navbar_module_css__WEBPACK_IMPORTED_MODULE_4___default().openNavbarMenu)}`,
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
                                href: `/account/${accountID}`,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                    className: `${(_style_Navbar_module_css__WEBPACK_IMPORTED_MODULE_4___default()["account_subpage_link--EL"])} ${(_style_Navbar_module_css__WEBPACK_IMPORTED_MODULE_4___default().homeLink)} ${params === "home" ? (_style_Navbar_module_css__WEBPACK_IMPORTED_MODULE_4___default().activeLink) : ""}`,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                        src: `${accountIconsPath}/home.png`,
                                        alt: "Home"
                                    })
                                })
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
                                href: `/account/${accountID}/watchlist`,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                    className: `${(_style_Navbar_module_css__WEBPACK_IMPORTED_MODULE_4___default()["account_subpage_link--EL"])} ${(_style_Navbar_module_css__WEBPACK_IMPORTED_MODULE_4___default().playlistLink)} ${params === "watchlist" ? (_style_Navbar_module_css__WEBPACK_IMPORTED_MODULE_4___default().activeLink) : ""}`,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                        src: `${accountIconsPath}/video-playlist.png`,
                                        alt: "Playlist"
                                    })
                                })
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
                                href: `/account/${accountID}/movies`,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                    className: `${(_style_Navbar_module_css__WEBPACK_IMPORTED_MODULE_4___default()["account_subpage_link--EL"])} ${(_style_Navbar_module_css__WEBPACK_IMPORTED_MODULE_4___default().moviesLink)} ${params === "movies" ? (_style_Navbar_module_css__WEBPACK_IMPORTED_MODULE_4___default().activeLink) : ""}`,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                        src: `${accountIconsPath}/movie.png`,
                                        alt: "Movie"
                                    })
                                })
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
                                href: `/account/${accountID}/tvShows`,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                    className: `${(_style_Navbar_module_css__WEBPACK_IMPORTED_MODULE_4___default()["account_subpage_link--EL"])} ${(_style_Navbar_module_css__WEBPACK_IMPORTED_MODULE_4___default().tvShowsLink)} ${params === "tvShows" ? (_style_Navbar_module_css__WEBPACK_IMPORTED_MODULE_4___default().activeLink) : ""}`,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                        src: `${accountIconsPath}/tv-show.png`,
                                        alt: "TV Show"
                                    })
                                })
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
                                href: `/account/${accountID}/actors`,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                    className: `${(_style_Navbar_module_css__WEBPACK_IMPORTED_MODULE_4___default()["account_subpage_link--EL"])} ${(_style_Navbar_module_css__WEBPACK_IMPORTED_MODULE_4___default().usersLink)} ${params === "actors" ? (_style_Navbar_module_css__WEBPACK_IMPORTED_MODULE_4___default().activeLink) : ""}`,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                        src: `${accountIconsPath}/users.png`,
                                        alt: "Actors"
                                    })
                                })
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                href: "https://github.com",
                                target: "_blank",
                                className: `${(_style_Navbar_module_css__WEBPACK_IMPORTED_MODULE_4___default()["account_subpage_link--EL"])} ${(_style_Navbar_module_css__WEBPACK_IMPORTED_MODULE_4___default().githubLink)}`,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    src: `${accountIconsPath}/github.png`,
                                    alt: "Github"
                                })
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                    role: "heading",
                    className: `${(_style_Navbar_module_css__WEBPACK_IMPORTED_MODULE_4___default()["hulu_nav_logo--WRAPPER"])}`,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                        src: "/assets/accountPage-assets/logos/hulu-white.png",
                        alt: "white hulu"
                    })
                })
            ]
        }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("nav", {
            className: `f-center-between ${(_style_Navbar_module_css__WEBPACK_IMPORTED_MODULE_4___default()["mainNavbar--EL"])} ${!!page && (_style_Navbar_module_css__WEBPACK_IMPORTED_MODULE_4___default()["signupPage_navbar--EL"])}`,
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                    role: "heading",
                    className: `${(_style_Navbar_module_css__WEBPACK_IMPORTED_MODULE_4___default()["hulu_nav_logo--WRAPPER"])}`,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                        src: navbarLogoPath,
                        alt: "hulu logo"
                    })
                }),
                !page && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                    href: "#",
                    onClick: (e)=>changeModalStateHandler(e, "logIn", true)
                    ,
                    children: "log in"
                })
            ]
        })
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Navbar);


/***/ })

};
;