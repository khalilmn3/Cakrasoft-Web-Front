(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[27],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/components/Tracking.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/components/Tracking.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var ag_grid_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ag-grid-vue */ "./node_modules/ag-grid-vue/main.js");
/* harmony import */ var ag_grid_vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(ag_grid_vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_format_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/utils/format.js */ "./resources/js/src/utils/format.js");
//
//
//
//
//
//
//
//
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
  props: ['idData', 'theData'],
  components: {
    'ag-grid-vue': ag_grid_vue__WEBPACK_IMPORTED_MODULE_0__["AgGridVue"]
  },
  data: function data() {
    return {
      columnDefs: null,
      gridOptions: null,
      gridApi: null,
      columnApi: null,
      rowGroupPanelShow: null,
      statusBar: null,
      sideBar: null,
      paginationPageSize: null,
      rowSelection: null
    };
  },
  beforeMount: function beforeMount() {
    this.gridOptions = {
      rowHeight: this.rowHeightDefault
    }; //------------------need setting manual for column table-----------------//

    this.columnDefs = [{
      headerName: 'Log Date',
      field: 'log_date',
      width: 100,
      valueFormatter: _utils_format_js__WEBPACK_IMPORTED_MODULE_1__["formatDate"]
    }, {
      headerName: 'Log Time',
      field: 'log_date',
      width: 100,
      valueFormatter: _utils_format_js__WEBPACK_IMPORTED_MODULE_1__["formatTime"]
    }, {
      headerName: 'Mode',
      field: 'mode',
      width: 100
    }, {
      headerName: 'User ID',
      field: 'user_id',
      width: 120
    }, {
      headerName: 'Table Name',
      field: 'table_name_log',
      width: 150
    }, {
      headerName: 'Data',
      field: 'data_query',
      width: 350
    }];
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
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/master-folio/MasterFolio.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/master-folio/MasterFolio.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ag_grid_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ag-grid-vue */ "./node_modules/ag-grid-vue/main.js");
/* harmony import */ var ag_grid_vue__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ag_grid_vue__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_action_grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/action_grid */ "./resources/js/src/views/pages/master-folio/components/action_grid.js");
/* harmony import */ var _components_FilterHeader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/FilterHeader */ "./resources/js/src/views/pages/master-folio/components/FilterHeader.vue");
/* harmony import */ var _components_NavigationHeader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/NavigationHeader */ "./resources/js/src/views/pages/master-folio/components/NavigationHeader.vue");
/* harmony import */ var _views_pages_components_Tracking_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/views/pages/components/Tracking.vue */ "./resources/js/src/views/pages/components/Tracking.vue");
/* harmony import */ var _utils_dialog_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/utils/dialog.js */ "./resources/js/src/utils/dialog.js");
/* harmony import */ var _utils_alert_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/utils/alert.js */ "./resources/js/src/utils/alert.js");
/* harmony import */ var _utils_general_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/utils/general.js */ "./resources/js/src/utils/general.js");
/* harmony import */ var _views_pages_components_folioForm_FolioForm_vue__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/views/pages/components/folioForm/FolioForm.vue */ "./resources/js/src/views/pages/components/folioForm/FolioForm.vue");
/* harmony import */ var _views_pages_components_lock_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/views/pages/components/lock.js */ "./resources/js/src/views/pages/components/lock.js");
/* harmony import */ var _utils_format_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/utils/format.js */ "./resources/js/src/utils/format.js");
/* harmony import */ var _utils_formConfig_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @/utils/formConfig.js */ "./resources/js/src/utils/formConfig.js");
/* harmony import */ var _api_masterFolio__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @/api/masterFolio */ "./resources/js/src/api/masterFolio.js");
/* harmony import */ var _api_guestinhouse_guestInHouse__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @/api/guestinhouse/guestInHouse */ "./resources/js/src/api/guestinhouse/guestInHouse.js");
/* harmony import */ var _api_transaction_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @/api/transaction.js */ "./resources/js/src/api/transaction.js");


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








 // <!------------------additional element---------------------->



 // API




var transactionResource = new _api_transaction_js__WEBPACK_IMPORTED_MODULE_15__["default"]();
var masterFolioResource = new _api_masterFolio__WEBPACK_IMPORTED_MODULE_13__["default"]();
var guestInHouseResource = new _api_guestinhouse_guestInHouse__WEBPACK_IMPORTED_MODULE_14__["default"](); // <!------------------end additional element---------------------->

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'MasterFolio',
  props: ['titleForm', 'routeApi', 'mainTableName'],
  components: {
    AgGridVue: ag_grid_vue__WEBPACK_IMPORTED_MODULE_1__["AgGridVue"],
    FilterHeader: _components_FilterHeader__WEBPACK_IMPORTED_MODULE_3__["default"],
    NavigationHeader: _components_NavigationHeader__WEBPACK_IMPORTED_MODULE_4__["default"],
    Tracking: _views_pages_components_Tracking_vue__WEBPACK_IMPORTED_MODULE_5__["default"],
    FolioForm: _views_pages_components_folioForm_FolioForm_vue__WEBPACK_IMPORTED_MODULE_9__["default"]
  },
  data: function data() {
    return {
      //Filter Data on Page Size
      vModelDefaultSearchData: '0',
      searchFilterData: [{
        text: this.$t('table.number'),
        value: '0'
      }, {
        text: this.$t('table.fullName'),
        value: '5'
      }, {
        text: this.$t('table.group'),
        value: '6'
      }, {
        text: this.$t('table.company'),
        value: '8'
      }, {
        text: this.$t('table.market'),
        value: '9'
      }, {
        text: this.$t('table.address'),
        value: '10'
      }, {
        text: this.$t('table.phone'),
        value: '11'
      }, {
        text: this.$t('table.status'),
        value: '12'
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
      sidebarConfig: _utils_formConfig_js__WEBPACK_IMPORTED_MODULE_12__["sidebarConfig"],
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
      //------------------need setting manual-----------------//
      stayInformations: {},
      folioNumber: '',
      sidebarOption: false,
      //------------------additional-------------------------//
      //title popup//
      title: '',
      paramsData: '',
      idLog: '',
      balance: 0 //------------------end need setting manual-----------------//

    };
  },
  beforeMount: function beforeMount() {
    this.gridOptions = {
      rowHeight: this.rowHeightReservation
    }; //------------------need setting manual for column table-----------------//
    // use this.$t("value") for transaltion localization------//
    // see value in @/lang/en.js //

    this.columnDefs = [{
      headerName: 'Action',
      field: 'number',
      resizable: false,
      filter: false,
      cellRenderer: 'actionGrid',
      colId: 'params',
      width: 100
    }, {
      headerName: 'L',
      field: 'is_lock',
      resizable: false,
      filter: false,
      width: 30,
      cellStyle: {
        textAlign: 'center'
      },
      cellRenderer: 'iconLockRenderer'
    }, {
      headerName: 'Full Name',
      field: 'full_name',
      width: 230
    }, {
      headerName: 'Number',
      field: 'folio_number',
      width: 90
    }, {
      headerName: 'Arrival',
      field: 'date_arrival',
      width: 100,
      valueFormatter: _utils_format_js__WEBPACK_IMPORTED_MODULE_11__["formatDate"]
    }, {
      headerName: 'ETA',
      field: 'time_arrival',
      width: 70
    }, {
      headerName: 'Departure',
      field: 'date_departure',
      width: 100,
      valueFormatter: _utils_format_js__WEBPACK_IMPORTED_MODULE_11__["formatDate"]
    }, {
      headerName: 'ETD',
      field: 'time_departure',
      width: 70
    }, {
      headerName: 'Market',
      field: 'market',
      width: 110
    }, {
      headerName: 'Company',
      field: 'company',
      width: 110
    }, {
      headerName: 'Group',
      field: 'guest_group',
      width: 110
    }, {
      headerName: 'Balance',
      field: 'balance',
      width: 110,
      cellStyle: {
        textAlign: 'right'
      },
      valueFormatter: _utils_format_js__WEBPACK_IMPORTED_MODULE_11__["formatNumber"]
    }, {
      headerName: 'Adult',
      field: 'adult',
      width: 80
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
      headerName: 'Insert By',
      field: 'insert_by',
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
      actionGrid: _components_action_grid__WEBPACK_IMPORTED_MODULE_2__["default"],
      iconLockRenderer: _views_pages_components_lock_js__WEBPACK_IMPORTED_MODULE_10__["default"]
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
        name: this.$t('commons.contexMenu.insert'),
        icon: Object(_utils_general_js__WEBPACK_IMPORTED_MODULE_8__["generateIconContextMenuAgGrid"])('add_icon24'),
        action: function action() {
          return _this.showForm('', _this.modeData.insert);
        }
      }, {
        name: this.$t('commons.contexMenu.update'),
        disabled: !node,
        icon: Object(_utils_general_js__WEBPACK_IMPORTED_MODULE_8__["generateIconContextMenuAgGrid"])('edit_icon24'),
        action: function action() {
          return _this.showForm(_this.paramsData, _this.modeData.edit);
        }
      }, 'separator', {
        name: this.$t('guestInHouse.contexMenu.transaction'),
        disabled: !node,
        icon: Object(_utils_general_js__WEBPACK_IMPORTED_MODULE_8__["generateIconContextMenuAgGrid"])('transaction_icon24'),
        action: function action() {
          return _this.handleTransaction();
        }
      }, 'separator', {
        name: this.$t('guestInHouse.contexMenu.checkOut'),
        disabled: !node,
        icon: Object(_utils_general_js__WEBPACK_IMPORTED_MODULE_8__["generateIconContextMenuAgGrid"])('check_out_icon24'),
        action: function action() {
          return _this.handleCheckOut();
        }
      }, {
        name: this.$t('guestInHouse.contexMenu.printFolio'),
        disabled: !node,
        icon: Object(_utils_general_js__WEBPACK_IMPORTED_MODULE_8__["generateIconContextMenuAgGrid"])('print_icon24'),
        action: function action() {
          return _this.handlePrintFolio();
        }
      }, 'separator', {
        name: this.$t('table.trackingData'),
        disabled: !node,
        icon: Object(_utils_general_js__WEBPACK_IMPORTED_MODULE_8__["generateIconContextMenuAgGrid"])('tracking_icon24'),
        action: function action() {
          return _this.showForm(_this.paramsData, _this.modeData.tracking);
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
    //------------------ Guest In House CRUD------------------//
    getMasterFolioList: function () {
      var _getMasterFolioList = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(search) {
        var _this2 = this;

        var selectedNodes, _ref, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                this.search = search;
                _context2.prev = 1;
                selectedNodes = this.gridApi.getSelectedRows();
                selectedNodes = selectedNodes.length > 0 ? selectedNodes[0] : {};
                _context2.next = 6;
                return masterFolioResource.list(search);

              case 6:
                _ref = _context2.sent;
                data = _ref.data;
                this.rowData = data.data;
                this.pinnedBottomRowData = data.total;
                this.$nextTick(function () {
                  Object(_utils_general_js__WEBPACK_IMPORTED_MODULE_8__["rowSelectedAfterRefresh"])(_this2, selectedNodes, 'folio_number');
                });
                this.$vs.loading.close('#layout--main>.con-vs-loading');
                _context2.next = 18;
                break;

              case 14:
                _context2.prev = 14;
                _context2.t0 = _context2["catch"](1);
                this.$vs.loading.close('#layout--main>.con-vs-loading');
                _utils_alert_js__WEBPACK_IMPORTED_MODULE_7__["default"].errorFetchDataAlert();

              case 18:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[1, 14]]);
      }));

      function getMasterFolioList(_x2) {
        return _getMasterFolioList.apply(this, arguments);
      }

      return getMasterFolioList;
    }(),
    trackingData: function () {
      var _trackingData = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(id) {
        var _this3 = this;

        var _ref2, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                _context3.next = 3;
                return guestInHouseResource.log(id.id_log);

              case 3:
                _ref2 = _context3.sent;
                data = _ref2.data;
                this.dataTracking = data.modelGrid;
                setTimeout(function () {
                  _this3.$vs.loading.close('#layout--main>.con-vs-loading');
                }, 100);
                _context3.next = 13;
                break;

              case 9:
                _context3.prev = 9;
                _context3.t0 = _context3["catch"](0);
                this.$vs.loading.close('#layout--main>.con-vs-loading');
                _utils_alert_js__WEBPACK_IMPORTED_MODULE_7__["default"].errorFetchDataAlert();

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
      this.getMasterFolioList(search);
    },
    showForm: function () {
      var _showForm = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4(idData, modeData) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                this.$refs.folioForm.showForm(idData, modeData);

              case 1:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function showForm(_x4, _x5) {
        return _showForm.apply(this, arguments);
      }

      return showForm;
    }(),
    //------------------ END Guest In House CRUD------------------//
    //------------------START SIDEBARR OPTIONS-------------------------------//
    //----------------START CHECK OUT---------------//
    handleCheckOut: function () {
      var _handleCheckOut = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5() {
        var _this4 = this;

        var balance;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return this.getBalance();

              case 2:
                balance = this.balance;

                if (balance == 'null' || balance == null) {
                  this.$vs.dialog({
                    color: 'warning',
                    title: this.$t('message.informationTitle'),
                    text: 'There is no charge/payment on folio, Continue Check out?',
                    accept: function accept() {
                      _this4.checkOut();
                    }
                  });
                } else if (balance < 0 || balance > 0) {
                  _utils_dialog_js__WEBPACK_IMPORTED_MODULE_6__["default"].information(this.$t('message.cannotCheckFolioUnbalance'));
                } else if (balance == 0) {
                  _utils_dialog_js__WEBPACK_IMPORTED_MODULE_6__["default"].confirmation(this, 'checkOut');
                }

              case 4:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function handleCheckOut() {
        return _handleCheckOut.apply(this, arguments);
      }

      return handleCheckOut;
    }(),
    checkOut: function () {
      var _checkOut = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee6() {
        var params, _ref3, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                params = {
                  number: this.folioNumber,
                  user_id: this.userInfo.code
                };
                _context6.next = 3;
                return guestInHouseResource.checkOut(params);

              case 3:
                _ref3 = _context6.sent;
                data = _ref3.data;

                if (data.value === 0) {
                  _utils_alert_js__WEBPACK_IMPORTED_MODULE_7__["default"].acceptAlertSuccesWithText(this.$t('message.statusCheckOut.0'));
                } else if (data.value > 0) {
                  _utils_dialog_js__WEBPACK_IMPORTED_MODULE_6__["default"].information(this.$t('message.statusCheckOut.' + data.value) + "\n" + data.message);
                }

                this.refreshData(this.search);

              case 7:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function checkOut() {
        return _checkOut.apply(this, arguments);
      }

      return checkOut;
    }(),
    getBalance: function () {
      var _getBalance = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee7() {
        var _ref4, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _context7.next = 2;
                return transactionResource.balance({
                  q: this.folioNumber
                });

              case 2:
                _ref4 = _context7.sent;
                data = _ref4.data;
                this.balance = data.balance;

              case 5:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      function getBalance() {
        return _getBalance.apply(this, arguments);
      }

      return getBalance;
    }(),
    //----------------END CHECK OUT---------------//
    handleSidebarOption: function handleSidebarOption(data) {
      this.folioNumber = data.folio_number;
      this.paramsData = data;
      this.sidebarOption = true;
    },
    //------------------END SIDEBARR OPTIONS-------------------------------//
    //----------------START OTHER OPTION------------------//
    handleTransaction: function () {
      var _handleTransaction = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee8() {
        var _ref5, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                this.sidebarOption = false;
                this.$vs.loading({
                  container: '#layout--main',
                  scale: this.scaleLoadingMainLayout
                });
                _context8.next = 4;
                return guestInHouseResource.get(this.paramsData.folio_number);

              case 4:
                _ref5 = _context8.sent;
                data = _ref5.data;
                this.$router.push({
                  name: 'transaction',
                  params: {
                    stayInformations: data.list
                  }
                });

              case 7:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, this);
      }));

      function handleTransaction() {
        return _handleTransaction.apply(this, arguments);
      }

      return handleTransaction;
    }(),
    //PRINT
    handlePrintFolio: function handlePrintFolio() {
      this.sidebarOption = false;
      var newTabReport = this.$router.resolve({
        path: '/report/preview?reportId=' + this.mReportId.folio + '&folioNumber=' + this.paramsData.folio_number + '&template=' + this.mStimulsoftReportFileDirectory.folio
      });
      window.open(newTabReport.href, '_blank');
    } //----------------END OTHER OPTION------------------//
    //------------------end need setting manual for crud-----------------//

  },
  mounted: function mounted() {
    this.gridApi = this.gridOptions.api;
    this.ColumnApi = this.gridOptions.columnApi;
  },
  watch: {
    sidebarOption: function sidebarOption() {
      if (this.sidebarOption == false) {
        document.getElementById('main-container').click();
      }
    }
  },
  computed: {
    userValidation: function userValidation() {
      return this.credential.user.length > 0 && this.credential.pass.length > 0;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/master-folio/components/FilterHeader.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/master-folio/components/FilterHeader.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
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
  data: function data() {
    return {
      vModelSelectLimitData: 0,
      vModelSearchData: '',
      vModelTextSearchData: ''
    };
  },
  methods: {
    onRefreshData: function onRefreshData(limit) {
      var _this = this;

      this.vModelSelectLimitData = this.vModelSelectLimitData == '' ? 0 : this.vModelSelectLimitData;
      var search = {
        searchBy: this.vModelSearchData,
        keyword: this.vModelTextSearchData,
        limit: limit >= 0 ? limit : this.limitPageSize
      };
      setTimeout(function () {
        _this.$emit('search', search);
      }, 200);
    },
    selectAll: function selectAll() {
      this.onRefreshData();
    },
    onEnter: function onEnter() {
      this.onRefreshData();
    }
  },
  beforeMount: function beforeMount() {
    //Assign limit data with variable Global
    this.vModelSearchData = this.searchDefault;
    this.vModelSelectLimitData = this.limitDefaultPageSize;
    this.onRefreshData();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/master-folio/components/NavigationHeader.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/master-folio/components/NavigationHeader.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************/
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

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/master-folio/MasterFolio.vue?vue&type=style&index=0&id=994d23aa&scoped=true&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/master-folio/MasterFolio.vue?vue&type=style&index=0&id=994d23aa&scoped=true&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".body-sidebar[data-v-994d23aa]{\n  margin-left: 10px\n}\n.footer-sidebar[data-v-994d23aa]{\n  margin-left: 10px\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/master-folio/MasterFolio.vue?vue&type=style&index=0&id=994d23aa&scoped=true&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/master-folio/MasterFolio.vue?vue&type=style&index=0&id=994d23aa&scoped=true&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader??ref--7-1!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./MasterFolio.vue?vue&type=style&index=0&id=994d23aa&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/master-folio/MasterFolio.vue?vue&type=style&index=0&id=994d23aa&scoped=true&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/components/Tracking.vue?vue&type=template&id=ba816e6a&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/components/Tracking.vue?vue&type=template&id=ba816e6a& ***!
  \***************************************************************************************************************************************************************************************************************************/
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
  return _c("ag-grid-vue", {
    staticClass: "ag-theme-balham",
    style: _vm.StyleAgGridFrame,
    attrs: {
      pagination: "true",
      paginationPageSize: _vm.paginationPageSize,
      suppressDragLeaveHidesColumns: true,
      suppressMakeColumnVisibleAfterUnGroup: true,
      rowGroupPanelShow: _vm.rowGroupPanelShow,
      columnDefs: _vm.columnDefs,
      enableCellChangeFlash: true,
      rowSelection: _vm.rowSelection,
      rowData: _vm.theData,
      defaultColDef: _vm.defColDef
    }
  })
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/master-folio/MasterFolio.vue?vue&type=template&id=994d23aa&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/master-folio/MasterFolio.vue?vue&type=template&id=994d23aa&scoped=true& ***!
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
    { staticClass: "guest-in-house" },
    [
      _c("navigation-header", {
        on: {
          showModal: _vm.showForm,
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
      _c("folio-form", {
        ref: "folioForm",
        attrs: {
          titleForm: "Master Folio",
          formType: _vm.mFormType.masterFolio
        },
        on: {
          refreshData: function($event) {
            return _vm.$refs.filterHeader.onRefreshData()
          }
        }
      }),
      _vm._v(" "),
      _c(
        "vs-sidebar",
        {
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
                  attrs: { index: "8" },
                  on: {
                    click: function($event) {
                      return _vm.handleCheckOut()
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
                  _vm._v("\n                    CHECK-OUT\n                ")
                ]
              ),
              _vm._v(" "),
              _c(
                "vs-sidebar-item",
                {
                  attrs: { index: "9" },
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
                  _vm._v("\n                    PRINT FOLIO\n                ")
                ]
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/master-folio/components/FilterHeader.vue?vue&type=template&id=0d9abf82&":
/*!********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/master-folio/components/FilterHeader.vue?vue&type=template&id=0d9abf82& ***!
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
                          attrs: { "vs-lg": "5", "vs-md": "5", "vs-xs": "12" }
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
                          attrs: { "vs-lg": "7", "vs-md": "7", "vs-xs": "12" }
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
                      )
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c("vs-col", { staticClass: "lg:w-1/2 filter-part" })
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/master-folio/components/NavigationHeader.vue?vue&type=template&id=fd9f7ec4&":
/*!************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/master-folio/components/NavigationHeader.vue?vue&type=template&id=fd9f7ec4& ***!
  \************************************************************************************************************************************************************************************************************************************************/
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
          attrs: {
            "vs-w": "12",
            "vs-type": "flex",
            "vs-justify": "space-between"
          }
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
          }),
          _vm._v(" "),
          _c(
            "vs-button",
            {
              attrs: {
                "vs-justify": "flex-end",
                color: "success",
                type: "filled",
                icon: "add"
              },
              on: {
                click: function($event) {
                  return _vm.showModal()
                }
              }
            },
            [_vm._v(_vm._s(_vm.$t("table.insert")))]
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

/***/ "./resources/js/src/api/transaction.js":
/*!*********************************************!*\
  !*** ./resources/js/src/api/transaction.js ***!
  \*********************************************/
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



var tableName = 'sub_folio';
var uri = 'transaction';

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
    value: function listRouting(params) {
      return Object(_utils_request__WEBPACK_IMPORTED_MODULE_1__["default"])({
        url: '/' + uri + '/transfer/list/routing',
        method: 'get',
        params: params
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
    key: "listReturnTransfer",
    value: function listReturnTransfer(params) {
      return Object(_utils_request__WEBPACK_IMPORTED_MODULE_1__["default"])({
        url: '/' + uri + '/transfer/list/return',
        method: 'get',
        params: params
      });
    }
  }, {
    key: "transferTransaction",
    value: function transferTransaction(data) {
      return Object(_utils_request__WEBPACK_IMPORTED_MODULE_1__["default"])({
        url: '/' + uri + '/transfer/transaction',
        method: 'post',
        data: data
      });
    }
  }, {
    key: "transferBalance",
    value: function transferBalance(data) {
      return Object(_utils_request__WEBPACK_IMPORTED_MODULE_1__["default"])({
        url: '/' + uri + '/transfer/balance',
        method: 'post',
        data: data
      });
    }
  }, {
    key: "routing",
    value: function routing(data) {
      return Object(_utils_request__WEBPACK_IMPORTED_MODULE_1__["default"])({
        url: '/' + uri + '/transfer/routing',
        method: 'post',
        data: data
      });
    }
  }, {
    key: "removeRouting",
    value: function removeRouting(data) {
      return Object(_utils_request__WEBPACK_IMPORTED_MODULE_1__["default"])({
        url: '/' + uri + '/transfer/routing/remove',
        method: 'post',
        data: data
      });
    }
  }, {
    key: "returnTransfer",
    value: function returnTransfer(data) {
      return Object(_utils_request__WEBPACK_IMPORTED_MODULE_1__["default"])({
        url: '/' + uri + '/transfer/return',
        method: 'post',
        data: data
      });
    }
  }, {
    key: "moveSubFolioGroup",
    value: function moveSubFolioGroup(data) {
      return Object(_utils_request__WEBPACK_IMPORTED_MODULE_1__["default"])({
        url: '/' + uri + '/move',
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
    key: "amountBefore",
    value: function amountBefore(data) {
      return Object(_utils_request__WEBPACK_IMPORTED_MODULE_1__["default"])({
        url: '/' + uri + '/correction/amountbefore',
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
  }, {
    key: "balance",
    value: function balance(params) {
      return Object(_utils_request__WEBPACK_IMPORTED_MODULE_1__["default"])({
        url: '/' + uri + '/balance',
        method: 'get',
        params: params
      });
    }
  }, {
    key: "getFolioType",
    value: function getFolioType(params) {
      return Object(_utils_request__WEBPACK_IMPORTED_MODULE_1__["default"])({
        url: '/' + uri + '/foliotype',
        method: 'get',
        params: params
      });
    }
  }]);

  return TransactionResource;
}(_api_resource__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./resources/js/src/utils/formConfig.js":
/*!**********************************************!*\
  !*** ./resources/js/src/utils/formConfig.js ***!
  \**********************************************/
/*! exports provided: formConfig, sidebarConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formConfig", function() { return formConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sidebarConfig", function() { return sidebarConfig; });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuesax__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuesax */ "./node_modules/vuesax/dist/vuesax.common.js");
/* harmony import */ var vuesax__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vuesax__WEBPACK_IMPORTED_MODULE_1__);
/*=========================================================================================
  File Name: themeConfig.js
  Description: Theme configuration
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: hhttp://www.themeforest.net/user/pixinvent
==========================================================================================*/
// MAIN COLORS - VUESAX THEME COLORS
var colors = {
  primary: '#7367F0',
  success: '#28C76F',
  danger: '#EA5455',
  warning: '#FF9F43',
  dark: '#1E1E1E'
};


vue__WEBPACK_IMPORTED_MODULE_0___default.a.use(vuesax__WEBPACK_IMPORTED_MODULE_1___default.a, {
  theme: {
    colors: colors
  }
}); // CONFIGS

var formConfig = {
  labelColor: '',
  labelFont: '',
  labelFontSize: '',
  inputFont: '',
  inputFontSize: '',
  inputColor: '',
  inputMarginBottom: 'mb-3',
  inputMarginRight: '',
  inputMarginLeft: '',
  inputMarginTop: '',
  rowMarginBottom: 'mb-1',
  rowMarginRight: '',
  rowMarginLeft: '',
  rowMarginTop: ''
};
var sidebarConfig = {
  iconWidth: '16',
  iconHeight: '16',
  iconBorder: '0',
  iconMarginRight: 'mr-2',
  iconMarginLeft: ''
};


/***/ }),

/***/ "./resources/js/src/views/pages/components/Tracking.vue":
/*!**************************************************************!*\
  !*** ./resources/js/src/views/pages/components/Tracking.vue ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Tracking_vue_vue_type_template_id_ba816e6a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Tracking.vue?vue&type=template&id=ba816e6a& */ "./resources/js/src/views/pages/components/Tracking.vue?vue&type=template&id=ba816e6a&");
/* harmony import */ var _Tracking_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Tracking.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/components/Tracking.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Tracking_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Tracking_vue_vue_type_template_id_ba816e6a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Tracking_vue_vue_type_template_id_ba816e6a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/components/Tracking.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/components/Tracking.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/js/src/views/pages/components/Tracking.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Tracking_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Tracking.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/components/Tracking.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Tracking_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/components/Tracking.vue?vue&type=template&id=ba816e6a&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/src/views/pages/components/Tracking.vue?vue&type=template&id=ba816e6a& ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Tracking_vue_vue_type_template_id_ba816e6a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Tracking.vue?vue&type=template&id=ba816e6a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/components/Tracking.vue?vue&type=template&id=ba816e6a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Tracking_vue_vue_type_template_id_ba816e6a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Tracking_vue_vue_type_template_id_ba816e6a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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

/***/ }),

/***/ "./resources/js/src/views/pages/master-folio/MasterFolio.vue":
/*!*******************************************************************!*\
  !*** ./resources/js/src/views/pages/master-folio/MasterFolio.vue ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MasterFolio_vue_vue_type_template_id_994d23aa_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MasterFolio.vue?vue&type=template&id=994d23aa&scoped=true& */ "./resources/js/src/views/pages/master-folio/MasterFolio.vue?vue&type=template&id=994d23aa&scoped=true&");
/* harmony import */ var _MasterFolio_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MasterFolio.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/master-folio/MasterFolio.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _MasterFolio_vue_vue_type_style_index_0_id_994d23aa_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MasterFolio.vue?vue&type=style&index=0&id=994d23aa&scoped=true&lang=css& */ "./resources/js/src/views/pages/master-folio/MasterFolio.vue?vue&type=style&index=0&id=994d23aa&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _MasterFolio_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _MasterFolio_vue_vue_type_template_id_994d23aa_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _MasterFolio_vue_vue_type_template_id_994d23aa_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "994d23aa",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/master-folio/MasterFolio.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/master-folio/MasterFolio.vue?vue&type=script&lang=js&":
/*!********************************************************************************************!*\
  !*** ./resources/js/src/views/pages/master-folio/MasterFolio.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MasterFolio_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./MasterFolio.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/master-folio/MasterFolio.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MasterFolio_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/master-folio/MasterFolio.vue?vue&type=style&index=0&id=994d23aa&scoped=true&lang=css&":
/*!****************************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/master-folio/MasterFolio.vue?vue&type=style&index=0&id=994d23aa&scoped=true&lang=css& ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MasterFolio_vue_vue_type_style_index_0_id_994d23aa_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader??ref--7-1!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./MasterFolio.vue?vue&type=style&index=0&id=994d23aa&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/master-folio/MasterFolio.vue?vue&type=style&index=0&id=994d23aa&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MasterFolio_vue_vue_type_style_index_0_id_994d23aa_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MasterFolio_vue_vue_type_style_index_0_id_994d23aa_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MasterFolio_vue_vue_type_style_index_0_id_994d23aa_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MasterFolio_vue_vue_type_style_index_0_id_994d23aa_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MasterFolio_vue_vue_type_style_index_0_id_994d23aa_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/src/views/pages/master-folio/MasterFolio.vue?vue&type=template&id=994d23aa&scoped=true&":
/*!**************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/master-folio/MasterFolio.vue?vue&type=template&id=994d23aa&scoped=true& ***!
  \**************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MasterFolio_vue_vue_type_template_id_994d23aa_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./MasterFolio.vue?vue&type=template&id=994d23aa&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/master-folio/MasterFolio.vue?vue&type=template&id=994d23aa&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MasterFolio_vue_vue_type_template_id_994d23aa_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MasterFolio_vue_vue_type_template_id_994d23aa_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/pages/master-folio/components/FilterHeader.vue":
/*!*******************************************************************************!*\
  !*** ./resources/js/src/views/pages/master-folio/components/FilterHeader.vue ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FilterHeader_vue_vue_type_template_id_0d9abf82___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FilterHeader.vue?vue&type=template&id=0d9abf82& */ "./resources/js/src/views/pages/master-folio/components/FilterHeader.vue?vue&type=template&id=0d9abf82&");
/* harmony import */ var _FilterHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FilterHeader.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/master-folio/components/FilterHeader.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _FilterHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FilterHeader_vue_vue_type_template_id_0d9abf82___WEBPACK_IMPORTED_MODULE_0__["render"],
  _FilterHeader_vue_vue_type_template_id_0d9abf82___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/master-folio/components/FilterHeader.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/master-folio/components/FilterHeader.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/master-folio/components/FilterHeader.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FilterHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./FilterHeader.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/master-folio/components/FilterHeader.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FilterHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/master-folio/components/FilterHeader.vue?vue&type=template&id=0d9abf82&":
/*!**************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/master-folio/components/FilterHeader.vue?vue&type=template&id=0d9abf82& ***!
  \**************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FilterHeader_vue_vue_type_template_id_0d9abf82___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./FilterHeader.vue?vue&type=template&id=0d9abf82& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/master-folio/components/FilterHeader.vue?vue&type=template&id=0d9abf82&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FilterHeader_vue_vue_type_template_id_0d9abf82___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FilterHeader_vue_vue_type_template_id_0d9abf82___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/pages/master-folio/components/NavigationHeader.vue":
/*!***********************************************************************************!*\
  !*** ./resources/js/src/views/pages/master-folio/components/NavigationHeader.vue ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _NavigationHeader_vue_vue_type_template_id_fd9f7ec4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NavigationHeader.vue?vue&type=template&id=fd9f7ec4& */ "./resources/js/src/views/pages/master-folio/components/NavigationHeader.vue?vue&type=template&id=fd9f7ec4&");
/* harmony import */ var _NavigationHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NavigationHeader.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/master-folio/components/NavigationHeader.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _NavigationHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _NavigationHeader_vue_vue_type_template_id_fd9f7ec4___WEBPACK_IMPORTED_MODULE_0__["render"],
  _NavigationHeader_vue_vue_type_template_id_fd9f7ec4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/master-folio/components/NavigationHeader.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/master-folio/components/NavigationHeader.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/master-folio/components/NavigationHeader.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NavigationHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./NavigationHeader.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/master-folio/components/NavigationHeader.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NavigationHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/master-folio/components/NavigationHeader.vue?vue&type=template&id=fd9f7ec4&":
/*!******************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/master-folio/components/NavigationHeader.vue?vue&type=template&id=fd9f7ec4& ***!
  \******************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NavigationHeader_vue_vue_type_template_id_fd9f7ec4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./NavigationHeader.vue?vue&type=template&id=fd9f7ec4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/master-folio/components/NavigationHeader.vue?vue&type=template&id=fd9f7ec4&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NavigationHeader_vue_vue_type_template_id_fd9f7ec4___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NavigationHeader_vue_vue_type_template_id_fd9f7ec4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/pages/master-folio/components/action_grid.js":
/*!*****************************************************************************!*\
  !*** ./resources/js/src/views/pages/master-folio/components/action_grid.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (vue__WEBPACK_IMPORTED_MODULE_0___default.a.extend({
  template: "\n            <div>\n                <div v-if=\"params.data.folio_number > 0\" class=\"flex action-button\">\n                    <vs-button @click=\"showSidebar\" :color=\"iconAction.menuColor\" type=\"flat\"><vs-icon icon=\"menu\" size=\"small\"></vs-icon></vs-button>\n                    <vx-tooltip class=\"flex\" style=\"height:30px\" text=\"Edit data selected\"><vs-button @click=\"showPopUp(modeData.edit)\" :color=\"iconAction.editColor\" type=\"flat\"><img border=\"0\" width=\"20\" height=\"20\" src=\"/images/icons/edit_icon24.png\"/></vs-button></vx-tooltip>\n                </div>\n            </div>\n            ",
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

/***/ })

}]);