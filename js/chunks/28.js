(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[28],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/guest-in-house/GuestInHouse.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/guest-in-house/GuestInHouse.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ag_grid_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ag-grid-vue */ "./node_modules/ag-grid-vue/main.js");
/* harmony import */ var ag_grid_vue__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ag_grid_vue__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_action_grid_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/action_grid.js */ "./resources/js/src/views/pages/guest-in-house/components/action_grid.js");
/* harmony import */ var _components_FilterHeader_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/FilterHeader.vue */ "./resources/js/src/views/pages/guest-in-house/components/FilterHeader.vue");
/* harmony import */ var _components_NavigationHeader_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/NavigationHeader.vue */ "./resources/js/src/views/pages/guest-in-house/components/NavigationHeader.vue");
/* harmony import */ var _tab_components_SwitchRoom_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tab-components/SwitchRoom.vue */ "./resources/js/src/views/pages/guest-in-house/tab-components/SwitchRoom.vue");
/* harmony import */ var _views_pages_components_registrationForm_RegistrationForm_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/views/pages/components/registrationForm/RegistrationForm.vue */ "./resources/js/src/views/pages/components/registrationForm/RegistrationForm.vue");
/* harmony import */ var _views_pages_components_report_Template_vue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/views/pages/components/report/Template.vue */ "./resources/js/src/views/pages/components/report/Template.vue");
/* harmony import */ var _utils_dialog_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/utils/dialog.js */ "./resources/js/src/utils/dialog.js");
/* harmony import */ var _utils_alert_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/utils/alert.js */ "./resources/js/src/utils/alert.js");
/* harmony import */ var _utils_formConfig_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/utils/formConfig.js */ "./resources/js/src/utils/formConfig.js");
/* harmony import */ var _views_pages_components_Credential__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/views/pages/components/Credential */ "./resources/js/src/views/pages/components/Credential.vue");
/* harmony import */ var _utils_general_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @/utils/general.js */ "./resources/js/src/utils/general.js");
/* harmony import */ var vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! vue-perfect-scrollbar */ "./node_modules/vue-perfect-scrollbar/dist/index.js");
/* harmony import */ var vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _views_pages_components_Number_vue__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @/views/pages/components/Number.vue */ "./resources/js/src/views/pages/components/Number.vue");
/* harmony import */ var _views_pages_components_lock_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @/views/pages/components/lock.js */ "./resources/js/src/views/pages/components/lock.js");
/* harmony import */ var _components_source_status_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/source-status.js */ "./resources/js/src/views/pages/guest-in-house/components/source-status.js");
/* harmony import */ var _views_pages_components_comp_hu_icon_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @/views/pages/components/comp_hu_icon.js */ "./resources/js/src/views/pages/components/comp_hu_icon.js");
/* harmony import */ var _components_incognito_icon_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/incognito_icon.js */ "./resources/js/src/views/pages/guest-in-house/components/incognito_icon.js");
/* harmony import */ var _views_pages_components_expected_arrival_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @/views/pages/components/expected-arrival.js */ "./resources/js/src/views/pages/components/expected-arrival.js");
/* harmony import */ var _views_pages_components_expected_departure_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @/views/pages/components/expected-departure.js */ "./resources/js/src/views/pages/components/expected-departure.js");
/* harmony import */ var _utils_format_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @/utils/format.js */ "./resources/js/src/utils/format.js");
/* harmony import */ var _api_guestinhouse_guestInHouse_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @/api/guestinhouse/guestInHouse.js */ "./resources/js/src/api/guestinhouse/guestInHouse.js");
/* harmony import */ var _api_transaction_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @/api/transaction.js */ "./resources/js/src/api/transaction.js");


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












 // <!------------------additional element---------------------->








 // API



var transactionResource = new _api_transaction_js__WEBPACK_IMPORTED_MODULE_23__["default"]();
var guestInHouseResource = new _api_guestinhouse_guestInHouse_js__WEBPACK_IMPORTED_MODULE_22__["default"](); // <!------------------end additional element---------------------->

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'GuestInHouse',
  props: ['titleForm', 'routeApi', 'mainTableName'],
  components: {
    AgGridVue: ag_grid_vue__WEBPACK_IMPORTED_MODULE_1__["AgGridVue"],
    FilterHeader: _components_FilterHeader_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    NavigationHeader: _components_NavigationHeader_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
    VuePerfectScrollbar: vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_13___default.a,
    InputNumber: _views_pages_components_Number_vue__WEBPACK_IMPORTED_MODULE_14__["default"],
    SwitchRoom: _tab_components_SwitchRoom_vue__WEBPACK_IMPORTED_MODULE_5__["default"],
    RegistrationForm: _views_pages_components_registrationForm_RegistrationForm_vue__WEBPACK_IMPORTED_MODULE_6__["default"],
    Report: _views_pages_components_report_Template_vue__WEBPACK_IMPORTED_MODULE_7__["default"],
    Credential: _views_pages_components_Credential__WEBPACK_IMPORTED_MODULE_11__["default"]
  },
  data: function data() {
    return {
      //Filter Data on Page Size
      vModelDefaultSearchData: '5',
      searchFilterData: [{
        text: this.$t('reservation.folioNumber'),
        value: '0'
      }, {
        text: this.$t('reservation.reservationNumber'),
        value: '1'
      }, {
        text: this.$t('reservation.guestType'),
        value: '2'
      }, // {text: this.$t('reservation.transferTo'), value:'reservation.reservation_by'},
      {
        text: this.$t('reservation.status'),
        value: '3'
      }, {
        text: this.$t('reservation.reservationBy'),
        value: '4'
      }, {
        text: this.$t('reservation.fullname'),
        value: '5'
      }, {
        text: this.$t('reservation.room'),
        value: '6'
      }, {
        text: this.$t('reservation.roomType'),
        value: '7'
      }, {
        text: this.$t('reservation.bedType'),
        value: '8'
      }, {
        text: this.$t('reservation.roomRate'),
        value: '9'
      }, {
        text: this.$t('reservation.voucherNumber'),
        value: '10'
      }, {
        text: this.$t('reservation.taVoucher'),
        value: '11'
      }, {
        text: this.$t('reservation.group'),
        value: '12'
      }, {
        text: this.$t('reservation.company'),
        value: '13'
      }, {
        text: this.$t('reservation.market'),
        value: '14'
      }, {
        text: this.$t('reservation.address'),
        value: '15'
      }, {
        text: this.$t('reservation.state'),
        value: '16'
      }, {
        text: this.$t('reservation.country'),
        value: '17'
      }, {
        text: this.$t('reservation.phone'),
        value: '18'
      }, {
        text: this.$t('reservation.fax'),
        value: '19'
      }, {
        text: this.$t('reservation.documentNumber'),
        value: '20'
      }, {
        text: this.$t('reservation.note'),
        value: '21'
      }, {
        text: this.$t('reservation.hkNote'),
        value: '22'
      }, {
        text: this.$t('reservation.insertBy'),
        value: '23'
      }, {
        text: this.$t('reservation.billInstruction'),
        value: '24'
      }, {
        text: this.$t('table.lastUpdate'),
        value: '25'
      }],
      //form config
      rowMarginBottom: _utils_formConfig_js__WEBPACK_IMPORTED_MODULE_10__["formConfig"].rowMarginBottom,
      sidebarConfig: _utils_formConfig_js__WEBPACK_IMPORTED_MODULE_10__["sidebarConfig"],
      //query data search
      search: {
        searchBy: '',
        keyword: '',
        limit: this.limitDefaultPageSize,
        filter: []
      },
      //Ag-Grid
      columnDefs: null,
      rowData: null,
      gridOptions: null,
      gridApi: null,
      columnApi: null,
      frameworkComponents: null,
      pinnedBottomRowData: null,
      contex: null,
      rowGroupPanelShow: null,
      statusBar: null,
      sideBar: null,
      paginationPageSize: null,
      rowSelection: null,
      dataTracking: null,
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
      modalMoveRoom: false,
      modalSwitchRoom: false,
      btnSaveMoveDisabled: false,
      //------------------need setting manual-----------------//
      //for vModel Data
      vModel: {
        full_name: ''
      },
      //package
      stayInformations: {
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
      },
      //vModel
      vDeposit: {},
      //deposit
      vScheduled: {},
      //schedule rate
      vExtraCharge: {},
      //extra charge
      vMoveRoom: {},
      //move room
      vSwitchRoom: {},
      //switch room
      vComplimentStatus: {},
      changeRate: false,
      rate: {
        weekend: 0,
        weekday: 0
      },
      account: null,
      dateRange: null,
      discount: 0,
      availableRoom: 0,
      roomNumber: [],
      roomRate: [],
      folioNumber: '',
      city: [],
      guestProfile: {},
      state: [],
      totalGuestDeposit: [{
        credit: 0,
        debit: 0
      }],
      readyRoom: true,
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
      switchRooms: [],
      //validation scope//
      scope1: 'stayInformation',
      showTimeRangePanel: false,
      activeTab: 1,
      resetOptionsChange: false,
      resetOptionsChangeMoveRoom: false,
      //title popup//
      title: '',
      //------CREDENTIAL-------//
      activeCredentialPrompt: false,
      credentialTitle: '',
      isCredential: false,
      specialAccessType: null,
      credential: {
        user: '',
        pass: ''
      },
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
      suppressMenu: true,
      resizable: false,
      filter: false,
      cellRenderer: 'actionGrid',
      colId: 'params',
      width: 100
    }, {
      headerName: 'L',
      field: 'is_lock',
      suppressMenu: true,
      resizable: false,
      filter: false,
      width: 30,
      cellStyle: {
        textAlign: 'center'
      },
      cellRenderer: 'iconLockRenderer'
    }, {
      headerName: 'GS',
      field: 'compliment_hu',
      suppressMenu: true,
      resizable: false,
      filter: false,
      width: 40,
      cellStyle: {
        textAlign: 'center'
      },
      cellRenderer: 'iconCompHuRenderer'
    }, {
      headerName: 'IC',
      field: 'is_incognito',
      suppressMenu: true,
      resizable: false,
      filter: false,
      width: 40,
      cellStyle: {
        textAlign: 'center'
      },
      cellRenderer: 'iconIncognitoRenderer'
    }, {
      headerName: 'Full Name',
      field: 'FullName',
      width: 230
    }, {
      headerName: 'Reservation By',
      field: 'reservation_by',
      width: 200
    }, {
      headerName: 'Resv#',
      field: 'reservation_number',
      width: 90
    }, {
      headerName: 'Folio#',
      field: 'folio_number',
      width: 90
    }, {
      headerName: 'Room',
      field: 'room_number',
      width: 75
    }, {
      headerName: 'Arrival',
      field: 'date_arrival',
      width: 100,
      valueFormatter: _utils_format_js__WEBPACK_IMPORTED_MODULE_21__["formatDate"]
    }, {
      headerName: 'Departure',
      field: 'date_departure',
      width: 100,
      cellStyle: {
        textAlign: 'center'
      },
      cellRenderer: 'expectedDepartureRenderer'
    }, {
      headerName: 'Status',
      width: 110,
      field: 'folio_number',
      cellStyle: {
        textAlign: 'center'
      },
      cellRenderer: 'iconStatusRenderer'
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
      valueFormatter: _utils_format_js__WEBPACK_IMPORTED_MODULE_21__["formatNumber"]
    }, {
      headerName: 'Weekend Rate',
      field: 'weekend_rate',
      width: 130,
      cellStyle: {
        textAlign: 'right'
      },
      valueFormatter: _utils_format_js__WEBPACK_IMPORTED_MODULE_21__["formatNumber"]
    }, {
      headerName: 'Room Type',
      field: 'RoomType',
      width: 180
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
      valueFormatter: _utils_format_js__WEBPACK_IMPORTED_MODULE_21__["formatNumber"]
    }, {
      headerName: 'ETA',
      field: 'time_arrival',
      width: 70
    }, {
      headerName: 'ETD',
      field: 'time_departure',
      width: 70
    }, {
      headerName: 'Adult',
      field: 'adult',
      width: 70
    }, {
      headerName: 'Child',
      field: 'child',
      width: 70
    }, {
      headerName: 'Address',
      field: 'Address',
      width: 200
    }, {
      headerName: 'Market',
      field: 'market',
      width: 120
    }, {
      headerName: 'Guest Type',
      field: 'guest_type',
      width: 120
    }, {
      headerName: 'Status',
      field: 'folio_status',
      width: 120
    }, {
      headerName: 'Nationality',
      field: 'nationality',
      width: 120
    }, {
      headerName: 'State',
      field: 'state',
      width: 120
    }, {
      headerName: 'Country',
      field: 'country',
      width: 120
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
      headerName: 'Voucher Number',
      field: 'voucher_number',
      width: 120
    }, {
      headerName: 'Voucher Number TA',
      field: 'voucher_number_ta',
      width: 120
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
      actionGrid: _components_action_grid_js__WEBPACK_IMPORTED_MODULE_2__["default"],
      iconLockRenderer: _views_pages_components_lock_js__WEBPACK_IMPORTED_MODULE_15__["default"],
      iconStatusRenderer: _components_source_status_js__WEBPACK_IMPORTED_MODULE_16__["default"],
      iconCompHuRenderer: _views_pages_components_comp_hu_icon_js__WEBPACK_IMPORTED_MODULE_17__["default"],
      iconIncognitoRenderer: _components_incognito_icon_js__WEBPACK_IMPORTED_MODULE_18__["default"],
      expectedArrivalRenderer: _views_pages_components_expected_arrival_js__WEBPACK_IMPORTED_MODULE_19__["default"],
      expectedDepartureRenderer: _views_pages_components_expected_departure_js__WEBPACK_IMPORTED_MODULE_20__["default"]
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
    this.$store.dispatch('getAuditDate');
  },
  methods: {
    onGridReady: function onGridReady() {},
    // onPinnedRowBottomCount() {
    //     var footerRowsToFloat = document.getElementById('bottom-row-count').value;
    //     var count = Number(footerRowsToFloat);
    //     var rows = createData(count, 'Bottom');
    //     this.gridApi.setPinnedBottomRowData(rows);
    // },
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
        name: this.$t('guestInHouse.contexMenu.walkin'),
        icon: Object(_utils_general_js__WEBPACK_IMPORTED_MODULE_12__["generateIconContextMenuAgGrid"])('walkin_icon24'),
        action: function action() {
          return _this.showForm('', _this.modeData.insert);
        }
      }, {
        name: this.$t('commons.contexMenu.update'),
        disabled: !node,
        icon: Object(_utils_general_js__WEBPACK_IMPORTED_MODULE_12__["generateIconContextMenuAgGrid"])('edit_icon24'),
        action: function action() {
          return _this.showForm(_this.paramsData, _this.modeData.edit);
        }
      }, 'separator', {
        name: this.$t('guestInHouse.contexMenu.transaction'),
        disabled: !node,
        icon: Object(_utils_general_js__WEBPACK_IMPORTED_MODULE_12__["generateIconContextMenuAgGrid"])('transaction_icon24'),
        action: function action() {
          return _this.handleTransaction(_this.paramsData);
        }
      }, 'separator', // {
      // 	name: this.$t('guestInHouse.keylock'),
      // disabled: !node,
      // 	action: () =>
      // },
      {
        name: this.paramsData.compliment_hu == this.roomStatus.compliment ? this.$t('guestInHouse.contexMenu.defaultGuest') : this.$t('guestInHouse.contexMenu.compliment'),
        disabled: !node,
        icon: this.paramsData.compliment_hu == this.roomStatus.compliment ? '' : Object(_utils_general_js__WEBPACK_IMPORTED_MODULE_12__["generateIconContextMenuAgGrid"])('compliment_icon24'),
        action: function action() {
          return _this.handleComplimentHu(_this.roomStatus.compliment);
        }
      }, {
        name: this.paramsData.compliment_hu == this.roomStatus.houseUse ? this.$t('guestInHouse.contexMenu.defaultGuest') : this.$t('guestInHouse.contexMenu.houseUse'),
        disabled: !node,
        icon: this.paramsData.compliment_hu == this.roomStatus.houseUse ? '' : Object(_utils_general_js__WEBPACK_IMPORTED_MODULE_12__["generateIconContextMenuAgGrid"])('house_use_icon24'),
        action: function action() {
          return _this.handleComplimentHu(_this.roomStatus.houseUse);
        }
      }, 'separator', {
        name: this.$t('guestInHouse.contexMenu.autoPostRoomCharge'),
        disabled: !node,
        icon: Object(_utils_general_js__WEBPACK_IMPORTED_MODULE_12__["generateIconContextMenuAgGrid"])('autopost_icon24'),
        action: function action() {
          return _utils_dialog_js__WEBPACK_IMPORTED_MODULE_8__["default"].confirmation(_this, 'handlePostingRoomCharge');
        }
      }, 'separator', {
        name: this.$t('guestInHouse.contexMenu.moveRoom'),
        disabled: !node,
        icon: Object(_utils_general_js__WEBPACK_IMPORTED_MODULE_12__["generateIconContextMenuAgGrid"])('move_room_icon24'),
        action: function action() {
          return _this.handleMoveRoom();
        }
      }, {
        name: this.$t('guestInHouse.contexMenu.switchRoom'),
        disabled: !node,
        icon: Object(_utils_general_js__WEBPACK_IMPORTED_MODULE_12__["generateIconContextMenuAgGrid"])('switch_room_icon24'),
        action: function action() {
          return _this.handleSwitchRoom();
        }
      }, 'separator', {
        name: this.paramsData.is_lock == '-1' ? this.$t('guestInHouse.contexMenu.unlock') : this.$t('guestInHouse.contexMenu.lock'),
        disabled: !node,
        icon: Object(_utils_general_js__WEBPACK_IMPORTED_MODULE_12__["generateIconContextMenuAgGrid"])(this.paramsData.is_lock == '-1' ? 'unlock_icon24' : 'lock_icon24'),
        action: function action() {
          return _utils_dialog_js__WEBPACK_IMPORTED_MODULE_8__["default"].confirmation(_this, 'handleLockFolio', '-1');
        }
      }, {
        name: this.paramsData.is_incognito == true ? this.$t('guestInHouse.contexMenu.removeIncognito') : this.$t('guestInHouse.contexMenu.setIncognito'),
        disabled: !node,
        icon: Object(_utils_general_js__WEBPACK_IMPORTED_MODULE_12__["generateIconContextMenuAgGrid"])('incognito_icon24'),
        action: function action() {
          return _utils_dialog_js__WEBPACK_IMPORTED_MODULE_8__["default"].confirmation(_this, 'handleIncognito', '-1');
        }
      }, 'separator', {
        name: this.$t('guestInHouse.contexMenu.cancelCheckIn'),
        disabled: !node,
        icon: Object(_utils_general_js__WEBPACK_IMPORTED_MODULE_12__["generateIconContextMenuAgGrid"])('cancel_icon24'),
        action: function action() {
          return _this.handleCancelCheckIn();
        }
      }, // {
      // 	name: this.$t('guestInHouse.message'),
      // disabled: !node,
      // 	action: () =>
      // },
      // {
      // 	name: this.$t('guestInHouse.toDo'),
      // disabled: !node,
      // 	action: () =>
      // },
      {
        name: this.$t('guestInHouse.contexMenu.checkOut'),
        disabled: !node,
        icon: Object(_utils_general_js__WEBPACK_IMPORTED_MODULE_12__["generateIconContextMenuAgGrid"])('check_out_icon24'),
        action: function action() {
          return _this.handleCheckOut();
        }
      }, 'separator', {
        name: this.$t('guestInHouse.contexMenu.printFolio'),
        disabled: !node,
        icon: Object(_utils_general_js__WEBPACK_IMPORTED_MODULE_12__["generateIconContextMenuAgGrid"])('print_icon24'),
        action: function action() {
          return _this.handlePrintFolio();
        }
      }, {
        name: this.$t('guestInHouse.contexMenu.printRegistrationForm'),
        disabled: !node,
        icon: Object(_utils_general_js__WEBPACK_IMPORTED_MODULE_12__["generateIconContextMenuAgGrid"])('print_icon24'),
        action: function action() {
          return _this.handlePrintRegistrationForm();
        }
      }];
      return result;
    },
    handleRowRightClicked: function handleRowRightClicked() {
      var vm = this;
      vm.gridApi.forEachNode(function (node) {
        if (node.data.folio_number == vm.paramsData.folio_number) {
          node.setSelected(true, true); // vm.gridApi.ensureIndexVisible(node.rowIndex, 'middle')
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
    getGuestInHouseList: function () {
      var _getGuestInHouseList = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(search) {
        var _this2 = this;

        var selectedNodes, _ref, data, status;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                selectedNodes = this.gridApi != null ? this.gridApi.getSelectedRows() : [];
                selectedNodes = selectedNodes.length > 0 ? selectedNodes[0] : {};
                _context2.next = 5;
                return guestInHouseResource.list(this.search);

              case 5:
                _ref = _context2.sent;
                data = _ref.data;
                this.rowData = data.data;
                this.pinnedBottomRowData = data.total;
                this.$nextTick(function () {
                  Object(_utils_general_js__WEBPACK_IMPORTED_MODULE_12__["rowSelectedAfterRefresh"])(_this2, selectedNodes, 'folio_number');
                });
                this.$vs.loading.close('#layout--main>.con-vs-loading');
                _context2.next = 18;
                break;

              case 13:
                _context2.prev = 13;
                _context2.t0 = _context2["catch"](0);
                this.$vs.loading.close('#layout--main>.con-vs-loading');
                status = _context2.t0.response;
                _utils_alert_js__WEBPACK_IMPORTED_MODULE_9__["default"].errorFetchDataAlert(status);

              case 18:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[0, 13]]);
      }));

      function getGuestInHouseList(_x2) {
        return _getGuestInHouseList.apply(this, arguments);
      }

      return getGuestInHouseList;
    }(),
    editGuestInHouse: function () {
      var _editGuestInHouse = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(id) {
        var _ref2, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                _context3.next = 3;
                return guestInHouseResource.get(id.folio_number);

              case 3:
                _ref2 = _context3.sent;
                data = _ref2.data;
                this.vModel = data.list;
                this.dataLookup.room_rate = data.room_rate;
                this.dataLookup.bed_type = data.bed_type;
                this.$vs.loading.close('#layout--main>.con-vs-loading');
                _context3.next = 15;
                break;

              case 11:
                _context3.prev = 11;
                _context3.t0 = _context3["catch"](0);
                this.$vs.loading.close('#layout--main>.con-vs-loading');
                _utils_alert_js__WEBPACK_IMPORTED_MODULE_9__["default"].errorFetchDataAlert();

              case 15:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[0, 11]]);
      }));

      function editGuestInHouse(_x3) {
        return _editGuestInHouse.apply(this, arguments);
      }

      return editGuestInHouse;
    }(),
    trackingData: function () {
      var _trackingData = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4(id) {
        var _this3 = this;

        var _ref3, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.prev = 0;
                _context4.next = 3;
                return guestInHouseResource.log(id.id_log);

              case 3:
                _ref3 = _context4.sent;
                data = _ref3.data;
                this.dataTracking = data.modelGrid;
                setTimeout(function () {
                  _this3.$vs.loading.close('#layout--main>.con-vs-loading');
                }, 100);
                _context4.next = 13;
                break;

              case 9:
                _context4.prev = 9;
                _context4.t0 = _context4["catch"](0);
                this.$vs.loading.close('#layout--main>.con-vs-loading');
                _utils_alert_js__WEBPACK_IMPORTED_MODULE_9__["default"].errorFetchDataAlert();

              case 13:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this, [[0, 9]]);
      }));

      function trackingData(_x4) {
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
      this.getGuestInHouseList(search);
    },
    resetData: function resetData() {
      this.vModel = {
        arrival: Object(_utils_format_js__WEBPACK_IMPORTED_MODULE_21__["formatDateTimeDatabase"])(this.auditDate + ' ' + this.checkInTime),
        departure: this.departureResv,
        adult: 1,
        child: 0,
        full_name: '',
        commission_value: 0,
        room_type_code: '',
        weekday_rate: 0,
        weekend_rate: 0,
        discount_percent: '-1',
        payment_type_code: 'CASH',
        market_code: this.dvMarket,
        discount: 0,
        is_male: '-1',
        is_incognito: false,
        audit_date: this.auditDate,
        folio_number: 0,
        balance: 0,
        user_id: this.userInfo.code
      };
      this.weekday_rate_discount = 0;
      this.weekend_rate_discount = 0;
      this.dbErrors = {};
      this.dataTracking = null;
      this.resetOptionsChangeMoveRoom = false; //prevent reloading input select change Move Room

      this.$validator.reset();
    },
    showForm: function () {
      var _showForm = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5(idData, modeData) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                this.$refs.registrationForm.showForm(idData, modeData, false);

              case 1:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function showForm(_x5, _x6) {
        return _showForm.apply(this, arguments);
      }

      return showForm;
    }(),
    disabledTab: function disabledTab(mode) {
      var _this4 = this;

      setTimeout(function () {
        if (document.getElementById('stayInformation') != undefined) {
          document.getElementById('extraCharge').disabled = mode == _this4.modeData.insert;
          document.getElementById('scheduledRate').disabled = mode == _this4.modeData.insert;
          document.getElementById('stayInformation').click();
        }
      }, 100);
    },
    //------------------ END Guest In House CRUD------------------//
    //------------------POPULATE SELECT OPTIONS----------------------//
    getDataLookUp: function () {
      var _getDataLookUp = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee6() {
        var _ref4, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.prev = 0;
                _context6.next = 3;
                return guestInHouseResource.dataLookup();

              case 3:
                _ref4 = _context6.sent;
                data = _ref4.data;
                this.dataLookup = data;
                this.city = data.city;
                this.$vs.loading.close('#layout--main>.con-vs-loading');
                this.$vs.loading.close('.popup-body>.con-vs-loading');
                _context6.next = 15;
                break;

              case 11:
                _context6.prev = 11;
                _context6.t0 = _context6["catch"](0);
                this.$vs.loading.close('.popup-body>.con-vs-loading');
                _utils_alert_js__WEBPACK_IMPORTED_MODULE_9__["default"].errorFetchDataAlert();

              case 15:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this, [[0, 11]]);
      }));

      function getDataLookUp() {
        return _getDataLookUp.apply(this, arguments);
      }

      return getDataLookUp;
    }(),
    getRoomNumber: function () {
      var _getRoomNumber = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee7(type, model) {
        var params, _ref5, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                this.btnSaveMoveDisabled = true;
                params = {
                  room_type_code: model.room_type_code,
                  bed_type_code: model.bed_type_code,
                  ready: this.readyRoom,
                  arrival: this.vModel.arrival,
                  departure: this.vModel.departure
                };
                _context7.prev = 2;
                _context7.next = 5;
                return guestInHouseResource.roomNumber(params);

              case 5:
                _ref5 = _context7.sent;
                data = _ref5.data;
                this.vMoveRoom.new_room_number = null;
                this.roomNumber = data.room;
                this.availableRoom = data.available_room; //prevent reloading data selection

                if (type !== 'bed_type') {
                  this.dataLookup.bed_type = data.bed_type;
                  this.getRoomRate(model);
                }

                this.btnSaveMoveDisabled = false;
                _context7.next = 18;
                break;

              case 14:
                _context7.prev = 14;
                _context7.t0 = _context7["catch"](2);
                this.btnSaveMoveDisabled = false;
                _utils_alert_js__WEBPACK_IMPORTED_MODULE_9__["default"].errorFetchDataAlert();

              case 18:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this, [[2, 14]]);
      }));

      function getRoomNumber(_x7, _x8) {
        return _getRoomNumber.apply(this, arguments);
      }

      return getRoomNumber;
    }(),
    getRoomRate: function () {
      var _getRoomRate = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee8(model) {
        var params, _ref6, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                if (!(model.room_type_code != null)) {
                  _context8.next = 13;
                  break;
                }

                params = {
                  room_type: model.room_type_code,
                  arrival: this.vModel.arrival,
                  departure: this.vModel.departure,
                  business_source: this.vModel.business_source_code
                };
                _context8.prev = 2;
                _context8.next = 5;
                return guestInHouseResource.roomRate(params);

              case 5:
                _ref6 = _context8.sent;
                data = _ref6.data;
                this.dataLookup.room_rate = data;
                _context8.next = 13;
                break;

              case 10:
                _context8.prev = 10;
                _context8.t0 = _context8["catch"](2);
                _utils_alert_js__WEBPACK_IMPORTED_MODULE_9__["default"].errorFetchDataAlert();

              case 13:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, this, [[2, 10]]);
      }));

      function getRoomRate(_x9) {
        return _getRoomRate.apply(this, arguments);
      }

      return getRoomRate;
    }(),
    getDailyRate: function () {
      var _getDailyRate = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee9(model) {
        var params, _ref7, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                params = {
                  adult: this.vModel.adult,
                  room_rate: model.room_rate_code
                };
                _context9.prev = 1;
                _context9.next = 4;
                return guestInHouseResource.dailyRate(params);

              case 4:
                _ref7 = _context9.sent;
                data = _ref7.data;
                this.rate = {
                  weekday: parseFloat(data.weekday_rate),
                  weekend: parseFloat(data.weekend_rate)
                };

                if (model == this.vModel) {
                  this.vModel.weekday_rate = this.rate.weekday;
                  this.vModel.weekend_rate = this.rate.weekend;
                } else if (model == this.vMoveRoom && this.vMoveRoom.change_rate == true) {
                  this.vMoveRoom.weekday_rate = this.rate.weekday;
                  this.vMoveRoom.weekend_rate = this.rate.weekend;
                }

                this.setDiscountRate();
                _context9.next = 14;
                break;

              case 11:
                _context9.prev = 11;
                _context9.t0 = _context9["catch"](1);
                _utils_alert_js__WEBPACK_IMPORTED_MODULE_9__["default"].errorFetchDataAlert();

              case 14:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9, this, [[1, 11]]);
      }));

      function getDailyRate(_x10) {
        return _getDailyRate.apply(this, arguments);
      }

      return getDailyRate;
    }(),
    //------------------END POPULATE SELECT OPTIONS----------------------//
    //  DATEPICKER CONFIGURATION //
    dateTodayDisable: function dateTodayDisable(date) {
      var audit = new Date(this.auditDate);
      audit.setDate(audit.getDate() - 1);
      return date < audit;
    },
    toggleTimeRangePanel: function toggleTimeRangePanel() {
      this.showTimeRangePanel = !this.showTimeRangePanel;
    },
    //  END DATEPICKER CONFIGURATION //
    //------------------START SIDEBARR OPTIONS-------------------------------//
    handleSidebarOption: function handleSidebarOption(data) {
      this.folioNumber = data.folio_number;
      this.paramsData = data;
      this.sidebarOption = true;
    },
    //------------------END SIDEBARR OPTIONS-------------------------------//
    //------------------POSTING AUTO ROOM CHARGE---------------------------//
    handlePostingRoomCharge: function handlePostingRoomCharge() {
      this.autoPostingRoomCharge();
    },
    autoPostingRoomCharge: function () {
      var _autoPostingRoomCharge = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee10() {
        var params, _ref8, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                params = {
                  folio_number: this.folioNumber,
                  user_id: this.userInfo.code
                };
                _context10.prev = 1;
                this.$vs.loading({
                  container: '#layout--main',
                  scale: this.scaleLoadingMainLayout
                });
                _context10.next = 5;
                return guestInHouseResource.autoRoomCharge(params);

              case 5:
                _ref8 = _context10.sent;
                data = _ref8.data;

                if (data >= 0) {
                  _utils_dialog_js__WEBPACK_IMPORTED_MODULE_8__["default"].information(this.$t('message.statusPostingRoomCharge.' + data));
                }

                this.$vs.loading.close('#layout--main>.con-vs-loading');
                _context10.next = 15;
                break;

              case 11:
                _context10.prev = 11;
                _context10.t0 = _context10["catch"](1);
                _utils_alert_js__WEBPACK_IMPORTED_MODULE_9__["default"].errorSaveDataAlert();
                this.$vs.loading.close('#layout--main>.con-vs-loading');

              case 15:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10, this, [[1, 11]]);
      }));

      function autoPostingRoomCharge() {
        return _autoPostingRoomCharge.apply(this, arguments);
      }

      return autoPostingRoomCharge;
    }(),
    //------------------END POSTING AUTO ROOM CHARGE-----------------------//
    //----------------START CRUD MOVE ROOM ------------------//
    handleMoveRoom: function () {
      var _handleMoveRoom = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee11() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee11$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                this.$vs.loading({
                  container: '#layout--main',
                  scale: this.scaleLoadingMainLayout
                });
                _context11.next = 3;
                return this.editGuestInHouse(this.paramsData);

              case 3:
                this.resetMoveRoom();
                this.getDataLookUp();
                this.vMoveRoom.current_weekday = this.vModel.weekday_rate;
                this.vMoveRoom.current_weekend = this.vModel.weekend_rate;
                this.$vs.loading.close('#layout--main>.con-vs-loading');
                this.modalMoveRoom = true;
                this.sidebarOption = false;

              case 10:
              case "end":
                return _context11.stop();
            }
          }
        }, _callee11, this);
      }));

      function handleMoveRoom() {
        return _handleMoveRoom.apply(this, arguments);
      }

      return handleMoveRoom;
    }(),
    handleSaveMoveRoom: function handleSaveMoveRoom() {
      var _this5 = this;

      this.$validator.validateAll('moveRoom').then(function (result) {
        if (result) {
          _this5.modalMoveRoom = false;

          _this5.showCredential(true, _this5.accessSpecialOrder.moveRoom);
        }
      });
    },
    handleChangeRate: function handleChangeRate() {
      this.vMoveRoom.weekday_rate = !this.vMoveRoom.change_rate ? this.vMoveRoom.current_weekday : this.rate.weekday;
      this.vMoveRoom.weekend_rate = !this.vMoveRoom.change_rate ? this.vMoveRoom.current_weekend : this.rate.weekend;
    },
    resetMoveRoom: function resetMoveRoom() {
      this.resetOptionsChange = false; //prevent reloading input select change walkin

      this.vMoveRoom = {
        folio_number: this.folioNumber,
        guest_detail_id: this.vModel.guest_detail_id,
        new_room_number: null,
        old_room_number: this.vModel.room_number,
        room_type_code: '',
        bed_type_code: '',
        old_room_rate_code: this.vModel.room_rate_code,
        room_rate_code: '',
        current_weekday: 0,
        current_weekend: 0,
        weekday_rate: 0,
        weekend_rate: 0,
        change_rate: true,
        room_status: this.roomStatus.dirty,
        user_id: this.userInfo.code
      };
      this.dataLookup = {};
      this.readyRoom = true;
      this.$validator.reset();
    },
    moveRoom: function () {
      var _moveRoom = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee12() {
        var _ref9, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee12$(_context12) {
          while (1) {
            switch (_context12.prev = _context12.next) {
              case 0:
                this.vMoveRoom.userBy = this.credential.user;
                this.vMoveRoom.reason = this.credential.reason;
                _context12.prev = 2;
                this.$vs.loading({
                  container: '#layout--main',
                  scale: this.scaleLoadingMainLayout
                });
                _context12.next = 6;
                return guestInHouseResource.moveRoom(this.vMoveRoom);

              case 6:
                _ref9 = _context12.sent;
                data = _ref9.data;
                this.refreshData(this.search);
                this.$vs.loading.close('#layout--main>.con-vs-loading');

                if (data == 0) {
                  _utils_alert_js__WEBPACK_IMPORTED_MODULE_9__["default"].acceptAlertSucces();
                } else if (data > 0) {
                  _utils_dialog_js__WEBPACK_IMPORTED_MODULE_8__["default"].information(this.$t('message.statusMoveRoom.' + data));
                }

                _context12.next = 17;
                break;

              case 13:
                _context12.prev = 13;
                _context12.t0 = _context12["catch"](2);
                this.$vs.loading.close('#layout--main>.con-vs-loading');
                _utils_alert_js__WEBPACK_IMPORTED_MODULE_9__["default"].errorSaveDataAlert();

              case 17:
              case "end":
                return _context12.stop();
            }
          }
        }, _callee12, this, [[2, 13]]);
      }));

      function moveRoom() {
        return _moveRoom.apply(this, arguments);
      }

      return moveRoom;
    }(),
    //----------------END CRUD MOVE ROOM------------------//
    //----------------START CRUD SWITCH ROOM ------------------//
    handleSwitchRoom: function () {
      var _handleSwitchRoom = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee13() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee13$(_context13) {
          while (1) {
            switch (_context13.prev = _context13.next) {
              case 0:
                this.$vs.loading({
                  container: '#layout--main',
                  scale: this.scaleLoadingMainLayout
                });
                this.resetSwitchRoom();
                _context13.next = 4;
                return this.getSwitchRoomList();

              case 4:
                this.vSwitchRoom.user_id = this.userInfo.code;
                this.vMoveRoom.current_weekday = this.vModel.weekday_rate;
                this.vMoveRoom.current_weekend = this.vModel.weekend_rate;
                this.$vs.loading.close('#layout--main>.con-vs-loading');
                this.modalSwitchRoom = true;
                this.sidebarOption = false;

              case 10:
              case "end":
                return _context13.stop();
            }
          }
        }, _callee13, this);
      }));

      function handleSwitchRoom() {
        return _handleSwitchRoom.apply(this, arguments);
      }

      return handleSwitchRoom;
    }(),
    handleSaveSwitchRoom: function handleSaveSwitchRoom() {
      if (this.vSwitchRoom.guest_detail_id_to) {
        this.$vs.loading({
          container: '#layout--main',
          scale: this.scaleLoadingMainLayout
        });
        this.switchRoom(this.vSwitchRoom);
      } else {
        _utils_dialog_js__WEBPACK_IMPORTED_MODULE_8__["default"].information(this.$t('message.selectSwitchRoom'));
      }
    },
    resetSwitchRoom: function resetSwitchRoom() {
      this.vSwitchRoom = {
        guest_detail_id_from: '',
        room_number_from: '',
        room_type_code_from: null,
        bed_type_code_from: '',
        room_rate_code_from: '',
        weekday_rate_from: 0,
        weekend_rate_from: 0,
        user_id: this.userInfo.code
      };
    },
    getSwitchRoomList: function () {
      var _getSwitchRoomList = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee14() {
        var params, _ref10, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee14$(_context14) {
          while (1) {
            switch (_context14.prev = _context14.next) {
              case 0:
                _context14.prev = 0;
                params = {
                  number: this.folioNumber
                };
                _context14.next = 4;
                return guestInHouseResource.listSwitchRoom(params);

              case 4:
                _ref10 = _context14.sent;
                data = _ref10.data;
                this.vSwitchRoom = data.from;
                this.switchRooms = data.to;
                _context14.next = 13;
                break;

              case 10:
                _context14.prev = 10;
                _context14.t0 = _context14["catch"](0);
                _utils_alert_js__WEBPACK_IMPORTED_MODULE_9__["default"].errorFetchDataAlert();

              case 13:
              case "end":
                return _context14.stop();
            }
          }
        }, _callee14, this, [[0, 10]]);
      }));

      function getSwitchRoomList() {
        return _getSwitchRoomList.apply(this, arguments);
      }

      return getSwitchRoomList;
    }(),
    switchRoom: function () {
      var _switchRoom = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee15(data) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee15$(_context15) {
          while (1) {
            switch (_context15.prev = _context15.next) {
              case 0:
                _context15.prev = 0;
                _context15.next = 3;
                return guestInHouseResource.switchRoom(data);

              case 3:
                this.modalSwitchRoom = false;
                this.refreshData(this.search);
                this.$vs.loading.close('#layout--main>.con-vs-loading');
                _utils_alert_js__WEBPACK_IMPORTED_MODULE_9__["default"].acceptAlertSucces();
                _context15.next = 13;
                break;

              case 9:
                _context15.prev = 9;
                _context15.t0 = _context15["catch"](0);
                this.$vs.loading.close('#layout--main>.con-vs-loading');
                _utils_alert_js__WEBPACK_IMPORTED_MODULE_9__["default"].errorSaveDataAlert();

              case 13:
              case "end":
                return _context15.stop();
            }
          }
        }, _callee15, this, [[0, 9]]);
      }));

      function switchRoom(_x11) {
        return _switchRoom.apply(this, arguments);
      }

      return switchRoom;
    }(),
    //----------------END CRUD SWITCH ROOM------------------//
    //----------------START COMPLIMENT HOUSE USE---------------//
    handleComplimentHu: function () {
      var _handleComplimentHu = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee16(status) {
        var accessType;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee16$(_context16) {
          while (1) {
            switch (_context16.prev = _context16.next) {
              case 0:
                _context16.next = 2;
                return this.editGuestInHouse(this.paramsData);

              case 2:
                if (this.vModel.compliment_hu == status) {
                  status = null;
                }

                this.vComplimentStatus = {
                  number: this.folioNumber,
                  compliment_hu: status,
                  user_id: this.userInfo.code
                };
                accessType = status == this.roomStatus.houseUse ? this.accessSpecialOrder.houseUseGuest : this.accessSpecialOrder.complimentGuest;
                this.showCredential(true, accessType);

              case 6:
              case "end":
                return _context16.stop();
            }
          }
        }, _callee16, this);
      }));

      function handleComplimentHu(_x12) {
        return _handleComplimentHu.apply(this, arguments);
      }

      return handleComplimentHu;
    }(),
    setComplimentHu: function () {
      var _setComplimentHu = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee17() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee17$(_context17) {
          while (1) {
            switch (_context17.prev = _context17.next) {
              case 0:
                this.vComplimentStatus.reason = this.credential.reason;
                this.vComplimentStatus.userBy = this.credential.user;
                _context17.prev = 2;
                _context17.next = 5;
                return guestInHouseResource.complimentHu(this.vComplimentStatus);

              case 5:
                this.sidebarOption = false;
                this.refreshData(this.search);
                _utils_alert_js__WEBPACK_IMPORTED_MODULE_9__["default"].acceptAlertSucces();
                _context17.next = 13;
                break;

              case 10:
                _context17.prev = 10;
                _context17.t0 = _context17["catch"](2);
                _utils_alert_js__WEBPACK_IMPORTED_MODULE_9__["default"].errorSaveDataAlert();

              case 13:
              case "end":
                return _context17.stop();
            }
          }
        }, _callee17, this, [[2, 10]]);
      }));

      function setComplimentHu() {
        return _setComplimentHu.apply(this, arguments);
      }

      return setComplimentHu;
    }(),
    //----------------END COMPLIMENT HOUSE USE-----------------//
    //----------------START LOCK FOLIO---------------//
    handleLockFolio: function () {
      var _handleLockFolio = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee18(value) {
        var data;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee18$(_context18) {
          while (1) {
            switch (_context18.prev = _context18.next) {
              case 0:
                this.sidebarOption = false;
                _context18.next = 3;
                return this.editGuestInHouse(this.paramsData);

              case 3:
                if (this.vModel.is_lock == value) {
                  value = '0';
                }

                data = {
                  number: this.folioNumber,
                  is_lock: value,
                  user_id: this.userInfo.code
                };
                this.lockFolio(data);

              case 6:
              case "end":
                return _context18.stop();
            }
          }
        }, _callee18, this);
      }));

      function handleLockFolio(_x13) {
        return _handleLockFolio.apply(this, arguments);
      }

      return handleLockFolio;
    }(),
    lockFolio: function () {
      var _lockFolio = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee19(data) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee19$(_context19) {
          while (1) {
            switch (_context19.prev = _context19.next) {
              case 0:
                _context19.next = 2;
                return guestInHouseResource.lock(data);

              case 2:
                this.sidebarOption = false;
                this.refreshData(this.search);

              case 4:
              case "end":
                return _context19.stop();
            }
          }
        }, _callee19, this);
      }));

      function lockFolio(_x14) {
        return _lockFolio.apply(this, arguments);
      }

      return lockFolio;
    }(),
    //----------------END LOCK FOLIO-----------------//
    //----------------START INCOGNITO---------------//
    handleIncognito: function () {
      var _handleIncognito = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee20(value) {
        var data;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee20$(_context20) {
          while (1) {
            switch (_context20.prev = _context20.next) {
              case 0:
                _context20.next = 2;
                return this.editGuestInHouse(this.paramsData);

              case 2:
                if (this.vModel.is_incognito == true) {
                  value = '0';
                }

                data = {
                  number: this.folioNumber,
                  is_incognito: value,
                  user_id: this.userInfo.code
                };
                this.setIncognito(data);

              case 5:
              case "end":
                return _context20.stop();
            }
          }
        }, _callee20, this);
      }));

      function handleIncognito(_x15) {
        return _handleIncognito.apply(this, arguments);
      }

      return handleIncognito;
    }(),
    setIncognito: function () {
      var _setIncognito = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee21(data) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee21$(_context21) {
          while (1) {
            switch (_context21.prev = _context21.next) {
              case 0:
                _context21.next = 2;
                return guestInHouseResource.incognito(data);

              case 2:
                this.sidebarOption = false;
                this.refreshData(this.search);

              case 4:
              case "end":
                return _context21.stop();
            }
          }
        }, _callee21, this);
      }));

      function setIncognito(_x16) {
        return _setIncognito.apply(this, arguments);
      }

      return setIncognito;
    }(),
    //----------------END INCOGNITO-----------------//
    //----------------START CANCEL CHECK IN---------------//
    handleCancelCheckIn: function () {
      var _handleCancelCheckIn = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee22() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee22$(_context22) {
          while (1) {
            switch (_context22.prev = _context22.next) {
              case 0:
                this.sidebarOption = false;
                _context22.next = 3;
                return this.editGuestInHouse(this.paramsData);

              case 3:
                if (Object(_utils_format_js__WEBPACK_IMPORTED_MODULE_21__["formatDateDatabase"])(this.vModel.arrival) == this.auditDate) {
                  _utils_dialog_js__WEBPACK_IMPORTED_MODULE_8__["default"].confirmation(this, 'showCredential', true, this.accessSpecialOrder.cancelCheckIn);
                } else {
                  _utils_dialog_js__WEBPACK_IMPORTED_MODULE_8__["default"].information(this.$t('message.canNotCancelCheckIn'));
                }

              case 4:
              case "end":
                return _context22.stop();
            }
          }
        }, _callee22, this);
      }));

      function handleCancelCheckIn() {
        return _handleCancelCheckIn.apply(this, arguments);
      }

      return handleCancelCheckIn;
    }(),
    cancelCheckIn: function () {
      var _cancelCheckIn = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee23() {
        var params, _ref11, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee23$(_context23) {
          while (1) {
            switch (_context23.prev = _context23.next) {
              case 0:
                params = {
                  arrival: this.vModel.arrival,
                  departure: this.vModel.departure,
                  reservation_number: this.vModel.reservation_number,
                  number: this.folioNumber,
                  reason: this.credential.reason,
                  user_by: this.credential.user,
                  user_id: this.userInfo.code
                };
                _context23.next = 3;
                return guestInHouseResource.cancelCheckIn(params);

              case 3:
                _ref11 = _context23.sent;
                data = _ref11.data;

                if (data.value == 0) {
                  _utils_alert_js__WEBPACK_IMPORTED_MODULE_9__["default"].acceptAlertSuccesCancelCheckIn();
                } else if (data.value > 0) {
                  if (data.value == 1) {
                    _utils_dialog_js__WEBPACK_IMPORTED_MODULE_8__["default"].information(this.$t('message.canNotCancelCheckIn'));
                  } else if (data.value == 2) {
                    _utils_dialog_js__WEBPACK_IMPORTED_MODULE_8__["default"].information(this.$t('message.canNotCancelCheckInResponseValue2'));
                  } else if (data.value == 3) {
                    _utils_dialog_js__WEBPACK_IMPORTED_MODULE_8__["default"].information(this.$t('message.folioTransferMessage') + data.transferMessage);
                  } else if (data.value == 4) {
                    _utils_dialog_js__WEBPACK_IMPORTED_MODULE_8__["default"].information(this.$t('message.folioHaveTransferMessage') + data.transferMessage);
                  }
                }

                this.sidebarOption = false;
                this.refreshData(this.search);

              case 8:
              case "end":
                return _context23.stop();
            }
          }
        }, _callee23, this);
      }));

      function cancelCheckIn() {
        return _cancelCheckIn.apply(this, arguments);
      }

      return cancelCheckIn;
    }(),
    //----------------END COMPLIMENT HOUSE USE-----------------//
    //----------------START CHECK OUT---------------//
    handleCheckOut: function () {
      var _handleCheckOut = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee24() {
        var _this6 = this;

        var balance;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee24$(_context24) {
          while (1) {
            switch (_context24.prev = _context24.next) {
              case 0:
                this.sidebarOption = false;
                _context24.next = 3;
                return this.getBalance();

              case 3:
                balance = this.balance;

                if (balance == 'null' || balance == null) {
                  this.$vs.dialog({
                    color: 'warning',
                    title: this.$t('message.informationTitle'),
                    text: this.$t('message.checkOutWithoutTransaction'),
                    accept: function accept() {
                      _this6.checkOut();
                    }
                  });
                } else if (balance < 0 || balance > 0) {
                  _utils_dialog_js__WEBPACK_IMPORTED_MODULE_8__["default"].information(this.$t('message.cannotCheckFolioUnbalance'));
                } else if (balance == 0) {
                  _utils_dialog_js__WEBPACK_IMPORTED_MODULE_8__["default"].confirmation(this, 'checkOut');
                }

              case 5:
              case "end":
                return _context24.stop();
            }
          }
        }, _callee24, this);
      }));

      function handleCheckOut() {
        return _handleCheckOut.apply(this, arguments);
      }

      return handleCheckOut;
    }(),
    checkOut: function () {
      var _checkOut = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee25() {
        var params, _ref12, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee25$(_context25) {
          while (1) {
            switch (_context25.prev = _context25.next) {
              case 0:
                params = {
                  number: this.folioNumber,
                  user_id: this.userInfo.code
                };
                _context25.next = 3;
                return guestInHouseResource.checkOut(params);

              case 3:
                _ref12 = _context25.sent;
                data = _ref12.data;

                if (data.value === 0) {
                  _utils_alert_js__WEBPACK_IMPORTED_MODULE_9__["default"].acceptAlertSuccesWithText(this.$t('message.statusCheckOut.0'));
                } else if (data.value > 0) {
                  _utils_dialog_js__WEBPACK_IMPORTED_MODULE_8__["default"].information(this.$t('message.statusCheckOut.' + data.value) + "\n" + data.message);
                }

                this.refreshData(this.search);

              case 7:
              case "end":
                return _context25.stop();
            }
          }
        }, _callee25, this);
      }));

      function checkOut() {
        return _checkOut.apply(this, arguments);
      }

      return checkOut;
    }(),
    getBalance: function () {
      var _getBalance = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee26() {
        var _ref13, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee26$(_context26) {
          while (1) {
            switch (_context26.prev = _context26.next) {
              case 0:
                _context26.next = 2;
                return transactionResource.balance({
                  q: this.folioNumber
                });

              case 2:
                _ref13 = _context26.sent;
                data = _ref13.data;
                this.balance = data.balance;

              case 5:
              case "end":
                return _context26.stop();
            }
          }
        }, _callee26, this);
      }));

      function getBalance() {
        return _getBalance.apply(this, arguments);
      }

      return getBalance;
    }(),
    //----------------END CHECK OUT---------------//
    //----------------START OTHER OPTION------------------//
    handleTransaction: function () {
      var _handleTransaction = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee27() {
        var _ref14, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee27$(_context27) {
          while (1) {
            switch (_context27.prev = _context27.next) {
              case 0:
                this.sidebarOption = false;
                this.$vs.loading({
                  container: '#layout--main',
                  scale: this.scaleLoadingMainLayout
                });
                _context27.next = 4;
                return guestInHouseResource.get(this.paramsData.folio_number);

              case 4:
                _ref14 = _context27.sent;
                data = _ref14.data;
                this.$router.push({
                  name: 'transaction',
                  params: {
                    form: this.mFormType.guestInHouse,
                    stayInformations: data ? data.list : this.stayInformations
                  }
                });

              case 7:
              case "end":
                return _context27.stop();
            }
          }
        }, _callee27, this);
      }));

      function handleTransaction() {
        return _handleTransaction.apply(this, arguments);
      }

      return handleTransaction;
    }(),
    // PRINT,
    handlePrintRegistrationForm: function handlePrintRegistrationForm() {
      var newTabReport = this.$router.resolve({
        path: '/report/preview?reportId=' + this.mReportId.registrationFormInHouse + '&folioNumber=' + this.paramsData.folio_number + '&template=' + this.mStimulsoftReportFileDirectory.registrationFormInHouse
      });
      window.open(newTabReport.href, '_blank');
    },
    handlePrintFolio: function handlePrintFolio() {
      var newTabReport = this.$router.resolve({
        path: '/report/preview?reportId=' + this.mReportId.folio + '&folioNumber=' + this.paramsData.folio_number + '&template=' + this.mStimulsoftReportFileDirectory.folio
      });
      window.open(newTabReport.href, '_blank');
    },
    //----------------END OTHER OPTION------------------//
    setDiscountRate: function setDiscountRate() {
      var discount1;
      var discount2;

      if (this.vModel.discount_percent == '-1') {
        discount1 = this.vModel.weekday_rate * this.vModel.discount / 100;
        discount2 = this.vModel.weekend_rate * this.vModel.discount / 100;
      } else {
        discount1 = this.vModel.discount;
        discount2 = this.vModel.discount;
      }

      this.weekday_rate_discount = this.vModel.weekday_rate - discount1;
      this.weekend_rate_discount = this.vModel.weekend_rate - discount2;
    },
    //------------------end need setting manual for crud-----------------//
    //--------------------CREDENTIAL----------------------------------------//
    showCredential: function showCredential(isCredential, type) {
      this.credential = {};
      this.activeCredentialPrompt = true;
      this.isCredential = isCredential;
      this.specialAccessType = type;
    },
    acceptReason: function acceptReason() {
      if (this.specialAccessType == this.accessSpecialOrder.moveRoom) {
        this.moveRoom();
      } else if (this.specialAccessType == this.accessSpecialOrder.cancelCheckIn) {
        this.cancelCheckIn();
      } else if (this.specialAccessType == this.accessSpecialOrder.complimentGuest || this.specialAccessType == this.accessSpecialOrder.houseUseGuest) {
        this.setComplimentHu();
      }
    } //--------------------CREDENTIAL----------------------------------------//

  },
  mounted: function mounted() {
    this.gridApi = this.gridOptions.api;
    this.ColumnApi = this.gridOptions.columnApi;
  },
  watch: {
    availableRoom: function availableRoom(value) {
      if (document.getElementById('available')) {
        if (value <= 0) {
          document.getElementById('available').style.color = '#ff0000';
        } else {
          document.getElementById('available').style.color = '';
          document.getElementById('available').classList.remove('apply-shake');
        }
      }
    },
    sidebarOption: function sidebarOption() {
      if (!this.sidebarOption) {
        document.getElementById('main-container').click();
      }
    }
  },
  computed: {
    departureResv: function departureResv() {
      var departure = new Date(Object(_utils_format_js__WEBPACK_IMPORTED_MODULE_21__["formatDateTimeDatabase"])(this.auditDate + ' ' + this.checkOutLimit));
      departure.setDate(departure.getDate() + 1);
      return Object(_utils_format_js__WEBPACK_IMPORTED_MODULE_21__["formatDateTimeDatabase"])(departure);
    },
    auditDate: {
      get: function get() {
        return this.$store.state.auditLog.auditDate;
      }
    },
    checkInTime: {
      get: function get() {
        return this.$store.state.checkInTime;
      }
    },
    dvMarket: function dvMarket() {
      return this.$store.getters.dvMarket;
    },
    checkOutLimit: function checkOutLimit() {
      return this.$store.getters.checkOutLimit;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/guest-in-house/components/FilterHeader.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/guest-in-house/components/FilterHeader.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    searchOption: Array,
    searchDefault: String,
    limitPageSize: Number
  },
  data: function data() {
    return {
      mWalkedIn: true,
      mCheckedIn: true,
      mDeparture: true,
      all: true,
      vModelSelectLimitData: 0,
      vModelSearchData: '',
      vModelTextSearchData: ''
    };
  },
  methods: {
    onRefreshData: function onRefreshData(limit) {
      var _this = this;

      var search = {
        searchBy: this.vModelSearchData,
        keyword: this.vModelTextSearchData,
        limit: limit >= 0 ? limit : this.limitPageSize,
        walked_in: this.mWalkedIn,
        checked_in: this.mCheckedIn,
        departure: this.mDeparture
      };
      this.vModelSelectLimitData = this.vModelSelectLimitData == '' ? 0 : this.vModelSelectLimitData;
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
    this.vModelSelectLimitData = this.limitDefaultPageSize;
    this.onRefreshData();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/guest-in-house/components/NavigationHeader.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/guest-in-house/components/NavigationHeader.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************/
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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/guest-in-house/tab-components/SwitchRoom.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/guest-in-house/tab-components/SwitchRoom.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var ag_grid_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ag-grid-vue */ "./node_modules/ag-grid-vue/main.js");
/* harmony import */ var ag_grid_vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(ag_grid_vue__WEBPACK_IMPORTED_MODULE_0__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

//
//
//
//
//
//
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
  name: 'switchRoomTable',
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
      rowSelection: null,
      selectedRow: null
    };
  },
  beforeMount: function beforeMount() {
    this.gridOptions = {
      rowHeight: this.rowHeightDefault
    }; //------------------need setting manual for column table-----------------//
    // use this.$t("value") for transaltion localization------//
    // see value in @/lang/en.js //

    this.columnDefs = [{
      headerName: this.$t('table.room'),
      field: 'room_number_to',
      width: 80
    }, {
      headerName: this.$t('table.fullName'),
      field: 'full_name_to',
      width: 200
    }, {
      headerName: this.$t('table.roomType'),
      field: 'room_type_to',
      width: 170
    }, {
      headerName: this.$t('inhouse.roomRate'),
      field: 'room_rate_to',
      width: 170
    }, {
      headerName: this.$t('table.folioNumber'),
      field: 'folio_number_to',
      width: 120
    }]; //------------------end need setting manual for column table-----------------//

    this.context = {
      componentParent: this
    };
    this.frameworkComponents = {};
    this.paginationPageSize = this.limitDefaultPageSize;
    this.rowSelection = 'single';
    this.rowModelType = 'serverSide';
  },
  methods: {
    onGridReady: function onGridReady() {},
    getSelectedRow: function getSelectedRow() {
      var _this$gridApi$getSele = this.gridApi.getSelectedRows(),
          _this$gridApi$getSele2 = _slicedToArray(_this$gridApi$getSele, 1),
          selected = _this$gridApi$getSele2[0];

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

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/guest-in-house/GuestInHouse.vue?vue&type=style&index=0&id=318b13c0&scoped=true&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/guest-in-house/GuestInHouse.vue?vue&type=style&index=0&id=318b13c0&scoped=true&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".body-sidebar[data-v-318b13c0]{\n  margin-left: 10px\n}\n.footer-sidebar[data-v-318b13c0]{\n  margin-left: 10px\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/guest-in-house/GuestInHouse.vue?vue&type=style&index=0&id=318b13c0&scoped=true&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/guest-in-house/GuestInHouse.vue?vue&type=style&index=0&id=318b13c0&scoped=true&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader??ref--7-1!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./GuestInHouse.vue?vue&type=style&index=0&id=318b13c0&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/guest-in-house/GuestInHouse.vue?vue&type=style&index=0&id=318b13c0&scoped=true&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/guest-in-house/GuestInHouse.vue?vue&type=template&id=318b13c0&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/guest-in-house/GuestInHouse.vue?vue&type=template&id=318b13c0&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************/
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
        on: { showModal: _vm.showForm, refreshData: _vm.refreshData }
      }),
      _vm._v(" "),
      _c("filter-header", {
        ref: "filterHeader",
        attrs: {
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
              enableRangeSelection: false,
              statusBar: _vm.statusBar,
              gridOptions: _vm.gridOptions,
              context: _vm.context,
              columnDefs: _vm.columnDefs,
              frameworkComponents: _vm.frameworkComponents,
              enableCellChangeFlash: true,
              rowSelection: _vm.rowSelection,
              rowData: _vm.rowData,
              defaultColDef: _vm.defColDef,
              pinnedBottomRowData: _vm.pinnedBottomRowData,
              getContextMenuItems: _vm.getContextMenu
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
      _c("registration-form", {
        ref: "registrationForm",
        attrs: { isReservation: false, isGuestInHouse: true },
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
              _c(
                "vs-sidebar-item",
                {
                  attrs: { index: "3" },
                  on: {
                    click: function($event) {
                      return _vm.handleComplimentHu(_vm.roomStatus.compliment)
                    }
                  }
                },
                [
                  _vm.paramsData.compliment_hu !== _vm.roomStatus.compliment
                    ? _c("img", {
                        class:
                          _vm.sidebarConfig.iconMarginRight +
                          " " +
                          _vm.sidebarConfig.iconMarginLeft,
                        attrs: {
                          border: _vm.sidebarConfig.iconBorder,
                          width: _vm.sidebarConfig.iconWidth,
                          height: _vm.sidebarConfig.iconHeight,
                          src: "/images/icons/compliment_icon24.png"
                        }
                      })
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.paramsData.compliment_hu === _vm.roomStatus.compliment
                    ? _c("span", [_vm._v("DEFAULT GUEST")])
                    : _c("span", [_vm._v("COMPLIMENT")])
                ]
              ),
              _vm._v(" "),
              _c(
                "vs-sidebar-item",
                {
                  attrs: { index: "4" },
                  on: {
                    click: function($event) {
                      return _vm.handleComplimentHu(_vm.roomStatus.houseUse)
                    }
                  }
                },
                [
                  _vm.paramsData.compliment_hu !== _vm.roomStatus.houseUse
                    ? _c("img", {
                        class:
                          _vm.sidebarConfig.iconMarginRight +
                          " " +
                          _vm.sidebarConfig.iconMarginLeft,
                        attrs: {
                          border: _vm.sidebarConfig.iconBorder,
                          width: _vm.sidebarConfig.iconWidth,
                          height: _vm.sidebarConfig.iconHeight,
                          src: "/images/icons/house_use_icon24.png"
                        }
                      })
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.paramsData.compliment_hu === _vm.roomStatus.houseUse
                    ? _c("span", [_vm._v("DEFAULT GUEST")])
                    : _c("span", [_vm._v("HOUSE USE")])
                ]
              ),
              _vm._v(" "),
              _c(
                "vs-sidebar-group",
                { attrs: { title: "Other" } },
                [
                  _c(
                    "vs-sidebar-item",
                    {
                      attrs: { index: "2.1" },
                      on: {
                        click: function($event) {
                          return _vm.handlePostingRoomCharge()
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
                          src: "/images/icons/autopost_icon24.png"
                        }
                      }),
                      _vm._v(
                        "\n                        AUTO POST ROOM CHARGE\n                    "
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "vs-sidebar-item",
                    {
                      attrs: { index: "2.2" },
                      on: {
                        click: function($event) {
                          return _vm.handleMoveRoom()
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
                          src: "/images/icons/move_room_icon24.png"
                        }
                      }),
                      _vm._v(
                        "\n                        MOVE-ROOM\n                    "
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "vs-sidebar-item",
                    {
                      attrs: { index: "2.3" },
                      on: {
                        click: function($event) {
                          return _vm.handleSwitchRoom()
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
                          src: "/images/icons/switch_room_icon24.png"
                        }
                      }),
                      _vm._v(
                        "\n                        SWITCH ROOM\n                    "
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "vs-sidebar-item",
                    {
                      attrs: { index: "2.4" },
                      on: {
                        click: function($event) {
                          return _vm.handleLockFolio("-1")
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
                          src:
                            "/images/icons/" +
                            (_vm.paramsData.is_lock == "-1"
                              ? "unlock_icon24.png"
                              : "lock_icon24.png")
                        }
                      }),
                      _vm._v(" "),
                      _vm.paramsData.is_lock == "-1"
                        ? _c("span", [_vm._v("UNLOCK")])
                        : _c("span", [_vm._v("LOCK")])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "vs-sidebar-item",
                    {
                      attrs: { index: "2.5" },
                      on: {
                        click: function($event) {
                          return _vm.handleIncognito("-1")
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
                          src: "/images/icons/incognito_icon24.png"
                        }
                      }),
                      _vm._v(" "),
                      _vm.paramsData.is_incognito == true
                        ? _c("span", [_vm._v("REMOVE INCOGNITO")])
                        : _c("span", [_vm._v("SET INCOGNITO")])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "vs-sidebar-item",
                    {
                      attrs: { index: "2.6" },
                      on: {
                        click: function($event) {
                          return _vm.handleCancelCheckIn()
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
                          src: "/images/icons/cancel_icon24.png"
                        }
                      }),
                      _vm._v(
                        "\n                        CANCEL CHECK IN\n                    "
                      )
                    ]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c("vs-divider", { attrs: { position: "center" } }),
              _vm._v(" "),
              _c(
                "vs-sidebar-item",
                {
                  attrs: { index: "5" },
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
              _c("vs-divider", { attrs: { position: "center" } }, [
                _vm._v("PRINT")
              ]),
              _vm._v(" "),
              _c(
                "vs-sidebar-item",
                {
                  attrs: { index: "6" },
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
              ),
              _vm._v(" "),
              _c(
                "vs-sidebar-item",
                {
                  attrs: { index: "7" },
                  on: {
                    click: function($event) {
                      return _vm.handlePrintRegistrationForm()
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
                  _vm._v(
                    "\n                    PRINT REG. FORM\n                "
                  )
                ]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c("div", {
            staticClass: "footer-sidebar",
            attrs: { slot: "footer" },
            slot: "footer"
          })
        ]
      ),
      _vm._v(" "),
      _c(
        "vs-popup",
        {
          attrs: {
            active: _vm.modalMoveRoom,
            title:
              _vm.$t("inhouse.title.moveRoom") + ": " + _vm.vModel.room_number
          },
          on: {
            "update:active": function($event) {
              _vm.modalMoveRoom = $event
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
                    "div",
                    {
                      ref: "form",
                      staticClass: "form-container",
                      staticStyle: { padding: "20px", "padding-top": "0px" }
                    },
                    [
                      _c(
                        "vs-row",
                        {
                          class: _vm.rowMarginBottom,
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
                                "wrap-form-select w-full md:w-1/2 required"
                            },
                            [
                              _c("vs-row", [
                                _c("label", [
                                  _vm._v(_vm._s(_vm.$t("table.roomType")))
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
                                        value: "required",
                                        expression: "'required'"
                                      }
                                    ],
                                    staticClass: "w-full",
                                    attrs: {
                                      id: "form-select",
                                      clearable: false,
                                      placeholder: _vm.$t("table.select"),
                                      label: "name",
                                      reduce: function(value) {
                                        return value.code
                                      },
                                      options: _vm.dataLookup.room_type,
                                      name: "room type",
                                      "data-vv-scope": "moveRoom"
                                    },
                                    on: {
                                      input: function($event) {
                                        _vm.getRoomNumber(null, _vm.vMoveRoom)
                                        _vm.resetOptionsChangeMoveRoom = true
                                      }
                                    },
                                    model: {
                                      value: _vm.vMoveRoom.room_type_code,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.vMoveRoom,
                                          "room_type_code",
                                          $$v
                                        )
                                      },
                                      expression: "vMoveRoom.room_type_code"
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
                                            "moveRoom.room type"
                                          ),
                                          expression:
                                            "errors.has('moveRoom.room type')"
                                        }
                                      ],
                                      staticClass: "error-text text-danger"
                                    },
                                    [
                                      _vm._v(
                                        _vm._s(
                                          _vm.errors.first("moveRoom.room type")
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
                                "wrap-form-select w-full md:w-1/2 required"
                            },
                            [
                              _c("vs-row", [
                                _c("label", [
                                  _vm._v(_vm._s(_vm.$t("table.bedType")))
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
                                        value: "required",
                                        expression: "'required'"
                                      }
                                    ],
                                    staticClass: "w-full",
                                    attrs: {
                                      id: "form-select",
                                      resetOnOptionsChange:
                                        _vm.resetOptionsChangeMoveRoom,
                                      clearable: false,
                                      placeholder: _vm.$t("table.select"),
                                      label: "name",
                                      reduce: function(value) {
                                        return value.code
                                      },
                                      options: _vm.dataLookup.bed_type,
                                      name: "bed type",
                                      "data-vv-scope": "moveRoom"
                                    },
                                    on: {
                                      input: function($event) {
                                        return _vm.getRoomNumber(
                                          "bed_type",
                                          _vm.vMoveRoom
                                        )
                                      }
                                    },
                                    model: {
                                      value: _vm.vMoveRoom.bed_type_code,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.vMoveRoom,
                                          "bed_type_code",
                                          $$v
                                        )
                                      },
                                      expression: "vMoveRoom.bed_type_code"
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
                                            "moveRoom.bed type"
                                          ),
                                          expression:
                                            "errors.has('moveRoom.bed type')"
                                        }
                                      ],
                                      staticClass: "error-text text-danger"
                                    },
                                    [
                                      _vm._v(
                                        _vm._s(
                                          _vm.errors.first("moveRoom.bed type")
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
                          class: _vm.rowMarginBottom,
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
                                "wrap-form-select w-full md:w-1/2 required"
                            },
                            [
                              _c("vs-row", [
                                _c("label", [
                                  _vm._v(_vm._s(_vm.$t("table.room")))
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
                                        value: "required",
                                        expression: "'required'"
                                      }
                                    ],
                                    staticClass: "w-full",
                                    attrs: {
                                      id: "form-select",
                                      resetOptionsChange: true,
                                      clearable: false,
                                      placeholder: _vm.$t("table.select"),
                                      label: "number",
                                      reduce: function(value) {
                                        return value.number
                                      },
                                      options: _vm.roomNumber,
                                      name: "room number",
                                      "data-vv-scope": "moveRoom"
                                    },
                                    model: {
                                      value: _vm.vMoveRoom.new_room_number,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.vMoveRoom,
                                          "new_room_number",
                                          $$v
                                        )
                                      },
                                      expression: "vMoveRoom.new_room_number"
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
                                            "moveRoom.room number"
                                          ),
                                          expression:
                                            "errors.has('moveRoom.room number')"
                                        }
                                      ],
                                      staticClass: "error-text text-danger"
                                    },
                                    [
                                      _vm._v(
                                        _vm._s(
                                          _vm.errors.first(
                                            "moveRoom.room number"
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
                          class: _vm.rowMarginBottom,
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
                              label: _vm.$t("inhouse.currentWeekday")
                            },
                            model: {
                              value: _vm.vMoveRoom.current_weekday,
                              callback: function($$v) {
                                _vm.$set(_vm.vMoveRoom, "current_weekday", $$v)
                              },
                              expression: "vMoveRoom.current_weekday"
                            }
                          }),
                          _vm._v(" "),
                          _c("input-number", {
                            staticClass: "w-full md:w-1/2",
                            attrs: {
                              disabled: "",
                              label: _vm.$t("inhouse.currentWeekend")
                            },
                            model: {
                              value: _vm.vMoveRoom.current_weekend,
                              callback: function($$v) {
                                _vm.$set(_vm.vMoveRoom, "current_weekend", $$v)
                              },
                              expression: "vMoveRoom.current_weekend"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "vs-row",
                        {
                          class: _vm.rowMarginBottom,
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
                                "wrap-form-select w-full md:w-1/2 required"
                            },
                            [
                              _c(
                                "vs-row",
                                [
                                  _c("vs-row", [
                                    _c("label", [
                                      _vm._v(
                                        _vm._s(_vm.$t("reservation.roomRate"))
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
                                    staticClass: "w-full",
                                    attrs: {
                                      id: "form-select",
                                      resetOnOptionsChange:
                                        _vm.resetOptionsChangeMoveRoom,
                                      clearable: false,
                                      placeholder: _vm.$t("table.select"),
                                      label: "name",
                                      reduce: function(value) {
                                        return value.code
                                      },
                                      options: _vm.dataLookup.room_rate,
                                      name: "room rate",
                                      "data-vv-scope": "moveRoom"
                                    },
                                    on: {
                                      input: function($event) {
                                        _vm.getDailyRate(_vm.vMoveRoom)
                                        _vm.handleChangeRate()
                                      }
                                    },
                                    model: {
                                      value: _vm.vMoveRoom.room_rate_code,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.vMoveRoom,
                                          "room_rate_code",
                                          $$v
                                        )
                                      },
                                      expression: "vMoveRoom.room_rate_code"
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
                                            "moveRoom.room rate"
                                          ),
                                          expression:
                                            "errors.has('moveRoom.room rate')"
                                        }
                                      ],
                                      staticClass: "error-text text-danger"
                                    },
                                    [
                                      _vm._v(
                                        _vm._s(
                                          _vm.errors.first("moveRoom.room rate")
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
                            { staticClass: "wrap-form-select w-full md:w-1/2" },
                            [
                              _c("vs-row", [_vm._v(".")]),
                              _vm._v(" "),
                              _c(
                                "vs-row",
                                { staticClass: "wrap-form-select w-full" },
                                [
                                  _c(
                                    "vs-checkbox",
                                    {
                                      staticClass: "w-full",
                                      staticStyle: {
                                        padding: "0px",
                                        margin: "inherit"
                                      },
                                      on: {
                                        input: function($event) {
                                          return _vm.handleChangeRate()
                                        }
                                      },
                                      model: {
                                        value: _vm.vMoveRoom.change_rate,
                                        callback: function($$v) {
                                          _vm.$set(
                                            _vm.vMoveRoom,
                                            "change_rate",
                                            $$v
                                          )
                                        },
                                        expression: "vMoveRoom.change_rate"
                                      }
                                    },
                                    [
                                      _vm._v(
                                        _vm._s(_vm.$t("inhouse.changeRate"))
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
                          class: _vm.rowMarginBottom,
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
                              label: _vm.$t("inhouse.newWeekday")
                            },
                            model: {
                              value: _vm.vMoveRoom.weekday_rate,
                              callback: function($$v) {
                                _vm.$set(_vm.vMoveRoom, "weekday_rate", $$v)
                              },
                              expression: "vMoveRoom.weekday_rate"
                            }
                          }),
                          _vm._v(" "),
                          _c("input-number", {
                            staticClass: "w-full md:w-1/2",
                            attrs: {
                              disabled: "",
                              label: _vm.$t("inhouse.newWeekend")
                            },
                            model: {
                              value: _vm.vMoveRoom.weekend_rate,
                              callback: function($$v) {
                                _vm.$set(_vm.vMoveRoom, "weekend_rate", $$v)
                              },
                              expression: "vMoveRoom.weekend_rate"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("vs-divider", [
                        _vm._v(_vm._s(_vm.$t("inhouse.roomStatusMoveRoom")))
                      ]),
                      _vm._v(" "),
                      _c(
                        "vs-row",
                        {
                          staticClass: "mb-3",
                          attrs: {
                            "vs-type": "flex",
                            "vs-justify": "space-between"
                          }
                        },
                        [
                          _c(
                            "vs-radio",
                            {
                              attrs: { "vs-value": _vm.roomStatus.ready },
                              model: {
                                value: _vm.vMoveRoom.room_status,
                                callback: function($$v) {
                                  _vm.$set(_vm.vMoveRoom, "room_status", $$v)
                                },
                                expression: "vMoveRoom.room_status"
                              }
                            },
                            [_vm._v(_vm._s(_vm.$t("roomStatus.ready")))]
                          ),
                          _vm._v(" "),
                          _c(
                            "vs-radio",
                            {
                              attrs: {
                                color: "success",
                                "vs-value": _vm.roomStatus.clean
                              },
                              model: {
                                value: _vm.vMoveRoom.room_status,
                                callback: function($$v) {
                                  _vm.$set(_vm.vMoveRoom, "room_status", $$v)
                                },
                                expression: "vMoveRoom.room_status"
                              }
                            },
                            [_vm._v(_vm._s(_vm.$t("roomStatus.clean")))]
                          ),
                          _vm._v(" "),
                          _c(
                            "vs-radio",
                            {
                              attrs: {
                                color: "brown",
                                "vs-value": _vm.roomStatus.dirty
                              },
                              model: {
                                value: _vm.vMoveRoom.room_status,
                                callback: function($$v) {
                                  _vm.$set(_vm.vMoveRoom, "room_status", $$v)
                                },
                                expression: "vMoveRoom.room_status"
                              }
                            },
                            [_vm._v(_vm._s(_vm.$t("roomStatus.dirty")))]
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
                "div",
                {
                  staticClass: "footer-sidebar",
                  attrs: { slot: "footer" },
                  slot: "footer"
                },
                [
                  _c(
                    "vs-row",
                    { attrs: { "vs-justify": "space-between" } },
                    [
                      _c(
                        "vs-button",
                        {
                          staticClass: "vs-con-loading__container",
                          attrs: {
                            disabled: _vm.btnSaveMoveDisabled,
                            id: "button-save-move",
                            icon: "save"
                          },
                          on: {
                            click: function($event) {
                              return _vm.handleSaveMoveRoom()
                            }
                          }
                        },
                        [_vm._v(_vm._s(_vm.$t("table.save")))]
                      ),
                      _vm._v(" "),
                      _c(
                        "vs-button",
                        {
                          attrs: { color: "danger" },
                          on: {
                            click: function($event) {
                              _vm.modalMoveRoom = !_vm.modalMoveRoom
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
        "vs-popup",
        {
          attrs: {
            active: _vm.modalSwitchRoom,
            title: _vm.$t("inhouse.title.switchRoom")
          },
          on: {
            "update:active": function($event) {
              _vm.modalSwitchRoom = $event
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
                    "div",
                    {
                      ref: "form",
                      staticClass: "form-container",
                      staticStyle: { padding: "20px", "padding-top": "0px" }
                    },
                    [
                      _c("vs-divider", [
                        _vm._v(_vm._s(_vm.$t("inhouse.switchFrom")))
                      ]),
                      _vm._v(" "),
                      _c(
                        "vs-row",
                        {
                          attrs: {
                            "vs-type": "flex",
                            "vs-justify": "space-between"
                          }
                        },
                        [
                          _c("vs-input", {
                            staticClass: "w-full md:w-1/2",
                            attrs: {
                              disabled: "",
                              label: _vm.$t("table.room")
                            },
                            model: {
                              value: _vm.vSwitchRoom.room_number_from,
                              callback: function($$v) {
                                _vm.$set(
                                  _vm.vSwitchRoom,
                                  "room_number_from",
                                  $$v
                                )
                              },
                              expression: "vSwitchRoom.room_number_from"
                            }
                          }),
                          _vm._v(" "),
                          _c("vs-input", {
                            staticClass: "w-full md:w-1/2",
                            attrs: {
                              disabled: "",
                              label: _vm.$t("table.fullName")
                            },
                            model: {
                              value: _vm.vSwitchRoom.full_name_from,
                              callback: function($$v) {
                                _vm.$set(_vm.vSwitchRoom, "full_name_from", $$v)
                              },
                              expression: "vSwitchRoom.full_name_from"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "vs-row",
                        {
                          staticClass: "mt-3 mb-3",
                          attrs: {
                            "vs-type": "flex",
                            "vs-justify": "space-between"
                          }
                        },
                        [
                          _c("vs-input", {
                            staticClass: "w-full md:w-1/2",
                            attrs: {
                              disabled: "",
                              label: _vm.$t("table.roomType")
                            },
                            model: {
                              value: _vm.vSwitchRoom.room_type_from,
                              callback: function($$v) {
                                _vm.$set(_vm.vSwitchRoom, "room_type_from", $$v)
                              },
                              expression: "vSwitchRoom.room_type_from"
                            }
                          }),
                          _vm._v(" "),
                          _c("vs-input", {
                            staticClass: "w-full md:w-1/2",
                            attrs: {
                              disabled: "",
                              label: _vm.$t("inhouse.roomRate")
                            },
                            model: {
                              value: _vm.vSwitchRoom.room_rate_from,
                              callback: function($$v) {
                                _vm.$set(_vm.vSwitchRoom, "room_rate_from", $$v)
                              },
                              expression: "vSwitchRoom.room_rate_from"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("vs-divider", [
                        _vm._v(_vm._s(_vm.$t("inhouse.switchTo")))
                      ]),
                      _vm._v(" "),
                      _c("switch-room", {
                        attrs: { data: _vm.switchRooms },
                        on: {
                          selected: function(value) {
                            return Object.assign(_vm.vSwitchRoom, value)
                          }
                        }
                      })
                    ],
                    1
                  )
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "footer-sidebar mt-3",
                  attrs: { slot: "footer" },
                  slot: "footer"
                },
                [
                  _c(
                    "vs-row",
                    { attrs: { "vs-justify": "space-between" } },
                    [
                      _c(
                        "vs-button",
                        {
                          staticClass: "vs-con-loading__container",
                          attrs: { id: "button-save-switch", icon: "save" },
                          on: {
                            click: function($event) {
                              return _vm.handleSaveSwitchRoom()
                            }
                          }
                        },
                        [_vm._v(_vm._s(_vm.$t("table.save")))]
                      ),
                      _vm._v(" "),
                      _c(
                        "vs-button",
                        {
                          attrs: { color: "danger" },
                          on: {
                            click: function($event) {
                              _vm.modalSwitchRoom = !_vm.modalSwitchRoom
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
          acceptReason: function($event) {
            return _vm.acceptReason()
          },
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/guest-in-house/components/FilterHeader.vue?vue&type=template&id=309ebe91&":
/*!**********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/guest-in-house/components/FilterHeader.vue?vue&type=template&id=309ebe91& ***!
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
                                { attrs: { color: "#C62583" } },
                                [
                                  _c(
                                    "vs-checkbox",
                                    {
                                      on: {
                                        change: function($event) {
                                          return _vm.onRefreshData()
                                        }
                                      },
                                      model: {
                                        value: _vm.mWalkedIn,
                                        callback: function($$v) {
                                          _vm.mWalkedIn = $$v
                                        },
                                        expression: "mWalkedIn"
                                      }
                                    },
                                    [_vm._v("Walked In")]
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
                                      on: {
                                        change: function($event) {
                                          return _vm.onRefreshData()
                                        }
                                      },
                                      model: {
                                        value: _vm.mCheckedIn,
                                        callback: function($$v) {
                                          _vm.mCheckedIn = $$v
                                        },
                                        expression: "mCheckedIn"
                                      }
                                    },
                                    [_vm._v("Checked In")]
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
                                          return _vm.onRefreshData()
                                        }
                                      },
                                      model: {
                                        value: _vm.mDeparture,
                                        callback: function($$v) {
                                          _vm.mDeparture = $$v
                                        },
                                        expression: "mDeparture"
                                      }
                                    },
                                    [_vm._v("Departure")]
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
                                { attrs: { color: "#31FD4B" } },
                                [
                                  _c(
                                    "vs-checkbox",
                                    {
                                      attrs: { "vs-value": "C" },
                                      on: {
                                        change: function($event) {
                                          return _vm.selectAll()
                                        }
                                      },
                                      model: {
                                        value: _vm.all,
                                        callback: function($$v) {
                                          _vm.all = $$v
                                        },
                                        expression: "all"
                                      }
                                    },
                                    [_vm._v("Select All")]
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/guest-in-house/components/NavigationHeader.vue?vue&type=template&id=74f0202d&":
/*!**************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/guest-in-house/components/NavigationHeader.vue?vue&type=template&id=74f0202d& ***!
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
            [_vm._v(_vm._s(_vm.$t("inhouse.walkin")))]
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/guest-in-house/tab-components/SwitchRoom.vue?vue&type=template&id=476b523a&":
/*!************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/guest-in-house/tab-components/SwitchRoom.vue?vue&type=template&id=476b523a& ***!
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
    [
      _c("ag-grid-vue", {
        class: _vm.themeAgGrid,
        style: _vm.StyleAgGridFrame1,
        attrs: {
          gridOptions: _vm.gridOptions,
          columnDefs: _vm.columnDefs,
          rowData: _vm.data,
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

/***/ "./resources/js/src/views/pages/components/expected-arrival.js":
/*!*********************************************************************!*\
  !*** ./resources/js/src/views/pages/components/expected-arrival.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (vue__WEBPACK_IMPORTED_MODULE_0___default.a.extend({
  template: "\n    <div style=\"margin-top:2.5px\" class=\"reservation-status-grid\">\n    <vs-chip v-if=\"(date.arrival == $store.state.auditLog.auditDate) && (status == 'N' ||  status == 'W')\" color=\"#FF002A\">\n        {{data | fulldate}}\n    </vs-chip>\n    <span v-else>{{data | fulldate}}</span>\n    </div>\n         ",
  data: function data() {
    return {
      data: null,
      status: null,
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
    this.status = this.params.data.status_code;
    this.date = {
      arrival: this.params.data.DateArrival,
      departure: this.params.data.DateDeparture
    };
  },
  methods: {}
}));

/***/ }),

/***/ "./resources/js/src/views/pages/components/expected-departure.js":
/*!***********************************************************************!*\
  !*** ./resources/js/src/views/pages/components/expected-departure.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (vue__WEBPACK_IMPORTED_MODULE_0___default.a.extend({
  template: "\n    <div style=\"margin-top:2.5px\" class=\"reservation-status-grid\">\n    <vs-chip v-if=\"(data <= $store.state.auditLog.auditDate)\" color=\"#FF002A\">\n        {{data | fulldate}}\n    </vs-chip>\n    <span v-else>{{data | fulldate}}</span>\n    </div>\n         ",
  data: function data() {
    return {
      data: null,
      status: null,
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
    this.status = this.params.data.status_code;
    this.date = {
      arrival: this.params.data.DateArrival,
      departure: this.params.data.DateDeparture
    };
  },
  methods: {}
}));

/***/ }),

/***/ "./resources/js/src/views/pages/guest-in-house/GuestInHouse.vue":
/*!**********************************************************************!*\
  !*** ./resources/js/src/views/pages/guest-in-house/GuestInHouse.vue ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _GuestInHouse_vue_vue_type_template_id_318b13c0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GuestInHouse.vue?vue&type=template&id=318b13c0&scoped=true& */ "./resources/js/src/views/pages/guest-in-house/GuestInHouse.vue?vue&type=template&id=318b13c0&scoped=true&");
/* harmony import */ var _GuestInHouse_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GuestInHouse.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/guest-in-house/GuestInHouse.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _GuestInHouse_vue_vue_type_style_index_0_id_318b13c0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GuestInHouse.vue?vue&type=style&index=0&id=318b13c0&scoped=true&lang=css& */ "./resources/js/src/views/pages/guest-in-house/GuestInHouse.vue?vue&type=style&index=0&id=318b13c0&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _GuestInHouse_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _GuestInHouse_vue_vue_type_template_id_318b13c0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _GuestInHouse_vue_vue_type_template_id_318b13c0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "318b13c0",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/guest-in-house/GuestInHouse.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/guest-in-house/GuestInHouse.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/src/views/pages/guest-in-house/GuestInHouse.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GuestInHouse_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./GuestInHouse.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/guest-in-house/GuestInHouse.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GuestInHouse_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/guest-in-house/GuestInHouse.vue?vue&type=style&index=0&id=318b13c0&scoped=true&lang=css&":
/*!*******************************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/guest-in-house/GuestInHouse.vue?vue&type=style&index=0&id=318b13c0&scoped=true&lang=css& ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_GuestInHouse_vue_vue_type_style_index_0_id_318b13c0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader??ref--7-1!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./GuestInHouse.vue?vue&type=style&index=0&id=318b13c0&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/guest-in-house/GuestInHouse.vue?vue&type=style&index=0&id=318b13c0&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_GuestInHouse_vue_vue_type_style_index_0_id_318b13c0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_GuestInHouse_vue_vue_type_style_index_0_id_318b13c0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_GuestInHouse_vue_vue_type_style_index_0_id_318b13c0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_GuestInHouse_vue_vue_type_style_index_0_id_318b13c0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_GuestInHouse_vue_vue_type_style_index_0_id_318b13c0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/src/views/pages/guest-in-house/GuestInHouse.vue?vue&type=template&id=318b13c0&scoped=true&":
/*!*****************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/guest-in-house/GuestInHouse.vue?vue&type=template&id=318b13c0&scoped=true& ***!
  \*****************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GuestInHouse_vue_vue_type_template_id_318b13c0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./GuestInHouse.vue?vue&type=template&id=318b13c0&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/guest-in-house/GuestInHouse.vue?vue&type=template&id=318b13c0&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GuestInHouse_vue_vue_type_template_id_318b13c0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GuestInHouse_vue_vue_type_template_id_318b13c0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/pages/guest-in-house/components/FilterHeader.vue":
/*!*********************************************************************************!*\
  !*** ./resources/js/src/views/pages/guest-in-house/components/FilterHeader.vue ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FilterHeader_vue_vue_type_template_id_309ebe91___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FilterHeader.vue?vue&type=template&id=309ebe91& */ "./resources/js/src/views/pages/guest-in-house/components/FilterHeader.vue?vue&type=template&id=309ebe91&");
/* harmony import */ var _FilterHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FilterHeader.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/guest-in-house/components/FilterHeader.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _FilterHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FilterHeader_vue_vue_type_template_id_309ebe91___WEBPACK_IMPORTED_MODULE_0__["render"],
  _FilterHeader_vue_vue_type_template_id_309ebe91___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/guest-in-house/components/FilterHeader.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/guest-in-house/components/FilterHeader.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/guest-in-house/components/FilterHeader.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FilterHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./FilterHeader.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/guest-in-house/components/FilterHeader.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FilterHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/guest-in-house/components/FilterHeader.vue?vue&type=template&id=309ebe91&":
/*!****************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/guest-in-house/components/FilterHeader.vue?vue&type=template&id=309ebe91& ***!
  \****************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FilterHeader_vue_vue_type_template_id_309ebe91___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./FilterHeader.vue?vue&type=template&id=309ebe91& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/guest-in-house/components/FilterHeader.vue?vue&type=template&id=309ebe91&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FilterHeader_vue_vue_type_template_id_309ebe91___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FilterHeader_vue_vue_type_template_id_309ebe91___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/pages/guest-in-house/components/NavigationHeader.vue":
/*!*************************************************************************************!*\
  !*** ./resources/js/src/views/pages/guest-in-house/components/NavigationHeader.vue ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _NavigationHeader_vue_vue_type_template_id_74f0202d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NavigationHeader.vue?vue&type=template&id=74f0202d& */ "./resources/js/src/views/pages/guest-in-house/components/NavigationHeader.vue?vue&type=template&id=74f0202d&");
/* harmony import */ var _NavigationHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NavigationHeader.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/guest-in-house/components/NavigationHeader.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _NavigationHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _NavigationHeader_vue_vue_type_template_id_74f0202d___WEBPACK_IMPORTED_MODULE_0__["render"],
  _NavigationHeader_vue_vue_type_template_id_74f0202d___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/guest-in-house/components/NavigationHeader.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/guest-in-house/components/NavigationHeader.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/guest-in-house/components/NavigationHeader.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NavigationHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./NavigationHeader.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/guest-in-house/components/NavigationHeader.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NavigationHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/guest-in-house/components/NavigationHeader.vue?vue&type=template&id=74f0202d&":
/*!********************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/guest-in-house/components/NavigationHeader.vue?vue&type=template&id=74f0202d& ***!
  \********************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NavigationHeader_vue_vue_type_template_id_74f0202d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./NavigationHeader.vue?vue&type=template&id=74f0202d& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/guest-in-house/components/NavigationHeader.vue?vue&type=template&id=74f0202d&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NavigationHeader_vue_vue_type_template_id_74f0202d___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NavigationHeader_vue_vue_type_template_id_74f0202d___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/pages/guest-in-house/components/action_grid.js":
/*!*******************************************************************************!*\
  !*** ./resources/js/src/views/pages/guest-in-house/components/action_grid.js ***!
  \*******************************************************************************/
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

/***/ }),

/***/ "./resources/js/src/views/pages/guest-in-house/components/incognito_icon.js":
/*!**********************************************************************************!*\
  !*** ./resources/js/src/views/pages/guest-in-house/components/incognito_icon.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (vue__WEBPACK_IMPORTED_MODULE_0___default.a.extend({
  template: "\n    <div style=\"margin-top:2.5px\">\n        <img v-if=\"data === true\" src=\"/images/icons/inc.png\" width=\"20\" height=\"20\">\n    </div>\n         ",
  data: function data() {
    return {
      data: null
    };
  },
  mounted: function mounted() {
    this.data = this.params.data.is_incognito;
  },
  methods: {}
}));

/***/ }),

/***/ "./resources/js/src/views/pages/guest-in-house/components/source-status.js":
/*!*********************************************************************************!*\
  !*** ./resources/js/src/views/pages/guest-in-house/components/source-status.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (vue__WEBPACK_IMPORTED_MODULE_0___default.a.extend({
  template: "\n    <div style=\"margin-top:2.5px\" class=\"reservation-status-grid\">\n\n        <vs-chip v-if=\"date.departure == auditDate && data > 0\" color=\"#FF002A\">\n            Checked In\n        </vs-chip>\n\n        <vs-chip v-else-if=\"date.departure != auditDate && data > 0\" color=\"#2494C6\">\n            Checked In\n        </vs-chip>\n        <span v-else-if=\"date.departure == null && data == null\" >\n\n        </span>\n        <vs-chip v-else-if=\"date.departure == auditDate && data == 0\" color=\"#FF002A\">\n            Walked In\n        </vs-chip>\n\n        <vs-chip v-else-if=\"date.departure != auditDate && data == 0\" color=\"#C62583\">\n            Walked In\n        </vs-chip>\n\n\n    </div>\n         ",
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
    this.data = this.params.data.reservation_number;
    this.date = {
      arrival: this.params.data.date_arrival,
      departure: this.params.data.date_departure
    };
  },
  computed: {
    auditDate: {
      get: function get() {
        return this.$store.state.auditLog.auditDate;
      }
    }
  },
  methods: {}
}));

/***/ }),

/***/ "./resources/js/src/views/pages/guest-in-house/tab-components/SwitchRoom.vue":
/*!***********************************************************************************!*\
  !*** ./resources/js/src/views/pages/guest-in-house/tab-components/SwitchRoom.vue ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SwitchRoom_vue_vue_type_template_id_476b523a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SwitchRoom.vue?vue&type=template&id=476b523a& */ "./resources/js/src/views/pages/guest-in-house/tab-components/SwitchRoom.vue?vue&type=template&id=476b523a&");
/* harmony import */ var _SwitchRoom_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SwitchRoom.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/guest-in-house/tab-components/SwitchRoom.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SwitchRoom_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SwitchRoom_vue_vue_type_template_id_476b523a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SwitchRoom_vue_vue_type_template_id_476b523a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/guest-in-house/tab-components/SwitchRoom.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/guest-in-house/tab-components/SwitchRoom.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/guest-in-house/tab-components/SwitchRoom.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SwitchRoom_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./SwitchRoom.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/guest-in-house/tab-components/SwitchRoom.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SwitchRoom_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/guest-in-house/tab-components/SwitchRoom.vue?vue&type=template&id=476b523a&":
/*!******************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/guest-in-house/tab-components/SwitchRoom.vue?vue&type=template&id=476b523a& ***!
  \******************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SwitchRoom_vue_vue_type_template_id_476b523a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./SwitchRoom.vue?vue&type=template&id=476b523a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/guest-in-house/tab-components/SwitchRoom.vue?vue&type=template&id=476b523a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SwitchRoom_vue_vue_type_template_id_476b523a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SwitchRoom_vue_vue_type_template_id_476b523a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);