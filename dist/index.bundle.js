"use strict";
(self["webpackChunkto_do_list"] = self["webpackChunkto_do_list"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss ***!
  \*****************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "@charset \"UTF-8\";\nbody {\n  font-family: Arial, Helvetica, sans-serif;\n  text-align: center;\n  text-decoration: none;\n  background-color: #f8f8f8;\n  margin: 0;\n  padding: 0;\n}\nbody ul {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n.hidden {\n  display: none;\n}\n\n.to-do-container {\n  background-color: #fff;\n  font-size: 1.2rem;\n  margin: 1rem 4rem;\n  display: flex;\n  flex-direction: column;\n  box-shadow: 0.2rem 0.2rem 0.9rem #bbb;\n}\n.to-do-container .to-do-header {\n  display: grid;\n  grid-template-columns: auto 2.5rem;\n  padding: 0.4rem 0.4rem;\n  border-bottom: 1px solid #ddd;\n}\n.to-do-container .to-do-header .to-do-header-title {\n  text-align: left;\n  padding: 0.4rem 0.4rem;\n}\n.to-do-container .to-do-header .refresh-btn {\n  color: #777;\n  margin: 0.4rem 1rem;\n  width: 1rem;\n  height: 1rem;\n  cursor: pointer;\n}\n.to-do-container .to-do-header .refresh-btn::before {\n  content: \"⇅\";\n}\n.to-do-container .add-new {\n  display: grid;\n  grid-template-columns: auto 2.5rem;\n  padding: 0.4rem 0.4rem;\n  border-bottom: 1px solid #ddd;\n}\n.to-do-container .add-new input {\n  font-size: 1.2rem;\n  font-style: italic;\n}\n.to-do-container .add-new .new-input {\n  padding: 0.4rem 0.4rem;\n  outline: none;\n  border: none;\n}\n.to-do-container .add-new .new-input::placeholder {\n  color: #888;\n}\n.to-do-container .add-new .new-input-btn {\n  color: #777;\n  margin: 0.4rem 1rem;\n  width: 1rem;\n  height: 1rem;\n  cursor: pointer;\n}\n.to-do-container .add-new .new-input-btn::before {\n  content: \"↵\";\n}\n.to-do-container ul,\n.to-do-container .task-container {\n  display: flex;\n  flex-direction: column;\n  padding: 0;\n}\n.to-do-container ul li,\n.to-do-container ul .unchecked-slot,\n.to-do-container .task-container li,\n.to-do-container .task-container .unchecked-slot {\n  display: grid;\n  grid-template-columns: 2.5rem auto 2.5rem;\n  margin: 0;\n  padding: 0.4rem 0.4rem;\n  border-bottom: 1px solid #ddd;\n  align-items: center;\n}\n.to-do-container ul li .box,\n.to-do-container ul .unchecked-slot .box,\n.to-do-container .task-container li .box,\n.to-do-container .task-container .unchecked-slot .box {\n  margin: 0.4rem;\n  width: 1rem;\n  height: 1rem;\n  cursor: pointer;\n}\n.to-do-container ul li .unchecked,\n.to-do-container ul .unchecked-slot .unchecked,\n.to-do-container .task-container li .unchecked,\n.to-do-container .task-container .unchecked-slot .unchecked {\n  border: solid #888 2px;\n  border-radius: 0.2rem;\n}\n.to-do-container ul li .checked,\n.to-do-container ul .unchecked-slot .checked,\n.to-do-container .task-container li .checked,\n.to-do-container .task-container .unchecked-slot .checked {\n  color: #00c;\n  font-size: 2rem;\n  transform: rotate(135deg);\n  transform-origin: 90% 90%;\n  cursor: pointer;\n}\n.to-do-container ul li .checked::before,\n.to-do-container ul .unchecked-slot .checked::before,\n.to-do-container .task-container li .checked::before,\n.to-do-container .task-container .unchecked-slot .checked::before {\n  content: \"¬\";\n}\n.to-do-container ul li .task,\n.to-do-container ul .unchecked-slot .task,\n.to-do-container .task-container li .task,\n.to-do-container .task-container .unchecked-slot .task {\n  padding: 0.2rem;\n  font-size: 1.2rem;\n  text-align: left;\n  margin: 0.2rem;\n  border: none;\n  outline: none;\n}\n.to-do-container ul li .task::before,\n.to-do-container ul .unchecked-slot .task::before,\n.to-do-container .task-container li .task::before,\n.to-do-container .task-container .unchecked-slot .task::before {\n  content: \"\";\n}\n.to-do-container ul li .done,\n.to-do-container ul .unchecked-slot .done,\n.to-do-container .task-container li .done,\n.to-do-container .task-container .unchecked-slot .done {\n  color: #777;\n  text-decoration: line-through;\n}\n.to-do-container ul li .done::before,\n.to-do-container ul .unchecked-slot .done::before,\n.to-do-container .task-container li .done::before,\n.to-do-container .task-container .unchecked-slot .done::before {\n  content: \"Task done\";\n}\n.to-do-container ul li .handle,\n.to-do-container ul .unchecked-slot .handle,\n.to-do-container .task-container li .handle,\n.to-do-container .task-container .unchecked-slot .handle {\n  font-weight: bolder;\n  color: #777;\n  margin: 0;\n  padding: 0;\n  cursor: pointer;\n}\n.to-do-container ul li .handle::before,\n.to-do-container ul .unchecked-slot .handle::before,\n.to-do-container .task-container li .handle::before,\n.to-do-container .task-container .unchecked-slot .handle::before {\n  content: \"🗑\";\n}\n.to-do-container ul li .delete-btn,\n.to-do-container ul .unchecked-slot .delete-btn,\n.to-do-container .task-container li .delete-btn,\n.to-do-container .task-container .unchecked-slot .delete-btn {\n  cursor: pointer;\n  text-align: center;\n  align-items: flex-start;\n}\n.to-do-container ul li .delete-btn::before,\n.to-do-container ul .unchecked-slot .delete-btn::before,\n.to-do-container .task-container li .delete-btn::before,\n.to-do-container .task-container .unchecked-slot .delete-btn::before {\n  content: \"🗑\";\n}\n\n.clear-all-btn {\n  color: #888;\n  background-color: #f1f1f1;\n  border: none;\n  width: 100%;\n  padding: 1rem;\n  align-self: center;\n  cursor: pointer;\n}\n\n.clear-all-btn:hover {\n  color: #444;\n  background-color: #e7e7e7;\n  text-decoration: underline;\n}\n\n.hello {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n  padding: 0.4rem;\n  color: red;\n}", "",{"version":3,"sources":["webpack://./src/style.scss"],"names":[],"mappings":"AAAA,gBAAgB;AAEhB;EACE,yCAAA;EACA,kBAAA;EACA,qBAAA;EACA,yBAAA;EACA,SAAA;EACA,UAAA;AAAF;AAEE;EACE,gBAAA;EACA,SAAA;EACA,UAAA;AAAJ;;AAIA;EACE,aAAA;AADF;;AAIA;EACE,sBAAA;EACA,iBAAA;EACA,iBAAA;EACA,aAAA;EACA,sBAAA;EACA,qCAAA;AADF;AAGE;EACE,aAAA;EACA,kCAAA;EACA,sBAAA;EACA,6BAAA;AADJ;AAGI;EACE,gBAAA;EACA,sBAAA;AADN;AAII;EACE,WAAA;EACA,mBAAA;EACA,WAAA;EACA,YAAA;EACA,eAAA;AAFN;AAKI;EACE,YAAA;AAHN;AAOE;EACE,aAAA;EACA,kCAAA;EACA,sBAAA;EACA,6BAAA;AALJ;AAOI;EACE,iBAAA;EACA,kBAAA;AALN;AAQI;EACE,sBAAA;EACA,aAAA;EACA,YAAA;AANN;AASI;EACE,WAAA;AAPN;AAUI;EACE,WAAA;EACA,mBAAA;EACA,WAAA;EACA,YAAA;EACA,eAAA;AARN;AAWI;EACE,YAAA;AATN;AAaE;;EAEE,aAAA;EACA,sBAAA;EACA,UAAA;AAXJ;AAaI;;;;EAEE,aAAA;EACA,yCAAA;EACA,SAAA;EACA,sBAAA;EACA,6BAAA;EACA,mBAAA;AATN;AAWM;;;;EACE,cAAA;EACA,WAAA;EACA,YAAA;EACA,eAAA;AANR;AASM;;;;EACE,sBAAA;EACA,qBAAA;AAJR;AAOM;;;;EACE,WAAA;EACA,eAAA;EACA,yBAAA;EACA,yBAAA;EACA,eAAA;AAFR;AAKM;;;;EACE,YAAA;AAAR;AAGM;;;;EACE,eAAA;EACA,iBAAA;EACA,gBAAA;EACA,cAAA;EACA,YAAA;EACA,aAAA;AAER;AACM;;;;EACE,WAAA;AAIR;AADM;;;;EACE,WAAA;EACA,6BAAA;AAMR;AAHM;;;;EACE,oBAAA;AAQR;AALM;;;;EACE,mBAAA;EACA,WAAA;EACA,SAAA;EACA,UAAA;EACA,eAAA;AAUR;AAPM;;;;EACE,aAAA;AAYR;AATM;;;;EACE,eAAA;EACA,kBAAA;EACA,uBAAA;AAcR;AAXM;;;;EACE,aAAA;AAgBR;;AAVA;EACE,WAAA;EACA,yBAAA;EACA,YAAA;EACA,WAAA;EACA,aAAA;EACA,kBAAA;EACA,eAAA;AAaF;;AAVA;EACE,WAAA;EACA,yBAAA;EACA,0BAAA;AAaF;;AAVA;EACE,aAAA;EACA,sBAAA;EACA,WAAA;EACA,eAAA;EACA,UAAA;AAaF","sourcesContent":["// style.scss\n\nbody {\n  font-family: Arial, Helvetica, sans-serif;\n  text-align: center;\n  text-decoration: none;\n  background-color: #f8f8f8;\n  margin: 0;\n  padding: 0;\n\n  ul {\n    list-style: none;\n    margin: 0;\n    padding: 0;\n  }\n}\n\n.hidden {\n  display: none;\n}\n\n.to-do-container {\n  background-color: #fff;\n  font-size: 1.2rem;\n  margin: 1rem 4rem;\n  display: flex;\n  flex-direction: column;\n  box-shadow: 0.2rem 0.2rem 0.9rem #bbb;\n\n  .to-do-header {\n    display: grid;\n    grid-template-columns: auto 2.5rem;\n    padding: 0.4rem 0.4rem;\n    border-bottom: 1px solid #ddd;\n\n    .to-do-header-title {\n      text-align: left;\n      padding: 0.4rem 0.4rem;\n    }\n\n    .refresh-btn {\n      color: #777;\n      margin: 0.4rem 1rem;\n      width: 1rem;\n      height: 1rem;\n      cursor: pointer;\n    }\n\n    .refresh-btn::before {\n      content: \"⇅\";\n    }\n  }\n\n  .add-new {\n    display: grid;\n    grid-template-columns: auto 2.5rem;\n    padding: 0.4rem 0.4rem;\n    border-bottom: 1px solid #ddd;\n\n    input {\n      font-size: 1.2rem;\n      font-style: italic;\n    }\n\n    .new-input {\n      padding: 0.4rem 0.4rem;\n      outline: none;\n      border: none;\n    }\n\n    .new-input::placeholder {\n      color: #888;\n    }\n\n    .new-input-btn {\n      color: #777;\n      margin: 0.4rem 1rem;\n      width: 1rem;\n      height: 1rem;\n      cursor: pointer;\n    }\n\n    .new-input-btn::before {\n      content: \"↵\";\n    }\n  }\n\n  ul,\n  .task-container {\n    display: flex;\n    flex-direction: column;\n    padding: 0;\n\n    li,\n    .unchecked-slot {\n      display: grid;\n      grid-template-columns: 2.5rem auto 2.5rem;\n      margin: 0;\n      padding: 0.4rem 0.4rem;\n      border-bottom: 1px solid #ddd;\n      align-items: center;\n\n      .box {\n        margin: 0.4rem;\n        width: 1rem;\n        height: 1rem;\n        cursor: pointer;\n      }\n\n      .unchecked {\n        border: solid #888 2px;\n        border-radius: 0.2rem;\n      }\n\n      .checked {\n        color: #00c;\n        font-size: 2rem;\n        transform: rotate(135deg);\n        transform-origin: 90% 90%;\n        cursor: pointer;\n      }\n\n      .checked::before {\n        content: \"¬\";\n      }\n\n      .task {\n        padding: 0.2rem;\n        font-size: 1.2rem;\n        text-align: left;\n        margin: 0.2rem;\n        border: none;\n        outline: none;\n      }\n\n      .task::before {\n        content: \"\";\n      }\n\n      .done {\n        color: #777;\n        text-decoration: line-through;\n      }\n\n      .done::before {\n        content: \"Task done\";\n      }\n\n      .handle {\n        font-weight: bolder;\n        color: #777;\n        margin: 0;\n        padding: 0;\n        cursor: pointer;\n      }\n\n      .handle::before {\n        content: \"🗑\";\n      }\n\n      .delete-btn {\n        cursor: pointer;\n        text-align: center;\n        align-items: flex-start;\n      }\n\n      .delete-btn::before {\n        content: \"🗑\";\n      }\n    }\n  }\n}\n\n.clear-all-btn {\n  color: #888;\n  background-color: #f1f1f1;\n  border: none;\n  width: 100%;\n  padding: 1rem;\n  align-self: center;\n  cursor: pointer;\n}\n\n.clear-all-btn:hover {\n  color: #444;\n  background-color: #e7e7e7;\n  text-decoration: underline;\n}\n\n.hello {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n  padding: 0.4rem;\n  color: red;\n}\n"],"sourceRoot":""}]);
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
  var list = []; // return the list of modules as css string

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
  }; // import a list of modules into the list


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
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

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
  } // For old IE

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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_libraryModule_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/libraryModule.js */ "./src/modules/libraryModule.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");



const library = new _modules_libraryModule_js__WEBPACK_IMPORTED_MODULE_0__["default"]();

library.paintToPage();
library.setUpAddListener();
library.setInputFieldListeners();
library.setCheckboxFieldListeners();
library.setClearAll();

/***/ }),

/***/ "./src/modules/bookModule.js":
/*!***********************************!*\
  !*** ./src/modules/bookModule.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Book)
/* harmony export */ });
class Book {
  title;

  completed;

  index;
}

/***/ }),

/***/ "./src/modules/libraryModule.js":
/*!**************************************!*\
  !*** ./src/modules/libraryModule.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Library)
/* harmony export */ });
/* harmony import */ var _strShelfModule_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./strShelfModule.js */ "./src/modules/strShelfModule.js");
/* harmony import */ var _bookModule_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bookModule.js */ "./src/modules/bookModule.js");



class Library {
  shelf = [];

  bookshelf;

  addButton = document.getElementById('add-btn');

  newTitle = document.getElementById('newTitle');

  frontShelf = document.getElementById('frontShelf');

  clearAllBtn = document.getElementById('clear-all-btn');

  removeButton;

  inputField;

  checkboxButton;

  checkedTaskDescription;

  static pushToStorage = (obj) => {
    const stringify = JSON.stringify(obj);
    localStorage.setItem('strShelf', stringify);
  }

  static displayBook(title, id) {
    return `
    <div class="box unchecked"></div>
    <input class="task taskId${id}" type="text" value="${title}" name="Item1">
    <div class="handle removeButton" id="${id}" type="button"></div>
        `;
  }

  // Adds a unique class so it can be called by the addeventlistener later
  static displayCheckedBook(title, id) {
    return `
      <div class="box checked"></div>
      <input class="task done taskId${id}" type="text" value="${title}" name="Item1">
      <div class="handle removeButton" id="${id}" type="button"></div>
        `;
  }

  pullFromStorage = () => {
    if (!localStorage.getItem('strShelf')) return 0;
    const parsed = JSON.parse(localStorage.getItem('strShelf'));
    let counter = 1;
    const preShelf = [];
    const shelfSize = Object.values(parsed).length;

    for (let i = 0; i < shelfSize; i += 1) {
      if (this.shelf.length === 0) {
        for (let i = 0; i < shelfSize; i += 1) {
          this.shelf.push(Object.values(parsed)[i]);
        }
      }
      const parsedBook = parsed[`${counter}`];
      let tempShelf = Library.displayBook(parsedBook.title, counter);
      if (parsedBook.completed) {
        tempShelf = Library.displayCheckedBook(parsedBook.title, counter);
      }
      preShelf.push(tempShelf);
      counter += 1;
    }
    return preShelf;
  }

  paintToPage = () => {
    const preShelf = this.pullFromStorage();
    this.frontShelf.innerHTML = '';
    for (let i = 0; i < preShelf.length; i += 1) {
      const createdBook = document.createElement('div');
      createdBook.classList.add('unchecked-slot', 'book');
      createdBook.innerHTML = preShelf[i];
      createdBook.id = i + 1;
      this.frontShelf.appendChild(createdBook);
    }
    this.setRemoveListeners();
  }

  updateShelf = () => {
    this.bookshelf = new _strShelfModule_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
    let counter = 0;
    for (let i = 0; i < this.shelf.length; i += 1) {
      counter += 1;
      this.shelf[i].id = counter;
    }
    for (let i = 0; i < this.shelf.length; i += 1) {
      this.bookshelf[`${this.shelf[i].id}`] = this.shelf[i];
    }
    Library.pushToStorage(this.bookshelf);
  }

  newBook = (title) => {
    this.bookshelf = new _strShelfModule_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
    const book = new _bookModule_js__WEBPACK_IMPORTED_MODULE_1__["default"]();
    book.title = title;
    book.completed = false;
    this.shelf.push(book);
    this.updateShelf();
    this.paintToPage();
    this.setInputFieldListeners();
    this.setCheckboxFieldListeners();
  }

  removeBook = (id) => {
    for (let i = 0; i < this.shelf.length; i += 1) {
      if (this.shelf[i].id === parseInt(id, 10)) {
        this.shelf.splice(i, 1);
        this.updateShelf();
      }
      this.paintToPage();
      this.setCheckboxFieldListeners();
    }
  }

  updateTask = (id, text) => {
    for (let i = 0; i < this.shelf.length; i += 1) {
      if (this.shelf[i].id === parseInt(id, 10)) {
        this.shelf[i].title = text;
        this.updateShelf();
      }
    }
  }

  updateCompletion = (id, completed) => {
    for (let i = 0; i < this.shelf.length; i += 1) {
      if (this.shelf[i].id === parseInt(id, 10)) {
        this.shelf[i].completed = completed;
        this.updateShelf();
      }
    }
  }

  showUnchecked = () => {
    const pendingTasks = this.shelf.filter((task) => task.completed === false);
    this.shelf = [];
    pendingTasks.forEach((task) => {
      this.shelf.push(task);
    });
    this.updateShelf();
    this.paintToPage();
    this.setInputFieldListeners();
    this.setCheckboxFieldListeners();
  }

  setRemoveListeners = () => {
    this.removeButton = document.querySelectorAll('.removeButton');
    this.removeButton.forEach((button) => {
      button.addEventListener('click', (e) => {
        this.removeBook(e.target.id);
      });
    });
  }

  setUpAddListener = () => {
    this.addButton.addEventListener('click', () => {
      this.newBook(this.newTitle.value);
      this.pullFromStorage();
      this.newTitle.value = '';
    });
  }

  setInputFieldListeners = () => {
    this.inputField = document.querySelectorAll('.task');
    this.inputField.forEach((input) => {
      input.addEventListener('input', (e) => {
        const text = e.target.value;
        this.updateTask(e.target.parentElement.id, text);
      });
    });
  }

  setCheckboxFieldListeners = () => {
    this.checkboxButton = document.querySelectorAll('.box');
    this.checkboxButton.forEach((checkbox) => {
      checkbox.addEventListener('click', (e) => {
        let taskChecked = false;
        const crossTask = document.querySelector(`.taskId${e.target.parentElement.id}`);
        if (e.target.classList.contains('unchecked')) {
          taskChecked = true;
          crossTask.classList.add('done');
          e.target.classList.toggle('checked');
          e.target.classList.toggle('unchecked');
        } else if (e.target.classList.contains('checked')) {
          taskChecked = false;
          crossTask.classList.remove('done');
          e.target.classList.toggle('checked');
          e.target.classList.toggle('unchecked');
        }
        this.updateCompletion(e.target.parentElement.id, taskChecked);
      });
    });
  }

  // Sets the listener for the clear button

  setClearAll = () => {
    this.clearAllBtn.addEventListener('click', () => {
      this.showUnchecked();
    });
  }
}

/***/ }),

/***/ "./src/modules/strShelfModule.js":
/*!***************************************!*\
  !*** ./src/modules/strShelfModule.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ StrShelf)
/* harmony export */ });
class StrShelf {
}

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9CQUFvQix1QkFBdUI7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJEQUEyRCwwQkFBMEI7QUFDckY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOzs7Ozs7Ozs7Ozs7OztBQzdNZTtBQUNmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9zdHlsZS5zY3NzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3N0eWxlLnNjc3M/NzViYSIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9tb2R1bGVzL2Jvb2tNb2R1bGUuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9tb2R1bGVzL2xpYnJhcnlNb2R1bGUuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9tb2R1bGVzL3N0clNoZWxmTW9kdWxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGNoYXJzZXQgXFxcIlVURi04XFxcIjtcXG5ib2R5IHtcXG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjhmODtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcbmJvZHkgdWwge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbi5oaWRkZW4ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnRvLWRvLWNvbnRhaW5lciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxuICBtYXJnaW46IDFyZW0gNHJlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYm94LXNoYWRvdzogMC4ycmVtIDAuMnJlbSAwLjlyZW0gI2JiYjtcXG59XFxuLnRvLWRvLWNvbnRhaW5lciAudG8tZG8taGVhZGVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gMi41cmVtO1xcbiAgcGFkZGluZzogMC40cmVtIDAuNHJlbTtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkO1xcbn1cXG4udG8tZG8tY29udGFpbmVyIC50by1kby1oZWFkZXIgLnRvLWRvLWhlYWRlci10aXRsZSB7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgcGFkZGluZzogMC40cmVtIDAuNHJlbTtcXG59XFxuLnRvLWRvLWNvbnRhaW5lciAudG8tZG8taGVhZGVyIC5yZWZyZXNoLWJ0biB7XFxuICBjb2xvcjogIzc3NztcXG4gIG1hcmdpbjogMC40cmVtIDFyZW07XFxuICB3aWR0aDogMXJlbTtcXG4gIGhlaWdodDogMXJlbTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLnRvLWRvLWNvbnRhaW5lciAudG8tZG8taGVhZGVyIC5yZWZyZXNoLWJ0bjo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLih4VcXFwiO1xcbn1cXG4udG8tZG8tY29udGFpbmVyIC5hZGQtbmV3IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gMi41cmVtO1xcbiAgcGFkZGluZzogMC40cmVtIDAuNHJlbTtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkO1xcbn1cXG4udG8tZG8tY29udGFpbmVyIC5hZGQtbmV3IGlucHV0IHtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbn1cXG4udG8tZG8tY29udGFpbmVyIC5hZGQtbmV3IC5uZXctaW5wdXQge1xcbiAgcGFkZGluZzogMC40cmVtIDAuNHJlbTtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBib3JkZXI6IG5vbmU7XFxufVxcbi50by1kby1jb250YWluZXIgLmFkZC1uZXcgLm5ldy1pbnB1dDo6cGxhY2Vob2xkZXIge1xcbiAgY29sb3I6ICM4ODg7XFxufVxcbi50by1kby1jb250YWluZXIgLmFkZC1uZXcgLm5ldy1pbnB1dC1idG4ge1xcbiAgY29sb3I6ICM3Nzc7XFxuICBtYXJnaW46IDAuNHJlbSAxcmVtO1xcbiAgd2lkdGg6IDFyZW07XFxuICBoZWlnaHQ6IDFyZW07XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi50by1kby1jb250YWluZXIgLmFkZC1uZXcgLm5ldy1pbnB1dC1idG46OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi4oa1XFxcIjtcXG59XFxuLnRvLWRvLWNvbnRhaW5lciB1bCxcXG4udG8tZG8tY29udGFpbmVyIC50YXNrLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHBhZGRpbmc6IDA7XFxufVxcbi50by1kby1jb250YWluZXIgdWwgbGksXFxuLnRvLWRvLWNvbnRhaW5lciB1bCAudW5jaGVja2VkLXNsb3QsXFxuLnRvLWRvLWNvbnRhaW5lciAudGFzay1jb250YWluZXIgbGksXFxuLnRvLWRvLWNvbnRhaW5lciAudGFzay1jb250YWluZXIgLnVuY2hlY2tlZC1zbG90IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDIuNXJlbSBhdXRvIDIuNXJlbTtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDAuNHJlbSAwLjRyZW07XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi50by1kby1jb250YWluZXIgdWwgbGkgLmJveCxcXG4udG8tZG8tY29udGFpbmVyIHVsIC51bmNoZWNrZWQtc2xvdCAuYm94LFxcbi50by1kby1jb250YWluZXIgLnRhc2stY29udGFpbmVyIGxpIC5ib3gsXFxuLnRvLWRvLWNvbnRhaW5lciAudGFzay1jb250YWluZXIgLnVuY2hlY2tlZC1zbG90IC5ib3gge1xcbiAgbWFyZ2luOiAwLjRyZW07XFxuICB3aWR0aDogMXJlbTtcXG4gIGhlaWdodDogMXJlbTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLnRvLWRvLWNvbnRhaW5lciB1bCBsaSAudW5jaGVja2VkLFxcbi50by1kby1jb250YWluZXIgdWwgLnVuY2hlY2tlZC1zbG90IC51bmNoZWNrZWQsXFxuLnRvLWRvLWNvbnRhaW5lciAudGFzay1jb250YWluZXIgbGkgLnVuY2hlY2tlZCxcXG4udG8tZG8tY29udGFpbmVyIC50YXNrLWNvbnRhaW5lciAudW5jaGVja2VkLXNsb3QgLnVuY2hlY2tlZCB7XFxuICBib3JkZXI6IHNvbGlkICM4ODggMnB4O1xcbiAgYm9yZGVyLXJhZGl1czogMC4ycmVtO1xcbn1cXG4udG8tZG8tY29udGFpbmVyIHVsIGxpIC5jaGVja2VkLFxcbi50by1kby1jb250YWluZXIgdWwgLnVuY2hlY2tlZC1zbG90IC5jaGVja2VkLFxcbi50by1kby1jb250YWluZXIgLnRhc2stY29udGFpbmVyIGxpIC5jaGVja2VkLFxcbi50by1kby1jb250YWluZXIgLnRhc2stY29udGFpbmVyIC51bmNoZWNrZWQtc2xvdCAuY2hlY2tlZCB7XFxuICBjb2xvcjogIzAwYztcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIHRyYW5zZm9ybTogcm90YXRlKDEzNWRlZyk7XFxuICB0cmFuc2Zvcm0tb3JpZ2luOiA5MCUgOTAlO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4udG8tZG8tY29udGFpbmVyIHVsIGxpIC5jaGVja2VkOjpiZWZvcmUsXFxuLnRvLWRvLWNvbnRhaW5lciB1bCAudW5jaGVja2VkLXNsb3QgLmNoZWNrZWQ6OmJlZm9yZSxcXG4udG8tZG8tY29udGFpbmVyIC50YXNrLWNvbnRhaW5lciBsaSAuY2hlY2tlZDo6YmVmb3JlLFxcbi50by1kby1jb250YWluZXIgLnRhc2stY29udGFpbmVyIC51bmNoZWNrZWQtc2xvdCAuY2hlY2tlZDo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLCrFxcXCI7XFxufVxcbi50by1kby1jb250YWluZXIgdWwgbGkgLnRhc2ssXFxuLnRvLWRvLWNvbnRhaW5lciB1bCAudW5jaGVja2VkLXNsb3QgLnRhc2ssXFxuLnRvLWRvLWNvbnRhaW5lciAudGFzay1jb250YWluZXIgbGkgLnRhc2ssXFxuLnRvLWRvLWNvbnRhaW5lciAudGFzay1jb250YWluZXIgLnVuY2hlY2tlZC1zbG90IC50YXNrIHtcXG4gIHBhZGRpbmc6IDAuMnJlbTtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG4gIG1hcmdpbjogMC4ycmVtO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuLnRvLWRvLWNvbnRhaW5lciB1bCBsaSAudGFzazo6YmVmb3JlLFxcbi50by1kby1jb250YWluZXIgdWwgLnVuY2hlY2tlZC1zbG90IC50YXNrOjpiZWZvcmUsXFxuLnRvLWRvLWNvbnRhaW5lciAudGFzay1jb250YWluZXIgbGkgLnRhc2s6OmJlZm9yZSxcXG4udG8tZG8tY29udGFpbmVyIC50YXNrLWNvbnRhaW5lciAudW5jaGVja2VkLXNsb3QgLnRhc2s6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG59XFxuLnRvLWRvLWNvbnRhaW5lciB1bCBsaSAuZG9uZSxcXG4udG8tZG8tY29udGFpbmVyIHVsIC51bmNoZWNrZWQtc2xvdCAuZG9uZSxcXG4udG8tZG8tY29udGFpbmVyIC50YXNrLWNvbnRhaW5lciBsaSAuZG9uZSxcXG4udG8tZG8tY29udGFpbmVyIC50YXNrLWNvbnRhaW5lciAudW5jaGVja2VkLXNsb3QgLmRvbmUge1xcbiAgY29sb3I6ICM3Nzc7XFxuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG59XFxuLnRvLWRvLWNvbnRhaW5lciB1bCBsaSAuZG9uZTo6YmVmb3JlLFxcbi50by1kby1jb250YWluZXIgdWwgLnVuY2hlY2tlZC1zbG90IC5kb25lOjpiZWZvcmUsXFxuLnRvLWRvLWNvbnRhaW5lciAudGFzay1jb250YWluZXIgbGkgLmRvbmU6OmJlZm9yZSxcXG4udG8tZG8tY29udGFpbmVyIC50YXNrLWNvbnRhaW5lciAudW5jaGVja2VkLXNsb3QgLmRvbmU6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiVGFzayBkb25lXFxcIjtcXG59XFxuLnRvLWRvLWNvbnRhaW5lciB1bCBsaSAuaGFuZGxlLFxcbi50by1kby1jb250YWluZXIgdWwgLnVuY2hlY2tlZC1zbG90IC5oYW5kbGUsXFxuLnRvLWRvLWNvbnRhaW5lciAudGFzay1jb250YWluZXIgbGkgLmhhbmRsZSxcXG4udG8tZG8tY29udGFpbmVyIC50YXNrLWNvbnRhaW5lciAudW5jaGVja2VkLXNsb3QgLmhhbmRsZSB7XFxuICBmb250LXdlaWdodDogYm9sZGVyO1xcbiAgY29sb3I6ICM3Nzc7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4udG8tZG8tY29udGFpbmVyIHVsIGxpIC5oYW5kbGU6OmJlZm9yZSxcXG4udG8tZG8tY29udGFpbmVyIHVsIC51bmNoZWNrZWQtc2xvdCAuaGFuZGxlOjpiZWZvcmUsXFxuLnRvLWRvLWNvbnRhaW5lciAudGFzay1jb250YWluZXIgbGkgLmhhbmRsZTo6YmVmb3JlLFxcbi50by1kby1jb250YWluZXIgLnRhc2stY29udGFpbmVyIC51bmNoZWNrZWQtc2xvdCAuaGFuZGxlOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIvCfl5FcXFwiO1xcbn1cXG4udG8tZG8tY29udGFpbmVyIHVsIGxpIC5kZWxldGUtYnRuLFxcbi50by1kby1jb250YWluZXIgdWwgLnVuY2hlY2tlZC1zbG90IC5kZWxldGUtYnRuLFxcbi50by1kby1jb250YWluZXIgLnRhc2stY29udGFpbmVyIGxpIC5kZWxldGUtYnRuLFxcbi50by1kby1jb250YWluZXIgLnRhc2stY29udGFpbmVyIC51bmNoZWNrZWQtc2xvdCAuZGVsZXRlLWJ0biB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG59XFxuLnRvLWRvLWNvbnRhaW5lciB1bCBsaSAuZGVsZXRlLWJ0bjo6YmVmb3JlLFxcbi50by1kby1jb250YWluZXIgdWwgLnVuY2hlY2tlZC1zbG90IC5kZWxldGUtYnRuOjpiZWZvcmUsXFxuLnRvLWRvLWNvbnRhaW5lciAudGFzay1jb250YWluZXIgbGkgLmRlbGV0ZS1idG46OmJlZm9yZSxcXG4udG8tZG8tY29udGFpbmVyIC50YXNrLWNvbnRhaW5lciAudW5jaGVja2VkLXNsb3QgLmRlbGV0ZS1idG46OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi8J+XkVxcXCI7XFxufVxcblxcbi5jbGVhci1hbGwtYnRuIHtcXG4gIGNvbG9yOiAjODg4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmNsZWFyLWFsbC1idG46aG92ZXIge1xcbiAgY29sb3I6ICM0NDQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTdlN2U3O1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxufVxcblxcbi5oZWxsbyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMC41cmVtO1xcbiAgcGFkZGluZzogMC40cmVtO1xcbiAgY29sb3I6IHJlZDtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsZ0JBQWdCO0FBRWhCO0VBQ0UseUNBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EseUJBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQUFGO0FBRUU7RUFDRSxnQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FBQUo7O0FBSUE7RUFDRSxhQUFBO0FBREY7O0FBSUE7RUFDRSxzQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQ0FBQTtBQURGO0FBR0U7RUFDRSxhQUFBO0VBQ0Esa0NBQUE7RUFDQSxzQkFBQTtFQUNBLDZCQUFBO0FBREo7QUFHSTtFQUNFLGdCQUFBO0VBQ0Esc0JBQUE7QUFETjtBQUlJO0VBQ0UsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FBRk47QUFLSTtFQUNFLFlBQUE7QUFITjtBQU9FO0VBQ0UsYUFBQTtFQUNBLGtDQUFBO0VBQ0Esc0JBQUE7RUFDQSw2QkFBQTtBQUxKO0FBT0k7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0FBTE47QUFRSTtFQUNFLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7QUFOTjtBQVNJO0VBQ0UsV0FBQTtBQVBOO0FBVUk7RUFDRSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUFSTjtBQVdJO0VBQ0UsWUFBQTtBQVROO0FBYUU7O0VBRUUsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsVUFBQTtBQVhKO0FBYUk7Ozs7RUFFRSxhQUFBO0VBQ0EseUNBQUE7RUFDQSxTQUFBO0VBQ0Esc0JBQUE7RUFDQSw2QkFBQTtFQUNBLG1CQUFBO0FBVE47QUFXTTs7OztFQUNFLGNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUFOUjtBQVNNOzs7O0VBQ0Usc0JBQUE7RUFDQSxxQkFBQTtBQUpSO0FBT007Ozs7RUFDRSxXQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0FBRlI7QUFLTTs7OztFQUNFLFlBQUE7QUFBUjtBQUdNOzs7O0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUFFUjtBQUNNOzs7O0VBQ0UsV0FBQTtBQUlSO0FBRE07Ozs7RUFDRSxXQUFBO0VBQ0EsNkJBQUE7QUFNUjtBQUhNOzs7O0VBQ0Usb0JBQUE7QUFRUjtBQUxNOzs7O0VBQ0UsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0FBVVI7QUFQTTs7OztFQUNFLGFBQUE7QUFZUjtBQVRNOzs7O0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7QUFjUjtBQVhNOzs7O0VBQ0UsYUFBQTtBQWdCUjs7QUFWQTtFQUNFLFdBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQWFGOztBQVZBO0VBQ0UsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsMEJBQUE7QUFhRjs7QUFWQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtBQWFGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8vIHN0eWxlLnNjc3NcXG5cXG5ib2R5IHtcXG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjhmODtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuXFxuICB1bCB7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gIH1cXG59XFxuXFxuLmhpZGRlbiB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4udG8tZG8tY29udGFpbmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG4gIG1hcmdpbjogMXJlbSA0cmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBib3gtc2hhZG93OiAwLjJyZW0gMC4ycmVtIDAuOXJlbSAjYmJiO1xcblxcbiAgLnRvLWRvLWhlYWRlciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byAyLjVyZW07XFxuICAgIHBhZGRpbmc6IDAuNHJlbSAwLjRyZW07XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkO1xcblxcbiAgICAudG8tZG8taGVhZGVyLXRpdGxlIHtcXG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgICAgIHBhZGRpbmc6IDAuNHJlbSAwLjRyZW07XFxuICAgIH1cXG5cXG4gICAgLnJlZnJlc2gtYnRuIHtcXG4gICAgICBjb2xvcjogIzc3NztcXG4gICAgICBtYXJnaW46IDAuNHJlbSAxcmVtO1xcbiAgICAgIHdpZHRoOiAxcmVtO1xcbiAgICAgIGhlaWdodDogMXJlbTtcXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIH1cXG5cXG4gICAgLnJlZnJlc2gtYnRuOjpiZWZvcmUge1xcbiAgICAgIGNvbnRlbnQ6IFxcXCLih4VcXFwiO1xcbiAgICB9XFxuICB9XFxuXFxuICAuYWRkLW5ldyB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byAyLjVyZW07XFxuICAgIHBhZGRpbmc6IDAuNHJlbSAwLjRyZW07XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkO1xcblxcbiAgICBpbnB1dCB7XFxuICAgICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgICB9XFxuXFxuICAgIC5uZXctaW5wdXQge1xcbiAgICAgIHBhZGRpbmc6IDAuNHJlbSAwLjRyZW07XFxuICAgICAgb3V0bGluZTogbm9uZTtcXG4gICAgICBib3JkZXI6IG5vbmU7XFxuICAgIH1cXG5cXG4gICAgLm5ldy1pbnB1dDo6cGxhY2Vob2xkZXIge1xcbiAgICAgIGNvbG9yOiAjODg4O1xcbiAgICB9XFxuXFxuICAgIC5uZXctaW5wdXQtYnRuIHtcXG4gICAgICBjb2xvcjogIzc3NztcXG4gICAgICBtYXJnaW46IDAuNHJlbSAxcmVtO1xcbiAgICAgIHdpZHRoOiAxcmVtO1xcbiAgICAgIGhlaWdodDogMXJlbTtcXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIH1cXG5cXG4gICAgLm5ldy1pbnB1dC1idG46OmJlZm9yZSB7XFxuICAgICAgY29udGVudDogXFxcIuKGtVxcXCI7XFxuICAgIH1cXG4gIH1cXG5cXG4gIHVsLFxcbiAgLnRhc2stY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgcGFkZGluZzogMDtcXG5cXG4gICAgbGksXFxuICAgIC51bmNoZWNrZWQtc2xvdCB7XFxuICAgICAgZGlzcGxheTogZ3JpZDtcXG4gICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDIuNXJlbSBhdXRvIDIuNXJlbTtcXG4gICAgICBtYXJnaW46IDA7XFxuICAgICAgcGFkZGluZzogMC40cmVtIDAuNHJlbTtcXG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZDtcXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgICAgIC5ib3gge1xcbiAgICAgICAgbWFyZ2luOiAwLjRyZW07XFxuICAgICAgICB3aWR0aDogMXJlbTtcXG4gICAgICAgIGhlaWdodDogMXJlbTtcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICB9XFxuXFxuICAgICAgLnVuY2hlY2tlZCB7XFxuICAgICAgICBib3JkZXI6IHNvbGlkICM4ODggMnB4O1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMC4ycmVtO1xcbiAgICAgIH1cXG5cXG4gICAgICAuY2hlY2tlZCB7XFxuICAgICAgICBjb2xvcjogIzAwYztcXG4gICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDEzNWRlZyk7XFxuICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiA5MCUgOTAlO1xcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgIH1cXG5cXG4gICAgICAuY2hlY2tlZDo6YmVmb3JlIHtcXG4gICAgICAgIGNvbnRlbnQ6IFxcXCLCrFxcXCI7XFxuICAgICAgfVxcblxcbiAgICAgIC50YXNrIHtcXG4gICAgICAgIHBhZGRpbmc6IDAuMnJlbTtcXG4gICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcXG4gICAgICAgIG1hcmdpbjogMC4ycmVtO1xcbiAgICAgICAgYm9yZGVyOiBub25lO1xcbiAgICAgICAgb3V0bGluZTogbm9uZTtcXG4gICAgICB9XFxuXFxuICAgICAgLnRhc2s6OmJlZm9yZSB7XFxuICAgICAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgICB9XFxuXFxuICAgICAgLmRvbmUge1xcbiAgICAgICAgY29sb3I6ICM3Nzc7XFxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG4gICAgICB9XFxuXFxuICAgICAgLmRvbmU6OmJlZm9yZSB7XFxuICAgICAgICBjb250ZW50OiBcXFwiVGFzayBkb25lXFxcIjtcXG4gICAgICB9XFxuXFxuICAgICAgLmhhbmRsZSB7XFxuICAgICAgICBmb250LXdlaWdodDogYm9sZGVyO1xcbiAgICAgICAgY29sb3I6ICM3Nzc7XFxuICAgICAgICBtYXJnaW46IDA7XFxuICAgICAgICBwYWRkaW5nOiAwO1xcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgIH1cXG5cXG4gICAgICAuaGFuZGxlOjpiZWZvcmUge1xcbiAgICAgICAgY29udGVudDogXFxcIvCfl5FcXFwiO1xcbiAgICAgIH1cXG5cXG4gICAgICAuZGVsZXRlLWJ0biB7XFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gICAgICB9XFxuXFxuICAgICAgLmRlbGV0ZS1idG46OmJlZm9yZSB7XFxuICAgICAgICBjb250ZW50OiBcXFwi8J+XkVxcXCI7XFxuICAgICAgfVxcbiAgICB9XFxuICB9XFxufVxcblxcbi5jbGVhci1hbGwtYnRuIHtcXG4gIGNvbG9yOiAjODg4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmNsZWFyLWFsbC1idG46aG92ZXIge1xcbiAgY29sb3I6ICM0NDQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTdlN2U3O1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxufVxcblxcbi5oZWxsbyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMC41cmVtO1xcbiAgcGFkZGluZzogMC40cmVtO1xcbiAgY29sb3I6IHJlZDtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IExpYnJhcnkgZnJvbSAnLi9tb2R1bGVzL2xpYnJhcnlNb2R1bGUuanMnO1xuaW1wb3J0ICcuL3N0eWxlLnNjc3MnO1xuXG5jb25zdCBsaWJyYXJ5ID0gbmV3IExpYnJhcnkoKTtcblxubGlicmFyeS5wYWludFRvUGFnZSgpO1xubGlicmFyeS5zZXRVcEFkZExpc3RlbmVyKCk7XG5saWJyYXJ5LnNldElucHV0RmllbGRMaXN0ZW5lcnMoKTtcbmxpYnJhcnkuc2V0Q2hlY2tib3hGaWVsZExpc3RlbmVycygpO1xubGlicmFyeS5zZXRDbGVhckFsbCgpOyIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEJvb2sge1xuICB0aXRsZTtcblxuICBjb21wbGV0ZWQ7XG5cbiAgaW5kZXg7XG59IiwiaW1wb3J0IFN0clNoZWxmIGZyb20gJy4vc3RyU2hlbGZNb2R1bGUuanMnO1xuaW1wb3J0IEJvb2sgZnJvbSAnLi9ib29rTW9kdWxlLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGlicmFyeSB7XG4gIHNoZWxmID0gW107XG5cbiAgYm9va3NoZWxmO1xuXG4gIGFkZEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGQtYnRuJyk7XG5cbiAgbmV3VGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV3VGl0bGUnKTtcblxuICBmcm9udFNoZWxmID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Zyb250U2hlbGYnKTtcblxuICBjbGVhckFsbEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjbGVhci1hbGwtYnRuJyk7XG5cbiAgcmVtb3ZlQnV0dG9uO1xuXG4gIGlucHV0RmllbGQ7XG5cbiAgY2hlY2tib3hCdXR0b247XG5cbiAgY2hlY2tlZFRhc2tEZXNjcmlwdGlvbjtcblxuICBzdGF0aWMgcHVzaFRvU3RvcmFnZSA9IChvYmopID0+IHtcbiAgICBjb25zdCBzdHJpbmdpZnkgPSBKU09OLnN0cmluZ2lmeShvYmopO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdzdHJTaGVsZicsIHN0cmluZ2lmeSk7XG4gIH1cblxuICBzdGF0aWMgZGlzcGxheUJvb2sodGl0bGUsIGlkKSB7XG4gICAgcmV0dXJuIGBcbiAgICA8ZGl2IGNsYXNzPVwiYm94IHVuY2hlY2tlZFwiPjwvZGl2PlxuICAgIDxpbnB1dCBjbGFzcz1cInRhc2sgdGFza0lkJHtpZH1cIiB0eXBlPVwidGV4dFwiIHZhbHVlPVwiJHt0aXRsZX1cIiBuYW1lPVwiSXRlbTFcIj5cbiAgICA8ZGl2IGNsYXNzPVwiaGFuZGxlIHJlbW92ZUJ1dHRvblwiIGlkPVwiJHtpZH1cIiB0eXBlPVwiYnV0dG9uXCI+PC9kaXY+XG4gICAgICAgIGA7XG4gIH1cblxuICAvLyBBZGRzIGEgdW5pcXVlIGNsYXNzIHNvIGl0IGNhbiBiZSBjYWxsZWQgYnkgdGhlIGFkZGV2ZW50bGlzdGVuZXIgbGF0ZXJcbiAgc3RhdGljIGRpc3BsYXlDaGVja2VkQm9vayh0aXRsZSwgaWQpIHtcbiAgICByZXR1cm4gYFxuICAgICAgPGRpdiBjbGFzcz1cImJveCBjaGVja2VkXCI+PC9kaXY+XG4gICAgICA8aW5wdXQgY2xhc3M9XCJ0YXNrIGRvbmUgdGFza0lkJHtpZH1cIiB0eXBlPVwidGV4dFwiIHZhbHVlPVwiJHt0aXRsZX1cIiBuYW1lPVwiSXRlbTFcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJoYW5kbGUgcmVtb3ZlQnV0dG9uXCIgaWQ9XCIke2lkfVwiIHR5cGU9XCJidXR0b25cIj48L2Rpdj5cbiAgICAgICAgYDtcbiAgfVxuXG4gIHB1bGxGcm9tU3RvcmFnZSA9ICgpID0+IHtcbiAgICBpZiAoIWxvY2FsU3RvcmFnZS5nZXRJdGVtKCdzdHJTaGVsZicpKSByZXR1cm4gMDtcbiAgICBjb25zdCBwYXJzZWQgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdzdHJTaGVsZicpKTtcbiAgICBsZXQgY291bnRlciA9IDE7XG4gICAgY29uc3QgcHJlU2hlbGYgPSBbXTtcbiAgICBjb25zdCBzaGVsZlNpemUgPSBPYmplY3QudmFsdWVzKHBhcnNlZCkubGVuZ3RoO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGVsZlNpemU7IGkgKz0gMSkge1xuICAgICAgaWYgKHRoaXMuc2hlbGYubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hlbGZTaXplOyBpICs9IDEpIHtcbiAgICAgICAgICB0aGlzLnNoZWxmLnB1c2goT2JqZWN0LnZhbHVlcyhwYXJzZWQpW2ldKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgY29uc3QgcGFyc2VkQm9vayA9IHBhcnNlZFtgJHtjb3VudGVyfWBdO1xuICAgICAgbGV0IHRlbXBTaGVsZiA9IExpYnJhcnkuZGlzcGxheUJvb2socGFyc2VkQm9vay50aXRsZSwgY291bnRlcik7XG4gICAgICBpZiAocGFyc2VkQm9vay5jb21wbGV0ZWQpIHtcbiAgICAgICAgdGVtcFNoZWxmID0gTGlicmFyeS5kaXNwbGF5Q2hlY2tlZEJvb2socGFyc2VkQm9vay50aXRsZSwgY291bnRlcik7XG4gICAgICB9XG4gICAgICBwcmVTaGVsZi5wdXNoKHRlbXBTaGVsZik7XG4gICAgICBjb3VudGVyICs9IDE7XG4gICAgfVxuICAgIHJldHVybiBwcmVTaGVsZjtcbiAgfVxuXG4gIHBhaW50VG9QYWdlID0gKCkgPT4ge1xuICAgIGNvbnN0IHByZVNoZWxmID0gdGhpcy5wdWxsRnJvbVN0b3JhZ2UoKTtcbiAgICB0aGlzLmZyb250U2hlbGYuaW5uZXJIVE1MID0gJyc7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcmVTaGVsZi5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgY29uc3QgY3JlYXRlZEJvb2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIGNyZWF0ZWRCb29rLmNsYXNzTGlzdC5hZGQoJ3VuY2hlY2tlZC1zbG90JywgJ2Jvb2snKTtcbiAgICAgIGNyZWF0ZWRCb29rLmlubmVySFRNTCA9IHByZVNoZWxmW2ldO1xuICAgICAgY3JlYXRlZEJvb2suaWQgPSBpICsgMTtcbiAgICAgIHRoaXMuZnJvbnRTaGVsZi5hcHBlbmRDaGlsZChjcmVhdGVkQm9vayk7XG4gICAgfVxuICAgIHRoaXMuc2V0UmVtb3ZlTGlzdGVuZXJzKCk7XG4gIH1cblxuICB1cGRhdGVTaGVsZiA9ICgpID0+IHtcbiAgICB0aGlzLmJvb2tzaGVsZiA9IG5ldyBTdHJTaGVsZigpO1xuICAgIGxldCBjb3VudGVyID0gMDtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc2hlbGYubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGNvdW50ZXIgKz0gMTtcbiAgICAgIHRoaXMuc2hlbGZbaV0uaWQgPSBjb3VudGVyO1xuICAgIH1cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc2hlbGYubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIHRoaXMuYm9va3NoZWxmW2Ake3RoaXMuc2hlbGZbaV0uaWR9YF0gPSB0aGlzLnNoZWxmW2ldO1xuICAgIH1cbiAgICBMaWJyYXJ5LnB1c2hUb1N0b3JhZ2UodGhpcy5ib29rc2hlbGYpO1xuICB9XG5cbiAgbmV3Qm9vayA9ICh0aXRsZSkgPT4ge1xuICAgIHRoaXMuYm9va3NoZWxmID0gbmV3IFN0clNoZWxmKCk7XG4gICAgY29uc3QgYm9vayA9IG5ldyBCb29rKCk7XG4gICAgYm9vay50aXRsZSA9IHRpdGxlO1xuICAgIGJvb2suY29tcGxldGVkID0gZmFsc2U7XG4gICAgdGhpcy5zaGVsZi5wdXNoKGJvb2spO1xuICAgIHRoaXMudXBkYXRlU2hlbGYoKTtcbiAgICB0aGlzLnBhaW50VG9QYWdlKCk7XG4gICAgdGhpcy5zZXRJbnB1dEZpZWxkTGlzdGVuZXJzKCk7XG4gICAgdGhpcy5zZXRDaGVja2JveEZpZWxkTGlzdGVuZXJzKCk7XG4gIH1cblxuICByZW1vdmVCb29rID0gKGlkKSA9PiB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnNoZWxmLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBpZiAodGhpcy5zaGVsZltpXS5pZCA9PT0gcGFyc2VJbnQoaWQsIDEwKSkge1xuICAgICAgICB0aGlzLnNoZWxmLnNwbGljZShpLCAxKTtcbiAgICAgICAgdGhpcy51cGRhdGVTaGVsZigpO1xuICAgICAgfVxuICAgICAgdGhpcy5wYWludFRvUGFnZSgpO1xuICAgICAgdGhpcy5zZXRDaGVja2JveEZpZWxkTGlzdGVuZXJzKCk7XG4gICAgfVxuICB9XG5cbiAgdXBkYXRlVGFzayA9IChpZCwgdGV4dCkgPT4ge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zaGVsZi5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgaWYgKHRoaXMuc2hlbGZbaV0uaWQgPT09IHBhcnNlSW50KGlkLCAxMCkpIHtcbiAgICAgICAgdGhpcy5zaGVsZltpXS50aXRsZSA9IHRleHQ7XG4gICAgICAgIHRoaXMudXBkYXRlU2hlbGYoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICB1cGRhdGVDb21wbGV0aW9uID0gKGlkLCBjb21wbGV0ZWQpID0+IHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc2hlbGYubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGlmICh0aGlzLnNoZWxmW2ldLmlkID09PSBwYXJzZUludChpZCwgMTApKSB7XG4gICAgICAgIHRoaXMuc2hlbGZbaV0uY29tcGxldGVkID0gY29tcGxldGVkO1xuICAgICAgICB0aGlzLnVwZGF0ZVNoZWxmKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgc2hvd1VuY2hlY2tlZCA9ICgpID0+IHtcbiAgICBjb25zdCBwZW5kaW5nVGFza3MgPSB0aGlzLnNoZWxmLmZpbHRlcigodGFzaykgPT4gdGFzay5jb21wbGV0ZWQgPT09IGZhbHNlKTtcbiAgICB0aGlzLnNoZWxmID0gW107XG4gICAgcGVuZGluZ1Rhc2tzLmZvckVhY2goKHRhc2spID0+IHtcbiAgICAgIHRoaXMuc2hlbGYucHVzaCh0YXNrKTtcbiAgICB9KTtcbiAgICB0aGlzLnVwZGF0ZVNoZWxmKCk7XG4gICAgdGhpcy5wYWludFRvUGFnZSgpO1xuICAgIHRoaXMuc2V0SW5wdXRGaWVsZExpc3RlbmVycygpO1xuICAgIHRoaXMuc2V0Q2hlY2tib3hGaWVsZExpc3RlbmVycygpO1xuICB9XG5cbiAgc2V0UmVtb3ZlTGlzdGVuZXJzID0gKCkgPT4ge1xuICAgIHRoaXMucmVtb3ZlQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnJlbW92ZUJ1dHRvbicpO1xuICAgIHRoaXMucmVtb3ZlQnV0dG9uLmZvckVhY2goKGJ1dHRvbikgPT4ge1xuICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgdGhpcy5yZW1vdmVCb29rKGUudGFyZ2V0LmlkKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgc2V0VXBBZGRMaXN0ZW5lciA9ICgpID0+IHtcbiAgICB0aGlzLmFkZEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIHRoaXMubmV3Qm9vayh0aGlzLm5ld1RpdGxlLnZhbHVlKTtcbiAgICAgIHRoaXMucHVsbEZyb21TdG9yYWdlKCk7XG4gICAgICB0aGlzLm5ld1RpdGxlLnZhbHVlID0gJyc7XG4gICAgfSk7XG4gIH1cblxuICBzZXRJbnB1dEZpZWxkTGlzdGVuZXJzID0gKCkgPT4ge1xuICAgIHRoaXMuaW5wdXRGaWVsZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50YXNrJyk7XG4gICAgdGhpcy5pbnB1dEZpZWxkLmZvckVhY2goKGlucHV0KSA9PiB7XG4gICAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIChlKSA9PiB7XG4gICAgICAgIGNvbnN0IHRleHQgPSBlLnRhcmdldC52YWx1ZTtcbiAgICAgICAgdGhpcy51cGRhdGVUYXNrKGUudGFyZ2V0LnBhcmVudEVsZW1lbnQuaWQsIHRleHQpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBzZXRDaGVja2JveEZpZWxkTGlzdGVuZXJzID0gKCkgPT4ge1xuICAgIHRoaXMuY2hlY2tib3hCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYm94Jyk7XG4gICAgdGhpcy5jaGVja2JveEJ1dHRvbi5mb3JFYWNoKChjaGVja2JveCkgPT4ge1xuICAgICAgY2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBsZXQgdGFza0NoZWNrZWQgPSBmYWxzZTtcbiAgICAgICAgY29uc3QgY3Jvc3NUYXNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnRhc2tJZCR7ZS50YXJnZXQucGFyZW50RWxlbWVudC5pZH1gKTtcbiAgICAgICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygndW5jaGVja2VkJykpIHtcbiAgICAgICAgICB0YXNrQ2hlY2tlZCA9IHRydWU7XG4gICAgICAgICAgY3Jvc3NUYXNrLmNsYXNzTGlzdC5hZGQoJ2RvbmUnKTtcbiAgICAgICAgICBlLnRhcmdldC5jbGFzc0xpc3QudG9nZ2xlKCdjaGVja2VkJyk7XG4gICAgICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LnRvZ2dsZSgndW5jaGVja2VkJyk7XG4gICAgICAgIH0gZWxzZSBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdjaGVja2VkJykpIHtcbiAgICAgICAgICB0YXNrQ2hlY2tlZCA9IGZhbHNlO1xuICAgICAgICAgIGNyb3NzVGFzay5jbGFzc0xpc3QucmVtb3ZlKCdkb25lJyk7XG4gICAgICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LnRvZ2dsZSgnY2hlY2tlZCcpO1xuICAgICAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC50b2dnbGUoJ3VuY2hlY2tlZCcpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudXBkYXRlQ29tcGxldGlvbihlLnRhcmdldC5wYXJlbnRFbGVtZW50LmlkLCB0YXNrQ2hlY2tlZCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIC8vIFNldHMgdGhlIGxpc3RlbmVyIGZvciB0aGUgY2xlYXIgYnV0dG9uXG5cbiAgc2V0Q2xlYXJBbGwgPSAoKSA9PiB7XG4gICAgdGhpcy5jbGVhckFsbEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIHRoaXMuc2hvd1VuY2hlY2tlZCgpO1xuICAgIH0pO1xuICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RyU2hlbGYge1xufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==