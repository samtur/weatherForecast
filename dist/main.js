/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
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



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! fonts/Inter-Thin.ttf */ "./src/fonts/Inter-Thin.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! fonts/Inter-ExtraLight.ttf */ "./src/fonts/Inter-ExtraLight.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! fonts/Inter-Light.ttf */ "./src/fonts/Inter-Light.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
}

.hidden {
    display: none;
}

:root {
    --bgColor: #d2d6d9;
    --fontColor: #2b2e33;

}

ul {
    list-style: none;
}

@font-face {
    font-family: "InterThin";
    src: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) format("truetype");
    font-weight: 100;
}

@font-face {
    font-family: "InterExtraLight";
    src: url(${___CSS_LOADER_URL_REPLACEMENT_1___}) format("truetype");
    font-weight: 200;
}

@font-face {
    font-family: "InterLight";
    src: url(${___CSS_LOADER_URL_REPLACEMENT_2___}) format("truetype");
    font-weight: 300;
}

body {
    font-family: "InterLight";
    background-color: var(--bgColor);
    color: var(--fontColor);
    display: grid;
    grid-template-rows: 20% 40% 40%;
    grid-template-columns: 1fr 1fr;
    height: 100vh;
    width: 100vw;
}

html {
    box-sizing: border-box;
}

*,
*:before,
*:after {
    box-sizing: inherit;
}

/* Location */
.location {
    font-family: "InterLight";
    display: flex;
    flex-direction: row;
    font-size: 3rem;
    grid-row: 1/2;
    grid-column: 1/3;

}

.searchLocation {
    font-family: "InterExtraLight";
    margin-left: auto;
    display: flex;
    align-items: center;
    padding: 0;
}

#locationInput {
    font-family: "InterExtraLight";
    padding: 0.1rem 0.2rem;
    margin: none;
    box-shadow: none;
    border-radius: none;
    outline: inherit;
    width: 25rem;
    border-right: none;
    border: 1px var(--fontColor) solid;
    border-right: none;
    background-color: var(--bgColor);
    font-size: 1.5rem;
}

.submitLocation {
    padding: 0.1rem 0.2rem;
    font: inherit;
    color: inherit;
    cursor: pointer;
    font-size: 1.5rem;
    border: 1px var(--fontColor) solid;
    background-color: var(--bgColor);
}

.iconCondition {
    display: flex;
}

/* Condition */
.dateTime {
    font-family: "InterExtraLight";
    width: fit-content;
    font-size: 1.5rem;

}

.conditionPlace {
    font-family: "InterExtraLight";
    width: fit-content;
    height: fit-content;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 2rem;
    justify-content: center;
    grid-row: 2/3;
    grid-column: 1/2;
}

.conditionContainer {
    display: flex;
    flex-direction: column;
}

.btnTemp {
    font-family: "InterExtraLight";
    color: inherit;
    cursor: pointer;
    font-size: 1rem;
    border: 1px var(--fontColor) solid;
    background-color: var(--bgColor);
    padding: 0.1rem 0.2rem;
    /* margin-top: 1rem; */
}

#weatherIcon {
    height: 8rem;
    width: 8rem;
    align-self: center;

}

/* Daily */
.daily {
    width: 50vw;
    height: 200px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 50px 200px;
    gap: 1.5rem;
    grid-row: 3/4;
    grid-column: 1/3;
}


.daily>div {
    font-family: "InterExtraLight";
    grid-template-rows: 2/3;
    display: flex;
    flex-direction: column;
}

#dailyHeader {
    grid-column: 1/4;
    grid-row: 1/2;
    font-size: 2rem;
}

.dailyDate {
    font-size: 1.5rem;
}

.dailyCondition {
    font-size: 1.5rem;
}

/* Further Details */
.furtherDetails {
    border: 1px solid black;
    display: grid;
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAiFI,SAAS;IACT,UAAU;IACV,SAAS;IACT,eAAe;IACf,aAAa;IACb,wBAAwB;AAC5B;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,kBAAkB;IAClB,oBAAoB;;AAExB;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,wBAAwB;IACxB,+DAAmD;IACnD,gBAAgB;AACpB;;AAEA;IACI,8BAA8B;IAC9B,+DAAyD;IACzD,gBAAgB;AACpB;;AAEA;IACI,yBAAyB;IACzB,+DAAoD;IACpD,gBAAgB;AACpB;;AAEA;IACI,yBAAyB;IACzB,gCAAgC;IAChC,uBAAuB;IACvB,aAAa;IACb,+BAA+B;IAC/B,8BAA8B;IAC9B,aAAa;IACb,YAAY;AAChB;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;;;IAGI,mBAAmB;AACvB;;AAEA,aAAa;AACb;IACI,yBAAyB;IACzB,aAAa;IACb,mBAAmB;IACnB,eAAe;IACf,aAAa;IACb,gBAAgB;;AAEpB;;AAEA;IACI,8BAA8B;IAC9B,iBAAiB;IACjB,aAAa;IACb,mBAAmB;IACnB,UAAU;AACd;;AAEA;IACI,8BAA8B;IAC9B,sBAAsB;IACtB,YAAY;IACZ,gBAAgB;IAChB,mBAAmB;IACnB,gBAAgB;IAChB,YAAY;IACZ,kBAAkB;IAClB,kCAAkC;IAClC,kBAAkB;IAClB,gCAAgC;IAChC,iBAAiB;AACrB;;AAEA;IACI,sBAAsB;IACtB,aAAa;IACb,cAAc;IACd,eAAe;IACf,iBAAiB;IACjB,kCAAkC;IAClC,gCAAgC;AACpC;;AAEA;IACI,aAAa;AACjB;;AAEA,cAAc;AACd;IACI,8BAA8B;IAC9B,kBAAkB;IAClB,iBAAiB;;AAErB;;AAEA;IACI,8BAA8B;IAC9B,kBAAkB;IAClB,mBAAmB;IACnB,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,eAAe;IACf,uBAAuB;IACvB,aAAa;IACb,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,8BAA8B;IAC9B,cAAc;IACd,eAAe;IACf,eAAe;IACf,kCAAkC;IAClC,gCAAgC;IAChC,sBAAsB;IACtB,sBAAsB;AAC1B;;AAEA;IACI,YAAY;IACZ,WAAW;IACX,kBAAkB;;AAEtB;;AAEA,UAAU;AACV;IACI,WAAW;IACX,aAAa;IACb,aAAa;IACb,kCAAkC;IAClC,8BAA8B;IAC9B,WAAW;IACX,aAAa;IACb,gBAAgB;AACpB;;;AAGA;IACI,8BAA8B;IAC9B,uBAAuB;IACvB,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,gBAAgB;IAChB,aAAa;IACb,eAAe;AACnB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,iBAAiB;AACrB;;AAEA,oBAAoB;AACpB;IACI,uBAAuB;IACvB,aAAa;AACjB","sourcesContent":["html,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n    margin: 0;\n    padding: 0;\n    border: 0;\n    font-size: 100%;\n    font: inherit;\n    vertical-align: baseline;\n}\n\n.hidden {\n    display: none;\n}\n\n:root {\n    --bgColor: #d2d6d9;\n    --fontColor: #2b2e33;\n\n}\n\nul {\n    list-style: none;\n}\n\n@font-face {\n    font-family: \"InterThin\";\n    src: url(\"fonts/Inter-Thin.ttf\") format(\"truetype\");\n    font-weight: 100;\n}\n\n@font-face {\n    font-family: \"InterExtraLight\";\n    src: url(\"fonts/Inter-ExtraLight.ttf\") format(\"truetype\");\n    font-weight: 200;\n}\n\n@font-face {\n    font-family: \"InterLight\";\n    src: url(\"fonts/Inter-Light.ttf\") format(\"truetype\");\n    font-weight: 300;\n}\n\nbody {\n    font-family: \"InterLight\";\n    background-color: var(--bgColor);\n    color: var(--fontColor);\n    display: grid;\n    grid-template-rows: 20% 40% 40%;\n    grid-template-columns: 1fr 1fr;\n    height: 100vh;\n    width: 100vw;\n}\n\nhtml {\n    box-sizing: border-box;\n}\n\n*,\n*:before,\n*:after {\n    box-sizing: inherit;\n}\n\n/* Location */\n.location {\n    font-family: \"InterLight\";\n    display: flex;\n    flex-direction: row;\n    font-size: 3rem;\n    grid-row: 1/2;\n    grid-column: 1/3;\n\n}\n\n.searchLocation {\n    font-family: \"InterExtraLight\";\n    margin-left: auto;\n    display: flex;\n    align-items: center;\n    padding: 0;\n}\n\n#locationInput {\n    font-family: \"InterExtraLight\";\n    padding: 0.1rem 0.2rem;\n    margin: none;\n    box-shadow: none;\n    border-radius: none;\n    outline: inherit;\n    width: 25rem;\n    border-right: none;\n    border: 1px var(--fontColor) solid;\n    border-right: none;\n    background-color: var(--bgColor);\n    font-size: 1.5rem;\n}\n\n.submitLocation {\n    padding: 0.1rem 0.2rem;\n    font: inherit;\n    color: inherit;\n    cursor: pointer;\n    font-size: 1.5rem;\n    border: 1px var(--fontColor) solid;\n    background-color: var(--bgColor);\n}\n\n.iconCondition {\n    display: flex;\n}\n\n/* Condition */\n.dateTime {\n    font-family: \"InterExtraLight\";\n    width: fit-content;\n    font-size: 1.5rem;\n\n}\n\n.conditionPlace {\n    font-family: \"InterExtraLight\";\n    width: fit-content;\n    height: fit-content;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    font-size: 2rem;\n    justify-content: center;\n    grid-row: 2/3;\n    grid-column: 1/2;\n}\n\n.conditionContainer {\n    display: flex;\n    flex-direction: column;\n}\n\n.btnTemp {\n    font-family: \"InterExtraLight\";\n    color: inherit;\n    cursor: pointer;\n    font-size: 1rem;\n    border: 1px var(--fontColor) solid;\n    background-color: var(--bgColor);\n    padding: 0.1rem 0.2rem;\n    /* margin-top: 1rem; */\n}\n\n#weatherIcon {\n    height: 8rem;\n    width: 8rem;\n    align-self: center;\n\n}\n\n/* Daily */\n.daily {\n    width: 50vw;\n    height: 200px;\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr;\n    grid-template-rows: 50px 200px;\n    gap: 1.5rem;\n    grid-row: 3/4;\n    grid-column: 1/3;\n}\n\n\n.daily>div {\n    font-family: \"InterExtraLight\";\n    grid-template-rows: 2/3;\n    display: flex;\n    flex-direction: column;\n}\n\n#dailyHeader {\n    grid-column: 1/4;\n    grid-row: 1/2;\n    font-size: 2rem;\n}\n\n.dailyDate {\n    font-size: 1.5rem;\n}\n\n.dailyCondition {\n    font-size: 1.5rem;\n}\n\n/* Further Details */\n.furtherDetails {\n    border: 1px solid black;\n    display: grid;\n}"],"sourceRoot":""}]);
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

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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

/***/ "./src/fetch.js":
/*!**********************!*\
  !*** ./src/fetch.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fetchWeather: () => (/* binding */ fetchWeather)
/* harmony export */ });
/* harmony import */ var _functionality__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functionality */ "./src/functionality.js");


const fetchWeather = async function getWeatherData(
  locationTxt,
  populate,
  daysArr,
  dateTxt,
  time,
  dayWeek,
  temp_c,
  temp_f
) {
  if (locationTxt === "") {
    let current = "";
    let forecast = "";
    let location = "";
    const response = await fetch(
      "http://api.weatherapi.com/v1/forecast.json?key=4da403286dd64dcfb0c200014233008&q=London&days=7&aqi=yes&alerts=no",
      { mode: "cors" }
    );
    const weatherData = await response.json();
    populate(
      weatherData,
      current,
      forecast,
      location,
      _functionality__WEBPACK_IMPORTED_MODULE_0__.selectIcon,
      _functionality__WEBPACK_IMPORTED_MODULE_0__.upperConditionTxt,
      daysArr,
      dateTxt,
      time,
      dayWeek,
      temp_c,
      temp_f
    );
    console.log(weatherData);
    // Copy below when finished
  } else {
    let current = "";
    let forecast = "";
    let location = "";
    const response = await fetch(
      `http://api.weatherapi.com/v1/forecast.json?key=4da403286dd64dcfb0c200014233008&q=${locationTxt}&days=7&aqi=yes&alerts=no`,
      { mode: "cors" }
    );
    const weatherData = await response.json();
    populate(
      weatherData,
      current,
      forecast,
      location,
      _functionality__WEBPACK_IMPORTED_MODULE_0__.selectIcon,
      _functionality__WEBPACK_IMPORTED_MODULE_0__.upperConditionTxt,
      daysArr,
      dateTxt,
      time,
      dayWeek,
      temp_c,
      temp_f
    );
    console.log(weatherData);
  }
};




/***/ }),

/***/ "./src/functionality.js":
/*!******************************!*\
  !*** ./src/functionality.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   selectIcon: () => (/* binding */ selectIcon),
/* harmony export */   upperConditionTxt: () => (/* binding */ upperConditionTxt)
/* harmony export */ });
const selectIcon = function (current, weatherIcon, daily) {
  if (daily) {
    if (current.condition.code === 1000) {
      weatherIcon.src = "weatherIcons/sunny.svg";
    } else if (current.condition.code === 1003) {
      weatherIcon.src = "weatherIcons/partlyCloudyDay.svg";
    } else if (
      current.condition.code === 1006 ||
      current.condition.code === 1009
    ) {
      weatherIcon.src = "weatherIcons/cloudy.svg";
    } else if (current.condition.code === 1030) {
      weatherIcon.src = "weatherIcons/mist.svg";
    } else if (
      current.condition.code === 1063 ||
      current.condition.code === 1150
    ) {
      weatherIcon.src = "weatherIcons/patchyRainDay.svg";
    } else if (
      current.condition.code === 1066 ||
      current.condition.code === 1210
    ) {
      weatherIcon.src = "weatherIcons/patchySnowDay.svg";
    } else if (current.condition.code === 1069) {
      weatherIcon.src = "weatherIcons/patchySleetDay.svg";
    } else if (
      current.condition.code === 1072 ||
      current.condition.code === 1168 ||
      current.condition.code === 1198 ||
      current.condition.code === 1204 ||
      current.condition.code === 1249
    ) {
      weatherIcon.src = "weatherIcons/feezingDrizzle.svg";
    } else if (current.condition.code === 1087) {
      weatherIcon.src = "weatherIcons/thunderyOutbreaks.svg";
    } else if (current.condition.code === 1114) {
      weatherIcon.src = "weatherIcons/blowingSnow.svg";
    } else if (current.condition.code === 1117) {
      weatherIcon.src = "weatherIcons/blizzard.svg";
    } else if (current.condition.code === 1135) {
      weatherIcon.src = "weatherIcons/fog.svg";
    } else if (current.condition.code === 1147) {
      weatherIcon.src = "weatherIcons/freezingFog.svg";
    } else if (current.condition.code === 1153) {
      weatherIcon.src = "weatherIcons/lightRain.svg";
    } else if (
      current.condition.code === 1171 ||
      current.condition.code === 1201 ||
      current.condition.code === 1207 ||
      current.condition.code === 1252
    ) {
      weatherIcon.src = "weatherIcons/heavyFreezingDrizzle.svg";
    } else if (
      current.condition.code === 1180 ||
      current.condition.code === 1183
    ) {
      weatherIcon.src = "weatherIcons/lightRain.svg";
    } else if (
      current.condition.code === 1186 ||
      current.condition.code === 1189
    ) {
      weatherIcon.src = "weatherIcons/moderateRain.svg";
    } else if (
      current.condition.code === 1192 ||
      current.condition.code === 1195
    ) {
      weatherIcon.src = "weatherIcons/heavyRain.svg";
    } else if (
      current.condition.code === 1213 ||
      current.condition.code === 1255
    ) {
      weatherIcon.src = "weatherIcons/lightSnow.svg";
    } else if (
      current.condition.code === 1216 ||
      current.condition.code === 1219 ||
      current.condition.code === 1258
    ) {
      weatherIcon.src = "weatherIcons/moderateSnow.svg";
    } else if (
      current.condition.code === 1222 ||
      current.condition.code === 1225
    ) {
      weatherIcon.src = "weatherIcons/heavySnow.svg";
    } else if (
      current.condition.code === 1237 ||
      current.condition.code === 1261 ||
      current.condition.code === 1264
    ) {
      weatherIcon.src = "weatherIcons/icePellets.svg";
    } else if (current.condition.code === 1240) {
      weatherIcon.src = "weatherIcons/lightRainShower.svg";
    } else if (current.condition.code === 1243) {
      weatherIcon.src = "weatherIcons/moderateRainShower.svg";
    } else if (current.condition.code === 1246) {
      weatherIcon.src = "weatherIcons/torrentialRainShower.svg";
    } else if (current.condition.code === 1273) {
      weatherIcon.src = "weatherIcons/patchyLightRainThunder.svg";
    } else if (current.condition.code === 1276) {
      weatherIcon.src = "weatherIcons/patchyHeavyRainThunder.svg";
    } else if (
      current.condition.code === 1279 ||
      current.condition.code === 1282
    ) {
      weatherIcon.src = "weatherIcons/patchySnowThunder.svg";
    } else {
      weatherIcon.src = current.condition.icon;
    }
  } else {
    if (current.condition.code === 1000 && current.is_day) {
      weatherIcon.src = "weatherIcons/sunny.svg";
    } else if (current.condition.code === 1000 && !current.is_day) {
      weatherIcon.src = "weatherIcons/clear.svg";
    } else if (current.condition.code === 1003 && current.is_day) {
      weatherIcon.src = "weatherIcons/partlyCloudyDay.svg";
    } else if (current.condition.code === 1003 && !current.is_day) {
      weatherIcon.src = "weatherIcons/partlyCloudyNight.svg";
    } else if (
      current.condition.code === 1006 ||
      current.condition.code === 1009
    ) {
      weatherIcon.src = "weatherIcons/cloudy.svg";
    } else if (current.condition.code === 1030) {
      weatherIcon.src = "weatherIcons/mist.svg";
    } else if (
      (current.condition.code === 1063 || current.condition.code === 1150) &&
      current.is_day
    ) {
      weatherIcon.src = "weatherIcons/patchyRainDay.svg";
    } else if (
      (current.condition.code === 1063 || current.condition.code === 1150) &&
      !current.is_day
    ) {
      weatherIcon.src = "weatherIcons/patchyRainNight.svg";
    } else if (
      (current.condition.code === 1066 || current.condition.code === 1210) &&
      current.is_day
    ) {
      weatherIcon.src = "weatherIcons/patchySnowDay.svg";
    } else if (
      (current.condition.code === 1066 || current.condition.code === 1210) &&
      !current.is_day
    ) {
      weatherIcon.src = "weatherIcons/patchySnowNight.svg";
    } else if (current.condition.code === 1069 && current.is_day) {
      weatherIcon.src = "weatherIcons/patchySleetDay.svg";
    } else if (current.condition.code === 1069 && !current.is_day) {
      weatherIcon.src = "weatherIcons/patchySleetNight.svg";
    } else if (
      current.condition.code === 1072 ||
      current.condition.code === 1168 ||
      current.condition.code === 1198 ||
      current.condition.code === 1204 ||
      current.condition.code === 1249
    ) {
      weatherIcon.src = "weatherIcons/feezingDrizzle.svg";
    } else if (current.condition.code === 1087) {
      weatherIcon.src = "weatherIcons/thunderyOutbreaks.svg";
    } else if (current.condition.code === 1114) {
      weatherIcon.src = "weatherIcons/blowingSnow.svg";
    } else if (current.condition.code === 1117) {
      weatherIcon.src = "weatherIcons/blizzard.svg";
    } else if (current.condition.code === 1135) {
      weatherIcon.src = "weatherIcons/fog.svg";
    } else if (current.condition.code === 1147) {
      weatherIcon.src = "weatherIcons/freezingFog.svg";
    } else if (current.condition.code === 1153) {
      weatherIcon.src = "weatherIcons/lightRain.svg";
    } else if (
      current.condition.code === 1171 ||
      current.condition.code === 1201 ||
      current.condition.code === 1207 ||
      current.condition.code === 1252
    ) {
      weatherIcon.src = "weatherIcons/heavyFreezingDrizzle.svg";
    } else if (
      current.condition.code === 1180 ||
      current.condition.code === 1183
    ) {
      weatherIcon.src = "weatherIcons/lightRain.svg";
    } else if (
      current.condition.code === 1186 ||
      current.condition.code === 1189
    ) {
      weatherIcon.src = "weatherIcons/moderateRain.svg";
    } else if (
      current.condition.code === 1192 ||
      current.condition.code === 1195
    ) {
      weatherIcon.src = "weatherIcons/heavyRain.svg";
    } else if (
      current.condition.code === 1213 ||
      current.condition.code === 1255
    ) {
      weatherIcon.src = "weatherIcons/lightSnow.svg";
    } else if (
      current.condition.code === 1216 ||
      current.condition.code === 1219 ||
      current.condition.code === 1258
    ) {
      weatherIcon.src = "weatherIcons/moderateSnow.svg";
    } else if (
      current.condition.code === 1222 ||
      current.condition.code === 1225
    ) {
      weatherIcon.src = "weatherIcons/heavySnow.svg";
    } else if (
      current.condition.code === 1237 ||
      current.condition.code === 1261 ||
      current.condition.code === 1264
    ) {
      weatherIcon.src = "weatherIcons/icePellets.svg";
    } else if (current.condition.code === 1240) {
      weatherIcon.src = "weatherIcons/lightRainShower.svg";
    } else if (current.condition.code === 1243) {
      weatherIcon.src = "weatherIcons/moderateRainShower.svg";
    } else if (current.condition.code === 1246) {
      weatherIcon.src = "weatherIcons/torrentialRainShower.svg";
    } else if (current.condition.code === 1273) {
      weatherIcon.src = "weatherIcons/patchyLightRainThunder.svg";
    } else if (current.condition.code === 1276) {
      weatherIcon.src = "weatherIcons/patchyHeavyRainThunder.svg";
    } else if (
      current.condition.code === 1279 ||
      current.condition.code === 1282
    ) {
      weatherIcon.src = "weatherIcons/patchySnowThunder.svg";
    } else {
      weatherIcon.src = current.condition.icon;
    }
  }
};

const upperConditionTxt = function (current) {
  let conditionStr = current.condition.text;
  let arr = conditionStr.split(" ");
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i][0].toUpperCase() + arr[i].substr(1);
  }
  conditionStr = arr.join(" ");
  return conditionStr;
};




/***/ }),

/***/ "./src/populate.js":
/*!*************************!*\
  !*** ./src/populate.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   populate: () => (/* binding */ populate)
/* harmony export */ });
const populate = async function (
  weatherData,
  current,
  forecast,
  location,
  selectIcon,
  upperConditionTxt,
  daysArr,
  dateTxt,
  time,
  dayWeek,
  temp_c,
  temp_f
) {
  current = await weatherData.current;
  forecast = await weatherData.forecast;
  location = await weatherData.location;
  const locale = "en-GB";

  let forecastArr = forecast.forecastday;
  for (let i = 0; i < forecastArr.length; i++) {
    let forecast = forecastArr[i].day;
    let dateDaily = document.querySelector(`#date${i}`);
    let dayWeek = document.querySelector(`#dayWeek${i}`);
    let conditionDaily = document.querySelector(`#condition${i}`);
    let weatherIconDaily = document.querySelector(`#weatherIcon${i}`);
    let temp_cDaily = document.querySelector(`#temp_c${i}`);
    let temp_fDaily = document.querySelector(`#temp_f${i}`);

    // Date to UK format
    let timestamp = forecastArr[i].date;
    let date = new Date(timestamp);
    let day = date.getDay() - 1;
    let condition = forecastArr[i].day;
    console.log(condition);
    i === 0
      ? (dayWeek.innerHTML = "Today")
      : (dayWeek.innerHTML = daysArr[day]);
    date = date
      .toLocaleString(locale, { timeZone: "Europe/London" })
      .split(",");
    dateDaily.innerHTML = date[0];
    let conditiontxt = await upperConditionTxt(condition);
    conditionDaily.innerHTML = conditiontxt;
    temp_cDaily.innerHTML = `${forecastArr[i].day.avgtemp_c} &#8451`;
    temp_fDaily.innerHTML = `${forecastArr[i].day.avgtemp_f} &#8457`;
    let daily = true;
    selectIcon(forecast, weatherIconDaily, daily);
  }
  // Update Condition
  let conditiontxt = await upperConditionTxt(current);
  condition.innerHTML = conditiontxt;
  city.innerHTML = `${location.name}, `;
  country.innerHTML = location.country;
  let timestamp = location.localtime;
  let date = new Date(timestamp);
  date = date.toLocaleString(locale, { timeZone: "Europe/London" }).split(",");
  dateTxt.innerHTML = date[0];
  time.innerHTML = date[1];
  dayWeek.innerHTML = "Currently";
  temp_c.innerHTML = `${current.temp_c} &#8451`;
  temp_f.innerHTML = `${current.temp_f} &#8457`;
  // Icon Code
  let weatherIcon = document.querySelector("#weatherIcon");
  let daily = false;
  selectIcon(current, weatherIcon);
};




/***/ }),

/***/ "./src/fonts/Inter-ExtraLight.ttf":
/*!****************************************!*\
  !*** ./src/fonts/Inter-ExtraLight.ttf ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1815b9a8a67debdb3966.ttf";

/***/ }),

/***/ "./src/fonts/Inter-Light.ttf":
/*!***********************************!*\
  !*** ./src/fonts/Inter-Light.ttf ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "eec8664621fec98efb37.ttf";

/***/ }),

/***/ "./src/fonts/Inter-Thin.ttf":
/*!**********************************!*\
  !*** ./src/fonts/Inter-Thin.ttf ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f341ca512063c66296d1.ttf";

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
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
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
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _fetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fetch */ "./src/fetch.js");
/* harmony import */ var _populate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./populate */ "./src/populate.js");




const locationInput = document.querySelector("#locationInput");
const searchBtn = document.querySelector(".submitLocation");
let locationTxt = "";
const condition = document.querySelector("#condition");
const city = document.querySelector("#city");
const country = document.querySelector("#country");
const dateTxt = document.querySelector("#date");
const time = document.querySelector("#time");
const daysArr = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];
const dayWeek = document.querySelector("#dayWeek");
const temp_c = document.querySelector("#temp_c");
const temp_f = document.querySelector("#temp_f");
const btnTemp = document.querySelector(".btnTemp");

// Fetching Data

(0,_fetch__WEBPACK_IMPORTED_MODULE_1__.fetchWeather)(
  locationTxt,
  _populate__WEBPACK_IMPORTED_MODULE_2__.populate,
  daysArr,
  dateTxt,
  time,
  dayWeek,
  temp_c,
  temp_f
);

// Functions

// Event Listeners

locationInput.addEventListener("input", () => {
  locationTxt = locationInput.value;
});

searchBtn.addEventListener("click", async function () {
  await (0,_fetch__WEBPACK_IMPORTED_MODULE_1__.fetchWeather)(
    locationTxt,
    _populate__WEBPACK_IMPORTED_MODULE_2__.populate,
    daysArr,
    dateTxt,
    time,
    dayWeek,
    temp_c,
    temp_f
  );
  locationTxt = "";
  locationInput.value = "";
});

btnTemp.addEventListener("click", (forecastSwitch) => {
  let temp_c0 = document.querySelector("#temp_c0");
  let temp_c1 = document.querySelector("#temp_c1");
  let temp_c2 = document.querySelector("#temp_c2");
  let temp_f0 = document.querySelector("#temp_f0");
  let temp_f1 = document.querySelector("#temp_f1");
  let temp_f2 = document.querySelector("#temp_f2");
  if (btnTemp.id === "switchF") {
    btnTemp.innerHTML = "Switch &#8451";
    btnTemp.id = "switchC";
    temp_c.classList = "hidden";
    temp_f.classList = "";
    temp_c0.classList = "hidden";
    temp_c1.classList = "hidden";
    temp_c2.classList = "hidden";
    temp_f0.classList = "";
    temp_f1.classList = "";
    temp_f2.classList = "";
  } else {
    btnTemp.innerHTML = "Switch &#8457";
    btnTemp.id = "switchF";
    temp_c.classList = "";
    temp_f.classList = "hidden";
    temp_c0.classList = "";
    temp_c1.classList = "";
    temp_c2.classList = "";
    temp_f0.classList = "hidden";
    temp_f1.classList = "hidden";
    temp_f2.classList = "hidden";
  }
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLHVIQUF1QztBQUNuRiw0Q0FBNEMsbUlBQTZDO0FBQ3pGLDRDQUE0Qyx5SEFBd0M7QUFDcEYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRix5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLG1DQUFtQztBQUNsRDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLG1DQUFtQztBQUNsRDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLG1DQUFtQztBQUNsRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTyxnS0FBZ0ssV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksY0FBYyxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sT0FBTyxZQUFZLE9BQU8sVUFBVSxLQUFL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QUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsb0RBQVk7QUFDWjtBQUNBLEVBQUUsK0NBQVE7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBLFFBQVEsb0RBQVk7QUFDcEI7QUFDQSxJQUFJLCtDQUFRO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyZm9yZWNhc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3dlYXRoZXJmb3JlY2FzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmZvcmVjYXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyZm9yZWNhc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyZm9yZWNhc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmZvcmVjYXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3dlYXRoZXJmb3JlY2FzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmZvcmVjYXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3dlYXRoZXJmb3JlY2FzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyZm9yZWNhc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyZm9yZWNhc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyZm9yZWNhc3QvLi9zcmMvZmV0Y2guanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmZvcmVjYXN0Ly4vc3JjL2Z1bmN0aW9uYWxpdHkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmZvcmVjYXN0Ly4vc3JjL3BvcHVsYXRlLmpzIiwid2VicGFjazovL3dlYXRoZXJmb3JlY2FzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWF0aGVyZm9yZWNhc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vd2VhdGhlcmZvcmVjYXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWF0aGVyZm9yZWNhc3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly93ZWF0aGVyZm9yZWNhc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWF0aGVyZm9yZWNhc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWF0aGVyZm9yZWNhc3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vd2VhdGhlcmZvcmVjYXN0L3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3dlYXRoZXJmb3JlY2FzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vd2VhdGhlcmZvcmVjYXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCJmb250cy9JbnRlci1UaGluLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcImZvbnRzL0ludGVyLUV4dHJhTGlnaHQudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiZm9udHMvSW50ZXItTGlnaHQudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYGh0bWwsXG5ib2R5LFxuZGl2LFxuc3BhbixcbmFwcGxldCxcbm9iamVjdCxcbmlmcmFtZSxcbmgxLFxuaDIsXG5oMyxcbmg0LFxuaDUsXG5oNixcbnAsXG5ibG9ja3F1b3RlLFxucHJlLFxuYSxcbmFiYnIsXG5hY3JvbnltLFxuYWRkcmVzcyxcbmJpZyxcbmNpdGUsXG5jb2RlLFxuZGVsLFxuZGZuLFxuZW0sXG5pbWcsXG5pbnMsXG5rYmQsXG5xLFxucyxcbnNhbXAsXG5zbWFsbCxcbnN0cmlrZSxcbnN0cm9uZyxcbnN1YixcbnN1cCxcbnR0LFxudmFyLFxuYixcbnUsXG5pLFxuY2VudGVyLFxuZGwsXG5kdCxcbmRkLFxub2wsXG51bCxcbmxpLFxuZmllbGRzZXQsXG5mb3JtLFxubGFiZWwsXG5sZWdlbmQsXG50YWJsZSxcbmNhcHRpb24sXG50Ym9keSxcbnRmb290LFxudGhlYWQsXG50cixcbnRoLFxudGQsXG5hcnRpY2xlLFxuYXNpZGUsXG5jYW52YXMsXG5kZXRhaWxzLFxuZW1iZWQsXG5maWd1cmUsXG5maWdjYXB0aW9uLFxuZm9vdGVyLFxuaGVhZGVyLFxuaGdyb3VwLFxubWVudSxcbm5hdixcbm91dHB1dCxcbnJ1YnksXG5zZWN0aW9uLFxuc3VtbWFyeSxcbnRpbWUsXG5tYXJrLFxuYXVkaW8sXG52aWRlbyB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgYm9yZGVyOiAwO1xuICAgIGZvbnQtc2l6ZTogMTAwJTtcbiAgICBmb250OiBpbmhlcml0O1xuICAgIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcbn1cblxuLmhpZGRlbiB7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cblxuOnJvb3Qge1xuICAgIC0tYmdDb2xvcjogI2QyZDZkOTtcbiAgICAtLWZvbnRDb2xvcjogIzJiMmUzMztcblxufVxuXG51bCB7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbn1cblxuQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6IFwiSW50ZXJUaGluXCI7XG4gICAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSkgZm9ybWF0KFwidHJ1ZXR5cGVcIik7XG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcbn1cblxuQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6IFwiSW50ZXJFeHRyYUxpZ2h0XCI7XG4gICAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19ffSkgZm9ybWF0KFwidHJ1ZXR5cGVcIik7XG4gICAgZm9udC13ZWlnaHQ6IDIwMDtcbn1cblxuQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6IFwiSW50ZXJMaWdodFwiO1xuICAgIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fX30pIGZvcm1hdChcInRydWV0eXBlXCIpO1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG59XG5cbmJvZHkge1xuICAgIGZvbnQtZmFtaWx5OiBcIkludGVyTGlnaHRcIjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZ0NvbG9yKTtcbiAgICBjb2xvcjogdmFyKC0tZm9udENvbG9yKTtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMjAlIDQwJSA0MCU7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgd2lkdGg6IDEwMHZ3O1xufVxuXG5odG1sIHtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4qLFxuKjpiZWZvcmUsXG4qOmFmdGVyIHtcbiAgICBib3gtc2l6aW5nOiBpbmhlcml0O1xufVxuXG4vKiBMb2NhdGlvbiAqL1xuLmxvY2F0aW9uIHtcbiAgICBmb250LWZhbWlseTogXCJJbnRlckxpZ2h0XCI7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGZvbnQtc2l6ZTogM3JlbTtcbiAgICBncmlkLXJvdzogMS8yO1xuICAgIGdyaWQtY29sdW1uOiAxLzM7XG5cbn1cblxuLnNlYXJjaExvY2F0aW9uIHtcbiAgICBmb250LWZhbWlseTogXCJJbnRlckV4dHJhTGlnaHRcIjtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMDtcbn1cblxuI2xvY2F0aW9uSW5wdXQge1xuICAgIGZvbnQtZmFtaWx5OiBcIkludGVyRXh0cmFMaWdodFwiO1xuICAgIHBhZGRpbmc6IDAuMXJlbSAwLjJyZW07XG4gICAgbWFyZ2luOiBub25lO1xuICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogbm9uZTtcbiAgICBvdXRsaW5lOiBpbmhlcml0O1xuICAgIHdpZHRoOiAyNXJlbTtcbiAgICBib3JkZXItcmlnaHQ6IG5vbmU7XG4gICAgYm9yZGVyOiAxcHggdmFyKC0tZm9udENvbG9yKSBzb2xpZDtcbiAgICBib3JkZXItcmlnaHQ6IG5vbmU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmdDb2xvcik7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG59XG5cbi5zdWJtaXRMb2NhdGlvbiB7XG4gICAgcGFkZGluZzogMC4xcmVtIDAuMnJlbTtcbiAgICBmb250OiBpbmhlcml0O1xuICAgIGNvbG9yOiBpbmhlcml0O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICBib3JkZXI6IDFweCB2YXIoLS1mb250Q29sb3IpIHNvbGlkO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnQ29sb3IpO1xufVxuXG4uaWNvbkNvbmRpdGlvbiB7XG4gICAgZGlzcGxheTogZmxleDtcbn1cblxuLyogQ29uZGl0aW9uICovXG4uZGF0ZVRpbWUge1xuICAgIGZvbnQtZmFtaWx5OiBcIkludGVyRXh0cmFMaWdodFwiO1xuICAgIHdpZHRoOiBmaXQtY29udGVudDtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcblxufVxuXG4uY29uZGl0aW9uUGxhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiBcIkludGVyRXh0cmFMaWdodFwiO1xuICAgIHdpZHRoOiBmaXQtY29udGVudDtcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBncmlkLXJvdzogMi8zO1xuICAgIGdyaWQtY29sdW1uOiAxLzI7XG59XG5cbi5jb25kaXRpb25Db250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLmJ0blRlbXAge1xuICAgIGZvbnQtZmFtaWx5OiBcIkludGVyRXh0cmFMaWdodFwiO1xuICAgIGNvbG9yOiBpbmhlcml0O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgYm9yZGVyOiAxcHggdmFyKC0tZm9udENvbG9yKSBzb2xpZDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZ0NvbG9yKTtcbiAgICBwYWRkaW5nOiAwLjFyZW0gMC4ycmVtO1xuICAgIC8qIG1hcmdpbi10b3A6IDFyZW07ICovXG59XG5cbiN3ZWF0aGVySWNvbiB7XG4gICAgaGVpZ2h0OiA4cmVtO1xuICAgIHdpZHRoOiA4cmVtO1xuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcblxufVxuXG4vKiBEYWlseSAqL1xuLmRhaWx5IHtcbiAgICB3aWR0aDogNTB2dztcbiAgICBoZWlnaHQ6IDIwMHB4O1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmcjtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDUwcHggMjAwcHg7XG4gICAgZ2FwOiAxLjVyZW07XG4gICAgZ3JpZC1yb3c6IDMvNDtcbiAgICBncmlkLWNvbHVtbjogMS8zO1xufVxuXG5cbi5kYWlseT5kaXYge1xuICAgIGZvbnQtZmFtaWx5OiBcIkludGVyRXh0cmFMaWdodFwiO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMi8zO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuI2RhaWx5SGVhZGVyIHtcbiAgICBncmlkLWNvbHVtbjogMS80O1xuICAgIGdyaWQtcm93OiAxLzI7XG4gICAgZm9udC1zaXplOiAycmVtO1xufVxuXG4uZGFpbHlEYXRlIHtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbn1cblxuLmRhaWx5Q29uZGl0aW9uIHtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbn1cblxuLyogRnVydGhlciBEZXRhaWxzICovXG4uZnVydGhlckRldGFpbHMge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFpRkksU0FBUztJQUNULFVBQVU7SUFDVixTQUFTO0lBQ1QsZUFBZTtJQUNmLGFBQWE7SUFDYix3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLG9CQUFvQjs7QUFFeEI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSx3QkFBd0I7SUFDeEIsK0RBQW1EO0lBQ25ELGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLDhCQUE4QjtJQUM5QiwrREFBeUQ7SUFDekQsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLCtEQUFvRDtJQUNwRCxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsZ0NBQWdDO0lBQ2hDLHVCQUF1QjtJQUN2QixhQUFhO0lBQ2IsK0JBQStCO0lBQy9CLDhCQUE4QjtJQUM5QixhQUFhO0lBQ2IsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLHNCQUFzQjtBQUMxQjs7QUFFQTs7O0lBR0ksbUJBQW1CO0FBQ3ZCOztBQUVBLGFBQWE7QUFDYjtJQUNJLHlCQUF5QjtJQUN6QixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixhQUFhO0lBQ2IsZ0JBQWdCOztBQUVwQjs7QUFFQTtJQUNJLDhCQUE4QjtJQUM5QixpQkFBaUI7SUFDakIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSw4QkFBOEI7SUFDOUIsc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGtDQUFrQztJQUNsQyxrQkFBa0I7SUFDbEIsZ0NBQWdDO0lBQ2hDLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixhQUFhO0lBQ2IsY0FBYztJQUNkLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsa0NBQWtDO0lBQ2xDLGdDQUFnQztBQUNwQzs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUEsY0FBYztBQUNkO0lBQ0ksOEJBQThCO0lBQzlCLGtCQUFrQjtJQUNsQixpQkFBaUI7O0FBRXJCOztBQUVBO0lBQ0ksOEJBQThCO0lBQzlCLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLHVCQUF1QjtJQUN2QixhQUFhO0lBQ2IsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLDhCQUE4QjtJQUM5QixjQUFjO0lBQ2QsZUFBZTtJQUNmLGVBQWU7SUFDZixrQ0FBa0M7SUFDbEMsZ0NBQWdDO0lBQ2hDLHNCQUFzQjtJQUN0QixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLGtCQUFrQjs7QUFFdEI7O0FBRUEsVUFBVTtBQUNWO0lBQ0ksV0FBVztJQUNYLGFBQWE7SUFDYixhQUFhO0lBQ2Isa0NBQWtDO0lBQ2xDLDhCQUE4QjtJQUM5QixXQUFXO0lBQ1gsYUFBYTtJQUNiLGdCQUFnQjtBQUNwQjs7O0FBR0E7SUFDSSw4QkFBOEI7SUFDOUIsdUJBQXVCO0lBQ3ZCLGFBQWE7SUFDYixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUEsb0JBQW9CO0FBQ3BCO0lBQ0ksdUJBQXVCO0lBQ3ZCLGFBQWE7QUFDakJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiaHRtbCxcXG5ib2R5LFxcbmRpdixcXG5zcGFuLFxcbmFwcGxldCxcXG5vYmplY3QsXFxuaWZyYW1lLFxcbmgxLFxcbmgyLFxcbmgzLFxcbmg0LFxcbmg1LFxcbmg2LFxcbnAsXFxuYmxvY2txdW90ZSxcXG5wcmUsXFxuYSxcXG5hYmJyLFxcbmFjcm9ueW0sXFxuYWRkcmVzcyxcXG5iaWcsXFxuY2l0ZSxcXG5jb2RlLFxcbmRlbCxcXG5kZm4sXFxuZW0sXFxuaW1nLFxcbmlucyxcXG5rYmQsXFxucSxcXG5zLFxcbnNhbXAsXFxuc21hbGwsXFxuc3RyaWtlLFxcbnN0cm9uZyxcXG5zdWIsXFxuc3VwLFxcbnR0LFxcbnZhcixcXG5iLFxcbnUsXFxuaSxcXG5jZW50ZXIsXFxuZGwsXFxuZHQsXFxuZGQsXFxub2wsXFxudWwsXFxubGksXFxuZmllbGRzZXQsXFxuZm9ybSxcXG5sYWJlbCxcXG5sZWdlbmQsXFxudGFibGUsXFxuY2FwdGlvbixcXG50Ym9keSxcXG50Zm9vdCxcXG50aGVhZCxcXG50cixcXG50aCxcXG50ZCxcXG5hcnRpY2xlLFxcbmFzaWRlLFxcbmNhbnZhcyxcXG5kZXRhaWxzLFxcbmVtYmVkLFxcbmZpZ3VyZSxcXG5maWdjYXB0aW9uLFxcbmZvb3RlcixcXG5oZWFkZXIsXFxuaGdyb3VwLFxcbm1lbnUsXFxubmF2LFxcbm91dHB1dCxcXG5ydWJ5LFxcbnNlY3Rpb24sXFxuc3VtbWFyeSxcXG50aW1lLFxcbm1hcmssXFxuYXVkaW8sXFxudmlkZW8ge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGJvcmRlcjogMDtcXG4gICAgZm9udC1zaXplOiAxMDAlO1xcbiAgICBmb250OiBpbmhlcml0O1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcblxcbi5oaWRkZW4ge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG46cm9vdCB7XFxuICAgIC0tYmdDb2xvcjogI2QyZDZkOTtcXG4gICAgLS1mb250Q29sb3I6ICMyYjJlMzM7XFxuXFxufVxcblxcbnVsIHtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiSW50ZXJUaGluXFxcIjtcXG4gICAgc3JjOiB1cmwoXFxcImZvbnRzL0ludGVyLVRoaW4udHRmXFxcIikgZm9ybWF0KFxcXCJ0cnVldHlwZVxcXCIpO1xcbiAgICBmb250LXdlaWdodDogMTAwO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJJbnRlckV4dHJhTGlnaHRcXFwiO1xcbiAgICBzcmM6IHVybChcXFwiZm9udHMvSW50ZXItRXh0cmFMaWdodC50dGZcXFwiKSBmb3JtYXQoXFxcInRydWV0eXBlXFxcIik7XFxuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogXFxcIkludGVyTGlnaHRcXFwiO1xcbiAgICBzcmM6IHVybChcXFwiZm9udHMvSW50ZXItTGlnaHQudHRmXFxcIikgZm9ybWF0KFxcXCJ0cnVldHlwZVxcXCIpO1xcbiAgICBmb250LXdlaWdodDogMzAwO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJJbnRlckxpZ2h0XFxcIjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmdDb2xvcik7XFxuICAgIGNvbG9yOiB2YXIoLS1mb250Q29sb3IpO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDIwJSA0MCUgNDAlO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIHdpZHRoOiAxMDB2dztcXG59XFxuXFxuaHRtbCB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbiosXFxuKjpiZWZvcmUsXFxuKjphZnRlciB7XFxuICAgIGJveC1zaXppbmc6IGluaGVyaXQ7XFxufVxcblxcbi8qIExvY2F0aW9uICovXFxuLmxvY2F0aW9uIHtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJJbnRlckxpZ2h0XFxcIjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgZm9udC1zaXplOiAzcmVtO1xcbiAgICBncmlkLXJvdzogMS8yO1xcbiAgICBncmlkLWNvbHVtbjogMS8zO1xcblxcbn1cXG5cXG4uc2VhcmNoTG9jYXRpb24ge1xcbiAgICBmb250LWZhbWlseTogXFxcIkludGVyRXh0cmFMaWdodFxcXCI7XFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4jbG9jYXRpb25JbnB1dCB7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiSW50ZXJFeHRyYUxpZ2h0XFxcIjtcXG4gICAgcGFkZGluZzogMC4xcmVtIDAuMnJlbTtcXG4gICAgbWFyZ2luOiBub25lO1xcbiAgICBib3gtc2hhZG93OiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiBub25lO1xcbiAgICBvdXRsaW5lOiBpbmhlcml0O1xcbiAgICB3aWR0aDogMjVyZW07XFxuICAgIGJvcmRlci1yaWdodDogbm9uZTtcXG4gICAgYm9yZGVyOiAxcHggdmFyKC0tZm9udENvbG9yKSBzb2xpZDtcXG4gICAgYm9yZGVyLXJpZ2h0OiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZ0NvbG9yKTtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxufVxcblxcbi5zdWJtaXRMb2NhdGlvbiB7XFxuICAgIHBhZGRpbmc6IDAuMXJlbSAwLjJyZW07XFxuICAgIGZvbnQ6IGluaGVyaXQ7XFxuICAgIGNvbG9yOiBpbmhlcml0O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICBib3JkZXI6IDFweCB2YXIoLS1mb250Q29sb3IpIHNvbGlkO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZ0NvbG9yKTtcXG59XFxuXFxuLmljb25Db25kaXRpb24ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4vKiBDb25kaXRpb24gKi9cXG4uZGF0ZVRpbWUge1xcbiAgICBmb250LWZhbWlseTogXFxcIkludGVyRXh0cmFMaWdodFxcXCI7XFxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuXFxufVxcblxcbi5jb25kaXRpb25QbGFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiSW50ZXJFeHRyYUxpZ2h0XFxcIjtcXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBncmlkLXJvdzogMi8zO1xcbiAgICBncmlkLWNvbHVtbjogMS8yO1xcbn1cXG5cXG4uY29uZGl0aW9uQ29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLmJ0blRlbXAge1xcbiAgICBmb250LWZhbWlseTogXFxcIkludGVyRXh0cmFMaWdodFxcXCI7XFxuICAgIGNvbG9yOiBpbmhlcml0O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgYm9yZGVyOiAxcHggdmFyKC0tZm9udENvbG9yKSBzb2xpZDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmdDb2xvcik7XFxuICAgIHBhZGRpbmc6IDAuMXJlbSAwLjJyZW07XFxuICAgIC8qIG1hcmdpbi10b3A6IDFyZW07ICovXFxufVxcblxcbiN3ZWF0aGVySWNvbiB7XFxuICAgIGhlaWdodDogOHJlbTtcXG4gICAgd2lkdGg6IDhyZW07XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG5cXG59XFxuXFxuLyogRGFpbHkgKi9cXG4uZGFpbHkge1xcbiAgICB3aWR0aDogNTB2dztcXG4gICAgaGVpZ2h0OiAyMDBweDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA1MHB4IDIwMHB4O1xcbiAgICBnYXA6IDEuNXJlbTtcXG4gICAgZ3JpZC1yb3c6IDMvNDtcXG4gICAgZ3JpZC1jb2x1bW46IDEvMztcXG59XFxuXFxuXFxuLmRhaWx5PmRpdiB7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiSW50ZXJFeHRyYUxpZ2h0XFxcIjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAyLzM7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbiNkYWlseUhlYWRlciB7XFxuICAgIGdyaWQtY29sdW1uOiAxLzQ7XFxuICAgIGdyaWQtcm93OiAxLzI7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG59XFxuXFxuLmRhaWx5RGF0ZSB7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG5cXG4uZGFpbHlDb25kaXRpb24ge1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG59XFxuXFxuLyogRnVydGhlciBEZXRhaWxzICovXFxuLmZ1cnRoZXJEZXRhaWxzIHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgdXBwZXJDb25kaXRpb25UeHQsIHNlbGVjdEljb24gfSBmcm9tIFwiLi9mdW5jdGlvbmFsaXR5XCI7XG5cbmNvbnN0IGZldGNoV2VhdGhlciA9IGFzeW5jIGZ1bmN0aW9uIGdldFdlYXRoZXJEYXRhKFxuICBsb2NhdGlvblR4dCxcbiAgcG9wdWxhdGUsXG4gIGRheXNBcnIsXG4gIGRhdGVUeHQsXG4gIHRpbWUsXG4gIGRheVdlZWssXG4gIHRlbXBfYyxcbiAgdGVtcF9mXG4pIHtcbiAgaWYgKGxvY2F0aW9uVHh0ID09PSBcIlwiKSB7XG4gICAgbGV0IGN1cnJlbnQgPSBcIlwiO1xuICAgIGxldCBmb3JlY2FzdCA9IFwiXCI7XG4gICAgbGV0IGxvY2F0aW9uID0gXCJcIjtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxuICAgICAgXCJodHRwOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxL2ZvcmVjYXN0Lmpzb24/a2V5PTRkYTQwMzI4NmRkNjRkY2ZiMGMyMDAwMTQyMzMwMDgmcT1Mb25kb24mZGF5cz03JmFxaT15ZXMmYWxlcnRzPW5vXCIsXG4gICAgICB7IG1vZGU6IFwiY29yc1wiIH1cbiAgICApO1xuICAgIGNvbnN0IHdlYXRoZXJEYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIHBvcHVsYXRlKFxuICAgICAgd2VhdGhlckRhdGEsXG4gICAgICBjdXJyZW50LFxuICAgICAgZm9yZWNhc3QsXG4gICAgICBsb2NhdGlvbixcbiAgICAgIHNlbGVjdEljb24sXG4gICAgICB1cHBlckNvbmRpdGlvblR4dCxcbiAgICAgIGRheXNBcnIsXG4gICAgICBkYXRlVHh0LFxuICAgICAgdGltZSxcbiAgICAgIGRheVdlZWssXG4gICAgICB0ZW1wX2MsXG4gICAgICB0ZW1wX2ZcbiAgICApO1xuICAgIGNvbnNvbGUubG9nKHdlYXRoZXJEYXRhKTtcbiAgICAvLyBDb3B5IGJlbG93IHdoZW4gZmluaXNoZWRcbiAgfSBlbHNlIHtcbiAgICBsZXQgY3VycmVudCA9IFwiXCI7XG4gICAgbGV0IGZvcmVjYXN0ID0gXCJcIjtcbiAgICBsZXQgbG9jYXRpb24gPSBcIlwiO1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG4gICAgICBgaHR0cDovL2FwaS53ZWF0aGVyYXBpLmNvbS92MS9mb3JlY2FzdC5qc29uP2tleT00ZGE0MDMyODZkZDY0ZGNmYjBjMjAwMDE0MjMzMDA4JnE9JHtsb2NhdGlvblR4dH0mZGF5cz03JmFxaT15ZXMmYWxlcnRzPW5vYCxcbiAgICAgIHsgbW9kZTogXCJjb3JzXCIgfVxuICAgICk7XG4gICAgY29uc3Qgd2VhdGhlckRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgcG9wdWxhdGUoXG4gICAgICB3ZWF0aGVyRGF0YSxcbiAgICAgIGN1cnJlbnQsXG4gICAgICBmb3JlY2FzdCxcbiAgICAgIGxvY2F0aW9uLFxuICAgICAgc2VsZWN0SWNvbixcbiAgICAgIHVwcGVyQ29uZGl0aW9uVHh0LFxuICAgICAgZGF5c0FycixcbiAgICAgIGRhdGVUeHQsXG4gICAgICB0aW1lLFxuICAgICAgZGF5V2VlayxcbiAgICAgIHRlbXBfYyxcbiAgICAgIHRlbXBfZlxuICAgICk7XG4gICAgY29uc29sZS5sb2cod2VhdGhlckRhdGEpO1xuICB9XG59O1xuXG5leHBvcnQgeyBmZXRjaFdlYXRoZXIgfTtcbiIsImNvbnN0IHNlbGVjdEljb24gPSBmdW5jdGlvbiAoY3VycmVudCwgd2VhdGhlckljb24sIGRhaWx5KSB7XG4gIGlmIChkYWlseSkge1xuICAgIGlmIChjdXJyZW50LmNvbmRpdGlvbi5jb2RlID09PSAxMDAwKSB7XG4gICAgICB3ZWF0aGVySWNvbi5zcmMgPSBcIndlYXRoZXJJY29ucy9zdW5ueS5zdmdcIjtcbiAgICB9IGVsc2UgaWYgKGN1cnJlbnQuY29uZGl0aW9uLmNvZGUgPT09IDEwMDMpIHtcbiAgICAgIHdlYXRoZXJJY29uLnNyYyA9IFwid2VhdGhlckljb25zL3BhcnRseUNsb3VkeURheS5zdmdcIjtcbiAgICB9IGVsc2UgaWYgKFxuICAgICAgY3VycmVudC5jb25kaXRpb24uY29kZSA9PT0gMTAwNiB8fFxuICAgICAgY3VycmVudC5jb25kaXRpb24uY29kZSA9PT0gMTAwOVxuICAgICkge1xuICAgICAgd2VhdGhlckljb24uc3JjID0gXCJ3ZWF0aGVySWNvbnMvY2xvdWR5LnN2Z1wiO1xuICAgIH0gZWxzZSBpZiAoY3VycmVudC5jb25kaXRpb24uY29kZSA9PT0gMTAzMCkge1xuICAgICAgd2VhdGhlckljb24uc3JjID0gXCJ3ZWF0aGVySWNvbnMvbWlzdC5zdmdcIjtcbiAgICB9IGVsc2UgaWYgKFxuICAgICAgY3VycmVudC5jb25kaXRpb24uY29kZSA9PT0gMTA2MyB8fFxuICAgICAgY3VycmVudC5jb25kaXRpb24uY29kZSA9PT0gMTE1MFxuICAgICkge1xuICAgICAgd2VhdGhlckljb24uc3JjID0gXCJ3ZWF0aGVySWNvbnMvcGF0Y2h5UmFpbkRheS5zdmdcIjtcbiAgICB9IGVsc2UgaWYgKFxuICAgICAgY3VycmVudC5jb25kaXRpb24uY29kZSA9PT0gMTA2NiB8fFxuICAgICAgY3VycmVudC5jb25kaXRpb24uY29kZSA9PT0gMTIxMFxuICAgICkge1xuICAgICAgd2VhdGhlckljb24uc3JjID0gXCJ3ZWF0aGVySWNvbnMvcGF0Y2h5U25vd0RheS5zdmdcIjtcbiAgICB9IGVsc2UgaWYgKGN1cnJlbnQuY29uZGl0aW9uLmNvZGUgPT09IDEwNjkpIHtcbiAgICAgIHdlYXRoZXJJY29uLnNyYyA9IFwid2VhdGhlckljb25zL3BhdGNoeVNsZWV0RGF5LnN2Z1wiO1xuICAgIH0gZWxzZSBpZiAoXG4gICAgICBjdXJyZW50LmNvbmRpdGlvbi5jb2RlID09PSAxMDcyIHx8XG4gICAgICBjdXJyZW50LmNvbmRpdGlvbi5jb2RlID09PSAxMTY4IHx8XG4gICAgICBjdXJyZW50LmNvbmRpdGlvbi5jb2RlID09PSAxMTk4IHx8XG4gICAgICBjdXJyZW50LmNvbmRpdGlvbi5jb2RlID09PSAxMjA0IHx8XG4gICAgICBjdXJyZW50LmNvbmRpdGlvbi5jb2RlID09PSAxMjQ5XG4gICAgKSB7XG4gICAgICB3ZWF0aGVySWNvbi5zcmMgPSBcIndlYXRoZXJJY29ucy9mZWV6aW5nRHJpenpsZS5zdmdcIjtcbiAgICB9IGVsc2UgaWYgKGN1cnJlbnQuY29uZGl0aW9uLmNvZGUgPT09IDEwODcpIHtcbiAgICAgIHdlYXRoZXJJY29uLnNyYyA9IFwid2VhdGhlckljb25zL3RodW5kZXJ5T3V0YnJlYWtzLnN2Z1wiO1xuICAgIH0gZWxzZSBpZiAoY3VycmVudC5jb25kaXRpb24uY29kZSA9PT0gMTExNCkge1xuICAgICAgd2VhdGhlckljb24uc3JjID0gXCJ3ZWF0aGVySWNvbnMvYmxvd2luZ1Nub3cuc3ZnXCI7XG4gICAgfSBlbHNlIGlmIChjdXJyZW50LmNvbmRpdGlvbi5jb2RlID09PSAxMTE3KSB7XG4gICAgICB3ZWF0aGVySWNvbi5zcmMgPSBcIndlYXRoZXJJY29ucy9ibGl6emFyZC5zdmdcIjtcbiAgICB9IGVsc2UgaWYgKGN1cnJlbnQuY29uZGl0aW9uLmNvZGUgPT09IDExMzUpIHtcbiAgICAgIHdlYXRoZXJJY29uLnNyYyA9IFwid2VhdGhlckljb25zL2ZvZy5zdmdcIjtcbiAgICB9IGVsc2UgaWYgKGN1cnJlbnQuY29uZGl0aW9uLmNvZGUgPT09IDExNDcpIHtcbiAgICAgIHdlYXRoZXJJY29uLnNyYyA9IFwid2VhdGhlckljb25zL2ZyZWV6aW5nRm9nLnN2Z1wiO1xuICAgIH0gZWxzZSBpZiAoY3VycmVudC5jb25kaXRpb24uY29kZSA9PT0gMTE1Mykge1xuICAgICAgd2VhdGhlckljb24uc3JjID0gXCJ3ZWF0aGVySWNvbnMvbGlnaHRSYWluLnN2Z1wiO1xuICAgIH0gZWxzZSBpZiAoXG4gICAgICBjdXJyZW50LmNvbmRpdGlvbi5jb2RlID09PSAxMTcxIHx8XG4gICAgICBjdXJyZW50LmNvbmRpdGlvbi5jb2RlID09PSAxMjAxIHx8XG4gICAgICBjdXJyZW50LmNvbmRpdGlvbi5jb2RlID09PSAxMjA3IHx8XG4gICAgICBjdXJyZW50LmNvbmRpdGlvbi5jb2RlID09PSAxMjUyXG4gICAgKSB7XG4gICAgICB3ZWF0aGVySWNvbi5zcmMgPSBcIndlYXRoZXJJY29ucy9oZWF2eUZyZWV6aW5nRHJpenpsZS5zdmdcIjtcbiAgICB9IGVsc2UgaWYgKFxuICAgICAgY3VycmVudC5jb25kaXRpb24uY29kZSA9PT0gMTE4MCB8fFxuICAgICAgY3VycmVudC5jb25kaXRpb24uY29kZSA9PT0gMTE4M1xuICAgICkge1xuICAgICAgd2VhdGhlckljb24uc3JjID0gXCJ3ZWF0aGVySWNvbnMvbGlnaHRSYWluLnN2Z1wiO1xuICAgIH0gZWxzZSBpZiAoXG4gICAgICBjdXJyZW50LmNvbmRpdGlvbi5jb2RlID09PSAxMTg2IHx8XG4gICAgICBjdXJyZW50LmNvbmRpdGlvbi5jb2RlID09PSAxMTg5XG4gICAgKSB7XG4gICAgICB3ZWF0aGVySWNvbi5zcmMgPSBcIndlYXRoZXJJY29ucy9tb2RlcmF0ZVJhaW4uc3ZnXCI7XG4gICAgfSBlbHNlIGlmIChcbiAgICAgIGN1cnJlbnQuY29uZGl0aW9uLmNvZGUgPT09IDExOTIgfHxcbiAgICAgIGN1cnJlbnQuY29uZGl0aW9uLmNvZGUgPT09IDExOTVcbiAgICApIHtcbiAgICAgIHdlYXRoZXJJY29uLnNyYyA9IFwid2VhdGhlckljb25zL2hlYXZ5UmFpbi5zdmdcIjtcbiAgICB9IGVsc2UgaWYgKFxuICAgICAgY3VycmVudC5jb25kaXRpb24uY29kZSA9PT0gMTIxMyB8fFxuICAgICAgY3VycmVudC5jb25kaXRpb24uY29kZSA9PT0gMTI1NVxuICAgICkge1xuICAgICAgd2VhdGhlckljb24uc3JjID0gXCJ3ZWF0aGVySWNvbnMvbGlnaHRTbm93LnN2Z1wiO1xuICAgIH0gZWxzZSBpZiAoXG4gICAgICBjdXJyZW50LmNvbmRpdGlvbi5jb2RlID09PSAxMjE2IHx8XG4gICAgICBjdXJyZW50LmNvbmRpdGlvbi5jb2RlID09PSAxMjE5IHx8XG4gICAgICBjdXJyZW50LmNvbmRpdGlvbi5jb2RlID09PSAxMjU4XG4gICAgKSB7XG4gICAgICB3ZWF0aGVySWNvbi5zcmMgPSBcIndlYXRoZXJJY29ucy9tb2RlcmF0ZVNub3cuc3ZnXCI7XG4gICAgfSBlbHNlIGlmIChcbiAgICAgIGN1cnJlbnQuY29uZGl0aW9uLmNvZGUgPT09IDEyMjIgfHxcbiAgICAgIGN1cnJlbnQuY29uZGl0aW9uLmNvZGUgPT09IDEyMjVcbiAgICApIHtcbiAgICAgIHdlYXRoZXJJY29uLnNyYyA9IFwid2VhdGhlckljb25zL2hlYXZ5U25vdy5zdmdcIjtcbiAgICB9IGVsc2UgaWYgKFxuICAgICAgY3VycmVudC5jb25kaXRpb24uY29kZSA9PT0gMTIzNyB8fFxuICAgICAgY3VycmVudC5jb25kaXRpb24uY29kZSA9PT0gMTI2MSB8fFxuICAgICAgY3VycmVudC5jb25kaXRpb24uY29kZSA9PT0gMTI2NFxuICAgICkge1xuICAgICAgd2VhdGhlckljb24uc3JjID0gXCJ3ZWF0aGVySWNvbnMvaWNlUGVsbGV0cy5zdmdcIjtcbiAgICB9IGVsc2UgaWYgKGN1cnJlbnQuY29uZGl0aW9uLmNvZGUgPT09IDEyNDApIHtcbiAgICAgIHdlYXRoZXJJY29uLnNyYyA9IFwid2VhdGhlckljb25zL2xpZ2h0UmFpblNob3dlci5zdmdcIjtcbiAgICB9IGVsc2UgaWYgKGN1cnJlbnQuY29uZGl0aW9uLmNvZGUgPT09IDEyNDMpIHtcbiAgICAgIHdlYXRoZXJJY29uLnNyYyA9IFwid2VhdGhlckljb25zL21vZGVyYXRlUmFpblNob3dlci5zdmdcIjtcbiAgICB9IGVsc2UgaWYgKGN1cnJlbnQuY29uZGl0aW9uLmNvZGUgPT09IDEyNDYpIHtcbiAgICAgIHdlYXRoZXJJY29uLnNyYyA9IFwid2VhdGhlckljb25zL3RvcnJlbnRpYWxSYWluU2hvd2VyLnN2Z1wiO1xuICAgIH0gZWxzZSBpZiAoY3VycmVudC5jb25kaXRpb24uY29kZSA9PT0gMTI3Mykge1xuICAgICAgd2VhdGhlckljb24uc3JjID0gXCJ3ZWF0aGVySWNvbnMvcGF0Y2h5TGlnaHRSYWluVGh1bmRlci5zdmdcIjtcbiAgICB9IGVsc2UgaWYgKGN1cnJlbnQuY29uZGl0aW9uLmNvZGUgPT09IDEyNzYpIHtcbiAgICAgIHdlYXRoZXJJY29uLnNyYyA9IFwid2VhdGhlckljb25zL3BhdGNoeUhlYXZ5UmFpblRodW5kZXIuc3ZnXCI7XG4gICAgfSBlbHNlIGlmIChcbiAgICAgIGN1cnJlbnQuY29uZGl0aW9uLmNvZGUgPT09IDEyNzkgfHxcbiAgICAgIGN1cnJlbnQuY29uZGl0aW9uLmNvZGUgPT09IDEyODJcbiAgICApIHtcbiAgICAgIHdlYXRoZXJJY29uLnNyYyA9IFwid2VhdGhlckljb25zL3BhdGNoeVNub3dUaHVuZGVyLnN2Z1wiO1xuICAgIH0gZWxzZSB7XG4gICAgICB3ZWF0aGVySWNvbi5zcmMgPSBjdXJyZW50LmNvbmRpdGlvbi5pY29uO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBpZiAoY3VycmVudC5jb25kaXRpb24uY29kZSA9PT0gMTAwMCAmJiBjdXJyZW50LmlzX2RheSkge1xuICAgICAgd2VhdGhlckljb24uc3JjID0gXCJ3ZWF0aGVySWNvbnMvc3Vubnkuc3ZnXCI7XG4gICAgfSBlbHNlIGlmIChjdXJyZW50LmNvbmRpdGlvbi5jb2RlID09PSAxMDAwICYmICFjdXJyZW50LmlzX2RheSkge1xuICAgICAgd2VhdGhlckljb24uc3JjID0gXCJ3ZWF0aGVySWNvbnMvY2xlYXIuc3ZnXCI7XG4gICAgfSBlbHNlIGlmIChjdXJyZW50LmNvbmRpdGlvbi5jb2RlID09PSAxMDAzICYmIGN1cnJlbnQuaXNfZGF5KSB7XG4gICAgICB3ZWF0aGVySWNvbi5zcmMgPSBcIndlYXRoZXJJY29ucy9wYXJ0bHlDbG91ZHlEYXkuc3ZnXCI7XG4gICAgfSBlbHNlIGlmIChjdXJyZW50LmNvbmRpdGlvbi5jb2RlID09PSAxMDAzICYmICFjdXJyZW50LmlzX2RheSkge1xuICAgICAgd2VhdGhlckljb24uc3JjID0gXCJ3ZWF0aGVySWNvbnMvcGFydGx5Q2xvdWR5TmlnaHQuc3ZnXCI7XG4gICAgfSBlbHNlIGlmIChcbiAgICAgIGN1cnJlbnQuY29uZGl0aW9uLmNvZGUgPT09IDEwMDYgfHxcbiAgICAgIGN1cnJlbnQuY29uZGl0aW9uLmNvZGUgPT09IDEwMDlcbiAgICApIHtcbiAgICAgIHdlYXRoZXJJY29uLnNyYyA9IFwid2VhdGhlckljb25zL2Nsb3VkeS5zdmdcIjtcbiAgICB9IGVsc2UgaWYgKGN1cnJlbnQuY29uZGl0aW9uLmNvZGUgPT09IDEwMzApIHtcbiAgICAgIHdlYXRoZXJJY29uLnNyYyA9IFwid2VhdGhlckljb25zL21pc3Quc3ZnXCI7XG4gICAgfSBlbHNlIGlmIChcbiAgICAgIChjdXJyZW50LmNvbmRpdGlvbi5jb2RlID09PSAxMDYzIHx8IGN1cnJlbnQuY29uZGl0aW9uLmNvZGUgPT09IDExNTApICYmXG4gICAgICBjdXJyZW50LmlzX2RheVxuICAgICkge1xuICAgICAgd2VhdGhlckljb24uc3JjID0gXCJ3ZWF0aGVySWNvbnMvcGF0Y2h5UmFpbkRheS5zdmdcIjtcbiAgICB9IGVsc2UgaWYgKFxuICAgICAgKGN1cnJlbnQuY29uZGl0aW9uLmNvZGUgPT09IDEwNjMgfHwgY3VycmVudC5jb25kaXRpb24uY29kZSA9PT0gMTE1MCkgJiZcbiAgICAgICFjdXJyZW50LmlzX2RheVxuICAgICkge1xuICAgICAgd2VhdGhlckljb24uc3JjID0gXCJ3ZWF0aGVySWNvbnMvcGF0Y2h5UmFpbk5pZ2h0LnN2Z1wiO1xuICAgIH0gZWxzZSBpZiAoXG4gICAgICAoY3VycmVudC5jb25kaXRpb24uY29kZSA9PT0gMTA2NiB8fCBjdXJyZW50LmNvbmRpdGlvbi5jb2RlID09PSAxMjEwKSAmJlxuICAgICAgY3VycmVudC5pc19kYXlcbiAgICApIHtcbiAgICAgIHdlYXRoZXJJY29uLnNyYyA9IFwid2VhdGhlckljb25zL3BhdGNoeVNub3dEYXkuc3ZnXCI7XG4gICAgfSBlbHNlIGlmIChcbiAgICAgIChjdXJyZW50LmNvbmRpdGlvbi5jb2RlID09PSAxMDY2IHx8IGN1cnJlbnQuY29uZGl0aW9uLmNvZGUgPT09IDEyMTApICYmXG4gICAgICAhY3VycmVudC5pc19kYXlcbiAgICApIHtcbiAgICAgIHdlYXRoZXJJY29uLnNyYyA9IFwid2VhdGhlckljb25zL3BhdGNoeVNub3dOaWdodC5zdmdcIjtcbiAgICB9IGVsc2UgaWYgKGN1cnJlbnQuY29uZGl0aW9uLmNvZGUgPT09IDEwNjkgJiYgY3VycmVudC5pc19kYXkpIHtcbiAgICAgIHdlYXRoZXJJY29uLnNyYyA9IFwid2VhdGhlckljb25zL3BhdGNoeVNsZWV0RGF5LnN2Z1wiO1xuICAgIH0gZWxzZSBpZiAoY3VycmVudC5jb25kaXRpb24uY29kZSA9PT0gMTA2OSAmJiAhY3VycmVudC5pc19kYXkpIHtcbiAgICAgIHdlYXRoZXJJY29uLnNyYyA9IFwid2VhdGhlckljb25zL3BhdGNoeVNsZWV0TmlnaHQuc3ZnXCI7XG4gICAgfSBlbHNlIGlmIChcbiAgICAgIGN1cnJlbnQuY29uZGl0aW9uLmNvZGUgPT09IDEwNzIgfHxcbiAgICAgIGN1cnJlbnQuY29uZGl0aW9uLmNvZGUgPT09IDExNjggfHxcbiAgICAgIGN1cnJlbnQuY29uZGl0aW9uLmNvZGUgPT09IDExOTggfHxcbiAgICAgIGN1cnJlbnQuY29uZGl0aW9uLmNvZGUgPT09IDEyMDQgfHxcbiAgICAgIGN1cnJlbnQuY29uZGl0aW9uLmNvZGUgPT09IDEyNDlcbiAgICApIHtcbiAgICAgIHdlYXRoZXJJY29uLnNyYyA9IFwid2VhdGhlckljb25zL2ZlZXppbmdEcml6emxlLnN2Z1wiO1xuICAgIH0gZWxzZSBpZiAoY3VycmVudC5jb25kaXRpb24uY29kZSA9PT0gMTA4Nykge1xuICAgICAgd2VhdGhlckljb24uc3JjID0gXCJ3ZWF0aGVySWNvbnMvdGh1bmRlcnlPdXRicmVha3Muc3ZnXCI7XG4gICAgfSBlbHNlIGlmIChjdXJyZW50LmNvbmRpdGlvbi5jb2RlID09PSAxMTE0KSB7XG4gICAgICB3ZWF0aGVySWNvbi5zcmMgPSBcIndlYXRoZXJJY29ucy9ibG93aW5nU25vdy5zdmdcIjtcbiAgICB9IGVsc2UgaWYgKGN1cnJlbnQuY29uZGl0aW9uLmNvZGUgPT09IDExMTcpIHtcbiAgICAgIHdlYXRoZXJJY29uLnNyYyA9IFwid2VhdGhlckljb25zL2JsaXp6YXJkLnN2Z1wiO1xuICAgIH0gZWxzZSBpZiAoY3VycmVudC5jb25kaXRpb24uY29kZSA9PT0gMTEzNSkge1xuICAgICAgd2VhdGhlckljb24uc3JjID0gXCJ3ZWF0aGVySWNvbnMvZm9nLnN2Z1wiO1xuICAgIH0gZWxzZSBpZiAoY3VycmVudC5jb25kaXRpb24uY29kZSA9PT0gMTE0Nykge1xuICAgICAgd2VhdGhlckljb24uc3JjID0gXCJ3ZWF0aGVySWNvbnMvZnJlZXppbmdGb2cuc3ZnXCI7XG4gICAgfSBlbHNlIGlmIChjdXJyZW50LmNvbmRpdGlvbi5jb2RlID09PSAxMTUzKSB7XG4gICAgICB3ZWF0aGVySWNvbi5zcmMgPSBcIndlYXRoZXJJY29ucy9saWdodFJhaW4uc3ZnXCI7XG4gICAgfSBlbHNlIGlmIChcbiAgICAgIGN1cnJlbnQuY29uZGl0aW9uLmNvZGUgPT09IDExNzEgfHxcbiAgICAgIGN1cnJlbnQuY29uZGl0aW9uLmNvZGUgPT09IDEyMDEgfHxcbiAgICAgIGN1cnJlbnQuY29uZGl0aW9uLmNvZGUgPT09IDEyMDcgfHxcbiAgICAgIGN1cnJlbnQuY29uZGl0aW9uLmNvZGUgPT09IDEyNTJcbiAgICApIHtcbiAgICAgIHdlYXRoZXJJY29uLnNyYyA9IFwid2VhdGhlckljb25zL2hlYXZ5RnJlZXppbmdEcml6emxlLnN2Z1wiO1xuICAgIH0gZWxzZSBpZiAoXG4gICAgICBjdXJyZW50LmNvbmRpdGlvbi5jb2RlID09PSAxMTgwIHx8XG4gICAgICBjdXJyZW50LmNvbmRpdGlvbi5jb2RlID09PSAxMTgzXG4gICAgKSB7XG4gICAgICB3ZWF0aGVySWNvbi5zcmMgPSBcIndlYXRoZXJJY29ucy9saWdodFJhaW4uc3ZnXCI7XG4gICAgfSBlbHNlIGlmIChcbiAgICAgIGN1cnJlbnQuY29uZGl0aW9uLmNvZGUgPT09IDExODYgfHxcbiAgICAgIGN1cnJlbnQuY29uZGl0aW9uLmNvZGUgPT09IDExODlcbiAgICApIHtcbiAgICAgIHdlYXRoZXJJY29uLnNyYyA9IFwid2VhdGhlckljb25zL21vZGVyYXRlUmFpbi5zdmdcIjtcbiAgICB9IGVsc2UgaWYgKFxuICAgICAgY3VycmVudC5jb25kaXRpb24uY29kZSA9PT0gMTE5MiB8fFxuICAgICAgY3VycmVudC5jb25kaXRpb24uY29kZSA9PT0gMTE5NVxuICAgICkge1xuICAgICAgd2VhdGhlckljb24uc3JjID0gXCJ3ZWF0aGVySWNvbnMvaGVhdnlSYWluLnN2Z1wiO1xuICAgIH0gZWxzZSBpZiAoXG4gICAgICBjdXJyZW50LmNvbmRpdGlvbi5jb2RlID09PSAxMjEzIHx8XG4gICAgICBjdXJyZW50LmNvbmRpdGlvbi5jb2RlID09PSAxMjU1XG4gICAgKSB7XG4gICAgICB3ZWF0aGVySWNvbi5zcmMgPSBcIndlYXRoZXJJY29ucy9saWdodFNub3cuc3ZnXCI7XG4gICAgfSBlbHNlIGlmIChcbiAgICAgIGN1cnJlbnQuY29uZGl0aW9uLmNvZGUgPT09IDEyMTYgfHxcbiAgICAgIGN1cnJlbnQuY29uZGl0aW9uLmNvZGUgPT09IDEyMTkgfHxcbiAgICAgIGN1cnJlbnQuY29uZGl0aW9uLmNvZGUgPT09IDEyNThcbiAgICApIHtcbiAgICAgIHdlYXRoZXJJY29uLnNyYyA9IFwid2VhdGhlckljb25zL21vZGVyYXRlU25vdy5zdmdcIjtcbiAgICB9IGVsc2UgaWYgKFxuICAgICAgY3VycmVudC5jb25kaXRpb24uY29kZSA9PT0gMTIyMiB8fFxuICAgICAgY3VycmVudC5jb25kaXRpb24uY29kZSA9PT0gMTIyNVxuICAgICkge1xuICAgICAgd2VhdGhlckljb24uc3JjID0gXCJ3ZWF0aGVySWNvbnMvaGVhdnlTbm93LnN2Z1wiO1xuICAgIH0gZWxzZSBpZiAoXG4gICAgICBjdXJyZW50LmNvbmRpdGlvbi5jb2RlID09PSAxMjM3IHx8XG4gICAgICBjdXJyZW50LmNvbmRpdGlvbi5jb2RlID09PSAxMjYxIHx8XG4gICAgICBjdXJyZW50LmNvbmRpdGlvbi5jb2RlID09PSAxMjY0XG4gICAgKSB7XG4gICAgICB3ZWF0aGVySWNvbi5zcmMgPSBcIndlYXRoZXJJY29ucy9pY2VQZWxsZXRzLnN2Z1wiO1xuICAgIH0gZWxzZSBpZiAoY3VycmVudC5jb25kaXRpb24uY29kZSA9PT0gMTI0MCkge1xuICAgICAgd2VhdGhlckljb24uc3JjID0gXCJ3ZWF0aGVySWNvbnMvbGlnaHRSYWluU2hvd2VyLnN2Z1wiO1xuICAgIH0gZWxzZSBpZiAoY3VycmVudC5jb25kaXRpb24uY29kZSA9PT0gMTI0Mykge1xuICAgICAgd2VhdGhlckljb24uc3JjID0gXCJ3ZWF0aGVySWNvbnMvbW9kZXJhdGVSYWluU2hvd2VyLnN2Z1wiO1xuICAgIH0gZWxzZSBpZiAoY3VycmVudC5jb25kaXRpb24uY29kZSA9PT0gMTI0Nikge1xuICAgICAgd2VhdGhlckljb24uc3JjID0gXCJ3ZWF0aGVySWNvbnMvdG9ycmVudGlhbFJhaW5TaG93ZXIuc3ZnXCI7XG4gICAgfSBlbHNlIGlmIChjdXJyZW50LmNvbmRpdGlvbi5jb2RlID09PSAxMjczKSB7XG4gICAgICB3ZWF0aGVySWNvbi5zcmMgPSBcIndlYXRoZXJJY29ucy9wYXRjaHlMaWdodFJhaW5UaHVuZGVyLnN2Z1wiO1xuICAgIH0gZWxzZSBpZiAoY3VycmVudC5jb25kaXRpb24uY29kZSA9PT0gMTI3Nikge1xuICAgICAgd2VhdGhlckljb24uc3JjID0gXCJ3ZWF0aGVySWNvbnMvcGF0Y2h5SGVhdnlSYWluVGh1bmRlci5zdmdcIjtcbiAgICB9IGVsc2UgaWYgKFxuICAgICAgY3VycmVudC5jb25kaXRpb24uY29kZSA9PT0gMTI3OSB8fFxuICAgICAgY3VycmVudC5jb25kaXRpb24uY29kZSA9PT0gMTI4MlxuICAgICkge1xuICAgICAgd2VhdGhlckljb24uc3JjID0gXCJ3ZWF0aGVySWNvbnMvcGF0Y2h5U25vd1RodW5kZXIuc3ZnXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIHdlYXRoZXJJY29uLnNyYyA9IGN1cnJlbnQuY29uZGl0aW9uLmljb247XG4gICAgfVxuICB9XG59O1xuXG5jb25zdCB1cHBlckNvbmRpdGlvblR4dCA9IGZ1bmN0aW9uIChjdXJyZW50KSB7XG4gIGxldCBjb25kaXRpb25TdHIgPSBjdXJyZW50LmNvbmRpdGlvbi50ZXh0O1xuICBsZXQgYXJyID0gY29uZGl0aW9uU3RyLnNwbGl0KFwiIFwiKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcbiAgICBhcnJbaV0gPSBhcnJbaV1bMF0udG9VcHBlckNhc2UoKSArIGFycltpXS5zdWJzdHIoMSk7XG4gIH1cbiAgY29uZGl0aW9uU3RyID0gYXJyLmpvaW4oXCIgXCIpO1xuICByZXR1cm4gY29uZGl0aW9uU3RyO1xufTtcblxuZXhwb3J0IHsgc2VsZWN0SWNvbiwgdXBwZXJDb25kaXRpb25UeHQgfTtcbiIsImNvbnN0IHBvcHVsYXRlID0gYXN5bmMgZnVuY3Rpb24gKFxuICB3ZWF0aGVyRGF0YSxcbiAgY3VycmVudCxcbiAgZm9yZWNhc3QsXG4gIGxvY2F0aW9uLFxuICBzZWxlY3RJY29uLFxuICB1cHBlckNvbmRpdGlvblR4dCxcbiAgZGF5c0FycixcbiAgZGF0ZVR4dCxcbiAgdGltZSxcbiAgZGF5V2VlayxcbiAgdGVtcF9jLFxuICB0ZW1wX2Zcbikge1xuICBjdXJyZW50ID0gYXdhaXQgd2VhdGhlckRhdGEuY3VycmVudDtcbiAgZm9yZWNhc3QgPSBhd2FpdCB3ZWF0aGVyRGF0YS5mb3JlY2FzdDtcbiAgbG9jYXRpb24gPSBhd2FpdCB3ZWF0aGVyRGF0YS5sb2NhdGlvbjtcbiAgY29uc3QgbG9jYWxlID0gXCJlbi1HQlwiO1xuXG4gIGxldCBmb3JlY2FzdEFyciA9IGZvcmVjYXN0LmZvcmVjYXN0ZGF5O1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGZvcmVjYXN0QXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgbGV0IGZvcmVjYXN0ID0gZm9yZWNhc3RBcnJbaV0uZGF5O1xuICAgIGxldCBkYXRlRGFpbHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjZGF0ZSR7aX1gKTtcbiAgICBsZXQgZGF5V2VlayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNkYXlXZWVrJHtpfWApO1xuICAgIGxldCBjb25kaXRpb25EYWlseSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNjb25kaXRpb24ke2l9YCk7XG4gICAgbGV0IHdlYXRoZXJJY29uRGFpbHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjd2VhdGhlckljb24ke2l9YCk7XG4gICAgbGV0IHRlbXBfY0RhaWx5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI3RlbXBfYyR7aX1gKTtcbiAgICBsZXQgdGVtcF9mRGFpbHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjdGVtcF9mJHtpfWApO1xuXG4gICAgLy8gRGF0ZSB0byBVSyBmb3JtYXRcbiAgICBsZXQgdGltZXN0YW1wID0gZm9yZWNhc3RBcnJbaV0uZGF0ZTtcbiAgICBsZXQgZGF0ZSA9IG5ldyBEYXRlKHRpbWVzdGFtcCk7XG4gICAgbGV0IGRheSA9IGRhdGUuZ2V0RGF5KCkgLSAxO1xuICAgIGxldCBjb25kaXRpb24gPSBmb3JlY2FzdEFycltpXS5kYXk7XG4gICAgY29uc29sZS5sb2coY29uZGl0aW9uKTtcbiAgICBpID09PSAwXG4gICAgICA/IChkYXlXZWVrLmlubmVySFRNTCA9IFwiVG9kYXlcIilcbiAgICAgIDogKGRheVdlZWsuaW5uZXJIVE1MID0gZGF5c0FycltkYXldKTtcbiAgICBkYXRlID0gZGF0ZVxuICAgICAgLnRvTG9jYWxlU3RyaW5nKGxvY2FsZSwgeyB0aW1lWm9uZTogXCJFdXJvcGUvTG9uZG9uXCIgfSlcbiAgICAgIC5zcGxpdChcIixcIik7XG4gICAgZGF0ZURhaWx5LmlubmVySFRNTCA9IGRhdGVbMF07XG4gICAgbGV0IGNvbmRpdGlvbnR4dCA9IGF3YWl0IHVwcGVyQ29uZGl0aW9uVHh0KGNvbmRpdGlvbik7XG4gICAgY29uZGl0aW9uRGFpbHkuaW5uZXJIVE1MID0gY29uZGl0aW9udHh0O1xuICAgIHRlbXBfY0RhaWx5LmlubmVySFRNTCA9IGAke2ZvcmVjYXN0QXJyW2ldLmRheS5hdmd0ZW1wX2N9ICYjODQ1MWA7XG4gICAgdGVtcF9mRGFpbHkuaW5uZXJIVE1MID0gYCR7Zm9yZWNhc3RBcnJbaV0uZGF5LmF2Z3RlbXBfZn0gJiM4NDU3YDtcbiAgICBsZXQgZGFpbHkgPSB0cnVlO1xuICAgIHNlbGVjdEljb24oZm9yZWNhc3QsIHdlYXRoZXJJY29uRGFpbHksIGRhaWx5KTtcbiAgfVxuICAvLyBVcGRhdGUgQ29uZGl0aW9uXG4gIGxldCBjb25kaXRpb250eHQgPSBhd2FpdCB1cHBlckNvbmRpdGlvblR4dChjdXJyZW50KTtcbiAgY29uZGl0aW9uLmlubmVySFRNTCA9IGNvbmRpdGlvbnR4dDtcbiAgY2l0eS5pbm5lckhUTUwgPSBgJHtsb2NhdGlvbi5uYW1lfSwgYDtcbiAgY291bnRyeS5pbm5lckhUTUwgPSBsb2NhdGlvbi5jb3VudHJ5O1xuICBsZXQgdGltZXN0YW1wID0gbG9jYXRpb24ubG9jYWx0aW1lO1xuICBsZXQgZGF0ZSA9IG5ldyBEYXRlKHRpbWVzdGFtcCk7XG4gIGRhdGUgPSBkYXRlLnRvTG9jYWxlU3RyaW5nKGxvY2FsZSwgeyB0aW1lWm9uZTogXCJFdXJvcGUvTG9uZG9uXCIgfSkuc3BsaXQoXCIsXCIpO1xuICBkYXRlVHh0LmlubmVySFRNTCA9IGRhdGVbMF07XG4gIHRpbWUuaW5uZXJIVE1MID0gZGF0ZVsxXTtcbiAgZGF5V2Vlay5pbm5lckhUTUwgPSBcIkN1cnJlbnRseVwiO1xuICB0ZW1wX2MuaW5uZXJIVE1MID0gYCR7Y3VycmVudC50ZW1wX2N9ICYjODQ1MWA7XG4gIHRlbXBfZi5pbm5lckhUTUwgPSBgJHtjdXJyZW50LnRlbXBfZn0gJiM4NDU3YDtcbiAgLy8gSWNvbiBDb2RlXG4gIGxldCB3ZWF0aGVySWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjd2VhdGhlckljb25cIik7XG4gIGxldCBkYWlseSA9IGZhbHNlO1xuICBzZWxlY3RJY29uKGN1cnJlbnQsIHdlYXRoZXJJY29uKTtcbn07XG5cbmV4cG9ydCB7IHBvcHVsYXRlIH07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5pbXBvcnQgeyBmZXRjaFdlYXRoZXIgfSBmcm9tIFwiLi9mZXRjaFwiO1xuaW1wb3J0IHsgcG9wdWxhdGUgfSBmcm9tIFwiLi9wb3B1bGF0ZVwiO1xuXG5jb25zdCBsb2NhdGlvbklucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNsb2NhdGlvbklucHV0XCIpO1xuY29uc3Qgc2VhcmNoQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zdWJtaXRMb2NhdGlvblwiKTtcbmxldCBsb2NhdGlvblR4dCA9IFwiXCI7XG5jb25zdCBjb25kaXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbmRpdGlvblwiKTtcbmNvbnN0IGNpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NpdHlcIik7XG5jb25zdCBjb3VudHJ5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb3VudHJ5XCIpO1xuY29uc3QgZGF0ZVR4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZGF0ZVwiKTtcbmNvbnN0IHRpbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RpbWVcIik7XG5jb25zdCBkYXlzQXJyID0gW1xuICBcIk1vbmRheVwiLFxuICBcIlR1ZXNkYXlcIixcbiAgXCJXZWRuZXNkYXlcIixcbiAgXCJUaHVyc2RheVwiLFxuICBcIkZyaWRheVwiLFxuICBcIlNhdHVyZGF5XCIsXG4gIFwiU3VuZGF5XCIsXG5dO1xuY29uc3QgZGF5V2VlayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZGF5V2Vla1wiKTtcbmNvbnN0IHRlbXBfYyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGVtcF9jXCIpO1xuY29uc3QgdGVtcF9mID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0ZW1wX2ZcIik7XG5jb25zdCBidG5UZW1wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5idG5UZW1wXCIpO1xuXG4vLyBGZXRjaGluZyBEYXRhXG5cbmZldGNoV2VhdGhlcihcbiAgbG9jYXRpb25UeHQsXG4gIHBvcHVsYXRlLFxuICBkYXlzQXJyLFxuICBkYXRlVHh0LFxuICB0aW1lLFxuICBkYXlXZWVrLFxuICB0ZW1wX2MsXG4gIHRlbXBfZlxuKTtcblxuLy8gRnVuY3Rpb25zXG5cbi8vIEV2ZW50IExpc3RlbmVyc1xuXG5sb2NhdGlvbklucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoKSA9PiB7XG4gIGxvY2F0aW9uVHh0ID0gbG9jYXRpb25JbnB1dC52YWx1ZTtcbn0pO1xuXG5zZWFyY2hCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFzeW5jIGZ1bmN0aW9uICgpIHtcbiAgYXdhaXQgZmV0Y2hXZWF0aGVyKFxuICAgIGxvY2F0aW9uVHh0LFxuICAgIHBvcHVsYXRlLFxuICAgIGRheXNBcnIsXG4gICAgZGF0ZVR4dCxcbiAgICB0aW1lLFxuICAgIGRheVdlZWssXG4gICAgdGVtcF9jLFxuICAgIHRlbXBfZlxuICApO1xuICBsb2NhdGlvblR4dCA9IFwiXCI7XG4gIGxvY2F0aW9uSW5wdXQudmFsdWUgPSBcIlwiO1xufSk7XG5cbmJ0blRlbXAuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChmb3JlY2FzdFN3aXRjaCkgPT4ge1xuICBsZXQgdGVtcF9jMCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGVtcF9jMFwiKTtcbiAgbGV0IHRlbXBfYzEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RlbXBfYzFcIik7XG4gIGxldCB0ZW1wX2MyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0ZW1wX2MyXCIpO1xuICBsZXQgdGVtcF9mMCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGVtcF9mMFwiKTtcbiAgbGV0IHRlbXBfZjEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RlbXBfZjFcIik7XG4gIGxldCB0ZW1wX2YyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0ZW1wX2YyXCIpO1xuICBpZiAoYnRuVGVtcC5pZCA9PT0gXCJzd2l0Y2hGXCIpIHtcbiAgICBidG5UZW1wLmlubmVySFRNTCA9IFwiU3dpdGNoICYjODQ1MVwiO1xuICAgIGJ0blRlbXAuaWQgPSBcInN3aXRjaENcIjtcbiAgICB0ZW1wX2MuY2xhc3NMaXN0ID0gXCJoaWRkZW5cIjtcbiAgICB0ZW1wX2YuY2xhc3NMaXN0ID0gXCJcIjtcbiAgICB0ZW1wX2MwLmNsYXNzTGlzdCA9IFwiaGlkZGVuXCI7XG4gICAgdGVtcF9jMS5jbGFzc0xpc3QgPSBcImhpZGRlblwiO1xuICAgIHRlbXBfYzIuY2xhc3NMaXN0ID0gXCJoaWRkZW5cIjtcbiAgICB0ZW1wX2YwLmNsYXNzTGlzdCA9IFwiXCI7XG4gICAgdGVtcF9mMS5jbGFzc0xpc3QgPSBcIlwiO1xuICAgIHRlbXBfZjIuY2xhc3NMaXN0ID0gXCJcIjtcbiAgfSBlbHNlIHtcbiAgICBidG5UZW1wLmlubmVySFRNTCA9IFwiU3dpdGNoICYjODQ1N1wiO1xuICAgIGJ0blRlbXAuaWQgPSBcInN3aXRjaEZcIjtcbiAgICB0ZW1wX2MuY2xhc3NMaXN0ID0gXCJcIjtcbiAgICB0ZW1wX2YuY2xhc3NMaXN0ID0gXCJoaWRkZW5cIjtcbiAgICB0ZW1wX2MwLmNsYXNzTGlzdCA9IFwiXCI7XG4gICAgdGVtcF9jMS5jbGFzc0xpc3QgPSBcIlwiO1xuICAgIHRlbXBfYzIuY2xhc3NMaXN0ID0gXCJcIjtcbiAgICB0ZW1wX2YwLmNsYXNzTGlzdCA9IFwiaGlkZGVuXCI7XG4gICAgdGVtcF9mMS5jbGFzc0xpc3QgPSBcImhpZGRlblwiO1xuICAgIHRlbXBfZjIuY2xhc3NMaXN0ID0gXCJoaWRkZW5cIjtcbiAgfVxufSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=