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

/***/ "./components/ReceiptContainer/receiptContainer.jsx":
/*!**********************************************************!*\
  !*** ./components/ReceiptContainer/receiptContainer.jsx ***!
  \**********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ReceiptContainer; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _ReceiptContainer_receiptContainer_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ReceiptContainer/receiptContainer.module.css */ \"./components/ReceiptContainer/receiptContainer.module.css\");\n/* harmony import */ var _ReceiptContainer_receiptContainer_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ReceiptContainer_receiptContainer_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _SingleReceipt_singleReceipt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../SingleReceipt/singleReceipt */ \"./components/SingleReceipt/singleReceipt.jsx\");\n\n\n\n\nfunction ReceiptContainer(param) {\n    var title = param.title, picture = param.picture, data = param.data;\n    var _this = this;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_ReceiptContainer_receiptContainer_module_css__WEBPACK_IMPORTED_MODULE_3___default()[\"receipts-container\"]),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: (_ReceiptContainer_receiptContainer_module_css__WEBPACK_IMPORTED_MODULE_3___default().h2),\n                children: picture + \" \" + title\n            }, void 0, false, {\n                fileName: \"/Users/macbookair/Desktop/foodly/components/ReceiptContainer/receiptContainer.jsx\",\n                lineNumber: 11,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_ReceiptContainer_receiptContainer_module_css__WEBPACK_IMPORTED_MODULE_3___default().receipts),\n                children: data.map(function(receipt, index) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SingleReceipt_singleReceipt__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        img: receipt.img,\n                        heading: receipt.name\n                    }, index, false, {\n                        fileName: \"/Users/macbookair/Desktop/foodly/components/ReceiptContainer/receiptContainer.jsx\",\n                        lineNumber: 14,\n                        columnNumber: 27\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/macbookair/Desktop/foodly/components/ReceiptContainer/receiptContainer.jsx\",\n                lineNumber: 12,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/macbookair/Desktop/foodly/components/ReceiptContainer/receiptContainer.jsx\",\n        lineNumber: 10,\n        columnNumber: 9\n    }, this);\n}\n_c = ReceiptContainer;\nvar _c;\n$RefreshReg$(_c, \"ReceiptContainer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1JlY2VpcHRDb250YWluZXIvcmVjZWlwdENvbnRhaW5lci5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUFvRTtBQUMzQztBQUNtQztBQUc3QyxTQUFTRyxpQkFBaUIsS0FBc0IsRUFBQztRQUF0QkMsUUFBRCxNQUFDQSxPQUFPQyxVQUFSLE1BQVFBLFNBQVNDLE9BQWpCLE1BQWlCQTs7SUFHdEQscUJBQ0ksOERBQUNDO1FBQUlDLFdBQVdSLDRHQUE0Qjs7MEJBQ3hDLDhEQUFDUztnQkFBR0QsV0FBV1IseUZBQVk7MEJBQUlLLFVBQVUsTUFBTUQ7Ozs7OzswQkFDL0MsOERBQUNHO2dCQUFJQyxXQUFXUiwrRkFBa0I7MEJBQzlCTSxLQUFLSSxHQUFHLENBQUMsU0FBQ0MsU0FBU0MsT0FBVTtvQkFDMUIscUJBQU8sOERBQUNWLG9FQUFhQTt3QkFBYVcsS0FBS0YsUUFBUUUsR0FBRzt3QkFBRUMsU0FBU0gsUUFBUUksSUFBSTt1QkFBOUNIOzs7OztnQkFDL0I7Ozs7Ozs7Ozs7OztBQUlmLENBQUM7S0FidUJUIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvUmVjZWlwdENvbnRhaW5lci9yZWNlaXB0Q29udGFpbmVyLmpzeD82Y2Q4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSAnLi4vUmVjZWlwdENvbnRhaW5lci9yZWNlaXB0Q29udGFpbmVyLm1vZHVsZS5jc3MnXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgIFNpbmdsZVJlY2VpcHQgIGZyb20gJy4uL1NpbmdsZVJlY2VpcHQvc2luZ2xlUmVjZWlwdCdcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBSZWNlaXB0Q29udGFpbmVyKHt0aXRsZSwgcGljdHVyZSwgZGF0YX0pe1xuXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzW1wicmVjZWlwdHMtY29udGFpbmVyXCJdfT5cbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9e3N0eWxlc1tcImgyXCJdfT57IHBpY3R1cmUgKyAnICcgKyB0aXRsZX08L2gyPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1tcInJlY2VpcHRzXCJdfT5cbiAgICAgICAgICAgICAgIHtkYXRhLm1hcCgocmVjZWlwdCwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgICByZXR1cm4gPFNpbmdsZVJlY2VpcHQga2V5PXtpbmRleH0gaW1nPXtyZWNlaXB0LmltZ30gaGVhZGluZz17cmVjZWlwdC5uYW1lfS8+XG4gICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG4iXSwibmFtZXMiOlsic3R5bGVzIiwiUmVhY3QiLCJTaW5nbGVSZWNlaXB0IiwiUmVjZWlwdENvbnRhaW5lciIsInRpdGxlIiwicGljdHVyZSIsImRhdGEiLCJkaXYiLCJjbGFzc05hbWUiLCJoMiIsIm1hcCIsInJlY2VpcHQiLCJpbmRleCIsImltZyIsImhlYWRpbmciLCJuYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/ReceiptContainer/receiptContainer.jsx\n"));

/***/ })

});