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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _readOnlyError(name) { throw new Error(\"\\\"\" + name + \"\\\" is read-only\"); }\n\nvar margin = {\n  top: 10,\n  right: 30,\n  bottom: 30,\n  left: 40\n},\n    width = 460 - margin.left - margin.right,\n    height = 400 - margin.top - margin.bottom; // append the svg object to the body of the page\n\nvar svg = d3.select(\"#chartArea\").append(\"svg\").attr(\"width\", width + margin.left + margin.right).attr(\"height\", height + margin.top + margin.bottom).append(\"g\").attr(\"transform\", \"translate(\" + margin.left + \",\" + margin.top + \")\"); // get the data\n\nd3.csv(\"https://raw.githubusercontent.com/holtzy/data_to_viz/master/Example_dataset/1_OneNum.csv\", function (data) {\n  // X axis: scale and draw:\n  var x = d3.scaleLinear().domain([0, 1000]) // can use this instead of 1000 to have the max of data: d3.max(data, function(d) { return +d.price })\n  .range([0, width]);\n  svg.append(\"g\").attr(\"transform\", \"translate(0,\" + height + \")\").call(d3.axisBottom(x)); // set the parameters for the histogram\n\n  var histogram = d3.histogram().value(function (d) {\n    return d.price;\n  }) // I need to give the vector of value\n  .domain(x.domain()) // then the domain of the graphic\n  .thresholds(x.ticks(70)); // then the numbers of bins\n  // And apply this function to data to get the bins\n\n  var bins = histogram(data); // Y axis: scale and draw:\n\n  var y = d3.scaleLinear().range([height, 0]);\n  y.domain([0, d3.max(bins, function (d) {\n    return d.length;\n  })]); // d3.hist has to be called before the Y axis obviously\n\n  svg.append(\"g\").call(d3.axisLeft(y)); // append the bar rectangles to the svg element\n\n  svg.selectAll(\"rect\").data(bins).enter().append(\"rect\").attr(\"x\", 1).attr(\"transform\", function (d) {\n    return \"translate(\" + x(d.x0) + \",\" + y(d.length) + \")\";\n  }).attr(\"width\", function (d) {\n    return x(d.x1) - x(d.x0) - 1;\n  }).attr(\"height\", function (d) {\n    return height - y(d.length);\n  }).style(\"fill\", \"#69b3a2\");\n}); //We will build a basic function to handle window resizing.\n\nvar resize = function resize() {\n  width = (_readOnlyError(\"width\"), document.getElementById(\"chartArea\").clientWidth);\n  height = (_readOnlyError(\"height\"), width / 3.236);\n  d3.select(\"#chartArea svg\").attr(\"width\", width).attr(\"height\", height);\n};\n\nwindow.onresize = resize;\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });