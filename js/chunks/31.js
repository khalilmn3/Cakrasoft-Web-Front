(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[31],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/folio-history/FolioHistory.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/folio-history/FolioHistory.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_request_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/utils/request.js */ "./resources/js/src/utils/request.js");
/* harmony import */ var ag_grid_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ag-grid-vue */ "./node_modules/ag-grid-vue/main.js");
/* harmony import */ var ag_grid_vue__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ag_grid_vue__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_action_grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/action_grid */ "./resources/js/src/views/pages/folio-history/components/action_grid.js");
/* harmony import */ var _components_FilterHeader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/FilterHeader */ "./resources/js/src/views/pages/folio-history/components/FilterHeader.vue");
/* harmony import */ var _components_NavigationHeader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/NavigationHeader */ "./resources/js/src/views/pages/folio-history/components/NavigationHeader.vue");
/* harmony import */ var _views_pages_components_Tracking_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/views/pages/components/Tracking.vue */ "./resources/js/src/views/pages/components/Tracking.vue");
/* harmony import */ var _views_pages_components_Credential__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/views/pages/components/Credential */ "./resources/js/src/views/pages/components/Credential.vue");
/* harmony import */ var _utils_dialog_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/utils/dialog.js */ "./resources/js/src/utils/dialog.js");
/* harmony import */ var _utils_alert_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/utils/alert.js */ "./resources/js/src/utils/alert.js");
/* harmony import */ var _utils_formConfig__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/utils/formConfig */ "./resources/js/src/utils/formConfig.js");
/* harmony import */ var _utils_general_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/utils/general.js */ "./resources/js/src/utils/general.js");
/* harmony import */ var _views_pages_components_Number__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @/views/pages/components/Number */ "./resources/js/src/views/pages/components/Number.vue");
/* harmony import */ var _views_pages_components_lock_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @/views/pages/components/lock.js */ "./resources/js/src/views/pages/components/lock.js");
/* harmony import */ var _components_source_status_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/source-status.js */ "./resources/js/src/views/pages/folio-history/components/source-status.js");
/* harmony import */ var _utils_format_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @/utils/format.js */ "./resources/js/src/utils/format.js");
/* harmony import */ var _api_guestinhouse_guestInHouse__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @/api/guestinhouse/guestInHouse */ "./resources/js/src/api/guestinhouse/guestInHouse.js");
/* harmony import */ var _api_folioHistory__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @/api/folioHistory */ "./resources/js/src/api/folioHistory.js");
/* harmony import */ var _api_guestinhouse_scheduledRate__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @/api/guestinhouse/scheduledRate */ "./resources/js/src/api/guestinhouse/scheduledRate.js");
/* harmony import */ var _api_guestinhouse_extraCharge__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @/api/guestinhouse/extraCharge */ "./resources/js/src/api/guestinhouse/extraCharge.js");


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










 // <!------------------additional element---------------------->




 // API





var guestInHouseResource = new _api_guestinhouse_guestInHouse__WEBPACK_IMPORTED_MODULE_16__["default"]();
var folioHistoryResource = new _api_folioHistory__WEBPACK_IMPORTED_MODULE_17__["default"]();
var scheduledRateResource = new _api_guestinhouse_scheduledRate__WEBPACK_IMPORTED_MODULE_18__["default"]();
var extraChargeResource = new _api_guestinhouse_extraCharge__WEBPACK_IMPORTED_MODULE_19__["default"](); // <!------------------end additional element---------------------->

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'FolioHistory',
  props: ['titleForm', 'routeApi', 'mainTableName'],
  components: {
    'ag-grid-vue': ag_grid_vue__WEBPACK_IMPORTED_MODULE_2__["AgGridVue"],
    FilterHeader: _components_FilterHeader__WEBPACK_IMPORTED_MODULE_4__["default"],
    NavigationHeader: _components_NavigationHeader__WEBPACK_IMPORTED_MODULE_5__["default"],
    Credential: _views_pages_components_Credential__WEBPACK_IMPORTED_MODULE_7__["default"]
  },
  data: function data() {
    return {
      // Filter Data on Page Size
      vModelDefaultSearchData: '0',
      searchFilterData: [{
        text: this.$t('reservation.folioNumber'),
        value: '0'
      }, {
        text: this.$t('reservation.reservationNumber'),
        value: '1'
      }, {
        text: this.$t('reservation.room'),
        value: '2'
      }, {
        text: this.$t('reservation.roomType'),
        value: '3'
      }, {
        text: this.$t('reservation.fullname'),
        value: '5'
      }, {
        text: this.$t('reservation.reservationBy'),
        value: '4'
      }, {
        text: this.$t('reservation.group'),
        value: '6'
      }, {
        text: this.$t('reservation.roomRate'),
        value: '7'
      }, {
        text: this.$t('reservation.address'),
        value: '10'
      }, {
        text: this.$t('reservation.phone'),
        value: '11'
      }, {
        text: this.$t('reservation.company'),
        value: '8'
      }, {
        text: this.$t('reservation.guestType'),
        value: '13'
      }, {
        text: this.$t('reservation.status'),
        value: '12'
      }, {
        text: this.$t('reservation.insertBy'),
        value: '14'
      }, {
        text: this.$t('reservation.checkOutBy'),
        value: '15'
      }, {
        text: this.$t('reservation.cancelBy'),
        value: '16'
      }, {
        text: this.$t('table.lastUpdate'),
        value: '17'
      }],
      //query data search
      limitPageSize: 0,
      search: {
        searchBy: '',
        keyword: '',
        limit: 0,
        filter: []
      },
      sidebarConfig: _utils_formConfig__WEBPACK_IMPORTED_MODULE_10__["sidebarConfig"],
      //Ag-Grid
      columnDefs: null,
      rowData: null,
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
      pinnedBottomRowData: null,
      //Parameter From Child
      idData: '',
      //Mode Edit Or Insert(assign insert from parent, update from child)
      modeDataValue: 0,
      modePopUp: 0,
      modeDataValueTracking: 0,
      modeChildValue: '',
      modeScheduledRate: 0,
      modeExtraCharge: 0,
      //data error handling from laravel validation//
      dbErrors: {},
      //Pop Up
      modalMain: false,
      modalChild: false,
      modalCancelReservation: false,
      //------------------need setting manual-----------------//
      //for vModel Data
      vModel: {
        full_name: ''
      },
      //package
      stayInformations: {},
      folioNumber: '',
      city: [],
      state: [],
      readyRoom: false,
      weekday_rate_discount: 0,
      weekend_rate_discount: 0,
      guestProfileOptions: {
        placeholder: this.$t('reservation.fullname') + ' ' + this.$t('table.required')
      },
      sidebarOption: false,
      //------------------additional-------------------------//
      //Data Lookup//
      dataLookup: {},
      dlExtraCharge: [],
      month: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'],
      years: ['19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30'],
      //Data table//
      scheduledRate: [],
      extraCharges: [],
      //validation scope//
      scope1: 'stayInformation',
      showTimeRangePanel: false,
      activeTab: 1,
      resetOnChange: false,
      //title popup//
      title: '',
      //------CREDENTIAL-------//
      activeCredentialPrompt: false,
      isCredential: false,
      specialAccessType: null,
      credentialTitle: '',
      credential: {
        user: '',
        pass: ''
      },
      paramsData: '',
      idLog: '' //------------------end need setting manual-----------------//

    };
  },
  beforeMount: function beforeMount() {
    this.gridOptions = {
      rowHeight: this.rowHeightReservation
    }; //------------------need setting manual for column table-----------------//
    // use this.$t("value") for transaltion localization------//
    // see value in @/lang/en.js //

    this.columnDefs = [{
      headerName: '',
      field: 'number',
      resizable: false,
      filter: false,
      cellRenderer: 'actionGrid',
      colId: 'params',
      width: 60
    }, {
      headerName: 'Folio Type',
      field: 'folio_type',
      width: 100
    }, {
      headerName: 'Full Name',
      field: 'FullName',
      width: 230
    }, {
      headerName: 'Folio #',
      field: 'folio_number',
      width: 90
    }, {
      headerName: 'Resv #',
      field: 'reservation_number',
      width: 90
    }, {
      headerName: 'Room',
      field: 'room_number',
      width: 75
    }, {
      headerName: 'Arrival',
      field: 'date_arrival',
      width: 100,
      valueFormatter: _utils_format_js__WEBPACK_IMPORTED_MODULE_15__["formatDate"]
    }, {
      headerName: 'ETA',
      field: 'time_arrival',
      width: 70
    }, {
      headerName: 'Departure',
      field: 'date_departure',
      width: 100,
      valueFormatter: _utils_format_js__WEBPACK_IMPORTED_MODULE_15__["formatDate"]
    }, {
      headerName: 'ETD',
      field: 'time_departure',
      width: 70
    }, {
      headerName: 'Room Rate',
      field: 'room_rate',
      width: 180
    }, {
      headerName: 'Weekday Rate',
      field: 'weekday_rate',
      width: 130,
      cellStyle: {
        textAlign: 'right'
      },
      valueFormatter: _utils_format_js__WEBPACK_IMPORTED_MODULE_15__["formatNumber"]
    }, {
      headerName: 'Weekend Rate',
      field: 'weekend_rate',
      width: 130,
      cellStyle: {
        textAlign: 'right'
      },
      valueFormatter: _utils_format_js__WEBPACK_IMPORTED_MODULE_15__["formatNumber"]
    }, {
      headerName: 'Balance',
      field: 'balance',
      width: 110,
      cellStyle: {
        textAlign: 'right'
      },
      valueFormatter: _utils_format_js__WEBPACK_IMPORTED_MODULE_15__["formatNumber"]
    }, {
      headerName: 'Company',
      field: 'company',
      width: 110
    }, {
      headerName: 'Group',
      field: 'guest_group',
      width: 110
    }, {
      headerName: 'Adult',
      field: 'adult',
      width: 70
    }, {
      headerName: 'Child',
      field: 'child',
      width: 70
    }, {
      headerName: 'Bill Instruction',
      field: 'bill_instruction',
      width: 200
    }, {
      headerName: 'Note',
      field: 'notes',
      width: 200
    }, {
      headerName: 'HK Note',
      field: 'hk_note',
      width: 200
    }, {
      headerName: 'Voucher Number TA',
      field: 'voucher_number_ta',
      width: 120
    }, {
      headerName: 'Insert By',
      field: 'insert_by',
      width: 110
    }, {
      headerName: 'Check Out By',
      field: 'check_out_by',
      width: 110
    }, {
      headerName: 'Last Update',
      field: 'user_id',
      width: 110
    }]; //------------------end need setting manual for column table-----------------//

    this.context = {
      componentParent: this
    };
    this.frameworkComponents = {
      actionGrid: _components_action_grid__WEBPACK_IMPORTED_MODULE_3__["default"],
      iconLockRenderer: _views_pages_components_lock_js__WEBPACK_IMPORTED_MODULE_13__["default"],
      iconStatusRenderer: _components_source_status_js__WEBPACK_IMPORTED_MODULE_14__["default"]
    };
    this.rowGroupPanelShow = 'always';
    this.statusBar = {
      statusPanels: [{
        statusPanel: 'agTotalAndFilteredRowCountComponent',
        align: 'left'
      }, {
        statusPanel: 'agTotalRowCountComponent',
        align: 'center'
      }, {
        statusPanel: 'agFilteredRowCountComponent'
      }, {
        statusPanel: 'agSelectedRowCountComponent'
      }, {
        statusPanel: 'agAggregationComponent'
      }]
    };
    this.sideBar = {
      toolPanels: [{
        id: 'columns',
        labelDefault: 'Columns',
        labelKey: 'columns',
        iconKey: 'columns',
        toolPanel: 'agColumnsToolPanel'
      }, {
        id: 'filters',
        labelDefault: 'Filters',
        labelKey: 'filters',
        iconKey: 'filter',
        toolPanel: 'agFiltersToolPanel'
      }]
    };
    this.paginationPageSize = this.limitDefaultPageSize;
    this.rowSelection = 'single';
    this.rowModelType = 'serverSide';
    this.limitPageSize = this.limitDefaultPageSize;
  },
  methods: {
    onGridReady: function onGridReady() {},
    onPageSizeChanged: function onPageSizeChanged(newPageSize) {
      this.gridApi.paginationSetPageSize(newPageSize);
    },
    getContextMenu: function getContextMenu(params) {
      var _this = this;

      var node = params.node;

      if (node) {
        this.paramsData = node.data;
        this.folioNumber = this.paramsData.folio_number;
      }

      var result = [{
        name: this.$t('folioHistory.contexMenu.transaction'),
        disabled: !node,
        icon: Object(_utils_general_js__WEBPACK_IMPORTED_MODULE_11__["generateIconContextMenuAgGrid"])('transaction_icon24'),
        action: function action() {
          return _this.handleTransaction();
        }
      }, 'separator', {
        name: this.$t('folioHistory.contexMenu.cancelCheckOut'),
        disabled: !node,
        icon: Object(_utils_general_js__WEBPACK_IMPORTED_MODULE_11__["generateIconContextMenuAgGrid"])('cancel_icon24'),
        action: function action() {
          return _this.handleCancelCheckOut();
        }
      }, {
        name: this.$t('folioHistory.contexMenu.printFolio'),
        disabled: !node,
        icon: Object(_utils_general_js__WEBPACK_IMPORTED_MODULE_11__["generateIconContextMenuAgGrid"])('print_icon24'),
        action: function action() {
          return _this.handlePrintFolio();
        }
      }];
      return result;
    },
    handleRowRightClicked: function handleRowRightClicked() {
      var vm = this;
      vm.gridApi.forEachNode(function (node) {
        if (node.data.folio_number == vm.paramsData.folio_number) {
          node.setSelected(true, true);
        }
      });
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
                this.handleTransaction();

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
    //------------------need setting manual for crud-----------------//
    //------------------ START Folio History CRUD----------------//
    getFolioHistoryList: function () {
      var _getFolioHistoryList = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(search) {
        var _ref, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                this.search = search;
                _context2.prev = 1;
                _context2.next = 4;
                return folioHistoryResource.list(search);

              case 4:
                _ref = _context2.sent;
                data = _ref.data;
                this.rowData = data.data;
                this.pinnedBottomRowData = data.total;
                this.$vs.loading.close('#layout--main>.con-vs-loading');
                _context2.next = 15;
                break;

              case 11:
                _context2.prev = 11;
                _context2.t0 = _context2["catch"](1);
                this.$vs.loading.close('#layout--main>.con-vs-loading');
                _utils_alert_js__WEBPACK_IMPORTED_MODULE_9__["default"].errorFetchDataAlert();

              case 15:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[1, 11]]);
      }));

      function getFolioHistoryList(_x2) {
        return _getFolioHistoryList.apply(this, arguments);
      }

      return getFolioHistoryList;
    }(),
    trackingData: function () {
      var _trackingData = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(id) {
        var _this2 = this;

        var _ref2, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                _context3.next = 3;
                return folioHistoryResource.log(id.id_log);

              case 3:
                _ref2 = _context3.sent;
                data = _ref2.data;
                this.dataTracking = data.modelGrid;
                setTimeout(function () {
                  _this2.$vs.loading.close('#layout--main>.con-vs-loading');
                }, 100);
                _context3.next = 13;
                break;

              case 9:
                _context3.prev = 9;
                _context3.t0 = _context3["catch"](0);
                this.$vs.loading.close('#layout--main>.con-vs-loading');
                _utils_alert_js__WEBPACK_IMPORTED_MODULE_9__["default"].errorFetchDataAlert();

              case 13:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[0, 9]]);
      }));

      function trackingData(_x3) {
        return _trackingData.apply(this, arguments);
      }

      return trackingData;
    }(),
    refreshData: function refreshData(search) {
      this.search = search;
      this.$vs.loading({
        container: '#layout--main',
        scale: this.scaleLoadingMainLayout
      });
      this.getFolioHistoryList(search);
    },
    //------------------ END Folio History CRUD------------------//
    //------------------START SIDEBARR OPTIONS-------------------//
    handleSidebarOption: function handleSidebarOption(data) {
      this.folioNumber = data.folio_number;
      this.paramsData = data;
      this.sidebarOption = true;
    },
    //------------------END SIDEBARR OPTIONS---------------------//
    //------------------START OTHER OPTION-----------------------//
    handleTransaction: function () {
      var _handleTransaction = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4() {
        var _ref3, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                this.$vs.loading({
                  container: '#layout--main',
                  scale: this.scaleLoadingMainLayout
                });
                _context4.next = 3;
                return guestInHouseResource.get(this.paramsData.folio_number);

              case 3:
                _ref3 = _context4.sent;
                data = _ref3.data;
                this.$router.push({
                  name: 'transaction',
                  params: {
                    form: this.mFormType.folioHistory,
                    stayInformations: data.list
                  }
                });

              case 6:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function handleTransaction() {
        return _handleTransaction.apply(this, arguments);
      }

      return handleTransaction;
    }(),
    handlePrintFolio: function handlePrintFolio() {
      this.sidebarOption = false;
      var newTabReport = this.$router.resolve({
        path: '/report/preview?reportId=' + this.mReportId.folio + '&folioNumber=' + this.paramsData.folio_number + '&template=' + this.mStimulsoftReportFileDirectory.folio
      });
      window.open(newTabReport.href, '_blank');
    },
    handleCancelCheckOut: function () {
      var _handleCancelCheckOut = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                if (this.paramsData.folioType == this.mFolioType.guestFolio) {
                  this.showCredential(true, this.accessSpecialOrder.cancelCheckOut);
                } else {
                  _utils_dialog_js__WEBPACK_IMPORTED_MODULE_8__["default"].information(this.$t('message.statusCancelCheckOut.2'));
                }

              case 1:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function handleCancelCheckOut() {
        return _handleCancelCheckOut.apply(this, arguments);
      }

      return handleCancelCheckOut;
    }(),
    cancelCheckOut: function () {
      var _cancelCheckOut = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee6() {
        var params, _ref4, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                this.$vs.loading({
                  container: '#layout--main',
                  scale: this.scaleLoadingMainLayout
                });
                params = {
                  folio_number: this.paramsData.folio_number,
                  user_id: this.userInfo.code,
                  reason: this.credential.reason,
                  user_by: this.credential.user
                };
                _context6.prev = 2;
                _context6.next = 5;
                return folioHistoryResource.cancelCheckOut(params);

              case 5:
                _ref4 = _context6.sent;
                data = _ref4.data;
                this.$vs.loading.close('#layout--main>.con-vs-loading');

                if (data == 0) {
                  _utils_alert_js__WEBPACK_IMPORTED_MODULE_9__["default"].acceptAlertSucces();
                } else if (data > 0) {
                  _utils_dialog_js__WEBPACK_IMPORTED_MODULE_8__["default"].information(this.$t('message.statusCancelCheckOut.' + data));
                }

                this.sidebarOption = false;
                this.refreshData(this.search);
                return _context6.abrupt("return", data);

              case 14:
                _context6.prev = 14;
                _context6.t0 = _context6["catch"](2);
                this.$vs.loading.close('#layout--main>.con-vs-loading');
                _utils_alert_js__WEBPACK_IMPORTED_MODULE_9__["default"].errorSaveDataAlert();

              case 18:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this, [[2, 14]]);
      }));

      function cancelCheckOut() {
        return _cancelCheckOut.apply(this, arguments);
      }

      return cancelCheckOut;
    }(),
    //------------------END OTHER OPTION-------------------------//
    //------------------end need setting manual for crud-------------//
    //--------------------CREDENTIAL-----------------------------//
    showCredential: function showCredential(isCredential, type) {
      this.credential = {};
      this.activeCredentialPrompt = true;
      this.specialAccessType = type;
      this.isCredential = isCredential;
      this.credentialTitle = 'Cancel Check Out';
    },
    acceptReason: function acceptReason() {
      if (this.specialAccessType == this.accessSpecialOrder.cancelCheckOut) {
        this.cancelCheckOut(false);
      }
    } //--------------------CREDENTIAL-----------------------------//

  },
  mounted: function mounted() {
    this.gridApi = this.gridOptions.api;
    this.ColumnApi = this.gridOptions.columnApi; //
  },
  watch: {
    sidebarOption: function sidebarOption() {
      if (this.sidebarOption == false) {
        document.getElementById('main-container').click();
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/folio-history/components/FilterHeader.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/folio-history/components/FilterHeader.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue2_datepicker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue2-datepicker */ "./node_modules/vue2-datepicker/index.esm.js");
/* harmony import */ var _sass_vuexy_components_datepicker_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @sass/vuexy/components/datepicker.scss */ "./resources/sass/vuexy/components/datepicker.scss");
/* harmony import */ var _sass_vuexy_components_datepicker_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_sass_vuexy_components_datepicker_scss__WEBPACK_IMPORTED_MODULE_2__);


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


/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    searchOption: Array,
    searchDefault: String,
    limitPageSize: Number
  },
  components: {
    DatePicker: vue2_datepicker__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      all: true,
      vModelSelectLimitData: 0,
      vModelSearchData: '',
      vModelTextSearchData: '',
      vDate: '',
      vDateTemp: '',
      vFolioType: [],
      vCancelCheckIn: true
    };
  },
  methods: {
    onRefreshData: function onRefreshData(limit) {
      var _this = this;

      var search = {
        searchBy: this.vModelSearchData,
        keyword: this.vModelTextSearchData,
        type: this.vFolioType,
        cancelCheckIn: this.vCancelCheckIn,
        limit: limit >= 0 ? limit : this.limitPageSize,
        date: this.vDate
      };
      this.vModelSelectLimitData = this.vModelSelectLimitData == '' ? 0 : this.vModelSelectLimitData;

      if (this.vDate) {
        setTimeout(function () {
          _this.$emit('search', search);
        }, 200);
        this.vDateTemp = this.vDate;
      } else {
        this.vDate = this.vDateTemp;
      }
    },
    selectAll: function selectAll() {
      this.onRefreshData();
    },
    onEnter: function onEnter() {
      this.onRefreshData();
    }
  },
  computed: {
    auditDate: function auditDate() {
      return this.$store.state.auditLog.auditDate;
    }
  },
  created: function () {
    var _created = _asyncToGenerator(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return this.$store.dispatch('getAuditDate');

            case 2:
              this.vModelSearchData = this.searchDefault;
              this.vModelSelectLimitData = this.limitDefaultPageSize;
              _context.next = 6;
              return this.auditDate;

            case 6:
              this.vDate = _context.sent;
              this.vFolioType = [this.mFolioType.deskFolio, this.mFolioType.masterFolio, this.mFolioType.guestFolio];
              this.onRefreshData();

            case 9:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function created() {
      return _created.apply(this, arguments);
    }

    return created;
  }(),
  beforeMount: function beforeMount() {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/folio-history/components/NavigationHeader.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/folio-history/components/NavigationHeader.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      vModelSelectLimitData: 0,
      vModelSearchData: '',
      vModelTextSearchData: ''
    };
  },
  methods: {
    onRefreshData: function onRefreshData() {
      this.vModelSelectLimitData = this.vModelSelectLimitData == '' ? 0 : this.vModelSelectLimitData;
      this.$emit('refreshData', this.vModelSelectLimitData);
    },
    onEnter: function onEnter() {
      this.onRefreshData();
    },
    showModal: function showModal() {
      this.$emit('showModal', '', this.modeData.insert);
    },
    showSidebar: function showSidebar() {
      this.$emit('sidebar', this.modeData.option);
    }
  },
  mounted: function mounted() {
    //Assign limit data with variable Global
    this.vModelSelectLimitData = this.limitDefaultPageSize;
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/folio-history/FolioHistory.vue?vue&type=style&index=0&id=57681ebf&scoped=true&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/folio-history/FolioHistory.vue?vue&type=style&index=0&id=57681ebf&scoped=true&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".body-sidebar[data-v-57681ebf]{\n  margin-left: 10px\n}\n.footer-sidebar[data-v-57681ebf]{\n  margin-left: 10px\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/folio-history/FolioHistory.vue?vue&type=style&index=0&id=57681ebf&scoped=true&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/folio-history/FolioHistory.vue?vue&type=style&index=0&id=57681ebf&scoped=true&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader??ref--7-1!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./FolioHistory.vue?vue&type=style&index=0&id=57681ebf&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/folio-history/FolioHistory.vue?vue&type=style&index=0&id=57681ebf&scoped=true&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/folio-history/FolioHistory.vue?vue&type=template&id=57681ebf&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/folio-history/FolioHistory.vue?vue&type=template&id=57681ebf&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************/
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
      _c("navigation-header", {
        on: {
          refreshData: function(val) {
            _vm.limitPageSize = parseFloat(val)
            _vm.$refs.filterHeader.onRefreshData(val)
          }
        }
      }),
      _vm._v(" "),
      _c("filter-header", {
        ref: "filterHeader",
        attrs: {
          limitPageSize: _vm.limitPageSize,
          searchOption: _vm.searchFilterData,
          searchDefault: _vm.vModelDefaultSearchData
        },
        on: { search: _vm.refreshData }
      }),
      _vm._v(" "),
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
            style: _vm.StyleAgGridFrame,
            attrs: {
              pagination: "true",
              paginationPageSize: _vm.paginationPageSize,
              suppressDragLeaveHidesColumns: true,
              suppressMakeColumnVisibleAfterUnGroup: true,
              rowGroupPanelShow: _vm.rowGroupPanelShow,
              enableRangeSelection: true,
              statusBar: _vm.statusBar,
              gridOptions: _vm.gridOptions,
              context: _vm.context,
              columnDefs: _vm.columnDefs,
              frameworkComponents: _vm.frameworkComponents,
              enableCellChangeFlash: true,
              rowSelection: _vm.rowSelection,
              rowData: _vm.rowData,
              defaultColDef: _vm.defColDef,
              getContextMenuItems: _vm.getContextMenu,
              pinnedBottomRowData: _vm.pinnedBottomRowData
            },
            on: {
              "grid-ready": _vm.onGridReady,
              rowDoubleClicked: _vm.handleRowDobleClicked,
              cellContextMenu: _vm.handleRowRightClicked
            }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "vs-sidebar",
        {
          ref: "sidebar",
          staticClass: "sidebarx",
          attrs: {
            "hidden-background": "",
            "position-right": "",
            parent: "#main-container",
            "default-index": "1",
            color: "primary",
            spacer: ""
          },
          model: {
            value: _vm.sidebarOption,
            callback: function($$v) {
              _vm.sidebarOption = $$v
            },
            expression: "sidebarOption"
          }
        },
        [
          _c(
            "div",
            {
              staticClass: "header-sidebar",
              attrs: { slot: "header" },
              slot: "header"
            },
            [
              _c("h4", [
                _vm._v(
                  "\n                " +
                    _vm._s(_vm.titleForm) +
                    " Option\n                "
                )
              ])
            ]
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "body-sidebar" },
            [
              _c(
                "vs-sidebar-item",
                { attrs: { index: "1" }, on: { click: _vm.handleTransaction } },
                [
                  _c("img", {
                    class:
                      _vm.sidebarConfig.iconMarginRight +
                      " " +
                      _vm.sidebarConfig.iconMarginLeft,
                    attrs: {
                      border: _vm.sidebarConfig.iconBorder,
                      width: _vm.sidebarConfig.iconWidth,
                      height: _vm.sidebarConfig.iconHeight,
                      src: "/images/icons/transaction_icon24.png"
                    }
                  }),
                  _vm._v("\n                    TRANSACTION\n                ")
                ]
              ),
              _vm._v(" "),
              _c("vs-divider", { attrs: { position: "center" } }),
              _vm._v(" "),
              _c(
                "vs-sidebar-item",
                {
                  attrs: { index: "2" },
                  on: {
                    click: function($event) {
                      return _vm.handleCancelCheckOut()
                    }
                  }
                },
                [
                  _c("img", {
                    class:
                      _vm.sidebarConfig.iconMarginRight +
                      " " +
                      _vm.sidebarConfig.iconMarginLeft,
                    attrs: {
                      border: _vm.sidebarConfig.iconBorder,
                      width: _vm.sidebarConfig.iconWidth,
                      height: _vm.sidebarConfig.iconHeight,
                      src: "/images/icons/check_out_icon24.png"
                    }
                  }),
                  _vm._v(
                    "\n                   CANCEL CHECK-OUT\n                "
                  )
                ]
              ),
              _vm._v(" "),
              _c(
                "vs-sidebar-item",
                {
                  attrs: { index: "3" },
                  on: {
                    click: function($event) {
                      return _vm.handlePrintFolio()
                    }
                  }
                },
                [
                  _c("img", {
                    class:
                      _vm.sidebarConfig.iconMarginRight +
                      " " +
                      _vm.sidebarConfig.iconMarginLeft,
                    attrs: {
                      border: _vm.sidebarConfig.iconBorder,
                      width: _vm.sidebarConfig.iconWidth,
                      height: _vm.sidebarConfig.iconHeight,
                      src: "/images/icons/print_icon24.png"
                    }
                  }),
                  _vm._v("\n                   PRINT FOLIO\n                ")
                ]
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
          acceptReason: _vm.acceptReason,
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/folio-history/components/FilterHeader.vue?vue&type=template&id=60d91a5a&":
/*!*********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/folio-history/components/FilterHeader.vue?vue&type=template&id=60d91a5a& ***!
  \*********************************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "guestinhouse-search-bar mb-3" },
    [
      _c(
        "vx-card",
        { staticClass: "box" },
        [
          _c(
            "vs-row",
            { staticClass: "box-body" },
            [
              _c(
                "vs-col",
                { staticClass: "lg:w-1/2 search-part" },
                [
                  _c(
                    "vs-row",
                    {
                      attrs: {
                        "vs-align": "start",
                        "vs-type": "flex",
                        "vs-justify": "flext-start",
                        "vs-w": "12"
                      }
                    },
                    [
                      _c(
                        "vs-col",
                        {
                          attrs: { "vs-lg": "4", "vs-md": "4", "vs-xs": "12" }
                        },
                        [
                          _c("v-select", {
                            attrs: {
                              clearable: false,
                              reduce: function(searchOption) {
                                return searchOption.value
                              },
                              label: "text",
                              options: _vm.searchOption
                            },
                            model: {
                              value: _vm.vModelSearchData,
                              callback: function($$v) {
                                _vm.vModelSearchData = $$v
                              },
                              expression: "vModelSearchData"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "vs-col",
                        {
                          attrs: { "vs-lg": "5", "vs-md": "5", "vs-xs": "12" }
                        },
                        [
                          _c(
                            "vx-input-group",
                            [
                              _c("vs-input", {
                                attrs: {
                                  placeholder: "Search",
                                  id: "filter-text-box"
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
                                    return _vm.onEnter()
                                  }
                                },
                                model: {
                                  value: _vm.vModelTextSearchData,
                                  callback: function($$v) {
                                    _vm.vModelTextSearchData = $$v
                                  },
                                  expression: "vModelTextSearchData"
                                }
                              }),
                              _vm._v(" "),
                              _c("template", { slot: "append" }, [
                                _c(
                                  "div",
                                  { staticClass: "append-text btn-addon" },
                                  [
                                    _c("vs-button", {
                                      attrs: {
                                        icon: "search",
                                        color: "primary"
                                      },
                                      on: { click: _vm.onRefreshData }
                                    })
                                  ],
                                  1
                                )
                              ])
                            ],
                            2
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "vs-col",
                        {
                          attrs: { "vs-lg": "3", "vs-md": "3", "vs-xs": "12" }
                        },
                        [
                          _c("date-picker", {
                            attrs: {
                              clearable: false,
                              lang: _vm.$t("lang"),
                              "value-type": "YYYY-MM-DD",
                              placeholder: "DD/MM/YYYY",
                              format: "DD/MM/YYYY",
                              label: "name"
                            },
                            on: {
                              input: function($event) {
                                return _vm.onRefreshData()
                              }
                            },
                            model: {
                              value: _vm.vDate,
                              callback: function($$v) {
                                _vm.vDate = $$v
                              },
                              expression: "vDate"
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
              _c("vs-col", { staticClass: "lg:w-1/2 filter-part" }, [
                _c("div", { staticClass: "room-filter" }, [
                  _c(
                    "div",
                    { staticClass: "reservation-status-filter" },
                    [
                      _c(
                        "vs-row",
                        {
                          attrs: {
                            "vs-align": "flex-start",
                            "vs-type": "flex",
                            "vs-justify": "flext-start"
                          }
                        },
                        [
                          _c(
                            "vs-col",
                            {
                              attrs: {
                                "vs-lg": "3",
                                "vs-md": "3",
                                "vs-xs": "6"
                              }
                            },
                            [
                              _c(
                                "vs-chip",
                                { attrs: { color: "#31FD4B" } },
                                [
                                  _c(
                                    "vs-checkbox",
                                    {
                                      attrs: {
                                        "vs-value": _vm.mFolioType.deskFolio
                                      },
                                      on: {
                                        change: function($event) {
                                          return _vm.onRefreshData()
                                        }
                                      },
                                      model: {
                                        value: _vm.vFolioType,
                                        callback: function($$v) {
                                          _vm.vFolioType = $$v
                                        },
                                        expression: "vFolioType"
                                      }
                                    },
                                    [_vm._v("Desk Folio")]
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
                            {
                              attrs: {
                                "vs-lg": "3",
                                "vs-md": "3",
                                "vs-xs": "6"
                              }
                            },
                            [
                              _c(
                                "vs-chip",
                                { attrs: { color: "#2494C6" } },
                                [
                                  _c(
                                    "vs-checkbox",
                                    {
                                      attrs: {
                                        "vs-value": _vm.mFolioType.masterFolio
                                      },
                                      on: {
                                        change: function($event) {
                                          return _vm.onRefreshData()
                                        }
                                      },
                                      model: {
                                        value: _vm.vFolioType,
                                        callback: function($$v) {
                                          _vm.vFolioType = $$v
                                        },
                                        expression: "vFolioType"
                                      }
                                    },
                                    [_vm._v("Master Folio")]
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
                            {
                              attrs: {
                                "vs-lg": "3",
                                "vs-md": "3",
                                "vs-xs": "6"
                              }
                            },
                            [
                              _c(
                                "vs-chip",
                                { attrs: { color: "#C62583" } },
                                [
                                  _c(
                                    "vs-checkbox",
                                    {
                                      attrs: {
                                        "vs-value": _vm.mFolioType.guestFolio
                                      },
                                      on: {
                                        change: function($event) {
                                          return _vm.onRefreshData()
                                        }
                                      },
                                      model: {
                                        value: _vm.vFolioType,
                                        callback: function($$v) {
                                          _vm.vFolioType = $$v
                                        },
                                        expression: "vFolioType"
                                      }
                                    },
                                    [_vm._v("Guest Folio")]
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
                            {
                              attrs: {
                                "vs-lg": "3",
                                "vs-md": "3",
                                "vs-xs": "6"
                              }
                            },
                            [
                              _c(
                                "vs-chip",
                                { attrs: { color: "#FF002A" } },
                                [
                                  _c(
                                    "vs-checkbox",
                                    {
                                      on: {
                                        change: function($event) {
                                          return _vm.selectAll()
                                        }
                                      },
                                      model: {
                                        value: _vm.vCancelCheckIn,
                                        callback: function($$v) {
                                          _vm.vCancelCheckIn = $$v
                                        },
                                        expression: "vCancelCheckIn"
                                      }
                                    },
                                    [_vm._v("Cancel Check In")]
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
              ])
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/folio-history/components/NavigationHeader.vue?vue&type=template&id=05956f76&":
/*!*************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/folio-history/components/NavigationHeader.vue?vue&type=template&id=05956f76& ***!
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
    { staticClass: "content-header " },
    [
      _c(
        "vs-row",
        {
          staticClass: "navigation mb-2",
          attrs: { "vs-w": "12", "vs-type": "flex" }
        },
        [
          _c("vs-input-number", {
            attrs: {
              step: 100,
              "icon-inc": "expand_less",
              "icon-dec": "expand_more"
            },
            on: {
              input: function($event) {
                return _vm.onRefreshData()
              }
            },
            model: {
              value: _vm.vModelSelectLimitData,
              callback: function($$v) {
                _vm.vModelSelectLimitData = $$v
              },
              expression: "vModelSelectLimitData"
            }
          })
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

/***/ "./resources/js/src/api/folioHistory.js":
/*!**********************************************!*\
  !*** ./resources/js/src/api/folioHistory.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TransactionResource; });
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
var uri = 'foliohistory';

var TransactionResource =
/*#__PURE__*/
function (_Resource) {
  _inherits(TransactionResource, _Resource);

  function TransactionResource() {
    _classCallCheck(this, TransactionResource);

    return _possibleConstructorReturn(this, _getPrototypeOf(TransactionResource).call(this, uri));
  }

  _createClass(TransactionResource, [{
    key: "log",
    value: function log(id) {
      return Object(_utils_request__WEBPACK_IMPORTED_MODULE_1__["default"])({
        url: '/tracking/log/' + tableName + '/' + id,
        method: 'get'
      });
    }
  }, {
    key: "cancelCheckOut",
    value: function cancelCheckOut(data) {
      return Object(_utils_request__WEBPACK_IMPORTED_MODULE_1__["default"])({
        url: '/' + uri + '/cancelcheckout',
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

  return TransactionResource;
}(_api_resource__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./resources/js/src/views/pages/folio-history/FolioHistory.vue":
/*!*********************************************************************!*\
  !*** ./resources/js/src/views/pages/folio-history/FolioHistory.vue ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FolioHistory_vue_vue_type_template_id_57681ebf_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FolioHistory.vue?vue&type=template&id=57681ebf&scoped=true& */ "./resources/js/src/views/pages/folio-history/FolioHistory.vue?vue&type=template&id=57681ebf&scoped=true&");
/* harmony import */ var _FolioHistory_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FolioHistory.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/folio-history/FolioHistory.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _FolioHistory_vue_vue_type_style_index_0_id_57681ebf_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FolioHistory.vue?vue&type=style&index=0&id=57681ebf&scoped=true&lang=css& */ "./resources/js/src/views/pages/folio-history/FolioHistory.vue?vue&type=style&index=0&id=57681ebf&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _FolioHistory_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FolioHistory_vue_vue_type_template_id_57681ebf_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _FolioHistory_vue_vue_type_template_id_57681ebf_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "57681ebf",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/folio-history/FolioHistory.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/folio-history/FolioHistory.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/src/views/pages/folio-history/FolioHistory.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FolioHistory_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./FolioHistory.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/folio-history/FolioHistory.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FolioHistory_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/folio-history/FolioHistory.vue?vue&type=style&index=0&id=57681ebf&scoped=true&lang=css&":
/*!******************************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/folio-history/FolioHistory.vue?vue&type=style&index=0&id=57681ebf&scoped=true&lang=css& ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_FolioHistory_vue_vue_type_style_index_0_id_57681ebf_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader??ref--7-1!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./FolioHistory.vue?vue&type=style&index=0&id=57681ebf&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/folio-history/FolioHistory.vue?vue&type=style&index=0&id=57681ebf&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_FolioHistory_vue_vue_type_style_index_0_id_57681ebf_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_FolioHistory_vue_vue_type_style_index_0_id_57681ebf_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_FolioHistory_vue_vue_type_style_index_0_id_57681ebf_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_FolioHistory_vue_vue_type_style_index_0_id_57681ebf_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_FolioHistory_vue_vue_type_style_index_0_id_57681ebf_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/src/views/pages/folio-history/FolioHistory.vue?vue&type=template&id=57681ebf&scoped=true&":
/*!****************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/folio-history/FolioHistory.vue?vue&type=template&id=57681ebf&scoped=true& ***!
  \****************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FolioHistory_vue_vue_type_template_id_57681ebf_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./FolioHistory.vue?vue&type=template&id=57681ebf&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/folio-history/FolioHistory.vue?vue&type=template&id=57681ebf&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FolioHistory_vue_vue_type_template_id_57681ebf_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FolioHistory_vue_vue_type_template_id_57681ebf_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/pages/folio-history/components/FilterHeader.vue":
/*!********************************************************************************!*\
  !*** ./resources/js/src/views/pages/folio-history/components/FilterHeader.vue ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FilterHeader_vue_vue_type_template_id_60d91a5a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FilterHeader.vue?vue&type=template&id=60d91a5a& */ "./resources/js/src/views/pages/folio-history/components/FilterHeader.vue?vue&type=template&id=60d91a5a&");
/* harmony import */ var _FilterHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FilterHeader.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/folio-history/components/FilterHeader.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _FilterHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FilterHeader_vue_vue_type_template_id_60d91a5a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _FilterHeader_vue_vue_type_template_id_60d91a5a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/folio-history/components/FilterHeader.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/folio-history/components/FilterHeader.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/folio-history/components/FilterHeader.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FilterHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./FilterHeader.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/folio-history/components/FilterHeader.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FilterHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/folio-history/components/FilterHeader.vue?vue&type=template&id=60d91a5a&":
/*!***************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/folio-history/components/FilterHeader.vue?vue&type=template&id=60d91a5a& ***!
  \***************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FilterHeader_vue_vue_type_template_id_60d91a5a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./FilterHeader.vue?vue&type=template&id=60d91a5a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/folio-history/components/FilterHeader.vue?vue&type=template&id=60d91a5a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FilterHeader_vue_vue_type_template_id_60d91a5a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FilterHeader_vue_vue_type_template_id_60d91a5a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/pages/folio-history/components/NavigationHeader.vue":
/*!************************************************************************************!*\
  !*** ./resources/js/src/views/pages/folio-history/components/NavigationHeader.vue ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _NavigationHeader_vue_vue_type_template_id_05956f76___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NavigationHeader.vue?vue&type=template&id=05956f76& */ "./resources/js/src/views/pages/folio-history/components/NavigationHeader.vue?vue&type=template&id=05956f76&");
/* harmony import */ var _NavigationHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NavigationHeader.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/folio-history/components/NavigationHeader.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _NavigationHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _NavigationHeader_vue_vue_type_template_id_05956f76___WEBPACK_IMPORTED_MODULE_0__["render"],
  _NavigationHeader_vue_vue_type_template_id_05956f76___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/folio-history/components/NavigationHeader.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/folio-history/components/NavigationHeader.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/folio-history/components/NavigationHeader.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NavigationHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./NavigationHeader.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/folio-history/components/NavigationHeader.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NavigationHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/folio-history/components/NavigationHeader.vue?vue&type=template&id=05956f76&":
/*!*******************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/folio-history/components/NavigationHeader.vue?vue&type=template&id=05956f76& ***!
  \*******************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NavigationHeader_vue_vue_type_template_id_05956f76___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./NavigationHeader.vue?vue&type=template&id=05956f76& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/folio-history/components/NavigationHeader.vue?vue&type=template&id=05956f76&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NavigationHeader_vue_vue_type_template_id_05956f76___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NavigationHeader_vue_vue_type_template_id_05956f76___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/pages/folio-history/components/action_grid.js":
/*!******************************************************************************!*\
  !*** ./resources/js/src/views/pages/folio-history/components/action_grid.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (vue__WEBPACK_IMPORTED_MODULE_0___default.a.extend({
  template: "\n            <div>\n                <div v-if=\"params.data.folio_number > 0\" class=\"flex action-button\">\n                    <vs-button @click=\"showSidebar\" :color=\"iconAction.menuColor\" type=\"flat\"><vs-icon icon=\"menu\" size=\"small\"></vs-icon></vs-button>\n                </div>\n            </div>\n            ",
  data: function data() {
    return {};
  },
  beforeMount: function beforeMount() {},
  mounted: function mounted() {},
  methods: {
    showPopUp: function showPopUp(modeData) {
      if (this.params.data !== undefined) {
        this.params.context.componentParent.showForm(this.params.data, modeData);
      } else {
        this.openUndefinedAlert();
      }
    },
    openAlert: function openAlert() {
      if (this.params.data !== undefined) {
        this.openConfirm();
      } else {
        this.openUndefinedAlert();
      }
    },
    showSidebar: function showSidebar() {
      if (this.params.data !== undefined) {
        this.params.context.componentParent.handleSidebarOption(this.params.data);
      } else {
        this.openUndefinedAlert();
      }
    },
    openUndefinedAlert: function openUndefinedAlert() {
      this.$vs.dialog({
        color: 'primary',
        title: this.$t('message.informationTitle'),
        text: this.$t('message.undefinedText'),
        acceptText: this.$t('table.close')
      });
    },
    openConfirm: function openConfirm() {
      this.$vs.dialog({
        type: 'confirm',
        color: 'danger',
        title: this.$t('message.deleteTitleConfirm'),
        text: this.$t('message.deleteConfirm'),
        acceptText: this.$t('message.yes'),
        cancelText: this.$t('message.no'),
        accept: this.acceptAlert
      });
    },
    acceptAlert: function acceptAlert() {
      this.$vs.notify({
        color: 'danger',
        title: this.$t('message.deleteTitleSuccess'),
        text: this.$t('message.deleteSuccess'),
        accept: this.params.context.componentParent.deleteData(this.params.data)
      });
    }
  }
}));

/***/ }),

/***/ "./resources/js/src/views/pages/folio-history/components/source-status.js":
/*!********************************************************************************!*\
  !*** ./resources/js/src/views/pages/folio-history/components/source-status.js ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (vue__WEBPACK_IMPORTED_MODULE_0___default.a.extend({
  template: "\n    <div style=\"margin-top:2.5px\" class=\"reservation-status-grid\">\n\n        <vs-chip v-if=\"date.departure == $store.state.auditDate && data != null\" color=\"#FF002A\">\n            Checked In\n        </vs-chip>\n\n        <vs-chip v-else-if=\"date.departure != $store.state.auditDate && data != null\" color=\"#2494C6\">\n            Checked In\n        </vs-chip>\n\n        <vs-chip v-else-if=\"date.departure == $store.state.auditDate && data == null\" color=\"#FF002A\">\n            Walked In\n        </vs-chip>\n\n        <vs-chip v-else-if=\"date.departure != $store.state.auditDate && data == null\" color=\"#C62583\">\n            Walked In\n        </vs-chip>\n\n    </div>\n         ",
  data: function data() {
    return {
      data: null,
      date: {
        arrival: null,
        departure: null
      },
      "true": true,
      "false": false
    };
  },
  mounted: function mounted() {
    this.data = this.params.value;
    this.date = {
      arrival: this.params.data.date_arrival,
      departure: this.params.data.date_departure
    };
  },
  methods: {}
}));

/***/ })

}]);