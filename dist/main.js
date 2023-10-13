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
    overflow: scroll;
    position: relative;
    min-width: 1400px;
    min-height: 900px;
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
    display: grid;
    grid-template-columns: 30rem 3rem;
    grid-template-rows: 3rem 1rem;
    align-items: start;
    padding: 0;
    margin-top: 2rem;
    margin-right: 4rem;
    padding-top: 0.9rem;
    grid-column: 2/3;
    grid-row: 1/2;
    width: fit-content;
    height: fit-content;
}

.searchLocation:focus {
    background-color: var(--bgColor);
    color: var(--fontColor);
}


#locationInput {
    font-family: "InterExtraLight";
    padding: 0.5rem;
    margin: none;
    box-shadow: none;
    border-radius: none;
    outline: inherit;
    width: 30rem;
    border-right: none;
    border: 1px var(--fontColor) solid;
    border-right: none;
    background-color: var(--bgColor);
    font-size: 1.5rem;
    border-radius: 0.2rem 0rem 0rem 0.2rem;
    grid-column: 1/2;
    grid-row: 1/2;


}

#error {
    font-size: 0.8rem;
    grid-column: 1/3;
    grid-row: 2/3;
    margin-top: 0.2rem;
    margin-left: 0.2rem;
}

.submitLocation {
    font: inherit;
    color: inherit;
    cursor: pointer;
    font-size: 1.5rem;
    border: 1px var(--fontColor) solid;
    background-color: var(--bgColor);
    padding: 0.1rem 0.15rem 0rem 0.1rem;
    border-radius: 0rem 0.2rem 0.2rem 0rem;
    grid-column: 2/3;
    grid-row: 1/2;
    height: 47px;
    width: 3rem;

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
    padding: 0.5rem 1.5rem;
    margin-top: 1rem;
    border-radius: 0.2rem;
}

/* btn animation */
.btnTemp {
    background-color: var(--bgColor);
    border: 1px solid var(--fontColor);
    box-shadow: 5px -5px 0 -1px var(--bgColor), 5px -5px var(--fontColor);
    transition: box-shadow 1s, top 1s, left 1s;
    position: relative;
    top: 0;
    left: 0;
    cursor: pointer;
}

.btnTemp:hover {
    top: -2px;
    left: 2px;
    box-shadow: 0 0 0 -1px var(--bgColor), 0 0 0 0 var(--fontColor),
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
    grid-template-rows: 20% 20% 20% 20%;
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

#chanceSnow {
    grid-row: 4/5;
    grid-column: 2/3;
}

#wind {
    grid-row: 5/6;
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
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["html,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n    margin: 0;\n    padding: 0;\n    border: 0;\n    font-size: 100%;\n    font: inherit;\n    vertical-align: baseline;\n}\n\n.hidden {\n    display: none;\n}\n\n:root {\n    --bgColor: #d2d6d9;\n    --fontColor: #2b2e33;\n\n}\n\nul {\n    list-style: none;\n}\n\n@font-face {\n    font-family: \"InterThin\";\n    src: url(\"fonts/Inter-Thin.ttf\") format(\"truetype\");\n    font-weight: 100;\n}\n\n@font-face {\n    font-family: \"InterExtraLight\";\n    src: url(\"fonts/Inter-ExtraLight.ttf\") format(\"truetype\");\n    font-weight: 200;\n}\n\n@font-face {\n    font-family: \"InterLight\";\n    src: url(\"fonts/Inter-Light.ttf\") format(\"truetype\");\n    font-weight: 300;\n}\n\nbody {\n    font-family: \"InterLight\";\n    background-color: var(--bgColor);\n    color: var(--fontColor);\n    display: grid;\n    grid-template-rows: 15% 45% 40%;\n    grid-template-columns: 1fr 1fr;\n    height: 100vh;\n    width: 100vw;\n    overflow: scroll;\n    position: relative;\n    min-width: 1400px;\n    min-height: 900px;\n}\n\nhtml {\n    box-sizing: border-box;\n}\n\n*,\n*:before,\n*:after {\n    box-sizing: inherit;\n}\n\n\n/* Location */\n.location {\n    font-family: \"InterLight\";\n    display: flex;\n    flex-direction: row;\n    font-size: 4rem;\n    grid-row: 1/2;\n    grid-column: 1/3;\n\n}\n\n#city {\n    margin-top: 2rem;\n    margin-left: 4rem;\n}\n\n#country {\n    margin-top: 2rem;\n}\n\n.searchLocation {\n    font-family: \"InterExtraLight\";\n    margin-left: auto;\n    display: grid;\n    grid-template-columns: 30rem 3rem;\n    grid-template-rows: 3rem 1rem;\n    align-items: start;\n    padding: 0;\n    margin-top: 2rem;\n    margin-right: 4rem;\n    padding-top: 0.9rem;\n    grid-column: 2/3;\n    grid-row: 1/2;\n    width: fit-content;\n    height: fit-content;\n}\n\n.searchLocation:focus {\n    background-color: var(--bgColor);\n    color: var(--fontColor);\n}\n\n\n#locationInput {\n    font-family: \"InterExtraLight\";\n    padding: 0.5rem;\n    margin: none;\n    box-shadow: none;\n    border-radius: none;\n    outline: inherit;\n    width: 30rem;\n    border-right: none;\n    border: 1px var(--fontColor) solid;\n    border-right: none;\n    background-color: var(--bgColor);\n    font-size: 1.5rem;\n    border-radius: 0.2rem 0rem 0rem 0.2rem;\n    grid-column: 1/2;\n    grid-row: 1/2;\n\n\n}\n\n#error {\n    font-size: 0.8rem;\n    grid-column: 1/3;\n    grid-row: 2/3;\n    margin-top: 0.2rem;\n    margin-left: 0.2rem;\n}\n\n.submitLocation {\n    font: inherit;\n    color: inherit;\n    cursor: pointer;\n    font-size: 1.5rem;\n    border: 1px var(--fontColor) solid;\n    background-color: var(--bgColor);\n    padding: 0.1rem 0.15rem 0rem 0.1rem;\n    border-radius: 0rem 0.2rem 0.2rem 0rem;\n    grid-column: 2/3;\n    grid-row: 1/2;\n    height: 47px;\n    width: 3rem;\n\n}\n\n\n/* Condition */\n\n.conditionPlace {\n    font-family: \"InterExtraLight\";\n    display: flex;\n    flex-direction: column;\n    align-items: start;\n    font-size: 2.3rem;\n    justify-content: start;\n    grid-row: 2/3;\n    grid-column: 1/2;\n    margin-left: 4rem;\n    gap: 2rem;\n}\n\n.iconCondition {\n    display: flex;\n    gap: 3rem;\n    padding-left: 1rem;\n    align-items: center;\n}\n\n\n.dateTime {\n    font-family: \"InterExtraLight\";\n    width: fit-content;\n    font-size: 1.8rem;\n\n}\n\n.conditionContainer {\n    display: flex;\n    flex-direction: column;\n}\n\n.btnTemp {\n    font-family: \"InterExtraLight\";\n    color: inherit;\n    cursor: pointer;\n    font-size: 1.5rem;\n    padding: 0.5rem 1.5rem;\n    margin-top: 1rem;\n    border-radius: 0.2rem;\n}\n\n/* btn animation */\n.btnTemp {\n    background-color: var(--bgColor);\n    border: 1px solid var(--fontColor);\n    box-shadow: 5px -5px 0 -1px var(--bgColor), 5px -5px var(--fontColor);\n    transition: box-shadow 1s, top 1s, left 1s;\n    position: relative;\n    top: 0;\n    left: 0;\n    cursor: pointer;\n}\n\n.btnTemp:hover {\n    top: -2px;\n    left: 2px;\n    box-shadow: 0 0 0 -1px var(--bgColor), 0 0 0 0 var(--fontColor),\n}\n\n\n\n#weatherIcon {\n    height: 15rem;\n    width: 15rem;\n}\n\n/* Daily */\n.daily {\n    width: 50vw;\n    height: 200px;\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr;\n    grid-template-rows: 50px 200px;\n    gap: 1.5rem;\n    grid-row: 3/4;\n    grid-column: 1/2;\n    margin-left: 4rem;\n    padding-top: 1rem;\n}\n\n\n.daily>div {\n    font-family: \"InterExtraLight\";\n    grid-template-rows: 2/3;\n    display: flex;\n    flex-direction: column;\n    gap: 1.2rem;\n}\n\n#dailyHeader {\n    grid-column: 1/4;\n    grid-row: 1/2;\n    font-size: 2.3rem;\n}\n\n.dailyDate {\n    font-size: 1.8rem;\n}\n\n.dailyCondition {\n    font-size: 1.8rem;\n}\n\n.dailyIcon {\n    width: 5rem;\n    height: 5rem;\n}\n\n/* Further Details */\n.furtherDetails {\n    display: grid;\n    grid-template-columns: 5fr 5fr;\n    grid-template-rows: 20% 20% 20% 20%;\n    grid-row: 2/4;\n    padding-left: 7rem;\n}\n\n#feels {\n    grid-row: 1/2;\n    grid-column: 2/3;\n}\n\n#humidity {\n    grid-row: 2/3;\n    grid-column: 2/3;\n}\n\n#chance {\n    grid-row: 3/4;\n    grid-column: 2/3;\n}\n\n#chanceSnow {\n    grid-row: 4/5;\n    grid-column: 2/3;\n}\n\n#wind {\n    grid-row: 5/6;\n    grid-column: 2/3;\n}\n\n.furtherImg {\n    width: 5rem;\n    height: 5rem;\n}\n\n.furtherContainer {\n    display: flex;\n    gap: 1.5rem;\n}\n\n.furthertxt {\n    font-size: 1.8rem;\n}"],"sourceRoot":""}]);
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
  chanceSnow,
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
  chanceSnow.innerHTML = `${forecast.forecastday[0].day.daily_chance_of_snow} &#x25`;
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
/* harmony import */ var _populate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./populate */ "./src/populate.js");
/* harmony import */ var _functionality__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./functionality */ "./src/functionality.js");




const locationInput = document.querySelector("#locationInput");
const searchBtn = document.querySelector(".submitLocation");
let locationTxt = "London";
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
const chanceSnow = document.querySelector("#chanceSnowinfo");
const wind = document.querySelector("#windinfo");
const btnTemp = document.querySelector(".btnTemp");
const errorMsg = document.querySelector("#error");

async function fetchWeather(
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
  chanceSnow,
  wind
) {
  errorMsg.classList = "hidden";
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
    _functionality__WEBPACK_IMPORTED_MODULE_2__.selectIcon,
    _functionality__WEBPACK_IMPORTED_MODULE_2__.upperConditionTxt,
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
    chanceSnow,
    wind
  ).catch((err) => {
    errorMsg.classList = "";
  });

  // console.log(weatherData);
}

fetchWeather(
  locationTxt,
  _populate__WEBPACK_IMPORTED_MODULE_1__.populate,
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
  chanceSnow,
  wind
);

// Event Listeners

locationInput.addEventListener("input", () => {
  locationTxt = locationInput.value;
});

searchBtn.addEventListener("click", function () {
  fetchWeather(
    locationTxt,
    _populate__WEBPACK_IMPORTED_MODULE_1__.populate,
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
    chanceSnow,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLHVIQUF1QztBQUNuRiw0Q0FBNEMsbUlBQTZDO0FBQ3pGLDRDQUE0Qyx5SEFBd0M7QUFDcEYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRix5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLG1DQUFtQztBQUNsRDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLG1DQUFtQztBQUNsRDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLG1DQUFtQztBQUNsRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUMsT0FBTyxnS0FBZ0ssV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksY0FBYyxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxPQUFPLFlBQVksUUFBUSxVQUFVLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsUUFBUSxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxXQUFXLE9BQU8sV0FBVyxLQUFLLFlBQVksV0FB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QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDNURhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNiQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixnQkFBZ0I7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFeUM7Ozs7Ozs7Ozs7Ozs7OztBQ2xQekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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QUFFQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxJQUFJLCtDQUFRO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXJmb3JlY2FzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vd2VhdGhlcmZvcmVjYXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyZm9yZWNhc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3dlYXRoZXJmb3JlY2FzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3dlYXRoZXJmb3JlY2FzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly93ZWF0aGVyZm9yZWNhc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmZvcmVjYXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyZm9yZWNhc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmZvcmVjYXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3dlYXRoZXJmb3JlY2FzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3dlYXRoZXJmb3JlY2FzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3dlYXRoZXJmb3JlY2FzdC8uL3NyYy9mdW5jdGlvbmFsaXR5LmpzIiwid2VicGFjazovL3dlYXRoZXJmb3JlY2FzdC8uL3NyYy9wb3B1bGF0ZS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyZm9yZWNhc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VhdGhlcmZvcmVjYXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3dlYXRoZXJmb3JlY2FzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmZvcmVjYXN0L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vd2VhdGhlcmZvcmVjYXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VhdGhlcmZvcmVjYXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VhdGhlcmZvcmVjYXN0L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3dlYXRoZXJmb3JlY2FzdC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly93ZWF0aGVyZm9yZWNhc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3dlYXRoZXJmb3JlY2FzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiZm9udHMvSW50ZXItVGhpbi50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCJmb250cy9JbnRlci1FeHRyYUxpZ2h0LnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcImZvbnRzL0ludGVyLUxpZ2h0LnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBodG1sLFxuYm9keSxcbmRpdixcbnNwYW4sXG5hcHBsZXQsXG5vYmplY3QsXG5pZnJhbWUsXG5oMSxcbmgyLFxuaDMsXG5oNCxcbmg1LFxuaDYsXG5wLFxuYmxvY2txdW90ZSxcbnByZSxcbmEsXG5hYmJyLFxuYWNyb255bSxcbmFkZHJlc3MsXG5iaWcsXG5jaXRlLFxuY29kZSxcbmRlbCxcbmRmbixcbmVtLFxuaW1nLFxuaW5zLFxua2JkLFxucSxcbnMsXG5zYW1wLFxuc21hbGwsXG5zdHJpa2UsXG5zdHJvbmcsXG5zdWIsXG5zdXAsXG50dCxcbnZhcixcbmIsXG51LFxuaSxcbmNlbnRlcixcbmRsLFxuZHQsXG5kZCxcbm9sLFxudWwsXG5saSxcbmZpZWxkc2V0LFxuZm9ybSxcbmxhYmVsLFxubGVnZW5kLFxudGFibGUsXG5jYXB0aW9uLFxudGJvZHksXG50Zm9vdCxcbnRoZWFkLFxudHIsXG50aCxcbnRkLFxuYXJ0aWNsZSxcbmFzaWRlLFxuY2FudmFzLFxuZGV0YWlscyxcbmVtYmVkLFxuZmlndXJlLFxuZmlnY2FwdGlvbixcbmZvb3RlcixcbmhlYWRlcixcbmhncm91cCxcbm1lbnUsXG5uYXYsXG5vdXRwdXQsXG5ydWJ5LFxuc2VjdGlvbixcbnN1bW1hcnksXG50aW1lLFxubWFyayxcbmF1ZGlvLFxudmlkZW8ge1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGJvcmRlcjogMDtcbiAgICBmb250LXNpemU6IDEwMCU7XG4gICAgZm9udDogaW5oZXJpdDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XG59XG5cbi5oaWRkZW4ge1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG5cbjpyb290IHtcbiAgICAtLWJnQ29sb3I6ICNkMmQ2ZDk7XG4gICAgLS1mb250Q29sb3I6ICMyYjJlMzM7XG5cbn1cblxudWwge1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG5cbkBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiBcIkludGVyVGhpblwiO1xuICAgIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pIGZvcm1hdChcInRydWV0eXBlXCIpO1xuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XG59XG5cbkBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiBcIkludGVyRXh0cmFMaWdodFwiO1xuICAgIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fX30pIGZvcm1hdChcInRydWV0eXBlXCIpO1xuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XG59XG5cbkBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiBcIkludGVyTGlnaHRcIjtcbiAgICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX199KSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcbiAgICBmb250LXdlaWdodDogMzAwO1xufVxuXG5ib2R5IHtcbiAgICBmb250LWZhbWlseTogXCJJbnRlckxpZ2h0XCI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmdDb2xvcik7XG4gICAgY29sb3I6IHZhcigtLWZvbnRDb2xvcik7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDE1JSA0NSUgNDAlO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIHdpZHRoOiAxMDB2dztcbiAgICBvdmVyZmxvdzogc2Nyb2xsO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtaW4td2lkdGg6IDE0MDBweDtcbiAgICBtaW4taGVpZ2h0OiA5MDBweDtcbn1cblxuaHRtbCB7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuKixcbio6YmVmb3JlLFxuKjphZnRlciB7XG4gICAgYm94LXNpemluZzogaW5oZXJpdDtcbn1cblxuXG4vKiBMb2NhdGlvbiAqL1xuLmxvY2F0aW9uIHtcbiAgICBmb250LWZhbWlseTogXCJJbnRlckxpZ2h0XCI7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGZvbnQtc2l6ZTogNHJlbTtcbiAgICBncmlkLXJvdzogMS8yO1xuICAgIGdyaWQtY29sdW1uOiAxLzM7XG5cbn1cblxuI2NpdHkge1xuICAgIG1hcmdpbi10b3A6IDJyZW07XG4gICAgbWFyZ2luLWxlZnQ6IDRyZW07XG59XG5cbiNjb3VudHJ5IHtcbiAgICBtYXJnaW4tdG9wOiAycmVtO1xufVxuXG4uc2VhcmNoTG9jYXRpb24ge1xuICAgIGZvbnQtZmFtaWx5OiBcIkludGVyRXh0cmFMaWdodFwiO1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzMHJlbSAzcmVtO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogM3JlbSAxcmVtO1xuICAgIGFsaWduLWl0ZW1zOiBzdGFydDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbi10b3A6IDJyZW07XG4gICAgbWFyZ2luLXJpZ2h0OiA0cmVtO1xuICAgIHBhZGRpbmctdG9wOiAwLjlyZW07XG4gICAgZ3JpZC1jb2x1bW46IDIvMztcbiAgICBncmlkLXJvdzogMS8yO1xuICAgIHdpZHRoOiBmaXQtY29udGVudDtcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xufVxuXG4uc2VhcmNoTG9jYXRpb246Zm9jdXMge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnQ29sb3IpO1xuICAgIGNvbG9yOiB2YXIoLS1mb250Q29sb3IpO1xufVxuXG5cbiNsb2NhdGlvbklucHV0IHtcbiAgICBmb250LWZhbWlseTogXCJJbnRlckV4dHJhTGlnaHRcIjtcbiAgICBwYWRkaW5nOiAwLjVyZW07XG4gICAgbWFyZ2luOiBub25lO1xuICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogbm9uZTtcbiAgICBvdXRsaW5lOiBpbmhlcml0O1xuICAgIHdpZHRoOiAzMHJlbTtcbiAgICBib3JkZXItcmlnaHQ6IG5vbmU7XG4gICAgYm9yZGVyOiAxcHggdmFyKC0tZm9udENvbG9yKSBzb2xpZDtcbiAgICBib3JkZXItcmlnaHQ6IG5vbmU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmdDb2xvcik7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgYm9yZGVyLXJhZGl1czogMC4ycmVtIDByZW0gMHJlbSAwLjJyZW07XG4gICAgZ3JpZC1jb2x1bW46IDEvMjtcbiAgICBncmlkLXJvdzogMS8yO1xuXG5cbn1cblxuI2Vycm9yIHtcbiAgICBmb250LXNpemU6IDAuOHJlbTtcbiAgICBncmlkLWNvbHVtbjogMS8zO1xuICAgIGdyaWQtcm93OiAyLzM7XG4gICAgbWFyZ2luLXRvcDogMC4ycmVtO1xuICAgIG1hcmdpbi1sZWZ0OiAwLjJyZW07XG59XG5cbi5zdWJtaXRMb2NhdGlvbiB7XG4gICAgZm9udDogaW5oZXJpdDtcbiAgICBjb2xvcjogaW5oZXJpdDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgYm9yZGVyOiAxcHggdmFyKC0tZm9udENvbG9yKSBzb2xpZDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZ0NvbG9yKTtcbiAgICBwYWRkaW5nOiAwLjFyZW0gMC4xNXJlbSAwcmVtIDAuMXJlbTtcbiAgICBib3JkZXItcmFkaXVzOiAwcmVtIDAuMnJlbSAwLjJyZW0gMHJlbTtcbiAgICBncmlkLWNvbHVtbjogMi8zO1xuICAgIGdyaWQtcm93OiAxLzI7XG4gICAgaGVpZ2h0OiA0N3B4O1xuICAgIHdpZHRoOiAzcmVtO1xuXG59XG5cblxuLyogQ29uZGl0aW9uICovXG5cbi5jb25kaXRpb25QbGFjZSB7XG4gICAgZm9udC1mYW1pbHk6IFwiSW50ZXJFeHRyYUxpZ2h0XCI7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBzdGFydDtcbiAgICBmb250LXNpemU6IDIuM3JlbTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xuICAgIGdyaWQtcm93OiAyLzM7XG4gICAgZ3JpZC1jb2x1bW46IDEvMjtcbiAgICBtYXJnaW4tbGVmdDogNHJlbTtcbiAgICBnYXA6IDJyZW07XG59XG5cbi5pY29uQ29uZGl0aW9uIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGdhcDogM3JlbTtcbiAgICBwYWRkaW5nLWxlZnQ6IDFyZW07XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuXG4uZGF0ZVRpbWUge1xuICAgIGZvbnQtZmFtaWx5OiBcIkludGVyRXh0cmFMaWdodFwiO1xuICAgIHdpZHRoOiBmaXQtY29udGVudDtcbiAgICBmb250LXNpemU6IDEuOHJlbTtcblxufVxuXG4uY29uZGl0aW9uQ29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5idG5UZW1wIHtcbiAgICBmb250LWZhbWlseTogXCJJbnRlckV4dHJhTGlnaHRcIjtcbiAgICBjb2xvcjogaW5oZXJpdDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgcGFkZGluZzogMC41cmVtIDEuNXJlbTtcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDAuMnJlbTtcbn1cblxuLyogYnRuIGFuaW1hdGlvbiAqL1xuLmJ0blRlbXAge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnQ29sb3IpO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWZvbnRDb2xvcik7XG4gICAgYm94LXNoYWRvdzogNXB4IC01cHggMCAtMXB4IHZhcigtLWJnQ29sb3IpLCA1cHggLTVweCB2YXIoLS1mb250Q29sb3IpO1xuICAgIHRyYW5zaXRpb246IGJveC1zaGFkb3cgMXMsIHRvcCAxcywgbGVmdCAxcztcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uYnRuVGVtcDpob3ZlciB7XG4gICAgdG9wOiAtMnB4O1xuICAgIGxlZnQ6IDJweDtcbiAgICBib3gtc2hhZG93OiAwIDAgMCAtMXB4IHZhcigtLWJnQ29sb3IpLCAwIDAgMCAwIHZhcigtLWZvbnRDb2xvciksXG59XG5cblxuXG4jd2VhdGhlckljb24ge1xuICAgIGhlaWdodDogMTVyZW07XG4gICAgd2lkdGg6IDE1cmVtO1xufVxuXG4vKiBEYWlseSAqL1xuLmRhaWx5IHtcbiAgICB3aWR0aDogNTB2dztcbiAgICBoZWlnaHQ6IDIwMHB4O1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmcjtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDUwcHggMjAwcHg7XG4gICAgZ2FwOiAxLjVyZW07XG4gICAgZ3JpZC1yb3c6IDMvNDtcbiAgICBncmlkLWNvbHVtbjogMS8yO1xuICAgIG1hcmdpbi1sZWZ0OiA0cmVtO1xuICAgIHBhZGRpbmctdG9wOiAxcmVtO1xufVxuXG5cbi5kYWlseT5kaXYge1xuICAgIGZvbnQtZmFtaWx5OiBcIkludGVyRXh0cmFMaWdodFwiO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMi8zO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDEuMnJlbTtcbn1cblxuI2RhaWx5SGVhZGVyIHtcbiAgICBncmlkLWNvbHVtbjogMS80O1xuICAgIGdyaWQtcm93OiAxLzI7XG4gICAgZm9udC1zaXplOiAyLjNyZW07XG59XG5cbi5kYWlseURhdGUge1xuICAgIGZvbnQtc2l6ZTogMS44cmVtO1xufVxuXG4uZGFpbHlDb25kaXRpb24ge1xuICAgIGZvbnQtc2l6ZTogMS44cmVtO1xufVxuXG4uZGFpbHlJY29uIHtcbiAgICB3aWR0aDogNXJlbTtcbiAgICBoZWlnaHQ6IDVyZW07XG59XG5cbi8qIEZ1cnRoZXIgRGV0YWlscyAqL1xuLmZ1cnRoZXJEZXRhaWxzIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNWZyIDVmcjtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDIwJSAyMCUgMjAlIDIwJTtcbiAgICBncmlkLXJvdzogMi80O1xuICAgIHBhZGRpbmctbGVmdDogN3JlbTtcbn1cblxuI2ZlZWxzIHtcbiAgICBncmlkLXJvdzogMS8yO1xuICAgIGdyaWQtY29sdW1uOiAyLzM7XG59XG5cbiNodW1pZGl0eSB7XG4gICAgZ3JpZC1yb3c6IDIvMztcbiAgICBncmlkLWNvbHVtbjogMi8zO1xufVxuXG4jY2hhbmNlIHtcbiAgICBncmlkLXJvdzogMy80O1xuICAgIGdyaWQtY29sdW1uOiAyLzM7XG59XG5cbiNjaGFuY2VTbm93IHtcbiAgICBncmlkLXJvdzogNC81O1xuICAgIGdyaWQtY29sdW1uOiAyLzM7XG59XG5cbiN3aW5kIHtcbiAgICBncmlkLXJvdzogNS82O1xuICAgIGdyaWQtY29sdW1uOiAyLzM7XG59XG5cbi5mdXJ0aGVySW1nIHtcbiAgICB3aWR0aDogNXJlbTtcbiAgICBoZWlnaHQ6IDVyZW07XG59XG5cbi5mdXJ0aGVyQ29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGdhcDogMS41cmVtO1xufVxuXG4uZnVydGhlcnR4dCB7XG4gICAgZm9udC1zaXplOiAxLjhyZW07XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFpRkksU0FBUztJQUNULFVBQVU7SUFDVixTQUFTO0lBQ1QsZUFBZTtJQUNmLGFBQWE7SUFDYix3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLG9CQUFvQjs7QUFFeEI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSx3QkFBd0I7SUFDeEIsK0RBQW1EO0lBQ25ELGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLDhCQUE4QjtJQUM5QiwrREFBeUQ7SUFDekQsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLCtEQUFvRDtJQUNwRCxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsZ0NBQWdDO0lBQ2hDLHVCQUF1QjtJQUN2QixhQUFhO0lBQ2IsK0JBQStCO0lBQy9CLDhCQUE4QjtJQUM5QixhQUFhO0lBQ2IsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLHNCQUFzQjtBQUMxQjs7QUFFQTs7O0lBR0ksbUJBQW1CO0FBQ3ZCOzs7QUFHQSxhQUFhO0FBQ2I7SUFDSSx5QkFBeUI7SUFDekIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsYUFBYTtJQUNiLGdCQUFnQjs7QUFFcEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksOEJBQThCO0lBQzlCLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2IsaUNBQWlDO0lBQ2pDLDZCQUE2QjtJQUM3QixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGdDQUFnQztJQUNoQyx1QkFBdUI7QUFDM0I7OztBQUdBO0lBQ0ksOEJBQThCO0lBQzlCLGVBQWU7SUFDZixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixrQ0FBa0M7SUFDbEMsa0JBQWtCO0lBQ2xCLGdDQUFnQztJQUNoQyxpQkFBaUI7SUFDakIsc0NBQXNDO0lBQ3RDLGdCQUFnQjtJQUNoQixhQUFhOzs7QUFHakI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGNBQWM7SUFDZCxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGtDQUFrQztJQUNsQyxnQ0FBZ0M7SUFDaEMsbUNBQW1DO0lBQ25DLHNDQUFzQztJQUN0QyxnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLFlBQVk7SUFDWixXQUFXOztBQUVmOzs7QUFHQSxjQUFjOztBQUVkO0lBQ0ksOEJBQThCO0lBQzlCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixzQkFBc0I7SUFDdEIsYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsU0FBUztBQUNiOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFNBQVM7SUFDVCxrQkFBa0I7SUFDbEIsbUJBQW1CO0FBQ3ZCOzs7QUFHQTtJQUNJLDhCQUE4QjtJQUM5QixrQkFBa0I7SUFDbEIsaUJBQWlCOztBQUVyQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSw4QkFBOEI7SUFDOUIsY0FBYztJQUNkLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsc0JBQXNCO0lBQ3RCLGdCQUFnQjtJQUNoQixxQkFBcUI7QUFDekI7O0FBRUEsa0JBQWtCO0FBQ2xCO0lBQ0ksZ0NBQWdDO0lBQ2hDLGtDQUFrQztJQUNsQyxxRUFBcUU7SUFDckUsMENBQTBDO0lBQzFDLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sT0FBTztJQUNQLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxTQUFTO0lBQ1QsU0FBUztJQUNUO0FBQ0o7Ozs7QUFJQTtJQUNJLGFBQWE7SUFDYixZQUFZO0FBQ2hCOztBQUVBLFVBQVU7QUFDVjtJQUNJLFdBQVc7SUFDWCxhQUFhO0lBQ2IsYUFBYTtJQUNiLGtDQUFrQztJQUNsQyw4QkFBOEI7SUFDOUIsV0FBVztJQUNYLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGlCQUFpQjtBQUNyQjs7O0FBR0E7SUFDSSw4QkFBOEI7SUFDOUIsdUJBQXVCO0lBQ3ZCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsV0FBVztBQUNmOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtBQUNoQjs7QUFFQSxvQkFBb0I7QUFDcEI7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLG1DQUFtQztJQUNuQyxhQUFhO0lBQ2Isa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiaHRtbCxcXG5ib2R5LFxcbmRpdixcXG5zcGFuLFxcbmFwcGxldCxcXG5vYmplY3QsXFxuaWZyYW1lLFxcbmgxLFxcbmgyLFxcbmgzLFxcbmg0LFxcbmg1LFxcbmg2LFxcbnAsXFxuYmxvY2txdW90ZSxcXG5wcmUsXFxuYSxcXG5hYmJyLFxcbmFjcm9ueW0sXFxuYWRkcmVzcyxcXG5iaWcsXFxuY2l0ZSxcXG5jb2RlLFxcbmRlbCxcXG5kZm4sXFxuZW0sXFxuaW1nLFxcbmlucyxcXG5rYmQsXFxucSxcXG5zLFxcbnNhbXAsXFxuc21hbGwsXFxuc3RyaWtlLFxcbnN0cm9uZyxcXG5zdWIsXFxuc3VwLFxcbnR0LFxcbnZhcixcXG5iLFxcbnUsXFxuaSxcXG5jZW50ZXIsXFxuZGwsXFxuZHQsXFxuZGQsXFxub2wsXFxudWwsXFxubGksXFxuZmllbGRzZXQsXFxuZm9ybSxcXG5sYWJlbCxcXG5sZWdlbmQsXFxudGFibGUsXFxuY2FwdGlvbixcXG50Ym9keSxcXG50Zm9vdCxcXG50aGVhZCxcXG50cixcXG50aCxcXG50ZCxcXG5hcnRpY2xlLFxcbmFzaWRlLFxcbmNhbnZhcyxcXG5kZXRhaWxzLFxcbmVtYmVkLFxcbmZpZ3VyZSxcXG5maWdjYXB0aW9uLFxcbmZvb3RlcixcXG5oZWFkZXIsXFxuaGdyb3VwLFxcbm1lbnUsXFxubmF2LFxcbm91dHB1dCxcXG5ydWJ5LFxcbnNlY3Rpb24sXFxuc3VtbWFyeSxcXG50aW1lLFxcbm1hcmssXFxuYXVkaW8sXFxudmlkZW8ge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGJvcmRlcjogMDtcXG4gICAgZm9udC1zaXplOiAxMDAlO1xcbiAgICBmb250OiBpbmhlcml0O1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcblxcbi5oaWRkZW4ge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG46cm9vdCB7XFxuICAgIC0tYmdDb2xvcjogI2QyZDZkOTtcXG4gICAgLS1mb250Q29sb3I6ICMyYjJlMzM7XFxuXFxufVxcblxcbnVsIHtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiSW50ZXJUaGluXFxcIjtcXG4gICAgc3JjOiB1cmwoXFxcImZvbnRzL0ludGVyLVRoaW4udHRmXFxcIikgZm9ybWF0KFxcXCJ0cnVldHlwZVxcXCIpO1xcbiAgICBmb250LXdlaWdodDogMTAwO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJJbnRlckV4dHJhTGlnaHRcXFwiO1xcbiAgICBzcmM6IHVybChcXFwiZm9udHMvSW50ZXItRXh0cmFMaWdodC50dGZcXFwiKSBmb3JtYXQoXFxcInRydWV0eXBlXFxcIik7XFxuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogXFxcIkludGVyTGlnaHRcXFwiO1xcbiAgICBzcmM6IHVybChcXFwiZm9udHMvSW50ZXItTGlnaHQudHRmXFxcIikgZm9ybWF0KFxcXCJ0cnVldHlwZVxcXCIpO1xcbiAgICBmb250LXdlaWdodDogMzAwO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJJbnRlckxpZ2h0XFxcIjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmdDb2xvcik7XFxuICAgIGNvbG9yOiB2YXIoLS1mb250Q29sb3IpO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDE1JSA0NSUgNDAlO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgb3ZlcmZsb3c6IHNjcm9sbDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBtaW4td2lkdGg6IDE0MDBweDtcXG4gICAgbWluLWhlaWdodDogOTAwcHg7XFxufVxcblxcbmh0bWwge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4qLFxcbio6YmVmb3JlLFxcbio6YWZ0ZXIge1xcbiAgICBib3gtc2l6aW5nOiBpbmhlcml0O1xcbn1cXG5cXG5cXG4vKiBMb2NhdGlvbiAqL1xcbi5sb2NhdGlvbiB7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiSW50ZXJMaWdodFxcXCI7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGZvbnQtc2l6ZTogNHJlbTtcXG4gICAgZ3JpZC1yb3c6IDEvMjtcXG4gICAgZ3JpZC1jb2x1bW46IDEvMztcXG5cXG59XFxuXFxuI2NpdHkge1xcbiAgICBtYXJnaW4tdG9wOiAycmVtO1xcbiAgICBtYXJnaW4tbGVmdDogNHJlbTtcXG59XFxuXFxuI2NvdW50cnkge1xcbiAgICBtYXJnaW4tdG9wOiAycmVtO1xcbn1cXG5cXG4uc2VhcmNoTG9jYXRpb24ge1xcbiAgICBmb250LWZhbWlseTogXFxcIkludGVyRXh0cmFMaWdodFxcXCI7XFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDMwcmVtIDNyZW07XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogM3JlbSAxcmVtO1xcbiAgICBhbGlnbi1pdGVtczogc3RhcnQ7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIG1hcmdpbi10b3A6IDJyZW07XFxuICAgIG1hcmdpbi1yaWdodDogNHJlbTtcXG4gICAgcGFkZGluZy10b3A6IDAuOXJlbTtcXG4gICAgZ3JpZC1jb2x1bW46IDIvMztcXG4gICAgZ3JpZC1yb3c6IDEvMjtcXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbn1cXG5cXG4uc2VhcmNoTG9jYXRpb246Zm9jdXMge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZ0NvbG9yKTtcXG4gICAgY29sb3I6IHZhcigtLWZvbnRDb2xvcik7XFxufVxcblxcblxcbiNsb2NhdGlvbklucHV0IHtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJJbnRlckV4dHJhTGlnaHRcXFwiO1xcbiAgICBwYWRkaW5nOiAwLjVyZW07XFxuICAgIG1hcmdpbjogbm9uZTtcXG4gICAgYm94LXNoYWRvdzogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogbm9uZTtcXG4gICAgb3V0bGluZTogaW5oZXJpdDtcXG4gICAgd2lkdGg6IDMwcmVtO1xcbiAgICBib3JkZXItcmlnaHQ6IG5vbmU7XFxuICAgIGJvcmRlcjogMXB4IHZhcigtLWZvbnRDb2xvcikgc29saWQ7XFxuICAgIGJvcmRlci1yaWdodDogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmdDb2xvcik7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAwLjJyZW0gMHJlbSAwcmVtIDAuMnJlbTtcXG4gICAgZ3JpZC1jb2x1bW46IDEvMjtcXG4gICAgZ3JpZC1yb3c6IDEvMjtcXG5cXG5cXG59XFxuXFxuI2Vycm9yIHtcXG4gICAgZm9udC1zaXplOiAwLjhyZW07XFxuICAgIGdyaWQtY29sdW1uOiAxLzM7XFxuICAgIGdyaWQtcm93OiAyLzM7XFxuICAgIG1hcmdpbi10b3A6IDAuMnJlbTtcXG4gICAgbWFyZ2luLWxlZnQ6IDAuMnJlbTtcXG59XFxuXFxuLnN1Ym1pdExvY2F0aW9uIHtcXG4gICAgZm9udDogaW5oZXJpdDtcXG4gICAgY29sb3I6IGluaGVyaXQ7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIGJvcmRlcjogMXB4IHZhcigtLWZvbnRDb2xvcikgc29saWQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnQ29sb3IpO1xcbiAgICBwYWRkaW5nOiAwLjFyZW0gMC4xNXJlbSAwcmVtIDAuMXJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogMHJlbSAwLjJyZW0gMC4ycmVtIDByZW07XFxuICAgIGdyaWQtY29sdW1uOiAyLzM7XFxuICAgIGdyaWQtcm93OiAxLzI7XFxuICAgIGhlaWdodDogNDdweDtcXG4gICAgd2lkdGg6IDNyZW07XFxuXFxufVxcblxcblxcbi8qIENvbmRpdGlvbiAqL1xcblxcbi5jb25kaXRpb25QbGFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiSW50ZXJFeHRyYUxpZ2h0XFxcIjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IHN0YXJ0O1xcbiAgICBmb250LXNpemU6IDIuM3JlbTtcXG4gICAganVzdGlmeS1jb250ZW50OiBzdGFydDtcXG4gICAgZ3JpZC1yb3c6IDIvMztcXG4gICAgZ3JpZC1jb2x1bW46IDEvMjtcXG4gICAgbWFyZ2luLWxlZnQ6IDRyZW07XFxuICAgIGdhcDogMnJlbTtcXG59XFxuXFxuLmljb25Db25kaXRpb24ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDNyZW07XFxuICAgIHBhZGRpbmctbGVmdDogMXJlbTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuXFxuLmRhdGVUaW1lIHtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJJbnRlckV4dHJhTGlnaHRcXFwiO1xcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XFxuICAgIGZvbnQtc2l6ZTogMS44cmVtO1xcblxcbn1cXG5cXG4uY29uZGl0aW9uQ29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLmJ0blRlbXAge1xcbiAgICBmb250LWZhbWlseTogXFxcIkludGVyRXh0cmFMaWdodFxcXCI7XFxuICAgIGNvbG9yOiBpbmhlcml0O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICBwYWRkaW5nOiAwLjVyZW0gMS41cmVtO1xcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAwLjJyZW07XFxufVxcblxcbi8qIGJ0biBhbmltYXRpb24gKi9cXG4uYnRuVGVtcCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnQ29sb3IpO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1mb250Q29sb3IpO1xcbiAgICBib3gtc2hhZG93OiA1cHggLTVweCAwIC0xcHggdmFyKC0tYmdDb2xvciksIDVweCAtNXB4IHZhcigtLWZvbnRDb2xvcik7XFxuICAgIHRyYW5zaXRpb246IGJveC1zaGFkb3cgMXMsIHRvcCAxcywgbGVmdCAxcztcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmJ0blRlbXA6aG92ZXIge1xcbiAgICB0b3A6IC0ycHg7XFxuICAgIGxlZnQ6IDJweDtcXG4gICAgYm94LXNoYWRvdzogMCAwIDAgLTFweCB2YXIoLS1iZ0NvbG9yKSwgMCAwIDAgMCB2YXIoLS1mb250Q29sb3IpLFxcbn1cXG5cXG5cXG5cXG4jd2VhdGhlckljb24ge1xcbiAgICBoZWlnaHQ6IDE1cmVtO1xcbiAgICB3aWR0aDogMTVyZW07XFxufVxcblxcbi8qIERhaWx5ICovXFxuLmRhaWx5IHtcXG4gICAgd2lkdGg6IDUwdnc7XFxuICAgIGhlaWdodDogMjAwcHg7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogNTBweCAyMDBweDtcXG4gICAgZ2FwOiAxLjVyZW07XFxuICAgIGdyaWQtcm93OiAzLzQ7XFxuICAgIGdyaWQtY29sdW1uOiAxLzI7XFxuICAgIG1hcmdpbi1sZWZ0OiA0cmVtO1xcbiAgICBwYWRkaW5nLXRvcDogMXJlbTtcXG59XFxuXFxuXFxuLmRhaWx5PmRpdiB7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiSW50ZXJFeHRyYUxpZ2h0XFxcIjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAyLzM7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMS4ycmVtO1xcbn1cXG5cXG4jZGFpbHlIZWFkZXIge1xcbiAgICBncmlkLWNvbHVtbjogMS80O1xcbiAgICBncmlkLXJvdzogMS8yO1xcbiAgICBmb250LXNpemU6IDIuM3JlbTtcXG59XFxuXFxuLmRhaWx5RGF0ZSB7XFxuICAgIGZvbnQtc2l6ZTogMS44cmVtO1xcbn1cXG5cXG4uZGFpbHlDb25kaXRpb24ge1xcbiAgICBmb250LXNpemU6IDEuOHJlbTtcXG59XFxuXFxuLmRhaWx5SWNvbiB7XFxuICAgIHdpZHRoOiA1cmVtO1xcbiAgICBoZWlnaHQ6IDVyZW07XFxufVxcblxcbi8qIEZ1cnRoZXIgRGV0YWlscyAqL1xcbi5mdXJ0aGVyRGV0YWlscyB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNWZyIDVmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAyMCUgMjAlIDIwJSAyMCU7XFxuICAgIGdyaWQtcm93OiAyLzQ7XFxuICAgIHBhZGRpbmctbGVmdDogN3JlbTtcXG59XFxuXFxuI2ZlZWxzIHtcXG4gICAgZ3JpZC1yb3c6IDEvMjtcXG4gICAgZ3JpZC1jb2x1bW46IDIvMztcXG59XFxuXFxuI2h1bWlkaXR5IHtcXG4gICAgZ3JpZC1yb3c6IDIvMztcXG4gICAgZ3JpZC1jb2x1bW46IDIvMztcXG59XFxuXFxuI2NoYW5jZSB7XFxuICAgIGdyaWQtcm93OiAzLzQ7XFxuICAgIGdyaWQtY29sdW1uOiAyLzM7XFxufVxcblxcbiNjaGFuY2VTbm93IHtcXG4gICAgZ3JpZC1yb3c6IDQvNTtcXG4gICAgZ3JpZC1jb2x1bW46IDIvMztcXG59XFxuXFxuI3dpbmQge1xcbiAgICBncmlkLXJvdzogNS82O1xcbiAgICBncmlkLWNvbHVtbjogMi8zO1xcbn1cXG5cXG4uZnVydGhlckltZyB7XFxuICAgIHdpZHRoOiA1cmVtO1xcbiAgICBoZWlnaHQ6IDVyZW07XFxufVxcblxcbi5mdXJ0aGVyQ29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAxLjVyZW07XFxufVxcblxcbi5mdXJ0aGVydHh0IHtcXG4gICAgZm9udC1zaXplOiAxLjhyZW07XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiY29uc3Qgc2VsZWN0SWNvbiA9IGZ1bmN0aW9uIChjdXJyZW50LCB3ZWF0aGVySWNvbiwgZGFpbHkpIHtcbiAgaWYgKGRhaWx5KSB7XG4gICAgaWYgKGN1cnJlbnQuY29uZGl0aW9uLmNvZGUgPT09IDEwMDApIHtcbiAgICAgIHdlYXRoZXJJY29uLnNyYyA9IFwid2VhdGhlckljb25zL3N1bm55LnN2Z1wiO1xuICAgIH0gZWxzZSBpZiAoY3VycmVudC5jb25kaXRpb24uY29kZSA9PT0gMTAwMykge1xuICAgICAgd2VhdGhlckljb24uc3JjID0gXCJ3ZWF0aGVySWNvbnMvcGFydGx5Q2xvdWR5RGF5LnN2Z1wiO1xuICAgIH0gZWxzZSBpZiAoXG4gICAgICBjdXJyZW50LmNvbmRpdGlvbi5jb2RlID09PSAxMDA2IHx8XG4gICAgICBjdXJyZW50LmNvbmRpdGlvbi5jb2RlID09PSAxMDA5XG4gICAgKSB7XG4gICAgICB3ZWF0aGVySWNvbi5zcmMgPSBcIndlYXRoZXJJY29ucy9jbG91ZHkuc3ZnXCI7XG4gICAgfSBlbHNlIGlmIChjdXJyZW50LmNvbmRpdGlvbi5jb2RlID09PSAxMDMwKSB7XG4gICAgICB3ZWF0aGVySWNvbi5zcmMgPSBcIndlYXRoZXJJY29ucy9taXN0LnN2Z1wiO1xuICAgIH0gZWxzZSBpZiAoXG4gICAgICBjdXJyZW50LmNvbmRpdGlvbi5jb2RlID09PSAxMDYzIHx8XG4gICAgICBjdXJyZW50LmNvbmRpdGlvbi5jb2RlID09PSAxMTUwXG4gICAgKSB7XG4gICAgICB3ZWF0aGVySWNvbi5zcmMgPSBcIndlYXRoZXJJY29ucy9wYXRjaHlSYWluRGF5LnN2Z1wiO1xuICAgIH0gZWxzZSBpZiAoXG4gICAgICBjdXJyZW50LmNvbmRpdGlvbi5jb2RlID09PSAxMDY2IHx8XG4gICAgICBjdXJyZW50LmNvbmRpdGlvbi5jb2RlID09PSAxMjEwXG4gICAgKSB7XG4gICAgICB3ZWF0aGVySWNvbi5zcmMgPSBcIndlYXRoZXJJY29ucy9wYXRjaHlTbm93RGF5LnN2Z1wiO1xuICAgIH0gZWxzZSBpZiAoY3VycmVudC5jb25kaXRpb24uY29kZSA9PT0gMTA2OSkge1xuICAgICAgd2VhdGhlckljb24uc3JjID0gXCJ3ZWF0aGVySWNvbnMvcGF0Y2h5U2xlZXREYXkuc3ZnXCI7XG4gICAgfSBlbHNlIGlmIChcbiAgICAgIGN1cnJlbnQuY29uZGl0aW9uLmNvZGUgPT09IDEwNzIgfHxcbiAgICAgIGN1cnJlbnQuY29uZGl0aW9uLmNvZGUgPT09IDExNjggfHxcbiAgICAgIGN1cnJlbnQuY29uZGl0aW9uLmNvZGUgPT09IDExOTggfHxcbiAgICAgIGN1cnJlbnQuY29uZGl0aW9uLmNvZGUgPT09IDEyMDQgfHxcbiAgICAgIGN1cnJlbnQuY29uZGl0aW9uLmNvZGUgPT09IDEyNDlcbiAgICApIHtcbiAgICAgIHdlYXRoZXJJY29uLnNyYyA9IFwid2VhdGhlckljb25zL2ZlZXppbmdEcml6emxlLnN2Z1wiO1xuICAgIH0gZWxzZSBpZiAoY3VycmVudC5jb25kaXRpb24uY29kZSA9PT0gMTA4Nykge1xuICAgICAgd2VhdGhlckljb24uc3JjID0gXCJ3ZWF0aGVySWNvbnMvdGh1bmRlcnlPdXRicmVha3Muc3ZnXCI7XG4gICAgfSBlbHNlIGlmIChjdXJyZW50LmNvbmRpdGlvbi5jb2RlID09PSAxMTE0KSB7XG4gICAgICB3ZWF0aGVySWNvbi5zcmMgPSBcIndlYXRoZXJJY29ucy9ibG93aW5nU25vdy5zdmdcIjtcbiAgICB9IGVsc2UgaWYgKGN1cnJlbnQuY29uZGl0aW9uLmNvZGUgPT09IDExMTcpIHtcbiAgICAgIHdlYXRoZXJJY29uLnNyYyA9IFwid2VhdGhlckljb25zL2JsaXp6YXJkLnN2Z1wiO1xuICAgIH0gZWxzZSBpZiAoY3VycmVudC5jb25kaXRpb24uY29kZSA9PT0gMTEzNSkge1xuICAgICAgd2VhdGhlckljb24uc3JjID0gXCJ3ZWF0aGVySWNvbnMvZm9nLnN2Z1wiO1xuICAgIH0gZWxzZSBpZiAoY3VycmVudC5jb25kaXRpb24uY29kZSA9PT0gMTE0Nykge1xuICAgICAgd2VhdGhlckljb24uc3JjID0gXCJ3ZWF0aGVySWNvbnMvZnJlZXppbmdGb2cuc3ZnXCI7XG4gICAgfSBlbHNlIGlmIChjdXJyZW50LmNvbmRpdGlvbi5jb2RlID09PSAxMTUzKSB7XG4gICAgICB3ZWF0aGVySWNvbi5zcmMgPSBcIndlYXRoZXJJY29ucy9saWdodFJhaW4uc3ZnXCI7XG4gICAgfSBlbHNlIGlmIChcbiAgICAgIGN1cnJlbnQuY29uZGl0aW9uLmNvZGUgPT09IDExNzEgfHxcbiAgICAgIGN1cnJlbnQuY29uZGl0aW9uLmNvZGUgPT09IDEyMDEgfHxcbiAgICAgIGN1cnJlbnQuY29uZGl0aW9uLmNvZGUgPT09IDEyMDcgfHxcbiAgICAgIGN1cnJlbnQuY29uZGl0aW9uLmNvZGUgPT09IDEyNTJcbiAgICApIHtcbiAgICAgIHdlYXRoZXJJY29uLnNyYyA9IFwid2VhdGhlckljb25zL2hlYXZ5RnJlZXppbmdEcml6emxlLnN2Z1wiO1xuICAgIH0gZWxzZSBpZiAoXG4gICAgICBjdXJyZW50LmNvbmRpdGlvbi5jb2RlID09PSAxMTgwIHx8XG4gICAgICBjdXJyZW50LmNvbmRpdGlvbi5jb2RlID09PSAxMTgzXG4gICAgKSB7XG4gICAgICB3ZWF0aGVySWNvbi5zcmMgPSBcIndlYXRoZXJJY29ucy9saWdodFJhaW4uc3ZnXCI7XG4gICAgfSBlbHNlIGlmIChcbiAgICAgIGN1cnJlbnQuY29uZGl0aW9uLmNvZGUgPT09IDExODYgfHxcbiAgICAgIGN1cnJlbnQuY29uZGl0aW9uLmNvZGUgPT09IDExODlcbiAgICApIHtcbiAgICAgIHdlYXRoZXJJY29uLnNyYyA9IFwid2VhdGhlckljb25zL21vZGVyYXRlUmFpbi5zdmdcIjtcbiAgICB9IGVsc2UgaWYgKFxuICAgICAgY3VycmVudC5jb25kaXRpb24uY29kZSA9PT0gMTE5MiB8fFxuICAgICAgY3VycmVudC5jb25kaXRpb24uY29kZSA9PT0gMTE5NVxuICAgICkge1xuICAgICAgd2VhdGhlckljb24uc3JjID0gXCJ3ZWF0aGVySWNvbnMvaGVhdnlSYWluLnN2Z1wiO1xuICAgIH0gZWxzZSBpZiAoXG4gICAgICBjdXJyZW50LmNvbmRpdGlvbi5jb2RlID09PSAxMjEzIHx8XG4gICAgICBjdXJyZW50LmNvbmRpdGlvbi5jb2RlID09PSAxMjU1XG4gICAgKSB7XG4gICAgICB3ZWF0aGVySWNvbi5zcmMgPSBcIndlYXRoZXJJY29ucy9saWdodFNub3cuc3ZnXCI7XG4gICAgfSBlbHNlIGlmIChcbiAgICAgIGN1cnJlbnQuY29uZGl0aW9uLmNvZGUgPT09IDEyMTYgfHxcbiAgICAgIGN1cnJlbnQuY29uZGl0aW9uLmNvZGUgPT09IDEyMTkgfHxcbiAgICAgIGN1cnJlbnQuY29uZGl0aW9uLmNvZGUgPT09IDEyNThcbiAgICApIHtcbiAgICAgIHdlYXRoZXJJY29uLnNyYyA9IFwid2VhdGhlckljb25zL21vZGVyYXRlU25vdy5zdmdcIjtcbiAgICB9IGVsc2UgaWYgKFxuICAgICAgY3VycmVudC5jb25kaXRpb24uY29kZSA9PT0gMTIyMiB8fFxuICAgICAgY3VycmVudC5jb25kaXRpb24uY29kZSA9PT0gMTIyNVxuICAgICkge1xuICAgICAgd2VhdGhlckljb24uc3JjID0gXCJ3ZWF0aGVySWNvbnMvaGVhdnlTbm93LnN2Z1wiO1xuICAgIH0gZWxzZSBpZiAoXG4gICAgICBjdXJyZW50LmNvbmRpdGlvbi5jb2RlID09PSAxMjM3IHx8XG4gICAgICBjdXJyZW50LmNvbmRpdGlvbi5jb2RlID09PSAxMjYxIHx8XG4gICAgICBjdXJyZW50LmNvbmRpdGlvbi5jb2RlID09PSAxMjY0XG4gICAgKSB7XG4gICAgICB3ZWF0aGVySWNvbi5zcmMgPSBcIndlYXRoZXJJY29ucy9pY2VQZWxsZXRzLnN2Z1wiO1xuICAgIH0gZWxzZSBpZiAoY3VycmVudC5jb25kaXRpb24uY29kZSA9PT0gMTI0MCkge1xuICAgICAgd2VhdGhlckljb24uc3JjID0gXCJ3ZWF0aGVySWNvbnMvbGlnaHRSYWluU2hvd2VyLnN2Z1wiO1xuICAgIH0gZWxzZSBpZiAoY3VycmVudC5jb25kaXRpb24uY29kZSA9PT0gMTI0Mykge1xuICAgICAgd2VhdGhlckljb24uc3JjID0gXCJ3ZWF0aGVySWNvbnMvbW9kZXJhdGVSYWluU2hvd2VyLnN2Z1wiO1xuICAgIH0gZWxzZSBpZiAoY3VycmVudC5jb25kaXRpb24uY29kZSA9PT0gMTI0Nikge1xuICAgICAgd2VhdGhlckljb24uc3JjID0gXCJ3ZWF0aGVySWNvbnMvdG9ycmVudGlhbFJhaW5TaG93ZXIuc3ZnXCI7XG4gICAgfSBlbHNlIGlmIChjdXJyZW50LmNvbmRpdGlvbi5jb2RlID09PSAxMjczKSB7XG4gICAgICB3ZWF0aGVySWNvbi5zcmMgPSBcIndlYXRoZXJJY29ucy9wYXRjaHlMaWdodFJhaW5UaHVuZGVyLnN2Z1wiO1xuICAgIH0gZWxzZSBpZiAoY3VycmVudC5jb25kaXRpb24uY29kZSA9PT0gMTI3Nikge1xuICAgICAgd2VhdGhlckljb24uc3JjID0gXCJ3ZWF0aGVySWNvbnMvcGF0Y2h5SGVhdnlSYWluVGh1bmRlci5zdmdcIjtcbiAgICB9IGVsc2UgaWYgKFxuICAgICAgY3VycmVudC5jb25kaXRpb24uY29kZSA9PT0gMTI3OSB8fFxuICAgICAgY3VycmVudC5jb25kaXRpb24uY29kZSA9PT0gMTI4MlxuICAgICkge1xuICAgICAgd2VhdGhlckljb24uc3JjID0gXCJ3ZWF0aGVySWNvbnMvcGF0Y2h5U25vd1RodW5kZXIuc3ZnXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIHdlYXRoZXJJY29uLnNyYyA9IGN1cnJlbnQuY29uZGl0aW9uLmljb247XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGlmIChjdXJyZW50LmNvbmRpdGlvbi5jb2RlID09PSAxMDAwICYmIGN1cnJlbnQuaXNfZGF5KSB7XG4gICAgICB3ZWF0aGVySWNvbi5zcmMgPSBcIndlYXRoZXJJY29ucy9zdW5ueS5zdmdcIjtcbiAgICB9IGVsc2UgaWYgKGN1cnJlbnQuY29uZGl0aW9uLmNvZGUgPT09IDEwMDAgJiYgIWN1cnJlbnQuaXNfZGF5KSB7XG4gICAgICB3ZWF0aGVySWNvbi5zcmMgPSBcIndlYXRoZXJJY29ucy9jbGVhci5zdmdcIjtcbiAgICB9IGVsc2UgaWYgKGN1cnJlbnQuY29uZGl0aW9uLmNvZGUgPT09IDEwMDMgJiYgY3VycmVudC5pc19kYXkpIHtcbiAgICAgIHdlYXRoZXJJY29uLnNyYyA9IFwid2VhdGhlckljb25zL3BhcnRseUNsb3VkeURheS5zdmdcIjtcbiAgICB9IGVsc2UgaWYgKGN1cnJlbnQuY29uZGl0aW9uLmNvZGUgPT09IDEwMDMgJiYgIWN1cnJlbnQuaXNfZGF5KSB7XG4gICAgICB3ZWF0aGVySWNvbi5zcmMgPSBcIndlYXRoZXJJY29ucy9wYXJ0bHlDbG91ZHlOaWdodC5zdmdcIjtcbiAgICB9IGVsc2UgaWYgKFxuICAgICAgY3VycmVudC5jb25kaXRpb24uY29kZSA9PT0gMTAwNiB8fFxuICAgICAgY3VycmVudC5jb25kaXRpb24uY29kZSA9PT0gMTAwOVxuICAgICkge1xuICAgICAgd2VhdGhlckljb24uc3JjID0gXCJ3ZWF0aGVySWNvbnMvY2xvdWR5LnN2Z1wiO1xuICAgIH0gZWxzZSBpZiAoY3VycmVudC5jb25kaXRpb24uY29kZSA9PT0gMTAzMCkge1xuICAgICAgd2VhdGhlckljb24uc3JjID0gXCJ3ZWF0aGVySWNvbnMvbWlzdC5zdmdcIjtcbiAgICB9IGVsc2UgaWYgKFxuICAgICAgKGN1cnJlbnQuY29uZGl0aW9uLmNvZGUgPT09IDEwNjMgfHwgY3VycmVudC5jb25kaXRpb24uY29kZSA9PT0gMTE1MCkgJiZcbiAgICAgIGN1cnJlbnQuaXNfZGF5XG4gICAgKSB7XG4gICAgICB3ZWF0aGVySWNvbi5zcmMgPSBcIndlYXRoZXJJY29ucy9wYXRjaHlSYWluRGF5LnN2Z1wiO1xuICAgIH0gZWxzZSBpZiAoXG4gICAgICAoY3VycmVudC5jb25kaXRpb24uY29kZSA9PT0gMTA2MyB8fCBjdXJyZW50LmNvbmRpdGlvbi5jb2RlID09PSAxMTUwKSAmJlxuICAgICAgIWN1cnJlbnQuaXNfZGF5XG4gICAgKSB7XG4gICAgICB3ZWF0aGVySWNvbi5zcmMgPSBcIndlYXRoZXJJY29ucy9wYXRjaHlSYWluTmlnaHQuc3ZnXCI7XG4gICAgfSBlbHNlIGlmIChcbiAgICAgIChjdXJyZW50LmNvbmRpdGlvbi5jb2RlID09PSAxMDY2IHx8IGN1cnJlbnQuY29uZGl0aW9uLmNvZGUgPT09IDEyMTApICYmXG4gICAgICBjdXJyZW50LmlzX2RheVxuICAgICkge1xuICAgICAgd2VhdGhlckljb24uc3JjID0gXCJ3ZWF0aGVySWNvbnMvcGF0Y2h5U25vd0RheS5zdmdcIjtcbiAgICB9IGVsc2UgaWYgKFxuICAgICAgKGN1cnJlbnQuY29uZGl0aW9uLmNvZGUgPT09IDEwNjYgfHwgY3VycmVudC5jb25kaXRpb24uY29kZSA9PT0gMTIxMCkgJiZcbiAgICAgICFjdXJyZW50LmlzX2RheVxuICAgICkge1xuICAgICAgd2VhdGhlckljb24uc3JjID0gXCJ3ZWF0aGVySWNvbnMvcGF0Y2h5U25vd05pZ2h0LnN2Z1wiO1xuICAgIH0gZWxzZSBpZiAoY3VycmVudC5jb25kaXRpb24uY29kZSA9PT0gMTA2OSAmJiBjdXJyZW50LmlzX2RheSkge1xuICAgICAgd2VhdGhlckljb24uc3JjID0gXCJ3ZWF0aGVySWNvbnMvcGF0Y2h5U2xlZXREYXkuc3ZnXCI7XG4gICAgfSBlbHNlIGlmIChjdXJyZW50LmNvbmRpdGlvbi5jb2RlID09PSAxMDY5ICYmICFjdXJyZW50LmlzX2RheSkge1xuICAgICAgd2VhdGhlckljb24uc3JjID0gXCJ3ZWF0aGVySWNvbnMvcGF0Y2h5U2xlZXROaWdodC5zdmdcIjtcbiAgICB9IGVsc2UgaWYgKFxuICAgICAgY3VycmVudC5jb25kaXRpb24uY29kZSA9PT0gMTA3MiB8fFxuICAgICAgY3VycmVudC5jb25kaXRpb24uY29kZSA9PT0gMTE2OCB8fFxuICAgICAgY3VycmVudC5jb25kaXRpb24uY29kZSA9PT0gMTE5OCB8fFxuICAgICAgY3VycmVudC5jb25kaXRpb24uY29kZSA9PT0gMTIwNCB8fFxuICAgICAgY3VycmVudC5jb25kaXRpb24uY29kZSA9PT0gMTI0OVxuICAgICkge1xuICAgICAgd2VhdGhlckljb24uc3JjID0gXCJ3ZWF0aGVySWNvbnMvZmVlemluZ0RyaXp6bGUuc3ZnXCI7XG4gICAgfSBlbHNlIGlmIChjdXJyZW50LmNvbmRpdGlvbi5jb2RlID09PSAxMDg3KSB7XG4gICAgICB3ZWF0aGVySWNvbi5zcmMgPSBcIndlYXRoZXJJY29ucy90aHVuZGVyeU91dGJyZWFrcy5zdmdcIjtcbiAgICB9IGVsc2UgaWYgKGN1cnJlbnQuY29uZGl0aW9uLmNvZGUgPT09IDExMTQpIHtcbiAgICAgIHdlYXRoZXJJY29uLnNyYyA9IFwid2VhdGhlckljb25zL2Jsb3dpbmdTbm93LnN2Z1wiO1xuICAgIH0gZWxzZSBpZiAoY3VycmVudC5jb25kaXRpb24uY29kZSA9PT0gMTExNykge1xuICAgICAgd2VhdGhlckljb24uc3JjID0gXCJ3ZWF0aGVySWNvbnMvYmxpenphcmQuc3ZnXCI7XG4gICAgfSBlbHNlIGlmIChjdXJyZW50LmNvbmRpdGlvbi5jb2RlID09PSAxMTM1KSB7XG4gICAgICB3ZWF0aGVySWNvbi5zcmMgPSBcIndlYXRoZXJJY29ucy9mb2cuc3ZnXCI7XG4gICAgfSBlbHNlIGlmIChjdXJyZW50LmNvbmRpdGlvbi5jb2RlID09PSAxMTQ3KSB7XG4gICAgICB3ZWF0aGVySWNvbi5zcmMgPSBcIndlYXRoZXJJY29ucy9mcmVlemluZ0ZvZy5zdmdcIjtcbiAgICB9IGVsc2UgaWYgKGN1cnJlbnQuY29uZGl0aW9uLmNvZGUgPT09IDExNTMpIHtcbiAgICAgIHdlYXRoZXJJY29uLnNyYyA9IFwid2VhdGhlckljb25zL2xpZ2h0UmFpbi5zdmdcIjtcbiAgICB9IGVsc2UgaWYgKFxuICAgICAgY3VycmVudC5jb25kaXRpb24uY29kZSA9PT0gMTE3MSB8fFxuICAgICAgY3VycmVudC5jb25kaXRpb24uY29kZSA9PT0gMTIwMSB8fFxuICAgICAgY3VycmVudC5jb25kaXRpb24uY29kZSA9PT0gMTIwNyB8fFxuICAgICAgY3VycmVudC5jb25kaXRpb24uY29kZSA9PT0gMTI1MlxuICAgICkge1xuICAgICAgd2VhdGhlckljb24uc3JjID0gXCJ3ZWF0aGVySWNvbnMvaGVhdnlGcmVlemluZ0RyaXp6bGUuc3ZnXCI7XG4gICAgfSBlbHNlIGlmIChcbiAgICAgIGN1cnJlbnQuY29uZGl0aW9uLmNvZGUgPT09IDExODAgfHxcbiAgICAgIGN1cnJlbnQuY29uZGl0aW9uLmNvZGUgPT09IDExODNcbiAgICApIHtcbiAgICAgIHdlYXRoZXJJY29uLnNyYyA9IFwid2VhdGhlckljb25zL2xpZ2h0UmFpbi5zdmdcIjtcbiAgICB9IGVsc2UgaWYgKFxuICAgICAgY3VycmVudC5jb25kaXRpb24uY29kZSA9PT0gMTE4NiB8fFxuICAgICAgY3VycmVudC5jb25kaXRpb24uY29kZSA9PT0gMTE4OVxuICAgICkge1xuICAgICAgd2VhdGhlckljb24uc3JjID0gXCJ3ZWF0aGVySWNvbnMvbW9kZXJhdGVSYWluLnN2Z1wiO1xuICAgIH0gZWxzZSBpZiAoXG4gICAgICBjdXJyZW50LmNvbmRpdGlvbi5jb2RlID09PSAxMTkyIHx8XG4gICAgICBjdXJyZW50LmNvbmRpdGlvbi5jb2RlID09PSAxMTk1XG4gICAgKSB7XG4gICAgICB3ZWF0aGVySWNvbi5zcmMgPSBcIndlYXRoZXJJY29ucy9oZWF2eVJhaW4uc3ZnXCI7XG4gICAgfSBlbHNlIGlmIChcbiAgICAgIGN1cnJlbnQuY29uZGl0aW9uLmNvZGUgPT09IDEyMTMgfHxcbiAgICAgIGN1cnJlbnQuY29uZGl0aW9uLmNvZGUgPT09IDEyNTVcbiAgICApIHtcbiAgICAgIHdlYXRoZXJJY29uLnNyYyA9IFwid2VhdGhlckljb25zL2xpZ2h0U25vdy5zdmdcIjtcbiAgICB9IGVsc2UgaWYgKFxuICAgICAgY3VycmVudC5jb25kaXRpb24uY29kZSA9PT0gMTIxNiB8fFxuICAgICAgY3VycmVudC5jb25kaXRpb24uY29kZSA9PT0gMTIxOSB8fFxuICAgICAgY3VycmVudC5jb25kaXRpb24uY29kZSA9PT0gMTI1OFxuICAgICkge1xuICAgICAgd2VhdGhlckljb24uc3JjID0gXCJ3ZWF0aGVySWNvbnMvbW9kZXJhdGVTbm93LnN2Z1wiO1xuICAgIH0gZWxzZSBpZiAoXG4gICAgICBjdXJyZW50LmNvbmRpdGlvbi5jb2RlID09PSAxMjIyIHx8XG4gICAgICBjdXJyZW50LmNvbmRpdGlvbi5jb2RlID09PSAxMjI1XG4gICAgKSB7XG4gICAgICB3ZWF0aGVySWNvbi5zcmMgPSBcIndlYXRoZXJJY29ucy9oZWF2eVNub3cuc3ZnXCI7XG4gICAgfSBlbHNlIGlmIChcbiAgICAgIGN1cnJlbnQuY29uZGl0aW9uLmNvZGUgPT09IDEyMzcgfHxcbiAgICAgIGN1cnJlbnQuY29uZGl0aW9uLmNvZGUgPT09IDEyNjEgfHxcbiAgICAgIGN1cnJlbnQuY29uZGl0aW9uLmNvZGUgPT09IDEyNjRcbiAgICApIHtcbiAgICAgIHdlYXRoZXJJY29uLnNyYyA9IFwid2VhdGhlckljb25zL2ljZVBlbGxldHMuc3ZnXCI7XG4gICAgfSBlbHNlIGlmIChjdXJyZW50LmNvbmRpdGlvbi5jb2RlID09PSAxMjQwKSB7XG4gICAgICB3ZWF0aGVySWNvbi5zcmMgPSBcIndlYXRoZXJJY29ucy9saWdodFJhaW5TaG93ZXIuc3ZnXCI7XG4gICAgfSBlbHNlIGlmIChjdXJyZW50LmNvbmRpdGlvbi5jb2RlID09PSAxMjQzKSB7XG4gICAgICB3ZWF0aGVySWNvbi5zcmMgPSBcIndlYXRoZXJJY29ucy9tb2RlcmF0ZVJhaW5TaG93ZXIuc3ZnXCI7XG4gICAgfSBlbHNlIGlmIChjdXJyZW50LmNvbmRpdGlvbi5jb2RlID09PSAxMjQ2KSB7XG4gICAgICB3ZWF0aGVySWNvbi5zcmMgPSBcIndlYXRoZXJJY29ucy90b3JyZW50aWFsUmFpblNob3dlci5zdmdcIjtcbiAgICB9IGVsc2UgaWYgKGN1cnJlbnQuY29uZGl0aW9uLmNvZGUgPT09IDEyNzMpIHtcbiAgICAgIHdlYXRoZXJJY29uLnNyYyA9IFwid2VhdGhlckljb25zL3BhdGNoeUxpZ2h0UmFpblRodW5kZXIuc3ZnXCI7XG4gICAgfSBlbHNlIGlmIChjdXJyZW50LmNvbmRpdGlvbi5jb2RlID09PSAxMjc2KSB7XG4gICAgICB3ZWF0aGVySWNvbi5zcmMgPSBcIndlYXRoZXJJY29ucy9wYXRjaHlIZWF2eVJhaW5UaHVuZGVyLnN2Z1wiO1xuICAgIH0gZWxzZSBpZiAoXG4gICAgICBjdXJyZW50LmNvbmRpdGlvbi5jb2RlID09PSAxMjc5IHx8XG4gICAgICBjdXJyZW50LmNvbmRpdGlvbi5jb2RlID09PSAxMjgyXG4gICAgKSB7XG4gICAgICB3ZWF0aGVySWNvbi5zcmMgPSBcIndlYXRoZXJJY29ucy9wYXRjaHlTbm93VGh1bmRlci5zdmdcIjtcbiAgICB9IGVsc2Uge1xuICAgICAgd2VhdGhlckljb24uc3JjID0gY3VycmVudC5jb25kaXRpb24uaWNvbjtcbiAgICB9XG4gIH1cbn07XG5cbmNvbnN0IHVwcGVyQ29uZGl0aW9uVHh0ID0gZnVuY3Rpb24gKGN1cnJlbnQpIHtcbiAgbGV0IGNvbmRpdGlvblN0ciA9IGN1cnJlbnQuY29uZGl0aW9uLnRleHQ7XG4gIGxldCBhcnIgPSBjb25kaXRpb25TdHIuc3BsaXQoXCIgXCIpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xuICAgIGFycltpXSA9IGFycltpXVswXS50b1VwcGVyQ2FzZSgpICsgYXJyW2ldLnN1YnN0cigxKTtcbiAgfVxuICBjb25kaXRpb25TdHIgPSBhcnIuam9pbihcIiBcIik7XG4gIHJldHVybiBjb25kaXRpb25TdHI7XG59O1xuXG5leHBvcnQgeyBzZWxlY3RJY29uLCB1cHBlckNvbmRpdGlvblR4dCB9O1xuIiwiY29uc3QgcG9wdWxhdGUgPSBhc3luYyBmdW5jdGlvbiAoXG4gIHdlYXRoZXJEYXRhLFxuICBjdXJyZW50LFxuICBmb3JlY2FzdCxcbiAgbG9jYXRpb24sXG4gIHNlbGVjdEljb24sXG4gIHVwcGVyQ29uZGl0aW9uVHh0LFxuICBkYXlzQXJyLFxuICBkYXRlVHh0LFxuICB0aW1lLFxuICBkYXlXZWVrLFxuICB0ZW1wX2MsXG4gIHRlbXBfZixcbiAgZmVlbHNfYyxcbiAgZmVlbHNfZixcbiAgaHVtaWRpdHksXG4gIGNoYW5jZSxcbiAgY2hhbmNlU25vdyxcbiAgd2luZFxuKSB7XG4gIGN1cnJlbnQgPSBhd2FpdCB3ZWF0aGVyRGF0YS5jdXJyZW50O1xuICBmb3JlY2FzdCA9IGF3YWl0IHdlYXRoZXJEYXRhLmZvcmVjYXN0O1xuICBsb2NhdGlvbiA9IGF3YWl0IHdlYXRoZXJEYXRhLmxvY2F0aW9uO1xuICBjb25zdCBsb2NhbGUgPSBcImVuLUdCXCI7XG5cbiAgbGV0IGZvcmVjYXN0QXJyID0gZm9yZWNhc3QuZm9yZWNhc3RkYXk7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgZm9yZWNhc3RBcnIubGVuZ3RoOyBpKyspIHtcbiAgICBsZXQgZm9yZWNhc3QgPSBmb3JlY2FzdEFycltpXS5kYXk7XG4gICAgbGV0IGRhdGVEYWlseSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNkYXRlJHtpfWApO1xuICAgIGxldCBkYXlXZWVrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI2RheVdlZWske2l9YCk7XG4gICAgbGV0IGNvbmRpdGlvbkRhaWx5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI2NvbmRpdGlvbiR7aX1gKTtcbiAgICBsZXQgd2VhdGhlckljb25EYWlseSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCN3ZWF0aGVySWNvbiR7aX1gKTtcbiAgICBsZXQgdGVtcF9jRGFpbHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjdGVtcF9jJHtpfWApO1xuICAgIGxldCB0ZW1wX2ZEYWlseSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCN0ZW1wX2Yke2l9YCk7XG5cbiAgICAvLyBEYXRlIHRvIFVLIGZvcm1hdFxuICAgIGxldCB0aW1lc3RhbXAgPSBmb3JlY2FzdEFycltpXS5kYXRlO1xuICAgIGxldCBkYXRlID0gbmV3IERhdGUodGltZXN0YW1wKTtcbiAgICBsZXQgZGF5ID0gZGF0ZS5nZXREYXkoKTtcblxuICAgIGxldCBjb25kaXRpb24gPSBmb3JlY2FzdEFycltpXS5kYXk7XG4gICAgaSA9PT0gMFxuICAgICAgPyAoZGF5V2Vlay5pbm5lckhUTUwgPSBcIlRvZGF5XCIpXG4gICAgICA6IChkYXlXZWVrLmlubmVySFRNTCA9IGRheXNBcnJbZGF5XSk7XG4gICAgZGF0ZSA9IGRhdGVcbiAgICAgIC50b0xvY2FsZVN0cmluZyhsb2NhbGUsIHsgdGltZVpvbmU6IFwiRXVyb3BlL0xvbmRvblwiIH0pXG4gICAgICAuc3BsaXQoXCIsXCIpO1xuICAgIGRhdGVEYWlseS5pbm5lckhUTUwgPSBkYXRlWzBdO1xuICAgIGxldCBjb25kaXRpb250eHQgPSBhd2FpdCB1cHBlckNvbmRpdGlvblR4dChjb25kaXRpb24pO1xuICAgIGNvbmRpdGlvbkRhaWx5LmlubmVySFRNTCA9IGNvbmRpdGlvbnR4dDtcbiAgICB0ZW1wX2NEYWlseS5pbm5lckhUTUwgPSBgJHtmb3JlY2FzdEFycltpXS5kYXkuYXZndGVtcF9jfSAmIzg0NTFgO1xuICAgIHRlbXBfZkRhaWx5LmlubmVySFRNTCA9IGAke2ZvcmVjYXN0QXJyW2ldLmRheS5hdmd0ZW1wX2Z9ICYjODQ1N2A7XG4gICAgbGV0IGRhaWx5ID0gdHJ1ZTtcbiAgICBzZWxlY3RJY29uKGZvcmVjYXN0LCB3ZWF0aGVySWNvbkRhaWx5LCBkYWlseSk7XG4gIH1cbiAgLy8gVXBkYXRlIENvbmRpdGlvblxuICBsZXQgY29uZGl0aW9udHh0ID0gYXdhaXQgdXBwZXJDb25kaXRpb25UeHQoY3VycmVudCk7XG4gIGNvbmRpdGlvbi5pbm5lckhUTUwgPSBjb25kaXRpb250eHQ7XG4gIGNpdHkuaW5uZXJIVE1MID0gYCR7bG9jYXRpb24ubmFtZX0sIGA7XG4gIGNvdW50cnkuaW5uZXJIVE1MID0gbG9jYXRpb24uY291bnRyeTtcbiAgbGV0IHRpbWVzdGFtcCA9IGxvY2F0aW9uLmxvY2FsdGltZTtcbiAgbGV0IGRhdGUgPSBuZXcgRGF0ZSh0aW1lc3RhbXApO1xuICBkYXRlID0gZGF0ZS50b0xvY2FsZVN0cmluZyhsb2NhbGUsIHsgdGltZVpvbmU6IFwiRXVyb3BlL0xvbmRvblwiIH0pLnNwbGl0KFwiLFwiKTtcbiAgZGF0ZVR4dC5pbm5lckhUTUwgPSBkYXRlWzBdO1xuICB0aW1lLmlubmVySFRNTCA9IGRhdGVbMV07XG4gIGRheVdlZWsuaW5uZXJIVE1MID0gXCJDdXJyZW50bHlcIjtcbiAgdGVtcF9jLmlubmVySFRNTCA9IGAke2N1cnJlbnQudGVtcF9jfSAmIzg0NTFgO1xuICB0ZW1wX2YuaW5uZXJIVE1MID0gYCR7Y3VycmVudC50ZW1wX2Z9ICYjODQ1N2A7XG4gIGZlZWxzX2MuaW5uZXJIVE1MID0gYCR7Y3VycmVudC5mZWVsc2xpa2VfY30gJiM4NDUxYDtcbiAgZmVlbHNfZi5pbm5lckhUTUwgPSBgJHtjdXJyZW50LmZlZWxzbGlrZV9mfSAmIzg0NTdgO1xuICBodW1pZGl0eS5pbm5lckhUTUwgPSBgJHtjdXJyZW50Lmh1bWlkaXR5fSAmI3gyNWA7XG4gIGNoYW5jZS5pbm5lckhUTUwgPSBgJHtmb3JlY2FzdC5mb3JlY2FzdGRheVswXS5kYXkuZGFpbHlfY2hhbmNlX29mX3JhaW59ICYjeDI1YDtcbiAgY2hhbmNlU25vdy5pbm5lckhUTUwgPSBgJHtmb3JlY2FzdC5mb3JlY2FzdGRheVswXS5kYXkuZGFpbHlfY2hhbmNlX29mX3Nub3d9ICYjeDI1YDtcbiAgd2luZC5pbm5lckhUTUwgPSBgJHtjdXJyZW50LndpbmRfbXBofSBtcGhgO1xuICAvLyBJY29uIENvZGVcbiAgbGV0IHdlYXRoZXJJY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN3ZWF0aGVySWNvblwiKTtcbiAgbGV0IGRhaWx5ID0gZmFsc2U7XG4gIHNlbGVjdEljb24oY3VycmVudCwgd2VhdGhlckljb24pO1xufTtcblxuZXhwb3J0IHsgcG9wdWxhdGUgfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcbmltcG9ydCB7IHBvcHVsYXRlIH0gZnJvbSBcIi4vcG9wdWxhdGVcIjtcbmltcG9ydCB7IHNlbGVjdEljb24sIHVwcGVyQ29uZGl0aW9uVHh0IH0gZnJvbSBcIi4vZnVuY3Rpb25hbGl0eVwiO1xuXG5jb25zdCBsb2NhdGlvbklucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNsb2NhdGlvbklucHV0XCIpO1xuY29uc3Qgc2VhcmNoQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zdWJtaXRMb2NhdGlvblwiKTtcbmxldCBsb2NhdGlvblR4dCA9IFwiTG9uZG9uXCI7XG5jb25zdCBjb25kaXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbmRpdGlvblwiKTtcbmNvbnN0IGNpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NpdHlcIik7XG5jb25zdCBjb3VudHJ5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb3VudHJ5XCIpO1xuY29uc3QgZGF0ZVR4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZGF0ZVwiKTtcbmNvbnN0IHRpbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RpbWVcIik7XG5jb25zdCBkYXlzQXJyID0gW1xuICBcIlN1bmRheVwiLFxuICBcIk1vbmRheVwiLFxuICBcIlR1ZXNkYXlcIixcbiAgXCJXZWRuZXNkYXlcIixcbiAgXCJUaHVyc2RheVwiLFxuICBcIkZyaWRheVwiLFxuICBcIlNhdHVyZGF5XCIsXG5dO1xuY29uc3QgZGF5V2VlayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZGF5V2Vla1wiKTtcbmNvbnN0IHRlbXBfYyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGVtcF9jXCIpO1xuY29uc3QgdGVtcF9mID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0ZW1wX2ZcIik7XG4vLyBGdXJ0aGVyIERldGFpbHNcbmNvbnN0IGZlZWxzX2MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2ZlZWxzX2NpbmZvXCIpO1xuY29uc3QgZmVlbHNfZiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZmVlbHNfZmluZm9cIik7XG5jb25zdCBodW1pZGl0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjaHVtaWRpdHlpbmZvXCIpO1xuY29uc3QgY2hhbmNlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjaGFuY2VpbmZvXCIpO1xuY29uc3QgY2hhbmNlU25vdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY2hhbmNlU25vd2luZm9cIik7XG5jb25zdCB3aW5kID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN3aW5kaW5mb1wiKTtcbmNvbnN0IGJ0blRlbXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJ0blRlbXBcIik7XG5jb25zdCBlcnJvck1zZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZXJyb3JcIik7XG5cbmFzeW5jIGZ1bmN0aW9uIGZldGNoV2VhdGhlcihcbiAgbG9jYXRpb25UeHQsXG4gIHBvcHVsYXRlLFxuICBkYXlzQXJyLFxuICBkYXRlVHh0LFxuICB0aW1lLFxuICBkYXlXZWVrLFxuICB0ZW1wX2MsXG4gIHRlbXBfZixcbiAgZmVlbHNfYyxcbiAgZmVlbHNfZixcbiAgaHVtaWRpdHksXG4gIGNoYW5jZSxcbiAgY2hhbmNlU25vdyxcbiAgd2luZFxuKSB7XG4gIGVycm9yTXNnLmNsYXNzTGlzdCA9IFwiaGlkZGVuXCI7XG4gIGxldCBjdXJyZW50ID0gXCJcIjtcbiAgbGV0IGZvcmVjYXN0ID0gXCJcIjtcbiAgbGV0IGxvY2F0aW9uID0gXCJcIjtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbiAgICBgaHR0cDovL2FwaS53ZWF0aGVyYXBpLmNvbS92MS9mb3JlY2FzdC5qc29uP2tleT00ZGE0MDMyODZkZDY0ZGNmYjBjMjAwMDE0MjMzMDA4JnE9JHtsb2NhdGlvblR4dH0mZGF5cz03JmFxaT15ZXMmYWxlcnRzPW5vYCxcbiAgICB7IG1vZGU6IFwiY29yc1wiIH1cbiAgKTtcbiAgY29uc3Qgd2VhdGhlckRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gIHBvcHVsYXRlKFxuICAgIHdlYXRoZXJEYXRhLFxuICAgIGN1cnJlbnQsXG4gICAgZm9yZWNhc3QsXG4gICAgbG9jYXRpb24sXG4gICAgc2VsZWN0SWNvbixcbiAgICB1cHBlckNvbmRpdGlvblR4dCxcbiAgICBkYXlzQXJyLFxuICAgIGRhdGVUeHQsXG4gICAgdGltZSxcbiAgICBkYXlXZWVrLFxuICAgIHRlbXBfYyxcbiAgICB0ZW1wX2YsXG4gICAgZmVlbHNfYyxcbiAgICBmZWVsc19mLFxuICAgIGh1bWlkaXR5LFxuICAgIGNoYW5jZSxcbiAgICBjaGFuY2VTbm93LFxuICAgIHdpbmRcbiAgKS5jYXRjaCgoZXJyKSA9PiB7XG4gICAgZXJyb3JNc2cuY2xhc3NMaXN0ID0gXCJcIjtcbiAgfSk7XG5cbiAgLy8gY29uc29sZS5sb2cod2VhdGhlckRhdGEpO1xufVxuXG5mZXRjaFdlYXRoZXIoXG4gIGxvY2F0aW9uVHh0LFxuICBwb3B1bGF0ZSxcbiAgZGF5c0FycixcbiAgZGF0ZVR4dCxcbiAgdGltZSxcbiAgZGF5V2VlayxcbiAgdGVtcF9jLFxuICB0ZW1wX2YsXG4gIGZlZWxzX2MsXG4gIGZlZWxzX2YsXG4gIGh1bWlkaXR5LFxuICBjaGFuY2UsXG4gIGNoYW5jZVNub3csXG4gIHdpbmRcbik7XG5cbi8vIEV2ZW50IExpc3RlbmVyc1xuXG5sb2NhdGlvbklucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoKSA9PiB7XG4gIGxvY2F0aW9uVHh0ID0gbG9jYXRpb25JbnB1dC52YWx1ZTtcbn0pO1xuXG5zZWFyY2hCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgZmV0Y2hXZWF0aGVyKFxuICAgIGxvY2F0aW9uVHh0LFxuICAgIHBvcHVsYXRlLFxuICAgIGRheXNBcnIsXG4gICAgZGF0ZVR4dCxcbiAgICB0aW1lLFxuICAgIGRheVdlZWssXG4gICAgdGVtcF9jLFxuICAgIHRlbXBfZixcbiAgICBmZWVsc19jLFxuICAgIGZlZWxzX2YsXG4gICAgaHVtaWRpdHksXG4gICAgY2hhbmNlLFxuICAgIGNoYW5jZVNub3csXG4gICAgd2luZFxuICApO1xuICBsb2NhdGlvblR4dCA9IFwiXCI7XG4gIGxvY2F0aW9uSW5wdXQudmFsdWUgPSBcIlwiO1xufSk7XG5cbmJ0blRlbXAuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChmb3JlY2FzdFN3aXRjaCkgPT4ge1xuICBsZXQgdGVtcF9jMCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGVtcF9jMFwiKTtcbiAgbGV0IHRlbXBfYzEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RlbXBfYzFcIik7XG4gIGxldCB0ZW1wX2MyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0ZW1wX2MyXCIpO1xuICBsZXQgdGVtcF9mMCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGVtcF9mMFwiKTtcbiAgbGV0IHRlbXBfZjEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RlbXBfZjFcIik7XG4gIGxldCB0ZW1wX2YyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0ZW1wX2YyXCIpO1xuICBpZiAoYnRuVGVtcC5pZCA9PT0gXCJzd2l0Y2hGXCIpIHtcbiAgICBidG5UZW1wLmlubmVySFRNTCA9IFwiU3dpdGNoICYjODQ1MVwiO1xuICAgIGJ0blRlbXAuaWQgPSBcInN3aXRjaENcIjtcbiAgICB0ZW1wX2MuY2xhc3NMaXN0ID0gXCJoaWRkZW5cIjtcbiAgICB0ZW1wX2YuY2xhc3NMaXN0ID0gXCJcIjtcbiAgICBmZWVsc19jLmNsYXNzTGlzdCA9IFwiaGlkZGVuXCI7XG4gICAgZmVlbHNfZi5jbGFzc0xpc3QgPSBcIlwiO1xuICAgIHRlbXBfYzAuY2xhc3NMaXN0ID0gXCJoaWRkZW5cIjtcbiAgICB0ZW1wX2MxLmNsYXNzTGlzdCA9IFwiaGlkZGVuXCI7XG4gICAgdGVtcF9jMi5jbGFzc0xpc3QgPSBcImhpZGRlblwiO1xuICAgIHRlbXBfZjAuY2xhc3NMaXN0ID0gXCJcIjtcbiAgICB0ZW1wX2YxLmNsYXNzTGlzdCA9IFwiXCI7XG4gICAgdGVtcF9mMi5jbGFzc0xpc3QgPSBcIlwiO1xuICB9IGVsc2Uge1xuICAgIGJ0blRlbXAuaW5uZXJIVE1MID0gXCJTd2l0Y2ggJiM4NDU3XCI7XG4gICAgYnRuVGVtcC5pZCA9IFwic3dpdGNoRlwiO1xuICAgIHRlbXBfYy5jbGFzc0xpc3QgPSBcIlwiO1xuICAgIHRlbXBfZi5jbGFzc0xpc3QgPSBcImhpZGRlblwiO1xuICAgIGZlZWxzX2MuY2xhc3NMaXN0ID0gXCJcIjtcbiAgICBmZWVsc19mLmNsYXNzTGlzdCA9IFwiaGlkZGVuXCI7XG4gICAgdGVtcF9jMC5jbGFzc0xpc3QgPSBcIlwiO1xuICAgIHRlbXBfYzEuY2xhc3NMaXN0ID0gXCJcIjtcbiAgICB0ZW1wX2MyLmNsYXNzTGlzdCA9IFwiXCI7XG4gICAgdGVtcF9mMC5jbGFzc0xpc3QgPSBcImhpZGRlblwiO1xuICAgIHRlbXBfZjEuY2xhc3NMaXN0ID0gXCJoaWRkZW5cIjtcbiAgICB0ZW1wX2YyLmNsYXNzTGlzdCA9IFwiaGlkZGVuXCI7XG4gIH1cbn0pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9