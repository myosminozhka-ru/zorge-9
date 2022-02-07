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

/***/ "./src/blocks/modules/ap_first/ap_first.js":
/*!*************************************************!*\
  !*** ./src/blocks/modules/ap_first/ap_first.js ***!
  \*************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var slick_carousel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! slick-carousel */ "./node_modules/slick-carousel/slick/slick.js");
/* harmony import */ var slick_carousel__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(slick_carousel__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var ion_rangeslider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ion-rangeslider */ "./node_modules/ion-rangeslider/js/ion.rangeSlider.js");
/* harmony import */ var ion_rangeslider__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ion_rangeslider__WEBPACK_IMPORTED_MODULE_3__);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }




jquery__WEBPACK_IMPORTED_MODULE_1___default()(function () {
  if (!price) {
    var price = 0;
  }

  var params = {
    contribution: 0,
    sum: price,
    years: 0,
    percent: 0
  };
  var bankFormatted;

  function recalculateBanks(result) {
    jquery__WEBPACK_IMPORTED_MODULE_1___default()('.ap_tabs').html('').prepend("\n            <div class=\"ap_tabs__titles\">\n                <div class=\"ap_tabs__titles--block\">\u0411\u0430\u043D\u043A</div>\n                <div class=\"ap_tabs__titles--block\">\u0421\u0442\u0430\u0432\u043A\u0430</div>\n                <div class=\"ap_tabs__titles--block\">\u0421\u0440\u043E\u043A</div>\n                <div class=\"ap_tabs__titles--block\">\u0415\u0436\u0435\u043C\u0435\u0441\u044F\u0447\u043D\u044B\u0439 \u043F\u043B\u0430\u0442\u0435\u0436</div>\n                <div class=\"ap_tabs__titles--block\">\u041C\u0438\u043D\u0438\u043C\u0430\u043B\u044C\u043D\u044B\u0439 \u0432\u0437\u043D\u043E\u0441, %</div>\n            </div>\n        ");
    console.log(JSON.parse(result));

    if (JSON.parse(result).banks) {
      JSON.parse(result).banks.map(function (item) {
        jquery__WEBPACK_IMPORTED_MODULE_1___default()('.ap_tabs').append("\n                    <div class=\"ap_tabs__blocks\">\n                        <div class=\"ap_tabs__blocks--block\">\n                            <div class=\"ap_tabs__blocks--img\"><img src=\"/local/templates/main/assets/html/dist/img/i5.png\" alt=\"\"></div>\n                            <div class=\"ap_tabs__blocks--title\">\u0412\u0422\u0411</div>\n                        </div>\n                        <div class=\"ap_tabs__blocks--block\"><span class=\"ap_tabs__blocks--span\">\u0421\u0442\u0430\u0432\u043A\u0430</span>".concat(item.bid, "</div>\n                        <div class=\"ap_tabs__blocks--block\"><span class=\"ap_tabs__blocks--span\">\u0421\u0440\u043E\u043A</span>").concat(item.contribution, "</div>\n                        <div class=\"ap_tabs__blocks--block\"><span class=\"ap_tabs__blocks--span\">\u0415\u0436\u0435\u043C\u0435\u0441\u044F\u0447\u043D\u044B\u0439 \u043F\u043B\u0430\u0442\u0435\u0436</span>").concat(item.month_pay, "</div>\n                        <div class=\"ap_tabs__blocks--block\"><span class=\"ap_tabs__blocks--span\">\u041C\u0438\u043D\u0438\u043C\u0430\u043B\u044C\u043D\u044B\u0439 \u0432\u0437\u043D\u043E\u0441, %</span>10%</div>\n                    </div>\n                "));
      });
      bankFormatted = JSON.parse(result).banksFormatted;
      jquery__WEBPACK_IMPORTED_MODULE_1___default()('#bank_formatted').attr('value', bankFormatted);
      jquery__WEBPACK_IMPORTED_MODULE_1___default()('#apart_url').attr('value', window.location.href);
      console.log(bankFormatted);
    }
  }

  if (jquery__WEBPACK_IMPORTED_MODULE_1___default()('.request_form form').length) {
    jquery__WEBPACK_IMPORTED_MODULE_1___default()('.request_form form').submit(function (event) {
      event.preventDefault();
      form_submit('.request_form form', function (result) {
        console.log(result);

        if (result.SUCCESS) {
          jquery__WEBPACK_IMPORTED_MODULE_1___default()('.request_form form').find('label').fadeOut();
          jquery__WEBPACK_IMPORTED_MODULE_1___default()('.request_form form').find('.form-wrapper__btns').fadeOut();
          jquery__WEBPACK_IMPORTED_MODULE_1___default()('.request_form form').closest('.form-wrapper-inner').find('.form-wrapper__subtitle').fadeOut();
          jquery__WEBPACK_IMPORTED_MODULE_1___default()('.request_form form').closest('.form-wrapper-inner').find('.form-wrapper__title').html(result.SUCCESS);
        }
      });
    });
  }

  jquery__WEBPACK_IMPORTED_MODULE_1___default()('.ap_tabs__button').click(function (event) {
    event.preventDefault();
    jquery__WEBPACK_IMPORTED_MODULE_1___default()('.request_form').addClass('opened');
  });
  jquery__WEBPACK_IMPORTED_MODULE_1___default()('.slrs25').slick({
    dots: true,
    arrows: true,
    infinite: true,
    autoplaySpeed: 2500,
    fade: true
  });

  if (jquery__WEBPACK_IMPORTED_MODULE_1___default()('.rg1').length && ionopt) {
    jquery__WEBPACK_IMPORTED_MODULE_1___default()('.rg1').ionRangeSlider(_objectSpread(_objectSpread({}, ionopt), {}, {
      onStart: function onStart(data) {
        jquery__WEBPACK_IMPORTED_MODULE_1___default()(".nb1").html(data.from.toLocaleString());
        params.contribution = data.from.toLocaleString();
        jquery__WEBPACK_IMPORTED_MODULE_1___default.a.ajax({
          data: params,
          url: "/ajax/bank.php",
          // method: "POST",
          success: function success(result) {
            recalculateBanks(result);
          }
        });
      },
      onChange: function onChange(data) {
        jquery__WEBPACK_IMPORTED_MODULE_1___default()(".nb1").html(data.from.toLocaleString());
        params.contribution = data.from.toLocaleString();
        jquery__WEBPACK_IMPORTED_MODULE_1___default.a.ajax({
          data: params,
          url: "/ajax/bank.php",
          // method: "POST",
          success: function success(result) {
            recalculateBanks(result);
          }
        });
      }
    }));
  }

  if (jquery__WEBPACK_IMPORTED_MODULE_1___default()('.rg2').length && ionopt2) {
    jquery__WEBPACK_IMPORTED_MODULE_1___default()('.rg2').ionRangeSlider(_objectSpread(_objectSpread({}, ionopt2), {}, {
      onStart: function onStart(data) {
        jquery__WEBPACK_IMPORTED_MODULE_1___default()(".nb2").html(data.from);
        params.years = data.from;
        jquery__WEBPACK_IMPORTED_MODULE_1___default.a.ajax({
          data: params,
          url: "/ajax/bank.php",
          // method: "POST",
          success: function success(result) {
            recalculateBanks(result);
          }
        });
      },
      onChange: function onChange(data) {
        jquery__WEBPACK_IMPORTED_MODULE_1___default()(".nb2").html(data.from);
        params.years = data.from;
        jquery__WEBPACK_IMPORTED_MODULE_1___default.a.ajax({
          data: params,
          url: "/ajax/bank.php",
          // method: "POST",
          success: function success(result) {
            recalculateBanks(result);
          }
        });
      }
    }));
  }

  if (jquery__WEBPACK_IMPORTED_MODULE_1___default()('.rg3').length && ionopt3) {
    jquery__WEBPACK_IMPORTED_MODULE_1___default()('.rg3').ionRangeSlider(_objectSpread(_objectSpread({}, ionopt3), {}, {
      onStart: function onStart(data) {
        jquery__WEBPACK_IMPORTED_MODULE_1___default()(".nb3").html(data.from);
        params.percent = data.from;
        jquery__WEBPACK_IMPORTED_MODULE_1___default.a.ajax({
          data: params,
          url: "/ajax/bank.php",
          // method: "POST",
          success: function success(result) {
            recalculateBanks(result);
          }
        });
      },
      onChange: function onChange(data) {
        jquery__WEBPACK_IMPORTED_MODULE_1___default()(".nb3").html(data.from);
        params.percent = data.from;
        jquery__WEBPACK_IMPORTED_MODULE_1___default.a.ajax({
          data: params,
          url: "/ajax/bank.php",
          // method: "POST",
          success: function success(result) {
            recalculateBanks(result);
          }
        });
      }
    }));
  }
});

/***/ }),

/***/ "./src/blocks/modules/buy_tabs/buy_tabs.js":
/*!*************************************************!*\
  !*** ./src/blocks/modules/buy_tabs/buy_tabs.js ***!
  \*************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module, jQuery) {/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);


/* jQuery Form Styler v2.0.2 | (c) Dimox | https://github.com/Dimox/jQueryFormStyler */

!function (e) {
  "function" == typeof define && __webpack_require__(/*! !webpack amd options */ "./node_modules/webpack/buildin/amd-options.js") ? define(["jquery"], e) : "object" == (typeof exports === "undefined" ? "undefined" : _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(exports)) ? module.exports = e(jquery__WEBPACK_IMPORTED_MODULE_1___default.a || __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")) : e(jQuery);
}(function (e) {
  "use strict";

  function t(t, s) {
    this.element = t, this.options = e.extend({}, l, s);
    var i = this.options.locale;
    void 0 !== this.options.locales[i] && e.extend(this.options, this.options.locales[i]), this.init();
  }

  function s(t) {
    if (!e(t.target).parents().hasClass("jq-selectbox") && "OPTION" != t.target.nodeName && e("div.jq-selectbox.opened").length) {
      var s = e("div.jq-selectbox.opened"),
          l = e("div.jq-selectbox__search input", s),
          o = e("div.jq-selectbox__dropdown", s);
      s.find("select").data("_" + i).options.onSelectClosed.call(s), l.length && l.val("").keyup(), o.hide().find("li.sel").addClass("selected"), s.removeClass("focused opened dropup dropdown");
    }
  }

  var i = "styler",
      l = {
    idSuffix: "-styler",
    filePlaceholder: "Файл не выбран",
    fileBrowse: "Обзор...",
    fileNumber: "Выбрано файлов: %s",
    selectPlaceholder: "Выберите...",
    selectSearch: !1,
    selectSearchLimit: 10,
    selectSearchNotFound: "Совпадений не найдено",
    selectSearchPlaceholder: "Поиск...",
    selectVisibleOptions: 0,
    selectSmartPositioning: !0,
    locale: "ru",
    locales: {
      en: {
        filePlaceholder: "No file selected",
        fileBrowse: "Browse...",
        fileNumber: "Selected files: %s",
        selectPlaceholder: "Select...",
        selectSearchNotFound: "No matches found",
        selectSearchPlaceholder: "Search..."
      }
    },
    onSelectOpened: function onSelectOpened() {},
    onSelectClosed: function onSelectClosed() {},
    onFormStyled: function onFormStyled() {}
  };
  t.prototype = {
    init: function init() {
      function t() {
        void 0 !== i.attr("id") && "" !== i.attr("id") && (this.id = i.attr("id") + l.idSuffix), this.title = i.attr("title"), this.classes = i.attr("class"), this.data = i.data();
      }

      var i = e(this.element),
          l = this.options,
          o = !(!navigator.userAgent.match(/(iPad|iPhone|iPod)/i) || navigator.userAgent.match(/(Windows\sPhone)/i)),
          a = !(!navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/(Windows\sPhone)/i));

      if (i.is(":checkbox")) {
        var d = function d() {
          var s = new t(),
              l = e('<div class="jq-checkbox"><div class="jq-checkbox__div"></div></div>').attr({
            id: s.id,
            title: s.title
          }).addClass(s.classes).data(s.data);
          i.after(l).prependTo(l), i.is(":checked") && l.addClass("checked"), i.is(":disabled") && l.addClass("disabled"), l.click(function (e) {
            e.preventDefault(), i.triggerHandler("click"), l.is(".disabled") || (i.is(":checked") ? (i.prop("checked", !1), l.removeClass("checked")) : (i.prop("checked", !0), l.addClass("checked")), i.focus().change());
          }), i.closest("label").add('label[for="' + i.attr("id") + '"]').on("click.styler", function (t) {
            e(t.target).is("a") || e(t.target).closest(l).length || (l.triggerHandler("click"), t.preventDefault());
          }), i.on("change.styler", function () {
            i.is(":checked") ? l.addClass("checked") : l.removeClass("checked");
          }).on("keydown.styler", function (e) {
            32 == e.which && l.click();
          }).on("focus.styler", function () {
            l.is(".disabled") || l.addClass("focused");
          }).on("blur.styler", function () {
            l.removeClass("focused");
          });
        };

        d(), i.on("refresh", function () {
          i.closest("label").add('label[for="' + i.attr("id") + '"]').off(".styler"), i.off(".styler").parent().before(i).remove(), d();
        });
      } else if (i.is(":radio")) {
        var r = function r() {
          var s = new t(),
              l = e('<div class="jq-radio"><div class="jq-radio__div"></div></div>').attr({
            id: s.id,
            title: s.title
          }).addClass(s.classes).data(s.data);
          i.after(l).prependTo(l), i.is(":checked") && l.addClass("checked"), i.is(":disabled") && l.addClass("disabled"), e.fn.commonParents = function () {
            var t = this;
            return t.first().parents().filter(function () {
              return e(this).find(t).length === t.length;
            });
          }, e.fn.commonParent = function () {
            return e(this).commonParents().first();
          }, l.click(function (t) {
            if (t.preventDefault(), i.triggerHandler("click"), !l.is(".disabled")) {
              var s = e('input[name="' + i.attr("name") + '"]');
              s.commonParent().find(s).prop("checked", !1).parent().removeClass("checked"), i.prop("checked", !0).parent().addClass("checked"), i.focus().change();
            }
          }), i.closest("label").add('label[for="' + i.attr("id") + '"]').on("click.styler", function (t) {
            e(t.target).is("a") || e(t.target).closest(l).length || (l.triggerHandler("click"), t.preventDefault());
          }), i.on("change.styler", function () {
            i.parent().addClass("checked");
          }).on("focus.styler", function () {
            l.is(".disabled") || l.addClass("focused");
          }).on("blur.styler", function () {
            l.removeClass("focused");
          });
        };

        r(), i.on("refresh", function () {
          i.closest("label").add('label[for="' + i.attr("id") + '"]').off(".styler"), i.off(".styler").parent().before(i).remove(), r();
        });
      } else if (i.is(":file")) {
        var c = function c() {
          var s = new t(),
              o = i.data("placeholder");
          void 0 === o && (o = l.filePlaceholder);
          var a = i.data("browse");
          void 0 !== a && "" !== a || (a = l.fileBrowse);
          var d = e('<div class="jq-file"><div class="jq-file__name">' + o + '</div><div class="jq-file__browse">' + a + "</div></div>").attr({
            id: s.id,
            title: s.title
          }).addClass(s.classes).data(s.data);
          i.after(d).appendTo(d), i.is(":disabled") && d.addClass("disabled");
          var r = i.val(),
              c = e("div.jq-file__name", d);
          r && c.text(r.replace(/.+[\\\/]/, "")), i.on("change.styler", function () {
            var e = i.val();

            if (i.is("[multiple]")) {
              e = "";
              var t = i[0].files.length;

              if (t > 0) {
                var s = i.data("number");
                void 0 === s && (s = l.fileNumber), s = s.replace("%s", t), e = s;
              }
            }

            c.text(e.replace(/.+[\\\/]/, "")), "" === e ? (c.text(o), d.removeClass("changed")) : d.addClass("changed");
          }).on("focus.styler", function () {
            d.addClass("focused");
          }).on("blur.styler", function () {
            d.removeClass("focused");
          }).on("click.styler", function () {
            d.removeClass("focused");
          });
        };

        c(), i.on("refresh", function () {
          i.off(".styler").parent().before(i).remove(), c();
        });
      } else if (i.is('input[type="number"]')) {
        var n = function n() {
          var s = new t(),
              l = e('<div class="jq-number"><div class="jq-number__spin minus"></div><div class="jq-number__spin plus"></div></div>').attr({
            id: s.id,
            title: s.title
          }).addClass(s.classes).data(s.data);
          i.after(l).prependTo(l).wrap('<div class="jq-number__field"></div>'), i.is(":disabled") && l.addClass("disabled");
          var o,
              a,
              d,
              r = null,
              c = null;
          void 0 !== i.attr("min") && (o = i.attr("min")), void 0 !== i.attr("max") && (a = i.attr("max")), d = void 0 !== i.attr("step") && e.isNumeric(i.attr("step")) ? Number(i.attr("step")) : Number(1);

          var n = function n(t) {
            var s,
                l = i.val();
            e.isNumeric(l) || (l = 0, i.val("0")), t.is(".minus") ? s = Number(l) - d : t.is(".plus") && (s = Number(l) + d);
            var r = (d.toString().split(".")[1] || []).length;

            if (r > 0) {
              for (var c = "1"; c.length <= r;) {
                c += "0";
              }

              s = Math.round(s * c) / c;
            }

            e.isNumeric(o) && e.isNumeric(a) ? s >= o && s <= a && i.val(s) : e.isNumeric(o) && !e.isNumeric(a) ? s >= o && i.val(s) : !e.isNumeric(o) && e.isNumeric(a) ? s <= a && i.val(s) : i.val(s);
          };

          l.is(".disabled") || (l.on("mousedown", "div.jq-number__spin", function () {
            var t = e(this);
            n(t), r = setTimeout(function () {
              c = setInterval(function () {
                n(t);
              }, 40);
            }, 350);
          }).on("mouseup mouseout", "div.jq-number__spin", function () {
            clearTimeout(r), clearInterval(c);
          }).on("mouseup", "div.jq-number__spin", function () {
            i.change().trigger("input");
          }), i.on("focus.styler", function () {
            l.addClass("focused");
          }).on("blur.styler", function () {
            l.removeClass("focused");
          }));
        };

        n(), i.on("refresh", function () {
          i.off(".styler").closest(".jq-number").before(i).remove(), n();
        });
      } else if (i.is("select")) {
        var f = function f() {
          function d(e) {
            var t = e.prop("scrollHeight") - e.outerHeight(),
                s = null,
                i = null;
            e.off("mousewheel DOMMouseScroll").on("mousewheel DOMMouseScroll", function (l) {
              s = l.originalEvent.detail < 0 || l.originalEvent.wheelDelta > 0 ? 1 : -1, ((i = e.scrollTop()) >= t && s < 0 || i <= 0 && s > 0) && (l.stopPropagation(), l.preventDefault());
            });
          }

          function r() {
            for (var e = 0; e < c.length; e++) {
              var t = c.eq(e),
                  s = "",
                  i = "",
                  o = "",
                  a = "",
                  d = "",
                  r = "",
                  f = "",
                  h = "",
                  u = "";
              t.prop("selected") && (i = "selected sel"), t.is(":disabled") && (i = "disabled"), t.is(":selected:disabled") && (i = "selected sel disabled"), void 0 !== t.attr("id") && "" !== t.attr("id") && (a = ' id="' + t.attr("id") + l.idSuffix + '"'), void 0 !== t.attr("title") && "" !== c.attr("title") && (d = ' title="' + t.attr("title") + '"'), void 0 !== t.attr("class") && (f = " " + t.attr("class"), u = ' data-jqfs-class="' + t.attr("class") + '"');
              var p = t.data();

              for (var v in p) {
                "" !== p[v] && (r += " data-" + v + '="' + p[v] + '"');
              }

              i + f !== "" && (o = ' class="' + i + f + '"'), s = "<li" + u + r + o + d + a + ">" + t.html() + "</li>", t.parent().is("optgroup") && (void 0 !== t.parent().attr("class") && (h = " " + t.parent().attr("class")), s = "<li" + u + r + ' class="' + i + f + " option" + h + '"' + d + a + ">" + t.html() + "</li>", t.is(":first-child") && (s = '<li class="optgroup' + h + '">' + t.parent().attr("label") + "</li>" + s)), n += s;
            }
          }

          var c = e("option", i),
              n = "";

          if (i.is("[multiple]")) {
            if (a || o) return;
            !function () {
              var s = new t(),
                  l = e('<div class="jq-select-multiple jqselect"></div>').attr({
                id: s.id,
                title: s.title
              }).addClass(s.classes).data(s.data);
              i.after(l), r(), l.append("<ul>" + n + "</ul>");
              var o = e("ul", l),
                  a = e("li", l),
                  f = i.attr("size"),
                  h = o.outerHeight(),
                  u = a.outerHeight();
              void 0 !== f && f > 0 ? o.css({
                height: u * f
              }) : o.css({
                height: 4 * u
              }), h > l.height() && (o.css("overflowY", "scroll"), d(o), a.filter(".selected").length && o.scrollTop(o.scrollTop() + a.filter(".selected").position().top)), i.prependTo(l), i.is(":disabled") ? (l.addClass("disabled"), c.each(function () {
                e(this).is(":selected") && a.eq(e(this).index()).addClass("selected");
              })) : (a.filter(":not(.disabled):not(.optgroup)").click(function (t) {
                i.focus();
                var s = e(this);

                if (t.ctrlKey || t.metaKey || s.addClass("selected"), t.shiftKey || s.addClass("first"), t.ctrlKey || t.metaKey || t.shiftKey || s.siblings().removeClass("selected first"), (t.ctrlKey || t.metaKey) && (s.is(".selected") ? s.removeClass("selected first") : s.addClass("selected first"), s.siblings().removeClass("first")), t.shiftKey) {
                  var l = !1,
                      o = !1;
                  s.siblings().removeClass("selected").siblings(".first").addClass("selected"), s.prevAll().each(function () {
                    e(this).is(".first") && (l = !0);
                  }), s.nextAll().each(function () {
                    e(this).is(".first") && (o = !0);
                  }), l && s.prevAll().each(function () {
                    if (e(this).is(".selected")) return !1;
                    e(this).not(".disabled, .optgroup").addClass("selected");
                  }), o && s.nextAll().each(function () {
                    if (e(this).is(".selected")) return !1;
                    e(this).not(".disabled, .optgroup").addClass("selected");
                  }), 1 == a.filter(".selected").length && s.addClass("first");
                }

                c.prop("selected", !1), a.filter(".selected").each(function () {
                  var t = e(this),
                      s = t.index();
                  t.is(".option") && (s -= t.prevAll(".optgroup").length), c.eq(s).prop("selected", !0);
                }), i.change();
              }), c.each(function (t) {
                e(this).data("optionIndex", t);
              }), i.on("change.styler", function () {
                a.removeClass("selected");
                var t = [];
                c.filter(":selected").each(function () {
                  t.push(e(this).data("optionIndex"));
                }), a.not(".optgroup").filter(function (s) {
                  return e.inArray(s, t) > -1;
                }).addClass("selected");
              }).on("focus.styler", function () {
                l.addClass("focused");
              }).on("blur.styler", function () {
                l.removeClass("focused");
              }), h > l.height() && i.on("keydown.styler", function (e) {
                38 != e.which && 37 != e.which && 33 != e.which || o.scrollTop(o.scrollTop() + a.filter(".selected").position().top - u), 40 != e.which && 39 != e.which && 34 != e.which || o.scrollTop(o.scrollTop() + a.filter(".selected:last").position().top - o.innerHeight() + 2 * u);
              }));
            }();
          } else !function () {
            var a = new t(),
                f = "",
                h = i.data("placeholder"),
                u = i.data("search"),
                p = i.data("search-limit"),
                v = i.data("search-not-found"),
                m = i.data("search-placeholder"),
                g = i.data("smart-positioning");
            void 0 === h && (h = l.selectPlaceholder), void 0 !== u && "" !== u || (u = l.selectSearch), void 0 !== p && "" !== p || (p = l.selectSearchLimit), void 0 !== v && "" !== v || (v = l.selectSearchNotFound), void 0 === m && (m = l.selectSearchPlaceholder), void 0 !== g && "" !== g || (g = l.selectSmartPositioning);
            var b = e('<div class="jq-selectbox jqselect"><div class="jq-selectbox__select"><div class="jq-selectbox__select-text"></div><div class="jq-selectbox__trigger"><div class="jq-selectbox__trigger-arrow"></div></div></div></div>').attr({
              id: a.id,
              title: a.title
            }).addClass(a.classes).data(a.data);
            i.after(b).prependTo(b);
            var C = b.css("z-index");
            C = C > 0 ? C : 1;
            var x = e("div.jq-selectbox__select", b),
                y = e("div.jq-selectbox__select-text", b),
                w = c.filter(":selected");
            r(), u && (f = '<div class="jq-selectbox__search"><input type="search" autocomplete="off" placeholder="' + m + '"></div><div class="jq-selectbox__not-found">' + v + "</div>");
            var q = e('<div class="jq-selectbox__dropdown">' + f + "<ul>" + n + "</ul></div>");
            b.append(q);

            var _ = e("ul", q),
                j = e("li", q),
                k = e("input", q),
                S = e("div.jq-selectbox__not-found", q).hide();

            j.length < p && k.parent().hide(), "" === c.first().text() && c.first().is(":selected") && !1 !== h ? y.text(h).addClass("placeholder") : y.text(w.text());
            var T = 0,
                N = 0;
            if (j.css({
              display: "inline-block"
            }), j.each(function () {
              var t = e(this);
              t.innerWidth() > T && (T = t.innerWidth(), N = t.width());
            }), j.css({
              display: ""
            }), y.is(".placeholder") && y.width() > T) y.width(y.width());else {
              var P = b.clone().appendTo("body").width("auto"),
                  H = P.outerWidth();
              P.remove(), H == b.outerWidth() && y.width(N);
            }
            T > b.width() && q.width(T), "" === c.first().text() && "" !== i.data("placeholder") && j.first().hide();

            var A = b.outerHeight(!0),
                D = k.parent().outerHeight(!0) || 0,
                I = _.css("max-height"),
                K = j.filter(".selected");

            if (K.length < 1 && j.first().addClass("selected sel"), void 0 === j.data("li-height")) {
              var O = j.outerHeight();
              !1 !== h && (O = j.eq(1).outerHeight()), j.data("li-height", O);
            }

            var M = q.css("top");
            if ("auto" == q.css("left") && q.css({
              left: 0
            }), "auto" == q.css("top") && (q.css({
              top: A
            }), M = A), q.hide(), K.length && (c.first().text() != w.text() && b.addClass("changed"), b.data("jqfs-class", K.data("jqfs-class")), b.addClass(K.data("jqfs-class"))), i.is(":disabled")) return b.addClass("disabled"), !1;
            x.click(function () {
              if (e("div.jq-selectbox").filter(".opened").length && l.onSelectClosed.call(e("div.jq-selectbox").filter(".opened")), i.focus(), !o) {
                var t = e(window),
                    s = j.data("li-height"),
                    a = b.offset().top,
                    r = t.height() - A - (a - t.scrollTop()),
                    n = i.data("visible-options");
                void 0 !== n && "" !== n || (n = l.selectVisibleOptions);
                var f = 5 * s,
                    h = s * n;
                n > 0 && n < 6 && (f = h), 0 === n && (h = "auto");

                var u = function u() {
                  q.height("auto").css({
                    bottom: "auto",
                    top: M
                  });

                  var e = function e() {
                    _.css("max-height", Math.floor((r - 20 - D) / s) * s);
                  };

                  e(), _.css("max-height", h), "none" != I && _.css("max-height", I), r < q.outerHeight() + 20 && e();
                };

                !0 === g || 1 === g ? r > f + D + 20 ? (u(), b.removeClass("dropup").addClass("dropdown")) : (function () {
                  q.height("auto").css({
                    top: "auto",
                    bottom: M
                  });

                  var e = function e() {
                    _.css("max-height", Math.floor((a - t.scrollTop() - 20 - D) / s) * s);
                  };

                  e(), _.css("max-height", h), "none" != I && _.css("max-height", I), a - t.scrollTop() - 20 < q.outerHeight() + 20 && e();
                }(), b.removeClass("dropdown").addClass("dropup")) : !1 === g || 0 === g ? r > f + D + 20 && (u(), b.removeClass("dropup").addClass("dropdown")) : (q.height("auto").css({
                  bottom: "auto",
                  top: M
                }), _.css("max-height", h), "none" != I && _.css("max-height", I)), b.offset().left + q.outerWidth() > t.width() && q.css({
                  left: "auto",
                  right: 0
                }), e("div.jqselect").css({
                  zIndex: C - 1
                }).removeClass("opened"), b.css({
                  zIndex: C
                }), q.is(":hidden") ? (e("div.jq-selectbox__dropdown:visible").hide(), q.show(), b.addClass("opened focused"), l.onSelectOpened.call(b)) : (q.hide(), b.removeClass("opened dropup dropdown"), e("div.jq-selectbox").filter(".opened").length && l.onSelectClosed.call(b)), k.length && (k.val("").keyup(), S.hide(), k.keyup(function () {
                  var t = e(this).val();
                  j.each(function () {
                    e(this).html().match(new RegExp(".*?" + t + ".*?", "i")) ? e(this).show() : e(this).hide();
                  }), "" === c.first().text() && "" !== i.data("placeholder") && j.first().hide(), j.filter(":visible").length < 1 ? S.show() : S.hide();
                })), j.filter(".selected").length && ("" === i.val() ? _.scrollTop(0) : (_.innerHeight() / s % 2 != 0 && (s /= 2), _.scrollTop(_.scrollTop() + j.filter(".selected").position().top - _.innerHeight() / 2 + s))), d(_);
              }
            }), j.hover(function () {
              e(this).siblings().removeClass("selected");
            });
            var W = j.filter(".selected").text();
            j.filter(":not(.disabled):not(.optgroup)").click(function () {
              i.focus();
              var t = e(this),
                  s = t.text();

              if (!t.is(".selected")) {
                var o = t.index();
                o -= t.prevAll(".optgroup").length, t.addClass("selected sel").siblings().removeClass("selected sel"), c.prop("selected", !1).eq(o).prop("selected", !0), W = s, y.text(s), b.data("jqfs-class") && b.removeClass(b.data("jqfs-class")), b.data("jqfs-class", t.data("jqfs-class")), b.addClass(t.data("jqfs-class")), i.change();
              }

              q.hide(), b.removeClass("opened dropup dropdown"), l.onSelectClosed.call(b);
            }), q.mouseout(function () {
              e("li.sel", q).addClass("selected");
            }), i.on("change.styler", function () {
              y.text(c.filter(":selected").text()).removeClass("placeholder"), j.removeClass("selected sel").not(".optgroup").eq(i[0].selectedIndex).addClass("selected sel"), c.first().text() != j.filter(".selected").text() ? b.addClass("changed") : b.removeClass("changed");
            }).on("focus.styler", function () {
              b.addClass("focused"), e("div.jqselect").not(".focused").removeClass("opened dropup dropdown").find("div.jq-selectbox__dropdown").hide();
            }).on("blur.styler", function () {
              b.removeClass("focused");
            }).on("keydown.styler keyup.styler", function (e) {
              var t = j.data("li-height");
              "" === i.val() ? y.text(h).addClass("placeholder") : y.text(c.filter(":selected").text()), j.removeClass("selected sel").not(".optgroup").eq(i[0].selectedIndex).addClass("selected sel"), 38 != e.which && 37 != e.which && 33 != e.which && 36 != e.which || ("" === i.val() ? _.scrollTop(0) : _.scrollTop(_.scrollTop() + j.filter(".selected").position().top)), 40 != e.which && 39 != e.which && 34 != e.which && 35 != e.which || _.scrollTop(_.scrollTop() + j.filter(".selected").position().top - _.innerHeight() + t), 13 == e.which && (e.preventDefault(), q.hide(), b.removeClass("opened dropup dropdown"), l.onSelectClosed.call(b));
            }).on("keydown.styler", function (e) {
              32 == e.which && (e.preventDefault(), x.click());
            }), s.registered || (e(document).on("click", s), s.registered = !0);
          }();
        };

        f(), i.on("refresh", function () {
          i.off(".styler").parent().before(i).remove(), f();
        });
      } else i.is(":reset") && i.on("click", function () {
        setTimeout(function () {
          i.closest("form").find("input, select").trigger("refresh");
        }, 1);
      });
    },
    destroy: function destroy() {
      var t = e(this.element);
      t.is(":checkbox") || t.is(":radio") ? (t.removeData("_" + i).off(".styler refresh").removeAttr("style").parent().before(t).remove(), t.closest("label").add('label[for="' + t.attr("id") + '"]').off(".styler")) : t.is('input[type="number"]') ? t.removeData("_" + i).off(".styler refresh").closest(".jq-number").before(t).remove() : (t.is(":file") || t.is("select")) && t.removeData("_" + i).off(".styler refresh").removeAttr("style").parent().before(t).remove();
    }
  }, e.fn[i] = function (s) {
    var l = arguments;
    if (void 0 === s || "object" == _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(s)) return this.each(function () {
      e.data(this, "_" + i) || e.data(this, "_" + i, new t(this, s));
    }).promise().done(function () {
      var t = e(this[0]).data("_" + i);
      t && t.options.onFormStyled.call();
    }), this;

    if ("string" == typeof s && "_" !== s[0] && "init" !== s) {
      var o;
      return this.each(function () {
        var a = e.data(this, "_" + i);
        a instanceof t && "function" == typeof a[s] && (o = a[s].apply(a, Array.prototype.slice.call(l, 1)));
      }), void 0 !== o ? o : this;
    }
  }, s.registered = !1;
});
jquery__WEBPACK_IMPORTED_MODULE_1___default()(function () {
  if (document.querySelector('.page_act')) {
    jquery__WEBPACK_IMPORTED_MODULE_1___default()('.buy_tabs ul.tabs').delegate('li:not(.current)', 'click', function () {
      jquery__WEBPACK_IMPORTED_MODULE_1___default()(this).addClass('current').siblings().removeClass('current').parents('div.section').find('div.box').hide().eq(jquery__WEBPACK_IMPORTED_MODULE_1___default()(this).index()).animate({
        height: 'auto',
        width: 'auto',
        opacity: 'show'
      }, 'slow');

      function setEqualHeight(columns) {
        var tallestcolumn = 0;
        columns.each(function () {
          var currentHeight = jquery__WEBPACK_IMPORTED_MODULE_1___default()(this).height();

          if (currentHeight > tallestcolumn) {
            tallestcolumn = currentHeight;
          }
        });
        columns.height(tallestcolumn);
      }

      setTimeout(function () {
        jquery__WEBPACK_IMPORTED_MODULE_1___default()(document).ready(function () {
          setEqualHeight(jquery__WEBPACK_IMPORTED_MODULE_1___default()(".box__block--title"));
        });
      }, 2000);
    });
  } // Array.max = function(array) {
  //     return Math.max.apply(Math,array);
  // };
  // var heights = $('.box-wrap div.box').map(function() {
  //     return $(this).innerHeight();
  // }).get();
  // $(".box-wrap").height(Array.max(heights));


  jquery__WEBPACK_IMPORTED_MODULE_1___default()('input[type="number"]').styler();

  if (document.querySelector('.box-wrap [data-number] path')) {
    document.querySelector('.box-wrap [data-number] path').classList.remove('active');
    document.querySelector(".box-wrap [data-number] path:nth-child(".concat(jquery__WEBPACK_IMPORTED_MODULE_1___default()('.box-wrap [data-number]').data('number'), ")")).classList.add('active');
  }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module), __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./src/blocks/modules/din_in_page/din_in_page.js":
/*!*******************************************************!*\
  !*** ./src/blocks/modules/din_in_page/din_in_page.js ***!
  \*******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lightgallery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lightgallery */ "./node_modules/lightgallery/lightgallery.es5.js");


Object(lightgallery__WEBPACK_IMPORTED_MODULE_1__["default"])(document.getElementById('lightgallery'), {
  speed: 500,
  selector: 'a'
});
jquery__WEBPACK_IMPORTED_MODULE_0___default()(function () {
  if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).width() < 1040) {} else {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('#lg-close-1').appendTo('#lg-content-1');
  }
});

/***/ }),

/***/ "./src/blocks/modules/din_page/din_page.js":
/*!*************************************************!*\
  !*** ./src/blocks/modules/din_page/din_page.js ***!
  \*************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var slick_carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! slick-carousel */ "./node_modules/slick-carousel/slick/slick.js");
/* harmony import */ var slick_carousel__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(slick_carousel__WEBPACK_IMPORTED_MODULE_1__);


jquery__WEBPACK_IMPORTED_MODULE_0___default()(function () {
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.sls23').slick({
    dots: false,
    arrows: true,
    infinite: false,
    variableWidth: true,
    responsive: [{
      breakpoint: 640,
      settings: {
        variableWidth: false,
        arrows: false,
        dots: true
      }
    }]
  });

  if (document.querySelector('.din_page')) {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.din_tabs ul.tabs').delegate('li:not(.current)', 'click', function () {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).addClass('current').siblings().removeClass('current').parents('div.din_tabs').find('div.box').hide().eq(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).index()).animate({
        height: 'auto',
        width: 'auto',
        opacity: 'show'
      }, 'slow');
    });
  }
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

/***/ "./src/blocks/modules/floor_first/floor_first.js":
/*!*******************************************************!*\
  !*** ./src/blocks/modules/floor_first/floor_first.js ***!
  \*******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);

jquery__WEBPACK_IMPORTED_MODULE_0___default()(function () {
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.main_dop path.active').on('mouseenter', function () {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.hover_bl').addClass('active');
  });
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.main_dop path.active').on('mouseleave', function () {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.hover_bl').removeClass('active');
  });
});
jquery__WEBPACK_IMPORTED_MODULE_0___default()(function () {
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.main_head__center--sort').on('click', '.sort-js', function () {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).addClass('active').siblings().removeClass('active'); //   console.log($(this).data('corpse'));

    apartments.setCorpse(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).data('corpse')); //   $(this).closest('.main_head__center').find('.floor_center').removeClass('active').eq($(this).index()).addClass('active');
  });
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.main_head__center--sort').on('click', '.sort-js:nth-child(1)', function () {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).parents().find('.block_kompas').css('transform', 'rotate(-133deg)');
  });
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.main_head__center--sort').on('click', '.sort-js:nth-child(2)', function () {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).parents().find('.block_kompas').css('transform', 'rotate(-103deg)');
  });
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.main_head__center--sort').on('click', '.sort-js:nth-child(3)', function () {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).parents().find('.block_kompas').css('transform', 'rotate(-73deg)');
  });
});

/***/ }),

/***/ "./src/blocks/modules/floors/floors.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/floors/floors.js ***!
  \*********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_4__);





jquery__WEBPACK_IMPORTED_MODULE_4___default()(function () {
  var Apartments = /*#__PURE__*/function () {
    function Apartments(_ref) {
      var apartmentsLink = _ref.apartmentsLink,
          filtersLink = _ref.filtersLink;

      _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, Apartments);

      this.apartmentsLink = apartmentsLink;
      this.filtersLink = filtersLink;
      this.apartments = null;
      this.filters = null;
      this.url = window.location.pathname;
      this.urlObject = null;
      this.floor = 2;
      this.corpse = 0;
      this.rooms = 1;
      this.view = 0;
    }

    _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(Apartments, [{
      key: "getApartments",
      value: function getApartments() {
        var _this = this;

        jquery__WEBPACK_IMPORTED_MODULE_4___default.a.ajax({
          url: this.apartmentsLink,
          success: function success(data) {
            _this.apartments = JSON.parse(data).apartments; // this.apartments = data.apartments;

            jquery__WEBPACK_IMPORTED_MODULE_4___default.a.ajax({
              url: _this.filtersLink,
              success: function success(result) {
                _this.filters = result.filter;
                console.log(_this.filters);

                _this.addAttributes();

                _this.parseUrl();

                _this.addFloorChanger();

                _this.addRoomsChanger();

                _this.addViewsChanger();

                _this.addCorpseChanger();

                setTimeout(function () {
                  _this.setRooms(_this.rooms);

                  _this.setView(_this.view);

                  _this.setFloor(_this.floor);

                  _this.setCorpse(_this.corpse);
                }, 500);
              }
            });
          }
        });
      }
    }, {
      key: "addAttributes",
      value: function addAttributes() {
        var _this2 = this;

        this.apartments.forEach(function (item) {
          // console.log(item);
          switch (item.corpus) {
            case 'Madison':
              var rect = document.querySelector("[data-corpse=\"1\"][data-floor*=\"-".concat(item.floor, "-\"] [data-position=\"").concat(item.position, "\"]"));
              break;

            case 'Manhattan':
              var rect = document.querySelector("[data-corpse=\"2\"][data-floor*=\"-".concat(item.floor, "-\"] [data-position=\"").concat(item.position, "\"]"));
              break;

            case 'Soho':
              var rect = document.querySelector("[data-corpse=\"3\"][data-floor*=\"-".concat(item.floor, "-\"] [data-position=\"").concat(item.position, "\"]"));
              break;
          }

          if (jquery__WEBPACK_IMPORTED_MODULE_4___default()(rect).length && !jquery__WEBPACK_IMPORTED_MODULE_4___default()(rect).hasClass('active')) {
            _this2.addClickHandler(rect);

            jquery__WEBPACK_IMPORTED_MODULE_4___default()(rect).on('mouseenter', function () {
              _this2.showInfo(rect, item);
            });
            jquery__WEBPACK_IMPORTED_MODULE_4___default()(rect).on('mouseleave', function () {
              _this2.hideInfo(rect);
            });
            jquery__WEBPACK_IMPORTED_MODULE_4___default()(rect).attr('data-area', item.area).attr('data-rooms', item.rooms).attr('data-price', item.price).attr('data-number', item.number).attr('data-link', item.link).attr('data-window_view', item.window_view).addClass('active').closest('.floor_center__svg').prepend("<div class=\"apart_popup n2-19-2050 act_vis3\" style=\"top:".concat(rect.getBoundingClientRect().top + rect.getBoundingClientRect().height / 2 - rect.closest('.floor_center__svg').getBoundingClientRect().top, "px;left:").concat(rect.getBoundingClientRect().left + rect.getBoundingClientRect().width / 2 - rect.closest('.floor_center__svg').getBoundingClientRect().left, "px;\"><div class=\"value\">").concat(item.area, "<span>\u043C<sup>2</sup></span></div></div>"));
          }
        });
      }
    }, {
      key: "getUrl",
      value: function getUrl() {
        return new Promise(function (resolve, reject) {
          resolve(window.location.pathname);
        });
      }
    }, {
      key: "setUrl",
      value: function setUrl(_ref2) {
        var state = _ref2.state,
            title = _ref2.title,
            url = _ref2.url;
        window.history.pushState(state, title, window.location.origin + '/' + url + '/'); // if ((this.filters.section[this.corpse].NAME).toLowerCase() !== this.urlObject[2].toLowe)

        jquery__WEBPACK_IMPORTED_MODULE_4___default()("svg:not([data-corpse=\"".concat(this.corpse + 1, "\"][data-floor*=\"-").concat(this.floor, "-\"])")).closest('.floor_center--item_wrap').css({
          display: 'none'
        });
        jquery__WEBPACK_IMPORTED_MODULE_4___default()("[data-corpse=\"".concat(this.corpse + 1, "\"][data-floor*=\"-").concat(this.floor, "-\"]")).closest('.floor_center--item_wrap').css({
          display: 'block'
        });
      }
    }, {
      key: "parseUrl",
      value: function () {
        var _parseUrl = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee() {
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return this.getUrl();

                case 2:
                  this.url = _context.sent;
                  this.urlObject = this.url.split('/');
                  this.setUrl({
                    state: "Apartments",
                    title: this.filters.section[this.corpse].NAME,
                    url: "floor/".concat(this.filters.section[this.corpse].NAME.toLowerCase(), "/").concat(this.floor)
                  });

                case 5:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        function parseUrl() {
          return _parseUrl.apply(this, arguments);
        }

        return parseUrl;
      }()
    }, {
      key: "setFloor",
      value: function setFloor(floor) {
        if (floor > 20 || floor < 2) return;
        this.floor = floor;
        jquery__WEBPACK_IMPORTED_MODULE_4___default()('.floor_changer .value').text(this.floor);
        this.parseUrl();
        this.setRooms(this.rooms);
        this.setView(this.view);
      }
    }, {
      key: "addFloorChanger",
      value: function addFloorChanger() {
        var _this3 = this;

        jquery__WEBPACK_IMPORTED_MODULE_4___default()('.floor_changer').on('click', '.next', /*#__PURE__*/_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee2() {
          var curFloor;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  curFloor = _this3.floor;
                  console.log(curFloor);

                  _this3.setFloor(++curFloor);

                case 3:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2);
        })));
        jquery__WEBPACK_IMPORTED_MODULE_4___default()('.floor_changer').on('click', '.prev', /*#__PURE__*/_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee3() {
          var curFloor;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  curFloor = _this3.floor;
                  console.log(curFloor);

                  _this3.setFloor(--curFloor);

                case 3:
                case "end":
                  return _context3.stop();
              }
            }
          }, _callee3);
        })));
      }
    }, {
      key: "setRooms",
      value: function setRooms(rooms) {
        console.log('rooms');
        if (rooms < +this.filters.minRooms || rooms > +this.filters.maxRooms) return;
        this.rooms = rooms;
        jquery__WEBPACK_IMPORTED_MODULE_4___default()('.rooms_changer .value').text(this.rooms);
        this.parseUrl();
        jquery__WEBPACK_IMPORTED_MODULE_4___default()('.floor_center--item_wrap[style="display: block;"]').find('[data-position]').removeClass('active');
        jquery__WEBPACK_IMPORTED_MODULE_4___default()('.floor_center--item_wrap[style="display: block;"]').find('.apart_popup').remove();
        jquery__WEBPACK_IMPORTED_MODULE_4___default()(".floor_center--item_wrap[style=\"display: block;\"] [data-rooms=\"".concat(this.rooms, "\"][data-window_view*=\"").concat(this.filters.windowsView[this.view], "\"]")).addClass('active');
        jquery__WEBPACK_IMPORTED_MODULE_4___default()(".floor_center--item_wrap[style=\"display: block;\"] [data-rooms=\"".concat(this.rooms, "\"].active")).each(function () {
          console.log(jquery__WEBPACK_IMPORTED_MODULE_4___default()(this));
          var self = jquery__WEBPACK_IMPORTED_MODULE_4___default()(this);
          jquery__WEBPACK_IMPORTED_MODULE_4___default()(this).closest('.floor_center__svg').prepend("<div class=\"apart_popup n2-19-2050 act_vis3\" style=\"top: ".concat(self.offset().top - jquery__WEBPACK_IMPORTED_MODULE_4___default()(this).closest('.floor_center__svg').offset().top + self.innerHeight() / 3, "px; left: ").concat(self.offset().left - jquery__WEBPACK_IMPORTED_MODULE_4___default()(this).closest('.floor_center__svg').offset().left + self.innerWidth() / 3, "px\"><div class=\"value\">").concat(self.data('area'), "<span>\u043C<sup>2</sup></span></div></div>"));
        });
      }
    }, {
      key: "showInfo",
      value: function showInfo(item, attributes) {
        console.log(jquery__WEBPACK_IMPORTED_MODULE_4___default()(item));
        jquery__WEBPACK_IMPORTED_MODULE_4___default()(item).closest('.floor_center').append("<div class=\"hover_bl\">\n            <div class=\"hover_bl__block\">\n                <div class=\"hover_bl__block--title\">\u041D\u043E\u043C\u0435\u0440 <br>\n                    \u0430\u043F\u0430\u0440\u0442\u0430\u043C\u0435\u043D\u0442\u0430</div>\n                <div class=\"hover_bl__block--text\">".concat(attributes.number, "</div>\n            </div>\n            <div class=\"hover_bl__block\">\n                <div class=\"hover_bl__block--title\">\u041A\u043E\u043C\u043D\u0430\u0442</div>\n                <div class=\"hover_bl__block--text\">").concat(attributes.rooms, "</div>\n            </div>\n            <div class=\"hover_bl__block\">\n                <div class=\"hover_bl__block--title\">\u041F\u043B\u043E\u0449\u0430\u0434\u044C, \u043C<sup>2</sup></div>\n                <div class=\"hover_bl__block--text\">").concat(attributes.area, "</div>\n            </div>\n            <div class=\"hover_bl__block\">\n                <div class=\"hover_bl__block--title\">\u0426\u0435\u043D\u0430 \n                    \u0431\u0435\u0437 \u043E\u0442\u0434\u0435\u043B\u043A\u0438, \u0440\u0443\u0431</div>\n                <div class=\"hover_bl__block--text\">").concat(attributes.price, "</div>\n            </div>\n        </div>"));
      }
    }, {
      key: "hideInfo",
      value: function hideInfo(item) {
        jquery__WEBPACK_IMPORTED_MODULE_4___default()(item).closest('.floor_center').find('.hover_bl').remove();
      }
    }, {
      key: "addRoomsChanger",
      value: function addRoomsChanger() {
        var _this4 = this;

        jquery__WEBPACK_IMPORTED_MODULE_4___default()('.rooms_changer').on('click', '.next', /*#__PURE__*/_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee4() {
          var curRooms;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee4$(_context4) {
            while (1) {
              switch (_context4.prev = _context4.next) {
                case 0:
                  curRooms = _this4.rooms;
                  console.log(curRooms);

                  _this4.setRooms(++curRooms);

                case 3:
                case "end":
                  return _context4.stop();
              }
            }
          }, _callee4);
        })));
        jquery__WEBPACK_IMPORTED_MODULE_4___default()('.rooms_changer').on('click', '.prev', /*#__PURE__*/_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee5() {
          var curRooms;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee5$(_context5) {
            while (1) {
              switch (_context5.prev = _context5.next) {
                case 0:
                  curRooms = _this4.rooms;
                  console.log(curRooms);

                  _this4.setRooms(--curRooms);

                case 3:
                case "end":
                  return _context5.stop();
              }
            }
          }, _callee5);
        })));
      }
    }, {
      key: "setView",
      value: function setView(viewId) {
        if (viewId < 0 || viewId > +this.filters.windowsView.length) return;
        this.view = viewId;
        jquery__WEBPACK_IMPORTED_MODULE_4___default()('.views_changer .value').text(this.filters.windowsView[this.view]);
        this.parseUrl();
        jquery__WEBPACK_IMPORTED_MODULE_4___default()('.floor_center--item_wrap[style="display: block;"]').find('[data-position]').removeClass('active');
        jquery__WEBPACK_IMPORTED_MODULE_4___default()('.floor_center--item_wrap[style="display: block;"]').find('.apart_popup').remove();
        jquery__WEBPACK_IMPORTED_MODULE_4___default()(".floor_center--item_wrap[style=\"display: block;\"] [data-rooms=\"".concat(this.rooms, "\"][data-window_view*=\"").concat(this.filters.windowsView[this.view], "\"]")).addClass('active');
        jquery__WEBPACK_IMPORTED_MODULE_4___default()(".floor_center--item_wrap[style=\"display: block;\"] [data-rooms=\"".concat(this.rooms, "\"].active")).each(function () {
          console.log(jquery__WEBPACK_IMPORTED_MODULE_4___default()(this));
          var self = jquery__WEBPACK_IMPORTED_MODULE_4___default()(this);
          jquery__WEBPACK_IMPORTED_MODULE_4___default()(this).closest('.floor_center__svg').prepend("<div class=\"apart_popup n2-19-2050 act_vis3\" style=\"top: ".concat(self.offset().top - jquery__WEBPACK_IMPORTED_MODULE_4___default()(this).closest('.floor_center__svg').offset().top + self.innerHeight() / 3, "px; left: ").concat(self.offset().left - jquery__WEBPACK_IMPORTED_MODULE_4___default()(this).closest('.floor_center__svg').offset().left + self.innerWidth() / 3, "px\"><div class=\"value\">").concat(self.data('area'), "<span>\u043C<sup>2</sup></span></div></div>"));
        });
      }
    }, {
      key: "addViewsChanger",
      value: function addViewsChanger() {
        var _this5 = this;

        jquery__WEBPACK_IMPORTED_MODULE_4___default()('.views_changer').on('click', '.next', /*#__PURE__*/_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee6() {
          var curView;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee6$(_context6) {
            while (1) {
              switch (_context6.prev = _context6.next) {
                case 0:
                  curView = _this5.view;
                  console.log(curView);

                  _this5.setView(++curView);

                case 3:
                case "end":
                  return _context6.stop();
              }
            }
          }, _callee6);
        })));
        jquery__WEBPACK_IMPORTED_MODULE_4___default()('.views_changer').on('click', '.prev', /*#__PURE__*/_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee7() {
          var curView;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee7$(_context7) {
            while (1) {
              switch (_context7.prev = _context7.next) {
                case 0:
                  curView = _this5.view;
                  console.log(curView);

                  _this5.setView(--curView);

                case 3:
                case "end":
                  return _context7.stop();
              }
            }
          }, _callee7);
        })));
      }
    }, {
      key: "setCorpse",
      value: function setCorpse(corpse) {
        if (corpse < 0 || corpse > this.filters.section.length - 1) return;
        this.corpse = corpse;
        jquery__WEBPACK_IMPORTED_MODULE_4___default()('.sort-js').removeClass('active');
        jquery__WEBPACK_IMPORTED_MODULE_4___default()(".sort-js[data-corpse=\"".concat(this.corpse, "\"]")).addClass('active');
        jquery__WEBPACK_IMPORTED_MODULE_4___default()('.corpse_changer .value').text(this.filters.section[this.corpse].NAME);
        this.parseUrl();
        this.setRooms(this.rooms);
        this.setView(this.view);
        console.log(this.rooms);
      }
    }, {
      key: "addCorpseChanger",
      value: function addCorpseChanger() {
        var _this6 = this;

        jquery__WEBPACK_IMPORTED_MODULE_4___default()('.corpse_changer').on('click', '.next', /*#__PURE__*/_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee8() {
          var curCorpse;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee8$(_context8) {
            while (1) {
              switch (_context8.prev = _context8.next) {
                case 0:
                  curCorpse = _this6.corpse;
                  console.log(curCorpse);

                  _this6.setCorpse(++curCorpse);

                case 3:
                case "end":
                  return _context8.stop();
              }
            }
          }, _callee8);
        })));
        jquery__WEBPACK_IMPORTED_MODULE_4___default()('.corpse_changer').on('click', '.prev', /*#__PURE__*/_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee9() {
          var curCorpse;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee9$(_context9) {
            while (1) {
              switch (_context9.prev = _context9.next) {
                case 0:
                  curCorpse = _this6.corpse;
                  console.log(curCorpse);

                  _this6.setCorpse(--curCorpse);

                case 3:
                case "end":
                  return _context9.stop();
              }
            }
          }, _callee9);
        })));
      }
    }, {
      key: "addClickHandler",
      value: function addClickHandler(item) {
        jquery__WEBPACK_IMPORTED_MODULE_4___default()(item).click(function () {
          window.location.href = jquery__WEBPACK_IMPORTED_MODULE_4___default()(item).attr('data-link'); // console.log($(item).attr('data-link'));
        });
      }
    }, {
      key: "init",
      value: function init() {
        if (!jquery__WEBPACK_IMPORTED_MODULE_4___default()('.floor_center--item_wrap').length) return;

        if (this.url.split('/')[2] && this.url.split('/')[3]) {
          console.log(this.url.split('/'));

          if (this.url.split('/')[2] == 'madison') {
            this.corpse = 0;
          } else if (this.url.split('/')[2] == 'manhattan' || this.url.split('/')[2] == 'manhatten') {
            this.corpse = 1;
          } else {
            this.corpse = 2;
          }

          this.floor = this.url.split('/')[3];
        }

        this.getApartments();
      }
    }]);

    return Apartments;
  }();

  window.apartments = new Apartments({
    apartmentsLink: '/ajax/floor.php',
    filtersLink: '/local/templates/main/assets/html/dist/static/filter.json'
  }); // window.apartments = new Apartments({
  //     apartmentsLink: '/static/apartments.json',
  //     filtersLink: '/static/filter.json'
  // });

  apartments.init();
});

/***/ }),

/***/ "./src/blocks/modules/footer/footer.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/footer/footer.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/blocks/modules/gal_blocks/gal_blocks.js":
/*!*****************************************************!*\
  !*** ./src/blocks/modules/gal_blocks/gal_blocks.js ***!
  \*****************************************************/
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
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var slick_carousel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! slick-carousel */ "./node_modules/slick-carousel/slick/slick.js");
/* harmony import */ var slick_carousel__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(slick_carousel__WEBPACK_IMPORTED_MODULE_2__);



jquery__WEBPACK_IMPORTED_MODULE_1___default()(function () {
  var _$slickElement$slick;

  var $status = jquery__WEBPACK_IMPORTED_MODULE_1___default()('.pagingInfo');
  var $slickElement = jquery__WEBPACK_IMPORTED_MODULE_1___default()('.kladovie_blocks-js');
  $slickElement.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
    var i = '0' + ((currentSlide ? currentSlide : 0) + 1);
    $status.html(i + '<span>' + '0' + slick.slideCount + '</span>');
  });
  $slickElement.slick((_$slickElement$slick = {
    // slide: '.kladovie_blocks__block',
    autoplay: true,
    dots: true,
    infinite: false
  }, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_$slickElement$slick, "autoplay", true), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_$slickElement$slick, "autoplaySpeed", 2500), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_$slickElement$slick, "slidesToShow", 3), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_$slickElement$slick, "responsive", [{
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

  if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('[name="SIMPLE_FORM_2"]').length) {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('[name="SIMPLE_FORM_2"]').submit(function (event) {
      event.preventDefault();
      form_submit('[name="SIMPLE_FORM_2"]', function (result) {
        console.log(result);

        if (result.SUCCESS) {
          jquery__WEBPACK_IMPORTED_MODULE_0___default()('[name="SIMPLE_FORM_2"]').find('label').fadeOut();
          jquery__WEBPACK_IMPORTED_MODULE_0___default()('[name="SIMPLE_FORM_2"]').find('.form-wrapper__btns').fadeOut();
          jquery__WEBPACK_IMPORTED_MODULE_0___default()('[name="SIMPLE_FORM_2"]').closest('.form-wrapper-inner').find('.form-wrapper__subtitle').fadeOut();
          jquery__WEBPACK_IMPORTED_MODULE_0___default()('[name="SIMPLE_FORM_2"]').closest('.form-wrapper-inner').find('.form-wrapper__title').html(result.SUCCESS);
        }
      });
    });
  }
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

/***/ "./src/blocks/modules/komc_blocks/komc_blocks.js":
/*!*******************************************************!*\
  !*** ./src/blocks/modules/komc_blocks/komc_blocks.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/blocks/modules/komc_first/komc_first.js":
/*!*****************************************************!*\
  !*** ./src/blocks/modules/komc_first/komc_first.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/blocks/modules/komc_in_white/komc_in_white.js":
/*!***********************************************************!*\
  !*** ./src/blocks/modules/komc_in_white/komc_in_white.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



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
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);

jquery__WEBPACK_IMPORTED_MODULE_0___default()(function () {
  if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('[name="SIMPLE_FORM_3"]').length) {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('[name="SIMPLE_FORM_3"]').submit(function (event) {
      event.preventDefault();
      form_submit('[name="SIMPLE_FORM_3"]', function (result) {
        console.log(result);

        if (result.SUCCESS) {
          jquery__WEBPACK_IMPORTED_MODULE_0___default()('[name="SIMPLE_FORM_3"]').find('label').fadeOut();
          jquery__WEBPACK_IMPORTED_MODULE_0___default()('[name="SIMPLE_FORM_3"]').find('.form-wrapper__btns').fadeOut();
          jquery__WEBPACK_IMPORTED_MODULE_0___default()('[name="SIMPLE_FORM_3"]').closest('.form-wrapper-inner').find('.form-wrapper__subtitle').fadeOut();
          jquery__WEBPACK_IMPORTED_MODULE_0___default()('[name="SIMPLE_FORM_3"]').closest('.form-wrapper-inner').find('.form-wrapper__title').html(result.SUCCESS);
        }
      });
    });
  }

  if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('[name="SIMPLE_FORM_4"]').length) {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('[name="SIMPLE_FORM_4"]').submit(function (event) {
      event.preventDefault();
      form_submit('[name="SIMPLE_FORM_4"]', function (result) {
        console.log(result);

        if (result.SUCCESS) {
          jquery__WEBPACK_IMPORTED_MODULE_0___default()('[name="SIMPLE_FORM_4"]').find('label').fadeOut();
          jquery__WEBPACK_IMPORTED_MODULE_0___default()('[name="SIMPLE_FORM_4"]').find('.form-wrapper__btns').fadeOut();
          jquery__WEBPACK_IMPORTED_MODULE_0___default()('[name="SIMPLE_FORM_4"]').closest('.form-wrapper-inner').find('.form-wrapper__subtitle').fadeOut();
          jquery__WEBPACK_IMPORTED_MODULE_0___default()('[name="SIMPLE_FORM_4"]').closest('.form-wrapper-inner').find('.form-wrapper__title').html(result.SUCCESS);
        }
      });
    });
  }
});

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
  if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-range-slider').length && ionSliderOptions) {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-range-slider').ionRangeSlider(ionSliderOptions);
  }

  if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-range-slider2').length && ionSliderOptions2) {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-range-slider2').ionRangeSlider(ionSliderOptions2);
  }

  if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-range-slider3').length && ionSliderOptions3) {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-range-slider3').ionRangeSlider(ionSliderOptions3);
  }

  if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-range-slider4').length && ionSliderOptions4) {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-range-slider4').ionRangeSlider(ionSliderOptions4);
  }

  jquery__WEBPACK_IMPORTED_MODULE_0___default()('#SvgjsPath1027').on('click', function () {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.show2').toggleClass('active');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).toggleClass('active');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).on('click', function (e) {
      if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).closest('#SvgjsPath1027').length || jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).closest('#SvgjsPath1027 path').length) return;
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.show2').removeClass('active');
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('#SvgjsPath1027').removeClass('active');
    });
  });
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('#SvgjsPath1025').on('click', function () {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.show1').toggleClass('active');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).toggleClass('active');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).on('click', function (e) {
      if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).closest('#SvgjsPath1025').length || jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).closest('#SvgjsPath1025 path').length) return;
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.show1').removeClass('active');
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('#SvgjsPath1025').removeClass('active');
    });
  });
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('#SvgjsPath1029').on('click', function () {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.show3').toggleClass('active');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).toggleClass('active');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).on('click', function (e) {
      if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).closest('#SvgjsPath1029').length || jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).closest('#SvgjsPath1029 path').length) return;
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.show3').removeClass('active');
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('#SvgjsPath1029').removeClass('active');
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

/***/ "./src/blocks/modules/params_blocks/params_blocks.js":
/*!***********************************************************!*\
  !*** ./src/blocks/modules/params_blocks/params_blocks.js ***!
  \***********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);

jquery__WEBPACK_IMPORTED_MODULE_0___default()(function () {
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.main_func__l--actions .switch').change(function () {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).toggleClass('active');
  });
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.table__title--block').on('click', function () {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).toggleClass('active');
  });
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.table__info--item').on('mouseenter', function () {
    var tops2 = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).position().top;
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.table__info--img').addClass('active').css('top', tops2);
  });
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.table__info--item').on('mouseleave', function () {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.table__info--img').removeClass('active');
  });
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.table__info--more div').on('click', function () {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.table__info--item').addClass('active');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).css('display', 'none');
  });
});

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
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);

jquery__WEBPACK_IMPORTED_MODULE_0___default()(function () {
  if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('[name="SIMPLE_FORM_1"]').length) {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('[name="SIMPLE_FORM_1"]').submit(function (event) {
      event.preventDefault();
      form_submit('[name="SIMPLE_FORM_1"]', function (result) {
        console.log(result);

        if (result.SUCCESS) {
          jquery__WEBPACK_IMPORTED_MODULE_0___default()('[name="SIMPLE_FORM_1"]').find('label').fadeOut();
          jquery__WEBPACK_IMPORTED_MODULE_0___default()('[name="SIMPLE_FORM_1"]').find('.form-wrapper__btns').fadeOut();
          jquery__WEBPACK_IMPORTED_MODULE_0___default()('[name="SIMPLE_FORM_1"]').closest('.form-wrapper-inner').find('.form-wrapper__subtitle').fadeOut();
          jquery__WEBPACK_IMPORTED_MODULE_0___default()('[name="SIMPLE_FORM_1"]').closest('.form-wrapper-inner').find('.form-wrapper__title').html(result.SUCCESS);
        }
      });
    });
  }
});

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
/* harmony import */ var _panzoom_panzoom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @panzoom/panzoom */ "./node_modules/@panzoom/panzoom/dist/panzoom.es.js");


jquery__WEBPACK_IMPORTED_MODULE_0___default()(function () {
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.place1').on('click', function () {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).toggleClass('active');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).parents('.parking_white__in').find('.plc1').toggleClass('active');

    if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).hasClass('komc_js')) {
      jquery__WEBPACK_IMPORTED_MODULE_0___default.a.ajax({
        url: '/ajax/commercial.php',
        data: {
          type: 'info'
        },
        method: 'POST',
        dataType: 'json',
        timeout: 30,
        async: true,
        enctype: "multipart/form-data",
        processData: true,
        scriptsRunFirst: true,
        emulateOnload: true,
        start: true,
        cache: false,
        success: function success(result) {
          callback(result);
        }
      });
    }
  });
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.place2').on('click', function () {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).toggleClass('active');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).parents('.parking_white__in').find('.plc2').toggleClass('active');
  });
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.place3').on('click', function () {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).toggleClass('active');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).parents('.parking_white__in').find('.plc3').toggleClass('active');
  });
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.place4').on('click', function () {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).toggleClass('active');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).parents('.parking_white__in').find('.plc4').toggleClass('active');
  });
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.plc2').on('click', function () {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.hover_bl').addClass('active');
    console.log(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).attr('id'));

    if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('#parking-place') && jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).attr('id')) {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('#parking-place').attr('value', jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).attr('id'));
    }

    if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('.plc2').hasClass('more')) {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.plc2').removeClass('more');
    } else {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).addClass('more');
    }

    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).addClass('more');
  });
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.plc4').on('click', function () {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.hover_bl').addClass('active');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.komc_in_white .plc2').removeClass('more');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.komc_in_white .plc1').removeClass('more');

    if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('#parking-place') && jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).attr('id')) {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('#parking-place').attr('value', jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).attr('id'));
    }

    if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('.plc4').hasClass('more')) {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.plc4').removeClass('more');
    } else {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).addClass('more');
    }

    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).addClass('more');
  });
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.komc_in_white .plc2').on('click', function () {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.hover_bl').addClass('active');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.komc_in_white .plc1').removeClass('more');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.komc_in_white .plc4').removeClass('more');

    if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('.komc_in_white .plc2').hasClass('more')) {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.komc_in_white .plc2').removeClass('more');
    } else {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).addClass('more');
    }

    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).addClass('more');
  });
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.komc_in_white .plc1').on('click', function () {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.hover_bl').addClass('active');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.komc_in_white .plc2').removeClass('more');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.komc_in_white .plc2').removeClass('more');

    if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('.komc_in_white .plc1').hasClass('more')) {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.komc_in_white .plc1').removeClass('more');
    } else {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).addClass('more');
    }

    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).addClass('more');
  });
  jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).on('click', function (e) {
    if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).closest('.hover_bl').length || jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).closest('.plc2.active').length || jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).closest('.form-wrapper').length || jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).closest('.plc4.active').length || jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).closest('.plc1.active').length) return;
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.hover_bl').removeClass('active');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.plc1').removeClass('more');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.plc2').removeClass('more');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.plc4').removeClass('more');
  });
});

if (document.querySelector('#panzoom-element')) {
  if (window.matchMedia("(max-width: 1023px)").matches) {
    var elem = document.getElementById('panzoom-element');
    var panzoom = Object(_panzoom_panzoom__WEBPACK_IMPORTED_MODULE_1__["default"])(elem, {
      maxScale: 5,
      startScale: 1
    });
    panzoom.pan(10, 10);
    panzoom.zoom(1, {
      animate: true
    }); // Panning and pinch zooming are bound automatically (unless disablePan is true).
    // There are several available methods for zooming
    // that can be bound on button clicks or mousewheel.

    var buttonIn = document.getElementById('zoomInButton');
    var buttonOut = document.getElementById('zoomOutButton');
    buttonIn.addEventListener('click', panzoom.zoomIn);
    buttonOut.addEventListener('click', panzoom.zoomOut);
  }
}

;
jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).on("click", ".block_park", function (e) {
  e.preventDefault();
  var id = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).attr('href');
  var top = jquery__WEBPACK_IMPORTED_MODULE_0___default()(id).offset().top; // получаем координаты блока

  jquery__WEBPACK_IMPORTED_MODULE_0___default()('body, html').animate({
    scrollTop: top
  }, 800); // плавно переходим к блоку
}); // $.ajax({
// 	url: '/item.json',         /* Куда пойдет запрос */
// 	method: 'get',             /* Метод передачи (post или get) */
// 	dataType: 'json',          /* Тип данных в ответе (xml, json, script, html). */
// 	success: function(data){   /* функция которая будет выполнена после успешного запроса.  */
//         data.forEach(item => {
//             if(item.isUnavailable && $(`[data-item-id="${item.id}"]`).length) {
//                 $(`[data-item-id="${item.id}"]`).addClass('dis');
//             }
//         })
// 	}
// });
// $("#form_park").submit(function(e) {
//     console.log(1);
//     e.preventDefault(); // avoid to execute the actual submit of the form.
//     var form = $(this);
//     var actionUrl = form.attr('action');
//     $.ajax({
//         type: "POST",
//         url: actionUrl,
//         data: form.serialize(), // serializes the form's elements.
//         success: function(data)
//         {
//           console.log(data); // show response from the php script.
//         }
//     });
// });

/***/ }),

/***/ "./src/blocks/modules/parking_white2/parking_white2.js":
/*!*************************************************************!*\
  !*** ./src/blocks/modules/parking_white2/parking_white2.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/blocks/modules/parking_white3/parking_white3.js":
/*!*************************************************************!*\
  !*** ./src/blocks/modules/parking_white3/parking_white3.js ***!
  \*************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);

jquery__WEBPACK_IMPORTED_MODULE_0___default()(function () {
  var corpse = 'madison';
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.dlc1').on('click', function () {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).addClass('active');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.park_form').addClass('active');

    if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('.dlc1').hasClass('active')) {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.dlc1').removeClass('active');
    } else {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).addClass('active');
    }

    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.dld1').addClass('active');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).addClass('active');
  });
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.building_id').click(function () {
    corpse = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).data('corpse-id');
  });
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.plc1[data-flat-id]').click(function () {
    var _this = this;

    jquery__WEBPACK_IMPORTED_MODULE_0___default.a.ajax({
      url: 'http://zorge-9.01sh.ru/ajax/commercial.php',
      method: "POST",
      data: {
        type: 'detail',
        corpus: corpse,
        name: jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).data('flat-id')
      },
      success: function success(result) {
        var data = JSON.parse(result);
        console.log(data);
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(_this).closest('.parking_white__in').find('.hover_bl').replaceWith("\n                    <div class=\"hover_bl\">\n                        <div class=\"hover_bl__block\">\n                            <div class=\"hover_bl__block--title\">\u041D\u043E\u043C\u0435\u0440 <br> \u043F\u043E\u043C\u0435\u0449\u0435\u043D\u0438\u044F \u0438 \u043A\u043E\u0440\u043F\u0443\u0441</div>\n                            <div class=\"hover_bl__block--text\">".concat(data.name, "</div>\n                        </div>\n                        <div class=\"hover_bl__block\">\n                            <div class=\"hover_bl__block--title\">\u041F\u043B\u043E\u0449\u0430\u0434\u044C <br> \u043F\u043E\u043C\u0435\u0449\u0435\u043D\u0438\u044F</div>\n                            <div class=\"hover_bl__block--text\">").concat(data.area, "</div>\n                        </div>\n                        <div class=\"hover_bl__block\">\n                            <div class=\"hover_bl__block--title\">\u0426\u0435\u043D\u0430</div>\n                            <div class=\"hover_bl__block--text\">").concat(data.price, "</div>\n                        </div>\n                        <div class=\"hover_bl__block\">\n                            <div class=\"hover_bl__block--link feedback\">\u041E\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u0437\u0430\u044F\u0432\u043A\u0443</div>\n                            <a href=\"#\" class=\"room_center__rl--li\">\n                                <div class=\"room_center__rl--img\"><img src=\"./img/sc4.png\" alt=\"\"></div>\n                                <div class=\"room_center__rl--title\">\u0421\u043A\u0430\u0447\u0430\u0442\u044C pdf</div>\n                            </a>\n                        </div>\n                    </div>\n                ")); // result.forEach(item => {
        //     console.log(item);
        // })
      }
    });
  });
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.load_data').click(function () {
    jquery__WEBPACK_IMPORTED_MODULE_0___default.a.ajax({
      url: '/ajax/commercial.php',
      method: "POST",
      data: {
        type: 'info',
        corpus: corpse
      },
      success: function success(result) {
        var data = JSON.parse(result);
        jquery__WEBPACK_IMPORTED_MODULE_0___default()('.plc1').removeClass('active');

        for (var i = 0; i < data.length; i++) {
          if (jquery__WEBPACK_IMPORTED_MODULE_0___default()("[data-flat-id=\"".concat(data[i], "\"]")).length) {
            jquery__WEBPACK_IMPORTED_MODULE_0___default()("[data-flat-id=\"".concat(data[i], "\"]")).addClass('active');
          }
        } // result.forEach(item => {
        //     console.log(item);
        // })

      }
    });
  });
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.dld1').on('click', function () {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.park_form').addClass('active');
  });
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.dlc2').on('click', function () {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).addClass('active');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.park_form2').addClass('active');

    if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('.dlc2').hasClass('active')) {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.dlc2').removeClass('active');
    } else {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).addClass('active');
    }

    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.dld2').addClass('active');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).addClass('active');
  });
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.dld2').on('click', function () {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.park_form2').addClass('active');
  });
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.dlc3').on('click', function () {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).addClass('active');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.park_form3').addClass('active');

    if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('.dlc3').hasClass('active')) {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.dlc3').removeClass('active');
    } else {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).addClass('active');
    }

    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.dld3').addClass('active');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).addClass('active');
  });
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.dld3').on('click', function () {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.park_form3').addClass('active');
  });
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.dlc4').on('click', function () {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).addClass('active');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.park_form4').addClass('active');

    if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('.dlc4').hasClass('active')) {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.dlc4').removeClass('active');
    } else {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).addClass('active');
    }

    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.dld4').addClass('active');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).addClass('active');
  });
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.dld4').on('click', function () {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.park_form4').addClass('active');
  });
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.dlc5').on('click', function () {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).addClass('active');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.park_form5').addClass('active');

    if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('.dlc5').hasClass('active')) {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.dlc5').removeClass('active');
    } else {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).addClass('active');
    }

    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.dld5').addClass('active');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).addClass('active');
  });
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.dld5').on('click', function () {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.park_form5').addClass('active');
  });
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.dlc6').on('click', function () {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).addClass('active');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.park_form6').addClass('active');

    if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('.dlc6').hasClass('active')) {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.dlc6').removeClass('active');
    } else {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).addClass('active');
    }

    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.dld6').addClass('active');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).addClass('active');
  });
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.dld6').on('click', function () {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.park_form6').addClass('active');
  });
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.dlc7').on('click', function () {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).addClass('active');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.park_form7').addClass('active');

    if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('.dlc7').hasClass('active')) {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.dlc7').removeClass('active');
    } else {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).addClass('active');
    }

    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.dld7').addClass('active');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).addClass('active');
  });
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.dld7').on('click', function () {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.park_form7').addClass('active');
  });
  jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).on('click', function (e) {
    if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).closest('.bbc').length) return;
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.dld1').removeClass('active');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.dlc1').removeClass('active');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.dld2').removeClass('active');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.dlc2').removeClass('active');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.dld3').removeClass('active');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.dlc3').removeClass('active');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.dld4').removeClass('active');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.dlc4').removeClass('active');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.dld5').removeClass('active');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.dlc5').removeClass('active');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.dld6').removeClass('active');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.dlc6').removeClass('active');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.dld7').removeClass('active');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.dlc7').removeClass('active');
  });
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.main_head__center--backr').on('click', function () {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.park_form').removeClass('active');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.park_form2').removeClass('active');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.park_form3').removeClass('active');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.park_form4').removeClass('active');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.park_form5').removeClass('active');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.park_form6').removeClass('active');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.park_form7').removeClass('active');
  });
});

/***/ }),

/***/ "./src/blocks/modules/room_blocks/room_blocks.js":
/*!*******************************************************!*\
  !*** ./src/blocks/modules/room_blocks/room_blocks.js ***!
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
  var $status = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.pagingInfo');
  var $slickElement = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.slk1');
  $slickElement.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
    var i = '0' + ((currentSlide ? currentSlide : 0) + 1);
    $status.html(i + '<span>' + '0' + slick.slideCount + '</span>');
  });
  $slickElement.slick({
    // slide: '.room_blocks__block',
    dots: false,
    arrows: true,
    infinite: false,
    speed: 300,
    autoplay: true,
    autoplaySpeed: 2500,
    slidesToShow: 4,
    centerMode: false,
    responsive: [{
      breakpoint: 1241,
      settings: {
        slidesToShow: 3
      }
    }, {
      breakpoint: 1061,
      settings: {
        slidesToShow: 2
      }
    }, {
      breakpoint: 801,
      settings: {
        slidesToShow: 1
      }
    }]
  });
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.rooms_tbs__block--title').on('click', function () {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).parent().toggleClass('active');
  });
});

/***/ }),

/***/ "./src/blocks/modules/room_first/room_first.js":
/*!*****************************************************!*\
  !*** ./src/blocks/modules/room_first/room_first.js ***!
  \*****************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);

jquery__WEBPACK_IMPORTED_MODULE_0___default()(function () {
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.sort-js').on('click', function () {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.sort-js.active').not(this).removeClass('active');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).toggleClass('active');
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

/***/ "./src/blocks/modules/vid_blocks/vid_blocks.js":
/*!*****************************************************!*\
  !*** ./src/blocks/modules/vid_blocks/vid_blocks.js ***!
  \*****************************************************/
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
/* harmony import */ var _modules_parking_blocks_parking_blocks__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! %modules%/parking_blocks/parking_blocks */ "./src/blocks/modules/parking_blocks/parking_blocks.js");
/* harmony import */ var _modules_parking_white_parking_white__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! %modules%/parking_white/parking_white */ "./src/blocks/modules/parking_white/parking_white.js");
/* harmony import */ var _modules_act_page_content_act_page_content__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! %modules%/act_page_content/act_page_content */ "./src/blocks/modules/act_page_content/act_page_content.js");
/* harmony import */ var _modules_act_page_content_act_page_content__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(_modules_act_page_content_act_page_content__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var _modules_buy_tabs_buy_tabs__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! %modules%/buy_tabs/buy_tabs */ "./src/blocks/modules/buy_tabs/buy_tabs.js");
/* harmony import */ var _modules_dinamic_main_dinamic_main__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! %modules%/dinamic_main/dinamic_main */ "./src/blocks/modules/dinamic_main/dinamic_main.js");
/* harmony import */ var _modules_main_func_main_func__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! %modules%/main_func/main_func */ "./src/blocks/modules/main_func/main_func.js");
/* harmony import */ var _modules_floor_first_floor_first__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! %modules%/floor_first/floor_first */ "./src/blocks/modules/floor_first/floor_first.js");
/* harmony import */ var _modules_floors_floors__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! %modules%/floors/floors */ "./src/blocks/modules/floors/floors.js");
/* harmony import */ var _modules_room_first_room_first__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! %modules%/room_first/room_first */ "./src/blocks/modules/room_first/room_first.js");
/* harmony import */ var _modules_room_blocks_room_blocks__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! %modules%/room_blocks/room_blocks */ "./src/blocks/modules/room_blocks/room_blocks.js");
/* harmony import */ var _modules_din_in_page_din_in_page__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! %modules%/din_in_page/din_in_page */ "./src/blocks/modules/din_in_page/din_in_page.js");
/* harmony import */ var _modules_din_page_din_page__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! %modules%/din_page/din_page */ "./src/blocks/modules/din_page/din_page.js");
/* harmony import */ var _modules_ap_first_ap_first__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! %modules%/ap_first/ap_first */ "./src/blocks/modules/ap_first/ap_first.js");
/* harmony import */ var _modules_gal_blocks_gal_blocks__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! %modules%/gal_blocks/gal_blocks */ "./src/blocks/modules/gal_blocks/gal_blocks.js");
/* harmony import */ var _modules_gal_blocks_gal_blocks__WEBPACK_IMPORTED_MODULE_34___default = /*#__PURE__*/__webpack_require__.n(_modules_gal_blocks_gal_blocks__WEBPACK_IMPORTED_MODULE_34__);
/* harmony import */ var _modules_vid_blocks_vid_blocks__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! %modules%/vid_blocks/vid_blocks */ "./src/blocks/modules/vid_blocks/vid_blocks.js");
/* harmony import */ var _modules_vid_blocks_vid_blocks__WEBPACK_IMPORTED_MODULE_35___default = /*#__PURE__*/__webpack_require__.n(_modules_vid_blocks_vid_blocks__WEBPACK_IMPORTED_MODULE_35__);
/* harmony import */ var _modules_params_blocks_params_blocks__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! %modules%/params_blocks/params_blocks */ "./src/blocks/modules/params_blocks/params_blocks.js");
/* harmony import */ var _modules_parking_white2_parking_white2__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! %modules%/parking_white2/parking_white2 */ "./src/blocks/modules/parking_white2/parking_white2.js");
/* harmony import */ var _modules_parking_white2_parking_white2__WEBPACK_IMPORTED_MODULE_37___default = /*#__PURE__*/__webpack_require__.n(_modules_parking_white2_parking_white2__WEBPACK_IMPORTED_MODULE_37__);
/* harmony import */ var _modules_komc_first_komc_first__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! %modules%/komc_first/komc_first */ "./src/blocks/modules/komc_first/komc_first.js");
/* harmony import */ var _modules_komc_first_komc_first__WEBPACK_IMPORTED_MODULE_38___default = /*#__PURE__*/__webpack_require__.n(_modules_komc_first_komc_first__WEBPACK_IMPORTED_MODULE_38__);
/* harmony import */ var _modules_komc_blocks_komc_blocks__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! %modules%/komc_blocks/komc_blocks */ "./src/blocks/modules/komc_blocks/komc_blocks.js");
/* harmony import */ var _modules_komc_blocks_komc_blocks__WEBPACK_IMPORTED_MODULE_39___default = /*#__PURE__*/__webpack_require__.n(_modules_komc_blocks_komc_blocks__WEBPACK_IMPORTED_MODULE_39__);
/* harmony import */ var _modules_parking_white3_parking_white3__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! %modules%/parking_white3/parking_white3 */ "./src/blocks/modules/parking_white3/parking_white3.js");
/* harmony import */ var _modules_komc_in_white_komc_in_white__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! %modules%/komc_in_white/komc_in_white */ "./src/blocks/modules/komc_in_white/komc_in_white.js");
/* harmony import */ var _modules_komc_in_white_komc_in_white__WEBPACK_IMPORTED_MODULE_41___default = /*#__PURE__*/__webpack_require__.n(_modules_komc_in_white_komc_in_white__WEBPACK_IMPORTED_MODULE_41__);
/* harmony import */ var _modules_footer_footer__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! %modules%/footer/footer */ "./src/blocks/modules/footer/footer.js");
/* harmony import */ var _modules_footer_footer__WEBPACK_IMPORTED_MODULE_42___default = /*#__PURE__*/__webpack_require__.n(_modules_footer_footer__WEBPACK_IMPORTED_MODULE_42__);












































/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _import_modules__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./import/modules */ "./src/js/import/modules.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }



window.form_submit = function (selector, callback) {
  var fields = $(selector).serializeArray().reduce(function (obj, item) {
    obj[item.name] = item.value;
    return obj;
  }, {});

  var data = _objectSpread(_objectSpread({}, fields), {}, {
    web_form_submit: 'Отправить'
  });

  var actionUrl = $(selector).attr('action');
  console.log('requested');
  BX.ajax({
    url: actionUrl,
    data: data,
    method: 'POST',
    dataType: 'json',
    timeout: 30,
    async: true,
    enctype: "multipart/form-data",
    processData: true,
    scriptsRunFirst: true,
    emulateOnload: true,
    start: true,
    cache: false,
    onsuccess: function onsuccess(result) {
      callback(result);
    }
  });
}; // appartment.changeForm = function (data)
// {
//     let dataToSend = $(data).serializeArray();
//     BX.ajax({
//         url: '/local/templates/.default/components/bitrix/news.list/apartment/ajax.php',
//         data: dataToSend,
//         method: 'POST',
//         dataType: 'json',
//         timeout: 30,
//         async: true,
//         processData: true,
//         scriptsRunFirst: true,
//         emulateOnload: true,
//         start: true,
//         cache: false,
//         onsuccess: function (data) {
//             if(data.num > 0)
//             {
//                 $('.table__info').html(data.data);
//                 $('#num').html(data.num);
//                 console.log('hasdata')
//             } else {
//                 console.log('nodata')
//                 $('.table__info').html('<div class="table__info--no_result">Нет результатов</div>');
//             }
//         },
//         onfailure: function () {
//         }
//     });
// }
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ })

/******/ });
//# sourceMappingURL=main.js.map