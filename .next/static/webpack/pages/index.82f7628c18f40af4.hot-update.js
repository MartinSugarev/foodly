"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/SingleReceipt/singleReceipt.jsx":
/*!********************************************************!*\
  !*** ./src/components/SingleReceipt/singleReceipt.jsx ***!
  \********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ SingleReceipt; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/src/_sliced_to_array.mjs */ \"./node_modules/@swc/helpers/src/_sliced_to_array.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _SingleReceipt_singleReceipt_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../SingleReceipt/singleReceipt.module.css */ \"./src/components/SingleReceipt/singleReceipt.module.css\");\n/* harmony import */ var _SingleReceipt_singleReceipt_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_SingleReceipt_singleReceipt_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _PopUpWindow_popUpWindow__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../PopUpWindow/popUpWindow */ \"./src/components/PopUpWindow/popUpWindow.jsx\");\n\n\nvar _s = $RefreshSig$();\n\n\n\nfunction SingleReceipt(param) {\n    var img = param.img, heading = param.heading;\n    _s();\n    var _useState = (0,_swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), 2), isHidden = _useState[0], setIsHidden = _useState[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        if (isHidden) {\n            window.history.pushState({}, \"\", \"receipt\");\n            window.scrollTo({\n                top: 0,\n                left: 0,\n                behavior: \"smooth\"\n            });\n            window.document.b;\n        }\n    }, [\n        isHidden\n    ]);\n    var openReceipt = function(e) {\n        setIsHidden(function() {\n            return true;\n        });\n        e.stopPropagation();\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_SingleReceipt_singleReceipt_module_css__WEBPACK_IMPORTED_MODULE_4___default()[\"single-receipt\"]),\n                onClick: function(e) {\n                    return openReceipt(e);\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_SingleReceipt_singleReceipt_module_css__WEBPACK_IMPORTED_MODULE_4___default()[\"image-container-receipt\"]),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: img,\n                            alt: \"receipt-img\"\n                        }, void 0, false, {\n                            fileName: \"/Users/macbookair/Desktop/foodly/src/components/SingleReceipt/singleReceipt.jsx\",\n                            lineNumber: 37,\n                            columnNumber: 17\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/macbookair/Desktop/foodly/src/components/SingleReceipt/singleReceipt.jsx\",\n                        lineNumber: 36,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_SingleReceipt_singleReceipt_module_css__WEBPACK_IMPORTED_MODULE_4___default()[\"single-receipt-button\"]),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                children: heading\n                            }, void 0, false, {\n                                fileName: \"/Users/macbookair/Desktop/foodly/src/components/SingleReceipt/singleReceipt.jsx\",\n                                lineNumber: 40,\n                                columnNumber: 16\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_SingleReceipt_singleReceipt_module_css__WEBPACK_IMPORTED_MODULE_4___default()[\"button-container\"]),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        children: \"Pasta\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/macbookair/Desktop/foodly/src/components/SingleReceipt/singleReceipt.jsx\",\n                                        lineNumber: 42,\n                                        columnNumber: 23\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        children: \"Curry\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/macbookair/Desktop/foodly/src/components/SingleReceipt/singleReceipt.jsx\",\n                                        lineNumber: 43,\n                                        columnNumber: 23\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/macbookair/Desktop/foodly/src/components/SingleReceipt/singleReceipt.jsx\",\n                                lineNumber: 41,\n                                columnNumber: 19\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/macbookair/Desktop/foodly/src/components/SingleReceipt/singleReceipt.jsx\",\n                        lineNumber: 39,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/macbookair/Desktop/foodly/src/components/SingleReceipt/singleReceipt.jsx\",\n                lineNumber: 35,\n                columnNumber: 9\n            }, this),\n            isHidden && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_PopUpWindow_popUpWindow__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                img: img,\n                heading: heading,\n                setIsHidden: setIsHidden\n            }, void 0, false, {\n                fileName: \"/Users/macbookair/Desktop/foodly/src/components/SingleReceipt/singleReceipt.jsx\",\n                lineNumber: 47,\n                columnNumber: 22\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(SingleReceipt, \"gx79EKSOzyPa7jQMUbgKBH5V/N4=\");\n_c = SingleReceipt;\nvar _c;\n$RefreshReg$(_c, \"SingleReceipt\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9TaW5nbGVSZWNlaXB0L3NpbmdsZVJlY2VpcHQuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBOzs7QUFBOEQ7QUFDYjtBQUNLO0FBS3RDLFNBQVNLLGNBQWMsS0FBYyxFQUFDO1FBQWRDLE1BQUQsTUFBQ0EsS0FBS0MsVUFBTixNQUFNQTs7SUFFekMsSUFBZ0NMLFlBQUFBLGdGQUFBQSxDQUFBQSwrQ0FBUUEsQ0FBQyxLQUFLLE9BQXZDTSxXQUF5Qk4sY0FBZk8sY0FBZVA7SUFHaENDLGdEQUFTQSxDQUFDLFdBQU07UUFFWixJQUFHSyxVQUFTO1lBQ1JFLE9BQU9DLE9BQU8sQ0FBQ0MsU0FBUyxDQUFDLENBQUMsR0FBRyxJQUFJO1lBQ2pDRixPQUFPRyxRQUFRLENBQUM7Z0JBQ1pDLEtBQUs7Z0JBQ0xDLE1BQU07Z0JBQ05DLFVBQVU7WUFDZDtZQUNGTixPQUFPTyxRQUFRLENBQUNDLENBQUM7UUFDbkIsQ0FBQztJQUVMLEdBQUc7UUFBQ1Y7S0FBUztJQUdiLElBQU1XLGNBQWMsU0FBQ0MsR0FBTTtRQUN2QlgsWUFBWTttQkFBTSxJQUFJOztRQUN0QlcsRUFBRUMsZUFBZTtJQUNyQjtJQUVBLHFCQUNJOzswQkFDQSw4REFBQ0M7Z0JBQUlDLFdBQVd2QixrR0FBd0I7Z0JBQUd3QixTQUFTLFNBQUNKOzJCQUFNRCxZQUFZQzs7O2tDQUNuRSw4REFBQ0U7d0JBQUlDLFdBQVd2QiwyR0FBaUM7a0NBQzdDLDRFQUFDTTs0QkFBS21CLEtBQUtuQjs0QkFBS29CLEtBQUk7Ozs7Ozs7Ozs7O2tDQUV4Qiw4REFBQ0o7d0JBQUlDLFdBQVd2Qix5R0FBK0I7OzBDQUM1Qyw4REFBQzJCOzBDQUFJcEI7Ozs7OzswQ0FDRiw4REFBQ2U7Z0NBQUlDLFdBQVd2QixvR0FBMEI7O2tEQUN0Qyw4REFBQzRCO2tEQUFPOzs7Ozs7a0RBQ1IsOERBQUNBO2tEQUFPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFJckJwQiwwQkFBWSw4REFBQ0osZ0VBQVdBO2dCQUFDRSxLQUFLQTtnQkFBS0MsU0FBU0E7Z0JBQVNFLGFBQWFBOzs7Ozs7OztBQUczRSxDQUFDO0dBMUN3Qko7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvU2luZ2xlUmVjZWlwdC9zaW5nbGVSZWNlaXB0LmpzeD8xMzlkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSAnLi4vU2luZ2xlUmVjZWlwdC9zaW5nbGVSZWNlaXB0Lm1vZHVsZS5jc3MnXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgIFBvcFVwV2luZG93ICBmcm9tICcuLi9Qb3BVcFdpbmRvdy9wb3BVcFdpbmRvdydcblxuXG5cblxuIGV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNpbmdsZVJlY2VpcHQoe2ltZywgaGVhZGluZ30pe1xuXG4gICAgY29uc3QgW2lzSGlkZGVuLCBzZXRJc0hpZGRlbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIFxuICAgICAgICBpZihpc0hpZGRlbil7XG4gICAgICAgICAgICB3aW5kb3cuaGlzdG9yeS5wdXNoU3RhdGUoe30sICcnLCAncmVjZWlwdCcpXG4gICAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oe1xuICAgICAgICAgICAgICAgIHRvcDogMCxcbiAgICAgICAgICAgICAgICBsZWZ0OiAwLFxuICAgICAgICAgICAgICAgIGJlaGF2aW9yOiAnc21vb3RoJ1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICB3aW5kb3cuZG9jdW1lbnQuYiAgXG4gICAgICAgIH1cbiBcbiAgICB9LCBbaXNIaWRkZW5dKVxuXG5cbiAgICBjb25zdCBvcGVuUmVjZWlwdCA9IChlKSA9PiB7XG4gICAgICAgIHNldElzSGlkZGVuKCgpID0+IHRydWUpXG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzW1wic2luZ2xlLXJlY2VpcHRcIl19ICBvbkNsaWNrPXsoZSkgPT4gb3BlblJlY2VpcHQoZSl9ID5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbXCJpbWFnZS1jb250YWluZXItcmVjZWlwdFwiXX0+XG4gICAgICAgICAgICAgICAgPGltZyAgc3JjPXtpbWd9IGFsdD1cInJlY2VpcHQtaW1nXCIvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzW1wic2luZ2xlLXJlY2VpcHQtYnV0dG9uXCJdfT5cbiAgICAgICAgICAgICAgIDxoMj57aGVhZGluZ308L2gyPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1tcImJ1dHRvbi1jb250YWluZXJcIl19PlxuICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24+UGFzdGE8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uPkN1cnJ5PC9idXR0b24+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAge2lzSGlkZGVuICYmIDxQb3BVcFdpbmRvdyBpbWc9e2ltZ30gaGVhZGluZz17aGVhZGluZ30gc2V0SXNIaWRkZW49e3NldElzSGlkZGVufS8+fVxuICAgICAgICA8Lz5cbiAgICApXG59XG5cbiJdLCJuYW1lcyI6WyJzdHlsZXMiLCJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiUG9wVXBXaW5kb3ciLCJTaW5nbGVSZWNlaXB0IiwiaW1nIiwiaGVhZGluZyIsImlzSGlkZGVuIiwic2V0SXNIaWRkZW4iLCJ3aW5kb3ciLCJoaXN0b3J5IiwicHVzaFN0YXRlIiwic2Nyb2xsVG8iLCJ0b3AiLCJsZWZ0IiwiYmVoYXZpb3IiLCJkb2N1bWVudCIsImIiLCJvcGVuUmVjZWlwdCIsImUiLCJzdG9wUHJvcGFnYXRpb24iLCJkaXYiLCJjbGFzc05hbWUiLCJvbkNsaWNrIiwic3JjIiwiYWx0IiwiaDIiLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/SingleReceipt/singleReceipt.jsx\n"));

/***/ })

});