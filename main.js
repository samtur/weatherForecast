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
    grid-template-columns: 25rem 9rem;
    grid-template-rows: 3rem 1rem;
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
    border-radius: 0.2rem 0rem 0rem 0.2rem;
    grid-column: 1/2;
    grid-row: 1/2;
}

#error {
    font-size: 0.8rem;
    grid-column: 1/3;
    grid-row: 2/3;
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
    border-radius: 0rem 0.2rem 0.2rem 0rem;
    grid-column: 2/3;
    grid-row: 1/2;
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
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAiFI,SAAS;IACT,UAAU;IACV,SAAS;IACT,eAAe;IACf,aAAa;IACb,wBAAwB;AAC5B;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,kBAAkB;IAClB,oBAAoB;;AAExB;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,wBAAwB;IACxB,+DAAmD;IACnD,gBAAgB;AACpB;;AAEA;IACI,8BAA8B;IAC9B,+DAAyD;IACzD,gBAAgB;AACpB;;AAEA;IACI,yBAAyB;IACzB,+DAAoD;IACpD,gBAAgB;AACpB;;AAEA;IACI,yBAAyB;IACzB,gCAAgC;IAChC,uBAAuB;IACvB,aAAa;IACb,+BAA+B;IAC/B,8BAA8B;IAC9B,aAAa;IACb,YAAY;IACZ,gBAAgB;IAChB,kBAAkB;IAClB,iBAAiB;IACjB,iBAAiB;AACrB;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;;;IAGI,mBAAmB;AACvB;;AAEA,aAAa;AACb;IACI,yBAAyB;IACzB,aAAa;IACb,mBAAmB;IACnB,eAAe;IACf,aAAa;IACb,gBAAgB;;AAEpB;;AAEA;IACI,gBAAgB;IAChB,iBAAiB;AACrB;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,8BAA8B;IAC9B,iBAAiB;IACjB,aAAa;IACb,iCAAiC;IACjC,6BAA6B;IAC7B,kBAAkB;IAClB,UAAU;IACV,gBAAgB;IAChB,kBAAkB;IAClB,mBAAmB;IACnB,gBAAgB;IAChB,aAAa;AACjB;;AAEA;IACI,8BAA8B;IAC9B,eAAe;IACf,YAAY;IACZ,gBAAgB;IAChB,mBAAmB;IACnB,gBAAgB;IAChB,YAAY;IACZ,kBAAkB;IAClB,kCAAkC;IAClC,kBAAkB;IAClB,gCAAgC;IAChC,iBAAiB;IACjB,sCAAsC;IACtC,gBAAgB;IAChB,aAAa;AACjB;;AAEA;IACI,iBAAiB;IACjB,gBAAgB;IAChB,aAAa;AACjB;;AAEA;IACI,sBAAsB;IACtB,aAAa;IACb,cAAc;IACd,eAAe;IACf,iBAAiB;IACjB,kCAAkC;IAClC,gCAAgC;IAChC,sBAAsB;IACtB,sCAAsC;IACtC,gBAAgB;IAChB,aAAa;AACjB;;;AAGA,cAAc;;AAEd;IACI,8BAA8B;IAC9B,aAAa;IACb,sBAAsB;IACtB,kBAAkB;IAClB,iBAAiB;IACjB,sBAAsB;IACtB,aAAa;IACb,gBAAgB;IAChB,iBAAiB;IACjB,SAAS;AACb;;AAEA;IACI,aAAa;IACb,SAAS;IACT,kBAAkB;IAClB,mBAAmB;AACvB;;;AAGA;IACI,8BAA8B;IAC9B,kBAAkB;IAClB,iBAAiB;;AAErB;;AAEA;IACI,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,8BAA8B;IAC9B,cAAc;IACd,eAAe;IACf,iBAAiB;IACjB,kCAAkC;IAClC,gCAAgC;IAChC,sBAAsB;IACtB,gBAAgB;IAChB,qBAAqB;AACzB;;AAEA;IACI,aAAa;IACb,YAAY;AAChB;;AAEA,UAAU;AACV;IACI,WAAW;IACX,aAAa;IACb,aAAa;IACb,kCAAkC;IAClC,8BAA8B;IAC9B,WAAW;IACX,aAAa;IACb,gBAAgB;IAChB,iBAAiB;IACjB,iBAAiB;AACrB;;;AAGA;IACI,8BAA8B;IAC9B,uBAAuB;IACvB,aAAa;IACb,sBAAsB;IACtB,WAAW;AACf;;AAEA;IACI,gBAAgB;IAChB,aAAa;IACb,iBAAiB;AACrB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,WAAW;IACX,YAAY;AAChB;;AAEA,oBAAoB;AACpB;IACI,aAAa;IACb,8BAA8B;IAC9B,mCAAmC;IACnC,aAAa;IACb,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,gBAAgB;AACpB;;AAEA;IACI,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,WAAW;AACf;;AAEA;IACI,iBAAiB;AACrB","sourcesContent":["html,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n    margin: 0;\n    padding: 0;\n    border: 0;\n    font-size: 100%;\n    font: inherit;\n    vertical-align: baseline;\n}\n\n.hidden {\n    display: none;\n}\n\n:root {\n    --bgColor: #d2d6d9;\n    --fontColor: #2b2e33;\n\n}\n\nul {\n    list-style: none;\n}\n\n@font-face {\n    font-family: \"InterThin\";\n    src: url(\"fonts/Inter-Thin.ttf\") format(\"truetype\");\n    font-weight: 100;\n}\n\n@font-face {\n    font-family: \"InterExtraLight\";\n    src: url(\"fonts/Inter-ExtraLight.ttf\") format(\"truetype\");\n    font-weight: 200;\n}\n\n@font-face {\n    font-family: \"InterLight\";\n    src: url(\"fonts/Inter-Light.ttf\") format(\"truetype\");\n    font-weight: 300;\n}\n\nbody {\n    font-family: \"InterLight\";\n    background-color: var(--bgColor);\n    color: var(--fontColor);\n    display: grid;\n    grid-template-rows: 15% 45% 40%;\n    grid-template-columns: 1fr 1fr;\n    height: 100vh;\n    width: 100vw;\n    overflow: scroll;\n    position: relative;\n    min-width: 1400px;\n    min-height: 900px;\n}\n\nhtml {\n    box-sizing: border-box;\n}\n\n*,\n*:before,\n*:after {\n    box-sizing: inherit;\n}\n\n/* Location */\n.location {\n    font-family: \"InterLight\";\n    display: flex;\n    flex-direction: row;\n    font-size: 4rem;\n    grid-row: 1/2;\n    grid-column: 1/3;\n\n}\n\n#city {\n    margin-top: 2rem;\n    margin-left: 4rem;\n}\n\n#country {\n    margin-top: 2rem;\n}\n\n.searchLocation {\n    font-family: \"InterExtraLight\";\n    margin-left: auto;\n    display: grid;\n    grid-template-columns: 25rem 9rem;\n    grid-template-rows: 3rem 1rem;\n    align-items: start;\n    padding: 0;\n    margin-top: 2rem;\n    margin-right: 4rem;\n    padding-top: 0.9rem;\n    grid-column: 2/3;\n    grid-row: 1/2;\n}\n\n#locationInput {\n    font-family: \"InterExtraLight\";\n    padding: 0.5rem;\n    margin: none;\n    box-shadow: none;\n    border-radius: none;\n    outline: inherit;\n    width: 25rem;\n    border-right: none;\n    border: 1px var(--fontColor) solid;\n    border-right: none;\n    background-color: var(--bgColor);\n    font-size: 1.5rem;\n    border-radius: 0.2rem 0rem 0rem 0.2rem;\n    grid-column: 1/2;\n    grid-row: 1/2;\n}\n\n#error {\n    font-size: 0.8rem;\n    grid-column: 1/3;\n    grid-row: 2/3;\n}\n\n.submitLocation {\n    padding: 0.1rem 0.2rem;\n    font: inherit;\n    color: inherit;\n    cursor: pointer;\n    font-size: 1.5rem;\n    border: 1px var(--fontColor) solid;\n    background-color: var(--bgColor);\n    padding: 0.5rem 1.5rem;\n    border-radius: 0rem 0.2rem 0.2rem 0rem;\n    grid-column: 2/3;\n    grid-row: 1/2;\n}\n\n\n/* Condition */\n\n.conditionPlace {\n    font-family: \"InterExtraLight\";\n    display: flex;\n    flex-direction: column;\n    align-items: start;\n    font-size: 2.3rem;\n    justify-content: start;\n    grid-row: 2/3;\n    grid-column: 1/2;\n    margin-left: 4rem;\n    gap: 2rem;\n}\n\n.iconCondition {\n    display: flex;\n    gap: 3rem;\n    padding-left: 1rem;\n    align-items: center;\n}\n\n\n.dateTime {\n    font-family: \"InterExtraLight\";\n    width: fit-content;\n    font-size: 1.8rem;\n\n}\n\n.conditionContainer {\n    display: flex;\n    flex-direction: column;\n}\n\n.btnTemp {\n    font-family: \"InterExtraLight\";\n    color: inherit;\n    cursor: pointer;\n    font-size: 1.5rem;\n    border: 1px var(--fontColor) solid;\n    background-color: var(--bgColor);\n    padding: 0.5rem 1.5rem;\n    margin-top: 1rem;\n    border-radius: 0.2rem;\n}\n\n#weatherIcon {\n    height: 15rem;\n    width: 15rem;\n}\n\n/* Daily */\n.daily {\n    width: 50vw;\n    height: 200px;\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr;\n    grid-template-rows: 50px 200px;\n    gap: 1.5rem;\n    grid-row: 3/4;\n    grid-column: 1/2;\n    margin-left: 4rem;\n    padding-top: 1rem;\n}\n\n\n.daily>div {\n    font-family: \"InterExtraLight\";\n    grid-template-rows: 2/3;\n    display: flex;\n    flex-direction: column;\n    gap: 1.2rem;\n}\n\n#dailyHeader {\n    grid-column: 1/4;\n    grid-row: 1/2;\n    font-size: 2.3rem;\n}\n\n.dailyDate {\n    font-size: 1.8rem;\n}\n\n.dailyCondition {\n    font-size: 1.8rem;\n}\n\n.dailyIcon {\n    width: 5rem;\n    height: 5rem;\n}\n\n/* Further Details */\n.furtherDetails {\n    display: grid;\n    grid-template-columns: 5fr 5fr;\n    grid-template-rows: 20% 20% 20% 20%;\n    grid-row: 2/4;\n    padding-left: 7rem;\n}\n\n#feels {\n    grid-row: 1/2;\n    grid-column: 2/3;\n}\n\n#humidity {\n    grid-row: 2/3;\n    grid-column: 2/3;\n}\n\n#chance {\n    grid-row: 3/4;\n    grid-column: 2/3;\n}\n\n#chanceSnow {\n    grid-row: 4/5;\n    grid-column: 2/3;\n}\n\n#wind {\n    grid-row: 5/6;\n    grid-column: 2/3;\n}\n\n.furtherImg {\n    width: 5rem;\n    height: 5rem;\n}\n\n.furtherContainer {\n    display: flex;\n    gap: 1.5rem;\n}\n\n.furthertxt {\n    font-size: 1.8rem;\n}"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLHVIQUF1QztBQUNuRiw0Q0FBNEMsbUlBQTZDO0FBQ3pGLDRDQUE0Qyx5SEFBd0M7QUFDcEYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRix5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLG1DQUFtQztBQUNsRDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLG1DQUFtQztBQUNsRDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLG1DQUFtQztBQUNsRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDLE9BQU8sZ0tBQWdLLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLGNBQWMsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sT0FBTyxZQUFZLE9BQU8sVUFBVSxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsVUFBVSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxRQUFRLFdBQVcsS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFFBQVEsS0FBSyxZQUFZLGFBQWEsY0FBYyxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFB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TUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0Es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LmNzcyIsIndlYnBhY2s6Ly93ZWF0aGVyZm9yZWNhc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3dlYXRoZXJmb3JlY2FzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmZvcmVjYXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmZvcmVjYXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3dlYXRoZXJmb3JlY2FzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyZm9yZWNhc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3dlYXRoZXJmb3JlY2FzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyZm9yZWNhc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmZvcmVjYXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmZvcmVjYXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmZvcmVjYXN0Ly4vc3JjL2Z1bmN0aW9uYWxpdHkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmZvcmVjYXN0Ly4vc3JjL3BvcHVsYXRlLmpzIiwid2VicGFjazovL3dlYXRoZXJmb3JlY2FzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWF0aGVyZm9yZWNhc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vd2VhdGhlcmZvcmVjYXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWF0aGVyZm9yZWNhc3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly93ZWF0aGVyZm9yZWNhc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWF0aGVyZm9yZWNhc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWF0aGVyZm9yZWNhc3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vd2VhdGhlcmZvcmVjYXN0L3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3dlYXRoZXJmb3JlY2FzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vd2VhdGhlcmZvcmVjYXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCJmb250cy9JbnRlci1UaGluLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcImZvbnRzL0ludGVyLUV4dHJhTGlnaHQudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiZm9udHMvSW50ZXItTGlnaHQudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYGh0bWwsXG5ib2R5LFxuZGl2LFxuc3BhbixcbmFwcGxldCxcbm9iamVjdCxcbmlmcmFtZSxcbmgxLFxuaDIsXG5oMyxcbmg0LFxuaDUsXG5oNixcbnAsXG5ibG9ja3F1b3RlLFxucHJlLFxuYSxcbmFiYnIsXG5hY3JvbnltLFxuYWRkcmVzcyxcbmJpZyxcbmNpdGUsXG5jb2RlLFxuZGVsLFxuZGZuLFxuZW0sXG5pbWcsXG5pbnMsXG5rYmQsXG5xLFxucyxcbnNhbXAsXG5zbWFsbCxcbnN0cmlrZSxcbnN0cm9uZyxcbnN1YixcbnN1cCxcbnR0LFxudmFyLFxuYixcbnUsXG5pLFxuY2VudGVyLFxuZGwsXG5kdCxcbmRkLFxub2wsXG51bCxcbmxpLFxuZmllbGRzZXQsXG5mb3JtLFxubGFiZWwsXG5sZWdlbmQsXG50YWJsZSxcbmNhcHRpb24sXG50Ym9keSxcbnRmb290LFxudGhlYWQsXG50cixcbnRoLFxudGQsXG5hcnRpY2xlLFxuYXNpZGUsXG5jYW52YXMsXG5kZXRhaWxzLFxuZW1iZWQsXG5maWd1cmUsXG5maWdjYXB0aW9uLFxuZm9vdGVyLFxuaGVhZGVyLFxuaGdyb3VwLFxubWVudSxcbm5hdixcbm91dHB1dCxcbnJ1YnksXG5zZWN0aW9uLFxuc3VtbWFyeSxcbnRpbWUsXG5tYXJrLFxuYXVkaW8sXG52aWRlbyB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgYm9yZGVyOiAwO1xuICAgIGZvbnQtc2l6ZTogMTAwJTtcbiAgICBmb250OiBpbmhlcml0O1xuICAgIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcbn1cblxuLmhpZGRlbiB7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cblxuOnJvb3Qge1xuICAgIC0tYmdDb2xvcjogI2QyZDZkOTtcbiAgICAtLWZvbnRDb2xvcjogIzJiMmUzMztcblxufVxuXG51bCB7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbn1cblxuQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6IFwiSW50ZXJUaGluXCI7XG4gICAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSkgZm9ybWF0KFwidHJ1ZXR5cGVcIik7XG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcbn1cblxuQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6IFwiSW50ZXJFeHRyYUxpZ2h0XCI7XG4gICAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19ffSkgZm9ybWF0KFwidHJ1ZXR5cGVcIik7XG4gICAgZm9udC13ZWlnaHQ6IDIwMDtcbn1cblxuQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6IFwiSW50ZXJMaWdodFwiO1xuICAgIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fX30pIGZvcm1hdChcInRydWV0eXBlXCIpO1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG59XG5cbmJvZHkge1xuICAgIGZvbnQtZmFtaWx5OiBcIkludGVyTGlnaHRcIjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZ0NvbG9yKTtcbiAgICBjb2xvcjogdmFyKC0tZm9udENvbG9yKTtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMTUlIDQ1JSA0MCU7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgd2lkdGg6IDEwMHZ3O1xuICAgIG92ZXJmbG93OiBzY3JvbGw7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG1pbi13aWR0aDogMTQwMHB4O1xuICAgIG1pbi1oZWlnaHQ6IDkwMHB4O1xufVxuXG5odG1sIHtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4qLFxuKjpiZWZvcmUsXG4qOmFmdGVyIHtcbiAgICBib3gtc2l6aW5nOiBpbmhlcml0O1xufVxuXG4vKiBMb2NhdGlvbiAqL1xuLmxvY2F0aW9uIHtcbiAgICBmb250LWZhbWlseTogXCJJbnRlckxpZ2h0XCI7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGZvbnQtc2l6ZTogNHJlbTtcbiAgICBncmlkLXJvdzogMS8yO1xuICAgIGdyaWQtY29sdW1uOiAxLzM7XG5cbn1cblxuI2NpdHkge1xuICAgIG1hcmdpbi10b3A6IDJyZW07XG4gICAgbWFyZ2luLWxlZnQ6IDRyZW07XG59XG5cbiNjb3VudHJ5IHtcbiAgICBtYXJnaW4tdG9wOiAycmVtO1xufVxuXG4uc2VhcmNoTG9jYXRpb24ge1xuICAgIGZvbnQtZmFtaWx5OiBcIkludGVyRXh0cmFMaWdodFwiO1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyNXJlbSA5cmVtO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogM3JlbSAxcmVtO1xuICAgIGFsaWduLWl0ZW1zOiBzdGFydDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbi10b3A6IDJyZW07XG4gICAgbWFyZ2luLXJpZ2h0OiA0cmVtO1xuICAgIHBhZGRpbmctdG9wOiAwLjlyZW07XG4gICAgZ3JpZC1jb2x1bW46IDIvMztcbiAgICBncmlkLXJvdzogMS8yO1xufVxuXG4jbG9jYXRpb25JbnB1dCB7XG4gICAgZm9udC1mYW1pbHk6IFwiSW50ZXJFeHRyYUxpZ2h0XCI7XG4gICAgcGFkZGluZzogMC41cmVtO1xuICAgIG1hcmdpbjogbm9uZTtcbiAgICBib3gtc2hhZG93OiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IG5vbmU7XG4gICAgb3V0bGluZTogaW5oZXJpdDtcbiAgICB3aWR0aDogMjVyZW07XG4gICAgYm9yZGVyLXJpZ2h0OiBub25lO1xuICAgIGJvcmRlcjogMXB4IHZhcigtLWZvbnRDb2xvcikgc29saWQ7XG4gICAgYm9yZGVyLXJpZ2h0OiBub25lO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnQ29sb3IpO1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDAuMnJlbSAwcmVtIDByZW0gMC4ycmVtO1xuICAgIGdyaWQtY29sdW1uOiAxLzI7XG4gICAgZ3JpZC1yb3c6IDEvMjtcbn1cblxuI2Vycm9yIHtcbiAgICBmb250LXNpemU6IDAuOHJlbTtcbiAgICBncmlkLWNvbHVtbjogMS8zO1xuICAgIGdyaWQtcm93OiAyLzM7XG59XG5cbi5zdWJtaXRMb2NhdGlvbiB7XG4gICAgcGFkZGluZzogMC4xcmVtIDAuMnJlbTtcbiAgICBmb250OiBpbmhlcml0O1xuICAgIGNvbG9yOiBpbmhlcml0O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICBib3JkZXI6IDFweCB2YXIoLS1mb250Q29sb3IpIHNvbGlkO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnQ29sb3IpO1xuICAgIHBhZGRpbmc6IDAuNXJlbSAxLjVyZW07XG4gICAgYm9yZGVyLXJhZGl1czogMHJlbSAwLjJyZW0gMC4ycmVtIDByZW07XG4gICAgZ3JpZC1jb2x1bW46IDIvMztcbiAgICBncmlkLXJvdzogMS8yO1xufVxuXG5cbi8qIENvbmRpdGlvbiAqL1xuXG4uY29uZGl0aW9uUGxhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiBcIkludGVyRXh0cmFMaWdodFwiO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogc3RhcnQ7XG4gICAgZm9udC1zaXplOiAyLjNyZW07XG4gICAganVzdGlmeS1jb250ZW50OiBzdGFydDtcbiAgICBncmlkLXJvdzogMi8zO1xuICAgIGdyaWQtY29sdW1uOiAxLzI7XG4gICAgbWFyZ2luLWxlZnQ6IDRyZW07XG4gICAgZ2FwOiAycmVtO1xufVxuXG4uaWNvbkNvbmRpdGlvbiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBnYXA6IDNyZW07XG4gICAgcGFkZGluZy1sZWZ0OiAxcmVtO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cblxuLmRhdGVUaW1lIHtcbiAgICBmb250LWZhbWlseTogXCJJbnRlckV4dHJhTGlnaHRcIjtcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gICAgZm9udC1zaXplOiAxLjhyZW07XG5cbn1cblxuLmNvbmRpdGlvbkNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4uYnRuVGVtcCB7XG4gICAgZm9udC1mYW1pbHk6IFwiSW50ZXJFeHRyYUxpZ2h0XCI7XG4gICAgY29sb3I6IGluaGVyaXQ7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgIGJvcmRlcjogMXB4IHZhcigtLWZvbnRDb2xvcikgc29saWQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmdDb2xvcik7XG4gICAgcGFkZGluZzogMC41cmVtIDEuNXJlbTtcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDAuMnJlbTtcbn1cblxuI3dlYXRoZXJJY29uIHtcbiAgICBoZWlnaHQ6IDE1cmVtO1xuICAgIHdpZHRoOiAxNXJlbTtcbn1cblxuLyogRGFpbHkgKi9cbi5kYWlseSB7XG4gICAgd2lkdGg6IDUwdnc7XG4gICAgaGVpZ2h0OiAyMDBweDtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA1MHB4IDIwMHB4O1xuICAgIGdhcDogMS41cmVtO1xuICAgIGdyaWQtcm93OiAzLzQ7XG4gICAgZ3JpZC1jb2x1bW46IDEvMjtcbiAgICBtYXJnaW4tbGVmdDogNHJlbTtcbiAgICBwYWRkaW5nLXRvcDogMXJlbTtcbn1cblxuXG4uZGFpbHk+ZGl2IHtcbiAgICBmb250LWZhbWlseTogXCJJbnRlckV4dHJhTGlnaHRcIjtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDIvMztcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiAxLjJyZW07XG59XG5cbiNkYWlseUhlYWRlciB7XG4gICAgZ3JpZC1jb2x1bW46IDEvNDtcbiAgICBncmlkLXJvdzogMS8yO1xuICAgIGZvbnQtc2l6ZTogMi4zcmVtO1xufVxuXG4uZGFpbHlEYXRlIHtcbiAgICBmb250LXNpemU6IDEuOHJlbTtcbn1cblxuLmRhaWx5Q29uZGl0aW9uIHtcbiAgICBmb250LXNpemU6IDEuOHJlbTtcbn1cblxuLmRhaWx5SWNvbiB7XG4gICAgd2lkdGg6IDVyZW07XG4gICAgaGVpZ2h0OiA1cmVtO1xufVxuXG4vKiBGdXJ0aGVyIERldGFpbHMgKi9cbi5mdXJ0aGVyRGV0YWlscyB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDVmciA1ZnI7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAyMCUgMjAlIDIwJSAyMCU7XG4gICAgZ3JpZC1yb3c6IDIvNDtcbiAgICBwYWRkaW5nLWxlZnQ6IDdyZW07XG59XG5cbiNmZWVscyB7XG4gICAgZ3JpZC1yb3c6IDEvMjtcbiAgICBncmlkLWNvbHVtbjogMi8zO1xufVxuXG4jaHVtaWRpdHkge1xuICAgIGdyaWQtcm93OiAyLzM7XG4gICAgZ3JpZC1jb2x1bW46IDIvMztcbn1cblxuI2NoYW5jZSB7XG4gICAgZ3JpZC1yb3c6IDMvNDtcbiAgICBncmlkLWNvbHVtbjogMi8zO1xufVxuXG4jY2hhbmNlU25vdyB7XG4gICAgZ3JpZC1yb3c6IDQvNTtcbiAgICBncmlkLWNvbHVtbjogMi8zO1xufVxuXG4jd2luZCB7XG4gICAgZ3JpZC1yb3c6IDUvNjtcbiAgICBncmlkLWNvbHVtbjogMi8zO1xufVxuXG4uZnVydGhlckltZyB7XG4gICAgd2lkdGg6IDVyZW07XG4gICAgaGVpZ2h0OiA1cmVtO1xufVxuXG4uZnVydGhlckNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBnYXA6IDEuNXJlbTtcbn1cblxuLmZ1cnRoZXJ0eHQge1xuICAgIGZvbnQtc2l6ZTogMS44cmVtO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBaUZJLFNBQVM7SUFDVCxVQUFVO0lBQ1YsU0FBUztJQUNULGVBQWU7SUFDZixhQUFhO0lBQ2Isd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixvQkFBb0I7O0FBRXhCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksd0JBQXdCO0lBQ3hCLCtEQUFtRDtJQUNuRCxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSw4QkFBOEI7SUFDOUIsK0RBQXlEO0lBQ3pELGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QiwrREFBb0Q7SUFDcEQsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGdDQUFnQztJQUNoQyx1QkFBdUI7SUFDdkIsYUFBYTtJQUNiLCtCQUErQjtJQUMvQiw4QkFBOEI7SUFDOUIsYUFBYTtJQUNiLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxzQkFBc0I7QUFDMUI7O0FBRUE7OztJQUdJLG1CQUFtQjtBQUN2Qjs7QUFFQSxhQUFhO0FBQ2I7SUFDSSx5QkFBeUI7SUFDekIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsYUFBYTtJQUNiLGdCQUFnQjs7QUFFcEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksOEJBQThCO0lBQzlCLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2IsaUNBQWlDO0lBQ2pDLDZCQUE2QjtJQUM3QixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksOEJBQThCO0lBQzlCLGVBQWU7SUFDZixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixrQ0FBa0M7SUFDbEMsa0JBQWtCO0lBQ2xCLGdDQUFnQztJQUNoQyxpQkFBaUI7SUFDakIsc0NBQXNDO0lBQ3RDLGdCQUFnQjtJQUNoQixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLGFBQWE7SUFDYixjQUFjO0lBQ2QsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixrQ0FBa0M7SUFDbEMsZ0NBQWdDO0lBQ2hDLHNCQUFzQjtJQUN0QixzQ0FBc0M7SUFDdEMsZ0JBQWdCO0lBQ2hCLGFBQWE7QUFDakI7OztBQUdBLGNBQWM7O0FBRWQ7SUFDSSw4QkFBOEI7SUFDOUIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLHNCQUFzQjtJQUN0QixhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsU0FBUztJQUNULGtCQUFrQjtJQUNsQixtQkFBbUI7QUFDdkI7OztBQUdBO0lBQ0ksOEJBQThCO0lBQzlCLGtCQUFrQjtJQUNsQixpQkFBaUI7O0FBRXJCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLDhCQUE4QjtJQUM5QixjQUFjO0lBQ2QsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixrQ0FBa0M7SUFDbEMsZ0NBQWdDO0lBQ2hDLHNCQUFzQjtJQUN0QixnQkFBZ0I7SUFDaEIscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFlBQVk7QUFDaEI7O0FBRUEsVUFBVTtBQUNWO0lBQ0ksV0FBVztJQUNYLGFBQWE7SUFDYixhQUFhO0lBQ2Isa0NBQWtDO0lBQ2xDLDhCQUE4QjtJQUM5QixXQUFXO0lBQ1gsYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsaUJBQWlCO0FBQ3JCOzs7QUFHQTtJQUNJLDhCQUE4QjtJQUM5Qix1QkFBdUI7SUFDdkIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0FBQ2hCOztBQUVBLG9CQUFvQjtBQUNwQjtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsbUNBQW1DO0lBQ25DLGFBQWE7SUFDYixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJodG1sLFxcbmJvZHksXFxuZGl2LFxcbnNwYW4sXFxuYXBwbGV0LFxcbm9iamVjdCxcXG5pZnJhbWUsXFxuaDEsXFxuaDIsXFxuaDMsXFxuaDQsXFxuaDUsXFxuaDYsXFxucCxcXG5ibG9ja3F1b3RlLFxcbnByZSxcXG5hLFxcbmFiYnIsXFxuYWNyb255bSxcXG5hZGRyZXNzLFxcbmJpZyxcXG5jaXRlLFxcbmNvZGUsXFxuZGVsLFxcbmRmbixcXG5lbSxcXG5pbWcsXFxuaW5zLFxcbmtiZCxcXG5xLFxcbnMsXFxuc2FtcCxcXG5zbWFsbCxcXG5zdHJpa2UsXFxuc3Ryb25nLFxcbnN1YixcXG5zdXAsXFxudHQsXFxudmFyLFxcbmIsXFxudSxcXG5pLFxcbmNlbnRlcixcXG5kbCxcXG5kdCxcXG5kZCxcXG5vbCxcXG51bCxcXG5saSxcXG5maWVsZHNldCxcXG5mb3JtLFxcbmxhYmVsLFxcbmxlZ2VuZCxcXG50YWJsZSxcXG5jYXB0aW9uLFxcbnRib2R5LFxcbnRmb290LFxcbnRoZWFkLFxcbnRyLFxcbnRoLFxcbnRkLFxcbmFydGljbGUsXFxuYXNpZGUsXFxuY2FudmFzLFxcbmRldGFpbHMsXFxuZW1iZWQsXFxuZmlndXJlLFxcbmZpZ2NhcHRpb24sXFxuZm9vdGVyLFxcbmhlYWRlcixcXG5oZ3JvdXAsXFxubWVudSxcXG5uYXYsXFxub3V0cHV0LFxcbnJ1YnksXFxuc2VjdGlvbixcXG5zdW1tYXJ5LFxcbnRpbWUsXFxubWFyayxcXG5hdWRpbyxcXG52aWRlbyB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgYm9yZGVyOiAwO1xcbiAgICBmb250LXNpemU6IDEwMCU7XFxuICAgIGZvbnQ6IGluaGVyaXQ7XFxuICAgIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuXFxuLmhpZGRlbiB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbjpyb290IHtcXG4gICAgLS1iZ0NvbG9yOiAjZDJkNmQ5O1xcbiAgICAtLWZvbnRDb2xvcjogIzJiMmUzMztcXG5cXG59XFxuXFxudWwge1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJJbnRlclRoaW5cXFwiO1xcbiAgICBzcmM6IHVybChcXFwiZm9udHMvSW50ZXItVGhpbi50dGZcXFwiKSBmb3JtYXQoXFxcInRydWV0eXBlXFxcIik7XFxuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogXFxcIkludGVyRXh0cmFMaWdodFxcXCI7XFxuICAgIHNyYzogdXJsKFxcXCJmb250cy9JbnRlci1FeHRyYUxpZ2h0LnR0ZlxcXCIpIGZvcm1hdChcXFwidHJ1ZXR5cGVcXFwiKTtcXG4gICAgZm9udC13ZWlnaHQ6IDIwMDtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiSW50ZXJMaWdodFxcXCI7XFxuICAgIHNyYzogdXJsKFxcXCJmb250cy9JbnRlci1MaWdodC50dGZcXFwiKSBmb3JtYXQoXFxcInRydWV0eXBlXFxcIik7XFxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XFxufVxcblxcbmJvZHkge1xcbiAgICBmb250LWZhbWlseTogXFxcIkludGVyTGlnaHRcXFwiO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZ0NvbG9yKTtcXG4gICAgY29sb3I6IHZhcigtLWZvbnRDb2xvcik7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMTUlIDQ1JSA0MCU7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBvdmVyZmxvdzogc2Nyb2xsO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIG1pbi13aWR0aDogMTQwMHB4O1xcbiAgICBtaW4taGVpZ2h0OiA5MDBweDtcXG59XFxuXFxuaHRtbCB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbiosXFxuKjpiZWZvcmUsXFxuKjphZnRlciB7XFxuICAgIGJveC1zaXppbmc6IGluaGVyaXQ7XFxufVxcblxcbi8qIExvY2F0aW9uICovXFxuLmxvY2F0aW9uIHtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJJbnRlckxpZ2h0XFxcIjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgZm9udC1zaXplOiA0cmVtO1xcbiAgICBncmlkLXJvdzogMS8yO1xcbiAgICBncmlkLWNvbHVtbjogMS8zO1xcblxcbn1cXG5cXG4jY2l0eSB7XFxuICAgIG1hcmdpbi10b3A6IDJyZW07XFxuICAgIG1hcmdpbi1sZWZ0OiA0cmVtO1xcbn1cXG5cXG4jY291bnRyeSB7XFxuICAgIG1hcmdpbi10b3A6IDJyZW07XFxufVxcblxcbi5zZWFyY2hMb2NhdGlvbiB7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiSW50ZXJFeHRyYUxpZ2h0XFxcIjtcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjVyZW0gOXJlbTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAzcmVtIDFyZW07XFxuICAgIGFsaWduLWl0ZW1zOiBzdGFydDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbWFyZ2luLXRvcDogMnJlbTtcXG4gICAgbWFyZ2luLXJpZ2h0OiA0cmVtO1xcbiAgICBwYWRkaW5nLXRvcDogMC45cmVtO1xcbiAgICBncmlkLWNvbHVtbjogMi8zO1xcbiAgICBncmlkLXJvdzogMS8yO1xcbn1cXG5cXG4jbG9jYXRpb25JbnB1dCB7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiSW50ZXJFeHRyYUxpZ2h0XFxcIjtcXG4gICAgcGFkZGluZzogMC41cmVtO1xcbiAgICBtYXJnaW46IG5vbmU7XFxuICAgIGJveC1zaGFkb3c6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IG5vbmU7XFxuICAgIG91dGxpbmU6IGluaGVyaXQ7XFxuICAgIHdpZHRoOiAyNXJlbTtcXG4gICAgYm9yZGVyLXJpZ2h0OiBub25lO1xcbiAgICBib3JkZXI6IDFweCB2YXIoLS1mb250Q29sb3IpIHNvbGlkO1xcbiAgICBib3JkZXItcmlnaHQ6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnQ29sb3IpO1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogMC4ycmVtIDByZW0gMHJlbSAwLjJyZW07XFxuICAgIGdyaWQtY29sdW1uOiAxLzI7XFxuICAgIGdyaWQtcm93OiAxLzI7XFxufVxcblxcbiNlcnJvciB7XFxuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xcbiAgICBncmlkLWNvbHVtbjogMS8zO1xcbiAgICBncmlkLXJvdzogMi8zO1xcbn1cXG5cXG4uc3VibWl0TG9jYXRpb24ge1xcbiAgICBwYWRkaW5nOiAwLjFyZW0gMC4ycmVtO1xcbiAgICBmb250OiBpbmhlcml0O1xcbiAgICBjb2xvcjogaW5oZXJpdDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgYm9yZGVyOiAxcHggdmFyKC0tZm9udENvbG9yKSBzb2xpZDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmdDb2xvcik7XFxuICAgIHBhZGRpbmc6IDAuNXJlbSAxLjVyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDByZW0gMC4ycmVtIDAuMnJlbSAwcmVtO1xcbiAgICBncmlkLWNvbHVtbjogMi8zO1xcbiAgICBncmlkLXJvdzogMS8yO1xcbn1cXG5cXG5cXG4vKiBDb25kaXRpb24gKi9cXG5cXG4uY29uZGl0aW9uUGxhY2Uge1xcbiAgICBmb250LWZhbWlseTogXFxcIkludGVyRXh0cmFMaWdodFxcXCI7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBzdGFydDtcXG4gICAgZm9udC1zaXplOiAyLjNyZW07XFxuICAgIGp1c3RpZnktY29udGVudDogc3RhcnQ7XFxuICAgIGdyaWQtcm93OiAyLzM7XFxuICAgIGdyaWQtY29sdW1uOiAxLzI7XFxuICAgIG1hcmdpbi1sZWZ0OiA0cmVtO1xcbiAgICBnYXA6IDJyZW07XFxufVxcblxcbi5pY29uQ29uZGl0aW9uIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAzcmVtO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDFyZW07XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcblxcbi5kYXRlVGltZSB7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiSW50ZXJFeHRyYUxpZ2h0XFxcIjtcXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xcbiAgICBmb250LXNpemU6IDEuOHJlbTtcXG5cXG59XFxuXFxuLmNvbmRpdGlvbkNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5idG5UZW1wIHtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJJbnRlckV4dHJhTGlnaHRcXFwiO1xcbiAgICBjb2xvcjogaW5oZXJpdDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgYm9yZGVyOiAxcHggdmFyKC0tZm9udENvbG9yKSBzb2xpZDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmdDb2xvcik7XFxuICAgIHBhZGRpbmc6IDAuNXJlbSAxLjVyZW07XFxuICAgIG1hcmdpbi10b3A6IDFyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDAuMnJlbTtcXG59XFxuXFxuI3dlYXRoZXJJY29uIHtcXG4gICAgaGVpZ2h0OiAxNXJlbTtcXG4gICAgd2lkdGg6IDE1cmVtO1xcbn1cXG5cXG4vKiBEYWlseSAqL1xcbi5kYWlseSB7XFxuICAgIHdpZHRoOiA1MHZ3O1xcbiAgICBoZWlnaHQ6IDIwMHB4O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDUwcHggMjAwcHg7XFxuICAgIGdhcDogMS41cmVtO1xcbiAgICBncmlkLXJvdzogMy80O1xcbiAgICBncmlkLWNvbHVtbjogMS8yO1xcbiAgICBtYXJnaW4tbGVmdDogNHJlbTtcXG4gICAgcGFkZGluZy10b3A6IDFyZW07XFxufVxcblxcblxcbi5kYWlseT5kaXYge1xcbiAgICBmb250LWZhbWlseTogXFxcIkludGVyRXh0cmFMaWdodFxcXCI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMi8zO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDEuMnJlbTtcXG59XFxuXFxuI2RhaWx5SGVhZGVyIHtcXG4gICAgZ3JpZC1jb2x1bW46IDEvNDtcXG4gICAgZ3JpZC1yb3c6IDEvMjtcXG4gICAgZm9udC1zaXplOiAyLjNyZW07XFxufVxcblxcbi5kYWlseURhdGUge1xcbiAgICBmb250LXNpemU6IDEuOHJlbTtcXG59XFxuXFxuLmRhaWx5Q29uZGl0aW9uIHtcXG4gICAgZm9udC1zaXplOiAxLjhyZW07XFxufVxcblxcbi5kYWlseUljb24ge1xcbiAgICB3aWR0aDogNXJlbTtcXG4gICAgaGVpZ2h0OiA1cmVtO1xcbn1cXG5cXG4vKiBGdXJ0aGVyIERldGFpbHMgKi9cXG4uZnVydGhlckRldGFpbHMge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDVmciA1ZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMjAlIDIwJSAyMCUgMjAlO1xcbiAgICBncmlkLXJvdzogMi80O1xcbiAgICBwYWRkaW5nLWxlZnQ6IDdyZW07XFxufVxcblxcbiNmZWVscyB7XFxuICAgIGdyaWQtcm93OiAxLzI7XFxuICAgIGdyaWQtY29sdW1uOiAyLzM7XFxufVxcblxcbiNodW1pZGl0eSB7XFxuICAgIGdyaWQtcm93OiAyLzM7XFxuICAgIGdyaWQtY29sdW1uOiAyLzM7XFxufVxcblxcbiNjaGFuY2Uge1xcbiAgICBncmlkLXJvdzogMy80O1xcbiAgICBncmlkLWNvbHVtbjogMi8zO1xcbn1cXG5cXG4jY2hhbmNlU25vdyB7XFxuICAgIGdyaWQtcm93OiA0LzU7XFxuICAgIGdyaWQtY29sdW1uOiAyLzM7XFxufVxcblxcbiN3aW5kIHtcXG4gICAgZ3JpZC1yb3c6IDUvNjtcXG4gICAgZ3JpZC1jb2x1bW46IDIvMztcXG59XFxuXFxuLmZ1cnRoZXJJbWcge1xcbiAgICB3aWR0aDogNXJlbTtcXG4gICAgaGVpZ2h0OiA1cmVtO1xcbn1cXG5cXG4uZnVydGhlckNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMS41cmVtO1xcbn1cXG5cXG4uZnVydGhlcnR4dCB7XFxuICAgIGZvbnQtc2l6ZTogMS44cmVtO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImNvbnN0IHNlbGVjdEljb24gPSBmdW5jdGlvbiAoY3VycmVudCwgd2VhdGhlckljb24sIGRhaWx5KSB7XG4gIGlmIChkYWlseSkge1xuICAgIGlmIChjdXJyZW50LmNvbmRpdGlvbi5jb2RlID09PSAxMDAwKSB7XG4gICAgICB3ZWF0aGVySWNvbi5zcmMgPSBcIndlYXRoZXJJY29ucy9zdW5ueS5zdmdcIjtcbiAgICB9IGVsc2UgaWYgKGN1cnJlbnQuY29uZGl0aW9uLmNvZGUgPT09IDEwMDMpIHtcbiAgICAgIHdlYXRoZXJJY29uLnNyYyA9IFwid2VhdGhlckljb25zL3BhcnRseUNsb3VkeURheS5zdmdcIjtcbiAgICB9IGVsc2UgaWYgKFxuICAgICAgY3VycmVudC5jb25kaXRpb24uY29kZSA9PT0gMTAwNiB8fFxuICAgICAgY3VycmVudC5jb25kaXRpb24uY29kZSA9PT0gMTAwOVxuICAgICkge1xuICAgICAgd2VhdGhlckljb24uc3JjID0gXCJ3ZWF0aGVySWNvbnMvY2xvdWR5LnN2Z1wiO1xuICAgIH0gZWxzZSBpZiAoY3VycmVudC5jb25kaXRpb24uY29kZSA9PT0gMTAzMCkge1xuICAgICAgd2VhdGhlckljb24uc3JjID0gXCJ3ZWF0aGVySWNvbnMvbWlzdC5zdmdcIjtcbiAgICB9IGVsc2UgaWYgKFxuICAgICAgY3VycmVudC5jb25kaXRpb24uY29kZSA9PT0gMTA2MyB8fFxuICAgICAgY3VycmVudC5jb25kaXRpb24uY29kZSA9PT0gMTE1MFxuICAgICkge1xuICAgICAgd2VhdGhlckljb24uc3JjID0gXCJ3ZWF0aGVySWNvbnMvcGF0Y2h5UmFpbkRheS5zdmdcIjtcbiAgICB9IGVsc2UgaWYgKFxuICAgICAgY3VycmVudC5jb25kaXRpb24uY29kZSA9PT0gMTA2NiB8fFxuICAgICAgY3VycmVudC5jb25kaXRpb24uY29kZSA9PT0gMTIxMFxuICAgICkge1xuICAgICAgd2VhdGhlckljb24uc3JjID0gXCJ3ZWF0aGVySWNvbnMvcGF0Y2h5U25vd0RheS5zdmdcIjtcbiAgICB9IGVsc2UgaWYgKGN1cnJlbnQuY29uZGl0aW9uLmNvZGUgPT09IDEwNjkpIHtcbiAgICAgIHdlYXRoZXJJY29uLnNyYyA9IFwid2VhdGhlckljb25zL3BhdGNoeVNsZWV0RGF5LnN2Z1wiO1xuICAgIH0gZWxzZSBpZiAoXG4gICAgICBjdXJyZW50LmNvbmRpdGlvbi5jb2RlID09PSAxMDcyIHx8XG4gICAgICBjdXJyZW50LmNvbmRpdGlvbi5jb2RlID09PSAxMTY4IHx8XG4gICAgICBjdXJyZW50LmNvbmRpdGlvbi5jb2RlID09PSAxMTk4IHx8XG4gICAgICBjdXJyZW50LmNvbmRpdGlvbi5jb2RlID09PSAxMjA0IHx8XG4gICAgICBjdXJyZW50LmNvbmRpdGlvbi5jb2RlID09PSAxMjQ5XG4gICAgKSB7XG4gICAgICB3ZWF0aGVySWNvbi5zcmMgPSBcIndlYXRoZXJJY29ucy9mZWV6aW5nRHJpenpsZS5zdmdcIjtcbiAgICB9IGVsc2UgaWYgKGN1cnJlbnQuY29uZGl0aW9uLmNvZGUgPT09IDEwODcpIHtcbiAgICAgIHdlYXRoZXJJY29uLnNyYyA9IFwid2VhdGhlckljb25zL3RodW5kZXJ5T3V0YnJlYWtzLnN2Z1wiO1xuICAgIH0gZWxzZSBpZiAoY3VycmVudC5jb25kaXRpb24uY29kZSA9PT0gMTExNCkge1xuICAgICAgd2VhdGhlckljb24uc3JjID0gXCJ3ZWF0aGVySWNvbnMvYmxvd2luZ1Nub3cuc3ZnXCI7XG4gICAgfSBlbHNlIGlmIChjdXJyZW50LmNvbmRpdGlvbi5jb2RlID09PSAxMTE3KSB7XG4gICAgICB3ZWF0aGVySWNvbi5zcmMgPSBcIndlYXRoZXJJY29ucy9ibGl6emFyZC5zdmdcIjtcbiAgICB9IGVsc2UgaWYgKGN1cnJlbnQuY29uZGl0aW9uLmNvZGUgPT09IDExMzUpIHtcbiAgICAgIHdlYXRoZXJJY29uLnNyYyA9IFwid2VhdGhlckljb25zL2ZvZy5zdmdcIjtcbiAgICB9IGVsc2UgaWYgKGN1cnJlbnQuY29uZGl0aW9uLmNvZGUgPT09IDExNDcpIHtcbiAgICAgIHdlYXRoZXJJY29uLnNyYyA9IFwid2VhdGhlckljb25zL2ZyZWV6aW5nRm9nLnN2Z1wiO1xuICAgIH0gZWxzZSBpZiAoY3VycmVudC5jb25kaXRpb24uY29kZSA9PT0gMTE1Mykge1xuICAgICAgd2VhdGhlckljb24uc3JjID0gXCJ3ZWF0aGVySWNvbnMvbGlnaHRSYWluLnN2Z1wiO1xuICAgIH0gZWxzZSBpZiAoXG4gICAgICBjdXJyZW50LmNvbmRpdGlvbi5jb2RlID09PSAxMTcxIHx8XG4gICAgICBjdXJyZW50LmNvbmRpdGlvbi5jb2RlID09PSAxMjAxIHx8XG4gICAgICBjdXJyZW50LmNvbmRpdGlvbi5jb2RlID09PSAxMjA3IHx8XG4gICAgICBjdXJyZW50LmNvbmRpdGlvbi5jb2RlID09PSAxMjUyXG4gICAgKSB7XG4gICAgICB3ZWF0aGVySWNvbi5zcmMgPSBcIndlYXRoZXJJY29ucy9oZWF2eUZyZWV6aW5nRHJpenpsZS5zdmdcIjtcbiAgICB9IGVsc2UgaWYgKFxuICAgICAgY3VycmVudC5jb25kaXRpb24uY29kZSA9PT0gMTE4MCB8fFxuICAgICAgY3VycmVudC5jb25kaXRpb24uY29kZSA9PT0gMTE4M1xuICAgICkge1xuICAgICAgd2VhdGhlckljb24uc3JjID0gXCJ3ZWF0aGVySWNvbnMvbGlnaHRSYWluLnN2Z1wiO1xuICAgIH0gZWxzZSBpZiAoXG4gICAgICBjdXJyZW50LmNvbmRpdGlvbi5jb2RlID09PSAxMTg2IHx8XG4gICAgICBjdXJyZW50LmNvbmRpdGlvbi5jb2RlID09PSAxMTg5XG4gICAgKSB7XG4gICAgICB3ZWF0aGVySWNvbi5zcmMgPSBcIndlYXRoZXJJY29ucy9tb2RlcmF0ZVJhaW4uc3ZnXCI7XG4gICAgfSBlbHNlIGlmIChcbiAgICAgIGN1cnJlbnQuY29uZGl0aW9uLmNvZGUgPT09IDExOTIgfHxcbiAgICAgIGN1cnJlbnQuY29uZGl0aW9uLmNvZGUgPT09IDExOTVcbiAgICApIHtcbiAgICAgIHdlYXRoZXJJY29uLnNyYyA9IFwid2VhdGhlckljb25zL2hlYXZ5UmFpbi5zdmdcIjtcbiAgICB9IGVsc2UgaWYgKFxuICAgICAgY3VycmVudC5jb25kaXRpb24uY29kZSA9PT0gMTIxMyB8fFxuICAgICAgY3VycmVudC5jb25kaXRpb24uY29kZSA9PT0gMTI1NVxuICAgICkge1xuICAgICAgd2VhdGhlckljb24uc3JjID0gXCJ3ZWF0aGVySWNvbnMvbGlnaHRTbm93LnN2Z1wiO1xuICAgIH0gZWxzZSBpZiAoXG4gICAgICBjdXJyZW50LmNvbmRpdGlvbi5jb2RlID09PSAxMjE2IHx8XG4gICAgICBjdXJyZW50LmNvbmRpdGlvbi5jb2RlID09PSAxMjE5IHx8XG4gICAgICBjdXJyZW50LmNvbmRpdGlvbi5jb2RlID09PSAxMjU4XG4gICAgKSB7XG4gICAgICB3ZWF0aGVySWNvbi5zcmMgPSBcIndlYXRoZXJJY29ucy9tb2RlcmF0ZVNub3cuc3ZnXCI7XG4gICAgfSBlbHNlIGlmIChcbiAgICAgIGN1cnJlbnQuY29uZGl0aW9uLmNvZGUgPT09IDEyMjIgfHxcbiAgICAgIGN1cnJlbnQuY29uZGl0aW9uLmNvZGUgPT09IDEyMjVcbiAgICApIHtcbiAgICAgIHdlYXRoZXJJY29uLnNyYyA9IFwid2VhdGhlckljb25zL2hlYXZ5U25vdy5zdmdcIjtcbiAgICB9IGVsc2UgaWYgKFxuICAgICAgY3VycmVudC5jb25kaXRpb24uY29kZSA9PT0gMTIzNyB8fFxuICAgICAgY3VycmVudC5jb25kaXRpb24uY29kZSA9PT0gMTI2MSB8fFxuICAgICAgY3VycmVudC5jb25kaXRpb24uY29kZSA9PT0gMTI2NFxuICAgICkge1xuICAgICAgd2VhdGhlckljb24uc3JjID0gXCJ3ZWF0aGVySWNvbnMvaWNlUGVsbGV0cy5zdmdcIjtcbiAgICB9IGVsc2UgaWYgKGN1cnJlbnQuY29uZGl0aW9uLmNvZGUgPT09IDEyNDApIHtcbiAgICAgIHdlYXRoZXJJY29uLnNyYyA9IFwid2VhdGhlckljb25zL2xpZ2h0UmFpblNob3dlci5zdmdcIjtcbiAgICB9IGVsc2UgaWYgKGN1cnJlbnQuY29uZGl0aW9uLmNvZGUgPT09IDEyNDMpIHtcbiAgICAgIHdlYXRoZXJJY29uLnNyYyA9IFwid2VhdGhlckljb25zL21vZGVyYXRlUmFpblNob3dlci5zdmdcIjtcbiAgICB9IGVsc2UgaWYgKGN1cnJlbnQuY29uZGl0aW9uLmNvZGUgPT09IDEyNDYpIHtcbiAgICAgIHdlYXRoZXJJY29uLnNyYyA9IFwid2VhdGhlckljb25zL3RvcnJlbnRpYWxSYWluU2hvd2VyLnN2Z1wiO1xuICAgIH0gZWxzZSBpZiAoY3VycmVudC5jb25kaXRpb24uY29kZSA9PT0gMTI3Mykge1xuICAgICAgd2VhdGhlckljb24uc3JjID0gXCJ3ZWF0aGVySWNvbnMvcGF0Y2h5TGlnaHRSYWluVGh1bmRlci5zdmdcIjtcbiAgICB9IGVsc2UgaWYgKGN1cnJlbnQuY29uZGl0aW9uLmNvZGUgPT09IDEyNzYpIHtcbiAgICAgIHdlYXRoZXJJY29uLnNyYyA9IFwid2VhdGhlckljb25zL3BhdGNoeUhlYXZ5UmFpblRodW5kZXIuc3ZnXCI7XG4gICAgfSBlbHNlIGlmIChcbiAgICAgIGN1cnJlbnQuY29uZGl0aW9uLmNvZGUgPT09IDEyNzkgfHxcbiAgICAgIGN1cnJlbnQuY29uZGl0aW9uLmNvZGUgPT09IDEyODJcbiAgICApIHtcbiAgICAgIHdlYXRoZXJJY29uLnNyYyA9IFwid2VhdGhlckljb25zL3BhdGNoeVNub3dUaHVuZGVyLnN2Z1wiO1xuICAgIH0gZWxzZSB7XG4gICAgICB3ZWF0aGVySWNvbi5zcmMgPSBjdXJyZW50LmNvbmRpdGlvbi5pY29uO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBpZiAoY3VycmVudC5jb25kaXRpb24uY29kZSA9PT0gMTAwMCAmJiBjdXJyZW50LmlzX2RheSkge1xuICAgICAgd2VhdGhlckljb24uc3JjID0gXCJ3ZWF0aGVySWNvbnMvc3Vubnkuc3ZnXCI7XG4gICAgfSBlbHNlIGlmIChjdXJyZW50LmNvbmRpdGlvbi5jb2RlID09PSAxMDAwICYmICFjdXJyZW50LmlzX2RheSkge1xuICAgICAgd2VhdGhlckljb24uc3JjID0gXCJ3ZWF0aGVySWNvbnMvY2xlYXIuc3ZnXCI7XG4gICAgfSBlbHNlIGlmIChjdXJyZW50LmNvbmRpdGlvbi5jb2RlID09PSAxMDAzICYmIGN1cnJlbnQuaXNfZGF5KSB7XG4gICAgICB3ZWF0aGVySWNvbi5zcmMgPSBcIndlYXRoZXJJY29ucy9wYXJ0bHlDbG91ZHlEYXkuc3ZnXCI7XG4gICAgfSBlbHNlIGlmIChjdXJyZW50LmNvbmRpdGlvbi5jb2RlID09PSAxMDAzICYmICFjdXJyZW50LmlzX2RheSkge1xuICAgICAgd2VhdGhlckljb24uc3JjID0gXCJ3ZWF0aGVySWNvbnMvcGFydGx5Q2xvdWR5TmlnaHQuc3ZnXCI7XG4gICAgfSBlbHNlIGlmIChcbiAgICAgIGN1cnJlbnQuY29uZGl0aW9uLmNvZGUgPT09IDEwMDYgfHxcbiAgICAgIGN1cnJlbnQuY29uZGl0aW9uLmNvZGUgPT09IDEwMDlcbiAgICApIHtcbiAgICAgIHdlYXRoZXJJY29uLnNyYyA9IFwid2VhdGhlckljb25zL2Nsb3VkeS5zdmdcIjtcbiAgICB9IGVsc2UgaWYgKGN1cnJlbnQuY29uZGl0aW9uLmNvZGUgPT09IDEwMzApIHtcbiAgICAgIHdlYXRoZXJJY29uLnNyYyA9IFwid2VhdGhlckljb25zL21pc3Quc3ZnXCI7XG4gICAgfSBlbHNlIGlmIChcbiAgICAgIChjdXJyZW50LmNvbmRpdGlvbi5jb2RlID09PSAxMDYzIHx8IGN1cnJlbnQuY29uZGl0aW9uLmNvZGUgPT09IDExNTApICYmXG4gICAgICBjdXJyZW50LmlzX2RheVxuICAgICkge1xuICAgICAgd2VhdGhlckljb24uc3JjID0gXCJ3ZWF0aGVySWNvbnMvcGF0Y2h5UmFpbkRheS5zdmdcIjtcbiAgICB9IGVsc2UgaWYgKFxuICAgICAgKGN1cnJlbnQuY29uZGl0aW9uLmNvZGUgPT09IDEwNjMgfHwgY3VycmVudC5jb25kaXRpb24uY29kZSA9PT0gMTE1MCkgJiZcbiAgICAgICFjdXJyZW50LmlzX2RheVxuICAgICkge1xuICAgICAgd2VhdGhlckljb24uc3JjID0gXCJ3ZWF0aGVySWNvbnMvcGF0Y2h5UmFpbk5pZ2h0LnN2Z1wiO1xuICAgIH0gZWxzZSBpZiAoXG4gICAgICAoY3VycmVudC5jb25kaXRpb24uY29kZSA9PT0gMTA2NiB8fCBjdXJyZW50LmNvbmRpdGlvbi5jb2RlID09PSAxMjEwKSAmJlxuICAgICAgY3VycmVudC5pc19kYXlcbiAgICApIHtcbiAgICAgIHdlYXRoZXJJY29uLnNyYyA9IFwid2VhdGhlckljb25zL3BhdGNoeVNub3dEYXkuc3ZnXCI7XG4gICAgfSBlbHNlIGlmIChcbiAgICAgIChjdXJyZW50LmNvbmRpdGlvbi5jb2RlID09PSAxMDY2IHx8IGN1cnJlbnQuY29uZGl0aW9uLmNvZGUgPT09IDEyMTApICYmXG4gICAgICAhY3VycmVudC5pc19kYXlcbiAgICApIHtcbiAgICAgIHdlYXRoZXJJY29uLnNyYyA9IFwid2VhdGhlckljb25zL3BhdGNoeVNub3dOaWdodC5zdmdcIjtcbiAgICB9IGVsc2UgaWYgKGN1cnJlbnQuY29uZGl0aW9uLmNvZGUgPT09IDEwNjkgJiYgY3VycmVudC5pc19kYXkpIHtcbiAgICAgIHdlYXRoZXJJY29uLnNyYyA9IFwid2VhdGhlckljb25zL3BhdGNoeVNsZWV0RGF5LnN2Z1wiO1xuICAgIH0gZWxzZSBpZiAoY3VycmVudC5jb25kaXRpb24uY29kZSA9PT0gMTA2OSAmJiAhY3VycmVudC5pc19kYXkpIHtcbiAgICAgIHdlYXRoZXJJY29uLnNyYyA9IFwid2VhdGhlckljb25zL3BhdGNoeVNsZWV0TmlnaHQuc3ZnXCI7XG4gICAgfSBlbHNlIGlmIChcbiAgICAgIGN1cnJlbnQuY29uZGl0aW9uLmNvZGUgPT09IDEwNzIgfHxcbiAgICAgIGN1cnJlbnQuY29uZGl0aW9uLmNvZGUgPT09IDExNjggfHxcbiAgICAgIGN1cnJlbnQuY29uZGl0aW9uLmNvZGUgPT09IDExOTggfHxcbiAgICAgIGN1cnJlbnQuY29uZGl0aW9uLmNvZGUgPT09IDEyMDQgfHxcbiAgICAgIGN1cnJlbnQuY29uZGl0aW9uLmNvZGUgPT09IDEyNDlcbiAgICApIHtcbiAgICAgIHdlYXRoZXJJY29uLnNyYyA9IFwid2VhdGhlckljb25zL2ZlZXppbmdEcml6emxlLnN2Z1wiO1xuICAgIH0gZWxzZSBpZiAoY3VycmVudC5jb25kaXRpb24uY29kZSA9PT0gMTA4Nykge1xuICAgICAgd2VhdGhlckljb24uc3JjID0gXCJ3ZWF0aGVySWNvbnMvdGh1bmRlcnlPdXRicmVha3Muc3ZnXCI7XG4gICAgfSBlbHNlIGlmIChjdXJyZW50LmNvbmRpdGlvbi5jb2RlID09PSAxMTE0KSB7XG4gICAgICB3ZWF0aGVySWNvbi5zcmMgPSBcIndlYXRoZXJJY29ucy9ibG93aW5nU25vdy5zdmdcIjtcbiAgICB9IGVsc2UgaWYgKGN1cnJlbnQuY29uZGl0aW9uLmNvZGUgPT09IDExMTcpIHtcbiAgICAgIHdlYXRoZXJJY29uLnNyYyA9IFwid2VhdGhlckljb25zL2JsaXp6YXJkLnN2Z1wiO1xuICAgIH0gZWxzZSBpZiAoY3VycmVudC5jb25kaXRpb24uY29kZSA9PT0gMTEzNSkge1xuICAgICAgd2VhdGhlckljb24uc3JjID0gXCJ3ZWF0aGVySWNvbnMvZm9nLnN2Z1wiO1xuICAgIH0gZWxzZSBpZiAoY3VycmVudC5jb25kaXRpb24uY29kZSA9PT0gMTE0Nykge1xuICAgICAgd2VhdGhlckljb24uc3JjID0gXCJ3ZWF0aGVySWNvbnMvZnJlZXppbmdGb2cuc3ZnXCI7XG4gICAgfSBlbHNlIGlmIChjdXJyZW50LmNvbmRpdGlvbi5jb2RlID09PSAxMTUzKSB7XG4gICAgICB3ZWF0aGVySWNvbi5zcmMgPSBcIndlYXRoZXJJY29ucy9saWdodFJhaW4uc3ZnXCI7XG4gICAgfSBlbHNlIGlmIChcbiAgICAgIGN1cnJlbnQuY29uZGl0aW9uLmNvZGUgPT09IDExNzEgfHxcbiAgICAgIGN1cnJlbnQuY29uZGl0aW9uLmNvZGUgPT09IDEyMDEgfHxcbiAgICAgIGN1cnJlbnQuY29uZGl0aW9uLmNvZGUgPT09IDEyMDcgfHxcbiAgICAgIGN1cnJlbnQuY29uZGl0aW9uLmNvZGUgPT09IDEyNTJcbiAgICApIHtcbiAgICAgIHdlYXRoZXJJY29uLnNyYyA9IFwid2VhdGhlckljb25zL2hlYXZ5RnJlZXppbmdEcml6emxlLnN2Z1wiO1xuICAgIH0gZWxzZSBpZiAoXG4gICAgICBjdXJyZW50LmNvbmRpdGlvbi5jb2RlID09PSAxMTgwIHx8XG4gICAgICBjdXJyZW50LmNvbmRpdGlvbi5jb2RlID09PSAxMTgzXG4gICAgKSB7XG4gICAgICB3ZWF0aGVySWNvbi5zcmMgPSBcIndlYXRoZXJJY29ucy9saWdodFJhaW4uc3ZnXCI7XG4gICAgfSBlbHNlIGlmIChcbiAgICAgIGN1cnJlbnQuY29uZGl0aW9uLmNvZGUgPT09IDExODYgfHxcbiAgICAgIGN1cnJlbnQuY29uZGl0aW9uLmNvZGUgPT09IDExODlcbiAgICApIHtcbiAgICAgIHdlYXRoZXJJY29uLnNyYyA9IFwid2VhdGhlckljb25zL21vZGVyYXRlUmFpbi5zdmdcIjtcbiAgICB9IGVsc2UgaWYgKFxuICAgICAgY3VycmVudC5jb25kaXRpb24uY29kZSA9PT0gMTE5MiB8fFxuICAgICAgY3VycmVudC5jb25kaXRpb24uY29kZSA9PT0gMTE5NVxuICAgICkge1xuICAgICAgd2VhdGhlckljb24uc3JjID0gXCJ3ZWF0aGVySWNvbnMvaGVhdnlSYWluLnN2Z1wiO1xuICAgIH0gZWxzZSBpZiAoXG4gICAgICBjdXJyZW50LmNvbmRpdGlvbi5jb2RlID09PSAxMjEzIHx8XG4gICAgICBjdXJyZW50LmNvbmRpdGlvbi5jb2RlID09PSAxMjU1XG4gICAgKSB7XG4gICAgICB3ZWF0aGVySWNvbi5zcmMgPSBcIndlYXRoZXJJY29ucy9saWdodFNub3cuc3ZnXCI7XG4gICAgfSBlbHNlIGlmIChcbiAgICAgIGN1cnJlbnQuY29uZGl0aW9uLmNvZGUgPT09IDEyMTYgfHxcbiAgICAgIGN1cnJlbnQuY29uZGl0aW9uLmNvZGUgPT09IDEyMTkgfHxcbiAgICAgIGN1cnJlbnQuY29uZGl0aW9uLmNvZGUgPT09IDEyNThcbiAgICApIHtcbiAgICAgIHdlYXRoZXJJY29uLnNyYyA9IFwid2VhdGhlckljb25zL21vZGVyYXRlU25vdy5zdmdcIjtcbiAgICB9IGVsc2UgaWYgKFxuICAgICAgY3VycmVudC5jb25kaXRpb24uY29kZSA9PT0gMTIyMiB8fFxuICAgICAgY3VycmVudC5jb25kaXRpb24uY29kZSA9PT0gMTIyNVxuICAgICkge1xuICAgICAgd2VhdGhlckljb24uc3JjID0gXCJ3ZWF0aGVySWNvbnMvaGVhdnlTbm93LnN2Z1wiO1xuICAgIH0gZWxzZSBpZiAoXG4gICAgICBjdXJyZW50LmNvbmRpdGlvbi5jb2RlID09PSAxMjM3IHx8XG4gICAgICBjdXJyZW50LmNvbmRpdGlvbi5jb2RlID09PSAxMjYxIHx8XG4gICAgICBjdXJyZW50LmNvbmRpdGlvbi5jb2RlID09PSAxMjY0XG4gICAgKSB7XG4gICAgICB3ZWF0aGVySWNvbi5zcmMgPSBcIndlYXRoZXJJY29ucy9pY2VQZWxsZXRzLnN2Z1wiO1xuICAgIH0gZWxzZSBpZiAoY3VycmVudC5jb25kaXRpb24uY29kZSA9PT0gMTI0MCkge1xuICAgICAgd2VhdGhlckljb24uc3JjID0gXCJ3ZWF0aGVySWNvbnMvbGlnaHRSYWluU2hvd2VyLnN2Z1wiO1xuICAgIH0gZWxzZSBpZiAoY3VycmVudC5jb25kaXRpb24uY29kZSA9PT0gMTI0Mykge1xuICAgICAgd2VhdGhlckljb24uc3JjID0gXCJ3ZWF0aGVySWNvbnMvbW9kZXJhdGVSYWluU2hvd2VyLnN2Z1wiO1xuICAgIH0gZWxzZSBpZiAoY3VycmVudC5jb25kaXRpb24uY29kZSA9PT0gMTI0Nikge1xuICAgICAgd2VhdGhlckljb24uc3JjID0gXCJ3ZWF0aGVySWNvbnMvdG9ycmVudGlhbFJhaW5TaG93ZXIuc3ZnXCI7XG4gICAgfSBlbHNlIGlmIChjdXJyZW50LmNvbmRpdGlvbi5jb2RlID09PSAxMjczKSB7XG4gICAgICB3ZWF0aGVySWNvbi5zcmMgPSBcIndlYXRoZXJJY29ucy9wYXRjaHlMaWdodFJhaW5UaHVuZGVyLnN2Z1wiO1xuICAgIH0gZWxzZSBpZiAoY3VycmVudC5jb25kaXRpb24uY29kZSA9PT0gMTI3Nikge1xuICAgICAgd2VhdGhlckljb24uc3JjID0gXCJ3ZWF0aGVySWNvbnMvcGF0Y2h5SGVhdnlSYWluVGh1bmRlci5zdmdcIjtcbiAgICB9IGVsc2UgaWYgKFxuICAgICAgY3VycmVudC5jb25kaXRpb24uY29kZSA9PT0gMTI3OSB8fFxuICAgICAgY3VycmVudC5jb25kaXRpb24uY29kZSA9PT0gMTI4MlxuICAgICkge1xuICAgICAgd2VhdGhlckljb24uc3JjID0gXCJ3ZWF0aGVySWNvbnMvcGF0Y2h5U25vd1RodW5kZXIuc3ZnXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIHdlYXRoZXJJY29uLnNyYyA9IGN1cnJlbnQuY29uZGl0aW9uLmljb247XG4gICAgfVxuICB9XG59O1xuXG5jb25zdCB1cHBlckNvbmRpdGlvblR4dCA9IGZ1bmN0aW9uIChjdXJyZW50KSB7XG4gIGxldCBjb25kaXRpb25TdHIgPSBjdXJyZW50LmNvbmRpdGlvbi50ZXh0O1xuICBsZXQgYXJyID0gY29uZGl0aW9uU3RyLnNwbGl0KFwiIFwiKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcbiAgICBhcnJbaV0gPSBhcnJbaV1bMF0udG9VcHBlckNhc2UoKSArIGFycltpXS5zdWJzdHIoMSk7XG4gIH1cbiAgY29uZGl0aW9uU3RyID0gYXJyLmpvaW4oXCIgXCIpO1xuICByZXR1cm4gY29uZGl0aW9uU3RyO1xufTtcblxuZXhwb3J0IHsgc2VsZWN0SWNvbiwgdXBwZXJDb25kaXRpb25UeHQgfTtcbiIsImNvbnN0IHBvcHVsYXRlID0gYXN5bmMgZnVuY3Rpb24gKFxuICB3ZWF0aGVyRGF0YSxcbiAgY3VycmVudCxcbiAgZm9yZWNhc3QsXG4gIGxvY2F0aW9uLFxuICBzZWxlY3RJY29uLFxuICB1cHBlckNvbmRpdGlvblR4dCxcbiAgZGF5c0FycixcbiAgZGF0ZVR4dCxcbiAgdGltZSxcbiAgZGF5V2VlayxcbiAgdGVtcF9jLFxuICB0ZW1wX2YsXG4gIGZlZWxzX2MsXG4gIGZlZWxzX2YsXG4gIGh1bWlkaXR5LFxuICBjaGFuY2UsXG4gIGNoYW5jZVNub3csXG4gIHdpbmRcbikge1xuICBjdXJyZW50ID0gYXdhaXQgd2VhdGhlckRhdGEuY3VycmVudDtcbiAgZm9yZWNhc3QgPSBhd2FpdCB3ZWF0aGVyRGF0YS5mb3JlY2FzdDtcbiAgbG9jYXRpb24gPSBhd2FpdCB3ZWF0aGVyRGF0YS5sb2NhdGlvbjtcbiAgY29uc3QgbG9jYWxlID0gXCJlbi1HQlwiO1xuXG4gIGxldCBmb3JlY2FzdEFyciA9IGZvcmVjYXN0LmZvcmVjYXN0ZGF5O1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGZvcmVjYXN0QXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgbGV0IGZvcmVjYXN0ID0gZm9yZWNhc3RBcnJbaV0uZGF5O1xuICAgIGxldCBkYXRlRGFpbHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjZGF0ZSR7aX1gKTtcbiAgICBsZXQgZGF5V2VlayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNkYXlXZWVrJHtpfWApO1xuICAgIGxldCBjb25kaXRpb25EYWlseSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNjb25kaXRpb24ke2l9YCk7XG4gICAgbGV0IHdlYXRoZXJJY29uRGFpbHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjd2VhdGhlckljb24ke2l9YCk7XG4gICAgbGV0IHRlbXBfY0RhaWx5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI3RlbXBfYyR7aX1gKTtcbiAgICBsZXQgdGVtcF9mRGFpbHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjdGVtcF9mJHtpfWApO1xuXG4gICAgLy8gRGF0ZSB0byBVSyBmb3JtYXRcbiAgICBsZXQgdGltZXN0YW1wID0gZm9yZWNhc3RBcnJbaV0uZGF0ZTtcbiAgICBsZXQgZGF0ZSA9IG5ldyBEYXRlKHRpbWVzdGFtcCk7XG4gICAgbGV0IGRheSA9IGRhdGUuZ2V0RGF5KCk7XG5cbiAgICBsZXQgY29uZGl0aW9uID0gZm9yZWNhc3RBcnJbaV0uZGF5O1xuICAgIGkgPT09IDBcbiAgICAgID8gKGRheVdlZWsuaW5uZXJIVE1MID0gXCJUb2RheVwiKVxuICAgICAgOiAoZGF5V2Vlay5pbm5lckhUTUwgPSBkYXlzQXJyW2RheV0pO1xuICAgIGRhdGUgPSBkYXRlXG4gICAgICAudG9Mb2NhbGVTdHJpbmcobG9jYWxlLCB7IHRpbWVab25lOiBcIkV1cm9wZS9Mb25kb25cIiB9KVxuICAgICAgLnNwbGl0KFwiLFwiKTtcbiAgICBkYXRlRGFpbHkuaW5uZXJIVE1MID0gZGF0ZVswXTtcbiAgICBsZXQgY29uZGl0aW9udHh0ID0gYXdhaXQgdXBwZXJDb25kaXRpb25UeHQoY29uZGl0aW9uKTtcbiAgICBjb25kaXRpb25EYWlseS5pbm5lckhUTUwgPSBjb25kaXRpb250eHQ7XG4gICAgdGVtcF9jRGFpbHkuaW5uZXJIVE1MID0gYCR7Zm9yZWNhc3RBcnJbaV0uZGF5LmF2Z3RlbXBfY30gJiM4NDUxYDtcbiAgICB0ZW1wX2ZEYWlseS5pbm5lckhUTUwgPSBgJHtmb3JlY2FzdEFycltpXS5kYXkuYXZndGVtcF9mfSAmIzg0NTdgO1xuICAgIGxldCBkYWlseSA9IHRydWU7XG4gICAgc2VsZWN0SWNvbihmb3JlY2FzdCwgd2VhdGhlckljb25EYWlseSwgZGFpbHkpO1xuICB9XG4gIC8vIFVwZGF0ZSBDb25kaXRpb25cbiAgbGV0IGNvbmRpdGlvbnR4dCA9IGF3YWl0IHVwcGVyQ29uZGl0aW9uVHh0KGN1cnJlbnQpO1xuICBjb25kaXRpb24uaW5uZXJIVE1MID0gY29uZGl0aW9udHh0O1xuICBjaXR5LmlubmVySFRNTCA9IGAke2xvY2F0aW9uLm5hbWV9LCBgO1xuICBjb3VudHJ5LmlubmVySFRNTCA9IGxvY2F0aW9uLmNvdW50cnk7XG4gIGxldCB0aW1lc3RhbXAgPSBsb2NhdGlvbi5sb2NhbHRpbWU7XG4gIGxldCBkYXRlID0gbmV3IERhdGUodGltZXN0YW1wKTtcbiAgZGF0ZSA9IGRhdGUudG9Mb2NhbGVTdHJpbmcobG9jYWxlLCB7IHRpbWVab25lOiBcIkV1cm9wZS9Mb25kb25cIiB9KS5zcGxpdChcIixcIik7XG4gIGRhdGVUeHQuaW5uZXJIVE1MID0gZGF0ZVswXTtcbiAgdGltZS5pbm5lckhUTUwgPSBkYXRlWzFdO1xuICBkYXlXZWVrLmlubmVySFRNTCA9IFwiQ3VycmVudGx5XCI7XG4gIHRlbXBfYy5pbm5lckhUTUwgPSBgJHtjdXJyZW50LnRlbXBfY30gJiM4NDUxYDtcbiAgdGVtcF9mLmlubmVySFRNTCA9IGAke2N1cnJlbnQudGVtcF9mfSAmIzg0NTdgO1xuICBmZWVsc19jLmlubmVySFRNTCA9IGAke2N1cnJlbnQuZmVlbHNsaWtlX2N9ICYjODQ1MWA7XG4gIGZlZWxzX2YuaW5uZXJIVE1MID0gYCR7Y3VycmVudC5mZWVsc2xpa2VfZn0gJiM4NDU3YDtcbiAgaHVtaWRpdHkuaW5uZXJIVE1MID0gYCR7Y3VycmVudC5odW1pZGl0eX0gJiN4MjVgO1xuICBjaGFuY2UuaW5uZXJIVE1MID0gYCR7Zm9yZWNhc3QuZm9yZWNhc3RkYXlbMF0uZGF5LmRhaWx5X2NoYW5jZV9vZl9yYWlufSAmI3gyNWA7XG4gIGNoYW5jZVNub3cuaW5uZXJIVE1MID0gYCR7Zm9yZWNhc3QuZm9yZWNhc3RkYXlbMF0uZGF5LmRhaWx5X2NoYW5jZV9vZl9zbm93fSAmI3gyNWA7XG4gIHdpbmQuaW5uZXJIVE1MID0gYCR7Y3VycmVudC53aW5kX21waH0gbXBoYDtcbiAgLy8gSWNvbiBDb2RlXG4gIGxldCB3ZWF0aGVySWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjd2VhdGhlckljb25cIik7XG4gIGxldCBkYWlseSA9IGZhbHNlO1xuICBzZWxlY3RJY29uKGN1cnJlbnQsIHdlYXRoZXJJY29uKTtcbn07XG5cbmV4cG9ydCB7IHBvcHVsYXRlIH07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5pbXBvcnQgeyBwb3B1bGF0ZSB9IGZyb20gXCIuL3BvcHVsYXRlXCI7XG5pbXBvcnQgeyBzZWxlY3RJY29uLCB1cHBlckNvbmRpdGlvblR4dCB9IGZyb20gXCIuL2Z1bmN0aW9uYWxpdHlcIjtcblxuY29uc3QgbG9jYXRpb25JbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbG9jYXRpb25JbnB1dFwiKTtcbmNvbnN0IHNlYXJjaEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc3VibWl0TG9jYXRpb25cIik7XG5sZXQgbG9jYXRpb25UeHQgPSBcIkxvbmRvblwiO1xuY29uc3QgY29uZGl0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb25kaXRpb25cIik7XG5jb25zdCBjaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjaXR5XCIpO1xuY29uc3QgY291bnRyeSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY291bnRyeVwiKTtcbmNvbnN0IGRhdGVUeHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2RhdGVcIik7XG5jb25zdCB0aW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0aW1lXCIpO1xuY29uc3QgZGF5c0FyciA9IFtcbiAgXCJTdW5kYXlcIixcbiAgXCJNb25kYXlcIixcbiAgXCJUdWVzZGF5XCIsXG4gIFwiV2VkbmVzZGF5XCIsXG4gIFwiVGh1cnNkYXlcIixcbiAgXCJGcmlkYXlcIixcbiAgXCJTYXR1cmRheVwiLFxuXTtcbmNvbnN0IGRheVdlZWsgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2RheVdlZWtcIik7XG5jb25zdCB0ZW1wX2MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RlbXBfY1wiKTtcbmNvbnN0IHRlbXBfZiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGVtcF9mXCIpO1xuLy8gRnVydGhlciBEZXRhaWxzXG5jb25zdCBmZWVsc19jID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNmZWVsc19jaW5mb1wiKTtcbmNvbnN0IGZlZWxzX2YgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2ZlZWxzX2ZpbmZvXCIpO1xuY29uc3QgaHVtaWRpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2h1bWlkaXR5aW5mb1wiKTtcbmNvbnN0IGNoYW5jZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY2hhbmNlaW5mb1wiKTtcbmNvbnN0IGNoYW5jZVNub3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NoYW5jZVNub3dpbmZvXCIpO1xuY29uc3Qgd2luZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjd2luZGluZm9cIik7XG5jb25zdCBidG5UZW1wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5idG5UZW1wXCIpO1xuY29uc3QgZXJyb3JNc2cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Vycm9yXCIpO1xuXG5hc3luYyBmdW5jdGlvbiBmZXRjaFdlYXRoZXIoXG4gIGxvY2F0aW9uVHh0LFxuICBwb3B1bGF0ZSxcbiAgZGF5c0FycixcbiAgZGF0ZVR4dCxcbiAgdGltZSxcbiAgZGF5V2VlayxcbiAgdGVtcF9jLFxuICB0ZW1wX2YsXG4gIGZlZWxzX2MsXG4gIGZlZWxzX2YsXG4gIGh1bWlkaXR5LFxuICBjaGFuY2UsXG4gIGNoYW5jZVNub3csXG4gIHdpbmRcbikge1xuICBlcnJvck1zZy5jbGFzc0xpc3QgPSBcImhpZGRlblwiO1xuICBsZXQgY3VycmVudCA9IFwiXCI7XG4gIGxldCBmb3JlY2FzdCA9IFwiXCI7XG4gIGxldCBsb2NhdGlvbiA9IFwiXCI7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG4gICAgYGh0dHA6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvZm9yZWNhc3QuanNvbj9rZXk9NGRhNDAzMjg2ZGQ2NGRjZmIwYzIwMDAxNDIzMzAwOCZxPSR7bG9jYXRpb25UeHR9JmRheXM9NyZhcWk9eWVzJmFsZXJ0cz1ub2AsXG4gICAgeyBtb2RlOiBcImNvcnNcIiB9XG4gICk7XG4gIGNvbnN0IHdlYXRoZXJEYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICBwb3B1bGF0ZShcbiAgICB3ZWF0aGVyRGF0YSxcbiAgICBjdXJyZW50LFxuICAgIGZvcmVjYXN0LFxuICAgIGxvY2F0aW9uLFxuICAgIHNlbGVjdEljb24sXG4gICAgdXBwZXJDb25kaXRpb25UeHQsXG4gICAgZGF5c0FycixcbiAgICBkYXRlVHh0LFxuICAgIHRpbWUsXG4gICAgZGF5V2VlayxcbiAgICB0ZW1wX2MsXG4gICAgdGVtcF9mLFxuICAgIGZlZWxzX2MsXG4gICAgZmVlbHNfZixcbiAgICBodW1pZGl0eSxcbiAgICBjaGFuY2UsXG4gICAgY2hhbmNlU25vdyxcbiAgICB3aW5kXG4gICkuY2F0Y2goKGVycikgPT4ge1xuICAgIGVycm9yTXNnLmNsYXNzTGlzdCA9IFwiXCI7XG4gIH0pO1xuXG4gIC8vIGNvbnNvbGUubG9nKHdlYXRoZXJEYXRhKTtcbn1cblxuZmV0Y2hXZWF0aGVyKFxuICBsb2NhdGlvblR4dCxcbiAgcG9wdWxhdGUsXG4gIGRheXNBcnIsXG4gIGRhdGVUeHQsXG4gIHRpbWUsXG4gIGRheVdlZWssXG4gIHRlbXBfYyxcbiAgdGVtcF9mLFxuICBmZWVsc19jLFxuICBmZWVsc19mLFxuICBodW1pZGl0eSxcbiAgY2hhbmNlLFxuICBjaGFuY2VTbm93LFxuICB3aW5kXG4pO1xuXG4vLyBFdmVudCBMaXN0ZW5lcnNcblxubG9jYXRpb25JbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKCkgPT4ge1xuICBsb2NhdGlvblR4dCA9IGxvY2F0aW9uSW5wdXQudmFsdWU7XG59KTtcblxuc2VhcmNoQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gIGZldGNoV2VhdGhlcihcbiAgICBsb2NhdGlvblR4dCxcbiAgICBwb3B1bGF0ZSxcbiAgICBkYXlzQXJyLFxuICAgIGRhdGVUeHQsXG4gICAgdGltZSxcbiAgICBkYXlXZWVrLFxuICAgIHRlbXBfYyxcbiAgICB0ZW1wX2YsXG4gICAgZmVlbHNfYyxcbiAgICBmZWVsc19mLFxuICAgIGh1bWlkaXR5LFxuICAgIGNoYW5jZSxcbiAgICBjaGFuY2VTbm93LFxuICAgIHdpbmRcbiAgKTtcbiAgbG9jYXRpb25UeHQgPSBcIlwiO1xuICBsb2NhdGlvbklucHV0LnZhbHVlID0gXCJcIjtcbn0pO1xuXG5idG5UZW1wLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZm9yZWNhc3RTd2l0Y2gpID0+IHtcbiAgbGV0IHRlbXBfYzAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RlbXBfYzBcIik7XG4gIGxldCB0ZW1wX2MxID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0ZW1wX2MxXCIpO1xuICBsZXQgdGVtcF9jMiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGVtcF9jMlwiKTtcbiAgbGV0IHRlbXBfZjAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RlbXBfZjBcIik7XG4gIGxldCB0ZW1wX2YxID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0ZW1wX2YxXCIpO1xuICBsZXQgdGVtcF9mMiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGVtcF9mMlwiKTtcbiAgaWYgKGJ0blRlbXAuaWQgPT09IFwic3dpdGNoRlwiKSB7XG4gICAgYnRuVGVtcC5pbm5lckhUTUwgPSBcIlN3aXRjaCAmIzg0NTFcIjtcbiAgICBidG5UZW1wLmlkID0gXCJzd2l0Y2hDXCI7XG4gICAgdGVtcF9jLmNsYXNzTGlzdCA9IFwiaGlkZGVuXCI7XG4gICAgdGVtcF9mLmNsYXNzTGlzdCA9IFwiXCI7XG4gICAgZmVlbHNfYy5jbGFzc0xpc3QgPSBcImhpZGRlblwiO1xuICAgIGZlZWxzX2YuY2xhc3NMaXN0ID0gXCJcIjtcbiAgICB0ZW1wX2MwLmNsYXNzTGlzdCA9IFwiaGlkZGVuXCI7XG4gICAgdGVtcF9jMS5jbGFzc0xpc3QgPSBcImhpZGRlblwiO1xuICAgIHRlbXBfYzIuY2xhc3NMaXN0ID0gXCJoaWRkZW5cIjtcbiAgICB0ZW1wX2YwLmNsYXNzTGlzdCA9IFwiXCI7XG4gICAgdGVtcF9mMS5jbGFzc0xpc3QgPSBcIlwiO1xuICAgIHRlbXBfZjIuY2xhc3NMaXN0ID0gXCJcIjtcbiAgfSBlbHNlIHtcbiAgICBidG5UZW1wLmlubmVySFRNTCA9IFwiU3dpdGNoICYjODQ1N1wiO1xuICAgIGJ0blRlbXAuaWQgPSBcInN3aXRjaEZcIjtcbiAgICB0ZW1wX2MuY2xhc3NMaXN0ID0gXCJcIjtcbiAgICB0ZW1wX2YuY2xhc3NMaXN0ID0gXCJoaWRkZW5cIjtcbiAgICBmZWVsc19jLmNsYXNzTGlzdCA9IFwiXCI7XG4gICAgZmVlbHNfZi5jbGFzc0xpc3QgPSBcImhpZGRlblwiO1xuICAgIHRlbXBfYzAuY2xhc3NMaXN0ID0gXCJcIjtcbiAgICB0ZW1wX2MxLmNsYXNzTGlzdCA9IFwiXCI7XG4gICAgdGVtcF9jMi5jbGFzc0xpc3QgPSBcIlwiO1xuICAgIHRlbXBfZjAuY2xhc3NMaXN0ID0gXCJoaWRkZW5cIjtcbiAgICB0ZW1wX2YxLmNsYXNzTGlzdCA9IFwiaGlkZGVuXCI7XG4gICAgdGVtcF9mMi5jbGFzc0xpc3QgPSBcImhpZGRlblwiO1xuICB9XG59KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==