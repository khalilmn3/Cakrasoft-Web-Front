(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/components/Credential.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/components/Credential.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_alert_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/utils/alert.js */ "./resources/js/src/utils/alert.js");
/* harmony import */ var _api_specialAccess_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/api/specialAccess.js */ "./resources/js/src/api/specialAccess.js");


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


var specialAccessResource = new _api_specialAccess_js__WEBPACK_IMPORTED_MODULE_2__["default"]();
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    value: Object,
    specialAccessType: Number,
    activeCredential: Boolean,
    title: String,
    isCredential: Boolean,
    isReason: Boolean
  },
  data: function data() {
    return {
      mActiveCredential: false,
      dbErrors: null,
      showReason: false,
      btnDisabled: false
    };
  },
  methods: {
    checkSpecialAccess: function () {
      var _checkSpecialAccess = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var _this = this;

        var encryptPassword, encryptAccessType, params;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                encryptPassword = CryptoJS.AES.encrypt(this.value.pass, this.mCryptoKey, {
                  format: CryptoJSAesJson
                }).toString();
                encryptAccessType = CryptoJS.AES.encrypt(this.specialAccessType.toString(), this.mCryptoKey, {
                  format: CryptoJSAesJson
                }).toString();
                params = {
                  user_id: this.value.user,
                  password: encryptPassword,
                  specialAccessType: encryptAccessType,
                  systemCode: this.constProgramVariable.defaultSystemCode
                };
                this.$validator.validateAll('credential').then(
                /*#__PURE__*/
                function () {
                  var _ref = _asyncToGenerator(
                  /*#__PURE__*/
                  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(result) {
                    var _ref2, data;

                    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
                      while (1) {
                        switch (_context.prev = _context.next) {
                          case 0:
                            if (!result) {
                              _context.next = 19;
                              break;
                            }

                            _this.$vs.loading({
                              container: '#btn-accept',
                              scale: _this.scaleLoadingButton
                            });

                            _context.prev = 2;
                            _this.btnDisabled = true;
                            _context.next = 6;
                            return specialAccessResource.checkSpecialAccess(params);

                          case 6:
                            _ref2 = _context.sent;
                            data = _ref2.data;
                            _this.btnDisabled = false;

                            if (data === true) {
                              if (_this.isReason) {
                                _this.showReason = true;

                                _this.$nextTick(function () {
                                  document.getElementById("reasonX").focus();
                                });
                              } else {
                                _this.mActiveCredential = false;

                                _this.$emit('acceptCredential');
                              }
                            } else {
                              _this.mActiveCredential = false;

                              _this.closedCredential();

                              _this.unauthorizedDialog();
                            }

                            _this.$vs.loading.close('#btn-accept>.con-vs-loading');

                            _context.next = 19;
                            break;

                          case 13:
                            _context.prev = 13;
                            _context.t0 = _context["catch"](2);
                            _this.btnDisabled = false;
                            _this.mActiveCredential = false;

                            _this.closedCredential();

                            _this.unauthorizedDialog();

                          case 19:
                          case "end":
                            return _context.stop();
                        }
                      }
                    }, _callee, null, [[2, 13]]);
                  }));

                  return function (_x) {
                    return _ref.apply(this, arguments);
                  };
                }());

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function checkSpecialAccess() {
        return _checkSpecialAccess.apply(this, arguments);
      }

      return checkSpecialAccess;
    }(),
    unauthorizedDialog: function unauthorizedDialog() {
      this.$vs.dialog({
        color: 'danger',
        title: 'Information',
        text: 'You dont have permission, contact your administrator',
        acceptText: 'Ok'
      });
    },
    //execute on failed and close credential
    closedCredential: function closedCredential() {
      this.$emit('closedCredential');
    },
    showCredential: function showCredential() {
      var _this2 = this;

      this.btnDisabled = false;
      this.$validator.pause();
      this.$nextTick(function () {
        _this2.$validator.errors.clear();

        _this2.$validator.fields.items.forEach(function (field) {
          return field.reset();
        });

        _this2.$validator.fields.items.forEach(function (field) {
          return _this2.errors.remove(field);
        });

        _this2.$validator.resume();
      });
      this.dbErrors = null;
    },
    acceptReason: function acceptReason() {
      var _this3 = this;

      this.$validator.validateAll('reason').then(function (result) {
        if (result) {
          _this3.mActiveCredential = false;

          _this3.$emit('acceptReason');
        }
      });
    }
  },
  watch: {
    value: function value(newVal) {
      this.$emit('input', this.value);
    },
    mActiveCredential: function mActiveCredential(val) {
      this.$emit('update:active-credential', this.mActiveCredential);
    },
    activeCredential: function activeCredential() {
      if (this.activeCredential) {
        this.showCredential();

        if (this.isCredential) {
          this.$nextTick(function () {
            var elUser = document.getElementById("userX");

            if (elUser != null || elUser != undefined) {
              elUser.focus();
            }
          });
        }
      }

      this.showReason = !this.isCredential;
      this.mActiveCredential = this.activeCredential;
    }
  },
  computed: {
    userValidation: function userValidation() {
      return this.value.user.length > 0 && this.value.pass.length > 0;
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/components/Credential.vue?vue&type=style&index=0&id=01e7192a&scoped=true&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/components/Credential.vue?vue&type=style&index=0&id=01e7192a&scoped=true&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container span[data-v-01e7192a]{\n  font-size: 0.7rem;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/components/Credential.vue?vue&type=style&index=0&id=01e7192a&scoped=true&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/components/Credential.vue?vue&type=style&index=0&id=01e7192a&scoped=true&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader??ref--7-1!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Credential.vue?vue&type=style&index=0&id=01e7192a&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/components/Credential.vue?vue&type=style&index=0&id=01e7192a&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/components/Credential.vue?vue&type=template&id=01e7192a&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/components/Credential.vue?vue&type=template&id=01e7192a&scoped=true& ***!
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
    [
      _c(
        "vs-prompt",
        {
          staticClass: "width-450p",
          staticStyle: { "z-index": "530000" },
          attrs: {
            type: "confirm",
            "buttons-hidden": "",
            active: _vm.mActiveCredential,
            title: _vm.title || "Credential"
          },
          on: {
            "update:active": function($event) {
              _vm.mActiveCredential = $event
            }
          }
        },
        [
          _c("div", { staticClass: "container" }, [
            _vm.showReason == false
              ? _c("div", { attrs: { id: "credential" } }, [
                  _vm._v(
                    "\n                Enter the credential user and password to "
                  ),
                  _c("b", [_vm._v("continue")]),
                  _vm._v(".\n                "),
                  _c(
                    "div",
                    [
                      _c("vs-input", {
                        directives: [
                          {
                            name: "validate",
                            rawName: "v-validate",
                            value: "required",
                            expression: "'required'"
                          }
                        ],
                        staticClass: "w-full",
                        attrs: {
                          id: "userX",
                          icon: "person",
                          type: "text",
                          name: "user",
                          "label-placeholder": "User ID",
                          "data-vv-scope": "credential"
                        },
                        model: {
                          value: _vm.value.user,
                          callback: function($$v) {
                            _vm.$set(_vm.value, "user", $$v)
                          },
                          expression: "value.user"
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
                              value: _vm.errors.has("credential.user"),
                              expression: "errors.has('credential.user')"
                            }
                          ],
                          staticClass: "error-text text-danger"
                        },
                        [_vm._v(_vm._s(_vm.errors.first("credential.user")))]
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    [
                      _c("vs-input", {
                        directives: [
                          {
                            name: "validate",
                            rawName: "v-validate",
                            value: "required",
                            expression: "'required'"
                          }
                        ],
                        staticClass: "w-full",
                        attrs: {
                          id: "passwordX",
                          icon: "lock",
                          type: "password",
                          name: "password",
                          "label-placeholder": "Password",
                          "data-vv-scope": "credential"
                        },
                        on: {
                          keyup: function($event) {
                            if (
                              !$event.type.indexOf("key") &&
                              _vm._k(
                                $event.keyCode,
                                "enter",
                                13,
                                $event.key,
                                "Enter"
                              )
                            ) {
                              return null
                            }
                            _vm.isCredential
                              ? _vm.checkSpecialAccess()
                              : _vm.unauthorizedDialog()
                          }
                        },
                        model: {
                          value: _vm.value.pass,
                          callback: function($$v) {
                            _vm.$set(_vm.value, "pass", $$v)
                          },
                          expression: "value.pass"
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
                              value: _vm.errors.has("credential.password"),
                              expression: "errors.has('credential.password')"
                            }
                          ],
                          staticClass: "error-text text-danger"
                        },
                        [
                          _vm._v(
                            _vm._s(_vm.errors.first("credential.password"))
                          )
                        ]
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "span",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: _vm.dbErrors,
                          expression: "dbErrors"
                        }
                      ],
                      staticClass: "error-text text-danger"
                    },
                    [_vm._v(_vm._s(_vm._f("toString")(_vm.dbErrors)))]
                  )
                ])
              : _vm._e(),
            _vm._v(" "),
            _vm.showReason
              ? _c(
                  "div",
                  [
                    _vm._v(
                      "\n                Please input reason\n                "
                    ),
                    _c("vs-input", {
                      directives: [
                        {
                          name: "validate",
                          rawName: "v-validate",
                          value: "required",
                          expression: "'required'"
                        }
                      ],
                      staticClass: "w-full",
                      attrs: {
                        id: "reasonX",
                        "label-placeholder": "Reason",
                        name: "reason",
                        "data-vv-scope": "reason"
                      },
                      on: {
                        keyup: function($event) {
                          if (
                            !$event.type.indexOf("key") &&
                            _vm._k(
                              $event.keyCode,
                              "enter",
                              13,
                              $event.key,
                              "Enter"
                            )
                          ) {
                            return null
                          }
                          return _vm.acceptReason()
                        }
                      },
                      model: {
                        value: _vm.value.reason,
                        callback: function($$v) {
                          _vm.$set(_vm.value, "reason", $$v)
                        },
                        expression: "value.reason"
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
                            value: _vm.errors.has("reason.reason"),
                            expression: "errors.has('reason.reason')"
                          }
                        ],
                        staticClass: "error-text text-danger"
                      },
                      [_vm._v(_vm._s(_vm.errors.first("reason.reason")))]
                    )
                  ],
                  1
                )
              : _vm._e()
          ]),
          _vm._v(" "),
          _c(
            "vs-row",
            {
              staticClass: "mt-6 footer",
              attrs: { "vs-type": "flex", "vs-justify": "flex-end" }
            },
            [
              _c(
                "vs-button",
                {
                  staticClass: "vs-con-loading__container mr-2",
                  attrs: { disabled: _vm.btnDisabled, id: "btn-accept" },
                  on: {
                    click: function($event) {
                      !_vm.showReason
                        ? _vm.checkSpecialAccess()
                        : _vm.acceptReason()
                    }
                  }
                },
                [_vm._v("Accept")]
              ),
              _vm._v(" "),
              _c(
                "vs-button",
                {
                  staticClass: "btn-close",
                  attrs: { color: "grey" },
                  on: {
                    click: function($event) {
                      _vm.mActiveCredential = false
                      _vm.closedCredential()
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
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/api/guestinhouse/guestInHouse.js":
/*!***********************************************************!*\
  !*** ./resources/js/src/api/guestinhouse/guestInHouse.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GuestInHouseResource; });
/* harmony import */ var _api_resource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/api/resource */ "./resources/js/src/api/resource.js");
/* harmony import */ var _utils_request__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/utils/request */ "./resources/js/src/utils/request.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var tableName = 'Folio';
var uri = 'guestinhouse';

var GuestInHouseResource =
/*#__PURE__*/
function (_Resource) {
  _inherits(GuestInHouseResource, _Resource);

  function GuestInHouseResource() {
    _classCallCheck(this, GuestInHouseResource);

    return _possibleConstructorReturn(this, _getPrototypeOf(GuestInHouseResource).call(this, 'guestinhouse'));
  }

  _createClass(GuestInHouseResource, [{
    key: "checkOut",
    value: function checkOut(data) {
      return Object(_utils_request__WEBPACK_IMPORTED_MODULE_1__["default"])({
        url: '/' + uri + '/checkout',
        method: 'post',
        data: data
      });
    }
  }, {
    key: "complimentHu",
    value: function complimentHu(data) {
      return Object(_utils_request__WEBPACK_IMPORTED_MODULE_1__["default"])({
        url: '/' + uri + '/compliment',
        method: 'post',
        data: data
      });
    }
  }, {
    key: "autoRoomCharge",
    value: function autoRoomCharge(data) {
      return Object(_utils_request__WEBPACK_IMPORTED_MODULE_1__["default"])({
        url: '/' + uri + '/posting/autoroomcharge',
        method: 'post',
        data: data
      });
    }
  }, {
    key: "moveRoom",
    value: function moveRoom(data) {
      return Object(_utils_request__WEBPACK_IMPORTED_MODULE_1__["default"])({
        url: '/' + uri + '/other/moveroom',
        method: 'post',
        data: data
      });
    }
  }, {
    key: "switchRoom",
    value: function switchRoom(data) {
      return Object(_utils_request__WEBPACK_IMPORTED_MODULE_1__["default"])({
        url: '/' + uri + '/other/switchroom',
        method: 'post',
        data: data
      });
    }
  }, {
    key: "listSwitchRoom",
    value: function listSwitchRoom(data) {
      return Object(_utils_request__WEBPACK_IMPORTED_MODULE_1__["default"])({
        url: '/' + uri + '/other/list/switchroom',
        method: 'post',
        data: data
      });
    }
  }, {
    key: "lock",
    value: function lock(data) {
      return Object(_utils_request__WEBPACK_IMPORTED_MODULE_1__["default"])({
        url: '/' + uri + '/other/lock',
        method: 'post',
        data: data
      });
    }
  }, {
    key: "incognito",
    value: function incognito(data) {
      return Object(_utils_request__WEBPACK_IMPORTED_MODULE_1__["default"])({
        url: '/' + uri + '/other/incognito',
        method: 'post',
        data: data
      });
    }
  }, {
    key: "cancelCheckIn",
    value: function cancelCheckIn(data) {
      return Object(_utils_request__WEBPACK_IMPORTED_MODULE_1__["default"])({
        url: '/' + uri + '/other/cancel',
        method: 'post',
        data: data
      });
    }
  }, {
    key: "message",
    value: function message(data) {
      return Object(_utils_request__WEBPACK_IMPORTED_MODULE_1__["default"])({
        url: '/' + uri + '/other/message',
        method: 'post',
        data: data
      });
    }
  }, {
    key: "toDo",
    value: function toDo(data) {
      return Object(_utils_request__WEBPACK_IMPORTED_MODULE_1__["default"])({
        url: '/' + uri + '/other/todo',
        method: 'post',
        data: data
      });
    }
  }, {
    key: "log",
    value: function log(id) {
      return Object(_utils_request__WEBPACK_IMPORTED_MODULE_1__["default"])({
        url: '/tracking/log/' + tableName + '/' + id,
        method: 'get'
      });
    }
  }, {
    key: "dataLookup",
    value: function dataLookup() {
      return Object(_utils_request__WEBPACK_IMPORTED_MODULE_1__["default"])({
        url: '/reservation/form/datalookup',
        method: 'get'
      });
    }
  }, {
    key: "roomNumber",
    value: function roomNumber(params) {
      return Object(_utils_request__WEBPACK_IMPORTED_MODULE_1__["default"])({
        url: '/reservation/form/roomnumber',
        method: 'post',
        data: params
      });
    }
  }, {
    key: "roomRate",
    value: function roomRate(params) {
      return Object(_utils_request__WEBPACK_IMPORTED_MODULE_1__["default"])({
        url: '/reservation/form/roomrate',
        method: 'get',
        params: params
      });
    }
  }, {
    key: "dailyRate",
    value: function dailyRate(params) {
      return Object(_utils_request__WEBPACK_IMPORTED_MODULE_1__["default"])({
        url: '/reservation/form/dailyrate',
        method: 'get',
        params: params
      });
    }
  }, {
    key: "state",
    value: function state(params) {
      return Object(_utils_request__WEBPACK_IMPORTED_MODULE_1__["default"])({
        url: '/reservation/form/citystate',
        method: 'get',
        params: params
      });
    }
  }, {
    key: "guestProfile",
    value: function guestProfile() {
      return Object(_utils_request__WEBPACK_IMPORTED_MODULE_1__["default"])({
        url: '/reservation/form/guestprofile',
        method: 'get'
      });
    }
  }, {
    key: "logUserUpdateGuestInHouse",
    value: function logUserUpdateGuestInHouse(params) {
      return Object(_utils_request__WEBPACK_IMPORTED_MODULE_1__["default"])({
        url: '/guestinhouse/loguserupdateguestinhouse',
        method: 'post',
        data: params
      });
    }
  }]);

  return GuestInHouseResource;
}(_api_resource__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./resources/js/src/api/specialAccess.js":
/*!***********************************************!*\
  !*** ./resources/js/src/api/specialAccess.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SpecialAccessResource; });
/* harmony import */ var _api_resource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/api/resource */ "./resources/js/src/api/resource.js");
/* harmony import */ var _utils_request__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/utils/request */ "./resources/js/src/utils/request.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var uri = 'special-access';

var SpecialAccessResource =
/*#__PURE__*/
function (_Resource) {
  _inherits(SpecialAccessResource, _Resource);

  function SpecialAccessResource() {
    _classCallCheck(this, SpecialAccessResource);

    return _possibleConstructorReturn(this, _getPrototypeOf(SpecialAccessResource).call(this, uri));
  }

  _createClass(SpecialAccessResource, [{
    key: "checkSpecialAccess",
    value: function checkSpecialAccess(data) {
      return Object(_utils_request__WEBPACK_IMPORTED_MODULE_1__["default"])({
        url: '/' + uri + '/check',
        method: 'post',
        data: data
      });
    }
  }]);

  return SpecialAccessResource;
}(_api_resource__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./resources/js/src/views/pages/components/Credential.vue":
/*!****************************************************************!*\
  !*** ./resources/js/src/views/pages/components/Credential.vue ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Credential_vue_vue_type_template_id_01e7192a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Credential.vue?vue&type=template&id=01e7192a&scoped=true& */ "./resources/js/src/views/pages/components/Credential.vue?vue&type=template&id=01e7192a&scoped=true&");
/* harmony import */ var _Credential_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Credential.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/components/Credential.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Credential_vue_vue_type_style_index_0_id_01e7192a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Credential.vue?vue&type=style&index=0&id=01e7192a&scoped=true&lang=css& */ "./resources/js/src/views/pages/components/Credential.vue?vue&type=style&index=0&id=01e7192a&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Credential_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Credential_vue_vue_type_template_id_01e7192a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Credential_vue_vue_type_template_id_01e7192a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "01e7192a",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/components/Credential.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/components/Credential.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/src/views/pages/components/Credential.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Credential_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Credential.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/components/Credential.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Credential_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/components/Credential.vue?vue&type=style&index=0&id=01e7192a&scoped=true&lang=css&":
/*!*************************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/components/Credential.vue?vue&type=style&index=0&id=01e7192a&scoped=true&lang=css& ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Credential_vue_vue_type_style_index_0_id_01e7192a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader??ref--7-1!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Credential.vue?vue&type=style&index=0&id=01e7192a&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/components/Credential.vue?vue&type=style&index=0&id=01e7192a&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Credential_vue_vue_type_style_index_0_id_01e7192a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Credential_vue_vue_type_style_index_0_id_01e7192a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Credential_vue_vue_type_style_index_0_id_01e7192a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Credential_vue_vue_type_style_index_0_id_01e7192a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Credential_vue_vue_type_style_index_0_id_01e7192a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/src/views/pages/components/Credential.vue?vue&type=template&id=01e7192a&scoped=true&":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/components/Credential.vue?vue&type=template&id=01e7192a&scoped=true& ***!
  \***********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Credential_vue_vue_type_template_id_01e7192a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Credential.vue?vue&type=template&id=01e7192a&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/components/Credential.vue?vue&type=template&id=01e7192a&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Credential_vue_vue_type_template_id_01e7192a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Credential_vue_vue_type_template_id_01e7192a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/pages/components/lock.js":
/*!*********************************************************!*\
  !*** ./resources/js/src/views/pages/components/lock.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (vue__WEBPACK_IMPORTED_MODULE_0___default.a.extend({
  template: "\n    <div style=\"margin-top:3px\">\n    <vs-icon icon=\"lock\" v-if=\"data == '-1'\"></vs-icon>\n    <vs-icon icon=\"lock_open\" v-else-if=\"data == '0'\"></vs-icon>\n    </div>\n         ",
  data: function data() {
    return {
      data: null,
      "true": true,
      "false": false
    };
  },
  mounted: function mounted() {
    this.data = this.params.value;
  },
  methods: {}
}));

/***/ })

}]);