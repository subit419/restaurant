"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkrestaurant_package"] = self["webpackChunkrestaurant_package"] || []).push([["pageload"],{

/***/ "./src/page-load.js":
/*!**************************!*\
  !*** ./src/page-load.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   pageLoad: () => (/* binding */ pageLoad)\n/* harmony export */ });\nfunction pageLoad () {\n    const contentDiv = document.getElementById(\"content\");\n\n    // header\n    const header = document.createElement('div');\n    header.classList.add('header');\n    contentDiv.appendChild(header);\n\n    const tabList = document.createElement('ul');\n    tabList.classList.add('tabs');\n\n    const homeTab = document.createElement('li');\n    homeTab.textContent = 'Home';\n    homeTab.classList.add('home-tab');\n    tabList.appendChild(homeTab);\n\n    const menuTab = document.createElement('li');\n    menuTab.textContent = 'Menu';\n    menuTab.classList.add('menu-tab');\n    tabList.appendChild(menuTab);\n\n    const aboutTab = document.createElement('li');\n    aboutTab.textContent = 'About';\n    aboutTab.classList.add('about-tab');\n    \n    tabList.appendChild(aboutTab);\n    header.appendChild(tabList)\n    \n\n\n    // main\n    const mainDiv = document.createElement('div');\n    const mainHeading = document.createElement('h1');\n    const mainPara = document.createElement('p');\n\n    const pageTitle = document.createElement('h1');\n    pageTitle.textContent = \"Top-notch Bun\";\n    pageTitle.classList.add('title');\n    mainDiv.appendChild(pageTitle);\n\n\n    mainHeading.textContent = 'THE HOME OF THE BEST BREAD';\n    mainPara.textContent = 'Bread is a food consisting of flour or meal that is moistened, ' +\n    'kneaded into dough, and often fermented using yeast, and it has been a major sustenance ' +\n    'since prehistoric times.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas '+\n    'sollicitudin lorem eu sapien mattis varius. Nunc sagittis mauris at felis dictum placerat. '+\n    'Nam vehicula suscipit arcu, sit amet tempor dui tincidunt non. Suspendisse porttitor consectetur '+\n    'velit, id commodo diam convallis ut. Sed neque quam, vehicula luctus velit et, hendrerit ullamcorper '+\n    'nibh. In nec ultricies massa, ut mollis leo. Mauris et odio dui. Cras efficitur sit amet purus in suscipit. '+\n    'Suspendisse posuere ante non molestie finibus. Etiam ultricies, lectus in consequat condimentum, '+\n    'nunc sapien congue enim, eu suscipit felis felis sit amet eros.';\n    \n    mainDiv.classList.add('main');\n    contentDiv.appendChild(mainDiv);\n\n   \n    mainDiv.appendChild(mainHeading);\n    mainDiv.appendChild(mainPara);\n\n    \n\n    // footer\n    const footerDiv = document.createElement('div')\n    footerDiv.classList.add('footer');\n    contentDiv.appendChild(footerDiv);\n\n    const author = document.createElement('p');\n    author.textContent = \"Site by Mark Subit\";\n    footerDiv.appendChild(author);\n\n    const imageCredit = document.createElement('a');\n    imageCredit.href = 'https://unsplash.com/@mitifotos';\n    imageCredit.textContent = 'Image by miti on Unsplash';\n\n    footerDiv.appendChild(imageCredit);\n\n\n}\n\n//# sourceURL=webpack://restaurant-package/./src/page-load.js?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/page-load.js"));
/******/ }
]);