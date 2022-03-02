exports.id = 772;
exports.ids = [772];
exports.modules = {

/***/ 6145:
/***/ ((module) => {

// Exports
module.exports = {

};


/***/ }),

/***/ 881:
/***/ ((module) => {

// Exports
module.exports = {
	"loading_modal--EL": "LoadingModal_loading_modal--EL__1GKC5",
	"vertical_spacing": "LoadingModal_vertical_spacing__XZoqS",
	"large_height_loadingModal": "LoadingModal_large_height_loadingModal__8Xs0E"
};


/***/ }),

/***/ 4543:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_LoadingModal_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(881);
/* harmony import */ var _style_LoadingModal_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_LoadingModal_module_css__WEBPACK_IMPORTED_MODULE_2__);



const LoadingModal = ({ spacedState , largeHeight  })=>{
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: `${spacedState && (_style_LoadingModal_module_css__WEBPACK_IMPORTED_MODULE_2___default().vertical_spacing)} ${largeHeight && (_style_LoadingModal_module_css__WEBPACK_IMPORTED_MODULE_2___default().large_height_loadingModal)} ${(_style_LoadingModal_module_css__WEBPACK_IMPORTED_MODULE_2___default()["loading_modal--EL"])}`,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: (_style_LoadingModal_module_css__WEBPACK_IMPORTED_MODULE_2___default()["loading_block--EL"]),
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                src: "/assets/accountPage-assets/icons/loading.gif",
                alt: "loading"
            })
        })
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LoadingModal);


/***/ }),

/***/ 6634:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "I": () => (/* binding */ useUserAuth)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const useUserAuth = ()=>{
    const { 0: userIsAuthenticated , 1: setUserIsAuthenticated  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const checkUserAuthHandler = (accountID)=>{
        const userAuthChecker_1 = localStorage.getItem("loggedIn");
        const userAuthChecker_2 = localStorage.getItem("loggedInAccountID");
        if (userAuthChecker_1 && userAuthChecker_2 === accountID) {
            setUserIsAuthenticated(true);
        } else {
            setUserIsAuthenticated(false);
            window.location.replace('/welcome');
        }
    };
    const quickUserAuthCheckHandler = (accountID)=>{
        const userAuthChecker_1 = localStorage.getItem("loggedIn");
        const userAuthChecker_2 = localStorage.getItem("loggedInAccountID");
        return userAuthChecker_1 && userAuthChecker_2 === accountID;
    };
    return {
        userIsAuthenticated,
        checkUserAuthHandler,
        quickUserAuthCheckHandler
    };
};


/***/ })

};
;