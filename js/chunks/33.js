(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[33],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/night-audit/dayend-close/DayendClose.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/night-audit/dayend-close/DayendClose.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_ErrorList_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/ErrorList.vue */ "./resources/js/src/views/pages/night-audit/dayend-close/components/ErrorList.vue");
/* harmony import */ var _api_night_audit_dayendClose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/api/night-audit/dayendClose */ "./resources/js/src/api/night-audit/dayendClose.js");


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


var dayendCloseResource = new _api_night_audit_dayendClose__WEBPACK_IMPORTED_MODULE_2__["default"]();
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'DayendClose',
  components: {
    ErrorList: _components_ErrorList_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      status: {
        step: 0,
        status: 0,
        auditStep: 0
      },
      auditStep: 0,
      start: 'START',
      lastDayendClose: '',
      isStart: false,
      result: '',
      progress: 0,
      showPopup: false,
      showAudit: false,
      popupTitle: '',
      isWarningError: false,
      destroyComponent: false,
      errorList: []
    };
  },
  methods: {
    handleStart: function () {
      var _handleStart = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var _this = this;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                this.reset();

                if (this.start == 'START') {
                  this.$vs.dialog({
                    type: 'confirm',
                    color: 'primary',
                    title: 'Confirmation',
                    text: 'Process Dayend Close?',
                    acceptText: 'Yes',
                    cancelText: 'No',
                    accept: function () {
                      var _accept = _asyncToGenerator(
                      /*#__PURE__*/
                      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
                        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
                          while (1) {
                            switch (_context.prev = _context.next) {
                              case 0:
                                _this.$vs.loading({
                                  container: '#layout--main',
                                  scale: _this.scaleLoadingMainLayout
                                });

                                _this.isStart = true;
                                _context.next = 4;
                                return _this.precheck();

                              case 4:
                              case "end":
                                return _context.stop();
                            }
                          }
                        }, _callee);
                      }));

                      function accept() {
                        return _accept.apply(this, arguments);
                      }

                      return accept;
                    }()
                  });
                } else if (this.isStart == true) {
                  this.reset();
                  this.$vs.loading.close('#layout--main>.con-vs-loading');
                }

              case 2:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function handleStart() {
        return _handleStart.apply(this, arguments);
      }

      return handleStart;
    }(),
    handleStop: function () {
      var _handleStop = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      function handleStop() {
        return _handleStop.apply(this, arguments);
      }

      return handleStop;
    }(),
    handleClose: function handleClose() {
      var _this2 = this;

      if (this.isWarningError) {
        this.showPopup = false;
      } else {
        this.$vs.dialog({
          color: 'danger',
          title: 'information',
          text: this.$t('message.abortProcessDayend'),
          acceptText: 'Ok',
          accept: function accept() {
            _this2.closePopup();
          }
        });
      }
    },
    closePopup: function closePopup() {
      this.reset();
      this.$vs.loading.close('#layout--main>.con-vs-loading');
    },
    reset: function reset() {
      this.result = '';
      this.$refs.errorList.showAutoPosting = false;
      this.showPopup = false;
      this.isStart = false;
      this.progress = 0;
      this.status = {
        status: 0,
        step: 0,
        auditStep: 0
      };
    },
    precheck: function () {
      var _precheck = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4() {
        var _ref, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return dayendCloseResource.precheck();

              case 2:
                _ref = _context4.sent;
                data = _ref.data;
                this.status = data;

                if (data.status == 3) {
                  this.closePopup();
                  this.$vs.dialog({
                    color: 'danger',
                    title: 'information',
                    text: 'Cannot process Dayend Close, Audit date is equal with current date',
                    acceptText: 'Ok'
                  });
                } else {
                  if (this.isStart && data.finalStep == 1 && data.step == 6) {
                    this.showPopup = false;
                    this.showAudit = true;
                    this.processAudit();
                    this.$vs.loading.close('#layout--main>.con-vs-loading');
                  } else {
                    if (this.isStart && data.status == 0 && data.step < 6) {
                      this.progress = 20 * data.step;
                      this.showPopup = false;
                      this.precheck();
                    } else if (this.isStart && data.status == 0 && data.step == 5) {
                      this.progress = 100;
                      this.isStart = false;
                      this.showPopup = false;
                      this.result = 'DONE';
                      this.$vs.loading.close('#layout--main>.con-vs-loading');
                    } else if (this.isStart && data.status == 1) {
                      this.isWarningError = data.step >= 5 ? true : false;
                      this.errorList = data.data;
                      this.showPopup = true;
                      this.popupTitle = this.$t('nightAudit.title.' + data.step);
                      this.$vs.loading.close('#layout--main>.con-vs-loading');
                    } else if (!this.isStart) {
                      this.result = 'ABORTED';
                    }
                  }
                }

                if (data.step == 5) {
                  this.popupTitle = 'Reservation/Folio not Balance';
                }

              case 7:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function precheck() {
        return _precheck.apply(this, arguments);
      }

      return precheck;
    }(),
    processAudit: function () {
      var _processAudit = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5() {
        var _this3 = this;

        var params, _ref2, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                params = {
                  user_id: this.userInfo.code
                };
                _context5.next = 3;
                return dayendCloseResource.audit(params);

              case 3:
                _ref2 = _context5.sent;
                data = _ref2.data;
                this.auditStep = data.auditStep;

                if (data.auditStep == 1) {
                  setTimeout(function () {
                    _this3.processAudit();
                  }, 1000);
                } else if (data.auditStep == 2) {
                  setTimeout(function () {
                    _this3.processAudit();
                  }, 1000);
                } else if (data.auditStep == 3) {
                  setTimeout(function () {
                    _this3.processAudit();
                  }, 1000);
                } else if (data.auditStep == 4) {
                  setTimeout(function () {
                    _this3.processAudit();
                  }, 1000);
                } else if (data.auditStep == 5) {
                  this.progress = 100;
                  this.isStart = false;
                  this.$store.dispatch('getAuditDate');
                  this.result = "Process Dayend Close has Finished";
                  setTimeout(function () {
                    _this3.showAudit = false;
                    setTimeout(function () {
                      _this3.finishedDayendClose();
                    }, 100);
                  }, 2000);
                }

              case 7:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function processAudit() {
        return _processAudit.apply(this, arguments);
      }

      return processAudit;
    }(),
    finishedDayendClose: function finishedDayendClose() {
      this.$store.dispatch('logout');
    },
    getLastDayendClose: function () {
      var _getLastDayendClose = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee6() {
        var _ref3, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                this.$vs.loading({
                  container: '#layout--main',
                  scale: this.scaleLoadingMainLayout
                });
                _context6.next = 3;
                return dayendCloseResource.lastDayendClose();

              case 3:
                _ref3 = _context6.sent;
                data = _ref3.data;
                this.lastDayendClose = data;
                this.$vs.loading.close('#layout--main>.con-vs-loading');

              case 7:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function getLastDayendClose() {
        return _getLastDayendClose.apply(this, arguments);
      }

      return getLastDayendClose;
    }()
  },
  computed: {
    userId: function userId() {
      return this.userInfo.code;
    },
    auditDate: function auditDate() {
      return this.$store.state.auditLog.auditDate;
    }
  },
  watch: {
    showPopup: function showPopup() {
      if (this.status.status == 1 && this.isStart && this.showPopup == false && this.isWarningError == false) {
        this.showPopup = true;
      } else if (this.showPopup == false && this.isWarningError == true) {
        this.showPopup = false;
        this.precheck();
      }
    },
    showAudit: function showAudit() {
      if (this.showAudit == false && this.auditStep < 5) {
        this.showAudit = true;
      } else {
        this.showAudit == false;
      }
    },
    isStart: function isStart(val) {
      this.start = val ? 'STOP' : 'START';
    }
  },
  created: function created() {
    this.$store.dispatch('getAuditDate'); // this.$vs.loading.close('#layout--main>.con-vs-loading');
  },
  mounted: function mounted() {
    this.getLastDayendClose();
    this.destroyComponent = true;
  },
  beforeRouteLeave: function beforeRouteLeave(to, from, next) {
    if (to.name !== 'transaction') {
      if (this.showAudit || this.showPopup || this.$refs.errorList.showAutoPosting) {
        this.handleClose();
        next(false);
      } else {
        this.destroyComponent = false; //fix sidebar error

        setTimeout(function () {
          next();
        }, 10);
      }
    } else {
      this.closePopup();
      setTimeout(function () {
        next();
      }, 10);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/night-audit/dayend-close/components/ErrorList.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/night-audit/dayend-close/components/ErrorList.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ag_grid_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ag-grid-vue */ "./node_modules/ag-grid-vue/main.js");
/* harmony import */ var ag_grid_vue__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ag_grid_vue__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_alert_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/utils/alert.js */ "./resources/js/src/utils/alert.js");
/* harmony import */ var _utils_dialog_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/utils/dialog.js */ "./resources/js/src/utils/dialog.js");
/* harmony import */ var _views_pages_night_audit_auto_post_transaction_AutoPostTransaction_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/views/pages/night-audit/auto-post-transaction/AutoPostTransaction.vue */ "./resources/js/src/views/pages/night-audit/auto-post-transaction/AutoPostTransaction.vue");
/* harmony import */ var _views_pages_components_registrationForm_RegistrationForm_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/views/pages/components/registrationForm/RegistrationForm.vue */ "./resources/js/src/views/pages/components/registrationForm/RegistrationForm.vue");
/* harmony import */ var _views_pages_components_folioForm_FolioForm_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/views/pages/components/folioForm/FolioForm.vue */ "./resources/js/src/views/pages/components/folioForm/FolioForm.vue");
/* harmony import */ var _views_pages_reservations_components_CancelReservation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/views/pages/reservations/components/CancelReservation */ "./resources/js/src/views/pages/reservations/components/CancelReservation.vue");
/* harmony import */ var _api_reservation_reservation__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/api/reservation/reservation */ "./resources/js/src/api/reservation/reservation.js");
/* harmony import */ var _api_guestinhouse_guestInHouse__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/api/guestinhouse/guestInHouse */ "./resources/js/src/api/guestinhouse/guestInHouse.js");
/* harmony import */ var _views_pages_components_Credential__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/views/pages/components/Credential */ "./resources/js/src/views/pages/components/Credential.vue");
/* harmony import */ var _api_folio__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/api/folio */ "./resources/js/src/api/folio.js");
/* harmony import */ var _utils_format_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @/utils/format.js */ "./resources/js/src/utils/format.js");


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












var guestInHouseResource = new _api_guestinhouse_guestInHouse__WEBPACK_IMPORTED_MODULE_9__["default"]();
var reservationResource = new _api_reservation_reservation__WEBPACK_IMPORTED_MODULE_8__["default"]();
var folioResource = new _api_folio__WEBPACK_IMPORTED_MODULE_11__["default"]();
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'ErrorList',
  props: {
    rowData: Array
  },
  components: {
    AgGridVue: ag_grid_vue__WEBPACK_IMPORTED_MODULE_1__["AgGridVue"],
    RegistrationForm: _views_pages_components_registrationForm_RegistrationForm_vue__WEBPACK_IMPORTED_MODULE_5__["default"],
    AutoPosting: _views_pages_night_audit_auto_post_transaction_AutoPostTransaction_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
    FolioForm: _views_pages_components_folioForm_FolioForm_vue__WEBPACK_IMPORTED_MODULE_6__["default"],
    CancelReservation: _views_pages_reservations_components_CancelReservation__WEBPACK_IMPORTED_MODULE_7__["default"]
  },
  data: function data() {
    return {
      //Ag-Grid
      columnDefs: null,
      gridOptions: null,
      gridApi: null,
      columnApi: null,
      frameworkComponents: null,
      contex: null,
      rowGroupPanelShow: null,
      statusBar: null,
      sideBar: null,
      paginationPageSize: null,
      rowSelection: null,
      dataTracking: null,
      //-----------------
      showPrePost: false,
      showAutoPosting: false,
      post: {
        allow_zero: false,
        reposting: false
      },
      number: null,
      cancelNoShow: '',
      popupTitle: '',
      isWarningError: false,
      folioStatus: {},
      folioFormType: '',
      folioTitleForm: '',
      //-----------------
      // <!-- <FORM REGISTRATION> -->
      guestDetail: {
        full_name: ''
      },
      isReservation: false,
      // <!-- </FORM REGISTRATION> -->
      //------CREDENTIAL-------//
      activeCredentialPrompt: false,
      activeCredentialReasonPrompt: false,
      credentialTitle: '',
      credential: {
        user: '',
        pass: '',
        reason: ''
      },
      specialAccessType: '',
      reasonTypeValue: '',
      paramsData: '',
      vCancel: {},
      idLog: '',
      isCheckOut: false,
      isGuestInHouse: false,
      destroyComponent: false,
      destroyComponent2: false //------------------end need setting manual-----------------//

    };
  },
  beforeMount: function beforeMount() {
    this.gridOptions = {
      rowHeight: this.rowHeightReservation
    }; //------------------need setting manual for column table-----------------//
    // use this.$t("value") for transaltion localization------//
    // see value in @/lang/en.js //

    this.columnDefs = [{
      headerName: this.$t('nightAudit.table.type'),
      field: 'type',
      width: 100
    }, {
      headerName: '#',
      field: 'number',
      width: 80
    }, {
      headerName: this.$t('nightAudit.table.roomNumber'),
      field: 'room_number',
      width: 80
    }, {
      headerName: this.$t('nightAudit.table.guestName'),
      field: 'full_name',
      width: 180
    }, {
      headerName: this.$t('nightAudit.table.description'),
      field: 'description',
      width: 250
    }, {
      headerName: this.$t('nightAudit.table.solution') + '1',
      field: 'solution1',
      width: 110
    }, {
      headerName: this.$t('nightAudit.table.solution') + '2',
      field: 'solution2',
      width: 110
    }, {
      headerName: this.$t('nightAudit.table.solution') + '3',
      field: 'solution3',
      width: 110
    }, {
      headerName: this.$t('nightAudit.table.solution') + '4',
      field: 'solution4',
      width: 110
    }]; //------------------end need setting manual for column table-----------------//

    this.paginationPageSize = this.limitDefaultPageSize;
    this.rowSelection = 'single';
    this.rowModelType = 'serverSide';
  },
  methods: {
    onGridReady: function onGridReady() {},
    onPageSizeChanged: function onPageSizeChanged(newPageSize) {
      this.gridApi.paginationSetPageSize(newPageSize);
    },
    handleRowDobleClicked: function () {
      var _handleRowDobleClicked = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(params) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return params.data;

              case 2:
                this.paramsData = _context.sent;
                this.getValueCell();

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function handleRowDobleClicked(_x) {
        return _handleRowDobleClicked.apply(this, arguments);
      }

      return handleRowDobleClicked;
    }(),
    // ========================================================
    onCellClicked: function () {
      var _onCellClicked = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(event) {
        var solution, number, paramsData;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                this.resetData();
                solution = event.value;
                number = event.data.number;
                paramsData = event.data;
                this.number = number;

                if (!(solution == this.mSolution.autoAssign)) {
                  _context2.next = 10;
                  break;
                }

                _context2.next = 8;
                return this.autoAssign(number);

              case 8:
                _context2.next = 11;
                break;

              case 10:
                if (solution === this.mSolution.checkIn) {
                  this.checkIn();
                } else if (solution === this.mSolution.cancel) {
                  this.$vs.loading({
                    container: '#layout--main',
                    scale: this.scaleLoadingMainLayout
                  });
                  this.$refs.cancelReservation.showCancelReservation(this.reservationStatus.cancel, number);
                } else if (solution === this.mSolution.changeArrival) {
                  this.changeArrival();
                } else if (solution === this.mSolution.noShow) {
                  this.$vs.loading({
                    container: '#layout--main',
                    scale: this.scaleLoadingMainLayout
                  });
                  this.$refs.cancelReservation.showCancelReservation(this.reservationStatus.noShow, number);
                } else if (solution === this.mSolution.checkOut) {
                  this.checkOut();
                } else if (solution === this.mSolution.extend) {
                  this.extend();
                } else if (solution === this.mSolution.autoPosting) {
                  this.destroyComponent2 = true;
                  this.showAutoPosting = true;
                } else if (solution === this.mSolution.showFolio) {
                  this.handleTransaction(this.mFormType.folioHistory);
                } else if (solution === this.mSolution.showDeposit) {
                  this.showDeposit();
                } else if (solution === this.mSolution.unsetWaitList) {
                  this.unsetWaitList(this.number);
                }

              case 11:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function onCellClicked(_x2) {
        return _onCellClicked.apply(this, arguments);
      }

      return onCellClicked;
    }(),
    resetData: function resetData() {
      this.activeCredentialReasonPrompt = false;
      this.number = null;
      this.isCheckOut = false;
      this.cancelNoShow = '';
      this.isReservation = false;
      this.isGuestInHouse = false;
      this.credential = {
        user: '',
        pass: '',
        reason: ''
      };
    },
    closePopup: function closePopup() {
      this.$emit('closePopup');
    },
    precheck: function precheck() {
      this.$emit('precheck');
      this.destroyComponent2 = false;
    },
    handleTransaction: function () {
      var _handleTransaction = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(formType) {
        var _ref, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                this.$vs.loading({
                  container: '#layout--main',
                  scale: this.scaleLoadingMainLayout
                });
                this.closePopup();
                _context3.next = 4;
                return guestInHouseResource.get(this.number);

              case 4:
                _ref = _context3.sent;
                data = _ref.data;
                this.$router.push({
                  name: 'transaction',
                  params: {
                    stayInformations: data.list,
                    isDayendClose: true,
                    isCheckOut: this.isCheckOut,
                    form: formType
                  }
                });

              case 7:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function handleTransaction(_x3) {
        return _handleTransaction.apply(this, arguments);
      }

      return handleTransaction;
    }(),
    autoAssign: function () {
      var _autoAssign = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4(number) {
        var _ref2, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                this.$vs.loading({
                  container: '#layout--main',
                  scale: this.scaleLoadingMainLayout
                });
                _context4.next = 3;
                return reservationResource.autoAssignRoom({
                  reservation_number: number,
                  ready: 1,
                  user_id: this.userId
                });

              case 3:
                _ref2 = _context4.sent;
                data = _ref2.data;

                if (data == 0) {
                  this.precheck();
                } else if (data > 0) {
                  _utils_dialog_js__WEBPACK_IMPORTED_MODULE_3__["default"].information(this.$t('message.statusAutoAssignRoom.' + data));
                }

                this.$vs.loading.close('.layout--main>.con-vs-loading');

              case 7:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function autoAssign(_x4) {
        return _autoAssign.apply(this, arguments);
      }

      return autoAssign;
    }(),
    unsetWaitList: function unsetWaitList(number) {
      var _this = this;

      this.destroyComponent = false;
      setTimeout(
      /*#__PURE__*/
      _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee6() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _this.destroyComponent = true;
                setTimeout(
                /*#__PURE__*/
                _asyncToGenerator(
                /*#__PURE__*/
                _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5() {
                  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
                    while (1) {
                      switch (_context5.prev = _context5.next) {
                        case 0:
                          _this.$vs.loading({
                            container: '#layout--main',
                            scale: _this.scaleLoadingMainLayout
                          });

                          _context5.next = 3;
                          return _this.$refs.registrationForm.unsetWaitList(number);

                        case 3:
                        case "end":
                          return _context5.stop();
                      }
                    }
                  }, _callee5);
                })), 200);

              case 2:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6);
      })), 200);
    },
    changeArrival: function changeArrival() {
      var data = {
        reservation_number: this.number
      };
      this.isReservation = true;
      this.showRegistrationForm(data, this.modeData.edit, true);
    },
    checkIn: function checkIn() {
      var _this2 = this;

      var data = {
        reservation_number: this.number
      };
      this.isReservation = true;
      this.destroyComponent = false;
      setTimeout(function () {
        _this2.destroyComponent = true;
        setTimeout(function () {
          _this2.$refs.registrationForm.handleCheckIn(data);
        }, 100);
      }, 100);
    },
    checkOut: function checkOut() {
      this.isCheckOut = true;
      this.handleTransaction(this.mFormType.guestInHouse);
    },
    extend: function () {
      var _extend = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee7() {
        var data;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                this.$vs.loading({
                  container: '#layout--main',
                  scale: this.scaleLoadingMainLayout
                });
                data = {
                  folio_number: this.number
                };
                _context7.next = 4;
                return this.cekFolioStatus(this.number);

              case 4:
                if (this.folioStatus.type_code === this.mFolioType.guestFolio) {
                  this.isGuestInHouse = true;
                  this.showRegistrationForm(data, this.modeData.edit, false);
                } else if (this.folioStatus.type_code === this.mFolioType.deskFolio || this.folioStatus.type_code === this.mFolioType.masterFolio) {
                  this.folioFormType = this.folioStatus.type_code;
                  this.folioTitleForm = this.folioStatus.type_code == this.mFolioType.deskFolio ? 'Desk Folio' : 'Master Folio';
                  this.showFolioForm(data, this.modeData.edit);
                }

              case 5:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      function extend() {
        return _extend.apply(this, arguments);
      }

      return extend;
    }(),
    cekFolioStatus: function () {
      var _cekFolioStatus = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee8(folioNumber) {
        var _ref5, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                _context8.next = 2;
                return folioResource.folioStatus(folioNumber);

              case 2:
                _ref5 = _context8.sent;
                data = _ref5.data;
                this.folioStatus = data;

              case 5:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, this);
      }));

      function cekFolioStatus(_x5) {
        return _cekFolioStatus.apply(this, arguments);
      }

      return cekFolioStatus;
    }(),
    showDeposit: function () {
      var _showDeposit = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee9() {
        var data;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                data = {
                  reservation_number: this.number
                };
                this.isReservation = true;
                _context9.next = 4;
                return this.showRegistrationForm(data, this.modeData.edit, true);

              case 4:
                setTimeout(function () {
                  document.getElementById('deposit').click();
                }, 500);

              case 5:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9, this);
      }));

      function showDeposit() {
        return _showDeposit.apply(this, arguments);
      }

      return showDeposit;
    }(),
    showFolioForm: function () {
      var _showFolioForm = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee12(idData, modeData) {
        var _this3 = this;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee12$(_context12) {
          while (1) {
            switch (_context12.prev = _context12.next) {
              case 0:
                this.destroyComponent = false;
                setTimeout(
                /*#__PURE__*/
                _asyncToGenerator(
                /*#__PURE__*/
                _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee11() {
                  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee11$(_context11) {
                    while (1) {
                      switch (_context11.prev = _context11.next) {
                        case 0:
                          _this3.destroyComponent = true;
                          setTimeout(
                          /*#__PURE__*/
                          _asyncToGenerator(
                          /*#__PURE__*/
                          _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee10() {
                            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee10$(_context10) {
                              while (1) {
                                switch (_context10.prev = _context10.next) {
                                  case 0:
                                    _context10.next = 2;
                                    return _this3.$refs.folioForm.showForm(idData, modeData);

                                  case 2:
                                  case "end":
                                    return _context10.stop();
                                }
                              }
                            }, _callee10);
                          })), 200);

                        case 2:
                        case "end":
                          return _context11.stop();
                      }
                    }
                  }, _callee11);
                })), 200);

              case 2:
              case "end":
                return _context12.stop();
            }
          }
        }, _callee12, this);
      }));

      function showFolioForm(_x6, _x7) {
        return _showFolioForm.apply(this, arguments);
      }

      return showFolioForm;
    }(),
    showRegistrationForm: function () {
      var _showRegistrationForm = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee15(idData, modeData, isReservation) {
        var _this4 = this;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee15$(_context15) {
          while (1) {
            switch (_context15.prev = _context15.next) {
              case 0:
                this.destroyComponent = false;
                setTimeout(
                /*#__PURE__*/
                _asyncToGenerator(
                /*#__PURE__*/
                _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee14() {
                  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee14$(_context14) {
                    while (1) {
                      switch (_context14.prev = _context14.next) {
                        case 0:
                          _this4.destroyComponent = true;
                          setTimeout(
                          /*#__PURE__*/
                          _asyncToGenerator(
                          /*#__PURE__*/
                          _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee13() {
                            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee13$(_context13) {
                              while (1) {
                                switch (_context13.prev = _context13.next) {
                                  case 0:
                                    _context13.next = 2;
                                    return _this4.$refs.registrationForm.showForm(idData, modeData, isReservation);

                                  case 2:
                                  case "end":
                                    return _context13.stop();
                                }
                              }
                            }, _callee13);
                          })), 100);

                        case 2:
                        case "end":
                          return _context14.stop();
                      }
                    }
                  }, _callee14);
                })), 100);

              case 2:
              case "end":
                return _context15.stop();
            }
          }
        }, _callee15, this);
      }));

      function showRegistrationForm(_x8, _x9, _x10) {
        return _showRegistrationForm.apply(this, arguments);
      }

      return showRegistrationForm;
    }(),
    // ========================================================
    //--------------------CREDENTIAL----------------------------------------//
    showCredential: function showCredential(val, title, reasonType) {
      this.reasonTypeValue = reasonType;
      this.activeCredentialPrompt = true;
      this.idLog = val.id_log;
      this.credentialTitle = title;
    },
    acceptCredential: function acceptCredential() {
      this.activeCredentialReasonPrompt = true;
    },
    acceptReason: function acceptReason() {
      var data = {
        id_log: this.idLog,
        void_by: this.credential.user,
        void_reason: this.credential.reason,
        user_id: this.userId
      };
    }
  },
  mounted: function mounted() {
    this.gridApi = this.gridOptions.api;
    this.ColumnApi = this.gridOptions.columnApi;
  },
  watch: {
    showAutoPosting: function showAutoPosting() {
      if (this.showAutoPosting == false) {
        this.precheck();
      }
    }
  },
  computed: {
    userValidation: function userValidation() {
      return this.credential.user.length > 0 && this.credential.pass.length > 0;
    },
    userId: {
      get: function get() {
        return this.userInfo.code;
      }
    }
  },
  beforeDestroy: function beforeDestroy() {
    this.destroyComponent = false;
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/night-audit/dayend-close/DayendClose.vue?vue&type=style&index=0&lang=scss&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/night-audit/dayend-close/DayendClose.vue?vue&type=style&index=0&lang=scss& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".item-progress {\n  width: 500px;\n  padding: 20px;\n}\n.audit-progress {\n  padding: 20px;\n}\n.item .success {\n  color: #00da00;\n}\n.item .error {\n  color: #e40000;\n}\n.item div:last-child {\n  font-weight: bolder;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/night-audit/dayend-close/components/ErrorList.vue?vue&type=style&index=0&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/night-audit/dayend-close/components/ErrorList.vue?vue&type=style&index=0&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".night-audit .ag-theme-balham .ag-header {\n  font-size: 11px;\n}\n.night-audit .ag-theme-balham {\n  font-size: 11px;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/night-audit/dayend-close/DayendClose.vue?vue&type=style&index=0&lang=scss&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/night-audit/dayend-close/DayendClose.vue?vue&type=style&index=0&lang=scss& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../node_modules/css-loader!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./DayendClose.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/night-audit/dayend-close/DayendClose.vue?vue&type=style&index=0&lang=scss&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/night-audit/dayend-close/components/ErrorList.vue?vue&type=style&index=0&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/night-audit/dayend-close/components/ErrorList.vue?vue&type=style&index=0&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../../node_modules/css-loader??ref--7-1!../../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ErrorList.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/night-audit/dayend-close/components/ErrorList.vue?vue&type=style&index=0&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/night-audit/dayend-close/DayendClose.vue?vue&type=template&id=07ed6732&":
/*!********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/night-audit/dayend-close/DayendClose.vue?vue&type=template&id=07ed6732& ***!
  \********************************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "dayend-closed" },
    [
      _c(
        "vx-card",
        { staticClass: "mb-3" },
        [
          _c(
            "vs-row",
            { attrs: { "vs-type": "flex" } },
            [
              _c(
                "vs-col",
                {
                  attrs: {
                    "vs-lg": "6",
                    "vs-type": "flex",
                    "vs-justify": "flex-start"
                  }
                },
                [
                  _c("span", [
                    _vm._v(
                      "Last Dayend Closed : " +
                        _vm._s(_vm._f("full_datetime")(_vm.lastDayendClose))
                    )
                  ])
                ]
              ),
              _vm._v(" "),
              _c(
                "vs-col",
                {
                  attrs: {
                    "vs-lg": "6",
                    "vs-type": "flex",
                    "vs-justify": "flex-end"
                  }
                },
                [
                  _c("span", [
                    _vm._v(
                      "Audit Date : " +
                        _vm._s(_vm._f("fulldate")(_vm.auditDate))
                    )
                  ])
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
        "vx-card",
        { attrs: { "vs-type": "flex", "vs-justify": "center" } },
        [
          _c(
            "vs-row",
            {
              staticClass: "mb-5",
              attrs: { "vs-type": "flex", "vs-justify": "center" }
            },
            [_c("span", [_vm._v("PROCESS DAYEND CLOSED")])]
          ),
          _vm._v(" "),
          _c(
            "vs-row",
            {
              staticClass: "mb-5",
              attrs: { "vs-type": "flex", "vs-justify": "center" }
            },
            [
              _c(
                "vs-button",
                {
                  attrs: { color: !_vm.isStart ? "success" : "danger" },
                  on: {
                    click: function($event) {
                      return _vm.handleStart()
                    }
                  }
                },
                [_vm._v(" " + _vm._s(_vm.start) + " ")]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "vs-row",
            {
              staticClass: "mb-6",
              attrs: { "vs-type": "flex", "vs-justify": "center" }
            },
            [
              _c("span", [_vm._v("Progress " + _vm._s(_vm.progress) + "%")]),
              _vm._v(" "),
              _c(
                "vs-progress",
                {
                  attrs: { height: 8, percent: _vm.progress, color: "primary" }
                },
                [_vm._v("primary")]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "vs-row",
            {
              staticClass: "mb-6",
              attrs: { "vs-type": "flex", "vs-justify": "center" }
            },
            [
              _vm.isStart
                ? _c(
                    "div",
                    { staticClass: "item-progress" },
                    [
                      _c(
                        "vs-row",
                        { staticClass: "item" },
                        [
                          _c(
                            "vs-col",
                            {
                              attrs: {
                                "vs-lg": "8",
                                "vs-type": "flex",
                                "vs-justify": "flex-start"
                              }
                            },
                            [
                              _c("span", [
                                _vm._v("Reservation Arrival not Check In")
                              ])
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "vs-col",
                            {
                              attrs: {
                                "vs-lg": "3",
                                "vs-type": "flex",
                                "vs-justify": "flex-end"
                              }
                            },
                            [
                              (_vm.status.step >= 1 &&
                                this.status.status == 0) ||
                              _vm.status.step >= 2
                                ? _c("span", { staticClass: "success" }, [
                                    _vm._v("OK")
                                  ])
                                : _vm._e(),
                              _vm._v(" "),
                              _vm.status.step == 1 && this.status.status == 1
                                ? _c("span", { staticClass: "error" }, [
                                    _vm._v("ERROR")
                                  ])
                                : _vm._e()
                            ]
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "vs-row",
                        { staticClass: "item" },
                        [
                          _c(
                            "vs-col",
                            {
                              attrs: {
                                "vs-lg": "8",
                                "vs-type": "flex",
                                "vs-justify": "flex-start"
                              }
                            },
                            [
                              _c("span", [
                                _vm._v("Guest Departure not Check Out")
                              ])
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "vs-col",
                            {
                              attrs: {
                                "vs-lg": "3",
                                "vs-type": "flex",
                                "vs-justify": "flex-end"
                              }
                            },
                            [
                              (_vm.status.step >= 2 &&
                                this.status.status == 0) ||
                              _vm.status.step >= 3
                                ? _c("span", { staticClass: "success" }, [
                                    _vm._v("OK")
                                  ])
                                : _vm._e(),
                              _vm._v(" "),
                              _vm.status.step == 2 && this.status.status == 1
                                ? _c("span", { staticClass: "error" }, [
                                    _vm._v("ERROR")
                                  ])
                                : _vm._e()
                            ]
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "vs-row",
                        { staticClass: "item" },
                        [
                          _c(
                            "vs-col",
                            {
                              attrs: {
                                "vs-lg": "8",
                                "vs-type": "flex",
                                "vs-justify": "flex-start"
                              }
                            },
                            [_c("span", [_vm._v("Captain Order still Open")])]
                          ),
                          _vm._v(" "),
                          _c(
                            "vs-col",
                            {
                              attrs: {
                                "vs-lg": "3",
                                "vs-type": "flex",
                                "vs-justify": "flex-end"
                              }
                            },
                            [
                              (_vm.status.step >= 3 &&
                                this.status.status == 0) ||
                              _vm.status.step >= 4
                                ? _c("span", { staticClass: "success" }, [
                                    _vm._v("OK")
                                  ])
                                : _vm._e(),
                              _vm._v(" "),
                              _vm.status.step == 3 && this.status.status == 1
                                ? _c("span", { staticClass: "error" }, [
                                    _vm._v("ERROR")
                                  ])
                                : _vm._e()
                            ]
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "vs-row",
                        { staticClass: "item" },
                        [
                          _c(
                            "vs-col",
                            {
                              attrs: {
                                "vs-lg": "8",
                                "vs-type": "flex",
                                "vs-justify": "flex-start"
                              }
                            },
                            [_c("span", [_vm._v("Posting Room Charge")])]
                          ),
                          _vm._v(" "),
                          _c(
                            "vs-col",
                            {
                              attrs: {
                                "vs-lg": "3",
                                "vs-type": "flex",
                                "vs-justify": "flex-end"
                              }
                            },
                            [
                              (_vm.status.step >= 4 &&
                                this.status.status == 0) ||
                              _vm.status.step >= 5
                                ? _c("span", { staticClass: "success" }, [
                                    _vm._v("OK")
                                  ])
                                : _vm.status.step == 4 &&
                                  this.status.status == 1
                                ? _c("span", { staticClass: "error" }, [
                                    _vm._v("ERROR")
                                  ])
                                : _vm._e()
                            ]
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "vs-row",
                        { staticClass: "item" },
                        [
                          _c(
                            "vs-col",
                            {
                              attrs: {
                                "vs-lg": "8",
                                "vs-type": "flex",
                                "vs-justify": "flex-start"
                              }
                            },
                            [
                              _c("span", [
                                _vm._v(
                                  "Folio/Reservation Check Out not Balance"
                                )
                              ])
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "vs-col",
                            {
                              attrs: {
                                "vs-lg": "3",
                                "vs-type": "flex",
                                "vs-justify": "flex-end"
                              }
                            },
                            [
                              (_vm.status.step >= 5 &&
                                this.status.status == 0) ||
                              _vm.status.step >= 6
                                ? _c("span", { staticClass: "success" }, [
                                    _vm._v("OK")
                                  ])
                                : _vm.status.step == 5 &&
                                  this.status.status == 1
                                ? _c("span", { staticClass: "error" }, [
                                    _vm._v("WARNING")
                                  ])
                                : _vm._e()
                            ]
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "vs-row",
                        { staticClass: "item" },
                        [
                          _c(
                            "vs-col",
                            {
                              attrs: {
                                "vs-lg": "8",
                                "vs-type": "flex",
                                "vs-justify": "flex-start"
                              }
                            },
                            [_c("span", [_vm._v("Audit")])]
                          ),
                          _vm._v(" "),
                          _c(
                            "vs-col",
                            {
                              attrs: {
                                "vs-lg": "3",
                                "vs-type": "flex",
                                "vs-justify": "flex-end"
                              }
                            },
                            [
                              _vm.status.step >= 5 && this.status.status == 0
                                ? _c("span", [_vm._v("OK")])
                                : _vm._e()
                            ]
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "vs-row",
                        {
                          staticClass: "mt-5",
                          staticStyle: { "font-weight": "bolder" },
                          attrs: { "vs-type": "flex", "vs-justify": "center" }
                        },
                        [_c("span", [_vm._v(_vm._s(_vm.result))])]
                      )
                    ],
                    1
                  )
                : _vm._e()
            ]
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "vs-popup",
        {
          staticClass: "width-80",
          staticStyle: { "z-index": "52000" },
          attrs: {
            "button-close-hidden": "",
            active: _vm.showPopup,
            title: _vm.popupTitle
          },
          on: {
            "update:active": function($event) {
              _vm.showPopup = $event
            }
          }
        },
        [
          _vm.destroyComponent
            ? _c("error-list", {
                ref: "errorList",
                attrs: { rowData: _vm.errorList },
                on: {
                  precheck: function($event) {
                    return _vm.precheck()
                  },
                  closePopup: function($event) {
                    return _vm.closePopup()
                  }
                }
              })
            : _vm._e(),
          _vm._v(" "),
          _c(
            "footer",
            { staticClass: "footer" },
            [
              _c(
                "vs-row",
                { attrs: { "vs-type": "flex", "vs-justify": "flex-end" } },
                [
                  _c(
                    "vs-button",
                    {
                      staticClass: "vs-con-loading__container",
                      staticStyle: { float: "right" },
                      attrs: { color: "danger" },
                      on: {
                        click: function($event) {
                          return _vm.handleClose()
                        }
                      }
                    },
                    [_vm._v(_vm._s(_vm.isWarningError ? "Continue" : "Abort"))]
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
        "vs-popup",
        {
          attrs: {
            "button-close-hidden": "",
            active: _vm.showAudit,
            title: "Audit"
          },
          on: {
            "update:active": function($event) {
              _vm.showAudit = $event
            }
          }
        },
        [
          _c(
            "div",
            { staticClass: "audit-progress" },
            [
              _c(
                "vs-row",
                { staticClass: "item" },
                [
                  _c(
                    "vs-col",
                    {
                      attrs: {
                        "vs-lg": "8",
                        "vs-type": "flex",
                        "vs-justify": "flex-start"
                      }
                    },
                    [_c("span", [_vm._v("Update Room Status")])]
                  ),
                  _vm._v(" "),
                  _c(
                    "vs-col",
                    {
                      attrs: {
                        "vs-lg": "3",
                        "vs-type": "flex",
                        "vs-justify": "flex-end"
                      }
                    },
                    [
                      _vm.auditStep >= 1
                        ? _c("span", { staticClass: "success" }, [
                            _vm._v("Done")
                          ])
                        : _vm.auditStep < 1
                        ? _c("span", [_vm._v("In Progress...")])
                        : _c("span", [_vm._v("In Progress")])
                    ]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "vs-row",
                { staticClass: "item" },
                [
                  _c(
                    "vs-col",
                    {
                      attrs: {
                        "vs-lg": "8",
                        "vs-type": "flex",
                        "vs-justify": "flex-start"
                      }
                    },
                    [_c("span", [_vm._v("Generate Report")])]
                  ),
                  _vm._v(" "),
                  _c(
                    "vs-col",
                    {
                      attrs: {
                        "vs-lg": "3",
                        "vs-type": "flex",
                        "vs-justify": "flex-end"
                      }
                    },
                    [
                      _vm.auditStep >= 2
                        ? _c("span", { staticClass: "success" }, [
                            _vm._v("Done")
                          ])
                        : _vm.auditStep < 2
                        ? _c("span", [_vm._v("In Progress...")])
                        : _vm._e()
                    ]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "vs-row",
                { staticClass: "item" },
                [
                  _c(
                    "vs-col",
                    {
                      attrs: {
                        "vs-lg": "8",
                        "vs-type": "flex",
                        "vs-justify": "flex-start"
                      }
                    },
                    [_c("span", [_vm._v("Close All Open Shift")])]
                  ),
                  _vm._v(" "),
                  _c(
                    "vs-col",
                    {
                      attrs: {
                        "vs-lg": "3",
                        "vs-type": "flex",
                        "vs-justify": "flex-end"
                      }
                    },
                    [
                      _vm.auditStep >= 3
                        ? _c("span", { staticClass: "success" }, [
                            _vm._v("Done")
                          ])
                        : _vm.auditStep < 3
                        ? _c("span", [_vm._v("In Progress...")])
                        : _vm._e()
                    ]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "vs-row",
                { staticClass: "item" },
                [
                  _c(
                    "vs-col",
                    {
                      attrs: {
                        "vs-lg": "8",
                        "vs-type": "flex",
                        "vs-justify": "flex-start"
                      }
                    },
                    [_c("span", [_vm._v("Roll Audit Date")])]
                  ),
                  _vm._v(" "),
                  _c(
                    "vs-col",
                    {
                      attrs: {
                        "vs-lg": "3",
                        "vs-type": "flex",
                        "vs-justify": "flex-end"
                      }
                    },
                    [
                      _vm.auditStep >= 4
                        ? _c("span", { staticClass: "success" }, [
                            _vm._v("Done")
                          ])
                        : _vm.auditStep < 4
                        ? _c("span", [_vm._v("In Progress...")])
                        : _vm._e()
                    ]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "vs-row",
                {
                  staticClass: "mt-5",
                  staticStyle: { "font-weight": "bolder" },
                  attrs: { "vs-type": "flex", "vs-justify": "center" }
                },
                [
                  _vm.result
                    ? _c(
                        "vs-button",
                        { attrs: { type: "border", icon: "check" } },
                        [_vm._v(_vm._s(_vm.result))]
                      )
                    : _c("img", {
                        attrs: { src: "/images/gif/loading-drop.gif" }
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
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/night-audit/dayend-close/components/ErrorList.vue?vue&type=template&id=eb0f5f38&":
/*!*****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/night-audit/dayend-close/components/ErrorList.vue?vue&type=template&id=eb0f5f38& ***!
  \*****************************************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "night-audit" },
    [
      _c(
        "vx-card",
        {
          staticClass: "vs-con-loading__container",
          attrs: { id: "main-container" }
        },
        [
          _c("ag-grid-vue", {
            ref: "mainContainer",
            class: _vm.themeAgGrid,
            style: _vm.StyleAgGridFrame3,
            attrs: {
              gridOptions: _vm.gridOptions,
              columnDefs: _vm.columnDefs,
              defaultColDef: _vm.defColDef,
              rowSelection: _vm.rowSelection,
              rowData: _vm.rowData
            },
            on: {
              "grid-ready": _vm.onGridReady,
              cellDoubleClicked: _vm.onCellClicked
            }
          })
        ],
        1
      ),
      _vm._v(" "),
      _vm.destroyComponent
        ? _c("folio-form", {
            ref: "folioForm",
            attrs: {
              formType: _vm.folioFormType,
              titleForm: _vm.folioTitleForm,
              isDayendClosed: true
            },
            on: {
              precheck: function($event) {
                return _vm.precheck()
              }
            }
          })
        : _vm._e(),
      _vm._v(" "),
      _vm.destroyComponent
        ? _c("registration-form", {
            ref: "registrationForm",
            attrs: {
              isDayendClose: true,
              isGuestInHouse: _vm.isGuestInHouse,
              isReservation: _vm.isReservation
            },
            on: {
              precheck: function($event) {
                return _vm.precheck()
              }
            }
          })
        : _vm._e(),
      _vm._v(" "),
      _c("cancel-reservation", {
        ref: "cancelReservation",
        attrs: { isDayendClose: true },
        on: {
          precheck: function($event) {
            return _vm.precheck()
          }
        }
      }),
      _vm._v(" "),
      _c(
        "vs-popup",
        {
          staticClass: "width-80 ",
          attrs: { active: _vm.showAutoPosting, title: _vm.popupTitle },
          on: {
            "update:active": function($event) {
              _vm.showAutoPosting = $event
            }
          }
        },
        [_vm.destroyComponent2 ? _c("auto-posting") : _vm._e()],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/api/folio.js":
/*!***************************************!*\
  !*** ./resources/js/src/api/folio.js ***!
  \***************************************/
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
var uri = 'folio';

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
    key: "folioStatus",
    value: function folioStatus(id) {
      return Object(_utils_request__WEBPACK_IMPORTED_MODULE_1__["default"])({
        url: '/' + uri + '/status/' + id,
        method: 'get'
      });
    }
  }]);

  return DeskFolioResource;
}(_api_resource__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./resources/js/src/api/night-audit/dayendClose.js":
/*!*********************************************************!*\
  !*** ./resources/js/src/api/night-audit/dayendClose.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DayendCloseResource; });
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



var uri = 'nightaudit/dayend';

var DayendCloseResource =
/*#__PURE__*/
function (_Resource) {
  _inherits(DayendCloseResource, _Resource);

  function DayendCloseResource() {
    _classCallCheck(this, DayendCloseResource);

    return _possibleConstructorReturn(this, _getPrototypeOf(DayendCloseResource).call(this, uri));
  }

  _createClass(DayendCloseResource, [{
    key: "precheck",
    value: function precheck(data) {
      return Object(_utils_request__WEBPACK_IMPORTED_MODULE_1__["default"])({
        url: '/' + uri + '/precheck/critical',
        method: 'post',
        data: data
      });
    }
  }, {
    key: "post",
    value: function post(data) {
      return Object(_utils_request__WEBPACK_IMPORTED_MODULE_1__["default"])({
        url: '/' + uri + '/post',
        method: 'post',
        data: data
      });
    }
  }, {
    key: "audit",
    value: function audit(data) {
      return Object(_utils_request__WEBPACK_IMPORTED_MODULE_1__["default"])({
        url: '/' + uri + '/audit',
        method: 'post',
        data: data
      });
    }
  }, {
    key: "lastDayendClose",
    value: function lastDayendClose() {
      return Object(_utils_request__WEBPACK_IMPORTED_MODULE_1__["default"])({
        url: '/' + uri + '/lastdayend',
        method: 'get'
      });
    }
  }]);

  return DayendCloseResource;
}(_api_resource__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./resources/js/src/views/pages/night-audit/dayend-close/DayendClose.vue":
/*!*******************************************************************************!*\
  !*** ./resources/js/src/views/pages/night-audit/dayend-close/DayendClose.vue ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DayendClose_vue_vue_type_template_id_07ed6732___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DayendClose.vue?vue&type=template&id=07ed6732& */ "./resources/js/src/views/pages/night-audit/dayend-close/DayendClose.vue?vue&type=template&id=07ed6732&");
/* harmony import */ var _DayendClose_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DayendClose.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/night-audit/dayend-close/DayendClose.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _DayendClose_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DayendClose.vue?vue&type=style&index=0&lang=scss& */ "./resources/js/src/views/pages/night-audit/dayend-close/DayendClose.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _DayendClose_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DayendClose_vue_vue_type_template_id_07ed6732___WEBPACK_IMPORTED_MODULE_0__["render"],
  _DayendClose_vue_vue_type_template_id_07ed6732___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/night-audit/dayend-close/DayendClose.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/night-audit/dayend-close/DayendClose.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/night-audit/dayend-close/DayendClose.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DayendClose_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./DayendClose.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/night-audit/dayend-close/DayendClose.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DayendClose_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/night-audit/dayend-close/DayendClose.vue?vue&type=style&index=0&lang=scss&":
/*!*****************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/night-audit/dayend-close/DayendClose.vue?vue&type=style&index=0&lang=scss& ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_DayendClose_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/style-loader!../../../../../../../node_modules/css-loader!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./DayendClose.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/night-audit/dayend-close/DayendClose.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_DayendClose_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_DayendClose_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_DayendClose_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_DayendClose_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_DayendClose_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/src/views/pages/night-audit/dayend-close/DayendClose.vue?vue&type=template&id=07ed6732&":
/*!**************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/night-audit/dayend-close/DayendClose.vue?vue&type=template&id=07ed6732& ***!
  \**************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DayendClose_vue_vue_type_template_id_07ed6732___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./DayendClose.vue?vue&type=template&id=07ed6732& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/night-audit/dayend-close/DayendClose.vue?vue&type=template&id=07ed6732&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DayendClose_vue_vue_type_template_id_07ed6732___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DayendClose_vue_vue_type_template_id_07ed6732___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/pages/night-audit/dayend-close/components/ErrorList.vue":
/*!****************************************************************************************!*\
  !*** ./resources/js/src/views/pages/night-audit/dayend-close/components/ErrorList.vue ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ErrorList_vue_vue_type_template_id_eb0f5f38___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ErrorList.vue?vue&type=template&id=eb0f5f38& */ "./resources/js/src/views/pages/night-audit/dayend-close/components/ErrorList.vue?vue&type=template&id=eb0f5f38&");
/* harmony import */ var _ErrorList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ErrorList.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/night-audit/dayend-close/components/ErrorList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _ErrorList_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ErrorList.vue?vue&type=style&index=0&lang=css& */ "./resources/js/src/views/pages/night-audit/dayend-close/components/ErrorList.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ErrorList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ErrorList_vue_vue_type_template_id_eb0f5f38___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ErrorList_vue_vue_type_template_id_eb0f5f38___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/night-audit/dayend-close/components/ErrorList.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/night-audit/dayend-close/components/ErrorList.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/night-audit/dayend-close/components/ErrorList.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ErrorList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ErrorList.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/night-audit/dayend-close/components/ErrorList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ErrorList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/night-audit/dayend-close/components/ErrorList.vue?vue&type=style&index=0&lang=css&":
/*!*************************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/night-audit/dayend-close/components/ErrorList.vue?vue&type=style&index=0&lang=css& ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ErrorList_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/style-loader!../../../../../../../../node_modules/css-loader??ref--7-1!../../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ErrorList.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/night-audit/dayend-close/components/ErrorList.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ErrorList_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ErrorList_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ErrorList_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ErrorList_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ErrorList_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/src/views/pages/night-audit/dayend-close/components/ErrorList.vue?vue&type=template&id=eb0f5f38&":
/*!***********************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/night-audit/dayend-close/components/ErrorList.vue?vue&type=template&id=eb0f5f38& ***!
  \***********************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ErrorList_vue_vue_type_template_id_eb0f5f38___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ErrorList.vue?vue&type=template&id=eb0f5f38& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/night-audit/dayend-close/components/ErrorList.vue?vue&type=template&id=eb0f5f38&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ErrorList_vue_vue_type_template_id_eb0f5f38___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ErrorList_vue_vue_type_template_id_eb0f5f38___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);