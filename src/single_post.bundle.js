/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/header.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/header.js":
/*!**********************!*\
  !*** ./js/header.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("if (document.body.offsetWidth <= 850) {\r\n  document.getElementsByClassName('wrapper')[0].style.marginTop =\r\n    document.getElementsByClassName('nav')[0].offsetHeight + 'px';\r\n}\r\n\r\nlet navSearch = document.getElementsByClassName('nav-search')[0],\r\n  searchCloseButton = document.getElementById('close_search_button'),\r\n  searchOpenButton = document.getElementById('open_search_button');\r\n\r\nbodyShadow = document.createElement('div');\r\nbodyShadow.classList.add('body-shadow');\r\nbodyShadow.id = 'body-shadow';\r\n\r\ndocument.getElementsByClassName('wrapper')[0].appendChild(bodyShadow);\r\n\r\nbodyShadow = document.getElementById('body-shadow');\r\n\r\nlet dropDownNav = document.getElementsByClassName('nav__menu')[0],\r\n  dropDownNavSearch = document.getElementsByClassName('nav-search')[0];\r\n\r\ndocument.getElementsByClassName('nav')[0].onclick = function (e) {\r\n  if (e.target.id == 'open_search_button' || e.target.id == 'close_search_button') {\r\n    navSearch.classList.toggle('nav-search_open');\r\n    searchCloseButton.classList.toggle('current');\r\n    searchOpenButton.classList.toggle('current');\r\n  }\r\n\r\n  if (e.target.id == 'trigram' || e.target.classList.contains('trigram__line')) {\r\n    trigram.classList.toggle('open');\r\n    dropDownNav.classList.toggle('open');\r\n    bodyShadow.classList.toggle('active')\r\n\r\n    tmpNavSearch = navSearch.cloneNode(true)\r\n\r\n    if (dropDownNav.classList.contains('open')) {\r\n      dropDownNav.appendChild(tmpNavSearch)\r\n\r\n    } else {\r\n      setTimeout(function () {\r\n        dropDownNav.removeChild(document.getElementsByClassName('nav-search')[0])\r\n      }, 600)\r\n    }\r\n  }\r\n}\r\n\r\naddEventListener('resize', function () {\r\n  if (document.body.offsetWidth <= 850) { // Если окно <= 850px то открытая строка поиска закрывается\r\n    if (searchCloseButton.classList.contains('current')) {\r\n      navSearch.classList.toggle('nav-search_open');\r\n      searchCloseButton.classList.toggle('current');\r\n      searchOpenButton.classList.toggle('current');\r\n    }\r\n\r\n    if (dropDownNav.classList.contains('open')) {\r\n      dropDownNav.appendChild(tmpNavSearch)\r\n      bodyShadow.classList.add('active');\r\n    }\r\n\r\n    document.getElementsByClassName('wrapper')[0].style.marginTop =\r\n      document.getElementsByClassName('nav')[0].offsetHeight + 'px';\r\n  } else {\r\n    if (dropDownNav.getElementsByClassName('nav-search')[0]) {\r\n      dropDownNav.getElementsByClassName('nav-search')[0].remove()\r\n    }\r\n    if (bodyShadow.classList.contains('active')) {\r\n      bodyShadow.classList.remove('active');\r\n    }\r\n\r\n    document.getElementsByClassName('wrapper')[0].style.marginTop = '';\r\n  }\r\n})\n\n//# sourceURL=webpack:///./js/header.js?");

/***/ })

/******/ });