(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[39],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Tools/configurations/Reservation2.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/Tools/configurations/Reservation2.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _sass_vuexy_pages_configurations_general_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @sass/vuexy/pages/configurations/general.scss */ "./resources/sass/vuexy/pages/configurations/general.scss");
/* harmony import */ var _sass_vuexy_pages_configurations_general_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_sass_vuexy_pages_configurations_general_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vue2_datepicker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue2-datepicker */ "./node_modules/vue2-datepicker/index.esm.js");
/* harmony import */ var _views_pages_components_Number__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/views/pages/components/Number */ "./resources/js/src/views/pages/components/Number.vue");
/* harmony import */ var _utils_dialog_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/utils/dialog.js */ "./resources/js/src/utils/dialog.js");
/* harmony import */ var _utils_alert_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/utils/alert.js */ "./resources/js/src/utils/alert.js");
/* harmony import */ var _api_configurations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/api/configurations */ "./resources/js/src/api/configurations.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//






var configurationResource = new _api_configurations__WEBPACK_IMPORTED_MODULE_6__["default"]();
/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    DatePicker: vue2_datepicker__WEBPACK_IMPORTED_MODULE_2__["default"],
    InputNumber: _views_pages_components_Number__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  data: function data() {
    return {
      vLookup: [],
      vModel: {},
      vTemp: {},
      market: [],
      openKeylock: false,
      openCheckOut: false
    };
  },
  methods: {
    handleChangeTime: function handleChangeTime(value, type) {
      if (type === 'minute') {
        this.openKeylock = false;
        this.openCheckOut = false;
      }
    },
    getData: function () {
      var _getData = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var _ref, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return configurationResource.getReservation2();

              case 2:
                _ref = _context.sent;
                data = _ref.data;
                this.vModel = data.data.value;
                this.vTemp = data.data.value;
                this.vLookup = data.lookup;
                this.$vs.loading.close('#layout--main>.con-vs-loading');

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getData() {
        return _getData.apply(this, arguments);
      }

      return getData;
    }(),
    saveData: function () {
      var _saveData = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
        var _this = this;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                this.vModel.user_id = this.userInfo.code;
                this.vTemp = this.vModel;
                this.$validator.validateAll().then(
                /*#__PURE__*/
                function () {
                  var _ref2 = _asyncToGenerator(
                  /*#__PURE__*/
                  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(result) {
                    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
                      while (1) {
                        switch (_context2.prev = _context2.next) {
                          case 0:
                            if (!result) {
                              _context2.next = 14;
                              break;
                            }

                            _context2.prev = 1;

                            _this.$vs.loading({
                              container: '#layout--main',
                              scale: _this.scaleLoadingMainLayout
                            });

                            _context2.next = 5;
                            return configurationResource.updateReservation2(_this.vModel);

                          case 5:
                            _utils_alert_js__WEBPACK_IMPORTED_MODULE_5__["default"].acceptAlertSucces();

                            _this.$vs.loading.close('#layout--main>.con-vs-loading');

                            _context2.next = 12;
                            break;

                          case 9:
                            _context2.prev = 9;
                            _context2.t0 = _context2["catch"](1);
                            _utils_alert_js__WEBPACK_IMPORTED_MODULE_5__["default"].errorSaveDataAlert();

                          case 12:
                            _context2.next = 15;
                            break;

                          case 14:
                            _utils_alert_js__WEBPACK_IMPORTED_MODULE_5__["default"].inputRequiredAlert();

                          case 15:
                          case "end":
                            return _context2.stop();
                        }
                      }
                    }, _callee2, null, [[1, 9]]);
                  }));

                  return function (_x) {
                    return _ref2.apply(this, arguments);
                  };
                }());

              case 3:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function saveData() {
        return _saveData.apply(this, arguments);
      }

      return saveData;
    }(),
    getLookup: function () {
      var _getLookup = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4() {
        var _ref3, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return configurationResource.getReservation2Lookup();

              case 2:
                _ref3 = _context4.sent;
                data = _ref3.data;
                this.vLookup = data;

              case 5:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function getLookup() {
        return _getLookup.apply(this, arguments);
      }

      return getLookup;
    }(),
    setDefaultValue: function () {
      var _setDefaultValue = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5() {
        var _ref4, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                this.$vs.loading({
                  container: '#layout--main',
                  scale: this.scaleLoadingMainLayout
                });
                _context5.next = 3;
                return configurationResource.getReservation2();

              case 3:
                _ref4 = _context5.sent;
                data = _ref4.data;
                this.vModel = data.defaultValue;
                this.$vs.loading.close('#layout--main>.con-vs-loading');

              case 7:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function setDefaultValue() {
        return _setDefaultValue.apply(this, arguments);
      }

      return setDefaultValue;
    }()
  },
  created: function created() {
    this.getData();
  },
  mounted: function mounted() {
    this.$vs.loading({
      container: '#layout--main',
      scale: this.scaleLoadingMainLayout
    });
  },
  beforeRouteLeave: function beforeRouteLeave(to, from, next) {
    if (JSON.stringify(this.vModel) === JSON.stringify(this.vTemp)) {
      next();
    } else {
      this.$vs.dialog({
        color: 'danger',
        type: 'confirm',
        title: this.$t('message.informationTitle'),
        text: 'Are you sure you want to exit without saving?',
        acceptText: 'Yes',
        cancelText: 'No',
        accept: function accept() {
          next();
        }
      });
      next(false);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/components/Number.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/components/Number.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'Number',
  // eslint-disable-next-line
  // eslint-disable-next-line quotes, vue/require-prop-types
  props: ['value', 'disabled', 'label', 'description'],
  data: function data() {
    return {
      isInputActive: false
    };
  },
  methods: {
    select: function select(event) {
      event.target.setSelectionRange(0, this.displayValue.length);
    },
    countDecimals: function countDecimals(value) {
      if (Math.floor(value) !== value) return value.toString().split(".")[1].length || 0;
      return 0;
    }
  },
  computed: {
    displayValue: {
      // eslint-disable-next-line vue/return-in-computed-property
      get: function get() {
        var value = this.value;

        if (isNaN(value)) {
          value = 0;
        }

        if (this.isInputActive) {
          // Cursor is inside the input field. unformat display value for user
          return value.toString();
        } else {
          // User is not modifying now. Format display value for user interface
          if (value % 1 > 0) {
            if (this.countDecimals(value) <= 3) {
              return parseFloat(value).toFixed(this.countDecimals(value)).replace(/(\d)(?=(\d{3})+(?:\.\d+)?$)/g, '$1,');
            }
          } else {
            return parseFloat(value).toFixed(0).replace(/(\d)(?=(\d{3})+(?:\.\d+)?$)/g, '$1,');
          }
        }
      },
      set: function set(modifiedValue) {
        // Recalculate value after ignoring "$" and "," in user input
        var newValue = parseFloat(modifiedValue.replace(/[^\d\.]/g, '')); // Ensure that it is not NaN

        if (isNaN(newValue)) {
          newValue = 0;
        } // Note: we cannot set this.value as it is a "prop". It needs to be passed to parent component
        // $emit the event so that parent component gets it


        if (this.countDecimals(newValue) <= 3) {
          this.$emit('input', newValue);
        } else {//
        }
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Tools/configurations/Reservation2.vue?vue&type=template&id=a7e583c2&":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/Tools/configurations/Reservation2.vue?vue&type=template&id=a7e583c2& ***!
  \*****************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "configuration reservation-2" },
    [
      _c(
        "vs-row",
        { attrs: { "vs-type": "flex", "vs-justify": "flex-end" } },
        [
          _c(
            "vs-button",
            {
              staticClass: "mb-3 mr-3",
              attrs: { color: "success" },
              on: {
                click: function($event) {
                  return _vm.saveData()
                }
              }
            },
            [_vm._v("Save")]
          ),
          _vm._v(" "),
          _c(
            "vs-button",
            {
              staticClass: "mb-3",
              attrs: { color: "danger" },
              on: {
                click: function($event) {
                  return _vm.setDefaultValue()
                }
              }
            },
            [_vm._v("Restore Default")]
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "vx-card",
        {
          staticClass: "mb-3",
          attrs: { title: "Mandatory Field & Other", collapseAction: "" }
        },
        [
          _c(
            "vs-row",
            [
              _c("vs-divider", [_vm._v("Mandatory Field")]),
              _vm._v(" "),
              _c(
                "vs-col",
                { attrs: { "vs-lg": "4", "vs-xs": "12" } },
                [
                  _c(
                    "vs-checkbox",
                    {
                      staticClass: "mb-1",
                      model: {
                        value: _vm.vModel.is_room_number_required,
                        callback: function($$v) {
                          _vm.$set(_vm.vModel, "is_room_number_required", $$v)
                        },
                        expression: "vModel.is_room_number_required"
                      }
                    },
                    [
                      _vm._v(
                        _vm._s(
                          _vm.$t(
                            "configurations.reservation2.roomNumberRequired"
                          )
                        )
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "vs-checkbox",
                    {
                      staticClass: "mb-1",
                      model: {
                        value: _vm.vModel.is_business_source_required,
                        callback: function($$v) {
                          _vm.$set(
                            _vm.vModel,
                            "is_business_source_required",
                            $$v
                          )
                        },
                        expression: "vModel.is_business_source_required"
                      }
                    },
                    [
                      _vm._v(
                        _vm._s(
                          _vm.$t(
                            "configurations.reservation2.businessSourceRequired"
                          )
                        )
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "vs-checkbox",
                    {
                      staticClass: "mb-1",
                      model: {
                        value: _vm.vModel.is_market_required,
                        callback: function($$v) {
                          _vm.$set(_vm.vModel, "is_market_required", $$v)
                        },
                        expression: "vModel.is_market_required"
                      }
                    },
                    [
                      _vm._v(
                        _vm._s(
                          _vm.$t("configurations.reservation2.marketRequired")
                        )
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "vs-checkbox",
                    {
                      staticClass: "mb-1",
                      model: {
                        value: _vm.vModel.is_title_required,
                        callback: function($$v) {
                          _vm.$set(_vm.vModel, "is_title_required", $$v)
                        },
                        expression: "vModel.is_title_required"
                      }
                    },
                    [
                      _vm._v(
                        _vm._s(
                          _vm.$t("configurations.reservation2.titleRequired")
                        )
                      )
                    ]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "vs-col",
                { attrs: { "vs-lg": "4", "vs-xs": "12" } },
                [
                  _c(
                    "vs-checkbox",
                    {
                      staticClass: "mb-1",
                      model: {
                        value: _vm.vModel.is_state_required,
                        callback: function($$v) {
                          _vm.$set(_vm.vModel, "is_state_required", $$v)
                        },
                        expression: "vModel.is_state_required"
                      }
                    },
                    [
                      _vm._v(
                        _vm._s(
                          _vm.$t("configurations.reservation2.stateRequired")
                        )
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "vs-checkbox",
                    {
                      staticClass: "mb-1",
                      model: {
                        value: _vm.vModel.is_city_required,
                        callback: function($$v) {
                          _vm.$set(_vm.vModel, "is_city_required", $$v)
                        },
                        expression: "vModel.is_city_required"
                      }
                    },
                    [
                      _vm._v(
                        _vm._s(
                          _vm.$t("configurations.reservation2.cityRequired")
                        )
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "vs-checkbox",
                    {
                      staticClass: "mb-1",
                      model: {
                        value: _vm.vModel.is_nationality_required,
                        callback: function($$v) {
                          _vm.$set(_vm.vModel, "is_nationality_required", $$v)
                        },
                        expression: "vModel.is_nationality_required"
                      }
                    },
                    [
                      _vm._v(
                        _vm._s(
                          _vm.$t(
                            "configurations.reservation2.nationalityRequired"
                          )
                        )
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "vs-checkbox",
                    {
                      staticClass: "mb-1",
                      model: {
                        value: _vm.vModel.is_phone1_required,
                        callback: function($$v) {
                          _vm.$set(_vm.vModel, "is_phone1_required", $$v)
                        },
                        expression: "vModel.is_phone1_required"
                      }
                    },
                    [
                      _vm._v(
                        _vm._s(
                          _vm.$t("configurations.reservation2.phone1Required")
                        )
                      )
                    ]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "vs-col",
                { attrs: { "vs-lg": "4", "vs-xs": "12" } },
                [
                  _c(
                    "vs-checkbox",
                    {
                      staticClass: "mb-1",
                      model: {
                        value: _vm.vModel.is_email_required,
                        callback: function($$v) {
                          _vm.$set(_vm.vModel, "is_email_required", $$v)
                        },
                        expression: "vModel.is_email_required"
                      }
                    },
                    [
                      _vm._v(
                        _vm._s(
                          _vm.$t("configurations.reservation2.emailRequired")
                        )
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "vs-checkbox",
                    {
                      staticClass: "mb-1",
                      model: {
                        value: _vm.vModel.is_company_required,
                        callback: function($$v) {
                          _vm.$set(_vm.vModel, "is_company_required", $$v)
                        },
                        expression: "vModel.is_company_required"
                      }
                    },
                    [
                      _vm._v(
                        _vm._s(
                          _vm.$t("configurations.reservation2.companyRequired")
                        )
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "vs-checkbox",
                    {
                      staticClass: "mb-1",
                      model: {
                        value: _vm.vModel.is_hk_note_required,
                        callback: function($$v) {
                          _vm.$set(_vm.vModel, "is_hk_note_required", $$v)
                        },
                        expression: "vModel.is_hk_note_required"
                      }
                    },
                    [
                      _vm._v(
                        _vm._s(
                          _vm.$t("configurations.reservation2.hkNoteRequired")
                        )
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "vs-checkbox",
                    {
                      staticClass: "mb-1",
                      model: {
                        value: _vm.vModel.is_ta_voucher_required,
                        callback: function($$v) {
                          _vm.$set(_vm.vModel, "is_ta_voucher_required", $$v)
                        },
                        expression: "vModel.is_ta_voucher_required"
                      }
                    },
                    [
                      _vm._v(
                        _vm._s(
                          _vm.$t(
                            "configurations.reservation2.taVoucherRequired"
                          )
                        )
                      )
                    ]
                  )
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "vs-row",
            [
              _c("vs-divider", [_vm._v("Other")]),
              _vm._v(" "),
              _c(
                "vs-col",
                { attrs: { "vs-lg": "4", "vs-xs": "12" } },
                [
                  _c(
                    "vs-checkbox",
                    {
                      staticClass: "mb-1",
                      model: {
                        value: _vm.vModel.filter_rate_by_market,
                        callback: function($$v) {
                          _vm.$set(_vm.vModel, "filter_rate_by_market", $$v)
                        },
                        expression: "vModel.filter_rate_by_market"
                      }
                    },
                    [
                      _vm._v(
                        _vm._s(
                          _vm.$t(
                            "configurations.reservation2.filterRatebyMarket"
                          )
                        )
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "vs-checkbox",
                    {
                      staticClass: "mb-1",
                      model: {
                        value: _vm.vModel.filter_rate_by_company,
                        callback: function($$v) {
                          _vm.$set(_vm.vModel, "filter_rate_by_company", $$v)
                        },
                        expression: "vModel.filter_rate_by_company"
                      }
                    },
                    [
                      _vm._v(
                        _vm._s(
                          _vm.$t(
                            "configurations.reservation2.filterRatebyCompany"
                          )
                        )
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "vs-checkbox",
                    {
                      staticClass: "mb-1",
                      model: {
                        value: _vm.vModel.always_show_publish_rate,
                        callback: function($$v) {
                          _vm.$set(_vm.vModel, "always_show_publish_rate", $$v)
                        },
                        expression: "vModel.always_show_publish_rate"
                      }
                    },
                    [
                      _vm._v(
                        _vm._s(
                          _vm.$t(
                            "configurations.reservation2.alwaysShowPublishRate"
                          )
                        )
                      )
                    ]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "vs-col",
                { attrs: { "vs-lg": "4", "vs-xs": "12" } },
                [
                  _c(
                    "vs-row",
                    { attrs: { "vs-type": "flex", "vs-align": "center" } },
                    [
                      _c("vs-row", [
                        _c("label", [
                          _vm._v(
                            _vm._s(
                              _vm.$t(
                                "configurations.reservation2.defaultMarket"
                              )
                            )
                          )
                        ])
                      ]),
                      _vm._v(" "),
                      _c("v-select", {
                        staticClass: "w-full wrap-form-select",
                        attrs: {
                          label: "name",
                          reduce: function(value) {
                            return value.code
                          },
                          options: _vm.vLookup.market
                        },
                        model: {
                          value: _vm.vModel.default_market,
                          callback: function($$v) {
                            _vm.$set(_vm.vModel, "default_market", $$v)
                          },
                          expression: "vModel.default_market"
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "vs-row",
                    { attrs: { "vs-type": "flex", "vs-align": "center" } },
                    [
                      _c("vs-row", [
                        _c("label", [
                          _vm._v(
                            _vm._s(
                              _vm.$t(
                                "configurations.reservation2.defaultIndividualMarket"
                              )
                            )
                          )
                        ])
                      ]),
                      _vm._v(" "),
                      _c("v-select", {
                        directives: [
                          {
                            name: "validate",
                            rawName: "v-validate",
                            value: "required",
                            expression: "'required'"
                          }
                        ],
                        staticClass: "w-full wrap-form-select",
                        attrs: {
                          label: "name",
                          clearable: false,
                          reduce: function(value) {
                            return value.code
                          },
                          options: _vm.vLookup.market,
                          name: "default individual market"
                        },
                        model: {
                          value: _vm.vModel.default_individual_market,
                          callback: function($$v) {
                            _vm.$set(
                              _vm.vModel,
                              "default_individual_market",
                              $$v
                            )
                          },
                          expression: "vModel.default_individual_market"
                        }
                      }),
                      _vm._v(" "),
                      _c(
                        "span",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: _vm.errors.has(
                                "default individual market"
                              ),
                              expression:
                                "errors.has('default individual market')"
                            }
                          ],
                          staticClass: "error-text text-danger"
                        },
                        [
                          _vm._v(
                            _vm._s(
                              _vm.errors.first("default individual market")
                            )
                          )
                        ]
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "vx-card",
        {
          staticClass: "mb-3",
          attrs: { title: "Reservation", collapseAction: "" }
        },
        [
          _c(
            "vs-row",
            [
              _c(
                "vs-col",
                { attrs: { "vs-lg": "4", "vs-xs": "12" } },
                [
                  _c(
                    "vs-checkbox",
                    {
                      staticClass: "mb-1",
                      model: {
                        value: _vm.vModel.post_first_night_charge,
                        callback: function($$v) {
                          _vm.$set(_vm.vModel, "post_first_night_charge", $$v)
                        },
                        expression: "vModel.post_first_night_charge"
                      }
                    },
                    [
                      _vm._v(
                        _vm._s(
                          _vm.$t(
                            "configurations.reservation2.postFirstNightCharge"
                          )
                        )
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "vs-checkbox",
                    {
                      staticClass: "mb-1",
                      model: {
                        value: _vm.vModel.post_discount,
                        callback: function($$v) {
                          _vm.$set(_vm.vModel, "post_discount", $$v)
                        },
                        expression: "vModel.post_discount"
                      }
                    },
                    [
                      _vm._v(
                        _vm._s(
                          _vm.$t("configurations.reservation2.postDiscount")
                        )
                      )
                    ]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "vs-col",
                { attrs: { "vs-lg": "4", "vs-xs": "12" } },
                [
                  _c(
                    "vs-row",
                    {
                      staticClass: "mb-1",
                      attrs: { "vs-type": "flex", "vs-align": "center" }
                    },
                    [
                      _c("vs-col", { attrs: { "vs-lg": "7" } }, [
                        _c("label", [
                          _c("span", { staticClass: "required" }, [
                            _vm._v(
                              " " +
                                _vm._s(
                                  _vm.$t(
                                    "configurations.reservation2.keylockLimit"
                                  )
                                )
                            )
                          ])
                        ])
                      ]),
                      _vm._v(" "),
                      _c(
                        "vs-col",
                        { attrs: { "vs-lg": "4" } },
                        [
                          _c("date-picker", {
                            staticClass: "w-full",
                            attrs: {
                              clearable: false,
                              type: "time",
                              open: _vm.openKeylock,
                              lang: _vm.$t("lang"),
                              "value-type": "HH:mm",
                              format: "HH:mm",
                              label: "name"
                            },
                            on: {
                              "update:open": function($event) {
                                _vm.openKeylock = $event
                              },
                              change: _vm.handleChangeTime
                            },
                            scopedSlots: _vm._u([
                              {
                                key: "footer",
                                fn: function() {
                                  return undefined
                                },
                                proxy: true
                              }
                            ]),
                            model: {
                              value: _vm.vModel.keylock_limit,
                              callback: function($$v) {
                                _vm.$set(_vm.vModel, "keylock_limit", $$v)
                              },
                              expression: "vModel.keylock_limit"
                            }
                          })
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "vs-row",
                    { attrs: { "vs-type": "flex", "vs-align": "center" } },
                    [
                      _c("vs-col", { attrs: { "vs-lg": "7" } }, [
                        _c("label", [
                          _c("span", { staticClass: "required" }, [
                            _vm._v(
                              " " +
                                _vm._s(
                                  _vm.$t(
                                    "configurations.reservation2.checkOutTime"
                                  )
                                )
                            )
                          ])
                        ])
                      ]),
                      _vm._v(" "),
                      _c(
                        "vs-col",
                        { attrs: { "vs-lg": "4" } },
                        [
                          _c("date-picker", {
                            staticClass: "w-full",
                            attrs: {
                              clearable: false,
                              type: "time",
                              open: _vm.openCheckOut,
                              lang: _vm.$t("lang"),
                              "value-type": "HH:mm",
                              format: "HH:mm",
                              label: "name"
                            },
                            on: {
                              "update:open": function($event) {
                                _vm.openCheckOut = $event
                              },
                              change: _vm.handleChangeTime
                            },
                            scopedSlots: _vm._u([
                              {
                                key: "footer",
                                fn: function() {
                                  return undefined
                                },
                                proxy: true
                              }
                            ]),
                            model: {
                              value: _vm.vModel.check_out_time,
                              callback: function($$v) {
                                _vm.$set(_vm.vModel, "check_out_time", $$v)
                              },
                              expression: "vModel.check_out_time"
                            }
                          })
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "vx-card",
        {
          staticClass: "mb-3",
          attrs: { title: "Default Value", collapseAction: "" }
        },
        [
          _c(
            "vs-row",
            [
              _c(
                "vs-col",
                { attrs: { "vs-lg": "4", "vs-xs": "12" } },
                [
                  _c(
                    "vs-row",
                    { attrs: { "vs-type": "flex", "vs-align": "center" } },
                    [
                      _c(
                        "vs-col",
                        { attrs: { "vs-lg": "5", "vs-xs": "12" } },
                        [
                          _c("vs-row", [
                            _c("label", [
                              _vm._v(
                                _vm._s(
                                  _vm.$t("configurations.reservation2.roomType")
                                )
                              )
                            ])
                          ])
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "vs-col",
                        { attrs: { "vs-lg": "6", "vs-xs": "12" } },
                        [
                          _c("v-select", {
                            staticClass: "w-full wrap-form-select",
                            attrs: {
                              label: "name",
                              reduce: function(value) {
                                return value.code
                              },
                              options: _vm.vLookup.room_type
                            },
                            model: {
                              value: _vm.vModel.default_room_type,
                              callback: function($$v) {
                                _vm.$set(_vm.vModel, "default_room_type", $$v)
                              },
                              expression: "vModel.default_room_type"
                            }
                          })
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "vs-row",
                    { attrs: { "vs-type": "flex", "vs-align": "center" } },
                    [
                      _c(
                        "vs-col",
                        { attrs: { "vs-lg": "5", "vs-xs": "12" } },
                        [
                          _c("vs-row", [
                            _c("label", [
                              _vm._v(
                                _vm._s(
                                  _vm.$t("configurations.reservation2.roomRate")
                                )
                              )
                            ])
                          ])
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "vs-col",
                        { attrs: { "vs-lg": "6", "vs-xs": "12" } },
                        [
                          _c("v-select", {
                            staticClass: "w-full wrap-form-select",
                            attrs: {
                              label: "name",
                              reduce: function(value) {
                                return value.code
                              },
                              options: _vm.vLookup.room_rate
                            },
                            model: {
                              value: _vm.vModel.default_room_rate,
                              callback: function($$v) {
                                _vm.$set(_vm.vModel, "default_room_rate", $$v)
                              },
                              expression: "vModel.default_room_rate"
                            }
                          })
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "vs-col",
                { attrs: { "vs-lg": "4", "vs-xs": "12" } },
                [
                  _c(
                    "vs-row",
                    { attrs: { "vs-type": "flex", "vs-align": "center" } },
                    [
                      _c(
                        "vs-col",
                        { attrs: { "vs-lg": "5", "vs-xs": "12" } },
                        [
                          _c("vs-row", [
                            _c("label", [
                              _vm._v(
                                _vm._s(
                                  _vm.$t(
                                    "configurations.reservation2.complimentRate"
                                  )
                                )
                              )
                            ])
                          ])
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "vs-col",
                        { attrs: { "vs-lg": "6", "vs-xs": "12" } },
                        [
                          _c("v-select", {
                            staticClass: "w-full wrap-form-select",
                            attrs: {
                              label: "name",
                              reduce: function(value) {
                                return value.code
                              },
                              options: _vm.vLookup.room_rate
                            },
                            model: {
                              value: _vm.vModel.default_compliment_rate,
                              callback: function($$v) {
                                _vm.$set(
                                  _vm.vModel,
                                  "default_compliment_rate",
                                  $$v
                                )
                              },
                              expression: "vModel.default_compliment_rate"
                            }
                          })
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "vs-row",
                    { attrs: { "vs-type": "flex", "vs-align": "center" } },
                    [
                      _c(
                        "vs-col",
                        { attrs: { "vs-lg": "5", "vs-xs": "12" } },
                        [
                          _c("vs-row", [
                            _c("label", [
                              _vm._v(
                                _vm._s(
                                  _vm.$t(
                                    "configurations.reservation2.houseUseRate"
                                  )
                                )
                              )
                            ])
                          ])
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "vs-col",
                        { attrs: { "vs-lg": "6", "vs-xs": "12" } },
                        [
                          _c("v-select", {
                            staticClass: "w-full wrap-form-select",
                            attrs: {
                              label: "name",
                              reduce: function(value) {
                                return value.code
                              },
                              options: _vm.vLookup.room_rate
                            },
                            model: {
                              value: _vm.vModel.default_house_rate,
                              callback: function($$v) {
                                _vm.$set(_vm.vModel, "default_house_rate", $$v)
                              },
                              expression: "vModel.default_house_rate"
                            }
                          })
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "vs-col",
                { attrs: { "vs-lg": "4", "vs-xs": "12" } },
                [
                  _c(
                    "vs-row",
                    { attrs: { "vs-type": "flex", "vs-align": "center" } },
                    [
                      _c(
                        "vs-col",
                        { attrs: { "vs-lg": "5", "vs-xs": "12" } },
                        [
                          _c("vs-row", [
                            _c("label", [
                              _vm._v(
                                _vm._s(
                                  _vm.$t(
                                    "configurations.reservation2.subDepartment"
                                  )
                                )
                              )
                            ])
                          ])
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "vs-col",
                        { attrs: { "vs-lg": "6", "vs-xs": "12" } },
                        [
                          _c("v-select", {
                            staticClass: "w-full wrap-form-select",
                            attrs: {
                              label: "name",
                              reduce: function(value) {
                                return value.code
                              },
                              options: _vm.vLookup.sub_department
                            },
                            model: {
                              value: _vm.vModel.default_sub_department,
                              callback: function($$v) {
                                _vm.$set(
                                  _vm.vModel,
                                  "default_sub_department",
                                  $$v
                                )
                              },
                              expression: "vModel.default_sub_department"
                            }
                          })
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "vs-row",
                    { attrs: { "vs-type": "flex", "vs-align": "center" } },
                    [
                      _c(
                        "vs-col",
                        { attrs: { "vs-lg": "5", "vs-xs": "12" } },
                        [
                          _c("vs-row", [
                            _c("label", [
                              _vm._v(
                                _vm._s(
                                  _vm.$t(
                                    "configurations.reservation2.paymentType"
                                  )
                                )
                              )
                            ])
                          ])
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "vs-col",
                        { attrs: { "vs-lg": "6", "vs-xs": "12" } },
                        [
                          _c("v-select", {
                            staticClass: "w-full wrap-form-select",
                            attrs: {
                              label: "name",
                              reduce: function(value) {
                                return value.code
                              },
                              options: _vm.vLookup.payment_type
                            },
                            model: {
                              value: _vm.vModel.default_payment_type,
                              callback: function($$v) {
                                _vm.$set(
                                  _vm.vModel,
                                  "default_payment_type",
                                  $$v
                                )
                              },
                              expression: "vModel.default_payment_type"
                            }
                          })
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "vx-card",
        {
          staticClass: "mb-3",
          attrs: { title: "Amount Preset", collapseAction: "" }
        },
        [
          _c(
            "vs-row",
            [
              _c(
                "vs-col",
                { attrs: { "vs-lg": "4", "vs-xs": "12" } },
                [
                  _c(
                    "vs-row",
                    { attrs: { "vs-type": "flex", "vs-align": "center" } },
                    [
                      _c(
                        "vs-col",
                        { attrs: { "vs-lg": "5", "vs-xs": "12" } },
                        [
                          _c("vs-row", [
                            _c("label", [
                              _vm._v(
                                _vm._s(
                                  _vm.$t("configurations.reservation2.preset") +
                                    "1"
                                )
                              )
                            ])
                          ])
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "vs-col",
                        { attrs: { "vs-lg": "6", "vs-xs": "12" } },
                        [
                          _c("input-number", {
                            directives: [
                              {
                                name: "validate",
                                rawName: "v-validate",
                                value: "required|min:2",
                                expression: "'required|min:2'"
                              }
                            ],
                            staticClass: "w-full",
                            attrs: { name: "preset1" },
                            model: {
                              value: _vm.vModel.ap_preset1,
                              callback: function($$v) {
                                _vm.$set(_vm.vModel, "ap_preset1", $$v)
                              },
                              expression: "vModel.ap_preset1"
                            }
                          }),
                          _vm._v(" "),
                          _c(
                            "span",
                            {
                              directives: [
                                {
                                  name: "show",
                                  rawName: "v-show",
                                  value: _vm.errors.has("preset1"),
                                  expression: "errors.has('preset1')"
                                }
                              ],
                              staticClass: "error-text text-danger"
                            },
                            [_vm._v(_vm._s(_vm.errors.first("preset1")))]
                          )
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "vs-row",
                    { attrs: { "vs-type": "flex", "vs-align": "center" } },
                    [
                      _c(
                        "vs-col",
                        { attrs: { "vs-lg": "5", "vs-xs": "12" } },
                        [
                          _c("vs-row", [
                            _c("label", [
                              _vm._v(
                                _vm._s(
                                  _vm.$t("configurations.reservation2.preset") +
                                    "2"
                                )
                              )
                            ])
                          ])
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "vs-col",
                        { attrs: { "vs-lg": "6", "vs-xs": "12" } },
                        [
                          _c("input-number", {
                            directives: [
                              {
                                name: "validate",
                                rawName: "v-validate",
                                value: "required|min:2",
                                expression: "'required|min:2'"
                              }
                            ],
                            staticClass: "w-full",
                            attrs: { name: "preset2" },
                            model: {
                              value: _vm.vModel.ap_preset2,
                              callback: function($$v) {
                                _vm.$set(_vm.vModel, "ap_preset2", $$v)
                              },
                              expression: "vModel.ap_preset2"
                            }
                          }),
                          _vm._v(" "),
                          _c(
                            "span",
                            {
                              directives: [
                                {
                                  name: "show",
                                  rawName: "v-show",
                                  value: _vm.errors.has("preset2"),
                                  expression: "errors.has('preset2')"
                                }
                              ],
                              staticClass: "error-text text-danger"
                            },
                            [_vm._v(_vm._s(_vm.errors.first("preset2")))]
                          )
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "vs-row",
                    { attrs: { "vs-type": "flex", "vs-align": "center" } },
                    [
                      _c(
                        "vs-col",
                        { attrs: { "vs-lg": "5", "vs-xs": "12" } },
                        [
                          _c("vs-row", [
                            _c("label", [
                              _vm._v(
                                _vm._s(
                                  _vm.$t("configurations.reservation2.preset") +
                                    "3"
                                )
                              )
                            ])
                          ])
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "vs-col",
                        { attrs: { "vs-lg": "6", "vs-xs": "12" } },
                        [
                          _c("input-number", {
                            directives: [
                              {
                                name: "validate",
                                rawName: "v-validate",
                                value: "required|min:2",
                                expression: "'required|min:2'"
                              }
                            ],
                            staticClass: "w-full",
                            attrs: { name: "preset3" },
                            model: {
                              value: _vm.vModel.ap_preset3,
                              callback: function($$v) {
                                _vm.$set(_vm.vModel, "ap_preset3", $$v)
                              },
                              expression: "vModel.ap_preset3"
                            }
                          }),
                          _vm._v(" "),
                          _c(
                            "span",
                            {
                              directives: [
                                {
                                  name: "show",
                                  rawName: "v-show",
                                  value: _vm.errors.has("preset3"),
                                  expression: "errors.has('preset3')"
                                }
                              ],
                              staticClass: "error-text text-danger"
                            },
                            [_vm._v(_vm._s(_vm.errors.first("preset3")))]
                          )
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "vs-col",
                { attrs: { "vs-lg": "4", "vs-xs": "12" } },
                [
                  _c(
                    "vs-row",
                    { attrs: { "vs-type": "flex", "vs-align": "center" } },
                    [
                      _c(
                        "vs-col",
                        { attrs: { "vs-lg": "5", "vs-xs": "12" } },
                        [
                          _c("vs-row", [
                            _c("label", [
                              _vm._v(
                                _vm._s(
                                  _vm.$t("configurations.reservation2.preset") +
                                    "4"
                                )
                              )
                            ])
                          ])
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "vs-col",
                        { attrs: { "vs-lg": "6", "vs-xs": "12" } },
                        [
                          _c("input-number", {
                            directives: [
                              {
                                name: "validate",
                                rawName: "v-validate",
                                value: "required|min:2",
                                expression: "'required|min:2'"
                              }
                            ],
                            staticClass: "w-full",
                            attrs: { name: "preset4" },
                            model: {
                              value: _vm.vModel.ap_preset4,
                              callback: function($$v) {
                                _vm.$set(_vm.vModel, "ap_preset4", $$v)
                              },
                              expression: "vModel.ap_preset4"
                            }
                          }),
                          _vm._v(" "),
                          _c(
                            "span",
                            {
                              directives: [
                                {
                                  name: "show",
                                  rawName: "v-show",
                                  value: _vm.errors.has("preset4"),
                                  expression: "errors.has('preset4')"
                                }
                              ],
                              staticClass: "error-text text-danger"
                            },
                            [_vm._v(_vm._s(_vm.errors.first("preset4")))]
                          )
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "vs-row",
                    { attrs: { "vs-type": "flex", "vs-align": "center" } },
                    [
                      _c(
                        "vs-col",
                        { attrs: { "vs-lg": "5", "vs-xs": "12" } },
                        [
                          _c("vs-row", [
                            _c("label", [
                              _vm._v(
                                _vm._s(
                                  _vm.$t("configurations.reservation2.preset") +
                                    "5"
                                )
                              )
                            ])
                          ])
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "vs-col",
                        { attrs: { "vs-lg": "6", "vs-xs": "12" } },
                        [
                          _c("input-number", {
                            directives: [
                              {
                                name: "validate",
                                rawName: "v-validate",
                                value: "required|min:2",
                                expression: "'required|min:2'"
                              }
                            ],
                            staticClass: "w-full",
                            attrs: { name: "preset5" },
                            model: {
                              value: _vm.vModel.ap_preset5,
                              callback: function($$v) {
                                _vm.$set(_vm.vModel, "ap_preset5", $$v)
                              },
                              expression: "vModel.ap_preset5"
                            }
                          }),
                          _vm._v(" "),
                          _c(
                            "span",
                            {
                              directives: [
                                {
                                  name: "show",
                                  rawName: "v-show",
                                  value: _vm.errors.has("preset5"),
                                  expression: "errors.has('preset5')"
                                }
                              ],
                              staticClass: "error-text text-danger"
                            },
                            [_vm._v(_vm._s(_vm.errors.first("preset5")))]
                          )
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "vs-row",
                    { attrs: { "vs-type": "flex", "vs-align": "center" } },
                    [
                      _c(
                        "vs-col",
                        { attrs: { "vs-lg": "5", "vs-xs": "12" } },
                        [
                          _c("vs-row", [
                            _c("label", [
                              _vm._v(
                                _vm._s(
                                  _vm.$t("configurations.reservation2.preset") +
                                    "6"
                                )
                              )
                            ])
                          ])
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "vs-col",
                        { attrs: { "vs-lg": "6", "vs-xs": "12" } },
                        [
                          _c("input-number", {
                            directives: [
                              {
                                name: "validate",
                                rawName: "v-validate",
                                value: "required|min:2",
                                expression: "'required|min:2'"
                              }
                            ],
                            staticClass: "w-full",
                            attrs: { name: "preset6" },
                            model: {
                              value: _vm.vModel.ap_preset6,
                              callback: function($$v) {
                                _vm.$set(_vm.vModel, "ap_preset6", $$v)
                              },
                              expression: "vModel.ap_preset6"
                            }
                          }),
                          _vm._v(" "),
                          _c(
                            "span",
                            {
                              directives: [
                                {
                                  name: "show",
                                  rawName: "v-show",
                                  value: _vm.errors.has("preset6"),
                                  expression: "errors.has('preset6')"
                                }
                              ],
                              staticClass: "error-text text-danger"
                            },
                            [_vm._v(_vm._s(_vm.errors.first("preset6")))]
                          )
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "vs-col",
                { attrs: { "vs-lg": "4", "vs-xs": "12" } },
                [
                  _c(
                    "vs-row",
                    { attrs: { "vs-type": "flex", "vs-align": "center" } },
                    [
                      _c(
                        "vs-col",
                        { attrs: { "vs-lg": "5", "vs-xs": "12" } },
                        [
                          _c("vs-row", [
                            _c("label", [
                              _vm._v(
                                _vm._s(
                                  _vm.$t("configurations.reservation2.preset") +
                                    "7"
                                )
                              )
                            ])
                          ])
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "vs-col",
                        { attrs: { "vs-lg": "6", "vs-xs": "12" } },
                        [
                          _c("input-number", {
                            directives: [
                              {
                                name: "validate",
                                rawName: "v-validate",
                                value: "required|min:2",
                                expression: "'required|min:2'"
                              }
                            ],
                            staticClass: "w-full",
                            attrs: { name: "preset7" },
                            model: {
                              value: _vm.vModel.ap_preset7,
                              callback: function($$v) {
                                _vm.$set(_vm.vModel, "ap_preset7", $$v)
                              },
                              expression: "vModel.ap_preset7"
                            }
                          }),
                          _vm._v(" "),
                          _c(
                            "span",
                            {
                              directives: [
                                {
                                  name: "show",
                                  rawName: "v-show",
                                  value: _vm.errors.has("preset7"),
                                  expression: "errors.has('preset7')"
                                }
                              ],
                              staticClass: "error-text text-danger"
                            },
                            [_vm._v(_vm._s(_vm.errors.first("preset7")))]
                          )
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "vs-row",
                    { attrs: { "vs-type": "flex", "vs-align": "center" } },
                    [
                      _c(
                        "vs-col",
                        { attrs: { "vs-lg": "5", "vs-xs": "12" } },
                        [
                          _c("vs-row", [
                            _c("label", [
                              _vm._v(
                                _vm._s(
                                  _vm.$t("configurations.reservation2.preset") +
                                    "8"
                                )
                              )
                            ])
                          ])
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "vs-col",
                        { attrs: { "vs-lg": "6", "vs-xs": "12" } },
                        [
                          _c("input-number", {
                            directives: [
                              {
                                name: "validate",
                                rawName: "v-validate",
                                value: "required|min:2",
                                expression: "'required|min:2'"
                              }
                            ],
                            staticClass: "w-full",
                            attrs: { name: "preset8" },
                            model: {
                              value: _vm.vModel.ap_preset8,
                              callback: function($$v) {
                                _vm.$set(_vm.vModel, "ap_preset8", $$v)
                              },
                              expression: "vModel.ap_preset8"
                            }
                          }),
                          _vm._v(" "),
                          _c(
                            "span",
                            {
                              directives: [
                                {
                                  name: "show",
                                  rawName: "v-show",
                                  value: _vm.errors.has("preset8"),
                                  expression: "errors.has('preset8')"
                                }
                              ],
                              staticClass: "error-text text-danger"
                            },
                            [_vm._v(_vm._s(_vm.errors.first("preset8")))]
                          )
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "vx-card",
        { staticClass: "mb-3", attrs: { title: "Other", collapseAction: "" } },
        [
          _c(
            "vs-row",
            [
              _c(
                "vs-col",
                { attrs: { "vs-lg": "6", "vs-xs": "12" } },
                [
                  _c(
                    "vs-checkbox",
                    {
                      staticClass: "mb-1",
                      model: {
                        value: _vm.vModel.auto_generate_company_code,
                        callback: function($$v) {
                          _vm.$set(
                            _vm.vModel,
                            "auto_generate_company_code",
                            $$v
                          )
                        },
                        expression: "vModel.auto_generate_company_code"
                      }
                    },
                    [
                      _vm._v(
                        _vm._s(
                          _vm.$t(
                            "configurations.reservation2.autoGenerateCompanyCode"
                          )
                        )
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "vs-row",
                    {
                      attrs: {
                        "vs-type": "flex",
                        "vs-justify": "flex-start",
                        "vs-align": "center"
                      }
                    },
                    [
                      _c(
                        "vs-col",
                        { attrs: { "vs-lg": "5", "vs-xs": "12" } },
                        [
                          _c("vs-row", [
                            _c("label", [
                              _vm._v(
                                _vm._s(
                                  _vm.$t(
                                    "configurations.reservation2.companyCodeDigit"
                                  )
                                )
                              )
                            ])
                          ])
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "vs-col",
                        { attrs: { "vs-lg": "4", "vs-xs": "12" } },
                        [
                          _c("vs-input-number", {
                            attrs: { min: "1" },
                            model: {
                              value: _vm.vModel.company_code_digit,
                              callback: function($$v) {
                                _vm.$set(_vm.vModel, "company_code_digit", $$v)
                              },
                              expression: "vModel.company_code_digit"
                            }
                          })
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "vs-col",
                { attrs: { "vs-lg": "6", "vs-xs": "12" } },
                [
                  _c(
                    "vs-checkbox",
                    {
                      staticClass: "mb-1",
                      model: {
                        value: _vm.vModel.lock_folio_on_check_in,
                        callback: function($$v) {
                          _vm.$set(_vm.vModel, "lock_folio_on_check_in", $$v)
                        },
                        expression: "vModel.lock_folio_on_check_in"
                      }
                    },
                    [
                      _vm._v(
                        _vm._s(
                          _vm.$t(
                            "configurations.reservation2.lockFolioOnCheckIn"
                          )
                        )
                      )
                    ]
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/components/Number.vue?vue&type=template&id=d1e00946&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/components/Number.vue?vue&type=template&id=d1e00946& ***!
  \*************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("vs-input", {
        staticClass: "w-full number",
        attrs: {
          "description-text": _vm.description,
          type: "text",
          maxLength: 15,
          label: _vm.label,
          disabled: _vm.disabled
        },
        on: {
          click: _vm.select,
          blur: function($event) {
            _vm.isInputActive = false
          },
          focus: function($event) {
            _vm.isInputActive = true
          }
        },
        model: {
          value: _vm.displayValue,
          callback: function($$v) {
            _vm.displayValue = $$v
          },
          expression: "displayValue"
        }
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/views/pages/Tools/configurations/Reservation2.vue":
/*!****************************************************************************!*\
  !*** ./resources/js/src/views/pages/Tools/configurations/Reservation2.vue ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Reservation2_vue_vue_type_template_id_a7e583c2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Reservation2.vue?vue&type=template&id=a7e583c2& */ "./resources/js/src/views/pages/Tools/configurations/Reservation2.vue?vue&type=template&id=a7e583c2&");
/* harmony import */ var _Reservation2_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Reservation2.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/Tools/configurations/Reservation2.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Reservation2_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Reservation2_vue_vue_type_template_id_a7e583c2___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Reservation2_vue_vue_type_template_id_a7e583c2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/Tools/configurations/Reservation2.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/Tools/configurations/Reservation2.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/Tools/configurations/Reservation2.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Reservation2_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Reservation2.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Tools/configurations/Reservation2.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Reservation2_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/Tools/configurations/Reservation2.vue?vue&type=template&id=a7e583c2&":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/Tools/configurations/Reservation2.vue?vue&type=template&id=a7e583c2& ***!
  \***********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Reservation2_vue_vue_type_template_id_a7e583c2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Reservation2.vue?vue&type=template&id=a7e583c2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Tools/configurations/Reservation2.vue?vue&type=template&id=a7e583c2&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Reservation2_vue_vue_type_template_id_a7e583c2___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Reservation2_vue_vue_type_template_id_a7e583c2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/pages/components/Number.vue":
/*!************************************************************!*\
  !*** ./resources/js/src/views/pages/components/Number.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Number_vue_vue_type_template_id_d1e00946___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Number.vue?vue&type=template&id=d1e00946& */ "./resources/js/src/views/pages/components/Number.vue?vue&type=template&id=d1e00946&");
/* harmony import */ var _Number_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Number.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/components/Number.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Number_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Number_vue_vue_type_template_id_d1e00946___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Number_vue_vue_type_template_id_d1e00946___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/components/Number.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/components/Number.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/src/views/pages/components/Number.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Number_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Number.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/components/Number.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Number_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/components/Number.vue?vue&type=template&id=d1e00946&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/src/views/pages/components/Number.vue?vue&type=template&id=d1e00946& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Number_vue_vue_type_template_id_d1e00946___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Number.vue?vue&type=template&id=d1e00946& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/components/Number.vue?vue&type=template&id=d1e00946&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Number_vue_vue_type_template_id_d1e00946___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Number_vue_vue_type_template_id_d1e00946___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);