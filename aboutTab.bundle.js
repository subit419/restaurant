"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkrestaurant_package"] = self["webpackChunkrestaurant_package"] || []).push([["aboutTab"],{

/***/ "./src/about-tab.js":
/*!**************************!*\
  !*** ./src/about-tab.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   aboutTab: () => (/* binding */ aboutTab)\n/* harmony export */ });\nfunction aboutTab () {\n    const mainDiv = document.querySelector('.main');\n    const pageTitle = document.createElement('h1');\n    pageTitle.textContent = \"HOURS\";\n    pageTitle.classList.add('title');\n\n    var table, row, cell;\n    const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];\n    table = document.createElement('table');\n    row = document.createElement('tr');\n    cell = document.createElement('th');\n\n    cell.innerText = \"Day\"\n    row.appendChild(cell);\n\n    cell = document.createElement('th');\n    cell.innerText = \"Hours\"\n    row.appendChild(cell);\n\n    table.appendChild(row);\n\n    mainDiv.appendChild(pageTitle);\n    mainDiv.appendChild(table);\n\n\n    \n    \n    daysOfWeek.forEach(day => {\n        row = document.createElement('tr');\n        cell = document.createElement('td');\n        cell.innerText = day;\n\n        row.appendChild(cell);\n        cell = document.createElement('td');\n        cell.innerText = \"7:00AM - 9:00PM\";\n        row.appendChild(cell);\n        table.appendChild(row);\n\n    })\n    \n\n}\n\n//# sourceURL=webpack://restaurant-package/./src/about-tab.js?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/about-tab.js"));
/******/ }
]);