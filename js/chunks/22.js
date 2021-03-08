(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[22],{

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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/components/transaction/Transaction.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/components/transaction/Transaction.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ag_grid_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ag-grid-vue */ "./node_modules/ag-grid-vue/main.js");
/* harmony import */ var ag_grid_vue__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ag_grid_vue__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_action_grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/action_grid */ "./resources/js/src/views/pages/components/transaction/components/action_grid.js");
/* harmony import */ var _components_InformationHeader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/InformationHeader */ "./resources/js/src/views/pages/components/transaction/components/InformationHeader.vue");
/* harmony import */ var _components_InformationFooter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/InformationFooter */ "./resources/js/src/views/pages/components/transaction/components/InformationFooter.vue");
/* harmony import */ var _components_NavigationHeader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/NavigationHeader */ "./resources/js/src/views/pages/components/transaction/components/NavigationHeader.vue");
/* harmony import */ var _components_FilterHeader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/FilterHeader */ "./resources/js/src/views/pages/components/transaction/components/FilterHeader.vue");
/* harmony import */ var _views_pages_components_report_Template_vue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/views/pages/components/report/Template.vue */ "./resources/js/src/views/pages/components/report/Template.vue");
/* harmony import */ var _views_pages_components_Tracking_vue__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/views/pages/components/Tracking.vue */ "./resources/js/src/views/pages/components/Tracking.vue");
/* harmony import */ var _views_pages_components_Credential__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/views/pages/components/Credential */ "./resources/js/src/views/pages/components/Credential.vue");
/* harmony import */ var _utils_alert_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/utils/alert.js */ "./resources/js/src/utils/alert.js");
/* harmony import */ var _utils_dialog_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/utils/dialog.js */ "./resources/js/src/utils/dialog.js");
/* harmony import */ var _utils_general_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @/utils/general.js */ "./resources/js/src/utils/general.js");
/* harmony import */ var vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! vue-perfect-scrollbar */ "./node_modules/vue-perfect-scrollbar/dist/index.js");
/* harmony import */ var vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _utils_format_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @/utils/format.js */ "./resources/js/src/utils/format.js");
/* harmony import */ var _transfer_account_TransferAccount__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./transfer/account/TransferAccount */ "./resources/js/src/views/pages/components/transaction/transfer/account/TransferAccount.vue");
/* harmony import */ var _transfer_return_ReturnTransfer__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./transfer/return/ReturnTransfer */ "./resources/js/src/views/pages/components/transaction/transfer/return/ReturnTransfer.vue");
/* harmony import */ var _transfer_routing_AutomaticRouting__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./transfer/routing/AutomaticRouting */ "./resources/js/src/views/pages/components/transaction/transfer/routing/AutomaticRouting.vue");
/* harmony import */ var _views_pages_components_Number__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @/views/pages/components/Number */ "./resources/js/src/views/pages/components/Number.vue");
/* harmony import */ var _views_pages_components_lock_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @/views/pages/components/lock.js */ "./resources/js/src/views/pages/components/lock.js");
/* harmony import */ var _components_source_status_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/source-status.js */ "./resources/js/src/views/pages/components/transaction/components/source-status.js");
/* harmony import */ var _api_guestinhouse_guestInHouse__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @/api/guestinhouse/guestInHouse */ "./resources/js/src/api/guestinhouse/guestInHouse.js");
/* harmony import */ var _api_transaction__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @/api/transaction */ "./resources/js/src/api/transaction.js");


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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//












 //------for format----- //










var guestInHouseResource = new _api_guestinhouse_guestInHouse__WEBPACK_IMPORTED_MODULE_21__["default"]();
var transactionResource = new _api_transaction__WEBPACK_IMPORTED_MODULE_22__["default"](); // <!------------------end additional element---------------------->

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'Transaction',
  props: {
    titleForm: String,
    routeApi: String,
    mainTableName: String,
    stayInformations: Object,
    folioNumber: String,
    isDayendClose: Boolean,
    isCheckOut: Boolean,
    form: String
  },
  components: {
    AgGridVue: ag_grid_vue__WEBPACK_IMPORTED_MODULE_1__["AgGridVue"],
    InformationHeader: _components_InformationHeader__WEBPACK_IMPORTED_MODULE_3__["default"],
    InformationFooter: _components_InformationFooter__WEBPACK_IMPORTED_MODULE_4__["default"],
    NavigationHeader: _components_NavigationHeader__WEBPACK_IMPORTED_MODULE_5__["default"],
    FilterHeader: _components_FilterHeader__WEBPACK_IMPORTED_MODULE_6__["default"],
    Credential: _views_pages_components_Credential__WEBPACK_IMPORTED_MODULE_9__["default"],
    VuePerfectScrollbar: vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_13___default.a,
    Tracking: _views_pages_components_Tracking_vue__WEBPACK_IMPORTED_MODULE_8__["default"],
    InputNumber: _views_pages_components_Number__WEBPACK_IMPORTED_MODULE_18__["default"],
    TransferAccount: _transfer_account_TransferAccount__WEBPACK_IMPORTED_MODULE_15__["default"],
    ReturnTransfer: _transfer_return_ReturnTransfer__WEBPACK_IMPORTED_MODULE_16__["default"],
    AutomaticRouting: _transfer_routing_AutomaticRouting__WEBPACK_IMPORTED_MODULE_17__["default"]
  },
  data: function data() {
    return {
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
      rowClassRules: null,
      dataTracking: null,
      //Parameter From Child
      idData: '',
      //Mode Edit Or Insert(assign insert from parent, update from child)
      modeDataValue: 0,
      modeDataValueTracking: 0,
      modeChildValue: '',
      //data error handling from laravel validation//
      dbErrors: {},
      //------------------need setting manual-----------------//
      searchOption: [{
        code: 'sub_folio.id_log',
        name: this.$t('table.id')
      }, {
        code: 'guest_detail.room_number',
        name: this.$t('table.roomNumber')
      }, {
        code: 'cfg_init_account.name',
        name: this.$t('table.account')
      }, {
        code: 'company.name',
        name: this.$t('table.company')
      }, {
        code: 'sub_folio.remark',
        name: this.$t('table.remark')
      }, {
        code: 'sub_folio.document_number',
        name: this.$t('table.docNumber')
      }, {
        code: 'sub_folio.voucher_number',
        name: this.$t('table.voucherNumber')
      }, {
        code: 'cfg_init_sub_department.name',
        name: this.$t('table.subDepartment')
      }, {
        code: 'sub_folio.ref_number',
        name: this.$t('table.refNumber')
      }, {
        code: 'sub_folio.insert_by',
        name: this.$t('table.insertBy')
      }, {
        code: 'sub_folio.void_by',
        name: this.$t('table.voidBy')
      }, {
        code: 'sub_folio.void_reason',
        name: this.$t('table.voidReason')
      }, {
        code: 'sub_folio.user_id',
        name: this.$t('table.lastUpdate')
      }],
      searchDefault: 'sub_folio.id_log',
      //------CREDENTIAL-------//
      specialAccessType: null,
      userValidation: false,
      activeCredentialPrompt: false,
      activeCredentialReasonPrompt: false,
      credentialTitle: '',
      isCredential: true,
      credential: {
        user: '',
        pass: '',
        reason: ''
      },
      reasonTypeValue: '',
      resvStatus: '',
      paramsData: '',
      idLog: '',
      reqDocNumber: '',
      reqDirectBill: '',
      reqCard: '',
      reqTransfer: '',
      search: {
        searchBy: 'sub_folio.id_log',
        keyword: '',
        limit: 1000,
        subFolio: 'All',
        possession: '',
        transfered: '',
        "void": '',
        correction: ''
      },
      vTransaction: {},
      vDirectBill: null,
      vOutstanding: 0,
      vArLimit: 0,
      listTransferTransaction: [],
      listTransaction: [],
      listFolio: [],
      listReturnTransfer: [],
      balanceData: {
        debit: 0,
        credit: 0,
        balance: 0
      },
      balanceAmount: {},
      showInputForm: false,
      showPaymentOption: false,
      showTransferForm: false,
      isRefund: false,
      resetOptionsChange: false,
      titleInputForm: '',
      form1: 'form1',
      accounts: [],
      dataLookup: {},
      account: {
        code: ''
      },
      folioType: [],
      subGroupAccount: '',
      groupAccount: '',
      activeTab: 1,
      tfType: null,
      tfBalance: '',
      tfAccount: 'subFolio',
      tfFolioType: '',
      vReturn: {},
      vTransfer: {
        option: 1
      },
      vRouting: {},
      disabledFolioList: false,
      selectedAccount: null,
      listRouting: [],
      nFolioType: '',
      //folio type of folio number
      isFolioOpen: false,
      oldCorrectionValue: 0,
      newCorrectionValue: 0,
      correctionPrompt: false,
      sidebarOption: false,
      btnPaymentOptionDisabled: false,
      btnSaveDisabled: false //------------------end need setting manual-----------------//

    };
  },
  beforeMount: function beforeMount() {
    this.gridOptions = {
      rowHeight: this.rowHeightReservation
    };
    this.rowClassRules = {
      'correction': 'data.is_correction === "-1"',
      'void': 'data.void === "-1"'
    }; //------------------need setting manual for column table-----------------//
    // use this.$t("value") for transaltion localization------//
    // see value in @/lang/en.js //

    this.columnDefs = [{
      headerName: 'Action',
      field: 'number',
      cellRenderer: 'actionGrid',
      colId: 'params',
      width: 100
    }, {
      headerName: this.$t('table.id'),
      field: 'id_log',
      width: 70
    }, {
      headerName: this.$t('table.auditDate'),
      field: 'audit_date',
      width: 100,
      valueFormatter: _utils_format_js__WEBPACK_IMPORTED_MODULE_14__["formatDate"]
    }, {
      headerName: this.$t('table.transferStatus'),
      field: 'transfer_status',
      width: 150
    }, {
      headerName: this.$t('table.room') + "#",
      field: 'room_number',
      width: 80
    }, {
      headerName: this.$t('table.account'),
      field: 'account',
      width: 200
    }, {
      headerName: this.$t('table.debit'),
      field: 'debit',
      width: 100,
      cellStyle: {
        textAlign: 'right'
      },
      valueFormatter: _utils_format_js__WEBPACK_IMPORTED_MODULE_14__["formatNumber"]
    }, {
      headerName: this.$t('table.credit'),
      field: 'credit',
      width: 100,
      cellStyle: {
        textAlign: 'right'
      },
      valueFormatter: _utils_format_js__WEBPACK_IMPORTED_MODULE_14__["formatNumber"]
    }, {
      headerName: this.$t('table.currency'),
      field: 'currency_code',
      width: 100
    }, {
      headerName: this.$t('table.exchangeRate'),
      field: 'exchange_rate',
      width: 100,
      cellStyle: {
        textAlign: 'right'
      },
      valueFormatter: _utils_format_js__WEBPACK_IMPORTED_MODULE_14__["formatNumber"]
    }, {
      headerName: this.$t('table.debitForeign'),
      field: 'debitForeign',
      width: 100,
      cellStyle: {
        textAlign: 'right'
      },
      valueFormatter: _utils_format_js__WEBPACK_IMPORTED_MODULE_14__["formatNumber"]
    }, {
      headerName: this.$t('table.creditForeign'),
      field: 'creditForeign',
      width: 100,
      cellStyle: {
        textAlign: 'right'
      },
      valueFormatter: _utils_format_js__WEBPACK_IMPORTED_MODULE_14__["formatNumber"]
    }, {
      headerName: this.$t('table.remark'),
      field: 'remark',
      width: 300
    }, {
      headerName: this.$t('table.company'),
      field: 'company',
      width: 150
    }, {
      headerName: this.$t('table.docNumber'),
      field: 'document_number',
      width: 110
    }, {
      headerName: this.$t('table.voucherNumber'),
      field: 'voucher_number',
      width: 70
    }, {
      headerName: this.$t('table.insertBy'),
      field: 'insert_by',
      width: 70
    }, {
      headerName: this.$t('table.userId'),
      field: 'user_id',
      width: 110
    }]; //------------------end need setting manual for column table-----------------//

    this.context = {
      componentParent: this
    };
    this.frameworkComponents = {
      actionGrid: _components_action_grid__WEBPACK_IMPORTED_MODULE_2__["default"],
      iconLockRenderer: _views_pages_components_lock_js__WEBPACK_IMPORTED_MODULE_19__["default"],
      iconStatusRenderer: _components_source_status_js__WEBPACK_IMPORTED_MODULE_20__["default"]
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
    this.checkFolioNumber();
  },
  created: function created() {},
  methods: {
    onGridReady: function onGridReady() {},
    onPageSizeChanged: function onPageSizeChanged(newPageSize) {
      this.gridApi.paginationSetPageSize(newPageSize);
    },
    //------------------------additional for context menu ag-Grid-----------//
    getContextMenu: function getContextMenu(params) {
      var _this = this;

      var paramsData = params.node.data;
      this.paramsData = paramsData;
      var result = [{
        name: this.$t('transaction.contextMenu.charge'),
        icon: Object(_utils_general_js__WEBPACK_IMPORTED_MODULE_12__["generateIconContextMenuAgGrid"])('charge_icon24'),
        action: function action() {
          return _this.showForm(null, _this.mGroupAccount.charge, _this.$t('transaction.title.charge'));
        }
      }, {
        name: this.$t('transaction.contextMenu.apTransaction'),
        icon: Object(_utils_general_js__WEBPACK_IMPORTED_MODULE_12__["generateIconContextMenuAgGrid"])('ap_transaction_icon24'),
        action: function action() {
          return _this.showForm([_this.mSubGroupAccount.accountPayable], _this.mGroupAccount.charge, _this.$t('transaction.title.apTransaction'));
        }
      }, {
        name: this.$t('transaction.contextMenu.autoPostRoomCharge'),
        icon: Object(_utils_general_js__WEBPACK_IMPORTED_MODULE_12__["generateIconContextMenuAgGrid"])('autopost_icon24'),
        action: function action() {
          return _this.handlePostingRoomCharge();
        }
      }, 'separator', {
        name: this.$t('transaction.contextMenu.cashPayment'),
        icon: Object(_utils_general_js__WEBPACK_IMPORTED_MODULE_12__["generateIconContextMenuAgGrid"])('cash_icon24'),
        action: function action() {
          return _this.showForm([_this.mSubGroupAccount.cashPayment], _this.mGroupAccount.payment, _this.$t('transaction.title.cashPayment'));
        }
      }, {
        name: this.$t('transaction.contextMenu.cashRefund'),
        icon: Object(_utils_general_js__WEBPACK_IMPORTED_MODULE_12__["generateIconContextMenuAgGrid"])('cash_refund_icon24'),
        action: function action() {
          return _this.showForm([_this.mSubGroupAccount.cashPayment], _this.mGroupAccount.payment, _this.$t('transaction.title.cashRefund'), true);
        }
      }, {
        name: this.$t('transaction.contextMenu.creditOrDebitCardPayment'),
        icon: Object(_utils_general_js__WEBPACK_IMPORTED_MODULE_12__["generateIconContextMenuAgGrid"])('card_icon24'),
        action: function action() {
          return _this.showForm([_this.mSubGroupAccount.creditOrDebitCard], _this.mGroupAccount.payment, _this.$t('transaction.title.creditOrDebitCardPayment'));
        }
      }, {
        name: this.$t('transaction.contextMenu.directBillPayment'),
        icon: Object(_utils_general_js__WEBPACK_IMPORTED_MODULE_12__["generateIconContextMenuAgGrid"])('direct_bill_icon24'),
        action: function action() {
          return _this.showForm([_this.mSubGroupAccount.accountReceiveable], _this.mGroupAccount.payment, _this.$t('transaction.title.directBillPayment'));
        }
      }, {
        name: this.$t('transaction.contextMenu.otherPayment'),
        icon: Object(_utils_general_js__WEBPACK_IMPORTED_MODULE_12__["generateIconContextMenuAgGrid"])('other_payment_icon24'),
        action: function action() {
          return _this.showForm([_this.mSubGroupAccount.otherPayment, _this.mSubGroupAccount.bankTransfer], _this.mGroupAccount.payment, _this.$t('transaction.title.otherPayment'));
        }
      }, {
        name: this.$t('transaction.contextMenu.printReceipt'),
        icon: Object(_utils_general_js__WEBPACK_IMPORTED_MODULE_12__["generateIconContextMenuAgGrid"])('print_icon24'),
        action: function action() {
          return _this.handlePrintReceipt(paramsData);
        }
      }, 'separator', {
        name: this.$t('transaction.contextMenu.move'),
        subMenu: [{
          name: this.$t('transaction.contextMenu.subFolio') + ' A',
          action: function action() {
            return _this.handleMoveSubFolioGroup('A');
          }
        }, {
          name: this.$t('transaction.contextMenu.subFolio') + ' B',
          action: function action() {
            return _this.handleMoveSubFolioGroup('B');
          }
        }, {
          name: this.$t('transaction.contextMenu.subFolio') + ' C',
          action: function action() {
            return _this.handleMoveSubFolioGroup('C');
          }
        }, {
          name: this.$t('transaction.contextMenu.subFolio') + ' D',
          action: function action() {
            return _this.handleMoveSubFolioGroup('D');
          }
        }]
      }, 'separator', {
        name: this.$t('transaction.contextMenu.void'),
        icon: Object(_utils_general_js__WEBPACK_IMPORTED_MODULE_12__["generateIconContextMenuAgGrid"])('delete_icon24'),
        action: function action() {
          return _this.handleCorrectionVoid(paramsData, false);
        }
      }, {
        name: this.$t('transaction.contextMenu.correction'),
        icon: Object(_utils_general_js__WEBPACK_IMPORTED_MODULE_12__["generateIconContextMenuAgGrid"])('correction_icon24'),
        action: function action() {
          return _this.handleCorrectionVoid(paramsData, true);
        }
      }, 'separator', {
        name: this.$t('transaction.contextMenu.transfer'),
        icon: Object(_utils_general_js__WEBPACK_IMPORTED_MODULE_12__["generateIconContextMenuAgGrid"])('transfer_icon24'),
        action: function action() {
          return _this.handleTransfer();
        }
      }, 'separator', {
        name: this.$t('transaction.contextMenu.checkOut'),
        icon: Object(_utils_general_js__WEBPACK_IMPORTED_MODULE_12__["generateIconContextMenuAgGrid"])('check_out_icon24'),
        action: function action() {
          return _this.handleCheckOut();
        }
      }, {
        name: this.$t('transaction.contextMenu.printFolio'),
        icon: Object(_utils_general_js__WEBPACK_IMPORTED_MODULE_12__["generateIconContextMenuAgGrid"])('print_icon24'),
        action: function action() {
          return _this.handlePrintFolio();
        }
      }, {
        name: this.$t('transaction.contextMenu.trackingData'),
        icon: Object(_utils_general_js__WEBPACK_IMPORTED_MODULE_12__["generateIconContextMenuAgGrid"])('tracking_icon24') // action: () => this.trackin()

      }];
      return result;
    },
    handleRowRightClicked: function handleRowRightClicked() {
      var vm = this;
      vm.gridApi.forEachNode(function (node) {
        if (node.data.id_log == vm.paramsData.id_log) {
          node.setSelected(true, true);
        }
      });
    },
    checkFolioNumber: function checkFolioNumber() {
      if (this.stayInformations == undefined) {
        this.$router.go(-1);
      } else {
        this.getTransactionList();
        this.getFolioTypeStatusByNumber();
      }
    },
    //------------------need setting manual for crud-----------------//
    getFolioTypeStatusByNumber: function () {
      var _getFolioTypeStatusByNumber = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var params, _ref, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                params = {
                  folio_number: this.stayInformations.number
                };
                _context.next = 3;
                return transactionResource.getFolioType(params);

              case 3:
                _ref = _context.sent;
                data = _ref.data;
                this.nFolioType = data.type;
                this.isFolioOpen = data.status;

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getFolioTypeStatusByNumber() {
        return _getFolioTypeStatusByNumber.apply(this, arguments);
      }

      return getFolioTypeStatusByNumber;
    }(),
    getTransactionList: function () {
      var _getTransactionList = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var _ref2, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                this.search.folio_number = this.stayInformations.number;
                _context2.prev = 1;
                _context2.next = 4;
                return transactionResource.list(this.search);

              case 4:
                _ref2 = _context2.sent;
                data = _ref2.data;
                this.listTransaction = data.data;
                this.balanceData = data.footer;
                this.$vs.loading.close('#layout--main>.con-vs-loading');
                _context2.next = 15;
                break;

              case 11:
                _context2.prev = 11;
                _context2.t0 = _context2["catch"](1);
                this.$vs.loading.close('#layout--main>.con-vs-loading');
                _utils_alert_js__WEBPACK_IMPORTED_MODULE_10__["default"].errorFetchDataAlert();

              case 15:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[1, 11]]);
      }));

      function getTransactionList() {
        return _getTransactionList.apply(this, arguments);
      }

      return getTransactionList;
    }(),
    getBalance: function () {
      var _getBalance = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
        var _ref3, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                this.$vs.loading({
                  container: '#layout--main',
                  scale: this.scaleLoadingMainLayout
                });
                _context3.next = 4;
                return transactionResource.balance({
                  q: this.stayInformations.number
                });

              case 4:
                _ref3 = _context3.sent;
                data = _ref3.data;
                this.balanceAmount = data.balance;
                this.$vs.loading.close('#layout--main>.con-vs-loading');
                _context3.next = 14;
                break;

              case 10:
                _context3.prev = 10;
                _context3.t0 = _context3["catch"](0);
                this.$vs.loading.close('#layout--main>.con-vs-loading');
                _utils_alert_js__WEBPACK_IMPORTED_MODULE_10__["default"].errorFetchDataAlert();

              case 14:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[0, 10]]);
      }));

      function getBalance() {
        return _getBalance.apply(this, arguments);
      }

      return getBalance;
    }(),
    showForm: function () {
      var _showForm = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4(subGroupAccount, groupAccount, title, refund) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                this.$vs.loading({
                  container: '#layout--main',
                  scale: this.scaleLoadingMainLayout
                });
                this.btnPaymentOptionDisabled = true;
                this.resetTransaction(subGroupAccount);
                this.reqDocNumber = groupAccount == this.mGroupAccount.payment ? subGroupAccount == this.mSubGroupAccount.accountReceiveable || subGroupAccount == this.mSubGroupAccount.accountPayable ? '' : 'required' : '';
                this.reqDirectBill = subGroupAccount == this.mSubGroupAccount.accountReceiveable || subGroupAccount == this.mSubGroupAccount.accountPayable ? 'required' : '';
                this.reqCard = subGroupAccount == this.mSubGroupAccount.creditOrDebitCard ? 'required' : '';
                this.titleInputForm = title;
                this.isRefund = refund;
                this.groupAccount = groupAccount;
                this.subGroupAccount = subGroupAccount;
                this.getAccount(subGroupAccount, groupAccount);
                this.getExchangeRate();
                _context4.next = 14;
                return this.getLookup();

              case 14:
                this.showPaymentOption = false;

                if (!(groupAccount == this.mGroupAccount.payment)) {
                  _context4.next = 20;
                  break;
                }

                _context4.next = 18;
                return this.getBalance();

              case 18:
                if (refund == true) {
                  this.vTransaction.remark = 'Refund';
                  this.vTransaction.isRefund = refund;

                  if (this.balanceAmount < 0) {
                    this.vTransaction.amount_foreign = -this.balanceAmount;
                  }
                } else {
                  if (this.balanceAmount > 0) {
                    this.vTransaction.amount_foreign = this.balanceAmount;
                  }
                }

                this.getTotalAmount();

              case 20:
                this.showInputForm = true;

              case 21:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function showForm(_x, _x2, _x3, _x4) {
        return _showForm.apply(this, arguments);
      }

      return showForm;
    }(),
    searchData: function searchData(params) {
      this.search = params;
      this.$vs.loading({
        container: '#layout--main',
        scale: this.scaleLoadingMainLayout
      });
      this.getTransactionList();
    },
    handleCorrectionVoid: function handleCorrectionVoid(paramsData, isCorrection) {
      var transactionDate = paramsData.audit_date;

      if (isCorrection && transactionDate != this.auditDate) {
        this.showCredential(paramsData, isCorrection);
      } else if (!isCorrection && transactionDate == this.auditDate) {
        this.showCredential(paramsData, isCorrection);
      } else {
        this.cannotCorrectionVoidDialog(isCorrection);
      }
    },
    cannotCorrectionVoidDialog: function cannotCorrectionVoidDialog(isCorrection) {
      var message = isCorrection ? this.$t('message.cannotCorrection') : this.$t('message.cannotVoid');
      this.$vs.dialog({
        color: 'warning',
        title: this.$t('message.informationTitle'),
        text: message,
        acceptText: this.$t('table.close')
      });
    },
    correctionVoid: function () {
      var _correctionVoid = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5() {
        var data, amount;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                data = {
                  folioNumber: this.stayInformations.number,
                  isShowCorrection: this.$refs.filterHeader.vCorrection,
                  userId: this.userInfo.code,
                  userBy: this.credential.user,
                  reason: this.credential.reason,
                  idLog: this.idLog
                };

                if (!this.isCorrection) {
                  _context5.next = 11;
                  break;
                }

                _context5.next = 4;
                return this.getAmountBefore(this.idLog);

              case 4:
                amount = _context5.sent;

                if (amount < 0) {
                  amount = -amount;
                }

                this.oldCorrectionValue = amount;
                this.newCorrectionValue = amount;
                this.correctionPrompt = true;
                _context5.next = 14;
                break;

              case 11:
                _context5.next = 13;
                return transactionResource["void"](data);

              case 13:
                this.getTransactionList();

              case 14:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function correctionVoid() {
        return _correctionVoid.apply(this, arguments);
      }

      return correctionVoid;
    }(),
    getAmountBefore: function () {
      var _getAmountBefore = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee6(id) {
        var _ref4, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return transactionResource.amountBefore({
                  idLog: id
                });

              case 2:
                _ref4 = _context6.sent;
                data = _ref4.data;
                return _context6.abrupt("return", data);

              case 5:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6);
      }));

      function getAmountBefore(_x5) {
        return _getAmountBefore.apply(this, arguments);
      }

      return getAmountBefore;
    }(),
    correctionData: function () {
      var _correctionData = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee7() {
        var data;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                data = {
                  userId: this.userInfo.code,
                  userBy: this.credential.user,
                  reason: this.credential.reason,
                  amount: this.newCorrectionValue,
                  idLog: this.paramsData.id_log
                };
                _context7.next = 3;
                return transactionResource.correction(data);

              case 3:
                this.getTransactionList();

              case 4:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      function correctionData() {
        return _correctionData.apply(this, arguments);
      }

      return correctionData;
    }(),
    handleBackButton: function handleBackButton() {
      this.$vs.loading({
        container: '#layout--main',
        scale: this.scaleLoadingMainLayout
      });
      this.$router.go(-1);
    },
    //-------------- CRUD TRANSFER-----------------//
    handleTransfer: function () {
      var _handleTransfer = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee8() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                this.$vs.loading({
                  container: '#layout--main',
                  scale: this.scaleLoadingMainLayout
                });
                this.resetTransfer();
                _context8.next = 4;
                return this.getTransferTransactionList();

              case 4:
                this.showTransferForm = true;
                this.getRoutingList();
                this.getFolioList();
                this.getReturnTransferList();
                this.getFolioType();
                this.groupAccount = this.mGroupAccount.charge;
                this.getAccount();
                this.tfType = '', this.tfAccount = '', this.tfFolioType = '', this.tfBalance = '', this.activeTab = 1, this.$nextTick(function () {
                  var eleTransfer = document.getElementById('transfer');
                  if (eleTransfer) eleTransfer.click();
                });
                this.tfType = 'account', this.tfAccount = 'subFolio', this.tfFolioType = '', this.tfBalance = !(this.balanceData.debit > 0) ? 'deposit' : 'charge';
                this.handleChangeRadioChargeDeposit();

              case 14:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, this);
      }));

      function handleTransfer() {
        return _handleTransfer.apply(this, arguments);
      }

      return handleTransfer;
    }(),
    getTransferTransactionList: function () {
      var _getTransferTransactionList = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee9() {
        var _ref5, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                _context9.prev = 0;
                _context9.next = 3;
                return transactionResource.list({
                  folio_number: this.stayInformations.number
                });

              case 3:
                _ref5 = _context9.sent;
                data = _ref5.data;
                this.listTransferTransaction = data.data;
                this.$vs.loading.close('#layout--main>.con-vs-loading');
                _context9.next = 13;
                break;

              case 9:
                _context9.prev = 9;
                _context9.t0 = _context9["catch"](0);
                this.$vs.loading.close('#layout--main>.con-vs-loading');
                _utils_alert_js__WEBPACK_IMPORTED_MODULE_10__["default"].errorFetchDataAlert();

              case 13:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9, this, [[0, 9]]);
      }));

      function getTransferTransactionList() {
        return _getTransferTransactionList.apply(this, arguments);
      }

      return getTransferTransactionList;
    }(),
    resetTransfer: function resetTransfer() {
      var _this2 = this;

      this.vTransfer = {
        folio_number_from: this.stayInformations.number,
        option: 1,
        room_number: this.stayInformations.room_number,
        folio_number_to: null,
        amount: 0,
        user_id: this.userInfo.code
      };
      this.vRouting = {
        folio_number: this.stayInformations.number,
        folio_transfer: null,
        sub_folio: 'A',
        selected: [],
        user_id: this.userInfo.code
      };
      this.vReturn = {
        folio_number: this.stayInformations.number,
        sub_folio: 'A',
        type: '1',
        selected: [],
        user_id: this.userInfo.code
      };
      this.selectedAccount = null;
      this.search.subFolio = 'All';
      this.reqTransfer = 'required';
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
    },
    handleChangeRadioChargeDeposit: function handleChangeRadioChargeDeposit() {
      if (this.tfBalance == 'charge') {
        var bal = this.balanceData.debit - this.balanceData.credit;
        this.vTransfer.amount = bal > 0 ? this.balanceData.balance : 0;
      } else {
        var _bal = this.balanceData.credit - this.balanceData.debit;

        this.vTransfer.amount = _bal > 0 ? -this.balanceData.balance : 0;
      }
    },
    handleProcessTransfer: function handleProcessTransfer() {
      var _this3 = this;

      this.$validator.validateAll('transfer').then(function (result) {
        if (result) {
          if (_this3.vTransfer.option == _this3.mTransfer.transferSelected && _this3.selectedAccount == 0 && _this3.tfType == 'account') {
            _utils_dialog_js__WEBPACK_IMPORTED_MODULE_11__["default"].information(_this3.$t('message.selectTransaction'));
          } else {
            if (_this3.tfType == 'account') {
              _this3.transferTransaction();
            } else if (_this3.tfType == 'balance') {
              _this3.transferBalance();
            }
          }
        }
      });
    },
    handleInsertRouting: function handleInsertRouting() {
      var _this4 = this;

      this.$validator.validateAll('routing').then(function (result) {
        if (result) {
          _this4.$vs.loading({
            container: '#btn-add-routing',
            scale: _this4.scaleLoadingButton
          });

          _this4.insertRouting();
        }
      });
    },
    handleRemoveRouting: function handleRemoveRouting(status) {
      this.vRouting.remove = status;

      if (status == 2 && this.vRouting.selected <= 0) {
        _utils_dialog_js__WEBPACK_IMPORTED_MODULE_11__["default"].information(this.$t('message.selectAccount'));
      } else {
        this.removeRouting();
      }
    },
    handleReturnTransfer: function handleReturnTransfer() {
      var _this5 = this;

      this.$validator.validateAll('return').then(function (result) {
        if (result) {
          if (_this5.vReturn.selected <= 0) {
            _utils_dialog_js__WEBPACK_IMPORTED_MODULE_11__["default"].information(_this5.$t('message.selectFolio'));
          } else {
            _this5.$vs.loading({
              container: '#btn-return',
              scale: _this5.scaleLoadingButton
            });

            _this5.returnTransfer();
          }
        }
      });
    },
    getRoutingList: function () {
      var _getRoutingList = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee10() {
        var _ref6, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                _context10.next = 2;
                return transactionResource.listRouting({
                  folio_number: this.stayInformations.number
                });

              case 2:
                _ref6 = _context10.sent;
                data = _ref6.data;
                this.listRouting = data;

              case 5:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10, this);
      }));

      function getRoutingList() {
        return _getRoutingList.apply(this, arguments);
      }

      return getRoutingList;
    }(),
    getReturnTransferList: function () {
      var _getReturnTransferList = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee11() {
        var _ref7, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee11$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                _context11.next = 2;
                return transactionResource.listReturnTransfer({
                  q: this.stayInformations.number
                });

              case 2:
                _ref7 = _context11.sent;
                data = _ref7.data;
                this.listReturnTransfer = data;

              case 5:
              case "end":
                return _context11.stop();
            }
          }
        }, _callee11, this);
      }));

      function getReturnTransferList() {
        return _getReturnTransferList.apply(this, arguments);
      }

      return getReturnTransferList;
    }(),
    getFolioType: function () {
      var _getFolioType = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee12() {
        var _ref8, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee12$(_context12) {
          while (1) {
            switch (_context12.prev = _context12.next) {
              case 0:
                _context12.next = 2;
                return transactionResource.folioType();

              case 2:
                _ref8 = _context12.sent;
                data = _ref8.data;
                this.folioType = data;

              case 5:
              case "end":
                return _context12.stop();
            }
          }
        }, _callee12, this);
      }));

      function getFolioType() {
        return _getFolioType.apply(this, arguments);
      }

      return getFolioType;
    }(),
    getFolioList: function () {
      var _getFolioList = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee13() {
        var params, _ref9, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee13$(_context13) {
          while (1) {
            switch (_context13.prev = _context13.next) {
              case 0:
                params = {
                  type: this.tfFolioType
                };
                _context13.next = 3;
                return transactionResource.listFolio(params);

              case 3:
                _ref9 = _context13.sent;
                data = _ref9.data;
                this.listFolio = data;

              case 6:
              case "end":
                return _context13.stop();
            }
          }
        }, _callee13, this);
      }));

      function getFolioList() {
        return _getFolioList.apply(this, arguments);
      }

      return getFolioList;
    }(),
    transferTransaction: function () {
      var _transferTransaction = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee14() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee14$(_context14) {
          while (1) {
            switch (_context14.prev = _context14.next) {
              case 0:
                this.vTransfer.selected_account = this.selectedAccount;
                this.$vs.loading({
                  container: '#btn-transfer',
                  scale: this.scaleLoadingButton
                });
                _context14.prev = 2;
                _context14.next = 5;
                return transactionResource.transferTransaction(this.vTransfer);

              case 5:
                this.$vs.loading.close('#btn-transfer>.con-vs-loading');
                this.showTransferForm = false;
                _utils_alert_js__WEBPACK_IMPORTED_MODULE_10__["default"].acceptAlertSucces();
                _context14.next = 14;
                break;

              case 10:
                _context14.prev = 10;
                _context14.t0 = _context14["catch"](2);
                _utils_alert_js__WEBPACK_IMPORTED_MODULE_10__["default"].errorSaveDataAlert();
                this.$vs.loading.close('#btn-transfer>.con-vs-loading');

              case 14:
              case "end":
                return _context14.stop();
            }
          }
        }, _callee14, this, [[2, 10]]);
      }));

      function transferTransaction() {
        return _transferTransaction.apply(this, arguments);
      }

      return transferTransaction;
    }(),
    transferBalance: function () {
      var _transferBalance = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee15() {
        var _ref10, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee15$(_context15) {
          while (1) {
            switch (_context15.prev = _context15.next) {
              case 0:
                this.vTransfer.selected_account = this.selectedAccount;
                this.vTransfer.balance_type = this.tfBalance;
                this.$vs.loading({
                  container: '#btn-transfer',
                  scale: this.scaleLoadingButton
                });
                _context15.prev = 3;
                _context15.next = 6;
                return transactionResource.transferBalance(this.vTransfer);

              case 6:
                _ref10 = _context15.sent;
                data = _ref10.data;

                if (data == 0) {
                  this.$vs.loading.close('#btn-transfer>.con-vs-loading');
                  this.showTransferForm = false;
                  _utils_alert_js__WEBPACK_IMPORTED_MODULE_10__["default"].acceptAlertSucces();
                } else if (data > 0) {
                  this.$vs.loading.close('#btn-transfer>.con-vs-loading');
                  _utils_dialog_js__WEBPACK_IMPORTED_MODULE_11__["default"].information(this.$t('message.statusTransferBalance.' + data));
                }

                _context15.next = 15;
                break;

              case 11:
                _context15.prev = 11;
                _context15.t0 = _context15["catch"](3);
                _utils_alert_js__WEBPACK_IMPORTED_MODULE_10__["default"].errorSaveDataAlert();
                this.$vs.loading.close('#btn-transfer>.con-vs-loading');

              case 15:
              case "end":
                return _context15.stop();
            }
          }
        }, _callee15, this, [[3, 11]]);
      }));

      function transferBalance() {
        return _transferBalance.apply(this, arguments);
      }

      return transferBalance;
    }(),
    insertRouting: function () {
      var _insertRouting = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee16() {
        var _ref11, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee16$(_context16) {
          while (1) {
            switch (_context16.prev = _context16.next) {
              case 0:
                _context16.prev = 0;
                _context16.next = 3;
                return transactionResource.routing(this.vRouting);

              case 3:
                _ref11 = _context16.sent;
                data = _ref11.data;

                if (data.status == 'success') {
                  this.getRoutingList();
                  _utils_alert_js__WEBPACK_IMPORTED_MODULE_10__["default"].acceptAlertSucces();
                } else {
                  _utils_alert_js__WEBPACK_IMPORTED_MODULE_10__["default"].errorSaveDataAlert(data.status);
                }

                this.$vs.loading.close('#btn-add-routing>.con-vs-loading');
                _context16.next = 13;
                break;

              case 9:
                _context16.prev = 9;
                _context16.t0 = _context16["catch"](0);
                this.$vs.loading.close('#btn-add-routing>.con-vs-loading');
                _utils_alert_js__WEBPACK_IMPORTED_MODULE_10__["default"].errorSaveDataAlert();

              case 13:
              case "end":
                return _context16.stop();
            }
          }
        }, _callee16, this, [[0, 9]]);
      }));

      function insertRouting() {
        return _insertRouting.apply(this, arguments);
      }

      return insertRouting;
    }(),
    removeRouting: function () {
      var _removeRouting = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee17() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee17$(_context17) {
          while (1) {
            switch (_context17.prev = _context17.next) {
              case 0:
                _context17.prev = 0;
                _context17.next = 3;
                return transactionResource.removeRouting(this.vRouting);

              case 3:
                this.getRoutingList();
                this.showTransferForm = false;
                _utils_alert_js__WEBPACK_IMPORTED_MODULE_10__["default"].deleteAlertSuccess();
                this.$vs.loading.close('#btn-add-routing>.con-vs-loading');
                _context17.next = 13;
                break;

              case 9:
                _context17.prev = 9;
                _context17.t0 = _context17["catch"](0);
                this.$vs.loading.close('#btn-add-routing>.con-vs-loading');
                _utils_alert_js__WEBPACK_IMPORTED_MODULE_10__["default"].errorDeleteDataAlert();

              case 13:
              case "end":
                return _context17.stop();
            }
          }
        }, _callee17, this, [[0, 9]]);
      }));

      function removeRouting() {
        return _removeRouting.apply(this, arguments);
      }

      return removeRouting;
    }(),
    returnTransfer: function () {
      var _returnTransfer = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee18() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee18$(_context18) {
          while (1) {
            switch (_context18.prev = _context18.next) {
              case 0:
                _context18.prev = 0;
                _context18.next = 3;
                return transactionResource.returnTransfer(this.vReturn);

              case 3:
                this.showTransferForm = false;
                _utils_alert_js__WEBPACK_IMPORTED_MODULE_10__["default"].acceptAlertSucces();
                this.$vs.loading.close('#btn-return>.con-vs-loading');
                _context18.next = 12;
                break;

              case 8:
                _context18.prev = 8;
                _context18.t0 = _context18["catch"](0);
                this.$vs.loading.close('#btn-return>.con-vs-loading');
                _utils_alert_js__WEBPACK_IMPORTED_MODULE_10__["default"].errorDeleteDataAlert();

              case 12:
              case "end":
                return _context18.stop();
            }
          }
        }, _callee18, this, [[0, 8]]);
      }));

      function returnTransfer() {
        return _returnTransfer.apply(this, arguments);
      }

      return returnTransfer;
    }(),
    //-------------------- CRUD FOR DEPOSIT/CHARGE---------------------------//
    getAccount: function () {
      var _getAccount = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee19(subGroupAccount, groupAccount) {
        var _this6 = this;

        var params, _ref12, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee19$(_context19) {
          while (1) {
            switch (_context19.prev = _context19.next) {
              case 0:
                params = {
                  group: this.groupAccount,
                  sub_group: this.subGroupAccount,
                  sub_department_code: this.vTransaction.sub_department_code,
                  currency_code: this.vTransaction.currency_code
                };
                _context19.prev = 1;
                _context19.next = 4;
                return transactionResource.account(params);

              case 4:
                _ref12 = _context19.sent;
                data = _ref12.data;
                this.accounts = data;
                setTimeout(function () {
                  _this6.account = subGroupAccount === _this6.mSubGroupAccount.cashPayment ? _this6.accounts[0] : _this6.account;
                }, 100);
                _context19.next = 13;
                break;

              case 10:
                _context19.prev = 10;
                _context19.t0 = _context19["catch"](1);
                _utils_alert_js__WEBPACK_IMPORTED_MODULE_10__["default"].errorFetchDataAlert();

              case 13:
              case "end":
                return _context19.stop();
            }
          }
        }, _callee19, this, [[1, 10]]);
      }));

      function getAccount(_x6, _x7) {
        return _getAccount.apply(this, arguments);
      }

      return getAccount;
    }(),
    getExchangeRate: function () {
      var _getExchangeRate = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee20() {
        var params, _ref13, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee20$(_context20) {
          while (1) {
            switch (_context20.prev = _context20.next) {
              case 0:
                params = {
                  code: this.vTransaction.currency_code
                };
                _context20.prev = 1;
                _context20.next = 4;
                return transactionResource.exchangeRate(params);

              case 4:
                _ref13 = _context20.sent;
                data = _ref13.data;
                this.vTransaction.exchange_rate = data;
                this.vTransaction.amount = this.vTransaction.amount_foreign * this.vTransaction.exchange_rate;
                _context20.next = 13;
                break;

              case 10:
                _context20.prev = 10;
                _context20.t0 = _context20["catch"](1);
                _utils_alert_js__WEBPACK_IMPORTED_MODULE_10__["default"].errorFetchDataAlert();

              case 13:
              case "end":
                return _context20.stop();
            }
          }
        }, _callee20, this, [[1, 10]]);
      }));

      function getExchangeRate() {
        return _getExchangeRate.apply(this, arguments);
      }

      return getExchangeRate;
    }(),
    getLookup: function () {
      var _getLookup = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee21() {
        var _ref14, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee21$(_context21) {
          while (1) {
            switch (_context21.prev = _context21.next) {
              case 0:
                _context21.prev = 0;
                _context21.next = 3;
                return transactionResource.lookup();

              case 3:
                _ref14 = _context21.sent;
                data = _ref14.data;
                this.dataLookup = data;
                this.$vs.loading.close('.popup-body>.con-vs-loading');
                this.$vs.loading.close('#layout--main>.con-vs-loading');
                _context21.next = 14;
                break;

              case 10:
                _context21.prev = 10;
                _context21.t0 = _context21["catch"](0);
                _utils_alert_js__WEBPACK_IMPORTED_MODULE_10__["default"].errorFetchDataAlert();
                this.$vs.loading.close('#layout--main>.con-vs-loading');

              case 14:
              case "end":
                return _context21.stop();
            }
          }
        }, _callee21, this, [[0, 10]]);
      }));

      function getLookup() {
        return _getLookup.apply(this, arguments);
      }

      return getLookup;
    }(),
    trackingDeposit: function () {
      var _trackingDeposit = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee22(val) {
        var _ref15, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee22$(_context22) {
          while (1) {
            switch (_context22.prev = _context22.next) {
              case 0:
                _context22.prev = 0;
                _context22.next = 3;
                return transactionResource.list(val.id_log);

              case 3:
                _ref15 = _context22.sent;
                data = _ref15.data;
                this.dataTracking = data.modelGrid;
                this.showInputForm = true;
                this.$vs.loading.close('.popup-body>.con-vs-loading');
                _context22.next = 14;
                break;

              case 10:
                _context22.prev = 10;
                _context22.t0 = _context22["catch"](0);
                this.$vs.loading.close('.popup-body>.con-vs-loading');
                _utils_alert_js__WEBPACK_IMPORTED_MODULE_10__["default"].errorFetchDataAlert();

              case 14:
              case "end":
                return _context22.stop();
            }
          }
        }, _callee22, this, [[0, 10]]);
      }));

      function trackingDeposit(_x8) {
        return _trackingDeposit.apply(this, arguments);
      }

      return trackingDeposit;
    }(),
    insertPayment: function () {
      var _insertPayment = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee23() {
        var _ref16, data, message;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee23$(_context23) {
          while (1) {
            switch (_context23.prev = _context23.next) {
              case 0:
                this.vTransaction.form = this.form;
                _context23.prev = 1;
                _context23.next = 4;
                return transactionResource.payment(this.vTransaction);

              case 4:
                _ref16 = _context23.sent;
                data = _ref16.data;

                if (data == 0) {
                  _utils_alert_js__WEBPACK_IMPORTED_MODULE_10__["default"].acceptAlertSucces();
                } else if (data > 0 && this.form == this.mFormType.guestInHouse) {
                  this.statusDialog(this.$t('message.statusInsertGuestInHouseTransaction.' + data));
                } else if (data > 0 && this.form == this.mFormType.folioHistory) {
                  this.statusDialog(this.$t('message.statusInsertFolioHistoryTransaction.' + data));
                }

                this.showInputForm = false;
                this.$vs.loading.close('#layout--main>.con-vs-loading');
                _context23.next = 17;
                break;

              case 11:
                _context23.prev = 11;
                _context23.t0 = _context23["catch"](1);
                message = _context23.t0.response.data.errors;
                this.dbErrors = message == undefined ? '' : message;
                this.$vs.loading.close('#layout--main>.con-vs-loading');
                _utils_alert_js__WEBPACK_IMPORTED_MODULE_10__["default"].errorSaveDataAlert(message);

              case 17:
              case "end":
                return _context23.stop();
            }
          }
        }, _callee23, this, [[1, 11]]);
      }));

      function insertPayment() {
        return _insertPayment.apply(this, arguments);
      }

      return insertPayment;
    }(),
    insertCharge: function () {
      var _insertCharge = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee24() {
        var _ref17, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee24$(_context24) {
          while (1) {
            switch (_context24.prev = _context24.next) {
              case 0:
                _context24.prev = 0;
                this.vTransaction.form = this.form;
                _context24.next = 4;
                return transactionResource.charge(this.vTransaction);

              case 4:
                _ref17 = _context24.sent;
                data = _ref17.data;

                if (data == 0) {
                  _utils_alert_js__WEBPACK_IMPORTED_MODULE_10__["default"].acceptAlertSucces();
                } else if (data > 0 && this.form == this.mFormType.guestInHouse) {
                  this.statusDialog(this.$t('message.statusInsertGuestInHouseTransaction.' + data));
                } else if (data > 0 && this.form == this.mFormType.folioHistory) {
                  this.statusDialog(this.$t('message.statusInsertFolioHistoryTransaction.' + data));
                }

                this.showInputForm = false;
                this.$vs.loading.close('#layout--main>.con-vs-loading');
                _context24.next = 15;
                break;

              case 11:
                _context24.prev = 11;
                _context24.t0 = _context24["catch"](0);
                this.$vs.loading.close('#layout--main>.con-vs-loading');
                _utils_alert_js__WEBPACK_IMPORTED_MODULE_10__["default"].errorSaveDataAlert();

              case 15:
              case "end":
                return _context24.stop();
            }
          }
        }, _callee24, this, [[0, 11]]);
      }));

      function insertCharge() {
        return _insertCharge.apply(this, arguments);
      }

      return insertCharge;
    }(),
    statusDialog: function statusDialog(text) {
      var _this7 = this;

      this.$vs.dialog({
        color: 'danger',
        title: this.$t('message.informationTitle'),
        text: text,
        acceptText: 'OK',
        accept: function accept() {
          return _this7.$router.go(-1);
        }
      });
    },
    resetTransaction: function resetTransaction(subGroupAccount) {
      var _this8 = this;

      this.vTransaction = {
        folio_number: this.stayInformations.number,
        room_number: this.stayInformations.room_number,
        currency_code: this.defaultCurrency,
        default_currency_code: this.defaultCurrency,
        exchange_rate: 1,
        sub_department_code: this.sdFrontOffice,
        amount_foreign: 0,
        amount: 0,
        charge_percent: 0,
        charge_amount: 0,
        total_amount: 0,
        sub_folio: 'A',
        audit_date: this.auditDate,
        user_id: this.userInfo.code
      };
      this.btnSaveDisabled = false;
      this.resetOptionsChange = false;
      this.account = subGroupAccount == this.mSubGroupAccount.cashPayment ? {
        code: "200",
        charge_percent: null,
        name: "200 - Cash"
      } : '';
      this.vDirectBill = null;
      this.isRefund = false;
      this.$validator.pause();
      this.$nextTick(function () {
        _this8.$validator.errors.clear();

        _this8.$validator.fields.items.forEach(function (field) {
          return field.reset();
        });

        _this8.$validator.fields.items.forEach(function (field) {
          return _this8.errors.remove(field);
        });

        _this8.$validator.resume();
      });
      this.dbErrors = {};
    },
    getTotalAmount: function getTotalAmount() {
      var chargePercent = this.vTransaction.charge_percent >= 0 ? this.vTransaction.charge_percent : 0;
      this.vTransaction.amount = this.vTransaction.amount_foreign * this.vTransaction.exchange_rate;
      this.vTransaction.charge_amount = this.vTransaction.amount_foreign * chargePercent / 100;
      this.vTransaction.total_amount = this.vTransaction.charge_amount + this.vTransaction.amount_foreign;
    },
    handleSaveForm1: function () {
      var _handleSaveForm = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee25() {
        var _this9 = this;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee25$(_context25) {
          while (1) {
            switch (_context25.prev = _context25.next) {
              case 0:
                this.$validator.validateAll(this.form1).then(function (result) {
                  if (result) {
                    if (_this9.isRefund === true && _this9.vTransaction.amount_foreign > _this9.balance) {
                      _this9.$vs.dialog({
                        color: 'success',
                        title: _this9.$t('message.informationTitle'),
                        text: 'Max refund ' + Object(_utils_format_js__WEBPACK_IMPORTED_MODULE_14__["formatNumberValue"])(_this9.balance),
                        accept: function accept() {
                          _this9.vTransaction.amount_foreign = _this9.balance, _this9.getTotalAmount();
                        }
                      });

                      return;
                    }

                    _this9.btnSaveDisabled = true;

                    _this9.$vs.loading({
                      container: '#layout--main',
                      scale: _this9.scaleLoadingMainLayout
                    });

                    if (_this9.groupAccount === _this9.mGroupAccount.payment) {
                      _this9.insertPayment();
                    } else if (_this9.groupAccount === _this9.mGroupAccount.charge) {
                      _this9.insertCharge();
                    }
                  } else {
                    _this9.showInputForm = true;
                  }
                });

              case 1:
              case "end":
                return _context25.stop();
            }
          }
        }, _callee25, this);
      }));

      function handleSaveForm1() {
        return _handleSaveForm.apply(this, arguments);
      }

      return handleSaveForm1;
    }(),
    handlePostingRoomCharge: function handlePostingRoomCharge() {
      _utils_dialog_js__WEBPACK_IMPORTED_MODULE_11__["default"].confirmation(this, 'autoPostingRoomCharge');
    },
    autoPostingRoomCharge: function () {
      var _autoPostingRoomCharge = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee26() {
        var params, _ref18, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee26$(_context26) {
          while (1) {
            switch (_context26.prev = _context26.next) {
              case 0:
                params = {
                  folio_number: this.stayInformations.number,
                  user_id: this.userInfo.code
                };
                _context26.prev = 1;
                this.$vs.loading({
                  container: '#layout--main',
                  scale: this.scaleLoadingMainLayout
                });
                _context26.next = 5;
                return guestInHouseResource.autoRoomCharge(params);

              case 5:
                _ref18 = _context26.sent;
                data = _ref18.data;

                if (data >= 0) {
                  _utils_dialog_js__WEBPACK_IMPORTED_MODULE_11__["default"].information(this.$t('message.statusPostingRoomCharge.' + data));
                }

                this.$vs.loading.close('#layout--main>.con-vs-loading');
                this.getTransactionList();
                _context26.next = 16;
                break;

              case 12:
                _context26.prev = 12;
                _context26.t0 = _context26["catch"](1);
                _utils_alert_js__WEBPACK_IMPORTED_MODULE_10__["default"].errorSaveDataAlert();
                this.$vs.loading.close('#layout--main>.con-vs-loading');

              case 16:
              case "end":
                return _context26.stop();
            }
          }
        }, _callee26, this, [[1, 12]]);
      }));

      function autoPostingRoomCharge() {
        return _autoPostingRoomCharge.apply(this, arguments);
      }

      return autoPostingRoomCharge;
    }(),
    //---------------------END CRUD DEPOSIT/CHARGE---------------------------//
    handleSidebarOption: function handleSidebarOption(data) {
      this.idLog = data.id_log;
      this.paramsData = data;
      this.sidebarOption = true;
    },
    handleCheckOut: function () {
      var _handleCheckOut = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee27() {
        var _this10 = this;

        var balance;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee27$(_context27) {
          while (1) {
            switch (_context27.prev = _context27.next) {
              case 0:
                _context27.next = 2;
                return this.getBalance();

              case 2:
                balance = this.balanceAmount;

                if (balance == 'null' || balance == null) {
                  this.$vs.dialog({
                    type: 'confirm',
                    color: 'warning',
                    title: this.$t('message.informationTitle'),
                    text: this.$t('message.checkOutWithoutTransaction'),
                    acceptText: this.$t('message.yes'),
                    cancelText: this.$t('message.no'),
                    accept: function accept() {
                      _this10.checkOut();
                    }
                  });
                } else if (balance < 0 || balance > 0) {
                  _utils_dialog_js__WEBPACK_IMPORTED_MODULE_11__["default"].information(this.$t('message.cannotCheckFolioUnbalance'));
                } else if (balance == 0) {
                  _utils_dialog_js__WEBPACK_IMPORTED_MODULE_11__["default"].confirmation(this, 'checkOut');
                }

              case 4:
              case "end":
                return _context27.stop();
            }
          }
        }, _callee27, this);
      }));

      function handleCheckOut() {
        return _handleCheckOut.apply(this, arguments);
      }

      return handleCheckOut;
    }(),
    checkOut: function () {
      var _checkOut = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee28() {
        var params, _ref19, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee28$(_context28) {
          while (1) {
            switch (_context28.prev = _context28.next) {
              case 0:
                params = {
                  number: this.stayInformations.number,
                  user_id: this.userInfo.code
                };
                this.$vs.loading({
                  container: '#layout--main',
                  scale: this.scaleLoadingMainLayout
                });
                _context28.next = 4;
                return guestInHouseResource.checkOut(params);

              case 4:
                _ref19 = _context28.sent;
                data = _ref19.data;

                if (data.value === 0) {
                  _utils_alert_js__WEBPACK_IMPORTED_MODULE_10__["default"].acceptAlertSuccesWithText(this.$t('message.statusCheckOut.0'));
                  this.$router.go(-1);
                } else if (data.value > 0) {
                  _utils_dialog_js__WEBPACK_IMPORTED_MODULE_11__["default"].information(this.$t('message.statusCheckOut.' + data.value) + "\n" + data.message);
                }

                this.$vs.loading.close('#layout--main>.con-vs-loading');

              case 8:
              case "end":
                return _context28.stop();
            }
          }
        }, _callee28, this);
      }));

      function checkOut() {
        return _checkOut.apply(this, arguments);
      }

      return checkOut;
    }(),
    handleMoveSubFolioGroup: function () {
      var _handleMoveSubFolioGroup = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee29(groupCode) {
        var params, _ref20, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee29$(_context29) {
          while (1) {
            switch (_context29.prev = _context29.next) {
              case 0:
                params = {
                  folio_number: this.stayInformations.number,
                  correction_breakdown: this.paramsData.correction_breakdown,
                  group_code: groupCode,
                  user_id: this.userInfo.code
                };
                this.$vs.loading({
                  container: '#layout--main',
                  scale: this.scaleLoadingMainLayout
                });
                _context29.next = 4;
                return transactionResource.moveSubFolioGroup(params);

              case 4:
                _ref20 = _context29.sent;
                data = _ref20.data;
                this.searchData(this.search);

              case 7:
              case "end":
                return _context29.stop();
            }
          }
        }, _callee29, this);
      }));

      function handleMoveSubFolioGroup(_x9) {
        return _handleMoveSubFolioGroup.apply(this, arguments);
      }

      return handleMoveSubFolioGroup;
    }(),
    //PRINT
    handlePrintFolio: function handlePrintFolio() {
      var newTabReport = this.$router.resolve({
        path: '/report/preview?reportId=' + this.mReportId.folio + '&folioNumber=' + this.stayInformations.number + '&template=' + this.mStimulsoftReportFileDirectory.folio
      });
      window.open(newTabReport.href, '_blank');
    },
    handlePrint: function handlePrint(id, reportDirectory) {
      var newTabReport = this.$router.resolve({
        path: '/report/preview?reportId=' + this.mReportId.receiptFolio + '&subFolioId=' + id + '&template=' + reportDirectory
      });
      window.open(newTabReport.href, '_blank');
    },
    handlePrintReceipt: function handlePrintReceipt(paramsData) {
      if (paramsData !== undefined) {
        if (paramsData.isPayment == "-1") {
          this.handlePrint(paramsData.id_log, this.mStimulsoftReportFileDirectory.receiptFolio);
        } else if (paramsData.isPayment == "0") {
          this.handlePrint(paramsData.id_log, this.mStimulsoftReportFileDirectory.receiptFolioRefund);
        }
      }
    },
    //------------------end need setting manual for crud-----------------//
    //--------------------CREDENTIAL----------------------------------------//
    showCredential: function showCredential(val, isCorrection) {
      this.resetCredential();
      this.paramsData = val;
      this.isCorrection = isCorrection;
      this.activeCredentialPrompt = true;
      this.isCredential = true;
      this.idLog = val.id_log;
      this.credentialTitle = isCorrection ? 'Correction' : 'Void';
      this.specialAccessType = isCorrection ? this.accessSpecialOrder.correctSubFolio : this.accessSpecialOrder.voidSubFolio;
    },
    acceptReason: function acceptReason() {
      this.correctionVoid();
    },
    resetCredential: function resetCredential() {
      this.credential = {
        user: '',
        pass: '',
        reason: ''
      };
    }
  },
  mounted: function mounted() {
    this.gridApi = this.gridOptions.api;
    this.ColumnApi = this.gridOptions.columnApi;
    this.onPageSizeChanged(this.paginationDataPerPage);

    if (this.isDayendClose) {
      if (this.isCheckOut) {
        this.handleCheckOut();
      }
    }
  },
  watch: {
    showTransferForm: function showTransferForm() {
      if (this.showTransferForm == false) {
        this.searchData(this.search);
      }
    },
    showInputForm: function showInputForm() {
      var _this11 = this;

      if (this.showInputForm == false) {
        setTimeout(function () {
          _this11.searchData(_this11.search);
        }, 500);
      }
    },
    account: function account() {
      if (this.account !== null) {
        this.vTransaction.account_code = this.account.code;
        this.vTransaction.charge_percent = this.account.charge_percent;
        this.getTotalAmount();
      }
    },
    selectedAccount: function selectedAccount() {
      if (this.selectedAccount != null) {// this.vTransfer.option = this.mTransfer.transferSelected;
      }
    }
  },
  computed: {
    balance: function balance() {
      if (this.balanceData.balance < 0) {
        return -this.balanceData.balance;
      } else {
        return 0;
      }
    },
    sdFrontOffice: function sdFrontOffice() {
      return this.$store.getters.sdFrontOffice;
    },
    subFolioGroup: function subFolioGroup() {
      return this.$store.state.subFolioGroup;
    },
    auditDate: function auditDate() {
      return this.$store.state.auditLog.auditDate;
    },
    ccAdm: function ccAdm() {
      return this.$store.getters.cCAdmin;
    },
    defaultCurrency: function defaultCurrency() {
      return this.$store.getters.defaultCurrency;
    }
  },
  beforeRouteLeave: function () {
    var _beforeRouteLeave = _asyncToGenerator(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee30(to, from, next) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee30$(_context30) {
        while (1) {
          switch (_context30.prev = _context30.next) {
            case 0:
              if (!(this.showInputForm || this.showPaymentOption || this.showTransferForm)) {
                _context30.next = 5;
                break;
              }

              this.showInputForm = false;
              this.showPaymentOption = false, this.showTransferForm = false, next(false);
              _context30.next = 12;
              break;

            case 5:
              if (!(this.form == this.mFormType.folioHistory)) {
                _context30.next = 11;
                break;
              }

              _context30.next = 8;
              return this.getBalance();

            case 8:
              if (this.balanceAmount > 0 || this.balanceAmount < 0) {
                _utils_dialog_js__WEBPACK_IMPORTED_MODULE_11__["default"].information(this.$t('message.cannotCloseFolioUnbalance'));
                next(false);
              } else {
                next();
              }

              _context30.next = 12;
              break;

            case 11:
              next();

            case 12:
            case "end":
              return _context30.stop();
          }
        }
      }, _callee30, this);
    }));

    function beforeRouteLeave(_x10, _x11, _x12) {
      return _beforeRouteLeave.apply(this, arguments);
    }

    return beforeRouteLeave;
  }()
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/components/transaction/components/FilterHeader.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/components/transaction/components/FilterHeader.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************/
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
    searchDefault: String
  },
  data: function data() {
    return {
      mWalkedIn: true,
      mCheckedIn: true,
      mDeparture: true,
      all: true,
      vPossession: '',
      vTransfered: '',
      vCorrection: '',
      vVoid: '',
      vModelSelectLimitData: 0,
      vModelSearchData: '',
      vModelTextSearchData: '',
      vSubFolio: 'All',
      subFolio: [{
        code: 'All',
        name: 'All Sub Folio'
      }, {
        code: 'A',
        name: 'Sub Folio A'
      }, {
        code: 'B',
        name: 'Sub Folio B'
      }, {
        code: 'C',
        name: 'Sub Folio C'
      }, {
        code: 'D',
        name: 'Sub Folio D'
      }]
    };
  },
  methods: {
    onRefreshData: function onRefreshData() {
      var _this = this;

      var search = {
        searchBy: this.vModelSearchData,
        keyword: this.vModelTextSearchData,
        limit: this.vModelSelectLimitData,
        subFolio: this.vSubFolio,
        possession: this.vPossession,
        transfered: this.vTransfered,
        "void": this.vVoid,
        correction: this.vCorrection
      };
      setTimeout(function () {
        _this.$emit('search', search);
      }, 200);
    },
    selectAll: function selectAll() {
      this.mWalkedIn = this.all ? true : false;
      this.mCheckedIn = this.all ? true : false;
      this.mDeparture = this.all ? true : false;
      this.onRefreshData();
    },
    onEnter: function onEnter() {
      this.onRefreshData();
    }
  },
  beforeMount: function beforeMount() {
    //Assign limit data with variable Global
    this.vModelSearchData = this.searchDefault;
    this.vModelSelectLimitData = this.limitDefaultPageSize; // this.onRefreshData()
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/components/transaction/components/InformationFooter.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/components/transaction/components/InformationFooter.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************/
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
    data: Object
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/components/transaction/components/InformationHeader.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/components/transaction/components/InformationHeader.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    stayInformations: Object
  },
  data: function data() {
    return {
      informations: {
        number: '',
        room_number: '',
        full_name: '',
        adress: '',
        phone1: '',
        group: '',
        guest_type_code: '',
        arrival: '',
        departure: '',
        adult: '',
        room_type_code: '',
        room_rate_amount: '',
        discount_amount: '',
        room_charge: ''
      }
    };
  },
  methods: {},
  beforeMount: function beforeMount() {
    this.value = this.stayInformations == undefined ? this.informations : this.stayInformations;
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/components/transaction/components/NavigationHeader.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/components/transaction/components/NavigationHeader.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    folioType: String,
    isFolioOpen: Boolean
  },
  data: function data() {
    return {};
  },
  methods: {},
  mounted: function mounted() {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/components/transaction/transfer/account/TransferAccount.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/components/transaction/transfer/account/TransferAccount.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************/
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
 // <!------------------additional element---------------------->
//------for format----- //

 // <!------------------end additional element---------------------->

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'TransferAccountTable',
  props: {
    data: Array
  },
  components: {
    'ag-grid-vue': ag_grid_vue__WEBPACK_IMPORTED_MODULE_0__["AgGridVue"]
  },
  data: function data() {
    return {
      //Ag-Grid
      columnDefs: null,
      gridOptions: null,
      gridApi: null,
      columnApi: null,
      rowSelection: null
    };
  },
  beforeMount: function beforeMount() {
    this.gridOptions = {
      rowHeight: this.rowHeightDefault
    }; //------------------need setting manual for column table-----------------//
    // use this.$t("value") for transaltion localization------//
    // see value in @/lang/en.js //

    this.columnDefs = [{
      headerName: this.$t('table.id'),
      field: 'id_log',
      width: 80,
      headerCheckboxSelection: true,
      headerCheckboxSelectionFilteredOnly: true,
      checkboxSelection: true
    }, {
      headerName: this.$t('table.auditDate'),
      field: 'audit_date',
      width: 100
    }, {
      headerName: this.$t('transaction.sf'),
      field: 'group_code',
      width: 70
    }, {
      headerName: this.$t('table.room') + '#',
      field: 'room_number',
      width: 80
    }, {
      headerName: this.$t('table.account'),
      field: 'account'
    }, {
      headerName: this.$t('table.debit'),
      field: 'debit',
      width: 115,
      cellStyle: {
        textAlign: 'right'
      },
      valueFormatter: _utils_format_js__WEBPACK_IMPORTED_MODULE_1__["formatNumber"]
    }, {
      headerName: this.$t('table.credit'),
      field: 'credit',
      width: 115,
      cellStyle: {
        textAlign: 'right'
      },
      valueFormatter: _utils_format_js__WEBPACK_IMPORTED_MODULE_1__["formatNumber"]
    }, {
      headerName: this.$t('table.subDepartment'),
      field: 'sub_department',
      width: 200
    }]; //------------------end need setting manual for column table-----------------//

    this.context = {
      componentParent: this
    };
    this.frameworkComponents = {};
    this.paginationPageSize = this.limitDefaultPageSize;
    this.rowSelection = 'multiple';
    this.rowModelType = 'serverSide';
  },
  methods: {
    onGridReady: function onGridReady() {},
    getSelectedRow: function getSelectedRow() {
      var array = this.gridApi.getSelectedRows();
      var selected = array.map(function (result) {
        return result.correction_breakdown;
      });
      this.$emit('selected', selected);
    },
    selectAll: function selectAll() {
      this.gridApi.selectAll();
    },
    deselectAll: function deselectAll() {
      this.gridApi.deselectAll();
    }
  },
  mounted: function mounted() {
    this.gridApi = this.gridOptions.api;
    this.gridColumnApi = this.gridOptions.columnApi;
  },
  watch: {},
  computed: {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/components/transaction/transfer/return/ReturnTransfer.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/components/transaction/transfer/return/ReturnTransfer.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var ag_grid_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ag-grid-vue */ "./node_modules/ag-grid-vue/main.js");
/* harmony import */ var ag_grid_vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(ag_grid_vue__WEBPACK_IMPORTED_MODULE_0__);
//
//
//
//
//
//
//
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
  name: 'ReturnTransferTable',
  props: {
    data: Array
  },
  components: {
    'ag-grid-vue': ag_grid_vue__WEBPACK_IMPORTED_MODULE_0__["AgGridVue"]
  },
  data: function data() {
    return {
      //Ag-Grid
      columnDefs: null,
      gridOptions: null,
      gridApi: null,
      columnApi: null,
      rowSelection: null
    };
  },
  beforeMount: function beforeMount() {
    this.gridOptions = {
      rowHeight: this.rowHeightDefault
    }; //------------------need setting manual for column table-----------------//
    // use this.$t("value") for transaltion localization------//
    // see value in @/lang/en.js //

    this.columnDefs = [{
      headerName: this.$t('table.folioNumber'),
      field: 'folio',
      width: 150,
      headerCheckboxSelection: true,
      headerCheckboxSelectionFilteredOnly: true,
      checkboxSelection: true
    }, {
      headerName: this.$t('table.roomNumber'),
      field: 'room_number',
      width: 150
    }, {
      headerName: this.$t('table.fullName'),
      field: 'full_name',
      width: 300
    }]; //------------------end need setting manual for column table-----------------//

    this.context = {
      componentParent: this
    };
    this.frameworkComponents = {};
    this.paginationPageSize = this.limitDefaultPageSize;
    this.rowSelection = 'multiple';
    this.rowModelType = 'serverSide';
  },
  methods: {
    onGridReady: function onGridReady() {},
    getSelectedRow: function getSelectedRow() {
      var array = this.gridApi.getSelectedRows();
      var selected = array.map(function (result) {
        return result.folio;
      });
      this.$emit('selected', selected);
    },
    selectAll: function selectAll() {
      this.gridApi.selectAll();
    },
    deselectAll: function deselectAll() {
      this.gridApi.deselectAll();
    }
  },
  mounted: function mounted() {
    this.gridApi = this.gridOptions.api;
    this.gridColumnApi = this.gridOptions.columnApi;
    this.selectAll();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/components/transaction/transfer/routing/AutomaticRouting.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/components/transaction/transfer/routing/AutomaticRouting.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var ag_grid_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ag-grid-vue */ "./node_modules/ag-grid-vue/main.js");
/* harmony import */ var ag_grid_vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(ag_grid_vue__WEBPACK_IMPORTED_MODULE_0__);
//
//
//
//
//
//
//
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
  name: 'AutomaticRoutingTable',
  props: {
    data: Array
  },
  components: {
    'ag-grid-vue': ag_grid_vue__WEBPACK_IMPORTED_MODULE_0__["AgGridVue"]
  },
  data: function data() {
    return {
      //Ag-Grid
      columnDefs: null,
      gridOptions: null,
      gridApi: null,
      columnApi: null,
      rowSelection: null
    };
  },
  beforeMount: function beforeMount() {
    this.gridOptions = {
      rowHeight: this.rowHeightDefault
    }; //------------------need setting manual for column table-----------------//
    // use this.$t("value") for transaltion localization------//
    // see value in @/lang/en.js //

    this.columnDefs = [{
      headerName: this.$t('table.id'),
      field: 'code',
      width: 80,
      headerCheckboxSelection: true,
      headerCheckboxSelectionFilteredOnly: true,
      checkboxSelection: true
    }, {
      headerName: this.$t('table.account'),
      field: 'account',
      width: 250
    }, {
      headerName: this.$t('transaction.folio'),
      field: 'folio',
      width: 250
    }, {
      headerName: this.$t('transaction.sf'),
      field: 'sub_folio',
      width: 80
    }]; //------------------end need setting manual for column table-----------------//

    this.context = {
      componentParent: this
    };
    this.frameworkComponents = {};
    this.paginationPageSize = this.limitDefaultPageSize;
    this.rowSelection = 'multiple';
    this.rowModelType = 'serverSide';
  },
  methods: {
    onGridReady: function onGridReady() {},
    getSelectedRow: function getSelectedRow() {
      var array = this.gridApi.getSelectedRows();
      var selected = array.map(function (result) {
        return result.id_log;
      });
      this.$emit('selected', selected);
    }
  },
  mounted: function mounted() {
    this.gridApi = this.gridOptions.api;
    this.gridColumnApi = this.gridOptions.columnApi;
  },
  watch: {},
  computed: {}
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/components/transaction/Transaction.vue?vue&type=style&index=0&lang=scss&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/components/transaction/Transaction.vue?vue&type=style&index=0&lang=scss& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".form_deposit_charge.two_column.con-vs-popup .vs-popup {\n  width: auto;\n}\n@media only screen and (min-width: 600px) {\n.form_deposit_charge.two_column.con-vs-popup .vs-popup div.content-left {\n    border-right: 1px dashed #c5c5c5;\n    padding-right: 10px;\n    width: 450px;\n}\n.form_deposit_charge.two_column.con-vs-popup .vs-popup .vs-col.content-right {\n    padding-left: 10px;\n    width: 450px;\n}\n.form_deposit_charge.two_column.con-vs-popup .vs-popup .vs-divider.divider-title {\n    margin: 0px;\n}\n}\n.form_deposit_charge.two_column.con-vs-popup .vs-popup #transaction {\n  width: 450px;\n}\n.form_deposit_charge.two_column.con-vs-popup .vs-popup #expDate .vs__dropdown-menu {\n  min-width: 30px;\n}\n.form_deposit_charge.two_column.con-vs-popup .vs-popup .form_deposit_charge .vs-popup {\n  width: auto;\n}\n.form_deposit_charge.two_column.con-vs-popup .vs-popup .form_deposit_charge .vs-popup .form-content {\n  width: 450px;\n}\n@media only screen and (min-width: 600px) {\n.form_deposit_charge.two_column.con-vs-popup .vs-popup .form_deposit_charge .vs-popup div.content-left {\n    border-right: 1px dashed #c5c5c5;\n    padding-right: 10px;\n    width: 450px;\n}\n.form_deposit_charge.two_column.con-vs-popup .vs-popup .form_deposit_charge .vs-popup .vs-col.content-right {\n    padding-left: 10px;\n    width: 450px;\n}\n.form_deposit_charge.two_column.con-vs-popup .vs-popup .form_deposit_charge .vs-popup .vs-divider.divider-title {\n    margin: 0px;\n}\n}\n.form_deposit_charge.two_column.con-vs-dialog .vs-dialog {\n  width: auto;\n}\n@media only screen and (min-width: 600px) {\n.form_deposit_charge.two_column.con-vs-dialog .vs-dialog {\n    max-width: 950px;\n}\n.form_deposit_charge.two_column.con-vs-dialog .vs-dialog div.content-left {\n    border-right: 1px dashed #c5c5c5;\n    padding-right: 10px;\n    width: 450px;\n}\n.form_deposit_charge.two_column.con-vs-dialog .vs-dialog .vs-col.content-right {\n    padding-left: 10px;\n    width: 450px;\n}\n.form_deposit_charge.two_column.con-vs-dialog .vs-dialog .vs-divider.divider-title {\n    margin: 0px;\n}\n}\n.form_deposit_charge.two_column.con-vs-dialog .vs-dialog #transaction {\n  width: 450px;\n}\n.form_deposit_charge.two_column.con-vs-dialog .vs-dialog #expDate .vs__dropdown-menu {\n  min-width: 30px;\n}\n.form_deposit_charge .vs-popup {\n  width: auto;\n}\n.form_deposit_charge .vs-popup .form-content {\n  width: 450px;\n}\n.form_deposit_charge .vs-popup .form-content .sub-folio {\n  font-size: 0.8rem;\n}\n.form_deposit_charge .vs-popup .vs-popup--content {\n  overflow: auto;\n}\n@media only screen and (min-width: 600px) {\n.form_deposit_charge .vs-popup div.content-left {\n    border-right: 1px dashed #c5c5c5;\n    padding-right: 10px;\n    width: 450px;\n}\n.form_deposit_charge .vs-popup .vs-col.content-right {\n    padding-left: 10px;\n    width: 450px;\n}\n.form_deposit_charge .vs-popup .vs-divider.divider-title {\n    margin: 0px;\n}\n}\n.form_deposit_charge .vs-popup #expDate .vs__dropdown-menu {\n  min-width: 30px;\n}\n.form_deposit_charge .vs-dialog {\n  width: auto;\n}\n.form_deposit_charge .vs-dialog .form-content {\n  width: 450px;\n}\n.form_deposit_charge .vs-dialog .form-content .sub-folio {\n  font-size: 0.8rem;\n}\n.form_deposit_charge .vs-dialog .vs-dialog-text {\n  overflow: auto;\n}\n@media only screen and (min-width: 600px) {\n.form_deposit_charge .vs-dialog {\n    max-width: 950px;\n}\n.form_deposit_charge .vs-dialog div.content-left {\n    border-right: 1px dashed #c5c5c5;\n    padding-right: 10px;\n    width: 450px;\n}\n.form_deposit_charge .vs-dialog .vs-col.content-right {\n    padding-left: 10px;\n    width: 450px;\n}\n.form_deposit_charge .vs-dialog .vs-divider.divider-title {\n    margin: 0px;\n}\n}\n.form_deposit_charge .vs-dialog #expDate .vs__dropdown-menu {\n  min-width: 30px;\n}\n.payment-option .vs-dialog {\n  width: 400px;\n}\n.payment-option .box .vs-button:not(.vs-radius):not(.includeIconOnly):not(.small):not(.large) {\n  width: 170px;\n}\n@media screen and (min-width: 600px) {\n.payment-option .box #row1 {\n    margin-bottom: 15px;\n}\n.payment-option .box .button1 {\n    margin-left: 20px !important;\n}\n.payment-option .box .button2 {\n    margin-left: 15px !important;\n}\n.payment-option .box .button3 {\n    margin-left: 20px !important;\n}\n.payment-option .box .button4 {\n    margin-left: 15px !important;\n}\n}\n@media screen and (max-width: 579px) {\n.payment-option .box #card {\n    margin-top: 5px;\n}\n.payment-option .box #direct-bill {\n    margin-top: 5px;\n}\n.payment-option .box #other-payment {\n    margin-top: 5px;\n}\n}\n.transfer .sub-folio .vs__dropdown-menu {\n  min-width: 30px;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/components/transaction/Transaction.vue?vue&type=style&index=1&lang=scss&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/components/transaction/Transaction.vue?vue&type=style&index=1&lang=scss& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".ag-theme-balham .correction {\n  background-color: yellow;\n}\n.ag-theme-balham .void {\n  background-color: #ff6868;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/components/transaction/Transaction.vue?vue&type=style&index=2&lang=scss&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/components/transaction/Transaction.vue?vue&type=style&index=2&lang=scss& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".btn-bottom {\n  bottom: 0;\n  margin-top: 11px;\n}\n.payment-option span.vs-button-text.vs-button--text {\n  display: flex !important;\n  justify-content: center;\n}\n.payment-option span.vs-button-text.vs-button--text img {\n  margin-right: 5px;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/components/transaction/components/NavigationHeader.vue?vue&type=style&index=0&scope=true&lang=scss&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/components/transaction/components/NavigationHeader.vue?vue&type=style&index=0&scope=true&lang=scss& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@media only screen and (min-width: 900px) {\n.navigation-header .navigation-transaction {\n    display: flex;\n    justify-content: flex-end;\n}\n.navigation-header #btn {\n    width: 135px !important;\n    margin-right: 10px;\n}\n.navigation-header #btn-last {\n    width: 135px !important;\n    margin-right: 0px;\n}\n.navigation-header .navigation-transaction {\n    width: 85%;\n}\n.navigation-header .navigation-back {\n    width: 15%;\n}\n}\n@media only screen and (max-width: 899px) {\n.navigation-header #btn {\n    margin-bottom: 5px;\n}\n}\n.navigation-header button.btn-left-drop {\n  margin: 0px !important;\n  border-radius: 5px 0px 0px 5px;\n  width: calc(100% - 38px) !important;\n}\n.navigation-header button.btn-drop {\n  border-radius: 0px 5px 5px 0px;\n  border-left: 1px solid rgba(255, 255, 255, 0.2);\n}\n.navigation-header .examplex {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.navigation-header .dropdown {\n  cursor: pointer;\n}\n.navigation-header span.vs-button-text.vs-button--text {\n  display: flex !important;\n  justify-content: center;\n}\n.navigation-header span.vs-button-text.vs-button--text img {\n  margin-right: 5px;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/components/transaction/Transaction.vue?vue&type=style&index=0&lang=scss&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/components/transaction/Transaction.vue?vue&type=style&index=0&lang=scss& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../node_modules/css-loader!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Transaction.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/components/transaction/Transaction.vue?vue&type=style&index=0&lang=scss&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/components/transaction/Transaction.vue?vue&type=style&index=1&lang=scss&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/components/transaction/Transaction.vue?vue&type=style&index=1&lang=scss& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../node_modules/css-loader!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Transaction.vue?vue&type=style&index=1&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/components/transaction/Transaction.vue?vue&type=style&index=1&lang=scss&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/components/transaction/Transaction.vue?vue&type=style&index=2&lang=scss&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/components/transaction/Transaction.vue?vue&type=style&index=2&lang=scss& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../node_modules/css-loader!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Transaction.vue?vue&type=style&index=2&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/components/transaction/Transaction.vue?vue&type=style&index=2&lang=scss&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/components/transaction/components/NavigationHeader.vue?vue&type=style&index=0&scope=true&lang=scss&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/components/transaction/components/NavigationHeader.vue?vue&type=style&index=0&scope=true&lang=scss& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../../node_modules/css-loader!../../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./NavigationHeader.vue?vue&type=style&index=0&scope=true&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/components/transaction/components/NavigationHeader.vue?vue&type=style&index=0&scope=true&lang=scss&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/components/transaction/Transaction.vue?vue&type=template&id=2d5146c9&":
/*!******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/components/transaction/Transaction.vue?vue&type=template&id=2d5146c9& ***!
  \******************************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "transaction" },
    [
      _c("navigation-header", {
        attrs: { folioType: _vm.nFolioType, isFolioOpen: _vm.isFolioOpen },
        on: {
          charge: function($event) {
            _vm.showForm(
              null,
              _vm.mGroupAccount.charge,
              _vm.$t("transaction.title.charge")
            )
          },
          roomCharge: function($event) {
            return _vm.handlePostingRoomCharge()
          },
          apTransaction: function($event) {
            _vm.showForm(
              [_vm.mSubGroupAccount.accountPayable],
              _vm.mGroupAccount.charge,
              _vm.$t("transaction.title.charge")
            )
          },
          payment: function($event) {
            _vm.btnPaymentOptionDisabled = false
            _vm.showPaymentOption = true
          },
          refund: function($event) {
            _vm.showForm(
              [_vm.mSubGroupAccount.cashPayment],
              _vm.mGroupAccount.payment,
              _vm.$t("transaction.title.cashRefund"),
              true
            )
          },
          transfer: function($event) {
            return _vm.handleTransfer()
          },
          checkOut: function($event) {
            return _vm.handleCheckOut()
          },
          back: function($event) {
            return _vm.handleBackButton()
          },
          printFolio: function($event) {
            return _vm.handlePrintFolio()
          }
        }
      }),
      _vm._v(" "),
      _c("information-header", {
        attrs: { stayInformations: _vm.stayInformations }
      }),
      _vm._v(" "),
      _c("filter-header", {
        ref: "filterHeader",
        attrs: {
          searchOption: _vm.searchOption,
          searchDefault: _vm.searchDefault
        },
        on: { search: _vm.searchData }
      }),
      _vm._v(" "),
      _c(
        "vx-card",
        {
          staticClass: "vs-con-loading__container mb-1",
          attrs: { id: "main-container" }
        },
        [
          _c("ag-grid-vue", {
            ref: "mainContainer",
            class: _vm.themeAgGrid,
            style: _vm.StyleAgGridFrame2,
            attrs: {
              pagination: "true",
              paginationPageSize: _vm.paginationPageSize,
              suppressDragLeaveHidesColumns: true,
              suppressMakeColumnVisibleAfterUnGroup: true,
              rowGroupPanelShow: _vm.rowGroupPanelShow,
              enableRangeSelection: false,
              statusBar: _vm.statusBar,
              gridOptions: _vm.gridOptions,
              context: _vm.context,
              columnDefs: _vm.columnDefs,
              frameworkComponents: _vm.frameworkComponents,
              enableCellChangeFlash: true,
              rowSelection: _vm.rowSelection,
              rowData: _vm.listTransaction,
              defaultColDef: _vm.defColDef,
              getContextMenuItems: _vm.getContextMenu,
              rowClassRules: _vm.rowClassRules
            },
            on: {
              "grid-ready": _vm.onGridReady,
              cellContextMenu: _vm.handleRowRightClicked
            }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c("information-footer", { attrs: { data: _vm.balanceData } }),
      _vm._v(" "),
      _c(
        "vs-prompt",
        {
          staticClass: "form_deposit_charge two-column",
          attrs: {
            type: _vm.dialog.typeDialog,
            "buttons-hidden": "",
            active: _vm.showInputForm,
            title: _vm.titleInputForm
          },
          on: {
            "update:active": function($event) {
              _vm.showInputForm = $event
            }
          }
        },
        [
          _c(
            "div",
            { staticClass: "popup-body" },
            [
              _c(
                "div",
                {
                  ref: "form",
                  staticStyle: { padding: "20px", "padding-top": "0px" }
                },
                [
                  _c(
                    "vs-row",
                    [
                      _c(
                        "div",
                        {
                          staticClass: "form-content",
                          class: {
                            "content-left vs-lg-6 vs-xs-12":
                              _vm.subGroupAccount ==
                              _vm.mSubGroupAccount.creditOrDebitCard
                          }
                        },
                        [
                          _c(
                            "vs-row",
                            {
                              staticClass: "sub-folio",
                              attrs: {
                                "vs-type": "flex",
                                "vs-justify": "space-between"
                              }
                            },
                            [
                              _c("div", { staticClass: "form-check-inline" }, [
                                _c(
                                  "label",
                                  {
                                    staticClass: "form-check-label",
                                    attrs: { for: "radio1" }
                                  },
                                  [
                                    _c("input", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: _vm.vTransaction.sub_folio,
                                          expression: "vTransaction.sub_folio"
                                        }
                                      ],
                                      staticClass: "form-check-input",
                                      attrs: {
                                        type: "radio",
                                        id: "radio1",
                                        name: "optradio",
                                        value: "A"
                                      },
                                      domProps: {
                                        checked: _vm._q(
                                          _vm.vTransaction.sub_folio,
                                          "A"
                                        )
                                      },
                                      on: {
                                        change: function($event) {
                                          return _vm.$set(
                                            _vm.vTransaction,
                                            "sub_folio",
                                            "A"
                                          )
                                        }
                                      }
                                    }),
                                    _vm._v(
                                      "Sub Folio A\n                                        "
                                    )
                                  ]
                                )
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "form-check-inline" }, [
                                _c(
                                  "label",
                                  {
                                    staticClass: "form-check-label",
                                    attrs: { for: "radio2" }
                                  },
                                  [
                                    _c("input", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: _vm.vTransaction.sub_folio,
                                          expression: "vTransaction.sub_folio"
                                        }
                                      ],
                                      staticClass: "form-check-input",
                                      attrs: {
                                        type: "radio",
                                        id: "radio2",
                                        name: "optradio",
                                        value: "B"
                                      },
                                      domProps: {
                                        checked: _vm._q(
                                          _vm.vTransaction.sub_folio,
                                          "B"
                                        )
                                      },
                                      on: {
                                        change: function($event) {
                                          return _vm.$set(
                                            _vm.vTransaction,
                                            "sub_folio",
                                            "B"
                                          )
                                        }
                                      }
                                    }),
                                    _vm._v(
                                      "Sub Folio B\n                                        "
                                    )
                                  ]
                                )
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "form-check-inline" }, [
                                _c(
                                  "label",
                                  { staticClass: "form-check-label" },
                                  [
                                    _c("input", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: _vm.vTransaction.sub_folio,
                                          expression: "vTransaction.sub_folio"
                                        }
                                      ],
                                      staticClass: "form-check-input",
                                      attrs: {
                                        type: "radio",
                                        id: "radio3",
                                        name: "optradio",
                                        value: "C"
                                      },
                                      domProps: {
                                        checked: _vm._q(
                                          _vm.vTransaction.sub_folio,
                                          "C"
                                        )
                                      },
                                      on: {
                                        change: function($event) {
                                          return _vm.$set(
                                            _vm.vTransaction,
                                            "sub_folio",
                                            "C"
                                          )
                                        }
                                      }
                                    }),
                                    _vm._v(
                                      "Sub Folio C\n                                        "
                                    )
                                  ]
                                )
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "form-check-inline" }, [
                                _c(
                                  "label",
                                  { staticClass: "form-check-label" },
                                  [
                                    _c("input", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: _vm.vTransaction.sub_folio,
                                          expression: "vTransaction.sub_folio"
                                        }
                                      ],
                                      staticClass: "form-check-input",
                                      attrs: {
                                        type: "radio",
                                        id: "radio4",
                                        name: "optradio",
                                        value: "D"
                                      },
                                      domProps: {
                                        checked: _vm._q(
                                          _vm.vTransaction.sub_folio,
                                          "D"
                                        )
                                      },
                                      on: {
                                        change: function($event) {
                                          return _vm.$set(
                                            _vm.vTransaction,
                                            "sub_folio",
                                            "D"
                                          )
                                        }
                                      }
                                    }),
                                    _vm._v(
                                      "Sub Folio D\n                                        "
                                    )
                                  ]
                                )
                              ])
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
                                      _vm._s(_vm.$t("transaction.currency"))
                                    )
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
                                            value: "required",
                                            expression: "'required'"
                                          }
                                        ],
                                        staticClass: "w-full height150",
                                        attrs: {
                                          id: "form-select",
                                          clearable: false,
                                          placeholder: _vm.$t("table.select"),
                                          label: "code",
                                          reduce: function(value) {
                                            return value.code
                                          },
                                          options: _vm.dataLookup.currency,
                                          name: "currency",
                                          "data-vv-scope": _vm.form1
                                        },
                                        on: {
                                          input: function($event) {
                                            _vm.getExchangeRate()
                                            _vm.getAccount()
                                          }
                                        },
                                        model: {
                                          value: _vm.vTransaction.currency_code,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.vTransaction,
                                              "currency_code",
                                              $$v
                                            )
                                          },
                                          expression:
                                            "vTransaction.currency_code"
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
                                                "deposit.currency"
                                              ),
                                              expression:
                                                "errors.has('deposit.currency')"
                                            }
                                          ],
                                          staticClass: "error-text text-danger"
                                        },
                                        [
                                          _vm._v(
                                            _vm._s(
                                              _vm.errors.first(
                                                "deposit.currency"
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
                              _c("input-number", {
                                directives: [
                                  {
                                    name: "validate",
                                    rawName: "v-validate",
                                    value: "required",
                                    expression: "'required'"
                                  }
                                ],
                                staticClass: "w-full md:w-1/2",
                                attrs: {
                                  disabled: "",
                                  label: _vm.$t("transaction.excRate"),
                                  placeholder: _vm.$t("transaction.excRate"),
                                  description: _vm._f("toString")(
                                    _vm.errors.first(_vm.form1 + ".exc.rate") ||
                                      _vm.dbErrors.exchange_rate
                                  ),
                                  name: "exc.rate",
                                  "data-vv-scope": _vm.form1
                                },
                                model: {
                                  value: _vm.vTransaction.exchange_rate,
                                  callback: function($$v) {
                                    _vm.$set(
                                      _vm.vTransaction,
                                      "exchange_rate",
                                      $$v
                                    )
                                  },
                                  expression: "vTransaction.exchange_rate"
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
                                        _vm.$t("transaction.subDepartment")
                                      )
                                    )
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
                                            value: "required",
                                            expression: "'required'"
                                          }
                                        ],
                                        staticClass: "w-full height150",
                                        attrs: {
                                          id: "form-select",
                                          clearable: false,
                                          placeholder: _vm.$t("table.select"),
                                          label: "name",
                                          reduce: function(value) {
                                            return value.code
                                          },
                                          options:
                                            _vm.dataLookup.sub_department,
                                          name: "sub department",
                                          "data-vv-scope": _vm.form1
                                        },
                                        on: {
                                          input: function($event) {
                                            _vm.getAccount()
                                            _vm.resetOptionsChange = true
                                          }
                                        },
                                        model: {
                                          value:
                                            _vm.vTransaction
                                              .sub_department_code,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.vTransaction,
                                              "sub_department_code",
                                              $$v
                                            )
                                          },
                                          expression:
                                            "vTransaction.sub_department_code"
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
                                                _vm.form1 + ".sub department"
                                              ),
                                              expression:
                                                "errors.has(form1+'.sub department')"
                                            }
                                          ],
                                          staticClass: "error-text text-danger"
                                        },
                                        [
                                          _vm._v(
                                            _vm._s(
                                              _vm.errors.first(
                                                _vm.form1 + ".sub department"
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
                                      _vm._s(_vm.$t("transaction.account"))
                                    )
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
                                            value: "required",
                                            expression: "'required'"
                                          }
                                        ],
                                        staticClass: "w-full height150",
                                        attrs: {
                                          id: "form-select",
                                          resetOnOptionsChange:
                                            _vm.resetOptionsChange,
                                          placeholder: _vm.$t("table.select"),
                                          clearable: false,
                                          label: "name",
                                          options: _vm.accounts,
                                          name: "account",
                                          "data-vv-scope": _vm.form1
                                        },
                                        model: {
                                          value: _vm.account,
                                          callback: function($$v) {
                                            _vm.account = $$v
                                          },
                                          expression: "account"
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
                                                _vm.form1 + ".account"
                                              ),
                                              expression:
                                                "errors.has(form1+'.account')"
                                            }
                                          ],
                                          staticClass: "error-text text-danger"
                                        },
                                        [
                                          _vm._v(
                                            _vm._s(
                                              _vm.errors.first(
                                                _vm.form1 + ".account"
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
                              _c("input-number", {
                                directives: [
                                  {
                                    name: "validate",
                                    rawName: "v-validate",
                                    value: "required|min:2",
                                    expression: "'required|min:2'"
                                  }
                                ],
                                staticClass: "w-full md:w-1/2",
                                attrs: {
                                  label:
                                    _vm.$t("transaction.amount") +
                                    " " +
                                    _vm.vTransaction.currency_code,
                                  placeholder: _vm.$t("table.amount"),
                                  description: _vm._f("toString")(
                                    _vm.errors.first(_vm.form1 + ".amount") ||
                                      _vm.dbErrors.quantity
                                  ),
                                  name: "amount",
                                  "data-vv-scope": _vm.form1
                                },
                                on: {
                                  input: function($event) {
                                    return _vm.getTotalAmount()
                                  }
                                },
                                model: {
                                  value: _vm.vTransaction.amount_foreign,
                                  callback: function($$v) {
                                    _vm.$set(
                                      _vm.vTransaction,
                                      "amount_foreign",
                                      $$v
                                    )
                                  },
                                  expression: "vTransaction.amount_foreign"
                                }
                              }),
                              _vm._v(" "),
                              _c("input-number", {
                                staticClass: "w-full md:w-1/2",
                                attrs: {
                                  disabled: "",
                                  label:
                                    _vm.$t("transaction.amount") +
                                    " " +
                                    _vm.defaultCurrency,
                                  placeholder: _vm.$t("table.amount")
                                },
                                model: {
                                  value: _vm.vTransaction.amount,
                                  callback: function($$v) {
                                    _vm.$set(_vm.vTransaction, "amount", $$v)
                                  },
                                  expression: "vTransaction.amount"
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _vm.subGroupAccount ==
                            _vm.mSubGroupAccount.accountReceiveable ||
                          _vm.subGroupAccount ==
                            _vm.mSubGroupAccount.accountPayable
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
                                  _c(
                                    "div",
                                    { staticClass: "wrap-form-select w-full" },
                                    [
                                      _vm.subGroupAccount ==
                                      _vm.mSubGroupAccount.accountReceiveable
                                        ? _c("vs-row", [
                                            _vm._v(
                                              _vm._s(
                                                _vm.$t("transaction.directBill")
                                              )
                                            )
                                          ])
                                        : _c("vs-row", [
                                            _vm._v(
                                              _vm._s(_vm.$t("table.company"))
                                            )
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
                                                value: _vm.reqDirectBill,
                                                expression: "reqDirectBill"
                                              }
                                            ],
                                            staticClass: "w-full height100",
                                            attrs: {
                                              id: "form-select",
                                              clearable: false,
                                              placeholder: _vm.$t(
                                                "table.select"
                                              ),
                                              label: "name",
                                              options:
                                                _vm.dataLookup.direct_bill,
                                              name: "company",
                                              "data-vv-scope": _vm.form1
                                            },
                                            on: {
                                              input: function($event) {
                                                _vm.vArLimit =
                                                  _vm.vDirectBill.ar_limit
                                                _vm.vTransaction.direct_bill_code =
                                                  _vm.vDirectBill.code
                                              }
                                            },
                                            model: {
                                              value: _vm.vDirectBill,
                                              callback: function($$v) {
                                                _vm.vDirectBill = $$v
                                              },
                                              expression: "vDirectBill"
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
                                                    _vm.form1 + ".company"
                                                  ),
                                                  expression:
                                                    "errors.has(form1+'.company')"
                                                }
                                              ],
                                              staticClass:
                                                "error-text text-danger"
                                            },
                                            [
                                              _vm._v(
                                                _vm._s(
                                                  _vm.errors.first(
                                                    _vm.form1 + ".company"
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
                              )
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.subGroupAccount ==
                          _vm.mSubGroupAccount.accountReceiveable
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
                                  _c("input-number", {
                                    staticClass: "w-full md:w-1/2",
                                    attrs: {
                                      disabled: "",
                                      label: _vm.$t("transaction.outstanding")
                                    },
                                    model: {
                                      value: _vm.vOutstanding,
                                      callback: function($$v) {
                                        _vm.vOutstanding = $$v
                                      },
                                      expression: "vOutstanding"
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c("input-number", {
                                    staticClass: "w-full md:w-1/2",
                                    attrs: {
                                      disabled: "",
                                      label: _vm.$t("transaction.arLimit")
                                    },
                                    model: {
                                      value: _vm.vArLimit,
                                      callback: function($$v) {
                                        _vm.vArLimit = $$v
                                      },
                                      expression: "vArLimit"
                                    }
                                  })
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
                              _c("vs-input", {
                                staticClass: "w-full",
                                attrs: {
                                  label: _vm.$t("transaction.remark"),
                                  placeholder: _vm.$t("transaction.remark"),
                                  maxLength: 50
                                },
                                model: {
                                  value: _vm.vTransaction.remark,
                                  callback: function($$v) {
                                    _vm.$set(_vm.vTransaction, "remark", $$v)
                                  },
                                  expression: "vTransaction.remark"
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _vm.subGroupAccount !=
                            _vm.mSubGroupAccount.accountReceiveable &&
                          _vm.subGroupAccount !=
                            _vm.mSubGroupAccount.accountPayable
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
                                    directives: [
                                      {
                                        name: "validate",
                                        rawName: "v-validate",
                                        value: _vm.reqDocNumber,
                                        expression: "reqDocNumber"
                                      }
                                    ],
                                    staticClass: "w-full",
                                    attrs: {
                                      label: _vm.$t("transaction.docNumber"),
                                      placeholder: _vm.$t(
                                        "transaction.docNumber"
                                      ),
                                      maxLength: 50,
                                      description: _vm.errors.first(
                                        _vm.form1 + ".doc number"
                                      ),
                                      name: "doc number",
                                      "data-vv-scope": _vm.form1
                                    },
                                    model: {
                                      value: _vm.vTransaction.document_number,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.vTransaction,
                                          "document_number",
                                          $$v
                                        )
                                      },
                                      expression: "vTransaction.document_number"
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
                                            _vm.form1 + ".doc number"
                                          ),
                                          expression:
                                            "errors.has(form1+'.doc number')"
                                        }
                                      ],
                                      staticClass: "error-text text-danger"
                                    },
                                    [
                                      _vm._v(
                                        _vm._s(
                                          _vm.errors.first(
                                            _vm.form1 + ".doc number"
                                          )
                                        )
                                      )
                                    ]
                                  )
                                ],
                                1
                              )
                            : _vm._e()
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _vm.subGroupAccount ==
                      _vm.mSubGroupAccount.creditOrDebitCard
                        ? _c(
                            "vs-col",
                            {
                              staticClass: "content-right",
                              attrs: { "vs-lg": "6", "vs-xs": "12" }
                            },
                            [
                              _c(
                                "h4",
                                { staticStyle: { "margin-bottom": "5px" } },
                                [_vm._v("Card Information")]
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
                                          _vm._s(_vm.$t("transaction.cardType"))
                                        )
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
                                                value: _vm.reqCard,
                                                expression: "reqCard"
                                              }
                                            ],
                                            staticClass: "w-full height250",
                                            attrs: {
                                              id: "form-select",
                                              clearable: false,
                                              placeholder: _vm.$t(
                                                "table.select"
                                              ),
                                              label: "name",
                                              reduce: function(value) {
                                                return value.code
                                              },
                                              options: _vm.dataLookup.card_bank,
                                              name: "card bank",
                                              "data-vv-scope": _vm.form1
                                            },
                                            model: {
                                              value:
                                                _vm.vTransaction.card_bank_code,
                                              callback: function($$v) {
                                                _vm.$set(
                                                  _vm.vTransaction,
                                                  "card_bank_code",
                                                  $$v
                                                )
                                              },
                                              expression:
                                                "vTransaction.card_bank_code"
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
                                                    _vm.form1 + ".card bank"
                                                  ),
                                                  expression:
                                                    "errors.has(form1+'.card bank')"
                                                }
                                              ],
                                              staticClass:
                                                "error-text text-danger"
                                            },
                                            [
                                              _vm._v(
                                                _vm._s(
                                                  _vm.errors.first(
                                                    _vm.form1 + ".card bank"
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
                                      _c("vs-row", [_vm._v(".")]),
                                      _vm._v(" "),
                                      _c(
                                        "vs-row",
                                        [
                                          _c("v-select", {
                                            directives: [
                                              {
                                                name: "validate",
                                                rawName: "v-validate",
                                                value: _vm.reqCard,
                                                expression: "reqCard"
                                              }
                                            ],
                                            staticClass: "w-full",
                                            attrs: {
                                              id: "form-select",
                                              placeholder: _vm.$t(
                                                "table.select"
                                              ),
                                              clearable: false,
                                              reduce: function(value) {
                                                return value.code
                                              },
                                              label: "name",
                                              options: _vm.dataLookup.card_type,
                                              name: "card type",
                                              "data-vv-scope": _vm.form1
                                            },
                                            model: {
                                              value:
                                                _vm.vTransaction.card_type_code,
                                              callback: function($$v) {
                                                _vm.$set(
                                                  _vm.vTransaction,
                                                  "card_type_code",
                                                  $$v
                                                )
                                              },
                                              expression:
                                                "vTransaction.card_type_code"
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
                                                    _vm.form1 + ".card type"
                                                  ),
                                                  expression:
                                                    "errors.has(form1+'.card type')"
                                                }
                                              ],
                                              staticClass:
                                                "error-text text-danger"
                                            },
                                            [
                                              _vm._v(
                                                _vm._s(
                                                  _vm.errors.first(
                                                    _vm.form1 + ".card type"
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
                                  _c("vs-input", {
                                    staticClass: "w-full",
                                    attrs: {
                                      label: _vm.$t("transaction.cardNumber"),
                                      placeholder: _vm.$t(
                                        "transaction.cardNumber"
                                      ),
                                      maxLength: 50
                                    },
                                    model: {
                                      value: _vm.vTransaction.card_number,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.vTransaction,
                                          "card_number",
                                          $$v
                                        )
                                      },
                                      expression: "vTransaction.card_number"
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
                                      label: _vm.$t("transaction.cardHolder"),
                                      placeholder: _vm.$t(
                                        "transaction.cardHolder"
                                      ),
                                      maxLength: 50
                                    },
                                    model: {
                                      value: _vm.vTransaction.holder,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.vTransaction,
                                          "holder",
                                          $$v
                                        )
                                      },
                                      expression: "vTransaction.holder"
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
                                            _vm.$t("transaction.expirationDate")
                                          )
                                        )
                                      ]),
                                      _vm._v(" "),
                                      _c(
                                        "vs-row",
                                        [
                                          _c(
                                            "vs-col",
                                            { attrs: { "vs-lg": "6" } },
                                            [
                                              _c("v-select", {
                                                staticClass: "w-full height200",
                                                attrs: {
                                                  id: "expDate",
                                                  placeholder: "MM",
                                                  clearable: false,
                                                  options: _vm.mt
                                                },
                                                model: {
                                                  value:
                                                    _vm.vTransaction.exp_month,
                                                  callback: function($$v) {
                                                    _vm.$set(
                                                      _vm.vTransaction,
                                                      "exp_month",
                                                      $$v
                                                    )
                                                  },
                                                  expression:
                                                    "vTransaction.exp_month"
                                                }
                                              })
                                            ],
                                            1
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "vs-col",
                                            { attrs: { "vs-lg": "6" } },
                                            [
                                              _c("v-select", {
                                                staticClass: "w-full height200",
                                                attrs: {
                                                  id: "expDate",
                                                  placeholder: "YY",
                                                  clearable: false,
                                                  options: _vm.yr
                                                },
                                                model: {
                                                  value:
                                                    _vm.vTransaction.exp_year,
                                                  callback: function($$v) {
                                                    _vm.$set(
                                                      _vm.vTransaction,
                                                      "exp_year",
                                                      $$v
                                                    )
                                                  },
                                                  expression:
                                                    "vTransaction.exp_year"
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
                                    directives: [
                                      {
                                        name: "validate",
                                        rawName: "v-validate",
                                        value: "required",
                                        expression: "'required'"
                                      }
                                    ],
                                    staticClass: "w-full md:w-1/2",
                                    attrs: {
                                      label:
                                        _vm.$t("transaction.charge") + " (%)",
                                      placeholder: _vm.$t("table.amount"),
                                      description: _vm._f("toString")(
                                        _vm.errors.first(
                                          _vm.form1 + ".amount"
                                        ) || _vm.dbErrors.quantity
                                      ),
                                      name: "amount",
                                      "data-vv-scope": _vm.form1
                                    },
                                    on: { input: _vm.getTotalAmount },
                                    model: {
                                      value: _vm.vTransaction.charge_percent,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.vTransaction,
                                          "charge_percent",
                                          $$v
                                        )
                                      },
                                      expression: "vTransaction.charge_percent"
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c("input-number", {
                                    directives: [
                                      {
                                        name: "validate",
                                        rawName: "v-validate",
                                        value: "required",
                                        expression: "'required'"
                                      }
                                    ],
                                    staticClass: "w-full md:w-1/2",
                                    attrs: {
                                      disabled: "",
                                      label: ".",
                                      placeholder: _vm.$t("table.amount"),
                                      description: _vm._f("toString")(
                                        _vm.errors.first(
                                          _vm.form1 + ".amount"
                                        ) || _vm.dbErrors.amount
                                      ),
                                      name: "amount",
                                      "data-vv-scope": _vm.form1
                                    },
                                    model: {
                                      value: _vm.vTransaction.charge_amount,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.vTransaction,
                                          "charge_amount",
                                          $$v
                                        )
                                      },
                                      expression: "vTransaction.charge_amount"
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
                                      disabled: "",
                                      label: _vm.$t("transaction.totalAmount"),
                                      placeholder: _vm.$t("table.amount"),
                                      description: _vm._f("toString")(
                                        _vm.errors.first(
                                          _vm.form1 + ".amount"
                                        ) || _vm.dbErrors.quantity
                                      ),
                                      name: "amount",
                                      "data-vv-scope": _vm.form1
                                    },
                                    model: {
                                      value: _vm.vTransaction.total_amount,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.vTransaction,
                                          "total_amount",
                                          $$v
                                        )
                                      },
                                      expression: "vTransaction.total_amount"
                                    }
                                  })
                                ],
                                1
                              )
                            ],
                            1
                          )
                        : _vm._e()
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "vs-row",
                { staticClass: "mt-6" },
                [
                  _c(
                    "vs-col",
                    {
                      staticClass: "w-full flex",
                      attrs: { "vs-justify": "flex-end" }
                    },
                    [
                      _c(
                        "vs-button",
                        {
                          staticClass: "vs-con-loading__container",
                          attrs: {
                            disabled: _vm.btnSaveDisabled,
                            id: "button-save-form1",
                            icon: "save",
                            color: "primary"
                          },
                          on: {
                            click: function($event) {
                              return _vm.handleSaveForm1()
                            }
                          }
                        },
                        [_vm._v(_vm._s(_vm.$t("table.save")))]
                      ),
                      _vm._v(" "),
                      _c(
                        "vs-button",
                        {
                          staticClass: "ml-2",
                          attrs: { icon: "close", color: "grey" },
                          on: {
                            click: function($event) {
                              _vm.showInputForm = false
                            }
                          }
                        },
                        [_vm._v(_vm._s(_vm.$t("table.close")))]
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
        ]
      ),
      _vm._v(" "),
      _c(
        "vs-prompt",
        {
          staticClass: "payment-option",
          attrs: {
            "buttons-hidden": "",
            active: _vm.showPaymentOption,
            title: _vm.$t("transaction.title.paymentOption")
          },
          on: {
            "update:active": function($event) {
              _vm.showPaymentOption = $event
            }
          }
        },
        [
          _c(
            "div",
            { staticClass: "box" },
            [
              _c(
                "vs-row",
                {
                  attrs: {
                    id: "row1",
                    "vs-type": "flex",
                    "vs-justify": "flex-start"
                  }
                },
                [
                  _c(
                    "vs-col",
                    {
                      staticClass: "button1",
                      attrs: {
                        id: "cash",
                        "vs-type": "flex",
                        "vs-lg": "5",
                        "vs-sm": "5",
                        "vs-xs": "12"
                      }
                    },
                    [
                      _c(
                        "vs-button",
                        {
                          staticClass: "w-full",
                          attrs: {
                            disabled: _vm.btnPaymentOptionDisabled,
                            type: "border",
                            color: "success"
                          },
                          on: {
                            click: function($event) {
                              _vm.showForm(
                                [_vm.mSubGroupAccount.cashPayment],
                                _vm.mGroupAccount.payment,
                                _vm.$t("transaction.title.cashPayment")
                              )
                            }
                          }
                        },
                        [
                          _c("img", {
                            staticClass: "mr-1",
                            attrs: {
                              border: "0",
                              width: "16",
                              height: "16",
                              src: "/images/icons/cash_icon24.png"
                            }
                          }),
                          _vm._v(_vm._s(_vm.$t("transaction.button.cash")))
                        ]
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "vs-col",
                    {
                      staticClass: "button2",
                      attrs: {
                        id: "card",
                        "vs-type": "flex",
                        "vs-lg": "5",
                        "vs-sm": "5",
                        "vs-xs": "12"
                      }
                    },
                    [
                      _c(
                        "vs-button",
                        {
                          staticClass: "w-full",
                          attrs: {
                            disabled: _vm.btnPaymentOptionDisabled,
                            type: "border"
                          },
                          on: {
                            click: function($event) {
                              _vm.showForm(
                                [_vm.mSubGroupAccount.creditOrDebitCard],
                                _vm.mGroupAccount.payment,
                                _vm.$t(
                                  "transaction.title.creditOrDebitCardPayment"
                                )
                              )
                            }
                          }
                        },
                        [
                          _c("img", {
                            staticClass: "mr-1",
                            attrs: {
                              border: "0",
                              width: "16",
                              height: "16",
                              src: "/images/icons/card_icon24.png"
                            }
                          }),
                          _vm._v(_vm._s(_vm.$t("transaction.button.card")))
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
                {
                  attrs: {
                    id: "row2",
                    "vs-type": "flex",
                    "vs-justify": "flex-start"
                  }
                },
                [
                  _c(
                    "vs-col",
                    {
                      staticClass: "button3",
                      attrs: {
                        id: "direct-bill",
                        "vs-type": "flex",
                        "vs-lg": "5",
                        "vs-sm": "5",
                        "vs-xs": "12"
                      }
                    },
                    [
                      _c(
                        "vs-button",
                        {
                          staticClass: "w-full",
                          attrs: {
                            disabled: _vm.btnPaymentOptionDisabled,
                            type: "border"
                          },
                          on: {
                            click: function($event) {
                              _vm.showForm(
                                [_vm.mSubGroupAccount.accountReceiveable],
                                _vm.mGroupAccount.payment,
                                _vm.$t("transaction.title.directBillPayment")
                              )
                            }
                          }
                        },
                        [
                          _c("img", {
                            staticClass: "mr-1",
                            attrs: {
                              border: "0",
                              width: "16",
                              height: "16",
                              src: "/images/icons/direct_bill_icon24.png"
                            }
                          }),
                          _vm._v(
                            _vm._s(_vm.$t("transaction.button.directBill"))
                          )
                        ]
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "vs-col",
                    {
                      staticClass: "button4",
                      attrs: {
                        id: "other-payment",
                        "vs-type": "flex",
                        "vs-lg": "5",
                        "vs-sm": "5",
                        "vs-xs": "12"
                      }
                    },
                    [
                      _c(
                        "vs-button",
                        {
                          staticClass: "w-full",
                          attrs: {
                            disabled: _vm.btnPaymentOptionDisabled,
                            type: "border"
                          },
                          on: {
                            click: function($event) {
                              _vm.showForm(
                                [
                                  _vm.mSubGroupAccount.otherPayment,
                                  _vm.mSubGroupAccount.bankTransfer
                                ],
                                _vm.mGroupAccount.payment,
                                _vm.$t("transaction.title.otherPayment")
                              )
                            }
                          }
                        },
                        [
                          _c("img", {
                            staticClass: "mr-1",
                            attrs: {
                              border: "0",
                              width: "16",
                              height: "16",
                              src: "/images/icons/other_payment_icon24.png"
                            }
                          }),
                          _vm._v(
                            _vm._s(_vm.$t("transaction.button.otherPayment"))
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
        ]
      ),
      _vm._v(" "),
      _c(
        "vs-popup",
        {
          staticClass: "transfer width-800p",
          attrs: {
            active: _vm.showTransferForm,
            title: _vm.$t("transaction.title.transferTransaction")
          },
          on: {
            "update:active": function($event) {
              _vm.showTransferForm = $event
            }
          }
        },
        [
          _c(
            "div",
            { staticClass: "popup-body" },
            [
              _c(
                "vs-tabs",
                { staticClass: "form-content" },
                [
                  _c(
                    "vs-tab",
                    {
                      attrs: {
                        id: "transfer",
                        label: _vm.$t("transaction.transfer")
                      },
                      on: {
                        click: function($event) {
                          _vm.activeTab = 1
                        }
                      }
                    },
                    [
                      _c(
                        "VuePerfectScrollbar",
                        {
                          staticClass: "scroll-area-popup-form pt-2",
                          attrs: { settings: _vm.perfectScrollbarSettings }
                        },
                        [
                          _c(
                            "vs-radio",
                            {
                              attrs: { "vs-value": "account" },
                              model: {
                                value: _vm.tfType,
                                callback: function($$v) {
                                  _vm.tfType = $$v
                                },
                                expression: "tfType"
                              }
                            },
                            [
                              _vm._v(
                                "\n                            Transfer Account\n                        "
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "vs-radio",
                            {
                              attrs: { "vs-value": "balance" },
                              model: {
                                value: _vm.tfType,
                                callback: function($$v) {
                                  _vm.tfType = $$v
                                },
                                expression: "tfType"
                              }
                            },
                            [
                              _vm._v(
                                "\n                            Transfer Balance\n                        "
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "vx-card",
                            [
                              _c(
                                "vs-row",
                                { staticClass: "mb-3" },
                                [
                                  _c(
                                    "vs-col",
                                    {
                                      staticClass: "wrap-form-select",
                                      attrs: {
                                        "vs-type": "flex",
                                        "vs-justify": "center",
                                        "vs-align": "center",
                                        "vs-lg": "2",
                                        "vs-xs": "12"
                                      }
                                    },
                                    [_c("label", [_vm._v("Transfer to :")])]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "vs-col",
                                    {
                                      staticClass: "wrap-form-select",
                                      attrs: { "vs-lg": "3", "vs-xs": "12" }
                                    },
                                    [
                                      _c("label", [_vm._v("Folio Type")]),
                                      _vm._v(" "),
                                      _c(
                                        "vs-row",
                                        [
                                          _c("v-select", {
                                            directives: [
                                              {
                                                name: "validate",
                                                rawName: "v-validate",
                                                value:
                                                  (_vm.vTransfer.option > 1 &&
                                                    _vm.tfType == "account") ||
                                                  _vm.tfType == "balance"
                                                    ? "required"
                                                    : "",
                                                expression:
                                                  "(vTransfer.option > 1 && tfType == 'account') || tfType == 'balance' ? 'required' : ''"
                                              }
                                            ],
                                            staticClass: "w-full height200",
                                            attrs: {
                                              disabled:
                                                _vm.vTransfer.option ==
                                                  _vm.mTransfer.combineAll &&
                                                _vm.tfType == "account",
                                              placeholder: _vm.$t(
                                                "table.select"
                                              ),
                                              clearable: false,
                                              reduce: function(value) {
                                                return value.code
                                              },
                                              label: "name",
                                              options: _vm.folioType,
                                              name: "folio type",
                                              "data-vv-scope": "transfer"
                                            },
                                            on: {
                                              input: function($event) {
                                                return _vm.getFolioList()
                                              }
                                            },
                                            model: {
                                              value: _vm.tfFolioType,
                                              callback: function($$v) {
                                                _vm.tfFolioType = $$v
                                              },
                                              expression: "tfFolioType"
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
                                                    "transfer.folio type"
                                                  ),
                                                  expression:
                                                    "errors.has('transfer.folio type')"
                                                }
                                              ],
                                              staticClass:
                                                "error-text text-danger"
                                            },
                                            [
                                              _vm._v(
                                                _vm._s(
                                                  _vm.errors.first(
                                                    "transfer.folio type"
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
                                    "vs-col",
                                    {
                                      staticClass: "wrap-form-select",
                                      attrs: { "vs-lg": "5", "vs-xs": "12" }
                                    },
                                    [
                                      _c("label", [_vm._v("Folio")]),
                                      _vm._v(" "),
                                      _c(
                                        "vs-row",
                                        [
                                          _c("v-select", {
                                            directives: [
                                              {
                                                name: "validate",
                                                rawName: "v-validate",
                                                value:
                                                  (_vm.vTransfer.option > 1 &&
                                                    _vm.tfType == "account") ||
                                                  _vm.tfType == "balance"
                                                    ? "required"
                                                    : "",
                                                expression:
                                                  "(vTransfer.option > 1 && tfType == 'account') || tfType == 'balance' ? 'required' : ''"
                                              }
                                            ],
                                            staticClass: "w-full height200",
                                            attrs: {
                                              disabled:
                                                _vm.vTransfer.option ==
                                                  _vm.mTransfer.combineAll &&
                                                _vm.tfType == "account",
                                              placeholder: _vm.$t(
                                                "table.select"
                                              ),
                                              clearable: false,
                                              resetOnOptionsChange: true,
                                              reduce: function(value) {
                                                return value.number
                                              },
                                              label: "folio",
                                              options: _vm.listFolio,
                                              name: "folio",
                                              "data-vv-scope": "transfer"
                                            },
                                            model: {
                                              value:
                                                _vm.vTransfer.folio_number_to,
                                              callback: function($$v) {
                                                _vm.$set(
                                                  _vm.vTransfer,
                                                  "folio_number_to",
                                                  $$v
                                                )
                                              },
                                              expression:
                                                "vTransfer.folio_number_to"
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
                                                    "transfer.folio"
                                                  ),
                                                  expression:
                                                    "errors.has('transfer.folio')"
                                                }
                                              ],
                                              staticClass:
                                                "error-text text-danger"
                                            },
                                            [
                                              _vm._v(
                                                _vm._s(
                                                  _vm.errors.first(
                                                    "transfer.folio"
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
                                    "vs-col",
                                    {
                                      staticClass: "wrap-form-select",
                                      attrs: { "vs-lg": "2", "vs-xs": "12" }
                                    },
                                    [
                                      _c("label", [_vm._v("Sub Folio")]),
                                      _vm._v(" "),
                                      _c(
                                        "vs-row",
                                        [
                                          _c("v-select", {
                                            directives: [
                                              {
                                                name: "validate",
                                                rawName: "v-validate",
                                                value: "required",
                                                expression: "'required'"
                                              }
                                            ],
                                            staticClass: "sub-folio w-full",
                                            attrs: {
                                              placeholder: _vm.$t(
                                                "table.select"
                                              ),
                                              clearable: false,
                                              options: _vm.mSubFolioGroup,
                                              name: "sub folio",
                                              "data-vv-scope": "transfer"
                                            },
                                            model: {
                                              value: _vm.vTransfer.group_code,
                                              callback: function($$v) {
                                                _vm.$set(
                                                  _vm.vTransfer,
                                                  "group_code",
                                                  $$v
                                                )
                                              },
                                              expression: "vTransfer.group_code"
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
                                                    "transfer.sub folio"
                                                  ),
                                                  expression:
                                                    "errors.has('transfer.sub folio')"
                                                }
                                              ],
                                              staticClass:
                                                "error-text text-danger"
                                            },
                                            [
                                              _vm._v(
                                                _vm._s(
                                                  _vm.errors.first(
                                                    "transfer.sub folio"
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
                              _c("vs-divider", [_vm._v("Transaction")]),
                              _vm._v(" "),
                              _vm.tfType == "account"
                                ? _c(
                                    "div",
                                    [
                                      _c(
                                        "vs-row",
                                        [
                                          _c(
                                            "vs-radio",
                                            {
                                              attrs: {
                                                "vs-value":
                                                  _vm.mTransfer.combineAll
                                              },
                                              on: {
                                                input: function($event) {
                                                  _vm.$refs.tableAccount.deselectAll()
                                                  _vm.$validator.reset()
                                                  _vm.disabledFolioList = true
                                                }
                                              },
                                              model: {
                                                value: _vm.vTransfer.option,
                                                callback: function($$v) {
                                                  _vm.$set(
                                                    _vm.vTransfer,
                                                    "option",
                                                    $$v
                                                  )
                                                },
                                                expression: "vTransfer.option"
                                              }
                                            },
                                            [
                                              _vm._v(
                                                "\n                                        Combine All Transaction to Sub Folio\n                                    "
                                              )
                                            ]
                                          )
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "vs-row",
                                        [
                                          _c(
                                            "vs-radio",
                                            {
                                              attrs: {
                                                "vs-value":
                                                  _vm.mTransfer.transferAll
                                              },
                                              on: {
                                                input: function($event) {
                                                  _vm.$refs.tableAccount.selectAll()
                                                  _vm.$validator.reset()
                                                }
                                              },
                                              model: {
                                                value: _vm.vTransfer.option,
                                                callback: function($$v) {
                                                  _vm.$set(
                                                    _vm.vTransfer,
                                                    "option",
                                                    $$v
                                                  )
                                                },
                                                expression: "vTransfer.option"
                                              }
                                            },
                                            [
                                              _vm._v(
                                                "\n                                        Move all transaction to another folio\n                                    "
                                              )
                                            ]
                                          )
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "vs-row",
                                        { staticClass: "mb-3" },
                                        [
                                          _c(
                                            "vs-radio",
                                            {
                                              attrs: {
                                                "vs-value":
                                                  _vm.mTransfer.transferSelected
                                              },
                                              on: {
                                                input: function($event) {
                                                  _vm.$refs.tableAccount.deselectAll()
                                                  _vm.$validator.reset()
                                                }
                                              },
                                              model: {
                                                value: _vm.vTransfer.option,
                                                callback: function($$v) {
                                                  _vm.$set(
                                                    _vm.vTransfer,
                                                    "option",
                                                    $$v
                                                  )
                                                },
                                                expression: "vTransfer.option"
                                              }
                                            },
                                            [
                                              _vm._v(
                                                "\n                                        Move selected transaction to another folio\n                                    "
                                              )
                                            ]
                                          )
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c("transfer-account", {
                                        ref: "tableAccount",
                                        attrs: {
                                          data: _vm.listTransferTransaction
                                        },
                                        on: {
                                          selected: function(result) {
                                            return (_vm.selectedAccount = result)
                                          }
                                        }
                                      })
                                    ],
                                    1
                                  )
                                : _c(
                                    "div",
                                    [
                                      _c(
                                        "vs-row",
                                        [
                                          _c(
                                            "vs-radio",
                                            {
                                              attrs: {
                                                disabled: !(
                                                  _vm.balanceData.debit > 0
                                                ),
                                                "vs-value": "charge"
                                              },
                                              on: {
                                                change:
                                                  _vm.handleChangeRadioChargeDeposit
                                              },
                                              model: {
                                                value: _vm.tfBalance,
                                                callback: function($$v) {
                                                  _vm.tfBalance = $$v
                                                },
                                                expression: "tfBalance"
                                              }
                                            },
                                            [
                                              _vm._v(
                                                " " +
                                                  _vm._s(
                                                    _vm.$t("transaction.charge")
                                                  ) +
                                                  " "
                                              )
                                            ]
                                          )
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "vs-row",
                                        { staticClass: "mb-3" },
                                        [
                                          _c(
                                            "vs-radio",
                                            {
                                              attrs: {
                                                disabled: !(
                                                  _vm.balanceData.credit > 0
                                                ),
                                                "vs-value": "deposit"
                                              },
                                              on: {
                                                change:
                                                  _vm.handleChangeRadioChargeDeposit
                                              },
                                              model: {
                                                value: _vm.tfBalance,
                                                callback: function($$v) {
                                                  _vm.tfBalance = $$v
                                                },
                                                expression: "tfBalance"
                                              }
                                            },
                                            [
                                              _vm._v(
                                                " " +
                                                  _vm._s(
                                                    _vm.$t(
                                                      "transaction.deposit"
                                                    )
                                                  ) +
                                                  " "
                                              )
                                            ]
                                          )
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "vs-row",
                                        [
                                          _c("input-number", {
                                            staticClass: "w-full md:w-1/2",
                                            attrs: {
                                              disabled:
                                                !(_vm.balanceData.credit > 0) &&
                                                !(_vm.balanceData.debit > 0),
                                              label: _vm.$t(
                                                "transaction.amountOfBalance"
                                              )
                                            },
                                            model: {
                                              value: _vm.vTransfer.amount,
                                              callback: function($$v) {
                                                _vm.$set(
                                                  _vm.vTransfer,
                                                  "amount",
                                                  $$v
                                                )
                                              },
                                              expression: "vTransfer.amount"
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
                    "vs-tab",
                    {
                      attrs: { label: _vm.$t("transaction.automaticRouting") },
                      on: {
                        click: function($event) {
                          _vm.activeTab = 2
                        }
                      }
                    },
                    [
                      _c(
                        "VuePerfectScrollbar",
                        {
                          staticClass: "scroll-area-popup-form pt-2",
                          attrs: { settings: _vm.perfectScrollbarSettings }
                        },
                        [
                          _c(
                            "vx-card",
                            [
                              _c(
                                "vs-row",
                                [
                                  _c(
                                    "vs-col",
                                    {
                                      staticClass: "wrap-form-select",
                                      attrs: { "vs-lg": "5", "vs-xs": "12" }
                                    },
                                    [
                                      _c("label", [_vm._v("Account")]),
                                      _vm._v(" "),
                                      _c(
                                        "vs-row",
                                        [
                                          _c("v-select", {
                                            directives: [
                                              {
                                                name: "validate",
                                                rawName: "v-validate",
                                                value: "required",
                                                expression: "'required'"
                                              }
                                            ],
                                            staticClass: "w-full height200",
                                            attrs: {
                                              placeholder: _vm.$t(
                                                "table.select"
                                              ),
                                              clearable: false,
                                              reduce: function(value) {
                                                return value.code
                                              },
                                              label: "name",
                                              options: _vm.accounts,
                                              name: "account",
                                              "data-vv-scope": "routing"
                                            },
                                            model: {
                                              value: _vm.vRouting.account_code,
                                              callback: function($$v) {
                                                _vm.$set(
                                                  _vm.vRouting,
                                                  "account_code",
                                                  $$v
                                                )
                                              },
                                              expression:
                                                "vRouting.account_code"
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
                                                    "routing.account"
                                                  ),
                                                  expression:
                                                    "errors.has('routing.account')"
                                                }
                                              ],
                                              staticClass:
                                                "error-text text-danger"
                                            },
                                            [
                                              _vm._v(
                                                _vm._s(
                                                  _vm.errors.first(
                                                    "routing.account"
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
                                { staticClass: "mb-3" },
                                [
                                  _c(
                                    "vs-col",
                                    {
                                      staticClass: "wrap-form-select",
                                      attrs: { "vs-lg": "3", "vs-xs": "12" }
                                    },
                                    [
                                      _c("label", [_vm._v("Folio Type")]),
                                      _vm._v(" "),
                                      _c(
                                        "vs-row",
                                        [
                                          _c("v-select", {
                                            directives: [
                                              {
                                                name: "validate",
                                                rawName: "v-validate",
                                                value: "required",
                                                expression: "'required'"
                                              }
                                            ],
                                            staticClass: "w-full height200",
                                            attrs: {
                                              placeholder: _vm.$t(
                                                "table.select"
                                              ),
                                              clearable: false,
                                              reduce: function(value) {
                                                return value.code
                                              },
                                              label: "name",
                                              options: _vm.folioType,
                                              name: "folio type",
                                              "data-vv-scope": "routing"
                                            },
                                            on: {
                                              input: function($event) {
                                                return _vm.getFolioList()
                                              }
                                            },
                                            model: {
                                              value: _vm.tfFolioType,
                                              callback: function($$v) {
                                                _vm.tfFolioType = $$v
                                              },
                                              expression: "tfFolioType"
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
                                                    "routing.folio type"
                                                  ),
                                                  expression:
                                                    "errors.has('routing.folio type')"
                                                }
                                              ],
                                              staticClass:
                                                "error-text text-danger"
                                            },
                                            [
                                              _vm._v(
                                                _vm._s(
                                                  _vm.errors.first(
                                                    "routing.folio type"
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
                                    "vs-col",
                                    {
                                      staticClass: "wrap-form-select",
                                      attrs: { "vs-lg": "6", "vs-xs": "12" }
                                    },
                                    [
                                      _c("label", [_vm._v("Folio")]),
                                      _vm._v(" "),
                                      _c(
                                        "vs-row",
                                        [
                                          _c("v-select", {
                                            directives: [
                                              {
                                                name: "validate",
                                                rawName: "v-validate",
                                                value: "required",
                                                expression: "'required'"
                                              }
                                            ],
                                            staticClass: "w-full height200",
                                            attrs: {
                                              placeholder: _vm.$t(
                                                "table.select"
                                              ),
                                              clearable: false,
                                              resetOnOptionsChange: true,
                                              reduce: function(value) {
                                                return value.number
                                              },
                                              label: "folio",
                                              options: _vm.listFolio,
                                              name: "folio",
                                              "data-vv-scope": "routing"
                                            },
                                            model: {
                                              value:
                                                _vm.vRouting.folio_transfer,
                                              callback: function($$v) {
                                                _vm.$set(
                                                  _vm.vRouting,
                                                  "folio_transfer",
                                                  $$v
                                                )
                                              },
                                              expression:
                                                "vRouting.folio_transfer"
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
                                                    "routing.folio"
                                                  ),
                                                  expression:
                                                    "errors.has('routing.folio')"
                                                }
                                              ],
                                              staticClass:
                                                "error-text text-danger"
                                            },
                                            [
                                              _vm._v(
                                                _vm._s(
                                                  _vm.errors.first(
                                                    "routing.folio"
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
                                    "vs-col",
                                    {
                                      staticClass: "wrap-form-select",
                                      attrs: { "vs-lg": "2", "vs-xs": "12" }
                                    },
                                    [
                                      _c("label", [_vm._v("Sub Folio")]),
                                      _vm._v(" "),
                                      _c(
                                        "vs-row",
                                        [
                                          _c("v-select", {
                                            directives: [
                                              {
                                                name: "validate",
                                                rawName: "v-validate",
                                                value: "required",
                                                expression: "'required'"
                                              }
                                            ],
                                            staticClass: "sub-folio w-full",
                                            attrs: {
                                              placeholder: _vm.$t(
                                                "table.select"
                                              ),
                                              clearable: false,
                                              options: _vm.mSubFolioGroup,
                                              name: "sub folio",
                                              "data-vv-scope": "routing"
                                            },
                                            model: {
                                              value: _vm.vRouting.sub_folio,
                                              callback: function($$v) {
                                                _vm.$set(
                                                  _vm.vRouting,
                                                  "sub_folio",
                                                  $$v
                                                )
                                              },
                                              expression: "vRouting.sub_folio"
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
                                                    "routing.sub folio"
                                                  ),
                                                  expression:
                                                    "errors.has('routing.sub folio')"
                                                }
                                              ],
                                              staticClass:
                                                "error-text text-danger"
                                            },
                                            [
                                              _vm._v(
                                                _vm._s(
                                                  _vm.errors.first(
                                                    "routing.sub folio"
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
                                    "vs-col",
                                    {
                                      staticClass: "wrap-form-select",
                                      attrs: { "vs-lg": "1", "vs-xs": "12" }
                                    },
                                    [
                                      _c("vs-button", {
                                        staticClass:
                                          "w-full btn-bottom vs-con-loading__container",
                                        attrs: {
                                          id: "btn-add-routing",
                                          icon: "add",
                                          color: "success"
                                        },
                                        on: {
                                          click: function($event) {
                                            return _vm.handleInsertRouting()
                                          }
                                        }
                                      })
                                    ],
                                    1
                                  )
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c("automatic-routing", {
                                attrs: { data: _vm.listRouting },
                                on: {
                                  selected: function(value) {
                                    return (_vm.vRouting.selected = value)
                                  }
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
                    "vs-tab",
                    {
                      attrs: { label: _vm.$t("transaction.returnTransfer") },
                      on: {
                        click: function($event) {
                          _vm.activeTab = 3
                        }
                      }
                    },
                    [
                      _c(
                        "VuePerfectScrollbar",
                        {
                          staticClass: "scroll-area-popup-form pt-2",
                          attrs: { settings: _vm.perfectScrollbarSettings }
                        },
                        [
                          _c(
                            "vx-card",
                            [
                              _c(
                                "vs-row",
                                { staticClass: "mb-3" },
                                [
                                  _c(
                                    "vs-col",
                                    {
                                      staticClass: "wrap-form-select",
                                      attrs: {
                                        "vs-type": "flex",
                                        "vs-justify": "center",
                                        "vs-align": "center",
                                        "vs-lg": "2",
                                        "vs-xs": "12"
                                      }
                                    },
                                    [_c("label", [_vm._v("Return to :")])]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "vs-col",
                                    {
                                      staticClass: "wrap-form-select",
                                      attrs: { "vs-lg": "2", "vs-xs": "12" }
                                    },
                                    [
                                      _c("label", [_vm._v("Sub Folio")]),
                                      _vm._v(" "),
                                      _c(
                                        "vs-row",
                                        [
                                          _c("v-select", {
                                            directives: [
                                              {
                                                name: "validate",
                                                rawName: "v-validate",
                                                value: "required",
                                                expression: "'required'"
                                              }
                                            ],
                                            staticClass: "sub-folio w-full",
                                            attrs: {
                                              placeholder: _vm.$t(
                                                "table.select"
                                              ),
                                              clearable: false,
                                              options: _vm.mSubFolioGroup,
                                              name: "sub folio",
                                              "data-vv-scope": "return"
                                            },
                                            model: {
                                              value: _vm.vReturn.sub_folio,
                                              callback: function($$v) {
                                                _vm.$set(
                                                  _vm.vReturn,
                                                  "sub_folio",
                                                  $$v
                                                )
                                              },
                                              expression: "vReturn.sub_folio"
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
                                                    "return.sub folio"
                                                  ),
                                                  expression:
                                                    "errors.has('return.sub folio')"
                                                }
                                              ],
                                              staticClass:
                                                "error-text text-danger"
                                            },
                                            [
                                              _vm._v(
                                                _vm._s(
                                                  _vm.errors.first(
                                                    "return.sub folio"
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
                              _c("return-transfer", {
                                attrs: { data: _vm.listReturnTransfer },
                                on: {
                                  selected: function(value) {
                                    return (_vm.vReturn.selected = value)
                                  }
                                }
                              }),
                              _vm._v(" "),
                              _c("vs-divider", [_vm._v("Option")]),
                              _vm._v(" "),
                              _c(
                                "vs-row",
                                [
                                  _c(
                                    "vs-radio",
                                    {
                                      attrs: { "vs-value": "1" },
                                      model: {
                                        value: _vm.vReturn.type,
                                        callback: function($$v) {
                                          _vm.$set(_vm.vReturn, "type", $$v)
                                        },
                                        expression: "vReturn.type"
                                      }
                                    },
                                    [
                                      _vm._v(
                                        "\n                                        Return Transaction\n                                    "
                                      )
                                    ]
                                  )
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "vs-row",
                                [
                                  _c(
                                    "vs-radio",
                                    {
                                      attrs: { "vs-value": "2" },
                                      model: {
                                        value: _vm.vReturn.type,
                                        callback: function($$v) {
                                          _vm.$set(_vm.vReturn, "type", $$v)
                                        },
                                        expression: "vReturn.type"
                                      }
                                    },
                                    [
                                      _vm._v(
                                        "\n                                        Remove auto routing from another folio\n                                    "
                                      )
                                    ]
                                  )
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "vs-row",
                                [
                                  _c(
                                    "vs-radio",
                                    {
                                      attrs: { "vs-value": "3" },
                                      model: {
                                        value: _vm.vReturn.type,
                                        callback: function($$v) {
                                          _vm.$set(_vm.vReturn, "type", $$v)
                                        },
                                        expression: "vReturn.type"
                                      }
                                    },
                                    [
                                      _vm._v(
                                        "\n                                        Return transaction & Remove auto routing from another folio\n                                    "
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
                ],
                1
              )
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
                { attrs: { "vs-type": "flex", "vs-justify": "space-between" } },
                [
                  _vm.activeTab == 1
                    ? _c(
                        "vs-button",
                        {
                          staticClass: "vs-con-loading__container w-full",
                          attrs: { id: "btn-transfer" },
                          on: {
                            click: function($event) {
                              return _vm.handleProcessTransfer()
                            }
                          }
                        },
                        [
                          _vm._v(
                            _vm._s(_vm.$t("transaction.button.processTransfer"))
                          )
                        ]
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.activeTab == 3
                    ? _c(
                        "vs-button",
                        {
                          staticClass: "vs-con-loading__container w-full",
                          attrs: { id: "btn-return" },
                          on: {
                            click: function($event) {
                              return _vm.handleReturnTransfer()
                            }
                          }
                        },
                        [
                          _vm._v(
                            _vm._s(_vm.$t("transaction.button.processReturn"))
                          )
                        ]
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _c(
                    "vs-col",
                    { attrs: { "vs-lg": "4", "vs-xs": "12" } },
                    [
                      _vm.activeTab == 2
                        ? _c(
                            "vs-button",
                            {
                              staticClass: "vs-con-loading__container w-full",
                              attrs: { id: "btn-transfer" },
                              on: {
                                click: function($event) {
                                  return _vm.handleRemoveRouting(1)
                                }
                              }
                            },
                            [
                              _vm._v(
                                _vm._s(
                                  _vm.$t("transaction.button.removeRouting")
                                )
                              )
                            ]
                          )
                        : _vm._e()
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "vs-col",
                    { attrs: { "vs-lg": "4", "vs-xs": "12" } },
                    [
                      _vm.activeTab == 2
                        ? _c(
                            "vs-button",
                            {
                              staticClass: "vs-con-loading__container w-full",
                              attrs: { id: "btn-transfer" },
                              on: {
                                click: function($event) {
                                  return _vm.handleRemoveRouting(2)
                                }
                              }
                            },
                            [
                              _vm._v(
                                _vm._s(
                                  _vm.$t(
                                    "transaction.button.removeSelectedRouting"
                                  )
                                )
                              )
                            ]
                          )
                        : _vm._e()
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "vs-col",
                    { attrs: { "vs-lg": "2", "vs-xs": "12" } },
                    [
                      _vm.activeTab == 2
                        ? _c(
                            "vs-button",
                            {
                              staticClass: "vs-con-loading__container w-full",
                              attrs: { id: "btn-transfer", color: "danger" },
                              on: {
                                click: function($event) {
                                  _vm.showTransferForm = false
                                }
                              }
                            },
                            [_vm._v(_vm._s(_vm.$t("table.close")))]
                          )
                        : _vm._e()
                    ],
                    1
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
        "vs-prompt",
        {
          attrs: {
            title: _vm.$t("transaction.correction"),
            active: _vm.correctionPrompt
          },
          on: {
            cancel: function($event) {
              _vm.newCorrectionValue = 0
            },
            accept: _vm.correctionData,
            "update:active": function($event) {
              _vm.correctionPrompt = $event
            }
          }
        },
        [
          _c(
            "div",
            { staticClass: "con-exemple-prompt" },
            [
              _c("input-number", {
                staticClass: "w-full",
                attrs: {
                  disabled: "",
                  label: _vm.$t("transaction.correctionAmountBefore")
                },
                model: {
                  value: _vm.oldCorrectionValue,
                  callback: function($$v) {
                    _vm.oldCorrectionValue = $$v
                  },
                  expression: "oldCorrectionValue"
                }
              }),
              _vm._v(" "),
              _c("input-number", {
                staticClass: "w-full",
                attrs: { label: _vm.$t("transaction.correctionAmountAfter") },
                model: {
                  value: _vm.newCorrectionValue,
                  callback: function($$v) {
                    _vm.newCorrectionValue = $$v
                  },
                  expression: "newCorrectionValue"
                }
              })
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/components/transaction/components/FilterHeader.vue?vue&type=template&id=c5bdc3ae&":
/*!******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/components/transaction/components/FilterHeader.vue?vue&type=template&id=c5bdc3ae& ***!
  \******************************************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "transaction-search-bar mb-3" },
    [
      _c(
        "vx-card",
        { staticClass: "box" },
        [
          _c(
            "vs-row",
            {
              staticClass: "box-body",
              attrs: {
                "vs-align": "start",
                "vs-type": "flex",
                "vs-justify": "space-between",
                "vs-w": "12"
              }
            },
            [
              _c(
                "vs-col",
                { staticClass: "lg:w-4/12 search-part" },
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
                            staticClass: "transaction-search",
                            attrs: {
                              clearable: false,
                              reduce: function(searchOption) {
                                return searchOption.code
                              },
                              label: "name",
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
              _c(
                "vs-col",
                {
                  staticClass: "filter-checkbox",
                  attrs: { "vs-lg": "2", "vs-md": "2", "vs-xs": "12" }
                },
                [
                  _c(
                    "vs-checkbox",
                    {
                      on: { change: _vm.onRefreshData },
                      model: {
                        value: _vm.vPossession,
                        callback: function($$v) {
                          _vm.vPossession = $$v
                        },
                        expression: "vPossession"
                      }
                    },
                    [_vm._v("Possession Only")]
                  ),
                  _vm._v(" "),
                  _c(
                    "vs-checkbox",
                    {
                      on: { change: _vm.onRefreshData },
                      model: {
                        value: _vm.vTransfered,
                        callback: function($$v) {
                          _vm.vTransfered = $$v
                        },
                        expression: "vTransfered"
                      }
                    },
                    [_vm._v("Show Transfered")]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "vs-col",
                {
                  staticClass: "filter-checkbox",
                  attrs: { "vs-lg": "2", "vs-md": "2", "vs-xs": "12" }
                },
                [
                  _c(
                    "vs-checkbox",
                    {
                      on: { change: _vm.onRefreshData },
                      model: {
                        value: _vm.vCorrection,
                        callback: function($$v) {
                          _vm.vCorrection = $$v
                        },
                        expression: "vCorrection"
                      }
                    },
                    [_vm._v("Show Correction")]
                  ),
                  _vm._v(" "),
                  _c(
                    "vs-checkbox",
                    {
                      on: { change: _vm.onRefreshData },
                      model: {
                        value: _vm.vVoid,
                        callback: function($$v) {
                          _vm.vVoid = $$v
                        },
                        expression: "vVoid"
                      }
                    },
                    [_vm._v("Show Void")]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "vs-col",
                { attrs: { "vs-lg": "2", "vs-md": "2", "vs-xs": "12" } },
                [
                  _c("v-select", {
                    staticClass: "transaction-search",
                    attrs: {
                      clearable: false,
                      reduce: function(data) {
                        return data.code
                      },
                      label: "name",
                      options: _vm.subFolio
                    },
                    on: { input: _vm.onRefreshData },
                    model: {
                      value: _vm.vSubFolio,
                      callback: function($$v) {
                        _vm.vSubFolio = $$v
                      },
                      expression: "vSubFolio"
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
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/components/transaction/components/InformationFooter.vue?vue&type=template&id=44fbda93&":
/*!***********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/components/transaction/components/InformationFooter.vue?vue&type=template&id=44fbda93& ***!
  \***********************************************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "transaction-footer mb-3" },
    [
      _c(
        "vx-card",
        { staticClass: "box" },
        [
          _c(
            "vs-row",
            {
              staticClass: "box-body",
              attrs: {
                "vs-type": "flex",
                "vs-align": "center",
                "vs-justify": "space-between"
              }
            },
            [
              _c(
                "vs-col",
                {
                  attrs: {
                    "vs-xs": "12",
                    "vs-sm": "12",
                    "vs-md": "4",
                    "vs-lg": "4"
                  }
                },
                [
                  _c("vs-textarea", {
                    attrs: {
                      disabled: "",
                      label: "Bill Instruction",
                      height: "150px"
                    },
                    model: {
                      value: _vm.data.bill_instruction,
                      callback: function($$v) {
                        _vm.$set(_vm.data, "bill_instruction", $$v)
                      },
                      expression: "data.bill_instruction"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "vs-col",
                {
                  attrs: {
                    "vs-xs": "12",
                    "vs-sm": "12",
                    "vs-md": "4",
                    "vs-lg": "4"
                  }
                },
                [
                  _c("vs-textarea", {
                    attrs: { disabled: "", label: "Notes", height: "150px" },
                    model: {
                      value: _vm.data.notes,
                      callback: function($$v) {
                        _vm.$set(_vm.data, "notes", $$v)
                      },
                      expression: "data.notes"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "vs-col",
                {
                  staticClass: "balance",
                  attrs: {
                    "vs-xs": "12",
                    "vs-sm": "12",
                    "vs-md": "4",
                    "vs-lg": "3"
                  }
                },
                [
                  _c(
                    "vs-row",
                    {
                      attrs: {
                        "vs-align": "center",
                        "vs-type": "flex",
                        "vs-justify": "space-between",
                        "vs-w": "12"
                      }
                    },
                    [
                      _c("label", { staticClass: "title-width" }, [
                        _vm._v("Total Charge")
                      ]),
                      _vm._v(" "),
                      _c("span", [
                        _vm._v(
                          " " +
                            _vm._s(_vm._f("currency_format")(_vm.data.debit))
                        )
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "vs-row",
                    {
                      attrs: {
                        "vs-align": "center",
                        "vs-type": "flex",
                        "vs-justify": "space-between",
                        "vs-w": "12"
                      }
                    },
                    [
                      _c("label", { staticClass: "title-width" }, [
                        _vm._v("Total Deposit")
                      ]),
                      _vm._v(" "),
                      _c("span", [
                        _vm._v(
                          " " +
                            _vm._s(_vm._f("currency_format")(_vm.data.credit))
                        )
                      ]),
                      _vm._v(" "),
                      _c("vs-divider")
                    ],
                    1
                  ),
                  _c(
                    "vs-row",
                    {
                      attrs: {
                        "vs-align": "center",
                        "vs-type": "flex",
                        "vs-justify": "space-between",
                        "vs-w": "12"
                      }
                    },
                    [
                      _c("label", { staticClass: "title-width" }, [
                        _vm._v("Balance")
                      ]),
                      _vm._v(" "),
                      _c("span", [
                        _vm._v(
                          " " +
                            _vm._s(_vm._f("currency_format")(_vm.data.balance))
                        )
                      ])
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/components/transaction/components/InformationHeader.vue?vue&type=template&id=662e3e85&":
/*!***********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/components/transaction/components/InformationHeader.vue?vue&type=template&id=662e3e85& ***!
  \***********************************************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "transaction-guest-information-bar mb-3" },
    [
      _c(
        "vx-card",
        { staticClass: "box", attrs: { title: "Stay Information" } },
        [
          _c(
            "vs-row",
            {
              staticClass: "box-body",
              attrs: { "vs-type": "flex", "vs-justify": "flex-start" }
            },
            [
              _c(
                "vs-col",
                {
                  attrs: {
                    "vs-xs": "12",
                    "vs-sm": "12",
                    "vs-md": "2",
                    "vs-lg": "2"
                  }
                },
                [
                  _c(
                    "vs-row",
                    {
                      staticClass: "folio-number",
                      attrs: {
                        "vs-align": "bottom",
                        "vs-type": "flex",
                        "vs-justify": "flex-start",
                        "vs-w": "12"
                      }
                    },
                    [_c("span", [_vm._v("F-" + _vm._s(_vm.value.number))])]
                  ),
                  _vm._v(" "),
                  _c(
                    "vs-row",
                    {
                      staticClass: "room-number",
                      attrs: {
                        "vs-align": "center",
                        "vs-type": "flex",
                        "vs-justify": "flex-start",
                        "vs-w": "12"
                      }
                    },
                    [
                      _vm.value.room_number
                        ? _c("span", [
                            _vm._v("R-" + _vm._s(_vm.value.room_number))
                          ])
                        : _vm._e()
                    ]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "vs-col",
                {
                  attrs: {
                    "vs-xs": "12",
                    "vs-sm": "12",
                    "vs-md": "4",
                    "vs-lg": "4"
                  }
                },
                [
                  _c(
                    "vs-row",
                    {
                      attrs: {
                        "vs-align": "center",
                        "vs-type": "flex",
                        "vs-justify": "flex-start",
                        "vs-w": "12"
                      }
                    },
                    [_c("h6", [_vm._v(_vm._s(_vm.value.full_name))])]
                  ),
                  _vm._v(" "),
                  _c(
                    "vs-row",
                    {
                      attrs: {
                        "vs-align": "center",
                        "vs-type": "flex",
                        "vs-justify": "flex-start",
                        "vs-w": "12"
                      }
                    },
                    [
                      _c("label", { staticClass: "title-width" }, [
                        _vm._v("Address")
                      ]),
                      _vm._v(" "),
                      _c("span", [_vm._v(": " + _vm._s(_vm.value.address))])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "vs-row",
                    {
                      attrs: {
                        "vs-align": "center",
                        "vs-type": "flex",
                        "vs-justify": "flex-start",
                        "vs-w": "12"
                      }
                    },
                    [
                      _c("label", { staticClass: "title-width" }, [
                        _vm._v("Phone")
                      ]),
                      _vm._v(" "),
                      _c("span", [_vm._v(": " + _vm._s(_vm.value.phone1))])
                    ]
                  ),
                  _c(
                    "vs-row",
                    {
                      attrs: {
                        "vs-align": "center",
                        "vs-type": "flex",
                        "vs-justify": "flex-start",
                        "vs-w": "12"
                      }
                    },
                    [
                      _c("label", { staticClass: "title-width" }, [
                        _vm._v("Group")
                      ]),
                      _vm._v(" "),
                      _c("span", [_vm._v(": " + _vm._s(_vm.value.group))])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "vs-row",
                    {
                      attrs: {
                        "vs-align": "center",
                        "vs-type": "flex",
                        "vs-justify": "flex-start",
                        "vs-w": "12"
                      }
                    },
                    [
                      _c("label", { staticClass: "title-width" }, [
                        _vm._v("Guest Type")
                      ]),
                      _vm._v(" "),
                      _c("span", [
                        _vm._v(": " + _vm._s(_vm.value.guest_type_code))
                      ])
                    ]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "vs-col",
                {
                  attrs: {
                    "vs-xs": "12",
                    "vs-sm": "12",
                    "vs-md": "4",
                    "vs-lg": "3"
                  }
                },
                [
                  _c(
                    "vs-row",
                    {
                      attrs: {
                        "vs-align": "center",
                        "vs-type": "flex",
                        "vs-justify": "flex-start",
                        "vs-w": "12"
                      }
                    },
                    [_c("h5", [_vm._v("Stay Information")])]
                  ),
                  _vm._v(" "),
                  _c(
                    "vs-row",
                    {
                      attrs: {
                        "vs-align": "center",
                        "vs-type": "flex",
                        "vs-justify": "flex-start",
                        "vs-w": "12"
                      }
                    },
                    [
                      _c("label", { staticClass: "title-width" }, [
                        _vm._v("Arrival")
                      ]),
                      _vm._v(" "),
                      _c("span", [
                        _vm._v(
                          ": " + _vm._s(_vm._f("fulldate")(_vm.value.arrival))
                        )
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "vs-row",
                    {
                      attrs: {
                        "vs-align": "center",
                        "vs-type": "flex",
                        "vs-justify": "flex-start",
                        "vs-w": "12"
                      }
                    },
                    [
                      _c("label", { staticClass: "title-width" }, [
                        _vm._v("Departure")
                      ]),
                      _vm._v(" "),
                      _c("span", [
                        _vm._v(
                          ": " + _vm._s(_vm._f("fulldate")(_vm.value.departure))
                        )
                      ])
                    ]
                  ),
                  _c(
                    "vs-row",
                    {
                      attrs: {
                        "vs-align": "center",
                        "vs-type": "flex",
                        "vs-justify": "flex-start",
                        "vs-w": "12"
                      }
                    },
                    [
                      _c("label", { staticClass: "title-width" }, [
                        _vm._v("Adult/Child")
                      ]),
                      _vm._v(" "),
                      _c("span", [
                        _vm._v(
                          ": " +
                            _vm._s(_vm.value.adult) +
                            " / " +
                            _vm._s(_vm.value.child)
                        )
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "vs-row",
                    {
                      attrs: {
                        "vs-align": "center",
                        "vs-type": "flex",
                        "vs-justify": "flex-start",
                        "vs-w": "12"
                      }
                    },
                    [
                      _c("label", { staticClass: "title-width" }, [
                        _vm._v("Room Type")
                      ]),
                      _vm._v(" "),
                      _c("span", [
                        _vm._v(": " + _vm._s(_vm.value.room_type_code))
                      ])
                    ]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "vs-col",
                {
                  attrs: {
                    "vs-xs": "12",
                    "vs-sm": "12",
                    "vs-md": "4",
                    "vs-lg": "3"
                  }
                },
                [
                  _c(
                    "vs-row",
                    {
                      attrs: {
                        "vs-align": "center",
                        "vs-type": "flex",
                        "vs-justify": "flex-start",
                        "vs-w": "12"
                      }
                    },
                    [_c("h5", [_vm._v("Rate Information")])]
                  ),
                  _vm._v(" "),
                  _c(
                    "vs-row",
                    {
                      attrs: {
                        "vs-align": "center",
                        "vs-type": "flex",
                        "vs-justify": "space-between",
                        "vs-w": "12"
                      }
                    },
                    [
                      _c("label", { staticClass: "title-width" }, [
                        _vm._v("Rate Code")
                      ]),
                      _vm._v(" "),
                      _c("span", [
                        _vm._v(" " + _vm._s(_vm.value.room_rate_code))
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "vs-row",
                    {
                      attrs: {
                        "vs-align": "center",
                        "vs-type": "flex",
                        "vs-justify": "space-between",
                        "vs-w": "12"
                      }
                    },
                    [
                      _c("label", { staticClass: "title-width" }, [
                        _vm._v("Rate Amount")
                      ]),
                      _vm._v(" "),
                      _c("span", [
                        _vm._v(
                          " " +
                            _vm._s(_vm._f("number")(_vm.value.room_rate_amount))
                        )
                      ])
                    ]
                  ),
                  _c(
                    "vs-row",
                    {
                      attrs: {
                        "vs-align": "center",
                        "vs-type": "flex",
                        "vs-justify": "space-between",
                        "vs-w": "12"
                      }
                    },
                    [
                      _c("label", { staticClass: "title-width" }, [
                        _vm._v("Discount")
                      ]),
                      _vm._v(" "),
                      _c("span", [
                        _vm._v(
                          " " +
                            _vm._s(_vm._f("number")(_vm.value.discount_amount))
                        )
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "vs-row",
                    {
                      attrs: {
                        "vs-align": "center",
                        "vs-type": "flex",
                        "vs-justify": "space-between",
                        "vs-w": "12"
                      }
                    },
                    [
                      _c("label", { staticClass: "title-width" }, [
                        _vm._v("Room Charge")
                      ]),
                      _vm._v(" "),
                      _c("span", [
                        _vm._v(
                          " " + _vm._s(_vm._f("number")(_vm.value.room_charge))
                        )
                      ])
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/components/transaction/components/NavigationHeader.vue?vue&type=template&id=1388f3c5&":
/*!**********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/components/transaction/components/NavigationHeader.vue?vue&type=template&id=1388f3c5& ***!
  \**********************************************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "content-header navigation-header" },
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
          _c(
            "div",
            {
              staticClass: "navigation-back",
              attrs: { id: "btn", "vs-sm": "12", "vs-justify": "flex-start" }
            },
            [
              _c(
                "vs-button",
                {
                  staticClass: "w-full",
                  attrs: { color: "black", icon: "keyboard_backspace" },
                  on: {
                    click: function($event) {
                      return _vm.$emit("back")
                    }
                  }
                },
                [_vm._v("Back")]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "navigation-transaction" },
            [
              _c(
                "vs-col",
                { attrs: { id: "btn", "vs-sm": "12" } },
                [
                  _c(
                    "vs-dropdown",
                    {
                      staticClass: "w-full dropdown",
                      attrs: { "vs-trigger-click": true }
                    },
                    [
                      _c(
                        "vs-button",
                        {
                          staticClass: "w-full",
                          attrs: { "vs-justify": "flex-end", color: "primary" }
                        },
                        [
                          _c("img", {
                            attrs: {
                              border: "0",
                              width: "16",
                              height: "16",
                              src: "/images/icons/print_icon24.png"
                            }
                          }),
                          _vm._v(_vm._s(_vm.$t("transaction.print")))
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "vs-dropdown-menu",
                        [
                          _c(
                            "vs-dropdown-item",
                            {
                              on: {
                                click: function($event) {
                                  return _vm.$emit("printFolio")
                                }
                              }
                            },
                            [
                              _c("img", {
                                staticClass: "mr-1",
                                attrs: {
                                  border: "0",
                                  width: "16",
                                  height: "16",
                                  src: "/images/icons/print_icon24.png"
                                }
                              }),
                              _vm._v(
                                "\n                            PRINT FOLIO\n                        "
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
              _vm.isFolioOpen
                ? _c(
                    "vs-col",
                    {
                      attrs: {
                        "vs-type": "flex",
                        "vs-align": "center",
                        id: "btn",
                        "vs-sm": "12"
                      }
                    },
                    [
                      _c(
                        "vs-button",
                        {
                          staticClass: "w-full",
                          attrs: {
                            "vs-justify": "flex-end",
                            color: "danger",
                            type: "filled"
                          },
                          on: {
                            click: function($event) {
                              return _vm.$emit("checkOut")
                            }
                          }
                        },
                        [
                          _c("img", {
                            attrs: {
                              border: "0",
                              width: "16",
                              height: "16",
                              src: "/images/icons/check_out_icon24.png"
                            }
                          }),
                          _vm._v(_vm._s(_vm.$t("transaction.checkOut")))
                        ]
                      )
                    ],
                    1
                  )
                : _vm._e(),
              _vm._v(" "),
              _vm.isFolioOpen
                ? _c(
                    "vs-col",
                    { attrs: { id: "btn", "vs-sm": "12" } },
                    [
                      _c(
                        "vs-button",
                        {
                          staticClass: "w-full",
                          attrs: {
                            disabled: _vm.isFolioOpen == false,
                            "vs-justify": "flex-end",
                            color: "warning",
                            type: "filled"
                          },
                          on: {
                            click: function($event) {
                              return _vm.$emit("transfer")
                            }
                          }
                        },
                        [
                          _c("img", {
                            attrs: {
                              border: "0",
                              width: "16",
                              height: "16",
                              src: "/images/icons/transfer_icon24.png"
                            }
                          }),
                          _vm._v(_vm._s(_vm.$t("transaction.transfer")))
                        ]
                      )
                    ],
                    1
                  )
                : _vm._e(),
              _vm._v(" "),
              _c(
                "vs-col",
                { attrs: { id: "btn", "vs-type": "flex", "vs-sm": "12" } },
                [
                  _c(
                    "vs-button",
                    {
                      staticClass: "btn-left-drop",
                      attrs: {
                        "vs-justify": "flex-end",
                        color: "success",
                        type: "filled"
                      },
                      on: {
                        click: function($event) {
                          return _vm.$emit("payment")
                        }
                      }
                    },
                    [
                      _c("img", {
                        attrs: {
                          border: "0",
                          width: "16",
                          height: "16",
                          src: "/images/icons/other_payment_icon24.png"
                        }
                      }),
                      _vm._v(_vm._s(_vm.$t("transaction.payment")))
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "vs-dropdown",
                    {
                      staticClass: "dropdown",
                      attrs: { "vs-trigger-click": true }
                    },
                    [
                      _c("vs-button", {
                        staticClass: "btn-drop dropdown-toogle",
                        attrs: {
                          "data-toogle": "con-vs-dropdown--menu",
                          type: "filled",
                          color: "success",
                          icon: "expand_more"
                        }
                      }),
                      _vm._v(" "),
                      _c(
                        "vs-dropdown-menu",
                        [
                          _c(
                            "vs-dropdown-item",
                            {
                              on: {
                                click: function($event) {
                                  return _vm.$emit("refund")
                                }
                              }
                            },
                            [
                              _c("img", {
                                staticClass: "mr-1",
                                attrs: {
                                  border: "0",
                                  width: "16",
                                  height: "16",
                                  src: "/images/icons/cash_refund_icon24.png"
                                }
                              }),
                              _vm._v(
                                "\n                            " +
                                  _vm._s(
                                    _vm.$t("transaction.button.cashRefund")
                                  ) +
                                  "\n                        "
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
                "vs-col",
                { attrs: { id: "btn-last", "vs-type": "flex", "vs-sm": "12" } },
                [
                  _c(
                    "vs-button",
                    {
                      staticClass: "btn-left-drop",
                      attrs: {
                        "vs-justify": "flex-end",
                        color: "success",
                        type: "filled"
                      },
                      on: {
                        click: function($event) {
                          return _vm.$emit("charge")
                        }
                      }
                    },
                    [
                      _c("img", {
                        attrs: {
                          border: "0",
                          width: "16",
                          height: "16",
                          src: "/images/icons/charge_icon24.png"
                        }
                      }),
                      _vm._v(_vm._s(_vm.$t("transaction.charge")))
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "vs-dropdown",
                    {
                      staticClass: "dropdown",
                      attrs: { "vs-trigger-click": true }
                    },
                    [
                      _c("vs-button", {
                        staticClass: "btn-drop dropdown-toogle",
                        attrs: {
                          "data-toogle": "con-vs-dropdown--menu",
                          type: "filled",
                          color: "success",
                          icon: "expand_more"
                        }
                      }),
                      _vm._v(" "),
                      _c(
                        "vs-dropdown-menu",
                        [
                          _c(
                            "vs-dropdown-item",
                            {
                              on: {
                                click: function($event) {
                                  return _vm.$emit("apTransaction")
                                }
                              }
                            },
                            [
                              _c("img", {
                                staticClass: "mr-1",
                                attrs: {
                                  border: "0",
                                  width: "16",
                                  height: "16",
                                  src: "/images/icons/ap_transaction_icon24.png"
                                }
                              }),
                              _vm._v(
                                "\n                            " +
                                  _vm._s(
                                    _vm.$t("transaction.button.apTransaction")
                                  ) +
                                  "\n                        "
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _vm.folioType == _vm.mFolioType.guestFolio
                            ? _c(
                                "vs-dropdown-item",
                                {
                                  on: {
                                    click: function($event) {
                                      return _vm.$emit("roomCharge")
                                    }
                                  }
                                },
                                [
                                  _c("img", {
                                    staticClass: "mr-1",
                                    attrs: {
                                      border: "0",
                                      width: "16",
                                      height: "16",
                                      src: "/images/icons/autopost_icon24.png"
                                    }
                                  }),
                                  _vm._v(
                                    "\n                            " +
                                      _vm._s(
                                        _vm.$t(
                                          "transaction.button.autoPostingRoomCharge"
                                        )
                                      ) +
                                      "\n                        "
                                  )
                                ]
                              )
                            : _vm._e()
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
        ]
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/components/transaction/transfer/account/TransferAccount.vue?vue&type=template&id=74ae13a1&":
/*!***************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/components/transaction/transfer/account/TransferAccount.vue?vue&type=template&id=74ae13a1& ***!
  \***************************************************************************************************************************************************************************************************************************************************************/
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
      _c("ag-grid-vue", {
        class: _vm.themeAgGrid,
        style: _vm.StyleAgGridFrame1,
        attrs: {
          gridOptions: _vm.gridOptions,
          columnDefs: _vm.columnDefs,
          rowData: _vm.data,
          suppressRowClickSelection: true,
          rowSelection: _vm.rowSelection,
          defaultColDef: _vm.colDef1
        },
        on: {
          "grid-ready": _vm.onGridReady,
          "selection-changed": _vm.getSelectedRow
        }
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/components/transaction/transfer/return/ReturnTransfer.vue?vue&type=template&id=062aed8a&":
/*!*************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/components/transaction/transfer/return/ReturnTransfer.vue?vue&type=template&id=062aed8a& ***!
  \*************************************************************************************************************************************************************************************************************************************************************/
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
      _c("ag-grid-vue", {
        class: _vm.themeAgGrid,
        style: _vm.StyleAgGridFrame1,
        attrs: {
          gridOptions: _vm.gridOptions,
          columnDefs: _vm.columnDefs,
          rowData: _vm.data,
          suppressRowClickSelection: true,
          rowSelection: _vm.rowSelection,
          defaultColDef: _vm.colDef1
        },
        on: {
          "grid-ready": _vm.onGridReady,
          "selection-changed": _vm.getSelectedRow
        }
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/components/transaction/transfer/routing/AutomaticRouting.vue?vue&type=template&id=662122d3&":
/*!****************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/components/transaction/transfer/routing/AutomaticRouting.vue?vue&type=template&id=662122d3& ***!
  \****************************************************************************************************************************************************************************************************************************************************************/
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
      _c("ag-grid-vue", {
        class: _vm.themeAgGrid,
        style: _vm.StyleAgGridFrame2,
        attrs: {
          gridOptions: _vm.gridOptions,
          columnDefs: _vm.columnDefs,
          rowData: _vm.data,
          suppressRowClickSelection: true,
          rowSelection: _vm.rowSelection,
          defaultColDef: _vm.colDef1
        },
        on: {
          "grid-ready": _vm.onGridReady,
          "selection-changed": _vm.getSelectedRow
        }
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



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

/***/ "./resources/js/src/views/pages/components/transaction/Transaction.vue":
/*!*****************************************************************************!*\
  !*** ./resources/js/src/views/pages/components/transaction/Transaction.vue ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Transaction_vue_vue_type_template_id_2d5146c9___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Transaction.vue?vue&type=template&id=2d5146c9& */ "./resources/js/src/views/pages/components/transaction/Transaction.vue?vue&type=template&id=2d5146c9&");
/* harmony import */ var _Transaction_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Transaction.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/components/transaction/Transaction.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Transaction_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Transaction.vue?vue&type=style&index=0&lang=scss& */ "./resources/js/src/views/pages/components/transaction/Transaction.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _Transaction_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Transaction.vue?vue&type=style&index=1&lang=scss& */ "./resources/js/src/views/pages/components/transaction/Transaction.vue?vue&type=style&index=1&lang=scss&");
/* harmony import */ var _Transaction_vue_vue_type_style_index_2_lang_scss___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Transaction.vue?vue&type=style&index=2&lang=scss& */ "./resources/js/src/views/pages/components/transaction/Transaction.vue?vue&type=style&index=2&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");








/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_5__["default"])(
  _Transaction_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Transaction_vue_vue_type_template_id_2d5146c9___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Transaction_vue_vue_type_template_id_2d5146c9___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/components/transaction/Transaction.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/components/transaction/Transaction.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/components/transaction/Transaction.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Transaction_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Transaction.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/components/transaction/Transaction.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Transaction_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/components/transaction/Transaction.vue?vue&type=style&index=0&lang=scss&":
/*!***************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/components/transaction/Transaction.vue?vue&type=style&index=0&lang=scss& ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Transaction_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/style-loader!../../../../../../../node_modules/css-loader!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Transaction.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/components/transaction/Transaction.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Transaction_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Transaction_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Transaction_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Transaction_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Transaction_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/src/views/pages/components/transaction/Transaction.vue?vue&type=style&index=1&lang=scss&":
/*!***************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/components/transaction/Transaction.vue?vue&type=style&index=1&lang=scss& ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Transaction_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/style-loader!../../../../../../../node_modules/css-loader!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Transaction.vue?vue&type=style&index=1&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/components/transaction/Transaction.vue?vue&type=style&index=1&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Transaction_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Transaction_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Transaction_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Transaction_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Transaction_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/src/views/pages/components/transaction/Transaction.vue?vue&type=style&index=2&lang=scss&":
/*!***************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/components/transaction/Transaction.vue?vue&type=style&index=2&lang=scss& ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Transaction_vue_vue_type_style_index_2_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/style-loader!../../../../../../../node_modules/css-loader!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Transaction.vue?vue&type=style&index=2&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/components/transaction/Transaction.vue?vue&type=style&index=2&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Transaction_vue_vue_type_style_index_2_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Transaction_vue_vue_type_style_index_2_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Transaction_vue_vue_type_style_index_2_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Transaction_vue_vue_type_style_index_2_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Transaction_vue_vue_type_style_index_2_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/src/views/pages/components/transaction/Transaction.vue?vue&type=template&id=2d5146c9&":
/*!************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/components/transaction/Transaction.vue?vue&type=template&id=2d5146c9& ***!
  \************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Transaction_vue_vue_type_template_id_2d5146c9___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Transaction.vue?vue&type=template&id=2d5146c9& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/components/transaction/Transaction.vue?vue&type=template&id=2d5146c9&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Transaction_vue_vue_type_template_id_2d5146c9___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Transaction_vue_vue_type_template_id_2d5146c9___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/pages/components/transaction/components/FilterHeader.vue":
/*!*****************************************************************************************!*\
  !*** ./resources/js/src/views/pages/components/transaction/components/FilterHeader.vue ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FilterHeader_vue_vue_type_template_id_c5bdc3ae___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FilterHeader.vue?vue&type=template&id=c5bdc3ae& */ "./resources/js/src/views/pages/components/transaction/components/FilterHeader.vue?vue&type=template&id=c5bdc3ae&");
/* harmony import */ var _FilterHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FilterHeader.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/components/transaction/components/FilterHeader.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _FilterHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FilterHeader_vue_vue_type_template_id_c5bdc3ae___WEBPACK_IMPORTED_MODULE_0__["render"],
  _FilterHeader_vue_vue_type_template_id_c5bdc3ae___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/components/transaction/components/FilterHeader.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/components/transaction/components/FilterHeader.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/components/transaction/components/FilterHeader.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FilterHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./FilterHeader.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/components/transaction/components/FilterHeader.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FilterHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/components/transaction/components/FilterHeader.vue?vue&type=template&id=c5bdc3ae&":
/*!************************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/components/transaction/components/FilterHeader.vue?vue&type=template&id=c5bdc3ae& ***!
  \************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FilterHeader_vue_vue_type_template_id_c5bdc3ae___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./FilterHeader.vue?vue&type=template&id=c5bdc3ae& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/components/transaction/components/FilterHeader.vue?vue&type=template&id=c5bdc3ae&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FilterHeader_vue_vue_type_template_id_c5bdc3ae___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FilterHeader_vue_vue_type_template_id_c5bdc3ae___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/pages/components/transaction/components/InformationFooter.vue":
/*!**********************************************************************************************!*\
  !*** ./resources/js/src/views/pages/components/transaction/components/InformationFooter.vue ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _InformationFooter_vue_vue_type_template_id_44fbda93___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./InformationFooter.vue?vue&type=template&id=44fbda93& */ "./resources/js/src/views/pages/components/transaction/components/InformationFooter.vue?vue&type=template&id=44fbda93&");
/* harmony import */ var _InformationFooter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./InformationFooter.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/components/transaction/components/InformationFooter.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _InformationFooter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _InformationFooter_vue_vue_type_template_id_44fbda93___WEBPACK_IMPORTED_MODULE_0__["render"],
  _InformationFooter_vue_vue_type_template_id_44fbda93___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/components/transaction/components/InformationFooter.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/components/transaction/components/InformationFooter.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/components/transaction/components/InformationFooter.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InformationFooter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./InformationFooter.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/components/transaction/components/InformationFooter.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InformationFooter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/components/transaction/components/InformationFooter.vue?vue&type=template&id=44fbda93&":
/*!*****************************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/components/transaction/components/InformationFooter.vue?vue&type=template&id=44fbda93& ***!
  \*****************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_InformationFooter_vue_vue_type_template_id_44fbda93___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./InformationFooter.vue?vue&type=template&id=44fbda93& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/components/transaction/components/InformationFooter.vue?vue&type=template&id=44fbda93&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_InformationFooter_vue_vue_type_template_id_44fbda93___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_InformationFooter_vue_vue_type_template_id_44fbda93___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/pages/components/transaction/components/InformationHeader.vue":
/*!**********************************************************************************************!*\
  !*** ./resources/js/src/views/pages/components/transaction/components/InformationHeader.vue ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _InformationHeader_vue_vue_type_template_id_662e3e85___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./InformationHeader.vue?vue&type=template&id=662e3e85& */ "./resources/js/src/views/pages/components/transaction/components/InformationHeader.vue?vue&type=template&id=662e3e85&");
/* harmony import */ var _InformationHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./InformationHeader.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/components/transaction/components/InformationHeader.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _InformationHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _InformationHeader_vue_vue_type_template_id_662e3e85___WEBPACK_IMPORTED_MODULE_0__["render"],
  _InformationHeader_vue_vue_type_template_id_662e3e85___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/components/transaction/components/InformationHeader.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/components/transaction/components/InformationHeader.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/components/transaction/components/InformationHeader.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InformationHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./InformationHeader.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/components/transaction/components/InformationHeader.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InformationHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/components/transaction/components/InformationHeader.vue?vue&type=template&id=662e3e85&":
/*!*****************************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/components/transaction/components/InformationHeader.vue?vue&type=template&id=662e3e85& ***!
  \*****************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_InformationHeader_vue_vue_type_template_id_662e3e85___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./InformationHeader.vue?vue&type=template&id=662e3e85& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/components/transaction/components/InformationHeader.vue?vue&type=template&id=662e3e85&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_InformationHeader_vue_vue_type_template_id_662e3e85___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_InformationHeader_vue_vue_type_template_id_662e3e85___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/pages/components/transaction/components/NavigationHeader.vue":
/*!*********************************************************************************************!*\
  !*** ./resources/js/src/views/pages/components/transaction/components/NavigationHeader.vue ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _NavigationHeader_vue_vue_type_template_id_1388f3c5___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NavigationHeader.vue?vue&type=template&id=1388f3c5& */ "./resources/js/src/views/pages/components/transaction/components/NavigationHeader.vue?vue&type=template&id=1388f3c5&");
/* harmony import */ var _NavigationHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NavigationHeader.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/components/transaction/components/NavigationHeader.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _NavigationHeader_vue_vue_type_style_index_0_scope_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NavigationHeader.vue?vue&type=style&index=0&scope=true&lang=scss& */ "./resources/js/src/views/pages/components/transaction/components/NavigationHeader.vue?vue&type=style&index=0&scope=true&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _NavigationHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _NavigationHeader_vue_vue_type_template_id_1388f3c5___WEBPACK_IMPORTED_MODULE_0__["render"],
  _NavigationHeader_vue_vue_type_template_id_1388f3c5___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/components/transaction/components/NavigationHeader.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/components/transaction/components/NavigationHeader.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/components/transaction/components/NavigationHeader.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NavigationHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./NavigationHeader.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/components/transaction/components/NavigationHeader.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NavigationHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/components/transaction/components/NavigationHeader.vue?vue&type=style&index=0&scope=true&lang=scss&":
/*!******************************************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/components/transaction/components/NavigationHeader.vue?vue&type=style&index=0&scope=true&lang=scss& ***!
  \******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_NavigationHeader_vue_vue_type_style_index_0_scope_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/style-loader!../../../../../../../../node_modules/css-loader!../../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./NavigationHeader.vue?vue&type=style&index=0&scope=true&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/components/transaction/components/NavigationHeader.vue?vue&type=style&index=0&scope=true&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_NavigationHeader_vue_vue_type_style_index_0_scope_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_NavigationHeader_vue_vue_type_style_index_0_scope_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_NavigationHeader_vue_vue_type_style_index_0_scope_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_NavigationHeader_vue_vue_type_style_index_0_scope_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_NavigationHeader_vue_vue_type_style_index_0_scope_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/src/views/pages/components/transaction/components/NavigationHeader.vue?vue&type=template&id=1388f3c5&":
/*!****************************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/components/transaction/components/NavigationHeader.vue?vue&type=template&id=1388f3c5& ***!
  \****************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NavigationHeader_vue_vue_type_template_id_1388f3c5___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./NavigationHeader.vue?vue&type=template&id=1388f3c5& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/components/transaction/components/NavigationHeader.vue?vue&type=template&id=1388f3c5&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NavigationHeader_vue_vue_type_template_id_1388f3c5___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NavigationHeader_vue_vue_type_template_id_1388f3c5___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/pages/components/transaction/components/action_grid.js":
/*!***************************************************************************************!*\
  !*** ./resources/js/src/views/pages/components/transaction/components/action_grid.js ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (vue__WEBPACK_IMPORTED_MODULE_0___default.a.extend({
  template: "\n                <div class=\"flex action-button\">\n                    <vs-dropdown vs-trigger-click class=\"cursor-pointer\">\n                        <vs-button :color=\"iconAction.menuColor\" type=\"flat\"><vs-icon icon=\"menu\" size=\"small\"></vs-icon></vs-button>\n                        <vs-dropdown-menu>\n                            <vs-dropdown-item @click=\"showPopUp(modeData.tracking)\"><img border=\"0\" width=\"20\" height=\"20\" src=\"/images/icons/tracking_icon24.png\"/>Tracking Data</vs-dropdown-item>\n                            <vs-dropdown-item @click=\"handlePrint()\"><img border=\"0\" width=\"20\" height=\"20\" src=\"/images/icons/print_icon24.png\"/>Print Receipt</vs-dropdown-item>\n                        </vs-dropdown-menu>\n                    </vs-dropdown>\n                    <vx-tooltip class=\"flex\" style=\"height:30px\" text=\"Correction data selected\"><vs-button @click=\"correctionVoid(true)\" :color=\"iconAction.editColor\" type=\"flat\"><img border=\"0\" width=\"20\" height=\"20\" src=\"/images/icons/correction_icon24.png\"/></vs-button></vx-tooltip>\n                    <vx-tooltip class=\"flex\" style=\"height:30px\" text=\"Void data selected\"><vs-button @click=\"correctionVoid(false)\" :color=\"iconAction.deleteColor\" type=\"flat\"><img border=\"0\" width=\"20\" height=\"20\" src=\"/images/icons/delete_icon24.png\"/></vs-button></vx-tooltip>\n                </div>\n            ",
  data: function data() {
    return {};
  },
  beforeMount: function beforeMount() {},
  mounted: function mounted() {},
  methods: {
    showPopUp: function showPopUp(modeData) {
      if (this.params.data !== undefined) {
        this.params.context.componentParent.showModal(this.params.data, modeData);
        console.log(this.params.data);
      } else {
        this.openUndefinedAlert();
      }
    },
    handlePrint: function handlePrint() {
      if (this.params.data !== undefined) {
        this.params.context.componentParent.handlePrintReceipt(this.params.data);
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
    openUndefinedAlert: function openUndefinedAlert() {
      this.$vs.dialog({
        color: 'primary',
        title: this.$t('message.informationTitle'),
        text: this.$t('message.undefinedText'),
        acceptText: this.$t('table.close')
      });
    },
    correctionVoid: function correctionVoid(isCorrection) {
      var transactionDate = this.params.data.audit_date;

      if (isCorrection && transactionDate != this.auditDate) {
        this.params.context.componentParent.showCredential(this.params.data, isCorrection);
      } else if (!isCorrection && transactionDate == this.auditDate) {
        this.params.context.componentParent.showCredential(this.params.data, isCorrection);
      } else {
        this.cannotCorrectionVoidDialog(isCorrection);
      }
    },
    cannotCorrectionVoidDialog: function cannotCorrectionVoidDialog(isCorrection) {
      var message = isCorrection ? this.$t('message.cannotCorrection') : this.$t('message.cannotVoid');
      this.$vs.dialog({
        color: 'warning',
        title: this.$t('message.informationTitle'),
        text: message,
        acceptText: this.$t('table.close')
      });
    }
  },
  computed: {
    auditDate: function auditDate() {
      return this.$store.state.auditLog.auditDate;
    }
  }
}));

/***/ }),

/***/ "./resources/js/src/views/pages/components/transaction/components/source-status.js":
/*!*****************************************************************************************!*\
  !*** ./resources/js/src/views/pages/components/transaction/components/source-status.js ***!
  \*****************************************************************************************/
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

/***/ }),

/***/ "./resources/js/src/views/pages/components/transaction/transfer/account/TransferAccount.vue":
/*!**************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/components/transaction/transfer/account/TransferAccount.vue ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TransferAccount_vue_vue_type_template_id_74ae13a1___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TransferAccount.vue?vue&type=template&id=74ae13a1& */ "./resources/js/src/views/pages/components/transaction/transfer/account/TransferAccount.vue?vue&type=template&id=74ae13a1&");
/* harmony import */ var _TransferAccount_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TransferAccount.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/components/transaction/transfer/account/TransferAccount.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _TransferAccount_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TransferAccount_vue_vue_type_template_id_74ae13a1___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TransferAccount_vue_vue_type_template_id_74ae13a1___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/components/transaction/transfer/account/TransferAccount.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/components/transaction/transfer/account/TransferAccount.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/components/transaction/transfer/account/TransferAccount.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TransferAccount_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TransferAccount.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/components/transaction/transfer/account/TransferAccount.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TransferAccount_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/components/transaction/transfer/account/TransferAccount.vue?vue&type=template&id=74ae13a1&":
/*!*********************************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/components/transaction/transfer/account/TransferAccount.vue?vue&type=template&id=74ae13a1& ***!
  \*********************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TransferAccount_vue_vue_type_template_id_74ae13a1___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TransferAccount.vue?vue&type=template&id=74ae13a1& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/components/transaction/transfer/account/TransferAccount.vue?vue&type=template&id=74ae13a1&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TransferAccount_vue_vue_type_template_id_74ae13a1___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TransferAccount_vue_vue_type_template_id_74ae13a1___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/pages/components/transaction/transfer/return/ReturnTransfer.vue":
/*!************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/components/transaction/transfer/return/ReturnTransfer.vue ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ReturnTransfer_vue_vue_type_template_id_062aed8a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ReturnTransfer.vue?vue&type=template&id=062aed8a& */ "./resources/js/src/views/pages/components/transaction/transfer/return/ReturnTransfer.vue?vue&type=template&id=062aed8a&");
/* harmony import */ var _ReturnTransfer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ReturnTransfer.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/components/transaction/transfer/return/ReturnTransfer.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ReturnTransfer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ReturnTransfer_vue_vue_type_template_id_062aed8a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ReturnTransfer_vue_vue_type_template_id_062aed8a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/components/transaction/transfer/return/ReturnTransfer.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/components/transaction/transfer/return/ReturnTransfer.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/components/transaction/transfer/return/ReturnTransfer.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ReturnTransfer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ReturnTransfer.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/components/transaction/transfer/return/ReturnTransfer.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ReturnTransfer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/components/transaction/transfer/return/ReturnTransfer.vue?vue&type=template&id=062aed8a&":
/*!*******************************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/components/transaction/transfer/return/ReturnTransfer.vue?vue&type=template&id=062aed8a& ***!
  \*******************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ReturnTransfer_vue_vue_type_template_id_062aed8a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ReturnTransfer.vue?vue&type=template&id=062aed8a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/components/transaction/transfer/return/ReturnTransfer.vue?vue&type=template&id=062aed8a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ReturnTransfer_vue_vue_type_template_id_062aed8a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ReturnTransfer_vue_vue_type_template_id_062aed8a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/pages/components/transaction/transfer/routing/AutomaticRouting.vue":
/*!***************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/components/transaction/transfer/routing/AutomaticRouting.vue ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AutomaticRouting_vue_vue_type_template_id_662122d3___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AutomaticRouting.vue?vue&type=template&id=662122d3& */ "./resources/js/src/views/pages/components/transaction/transfer/routing/AutomaticRouting.vue?vue&type=template&id=662122d3&");
/* harmony import */ var _AutomaticRouting_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AutomaticRouting.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/components/transaction/transfer/routing/AutomaticRouting.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AutomaticRouting_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AutomaticRouting_vue_vue_type_template_id_662122d3___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AutomaticRouting_vue_vue_type_template_id_662122d3___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/components/transaction/transfer/routing/AutomaticRouting.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/components/transaction/transfer/routing/AutomaticRouting.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/components/transaction/transfer/routing/AutomaticRouting.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AutomaticRouting_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./AutomaticRouting.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/components/transaction/transfer/routing/AutomaticRouting.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AutomaticRouting_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/components/transaction/transfer/routing/AutomaticRouting.vue?vue&type=template&id=662122d3&":
/*!**********************************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/components/transaction/transfer/routing/AutomaticRouting.vue?vue&type=template&id=662122d3& ***!
  \**********************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AutomaticRouting_vue_vue_type_template_id_662122d3___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./AutomaticRouting.vue?vue&type=template&id=662122d3& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/components/transaction/transfer/routing/AutomaticRouting.vue?vue&type=template&id=662122d3&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AutomaticRouting_vue_vue_type_template_id_662122d3___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AutomaticRouting_vue_vue_type_template_id_662122d3___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);