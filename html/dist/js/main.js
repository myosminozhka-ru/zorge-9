/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/js/index.js","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/blocks/modules/act_page_content/act_page_content.js":
/*!*****************************************************************!*\
  !*** ./src/blocks/modules/act_page_content/act_page_content.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/blocks/modules/buy_tabs/buy_tabs.js":
/*!*************************************************!*\
  !*** ./src/blocks/modules/buy_tabs/buy_tabs.js ***!
  \*************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);

jquery__WEBPACK_IMPORTED_MODULE_0___default()(function () {
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.buy_tabs ul.tabs').delegate('li:not(.current)', 'click', function () {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).addClass('current').siblings().removeClass('current').parents('div.section').find('div.box').hide().eq(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).index()).animate({
      height: 'auto',
      width: 'auto',
      opacity: 'show'
    }, 'slow');

    function setEqualHeight(columns) {
      var tallestcolumn = 0;
      columns.each(function () {
        var currentHeight = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).height();

        if (currentHeight > tallestcolumn) {
          tallestcolumn = currentHeight;
        }
      });
      columns.height(tallestcolumn);
    }

    jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).ready(function () {
      setEqualHeight(jquery__WEBPACK_IMPORTED_MODULE_0___default()(".box__block--title"));
    });
  }) // Array.max = function(array) {
  //     return Math.max.apply(Math,array);
  // };
  // var heights = $('.box-wrap div.box').map(function() {
  //     return $(this).innerHeight();
  // }).get();
  // $(".box-wrap").height(Array.max(heights));
  (function quantityProducts() {
    var $quantityArrowMinus = jquery__WEBPACK_IMPORTED_MODULE_0___default()(".quantity-arrow-minus");
    var $quantityArrowPlus = jquery__WEBPACK_IMPORTED_MODULE_0___default()(".quantity-arrow-plus");
    var $quantityNum = jquery__WEBPACK_IMPORTED_MODULE_0___default()(".quantity-num");
    $quantityArrowMinus.click(quantityMinus);
    $quantityArrowPlus.click(quantityPlus);

    function quantityMinus() {
      if ($quantityNum.val() > 1) {
        $quantityNum.val(+$quantityNum.val() - 1);
      }
    }

    function quantityPlus() {
      $quantityNum.val(+$quantityNum.val() + 1);
    }
  })();
});

/***/ }),

/***/ "./src/blocks/modules/dinamic_main/dinamic_main.js":
/*!*********************************************************!*\
  !*** ./src/blocks/modules/dinamic_main/dinamic_main.js ***!
  \*********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);

jquery__WEBPACK_IMPORTED_MODULE_0___default()(function () {
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.switch').change(function () {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.dinamic_main__bottom').toggleClass('active');
  });
});

/***/ }),

/***/ "./src/blocks/modules/docs__content/docs__content.js":
/*!***********************************************************!*\
  !*** ./src/blocks/modules/docs__content/docs__content.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/blocks/modules/footer/footer.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/footer/footer.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/blocks/modules/header/header.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/header/header.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/blocks/modules/kladovie_blocks/kladovie_blocks.js":
/*!***************************************************************!*\
  !*** ./src/blocks/modules/kladovie_blocks/kladovie_blocks.js ***!
  \***************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var slick_carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! slick-carousel */ "./node_modules/slick-carousel/slick/slick.js");
/* harmony import */ var slick_carousel__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(slick_carousel__WEBPACK_IMPORTED_MODULE_1__);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



jquery__WEBPACK_IMPORTED_MODULE_0___default()(function () {
  var _$slickElement$slick;

  var $status = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.pagingInfo');
  var $slickElement = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.kladovie_blocks-js');
  $slickElement.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
    var i = '0' + ((currentSlide ? currentSlide : 0) + 1);
    $status.html(i + '<span>' + '0' + slick.slideCount + '</span>');
  });
  $slickElement.slick((_$slickElement$slick = {
    slide: '.kladovie_blocks__block',
    autoplay: true,
    dots: true,
    infinite: false
  }, _defineProperty(_$slickElement$slick, "autoplay", true), _defineProperty(_$slickElement$slick, "autoplaySpeed", 2500), _defineProperty(_$slickElement$slick, "slidesToShow", 3), _defineProperty(_$slickElement$slick, "responsive", [{
    breakpoint: 1231,
    settings: {
      slidesToShow: 2
    }
  }, {
    breakpoint: 921,
    settings: {
      slidesToShow: 1
    }
  }]), _$slickElement$slick));
});

/***/ }),

/***/ "./src/blocks/modules/kladovie_first/kladovie_first.js":
/*!*************************************************************!*\
  !*** ./src/blocks/modules/kladovie_first/kladovie_first.js ***!
  \*************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);

jquery__WEBPACK_IMPORTED_MODULE_0___default()(function () {
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.feedback').click(function () {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.fd1').addClass('opened');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('body').addClass('owf');
    return false;
  });
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.fd1 .icon-close').click(function () {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.fd1').removeClass('opened');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('body').removeClass('owf');
    return false;
  });
  jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).click(function (event) {
    if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(event.target).closest('.fd1 .form-wrapper-inner').length) return;
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.fd1').removeClass('opened');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('body').removeClass('owf');
    event.stopPropagation();
  });
  jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).keydown(function (event) {
    if (event.which == 27) {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.fd1').removeClass('opened');
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('body').removeClass('owf');
    }
  });
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.feedback2').click(function () {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.fd2').addClass('opened');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('body').addClass('owf');
    return false;
  });
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.fd2 .icon-close').click(function () {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.fd2').removeClass('opened');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('body').removeClass('owf');
    return false;
  });
  jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).click(function (event) {
    if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(event.target).closest('.fd2 .form-wrapper-inner').length) return;
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.fd2').removeClass('opened');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('body').removeClass('owf');
    event.stopPropagation();
  });
  jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).keydown(function (event) {
    if (event.which == 27) {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.fd2').removeClass('opened');
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('body').removeClass('owf');
    }
  });
});

/***/ }),

/***/ "./src/blocks/modules/kladovie_plan/kladovie_plan.js":
/*!***********************************************************!*\
  !*** ./src/blocks/modules/kladovie_plan/kladovie_plan.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/blocks/modules/kladovie_sl/kladovie_sl.js":
/*!*******************************************************!*\
  !*** ./src/blocks/modules/kladovie_sl/kladovie_sl.js ***!
  \*******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var slick_carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! slick-carousel */ "./node_modules/slick-carousel/slick/slick.js");
/* harmony import */ var slick_carousel__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(slick_carousel__WEBPACK_IMPORTED_MODULE_1__);


jquery__WEBPACK_IMPORTED_MODULE_0___default()(function () {
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.kladovie_sl-js').slick({
    dots: true,
    arrows: true,
    infinite: true,
    fade: true,
    autoplay: true,
    autoplaySpeed: 2500,
    slidesToShow: 1
  });
});

/***/ }),

/***/ "./src/blocks/modules/main_blocks/main_blocks.js":
/*!*******************************************************!*\
  !*** ./src/blocks/modules/main_blocks/main_blocks.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/blocks/modules/main_contacts/main_contacts.js":
/*!***********************************************************!*\
  !*** ./src/blocks/modules/main_contacts/main_contacts.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/blocks/modules/main_first/main_first.js":
/*!*****************************************************!*\
  !*** ./src/blocks/modules/main_first/main_first.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/blocks/modules/main_func/main_func.js":
/*!***************************************************!*\
  !*** ./src/blocks/modules/main_func/main_func.js ***!
  \***************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ion_rangeslider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ion-rangeslider */ "./node_modules/ion-rangeslider/js/ion.rangeSlider.js");
/* harmony import */ var ion_rangeslider__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ion_rangeslider__WEBPACK_IMPORTED_MODULE_1__);


jquery__WEBPACK_IMPORTED_MODULE_0___default()(function () {
  jquery__WEBPACK_IMPORTED_MODULE_0___default()(".js-range-slider").ionRangeSlider({
    type: "double",
    min: 3,
    max: 19
  });
  jquery__WEBPACK_IMPORTED_MODULE_0___default()(".js-range-slider2").ionRangeSlider({
    type: "double",
    min: 1,
    max: 3
  });
  jquery__WEBPACK_IMPORTED_MODULE_0___default()(".js-range-slider3").ionRangeSlider({
    type: "double",
    min: 26,
    max: 78
  });
  jquery__WEBPACK_IMPORTED_MODULE_0___default()(".js-range-slider4").ionRangeSlider({
    type: "double",
    min: 9.0,
    step: 0.1,
    max: 25.4
  });
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('#SvgjsPath1027').on('click', function () {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.show3').toggleClass('active');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).on('click', function (e) {
      if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).closest('#SvgjsPath1027').length || jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).closest('#SvgjsPath1027 path').length) return;
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.show3').removeClass('active');
    });
  });
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('#SvgjsPath1025').on('click', function () {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.show2').toggleClass('active');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).on('click', function (e) {
      if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).closest('#SvgjsPath1025').length || jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).closest('#SvgjsPath1025 path').length) return;
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.show2').removeClass('active');
    });
  });
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('#SvgjsPath1029').on('click', function () {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.show1').toggleClass('active');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).on('click', function (e) {
      if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).closest('#SvgjsPath1029').length || jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).closest('#SvgjsPath1029 path').length) return;
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.show1').removeClass('active');
    });
  });
});

/***/ }),

/***/ "./src/blocks/modules/main_head/main_head.js":
/*!***************************************************!*\
  !*** ./src/blocks/modules/main_head/main_head.js ***!
  \***************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);

jquery__WEBPACK_IMPORTED_MODULE_0___default()(function () {
  function burg() {
    var burgerWr = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.burger-wrap'),
        burgerBtn = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.burger-btn'),
        burgerBody = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.burger-body'),
        burgerCloseBtn = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.burger-close-btn');
    burgerBtn.on('click', function () {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(burgerWr).addClass('opened');
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('body').addClass('owf');
    });
    burgerCloseBtn.on('click', function () {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(burgerWr).removeClass('opened');
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('body').removeClass('owf');
    });
  }

  burg();
  jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).on('click', function (e) {
    if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).closest('.burger-btn').length || jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).closest('.burger-body').length) return;
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.burger-wrap').removeClass('opened');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('body').removeClass('owf');
  });
  var tfix = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.fix_block_js'),
      tfixOffset = tfix.offset(),
      hederHeight = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.fix_block_js').height();
  jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).scroll(function () {
    if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).scrollTop() > tfixOffset.top) {
      if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).scrollTop() > tfixOffset.top) {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()('.main_head').css({
          'paddingTop': hederHeight + 'px'
        });
        jquery__WEBPACK_IMPORTED_MODULE_0___default()('.header').css({
          'paddingTop': hederHeight + 'px'
        });
        tfix.addClass('fixed');
      }

      ;
    } else {
      tfix.removeClass('fixed');
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.main_head').css({
        'paddingTop': 0
      });
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.header').css({
        'paddingTop': 0
      });
    }

    ;
  });
});

/***/ }),

/***/ "./src/blocks/modules/main_pref/main_pref.js":
/*!***************************************************!*\
  !*** ./src/blocks/modules/main_pref/main_pref.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/blocks/modules/main_red/main_red.js":
/*!*************************************************!*\
  !*** ./src/blocks/modules/main_red/main_red.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/blocks/modules/main_reds/main_reds.js":
/*!***************************************************!*\
  !*** ./src/blocks/modules/main_reds/main_reds.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/blocks/modules/main_rmap/main_rmap.js":
/*!***************************************************!*\
  !*** ./src/blocks/modules/main_rmap/main_rmap.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/blocks/modules/main_sl/main_sl.js":
/*!***********************************************!*\
  !*** ./src/blocks/modules/main_sl/main_sl.js ***!
  \***********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var slick_carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! slick-carousel */ "./node_modules/slick-carousel/slick/slick.js");
/* harmony import */ var slick_carousel__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(slick_carousel__WEBPACK_IMPORTED_MODULE_1__);


jquery__WEBPACK_IMPORTED_MODULE_0___default()(function () {
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.variable_width').slick({
    dots: false,
    arrows: false,
    infinite: false,
    speed: 300,
    autoplay: true,
    autoplaySpeed: 2500,
    slidesToShow: 1,
    centerMode: false,
    variableWidth: true
  });
});

/***/ }),

/***/ "./src/blocks/modules/main_slider/main_slider.js":
/*!*******************************************************!*\
  !*** ./src/blocks/modules/main_slider/main_slider.js ***!
  \*******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var slick_carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! slick-carousel */ "./node_modules/slick-carousel/slick/slick.js");
/* harmony import */ var slick_carousel__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(slick_carousel__WEBPACK_IMPORTED_MODULE_1__);


jquery__WEBPACK_IMPORTED_MODULE_0___default()(function () {
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.slider_for').slick({
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2500,
    fade: true,
    asNavFor: '.slider_nav'
  });
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.slider_nav').slick({
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2500,
    asNavFor: '.slider_for',
    dots: false
  });
});

/***/ }),

/***/ "./src/blocks/modules/news_blocks/news_blocks.js":
/*!*******************************************************!*\
  !*** ./src/blocks/modules/news_blocks/news_blocks.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/blocks/modules/news_page_content/news_page_content.js":
/*!*******************************************************************!*\
  !*** ./src/blocks/modules/news_page_content/news_page_content.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/blocks/modules/notfound_page/notfound_page.js":
/*!***********************************************************!*\
  !*** ./src/blocks/modules/notfound_page/notfound_page.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/blocks/modules/parking_blocks/parking_blocks.js":
/*!*************************************************************!*\
  !*** ./src/blocks/modules/parking_blocks/parking_blocks.js ***!
  \*************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
 // import 'slick-carousel';

jquery__WEBPACK_IMPORTED_MODULE_0___default()(function () {
  // let $status = $('.pagingInfo');
  // let $slickElement = $('.kladovie_blocks-js');
  // $slickElement.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
  //     let i = '0' + ((currentSlide ? currentSlide : 0) + 1);
  //     $status.html(i + '<span>' + '0' + (slick.slideCount) + '</span>');
  // });
  // $slickElement.slick({
  //     slide: '.kladovie_blocks__block',
  //     autoplay: true,
  //     dots: true,
  //     infinite: false,
  //     slidesToShow: 3,
  //     responsive: [
  //       {
  //         breakpoint: 1231,
  //         settings: {
  //           slidesToShow: 2
  //         }
  //       },
  //       {
  //         breakpoint: 921,
  //         settings: {
  //           slidesToShow: 1
  //         }
  //       }
  //     ]
  // });
  function setEqualHeight(columns) {
    var tallestcolumn = 0;
    columns.each(function () {
      var currentHeight = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).height();

      if (currentHeight > tallestcolumn) {
        tallestcolumn = currentHeight;
      }
    });
    columns.height(tallestcolumn);
  }

  jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).ready(function () {
    setEqualHeight(jquery__WEBPACK_IMPORTED_MODULE_0___default()(".kladovie_blocks__block--txt"));
  });
});

/***/ }),

/***/ "./src/blocks/modules/parking_first/parking_first.js":
/*!***********************************************************!*\
  !*** ./src/blocks/modules/parking_first/parking_first.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/blocks/modules/parking_white/parking_white.js":
/*!***********************************************************!*\
  !*** ./src/blocks/modules/parking_white/parking_white.js ***!
  \***********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);

jquery__WEBPACK_IMPORTED_MODULE_0___default()(function () {
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.place1').on('click', function () {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).toggleClass('active');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.plc1').toggleClass('active');
  });
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.place2').on('click', function () {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).toggleClass('active');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.plc2').toggleClass('active');
  });
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.place3').on('click', function () {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).toggleClass('active');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.plc3').toggleClass('active');
  });
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.place4').on('click', function () {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).toggleClass('active');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.plc4').toggleClass('active');
  });
});

/***/ }),

/***/ "./src/blocks/modules/team_content/team_content.js":
/*!*********************************************************!*\
  !*** ./src/blocks/modules/team_content/team_content.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/js/import/modules.js":
/*!**********************************!*\
  !*** ./src/js/import/modules.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_header_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! %modules%/header/header */ "./src/blocks/modules/header/header.js");
/* harmony import */ var _modules_header_header__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_modules_header_header__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_main_head_main_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! %modules%/main_head/main_head */ "./src/blocks/modules/main_head/main_head.js");
/* harmony import */ var _modules_main_reds_main_reds__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! %modules%/main_reds/main_reds */ "./src/blocks/modules/main_reds/main_reds.js");
/* harmony import */ var _modules_main_reds_main_reds__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_modules_main_reds_main_reds__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _modules_main_rmap_main_rmap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! %modules%/main_rmap/main_rmap */ "./src/blocks/modules/main_rmap/main_rmap.js");
/* harmony import */ var _modules_main_rmap_main_rmap__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_modules_main_rmap_main_rmap__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _modules_main_slider_main_slider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! %modules%/main_slider/main_slider */ "./src/blocks/modules/main_slider/main_slider.js");
/* harmony import */ var _modules_main_blocks_main_blocks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! %modules%/main_blocks/main_blocks */ "./src/blocks/modules/main_blocks/main_blocks.js");
/* harmony import */ var _modules_main_blocks_main_blocks__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_modules_main_blocks_main_blocks__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _modules_main_red_main_red__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! %modules%/main_red/main_red */ "./src/blocks/modules/main_red/main_red.js");
/* harmony import */ var _modules_main_red_main_red__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_modules_main_red_main_red__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _modules_main_pref_main_pref__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! %modules%/main_pref/main_pref */ "./src/blocks/modules/main_pref/main_pref.js");
/* harmony import */ var _modules_main_pref_main_pref__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_modules_main_pref_main_pref__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _modules_main_first_main_first__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! %modules%/main_first/main_first */ "./src/blocks/modules/main_first/main_first.js");
/* harmony import */ var _modules_main_first_main_first__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_modules_main_first_main_first__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _modules_main_sl_main_sl__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! %modules%/main_sl/main_sl */ "./src/blocks/modules/main_sl/main_sl.js");
/* harmony import */ var _modules_main_contacts_main_contacts__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! %modules%/main_contacts/main_contacts */ "./src/blocks/modules/main_contacts/main_contacts.js");
/* harmony import */ var _modules_main_contacts_main_contacts__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_modules_main_contacts_main_contacts__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _modules_team_content_team_content__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! %modules%/team_content/team_content */ "./src/blocks/modules/team_content/team_content.js");
/* harmony import */ var _modules_team_content_team_content__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_modules_team_content_team_content__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _modules_notfound_page_notfound_page__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! %modules%/notfound_page/notfound_page */ "./src/blocks/modules/notfound_page/notfound_page.js");
/* harmony import */ var _modules_notfound_page_notfound_page__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_modules_notfound_page_notfound_page__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _modules_docs_content_docs_content__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! %modules%/docs__content/docs__content */ "./src/blocks/modules/docs__content/docs__content.js");
/* harmony import */ var _modules_docs_content_docs_content__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_modules_docs_content_docs_content__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _modules_news_blocks_news_blocks__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! %modules%/news_blocks/news_blocks */ "./src/blocks/modules/news_blocks/news_blocks.js");
/* harmony import */ var _modules_news_blocks_news_blocks__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_modules_news_blocks_news_blocks__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _modules_news_page_content_news_page_content__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! %modules%/news_page_content/news_page_content */ "./src/blocks/modules/news_page_content/news_page_content.js");
/* harmony import */ var _modules_news_page_content_news_page_content__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_modules_news_page_content_news_page_content__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _modules_kladovie_first_kladovie_first__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! %modules%/kladovie_first/kladovie_first */ "./src/blocks/modules/kladovie_first/kladovie_first.js");
/* harmony import */ var _modules_kladovie_plan_kladovie_plan__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! %modules%/kladovie_plan/kladovie_plan */ "./src/blocks/modules/kladovie_plan/kladovie_plan.js");
/* harmony import */ var _modules_kladovie_plan_kladovie_plan__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_modules_kladovie_plan_kladovie_plan__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _modules_kladovie_sl_kladovie_sl__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! %modules%/kladovie_sl/kladovie_sl */ "./src/blocks/modules/kladovie_sl/kladovie_sl.js");
/* harmony import */ var _modules_kladovie_blocks_kladovie_blocks__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! %modules%/kladovie_blocks/kladovie_blocks */ "./src/blocks/modules/kladovie_blocks/kladovie_blocks.js");
/* harmony import */ var _modules_parking_first_parking_first__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! %modules%/parking_first/parking_first */ "./src/blocks/modules/parking_first/parking_first.js");
/* harmony import */ var _modules_parking_first_parking_first__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_modules_parking_first_parking_first__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _modules_parking_blocks_parking_blocks__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! %modules%/parking_blocks/parking_blocks */ "./src/blocks/modules/parking_blocks/parking_blocks.js");
/* harmony import */ var _modules_parking_white_parking_white__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! %modules%/parking_white/parking_white */ "./src/blocks/modules/parking_white/parking_white.js");
/* harmony import */ var _modules_act_page_content_act_page_content__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! %modules%/act_page_content/act_page_content */ "./src/blocks/modules/act_page_content/act_page_content.js");
/* harmony import */ var _modules_act_page_content_act_page_content__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(_modules_act_page_content_act_page_content__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var _modules_buy_tabs_buy_tabs__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! %modules%/buy_tabs/buy_tabs */ "./src/blocks/modules/buy_tabs/buy_tabs.js");
/* harmony import */ var _modules_dinamic_main_dinamic_main__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! %modules%/dinamic_main/dinamic_main */ "./src/blocks/modules/dinamic_main/dinamic_main.js");
/* harmony import */ var _modules_main_func_main_func__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! %modules%/main_func/main_func */ "./src/blocks/modules/main_func/main_func.js");
/* harmony import */ var _modules_footer_footer__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! %modules%/footer/footer */ "./src/blocks/modules/footer/footer.js");
/* harmony import */ var _modules_footer_footer__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(_modules_footer_footer__WEBPACK_IMPORTED_MODULE_27__);





























/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _import_modules__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./import/modules */ "./src/js/import/modules.js");


/***/ })

/******/ });
//# sourceMappingURL=main.js.map