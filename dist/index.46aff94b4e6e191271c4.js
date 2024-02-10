/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/calc.js":
/*!*****************************!*\
  !*** ./src/modules/calc.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   mult: () => (/* binding */ mult),
/* harmony export */   sum: () => (/* binding */ sum)
/* harmony export */ });
const mult = (a, b) => a * b;
const sum = (a, b) => a + b;

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/index.css":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/index.css ***!
  \***********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_fonts_Montserrat_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!../fonts/Montserrat.css */ "./node_modules/css-loader/dist/cjs.js!./src/fonts/Montserrat.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_fonts_MontserratBold_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!../fonts/MontserratBold.css */ "./node_modules/css-loader/dist/cjs.js!./src/fonts/MontserratBold.css");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_4__);
// Imports





var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../img/image.png */ "./src/img/image.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_fonts_Montserrat_css__WEBPACK_IMPORTED_MODULE_2__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_fonts_MontserratBold_css__WEBPACK_IMPORTED_MODULE_3__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_4___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}

/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, menu, nav, section {
  display: block;
}

body {
  line-height: 1;
}

ol, ul {
  list-style: none;
}

blockquote, q {
  quotes: none;
}

blockquote:before, blockquote:after,
q:before, q:after {
  content: "";
  content: none;
}

table {
  border-collapse: collapse;
  border-spacing: 0;
}

body {
  font-family: "Montserrat", Arial, sans-serif;
  box-sizing: border-box;
  width: 100%;
}

div {
  box-sizing: border-box;
}

.image {
  width: 300px;
  height: 300px;
  background-size: cover;
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
}

.pugg {
  background-color: green;
}

.but {
  width: 100px;
  height: 30px;
  background-color: red;
  margin-left: 50px;
}

.but-color {
  color: white;
}

.uiColorsTypeContainer {
  position: relative;
  display: flex;
  justify-content: flex-start;
  max-width: 1440px;
  margin: 0 auto;
  padding-left: 10.6%;
  padding-top: 145px;
  margin-bottom: 1000px;
}

.uiColorsTypeContainer .columnLeft, .uiColorsTypeContainer .columnRight {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.uiColorsTypeContainer .columnLeft {
  width: 280px;
  margin-right: 415px;
}

.uiColorsTypeContainer .columnRight {
  display: flex;
}

.uiColorsType__logo {
  position: absolute;
  z-index: 500;
  width: 48px;
  height: 48px;
  left: 30px;
  top: 30px;
}

.uiFormElementsContainer {
  display: flex;
  padding-left: 140px;
  padding-top: 140px;
}

.uiFormElementsContainer .columnLeft {
  display: block;
  margin-right: 126px;
}

.mb5 {
  width: 320px;
  height: 5px;
}

.mb20 {
  width: 320px;
  height: 20px;
}

/*.ui-color-wrap {
    display: flex;
    justify-content: space-between;
}*/
.ui-color-block-wrap {
  display: flex;
  justify-content: start;
}

.ui-color-block-mb {
  margin-bottom: 20px;
}

.ui-color-square {
  width: 70px;
  height: 70px;
  margin-right: 40px;
  border-radius: 6px;
}

.Primary-Color {
  background-color: #BC9CFF;
}

.Secondary-color {
  background-color: #6FCF97;
}

.Dark-color {
  background-color: #1F2041;
}

.Dark-color75 {
  background-color: #1F2041;
  opacity: 0.75;
}

.Dark-color50 {
  background-color: #1F2041;
  opacity: 0.5;
}

.Dark-color25 {
  background-color: #1F2041;
  opacity: 0.25;
}

.Dark-color5 {
  background-color: #1F2041;
  opacity: 0.05;
}

.ui-colot-text {
  width: 170px;
}

.uiColorBlock-textName-style, .uiColorBlock-textValue-style {
  width: 180px;
  font-size: 19px;
  line-height: 38px;
  color: #1F2041;
  font-family: "MontserratBold", Arial, sans-serif;
}

.uiColorBlock-textValue-style {
  line-height: 20px;
  font-family: "Montserrat", Arial, sans-serif;
}

.ui-text-block-wrap {
  display: flex;
  justify-content: space-between;
  width: 430px;
}

.ui-text-block-mb {
  height: auto;
  margin-bottom: 50px;
}

.ui-text__tag_wrap {
  width: 37px;
  margin-right: 30px;
}

.ui-text__text_wrap {
  width: 370px;
}

/*Style for tags*/
.ui-text__tagh1_style, .ui-text__tagh2_style, .ui-text__tagh3_style, .ui-text__taghBody_style {
  color: #1F2041;
  opacity: 0.25;
  width: 37px;
  text-align: right;
}

.ui-text__tagh1_style {
  line-height: 29px;
  font-size: 24px;
  text-transform: uppercase;
}

.ui-text__tagh2_style {
  line-height: 23px;
  font-size: 19px;
  text-transform: uppercase;
}

.ui-text__tagh3_style {
  text-transform: uppercase;
  line-height: 14px;
  font-size: 12px;
}

.ui-text__taghBody_style {
  line-height: 24px;
  font-size: 14px;
}

/*Style for text*/
.ui-text__tagh1text_style, .ui-text__tagh2text_style, .ui-text__tagh3text_style, .ui-text__taghBodytext_style {
  color: #1F2041;
}

.ui-text__tagh1text_style {
  font-family: "MontserratBold", Arial, sans-serif;
  line-height: 29px;
  font-size: 24px;
}

.ui-text__tagh2text_style {
  font-family: "MontserratBold", Arial, sans-serif;
  line-height: 23px;
  font-size: 19px;
}

.ui-text__tagh3text_style {
  font-family: "MontserratBold", Arial, sans-serif;
  text-transform: uppercase;
  line-height: 18px;
  font-size: 12px;
}

.ui-text__taghBodytext_style {
  line-height: 23px;
  font-size: 14px;
  opacity: 0.75;
}

.logoStyles {
  position: absolute;
  z-index: 500;
  width: 48px;
  height: 48px;
  left: 30px;
  top: 30px;
}

.textField {
  box-sizing: border-box;
  width: 320px;
  height: 44px;
  padding-left: 15px;
  border: 1px solid rgba(31, 32, 65, 0.25);
  border-radius: 4px;
  outline: none;
}

::placeholder {
  font-size: 14px;
  color: #1F2041;
  opacity: 0.25;
}

.textField:hover::-webkit-input-placeholder {
  color: #1F2041;
  opacity: 0.5;
}

.textField:focus::-webkit-input-placeholder {
  color: #1F2041;
  opacity: 0.5;
}

.textField:hover {
  border: 1px solid rgba(31, 32, 65, 0.5);
  outline: none;
}

.textField:focus {
  border: 1px solid rgba(31, 32, 65, 0.5);
  background-color: white;
  outline: none;
}

.inputDropdownTitleWrap {
  display: flex;
  justify-content: space-between;
}

.inputDropdownTitle, .inputDropdownTitleDefault {
  width: auto;
}

.inputDropdownTitle p, .inputDropdownTitleDefault p {
  color: #1F2041;
  font-size: 12px;
  line-height: 14px;
  text-transform: uppercase;
}

.inputDropdownTitleDefault p {
  opacity: 0.5;
}

.width320 {
  width: 320px;
}

.dropdownSum__Wrap {
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  width: 320px;
  height: 44px;
  padding-left: 15px;
  padding-right: 10px;
  border: 1px solid rgba(31, 32, 65, 0.25);
  border-radius: 4px;
}

.borderRadiusBottomNone {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
}

.dropdownSum_Text {
  color: #1F2041;
  opacity: 0.75;
  font-size: 14px;
  line-height: 24px;
}

.dropdownSum_Btn {
  border: none;
  background-color: white;
}

.dropdownSum_Context {
  width: 320px;
  padding: 7px 7px 20px 15px;
  border: 1px solid rgba(31, 32, 65, 0.25);
  border-top: none;
  border-radius: 4px;
  border-top-right-radius: 0px;
  border-top-left-radius: 0px;
}

.displayNone {
  display: none;
}

.RedVVV {
  background-color: red;
}

.dropdownSum_ContexWrap {
  display: flex;
  align-items: center;
  height: 30px;
  margin-bottom: 7px;
}

.dropdownSum_ContexWrap .title {
  width: 206px;
  color: #1F2041;
  font-size: 12px;
  text-transform: uppercase;
}

.dropdownSum_ContexWrap .BtnMinus, .dropdownSum_ContexWrap .BtnPlus {
  text-align: center;
  padding-top: 5px;
  width: 30px;
  height: 30px;
  border: 1px solid rgba(31, 32, 65, 0.25);
  border-radius: 50%;
}

.dropdownSum_ContexWrap .Result {
  margin-right: 8px;
  font-size: 12px;
  color: #1F2041;
  text-transform: uppercase;
}

.dropdownSum_ContexWrap .BtnMinus {
  margin-right: 8px;
}

.dropdownSum_ContextWrap__mb0 {
  margin-bottom: 0px;
}

.dropdownSum_Btn__Wrap {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}

.dropdownSum_Btn__Wrap button {
  padding: 0;
  color: #BC9CFF;
  text-transform: uppercase;
  font-size: 15px;
  background-color: white;
  border: none;
}

.dropdownSum_BtnClear__opasity0 {
  opacity: 0;
}

`, "",{"version":3,"sources":["webpack://./src/styles/index.css"],"names":[],"mappings":"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","sourcesContent":["@import '../fonts/Montserrat.css';\n@import '../fonts/MontserratBold.css';\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, menu, nav, section {\n  display: block;\n}\n\nbody {\n  line-height: 1;\n}\n\nol, ul {\n  list-style: none;\n}\n\nblockquote, q {\n  quotes: none;\n}\n\nblockquote:before, blockquote:after,\nq:before, q:after {\n  content: \"\";\n  content: none;\n}\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\nbody {\n  font-family: \"Montserrat\", Arial, sans-serif;\n  box-sizing: border-box;\n  width: 100%;\n}\n\ndiv {\n  box-sizing: border-box;\n}\n\n.image {\n  width: 300px;\n  height: 300px;\n  background-size: cover;\n  background-image: url(\"../img/image.png\");\n}\n\n.pugg {\n  background-color: green;\n}\n\n.but {\n  width: 100px;\n  height: 30px;\n  background-color: red;\n  margin-left: 50px;\n}\n\n.but-color {\n  color: white;\n}\n\n.uiColorsTypeContainer {\n  position: relative;\n  display: flex;\n  justify-content: flex-start;\n  max-width: 1440px;\n  margin: 0 auto;\n  padding-left: 10.6%;\n  padding-top: 145px;\n  margin-bottom: 1000px;\n}\n.uiColorsTypeContainer .columnLeft, .uiColorsTypeContainer .columnRight {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n.uiColorsTypeContainer .columnLeft {\n  width: 280px;\n  margin-right: 415px;\n}\n.uiColorsTypeContainer .columnRight {\n  display: flex;\n}\n\n.uiColorsType__logo {\n  position: absolute;\n  z-index: 500;\n  width: 48px;\n  height: 48px;\n  left: 30px;\n  top: 30px;\n}\n\n.uiFormElementsContainer {\n  display: flex;\n  padding-left: 140px;\n  padding-top: 140px;\n}\n.uiFormElementsContainer .columnLeft {\n  display: block;\n  margin-right: 126px;\n}\n\n.mb5 {\n  width: 320px;\n  height: 5px;\n}\n\n.mb20 {\n  width: 320px;\n  height: 20px;\n}\n\n/*.ui-color-wrap {\n    display: flex;\n    justify-content: space-between;\n}*/\n.ui-color-block-wrap {\n  display: flex;\n  justify-content: start;\n}\n\n.ui-color-block-mb {\n  margin-bottom: 20px;\n}\n\n.ui-color-square {\n  width: 70px;\n  height: 70px;\n  margin-right: 40px;\n  border-radius: 6px;\n}\n\n.Primary-Color {\n  background-color: #BC9CFF;\n}\n\n.Secondary-color {\n  background-color: #6FCF97;\n}\n\n.Dark-color {\n  background-color: #1F2041;\n}\n\n.Dark-color75 {\n  background-color: #1F2041;\n  opacity: 0.75;\n}\n\n.Dark-color50 {\n  background-color: #1F2041;\n  opacity: 0.5;\n}\n\n.Dark-color25 {\n  background-color: #1F2041;\n  opacity: 0.25;\n}\n\n.Dark-color5 {\n  background-color: #1F2041;\n  opacity: 0.05;\n}\n\n.ui-colot-text {\n  width: 170px;\n}\n\n.uiColorBlock-textName-style, .uiColorBlock-textValue-style {\n  width: 180px;\n  font-size: 19px;\n  line-height: 38px;\n  color: #1F2041;\n  font-family: \"MontserratBold\", Arial, sans-serif;\n}\n\n.uiColorBlock-textValue-style {\n  line-height: 20px;\n  font-family: \"Montserrat\", Arial, sans-serif;\n}\n\n.ui-text-block-wrap {\n  display: flex;\n  justify-content: space-between;\n  width: 430px;\n}\n\n.ui-text-block-mb {\n  height: auto;\n  margin-bottom: 50px;\n}\n\n.ui-text__tag_wrap {\n  width: 37px;\n  margin-right: 30px;\n}\n\n.ui-text__text_wrap {\n  width: 370px;\n}\n\n/*Style for tags*/\n.ui-text__tagh1_style, .ui-text__tagh2_style, .ui-text__tagh3_style, .ui-text__taghBody_style {\n  color: #1F2041;\n  opacity: 0.25;\n  width: 37px;\n  text-align: right;\n}\n\n.ui-text__tagh1_style {\n  line-height: 29px;\n  font-size: 24px;\n  text-transform: uppercase;\n}\n\n.ui-text__tagh2_style {\n  line-height: 23px;\n  font-size: 19px;\n  text-transform: uppercase;\n}\n\n.ui-text__tagh3_style {\n  text-transform: uppercase;\n  line-height: 14px;\n  font-size: 12px;\n}\n\n.ui-text__taghBody_style {\n  line-height: 24px;\n  font-size: 14px;\n}\n\n/*Style for text*/\n.ui-text__tagh1text_style, .ui-text__tagh2text_style, .ui-text__tagh3text_style, .ui-text__taghBodytext_style {\n  color: #1F2041;\n}\n\n.ui-text__tagh1text_style {\n  font-family: \"MontserratBold\", Arial, sans-serif;\n  line-height: 29px;\n  font-size: 24px;\n}\n\n.ui-text__tagh2text_style {\n  font-family: \"MontserratBold\", Arial, sans-serif;\n  line-height: 23px;\n  font-size: 19px;\n}\n\n.ui-text__tagh3text_style {\n  font-family: \"MontserratBold\", Arial, sans-serif;\n  text-transform: uppercase;\n  line-height: 18px;\n  font-size: 12px;\n}\n\n.ui-text__taghBodytext_style {\n  line-height: 23px;\n  font-size: 14px;\n  opacity: 0.75;\n}\n\n.logoStyles {\n  position: absolute;\n  z-index: 500;\n  width: 48px;\n  height: 48px;\n  left: 30px;\n  top: 30px;\n}\n\n.textField {\n  box-sizing: border-box;\n  width: 320px;\n  height: 44px;\n  padding-left: 15px;\n  border: 1px solid rgba(31, 32, 65, 0.25);\n  border-radius: 4px;\n  outline: none;\n}\n\n::placeholder {\n  font-size: 14px;\n  color: #1F2041;\n  opacity: 0.25;\n}\n\n.textField:hover::-webkit-input-placeholder {\n  color: #1F2041;\n  opacity: 0.5;\n}\n\n.textField:focus::-webkit-input-placeholder {\n  color: #1F2041;\n  opacity: 0.5;\n}\n\n.textField:hover {\n  border: 1px solid rgba(31, 32, 65, 0.5);\n  outline: none;\n}\n\n.textField:focus {\n  border: 1px solid rgba(31, 32, 65, 0.5);\n  background-color: white;\n  outline: none;\n}\n\n.inputDropdownTitleWrap {\n  display: flex;\n  justify-content: space-between;\n}\n\n.inputDropdownTitle, .inputDropdownTitleDefault {\n  width: auto;\n}\n.inputDropdownTitle p, .inputDropdownTitleDefault p {\n  color: #1F2041;\n  font-size: 12px;\n  line-height: 14px;\n  text-transform: uppercase;\n}\n\n.inputDropdownTitleDefault p {\n  opacity: 0.5;\n}\n\n.width320 {\n  width: 320px;\n}\n\n.dropdownSum__Wrap {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  box-sizing: border-box;\n  width: 320px;\n  height: 44px;\n  padding-left: 15px;\n  padding-right: 10px;\n  border: 1px solid rgba(31, 32, 65, 0.25);\n  border-radius: 4px;\n}\n\n.borderRadiusBottomNone {\n  border-bottom-left-radius: 0px;\n  border-bottom-right-radius: 0px;\n}\n\n.dropdownSum_Text {\n  color: #1F2041;\n  opacity: 0.75;\n  font-size: 14px;\n  line-height: 24px;\n}\n\n.dropdownSum_Btn {\n  border: none;\n  background-color: white;\n}\n\n.dropdownSum_Context {\n  width: 320px;\n  padding: 7px 7px 20px 15px;\n  border: 1px solid rgba(31, 32, 65, 0.25);\n  border-top: none;\n  border-radius: 4px;\n  border-top-right-radius: 0px;\n  border-top-left-radius: 0px;\n}\n\n.displayNone {\n  display: none;\n}\n\n.RedVVV {\n  background-color: red;\n}\n\n.dropdownSum_ContexWrap {\n  display: flex;\n  align-items: center;\n  height: 30px;\n  margin-bottom: 7px;\n}\n.dropdownSum_ContexWrap .title {\n  width: 206px;\n  color: #1F2041;\n  font-size: 12px;\n  text-transform: uppercase;\n}\n.dropdownSum_ContexWrap .BtnMinus, .dropdownSum_ContexWrap .BtnPlus {\n  text-align: center;\n  padding-top: 5px;\n  width: 30px;\n  height: 30px;\n  border: 1px solid rgba(31, 32, 65, 0.25);\n  border-radius: 50%;\n}\n.dropdownSum_ContexWrap .Result {\n  margin-right: 8px;\n  font-size: 12px;\n  color: #1F2041;\n  text-transform: uppercase;\n}\n.dropdownSum_ContexWrap .BtnMinus {\n  margin-right: 8px;\n}\n\n.dropdownSum_ContextWrap__mb0 {\n  margin-bottom: 0px;\n}\n\n.dropdownSum_Btn__Wrap {\n  display: flex;\n  justify-content: space-between;\n  margin-top: 20px;\n}\n.dropdownSum_Btn__Wrap button {\n  padding: 0;\n  color: #BC9CFF;\n  text-transform: uppercase;\n  font-size: 15px;\n  background-color: white;\n  border: none;\n}\n\n.dropdownSum_BtnClear__opasity0 {\n  opacity: 0;\n}\n\n/*# sourceMappingURL=index.css.map */\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/fonts/Montserrat.css":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/fonts/Montserrat.css ***!
  \************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! MontserratRegular.ttf */ "./src/fonts/MontserratRegular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* Generated by Fontie <http://fontie.pixelsvsbytes.com> */

@font-face {
    font-family:'Montserrat';
    src: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) format('truetype');
    font-style: normal;
    font-stretch: normal;
    unicode-range: U+0020-2044;
}`, "",{"version":3,"sources":["webpack://./src/fonts/Montserrat.css"],"names":[],"mappings":"AAAA,0DAA0D;;AAE1D;IACI,wBAAwB;IACxB,+DAAoD;IACpD,kBAAkB;IAClB,oBAAoB;IACpB,0BAA0B;AAC9B","sourcesContent":["/* Generated by Fontie <http://fontie.pixelsvsbytes.com> */\n\n@font-face {\n    font-family:'Montserrat';\n    src: url('MontserratRegular.ttf') format('truetype');\n    font-style: normal;\n    font-stretch: normal;\n    unicode-range: U+0020-2044;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/fonts/MontserratBold.css":
/*!****************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/fonts/MontserratBold.css ***!
  \****************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! MontserratBold.woff2 */ "./src/fonts/MontserratBold.woff2"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* Generated by Fontie <http://fontie.pixelsvsbytes.com> */

@font-face {
    font-family:'MontserratBold';
	src: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) format('woff2');
    font-weight: 700;
    font-style: normal;
    font-stretch: normal;
    unicode-range: U+0020-2044;
}`, "",{"version":3,"sources":["webpack://./src/fonts/MontserratBold.css"],"names":[],"mappings":"AAAA,0DAA0D;;AAE1D;IACI,4BAA4B;CAC/B,4DAAgD;IAC7C,gBAAgB;IAChB,kBAAkB;IAClB,oBAAoB;IACpB,0BAA0B;AAC9B","sourcesContent":["/* Generated by Fontie <http://fontie.pixelsvsbytes.com> */\n\n@font-face {\n    font-family:'MontserratBold';\n\tsrc: url('MontserratBold.woff2') format('woff2');\n    font-weight: 700;\n    font-style: normal;\n    font-stretch: normal;\n    unicode-range: U+0020-2044;\n}"],"sourceRoot":""}]);
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

/***/ "./src/styles/index.css":
/*!******************************!*\
  !*** ./src/styles/index.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./index.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/index.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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

/***/ "./src/fonts/MontserratBold.woff2":
/*!****************************************!*\
  !*** ./src/fonts/MontserratBold.woff2 ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/MontserratBold.woff2";

/***/ }),

/***/ "./src/fonts/MontserratRegular.ttf":
/*!*****************************************!*\
  !*** ./src/fonts/MontserratRegular.ttf ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/MontserratRegular.ttf";

/***/ }),

/***/ "./src/img/image.png":
/*!***************************!*\
  !*** ./src/img/image.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/image.png";

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
/* harmony import */ var _styles_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/index.css */ "./src/styles/index.css");
/* harmony import */ var _modules_calc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/calc */ "./src/modules/calc.js");



console.log((0,_modules_calc__WEBPACK_IMPORTED_MODULE_1__.mult)(2, 10));
console.log((0,_modules_calc__WEBPACK_IMPORTED_MODULE_1__.sum)(3, 4));
const button = document.getElementById('dropdownSumBtn');
const showDropdownSumContext = function () {
  dropdownSumContextId.classList.toggle("displayNone");
  dropdownSumWrapId.classList.toggle("borderRadiusBottomNone");
};
button.addEventListener('click', showDropdownSumContext);

//Plus and minus Adults
let countAdults = 0;
const BtnMinusAdults = document.getElementById('BtnMinusAdults');
const BtnPlusAdults = document.getElementById('BtnPlusAdults');
const ResultAdults = document.getElementById('ResultAdults');
const BtnMinusAdultsClick = function () {
  countAdults--;
  if (countAdults < 0) {
    countAdults = 0;
  }
  ResultAdults.innerHTML = countAdults;
};
const BtnPlusAdultsClick = function () {
  countAdults++;
  ResultAdults.innerHTML = countAdults;
};
BtnMinusAdults.addEventListener('click', BtnMinusAdultsClick);
BtnPlusAdults.addEventListener('click', BtnPlusAdultsClick);

//Plus and minus Children
let countChildren = 0;
const BtnMinusChildren = document.getElementById('BtnMinusChildren');
const ResultChildren = document.getElementById('ResultChildren');
const BtnPlusChildren = document.getElementById('BtnPlusChildren');
const BtnMinushCildrenClick = function () {
  countChildren--;
  if (countChildren < 0) {
    countChildren = 0;
  }
  ResultChildren.innerHTML = countChildren;
};
const BtnPlushCildrenClick = function () {
  countChildren++;
  ResultChildren.innerHTML = countChildren;
};
BtnMinusChildren.addEventListener('click', BtnMinushCildrenClick);
BtnPlusChildren.addEventListener('click', BtnPlushCildrenClick);

//Plus and minus Babies
let countBabies = 0;
const BtnMinusBabies = document.getElementById('BtnMinusBabies');
const ResultBabies = document.getElementById('ResultBabies');
const BtnPlusBabies = document.getElementById('BtnPlusBabies');
const BtnMinushBabiesClick = function () {
  countBabies--;
  if (countBabies < 0) {
    countBabies = 0;
  }
  ResultBabies.innerHTML = countBabies;
};
const BtnPlushBabiesClick = function () {
  countBabies++;
  if (countBabies < 0) {
    countBabies = 0;
  }
  ResultBabies.innerHTML = countBabies;
};
BtnMinusBabies.addEventListener('click', BtnMinushBabiesClick);
BtnPlusBabies.addEventListener('click', BtnPlushBabiesClick);

//Button #dropdownSum_BtnApplay
const dropdownSum_BtnApplay = document.getElementById('dropdownSum_BtnApplay');
const dropdownSum_Text = document.getElementById('dropdownSum_Text');
const dropdownSum_BtnApplayClick = function () {
  let result = countAdults + countChildren + countBabies;
  dropdownSum_Text.innerHTML = 'гостей' + '' + result;
  dropdownSum_BtnClear.classList.remove('dropdownSum_BtnClear__opasity0');
};
dropdownSum_BtnApplay.addEventListener('click', dropdownSum_BtnApplayClick);

//Button dropdownSum_BtnClear
const dropdownSum_BtnClear = document.getElementById('dropdownSum_BtnClear');
const dropdownSum_BtnClearClick = function () {
  countAdults = 0;
  countChildren = 0;
  countBabies = 0;
  ResultAdults.innerHTML = countAdults;
  ResultChildren.innerHTML = countChildren;
  ResultBabies.innerHTML = countBabies;
  dropdownSum_Text.innerHTML = 'сколько гостей';
};
dropdownSum_BtnClear.addEventListener('click', dropdownSum_BtnClearClick);
})();

/******/ })()
;
//# sourceMappingURL=index.46aff94b4e6e191271c4.js.map