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

/***/ "./components/MainLayout/mainLayout.jsx":
/*!**********************************************!*\
  !*** ./components/MainLayout/mainLayout.jsx ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"mainLayout\": function() { return /* binding */ mainLayout; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swc/helpers/src/_sliced_to_array.mjs */ \"./node_modules/@swc/helpers/src/_sliced_to_array.mjs\");\n/* harmony import */ var _swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @swc/helpers/src/_to_consumable_array.mjs */ \"./node_modules/@swc/helpers/src/_to_consumable_array.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _ReceiptContainer_receiptContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ReceiptContainer/receiptContainer */ \"./components/ReceiptContainer/receiptContainer.jsx\");\n/* harmony import */ var _utils_mockedData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/mockedData */ \"./utils/mockedData.js\");\n/* harmony import */ var _utils_debouncer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/debouncer */ \"./utils/debouncer.js\");\n/* harmony import */ var _LoadingBar_loadingBar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../LoadingBar/loadingBar */ \"./components/LoadingBar/loadingBar.jsx\");\n/* harmony import */ var _EmptyContainer_emptyContainer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../EmptyContainer/emptyContainer */ \"./components/EmptyContainer/emptyContainer.jsx\");\n\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nvar mainLayout = function(Component) {\n    return _s(function() {\n        _s();\n        var _useState = (0,_swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), 2), inputValue = _useState[0], setInputValue = _useState[1];\n        var _useState1 = (0,_swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), 2), foundData = _useState1[0], setFoundData = _useState1[1];\n        var _useState2 = (0,_swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), 2), isLoading = _useState2[0], setIsLoading = _useState2[1];\n        var debouncedValue = (0,_utils_debouncer__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(inputValue, 1000, setIsLoading);\n        (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n            var returnedData;\n            setFoundData(function() {\n                return (0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(_utils_mockedData__WEBPACK_IMPORTED_MODULE_3__.dataSea).concat((0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(_utils_mockedData__WEBPACK_IMPORTED_MODULE_3__.dataItalian)).filter(function(data) {\n                    if (data.name.includes(debouncedValue)) {\n                        returnedData = data.name;\n                    }\n                    setIsLoading(function() {\n                        return false;\n                    });\n                    return returnedData;\n                });\n            });\n        }, [\n            debouncedValue\n        ]);\n        (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n            setIsLoading(function() {\n                return true;\n            });\n        }, [\n            inputValue\n        ]);\n        var handleInputChange = function(e) {\n            setInputValue(function() {\n                return e.target.value;\n            });\n        };\n        var clearInput = function() {\n            setInputValue(\"\");\n        };\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"main-layout\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n                    className: \"header\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"img-container\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    src: \"Vector.svg\",\n                                    alt: \"vector-img\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/macbookair/Desktop/foodly/components/MainLayout/mainLayout.jsx\",\n                                    lineNumber: 52,\n                                    columnNumber: 19\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    src: \"FOODLY.svg\",\n                                    alt: \"foodly-text\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/macbookair/Desktop/foodly/components/MainLayout/mainLayout.jsx\",\n                                    lineNumber: 53,\n                                    columnNumber: 19\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/macbookair/Desktop/foodly/components/MainLayout/mainLayout.jsx\",\n                            lineNumber: 51,\n                            columnNumber: 15\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"input-container\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    src: \"icon-search.svg\",\n                                    alt: \"search-icon\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/macbookair/Desktop/foodly/components/MainLayout/mainLayout.jsx\",\n                                    lineNumber: 56,\n                                    columnNumber: 22\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                                    className: \"form\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        className: \"input\",\n                                        type: \"text\",\n                                        value: inputValue,\n                                        onChange: handleInputChange\n                                    }, void 0, false, {\n                                        fileName: \"/Users/macbookair/Desktop/foodly/components/MainLayout/mainLayout.jsx\",\n                                        lineNumber: 58,\n                                        columnNumber: 21\n                                    }, _this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/macbookair/Desktop/foodly/components/MainLayout/mainLayout.jsx\",\n                                    lineNumber: 57,\n                                    columnNumber: 19\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/macbookair/Desktop/foodly/components/MainLayout/mainLayout.jsx\",\n                            lineNumber: 55,\n                            columnNumber: 15\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/macbookair/Desktop/foodly/components/MainLayout/mainLayout.jsx\",\n                    lineNumber: 50,\n                    columnNumber: 11\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                    className: \"main\",\n                    children: inputValue.length === 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {}, void 0, false, {\n                        fileName: \"/Users/macbookair/Desktop/foodly/components/MainLayout/mainLayout.jsx\",\n                        lineNumber: 63,\n                        columnNumber: 43\n                    }, _this) : inputValue.length !== 0 && isLoading === true ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_LoadingBar_loadingBar__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                        fileName: \"/Users/macbookair/Desktop/foodly/components/MainLayout/mainLayout.jsx\",\n                        lineNumber: 63,\n                        columnNumber: 109\n                    }, _this) : foundData.length !== 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ReceiptContainer_receiptContainer__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        title: \"here's what we found\",\n                        picture: \"\\uD83D\\uDD0D\",\n                        data: foundData\n                    }, void 0, false, {\n                        fileName: \"/Users/macbookair/Desktop/foodly/components/MainLayout/mainLayout.jsx\",\n                        lineNumber: 63,\n                        columnNumber: 151\n                    }, _this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_EmptyContainer_emptyContainer__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                        clearInput: clearInput,\n                        search: inputValue\n                    }, void 0, false, {\n                        fileName: \"/Users/macbookair/Desktop/foodly/components/MainLayout/mainLayout.jsx\",\n                        lineNumber: 63,\n                        columnNumber: 235\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/Users/macbookair/Desktop/foodly/components/MainLayout/mainLayout.jsx\",\n                    lineNumber: 62,\n                    columnNumber: 11\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/macbookair/Desktop/foodly/components/MainLayout/mainLayout.jsx\",\n            lineNumber: 49,\n            columnNumber: 9\n        }, _this);\n    }, \"H+V0dgkAKIVsC1FnQVqY3W/WwGI=\", false, function() {\n        return [\n            _utils_debouncer__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n        ];\n    });\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL01haW5MYXlvdXQvbWFpbkxheW91dC5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7Ozs7O0FBQWlEO0FBQ29CO0FBQ1Q7QUFDYjtBQUNHO0FBQ1c7QUFHdEQsSUFBTVMsYUFBYSxTQUFDQztjQUFjLFdBQU07O1FBRTNDLElBQW9DUixZQUFBQSxnRkFBQUEsQ0FBQUEsK0NBQVFBLENBQUMsU0FBdENTLGFBQTZCVCxjQUFqQlUsZ0JBQWlCVjtRQUNwQyxJQUFrQ0EsYUFBQUEsZ0ZBQUFBLENBQUFBLCtDQUFRQSxDQUFDLElBQUksT0FBeENXLFlBQTJCWCxlQUFoQlksZUFBZ0JaO1FBQ2xDLElBQWtDQSxhQUFBQSxnRkFBQUEsQ0FBQUEsK0NBQVFBLENBQUMsS0FBSyxPQUF6Q2EsWUFBMkJiLGVBQWhCYyxlQUFnQmQ7UUFFbEMsSUFBTWUsaUJBQWlCWCw0REFBV0EsQ0FBQ0ssWUFBWSxNQUFNSztRQUV0RGYsZ0RBQVNBLENBQUMsV0FBTTtZQUNiLElBQUlpQjtZQUVKSixhQUFhO3VCQUFNLHFGQUFJVixzREFBT0EsU0FBRSxxRkFBR0MsMERBQVdBLEdBQUVjLE1BQU0sQ0FBQ0MsU0FBQUEsTUFBUTtvQkFDM0QsSUFBR0EsS0FBS0MsSUFBSSxDQUFDQyxRQUFRLENBQUNMLGlCQUFnQjt3QkFDbENDLGVBQWVFLEtBQUtDLElBQUk7b0JBQzFCLENBQUM7b0JBRURMLGFBQWE7K0JBQU0sS0FBSzs7b0JBQ3hCLE9BQU9FO2dCQUNYOztRQUdMLEdBQUc7WUFBQ0Q7U0FBZTtRQUVuQmhCLGdEQUFTQSxDQUFDLFdBQU07WUFFZmUsYUFBYTt1QkFBTSxJQUFJOztRQUV4QixHQUFHO1lBQUNMO1NBQVc7UUFHZixJQUFNWSxvQkFBb0IsU0FBQ0MsR0FBTTtZQUM3QlosY0FBYzt1QkFBTVksRUFBRUMsTUFBTSxDQUFDQyxLQUFLOztRQUN0QztRQUVBLElBQU1DLGFBQWEsV0FBTTtZQUNyQmYsY0FBYztRQUNsQjtRQUVDLHFCQUNJLDhEQUFDZ0I7WUFBSUMsV0FBVTs7OEJBQ2IsOERBQUNDO29CQUFPRCxXQUFVOztzQ0FDZCw4REFBQ0Q7NEJBQUlDLFdBQVU7OzhDQUNYLDhEQUFDRTtvQ0FBSUMsS0FBSTtvQ0FBYUMsS0FBSTs7Ozs7OzhDQUMxQiw4REFBQ0Y7b0NBQUlDLEtBQUk7b0NBQWFDLEtBQUk7Ozs7Ozs7Ozs7OztzQ0FFOUIsOERBQUNMOzRCQUFJQyxXQUFVOzs4Q0FDUiw4REFBQ0U7b0NBQUlDLEtBQUk7b0NBQWtCQyxLQUFJOzs7Ozs7OENBQ2xDLDhEQUFDQztvQ0FBS0wsV0FBVTs4Q0FDZCw0RUFBQ007d0NBQU1OLFdBQVU7d0NBQVFPLE1BQUs7d0NBQU9WLE9BQU9mO3dDQUFZMEIsVUFBVWQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzhCQUk1RSw4REFBQ2U7b0JBQUtULFdBQVU7OEJBQ1ZsQixXQUFXNEIsTUFBTSxLQUFLLGtCQUFJLDhEQUFDN0I7Ozs7Z0NBQWUsV0FBWTZCLE1BQU0sS0FBSyxLQUFLeEIsY0FBYyxJQUFJLGlCQUFJLDhEQUFDUiw4REFBVUE7Ozs7Z0NBQU1NLFVBQVUwQixNQUFNLEtBQUssa0JBQUksOERBQUNwQywwRUFBZ0JBO3dCQUFDcUMsT0FBTTt3QkFBdUJDLFNBQVM7d0JBQUtyQixNQUFNUDs7Ozs7OENBQWlCLDhEQUFDTCxzRUFBQUE7d0JBQWVtQixZQUFZQTt3QkFBWWUsUUFBUS9COzs7Ozs2QkFBYzs7Ozs7Ozs7Ozs7O0lBSXhTOztZQW5EMkJMLHdEQUFXQTs7O0VBbURyQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL01haW5MYXlvdXQvbWFpbkxheW91dC5qc3g/NTFjYiJdLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCBSZWFjdCwge3VzZUVmZmVjdCwgdXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcbmltcG9ydCAgUmVjZWlwdENvbnRhaW5lciAgZnJvbSAnLi4vUmVjZWlwdENvbnRhaW5lci9yZWNlaXB0Q29udGFpbmVyJ1xuaW1wb3J0IHtkYXRhU2VhLCBkYXRhSXRhbGlhbn0gZnJvbSAnLi4vLi4vdXRpbHMvbW9ja2VkRGF0YSc7XG5pbXBvcnQgdXNlRGVib3VuY2UgZnJvbSAnLi4vLi4vdXRpbHMvZGVib3VuY2VyJ1xuaW1wb3J0IExvYWRpbmdCYXIgZnJvbSAnLi4vTG9hZGluZ0Jhci9sb2FkaW5nQmFyJztcbmltcG9ydCBFbXB0eUNvbnRhaW5lciBmcm9tICcuLi9FbXB0eUNvbnRhaW5lci9lbXB0eUNvbnRhaW5lcidcblxuXG5leHBvcnQgY29uc3QgbWFpbkxheW91dCA9IChDb21wb25lbnQpID0+ICgpID0+IHtcblxuICAgIGNvbnN0IFtpbnB1dFZhbHVlLCBzZXRJbnB1dFZhbHVlXSA9IHVzZVN0YXRlKCcnKTtcbiAgICBjb25zdCBbZm91bmREYXRhLCBzZXRGb3VuZERhdGFdID0gdXNlU3RhdGUobnVsbClcbiAgICBjb25zdCBbaXNMb2FkaW5nLCBzZXRJc0xvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpXG5cbiAgICBjb25zdCBkZWJvdW5jZWRWYWx1ZSA9IHVzZURlYm91bmNlKGlucHV0VmFsdWUsIDEwMDAsIHNldElzTG9hZGluZyk7XG5cbiAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICBsZXQgcmV0dXJuZWREYXRhICBcbiAgICAgIFxuICAgICAgc2V0Rm91bmREYXRhKCgpID0+IFsuLi5kYXRhU2VhLCAuLi5kYXRhSXRhbGlhbl0uZmlsdGVyKGRhdGEgPT4ge1xuICAgICAgICAgIGlmKGRhdGEubmFtZS5pbmNsdWRlcyhkZWJvdW5jZWRWYWx1ZSkpe1xuICAgICAgICAgICAgICByZXR1cm5lZERhdGEgPSBkYXRhLm5hbWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgc2V0SXNMb2FkaW5nKCgpID0+IGZhbHNlKVxuICAgICAgICAgICAgcmV0dXJuIHJldHVybmVkRGF0YSBcbiAgICAgICAgfSkpXG4gICAgICAgICAgICAgIFxuICAgICAgICBcbiAgIH0sIFtkZWJvdW5jZWRWYWx1ZV0pXG5cbiAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgXG4gICAgc2V0SXNMb2FkaW5nKCgpID0+IHRydWUpXG4gICAgICAgIFxuICAgfSwgW2lucHV0VmFsdWVdKVxuICAgXG5cbiAgIGNvbnN0IGhhbmRsZUlucHV0Q2hhbmdlID0gKGUpID0+IHtcbiAgICAgICBzZXRJbnB1dFZhbHVlKCgpID0+IGUudGFyZ2V0LnZhbHVlKVxuICAgfVxuXG4gICBjb25zdCBjbGVhcklucHV0ID0gKCkgPT4ge1xuICAgICAgIHNldElucHV0VmFsdWUoJycpXG4gICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW4tbGF5b3V0XCI+XG4gICAgICAgICAgPGhlYWRlciBjbGFzc05hbWU9XCJoZWFkZXJcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWctY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIlZlY3Rvci5zdmdcIiBhbHQ9XCJ2ZWN0b3ItaW1nXCIgLz5cbiAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiRk9PRExZLnN2Z1wiIGFsdD1cImZvb2RseS10ZXh0XCIvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaWNvbi1zZWFyY2guc3ZnXCIgYWx0PVwic2VhcmNoLWljb25cIi8+IFxuICAgICAgICAgICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPVwiZm9ybVwiPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwiaW5wdXRcIiB0eXBlPVwidGV4dFwiIHZhbHVlPXtpbnB1dFZhbHVlfSBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9IC8+XG4gICAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvaGVhZGVyPlxuICAgICAgICAgIDxtYWluIGNsYXNzTmFtZT1cIm1haW5cIj5cbiAgICAgICAgICAgICAgeyBpbnB1dFZhbHVlLmxlbmd0aCA9PT0gMCA/IDxDb21wb25lbnQgLz4gOiAoaW5wdXRWYWx1ZS5sZW5ndGggIT09IDAgJiYgaXNMb2FkaW5nID09PSB0cnVlKSA/IDxMb2FkaW5nQmFyIC8+IDogZm91bmREYXRhLmxlbmd0aCAhPT0gMCA/IDxSZWNlaXB0Q29udGFpbmVyIHRpdGxlPVwiaGVyZSdzIHdoYXQgd2UgZm91bmRcIiBwaWN0dXJlPXsn8J+UjSd9IGRhdGE9e2ZvdW5kRGF0YX0gLz4gIDogPEVtcHR5Q29udGFpbmVyIGNsZWFySW5wdXQ9e2NsZWFySW5wdXR9IHNlYXJjaD17aW5wdXRWYWx1ZX0gLz4gfVxuICAgICAgICAgIDwvbWFpbj5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufSAiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIlJlY2VpcHRDb250YWluZXIiLCJkYXRhU2VhIiwiZGF0YUl0YWxpYW4iLCJ1c2VEZWJvdW5jZSIsIkxvYWRpbmdCYXIiLCJFbXB0eUNvbnRhaW5lciIsIm1haW5MYXlvdXQiLCJDb21wb25lbnQiLCJpbnB1dFZhbHVlIiwic2V0SW5wdXRWYWx1ZSIsImZvdW5kRGF0YSIsInNldEZvdW5kRGF0YSIsImlzTG9hZGluZyIsInNldElzTG9hZGluZyIsImRlYm91bmNlZFZhbHVlIiwicmV0dXJuZWREYXRhIiwiZmlsdGVyIiwiZGF0YSIsIm5hbWUiLCJpbmNsdWRlcyIsImhhbmRsZUlucHV0Q2hhbmdlIiwiZSIsInRhcmdldCIsInZhbHVlIiwiY2xlYXJJbnB1dCIsImRpdiIsImNsYXNzTmFtZSIsImhlYWRlciIsImltZyIsInNyYyIsImFsdCIsImZvcm0iLCJpbnB1dCIsInR5cGUiLCJvbkNoYW5nZSIsIm1haW4iLCJsZW5ndGgiLCJ0aXRsZSIsInBpY3R1cmUiLCJzZWFyY2giXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/MainLayout/mainLayout.jsx\n"));

/***/ })

});