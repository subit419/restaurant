"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkrestaurant_package"] = self["webpackChunkrestaurant_package"] || []).push([["hometab"],{

/***/ "./src/home-tab.js":
/*!*************************!*\
  !*** ./src/home-tab.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   homeTab: () => (/* binding */ homeTab)\n/* harmony export */ });\nfunction homeTab() {\n\n    const pageTitle = document.createElement('h1');\n    pageTitle.textContent = \"Top-notch Bun\";\n    pageTitle.classList.add('title');\n\n    const mainDiv = document.querySelector('.main');\n    const mainHeading = document.createElement('h1');\n    const mainPara = document.createElement('p');\n\n    mainDiv.appendChild(pageTitle);\n    mainHeading.textContent = 'THE HOME OF THE BEST BREAD';\n    mainPara.textContent = 'Bread is a food consisting of flour or meal that is moistened, ' +\n    'kneaded into dough, and often fermented using yeast, and it has been a major sustenance ' +\n    'since prehistoric times.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas '+\n    'sollicitudin lorem eu sapien mattis varius. Nunc sagittis mauris at felis dictum placerat. '+\n    'Nam vehicula suscipit arcu, sit amet tempor dui tincidunt non. Suspendisse porttitor consectetur '+\n    'velit, id commodo diam convallis ut. Sed neque quam, vehicula luctus velit et, hendrerit ullamcorper '+\n    'nibh. In nec ultricies massa, ut mollis leo. Mauris et odio dui. Cras efficitur sit amet purus in suscipit. '+\n    'Suspendisse posuere ante non molestie finibus. Etiam ultricies, lectus in consequat condimentum, '+\n    'nunc sapien congue enim, eu suscipit felis felis sit amet eros.';\n    mainDiv.appendChild(mainHeading);\n    mainDiv.appendChild(mainPara);\n}  \n\n\n//# sourceURL=webpack://restaurant-package/./src/home-tab.js?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/home-tab.js"));
/******/ }
]);