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

/***/ "./components/PopUpWindow/popUpWindow.jsx":
/*!************************************************!*\
  !*** ./components/PopUpWindow/popUpWindow.jsx ***!
  \************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ PopUpWindow; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _PopUpWindow_popWindow_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../PopUpWindow/popWindow.module.css */ \"./components/PopUpWindow/popWindow.module.css\");\n/* harmony import */ var _PopUpWindow_popWindow_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_PopUpWindow_popWindow_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _IngredientsLink_ingredientsLink__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../IngredientsLink/ingredientsLink */ \"./components/IngredientsLink/ingredientsLink.jsx\");\n\nvar _s = $RefreshSig$();\n\n\n\nfunction PopUpWindow(param) {\n    var img = param.img, heading = param.heading, setIsHidden = param.setIsHidden;\n    _s();\n    var componentRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var handleClickOutside = function(e) {\n            if (componentRef.current && !componentRef.current.contains(e.target)) {\n                setIsHidden(function() {\n                    return false;\n                });\n                window.history.back();\n            }\n        };\n        document.addEventListener(\"click\", function(e) {\n            handleClickOutside(e);\n        });\n        return function() {\n            document.removeEventListener(\"click\", function(e) {\n                return handleClickOutside(e);\n            });\n        };\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_PopUpWindow_popWindow_module_css__WEBPACK_IMPORTED_MODULE_3___default()[\"pop-window-container active\"]),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            ref: componentRef,\n            className: (_PopUpWindow_popWindow_module_css__WEBPACK_IMPORTED_MODULE_3___default()[\"pop-window\"]),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"left\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"single-img-container\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: img,\n                                alt: \"logo\"\n                            }, void 0, false, {\n                                fileName: \"/Users/macbookair/Desktop/foodly/components/PopUpWindow/popUpWindow.jsx\",\n                                lineNumber: 35,\n                                columnNumber: 20\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/macbookair/Desktop/foodly/components/PopUpWindow/popUpWindow.jsx\",\n                            lineNumber: 34,\n                            columnNumber: 16\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"ingredients\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                                    children: \"Ingredients\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/macbookair/Desktop/foodly/components/PopUpWindow/popUpWindow.jsx\",\n                                    lineNumber: 38,\n                                    columnNumber: 20\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"ingredients-container\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_IngredientsLink_ingredientsLink__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                                            fileName: \"/Users/macbookair/Desktop/foodly/components/PopUpWindow/popUpWindow.jsx\",\n                                            lineNumber: 40,\n                                            columnNumber: 25\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_IngredientsLink_ingredientsLink__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                                            fileName: \"/Users/macbookair/Desktop/foodly/components/PopUpWindow/popUpWindow.jsx\",\n                                            lineNumber: 41,\n                                            columnNumber: 25\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_IngredientsLink_ingredientsLink__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                                            fileName: \"/Users/macbookair/Desktop/foodly/components/PopUpWindow/popUpWindow.jsx\",\n                                            lineNumber: 42,\n                                            columnNumber: 25\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_IngredientsLink_ingredientsLink__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                                            fileName: \"/Users/macbookair/Desktop/foodly/components/PopUpWindow/popUpWindow.jsx\",\n                                            lineNumber: 43,\n                                            columnNumber: 25\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_IngredientsLink_ingredientsLink__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                                            fileName: \"/Users/macbookair/Desktop/foodly/components/PopUpWindow/popUpWindow.jsx\",\n                                            lineNumber: 44,\n                                            columnNumber: 25\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/macbookair/Desktop/foodly/components/PopUpWindow/popUpWindow.jsx\",\n                                    lineNumber: 39,\n                                    columnNumber: 20\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/macbookair/Desktop/foodly/components/PopUpWindow/popUpWindow.jsx\",\n                            lineNumber: 37,\n                            columnNumber: 16\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/macbookair/Desktop/foodly/components/PopUpWindow/popUpWindow.jsx\",\n                    lineNumber: 33,\n                    columnNumber: 12\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"right\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            children: heading\n                        }, void 0, false, {\n                            fileName: \"/Users/macbookair/Desktop/foodly/components/PopUpWindow/popUpWindow.jsx\",\n                            lineNumber: 49,\n                            columnNumber: 16\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            children: [\n                                \" \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    src: \"icon-play.svg\",\n                                    alt: \"icon-play\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/macbookair/Desktop/foodly/components/PopUpWindow/popUpWindow.jsx\",\n                                    lineNumber: 50,\n                                    columnNumber: 25\n                                }, this),\n                                \"  play video\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/macbookair/Desktop/foodly/components/PopUpWindow/popUpWindow.jsx\",\n                            lineNumber: 50,\n                            columnNumber: 16\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                            children: \"instructions\"\n                        }, void 0, false, {\n                            fileName: \"/Users/macbookair/Desktop/foodly/components/PopUpWindow/popUpWindow.jsx\",\n                            lineNumber: 51,\n                            columnNumber: 16\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: \"Bring a large pot of water to a boil. Add kosher salt to the boiling water, then add the pasta. Cook according to the package instructions, about 9 minutes.\\\\r\\\\nIn a large skillet over medium-high heat, add the olive oil and heat until the oil starts to shimmer. Add the garlic and cook, stirring, until fragrant, 1 to 2 minutes.\"\n                        }, void 0, false, {\n                            fileName: \"/Users/macbookair/Desktop/foodly/components/PopUpWindow/popUpWindow.jsx\",\n                            lineNumber: 52,\n                            columnNumber: 16\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"right-btn-container\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    children: \"Pasta\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/macbookair/Desktop/foodly/components/PopUpWindow/popUpWindow.jsx\",\n                                    lineNumber: 54,\n                                    columnNumber: 20\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    children: \"Curry\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/macbookair/Desktop/foodly/components/PopUpWindow/popUpWindow.jsx\",\n                                    lineNumber: 55,\n                                    columnNumber: 20\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/macbookair/Desktop/foodly/components/PopUpWindow/popUpWindow.jsx\",\n                            lineNumber: 53,\n                            columnNumber: 16\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/macbookair/Desktop/foodly/components/PopUpWindow/popUpWindow.jsx\",\n                    lineNumber: 48,\n                    columnNumber: 12\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/macbookair/Desktop/foodly/components/PopUpWindow/popUpWindow.jsx\",\n            lineNumber: 32,\n            columnNumber: 9\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/macbookair/Desktop/foodly/components/PopUpWindow/popUpWindow.jsx\",\n        lineNumber: 31,\n        columnNumber: 9\n    }, this);\n}\n_s(PopUpWindow, \"7dmkr9//r0T0aNf8G6+s3e+oH2s=\");\n_c = PopUpWindow;\nvar _c;\n$RefreshReg$(_c, \"PopUpWindow\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1BvcFVwV2luZG93L3BvcFVwV2luZG93LmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOztBQUF3RDtBQUNQO0FBQ2U7QUFHakQsU0FBU0ssWUFBYSxLQUEyQixFQUFDO1FBQTNCQyxNQUFELE1BQUNBLEtBQUtDLFVBQU4sTUFBTUEsU0FBU0MsY0FBZixNQUFlQTs7SUFHaEQsSUFBTUMsZUFBZU4sNkNBQU1BO0lBRTNCRCxnREFBU0EsQ0FBQyxXQUFNO1FBRWQsSUFBTVEscUJBQXFCLFNBQUNDLEdBQU07WUFFOUIsSUFBR0YsYUFBYUcsT0FBTyxJQUFJLENBQUNILGFBQWFHLE9BQU8sQ0FBQ0MsUUFBUSxDQUFDRixFQUFFRyxNQUFNLEdBQUU7Z0JBQ2hFTixZQUFZOzJCQUFNLEtBQUs7O2dCQUN2Qk8sT0FBT0MsT0FBTyxDQUFDQyxJQUFJO1lBQ3ZCLENBQUM7UUFDTDtRQUNJQyxTQUFTQyxnQkFBZ0IsQ0FBQyxTQUFTLFNBQVNSLENBQUMsRUFBQztZQUN6Q0QsbUJBQW1CQztRQUN4QjtRQUVBLE9BQU8sV0FBTTtZQUNUTyxTQUFTRSxtQkFBbUIsQ0FBQyxTQUFTLFNBQUNUO3VCQUFNRCxtQkFBbUJDOztRQUNwRTtJQUVOLEdBQUcsRUFBRTtJQUVMLHFCQUNJLDhEQUFDVTtRQUFJQyxXQUFXdEIseUdBQXFDO2tCQUNyRCw0RUFBQ3FCO1lBQUlFLEtBQUtkO1lBQWNhLFdBQVd0Qix3RkFBb0I7OzhCQUNwRCw4REFBQ3FCO29CQUFJQyxXQUFVOztzQ0FDWCw4REFBQ0Q7NEJBQUlDLFdBQVU7c0NBQ1gsNEVBQUNoQjtnQ0FBSWtCLEtBQUtsQjtnQ0FBS21CLEtBQUk7Ozs7Ozs7Ozs7O3NDQUV2Qiw4REFBQ0o7NEJBQUlDLFdBQVU7OzhDQUNYLDhEQUFDSTs4Q0FBRzs7Ozs7OzhDQUNKLDhEQUFDTDtvQ0FBSUMsV0FBVTs7c0RBQ1YsOERBQUNsQix3RUFBZUE7Ozs7O3NEQUNoQiw4REFBQ0Esd0VBQWVBOzs7OztzREFDaEIsOERBQUNBLHdFQUFlQTs7Ozs7c0RBQ2hCLDhEQUFDQSx3RUFBZUE7Ozs7O3NEQUNoQiw4REFBQ0Esd0VBQWVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs4QkFJN0IsOERBQUNpQjtvQkFBSUMsV0FBVTs7c0NBQ1gsOERBQUNLO3NDQUFJcEI7Ozs7OztzQ0FDTCw4REFBQ3FCOztnQ0FBTzs4Q0FBQyw4REFBQ3RCO29DQUFJa0IsS0FBSTtvQ0FBZ0JDLEtBQUk7Ozs7OztnQ0FBYTs7Ozs7OztzQ0FDbkQsOERBQUNDO3NDQUFHOzs7Ozs7c0NBQ0osOERBQUNHO3NDQUFFOzs7Ozs7c0NBQ0gsOERBQUNSOzRCQUFJQyxXQUFVOzs4Q0FDWCw4REFBQ007OENBQU87Ozs7Ozs4Q0FDUiw4REFBQ0E7OENBQU87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTTNCLENBQUM7R0F2RHVCdkI7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qb3BVcFdpbmRvdy9wb3BVcFdpbmRvdy5qc3g/MzllNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gJy4uL1BvcFVwV2luZG93L3BvcFdpbmRvdy5tb2R1bGUuY3NzJ1xuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlUmVmLCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEluZ3JlZGllbnRzTGluayBmcm9tICcuLi9JbmdyZWRpZW50c0xpbmsvaW5ncmVkaWVudHNMaW5rJ1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBvcFVwV2luZG93ICh7aW1nLCBoZWFkaW5nLCBzZXRJc0hpZGRlbn0pe1xuXG5cbiAgICBjb25zdCBjb21wb25lbnRSZWYgPSB1c2VSZWYoKVxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcblxuICAgICAgY29uc3QgaGFuZGxlQ2xpY2tPdXRzaWRlID0gKGUpID0+IHtcbiAgXG4gICAgICAgICAgaWYoY29tcG9uZW50UmVmLmN1cnJlbnQgJiYgIWNvbXBvbmVudFJlZi5jdXJyZW50LmNvbnRhaW5zKGUudGFyZ2V0KSl7ICAgIFxuICAgICAgICAgICAgICBzZXRJc0hpZGRlbigoKSA9PiBmYWxzZSkgXG4gICAgICAgICAgICAgIHdpbmRvdy5oaXN0b3J5LmJhY2soKVxuICAgICAgICAgIH1cbiAgICAgIH1cbiAgICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpe1xuICAgICAgICAgICAgICAgaGFuZGxlQ2xpY2tPdXRzaWRlKGUpXG4gICAgICAgICAgfSlcblxuICAgICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IGhhbmRsZUNsaWNrT3V0c2lkZShlKSlcbiAgICAgICAgICB9XG5cbiAgICB9LCBbXSlcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbXCJwb3Atd2luZG93LWNvbnRhaW5lciBhY3RpdmVcIl19PiAgICBcbiAgICAgICAgPGRpdiByZWY9e2NvbXBvbmVudFJlZn0gY2xhc3NOYW1lPXtzdHlsZXNbXCJwb3Atd2luZG93XCJdfSA+XG4gICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGVmdFwiPlxuICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaW5nbGUtaW1nLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtpbWd9IGFsdD1cImxvZ29cIiAvPlxuICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImluZ3JlZGllbnRzXCI+XG4gICAgICAgICAgICAgICAgICAgPGg1PkluZ3JlZGllbnRzPC9oNT5cbiAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImluZ3JlZGllbnRzLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEluZ3JlZGllbnRzTGluayAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEluZ3JlZGllbnRzTGluayAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEluZ3JlZGllbnRzTGluayAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEluZ3JlZGllbnRzTGluayAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEluZ3JlZGllbnRzTGluayAvPlxuICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJpZ2h0XCI+XG4gICAgICAgICAgICAgICA8aDE+e2hlYWRpbmd9PC9oMT5cbiAgICAgICAgICAgICAgIDxidXR0b24+IDxpbWcgc3JjPVwiaWNvbi1wbGF5LnN2Z1wiIGFsdD1cImljb24tcGxheVwiLz4gIHBsYXkgdmlkZW88L2J1dHRvbj5cbiAgICAgICAgICAgICAgIDxoNT5pbnN0cnVjdGlvbnM8L2g1PlxuICAgICAgICAgICAgICAgPHA+QnJpbmcgYSBsYXJnZSBwb3Qgb2Ygd2F0ZXIgdG8gYSBib2lsLiBBZGQga29zaGVyIHNhbHQgdG8gdGhlIGJvaWxpbmcgd2F0ZXIsIHRoZW4gYWRkIHRoZSBwYXN0YS4gQ29vayBhY2NvcmRpbmcgdG8gdGhlIHBhY2thZ2UgaW5zdHJ1Y3Rpb25zLCBhYm91dCA5IG1pbnV0ZXMuXFxyXFxuSW4gYSBsYXJnZSBza2lsbGV0IG92ZXIgbWVkaXVtLWhpZ2ggaGVhdCwgYWRkIHRoZSBvbGl2ZSBvaWwgYW5kIGhlYXQgdW50aWwgdGhlIG9pbCBzdGFydHMgdG8gc2hpbW1lci4gQWRkIHRoZSBnYXJsaWMgYW5kIGNvb2ssIHN0aXJyaW5nLCB1bnRpbCBmcmFncmFudCwgMSB0byAyIG1pbnV0ZXMuPC9wPlxuICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyaWdodC1idG4tY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgPGJ1dHRvbj5QYXN0YTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgIDxidXR0b24+Q3Vycnk8L2J1dHRvbj5cbiAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgIDwvZGl2PlxuICAgICA8L2Rpdj4gXG4gICAgKVxufVxuIl0sIm5hbWVzIjpbInN0eWxlcyIsIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlUmVmIiwiSW5ncmVkaWVudHNMaW5rIiwiUG9wVXBXaW5kb3ciLCJpbWciLCJoZWFkaW5nIiwic2V0SXNIaWRkZW4iLCJjb21wb25lbnRSZWYiLCJoYW5kbGVDbGlja091dHNpZGUiLCJlIiwiY3VycmVudCIsImNvbnRhaW5zIiwidGFyZ2V0Iiwid2luZG93IiwiaGlzdG9yeSIsImJhY2siLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiZGl2IiwiY2xhc3NOYW1lIiwicmVmIiwic3JjIiwiYWx0IiwiaDUiLCJoMSIsImJ1dHRvbiIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/PopUpWindow/popUpWindow.jsx\n"));

/***/ })

});