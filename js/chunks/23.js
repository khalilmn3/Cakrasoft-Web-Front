(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[23],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/reservations/Reservation.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/reservations/Reservation.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_request_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/utils/request.js */ "./resources/js/src/utils/request.js");
/* harmony import */ var ag_grid_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ag-grid-vue */ "./node_modules/ag-grid-vue/main.js");
/* harmony import */ var ag_grid_vue__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ag_grid_vue__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_action_grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/action_grid */ "./resources/js/src/views/pages/reservations/components/action_grid.js");
/* harmony import */ var _components_FilterHeader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/FilterHeader */ "./resources/js/src/views/pages/reservations/components/FilterHeader.vue");
/* harmony import */ var _components_NavigationHeader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/NavigationHeader */ "./resources/js/src/views/pages/reservations/components/NavigationHeader.vue");
/* harmony import */ var _components_GroupCheckInForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/GroupCheckInForm */ "./resources/js/src/views/pages/reservations/components/GroupCheckInForm.vue");
/* harmony import */ var _components_CancelReservation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/CancelReservation */ "./resources/js/src/views/pages/reservations/components/CancelReservation.vue");
/* harmony import */ var _views_pages_components_registrationForm_RegistrationForm_vue__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/views/pages/components/registrationForm/RegistrationForm.vue */ "./resources/js/src/views/pages/components/registrationForm/RegistrationForm.vue");
/* harmony import */ var _views_pages_components_report_Template_vue__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/views/pages/components/report/Template.vue */ "./resources/js/src/views/pages/components/report/Template.vue");
/* harmony import */ var _views_pages_components_Credential__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/views/pages/components/Credential */ "./resources/js/src/views/pages/components/Credential.vue");
/* harmony import */ var _utils_general_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/utils/general.js */ "./resources/js/src/utils/general.js");
/* harmony import */ var _utils_alert_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @/utils/alert.js */ "./resources/js/src/utils/alert.js");
/* harmony import */ var _utils_dialog_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @/utils/dialog.js */ "./resources/js/src/utils/dialog.js");
/* harmony import */ var _utils_formConfig_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @/utils/formConfig.js */ "./resources/js/src/utils/formConfig.js");
/* harmony import */ var _sass_vuexy_components_datepicker_scss__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @sass/vuexy/components/datepicker.scss */ "./resources/sass/vuexy/components/datepicker.scss");
/* harmony import */ var _sass_vuexy_components_datepicker_scss__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_sass_vuexy_components_datepicker_scss__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _views_pages_components_Number__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @/views/pages/components/Number */ "./resources/js/src/views/pages/components/Number.vue");
/* harmony import */ var _views_pages_components_lock_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @/views/pages/components/lock.js */ "./resources/js/src/views/pages/components/lock.js");
/* harmony import */ var _components_reservation_status_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/reservation-status.js */ "./resources/js/src/views/pages/reservations/components/reservation-status.js");
/* harmony import */ var _views_pages_components_expected_arrival_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @/views/pages/components/expected-arrival.js */ "./resources/js/src/views/pages/components/expected-arrival.js");
/* harmony import */ var _views_pages_components_expected_departure_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @/views/pages/components/expected-departure.js */ "./resources/js/src/views/pages/components/expected-departure.js");
/* harmony import */ var _views_pages_components_hk_status_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @/views/pages/components/hk_status.js */ "./resources/js/src/views/pages/components/hk_status.js");
/* harmony import */ var _utils_format_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @/utils/format.js */ "./resources/js/src/utils/format.js");
/* harmony import */ var _api_reservation_reservation__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @/api/reservation/reservation */ "./resources/js/src/api/reservation/reservation.js");
/* harmony import */ var _api_reservation_guestGroup__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @/api/reservation/guestGroup */ "./resources/js/src/api/reservation/guestGroup.js");
/* harmony import */ var _api_transaction__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @/api/transaction */ "./resources/js/src/api/transaction.js");
/* harmony import */ var _api_masterFolio__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @/api/masterFolio */ "./resources/js/src/api/masterFolio.js");
/* harmony import */ var _api_reservation_deposit__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @/api/reservation/deposit */ "./resources/js/src/api/reservation/deposit.js");


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














 // <!------------------additional element---------------------->






 //------for format----- //


 // <!------------------end additional element---------------------->






var masterFolioResource = new _api_masterFolio__WEBPACK_IMPORTED_MODULE_26__["default"]();
var transactionResource = new _api_transaction__WEBPACK_IMPORTED_MODULE_25__["default"]();
var guestGroupResource = new _api_reservation_guestGroup__WEBPACK_IMPORTED_MODULE_24__["default"]();
var reservationResource = new _api_reservation_reservation__WEBPACK_IMPORTED_MODULE_23__["default"]();
var depositResource = new _api_reservation_deposit__WEBPACK_IMPORTED_MODULE_27__["default"]();
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'Reservation',
  props: ['titleForm', 'routeApi', 'mainTableName'],
  components: {
    AgGridVue: ag_grid_vue__WEBPACK_IMPORTED_MODULE_2__["AgGridVue"],
    FilterHeader: _components_FilterHeader__WEBPACK_IMPORTED_MODULE_4__["default"],
    NavigationHeader: _components_NavigationHeader__WEBPACK_IMPORTED_MODULE_5__["default"],
    InputNumber: _views_pages_components_Number__WEBPACK_IMPORTED_MODULE_16__["default"],
    GroupCheckInForm: _components_GroupCheckInForm__WEBPACK_IMPORTED_MODULE_6__["default"],
    RegistrationForm: _views_pages_components_registrationForm_RegistrationForm_vue__WEBPACK_IMPORTED_MODULE_8__["default"],
    Report: _views_pages_components_report_Template_vue__WEBPACK_IMPORTED_MODULE_9__["default"],
    Credential: _views_pages_components_Credential__WEBPACK_IMPORTED_MODULE_10__["default"],
    CancelReservation: _components_CancelReservation__WEBPACK_IMPORTED_MODULE_7__["default"]
  },
  data: function data() {
    return {
      //Filter Data on Page Size
      vModelDefaultSearchData: '14',
      searchFilterData: [{
        text: this.$t('reservation.status'),
        value: '0'
      }, {
        text: this.$t('reservation.reservationBy'),
        value: '1'
      }, {
        text: this.$t('reservation.address'),
        value: '2'
      }, {
        text: this.$t('reservation.state'),
        value: '3'
      }, {
        text: this.$t('reservation.country'),
        value: '4'
      }, {
        text: this.$t('reservation.phone'),
        value: '5'
      }, {
        text: this.$t('reservation.fax'),
        value: '6'
      }, {
        text: this.$t('reservation.documentNumber'),
        value: '7'
      }, {
        text: this.$t('reservation.bookingCode'),
        value: '8'
      }, {
        text: this.$t('reservation.note'),
        value: '9'
      }, {
        text: this.$t('reservation.hkNote'),
        value: '10'
      }, {
        text: this.$t('reservation.roomStatus'),
        value: '11'
      }, {
        text: this.$t('reservation.insertBy'),
        value: '12'
      }, {
        text: this.$t('reservation.cancelBy'),
        value: '13'
      }, {
        text: this.$t('reservation.fullname'),
        value: '14'
      }, {
        text: this.$t('table.number'),
        value: '15'
      }, {
        text: this.$t('reservation.room'),
        value: '16'
      }, {
        text: this.$t('reservation.roomType'),
        value: '17'
      }, {
        text: this.$t('reservation.bedType'),
        value: '18'
      }, {
        text: this.$t('reservation.roomRate'),
        value: '19'
      }, {
        text: this.$t('reservation.taVoucher'),
        value: '20'
      }, {
        text: this.$t('reservation.group'),
        value: '21'
      }, {
        text: this.$t('reservation.company'),
        value: '22'
      }, {
        text: this.$t('reservation.market'),
        value: '23'
      }, {
        text: this.$t('reservation.billInstruction'),
        value: '24'
      }, {
        text: this.$t('table.lastUpdate'),
        value: '25'
      }],
      //form config
      rowMarginBottom: _utils_formConfig_js__WEBPACK_IMPORTED_MODULE_14__["formConfig"].rowMarginBottom,
      sidebarConfig: _utils_formConfig_js__WEBPACK_IMPORTED_MODULE_14__["sidebarConfig"],
      //query data search
      limitPageSize: 0,
      search: {
        searchBy: '',
        keyword: '',
        limit: 0,
        filter: []
      },
      //Ag-Grid
      columnDefs: null,
      rowData: null,
      pinnedBottomRowData: null,
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
      modalGroupCheckIn: false,
      showAutoAssign: false,
      //------------------need setting manual-----------------//
      //for vModel Data
      vModel: {
        full_name: ''
      },
      //package
      vDeposit: {},
      //deposit
      vScheduled: {},
      //schedule rate
      vExtraCharge: {},
      //extra charge
      vCancel: {},
      roomRateCode: '',
      account: null,
      dateRange: null,
      nights: 1,
      discount: 0,
      availableRoom: 0,
      roomNumber: [],
      roomRate: [],
      reservationNumber: '',
      city: [],
      guestProfile: {},
      state: [],
      totalGuestDeposit: [{
        credit: 0,
        debit: 0
      }],
      readyRoom: false,
      weekday_rate_discount: 0,
      weekend_rate_discount: 0,
      guestProfileOptions: {
        placeholder: this.$t('reservation.fullname') + ' ' + this.$t('table.required')
      },
      sidebarDeposit: false,
      sidebarScheduledRate: false,
      sidebarOption: false,
      resetOnOptionsChangeState: false,
      resetOnOptionsChangeCity: false,
      titleSidebarScheduledRate: '',
      //------------------additional-------------------------//
      //Data Lookup//
      dataLookup: {},
      accounts: [],
      dataLookupDeposit: {},
      dlExtraCharge: {},
      //Data table//
      guestDeposit: [],
      scheduledRate: [],
      extraCharges: [],
      //validation scope//
      scope1: 'reservation',
      //save disable button
      saveDisabled: false,
      showTimeRangePanel: false,
      saved: false,
      activeTab: 1,
      resetOnChange: false,
      //title popup//
      title: '',
      modalChildTitle: '',
      //------CREDENTIAL-------//
      activeCredentialPrompt: false,
      activeCredentialReasonPrompt: false,
      credentialTitle: '',
      specialAccessType: null,
      isCredential: false,
      credential: {
        user: '',
        pass: ''
      },
      reasonTypeValue: '',
      resvStatus: '',
      paramsData: '',
      idLog: '',
      totalDeposit: 0,
      checkboxSelection: false,
      groupCheckIn: false,
      groupList: [],
      listFolio: [],
      reservationNumberList: [],
      reservationGroupList: [],
      masterFolio: null,
      showReport: false,
      sideBarDestroy: false //------------------end need setting manual-----------------//

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
      headerName: 'S',
      width: 40,
      resizable: false,
      filter: false,
      field: 'RoomStatus',
      cellStyle: {
        textAlign: 'center'
      },
      cellRenderer: 'roomStatusRenderer'
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
      headerName: 'Status',
      field: 'ReservationStatus',
      width: 110
    }, {
      headerName: 'Full Name',
      field: 'FullName',
      width: 230
    }, {
      headerName: 'Number',
      field: 'reservation_number',
      width: 90
    }, {
      headerName: 'Room',
      field: 'room_number',
      width: 75
    }, {
      headerName: 'Arrival',
      field: 'DateArrival',
      width: 100,
      valueFormatter: _utils_format_js__WEBPACK_IMPORTED_MODULE_22__["formatDate"],
      cellStyle: {
        textAlign: 'center'
      },
      cellRenderer: 'expectedArrivalRenderer'
    }, {
      headerName: 'Departure',
      field: 'DateDeparture',
      width: 100,
      valueFormatter: _utils_format_js__WEBPACK_IMPORTED_MODULE_22__["formatDate"],
      cellStyle: {
        textAlign: 'center'
      },
      cellRenderer: 'expectedDepartureRenderer'
    }, {
      headerName: 'Reservation Status',
      width: 110,
      field: 'status_code',
      cellStyle: {
        textAlign: 'center'
      },
      cellRenderer: 'iconStatusRenderer'
    }, {
      headerName: 'Reserve By',
      field: 'reservation_by',
      width: 180
    }, {
      headerName: 'Market',
      field: 'market',
      width: 150
    }, {
      headerName: 'Group',
      field: 'GuestGroup',
      width: 200
    }, {
      headerName: 'Room Type',
      field: 'RoomType',
      width: 180
    }, {
      headerName: 'Booking Code',
      field: 'booking_code',
      width: 130
    }, {
      headerName: 'Company',
      field: 'Company',
      width: 110
    }, {
      headerName: 'Deposit',
      field: 'Deposit',
      width: 110,
      cellStyle: {
        textAlign: 'right'
      },
      valueFormatter: _utils_format_js__WEBPACK_IMPORTED_MODULE_22__["formatNumber"]
    }, {
      headerName: 'ETA',
      field: 'TimeArrival',
      width: 100
    }, {
      headerName: 'ETD',
      field: 'TimeDeparture',
      width: 110
    }, {
      headerName: 'Room Rate',
      field: 'RoomRate',
      width: 180
    }, {
      headerName: 'Weekday Rate',
      field: 'weekday_rate',
      width: 130,
      cellStyle: {
        textAlign: 'right'
      },
      valueFormatter: _utils_format_js__WEBPACK_IMPORTED_MODULE_22__["formatNumber"]
    }, {
      headerName: 'Weekend Rate',
      field: 'weekend_rate',
      width: 130,
      cellStyle: {
        textAlign: 'right'
      },
      valueFormatter: _utils_format_js__WEBPACK_IMPORTED_MODULE_22__["formatNumber"]
    }, {
      headerName: 'Discount',
      field: 'Discount',
      width: 110,
      cellStyle: {
        textAlign: 'right'
      },
      valueFormatter: _utils_format_js__WEBPACK_IMPORTED_MODULE_22__["formatNumber"]
    }, {
      headerName: '%',
      field: 'DiscountPercent',
      width: 110
    }, {
      headerName: 'Adult',
      field: 'adult',
      width: 80
    }, {
      headerName: 'Child',
      field: 'child',
      width: 80
    }, {
      headerName: 'Bill Instruction',
      field: 'BillInstruction',
      width: 250
    }, {
      headerName: 'Note',
      field: 'note',
      width: 200
    }, {
      headerName: 'HK Note',
      field: 'hk_note',
      width: 200
    }, {
      headerName: 'Address',
      field: 'Address',
      width: 250
    }, {
      headerName: 'State',
      field: 'State',
      width: 150
    }, {
      headerName: 'Country',
      field: 'Country',
      width: 180
    }, {
      headerName: 'Nationality',
      field: 'Nationality',
      width: 180
    }, {
      headerName: 'Phone',
      field: 'Phone',
      width: 110
    }, {
      headerName: 'Fax',
      field: 'fax',
      width: 110
    }, {
      headerName: 'Doc. Number',
      field: 'document_number',
      width: 110
    }, {
      headerName: 'Voucher Number TA',
      field: 'voucher_number_ta',
      width: 180
    }, {
      headerName: 'First Insert',
      field: 'first_insert',
      width: 150,
      cellStyle: {
        textAlign: 'right'
      },
      valueFormatter: _utils_format_js__WEBPACK_IMPORTED_MODULE_22__["formatDateTime"]
    }, {
      headerName: 'Insert By',
      field: 'insert_by',
      width: 110
    }, {
      headerName: 'Cancel Date',
      field: 'cancel_date',
      width: 150,
      cellStyle: {
        textAlign: 'right'
      },
      valueFormatter: _utils_format_js__WEBPACK_IMPORTED_MODULE_22__["formatDateTime"]
    }, {
      headerName: 'Cancel By',
      field: 'cancel_by',
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
      iconLockRenderer: _views_pages_components_lock_js__WEBPACK_IMPORTED_MODULE_17__["default"],
      iconStatusRenderer: _components_reservation_status_js__WEBPACK_IMPORTED_MODULE_18__["default"],
      roomStatusRenderer: _views_pages_components_hk_status_js__WEBPACK_IMPORTED_MODULE_21__["default"],
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
    this.paginationPageSize = this.limitDefaultPageSize;
    this.rowSelection = 'multiple';
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
        this.reservationNumber = this.paramsData.reservation_number;
      }

      var result = [{
        name: this.$t('reservation.contexMenu.insert'),
        icon: Object(_utils_general_js__WEBPACK_IMPORTED_MODULE_11__["generateIconContextMenuAgGrid"])('add_icon24'),
        action: function action() {
          return _this.showForm('', _this.modeData.insert);
        }
      }, {
        name: this.$t('reservation.contexMenu.update'),
        disabled: !node,
        icon: Object(_utils_general_js__WEBPACK_IMPORTED_MODULE_11__["generateIconContextMenuAgGrid"])('edit_icon24'),
        action: function action() {
          return _this.showForm(_this.paramsData, _this.modeData.edit);
        }
      }, 'separator', {
        name: this.$t('reservation.contexMenu.checkIn'),
        disabled: !node,
        icon: Object(_utils_general_js__WEBPACK_IMPORTED_MODULE_11__["generateIconContextMenuAgGrid"])('check_in_icon24'),
        action: function action() {
          return _this.handleCheckIn();
        }
      }, {
        name: this.paramsData.status_code == this.reservationStatus["new"] ? this.$t('reservation.contexMenu.setWaitList') : this.paramsData.status_code == this.reservationStatus.waitlist ? this.$t('reservation.contexMenu.unsetWaitList') : '',
        disabled: !node,
        icon: Object(_utils_general_js__WEBPACK_IMPORTED_MODULE_11__["generateIconContextMenuAgGrid"])('wait_list_icon24'),
        action: function action() {
          return _this.handleSetWaitList();
        }
      }, 'separator', {
        name: this.$t('reservation.contexMenu.cancel'),
        disabled: !node,
        icon: Object(_utils_general_js__WEBPACK_IMPORTED_MODULE_11__["generateIconContextMenuAgGrid"])('cancel_icon24'),
        action: function action() {
          return _this.showCancelReservation(_this.reservationStatus.cancel);
        }
      }, {
        name: this.$t('reservation.contexMenu.noShow'),
        disabled: !node,
        icon: Object(_utils_general_js__WEBPACK_IMPORTED_MODULE_11__["generateIconContextMenuAgGrid"])('no_show_icon24'),
        action: function action() {
          return _this.showCancelReservation(_this.reservationStatus.noShow);
        }
      }, {
        name: this.$t('reservation.contexMenu.void'),
        disabled: !node,
        icon: Object(_utils_general_js__WEBPACK_IMPORTED_MODULE_11__["generateIconContextMenuAgGrid"])('delete_icon24'),
        action: function action() {
          return _this.showCancelReservation(_this.reservationStatus["void"]);
        }
      }, 'separator', {
        name: this.$t('reservation.contexMenu.autoAssignRoom'),
        disabled: !node,
        icon: Object(_utils_general_js__WEBPACK_IMPORTED_MODULE_11__["generateIconContextMenuAgGrid"])('auto_assign_ready_icon24'),
        action: function action() {
          _this.showAutoAssign = true;
        }
      }, {
        name: this.$t('reservation.contexMenu.removeAutoAssignRoom'),
        disabled: !node,
        action: function action() {
          return _this.removeAssignRoom();
        }
      }, {
        name: this.paramsData.is_lock == '-1' ? this.$t('reservation.contexMenu.unlockReservation') : this.$t('reservation.contexMenu.lockReservation'),
        disabled: !node,
        icon: Object(_utils_general_js__WEBPACK_IMPORTED_MODULE_11__["generateIconContextMenuAgGrid"])(this.paramsData.is_lock == '-1' ? 'unlock_icon24' : 'lock_icon24'),
        action: function action() {
          return _this.lockReservation();
        }
      }, 'separator', {
        name: this.$t('reservation.contexMenu.printRegistrationForm'),
        disabled: !node,
        icon: Object(_utils_general_js__WEBPACK_IMPORTED_MODULE_11__["generateIconContextMenuAgGrid"])('print_icon24'),
        action: function action() {
          return _this.handlePrintRegistrationForm();
        }
      }, {
        name: this.$t('reservation.contexMenu.printConfirmLetter'),
        disabled: !node,
        icon: Object(_utils_general_js__WEBPACK_IMPORTED_MODULE_11__["generateIconContextMenuAgGrid"])('print_icon24'),
        action: function action() {
          return _this.handlePrintConfirmationLetter();
        }
      }, {
        name: this.$t('reservation.contexMenu.printProformaInvoice'),
        disabled: !node,
        icon: Object(_utils_general_js__WEBPACK_IMPORTED_MODULE_11__["generateIconContextMenuAgGrid"])('print_icon24'),
        action: function action() {
          return _this.handlePrintProformaInvoice();
        }
      }];
      return result;
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
                this.showForm(this.paramsData, this.modeData.edit);

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
    //--------------------GROUP CHECK IN--------------------//
    handleGroupCheckIn: function handleGroupCheckIn() {
      this.groupCheckIn = !this.groupCheckIn;

      if (this.groupCheckIn) {
        this.getGroupList();
      }
    },
    getGroupList: function () {
      var _getGroupList = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var _ref, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return guestGroupResource.list();

              case 2:
                _ref = _context2.sent;
                data = _ref.data;
                this.groupList = data;

              case 5:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function getGroupList() {
        return _getGroupList.apply(this, arguments);
      }

      return getGroupList;
    }(),
    getFolioList: function () {
      var _getFolioList = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(type, number) {
        var params, _ref2, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                params = {
                  type: type,
                  number: number
                };
                _context3.next = 3;
                return transactionResource.listFolio(params);

              case 3:
                _ref2 = _context3.sent;
                data = _ref2.data;
                this.listFolio = data;

              case 6:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function getFolioList(_x2, _x3) {
        return _getFolioList.apply(this, arguments);
      }

      return getFolioList;
    }(),
    getRoutingAccount: function () {
      var _getRoutingAccount = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4(subGroupAccount, groupAccount) {
        var params, _ref3, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                params = {
                  group: this.mGroupAccount.charge
                };
                _context4.prev = 1;
                _context4.next = 4;
                return transactionResource.account(params);

              case 4:
                _ref3 = _context4.sent;
                data = _ref3.data;
                this.accounts = data;
                _context4.next = 12;
                break;

              case 9:
                _context4.prev = 9;
                _context4.t0 = _context4["catch"](1);
                _utils_alert_js__WEBPACK_IMPORTED_MODULE_12__["default"].errorFetchDataAlert();

              case 12:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this, [[1, 9]]);
      }));

      function getRoutingAccount(_x4, _x5) {
        return _getRoutingAccount.apply(this, arguments);
      }

      return getRoutingAccount;
    }(),
    getMasterFolio: function () {
      var _getMasterFolio = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5() {
        var dataArray, params, _ref4, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                dataArray = this.gridApi.getSelectedRows();

                if (!(dataArray.length > 0)) {
                  _context5.next = 10;
                  break;
                }

                params = {
                  group: dataArray[0].group_code
                };
                _context5.next = 5;
                return masterFolioResource.getMasterFolioGroup(params);

              case 5:
                _ref4 = _context5.sent;
                data = _ref4.data;

                if (data == '') {
                  data = null;
                }

                this.masterFolio = data;
                return _context5.abrupt("return", data);

              case 10:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function getMasterFolio() {
        return _getMasterFolio.apply(this, arguments);
      }

      return getMasterFolio;
    }(),
    getReservationNumber: function () {
      var _getReservationNumber = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee6(dataArray) {
        var resvNumber;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                this.reservationNumberList = [];

                if (dataArray.length > 0) {
                  resvNumber = dataArray[0].reservation_number;
                  this.reservationNumber = resvNumber;
                  this.reservationNumberList = dataArray.map(function (result) {
                    return result.reservation_number;
                  });
                }

              case 2:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function getReservationNumber(_x6) {
        return _getReservationNumber.apply(this, arguments);
      }

      return getReservationNumber;
    }(),
    getReservationGroupList: function () {
      var _getReservationGroupList = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee7() {
        var params, _ref5, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                params = {
                  reservation_number: this.reservationNumberList
                };
                _context7.prev = 1;
                _context7.next = 4;
                return reservationResource.reservationGroupList(params);

              case 4:
                _ref5 = _context7.sent;
                data = _ref5.data;
                this.reservationGroupList = data;
                this.$vs.loading.close('#layout--main>.con-vs-loading');
                _context7.next = 14;
                break;

              case 10:
                _context7.prev = 10;
                _context7.t0 = _context7["catch"](1);
                this.$vs.loading.close('#layout--main>.con-vs-loading');
                _utils_alert_js__WEBPACK_IMPORTED_MODULE_12__["default"].errorFetchDataAlert();

              case 14:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this, [[1, 10]]);
      }));

      function getReservationGroupList() {
        return _getReservationGroupList.apply(this, arguments);
      }

      return getReservationGroupList;
    }(),
    handleCreateMasterFolio: function () {
      var _handleCreateMasterFolio = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee8(data) {
        var _this2 = this;

        var isExist;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                _context8.next = 2;
                return this.isFolioGroupExist();

              case 2:
                isExist = _context8.sent;

                if (isExist === true) {
                  this.$vs.dialog({
                    color: 'danger',
                    type: 'confirm',
                    title: 'information',
                    text: this.$t('message.existMasterFolio'),
                    acceptText: 'Yes',
                    accept: function accept() {
                      _this2.createMasterFolio(data);
                    }
                  });
                } else {
                  this.createMasterFolio(data);
                }

              case 4:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, this);
      }));

      function handleCreateMasterFolio(_x7) {
        return _handleCreateMasterFolio.apply(this, arguments);
      }

      return handleCreateMasterFolio;
    }(),
    isFolioGroupExist: function () {
      var _isFolioGroupExist = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee9() {
        var params, _ref6, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                params = {
                  reservation_number: this.reservationNumber,
                  user_id: this.userInfo.code
                };
                _context9.prev = 1;
                _context9.next = 4;
                return masterFolioResource.isFolioGroupExist(params);

              case 4:
                _ref6 = _context9.sent;
                data = _ref6.data;
                return _context9.abrupt("return", data);

              case 9:
                _context9.prev = 9;
                _context9.t0 = _context9["catch"](1);
                _utils_alert_js__WEBPACK_IMPORTED_MODULE_12__["default"].errorFetchDataAlert();
                return _context9.abrupt("return", false);

              case 13:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9, this, [[1, 9]]);
      }));

      function isFolioGroupExist() {
        return _isFolioGroupExist.apply(this, arguments);
      }

      return isFolioGroupExist;
    }(),
    createMasterFolio: function () {
      var _createMasterFolio = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee10(data) {
        var _this3 = this;

        var params, _ref7, _data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                params = {
                  reservation_number: this.reservationNumber,
                  night: data.night,
                  user_id: this.userInfo.code
                };
                _context10.prev = 1;
                _context10.next = 4;
                return masterFolioResource.createMasterFolioGroup(params);

              case 4:
                _ref7 = _context10.sent;
                _data = _ref7.data;
                _context10.next = 8;
                return this.getFolioList(this.mFolioType.masterFolio, null);

              case 8:
                setTimeout(function () {
                  _this3.getMasterFolio();
                }, 200);
                _utils_dialog_js__WEBPACK_IMPORTED_MODULE_13__["default"].dialogInsertMasterSuccessfully(null, _data);
                _context10.next = 15;
                break;

              case 12:
                _context10.prev = 12;
                _context10.t0 = _context10["catch"](1);
                _utils_alert_js__WEBPACK_IMPORTED_MODULE_12__["default"].errorFetchDataAlert();

              case 15:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10, this, [[1, 12]]);
      }));

      function createMasterFolio(_x8) {
        return _createMasterFolio.apply(this, arguments);
      }

      return createMasterFolio;
    }(),
    getExchangeRate: function () {
      var _getExchangeRate = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee11(data) {
        var params, _ref8, _data2;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee11$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                params = {
                  currency_code: data ? data : this.vDeposit.currency_code
                };
                _context11.prev = 1;
                _context11.next = 4;
                return depositResource.exchangeRate(params);

              case 4:
                _ref8 = _context11.sent;
                _data2 = _ref8.data;
                this.vDeposit.exchange_rate = _data2;
                this.vDeposit.amount = this.vDeposit.amount_foreign * this.vDeposit.exchange_rate;
                _context11.next = 13;
                break;

              case 10:
                _context11.prev = 10;
                _context11.t0 = _context11["catch"](1);
                _utils_alert_js__WEBPACK_IMPORTED_MODULE_12__["default"].errorFetchDataAlert();

              case 13:
              case "end":
                return _context11.stop();
            }
          }
        }, _callee11, this, [[1, 10]]);
      }));

      function getExchangeRate(_x9) {
        return _getExchangeRate.apply(this, arguments);
      }

      return getExchangeRate;
    }(),
    getLookupDeposit: function () {
      var _getLookupDeposit = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee12() {
        var _ref9, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee12$(_context12) {
          while (1) {
            switch (_context12.prev = _context12.next) {
              case 0:
                _context12.prev = 0;
                _context12.next = 3;
                return depositResource.lookup();

              case 3:
                _ref9 = _context12.sent;
                data = _ref9.data;
                this.dataLookupDeposit = data;

                if (this.vDeposit.currency_code) {
                  this.getExchangeRate();
                }

                this.$vs.loading.close('#layout--main>.con-vs-loading');
                _context12.next = 13;
                break;

              case 10:
                _context12.prev = 10;
                _context12.t0 = _context12["catch"](0);
                _utils_alert_js__WEBPACK_IMPORTED_MODULE_12__["default"].errorFetchDataAlert(_context12.t0);

              case 13:
              case "end":
                return _context12.stop();
            }
          }
        }, _callee12, this, [[0, 10]]);
      }));

      function getLookupDeposit() {
        return _getLookupDeposit.apply(this, arguments);
      }

      return getLookupDeposit;
    }(),
    handleSaveCheckInGroup: function () {
      var _handleSaveCheckInGroup = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee15(routing) {
        var _this4 = this;

        var resvNumber, params, _ref10, data, start;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee15$(_context15) {
          while (1) {
            switch (_context15.prev = _context15.next) {
              case 0:
                resvNumber = this.reservationNumberList;
                params = {
                  reservation_number: resvNumber,
                  routing_account: routing,
                  user_id: this.userInfo.code
                };
                _context15.prev = 2;
                _context15.next = 5;
                return reservationResource.checkIn(params);

              case 5:
                _ref10 = _context15.sent;
                data = _ref10.data;
                _utils_dialog_js__WEBPACK_IMPORTED_MODULE_13__["default"].information('Success: ' + data.status.success + '\r\n Failed: ' + data.status.failed + ', Please see detail on guest group list!');

                start =
                /*#__PURE__*/
                function () {
                  var _ref11 = _asyncToGenerator(
                  /*#__PURE__*/
                  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee14() {
                    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee14$(_context14) {
                      while (1) {
                        switch (_context14.prev = _context14.next) {
                          case 0:
                            _context14.next = 2;
                            return Object(_utils_general_js__WEBPACK_IMPORTED_MODULE_11__["asyncForEach"])(data.data,
                            /*#__PURE__*/
                            function () {
                              var _ref12 = _asyncToGenerator(
                              /*#__PURE__*/
                              _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee13(element) {
                                return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee13$(_context13) {
                                  while (1) {
                                    switch (_context13.prev = _context13.next) {
                                      case 0:
                                        _this4.$refs.groupCheckInForm.updateCheckInResult(element.number, element.status);

                                      case 1:
                                      case "end":
                                        return _context13.stop();
                                    }
                                  }
                                }, _callee13);
                              }));

                              return function (_x11) {
                                return _ref12.apply(this, arguments);
                              };
                            }());

                          case 2:
                          case "end":
                            return _context14.stop();
                        }
                      }
                    }, _callee14);
                  }));

                  return function start() {
                    return _ref11.apply(this, arguments);
                  };
                }();

                start();
                this.refreshData(this.search);
                _context15.next = 16;
                break;

              case 13:
                _context15.prev = 13;
                _context15.t0 = _context15["catch"](2);
                _utils_alert_js__WEBPACK_IMPORTED_MODULE_12__["default"].errorSaveDataAlert();

              case 16:
              case "end":
                return _context15.stop();
            }
          }
        }, _callee15, this, [[2, 13]]);
      }));

      function handleSaveCheckInGroup(_x10) {
        return _handleSaveCheckInGroup.apply(this, arguments);
      }

      return handleSaveCheckInGroup;
    }(),
    //------------------END GROUP CHECK IN------------------//
    //------------------ RESERVATION CRUD------------------//
    getReservationList: function () {
      var _getReservationList = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee16(search) {
        var _this5 = this;

        var selectedNodes, _ref13, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee16$(_context16) {
          while (1) {
            switch (_context16.prev = _context16.next) {
              case 0:
                _context16.prev = 0;
                selectedNodes = this.gridApi != null ? this.gridApi.getSelectedRows() : [];
                selectedNodes = selectedNodes.length > 0 ? selectedNodes[0] : {};
                _context16.next = 5;
                return reservationResource.list(search);

              case 5:
                _ref13 = _context16.sent;
                data = _ref13.data;
                this.rowData = data.data;
                this.pinnedBottomRowData = data.total;
                this.$nextTick(function () {
                  Object(_utils_general_js__WEBPACK_IMPORTED_MODULE_11__["rowSelectedAfterRefresh"])(_this5, selectedNodes, 'reservation_number');
                });
                this.$vs.loading.close('#layout--main>.con-vs-loading');
                _context16.next = 17;
                break;

              case 13:
                _context16.prev = 13;
                _context16.t0 = _context16["catch"](0);
                _utils_alert_js__WEBPACK_IMPORTED_MODULE_12__["default"].errorFetchDataAlert();
                this.$vs.loading.close('#layout--main>.con-vs-loading');

              case 17:
              case "end":
                return _context16.stop();
            }
          }
        }, _callee16, this, [[0, 13]]);
      }));

      function getReservationList(_x12) {
        return _getReservationList.apply(this, arguments);
      }

      return getReservationList;
    }(),
    refreshData: function refreshData(search) {
      this.search = search;
      this.$vs.loading({
        container: '#layout--main',
        scale: this.scaleLoadingMainLayout
      });
      this.getReservationList(search);
    },
    showForm: function () {
      var _showForm = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee17(idData, modeData) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee17$(_context17) {
          while (1) {
            switch (_context17.prev = _context17.next) {
              case 0:
                this.$refs.registrationForm.showForm(idData, modeData);

              case 1:
              case "end":
                return _context17.stop();
            }
          }
        }, _callee17, this);
      }));

      function showForm(_x13, _x14) {
        return _showForm.apply(this, arguments);
      }

      return showForm;
    }(),
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
      this.reservationNumber = data.reservation_number;
      this.paramsData = data;
      this.sidebarOption = true;
    },
    //------------------END SIDEBARR OPTIONS-------------------------------//
    //------------------START DEPOSIT CANCEL RESERVATION CRUD-------------//
    showCancelReservation: function showCancelReservation(status) {
      var _this6 = this;

      this.$refs.cancelReservation.showCancelReservation(status, this.reservationNumber);
      this.$nextTick(function () {
        _this6.modeDataValue = _this6.modeData["delete"];
        Object(_utils_general_js__WEBPACK_IMPORTED_MODULE_11__["getRowIndexBefore"])(_this6);
      });
      this.sidebarOption = false;
    },
    //------------------END DEPOSIT CANCEL RESERVATION CRUD-------------//
    //----------------START OTHER OPTION------------------//
    handleCheckIn: function () {
      var _handleCheckIn = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee18() {
        var status, selected;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee18$(_context18) {
          while (1) {
            switch (_context18.prev = _context18.next) {
              case 0:
                this.sidebarOption = false;
                status = {};
                _context18.next = 4;
                return this.gridApi.getSelectedRows();

              case 4:
                selected = _context18.sent;

                if (!this.groupCheckIn) {
                  _context18.next = 24;
                  break;
                }

                _context18.next = 8;
                return this.getReservationNumber(selected);

              case 8:
                if (!(this.search.group && this.reservationNumberList.length > 0)) {
                  _context18.next = 21;
                  break;
                }

                this.$vs.loading({
                  container: '#layout--main',
                  scale: this.scaleLoadingMainLayout
                });
                _context18.next = 12;
                return this.getFolioList(this.mFolioType.masterFolio, null);

              case 12:
                this.getLookupDeposit();
                this.getRoutingAccount();
                this.getMasterFolio(); //set master folio group exist

                _context18.next = 17;
                return this.getReservationGroupList();

              case 17:
                this.$refs.groupCheckInForm.resetRouting();
                this.modalGroupCheckIn = true;
                _context18.next = 22;
                break;

              case 21:
                _utils_dialog_js__WEBPACK_IMPORTED_MODULE_13__["default"].selectField();

              case 22:
                _context18.next = 28;
                break;

              case 24:
                _context18.next = 26;
                return this.getReservationStatus();

              case 26:
                status = _context18.sent;

                if (status.DateArrival == this.auditDate) {
                  if (status.room_number == '' || status.room_number == null || status.room_number == undefined || status.room_number == ' ') {
                    this.$vs.dialog({
                      color: 'danger',
                      title: this.$t('message.informationTitle'),
                      text: 'Please assign room first'
                    });
                  } else if (status.room_status !== this.roomStatus.ready) {
                    this.$vs.dialog({
                      color: 'danger',
                      title: this.$t('message.informationTitle'),
                      text: 'Room ' + status.room_number + ' not Ready'
                    });
                  } else {
                    this.$refs.registrationForm.showForm(this.paramsData, this.modeData.edit, true, this.reservationStatus.checkIn);
                  }
                } else {
                  this.$vs.dialog({
                    color: 'danger',
                    title: this.$t('message.informationTitle'),
                    text: 'Date Arrival not equal with current Audit Date'
                  });
                }

              case 28:
              case "end":
                return _context18.stop();
            }
          }
        }, _callee18, this);
      }));

      function handleCheckIn() {
        return _handleCheckIn.apply(this, arguments);
      }

      return handleCheckIn;
    }(),
    getReservationStatus: function () {
      var _getReservationStatus = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee19() {
        var _ref14, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee19$(_context19) {
          while (1) {
            switch (_context19.prev = _context19.next) {
              case 0:
                _context19.next = 2;
                return reservationResource.reservationStatus(this.paramsData.reservation_number);

              case 2:
                _ref14 = _context19.sent;
                data = _ref14.data;
                return _context19.abrupt("return", data);

              case 5:
              case "end":
                return _context19.stop();
            }
          }
        }, _callee19, this);
      }));

      function getReservationStatus() {
        return _getReservationStatus.apply(this, arguments);
      }

      return getReservationStatus;
    }(),
    handleSetWaitList: function handleSetWaitList() {
      var _this7 = this;

      this.sidebarOption = false;
      this.$vs.dialog({
        type: 'confirm',
        color: 'primary',
        title: this.$t('message.informationTitle'),
        text: this.$t('message.confirmationText'),
        acceptText: 'Yes',
        cancelText: 'No',
        accept: function accept() {
          if (_this7.paramsData.status_code == _this7.reservationStatus["new"]) {
            _this7.setWaitList();
          } else if (_this7.paramsData.status_code == _this7.reservationStatus.waitlist) {
            _this7.unsetWaitList();
          }
        }
      });
    },
    setWaitList: function () {
      var _setWaitList = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee20() {
        var params, _ref15, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee20$(_context20) {
          while (1) {
            switch (_context20.prev = _context20.next) {
              case 0:
                params = {
                  number: this.reservationNumber,
                  user_id: this.userInfo.code
                };
                _context20.prev = 1;
                _context20.next = 4;
                return reservationResource.setWaitList(params);

              case 4:
                _ref15 = _context20.sent;
                data = _ref15.data;
                this.refreshData(this.search);

                if (data == 0) {
                  _utils_alert_js__WEBPACK_IMPORTED_MODULE_12__["default"].acceptAlertSucces();
                } else if (data > 0) {
                  _utils_dialog_js__WEBPACK_IMPORTED_MODULE_13__["default"].information(this.$t('message.statusWaitList.' + data));
                }

                _context20.next = 13;
                break;

              case 10:
                _context20.prev = 10;
                _context20.t0 = _context20["catch"](1);
                _utils_alert_js__WEBPACK_IMPORTED_MODULE_12__["default"].errorSaveDataAlert();

              case 13:
              case "end":
                return _context20.stop();
            }
          }
        }, _callee20, this, [[1, 10]]);
      }));

      function setWaitList() {
        return _setWaitList.apply(this, arguments);
      }

      return setWaitList;
    }(),
    unsetWaitList: function () {
      var _unsetWaitList = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee21() {
        var params, _ref16, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee21$(_context21) {
          while (1) {
            switch (_context21.prev = _context21.next) {
              case 0:
                params = {
                  number: this.reservationNumber,
                  user_id: this.userInfo.code
                };
                _context21.prev = 1;
                _context21.next = 4;
                return reservationResource.unsetWaitList(params);

              case 4:
                _ref16 = _context21.sent;
                data = _ref16.data;
                this.refreshData(this.search);

                if (data == 0) {
                  _utils_alert_js__WEBPACK_IMPORTED_MODULE_12__["default"].acceptAlertSucces();
                } else if (data > 0) {
                  _utils_dialog_js__WEBPACK_IMPORTED_MODULE_13__["default"].information(this.$t('message.statusWaitList.' + data));
                }

                _context21.next = 13;
                break;

              case 10:
                _context21.prev = 10;
                _context21.t0 = _context21["catch"](1);
                _utils_alert_js__WEBPACK_IMPORTED_MODULE_12__["default"].errorSaveDataAlert();

              case 13:
              case "end":
                return _context21.stop();
            }
          }
        }, _callee21, this, [[1, 10]]);
      }));

      function unsetWaitList() {
        return _unsetWaitList.apply(this, arguments);
      }

      return unsetWaitList;
    }(),
    autoAssignRoom: function () {
      var _autoAssignRoom = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee22(status) {
        var params, _ref17, data, message;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee22$(_context22) {
          while (1) {
            switch (_context22.prev = _context22.next) {
              case 0:
                this.sidebarOption = false;
                params = {
                  ready: status,
                  // 0=>all, 1=>ready
                  reservation_number: this.reservationNumber,
                  user_id: this.userInfo.code
                };
                _context22.prev = 2;
                this.$vs.loading({
                  container: '#layout--main',
                  scale: this.scaleLoadingMainLayout
                });
                _context22.next = 6;
                return reservationResource.autoAssignRoom(params);

              case 6:
                _ref17 = _context22.sent;
                data = _ref17.data;
                this.$vs.loading.close('#layout--main>.con-vs-loading');

                if (data == 0) {
                  this.refreshData(this.search);
                  _utils_alert_js__WEBPACK_IMPORTED_MODULE_12__["default"].acceptAlertSucces();
                } else if (data > 0) {
                  _utils_dialog_js__WEBPACK_IMPORTED_MODULE_13__["default"].information(this.$t('message.statusAutoAssignRoom.' + data));
                }

                _context22.next = 18;
                break;

              case 12:
                _context22.prev = 12;
                _context22.t0 = _context22["catch"](2);
                message = _context22.t0.response.data.errors;
                this.dbErrors = message == undefined ? '' : message;
                _utils_alert_js__WEBPACK_IMPORTED_MODULE_12__["default"].errorSaveDataAlert(message);
                this.$vs.loading.close('#layout--main>.con-vs-loading');

              case 18:
              case "end":
                return _context22.stop();
            }
          }
        }, _callee22, this, [[2, 12]]);
      }));

      function autoAssignRoom(_x15) {
        return _autoAssignRoom.apply(this, arguments);
      }

      return autoAssignRoom;
    }(),
    removeAssignRoom: function () {
      var _removeAssignRoom = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee24() {
        var _this8 = this;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee24$(_context24) {
          while (1) {
            switch (_context24.prev = _context24.next) {
              case 0:
                this.sidebarOption = false;
                this.$vs.dialog({
                  type: 'confirm',
                  color: 'danger',
                  title: 'Confirm',
                  text: 'Remove Room Number?',
                  accept: function () {
                    var _accept = _asyncToGenerator(
                    /*#__PURE__*/
                    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee23() {
                      var params, message;
                      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee23$(_context23) {
                        while (1) {
                          switch (_context23.prev = _context23.next) {
                            case 0:
                              if (!(_this8.paramsData.room_number !== '')) {
                                _context23.next = 17;
                                break;
                              }

                              params = {
                                reservation_number: _this8.reservationNumber,
                                is_remove: '-1',
                                user_id: _this8.userInfo.code
                              };
                              _context23.prev = 2;

                              _this8.$vs.loading({
                                container: '#layout--main',
                                scale: _this8.scaleLoadingMainLayout
                              });

                              _context23.next = 6;
                              return reservationResource.autoAssignRoom(params);

                            case 6:
                              _this8.$vs.loading.close('#layout--main>.con-vs-loading');

                              _this8.refreshData(_this8.search);

                              _utils_alert_js__WEBPACK_IMPORTED_MODULE_12__["default"].acceptAlertSucces();
                              _context23.next = 17;
                              break;

                            case 11:
                              _context23.prev = 11;
                              _context23.t0 = _context23["catch"](2);
                              message = _context23.t0.response.data.errors;
                              _this8.dbErrors = message == undefined ? '' : message;
                              _utils_alert_js__WEBPACK_IMPORTED_MODULE_12__["default"].errorSaveDataAlert(message);

                              _this8.$vs.loading.close('#layout--main>.con-vs-loading');

                            case 17:
                            case "end":
                              return _context23.stop();
                          }
                        }
                      }, _callee23, null, [[2, 11]]);
                    }));

                    function accept() {
                      return _accept.apply(this, arguments);
                    }

                    return accept;
                  }()
                });

              case 2:
              case "end":
                return _context24.stop();
            }
          }
        }, _callee24, this);
      }));

      function removeAssignRoom() {
        return _removeAssignRoom.apply(this, arguments);
      }

      return removeAssignRoom;
    }(),
    openConfirm: function openConfirm() {
      var _this9 = this;

      this.sidebarOption = false;
      this.$vs.dialog({
        type: 'confirm',
        color: 'primary',
        title: 'Confirm',
        text: 'Select Status to Assign',
        acceptText: 'Ready',
        cancelText: 'All',
        accept: function accept() {
          return _this9.autoAssignRoom(1);
        },
        cancel: function cancel() {
          return _this9.autoAssignRoom(0);
        }
      });
    },
    lockReservation: function lockReservation() {
      var _this10 = this;

      this.sidebarOption = false;
      this.$vs.dialog({
        type: 'confirm',
        color: 'danger',
        title: 'Confirm',
        text: 'Are you sure ?',
        accept: function accept() {
          var params = {
            reservation_number: _this10.reservationNumber,
            is_lock: _this10.paramsData.is_lock == '0' ? '-1' : '0',
            user_id: _this10.userInfo.code
          };
          _utils_request_js__WEBPACK_IMPORTED_MODULE_1__["default"].put(_this10.routeApi + '/lock', params).then(function () {
            _this10.refreshData(_this10.search);
          })["catch"](function (error) {
            var message = error.response.data.errors;
            _this10.dbErrors = message == undefined ? '' : message;
            _utils_alert_js__WEBPACK_IMPORTED_MODULE_12__["default"].errorFetchDataAlert(message);
          });
        }
      });
    },
    //----------------END OTHER OPTION------------------//
    // PRINT,
    handlePrintRegistrationForm: function handlePrintRegistrationForm() {
      var newTabReport = this.$router.resolve({
        path: '/report/preview?reportId=' + this.mReportId.registrationFormReservation + '&reservationNumber=' + this.reservationNumber + '&template=' + this.mStimulsoftReportFileDirectory.registrationFormReservation
      });
      window.open(newTabReport.href, '_blank');
    },
    handlePrintProformaInvoice: function handlePrintProformaInvoice() {
      var newTabReport = this.$router.resolve({
        path: '/report/preview?reportId=' + this.mReportId.proformaInvoice + '&reservationNumber=' + this.reservationNumber + '&template=' + this.mStimulsoftReportFileDirectory.proformaInvoice
      });
      window.open(newTabReport.href, '_blank');
    },
    handlePrintConfirmationLetter: function handlePrintConfirmationLetter() {
      var newTabReport = this.$router.resolve({
        path: '/report/preview?reportId=' + this.mReportId.confirmationLetter + '&reservationNumber=' + this.reservationNumber + '&template=' + this.mStimulsoftReportFileDirectory.confirmationLetter
      });
      window.open(newTabReport.href, '_blank');
    },
    handlePrintReceipt: function handlePrintReceipt() {
      var newTabReport = this.$router.resolve({
        path: '/report/preview?reportId=' + this.mReportId.receiptDeposit + '&guestDepositId=' + this.paramsData.idLog + '&template=' + this.mStimulsoftReportFileDirectory.receiptDeposit
      });
      window.open(newTabReport.href, '_blank');
    },
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
    back: function back() {
      if (this.modalGroupCheckIn) {
        this.modalGroupCheckIn = false;
      } else if (this.modalCancelReservation) {
        this.modalCancelReservation = false;
      }
    } //------------------end need setting manual for crud-----------------//

  },
  mounted: function mounted() {
    this.gridApi = this.gridOptions.api;
    this.ColumnApi = this.gridOptions.columnApi;
  },
  computed: {
    auditDate: {
      get: function get() {
        return this.$store.state.auditLog.auditDate;
      }
    },
    ccAdmin: function ccAdmin() {
      return this.$store.getters.cCAdmin;
    }
  },
  watch: {
    sidebarOption: function sidebarOption() {
      if (!this.sidebarOption) {
        document.getElementById('main-container').click();
      }
    }
  },
  beforeRouteLeave: function beforeRouteLeave(to, from, next) {
    if (this.modalGroupCheckIn || this.modalCancelReservation) {
      this.back();
      next(false);
    } else {
      next();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/reservations/components/FilterHeader.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/reservations/components/FilterHeader.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);


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
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    searchOption: Array,
    searchDefault: String,
    groupCheckIn: Boolean,
    groupList: Array,
    limitPageSize: Number
  },
  data: function data() {
    return {
      mFilter: 'N',
      arrival: true,
      departure: false,
      all: false,
      date: {
        from: '',
        to: ''
      },
      vModelSelectLimitData: 1000,
      vModelSearchData: '',
      vModelTextSearchData: '',
      vGroup: ''
    };
  },
  methods: {
    onRefreshData: function () {
      var _onRefreshData = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(limit) {
        var _this = this;

        var search;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                search = {
                  searchBy: this.vModelSearchData,
                  keyword: this.vModelTextSearchData,
                  group: this.vGroup,
                  limit: limit >= 0 ? limit : this.limitPageSize,
                  date_from: this.date.from,
                  date_to: this.date.to,
                  filter: this.mFilter,
                  arrival: this.arrival,
                  departure: this.departure
                };
                setTimeout(function () {
                  _this.$emit('search', search);
                }, 200);

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function onRefreshData(_x) {
        return _onRefreshData.apply(this, arguments);
      }

      return onRefreshData;
    }(),
    onEnter: function onEnter() {
      this.onRefreshData();
    }
  },
  beforeMount: function beforeMount() {
    //Assign limit data with variable Global
    this.vModelSearchData = this.searchDefault;
    this.vModelSelectLimitData = this.limitDefaultPageSize;
    this.onRefreshData();
  },
  watch: {
    groupCheckIn: function groupCheckIn() {
      if (this.groupCheckIn == false) {
        this.vGroup = '';
        this.onRefreshData();
      } else {
        if (this.groupList.length > 0) {
          this.vGroup = this.groupList[0].code;
          this.onRefreshData();
        }
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/reservations/components/GroupCheckInForm.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/reservations/components/GroupCheckInForm.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_request_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/utils/request.js */ "./resources/js/src/utils/request.js");
/* harmony import */ var ag_grid_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ag-grid-vue */ "./node_modules/ag-grid-vue/main.js");
/* harmony import */ var ag_grid_vue__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ag_grid_vue__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_alert_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/utils/alert.js */ "./resources/js/src/utils/alert.js");
/* harmony import */ var _utils_dialog_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/utils/dialog.js */ "./resources/js/src/utils/dialog.js");
/* harmony import */ var _table_GroupCheckInTable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./table/GroupCheckInTable */ "./resources/js/src/views/pages/reservations/components/table/GroupCheckInTable.vue");
/* harmony import */ var vue2_datepicker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vue2-datepicker */ "./node_modules/vue2-datepicker/index.esm.js");
/* harmony import */ var _sass_vuexy_components_datepicker_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @sass/vuexy/components/datepicker.scss */ "./resources/sass/vuexy/components/datepicker.scss");
/* harmony import */ var _sass_vuexy_components_datepicker_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_sass_vuexy_components_datepicker_scss__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vue-perfect-scrollbar */ "./node_modules/vue-perfect-scrollbar/dist/index.js");
/* harmony import */ var vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _views_pages_components_Number__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/views/pages/components/Number */ "./resources/js/src/views/pages/components/Number.vue");
/* harmony import */ var _utils_format_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/utils/format.js */ "./resources/js/src/utils/format.js");
/* harmony import */ var _utils_general_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/utils/general.js */ "./resources/js/src/utils/general.js");
/* harmony import */ var _api_reservation_reservation__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @/api/reservation/reservation */ "./resources/js/src/api/reservation/reservation.js");
/* harmony import */ var _api_transaction__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @/api/transaction */ "./resources/js/src/api/transaction.js");
/* harmony import */ var _api_masterFolio__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @/api/masterFolio */ "./resources/js/src/api/masterFolio.js");


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







 // <!------------------additional element---------------------->
//inputnumber//

 //------for format----- //


 // <!------------------end additional element---------------------->




var masterFolioResource = new _api_masterFolio__WEBPACK_IMPORTED_MODULE_14__["default"]();
var transactionResource = new _api_transaction__WEBPACK_IMPORTED_MODULE_13__["default"]();
var reservationResource = new _api_reservation_reservation__WEBPACK_IMPORTED_MODULE_12__["default"]();
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'ReservationGroupForm',
  props: {
    titleForm: String,
    routeApi: String,
    mainTableName: String,
    vModel: Object,
    masterFolio: Number,
    listFolio: Array,
    accounts: Array,
    currency: Array,
    exchRateValue: Number,
    reservationList: Array
  },
  components: {
    AgGridVue: ag_grid_vue__WEBPACK_IMPORTED_MODULE_2__["AgGridVue"],
    VuePerfectScrollbar: vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_8___default.a,
    InputNumber: _views_pages_components_Number__WEBPACK_IMPORTED_MODULE_9__["default"],
    GroupCheckInTable: _table_GroupCheckInTable__WEBPACK_IMPORTED_MODULE_5__["default"],
    DatePicker: vue2_datepicker__WEBPACK_IMPORTED_MODULE_6__["default"]
  },
  data: function data() {
    return {
      //Filter Data on Page Size
      vModelDefaultSearchData: 'contact_person.full_name',
      searchFilterData: [{
        text: this.$t('table.name'),
        value: 'contact_person.full_name'
      }, {
        text: this.$t('table.roomType'),
        value: 'cfg_init_room_type.name'
      }, {
        text: this.$t('table.subCategory'),
        value: 'cfg_init_room_rate_sub_category.name'
      }, {
        text: this.$t('table.company'),
        value: 'company.name'
      }, {
        text: this.$t('table.market'),
        value: 'cfg_init_market.name'
      }, {
        text: this.$t('table.cmInv'),
        value: 'cfg_init_room_rate.cm_inv_code'
      }, {
        text: this.$t('table.taxService'),
        value: 'cfg_init_tax_and_service.name'
      }, {
        text: this.$t('table.lastUpdate'),
        value: 'cfg_init_room_rate.user_id'
      }],
      //query data search
      search: {
        searchBy: '',
        keyword: '',
        limit: 0,
        filter: []
      },
      //Ag-Grid
      columnDefs: null,
      rowData: [],
      gridOptions: null,
      gridApi: null,
      columnApi: null,
      frameworkComponents: null,
      contex: null,
      rowGroupPanelShow: null,
      statusBar: null,
      rowSelection: null,
      //Parameter From Child
      idData: '',
      //Mode Edit Or Insert(assign insert from parent, update from child)
      modeDataValue: 0,
      modePopUp: 0,
      modeDataValueTracking: 0,
      //data error handling from laravel validation//
      dbErrors: {},
      //Pop Up
      modalMain: false,
      modalCancelReservation: false,
      //------------------need setting manual-----------------//
      roomRateCode: '',
      account: null,
      dateRange: null,
      nights: 1,
      discount: 0,
      availableRoom: 0,
      roomNumber: [],
      roomRate: [],
      reservationNumber: '',
      city: [],
      guestProfile: {},
      state: [],
      readyRoom: false,
      weekday_rate_discount: 0,
      weekend_rate_discount: 0,
      guestProfileOptions: {
        placeholder: this.$t('reservation.fullname') + ' ' + this.$t('table.required')
      },
      //------------------additional-------------------------//
      //Data Lookup//
      dataLookup: {},
      //Data table//
      //validation scope//
      scope1: 'reservation',
      //save disable button
      saveDisabled: false,
      showTimeRangePanel: false,
      resetOnChange: false,
      //title popup//
      title: '',
      modalChildTitle: '',
      //------CREDENTIAL-------//
      activeCredentialPrompt: false,
      activeCredentialReasonPrompt: false,
      credentialTitle: '',
      credential: {
        user: '',
        pass: ''
      },
      reasonTypeValue: '',
      resvStatus: '',
      paramsData: '',
      idLog: '',
      //------------------end need setting manual-----------------//
      vRouting: {},
      vFolioType: '',
      folioType: [{
        name: 'Guest Folio',
        code: 'F'
      }, {
        name: 'Master Folio',
        code: 'M'
      }, {
        name: 'Desk Folio',
        code: 'D'
      }],
      vMasterFolio: {
        night: 1,
        currency: this.defaultCurrency,
        exchange_rate: 1
      },
      routingAccount: [],
      openCollapseItemGuestList: false
    };
  },
  beforeMount: function beforeMount() {
    this.gridOptions = {
      rowHeight: this.rowHeightReservation
    }; //------------------need setting manual for column table-----------------//
    // use this.$t("value") for transaltion localization------//
    // see value in @/lang/en.js //

    this.columnDefs = [{
      headerName: this.$t('table.id'),
      field: 'account_code',
      width: 80,
      hide: true
    }, {
      headerName: this.$t('table.account'),
      field: 'account_name',
      width: 250
    }, {
      headerName: this.$t('transaction.folio'),
      field: 'folio_transfer',
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
  },
  methods: {
    onGridReady: function onGridReady() {},
    onPageSizeChanged: function onPageSizeChanged(newPageSize) {
      this.gridApi.paginationSetPageSize(newPageSize);
    },
    getContextMenu: function getContextMenu(params) {
      var _this = this;

      var result = [{
        name: this.$t('table.insert'),
        shortcut: 'Alt + I',
        action: function action() {
          return _this.showModal('', 0);
        }
      }, {
        name: this.$t('table.update'),
        shortcut: 'Ctrl + U',
        action: function action() {
          return _this.showModal(params.node.data, 1);
        }
      }, {
        name: this.$t('table.trackingData'),
        shortcut: 'Ctrl + T',
        action: function action() {
          return _this.showModal(params.node.data, 2);
        }
      }, 'separator', 'copy', 'export'];
      return result;
    },
    //------------------need setting manual for crud-----------------//
    //------------------ START CHECK IN------------------//
    //------------------ END  CHECK IN------------------//
    //------------------ START ROUTING ACCOUNT------------------//
    handleInsertRoutingAccount: function handleInsertRoutingAccount() {
      var _this2 = this;

      this.$validator.validateAll('routing').then(function (result) {
        if (result) {
          var account = _this2.vRouting.account;
          var arr = _this2.routingAccount;
          var exist = false;
          _this2.vRouting.account_code = account.code;
          _this2.vRouting.account_name = account.name;
          arr.forEach(function (element) {
            if (element.account_code == account.code) {
              _utils_dialog_js__WEBPACK_IMPORTED_MODULE_4__["default"].existAccount();
              exist = true;
            }
          });

          if (!exist) {
            _this2.routingAccount.push(Object(_utils_general_js__WEBPACK_IMPORTED_MODULE_11__["cloneObject"])(_this2.vRouting));

            _this2.vRouting.account = [];
          }
        }
      });
    },
    handleCreateMasterFolio: function handleCreateMasterFolio() {
      this.$emit('createMasterFolio', this.vMasterFolio);
    },
    resetRouting: function resetRouting() {
      this.vRouting = {
        folio_type: this.mFolioType.masterFolio,
        account: [],
        folio_transfer: this.masterFolio,
        sub_folio: this.mSubFolio.A
      };
      this.vMasterFolio = {
        night: 1,
        currency: this.defaultCurrency,
        exchange_rate: 1
      }, this.$validator.reset();
      this.saveDisabled = false;
      this.routingAccount = [];
    },
    getAllRows: function getAllRows() {
      var rowData = [];
      this.gridApi.forEachNode(function (node) {
        return rowData.push(node.data);
      });
      return rowData;
    },
    //------------------ END ROUTING ACCOUNT------------------//
    //------------------ RESERVATION CRUD------------------//
    handleInsertReservation: function handleInsertReservation() {
      var _this3 = this;

      var validate = this.scope1;
      this.$validator.validateAll(validate).then(function (result) {
        if (result) {
          if (_this3.availableRoom >= _this3.vModel.rooms) {
            if (_this3.rowData == null) {
              _this3.rowData = [];
            } else {
              _this3.rowData = _this3.getAllRows();
            }

            if (_this3.rowData.length >= 0) {
              _this3.vModel.index = _this3.rowData.length;
            }

            _this3.getAvailableRoom();

            _this3.rowData.push(_this3.cloneObject(_this3.vModel));
          } else {
            _utils_dialog_js__WEBPACK_IMPORTED_MODULE_4__["default"].noRoomAvailable();
          }
        } else {
          _utils_dialog_js__WEBPACK_IMPORTED_MODULE_4__["default"].completeField();
        }
      });
    },
    cloneObject: function cloneObject(object) {
      var clone = {};

      for (var key in object) {
        if (object.hasOwnProperty(key)) //ensure not adding inherited props
          clone[key] = object[key];
      }

      return clone;
    },
    getAvailableRoom: function () {
      var _getAvailableRoom = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(type) {
        var params, _ref, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                params = {
                  room_type_code: this.vModel.room_type_code,
                  bed_type_code: this.vModel.bed_type_code,
                  ready: this.readyRoom,
                  arrival: this.vModel.arrival,
                  departure: this.vModel.departure
                };
                _context.prev = 1;
                _context.next = 4;
                return reservationResource.availableRoom(params);

              case 4:
                _ref = _context.sent;
                data = _ref.data;
                this.availableRoom = data - this.getTotalRoomReserved(this.vModel.room_type_code, this.vModel.bed_type_code);
                _context.next = 12;
                break;

              case 9:
                _context.prev = 9;
                _context.t0 = _context["catch"](1);
                _utils_alert_js__WEBPACK_IMPORTED_MODULE_3__["default"].errorFetchDataAlert();

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[1, 9]]);
      }));

      function getAvailableRoom(_x) {
        return _getAvailableRoom.apply(this, arguments);
      }

      return getAvailableRoom;
    }(),
    deleteRowData: function deleteRowData(index) {
      var selectedData = this.gridApi.getSelectedRows();
      var res = this.gridApi.updateRowData({
        remove: selectedData
      });
      this.getAvailableRoom();
    },
    getTotalRoomReserved: function getTotalRoomReserved(roomType, bedType) {
      var rowData = this.getAllRows();
      var count = 0;

      if (roomType && !bedType) {
        rowData.forEach(function (element) {
          if (roomType == element.room_type_code) {
            count += element.rooms;
          }
        });
      } else if (roomType && bedType) {
        rowData.forEach(function (element) {
          if (roomType == element.room_type_code && bedType == element.bed_type_code) {
            count += element.rooms;
          }
        });
      }

      return count;
    },
    handleSaveData: function handleSaveData() {
      this.insertReservationGroup();
    },
    insertReservationGroup: function () {
      var _insertReservationGroup = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
        var rowData;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                rowData = this.getAllRows();

                if (!(rowData.length > 0)) {
                  _context3.next = 14;
                  break;
                }

                _context3.prev = 2;
                this.$vs.loading({
                  container: '#button-save-main',
                  scale: this.scaleLoadingButton
                });
                _context3.next = 6;
                return rowData.forEach(
                /*#__PURE__*/
                function () {
                  var _ref2 = _asyncToGenerator(
                  /*#__PURE__*/
                  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(element) {
                    var _ref3, data;

                    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
                      while (1) {
                        switch (_context2.prev = _context2.next) {
                          case 0:
                            _context2.next = 2;
                            return reservationResource.insertReservationGroup(element);

                          case 2:
                            _ref3 = _context2.sent;
                            data = _ref3.data;

                          case 4:
                          case "end":
                            return _context2.stop();
                        }
                      }
                    }, _callee2);
                  }));

                  return function (_x2) {
                    return _ref2.apply(this, arguments);
                  };
                }());

              case 6:
                this.$vs.loading.close('#button-save-main>.con-vs-loading');
                this.$emit('showForm', false);
                _utils_alert_js__WEBPACK_IMPORTED_MODULE_3__["default"].acceptAlertSucces();
                _context3.next = 14;
                break;

              case 11:
                _context3.prev = 11;
                _context3.t0 = _context3["catch"](2);
                _utils_alert_js__WEBPACK_IMPORTED_MODULE_3__["default"].errorSaveDataAlert();

              case 14:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[2, 11]]);
      }));

      function insertReservationGroup() {
        return _insertReservationGroup.apply(this, arguments);
      }

      return insertReservationGroup;
    }(),
    resetData: function resetData() {
      this.rowData = null;
      this.saveDisabled = false;
      this.$validator.reset();
    },
    handleCheckIn: function handleCheckIn() {
      var data = this.getAllRows();
      this.$emit('checkIn', data);
    },
    updateCheckInResult: function updateCheckInResult(id, status) {
      this.$refs.groupCheckInTable.updateCheckInResult(id, status);
      this.openCollapseItemGuestList = true;
    },
    //------------------POPULATE SELECT OPTIONS----------------------//
    getDataLookUp: function () {
      var _getDataLookUp = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4() {
        var _ref4, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.prev = 0;
                _context4.next = 3;
                return reservationResource.dataLookup();

              case 3:
                _ref4 = _context4.sent;
                data = _ref4.data;
                this.dataLookup = data;
                this.city = data.city;
                this.$vs.loading.close('#layout--main>.con-vs-loading');
                this.$vs.loading.close('.popup-body>.con-vs-loading');
                _context4.next = 15;
                break;

              case 11:
                _context4.prev = 11;
                _context4.t0 = _context4["catch"](0);
                this.$vs.loading.close('.popup-body>.con-vs-loading');
                _utils_alert_js__WEBPACK_IMPORTED_MODULE_3__["default"].errorFetchDataAlert();

              case 15:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this, [[0, 11]]);
      }));

      function getDataLookUp() {
        return _getDataLookUp.apply(this, arguments);
      }

      return getDataLookUp;
    }(),
    getRoomNumber: function () {
      var _getRoomNumber = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5(type) {
        var params, _ref5, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                params = {
                  room_type_code: this.vModel.room_type_code,
                  bed_type_code: this.vModel.bed_type_code,
                  ready: this.readyRoom,
                  arrival: this.vModel.arrival,
                  departure: this.vModel.departure
                };
                _context5.prev = 1;
                _context5.next = 4;
                return reservationResource.roomNumber(params);

              case 4:
                _ref5 = _context5.sent;
                data = _ref5.data;
                this.roomNumber = data.room;
                this.availableRoom = data.available_room - this.getTotalRoomReserved(this.vModel.room_type_code, this.vModel.bed_type_code);

                if (type !== 'bed_type') {
                  this.dataLookup.bed_type = data.bed_type;
                  this.getRoomRate();
                }

                _context5.next = 14;
                break;

              case 11:
                _context5.prev = 11;
                _context5.t0 = _context5["catch"](1);
                _utils_alert_js__WEBPACK_IMPORTED_MODULE_3__["default"].errorFetchDataAlert();

              case 14:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this, [[1, 11]]);
      }));

      function getRoomNumber(_x3) {
        return _getRoomNumber.apply(this, arguments);
      }

      return getRoomNumber;
    }(),
    getRoomRate: function () {
      var _getRoomRate = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee6() {
        var params, _ref6, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                if (!this.vModel.room_type_code) {
                  _context6.next = 13;
                  break;
                }

                params = {
                  room_type: this.vModel.room_type_code,
                  arrival: this.vModel.arrival,
                  departure: this.vModel.departure,
                  business_source: this.vModel.business_source_code
                };
                _context6.prev = 2;
                _context6.next = 5;
                return reservationResource.roomRate(params);

              case 5:
                _ref6 = _context6.sent;
                data = _ref6.data;
                this.dataLookup.room_rate = data;
                _context6.next = 13;
                break;

              case 10:
                _context6.prev = 10;
                _context6.t0 = _context6["catch"](2);
                _utils_alert_js__WEBPACK_IMPORTED_MODULE_3__["default"].errorFetchDataAlert();

              case 13:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this, [[2, 10]]);
      }));

      function getRoomRate() {
        return _getRoomRate.apply(this, arguments);
      }

      return getRoomRate;
    }(),
    getDailyRate: function () {
      var _getDailyRate = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee7() {
        var params, _ref7, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                params = {
                  adult: this.vModel.adult,
                  room_rate: this.vModel.room_rate_code
                };
                _context7.prev = 1;
                _context7.next = 4;
                return reservationResource.dailyRate(params);

              case 4:
                _ref7 = _context7.sent;
                data = _ref7.data;
                this.vModel.weekday_rate = parseFloat(data.weekday_rate);
                this.vModel.weekend_rate = parseFloat(data.weekend_rate);
                this.setDiscountRate();
                _context7.next = 14;
                break;

              case 11:
                _context7.prev = 11;
                _context7.t0 = _context7["catch"](1);
                _utils_alert_js__WEBPACK_IMPORTED_MODULE_3__["default"].errorFetchDataAlert();

              case 14:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this, [[1, 11]]);
      }));

      function getDailyRate() {
        return _getDailyRate.apply(this, arguments);
      }

      return getDailyRate;
    }(),
    getState: function () {
      var _getState = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee8(state) {
        var params, _ref8, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                if (!this.vModel.country_code) {
                  _context8.next = 13;
                  break;
                }

                params = {
                  country: this.vModel.country_code,
                  state: this.vModel.state_code
                };
                _context8.prev = 2;
                _context8.next = 5;
                return reservationResource.state(params);

              case 5:
                _ref8 = _context8.sent;
                data = _ref8.data;

                if (state == true) {
                  this.state = data.state;
                } else {
                  this.city = data.city;
                }

                _context8.next = 13;
                break;

              case 10:
                _context8.prev = 10;
                _context8.t0 = _context8["catch"](2);
                _utils_alert_js__WEBPACK_IMPORTED_MODULE_3__["default"].errorFetchDataAlert();

              case 13:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, this, [[2, 10]]);
      }));

      function getState(_x4) {
        return _getState.apply(this, arguments);
      }

      return getState;
    }(),
    //------------------END POPULATE SELECT OPTIONS------------------//
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
    getTotalDays: function getTotalDays() {
      var date1 = new Date(this.vModel.arrival).getTime();
      var date2 = new Date(this.vModel.departure).getTime();

      if (date1 > date2) {
        this.vModel.departure = this.departureResv2;
      }

      var date3 = new Date(Object(_utils_format_js__WEBPACK_IMPORTED_MODULE_10__["formatDateDatabase"])(this.vModel.arrival));
      var date4 = new Date(Object(_utils_format_js__WEBPACK_IMPORTED_MODULE_10__["formatDateDatabase"])(this.vModel.departure)); // To calculate the time difference of two dates

      var Difference_In_Time = date4.getTime() - date3.getTime(); // To calculate the no. of days between two dates

      var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24); // restrict negatif departure

      this.nights = Difference_In_Days;
    },
    resetDate: function resetDate() {
      this.vModel.arrival = Object(_utils_format_js__WEBPACK_IMPORTED_MODULE_10__["formatDateTimeDatabase"])(this.auditDate + ' ' + this.checkInTime), this.vModel.departure = this.departureResv, this.nights = 1;
    },
    //------------------end need setting manual for crud-----------------//
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
      var _this4 = this;

      var data = {
        id_log: this.idLog,
        void_by: this.credential.user,
        void_reason: this.credential.reason,
        user_id: this.userInfo.code
      };
      _utils_request_js__WEBPACK_IMPORTED_MODULE_1__["default"].post(this.routeApi + '/guestdeposit/void', data).then(function () {
        _this4.getDepositList();
      })["catch"](function (error) {
        var message = error.response.data.errors;

        _this4.$vs.loading.close('#layout--main>.con-vs-loading');

        _utils_alert_js__WEBPACK_IMPORTED_MODULE_3__["default"].errorModifyingDataAlert(message);
      });
    }
  },
  mounted: function mounted() {
    this.gridApi = this.gridOptions.api;
    this.ColumnApi = this.gridOptions.columnApi;
  },
  watch: {
    masterFolio: function masterFolio() {
      this.resetRouting();
    },
    nights: function nights(value) {
      var departure = new Date(this.vModel.arrival);
      departure.setDate(departure.getDate() + value);
      departure = Object(_utils_format_js__WEBPACK_IMPORTED_MODULE_10__["formatDateDatabase"])(departure);
      this.vModel.departure = Object(_utils_format_js__WEBPACK_IMPORTED_MODULE_10__["formatDateTimeDatabase"])(departure + ' ' + this.checkOutTime);
    },
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
    account: function account() {
      if (this.account !== null) {
        this.vDeposit.account_code = this.account.code;
        this.vDeposit.charge_percent = this.account.charge_percent;
        this.getTotalAmount();
      }
    }
  },
  computed: {
    departureResv: function departureResv() {
      var departure = new Date(Object(_utils_format_js__WEBPACK_IMPORTED_MODULE_10__["formatDateTimeDatabase"])(this.auditDate + ' ' + this.checkOutTime));
      departure.setDate(departure.getDate() + 1);
      return Object(_utils_format_js__WEBPACK_IMPORTED_MODULE_10__["formatDateTimeDatabase"])(departure);
    },
    departureResv2: function departureResv2() {
      var arrival = Object(_utils_format_js__WEBPACK_IMPORTED_MODULE_10__["formatDateDatabase"])(this.vModel.arrival);
      var departure = new Date(Object(_utils_format_js__WEBPACK_IMPORTED_MODULE_10__["formatDateTimeDatabase"])(arrival + ' ' + this.checkOutTime));
      departure.setDate(departure.getDate() + 1);
      return Object(_utils_format_js__WEBPACK_IMPORTED_MODULE_10__["formatDateTimeDatabase"])(departure);
    },
    userValidation: function userValidation() {
      return this.credential.user.length > 0 && this.credential.pass.length > 0;
    },
    userId: {
      get: function get() {
        return this.$store.state.AppActiveUser.id;
      }
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
    checkOutTime: {
      get: function get() {
        return this.$store.state.checkOutTime;
      }
    },
    defaultMarket: {
      get: function get() {
        return this.$store.state.defaultMarket;
      }
    },
    defaultCurrency: {
      get: function get() {
        return this.$store.state.defaultCurrency;
      }
    },
    ccAdm: {
      get: function get() {
        return this.$store.state.globalParameter.ccAdm;
      }
    }
  },
  created: function created() {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/reservations/components/NavigationHeader.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/reservations/components/NavigationHeader.vue?vue&type=script&lang=js& ***!
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
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    searchDefault: String,
    groupCheckInBoolean: Boolean
  },
  data: function data() {
    return {
      vModelSelectLimitData: 1000,
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
    groupCheckIn: function groupCheckIn(_boolean) {
      this.$emit('groupCheckIn', _boolean);
    },
    checkIn: function checkIn() {
      if (this.groupCheckInBoolean) {
        this.$emit('checkIn');
      }
    },
    showModal: function showModal() {
      this.$emit('showModal', '', this.modeData.insert);
    },
    showSidebar: function showSidebar() {
      this.$emit('sidebar', this.modeData.option);
    }
  },
  beforeMount: function beforeMount() {
    this.vModelSelectLimitData = this.limitDefaultPageSize;
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/reservations/components/table/GroupCheckInTable.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/reservations/components/table/GroupCheckInTable.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
 //------for format----- //

 // <!------------------end additional element---------------------->

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'GroupCheckInTable',
  props: ['titleForm', 'mainTableName', 'table', 'popupTracking', 'popupForm', 'data', 'dataLookUp', 'rowData'],
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
      frameworkComponents: null,
      contex: null,
      rowGroupPanelShow: null,
      statusBar: null,
      sideBar: null,
      paginationPageSize: null,
      rowSelection: null,
      getRowNodeId: null
    };
  },
  beforeMount: function beforeMount() {
    this.gridOptions = {
      rowHeight: this.rowHeightDefault
    };

    this.getRowNodeId = function (data) {
      return data.number;
    }; //------------------need setting manual for column table-----------------//
    // use this.$t("value") for transaltion localization------//
    // see value in @/lang/en.js //


    this.columnDefs = [{
      headerName: this.$t('reservation.reservation') + '#',
      field: 'number',
      width: 80
    }, {
      headerName: this.$t('reservation.room') + '#',
      field: 'room_number',
      width: 90
    }, {
      headerName: this.$t('reservation.roomType'),
      field: 'room_type',
      width: 110
    }, {
      headerName: this.$t('reservation.fullname'),
      field: 'full_name',
      width: 150
    }, {
      headerName: this.$t('reservation.arrival'),
      field: 'arrival',
      width: 140
    }, {
      headerName: this.$t('reservation.departure'),
      field: 'departure',
      width: 140
    }, // { headerName: this.$t('reservation.deposit'), field: 'deposit', width: 120, cellStyle: { textAlign: 'right' }, valueFormatter: formatNumber },
    {
      headerName: this.$t('table.result'),
      field: 'result',
      width: 250
    }]; //------------------end need setting manual for column table-----------------//

    this.context = {
      componentParent: this
    };
    this.frameworkComponents = {};
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
    this.rowModelType = 'clientSide';
  },
  methods: {
    onGridReady: function onGridReady() {},
    onPageSizeChanged: function onPageSizeChanged(newPageSize) {
      this.gridApi.paginationSetPageSize(newPageSize);
    },
    acceptAlertSucces: function acceptAlertSucces() {
      this.$vs.notify({
        color: 'success',
        title: this.$t('message.saveTitleSuccess'),
        text: this.$t('message.saveSuccess')
      });
    },
    //---
    //------------------------additional for context menu ag-Grid-----------//
    getContextMenu: function getContextMenu(params) {
      var _this = this;

      var result = [{
        name: this.$t('table.insert'),
        shortcut: 'Alt + I',
        action: function action() {
          return _this.showModal('', 0);
        }
      }, {
        name: this.$t('table.update'),
        shortcut: 'Ctrl + U',
        action: function action() {
          return _this.showModal(params.node.data, 1);
        }
      }, {
        name: this.$t('table.trackingData'),
        shortcut: 'Ctrl + T',
        action: function action() {
          return _this.showModal(params.node.data, 2);
        }
      }, 'separator', 'copy', 'export'];
      return result;
    },
    //------------------need setting manual for crud-----------------//
    showModal: function showModal(idData, modeData) {
      this.$emit('showModal', idData, modeData);
    },
    "delete": function _delete(val) {
      this.$emit('delete', val);
    },
    updateCheckInResult: function updateCheckInResult(id, status) {
      var rowNode = this.gridApi.getRowNode(id);
      rowNode.setDataValue('result', this.$t('message.statusCheckInReservation.' + status));
    } //------------------end need setting manual for crud-----------------//

  },
  mounted: function mounted() {
    this.gridApi = this.gridOptions.api;
    this.ColumnApi = this.gridOptions.columnApi;
  },
  computed: {
    userId: {
      get: function get() {
        return this.$store.state.AppActiveUser.id;
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/reservations/Reservation.vue?vue&type=style&index=0&lang=scss&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/reservations/Reservation.vue?vue&type=style&index=0&lang=scss& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".form_deposit_charge.two_column.con-vs-popup .vs-popup {\n  width: auto;\n}\n@media only screen and (min-width: 600px) {\n.form_deposit_charge.two_column.con-vs-popup .vs-popup div.content-left {\n    border-right: 1px dashed #c5c5c5;\n    padding-right: 10px;\n    width: 450px;\n}\n.form_deposit_charge.two_column.con-vs-popup .vs-popup .vs-col.content-right {\n    padding-left: 10px;\n    width: 450px;\n}\n.form_deposit_charge.two_column.con-vs-popup .vs-popup .vs-divider.divider-title {\n    margin: 0px;\n}\n}\n.form_deposit_charge.two_column.con-vs-popup .vs-popup #transaction {\n  width: 450px;\n}\n.form_deposit_charge.two_column.con-vs-popup .vs-popup #expDate .vs__dropdown-menu {\n  min-width: 30px;\n}\n.form_deposit_charge.two_column.con-vs-popup .vs-popup .form_deposit_charge .vs-popup {\n  width: auto;\n}\n.form_deposit_charge.two_column.con-vs-popup .vs-popup .form_deposit_charge .vs-popup .form-content {\n  width: 450px;\n}\n@media only screen and (min-width: 600px) {\n.form_deposit_charge.two_column.con-vs-popup .vs-popup .form_deposit_charge .vs-popup div.content-left {\n    border-right: 1px dashed #c5c5c5;\n    padding-right: 10px;\n    width: 450px;\n}\n.form_deposit_charge.two_column.con-vs-popup .vs-popup .form_deposit_charge .vs-popup .vs-col.content-right {\n    padding-left: 10px;\n    width: 450px;\n}\n.form_deposit_charge.two_column.con-vs-popup .vs-popup .form_deposit_charge .vs-popup .vs-divider.divider-title {\n    margin: 0px;\n}\n}\n.form_deposit_charge.two_column.con-vs-dialog .vs-dialog {\n  width: auto;\n}\n@media only screen and (min-width: 600px) {\n.form_deposit_charge.two_column.con-vs-dialog .vs-dialog {\n    max-width: 950px;\n}\n.form_deposit_charge.two_column.con-vs-dialog .vs-dialog div.content-left {\n    border-right: 1px dashed #c5c5c5;\n    padding-right: 10px;\n    width: 450px;\n}\n.form_deposit_charge.two_column.con-vs-dialog .vs-dialog .vs-col.content-right {\n    padding-left: 10px;\n    width: 450px;\n}\n.form_deposit_charge.two_column.con-vs-dialog .vs-dialog .vs-divider.divider-title {\n    margin: 0px;\n}\n}\n.form_deposit_charge.two_column.con-vs-dialog .vs-dialog #transaction {\n  width: 450px;\n}\n.form_deposit_charge.two_column.con-vs-dialog .vs-dialog #expDate .vs__dropdown-menu {\n  min-width: 30px;\n}\n.form_deposit_charge .vs-popup {\n  width: auto;\n}\n.form_deposit_charge .vs-popup .form-content {\n  width: 450px;\n}\n.form_deposit_charge .vs-popup .form-content .sub-folio {\n  font-size: 0.8rem;\n}\n.form_deposit_charge .vs-popup .vs-popup--content {\n  overflow: auto;\n}\n@media only screen and (min-width: 600px) {\n.form_deposit_charge .vs-popup div.content-left {\n    border-right: 1px dashed #c5c5c5;\n    padding-right: 10px;\n    width: 450px;\n}\n.form_deposit_charge .vs-popup .vs-col.content-right {\n    padding-left: 10px;\n    width: 450px;\n}\n.form_deposit_charge .vs-popup .vs-divider.divider-title {\n    margin: 0px;\n}\n}\n.form_deposit_charge .vs-popup #expDate .vs__dropdown-menu {\n  min-width: 30px;\n}\n.form_deposit_charge .vs-dialog {\n  width: auto;\n}\n.form_deposit_charge .vs-dialog .form-content {\n  width: 450px;\n}\n.form_deposit_charge .vs-dialog .form-content .sub-folio {\n  font-size: 0.8rem;\n}\n.form_deposit_charge .vs-dialog .vs-dialog-text {\n  overflow: auto;\n}\n@media only screen and (min-width: 600px) {\n.form_deposit_charge .vs-dialog {\n    max-width: 950px;\n}\n.form_deposit_charge .vs-dialog div.content-left {\n    border-right: 1px dashed #c5c5c5;\n    padding-right: 10px;\n    width: 450px;\n}\n.form_deposit_charge .vs-dialog .vs-col.content-right {\n    padding-left: 10px;\n    width: 450px;\n}\n.form_deposit_charge .vs-dialog .vs-divider.divider-title {\n    margin: 0px;\n}\n}\n.form_deposit_charge .vs-dialog #expDate .vs__dropdown-menu {\n  min-width: 30px;\n}\n.payment-option .vs-dialog {\n  width: 400px;\n}\n.payment-option .box .vs-button:not(.vs-radius):not(.includeIconOnly):not(.small):not(.large) {\n  width: 170px;\n}\n@media screen and (min-width: 600px) {\n.payment-option .box #row1 {\n    margin-bottom: 15px;\n}\n.payment-option .box .button1 {\n    margin-left: 20px !important;\n}\n.payment-option .box .button2 {\n    margin-left: 15px !important;\n}\n.payment-option .box .button3 {\n    margin-left: 20px !important;\n}\n.payment-option .box .button4 {\n    margin-left: 15px !important;\n}\n}\n@media screen and (max-width: 579px) {\n.payment-option .box #card {\n    margin-top: 5px;\n}\n.payment-option .box #direct-bill {\n    margin-top: 5px;\n}\n.payment-option .box #other-payment {\n    margin-top: 5px;\n}\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/reservations/components/FilterHeader.vue?vue&type=style&index=0&lang=scss&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/reservations/components/FilterHeader.vue?vue&type=style&index=0&lang=scss& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".room-filter .reservation-status-filter .vs-radio--circle {\n  background: rgba(0, 0, 0, 0.38) !important;\n  box-shadow: white 0px 0px 1px 0px !important;\n}\n.room-filter .reservation-status-filter .vs-radio--borde {\n  border: 0px solid #c8c8c8 !important;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/reservations/Reservation.vue?vue&type=style&index=1&id=31acdc8e&scoped=true&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/reservations/Reservation.vue?vue&type=style&index=1&id=31acdc8e&scoped=true&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".apply-shake[data-v-31acdc8e] {\n  -webkit-animation: shake 0.82s cubic-bezier(.36,.07,.19,.97) both;\n          animation: shake 0.82s cubic-bezier(.36,.07,.19,.97) both;\n}\n.body-sidebar[data-v-31acdc8e]{\n  margin-left: 10px\n}\n.footer-sidebar[data-v-31acdc8e]{\n  margin-left: 10px\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/reservations/components/GroupCheckInForm.vue?vue&type=style&index=0&id=08e19d90&scoped=true&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/reservations/components/GroupCheckInForm.vue?vue&type=style&index=0&id=08e19d90&scoped=true&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@-webkit-keyframes shake-data-v-08e19d90 {\n10%, 90% {\n    transform: translate3d(-1px, 0, 0);\n}\n20%, 80% {\n    transform: translate3d(2px, 0, 0);\n}\n30%, 50%, 70% {\n    transform: translate3d(-4px, 0, 0);\n}\n40%, 60% {\n    transform: translate3d(4px, 0, 0);\n}\n}\n@keyframes shake-data-v-08e19d90 {\n10%, 90% {\n    transform: translate3d(-1px, 0, 0);\n}\n20%, 80% {\n    transform: translate3d(2px, 0, 0);\n}\n30%, 50%, 70% {\n    transform: translate3d(-4px, 0, 0);\n}\n40%, 60% {\n    transform: translate3d(4px, 0, 0);\n}\n}\n.apply-shake[data-v-08e19d90] {\n  -webkit-animation: shake-data-v-08e19d90 0.82s cubic-bezier(.36,.07,.19,.97) both;\n          animation: shake-data-v-08e19d90 0.82s cubic-bezier(.36,.07,.19,.97) both;\n}\n.body-sidebar[data-v-08e19d90]{\n  margin-left: 10px\n}\n.footer-sidebar[data-v-08e19d90]{\n  margin-left: 10px\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/reservations/components/GroupCheckInForm.vue?vue&type=style&index=1&id=08e19d90&scoped=true&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/reservations/components/GroupCheckInForm.vue?vue&type=style&index=1&id=08e19d90&scoped=true&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".btn-bottom[data-v-08e19d90]{\n  bottom: 0;\n  margin-top: 11px;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/reservations/Reservation.vue?vue&type=style&index=0&lang=scss&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/reservations/Reservation.vue?vue&type=style&index=0&lang=scss& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Reservation.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/reservations/Reservation.vue?vue&type=style&index=0&lang=scss&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/reservations/components/FilterHeader.vue?vue&type=style&index=0&lang=scss&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/reservations/components/FilterHeader.vue?vue&type=style&index=0&lang=scss& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../node_modules/css-loader!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./FilterHeader.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/reservations/components/FilterHeader.vue?vue&type=style&index=0&lang=scss&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/reservations/Reservation.vue?vue&type=style&index=1&id=31acdc8e&scoped=true&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/reservations/Reservation.vue?vue&type=style&index=1&id=31acdc8e&scoped=true&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader??ref--7-1!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Reservation.vue?vue&type=style&index=1&id=31acdc8e&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/reservations/Reservation.vue?vue&type=style&index=1&id=31acdc8e&scoped=true&lang=css&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/reservations/components/GroupCheckInForm.vue?vue&type=style&index=0&id=08e19d90&scoped=true&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/reservations/components/GroupCheckInForm.vue?vue&type=style&index=0&id=08e19d90&scoped=true&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../node_modules/css-loader??ref--7-1!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./GroupCheckInForm.vue?vue&type=style&index=0&id=08e19d90&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/reservations/components/GroupCheckInForm.vue?vue&type=style&index=0&id=08e19d90&scoped=true&lang=css&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/reservations/components/GroupCheckInForm.vue?vue&type=style&index=1&id=08e19d90&scoped=true&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/reservations/components/GroupCheckInForm.vue?vue&type=style&index=1&id=08e19d90&scoped=true&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../node_modules/css-loader??ref--7-1!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./GroupCheckInForm.vue?vue&type=style&index=1&id=08e19d90&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/reservations/components/GroupCheckInForm.vue?vue&type=style&index=1&id=08e19d90&scoped=true&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/icon/IconClean.vue?vue&type=template&id=f8fb0d8c&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/components/icon/IconClean.vue?vue&type=template&id=f8fb0d8c& ***!
  \*********************************************************************************************************************************************************************************************************************/
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
    "svg",
    {
      attrs: {
        version: "1.1",
        id: "Layer_1",
        xmlns: "http://www.w3.org/2000/svg",
        "xmlns:xlink": "http://www.w3.org/1999/xlink",
        x: "0px",
        y: "0px",
        width: "24px",
        height: "24px",
        viewBox: "0 0 24 24",
        "enable-background": "new 0 0 24 24",
        "xml:space": "preserve"
      }
    },
    [
      _c("image", {
        attrs: {
          id: "image0",
          width: "24",
          height: "24",
          x: "0",
          y: "0",
          "xlink:href":
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAABGdBTUEAALGPC/xhBQAAACBjSFJN\n  AAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAA9lBMVEUrrysrrysrrysssCwr\n  rysrrysusS5MvEwwsTDH6cfQ7NAzsjOW15bM68zV7tXj9OOn3aeo3qg1szXi8+L9/f2J0omq36qx\n  4bG75buK04o6tTpuyG6z4rP4+/jl9OWY2JhLu0susC51y3X3+/fB58E4tDhyynJtyG0sryz7/fvh\n  8+HA58A/tz9xyXErrysssCwrrysrrysssCwvsS8xsjFXwFdgw2A2szZlxWX+/v5syGx7zXs/tz/9\n  /f09tj0wsTD4+/hkxWRHukdRvVFGuUbH6cf4/PgusS5fw1+95r18znw1szXQ7dAzsjO147VOvE5U\n  v1T///9I1VHvAAAAMnRSTlO+9LL+/vH+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+\n  /v7+/v7+xfv7uCtJcSUAAAABYktHRFGUaXwqAAAAB3RJTUUH4wkTCAsbdDoYEwAAAMJJREFUKM9j\n  YGDECpgYmI1YjEAIiCEMCGLFLcGCHWDoMDbBYhQbkDA1w2IUOwsLBycXN4ZR5jwmFryWlnxWJmhG\n  WfMb2wjY2graoRklJCwiysIsJs6MZpS9hKWIgyOLkzOaq1xcRSxFLN0k7d2RXSUlLSMrAgFy8gqK\n  SEaxeXjagnRYynl5o/mDWUkZqF5FFUuQqNmK+PiqYwldDT9Nfw8tFyzBHqBtZKSDLdiZdXEFuxR1\n  YxChQ0/fQB+EgBjCgCBDAHYxPCVUSh4WAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDE5LTA5LTE5VDA4\n  OjExOjI3KzAzOjAwsfS0wQAAACV0RVh0ZGF0ZTptb2RpZnkAMjAxOS0wOS0xOVQwODoxMToyNysw\n  MzowMMCpDH0AAAAASUVORK5CYII="
        }
      })
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/icon/IconDirty.vue?vue&type=template&id=9e490b7a&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/components/icon/IconDirty.vue?vue&type=template&id=9e490b7a& ***!
  \*********************************************************************************************************************************************************************************************************************/
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
    "svg",
    {
      attrs: {
        version: "1.1",
        id: "Layer_1",
        xmlns: "http://www.w3.org/2000/svg",
        "xmlns:xlink": "http://www.w3.org/1999/xlink",
        x: "0px",
        y: "0px",
        width: "24px",
        height: "24px",
        viewBox: "0 0 24 24",
        "enable-background": "new 0 0 24 24",
        "xml:space": "preserve"
      }
    },
    [
      _c("image", {
        attrs: {
          id: "image0",
          width: "24",
          height: "24",
          x: "0",
          y: "0",
          "xlink:href":
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAABGdBTUEAALGPC/xhBQAAACBjSFJN\nAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAABblBMVEWGOjCGOjCGOjCHOjGG\nOjCFOTCGOjCGOjCGOjCGOjGGOjCHOjGHOzGxgXr9/f37+vqfYlr38/Lu5OOTT0aKQTfGop318O+H\nOzGLQzmwf3jDnZjt4uGhZ1+YWE/p3NvTuLXQs7Dq3duPSD+9lI78+/urd3CLQTiRQzSeTjjRtLDz\n7eysWTzIcEWka2PaxMHKcUWwXD3y6+rOr6uGOjCMRDqHPDKGOjCGOjCGOjCGOjCHOjGGOjCGOjCH\nOzG0hH7u5ePgzcqTT0b9/PzLq6erdm/+/v7IpqKka2T59/bq3duPSUCaWlH07u3y6+qXVk6cXlad\nYFjWvLn49fTCnJfv5eT8+/uncGn9/f3BmpX28vG/lpHGo5/w5+XVu7iWU0u7kIuIPjSIPDGjaWLn\n2NeJPTGbSzeLPjKPQjOJPDGMPzLu5OOxXT64Y0CgTzird3CwXD23YkC2iIL49fX38vK1h4GYSTaK\nPTGIPTS1hoD////U1cJfAAAAPXRSTlM41fT01z3T/tzy+vL6/v7+/v7+/v7+/v7+/v7+/v7+/v7+\n/v7+/v7+/v7+/v7+/v7+/v7y/v7U3TrZ+NtAVqQ2FQAAAAFiS0dEeaHc1NAAAAAHdElNRQfjCRMI\nDicmIpDRAAABGElEQVQoz2NgYGRiZkJGYIKFlYGNnd0WBUFoDgZO7BJcDNy2aMDO3sHR1paHgRtN\nB68TH58zWAeqhAu/Kx+fG6ZR7h6urq6eXhhGCQi68rkKCWNY7u0DVO/rB2Ii6xAR9eXjcxXzhzkX\nSItLBEhKBUrzAe0NkkHyR3CIkysUhIZBTQUZJRsONEFOPkIBqEMRyefsSpFACWXxKBWghCpKkEQD\nzYiJBRsVZ4tkFHs8H8haEFJRA+pQ14C5KkETJqElDpTQ1kmEeTAJ5qpk25TUtJT0jEyYB3WzIDr0\n2LP1c9jZcw3goZtnqAKSMGLP1y8A+RgprAqLil1dS2wTS8ugrjKGhVW5iXKFKVLUmmGPc3MGC0sr\nLMDaBgCivFpMZOAsuAAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAxOS0wOS0xOVQwODoxNDozOSswMzow\nMMtIBEYAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMTktMDktMTlUMDg6MTQ6MzkrMDM6MDC6Fbz6AAAA\nAElFTkSuQmCC"
        }
      })
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/icon/IconReady.vue?vue&type=template&id=e30540d8&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/components/icon/IconReady.vue?vue&type=template&id=e30540d8& ***!
  \*********************************************************************************************************************************************************************************************************************/
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
    "svg",
    {
      attrs: {
        version: "1.1",
        id: "Layer_1",
        xmlns: "http://www.w3.org/2000/svg",
        "xmlns:xlink": "http://www.w3.org/1999/xlink",
        x: "0px",
        y: "0px",
        width: "24px",
        height: "24px",
        viewBox: "0 0 24 24",
        "enable-background": "new 0 0 24 24",
        "xml:space": "preserve"
      }
    },
    [
      _c("image", {
        attrs: {
          id: "image0",
          width: "24",
          height: "24",
          x: "0",
          y: "0",
          "xlink:href":
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAABGdBTUEAALGPC/xhBQAAACBjSFJN\nAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAilBMVEUAAAAAbKEAd7EAd7EA\nd7EAcKcAdq8AZZYAdK0AcKYAZJX7AAD+AAD9AAAAcKb+AAD+AAD+AAAHZJU9WYXSAAD/AAD9AABD\nV4HwAAD+AAD+AAD9AAARY5T+AAD+AAD9AAD+AAD9AADqAAD+AADwAAD2AAD3AAD9AAAAeLIAd7AA\nZ5kAeLL/AAD////5kR/WAAAAK3RSTlMAAXbl/gFNKU0qKRTCOynQ/vEpKQP+dCkHtHt6KbV6FM97\nB+YSFBRk/k0BcmBQcQAAAAFiS0dELc3aQT0AAAAHdElNRQfjCRMIEAxe31ZOAAAAxklEQVQoz3WS\nCRKCMAxFQ4u4ILQuKLgBKojS+5/PtFbsghk608lLPv2ZQEBo6AUlEyB92OsPz3AnQMcBBWyMpk7M\nMAnI5+DEApMuiJeJBtiVGnnGVwmsPamYCYFkY0htdT2CbLf/SeXFQeVlHOE0SOVnwS9lxQUXWW38\n/FrIypuqr+Vzvx33CqWFPKhj+WjYB0gd22DLFKgN59pgU6n3aGAabJjW8WbVPuwh2rMakfLG3vXh\nM3UikmBkFdQ6/F+GF6GdBygJ3l3LIUNqkTpDAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDE5LTA5LTE5\nVDA4OjE2OjEyKzAzOjAwj5+H/AAAACV0RVh0ZGF0ZTptb2RpZnkAMjAxOS0wOS0xOVQwODoxNjox\nMiswMzowMP7CP0AAAAAASUVORK5CYII="
        }
      })
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/reservations/Reservation.vue?vue&type=template&id=31acdc8e&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/reservations/Reservation.vue?vue&type=template&id=31acdc8e&scoped=true& ***!
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
    { staticClass: "reservation" },
    [
      _c("navigation-header", {
        attrs: {
          groupCheckInBoolean: _vm.groupCheckIn,
          searchDefault: _vm.vModelDefaultSearchData
        },
        on: {
          groupCheckIn: _vm.handleGroupCheckIn,
          checkIn: function($event) {
            return _vm.handleCheckIn()
          },
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
          groupCheckIn: _vm.groupCheckIn,
          groupList: _vm.groupList,
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
              rowData: _vm.rowData,
              pagination: "true",
              paginationPageSize: _vm.paginationPageSize,
              gridOptions: _vm.gridOptions,
              context: _vm.context,
              pinnedBottomRowData: _vm.pinnedBottomRowData,
              columnDefs: _vm.columnDefs,
              frameworkComponents: _vm.frameworkComponents,
              enableCellChangeFlash: true,
              rowSelection: _vm.rowSelection,
              defaultColDef: _vm.defColDef,
              suppressDragLeaveHidesColumns: true,
              suppressMakeColumnVisibleAfterUnGroup: true,
              rowGroupPanelShow: _vm.rowGroupPanelShow,
              getContextMenuItems: _vm.getContextMenu,
              statusBar: _vm.statusBar
            },
            on: {
              "grid-ready": _vm.onGridReady,
              rowDoubleClicked: _vm.handleRowDobleClicked
            }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c("registration-form", {
        ref: "registrationForm",
        attrs: { isReservation: true },
        on: {
          refreshData: function($event) {
            return _vm.$refs.filterHeader.onRefreshData()
          }
        }
      }),
      _vm._v(" "),
      _c("cancel-reservation", {
        ref: "cancelReservation",
        on: {
          refreshData: function($event) {
            return _vm.$refs.filterHeader.onRefreshData()
          }
        }
      }),
      _vm._v(" "),
      _c(
        "vs-popup",
        {
          staticClass: "width-80",
          attrs: {
            active: _vm.modalGroupCheckIn,
            title: _vm.$t("reservation.groupReservation")
          },
          on: {
            "update:active": function($event) {
              _vm.modalGroupCheckIn = $event
            }
          }
        },
        [
          _c("group-check-in-form", {
            ref: "groupCheckInForm",
            attrs: {
              listFolio: _vm.listFolio,
              masterFolio: _vm.masterFolio,
              reservationList: _vm.reservationGroupList,
              resvNumber: _vm.reservationNumber,
              exchRateValue: parseInt(_vm.vDeposit.exchange_rate),
              currency: _vm.dataLookupDeposit.currency,
              accounts: _vm.accounts
            },
            on: {
              checkIn: _vm.handleSaveCheckInGroup,
              getExchRate: _vm.getExchangeRate,
              createMasterFolio: _vm.handleCreateMasterFolio,
              getFolioList: _vm.getFolioList
            }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "vs-sidebar",
        {
          ref: "sideBarOption",
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
                _vm._v("\n                Reservation Option\n                ")
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
                { attrs: { index: "1" }, on: { click: _vm.handleCheckIn } },
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
                      src: "/images/icons/check_in_icon24.png"
                    }
                  }),
                  _vm._v("\n                    CHECK-IN\n                ")
                ]
              ),
              _vm._v(" "),
              _vm.paramsData.status_code == _vm.reservationStatus.new ||
              _vm.paramsData.status_code == _vm.reservationStatus.waitlist
                ? _c(
                    "vs-sidebar-item",
                    {
                      attrs: { index: "2" },
                      on: {
                        click: function($event) {
                          return _vm.handleSetWaitList()
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
                          src: "/images/icons/wait_list_icon24.png"
                        }
                      }),
                      _vm._v(
                        "\n                    " +
                          _vm._s(
                            _vm.paramsData.status_code ==
                              _vm.reservationStatus.new
                              ? "SET AS WAIT LIST"
                              : _vm.paramsData.status_code ==
                                _vm.reservationStatus.waitlist
                              ? "UNSET WAIT LIST"
                              : ""
                          ) +
                          "\n                "
                      )
                    ]
                  )
                : _vm._e(),
              _vm._v(" "),
              _c(
                "vs-sidebar-item",
                {
                  attrs: { index: "3" },
                  on: {
                    click: function($event) {
                      _vm.showCancelReservation(_vm.reservationStatus.cancel)
                      _vm.credentialTitle =
                        "Cancel Reservation : " + _vm.reservationNumber
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
                  _vm._v("\n                    CANCEL\n                ")
                ]
              ),
              _vm._v(" "),
              _c(
                "vs-sidebar-item",
                {
                  attrs: { index: "4" },
                  on: {
                    click: function($event) {
                      _vm.showCancelReservation(_vm.reservationStatus.noShow)
                      _vm.credentialTitle =
                        "No Show Reservation : " + _vm.reservationNumber
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
                      src: "/images/icons/no_show_icon24.png"
                    }
                  }),
                  _vm._v("\n                    NO-SHOW\n                ")
                ]
              ),
              _vm._v(" "),
              _c(
                "vs-sidebar-item",
                {
                  attrs: { index: "5" },
                  on: {
                    click: function($event) {
                      _vm.showCancelReservation(_vm.reservationStatus.void)
                      _vm.credentialTitle =
                        "Void Reservation : " + _vm.reservationNumber
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
                      src: "/images/icons/delete_icon24.png"
                    }
                  }),
                  _vm._v("\n                    VOID\n                ")
                ]
              ),
              _vm._v(" "),
              _c(
                "vs-sidebar-item",
                {
                  attrs: { index: "6" },
                  on: {
                    click: function($event) {
                      _vm.showAutoAssign = true
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
                      src: "/images/icons/auto_assign_icon24.png"
                    }
                  }),
                  _vm._v(
                    "\n                    AUTO-ASSIGN ROOM\n                "
                  )
                ]
              ),
              _vm._v(" "),
              _c(
                "vs-sidebar-item",
                { attrs: { index: "7" }, on: { click: _vm.removeAssignRoom } },
                [
                  _vm._v(
                    "\n                    REMOVE AUTO-ASSIGN ROOM\n                "
                  )
                ]
              ),
              _vm._v(" "),
              _c(
                "vs-sidebar-item",
                { attrs: { index: "8" }, on: { click: _vm.lockReservation } },
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
                  _vm._v(
                    "\n                    " +
                      _vm._s(
                        _vm.paramsData.is_lock == "-1"
                          ? "UNLOCK RESERVATION"
                          : "LOCK RESERVATION"
                      ) +
                      "\n                "
                  )
                ]
              ),
              _vm._v(" "),
              _c("vs-divider", { attrs: { position: "center" } }, [
                _vm._v("\n                    Print\n                ")
              ]),
              _vm._v(" "),
              _c(
                "vs-sidebar-item",
                {
                  attrs: { index: "9" },
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
                    "\n                   PRINT REG FORM\n                "
                  )
                ]
              ),
              _vm._v(" "),
              _c(
                "vs-sidebar-item",
                {
                  attrs: { index: "10" },
                  on: {
                    click: function($event) {
                      return _vm.handlePrintConfirmationLetter()
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
                    "\n                   PRINT CONFIRMATION LETTER\n                "
                  )
                ]
              ),
              _vm._v(" "),
              _c(
                "vs-sidebar-item",
                {
                  attrs: { index: "11" },
                  on: {
                    click: function($event) {
                      return _vm.handlePrintProformaInvoice()
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
                    "\n                   PRINT PROFORMA INVOICE\n                "
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
        "vs-prompt",
        {
          attrs: {
            color: "primary",
            title: "Auto Assign Room",
            "accept-text": "Ready",
            "cancel-text": "All",
            active: _vm.showAutoAssign
          },
          on: {
            accept: function($event) {
              return _vm.autoAssignRoom(1)
            },
            cancel: function($event) {
              return _vm.autoAssignRoom(0)
            },
            "update:active": function($event) {
              _vm.showAutoAssign = $event
            }
          }
        },
        [
          _c("div", { staticClass: "con-exemple-prompt" }, [
            _vm._v("\n                Select Room Status\n            ")
          ])
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/reservations/components/FilterHeader.vue?vue&type=template&id=436fac2b&":
/*!********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/reservations/components/FilterHeader.vue?vue&type=template&id=436fac2b& ***!
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
    { staticClass: "reservation-search-bar mb-3" },
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
                      staticClass: "mb-2",
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
                          attrs: { "vs-lg": "5", "vs-sm": "5", "vs-xs": "12" }
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
                          attrs: { "vs-lg": "7", "vs-sm": "7", "vs-xs": "12" }
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
                  ),
                  _vm._v(" "),
                  _c(
                    "vs-row",
                    {
                      attrs: {
                        "vs-align": "center",
                        "vs-type": "flex",
                        "vs-justify": "space-around",
                        "vs-w": "12"
                      }
                    },
                    [
                      _c(
                        "vs-col",
                        {
                          attrs: {
                            "vs-type": "flex",
                            "vs-align": "center",
                            "vs-lg": "5",
                            "vs-sm": "6",
                            "vs-xs": "12"
                          }
                        },
                        [
                          _c(
                            "vs-col",
                            {
                              attrs: {
                                "vs-lg": "2",
                                "vs-sm": "2",
                                "vs-xs": "2"
                              }
                            },
                            [_c("span", [_vm._v("From:")])]
                          ),
                          _vm._v(" "),
                          _c(
                            "vs-col",
                            {
                              attrs: {
                                "vs-lg": "10",
                                "vs-sm": "10",
                                "vs-xs": "10"
                              }
                            },
                            [
                              _c("date-picker", {
                                attrs: {
                                  lang: _vm.$t("lang"),
                                  "value-type": "YYYY-MM-DD",
                                  placeholder: "DD/MM/YYYY",
                                  format: "DD/MM/YYYY",
                                  label: "name"
                                },
                                model: {
                                  value: _vm.date.from,
                                  callback: function($$v) {
                                    _vm.$set(_vm.date, "from", $$v)
                                  },
                                  expression: "date.from"
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
                          attrs: {
                            "vs-type": "flex",
                            "vs-align": "center",
                            "vs-lg": "5",
                            "vs-sm": "6",
                            "vs-xs": "12"
                          }
                        },
                        [
                          _c(
                            "vs-col",
                            {
                              attrs: {
                                "vs-lg": "2",
                                "vs-sm": "2",
                                "vs-xs": "2"
                              }
                            },
                            [_c("span", [_vm._v("To:")])]
                          ),
                          _vm._v(" "),
                          _c(
                            "vs-col",
                            {
                              attrs: {
                                "vs-lg": "10",
                                "vs-sm": "10",
                                "vs-xs": "10"
                              }
                            },
                            [
                              _c("date-picker", {
                                attrs: {
                                  "vs-lg": "10",
                                  "vs-sm": "10",
                                  "vs-xs": "10",
                                  lang: _vm.$t("lang"),
                                  "value-type": "YYYY-MM-DD",
                                  placeholder: "DD/MM/YYYY",
                                  format: "DD/MM/YYYY",
                                  label: "name"
                                },
                                model: {
                                  value: _vm.date.to,
                                  callback: function($$v) {
                                    _vm.$set(_vm.date, "to", $$v)
                                  },
                                  expression: "date.to"
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
              !_vm.groupCheckIn
                ? _c("vs-col", { staticClass: "lg:w-1/2 filter-part" }, [
                    _c("div", { staticClass: "room-filter" }, [
                      _c(
                        "div",
                        { staticClass: "reservation-status-filter" },
                        [
                          _c(
                            "vs-row",
                            {
                              staticClass: "mb-2",
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
                                    "vs-sm": "3",
                                    "vs-xs": "6"
                                  }
                                },
                                [
                                  _c(
                                    "vs-chip",
                                    { attrs: { color: "#00C1B0" } },
                                    [
                                      _c(
                                        "vs-radio",
                                        {
                                          attrs: {
                                            color: "white",
                                            "vs-value": "N"
                                          },
                                          on: {
                                            change: function($event) {
                                              return _vm.onRefreshData()
                                            }
                                          },
                                          model: {
                                            value: _vm.mFilter,
                                            callback: function($$v) {
                                              _vm.mFilter = $$v
                                            },
                                            expression: "mFilter"
                                          }
                                        },
                                        [_vm._v("Reserved")]
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
                                    "vs-sm": "3",
                                    "vs-xs": "6"
                                  }
                                },
                                [
                                  _c(
                                    "vs-chip",
                                    { attrs: { color: "#004481" } },
                                    [
                                      _c(
                                        "vs-radio",
                                        {
                                          attrs: {
                                            color: "white",
                                            "vs-value": "W"
                                          },
                                          on: {
                                            change: function($event) {
                                              return _vm.onRefreshData()
                                            }
                                          },
                                          model: {
                                            value: _vm.mFilter,
                                            callback: function($$v) {
                                              _vm.mFilter = $$v
                                            },
                                            expression: "mFilter"
                                          }
                                        },
                                        [_vm._v("Wait List")]
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
                                    "vs-sm": "3",
                                    "vs-xs": "6"
                                  }
                                },
                                [
                                  _c(
                                    "vs-chip",
                                    { attrs: { color: "#2494C6" } },
                                    [
                                      _c(
                                        "vs-radio",
                                        {
                                          attrs: {
                                            color: "white",
                                            "vs-value": "I"
                                          },
                                          on: {
                                            change: function($event) {
                                              return _vm.onRefreshData()
                                            }
                                          },
                                          model: {
                                            value: _vm.mFilter,
                                            callback: function($$v) {
                                              _vm.mFilter = $$v
                                            },
                                            expression: "mFilter"
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
                                    "vs-sm": "3",
                                    "vs-xs": "6"
                                  }
                                },
                                [
                                  _c(
                                    "vs-chip",
                                    { attrs: { color: "#FF83A5" } },
                                    [
                                      _c(
                                        "vs-radio",
                                        {
                                          attrs: {
                                            color: "white",
                                            "vs-value": "O"
                                          },
                                          on: {
                                            change: function($event) {
                                              return _vm.onRefreshData()
                                            }
                                          },
                                          model: {
                                            value: _vm.mFilter,
                                            callback: function($$v) {
                                              _vm.mFilter = $$v
                                            },
                                            expression: "mFilter"
                                          }
                                        },
                                        [_vm._v("Checked Out")]
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
                                    "vs-sm": "3",
                                    "vs-xs": "6"
                                  }
                                },
                                [
                                  _c(
                                    "vs-chip",
                                    { attrs: { color: "#FF002A" } },
                                    [
                                      _c(
                                        "vs-radio",
                                        {
                                          attrs: {
                                            color: "white",
                                            "vs-value": "C"
                                          },
                                          on: {
                                            change: function($event) {
                                              return _vm.onRefreshData()
                                            }
                                          },
                                          model: {
                                            value: _vm.mFilter,
                                            callback: function($$v) {
                                              _vm.mFilter = $$v
                                            },
                                            expression: "mFilter"
                                          }
                                        },
                                        [_vm._v("Canceled")]
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
                                    "vs-sm": "3",
                                    "vs-xs": "6"
                                  }
                                },
                                [
                                  _c(
                                    "vs-chip",
                                    { attrs: { color: "#FF8A00" } },
                                    [
                                      _c(
                                        "vs-radio",
                                        {
                                          attrs: {
                                            color: "white",
                                            "vs-value": "S"
                                          },
                                          on: {
                                            change: function($event) {
                                              return _vm.onRefreshData()
                                            }
                                          },
                                          model: {
                                            value: _vm.mFilter,
                                            callback: function($$v) {
                                              _vm.mFilter = $$v
                                            },
                                            expression: "mFilter"
                                          }
                                        },
                                        [_vm._v("No Show")]
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
                                    "vs-sm": "3",
                                    "vs-xs": "6"
                                  }
                                },
                                [
                                  _c(
                                    "vs-chip",
                                    { attrs: { color: "#C62583" } },
                                    [
                                      _c(
                                        "vs-radio",
                                        {
                                          attrs: {
                                            color: "white",
                                            "vs-value": "V"
                                          },
                                          on: {
                                            change: function($event) {
                                              return _vm.onRefreshData()
                                            }
                                          },
                                          model: {
                                            value: _vm.mFilter,
                                            callback: function($$v) {
                                              _vm.mFilter = $$v
                                            },
                                            expression: "mFilter"
                                          }
                                        },
                                        [_vm._v("Voided")]
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
                                    "vs-sm": "3",
                                    "vs-xs": "6"
                                  }
                                },
                                [
                                  _c(
                                    "vs-chip",
                                    { attrs: { color: "#31FD4B" } },
                                    [
                                      _c(
                                        "vs-radio",
                                        {
                                          attrs: {
                                            color: "white",
                                            "vs-value": "All"
                                          },
                                          on: {
                                            change: function($event) {
                                              return _vm.onRefreshData()
                                            }
                                          },
                                          model: {
                                            value: _vm.mFilter,
                                            callback: function($$v) {
                                              _vm.mFilter = $$v
                                            },
                                            expression: "mFilter"
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
                : _c(
                    "vs-col",
                    { attrs: { "vs-w": "6" } },
                    [
                      _c(
                        "vs-row",
                        [
                          _c(
                            "vs-col",
                            {
                              attrs: {
                                "vs-type": "flex",
                                "vs-align": "center",
                                "vs-lg": "2",
                                "vs-sm": "2",
                                "vs-xs": "2"
                              }
                            },
                            [_c("span", [_vm._v("Group:")])]
                          ),
                          _vm._v(" "),
                          _c(
                            "vs-col",
                            {
                              attrs: {
                                "vs-lg": "10",
                                "vs-sm": "10",
                                "vs-xs": "10"
                              }
                            },
                            [
                              _c("v-select", {
                                attrs: {
                                  clearable: false,
                                  reduce: function(searchOption) {
                                    return searchOption.code
                                  },
                                  label: "name",
                                  options: _vm.groupList
                                },
                                on: {
                                  input: function($event) {
                                    return _vm.onRefreshData()
                                  }
                                },
                                model: {
                                  value: _vm.vGroup,
                                  callback: function($$v) {
                                    _vm.vGroup = $$v
                                  },
                                  expression: "vGroup"
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
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/reservations/components/GroupCheckInForm.vue?vue&type=template&id=08e19d90&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/reservations/components/GroupCheckInForm.vue?vue&type=template&id=08e19d90&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", [
    _c("div", { staticClass: "popup-body vs-con-loading__container" }, [
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
              "VuePerfectScrollbar",
              {
                staticClass: "scroll-area-popup-form pt-2",
                attrs: { settings: _vm.perfectScrollbarSettings }
              },
              [
                _c(
                  "vs-collapse",
                  { attrs: { type: "border" } },
                  [
                    _c(
                      "vs-collapse-item",
                      { attrs: { open: _vm.openCollapseItemGuestList } },
                      [
                        _c(
                          "div",
                          { attrs: { slot: "header" }, slot: "header" },
                          [
                            _vm._v(
                              "\n                                    " +
                                _vm._s(_vm.$t("reservation.guestGroup")) +
                                "\n                                "
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c("group-check-in-table", {
                          ref: "groupCheckInTable",
                          attrs: { rowData: _vm.reservationList }
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "vs-collapse-item",
                      { attrs: { open: true } },
                      [
                        _c(
                          "div",
                          { attrs: { slot: "header" }, slot: "header" },
                          [
                            _vm._v(
                              "\n                                    " +
                                _vm._s(_vm.$t("table.routingAccount")) +
                                "\n                                "
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "vs-row",
                          { staticClass: "mb-2" },
                          [
                            _c(
                              "vs-col",
                              {
                                staticClass: "wrap-form-select form-group row",
                                attrs: { "vs-lg": "2", "vs-xs": "12" }
                              },
                              [
                                _c(
                                  "label",
                                  { attrs: { for: "master-folio-night" } },
                                  [_vm._v("Master Folio Night")]
                                ),
                                _vm._v(" "),
                                _c("vs-row", [
                                  _c("input", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: _vm.vMasterFolio.night,
                                        expression: "vMasterFolio.night"
                                      }
                                    ],
                                    staticClass:
                                      "vs-inputx vs-input--input normal hasValue",
                                    attrs: {
                                      type: "number",
                                      min: "1",
                                      id: "master-folio-night"
                                    },
                                    domProps: { value: _vm.vMasterFolio.night },
                                    on: {
                                      input: function($event) {
                                        if ($event.target.composing) {
                                          return
                                        }
                                        _vm.$set(
                                          _vm.vMasterFolio,
                                          "night",
                                          $event.target.value
                                        )
                                      }
                                    }
                                  })
                                ])
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
                                _c("label", [_vm._v("Currency")]),
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
                                        placeholder: _vm.$t("table.select"),
                                        clearable: false,
                                        label: "code",
                                        options: _vm.currency,
                                        name: "folio type",
                                        "data-vv-scope": "masterFolio"
                                      },
                                      on: {
                                        input: function($event) {
                                          _vm.vMasterFolio.exchange_rate =
                                            _vm.vMasterFolio.currency.exchange_rate
                                        }
                                      },
                                      model: {
                                        value: _vm.vMasterFolio.currency,
                                        callback: function($$v) {
                                          _vm.$set(
                                            _vm.vMasterFolio,
                                            "currency",
                                            $$v
                                          )
                                        },
                                        expression: "vMasterFolio.currency"
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
                                        staticClass: "error-text text-danger"
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
                                attrs: { "vs-lg": "3", "vs-xs": "12" }
                              },
                              [
                                _c(
                                  "vs-row",
                                  [
                                    _c("input-number", {
                                      attrs: {
                                        disabled: "",
                                        label: _vm.$t("reservation.excRate")
                                      },
                                      model: {
                                        value: _vm.vMasterFolio.exchange_rate,
                                        callback: function($$v) {
                                          _vm.$set(
                                            _vm.vMasterFolio,
                                            "exchange_rate",
                                            $$v
                                          )
                                        },
                                        expression: "vMasterFolio.exchange_rate"
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
                                staticClass: "wrap-form-select",
                                attrs: { "vs-lg": "4", "vs-xs": "12" }
                              },
                              [
                                _c(
                                  "vs-button",
                                  {
                                    staticClass:
                                      "btn-bottom vs-con-loading__container",
                                    attrs: {
                                      disabled: _vm.saveDisabled,
                                      id: "btn-add-routing",
                                      color: "success"
                                    },
                                    on: { click: _vm.handleCreateMasterFolio }
                                  },
                                  [_vm._v("Create New Master Folio")]
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
                                        placeholder: _vm.$t("table.select"),
                                        clearable: false,
                                        label: "name",
                                        options: _vm.accounts,
                                        name: "account",
                                        "data-vv-scope": "routing"
                                      },
                                      model: {
                                        value: _vm.vRouting.account,
                                        callback: function($$v) {
                                          _vm.$set(_vm.vRouting, "account", $$v)
                                        },
                                        expression: "vRouting.account"
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
                                        staticClass: "error-text text-danger"
                                      },
                                      [
                                        _vm._v(
                                          _vm._s(
                                            _vm.errors.first("routing.account")
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
                                _c("label", [_vm._v("Folio Type")]),
                                _vm._v(" "),
                                _c(
                                  "vs-row",
                                  [
                                    _c("v-select", {
                                      staticClass: "w-full height200",
                                      attrs: {
                                        placeholder: _vm.$t("table.select"),
                                        clearable: false,
                                        reduce: function(value) {
                                          return value.code
                                        },
                                        label: "name",
                                        options: _vm.folioType
                                      },
                                      on: {
                                        input: function($event) {
                                          return _vm.$emit(
                                            "getFolioList",
                                            _vm.vRouting.folio_type,
                                            null
                                          )
                                        }
                                      },
                                      model: {
                                        value: _vm.vRouting.folio_type,
                                        callback: function($$v) {
                                          _vm.$set(
                                            _vm.vRouting,
                                            "folio_type",
                                            $$v
                                          )
                                        },
                                        expression: "vRouting.folio_type"
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
                                staticClass: "wrap-form-select",
                                attrs: { "vs-lg": "4", "vs-xs": "12" }
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
                                        placeholder: _vm.$t("table.select"),
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
                                        value: _vm.vRouting.folio_transfer,
                                        callback: function($$v) {
                                          _vm.$set(
                                            _vm.vRouting,
                                            "folio_transfer",
                                            $$v
                                          )
                                        },
                                        expression: "vRouting.folio_transfer"
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
                                        staticClass: "error-text text-danger"
                                      },
                                      [
                                        _vm._v(
                                          _vm._s(
                                            _vm.errors.first("routing.folio")
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
                                        placeholder: _vm.$t("table.select"),
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
                                        staticClass: "error-text text-danger"
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
                                    "btn-bottom vs-con-loading__container",
                                  attrs: {
                                    disabled: _vm.saveDisabled,
                                    id: "btn-add-routing",
                                    icon: "add",
                                    color: "success"
                                  },
                                  on: {
                                    click: function($event) {
                                      return _vm.handleInsertRoutingAccount()
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
                        _c("ag-grid-vue", {
                          ref: "mainContainer",
                          class: _vm.themeAgGrid,
                          style: _vm.StyleAgGridFrame0,
                          attrs: {
                            suppressDragLeaveHidesColumns: true,
                            enableRangeSelection: true,
                            gridOptions: _vm.gridOptions,
                            context: _vm.context,
                            columnDefs: _vm.columnDefs,
                            frameworkComponents: _vm.frameworkComponents,
                            enableCellChangeFlash: true,
                            rowSelection: _vm.rowSelection,
                            rowData: _vm.routingAccount,
                            defaultColDef: _vm.defColDef,
                            getContextMenuItems: _vm.getContextMenu
                          },
                          on: { "grid-ready": _vm.onGridReady }
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
      ])
    ]),
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
                attrs: {
                  disabled: _vm.saveDisabled,
                  id: "button-save-main",
                  icon: "save"
                },
                on: {
                  click: function($event) {
                    _vm.handleCheckIn()
                    _vm.saveDisabled = true
                  }
                }
              },
              [_vm._v(_vm._s(_vm.$t("table.save")))]
            )
          ],
          1
        )
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/reservations/components/NavigationHeader.vue?vue&type=template&id=98069e72&":
/*!************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/reservations/components/NavigationHeader.vue?vue&type=template&id=98069e72& ***!
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
          attrs: { "vs-w": "12", "vs-type": "flex" }
        },
        [
          _c(
            "vs-col",
            {
              attrs: {
                "vs-lg": "2",
                "vs-md": "2",
                "vs-xs": "12",
                "vs-justify": "flex-start",
                "vs-align": "flex-start"
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
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "vs-col",
            {
              attrs: {
                "vs-lg": "10",
                "vs-md": "10",
                "vs-xs": "12",
                "vs-type": "flex",
                "vs-justify": "flex-end",
                "vs-align": "flex-end"
              }
            },
            [
              !_vm.groupCheckInBoolean
                ? _c(
                    "vs-button",
                    {
                      staticClass: "btn-group-resv",
                      attrs: {
                        "vs-xs": "12",
                        "vs-type": "flex",
                        "vs-justify": "flex-end",
                        color: "success",
                        type: "filled",
                        icon: "people_alt"
                      },
                      on: {
                        click: function($event) {
                          return _vm.groupCheckIn()
                        }
                      }
                    },
                    [_vm._v(_vm._s(this.$t("reservation.groupCheckIn")))]
                  )
                : _c(
                    "vs-button",
                    {
                      staticClass: "btn-group-resv",
                      attrs: {
                        "vs-xs": "12",
                        "vs-type": "flex",
                        "vs-justify": "flex-end",
                        color: "success",
                        type: "filled",
                        icon: "person"
                      },
                      on: {
                        click: function($event) {
                          return _vm.groupCheckIn()
                        }
                      }
                    },
                    [_vm._v(_vm._s(this.$t("reservation.individualCheckIn")))]
                  ),
              _vm._v(" "),
              _vm.groupCheckInBoolean
                ? _c(
                    "vs-button",
                    {
                      staticClass: "btn-group-resv",
                      attrs: {
                        "vs-xs": "12",
                        "vs-type": "flex",
                        "vs-justify": "flex-end",
                        color: "success",
                        type: "filled",
                        icon: "play_for_work"
                      },
                      on: {
                        click: function($event) {
                          return _vm.checkIn()
                        }
                      }
                    },
                    [_vm._v(_vm._s(this.$t("reservation.checkIn")))]
                  )
                : _vm._e(),
              _vm._v(" "),
              _c(
                "vs-button",
                {
                  attrs: {
                    "vs-xs": "12",
                    "vs-type": "flex",
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
                [_vm._v(_vm._s(_vm.$t("reservation.reservation")))]
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/reservations/components/table/GroupCheckInTable.vue?vue&type=template&id=79aef209&":
/*!*******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/reservations/components/table/GroupCheckInTable.vue?vue&type=template&id=79aef209& ***!
  \*******************************************************************************************************************************************************************************************************************************************************/
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
        ref: "mainContainer",
        class: _vm.themeAgGrid,
        style: _vm.StyleAgGridFrame0,
        attrs: {
          suppressDragLeaveHidesColumns: true,
          enableRangeSelection: true,
          gridOptions: _vm.gridOptions,
          context: _vm.context,
          columnDefs: _vm.columnDefs,
          frameworkComponents: _vm.frameworkComponents,
          enableCellChangeFlash: true,
          rowSelection: _vm.rowSelection,
          rowData: _vm.rowData,
          defaultColDef: _vm.defColDef,
          getRowNodeId: _vm.getRowNodeId,
          getContextMenuItems: _vm.getContextMenu
        },
        on: { "grid-ready": _vm.onGridReady }
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



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

/***/ "./resources/js/src/api/reservation/guestGroup.js":
/*!********************************************************!*\
  !*** ./resources/js/src/api/reservation/guestGroup.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GuestGroupResource; });
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



var tableName = 'guest_group';
var uri = 'reservation/guestgroup';

var GuestGroupResource =
/*#__PURE__*/
function (_Resource) {
  _inherits(GuestGroupResource, _Resource);

  function GuestGroupResource() {
    _classCallCheck(this, GuestGroupResource);

    return _possibleConstructorReturn(this, _getPrototypeOf(GuestGroupResource).call(this, uri));
  }

  _createClass(GuestGroupResource, [{
    key: "log",
    value: function log(id) {
      return Object(_utils_request__WEBPACK_IMPORTED_MODULE_1__["default"])({
        url: '/tracking/log/' + tableName + '/' + id,
        method: 'get'
      });
    }
  }]);

  return GuestGroupResource;
}(_api_resource__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./resources/js/src/components/icon/IconClean.vue":
/*!********************************************************!*\
  !*** ./resources/js/src/components/icon/IconClean.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _IconClean_vue_vue_type_template_id_f8fb0d8c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./IconClean.vue?vue&type=template&id=f8fb0d8c& */ "./resources/js/src/components/icon/IconClean.vue?vue&type=template&id=f8fb0d8c&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  script,
  _IconClean_vue_vue_type_template_id_f8fb0d8c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _IconClean_vue_vue_type_template_id_f8fb0d8c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/components/icon/IconClean.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/components/icon/IconClean.vue?vue&type=template&id=f8fb0d8c&":
/*!***************************************************************************************!*\
  !*** ./resources/js/src/components/icon/IconClean.vue?vue&type=template&id=f8fb0d8c& ***!
  \***************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_IconClean_vue_vue_type_template_id_f8fb0d8c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./IconClean.vue?vue&type=template&id=f8fb0d8c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/icon/IconClean.vue?vue&type=template&id=f8fb0d8c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_IconClean_vue_vue_type_template_id_f8fb0d8c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_IconClean_vue_vue_type_template_id_f8fb0d8c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/components/icon/IconDirty.vue":
/*!********************************************************!*\
  !*** ./resources/js/src/components/icon/IconDirty.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _IconDirty_vue_vue_type_template_id_9e490b7a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./IconDirty.vue?vue&type=template&id=9e490b7a& */ "./resources/js/src/components/icon/IconDirty.vue?vue&type=template&id=9e490b7a&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  script,
  _IconDirty_vue_vue_type_template_id_9e490b7a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _IconDirty_vue_vue_type_template_id_9e490b7a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/components/icon/IconDirty.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/components/icon/IconDirty.vue?vue&type=template&id=9e490b7a&":
/*!***************************************************************************************!*\
  !*** ./resources/js/src/components/icon/IconDirty.vue?vue&type=template&id=9e490b7a& ***!
  \***************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_IconDirty_vue_vue_type_template_id_9e490b7a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./IconDirty.vue?vue&type=template&id=9e490b7a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/icon/IconDirty.vue?vue&type=template&id=9e490b7a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_IconDirty_vue_vue_type_template_id_9e490b7a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_IconDirty_vue_vue_type_template_id_9e490b7a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/components/icon/IconReady.vue":
/*!********************************************************!*\
  !*** ./resources/js/src/components/icon/IconReady.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _IconReady_vue_vue_type_template_id_e30540d8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./IconReady.vue?vue&type=template&id=e30540d8& */ "./resources/js/src/components/icon/IconReady.vue?vue&type=template&id=e30540d8&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  script,
  _IconReady_vue_vue_type_template_id_e30540d8___WEBPACK_IMPORTED_MODULE_0__["render"],
  _IconReady_vue_vue_type_template_id_e30540d8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/components/icon/IconReady.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/components/icon/IconReady.vue?vue&type=template&id=e30540d8&":
/*!***************************************************************************************!*\
  !*** ./resources/js/src/components/icon/IconReady.vue?vue&type=template&id=e30540d8& ***!
  \***************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_IconReady_vue_vue_type_template_id_e30540d8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./IconReady.vue?vue&type=template&id=e30540d8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/icon/IconReady.vue?vue&type=template&id=e30540d8&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_IconReady_vue_vue_type_template_id_e30540d8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_IconReady_vue_vue_type_template_id_e30540d8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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

/***/ "./resources/js/src/views/pages/reservations/Reservation.vue":
/*!*******************************************************************!*\
  !*** ./resources/js/src/views/pages/reservations/Reservation.vue ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Reservation_vue_vue_type_template_id_31acdc8e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Reservation.vue?vue&type=template&id=31acdc8e&scoped=true& */ "./resources/js/src/views/pages/reservations/Reservation.vue?vue&type=template&id=31acdc8e&scoped=true&");
/* harmony import */ var _Reservation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Reservation.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/reservations/Reservation.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Reservation_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Reservation.vue?vue&type=style&index=0&lang=scss& */ "./resources/js/src/views/pages/reservations/Reservation.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _Reservation_vue_vue_type_style_index_1_id_31acdc8e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Reservation.vue?vue&type=style&index=1&id=31acdc8e&scoped=true&lang=css& */ "./resources/js/src/views/pages/reservations/Reservation.vue?vue&type=style&index=1&id=31acdc8e&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");







/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__["default"])(
  _Reservation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Reservation_vue_vue_type_template_id_31acdc8e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Reservation_vue_vue_type_template_id_31acdc8e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "31acdc8e",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/reservations/Reservation.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/reservations/Reservation.vue?vue&type=script&lang=js&":
/*!********************************************************************************************!*\
  !*** ./resources/js/src/views/pages/reservations/Reservation.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Reservation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Reservation.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/reservations/Reservation.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Reservation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/reservations/Reservation.vue?vue&type=style&index=0&lang=scss&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/reservations/Reservation.vue?vue&type=style&index=0&lang=scss& ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Reservation_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Reservation.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/reservations/Reservation.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Reservation_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Reservation_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Reservation_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Reservation_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Reservation_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/src/views/pages/reservations/Reservation.vue?vue&type=style&index=1&id=31acdc8e&scoped=true&lang=css&":
/*!****************************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/reservations/Reservation.vue?vue&type=style&index=1&id=31acdc8e&scoped=true&lang=css& ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Reservation_vue_vue_type_style_index_1_id_31acdc8e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader??ref--7-1!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Reservation.vue?vue&type=style&index=1&id=31acdc8e&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/reservations/Reservation.vue?vue&type=style&index=1&id=31acdc8e&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Reservation_vue_vue_type_style_index_1_id_31acdc8e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Reservation_vue_vue_type_style_index_1_id_31acdc8e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Reservation_vue_vue_type_style_index_1_id_31acdc8e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Reservation_vue_vue_type_style_index_1_id_31acdc8e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Reservation_vue_vue_type_style_index_1_id_31acdc8e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/src/views/pages/reservations/Reservation.vue?vue&type=template&id=31acdc8e&scoped=true&":
/*!**************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/reservations/Reservation.vue?vue&type=template&id=31acdc8e&scoped=true& ***!
  \**************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Reservation_vue_vue_type_template_id_31acdc8e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Reservation.vue?vue&type=template&id=31acdc8e&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/reservations/Reservation.vue?vue&type=template&id=31acdc8e&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Reservation_vue_vue_type_template_id_31acdc8e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Reservation_vue_vue_type_template_id_31acdc8e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/pages/reservations/components/FilterHeader.vue":
/*!*******************************************************************************!*\
  !*** ./resources/js/src/views/pages/reservations/components/FilterHeader.vue ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FilterHeader_vue_vue_type_template_id_436fac2b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FilterHeader.vue?vue&type=template&id=436fac2b& */ "./resources/js/src/views/pages/reservations/components/FilterHeader.vue?vue&type=template&id=436fac2b&");
/* harmony import */ var _FilterHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FilterHeader.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/reservations/components/FilterHeader.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _FilterHeader_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FilterHeader.vue?vue&type=style&index=0&lang=scss& */ "./resources/js/src/views/pages/reservations/components/FilterHeader.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _FilterHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FilterHeader_vue_vue_type_template_id_436fac2b___WEBPACK_IMPORTED_MODULE_0__["render"],
  _FilterHeader_vue_vue_type_template_id_436fac2b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/reservations/components/FilterHeader.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/reservations/components/FilterHeader.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/reservations/components/FilterHeader.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FilterHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./FilterHeader.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/reservations/components/FilterHeader.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FilterHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/reservations/components/FilterHeader.vue?vue&type=style&index=0&lang=scss&":
/*!*****************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/reservations/components/FilterHeader.vue?vue&type=style&index=0&lang=scss& ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_FilterHeader_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/style-loader!../../../../../../../node_modules/css-loader!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./FilterHeader.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/reservations/components/FilterHeader.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_FilterHeader_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_FilterHeader_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_FilterHeader_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_FilterHeader_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_FilterHeader_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/src/views/pages/reservations/components/FilterHeader.vue?vue&type=template&id=436fac2b&":
/*!**************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/reservations/components/FilterHeader.vue?vue&type=template&id=436fac2b& ***!
  \**************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FilterHeader_vue_vue_type_template_id_436fac2b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./FilterHeader.vue?vue&type=template&id=436fac2b& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/reservations/components/FilterHeader.vue?vue&type=template&id=436fac2b&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FilterHeader_vue_vue_type_template_id_436fac2b___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FilterHeader_vue_vue_type_template_id_436fac2b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/pages/reservations/components/GroupCheckInForm.vue":
/*!***********************************************************************************!*\
  !*** ./resources/js/src/views/pages/reservations/components/GroupCheckInForm.vue ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _GroupCheckInForm_vue_vue_type_template_id_08e19d90_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GroupCheckInForm.vue?vue&type=template&id=08e19d90&scoped=true& */ "./resources/js/src/views/pages/reservations/components/GroupCheckInForm.vue?vue&type=template&id=08e19d90&scoped=true&");
/* harmony import */ var _GroupCheckInForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GroupCheckInForm.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/reservations/components/GroupCheckInForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _GroupCheckInForm_vue_vue_type_style_index_0_id_08e19d90_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GroupCheckInForm.vue?vue&type=style&index=0&id=08e19d90&scoped=true&lang=css& */ "./resources/js/src/views/pages/reservations/components/GroupCheckInForm.vue?vue&type=style&index=0&id=08e19d90&scoped=true&lang=css&");
/* harmony import */ var _GroupCheckInForm_vue_vue_type_style_index_1_id_08e19d90_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./GroupCheckInForm.vue?vue&type=style&index=1&id=08e19d90&scoped=true&lang=css& */ "./resources/js/src/views/pages/reservations/components/GroupCheckInForm.vue?vue&type=style&index=1&id=08e19d90&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");







/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__["default"])(
  _GroupCheckInForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _GroupCheckInForm_vue_vue_type_template_id_08e19d90_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _GroupCheckInForm_vue_vue_type_template_id_08e19d90_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "08e19d90",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/reservations/components/GroupCheckInForm.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/reservations/components/GroupCheckInForm.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/reservations/components/GroupCheckInForm.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GroupCheckInForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./GroupCheckInForm.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/reservations/components/GroupCheckInForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GroupCheckInForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/reservations/components/GroupCheckInForm.vue?vue&type=style&index=0&id=08e19d90&scoped=true&lang=css&":
/*!********************************************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/reservations/components/GroupCheckInForm.vue?vue&type=style&index=0&id=08e19d90&scoped=true&lang=css& ***!
  \********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_GroupCheckInForm_vue_vue_type_style_index_0_id_08e19d90_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/style-loader!../../../../../../../node_modules/css-loader??ref--7-1!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./GroupCheckInForm.vue?vue&type=style&index=0&id=08e19d90&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/reservations/components/GroupCheckInForm.vue?vue&type=style&index=0&id=08e19d90&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_GroupCheckInForm_vue_vue_type_style_index_0_id_08e19d90_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_GroupCheckInForm_vue_vue_type_style_index_0_id_08e19d90_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_GroupCheckInForm_vue_vue_type_style_index_0_id_08e19d90_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_GroupCheckInForm_vue_vue_type_style_index_0_id_08e19d90_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_GroupCheckInForm_vue_vue_type_style_index_0_id_08e19d90_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/src/views/pages/reservations/components/GroupCheckInForm.vue?vue&type=style&index=1&id=08e19d90&scoped=true&lang=css&":
/*!********************************************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/reservations/components/GroupCheckInForm.vue?vue&type=style&index=1&id=08e19d90&scoped=true&lang=css& ***!
  \********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_GroupCheckInForm_vue_vue_type_style_index_1_id_08e19d90_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/style-loader!../../../../../../../node_modules/css-loader??ref--7-1!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./GroupCheckInForm.vue?vue&type=style&index=1&id=08e19d90&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/reservations/components/GroupCheckInForm.vue?vue&type=style&index=1&id=08e19d90&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_GroupCheckInForm_vue_vue_type_style_index_1_id_08e19d90_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_GroupCheckInForm_vue_vue_type_style_index_1_id_08e19d90_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_GroupCheckInForm_vue_vue_type_style_index_1_id_08e19d90_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_GroupCheckInForm_vue_vue_type_style_index_1_id_08e19d90_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_GroupCheckInForm_vue_vue_type_style_index_1_id_08e19d90_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/src/views/pages/reservations/components/GroupCheckInForm.vue?vue&type=template&id=08e19d90&scoped=true&":
/*!******************************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/reservations/components/GroupCheckInForm.vue?vue&type=template&id=08e19d90&scoped=true& ***!
  \******************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GroupCheckInForm_vue_vue_type_template_id_08e19d90_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./GroupCheckInForm.vue?vue&type=template&id=08e19d90&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/reservations/components/GroupCheckInForm.vue?vue&type=template&id=08e19d90&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GroupCheckInForm_vue_vue_type_template_id_08e19d90_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GroupCheckInForm_vue_vue_type_template_id_08e19d90_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/pages/reservations/components/NavigationHeader.vue":
/*!***********************************************************************************!*\
  !*** ./resources/js/src/views/pages/reservations/components/NavigationHeader.vue ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _NavigationHeader_vue_vue_type_template_id_98069e72___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NavigationHeader.vue?vue&type=template&id=98069e72& */ "./resources/js/src/views/pages/reservations/components/NavigationHeader.vue?vue&type=template&id=98069e72&");
/* harmony import */ var _NavigationHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NavigationHeader.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/reservations/components/NavigationHeader.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _NavigationHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _NavigationHeader_vue_vue_type_template_id_98069e72___WEBPACK_IMPORTED_MODULE_0__["render"],
  _NavigationHeader_vue_vue_type_template_id_98069e72___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/reservations/components/NavigationHeader.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/reservations/components/NavigationHeader.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/reservations/components/NavigationHeader.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NavigationHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./NavigationHeader.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/reservations/components/NavigationHeader.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NavigationHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/reservations/components/NavigationHeader.vue?vue&type=template&id=98069e72&":
/*!******************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/reservations/components/NavigationHeader.vue?vue&type=template&id=98069e72& ***!
  \******************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NavigationHeader_vue_vue_type_template_id_98069e72___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./NavigationHeader.vue?vue&type=template&id=98069e72& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/reservations/components/NavigationHeader.vue?vue&type=template&id=98069e72&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NavigationHeader_vue_vue_type_template_id_98069e72___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NavigationHeader_vue_vue_type_template_id_98069e72___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/pages/reservations/components/action_grid.js":
/*!*****************************************************************************!*\
  !*** ./resources/js/src/views/pages/reservations/components/action_grid.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (vue__WEBPACK_IMPORTED_MODULE_0___default.a.extend({
  template: "\n            <div>\n                <div v-if=\"params.data.reservation_number > 0\" class=\"flex action-button\">\n                    <vs-button @click=\"showSidebar\" :color=\"iconAction.menuColor\" type=\"flat\"><vs-icon icon=\"menu\" size=\"small\"></vs-icon></vs-button>\n                    <vx-tooltip class=\"flex\" style=\"height:30px\" text=\"Edit data selected\"><vs-button @click=\"showPopUp(modeData.edit)\" :color=\"iconAction.editColor\" type=\"flat\"><img border=\"0\" width=\"20\" height=\"20\" src=\"/images/icons/edit_icon24.png\"/></vs-button></vx-tooltip>\n                </div>\n            </div>\n            ",
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

/***/ "./resources/js/src/views/pages/reservations/components/reservation-status.js":
/*!************************************************************************************!*\
  !*** ./resources/js/src/views/pages/reservations/components/reservation-status.js ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (vue__WEBPACK_IMPORTED_MODULE_0___default.a.extend({
  template: "\n    <div style=\"margin-top:2.5px\" class=\"reservation-status-grid\">\n    <vs-chip v-if=\"data == 'W'\" color=\"#004481\">\n        Wait List\n    </vs-chip>\n    <vs-chip v-else-if=\"data == 'I'\" color=\"#2494C6\">\n        Checked In\n    </vs-chip>\n    <vs-chip v-else-if=\"data == 'O'\" color=\"#FF83A5\">\n        Checked Out\n    </vs-chip>\n    <vs-chip v-else-if=\"data == 'N'\" color=\"#00C1B0\">\n        Reserved\n    </vs-chip>\n    <vs-chip v-else-if=\"data == 'C'\" color=\"#FF002A\">\n        Canceled\n    </vs-chip>\n    <vs-chip v-else-if=\"data == 'S'\" color=\"#FF8A00\">\n        No Show\n    </vs-chip>\n    <vs-chip v-else-if=\"data == 'V'\" color=\"#C62583\">\n        Void\n    </vs-chip>\n\n    </div>\n         ",
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
      arrival: this.params.data.DateArrival,
      departure: this.params.data.DateDeparture
    };
  },
  methods: {}
}));

/***/ }),

/***/ "./resources/js/src/views/pages/reservations/components/table/GroupCheckInTable.vue":
/*!******************************************************************************************!*\
  !*** ./resources/js/src/views/pages/reservations/components/table/GroupCheckInTable.vue ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _GroupCheckInTable_vue_vue_type_template_id_79aef209___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GroupCheckInTable.vue?vue&type=template&id=79aef209& */ "./resources/js/src/views/pages/reservations/components/table/GroupCheckInTable.vue?vue&type=template&id=79aef209&");
/* harmony import */ var _GroupCheckInTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GroupCheckInTable.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/reservations/components/table/GroupCheckInTable.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _GroupCheckInTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _GroupCheckInTable_vue_vue_type_template_id_79aef209___WEBPACK_IMPORTED_MODULE_0__["render"],
  _GroupCheckInTable_vue_vue_type_template_id_79aef209___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/reservations/components/table/GroupCheckInTable.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/reservations/components/table/GroupCheckInTable.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/reservations/components/table/GroupCheckInTable.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GroupCheckInTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./GroupCheckInTable.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/reservations/components/table/GroupCheckInTable.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GroupCheckInTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/reservations/components/table/GroupCheckInTable.vue?vue&type=template&id=79aef209&":
/*!*************************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/reservations/components/table/GroupCheckInTable.vue?vue&type=template&id=79aef209& ***!
  \*************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GroupCheckInTable_vue_vue_type_template_id_79aef209___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./GroupCheckInTable.vue?vue&type=template&id=79aef209& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/reservations/components/table/GroupCheckInTable.vue?vue&type=template&id=79aef209&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GroupCheckInTable_vue_vue_type_template_id_79aef209___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GroupCheckInTable_vue_vue_type_template_id_79aef209___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);