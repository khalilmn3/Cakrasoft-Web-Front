(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[9],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/components/autocomplete.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/components/autocomplete.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var debounce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! debounce */ "./node_modules/debounce/index.js");
/* harmony import */ var debounce__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(debounce__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _sass_vuexy_components_suggestions_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @sass/vuexy/components/suggestions.scss */ "./resources/sass/vuexy/components/suggestions.scss");
/* harmony import */ var _sass_vuexy_components_suggestions_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_sass_vuexy_components_suggestions_scss__WEBPACK_IMPORTED_MODULE_1__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  inheritAttributes: true,
  props: {
    options: {
      type: Object,
      "default": {}
    },
    onInputChange: {
      type: Function,
      required: true
    },
    onItemSelected: {
      type: Function
    },
    value: {
      type: String,
      required: true
    }
  },
  data: function data() {
    var defaultOptions = {
      debounce: 0,
      placeholder: '',
      inputClass: 'input'
    };
    var extendedOptions = Object.assign({}, defaultOptions, this.options);
    return {
      extendedOptions: extendedOptions,
      query: this.value,
      lastSetQuery: null,
      items: [],
      activeItemIndex: -1,
      showItems: false
    };
  },
  beforeMount: function beforeMount() {
    if (this.extendedOptions.debounce !== 0) {
      this.onQueryChanged = debounce__WEBPACK_IMPORTED_MODULE_0___default()(this.onQueryChanged, this.extendedOptions.debounce);
    }
  },
  watch: {
    'query': function query(newValue, oldValue) {
      if (newValue === this.lastSetQuery) {
        this.lastSetQuery = null;
        return;
      }

      this.onQueryChanged(newValue);
      this.$emit('input', newValue);
    },
    'value': function value(newValue, oldValue) {
      this.setInputQuery(newValue);
    }
  },
  methods: {
    onItemSelectedDefault: function onItemSelectedDefault(item) {
      if (typeof item === 'string') {
        this.$emit('input', item);
        this.setInputQuery(item);
        this.showItems = false; // console.log('change value')
      }
    },
    hideItems: function hideItems() {
      var _this = this;

      setTimeout(function () {
        _this.showItems = false;
      }, 300);
    },
    showResults: function showResults() {
      this.showItems = true;
    },
    setInputQuery: function setInputQuery(value) {
      this.lastSetQuery = value;
      this.query = value;
    },
    onKeyDown: function onKeyDown(e) {
      this.$emit('keyDown', e.keyCode);

      switch (e.keyCode) {
        case 40:
          this.highlightItem('down');
          e.preventDefault();
          break;

        case 38:
          this.highlightItem('up');
          e.preventDefault();
          break;

        case 13:
          this.selectItem();
          e.preventDefault();
          break;

        case 27:
          this.showItems = false;
          e.preventDefault();
          break;

        default:
          return true;
      }
    },
    selectItem: function selectItem(index) {
      var item = null;

      if (typeof index === 'undefined') {
        if (this.activeItemIndex === -1) {
          return;
        }

        item = this.items[this.activeItemIndex];
      } else {
        item = this.items[index];
      }

      if (!item) {
        return;
      }

      if (this.onItemSelected) {
        this.onItemSelected(item);
      } else {
        this.onItemSelectedDefault(item);
      }

      this.hideItems();
    },
    highlightItem: function highlightItem(direction) {
      var _this2 = this;

      if (this.items.length === 0) {
        return;
      }

      var selectedIndex = this.items.findIndex(function (item, index) {
        return index === _this2.activeItemIndex;
      });

      if (selectedIndex === -1) {
        // nothing selected
        if (direction === 'down') {
          selectedIndex = 0;
        } else {
          selectedIndex = this.items.length - 1;
        }
      } else {
        this.activeIndexItem = 0;

        if (direction === 'down') {
          selectedIndex++;

          if (selectedIndex === this.items.length) {
            selectedIndex = 0;
          }
        } else {
          selectedIndex--;

          if (selectedIndex < 0) {
            selectedIndex = this.items.length - 1;
          }
        }
      }

      this.activeItemIndex = selectedIndex;
    },
    setItems: function setItems(items) {
      this.items = items;
      this.activeItemIndex = -1;
      this.showItems = true;
    },
    onQueryChanged: function onQueryChanged(value) {
      var _this3 = this;

      var result = this.onInputChange(value);
      this.items = [];

      if (typeof result === 'undefined' || typeof result === 'boolean' || result === null) {
        return;
      }

      if (result instanceof Array) {
        this.setItems(result);
      } else if (typeof result.then === 'function') {
        result.then(function (items) {
          _this3.setItems(items);
        });
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/components/registrationForm/RegistrationForm.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/components/registrationForm/RegistrationForm.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _sass_vuexy_pages_form_deposit_charge_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @sass/vuexy/pages/form_deposit_charge.scss */ "./resources/sass/vuexy/pages/form_deposit_charge.scss");
/* harmony import */ var _sass_vuexy_pages_form_deposit_charge_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_sass_vuexy_pages_form_deposit_charge_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_request_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/utils/request.js */ "./resources/js/src/utils/request.js");
/* harmony import */ var _utils_general_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/utils/general.js */ "./resources/js/src/utils/general.js");
/* harmony import */ var ag_grid_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ag-grid-vue */ "./node_modules/ag-grid-vue/main.js");
/* harmony import */ var ag_grid_vue__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ag_grid_vue__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_action_grid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/action_grid */ "./resources/js/src/views/pages/components/registrationForm/components/action_grid.js");
/* harmony import */ var _components_FilterHeader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/FilterHeader */ "./resources/js/src/views/pages/components/registrationForm/components/FilterHeader.vue");
/* harmony import */ var _components_NavigationHeader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/NavigationHeader */ "./resources/js/src/views/pages/components/registrationForm/components/NavigationHeader.vue");
/* harmony import */ var _views_pages_components_Tracking_vue__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/views/pages/components/Tracking.vue */ "./resources/js/src/views/pages/components/Tracking.vue");
/* harmony import */ var _tab_components_ScheduledRate_vue__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./tab-components/ScheduledRate.vue */ "./resources/js/src/views/pages/components/registrationForm/tab-components/ScheduledRate.vue");
/* harmony import */ var _tab_components_ExtraCharge_vue__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./tab-components/ExtraCharge.vue */ "./resources/js/src/views/pages/components/registrationForm/tab-components/ExtraCharge.vue");
/* harmony import */ var _tab_components_deposit_Deposit_vue__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./tab-components/deposit/Deposit.vue */ "./resources/js/src/views/pages/components/registrationForm/tab-components/deposit/Deposit.vue");
/* harmony import */ var _tab_components_SwitchRoom_vue__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./tab-components/SwitchRoom.vue */ "./resources/js/src/views/pages/components/registrationForm/tab-components/SwitchRoom.vue");
/* harmony import */ var _views_pages_components_report_Template_vue__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @/views/pages/components/report/Template.vue */ "./resources/js/src/views/pages/components/report/Template.vue");
/* harmony import */ var _utils_dialog_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @/utils/dialog.js */ "./resources/js/src/utils/dialog.js");
/* harmony import */ var _utils_alert_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @/utils/alert.js */ "./resources/js/src/utils/alert.js");
/* harmony import */ var _utils_formConfig_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @/utils/formConfig.js */ "./resources/js/src/utils/formConfig.js");
/* harmony import */ var _views_pages_components_Credential__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @/views/pages/components/Credential */ "./resources/js/src/views/pages/components/Credential.vue");
/* harmony import */ var vue2_datepicker__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! vue2-datepicker */ "./node_modules/vue2-datepicker/index.esm.js");
/* harmony import */ var _sass_vuexy_components_datepicker_scss__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @sass/vuexy/components/datepicker.scss */ "./resources/sass/vuexy/components/datepicker.scss");
/* harmony import */ var _sass_vuexy_components_datepicker_scss__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_sass_vuexy_components_datepicker_scss__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _views_pages_components_autocomplete_vue__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @/views/pages/components/autocomplete.vue */ "./resources/js/src/views/pages/components/autocomplete.vue");
/* harmony import */ var vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! vue-perfect-scrollbar */ "./node_modules/vue-perfect-scrollbar/dist/index.js");
/* harmony import */ var vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _views_pages_components_Number__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @/views/pages/components/Number */ "./resources/js/src/views/pages/components/Number.vue");
/* harmony import */ var _views_pages_components_checklist_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @/views/pages/components/checklist.js */ "./resources/js/src/views/pages/components/checklist.js");
/* harmony import */ var _views_pages_components_lock_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @/views/pages/components/lock.js */ "./resources/js/src/views/pages/components/lock.js");
/* harmony import */ var _components_source_status_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/source-status.js */ "./resources/js/src/views/pages/components/registrationForm/components/source-status.js");
/* harmony import */ var _views_pages_components_comp_hu_icon_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @/views/pages/components/comp_hu_icon.js */ "./resources/js/src/views/pages/components/comp_hu_icon.js");
/* harmony import */ var _components_incognito_icon_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/incognito_icon.js */ "./resources/js/src/views/pages/components/registrationForm/components/incognito_icon.js");
/* harmony import */ var _components_icon_IconHU__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @/components/icon/IconHU */ "./resources/js/src/components/icon/IconHU.vue");
/* harmony import */ var _components_icon_IconComp__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @/components/icon/IconComp */ "./resources/js/src/components/icon/IconComp.vue");
/* harmony import */ var _utils_format_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @/utils/format.js */ "./resources/js/src/utils/format.js");
/* harmony import */ var _api_guestinhouse_guestInHouse__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @/api/guestinhouse/guestInHouse */ "./resources/js/src/api/guestinhouse/guestInHouse.js");
/* harmony import */ var _api_guestinhouse_scheduledRate__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @/api/guestinhouse/scheduledRate */ "./resources/js/src/api/guestinhouse/scheduledRate.js");
/* harmony import */ var _api_reservation_scheduledRate__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @/api/reservation/scheduledRate */ "./resources/js/src/api/reservation/scheduledRate.js");
/* harmony import */ var _api_guestinhouse_extraCharge__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @/api/guestinhouse/extraCharge */ "./resources/js/src/api/guestinhouse/extraCharge.js");
/* harmony import */ var _api_reservation_extraCharge__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @/api/reservation/extraCharge */ "./resources/js/src/api/reservation/extraCharge.js");
/* harmony import */ var _api_guestProfile__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @/api/guestProfile */ "./resources/js/src/api/guestProfile.js");
/* harmony import */ var _api_transaction__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @/api/transaction */ "./resources/js/src/api/transaction.js");
/* harmony import */ var _api_reservation_reservation__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @/api/reservation/reservation */ "./resources/js/src/api/reservation/reservation.js");
/* harmony import */ var _api_reservation_deposit__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @/api/reservation/deposit */ "./resources/js/src/api/reservation/deposit.js");


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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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










var depositResource = new _api_reservation_deposit__WEBPACK_IMPORTED_MODULE_39__["default"]();
var reservationResource = new _api_reservation_reservation__WEBPACK_IMPORTED_MODULE_38__["default"]();
var transactionResource = new _api_transaction__WEBPACK_IMPORTED_MODULE_37__["default"]();
var guestProfileResource = new _api_guestProfile__WEBPACK_IMPORTED_MODULE_36__["default"]();
var guestInHouseResource = new _api_guestinhouse_guestInHouse__WEBPACK_IMPORTED_MODULE_31__["default"]();
var ghScheduledRateResource = new _api_guestinhouse_scheduledRate__WEBPACK_IMPORTED_MODULE_32__["default"]();
var rvScheduledRateResource = new _api_reservation_scheduledRate__WEBPACK_IMPORTED_MODULE_33__["default"]();
var ghExtraChargeResource = new _api_guestinhouse_extraCharge__WEBPACK_IMPORTED_MODULE_34__["default"]();
var rvExtraChargeResource = new _api_reservation_extraCharge__WEBPACK_IMPORTED_MODULE_35__["default"](); // <!------------------end additional element---------------------->

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'RegistrationForm',
  props: ['titleForm', 'routeApi', 'mainTableName', 'isDayendClose', 'isReservation', 'isGuestInHouse', 'isFromAvailability'],
  components: {
    'ag-grid-vue': ag_grid_vue__WEBPACK_IMPORTED_MODULE_4__["AgGridVue"],
    FilterHeader: _components_FilterHeader__WEBPACK_IMPORTED_MODULE_6__["default"],
    NavigationHeader: _components_NavigationHeader__WEBPACK_IMPORTED_MODULE_7__["default"],
    VuePerfectScrollbar: vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_21___default.a,
    tracking: _views_pages_components_Tracking_vue__WEBPACK_IMPORTED_MODULE_8__["default"],
    Suggestions: _views_pages_components_autocomplete_vue__WEBPACK_IMPORTED_MODULE_20__["default"],
    InputNumber: _views_pages_components_Number__WEBPACK_IMPORTED_MODULE_22__["default"],
    ScheduledRate: _tab_components_ScheduledRate_vue__WEBPACK_IMPORTED_MODULE_9__["default"],
    ExtraCharge: _tab_components_ExtraCharge_vue__WEBPACK_IMPORTED_MODULE_10__["default"],
    Deposit: _tab_components_deposit_Deposit_vue__WEBPACK_IMPORTED_MODULE_11__["default"],
    Report: _views_pages_components_report_Template_vue__WEBPACK_IMPORTED_MODULE_13__["default"],
    SwitchRoom: _tab_components_SwitchRoom_vue__WEBPACK_IMPORTED_MODULE_12__["default"],
    DatePicker: vue2_datepicker__WEBPACK_IMPORTED_MODULE_18__["default"],
    Credential: _views_pages_components_Credential__WEBPACK_IMPORTED_MODULE_17__["default"],
    'icon-hu': _components_icon_IconHU__WEBPACK_IMPORTED_MODULE_28__["default"],
    'icon-comp': _components_icon_IconComp__WEBPACK_IMPORTED_MODULE_29__["default"]
  },
  data: function data() {
    return {
      //LogUser
      logUserDataB4: [],
      logUserDataAfter: [],
      //form config
      rowMarginBottom: _utils_formConfig_js__WEBPACK_IMPORTED_MODULE_16__["formConfig"].rowMarginBottom,
      //query data search
      search: {
        limit: 1000,
        walked_in: true,
        checked_in: true,
        departure: true
      },
      mWalkedIn: true,
      mCheckedIn: true,
      mDeparture: true,
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
      modalPreventClose: false,
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
      modalChildTitle: '',
      accounts: [],
      dataLookupDeposit: '',
      changeRate: false,
      rate: {
        weekend: 0,
        weekday: 0
      },
      roomRateCode: '',
      account: null,
      nights: 1,
      discount: 0,
      availableRoom: 0,
      resetOnOptionsChangeState: false,
      resetOnOptionsChangeCity: false,
      resetOnOptionsChangeRoomNumber: false,
      roomNumber: [],
      folioNumber: '',
      reservationNumber: '',
      roomRates: [],
      bedTypes: [],
      city: [],
      guestProfile: {},
      state: [],
      totalGuestDeposit: [{
        credit: 0,
        debit: 0
      }],
      balanceDeposit: 0,
      resvStatus: '',
      readyRoom: true,
      weekday_rate_discount: 0,
      weekend_rate_discount: 0,
      guestProfileOptions: {
        placeholder: this.$t('reservation.fullname') + ' ' + this.$t('table.required')
      },
      modalPaymentOption: false,
      modalScheduledRate: false,
      sidebarOption: false,
      titleModalScheduledRate: '',
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
      guestDeposit: [],
      //validation scope//
      scope1: 'stayInformation',
      showTimeRangePanel: false,
      activeTab: 1,
      resetOptionsChange: false,
      resetOptionsChangeMoveRoom: false,
      //title popup//
      titlePopup: '',
      //------CREDENTIAL-------//
      activeCredentialPrompt: false,
      activeCredentialReasonPrompt: false,
      isCredential: false,
      isReason: false,
      credentialTitle: '',
      credential: {
        user: '',
        pass: ''
      },
      specialAccessType: null,
      showCorrectionDeposit: false,
      showVoidDeposit: false,
      correctionPrompt: false,
      newCorrectionValue: 0,
      oldCorrectionValue: 0,
      reasonTypeValue: '',
      paramsData: '',
      idLog: '',
      balance: 0,
      btnMainSaveDisabled: false,
      btnDepositSaveDisabled: false,
      btnScheduledSaveDisabled: false,
      btnExtraChargeSaveDisabled: false,
      rateB4: {},
      //Temp Variable From Avaiblity on button-main-save
      isReservationFromAvaibility: true,
      roomNumberB4: null,
      roomNumberEditB4: null,
      isRoomExist: false,
      isCanEnabledSaveBtnMain: true //------------------end need setting manual-----------------//

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
      enableRowGroup: false,
      cellRenderer: 'actionGrid',
      colId: 'params',
      width: 100
    }, {
      headerName: 'L',
      field: 'is_lock',
      width: 30,
      cellStyle: {
        textAlign: 'center'
      },
      cellRenderer: 'iconLockRenderer'
    }, {
      headerName: 'GS',
      field: 'compliment_hu',
      width: 40,
      cellStyle: {
        textAlign: 'center'
      },
      cellRenderer: 'iconCompHuRenderer'
    }, {
      headerName: 'IC',
      field: 'is_incognito',
      width: 40,
      cellStyle: {
        textAlign: 'center'
      },
      cellRenderer: 'iconIncognitoRenderer'
    }, {
      headerName: 'Full Name',
      field: 'full_name',
      width: 230
    }, {
      headerName: 'Number',
      field: 'folio_number',
      width: 90
    }, {
      headerName: 'Room',
      field: 'room_number',
      width: 75
    }, {
      headerName: 'Arrival',
      field: 'date_arrival',
      width: 100
    }, {
      headerName: 'Departure',
      field: 'date_departure',
      width: 100
    }, {
      headerName: 'Room Rate',
      field: 'room_rate',
      width: 180
    }, {
      headerName: 'Status',
      width: 110,
      field: 'folio_number',
      cellStyle: {
        textAlign: 'center'
      },
      cellRenderer: 'iconStatusRenderer'
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
      valueFormatter: _utils_format_js__WEBPACK_IMPORTED_MODULE_30__["formatNumber"]
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
      headerName: 'Last Update',
      field: 'user_id',
      width: 110
    }]; //------------------end need setting manual for column table-----------------//

    this.context = {
      componentParent: this
    };
    this.frameworkComponents = {
      actionGrid: _components_action_grid__WEBPACK_IMPORTED_MODULE_5__["default"],
      iconLockRenderer: _views_pages_components_lock_js__WEBPACK_IMPORTED_MODULE_24__["default"],
      iconStatusRenderer: _components_source_status_js__WEBPACK_IMPORTED_MODULE_25__["default"],
      iconCompHuRenderer: _views_pages_components_comp_hu_icon_js__WEBPACK_IMPORTED_MODULE_26__["default"],
      iconIncognitoRenderer: _components_incognito_icon_js__WEBPACK_IMPORTED_MODULE_27__["default"]
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
    precheck: function precheck() {
      this.$emit('precheck');
    },
    //------------------need setting manual for crud-----------------//
    //------------------ Guest In House CRUD------------------//
    getGuestInHouseList: function () {
      var _getGuestInHouseList = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(search) {
        var _ref, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.search = search;
                _context.prev = 1;
                _context.next = 4;
                return guestInHouseResource.list(search);

              case 4:
                _ref = _context.sent;
                data = _ref.data;
                this.rowData = data;
                this.$vs.loading.close('#layout--main>.con-vs-loading');
                _context.next = 14;
                break;

              case 10:
                _context.prev = 10;
                _context.t0 = _context["catch"](1);
                this.$vs.loading.close('#layout--main>.con-vs-loading');
                _utils_alert_js__WEBPACK_IMPORTED_MODULE_15__["default"].errorFetchDataAlert(_context.t0);

              case 14:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[1, 10]]);
      }));

      function getGuestInHouseList(_x) {
        return _getGuestInHouseList.apply(this, arguments);
      }

      return getGuestInHouseList;
    }(),
    editGuestInHouse: function () {
      var _editGuestInHouse = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(id) {
        var _ref2, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return guestInHouseResource.get(id.folio_number);

              case 3:
                _ref2 = _context2.sent;
                data = _ref2.data;
                _context2.t0 = this;
                _context2.next = 8;
                return data.list;

              case 8:
                _context2.t1 = _context2.sent;

                _context2.t0.setDataBeforeEdit.call(_context2.t0, _context2.t1);

                _context2.next = 12;
                return data.room_rate;

              case 12:
                this.roomRates = _context2.sent;
                _context2.next = 15;
                return data.bed_type;

              case 15:
                this.bedTypes = _context2.sent;
                this.vModel = data.list;
                this.setRateBefore();
                this.roomNumberEditB4 = this.vModel.room_number;
                this.titlePopup = 'Update Guest In House - Folio :' + id.folio_number;
                this.$vs.loading.close('#layout--main>.con-vs-loading');
                _context2.next = 27;
                break;

              case 23:
                _context2.prev = 23;
                _context2.t2 = _context2["catch"](0);
                this.$vs.loading.close('#layout--main>.con-vs-loading');
                _utils_alert_js__WEBPACK_IMPORTED_MODULE_15__["default"].errorFetchDataAlert(_context2.t2);

              case 27:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[0, 23]]);
      }));

      function editGuestInHouse(_x2) {
        return _editGuestInHouse.apply(this, arguments);
      }

      return editGuestInHouse;
    }(),
    insertLogUserUpdateGuestInHouse: function () {
      var _insertLogUserUpdateGuestInHouse = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(dataAfter) {
        var nightAfter, _ref3, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                this.logUserDataAfter = dataAfter;
                nightAfter = Object(_utils_general_js__WEBPACK_IMPORTED_MODULE_3__["dateDiff"])(dataAfter.arrival, dataAfter.departure);
                _context3.next = 5;
                return guestInHouseResource.logUserUpdateGuestInHouse({
                  dataB4: this.logUserDataB4[0],
                  dataAfter: this.logUserDataAfter,
                  userId: this.userInfo.code,
                  nightAfter: nightAfter
                });

              case 5:
                _ref3 = _context3.sent;
                data = _ref3.data;
                _context3.next = 11;
                break;

              case 9:
                _context3.prev = 9;
                _context3.t0 = _context3["catch"](0);

              case 11:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[0, 9]]);
      }));

      function insertLogUserUpdateGuestInHouse(_x3) {
        return _insertLogUserUpdateGuestInHouse.apply(this, arguments);
      }

      return insertLogUserUpdateGuestInHouse;
    }(),
    updateGuestInHouse: function () {
      var _updateGuestInHouse = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4(params) {
        var _ref4, data, message;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.prev = 0;
                _context4.next = 3;
                return guestInHouseResource.update(params);

              case 3:
                _ref4 = _context4.sent;
                data = _ref4.data;

                if (!(data == 0)) {
                  _context4.next = 12;
                  break;
                }

                _context4.next = 8;
                return this.insertLogUserUpdateGuestInHouse(params);

              case 8:
                this.modalMain = false;
                _utils_alert_js__WEBPACK_IMPORTED_MODULE_15__["default"].acceptAlertSucces();
                _context4.next = 13;
                break;

              case 12:
                if (data > 0) {
                  _utils_dialog_js__WEBPACK_IMPORTED_MODULE_14__["default"].information(this.$t('message.statusInsertUpdateGuestInHouse.' + data));
                }

              case 13:
                if (this.isDayendClose) {
                  this.precheck();
                }

                this.btnMainSaveDisabled = false;
                this.$vs.loading.close('#button-save-main-form>.con-vs-loading');
                _context4.next = 25;
                break;

              case 18:
                _context4.prev = 18;
                _context4.t0 = _context4["catch"](0);
                this.btnMainSaveDisabled = false;
                message = _context4.t0;
                this.dbErrors = message == undefined ? '' : message;
                this.$vs.loading.close('#button-save-main-form>.con-vs-loading');
                _utils_alert_js__WEBPACK_IMPORTED_MODULE_15__["default"].errorSaveDataAlert(message);

              case 25:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this, [[0, 18]]);
      }));

      function updateGuestInHouse(_x4) {
        return _updateGuestInHouse.apply(this, arguments);
      }

      return updateGuestInHouse;
    }(),
    insertGuestInHouse: function () {
      var _insertGuestInHouse = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5(resource) {
        var _ref5, data, message;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.prev = 0;
                _context5.next = 3;
                return guestInHouseResource.store(resource);

              case 3:
                _ref5 = _context5.sent;
                data = _ref5.data;

                if (data == 0) {
                  this.resetData();
                  this.modalMain = false;
                  _utils_alert_js__WEBPACK_IMPORTED_MODULE_15__["default"].acceptAlertSucces();
                } else if (data > 0) {
                  _utils_dialog_js__WEBPACK_IMPORTED_MODULE_14__["default"].roomNotAvailable(this.$t('message.statusInsertUpdateGuestInHouse.' + data));
                }

                this.btnMainSaveDisabled = false;
                this.$vs.loading.close('#button-save-main-form>.con-vs-loading');
                _context5.next = 17;
                break;

              case 10:
                _context5.prev = 10;
                _context5.t0 = _context5["catch"](0);
                this.btnMainSaveDisabled = false;
                message = _context5.t0;
                this.dbErrors = message == undefined ? '' : message;
                this.$vs.loading.close('#button-save-main-form>.con-vs-loading');
                _utils_alert_js__WEBPACK_IMPORTED_MODULE_15__["default"].errorSaveDataAlert(message);

              case 17:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this, [[0, 10]]);
      }));

      function insertGuestInHouse(_x5) {
        return _insertGuestInHouse.apply(this, arguments);
      }

      return insertGuestInHouse;
    }(),
    trackingData: function () {
      var _trackingData = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee6(id) {
        var _this2 = this;

        var _ref6, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.prev = 0;
                _context6.next = 3;
                return guestInHouseResource.log(id.id_log);

              case 3:
                _ref6 = _context6.sent;
                data = _ref6.data;
                this.dataTracking = data.modelGrid;
                setTimeout(function () {
                  _this2.$vs.loading.close('#layout--main>.con-vs-loading');
                }, 100);
                _context6.next = 13;
                break;

              case 9:
                _context6.prev = 9;
                _context6.t0 = _context6["catch"](0);
                this.$vs.loading.close('#layout--main>.con-vs-loading');
                _utils_alert_js__WEBPACK_IMPORTED_MODULE_15__["default"].errorFetchDataAlert(_context6.t0);

              case 13:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this, [[0, 9]]);
      }));

      function trackingData(_x6) {
        return _trackingData.apply(this, arguments);
      }

      return trackingData;
    }(),
    refreshData: function refreshData(search) {
      this.$emit('refreshData', search);
    },
    resetData: function resetData() {
      this.vModel = {
        number: 0,
        arrival: Object(_utils_format_js__WEBPACK_IMPORTED_MODULE_30__["formatDateTimeDatabase"])(this.auditDate + ' ' + this.checkInTime),
        departure: this.departureResv,
        adult: 1,
        child: 0,
        full_name: '',
        commission_value: 0,
        room_type_code: this.dvRoomType,
        weekday_rate: 0,
        weekend_rate: 0,
        discount_percent: '-1',
        payment_type_code: this.dvPaymentType,
        market_code: this.dvMarket,
        discount: 0,
        is_male: '-1',
        birth_date: '',
        is_incognito: false,
        audit_date: this.auditDate,
        folio_number: '',
        reservation_number: '',
        balance: 0,
        user_id: this.userInfo.code
      };
      this.availableRoom = 0;
      this.resvStatus = '';
      this.nights = 1;
      this.roomRateCode = '';
      this.weekday_rate_discount = 0;
      this.weekend_rate_discount = 0;
      this.dbErrors = {};
      this.dataTracking = null;
      this.modalScheduledRate = false;
      this.resetOnOptionsChangeState = false;
      this.resetOnOptionsChangeCity = false;
      this.resetOnOptionsChangeRoomNumber = false;
      this.resetOptionsChange = false;
      this.guestDeposit = null;
      this.resetOnChange = false;
      this.btnMainSaveDisabled = false;
      this.readyRoom = this.isReservation || this.isFromAvailability && this.isReservationFromAvaibility ? false : this.modeDataValue == this.modeData.insert ? true : false;
      this.resetOptionsChangeMoveRoom = false; //prevent reloading input select change Move Room

      this.$validator.reset();
    },
    setNewReservationWalkIn: function setNewReservationWalkIn(dataParams) {
      if (this.isReservationFromAvaibility) {
        this.vModel.arrival = dataParams.arrival;
        this.vModel.departure = dataParams.departure;
      }

      this.vModel.room_type_code = dataParams.room_type_code;
      this.getRoomRate();
      this.vModel.bed_type_code = dataParams.bed_type_code;
      this.vModel.room_number = dataParams.room_number;
      this.getRoomNumber('', this.vModel);
    },
    showForm: function () {
      var _showForm = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee7(idData, modeData, isReservation, reservationStatus) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                this.resetData();
                this.isReservationFromAvaibility = isReservation || this.isReservation;
                this.resvStatus = reservationStatus;
                this.idData = idData;
                this.modeDataValue = modeData;
                this.reservationNumber = idData.reservation_number;
                this.$vs.loading({
                  container: '#layout--main',
                  scale: this.scaleLoadingMainLayout
                });
                this.disabledTab(modeData);

                if (!(isReservation || this.isReservation)) {
                  _context7.next = 45;
                  break;
                }

                if (!(modeData === this.modeData.edit)) {
                  _context7.next = 31;
                  break;
                }

                this.resetOnChange = false;
                this.getDataLookUp();
                this.getState(true);
                this.titlePopup = this.resvStatus == this.reservationStatus.checkIn ? 'Check In Reservation - Number: ' + this.idData.reservation_number : 'Update Reservation - Number: ' + this.idData.reservation_number;

                if (!(!this.isFromAvailability || !this.modeData.insert)) {
                  _context7.next = 24;
                  break;
                }

                _context7.next = 17;
                return this.editReservation(this.idData.reservation_number);

              case 17:
                this.setDiscountRate();
                this.getTotalDays();
                _context7.next = 21;
                return this.getRoomNumber('bed_type', this.vModel);

              case 21:
                this.getExtraCharge();
                this.getScheduledRate();
                this.getDepositList();

              case 24:
                this.vModel.flight_arrival = this.vModel.flight_arrival == '0000-00-00 00:00:00' ? '' : this.vModel.flight_arrival;
                this.vModel.flight_departure = this.vModel.flight_departure == '0000-00-00 00:00:00' ? '' : this.vModel.flight_departure;
                this.vModel.birth_date = this.vModel.birth_date == '0000-00-00' ? '' : this.vModel.birth_date;
                this.$vs.loading.close('#layout--main>.con-vs-loading');
                this.modalMain = true;
                _context7.next = 43;
                break;

              case 31:
                if (!(modeData === this.modeData.insert)) {
                  _context7.next = 42;
                  break;
                }

                this.titlePopup = 'Insert Reservation';
                this.getDataLookUp();
                _context7.next = 36;
                return this.getRoomNumber('', this.vModel);

              case 36:
                this.activeTab = 1;
                this.$vs.loading.close('#layout--main>.con-vs-loading');
                this.modalMain = true;

                if (this.isFromAvailability) {
                  this.setNewReservationWalkIn(this.idData);
                }

                _context7.next = 43;
                break;

              case 42:
                if (modeData === this.modeData.tracking) {
                  this.trackingData(idData);
                }

              case 43:
                _context7.next = 82;
                break;

              case 45:
                if (!(modeData === this.modeData.edit)) {
                  _context7.next = 68;
                  break;
                }

                this.folioNumber = idData.folio_number;
                this.getDataLookUp();
                _context7.next = 50;
                return this.editGuestInHouse(idData);

              case 50:
                this.vModel.flight_arrival = this.vModel.flight_arrival == '0000-00-00 00:00:00' ? '' : this.vModel.flight_arrival;
                this.vModel.flight_departure = this.vModel.flight_departure == '0000-00-00 00:00:00' ? '' : this.vModel.flight_departure;
                this.vModel.birth_date = this.vModel.birth_date == '0000-00-00' ? '' : this.vModel.birth_date;
                this.readyRoom = false;

                if (!(this.vModel.status_code !== this.mFolioStatus.open)) {
                  _context7.next = 57;
                  break;
                }

                this.refreshData(this.search);
                return _context7.abrupt("return");

              case 57:
                this.getState(true);
                _context7.next = 60;
                return this.getRoomNumber('bed_type', this.vModel);

              case 60:
                this.setDiscountRate();
                this.getTotalDays();
                this.getScheduledRate();
                this.getExtraCharge();
                this.$vs.loading.close('#layout--main>.con-vs-loading');
                this.modalMain = true;
                _context7.next = 82;
                break;

              case 68:
                if (!(modeData === this.modeData.insert)) {
                  _context7.next = 79;
                  break;
                }

                this.titlePopup = 'Insert Walk In Guest';
                this.activeTab = 1;
                this.getDataLookUp();
                _context7.next = 74;
                return this.getRoomNumber('', this.vModel);

              case 74:
                if (this.isFromAvailability) {
                  this.readyRoom = true;
                  this.setNewReservationWalkIn(this.idData);
                }

                this.$vs.loading.close('#layout--main>.con-vs-loading');
                this.modalMain = true;
                _context7.next = 82;
                break;

              case 79:
                if (!(modeData === this.modeData.tracking)) {
                  _context7.next = 82;
                  break;
                }

                _context7.next = 82;
                return this.trackingData(idData);

              case 82:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      function showForm(_x7, _x8, _x9, _x10) {
        return _showForm.apply(this, arguments);
      }

      return showForm;
    }(),
    disabledTab: function disabledTab(mode) {
      var _this3 = this;

      setTimeout(function () {
        if (document.getElementById('stayInformation') != undefined) {
          // document.getElementById('extraCharge').disabled = mode == this.modeData.insert;
          document.getElementById('scheduledRate').disabled = mode == _this3.modeData.insert;
          document.getElementById('stayInformation').click();

          if (document.getElementById('deposit') != undefined) {
            document.getElementById('deposit').disabled = mode == _this3.modeData.insert;
          }
        }
      }, 100);
    },
    //------------------ END Guest In House CRUD------------------//
    //------------------ RESERVATION CRUD------------------//
    getReservationList: function () {
      var _getReservationList = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee8(search) {
        var _ref7, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                _context8.prev = 0;
                _context8.next = 3;
                return reservationResource.list(search);

              case 3:
                _ref7 = _context8.sent;
                data = _ref7.data;
                this.rowData = data;
                this.$vs.loading.close('#layout--main>.con-vs-loading');
                _context8.next = 13;
                break;

              case 9:
                _context8.prev = 9;
                _context8.t0 = _context8["catch"](0);
                _utils_alert_js__WEBPACK_IMPORTED_MODULE_15__["default"].errorFetchDataAlert(_context8.t0);
                this.$vs.loading.close('#layout--main>.con-vs-loading');

              case 13:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, this, [[0, 9]]);
      }));

      function getReservationList(_x11) {
        return _getReservationList.apply(this, arguments);
      }

      return getReservationList;
    }(),
    setDataBeforeEdit: function setDataBeforeEdit(dataB4) {
      var night = Object(_utils_general_js__WEBPACK_IMPORTED_MODULE_3__["dateDiff"])(dataB4.arrival, dataB4.departure);
      this.logUserDataB4 = [{
        //Stay Information
        arrival: dataB4.arrival,
        night: night,
        departure: dataB4.departure,
        adult: dataB4.adult,
        child: dataB4.child,
        room_type_code: dataB4.room_type_code,
        room_number: dataB4.room_number,
        room_rate_code: dataB4.room_rate_code,
        business_source_code: dataB4.business_source_code,
        commission_type_code: dataB4.commission_type_code,
        commission_value: dataB4.commission_value,
        weekday_rate: dataB4.weekday_rate,
        weekend_rate: dataB4.weekend_rate,
        discount: dataB4.discount,
        payment_type_code: dataB4.payment_type_code,
        market_code: dataB4.market_code,
        bill_instruction: dataB4.bill_instruction,
        currency_code: dataB4.currency_code,
        exchange_rate: dataB4.exchange_rate,
        //personal information
        title_code: dataB4.title_code,
        full_name: dataB4.full_name,
        reservation_by: dataB4.reservation_by,
        street: dataB4.street,
        city_code: dataB4.city_code,
        country_code: dataB4.country_code,
        state_code: dataB4.state_code,
        postal_code: dataB4.postal_code,
        phone1: dataB4.phone1,
        phone2: dataB4.phone2,
        fax: dataB4.fax,
        email: dataB4.email,
        website: dataB4.website,
        company_code: dataB4.company_code,
        guest_type_code: dataB4.guest_type_code,
        id_card_code: dataB4.id_card_code,
        id_card_number: dataB4.id_card_number,
        birth_place: dataB4.birth_place,
        birth_date: dataB4.birth_date,
        //General Information
        group_code: dataB4.group_code,
        document_number: dataB4.document_number,
        flight_number: dataB4.flight_number,
        flight_arrival: dataB4.flight_arrival,
        flight_departure: dataB4.flight_departure,
        notes: dataB4.notes,
        hk_note: dataB4.hk_note,
        marketing_code: dataB4.marketing_code,
        voucher_number_ta: dataB4.voucher_number_ta
      }];
    },
    editReservation: function () {
      var _editReservation = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee9(reservationNumber) {
        var _ref8, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                _context9.prev = 0;
                _context9.next = 3;
                return reservationResource.get(reservationNumber);

              case 3:
                _ref8 = _context9.sent;
                data = _ref8.data;
                _context9.next = 7;
                return data.room_rate;

              case 7:
                this.roomRates = _context9.sent;
                _context9.next = 10;
                return data.bed_type;

              case 10:
                this.bedTypes = _context9.sent;
                _context9.next = 13;
                return data.reservation;

              case 13:
                this.vModel = _context9.sent;
                _context9.t0 = this;
                _context9.next = 17;
                return data.reservation;

              case 17:
                _context9.t1 = _context9.sent;

                _context9.t0.setDataBeforeEdit.call(_context9.t0, _context9.t1);

                this.setRateBefore();
                this.roomNumberEditB4 = this.vModel.room_number; // this.$vs.loading.close('#layout--main>.con-vs-loading');

                _context9.next = 26;
                break;

              case 23:
                _context9.prev = 23;
                _context9.t2 = _context9["catch"](0);
                _utils_alert_js__WEBPACK_IMPORTED_MODULE_15__["default"].errorFetchDataAlert(_context9.t2); // this.$vs.loading.close('#layout--main>.con-vs-loading');

              case 26:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9, this, [[0, 23]]);
      }));

      function editReservation(_x12) {
        return _editReservation.apply(this, arguments);
      }

      return editReservation;
    }(),
    insertLogUserUpdateReservation: function () {
      var _insertLogUserUpdateReservation = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee10(dataAfter) {
        var nightAfter, _ref9, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                _context10.prev = 0;
                this.logUserDataAfter = dataAfter;
                nightAfter = Object(_utils_general_js__WEBPACK_IMPORTED_MODULE_3__["dateDiff"])(dataAfter.arrival, dataAfter.departure);
                _context10.next = 5;
                return reservationResource.logUserUpdateReservation({
                  dataB4: this.logUserDataB4[0],
                  dataAfter: this.logUserDataAfter,
                  userId: this.userInfo.code,
                  nightAfter: nightAfter
                });

              case 5:
                _ref9 = _context10.sent;
                data = _ref9.data;
                _context10.next = 11;
                break;

              case 9:
                _context10.prev = 9;
                _context10.t0 = _context10["catch"](0);

              case 11:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10, this, [[0, 9]]);
      }));

      function insertLogUserUpdateReservation(_x13) {
        return _insertLogUserUpdateReservation.apply(this, arguments);
      }

      return insertLogUserUpdateReservation;
    }(),
    updateReservation: function () {
      var _updateReservation = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee11(params) {
        var _this4 = this;

        var _ref10, data, message;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee11$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                _context11.prev = 0;
                _context11.next = 3;
                return reservationResource.update(params);

              case 3:
                _ref10 = _context11.sent;
                data = _ref10.data;

                if (!(this.resvStatus != this.reservationStatus.checkIn)) {
                  _context11.next = 17;
                  break;
                }

                if (!(data.status == 0)) {
                  _context11.next = 16;
                  break;
                }

                _context11.next = 9;
                return this.insertLogUserUpdateReservation(params);

              case 9:
                if (!this.isDayendClose) {
                  _context11.next = 13;
                  break;
                }

                //update reservation on Dayend close
                this.modalMain = false;
                this.precheck();
                return _context11.abrupt("return");

              case 13:
                this.$vs.dialog({
                  color: 'primary',
                  type: 'confirm',
                  title: 'Information',
                  text: 'Reservation successfully saved, continue?',
                  acceptText: 'Yes',
                  cancelText: 'No',
                  accept: function accept() {
                    _this4.setDataBeforeEdit(params);

                    _this4.btnMainSaveDisabled = false;
                  },
                  cancel: function cancel() {
                    _this4.modalMain = false;
                  }
                });
                _context11.next = 17;
                break;

              case 16:
                if (data.status > 0) {
                  this.btnMainSaveDisabled = false;
                  _utils_dialog_js__WEBPACK_IMPORTED_MODULE_14__["default"].information(this.$t('message.statusInsertUpdateReservation.' + data.status));
                }

              case 17:
                this.$vs.loading.close('#button-save-main-form>.con-vs-loading');
                _context11.next = 26;
                break;

              case 20:
                _context11.prev = 20;
                _context11.t0 = _context11["catch"](0);
                message = _context11.t0.response.data.errors;
                this.dbErrors = message == undefined ? '' : message;
                this.$vs.loading.close('#button-save-main-form>.con-vs-loading');
                _utils_alert_js__WEBPACK_IMPORTED_MODULE_15__["default"].errorSaveDataAlert(message);

              case 26:
              case "end":
                return _context11.stop();
            }
          }
        }, _callee11, this, [[0, 20]]);
      }));

      function updateReservation(_x14) {
        return _updateReservation.apply(this, arguments);
      }

      return updateReservation;
    }(),
    insertReservation: function () {
      var _insertReservation = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee13(params) {
        var _this5 = this;

        var _ref11, data, message;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee13$(_context13) {
          while (1) {
            switch (_context13.prev = _context13.next) {
              case 0:
                _context13.prev = 0;
                _context13.next = 3;
                return reservationResource.store(params);

              case 3:
                _ref11 = _context13.sent;
                data = _ref11.data;

                if (data.status == 0) {
                  this.$vs.dialog({
                    color: 'primary',
                    type: 'confirm',
                    title: 'information',
                    text: 'Reservation successfully saved, continue?\n Reservation No. : #' + data.number,
                    acceptText: 'Yes',
                    cancelText: 'No',
                    accept: function () {
                      var _accept = _asyncToGenerator(
                      /*#__PURE__*/
                      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee12() {
                        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee12$(_context12) {
                          while (1) {
                            switch (_context12.prev = _context12.next) {
                              case 0:
                                _this5.titlePopup = 'Update Reservation - Number: ' + data.number;
                                _context12.next = 3;
                                return _this5.editReservation(data.number);

                              case 3:
                                // this.setDataBeforeEdit(params);
                                // this.setRateBefore()
                                _this5.btnMainSaveDisabled = false;
                                _this5.modeDataValue = _this5.modeData.edit;

                              case 5:
                              case "end":
                                return _context12.stop();
                            }
                          }
                        }, _callee12);
                      }));

                      function accept() {
                        return _accept.apply(this, arguments);
                      }

                      return accept;
                    }(),
                    cancel: function cancel() {
                      _this5.modalMain = false;
                    }
                  });
                  document.getElementById('deposit').disabled = false;
                  document.getElementById('scheduledRate').disabled = false; // document.getElementById('extraCharge').disabled = false; // TODO enable this line when extra charge is done

                  this.reservationNumber = data.number;
                  this.vModel.number = data.number;
                  this.vModel.reservation_number = data.number;
                } else if (data.status > 0) {
                  this.btnMainSaveDisabled = false;
                  _utils_dialog_js__WEBPACK_IMPORTED_MODULE_14__["default"].information(this.$t('message.statusInsertUpdateReservation.' + data.status));
                }

                this.refreshData(this.search);
                this.$vs.loading.close('#button-save-main-form>.con-vs-loading');
                _context13.next = 16;
                break;

              case 10:
                _context13.prev = 10;
                _context13.t0 = _context13["catch"](0);
                message = _context13.t0.response.data.errors;
                this.dbErrors = message == undefined ? '' : message;
                this.$vs.loading.close('#button-save-main-form>.con-vs-loading');
                _utils_alert_js__WEBPACK_IMPORTED_MODULE_15__["default"].errorSaveDataAlert(message);

              case 16:
              case "end":
                return _context13.stop();
            }
          }
        }, _callee13, this, [[0, 10]]);
      }));

      function insertReservation(_x15) {
        return _insertReservation.apply(this, arguments);
      }

      return insertReservation;
    }(),
    handleSaveReservation: function () {
      var _handleSaveReservation = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee15() {
        var _this6 = this;

        var validate;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee15$(_context15) {
          while (1) {
            switch (_context15.prev = _context15.next) {
              case 0:
                validate = this.modalChild === false ? this.scope1 : 'deposit';
                this.$validator.validateAll(validate).then(
                /*#__PURE__*/
                function () {
                  var _ref12 = _asyncToGenerator(
                  /*#__PURE__*/
                  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee14(result) {
                    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee14$(_context14) {
                      while (1) {
                        switch (_context14.prev = _context14.next) {
                          case 0:
                            if (!result) {
                              _context14.next = 8;
                              break;
                            }

                            // Call method get room number to check list room to avoid duplicate reservation on same room (Open 2 Windows or more)
                            _this6.btnMainSaveDisabled = true;
                            _this6.isCanEnabledSaveBtnMain = false;
                            _context14.next = 5;
                            return _this6.getRoomNumber('bed_type');

                          case 5:
                            _this6.$nextTick(function () {
                              if (!_this6.isRoomExist && _this6.resvStatus !== _this6.reservationStatus.checkIn) {
                                _utils_dialog_js__WEBPACK_IMPORTED_MODULE_14__["default"].roomNumberNotAvailable(_this6.$t('message.previousRoomNotAvailable'));
                              } else {
                                _this6.btnMainSaveDisabled = true;

                                _this6.handleSaveReservation2();
                              }
                            });

                            _context14.next = 9;
                            break;

                          case 8:
                            _utils_alert_js__WEBPACK_IMPORTED_MODULE_15__["default"].inputRequiredAlert();

                          case 9:
                          case "end":
                            return _context14.stop();
                        }
                      }
                    }, _callee14);
                  }));

                  return function (_x16) {
                    return _ref12.apply(this, arguments);
                  };
                }());

              case 2:
              case "end":
                return _context15.stop();
            }
          }
        }, _callee15, this);
      }));

      function handleSaveReservation() {
        return _handleSaveReservation.apply(this, arguments);
      }

      return handleSaveReservation;
    }(),
    handleSaveReservation2: function handleSaveReservation2() {
      if (parseFloat(this.vModel.weekday_rate) < parseFloat(this.rateB4.weekday_rate) || parseFloat(this.vModel.weekend_rate) < parseFloat(this.rateB4.weekend_rate) || parseFloat(this.vModel.discount) > parseFloat(this.rateB4.discount) || this.modeDataValue == this.modeData.edit && this.vModel.room_rate_code != this.rateB4.room_rate_code) {
        this.showCredential2('', true, true, this.accessSpecialOrder.overrideRateDiscount, this.$t('specialAccessList.overrideRateDiscount'));
      } else {
        this.handleSaveReservation3();
      }
    },
    handleSaveReservation3: function () {
      var _handleSaveReservation2 = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee16() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee16$(_context16) {
          while (1) {
            switch (_context16.prev = _context16.next) {
              case 0:
                if (!(this.resvStatus == this.reservationStatus.checkIn)) {
                  _context16.next = 4;
                  break;
                }

                this.checkInDataReservation();
                _context16.next = 17;
                break;

              case 4:
                if (!(!this.modalChild && this.resvStatus != this.reservationStatus.checkIn)) {
                  _context16.next = 17;
                  break;
                }

                this.$vs.loading({
                  container: '#button-save-main-form',
                  scale: this.scaleLoadingButton
                });

                if (!(this.modeDataValue === this.modeData.insert)) {
                  _context16.next = 10;
                  break;
                }

                this.insertReservation(this.vModel);
                _context16.next = 17;
                break;

              case 10:
                if (!(this.modeDataValue === this.modeData.edit)) {
                  _context16.next = 17;
                  break;
                }

                if (!(this.vModel.business_source_code !== this.logUserDataB4[0].business_source_code)) {
                  _context16.next = 15;
                  break;
                }

                this.showCredential2('', true, true, this.accessSpecialOrder.businessSource, this.$t('reservation.businessSource'));
                _context16.next = 17;
                break;

              case 15:
                _context16.next = 17;
                return this.updateReservation(this.vModel);

              case 17:
              case "end":
                return _context16.stop();
            }
          }
        }, _callee16, this);
      }));

      function handleSaveReservation3() {
        return _handleSaveReservation2.apply(this, arguments);
      }

      return handleSaveReservation3;
    }(),
    //------------------ END RESERVATION CRUD------------------//
    insertGuestInHouse2: function () {
      var _insertGuestInHouse2 = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee17(paramVModel) {
        var _this7 = this;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee17$(_context17) {
          while (1) {
            switch (_context17.prev = _context17.next) {
              case 0:
                //Call method get room number to check list room to avoid duplicate check In on same room (Open 2 Windows or more)
                this.isCanEnabledSaveBtnMain = false;
                _context17.next = 3;
                return this.getRoomNumber('bed_type');

              case 3:
                this.$nextTick(function () {
                  if (!_this7.isRoomExist) {
                    _this7.modalMain = false;

                    _this7.$vs.loading.close('#button-save-main-form>.con-vs-loading');

                    _utils_dialog_js__WEBPACK_IMPORTED_MODULE_14__["default"].roomNumberNotAvailable(_this7.$t('message.previousRoomNotAvailableSaveGuesInHouse'));
                  } else {
                    _this7.insertGuestInHouse(paramVModel);
                  }
                });

              case 4:
              case "end":
                return _context17.stop();
            }
          }
        }, _callee17, this);
      }));

      function insertGuestInHouse2(_x17) {
        return _insertGuestInHouse2.apply(this, arguments);
      }

      return insertGuestInHouse2;
    }(),
    handleSaveGuestInHouse: function handleSaveGuestInHouse() {
      var _this8 = this;

      var validate = this.scope1;
      this.$validator.validateAll(validate).then(
      /*#__PURE__*/
      function () {
        var _ref13 = _asyncToGenerator(
        /*#__PURE__*/
        _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee18(result) {
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee18$(_context18) {
            while (1) {
              switch (_context18.prev = _context18.next) {
                case 0:
                  if (result) {
                    _this8.btnMainSaveDisabled = true;

                    _this8.handleSaveGuestInHouse2();
                  } else {
                    _utils_alert_js__WEBPACK_IMPORTED_MODULE_15__["default"].inputRequiredAlert();
                  }

                case 1:
                case "end":
                  return _context18.stop();
              }
            }
          }, _callee18);
        }));

        return function (_x18) {
          return _ref13.apply(this, arguments);
        };
      }());
    },
    handleSaveGuestInHouse2: function handleSaveGuestInHouse2() {
      if (this.vModel.weekday_rate < this.rateB4.weekday_rate || this.vModel.weekend_rate < this.rateB4.weekend_rate || this.vModel.discount > this.rateB4.discount || this.modeDataValue == this.modeData.edit && this.vModel.room_rate_code != this.rateB4.room_rate_code) {
        this.showCredential2('', true, true, this.accessSpecialOrder.overrideRateDiscount, this.$t('specialAccessList.overrideRateDiscount'));
      } else {
        this.handleSaveGuestInHouse3();
      }
    },
    handleSaveGuestInHouse3: function () {
      var _handleSaveGuestInHouse = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee19() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee19$(_context19) {
          while (1) {
            switch (_context19.prev = _context19.next) {
              case 0:
                if (!(this.modeDataValue === this.modeData.insert)) {
                  _context19.next = 5;
                  break;
                }

                this.$vs.loading({
                  container: '#button-save-main-form',
                  scale: this.scaleLoadingButton
                });
                this.insertGuestInHouse2(this.vModel);
                _context19.next = 13;
                break;

              case 5:
                if (!(this.modeDataValue === this.modeData.edit)) {
                  _context19.next = 13;
                  break;
                }

                this.$vs.loading({
                  container: '#button-save-main-form',
                  scale: this.scaleLoadingButton
                });

                if (!(this.vModel.business_source_code !== this.logUserDataB4[0].business_source_code)) {
                  _context19.next = 11;
                  break;
                }

                this.showCredential2('', true, true, this.accessSpecialOrder.businessSource, this.$t('reservation.businessSource'));
                _context19.next = 13;
                break;

              case 11:
                _context19.next = 13;
                return this.updateGuestInHouse(this.vModel);

              case 13:
              case "end":
                return _context19.stop();
            }
          }
        }, _callee19, this);
      }));

      function handleSaveGuestInHouse3() {
        return _handleSaveGuestInHouse.apply(this, arguments);
      }

      return handleSaveGuestInHouse3;
    }(),
    setRateBefore: function setRateBefore() {
      this.rateB4.weekday_rate = this.logUserDataB4[0].weekday_rate;
      this.rateB4.weekend_rate = this.logUserDataB4[0].weekend_rate;
      this.rateB4.room_rate_code = this.logUserDataB4[0].room_rate_code;
      this.rateB4.discount = this.logUserDataB4[0].discount;
    },
    //------------------POPULATE SELECT OPTIONS----------------------//
    getDataLookUp: function () {
      var _getDataLookUp = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee20() {
        var _ref14, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee20$(_context20) {
          while (1) {
            switch (_context20.prev = _context20.next) {
              case 0:
                _context20.prev = 0;
                _context20.next = 3;
                return guestInHouseResource.dataLookup();

              case 3:
                _ref14 = _context20.sent;
                data = _ref14.data;
                this.dataLookup = data;
                this.city = data.city; // this.$vs.loading.close('#layout--main>.con-vs-loading');

                _context20.next = 12;
                break;

              case 9:
                _context20.prev = 9;
                _context20.t0 = _context20["catch"](0);
                // this.$vs.loading.close('#layout--main>.con-vs-loading');
                _utils_alert_js__WEBPACK_IMPORTED_MODULE_15__["default"].errorFetchDataAlert(_context20.t0);

              case 12:
              case "end":
                return _context20.stop();
            }
          }
        }, _callee20, this, [[0, 9]]);
      }));

      function getDataLookUp() {
        return _getDataLookUp.apply(this, arguments);
      }

      return getDataLookUp;
    }(),
    isRoomNumberExist: function isRoomNumberExist(roomBefore, dataRoom) {
      var result = false;

      for (var i = 0; i < dataRoom.length; i++) {
        if (roomBefore === dataRoom[i].number) {
          result = true;
          break;
        }
      }

      return result;
    },
    getRoomNumber: function () {
      var _getRoomNumber = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee21(type) {
        var arrivalDate, params, _ref15, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee21$(_context21) {
          while (1) {
            switch (_context21.prev = _context21.next) {
              case 0:
                this.btnMainSaveDisabled = true;
                this.roomNumberB4 = this.vModel.room_number;
                arrivalDate = this.vModel.arrival;

                if (this.modeDataValue === this.modeData.edit && (!this.isReservation || !this.isReservationFromAvaibility)) {
                  arrivalDate = this.auditDate;
                }

                params = {
                  room_type_code: this.vModel.room_type_code,
                  bed_type_code: this.vModel.bed_type_code,
                  reservation_number: this.vModel.reservation_number,
                  folio_number: this.vModel.folio_number,
                  room_number: this.vModel.room_number,
                  ready: this.readyRoom,
                  arrival: arrivalDate,
                  departure: this.vModel.departure
                };
                _context21.prev = 5;
                _context21.next = 8;
                return reservationResource.roomNumber(params);

              case 8:
                _ref15 = _context21.sent;
                data = _ref15.data;
                _context21.next = 12;
                return data.room;

              case 12:
                this.roomNumber = _context21.sent;
                _context21.next = 15;
                return data.available_room;

              case 15:
                this.availableRoom = _context21.sent;

                if (this.isFromAvailability || this.modeDataValue === this.modeData.edit) {
                  this.vModel.room_number = null;
                }

                this.isRoomExist = true; //if edit guest in house(available room in list back to previous room)

                if (!(this.roomNumberB4 !== null || this.modeDataValue == this.modeData.edit && !this.isReservation && !this.isReservationFromAvaibility)) {
                  _context21.next = 23;
                  break;
                }

                _context21.next = 21;
                return this.isRoomNumberExist(this.modeDataValue === this.modeData.edit && !this.isReservation && !this.isReservationFromAvaibility ? this.roomNumberEditB4 : this.roomNumberB4, data.room);

              case 21:
                this.isRoomExist = _context21.sent;

                if (this.isRoomExist) {
                  this.vModel.room_number = this.modeDataValue === this.modeData.edit && !this.isReservation && !this.isReservationFromAvaibility ? this.roomNumberEditB4 : this.roomNumberB4;
                }

              case 23:
                if (type !== 'bed_type') {
                  this.bedTypes = data.bed_type;
                  this.getRoomRate();
                } //Enabled if not save reservation Or Save Guest In House


                if (this.isCanEnabledSaveBtnMain) {
                  this.btnMainSaveDisabled = false;
                } else {
                  this.isCanEnabledSaveBtnMain = true;
                }

                _context21.next = 31;
                break;

              case 27:
                _context21.prev = 27;
                _context21.t0 = _context21["catch"](5);

                //Enabled if not save reservation Or Save Guest In House
                if (this.isCanEnabledSaveBtnMain) {
                  this.btnMainSaveDisabled = false;
                } else {
                  this.isCanEnabledSaveBtnMain = true;
                }

                _utils_alert_js__WEBPACK_IMPORTED_MODULE_15__["default"].errorFetchDataAlert(_context21.t0);

              case 31:
              case "end":
                return _context21.stop();
            }
          }
        }, _callee21, this, [[5, 27]]);
      }));

      function getRoomNumber(_x19) {
        return _getRoomNumber.apply(this, arguments);
      }

      return getRoomNumber;
    }(),
    getRoomRate: function () {
      var _getRoomRate = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee22(model) {
        var params, _ref16, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee22$(_context22) {
          while (1) {
            switch (_context22.prev = _context22.next) {
              case 0:
                if (!(this.vModel.room_type_code != null)) {
                  _context22.next = 13;
                  break;
                }

                params = {
                  room_type: this.vModel.room_type_code,
                  arrival: this.vModel.arrival,
                  departure: this.vModel.departure,
                  business_source: this.vModel.business_source_code
                };
                _context22.prev = 2;
                _context22.next = 5;
                return guestInHouseResource.roomRate(params);

              case 5:
                _ref16 = _context22.sent;
                data = _ref16.data;
                this.roomRates = data;
                _context22.next = 13;
                break;

              case 10:
                _context22.prev = 10;
                _context22.t0 = _context22["catch"](2);
                _utils_alert_js__WEBPACK_IMPORTED_MODULE_15__["default"].errorFetchDataAlert(_context22.t0);

              case 13:
              case "end":
                return _context22.stop();
            }
          }
        }, _callee22, this, [[2, 10]]);
      }));

      function getRoomRate(_x20) {
        return _getRoomRate.apply(this, arguments);
      }

      return getRoomRate;
    }(),
    getDailyRate: function () {
      var _getDailyRate = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee23(model) {
        var params, _ref17, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee23$(_context23) {
          while (1) {
            switch (_context23.prev = _context23.next) {
              case 0:
                params = {
                  adult: this.vModel.adult,
                  room_rate: model.room_rate_code
                };
                _context23.prev = 1;
                _context23.next = 4;
                return guestInHouseResource.dailyRate(params);

              case 4:
                _ref17 = _context23.sent;
                data = _ref17.data;
                this.rate = {
                  weekday: parseFloat(data.weekday_rate),
                  weekend: parseFloat(data.weekend_rate)
                };

                if (this.modeDataValue != this.modeData.edit) {
                  this.rateB4 = {
                    weekday_rate: parseFloat(data.weekday_rate),
                    weekend_rate: parseFloat(data.weekend_rate),
                    discount: 0
                  };
                }

                if (model == this.vModel) {
                  this.vModel.weekday_rate = this.rate.weekday;
                  this.vModel.weekend_rate = this.rate.weekend;
                } else if (model == this.vMoveRoom && this.vMoveRoom.change_rate == true) {
                  this.vMoveRoom.weekday_rate = this.rate.weekday;
                  this.vMoveRoom.weekend_rate = this.rate.weekend;
                }

                this.setDiscountRate();
                _context23.next = 15;
                break;

              case 12:
                _context23.prev = 12;
                _context23.t0 = _context23["catch"](1);
                _utils_alert_js__WEBPACK_IMPORTED_MODULE_15__["default"].errorFetchDataAlert(_context23.t0);

              case 15:
              case "end":
                return _context23.stop();
            }
          }
        }, _callee23, this, [[1, 12]]);
      }));

      function getDailyRate(_x21) {
        return _getDailyRate.apply(this, arguments);
      }

      return getDailyRate;
    }(),
    getState: function () {
      var _getState = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee24(state) {
        var params, _ref18, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee24$(_context24) {
          while (1) {
            switch (_context24.prev = _context24.next) {
              case 0:
                if (!this.vModel.country_code) {
                  _context24.next = 13;
                  break;
                }

                params = {
                  country: this.vModel.country_code,
                  state: this.vModel.state_code
                };
                _context24.prev = 2;
                _context24.next = 5;
                return guestInHouseResource.state(params);

              case 5:
                _ref18 = _context24.sent;
                data = _ref18.data;

                if (state == true) {
                  this.state = data.state;
                  this.city = data.city;
                } else {
                  this.city = data.city;
                }

                _context24.next = 13;
                break;

              case 10:
                _context24.prev = 10;
                _context24.t0 = _context24["catch"](2);
                _utils_alert_js__WEBPACK_IMPORTED_MODULE_15__["default"].errorFetchDataAlert(_context24.t0);

              case 13:
              case "end":
                return _context24.stop();
            }
          }
        }, _callee24, this, [[2, 10]]);
      }));

      function getState(_x22) {
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
    toggleTimeRangePanel: function toggleTimeRangePanel() {
      this.showTimeRangePanel = !this.showTimeRangePanel;
    },
    //  END DATEPICKER CONFIGURATION //
    //------------------START CRUD SCHEDULED RATE-------------------------------//
    getScheduledRate: function () {
      var _getScheduledRate = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee25() {
        var params, _ref19, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee25$(_context25) {
          while (1) {
            switch (_context25.prev = _context25.next) {
              case 0:
                params = {
                  number: this.isReservation ? this.reservationNumber : this.folioNumber
                };
                _context25.prev = 1;

                if (!this.isReservation) {
                  _context25.next = 8;
                  break;
                }

                _context25.next = 5;
                return rvScheduledRateResource.list(params);

              case 5:
                _context25.t0 = _context25.sent;
                _context25.next = 11;
                break;

              case 8:
                _context25.next = 10;
                return ghScheduledRateResource.list(params);

              case 10:
                _context25.t0 = _context25.sent;

              case 11:
                _ref19 = _context25.t0;
                data = _ref19.data;
                this.scheduledRate = data;
                _context25.next = 19;
                break;

              case 16:
                _context25.prev = 16;
                _context25.t1 = _context25["catch"](1);
                _utils_alert_js__WEBPACK_IMPORTED_MODULE_15__["default"].errorFetchDataAlert(_context25.t1);

              case 19:
              case "end":
                return _context25.stop();
            }
          }
        }, _callee25, this, [[1, 16]]);
      }));

      function getScheduledRate() {
        return _getScheduledRate.apply(this, arguments);
      }

      return getScheduledRate;
    }(),
    updateScheduledRate: function () {
      var _updateScheduledRate = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee26() {
        var _ref20, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee26$(_context26) {
          while (1) {
            switch (_context26.prev = _context26.next) {
              case 0:
                _context26.prev = 0;
                this.vScheduled.number = this.isReservation ? this.reservationNumber : this.folioNumber;

                if (!this.isReservation) {
                  _context26.next = 8;
                  break;
                }

                _context26.next = 5;
                return rvScheduledRateResource.update(this.vScheduled);

              case 5:
                _context26.t0 = _context26.sent;
                _context26.next = 11;
                break;

              case 8:
                _context26.next = 10;
                return ghScheduledRateResource.update(this.vScheduled);

              case 10:
                _context26.t0 = _context26.sent;

              case 11:
                _ref20 = _context26.t0;
                data = _ref20.data;

                if (data == 0) {
                  this.$refs.scheduledRate.refreshData();
                  _utils_alert_js__WEBPACK_IMPORTED_MODULE_15__["default"].acceptAlertSucces();
                } else if (data > 0) {
                  _utils_dialog_js__WEBPACK_IMPORTED_MODULE_14__["default"].information(this.$t('message.statusScheduledRate.' + data));
                }

                this.modalScheduledRate = false;
                this.$vs.loading.close('#layout--main>.con-vs-loading');
                _context26.next = 22;
                break;

              case 18:
                _context26.prev = 18;
                _context26.t1 = _context26["catch"](0);
                this.$vs.loading.close('#layout--main>.con-vs-loading');
                _utils_alert_js__WEBPACK_IMPORTED_MODULE_15__["default"].errorModifyingDataAlert();

              case 22:
              case "end":
                return _context26.stop();
            }
          }
        }, _callee26, this, [[0, 18]]);
      }));

      function updateScheduledRate() {
        return _updateScheduledRate.apply(this, arguments);
      }

      return updateScheduledRate;
    }(),
    editScheduledRate: function () {
      var _editScheduledRate = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee27(id) {
        var _ref21, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee27$(_context27) {
          while (1) {
            switch (_context27.prev = _context27.next) {
              case 0:
                this.$vs.loading({
                  container: '#layout--main',
                  scale: this.scaleLoadingMainLayout
                });
                _context27.prev = 1;

                if (!this.isReservation) {
                  _context27.next = 8;
                  break;
                }

                _context27.next = 5;
                return rvScheduledRateResource.get(id.id_log);

              case 5:
                _context27.t0 = _context27.sent;
                _context27.next = 11;
                break;

              case 8:
                _context27.next = 10;
                return ghScheduledRateResource.get(id.id_log);

              case 10:
                _context27.t0 = _context27.sent;

              case 11:
                _ref21 = _context27.t0;
                data = _ref21.data;
                this.vScheduled = data;
                this.titleModalScheduledRate = 'Update Scheduled Rate';
                this.modalScheduledRate = true;
                this.$vs.loading.close('#layout--main>.con-vs-loading');
                _context27.next = 23;
                break;

              case 19:
                _context27.prev = 19;
                _context27.t1 = _context27["catch"](1);
                this.$vs.loading.close('#layout--main>.con-vs-loading');
                _utils_alert_js__WEBPACK_IMPORTED_MODULE_15__["default"].errorFetchDataAlert(_context27.t1);

              case 23:
              case "end":
                return _context27.stop();
            }
          }
        }, _callee27, this, [[1, 19]]);
      }));

      function editScheduledRate(_x23) {
        return _editScheduledRate.apply(this, arguments);
      }

      return editScheduledRate;
    }(),
    insertScheduledRate: function () {
      var _insertScheduledRate = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee28() {
        var _ref22, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee28$(_context28) {
          while (1) {
            switch (_context28.prev = _context28.next) {
              case 0:
                _context28.prev = 0;
                this.$vs.loading({
                  container: '#layout--main',
                  scale: this.scaleLoadingMainLayout
                });

                if (!this.isReservation) {
                  _context28.next = 8;
                  break;
                }

                _context28.next = 5;
                return rvScheduledRateResource.store(this.vScheduled);

              case 5:
                _context28.t0 = _context28.sent;
                _context28.next = 11;
                break;

              case 8:
                _context28.next = 10;
                return ghScheduledRateResource.store(this.vScheduled);

              case 10:
                _context28.t0 = _context28.sent;

              case 11:
                _ref22 = _context28.t0;
                data = _ref22.data;

                if (data == 0) {
                  this.$refs.scheduledRate.refreshData();
                  _utils_alert_js__WEBPACK_IMPORTED_MODULE_15__["default"].acceptAlertSucces();
                } else if (data > 0) {
                  _utils_dialog_js__WEBPACK_IMPORTED_MODULE_14__["default"].information(this.$t('message.statusScheduledRate.' + data));
                }

                this.modalScheduledRate = false;
                this.$vs.loading.close('#layout--main>.con-vs-loading');
                _context28.next = 22;
                break;

              case 18:
                _context28.prev = 18;
                _context28.t1 = _context28["catch"](0);
                this.$vs.loading.close('#layout--main>.con-vs-loading');
                _utils_alert_js__WEBPACK_IMPORTED_MODULE_15__["default"].errorSaveDataAlert();

              case 22:
              case "end":
                return _context28.stop();
            }
          }
        }, _callee28, this, [[0, 18]]);
      }));

      function insertScheduledRate() {
        return _insertScheduledRate.apply(this, arguments);
      }

      return insertScheduledRate;
    }(),
    handleDeleteScheduledRate: function handleDeleteScheduledRate(val) {
      this.modeScheduledRate = this.modeData["delete"];
      this.showCredential2(val, true, false, this.accessSpecialOrder.scheduledRate);
    },
    deleteScheduledRate: function () {
      var _deleteScheduledRate = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee29() {
        var params, _ref23, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee29$(_context29) {
          while (1) {
            switch (_context29.prev = _context29.next) {
              case 0:
                params = {
                  id_log: this.paramsData.id_log,
                  user_id: this.userInfo.code
                };
                this.modalScheduledRate = false;
                this.$vs.loading({
                  container: '#layout--main',
                  scale: this.scaleLoadingMainLayout
                });
                _context29.prev = 3;

                if (!this.isReservation) {
                  _context29.next = 10;
                  break;
                }

                _context29.next = 7;
                return rvScheduledRateResource["delete"](params);

              case 7:
                _context29.t0 = _context29.sent;
                _context29.next = 13;
                break;

              case 10:
                _context29.next = 12;
                return ghScheduledRateResource["delete"](params);

              case 12:
                _context29.t0 = _context29.sent;

              case 13:
                _ref23 = _context29.t0;
                data = _ref23.data;
                this.$refs.scheduledRate.refreshData();
                this.$vs.loading.close('#layout--main>.con-vs-loading');
                _utils_alert_js__WEBPACK_IMPORTED_MODULE_15__["default"].deleteAlertSuccess();
                _context29.next = 24;
                break;

              case 20:
                _context29.prev = 20;
                _context29.t1 = _context29["catch"](3);
                this.$vs.loading.close('#layout--main>.con-vs-loading');
                _utils_alert_js__WEBPACK_IMPORTED_MODULE_15__["default"].errorDeleteDataAlert();

              case 24:
              case "end":
                return _context29.stop();
            }
          }
        }, _callee29, this, [[3, 20]]);
      }));

      function deleteScheduledRate() {
        return _deleteScheduledRate.apply(this, arguments);
      }

      return deleteScheduledRate;
    }(),
    handleChangeRoomRate: function () {
      var _handleChangeRoomRate = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee30() {
        var params, _ref24, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee30$(_context30) {
          while (1) {
            switch (_context30.prev = _context30.next) {
              case 0:
                params = {
                  room_rate: this.vScheduled.room_rate_code
                };
                _context30.next = 3;
                return guestInHouseResource.dailyRate(params);

              case 3:
                _ref24 = _context30.sent;
                data = _ref24.data;
                this.vScheduled.rate = parseFloat(data.weekday_rate);

              case 6:
              case "end":
                return _context30.stop();
            }
          }
        }, _callee30, this);
      }));

      function handleChangeRoomRate() {
        return _handleChangeRoomRate.apply(this, arguments);
      }

      return handleChangeRoomRate;
    }(),
    resetScheduledRate: function resetScheduledRate() {
      this.vScheduled = {
        number: this.isReservation ? this.reservationNumber : this.folioNumber,
        from_date: Object(_utils_format_js__WEBPACK_IMPORTED_MODULE_30__["formatDateDatabase"])(this.auditDate),
        to_date: Object(_utils_format_js__WEBPACK_IMPORTED_MODULE_30__["formatDateDatabase"])(this.auditDate),
        rate: 0,
        compliment_hu: ' ',
        user_id: this.userInfo.code
      };
      this.btnScheduledSaveDisabled = false;
    },
    handleSidebarScheduledRate: function handleSidebarScheduledRate(idData, modeData) {
      this.modalScheduledRate = false;
      this.modeScheduledRate = modeData;
      this.resetScheduledRate();

      if (modeData == this.modeData.edit) {
        this.editScheduledRate(idData);
      } else {
        this.titleModalScheduledRate = 'Insert Scheduled Rate';
        this.modalScheduledRate = !this.modalScheduledRate;
      }
    },
    handleSaveScheduleRate: function handleSaveScheduleRate() {
      var _this9 = this;

      this.$validator.validateAll('scheduled').then(function (result) {
        if (result) {
          _this9.btnScheduledSaveDisabled = true;
          _this9.modalScheduledRate = false;

          if (_this9.vScheduled.to_date >= Object(_utils_format_js__WEBPACK_IMPORTED_MODULE_30__["formatDateDatabase"])(_this9.vModel.departure)) {
            _this9.$vs.dialog({
              color: 'danger',
              title: 'Warning',
              text: 'Date out of stay'
            });

            return;
          } //SHOW CREDENTIAL ACCESS


          _this9.showCredential2('', true, false, _this9.accessSpecialOrder.scheduledRate);
        } else {
          _utils_alert_js__WEBPACK_IMPORTED_MODULE_15__["default"].inputRequiredAlert();
        }
      });
    },
    fromDateScheduledDisable: function fromDateScheduledDisable(date) {
      var arrival = new Date(this.vModel.arrival);
      arrival.setDate(arrival.getDate() - 1);
      return date < arrival;
    },
    toDateScheduledDisable: function toDateScheduledDisable(date) {
      var fromDate = new Date(this.vScheduled.from_date);
      fromDate.setDate(fromDate.getDate() - 1);
      return date < fromDate;
    },
    //------------------END CRUD SCHEDULED RATE-------------------------------//
    //-------------------- CRUD FOR DEPOSIT---------------------------//
    getAccount: function () {
      var _getAccount = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee31(type) {
        var _this10 = this;

        var params, _ref25, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee31$(_context31) {
          while (1) {
            switch (_context31.prev = _context31.next) {
              case 0:
                params = {
                  type: this.modeChildValue === this.modeDeposit.cash ? this.mSubGroupAccount.cashPayment : this.modeChildValue === this.modeDeposit.card ? this.mSubGroupAccount.creditOrDebitCard : this.modeChildValue === this.modeDeposit.other ? this.mSubGroupAccount.bankTransfer : '',
                  sub_department_code: this.vDeposit.sub_department_code,
                  currency_code: this.vDeposit.currency_code
                };
                _context31.prev = 1;
                _context31.next = 4;
                return depositResource.account(params);

              case 4:
                _ref25 = _context31.sent;
                data = _ref25.data;
                this.accounts = data;
                setTimeout(function () {
                  _this10.account = type === 'PYMT' ? _this10.accounts[0] : _this10.account;
                }, 100);
                _context31.next = 13;
                break;

              case 10:
                _context31.prev = 10;
                _context31.t0 = _context31["catch"](1);
                _utils_alert_js__WEBPACK_IMPORTED_MODULE_15__["default"].errorFetchDataAlert(_context31.t0);

              case 13:
              case "end":
                return _context31.stop();
            }
          }
        }, _callee31, this, [[1, 10]]);
      }));

      function getAccount(_x24) {
        return _getAccount.apply(this, arguments);
      }

      return getAccount;
    }(),
    getExchangeRate: function () {
      var _getExchangeRate = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee32(data) {
        var params, _ref26, _data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee32$(_context32) {
          while (1) {
            switch (_context32.prev = _context32.next) {
              case 0:
                params = {
                  currency_code: data ? data : this.vDeposit.currency_code
                };
                _context32.prev = 1;
                _context32.next = 4;
                return depositResource.exchangeRate(params);

              case 4:
                _ref26 = _context32.sent;
                _data = _ref26.data;
                this.vDeposit.exchange_rate = _data;
                this.vDeposit.amount = this.vDeposit.amount_foreign * this.vDeposit.exchange_rate;
                _context32.next = 13;
                break;

              case 10:
                _context32.prev = 10;
                _context32.t0 = _context32["catch"](1);
                _utils_alert_js__WEBPACK_IMPORTED_MODULE_15__["default"].errorFetchDataAlert(_context32.t0);

              case 13:
              case "end":
                return _context32.stop();
            }
          }
        }, _callee32, this, [[1, 10]]);
      }));

      function getExchangeRate(_x25) {
        return _getExchangeRate.apply(this, arguments);
      }

      return getExchangeRate;
    }(),
    getLookupDeposit: function () {
      var _getLookupDeposit = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee33() {
        var _ref27, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee33$(_context33) {
          while (1) {
            switch (_context33.prev = _context33.next) {
              case 0:
                _context33.prev = 0;
                _context33.next = 3;
                return depositResource.lookup();

              case 3:
                _ref27 = _context33.sent;
                data = _ref27.data;
                this.dataLookupDeposit = data;

                if (this.vDeposit.currency_code) {
                  this.getExchangeRate();
                }

                this.$vs.loading.close('#layout--main>.con-vs-loading');
                _context33.next = 13;
                break;

              case 10:
                _context33.prev = 10;
                _context33.t0 = _context33["catch"](0);
                _utils_alert_js__WEBPACK_IMPORTED_MODULE_15__["default"].errorFetchDataAlert(_context33.t0);

              case 13:
              case "end":
                return _context33.stop();
            }
          }
        }, _callee33, this, [[0, 10]]);
      }));

      function getLookupDeposit() {
        return _getLookupDeposit.apply(this, arguments);
      }

      return getLookupDeposit;
    }(),
    getDepositList: function () {
      var _getDepositList = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee34() {
        var params, _ref28, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee34$(_context34) {
          while (1) {
            switch (_context34.prev = _context34.next) {
              case 0:
                params = {
                  id: this.reservationNumber,
                  isShowCorrection: this.showCorrectionDeposit,
                  isShowVoid: this.showVoidDeposit
                };

                if (this.modalMain && this.activeTab == 2) {
                  this.$vs.loading({
                    container: '#depositTable',
                    scale: this.scaleLoadingContainer
                  });
                }

                _context34.prev = 2;
                _context34.next = 5;
                return depositResource.list(params);

              case 5:
                _ref28 = _context34.sent;
                data = _ref28.data;
                this.guestDeposit = data.guestDeposit;
                this.totalGuestDeposit = data.total;
                this.balanceDeposit = data.total[0].balance; // this.modalMain = true;

                this.$vs.loading.close('#depositTable>.con-vs-loading'); // this.$vs.loading.close('#layout--main>.con-vs-loading');

                _context34.next = 17;
                break;

              case 13:
                _context34.prev = 13;
                _context34.t0 = _context34["catch"](2);
                this.$vs.loading.close('#depositTable>.con-vs-loading'); // this.$vs.loading.close('#layout--main>.con-vs-loading');

                _utils_alert_js__WEBPACK_IMPORTED_MODULE_15__["default"].errorFetchDataAlert(_context34.t0);

              case 17:
              case "end":
                return _context34.stop();
            }
          }
        }, _callee34, this, [[2, 13]]);
      }));

      function getDepositList() {
        return _getDepositList.apply(this, arguments);
      }

      return getDepositList;
    }(),
    trackingDeposit: function () {
      var _trackingDeposit = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee35(val) {
        var _ref29, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee35$(_context35) {
          while (1) {
            switch (_context35.prev = _context35.next) {
              case 0:
                _context35.prev = 0;
                _context35.next = 3;
                return depositResource.list(val.id_log);

              case 3:
                _ref29 = _context35.sent;
                data = _ref29.data;
                this.dataTracking = data.modelGrid;
                this.modalChild = true;
                this.$vs.loading.close('#layout--main>.con-vs-loading');
                _context35.next = 14;
                break;

              case 10:
                _context35.prev = 10;
                _context35.t0 = _context35["catch"](0);
                this.$vs.loading.close('#layout--main>.con-vs-loading');
                _utils_alert_js__WEBPACK_IMPORTED_MODULE_15__["default"].errorFetchDataAlert(_context35.t0);

              case 14:
              case "end":
                return _context35.stop();
            }
          }
        }, _callee35, this, [[0, 10]]);
      }));

      function trackingDeposit(_x26) {
        return _trackingDeposit.apply(this, arguments);
      }

      return trackingDeposit;
    }(),
    insertDeposit: function () {
      var _insertDeposit = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee36() {
        var _ref30, data, message;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee36$(_context36) {
          while (1) {
            switch (_context36.prev = _context36.next) {
              case 0:
                _context36.prev = 0;
                _context36.next = 3;
                return depositResource.store(this.vDeposit);

              case 3:
                _ref30 = _context36.sent;
                data = _ref30.data;

                if (data == 0) {
                  this.modalChild = false;
                  this.getDepositList();
                  _utils_alert_js__WEBPACK_IMPORTED_MODULE_15__["default"].acceptAlertSucces();
                } else if (data > 0) {
                  _utils_dialog_js__WEBPACK_IMPORTED_MODULE_14__["default"].information(this.$t('message.statusInsertGuestDeposit.' + data));
                }

                this.$emit('refreshData');
                this.$vs.loading.close('#button-save-deposit>.con-vs-loading');
                _context36.next = 16;
                break;

              case 10:
                _context36.prev = 10;
                _context36.t0 = _context36["catch"](0);
                message = _context36.t0.response.data.errors;
                this.dbErrors = message == undefined ? '' : message;
                this.$vs.loading.close('#button-save-deposit>.con-vs-loading');
                _utils_alert_js__WEBPACK_IMPORTED_MODULE_15__["default"].errorSaveDataAlert(message);

              case 16:
              case "end":
                return _context36.stop();
            }
          }
        }, _callee36, this, [[0, 10]]);
      }));

      function insertDeposit() {
        return _insertDeposit.apply(this, arguments);
      }

      return insertDeposit;
    }(),
    resetDeposit: function resetDeposit(mode) {
      var _this11 = this;

      this.vDeposit = {
        reservation_number: this.reservationNumber,
        currency_code: this.defaultCurrency,
        default_currency_code: this.defaultCurrency,
        exchange_rate: 1,
        sub_department_code: this.sdFrontOffice,
        account_code: mode === this.modeDeposit.cash ? this.cash : '',
        amount_foreign: 0,
        amount: 0,
        charge_percent: 0,
        charge_amount: 0,
        total_amount: 0,
        reservation_status: this.idData.status_code,
        remark: '',
        document_number: '',
        isRefund: false,
        audit_date: this.auditDate,
        user_id: this.userInfo.code
      };
      this.account_code = '';
      this.account = null;
      this.btnDepositSaveDisabled = false;
      this.$validator.pause();
      this.$nextTick(function () {
        _this11.$validator.errors.clear();

        _this11.$validator.fields.items.forEach(function (field) {
          return field.reset();
        });

        _this11.$validator.fields.items.forEach(function (field) {
          return _this11.errors.remove(field);
        });

        _this11.$validator.resume();
      });
      this.dbErrors = {};
    },
    showDepositForm: function () {
      var _showDepositForm = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee37(val, modeData) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee37$(_context37) {
          while (1) {
            switch (_context37.prev = _context37.next) {
              case 0:
                this.modePopUp = 1;
                this.modalPaymentOption = false;
                this.resetDeposit(modeData);
                this.modeChildValue = modeData;
                this.$vs.loading({
                  container: '#layout--main',
                  scale: this.scaleLoadingMainLayout
                });

                if (!(this.modeChildValue === this.modeDeposit.cash || this.modeChildValue === this.modeDeposit.refund)) {
                  _context37.next = 18;
                  break;
                }

                this.modalChildTitle = this.modeChildValue === this.modeDeposit.cash ? this.$t('title.cashDeposit') : this.$t('title.cashRefund');

                if (!(this.modeChildValue === this.modeDeposit.refund)) {
                  _context37.next = 13;
                  break;
                }

                _context37.next = 10;
                return this.getBalance();

              case 10:
                this.vDeposit.isRefund = true;
                this.vDeposit.amount_foreign = this.balanceDeposit < 0 ? -this.balanceDeposit : 0;
                this.vDeposit.remark = 'Refund';

              case 13:
                this.getLookupDeposit();
                _context37.next = 16;
                return this.getAccount('PYMT');

              case 16:
                _context37.next = 33;
                break;

              case 18:
                if (!(this.modeChildValue === this.modeDeposit.card)) {
                  _context37.next = 25;
                  break;
                }

                this.modalChildTitle = this.$t('title.cardDeposit');
                this.getLookupDeposit();
                _context37.next = 23;
                return this.getAccount('CRDB');

              case 23:
                _context37.next = 33;
                break;

              case 25:
                if (!(this.modeChildValue === this.modeDeposit.other)) {
                  _context37.next = 32;
                  break;
                }

                this.modalChildTitle = this.$t('title.deposit');
                this.getLookupDeposit();
                _context37.next = 30;
                return this.getAccount('BKTR');

              case 30:
                _context37.next = 33;
                break;

              case 32:
                if (this.modeChildValue === this.modeDeposit.tracking) {
                  this.modalChildTitle = this.$t('trackingData');
                  this.trackingDeposit(val);
                }

              case 33:
                this.$vs.loading.close('#layout--main>.con-vs-loading');
                this.modalChild = true;

              case 35:
              case "end":
                return _context37.stop();
            }
          }
        }, _callee37, this);
      }));

      function showDepositForm(_x27, _x28) {
        return _showDepositForm.apply(this, arguments);
      }

      return showDepositForm;
    }(),
    getTotalAmount: function getTotalAmount() {
      var chargePercent = this.vDeposit.charge_percent >= 0 ? this.vDeposit.charge_percent : 0;
      this.vDeposit.amount = this.vDeposit.amount_foreign * this.vDeposit.exchange_rate;
      this.vDeposit.charge_amount = this.vDeposit.amount_foreign * chargePercent / 100;
      this.vDeposit.total_amount = this.vDeposit.charge_amount + this.vDeposit.amount_foreign;
    },
    saveDeposit: function saveDeposit() {
      var _this12 = this;

      this.$validator.validateAll('deposit').then(function (result) {
        if (_this12.modeChildValue == _this12.modeDeposit.card) {
          _this12.$validator.validateAll('card').then(function (result) {
            if (!result) {
              _utils_alert_js__WEBPACK_IMPORTED_MODULE_15__["default"].inputRequiredAlert();
              return;
            }
          });
        }

        if (result) {
          if (_this12.modeChildValue == _this12.modeDeposit.refund && _this12.vDeposit.amount_foreign > _this12.totalGuestDeposit[0].credit - _this12.totalGuestDeposit[0].debit) {
            _this12.$vs.dialog({
              color: 'danger',
              title: 'error',
              text: 'Max refund ' + Object(_utils_format_js__WEBPACK_IMPORTED_MODULE_30__["formatNumberValue"])(_this12.totalGuestDeposit[0].credit - _this12.totalGuestDeposit[0].debit),
              accept: _this12.vDeposit.amount_foreign = _this12.getBalance()
            });

            return;
          }

          _this12.$vs.loading({
            container: '#button-save-deposit',
            scale: _this12.scaleLoadingButton
          });

          _this12.btnDepositSaveDisabled = true;

          _this12.insertDeposit();
        }
      });
    },
    correctionVoid: function () {
      var _correctionVoid = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee38() {
        var data, amount;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee38$(_context38) {
          while (1) {
            switch (_context38.prev = _context38.next) {
              case 0:
                data = {
                  userId: this.userInfo.code,
                  userBy: this.credential.user,
                  reason: this.credential.reason,
                  isShowCorrection: this.showCorrectionDeposit,
                  idLog: this.idLog,
                  resvNumber: this.reservationNumber
                };

                if (!this.isCorrection) {
                  _context38.next = 16;
                  break;
                }

                _context38.prev = 2;
                _context38.next = 5;
                return this.getAmountBefore(this.idLog);

              case 5:
                amount = _context38.sent;
                this.oldCorrectionValue = amount;
                this.newCorrectionValue = amount;
                this.correctionPrompt = true;
                _context38.next = 14;
                break;

              case 11:
                _context38.prev = 11;
                _context38.t0 = _context38["catch"](2);
                _utils_alert_js__WEBPACK_IMPORTED_MODULE_15__["default"].errorFetchDataAlert();

              case 14:
                _context38.next = 26;
                break;

              case 16:
                _context38.prev = 16;
                _context38.next = 19;
                return depositResource["void"](data);

              case 19:
                this.getDepositList();
                _utils_alert_js__WEBPACK_IMPORTED_MODULE_15__["default"].acceptAlertSucces();
                _context38.next = 26;
                break;

              case 23:
                _context38.prev = 23;
                _context38.t1 = _context38["catch"](16);
                _utils_alert_js__WEBPACK_IMPORTED_MODULE_15__["default"].errorSaveDataAlert();

              case 26:
              case "end":
                return _context38.stop();
            }
          }
        }, _callee38, this, [[2, 11], [16, 23]]);
      }));

      function correctionVoid() {
        return _correctionVoid.apply(this, arguments);
      }

      return correctionVoid;
    }(),
    getAmountBefore: function () {
      var _getAmountBefore = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee39(id) {
        var _ref31, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee39$(_context39) {
          while (1) {
            switch (_context39.prev = _context39.next) {
              case 0:
                _context39.next = 2;
                return depositResource.amountBefore({
                  idLog: id,
                  isShowCorrection: this.showCorrectionDeposit
                });

              case 2:
                _ref31 = _context39.sent;
                data = _ref31.data;
                return _context39.abrupt("return", data);

              case 5:
              case "end":
                return _context39.stop();
            }
          }
        }, _callee39, this);
      }));

      function getAmountBefore(_x29) {
        return _getAmountBefore.apply(this, arguments);
      }

      return getAmountBefore;
    }(),
    correctionData: function () {
      var _correctionData = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee40() {
        var data;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee40$(_context40) {
          while (1) {
            switch (_context40.prev = _context40.next) {
              case 0:
                data = {
                  userId: this.userInfo.code,
                  userBy: this.credential.user,
                  reason: this.credential.reason,
                  amount: this.newCorrectionValue,
                  idLog: this.paramsData.id_log
                };
                _context40.prev = 1;
                _context40.next = 4;
                return depositResource.correction(data);

              case 4:
                this.getDepositList();
                _utils_alert_js__WEBPACK_IMPORTED_MODULE_15__["default"].acceptAlertSucces();
                _context40.next = 11;
                break;

              case 8:
                _context40.prev = 8;
                _context40.t0 = _context40["catch"](1);
                _utils_alert_js__WEBPACK_IMPORTED_MODULE_15__["default"].errorSaveDataAlert();

              case 11:
              case "end":
                return _context40.stop();
            }
          }
        }, _callee40, this, [[1, 8]]);
      }));

      function correctionData() {
        return _correctionData.apply(this, arguments);
      }

      return correctionData;
    }(),
    getBalance: function () {
      var _getBalance = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee41() {
        var _ref32, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee41$(_context41) {
          while (1) {
            switch (_context41.prev = _context41.next) {
              case 0:
                _context41.next = 2;
                return depositResource.balance({
                  q: this.reservationNumber
                });

              case 2:
                _ref32 = _context41.sent;
                data = _ref32.data;
                this.balanceDeposit = data.balance;
                return _context41.abrupt("return", data);

              case 6:
              case "end":
                return _context41.stop();
            }
          }
        }, _callee41, this);
      }));

      function getBalance() {
        return _getBalance.apply(this, arguments);
      }

      return getBalance;
    }(),
    //---------------------END CRUD DEPOSIT---------------------------//
    //------------------START CRUD EXTRA CHARGE-------------------------------//
    getExtraCharge: function () {
      var _getExtraCharge = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee42() {
        var params, _ref33, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee42$(_context42) {
          while (1) {
            switch (_context42.prev = _context42.next) {
              case 0:
                params = {
                  number: this.isReservation ? this.reservationNumber : this.folioNumber
                };
                _context42.prev = 1;

                if (!this.isReservation) {
                  _context42.next = 8;
                  break;
                }

                _context42.next = 5;
                return rvExtraChargeResource.list(params);

              case 5:
                _context42.t0 = _context42.sent;
                _context42.next = 11;
                break;

              case 8:
                _context42.next = 10;
                return ghExtraChargeResource.list(params);

              case 10:
                _context42.t0 = _context42.sent;

              case 11:
                _ref33 = _context42.t0;
                data = _ref33.data;
                this.extraCharges = data; // this.$vs.loading.close('#layout--main>.con-vs-loading');

                _context42.next = 19;
                break;

              case 16:
                _context42.prev = 16;
                _context42.t1 = _context42["catch"](1);
                // this.$vs.loading.close('#layout--main>.con-vs-loading');
                _utils_alert_js__WEBPACK_IMPORTED_MODULE_15__["default"].errorFetchDataAlert(_context42.t1);

              case 19:
              case "end":
                return _context42.stop();
            }
          }
        }, _callee42, this, [[1, 16]]);
      }));

      function getExtraCharge() {
        return _getExtraCharge.apply(this, arguments);
      }

      return getExtraCharge;
    }(),
    getDataLookupExtraCharge: function () {
      var _getDataLookupExtraCharge = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee43() {
        var params, _ref34, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee43$(_context43) {
          while (1) {
            switch (_context43.prev = _context43.next) {
              case 0:
                params = {
                  q: this.vExtraCharge.sub_department_code
                };
                _context43.prev = 1;

                if (!this.isReservation) {
                  _context43.next = 8;
                  break;
                }

                _context43.next = 5;
                return rvExtraChargeResource.lookup(params);

              case 5:
                _context43.t0 = _context43.sent;
                _context43.next = 11;
                break;

              case 8:
                _context43.next = 10;
                return ghExtraChargeResource.lookup(params);

              case 10:
                _context43.t0 = _context43.sent;

              case 11:
                _ref34 = _context43.t0;
                data = _ref34.data;
                this.dlExtraCharge = data;
                this.modalChild = true;
                _context43.next = 20;
                break;

              case 17:
                _context43.prev = 17;
                _context43.t1 = _context43["catch"](1);
                _utils_alert_js__WEBPACK_IMPORTED_MODULE_15__["default"].errorFetchDataAlert(_context43.t1);

              case 20:
              case "end":
                return _context43.stop();
            }
          }
        }, _callee43, this, [[1, 17]]);
      }));

      function getDataLookupExtraCharge() {
        return _getDataLookupExtraCharge.apply(this, arguments);
      }

      return getDataLookupExtraCharge;
    }(),
    insertExtraCharge: function () {
      var _insertExtraCharge = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee44() {
        var _ref35, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee44$(_context44) {
          while (1) {
            switch (_context44.prev = _context44.next) {
              case 0:
                _context44.prev = 0;

                if (!this.isReservation) {
                  _context44.next = 7;
                  break;
                }

                _context44.next = 4;
                return rvExtraChargeResource.store(this.vExtraCharge);

              case 4:
                _context44.t0 = _context44.sent;
                _context44.next = 10;
                break;

              case 7:
                _context44.next = 9;
                return ghExtraChargeResource.store(this.vExtraCharge);

              case 9:
                _context44.t0 = _context44.sent;

              case 10:
                _ref35 = _context44.t0;
                data = _ref35.data;

                if (data == 0) {
                  this.$refs.extraCharge.refreshData();
                  _utils_alert_js__WEBPACK_IMPORTED_MODULE_15__["default"].acceptAlertSucces();
                } else if (data > 0) {
                  _utils_dialog_js__WEBPACK_IMPORTED_MODULE_14__["default"].information(this.$t('message.statusExtraCharge.' + data));
                }

                this.modalChild = false;
                this.$vs.loading.close('#layout--main>.con-vs-loading');
                _context44.next = 21;
                break;

              case 17:
                _context44.prev = 17;
                _context44.t1 = _context44["catch"](0);
                this.$vs.loading.close('#layout--main>.con-vs-loading');
                _utils_alert_js__WEBPACK_IMPORTED_MODULE_15__["default"].errorSaveDataAlert();

              case 21:
              case "end":
                return _context44.stop();
            }
          }
        }, _callee44, this, [[0, 17]]);
      }));

      function insertExtraCharge() {
        return _insertExtraCharge.apply(this, arguments);
      }

      return insertExtraCharge;
    }(),
    updateExtraCharge: function () {
      var _updateExtraCharge = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee45() {
        var _ref36, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee45$(_context45) {
          while (1) {
            switch (_context45.prev = _context45.next) {
              case 0:
                _context45.prev = 0;

                if (!this.isReservation) {
                  _context45.next = 7;
                  break;
                }

                _context45.next = 4;
                return rvExtraChargeResource.update(this.vExtraCharge);

              case 4:
                _context45.t0 = _context45.sent;
                _context45.next = 10;
                break;

              case 7:
                _context45.next = 9;
                return ghExtraChargeResource.update(this.vExtraCharge);

              case 9:
                _context45.t0 = _context45.sent;

              case 10:
                _ref36 = _context45.t0;
                data = _ref36.data;

                if (data == 0) {
                  this.$refs.extraCharge.refreshData();
                  _utils_alert_js__WEBPACK_IMPORTED_MODULE_15__["default"].acceptAlertSucces();
                } else if (data > 0) {
                  _utils_dialog_js__WEBPACK_IMPORTED_MODULE_14__["default"].information(this.$t('message.statusExtraCharge.' + data));
                }

                this.modalChild = false;
                this.$vs.loading.close('#layout--main>.con-vs-loading');
                _context45.next = 21;
                break;

              case 17:
                _context45.prev = 17;
                _context45.t1 = _context45["catch"](0);
                this.$vs.loading.close('#layout--main>.con-vs-loading');
                _utils_alert_js__WEBPACK_IMPORTED_MODULE_15__["default"].errorModifyingDataAlert();

              case 21:
              case "end":
                return _context45.stop();
            }
          }
        }, _callee45, this, [[0, 17]]);
      }));

      function updateExtraCharge() {
        return _updateExtraCharge.apply(this, arguments);
      }

      return updateExtraCharge;
    }(),
    deleteExtraCharge: function () {
      var _deleteExtraCharge = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee46(data) {
        var params, _ref37, _data2;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee46$(_context46) {
          while (1) {
            switch (_context46.prev = _context46.next) {
              case 0:
                params = {
                  q: data.id_log,
                  user_id: this.userInfo.code
                };
                this.$vs.loading({
                  container: '#layout--main',
                  scale: this.scaleLoadingMainLayout
                });
                _context46.prev = 2;

                if (!this.isReservation) {
                  _context46.next = 9;
                  break;
                }

                _context46.next = 6;
                return rvExtraChargeResource["delete"](params);

              case 6:
                _context46.t0 = _context46.sent;
                _context46.next = 12;
                break;

              case 9:
                _context46.next = 11;
                return ghExtraChargeResource["delete"](params);

              case 11:
                _context46.t0 = _context46.sent;

              case 12:
                _ref37 = _context46.t0;
                _data2 = _ref37.data;
                this.$refs.extraCharge.refreshData();
                this.$vs.loading.close('#layout--main>.con-vs-loading');
                _utils_alert_js__WEBPACK_IMPORTED_MODULE_15__["default"].deleteAlertSuccess();
                _context46.next = 23;
                break;

              case 19:
                _context46.prev = 19;
                _context46.t1 = _context46["catch"](2);
                this.$vs.loading.close('#layout--main>.con-vs-loading');
                _utils_alert_js__WEBPACK_IMPORTED_MODULE_15__["default"].errorDeleteDataAlert();

              case 23:
              case "end":
                return _context46.stop();
            }
          }
        }, _callee46, this, [[2, 19]]);
      }));

      function deleteExtraCharge(_x30) {
        return _deleteExtraCharge.apply(this, arguments);
      }

      return deleteExtraCharge;
    }(),
    editExtraCharge: function () {
      var _editExtraCharge = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee47(id) {
        var _ref38, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee47$(_context47) {
          while (1) {
            switch (_context47.prev = _context47.next) {
              case 0:
                this.$vs.loading({
                  container: '#layout--main',
                  scale: this.scaleLoadingMainLayout
                });
                _context47.prev = 1;

                if (!this.isReservation) {
                  _context47.next = 8;
                  break;
                }

                _context47.next = 5;
                return rvExtraChargeResource.get(id.id_log);

              case 5:
                _context47.t0 = _context47.sent;
                _context47.next = 11;
                break;

              case 8:
                _context47.next = 10;
                return ghExtraChargeResource.get(id.id_log);

              case 10:
                _context47.t0 = _context47.sent;

              case 11:
                _ref38 = _context47.t0;
                data = _ref38.data;
                this.vExtraCharge = data;
                this.getDataLookupExtraCharge();
                this.$vs.loading.close('#layout--main>.con-vs-loading');
                _context47.next = 22;
                break;

              case 18:
                _context47.prev = 18;
                _context47.t1 = _context47["catch"](1);
                this.$vs.loading.close('#layout--main>.con-vs-loading');
                _utils_alert_js__WEBPACK_IMPORTED_MODULE_15__["default"].errorFetchDataAlert(_context47.t1);

              case 22:
              case "end":
                return _context47.stop();
            }
          }
        }, _callee47, this, [[1, 18]]);
      }));

      function editExtraCharge(_x31) {
        return _editExtraCharge.apply(this, arguments);
      }

      return editExtraCharge;
    }(),
    showExtraChargeForm: function () {
      var _showExtraChargeForm = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee48(data, mode) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee48$(_context48) {
          while (1) {
            switch (_context48.prev = _context48.next) {
              case 0:
                this.modeExtraCharge = mode;
                this.resetExtraCharge();

                if (!(mode == this.modeData.insert)) {
                  _context48.next = 8;
                  break;
                }

                _context48.next = 5;
                return this.getDataLookupExtraCharge();

              case 5:
                this.modalChildTitle = 'Insert Extra Charge';
                _context48.next = 11;
                break;

              case 8:
                _context48.next = 10;
                return this.editExtraCharge(data);

              case 10:
                this.modalChildTitle = 'Update Extra Charge';

              case 11:
              case "end":
                return _context48.stop();
            }
          }
        }, _callee48, this);
      }));

      function showExtraChargeForm(_x32, _x33) {
        return _showExtraChargeForm.apply(this, arguments);
      }

      return showExtraChargeForm;
    }(),
    resetExtraCharge: function resetExtraCharge() {
      this.vExtraCharge = {
        number: this.isReservation ? this.reservationNumber : this.folioNumber,
        amount: 0,
        quantity: 1,
        per_pax: false,
        extra_pax: 0,
        per_pax_extra: false,
        max_pax: 1,
        sub_department_code: 'FRON',
        charge_frequency_code: '1',
        user_id: this.userInfo.code
      };
      this.resetOptionsChange = false;
      this.btnExtraChargeSaveDisabled = false;
    },
    handleSaveExtraCharge: function handleSaveExtraCharge() {
      var _this13 = this;

      this.$validator.validateAll('extraCharge').then(function (result) {
        if (result) {
          _this13.btnExtraChargeSaveDisabled = true;

          _this13.$vs.loading({
            container: '#layout--main',
            scale: _this13.scaleLoadingMainLayout
          });

          if (_this13.modeExtraCharge == _this13.modeData.insert) {
            _this13.insertExtraCharge();
          } else {
            _this13.updateExtraCharge();
          }
        } else {
          _utils_alert_js__WEBPACK_IMPORTED_MODULE_15__["default"].inputRequiredAlert();
        }
      });
    },
    //------------------END CRUD EXTRA CHARGE-------------------------------//
    //----------------START CRUD MOVE ROOM ------------------//
    handleMoveRoom: function () {
      var _handleMoveRoom = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee49() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee49$(_context49) {
          while (1) {
            switch (_context49.prev = _context49.next) {
              case 0:
                this.$vs.loading({
                  container: '#layout--main',
                  scale: this.scaleLoadingMainLayout
                });
                _context49.next = 3;
                return this.editGuestInHouse(this.paramsData);

              case 3:
                this.resetMoveRoom();
                this.getDataLookUp();
                this.vMoveRoom.current_weekday = this.vModel.weekday_rate;
                this.vMoveRoom.current_weekend = this.vModel.weekend_rate;
                this.$vs.loading.close('#layout--main>.con-vs-loading');
                this.modalMoveRoom = true;

              case 9:
              case "end":
                return _context49.stop();
            }
          }
        }, _callee49, this);
      }));

      function handleMoveRoom() {
        return _handleMoveRoom.apply(this, arguments);
      }

      return handleMoveRoom;
    }(),
    handleSaveMoveRoom: function handleSaveMoveRoom() {
      var _this14 = this;

      this.$validator.validateAll('moveRoom').then(function (result) {
        if (result) {
          _this14.$vs.loading({
            container: '#button-save-move',
            scale: _this14.scaleLoadingButton
          });

          _this14.moveRoom(_this14.vMoveRoom);
        } else {
          _utils_alert_js__WEBPACK_IMPORTED_MODULE_15__["default"].inputRequiredAlert();
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
        guest_detail_id: this.vModel.guest_detail_id,
        new_room_number: null,
        old_room_number: this.vModel.room_number,
        room_type_code: '',
        bed_type_code: '',
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
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee50(data) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee50$(_context50) {
          while (1) {
            switch (_context50.prev = _context50.next) {
              case 0:
                _context50.prev = 0;
                _context50.next = 3;
                return guestInHouseResource.moveRoom(data);

              case 3:
                this.modalMoveRoom = false;
                this.refreshData(this.search);
                this.$vs.loading.close('#button-save-move>.con-vs-loading');
                _utils_alert_js__WEBPACK_IMPORTED_MODULE_15__["default"].acceptAlertSucces();
                _context50.next = 13;
                break;

              case 9:
                _context50.prev = 9;
                _context50.t0 = _context50["catch"](0);
                this.$vs.loading.close('#button-save-move>.con-vs-loading');
                _utils_alert_js__WEBPACK_IMPORTED_MODULE_15__["default"].errorSaveDataAlert();

              case 13:
              case "end":
                return _context50.stop();
            }
          }
        }, _callee50, this, [[0, 9]]);
      }));

      function moveRoom(_x34) {
        return _moveRoom.apply(this, arguments);
      }

      return moveRoom;
    }(),
    //----------------END CRUD MOVE ROOM------------------//
    //----------------START CRUD SWITCH ROOM ------------------//
    handleSwitchRoom: function () {
      var _handleSwitchRoom = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee51() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee51$(_context51) {
          while (1) {
            switch (_context51.prev = _context51.next) {
              case 0:
                this.$vs.loading({
                  container: '#layout--main',
                  scale: this.scaleLoadingMainLayout
                });
                this.resetSwitchRoom();
                _context51.next = 4;
                return this.getSwitchRoomList();

              case 4:
                this.vSwitchRoom.user_id = this.userInfo.code;
                this.vMoveRoom.current_weekday = this.vModel.weekday_rate;
                this.vMoveRoom.current_weekend = this.vModel.weekend_rate;
                this.$vs.loading.close('#layout--main>.con-vs-loading');
                this.modalSwitchRoom = true;

              case 9:
              case "end":
                return _context51.stop();
            }
          }
        }, _callee51, this);
      }));

      function handleSwitchRoom() {
        return _handleSwitchRoom.apply(this, arguments);
      }

      return handleSwitchRoom;
    }(),
    handleSaveSwitchRoom: function handleSaveSwitchRoom() {
      if (this.vSwitchRoom.guest_detail_id_to) {
        this.$vs.loading({
          container: '#button-save-switch',
          scale: this.scaleLoadingButton
        });
        this.switchRoom(this.vSwitchRoom);
      } else {
        this.$vs.dialog({
          color: 'warning',
          title: this.$t('message.informationTitle'),
          text: this.$t('message.selectSwitchRoom')
        });
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
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee52() {
        var params, _ref39, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee52$(_context52) {
          while (1) {
            switch (_context52.prev = _context52.next) {
              case 0:
                _context52.prev = 0;
                params = {
                  number: this.folioNumber
                };
                _context52.next = 4;
                return guestInHouseResource.listSwitchRoom(params);

              case 4:
                _ref39 = _context52.sent;
                data = _ref39.data;
                this.vSwitchRoom = data.from;
                this.switchRooms = data.to;
                _context52.next = 13;
                break;

              case 10:
                _context52.prev = 10;
                _context52.t0 = _context52["catch"](0);
                _utils_alert_js__WEBPACK_IMPORTED_MODULE_15__["default"].errorFetchDataAlert(_context52.t0);

              case 13:
              case "end":
                return _context52.stop();
            }
          }
        }, _callee52, this, [[0, 10]]);
      }));

      function getSwitchRoomList() {
        return _getSwitchRoomList.apply(this, arguments);
      }

      return getSwitchRoomList;
    }(),
    switchRoom: function () {
      var _switchRoom = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee53(data) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee53$(_context53) {
          while (1) {
            switch (_context53.prev = _context53.next) {
              case 0:
                _context53.prev = 0;
                _context53.next = 3;
                return guestInHouseResource.switchRoom(data);

              case 3:
                this.modalSwitchRoom = false;
                this.refreshData(this.search);
                this.$vs.loading.close('#button-save-switch>.con-vs-loading');
                _utils_alert_js__WEBPACK_IMPORTED_MODULE_15__["default"].acceptAlertSucces();
                _context53.next = 13;
                break;

              case 9:
                _context53.prev = 9;
                _context53.t0 = _context53["catch"](0);
                this.$vs.loading.close('#button-save-switch>.con-vs-loading');
                _utils_alert_js__WEBPACK_IMPORTED_MODULE_15__["default"].errorSaveDataAlert();

              case 13:
              case "end":
                return _context53.stop();
            }
          }
        }, _callee53, this, [[0, 9]]);
      }));

      function switchRoom(_x35) {
        return _switchRoom.apply(this, arguments);
      }

      return switchRoom;
    }(),
    //----------------END CRUD SWITCH ROOM------------------//
    //----------------START COMPLIMENT HOUSE USE---------------//
    handleComplimentHu: function () {
      var _handleComplimentHu = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee54(status) {
        var data;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee54$(_context54) {
          while (1) {
            switch (_context54.prev = _context54.next) {
              case 0:
                _context54.next = 2;
                return this.editGuestInHouse(this.paramsData);

              case 2:
                if (this.vModel.compliment_hu == status) {
                  status = null;
                }

                data = {
                  number: this.folioNumber,
                  compliment_hu: status,
                  user_id: this.userInfo.code
                };
                this.setComplimentHu(data);

              case 5:
              case "end":
                return _context54.stop();
            }
          }
        }, _callee54, this);
      }));

      function handleComplimentHu(_x36) {
        return _handleComplimentHu.apply(this, arguments);
      }

      return handleComplimentHu;
    }(),
    setComplimentHu: function () {
      var _setComplimentHu = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee55(data) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee55$(_context55) {
          while (1) {
            switch (_context55.prev = _context55.next) {
              case 0:
                _context55.next = 2;
                return guestInHouseResource.complimentHu(data);

              case 2:
                this.sidebarOption = false;
                this.refreshData(this.search);

              case 4:
              case "end":
                return _context55.stop();
            }
          }
        }, _callee55, this);
      }));

      function setComplimentHu(_x37) {
        return _setComplimentHu.apply(this, arguments);
      }

      return setComplimentHu;
    }(),
    //----------------END COMPLIMENT HOUSE USE-----------------//
    //----------------START LOCK FOLIO---------------//
    handleLockFolio: function () {
      var _handleLockFolio = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee56(value) {
        var _this15 = this;

        var data;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee56$(_context56) {
          while (1) {
            switch (_context56.prev = _context56.next) {
              case 0:
                _context56.next = 2;
                return this.editGuestInHouse(this.paramsData);

              case 2:
                if (this.vModel.is_lock == value) {
                  value = '0';
                }

                data = {
                  number: this.folioNumber,
                  is_lock: value,
                  user_id: this.userInfo.code
                };
                this.$vs.dialog({
                  color: 'warning',
                  title: this.$t('message.confirmTitle'),
                  text: this.$t('message.confirmation'),
                  accept: function accept() {
                    _this15.lockFolio(data);
                  }
                });

              case 5:
              case "end":
                return _context56.stop();
            }
          }
        }, _callee56, this);
      }));

      function handleLockFolio(_x38) {
        return _handleLockFolio.apply(this, arguments);
      }

      return handleLockFolio;
    }(),
    lockFolio: function () {
      var _lockFolio = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee57(data) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee57$(_context57) {
          while (1) {
            switch (_context57.prev = _context57.next) {
              case 0:
                _context57.next = 2;
                return guestInHouseResource.lock(data);

              case 2:
                this.sidebarOption = false;
                this.refreshData(this.search);

              case 4:
              case "end":
                return _context57.stop();
            }
          }
        }, _callee57, this);
      }));

      function lockFolio(_x39) {
        return _lockFolio.apply(this, arguments);
      }

      return lockFolio;
    }(),
    //----------------END LOCK FOLIO-----------------//
    //----------------START INCOGNITO---------------//
    handleIncognito: function () {
      var _handleIncognito = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee58(value) {
        var _this16 = this;

        var data;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee58$(_context58) {
          while (1) {
            switch (_context58.prev = _context58.next) {
              case 0:
                _context58.next = 2;
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
                this.$vs.dialog({
                  color: 'warning',
                  title: this.$t('message.confirmTitle'),
                  text: this.$t('message.confirmation'),
                  accept: function accept() {
                    _this16.setIncognito(data);
                  }
                });

              case 5:
              case "end":
                return _context58.stop();
            }
          }
        }, _callee58, this);
      }));

      function handleIncognito(_x40) {
        return _handleIncognito.apply(this, arguments);
      }

      return handleIncognito;
    }(),
    setIncognito: function () {
      var _setIncognito = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee59(data) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee59$(_context59) {
          while (1) {
            switch (_context59.prev = _context59.next) {
              case 0:
                _context59.next = 2;
                return guestInHouseResource.incognito(data);

              case 2:
                this.sidebarOption = false;
                this.refreshData(this.search);

              case 4:
              case "end":
                return _context59.stop();
            }
          }
        }, _callee59, this);
      }));

      function setIncognito(_x41) {
        return _setIncognito.apply(this, arguments);
      }

      return setIncognito;
    }(),
    //----------------END INCOGNITO-----------------//
    //----------------START CANCEL CHECK IN---------------//
    handleCancelCheckIn: function () {
      var _handleCancelCheckIn = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee60() {
        var _this17 = this;

        var date, data;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee60$(_context60) {
          while (1) {
            switch (_context60.prev = _context60.next) {
              case 0:
                _context60.next = 2;
                return this.editGuestInHouse(this.paramsData);

              case 2:
                date = new Date();

                if (Object(_utils_format_js__WEBPACK_IMPORTED_MODULE_30__["formatDateDatabase"])(this.vModel.arrival) == this.auditDate) {
                  data = {
                    number: this.folioNumber,
                    departure: Object(_utils_format_js__WEBPACK_IMPORTED_MODULE_30__["formatDateTimeDatabase"])(this.auditDate + ' ' + Object(_utils_format_js__WEBPACK_IMPORTED_MODULE_30__["formatTimeValue"])(date)),
                    cancel_by: this.userInfo.code,
                    user_id: this.userInfo.code
                  };
                  this.$vs.dialog({
                    color: 'warning',
                    title: this.$t('message.confirmTitle'),
                    text: this.$t('message.confirmation'),
                    accept: function accept() {
                      _this17.cancelCheckIn(data);
                    }
                  });
                } else {
                  this.$vs.dialog({
                    color: 'warning',
                    title: this.$t('message.informationTitle'),
                    text: this.$t('message.canNotCancelCheckIn')
                  });
                }

              case 4:
              case "end":
                return _context60.stop();
            }
          }
        }, _callee60, this);
      }));

      function handleCancelCheckIn() {
        return _handleCancelCheckIn.apply(this, arguments);
      }

      return handleCancelCheckIn;
    }(),
    cancelCheckIn: function () {
      var _cancelCheckIn = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee61(data) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee61$(_context61) {
          while (1) {
            switch (_context61.prev = _context61.next) {
              case 0:
                _context61.next = 2;
                return guestInHouseResource.cancelCheckIn(data);

              case 2:
                this.sidebarOption = false;
                this.refreshData(this.search);

              case 4:
              case "end":
                return _context61.stop();
            }
          }
        }, _callee61, this);
      }));

      function cancelCheckIn(_x42) {
        return _cancelCheckIn.apply(this, arguments);
      }

      return cancelCheckIn;
    }(),
    //----------------END COMPLIMENT HOUSE USE-----------------//
    //----------------START OTHER OPTION------------------//
    //use on Check In Reservation Dayend close Solution
    handleCheckIn: function () {
      var _handleCheckIn = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee62(paramsData) {
        var status, selected;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee62$(_context62) {
          while (1) {
            switch (_context62.prev = _context62.next) {
              case 0:
                this.paramsData = paramsData ? paramsData : this.paramsData;
                this.reservationNumber = paramsData.reservation_number;
                this.sidebarOption = false;
                status = {};
                selected = '';

                if (!this.groupCheckIn) {
                  _context62.next = 28;
                  break;
                }

                if (!paramsData) {
                  _context62.next = 10;
                  break;
                }

                _context62.next = 9;
                return this.gridApi.getSelectedRows();

              case 9:
                selected = _context62.sent;

              case 10:
                _context62.next = 12;
                return this.getReservationNumber(selected);

              case 12:
                if (!(this.search.group && this.reservationNumberList.length > 0)) {
                  _context62.next = 25;
                  break;
                }

                this.$vs.loading({
                  container: '#layout--main',
                  scale: this.scaleLoadingMainLayout
                });
                _context62.next = 16;
                return this.getFolioList(this.mFolioType.masterFolio, null);

              case 16:
                this.getLookupDeposit();
                this.getRoutingAccount();
                this.getMasterFolio(); //set master folio group exist

                _context62.next = 21;
                return this.getReservationGroupList();

              case 21:
                this.$refs.groupCheckInForm.resetRouting();
                this.modalGroupCheckIn = true;
                _context62.next = 26;
                break;

              case 25:
                _utils_dialog_js__WEBPACK_IMPORTED_MODULE_14__["default"].selectField();

              case 26:
                _context62.next = 32;
                break;

              case 28:
                _context62.next = 30;
                return this.getReservationStatus();

              case 30:
                status = _context62.sent;

                if (status.room_number == '') {
                  this.$vs.dialog({
                    color: 'danger',
                    title: 'Warning',
                    text: 'Please assign room first'
                  });
                } else if (status.room_status !== this.roomStatus.ready) {
                  this.$vs.dialog({
                    color: 'danger',
                    title: 'Warning',
                    text: 'Room ' + status.room_number + ' not Ready'
                  });
                } else {
                  this.showForm(this.paramsData, this.modeData.edit, true, this.reservationStatus.checkIn);
                }

              case 32:
              case "end":
                return _context62.stop();
            }
          }
        }, _callee62, this);
      }));

      function handleCheckIn(_x43) {
        return _handleCheckIn.apply(this, arguments);
      }

      return handleCheckIn;
    }(),
    //UNSET WAITLIST ON DAYEND CLOSED
    unsetWaitList: function () {
      var _unsetWaitList = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee63(reservationNumber) {
        var params, _ref40, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee63$(_context63) {
          while (1) {
            switch (_context63.prev = _context63.next) {
              case 0:
                params = {
                  number: reservationNumber,
                  user_id: this.userInfo.code
                };
                _context63.prev = 1;
                _context63.next = 4;
                return reservationResource.unsetWaitList(params);

              case 4:
                _ref40 = _context63.sent;
                data = _ref40.data;

                if (data == 0) {
                  if (this.isDayendClose) {
                    this.precheck();
                  }

                  _utils_alert_js__WEBPACK_IMPORTED_MODULE_15__["default"].acceptAlertSucces();
                } else if (data > 0) {
                  _utils_dialog_js__WEBPACK_IMPORTED_MODULE_14__["default"].information(this.$t('message.statusWaitList.' + data));
                }

                this.$vs.loading.close('#layout--main>.con-vs-loading');
                _context63.next = 13;
                break;

              case 10:
                _context63.prev = 10;
                _context63.t0 = _context63["catch"](1);
                _utils_alert_js__WEBPACK_IMPORTED_MODULE_15__["default"].errorSaveDataAlert();

              case 13:
              case "end":
                return _context63.stop();
            }
          }
        }, _callee63, this, [[1, 10]]);
      }));

      function unsetWaitList(_x44) {
        return _unsetWaitList.apply(this, arguments);
      }

      return unsetWaitList;
    }(),
    //AUTO ASIGN ON DAYEND CLOSED
    autoAssignRoom: function () {
      var _autoAssignRoom = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee64(status, reservationNumber) {
        var params, _ref41, data, message;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee64$(_context64) {
          while (1) {
            switch (_context64.prev = _context64.next) {
              case 0:
                params = {
                  ready: status,
                  // 0=>all, 1=>ready
                  reservation_number: reservationNumber,
                  user_id: this.userInfo.code
                };
                _context64.prev = 1;
                _context64.next = 4;
                return reservationResource.autoAssignRoom(params);

              case 4:
                _ref41 = _context64.sent;
                data = _ref41.data;
                this.$vs.loading.close('#layout--main>.con-vs-loading');

                if (data == 0) {
                  _utils_alert_js__WEBPACK_IMPORTED_MODULE_15__["default"].acceptAlertSucces();
                } else if (data > 0) {
                  _utils_dialog_js__WEBPACK_IMPORTED_MODULE_14__["default"].information(this.$t('messages.statusAutoAssignRoom.' + data));
                }

                if (this.isDayendClose) {
                  this.precheck();
                }

                _context64.next = 17;
                break;

              case 11:
                _context64.prev = 11;
                _context64.t0 = _context64["catch"](1);
                message = _context64.t0.response.data.errors;
                this.dbErrors = message == undefined ? '' : message;
                _utils_alert_js__WEBPACK_IMPORTED_MODULE_15__["default"].errorSaveDataAlert(message);
                this.$vs.loading.close('#layout--main>.con-vs-loading');

              case 17:
              case "end":
                return _context64.stop();
            }
          }
        }, _callee64, this, [[1, 11]]);
      }));

      function autoAssignRoom(_x45, _x46) {
        return _autoAssignRoom.apply(this, arguments);
      }

      return autoAssignRoom;
    }(),
    getReservationStatus: function () {
      var _getReservationStatus = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee65() {
        var _ref42, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee65$(_context65) {
          while (1) {
            switch (_context65.prev = _context65.next) {
              case 0:
                _context65.next = 2;
                return reservationResource.reservationStatus(this.reservationNumber);

              case 2:
                _ref42 = _context65.sent;
                data = _ref42.data;
                return _context65.abrupt("return", data);

              case 5:
              case "end":
                return _context65.stop();
            }
          }
        }, _callee65, this);
      }));

      function getReservationStatus() {
        return _getReservationStatus.apply(this, arguments);
      }

      return getReservationStatus;
    }(),
    checkInDataReservation: function () {
      var _checkInDataReservation = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee66() {
        var params, _ref43, data, message;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee66$(_context66) {
          while (1) {
            switch (_context66.prev = _context66.next) {
              case 0:
                this.$validator.validateAll(this.scope1).then(function (result) {
                  if (!result) {
                    _utils_alert_js__WEBPACK_IMPORTED_MODULE_15__["default"].inputRequiredAlert();
                    return;
                  }
                });
                params = {
                  reservation_number: this.reservationNumber,
                  status_code: this.reservationStatus.checkIn,
                  user_id: this.userInfo.code
                };
                this.$vs.loading({
                  container: '#button-checkin',
                  scale: this.scaleLoadingButton
                });
                this.updateReservation(this.vModel);
                _context66.prev = 4;
                _context66.next = 7;
                return reservationResource.checkIn(params);

              case 7:
                _ref43 = _context66.sent;
                data = _ref43.data;
                this.$vs.loading.close('#button-checkin>.con-vs-loading');

                if (!(data > 0)) {
                  _context66.next = 14;
                  break;
                }

                _utils_dialog_js__WEBPACK_IMPORTED_MODULE_14__["default"].statusCheckInReservation(this.$t('message.statusCheckInReservation.' + data));
                _context66.next = 19;
                break;

              case 14:
                this.modalMain = false;

                if (!this.isDayendClose) {
                  _context66.next = 18;
                  break;
                }

                this.precheck();
                return _context66.abrupt("return");

              case 18:
                _utils_dialog_js__WEBPACK_IMPORTED_MODULE_14__["default"].information('Reservation successfully Check-In,\n Folio No. : #' + data.folio_number + ',\n Room No. : #' + data.room_number);

              case 19:
                _context66.next = 27;
                break;

              case 21:
                _context66.prev = 21;
                _context66.t0 = _context66["catch"](4);
                message = _context66.t0.response.data.errors;
                this.dbErrors = message == undefined ? '' : message;
                this.$vs.loading.close('#button-checkin>.con-vs-loading');
                _utils_alert_js__WEBPACK_IMPORTED_MODULE_15__["default"].errorSaveDataAlert(message);

              case 27:
              case "end":
                return _context66.stop();
            }
          }
        }, _callee66, this, [[4, 21]]);
      }));

      function checkInDataReservation() {
        return _checkInDataReservation.apply(this, arguments);
      }

      return checkInDataReservation;
    }(),
    addZeroHour: function addZeroHour(i) {
      if (i < 10) {
        i = "0" + i;
      }

      return i;
    },
    handleChangeNight: function handleChangeNight() {
      if (this.nights > 0) {
        var departure = new Date(this.vModel.arrival);
        var time = new Date(this.vModel.departure);
        var h = this.addZeroHour(time.getHours());
        var m = this.addZeroHour(time.getMinutes());
        var s = this.addZeroHour(time.getSeconds());
        var times = h + ':' + m + ':' + s;
        var arrivalDate = new Date(this.vModel.arrival).getDate();
        var departureDate = parseInt(arrivalDate) + parseInt(this.nights);
        departure.setDate(departureDate);
        departure = Object(_utils_format_js__WEBPACK_IMPORTED_MODULE_30__["formatDateDatabase"])(departure);

        if (departure >= this.auditDate) {
          this.vModel.departure = Object(_utils_format_js__WEBPACK_IMPORTED_MODULE_30__["formatDateTimeDatabase"])(departure + ' ' + times);
        } else {
          this.getTotalDays();
        }
      }
    },
    //PRINT
    handlePrint: function handlePrint(id, reportDirectory) {
      var newTabReport = this.$router.resolve({
        path: '/report/preview?reportId=' + this.mReportId.receiptDeposit + '&guestDepositId=' + id + '&template=' + reportDirectory
      });
      window.open(newTabReport.href, '_blank');
    },
    handlePrintReceipt: function handlePrintReceipt(paramsData) {
      if (paramsData !== undefined) {
        if (paramsData.isPayment == "-1") {
          this.handlePrint(paramsData.id_log, this.mStimulsoftReportFileDirectory.receiptDeposit);
        } else if (paramsData.isPayment == "0") {
          this.handlePrint(paramsData.id_log, this.mStimulsoftReportFileDirectory.receiptDepositRefund);
        }
      }
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
    getTotalDays: function getTotalDays() {
      var date1 = new Date(Object(_utils_format_js__WEBPACK_IMPORTED_MODULE_30__["formatDateDatabase"])(this.vModel.arrival)).getTime();
      var date2 = new Date(Object(_utils_format_js__WEBPACK_IMPORTED_MODULE_30__["formatDateDatabase"])(this.vModel.departure)).getTime();
      var auditDate = new Date(this.auditDate).getTime();

      if (date1 >= date2) {
        this.vModel.departure = this.departureResv2;
      }

      if (date1 < auditDate && this.modeDataValue === this.modeData.insert) {
        this.vModel.arrival = Object(_utils_format_js__WEBPACK_IMPORTED_MODULE_30__["formatDateTimeDatabase"])(this.auditDate + ' ' + this.checkInTime);
      }

      var date3 = new Date(Object(_utils_format_js__WEBPACK_IMPORTED_MODULE_30__["formatDateDatabase"])(this.vModel.arrival));
      var date4 = new Date(Object(_utils_format_js__WEBPACK_IMPORTED_MODULE_30__["formatDateDatabase"])(this.vModel.departure)); // To calculate the time difference of two dates

      var Difference_In_Time = date4.getTime() - date3.getTime(); // To calculate the no. of days between two dates

      var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24); // restrict negatif departure

      this.nights = Difference_In_Days;
    },
    resetDate: function resetDate() {
      this.vModel.arrival = Object(_utils_format_js__WEBPACK_IMPORTED_MODULE_30__["formatDateTimeDatabase"])(this.auditDate + ' ' + this.checkInTime), this.vModel.departure = this.departureResv, this.nights = 1;
    },
    onInputChange: function () {
      var _onInputChange = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee67(query) {
        var _ref44, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee67$(_context67) {
          while (1) {
            switch (_context67.prev = _context67.next) {
              case 0:
                if (!(query.trim().length < 2)) {
                  _context67.next = 4;
                  break;
                }

                return _context67.abrupt("return", '');

              case 4:
                _context67.next = 6;
                return guestProfileResource.guestProfile({
                  q: query
                });

              case 6:
                _ref44 = _context67.sent;
                data = _ref44.data;
                return _context67.abrupt("return", data);

              case 9:
              case "end":
                return _context67.stop();
            }
          }
        }, _callee67);
      }));

      function onInputChange(_x47) {
        return _onInputChange.apply(this, arguments);
      }

      return onInputChange;
    }(),
    onSearchItemSelected: function () {
      var _onSearchItemSelected = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee68(item) {
        var params, _ref45, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee68$(_context68) {
          while (1) {
            switch (_context68.prev = _context68.next) {
              case 0:
                params = item.id_log;
                _context68.next = 3;
                return guestProfileResource.detail({
                  q: params
                });

              case 3:
                _ref45 = _context68.sent;
                data = _ref45.data;
                this.vModel.title_code = data.title_code;
                this.vModel.full_name = data.full_name;
                this.vModel.street = data.street;
                this.vModel.country_code = data.country_code;
                this.vModel.state_code = data.state_code;
                this.vModel.city_code = data.city_code;
                this.vModel.city = data.city;
                this.vModel.nationality_code = data.nationality_code;
                this.vModel.postal_code = data.postal_code;
                this.vModel.phone1 = data.phone1;
                this.vModel.phone2 = data.phone2;
                this.vModel.fax = data.fax;
                this.vModel.email = data.email;
                this.vModel.website = data.website;
                this.vModel.company_code = data.company_code;
                this.vModel.guest_type_code = data.guest_type_code;
                this.vModel.id_card_code = data.id_card_code;
                this.vModel.id_card_number = data.id_card_number;
                this.vModel.is_male = data.is_male;
                this.vModel.birth_place = data.birth_place;
                this.vModel.birth_date = data.birth_date === '0000-00-00' ? null : data.birth_date;
                this.vModel.birth_date = data.birth_date;
                this.vModel.guest_profile_id = item.id_log;
                return _context68.abrupt("return", data);

              case 29:
              case "end":
                return _context68.stop();
            }
          }
        }, _callee68, this);
      }));

      function onSearchItemSelected(_x48) {
        return _onSearchItemSelected.apply(this, arguments);
      }

      return onSearchItemSelected;
    }(),
    resetGuestInformationDetail: function resetGuestInformationDetail() {
      this.vModel.title_code = null;
      this.vModel.full_name = null;
      this.vModel.street = null;
      this.vModel.country_code = null;
      this.vModel.state_code = null;
      this.vModel.city_code = null;
      this.vModel.city = null;
      this.vModel.nationality_code = null;
      this.vModel.postal_code = null;
      this.vModel.phone1 = null;
      this.vModel.phone2 = null;
      this.vModel.fax = null;
      this.vModel.email = null;
      this.vModel.website = null;
      this.vModel.company_code = null;
      this.vModel.guest_type_code = null;
      this.vModel.id_card_code = null;
      this.vModel.id_card_number = null;
      this.vModel.is_male = '-1';
      this.vModel.birth_place = null;
      this.vModel.birth_date = null;
      this.vModel.birth_date = null;
      this.vModel.guest_profile_id = null;
    },
    //------------------end need setting manual for crud-----------------//
    //--------------------CREDENTIAL----------------------------------------//
    showCredential: function showCredential(val, isCorrection) {
      this.resetCredential();
      this.paramsData = val;
      this.isCorrection = isCorrection;
      this.activeCredentialPrompt = true;
      this.isCredential = true;
      this.isReason = true;
      this.idLog = val.id_log;
      this.reservationNumber = val.reservation_number;
      this.credentialTitle = isCorrection ? 'Correction Deposit ID: ' + val.id_log : 'Void Deposit ID: ' + val.id_log;
      this.specialAccessType = isCorrection ? this.accessSpecialOrder.correctDeposit : this.accessSpecialOrder.voidDeposit;
    },
    //SHOW CREDENTIAL ACCESS
    showCredential2: function showCredential2(val, isCredential, isReason, specialAccessType, title) {
      this.resetCredential();
      this.paramsData = val;
      this.activeCredentialPrompt = true;
      this.isCredential = isCredential;
      this.credentialTitle = title ? title : 'Credential';
      this.specialAccessType = specialAccessType;
      this.isReason = isReason;
    },
    acceptReason: function acceptReason() {
      var _this18 = this;

      if (this.specialAccessType === this.accessSpecialOrder.overrideRateDiscount) {
        if (this.isReservation) {
          setTimeout(function () {
            _this18.handleSaveReservation3();
          }, 100);
        } else {
          setTimeout(function () {
            _this18.handleSaveGuestInHouse3();
          }, 100);
        }
      } else if (this.specialAccessType === this.accessSpecialOrder.businessSource) {
        if (this.isReservation) {
          this.updateReservation(this.vModel);
        } else {
          this.updateGuestInHouse(this.vModel);
        }
      } else if (this.specialAccessType === this.accessSpecialOrder.correctDeposit || this.specialAccessType === this.accessSpecialOrder.voidDeposit) {
        this.correctionVoid();
      }
    },
    resetCredential: function resetCredential() {
      this.credential = {
        user: '',
        pass: '',
        reason: ''
      };
    },
    closedCredential: function closedCredential() {
      this.btnMainSaveDisabled = false;
      this.$vs.loading.close('#button-save-main-form>.con-vs-loading');
    },
    back: function back() {
      if (this.modalChild) {
        this.modalChild = false;
      } else if (this.modalScheduledRate) {
        this.modalScheduledRate = false;
      } else if (this.modalPaymentOption) {
        this.modalPaymentOption = false;
      } else {
        this.modalMain = false;
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
    account: function account() {
      if (this.account !== null) {
        this.vDeposit.account_code = this.account.code;
        this.vDeposit.charge_percent = this.account.charge_percent;
        this.getTotalAmount();
      }
    },
    modalPreventClose: function modalPreventClose() {
      this.modalPreventClose = this.modalMain;
    },
    modalMain: function () {
      var _modalMain = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee69() {
        var data;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee69$(_context69) {
          while (1) {
            switch (_context69.prev = _context69.next) {
              case 0:
                this.modalPreventClose = this.modalMain;

                if (!(!this.modalMain && this.modeDataValue == this.modeData.edit && this.isReservation)) {
                  _context69.next = 6;
                  break;
                }

                _context69.next = 4;
                return this.getReservationStatus();

              case 4:
                data = _context69.sent;

                if (data.reservation_status !== this.reservationStatus["new"] && data.reservation_status !== this.reservationStatus.waitlist) {
                  if (data.balance.balance < 0 || data.balance.balance > 0) {
                    this.modalMain = true;
                    this.$vs.dialog({
                      color: 'danger',
                      title: this.$t('message.informationTitle'),
                      text: 'Deposit reservation must have zero balance',
                      acceptText: 'OK',
                      accept: function accept() {
                        document.getElementById('deposit').click();
                      }
                    });
                  }
                }

              case 6:
                if (!this.modalMain) {
                  this.refreshData(this.search);
                }

              case 7:
              case "end":
                return _context69.stop();
            }
          }
        }, _callee69, this);
      }));

      function modalMain() {
        return _modalMain.apply(this, arguments);
      }

      return modalMain;
    }()
  },
  computed: {
    userValidation: function userValidation() {
      return this.credential.user.length > 0 && this.credential.pass.length > 0;
    },
    departureResv: function departureResv() {
      var departure = new Date(Object(_utils_format_js__WEBPACK_IMPORTED_MODULE_30__["formatDateTimeDatabase"])(this.auditDate + ' ' + this.checkOutLimit));
      departure.setDate(departure.getDate() + 1);
      return Object(_utils_format_js__WEBPACK_IMPORTED_MODULE_30__["formatDateTimeDatabase"])(departure);
    },
    departureResv2: function departureResv2() {
      var arrival = Object(_utils_format_js__WEBPACK_IMPORTED_MODULE_30__["formatDateDatabase"])(this.vModel.arrival);
      var departure = new Date(Object(_utils_format_js__WEBPACK_IMPORTED_MODULE_30__["formatDateTimeDatabase"])(arrival + ' ' + this.checkOutLimit));
      departure.setDate(departure.getDate() + 1);
      return Object(_utils_format_js__WEBPACK_IMPORTED_MODULE_30__["formatDateTimeDatabase"])(departure);
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
    //DEFAULT VARIABLE
    dvRoomType: function dvRoomType() {
      return this.$store.getters.dvRoomType;
    },
    dvRoomRate: function dvRoomRate() {
      return this.$store.getters.dvRoomRate;
    },
    dvSubDepartment: function dvSubDepartment() {
      return this.$store.getters.dvSubDepartment;
    },
    dvPaymentType: function dvPaymentType() {
      return this.$store.getters.dvPaymentType;
    },
    dvComplimentRate: function dvComplimentRate() {
      return this.$store.getters.dvComplimentRate;
    },
    dvHouseUseRate: function dvHouseUseRate() {
      return this.$store.getters.dvHouseUseRate;
    },
    dvMarket: function dvMarket() {
      return this.$store.getters.dvMarket;
    },
    dvIndividualMarket: function dvIndividualMarket() {
      return this.$store.getters.dvIndividualMarket;
    },
    checkOutLimit: function checkOutLimit() {
      return this.$store.getters.checkOutLimit;
    },
    //GLOBAL ACCOUNT
    ccAdmin: function ccAdmin() {
      return this.$store.getters.cCAdmin;
    },
    cash: function cash() {
      return this.$store.getters.cash;
    },
    sdFrontOffice: function sdFrontOffice() {
      return this.$store.getters.sdFrontOffice;
    },
    defaultCurrency: function defaultCurrency() {
      return this.$store.getters.defaultCurrency;
    }
  },
  created: function created() {
    var _this19 = this;

    //Handle Back Button & forward on browser create hook
    var unregisterRouterGuard = this.$router.beforeEach(function (to, from, next) {
      if (_this19.modalMain || _this19.modalChild) {
        _this19.back();

        next(false);
      } else {
        next();
      }
    }); //Destroyed hook

    this.$once('hook:destroyed', function () {
      unregisterRouterGuard();
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/components/registrationForm/components/FilterHeader.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/components/registrationForm/components/FilterHeader.vue?vue&type=script&lang=js& ***!
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
      vModelSelectLimitData: 0,
      vModelSearchData: '',
      vModelTextSearchData: ''
    };
  },
  methods: {
    onRefreshData: function onRefreshData() {
      var _this = this;

      var search = {
        searchBy: this.vModelSearchData,
        keyword: this.vModelTextSearchData,
        limit: this.vModelSelectLimitData,
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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/components/registrationForm/components/NavigationHeader.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/components/registrationForm/components/NavigationHeader.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************/
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
      var search = {
        searchBy: this.vModelSearchData,
        keyword: this.vModelTextSearchData,
        limit: this.vModelSelectLimitData
      };
      this.vModelSelectLimitData = this.vModelSelectLimitData == '' ? 0 : this.vModelSelectLimitData;
      this.$emit('refreshData', search);
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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/components/registrationForm/tab-components/ExtraCharge.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/components/registrationForm/tab-components/ExtraCharge.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_request_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/utils/request.js */ "./resources/js/src/utils/request.js");
/* harmony import */ var ag_grid_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ag-grid-vue */ "./node_modules/ag-grid-vue/main.js");
/* harmony import */ var ag_grid_vue__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ag_grid_vue__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _action_grid3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./action_grid3 */ "./resources/js/src/views/pages/components/registrationForm/tab-components/action_grid3.js");
/* harmony import */ var _utils_general_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/utils/general.js */ "./resources/js/src/utils/general.js");
/* harmony import */ var _views_pages_components_Tracking_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/views/pages/components/Tracking.vue */ "./resources/js/src/views/pages/components/Tracking.vue");
/* harmony import */ var _utils_format_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/utils/format.js */ "./resources/js/src/utils/format.js");


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




 //------for format----- //

 // <!------------------end additional element---------------------->

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'Currency',
  props: ['titleForm', 'mainTableName', 'table', 'popupTracking', 'popupForm', 'data', 'dataLookUp'],
  components: {
    'ag-grid-vue': ag_grid_vue__WEBPACK_IMPORTED_MODULE_2__["AgGridVue"],
    tracking: _views_pages_components_Tracking_vue__WEBPACK_IMPORTED_MODULE_5__["default"]
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
      headerName: 'Action',
      cellRenderer: 'actionGrid',
      colId: 'params',
      width: 150
    }, {
      headerName: this.$t('table.account'),
      field: 'account_code_name',
      width: 200
    }, {
      headerName: this.$t('table.subDepartment'),
      field: 'sub_department',
      width: 200
    }, {
      headerName: this.$t('table.quantity'),
      field: 'quantity',
      width: 100,
      cellStyle: {
        textAlign: 'right'
      },
      valueFormatter: _utils_format_js__WEBPACK_IMPORTED_MODULE_6__["formatNumber"]
    }, {
      headerName: this.$t('table.amount'),
      field: 'amount',
      width: 100,
      cellStyle: {
        textAlign: 'right'
      },
      valueFormatter: _utils_format_js__WEBPACK_IMPORTED_MODULE_6__["formatNumber"]
    }, {
      headerName: this.$t('table.taxService'),
      field: 'tax_and_service',
      width: 200
    }, {
      headerName: this.$t('table.chargeFrequency'),
      field: 'charge_frequency',
      width: 150
    }, {
      headerName: this.$t('table.maxPax'),
      field: 'max_pax',
      width: 100
    }, {
      headerName: this.$t('table.lastUpdate'),
      field: 'user_id',
      width: 150
    }]; //------------------end need setting manual for column table-----------------//

    this.context = {
      componentParent: this
    };
    this.frameworkComponents = {
      actionGrid: _action_grid3__WEBPACK_IMPORTED_MODULE_3__["default"]
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
    refreshData: function () {
      var _refreshData = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var _this2 = this;

        var selectedNodes;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                selectedNodes = this.gridApi != null ? this.gridApi.getSelectedRows() : [];
                selectedNodes = selectedNodes.length > 0 ? selectedNodes[0] : {};
                _context.next = 4;
                return this.$emit('refreshData');

              case 4:
                setTimeout(function () {
                  Object(_utils_general_js__WEBPACK_IMPORTED_MODULE_4__["rowSelectedAfterRefresh"])(_this2, selectedNodes, 'id_log');
                }, 500);

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function refreshData() {
        return _refreshData.apply(this, arguments);
      }

      return refreshData;
    }(),
    "delete": function _delete(val) {
      this.$emit('delete', val);
    } //------------------end need setting manual for crud-----------------//

  },
  mounted: function mounted() {
    this.gridApi = this.gridOptions.api;
    this.ColumnApi = this.gridOptions.columnApi;
    this.refreshData();
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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/components/registrationForm/tab-components/ScheduledRate.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/components/registrationForm/tab-components/ScheduledRate.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_request_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/utils/request.js */ "./resources/js/src/utils/request.js");
/* harmony import */ var ag_grid_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ag-grid-vue */ "./node_modules/ag-grid-vue/main.js");
/* harmony import */ var ag_grid_vue__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ag_grid_vue__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _action_grid2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./action_grid2 */ "./resources/js/src/views/pages/components/registrationForm/tab-components/action_grid2.js");
/* harmony import */ var _views_pages_components_comp_hu_icon_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/views/pages/components/comp_hu_icon.js */ "./resources/js/src/views/pages/components/comp_hu_icon.js");
/* harmony import */ var _views_pages_components_Tracking_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/views/pages/components/Tracking.vue */ "./resources/js/src/views/pages/components/Tracking.vue");
/* harmony import */ var _utils_general_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/utils/general.js */ "./resources/js/src/utils/general.js");
/* harmony import */ var _utils_format_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/utils/format.js */ "./resources/js/src/utils/format.js");


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





 //------for format----- //

 // <!------------------end additional element---------------------->

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'Breakdown',
  props: ['titleForm', 'mainTableName', 'table', 'popupTracking', 'popupForm', 'data', 'dataLookUp'],
  components: {
    'ag-grid-vue': ag_grid_vue__WEBPACK_IMPORTED_MODULE_2__["AgGridVue"],
    tracking: _views_pages_components_Tracking_vue__WEBPACK_IMPORTED_MODULE_5__["default"]
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
      headerName: 'Action',
      cellRenderer: 'actionGrid',
      colId: 'params',
      width: 100
    }, {
      headerName: 'C',
      field: 'compliment_hu',
      width: 50,
      cellStyle: {
        textAlign: 'center'
      },
      cellRenderer: 'iconCompHuRenderer'
    }, {
      headerName: this.$t('table.fromDate'),
      field: 'from_date',
      width: 100
    }, {
      headerName: this.$t('table.toDate'),
      field: 'to_date',
      width: 100
    }, {
      headerName: this.$t('reservation.roomRate'),
      field: 'room_rate',
      width: 200
    }, {
      headerName: this.$t('reservation.rate'),
      field: 'rate',
      width: 150,
      cellStyle: {
        textAlign: 'right'
      },
      valueFormatter: _utils_format_js__WEBPACK_IMPORTED_MODULE_7__["formatNumber"]
    }, {
      headerName: this.$t('table.compliment'),
      field: 'ComplimentHu',
      width: 150
    }, {
      headerName: this.$t('table.lastUpdate'),
      field: 'user_id',
      width: 150
    }]; //------------------end need setting manual for column table-----------------//

    this.context = {
      componentParent: this
    };
    this.frameworkComponents = {
      actionGrid: _action_grid2__WEBPACK_IMPORTED_MODULE_3__["default"],
      iconCompHuRenderer: _views_pages_components_comp_hu_icon_js__WEBPACK_IMPORTED_MODULE_4__["default"]
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
    refreshData: function () {
      var _refreshData = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var _this2 = this;

        var selectedNodes;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                selectedNodes = this.gridApi != null ? this.gridApi.getSelectedRows() : [];
                selectedNodes = selectedNodes.length > 0 ? selectedNodes[0] : {};
                _context.next = 4;
                return this.$emit('refreshData');

              case 4:
                setTimeout(function () {
                  Object(_utils_general_js__WEBPACK_IMPORTED_MODULE_6__["rowSelectedAfterRefresh"])(_this2, selectedNodes, 'id_log');
                }, 500);

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function refreshData() {
        return _refreshData.apply(this, arguments);
      }

      return refreshData;
    }(),
    "delete": function _delete(val) {
      this.$emit('delete', val);
    } //------------------end need setting manual for crud-----------------//

  },
  mounted: function mounted() {
    this.gridApi = this.gridOptions.api;
    this.ColumnApi = this.gridOptions.columnApi;
    this.refreshData();
  },
  created: function created() {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/components/registrationForm/tab-components/SwitchRoom.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/components/registrationForm/tab-components/SwitchRoom.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************/
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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/components/registrationForm/tab-components/deposit/Deposit.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/components/registrationForm/tab-components/deposit/Deposit.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var ag_grid_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ag-grid-vue */ "./node_modules/ag-grid-vue/main.js");
/* harmony import */ var ag_grid_vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(ag_grid_vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _action_grid1__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./action_grid1 */ "./resources/js/src/views/pages/components/registrationForm/tab-components/deposit/action_grid1.js");
/* harmony import */ var _statusbar_total_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./statusbar_total.js */ "./resources/js/src/views/pages/components/registrationForm/tab-components/deposit/statusbar_total.js");
/* harmony import */ var _views_pages_components_Tracking_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/views/pages/components/Tracking.vue */ "./resources/js/src/views/pages/components/Tracking.vue");
/* harmony import */ var _views_pages_components_checklist_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/views/pages/components/checklist.js */ "./resources/js/src/views/pages/components/checklist.js");
/* harmony import */ var _utils_format_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/utils/format.js */ "./resources/js/src/utils/format.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
//render icon for ag-grid//

 //------for format----- //

 // <!------------------end additional element---------------------->

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'Deposit',
  props: {
    titleForm: String,
    table: Boolean,
    data: Array,
    dataLookUp: Array,
    total: Array,
    showVoid: Boolean,
    showCorrection: Boolean
  },
  // props: ['titleForm', 'mainTableName','table', 'popupTracking', 'popupForm','data', 'dataLookUp','total'],
  components: {
    'ag-grid-vue': ag_grid_vue__WEBPACK_IMPORTED_MODULE_0__["AgGridVue"],
    tracking: _views_pages_components_Tracking_vue__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  data: function data() {
    return {
      //Filter Data on Page Size
      valDefaultSearchData: 'Number',
      searchFilterData: [{
        text: 'Number',
        value: 'number'
      }, {
        text: 'Name',
        value: 'cfg_init_room.name'
      }, {
        text: 'Lock Number',
        value: 'lock_number'
      }, {
        text: 'Room Type',
        value: 'cfg_init_room_type.name'
      }, {
        text: 'Bed Type',
        value: 'cfg_init_bed_type.name'
      }, {
        text: 'Building',
        value: 'building'
      }, {
        text: 'Floor',
        value: 'floor'
      }, {
        text: 'Room View',
        value: 'cfg_init_room_view.name'
      }, {
        text: 'Smoking',
        value: 'is_smoking'
      }, {
        text: 'Description',
        value: 'description'
      }, {
        text: 'Phone Number',
        value: 'phone_number'
      }, {
        text: 'Owner',
        value: 'cfg_init_owner.name'
      }, {
        text: 'Last Update',
        value: 'cfg_init_room.user_id'
      }],
      //query data search
      search: {
        searchBy: '',
        keyword: '',
        limit: 0
      },
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
      bottomRowTotal: [],
      showType: null,
      rowClassRules: null,
      paramsData: null
    };
  },
  beforeMount: function beforeMount() {
    this.gridOptions = {
      rowHeight: this.rowHeightDefault
    };
    this.rowClassRules = {
      'correction': 'data.is_correction === true',
      'void': 'data.void === true'
    }; //------------------need setting manual for column table-----------------//
    // use this.$t("value") for transaltion localization------//
    // see value in @/lang/en.js //

    this.columnDefs = [{
      headerName: 'Action',
      field: 'id_log',
      cellRenderer: 'actionGrid',
      colId: 'params',
      width: 100,
      pinnedRowCellRenderer: 'statusBarTotal'
    }, {
      headerName: this.$t('table.id'),
      field: 'id_log',
      width: 80
    }, {
      headerName: this.$t('table.auditDate'),
      field: 'audit_date',
      width: 100,
      valueFormatter: _utils_format_js__WEBPACK_IMPORTED_MODULE_5__["formatDate"],
      pinnedRowCellRenderer: 'statusBarTotal'
    }, {
      headerName: this.$t('table.account'),
      field: 'account',
      width: 250
    }, {
      headerName: this.$t('table.debit'),
      field: 'debit',
      width: 100,
      cellStyle: {
        textAlign: 'right'
      },
      valueFormatter: _utils_format_js__WEBPACK_IMPORTED_MODULE_5__["formatNumber"]
    }, {
      headerName: this.$t('table.credit'),
      field: 'credit',
      width: 100,
      cellStyle: {
        textAlign: 'right'
      },
      valueFormatter: _utils_format_js__WEBPACK_IMPORTED_MODULE_5__["formatNumber"]
    }, {
      headerName: this.$t('table.currency'),
      field: 'default_currency',
      width: 100
    }, {
      headerName: this.$t('table.debitForeign'),
      field: 'debit_foreign',
      width: 115,
      cellStyle: {
        textAlign: 'right'
      },
      valueFormatter: _utils_format_js__WEBPACK_IMPORTED_MODULE_5__["formatNumber"]
    }, {
      headerName: this.$t('table.creditForeign'),
      field: 'credit_foreign',
      width: 115,
      cellStyle: {
        textAlign: 'right'
      },
      valueFormatter: _utils_format_js__WEBPACK_IMPORTED_MODULE_5__["formatNumber"]
    }, {
      headerName: this.$t('table.fCurrency'),
      field: 'currency',
      width: 100
    }, {
      headerName: this.$t('table.exchangeRate'),
      field: 'exchange_rate',
      width: 120,
      cellStyle: {
        textAlign: 'right'
      },
      valueFormatter: _utils_format_js__WEBPACK_IMPORTED_MODULE_5__["formatNumber"],
      pinnedRowCellRenderer: 'statusBarTotal'
    }, {
      headerName: this.$t('table.type'),
      field: 'type',
      width: 90
    }, {
      headerName: this.$t('table.remark'),
      field: 'remark',
      width: 150
    }, {
      headerName: this.$t('table.docNumber'),
      field: 'document_number',
      width: 150
    }, {
      headerName: this.$t('table.subDepartment'),
      field: 'sub_department',
      width: 200
    }, {
      headerName: this.$t('table.void'),
      field: 'void',
      width: 90,
      cellStyle: {
        textAlign: 'center'
      },
      cellRenderer: 'checklistRenderer',
      cellRendererParams: 'params.data.per_pax_extra',
      pinnedRowCellRenderer: 'statusBarTotal'
    }, {
      headerName: this.$t('table.correction'),
      field: 'is_correction',
      width: 90,
      cellStyle: {
        textAlign: 'center'
      },
      cellRenderer: 'checklistRenderer',
      cellRendererParams: 'params.data.per_pax_extra',
      pinnedRowCellRenderer: 'statusBarTotal'
    }, {
      headerName: this.$t('table.refNumber'),
      field: 'ref_number',
      width: 100,
      cellStyle: {
        textAlign: 'right'
      },
      valueFormatter: _utils_format_js__WEBPACK_IMPORTED_MODULE_5__["formatNumber"],
      pinnedRowCellRenderer: 'statusBarTotal'
    }, {
      headerName: this.$t('table.insertBy'),
      field: 'insert_by',
      width: 150
    }, {
      headerName: this.$t('table.voidDate'),
      field: 'void_date',
      width: 150,
      valueFormatter: _utils_format_js__WEBPACK_IMPORTED_MODULE_5__["formatDateTime"],
      pinnedRowCellRenderer: 'statusBarTotal'
    }, {
      headerName: this.$t('table.voidBy'),
      field: 'void_by',
      width: 150
    }, {
      headerName: this.$t('table.voidReason'),
      field: 'void_reason',
      width: 200
    }, {
      headerName: this.$t('table.lastUpdate'),
      field: 'user_id',
      width: 150
    }]; //------------------end need setting manual for column table-----------------//

    this.context = {
      componentParent: this
    };
    this.frameworkComponents = {
      statusBarTotal: _statusbar_total_js__WEBPACK_IMPORTED_MODULE_2__["default"],
      actionGrid: _action_grid1__WEBPACK_IMPORTED_MODULE_1__["default"],
      checklistRenderer: _views_pages_components_checklist_js__WEBPACK_IMPORTED_MODULE_4__["default"]
    };
    this.rowGroupPanelShow = 'always';
    this.statusBar = {
      statusPanels: [{
        statusPanel: 'agFilteredRowCountComponent',
        align: 'left'
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
    onGridReady: function onGridReady() {
      this.bottomRowTotal = this.total;
    },
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
    //------------------------additional for context menu ag-Grid-----------//
    getContextMenu: function getContextMenu(params) {
      var _this = this;

      var paramsData = params.node.data;
      this.paramsData = paramsData;
      var result = [{
        name: this.$t('transaction.contextMenu.cashPayment'),
        action: function action() {
          return _this.showDepositForm('', _this.modeDeposit.cash);
        }
      }, {
        name: this.$t('transaction.contextMenu.cashRefund'),
        action: function action() {
          return _this.showDepositForm('', _this.modeDeposit.refund);
        }
      }, {
        name: this.$t('transaction.contextMenu.creditOrDebitCardPayment'),
        action: function action() {
          return _this.showDepositForm('', _this.modeDeposit.card);
        }
      }, {
        name: this.$t('transaction.contextMenu.otherPayment'),
        action: function action() {
          return _this.showDepositForm('', _this.modeDeposit.other);
        }
      }, {
        name: this.$t('transaction.contextMenu.printReceipt'),
        action: function action() {
          return _this.handlePrintReceipt(paramsData);
        }
      }, 'separator', {
        name: this.$t('transaction.contextMenu.void'),
        action: function action() {
          return _this.correctionVoid(paramsData, false);
        }
      }, {
        name: this.$t('transaction.contextMenu.correction'),
        action: function action() {
          return _this.correctionVoid(paramsData, true);
        }
      }, {
        name: this.$t('transaction.contextMenu.printReceipt'),
        action: function action() {
          return _this.handlePrintReceipt(paramsData);
        }
      }, {
        name: this.$t('transaction.contextMenu.trackingData'),
        disabled: true
      }];
      return result;
    },
    handleRowRightClicked: function handleRowRightClicked() {
      var vm = this;
      vm.gridApi.forEachNode(function (node) {
        if (node.data.id_log == vm.paramsData.id_log) {
          node.setSelected(true, true); // vm.gridApi.ensureIndexVisible(node.rowIndex, 'middle')
        }
      });
    },
    //------------------need setting manual for crud-----------------//
    correctionVoid: function correctionVoid(paramsData, isCorrection) {
      var transactionDate = paramsData.audit_date;

      if (isCorrection && transactionDate != this.auditDate) {
        this.showCredential(paramsData, isCorrection);
      } else if (!isCorrection && transactionDate == this.auditDate) {
        this.showCredential(paramsData, isCorrection);
      } else {
        if (document.getElementsByClassName('vs-dialog').length == 0) {
          this.cannotCorrectionVoidDialog(isCorrection);
        }
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
    showDepositForm: function showDepositForm(val, modeData) {
      this.$emit('showDepositForm', val, modeData);
    },
    showModal: function showModal(idData, modeData) {
      this.$emit('showModal', idData, modeData);
    },
    showCredential: function showCredential(data, isCorrection) {
      this.$emit('credential', data, isCorrection);
    },
    handlePrintReceipt: function handlePrintReceipt(params) {
      this.$emit('printReceipt', params);
    }
  },
  mounted: function mounted() {
    this.gridApi = this.gridOptions.api;
    this.gridColumnApi = this.gridOptions.columnApi;
  },
  watch: {
    total: function total() {
      this.bottomRowTotal = this.total;
    }
  },
  computed: {
    userId: {
      get: function get() {
        return this.$store.state.AppActiveUser.id;
      }
    },
    auditDate: function auditDate() {
      return this.$store.state.auditLog.auditDate;
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./resources/sass/vuexy/components/suggestions.scss":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./resources/sass/vuexy/components/suggestions.scss ***!
  \*********************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports
exports.i(__webpack_require__(/*! -!../../../../node_modules/css-loader!v-suggestions/dist/v-suggestions.css */ "./node_modules/css-loader/index.js!./node_modules/v-suggestions/dist/v-suggestions.css"), "");

// module
exports.push([module.i, ".v-suggestions {\n  display: flex;\n  align-items: flex-start;\n  flex-direction: column;\n  position: relative;\n  justify-content: center;\n}\n\n.v-suggestions .input {\n  color: inherit;\n  position: relative;\n  padding: 0.7rem;\n  border-radius: 5px;\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  box-sizing: border-box;\n  box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.15);\n  transition: all 0.3s ease;\n  width: 100%;\n  font-size: 0.8rem;\n}\n\n.v-suggestions .items {\n  overflow: auto;\n  max-height: 300px;\n  font-size: 0.8rem;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./resources/sass/vuexy/pages/form_deposit_charge.scss":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./resources/sass/vuexy/pages/form_deposit_charge.scss ***!
  \************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".form_deposit_charge.two_column.con-vs-popup .vs-popup {\n  width: auto;\n}\n\n@media only screen and (min-width: 600px) {\n  .form_deposit_charge.two_column.con-vs-popup .vs-popup div.content-left {\n    border-right: 1px dashed #c5c5c5;\n    padding-right: 10px;\n    width: 450px;\n  }\n\n  .form_deposit_charge.two_column.con-vs-popup .vs-popup .vs-col.content-right {\n    padding-left: 10px;\n    width: 450px;\n  }\n\n  .form_deposit_charge.two_column.con-vs-popup .vs-popup .vs-divider.divider-title {\n    margin: 0px;\n  }\n}\n\n.form_deposit_charge.two_column.con-vs-popup .vs-popup #transaction {\n  width: 450px;\n}\n\n.form_deposit_charge.two_column.con-vs-popup .vs-popup #expDate .vs__dropdown-menu {\n  min-width: 30px;\n}\n\n.form_deposit_charge.two_column.con-vs-popup .vs-popup .form_deposit_charge .vs-popup {\n  width: auto;\n}\n\n.form_deposit_charge.two_column.con-vs-popup .vs-popup .form_deposit_charge .vs-popup .form-content {\n  width: 450px;\n}\n\n@media only screen and (min-width: 600px) {\n  .form_deposit_charge.two_column.con-vs-popup .vs-popup .form_deposit_charge .vs-popup div.content-left {\n    border-right: 1px dashed #c5c5c5;\n    padding-right: 10px;\n    width: 450px;\n  }\n\n  .form_deposit_charge.two_column.con-vs-popup .vs-popup .form_deposit_charge .vs-popup .vs-col.content-right {\n    padding-left: 10px;\n    width: 450px;\n  }\n\n  .form_deposit_charge.two_column.con-vs-popup .vs-popup .form_deposit_charge .vs-popup .vs-divider.divider-title {\n    margin: 0px;\n  }\n}\n\n.form_deposit_charge.two_column.con-vs-dialog .vs-dialog {\n  width: auto;\n}\n\n@media only screen and (min-width: 600px) {\n  .form_deposit_charge.two_column.con-vs-dialog .vs-dialog {\n    max-width: 950px;\n  }\n\n  .form_deposit_charge.two_column.con-vs-dialog .vs-dialog div.content-left {\n    border-right: 1px dashed #c5c5c5;\n    padding-right: 10px;\n    width: 450px;\n  }\n\n  .form_deposit_charge.two_column.con-vs-dialog .vs-dialog .vs-col.content-right {\n    padding-left: 10px;\n    width: 450px;\n  }\n\n  .form_deposit_charge.two_column.con-vs-dialog .vs-dialog .vs-divider.divider-title {\n    margin: 0px;\n  }\n}\n\n.form_deposit_charge.two_column.con-vs-dialog .vs-dialog #transaction {\n  width: 450px;\n}\n\n.form_deposit_charge.two_column.con-vs-dialog .vs-dialog #expDate .vs__dropdown-menu {\n  min-width: 30px;\n}\n\n.form_deposit_charge .vs-popup {\n  width: auto;\n}\n\n.form_deposit_charge .vs-popup .form-content {\n  width: 450px;\n}\n\n.form_deposit_charge .vs-popup .form-content .sub-folio {\n  font-size: 0.8rem;\n}\n\n.form_deposit_charge .vs-popup .vs-popup--content {\n  overflow: auto;\n}\n\n@media only screen and (min-width: 600px) {\n  .form_deposit_charge .vs-popup div.content-left {\n    border-right: 1px dashed #c5c5c5;\n    padding-right: 10px;\n    width: 450px;\n  }\n\n  .form_deposit_charge .vs-popup .vs-col.content-right {\n    padding-left: 10px;\n    width: 450px;\n  }\n\n  .form_deposit_charge .vs-popup .vs-divider.divider-title {\n    margin: 0px;\n  }\n}\n\n.form_deposit_charge .vs-popup #expDate .vs__dropdown-menu {\n  min-width: 30px;\n}\n\n.form_deposit_charge .vs-dialog {\n  width: auto;\n}\n\n.form_deposit_charge .vs-dialog .form-content {\n  width: 450px;\n}\n\n.form_deposit_charge .vs-dialog .form-content .sub-folio {\n  font-size: 0.8rem;\n}\n\n.form_deposit_charge .vs-dialog .vs-dialog-text {\n  overflow: auto;\n}\n\n@media only screen and (min-width: 600px) {\n  .form_deposit_charge .vs-dialog {\n    max-width: 950px;\n  }\n\n  .form_deposit_charge .vs-dialog div.content-left {\n    border-right: 1px dashed #c5c5c5;\n    padding-right: 10px;\n    width: 450px;\n  }\n\n  .form_deposit_charge .vs-dialog .vs-col.content-right {\n    padding-left: 10px;\n    width: 450px;\n  }\n\n  .form_deposit_charge .vs-dialog .vs-divider.divider-title {\n    margin: 0px;\n  }\n}\n\n.form_deposit_charge .vs-dialog #expDate .vs__dropdown-menu {\n  min-width: 30px;\n}\n\n.payment-option .vs-dialog {\n  width: 400px;\n}\n\n.payment-option .box .vs-button:not(.vs-radius):not(.includeIconOnly):not(.small):not(.large) {\n  width: 170px;\n}\n\n@media screen and (min-width: 600px) {\n  .payment-option .box #row1 {\n    margin-bottom: 15px;\n  }\n\n  .payment-option .box .button1 {\n    margin-left: 20px !important;\n  }\n\n  .payment-option .box .button2 {\n    margin-left: 15px !important;\n  }\n\n  .payment-option .box .button3 {\n    margin-left: 20px !important;\n  }\n\n  .payment-option .box .button4 {\n    margin-left: 15px !important;\n  }\n}\n\n@media screen and (max-width: 579px) {\n  .payment-option .box #card {\n    margin-top: 5px;\n  }\n\n  .payment-option .box #direct-bill {\n    margin-top: 5px;\n  }\n\n  .payment-option .box #other-payment {\n    margin-top: 5px;\n  }\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/v-suggestions/dist/v-suggestions.css":
/*!*************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/v-suggestions/dist/v-suggestions.css ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".v-suggestions {\n  position: relative;\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n}\n\n.v-suggestions .suggestions {\n  position: absolute;\n  left: 0;\n  top: 36px;\n  width: 100%;\n  z-index: 100;\n  background: #ffffff;\n}\n\n.v-suggestions .items {\n  list-style: none;\n  border: 1px solid #EEE;\n  margin: 0;\n  padding: 0;\n  border-width: 0 1px 1px 1px;\n}\n\n.v-suggestions .item {\n  border-bottom: 1px solid #eee;\n  padding: .4rem;\n}\n\n.v-suggestions .items .item.is-active, .v-suggestions .items .item:hover {\n  background: #eee;\n  cursor: pointer;\n}\n\n.v-suggestions-input {\n  -webkit-appearance: none;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n  border: 1px solid transparent;\n  border-radius: 3px;\n  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.16), 0 0 0 1px rgba(0, 0, 0, 0.08);\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  font-size: 1rem;\n  height: 2.25em;\n  -webkit-box-pack: start;\n  -ms-flex-pack: start;\n  justify-content: flex-start;\n  line-height: 1.5;\n  padding-bottom: calc(0.375em - 1px);\n  padding-left: calc(0.625em - 1px);\n  padding-right: calc(0.625em - 1px);\n  padding-top: calc(0.375em - 1px);\n  position: relative;\n  vertical-align: top;\n  background-color: white;\n  border-color: #dbdbdb;\n  color: #363636;\n  max-width: 100%;\n  width: 100%;\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n  position: relative;\n}\n\n.v-suggestions-input:focus, .v-suggestions-input:active {\n  box-shadow: 0 3px 3px 0 rgba(0, 0, 0, 0.16), 0 0 0 1px rgba(0, 0, 0, 0.08);\n  outline: none;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/components/registrationForm/RegistrationForm.vue?vue&type=style&index=0&id=36d73fab&lang=scss&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/components/registrationForm/RegistrationForm.vue?vue&type=style&index=0&id=36d73fab&lang=scss&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@-webkit-keyframes shake-data-v-36d73fab {\n10%, 90% {\n    transform: translate3d(-1px, 0, 0);\n}\n20%, 80% {\n    transform: translate3d(2px, 0, 0);\n}\n30%, 50%, 70% {\n    transform: translate3d(-4px, 0, 0);\n}\n40%, 60% {\n    transform: translate3d(4px, 0, 0);\n}\n}\n@keyframes shake-data-v-36d73fab {\n10%, 90% {\n    transform: translate3d(-1px, 0, 0);\n}\n20%, 80% {\n    transform: translate3d(2px, 0, 0);\n}\n30%, 50%, 70% {\n    transform: translate3d(-4px, 0, 0);\n}\n40%, 60% {\n    transform: translate3d(4px, 0, 0);\n}\n}\n.apply-shake[data-v-36d73fab] {\n  -webkit-animation: shake-data-v-36d73fab 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;\n          animation: shake-data-v-36d73fab 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;\n}\n.body-sidebar[data-v-36d73fab] {\n  margin-left: 10px;\n}\n.footer-sidebar[data-v-36d73fab] {\n  margin-left: 10px;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/components/registrationForm/RegistrationForm.vue?vue&type=style&index=1&lang=scss&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/components/registrationForm/RegistrationForm.vue?vue&type=style&index=1&lang=scss& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".payment-option span.vs-button-text.vs-button--text {\n  display: flex !important;\n  justify-content: center;\n}\n.payment-option span.vs-button-text.vs-button--text img {\n  margin-right: 5px;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/components/registrationForm/tab-components/deposit/Deposit.vue?vue&type=style&index=0&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/components/registrationForm/tab-components/deposit/Deposit.vue?vue&type=style&index=0&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".ag-theme-balham .correction{\n  background-color: yellow;\n}\n.ag-theme-balham .void{\n  background-color: rgb(255, 104, 104);\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/debounce/index.js":
/*!****************************************!*\
  !*** ./node_modules/debounce/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Returns a function, that, as long as it continues to be invoked, will not
 * be triggered. The function will be called after it stops being called for
 * N milliseconds. If `immediate` is passed, trigger the function on the
 * leading edge, instead of the trailing. The function also has a property 'clear' 
 * that is a function which will clear the timer to prevent previously scheduled executions. 
 *
 * @source underscore.js
 * @see http://unscriptable.com/2009/03/20/debouncing-javascript-methods/
 * @param {Function} function to wrap
 * @param {Number} timeout in ms (`100`)
 * @param {Boolean} whether to execute at the beginning (`false`)
 * @api public
 */
function debounce(func, wait, immediate){
  var timeout, args, context, timestamp, result;
  if (null == wait) wait = 100;

  function later() {
    var last = Date.now() - timestamp;

    if (last < wait && last >= 0) {
      timeout = setTimeout(later, wait - last);
    } else {
      timeout = null;
      if (!immediate) {
        result = func.apply(context, args);
        context = args = null;
      }
    }
  };

  var debounced = function(){
    context = this;
    args = arguments;
    timestamp = Date.now();
    var callNow = immediate && !timeout;
    if (!timeout) timeout = setTimeout(later, wait);
    if (callNow) {
      result = func.apply(context, args);
      context = args = null;
    }

    return result;
  };

  debounced.clear = function() {
    if (timeout) {
      clearTimeout(timeout);
      timeout = null;
    }
  };
  
  debounced.flush = function() {
    if (timeout) {
      result = func.apply(context, args);
      context = args = null;
      
      clearTimeout(timeout);
      timeout = null;
    }
  };

  return debounced;
};

// Adds compatibility for ES modules
debounce.debounce = debounce;

module.exports = debounce;


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/components/registrationForm/RegistrationForm.vue?vue&type=style&index=0&id=36d73fab&lang=scss&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/components/registrationForm/RegistrationForm.vue?vue&type=style&index=0&id=36d73fab&lang=scss&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../node_modules/css-loader!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./RegistrationForm.vue?vue&type=style&index=0&id=36d73fab&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/components/registrationForm/RegistrationForm.vue?vue&type=style&index=0&id=36d73fab&lang=scss&scoped=true&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/components/registrationForm/RegistrationForm.vue?vue&type=style&index=1&lang=scss&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/components/registrationForm/RegistrationForm.vue?vue&type=style&index=1&lang=scss& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../node_modules/css-loader!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./RegistrationForm.vue?vue&type=style&index=1&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/components/registrationForm/RegistrationForm.vue?vue&type=style&index=1&lang=scss&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/components/registrationForm/tab-components/deposit/Deposit.vue?vue&type=style&index=0&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/components/registrationForm/tab-components/deposit/Deposit.vue?vue&type=style&index=0&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../../../node_modules/css-loader??ref--7-1!../../../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Deposit.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/components/registrationForm/tab-components/deposit/Deposit.vue?vue&type=style&index=0&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/icon/IconHU.vue?vue&type=template&id=73abfacc&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/components/icon/IconHU.vue?vue&type=template&id=73abfacc& ***!
  \******************************************************************************************************************************************************************************************************************/
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
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAABGdBTUEAALGPC/xhBQAAACBjSFJN\nAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAABUFBMVEUAAAAAZTIAZTIAZTIA\nZTIAZTIAZTIAZTIAZTIAZTIAZTIAZTIAZTIAZTIAZTIAZTIAZTIAZTIAZTIAZTIAZTIAZTIAZTIA\nZTIAZTIAZTIAZTIAZTIAZTIAZTIAZTIAZTIAZTIAZTIAZTIAZTIAZTIAZTIAZTIAZTIAZTIAZTIA\nZTIAZTIAZTIAZTIAZTIAZTIAZTIAZTIAZTIAZTIAZTIAZTIAZTIAZTIAZTIAZTIAZTIAZTIAZTIA\nZTIAZTIAZTIAZTIAZTIAZDIAZjIEbDEThi8cli0GbzEgnS0rsCsssSsGcDEBZjIaky4bky4mpywr\nsSsIczEoqysFbTElpSwWjC4XjS4AYzIDajIprSsBZzIHcjEPfzAViS8blC4nqSwmqCwaki4MejAJ\ndTAdly0rrysqrishni0ssisVii4EbTEjoiwprCsZkC4KdjD////0+aEgAAAAQXRSTlMAADwqzikb\nuQ+iB4r8iQJw9lju7UHhLtLRHr4SqKcRCY/9A3b4XfBG5eQy1tUhw8IZrhh90/PUfBYVHJ4UuJUG\neWSV2yMAAAABYktHRG9VCGGBAAAAB3RJTUUH4wsNCBATGdEodwAAAX1JREFUOMud0llbgkAUgGFO\nmZaZWplmu2laarsVbdaghkNSuOTWYrba+v8vE2coGPGm7wrhfQ6HeeQ4fQB9fQBczwD6LZaB3gLA\nakPIZu0pYHAItRsa7AHAPuxQgWPEbirA6XKjTm6X00QAjI4h2vho9xoAngn024SHFQBeH9I16TUK\nAP8UMjTlNwiYnkFMs3M6APMLARYEFuZ/BSwGQ/S2kEoJ9DIUXARtgaUwfZzOnJ1l0pSEl8gaAJFl\n+lzMYknC2XMqViKqAIjG6NCcLOF20kWO3ohH2wJW17T3i5eKCpRLUdtjfRW4jU1tbyFfwJ0KeQ2g\nzS1uOxGP7RBQLJEJpSIB47vxxB7H8/sH2ileEVCmPw+PeJ7v/A+OyYRKVa5hXJOrFTIhSU+bAKF+\nfXN718D4vpl5KJqAx6fGs0Q+U3kpldMsqL628F+K9CYw4J18gZYksxPSDGj+A0h60Op+xUftU9fL\nFwvq+W9DogHY1INi0oOTpM9iku9UBT/j/KRcmomdRwAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAxOS0x\nMS0xM1QwODoxNjoxOSswMzowMBXtT+kAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMTktMTEtMTNUMDg6\nMTY6MTkrMDM6MDBksPdVAAAAAElFTkSuQmCC"
        }
      })
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/components/autocomplete.vue?vue&type=template&id=73aa1148&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/components/autocomplete.vue?vue&type=template&id=73aa1148& ***!
  \*******************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "v-suggestions" }, [
    _c(
      "input",
      _vm._b(
        {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.query,
              expression: "query"
            }
          ],
          class: _vm.extendedOptions.inputClass,
          attrs: {
            type: "text",
            autocomplete: Math.random(),
            placeholder: _vm.extendedOptions.placeholder
          },
          domProps: { value: _vm.query },
          on: {
            keydown: _vm.onKeyDown,
            blur: _vm.hideItems,
            focus: function($event) {
              _vm.showItems = true
            },
            input: function($event) {
              if ($event.target.composing) {
                return
              }
              _vm.query = $event.target.value
            }
          }
        },
        "input",
        _vm.$attrs,
        false
      )
    ),
    _vm._v(" "),
    _c("div", { staticClass: "suggestions" }, [
      _c(
        "ul",
        {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: _vm.items.length > 0 && _vm.showItems === true,
              expression: "items.length > 0 && showItems === true"
            }
          ],
          staticClass: "items"
        },
        _vm._l(_vm.items, function(item, index) {
          return _c(
            "li",
            {
              key: index,
              staticClass: "item",
              class: { "is-active": index === _vm.activeItemIndex },
              on: {
                click: function($event) {
                  $event.preventDefault()
                  return _vm.selectItem(index)
                }
              }
            },
            [
              _vm._t(
                "item",
                [_vm._v("\n          " + _vm._s(item) + "\n        ")],
                { item: item }
              )
            ],
            2
          )
        }),
        0
      )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/components/registrationForm/RegistrationForm.vue?vue&type=template&id=36d73fab&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/components/registrationForm/RegistrationForm.vue?vue&type=template&id=36d73fab&scoped=true& ***!
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
    { staticClass: "guest-form" },
    [
      _c(
        "vs-popup",
        {
          staticClass: "width-80 registration-form",
          attrs: {
            id: "main-popup",
            active: _vm.modalPreventClose,
            title: _vm.titleForm ? _vm.titleForm : _vm.titlePopup
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
            { staticClass: "popup-body form-container" },
            [
              _c(
                "vs-tabs",
                {
                  ref: "popupContainer",
                  staticClass: "popup-container",
                  attrs: { id: "tabContainer", "vs-position": "left" }
                },
                [
                  _c(
                    "vs-tab",
                    {
                      attrs: {
                        id: "stayInformation",
                        label: "Booking Information",
                        "data-vv-scope": _vm.scope1
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
                            "vs-collapse",
                            { attrs: { type: "margin" } },
                            [
                              _c(
                                "vx-card",
                                {
                                  staticClass: "mb-3",
                                  attrs: {
                                    icon: "date_range",
                                    title: "Booking Information",
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
                                          staticClass: "content-left lg:w-1/2"
                                        },
                                        [
                                          _c(
                                            "vs-row",
                                            {
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
                                                            "reservation.stayInformation"
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
                                                {
                                                  attrs: {
                                                    "vs-lg": "4",
                                                    "vs-xs": "6"
                                                  }
                                                },
                                                [
                                                  _c("vs-input-number", {
                                                    staticClass: "number-input",
                                                    attrs: {
                                                      min: "1",
                                                      label:
                                                        _vm.$t(
                                                          "reservation.night"
                                                        ) + ":"
                                                    },
                                                    on: {
                                                      input: function($event) {
                                                        _vm.handleChangeNight()
                                                        _vm.getRoomNumber(
                                                          "bed_type",
                                                          _vm.vModel
                                                        )
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
                                            {
                                              class: _vm.rowMarginBottom,
                                              attrs: {
                                                "vs-type": "flex",
                                                "vs-justify": "space-between"
                                              }
                                            },
                                            [
                                              _c(
                                                "vs-col",
                                                {
                                                  staticClass:
                                                    "wrap-form-select",
                                                  attrs: {
                                                    "vs-lg": "6",
                                                    "vs-xs": "12"
                                                  }
                                                },
                                                [
                                                  _c("vs-row", [
                                                    _c("label", [
                                                      _c(
                                                        "span",
                                                        {
                                                          staticClass:
                                                            "required"
                                                        },
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
                                                            rawName:
                                                              "v-validate",
                                                            value: "required",
                                                            expression:
                                                              "'required'"
                                                          }
                                                        ],
                                                        staticClass: "w-full",
                                                        attrs: {
                                                          clearable: false,
                                                          disabled:
                                                            !_vm.isReservation ||
                                                            (_vm.isFromAvailability &&
                                                              !_vm.isReservationFromAvaibility) ||
                                                            _vm.resvStatus ==
                                                              _vm
                                                                .reservationStatus
                                                                .checkIn,
                                                          "disabled-date":
                                                            _vm.dateTodayDisable,
                                                          type: "datetime",
                                                          "show-time-panel":
                                                            _vm.showTimeRangePanel,
                                                          confirm: "",
                                                          "confirm-text": "Ok",
                                                          lang: _vm.$t("lang"),
                                                          "value-type":
                                                            "YYYY-MM-DD HH:mm:ss",
                                                          format:
                                                            "DD/MM/YYYY HH:mm:ss",
                                                          label: "name",
                                                          name: "arrival",
                                                          "data-vv-scope":
                                                            _vm.scope1
                                                        },
                                                        on: {
                                                          close: function(
                                                            $event
                                                          ) {
                                                            _vm.showTimeRangePanel = false
                                                          },
                                                          input: function(
                                                            $event
                                                          ) {
                                                            _vm.getTotalDays()
                                                            _vm.getRoomNumber(
                                                              "",
                                                              _vm.vModel
                                                            )
                                                          }
                                                        },
                                                        scopedSlots: _vm._u([
                                                          {
                                                            key: "footer",
                                                            fn: function() {
                                                              return [
                                                                _c(
                                                                  "vs-button",
                                                                  {
                                                                    attrs: {
                                                                      size:
                                                                        "small"
                                                                    },
                                                                    on: {
                                                                      click:
                                                                        _vm.resetDate
                                                                    }
                                                                  },
                                                                  [
                                                                    _vm._v(
                                                                      "\n                                                                    Reset\n                                                                "
                                                                    )
                                                                  ]
                                                                ),
                                                                _vm._v(" "),
                                                                _c(
                                                                  "vs-button",
                                                                  {
                                                                    attrs: {
                                                                      size:
                                                                        "small"
                                                                    },
                                                                    on: {
                                                                      click:
                                                                        _vm.toggleTimeRangePanel
                                                                    }
                                                                  },
                                                                  [
                                                                    _vm._v(
                                                                      "\n                                                                    " +
                                                                        _vm._s(
                                                                          _vm.showTimeRangePanel
                                                                            ? "Select Date"
                                                                            : "Select Time"
                                                                        ) +
                                                                        "\n                                                                "
                                                                    )
                                                                  ]
                                                                )
                                                              ]
                                                            },
                                                            proxy: true
                                                          }
                                                        ]),
                                                        model: {
                                                          value:
                                                            _vm.vModel.arrival,
                                                          callback: function(
                                                            $$v
                                                          ) {
                                                            _vm.$set(
                                                              _vm.vModel,
                                                              "arrival",
                                                              $$v
                                                            )
                                                          },
                                                          expression:
                                                            "vModel.arrival"
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
                                                "vs-col",
                                                {
                                                  staticClass:
                                                    "wrap-form-select",
                                                  attrs: {
                                                    "vs-lg": "6",
                                                    "vs-xs": "12"
                                                  }
                                                },
                                                [
                                                  _c("vs-row", [
                                                    _c("label", [
                                                      _c(
                                                        "span",
                                                        {
                                                          staticClass:
                                                            "required"
                                                        },
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
                                                            rawName:
                                                              "v-validate",
                                                            value: "required",
                                                            expression:
                                                              "'required'"
                                                          }
                                                        ],
                                                        staticClass: "w-full",
                                                        attrs: {
                                                          clearable: false,
                                                          "disabled-date":
                                                            _vm.dateTodayDisable,
                                                          type: "datetime",
                                                          "show-time-panel":
                                                            _vm.showTimeRangePanel,
                                                          confirm: "",
                                                          "confirm-text": "Ok",
                                                          lang: _vm.$t("lang"),
                                                          "value-type":
                                                            "YYYY-MM-DD HH:mm:ss",
                                                          format:
                                                            "DD/MM/YYYY HH:mm:ss",
                                                          label: "name",
                                                          name: "departure",
                                                          "data-vv-scope":
                                                            _vm.scope1
                                                        },
                                                        on: {
                                                          close: function(
                                                            $event
                                                          ) {
                                                            _vm.showTimeRangePanel = false
                                                          },
                                                          input: function(
                                                            $event
                                                          ) {
                                                            _vm.getTotalDays()
                                                            _vm.getRoomNumber(
                                                              "",
                                                              _vm.vModel
                                                            )
                                                          }
                                                        },
                                                        scopedSlots: _vm._u([
                                                          {
                                                            key: "footer",
                                                            fn: function() {
                                                              return [
                                                                _c(
                                                                  "vs-button",
                                                                  {
                                                                    attrs: {
                                                                      size:
                                                                        "small"
                                                                    },
                                                                    on: {
                                                                      click:
                                                                        _vm.resetDate
                                                                    }
                                                                  },
                                                                  [
                                                                    _vm._v(
                                                                      "\n                                                                    reset\n                                                                "
                                                                    )
                                                                  ]
                                                                ),
                                                                _vm._v(" "),
                                                                _c(
                                                                  "vs-button",
                                                                  {
                                                                    attrs: {
                                                                      size:
                                                                        "small"
                                                                    },
                                                                    on: {
                                                                      click:
                                                                        _vm.toggleTimeRangePanel
                                                                    }
                                                                  },
                                                                  [
                                                                    _vm._v(
                                                                      "\n                                                                    " +
                                                                        _vm._s(
                                                                          _vm.showTimeRangePanel
                                                                            ? "select date"
                                                                            : "select time"
                                                                        ) +
                                                                        "\n                                                                "
                                                                    )
                                                                  ]
                                                                )
                                                              ]
                                                            },
                                                            proxy: true
                                                          }
                                                        ]),
                                                        model: {
                                                          value:
                                                            _vm.vModel
                                                              .departure,
                                                          callback: function(
                                                            $$v
                                                          ) {
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
                                                  _c("vs-row", [
                                                    _c("label", [
                                                      _vm._v(
                                                        _vm._s(
                                                          _vm.$t(
                                                            "reservation.roomType"
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
                                                            rawName:
                                                              "v-validate",
                                                            value: "required",
                                                            expression:
                                                              "'required'"
                                                          }
                                                        ],
                                                        staticClass: "w-full",
                                                        attrs: {
                                                          disabled:
                                                            (_vm.modeDataValue ==
                                                              _vm.modeData
                                                                .edit &&
                                                              !_vm.isReservation) ||
                                                            (_vm.isFromAvailability &&
                                                            !_vm.isReservationFromAvaibility
                                                              ? true
                                                              : false) ||
                                                            _vm.resvStatus ==
                                                              _vm
                                                                .reservationStatus
                                                                .checkIn,
                                                          id: "form-select",
                                                          clearable: false,
                                                          placeholder:
                                                            _vm.$t(
                                                              "reservation.roomType"
                                                            ) +
                                                            " " +
                                                            _vm.$t(
                                                              "table.required"
                                                            ),
                                                          label: "name",
                                                          reduce: function(
                                                            value
                                                          ) {
                                                            return value.code
                                                          },
                                                          options:
                                                            _vm.dataLookup
                                                              .room_type,
                                                          name: "room type",
                                                          "data-vv-scope":
                                                            _vm.scope1
                                                        },
                                                        on: {
                                                          input: function(
                                                            $event
                                                          ) {
                                                            _vm.getRoomNumber(
                                                              null,
                                                              _vm.vModel
                                                            )
                                                            _vm.resetOptionsChange = true
                                                            _vm.resetOnOptionsChangeRoomNumber = true
                                                          }
                                                        },
                                                        model: {
                                                          value:
                                                            _vm.vModel
                                                              .room_type_code,
                                                          callback: function(
                                                            $$v
                                                          ) {
                                                            _vm.$set(
                                                              _vm.vModel,
                                                              "room_type_code",
                                                              $$v
                                                            )
                                                          },
                                                          expression:
                                                            "vModel.room_type_code"
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
                                                                  ".room type"
                                                              ),
                                                              expression:
                                                                "errors.has(scope1+'.room type')"
                                                            }
                                                          ],
                                                          staticClass:
                                                            "error-text text-danger"
                                                        },
                                                        [
                                                          _vm._v(
                                                            _vm._s(
                                                              _vm._f(
                                                                "toString"
                                                              )(
                                                                _vm.errors.first(
                                                                  _vm.scope1 +
                                                                    ".room type"
                                                                ) ||
                                                                  _vm.dbErrors
                                                                    .room_type_code
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
                                                    "wrap-form-select w-full md:w-1/2 required"
                                                },
                                                [
                                                  _c("vs-row", [
                                                    _c("label", [
                                                      _vm._v(
                                                        _vm._s(
                                                          _vm.$t(
                                                            "reservation.bedType"
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
                                                            rawName:
                                                              "v-validate",
                                                            value: "required",
                                                            expression:
                                                              "'required'"
                                                          }
                                                        ],
                                                        staticClass: "w-full",
                                                        attrs: {
                                                          disabled:
                                                            (_vm.modeDataValue ==
                                                              _vm.modeData
                                                                .edit &&
                                                              !_vm.isReservation) ||
                                                            (_vm.isFromAvailability &&
                                                            !_vm.isReservationFromAvaibility
                                                              ? true
                                                              : false) ||
                                                            _vm.resvStatus ==
                                                              _vm
                                                                .reservationStatus
                                                                .checkIn,
                                                          id: "form-select",
                                                          resetOnOptionsChange:
                                                            _vm.resetOptionsChange,
                                                          clearable: false,
                                                          placeholder:
                                                            _vm.$t(
                                                              "reservation.bedType"
                                                            ) +
                                                            " " +
                                                            _vm.$t(
                                                              "table.required"
                                                            ),
                                                          label: "name",
                                                          reduce: function(
                                                            value
                                                          ) {
                                                            return value.code
                                                          },
                                                          options: _vm.bedTypes,
                                                          name: "bed type",
                                                          "data-vv-scope":
                                                            _vm.scope1
                                                        },
                                                        on: {
                                                          input: function(
                                                            $event
                                                          ) {
                                                            _vm.getRoomNumber(
                                                              "bed_type",
                                                              _vm.vModel
                                                            )
                                                            _vm.resetOptionsChange = true
                                                            _vm.resetOnOptionsChangeRoomNumber = true
                                                          }
                                                        },
                                                        model: {
                                                          value:
                                                            _vm.vModel
                                                              .bed_type_code,
                                                          callback: function(
                                                            $$v
                                                          ) {
                                                            _vm.$set(
                                                              _vm.vModel,
                                                              "bed_type_code",
                                                              $$v
                                                            )
                                                          },
                                                          expression:
                                                            "vModel.bed_type_code"
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
                                                                  ".bed type"
                                                              ),
                                                              expression:
                                                                "errors.has(scope1+'.bed type')"
                                                            }
                                                          ],
                                                          staticClass:
                                                            "error-text text-danger"
                                                        },
                                                        [
                                                          _vm._v(
                                                            _vm._s(
                                                              _vm._f(
                                                                "toString"
                                                              )(
                                                                _vm.errors.first(
                                                                  _vm.scope1 +
                                                                    ".bed type"
                                                                ) ||
                                                                  _vm.dbErrors
                                                                    .bed_type_code
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
                                              _c(
                                                "vs-row",
                                                {
                                                  staticClass:
                                                    "wrap-form-select w-full",
                                                  class: {
                                                    required:
                                                      _vm.isRoomNumberRequired
                                                  }
                                                },
                                                [
                                                  _c("label", [
                                                    _c(
                                                      "span",
                                                      {
                                                        staticStyle: {
                                                          "margin-right": "5px",
                                                          "margin-top": "auto"
                                                        }
                                                      },
                                                      [
                                                        _vm._v(
                                                          _vm._s(
                                                            _vm.$t(
                                                              "reservation.room"
                                                            )
                                                          )
                                                        )
                                                      ]
                                                    )
                                                  ]),
                                                  _vm._v(" "),
                                                  _vm.isReservation
                                                    ? _c(
                                                        "vs-checkbox",
                                                        {
                                                          staticClass:
                                                            "w-full md:w-6/12",
                                                          staticStyle: {
                                                            padding: "0px",
                                                            margin: "inherit"
                                                          },
                                                          attrs: {
                                                            disabled:
                                                              _vm.resvStatus ==
                                                              _vm
                                                                .reservationStatus
                                                                .checkIn
                                                          },
                                                          on: {
                                                            input: function(
                                                              $event
                                                            ) {
                                                              return _vm.getRoomNumber(
                                                                "bed_type",
                                                                _vm.vModel
                                                              )
                                                            }
                                                          },
                                                          model: {
                                                            value:
                                                              _vm.readyRoom,
                                                            callback: function(
                                                              $$v
                                                            ) {
                                                              _vm.readyRoom = $$v
                                                            },
                                                            expression:
                                                              "readyRoom"
                                                          }
                                                        },
                                                        [
                                                          _vm._v(
                                                            _vm._s(
                                                              _vm.$t(
                                                                "reservation.ready"
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
                                                "vs-row",
                                                {
                                                  attrs: {
                                                    "vs-type": "flex",
                                                    "vs-justify":
                                                      "space-between"
                                                  }
                                                },
                                                [
                                                  _c(
                                                    "vs-col",
                                                    {
                                                      attrs: {
                                                        "vs-w": "4",
                                                        "vs-xs": "12"
                                                      }
                                                    },
                                                    [
                                                      _c(
                                                        "vs-row",
                                                        [
                                                          _c("v-select", {
                                                            directives: [
                                                              {
                                                                name:
                                                                  "validate",
                                                                rawName:
                                                                  "v-validate",
                                                                value:
                                                                  !_vm.isReservation ||
                                                                  _vm.isRoomNumberRequired
                                                                    ? "required"
                                                                    : "",
                                                                expression:
                                                                  "!isReservation || isRoomNumberRequired ? 'required' : ''"
                                                              }
                                                            ],
                                                            staticClass:
                                                              "wrap-form-select w-full height250",
                                                            attrs: {
                                                              disabled:
                                                                (_vm.modeDataValue ==
                                                                  _vm.modeData
                                                                    .edit &&
                                                                  !_vm.isReservation) ||
                                                                (_vm.isFromAvailability &&
                                                                !_vm.isReservationFromAvaibility
                                                                  ? true
                                                                  : false) ||
                                                                _vm.resvStatus ==
                                                                  _vm
                                                                    .reservationStatus
                                                                    .checkIn,
                                                              resetOnOptionsChange:
                                                                _vm.resetOnOptionsChangeRoomNumber,
                                                              id: "form-select",
                                                              placeholder: _vm.$t(
                                                                "table.select"
                                                              ),
                                                              label: "number",
                                                              reduce: function(
                                                                value
                                                              ) {
                                                                return value.number
                                                              },
                                                              options:
                                                                _vm.roomNumber,
                                                              name:
                                                                "room number",
                                                              "data-vv-scope":
                                                                _vm.scope1
                                                            },
                                                            model: {
                                                              value:
                                                                _vm.vModel
                                                                  .room_number,
                                                              callback: function(
                                                                $$v
                                                              ) {
                                                                _vm.$set(
                                                                  _vm.vModel,
                                                                  "room_number",
                                                                  $$v
                                                                )
                                                              },
                                                              expression:
                                                                "vModel.room_number"
                                                            }
                                                          }),
                                                          _vm._v(" "),
                                                          _c(
                                                            "span",
                                                            {
                                                              directives: [
                                                                {
                                                                  name: "show",
                                                                  rawName:
                                                                    "v-show",
                                                                  value: _vm.errors.has(
                                                                    _vm.scope1 +
                                                                      ".room number"
                                                                  ),
                                                                  expression:
                                                                    "errors.has(scope1+'.room number')"
                                                                }
                                                              ],
                                                              staticClass:
                                                                "error-text text-danger"
                                                            },
                                                            [
                                                              _vm._v(
                                                                _vm._s(
                                                                  _vm._f(
                                                                    "toString"
                                                                  )(
                                                                    _vm.errors.first(
                                                                      _vm.scope1 +
                                                                        ".room number"
                                                                    ) ||
                                                                      _vm
                                                                        .dbErrors
                                                                        .room_number
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
                                                      staticStyle: {
                                                        "margin-right": "15px"
                                                      },
                                                      attrs: {
                                                        "vs-w": "3",
                                                        "vs-xs": "12"
                                                      }
                                                    },
                                                    [
                                                      _c("vs-input-number", {
                                                        directives: [
                                                          {
                                                            name: "validate",
                                                            rawName:
                                                              "v-validate",
                                                            value: "required",
                                                            expression:
                                                              "'required'"
                                                          }
                                                        ],
                                                        staticClass:
                                                          "number-input",
                                                        attrs: {
                                                          min: "1",
                                                          label:
                                                            _vm.$t(
                                                              "reservation.adult"
                                                            ) + ":",
                                                          name: "adult",
                                                          "data-vv-scope":
                                                            _vm.scope1
                                                        },
                                                        model: {
                                                          value:
                                                            _vm.vModel.adult,
                                                          callback: function(
                                                            $$v
                                                          ) {
                                                            _vm.$set(
                                                              _vm.vModel,
                                                              "adult",
                                                              $$v
                                                            )
                                                          },
                                                          expression:
                                                            "vModel.adult"
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
                                                                  ".adult"
                                                              ),
                                                              expression:
                                                                "errors.has(scope1+'.adult')"
                                                            }
                                                          ],
                                                          staticClass:
                                                            "error-text text-danger"
                                                        },
                                                        [
                                                          _vm._v(
                                                            _vm._s(
                                                              _vm._f(
                                                                "toString"
                                                              )(
                                                                _vm.errors.first(
                                                                  _vm.scope1 +
                                                                    ".adult"
                                                                ) ||
                                                                  _vm.dbErrors
                                                                    .adult
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
                                                    {
                                                      staticStyle: {
                                                        "margin-right": "15px"
                                                      },
                                                      attrs: {
                                                        "vs-w": "3",
                                                        "vs-xs": "12"
                                                      }
                                                    },
                                                    [
                                                      _c("vs-input-number", {
                                                        staticClass:
                                                          "number-input",
                                                        attrs: {
                                                          label:
                                                            _vm.$t(
                                                              "reservation.child"
                                                            ) + ":"
                                                        },
                                                        model: {
                                                          value:
                                                            _vm.vModel.child,
                                                          callback: function(
                                                            $$v
                                                          ) {
                                                            _vm.$set(
                                                              _vm.vModel,
                                                              "child",
                                                              $$v
                                                            )
                                                          },
                                                          expression:
                                                            "vModel.child"
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
                                                {
                                                  staticClass:
                                                    "wrap-form-select",
                                                  attrs: {
                                                    "vs-type": "flex",
                                                    "vs-justify":
                                                      "space-between"
                                                  }
                                                },
                                                [
                                                  _vm.vModel.room_type_code
                                                    ? _c(
                                                        "span",
                                                        {
                                                          staticStyle: {
                                                            "margin-right":
                                                              "5px",
                                                            "margin-top": "auto"
                                                          },
                                                          attrs: {
                                                            id: "available"
                                                          }
                                                        },
                                                        [
                                                          _vm._v(
                                                            _vm._s(
                                                              _vm.$t(
                                                                "reservation.available"
                                                              )
                                                            ) +
                                                              " : " +
                                                              _vm._s(
                                                                _vm.availableRoom
                                                              )
                                                          )
                                                        ]
                                                      )
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
                                                    "wrap-form-select w-full md:w-4/12",
                                                  class: {
                                                    required:
                                                      _vm.isBusinessSourceRequired
                                                  }
                                                },
                                                [
                                                  _c("vs-row", [
                                                    _c("label", [
                                                      _vm._v(
                                                        _vm._s(
                                                          _vm.$t(
                                                            "reservation.businessSource"
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
                                                            rawName:
                                                              "v-validate",
                                                            value: _vm.isBusinessSourceRequired
                                                              ? "required"
                                                              : "",
                                                            expression:
                                                              "isBusinessSourceRequired ? 'required' : ''"
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
                                                          reduce: function(
                                                            value
                                                          ) {
                                                            return value.code
                                                          },
                                                          options:
                                                            _vm.dataLookup
                                                              .business_source,
                                                          name:
                                                            "business source",
                                                          "data-vv-scope":
                                                            _vm.scope1
                                                        },
                                                        on: {
                                                          input: function(
                                                            $event
                                                          ) {
                                                            return _vm.getRoomRate(
                                                              _vm.vModel
                                                            )
                                                          }
                                                        },
                                                        model: {
                                                          value:
                                                            _vm.vModel
                                                              .business_source_code,
                                                          callback: function(
                                                            $$v
                                                          ) {
                                                            _vm.$set(
                                                              _vm.vModel,
                                                              "business_source_code",
                                                              $$v
                                                            )
                                                          },
                                                          expression:
                                                            "vModel.business_source_code"
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
                                                                  ".business source"
                                                              ),
                                                              expression:
                                                                "errors.has(scope1+'.business source')"
                                                            }
                                                          ],
                                                          staticClass:
                                                            "error-text text-danger"
                                                        },
                                                        [
                                                          _vm._v(
                                                            _vm._s(
                                                              _vm._f(
                                                                "toString"
                                                              )(
                                                                _vm.errors.first(
                                                                  _vm.scope1 +
                                                                    ".business source"
                                                                ) ||
                                                                  _vm.dbErrors
                                                                    .business_source_code
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
                                                    "wrap-form-select w-full md:w-4/12"
                                                },
                                                [
                                                  _c("vs-row", [
                                                    _vm._v(
                                                      _vm._s(
                                                        _vm.$t(
                                                          "reservation.commissionType"
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
                                                          reduce: function(
                                                            value
                                                          ) {
                                                            return value.code
                                                          },
                                                          options:
                                                            _vm.dataLookup
                                                              .commission_type
                                                        },
                                                        model: {
                                                          value:
                                                            _vm.vModel
                                                              .commission_type_code,
                                                          callback: function(
                                                            $$v
                                                          ) {
                                                            _vm.$set(
                                                              _vm.vModel,
                                                              "commission_type_code",
                                                              $$v
                                                            )
                                                          },
                                                          expression:
                                                            "vModel.commission_type_code"
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
                                                    "wrap-form-select w-full md:w-4/12"
                                                },
                                                [
                                                  _c("vs-row", [
                                                    _vm._v(
                                                      _vm._s(
                                                        _vm.$t(
                                                          "reservation.commissionValue"
                                                        )
                                                      )
                                                    )
                                                  ]),
                                                  _vm._v(" "),
                                                  _c(
                                                    "vs-row",
                                                    [
                                                      _c("input-number", {
                                                        ref: "quantity",
                                                        staticClass: "w-full",
                                                        attrs: {
                                                          placeholder: _vm.$t(
                                                            "reservation.commissionValue"
                                                          )
                                                        },
                                                        model: {
                                                          value:
                                                            _vm.vModel
                                                              .commission_value,
                                                          callback: function(
                                                            $$v
                                                          ) {
                                                            _vm.$set(
                                                              _vm.vModel,
                                                              "commission_value",
                                                              $$v
                                                            )
                                                          },
                                                          expression:
                                                            "vModel.commission_value"
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
                                                    "wrap-form-select w-full md:w-6/12",
                                                  class: {
                                                    required:
                                                      _vm.isMarketRequired
                                                  }
                                                },
                                                [
                                                  _c("vs-row", [
                                                    _c("label", [
                                                      _vm._v(
                                                        _vm._s(
                                                          _vm.$t(
                                                            "reservation.market"
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
                                                            rawName:
                                                              "v-validate",
                                                            value: _vm.isMarketRequired
                                                              ? "required"
                                                              : "",
                                                            expression:
                                                              "isMarketRequired ? 'required' : ''"
                                                          }
                                                        ],
                                                        staticClass:
                                                          "w-full height150",
                                                        attrs: {
                                                          clearable: false,
                                                          id: "form-select",
                                                          placeholder:
                                                            _vm.$t(
                                                              "reservation.market"
                                                            ) +
                                                            " " +
                                                            _vm.$t(
                                                              "table.required"
                                                            ),
                                                          label: "name",
                                                          reduce: function(
                                                            value
                                                          ) {
                                                            return value.code
                                                          },
                                                          options:
                                                            _vm.dataLookup
                                                              .market,
                                                          name: "market",
                                                          "data-vv-scope":
                                                            _vm.scope1
                                                        },
                                                        model: {
                                                          value:
                                                            _vm.vModel
                                                              .market_code,
                                                          callback: function(
                                                            $$v
                                                          ) {
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
                                                                _vm.scope1 +
                                                                  ".market"
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
                                                              _vm._f(
                                                                "toString"
                                                              )(
                                                                _vm.errors.first(
                                                                  _vm.scope1 +
                                                                    ".market"
                                                                ) ||
                                                                  _vm.dbErrors
                                                                    .market_code
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
                                                    "wrap-form-select w-full md:w-6/12"
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
                                                          "w-full height150",
                                                        attrs: {
                                                          id: "form-select",
                                                          placeholder: _vm.$t(
                                                            "table.select"
                                                          ),
                                                          label: "name",
                                                          reduce: function(
                                                            value
                                                          ) {
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
                                                          callback: function(
                                                            $$v
                                                          ) {
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
                                          )
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "vs-col",
                                        {
                                          staticClass: "content-right lg:w-1/2"
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
                                                    "reservation.rateInformation"
                                                  )
                                                )
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
                                                    "wrap-form-select w-full md:w-6/12 required"
                                                },
                                                [
                                                  _c("vs-row", [
                                                    _c("label", [
                                                      _vm._v(
                                                        _vm._s(
                                                          _vm.$t(
                                                            "reservation.roomRate"
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
                                                            rawName:
                                                              "v-validate",
                                                            value: "required",
                                                            expression:
                                                              "'required'"
                                                          }
                                                        ],
                                                        staticClass: "w-full",
                                                        attrs: {
                                                          id: "form-select",
                                                          clearable: false,
                                                          resetOnOptionsChange:
                                                            _vm.resetOptionsChange,
                                                          placeholder:
                                                            _vm.$t(
                                                              "reservation.roomRate"
                                                            ) +
                                                            " " +
                                                            _vm.$t(
                                                              "table.required"
                                                            ),
                                                          label: "name",
                                                          reduce: function(
                                                            value
                                                          ) {
                                                            return value.code
                                                          },
                                                          options:
                                                            _vm.roomRates,
                                                          name: "room rate",
                                                          "data-vv-scope":
                                                            _vm.scope1
                                                        },
                                                        on: {
                                                          input: function(
                                                            $event
                                                          ) {
                                                            return _vm.getDailyRate(
                                                              _vm.vModel
                                                            )
                                                          }
                                                        },
                                                        model: {
                                                          value:
                                                            _vm.vModel
                                                              .room_rate_code,
                                                          callback: function(
                                                            $$v
                                                          ) {
                                                            _vm.$set(
                                                              _vm.vModel,
                                                              "room_rate_code",
                                                              $$v
                                                            )
                                                          },
                                                          expression:
                                                            "vModel.room_rate_code"
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
                                                                  ".room rate"
                                                              ),
                                                              expression:
                                                                "errors.has(scope1+'.room rate')"
                                                            }
                                                          ],
                                                          staticClass:
                                                            "error-text text-danger"
                                                        },
                                                        [
                                                          _vm._v(
                                                            _vm._s(
                                                              _vm._f(
                                                                "toString"
                                                              )(
                                                                _vm.errors.first(
                                                                  _vm.scope1 +
                                                                    ".room rate"
                                                                ) ||
                                                                  _vm.dbErrors
                                                                    .room_rate_code
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
                                                  staticClass: "w-full md:w-1/2"
                                                },
                                                [
                                                  _c(
                                                    "vs-row",
                                                    [
                                                      _c(
                                                        "span",
                                                        {
                                                          staticClass:
                                                            "wrap-form-select",
                                                          staticStyle: {
                                                            "margin-right":
                                                              "5px"
                                                          }
                                                        },
                                                        [
                                                          _vm._v(
                                                            _vm._s(
                                                              _vm.$t(
                                                                "reservation.discount"
                                                              )
                                                            )
                                                          )
                                                        ]
                                                      ),
                                                      _vm._v(" "),
                                                      _c(
                                                        "vs-radio",
                                                        {
                                                          staticClass:
                                                            "w-full wrap-form-select md:w-4/12",
                                                          attrs: {
                                                            "vs-name":
                                                              "percent_amount",
                                                            "vs-value": "0"
                                                          },
                                                          on: {
                                                            input:
                                                              _vm.setDiscountRate
                                                          },
                                                          model: {
                                                            value:
                                                              _vm.vModel
                                                                .discount_percent,
                                                            callback: function(
                                                              $$v
                                                            ) {
                                                              _vm.$set(
                                                                _vm.vModel,
                                                                "discount_percent",
                                                                $$v
                                                              )
                                                            },
                                                            expression:
                                                              "vModel.discount_percent"
                                                          }
                                                        },
                                                        [
                                                          _vm._v(
                                                            _vm._s(
                                                              _vm.$t(
                                                                "reservation.amount"
                                                              )
                                                            )
                                                          )
                                                        ]
                                                      ),
                                                      _vm._v(" "),
                                                      _c(
                                                        "vs-radio",
                                                        {
                                                          staticClass:
                                                            "w-full wrap-form-select md:w-3/12",
                                                          attrs: {
                                                            "vs-name":
                                                              "percent_amount",
                                                            "vs-value": "-1"
                                                          },
                                                          on: {
                                                            input:
                                                              _vm.setDiscountRate
                                                          },
                                                          model: {
                                                            value:
                                                              _vm.vModel
                                                                .discount_percent,
                                                            callback: function(
                                                              $$v
                                                            ) {
                                                              _vm.$set(
                                                                _vm.vModel,
                                                                "discount_percent",
                                                                $$v
                                                              )
                                                            },
                                                            expression:
                                                              "vModel.discount_percent"
                                                          }
                                                        },
                                                        [
                                                          _vm._v(
                                                            _vm._s(
                                                              _vm.$t(
                                                                "reservation.percent"
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
                                                    "vs-row",
                                                    [
                                                      _c("input-number", {
                                                        staticClass: "w-full",
                                                        on: {
                                                          input:
                                                            _vm.setDiscountRate
                                                        },
                                                        model: {
                                                          value:
                                                            _vm.vModel.discount,
                                                          callback: function(
                                                            $$v
                                                          ) {
                                                            _vm.$set(
                                                              _vm.vModel,
                                                              "discount",
                                                              $$v
                                                            )
                                                          },
                                                          expression:
                                                            "vModel.discount"
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
                                                  label: _vm.$t(
                                                    "table.weekday"
                                                  ),
                                                  placeholder: _vm.$t(
                                                    "table.weekday"
                                                  )
                                                },
                                                on: {
                                                  input: _vm.setDiscountRate
                                                },
                                                model: {
                                                  value:
                                                    _vm.vModel.weekday_rate,
                                                  callback: function($$v) {
                                                    _vm.$set(
                                                      _vm.vModel,
                                                      "weekday_rate",
                                                      $$v
                                                    )
                                                  },
                                                  expression:
                                                    "vModel.weekday_rate"
                                                }
                                              }),
                                              _vm._v(" "),
                                              _c("input-number", {
                                                staticClass: "w-full md:w-1/2",
                                                attrs: {
                                                  disabled: "",
                                                  label: ".",
                                                  placeholder: _vm.$t(
                                                    "table.weekend"
                                                  )
                                                },
                                                model: {
                                                  value:
                                                    _vm.weekday_rate_discount,
                                                  callback: function($$v) {
                                                    _vm.weekday_rate_discount = $$v
                                                  },
                                                  expression:
                                                    "weekday_rate_discount"
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
                                              _c("input-number", {
                                                staticClass: "w-full md:w-1/2",
                                                attrs: {
                                                  label: _vm.$t(
                                                    "table.weekend"
                                                  ),
                                                  placeholder: _vm.$t(
                                                    "table.weekday"
                                                  )
                                                },
                                                on: {
                                                  input: _vm.setDiscountRate
                                                },
                                                model: {
                                                  value:
                                                    _vm.vModel.weekend_rate,
                                                  callback: function($$v) {
                                                    _vm.$set(
                                                      _vm.vModel,
                                                      "weekend_rate",
                                                      $$v
                                                    )
                                                  },
                                                  expression:
                                                    "vModel.weekend_rate"
                                                }
                                              }),
                                              _vm._v(" "),
                                              _c("input-number", {
                                                staticClass: "w-full md:w-1/2",
                                                attrs: {
                                                  disabled: "",
                                                  label: ".",
                                                  placeholder: _vm.$t(
                                                    "table.weekend"
                                                  )
                                                },
                                                model: {
                                                  value:
                                                    _vm.weekend_rate_discount,
                                                  callback: function($$v) {
                                                    _vm.weekend_rate_discount = $$v
                                                  },
                                                  expression:
                                                    "weekend_rate_discount"
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
                                                    "wrap-form-select w-full md:w-6/12 required"
                                                },
                                                [
                                                  _c("vs-row", [
                                                    _c("label", [
                                                      _vm._v(
                                                        _vm._s(
                                                          _vm.$t(
                                                            "reservation.paymentType"
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
                                                            rawName:
                                                              "v-validate",
                                                            value: "required",
                                                            expression:
                                                              "'required'"
                                                          }
                                                        ],
                                                        staticClass: "w-full",
                                                        attrs: {
                                                          id: "form-select",
                                                          clearable: false,
                                                          placeholder:
                                                            _vm.$t(
                                                              "reservation.paymentType"
                                                            ) +
                                                            " " +
                                                            _vm.$t(
                                                              "table.required"
                                                            ),
                                                          label: "name",
                                                          reduce: function(
                                                            value
                                                          ) {
                                                            return value.code
                                                          },
                                                          options:
                                                            _vm.dataLookup
                                                              .payment_type,
                                                          name: "payment type",
                                                          "data-vv-scope":
                                                            _vm.scope1
                                                        },
                                                        model: {
                                                          value:
                                                            _vm.vModel
                                                              .payment_type_code,
                                                          callback: function(
                                                            $$v
                                                          ) {
                                                            _vm.$set(
                                                              _vm.vModel,
                                                              "payment_type_code",
                                                              $$v
                                                            )
                                                          },
                                                          expression:
                                                            "vModel.payment_type_code"
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
                                                                  ".payment type"
                                                              ),
                                                              expression:
                                                                "errors.has(scope1+'.payment type')"
                                                            }
                                                          ],
                                                          staticClass:
                                                            "error-text text-danger"
                                                        },
                                                        [
                                                          _vm._v(
                                                            _vm._s(
                                                              _vm._f(
                                                                "toString"
                                                              )(
                                                                _vm.errors.first(
                                                                  _vm.scope1 +
                                                                    ".payment type"
                                                                ) ||
                                                                  _vm.dbErrors
                                                                    .payment_type_code
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
                                              staticClass:
                                                "wrap-form-select mt-3",
                                              attrs: {
                                                "vs-type": "flex",
                                                "vs-justify": "space-between"
                                              }
                                            },
                                            [
                                              _c("vs-textarea", {
                                                staticClass: "w-full",
                                                attrs: {
                                                  label: _vm.$t(
                                                    "reservation.billInstruction"
                                                  )
                                                },
                                                model: {
                                                  value:
                                                    _vm.vModel.bill_instruction,
                                                  callback: function($$v) {
                                                    _vm.$set(
                                                      _vm.vModel,
                                                      "bill_instruction",
                                                      $$v
                                                    )
                                                  },
                                                  expression:
                                                    "vModel.bill_instruction"
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
                                  staticClass: "mb-3",
                                  attrs: {
                                    icon: "date_range",
                                    title: _vm.$t(
                                      "reservation.personalInformation"
                                    ),
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
                                                    "wrap-form-select w-full md:w-4/12",
                                                  class: {
                                                    required:
                                                      _vm.isTitleRequired
                                                  }
                                                },
                                                [
                                                  _c("vs-row", [
                                                    _c("label", [
                                                      _vm._v(
                                                        _vm._s(
                                                          _vm.$t(
                                                            "reservation.title"
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
                                                            rawName:
                                                              "v-validate",
                                                            value: _vm.isTitleRequired
                                                              ? "required"
                                                              : "",
                                                            expression:
                                                              "isTitleRequired ? 'required' : ''"
                                                          }
                                                        ],
                                                        staticClass: "w-full",
                                                        attrs: {
                                                          id: "form-select",
                                                          placeholder: _vm.$t(
                                                            "table.select"
                                                          ),
                                                          label: "code",
                                                          reduce: function(
                                                            value
                                                          ) {
                                                            return value.code
                                                          },
                                                          options:
                                                            _vm.dataLookup
                                                              .title,
                                                          name: "title",
                                                          "data-vv-scope":
                                                            _vm.scope1
                                                        },
                                                        model: {
                                                          value:
                                                            _vm.vModel
                                                              .title_code,
                                                          callback: function(
                                                            $$v
                                                          ) {
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
                                                                _vm.scope1 +
                                                                  ".title"
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
                                                              _vm._f(
                                                                "toString"
                                                              )(
                                                                _vm.errors.first(
                                                                  _vm.scope1 +
                                                                    ".title"
                                                                ) ||
                                                                  _vm.dbErrors
                                                                    .title_code
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
                                                    "w-full vs-input md:w-8/12"
                                                },
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
                                                      _c("suggestions", {
                                                        directives: [
                                                          {
                                                            name: "validate",
                                                            rawName:
                                                              "v-validate",
                                                            value: "required",
                                                            expression:
                                                              "'required'"
                                                          }
                                                        ],
                                                        staticClass: "w-full",
                                                        attrs: {
                                                          id: "fullname",
                                                          options:
                                                            _vm.guestProfileOptions,
                                                          onItemSelected:
                                                            _vm.onSearchItemSelected,
                                                          onInputChange:
                                                            _vm.onInputChange,
                                                          name: "fullname",
                                                          "data-vv-scope":
                                                            _vm.scope1
                                                        },
                                                        scopedSlots: _vm._u([
                                                          {
                                                            key: "item",
                                                            fn: function(
                                                              props
                                                            ) {
                                                              return _c(
                                                                "div",
                                                                {
                                                                  staticClass:
                                                                    "single-item"
                                                                },
                                                                [
                                                                  _c("span", [
                                                                    _vm._v(
                                                                      _vm._s(
                                                                        props
                                                                          .item
                                                                          .full_name
                                                                      )
                                                                    )
                                                                  ])
                                                                ]
                                                              )
                                                            }
                                                          }
                                                        ]),
                                                        model: {
                                                          value:
                                                            _vm.vModel
                                                              .full_name,
                                                          callback: function(
                                                            $$v
                                                          ) {
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
                                                              _vm._f(
                                                                "toString"
                                                              )(
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
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "vs-row",
                                                {
                                                  staticClass:
                                                    "wrap-form-select",
                                                  attrs: {
                                                    "vs-type": "flex",
                                                    "vs-justify": "flex-end"
                                                  }
                                                },
                                                [
                                                  _c(
                                                    "vs-button",
                                                    {
                                                      attrs: { size: "small" },
                                                      on: {
                                                        click:
                                                          _vm.resetGuestInformationDetail
                                                      }
                                                    },
                                                    [_vm._v("Reset")]
                                                  )
                                                ],
                                                1
                                              )
                                            ],
                                            1
                                          ),
                                          _vm._v(" "),
                                          _vm.isReservation ||
                                          _vm.isReservationFromAvaibility
                                            ? _c(
                                                "vs-row",
                                                {
                                                  class: _vm.rowMarginBottom,
                                                  attrs: {
                                                    "vs-type": "flex",
                                                    "vs-justify":
                                                      "space-between"
                                                  }
                                                },
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
                                                    staticClass:
                                                      "required w-full",
                                                    attrs: {
                                                      label: _vm.$t(
                                                        "reservation.resvBy"
                                                      ),
                                                      "description-text": _vm._f(
                                                        "toString"
                                                      )(
                                                        _vm.errors.first(
                                                          _vm.scope1 +
                                                            ".reservation by"
                                                        ) ||
                                                          _vm.dbErrors
                                                            .reservation_by
                                                      ),
                                                      maxLength: 100,
                                                      name: "reservation by",
                                                      "data-vv-scope":
                                                        _vm.scope1
                                                    },
                                                    model: {
                                                      value:
                                                        _vm.vModel
                                                          .reservation_by,
                                                      callback: function($$v) {
                                                        _vm.$set(
                                                          _vm.vModel,
                                                          "reservation_by",
                                                          $$v
                                                        )
                                                      },
                                                      expression:
                                                        "vModel.reservation_by"
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
                                                    "wrap-form-select w-full md:w-1/2"
                                                },
                                                [
                                                  _c("vs-row", [
                                                    _vm._v(
                                                      _vm._s(
                                                        _vm.$t(
                                                          "reservation.member"
                                                        )
                                                      )
                                                    )
                                                  ]),
                                                  _vm._v(" "),
                                                  _c(
                                                    "vs-row",
                                                    [
                                                      _c("v-select", {
                                                        staticClass: "w-full",
                                                        attrs: {
                                                          id: "form-select",
                                                          placeholder: _vm.$t(
                                                            "table.select"
                                                          ),
                                                          label: "name",
                                                          reduce: function(
                                                            value
                                                          ) {
                                                            return value.code
                                                          },
                                                          options:
                                                            _vm.dataLookup
                                                              .member
                                                        },
                                                        model: {
                                                          value:
                                                            _vm.vModel
                                                              .member_code,
                                                          callback: function(
                                                            $$v
                                                          ) {
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
                                                staticClass: "w-full md:w-1/2",
                                                attrs: {
                                                  label: _vm.$t(
                                                    "reservation.street"
                                                  ),
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
                                                    "wrap-form-select w-full md:w-1/2"
                                                },
                                                [
                                                  _c("vs-row", [
                                                    _vm._v(
                                                      _vm._s(
                                                        _vm.$t(
                                                          "reservation.country"
                                                        )
                                                      )
                                                    )
                                                  ]),
                                                  _vm._v(" "),
                                                  _c(
                                                    "vs-row",
                                                    [
                                                      _c("v-select", {
                                                        staticClass: "w-full",
                                                        attrs: {
                                                          id: "form-select",
                                                          placeholder: _vm.$t(
                                                            "table.select"
                                                          ),
                                                          label: "name",
                                                          reduce: function(
                                                            value
                                                          ) {
                                                            return value.code
                                                          },
                                                          options:
                                                            _vm.dataLookup
                                                              .country
                                                        },
                                                        on: {
                                                          input: function(
                                                            $event
                                                          ) {
                                                            _vm.getState(true)
                                                            _vm.resetOnOptionsChangeState = true
                                                          }
                                                        },
                                                        model: {
                                                          value:
                                                            _vm.vModel
                                                              .country_code,
                                                          callback: function(
                                                            $$v
                                                          ) {
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
                                                    required:
                                                      _vm.isStateRequired
                                                  }
                                                },
                                                [
                                                  _c("vs-row", [
                                                    _c("label", [
                                                      _vm._v(
                                                        _vm._s(
                                                          _vm.$t(
                                                            "reservation.state"
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
                                                            rawName:
                                                              "v-validate",
                                                            value: _vm.isStateRequired
                                                              ? "required"
                                                              : "",
                                                            expression:
                                                              " isStateRequired ? 'required' : ''"
                                                          }
                                                        ],
                                                        staticClass: "w-full",
                                                        attrs: {
                                                          id: "form-select",
                                                          resetOnOptionsChange:
                                                            _vm.resetOnOptionsChangeState,
                                                          placeholder: _vm.$t(
                                                            "table.select"
                                                          ),
                                                          label: "name",
                                                          reduce: function(
                                                            value
                                                          ) {
                                                            return value.code
                                                          },
                                                          options: _vm.state,
                                                          name: "state",
                                                          "data-vv-scope":
                                                            _vm.scope1
                                                        },
                                                        on: {
                                                          input: function(
                                                            $event
                                                          ) {
                                                            _vm.getState(false)
                                                            _vm.resetOnOptionsChangeCity = true
                                                          }
                                                        },
                                                        model: {
                                                          value:
                                                            _vm.vModel
                                                              .state_code,
                                                          callback: function(
                                                            $$v
                                                          ) {
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
                                                                _vm.scope1 +
                                                                  ".state"
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
                                                              _vm._f(
                                                                "toString"
                                                              )(
                                                                _vm.errors.first(
                                                                  _vm.scope1 +
                                                                    ".state"
                                                                ) ||
                                                                  _vm.dbErrors
                                                                    .state_code
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
                                              _c(
                                                "div",
                                                {
                                                  staticClass:
                                                    "wrap-form-select w-full md:w-1/2",
                                                  class: {
                                                    required:
                                                      _vm.isStateRequired
                                                  }
                                                },
                                                [
                                                  _c("vs-row", [
                                                    _c("label", [
                                                      _vm._v(
                                                        _vm._s(
                                                          _vm.$t(
                                                            "reservation.city"
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
                                                            rawName:
                                                              "v-validate",
                                                            value: _vm.isCityRequired
                                                              ? "required"
                                                              : "",
                                                            expression:
                                                              " isCityRequired ? 'required' : ''"
                                                          }
                                                        ],
                                                        staticClass: "w-full",
                                                        attrs: {
                                                          id: "city",
                                                          resetOnOptionsChange:
                                                            _vm.resetOnOptionsChangeCity,
                                                          placeholder: _vm.$t(
                                                            "table.select"
                                                          ),
                                                          label: "name",
                                                          reduce: function(
                                                            value
                                                          ) {
                                                            return value.code
                                                          },
                                                          options: _vm.city,
                                                          name: "city",
                                                          "data-vv-scope":
                                                            _vm.scope1
                                                        },
                                                        model: {
                                                          value:
                                                            _vm.vModel
                                                              .city_code,
                                                          callback: function(
                                                            $$v
                                                          ) {
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
                                                                _vm.scope1 +
                                                                  ".city"
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
                                                              _vm._f(
                                                                "toString"
                                                              )(
                                                                _vm.errors.first(
                                                                  _vm.scope1 +
                                                                    ".city"
                                                                ) ||
                                                                  _vm.dbErrors
                                                                    .city_code
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
                                                staticClass: "w-full md:w-1/2",
                                                attrs: {
                                                  disabled:
                                                    _vm.vModel.city_code !==
                                                    "OTH",
                                                  label: "."
                                                },
                                                model: {
                                                  value: _vm.vModel.city,
                                                  callback: function($$v) {
                                                    _vm.$set(
                                                      _vm.vModel,
                                                      "city",
                                                      $$v
                                                    )
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
                                                            rawName:
                                                              "v-validate",
                                                            value: _vm.isNationalityRequired
                                                              ? "required"
                                                              : "",
                                                            expression:
                                                              " isNationalityRequired ? 'required' : ''"
                                                          }
                                                        ],
                                                        staticClass: "w-full",
                                                        attrs: {
                                                          id: "form-select",
                                                          placeholder: _vm.$t(
                                                            "table.select"
                                                          ),
                                                          label: "name",
                                                          reduce: function(
                                                            value
                                                          ) {
                                                            return value.code
                                                          },
                                                          options:
                                                            _vm.dataLookup
                                                              .nationality,
                                                          name: "nationality",
                                                          "data-vv-scope":
                                                            _vm.scope1
                                                        },
                                                        model: {
                                                          value:
                                                            _vm.vModel
                                                              .nationality_code,
                                                          callback: function(
                                                            $$v
                                                          ) {
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
                                                              _vm._f(
                                                                "toString"
                                                              )(
                                                                _vm.errors.first(
                                                                  _vm.scope1 +
                                                                    ".nationality"
                                                                ) ||
                                                                  _vm.dbErrors
                                                                    .nationality_code
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
                                                staticClass: "w-full md:w-1/2",
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
                                                  expression:
                                                    "vModel.postal_code"
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
                                                "span",
                                                {
                                                  staticClass:
                                                    "wrap-form-select",
                                                  staticStyle: {
                                                    "margin-right": "5px"
                                                  }
                                                },
                                                [
                                                  _vm._v(
                                                    _vm._s(
                                                      _vm.$t(
                                                        "reservation.gender"
                                                      )
                                                    )
                                                  )
                                                ]
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "vs-radio",
                                                {
                                                  staticClass:
                                                    "w-full wrap-form-select md:w-4/12 ",
                                                  attrs: {
                                                    "vs-name": "is_male",
                                                    "vs-value": "-1"
                                                  },
                                                  model: {
                                                    value: _vm.vModel.is_male,
                                                    callback: function($$v) {
                                                      _vm.$set(
                                                        _vm.vModel,
                                                        "is_male",
                                                        $$v
                                                      )
                                                    },
                                                    expression: "vModel.is_male"
                                                  }
                                                },
                                                [
                                                  _vm._v(
                                                    _vm._s(
                                                      _vm.$t("reservation.male")
                                                    )
                                                  )
                                                ]
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "vs-radio",
                                                {
                                                  staticClass:
                                                    "w-full wrap-form-select md:w-4/12",
                                                  attrs: {
                                                    "vs-name": "is_male",
                                                    "vs-value": "0"
                                                  },
                                                  model: {
                                                    value: _vm.vModel.is_male,
                                                    callback: function($$v) {
                                                      _vm.$set(
                                                        _vm.vModel,
                                                        "is_male",
                                                        $$v
                                                      )
                                                    },
                                                    expression: "vModel.is_male"
                                                  }
                                                },
                                                [
                                                  _vm._v(
                                                    _vm._s(
                                                      _vm.$t(
                                                        "reservation.female"
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
                                          staticClass: "content-right",
                                          attrs: { "vs-lg": "6", "vs-xs": "12" }
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
                                              _c("vs-input", {
                                                directives: [
                                                  {
                                                    name: "validate",
                                                    rawName: "v-validate",
                                                    value: _vm.isPhone1Required
                                                      ? "required"
                                                      : "",
                                                    expression:
                                                      " isPhone1Required ? 'required' : ''"
                                                  }
                                                ],
                                                staticClass: "w-full md:w-1/2",
                                                class: {
                                                  required: _vm.isPhone1Required
                                                },
                                                attrs: {
                                                  label:
                                                    _vm.$t(
                                                      "reservation.phone"
                                                    ) + " 1",
                                                  placeholder:
                                                    _vm.$t(
                                                      "reservation.phone"
                                                    ) + " 1",
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
                                                    _vm.$t(
                                                      "reservation.phone"
                                                    ) + " 2",
                                                  placeholder:
                                                    _vm.$t(
                                                      "reservation.phone"
                                                    ) + " 2",
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
                                              class: _vm.rowMarginBottom,
                                              attrs: {
                                                "vs-type": "flex",
                                                "vs-justify": "space-between"
                                              }
                                            },
                                            [
                                              _c("vs-input", {
                                                staticClass: "w-full md:w-1/2",
                                                attrs: {
                                                  label: _vm.$t(
                                                    "reservation.fax"
                                                  ),
                                                  placeholder: _vm.$t(
                                                    "reservation.fax"
                                                  ),
                                                  maxLength: 20
                                                },
                                                model: {
                                                  value: _vm.vModel.fax,
                                                  callback: function($$v) {
                                                    _vm.$set(
                                                      _vm.vModel,
                                                      "fax",
                                                      $$v
                                                    )
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
                                                      " isEmailRequired ? 'required' : ''"
                                                  }
                                                ],
                                                staticClass: "w-full md:w-1/2",
                                                class: {
                                                  required: _vm.isEmailRequired
                                                },
                                                attrs: {
                                                  label: _vm.$t(
                                                    "reservation.email"
                                                  ),
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
                                                    _vm.$set(
                                                      _vm.vModel,
                                                      "email",
                                                      $$v
                                                    )
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
                                              class: _vm.rowMarginBottom,
                                              attrs: {
                                                "vs-type": "flex",
                                                "vs-justify": "space-between"
                                              }
                                            },
                                            [
                                              _c("vs-input", {
                                                staticClass: "w-full md:w-1/2",
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
                                                    required:
                                                      _vm.isPhone1Required
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
                                                            rawName:
                                                              "v-validate",
                                                            value: _vm.isCompanyRequired
                                                              ? "required"
                                                              : "",
                                                            expression:
                                                              " isCompanyRequired ? 'required' : ''"
                                                          }
                                                        ],
                                                        staticClass: "w-full",
                                                        attrs: {
                                                          id: "form-select",
                                                          placeholder: _vm.$t(
                                                            "table.select"
                                                          ),
                                                          label: "name",
                                                          reduce: function(
                                                            value
                                                          ) {
                                                            return value.code
                                                          },
                                                          options:
                                                            _vm.dataLookup
                                                              .company,
                                                          name: "company",
                                                          "data-vv-scope":
                                                            _vm.scope1
                                                        },
                                                        model: {
                                                          value:
                                                            _vm.vModel
                                                              .company_code,
                                                          callback: function(
                                                            $$v
                                                          ) {
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
                                                              _vm._f(
                                                                "toString"
                                                              )(
                                                                _vm.errors.first(
                                                                  _vm.scope1 +
                                                                    ".company"
                                                                ) ||
                                                                  _vm.dbErrors
                                                                    .company_code
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
                                                    "wrap-form-select w-full md:w-1/2"
                                                },
                                                [
                                                  _c("vs-row", [
                                                    _vm._v(
                                                      _vm._s(
                                                        _vm.$t(
                                                          "reservation.gsType"
                                                        )
                                                      )
                                                    )
                                                  ]),
                                                  _vm._v(" "),
                                                  _c(
                                                    "vs-row",
                                                    [
                                                      _c("v-select", {
                                                        staticClass: "w-full",
                                                        attrs: {
                                                          id: "form-select",
                                                          placeholder: _vm.$t(
                                                            "table.select"
                                                          ),
                                                          label: "name",
                                                          reduce: function(
                                                            value
                                                          ) {
                                                            return value.code
                                                          },
                                                          options:
                                                            _vm.dataLookup
                                                              .guest_type
                                                        },
                                                        model: {
                                                          value:
                                                            _vm.vModel
                                                              .guest_type_code,
                                                          callback: function(
                                                            $$v
                                                          ) {
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
                                                              _vm.vModel
                                                                .is_incognito,
                                                            callback: function(
                                                              $$v
                                                            ) {
                                                              _vm.$set(
                                                                _vm.vModel,
                                                                "is_incognito",
                                                                $$v
                                                              )
                                                            },
                                                            expression:
                                                              "vModel.is_incognito"
                                                          }
                                                        },
                                                        [
                                                          _vm._v(
                                                            _vm._s(
                                                              _vm.$t(
                                                                "reservation.incognitoGuest"
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
                                                          "reservation.idCard"
                                                        )
                                                      )
                                                    )
                                                  ]),
                                                  _vm._v(" "),
                                                  _c(
                                                    "vs-row",
                                                    [
                                                      _c("v-select", {
                                                        staticClass: "w-full",
                                                        attrs: {
                                                          id: "form-select",
                                                          placeholder: _vm.$t(
                                                            "table.select"
                                                          ),
                                                          label: "name",
                                                          reduce: function(
                                                            value
                                                          ) {
                                                            return value.code
                                                          },
                                                          options:
                                                            _vm.dataLookup
                                                              .id_card
                                                        },
                                                        model: {
                                                          value:
                                                            _vm.vModel
                                                              .id_card_code,
                                                          callback: function(
                                                            $$v
                                                          ) {
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
                                                staticClass: "w-full md:w-1/2",
                                                attrs: {
                                                  label:
                                                    _vm.$t(
                                                      "reservation.idCard"
                                                    ) + "#",
                                                  placeholder:
                                                    _vm.$t(
                                                      "reservation.idCard"
                                                    ) + "#",
                                                  maxLength: 25
                                                },
                                                model: {
                                                  value:
                                                    _vm.vModel.id_card_number,
                                                  callback: function($$v) {
                                                    _vm.$set(
                                                      _vm.vModel,
                                                      "id_card_number",
                                                      $$v
                                                    )
                                                  },
                                                  expression:
                                                    "vModel.id_card_number"
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
                                              _c("vs-input", {
                                                staticClass: "w-full md:w-1/2",
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
                                                  expression:
                                                    "vModel.birth_place"
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
                                                          type: "date",
                                                          confirm: "",
                                                          "confirm-text": "Ok",
                                                          lang: _vm.$t("lang"),
                                                          "value-type":
                                                            "YYYY-MM-DD",
                                                          format: "DD/MM/YYYY",
                                                          label: "name",
                                                          placeholder: _vm.$t(
                                                            "reservation.birthDate"
                                                          )
                                                        },
                                                        scopedSlots: _vm._u([
                                                          {
                                                            key: "footer",
                                                            fn: function() {
                                                              return [
                                                                _c(
                                                                  "vs-button",
                                                                  {
                                                                    attrs: {
                                                                      size:
                                                                        "small"
                                                                    },
                                                                    on: {
                                                                      click:
                                                                        _vm.resetDate
                                                                    }
                                                                  },
                                                                  [
                                                                    _vm._v(
                                                                      "\n                                                                    Reset\n                                                                "
                                                                    )
                                                                  ]
                                                                )
                                                              ]
                                                            },
                                                            proxy: true
                                                          }
                                                        ]),
                                                        model: {
                                                          value:
                                                            _vm.vModel
                                                              .birth_date,
                                                          callback: function(
                                                            $$v
                                                          ) {
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
                              ),
                              _vm._v(" "),
                              _c(
                                "vx-card",
                                {
                                  attrs: {
                                    icon: "date_range",
                                    title: _vm.$t(
                                      "reservation.generalInformation"
                                    ),
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
                                              class: [
                                                _vm.rowMarginBottom,
                                                "wrap-form-select"
                                              ],
                                              attrs: {
                                                "vs-type": "flex",
                                                "vs-justify": "space-between"
                                              }
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
                                                    staticClass: "w-full",
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
                                            "vs-row",
                                            {
                                              class: [
                                                _vm.rowMarginBottom,
                                                "wrap-form-select"
                                              ],
                                              attrs: {
                                                "vs-type": "flex",
                                                "vs-justify": "space-between"
                                              }
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
                                                    staticClass: "w-full",
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
                                                        _vm.vModel
                                                          .marketing_code,
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
                                              _c("vs-input", {
                                                staticClass: "w-full",
                                                attrs: {
                                                  label:
                                                    _vm.$t("reservation.doc") +
                                                    " #",
                                                  placeholder:
                                                    _vm.$t("reservation.doc") +
                                                    " #",
                                                  maxLength: 50
                                                },
                                                model: {
                                                  value:
                                                    _vm.vModel.document_number,
                                                  callback: function($$v) {
                                                    _vm.$set(
                                                      _vm.vModel,
                                                      "document_number",
                                                      $$v
                                                    )
                                                  },
                                                  expression:
                                                    "vModel.document_number"
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
                                              _c("vs-input", {
                                                directives: [
                                                  {
                                                    name: "validate",
                                                    rawName: "v-validate",
                                                    value: _vm.isTAVoucherRequired
                                                      ? "required"
                                                      : "",
                                                    expression:
                                                      " isTAVoucherRequired ? 'required' : ''"
                                                  }
                                                ],
                                                staticClass: "w-full",
                                                class: {
                                                  required:
                                                    _vm.isTAVoucherRequired
                                                },
                                                attrs: {
                                                  label:
                                                    _vm.$t(
                                                      "reservation.taVoucher"
                                                    ) + " #",
                                                  placeholder:
                                                    _vm.$t(
                                                      "reservation.taVoucher"
                                                    ) + " #",
                                                  maxLength: 50,
                                                  "description-text": _vm._f(
                                                    "toString"
                                                  )(
                                                    _vm.errors.first(
                                                      _vm.scope1 + ".ta voucher"
                                                    ) ||
                                                      _vm.dbErrors
                                                        .voucher_number_ta
                                                  ),
                                                  name: "ta voucher",
                                                  "data-vv-scope": _vm.scope1
                                                },
                                                model: {
                                                  value:
                                                    _vm.vModel
                                                      .voucher_number_ta,
                                                  callback: function($$v) {
                                                    _vm.$set(
                                                      _vm.vModel,
                                                      "voucher_number_ta",
                                                      $$v
                                                    )
                                                  },
                                                  expression:
                                                    "vModel.voucher_number_ta"
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
                                              _c("vs-input", {
                                                staticClass: "w-full",
                                                attrs: {
                                                  label:
                                                    _vm.$t(
                                                      "reservation.flightNumber"
                                                    ) + " #",
                                                  placeholder:
                                                    _vm.$t(
                                                      "reservation.flightNumber"
                                                    ) + " #",
                                                  maxLength: 20
                                                },
                                                model: {
                                                  value:
                                                    _vm.vModel.flight_number,
                                                  callback: function($$v) {
                                                    _vm.$set(
                                                      _vm.vModel,
                                                      "flight_number",
                                                      $$v
                                                    )
                                                  },
                                                  expression:
                                                    "vModel.flight_number"
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
                                                    "wrap-form-select w-full md:w-1/2"
                                                },
                                                [
                                                  _c("vs-row", [
                                                    _vm._v(
                                                      _vm._s(
                                                        _vm.$t(
                                                          "reservation.flightArrival"
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
                                                          type: "datetime",
                                                          "show-time-panel":
                                                            _vm.showTimeRangePanel,
                                                          confirm: "",
                                                          "confirm-text": "Ok",
                                                          lang: _vm.$t("lang"),
                                                          "value-type":
                                                            "YYYY-MM-DD HH:mm:ss",
                                                          format:
                                                            "DD/MM/YYYY HH:mm:ss",
                                                          label: "name",
                                                          placeholder: _vm.$t(
                                                            "reservation.flightArrival"
                                                          )
                                                        },
                                                        on: {
                                                          close: function(
                                                            $event
                                                          ) {
                                                            _vm.showTimeRangePanel = false
                                                          }
                                                        },
                                                        scopedSlots: _vm._u([
                                                          {
                                                            key: "footer",
                                                            fn: function() {
                                                              return [
                                                                _c(
                                                                  "vs-button",
                                                                  {
                                                                    attrs: {
                                                                      size:
                                                                        "small"
                                                                    },
                                                                    on: {
                                                                      click:
                                                                        _vm.resetDate
                                                                    }
                                                                  },
                                                                  [
                                                                    _vm._v(
                                                                      "\n                                                                Reset\n                                                            "
                                                                    )
                                                                  ]
                                                                ),
                                                                _vm._v(" "),
                                                                _c(
                                                                  "vs-button",
                                                                  {
                                                                    attrs: {
                                                                      size:
                                                                        "small"
                                                                    },
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
                                                                            ? "Select Date"
                                                                            : "Select Time"
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
                                                          value:
                                                            _vm.vModel
                                                              .flight_arrival,
                                                          callback: function(
                                                            $$v
                                                          ) {
                                                            _vm.$set(
                                                              _vm.vModel,
                                                              "flight_arrival",
                                                              $$v
                                                            )
                                                          },
                                                          expression:
                                                            "vModel.flight_arrival"
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
                                                          "reservation.flightDeparture"
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
                                                          type: "datetime",
                                                          "show-time-panel":
                                                            _vm.showTimeRangePanel,
                                                          confirm: "",
                                                          "confirm-text": "Ok",
                                                          lang: _vm.$t("lang"),
                                                          "value-type":
                                                            "YYYY-MM-DD HH:mm:ss",
                                                          format:
                                                            "DD/MM/YYYY HH:mm:ss",
                                                          label: "name",
                                                          placeholder: _vm.$t(
                                                            "reservation.flightDeparture"
                                                          )
                                                        },
                                                        on: {
                                                          close: function(
                                                            $event
                                                          ) {
                                                            _vm.showTimeRangePanel = false
                                                          }
                                                        },
                                                        scopedSlots: _vm._u([
                                                          {
                                                            key: "footer",
                                                            fn: function() {
                                                              return [
                                                                _c(
                                                                  "vs-button",
                                                                  {
                                                                    attrs: {
                                                                      size:
                                                                        "small"
                                                                    },
                                                                    on: {
                                                                      click:
                                                                        _vm.resetDate
                                                                    }
                                                                  },
                                                                  [
                                                                    _vm._v(
                                                                      "\n                                                                    Reset\n                                                                "
                                                                    )
                                                                  ]
                                                                ),
                                                                _vm._v(" "),
                                                                _c(
                                                                  "vs-button",
                                                                  {
                                                                    attrs: {
                                                                      size:
                                                                        "small"
                                                                    },
                                                                    on: {
                                                                      click:
                                                                        _vm.toggleTimeRangePanel
                                                                    }
                                                                  },
                                                                  [
                                                                    _vm._v(
                                                                      "\n                                                                    " +
                                                                        _vm._s(
                                                                          _vm.showTimeRangePanel
                                                                            ? "Select Date"
                                                                            : "Select Time"
                                                                        ) +
                                                                        "\n                                                                "
                                                                    )
                                                                  ]
                                                                )
                                                              ]
                                                            },
                                                            proxy: true
                                                          }
                                                        ]),
                                                        model: {
                                                          value:
                                                            _vm.vModel
                                                              .flight_departure,
                                                          callback: function(
                                                            $$v
                                                          ) {
                                                            _vm.$set(
                                                              _vm.vModel,
                                                              "flight_departure",
                                                              $$v
                                                            )
                                                          },
                                                          expression:
                                                            "vModel.flight_departure"
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
                                        {
                                          staticClass: "content-right",
                                          attrs: { "vs-lg": "6", "vs-xs": "12" }
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
                                                              _vm.vModel
                                                                .show_notes,
                                                            callback: function(
                                                              $$v
                                                            ) {
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
                                              class: [
                                                _vm.rowMarginBottom,
                                                "wrap-form-select"
                                              ],
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
                                                  placeholder: _vm.$t(
                                                    "note.notes"
                                                  ),
                                                  label: _vm.$t(
                                                    "reservation.notes"
                                                  )
                                                },
                                                model: {
                                                  value: _vm.vModel.notes,
                                                  callback: function($$v) {
                                                    _vm.$set(
                                                      _vm.vModel,
                                                      "notes",
                                                      $$v
                                                    )
                                                  },
                                                  expression: "vModel.notes"
                                                }
                                              })
                                            ],
                                            1
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "vs-row",
                                            {
                                              class: [
                                                _vm.rowMarginBottom,
                                                "wrap-form-select"
                                              ],
                                              attrs: {
                                                "vs-type": "flex",
                                                "vs-justify": "space-between"
                                              }
                                            },
                                            [
                                              _c("vs-textarea", {
                                                directives: [
                                                  {
                                                    name: "validate",
                                                    rawName: "v-validate",
                                                    value: _vm.isHKNoteRequired
                                                      ? "required"
                                                      : "",
                                                    expression:
                                                      " isHKNoteRequired ? 'required' : ''"
                                                  }
                                                ],
                                                staticClass: "w-full",
                                                class: {
                                                  required: _vm.isHKNoteRequired
                                                },
                                                staticStyle: {
                                                  "margin-bottom": "0px"
                                                },
                                                attrs: {
                                                  placeholder: _vm.$t(
                                                    "note.notes"
                                                  ),
                                                  label: _vm.$t(
                                                    "reservation.hkNotes"
                                                  ),
                                                  name: "hk note",
                                                  "data-vv-scope": _vm.scope1
                                                },
                                                model: {
                                                  value: _vm.vModel.hk_note,
                                                  callback: function($$v) {
                                                    _vm.$set(
                                                      _vm.vModel,
                                                      "hk_note",
                                                      $$v
                                                    )
                                                  },
                                                  expression: "vModel.hk_note"
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
                                                        _vm.scope1 + ".hk note"
                                                      ),
                                                      expression:
                                                        "errors.has(scope1+'.hk note')"
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
                                                            ".hk note"
                                                        ) ||
                                                          _vm.dbErrors.hk_note
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
                                                    "wrap-form-select w-full md:w-1/2"
                                                },
                                                [
                                                  _c("vs-row", [
                                                    _vm._v(
                                                      _vm._s(
                                                        _vm.$t(
                                                          "reservation.resv"
                                                        ) + " #"
                                                      )
                                                    )
                                                  ]),
                                                  _vm._v(" "),
                                                  _c(
                                                    "vs-row",
                                                    [
                                                      _c("vs-input", {
                                                        staticClass: "w-full",
                                                        attrs: { disabled: "" },
                                                        model: {
                                                          value:
                                                            _vm.vModel
                                                              .reservation_number,
                                                          callback: function(
                                                            $$v
                                                          ) {
                                                            _vm.$set(
                                                              _vm.vModel,
                                                              "reservation_number",
                                                              $$v
                                                            )
                                                          },
                                                          expression:
                                                            "vModel.reservation_number"
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
                                                          "reservation.folio"
                                                        ) + " #"
                                                      )
                                                    )
                                                  ]),
                                                  _vm._v(" "),
                                                  _c(
                                                    "vs-row",
                                                    [
                                                      _c("vs-input", {
                                                        staticClass: "w-full",
                                                        attrs: { disabled: "" },
                                                        model: {
                                                          value:
                                                            _vm.vModel
                                                              .folio_number,
                                                          callback: function(
                                                            $$v
                                                          ) {
                                                            _vm.$set(
                                                              _vm.vModel,
                                                              "folio_number",
                                                              $$v
                                                            )
                                                          },
                                                          expression:
                                                            "vModel.folio_number"
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
                                                    "wrap-form-select w-full"
                                                },
                                                [
                                                  _c("vs-row", [
                                                    _vm._v(
                                                      _vm._s(
                                                        _vm.$t(
                                                          "reservation.balance"
                                                        ) + " #"
                                                      )
                                                    )
                                                  ]),
                                                  _vm._v(" "),
                                                  _c(
                                                    "vs-row",
                                                    [
                                                      _c("input-number", {
                                                        staticClass: "w-full",
                                                        attrs: {
                                                          disabled: "",
                                                          placeholder: _vm.$t(
                                                            "table.quantity"
                                                          )
                                                        },
                                                        model: {
                                                          value:
                                                            _vm.vModel.balance,
                                                          callback: function(
                                                            $$v
                                                          ) {
                                                            _vm.$set(
                                                              _vm.vModel,
                                                              "balance",
                                                              $$v
                                                            )
                                                          },
                                                          expression:
                                                            "vModel.balance"
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
                  _vm.isReservation
                    ? _c(
                        "vs-tab",
                        {
                          attrs: {
                            disabled: "",
                            id: "deposit",
                            label: "Deposit"
                          },
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
                                "vs-card",
                                [
                                  _c(
                                    "vs-row",
                                    {
                                      attrs: {
                                        "vs-type": "flex",
                                        "vs-align": "center",
                                        "vs-justify": "space-between"
                                      }
                                    },
                                    [
                                      _c("h6", [
                                        _vm._v(
                                          "Balance : " +
                                            _vm._s(
                                              _vm._f("currency_format")(
                                                _vm.balanceDeposit
                                              )
                                            ) +
                                            " "
                                        )
                                      ]),
                                      _vm._v(" "),
                                      _c(
                                        "vs-button",
                                        {
                                          attrs: { icon: "add" },
                                          on: {
                                            click: function($event) {
                                              _vm.modalPaymentOption = !_vm.modalPaymentOption
                                            }
                                          }
                                        },
                                        [_vm._v("Deposit")]
                                      )
                                    ],
                                    1
                                  )
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "vs-card",
                                {
                                  staticClass: "vs-con-loading__container",
                                  attrs: { id: "depositTable" }
                                },
                                [
                                  _c(
                                    "div",
                                    { staticStyle: { overflow: "auto" } },
                                    [
                                      _c(
                                        "vs-row",
                                        {
                                          staticStyle: {
                                            "margin-bottom": "5px"
                                          },
                                          attrs: { "vs-w": "6" }
                                        },
                                        [
                                          _c(
                                            "vs-col",
                                            { attrs: { "vs-lg": "6" } },
                                            [
                                              _c(
                                                "vs-row",
                                                [
                                                  _c(
                                                    "label",
                                                    { attrs: { for: "" } },
                                                    [_vm._v("Show Void")]
                                                  ),
                                                  _vm._v(" "),
                                                  _c("vs-switch", {
                                                    attrs: {
                                                      id: "void",
                                                      label: "void",
                                                      "vs-icon": "done"
                                                    },
                                                    on: {
                                                      change: function($event) {
                                                        return _vm.getDepositList()
                                                      }
                                                    },
                                                    model: {
                                                      value:
                                                        _vm.showVoidDeposit,
                                                      callback: function($$v) {
                                                        _vm.showVoidDeposit = $$v
                                                      },
                                                      expression:
                                                        "showVoidDeposit"
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
                                            { attrs: { "vs-lg": "6" } },
                                            [
                                              _c(
                                                "vs-row",
                                                [
                                                  _c(
                                                    "label",
                                                    { attrs: { for: "" } },
                                                    [_vm._v("Show Correction")]
                                                  ),
                                                  _vm._v(" "),
                                                  _c("vs-switch", {
                                                    attrs: {
                                                      id: "correction",
                                                      color: "success",
                                                      "vs-icon": "done"
                                                    },
                                                    on: {
                                                      change: function($event) {
                                                        return _vm.getDepositList()
                                                      }
                                                    },
                                                    model: {
                                                      value:
                                                        _vm.showCorrectionDeposit,
                                                      callback: function($$v) {
                                                        _vm.showCorrectionDeposit = $$v
                                                      },
                                                      expression:
                                                        "showCorrectionDeposit"
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
                                      _c("deposit", {
                                        attrs: {
                                          table: true,
                                          data: _vm.guestDeposit,
                                          total: _vm.totalGuestDeposit
                                        },
                                        on: {
                                          showDepositForm: _vm.showDepositForm,
                                          printReceipt: _vm.handlePrintReceipt,
                                          credential: _vm.showCredential
                                        }
                                      })
                                    ],
                                    1
                                  )
                                ]
                              )
                            ],
                            1
                          )
                        ],
                        1
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _c(
                    "vs-tab",
                    {
                      attrs: {
                        disabled: "",
                        id: "scheduledRate",
                        label: "Scheduled Rate"
                      },
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
                            "vs-row",
                            {
                              attrs: {
                                "vs-type": "flex",
                                "vs-justify": "space-between"
                              }
                            },
                            [
                              _c("span", [_vm._v("Scheduled Rate")]),
                              _vm._v(" "),
                              _c(
                                "vs-button",
                                {
                                  on: {
                                    click: function($event) {
                                      return _vm.handleSidebarScheduledRate(
                                        "",
                                        _vm.modeData.insert
                                      )
                                    }
                                  }
                                },
                                [_vm._v("Insert")]
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c("br"),
                          _vm._v(" "),
                          _c("scheduled-rate", {
                            ref: "scheduledRate",
                            attrs: { table: true, data: _vm.scheduledRate },
                            on: {
                              refreshData: function($event) {
                                return _vm.getScheduledRate()
                              },
                              delete: _vm.handleDeleteScheduledRate,
                              showModal: _vm.handleSidebarScheduledRate
                            }
                          })
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  false
                    ? undefined
                    : _vm._e()
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "vs-prompt",
            {
              staticClass: "form_deposit_charge two_column",
              attrs: {
                type: _vm.dialog.typeDialog,
                "buttons-hidden": "",
                id: "popup-deposit",
                active: _vm.modalChild,
                title: _vm.modalChildTitle
              },
              on: {
                "update:active": function($event) {
                  _vm.modalChild = $event
                }
              }
            },
            [
              this.modeChildValue === _vm.modeBreakdown.tracking ||
              _vm.modeChildValue === _vm.modeBusinessSource.tracking ||
              _vm.modeChildValue === _vm.modeCurrency.tracking
                ? _c(
                    "div",
                    [
                      _c("tracking", {
                        attrs: {
                          idData: _vm.idData,
                          theData: _vm.dataTracking,
                          tableName: _vm.mainTableName
                        }
                      })
                    ],
                    1
                  )
                : _vm.modeChildValue === _vm.modeDeposit.cash ||
                  _vm.modeChildValue === _vm.modeDeposit.card ||
                  _vm.modeChildValue === _vm.modeDeposit.other ||
                  _vm.modeChildValue === _vm.modeDeposit.refund
                ? _c("div", { staticClass: "popup-body" }, [
                    _c(
                      "div",
                      {
                        ref: "form",
                        staticStyle: { padding: "20px", "padding-top": "0px" }
                      },
                      [
                        _c(
                          "vs-row",
                          { staticClass: "mt-6" },
                          [
                            _c(
                              "div",
                              {
                                class: {
                                  "content-left vs-lg-6 vs-xs-12":
                                    _vm.modeChildValue === _vm.modeDeposit.card
                                },
                                attrs: { id: "transaction" }
                              },
                              [
                                _c(
                                  "h4",
                                  { staticStyle: { "margin-bottom": "5px" } },
                                  [_vm._v("Transaction Information")]
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
                                          "wrap-form-select w-full md:w-1/2"
                                      },
                                      [
                                        _c("vs-row", [
                                          _vm._v(
                                            _vm._s(
                                              _vm.$t("transaction.currency")
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
                                              staticClass: "w-full",
                                              attrs: {
                                                id: "form-select",
                                                clearable: false,
                                                placeholder: _vm.$t(
                                                  "table.select"
                                                ),
                                                label: "code",
                                                reduce: function(value) {
                                                  return value.code
                                                },
                                                options:
                                                  _vm.dataLookupDeposit
                                                    .currency,
                                                name: "currency",
                                                "data-vv-scope": "deposit"
                                              },
                                              on: {
                                                input: _vm.getExchangeRate
                                              },
                                              model: {
                                                value:
                                                  _vm.vDeposit.currency_code,
                                                callback: function($$v) {
                                                  _vm.$set(
                                                    _vm.vDeposit,
                                                    "currency_code",
                                                    $$v
                                                  )
                                                },
                                                expression:
                                                  "vDeposit.currency_code"
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
                                                staticClass:
                                                  "error-text text-danger"
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
                                      ref: "quantity",
                                      staticClass: "w-full md:w-1/2",
                                      attrs: {
                                        disabled: "",
                                        label: _vm.$t("transaction.excRate"),
                                        placeholder: _vm.$t(
                                          "transaction.excRate"
                                        ),
                                        description: _vm._f("toString")(
                                          _vm.errors.first(
                                            "deposit.exc.rate"
                                          ) || _vm.dbErrors.exchange_rate
                                        ),
                                        name: "exc.rate",
                                        "data-vv-scope": "deposit"
                                      },
                                      model: {
                                        value: _vm.vDeposit.exchange_rate,
                                        callback: function($$v) {
                                          _vm.$set(
                                            _vm.vDeposit,
                                            "exchange_rate",
                                            $$v
                                          )
                                        },
                                        expression: "vDeposit.exchange_rate"
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
                                          "wrap-form-select w-full md:w-1/2"
                                      },
                                      [
                                        _c("vs-row", [
                                          _vm._v(
                                            _vm._s(
                                              _vm.$t(
                                                "transaction.subDepartment"
                                              )
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
                                                options:
                                                  _vm.dataLookupDeposit
                                                    .sub_department,
                                                name: "sub department",
                                                "data-vv-scope": "deposit"
                                              },
                                              on: {
                                                input: function($event) {
                                                  return _vm.getAccount()
                                                }
                                              },
                                              model: {
                                                value:
                                                  _vm.vDeposit
                                                    .sub_department_code,
                                                callback: function($$v) {
                                                  _vm.$set(
                                                    _vm.vDeposit,
                                                    "sub_department_code",
                                                    $$v
                                                  )
                                                },
                                                expression:
                                                  "vDeposit.sub_department_code"
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
                                                      "deposit.sub department"
                                                    ),
                                                    expression:
                                                      "errors.has('deposit.sub department')"
                                                  }
                                                ],
                                                staticClass:
                                                  "error-text text-danger"
                                              },
                                              [
                                                _vm._v(
                                                  _vm._s(
                                                    _vm.errors.first(
                                                      "deposit.sub department"
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
                                              _vm.$t("transaction.account")
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
                                              staticClass: "w-full",
                                              attrs: {
                                                id: "form-select",
                                                resetOnOptionsChange: true,
                                                placeholder: _vm.$t(
                                                  "table.select"
                                                ),
                                                clearable: false,
                                                label: "name",
                                                options: _vm.accounts,
                                                name: "account",
                                                "data-vv-scope": "deposit"
                                              },
                                              scopedSlots: _vm._u([
                                                {
                                                  key: "option",
                                                  fn: function(option) {
                                                    return [
                                                      _vm._v(
                                                        "\n                                                " +
                                                          _vm._s(option.code) +
                                                          " | " +
                                                          _vm._s(option.name) +
                                                          "\n                                            "
                                                      )
                                                    ]
                                                  }
                                                }
                                              ]),
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
                                                      "deposit.account"
                                                    ),
                                                    expression:
                                                      "errors.has('deposit.account')"
                                                  }
                                                ],
                                                staticClass:
                                                  "error-text text-danger"
                                              },
                                              [
                                                _vm._v(
                                                  _vm._s(
                                                    _vm.errors.first(
                                                      "deposit.account"
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
                                          _vm.vDeposit.currency_code,
                                        placeholder: _vm.$t("table.amount"),
                                        description: _vm._f("toString")(
                                          _vm.errors.first("deposit.amount") ||
                                            _vm.dbErrors.quantity
                                        ),
                                        name: "amount",
                                        "data-vv-scope": "deposit"
                                      },
                                      on: { input: _vm.getTotalAmount },
                                      model: {
                                        value: _vm.vDeposit.amount_foreign,
                                        callback: function($$v) {
                                          _vm.$set(
                                            _vm.vDeposit,
                                            "amount_foreign",
                                            $$v
                                          )
                                        },
                                        expression: "vDeposit.amount_foreign"
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
                                        value: _vm.vDeposit.amount,
                                        callback: function($$v) {
                                          _vm.$set(_vm.vDeposit, "amount", $$v)
                                        },
                                        expression: "vDeposit.amount"
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
                                    _c("vs-input", {
                                      staticClass: "w-full",
                                      attrs: {
                                        label: _vm.$t("transaction.remark"),
                                        placeholder: _vm.$t(
                                          "transaction.remark"
                                        ),
                                        maxLength: 50
                                      },
                                      model: {
                                        value: _vm.vDeposit.remark,
                                        callback: function($$v) {
                                          _vm.$set(_vm.vDeposit, "remark", $$v)
                                        },
                                        expression: "vDeposit.remark"
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
                                        label: _vm.$t("transaction.docNumber"),
                                        placeholder: _vm.$t(
                                          "transaction.docNumber"
                                        ),
                                        maxLength: 50,
                                        description: _vm.errors.first(
                                          "deposit.doc number"
                                        ),
                                        name: "doc number",
                                        "data-vv-scope": "deposit"
                                      },
                                      model: {
                                        value: _vm.vDeposit.document_number,
                                        callback: function($$v) {
                                          _vm.$set(
                                            _vm.vDeposit,
                                            "document_number",
                                            $$v
                                          )
                                        },
                                        expression: "vDeposit.document_number"
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
                                              "deposit.doc number"
                                            ),
                                            expression:
                                              "errors.has('deposit.doc number')"
                                          }
                                        ],
                                        staticClass: "error-text text-danger"
                                      },
                                      [
                                        _vm._v(
                                          _vm._s(
                                            _vm.errors.first(
                                              "deposit.doc number"
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
                            _vm.modeChildValue === _vm.modeDeposit.card
                              ? _c(
                                  "vs-col",
                                  {
                                    staticClass: "content-right",
                                    attrs: { "vs-lg": "6", "vs-xs": "12" }
                                  },
                                  [
                                    _c(
                                      "h4",
                                      {
                                        staticStyle: { "margin-bottom": "5px" }
                                      },
                                      [_vm._v("Card Information")]
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
                                              "wrap-form-select w-full md:w-1/2"
                                          },
                                          [
                                            _c("vs-row", [
                                              _vm._v(
                                                _vm._s(
                                                  _vm.$t("transaction.cardType")
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
                                                  staticClass:
                                                    "w-full height250",
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
                                                    options:
                                                      _vm.dataLookupDeposit
                                                        .card_bank,
                                                    name: "card bank",
                                                    "data-vv-scope": "card"
                                                  },
                                                  model: {
                                                    value:
                                                      _vm.vDeposit
                                                        .card_bank_code,
                                                    callback: function($$v) {
                                                      _vm.$set(
                                                        _vm.vDeposit,
                                                        "card_bank_code",
                                                        $$v
                                                      )
                                                    },
                                                    expression:
                                                      "vDeposit.card_bank_code"
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
                                                          "card.card bank"
                                                        ),
                                                        expression:
                                                          "errors.has('card.card bank')"
                                                      }
                                                    ],
                                                    staticClass:
                                                      "error-text text-danger"
                                                  },
                                                  [
                                                    _vm._v(
                                                      _vm._s(
                                                        _vm.errors.first(
                                                          "card.card bank"
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
                                                      value: "required",
                                                      expression: "'required'"
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
                                                    options:
                                                      _vm.dataLookupDeposit
                                                        .card_type,
                                                    name: "card type",
                                                    "data-vv-scope": "card"
                                                  },
                                                  model: {
                                                    value:
                                                      _vm.vDeposit
                                                        .card_type_code,
                                                    callback: function($$v) {
                                                      _vm.$set(
                                                        _vm.vDeposit,
                                                        "card_type_code",
                                                        $$v
                                                      )
                                                    },
                                                    expression:
                                                      "vDeposit.card_type_code"
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
                                                          "card.card type"
                                                        ),
                                                        expression:
                                                          "errors.has('card.card type')"
                                                      }
                                                    ],
                                                    staticClass:
                                                      "error-text text-danger"
                                                  },
                                                  [
                                                    _vm._v(
                                                      _vm._s(
                                                        _vm.errors.first(
                                                          "card.card type"
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
                                        _c("vs-input", {
                                          staticClass: "w-full",
                                          attrs: {
                                            label: _vm.$t(
                                              "transaction.cardNumber"
                                            ),
                                            placeholder: _vm.$t(
                                              "transaction.cardNumber"
                                            ),
                                            maxLength: 50
                                          },
                                          model: {
                                            value: _vm.vDeposit.card_number,
                                            callback: function($$v) {
                                              _vm.$set(
                                                _vm.vDeposit,
                                                "card_number",
                                                $$v
                                              )
                                            },
                                            expression: "vDeposit.card_number"
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
                                        _c("vs-input", {
                                          staticClass: "w-full md:w-1/2",
                                          attrs: {
                                            label: _vm.$t(
                                              "transaction.cardHolder"
                                            ),
                                            placeholder: _vm.$t(
                                              "transaction.cardHolder"
                                            ),
                                            maxLength: 50
                                          },
                                          model: {
                                            value: _vm.vDeposit.holder,
                                            callback: function($$v) {
                                              _vm.$set(
                                                _vm.vDeposit,
                                                "holder",
                                                $$v
                                              )
                                            },
                                            expression: "vDeposit.holder"
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
                                                    "transaction.expirationDate"
                                                  )
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
                                                      staticClass:
                                                        "w-full height200",
                                                      attrs: {
                                                        id: "expDate",
                                                        placeholder: "MM",
                                                        clearable: false,
                                                        options: _vm.mt
                                                      },
                                                      model: {
                                                        value:
                                                          _vm.vDeposit
                                                            .exp_month,
                                                        callback: function(
                                                          $$v
                                                        ) {
                                                          _vm.$set(
                                                            _vm.vDeposit,
                                                            "exp_month",
                                                            $$v
                                                          )
                                                        },
                                                        expression:
                                                          "vDeposit.exp_month"
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
                                                      staticClass:
                                                        "w-full height200",
                                                      attrs: {
                                                        id: "expDate",
                                                        placeholder: "YY",
                                                        clearable: false,
                                                        options: _vm.yr
                                                      },
                                                      model: {
                                                        value:
                                                          _vm.vDeposit.exp_year,
                                                        callback: function(
                                                          $$v
                                                        ) {
                                                          _vm.$set(
                                                            _vm.vDeposit,
                                                            "exp_year",
                                                            $$v
                                                          )
                                                        },
                                                        expression:
                                                          "vDeposit.exp_year"
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
                                        class: _vm.rowMarginBottom,
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
                                              _vm.$t("transaction.charge") +
                                              " (%)",
                                            placeholder: _vm.$t("table.amount"),
                                            description: _vm._f("toString")(
                                              _vm.errors.first("card.amount") ||
                                                _vm.dbErrors.quantity
                                            ),
                                            name: "amount",
                                            "data-vv-scope": "card"
                                          },
                                          on: { input: _vm.getTotalAmount },
                                          model: {
                                            value: _vm.vDeposit.charge_percent,
                                            callback: function($$v) {
                                              _vm.$set(
                                                _vm.vDeposit,
                                                "charge_percent",
                                                $$v
                                              )
                                            },
                                            expression:
                                              "vDeposit.charge_percent"
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
                                              _vm.errors.first("card.amount") ||
                                                _vm.dbErrors.amount
                                            ),
                                            name: "amount",
                                            "data-vv-scope": "card"
                                          },
                                          model: {
                                            value: _vm.vDeposit.charge_amount,
                                            callback: function($$v) {
                                              _vm.$set(
                                                _vm.vDeposit,
                                                "charge_amount",
                                                $$v
                                              )
                                            },
                                            expression: "vDeposit.charge_amount"
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
                                            label: _vm.$t(
                                              "transaction.totalAmount"
                                            ),
                                            placeholder: _vm.$t("table.amount"),
                                            description: _vm._f("toString")(
                                              _vm.errors.first("card.amount") ||
                                                _vm.dbErrors.quantity
                                            ),
                                            name: "amount",
                                            "data-vv-scope": "card"
                                          },
                                          model: {
                                            value: _vm.vDeposit.total_amount,
                                            callback: function($$v) {
                                              _vm.$set(
                                                _vm.vDeposit,
                                                "total_amount",
                                                $$v
                                              )
                                            },
                                            expression: "vDeposit.total_amount"
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
                        ),
                        _vm._v(" "),
                        _c(
                          "vs-row",
                          { staticClass: "mt-6" },
                          [
                            _c(
                              "vs-col",
                              { staticClass: "w-full flex" },
                              [
                                _c(
                                  "vs-button",
                                  {
                                    staticClass: "vs-con-loading__container",
                                    attrs: {
                                      disabled: _vm.btnDepositSaveDisabled,
                                      id: "button-save-deposit",
                                      icon: "save",
                                      color: "success"
                                    },
                                    on: {
                                      click: function($event) {
                                        return _vm.saveDeposit()
                                      }
                                    }
                                  },
                                  [_vm._v(_vm._s(_vm.$t("table.save")))]
                                ),
                                _vm._v(" "),
                                _c(
                                  "vs-button",
                                  {
                                    staticClass: "ml-auto",
                                    attrs: { icon: "close", color: "danger" },
                                    on: {
                                      click: function($event) {
                                        _vm.modalChild = false
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
                  ])
                : _vm.modeExtraCharge === _vm.modeData.insert ||
                  _vm.modeExtraCharge === _vm.modeData.edit
                ? _c("div", { staticClass: "popup-body" }, [
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
                                    _vm._v(
                                      _vm._s(_vm.$t("table.subDepartment"))
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
                                        options:
                                          _vm.dlExtraCharge.sub_department,
                                        name: "sub department",
                                        "data-vv-scope": "extraCharge"
                                      },
                                      on: {
                                        input: function($event) {
                                          _vm.getDataLookupExtraCharge()
                                          _vm.resetOptionsChange = true
                                        }
                                      },
                                      model: {
                                        value:
                                          _vm.vExtraCharge.sub_department_code,
                                        callback: function($$v) {
                                          _vm.$set(
                                            _vm.vExtraCharge,
                                            "sub_department_code",
                                            $$v
                                          )
                                        },
                                        expression:
                                          "vExtraCharge.sub_department_code"
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
                                              "extraCharge.sub department"
                                            ),
                                            expression:
                                              "errors.has('extraCharge.sub department')"
                                          }
                                        ],
                                        staticClass: "error-text text-danger"
                                      },
                                      [
                                        _vm._v(
                                          _vm._s(
                                            _vm.errors.first(
                                              "extraCharge.sub department"
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
                                  "wrap-form-select w-full md:w-1/2 required"
                              },
                              [
                                _c("vs-row", [
                                  _c("label", [
                                    _vm._v(_vm._s(_vm.$t("table.account")))
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
                                          _vm.resetOptionsChange,
                                        clearable: false,
                                        placeholder: _vm.$t("table.select"),
                                        label: "name",
                                        reduce: function(value) {
                                          return value.code
                                        },
                                        options: _vm.dlExtraCharge.account,
                                        name: "account",
                                        "data-vv-scope": "extraCharge"
                                      },
                                      model: {
                                        value: _vm.vExtraCharge.account_code,
                                        callback: function($$v) {
                                          _vm.$set(
                                            _vm.vExtraCharge,
                                            "account_code",
                                            $$v
                                          )
                                        },
                                        expression: "vExtraCharge.account_code"
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
                                              "extraCharge.account"
                                            ),
                                            expression:
                                              "errors.has('extraCharge.account')"
                                          }
                                        ],
                                        staticClass: "error-text text-danger"
                                      },
                                      [
                                        _vm._v(
                                          _vm._s(
                                            _vm.errors.first(
                                              "extraCharge.account"
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
                              directives: [
                                {
                                  name: "validate",
                                  rawName: "v-validate",
                                  value: "required",
                                  expression: "'required'"
                                }
                              ],
                              staticClass: "w-full sm:w-4/12 required",
                              attrs: {
                                disabled: _vm.vExtraCharge.per_pax,
                                label: _vm.$t("table.quantity"),
                                placeholder: _vm.$t("table.quantity"),
                                description: _vm._f("toString")(
                                  _vm.errors.first("extraCharge.quantity") ||
                                    _vm.dbErrors.quantity
                                ),
                                name: "quantity",
                                "data-vv-scope": "extraCharge"
                              },
                              model: {
                                value: _vm.vExtraCharge.quantity,
                                callback: function($$v) {
                                  _vm.$set(_vm.vExtraCharge, "quantity", $$v)
                                },
                                expression: "vExtraCharge.quantity"
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
                              staticClass: "w-full sm:w-4/12 required",
                              attrs: {
                                label: _vm.$t("table.amount"),
                                placeholder: _vm.$t("table.amount"),
                                description: _vm._f("toString")(
                                  _vm.errors.first("extraCharge.amount") ||
                                    _vm.dbErrors.quantity
                                ),
                                name: "amount",
                                "data-vv-scope": "extraCharge"
                              },
                              model: {
                                value: _vm.vExtraCharge.amount,
                                callback: function($$v) {
                                  _vm.$set(_vm.vExtraCharge, "amount", $$v)
                                },
                                expression: "vExtraCharge.amount"
                              }
                            }),
                            _vm._v(" "),
                            _c(
                              "div",
                              { staticClass: "w-full sm:w-1/4" },
                              [
                                _c(
                                  "vs-row",
                                  { staticClass: "check-box-pax" },
                                  [
                                    _c(
                                      "vs-checkbox",
                                      {
                                        staticClass: "w-full",
                                        on: {
                                          input: function($event) {
                                            _vm.vExtraCharge.quantity = _vm
                                              .vExtraCharge.per_pax
                                              ? 1
                                              : _vm.vExtraCharge.quantity
                                            _vm.vExtraCharge.max_pax = _vm
                                              .vExtraCharge.per_pax
                                              ? 1000
                                              : 1
                                          }
                                        },
                                        model: {
                                          value: _vm.vExtraCharge.per_pax,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.vExtraCharge,
                                              "per_pax",
                                              $$v
                                            )
                                          },
                                          expression: "vExtraCharge.per_pax"
                                        }
                                      },
                                      [_vm._v(_vm._s(_vm.$t("table.perPax")))]
                                    )
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "vs-row",
                                  [
                                    _c(
                                      "vs-checkbox",
                                      {
                                        staticClass: "w-full",
                                        attrs: {
                                          disabled: !_vm.vExtraCharge.per_pax
                                        },
                                        model: {
                                          value: _vm.vExtraCharge.include_child,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.vExtraCharge,
                                              "include_child",
                                              $$v
                                            )
                                          },
                                          expression:
                                            "vExtraCharge.include_child"
                                        }
                                      },
                                      [
                                        _vm._v(
                                          _vm._s(_vm.$t("table.includeChild"))
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
                                staticClass: "wrap-form-select w-full md:w-1/2"
                              },
                              [
                                _c("vs-row", [
                                  _vm._v(_vm._s(_vm.$t("table.taxService")))
                                ]),
                                _vm._v(" "),
                                _c(
                                  "vs-row",
                                  [
                                    _c("v-select", {
                                      staticClass: "w-full",
                                      attrs: {
                                        id: "form-select",
                                        placeholder: _vm.$t("table.select"),
                                        clearable: false,
                                        label: "name",
                                        reduce: function(value) {
                                          return value.code
                                        },
                                        options:
                                          _vm.dlExtraCharge.tax_and_service
                                      },
                                      model: {
                                        value:
                                          _vm.vExtraCharge.tax_and_service_code,
                                        callback: function($$v) {
                                          _vm.$set(
                                            _vm.vExtraCharge,
                                            "tax_and_service_code",
                                            $$v
                                          )
                                        },
                                        expression:
                                          "vExtraCharge.tax_and_service_code"
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
                                  "wrap-form-select w-full md:w-1/2 required"
                              },
                              [
                                _c("vs-row", [
                                  _c("label", [
                                    _vm._v(
                                      _vm._s(_vm.$t("table.chargeFrequency"))
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
                                          value: "required",
                                          expression: "'required'"
                                        }
                                      ],
                                      staticClass: "w-full",
                                      attrs: {
                                        id: "form-select",
                                        reduce: function(value) {
                                          return value.code
                                        },
                                        label: "name",
                                        clearable: false,
                                        options:
                                          _vm.dlExtraCharge.charge_frequency,
                                        name: "charge frequency",
                                        "data-vv-scope": "extraCharge"
                                      },
                                      model: {
                                        value:
                                          _vm.vExtraCharge
                                            .charge_frequency_code,
                                        callback: function($$v) {
                                          _vm.$set(
                                            _vm.vExtraCharge,
                                            "charge_frequency_code",
                                            $$v
                                          )
                                        },
                                        expression:
                                          "vExtraCharge.charge_frequency_code"
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
                                              "extraCharge.charge frequency"
                                            ),
                                            expression:
                                              "errors.has('extraCharge.charge frequency')"
                                          }
                                        ],
                                        staticClass: "error-text text-danger"
                                      },
                                      [
                                        _vm._v(
                                          _vm._s(
                                            _vm.errors.first(
                                              "extraCharge.charge frequency"
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
                            _c("vs-divider", [_vm._v("Extra Charge")]),
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
                                _c("vs-input-number", {
                                  staticClass: "number-input md:w-3/12",
                                  attrs: {
                                    label: _vm.$t("table.maxPax") + ":",
                                    min: "1"
                                  },
                                  model: {
                                    value: _vm.vExtraCharge.max_pax,
                                    callback: function($$v) {
                                      _vm.$set(_vm.vExtraCharge, "max_pax", $$v)
                                    },
                                    expression: "vExtraCharge.max_pax"
                                  }
                                }),
                                _vm._v(" "),
                                _c("input-number", {
                                  staticClass: "w-full md:w-4/12",
                                  attrs: {
                                    label: _vm.$t("table.extraPax"),
                                    placeholder: _vm.$t("table.extraPax")
                                  },
                                  model: {
                                    value: _vm.vExtraCharge.extra_pax,
                                    callback: function($$v) {
                                      _vm.$set(
                                        _vm.vExtraCharge,
                                        "extra_pax",
                                        $$v
                                      )
                                    },
                                    expression: "vExtraCharge.extra_pax"
                                  }
                                }),
                                _vm._v(" "),
                                _c(
                                  "vs-checkbox",
                                  {
                                    staticClass:
                                      "checkbox-3col w-full md:w-3/12",
                                    model: {
                                      value: _vm.vExtraCharge.per_pax_extra,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.vExtraCharge,
                                          "per_pax_extra",
                                          $$v
                                        )
                                      },
                                      expression: "vExtraCharge.per_pax_extra"
                                    }
                                  },
                                  [_vm._v(_vm._s(_vm.$t("table.perPax")))]
                                )
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c("vs-divider", { staticClass: "mt-5" })
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
                              { staticClass: "w-full flex" },
                              [
                                _c(
                                  "vs-button",
                                  {
                                    staticClass: "vs-con-loading__container",
                                    attrs: {
                                      disabled: _vm.btnExtraChargeSaveDisabled,
                                      id: "button-save-extracharge",
                                      icon: "save",
                                      color: "success"
                                    },
                                    on: {
                                      click: function($event) {
                                        return _vm.handleSaveExtraCharge()
                                      }
                                    }
                                  },
                                  [_vm._v(_vm._s(_vm.$t("table.save")))]
                                ),
                                _vm._v(" "),
                                _c(
                                  "vs-button",
                                  {
                                    staticClass: "ml-auto",
                                    attrs: { icon: "close", color: "danger" },
                                    on: {
                                      click: function($event) {
                                        _vm.modalChild = false
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
                  ])
                : _vm._e()
            ]
          ),
          _vm._v(" "),
          _c(
            "vs-prompt",
            {
              attrs: {
                type: "confirm",
                "buttons-hidden": "",
                active: _vm.modalScheduledRate,
                title: _vm.titleModalScheduledRate
              },
              on: {
                "update:active": function($event) {
                  _vm.modalScheduledRate = $event
                }
              }
            },
            [
              _c(
                "div",
                { staticClass: "body-sidebar" },
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
                        { staticClass: "wrap-form-select w-full md:w-1/2" },
                        [
                          _c("vs-row", [
                            _vm._v(_vm._s(_vm.$t("table.fromDate")))
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
                                  lang: _vm.$t("lang"),
                                  clearable: false,
                                  "value-type": "YYYY-MM-DD",
                                  "disabled-date": _vm.fromDateScheduledDisable,
                                  format: "DD/MM/YYYY",
                                  label: "name",
                                  name: "from date",
                                  "data-vv-scope": "scheduled"
                                },
                                on: {
                                  change: function($event) {
                                    _vm.vScheduled.to_date =
                                      _vm.vScheduled.to_date <
                                      _vm.vScheduled.from_date
                                        ? _vm.vScheduled.from_date
                                        : _vm.vScheduled.to_date
                                  }
                                },
                                model: {
                                  value: _vm.vScheduled.from_date,
                                  callback: function($$v) {
                                    _vm.$set(_vm.vScheduled, "from_date", $$v)
                                  },
                                  expression: "vScheduled.from_date"
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
                                        "scheduled.from date"
                                      ),
                                      expression:
                                        "errors.has('scheduled.from date')"
                                    }
                                  ],
                                  staticClass: "error-text text-danger"
                                },
                                [
                                  _vm._v(
                                    _vm._s(
                                      _vm._f("toString")(
                                        _vm.errors.first(
                                          "scheduled.from date"
                                        ) || _vm.dbErrors.from_date
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
                        { staticClass: "wrap-form-select w-full md:w-1/2" },
                        [
                          _c("vs-row", [
                            _vm._v(_vm._s(_vm.$t("table.toDate")))
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
                                  lang: _vm.$t("lang"),
                                  clearable: false,
                                  "value-type": "YYYY-MM-DD",
                                  "disabled-date": _vm.toDateScheduledDisable,
                                  format: "DD/MM/YYYY",
                                  label: "name",
                                  name: "to date",
                                  "data-vv-scope": "scheduled"
                                },
                                model: {
                                  value: _vm.vScheduled.to_date,
                                  callback: function($$v) {
                                    _vm.$set(_vm.vScheduled, "to_date", $$v)
                                  },
                                  expression: "vScheduled.to_date"
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
                                        "scheduled.to date"
                                      ),
                                      expression:
                                        "errors.has('scheduled.to date')"
                                    }
                                  ],
                                  staticClass: "error-text text-danger"
                                },
                                [
                                  _vm._v(
                                    _vm._s(
                                      _vm._f("toString")(
                                        _vm.errors.first("scheduled.to date") ||
                                          _vm.dbErrors.to_date
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
                      _c(
                        "div",
                        { staticClass: "wrap-form-select w-full" },
                        [
                          _c("vs-row", [
                            _vm._v(_vm._s(_vm.$t("reservation.roomRate")))
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
                                  placeholder: _vm.$t("reservation.roomRate"),
                                  label: "name",
                                  reduce: function(value) {
                                    return value.code
                                  },
                                  options: _vm.roomRates,
                                  name: "room rate",
                                  "data-vv-scope": "scheduled"
                                },
                                on: { input: _vm.handleChangeRoomRate },
                                model: {
                                  value: _vm.vScheduled.room_rate_code,
                                  callback: function($$v) {
                                    _vm.$set(
                                      _vm.vScheduled,
                                      "room_rate_code",
                                      $$v
                                    )
                                  },
                                  expression: "vScheduled.room_rate_code"
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
                                        "scheduled.room rate"
                                      ),
                                      expression:
                                        "errors.has('scheduled.room rate')"
                                    }
                                  ],
                                  staticClass: "error-text text-danger"
                                },
                                [
                                  _vm._v(
                                    _vm._s(
                                      _vm._f("toString")(
                                        _vm.errors.first(
                                          "scheduled.room rate"
                                        ) || _vm.dbErrors.room_rate_code
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
                      _c("vs-row", { staticClass: "wrap-form-select" }, [
                        _vm._v(_vm._s(_vm.$t("reservation.rate")))
                      ]),
                      _vm._v(" "),
                      _c(
                        "vs-row",
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
                              "description-text": _vm._f("toString")(
                                _vm.errors.first("scheduled.rate") ||
                                  _vm.dbErrors.rate
                              ),
                              name: "rate",
                              "data-vv-scope": "scheduled"
                            },
                            model: {
                              value: _vm.vScheduled.rate,
                              callback: function($$v) {
                                _vm.$set(_vm.vScheduled, "rate", $$v)
                              },
                              expression: "vScheduled.rate"
                            }
                          })
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("vs-divider", { attrs: { position: "center" } }, [
                    _vm._v(
                      "\n                    Compliment Option\n                "
                    )
                  ]),
                  _vm._v(" "),
                  _c("ul", { staticClass: "leftx wrap-form-select" }, [
                    _c(
                      "li",
                      [
                        _c(
                          "vs-radio",
                          {
                            attrs: { "vs-name": "compliment", "vs-value": " " },
                            model: {
                              value: _vm.vScheduled.compliment_hu,
                              callback: function($$v) {
                                _vm.$set(_vm.vScheduled, "compliment_hu", $$v)
                              },
                              expression: "vScheduled.compliment_hu"
                            }
                          },
                          [_vm._v("None")]
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "li",
                      [
                        _c(
                          "vs-radio",
                          {
                            attrs: {
                              color: "rgb(1,76,115)",
                              "vs-name": "compliment",
                              "vs-value": "P"
                            },
                            model: {
                              value: _vm.vScheduled.compliment_hu,
                              callback: function($$v) {
                                _vm.$set(_vm.vScheduled, "compliment_hu", $$v)
                              },
                              expression: "vScheduled.compliment_hu"
                            }
                          },
                          [
                            _c("icon-comp", {
                              attrs: { width: "18px", height: "18px" }
                            }),
                            _vm._v(" Compliment")
                          ],
                          1
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "li",
                      [
                        _c(
                          "vs-radio",
                          {
                            attrs: {
                              color: "rgb(0,101,50)",
                              "vs-name": "compliment",
                              "vs-value": "H"
                            },
                            model: {
                              value: _vm.vScheduled.compliment_hu,
                              callback: function($$v) {
                                _vm.$set(_vm.vScheduled, "compliment_hu", $$v)
                              },
                              expression: "vScheduled.compliment_hu"
                            }
                          },
                          [
                            _c("icon-hu", {
                              attrs: { width: "18px", height: "18px" }
                            }),
                            _vm._v(" House Use")
                          ],
                          1
                        )
                      ],
                      1
                    )
                  ]),
                  _vm._v(" "),
                  _c("vs-divider"),
                  _vm._v(" "),
                  _c(
                    "vs-row",
                    { staticClass: "mt-6" },
                    [
                      _c(
                        "vs-col",
                        { staticClass: "w-full flex" },
                        [
                          _c(
                            "vs-button",
                            {
                              staticClass: "vs-con-loading__container",
                              attrs: {
                                disabled: _vm.btnScheduledSaveDisabled,
                                id: "button-save-deposit",
                                icon: "save",
                                color: "success"
                              },
                              on: {
                                click: function($event) {
                                  return _vm.handleSaveScheduleRate()
                                }
                              }
                            },
                            [_vm._v(_vm._s(_vm.$t("table.save")))]
                          ),
                          _vm._v(" "),
                          _c(
                            "vs-button",
                            {
                              staticClass: "ml-auto",
                              attrs: { icon: "close", color: "danger" },
                              on: {
                                click: function($event) {
                                  _vm.modalScheduledRate = false
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
                active: _vm.modalPaymentOption,
                title: _vm.$t("transaction.title.paymentOption")
              },
              on: {
                "update:active": function($event) {
                  _vm.modalPaymentOption = $event
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
                              attrs: { type: "border", color: "success" },
                              on: {
                                click: function($event) {
                                  return _vm.showDepositForm(
                                    "",
                                    _vm.modeDeposit.cash
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
                              attrs: { type: "border" },
                              on: {
                                click: function($event) {
                                  return _vm.showDepositForm(
                                    "",
                                    _vm.modeDeposit.card
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
                              attrs: { type: "border" },
                              on: {
                                click: function($event) {
                                  return _vm.showDepositForm(
                                    "",
                                    _vm.modeDeposit.refund
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
                                  src: "/images/icons/cash_refund_icon24.png"
                                }
                              }),
                              _vm._v(
                                _vm._s(_vm.$t("transaction.button.cashRefund"))
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
                              attrs: { type: "border" },
                              on: {
                                click: function($event) {
                                  return _vm.showDepositForm(
                                    "",
                                    _vm.modeDeposit.other
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
                                _vm._s(
                                  _vm.$t("transaction.button.otherPayment")
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
            ]
          ),
          _vm._v(" "),
          _c(
            "footer",
            { staticClass: "footer" },
            [
              _c(
                "vs-row",
                { attrs: { "vs-type": "flex", "vs-justify": "flex-end" } },
                [
                  _vm.activeTab == 1 &&
                  _vm.resvStatus == _vm.reservationStatus.checkIn &&
                  _vm.vModel.status_code == _vm.reservationStatus.new
                    ? _c(
                        "vs-button",
                        {
                          staticClass: "mr-2 vs-con-loading__container",
                          staticStyle: { float: "right" },
                          attrs: {
                            disabled: _vm.btnMainSaveDisabled,
                            id: "button-checkin",
                            icon: "save"
                          },
                          on: {
                            click: function($event) {
                              return _vm.handleSaveReservation()
                            }
                          }
                        },
                        [_vm._v("Check In")]
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.activeTab == 1 &&
                  _vm.resvStatus !== _vm.reservationStatus.checkIn &&
                  (_vm.vModel.status_code == _vm.reservationStatus.new ||
                    _vm.vModel.status_code == _vm.reservationStatus.waitlist ||
                    _vm.modeDataValue == _vm.modeData.insert ||
                    (_vm.isGuestInHouse &&
                      _vm.vModel.status_code == _vm.mFolioStatus.open))
                    ? _c(
                        "vs-button",
                        {
                          staticClass: "mr-2 vs-con-loading__container",
                          staticStyle: { float: "right" },
                          attrs: {
                            disabled: _vm.btnMainSaveDisabled,
                            id: "button-save-main-form",
                            icon: "save"
                          },
                          on: {
                            click: function($event) {
                              _vm.isReservation ||
                              (_vm.isReservationFromAvaibility &&
                                _vm.isFromAvailability)
                                ? _vm.handleSaveReservation()
                                : _vm.handleSaveGuestInHouse()
                            }
                          }
                        },
                        [_vm._v("Save")]
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _c(
                    "vs-button",
                    {
                      staticStyle: { float: "right" },
                      attrs: { color: "grey" },
                      on: {
                        click: function($event) {
                          _vm.modalMain = false
                          _vm.modalPreventClose = false
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
                    attrs: {
                      label: _vm.$t("transaction.correctionAmountAfter")
                    },
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
              isReason: _vm.isReason,
              title: _vm.credentialTitle
            },
            on: {
              "update:active-credential": function(val) {
                return (_vm.activeCredentialPrompt = val)
              },
              acceptReason: _vm.acceptReason,
              acceptCredential: function($event) {
                _vm.modeScheduledRate == _vm.modeData.insert
                  ? _vm.insertScheduledRate()
                  : _vm.modeScheduledRate == _vm.modeData.delete
                  ? _vm.deleteScheduledRate()
                  : _vm.updateScheduledRate()
              },
              closedCredential: function($event) {
                return _vm.closedCredential()
              },
              input: function(newValue) {
                _vm.credential = newValue
              }
            }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c("report", { ref: "reportReceipt" })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/components/registrationForm/components/FilterHeader.vue?vue&type=template&id=47ead9c0&":
/*!***********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/components/registrationForm/components/FilterHeader.vue?vue&type=template&id=47ead9c0& ***!
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/components/registrationForm/components/NavigationHeader.vue?vue&type=template&id=2631153c&":
/*!***************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/components/registrationForm/components/NavigationHeader.vue?vue&type=template&id=2631153c& ***!
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
                "vs-w": "2",
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
                "vs-w": "10",
                "vs-type": "flex",
                "vs-justify": "flex-end",
                "vs-align": "flex-end"
              }
            },
            [
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
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/components/registrationForm/tab-components/ExtraCharge.vue?vue&type=template&id=7cf77671&":
/*!**************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/components/registrationForm/tab-components/ExtraCharge.vue?vue&type=template&id=7cf77671& ***!
  \**************************************************************************************************************************************************************************************************************************************************************/
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
    _vm.table
      ? _c(
          "div",
          [
            _c(
              "vs-row",
              { attrs: { "vs-type": "flex", "vs-justify": "space-between" } },
              [
                _c("span", [_vm._v("Extra Charge")]),
                _vm._v(" "),
                _c(
                  "vs-button",
                  {
                    on: {
                      click: function($event) {
                        return _vm.showModal("", _vm.modeData.insert)
                      }
                    }
                  },
                  [_vm._v("Insert")]
                )
              ],
              1
            ),
            _vm._v(" "),
            _c("br"),
            _vm._v(" "),
            _c("ag-grid-vue", {
              class: _vm.themeAgGrid,
              style: _vm.StyleAgGridFrame3,
              attrs: {
                pagination: "true",
                columnDefs: _vm.columnDefs,
                rowData: _vm.data,
                paginationPageSize: _vm.paginationPageSize,
                enableRangeSelection: true,
                gridOptions: _vm.gridOptions,
                context: _vm.context,
                rowSelection: _vm.rowSelection,
                frameworkComponents: _vm.frameworkComponents,
                enableCellChangeFlash: true,
                defaultColDef: _vm.defColDef,
                getContextMenuItems: _vm.getContextMenu,
                suppressDragLeaveHidesColumns: true,
                suppressMakeColumnVisibleAfterUnGroup: true,
                rowGroupPanelShow: _vm.rowGroupPanelShow,
                statusBar: _vm.statusBar
              },
              on: { "grid-ready": _vm.onGridReady }
            })
          ],
          1
        )
      : _vm._e()
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/components/registrationForm/tab-components/ScheduledRate.vue?vue&type=template&id=6d7b660c&":
/*!****************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/components/registrationForm/tab-components/ScheduledRate.vue?vue&type=template&id=6d7b660c& ***!
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
  return _c("div", [
    _vm.table
      ? _c(
          "div",
          [
            _c("ag-grid-vue", {
              class: _vm.themeAgGrid,
              style: _vm.StyleAgGridFrame3,
              attrs: {
                pagination: "true",
                rowData: _vm.data,
                columnDefs: _vm.columnDefs,
                paginationPageSize: _vm.paginationPageSize,
                enableRangeSelection: true,
                gridOptions: _vm.gridOptions,
                context: _vm.context,
                frameworkComponents: _vm.frameworkComponents,
                enableCellChangeFlash: true,
                rowSelection: _vm.rowSelection,
                defaultColDef: _vm.defColDef,
                suppressDragLeaveHidesColumns: true,
                suppressMakeColumnVisibleAfterUnGroup: true,
                statusBar: _vm.statusBar,
                rowGroupPanelShow: _vm.rowGroupPanelShow,
                getContextMenuItems: _vm.getContextMenu
              },
              on: { "grid-ready": _vm.onGridReady }
            })
          ],
          1
        )
      : _vm._e()
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/components/registrationForm/tab-components/SwitchRoom.vue?vue&type=template&id=5c1343b2&":
/*!*************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/components/registrationForm/tab-components/SwitchRoom.vue?vue&type=template&id=5c1343b2& ***!
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/components/registrationForm/tab-components/deposit/Deposit.vue?vue&type=template&id=00f09cba&":
/*!******************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/components/registrationForm/tab-components/deposit/Deposit.vue?vue&type=template&id=00f09cba& ***!
  \******************************************************************************************************************************************************************************************************************************************************************/
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
    _vm.table
      ? _c(
          "div",
          [
            _c("ag-grid-vue", {
              class: _vm.themeAgGrid,
              style: _vm.StyleAgGridFrame3,
              attrs: {
                pagination: "true",
                paginationPageSize: _vm.paginationPageSize,
                enableRangeSelection: true,
                gridOptions: _vm.gridOptions,
                context: _vm.context,
                columnDefs: _vm.columnDefs,
                frameworkComponents: _vm.frameworkComponents,
                rowData: _vm.data,
                defaultColDef: _vm.defColDef,
                getContextMenuItems: _vm.getContextMenu,
                animateRows: _vm.animatedRows,
                suppressDragLeaveHidesColumns: true,
                suppressMakeColumnVisibleAfterUnGroup: true,
                rowGroupPanelShow: _vm.rowGroupPanelShow,
                enableCellChangeFlash: true,
                rowSelection: _vm.rowSelection,
                statusBar: _vm.statusBar,
                rowClassRules: _vm.rowClassRules
              },
              on: {
                "grid-ready": _vm.onGridReady,
                cellContextMenu: _vm.handleRowRightClicked
              }
            })
          ],
          1
        )
      : _vm._e()
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/api/guestProfile.js":
/*!**********************************************!*\
  !*** ./resources/js/src/api/guestProfile.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GuestProfileResource; });
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



var uri = 'reservation';

var GuestProfileResource =
/*#__PURE__*/
function (_Resource) {
  _inherits(GuestProfileResource, _Resource);

  function GuestProfileResource() {
    _classCallCheck(this, GuestProfileResource);

    return _possibleConstructorReturn(this, _getPrototypeOf(GuestProfileResource).call(this, uri));
  }

  _createClass(GuestProfileResource, [{
    key: "guestProfile",
    value: function guestProfile(params) {
      return Object(_utils_request__WEBPACK_IMPORTED_MODULE_1__["default"])({
        url: '/' + uri + '/form/guestprofile',
        method: 'get',
        params: params
      });
    }
  }, {
    key: "detail",
    value: function detail(params) {
      return Object(_utils_request__WEBPACK_IMPORTED_MODULE_1__["default"])({
        url: '/' + uri + '/form/guestprofiledetail',
        method: 'get',
        params: params
      });
    }
  }]);

  return GuestProfileResource;
}(_api_resource__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./resources/js/src/api/reservation/deposit.js":
/*!*****************************************************!*\
  !*** ./resources/js/src/api/reservation/deposit.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DepositResource; });
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



var tableName = 'guest_deposit';
var uri = 'reservation/guestdeposit';

var DepositResource =
/*#__PURE__*/
function (_Resource) {
  _inherits(DepositResource, _Resource);

  function DepositResource() {
    _classCallCheck(this, DepositResource);

    return _possibleConstructorReturn(this, _getPrototypeOf(DepositResource).call(this, uri));
  }

  _createClass(DepositResource, [{
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
    key: "exchangeRate",
    value: function exchangeRate(params) {
      return Object(_utils_request__WEBPACK_IMPORTED_MODULE_1__["default"])({
        url: '/' + uri + '/form/exchrate',
        method: 'get',
        params: params
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
    key: "amountBefore",
    value: function amountBefore(data) {
      return Object(_utils_request__WEBPACK_IMPORTED_MODULE_1__["default"])({
        url: '/' + uri + '/correction/amountbefore',
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
  }]);

  return DepositResource;
}(_api_resource__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./resources/js/src/api/reservation/extraCharge.js":
/*!*********************************************************!*\
  !*** ./resources/js/src/api/reservation/extraCharge.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ExtraChargeResource; });
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



var tableName = 'reservation_extra_charge';
var uri = 'reservation/extracharge';

var ExtraChargeResource =
/*#__PURE__*/
function (_Resource) {
  _inherits(ExtraChargeResource, _Resource);

  function ExtraChargeResource() {
    _classCallCheck(this, ExtraChargeResource);

    return _possibleConstructorReturn(this, _getPrototypeOf(ExtraChargeResource).call(this, uri));
  }

  _createClass(ExtraChargeResource, [{
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
        url: '/' + uri + '/lookup',
        method: 'get',
        params: params
      });
    }
  }]);

  return ExtraChargeResource;
}(_api_resource__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./resources/js/src/api/reservation/reservation.js":
/*!*********************************************************!*\
  !*** ./resources/js/src/api/reservation/reservation.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ReservationResource; });
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



var tableName = 'reservation';
var uri = 'reservation';

var ReservationResource =
/*#__PURE__*/
function (_Resource) {
  _inherits(ReservationResource, _Resource);

  function ReservationResource() {
    _classCallCheck(this, ReservationResource);

    return _possibleConstructorReturn(this, _getPrototypeOf(ReservationResource).call(this, uri));
  }

  _createClass(ReservationResource, [{
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
        url: '/' + uri + '/form/datalookup',
        method: 'get'
      });
    }
  }, {
    key: "insertReservationGroup",
    value: function insertReservationGroup(data) {
      return Object(_utils_request__WEBPACK_IMPORTED_MODULE_1__["default"])({
        url: '/' + uri + '/guestgroup/reservation',
        method: 'post',
        data: data
      });
    }
  }, {
    key: "autoAssignRoom",
    value: function autoAssignRoom(data) {
      return Object(_utils_request__WEBPACK_IMPORTED_MODULE_1__["default"])({
        url: '/' + uri + '/autoassign',
        method: 'put',
        data: data
      });
    }
  }, {
    key: "cancelReservation",
    value: function cancelReservation(data) {
      return Object(_utils_request__WEBPACK_IMPORTED_MODULE_1__["default"])({
        url: '/' + uri + '/cancel',
        method: 'post',
        data: data
      });
    }
  }, {
    key: "reservationGroupList",
    value: function reservationGroupList(params) {
      return Object(_utils_request__WEBPACK_IMPORTED_MODULE_1__["default"])({
        url: '/' + uri + '/form/reservationgroup',
        method: 'post',
        data: params
      });
    }
  }, {
    key: "checkIn",
    value: function checkIn(data) {
      return Object(_utils_request__WEBPACK_IMPORTED_MODULE_1__["default"])({
        url: '/' + uri + '/checkin',
        method: 'put',
        data: data
      });
    }
  }, {
    key: "setWaitList",
    value: function setWaitList(data) {
      return Object(_utils_request__WEBPACK_IMPORTED_MODULE_1__["default"])({
        url: '/' + uri + '/waitlist/set',
        method: 'post',
        data: data
      });
    }
  }, {
    key: "unsetWaitList",
    value: function unsetWaitList(data) {
      return Object(_utils_request__WEBPACK_IMPORTED_MODULE_1__["default"])({
        url: '/' + uri + '/waitlist/unset',
        method: 'post',
        data: data
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
    key: "availableRoom",
    value: function availableRoom(params) {
      return Object(_utils_request__WEBPACK_IMPORTED_MODULE_1__["default"])({
        url: '/reservation/form/availableroom',
        method: 'get',
        params: params
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
    key: "reservationStatus",
    value: function reservationStatus(params) {
      return Object(_utils_request__WEBPACK_IMPORTED_MODULE_1__["default"])({
        url: '/' + uri + '/status/' + params,
        method: 'get'
      });
    }
  }, {
    key: "print",
    value: function print(params) {
      return Object(_utils_request__WEBPACK_IMPORTED_MODULE_1__["default"])({
        url: '/' + uri + '/print/registrationform',
        method: 'get'
      });
    }
  }, {
    key: "logUserUpdateReservation",
    value: function logUserUpdateReservation(params) {
      return Object(_utils_request__WEBPACK_IMPORTED_MODULE_1__["default"])({
        url: '/reservation/loguserupdatereservation',
        method: 'post',
        data: params
      });
    }
  }]);

  return ReservationResource;
}(_api_resource__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./resources/js/src/api/reservation/scheduledRate.js":
/*!***********************************************************!*\
  !*** ./resources/js/src/api/reservation/scheduledRate.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ScheduledRateResource; });
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



var tableName = 'reservation';
var uri = 'reservation/scheduledrate';

var ScheduledRateResource =
/*#__PURE__*/
function (_Resource) {
  _inherits(ScheduledRateResource, _Resource);

  function ScheduledRateResource() {
    _classCallCheck(this, ScheduledRateResource);

    return _possibleConstructorReturn(this, _getPrototypeOf(ScheduledRateResource).call(this, uri));
  }

  _createClass(ScheduledRateResource, [{
    key: "log",
    value: function log(id) {
      return Object(_utils_request__WEBPACK_IMPORTED_MODULE_1__["default"])({
        url: '/tracking/log/' + tableName + '/' + id,
        method: 'get'
      });
    }
  }]);

  return ScheduledRateResource;
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

/***/ "./resources/js/src/components/icon/IconHU.vue":
/*!*****************************************************!*\
  !*** ./resources/js/src/components/icon/IconHU.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _IconHU_vue_vue_type_template_id_73abfacc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./IconHU.vue?vue&type=template&id=73abfacc& */ "./resources/js/src/components/icon/IconHU.vue?vue&type=template&id=73abfacc&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  script,
  _IconHU_vue_vue_type_template_id_73abfacc___WEBPACK_IMPORTED_MODULE_0__["render"],
  _IconHU_vue_vue_type_template_id_73abfacc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/components/icon/IconHU.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/components/icon/IconHU.vue?vue&type=template&id=73abfacc&":
/*!************************************************************************************!*\
  !*** ./resources/js/src/components/icon/IconHU.vue?vue&type=template&id=73abfacc& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_IconHU_vue_vue_type_template_id_73abfacc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./IconHU.vue?vue&type=template&id=73abfacc& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/icon/IconHU.vue?vue&type=template&id=73abfacc&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_IconHU_vue_vue_type_template_id_73abfacc___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_IconHU_vue_vue_type_template_id_73abfacc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/pages/components/autocomplete.vue":
/*!******************************************************************!*\
  !*** ./resources/js/src/views/pages/components/autocomplete.vue ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _autocomplete_vue_vue_type_template_id_73aa1148___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./autocomplete.vue?vue&type=template&id=73aa1148& */ "./resources/js/src/views/pages/components/autocomplete.vue?vue&type=template&id=73aa1148&");
/* harmony import */ var _autocomplete_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./autocomplete.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/components/autocomplete.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _autocomplete_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _autocomplete_vue_vue_type_template_id_73aa1148___WEBPACK_IMPORTED_MODULE_0__["render"],
  _autocomplete_vue_vue_type_template_id_73aa1148___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/components/autocomplete.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/components/autocomplete.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/src/views/pages/components/autocomplete.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_autocomplete_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./autocomplete.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/components/autocomplete.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_autocomplete_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/components/autocomplete.vue?vue&type=template&id=73aa1148&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/components/autocomplete.vue?vue&type=template&id=73aa1148& ***!
  \*************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_autocomplete_vue_vue_type_template_id_73aa1148___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./autocomplete.vue?vue&type=template&id=73aa1148& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/components/autocomplete.vue?vue&type=template&id=73aa1148&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_autocomplete_vue_vue_type_template_id_73aa1148___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_autocomplete_vue_vue_type_template_id_73aa1148___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/pages/components/checklist.js":
/*!**************************************************************!*\
  !*** ./resources/js/src/views/pages/components/checklist.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue_feather_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-feather-icons */ "./node_modules/vue-feather-icons/dist/vue-feather-icons.es.js");



/* harmony default export */ __webpack_exports__["default"] = (vue__WEBPACK_IMPORTED_MODULE_0___default.a.extend({
  template: "\n    <div style=\"margin-top:3px\">\n    <check-square-icon size=\"1.5x\" class=\"custom-class\" v-if=\"data === true\"></check-square-icon>\n    <x-square-icon size=\"1.5x\" class=\"custom-class\" v-else></x-square-icon>\n    </div>\n         ",
  data: function data() {
    return {
      data: null,
      "true": true,
      "false": false
    };
  },
  computed: {},
  components: {
    XSquareIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_1__["XSquareIcon"],
    CheckSquareIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_1__["CheckSquareIcon"]
  },
  beforeMount: function beforeMount() {},
  created: function created() {},
  mounted: function mounted() {
    this.data = this.params.value;
  },
  methods: {}
}));

/***/ }),

/***/ "./resources/js/src/views/pages/components/comp_hu_icon.js":
/*!*****************************************************************!*\
  !*** ./resources/js/src/views/pages/components/comp_hu_icon.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (vue__WEBPACK_IMPORTED_MODULE_0___default.a.extend({
  template: "\n    <div style=\"margin-top:2.5px\">\n        <img v-if=\"data == 'P'\" src=\"/images/icons/comp.png\" width=\"18\" height=\"20\">\n        <img v-else-if=\"data == 'H'\" src=\"/images/icons/hu.png\" width=\"20\" height=\"20\">\n    </div>\n         ",
  data: function data() {
    return {
      data: null,
      "true": true,
      "false": false
    };
  },
  mounted: function mounted() {
    this.data = this.params.data.compliment_hu;
  },
  methods: {}
}));

/***/ }),

/***/ "./resources/js/src/views/pages/components/registrationForm/RegistrationForm.vue":
/*!***************************************************************************************!*\
  !*** ./resources/js/src/views/pages/components/registrationForm/RegistrationForm.vue ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _RegistrationForm_vue_vue_type_template_id_36d73fab_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RegistrationForm.vue?vue&type=template&id=36d73fab&scoped=true& */ "./resources/js/src/views/pages/components/registrationForm/RegistrationForm.vue?vue&type=template&id=36d73fab&scoped=true&");
/* harmony import */ var _RegistrationForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RegistrationForm.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/components/registrationForm/RegistrationForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _RegistrationForm_vue_vue_type_style_index_0_id_36d73fab_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./RegistrationForm.vue?vue&type=style&index=0&id=36d73fab&lang=scss&scoped=true& */ "./resources/js/src/views/pages/components/registrationForm/RegistrationForm.vue?vue&type=style&index=0&id=36d73fab&lang=scss&scoped=true&");
/* harmony import */ var _RegistrationForm_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./RegistrationForm.vue?vue&type=style&index=1&lang=scss& */ "./resources/js/src/views/pages/components/registrationForm/RegistrationForm.vue?vue&type=style&index=1&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");







/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__["default"])(
  _RegistrationForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _RegistrationForm_vue_vue_type_template_id_36d73fab_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _RegistrationForm_vue_vue_type_template_id_36d73fab_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "36d73fab",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/components/registrationForm/RegistrationForm.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/components/registrationForm/RegistrationForm.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/components/registrationForm/RegistrationForm.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RegistrationForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./RegistrationForm.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/components/registrationForm/RegistrationForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RegistrationForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/components/registrationForm/RegistrationForm.vue?vue&type=style&index=0&id=36d73fab&lang=scss&scoped=true&":
/*!*************************************************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/components/registrationForm/RegistrationForm.vue?vue&type=style&index=0&id=36d73fab&lang=scss&scoped=true& ***!
  \*************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_RegistrationForm_vue_vue_type_style_index_0_id_36d73fab_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/style-loader!../../../../../../../node_modules/css-loader!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./RegistrationForm.vue?vue&type=style&index=0&id=36d73fab&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/components/registrationForm/RegistrationForm.vue?vue&type=style&index=0&id=36d73fab&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_RegistrationForm_vue_vue_type_style_index_0_id_36d73fab_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_RegistrationForm_vue_vue_type_style_index_0_id_36d73fab_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_RegistrationForm_vue_vue_type_style_index_0_id_36d73fab_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_RegistrationForm_vue_vue_type_style_index_0_id_36d73fab_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_RegistrationForm_vue_vue_type_style_index_0_id_36d73fab_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/src/views/pages/components/registrationForm/RegistrationForm.vue?vue&type=style&index=1&lang=scss&":
/*!*************************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/components/registrationForm/RegistrationForm.vue?vue&type=style&index=1&lang=scss& ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_RegistrationForm_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/style-loader!../../../../../../../node_modules/css-loader!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./RegistrationForm.vue?vue&type=style&index=1&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/components/registrationForm/RegistrationForm.vue?vue&type=style&index=1&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_RegistrationForm_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_RegistrationForm_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_RegistrationForm_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_RegistrationForm_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_RegistrationForm_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/src/views/pages/components/registrationForm/RegistrationForm.vue?vue&type=template&id=36d73fab&scoped=true&":
/*!**********************************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/components/registrationForm/RegistrationForm.vue?vue&type=template&id=36d73fab&scoped=true& ***!
  \**********************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RegistrationForm_vue_vue_type_template_id_36d73fab_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./RegistrationForm.vue?vue&type=template&id=36d73fab&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/components/registrationForm/RegistrationForm.vue?vue&type=template&id=36d73fab&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RegistrationForm_vue_vue_type_template_id_36d73fab_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RegistrationForm_vue_vue_type_template_id_36d73fab_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/pages/components/registrationForm/components/FilterHeader.vue":
/*!**********************************************************************************************!*\
  !*** ./resources/js/src/views/pages/components/registrationForm/components/FilterHeader.vue ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FilterHeader_vue_vue_type_template_id_47ead9c0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FilterHeader.vue?vue&type=template&id=47ead9c0& */ "./resources/js/src/views/pages/components/registrationForm/components/FilterHeader.vue?vue&type=template&id=47ead9c0&");
/* harmony import */ var _FilterHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FilterHeader.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/components/registrationForm/components/FilterHeader.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _FilterHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FilterHeader_vue_vue_type_template_id_47ead9c0___WEBPACK_IMPORTED_MODULE_0__["render"],
  _FilterHeader_vue_vue_type_template_id_47ead9c0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/components/registrationForm/components/FilterHeader.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/components/registrationForm/components/FilterHeader.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/components/registrationForm/components/FilterHeader.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FilterHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./FilterHeader.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/components/registrationForm/components/FilterHeader.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FilterHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/components/registrationForm/components/FilterHeader.vue?vue&type=template&id=47ead9c0&":
/*!*****************************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/components/registrationForm/components/FilterHeader.vue?vue&type=template&id=47ead9c0& ***!
  \*****************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FilterHeader_vue_vue_type_template_id_47ead9c0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./FilterHeader.vue?vue&type=template&id=47ead9c0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/components/registrationForm/components/FilterHeader.vue?vue&type=template&id=47ead9c0&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FilterHeader_vue_vue_type_template_id_47ead9c0___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FilterHeader_vue_vue_type_template_id_47ead9c0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/pages/components/registrationForm/components/NavigationHeader.vue":
/*!**************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/components/registrationForm/components/NavigationHeader.vue ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _NavigationHeader_vue_vue_type_template_id_2631153c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NavigationHeader.vue?vue&type=template&id=2631153c& */ "./resources/js/src/views/pages/components/registrationForm/components/NavigationHeader.vue?vue&type=template&id=2631153c&");
/* harmony import */ var _NavigationHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NavigationHeader.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/components/registrationForm/components/NavigationHeader.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _NavigationHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _NavigationHeader_vue_vue_type_template_id_2631153c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _NavigationHeader_vue_vue_type_template_id_2631153c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/components/registrationForm/components/NavigationHeader.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/components/registrationForm/components/NavigationHeader.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/components/registrationForm/components/NavigationHeader.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NavigationHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./NavigationHeader.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/components/registrationForm/components/NavigationHeader.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NavigationHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/components/registrationForm/components/NavigationHeader.vue?vue&type=template&id=2631153c&":
/*!*********************************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/components/registrationForm/components/NavigationHeader.vue?vue&type=template&id=2631153c& ***!
  \*********************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NavigationHeader_vue_vue_type_template_id_2631153c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./NavigationHeader.vue?vue&type=template&id=2631153c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/components/registrationForm/components/NavigationHeader.vue?vue&type=template&id=2631153c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NavigationHeader_vue_vue_type_template_id_2631153c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NavigationHeader_vue_vue_type_template_id_2631153c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/pages/components/registrationForm/components/action_grid.js":
/*!********************************************************************************************!*\
  !*** ./resources/js/src/views/pages/components/registrationForm/components/action_grid.js ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (vue__WEBPACK_IMPORTED_MODULE_0___default.a.extend({
  template: "\n                <div class=\"flex action-button\">\n                    <vs-button @click=\"showSidebar\" :color=\"iconAction.menuColor\" type=\"flat\"><vs-icon icon=\"menu\" size=\"small\"></vs-icon></vs-button>\n                    <vx-tooltip text=\"Edit data selected\"><vs-button @click=\"showPopUp(modeData.edit)\" :color=\"iconAction.editColor\" type=\"flat\"><vs-icon icon=\"edit\" size=\"small\"></vs-icon></vs-button></vx-tooltip>\n                </div>\n            ",
  data: function data() {
    return {};
  },
  beforeMount: function beforeMount() {},
  mounted: function mounted() {},
  methods: {
    showPopUp: function showPopUp(modeData) {
      if (this.params.data !== undefined) {
        this.params.context.componentParent.showForm(this.params.data, modeData);
        console.log(this.params.data);
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

/***/ "./resources/js/src/views/pages/components/registrationForm/components/incognito_icon.js":
/*!***********************************************************************************************!*\
  !*** ./resources/js/src/views/pages/components/registrationForm/components/incognito_icon.js ***!
  \***********************************************************************************************/
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

/***/ "./resources/js/src/views/pages/components/registrationForm/components/source-status.js":
/*!**********************************************************************************************!*\
  !*** ./resources/js/src/views/pages/components/registrationForm/components/source-status.js ***!
  \**********************************************************************************************/
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

/***/ "./resources/js/src/views/pages/components/registrationForm/tab-components/ExtraCharge.vue":
/*!*************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/components/registrationForm/tab-components/ExtraCharge.vue ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ExtraCharge_vue_vue_type_template_id_7cf77671___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ExtraCharge.vue?vue&type=template&id=7cf77671& */ "./resources/js/src/views/pages/components/registrationForm/tab-components/ExtraCharge.vue?vue&type=template&id=7cf77671&");
/* harmony import */ var _ExtraCharge_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ExtraCharge.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/components/registrationForm/tab-components/ExtraCharge.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ExtraCharge_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ExtraCharge_vue_vue_type_template_id_7cf77671___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ExtraCharge_vue_vue_type_template_id_7cf77671___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/components/registrationForm/tab-components/ExtraCharge.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/components/registrationForm/tab-components/ExtraCharge.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/components/registrationForm/tab-components/ExtraCharge.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ExtraCharge_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ExtraCharge.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/components/registrationForm/tab-components/ExtraCharge.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ExtraCharge_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/components/registrationForm/tab-components/ExtraCharge.vue?vue&type=template&id=7cf77671&":
/*!********************************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/components/registrationForm/tab-components/ExtraCharge.vue?vue&type=template&id=7cf77671& ***!
  \********************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ExtraCharge_vue_vue_type_template_id_7cf77671___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ExtraCharge.vue?vue&type=template&id=7cf77671& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/components/registrationForm/tab-components/ExtraCharge.vue?vue&type=template&id=7cf77671&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ExtraCharge_vue_vue_type_template_id_7cf77671___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ExtraCharge_vue_vue_type_template_id_7cf77671___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/pages/components/registrationForm/tab-components/ScheduledRate.vue":
/*!***************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/components/registrationForm/tab-components/ScheduledRate.vue ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ScheduledRate_vue_vue_type_template_id_6d7b660c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ScheduledRate.vue?vue&type=template&id=6d7b660c& */ "./resources/js/src/views/pages/components/registrationForm/tab-components/ScheduledRate.vue?vue&type=template&id=6d7b660c&");
/* harmony import */ var _ScheduledRate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ScheduledRate.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/components/registrationForm/tab-components/ScheduledRate.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ScheduledRate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ScheduledRate_vue_vue_type_template_id_6d7b660c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ScheduledRate_vue_vue_type_template_id_6d7b660c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/components/registrationForm/tab-components/ScheduledRate.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/components/registrationForm/tab-components/ScheduledRate.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/components/registrationForm/tab-components/ScheduledRate.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ScheduledRate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ScheduledRate.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/components/registrationForm/tab-components/ScheduledRate.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ScheduledRate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/components/registrationForm/tab-components/ScheduledRate.vue?vue&type=template&id=6d7b660c&":
/*!**********************************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/components/registrationForm/tab-components/ScheduledRate.vue?vue&type=template&id=6d7b660c& ***!
  \**********************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ScheduledRate_vue_vue_type_template_id_6d7b660c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ScheduledRate.vue?vue&type=template&id=6d7b660c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/components/registrationForm/tab-components/ScheduledRate.vue?vue&type=template&id=6d7b660c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ScheduledRate_vue_vue_type_template_id_6d7b660c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ScheduledRate_vue_vue_type_template_id_6d7b660c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/pages/components/registrationForm/tab-components/SwitchRoom.vue":
/*!************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/components/registrationForm/tab-components/SwitchRoom.vue ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SwitchRoom_vue_vue_type_template_id_5c1343b2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SwitchRoom.vue?vue&type=template&id=5c1343b2& */ "./resources/js/src/views/pages/components/registrationForm/tab-components/SwitchRoom.vue?vue&type=template&id=5c1343b2&");
/* harmony import */ var _SwitchRoom_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SwitchRoom.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/components/registrationForm/tab-components/SwitchRoom.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SwitchRoom_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SwitchRoom_vue_vue_type_template_id_5c1343b2___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SwitchRoom_vue_vue_type_template_id_5c1343b2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/components/registrationForm/tab-components/SwitchRoom.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/components/registrationForm/tab-components/SwitchRoom.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/components/registrationForm/tab-components/SwitchRoom.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SwitchRoom_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./SwitchRoom.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/components/registrationForm/tab-components/SwitchRoom.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SwitchRoom_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/components/registrationForm/tab-components/SwitchRoom.vue?vue&type=template&id=5c1343b2&":
/*!*******************************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/components/registrationForm/tab-components/SwitchRoom.vue?vue&type=template&id=5c1343b2& ***!
  \*******************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SwitchRoom_vue_vue_type_template_id_5c1343b2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./SwitchRoom.vue?vue&type=template&id=5c1343b2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/components/registrationForm/tab-components/SwitchRoom.vue?vue&type=template&id=5c1343b2&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SwitchRoom_vue_vue_type_template_id_5c1343b2___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SwitchRoom_vue_vue_type_template_id_5c1343b2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/pages/components/registrationForm/tab-components/action_grid2.js":
/*!*************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/components/registrationForm/tab-components/action_grid2.js ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (vue__WEBPACK_IMPORTED_MODULE_0___default.a.extend({
  template: "\n                <div class=\"flex action-button\">\n                    <vs-dropdown vs-trigger-click class=\"cursor-pointer\">\n                        <vs-button :color=\"iconAction.menuColor\" type=\"flat\"><vs-icon icon=\"menu\" size=\"small\"></vs-icon></vs-button>\n                        <vs-dropdown-menu>\n                             <vs-dropdown-item @click=\"showPopUp(modeBreakdown.tracking)\"><img border=\"0\" width=\"20\" height=\"20\" src=\"/images/icons/tracking_icon24.png\"/>Tracking Data</vs-dropdown-item>\n                        </vs-dropdown-menu>\n                    </vs-dropdown>\n                    <vx-tooltip class=\"flex\" style=\"height:30px\" text=\"Edit data selected\"><vs-button @click=\"showPopUp(modeData.edit)\" :color=\"iconAction.editColor\" type=\"flat\"><img border=\"0\" width=\"20\" height=\"20\" src=\"/images/icons/edit_icon24.png\"/></vs-button></vx-tooltip>\n                    <vx-tooltip class=\"flex\" style=\"height:30px\" text=\"Delete data selected\"><vs-button @click=\"openAlert()\" :color=\"iconAction.deleteColor\" type=\"flat\"><img border=\"0\" width=\"20\" height=\"20\" src=\"/images/icons/delete_icon24.png\"/></vs-button></vx-tooltip>\n               </div>\n            ",
  data: function data() {
    return {};
  },
  beforeMount: function beforeMount() {},
  mounted: function mounted() {},
  methods: {
    showPopUp: function showPopUp(modeData) {
      if (this.params.data !== undefined) {
        this.params.context.componentParent.showModal(this.params.data, modeData);
        console.log(this.params.data.id_log);
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
    openConfirm: function openConfirm() {
      var _this = this;

      this.$vs.dialog({
        type: 'confirm',
        color: 'danger',
        title: this.$t('message.deleteTitleConfirm'),
        text: this.$t('message.deleteConfirm'),
        acceptText: this.$t('message.yes'),
        cancelText: this.$t('message.no'),
        accept: function accept() {
          return _this.params.context.componentParent["delete"](_this.params.data);
        }
      });
    }
  }
}));

/***/ }),

/***/ "./resources/js/src/views/pages/components/registrationForm/tab-components/action_grid3.js":
/*!*************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/components/registrationForm/tab-components/action_grid3.js ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (vue__WEBPACK_IMPORTED_MODULE_0___default.a.extend({
  template: "\n                <div class=\"flex action-button\">\n                    <vs-dropdown vs-trigger-click class=\"cursor-pointer\">\n                        <vs-button :color=\"iconAction.menuColor\" type=\"flat\"><vs-icon icon=\"menu\" size=\"small\"></vs-icon></vs-button>\n                        <vs-dropdown-menu>\n                             <vs-dropdown-item @click=\"showPopUp(modeBreakdown.tracking)\"><img border=\"0\" width=\"20\" height=\"20\" src=\"/images/icons/tracking_icon24.png\"/>Tracking Data</vs-dropdown-item>\n                        </vs-dropdown-menu>\n                    </vs-dropdown>\n                    <vx-tooltip class=\"flex\" style=\"height:30px\" text=\"Edit data selected\"><vs-button @click=\"showPopUp(modeData.edit)\" :color=\"iconAction.editColor\" type=\"flat\"><img border=\"0\" width=\"20\" height=\"20\" src=\"/images/icons/edit_icon24.png\"/></vs-button></vx-tooltip>\n                    <vx-tooltip class=\"flex\" style=\"height:30px\" text=\"Delete data selected\"><vs-button @click=\"openAlert()\" :color=\"iconAction.deleteColor\" type=\"flat\"><img border=\"0\" width=\"20\" height=\"20\" src=\"/images/icons/delete_icon24.png\"/></vs-button></vx-tooltip>\n               </div>\n            ",
  data: function data() {
    return {};
  },
  beforeMount: function beforeMount() {},
  mounted: function mounted() {},
  methods: {
    showPopUp: function showPopUp(modeData) {
      if (this.params.data !== undefined) {
        this.params.context.componentParent.showModal(this.params.data, modeData);
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
    openConfirm: function openConfirm() {
      var _this = this;

      this.$vs.dialog({
        type: 'confirm',
        color: 'danger',
        title: this.$t('message.deleteTitleConfirm'),
        text: this.$t('message.deleteConfirm'),
        acceptText: this.$t('message.yes'),
        cancelText: this.$t('message.no'),
        accept: function accept() {
          return _this.params.context.componentParent["delete"](_this.params.data);
        }
      });
    }
  }
}));

/***/ }),

/***/ "./resources/js/src/views/pages/components/registrationForm/tab-components/deposit/Deposit.vue":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/components/registrationForm/tab-components/deposit/Deposit.vue ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Deposit_vue_vue_type_template_id_00f09cba___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Deposit.vue?vue&type=template&id=00f09cba& */ "./resources/js/src/views/pages/components/registrationForm/tab-components/deposit/Deposit.vue?vue&type=template&id=00f09cba&");
/* harmony import */ var _Deposit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Deposit.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/components/registrationForm/tab-components/deposit/Deposit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Deposit_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Deposit.vue?vue&type=style&index=0&lang=css& */ "./resources/js/src/views/pages/components/registrationForm/tab-components/deposit/Deposit.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Deposit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Deposit_vue_vue_type_template_id_00f09cba___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Deposit_vue_vue_type_template_id_00f09cba___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/components/registrationForm/tab-components/deposit/Deposit.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/components/registrationForm/tab-components/deposit/Deposit.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/components/registrationForm/tab-components/deposit/Deposit.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Deposit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Deposit.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/components/registrationForm/tab-components/deposit/Deposit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Deposit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/components/registrationForm/tab-components/deposit/Deposit.vue?vue&type=style&index=0&lang=css&":
/*!**************************************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/components/registrationForm/tab-components/deposit/Deposit.vue?vue&type=style&index=0&lang=css& ***!
  \**************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Deposit_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../node_modules/style-loader!../../../../../../../../../node_modules/css-loader??ref--7-1!../../../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Deposit.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/components/registrationForm/tab-components/deposit/Deposit.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Deposit_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Deposit_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Deposit_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Deposit_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Deposit_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/src/views/pages/components/registrationForm/tab-components/deposit/Deposit.vue?vue&type=template&id=00f09cba&":
/*!************************************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/components/registrationForm/tab-components/deposit/Deposit.vue?vue&type=template&id=00f09cba& ***!
  \************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Deposit_vue_vue_type_template_id_00f09cba___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Deposit.vue?vue&type=template&id=00f09cba& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/components/registrationForm/tab-components/deposit/Deposit.vue?vue&type=template&id=00f09cba&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Deposit_vue_vue_type_template_id_00f09cba___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Deposit_vue_vue_type_template_id_00f09cba___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/pages/components/registrationForm/tab-components/deposit/action_grid1.js":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/components/registrationForm/tab-components/deposit/action_grid1.js ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (vue__WEBPACK_IMPORTED_MODULE_0___default.a.extend({
  template: "\n                <div class=\"flex action-button\">\n                    <vs-dropdown vs-trigger-click class=\"cursor-pointer\">\n                        <vs-button :color=\"iconAction.menuColor\" type=\"flat\"><vs-icon icon=\"menu\" size=\"small\"></vs-icon></vs-button>\n                        <vs-dropdown-menu>\n                            <vs-dropdown-item @click=\"showPopUp(modeData.tracking)\"><img border=\"0\" width=\"20\" height=\"20\" src=\"/images/icons/tracking_icon24.png\"/>Tracking Data</vs-dropdown-item>\n                            <vs-dropdown-item @click=\"handlePrint()\"><img border=\"0\" width=\"20\" height=\"20\" src=\"/images/icons/print_icon24.png\"/>Print Receipt</vs-dropdown-item>\n                        </vs-dropdown-menu>\n                    </vs-dropdown>\n                    <vx-tooltip class=\"flex\" style=\"height:30px\" text=\"Correction data selected\"><vs-button @click=\"correctionVoid(true)\" :color=\"iconAction.editColor\" type=\"flat\"><img border=\"0\" width=\"20\" height=\"20\" src=\"/images/icons/correction_icon24.png\"/></vs-button></vx-tooltip>\n                    <vx-tooltip class=\"flex\" style=\"height:30px\" text=\"Void data selected\"><vs-button @click=\"correctionVoid(false)\" :color=\"iconAction.deleteColor\" type=\"flat\"><img border=\"0\" width=\"20\" height=\"20\" src=\"/images/icons/delete_icon24.png\"/></vs-button></vx-tooltip>\n                </div>\n            ",
  data: function data() {
    return {
      data: ""
    };
  },
  beforeMount: function beforeMount() {},
  mounted: function mounted() {},
  methods: {
    showPopUp: function showPopUp(modeData) {
      if (this.params.data !== undefined) {
        this.params.context.componentParent.showModal(this.params.data, modeData);
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
    openUndefinedAlert: function openUndefinedAlert() {
      this.$vs.dialog({
        color: 'primary',
        title: this.$t('message.informationTitle'),
        text: this.$t('message.undefinedText'),
        acceptText: this.$t('table.close')
      });
    },
    correctionVoid: function correctionVoid(isCorrection) {
      if (this.params.data !== undefined) {
        this.params.context.componentParent.correctionVoid(this.params.data, isCorrection);
      } else {
        this.openUndefinedAlert();
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

/***/ "./resources/js/src/views/pages/components/registrationForm/tab-components/deposit/statusbar_total.js":
/*!************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/components/registrationForm/tab-components/deposit/statusbar_total.js ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (vue__WEBPACK_IMPORTED_MODULE_0___default.a.extend({
  template: "\n            <div class=\"ag-name-value\">\n                    <span class=\"ag-name-value-value\"></span>\n                </div>\n            </div>\n    ",
  data: function data() {
    return {
      count: null
    };
  },
  beforeMount: function beforeMount() {},
  mounted: function mounted() {
    this.onGridReady();
  },
  methods: {
    onGridReady: function onGridReady(params) {
      this.count = this.params.data;
    }
  }
}));

/***/ }),

/***/ "./resources/sass/vuexy/components/suggestions.scss":
/*!**********************************************************!*\
  !*** ./resources/sass/vuexy/components/suggestions.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/postcss-loader/src??ref--8-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!./suggestions.scss */ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./resources/sass/vuexy/components/suggestions.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./resources/sass/vuexy/pages/form_deposit_charge.scss":
/*!*************************************************************!*\
  !*** ./resources/sass/vuexy/pages/form_deposit_charge.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/postcss-loader/src??ref--8-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!./form_deposit_charge.scss */ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./resources/sass/vuexy/pages/form_deposit_charge.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ })

}]);