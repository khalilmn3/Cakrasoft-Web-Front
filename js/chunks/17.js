(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[17],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/reservations/components/CancelReservation.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/reservations/components/CancelReservation.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _views_pages_components_Credential__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/views/pages/components/Credential */ "./resources/js/src/views/pages/components/Credential.vue");
/* harmony import */ var _utils_alert_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/utils/alert.js */ "./resources/js/src/utils/alert.js");
/* harmony import */ var _views_pages_components_Number__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/views/pages/components/Number */ "./resources/js/src/views/pages/components/Number.vue");
/* harmony import */ var _api_reservation_deposit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/api/reservation/deposit */ "./resources/js/src/api/reservation/deposit.js");
/* harmony import */ var _api_reservation_reservation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/api/reservation/reservation */ "./resources/js/src/api/reservation/reservation.js");


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





var depositResource = new _api_reservation_deposit__WEBPACK_IMPORTED_MODULE_4__["default"]();
var reservationResource = new _api_reservation_reservation__WEBPACK_IMPORTED_MODULE_5__["default"]();
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    isDayendClose: Boolean
  },
  components: {
    Credential: _views_pages_components_Credential__WEBPACK_IMPORTED_MODULE_1__["default"],
    InputNumber: _views_pages_components_Number__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  data: function data() {
    return {
      vCancel: {},
      modalCancelReservation: false,
      activeCredentialPrompt: false,
      isCredential: false,
      credentialTitle: '',
      specialAccessType: null,
      reservationStatusX: '',
      reservationNumber: null,
      credential: {
        user: '',
        pass: '',
        reason: ''
      },
      totalDeposit: 0,
      btnSaveDisabled: false
    };
  },
  methods: {
    //------------------START DEPOSIT CANCEL RESERVATION CRUD-------------//
    showCancelReservation: function showCancelReservation(status, reservationNumber) {
      this.btnSaveDisabled = false;
      this.credential = {};
      this.credentialTitle = status == this.reservationStatus.noShow ? 'No Show Reservation' : status == this.reservationStatus["void"] ? 'Void Reservation' : 'Cancel Reservation';
      this.reservationStatusX = status;
      this.reservationNumber = reservationNumber;
      this.getDepositListDetail(reservationNumber, status);
    },
    getLookupDeposit: function () {
      var _getLookupDeposit = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var _ref, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return depositResource.lookup();

              case 3:
                _ref = _context.sent;
                data = _ref.data;
                this.dataLookupDeposit = data;
                this.getExchangeRate();
                this.$vs.loading.close('.layout--main>.con-vs-loading');
                _context.next = 13;
                break;

              case 10:
                _context.prev = 10;
                _context.t0 = _context["catch"](0);
                _utils_alert_js__WEBPACK_IMPORTED_MODULE_2__["default"].errorFetchDataAlert();

              case 13:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 10]]);
      }));

      function getLookupDeposit() {
        return _getLookupDeposit.apply(this, arguments);
      }

      return getLookupDeposit;
    }(),
    getDepositListDetail: function () {
      var _getDepositListDetail = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(reservationNumber, status) {
        var _ref2, data, balance;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return reservationResource.reservationStatus(reservationNumber);

              case 2:
                _ref2 = _context2.sent;
                data = _ref2.data;
                this.$vs.loading.close('.layout--main>.con-vs-loading');
                balance = -data.balance.balance;
                this.vCancel = {
                  full_name: data.full_name,
                  room_number: data.room_number,
                  total_deposit: balance,
                  cancel_fee: 0,
                  cancel_by: this.userInfo.code,
                  is_ap_refund: '0',
                  refund: balance,
                  document_number: '',
                  is_close_desk_folio: true,
                  reason: '',
                  reservation_number: reservationNumber,
                  status_code: status,
                  user_id: this.userInfo.code
                };
                this.totalDeposit = balance;

                if (!(data.reservation_status == this.reservationStatus["new"] || data.reservation_status == this.reservationStatus.waitlist)) {
                  _context2.next = 12;
                  break;
                }

                if (status == this.reservationStatus["void"]) {
                  if (balance > 0) {
                    this.$vs.dialog({
                      color: 'danger',
                      title: this.$t('message.informationTitle'),
                      text: this.$t('message.cannotVoidReservation'),
                      acceptText: 'Ok'
                    });
                  } else {
                    this.activeCredentialPrompt = true;
                    this.isCredential = true;
                    this.specialAccessType = this.accessSpecialOrder.voidReservation;
                  }
                } else if (status === this.reservationStatus.cancel || status === this.reservationStatus.noShow) {
                  if (balance > 0) {
                    this.modalCancelReservation = true;
                  } else {
                    this.activeCredentialPrompt = true;
                    this.isCredential = false;
                  }
                }

                _context2.next = 15;
                break;

              case 12:
                if (!this.isDayendClose) {
                  _context2.next = 15;
                  break;
                }

                this.precheck();
                return _context2.abrupt("return");

              case 15:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function getDepositListDetail(_x, _x2) {
        return _getDepositListDetail.apply(this, arguments);
      }

      return getDepositListDetail;
    }(),
    handleSaveCancelReservation: function () {
      var _handleSaveCancelReservation = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
        var _this = this;

        var _ref3, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                this.btnSaveDisabled = true;
                _context3.next = 3;
                return reservationResource.reservationStatus(this.reservationNumber);

              case 3:
                _ref3 = _context3.sent;
                data = _ref3.data;
                this.totalDeposit = -data.balance.balance;

                if (this.vCancel.cancel_fee > this.totalDeposit) {
                  this.$vs.dialog({
                    color: 'danger',
                    title: 'Warning',
                    text: 'Cancelation fee cannot be greater than Total Deposit',
                    accept: function accept() {
                      _this.vCancel.cancel_fee = 0;
                      _this.vCancel.refund = _this.totalDeposit;
                    }
                  });
                } else {
                  this.modalCancelReservation = false;
                  this.activeCredentialPrompt = true;
                  this.isCredential = false;
                }

              case 7:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function handleSaveCancelReservation() {
        return _handleSaveCancelReservation.apply(this, arguments);
      }

      return handleSaveCancelReservation;
    }(),
    updateCancelReservation: function () {
      var _updateCancelReservation = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                this.vCancel.reason = this.credential.reason;

                if (this.reservationStatusX === this.reservationStatus["void"]) {
                  this.vCancel.cancel_by = this.credential.user;
                }

                _context4.next = 4;
                return reservationResource.cancelReservation(this.vCancel);

              case 4:
                if (!this.isDayendClose) {
                  _context4.next = 9;
                  break;
                }

                this.precheck();
                return _context4.abrupt("return");

              case 9:
                this.$emit('refreshData');

              case 10:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function updateCancelReservation() {
        return _updateCancelReservation.apply(this, arguments);
      }

      return updateCancelReservation;
    }(),
    precheck: function precheck() {
      this.$emit('precheck');
    },
    closeCredential: function closeCredential() {
      this.$vs.loading.close('.layout--main>.con-vs-loading');
    } //------------------END DEPOSIT CANCEL RESERVATION CRUD-------------//

  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/reservations/components/CancelReservation.vue?vue&type=template&id=3cc3875c&":
/*!*************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/reservations/components/CancelReservation.vue?vue&type=template&id=3cc3875c& ***!
  \*************************************************************************************************************************************************************************************************************************************************/
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
      _c(
        "vs-popup",
        {
          staticClass: "width-400p",
          attrs: {
            active: _vm.modalCancelReservation,
            title:
              _vm.reservationStatusX == _vm.reservationStatus.noShow
                ? "No Show Reservation"
                : "Cancel Reservation"
          },
          on: {
            "update:active": function($event) {
              _vm.modalCancelReservation = $event
            }
          }
        },
        [
          _c(
            "div",
            { staticClass: "popup-body" },
            [
              _c(
                "VuePerfectScrollbar",
                {
                  staticClass: "scroll-area-popup-form pt-2",
                  attrs: { settings: _vm.perfectScrollbarSettings }
                },
                [
                  _c(
                    "vs-row",
                    {
                      staticClass: "mt-3",
                      attrs: {
                        "vs-type": "flex",
                        "vs-justify": "space-between"
                      }
                    },
                    [
                      _c("vs-input", {
                        staticClass: "w-full ",
                        attrs: {
                          disabled: "",
                          label: _vm.$t("reservation.fullname"),
                          placeholder: _vm.$t("reservation.fullname"),
                          maxLength: 50
                        },
                        model: {
                          value: _vm.vCancel.full_name,
                          callback: function($$v) {
                            _vm.$set(_vm.vCancel, "full_name", $$v)
                          },
                          expression: "vCancel.full_name"
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "vs-row",
                    {
                      staticClass: "mt-3",
                      attrs: {
                        "vs-type": "flex",
                        "vs-justify": "space-between"
                      }
                    },
                    [
                      _c("vs-input", {
                        staticClass: "w-full md:w-4/12",
                        attrs: {
                          disabled: "",
                          label: _vm.$t("reservation.room"),
                          placeholder: _vm.$t("reservation.room"),
                          maxLength: 50
                        },
                        model: {
                          value: _vm.vCancel.room_number,
                          callback: function($$v) {
                            _vm.$set(_vm.vCancel, "room_number", $$v)
                          },
                          expression: "vCancel.room_number"
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "vs-row",
                    {
                      staticClass: "mt-3",
                      attrs: {
                        "vs-type": "flex",
                        "vs-justify": "space-between"
                      }
                    },
                    [
                      _c("input-number", {
                        staticClass: "w-full",
                        attrs: {
                          disabled: "",
                          label: _vm.$t("transaction.totalDeposit"),
                          placeholder: _vm.$t("transaction.totalDeposit")
                        },
                        model: {
                          value: _vm.vCancel.total_deposit,
                          callback: function($$v) {
                            _vm.$set(_vm.vCancel, "total_deposit", $$v)
                          },
                          expression: "vCancel.total_deposit"
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "vs-row",
                    {
                      staticClass: "mt-3",
                      attrs: {
                        "vs-type": "flex",
                        "vs-justify": "space-between"
                      }
                    },
                    [
                      _c("input-number", {
                        staticClass: "w-full",
                        attrs: {
                          label: _vm.$t("transaction.cancelFee"),
                          placeholder: _vm.$t("transaction.cancelFee")
                        },
                        on: {
                          input: function($event) {
                            _vm.vCancel.refund =
                              _vm.vCancel.total_deposit - _vm.vCancel.cancel_fee
                          }
                        },
                        model: {
                          value: _vm.vCancel.cancel_fee,
                          callback: function($$v) {
                            _vm.$set(_vm.vCancel, "cancel_fee", $$v)
                          },
                          expression: "vCancel.cancel_fee"
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _vm.reservationStatusX == _vm.reservationStatus.cancel
                    ? _c(
                        "vs-row",
                        [
                          _c(
                            "vs-radio",
                            {
                              staticClass: "w-full wrap-form-select md:w-6/12",
                              attrs: {
                                "vs-name": "is_ap_refund",
                                "vs-value": "0"
                              },
                              model: {
                                value: _vm.vCancel.is_ap_refund,
                                callback: function($$v) {
                                  _vm.$set(_vm.vCancel, "is_ap_refund", $$v)
                                },
                                expression: "vCancel.is_ap_refund"
                              }
                            },
                            [_vm._v(_vm._s(_vm.$t("transaction.refund")))]
                          ),
                          _vm._v(" "),
                          _c(
                            "vs-radio",
                            {
                              staticClass: "w-full wrap-form-select md:w-6/12",
                              attrs: {
                                "vs-name": "is_ap_refund",
                                "vs-value": "-1"
                              },
                              model: {
                                value: _vm.vCancel.is_ap_refund,
                                callback: function($$v) {
                                  _vm.$set(_vm.vCancel, "is_ap_refund", $$v)
                                },
                                expression: "vCancel.is_ap_refund"
                              }
                            },
                            [_vm._v(_vm._s(_vm.$t("transaction.apRefund")))]
                          )
                        ],
                        1
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _c(
                    "vs-row",
                    {
                      staticClass: "mt-3",
                      attrs: {
                        "vs-type": "flex",
                        "vs-justify": "space-between"
                      }
                    },
                    [
                      _c("input-number", {
                        staticClass: "w-full",
                        attrs: {
                          disabled: "",
                          label:
                            _vm.vCancel.is_ap_refund == "-1" ||
                            _vm.reservationStatusX ==
                              _vm.reservationStatus.noShow
                              ? _vm.$t("transaction.apRefund")
                              : _vm.$t("transaction.refund"),
                          placeholder: _vm.$t("transaction.refund")
                        },
                        model: {
                          value: _vm.vCancel.refund,
                          callback: function($$v) {
                            _vm.$set(_vm.vCancel, "refund", $$v)
                          },
                          expression: "vCancel.refund"
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _vm.reservationStatusX == _vm.reservationStatus.cancel
                    ? _c(
                        "vs-row",
                        {
                          staticClass: "mt-3",
                          attrs: {
                            "vs-type": "flex",
                            "vs-justify": "space-between"
                          }
                        },
                        [
                          _c("vs-input", {
                            staticClass: "w-full",
                            attrs: {
                              label: _vm.$t("transaction.docNumber"),
                              placeholder: _vm.$t("transaction.docNumber"),
                              maxLength: 50
                            },
                            model: {
                              value: _vm.vCancel.document_number,
                              callback: function($$v) {
                                _vm.$set(_vm.vCancel, "document_number", $$v)
                              },
                              expression: "vCancel.document_number"
                            }
                          })
                        ],
                        1
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _c(
                    "vs-row",
                    { staticClass: "mt-3 wrap-form-select w-full" },
                    [
                      _c(
                        "vs-checkbox",
                        {
                          staticClass: "w-full",
                          staticStyle: { padding: "0px", margin: "inherit" },
                          model: {
                            value: _vm.vCancel.is_close_desk_folio,
                            callback: function($$v) {
                              _vm.$set(_vm.vCancel, "is_close_desk_folio", $$v)
                            },
                            expression: "vCancel.is_close_desk_folio"
                          }
                        },
                        [
                          _vm._v(
                            _vm._s(_vm.$t("transaction.closeCreatedFolio"))
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
              _c("vs-divider")
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "footer",
            { staticClass: "footer" },
            [
              _c(
                "vs-row",
                { attrs: { "vs-justify": "space-between" } },
                [
                  _c(
                    "vs-button",
                    {
                      attrs: { disabled: _vm.btnSaveDisabled, icon: "save" },
                      on: { click: _vm.handleSaveCancelReservation }
                    },
                    [_vm._v("Save")]
                  ),
                  _vm._v(" "),
                  _c(
                    "vs-button",
                    {
                      attrs: { color: "danger" },
                      on: {
                        click: function($event) {
                          _vm.modalCancelReservation = !_vm.modalCancelReservation
                        }
                      }
                    },
                    [_vm._v("Close")]
                  )
                ],
                1
              )
            ],
            1
          )
        ]
      ),
      _vm._v(" "),
      _c("credential", {
        attrs: {
          value: _vm.credential,
          specialAccessType: _vm.specialAccessType,
          activeCredential: _vm.activeCredentialPrompt,
          isCredential: _vm.isCredential,
          isReason: true,
          title: _vm.credentialTitle
        },
        on: {
          "update:active-credential": function(val) {
            return (_vm.activeCredentialPrompt = val)
          },
          closeCredential: _vm.closeCredential,
          acceptReason: _vm.updateCancelReservation,
          input: function(newValue) {
            _vm.credential = newValue
          }
        }
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/views/pages/reservations/components/CancelReservation.vue":
/*!************************************************************************************!*\
  !*** ./resources/js/src/views/pages/reservations/components/CancelReservation.vue ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CancelReservation_vue_vue_type_template_id_3cc3875c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CancelReservation.vue?vue&type=template&id=3cc3875c& */ "./resources/js/src/views/pages/reservations/components/CancelReservation.vue?vue&type=template&id=3cc3875c&");
/* harmony import */ var _CancelReservation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CancelReservation.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/reservations/components/CancelReservation.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _CancelReservation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CancelReservation_vue_vue_type_template_id_3cc3875c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CancelReservation_vue_vue_type_template_id_3cc3875c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/reservations/components/CancelReservation.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/reservations/components/CancelReservation.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/reservations/components/CancelReservation.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CancelReservation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./CancelReservation.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/reservations/components/CancelReservation.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CancelReservation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/reservations/components/CancelReservation.vue?vue&type=template&id=3cc3875c&":
/*!*******************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/reservations/components/CancelReservation.vue?vue&type=template&id=3cc3875c& ***!
  \*******************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CancelReservation_vue_vue_type_template_id_3cc3875c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./CancelReservation.vue?vue&type=template&id=3cc3875c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/reservations/components/CancelReservation.vue?vue&type=template&id=3cc3875c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CancelReservation_vue_vue_type_template_id_3cc3875c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CancelReservation_vue_vue_type_template_id_3cc3875c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);