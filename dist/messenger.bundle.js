/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module './modules/Router.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module './pages/Error404Page/Error404Page.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module './pages/Error500Page/Error500Page.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module './pages/login/login.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module './pages/messenger/messenger.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module './pages/profile/profile.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module './pages/profileEdit/profileEdit.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module './pages/registration/registration.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nfunction App(rootQuery) {\r\n    const router = new Object(function webpackMissingModule() { var e = new Error(\"Cannot find module './modules/Router.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(rootQuery);\r\n    //Register all routes;\r\n    router.use('/404', Object(function webpackMissingModule() { var e = new Error(\"Cannot find module './pages/Error404Page/Error404Page.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));\r\n    router.use('/500', Object(function webpackMissingModule() { var e = new Error(\"Cannot find module './pages/Error500Page/Error500Page.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));\r\n    router.use('/login', Object(function webpackMissingModule() { var e = new Error(\"Cannot find module './pages/login/login.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));\r\n    router.use('/registration', Object(function webpackMissingModule() { var e = new Error(\"Cannot find module './pages/registration/registration.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));\r\n    router.use('/profile', Object(function webpackMissingModule() { var e = new Error(\"Cannot find module './pages/profile/profile.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));\r\n    router.use('/profileEdit', Object(function webpackMissingModule() { var e = new Error(\"Cannot find module './pages/profileEdit/profileEdit.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));\r\n    router.use('/messenger', Object(function webpackMissingModule() { var e = new Error(\"Cannot find module './pages/messenger/messenger.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));\r\n    //start App\r\n    router.start();\r\n    if (window.location.pathname === '/')\r\n        router.go('/login');\r\n}\r\ndocument.addEventListener('DOMContentLoaded', function () {\r\n    App('.root');\r\n});\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);\r\n\n\n//# sourceURL=webpack://messenger/./src/index.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.ts");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;