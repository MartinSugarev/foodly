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

/***/ "./components/PopUpWindow/popUpWindow.js":
/*!***********************************************!*\
  !*** ./components/PopUpWindow/popUpWindow.js ***!
  \***********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ PopUpWindow; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _IngredientsLink_ingredientsLink__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../IngredientsLink/ingredientsLink */ \"./components/IngredientsLink/ingredientsLink.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next */ \"next\");\n/* harmony import */ var next__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction PopUpWindow(param) {\n    var img = param.img, heading = param.heading, setIsHidden = param.setIsHidden;\n    _s();\n    var componentRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var handleClickOutside = function(e) {\n            if (componentRef.current && !componentRef.current.contains(e.target)) {\n                setIsHidden(function() {\n                    return false;\n                });\n                console.log(\"here\");\n            }\n        };\n        document.addEventListener(\"click\", function(e) {\n            handleClickOutside(e);\n        });\n        return function() {\n            document.removeEventListener(\"click\", function(e) {\n                return handleClickOutside(e);\n            });\n        };\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"pop-window-container active\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            ref: componentRef,\n            className: \"pop-window\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"left\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"single-img-container\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: img,\n                                alt: \"logo\"\n                            }, void 0, false, {\n                                fileName: \"/Users/macbookair/Desktop/foodly2/components/PopUpWindow/popUpWindow.js\",\n                                lineNumber: 40,\n                                columnNumber: 20\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/macbookair/Desktop/foodly2/components/PopUpWindow/popUpWindow.js\",\n                            lineNumber: 39,\n                            columnNumber: 16\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"ingredients\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                                    children: \"Ingredients\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/macbookair/Desktop/foodly2/components/PopUpWindow/popUpWindow.js\",\n                                    lineNumber: 43,\n                                    columnNumber: 20\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"ingredients-container\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_IngredientsLink_ingredientsLink__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                                            fileName: \"/Users/macbookair/Desktop/foodly2/components/PopUpWindow/popUpWindow.js\",\n                                            lineNumber: 45,\n                                            columnNumber: 25\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_IngredientsLink_ingredientsLink__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                                            fileName: \"/Users/macbookair/Desktop/foodly2/components/PopUpWindow/popUpWindow.js\",\n                                            lineNumber: 46,\n                                            columnNumber: 25\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_IngredientsLink_ingredientsLink__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                                            fileName: \"/Users/macbookair/Desktop/foodly2/components/PopUpWindow/popUpWindow.js\",\n                                            lineNumber: 47,\n                                            columnNumber: 25\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_IngredientsLink_ingredientsLink__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                                            fileName: \"/Users/macbookair/Desktop/foodly2/components/PopUpWindow/popUpWindow.js\",\n                                            lineNumber: 48,\n                                            columnNumber: 25\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_IngredientsLink_ingredientsLink__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                                            fileName: \"/Users/macbookair/Desktop/foodly2/components/PopUpWindow/popUpWindow.js\",\n                                            lineNumber: 49,\n                                            columnNumber: 25\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/macbookair/Desktop/foodly2/components/PopUpWindow/popUpWindow.js\",\n                                    lineNumber: 44,\n                                    columnNumber: 20\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/macbookair/Desktop/foodly2/components/PopUpWindow/popUpWindow.js\",\n                            lineNumber: 42,\n                            columnNumber: 16\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/macbookair/Desktop/foodly2/components/PopUpWindow/popUpWindow.js\",\n                    lineNumber: 38,\n                    columnNumber: 12\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"right\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            children: heading\n                        }, void 0, false, {\n                            fileName: \"/Users/macbookair/Desktop/foodly2/components/PopUpWindow/popUpWindow.js\",\n                            lineNumber: 54,\n                            columnNumber: 16\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            children: [\n                                \" \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    src: \"icon-play.svg\",\n                                    alt: \"icon-play\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/macbookair/Desktop/foodly2/components/PopUpWindow/popUpWindow.js\",\n                                    lineNumber: 55,\n                                    columnNumber: 25\n                                }, this),\n                                \"  play video\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/macbookair/Desktop/foodly2/components/PopUpWindow/popUpWindow.js\",\n                            lineNumber: 55,\n                            columnNumber: 16\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                            children: \"instructions\"\n                        }, void 0, false, {\n                            fileName: \"/Users/macbookair/Desktop/foodly2/components/PopUpWindow/popUpWindow.js\",\n                            lineNumber: 56,\n                            columnNumber: 16\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: \"Bring a large pot of water to a boil. Add kosher salt to the boiling water, then add the pasta. Cook according to the package instructions, about 9 minutes.\\\\r\\\\nIn a large skillet over medium-high heat, add the olive oil and heat until the oil starts to shimmer. Add the garlic and cook, stirring, until fragrant, 1 to 2 minutes.\"\n                        }, void 0, false, {\n                            fileName: \"/Users/macbookair/Desktop/foodly2/components/PopUpWindow/popUpWindow.js\",\n                            lineNumber: 57,\n                            columnNumber: 16\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"right-btn-container\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    children: \"Pasta\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/macbookair/Desktop/foodly2/components/PopUpWindow/popUpWindow.js\",\n                                    lineNumber: 59,\n                                    columnNumber: 20\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    children: \"Curry\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/macbookair/Desktop/foodly2/components/PopUpWindow/popUpWindow.js\",\n                                    lineNumber: 60,\n                                    columnNumber: 20\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/macbookair/Desktop/foodly2/components/PopUpWindow/popUpWindow.js\",\n                            lineNumber: 58,\n                            columnNumber: 16\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/macbookair/Desktop/foodly2/components/PopUpWindow/popUpWindow.js\",\n                    lineNumber: 53,\n                    columnNumber: 12\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/macbookair/Desktop/foodly2/components/PopUpWindow/popUpWindow.js\",\n            lineNumber: 37,\n            columnNumber: 9\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/macbookair/Desktop/foodly2/components/PopUpWindow/popUpWindow.js\",\n        lineNumber: 36,\n        columnNumber: 9\n    }, this);\n}\n_s(PopUpWindow, \"GdpbuB7P+PYm7V3hq56egg6jzNg=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = PopUpWindow;\nvar _c;\n$RefreshReg$(_c, \"PopUpWindow\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1BvcFVwV2luZG93L3BvcFVwV2luZG93LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFBK0M7QUFDaUI7QUFDM0I7QUFDSjtBQUNWO0FBRVIsU0FBU00sWUFBYSxLQUEyQixFQUFDO1FBQTNCQyxNQUFELE1BQUNBLEtBQUtDLFVBQU4sTUFBTUEsU0FBU0MsY0FBZixNQUFlQTs7SUFJaEQsSUFBSUMsZUFBZVIsNkNBQU1BO0lBQ3pCLElBQUlTLFNBQVNQLHNEQUFTQTtJQUd0QkgsZ0RBQVNBLENBQUMsV0FBTTtRQUVkLElBQU1XLHFCQUFxQixTQUFDQyxHQUFNO1lBRTlCLElBQUdILGFBQWFJLE9BQU8sSUFBSSxDQUFDSixhQUFhSSxPQUFPLENBQUNDLFFBQVEsQ0FBQ0YsRUFBRUcsTUFBTSxHQUFFO2dCQUNoRVAsWUFBWTsyQkFBTSxLQUFLOztnQkFDeEJRLFFBQVFDLEdBQUcsQ0FBQztZQUVmLENBQUM7UUFDTDtRQUNJQyxTQUFTQyxnQkFBZ0IsQ0FBQyxTQUFTLFNBQVNQLENBQUMsRUFBQztZQUN6Q0QsbUJBQW1CQztRQUN4QjtRQUVBLE9BQU8sV0FBTTtZQUNUTSxTQUFTRSxtQkFBbUIsQ0FBQyxTQUFTLFNBQUNSO3VCQUFNRCxtQkFBbUJDOztRQUNwRTtJQUVOLEdBQUcsRUFBRTtJQUVMLHFCQUNJLDhEQUFDUztRQUFJQyxXQUFXO2tCQUNoQiw0RUFBQ0Q7WUFBSUUsS0FBS2Q7WUFBY2EsV0FBVTs7OEJBQy9CLDhEQUFDRDtvQkFBSUMsV0FBVTs7c0NBQ1gsOERBQUNEOzRCQUFJQyxXQUFVO3NDQUNYLDRFQUFDaEI7Z0NBQUlrQixLQUFLbEI7Z0NBQUttQixLQUFJOzs7Ozs7Ozs7OztzQ0FFdkIsOERBQUNKOzRCQUFJQyxXQUFVOzs4Q0FDWCw4REFBQ0k7OENBQUc7Ozs7Ozs4Q0FDSiw4REFBQ0w7b0NBQUlDLFdBQVU7O3NEQUNWLDhEQUFDcEIsd0VBQWVBOzs7OztzREFDaEIsOERBQUNBLHdFQUFlQTs7Ozs7c0RBQ2hCLDhEQUFDQSx3RUFBZUE7Ozs7O3NEQUNoQiw4REFBQ0Esd0VBQWVBOzs7OztzREFDaEIsOERBQUNBLHdFQUFlQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OEJBSTdCLDhEQUFDbUI7b0JBQUlDLFdBQVU7O3NDQUNYLDhEQUFDSztzQ0FBSXBCOzs7Ozs7c0NBQ0wsOERBQUNxQjs7Z0NBQU87OENBQUMsOERBQUN0QjtvQ0FBSWtCLEtBQUk7b0NBQWdCQyxLQUFJOzs7Ozs7Z0NBQWE7Ozs7Ozs7c0NBQ25ELDhEQUFDQztzQ0FBRzs7Ozs7O3NDQUNKLDhEQUFDRztzQ0FBRTs7Ozs7O3NDQUNILDhEQUFDUjs0QkFBSUMsV0FBVTs7OENBQ1gsOERBQUNNOzhDQUFPOzs7Ozs7OENBQ1IsOERBQUNBOzhDQUFPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU0zQixDQUFDO0dBM0R1QnZCOztRQUtQRixrREFBU0E7OztLQUxGRSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1BvcFVwV2luZG93L3BvcFVwV2luZG93LmpzP2M4ZmQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlUmVmfSBmcm9tICdyZWFjdCdcbmltcG9ydCBJbmdyZWRpZW50c0xpbmsgZnJvbSAnLi4vSW5ncmVkaWVudHNMaW5rL2luZ3JlZGllbnRzTGluaydcbmltcG9ydCB7dXNlUm91dGVyfSBmcm9tICduZXh0L3JvdXRlcidcbmltcG9ydCAnLi9wb3BVcFdpbmRvdy5tb2R1bGUuY3NzJ1xuaW1wb3J0IG5leHQgZnJvbSAnbmV4dCdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUG9wVXBXaW5kb3cgKHtpbWcsIGhlYWRpbmcsIHNldElzSGlkZGVufSl7XG5cblxuXG4gICAgbGV0IGNvbXBvbmVudFJlZiA9IHVzZVJlZigpXG4gICAgbGV0IHJvdXRlciA9IHVzZVJvdXRlcigpXG5cblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG5cbiAgICAgIGNvbnN0IGhhbmRsZUNsaWNrT3V0c2lkZSA9IChlKSA9PiB7XG4gIFxuICAgICAgICAgIGlmKGNvbXBvbmVudFJlZi5jdXJyZW50ICYmICFjb21wb25lbnRSZWYuY3VycmVudC5jb250YWlucyhlLnRhcmdldCkpeyAgICBcbiAgICAgICAgICAgICAgc2V0SXNIaWRkZW4oKCkgPT4gZmFsc2UpIFxuICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdoZXJlJyk7XG4gICAgICAgICAgICAgXG4gICAgICAgICAgfVxuICAgICAgfVxuICAgICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSl7XG4gICAgICAgICAgICAgICBoYW5kbGVDbGlja091dHNpZGUoZSlcbiAgICAgICAgICB9KVxuXG4gICAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4gaGFuZGxlQ2xpY2tPdXRzaWRlKGUpKVxuICAgICAgICAgIH1cblxuICAgIH0sIFtdKVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9IFwicG9wLXdpbmRvdy1jb250YWluZXIgYWN0aXZlXCI+ICAgIFxuICAgICAgICA8ZGl2IHJlZj17Y29tcG9uZW50UmVmfSBjbGFzc05hbWU9XCJwb3Atd2luZG93XCIgPlxuICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxlZnRcIj5cbiAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2luZ2xlLWltZy1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17aW1nfSBhbHQ9XCJsb2dvXCIgLz5cbiAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbmdyZWRpZW50c1wiPlxuICAgICAgICAgICAgICAgICAgIDxoNT5JbmdyZWRpZW50czwvaDU+XG4gICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbmdyZWRpZW50cy1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbmdyZWRpZW50c0xpbmsgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbmdyZWRpZW50c0xpbmsgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbmdyZWRpZW50c0xpbmsgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbmdyZWRpZW50c0xpbmsgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbmdyZWRpZW50c0xpbmsgLz5cbiAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyaWdodFwiPlxuICAgICAgICAgICAgICAgPGgxPntoZWFkaW5nfTwvaDE+XG4gICAgICAgICAgICAgICA8YnV0dG9uPiA8aW1nIHNyYz1cImljb24tcGxheS5zdmdcIiBhbHQ9XCJpY29uLXBsYXlcIi8+ICBwbGF5IHZpZGVvPC9idXR0b24+XG4gICAgICAgICAgICAgICA8aDU+aW5zdHJ1Y3Rpb25zPC9oNT5cbiAgICAgICAgICAgICAgIDxwPkJyaW5nIGEgbGFyZ2UgcG90IG9mIHdhdGVyIHRvIGEgYm9pbC4gQWRkIGtvc2hlciBzYWx0IHRvIHRoZSBib2lsaW5nIHdhdGVyLCB0aGVuIGFkZCB0aGUgcGFzdGEuIENvb2sgYWNjb3JkaW5nIHRvIHRoZSBwYWNrYWdlIGluc3RydWN0aW9ucywgYWJvdXQgOSBtaW51dGVzLlxcclxcbkluIGEgbGFyZ2Ugc2tpbGxldCBvdmVyIG1lZGl1bS1oaWdoIGhlYXQsIGFkZCB0aGUgb2xpdmUgb2lsIGFuZCBoZWF0IHVudGlsIHRoZSBvaWwgc3RhcnRzIHRvIHNoaW1tZXIuIEFkZCB0aGUgZ2FybGljIGFuZCBjb29rLCBzdGlycmluZywgdW50aWwgZnJhZ3JhbnQsIDEgdG8gMiBtaW51dGVzLjwvcD5cbiAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmlnaHQtYnRuLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgIDxidXR0b24+UGFzdGE8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICA8YnV0dG9uPkN1cnJ5PC9idXR0b24+XG4gICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICA8L2Rpdj5cbiAgICAgPC9kaXY+IFxuICAgIClcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVJlZiIsIkluZ3JlZGllbnRzTGluayIsInVzZVJvdXRlciIsIm5leHQiLCJQb3BVcFdpbmRvdyIsImltZyIsImhlYWRpbmciLCJzZXRJc0hpZGRlbiIsImNvbXBvbmVudFJlZiIsInJvdXRlciIsImhhbmRsZUNsaWNrT3V0c2lkZSIsImUiLCJjdXJyZW50IiwiY29udGFpbnMiLCJ0YXJnZXQiLCJjb25zb2xlIiwibG9nIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImRpdiIsImNsYXNzTmFtZSIsInJlZiIsInNyYyIsImFsdCIsImg1IiwiaDEiLCJidXR0b24iLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/PopUpWindow/popUpWindow.js\n"));

/***/ }),

/***/ "next":
/*!***********************!*\
  !*** external "next" ***!
  \***********************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = next;

/***/ })

});