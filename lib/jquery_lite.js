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
/***/ function(module, exports, __webpack_require__) {

	const DOMNodeCollection = __webpack_require__(2);

	window.$l = function (selector) {
	  if (typeof selector === 'string') {
	    let allNodes = Array.from(document.querySelectorAll(selector));
	    let collection = new DOMNodeCollection(allNodes);
	    return collection;
	  }
	  else if (selector instanceof HTMLElement) {
	    let allNodes = [selector];
	    let collection = new DOMNodeCollection(allNodes);
	  }
	};


/***/ },
/* 1 */,
/* 2 */
/***/ function(module, exports) {

	function DOMNodeCollection(HTMLElements) {
	  this.elements = HTMLElements;
	}

	DOMNodeCollection.prototype.html = function (string) {
	  if (typeof string === "string") {
	    this.elements.forEach( el => {
	      el.innerHTML = string;
	    });
	  }
	  else {
	    return this.elements[0].innerHTML;
	  }
	};

	DOMNodeCollection.prototype.empty = function () {
	  this.html("");
	};

	DOMNodeCollection.prototype.append = function (collection) {
	  if (typeof collection === 'string'){
	    collection = new DOMNodeCollection(document.querySelectorAll(collection));
	  }
	  else if (typeof collection === HTMLElement) {
	    collection = new DOMNodeCollection([collection]);
	  }

	  for (let outer = 0; outer < collection.elements.length; outer++) {
	    for (let inner = 0; inner < this.elements.length; inner++) {
	      this.elements[inner].innerHTML += collection.elements[outer].outerHTML;
	    }
	  }
	};

	DOMNodeCollection.prototype.attr = function (attribute, value) {
	  if (value === undefined) {
	    return this.elements[0].getAttribute(attribute);
	  } else {
	    this.elements.forEach( el => {
	      el.setAttribute(attribute, value);
	    });
	  }
	};

	DOMNodeCollection.prototype.addClass = function (className) {
	  let prevClassName = this.attr("class");
	  if (prevClassName) {
	    className = prevClassName + ` ${className}`;
	  }

	  this.attr("class", className);
	};

	DOMNodeCollection.prototype.removeClass = function (className) {
	  let existingClassNames = this.attr("class");

	  if (existingClassNames) {
	    splitClassNames = existingClassNames.split(" ");
	    indexToDelete = splitClassNames.indexOf(className);

	    if (indexToDelete >= 0) {
	      splitClassNames.splice(indexToDelete, 1);
	      joinedClassNames = splitClassNames.join(" ");
	      this.attr("class", joinedClassNames);
	    }
	  }
	};








	module.exports = DOMNodeCollection;


/***/ }
/******/ ]);