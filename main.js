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
    grid-template-rows: 15% 45% 40%;
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
    font-size: 4rem;
    grid-row: 1/2;
    grid-column: 1/3;

}

#city {
    margin-top: 2rem;
    margin-left: 4rem;
}

#country {
    margin-top: 2rem;
}

.searchLocation {
    font-family: "InterExtraLight";
    margin-left: auto;
    display: flex;
    align-items: start;
    padding: 0;
    margin-top: 2rem;
    margin-right: 4rem;
    padding-top: 0.9rem;
    grid-column: 2/3;
    grid-row: 1/2;
}

#locationInput {
    font-family: "InterExtraLight";
    padding: 0.5rem;
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
    border-radius: 0.2rem 0rem 0rem 0.2rem
}

.submitLocation {
    padding: 0.1rem 0.2rem;
    font: inherit;
    color: inherit;
    cursor: pointer;
    font-size: 1.5rem;
    border: 1px var(--fontColor) solid;
    background-color: var(--bgColor);
    padding: 0.5rem 1.5rem;
    border-radius: 0rem 0.2rem 0.2rem 0rem
}


/* Condition */

.conditionPlace {
    font-family: "InterExtraLight";
    display: flex;
    flex-direction: column;
    align-items: start;
    font-size: 2.3rem;
    justify-content: start;
    grid-row: 2/3;
    grid-column: 1/2;
    margin-left: 4rem;
    gap: 2rem;
}

.iconCondition {
    display: flex;
    gap: 3rem;
    padding-left: 1rem;
    align-items: center;
}


.dateTime {
    font-family: "InterExtraLight";
    width: fit-content;
    font-size: 1.8rem;

}

.conditionContainer {
    display: flex;
    flex-direction: column;
}

.btnTemp {
    font-family: "InterExtraLight";
    color: inherit;
    cursor: pointer;
    font-size: 1.5rem;
    border: 1px var(--fontColor) solid;
    background-color: var(--bgColor);
    padding: 0.5rem 1.5rem;
    margin-top: 1rem;
    border-radius: 0.2rem;
}

#weatherIcon {
    height: 15rem;
    width: 15rem;
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
    grid-column: 1/2;
    margin-left: 4rem;
    padding-top: 1rem;
}


.daily>div {
    font-family: "InterExtraLight";
    grid-template-rows: 2/3;
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
}

#dailyHeader {
    grid-column: 1/4;
    grid-row: 1/2;
    font-size: 2.3rem;
}

.dailyDate {
    font-size: 1.8rem;
}

.dailyCondition {
    font-size: 1.8rem;
}

.dailyIcon {
    width: 5rem;
    height: 5rem;
}

/* Further Details */
.furtherDetails {
    display: grid;
    grid-template-columns: 5fr 5fr;
    grid-template-rows: 1fr 1fr 1fr 1fr;
    grid-row: 2/4;
    padding-left: 7rem;
}

#feels {
    grid-row: 1/2;
    grid-column: 2/3;
}

#humidity {
    grid-row: 2/3;
    grid-column: 2/3;
}

#chance {
    grid-row: 3/4;
    grid-column: 2/3;
}

#wind {
    grid-row: 4/5;
    grid-column: 2/3;
}

.furtherImg {
    width: 5rem;
    height: 5rem;
}

.furtherContainer {
    display: flex;
    gap: 1.5rem;
}

.furthertxt {
    font-size: 1.8rem;
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["html,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n    margin: 0;\n    padding: 0;\n    border: 0;\n    font-size: 100%;\n    font: inherit;\n    vertical-align: baseline;\n}\n\n.hidden {\n    display: none;\n}\n\n:root {\n    --bgColor: #d2d6d9;\n    --fontColor: #2b2e33;\n\n}\n\nul {\n    list-style: none;\n}\n\n@font-face {\n    font-family: \"InterThin\";\n    src: url(\"fonts/Inter-Thin.ttf\") format(\"truetype\");\n    font-weight: 100;\n}\n\n@font-face {\n    font-family: \"InterExtraLight\";\n    src: url(\"fonts/Inter-ExtraLight.ttf\") format(\"truetype\");\n    font-weight: 200;\n}\n\n@font-face {\n    font-family: \"InterLight\";\n    src: url(\"fonts/Inter-Light.ttf\") format(\"truetype\");\n    font-weight: 300;\n}\n\nbody {\n    font-family: \"InterLight\";\n    background-color: var(--bgColor);\n    color: var(--fontColor);\n    display: grid;\n    grid-template-rows: 15% 45% 40%;\n    grid-template-columns: 1fr 1fr;\n    height: 100vh;\n    width: 100vw;\n}\n\nhtml {\n    box-sizing: border-box;\n}\n\n*,\n*:before,\n*:after {\n    box-sizing: inherit;\n}\n\n/* Location */\n.location {\n    font-family: \"InterLight\";\n    display: flex;\n    flex-direction: row;\n    font-size: 4rem;\n    grid-row: 1/2;\n    grid-column: 1/3;\n\n}\n\n#city {\n    margin-top: 2rem;\n    margin-left: 4rem;\n}\n\n#country {\n    margin-top: 2rem;\n}\n\n.searchLocation {\n    font-family: \"InterExtraLight\";\n    margin-left: auto;\n    display: flex;\n    align-items: start;\n    padding: 0;\n    margin-top: 2rem;\n    margin-right: 4rem;\n    padding-top: 0.9rem;\n    grid-column: 2/3;\n    grid-row: 1/2;\n}\n\n#locationInput {\n    font-family: \"InterExtraLight\";\n    padding: 0.5rem;\n    margin: none;\n    box-shadow: none;\n    border-radius: none;\n    outline: inherit;\n    width: 25rem;\n    border-right: none;\n    border: 1px var(--fontColor) solid;\n    border-right: none;\n    background-color: var(--bgColor);\n    font-size: 1.5rem;\n    border-radius: 0.2rem 0rem 0rem 0.2rem\n}\n\n.submitLocation {\n    padding: 0.1rem 0.2rem;\n    font: inherit;\n    color: inherit;\n    cursor: pointer;\n    font-size: 1.5rem;\n    border: 1px var(--fontColor) solid;\n    background-color: var(--bgColor);\n    padding: 0.5rem 1.5rem;\n    border-radius: 0rem 0.2rem 0.2rem 0rem\n}\n\n\n/* Condition */\n\n.conditionPlace {\n    font-family: \"InterExtraLight\";\n    display: flex;\n    flex-direction: column;\n    align-items: start;\n    font-size: 2.3rem;\n    justify-content: start;\n    grid-row: 2/3;\n    grid-column: 1/2;\n    margin-left: 4rem;\n    gap: 2rem;\n}\n\n.iconCondition {\n    display: flex;\n    gap: 3rem;\n    padding-left: 1rem;\n    align-items: center;\n}\n\n\n.dateTime {\n    font-family: \"InterExtraLight\";\n    width: fit-content;\n    font-size: 1.8rem;\n\n}\n\n.conditionContainer {\n    display: flex;\n    flex-direction: column;\n}\n\n.btnTemp {\n    font-family: \"InterExtraLight\";\n    color: inherit;\n    cursor: pointer;\n    font-size: 1.5rem;\n    border: 1px var(--fontColor) solid;\n    background-color: var(--bgColor);\n    padding: 0.5rem 1.5rem;\n    margin-top: 1rem;\n    border-radius: 0.2rem;\n}\n\n#weatherIcon {\n    height: 15rem;\n    width: 15rem;\n}\n\n/* Daily */\n.daily {\n    width: 50vw;\n    height: 200px;\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr;\n    grid-template-rows: 50px 200px;\n    gap: 1.5rem;\n    grid-row: 3/4;\n    grid-column: 1/2;\n    margin-left: 4rem;\n    padding-top: 1rem;\n}\n\n\n.daily>div {\n    font-family: \"InterExtraLight\";\n    grid-template-rows: 2/3;\n    display: flex;\n    flex-direction: column;\n    gap: 1.2rem;\n}\n\n#dailyHeader {\n    grid-column: 1/4;\n    grid-row: 1/2;\n    font-size: 2.3rem;\n}\n\n.dailyDate {\n    font-size: 1.8rem;\n}\n\n.dailyCondition {\n    font-size: 1.8rem;\n}\n\n.dailyIcon {\n    width: 5rem;\n    height: 5rem;\n}\n\n/* Further Details */\n.furtherDetails {\n    display: grid;\n    grid-template-columns: 5fr 5fr;\n    grid-template-rows: 1fr 1fr 1fr 1fr;\n    grid-row: 2/4;\n    padding-left: 7rem;\n}\n\n#feels {\n    grid-row: 1/2;\n    grid-column: 2/3;\n}\n\n#humidity {\n    grid-row: 2/3;\n    grid-column: 2/3;\n}\n\n#chance {\n    grid-row: 3/4;\n    grid-column: 2/3;\n}\n\n#wind {\n    grid-row: 4/5;\n    grid-column: 2/3;\n}\n\n.furtherImg {\n    width: 5rem;\n    height: 5rem;\n}\n\n.furtherContainer {\n    display: flex;\n    gap: 1.5rem;\n}\n\n.furthertxt {\n    font-size: 1.8rem;\n}"],"sourceRoot":""}]);
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
  temp_f,
  feels_c,
  feels_f,
  humidity,
  chance,
  wind
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
      temp_f,
      feels_c,
      feels_f,
      humidity,
      chance,
      wind
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
      temp_f,
      feels_c,
      feels_f,
      humidity,
      chance,
      wind
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
  temp_f,
  feels_c,
  feels_f,
  humidity,
  chance,
  wind
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
    let day = date.getDay();

    let condition = forecastArr[i].day;
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
  feels_c.innerHTML = `${current.feelslike_c} &#8451`;
  feels_f.innerHTML = `${current.feelslike_f} &#8457`;
  humidity.innerHTML = `${current.humidity} &#x25`;
  chance.innerHTML = `${forecast.forecastday[0].day.daily_chance_of_rain} &#x25`;
  wind.innerHTML = `${current.wind_mph} mph`;
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
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const dayWeek = document.querySelector("#dayWeek");
const temp_c = document.querySelector("#temp_c");
const temp_f = document.querySelector("#temp_f");
// Further Details
const feels_c = document.querySelector("#feels_cinfo");
const feels_f = document.querySelector("#feels_finfo");
const humidity = document.querySelector("#humidityinfo");
const chance = document.querySelector("#chanceinfo");
const wind = document.querySelector("#windinfo");
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
  temp_f,
  feels_c,
  feels_f,
  humidity,
  chance,
  wind
);

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
    temp_f,
    feels_c,
    feels_f,
    humidity,
    chance,
    wind
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
    feels_c.classList = "hidden";
    feels_f.classList = "";
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
    feels_c.classList = "";
    feels_f.classList = "hidden";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLHVIQUF1QztBQUNuRiw0Q0FBNEMsbUlBQTZDO0FBQ3pGLDRDQUE0Qyx5SEFBd0M7QUFDcEYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRix5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLG1DQUFtQztBQUNsRDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLG1DQUFtQztBQUNsRDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLG1DQUFtQztBQUNsRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUMsT0FBTyxnS0FBZ0ssV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksY0FBYyxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sT0FBTyxZQUFZLE9BQU8sVUFBVSxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsVUFBVSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE1BQU0sTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxNQUFNLE9BQU8sV0FBVyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsUUFBUSxLQUFLLFlBQVksYUFBYSxjQUFjLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsT0FBTyxVQUFVLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxRQUFRLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUss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Qy9FeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNB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Ozs7V0NsQkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7Ozs7QUNBcUI7QUFDa0I7QUFDRDs7QUFFdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLG9EQUFZO0FBQ1o7QUFDQSxFQUFFLCtDQUFRO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0EsUUFBUSxvREFBWTtBQUNwQjtBQUNBLElBQUksK0NBQVE7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXJmb3JlY2FzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vd2VhdGhlcmZvcmVjYXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyZm9yZWNhc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3dlYXRoZXJmb3JlY2FzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3dlYXRoZXJmb3JlY2FzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly93ZWF0aGVyZm9yZWNhc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmZvcmVjYXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyZm9yZWNhc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmZvcmVjYXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3dlYXRoZXJmb3JlY2FzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3dlYXRoZXJmb3JlY2FzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3dlYXRoZXJmb3JlY2FzdC8uL3NyYy9mZXRjaC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyZm9yZWNhc3QvLi9zcmMvZnVuY3Rpb25hbGl0eS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyZm9yZWNhc3QvLi9zcmMvcG9wdWxhdGUuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmZvcmVjYXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYXRoZXJmb3JlY2FzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly93ZWF0aGVyZm9yZWNhc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYXRoZXJmb3JlY2FzdC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3dlYXRoZXJmb3JlY2FzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYXRoZXJmb3JlY2FzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYXRoZXJmb3JlY2FzdC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly93ZWF0aGVyZm9yZWNhc3Qvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vd2VhdGhlcmZvcmVjYXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly93ZWF0aGVyZm9yZWNhc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcImZvbnRzL0ludGVyLVRoaW4udHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiZm9udHMvSW50ZXItRXh0cmFMaWdodC50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCJmb250cy9JbnRlci1MaWdodC50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgaHRtbCxcbmJvZHksXG5kaXYsXG5zcGFuLFxuYXBwbGV0LFxub2JqZWN0LFxuaWZyYW1lLFxuaDEsXG5oMixcbmgzLFxuaDQsXG5oNSxcbmg2LFxucCxcbmJsb2NrcXVvdGUsXG5wcmUsXG5hLFxuYWJicixcbmFjcm9ueW0sXG5hZGRyZXNzLFxuYmlnLFxuY2l0ZSxcbmNvZGUsXG5kZWwsXG5kZm4sXG5lbSxcbmltZyxcbmlucyxcbmtiZCxcbnEsXG5zLFxuc2FtcCxcbnNtYWxsLFxuc3RyaWtlLFxuc3Ryb25nLFxuc3ViLFxuc3VwLFxudHQsXG52YXIsXG5iLFxudSxcbmksXG5jZW50ZXIsXG5kbCxcbmR0LFxuZGQsXG5vbCxcbnVsLFxubGksXG5maWVsZHNldCxcbmZvcm0sXG5sYWJlbCxcbmxlZ2VuZCxcbnRhYmxlLFxuY2FwdGlvbixcbnRib2R5LFxudGZvb3QsXG50aGVhZCxcbnRyLFxudGgsXG50ZCxcbmFydGljbGUsXG5hc2lkZSxcbmNhbnZhcyxcbmRldGFpbHMsXG5lbWJlZCxcbmZpZ3VyZSxcbmZpZ2NhcHRpb24sXG5mb290ZXIsXG5oZWFkZXIsXG5oZ3JvdXAsXG5tZW51LFxubmF2LFxub3V0cHV0LFxucnVieSxcbnNlY3Rpb24sXG5zdW1tYXJ5LFxudGltZSxcbm1hcmssXG5hdWRpbyxcbnZpZGVvIHtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBib3JkZXI6IDA7XG4gICAgZm9udC1zaXplOiAxMDAlO1xuICAgIGZvbnQ6IGluaGVyaXQ7XG4gICAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xufVxuXG4uaGlkZGVuIHtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuXG46cm9vdCB7XG4gICAgLS1iZ0NvbG9yOiAjZDJkNmQ5O1xuICAgIC0tZm9udENvbG9yOiAjMmIyZTMzO1xuXG59XG5cbnVsIHtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogXCJJbnRlclRoaW5cIjtcbiAgICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcbiAgICBmb250LXdlaWdodDogMTAwO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogXCJJbnRlckV4dHJhTGlnaHRcIjtcbiAgICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX199KSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcbiAgICBmb250LXdlaWdodDogMjAwO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogXCJJbnRlckxpZ2h0XCI7XG4gICAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19ffSkgZm9ybWF0KFwidHJ1ZXR5cGVcIik7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbn1cblxuYm9keSB7XG4gICAgZm9udC1mYW1pbHk6IFwiSW50ZXJMaWdodFwiO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnQ29sb3IpO1xuICAgIGNvbG9yOiB2YXIoLS1mb250Q29sb3IpO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxNSUgNDUlIDQwJTtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICB3aWR0aDogMTAwdnc7XG59XG5cbmh0bWwge1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbiosXG4qOmJlZm9yZSxcbio6YWZ0ZXIge1xuICAgIGJveC1zaXppbmc6IGluaGVyaXQ7XG59XG5cbi8qIExvY2F0aW9uICovXG4ubG9jYXRpb24ge1xuICAgIGZvbnQtZmFtaWx5OiBcIkludGVyTGlnaHRcIjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgZm9udC1zaXplOiA0cmVtO1xuICAgIGdyaWQtcm93OiAxLzI7XG4gICAgZ3JpZC1jb2x1bW46IDEvMztcblxufVxuXG4jY2l0eSB7XG4gICAgbWFyZ2luLXRvcDogMnJlbTtcbiAgICBtYXJnaW4tbGVmdDogNHJlbTtcbn1cblxuI2NvdW50cnkge1xuICAgIG1hcmdpbi10b3A6IDJyZW07XG59XG5cbi5zZWFyY2hMb2NhdGlvbiB7XG4gICAgZm9udC1mYW1pbHk6IFwiSW50ZXJFeHRyYUxpZ2h0XCI7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogc3RhcnQ7XG4gICAgcGFkZGluZzogMDtcbiAgICBtYXJnaW4tdG9wOiAycmVtO1xuICAgIG1hcmdpbi1yaWdodDogNHJlbTtcbiAgICBwYWRkaW5nLXRvcDogMC45cmVtO1xuICAgIGdyaWQtY29sdW1uOiAyLzM7XG4gICAgZ3JpZC1yb3c6IDEvMjtcbn1cblxuI2xvY2F0aW9uSW5wdXQge1xuICAgIGZvbnQtZmFtaWx5OiBcIkludGVyRXh0cmFMaWdodFwiO1xuICAgIHBhZGRpbmc6IDAuNXJlbTtcbiAgICBtYXJnaW46IG5vbmU7XG4gICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiBub25lO1xuICAgIG91dGxpbmU6IGluaGVyaXQ7XG4gICAgd2lkdGg6IDI1cmVtO1xuICAgIGJvcmRlci1yaWdodDogbm9uZTtcbiAgICBib3JkZXI6IDFweCB2YXIoLS1mb250Q29sb3IpIHNvbGlkO1xuICAgIGJvcmRlci1yaWdodDogbm9uZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZ0NvbG9yKTtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICBib3JkZXItcmFkaXVzOiAwLjJyZW0gMHJlbSAwcmVtIDAuMnJlbVxufVxuXG4uc3VibWl0TG9jYXRpb24ge1xuICAgIHBhZGRpbmc6IDAuMXJlbSAwLjJyZW07XG4gICAgZm9udDogaW5oZXJpdDtcbiAgICBjb2xvcjogaW5oZXJpdDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgYm9yZGVyOiAxcHggdmFyKC0tZm9udENvbG9yKSBzb2xpZDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZ0NvbG9yKTtcbiAgICBwYWRkaW5nOiAwLjVyZW0gMS41cmVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDByZW0gMC4ycmVtIDAuMnJlbSAwcmVtXG59XG5cblxuLyogQ29uZGl0aW9uICovXG5cbi5jb25kaXRpb25QbGFjZSB7XG4gICAgZm9udC1mYW1pbHk6IFwiSW50ZXJFeHRyYUxpZ2h0XCI7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBzdGFydDtcbiAgICBmb250LXNpemU6IDIuM3JlbTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xuICAgIGdyaWQtcm93OiAyLzM7XG4gICAgZ3JpZC1jb2x1bW46IDEvMjtcbiAgICBtYXJnaW4tbGVmdDogNHJlbTtcbiAgICBnYXA6IDJyZW07XG59XG5cbi5pY29uQ29uZGl0aW9uIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGdhcDogM3JlbTtcbiAgICBwYWRkaW5nLWxlZnQ6IDFyZW07XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuXG4uZGF0ZVRpbWUge1xuICAgIGZvbnQtZmFtaWx5OiBcIkludGVyRXh0cmFMaWdodFwiO1xuICAgIHdpZHRoOiBmaXQtY29udGVudDtcbiAgICBmb250LXNpemU6IDEuOHJlbTtcblxufVxuXG4uY29uZGl0aW9uQ29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5idG5UZW1wIHtcbiAgICBmb250LWZhbWlseTogXCJJbnRlckV4dHJhTGlnaHRcIjtcbiAgICBjb2xvcjogaW5oZXJpdDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgYm9yZGVyOiAxcHggdmFyKC0tZm9udENvbG9yKSBzb2xpZDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZ0NvbG9yKTtcbiAgICBwYWRkaW5nOiAwLjVyZW0gMS41cmVtO1xuICAgIG1hcmdpbi10b3A6IDFyZW07XG4gICAgYm9yZGVyLXJhZGl1czogMC4ycmVtO1xufVxuXG4jd2VhdGhlckljb24ge1xuICAgIGhlaWdodDogMTVyZW07XG4gICAgd2lkdGg6IDE1cmVtO1xufVxuXG4vKiBEYWlseSAqL1xuLmRhaWx5IHtcbiAgICB3aWR0aDogNTB2dztcbiAgICBoZWlnaHQ6IDIwMHB4O1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmcjtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDUwcHggMjAwcHg7XG4gICAgZ2FwOiAxLjVyZW07XG4gICAgZ3JpZC1yb3c6IDMvNDtcbiAgICBncmlkLWNvbHVtbjogMS8yO1xuICAgIG1hcmdpbi1sZWZ0OiA0cmVtO1xuICAgIHBhZGRpbmctdG9wOiAxcmVtO1xufVxuXG5cbi5kYWlseT5kaXYge1xuICAgIGZvbnQtZmFtaWx5OiBcIkludGVyRXh0cmFMaWdodFwiO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMi8zO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDEuMnJlbTtcbn1cblxuI2RhaWx5SGVhZGVyIHtcbiAgICBncmlkLWNvbHVtbjogMS80O1xuICAgIGdyaWQtcm93OiAxLzI7XG4gICAgZm9udC1zaXplOiAyLjNyZW07XG59XG5cbi5kYWlseURhdGUge1xuICAgIGZvbnQtc2l6ZTogMS44cmVtO1xufVxuXG4uZGFpbHlDb25kaXRpb24ge1xuICAgIGZvbnQtc2l6ZTogMS44cmVtO1xufVxuXG4uZGFpbHlJY29uIHtcbiAgICB3aWR0aDogNXJlbTtcbiAgICBoZWlnaHQ6IDVyZW07XG59XG5cbi8qIEZ1cnRoZXIgRGV0YWlscyAqL1xuLmZ1cnRoZXJEZXRhaWxzIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNWZyIDVmcjtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnIgMWZyIDFmcjtcbiAgICBncmlkLXJvdzogMi80O1xuICAgIHBhZGRpbmctbGVmdDogN3JlbTtcbn1cblxuI2ZlZWxzIHtcbiAgICBncmlkLXJvdzogMS8yO1xuICAgIGdyaWQtY29sdW1uOiAyLzM7XG59XG5cbiNodW1pZGl0eSB7XG4gICAgZ3JpZC1yb3c6IDIvMztcbiAgICBncmlkLWNvbHVtbjogMi8zO1xufVxuXG4jY2hhbmNlIHtcbiAgICBncmlkLXJvdzogMy80O1xuICAgIGdyaWQtY29sdW1uOiAyLzM7XG59XG5cbiN3aW5kIHtcbiAgICBncmlkLXJvdzogNC81O1xuICAgIGdyaWQtY29sdW1uOiAyLzM7XG59XG5cbi5mdXJ0aGVySW1nIHtcbiAgICB3aWR0aDogNXJlbTtcbiAgICBoZWlnaHQ6IDVyZW07XG59XG5cbi5mdXJ0aGVyQ29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGdhcDogMS41cmVtO1xufVxuXG4uZnVydGhlcnR4dCB7XG4gICAgZm9udC1zaXplOiAxLjhyZW07XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFpRkksU0FBUztJQUNULFVBQVU7SUFDVixTQUFTO0lBQ1QsZUFBZTtJQUNmLGFBQWE7SUFDYix3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLG9CQUFvQjs7QUFFeEI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSx3QkFBd0I7SUFDeEIsK0RBQW1EO0lBQ25ELGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLDhCQUE4QjtJQUM5QiwrREFBeUQ7SUFDekQsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLCtEQUFvRDtJQUNwRCxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsZ0NBQWdDO0lBQ2hDLHVCQUF1QjtJQUN2QixhQUFhO0lBQ2IsK0JBQStC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Y3QsXFxuaWZyYW1lLFxcbmgxLFxcbmgyLFxcbmgzLFxcbmg0LFxcbmg1LFxcbmg2LFxcbnAsXFxuYmxvY2txdW90ZSxcXG5wcmUsXFxuYSxcXG5hYmJyLFxcbmFjcm9ueW0sXFxuYWRkcmVzcyxcXG5iaWcsXFxuY2l0ZSxcXG5jb2RlLFxcbmRlbCxcXG5kZm4sXFxuZW0sXFxuaW1nLFxcbmlucyxcXG5rYmQsXFxucSxcXG5zLFxcbnNhbXAsXFxuc21hbGwsXFxuc3RyaWtlLFxcbnN0cm9uZyxcXG5zdWIsXFxuc3VwLFxcbnR0LFxcbnZhcixcXG5iLFxcbnUsXFxuaSxcXG5jZW50ZXIsXFxuZGwsXFxuZHQsXFxuZGQsXFxub2wsXFxudWwsXFxubGksXFxuZmllbGRzZXQsXFxuZm9ybSxcXG5sYWJlbCxcXG5sZWdlbmQsXFxudGFibGUsXFxuY2FwdGlvbixcXG50Ym9keSxcXG50Zm9vdCxcXG50aGVhZCxcXG50cixcXG50aCxcXG50ZCxcXG5hcnRpY2xlLFxcbmFzaWRlLFxcbmNhbnZhcyxcXG5kZXRhaWxzLFxcbmVtYmVkLFxcbmZpZ3VyZSxcXG5maWdjYXB0aW9uLFxcbmZvb3RlcixcXG5oZWFkZXIsXFxuaGdyb3VwLFxcbm1lbnUsXFxubmF2LFxcbm91dHB1dCxcXG5ydWJ5LFxcbnNlY3Rpb24sXFxuc3VtbWFyeSxcXG50aW1lLFxcbm1hcmssXFxuYXVkaW8sXFxudmlkZW8ge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGJvcmRlcjogMDtcXG4gICAgZm9udC1zaXplOiAxMDAlO1xcbiAgICBmb250OiBpbmhlcml0O1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcblxcbi5oaWRkZW4ge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG46cm9vdCB7XFxuICAgIC0tYmdDb2xvcjogI2QyZDZkOTtcXG4gICAgLS1mb250Q29sb3I6ICMyYjJlMzM7XFxuXFxufVxcblxcbnVsIHtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiSW50ZXJUaGluXFxcIjtcXG4gICAgc3JjOiB1cmwoXFxcImZvbnRzL0ludGVyLVRoaW4udHRmXFxcIikgZm9ybWF0KFxcXCJ0cnVldHlwZVxcXCIpO1xcbiAgICBmb250LXdlaWdodDogMTAwO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJJbnRlckV4dHJhTGlnaHRcXFwiO1xcbiAgICBzcmM6IHVybChcXFwiZm9udHMvSW50ZXItRXh0cmFMaWdodC50dGZcXFwiKSBmb3JtYXQoXFxcInRydWV0eXBlXFxcIik7XFxuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogXFxcIkludGVyTGlnaHRcXFwiO1xcbiAgICBzcmM6IHVybChcXFwiZm9udHMvSW50ZXItTGlnaHQudHRmXFxcIikgZm9ybWF0KFxcXCJ0cnVldHlwZVxcXCIpO1xcbiAgICBmb250LXdlaWdodDogMzAwO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJJbnRlckxpZ2h0XFxcIjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmdDb2xvcik7XFxuICAgIGNvbG9yOiB2YXIoLS1mb250Q29sb3IpO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDE1JSA0NSUgNDAlO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIHdpZHRoOiAxMDB2dztcXG59XFxuXFxuaHRtbCB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbiosXFxuKjpiZWZvcmUsXFxuKjphZnRlciB7XFxuICAgIGJveC1zaXppbmc6IGluaGVyaXQ7XFxufVxcblxcbi8qIExvY2F0aW9uICovXFxuLmxvY2F0aW9uIHtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJJbnRlckxpZ2h0XFxcIjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgZm9udC1zaXplOiA0cmVtO1xcbiAgICBncmlkLXJvdzogMS8yO1xcbiAgICBncmlkLWNvbHVtbjogMS8zO1xcblxcbn1cXG5cXG4jY2l0eSB7XFxuICAgIG1hcmdpbi10b3A6IDJyZW07XFxuICAgIG1hcmdpbi1sZWZ0OiA0cmVtO1xcbn1cXG5cXG4jY291bnRyeSB7XFxuICAgIG1hcmdpbi10b3A6IDJyZW07XFxufVxcblxcbi5zZWFyY2hMb2NhdGlvbiB7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiSW50ZXJFeHRyYUxpZ2h0XFxcIjtcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBzdGFydDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbWFyZ2luLXRvcDogMnJlbTtcXG4gICAgbWFyZ2luLXJpZ2h0OiA0cmVtO1xcbiAgICBwYWRkaW5nLXRvcDogMC45cmVtO1xcbiAgICBncmlkLWNvbHVtbjogMi8zO1xcbiAgICBncmlkLXJvdzogMS8yO1xcbn1cXG5cXG4jbG9jYXRpb25JbnB1dCB7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiSW50ZXJFeHRyYUxpZ2h0XFxcIjtcXG4gICAgcGFkZGluZzogMC41cmVtO1xcbiAgICBtYXJnaW46IG5vbmU7XFxuICAgIGJveC1zaGFkb3c6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IG5vbmU7XFxuICAgIG91dGxpbmU6IGluaGVyaXQ7XFxuICAgIHdpZHRoOiAyNXJlbTtcXG4gICAgYm9yZGVyLXJpZ2h0OiBub25lO1xcbiAgICBib3JkZXI6IDFweCB2YXIoLS1mb250Q29sb3IpIHNvbGlkO1xcbiAgICBib3JkZXItcmlnaHQ6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnQ29sb3IpO1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogMC4ycmVtIDByZW0gMHJlbSAwLjJyZW1cXG59XFxuXFxuLnN1Ym1pdExvY2F0aW9uIHtcXG4gICAgcGFkZGluZzogMC4xcmVtIDAuMnJlbTtcXG4gICAgZm9udDogaW5oZXJpdDtcXG4gICAgY29sb3I6IGluaGVyaXQ7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIGJvcmRlcjogMXB4IHZhcigtLWZvbnRDb2xvcikgc29saWQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnQ29sb3IpO1xcbiAgICBwYWRkaW5nOiAwLjVyZW0gMS41cmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAwcmVtIDAuMnJlbSAwLjJyZW0gMHJlbVxcbn1cXG5cXG5cXG4vKiBDb25kaXRpb24gKi9cXG5cXG4uY29uZGl0aW9uUGxhY2Uge1xcbiAgICBmb250LWZhbWlseTogXFxcIkludGVyRXh0cmFMaWdodFxcXCI7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBzdGFydDtcXG4gICAgZm9udC1zaXplOiAyLjNyZW07XFxuICAgIGp1c3RpZnktY29udGVudDogc3RhcnQ7XFxuICAgIGdyaWQtcm93OiAyLzM7XFxuICAgIGdyaWQtY29sdW1uOiAxLzI7XFxuICAgIG1hcmdpbi1sZWZ0OiA0cmVtO1xcbiAgICBnYXA6IDJyZW07XFxufVxcblxcbi5pY29uQ29uZGl0aW9uIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAzcmVtO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDFyZW07XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcblxcbi5kYXRlVGltZSB7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiSW50ZXJFeHRyYUxpZ2h0XFxcIjtcXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xcbiAgICBmb250LXNpemU6IDEuOHJlbTtcXG5cXG59XFxuXFxuLmNvbmRpdGlvbkNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5idG5UZW1wIHtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJJbnRlckV4dHJhTGlnaHRcXFwiO1xcbiAgICBjb2xvcjogaW5oZXJpdDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgYm9yZGVyOiAxcHggdmFyKC0tZm9udENvbG9yKSBzb2xpZDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmdDb2xvcik7XFxuICAgIHBhZGRpbmc6IDAuNXJlbSAxLjVyZW07XFxuICAgIG1hcmdpbi10b3A6IDFyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDAuMnJlbTtcXG59XFxuXFxuI3dlYXRoZXJJY29uIHtcXG4gICAgaGVpZ2h0OiAxNXJlbTtcXG4gICAgd2lkdGg6IDE1cmVtO1xcbn1cXG5cXG4vKiBEYWlseSAqL1xcbi5kYWlseSB7XFxuICAgIHdpZHRoOiA1MHZ3O1xcbiAgICBoZWlnaHQ6IDIwMHB4O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDUwcHggMjAwcHg7XFxuICAgIGdhcDogMS41cmVtO1xcbiAgICBncmlkLXJvdzogMy80O1xcbiAgICBncmlkLWNvbHVtbjogMS8yO1xcbiAgICBtYXJnaW4tbGVmdDogNHJlbTtcXG4gICAgcGFkZGluZy10b3A6IDFyZW07XFxufVxcblxcblxcbi5kYWlseT5kaXYge1xcbiAgICBmb250LWZhbWlseTogXFxcIkludGVyRXh0cmFMaWdodFxcXCI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMi8zO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDEuMnJlbTtcXG59XFxuXFxuI2RhaWx5SGVhZGVyIHtcXG4gICAgZ3JpZC1jb2x1bW46IDEvNDtcXG4gICAgZ3JpZC1yb3c6IDEvMjtcXG4gICAgZm9udC1zaXplOiAyLjNyZW07XFxufVxcblxcbi5kYWlseURhdGUge1xcbiAgICBmb250LXNpemU6IDEuOHJlbTtcXG59XFxuXFxuLmRhaWx5Q29uZGl0aW9uIHtcXG4gICAgZm9udC1zaXplOiAxLjhyZW07XFxufVxcblxcbi5kYWlseUljb24ge1xcbiAgICB3aWR0aDogNXJlbTtcXG4gICAgaGVpZ2h0OiA1cmVtO1xcbn1cXG5cXG4vKiBGdXJ0aGVyIERldGFpbHMgKi9cXG4uZnVydGhlckRldGFpbHMge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDVmciA1ZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmciAxZnIgMWZyO1xcbiAgICBncmlkLXJvdzogMi80O1xcbiAgICBwYWRkaW5nLWxlZnQ6IDdyZW07XFxufVxcblxcbiNmZWVscyB7XFxuICAgIGdyaWQtcm93OiAxLzI7XFxuICAgIGdyaWQtY29sdW1uOiAyLzM7XFxufVxcblxcbiNodW1pZGl0eSB7XFxuICAgIGdyaWQtcm93OiAyLzM7XFxuICAgIGdyaWQtY29sdW1uOiAyLzM7XFxufVxcblxcbiNjaGFuY2Uge1xcbiAgICBncmlkLXJvdzogMy80O1xcbiAgICBncmlkLWNvbHVtbjogMi8zO1xcbn1cXG5cXG4jd2luZCB7XFxuICAgIGdyaWQtcm93OiA0LzU7XFxuICAgIGdyaWQtY29sdW1uOiAyLzM7XFxufVxcblxcbi5mdXJ0aGVySW1nIHtcXG4gICAgd2lkdGg6IDVyZW07XFxuICAgIGhlaWdodDogNXJlbTtcXG59XFxuXFxuLmZ1cnRoZXJDb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDEuNXJlbTtcXG59XFxuXFxuLmZ1cnRoZXJ0eHQge1xcbiAgICBmb250LXNpemU6IDEuOHJlbTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyB1cHBlckNvbmRpdGlvblR4dCwgc2VsZWN0SWNvbiB9IGZyb20gXCIuL2Z1bmN0aW9uYWxpdHlcIjtcblxuY29uc3QgZmV0Y2hXZWF0aGVyID0gYXN5bmMgZnVuY3Rpb24gZ2V0V2VhdGhlckRhdGEoXG4gIGxvY2F0aW9uVHh0LFxuICBwb3B1bGF0ZSxcbiAgZGF5c0FycixcbiAgZGF0ZVR4dCxcbiAgdGltZSxcbiAgZGF5V2VlayxcbiAgdGVtcF9jLFxuICB0ZW1wX2YsXG4gIGZlZWxzX2MsXG4gIGZlZWxzX2YsXG4gIGh1bWlkaXR5LFxuICBjaGFuY2UsXG4gIHdpbmRcbikge1xuICBpZiAobG9jYXRpb25UeHQgPT09IFwiXCIpIHtcbiAgICBsZXQgY3VycmVudCA9IFwiXCI7XG4gICAgbGV0IGZvcmVjYXN0ID0gXCJcIjtcbiAgICBsZXQgbG9jYXRpb24gPSBcIlwiO1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG4gICAgICBcImh0dHA6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvZm9yZWNhc3QuanNvbj9rZXk9NGRhNDAzMjg2ZGQ2NGRjZmIwYzIwMDAxNDIzMzAwOCZxPUxvbmRvbiZkYXlzPTcmYXFpPXllcyZhbGVydHM9bm9cIixcbiAgICAgIHsgbW9kZTogXCJjb3JzXCIgfVxuICAgICk7XG4gICAgY29uc3Qgd2VhdGhlckRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgcG9wdWxhdGUoXG4gICAgICB3ZWF0aGVyRGF0YSxcbiAgICAgIGN1cnJlbnQsXG4gICAgICBmb3JlY2FzdCxcbiAgICAgIGxvY2F0aW9uLFxuICAgICAgc2VsZWN0SWNvbixcbiAgICAgIHVwcGVyQ29uZGl0aW9uVHh0LFxuICAgICAgZGF5c0FycixcbiAgICAgIGRhdGVUeHQsXG4gICAgICB0aW1lLFxuICAgICAgZGF5V2VlayxcbiAgICAgIHRlbXBfYyxcbiAgICAgIHRlbXBfZixcbiAgICAgIGZlZWxzX2MsXG4gICAgICBmZWVsc19mLFxuICAgICAgaHVtaWRpdHksXG4gICAgICBjaGFuY2UsXG4gICAgICB3aW5kXG4gICAgKTtcbiAgICBjb25zb2xlLmxvZyh3ZWF0aGVyRGF0YSk7XG4gICAgLy8gQ29weSBiZWxvdyB3aGVuIGZpbmlzaGVkXG4gIH0gZWxzZSB7XG4gICAgbGV0IGN1cnJlbnQgPSBcIlwiO1xuICAgIGxldCBmb3JlY2FzdCA9IFwiXCI7XG4gICAgbGV0IGxvY2F0aW9uID0gXCJcIjtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxuICAgICAgYGh0dHA6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvZm9yZWNhc3QuanNvbj9rZXk9NGRhNDAzMjg2ZGQ2NGRjZmIwYzIwMDAxNDIzMzAwOCZxPSR7bG9jYXRpb25UeHR9JmRheXM9NyZhcWk9eWVzJmFsZXJ0cz1ub2AsXG4gICAgICB7IG1vZGU6IFwiY29yc1wiIH1cbiAgICApO1xuICAgIGNvbnN0IHdlYXRoZXJEYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIHBvcHVsYXRlKFxuICAgICAgd2VhdGhlckRhdGEsXG4gICAgICBjdXJyZW50LFxuICAgICAgZm9yZWNhc3QsXG4gICAgICBsb2NhdGlvbixcbiAgICAgIHNlbGVjdEljb24sXG4gICAgICB1cHBlckNvbmRpdGlvblR4dCxcbiAgICAgIGRheXNBcnIsXG4gICAgICBkYXRlVHh0LFxuICAgICAgdGltZSxcbiAgICAgIGRheVdlZWssXG4gICAgICB0ZW1wX2MsXG4gICAgICB0ZW1wX2YsXG4gICAgICBmZWVsc19jLFxuICAgICAgZmVlbHNfZixcbiAgICAgIGh1bWlkaXR5LFxuICAgICAgY2hhbmNlLFxuICAgICAgd2luZFxuICAgICk7XG4gICAgY29uc29sZS5sb2cod2VhdGhlckRhdGEpO1xuICB9XG59O1xuXG5leHBvcnQgeyBmZXRjaFdlYXRoZXIgfTtcbiIsImNvbnN0IHNlbGVjdEljb24gPSBmdW5jdGlvbiAoY3VycmVudCwgd2VhdGhlckljb24sIGRhaWx5KSB7XG4gIGlmIChkYWlseSkge1xuICAgIGlmIChjdXJyZW50LmNvbmRpdGlvbi5jb2RlID09PSAxMDAwKSB7XG4gICAgICB3ZWF0aGVySWNvbi5zcmMgPSBcIndlYXRoZXJJY29ucy9zdW5ueS5zdmdcIjtcbiAgICB9IGVsc2UgaWYgKGN1cnJlbnQuY29uZGl0aW9uLmNvZGUgPT09IDEwMDMpIHtcbiAgICAgIHdlYXRoZXJJY29uLnNyYyA9IFwid2VhdGhlckljb25zL3BhcnRseUNsb3VkeURheS5zdmdcIjtcbiAgICB9IGVsc2UgaWYgKFxuICAgICAgY3VycmVudC5jb25kaXRpb24uY29kZSA9PT0gMTAwNiB8fFxuICAgICAgY3VycmVudC5jb25kaXRpb24uY29kZSA9PT0gMTAwOVxuICAgICkge1xuICAgICAgd2VhdGhlckljb24uc3JjID0gXCJ3ZWF0aGVySWNvbnMvY2xvdWR5LnN2Z1wiO1xuICAgIH0gZWxzZSBpZiAoY3VycmVudC5jb25kaXRpb24uY29kZSA9PT0gMTAzMCkge1xuICAgICAgd2VhdGhlckljb24uc3JjID0gXCJ3ZWF0aGVySWNvbnMvbWlzdC5zdmdcIjtcbiAgICB9IGVsc2UgaWYgKFxuICAgICAgY3VycmVudC5jb25kaXRpb24uY29kZSA9PT0gMTA2MyB8fFxuICAgICAgY3VycmVudC5jb25kaXRpb24uY29kZSA9PT0gMTE1MFxuICAgICkge1xuICAgICAgd2VhdGhlckljb24uc3JjID0gXCJ3ZWF0aGVySWNvbnMvcGF0Y2h5UmFpbkRheS5zdmdcIjtcbiAgICB9IGVsc2UgaWYgKFxuICAgICAgY3VycmVudC5jb25kaXRpb24uY29kZSA9PT0gMTA2NiB8fFxuICAgICAgY3VycmVudC5jb25kaXRpb24uY29kZSA9PT0gMTIxMFxuICAgICkge1xuICAgICAgd2VhdGhlckljb24uc3JjID0gXCJ3ZWF0aGVySWNvbnMvcGF0Y2h5U25vd0RheS5zdmdcIjtcbiAgICB9IGVsc2UgaWYgKGN1cnJlbnQuY29uZGl0aW9uLmNvZGUgPT09IDEwNjkpIHtcbiAgICAgIHdlYXRoZXJJY29uLnNyYyA9IFwid2VhdGhlckljb25zL3BhdGNoeVNsZWV0RGF5LnN2Z1wiO1xuICAgIH0gZWxzZSBpZiAoXG4gICAgICBjdXJyZW50LmNvbmRpdGlvbi5jb2RlID09PSAxMDcyIHx8XG4gICAgICBjdXJyZW50LmNvbmRpdGlvbi5jb2RlID09PSAxMTY4IHx8XG4gICAgICBjdXJyZW50LmNvbmRpdGlvbi5jb2RlID09PSAxMTk4IHx8XG4gICAgICBjdXJyZW50LmNvbmRpdGlvbi5jb2RlID09PSAxMjA0IHx8XG4gICAgICBjdXJyZW50LmNvbmRpdGlvbi5jb2RlID09PSAxMjQ5XG4gICAgKSB7XG4gICAgICB3ZWF0aGVySWNvbi5zcmMgPSBcIndlYXRoZXJJY29ucy9mZWV6aW5nRHJpenpsZS5zdmdcIjtcbiAgICB9IGVsc2UgaWYgKGN1cnJlbnQuY29uZGl0aW9uLmNvZGUgPT09IDEwODcpIHtcbiAgICAgIHdlYXRoZXJJY29uLnNyYyA9IFwid2VhdGhlckljb25zL3RodW5kZXJ5T3V0YnJlYWtzLnN2Z1wiO1xuICAgIH0gZWxzZSBpZiAoY3VycmVudC5jb25kaXRpb24uY29kZSA9PT0gMTExNCkge1xuICAgICAgd2VhdGhlckljb24uc3JjID0gXCJ3ZWF0aGVySWNvbnMvYmxvd2luZ1Nub3cuc3ZnXCI7XG4gICAgfSBlbHNlIGlmIChjdXJyZW50LmNvbmRpdGlvbi5jb2RlID09PSAxMTE3KSB7XG4gICAgICB3ZWF0aGVySWNvbi5zcmMgPSBcIndlYXRoZXJJY29ucy9ibGl6emFyZC5zdmdcIjtcbiAgICB9IGVsc2UgaWYgKGN1cnJlbnQuY29uZGl0aW9uLmNvZGUgPT09IDExMzUpIHtcbiAgICAgIHdlYXRoZXJJY29uLnNyYyA9IFwid2VhdGhlckljb25zL2ZvZy5zdmdcIjtcbiAgICB9IGVsc2UgaWYgKGN1cnJlbnQuY29uZGl0aW9uLmNvZGUgPT09IDExNDcpIHtcbiAgICAgIHdlYXRoZXJJY29uLnNyYyA9IFwid2VhdGhlckljb25zL2ZyZWV6aW5nRm9nLnN2Z1wiO1xuICAgIH0gZWxzZSBpZiAoY3VycmVudC5jb25kaXRpb24uY29kZSA9PT0gMTE1Mykge1xuICAgICAgd2VhdGhlckljb24uc3JjID0gXCJ3ZWF0aGVySWNvbnMvbGlnaHRSYWluLnN2Z1wiO1xuICAgIH0gZWxzZSBpZiAoXG4gICAgICBjdXJyZW50LmNvbmRpdGlvbi5jb2RlID09PSAxMTcxIHx8XG4gICAgICBjdXJyZW50LmNvbmRpdGlvbi5jb2RlID09PSAxMjAxIHx8XG4gICAgICBjdXJyZW50LmNvbmRpdGlvbi5jb2RlID09PSAxMjA3IHx8XG4gICAgICBjdXJyZW50LmNvbmRpdGlvbi5jb2RlID09PSAxMjUyXG4gICAgKSB7XG4gICAgICB3ZWF0aGVySWNvbi5zcmMgPSBcIndlYXRoZXJJY29ucy9oZWF2eUZyZWV6aW5nRHJpenpsZS5zdmdcIjtcbiAgICB9IGVsc2UgaWYgKFxuICAgICAgY3VycmVudC5jb25kaXRpb24uY29kZSA9PT0gMTE4MCB8fFxuICAgICAgY3VycmVudC5jb25kaXRpb24uY29kZSA9PT0gMTE4M1xuICAgICkge1xuICAgICAgd2VhdGhlckljb24uc3JjID0gXCJ3ZWF0aGVySWNvbnMvbGlnaHRSYWluLnN2Z1wiO1xuICAgIH0gZWxzZSBpZiAoXG4gICAgICBjdXJyZW50LmNvbmRpdGlvbi5jb2RlID09PSAxMTg2IHx8XG4gICAgICBjdXJyZW50LmNvbmRpdGlvbi5jb2RlID09PSAxMTg5XG4gICAgKSB7XG4gICAgICB3ZWF0aGVySWNvbi5zcmMgPSBcIndlYXRoZXJJY29ucy9tb2RlcmF0ZVJhaW4uc3ZnXCI7XG4gICAgfSBlbHNlIGlmIChcbiAgICAgIGN1cnJlbnQuY29uZGl0aW9uLmNvZGUgPT09IDExOTIgfHxcbiAgICAgIGN1cnJlbnQuY29uZGl0aW9uLmNvZGUgPT09IDExOTVcbiAgICApIHtcbiAgICAgIHdlYXRoZXJJY29uLnNyYyA9IFwid2VhdGhlckljb25zL2hlYXZ5UmFpbi5zdmdcIjtcbiAgICB9IGVsc2UgaWYgKFxuICAgICAgY3VycmVudC5jb25kaXRpb24uY29kZSA9PT0gMTIxMyB8fFxuICAgICAgY3VycmVudC5jb25kaXRpb24uY29kZSA9PT0gMTI1NVxuICAgICkge1xuICAgICAgd2VhdGhlckljb24uc3JjID0gXCJ3ZWF0aGVySWNvbnMvbGlnaHRTbm93LnN2Z1wiO1xuICAgIH0gZWxzZSBpZiAoXG4gICAgICBjdXJyZW50LmNvbmRpdGlvbi5jb2RlID09PSAxMjE2IHx8XG4gICAgICBjdXJyZW50LmNvbmRpdGlvbi5jb2RlID09PSAxMjE5IHx8XG4gICAgICBjdXJyZW50LmNvbmRpdGlvbi5jb2RlID09PSAxMjU4XG4gICAgKSB7XG4gICAgICB3ZWF0aGVySWNvbi5zcmMgPSBcIndlYXRoZXJJY29ucy9tb2RlcmF0ZVNub3cuc3ZnXCI7XG4gICAgfSBlbHNlIGlmIChcbiAgICAgIGN1cnJlbnQuY29uZGl0aW9uLmNvZGUgPT09IDEyMjIgfHxcbiAgICAgIGN1cnJlbnQuY29uZGl0aW9uLmNvZGUgPT09IDEyMjVcbiAgICApIHtcbiAgICAgIHdlYXRoZXJJY29uLnNyYyA9IFwid2VhdGhlckljb25zL2hlYXZ5U25vdy5zdmdcIjtcbiAgICB9IGVsc2UgaWYgKFxuICAgICAgY3VycmVudC5jb25kaXRpb24uY29kZSA9PT0gMTIzNyB8fFxuICAgICAgY3VycmVudC5jb25kaXRpb24uY29kZSA9PT0gMTI2MSB8fFxuICAgICAgY3VycmVudC5jb25kaXRpb24uY29kZSA9PT0gMTI2NFxuICAgICkge1xuICAgICAgd2VhdGhlckljb24uc3JjID0gXCJ3ZWF0aGVySWNvbnMvaWNlUGVsbGV0cy5zdmdcIjtcbiAgICB9IGVsc2UgaWYgKGN1cnJlbnQuY29uZGl0aW9uLmNvZGUgPT09IDEyNDApIHtcbiAgICAgIHdlYXRoZXJJY29uLnNyYyA9IFwid2VhdGhlckljb25zL2xpZ2h0UmFpblNob3dlci5zdmdcIjtcbiAgICB9IGVsc2UgaWYgKGN1cnJlbnQuY29uZGl0aW9uLmNvZGUgPT09IDEyNDMpIHtcbiAgICAgIHdlYXRoZXJJY29uLnNyYyA9IFwid2VhdGhlckljb25zL21vZGVyYXRlUmFpblNob3dlci5zdmdcIjtcbiAgICB9IGVsc2UgaWYgKGN1cnJlbnQuY29uZGl0aW9uLmNvZGUgPT09IDEyNDYpIHtcbiAgICAgIHdlYXRoZXJJY29uLnNyYyA9IFwid2VhdGhlckljb25zL3RvcnJlbnRpYWxSYWluU2hvd2VyLnN2Z1wiO1xuICAgIH0gZWxzZSBpZiAoY3VycmVudC5jb25kaXRpb24uY29kZSA9PT0gMTI3Mykge1xuICAgICAgd2VhdGhlckljb24uc3JjID0gXCJ3ZWF0aGVySWNvbnMvcGF0Y2h5TGlnaHRSYWluVGh1bmRlci5zdmdcIjtcbiAgICB9IGVsc2UgaWYgKGN1cnJlbnQuY29uZGl0aW9uLmNvZGUgPT09IDEyNzYpIHtcbiAgICAgIHdlYXRoZXJJY29uLnNyYyA9IFwid2VhdGhlckljb25zL3BhdGNoeUhlYXZ5UmFpblRodW5kZXIuc3ZnXCI7XG4gICAgfSBlbHNlIGlmIChcbiAgICAgIGN1cnJlbnQuY29uZGl0aW9uLmNvZGUgPT09IDEyNzkgfHxcbiAgICAgIGN1cnJlbnQuY29uZGl0aW9uLmNvZGUgPT09IDEyODJcbiAgICApIHtcbiAgICAgIHdlYXRoZXJJY29uLnNyYyA9IFwid2VhdGhlckljb25zL3BhdGNoeVNub3dUaHVuZGVyLnN2Z1wiO1xuICAgIH0gZWxzZSB7XG4gICAgICB3ZWF0aGVySWNvbi5zcmMgPSBjdXJyZW50LmNvbmRpdGlvbi5pY29uO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBpZiAoY3VycmVudC5jb25kaXRpb24uY29kZSA9PT0gMTAwMCAmJiBjdXJyZW50LmlzX2RheSkge1xuICAgICAgd2VhdGhlckljb24uc3JjID0gXCJ3ZWF0aGVySWNvbnMvc3Vubnkuc3ZnXCI7XG4gICAgfSBlbHNlIGlmIChjdXJyZW50LmNvbmRpdGlvbi5jb2RlID09PSAxMDAwICYmICFjdXJyZW50LmlzX2RheSkge1xuICAgICAgd2VhdGhlckljb24uc3JjID0gXCJ3ZWF0aGVySWNvbnMvY2xlYXIuc3ZnXCI7XG4gICAgfSBlbHNlIGlmIChjdXJyZW50LmNvbmRpdGlvbi5jb2RlID09PSAxMDAzICYmIGN1cnJlbnQuaXNfZGF5KSB7XG4gICAgICB3ZWF0aGVySWNvbi5zcmMgPSBcIndlYXRoZXJJY29ucy9wYXJ0bHlDbG91ZHlEYXkuc3ZnXCI7XG4gICAgfSBlbHNlIGlmIChjdXJyZW50LmNvbmRpdGlvbi5jb2RlID09PSAxMDAzICYmICFjdXJyZW50LmlzX2RheSkge1xuICAgICAgd2VhdGhlckljb24uc3JjID0gXCJ3ZWF0aGVySWNvbnMvcGFydGx5Q2xvdWR5TmlnaHQuc3ZnXCI7XG4gICAgfSBlbHNlIGlmIChcbiAgICAgIGN1cnJlbnQuY29uZGl0aW9uLmNvZGUgPT09IDEwMDYgfHxcbiAgICAgIGN1cnJlbnQuY29uZGl0aW9uLmNvZGUgPT09IDEwMDlcbiAgICApIHtcbiAgICAgIHdlYXRoZXJJY29uLnNyYyA9IFwid2VhdGhlckljb25zL2Nsb3VkeS5zdmdcIjtcbiAgICB9IGVsc2UgaWYgKGN1cnJlbnQuY29uZGl0aW9uLmNvZGUgPT09IDEwMzApIHtcbiAgICAgIHdlYXRoZXJJY29uLnNyYyA9IFwid2VhdGhlckljb25zL21pc3Quc3ZnXCI7XG4gICAgfSBlbHNlIGlmIChcbiAgICAgIChjdXJyZW50LmNvbmRpdGlvbi5jb2RlID09PSAxMDYzIHx8IGN1cnJlbnQuY29uZGl0aW9uLmNvZGUgPT09IDExNTApICYmXG4gICAgICBjdXJyZW50LmlzX2RheVxuICAgICkge1xuICAgICAgd2VhdGhlckljb24uc3JjID0gXCJ3ZWF0aGVySWNvbnMvcGF0Y2h5UmFpbkRheS5zdmdcIjtcbiAgICB9IGVsc2UgaWYgKFxuICAgICAgKGN1cnJlbnQuY29uZGl0aW9uLmNvZGUgPT09IDEwNjMgfHwgY3VycmVudC5jb25kaXRpb24uY29kZSA9PT0gMTE1MCkgJiZcbiAgICAgICFjdXJyZW50LmlzX2RheVxuICAgICkge1xuICAgICAgd2VhdGhlckljb24uc3JjID0gXCJ3ZWF0aGVySWNvbnMvcGF0Y2h5UmFpbk5pZ2h0LnN2Z1wiO1xuICAgIH0gZWxzZSBpZiAoXG4gICAgICAoY3VycmVudC5jb25kaXRpb24uY29kZSA9PT0gMTA2NiB8fCBjdXJyZW50LmNvbmRpdGlvbi5jb2RlID09PSAxMjEwKSAmJlxuICAgICAgY3VycmVudC5pc19kYXlcbiAgICApIHtcbiAgICAgIHdlYXRoZXJJY29uLnNyYyA9IFwid2VhdGhlckljb25zL3BhdGNoeVNub3dEYXkuc3ZnXCI7XG4gICAgfSBlbHNlIGlmIChcbiAgICAgIChjdXJyZW50LmNvbmRpdGlvbi5jb2RlID09PSAxMDY2IHx8IGN1cnJlbnQuY29uZGl0aW9uLmNvZGUgPT09IDEyMTApICYmXG4gICAgICAhY3VycmVudC5pc19kYXlcbiAgICApIHtcbiAgICAgIHdlYXRoZXJJY29uLnNyYyA9IFwid2VhdGhlckljb25zL3BhdGNoeVNub3dOaWdodC5zdmdcIjtcbiAgICB9IGVsc2UgaWYgKGN1cnJlbnQuY29uZGl0aW9uLmNvZGUgPT09IDEwNjkgJiYgY3VycmVudC5pc19kYXkpIHtcbiAgICAgIHdlYXRoZXJJY29uLnNyYyA9IFwid2VhdGhlckljb25zL3BhdGNoeVNsZWV0RGF5LnN2Z1wiO1xuICAgIH0gZWxzZSBpZiAoY3VycmVudC5jb25kaXRpb24uY29kZSA9PT0gMTA2OSAmJiAhY3VycmVudC5pc19kYXkpIHtcbiAgICAgIHdlYXRoZXJJY29uLnNyYyA9IFwid2VhdGhlckljb25zL3BhdGNoeVNsZWV0TmlnaHQuc3ZnXCI7XG4gICAgfSBlbHNlIGlmIChcbiAgICAgIGN1cnJlbnQuY29uZGl0aW9uLmNvZGUgPT09IDEwNzIgfHxcbiAgICAgIGN1cnJlbnQuY29uZGl0aW9uLmNvZGUgPT09IDExNjggfHxcbiAgICAgIGN1cnJlbnQuY29uZGl0aW9uLmNvZGUgPT09IDExOTggfHxcbiAgICAgIGN1cnJlbnQuY29uZGl0aW9uLmNvZGUgPT09IDEyMDQgfHxcbiAgICAgIGN1cnJlbnQuY29uZGl0aW9uLmNvZGUgPT09IDEyNDlcbiAgICApIHtcbiAgICAgIHdlYXRoZXJJY29uLnNyYyA9IFwid2VhdGhlckljb25zL2ZlZXppbmdEcml6emxlLnN2Z1wiO1xuICAgIH0gZWxzZSBpZiAoY3VycmVudC5jb25kaXRpb24uY29kZSA9PT0gMTA4Nykge1xuICAgICAgd2VhdGhlckljb24uc3JjID0gXCJ3ZWF0aGVySWNvbnMvdGh1bmRlcnlPdXRicmVha3Muc3ZnXCI7XG4gICAgfSBlbHNlIGlmIChjdXJyZW50LmNvbmRpdGlvbi5jb2RlID09PSAxMTE0KSB7XG4gICAgICB3ZWF0aGVySWNvbi5zcmMgPSBcIndlYXRoZXJJY29ucy9ibG93aW5nU25vdy5zdmdcIjtcbiAgICB9IGVsc2UgaWYgKGN1cnJlbnQuY29uZGl0aW9uLmNvZGUgPT09IDExMTcpIHtcbiAgICAgIHdlYXRoZXJJY29uLnNyYyA9IFwid2VhdGhlckljb25zL2JsaXp6YXJkLnN2Z1wiO1xuICAgIH0gZWxzZSBpZiAoY3VycmVudC5jb25kaXRpb24uY29kZSA9PT0gMTEzNSkge1xuICAgICAgd2VhdGhlckljb24uc3JjID0gXCJ3ZWF0aGVySWNvbnMvZm9nLnN2Z1wiO1xuICAgIH0gZWxzZSBpZiAoY3VycmVudC5jb25kaXRpb24uY29kZSA9PT0gMTE0Nykge1xuICAgICAgd2VhdGhlckljb24uc3JjID0gXCJ3ZWF0aGVySWNvbnMvZnJlZXppbmdGb2cuc3ZnXCI7XG4gICAgfSBlbHNlIGlmIChjdXJyZW50LmNvbmRpdGlvbi5jb2RlID09PSAxMTUzKSB7XG4gICAgICB3ZWF0aGVySWNvbi5zcmMgPSBcIndlYXRoZXJJY29ucy9saWdodFJhaW4uc3ZnXCI7XG4gICAgfSBlbHNlIGlmIChcbiAgICAgIGN1cnJlbnQuY29uZGl0aW9uLmNvZGUgPT09IDExNzEgfHxcbiAgICAgIGN1cnJlbnQuY29uZGl0aW9uLmNvZGUgPT09IDEyMDEgfHxcbiAgICAgIGN1cnJlbnQuY29uZGl0aW9uLmNvZGUgPT09IDEyMDcgfHxcbiAgICAgIGN1cnJlbnQuY29uZGl0aW9uLmNvZGUgPT09IDEyNTJcbiAgICApIHtcbiAgICAgIHdlYXRoZXJJY29uLnNyYyA9IFwid2VhdGhlckljb25zL2hlYXZ5RnJlZXppbmdEcml6emxlLnN2Z1wiO1xuICAgIH0gZWxzZSBpZiAoXG4gICAgICBjdXJyZW50LmNvbmRpdGlvbi5jb2RlID09PSAxMTgwIHx8XG4gICAgICBjdXJyZW50LmNvbmRpdGlvbi5jb2RlID09PSAxMTgzXG4gICAgKSB7XG4gICAgICB3ZWF0aGVySWNvbi5zcmMgPSBcIndlYXRoZXJJY29ucy9saWdodFJhaW4uc3ZnXCI7XG4gICAgfSBlbHNlIGlmIChcbiAgICAgIGN1cnJlbnQuY29uZGl0aW9uLmNvZGUgPT09IDExODYgfHxcbiAgICAgIGN1cnJlbnQuY29uZGl0aW9uLmNvZGUgPT09IDExODlcbiAgICApIHtcbiAgICAgIHdlYXRoZXJJY29uLnNyYyA9IFwid2VhdGhlckljb25zL21vZGVyYXRlUmFpbi5zdmdcIjtcbiAgICB9IGVsc2UgaWYgKFxuICAgICAgY3VycmVudC5jb25kaXRpb24uY29kZSA9PT0gMTE5MiB8fFxuICAgICAgY3VycmVudC5jb25kaXRpb24uY29kZSA9PT0gMTE5NVxuICAgICkge1xuICAgICAgd2VhdGhlckljb24uc3JjID0gXCJ3ZWF0aGVySWNvbnMvaGVhdnlSYWluLnN2Z1wiO1xuICAgIH0gZWxzZSBpZiAoXG4gICAgICBjdXJyZW50LmNvbmRpdGlvbi5jb2RlID09PSAxMjEzIHx8XG4gICAgICBjdXJyZW50LmNvbmRpdGlvbi5jb2RlID09PSAxMjU1XG4gICAgKSB7XG4gICAgICB3ZWF0aGVySWNvbi5zcmMgPSBcIndlYXRoZXJJY29ucy9saWdodFNub3cuc3ZnXCI7XG4gICAgfSBlbHNlIGlmIChcbiAgICAgIGN1cnJlbnQuY29uZGl0aW9uLmNvZGUgPT09IDEyMTYgfHxcbiAgICAgIGN1cnJlbnQuY29uZGl0aW9uLmNvZGUgPT09IDEyMTkgfHxcbiAgICAgIGN1cnJlbnQuY29uZGl0aW9uLmNvZGUgPT09IDEyNThcbiAgICApIHtcbiAgICAgIHdlYXRoZXJJY29uLnNyYyA9IFwid2VhdGhlckljb25zL21vZGVyYXRlU25vdy5zdmdcIjtcbiAgICB9IGVsc2UgaWYgKFxuICAgICAgY3VycmVudC5jb25kaXRpb24uY29kZSA9PT0gMTIyMiB8fFxuICAgICAgY3VycmVudC5jb25kaXRpb24uY29kZSA9PT0gMTIyNVxuICAgICkge1xuICAgICAgd2VhdGhlckljb24uc3JjID0gXCJ3ZWF0aGVySWNvbnMvaGVhdnlTbm93LnN2Z1wiO1xuICAgIH0gZWxzZSBpZiAoXG4gICAgICBjdXJyZW50LmNvbmRpdGlvbi5jb2RlID09PSAxMjM3IHx8XG4gICAgICBjdXJyZW50LmNvbmRpdGlvbi5jb2RlID09PSAxMjYxIHx8XG4gICAgICBjdXJyZW50LmNvbmRpdGlvbi5jb2RlID09PSAxMjY0XG4gICAgKSB7XG4gICAgICB3ZWF0aGVySWNvbi5zcmMgPSBcIndlYXRoZXJJY29ucy9pY2VQZWxsZXRzLnN2Z1wiO1xuICAgIH0gZWxzZSBpZiAoY3VycmVudC5jb25kaXRpb24uY29kZSA9PT0gMTI0MCkge1xuICAgICAgd2VhdGhlckljb24uc3JjID0gXCJ3ZWF0aGVySWNvbnMvbGlnaHRSYWluU2hvd2VyLnN2Z1wiO1xuICAgIH0gZWxzZSBpZiAoY3VycmVudC5jb25kaXRpb24uY29kZSA9PT0gMTI0Mykge1xuICAgICAgd2VhdGhlckljb24uc3JjID0gXCJ3ZWF0aGVySWNvbnMvbW9kZXJhdGVSYWluU2hvd2VyLnN2Z1wiO1xuICAgIH0gZWxzZSBpZiAoY3VycmVudC5jb25kaXRpb24uY29kZSA9PT0gMTI0Nikge1xuICAgICAgd2VhdGhlckljb24uc3JjID0gXCJ3ZWF0aGVySWNvbnMvdG9ycmVudGlhbFJhaW5TaG93ZXIuc3ZnXCI7XG4gICAgfSBlbHNlIGlmIChjdXJyZW50LmNvbmRpdGlvbi5jb2RlID09PSAxMjczKSB7XG4gICAgICB3ZWF0aGVySWNvbi5zcmMgPSBcIndlYXRoZXJJY29ucy9wYXRjaHlMaWdodFJhaW5UaHVuZGVyLnN2Z1wiO1xuICAgIH0gZWxzZSBpZiAoY3VycmVudC5jb25kaXRpb24uY29kZSA9PT0gMTI3Nikge1xuICAgICAgd2VhdGhlckljb24uc3JjID0gXCJ3ZWF0aGVySWNvbnMvcGF0Y2h5SGVhdnlSYWluVGh1bmRlci5zdmdcIjtcbiAgICB9IGVsc2UgaWYgKFxuICAgICAgY3VycmVudC5jb25kaXRpb24uY29kZSA9PT0gMTI3OSB8fFxuICAgICAgY3VycmVudC5jb25kaXRpb24uY29kZSA9PT0gMTI4MlxuICAgICkge1xuICAgICAgd2VhdGhlckljb24uc3JjID0gXCJ3ZWF0aGVySWNvbnMvcGF0Y2h5U25vd1RodW5kZXIuc3ZnXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIHdlYXRoZXJJY29uLnNyYyA9IGN1cnJlbnQuY29uZGl0aW9uLmljb247XG4gICAgfVxuICB9XG59O1xuXG5jb25zdCB1cHBlckNvbmRpdGlvblR4dCA9IGZ1bmN0aW9uIChjdXJyZW50KSB7XG4gIGxldCBjb25kaXRpb25TdHIgPSBjdXJyZW50LmNvbmRpdGlvbi50ZXh0O1xuICBsZXQgYXJyID0gY29uZGl0aW9uU3RyLnNwbGl0KFwiIFwiKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcbiAgICBhcnJbaV0gPSBhcnJbaV1bMF0udG9VcHBlckNhc2UoKSArIGFycltpXS5zdWJzdHIoMSk7XG4gIH1cbiAgY29uZGl0aW9uU3RyID0gYXJyLmpvaW4oXCIgXCIpO1xuICByZXR1cm4gY29uZGl0aW9uU3RyO1xufTtcblxuZXhwb3J0IHsgc2VsZWN0SWNvbiwgdXBwZXJDb25kaXRpb25UeHQgfTtcbiIsImNvbnN0IHBvcHVsYXRlID0gYXN5bmMgZnVuY3Rpb24gKFxuICB3ZWF0aGVyRGF0YSxcbiAgY3VycmVudCxcbiAgZm9yZWNhc3QsXG4gIGxvY2F0aW9uLFxuICBzZWxlY3RJY29uLFxuICB1cHBlckNvbmRpdGlvblR4dCxcbiAgZGF5c0FycixcbiAgZGF0ZVR4dCxcbiAgdGltZSxcbiAgZGF5V2VlayxcbiAgdGVtcF9jLFxuICB0ZW1wX2YsXG4gIGZlZWxzX2MsXG4gIGZlZWxzX2YsXG4gIGh1bWlkaXR5LFxuICBjaGFuY2UsXG4gIHdpbmRcbikge1xuICBjdXJyZW50ID0gYXdhaXQgd2VhdGhlckRhdGEuY3VycmVudDtcbiAgZm9yZWNhc3QgPSBhd2FpdCB3ZWF0aGVyRGF0YS5mb3JlY2FzdDtcbiAgbG9jYXRpb24gPSBhd2FpdCB3ZWF0aGVyRGF0YS5sb2NhdGlvbjtcbiAgY29uc3QgbG9jYWxlID0gXCJlbi1HQlwiO1xuXG4gIGxldCBmb3JlY2FzdEFyciA9IGZvcmVjYXN0LmZvcmVjYXN0ZGF5O1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGZvcmVjYXN0QXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgbGV0IGZvcmVjYXN0ID0gZm9yZWNhc3RBcnJbaV0uZGF5O1xuICAgIGxldCBkYXRlRGFpbHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjZGF0ZSR7aX1gKTtcbiAgICBsZXQgZGF5V2VlayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNkYXlXZWVrJHtpfWApO1xuICAgIGxldCBjb25kaXRpb25EYWlseSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNjb25kaXRpb24ke2l9YCk7XG4gICAgbGV0IHdlYXRoZXJJY29uRGFpbHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjd2VhdGhlckljb24ke2l9YCk7XG4gICAgbGV0IHRlbXBfY0RhaWx5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI3RlbXBfYyR7aX1gKTtcbiAgICBsZXQgdGVtcF9mRGFpbHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjdGVtcF9mJHtpfWApO1xuXG4gICAgLy8gRGF0ZSB0byBVSyBmb3JtYXRcbiAgICBsZXQgdGltZXN0YW1wID0gZm9yZWNhc3RBcnJbaV0uZGF0ZTtcbiAgICBsZXQgZGF0ZSA9IG5ldyBEYXRlKHRpbWVzdGFtcCk7XG4gICAgbGV0IGRheSA9IGRhdGUuZ2V0RGF5KCk7XG5cbiAgICBsZXQgY29uZGl0aW9uID0gZm9yZWNhc3RBcnJbaV0uZGF5O1xuICAgIGkgPT09IDBcbiAgICAgID8gKGRheVdlZWsuaW5uZXJIVE1MID0gXCJUb2RheVwiKVxuICAgICAgOiAoZGF5V2Vlay5pbm5lckhUTUwgPSBkYXlzQXJyW2RheV0pO1xuICAgIGRhdGUgPSBkYXRlXG4gICAgICAudG9Mb2NhbGVTdHJpbmcobG9jYWxlLCB7IHRpbWVab25lOiBcIkV1cm9wZS9Mb25kb25cIiB9KVxuICAgICAgLnNwbGl0KFwiLFwiKTtcbiAgICBkYXRlRGFpbHkuaW5uZXJIVE1MID0gZGF0ZVswXTtcbiAgICBsZXQgY29uZGl0aW9udHh0ID0gYXdhaXQgdXBwZXJDb25kaXRpb25UeHQoY29uZGl0aW9uKTtcbiAgICBjb25kaXRpb25EYWlseS5pbm5lckhUTUwgPSBjb25kaXRpb250eHQ7XG4gICAgdGVtcF9jRGFpbHkuaW5uZXJIVE1MID0gYCR7Zm9yZWNhc3RBcnJbaV0uZGF5LmF2Z3RlbXBfY30gJiM4NDUxYDtcbiAgICB0ZW1wX2ZEYWlseS5pbm5lckhUTUwgPSBgJHtmb3JlY2FzdEFycltpXS5kYXkuYXZndGVtcF9mfSAmIzg0NTdgO1xuICAgIGxldCBkYWlseSA9IHRydWU7XG4gICAgc2VsZWN0SWNvbihmb3JlY2FzdCwgd2VhdGhlckljb25EYWlseSwgZGFpbHkpO1xuICB9XG4gIC8vIFVwZGF0ZSBDb25kaXRpb25cbiAgbGV0IGNvbmRpdGlvbnR4dCA9IGF3YWl0IHVwcGVyQ29uZGl0aW9uVHh0KGN1cnJlbnQpO1xuICBjb25kaXRpb24uaW5uZXJIVE1MID0gY29uZGl0aW9udHh0O1xuICBjaXR5LmlubmVySFRNTCA9IGAke2xvY2F0aW9uLm5hbWV9LCBgO1xuICBjb3VudHJ5LmlubmVySFRNTCA9IGxvY2F0aW9uLmNvdW50cnk7XG4gIGxldCB0aW1lc3RhbXAgPSBsb2NhdGlvbi5sb2NhbHRpbWU7XG4gIGxldCBkYXRlID0gbmV3IERhdGUodGltZXN0YW1wKTtcbiAgZGF0ZSA9IGRhdGUudG9Mb2NhbGVTdHJpbmcobG9jYWxlLCB7IHRpbWVab25lOiBcIkV1cm9wZS9Mb25kb25cIiB9KS5zcGxpdChcIixcIik7XG4gIGRhdGVUeHQuaW5uZXJIVE1MID0gZGF0ZVswXTtcbiAgdGltZS5pbm5lckhUTUwgPSBkYXRlWzFdO1xuICBkYXlXZWVrLmlubmVySFRNTCA9IFwiQ3VycmVudGx5XCI7XG4gIHRlbXBfYy5pbm5lckhUTUwgPSBgJHtjdXJyZW50LnRlbXBfY30gJiM4NDUxYDtcbiAgdGVtcF9mLmlubmVySFRNTCA9IGAke2N1cnJlbnQudGVtcF9mfSAmIzg0NTdgO1xuICBmZWVsc19jLmlubmVySFRNTCA9IGAke2N1cnJlbnQuZmVlbHNsaWtlX2N9ICYjODQ1MWA7XG4gIGZlZWxzX2YuaW5uZXJIVE1MID0gYCR7Y3VycmVudC5mZWVsc2xpa2VfZn0gJiM4NDU3YDtcbiAgaHVtaWRpdHkuaW5uZXJIVE1MID0gYCR7Y3VycmVudC5odW1pZGl0eX0gJiN4MjVgO1xuICBjaGFuY2UuaW5uZXJIVE1MID0gYCR7Zm9yZWNhc3QuZm9yZWNhc3RkYXlbMF0uZGF5LmRhaWx5X2NoYW5jZV9vZl9yYWlufSAmI3gyNWA7XG4gIHdpbmQuaW5uZXJIVE1MID0gYCR7Y3VycmVudC53aW5kX21waH0gbXBoYDtcbiAgLy8gSWNvbiBDb2RlXG4gIGxldCB3ZWF0aGVySWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjd2VhdGhlckljb25cIik7XG4gIGxldCBkYWlseSA9IGZhbHNlO1xuICBzZWxlY3RJY29uKGN1cnJlbnQsIHdlYXRoZXJJY29uKTtcbn07XG5cbmV4cG9ydCB7IHBvcHVsYXRlIH07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5pbXBvcnQgeyBmZXRjaFdlYXRoZXIgfSBmcm9tIFwiLi9mZXRjaFwiO1xuaW1wb3J0IHsgcG9wdWxhdGUgfSBmcm9tIFwiLi9wb3B1bGF0ZVwiO1xuXG5jb25zdCBsb2NhdGlvbklucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNsb2NhdGlvbklucHV0XCIpO1xuY29uc3Qgc2VhcmNoQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zdWJtaXRMb2NhdGlvblwiKTtcbmxldCBsb2NhdGlvblR4dCA9IFwiXCI7XG5jb25zdCBjb25kaXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbmRpdGlvblwiKTtcbmNvbnN0IGNpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NpdHlcIik7XG5jb25zdCBjb3VudHJ5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb3VudHJ5XCIpO1xuY29uc3QgZGF0ZVR4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZGF0ZVwiKTtcbmNvbnN0IHRpbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RpbWVcIik7XG5jb25zdCBkYXlzQXJyID0gW1xuICBcIlN1bmRheVwiLFxuICBcIk1vbmRheVwiLFxuICBcIlR1ZXNkYXlcIixcbiAgXCJXZWRuZXNkYXlcIixcbiAgXCJUaHVyc2RheVwiLFxuICBcIkZyaWRheVwiLFxuICBcIlNhdHVyZGF5XCIsXG5dO1xuY29uc3QgZGF5V2VlayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZGF5V2Vla1wiKTtcbmNvbnN0IHRlbXBfYyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGVtcF9jXCIpO1xuY29uc3QgdGVtcF9mID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0ZW1wX2ZcIik7XG4vLyBGdXJ0aGVyIERldGFpbHNcbmNvbnN0IGZlZWxzX2MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2ZlZWxzX2NpbmZvXCIpO1xuY29uc3QgZmVlbHNfZiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZmVlbHNfZmluZm9cIik7XG5jb25zdCBodW1pZGl0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjaHVtaWRpdHlpbmZvXCIpO1xuY29uc3QgY2hhbmNlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjaGFuY2VpbmZvXCIpO1xuY29uc3Qgd2luZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjd2luZGluZm9cIik7XG5jb25zdCBidG5UZW1wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5idG5UZW1wXCIpO1xuXG4vLyBGZXRjaGluZyBEYXRhXG5cbmZldGNoV2VhdGhlcihcbiAgbG9jYXRpb25UeHQsXG4gIHBvcHVsYXRlLFxuICBkYXlzQXJyLFxuICBkYXRlVHh0LFxuICB0aW1lLFxuICBkYXlXZWVrLFxuICB0ZW1wX2MsXG4gIHRlbXBfZixcbiAgZmVlbHNfYyxcbiAgZmVlbHNfZixcbiAgaHVtaWRpdHksXG4gIGNoYW5jZSxcbiAgd2luZFxuKTtcblxuLy8gRXZlbnQgTGlzdGVuZXJzXG5cbmxvY2F0aW9uSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsICgpID0+IHtcbiAgbG9jYXRpb25UeHQgPSBsb2NhdGlvbklucHV0LnZhbHVlO1xufSk7XG5cbnNlYXJjaEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYXN5bmMgZnVuY3Rpb24gKCkge1xuICBhd2FpdCBmZXRjaFdlYXRoZXIoXG4gICAgbG9jYXRpb25UeHQsXG4gICAgcG9wdWxhdGUsXG4gICAgZGF5c0FycixcbiAgICBkYXRlVHh0LFxuICAgIHRpbWUsXG4gICAgZGF5V2VlayxcbiAgICB0ZW1wX2MsXG4gICAgdGVtcF9mLFxuICAgIGZlZWxzX2MsXG4gICAgZmVlbHNfZixcbiAgICBodW1pZGl0eSxcbiAgICBjaGFuY2UsXG4gICAgd2luZFxuICApO1xuICBsb2NhdGlvblR4dCA9IFwiXCI7XG4gIGxvY2F0aW9uSW5wdXQudmFsdWUgPSBcIlwiO1xufSk7XG5cbmJ0blRlbXAuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChmb3JlY2FzdFN3aXRjaCkgPT4ge1xuICBsZXQgdGVtcF9jMCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGVtcF9jMFwiKTtcbiAgbGV0IHRlbXBfYzEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RlbXBfYzFcIik7XG4gIGxldCB0ZW1wX2MyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0ZW1wX2MyXCIpO1xuICBsZXQgdGVtcF9mMCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGVtcF9mMFwiKTtcbiAgbGV0IHRlbXBfZjEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RlbXBfZjFcIik7XG4gIGxldCB0ZW1wX2YyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0ZW1wX2YyXCIpO1xuICBpZiAoYnRuVGVtcC5pZCA9PT0gXCJzd2l0Y2hGXCIpIHtcbiAgICBidG5UZW1wLmlubmVySFRNTCA9IFwiU3dpdGNoICYjODQ1MVwiO1xuICAgIGJ0blRlbXAuaWQgPSBcInN3aXRjaENcIjtcbiAgICB0ZW1wX2MuY2xhc3NMaXN0ID0gXCJoaWRkZW5cIjtcbiAgICB0ZW1wX2YuY2xhc3NMaXN0ID0gXCJcIjtcbiAgICBmZWVsc19jLmNsYXNzTGlzdCA9IFwiaGlkZGVuXCI7XG4gICAgZmVlbHNfZi5jbGFzc0xpc3QgPSBcIlwiO1xuICAgIHRlbXBfYzAuY2xhc3NMaXN0ID0gXCJoaWRkZW5cIjtcbiAgICB0ZW1wX2MxLmNsYXNzTGlzdCA9IFwiaGlkZGVuXCI7XG4gICAgdGVtcF9jMi5jbGFzc0xpc3QgPSBcImhpZGRlblwiO1xuICAgIHRlbXBfZjAuY2xhc3NMaXN0ID0gXCJcIjtcbiAgICB0ZW1wX2YxLmNsYXNzTGlzdCA9IFwiXCI7XG4gICAgdGVtcF9mMi5jbGFzc0xpc3QgPSBcIlwiO1xuICB9IGVsc2Uge1xuICAgIGJ0blRlbXAuaW5uZXJIVE1MID0gXCJTd2l0Y2ggJiM4NDU3XCI7XG4gICAgYnRuVGVtcC5pZCA9IFwic3dpdGNoRlwiO1xuICAgIHRlbXBfYy5jbGFzc0xpc3QgPSBcIlwiO1xuICAgIHRlbXBfZi5jbGFzc0xpc3QgPSBcImhpZGRlblwiO1xuICAgIGZlZWxzX2MuY2xhc3NMaXN0ID0gXCJcIjtcbiAgICBmZWVsc19mLmNsYXNzTGlzdCA9IFwiaGlkZGVuXCI7XG4gICAgdGVtcF9jMC5jbGFzc0xpc3QgPSBcIlwiO1xuICAgIHRlbXBfYzEuY2xhc3NMaXN0ID0gXCJcIjtcbiAgICB0ZW1wX2MyLmNsYXNzTGlzdCA9IFwiXCI7XG4gICAgdGVtcF9mMC5jbGFzc0xpc3QgPSBcImhpZGRlblwiO1xuICAgIHRlbXBfZjEuY2xhc3NMaXN0ID0gXCJoaWRkZW5cIjtcbiAgICB0ZW1wX2YyLmNsYXNzTGlzdCA9IFwiaGlkZGVuXCI7XG4gIH1cbn0pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9