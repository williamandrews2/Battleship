/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/gameboard.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/gameboard.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
  --preview-color: rgb(107, 255, 107);
  --preview-placed-color: rgb(0, 189, 0);
}

#gameboard-wrapper {
  display: flex;
  justify-content: space-around;
}

.gameboard-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: var(--font-color);
  letter-spacing: 1px;
  font-weight: lighter;
  text-transform: uppercase;
}

.gameboard-container h2 {
  margin: 1rem 0px;
}

.gameboard {
  display: grid;
  grid-template-columns: repeat(10, 40px);
  grid-template-rows: repeat(10, 40px);
  gap: 2px;
}

.cell {
  width: 40px;
  height: 40px;
  background-color: rgb(146, 224, 250);
  border: 1px solid #333;
}
.cell.ship {
  background-color: gray;
}
.cell.hit {
  background-color: red;
}
.cell.miss {
  background-color: white;
}

.cell.preview {
  background-color: var(--preview-color);
}

.cell.preview-placed {
  background-color: var(--preview-placed-color);
}

.setup-controls {
  margin-top: 1rem;
  display: flex;
  justify-content: space-around;
  gap: 1rem;
}

@media screen and (max-width: 768px) {
  #gameboard-wrapper {
    flex-direction: column;
    justify-content: center;
  }

  .gameboard {
    grid-template-columns: repeat(10, 30px);
    grid-template-rows: repeat(10, 30px);
  }

  .cell {
    height: 30px;
    width: 30px;
  }
}
`, "",{"version":3,"sources":["webpack://./src/gameboard.css"],"names":[],"mappings":"AAAA;EACE,mCAAmC;EACnC,sCAAsC;AACxC;;AAEA;EACE,aAAa;EACb,6BAA6B;AAC/B;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,wBAAwB;EACxB,mBAAmB;EACnB,oBAAoB;EACpB,yBAAyB;AAC3B;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,uCAAuC;EACvC,oCAAoC;EACpC,QAAQ;AACV;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,oCAAoC;EACpC,sBAAsB;AACxB;AACA;EACE,sBAAsB;AACxB;AACA;EACE,qBAAqB;AACvB;AACA;EACE,uBAAuB;AACzB;;AAEA;EACE,sCAAsC;AACxC;;AAEA;EACE,6CAA6C;AAC/C;;AAEA;EACE,gBAAgB;EAChB,aAAa;EACb,6BAA6B;EAC7B,SAAS;AACX;;AAEA;EACE;IACE,sBAAsB;IACtB,uBAAuB;EACzB;;EAEA;IACE,uCAAuC;IACvC,oCAAoC;EACtC;;EAEA;IACE,YAAY;IACZ,WAAW;EACb;AACF","sourcesContent":[":root {\r\n  --preview-color: rgb(107, 255, 107);\r\n  --preview-placed-color: rgb(0, 189, 0);\r\n}\r\n\r\n#gameboard-wrapper {\r\n  display: flex;\r\n  justify-content: space-around;\r\n}\r\n\r\n.gameboard-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  color: var(--font-color);\r\n  letter-spacing: 1px;\r\n  font-weight: lighter;\r\n  text-transform: uppercase;\r\n}\r\n\r\n.gameboard-container h2 {\r\n  margin: 1rem 0px;\r\n}\r\n\r\n.gameboard {\r\n  display: grid;\r\n  grid-template-columns: repeat(10, 40px);\r\n  grid-template-rows: repeat(10, 40px);\r\n  gap: 2px;\r\n}\r\n\r\n.cell {\r\n  width: 40px;\r\n  height: 40px;\r\n  background-color: rgb(146, 224, 250);\r\n  border: 1px solid #333;\r\n}\r\n.cell.ship {\r\n  background-color: gray;\r\n}\r\n.cell.hit {\r\n  background-color: red;\r\n}\r\n.cell.miss {\r\n  background-color: white;\r\n}\r\n\r\n.cell.preview {\r\n  background-color: var(--preview-color);\r\n}\r\n\r\n.cell.preview-placed {\r\n  background-color: var(--preview-placed-color);\r\n}\r\n\r\n.setup-controls {\r\n  margin-top: 1rem;\r\n  display: flex;\r\n  justify-content: space-around;\r\n  gap: 1rem;\r\n}\r\n\r\n@media screen and (max-width: 768px) {\r\n  #gameboard-wrapper {\r\n    flex-direction: column;\r\n    justify-content: center;\r\n  }\r\n\r\n  .gameboard {\r\n    grid-template-columns: repeat(10, 30px);\r\n    grid-template-rows: repeat(10, 30px);\r\n  }\r\n\r\n  .cell {\r\n    height: 30px;\r\n    width: 30px;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! data:image/svg+xml;utf8,<svg fill=%27white%27 height=%2724%27 viewBox=%270 0 24 24%27 width=%2724%27 xmlns=%27http://www.w3.org/2000/svg%27><path d=%27M7 10l5 5 5-5z%27/></svg> */ "data:image/svg+xml;utf8,<svg fill=%27white%27 height=%2724%27 viewBox=%270 0 24 24%27 width=%2724%27 xmlns=%27http://www.w3.org/2000/svg%27><path d=%27M7 10l5 5 5-5z%27/></svg>"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  font-family: "Black Ops One", sans-serif;
  --font-color: white;
}

html {
  background: #4fcaff;
  background: radial-gradient(
    circle,
    rgba(79, 202, 255, 1) 0%,
    rgba(0, 145, 255, 1) 52%,
    rgba(0, 75, 214, 1) 100%
  );
}

button {
  cursor: pointer;
}

.main-container h1 {
  font-size: 4rem;
  text-align: center;
  color: var(--font-color);
  letter-spacing: 1px;
  font-weight: lighter;
  text-transform: uppercase;
}

.main-container {
  min-height: 100vh;
}

#message {
  position: fixed;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  background: #222;
  color: #fff;
  padding: 10px 20px;
  border-radius: 8px;
  font-size: 1rem;
  z-index: 1001;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
}

#winning-message {
  position: fixed;
  display: flex;
  flex-direction: column;
  top: 25%;
  left: 50%;
  transform: translateX(-50%);
  background: #222;
  color: yellow;
  padding: 30px;
  border-radius: 8px;
  font-size: 2rem;
  z-index: 1001;
}

#winning-message button {
  font-size: 1.5rem;
  margin-top: 20px;
  padding: 10px;
  border: none;
  border-radius: 8px;
  font-family: "Black Ops One", sans-serif;
  color: white;
  background-color: #4fcaff;
}

#ship-select {
  appearance: none; /* Remove default styling */
  -webkit-appearance: none;
  -moz-appearance: none;

  background-color: #007acc;
  border: 1px solid #444;
  border-radius: 6px;
  padding: 8px 12px;
  font-size: 1rem;
  font-family: inherit;
  color: white;
  cursor: pointer;
  transition: border-color 0.2s, box-shadow 0.2s;

  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
  background-repeat: no-repeat;
  background-position: right 10px center;
  background-size: 16px 16px;
  padding-right: 36px; /* Make space for the arrow */
}

#ship-select:hover {
  background-color: #005fa3;
}

#ship-select:focus {
  outline: none;
  border-color: #007acc;
  box-shadow: 0 0 4px rgba(0, 122, 204, 0.6);
}

.setup-controls button {
  background-color: #007acc;
  width: 200px;
  color: white;
  border: none;
  border-radius: 6px;
  padding: 8px 16px;
  font-size: 1rem;
  font-family: inherit;
  cursor: pointer;
  transition: background-color 0.2s, box-shadow 0.2s;
}

.setup-controls button:hover {
  background-color: #005fa3;
}

.setup-controls button:focus {
  outline: none;
  box-shadow: 0 0 4px rgba(0, 122, 204, 0.6);
}

@media screen and (max-width: 768px) {
  .main-container h1 {
    font-size: 3rem;
  }
}
`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;AACxB;;AAEA;EACE,wCAAwC;EACxC,mBAAmB;AACrB;;AAEA;EACE,mBAAmB;EACnB;;;;;GAKC;AACH;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,eAAe;EACf,kBAAkB;EAClB,wBAAwB;EACxB,mBAAmB;EACnB,oBAAoB;EACpB,yBAAyB;AAC3B;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,eAAe;EACf,SAAS;EACT,SAAS;EACT,2BAA2B;EAC3B,gBAAgB;EAChB,WAAW;EACX,kBAAkB;EAClB,kBAAkB;EAClB,eAAe;EACf,aAAa;EACb,uCAAuC;AACzC;;AAEA;EACE,eAAe;EACf,aAAa;EACb,sBAAsB;EACtB,QAAQ;EACR,SAAS;EACT,2BAA2B;EAC3B,gBAAgB;EAChB,aAAa;EACb,aAAa;EACb,kBAAkB;EAClB,eAAe;EACf,aAAa;AACf;;AAEA;EACE,iBAAiB;EACjB,gBAAgB;EAChB,aAAa;EACb,YAAY;EACZ,kBAAkB;EAClB,wCAAwC;EACxC,YAAY;EACZ,yBAAyB;AAC3B;;AAEA;EACE,gBAAgB,EAAE,2BAA2B;EAC7C,wBAAwB;EACxB,qBAAqB;;EAErB,yBAAyB;EACzB,sBAAsB;EACtB,kBAAkB;EAClB,iBAAiB;EACjB,eAAe;EACf,oBAAoB;EACpB,YAAY;EACZ,eAAe;EACf,8CAA8C;;EAE9C,yDAAiL;EACjL,4BAA4B;EAC5B,sCAAsC;EACtC,0BAA0B;EAC1B,mBAAmB,EAAE,6BAA6B;AACpD;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,aAAa;EACb,qBAAqB;EACrB,0CAA0C;AAC5C;;AAEA;EACE,yBAAyB;EACzB,YAAY;EACZ,YAAY;EACZ,YAAY;EACZ,kBAAkB;EAClB,iBAAiB;EACjB,eAAe;EACf,oBAAoB;EACpB,eAAe;EACf,kDAAkD;AACpD;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,aAAa;EACb,0CAA0C;AAC5C;;AAEA;EACE;IACE,eAAe;EACjB;AACF","sourcesContent":["* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\n:root {\r\n  font-family: \"Black Ops One\", sans-serif;\r\n  --font-color: white;\r\n}\r\n\r\nhtml {\r\n  background: #4fcaff;\r\n  background: radial-gradient(\r\n    circle,\r\n    rgba(79, 202, 255, 1) 0%,\r\n    rgba(0, 145, 255, 1) 52%,\r\n    rgba(0, 75, 214, 1) 100%\r\n  );\r\n}\r\n\r\nbutton {\r\n  cursor: pointer;\r\n}\r\n\r\n.main-container h1 {\r\n  font-size: 4rem;\r\n  text-align: center;\r\n  color: var(--font-color);\r\n  letter-spacing: 1px;\r\n  font-weight: lighter;\r\n  text-transform: uppercase;\r\n}\r\n\r\n.main-container {\r\n  min-height: 100vh;\r\n}\r\n\r\n#message {\r\n  position: fixed;\r\n  top: 20px;\r\n  left: 50%;\r\n  transform: translateX(-50%);\r\n  background: #222;\r\n  color: #fff;\r\n  padding: 10px 20px;\r\n  border-radius: 8px;\r\n  font-size: 1rem;\r\n  z-index: 1001;\r\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);\r\n}\r\n\r\n#winning-message {\r\n  position: fixed;\r\n  display: flex;\r\n  flex-direction: column;\r\n  top: 25%;\r\n  left: 50%;\r\n  transform: translateX(-50%);\r\n  background: #222;\r\n  color: yellow;\r\n  padding: 30px;\r\n  border-radius: 8px;\r\n  font-size: 2rem;\r\n  z-index: 1001;\r\n}\r\n\r\n#winning-message button {\r\n  font-size: 1.5rem;\r\n  margin-top: 20px;\r\n  padding: 10px;\r\n  border: none;\r\n  border-radius: 8px;\r\n  font-family: \"Black Ops One\", sans-serif;\r\n  color: white;\r\n  background-color: #4fcaff;\r\n}\r\n\r\n#ship-select {\r\n  appearance: none; /* Remove default styling */\r\n  -webkit-appearance: none;\r\n  -moz-appearance: none;\r\n\r\n  background-color: #007acc;\r\n  border: 1px solid #444;\r\n  border-radius: 6px;\r\n  padding: 8px 12px;\r\n  font-size: 1rem;\r\n  font-family: inherit;\r\n  color: white;\r\n  cursor: pointer;\r\n  transition: border-color 0.2s, box-shadow 0.2s;\r\n\r\n  background-image: url(\"data:image/svg+xml;utf8,<svg fill='white' height='24' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/></svg>\");\r\n  background-repeat: no-repeat;\r\n  background-position: right 10px center;\r\n  background-size: 16px 16px;\r\n  padding-right: 36px; /* Make space for the arrow */\r\n}\r\n\r\n#ship-select:hover {\r\n  background-color: #005fa3;\r\n}\r\n\r\n#ship-select:focus {\r\n  outline: none;\r\n  border-color: #007acc;\r\n  box-shadow: 0 0 4px rgba(0, 122, 204, 0.6);\r\n}\r\n\r\n.setup-controls button {\r\n  background-color: #007acc;\r\n  width: 200px;\r\n  color: white;\r\n  border: none;\r\n  border-radius: 6px;\r\n  padding: 8px 16px;\r\n  font-size: 1rem;\r\n  font-family: inherit;\r\n  cursor: pointer;\r\n  transition: background-color 0.2s, box-shadow 0.2s;\r\n}\r\n\r\n.setup-controls button:hover {\r\n  background-color: #005fa3;\r\n}\r\n\r\n.setup-controls button:focus {\r\n  outline: none;\r\n  box-shadow: 0 0 4px rgba(0, 122, 204, 0.6);\r\n}\r\n\r\n@media screen and (max-width: 768px) {\r\n  .main-container h1 {\r\n    font-size: 3rem;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/audio.js":
/*!**********************!*\
  !*** ./src/audio.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _audio_the_last_stand_mp3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./audio/the-last-stand.mp3 */ "./src/audio/the-last-stand.mp3");
/* harmony import */ var _audio_placing_object_sfx_mp3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./audio/placing-object-sfx.mp3 */ "./src/audio/placing-object-sfx.mp3");
/* harmony import */ var _audio_explosion_sfx_mp3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./audio/explosion-sfx.mp3 */ "./src/audio/explosion-sfx.mp3");
/* harmony import */ var _audio_boom_sfx_mp3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./audio/boom-sfx.mp3 */ "./src/audio/boom-sfx.mp3");





const playMusic = () => {
  let bgMusic = new Audio(_audio_the_last_stand_mp3__WEBPACK_IMPORTED_MODULE_0__);
  bgMusic.loop = true;
  bgMusic.volume = 0.2;
  bgMusic.play();
};

const stopMusic = () => {
  bgMusic.pause();
};

const playHit = () => {
  let hitSFX = new Audio(_audio_explosion_sfx_mp3__WEBPACK_IMPORTED_MODULE_2__);
  hitSFX.volume = 0.7;
  hitSFX.play();
};

const playMiss = () => {
  let missSFX = new Audio(_audio_boom_sfx_mp3__WEBPACK_IMPORTED_MODULE_3__);
  missSFX.volume = 0.7;
  missSFX.play();
};

const playPlacingShip = () => {
  let placeShipSFX = new Audio(_audio_placing_object_sfx_mp3__WEBPACK_IMPORTED_MODULE_1__);
  placeShipSFX.volume = 0.5;
  placeShipSFX.play();
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({ playMusic, stopMusic, playHit, playMiss, playPlacingShip });


/***/ }),

/***/ "./src/audio/boom-sfx.mp3":
/*!********************************!*\
  !*** ./src/audio/boom-sfx.mp3 ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "802737203e7df720c61b.mp3";

/***/ }),

/***/ "./src/audio/explosion-sfx.mp3":
/*!*************************************!*\
  !*** ./src/audio/explosion-sfx.mp3 ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fc5157203abca04726e2.mp3";

/***/ }),

/***/ "./src/audio/placing-object-sfx.mp3":
/*!******************************************!*\
  !*** ./src/audio/placing-object-sfx.mp3 ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "53d4849e66446b1b97fe.mp3";

/***/ }),

/***/ "./src/audio/the-last-stand.mp3":
/*!**************************************!*\
  !*** ./src/audio/the-last-stand.mp3 ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "89f399dccf905f3b8d82.mp3";

/***/ }),

/***/ "./src/computer.js":
/*!*************************!*\
  !*** ./src/computer.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _gameController_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameController.js */ "./src/gameController.js");
// module responsible for controlling the actions and setup of the opponent (computer)


const shipLengths = [5, 4, 3, 3, 2];

const setupBoard = (player) => {
  let x, y, length, orientation;
  for (let i = 0; i < shipLengths.length; i++) {
    x = generateRandomCoord();
    y = generateRandomCoord();
    length = shipLengths[i];
    orientation = generateRandomOrientation();

    let success = player.gameboard.placeShip(x, y, length, orientation);
    // continually retry random coords if ship is not able to be placed
    while (!success) {
      x = generateRandomCoord();
      y = generateRandomCoord();
      success = player.gameboard.placeShip(x, y, length, orientation);
    }
  }
};

function chooseAttack() {
  let x = generateRandomCoord();
  let y = generateRandomCoord();

  let success = _gameController_js__WEBPACK_IMPORTED_MODULE_0__["default"].canAttackShip(x, y);
  // retry new coordinates if the attack is not able to be executed.
  while (!success) {
    x = generateRandomCoord();
    y = generateRandomCoord();
    success = _gameController_js__WEBPACK_IMPORTED_MODULE_0__["default"].canAttackShip(x, y);
  }
  return [x, y];
}

function generateRandomCoord() {
  return Math.floor(Math.random() * 10);
}

function generateRandomOrientation() {
  const result = Math.random() < 0.5 ? "horizontal" : "vertical";
  return result;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({ setupBoard, chooseAttack });


/***/ }),

/***/ "./src/gameController.js":
/*!*******************************!*\
  !*** ./src/gameController.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _computer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./computer.js */ "./src/computer.js");
/* harmony import */ var _ui_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui.js */ "./src/ui.js");
/* harmony import */ var _audio_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./audio.js */ "./src/audio.js");




let currentPlayer;
let opponent;

let realPlayer;
let computerPlayer;

const container = document.getElementById("gameboard-wrapper");

function startGame(real, computer) {
  realPlayer = real;
  computerPlayer = computer;
  currentPlayer = real;
  opponent = computer;
  _audio_js__WEBPACK_IMPORTED_MODULE_2__["default"].playMusic();
  refreshUI();
}

function playTurn(x, y) {
  if (!canAttackShip(x, y)) {
    console.log("Unable to attack ship");
    return;
  }
  const result = opponent.gameboard.receiveAttack(x, y);
  refreshUI(); // show updated hit and miss
  if (opponent.gameboard.allShipsSunk()) {
    endGame(currentPlayer);
    return;
  }
  switchTurns();
}

function canAttackShip(x, y) {
  const data = opponent.gameboard.board[y][x];
  if (data === null) {
    return true;
  }
  if (data.hit || opponent.gameboard.board[y][x] === "miss") {
    return false;
  }
  return true;
}

function switchTurns() {
  [currentPlayer, opponent] = [opponent, currentPlayer];
  if (currentPlayer === computerPlayer) {
    blockBoard();
    showThinkingMessage();
    const [x, y] = _computer_js__WEBPACK_IMPORTED_MODULE_0__["default"].chooseAttack();
    setTimeout(() => {
      playTurn(x, y);
      unblockBoard();
      hideThinkingMessage();
    }, 1000);
  }
}

function showThinkingMessage() {
  document.getElementById("message").style.display = "block";
}

function hideThinkingMessage() {
  document.getElementById("message").style.display = "none";
}

function endGame(winner) {
  if (winner.type === "real") {
    _ui_js__WEBPACK_IMPORTED_MODULE_1__["default"].renderWinner("You won!");
  } else {
    _ui_js__WEBPACK_IMPORTED_MODULE_1__["default"].renderWinner("Opponent wins.");
  }
}

function refreshUI() {
  container.innerHTML = "";
  _ui_js__WEBPACK_IMPORTED_MODULE_1__["default"].renderGameboard(realPlayer);
  _ui_js__WEBPACK_IMPORTED_MODULE_1__["default"].renderGameboard(computerPlayer);
}

function blockBoard() {
  container.style.pointerEvents = "none";
}

function unblockBoard() {
  container.style.pointerEvents = "auto";
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({ startGame, playTurn, canAttackShip });


/***/ }),

/***/ "./src/gameboard.css":
/*!***************************!*\
  !*** ./src/gameboard.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_gameboard_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./gameboard.css */ "./node_modules/css-loader/dist/cjs.js!./src/gameboard.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_gameboard_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_gameboard_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_gameboard_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_gameboard_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/gameboard.js":
/*!**************************!*\
  !*** ./src/gameboard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Gameboard: () => (/* binding */ Gameboard)
/* harmony export */ });
/* harmony import */ var _audio_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./audio.js */ "./src/audio.js");
/* harmony import */ var _ship_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ship.js */ "./src/ship.js");



class Gameboard {
  constructor(size = 10) {
    this.size = size;
    this.board = Array(size)
      .fill(null)
      .map(() => Array(size).fill(null));
    this.ships = []; // hold the player's ships
  }

  placeShip(x, y, length, direction) {
    if (direction !== "vertical" && direction !== "horizontal") {
      // throw new Error("Invalid direction");
      return false;
    }

    if (!this.#canPlaceShip(x, y, length, direction)) {
      // throw new Error("Invalid ship placement");
      return false;
    }

    const ship = new _ship_js__WEBPACK_IMPORTED_MODULE_1__.Ship(length);

    for (let i = 0; i < length; i++) {
      const row = direction === "vertical" ? y + i : y;
      const col = direction === "horizontal" ? x + i : x;

      // store the ship on the board
      this.board[row][col] = { ship, index: i, hit: false };
    }
    this.ships.push(ship);
    return true;
  }

  #canPlaceShip(x, y, length, direction) {
    for (let i = 0; i < length; i++) {
      const row = direction === "vertical" ? y + i : y;
      const col = direction === "horizontal" ? x + i : x;

      // out of bounds check, "is occupied" check
      if (
        row >= this.size ||
        col >= this.size ||
        row < 0 ||
        col < 0 ||
        this.board[row][col] !== null
      ) {
        return false;
      }
    }
    return true;
  }

  receiveAttack(x, y) {
    // board[0][1] refers to the coords (1, 0).
    // "y" is the row, "x" is column.

    const target = this.board[y][x];

    if (target && target.ship) {
      target.ship.hit();
      _audio_js__WEBPACK_IMPORTED_MODULE_0__["default"].playHit();
      target.hit = true; // update the position on the board as hit
      return "hit";
    } else {
      this.board[y][x] = "miss";
      _audio_js__WEBPACK_IMPORTED_MODULE_0__["default"].playMiss();
      return "miss";
    }
  }

  allShipsSunk() {
    const sunkStatus = this.ships.every((ship) => ship.sunk === true);
    return sunkStatus;
  }
}


/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Player: () => (/* binding */ Player)
/* harmony export */ });
/* harmony import */ var _gameboard_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard.js */ "./src/gameboard.js");


class Player {
  constructor(type) {
    if (type !== "real" && type !== "computer") {
      throw new Error("Invalid player type!");
    }
    this.type = type;
    this.gameboard = new _gameboard_js__WEBPACK_IMPORTED_MODULE_0__.Gameboard();
  }
}


/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Ship: () => (/* binding */ Ship)
/* harmony export */ });
class Ship {
    constructor(length){
        this.length = length;
        this.hits = 0;
        this.sunk = false;
    }

    hit(){
        this.hits++;
        if(this.length - this.hits === 0){
            this.sunk = true;
        }
    }

    isSunk(){
        return (this.length - this.hits) === 0 ? true : false;
    }
}

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/ui.js":
/*!*******************!*\
  !*** ./src/ui.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _computer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./computer.js */ "./src/computer.js");
/* harmony import */ var _gameController_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameController.js */ "./src/gameController.js");
/* harmony import */ var _audio_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./audio.js */ "./src/audio.js");




let selectedShip = "Carrier";
let orientation = "horizontal";
let placedShips = [];
let realPlayer, computerPlayer;

const shipLengths = {
  Carrier: 5,
  Battleship: 4,
  Cruiser: 3,
  Submarine: 3,
  Destroyer: 2,
};

const container = document.getElementById("gameboard-wrapper");

// this is the initial call that will begin the UI rendering.
const setupPlayers = (player1, player2) => {
  if (player1 && player2) {
    realPlayer = player1;
    computerPlayer = player2;
  } else {
    alert("Invalid player input!");
  }
  renderSetup(); // begin setup for the player
  _computer_js__WEBPACK_IMPORTED_MODULE_0__["default"].setupBoard(computerPlayer); // allow the computer to randomly set their ships on the board
};

const renderSetup = () => {
  const gameboardContainer = document.createElement("div");
  gameboardContainer.classList.add("gameboard-container");

  const setupHeader = document.createElement("h2");
  setupHeader.innerText = "Place Your Ships";
  gameboardContainer.appendChild(setupHeader);

  const gameboard = document.createElement("div");
  gameboard.className = "gameboard";

  const size = realPlayer.gameboard.size;

  // render the board and add event listeners to the cells
  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      const cell = document.createElement("div");
      cell.classList.add("cell");

      cell.dataset.x = x;
      cell.dataset.y = y;

      // highlight the cell a high-contrast color to show the preview of the
      // ship to be placed.
      cell.addEventListener("mouseenter", () => {
        highlightShip(x, y, orientation, shipLengths[selectedShip], "preview");
      });
      cell.addEventListener("mouseleave", () => {
        clearPreview();
      });

      // place the ship
      cell.addEventListener("click", () => {
        const length = shipLengths[selectedShip];
        const success = realPlayer.gameboard.placeShip(
          x,
          y,
          length,
          orientation
        );
        if (success) {
          placedShips.push(selectedShip);
          _audio_js__WEBPACK_IMPORTED_MODULE_2__["default"].playPlacingShip();
          highlightShip(
            x,
            y,
            orientation,
            shipLengths[selectedShip],
            "preview-placed"
          );
          if (placedShips.length === Object.keys(shipLengths).length) {
            // begin the game
            _gameController_js__WEBPACK_IMPORTED_MODULE_1__["default"].startGame(realPlayer, computerPlayer);
            renderMessage();
          } else {
            updateShipSelect(); // move to next ship
          }
        } else {
          alert("Invalid placement. Try again.");
        }
      });

      gameboard.appendChild(cell);
    }
  }

  gameboardContainer.appendChild(gameboard);

  // ship selection UI
  const controlPanel = document.createElement("div");
  controlPanel.classList.add("setup-controls");

  // drop down to select which ship to place
  const select = document.createElement("select");
  select.id = "ship-select";
  for (let ship in shipLengths) {
    if (!placedShips.includes(ship)) {
      const option = document.createElement("option");
      option.value = ship;
      option.textContent = `${ship} (${shipLengths[ship]})`;
      select.appendChild(option);
    }
  }
  select.value = selectedShip; // default value for the drop down
  select.addEventListener("change", (e) => {
    selectedShip = e.target.value;
  });

  // button for rotating ships before placement
  const rotateBtn = document.createElement("button");
  rotateBtn.textContent = `Rotate (${orientation})`;
  rotateBtn.addEventListener("click", () => {
    orientation = orientation === "horizontal" ? "vertical" : "horizontal";
    rotateBtn.textContent = `Rotate (${orientation})`;
  });

  controlPanel.appendChild(select);
  controlPanel.appendChild(rotateBtn);
  gameboardContainer.appendChild(controlPanel);

  container.innerHTML = "";
  container.appendChild(gameboardContainer);
};

const renderGameboard = (player) => {
  const gameboardContainer = document.createElement("div");
  gameboardContainer.classList.add("gameboard-container");

  const playerName = document.createElement("h2");
  playerName.classList.add("player-name");
  playerName.innerText = player.type === "real" ? "You" : "Computer";
  gameboardContainer.appendChild(playerName);

  const gameboard = document.createElement("div");
  gameboard.className = "gameboard";

  const size = player.gameboard.size;

  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      const cell = document.createElement("div");
      cell.classList.add("cell");

      addCellStyles(x, y, player, cell);

      // only attack the opponent and not the player
      if (player.type === "computer") {
        cell.addEventListener("click", () => {
          _gameController_js__WEBPACK_IMPORTED_MODULE_1__["default"].playTurn(x, y);
        });
      }

      cell.dataset.x = x;
      cell.dataset.y = y;
      gameboard.appendChild(cell);
    }
  }

  gameboardContainer.appendChild(gameboard);
  container.appendChild(gameboardContainer);
};

function addCellStyles(x, y, player, cell) {
  const data = player.gameboard.board[y][x];
  if (data?.ship) {
    if (player.type === "real") {
      cell.classList.add("ship");
    }

    if (data.hit) {
      cell.classList.add("hit");
    }
  } else if (player.gameboard.board[y][x] === "miss") {
    cell.classList.add("miss");
  }
}

function highlightShip(x, y, orientation, length, style) {
  for (let i = 0; i < length; i++) {
    const row = orientation === "vertical" ? y + i : y;
    const col = orientation === "horizontal" ? x + i : x;
    const cell = document.querySelector(`[data-x='${col}'][data-y='${row}']`);
    if (cell) {
      cell.classList.add(`${style}`);
    }
  }
}

function clearPreview() {
  document
    .querySelectorAll(".cell.preview")
    .forEach((cell) => cell.classList.remove("preview"));
}

function updateShipSelect() {
  const unplaced = Object.keys(shipLengths).filter(
    (ship) => !placedShips.includes(ship)
  );
  if (unplaced.length > 0) {
    selectedShip = unplaced[0]; // choose the next unplaced ship
  }
  document.getElementById("ship-select").value = selectedShip;
}

function renderMessage() {
  const message = document.createElement("div");
  message.id = "message";
  message.textContent = "Opponent thinking...";
  message.style.display = "none";
  message.classList.add("message");
  document.body.appendChild(message);
}

const renderWinner = (winningText) => {
  const winningMessage = document.createElement("div");
  winningMessage.id = "winning-message";
  winningMessage.textContent = `${winningText}`;

  const okButton = document.createElement("button");
  okButton.textContent = "OK";
  okButton.id = "ok-button";
  winningMessage.appendChild(okButton);
  document.body.appendChild(winningMessage);

  okButton.addEventListener("click", () => {
    window.location.reload(); // refresh the page to start a new game
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({ setupPlayers, renderGameboard, renderWinner });


/***/ }),

/***/ "data:image/svg+xml;utf8,<svg fill=%27white%27 height=%2724%27 viewBox=%270 0 24 24%27 width=%2724%27 xmlns=%27http://www.w3.org/2000/svg%27><path d=%27M7 10l5 5 5-5z%27/></svg>":
/*!****************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml;utf8,<svg fill=%27white%27 height=%2724%27 viewBox=%270 0 24 24%27 width=%2724%27 xmlns=%27http://www.w3.org/2000/svg%27><path d=%27M7 10l5 5 5-5z%27/></svg> ***!
  \****************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml;utf8,<svg fill=%27white%27 height=%2724%27 viewBox=%270 0 24 24%27 width=%2724%27 xmlns=%27http://www.w3.org/2000/svg%27><path d=%27M7 10l5 5 5-5z%27/></svg>";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var _gameboard_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameboard.css */ "./src/gameboard.css");
/* harmony import */ var _player_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./player.js */ "./src/player.js");
/* harmony import */ var _ui_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ui.js */ "./src/ui.js");






const player1 = new _player_js__WEBPACK_IMPORTED_MODULE_2__.Player("real");
const player2 = new _player_js__WEBPACK_IMPORTED_MODULE_2__.Player("computer");

window.addEventListener("DOMContentLoaded", () => {
  _ui_js__WEBPACK_IMPORTED_MODULE_3__["default"].setupPlayers(player1, player2);
});

})();

/******/ })()
;
//# sourceMappingURL=main.js.map