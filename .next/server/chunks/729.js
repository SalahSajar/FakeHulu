"use strict";
exports.id = 729;
exports.ids = [729];
exports.modules = {

/***/ 5729:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "V": () => (/* binding */ UserAuthContext),
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const UserAuthContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({
    userloggedIn: false,
    loggedInUserDetails: null
});
const UserAuthContextProvider = ({ children  })=>{
    const { 0: userloggedIn , 1: setUserloggedIn  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: loggedInUserDetails , 1: setLoggedInUserDetails  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const loginHandler = (userDetails)=>{
        setUserloggedIn(true);
        setLoggedInUserDetails(userDetails);
        localStorage.setItem('loggedIn', true);
        localStorage.setItem('loggedInAccountID', userDetails.id);
    };
    const logoutHandler = ()=>{
        setUserloggedIn(false);
        setLoggedInUserDetails(null);
        localStorage.setItem('loggedIn', false);
        localStorage.setItem('loggedInAccountID', null);
    };
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(UserAuthContext.Provider, {
        value: {
            userloggedIn,
            loggedInUserDetails,
            loginHandler,
            logoutHandler
        },
        children: children
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UserAuthContextProvider);


/***/ })

};
;