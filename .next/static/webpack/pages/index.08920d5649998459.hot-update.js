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

/***/ "./src/components/PopUpWindow/popUpWindow.jsx":
/*!****************************************************!*\
  !*** ./src/components/PopUpWindow/popUpWindow.jsx ***!
  \****************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ PopUpWindow; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _PopUpWindow_popWindow_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../PopUpWindow/popWindow.module.css */ \"./src/components/PopUpWindow/popWindow.module.css\");\n/* harmony import */ var _PopUpWindow_popWindow_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_PopUpWindow_popWindow_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _IngredientsLink_ingredientsLink__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../IngredientsLink/ingredientsLink */ \"./src/components/IngredientsLink/ingredientsLink.jsx\");\n\nvar _s = $RefreshSig$();\n\n\n\nfunction PopUpWindow(param) {\n    var img = param.img, heading = param.heading, setIsHidden = param.setIsHidden;\n    _s();\n    var componentRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var handleClickOutside = function(e) {\n            if (componentRef.current && !componentRef.current.contains(e.target)) {\n                setIsHidden(function() {\n                    return false;\n                });\n                window.history.back();\n            }\n        };\n        document.addEventListener(\"click\", function(e) {\n            handleClickOutside(e);\n        });\n        return function() {\n            document.removeEventListener(\"click\", function(e) {\n                return handleClickOutside(e);\n            });\n        };\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_PopUpWindow_popWindow_module_css__WEBPACK_IMPORTED_MODULE_3___default()[\"pop-window-container active\"]),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            ref: componentRef,\n            className: (_PopUpWindow_popWindow_module_css__WEBPACK_IMPORTED_MODULE_3___default()[\"pop-window\"]),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_PopUpWindow_popWindow_module_css__WEBPACK_IMPORTED_MODULE_3___default().left),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_PopUpWindow_popWindow_module_css__WEBPACK_IMPORTED_MODULE_3___default()[\"single-img-container\"]),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: img,\n                                alt: \"logo\"\n                            }, void 0, false, {\n                                fileName: \"/Users/macbookair/Desktop/foodly/src/components/PopUpWindow/popUpWindow.jsx\",\n                                lineNumber: 36,\n                                columnNumber: 20\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/macbookair/Desktop/foodly/src/components/PopUpWindow/popUpWindow.jsx\",\n                            lineNumber: 35,\n                            columnNumber: 16\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_PopUpWindow_popWindow_module_css__WEBPACK_IMPORTED_MODULE_3___default().ingredients),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                                    children: \"Ingredients\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/macbookair/Desktop/foodly/src/components/PopUpWindow/popUpWindow.jsx\",\n                                    lineNumber: 39,\n                                    columnNumber: 20\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: (_PopUpWindow_popWindow_module_css__WEBPACK_IMPORTED_MODULE_3___default()[\"ingredients-container\"]),\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_IngredientsLink_ingredientsLink__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                                            fileName: \"/Users/macbookair/Desktop/foodly/src/components/PopUpWindow/popUpWindow.jsx\",\n                                            lineNumber: 41,\n                                            columnNumber: 25\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_IngredientsLink_ingredientsLink__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                                            fileName: \"/Users/macbookair/Desktop/foodly/src/components/PopUpWindow/popUpWindow.jsx\",\n                                            lineNumber: 42,\n                                            columnNumber: 25\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_IngredientsLink_ingredientsLink__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                                            fileName: \"/Users/macbookair/Desktop/foodly/src/components/PopUpWindow/popUpWindow.jsx\",\n                                            lineNumber: 43,\n                                            columnNumber: 25\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_IngredientsLink_ingredientsLink__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                                            fileName: \"/Users/macbookair/Desktop/foodly/src/components/PopUpWindow/popUpWindow.jsx\",\n                                            lineNumber: 44,\n                                            columnNumber: 25\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_IngredientsLink_ingredientsLink__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                                            fileName: \"/Users/macbookair/Desktop/foodly/src/components/PopUpWindow/popUpWindow.jsx\",\n                                            lineNumber: 45,\n                                            columnNumber: 25\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/macbookair/Desktop/foodly/src/components/PopUpWindow/popUpWindow.jsx\",\n                                    lineNumber: 40,\n                                    columnNumber: 20\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/macbookair/Desktop/foodly/src/components/PopUpWindow/popUpWindow.jsx\",\n                            lineNumber: 38,\n                            columnNumber: 16\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/macbookair/Desktop/foodly/src/components/PopUpWindow/popUpWindow.jsx\",\n                    lineNumber: 34,\n                    columnNumber: 12\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_PopUpWindow_popWindow_module_css__WEBPACK_IMPORTED_MODULE_3___default().right),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            children: heading\n                        }, void 0, false, {\n                            fileName: \"/Users/macbookair/Desktop/foodly/src/components/PopUpWindow/popUpWindow.jsx\",\n                            lineNumber: 50,\n                            columnNumber: 16\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            children: [\n                                \" \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    src: \"icon-play.svg\",\n                                    alt: \"icon-play\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/macbookair/Desktop/foodly/src/components/PopUpWindow/popUpWindow.jsx\",\n                                    lineNumber: 51,\n                                    columnNumber: 25\n                                }, this),\n                                \"  play video\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/macbookair/Desktop/foodly/src/components/PopUpWindow/popUpWindow.jsx\",\n                            lineNumber: 51,\n                            columnNumber: 16\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                            children: \"instructions\"\n                        }, void 0, false, {\n                            fileName: \"/Users/macbookair/Desktop/foodly/src/components/PopUpWindow/popUpWindow.jsx\",\n                            lineNumber: 52,\n                            columnNumber: 16\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: \"Bring a large pot of water to a boil. Add kosher salt to the boiling water, then add the pasta. Cook according to the package instructions, about 9 minutes.\\\\r\\\\nIn a large skillet over medium-high heat, add the olive oil and heat until the oil starts to shimmer. Add the garlic and cook, stirring, until fragrant, 1 to 2 minutes.\"\n                        }, void 0, false, {\n                            fileName: \"/Users/macbookair/Desktop/foodly/src/components/PopUpWindow/popUpWindow.jsx\",\n                            lineNumber: 53,\n                            columnNumber: 16\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_PopUpWindow_popWindow_module_css__WEBPACK_IMPORTED_MODULE_3___default()[\"right-btn-container\"]),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    children: \"Pasta\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/macbookair/Desktop/foodly/src/components/PopUpWindow/popUpWindow.jsx\",\n                                    lineNumber: 55,\n                                    columnNumber: 20\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    children: \"Curry\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/macbookair/Desktop/foodly/src/components/PopUpWindow/popUpWindow.jsx\",\n                                    lineNumber: 56,\n                                    columnNumber: 20\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/macbookair/Desktop/foodly/src/components/PopUpWindow/popUpWindow.jsx\",\n                            lineNumber: 54,\n                            columnNumber: 16\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/macbookair/Desktop/foodly/src/components/PopUpWindow/popUpWindow.jsx\",\n                    lineNumber: 49,\n                    columnNumber: 12\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/macbookair/Desktop/foodly/src/components/PopUpWindow/popUpWindow.jsx\",\n            lineNumber: 33,\n            columnNumber: 9\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/macbookair/Desktop/foodly/src/components/PopUpWindow/popUpWindow.jsx\",\n        lineNumber: 32,\n        columnNumber: 9\n    }, this);\n}\n_s(PopUpWindow, \"7dmkr9//r0T0aNf8G6+s3e+oH2s=\");\n_c = PopUpWindow;\nvar _c;\n$RefreshReg$(_c, \"PopUpWindow\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Qb3BVcFdpbmRvdy9wb3BVcFdpbmRvdy5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7QUFBd0Q7QUFDUDtBQUNlO0FBR2pELFNBQVNLLFlBQWEsS0FBMkIsRUFBQztRQUEzQkMsTUFBRCxNQUFDQSxLQUFLQyxVQUFOLE1BQU1BLFNBQVNDLGNBQWYsTUFBZUE7O0lBR2hELElBQU1DLGVBQWVOLDZDQUFNQTtJQUczQkQsZ0RBQVNBLENBQUMsV0FBTTtRQUVkLElBQU1RLHFCQUFxQixTQUFDQyxHQUFNO1lBRTlCLElBQUdGLGFBQWFHLE9BQU8sSUFBSSxDQUFDSCxhQUFhRyxPQUFPLENBQUNDLFFBQVEsQ0FBQ0YsRUFBRUcsTUFBTSxHQUFFO2dCQUNoRU4sWUFBWTsyQkFBTSxLQUFLOztnQkFDdkJPLE9BQU9DLE9BQU8sQ0FBQ0MsSUFBSTtZQUN2QixDQUFDO1FBQ0w7UUFDSUMsU0FBU0MsZ0JBQWdCLENBQUMsU0FBUyxTQUFTUixDQUFDLEVBQUM7WUFDekNELG1CQUFtQkM7UUFDeEI7UUFFQSxPQUFPLFdBQU07WUFDVE8sU0FBU0UsbUJBQW1CLENBQUMsU0FBUyxTQUFDVDt1QkFBTUQsbUJBQW1CQzs7UUFDcEU7SUFFTixHQUFHLEVBQUU7SUFFTCxxQkFDSSw4REFBQ1U7UUFBSUMsV0FBV3RCLHlHQUFxQztrQkFDckQsNEVBQUNxQjtZQUFJRSxLQUFLZDtZQUFjYSxXQUFXdEIsd0ZBQW9COzs4QkFDcEQsOERBQUNxQjtvQkFBSUMsV0FBV3RCLCtFQUFjOztzQ0FDMUIsOERBQUNxQjs0QkFBSUMsV0FBV3RCLGtHQUE4QjtzQ0FDMUMsNEVBQUNNO2dDQUFJa0IsS0FBS2xCO2dDQUFLbUIsS0FBSTs7Ozs7Ozs7Ozs7c0NBRXZCLDhEQUFDSjs0QkFBSUMsV0FBV3RCLHNGQUFxQjs7OENBQ2pDLDhEQUFDMEI7OENBQUc7Ozs7Ozs4Q0FDSiw4REFBQ0w7b0NBQUlDLFdBQVd0QixtR0FBK0I7O3NEQUMxQyw4REFBQ0ksd0VBQWVBOzs7OztzREFDaEIsOERBQUNBLHdFQUFlQTs7Ozs7c0RBQ2hCLDhEQUFDQSx3RUFBZUE7Ozs7O3NEQUNoQiw4REFBQ0Esd0VBQWVBOzs7OztzREFDaEIsOERBQUNBLHdFQUFlQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OEJBSTdCLDhEQUFDaUI7b0JBQUlDLFdBQVd0QixnRkFBZTs7c0NBQzNCLDhEQUFDMkI7c0NBQUlwQjs7Ozs7O3NDQUNMLDhEQUFDcUI7O2dDQUFPOzhDQUFDLDhEQUFDdEI7b0NBQUlrQixLQUFJO29DQUFnQkMsS0FBSTs7Ozs7O2dDQUFhOzs7Ozs7O3NDQUNuRCw4REFBQ0M7c0NBQUc7Ozs7OztzQ0FDSiw4REFBQ0c7c0NBQUU7Ozs7OztzQ0FDSCw4REFBQ1I7NEJBQUlDLFdBQVd0QixpR0FBNkI7OzhDQUN6Qyw4REFBQzRCOzhDQUFPOzs7Ozs7OENBQ1IsOERBQUNBOzhDQUFPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU0zQixDQUFDO0dBeER1QnZCO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1BvcFVwV2luZG93L3BvcFVwV2luZG93LmpzeD9jNGQ0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSAnLi4vUG9wVXBXaW5kb3cvcG9wV2luZG93Lm1vZHVsZS5jc3MnXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VSZWYsIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgSW5ncmVkaWVudHNMaW5rIGZyb20gJy4uL0luZ3JlZGllbnRzTGluay9pbmdyZWRpZW50c0xpbmsnXG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUG9wVXBXaW5kb3cgKHtpbWcsIGhlYWRpbmcsIHNldElzSGlkZGVufSl7XG5cblxuICAgIGNvbnN0IGNvbXBvbmVudFJlZiA9IHVzZVJlZigpXG5cblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG5cbiAgICAgIGNvbnN0IGhhbmRsZUNsaWNrT3V0c2lkZSA9IChlKSA9PiB7XG4gIFxuICAgICAgICAgIGlmKGNvbXBvbmVudFJlZi5jdXJyZW50ICYmICFjb21wb25lbnRSZWYuY3VycmVudC5jb250YWlucyhlLnRhcmdldCkpeyAgICBcbiAgICAgICAgICAgICAgc2V0SXNIaWRkZW4oKCkgPT4gZmFsc2UpIFxuICAgICAgICAgICAgICB3aW5kb3cuaGlzdG9yeS5iYWNrKClcbiAgICAgICAgICB9XG4gICAgICB9XG4gICAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKXtcbiAgICAgICAgICAgICAgIGhhbmRsZUNsaWNrT3V0c2lkZShlKVxuICAgICAgICAgIH0pXG5cbiAgICAgICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiBoYW5kbGVDbGlja091dHNpZGUoZSkpXG4gICAgICAgICAgfVxuXG4gICAgfSwgW10pXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzW1wicG9wLXdpbmRvdy1jb250YWluZXIgYWN0aXZlXCJdfT4gICAgXG4gICAgICAgIDxkaXYgcmVmPXtjb21wb25lbnRSZWZ9IGNsYXNzTmFtZT17c3R5bGVzW1wicG9wLXdpbmRvd1wiXX0gPlxuICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzW1wibGVmdFwiXX0+XG4gICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzW1wic2luZ2xlLWltZy1jb250YWluZXJcIl19PlxuICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtpbWd9IGFsdD1cImxvZ29cIiAvPlxuICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzW1wiaW5ncmVkaWVudHNcIl19PlxuICAgICAgICAgICAgICAgICAgIDxoNT5JbmdyZWRpZW50czwvaDU+XG4gICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1tcImluZ3JlZGllbnRzLWNvbnRhaW5lclwiXX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8SW5ncmVkaWVudHNMaW5rIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8SW5ncmVkaWVudHNMaW5rIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8SW5ncmVkaWVudHNMaW5rIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8SW5ncmVkaWVudHNMaW5rIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8SW5ncmVkaWVudHNMaW5rIC8+XG4gICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbXCJyaWdodFwiXX0+XG4gICAgICAgICAgICAgICA8aDE+e2hlYWRpbmd9PC9oMT5cbiAgICAgICAgICAgICAgIDxidXR0b24+IDxpbWcgc3JjPVwiaWNvbi1wbGF5LnN2Z1wiIGFsdD1cImljb24tcGxheVwiLz4gIHBsYXkgdmlkZW88L2J1dHRvbj5cbiAgICAgICAgICAgICAgIDxoNT5pbnN0cnVjdGlvbnM8L2g1PlxuICAgICAgICAgICAgICAgPHA+QnJpbmcgYSBsYXJnZSBwb3Qgb2Ygd2F0ZXIgdG8gYSBib2lsLiBBZGQga29zaGVyIHNhbHQgdG8gdGhlIGJvaWxpbmcgd2F0ZXIsIHRoZW4gYWRkIHRoZSBwYXN0YS4gQ29vayBhY2NvcmRpbmcgdG8gdGhlIHBhY2thZ2UgaW5zdHJ1Y3Rpb25zLCBhYm91dCA5IG1pbnV0ZXMuXFxyXFxuSW4gYSBsYXJnZSBza2lsbGV0IG92ZXIgbWVkaXVtLWhpZ2ggaGVhdCwgYWRkIHRoZSBvbGl2ZSBvaWwgYW5kIGhlYXQgdW50aWwgdGhlIG9pbCBzdGFydHMgdG8gc2hpbW1lci4gQWRkIHRoZSBnYXJsaWMgYW5kIGNvb2ssIHN0aXJyaW5nLCB1bnRpbCBmcmFncmFudCwgMSB0byAyIG1pbnV0ZXMuPC9wPlxuICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1tcInJpZ2h0LWJ0bi1jb250YWluZXJcIl19PlxuICAgICAgICAgICAgICAgICAgIDxidXR0b24+UGFzdGE8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICA8YnV0dG9uPkN1cnJ5PC9idXR0b24+XG4gICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICA8L2Rpdj5cbiAgICAgPC9kaXY+IFxuICAgIClcbn1cbiJdLCJuYW1lcyI6WyJzdHlsZXMiLCJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVJlZiIsIkluZ3JlZGllbnRzTGluayIsIlBvcFVwV2luZG93IiwiaW1nIiwiaGVhZGluZyIsInNldElzSGlkZGVuIiwiY29tcG9uZW50UmVmIiwiaGFuZGxlQ2xpY2tPdXRzaWRlIiwiZSIsImN1cnJlbnQiLCJjb250YWlucyIsInRhcmdldCIsIndpbmRvdyIsImhpc3RvcnkiLCJiYWNrIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImRpdiIsImNsYXNzTmFtZSIsInJlZiIsInNyYyIsImFsdCIsImg1IiwiaDEiLCJidXR0b24iLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/PopUpWindow/popUpWindow.jsx\n"));

/***/ })

});