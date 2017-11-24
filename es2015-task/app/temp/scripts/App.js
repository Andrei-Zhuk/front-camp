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

	eval("\"use strict\";\n\nvar _displaySources = __webpack_require__(1);\n\nvar _displaySources2 = _interopRequireDefault(_displaySources);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar API_KEY = \"cc9811e8c45e4304bca8110b265a30fb\";\nvar SERVER = \"https://newsapi.org/v2/sources?\";\nvar sources = {};\n\nfetch(SERVER + \"apiKey=\" + API_KEY).then(function (response) {\n    return response.json();\n}).then(function (data) {\n    data.sources.forEach(function (source) {\n        if (!sources[source.category]) {\n            sources[source.category] = {\n                title: source.category,\n                content: []\n            };\n        };\n        sources[source.category].content.push(source);\n    });\n    console.log(sources);\n    (0, _displaySources2.default)(sources);\n});//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9hcHAvYXNzZXRzL3NjcmlwdHMvQXBwLmpzPzQ2YTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGRpc3BsYXlTb3VyY2VzIGZyb20gJy4vbW9kdWxlcy9kaXNwbGF5U291cmNlcyc7XHJcblxyXG5jb25zdCBBUElfS0VZID0gXCJjYzk4MTFlOGM0NWU0MzA0YmNhODExMGIyNjVhMzBmYlwiO1xyXG5jb25zdCBTRVJWRVIgPSBcImh0dHBzOi8vbmV3c2FwaS5vcmcvdjIvc291cmNlcz9cIjtcclxubGV0IHNvdXJjZXMgPSB7fTtcclxuXHJcbmZldGNoKGAke1NFUlZFUn1hcGlLZXk9JHtBUElfS0VZfWApXHJcbiAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAudGhlbihkYXRhID0+IHtcclxuICAgICAgICBkYXRhLnNvdXJjZXMuZm9yRWFjaChzb3VyY2UgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIXNvdXJjZXNbc291cmNlLmNhdGVnb3J5XSkge1xyXG4gICAgICAgICAgICAgICAgc291cmNlc1tzb3VyY2UuY2F0ZWdvcnldID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiBzb3VyY2UuY2F0ZWdvcnksXHJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogW11cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgc291cmNlc1tzb3VyY2UuY2F0ZWdvcnldLmNvbnRlbnQucHVzaChzb3VyY2UpXHJcbiAgICAgICAgfSlcclxuICAgICAgICBjb25zb2xlLmxvZyhzb3VyY2VzKTtcclxuICAgICAgICBkaXNwbGF5U291cmNlcyhzb3VyY2VzKVxyXG4gICAgfSlcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGFwcC9hc3NldHMvc2NyaXB0cy9BcHAuanMiXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.default = displaySources;\nfunction displaySources(sources) {\n    var container = document.getElementById('sources');\n\n    for (var category in sources) {\n        var categoryContainer = document.createElement('div');\n        var categoryTitle = document.createElement('a');\n        categoryTitle.href = '#';\n        categoryTitle.textContent = sources[category].title;\n        var sourceList = document.createElement('ul');\n\n        for (var i = 0; i < sources[category].content.length; i++) {\n            var source = document.createElement('li');\n            var sourceTitle = document.createElement('a');\n            sourceTitle.href = '#';\n            sourceTitle.textContent = sources[category].content[i].name;\n            sourceTitle.id = sources[category].content[i].id;\n            sourceTitle.addEventListener('click', function () {});\n            source.appendChild(sourceTitle);\n            sourceList.appendChild(source);\n        }\n\n        categoryContainer.appendChild(categoryTitle);\n        categoryContainer.appendChild(sourceList);\n        container.appendChild(categoryContainer);\n    }\n}//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9hcHAvYXNzZXRzL3NjcmlwdHMvbW9kdWxlcy9kaXNwbGF5U291cmNlcy5qcz82MTMyIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRpc3BsYXlTb3VyY2VzKHNvdXJjZXMpIHtcclxuICAgIGxldCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc291cmNlcycpO1xyXG5cclxuICAgIGZvciAodmFyIGNhdGVnb3J5IGluIHNvdXJjZXMpIHtcclxuICAgICAgICBsZXQgY2F0ZWdvcnlDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBsZXQgY2F0ZWdvcnlUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcclxuICAgICAgICBjYXRlZ29yeVRpdGxlLmhyZWYgPSAnIyc7XHJcbiAgICAgICAgY2F0ZWdvcnlUaXRsZS50ZXh0Q29udGVudCA9IHNvdXJjZXNbY2F0ZWdvcnldLnRpdGxlO1xyXG4gICAgICAgIGxldCBzb3VyY2VMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcclxuXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzb3VyY2VzW2NhdGVnb3J5XS5jb250ZW50Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBzb3VyY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG4gICAgICAgICAgICBsZXQgc291cmNlVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XHJcbiAgICAgICAgICAgIHNvdXJjZVRpdGxlLmhyZWYgPSAnIyc7XHJcbiAgICAgICAgICAgIHNvdXJjZVRpdGxlLnRleHRDb250ZW50ID0gc291cmNlc1tjYXRlZ29yeV0uY29udGVudFtpXS5uYW1lO1xyXG4gICAgICAgICAgICBzb3VyY2VUaXRsZS5pZCA9IHNvdXJjZXNbY2F0ZWdvcnldLmNvbnRlbnRbaV0uaWRcclxuICAgICAgICAgICAgc291cmNlVGl0bGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7fSlcclxuICAgICAgICAgICAgc291cmNlLmFwcGVuZENoaWxkKHNvdXJjZVRpdGxlKTtcclxuICAgICAgICAgICAgc291cmNlTGlzdC5hcHBlbmRDaGlsZChzb3VyY2UpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY2F0ZWdvcnlDb250YWluZXIuYXBwZW5kQ2hpbGQoY2F0ZWdvcnlUaXRsZSk7XHJcbiAgICAgICAgY2F0ZWdvcnlDb250YWluZXIuYXBwZW5kQ2hpbGQoc291cmNlTGlzdCk7XHJcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNhdGVnb3J5Q29udGFpbmVyKTtcclxuICAgIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gYXBwL2Fzc2V0cy9zY3JpcHRzL21vZHVsZXMvZGlzcGxheVNvdXJjZXMuanMiXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=");

/***/ })
/******/ ]);