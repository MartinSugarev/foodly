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

/***/ "./components/SingleReceipt/singleReceipt.js":
/*!***************************************************!*\
  !*** ./components/SingleReceipt/singleReceipt.js ***!
  \***************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ SingleReceipt; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/src/_sliced_to_array.mjs */ \"./node_modules/@swc/helpers/src/_sliced_to_array.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _PopUpWindow_popUpWindow__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../PopUpWindow/popUpWindow */ \"./components/PopUpWindow/popUpWindow.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction SingleReceipt(param) {\n    var img = param.img, heading = param.heading;\n    _s();\n    var _useState = (0,_swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), 2), isHidden = _useState[0], setIsHidden = _useState[1];\n    var router = use;\n    // useEffect(() => {\n    //     if(isHidden){\n    //         window.history.pushState({}, '', 'receipt')\n    //     }else{\n    //    //     history('/')\n    //     }\n    // }, [isHidden])\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"single-receipt\",\n                onClick: function() {\n                    return setIsHidden(function() {\n                        return true;\n                    });\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"image-container-receipt\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: img,\n                            alt: \"receipt-img\"\n                        }, void 0, false, {\n                            fileName: \"/Users/macbookair/Desktop/foodly2/components/SingleReceipt/singleReceipt.js\",\n                            lineNumber: 26,\n                            columnNumber: 17\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/macbookair/Desktop/foodly2/components/SingleReceipt/singleReceipt.js\",\n                        lineNumber: 25,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"single-receipt-button\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                children: heading\n                            }, void 0, false, {\n                                fileName: \"/Users/macbookair/Desktop/foodly2/components/SingleReceipt/singleReceipt.js\",\n                                lineNumber: 29,\n                                columnNumber: 16\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"btn-container\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        children: \"Pasta\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/macbookair/Desktop/foodly2/components/SingleReceipt/singleReceipt.js\",\n                                        lineNumber: 31,\n                                        columnNumber: 23\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        children: \"Curry\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/macbookair/Desktop/foodly2/components/SingleReceipt/singleReceipt.js\",\n                                        lineNumber: 32,\n                                        columnNumber: 23\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/macbookair/Desktop/foodly2/components/SingleReceipt/singleReceipt.js\",\n                                lineNumber: 30,\n                                columnNumber: 19\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/macbookair/Desktop/foodly2/components/SingleReceipt/singleReceipt.js\",\n                        lineNumber: 28,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/macbookair/Desktop/foodly2/components/SingleReceipt/singleReceipt.js\",\n                lineNumber: 24,\n                columnNumber: 9\n            }, this),\n            isHidden && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_PopUpWindow_popUpWindow__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                img: img,\n                heading: heading,\n                setIsHidden: setIsHidden\n            }, void 0, false, {\n                fileName: \"/Users/macbookair/Desktop/foodly2/components/SingleReceipt/singleReceipt.js\",\n                lineNumber: 36,\n                columnNumber: 22\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(SingleReceipt, \"isktc+i3WB/sExXbN6g9ACZHbOY=\");\n_c = SingleReceipt;\nvar _c;\n$RefreshReg$(_c, \"SingleReceipt\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1NpbmdsZVJlY2VpcHQvc2luZ2xlUmVjZWlwdC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTs7O0FBQWlEO0FBQ0s7QUFDZjtBQUNGO0FBSXJCLFNBQVNLLGNBQWMsS0FBYyxFQUFDO1FBQWRDLE1BQUQsTUFBQ0EsS0FBS0MsVUFBTixNQUFNQTs7SUFFekMsSUFBZ0NOLFlBQUFBLGdGQUFBQSxDQUFBQSwrQ0FBUUEsQ0FBQyxLQUFLLE9BQXZDTyxXQUF5QlAsY0FBZlEsY0FBZVI7SUFDakMsSUFBSVMsU0FBU0M7SUFDWixvQkFBb0I7SUFFcEIsb0JBQW9CO0lBQ3BCLHNEQUFzRDtJQUN0RCxhQUFhO0lBQ2IseUJBQXlCO0lBQ3pCLFFBQVE7SUFFUixpQkFBaUI7SUFFakIscUJBQ0k7OzBCQUNBLDhEQUFDQztnQkFBSUMsV0FBVTtnQkFBa0JDLFNBQVM7MkJBQU1MLFlBQVk7K0JBQU0sSUFBSTs7OztrQ0FDbEUsOERBQUNHO3dCQUFJQyxXQUFVO2tDQUNYLDRFQUFDUDs0QkFBS1MsS0FBS1Q7NEJBQUtVLEtBQUk7Ozs7Ozs7Ozs7O2tDQUV4Qiw4REFBQ0o7d0JBQUlDLFdBQVU7OzBDQUNaLDhEQUFDSTswQ0FBSVY7Ozs7OzswQ0FDRiw4REFBQ0s7Z0NBQUlDLFdBQVU7O2tEQUNYLDhEQUFDSztrREFBTzs7Ozs7O2tEQUNSLDhEQUFDQTtrREFBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBSXJCViwwQkFBWSw4REFBQ0wsZ0VBQVdBO2dCQUFDRyxLQUFLQTtnQkFBS0MsU0FBU0E7Z0JBQVNFLGFBQWFBOzs7Ozs7OztBQUczRSxDQUFDO0dBL0J3Qko7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TaW5nbGVSZWNlaXB0L3NpbmdsZVJlY2VpcHQuanM/MDU5ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgIFBvcFVwV2luZG93ICBmcm9tICcuLi9Qb3BVcFdpbmRvdy9wb3BVcFdpbmRvdydcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xuaW1wb3J0ICAnLi9zaW5nbGVSZWNlaXB0Lm1vZHVsZS5jc3MnO1xuXG5cblxuIGV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNpbmdsZVJlY2VpcHQoe2ltZywgaGVhZGluZ30pe1xuXG4gICAgY29uc3QgW2lzSGlkZGVuLCBzZXRJc0hpZGRlbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICBsZXQgcm91dGVyID0gdXNlXG4gICAgLy8gdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgXG4gICAgLy8gICAgIGlmKGlzSGlkZGVuKXtcbiAgICAvLyAgICAgICAgIHdpbmRvdy5oaXN0b3J5LnB1c2hTdGF0ZSh7fSwgJycsICdyZWNlaXB0JylcbiAgICAvLyAgICAgfWVsc2V7XG4gICAgLy8gICAgLy8gICAgIGhpc3RvcnkoJy8nKVxuICAgIC8vICAgICB9XG4gXG4gICAgLy8gfSwgW2lzSGlkZGVuXSlcblxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2luZ2xlLXJlY2VpcHRcIiAgb25DbGljaz17KCkgPT4gc2V0SXNIaWRkZW4oKCkgPT4gdHJ1ZSl9ID5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1hZ2UtY29udGFpbmVyLXJlY2VpcHRcIj5cbiAgICAgICAgICAgICAgICA8aW1nICBzcmM9e2ltZ30gYWx0PVwicmVjZWlwdC1pbWdcIi8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2luZ2xlLXJlY2VpcHQtYnV0dG9uXCI+XG4gICAgICAgICAgICAgICA8aDI+e2hlYWRpbmd9PC9oMj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnRuLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24+UGFzdGE8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uPkN1cnJ5PC9idXR0b24+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAge2lzSGlkZGVuICYmIDxQb3BVcFdpbmRvdyBpbWc9e2ltZ30gaGVhZGluZz17aGVhZGluZ30gc2V0SXNIaWRkZW49e3NldElzSGlkZGVufS8+fVxuICAgICAgICA8Lz5cbiAgICApXG59XG5cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiUG9wVXBXaW5kb3ciLCJ1c2VSb3V0ZXIiLCJTaW5nbGVSZWNlaXB0IiwiaW1nIiwiaGVhZGluZyIsImlzSGlkZGVuIiwic2V0SXNIaWRkZW4iLCJyb3V0ZXIiLCJ1c2UiLCJkaXYiLCJjbGFzc05hbWUiLCJvbkNsaWNrIiwic3JjIiwiYWx0IiwiaDIiLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/SingleReceipt/singleReceipt.js\n"));

/***/ })

});