/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \":root {\\r\\n  --primary-bc-color: #220819;\\r\\n  --secundary-bc-color: #0c000a;\\r\\n  --secundary-font-color: #fff;\\r\\n  --modal-bc-color: #0f000cfb;\\r\\n  --modal-bc-info: #fff;\\r\\n  --primary-show-bc-color: #f8d5ee;\\r\\n  --primary-show-font-color: #000c06;\\r\\n  --button-bc-color: #1b0117;\\r\\n  --button-font-color: #fff;\\r\\n}\\r\\n\\r\\n* {\\r\\n  margin: 0;\\r\\n  padding: 0;\\r\\n  box-sizing: border-box;\\r\\n}\\r\\n\\r\\nmain {\\r\\n  background-color: var(--primary-bc-color);\\r\\n}\\r\\n\\r\\nh1,\\r\\nh2,\\r\\nh3,\\r\\np {\\r\\n  margin: 0;\\r\\n}\\r\\n\\r\\n.secondary-fc-color {\\r\\n  color: var(--secundary-font-color);\\r\\n}\\r\\n\\r\\n.page-header {\\r\\n  top: 0;\\r\\n  left: 0;\\r\\n  background-color: var(--primary-bc-color);\\r\\n  z-index: 1;\\r\\n  padding: 1rem 1rem 1rem 3vw;\\r\\n}\\r\\n\\r\\n.page-logo-container {\\r\\n  width: 50px;\\r\\n  height: 50px;\\r\\n  border-radius: 50%;\\r\\n  border: 2px solid var(--secundary-font-color);\\r\\n}\\r\\n\\r\\n.page-logo {\\r\\n  font-size: 12px;\\r\\n  word-wrap: break-word;\\r\\n  text-align: center;\\r\\n  margin: 0 !important;\\r\\n}\\r\\n\\r\\n.footer {\\r\\n  background-color: var(--secundary-bc-color);\\r\\n  width: 100%;\\r\\n  padding: 1rem 1rem 1rem 3vw;\\r\\n}\\r\\n\\r\\n.nav-item {\\r\\n  font-size: 16px;\\r\\n  text-decoration: none;\\r\\n}\\r\\n\\r\\n.nav-item:hover {\\r\\n  background-color: var(--secundary-font-color);\\r\\n}\\r\\n\\r\\n.nav-item.active {\\r\\n  background-color: var(--primary-bc-color);\\r\\n}\\r\\n\\r\\n.main-content {\\r\\n  background-color: var(--primary-bc-color);\\r\\n}\\r\\n\\r\\n.pop,\\r\\n.reserv-pop {\\r\\n  position: fixed;\\r\\n  top: 0;\\r\\n  width: 100%;\\r\\n  height: 100vh;\\r\\n  background-color: rgba(0, 0, 0, 0.5);\\r\\n  z-index: 1000;\\r\\n  backdrop-filter: blur(7px);\\r\\n  padding: 3%;\\r\\n}\\r\\n\\r\\n.popup {\\r\\n  background-color: rgba(0, 0, 0, 0.5);\\r\\n  padding: 0 1.25em 1.25em 1.25em;\\r\\n  width: 70%;\\r\\n  max-height: 95%;\\r\\n  overflow-y: auto;\\r\\n  border-radius: 20px;\\r\\n  box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);\\r\\n  margin-left: auto;\\r\\n  margin-right: auto;\\r\\n}\\r\\n\\r\\n.popup::-webkit-scrollbar {\\r\\n  display: none;\\r\\n}\\r\\n\\r\\n.img-container {\\r\\n  overflow: hidden;\\r\\n  max-height: 45vh;\\r\\n}\\r\\n\\r\\n.img-container img {\\r\\n  width: 100%;\\r\\n}\\r\\n\\r\\n.popup-content {\\r\\n  background-color: black;\\r\\n  padding: 10px;\\r\\n  display: flex !important;\\r\\n  flex-direction: column !important;\\r\\n  justify-content: center !important;\\r\\n  border-style: solid;\\r\\n  border-width: 2px;\\r\\n  border-color: white;\\r\\n  text-align: center;\\r\\n  gap: 10px;\\r\\n}\\r\\n\\r\\n.h3class {\\r\\n  text-align: center;\\r\\n}\\r\\n\\r\\n.addh3comment {\\r\\n  text-align: center;\\r\\n}\\r\\n\\r\\n.comment-input {\\r\\n  color: black;\\r\\n  width: 50%;\\r\\n  height: 5vh;\\r\\n}\\r\\n\\r\\n.name-input {\\r\\n  color: black;\\r\\n  width: 50%;\\r\\n  height: 15vh;\\r\\n}\\r\\n\\r\\n.start-date-input,\\r\\n.end-Input {\\r\\n  color: black;\\r\\n  width: 50%;\\r\\n  height: 5vh;\\r\\n}\\r\\n\\r\\n.comment-list {\\r\\n  text-align: center;\\r\\n}\\r\\n\\r\\nform {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  gap: 13px;\\r\\n  margin-left: 2%;\\r\\n}\\r\\n\\r\\nform > button {\\r\\n  width: 30%;\\r\\n  border: 1px solid white;\\r\\n  height: 5vh;\\r\\n  margin-bottom: 1rem;\\r\\n}\\r\\n\\r\\n@keyframes gradient {\\r\\n  0% {\\r\\n    background-position: 0% 50%;\\r\\n  }\\r\\n\\r\\n  50% {\\r\\n    background-position: 100% 50%;\\r\\n  }\\r\\n\\r\\n  100% {\\r\\n    background-position: 0% 50%;\\r\\n  }\\r\\n}\\r\\n\\r\\n.card-color:hover {\\r\\n  background: linear-gradient(-45deg, #35f80410, #001aff10, #fc049515, #cd04ff15);\\r\\n  background-size: 200% 200%;\\r\\n  animation: gradient 8s ease infinite;\\r\\n}\\r\\n\\r\\n.custom-h {\\r\\n  height: 5vh;\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://microverse-js-capstone/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://microverse-js-capstone/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://microverse-js-capstone/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://microverse-js-capstone/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://microverse-js-capstone/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://microverse-js-capstone/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://microverse-js-capstone/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://microverse-js-capstone/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://microverse-js-capstone/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://microverse-js-capstone/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _modules_addRapidApi_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/addRapidApi.js */ \"./src/modules/addRapidApi.js\");\n\r\n\r\n\r\n\r\n(0,_modules_addRapidApi_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n\n//# sourceURL=webpack://microverse-js-capstone/./src/index.js?");

/***/ }),

/***/ "./src/modules/addComments.js":
/*!************************************!*\
  !*** ./src/modules/addComments.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst getComments = async (itemId) => {\n  try {\n    const response = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/6b6MwShRJVij7XaDVDix/comments?item_id=${itemId}`);\n    const data = await response.json();\n    return data;\n  } catch (error) {\n    throw new Error(error);\n  }\n};\n\nconst addComment = async (itemId, name, comment) => {\n  await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/6b6MwShRJVij7XaDVDix/comments', {\n    method: 'POST',\n    headers: { 'Content-Type': 'application/json' },\n    body: JSON.stringify({\n      item_id: itemId,\n      username: name,\n      comment,\n    }),\n  });\n};\n\nconst commentsPopUp = () => {\n  const likeBtns = Array.from(document.getElementsByClassName('btn'));\n  const pop = document.querySelector('.pop');\n  pop.setAttribute('style', 'display: none;');\n\n  const createPopup = async (data) => {\n    const popup = document.createElement('div');\n    popup.classList.add('popup');\n\n    const closeBtn = document.createElement('div');\n    closeBtn.classList.add('close-btn', 'text-4xl', 'pb-2', 'cursor-pointer', 'text-right');\n    closeBtn.innerHTML = '&times;';\n    closeBtn.addEventListener('click', () => {\n      popup.remove();\n      pop.setAttribute('style', 'display: none;');\n    });\n\n    const popupImgContainer = document.createElement('div');\n    popupImgContainer.classList.add('img-container', 'rounded-lg');\n\n    const popupImg = document.createElement('img');\n\n    popupImg.src = data.images?.coverart || data.images?.background || `https://dummyimage.com/400x400/000/1aff00&text=${data.title}`;\n\n    const popupTitle = document.createElement('h3');\n    popupTitle.classList.add('text-3xl', 'font-bold', 'pt-4');\n    popupTitle.innerHTML = data.title;\n\n    const artist = document.createElement('h4');\n    artist.classList.add('text-[#777]', '-mt-2');\n    artist.innerHTML = data.artists[0].alias;\n\n    const commentsTitle = document.createElement('h3');\n    const comments = await getComments(data.key);\n\n    commentsTitle.classList.add('text-[#1ED760]', 'mt-4');\n    commentsTitle.textContent = `Comments (${comments.length ? comments.length : '0'})`;\n\n    const commentList = document.createElement('ul');\n    commentList.classList.add('comment-list');\n    if (comments.length > 0) {\n      comments.forEach((comment) => {\n        const commentItem = document.createElement('li');\n        commentItem.innerHTML = `${comment.creation_date} <strong>${comment.comment} : </strong>  ${comment.username}`;\n        commentList.appendChild(commentItem);\n      });\n    } else {\n      const noCommentItem = document.createElement('li');\n      noCommentItem.innerHTML = 'No comments yet';\n      commentList.appendChild(noCommentItem);\n    }\n\n    const formTitle = document.createElement('h3');\n    formTitle.innerHTML = 'Add a comment';\n\n    const commentInput = document.createElement('input');\n    commentInput.type = 'text';\n    commentInput.classList.add('comment-input');\n    commentInput.placeholder = 'Enter your name...';\n\n    const nameInput = document.createElement('input');\n    nameInput.type = 'text';\n    nameInput.classList.add('name-input');\n    nameInput.placeholder = 'Enter a comment...';\n\n    const submitBtn = document.createElement('button');\n    submitBtn.type = 'submit';\n    submitBtn.innerHTML = 'Comment';\n\n    const form = document.createElement('form');\n    form.addEventListener('submit', async (event) => {\n      event.preventDefault();\n      const commentInput = event.target.querySelector('.comment-input');\n      const comment = commentInput.value.trim();\n      const nameInput = event.target.querySelector('.name-input');\n      const name = nameInput.value.trim();\n      if (comment) {\n        addComment(data.key, name, comment);\n        const comments = await getComments(data.key);\n\n        const commentItem = document.createElement('li');\n        commentItem.innerHTML = `<strong>${comment}:</strong> ${name}`;\n        commentList.appendChild(commentItem);\n\n        commentsTitle.textContent = `Comments (${comments.length})`;\n        commentInput.value = '';\n        nameInput.value = '';\n      }\n    });\n\n    form.appendChild(commentInput);\n    form.appendChild(nameInput);\n    form.appendChild(submitBtn);\n\n    const popupHeader = document.createElement('div');\n    popupHeader.classList.add('popup-header');\n    popupHeader.appendChild(closeBtn);\n\n    const popupContent = document.createElement('div');\n    popupContent.classList.add('popup-content');\n    popupImgContainer.appendChild(popupImg);\n    popupContent.appendChild(popupImgContainer);\n    popupContent.appendChild(popupTitle);\n    popupContent.appendChild(artist);\n    popupContent.appendChild(commentsTitle);\n    popupContent.appendChild(commentList);\n    popupContent.appendChild(formTitle);\n    popupContent.appendChild(form);\n\n    popup.appendChild(popupHeader);\n    popup.appendChild(popupContent);\n    pop.appendChild(popup);\n  };\n\n  likeBtns.forEach((likeBtn) => {\n    likeBtn.addEventListener('click', async () => {\n      pop.setAttribute('style', 'display: block;');\n      const cardKey = likeBtn.parentNode.parentNode.parentNode.id;\n      const data = JSON.parse(localStorage.getItem('songs')).find((song) => song.key === cardKey);\n      createPopup(data);\n    });\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (commentsPopUp);\n\n\n//# sourceURL=webpack://microverse-js-capstone/./src/modules/addComments.js?");

/***/ }),

/***/ "./src/modules/addItemCounter.js":
/*!***************************************!*\
  !*** ./src/modules/addItemCounter.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst itemsCounter = () => {\n  const itemsContainer = document.getElementById('cards');\n  const childCount = itemsContainer.childElementCount;\n\n  const charts = document.getElementById('charts');\n  charts.innerHTML = `Top Charts (${childCount})`;\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (itemsCounter);\n\n\n//# sourceURL=webpack://microverse-js-capstone/./src/modules/addItemCounter.js?");

/***/ }),

/***/ "./src/modules/addLikes.js":
/*!*********************************!*\
  !*** ./src/modules/addLikes.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addLike: () => (/* binding */ addLike),\n/* harmony export */   fetchLikes: () => (/* binding */ fetchLikes),\n/* harmony export */   updateLikes: () => (/* binding */ updateLikes)\n/* harmony export */ });\nconst updateLikes = async (key, likes) => {\r\n  const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/6b6MwShRJVij7XaDVDix/likes/';\r\n  const res = await fetch(url);\r\n  const data = await res.json();\r\n\r\n  data.filter((item) => {\r\n    if (item.item_id === `${key}`) {\r\n      likes.innerHTML = `${item.likes} likes`;\r\n    }\r\n    return '';\r\n  });\r\n};\r\n\r\nconst addLike = async (key, likes) => {\r\n  const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/6b6MwShRJVij7XaDVDix/likes/';\r\n  await fetch(url, {\r\n    method: 'POST',\r\n    body: JSON.stringify({\r\n      item_id: `${key}`,\r\n    }),\r\n    headers: {\r\n      'Content-Type': 'application/json; charset=UTF-8',\r\n    },\r\n  });\r\n\r\n  updateLikes(key, likes);\r\n};\r\n\r\nconst fetchLikes = async () => {\r\n  const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/6b6MwShRJVij7XaDVDix/likes/';\r\n  const res = await fetch(url);\r\n  const data = await res.json();\r\n  return data;\r\n};\r\n\n\n//# sourceURL=webpack://microverse-js-capstone/./src/modules/addLikes.js?");

/***/ }),

/***/ "./src/modules/addRapidApi.js":
/*!************************************!*\
  !*** ./src/modules/addRapidApi.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _addComments_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addComments.js */ \"./src/modules/addComments.js\");\n/* harmony import */ var _displayItems_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./displayItems.js */ \"./src/modules/displayItems.js\");\n/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api.js */ \"./src/modules/api.js\");\n\r\n\r\n\r\n\r\nconst getShazamTracks = async () => {\r\n  if (localStorage.getItem('songs')) {\r\n    const localStorageItem = localStorage.getItem('songs');\r\n    const songs = JSON.parse(localStorageItem);\r\n\r\n    (0,_displayItems_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(songs);\r\n    (0,_addComments_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n  } else {\r\n    try {\r\n      const response = await fetch(_api_js__WEBPACK_IMPORTED_MODULE_2__.url, _api_js__WEBPACK_IMPORTED_MODULE_2__.options);\r\n      const result = await response.json();\r\n      if (result && result.tracks) {\r\n        const songs = result.tracks;\r\n        localStorage.setItem('songs', JSON.stringify(songs));\r\n\r\n        (0,_displayItems_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(songs);\r\n        (0,_addComments_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n      } else {\r\n        throw new Error('Failed to get Shazam tracks');\r\n      }\r\n    } catch (error) {\r\n      throw new Error(error);\r\n    }\r\n  }\r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getShazamTracks);\r\n\n\n//# sourceURL=webpack://microverse-js-capstone/./src/modules/addRapidApi.js?");

/***/ }),

/***/ "./src/modules/api.js":
/*!****************************!*\
  !*** ./src/modules/api.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   options: () => (/* binding */ options),\n/* harmony export */   url: () => (/* binding */ url)\n/* harmony export */ });\nconst url = 'https://shazam.p.rapidapi.com/charts/track?locale=en-US&pageSize=20&startFrom=0';\r\nconst options = {\r\n  method: 'GET',\r\n  headers: {\r\n    'X-RapidAPI-Key': '4383b7de5fmsh9eaa79b02a46491p1f9731jsn4089d17d625f',\r\n    'x-rapidapi-host': 'shazam.p.rapidapi.com',\r\n  },\r\n};\r\n\n\n//# sourceURL=webpack://microverse-js-capstone/./src/modules/api.js?");

/***/ }),

/***/ "./src/modules/displayItems.js":
/*!*************************************!*\
  !*** ./src/modules/displayItems.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _addLikes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addLikes.js */ \"./src/modules/addLikes.js\");\n/* harmony import */ var _addItemCounter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addItemCounter.js */ \"./src/modules/addItemCounter.js\");\n\r\n\r\n\r\nconst cards = document.getElementById('cards');\r\n\r\nconst renderCards = (array) => {\r\n  let htmlToAppend = '';\r\n  array.forEach((data) => {\r\n    const card = `\r\n  <div id=\"${\r\n  data.key\r\n}\" class=\"flex flex-col gap-2 p-4 h-full rounded-2xl bg-[#1C1F26] drop-shadow-md border-2 border-[#a8b3cf33;] hover:border-[#1ED760;] card-color\">\r\n  <div class=\"w-full h-[250px] rounded-lg\">\r\n  <img class=\"h-[250px] w-auto rounded-lg mx-auto\" src=\"${\r\n  data.images?.coverart\r\n    || data.images?.background\r\n    || `https://dummyimage.com/400x400/000/1aff00&text=${data.title}`\r\n}\" />\r\n  </div>\r\n  <div class=\"flex flex-col gap-2 justify-between\">\r\n  <h2 class=\"font-semibold text-lg capitalize custom-title\">${\r\n  data.title.length < 28 ? data.title : `${data.title.substring(0, 25)}...`\r\n}</h2>\r\n  <h5 class=\"text-[#777] -mt-2\"></h5>\r\n  <div class=\"flex flex-col gap-1 justify-between\">\r\n  <div class=\"flex justify-between p-1 items-center\">\r\n  <span id=\"like-${data.key}\" class=\"text-sm\">no likes</span>\r\n  <img class=\"h-[20px] color-white\" src=\"./assets/adore.svg\" alt=\"Like\" />\r\n  </div>\r\n  <button class=\"btn flex justify-between bg-[#ffffff10] p-1 rounded items-center cursor-pointer hover:bg-[#ffffff20]\">\r\n  <span class=\"text-sm\">Comments</span>\r\n  <img class=\"h-[20px] color-white\" src=\"./assets/comment.svg\" alt=\"comment\" />\r\n  </button>\r\n  <button class=\"btn-2 flex justify-between bg-[#ffffff10] p-1 rounded items-center cursor-pointer hover:bg-[#ffffff20]\">\r\n  \r\n  </div>\r\n  </div>\r\n  </div>\r\n  `;\r\n    htmlToAppend += card;\r\n  });\r\n\r\n  cards.innerHTML = htmlToAppend;\r\n\r\n  (0,_addLikes_js__WEBPACK_IMPORTED_MODULE_0__.fetchLikes)().then((showLikes) => {\r\n    array.forEach((data) => {\r\n      const likeNbr = document.getElementById(`like-${data.key}`);\r\n\r\n      const item = showLikes.find((item) => item.item_id === data.key);\r\n      likeNbr.innerHTML = item ? `${item.likes} likes` : 'No like yet';\r\n    });\r\n  });\r\n\r\n  array.forEach((data) => {\r\n    const { key } = data;\r\n    const likeNbr = document.getElementById(`like-${key}`);\r\n    const likeBtn = likeNbr.parentElement.querySelector('img');\r\n\r\n    likeBtn.addEventListener('click', () => {\r\n      (0,_addLikes_js__WEBPACK_IMPORTED_MODULE_0__.addLike)(key, likeNbr);\r\n      likeBtn.setAttribute('src', '../assets/adoreRed.svg');\r\n    });\r\n  });\r\n  (0,_addItemCounter_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderCards);\r\n\n\n//# sourceURL=webpack://microverse-js-capstone/./src/modules/displayItems.js?");

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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;