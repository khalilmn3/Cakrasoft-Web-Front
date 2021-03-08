(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[12],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/components/folioForm/FolioForm.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/components/folioForm/FolioForm.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_alert_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/utils/alert.js */ "./resources/js/src/utils/alert.js");
/* harmony import */ var vue2_datepicker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue2-datepicker */ "./node_modules/vue2-datepicker/index.esm.js");
/* harmony import */ var _sass_vuexy_components_datepicker_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @sass/vuexy/components/datepicker.scss */ "./resources/sass/vuexy/components/datepicker.scss");
/* harmony import */ var _sass_vuexy_components_datepicker_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_sass_vuexy_components_datepicker_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vue-perfect-scrollbar */ "./node_modules/vue-perfect-scrollbar/dist/index.js");
/* harmony import */ var vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_format_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/utils/format.js */ "./resources/js/src/utils/format.js");
/* harmony import */ var _api_masterFolio__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/api/masterFolio */ "./resources/js/src/api/masterFolio.js");
/* harmony import */ var _api_guestinhouse_guestInHouse__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/api/guestinhouse/guestInHouse */ "./resources/js/src/api/guestinhouse/guestInHouse.js");
/* harmony import */ var _api_deskFolio__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/api/deskFolio */ "./resources/js/src/api/deskFolio.js");


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
//
//
//
//
//
//



 // <!------------------additional element---------------------->

 // API




var masterFolioResource = new _api_masterFolio__WEBPACK_IMPORTED_MODULE_6__["default"]();
var deskFolioResource = new _api_deskFolio__WEBPACK_IMPORTED_MODULE_8__["default"]();
var guestInHouseResource = new _api_guestinhouse_guestInHouse__WEBPACK_IMPORTED_MODULE_7__["default"](); // <!------------------end additional element---------------------->

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'FolioForm',
  props: {
    formType: String,
    titleForm: String,
    isDayendClosed: Boolean
  },
  components: {
    VuePerfectScrollbar: vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4___default.a,
    DatePicker: vue2_datepicker__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      //Mode Edit Or Insert(assign insert from parent, update from child)
      modeDataValue: 0,
      //data error handling from laravel validation//
      dbErrors: {},
      //Pop Up
      modalMain: false,
      modalPreventClose: false,
      //------------------need setting manual-----------------//
      //for vModel Data
      vModel: {
        full_name: ''
      },
      nights: 1,
      tempNights: 1,
      discount: 0,
      folioNumber: '',
      city: [],
      state: [],
      weekday_rate_discount: 0,
      weekend_rate_discount: 0,
      sidebarOption: false,
      btnSaveDisabled: false,
      resetOnOptionsChangeState: false,
      resetOnOptionsChangeCity: false,
      //------------------additional-------------------------//
      //Data Lookup//
      dataLookup: {},
      //validation scope//
      scope1: 'stayInformation',
      showTimeRangePanel: false,
      activeTab: 1,
      resetOnChange: false,
      //title popup//
      title: '',
      balance: 0 //------------------end need setting manual-----------------//

    };
  },
  methods: {
    //------------------need setting manual for crud-----------------//
    //MASTER FOLIO CRUD
    editMasterFolio: function () {
      var _editMasterFolio = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(id) {
        var _ref, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return guestInHouseResource.get(id.folio_number);

              case 3:
                _ref = _context.sent;
                data = _ref.data;
                this.vModel = data.list;
                this.dataLookup.room_rate = data.room_rate;
                this.dataLookup.bed_type = data.bed_type;
                this.$vs.loading.close('#layout--main>.con-vs-loading');
                this.getTotalDays();
                _context.next = 16;
                break;

              case 12:
                _context.prev = 12;
                _context.t0 = _context["catch"](0);
                this.$vs.loading.close('#layout--main>.con-vs-loading');
                _utils_alert_js__WEBPACK_IMPORTED_MODULE_1__["default"].errorFetchDataAlert();

              case 16:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 12]]);
      }));

      function editMasterFolio(_x) {
        return _editMasterFolio.apply(this, arguments);
      }

      return editMasterFolio;
    }(),
    updateMasterFolio: function () {
      var _updateMasterFolio = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(data) {
        var message;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return masterFolioResource.update(data);

              case 3:
                this.modalMain = false;
                this.$vs.loading.close('#button-save-main>.con-vs-loading');

                if (!this.isDayendClosed) {
                  _context2.next = 8;
                  break;
                }

                this.precheckDayendClosed();
                return _context2.abrupt("return");

              case 8:
                _utils_alert_js__WEBPACK_IMPORTED_MODULE_1__["default"].acceptAlertSucces();
                _context2.next = 17;
                break;

              case 11:
                _context2.prev = 11;
                _context2.t0 = _context2["catch"](0);
                message = _context2.t0;
                this.dbErrors = message == undefined ? '' : message;
                this.$vs.loading.close('#button-save-main>.con-vs-loading');
                _utils_alert_js__WEBPACK_IMPORTED_MODULE_1__["default"].errorSaveDataAlert(message);

              case 17:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[0, 11]]);
      }));

      function updateMasterFolio(_x2) {
        return _updateMasterFolio.apply(this, arguments);
      }

      return updateMasterFolio;
    }(),
    insertMasterFolio: function () {
      var _insertMasterFolio = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(resource) {
        var _ref2, data, message;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                _context3.next = 3;
                return masterFolioResource.store(resource);

              case 3:
                _ref2 = _context3.sent;
                data = _ref2.data;
                this.modalMain = false;
                this.folioNumber = data;
                this.$vs.loading.close('#button-save-main>.con-vs-loading');
                _utils_alert_js__WEBPACK_IMPORTED_MODULE_1__["default"].acceptAlertSucces();
                _context3.next = 17;
                break;

              case 11:
                _context3.prev = 11;
                _context3.t0 = _context3["catch"](0);
                message = _context3.t0;
                this.dbErrors = message == undefined ? '' : message;
                this.$vs.loading.close('#button-save-main>.con-vs-loading');
                _utils_alert_js__WEBPACK_IMPORTED_MODULE_1__["default"].errorSaveDataAlert(message);

              case 17:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[0, 11]]);
      }));

      function insertMasterFolio(_x3) {
        return _insertMasterFolio.apply(this, arguments);
      }

      return insertMasterFolio;
    }(),
    //DESK FOLIO CRUD
    editDeskFolio: function () {
      var _editDeskFolio = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4(id) {
        var _ref3, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.prev = 0;
                _context4.next = 3;
                return guestInHouseResource.get(id.folio_number);

              case 3:
                _ref3 = _context4.sent;
                data = _ref3.data;
                this.vModel = data.list;
                this.dataLookup.room_rate = data.room_rate;
                this.dataLookup.bed_type = data.bed_type;
                this.$vs.loading.close('#layout--main>.con-vs-loading');
                this.modalMain = true;
                this.getTotalDays();
                _context4.next = 17;
                break;

              case 13:
                _context4.prev = 13;
                _context4.t0 = _context4["catch"](0);
                this.$vs.loading.close('#layout--main>.con-vs-loading');
                _utils_alert_js__WEBPACK_IMPORTED_MODULE_1__["default"].errorFetchDataAlert();

              case 17:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this, [[0, 13]]);
      }));

      function editDeskFolio(_x4) {
        return _editDeskFolio.apply(this, arguments);
      }

      return editDeskFolio;
    }(),
    updateDeskFolio: function () {
      var _updateDeskFolio = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5(data) {
        var message;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.prev = 0;
                _context5.next = 3;
                return masterFolioResource.update(data);

              case 3:
                this.modalMain = false;
                this.$vs.loading.close('#button-save-main>.con-vs-loading');

                if (!this.isDayendClosed) {
                  _context5.next = 8;
                  break;
                }

                this.precheckDayendClosed();
                return _context5.abrupt("return");

              case 8:
                this.refreshData(this.search);
                _utils_alert_js__WEBPACK_IMPORTED_MODULE_1__["default"].acceptAlertSucces();
                _context5.next = 18;
                break;

              case 12:
                _context5.prev = 12;
                _context5.t0 = _context5["catch"](0);
                message = _context5.t0;
                this.dbErrors = message == undefined ? '' : message;
                this.$vs.loading.close('#button-save-main>.con-vs-loading');
                _utils_alert_js__WEBPACK_IMPORTED_MODULE_1__["default"].errorSaveDataAlert(message);

              case 18:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this, [[0, 12]]);
      }));

      function updateDeskFolio(_x5) {
        return _updateDeskFolio.apply(this, arguments);
      }

      return updateDeskFolio;
    }(),
    insertDeskFolio: function () {
      var _insertDeskFolio = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee6(resource) {
        var _ref4, data, message;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.prev = 0;
                _context6.next = 3;
                return deskFolioResource.store(resource);

              case 3:
                _ref4 = _context6.sent;
                data = _ref4.data;
                this.modalMain = false;
                this.resetData();
                this.refreshData(this.search);
                this.folioNumber = data;
                this.$vs.loading.close('#button-save-main>.con-vs-loading');
                _utils_alert_js__WEBPACK_IMPORTED_MODULE_1__["default"].acceptAlertSucces();
                _context6.next = 19;
                break;

              case 13:
                _context6.prev = 13;
                _context6.t0 = _context6["catch"](0);
                message = _context6.t0;
                this.dbErrors = message == undefined ? '' : message;
                this.$vs.loading.close('#button-save-main>.con-vs-loading');
                _utils_alert_js__WEBPACK_IMPORTED_MODULE_1__["default"].errorSaveDataAlert(message);

              case 19:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this, [[0, 13]]);
      }));

      function insertDeskFolio(_x6) {
        return _insertDeskFolio.apply(this, arguments);
      }

      return insertDeskFolio;
    }(),
    //FORM OPTION
    showForm: function () {
      var _showForm = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee7(idData, modeData) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                this.resetData();
                this.idData = idData;
                this.modeDataValue = modeData;
                this.resetOnChange = false;
                this.$vs.loading({
                  container: '#layout--main',
                  scale: this.scaleLoadingMainLayout
                });

                if (!(this.formType == this.mFormType.masterFolio)) {
                  _context7.next = 28;
                  break;
                }

                if (!(modeData === this.modeData.edit)) {
                  _context7.next = 16;
                  break;
                }

                this.folioNumber = idData.folio_number;
                this.getDataLookUp();
                _context7.next = 11;
                return this.editMasterFolio(idData);

              case 11:
                this.getState(true);
                this.modalMain = true;
                this.vModel.birth_date = this.vModel.birth_date == '0000-00-00' ? '' : this.vModel.birth_date;
                _context7.next = 26;
                break;

              case 16:
                if (!(modeData === this.modeData.insert)) {
                  _context7.next = 23;
                  break;
                }

                this.activeTab = 1;
                _context7.next = 20;
                return this.getDataLookUp();

              case 20:
                this.modalMain = true;
                _context7.next = 26;
                break;

              case 23:
                if (!(modeData === this.modeData.tracking)) {
                  _context7.next = 26;
                  break;
                }

                _context7.next = 26;
                return this.trackingData(idData);

              case 26:
                _context7.next = 47;
                break;

              case 28:
                if (!(this.formType == this.mFormType.deskFolio)) {
                  _context7.next = 47;
                  break;
                }

                if (!(modeData === this.modeData.edit)) {
                  _context7.next = 37;
                  break;
                }

                this.folioNumber = idData.folio_number;
                this.getDataLookUp();
                _context7.next = 34;
                return this.editDeskFolio(idData);

              case 34:
                this.vModel.birth_date = this.vModel.birth_date == '0000-00-00' ? '' : this.vModel.birth_date;
                _context7.next = 47;
                break;

              case 37:
                if (!(modeData === this.modeData.insert)) {
                  _context7.next = 44;
                  break;
                }

                this.activeTab = 1;
                _context7.next = 41;
                return this.getDataLookUp();

              case 41:
                this.modalMain = true;
                _context7.next = 47;
                break;

              case 44:
                if (!(modeData === this.modeData.tracking)) {
                  _context7.next = 47;
                  break;
                }

                _context7.next = 47;
                return this.trackingData(idData);

              case 47:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      function showForm(_x7, _x8) {
        return _showForm.apply(this, arguments);
      }

      return showForm;
    }(),
    trackingData: function () {
      var _trackingData = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee8(id) {
        var _this = this;

        var _ref5, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                _context8.prev = 0;
                _context8.next = 3;
                return guestInHouseResource.log(id.id_log);

              case 3:
                _ref5 = _context8.sent;
                data = _ref5.data;
                this.dataTracking = data.modelGrid;
                setTimeout(function () {
                  _this.$vs.loading.close('#layout--main>.con-vs-loading');
                }, 100);
                _context8.next = 13;
                break;

              case 9:
                _context8.prev = 9;
                _context8.t0 = _context8["catch"](0);
                this.$vs.loading.close('#layout--main>.con-vs-loading');
                _utils_alert_js__WEBPACK_IMPORTED_MODULE_1__["default"].errorFetchDataAlert();

              case 13:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, this, [[0, 9]]);
      }));

      function trackingData(_x9) {
        return _trackingData.apply(this, arguments);
      }

      return trackingData;
    }(),
    refreshData: function refreshData(search) {
      this.$emit('refreshData');
    },
    resetData: function resetData() {
      this.vModel = {
        arrival: Object(_utils_format_js__WEBPACK_IMPORTED_MODULE_5__["formatDateTimeDatabase"])(this.auditDate + ' ' + this.checkInTime),
        departure: this.departureDate,
        adult: 1,
        child: 0,
        full_name: '',
        payment_type_code: this.cash,
        market_code: this.defaultMarket,
        audit_date: this.auditDate,
        folio_number: 0,
        balance: 0,
        user_id: this.userInfo.code
      };
      this.nights = 1;
      this.resetOnOptionsChangeState = false;
      this.resetOnOptionsChangeCity = false;
      this.weekday_rate_discount = 0;
      this.weekend_rate_discount = 0;
      this.dbErrors = {};
      this.dataTracking = null;
      this.btnSaveDisabled = false;
      this.$validator.reset();
    },
    handleSaveForm: function handleSaveForm() {
      var _this2 = this;

      var validate = this.scope1;
      this.$validator.validateAll(validate).then(function (result) {
        if (result) {
          _this2.btnSaveDisabled = true;

          if (_this2.modeDataValue === _this2.modeData.insert) {
            _this2.$vs.loading({
              container: '#button-save-main',
              scale: _this2.scaleLoadingButton
            });

            if (_this2.formType == _this2.mFormType.masterFolio) {
              _this2.insertMasterFolio(_this2.vModel);
            } else if (_this2.formType == _this2.mFormType.deskFolio) {
              _this2.insertDeskFolio(_this2.vModel);
            }
          } else if (_this2.modeDataValue === _this2.modeData.edit) {
            _this2.$vs.loading({
              container: '#button-save-main',
              scale: _this2.scaleLoadingButton
            });

            if (_this2.formType == _this2.mFormType.masterFolio) {
              _this2.updateMasterFolio(_this2.vModel);
            } else if (_this2.formType == _this2.mFormType.deskFolio) {
              _this2.updateDeskFolio(_this2.vModel);
            }
          }
        } else {
          _utils_alert_js__WEBPACK_IMPORTED_MODULE_1__["default"].inputRequiredAlert();
        }
      });
    },
    //------------------POPULATE SELECT OPTIONS----------------------//
    getDataLookUp: function () {
      var _getDataLookUp = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee9() {
        var _ref6, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                _context9.prev = 0;
                _context9.next = 3;
                return guestInHouseResource.dataLookup();

              case 3:
                _ref6 = _context9.sent;
                data = _ref6.data;
                this.dataLookup = data;
                this.city = data.city;
                this.$vs.loading.close('#layout--main>.con-vs-loading');
                this.$vs.loading.close('.popup-body>.con-vs-loading');
                _context9.next = 15;
                break;

              case 11:
                _context9.prev = 11;
                _context9.t0 = _context9["catch"](0);
                this.$vs.loading.close('.popup-body>.con-vs-loading');
                _utils_alert_js__WEBPACK_IMPORTED_MODULE_1__["default"].errorFetchDataAlert();

              case 15:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9, this, [[0, 11]]);
      }));

      function getDataLookUp() {
        return _getDataLookUp.apply(this, arguments);
      }

      return getDataLookUp;
    }(),
    getState: function () {
      var _getState = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee10(state) {
        var params, _ref7, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                if (!this.vModel.country_code) {
                  _context10.next = 13;
                  break;
                }

                params = {
                  country: this.vModel.country_code,
                  state: this.vModel.state_code
                };
                _context10.prev = 2;
                _context10.next = 5;
                return guestInHouseResource.state(params);

              case 5:
                _ref7 = _context10.sent;
                data = _ref7.data;

                if (state == true) {
                  this.state = data.state;
                  this.city = data.city;
                } else {
                  this.city = data.city;
                }

                _context10.next = 13;
                break;

              case 10:
                _context10.prev = 10;
                _context10.t0 = _context10["catch"](2);
                _utils_alert_js__WEBPACK_IMPORTED_MODULE_1__["default"].errorFetchDataAlert(_context10.t0);

              case 13:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10, this, [[2, 10]]);
      }));

      function getState(_x10) {
        return _getState.apply(this, arguments);
      }

      return getState;
    }(),
    //------------------END POPULATE SELECT OPTIONS----------------------//
    //  DATEPICKER CONFIGURATION //
    dateTodayDisable: function dateTodayDisable(date) {
      var audit = new Date(this.auditDate);
      audit.setDate(audit.getDate() - 1);
      return date < audit;
    },
    dateArrivalDisable: function dateArrivalDisable(date) {
      var arrival = new Date(this.vModel.arrival);
      return date < arrival;
    },
    toggleTimeRangePanel: function toggleTimeRangePanel() {
      this.showTimeRangePanel = !this.showTimeRangePanel;
    },
    getTotalDays: function getTotalDays() {
      var date1 = new Date(Object(_utils_format_js__WEBPACK_IMPORTED_MODULE_5__["formatDateDatabase"])(this.vModel.arrival)).getTime();
      var date2 = new Date(Object(_utils_format_js__WEBPACK_IMPORTED_MODULE_5__["formatDateDatabase"])(this.vModel.departure)).getTime();
      var auditDate = new Date(this.auditDate).getTime();

      if (date1 >= date2) {
        this.vModel.departure = this.departureDate2;
      }

      if (date1 < auditDate && this.modeDataValue === this.modeData.insert) {
        this.vModel.arrival = Object(_utils_format_js__WEBPACK_IMPORTED_MODULE_5__["formatDateTimeDatabase"])(this.auditDate + ' ' + this.checkInTime);
      }

      var date3 = new Date(Object(_utils_format_js__WEBPACK_IMPORTED_MODULE_5__["formatDateDatabase"])(this.vModel.arrival));
      var date4 = new Date(Object(_utils_format_js__WEBPACK_IMPORTED_MODULE_5__["formatDateDatabase"])(this.vModel.departure)); // To calculate the time difference of two dates

      var Difference_In_Time = date4.getTime() - date3.getTime(); // To calculate the no. of days between two dates

      var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24); // restrict negatif departure

      this.nights = Difference_In_Days;
    },
    addZeroHour: function addZeroHour(i) {
      if (i < 10) {
        i = "0" + i;
      }

      return i;
    },
    handleChangeNight: function handleChangeNight() {
      if (this.nights > 0) {
        this.tempNights = this.nights;
        var departure = new Date(this.vModel.arrival);
        var time = new Date(this.vModel.departure);
        var h = this.addZeroHour(time.getHours());
        var m = this.addZeroHour(time.getMinutes());
        var s = this.addZeroHour(time.getSeconds());
        var times = h + ':' + m + ':' + s;
        var arrivalDate = new Date(this.vModel.arrival).getDate();
        var departureDate = parseInt(arrivalDate) + parseInt(this.nights);
        departure.setDate(departureDate);
        departure = Object(_utils_format_js__WEBPACK_IMPORTED_MODULE_5__["formatDateDatabase"])(departure);

        if (departure >= this.auditDate) {
          this.vModel.departure = Object(_utils_format_js__WEBPACK_IMPORTED_MODULE_5__["formatDateTimeDatabase"])(departure + ' ' + times);
        } else {
          this.getTotalDays();
        }
      } else {
        this.nights = this.tempNights;
      }
    },
    resetDate: function resetDate() {
      this.vModel.arrival = Object(_utils_format_js__WEBPACK_IMPORTED_MODULE_5__["formatDateTimeDatabase"])(this.auditDate + ' ' + this.checkInTime);
      this.vModel.departure = this.departureDate;
      this.nights = 1;
    },
    //  END DATEPICKER CONFIGURATION //
    precheckDayendClosed: function precheckDayendClosed() {
      this.$emit('precheck');
    } //------------------end need setting manual for crud-----------------//

  },
  watch: {
    modalPreventClose: function modalPreventClose() {
      this.modalPreventClose = this.modalMain;
    },
    modalMain: function modalMain() {
      this.modalPreventClose = this.modalMain;

      if (!this.modalMain) {
        this.refreshData(this.search);
      }
    }
  },
  computed: {
    userValidation: function userValidation() {
      return this.credential.user.length > 0 && this.credential.pass.length > 0;
    },
    departureDate: function departureDate() {
      var departure = new Date(Object(_utils_format_js__WEBPACK_IMPORTED_MODULE_5__["formatDateTimeDatabase"])(this.auditDate + ' ' + this.checkOutTime));
      departure.setDate(departure.getDate() + 1);
      return Object(_utils_format_js__WEBPACK_IMPORTED_MODULE_5__["formatDateTimeDatabase"])(departure);
    },
    departureDate2: function departureDate2() {
      var arrival = Object(_utils_format_js__WEBPACK_IMPORTED_MODULE_5__["formatDateDatabase"])(this.vModel.arrival);
      var departure = new Date(Object(_utils_format_js__WEBPACK_IMPORTED_MODULE_5__["formatDateTimeDatabase"])(arrival + ' ' + this.checkOutTime));
      departure.setDate(departure.getDate() + 1);
      return Object(_utils_format_js__WEBPACK_IMPORTED_MODULE_5__["formatDateTimeDatabase"])(departure);
    },
    //INPUT FIELD REQUIRED
    isTitleRequired: function isTitleRequired() {
      return this.$store.getters.isTitleRequired;
    },
    isTAVoucherRequired: function isTAVoucherRequired() {
      return this.$store.getters.isTAVoucherRequired;
    },
    isStateRequired: function isStateRequired() {
      return this.$store.getters.isStateRequired;
    },
    isRoomNumberRequired: function isRoomNumberRequired() {
      return this.$store.getters.isRoomNumberRequired;
    },
    isPhone1Required: function isPhone1Required() {
      return this.$store.getters.isPhone1Required;
    },
    isNationalityRequired: function isNationalityRequired() {
      return this.$store.getters.isNationalityRequired;
    },
    isMarketRequired: function isMarketRequired() {
      return this.$store.getters.isMarketRequired;
    },
    isHKNoteRequired: function isHKNoteRequired() {
      return this.$store.getters.isHKNoteRequired;
    },
    isEmailRequired: function isEmailRequired() {
      return this.$store.getters.isEmailRequired;
    },
    isCompanyRequired: function isCompanyRequired() {
      return this.$store.getters.isCompanyRequired;
    },
    isCityRequired: function isCityRequired() {
      return this.$store.getters.isCityRequired;
    },
    isBusinessSourceRequired: function isBusinessSourceRequired() {
      return this.$store.getters.isBusinessSourceRequired;
    },
    auditDate: function auditDate() {
      return this.$store.state.auditLog.auditDate;
    },
    checkInTime: function checkInTime() {
      return this.$store.state.checkInTime;
    },
    cash: function cash() {
      return this.$store.getters.cash;
    },
    checkOutTime: function checkOutTime() {
      return this.$store.getters.checkOutLimit;
    },
    defaultMarket: function defaultMarket() {
      return this.$store.getters.dvMarket;
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/components/folioForm/FolioForm.vue?vue&type=style&index=0&id=2648cfb2&scoped=true&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/components/folioForm/FolioForm.vue?vue&type=style&index=0&id=2648cfb2&scoped=true&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".body-sidebar[data-v-2648cfb2]{\n  margin-left: 10px\n}\n.footer-sidebar[data-v-2648cfb2]{\n  margin-left: 10px\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/components/folioForm/FolioForm.vue?vue&type=style&index=0&id=2648cfb2&scoped=true&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/components/folioForm/FolioForm.vue?vue&type=style&index=0&id=2648cfb2&scoped=true&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../node_modules/css-loader??ref--7-1!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./FolioForm.vue?vue&type=style&index=0&id=2648cfb2&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/components/folioForm/FolioForm.vue?vue&type=style&index=0&id=2648cfb2&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/components/folioForm/FolioForm.vue?vue&type=template&id=2648cfb2&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/components/folioForm/FolioForm.vue?vue&type=template&id=2648cfb2&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "guest-in-house" },
    [
      _c(
        "vs-popup",
        {
          staticClass: "width-80 ",
          attrs: {
            "button-close-hidden": "",
            id: "main-popup",
            active: _vm.modalPreventClose,
            title:
              _vm.modeDataValue == 2
                ? _vm.modeDataName.tracking + _vm.idData.code
                : _vm.modeDataValue == _vm.modeData.insert
                ? "Insert " + _vm.titleForm
                : _vm.modeDataValue == _vm.modeData.edit
                ? "Update " + _vm.titleForm + ": " + _vm.idData.folio_number
                : _vm.titleForm
          },
          on: {
            "update:active": function($event) {
              _vm.modalPreventClose = $event
            }
          }
        },
        [
          _c(
            "div",
            {
              ref: "parentSidebar",
              staticClass: "popup-body vs-con-loading__container"
            },
            [
              _c(
                "VuePerfectScrollbar",
                {
                  staticClass: "scroll-area-popup-form pt-2",
                  attrs: { settings: _vm.perfectScrollbarSettings }
                },
                [
                  _c("div", { staticClass: "form-container" }, [
                    _c(
                      "div",
                      {
                        ref: "popupContainer",
                        staticClass: "popup-container",
                        attrs: { "vs-position": "left" }
                      },
                      [
                        _c(
                          "vx-card",
                          {
                            attrs: {
                              icon: "date_range",
                              title: "Booking Information",
                              collapseAction: ""
                            }
                          },
                          [
                            _c(
                              "vs-row",
                              {
                                staticClass: "md:w-1/2",
                                attrs: {
                                  "vs-type": "flex",
                                  "vs-justify": "space-between"
                                }
                              },
                              [
                                _c(
                                  "vs-col",
                                  { attrs: { "vs-lg": "6", "vs-xs": "6" } },
                                  [
                                    _c(
                                      "span",
                                      {
                                        staticStyle: { "font-weight": "bold" }
                                      },
                                      [
                                        _vm._v(
                                          _vm._s(
                                            _vm.$t(
                                              "reservation.dateInformation"
                                            )
                                          )
                                        )
                                      ]
                                    )
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "vs-col",
                                  { attrs: { "vs-lg": "4", "vs-xs": "6" } },
                                  [
                                    _c("vs-input-number", {
                                      staticClass: "number-input mr-3",
                                      attrs: {
                                        min: "1",
                                        label: _vm.$t("reservation.days") + ":"
                                      },
                                      on: {
                                        input: function($event) {
                                          return _vm.handleChangeNight()
                                        }
                                      },
                                      model: {
                                        value: _vm.nights,
                                        callback: function($$v) {
                                          _vm.nights = $$v
                                        },
                                        expression: "nights"
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
                              [
                                _c(
                                  "vs-col",
                                  { staticClass: "content-left lg:w-1/2" },
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
                                        _c(
                                          "div",
                                          {
                                            staticClass:
                                              "wrap-form-select w-full md:w-1/2"
                                          },
                                          [
                                            _c("vs-row", [
                                              _c("label", [
                                                _c(
                                                  "span",
                                                  { staticClass: "required" },
                                                  [
                                                    _vm._v(
                                                      " " +
                                                        _vm._s(
                                                          _vm.$t(
                                                            "reservation.arrival"
                                                          )
                                                        )
                                                    )
                                                  ]
                                                )
                                              ])
                                            ]),
                                            _vm._v(" "),
                                            _c(
                                              "vs-row",
                                              [
                                                _c("date-picker", {
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
                                                    clearable: false,
                                                    disabled: "",
                                                    "disabled-date":
                                                      _vm.dateTodayDisable,
                                                    type: "datetime",
                                                    confirm: "",
                                                    "confirm-text": "ok",
                                                    "show-time-panel":
                                                      _vm.showTimeRangePanel,
                                                    lang: _vm.$t("lang"),
                                                    "value-type":
                                                      "YYYY-MM-DD HH:mm:ss",
                                                    format:
                                                      "DD/MM/YYYY HH:mm:ss",
                                                    label: "name",
                                                    name: "arrival",
                                                    "data-vv-scope": _vm.scope1
                                                  },
                                                  on: {
                                                    close: function($event) {
                                                      _vm.showTimeRangePanel = false
                                                    },
                                                    input: _vm.getTotalDays
                                                  },
                                                  scopedSlots: _vm._u([
                                                    {
                                                      key: "footer",
                                                      fn: function() {
                                                        return [
                                                          _c(
                                                            "button",
                                                            {
                                                              staticClass:
                                                                "mx-btn mx-btn-text",
                                                              on: {
                                                                click:
                                                                  _vm.resetDate
                                                              }
                                                            },
                                                            [
                                                              _vm._v(
                                                                "\n                                                                reset\n                                                            "
                                                              )
                                                            ]
                                                          ),
                                                          _vm._v(" "),
                                                          _c(
                                                            "button",
                                                            {
                                                              staticClass:
                                                                "mx-btn mx-btn-text",
                                                              on: {
                                                                click:
                                                                  _vm.toggleTimeRangePanel
                                                              }
                                                            },
                                                            [
                                                              _vm._v(
                                                                "\n                                                                " +
                                                                  _vm._s(
                                                                    _vm.showTimeRangePanel
                                                                      ? "select date"
                                                                      : "select time"
                                                                  ) +
                                                                  "\n                                                            "
                                                              )
                                                            ]
                                                          )
                                                        ]
                                                      },
                                                      proxy: true
                                                    }
                                                  ]),
                                                  model: {
                                                    value: _vm.vModel.arrival,
                                                    callback: function($$v) {
                                                      _vm.$set(
                                                        _vm.vModel,
                                                        "arrival",
                                                        $$v
                                                      )
                                                    },
                                                    expression: "vModel.arrival"
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
                                                          _vm.scope1 +
                                                            ".arrival"
                                                        ),
                                                        expression:
                                                          "errors.has(scope1+'.arrival')"
                                                      }
                                                    ],
                                                    staticClass:
                                                      "error-text text-danger"
                                                  },
                                                  [
                                                    _vm._v(
                                                      _vm._s(
                                                        _vm.errors.first(
                                                          _vm.scope1 +
                                                            ".arrival"
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
                                          "div",
                                          {
                                            staticClass:
                                              "wrap-form-select w-full md:w-1/2"
                                          },
                                          [
                                            _c("vs-row", [
                                              _c("label", [
                                                _c(
                                                  "span",
                                                  { staticClass: "required" },
                                                  [
                                                    _vm._v(
                                                      " " +
                                                        _vm._s(
                                                          _vm.$t(
                                                            "reservation.departure"
                                                          )
                                                        )
                                                    )
                                                  ]
                                                )
                                              ])
                                            ]),
                                            _vm._v(" "),
                                            _c(
                                              "vs-row",
                                              [
                                                _c("date-picker", {
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
                                                    clearable: false,
                                                    "disabled-date":
                                                      _vm.dateArrivalDisable,
                                                    type: "datetime",
                                                    confirm: "",
                                                    "confirm-text": "ok",
                                                    "show-time-panel":
                                                      _vm.showTimeRangePanel,
                                                    lang: _vm.$t("lang"),
                                                    "value-type":
                                                      "YYYY-MM-DD HH:mm:ss",
                                                    format:
                                                      "DD/MM/YYYY HH:mm:ss",
                                                    label: "name",
                                                    name: "departure",
                                                    "data-vv-scope": _vm.scope1
                                                  },
                                                  on: {
                                                    close: function($event) {
                                                      _vm.showTimeRangePanel = false
                                                    },
                                                    input: _vm.getTotalDays
                                                  },
                                                  scopedSlots: _vm._u([
                                                    {
                                                      key: "footer",
                                                      fn: function() {
                                                        return [
                                                          _c(
                                                            "button",
                                                            {
                                                              staticClass:
                                                                "mx-btn mx-btn-text",
                                                              on: {
                                                                click:
                                                                  _vm.resetDate
                                                              }
                                                            },
                                                            [
                                                              _vm._v(
                                                                "\n                                                                reset\n                                                            "
                                                              )
                                                            ]
                                                          ),
                                                          _vm._v(" "),
                                                          _c(
                                                            "button",
                                                            {
                                                              staticClass:
                                                                "mx-btn mx-btn-text",
                                                              on: {
                                                                click:
                                                                  _vm.toggleTimeRangePanel
                                                              }
                                                            },
                                                            [
                                                              _vm._v(
                                                                "\n                                                                " +
                                                                  _vm._s(
                                                                    _vm.showTimeRangePanel
                                                                      ? "select date"
                                                                      : "select time"
                                                                  ) +
                                                                  "\n                                                            "
                                                              )
                                                            ]
                                                          )
                                                        ]
                                                      },
                                                      proxy: true
                                                    }
                                                  ]),
                                                  model: {
                                                    value: _vm.vModel.departure,
                                                    callback: function($$v) {
                                                      _vm.$set(
                                                        _vm.vModel,
                                                        "departure",
                                                        $$v
                                                      )
                                                    },
                                                    expression:
                                                      "vModel.departure"
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
                                                          _vm.scope1 +
                                                            ".arrival"
                                                        ),
                                                        expression:
                                                          "errors.has(scope1+'.arrival')"
                                                      }
                                                    ],
                                                    staticClass:
                                                      "error-text text-danger"
                                                  },
                                                  [
                                                    _vm._v(
                                                      _vm._s(
                                                        _vm.errors.first(
                                                          _vm.scope1 +
                                                            ".arrival"
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
                                      ]
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
                                        _c(
                                          "vs-col",
                                          {
                                            attrs: {
                                              "vs-lg": "6",
                                              "vs-xs": "6"
                                            }
                                          },
                                          [
                                            _c(
                                              "span",
                                              {
                                                staticStyle: {
                                                  "font-weight": "bold"
                                                }
                                              },
                                              [
                                                _vm._v(
                                                  _vm._s(
                                                    _vm.$t(
                                                      "reservation.generalInformation"
                                                    )
                                                  )
                                                )
                                              ]
                                            )
                                          ]
                                        )
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
                                        _c(
                                          "div",
                                          {
                                            staticClass:
                                              "wrap-form-select w-full md:w-1/2",
                                            class: {
                                              required: _vm.isMarketRequired
                                            }
                                          },
                                          [
                                            _c("vs-row", [
                                              _c("label", [
                                                _vm._v(
                                                  _vm._s(
                                                    _vm.$t("reservation.market")
                                                  )
                                                )
                                              ])
                                            ]),
                                            _vm._v(" "),
                                            _c(
                                              "vs-row",
                                              [
                                                _c("v-select", {
                                                  directives: [
                                                    {
                                                      name: "validate",
                                                      rawName: "v-validate",
                                                      value: _vm.isMarketRequired
                                                        ? "required"
                                                        : "",
                                                      expression:
                                                        "isMarketRequired ? 'required' : ''"
                                                    }
                                                  ],
                                                  staticClass:
                                                    "w-full height200",
                                                  attrs: {
                                                    id: "form-select",
                                                    placeholder: _vm.$t(
                                                      "table.select"
                                                    ),
                                                    label: "name",
                                                    reduce: function(value) {
                                                      return value.code
                                                    },
                                                    options:
                                                      _vm.dataLookup.market,
                                                    name: "market",
                                                    "data-vv-scope": _vm.scope1
                                                  },
                                                  model: {
                                                    value:
                                                      _vm.vModel.market_code,
                                                    callback: function($$v) {
                                                      _vm.$set(
                                                        _vm.vModel,
                                                        "market_code",
                                                        $$v
                                                      )
                                                    },
                                                    expression:
                                                      "vModel.market_code"
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
                                                          _vm.scope1 + ".market"
                                                        ),
                                                        expression:
                                                          "errors.has(scope1+'.market')"
                                                      }
                                                    ],
                                                    staticClass:
                                                      "error-text text-danger"
                                                  },
                                                  [
                                                    _vm._v(
                                                      _vm._s(
                                                        _vm._f("toString")(
                                                          _vm.errors.first(
                                                            _vm.scope1 +
                                                              ".market"
                                                          ) ||
                                                            _vm.dbErrors.market
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
                                          "div",
                                          {
                                            staticClass:
                                              "wrap-form-select w-full md:w-1/2"
                                          },
                                          [
                                            _c("vs-row", [
                                              _vm._v(
                                                _vm._s(
                                                  _vm.$t(
                                                    "reservation.bookingSource"
                                                  )
                                                )
                                              )
                                            ]),
                                            _vm._v(" "),
                                            _c(
                                              "vs-row",
                                              [
                                                _c("v-select", {
                                                  staticClass:
                                                    "w-full height200",
                                                  attrs: {
                                                    id: "form-select",
                                                    placeholder: _vm.$t(
                                                      "table.select"
                                                    ),
                                                    label: "name",
                                                    reduce: function(value) {
                                                      return value.code
                                                    },
                                                    options:
                                                      _vm.dataLookup
                                                        .booking_source
                                                  },
                                                  model: {
                                                    value:
                                                      _vm.vModel
                                                        .booking_source_code,
                                                    callback: function($$v) {
                                                      _vm.$set(
                                                        _vm.vModel,
                                                        "booking_source_code",
                                                        $$v
                                                      )
                                                    },
                                                    expression:
                                                      "vModel.booking_source_code"
                                                  }
                                                })
                                              ],
                                              1
                                            )
                                          ],
                                          1
                                        )
                                      ]
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
                                        _c(
                                          "div",
                                          {
                                            staticClass:
                                              "wrap-form-select w-full md:w-1/2"
                                          },
                                          [
                                            _c("vs-row", [
                                              _vm._v(
                                                _vm._s(
                                                  _vm.$t("reservation.group")
                                                )
                                              )
                                            ]),
                                            _vm._v(" "),
                                            _c(
                                              "vs-row",
                                              [
                                                _c("v-select", {
                                                  staticClass:
                                                    "w-full height200",
                                                  attrs: {
                                                    id: "form-select",
                                                    placeholder: _vm.$t(
                                                      "table.select"
                                                    ),
                                                    label: "name",
                                                    reduce: function(value) {
                                                      return value.code
                                                    },
                                                    options:
                                                      _vm.dataLookup.group
                                                  },
                                                  model: {
                                                    value:
                                                      _vm.vModel.group_code,
                                                    callback: function($$v) {
                                                      _vm.$set(
                                                        _vm.vModel,
                                                        "group_code",
                                                        $$v
                                                      )
                                                    },
                                                    expression:
                                                      "vModel.group_code"
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
                                          "div",
                                          {
                                            staticClass:
                                              "wrap-form-select w-full md:w-1/2"
                                          },
                                          [
                                            _c("vs-row", [
                                              _vm._v(
                                                _vm._s(
                                                  _vm.$t(
                                                    "reservation.marketing"
                                                  )
                                                )
                                              )
                                            ]),
                                            _vm._v(" "),
                                            _c(
                                              "vs-row",
                                              [
                                                _c("v-select", {
                                                  staticClass:
                                                    "w-full height200",
                                                  attrs: {
                                                    id: "form-select",
                                                    placeholder: _vm.$t(
                                                      "table.select"
                                                    ),
                                                    label: "name",
                                                    reduce: function(value) {
                                                      return value.code
                                                    },
                                                    options:
                                                      _vm.dataLookup.marketing
                                                  },
                                                  model: {
                                                    value:
                                                      _vm.vModel.marketing_code,
                                                    callback: function($$v) {
                                                      _vm.$set(
                                                        _vm.vModel,
                                                        "marketing_code",
                                                        $$v
                                                      )
                                                    },
                                                    expression:
                                                      "vModel.marketing_code"
                                                  }
                                                })
                                              ],
                                              1
                                            )
                                          ],
                                          1
                                        )
                                      ]
                                    )
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "vs-col",
                                  { staticClass: "content-right lg:w-1/2" },
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
                                          staticClass: "w-full",
                                          attrs: {
                                            label:
                                              _vm.$t("reservation.doc") + " #",
                                            placeholder:
                                              _vm.$t("reservation.doc") + " #",
                                            maxLength: 50
                                          },
                                          model: {
                                            value: _vm.vModel.document_number,
                                            callback: function($$v) {
                                              _vm.$set(
                                                _vm.vModel,
                                                "document_number",
                                                $$v
                                              )
                                            },
                                            expression: "vModel.document_number"
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
                                        _c(
                                          "div",
                                          {
                                            staticClass:
                                              "wrap-form-select w-full md:w-1/2"
                                          },
                                          [
                                            _c(
                                              "vs-row",
                                              {
                                                staticClass:
                                                  "wrap-form-select w-full"
                                              },
                                              [
                                                _c(
                                                  "vs-checkbox",
                                                  {
                                                    staticClass: "w-full",
                                                    staticStyle: {
                                                      padding: "0px",
                                                      margin: "inherit"
                                                    },
                                                    model: {
                                                      value:
                                                        _vm.vModel.show_notes,
                                                      callback: function($$v) {
                                                        _vm.$set(
                                                          _vm.vModel,
                                                          "show_notes",
                                                          $$v
                                                        )
                                                      },
                                                      expression:
                                                        "vModel.show_notes"
                                                    }
                                                  },
                                                  [
                                                    _vm._v(
                                                      _vm._s(
                                                        _vm.$t(
                                                          "reservation.showNotesAtCheckIn"
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
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "vs-row",
                                      {
                                        staticClass: "wrap-form-select mt-3",
                                        attrs: {
                                          "vs-type": "flex",
                                          "vs-justify": "space-between"
                                        }
                                      },
                                      [
                                        _c("vs-textarea", {
                                          staticClass: "w-full",
                                          staticStyle: {
                                            "margin-bottom": "0px"
                                          },
                                          attrs: {
                                            placeholder: _vm.$t("note.notes"),
                                            label: _vm.$t("reservation.notes")
                                          },
                                          model: {
                                            value: _vm.vModel.notes,
                                            callback: function($$v) {
                                              _vm.$set(_vm.vModel, "notes", $$v)
                                            },
                                            expression: "vModel.notes"
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
                        ),
                        _vm._v(" "),
                        _c(
                          "vx-card",
                          {
                            staticClass: "mt-3",
                            attrs: {
                              icon: "date_range",
                              title: _vm.$t("reservation.personalInformation"),
                              collapseAction: ""
                            }
                          },
                          [
                            _c(
                              "vs-row",
                              [
                                _c(
                                  "vs-col",
                                  {
                                    staticClass: "content-left",
                                    attrs: { "vs-lg": "6", "vs-xs": "12" }
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
                                        _c(
                                          "div",
                                          {
                                            staticClass:
                                              "wrap-form-select sm:w-6/12 md:w-4/12",
                                            class: {
                                              required: _vm.isTitleRequired
                                            }
                                          },
                                          [
                                            _c("vs-row", [
                                              _c("label", [
                                                _vm._v(
                                                  _vm._s(
                                                    _vm.$t("reservation.title")
                                                  )
                                                )
                                              ])
                                            ]),
                                            _vm._v(" "),
                                            _c(
                                              "vs-row",
                                              [
                                                _c("v-select", {
                                                  directives: [
                                                    {
                                                      name: "validate",
                                                      rawName: "v-validate",
                                                      value: _vm.isTitleRequired
                                                        ? "required"
                                                        : "",
                                                      expression:
                                                        "isTitleRequired ? 'required' : ''"
                                                    }
                                                  ],
                                                  staticClass:
                                                    "w-full height200",
                                                  attrs: {
                                                    id: "form-select",
                                                    placeholder: _vm.$t(
                                                      "table.select"
                                                    ),
                                                    label: "code",
                                                    reduce: function(value) {
                                                      return value.code
                                                    },
                                                    options:
                                                      _vm.dataLookup.title,
                                                    name: "title",
                                                    "data-vv-scope": _vm.scope1
                                                  },
                                                  model: {
                                                    value:
                                                      _vm.vModel.title_code,
                                                    callback: function($$v) {
                                                      _vm.$set(
                                                        _vm.vModel,
                                                        "title_code",
                                                        $$v
                                                      )
                                                    },
                                                    expression:
                                                      "vModel.title_code"
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
                                                          _vm.scope1 + ".title"
                                                        ),
                                                        expression:
                                                          "errors.has(scope1+'.title')"
                                                      }
                                                    ],
                                                    staticClass:
                                                      "error-text text-danger"
                                                  },
                                                  [
                                                    _vm._v(
                                                      _vm._s(
                                                        _vm._f("toString")(
                                                          _vm.errors.first(
                                                            _vm.scope1 +
                                                              ".title"
                                                          ) ||
                                                            _vm.dbErrors.title
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
                                          "div",
                                          { staticClass: "md:w-8/12 w-full" },
                                          [
                                            _c(
                                              "vs-row",
                                              {
                                                staticClass:
                                                  "wrap-form-select required"
                                              },
                                              [
                                                _c("label", [
                                                  _vm._v(
                                                    _vm._s(
                                                      _vm.$t(
                                                        "reservation.fullname"
                                                      )
                                                    )
                                                  )
                                                ])
                                              ]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "vs-row",
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
                                                    name: "fullname",
                                                    "data-vv-scope": _vm.scope1
                                                  },
                                                  model: {
                                                    value: _vm.vModel.full_name,
                                                    callback: function($$v) {
                                                      _vm.$set(
                                                        _vm.vModel,
                                                        "full_name",
                                                        $$v
                                                      )
                                                    },
                                                    expression:
                                                      "vModel.full_name"
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
                                                          _vm.scope1 +
                                                            ".fullname"
                                                        ),
                                                        expression:
                                                          "errors.has(scope1+'.fullname')"
                                                      }
                                                    ],
                                                    staticClass:
                                                      "error-text text-danger"
                                                  },
                                                  [
                                                    _vm._v(
                                                      _vm._s(
                                                        _vm._f("toString")(
                                                          _vm.errors.first(
                                                            _vm.scope1 +
                                                              ".fullname"
                                                          ) ||
                                                            _vm.dbErrors
                                                              .full_name
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
                                      ]
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
                                        _c(
                                          "div",
                                          {
                                            staticClass:
                                              "wrap-form-select w-full md:w-1/2"
                                          },
                                          [
                                            _c("vs-row", [
                                              _vm._v(
                                                _vm._s(
                                                  _vm.$t("reservation.member")
                                                )
                                              )
                                            ]),
                                            _vm._v(" "),
                                            _c(
                                              "vs-row",
                                              [
                                                _c("v-select", {
                                                  staticClass:
                                                    "height200 w-full",
                                                  attrs: {
                                                    id: "form-select",
                                                    placeholder: _vm.$t(
                                                      "table.select"
                                                    ),
                                                    label: "name",
                                                    reduce: function(value) {
                                                      return value.code
                                                    },
                                                    options:
                                                      _vm.dataLookup.member
                                                  },
                                                  model: {
                                                    value:
                                                      _vm.vModel.member_code,
                                                    callback: function($$v) {
                                                      _vm.$set(
                                                        _vm.vModel,
                                                        "member_code",
                                                        $$v
                                                      )
                                                    },
                                                    expression:
                                                      "vModel.member_code"
                                                  }
                                                })
                                              ],
                                              1
                                            )
                                          ],
                                          1
                                        ),
                                        _vm._v(" "),
                                        _c("vs-input", {
                                          staticClass:
                                            "wrap-form-select w-full md:w-1/2",
                                          attrs: {
                                            label: _vm.$t("reservation.street"),
                                            placeholder: _vm.$t(
                                              "reservation.street"
                                            ),
                                            maxLength: 100
                                          },
                                          model: {
                                            value: _vm.vModel.street,
                                            callback: function($$v) {
                                              _vm.$set(
                                                _vm.vModel,
                                                "street",
                                                $$v
                                              )
                                            },
                                            expression: "vModel.street"
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
                                        _c(
                                          "div",
                                          {
                                            staticClass:
                                              "wrap-form-select w-full md:w-1/2"
                                          },
                                          [
                                            _c("vs-row", [
                                              _vm._v(
                                                _vm._s(
                                                  _vm.$t("reservation.country")
                                                )
                                              )
                                            ]),
                                            _vm._v(" "),
                                            _c(
                                              "vs-row",
                                              [
                                                _c("v-select", {
                                                  staticClass:
                                                    "w-full height150",
                                                  attrs: {
                                                    id: "form-select",
                                                    placeholder: _vm.$t(
                                                      "table.select"
                                                    ),
                                                    label: "name",
                                                    reduce: function(value) {
                                                      return value.code
                                                    },
                                                    options:
                                                      _vm.dataLookup.country
                                                  },
                                                  on: {
                                                    input: function($event) {
                                                      _vm.getState(true)
                                                      _vm.resetOnOptionsChangeState = true
                                                    }
                                                  },
                                                  model: {
                                                    value:
                                                      _vm.vModel.country_code,
                                                    callback: function($$v) {
                                                      _vm.$set(
                                                        _vm.vModel,
                                                        "country_code",
                                                        $$v
                                                      )
                                                    },
                                                    expression:
                                                      "vModel.country_code"
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
                                          "div",
                                          {
                                            staticClass:
                                              "wrap-form-select w-full md:w-1/2",
                                            class: {
                                              required: _vm.isStateRequired
                                            }
                                          },
                                          [
                                            _c("vs-row", [
                                              _c("label", [
                                                _vm._v(
                                                  _vm._s(
                                                    _vm.$t("reservation.state")
                                                  )
                                                )
                                              ])
                                            ]),
                                            _vm._v(" "),
                                            _c(
                                              "vs-row",
                                              [
                                                _c("v-select", {
                                                  directives: [
                                                    {
                                                      name: "validate",
                                                      rawName: "v-validate",
                                                      value: _vm.isStateRequired
                                                        ? "required"
                                                        : "",
                                                      expression:
                                                        "isStateRequired ? 'required' : ''"
                                                    }
                                                  ],
                                                  staticClass:
                                                    "height150 w-full",
                                                  attrs: {
                                                    id: "form-select",
                                                    resetOnOptionsChange:
                                                      _vm.resetOnOptionsChangeState,
                                                    placeholder: _vm.$t(
                                                      "table.select"
                                                    ),
                                                    label: "name",
                                                    reduce: function(value) {
                                                      return value.code
                                                    },
                                                    options: _vm.state,
                                                    name: "state",
                                                    "data-vv-scope": _vm.scope1
                                                  },
                                                  on: {
                                                    input: function($event) {
                                                      _vm.getState(false)
                                                      _vm.resetOnOptionsChangeCity = true
                                                    }
                                                  },
                                                  model: {
                                                    value:
                                                      _vm.vModel.state_code,
                                                    callback: function($$v) {
                                                      _vm.$set(
                                                        _vm.vModel,
                                                        "state_code",
                                                        $$v
                                                      )
                                                    },
                                                    expression:
                                                      "vModel.state_code"
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
                                                          _vm.scope1 + ".state"
                                                        ),
                                                        expression:
                                                          "errors.has(scope1+'.state')"
                                                      }
                                                    ],
                                                    staticClass:
                                                      "error-text text-danger"
                                                  },
                                                  [
                                                    _vm._v(
                                                      _vm._s(
                                                        _vm._f("toString")(
                                                          _vm.errors.first(
                                                            _vm.scope1 +
                                                              ".state"
                                                          ) ||
                                                            _vm.dbErrors.state
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
                                      ]
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
                                        _c(
                                          "div",
                                          {
                                            staticClass:
                                              "wrap-form-select w-full md:w-1/2",
                                            class: {
                                              required: _vm.isCityRequired
                                            }
                                          },
                                          [
                                            _c("vs-row", [
                                              _c("label", [
                                                _vm._v(
                                                  _vm._s(
                                                    _vm.$t("reservation.city")
                                                  )
                                                )
                                              ])
                                            ]),
                                            _vm._v(" "),
                                            _c(
                                              "vs-row",
                                              [
                                                _c("v-select", {
                                                  directives: [
                                                    {
                                                      name: "validate",
                                                      rawName: "v-validate",
                                                      value: _vm.isCityRequired
                                                        ? "required"
                                                        : "",
                                                      expression:
                                                        "isCityRequired ? 'required' : ''"
                                                    }
                                                  ],
                                                  staticClass:
                                                    "w-full height150",
                                                  attrs: {
                                                    id: "city",
                                                    resetOnOptionsChange:
                                                      _vm.resetOnOptionsChangeCity,
                                                    placeholder: _vm.$t(
                                                      "table.select"
                                                    ),
                                                    label: "name",
                                                    reduce: function(value) {
                                                      return value.code
                                                    },
                                                    options: _vm.city,
                                                    name: "city",
                                                    "data-vv-scope": _vm.scope1
                                                  },
                                                  model: {
                                                    value: _vm.vModel.city_code,
                                                    callback: function($$v) {
                                                      _vm.$set(
                                                        _vm.vModel,
                                                        "city_code",
                                                        $$v
                                                      )
                                                    },
                                                    expression:
                                                      "vModel.city_code"
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
                                                          _vm.scope1 + ".city"
                                                        ),
                                                        expression:
                                                          "errors.has(scope1+'.city')"
                                                      }
                                                    ],
                                                    staticClass:
                                                      "error-text text-danger"
                                                  },
                                                  [
                                                    _vm._v(
                                                      _vm._s(
                                                        _vm._f("toString")(
                                                          _vm.errors.first(
                                                            _vm.scope1 + ".city"
                                                          ) || _vm.dbErrors.city
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
                                        _c("vs-input", {
                                          staticClass:
                                            "wrap-form-select w-full md:w-1/2",
                                          attrs: {
                                            disabled:
                                              _vm.vModel.city_code !== "OTH",
                                            label: "."
                                          },
                                          model: {
                                            value: _vm.vModel.city,
                                            callback: function($$v) {
                                              _vm.$set(_vm.vModel, "city", $$v)
                                            },
                                            expression: "vModel.city"
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
                                        _c(
                                          "div",
                                          {
                                            staticClass:
                                              "wrap-form-select w-full md:w-1/2",
                                            class: {
                                              required:
                                                _vm.isNationalityRequired
                                            }
                                          },
                                          [
                                            _c("vs-row", [
                                              _c("label", [
                                                _vm._v(
                                                  _vm._s(
                                                    _vm.$t(
                                                      "reservation.nationality"
                                                    )
                                                  )
                                                )
                                              ])
                                            ]),
                                            _vm._v(" "),
                                            _c(
                                              "vs-row",
                                              [
                                                _c("v-select", {
                                                  directives: [
                                                    {
                                                      name: "validate",
                                                      rawName: "v-validate",
                                                      value: _vm.isNationalityRequired
                                                        ? "required"
                                                        : "",
                                                      expression:
                                                        "isNationalityRequired ? 'required' : ''"
                                                    }
                                                  ],
                                                  staticClass:
                                                    "w-full height100",
                                                  attrs: {
                                                    id: "form-select",
                                                    placeholder: _vm.$t(
                                                      "table.select"
                                                    ),
                                                    label: "name",
                                                    reduce: function(value) {
                                                      return value.code
                                                    },
                                                    options:
                                                      _vm.dataLookup
                                                        .nationality,
                                                    name: "nationality",
                                                    "data-vv-scope": _vm.scope1
                                                  },
                                                  model: {
                                                    value:
                                                      _vm.vModel
                                                        .nationality_code,
                                                    callback: function($$v) {
                                                      _vm.$set(
                                                        _vm.vModel,
                                                        "nationality_code",
                                                        $$v
                                                      )
                                                    },
                                                    expression:
                                                      "vModel.nationality_code"
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
                                                          _vm.scope1 +
                                                            ".nationality"
                                                        ),
                                                        expression:
                                                          "errors.has(scope1+'.nationality')"
                                                      }
                                                    ],
                                                    staticClass:
                                                      "error-text text-danger"
                                                  },
                                                  [
                                                    _vm._v(
                                                      _vm._s(
                                                        _vm._f("toString")(
                                                          _vm.errors.first(
                                                            _vm.scope1 +
                                                              ".nationality"
                                                          ) ||
                                                            _vm.dbErrors
                                                              .nationality
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
                                        _c("vs-input", {
                                          staticClass:
                                            "wrap-form-select w-full md:w-1/2",
                                          attrs: {
                                            label: _vm.$t(
                                              "reservation.postCode"
                                            ),
                                            placeholder: _vm.$t(
                                              "reservation.postCode"
                                            ),
                                            maxLength: 10
                                          },
                                          model: {
                                            value: _vm.vModel.postal_code,
                                            callback: function($$v) {
                                              _vm.$set(
                                                _vm.vModel,
                                                "postal_code",
                                                $$v
                                              )
                                            },
                                            expression: "vModel.postal_code"
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
                                  "vs-col",
                                  {
                                    staticClass: "content-right",
                                    attrs: { "vs-lg": "6", "vs-xs": "12" }
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
                                          directives: [
                                            {
                                              name: "validate",
                                              rawName: "v-validate",
                                              value: _vm.isPhone1Required
                                                ? "required"
                                                : "",
                                              expression:
                                                "isPhone1Required ? 'required' : ''"
                                            }
                                          ],
                                          staticClass: "w-full md:w-1/2",
                                          class: {
                                            required: _vm.isPhone1Required
                                          },
                                          attrs: {
                                            label:
                                              _vm.$t("reservation.phone") +
                                              " 1",
                                            placeholder:
                                              _vm.$t("reservation.phone") +
                                              " 1",
                                            maxLength: 50,
                                            "description-text": _vm._f(
                                              "toString"
                                            )(
                                              _vm.errors.first(
                                                _vm.scope1 + ".phone1"
                                              ) || _vm.dbErrors.phone1
                                            ),
                                            name: "phone1",
                                            "data-vv-scope": _vm.scope1
                                          },
                                          model: {
                                            value: _vm.vModel.phone1,
                                            callback: function($$v) {
                                              _vm.$set(
                                                _vm.vModel,
                                                "phone1",
                                                $$v
                                              )
                                            },
                                            expression: "vModel.phone1"
                                          }
                                        }),
                                        _vm._v(" "),
                                        _c("vs-input", {
                                          staticClass: "w-full md:w-1/2",
                                          attrs: {
                                            label:
                                              _vm.$t("reservation.phone") +
                                              " 2",
                                            placeholder:
                                              _vm.$t("reservation.phone") +
                                              " 2",
                                            maxLength: 50
                                          },
                                          model: {
                                            value: _vm.vModel.phone2,
                                            callback: function($$v) {
                                              _vm.$set(
                                                _vm.vModel,
                                                "phone2",
                                                $$v
                                              )
                                            },
                                            expression: "vModel.phone2"
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
                                          staticClass: "w-full md:w-1/2",
                                          attrs: {
                                            label: _vm.$t("reservation.fax"),
                                            placeholder: _vm.$t(
                                              "reservation.fax"
                                            ),
                                            maxLength: 20
                                          },
                                          model: {
                                            value: _vm.vModel.fax,
                                            callback: function($$v) {
                                              _vm.$set(_vm.vModel, "fax", $$v)
                                            },
                                            expression: "vModel.fax"
                                          }
                                        }),
                                        _vm._v(" "),
                                        _c("vs-input", {
                                          directives: [
                                            {
                                              name: "validate",
                                              rawName: "v-validate",
                                              value: _vm.isEmailRequired
                                                ? "required"
                                                : "",
                                              expression:
                                                "isEmailRequired ? 'required' : ''"
                                            }
                                          ],
                                          staticClass: "w-full md:w-1/2",
                                          class: {
                                            required: _vm.isEmailRequired
                                          },
                                          attrs: {
                                            label: _vm.$t("reservation.email"),
                                            placeholder: _vm.$t(
                                              "reservation.email"
                                            ),
                                            maxLength: 50,
                                            "description-text": _vm._f(
                                              "toString"
                                            )(
                                              _vm.errors.first(
                                                _vm.scope1 + ".email"
                                              ) || _vm.dbErrors.email
                                            ),
                                            name: "email",
                                            "data-vv-scope": _vm.scope1
                                          },
                                          model: {
                                            value: _vm.vModel.email,
                                            callback: function($$v) {
                                              _vm.$set(_vm.vModel, "email", $$v)
                                            },
                                            expression: "vModel.email"
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
                                          staticClass:
                                            "wrap-form-select w-full md:w-1/2",
                                          attrs: {
                                            label: _vm.$t(
                                              "reservation.website"
                                            ),
                                            placeholder: _vm.$t(
                                              "reservation.website"
                                            ),
                                            maxLength: 50
                                          },
                                          model: {
                                            value: _vm.vModel.website,
                                            callback: function($$v) {
                                              _vm.$set(
                                                _vm.vModel,
                                                "website",
                                                $$v
                                              )
                                            },
                                            expression: "vModel.website"
                                          }
                                        }),
                                        _vm._v(" "),
                                        _c(
                                          "div",
                                          {
                                            staticClass:
                                              "wrap-form-select w-full md:w-1/2",
                                            class: {
                                              required: _vm.isCompanyRequired
                                            }
                                          },
                                          [
                                            _c("vs-row", [
                                              _c("label", [
                                                _vm._v(
                                                  _vm._s(
                                                    _vm.$t(
                                                      "reservation.company"
                                                    )
                                                  )
                                                )
                                              ])
                                            ]),
                                            _vm._v(" "),
                                            _c(
                                              "vs-row",
                                              [
                                                _c("v-select", {
                                                  directives: [
                                                    {
                                                      name: "validate",
                                                      rawName: "v-validate",
                                                      value: _vm.isCompanyRequired
                                                        ? "required"
                                                        : "",
                                                      expression:
                                                        "isCompanyRequired ? 'required' : ''"
                                                    }
                                                  ],
                                                  staticClass:
                                                    "height150 w-full",
                                                  attrs: {
                                                    id: "form-select",
                                                    placeholder: _vm.$t(
                                                      "table.select"
                                                    ),
                                                    label: "name",
                                                    reduce: function(value) {
                                                      return value.code
                                                    },
                                                    options:
                                                      _vm.dataLookup.company,
                                                    name: "company",
                                                    "data-vv-scope": _vm.scope1
                                                  },
                                                  model: {
                                                    value:
                                                      _vm.vModel.company_code,
                                                    callback: function($$v) {
                                                      _vm.$set(
                                                        _vm.vModel,
                                                        "company_code",
                                                        $$v
                                                      )
                                                    },
                                                    expression:
                                                      "vModel.company_code"
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
                                                          _vm.scope1 +
                                                            ".company"
                                                        ),
                                                        expression:
                                                          "errors.has(scope1+'.company')"
                                                      }
                                                    ],
                                                    staticClass:
                                                      "error-text text-danger"
                                                  },
                                                  [
                                                    _vm._v(
                                                      _vm._s(
                                                        _vm._f("toString")(
                                                          _vm.errors.first(
                                                            _vm.scope1 +
                                                              ".company"
                                                          ) ||
                                                            _vm.dbErrors.company
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
                                        _c(
                                          "div",
                                          {
                                            staticClass:
                                              "wrap-form-select w-full"
                                          },
                                          [
                                            _c("vs-row", [
                                              _vm._v(
                                                _vm._s(
                                                  _vm.$t("reservation.gsType")
                                                )
                                              )
                                            ]),
                                            _vm._v(" "),
                                            _c(
                                              "vs-row",
                                              [
                                                _c("v-select", {
                                                  staticClass:
                                                    "height150 w-full",
                                                  attrs: {
                                                    id: "form-select",
                                                    placeholder: _vm.$t(
                                                      "table.select"
                                                    ),
                                                    label: "name",
                                                    reduce: function(value) {
                                                      return value.code
                                                    },
                                                    options:
                                                      _vm.dataLookup.guest_type
                                                  },
                                                  model: {
                                                    value:
                                                      _vm.vModel
                                                        .guest_type_code,
                                                    callback: function($$v) {
                                                      _vm.$set(
                                                        _vm.vModel,
                                                        "guest_type_code",
                                                        $$v
                                                      )
                                                    },
                                                    expression:
                                                      "vModel.guest_type_code"
                                                  }
                                                })
                                              ],
                                              1
                                            )
                                          ],
                                          1
                                        )
                                      ]
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
                                        _c(
                                          "div",
                                          {
                                            staticClass:
                                              "wrap-form-select w-full md:w-1/2"
                                          },
                                          [
                                            _c("vs-row", [
                                              _vm._v(
                                                _vm._s(
                                                  _vm.$t("reservation.idCard")
                                                )
                                              )
                                            ]),
                                            _vm._v(" "),
                                            _c(
                                              "vs-row",
                                              [
                                                _c("v-select", {
                                                  staticClass:
                                                    "height100 w-full",
                                                  attrs: {
                                                    id: "form-select",
                                                    placeholder: _vm.$t(
                                                      "table.select"
                                                    ),
                                                    label: "name",
                                                    reduce: function(value) {
                                                      return value.code
                                                    },
                                                    options:
                                                      _vm.dataLookup.id_card
                                                  },
                                                  model: {
                                                    value:
                                                      _vm.vModel.id_card_code,
                                                    callback: function($$v) {
                                                      _vm.$set(
                                                        _vm.vModel,
                                                        "id_card_code",
                                                        $$v
                                                      )
                                                    },
                                                    expression:
                                                      "vModel.id_card_code"
                                                  }
                                                })
                                              ],
                                              1
                                            )
                                          ],
                                          1
                                        ),
                                        _vm._v(" "),
                                        _c("vs-input", {
                                          staticClass:
                                            "wrap-form-select w-full md:w-1/2",
                                          attrs: {
                                            label:
                                              _vm.$t("reservation.idCard") +
                                              "#",
                                            placeholder:
                                              _vm.$t("reservation.idCard") +
                                              "#",
                                            maxLength: 25
                                          },
                                          model: {
                                            value: _vm.vModel.id_card_number,
                                            callback: function($$v) {
                                              _vm.$set(
                                                _vm.vModel,
                                                "id_card_number",
                                                $$v
                                              )
                                            },
                                            expression: "vModel.id_card_number"
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
                                          staticClass:
                                            "wrap-form-select w-full md:w-1/2",
                                          attrs: {
                                            label: _vm.$t(
                                              "reservation.birthPlace"
                                            ),
                                            placeholder: _vm.$t(
                                              "reservation.birthPlace"
                                            ),
                                            maxLength: 50
                                          },
                                          model: {
                                            value: _vm.vModel.birth_place,
                                            callback: function($$v) {
                                              _vm.$set(
                                                _vm.vModel,
                                                "birth_place",
                                                $$v
                                              )
                                            },
                                            expression: "vModel.birth_place"
                                          }
                                        }),
                                        _vm._v(" "),
                                        _c(
                                          "div",
                                          {
                                            staticClass:
                                              "wrap-form-select w-full md:w-1/2"
                                          },
                                          [
                                            _c("vs-row", [
                                              _vm._v(
                                                _vm._s(
                                                  _vm.$t(
                                                    "reservation.birthDate"
                                                  )
                                                )
                                              )
                                            ]),
                                            _vm._v(" "),
                                            _c(
                                              "vs-row",
                                              [
                                                _c("date-picker", {
                                                  staticClass: "w-full",
                                                  attrs: {
                                                    lang: _vm.$t("lang"),
                                                    "value-type": "YYYY-MM-DD",
                                                    clearable: "",
                                                    format: "DD/MM/YYYY",
                                                    placeholder: _vm.$t(
                                                      "reservation.birthDate"
                                                    ),
                                                    label: "name"
                                                  },
                                                  model: {
                                                    value:
                                                      _vm.vModel.birth_date,
                                                    callback: function($$v) {
                                                      _vm.$set(
                                                        _vm.vModel,
                                                        "birth_date",
                                                        $$v
                                                      )
                                                    },
                                                    expression:
                                                      "vModel.birth_date"
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
                            )
                          ],
                          1
                        )
                      ],
                      1
                    )
                  ])
                ]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "footer",
            { staticClass: "footer" },
            [
              _vm.activeTab == 1
                ? _c(
                    "vs-row",
                    { attrs: { "vs-type": "flex", "vs-justify": "flex-end" } },
                    [
                      _c(
                        "vs-button",
                        {
                          staticClass: "vs-con-loading__container mr-2",
                          staticStyle: { float: "right" },
                          attrs: {
                            disabled: _vm.btnSaveDisabled,
                            id: "button-save-main",
                            icon: "save"
                          },
                          on: {
                            click: function($event) {
                              return _vm.handleSaveForm()
                            }
                          }
                        },
                        [_vm._v("Save")]
                      ),
                      _vm._v(" "),
                      _c(
                        "vs-button",
                        {
                          staticStyle: { float: "right" },
                          attrs: { color: "grey" },
                          on: {
                            click: function($event) {
                              _vm.modalMain = false
                            }
                          }
                        },
                        [_vm._v("Close")]
                      )
                    ],
                    1
                  )
                : _vm._e()
            ],
            1
          )
        ]
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/api/deskFolio.js":
/*!*******************************************!*\
  !*** ./resources/js/src/api/deskFolio.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DeskFolioResource; });
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



var tableName = 'folio';
var uri = 'deskfolio';

var DeskFolioResource =
/*#__PURE__*/
function (_Resource) {
  _inherits(DeskFolioResource, _Resource);

  function DeskFolioResource() {
    _classCallCheck(this, DeskFolioResource);

    return _possibleConstructorReturn(this, _getPrototypeOf(DeskFolioResource).call(this, uri));
  }

  _createClass(DeskFolioResource, [{
    key: "log",
    value: function log(id) {
      return Object(_utils_request__WEBPACK_IMPORTED_MODULE_1__["default"])({
        url: '/tracking/log/' + tableName + '/' + id,
        method: 'get'
      });
    }
  }, {
    key: "lookup",
    value: function lookup(params) {
      return Object(_utils_request__WEBPACK_IMPORTED_MODULE_1__["default"])({
        url: '/' + uri + '/form/lookup',
        method: 'get',
        params: params
      });
    }
  }, {
    key: "account",
    value: function account(params) {
      return Object(_utils_request__WEBPACK_IMPORTED_MODULE_1__["default"])({
        url: '/' + uri + '/form/account',
        method: 'get',
        params: params
      });
    }
  }, {
    key: "folioType",
    value: function folioType(params) {
      return Object(_utils_request__WEBPACK_IMPORTED_MODULE_1__["default"])({
        url: '/' + uri + '/form/foliotype',
        method: 'get',
        params: params
      });
    }
  }, {
    key: "listRouting",
    value: function listRouting() {
      return Object(_utils_request__WEBPACK_IMPORTED_MODULE_1__["default"])({
        url: '/' + uri + '/transfer/list/routing',
        method: 'get'
      });
    }
  }, {
    key: "listFolio",
    value: function listFolio(params) {
      return Object(_utils_request__WEBPACK_IMPORTED_MODULE_1__["default"])({
        url: '/' + uri + '/transfer/list/folio',
        method: 'get',
        params: params
      });
    }
  }, {
    key: "transfer",
    value: function transfer(data) {
      return Object(_utils_request__WEBPACK_IMPORTED_MODULE_1__["default"])({
        url: '/' + uri + '/transfer/transaction',
        method: 'post',
        data: data
      });
    }
  }, {
    key: "exchangeRate",
    value: function exchangeRate(params) {
      return Object(_utils_request__WEBPACK_IMPORTED_MODULE_1__["default"])({
        url: '/' + uri + '/form/exchrate',
        method: 'get',
        params: params
      });
    }
  }, {
    key: "charge",
    value: function charge(data) {
      return Object(_utils_request__WEBPACK_IMPORTED_MODULE_1__["default"])({
        url: '/' + uri + '/charge',
        method: 'post',
        data: data
      });
    }
  }, {
    key: "payment",
    value: function payment(data) {
      return Object(_utils_request__WEBPACK_IMPORTED_MODULE_1__["default"])({
        url: '/' + uri + '/payment',
        method: 'post',
        data: data
      });
    }
  }, {
    key: "correction",
    value: function correction(data) {
      return Object(_utils_request__WEBPACK_IMPORTED_MODULE_1__["default"])({
        url: '/' + uri + '/correction',
        method: 'post',
        data: data
      });
    }
  }, {
    key: "void",
    value: function _void(data) {
      return Object(_utils_request__WEBPACK_IMPORTED_MODULE_1__["default"])({
        url: '/' + uri + '/void',
        method: 'post',
        data: data
      });
    }
  }]);

  return DeskFolioResource;
}(_api_resource__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./resources/js/src/api/masterFolio.js":
/*!*********************************************!*\
  !*** ./resources/js/src/api/masterFolio.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MasterFolioResource; });
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



var tableName = 'folio';
var uri = 'masterfolio';

var MasterFolioResource =
/*#__PURE__*/
function (_Resource) {
  _inherits(MasterFolioResource, _Resource);

  function MasterFolioResource() {
    _classCallCheck(this, MasterFolioResource);

    return _possibleConstructorReturn(this, _getPrototypeOf(MasterFolioResource).call(this, uri));
  }

  _createClass(MasterFolioResource, [{
    key: "log",
    value: function log(id) {
      return Object(_utils_request__WEBPACK_IMPORTED_MODULE_1__["default"])({
        url: '/tracking/log/' + tableName + '/' + id,
        method: 'get'
      });
    }
  }, {
    key: "createMasterFolioGroup",
    value: function createMasterFolioGroup(data) {
      return Object(_utils_request__WEBPACK_IMPORTED_MODULE_1__["default"])({
        url: '/' + uri + '/mastergroup',
        method: 'post',
        data: data
      });
    }
  }, {
    key: "isFolioGroupExist",
    value: function isFolioGroupExist(data) {
      return Object(_utils_request__WEBPACK_IMPORTED_MODULE_1__["default"])({
        url: '/' + uri + '/mastergroupexist',
        method: 'post',
        data: data
      });
    }
  }, {
    key: "getMasterFolioGroup",
    value: function getMasterFolioGroup(data) {
      return Object(_utils_request__WEBPACK_IMPORTED_MODULE_1__["default"])({
        url: '/' + uri + '/mastergroup/getmaster',
        method: 'post',
        data: data
      });
    }
  }, {
    key: "lookup",
    value: function lookup(params) {
      return Object(_utils_request__WEBPACK_IMPORTED_MODULE_1__["default"])({
        url: '/' + uri + '/form/lookup',
        method: 'get',
        params: params
      });
    }
  }, {
    key: "account",
    value: function account(params) {
      return Object(_utils_request__WEBPACK_IMPORTED_MODULE_1__["default"])({
        url: '/' + uri + '/form/account',
        method: 'get',
        params: params
      });
    }
  }, {
    key: "folioType",
    value: function folioType(params) {
      return Object(_utils_request__WEBPACK_IMPORTED_MODULE_1__["default"])({
        url: '/' + uri + '/form/foliotype',
        method: 'get',
        params: params
      });
    }
  }, {
    key: "listRouting",
    value: function listRouting() {
      return Object(_utils_request__WEBPACK_IMPORTED_MODULE_1__["default"])({
        url: '/' + uri + '/transfer/list/routing',
        method: 'get'
      });
    }
  }, {
    key: "listFolio",
    value: function listFolio(params) {
      return Object(_utils_request__WEBPACK_IMPORTED_MODULE_1__["default"])({
        url: '/' + uri + '/transfer/list/folio',
        method: 'get',
        params: params
      });
    }
  }, {
    key: "transfer",
    value: function transfer(data) {
      return Object(_utils_request__WEBPACK_IMPORTED_MODULE_1__["default"])({
        url: '/' + uri + '/transfer/transaction',
        method: 'post',
        data: data
      });
    }
  }, {
    key: "exchangeRate",
    value: function exchangeRate(params) {
      return Object(_utils_request__WEBPACK_IMPORTED_MODULE_1__["default"])({
        url: '/' + uri + '/form/exchrate',
        method: 'get',
        params: params
      });
    }
  }, {
    key: "charge",
    value: function charge(data) {
      return Object(_utils_request__WEBPACK_IMPORTED_MODULE_1__["default"])({
        url: '/' + uri + '/charge',
        method: 'post',
        data: data
      });
    }
  }, {
    key: "payment",
    value: function payment(data) {
      return Object(_utils_request__WEBPACK_IMPORTED_MODULE_1__["default"])({
        url: '/' + uri + '/payment',
        method: 'post',
        data: data
      });
    }
  }, {
    key: "correction",
    value: function correction(data) {
      return Object(_utils_request__WEBPACK_IMPORTED_MODULE_1__["default"])({
        url: '/' + uri + '/correction',
        method: 'post',
        data: data
      });
    }
  }, {
    key: "void",
    value: function _void(data) {
      return Object(_utils_request__WEBPACK_IMPORTED_MODULE_1__["default"])({
        url: '/' + uri + '/void',
        method: 'post',
        data: data
      });
    }
  }]);

  return MasterFolioResource;
}(_api_resource__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./resources/js/src/views/pages/components/folioForm/FolioForm.vue":
/*!*************************************************************************!*\
  !*** ./resources/js/src/views/pages/components/folioForm/FolioForm.vue ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FolioForm_vue_vue_type_template_id_2648cfb2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FolioForm.vue?vue&type=template&id=2648cfb2&scoped=true& */ "./resources/js/src/views/pages/components/folioForm/FolioForm.vue?vue&type=template&id=2648cfb2&scoped=true&");
/* harmony import */ var _FolioForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FolioForm.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/components/folioForm/FolioForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _FolioForm_vue_vue_type_style_index_0_id_2648cfb2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FolioForm.vue?vue&type=style&index=0&id=2648cfb2&scoped=true&lang=css& */ "./resources/js/src/views/pages/components/folioForm/FolioForm.vue?vue&type=style&index=0&id=2648cfb2&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _FolioForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FolioForm_vue_vue_type_template_id_2648cfb2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _FolioForm_vue_vue_type_template_id_2648cfb2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "2648cfb2",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/components/folioForm/FolioForm.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/components/folioForm/FolioForm.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/components/folioForm/FolioForm.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FolioForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./FolioForm.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/components/folioForm/FolioForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FolioForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/components/folioForm/FolioForm.vue?vue&type=style&index=0&id=2648cfb2&scoped=true&lang=css&":
/*!**********************************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/components/folioForm/FolioForm.vue?vue&type=style&index=0&id=2648cfb2&scoped=true&lang=css& ***!
  \**********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_FolioForm_vue_vue_type_style_index_0_id_2648cfb2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/style-loader!../../../../../../../node_modules/css-loader??ref--7-1!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./FolioForm.vue?vue&type=style&index=0&id=2648cfb2&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/components/folioForm/FolioForm.vue?vue&type=style&index=0&id=2648cfb2&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_FolioForm_vue_vue_type_style_index_0_id_2648cfb2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_FolioForm_vue_vue_type_style_index_0_id_2648cfb2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_FolioForm_vue_vue_type_style_index_0_id_2648cfb2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_FolioForm_vue_vue_type_style_index_0_id_2648cfb2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_FolioForm_vue_vue_type_style_index_0_id_2648cfb2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/src/views/pages/components/folioForm/FolioForm.vue?vue&type=template&id=2648cfb2&scoped=true&":
/*!********************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/components/folioForm/FolioForm.vue?vue&type=template&id=2648cfb2&scoped=true& ***!
  \********************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FolioForm_vue_vue_type_template_id_2648cfb2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./FolioForm.vue?vue&type=template&id=2648cfb2&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/components/folioForm/FolioForm.vue?vue&type=template&id=2648cfb2&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FolioForm_vue_vue_type_template_id_2648cfb2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FolioForm_vue_vue_type_template_id_2648cfb2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);