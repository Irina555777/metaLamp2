/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/block/libs/card/card.js":
/*!*************************************!*\
  !*** ./src/block/libs/card/card.js ***!
  \*************************************/
/***/ (() => {

//Carousel

const carouselFunction = function (carouselBtnContainer, cardCarousel) {
  document.getElementById(carouselBtnContainer).addEventListener('click', e => {
    const carouselBtn = document.getElementById(carouselBtnContainer).getElementsByClassName('carousel_btn');
    const carouselItem = document.getElementById(cardCarousel).getElementsByClassName('carousel_item');
    //const carouselItem = document.getElementsByClassName('carousel_item');
    let i = 0;
    let carouselItemlength = carouselItem.length;
    let iii = e.target.dataset.itemid;
    if (iii == 1) {
      for (i = 0; i < carouselItemlength; i++) {
        carouselItem[i].classList.add('displayNone');
        carouselItem[i].classList.remove('displayBlock');
        carouselBtn[i].classList.remove('carousel_btn__active');
      }
      carouselItem[0].classList.remove('displayNone');
      carouselItem[0].classList.add('displayBlock');
      carouselBtn[0].classList.add('carousel_btn__active');
    }
    if (iii == 2) {
      for (i = 0; i < carouselItemlength; i++) {
        carouselItem[i].classList.add('displayNone');
        carouselItem[i].classList.remove('displayBlock');
        carouselBtn[i].classList.remove('carousel_btn__active');
      }
      carouselItem[1].classList.remove('displayNone');
      carouselItem[1].classList.add('displayBlock');
      carouselBtn[1].classList.add('carousel_btn__active');
    }
    if (iii == 3) {
      for (i = 0; i < carouselItemlength; i++) {
        carouselItem[i].classList.add('displayNone');
        carouselItem[i].classList.remove('displayBlock');
        carouselBtn[i].classList.remove('carousel_btn__active');
      }
      carouselItem[2].classList.remove('displayNone');
      carouselItem[2].classList.add('displayBlock');
      carouselBtn[2].classList.add('carousel_btn__active');
    }
    if (iii == 4) {
      for (i = 0; i < carouselItemlength; i++) {
        carouselItem[i].classList.add('displayNone');
        carouselItem[i].classList.remove('displayBlock');
        carouselBtn[i].classList.remove('carousel_btn__active');
      }
      carouselItem[3].classList.remove('displayNone');
      carouselItem[3].classList.add('displayBlock');
      carouselBtn[3].classList.add('carousel_btn__active');
    }
  });
};
carouselFunction('carousel_btn__container', 'card_carousel');
carouselFunction('carousel_btn__container1', 'card_carousel1');
/*document.getElementById('carousel_btn__container').addEventListener('click', (e)=>{
    const carouselBtn = document.getElementById('carousel_btn__container').getElementsByClassName('carousel_btn');
    const carouselItem = document.getElementById('card_carousel').getElementsByClassName('carousel_item');
    //const carouselItem = document.getElementsByClassName('carousel_item');
    let i = 0;
    let carouselItemlength = carouselItem.length;
    let iii = e.target.dataset.itemid;
    if (iii == 1){
        for (i = 0; i < carouselItemlength; i++){
            carouselItem[i].classList.add('displayNone');
            carouselItem[i].classList.remove('displayBlock');
            carouselBtn[i].classList.remove('carousel_btn__active');
        }
        carouselItem[0].classList.remove('displayNone');
        carouselItem[0].classList.add('displayBlock');
        carouselBtn[0].classList.add('carousel_btn__active');
    }
    if (iii == 2){
        for (i = 0; i < carouselItemlength; i++){
            carouselItem[i].classList.add('displayNone');
            carouselItem[i].classList.remove('displayBlock');
            carouselBtn[i].classList.remove('carousel_btn__active');
        }
        carouselItem[1].classList.remove('displayNone');
        carouselItem[1].classList.add('displayBlock');
        carouselBtn[1].classList.add('carousel_btn__active');
    }
    if (iii == 3){
        for (i = 0; i < carouselItemlength; i++){
            carouselItem[i].classList.add('displayNone');
            carouselItem[i].classList.remove('displayBlock');
            carouselBtn[i].classList.remove('carousel_btn__active');
        }
        carouselItem[2].classList.remove('displayNone');
        carouselItem[2].classList.add('displayBlock');
        carouselBtn[2].classList.add('carousel_btn__active');
    }
    if (iii == 4){
        for (i = 0; i < carouselItemlength; i++){
            carouselItem[i].classList.add('displayNone');
            carouselItem[i].classList.remove('displayBlock');
            carouselBtn[i].classList.remove('carousel_btn__active');
        }
        carouselItem[3].classList.remove('displayNone');
        carouselItem[3].classList.add('displayBlock');
        carouselBtn[3].classList.add('carousel_btn__active');
    }
  });
  document.getElementById('carousel_btn__container1').addEventListener('click', (e)=>{
    const carouselBtn = document.getElementById('carousel_btn__container1').getElementsByClassName('carousel_btn');
    const carouselItem = document.getElementById('card_carousel1').getElementsByClassName('carousel_item');
    let i = 0;
    let carouselItemlength = carouselItem.length;
    let iii = e.target.dataset.itemid;
    if (iii == 1){
        for (i = 0; i < carouselItemlength; i++){
            carouselItem[i].classList.add('displayNone');
            carouselItem[i].classList.remove('displayBlock');
            carouselBtn[i].classList.remove('carousel_btn__active');
        }
        carouselItem[0].classList.remove('displayNone');
        carouselItem[0].classList.add('displayBlock');
        carouselBtn[0].classList.add('carousel_btn__active');
    }
    if (iii == 2){
        for (i = 0; i < carouselItemlength; i++){
            carouselItem[i].classList.add('displayNone');
            carouselItem[i].classList.remove('displayBlock');
            carouselBtn[i].classList.remove('carousel_btn__active');
        }
        carouselItem[1].classList.remove('displayNone');
        carouselItem[1].classList.add('displayBlock');
        carouselBtn[1].classList.add('carousel_btn__active');
    }
    if (iii == 3){
        for (i = 0; i < carouselItemlength; i++){
            carouselItem[i].classList.add('displayNone');
            carouselItem[i].classList.remove('displayBlock');
            carouselBtn[i].classList.remove('carousel_btn__active');
        }
        carouselItem[2].classList.remove('displayNone');
        carouselItem[2].classList.add('displayBlock');
        carouselBtn[2].classList.add('carousel_btn__active');
    }
    if (iii == 4){
        for (i = 0; i < carouselItemlength; i++){
            carouselItem[i].classList.add('displayNone');
            carouselItem[i].classList.remove('displayBlock');
            carouselBtn[i].classList.remove('carousel_btn__active');
        }
        carouselItem[3].classList.remove('displayNone');
        carouselItem[3].classList.add('displayBlock');
        carouselBtn[3].classList.add('carousel_btn__active');
    }
  })*/

/***/ }),

/***/ "./src/block/libs/signUp/signUp.js":
/*!*****************************************!*\
  !*** ./src/block/libs/signUp/signUp.js ***!
  \*****************************************/
/***/ (() => {



/***/ }),

/***/ "./src/block/libs/toggleButtons/togleButtons.js":
/*!******************************************************!*\
  !*** ./src/block/libs/toggleButtons/togleButtons.js ***!
  \******************************************************/
/***/ (() => {

//MIXIN toggleButtons
const toggleButtons = document.getElementsByClassName('toggleButtons_container');
const toggleButtonsWrap = document.getElementsByClassName('toggleButtons__wrap');
let OnOff = 1;
const toggleButtonsClick = function () {
  toggleButtonsWrap[0].classList.toggle("toggleButtons__displayNoneOn");
  toggleButtonsWrap[1].classList.toggle("toggleButtons__displayNoneOff");
  if (OnOff == 1) {
    OnOff = 0;
  } else {
    OnOff = 1;
  }
};
toggleButtons[0].addEventListener('click', toggleButtonsClick);
toggleButtons[1].addEventListener('click', toggleButtonsClick);
const toggleButtonsClick1 = function () {
  toggleButtonsWrap[2].classList.toggle("toggleButtons__displayNoneOn");
  toggleButtonsWrap[3].classList.toggle("toggleButtons__displayNoneOff");
  if (OnOff == 1) {
    OnOff = 0;
  } else {
    OnOff = 1;
  }
};
toggleButtons[2].addEventListener('click', toggleButtonsClick1);
toggleButtons[3].addEventListener('click', toggleButtonsClick1);

/***/ }),

/***/ "./src/uiCards.js":
/*!************************!*\
  !*** ./src/uiCards.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/index.css */ "./src/styles/index.css");
/* harmony import */ var _block_libs_card_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./block/libs/card/card */ "./src/block/libs/card/card.js");
/* harmony import */ var _block_libs_card_card__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_block_libs_card_card__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _block_libs_signUp_signUp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./block/libs/signUp/signUp */ "./src/block/libs/signUp/signUp.js");
/* harmony import */ var _block_libs_signUp_signUp__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_block_libs_signUp_signUp__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _block_libs_toggleButtons_togleButtons_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./block/libs/toggleButtons/togleButtons.js */ "./src/block/libs/toggleButtons/togleButtons.js");
/* harmony import */ var _block_libs_toggleButtons_togleButtons_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_block_libs_toggleButtons_togleButtons_js__WEBPACK_IMPORTED_MODULE_3__);





//Show dropdown
const dropdownSumBtn4 = document.getElementById('dropdownSum_Btn4');
const dropdownSumContext4 = document.getElementById('dropdownSum_context4');
const dropdownSumWrap4 = document.getElementById('dropdownSum_Wrap4');
const showDropdownSumContext4 = function () {
  dropdownSumContext4.classList.toggle("displayNone");
  dropdownSumWrap4.classList.toggle("borderRadiusBottomNone");
};
dropdownSumBtn4.addEventListener('click', showDropdownSumContext4);
//Plus and minus Adults
let countAdults2 = 0;
const BtnMinusAdults2 = document.getElementById('BtnMinusAdults2');
const BtnPlusAdults2 = document.getElementById('BtnPlusAdults2');
const ResultAdults2 = document.getElementById('ResultAdults2');
const BtnMinusAdultsClick2 = function () {
  countAdults2--;
  if (countAdults2 <= 0) {
    countAdults2 = 0;
  }
  ResultAdults2.innerHTML = countAdults2;
};
const BtnPlusAdultsClick2 = function () {
  countAdults2++;
  ResultAdults2.innerHTML = countAdults2;
};
BtnMinusAdults2.addEventListener('click', BtnMinusAdultsClick2);
BtnPlusAdults2.addEventListener('click', BtnPlusAdultsClick2);
//Plus and minus Children
let countChildren2 = 0;
const BtnMinusChildren2 = document.getElementById('BtnMinusChildren2');
const ResultChildren2 = document.getElementById('ResultChildren2');
const BtnPlusChildren2 = document.getElementById('BtnPlusChildren2');
const BtnMinushCildrenClick2 = function () {
  countChildren2--;
  if (countChildren2 <= 0) {
    countChildren2 = 0;
  }
  ResultChildren2.innerHTML = countChildren2;
};
const BtnPlushCildrenClick2 = function () {
  countChildren2++;
  ResultChildren2.innerHTML = countChildren2;
};
BtnMinusChildren2.addEventListener('click', BtnMinushCildrenClick2);
BtnPlusChildren2.addEventListener('click', BtnPlushCildrenClick2);
//Plus and minus Babies
let countBabies2 = 0;
const BtnMinusBabies2 = document.getElementById('BtnMinusBabies2');
const ResultBabies2 = document.getElementById('ResultBabies2');
const BtnPlusBabies2 = document.getElementById('BtnPlusBabies2');
const BtnMinushBabiesClick2 = function () {
  countBabies2--;
  if (countBabies2 <= 0) {
    countBabies2 = 0;
  }
  ResultBabies2.innerHTML = countBabies2;
};
const BtnPlushBabiesClick2 = function () {
  countBabies2++;
  if (countBabies2 < 0) {
    countBabies2 = 0;
  }
  ResultBabies2.innerHTML = countBabies2;
};
BtnMinusBabies2.addEventListener('click', BtnMinushBabiesClick2);
BtnPlusBabies2.addEventListener('click', BtnPlushBabiesClick2);
//Button #dropdownSum_BtnApplay
const dropdownSum_BtnApplay2 = document.getElementById('dropdownSumBtnApplay2');
const guestsSumId2 = document.getElementById('guestsSumId2');
const dropdownSum_BtnApplayClick2 = function () {
  let result2 = countAdults2 + countChildren2 + countBabies2;
  guestsSumId2.innerHTML = 'гостей' + result2;
  dropdownSum_BtnClear2.classList.remove('dropdownSum_BtnClear__opasity0');
};
dropdownSum_BtnApplay2.addEventListener('click', dropdownSum_BtnApplayClick2);
//Button dropdownSum_BtnClear
const dropdownSum_BtnClear2 = document.getElementById('dropdownSum_BtnClear2');
const dropdownSum_BtnClearClick2 = function () {
  countAdults2 = 0;
  countChildren2 = 0;
  countBabies2 = 0;
  ResultAdults2.innerHTML = countAdults2;
  ResultChildren2.innerHTML = countChildren2;
  ResultBabies2.innerHTML = countBabies2;
  guestsSumId2.innerHTML = 'сколько гостей';
};
dropdownSum_BtnClear2.addEventListener('click', dropdownSum_BtnClearClick2);

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
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 			"uiCards": 0
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
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkmetalamp1"] = self["webpackChunkmetalamp1"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
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
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["src_styles_index_css"], () => (__webpack_require__("./src/uiCards.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=uiCards.js.map