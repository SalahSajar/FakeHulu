exports.id = 15;
exports.ids = [15];
exports.modules = {

/***/ 1651:
/***/ ((module) => {

// Exports
module.exports = {
	"inputHeader--CONTAINER": "InfoModal_inputHeader--CONTAINER__ubvEu",
	"moreInfos_btn--EL": "InfoModal_moreInfos_btn--EL__9JZFZ",
	"infoModal_content--WRAPPER": "InfoModal_infoModal_content--WRAPPER__2R3xb",
	"infoModal--BTN": "InfoModal_infoModal--BTN___gW0y"
};


/***/ }),

/***/ 4724:
/***/ ((module) => {

// Exports
module.exports = {
	"signupContent--CONTAINER": "SignupLayout_signupContent--CONTAINER__Ks2ms",
	"signupContentBlock--EL": "SignupLayout_signupContentBlock--EL__zk9Gy",
	"sm_layoutChild": "SignupLayout_sm_layoutChild__waQ_Q",
	"signup_footer--EL": "SignupLayout_signup_footer--EL__HTIYb"
};


/***/ }),

/***/ 3323:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_SignupLayout_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4724);
/* harmony import */ var _style_SignupLayout_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_SignupLayout_module_css__WEBPACK_IMPORTED_MODULE_2__);



const SignupLayout = ({ children , size  })=>{
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                className: (_style_SignupLayout_module_css__WEBPACK_IMPORTED_MODULE_2___default()["signupContent--CONTAINER"]),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: `${(_style_SignupLayout_module_css__WEBPACK_IMPORTED_MODULE_2___default()["signupContentBlock--EL"])} ${!!size && (_style_SignupLayout_module_css__WEBPACK_IMPORTED_MODULE_2___default().sm_layoutChild)}`,
                    children: children
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("footer", {
                className: (_style_SignupLayout_module_css__WEBPACK_IMPORTED_MODULE_2___default()["signup_footer--EL"]),
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                    className: "f-center-between",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                href: "#",
                                children: "about ads"
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                href: "#",
                                children: "terms of use"
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                href: "#",
                                children: "privacy policy"
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                href: "#",
                                children: "Do Not Sell My Personal Information"
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                href: "#",
                                children: "Your California Privacy Right"
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                            children: "\xa9 2022 Hulu, LLC"
                        })
                    ]
                })
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SignupLayout);


/***/ }),

/***/ 2245:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_InfoModal_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1651);
/* harmony import */ var _style_InfoModal_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_InfoModal_module_css__WEBPACK_IMPORTED_MODULE_2__);



const toggleMoreInfosBlockHandler = (e)=>{
    const btnParentElement = e.currentTarget.parentElement;
    const currentState = e.currentTarget.parentElement.dataset.expanded;
    btnParentElement.dataset.expanded = currentState === "false" ? true : false;
};
const InfoModal = ({ children , infos  })=>{
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: (_style_InfoModal_module_css__WEBPACK_IMPORTED_MODULE_2___default()["inputHeader--CONTAINER"]),
            children: [
                children,
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    "data-expanded": false,
                    className: (_style_InfoModal_module_css__WEBPACK_IMPORTED_MODULE_2___default()["moreInfos_btn--EL"]),
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            onClick: toggleMoreInfosBlockHandler,
                            className: (_style_InfoModal_module_css__WEBPACK_IMPORTED_MODULE_2___default()["infoModal--BTN"]),
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                src: "/assets/signupPage-assets/icons/more-info.svg",
                                alt: "more infos icon"
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: (_style_InfoModal_module_css__WEBPACK_IMPORTED_MODULE_2___default()["infoModal_content--WRAPPER"]),
                            children: infos
                        })
                    ]
                })
            ]
        })
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InfoModal);


/***/ }),

/***/ 6254:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "x": () => (/* binding */ SignupContext),
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const SignupContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({
    planSelected: ""
});
const SignupContextProvider = ({ children  })=>{
    const { 0: planSelected , 1: setPlanSelected  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const selectSignupPlanHandler = (signupPlan)=>{
        setPlanSelected(signupPlan);
    };
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SignupContext.Provider, {
        value: {
            planSelected,
            selectSignupPlanHandler
        },
        children: children
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SignupContextProvider);


/***/ })

};
;