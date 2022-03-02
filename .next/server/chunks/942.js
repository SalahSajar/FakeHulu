exports.id = 942;
exports.ids = [942];
exports.modules = {

/***/ 6826:
/***/ ((module) => {

// Exports
module.exports = {
	"show_recommendations_content--EL": "ShowsSlider_show_recommendations_content--EL__nVBrl",
	"show_recommendation_block--EL": "ShowsSlider_show_recommendation_block--EL__hyV1K",
	"show_recommendation_image--WRAPPER": "ShowsSlider_show_recommendation_image--WRAPPER__pLiWD",
	"show_recommendation_title--EL": "ShowsSlider_show_recommendation_title--EL__ycZqg"
};


/***/ }),

/***/ 942:
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
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1664);
/* harmony import */ var _style_ShowsSlider_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6826);
/* harmony import */ var _style_ShowsSlider_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_style_ShowsSlider_module_css__WEBPACK_IMPORTED_MODULE_4__);





const ShowsSlider = ({ showsArr , type  })=>{
    const { accountID  } = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)().query;
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: (_style_ShowsSlider_module_css__WEBPACK_IMPORTED_MODULE_4___default()["show_recommendations_content--EL"]),
        children: type === "movies" ? showsArr.map(({ poster_path , title , original_title , id  })=>{
            return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_3__["default"], {
                href: `/account/${accountID}/movies/${id}`,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                    className: (_style_ShowsSlider_module_css__WEBPACK_IMPORTED_MODULE_4___default()["show_recommendation_block--EL"]),
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: (_style_ShowsSlider_module_css__WEBPACK_IMPORTED_MODULE_4___default()["show_recommendation_image--WRAPPER"]),
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                loading: "lazy",
                                src: !poster_path ? "/assets/accountPage-assets/default_images/showPosterNotAvailable.png" : `https://www.themoviedb.org/t/p/original${poster_path}`,
                                alt: `${title || original_title}`
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                            className: (_style_ShowsSlider_module_css__WEBPACK_IMPORTED_MODULE_4___default()["show_recommendation_title--EL"]),
                            children: title || original_title
                        })
                    ]
                })
            }, id));
        }) : showsArr.map(({ poster_path , name , original_name , id  })=>{
            return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_3__["default"], {
                href: `/account/${accountID}/tvShows/${id}`,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                    className: (_style_ShowsSlider_module_css__WEBPACK_IMPORTED_MODULE_4___default()["show_recommendation_block--EL"]),
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: (_style_ShowsSlider_module_css__WEBPACK_IMPORTED_MODULE_4___default()["show_recommendation_image--WRAPPER"]),
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                loading: "lazy",
                                src: !poster_path ? "/assets/accountPage-assets/default_images/showPosterNotAvailable.png" : `https://www.themoviedb.org/t/p/original${poster_path}`,
                                alt: `${name || original_name}`
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                            className: (_style_ShowsSlider_module_css__WEBPACK_IMPORTED_MODULE_4___default()["show_recommendation_title--EL"]),
                            children: name || original_name
                        })
                    ]
                })
            }, id));
        })
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ShowsSlider);


/***/ })

};
;