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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ PopUpWindow; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _PopUpWindow_popWindow_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../PopUpWindow/popWindow.module.css */ \"./src/components/PopUpWindow/popWindow.module.css\");\n/* harmony import */ var _PopUpWindow_popWindow_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_PopUpWindow_popWindow_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _IngredientsLink_ingredientsLink__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../IngredientsLink/ingredientsLink */ \"./src/components/IngredientsLink/ingredientsLink.jsx\");\n\nvar _s = $RefreshSig$();\n\n\n\nfunction PopUpWindow(param) {\n    var img = param.img, heading = param.heading, setIsHidden = param.setIsHidden;\n    _s();\n    var componentRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {});\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var handleClickOutside = function(e) {\n            if (componentRef.current && !componentRef.current.contains(e.target)) {\n                setIsHidden(function() {\n                    return false;\n                });\n                window.history.back();\n            }\n        };\n        document.addEventListener(\"click\", function(e) {\n            handleClickOutside(e);\n        });\n        return function() {\n            document.removeEventListener(\"click\", function(e) {\n                return handleClickOutside(e);\n            });\n        };\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_PopUpWindow_popWindow_module_css__WEBPACK_IMPORTED_MODULE_3___default()[\"pop-window-container active\"]),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            ref: componentRef,\n            className: (_PopUpWindow_popWindow_module_css__WEBPACK_IMPORTED_MODULE_3___default()[\"pop-window\"]),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_PopUpWindow_popWindow_module_css__WEBPACK_IMPORTED_MODULE_3___default()[\"single-img-container\"]),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        className: (_PopUpWindow_popWindow_module_css__WEBPACK_IMPORTED_MODULE_3___default().img),\n                        src: img,\n                        alt: \"logo\"\n                    }, void 0, false, {\n                        fileName: \"/Users/macbookair/Desktop/foodly/src/components/PopUpWindow/popUpWindow.jsx\",\n                        lineNumber: 40,\n                        columnNumber: 20\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/macbookair/Desktop/foodly/src/components/PopUpWindow/popUpWindow.jsx\",\n                    lineNumber: 39,\n                    columnNumber: 16\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_PopUpWindow_popWindow_module_css__WEBPACK_IMPORTED_MODULE_3___default().ingredients),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                            className: (_PopUpWindow_popWindow_module_css__WEBPACK_IMPORTED_MODULE_3___default().h5),\n                            children: \"Ingredients\"\n                        }, void 0, false, {\n                            fileName: \"/Users/macbookair/Desktop/foodly/src/components/PopUpWindow/popUpWindow.jsx\",\n                            lineNumber: 43,\n                            columnNumber: 20\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_PopUpWindow_popWindow_module_css__WEBPACK_IMPORTED_MODULE_3___default()[\"ingredients-container\"]),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_IngredientsLink_ingredientsLink__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                                    fileName: \"/Users/macbookair/Desktop/foodly/src/components/PopUpWindow/popUpWindow.jsx\",\n                                    lineNumber: 45,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_IngredientsLink_ingredientsLink__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                                    fileName: \"/Users/macbookair/Desktop/foodly/src/components/PopUpWindow/popUpWindow.jsx\",\n                                    lineNumber: 46,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_IngredientsLink_ingredientsLink__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                                    fileName: \"/Users/macbookair/Desktop/foodly/src/components/PopUpWindow/popUpWindow.jsx\",\n                                    lineNumber: 47,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_IngredientsLink_ingredientsLink__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                                    fileName: \"/Users/macbookair/Desktop/foodly/src/components/PopUpWindow/popUpWindow.jsx\",\n                                    lineNumber: 48,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_IngredientsLink_ingredientsLink__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                                    fileName: \"/Users/macbookair/Desktop/foodly/src/components/PopUpWindow/popUpWindow.jsx\",\n                                    lineNumber: 49,\n                                    columnNumber: 25\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/macbookair/Desktop/foodly/src/components/PopUpWindow/popUpWindow.jsx\",\n                            lineNumber: 44,\n                            columnNumber: 20\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/macbookair/Desktop/foodly/src/components/PopUpWindow/popUpWindow.jsx\",\n                    lineNumber: 42,\n                    columnNumber: 16\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_PopUpWindow_popWindow_module_css__WEBPACK_IMPORTED_MODULE_3___default()[\"right-top\"]),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: (_PopUpWindow_popWindow_module_css__WEBPACK_IMPORTED_MODULE_3___default().h1),\n                            children: heading\n                        }, void 0, false, {\n                            fileName: \"/Users/macbookair/Desktop/foodly/src/components/PopUpWindow/popUpWindow.jsx\",\n                            lineNumber: 55,\n                            columnNumber: 16\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: (_PopUpWindow_popWindow_module_css__WEBPACK_IMPORTED_MODULE_3___default()[\"small-button\"]),\n                            children: [\n                                \" \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    src: \"icon-play.svg\",\n                                    alt: \"icon-play\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/macbookair/Desktop/foodly/src/components/PopUpWindow/popUpWindow.jsx\",\n                                    lineNumber: 56,\n                                    columnNumber: 60\n                                }, this),\n                                \"  play video\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/macbookair/Desktop/foodly/src/components/PopUpWindow/popUpWindow.jsx\",\n                            lineNumber: 56,\n                            columnNumber: 16\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/macbookair/Desktop/foodly/src/components/PopUpWindow/popUpWindow.jsx\",\n                    lineNumber: 53,\n                    columnNumber: 13\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_PopUpWindow_popWindow_module_css__WEBPACK_IMPORTED_MODULE_3___default()[\"bottom-right\"]),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                            className: (_PopUpWindow_popWindow_module_css__WEBPACK_IMPORTED_MODULE_3___default().h5),\n                            children: \"instructions\"\n                        }, void 0, false, {\n                            fileName: \"/Users/macbookair/Desktop/foodly/src/components/PopUpWindow/popUpWindow.jsx\",\n                            lineNumber: 60,\n                            columnNumber: 16\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: \"Bring a large pot of water to a boil. Add kosher salt to the boiling water, then add the pasta. Cook according to the package instructions, about 9 minutes.\\\\r\\\\nIn a large skillet over medium-high heat, add the olive oil and heat until the oil starts to shimmer. Add the garlic and cook, stirring, until fragrant, 1 to 2 minutes. Add the chopped tomatoes, red chile flakes, Italian seasoning and salt and pepper to taste. Bring to a boil and cook for 5 minutes. Remove from the heat and add the chopped basil.\\\\r\\\\nDrain the pasta and add it to the sauce. Garnish with Parmigiano-Reggiano flakes and more basil and serve warm.\"\n                        }, void 0, false, {\n                            fileName: \"/Users/macbookair/Desktop/foodly/src/components/PopUpWindow/popUpWindow.jsx\",\n                            lineNumber: 61,\n                            columnNumber: 16\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_PopUpWindow_popWindow_module_css__WEBPACK_IMPORTED_MODULE_3___default()[\"right-btn-container\"]),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: (_PopUpWindow_popWindow_module_css__WEBPACK_IMPORTED_MODULE_3___default()[\"big-button\"]),\n                                    children: \"Pasta\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/macbookair/Desktop/foodly/src/components/PopUpWindow/popUpWindow.jsx\",\n                                    lineNumber: 63,\n                                    columnNumber: 20\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: (_PopUpWindow_popWindow_module_css__WEBPACK_IMPORTED_MODULE_3___default()[\"big-button\"]),\n                                    children: \"Curry\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/macbookair/Desktop/foodly/src/components/PopUpWindow/popUpWindow.jsx\",\n                                    lineNumber: 64,\n                                    columnNumber: 20\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/macbookair/Desktop/foodly/src/components/PopUpWindow/popUpWindow.jsx\",\n                            lineNumber: 62,\n                            columnNumber: 16\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/macbookair/Desktop/foodly/src/components/PopUpWindow/popUpWindow.jsx\",\n                    lineNumber: 58,\n                    columnNumber: 13\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/macbookair/Desktop/foodly/src/components/PopUpWindow/popUpWindow.jsx\",\n            lineNumber: 37,\n            columnNumber: 9\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/macbookair/Desktop/foodly/src/components/PopUpWindow/popUpWindow.jsx\",\n        lineNumber: 36,\n        columnNumber: 9\n    }, this);\n}\n_s(PopUpWindow, \"Y1zxoNm/6mXvM6xOcXt1/0bNlBY=\");\n_c = PopUpWindow;\nvar _c;\n$RefreshReg$(_c, \"PopUpWindow\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Qb3BVcFdpbmRvdy9wb3BVcFdpbmRvdy5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7QUFBd0Q7QUFDUDtBQUNlO0FBR2pELFNBQVNLLFlBQWEsS0FBMkIsRUFBQztRQUEzQkMsTUFBRCxNQUFDQSxLQUFLQyxVQUFOLE1BQU1BLFNBQVNDLGNBQWYsTUFBZUE7O0lBR2hELElBQU1DLGVBQWVOLDZDQUFNQTtJQUUzQkQsZ0RBQVNBLENBQUMsV0FBTSxDQUVoQjtJQUdBQSxnREFBU0EsQ0FBQyxXQUFNO1FBRWQsSUFBTVEscUJBQXFCLFNBQUNDLEdBQU07WUFFOUIsSUFBR0YsYUFBYUcsT0FBTyxJQUFJLENBQUNILGFBQWFHLE9BQU8sQ0FBQ0MsUUFBUSxDQUFDRixFQUFFRyxNQUFNLEdBQUU7Z0JBQ2hFTixZQUFZOzJCQUFNLEtBQUs7O2dCQUN2Qk8sT0FBT0MsT0FBTyxDQUFDQyxJQUFJO1lBQ3ZCLENBQUM7UUFDTDtRQUNJQyxTQUFTQyxnQkFBZ0IsQ0FBQyxTQUFTLFNBQVNSLENBQUMsRUFBQztZQUN6Q0QsbUJBQW1CQztRQUN4QjtRQUVBLE9BQU8sV0FBTTtZQUNUTyxTQUFTRSxtQkFBbUIsQ0FBQyxTQUFTLFNBQUNUO3VCQUFNRCxtQkFBbUJDOztRQUNwRTtJQUVOLEdBQUcsRUFBRTtJQUVMLHFCQUNJLDhEQUFDVTtRQUFJQyxXQUFXdEIseUdBQXFDO2tCQUNyRCw0RUFBQ3FCO1lBQUlFLEtBQUtkO1lBQWNhLFdBQVd0Qix3RkFBb0I7OzhCQUVoRCw4REFBQ3FCO29CQUFJQyxXQUFXdEIsa0dBQThCOzhCQUMxQyw0RUFBQ007d0JBQUlnQixXQUFXdEIsOEVBQWE7d0JBQUV3QixLQUFLbEI7d0JBQUttQixLQUFJOzs7Ozs7Ozs7Ozs4QkFFakQsOERBQUNKO29CQUFJQyxXQUFXdEIsc0ZBQXFCOztzQ0FDakMsOERBQUMwQjs0QkFBR0osV0FBV3RCLDZFQUFZO3NDQUFFOzs7Ozs7c0NBQzdCLDhEQUFDcUI7NEJBQUlDLFdBQVd0QixtR0FBK0I7OzhDQUMxQyw4REFBQ0ksd0VBQWVBOzs7Ozs4Q0FDaEIsOERBQUNBLHdFQUFlQTs7Ozs7OENBQ2hCLDhEQUFDQSx3RUFBZUE7Ozs7OzhDQUNoQiw4REFBQ0Esd0VBQWVBOzs7Ozs4Q0FDaEIsOERBQUNBLHdFQUFlQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OEJBSTVCLDhEQUFDaUI7b0JBQUlDLFdBQVd0Qix1RkFBbUI7O3NDQUVoQyw4REFBQzJCOzRCQUFHTCxXQUFXdEIsNkVBQVk7c0NBQUdPOzs7Ozs7c0NBQzlCLDhEQUFDcUI7NEJBQU9OLFdBQVd0QiwwRkFBc0I7O2dDQUFFOzhDQUFDLDhEQUFDTTtvQ0FBSWtCLEtBQUk7b0NBQWdCQyxLQUFJOzs7Ozs7Z0NBQWE7Ozs7Ozs7Ozs7Ozs7OEJBRXpGLDhEQUFDSjtvQkFBSUMsV0FBV3RCLDBGQUFzQjs7c0NBRW5DLDhEQUFDMEI7NEJBQUdKLFdBQVd0Qiw2RUFBWTtzQ0FBRTs7Ozs7O3NDQUM3Qiw4REFBQzZCO3NDQUFFOzs7Ozs7c0NBQ0gsOERBQUNSOzRCQUFJQyxXQUFXdEIsaUdBQTZCOzs4Q0FDekMsOERBQUM0QjtvQ0FBT04sV0FBV3RCLHdGQUFvQjs4Q0FBRTs7Ozs7OzhDQUN6Qyw4REFBQzRCO29DQUFPTixXQUFXdEIsd0ZBQW9COzhDQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU81RCxDQUFDO0dBakV1Qks7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUG9wVXBXaW5kb3cvcG9wVXBXaW5kb3cuanN4P2M0ZDQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9Qb3BVcFdpbmRvdy9wb3BXaW5kb3cubW9kdWxlLmNzcydcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVJlZiwgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBJbmdyZWRpZW50c0xpbmsgZnJvbSAnLi4vSW5ncmVkaWVudHNMaW5rL2luZ3JlZGllbnRzTGluaydcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQb3BVcFdpbmRvdyAoe2ltZywgaGVhZGluZywgc2V0SXNIaWRkZW59KXtcblxuXG4gICAgY29uc3QgY29tcG9uZW50UmVmID0gdXNlUmVmKClcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIFxuICAgIH0pXG5cbiAgICBcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuXG4gICAgICBjb25zdCBoYW5kbGVDbGlja091dHNpZGUgPSAoZSkgPT4ge1xuICBcbiAgICAgICAgICBpZihjb21wb25lbnRSZWYuY3VycmVudCAmJiAhY29tcG9uZW50UmVmLmN1cnJlbnQuY29udGFpbnMoZS50YXJnZXQpKXsgICAgXG4gICAgICAgICAgICAgIHNldElzSGlkZGVuKCgpID0+IGZhbHNlKSBcbiAgICAgICAgICAgICAgd2luZG93Lmhpc3RvcnkuYmFjaygpXG4gICAgICAgICAgfVxuICAgICAgfVxuICAgICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSl7XG4gICAgICAgICAgICAgICBoYW5kbGVDbGlja091dHNpZGUoZSlcbiAgICAgICAgICB9KVxuXG4gICAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4gaGFuZGxlQ2xpY2tPdXRzaWRlKGUpKVxuICAgICAgICAgIH1cblxuICAgIH0sIFtdKVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1tcInBvcC13aW5kb3ctY29udGFpbmVyIGFjdGl2ZVwiXX0+ICAgIFxuICAgICAgICA8ZGl2IHJlZj17Y29tcG9uZW50UmVmfSBjbGFzc05hbWU9e3N0eWxlc1tcInBvcC13aW5kb3dcIl19ID5cbiAgICAgICAgICBcbiAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbXCJzaW5nbGUtaW1nLWNvbnRhaW5lclwiXX0+XG4gICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9e3N0eWxlc1tcImltZ1wiXX0gc3JjPXtpbWd9IGFsdD1cImxvZ29cIiAvPlxuICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzW1wiaW5ncmVkaWVudHNcIl19PlxuICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9e3N0eWxlc1tcImg1XCJdfT5JbmdyZWRpZW50czwvaDU+XG4gICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1tcImluZ3JlZGllbnRzLWNvbnRhaW5lclwiXX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8SW5ncmVkaWVudHNMaW5rIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8SW5ncmVkaWVudHNMaW5rIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8SW5ncmVkaWVudHNMaW5rIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8SW5ncmVkaWVudHNMaW5rIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8SW5ncmVkaWVudHNMaW5rIC8+XG4gICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICBcbiAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzW1wicmlnaHQtdG9wXCJdfT5cblxuICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT17c3R5bGVzW1wiaDFcIl19PntoZWFkaW5nfTwvaDE+XG4gICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzW1wic21hbGwtYnV0dG9uXCJdfT4gPGltZyBzcmM9XCJpY29uLXBsYXkuc3ZnXCIgYWx0PVwiaWNvbi1wbGF5XCIvPiAgcGxheSB2aWRlbzwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzW1wiYm90dG9tLXJpZ2h0XCJdfT5cblxuICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT17c3R5bGVzW1wiaDVcIl19Pmluc3RydWN0aW9uczwvaDU+XG4gICAgICAgICAgICAgICA8cD5CcmluZyBhIGxhcmdlIHBvdCBvZiB3YXRlciB0byBhIGJvaWwuIEFkZCBrb3NoZXIgc2FsdCB0byB0aGUgYm9pbGluZyB3YXRlciwgdGhlbiBhZGQgdGhlIHBhc3RhLiBDb29rIGFjY29yZGluZyB0byB0aGUgcGFja2FnZSBpbnN0cnVjdGlvbnMsIGFib3V0IDkgbWludXRlcy5cXHJcXG5JbiBhIGxhcmdlIHNraWxsZXQgb3ZlciBtZWRpdW0taGlnaCBoZWF0LCBhZGQgdGhlIG9saXZlIG9pbCBhbmQgaGVhdCB1bnRpbCB0aGUgb2lsIHN0YXJ0cyB0byBzaGltbWVyLiBBZGQgdGhlIGdhcmxpYyBhbmQgY29vaywgc3RpcnJpbmcsIHVudGlsIGZyYWdyYW50LCAxIHRvIDIgbWludXRlcy4gQWRkIHRoZSBjaG9wcGVkIHRvbWF0b2VzLCByZWQgY2hpbGUgZmxha2VzLCBJdGFsaWFuIHNlYXNvbmluZyBhbmQgc2FsdCBhbmQgcGVwcGVyIHRvIHRhc3RlLiBCcmluZyB0byBhIGJvaWwgYW5kIGNvb2sgZm9yIDUgbWludXRlcy4gUmVtb3ZlIGZyb20gdGhlIGhlYXQgYW5kIGFkZCB0aGUgY2hvcHBlZCBiYXNpbC5cXHJcXG5EcmFpbiB0aGUgcGFzdGEgYW5kIGFkZCBpdCB0byB0aGUgc2F1Y2UuIEdhcm5pc2ggd2l0aCBQYXJtaWdpYW5vLVJlZ2dpYW5vIGZsYWtlcyBhbmQgbW9yZSBiYXNpbCBhbmQgc2VydmUgd2FybS48L3A+XG4gICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzW1wicmlnaHQtYnRuLWNvbnRhaW5lclwiXX0+XG4gICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlc1tcImJpZy1idXR0b25cIl19PlBhc3RhPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlc1tcImJpZy1idXR0b25cIl19PkN1cnJ5PC9idXR0b24+XG4gICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICBcbiAgICAgICAgIDwvZGl2PlxuICAgICA8L2Rpdj4gXG4gICAgKVxufVxuIl0sIm5hbWVzIjpbInN0eWxlcyIsIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlUmVmIiwiSW5ncmVkaWVudHNMaW5rIiwiUG9wVXBXaW5kb3ciLCJpbWciLCJoZWFkaW5nIiwic2V0SXNIaWRkZW4iLCJjb21wb25lbnRSZWYiLCJoYW5kbGVDbGlja091dHNpZGUiLCJlIiwiY3VycmVudCIsImNvbnRhaW5zIiwidGFyZ2V0Iiwid2luZG93IiwiaGlzdG9yeSIsImJhY2siLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiZGl2IiwiY2xhc3NOYW1lIiwicmVmIiwic3JjIiwiYWx0IiwiaDUiLCJoMSIsImJ1dHRvbiIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/PopUpWindow/popUpWindow.jsx\n"));

/***/ })

});