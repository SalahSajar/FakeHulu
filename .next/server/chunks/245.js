"use strict";
exports.id = 245;
exports.ids = [245];
exports.modules = {

/***/ 1245:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_customHooks_useUserAuth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6634);
/* harmony import */ var _Ui_Navbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(297);
/* harmony import */ var _style_AccountLayout_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6145);
/* harmony import */ var _style_AccountLayout_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_style_AccountLayout_module_css__WEBPACK_IMPORTED_MODULE_5__);






const AccountLayout = ({ children , accountPage , showNavbar  })=>{
    const { accountID  } = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)().query;
    const { userIsAuthenticated , checkUserAuthHandler  } = (0,_lib_customHooks_useUserAuth__WEBPACK_IMPORTED_MODULE_3__/* .useUserAuth */ .I)();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (!!accountID) checkUserAuthHandler(accountID);
    }, [
        accountID
    ]);
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: `accountPage--BASE`,
            children: userIsAuthenticated && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("main", {
                className: (_style_AccountLayout_module_css__WEBPACK_IMPORTED_MODULE_5___default()["account_homePage--EL"]),
                children: [
                    showNavbar && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Ui_Navbar__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                        page: "accountNavbar",
                        params: accountPage
                    }),
                    children
                ]
            })
        })
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AccountLayout);


/***/ })

};
;