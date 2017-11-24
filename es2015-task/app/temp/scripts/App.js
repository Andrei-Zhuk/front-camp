/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nvar _displaySources = __webpack_require__(1);\n\nvar _displaySources2 = _interopRequireDefault(_displaySources);\n\nvar _variables = __webpack_require__(2);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfetch('' + _variables.SERVER + _variables.TYPE_SOURCES + 'apiKey=' + _variables.API_KEY).then(function (response) {\n    return response.json();\n}).then(function (data) {\n    data.sources.forEach(function (source) {\n        if (!_variables.sources[source.category]) {\n            _variables.sources[source.category] = {\n                title: source.category,\n                content: []\n            };\n        };\n        _variables.sources[source.category].content.push(source);\n    });\n    console.log(_variables.sources);\n    (0, _displaySources2.default)(_variables.sources);\n    console.log(_variables.sources);\n});//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9hcHAvYXNzZXRzL3NjcmlwdHMvQXBwLmpzPzQ2YTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGRpc3BsYXlTb3VyY2VzIGZyb20gJy4vbW9kdWxlcy9kaXNwbGF5U291cmNlcyc7XHJcbmltcG9ydCB7QVBJX0tFWSwgU0VSVkVSLCBUWVBFX1NPVVJDRVMsIHNvdXJjZXN9IGZyb20gJy4vYmFzZS92YXJpYWJsZXMnO1xyXG5cclxuZmV0Y2goYCR7U0VSVkVSfSR7VFlQRV9TT1VSQ0VTfWFwaUtleT0ke0FQSV9LRVl9YClcclxuICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgIC50aGVuKGRhdGEgPT4ge1xyXG4gICAgICAgIGRhdGEuc291cmNlcy5mb3JFYWNoKHNvdXJjZSA9PiB7XHJcbiAgICAgICAgICAgIGlmICghc291cmNlc1tzb3VyY2UuY2F0ZWdvcnldKSB7XHJcbiAgICAgICAgICAgICAgICBzb3VyY2VzW3NvdXJjZS5jYXRlZ29yeV0gPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IHNvdXJjZS5jYXRlZ29yeSxcclxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBbXVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBzb3VyY2VzW3NvdXJjZS5jYXRlZ29yeV0uY29udGVudC5wdXNoKHNvdXJjZSlcclxuICAgICAgICB9KVxyXG4gICAgICAgIGNvbnNvbGUubG9nKHNvdXJjZXMpO1xyXG4gICAgICAgIGRpc3BsYXlTb3VyY2VzKHNvdXJjZXMpXHJcbiAgICAgICAgY29uc29sZS5sb2coc291cmNlcyk7XHJcbiAgICB9KVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gYXBwL2Fzc2V0cy9zY3JpcHRzL0FwcC5qcyJdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	eval("\"use strict\";\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.default = displaySources;\n\nvar _variables = __webpack_require__(2);\n\nvar _displayArticles = __webpack_require__(3);\n\nvar _displayArticles2 = _interopRequireDefault(_displayArticles);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction displaySources(sources) {\n    var container = document.getElementById('sources-container');\n\n    for (var category in sources) {\n        var categoryContainer = document.createElement('div');\n        var categoryTitle = document.createElement('a');\n        categoryTitle.href = '#';\n        categoryTitle.textContent = sources[category].title;\n        categoryTitle.id = category;\n        categoryTitle.classList.add(\"category\");\n        categoryTitle.addEventListener(\"click\", handleCategoryClick);\n        var sourceList = document.createElement('ul');\n        sourceList.classList.add(\"sourceList\");\n\n        for (var i = 0; i < sources[category].content.length; i++) {\n            var source = document.createElement('li');\n            var sourceTitle = document.createElement('a');\n            sourceTitle.href = '#';\n            sourceTitle.textContent = sources[category].content[i].name;\n            sourceTitle.id = sources[category].content[i].id;\n            sourceTitle.addEventListener('click', handleSourceClick);\n\n            source.appendChild(sourceTitle);\n            sourceList.appendChild(source);\n        }\n\n        sources[category].list = sourceList;\n        categoryContainer.appendChild(categoryTitle);\n        categoryContainer.appendChild(sourceList);\n        container.appendChild(categoryContainer);\n    }\n}\n\nfunction handleCategoryClick(e) {\n    console.log(e);\n    _variables.sources[e.target.id].list.classList.toggle(\"sourceListVisible\");\n}\n\nfunction handleSourceClick(e) {\n    var source = e.target.id;\n    fetch(\"\" + _variables.SERVER + _variables.TYPE_EVERYTHING + \"apiKey=\" + _variables.API_KEY + \"&sources=\" + source).then(function (response) {\n        return response.json();\n    }).then(function (data) {\n        _variables.articles.content = data.articles;\n        (0, _displayArticles2.default)(_variables.articles);\n    });\n}//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9hcHAvYXNzZXRzL3NjcmlwdHMvbW9kdWxlcy9kaXNwbGF5U291cmNlcy5qcz82MTMyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7QVBJX0tFWSwgU0VSVkVSLCBUWVBFX0VWRVJZVEhJTkcsIHNvdXJjZXMsIGFydGljbGVzfSBmcm9tIFwiLi8uLi9iYXNlL3ZhcmlhYmxlc1wiO1xyXG5pbXBvcnQgZGlzcGxheUFydGljbGVzIGZyb20gXCIuL2Rpc3BsYXlBcnRpY2xlc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGlzcGxheVNvdXJjZXMoc291cmNlcykge1xyXG4gICAgbGV0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzb3VyY2VzLWNvbnRhaW5lcicpO1xyXG5cclxuICAgIGZvciAodmFyIGNhdGVnb3J5IGluIHNvdXJjZXMpIHtcclxuICAgICAgICBsZXQgY2F0ZWdvcnlDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBsZXQgY2F0ZWdvcnlUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcclxuICAgICAgICBjYXRlZ29yeVRpdGxlLmhyZWYgPSAnIyc7XHJcbiAgICAgICAgY2F0ZWdvcnlUaXRsZS50ZXh0Q29udGVudCA9IHNvdXJjZXNbY2F0ZWdvcnldLnRpdGxlO1xyXG4gICAgICAgIGNhdGVnb3J5VGl0bGUuaWQgPSBjYXRlZ29yeTtcclxuICAgICAgICBjYXRlZ29yeVRpdGxlLmNsYXNzTGlzdC5hZGQoXCJjYXRlZ29yeVwiKTtcclxuICAgICAgICBjYXRlZ29yeVRpdGxlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoYW5kbGVDYXRlZ29yeUNsaWNrKVxyXG4gICAgICAgIGxldCBzb3VyY2VMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcclxuICAgICAgICBzb3VyY2VMaXN0LmNsYXNzTGlzdC5hZGQoXCJzb3VyY2VMaXN0XCIpO1xyXG5cclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNvdXJjZXNbY2F0ZWdvcnldLmNvbnRlbnQubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IHNvdXJjZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcbiAgICAgICAgICAgIGxldCBzb3VyY2VUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcclxuICAgICAgICAgICAgc291cmNlVGl0bGUuaHJlZiA9ICcjJztcclxuICAgICAgICAgICAgc291cmNlVGl0bGUudGV4dENvbnRlbnQgPSBzb3VyY2VzW2NhdGVnb3J5XS5jb250ZW50W2ldLm5hbWU7XHJcbiAgICAgICAgICAgIHNvdXJjZVRpdGxlLmlkID0gc291cmNlc1tjYXRlZ29yeV0uY29udGVudFtpXS5pZFxyXG4gICAgICAgICAgICBzb3VyY2VUaXRsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZVNvdXJjZUNsaWNrKVxyXG5cclxuICAgICAgICAgICAgc291cmNlLmFwcGVuZENoaWxkKHNvdXJjZVRpdGxlKTtcclxuICAgICAgICAgICAgc291cmNlTGlzdC5hcHBlbmRDaGlsZChzb3VyY2UpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc291cmNlc1tjYXRlZ29yeV0ubGlzdCA9IHNvdXJjZUxpc3RcclxuICAgICAgICBjYXRlZ29yeUNvbnRhaW5lci5hcHBlbmRDaGlsZChjYXRlZ29yeVRpdGxlKTtcclxuICAgICAgICBjYXRlZ29yeUNvbnRhaW5lci5hcHBlbmRDaGlsZChzb3VyY2VMaXN0KTtcclxuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY2F0ZWdvcnlDb250YWluZXIpO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBoYW5kbGVDYXRlZ29yeUNsaWNrKGUpIHtcclxuICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgc291cmNlc1tlLnRhcmdldC5pZF0ubGlzdC5jbGFzc0xpc3QudG9nZ2xlKFwic291cmNlTGlzdFZpc2libGVcIik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGhhbmRsZVNvdXJjZUNsaWNrKGUpIHtcclxuICAgIGxldCBzb3VyY2UgPSBlLnRhcmdldC5pZDtcclxuICAgIGZldGNoKGAke1NFUlZFUn0ke1RZUEVfRVZFUllUSElOR31hcGlLZXk9JHtBUElfS0VZfSZzb3VyY2VzPSR7c291cmNlfWApXHJcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgIC50aGVuKGRhdGEgPT4ge1xyXG4gICAgICAgICAgICBhcnRpY2xlcy5jb250ZW50ID0gZGF0YS5hcnRpY2xlcztcclxuICAgICAgICAgICAgZGlzcGxheUFydGljbGVzKGFydGljbGVzKTtcclxuICAgICAgICB9KVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBhcHAvYXNzZXRzL3NjcmlwdHMvbW9kdWxlcy9kaXNwbGF5U291cmNlcy5qcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFHQTtBQUNBO0FBSkE7QUFDQTtBQUFBO0FBQ0E7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	eval("\"use strict\";\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nvar API_KEY = exports.API_KEY = \"cc9811e8c45e4304bca8110b265a30fb\";\nvar SERVER = exports.SERVER = \"https://newsapi.org/v2/\";\nvar TYPE_SOURCES = exports.TYPE_SOURCES = \"sources?\";\nvar TYPE_EVERYTHING = exports.TYPE_EVERYTHING = \"everything?\";\nvar sources = exports.sources = {};\nvar articles = exports.articles = {};//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9hcHAvYXNzZXRzL3NjcmlwdHMvYmFzZS92YXJpYWJsZXMuanM/MDRiOCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgQVBJX0tFWSA9IFwiY2M5ODExZThjNDVlNDMwNGJjYTgxMTBiMjY1YTMwZmJcIjtcclxuZXhwb3J0IGNvbnN0IFNFUlZFUiA9IFwiaHR0cHM6Ly9uZXdzYXBpLm9yZy92Mi9cIjtcclxuZXhwb3J0IGNvbnN0IFRZUEVfU09VUkNFUyA9IFwic291cmNlcz9cIjtcclxuZXhwb3J0IGNvbnN0IFRZUEVfRVZFUllUSElORyA9IFwiZXZlcnl0aGluZz9cIjtcclxuZXhwb3J0IGxldCBzb3VyY2VzID0ge307XHJcbmV4cG9ydCBsZXQgYXJ0aWNsZXMgPSB7fVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gYXBwL2Fzc2V0cy9zY3JpcHRzL2Jhc2UvdmFyaWFibGVzLmpzIl0sIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.default = displayArticles;\nfunction displayArticles() {\n    var container = document.getElementById('articles-container');\n}//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9hcHAvYXNzZXRzL3NjcmlwdHMvbW9kdWxlcy9kaXNwbGF5QXJ0aWNsZXMuanM/OTEyYiJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkaXNwbGF5QXJ0aWNsZXMoKSB7XHJcbiAgICBsZXQgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FydGljbGVzLWNvbnRhaW5lcicpO1xyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBhcHAvYXNzZXRzL3NjcmlwdHMvbW9kdWxlcy9kaXNwbGF5QXJ0aWNsZXMuanMiXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFBQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ })
/******/ ]);