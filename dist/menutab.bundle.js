"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkrestaurant_package"] = self["webpackChunkrestaurant_package"] || []).push([["menutab"],{

/***/ "./src/menu-tab.js":
/*!*************************!*\
  !*** ./src/menu-tab.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   menuTab: () => (/* binding */ menuTab)\n/* harmony export */ });\nfunction menuTab () {\n    const mainDiv = document.querySelector('.main');\n    \n    const firstMenuItem = document.createElement('div');\n    const secondMenuItem = document.createElement('div');\n    const thirdMenuItem = document.createElement('div');\n    const pageTitle = document.createElement('h1');\n    pageTitle.textContent = \"MENU\";\n    pageTitle.classList.add('title');\n    \n    mainDiv.appendChild(pageTitle);\n    mainDiv.appendChild(firstMenuItem);\n    mainDiv.appendChild(secondMenuItem);\n    mainDiv.appendChild(thirdMenuItem);\n    \n    // first item\n    const firstMenuItemHeader = document.createElement('h1');\n    firstMenuItemHeader.textContent = \"Classic Bread - $25\";\n    firstMenuItem.appendChild(firstMenuItemHeader);\n    const firstMenuItemDesc = document.createElement('p');\n    firstMenuItemDesc.textContent = \"Bread is a food consisting of flour or meal that is moistened, kneaded into dough, and often fermented using yeast, and it has been a major sustenance since prehistoric times.\"\n    firstMenuItem.appendChild(firstMenuItemDesc);\n    firstMenuItem.appendChild(document.createElement('hr'));\n\n\n    // second item\n    const secondMenuItemHeader = document.createElement('h1');\n    secondMenuItemHeader.textContent = \"Baguette - $35\";\n    secondMenuItem.appendChild(secondMenuItemHeader);\n    const secondMenuItemDesc = document.createElement('p');\n    secondMenuItemDesc.textContent = \"A baguette is a French bread shaped like a long, thin loaf with a crisp and crunchy crust. A baguette is made of wheat flour, yeast, salt, and water. It is characterized by the crisp and crunchy crust but is soft inside. Baguette is widely known for its taste and texture; it is usually baked in a stone oven.\"\n    secondMenuItem.appendChild(secondMenuItemDesc);\n    secondMenuItem.appendChild(document.createElement('hr'));\n\n    // third item\n    const thirdMenuItemHeader = document.createElement('h1');\n    thirdMenuItemHeader.textContent = \"Sourdough - $45\";\n    thirdMenuItem.appendChild(thirdMenuItemHeader);\n    const thirdMenuItemDesc = document.createElement('p');\n    thirdMenuItemDesc.textContent = \"Sourdough or sourdough bread is a bread made by the fermentation of dough using wild lactobacillaceae and yeast. Lactic acid from fermentation imparts a sour taste and improves keeping qualities\"\n    thirdMenuItem.appendChild(thirdMenuItemDesc);\n}\n\n//# sourceURL=webpack://restaurant-package/./src/menu-tab.js?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/menu-tab.js"));
/******/ }
]);