(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[26],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/components/DialogSecond.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/components/DialogSecond.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      showDialog: false,
      title: '',
      text: '',
      acceptText: '',
      classDialog: '',
      btnDisabled: false,
      showCancelButton: false,
      cancelText: ''
    };
  },
  methods: {
    showDialogWarning: function showDialogWarning(title, text, classDialog) {
      this.title = title, this.text = text;
      this.acceptText = 'Ok';
      this.classDialog = classDialog != null && classDialog != undefined ? classDialog : 'dialog-second';
      this.showDialog = true;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/report/Report.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/report/Report.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_format_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/utils/format.js */ "./resources/js/src/utils/format.js");
/* harmony import */ var _utils_alert_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/utils/alert.js */ "./resources/js/src/utils/alert.js");
/* harmony import */ var vue2_datepicker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue2-datepicker */ "./node_modules/vue2-datepicker/index.esm.js");
/* harmony import */ var vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vue-perfect-scrollbar */ "./node_modules/vue-perfect-scrollbar/dist/index.js");
/* harmony import */ var vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var vue_tree_halower__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vue-tree-halower */ "./node_modules/vue-tree-halower/dist/v2-tree.js");
/* harmony import */ var vue_tree_halower__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(vue_tree_halower__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _views_pages_components_report_Template_vue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/views/pages/components/report/Template.vue */ "./resources/js/src/views/pages/components/report/Template.vue");
/* harmony import */ var _components_report_filter1_vue__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/report-filter1.vue */ "./resources/js/src/views/pages/report/components/report-filter1.vue");
/* harmony import */ var _components_ReportEditor_vue__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/ReportEditor.vue */ "./resources/js/src/views/pages/report/components/ReportEditor.vue");
/* harmony import */ var _views_pages_components_DialogSecond_vue__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/views/pages/components/DialogSecond.vue */ "./resources/js/src/views/pages/components/DialogSecond.vue");
/* harmony import */ var _api_report_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/api/report.js */ "./resources/js/src/api/report.js");


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











var reportResource = new _api_report_js__WEBPACK_IMPORTED_MODULE_11__["default"]();
/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    DatePicker: vue2_datepicker__WEBPACK_IMPORTED_MODULE_3__["default"],
    VuePerfectScrollbar: vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4___default.a,
    VTree: vue_tree_halower__WEBPACK_IMPORTED_MODULE_5__["VTree"],
    VSelectTree: vue_tree_halower__WEBPACK_IMPORTED_MODULE_5__["VSelectTree"],
    Report: _views_pages_components_report_Template_vue__WEBPACK_IMPORTED_MODULE_7__["default"],
    ReportFilter1: _components_report_filter1_vue__WEBPACK_IMPORTED_MODULE_8__["default"],
    ReportEditor: _components_ReportEditor_vue__WEBPACK_IMPORTED_MODULE_9__["default"],
    DialogSecond: _views_pages_components_DialogSecond_vue__WEBPACK_IMPORTED_MODULE_10__["default"]
  },
  data: function data() {
    return {
      //Report Editor
      modeDataEditor: 0,
      isTemplateSystemDefault: true,
      vModelLookUpIdTemplate: 0,
      modalTitle: '',
      showModal: false,
      showModalSecond: false,
      firstDialog: 'firstDialog',
      secondDialog: 'secondDialog',
      reportCodeInt: 0,
      reportFileName: '',
      searchword: '',
      treeData: [],
      //PopUp
      vModelOptions: 1,
      vModelDateSelected: '',
      vModelDateStart: '',
      vModelDateEnd: '',
      vModelLookUp: {},
      vModelReservation: '',
      dataLookUpOptionDate: [],
      dataLookUpTemplate: [],
      dataLookUpYear: [],
      dataLookUpWeek: [],
      dataLookUpMonth: [{
        text: '1',
        value: '1'
      }, {
        text: '2',
        value: '2'
      }, {
        text: '3',
        value: '3'
      }, {
        text: '4',
        value: '4'
      }, {
        text: '5',
        value: '5'
      }, {
        text: '6',
        value: '6'
      }, {
        text: '7',
        value: '7'
      }, {
        text: '8',
        value: '8'
      }, {
        text: '9',
        value: '9'
      }, {
        text: '10',
        value: '10'
      }, {
        text: '11',
        value: '11'
      }, {
        text: '12',
        value: '12'
      }],
      dataLookUpQuarter: [{
        text: 'I',
        value: '1'
      }, {
        text: 'II',
        value: '2'
      }, {
        text: 'III',
        value: '3'
      }, {
        text: 'IV',
        value: '4'
      }],
      dataLookUpSemester: [{
        text: 'I',
        value: '1'
      }, {
        text: 'II',
        value: '2'
      }],
      query: {
        Condition1: '',
        Condition2: '',
        Condition3: '',
        Condition4: '',
        Condition5: '',
        Condition6: '',
        Condition7: '',
        Condition8: '',
        Condition9: ''
      },
      optionDisableTemplate: false,
      optionDisable: {
        date: true,
        range: true,
        week: true,
        month: true,
        quarter: true,
        semester: true,
        year: true
      },
      resolutionWidth: 0,
      element: 0,
      // User Access
      editReportAccess: '',
      exportReportAccess: '',
      customizeReportAccess: ''
    };
  },
  watch: {
    vModelLookUpIdTemplate: function vModelLookUpIdTemplate() {
      this.setVariableIsSystem();
    }
  },
  beforeMount: function beforeMount() {},
  methods: {
    previewReport: function previewReport() {
      if (this.reportCodeInt > 1000) {
        this.query.Condition1 = '';
        this.query.Condition2 = '';
        this.query.Condition3 = '';
        this.query.Condition4 = '';
        this.query.Condition5 = '';
        this.query.Condition6 = '';
        this.query.Condition7 = '';
        this.query.Condition8 = '';
        this.query.Condition9 = '';
        this.getFilterString(this.reportCodeInt);

        if (this.optionDisableTemplate) {
          //manual Template
          this.$refs.dialogsecond.showDialogWarning(this.$t('message.informationTitle'), this.$t('message.reportFailedLoadData'));
        } else {
          //Auto template From Query
          var newTabReport = this.$router.resolve({
            path: '/report/preview?reportId=' + this.reportCodeInt + '&templateID=' + this.vModelLookUpIdTemplate + '&dateDescription=' + this.getDateDescription() + '&queryCondition1=' + this.query.Condition1 + '&queryCondition2=' + this.query.Condition2 + '&queryCondition3=' + this.query.Condition3 + '&queryCondition4=' + this.query.Condition4 + '&queryCondition5=' + this.query.Condition5 + '&queryCondition6=' + this.query.Condition6 + '&queryCondition7=' + this.query.Condition7 + '&queryCondition8=' + this.query.Condition8 + '&queryCondition9=' + this.query.Condition9
          });
          window.open(newTabReport.href, '_blank');
        }
      } else this.$refs.dialogsecond.showDialogWarning(this.$t('message.informationTitle'), this.$t('message.reportFailedLoadData'));
    },
    addDialogCloseButton: function addDialogCloseButton(elementID) {
      if (this.dialog.typeDialog === 'confirm') {
        var firstDialog = document.getElementById(elementID);

        if (firstDialog !== null) {
          var headerDialog = firstDialog.getElementsByClassName('vs-dialog');
          var vm = this;
          var newElement = document.createElement('i');
          newElement.className = 'vs-icon notranslate icon-scale vs-dialog-cancel vs-dialog-cancel--icon notranslate material-icons null';
          newElement.id = elementID;
          newElement.innerText = 'close';
          newElement.addEventListener('click', function () {
            vm.showModal = vm.showModalSecond;
            vm.showModalSecond = false;
          });
          headerDialog[0].children[0].appendChild(newElement);
        }
      }
    },
    setVariableIsSystem: function () {
      var _setVariableIsSystem = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var _ref, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return reportResource.isTemplateSystemDefault({
                  id_log: this.vModelLookUpIdTemplate
                });

              case 2:
                _ref = _context.sent;
                data = _ref.data;
                this.isTemplateSystemDefault = data.is_system == '-1' ? true : false;

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function setVariableIsSystem() {
        return _setVariableIsSystem.apply(this, arguments);
      }

      return setVariableIsSystem;
    }(),
    showReportEditor: function () {
      var _showReportEditor = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(modeDataEditor) {
        var _this = this;

        var params;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!(modeDataEditor == this.modeData.edit && this.isTemplateSystemDefault && this.userInfo.groupCode != 'SYSTEM')) {
                  _context2.next = 4;
                  break;
                }

                this.$refs.dialogsecond.showDialogWarning(this.$t('message.informationTitle'), this.$t('message.reportCanNotEditTemplate'));
                _context2.next = 19;
                break;

              case 4:
                if (!(modeDataEditor == this.modeData["delete"])) {
                  _context2.next = 16;
                  break;
                }

                if (!(this.isTemplateSystemDefault && this.userInfo.groupCode != 'SYSTEM')) {
                  _context2.next = 9;
                  break;
                }

                this.$refs.dialogsecond.showDialogWarning(this.$t('message.informationTitle'), this.$t('message.reportCanNotDeleteTemplate'));
                _context2.next = 14;
                break;

              case 9:
                params = {
                  id_log: this.vModelLookUpIdTemplate,
                  user_id: this.userInfo.code
                };
                _context2.next = 12;
                return reportResource.deleteTemplateReport(params);

              case 12:
                _utils_alert_js__WEBPACK_IMPORTED_MODULE_2__["default"].deleteAlertSuccess();
                this.showModal = false;

              case 14:
                _context2.next = 19;
                break;

              case 16:
                this.modeDataEditor = modeDataEditor;
                this.showModalSecond = !this.showModalSecond;
                this.$nextTick(function () {
                  _this.addDialogCloseButton(_this.secondDialog);
                });

              case 19:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function showReportEditor(_x) {
        return _showReportEditor.apply(this, arguments);
      }

      return showReportEditor;
    }(),
    closeModalReport: function closeModalReport() {
      if (this.showModal) {
        this.showModal = false;
      }
    },
    getFilterString: function getFilterString(reportCode) {
      if (reportCode == this.reportList.GuestInHouseListing) {
        this.query.Condition1 = this.getDateCondition11('DATE(guest_in_house.audit_date)');
      } else if (reportCode == this.reportList.GuestInHouseForecast) {
        this.query.Condition1 = this.getDateCondition22('DATE(guest_detail.arrival)', 'DATE(guest_detail.departure)');
        this.query.Condition2 = this.query.Condition1; //Filter Individual and Group //1=All 2=Individual 3=Group

        var optionSelect = this.$refs.ReportFilter1.vModelGuestType;

        if (optionSelect == 2) {
          this.query.Condition1 = this.query.Condition1 + ' AND reservation.group_code=""';
          this.query.Condition2 = this.query.Condition2 + ' AND folio.group_code=""';
        } else if (optionSelect == 3) {
          if (this.$refs.ReportFilter1.vModelLookUp.guestGroup == null || this.$refs.ReportFilter1.vModelLookUp.guestGroup == undefined) {
            this.query.Condition1 = this.query.Condition1 + ' AND reservation.group_code<>""';
            this.query.Condition2 = this.query.Condition2 + ' AND folio.group_code<>""';
          } else {
            this.query.Condition1 = this.query.Condition1 + ' AND reservation.group_code="' + this.$refs.ReportFilter1.vModelLookUp.guestGroup + '"';
            this.query.Condition2 = this.query.Condition2 + ' AND folio.group_code="' + this.$refs.ReportFilter1.vModelLookUp.guestGroup + '"';
          }
        } //Filter Company


        var companyCode = this.$refs.ReportFilter1.vModelLookUp.company;

        if (companyCode != null && companyCode != undefined) {
          this.query.Condition1 = this.query.Condition1 + ' AND contact_person.company_code="' + companyCode + '"';
          this.query.Condition2 = this.query.Condition2 + ' AND contact_person.company_code="' + companyCode + '"';
        }

        this.query.Condition1 = this.query.Condition1 + ' AND reservation.status_code="' + this.reservationStatus["new"] + '"';
        this.query.Condition2 = this.query.Condition2 + ' AND folio.status_code<>"' + this.mFolioStatus.cancelCheckIn + '" AND folio.type_code="' + this.mFolioType.guestFolio + '"';
      } else if (reportCode == this.reportList.ReservationList || reportCode == this.reportList.WaitListReservation || reportCode == this.reportList.CancelledReservation || reportCode == this.reportList.NoShowReservation || reportCode == this.reportList.VoidedReservation || reportCode == this.reportList.GroupReservation || reportCode == this.reportList.ExpectedArrival || reportCode == this.reportList.ArrivalList || reportCode == this.reportList.SamedayReservation || reportCode == this.reportList.BalanceDeposit || //Front Desk
      reportCode == this.reportList.CurrentInHouse || reportCode == this.reportList.GuestInHouse || reportCode == this.reportList.GuestInHousebyBusinessSource || reportCode == this.reportList.GuestInHousebyMarket || reportCode == this.reportList.GuestInHousebyBookingSource || reportCode == this.reportList.GuestInHousebyGuestType || reportCode == this.reportList.GuestInHousebyCountry || reportCode == this.reportList.GuestInHousebyState || reportCode == this.reportList.GuestInHousebyCity || reportCode == this.reportList.GuestInHousebyNationality || reportCode == this.reportList.FolioList || reportCode == this.reportList.MasterFolio || reportCode == this.reportList.DeskFolio || reportCode == this.reportList.ComplimentGuest || reportCode == this.reportList.HouseUseGuest) {
        if (reportCode == this.reportList.ExpectedArrival || reportCode == this.reportList.ArrivalList || reportCode == this.reportList.SamedayReservation || reportCode == this.reportList.FolioList || reportCode == this.reportList.MasterFolio || reportCode == this.reportList.DeskFolio) {
          this.query.Condition1 = this.getDateCondition11('DATE(guest_detail.arrival)');
        } else if (reportCode == this.reportList.CancelledReservation || reportCode == this.reportList.NoShowReservation || reportCode == this.reportList.VoidedReservation) {
          this.query.Condition1 = this.getDateCondition11('DATE(reservation.cancel_date)');
        } else if (reportCode == this.reportList.CurrentInHouse) {
          this.query.Condition1 = '';
        } else if (reportCode == this.reportList.GuestInHouse || reportCode == this.reportList.GuestInHousebyBusinessSource || reportCode == this.reportList.GuestInHousebyMarket || reportCode == this.reportList.GuestInHousebyBookingSource || reportCode == this.reportList.GuestInHousebyGuestType || reportCode == this.reportList.GuestInHousebyCountry || reportCode == this.reportList.GuestInHousebyState || reportCode == this.reportList.GuestInHousebyCity || reportCode == this.reportList.GuestInHousebyNationality || reportCode == this.reportList.ComplimentGuest || reportCode == this.reportList.HouseUseGuest) {
          this.query.Condition1 = this.getDateCondition11('DATE(guest_in_house.audit_date)');
        } else if (reportCode == this.reportList.BalanceDeposit) {
          this.query.Condition1 = this.getDateCondition13('DATE(guest_deposit.audit_date)');
        } else {
          this.query.Condition1 = this.getDateCondition11('DATE(reservation.audit_date)');
        } //Filter Individual and Group //1=All 2=Individual 3=Group


        var _optionSelect = this.$refs.ReportFilter1.vModelGuestType;

        if (_optionSelect == 2) {
          if (reportCode == this.reportList.CurrentInHouse || reportCode == this.reportList.GuestInHouse || reportCode == this.reportList.GuestInHousebyBusinessSource || reportCode == this.reportList.GuestInHousebyMarket || reportCode == this.reportList.GuestInHousebyGuestType || reportCode == this.reportList.GuestInHousebyCountry || reportCode == this.reportList.GuestInHousebyState || reportCode == this.reportList.GuestInHousebyCity || reportCode == this.reportList.ComplimentGuest || reportCode == this.reportList.HouseUseGuest) {
            if (reportCode == this.reportList.CurrentInHouse) {
              this.query.Condition1 = this.query.Condition1 + 'IFNULL(folio.group_code,"")="" ';
            } else {
              this.query.Condition1 = this.query.Condition1 + ' AND IFNULL(guest_in_house.group_code,"")="" ';
            }
          } else {
            this.query.Condition1 = this.query.Condition1 + ' AND IFNULL(reservation.group_code,"")="" ';
          }
        }

        if (_optionSelect == 3) {
          if (this.$refs.ReportFilter1.vModelLookUp.guestGroup == null || this.$refs.ReportFilter1.vModelLookUp.guestGroup == undefined) {
            if (reportCode == this.reportList.CurrentInHouse || reportCode == this.reportList.GuestInHouse || reportCode == this.reportList.GuestInHousebyBusinessSource || reportCode == this.reportList.GuestInHousebyMarket || reportCode == this.reportList.GuestInHousebyGuestType || reportCode == this.reportList.GuestInHousebyCountry || reportCode == this.reportList.GuestInHousebyState || reportCode == this.reportList.GuestInHousebyCity || reportCode == this.reportList.ComplimentGuest || reportCode == this.reportList.HouseUseGuest) {
              if (reportCode == this.reportList.CurrentInHouse) {
                this.query.Condition1 = this.query.Condition1 + ' IFNULL(folio.group_code,"")<>"" ';
              } else {
                this.query.Condition1 = this.query.Condition1 + ' AND IFNULL(guest_in_house.group_code,"")<>"" ';
              }
            } else {
              this.query.Condition1 = this.query.Condition1 + ' AND IFNULL(reservation.group_code,"")<>"" ';
            }
          } else {
            if (reportCode == this.reportList.CurrentInHouse || reportCode == this.reportList.GuestInHouse || reportCode == this.reportList.GuestInHousebyBusinessSource || reportCode == this.reportList.GuestInHousebyMarket || reportCode == this.reportList.GuestInHousebyGuestType || reportCode == this.reportList.GuestInHousebyCountry || reportCode == this.reportList.GuestInHousebyState || reportCode == this.reportList.GuestInHousebyCity || reportCode == this.reportList.ComplimentGuest || reportCode == this.reportList.HouseUseGuest) {
              if (reportCode == this.reportList.CurrentInHouse) {
                this.query.Condition1 = this.query.Condition1 + ' IFNULL(folio.group_code,"")="' + this.$refs.ReportFilter1.vModelLookUp.guestGroup + '" ';
              } else {
                this.query.Condition1 = this.query.Condition1 + ' AND IFNULL(guest_in_house.group_code,"")="' + this.$refs.ReportFilter1.vModelLookUp.guestGroup + '" ';
              }
            } else if (reportCode != this.reportList.FolioList && reportCode != this.reportList.MasterFolio && reportCode != this.reportList.DeskFolio) {
              this.query.Condition1 = this.query.Condition1 + ' AND IFNULL(reservation.group_code,"")="' + this.$refs.ReportFilter1.vModelLookUp.guestGroup + '" ';
            }
          }
        } //Exculde House Use on Guest In House


        var showHouseUse = this.$refs.ReportFilter1.checkBox.showHouseUse;

        if (reportCode == this.reportList.GuestInHouse || reportCode == this.reportList.GuestInHousebyBusinessSource || reportCode == this.reportList.GuestInHousebyMarket || reportCode == this.reportList.GuestInHousebyBookingSource || reportCode == this.reportList.GuestInHousebyGuestType || reportCode == this.reportList.GuestInHousebyCountry || reportCode == this.reportList.GuestInHousebyState || reportCode == this.reportList.GuestInHousebyCity || reportCode == this.reportList.GuestInHousebyNationality) {
          if (!showHouseUse) {
            this.query.Condition1 = this.query.Condition1 + ' AND guest_in_house.compliment_hu<>"' + this.roomStatus.houseUse + '"';
          }
        } else if (reportCode == this.reportList.ComplimentGuest) {
          this.query.Condition1 = this.query.Condition1 + ' AND guest_in_house.compliment_hu="' + this.roomStatus.compliment + '"';
        } else if (reportCode == this.reportList.HouseUseGuest) {
          this.query.Condition1 = this.query.Condition1 + ' AND guest_in_house.compliment_hu="' + this.roomStatus.houseUse + '"';
        } //Filter Status Reservation


        if (reportCode == this.reportList.ReservationList || reportCode == this.reportList.GroupReservation) {
          var guestStatusCode = this.$refs.ReportFilter1.vModelLookUp.constGuestStatus;

          if (guestStatusCode != null || guestStatusCode != undefined) {
            this.query.Condition1 = this.query.Condition1 + ' AND reservation.status_code="' + guestStatusCode + '"';
          }
        } else if (reportCode == this.reportList.WaitListReservation) {
          this.query.Condition1 = this.query.Condition1 + ' AND reservation.status_code="' + this.reservationStatus.waitlist + '"';
        } else if (reportCode == this.reportList.CancelledReservation) {
          this.query.Condition1 = this.query.Condition1 + ' AND reservation.status_code="' + this.reservationStatus.cancel + '"';
        } else if (reportCode == this.reportList.NoShowReservation) {
          this.query.Condition1 = this.query.Condition1 + ' AND reservation.status_code="' + this.reservationStatus.noShow + '"';
        } else if (reportCode == this.reportList.VoidedReservation) {
          this.query.Condition1 = this.query.Condition1 + ' AND reservation.status_code="' + this.reservationStatus["void"] + '"';
        } else if (reportCode == this.reportList.ExpectedArrival) {
          this.query.Condition1 = this.query.Condition1 + ' AND reservation.status_code="' + this.reservationStatus["new"] + '"';
        } else if (reportCode == this.reportList.ArrivalList) {
          this.query.Condition1 = this.query.Condition1 + ' AND (IFNULL(reservation.status_code,"")="" OR reservation.status_code="' + this.reservationStatus.checkIn + '" OR reservation.status_code="' + this.reservationStatus.checkOut + '")';
        } else if (reportCode == this.reportList.SamedayReservation) {
          this.query.Condition1 = this.query.Condition1 + ' AND (reservation.status_code="' + this.reservationStatus.checkIn + '" OR reservation.status_code="' + this.reservationStatus.checkOut + '")';
        } else if (reportCode == this.reportList.BalanceDeposit) {
          this.query.Condition1 = this.query.Condition1 + ' AND reservation.status_code<>"' + this.reservationStatus["void"] + '"';
        } //Filter Arrival List


        if (reportCode == this.reportList.ArrivalList) {
          var optionArrival = this.$refs.ReportFilter1.vModelOptionArrivalList;

          if (optionArrival == 2) {
            this.query.Condition1 = this.query.Condition1 + ' AND folio.reservation_number<>"0"';
          } else if (optionArrival == 3) {
            this.query.Condition1 = this.query.Condition1 + ' AND folio.reservation_number="0"';
          } //User ID


          var userCode = this.$refs.ReportFilter1.vModelLookUp.user;

          if (userCode != null && userCode != undefined) {
            this.query.Condition1 = this.query.Condition1 + ' AND folio.insert_by="' + userCode + '"';
          }
        } //Filter Business Source


        var businessSource = this.$refs.ReportFilter1.vModelLookUp.businessSource;

        if (businessSource != null && businessSource != undefined) {
          if (reportCode == this.reportList.GuestInHousebyBusinessSource) {
            this.query.Condition1 = this.query.Condition1 + ' AND guest_detail.business_source_code="' + businessSource + '"';
          }
        } //Filter Company


        var _companyCode = this.$refs.ReportFilter1.vModelLookUp.company;

        if (_companyCode != null && _companyCode != undefined) {
          if (reportCode == this.reportList.GuestInHouse) {
            this.query.Condition1 = this.query.Condition1 + ' AND guest_in_house.company_code="' + _companyCode + '"';
          } else if (reportCode == this.reportList.ExpectedArrival || reportCode == this.reportList.ArrivalList || reportCode == this.reportList.ReservationList) {
            this.query.Condition1 = this.query.Condition1 + ' AND contact_person.company_code="' + _companyCode + '"';
          }
        } //Filter Guest Deposit


        if (reportCode == this.reportList.ReservationList || reportCode == this.reportList.CancelledReservation || reportCode == this.reportList.NoShowReservation || reportCode == this.reportList.VoidedReservation || reportCode == this.reportList.GroupReservation || reportCode == this.reportList.SamedayReservation || reportCode == this.reportList.BalanceDeposit || reportCode == this.reportList.WaitListReservation) {
          this.query.Condition1 = this.query.Condition1 + ' AND IFNULL(guest_deposit.void, "0")="0" AND IFNULL(guest_deposit.system_code, "' + this.constProgramVariable.defaultSystemCode + '")="' + this.constProgramVariable.defaultSystemCode + '"';
        } //Filter Market


        var market = this.$refs.ReportFilter1.vModelLookUp.market;

        if (reportCode == this.reportList.GuestInHousebyMarket) {
          if (market != null && market != undefined) {
            this.query.Condition1 = this.query.Condition1 + ' AND guest_in_house.market_code="' + market + '"';
          }
        } //Filter Booking Source


        var bookingSource = this.$refs.ReportFilter1.vModelLookUp.bookingSource;

        if (reportCode == this.reportList.GuestInHousebyBookingSource) {
          if (bookingSource != null && bookingSource != undefined) {
            this.query.Condition1 = this.query.Condition1 + ' AND guest_in_house.booking_source_code="' + bookingSource + '"';
          }
        } //Filter Nationality


        var nationality = this.$refs.ReportFilter1.vModelLookUp.nationality;

        if (reportCode == this.reportList.GuestInHousebyNationality) {
          if (market != null && market != undefined) {
            this.query.Condition1 = this.query.Condition1 + ' AND guest_in_house.nationality_code="' + nationality + '"';
          }
        } //Filter Folio Status


        var folioStatusOpen = this.$refs.ReportFilter1.checkBox.folioStatusClosed;
        var folioStatusClosed = this.$refs.ReportFilter1.checkBox.folioStatusClosed;

        if (reportCode == this.reportList.FolioList || reportCode == this.reportList.MasterFolio || reportCode == this.reportList.DeskFolio) {
          if (folioStatusOpen) {
            if (folioStatusClosed) {
              this.query.Condition1 = this.query.Condition1 + ' AND (folio.status_code="' + this.mFolioStatus.open + '" OR folio.status_code="' + this.mFolioStatus.closed + '")';
            } else {
              this.query.Condition1 = this.query.Condition1 + ' AND folio.status_code="' + this.mFolioStatus.open + '"';
            }
          } else {
            if (folioStatusClosed) {
              this.query.Condition1 = this.query.Condition1 + ' AND folio.status_code="' + this.mFolioStatus.closed + '"';
            } else {
              this.query.Condition1 = this.query.Condition1 + ' AND folio.status_code="X"';
            }
          }
        }
      } else if (reportCode == this.reportList.GuestList) {
        this.query.Condition1 = this.getDateCondition21('DATE(guest_detail.arrival)', 'DATE(guest_detail.departure)');
      } else if (reportCode == this.reportList.IncognitoGuest) {
        this.query.Condition1 = this.getDateCondition22('DATE(guest_detail.arrival)', 'DATE(guest_detail.departure)');
      } else if (reportCode == this.reportList.EarlyCheckIn) {
        this.query.Condition1 = this.getDateCondition22('DATE(guest_detail.arrival)', 'DATE(guest_detail.departure)');
        var checkOutLimit = this.$store.state.configurations.reservation.checkOutLimit;
        checkOutLimit = checkOutLimit.replace('.', ':');
        this.query.Condition1 = this.query.Condition1 + ' AND TIME(guest_detail.arrival)<"' + checkOutLimit + '"'; //Filter Individual and Group //1=All 2=Individual 3=Group

        var _optionSelect2 = this.$refs.ReportFilter1.vModelGuestType;

        if (_optionSelect2 == 2) {
          this.query.Condition1 = this.query.Condition1 + ' AND IFNULL(folio.group_code,"")=""';
        } else if (_optionSelect2 == 3) {
          if (this.$refs.ReportFilter1.vModelLookUp.guestGroup == null || this.$refs.ReportFilter1.vModelLookUp.guestGroup == undefined) {
            this.query.Condition1 = this.query.Condition1 + ' AND IFNULL(folio.group_code,"")<>""';
          } else {
            this.query.Condition1 = this.query.Condition1 + ' AND IFNULL(folio.group_code,"")="' + this.$refs.ReportFilter1.vModelLookUp.guestGroup + '"';
          }
        } //Filter Company


        var _companyCode2 = this.$refs.ReportFilter1.vModelLookUp.company;

        if (_companyCode2 != null && _companyCode2 != undefined) {
          this.query.Condition1 = this.query.Condition1 + ' AND contact_person.company_code="' + _companyCode2 + '"';
        }
      } else if (reportCode == this.reportList.DayUse || reportCode == this.reportList.EarlyDeparture || reportCode == this.reportList.ExpectedDeparture || reportCode == this.reportList.ExtendedDeparture || reportCode == this.reportList.DepartureList || reportCode == this.reportList.ActualDepartureGuestList) {
        this.query.Condition1 = this.getDateCondition11('DATE(guest_detail.departure)'); //Filter Individual and Group //1=All 2=Individual 3=Group

        var _optionSelect3 = this.$refs.ReportFilter1.vModelGuestType;

        if (_optionSelect3 == 2) {
          this.query.Condition1 = this.query.Condition1 + ' AND IFNULL(folio.group_code,"")=""';
        } else if (_optionSelect3 == 3) {
          if (this.$refs.ReportFilter1.vModelLookUp.guestGroup == null || this.$refs.ReportFilter1.vModelLookUp.guestGroup == undefined) {
            this.query.Condition1 = this.query.Condition1 + ' AND IFNULL(folio.group_code,"")<>""';
          } else {
            this.query.Condition1 = this.query.Condition1 + ' AND IFNULL(folio.group_code,"")="' + this.$refs.ReportFilter1.vModelLookUp.guestGroup + '"';
          }
        } //Filter Company


        var _companyCode3 = this.$refs.ReportFilter1.vModelLookUp.company;

        if (_companyCode3 != null && _companyCode3 != undefined) {
          this.query.Condition1 = this.query.Condition1 + ' AND contact_person.company_code="' + _companyCode3 + '"';
        }
      } else if (reportCode == this.reportList.AdvancedPaymentDeposit || reportCode == this.reportList.CashierReportReprint || reportCode == this.reportList.CashSummaryReport || reportCode >= this.reportList.FolioTransaction && reportCode <= this.reportList.CashierReport || reportCode >= this.reportList.PaymentList && reportCode <= this.reportList.YearlyPaymentList || reportCode == this.reportList.DailySales || reportCode == this.reportList.TransactionByStaff || reportCode == this.reportList.TaxBreakdownDetailed || reportCode == this.reportList.VoidList) {
        //Filter Date
        if (reportCode == this.reportList.AdvancedPaymentDeposit) {
          this.query.Condition1 = this.getDateCondition11('guest_deposit.audit_date');
        } else if (reportCode == this.reportList.VoidList) {
          this.query.Condition1 = this.getDateCondition11('DATE(sub_folio.void_date)');
        } else {
          this.query.Condition1 = this.getDateCondition11('sub_folio.audit_date');
        }

        if (reportCode == this.reportList.DailySales) {
          this.query.Condition2 = this.getDateCondition1MTD('sub_folio.audit_date');
          this.query.Condition3 = this.getDateCondition1YTD('sub_folio.audit_date') + ' AND cfg_init_account.sub_group_code<>"' + this.mSubGroupAccount.accountPayable + '"';
          this.query.Condition4 = this.getDateCondition11('guest_deposit.audit_date');
          this.query.Condition5 = this.getDateCondition1MTD('guest_deposit.audit_date');
          this.query.Condition6 = this.getDateCondition1YTD('guest_deposit.audit_date') + ' AND cfg_init_account.sub_group_code<>"' + this.mSubGroupAccount.accountPayable + '"';
        } else if (reportCode == this.reportList.VoidList) {
          this.query.Condition2 = this.getDateCondition11('DATE(guest_deposit.void_date)');
        } else if (reportCode >= this.reportList.FolioTransaction && reportCode <= this.reportList.YearlyTransaction || reportCode >= this.reportList.ChargeList && reportCode <= this.reportList.YearlyChargeList || reportCode >= this.reportList.PaymentList && reportCode <= this.reportList.YearlyPaymentList || reportCode == this.reportList.CashierReport || reportCode == this.reportList.CashierReportReprint || reportCode == this.reportList.CashSummaryReport || reportCode == this.reportList.TransactionByStaff || reportCode == this.reportList.TaxBreakdownDetailed) {
          this.query.Condition2 = this.getDateCondition11('guest_deposit.audit_date');
        } //Charge Condition


        this.query.Condition7 = this.query.Condition1;
        this.query.Condition8 = this.query.Condition2;

        if (reportCode == this.reportList.CashierReport || reportCode == this.reportList.CashierReportReprint || reportCode == this.reportList.CashSummaryReport || reportCode == this.reportList.TransactionByStaff || reportCode == this.reportList.TaxBreakdownDetailed) {
          // if (ProgramConfiguration.ShowTransferOnCashierReport) {
          if (true) {
            this.query.Condition1 = this.query.Condition1 + ' AND (cfg_init_account_sub_group.group_code="' + this.mGroupAccount.payment + '"' + ' OR (sub_folio.account_code="' + this.$store.state.configurations.globalAccount.transferCharge + '" AND sub_folio.type_code="' + this.transactionType.credit + '" AND sub_folio.is_correction="0")' + ' OR (sub_folio.account_code="' + this.$store.state.configurations.globalAccount.transferCharge + '" AND sub_folio.is_correction="-1"))';
            this.query.Condition2 = this.query.Condition2 + ' AND (cfg_init_account_sub_group.group_code="' + this.mGroupAccount.payment + '"' + ' OR (guest_deposit.account_code="' + this.$store.state.configurations.globalAccount.transferCharge + '" AND guest_deposit.type_code="' + this.transactionType.credit + '" AND guest_deposit.is_correction="0")' + ' OR (guest_deposit.account_code="' + this.$store.state.configurations.globalAccount.transferCharge + '" AND guest_deposit.is_correction="-1"))';
          } else {}
        }

        if (reportCode == this.reportList.AdvancedPaymentDeposit) {
          this.query.Condition1 = this.query.Condition1 + ' AND IFNULL(guest_deposit.void, "0")="0" AND IFNULL(guest_deposit.system_code, "' + this.constProgramVariable.defaultSystemCode + '")="' + this.constProgramVariable.defaultSystemCode + '"';
        } //Filter User ID


        var userId = this.$refs.ReportFilter1.vModelLookUp.user;

        if (userId != '' && userId != undefined && userId != null) {
          if (reportCode == this.reportList.AdvancedPaymentDeposit) {
            this.query.Condition1 = this.query.Condition1 + ' AND guest_deposit.insert_by="' + userId + '"';
          } else if (reportCode == this.reportList.DailySales) {
            this.query.Condition3 = this.query.Condition3 + ' AND sub_folio.insert_by="' + userId + '"';
            this.query.Condition6 = this.query.Condition6 + ' AND guest_deposit.insert_by="' + userId + '"';
          } else {
            this.query.Condition1 = this.query.Condition1 + ' AND sub_folio.insert_by="' + userId + '"';
            this.query.Condition7 = this.query.Condition7 + ' AND sub_folio.insert_by="' + userId + '"';
          }

          if (reportCode >= this.reportList.FolioTransaction && reportCode <= this.reportList.YearlyTransaction || reportCode >= this.reportList.ChargeList && reportCode <= this.reportList.YearlyChargeList || reportCode >= this.reportList.PaymentList && reportCode <= this.reportList.YearlyPaymentList || reportCode == this.reportList.CashierReport || reportCode == this.reportList.CashierReportReprint || reportCode == this.reportList.CashSummaryReport || reportCode == this.reportList.TransactionByStaff || reportCode == this.reportList.TaxBreakdownDetailed) {
            this.query.Condition2 = this.query.Condition2 + ' AND guest_deposit.insert_by="' + userId + '"';
            this.query.Condition8 = this.query.Condition8 + ' AND guest_deposit.insert_by="' + userId + '"';
          }
        } //Filter Shift


        var shiftCode = this.$refs.ReportFilter1.vModelLookUp.shift;

        if (shiftCode != '' && shiftCode != null && shiftCode != undefined) {
          if (reportCode == this.reportList.AdvancedPaymentDeposit) {
            this.query.Condition1 = this.query.Condition1 + ' AND guest_deposit.shift="' + shiftCode + '"';
          } else if (reportCode == this.reportList.DailySales) {
            this.query.Condition3 = this.query.Condition3 + ' AND sub_folio.shift="' + shiftCode + '"';
            this.query.Condition6 = this.query.Condition6 + ' AND guest_deposit.shift="' + shiftCode + '"';
          } else {
            this.query.Condition1 = this.query.Condition1 + ' AND sub_folio.shift="' + shiftCode + '"';
            this.queryCondition7 = this.queryCondition7 + ' AND sub_folio.shift="' + shiftCode + '"';
          }

          if (reportCode >= this.reportList.FolioTransaction && reportCode <= this.reportList.YearlyTransaction || reportCode >= this.reportList.ChargeList && reportCode <= this.reportList.YearlyChargeList || reportCode >= this.reportList.PaymentList && reportCode <= this.reportList.YearlyPaymentList || reportCode == this.reportList.CashierReport || reportCode == this.reportList.CashierReportReprint || reportCode == this.reportList.CashSummaryReport || reportCode == this.reportList.TransactionByStaff || reportCode == this.reportList.TaxBreakdownDetailed) {
            this.query.Condition2 = this.query.Condition2 + ' AND guest_deposit.shift="' + shiftCode + '"';
            this.query.Condition8 = this.query.Condition8 + ' AND guest_deposit.shift="' + shiftCode + '"';
          }
        } //Filter Sub Department


        var subDepartmentCode = this.$refs.ReportFilter1.vModelLookUp.subDepartment;

        if (subDepartmentCode != '' && subDepartmentCode != null && subDepartmentCode != undefined) {
          if (reportCode == this.reportList.AdvancedPaymentDeposit) {
            this.query.Condition1 = this.query.Condition1 + ' AND guest_deposit.sub_department_code="' + subDepartmentCode + '"';
          } else if (reportCode == this.reportList.DailySales) {
            this.query.Condition3 = this.query.Condition3 + ' AND sub_folio.sub_department_code="' + subDepartmentCode + '"';
            this.query.Condition6 = this.query.Condition6 + ' AND guest_deposit.sub_department_code="' + subDepartmentCode + '"';
          } else {
            this.query.Condition1 = this.query.Condition1 + ' AND sub_folio.sub_department_code="' + subDepartmentCode + '"';
            this.query.Condition7 = this.query.Condition7 + ' AND sub_folio.sub_department_code="' + subDepartmentCode + '"';
          }

          if (reportCode >= this.reportList.FolioTransaction && reportCode <= this.reportList.YearlyTransaction || reportCode >= this.reportList.ChargeList && reportCode <= this.reportList.YearlyChargeList || reportCode >= this.reportList.PaymentList && reportCode <= this.reportList.YearlyPaymentList || reportCode == this.reportList.CashierReport || reportCode == this.reportList.CashierReportReprint || reportCode == this.reportList.CashSummaryReport || reportCode == this.reportList.TransactionByStaff || reportCode == this.reportList.TaxBreakdownDetailed) {
            this.query.Condition2 = this.query.Condition2 + ' AND guest_deposit.sub_department_code="' + subDepartmentCode + '"';
            this.query.Condition8 = this.query.Condition8 + ' AND guest_deposit.sub_department_code="' + subDepartmentCode + '"';
          }
        } //Filter Account


        var accountCode = this.$refs.ReportFilter1.vModelLookUp.account;

        if (accountCode != '' && accountCode != null && accountCode != undefined) {
          if (reportCode == this.reportList.AdvancedPaymentDeposit) {
            this.query.Condition1 = this.query.Condition1 + ' AND guest_deposit.account_code="' + accountCode + '"';
          } else if (reportCode >= this.reportList.FolioTransaction && reportCode <= this.reportList.YearlyTransaction || reportCode >= this.reportList.PaymentList && reportCode <= this.reportList.YearlyPaymentList || reportCode == this.reportList.CashierReport || reportCode == this.reportList.CashierReportReprint || reportCode == this.reportList.CashSummaryReport) {
            this.query.Condition1 = this.query.Condition1 + ' AND sub_folio.account_code="' + accountCode + '"';
          } else if (reportCode >= this.reportList.ChargeList && reportCode <= this.reportList.YearlyChargeList || reportCode == this.reportList.TaxBreakdownDetailed || reportCode == this.reportList.TransactionByStaff) {
            this.query.Condition1 = this.query.Condition1 + ' AND (sub_folio.account_code="' + accountCode + '" OR cfg_init_account_sub_group.group_code="' + this.mGroupAccount.taxService + '")';
            this.query.Condition7 = this.query.Condition7 + ' AND (sub_folio.account_code="' + accountCode + '" OR cfg_init_account_sub_group.group_code="' + this.mGroupAccount.taxService + '")';
          } else if (reportCode == this.reportList.DailySales) {
            this.query.Condition3 = this.query.Condition3 + ' AND sub_folio.account_code="' + accountCode + '"';
            this.query.Condition6 = this.query.Condition6 + ' AND guest_deposit.account_code="' + accountCode + '"';
          }

          if (reportCode >= this.reportList.FolioTransaction && reportCode <= this.reportList.YearlyTransaction || reportCode >= this.reportList.ChargeList && reportCode <= this.reportList.YearlyChargeList || reportCode >= this.reportList.PaymentList && reportCode <= this.reportList.YearlyPaymentList || reportCode == this.reportList.CashierReport || reportCode == this.reportList.CashierReportReprint || reportCode == this.reportList.CashSummaryReport || reportCode == this.reportList.TransactionByStaff || reportCode == this.reportList.TaxBreakdownDetailed) {
            this.query.Condition2 = this.query.Condition2 + ' AND guest_deposit.account_code="' + accountCode + '"';
            this.query.Condition8 = this.query.Condition8 + ' AND guest_deposit.account_code="' + accountCode + '"';
          }

          if (reportCode >= this.reportList.ChargeList && reportCode <= this.reportList.YearlyChargeList || reportCode == this.reportList.TransactionByStaff || reportCode == this.reportList.TaxBreakdownDetailed) {
            this.query.Condition3 = '`Account Code`="' + accountCode + '"';
          }
        } //Filter Account Sub Group


        var accountSubGroupCode = this.$refs.ReportFilter1.vModelLookUp.accountSubGroup;
        var showAccountPayable = this.$refs.ReportFilter1.checkBox.showAccountPayable;

        if (accountSubGroupCode != '' && accountSubGroupCode != null && accountSubGroupCode != undefined) {
          if (reportCode == this.reportList.AdvancedPaymentDeposit) {
            this.query.Condition1 = this.query.Condition1 + ' AND cfg_init_account.sub_group_code="' + accountSubGroupCode + '"';
          } else if (reportCode == this.reportList.DailySales) {
            this.query.Condition3 = this.query.Condition3 + ' AND cfg_init_account.sub_group_code="' + accountSubGroupCode + '"';
            this.query.Condition6 = this.query.Condition6 + ' AND cfg_init_account.sub_group_code="' + accountSubGroupCode + '"';
          } else {
            if (reportCode >= this.reportList.FolioTransaction && reportCode <= this.reportList.YearlyTransaction || reportCode >= this.reportList.PaymentList && reportCode <= this.reportList.YearlyPaymentList || reportCode == this.reportList.CashierReport || reportCode == this.reportList.CashierReportReprint || reportCode == this.reportList.CashSummaryReport || reportCode == this.reportList.TransactionByStaff || reportCode == this.reportList.TaxBreakdownDetailed || reportCode == this.reportList.TaxBreakdownDetailed) {
              this.query.Condition1 = this.query.Condition1 + ' AND cfg_init_account.sub_group_code="' + accountSubGroupCode + '"';
              this.query.Condition7 = this.query.Condition7 + ' AND cfg_init_account.sub_group_code="' + accountSubGroupCode + '"';
            } else if (reportCode >= this.reportList.ChargeList && reportCode <= this.reportList.YearlyChargeList) {
              this.query.Condition1 = this.query.Condition1 + ' AND cfg_init_account.sub_group_code="' + accountSubGroupCode + '"';
            }
          }

          if (reportCode >= this.reportList.FolioTransaction && reportCode <= this.reportList.YearlyTransaction || reportCode >= this.reportList.ChargeList && reportCode <= this.reportList.YearlyChargeList || reportCode >= this.reportList.PaymentList && reportCode <= this.reportList.YearlyPaymentList || reportCode == this.reportList.CashierReport || reportCode == this.reportList.CashierReportReprint || reportCode == this.reportList.CashSummaryReport || reportCode == this.reportList.TransactionByStaff) {
            this.query.Condition2 = this.query.Condition2 + ' AND cfg_init_account.sub_group_code="' + accountSubGroupCode + '"';
            this.query.Condition8 = this.query.Condition8 + ' AND cfg_init_account.sub_group_code="' + accountSubGroupCode + '"';
          }

          if (reportCode >= this.reportList.ChargeList && reportCode <= this.reportList.YearlyChargeList || reportCode == this.reportList.TransactionByStaff || reportCode == this.reportList.TaxBreakdownDetailed) {
            this.query.Condition3 = '`Account Sub Group Code`="' + accountSubGroupCode + '"';
          }
        }

        if (reportCode >= this.reportList.ChargeList && reportCode <= this.reportList.YearlyChargeList) {
          if (showAccountPayable) {
            this.query.Condition1 = this.query.Condition1;
          } else {
            this.query.Condition1 = this.query.Condition1 + ' AND cfg_init_account.sub_group_code<>"' + this.mSubGroupAccount.accountPayable + '"';
          }
        } //Filter Folio Type


        if (reportCode != this.reportList.AdvancedPaymentDeposit && reportCode != this.reportList.DailySales) {
          this.query.ConditionGF = 'folio.type_code="' + this.mFolioType.guestFolio + '"';
          this.query.ConditionMF = 'folio.type_code="' + this.mFolioType.masterFolio + '"';
          this.query.ConditionDF = 'folio.type_code="' + this.mFolioType.deskFolio + '"';
          var guestFolio = this.$refs.ReportFilter1.checkBox.guestFolio;
          var masterFolio = this.$refs.ReportFilter1.checkBox.masterFolio;
          var deskFolio = this.$refs.ReportFilter1.checkBox.deskFolio;

          if (guestFolio) {
            if (masterFolio) {
              if (deskFolio) {
                this.query.Condition1 = this.query.Condition1 + ' AND (' + this.query.ConditionGF + ' OR ' + this.query.ConditionMF + ' OR ' + this.query.ConditionDF + ')';
                this.query.Condition7 = this.query.Condition7 + ' AND (' + this.query.ConditionGF + ' OR ' + this.query.ConditionMF + ' OR ' + this.query.ConditionDF + ')';
              }
            } else {
              if (deskFolio) {
                this.query.Condition1 = this.query.Condition1 + ' AND (' + this.query.ConditionGF + ' OR ' + this.query.ConditionDF + ')';
                this.query.Condition7 = this.query.Condition7 + ' AND (' + this.query.ConditionGF + ' OR ' + this.query.ConditionDF + ')';
              } else {
                this.query.Condition1 = this.query.Condition1 + ' AND ' + this.query.ConditionGF;
                this.query.Condition7 = this.query.Condition7 + ' AND ' + this.query.ConditionGF;
              }
            }
          } else {
            if (masterFolio) {
              if (deskFolio) {
                this.query.Condition1 = this.query.Condition1 + ' AND (' + this.query.ConditionMF + ' OR ' + this.query.ConditionDF + ')';
                this.query.Condition7 = this.query.Condition7 + ' AND (' + this.query.ConditionMF + ' OR ' + this.query.ConditionDF + ')';
              } else {
                this.query.Condition1 = this.query.Condition1 + ' AND ' + this.query.ConditionMF;
                this.query.Condition7 = this.query.Condition7 + ' AND ' + this.query.ConditionMF;
              }
            } else {
              if (deskFolio) {
                this.query.Condition1 = this.query.Condition1 + ' AND ' + this.query.ConditionDF;
                this.query.Condition7 = this.query.Condition7 + ' AND ' + this.query.ConditionDF;
              } else {
                this.query.Condition1 = this.query.Condition1 + ' AND folio.type_code=""';
                this.query.Condition7 = this.query.Condition7 + ' AND folio.type_code=""';
              }
            }
          } //Filter Folio Status


          if (reportCode != this.reportList.VoidList && reportCode != this.reportList.AdvancedPaymentDeposit && reportCode != this.reportList.DailySales) {
            var _folioStatusOpen = this.$refs.ReportFilter1.checkBox.folioStatusOpen;
            var _folioStatusClosed = this.$refs.ReportFilter1.checkBox.folioStatusClosed;

            if (_folioStatusOpen) {
              if (_folioStatusClosed) {
                this.query.Condition1 = this.query.Condition1 + ' AND (folio.status_code="' + this.mFolioStatus.open + '" OR folio.status_code="' + this.mFolioStatus.closed + '")';
                this.query.Condition7 = this.query.Condition7 + ' AND (folio.status_code="' + this.mFolioStatus.open + '" OR folio.status_code="' + this.mFolioStatus.closed + '")';
              } else {
                this.query.Condition1 = this.query.Condition1 + ' AND folio.status_code="' + this.mFolioStatus.open + '"';
                this.query.Condition7 = this.query.Condition7 + ' AND folio.status_code="' + this.mFolioStatus.open + '"';
              }
            } else {
              if (_folioStatusClosed) {
                this.query.Condition1 = this.query.Condition1 + ' AND folio.status_code="' + this.mFolioStatus.closed + '"';
                this.query.Condition7 = this.query.Condition7 + ' AND folio.status_code="' + this.mFolioStatus.closed + '"';
              } else {
                this.query.Condition1 = this.query.Condition1 + ' AND folio.status_code="X"';
                this.query.Condition7 = this.query.Condition7 + ' AND folio.status_code="X"';
              }
            }
          }
        } //Filter Reservation Number


        if (reportCode == this.reportList.TransactionByStaff || reportCode == this.reportList.TaxBreakdownDetailed) {
          var reservationNumber = this.$refs.ReportFilter1.reservationNumber;

          if (reservationNumber > 0) {
            this.query.Condition1 = this.query.Condition1 + ' AND sub_folio.folio_number = 0 ';
            this.query.Condition2 = this.query.Condition2 + ' AND guest_deposit.reservation_number = ' + reservationNumber + ' ';
            this.query.Condition7 = this.query.Condition7 + ' AND sub_folio.folio_number = 0 ';
            this.query.Condition8 = this.query.Condition8 + ' AND guest_deposit.reservation_number = ' + reservationNumber + ' ';
          }
        } //Filter Folio


        if (reportCode == this.reportList.TransactionByStaff || reportCode == this.reportList.TaxBreakdownDetailed) {
          var folioNumber = this.$refs.ReportFilter1.folioNumber;

          if (folioNumber > 0) {
            this.query.Condition1 = this.query.Condition1 + ' AND sub_folio.folio_number = ' + folioNumber + ' ';
            this.query.Condition2 = this.query.Condition2 + ' AND guest_deposit.reservation_number = 0 ';
            this.query.Condition7 = this.query.Condition7 + ' AND sub_folio.folio_number = ' + folioNumber + ' ';
            this.query.Condition8 = this.query.Condition8 + ' AND guest_deposit.reservation_number = 0 ';
          }
        } //Filter Business Source


        if (reportCode == this.reportList.ChargeList || reportCode == this.reportList.TransactionByStaff || reportCode == this.reportList.TaxBreakdownDetailed) {
          var businessSourceCode = this.$refs.ReportFilter1.vModelLookUp.businessSource;

          if (businessSourceCode != '' && businessSourceCode != null && businessSourceCode != undefined) {
            this.query.Condition1 = this.query.Condition1 + ' AND guest_detail.business_source_code = "' + businessSourceCode + '" ';
            this.query.Condition2 = this.query.Condition2 + ' AND (guest_detail.business_source_code = "' + businessSourceCode + '"  OR guest_detail1.business_source_code = "' + businessSourceCode + '") ';
            this.query.Condition7 = this.query.Condition7 + ' AND guest_detail.business_source_code = "' + businessSourceCode + '" ';
            this.query.Condition8 = this.query.Condition8 + ' AND (guest_detail.business_source_code = "' + businessSourceCode + '"  OR guest_detail1.business_source_code = "' + businessSourceCode + '") ';
          }
        } // //Filter Company


        if (reportCode == this.reportList.ChargeList || reportCode == this.reportList.TransactionByStaff || reportCode == this.reportList.TaxBreakdownDetailed) {
          var _companyCode4 = this.$refs.ReportFilter1.vModelLookUp.company;

          if (_companyCode4 != '' && _companyCode4 != null && _companyCode4 != undefined) {
            this.query.Condition1 = this.query.Condition1 + ' AND contact_person.company_code = "' + _companyCode4 + '" ';
            this.query.Condition2 = this.query.Condition2 + ' AND (contact_person.company_code = "' + _companyCode4 + '" OR contact_person1.company_code = "' + _companyCode4 + '") ';
            this.query.Condition7 = this.query.Condition7 + ' AND contact_person.company_code = "' + _companyCode4 + '" ';
            this.query.Condition8 = this.query.Condition8 + ' AND (contact_person.company_code = "' + _companyCode4 + '" OR contact_person1.company_code = "' + _companyCode4 + '") ';
          }
        }
      } else if (reportCode == this.reportList.ExportCSVbyDepartureDate) {
        this.query.Condition1 = this.getDateCondition11('DATE(guest_detail.departure)');
      } else if (reportCode == this.reportList.RoomSalesbyRoomNumber) {
        this.query.Condition1 = this.getDateCondition11('guest_in_house.audit_date');
        this.query.Condition2 = this.getDateCondition11('folio.check_out_date');
        this.query.Condition3 = this.getDateCondition21('DATE(room_unavailable.from_date)', 'DATE(room_unavailable.to_date)');
      } else if (reportCode == this.reportList.TodayRoomRevenueBreakDown) {
        this.query.Condition1 = ' AND ' + this.getDateCondition23(' DATE(guest_detail.arrival)', 'DATE(guest_detail.departure) ');
      } else if (reportCode == this.reportList.BreakfastControl) {
        this.query.Condition1 = this.getDateCondition11('ADDDATE(guest_in_house.audit_date, INTERVAL 1 DAY)');
      } else if (reportCode == this.reportList.PaymentBySubDepartment || reportCode == this.reportList.PaymentByAccount) {
        this.query.Condition1 = this.getDateCondition11('DATE(sub_folio.audit_date)');
        this.query.Condition2 = this.getDateCondition11('DATE(guest_deposit.audit_date)');
      } else if (reportCode == this.reportList.RevenueBySubDepartment) {
        this.query.Condition1 = this.getDateCondition11('DATE(sub_folio.audit_date)');
        this.query.Condition2 = this.getDateCondition11('DATE(guest_deposit.audit_date)');
      } else if (reportCode == this.reportList.PackageSales) {
        this.query.Condition1 = this.getDateCondition11('sub_folio.audit_date');
      } else if (reportCode == this.reportList.GuestLedger || reportCode == this.reportList.GuestDeposit || reportCode == this.reportList.GuestAccount) {
        var dateCondition = this.getDateCondition01();
        this.query.Condition1 = ' DATE(guest_detail.departure)>"' + dateCondition + '"' + ' AND sub_folio.audit_date<="' + dateCondition + '"' + ' AND sub_folio.audit_date<DATE(guest_detail.departure)';

        if (reportCode == this.reportList.GuestLedger) {
          this.query.Condition1 = this.query.Condition1 + ' AND ((cfg_init_account_sub_group.group_code="' + this.mGroupAccount.charge + '" OR cfg_init_account_sub_group.group_code="' + this.mGroupAccount.taxService + '") OR (cfg_init_account_sub_group.group_code="' + this.mGroupAccount.transfer + '" AND sub_folio.account_code="' + this.$store.state.configurations.globalAccount.transferCharge + '"))';
        } else if (reportCode == this.reportList.GuestDeposit) {
          this.query.Condition1 = this.query.Condition1 + ' AND (cfg_init_account_sub_group.group_code="' + this.mGroupAccount.payment + '" OR (cfg_init_account_sub_group.group_code="' + this.mGroupAccount.transfer + '" AND (sub_folio.account_code="' + this.$store.state.configurations.globalAccount.transferDepositReservationToFolio + '" OR sub_folio.account_code="' + this.$store.state.configurations.globalAccount.transferPayment + '")))';
        } else if (reportCode == this.reportList.GuestLedger) {
          this.query.Condition1 = this.query.Condition1 + ' AND (cfg_init_account_sub_group.group_code<>"' + this.mGroupAccount.transfer + '" OR (cfg_init_account_sub_group.group_code="' + this.mGroupAccount.transfer + '" AND sub_folio.account_code<>"' + this.$store.state.configurations.globalAccount.transferDepositReservation + '"))';
        }
      } else if (reportCode == this.reportList.DailyRevenueReport) {
        this.query.Condition1 = this.getDateCondition11('sub_folio.audit_date');
        this.query.Condition2 = this.getDateCondition1MTD('sub_folio.audit_date');
        this.query.Condition3 = this.getDateCondition1YTD('sub_folio.audit_date');
        this.query.Condition4 = this.getDateCondition11('guest_deposit.audit_date');
        this.query.Condition5 = this.getDateCondition1MTD('guest_deposit.audit_date');
        this.query.Condition6 = this.getDateCondition1YTD('guest_deposit.audit_date');
      } else if (reportCode == this.reportList.Correction) {
        this.query.Condition1 = this.getDateCondition11('guest_deposit.audit_date');
        this.query.Condition2 = this.getDateCondition11('sub_folio.audit_date');
      } else if (reportCode == this.reportList.CancelCheckIn) {
        this.query.Condition1 = this.getDateCondition11('DATE(guest_detail.departure)');
      } else if (reportCode == this.reportList.LostandFound) {
        this.query.Condition1 = this.getDateCondition11('DATE(date_posting)');
      } else if (reportCode == this.reportList.CancelCheckOut) {
        this.query.Condition1 = this.getDateCondition11('DATE(log_user.actual_date)');
      } else if (reportCode == this.reportList.Voucher) {
        this.query.Condition1 = this.getDateCondition11('DATE(issued_date)');
      } else if (reportCode == this.reportList.VoucherSRC) {
        this.query.Condition1 = this.getDateCondition11('IFNULL(acc_journal.`date`, "0000-00-00")');
      } else if (reportCode == this.reportList.RoomRate) {
        var status = this.$refs.ReportFilter1.radios.status; //1=All 2= Active 3= Non Active

        if (status == 2) {
          this.query.Condition1 = ' cfg_init_room_rate.is_active = "-1"';
        } else if (status == 3) {
          this.query.Condition1 = ' cfg_init_room_rate.is_active = "0"';
        }
      } else if (reportCode == this.reportList.Package) {
        var _status = this.$refs.ReportFilter1.radios.status; //1=All 2= Active 3= Non Active

        if (_status == 2) {
          this.query.Condition1 = ' cfg_init_package.is_active = "-1"';
        } else if (_status == 3) {
          this.query.Condition1 = ' cfg_init_package.is_active = "0"';
        }
      } else if (reportCode == this.reportList.RoomUnavailable) {
        this.query.Condition1 = this.getDateCondition21('room_unavailable.from_date', 'room_unavailable.to_date');
      } else if (reportCode == this.reportList.RoomRevenue) {
        this.query.Condition1 = this.getDateCondition11('sub_folio.audit_date');
        this.query.Condition1 = this.query.Condition1 + ' AND cfg_init_account.sub_group_code="' + this.mSubGroupAccount.room + '" AND IFNULL(cfg_init_room.owner_code,"")<>""';
      } else if (reportCode == this.reportList.RoomHistory) {
        this.query.Condition1 = this.getDateCondition11('guest_in_house.audit_date');
        this.query.Condition2 = this.getDateCondition11('room_unavailable_history.audit_date');
      } else if (reportCode == this.reportList.RoomStatus) {
        this.query.Condition1 = this.getDateConditionAuditDate2('DATE(from_date)', 'DATE(to_date)');
        var roomStatus = this.$refs.ReportFilter1.vModelLookUp.roomStatus;

        if (roomStatus != undefined && roomStatus != null) {
          if (roomStatus == this.roomStatus.dontDisturb || roomStatus == this.roomStatus.doubleLock || roomStatus == this.roomStatus.sleepOut) {
            this.query.Condition2 = '`Status Code Mix`="O" AND `Status Occupied Code`="' + roomStatus + '"';
          } else if (roomStatus == this.roomStatus.vacant) {
            this.query.Condition2 = '`Status Code Mix`="V"';
          } else if (roomStatus == this.roomStatus.occupied) {
            this.query.Condition2 = '`Status Code Mix`="O"';
          } else if (roomStatus == this.roomStatus.houseUse) {
            this.query.Condition2 = '`CPHUStatus`="' + this.roomStatus.houseUse + '"';
          } else if (roomStatus == this.roomStatus.compliment) {
            this.query.Condition2 = '`CPHUStatus`="' + this.roomStatus.compliment + '"';
          } else if (roomStatus == this.roomStatus.outOfOrder || roomStatus == this.roomStatus.officeUse || roomStatus == this.roomStatus.underConstruction) {
            this.query.Condition2 = '`Status Code Mix`="' + roomStatus + '"';
          } else {
            this.query.Condition2 = '(`Status Code Mix`="V" OR `Status Code Mix`="O") AND `Room Status Code`="' + roomStatus + '"';
          }
        }

        var building = this.$refs.ReportFilter1.vModelLookUp.building;

        if (building != undefined && building != null) {
          if (this.query.Condition2 == '') {
            this.query.Condition2 = '`Building`="' + building + '"';
          } else {
            this.query.Condition2 = this.query.Condition2 + ' AND `Building`="' + building + '"';
          }
        }

        var floor = this.$refs.ReportFilter1.vModelLookUp.floor;

        if (floor != undefined && floor != null) {
          if (this.query.Condition2 == '') {
            this.query.Condition2 = '`Floor`="' + floor + '"';
          } else {
            this.query.Condition2 = this.query.Condition2 + ' AND `Floor`="' + floor + '"';
          }
        }
      } else if (reportCode == this.reportList.Sales || reportCode == this.reportList.SalesSummary || reportCode == this.reportList.FrequentlySales || reportCode == this.reportList.VoidedCheckList) {
        this.query.Condition1 = this.getDateCondition11('DATE(sub_folio.audit_date)');
      } else if (reportCode == this.reportList.CaptainOrderList || reportCode == this.reportList.CancelledCaptainOrderDetail) {
        this.query.Condition1 = this.getDateCondition11('DATE(pos_captain_order_transaction.audit_date)');
      } else if (reportCode == this.reportList.CancelledCaptainOrder) {
        this.query.Condition1 = this.getDateCondition11('DATE(pos_captain_order.audit_date)');
      } else if (reportCode == this.reportList.Company) {
        var companyTypeCode = this.$refs.ReportFilter1.vModelLookUp.companyType;

        if (companyTypeCode != undefined && companyTypeCode != null) {
          this.query.Condition1 = ' company.type_code = "' + companyTypeCode + '" ';
        }
      } else if (reportCode == this.reportList.PhoneBook) {
        var phoneBookTypeCode = this.$refs.ReportFilter1.vModelLookUp.phoneBookType;

        if (phoneBookTypeCode != undefined && phoneBookTypeCode != null) {
          this.query.Condition1 = ' phone_book.type_code = "' + phoneBookTypeCode + '" ';
        }
      } else if (reportCode == this.reportList.EventList) {
        this.query.Condition1 = this.getDateCondition21('DATE(events.Start)', 'DATE(events.Finish)');
      } else if (reportCode == this.reportList.OccupiedGraphic || reportCode == this.reportList.OccupiedbyBusinessSourceGraphic || reportCode == this.reportList.OccupiedbyMarketGraphic || reportCode == this.reportList.OccupiedbyGuestTypeGraphic || reportCode == this.reportList.OccupiedbyCountryGraphic || reportCode == this.reportList.OccupiedbyStateGraphic) {
        this.query.Condition1 = this.getDateCondition11('guest_in_house.audit_date');
      } else if (reportCode == this.reportList.OccupancyGraphic) {
        this.query.Condition1 = this.getDateCondition11('date');
      } else if (reportCode == this.reportList.RevenueGraphic) {
        this.query.Condition1 = this.getDateCondition11('sub_folio.audit_date');
      } else if (reportCode == this.reportList.RoomStatistic || reportCode == this.reportList.DailyFlashReport || reportCode == this.reportList.FBStatistic || reportCode == this.reportList.DailyStatisticReport) {
        this.query.Condition1 = this.getDateCondition11('`date`');
        this.query.Condition2 = this.getDateCondition1MTD('`date`');
        this.query.Condition3 = this.getDateCondition1MTDLastMonth('`date`');
        this.query.Condition4 = this.getDateCondition1YTD('`date`');
        this.query.Condition5 = this.getDateCondition1YTDLastYear('`date`');
        this.query.Condition6 = this.getDateCondition1YTDFromLastYear('`date`');
      } else if (reportCode == this.reportList.RoomProduction) {
        var _dateCondition = this.getDateCondition11('guest_in_house.audit_date');

        this.query.Condition1 = ' WHERE ' + _dateCondition;
        _dateCondition = this.getDateCondition11('sub_folio.audit_date');
        this.query.Condition2 = ' WHERE ' + _dateCondition;
        _dateCondition = this.getDateCondition11('guest_in_house.audit_date');
        this.query.Condition3 = _dateCondition;
        _dateCondition = this.getDateCondition11('folio.check_out_date');
        this.query.Condition4 = _dateCondition;
        _dateCondition = this.getDateCondition21('DATE(room_unavailable.from_date)', 'DATE(room_unavailable.to_date)');
        this.query.Condition5 = _dateCondition;
      } else if (reportCode == this.reportList.OTAProductivity) {
        this.query.Condition1 = this.getDateCondition11('guest_in_house.audit_date');
      } else if (reportCode == this.reportList.MarketStatistic) {
        this.query.Condition1 = this.getDateCondition11('DATE(market_statistic.audit_date)');
      } else if (reportCode == this.reportList.DailyHotelCompetitor) {
        this.query.Condition1 = this.getDateCondition11('DATE(competitor_data.date)');
      } else if (reportCode == this.reportList.RateCodeAnalisys) {
        this.query.Condition1 = this.getDateCondition11('DATE(guest_in_house.audit_date)');
      } else if (reportCode == this.reportList.SalesContributionAnalysis) {
        this.query.Condition1 = this.getDateCondition11('DATE(market_statistic.audit_date)');
      } else if (reportCode == this.reportList.LeadList || reportCode == this.reportList.TaskList || reportCode == this.reportList.ProposalList || reportCode == this.reportList.ActivityLog || reportCode == this.reportList.SalesActivityDetail) {//
      } else if (reportCode == this.reportList.CityLedgerList) {//
      } else if (reportCode == this.reportList.CityLedgerAgingReport || reportCode == this.reportList.CityLedgerAgingReportDetail) {//
      } else if (reportCode == this.reportList.CityLedgerInvoice || reportCode == this.reportList.CityLedgerInvoiceDetail || reportCode == this.reportList.CityLedgerInvoicePayment) {//
      } else if (reportCode == this.reportList.CityLedgerInvoiceMutation) {//
      } else if (reportCode == this.reportList.BankTransactionList) {//
      } else if (reportCode == this.reportList.BankTransactionAgingReport || reportCode == this.reportList.BankTransactionAgingReportDetail) {//
      } else if (reportCode == this.reportList.BankReconciliation) {//
      } else if (reportCode == this.reportList.BankTransactionMutation) {//
      } else if (reportCode == this.reportList.APRefundDepositList || reportCode == this.reportList.APCommissionList) {//
      } else if (reportCode == this.reportList.APRefundDepositAgingReport || reportCode == this.reportList.APRefundDepositAgingReportDetail || reportCode == this.reportList.APCommissionAgingReport || reportCode == this.reportList.APCommissionAgingReportDetail) {//
      } else if (reportCode == this.reportList.APRefundDepositPayment || reportCode == this.reportList.APCommissionPayment) {//
      } else if (reportCode == this.reportList.APRefundDepositMutation || reportCode == this.reportList.APCommissionMutation) {//
      } else if (reportCode == this.reportList.LogUser || reportCode == this.reportList.LogMoveRoom || reportCode == this.reportList.LogVoidTransaction || reportCode == this.reportList.LogHouseKeeping || reportCode == this.reportList.LogTransferTransaction) {
        this.query.Condition1 = this.getDateCondition11('DATE(log_user.actual_date)');

        if (reportCode == this.reportList.LogMoveRoom) {
          this.query.Condition1 = this.query.Condition1 + ' AND log_user.action_id="' + this.logUserAction.moveRoom + '"';
        } else if (reportCode == this.reportList.LogVoidTransaction) {
          this.query.Condition1 = this.query.Condition1 + ' AND log_user.action_id="' + this.logUserAction.voidTransaction + '"';
        } else if (reportCode == this.reportList.LogHouseKeeping) {
          this.query.Condition1 = this.query.Condition1 + ' AND (log_user.action_id="' + this.logUserAction.dirtyRoom + '" OR log_user.action_id="' + this.logUserAction.cleanRoom + '" OR log_user.action_id="' + this.logUserAction.readyRoom + '")';
        } else if (reportCode == this.reportList.LogTransferTransaction) {
          this.query.Condition1 = this.query.Condition1 + ' AND log_user.action_id="' + this.logUserAction.transferTransaction + '"';
        } //Filter User ID


        var userID = this.$refs.ReportFilter1.vModelLookUp.user;

        if (userID != undefined && userID != null) {
          this.query.Condition1 = this.query.Condition1 + ' AND log_user.user_id="' + userID + '"';
        } //Filter Log User Action


        var logUserActionID = this.$refs.ReportFilter1.vModelLookUp.logUserAction;

        if (logUserActionID != undefined && logUserActionID != null) {
          this.query.Condition1 = this.query.Condition1 + ' AND log_user.action_id="' + logUserActionID + '"';
        }
      } else if (reportCode == this.reportList.LogShift) {//
      } else if (reportCode == this.reportList.KeyLockHistory) {//
      } else if (reportCode == this.reportList.LogSpecialAccess) {//
      } else if (reportCode == this.reportList.LogPABX) {//
      }
    },
    setDateRangeActive: function setDateRangeActive(reportCode) {
      var DateMode;
      var vModelOptionB4 = this.vModelOptions;
      DateMode = '1111111';

      if (reportCode == this.reportList.RoomList || reportCode == this.reportList.RoomStatus || reportCode == this.reportList.RoomRate || reportCode == this.reportList.RoomRateBreakdown || reportCode == this.reportList.RoomRateStructure || reportCode == this.reportList.Package || reportCode == this.reportList.PackageBreakdown || reportCode == this.reportList.FolioOpenBalance || reportCode == this.reportList.RepeaterGuest || reportCode == this.reportList.CurrentInHouse || reportCode == this.reportList.GuestProfile || reportCode == this.reportList.Company || reportCode == this.reportList.PhoneBook || reportCode == this.reportList.ContractRate || reportCode == this.reportList.RoomType) {
        DateMode = '0000000';
      } else if (reportCode == this.reportList.GuestInHouseForecast || reportCode == this.reportList.DailyFolioTransaction || reportCode == this.reportList.DailyChargeList || reportCode == this.reportList.DailyPaymentList || reportCode == this.reportList.DailySales || reportCode == this.reportList.DailyRevenueReport || reportCode == this.reportList.DailyRevenueReportSummary || reportCode == this.reportList.RoomCountSheet || reportCode == this.reportList.RoomCountSheetByBuildingFloorRoomType || reportCode == this.reportList.RoomCountSheetByRoomTypeBedType || reportCode == this.reportList.RoomStatistic || reportCode == this.reportList.DailyFlashReport || reportCode == this.reportList.FBStatistic || reportCode == this.reportList.GuestLedger || reportCode == this.reportList.GuestDeposit || reportCode == this.reportList.GuestAccount || reportCode == this.reportList.TodayRoomRevenueBreakDown) {
        DateMode = '1000000';
      } else if (reportCode == this.reportList.MonthlyFolioTransaction || reportCode == this.reportList.MonthlyChargeList || reportCode == this.reportList.MonthlyPaymentList) {} else if (reportCode == this.reportList.YearlyTransaction || reportCode == this.reportList.YearlyChargeList || reportCode == this.reportList.YearlyPaymentList || reportCode == this.reportList.GuestForecastReportYearly) {
        DateMode = '0000001';
      } else if (reportCode == this.reportList.GuestForecastComparison) {
        DateMode = '1111100';
      } else if (reportCode == this.reportList.OTAProductivity) {
        DateMode = '1011111';
      } else if (reportCode == this.reportList.RoomProduction && ReportTemplate.RoomProduction == 'RoomProduction02.fr3') {
        DateMode = '1111001';
      }

      if (this.resolutionWidth < 900) {
        //For Small device
        var CanCangeActive = true;
        this.dataLookUpOptionDate = [];

        for (var i = 1; i <= 7; i++) {
          var textLookUp = '';

          if (DateMode[i - 1] == '1') {
            if (i == 1) {
              textLookUp = 'Date';
              this.optionDisable.date = false;

              if (CanCangeActive) {
                this.vModelOptions = 1;
                CanCangeActive = false;
              }
            } else if (i == 2) {
              textLookUp = 'Range';

              if (CanCangeActive) {
                this.vModelOptions = 2;
                CanCangeActive = false;
              }
            } else if (i == 3) {
              textLookUp = 'Week';

              if (CanCangeActive) {
                this.vModelOptions = 3;
                CanCangeActive = false;
              }
            } else if (i == 4) {
              textLookUp = 'Month';

              if (CanCangeActive) {
                this.vModelOptions = 4;
                CanCangeActive = false;
              }
            } else if (i == 5) {
              textLookUp = 'Quarter';

              if (CanCangeActive) {
                this.vModelOptions = 5;
                CanCangeActive = false;
              }
            } else if (i == 6) {
              textLookUp = 'Semester';

              if (CanCangeActive) {
                this.vModelOptions = 6;
                CanCangeActive = false;
              }
            } else if (i == 7) {
              textLookUp = 'Year';

              if (CanCangeActive) {
                this.vModelOptions = 7;
                CanCangeActive = false;
              }
            }

            this.item = {};
            this.item["value"] = i;
            this.item["text"] = textLookUp;
            this.dataLookUpOptionDate.push(this.item);
          }
        }

        if (DateMode == '0000000') {
          this.item = {};
          this.item["value"] = 1;
          this.item["text"] = 'Date';
          this.dataLookUpOptionDate.push(this.item);
          this.optionDisable.date = true;
          this.vModelOptions = 1;
        }
      } else if (this.resolutionWidth >= 900) {
        //For Large Device
        //Date
        this.optionDisable.date = DateMode[0] == '1' ? false : true; //Date Range

        this.optionDisable.range = DateMode[1] == '1' ? false : true; //Week

        this.optionDisable.week = DateMode[2] == '1' ? false : true; //Month

        this.optionDisable.month = DateMode[3] == '1' ? false : true; //Quarter

        this.optionDisable.quarter = DateMode[4] == '1' ? false : true; //Semester

        this.optionDisable.semester = DateMode[5] == '1' ? false : true; //Year

        this.optionDisable.year = DateMode[6] == '1' ? false : true;

        if (!this.optionDisable.date) {
          this.vModelOptions = 1;
        } else if (!this.optionDisable.range) {
          this.vModelOptions = 2;
        } else if (!this.optionDisable.week) {
          this.vModelOptions = 3;
        } else if (!this.optionDisable.month) {
          this.vModelOptions = 4;
        } else if (!this.optionDisable.quarter) {
          this.vModelOptions = 5;
        } else if (!this.optionDisable.semester) {
          this.vModelOptions = 6;
        } else if (!this.optionDisable.year) {
          this.vModelOptions = 7;
        } //If No options disabled check option date


        if (DateMode == '0000000') {
          this.vModelOptions = 1;
        }
      } //Check Options Before if now enabled change to option before


      if (vModelOptionB4 > 0 && DateMode[vModelOptionB4 - 1] == '1') {
        this.vModelOptions = vModelOptionB4;
      }
    },
    getDateDescription: function getDateDescription() {
      if (this.vModelOptions == 1) {
        return 'Date ' + moment__WEBPACK_IMPORTED_MODULE_6___default()(this.vModelDateSelected).format('DD/MM/YYYY');
      } else if (this.vModelOptions == 2) {
        return 'Date Range: ' + moment__WEBPACK_IMPORTED_MODULE_6___default()(this.vModelDateStart).format('DD/MM/YYYY') + ' - ' + moment__WEBPACK_IMPORTED_MODULE_6___default()(this.vModelDateEnd).format('DD/MM/YYYY');
      } else if (this.vModelOptions == 3) {
        return 'Week ' + this.vModelLookUp.week + ' of Year ' + this.vModelLookUp.yearWeek;
      } else if (this.vModelOptions == 4) {
        return 'Month ' + this.vModelLookUp.month + ' of Year ' + this.vModelLookUp.yearMonth;
      } else if (this.vModelOptions == 5) {
        return 'Quarter ' + this.vModelLookUp.quarter + ' of Year ' + this.vModelLookUp.yearQuarter;
      } else if (this.vModelOptions == 6) {
        return 'Semester ' + this.vModelLookUp.semester + ' of Year ' + this.vModelLookUp.yearSemester;
      } else if (this.vModelOptions == 7) {
        return 'Year ' + this.vModelLookUp.year;
      }
    },
    getDateConditionAuditDate: function getDateConditionAuditDate(dateParameter) {
      return dateParameter + '="' + this.auditDate + '"';
    },
    getDateConditionAuditDate2: function getDateConditionAuditDate2(dateParameter1, dateParameter2) {
      return '((' + dateParameter1 + '<=' + this.auditDate + ' AND ' + dateParameter2 + '>=' + this.auditDate + '))';
    },
    getDateCondition01: function getDateCondition01() {
      //return Start Date
      if (this.vModelOptions == 1) {
        return this.vModelDateSelected;
      } else if (this.vModelOptions == 2) {
        return this.vModelDateStart;
      } else if (this.vModelOptions == 3) {
        if (this.vModelLookUp.week == 1) {
          return this.vModelLookUp.yearWeek + '-01-01';
        } else if (this.vModelLookUp.week == 53) {
          var dateFromWeek = Object(_utils_format_js__WEBPACK_IMPORTED_MODULE_1__["formatDateDatabase"])(moment__WEBPACK_IMPORTED_MODULE_6___default()().day("Monday").year(this.vModelLookUp.yearWeek).week(this.vModelLookUp.week + 1).toDate());
          return dateFromWeek;
        } else {
          var _dateFromWeek = Object(_utils_format_js__WEBPACK_IMPORTED_MODULE_1__["formatDateDatabase"])(moment__WEBPACK_IMPORTED_MODULE_6___default()().day("Monday").year(this.vModelLookUp.yearWeek).week(this.vModelLookUp.week).toDate());

          return _dateFromWeek;
        }
      } else if (this.vModelOptions == 4) {
        var dateFromMonth = moment__WEBPACK_IMPORTED_MODULE_6___default()().date(1).month(this.vModelLookUp.month - 1).year(this.vModelLookUp.yearMonth).toDate();
        dateFromMonth = Object(_utils_format_js__WEBPACK_IMPORTED_MODULE_1__["formatDateDatabase"])(moment__WEBPACK_IMPORTED_MODULE_6___default()(dateFromMonth).startOf('month'));
        return dateFromMonth;
      } else if (this.vModelOptions == 5) {
        var dateFromQuarter = moment__WEBPACK_IMPORTED_MODULE_6___default()().date(1).month(this.vModelLookUp.quarter * 3 - 1).year(this.vModelLookUp.yearQuarter).toDate();
        dateFromQuarter = Object(_utils_format_js__WEBPACK_IMPORTED_MODULE_1__["formatDateDatabase"])(moment__WEBPACK_IMPORTED_MODULE_6___default()(dateFromQuarter).startOf('month'));
        return dateFromQuarter;
      } else if (this.vModelOptions == 6) {
        var dateFromSemester = moment__WEBPACK_IMPORTED_MODULE_6___default()().date(1).month(this.vModelLookUp.semester * 6 - 1).year(this.vModelLookUp.yearSemester).toDate();
        dateFromSemester = Object(_utils_format_js__WEBPACK_IMPORTED_MODULE_1__["formatDateDatabase"])(moment__WEBPACK_IMPORTED_MODULE_6___default()(dateFromSemester).startOf('month'));
        return dateFromSemester;
      } else if (this.vModelOptions == 7) {
        var dateFromYear = moment__WEBPACK_IMPORTED_MODULE_6___default()().date(1).month(11).year(this.vModelLookUp.year).toDate();
        dateFromYear = Object(_utils_format_js__WEBPACK_IMPORTED_MODULE_1__["formatDateDatabase"])(moment__WEBPACK_IMPORTED_MODULE_6___default()(dateFromYear).startOf('month'));
        return dateFromYear;
      }
    },
    getDateCondition02: function getDateCondition02() {
      //return End Date
      if (this.vModelOptions == 1) {
        return this.vModelDateSelected;
      } else if (this.vModelOptions == 2) {
        return this.vModelDateEnd;
      } else if (this.vModelOptions == 3) {
        if (this.vModelLookUp.week == 53) {
          return this.vModelLookUp.yearWeek + '-01-01';
        } else {
          var dateFromWeek = Object(_utils_format_js__WEBPACK_IMPORTED_MODULE_1__["formatDateDatabase"])(moment__WEBPACK_IMPORTED_MODULE_6___default()(moment__WEBPACK_IMPORTED_MODULE_6___default()().day("Monday").year(this.vModelLookUp.yearWeek).week(this.vModelLookUp.week).toDate()).add(6, 'days'));
          return dateFromWeek;
        }
      } else if (this.vModelOptions == 4) {
        var dateFromMonth = moment__WEBPACK_IMPORTED_MODULE_6___default()().date(1).month(this.vModelLookUp.month - 1).year(this.vModelLookUp.yearMonth).toDate();
        dateFromMonth = Object(_utils_format_js__WEBPACK_IMPORTED_MODULE_1__["formatDateDatabase"])(moment__WEBPACK_IMPORTED_MODULE_6___default()(dateFromMonth).endOf('month'));
        return dateFromMonth;
      } else if (this.vModelOptions == 5) {
        var dateFromQuarter = moment__WEBPACK_IMPORTED_MODULE_6___default()().date(1).month(this.vModelLookUp.quarter * 3 - 1).year(this.vModelLookUp.yearQuarter).toDate();
        dateFromQuarter = Object(_utils_format_js__WEBPACK_IMPORTED_MODULE_1__["formatDateDatabase"])(moment__WEBPACK_IMPORTED_MODULE_6___default()(dateFromQuarter).endOf('month'));
        return dateFromQuarter;
      } else if (this.vModelOptions == 6) {
        var dateFromSemester = moment__WEBPACK_IMPORTED_MODULE_6___default()().date(1).month(this.vModelLookUp.semester * 6 - 1).year(this.vModelLookUp.yearSemester).toDate();
        dateFromSemester = Object(_utils_format_js__WEBPACK_IMPORTED_MODULE_1__["formatDateDatabase"])(moment__WEBPACK_IMPORTED_MODULE_6___default()(dateFromSemester).endOf('month'));
        return dateFromSemester;
      } else if (this.vModelOptions == 7) {
        var dateFromYear = moment__WEBPACK_IMPORTED_MODULE_6___default()().date(1).month(11).year(this.vModelLookUp.year).toDate();
        dateFromYear = Object(_utils_format_js__WEBPACK_IMPORTED_MODULE_1__["formatDateDatabase"])(moment__WEBPACK_IMPORTED_MODULE_6___default()(dateFromYear).endOf('month'));
        return dateFromYear;
      }
    },
    getDateCondition11: function getDateCondition11(dateParameter) {
      var resultTemp = '';

      if (this.vModelOptions == 1) {
        resultTemp = dateParameter + '="' + this.vModelDateSelected + '"';
        return resultTemp;
      }

      if (this.vModelOptions == 2) {
        resultTemp = dateParameter + '>="' + this.vModelDateStart + '" AND ' + dateParameter + '<="' + this.vModelDateEnd + '"';
        return resultTemp;
      }

      if (this.vModelOptions == 3) {
        resultTemp = 'WEEK(' + dateParameter + ', 3)="' + this.vModelLookUp.week + '" AND YEAR(' + dateParameter + ')="' + this.vModelLookUp.yearWeek + '"';
        return resultTemp;
      }

      if (this.vModelOptions == 4) {
        resultTemp = 'MONTH(' + dateParameter + ')="' + this.vModelLookUp.month + '" AND YEAR(' + dateParameter + ')="' + this.vModelLookUp.yearMonth + '"';
        return resultTemp;
      }

      if (this.vModelOptions == 5) {
        resultTemp = 'MONTH(' + dateParameter + ')>="' + (this.vModelLookUp.quarter * 3 - 2) + '"' + ' AND MONTH(' + dateParameter + ')<="' + this.vModelLookUp.quarter * 3 + '"' + ' AND YEAR(' + dateParameter + ')="' + this.vModelLookUp.yearQuarter + '"';
        return resultTemp;
      }

      if (this.vModelOptions == 6) {
        resultTemp = 'MONTH(' + dateParameter + ')>="' + (this.vModelLookUp.semester * 6 - 5) + '"' + ' AND MONTH(' + dateParameter + ')<="' + this.vModelLookUp.semester * 6 + '"' + ' AND YEAR(' + dateParameter + ')="' + this.vModelLookUp.yearSemester + '"';
        return resultTemp;
      }

      if (this.vModelOptions == 7) {
        resultTemp = 'YEAR(' + dateParameter + ')="' + this.vModelLookUp.year + '"';
        return resultTemp;
      }
    },
    getDateCondition12A: function getDateCondition12A(dateParameter) {
      //DateParameter <= Start Date
      if (this.vModelOptions == 1) {
        return dateParameter + '<="' + this.vModelDateSelected + '"';
      } else if (this.vModelOptions == 2) {
        return dateParameter + '<="' + this.vModelDateStart + '"';
      } else if (this.vModelOptions == 3) {
        var dateFromWeek = Object(_utils_format_js__WEBPACK_IMPORTED_MODULE_1__["formatDateDatabase"])(moment__WEBPACK_IMPORTED_MODULE_6___default()().day("Monday").year(this.vModelLookUp.yearWeek).week(this.vModelLookUp.week).toDate());
        return dateParameter + '<="' + dateFromWeek + '"';
      } else if (this.vModelOptions == 4) {
        var dateFromMonth = moment__WEBPACK_IMPORTED_MODULE_6___default()().date(1).month(this.vModelLookUp.month - 1).year(this.vModelLookUp.yearMonth).toDate();
        dateFromMonth = Object(_utils_format_js__WEBPACK_IMPORTED_MODULE_1__["formatDateDatabase"])(moment__WEBPACK_IMPORTED_MODULE_6___default()(dateFromMonth).startOf('month'));
        return dateParameter + '<="' + dateFromMonth + '"';
      } else if (this.vModelOptions == 5) {
        var dateFromQuarter = moment__WEBPACK_IMPORTED_MODULE_6___default()().date(1).month(this.vModelLookUp.quarter * 3 - 1).year(this.vModelLookUp.yearQuarter).toDate();
        dateFromQuarter = Object(_utils_format_js__WEBPACK_IMPORTED_MODULE_1__["formatDateDatabase"])(moment__WEBPACK_IMPORTED_MODULE_6___default()(dateFromQuarter).startOf('month'));
        return dateParameter + '<="' + dateFromQuarter + '"';
      } else if (this.vModelOptions == 6) {
        var dateFromSemester = moment__WEBPACK_IMPORTED_MODULE_6___default()().date(1).month(this.vModelLookUp.semester * 6 - 1).year(this.vModelLookUp.yearSemester).toDate();
        dateFromSemester = Object(_utils_format_js__WEBPACK_IMPORTED_MODULE_1__["formatDateDatabase"])(moment__WEBPACK_IMPORTED_MODULE_6___default()(dateFromSemester).startOf('month'));
        return dateParameter + '<="' + dateFromSemester + '"';
      } else if (this.vModelOptions == 7) {
        var dateFromYear = moment__WEBPACK_IMPORTED_MODULE_6___default()().date(1).month(11).year(this.vModelLookUp.year).toDate();
        dateFromYear = Object(_utils_format_js__WEBPACK_IMPORTED_MODULE_1__["formatDateDatabase"])(moment__WEBPACK_IMPORTED_MODULE_6___default()(dateFromYear).startOf('month'));
        return dateParameter + '<="' + dateFromYear + '"';
      }
    },
    getDateCondition12B: function getDateCondition12B(dateParameter) {
      //DateParameter < Start Date
      if (this.vModelOptions == 1) {
        return dateParameter + '<"' + this.vModelDateSelected + '"';
      } else if (this.vModelOptions == 2) {
        return dateParameter + '<"' + this.vModelDateStart + '"';
      } else if (this.vModelOptions == 3) {
        var dateFromWeek = Object(_utils_format_js__WEBPACK_IMPORTED_MODULE_1__["formatDateDatabase"])(moment__WEBPACK_IMPORTED_MODULE_6___default()().day("Monday").year(this.vModelLookUp.yearWeek).week(this.vModelLookUp.week).toDate());
        return dateParameter + '<"' + dateFromWeek + '"';
      } else if (this.vModelOptions == 4) {
        var dateFromMonth = moment__WEBPACK_IMPORTED_MODULE_6___default()().date(1).month(this.vModelLookUp.month - 1).year(this.vModelLookUp.yearMonth).toDate();
        dateFromMonth = Object(_utils_format_js__WEBPACK_IMPORTED_MODULE_1__["formatDateDatabase"])(moment__WEBPACK_IMPORTED_MODULE_6___default()(dateFromMonth).startOf('month'));
        return dateParameter + '<"' + dateFromMonth + '"';
      } else if (this.vModelOptions == 5) {
        var dateFromQuarter = moment__WEBPACK_IMPORTED_MODULE_6___default()().date(1).month(this.vModelLookUp.quarter * 3 - 1).year(this.vModelLookUp.yearQuarter).toDate();
        dateFromQuarter = Object(_utils_format_js__WEBPACK_IMPORTED_MODULE_1__["formatDateDatabase"])(moment__WEBPACK_IMPORTED_MODULE_6___default()(dateFromQuarter).startOf('month'));
        return dateParameter + '<"' + dateFromQuarter + '"';
      } else if (this.vModelOptions == 6) {
        var dateFromSemester = moment__WEBPACK_IMPORTED_MODULE_6___default()().date(1).month(this.vModelLookUp.semester * 6 - 1).year(this.vModelLookUp.yearSemester).toDate();
        dateFromSemester = Object(_utils_format_js__WEBPACK_IMPORTED_MODULE_1__["formatDateDatabase"])(moment__WEBPACK_IMPORTED_MODULE_6___default()(dateFromSemester).startOf('month'));
        return dateParameter + '<"' + dateFromSemester + '"';
      } else if (this.vModelOptions == 7) {
        var dateFromYear = moment__WEBPACK_IMPORTED_MODULE_6___default()().date(1).month(11).year(this.vModelLookUp.year).toDate();
        dateFromYear = Object(_utils_format_js__WEBPACK_IMPORTED_MODULE_1__["formatDateDatabase"])(moment__WEBPACK_IMPORTED_MODULE_6___default()(dateFromYear).startOf('month'));
        return dateParameter + '<"' + dateFromYear + '"';
      }
    },
    getDateCondition12C: function getDateCondition12C(dateParameter) {
      //DateParameter > Start Date
      if (this.vModelOptions == 1) {
        return dateParameter + '>"' + this.vModelDateSelected + '"';
      } else if (this.vModelOptions == 2) {
        return dateParameter + '>"' + this.vModelDateStart + '"';
      } else if (this.vModelOptions == 3) {
        var dateFromWeek = Object(_utils_format_js__WEBPACK_IMPORTED_MODULE_1__["formatDateDatabase"])(moment__WEBPACK_IMPORTED_MODULE_6___default()().day("Monday").year(this.vModelLookUp.yearWeek).week(this.vModelLookUp.week).toDate());
        return dateParameter + '>"' + dateFromWeek + '"';
      } else if (this.vModelOptions == 4) {
        var dateFromMonth = moment__WEBPACK_IMPORTED_MODULE_6___default()().date(1).month(this.vModelLookUp.month - 1).year(this.vModelLookUp.yearMonth).toDate();
        dateFromMonth = Object(_utils_format_js__WEBPACK_IMPORTED_MODULE_1__["formatDateDatabase"])(moment__WEBPACK_IMPORTED_MODULE_6___default()(dateFromMonth).startOf('month'));
        return dateParameter + '>"' + dateFromMonth + '"';
      } else if (this.vModelOptions == 5) {
        var dateFromQuarter = moment__WEBPACK_IMPORTED_MODULE_6___default()().date(1).month(this.vModelLookUp.quarter * 3 - 1).year(this.vModelLookUp.yearQuarter).toDate();
        dateFromQuarter = Object(_utils_format_js__WEBPACK_IMPORTED_MODULE_1__["formatDateDatabase"])(moment__WEBPACK_IMPORTED_MODULE_6___default()(dateFromQuarter).startOf('month'));
        return dateParameter + '>"' + dateFromQuarter + '"';
      } else if (this.vModelOptions == 6) {
        var dateFromSemester = moment__WEBPACK_IMPORTED_MODULE_6___default()().date(1).month(this.vModelLookUp.semester * 6 - 1).year(this.vModelLookUp.yearSemester).toDate();
        dateFromSemester = Object(_utils_format_js__WEBPACK_IMPORTED_MODULE_1__["formatDateDatabase"])(moment__WEBPACK_IMPORTED_MODULE_6___default()(dateFromSemester).startOf('month'));
        return dateParameter + '>"' + dateFromSemester + '"';
      } else if (this.vModelOptions == 7) {
        var dateFromYear = moment__WEBPACK_IMPORTED_MODULE_6___default()().date(1).month(11).year(this.vModelLookUp.year).toDate();
        dateFromYear = Object(_utils_format_js__WEBPACK_IMPORTED_MODULE_1__["formatDateDatabase"])(moment__WEBPACK_IMPORTED_MODULE_6___default()(dateFromYear).startOf('month'));
        return dateParameter + '>"' + dateFromYear + '"';
      }
    },
    getDateCondition13: function getDateCondition13(dateParameter) {
      //dateParameter <= End Date
      if (this.vModelOptions == 1) {
        return dateParameter + '<="' + this.vModelDateSelected + '"';
      } else if (this.vModelOptions == 2) {
        return dateParameter + '<="' + this.vModelDateEnd + '"';
      } else if (this.vModelOptions == 3) {
        var dateFromWeek = Object(_utils_format_js__WEBPACK_IMPORTED_MODULE_1__["formatDateDatabase"])(moment__WEBPACK_IMPORTED_MODULE_6___default()(moment__WEBPACK_IMPORTED_MODULE_6___default()().day("Monday").year(this.vModelLookUp.yearWeek).week(this.vModelLookUp.week).toDate()).add(6, 'days'));
        return dateParameter + '<="' + dateFromWeek + '"';
      } else if (this.vModelOptions == 4) {
        var dateFromMonth = moment__WEBPACK_IMPORTED_MODULE_6___default()().date(1).month(this.vModelLookUp.month - 1).year(this.vModelLookUp.yearMonth).toDate();
        dateFromMonth = Object(_utils_format_js__WEBPACK_IMPORTED_MODULE_1__["formatDateDatabase"])(moment__WEBPACK_IMPORTED_MODULE_6___default()(dateFromMonth).endOf('month'));
        return dateParameter + '<="' + dateFromMonth + '"';
      } else if (this.vModelOptions == 5) {
        var dateFromQuarter = moment__WEBPACK_IMPORTED_MODULE_6___default()().date(1).month(this.vModelLookUp.quarter * 3 - 1).year(this.vModelLookUp.yearQuarter).toDate();
        dateFromQuarter = Object(_utils_format_js__WEBPACK_IMPORTED_MODULE_1__["formatDateDatabase"])(moment__WEBPACK_IMPORTED_MODULE_6___default()(dateFromQuarter).endOf('month'));
        return dateParameter + '<="' + dateFromQuarter + '"';
      } else if (this.vModelOptions == 6) {
        var dateFromSemester = moment__WEBPACK_IMPORTED_MODULE_6___default()().date(1).month(this.vModelLookUp.semester * 6 - 1).year(this.vModelLookUp.yearSemester).toDate();
        dateFromSemester = Object(_utils_format_js__WEBPACK_IMPORTED_MODULE_1__["formatDateDatabase"])(moment__WEBPACK_IMPORTED_MODULE_6___default()(dateFromSemester).endOf('month'));
        return dateParameter + '<="' + dateFromSemester + '"';
      } else if (this.vModelOptions == 7) {
        var dateFromYear = moment__WEBPACK_IMPORTED_MODULE_6___default()().date(1).month(11).year(this.vModelLookUp.year).toDate();
        dateFromYear = Object(_utils_format_js__WEBPACK_IMPORTED_MODULE_1__["formatDateDatabase"])(moment__WEBPACK_IMPORTED_MODULE_6___default()(dateFromYear).endOf('month'));
        return dateParameter + '<="' + dateFromYear + '"';
      }
    },
    getDateCondition13A: function getDateCondition13A(dateParameter) {
      //DateParameter > End Date
      if (this.vModelOptions == 1) {
        return dateParameter + '>"' + this.vModelDateSelected + '"';
      } else if (this.vModelOptions == 2) {
        return dateParameter + '>"' + this.vModelDateEnd + '"';
      } else if (this.vModelOptions == 3) {
        var dateFromWeek = Object(_utils_format_js__WEBPACK_IMPORTED_MODULE_1__["formatDateDatabase"])(moment__WEBPACK_IMPORTED_MODULE_6___default()(moment__WEBPACK_IMPORTED_MODULE_6___default()().day("Monday").year(this.vModelLookUp.yearWeek).week(this.vModelLookUp.week).toDate()).add(6, 'days'));
        return dateParameter + '>"' + dateFromWeek + '"';
      } else if (this.vModelOptions == 4) {
        var dateFromMonth = moment__WEBPACK_IMPORTED_MODULE_6___default()().date(1).month(this.vModelLookUp.month - 1).year(this.vModelLookUp.yearMonth).toDate();
        dateFromMonth = Object(_utils_format_js__WEBPACK_IMPORTED_MODULE_1__["formatDateDatabase"])(moment__WEBPACK_IMPORTED_MODULE_6___default()(dateFromMonth).endOf('month'));
        return dateParameter + '>"' + dateFromMonth + '"';
      } else if (this.vModelOptions == 5) {
        var dateFromQuarter = moment__WEBPACK_IMPORTED_MODULE_6___default()().date(1).month(this.vModelLookUp.quarter * 3 - 1).year(this.vModelLookUp.yearQuarter).toDate();
        dateFromQuarter = Object(_utils_format_js__WEBPACK_IMPORTED_MODULE_1__["formatDateDatabase"])(moment__WEBPACK_IMPORTED_MODULE_6___default()(dateFromQuarter).endOf('month'));
        return dateParameter + '>"' + dateFromQuarter + '"';
      } else if (this.vModelOptions == 6) {
        var dateFromSemester = moment__WEBPACK_IMPORTED_MODULE_6___default()().date(1).month(this.vModelLookUp.semester * 6 - 1).year(this.vModelLookUp.yearSemester).toDate();
        dateFromSemester = Object(_utils_format_js__WEBPACK_IMPORTED_MODULE_1__["formatDateDatabase"])(moment__WEBPACK_IMPORTED_MODULE_6___default()(dateFromSemester).endOf('month'));
        return dateParameter + '>"' + dateFromSemester + '"';
      } else if (this.vModelOptions == 7) {
        var dateFromYear = moment__WEBPACK_IMPORTED_MODULE_6___default()().date(1).month(11).year(this.vModelLookUp.year).toDate();
        dateFromYear = Object(_utils_format_js__WEBPACK_IMPORTED_MODULE_1__["formatDateDatabase"])(moment__WEBPACK_IMPORTED_MODULE_6___default()(dateFromYear).endOf('month'));
        return dateParameter + '>"' + dateFromYear + '"';
      }
    },
    getDateCondition1MTD: function getDateCondition1MTD(dateParameter) {
      if (this.vModelOptions == 1) {
        return dateParameter + '>="' + Object(_utils_format_js__WEBPACK_IMPORTED_MODULE_1__["formatDateDatabase"])(moment__WEBPACK_IMPORTED_MODULE_6___default()(this.vModelDateSelected).startOf('month')) + '" AND ' + dateParameter + '<="' + this.vModelDateSelected + '"';
      }
    },
    getDateCondition1YTD: function getDateCondition1YTD(dateParameter) {
      if (this.vModelOptions == 1) {
        var startDateOfTheYear = moment__WEBPACK_IMPORTED_MODULE_6___default()(moment__WEBPACK_IMPORTED_MODULE_6___default()(this.vModelDateSelected).month(0).toDate()).startOf('month');
        return dateParameter + '>="' + Object(_utils_format_js__WEBPACK_IMPORTED_MODULE_1__["formatDateDatabase"])(startDateOfTheYear) + '" AND ' + dateParameter + '<="' + this.vModelDateSelected + '"';
      }
    },
    getDateCondition1YTDLastYear: function getDateCondition1YTDLastYear(dateParameter) {
      if (this.vModelOptions == 1) {
        var startOfDateMonthLastYear = Object(_utils_format_js__WEBPACK_IMPORTED_MODULE_1__["formatDateDatabase"])(moment__WEBPACK_IMPORTED_MODULE_6___default()(moment__WEBPACK_IMPORTED_MODULE_6___default()(this.vModelDateSelected).add(-12, 'M')).startOf('month'));
        var dateLastYear = Object(_utils_format_js__WEBPACK_IMPORTED_MODULE_1__["formatDateDatabase"])(moment__WEBPACK_IMPORTED_MODULE_6___default()(this.vModelDateSelected).add(-12, 'M'));
        return dateParameter + '>="' + startOfDateMonthLastYear + '" AND ' + dateParameter + '<="' + dateLastYear + '"';
      }
    },
    getDateCondition1YTDFromLastYear: function getDateCondition1YTDFromLastYear(dateParameter) {
      if (this.vModelOptions == 1) {
        var startOfDateMonthLastYear = Object(_utils_format_js__WEBPACK_IMPORTED_MODULE_1__["formatDateDatabase"])(moment__WEBPACK_IMPORTED_MODULE_6___default()(moment__WEBPACK_IMPORTED_MODULE_6___default()(this.vModelDateSelected).add(-12, 'M')).startOf('month'));
        return dateParameter + '>="' + startOfDateMonthLastYear + '" AND ' + dateParameter + '<="' + this.vModelDateSelected + '"';
      }
    },
    getDateCondition21: function getDateCondition21(dateParameter1, dateParameter2) {
      var dateFrom = '';
      var dateTo = '';

      if (this.vModelOptions == 1) {
        dateFrom = this.vModelDateSelected;
        dateTo = this.vModelDateSelected;
      } else if (this.vModelOptions == 2) {
        dateFrom = this.vModelDateStart;
        dateTo = this.vModelDateEnd;
      } else if (this.vModelOptions == 3) {
        if (this.vModelLookUp.week == 1) {
          dateFrom = this.vModelLookUp.yearWeek + '-01-01';
        } else if (this.vModelOptions == 53) {
          var dateFromStartWeek = Object(_utils_format_js__WEBPACK_IMPORTED_MODULE_1__["formatDateDatabase"])(moment__WEBPACK_IMPORTED_MODULE_6___default()().day("Monday").year(this.vModelLookUp.yearWeek + 1).week(1).toDate());
          dateFrom = dateFromStartWeek;
        } else {
          var _dateFromStartWeek = Object(_utils_format_js__WEBPACK_IMPORTED_MODULE_1__["formatDateDatabase"])(moment__WEBPACK_IMPORTED_MODULE_6___default()().day("Monday").year(this.vModelLookUp.yearWeek).week(this.vModelLookUp.week).toDate());

          dateFrom = _dateFromStartWeek;
        }

        if (this.vModelLookUp.week == 53) {
          dateTo = this.vModelLookUp.yearWeek + '-12-31';
        } else {
          var dateFromWeek = Object(_utils_format_js__WEBPACK_IMPORTED_MODULE_1__["formatDateDatabase"])(moment__WEBPACK_IMPORTED_MODULE_6___default()(moment__WEBPACK_IMPORTED_MODULE_6___default()().day("Monday").year(this.vModelLookUp.yearWeek).week(this.vModelLookUp.week).toDate()).add(6, 'days'));
          dateTo = dateFromWeek;
        }
      } else if (this.vModelOptions == 4) {
        var dateFromMonth = moment__WEBPACK_IMPORTED_MODULE_6___default()().date(1).month(this.vModelLookUp.month - 1).year(this.vModelLookUp.yearMonth).toDate();
        var startOfMonth = Object(_utils_format_js__WEBPACK_IMPORTED_MODULE_1__["formatDateDatabase"])(moment__WEBPACK_IMPORTED_MODULE_6___default()(dateFromMonth).startOf('month'));
        var endOfMonth = Object(_utils_format_js__WEBPACK_IMPORTED_MODULE_1__["formatDateDatabase"])(moment__WEBPACK_IMPORTED_MODULE_6___default()(dateFromMonth).endOf('month'));
        dateFrom = startOfMonth;
        dateTo = endOfMonth;
      } else if (this.vModelOptions == 5) {
        var dateFromQuarter = moment__WEBPACK_IMPORTED_MODULE_6___default()().date(1).month((this.vModelLookUp.quarter - 1) * 3).year(this.vModelLookUp.yearQuarter).toDate();
        var dateToQuarter = moment__WEBPACK_IMPORTED_MODULE_6___default()(moment__WEBPACK_IMPORTED_MODULE_6___default()().date(1).month(this.vModelLookUp.quarter * 3 - 1).year(this.vModelLookUp.yearQuarter).toDate()).endOf('month');
        dateFrom = Object(_utils_format_js__WEBPACK_IMPORTED_MODULE_1__["formatDateDatabase"])(dateFromQuarter);
        dateTo = Object(_utils_format_js__WEBPACK_IMPORTED_MODULE_1__["formatDateDatabase"])(dateToQuarter);
      } else if (this.vModelOptions == 6) {
        var dateFromSemester = moment__WEBPACK_IMPORTED_MODULE_6___default()().date(1).month((this.vModelLookUp.semester - 1) * 6).year(this.vModelLookUp.yearSemester).toDate();
        var dateToSemester = moment__WEBPACK_IMPORTED_MODULE_6___default()(moment__WEBPACK_IMPORTED_MODULE_6___default()().date(1).month(this.vModelLookUp.semester * 6 - 1).year(this.vModelLookUp.yearSemester).toDate()).endOf('month');
        dateFrom = Object(_utils_format_js__WEBPACK_IMPORTED_MODULE_1__["formatDateDatabase"])(dateFromSemester);
        dateTo = Object(_utils_format_js__WEBPACK_IMPORTED_MODULE_1__["formatDateDatabase"])(dateToSemester);
      } else if (this.vModelOptions == 7) {
        dateFrom = this.vModelLookUp.year + '-01-01';
        dateTo = this.vModelLookUp.year + '-12-31';
      }

      if (dateFrom != '' && dateTo != '') {
        dateFrom = '"' + dateFrom + '"';
        dateTo = '"' + dateTo + '"';
        return '((' + dateParameter1 + '<=' + dateTo + ' AND ' + dateParameter2 + '>=' + dateFrom + '))';
      }
    },
    getDateCondition22: function getDateCondition22(dateParameter1, dateParameter2) {
      var dateFrom = '';
      var dateTo = '';

      if (this.vModelOptions == 1) {
        dateFrom = this.vModelDateSelected;
        dateTo = this.vModelDateSelected;
      } else if (this.vModelOptions == 2) {
        dateFrom = this.vModelDateStart;
        dateTo = this.vModelDateEnd;
      } else if (this.vModelOptions == 3) {
        if (this.vModelLookUp.week == 1) {
          dateFrom = this.vModelLookUp.yearWeek + '-01-01';
        } else if (this.vModelOptions == 53) {
          var dateFromStartWeek = Object(_utils_format_js__WEBPACK_IMPORTED_MODULE_1__["formatDateDatabase"])(moment__WEBPACK_IMPORTED_MODULE_6___default()().day("Monday").year(this.vModelLookUp.yearWeek + 1).week(1).toDate());
          dateFrom = dateFromStartWeek;
        } else {
          var _dateFromStartWeek2 = Object(_utils_format_js__WEBPACK_IMPORTED_MODULE_1__["formatDateDatabase"])(moment__WEBPACK_IMPORTED_MODULE_6___default()().day("Monday").year(this.vModelLookUp.yearWeek).week(this.vModelLookUp.week).toDate());

          dateFrom = _dateFromStartWeek2;
        }

        if (this.vModelLookUp.week == 53) {
          dateTo = this.vModelLookUp.yearWeek + '-12-31';
        } else {
          var dateFromWeek = Object(_utils_format_js__WEBPACK_IMPORTED_MODULE_1__["formatDateDatabase"])(moment__WEBPACK_IMPORTED_MODULE_6___default()(moment__WEBPACK_IMPORTED_MODULE_6___default()().day("Monday").year(this.vModelLookUp.yearWeek).week(this.vModelLookUp.week).toDate()).add(6, 'days'));
          dateTo = dateFromWeek;
        }
      } else if (this.vModelOptions == 4) {
        var dateFromMonth = moment__WEBPACK_IMPORTED_MODULE_6___default()().date(1).month(this.vModelLookUp.month - 1).year(this.vModelLookUp.yearMonth).toDate();
        var startOfMonth = Object(_utils_format_js__WEBPACK_IMPORTED_MODULE_1__["formatDateDatabase"])(moment__WEBPACK_IMPORTED_MODULE_6___default()(dateFromMonth).startOf('month'));
        var endOfMonth = Object(_utils_format_js__WEBPACK_IMPORTED_MODULE_1__["formatDateDatabase"])(moment__WEBPACK_IMPORTED_MODULE_6___default()(dateFromMonth).endOf('month'));
        dateFrom = startOfMonth;
        dateTo = endOfMonth;
      } else if (this.vModelOptions == 5) {
        var dateFromQuarter = moment__WEBPACK_IMPORTED_MODULE_6___default()().date(1).month((this.vModelLookUp.quarter - 1) * 3).year(this.vModelLookUp.yearQuarter).toDate();
        var dateToQuarter = moment__WEBPACK_IMPORTED_MODULE_6___default()(moment__WEBPACK_IMPORTED_MODULE_6___default()().date(1).month(this.vModelLookUp.quarter * 3 - 1).year(this.vModelLookUp.yearQuarter).toDate()).endOf('month');
        dateFrom = Object(_utils_format_js__WEBPACK_IMPORTED_MODULE_1__["formatDateDatabase"])(dateFromQuarter);
        dateTo = Object(_utils_format_js__WEBPACK_IMPORTED_MODULE_1__["formatDateDatabase"])(dateToQuarter);
      } else if (this.vModelOptions == 6) {
        var dateFromSemester = moment__WEBPACK_IMPORTED_MODULE_6___default()().date(1).month((this.vModelLookUp.semester - 1) * 6).year(this.vModelLookUp.yearSemester).toDate();
        var dateToSemester = moment__WEBPACK_IMPORTED_MODULE_6___default()(moment__WEBPACK_IMPORTED_MODULE_6___default()().date(1).month(this.vModelLookUp.semester * 6 - 1).year(this.vModelLookUp.yearSemester).toDate()).endOf('month');
        dateFrom = Object(_utils_format_js__WEBPACK_IMPORTED_MODULE_1__["formatDateDatabase"])(dateFromSemester);
        dateTo = Object(_utils_format_js__WEBPACK_IMPORTED_MODULE_1__["formatDateDatabase"])(dateToSemester);
      } else if (this.vModelOptions == 7) {
        dateFrom = this.vModelLookUp.year + '-01-01';
        dateTo = this.vModelLookUp.year + '-12-31';
      }

      if (dateFrom != '' && dateTo != '') {
        dateFrom = '"' + dateFrom + '"';
        dateTo = '"' + dateTo + '"';
        return '(((' + dateParameter1 + '<' + dateParameter2 + ') AND (' + dateParameter1 + '<=' + dateTo + ' AND ' + dateParameter2 + '>' + dateFrom + ')) OR ' + '((' + dateParameter1 + '=' + dateParameter2 + ') AND (' + dateParameter1 + '>=' + dateFrom + ' AND ' + dateParameter2 + '<=' + dateTo + ')))';
      }
    },
    getDateCondition23: function getDateCondition23(dateParameter1, dateParameter2) {
      var dateFrom = '';
      var dateTo = '';

      if (this.vModelOptions == 1) {
        dateFrom = this.vModelDateSelected;
        dateTo = this.vModelDateSelected;
      } else if (this.vModelOptions == 2) {
        dateFrom = this.vModelDateStart;
        dateTo = this.vModelDateEnd;
      } else if (this.vModelOptions == 3) {
        if (this.vModelLookUp.week == 1) {
          dateFrom = this.vModelLookUp.yearWeek + '-01-01';
        } else if (this.vModelOptions == 53) {
          var dateFromStartWeek = Object(_utils_format_js__WEBPACK_IMPORTED_MODULE_1__["formatDateDatabase"])(moment__WEBPACK_IMPORTED_MODULE_6___default()().day("Monday").year(this.vModelLookUp.yearWeek + 1).week(1).toDate());
          dateFrom = dateFromStartWeek;
        } else {
          var _dateFromStartWeek3 = Object(_utils_format_js__WEBPACK_IMPORTED_MODULE_1__["formatDateDatabase"])(moment__WEBPACK_IMPORTED_MODULE_6___default()().day("Monday").year(this.vModelLookUp.yearWeek).week(this.vModelLookUp.week).toDate());

          dateFrom = _dateFromStartWeek3;
        }

        if (this.vModelLookUp.week == 53) {
          dateTo = this.vModelLookUp.yearWeek + '-12-31';
        } else {
          var dateFromWeek = Object(_utils_format_js__WEBPACK_IMPORTED_MODULE_1__["formatDateDatabase"])(moment__WEBPACK_IMPORTED_MODULE_6___default()(moment__WEBPACK_IMPORTED_MODULE_6___default()().day("Monday").year(this.vModelLookUp.yearWeek).week(this.vModelLookUp.week).toDate()).add(6, 'days'));
          dateTo = dateFromWeek;
        }
      } else if (this.vModelOptions == 4) {
        var dateFromMonth = moment__WEBPACK_IMPORTED_MODULE_6___default()().date(1).month(this.vModelLookUp.month - 1).year(this.vModelLookUp.yearMonth).toDate();
        var startOfMonth = Object(_utils_format_js__WEBPACK_IMPORTED_MODULE_1__["formatDateDatabase"])(moment__WEBPACK_IMPORTED_MODULE_6___default()(dateFromMonth).startOf('month'));
        var endOfMonth = Object(_utils_format_js__WEBPACK_IMPORTED_MODULE_1__["formatDateDatabase"])(moment__WEBPACK_IMPORTED_MODULE_6___default()(dateFromMonth).endOf('month'));
        dateFrom = startOfMonth;
        dateTo = endOfMonth;
      } else if (this.vModelOptions == 5) {
        var dateFromQuarter = moment__WEBPACK_IMPORTED_MODULE_6___default()().date(1).month((this.vModelLookUp.quarter - 1) * 3).year(this.vModelLookUp.yearQuarter).toDate();
        var dateToQuarter = moment__WEBPACK_IMPORTED_MODULE_6___default()(moment__WEBPACK_IMPORTED_MODULE_6___default()().date(1).month(this.vModelLookUp.quarter * 3 - 1).year(this.vModelLookUp.yearQuarter).toDate()).endOf('month');
        dateFrom = Object(_utils_format_js__WEBPACK_IMPORTED_MODULE_1__["formatDateDatabase"])(dateFromQuarter);
        dateTo = Object(_utils_format_js__WEBPACK_IMPORTED_MODULE_1__["formatDateDatabase"])(dateToQuarter);
      } else if (this.vModelOptions == 6) {
        var dateFromSemester = moment__WEBPACK_IMPORTED_MODULE_6___default()().date(1).month((this.vModelLookUp.semester - 1) * 6).year(this.vModelLookUp.yearSemester).toDate();
        var dateToSemester = moment__WEBPACK_IMPORTED_MODULE_6___default()(moment__WEBPACK_IMPORTED_MODULE_6___default()().date(1).month(this.vModelLookUp.semester * 6 - 1).year(this.vModelLookUp.yearSemester).toDate()).endOf('month');
        dateFrom = Object(_utils_format_js__WEBPACK_IMPORTED_MODULE_1__["formatDateDatabase"])(dateFromSemester);
        dateTo = Object(_utils_format_js__WEBPACK_IMPORTED_MODULE_1__["formatDateDatabase"])(dateToSemester);
      } else if (this.vModelOptions == 7) {
        dateFrom = this.vModelLookUp.year + '-01-01';
        dateTo = this.vModelLookUp.year + '-12-31';
      }

      if (dateFrom != '' && dateTo != '') {
        dateFrom = '"' + dateFrom + '"';
        dateTo = '"' + dateTo + '"';
        return '((' + dateFrom + '>=' + dateParameter1 + ' AND ' + dateTo + '<' + dateParameter2 + '))';
      }
    },
    setRadioCheck: function setRadioCheck(param, changeFrom) {
      if (param != undefined) {
        this.vModelOptions = param;
      }

      var tempStartDate = new Date(this.vModelDateStart);
      var tempEndDate = new Date(this.vModelDateEnd); //1=From Date Start 2=From Date End

      if (changeFrom != undefined) {
        if (changeFrom == 1 && tempStartDate > tempEndDate) {
          this.vModelDateEnd = this.vModelDateStart;
        } else if (changeFrom == 2 && tempEndDate < tempStartDate) {
          this.vModelDateStart = this.vModelDateEnd;
        }
      }
    },
    search: function search() {
      //Modify Search Capitalize word
      this.searchword = Object(_utils_format_js__WEBPACK_IMPORTED_MODULE_1__["capitalize"])(this.searchword);
      this.$refs.tree.searchNodes(this.searchword);
    },
    nodeclick: function () {
      var _nodeclick = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
        var _this2 = this;

        var _ref2, data, $i;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                this.reportFileName = '';
                this.reportCodeInt = 0;
                this.selectedNode = this.$refs.tree.getSelectedNodes();

                if (!(this.selectedNode.length > 0)) {
                  _context3.next = 22;
                  break;
                }

                _context3.next = 6;
                return this.selectedNode[0].id;

              case 6:
                this.reportCodeInt = _context3.sent;
                this.modalTitle = this.selectedNode[0].title;

                if (!(this.reportCodeInt > 1000)) {
                  _context3.next = 20;
                  break;
                }

                this.setDateRangeActive(this.reportCodeInt);
                this.$vs.loading({
                  container: '#layout--main',
                  scale: this.scaleLoadingMainLayout
                });
                _context3.next = 13;
                return reportResource.reportTemplate({
                  reportCode: this.reportCodeInt
                });

              case 13:
                _ref2 = _context3.sent;
                data = _ref2.data;
                this.dataLookUpTemplate = data.reportTemplate;
                this.$vs.loading.close('#layout--main>.con-vs-loading'); //Report having Template

                if (data.reportTemplate.length > 0) {
                  this.optionDisableTemplate = false;

                  for ($i = 0; $i < this.dataLookUpTemplate.length; $i++) {
                    if (data.reportTemplate[$i].is_default == "-1") {
                      this.vModelLookUpIdTemplate = data.reportTemplate[$i].id_log;
                      this.isTemplateSystemDefault = data.reportTemplate[$i].is_system == '-1' ? true : false;
                    }
                  }
                } else {
                  //Setup File Name Report if Have No Template
                  this.optionDisableTemplate = true;
                  this.vModelLookUpIdTemplate = 0;
                  this.isTemplateSystemDefault = true;

                  if (this.reportCodeInt == this.reportList.DailyRevenueReport) {
                    this.reportFileName = 'DailyRevenueReport.mrt';
                  }
                }

                this.showModal = true;
                setTimeout(function () {
                  if (_this2.dialog.isAddHeaderCloseButton) {
                    _this2.addDialogCloseButton(_this2.firstDialog);

                    _this2.element = document.getElementsByClassName('filter-string').length;
                  }

                  _this2.$vs.loading.close('#layout--main>.con-vs-loading');
                }, 100);

              case 20:
                _context3.next = 23;
                break;

              case 22:
                this.reportCodeInt = 0;

              case 23:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function nodeclick() {
        return _nodeclick.apply(this, arguments);
      }

      return nodeclick;
    }(),
    getDataReportList: function () {
      var _getDataReportList = _asyncToGenerator(
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
                return reportResource.reportListData({
                  userID: this.userInfo.code
                });

              case 3:
                _ref3 = _context4.sent;
                data = _ref3.data;
                this.treeData = data.dataTree;
                this.$vs.loading.close('#layout--main>.con-vs-loading');

              case 7:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function getDataReportList() {
        return _getDataReportList.apply(this, arguments);
      }

      return getDataReportList;
    }(),
    getYearSelect: function () {
      var _getYearSelect = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5() {
        var i;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                this.auditDateStr = this.auditDate.split('-');
                this.yearInt = parseInt(this.auditDateStr[0]);
                this.jsonObj = [];

                for (i = this.yearInt - 5; i <= this.yearInt + 5; i++) {
                  this.item = {};
                  this.item["text"] = i;
                  this.item["value"] = i;
                  this.jsonObj.push(this.item);
                }

                this.dataLookUpYear = this.jsonObj;
                this.vModelLookUp.yearWeek = this.yearInt;
                this.vModelLookUp.yearMonth = this.yearInt;
                this.vModelLookUp.yearQuarter = this.yearInt;
                this.vModelLookUp.yearSemester = this.yearInt;
                this.vModelLookUp.year = this.yearInt;

              case 10:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function getYearSelect() {
        return _getYearSelect.apply(this, arguments);
      }

      return getYearSelect;
    }(),
    getWeekSelect: function () {
      var _getWeekSelect = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee6() {
        var i;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                this.jsonObj = [];

                for (i = 1; i <= 53; i++) {
                  this.item = {};
                  this.item["text"] = i;
                  this.item["value"] = i;
                  this.jsonObj.push(this.item);
                }

                this.dataLookUpWeek = this.jsonObj;

              case 3:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function getWeekSelect() {
        return _getWeekSelect.apply(this, arguments);
      }

      return getWeekSelect;
    }(),
    getResolution: function getResolution() {
      this.resolutionWidth = screen.width;
    },
    dispatchAuditDate: function () {
      var _dispatchAuditDate = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee7() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _context7.next = 2;
                return this.$store.dispatch('getAuditDate');

              case 2:
                _context7.next = 4;
                return this.auditDate;

              case 4:
                this.vModelDateSelected = _context7.sent;
                this.vModelDateStart = this.vModelDateSelected;
                this.vModelDateEnd = this.vModelDateSelected;
                this.getWeekSelect();
                this.getYearSelect();
                this.getDataReportList(); //get Audit Date week

                this.vModelLookUp.week = moment__WEBPACK_IMPORTED_MODULE_6___default()(this.auditDate).format('w'); //get Audit Date Month

                this.vModelLookUp.month = moment__WEBPACK_IMPORTED_MODULE_6___default()(this.auditDate).format('M'); //get Audit Date Quater

                this.vModelLookUp.quarter = moment__WEBPACK_IMPORTED_MODULE_6___default()(this.auditDate).format('Q'); //get Audit Date Semester

                this.vModelLookUp.semester = this.vModelLookUp.month <= 6 ? '1' : '2';

              case 14:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      function dispatchAuditDate() {
        return _dispatchAuditDate.apply(this, arguments);
      }

      return dispatchAuditDate;
    }(),
    // Preview report access
    getPreviewReportAccess: function () {
      var _getPreviewReportAccess = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee8() {
        var _ref4, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                _context8.next = 2;
                return reportResource.getPreviewReportAccess({
                  code: this.userID
                });

              case 2:
                _ref4 = _context8.sent;
                data = _ref4.data;

                if (data.accessPreviewReport != undefined && data.accessPreviewReport != null && data.accessPreviewReport != '') {
                  this.editReportAccess = data.accessPreviewReport[this.otherAccessOrder.editReport];
                  this.exportReportAccess = data.accessPreviewReport[this.otherAccessOrder.exportReport];
                  this.customizeReportAccess = data.accessPreviewReport[this.otherAccessOrder.customizeReport];
                }

              case 5:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, this);
      }));

      function getPreviewReportAccess() {
        return _getPreviewReportAccess.apply(this, arguments);
      }

      return getPreviewReportAccess;
    }(),
    back: function back() {
      if (this.$refs.dialogsecond.showDialog) {
        this.$refs.dialogsecond.showDialog = false;
      } else {
        this.showModal = false;
      }
    }
  },
  computed: {
    auditDate: function auditDate() {
      return this.$store.state.auditLog.auditDate;
    },
    userID: function userID() {
      return this.$store.state.auth.accountCode;
    },
    scrollbarTag: function scrollbarTag() {
      return this.$store.getters.scrollbarTag;
    }
  },
  created: function created() {
    var _this3 = this;

    //Handle Back Button & forward on browser create hook
    var unregisterRouterGuard = this.$router.beforeEach(function (to, from, next) {
      if (_this3.showModal || _this3.$refs.dialogsecond.showDialog) {
        _this3.back();

        next(false);
      } else {
        next();
      }
    }); //Destroyed hook

    this.$once('hook:destroyed', function () {
      unregisterRouterGuard();
    });
    this.dispatchAuditDate();
  },
  mounted: function mounted() {
    this.getResolution();
    this.getPreviewReportAccess();
    this.element = document.getElementsByClassName('filter-string').length;
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/report/components/ReportEditor.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/report/components/ReportEditor.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ag_grid_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ag-grid-vue */ "./node_modules/ag-grid-vue/main.js");
/* harmony import */ var ag_grid_vue__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ag_grid_vue__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _api_report_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/api/report.js */ "./resources/js/src/api/report.js");
/* harmony import */ var _views_pages_components_DialogSecond_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/views/pages/components/DialogSecond.vue */ "./resources/js/src/views/pages/components/DialogSecond.vue");
/* harmony import */ var _utils_alert_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/utils/alert.js */ "./resources/js/src/utils/alert.js");


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




var reportResource = new _api_report_js__WEBPACK_IMPORTED_MODULE_2__["default"]();
/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    'ag-grid-vue': ag_grid_vue__WEBPACK_IMPORTED_MODULE_1__["AgGridVue"],
    DialogThree: _views_pages_components_DialogSecond_vue__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  props: ['modeDataEditor', 'idLogTemplate', 'reportCodeInt'],
  data: function data() {
    return {
      radiosOrientation: 1,
      dataLookUpPageSize: [{
        value: 0,
        text: '(Custom)'
      }, {
        value: 1,
        text: 'A4'
      }, {
        value: 2,
        text: 'Letter'
      }, {
        value: 3,
        text: 'Legal'
      }, {
        value: 4,
        text: 'Folio'
      }],
      vModel: {},
      vModelShowFooter: false,
      vModelHorizontalBorder: false,
      vModelVerticalBorder: false,
      disabledPaperHeightWidth: false,
      disabledButtonSave: false,
      //Validators
      regex: "",
      //Ag-Grid
      defColDef: null,
      //Ag-Grid 1
      columnDefs: null,
      rowData: null,
      gridOptions: null,
      gridApi: null,
      columnApi: null,
      rowSelection: null,
      //Ag-Grid 2
      columnDefs2: null,
      rowData2: null,
      gridOptions2: null,
      gridApi2: null,
      columnApi2: null,
      rowSelection2: null,
      //Ag-Grid 3
      columnDefs3: null,
      rowData3: null,
      gridOptions3: null,
      gridApi3: null,
      columnApi3: null,
      rowSelection3: null,
      //Ag-Grid 4
      columnDefs4: null,
      rowData4: null,
      gridOptions4: null,
      gridApi4: null,
      columnApi4: null,
      rowSelection4: null,
      //Ag-Grid 5
      columnDefs5: null,
      rowData5: null,
      gridOptions5: null,
      gridApi5: null,
      columnApi5: null,
      rowSelection5: null,
      //Footer Type Cell Lookup
      footerTypeCellLookUp: {
        0: '(None)',
        1: 'Text "Total"',
        2: 'SUM',
        3: 'COUNT',
        4: 'COUNT IF <> ""',
        5: 'COUNT IF <> 0'
      },
      //Const Format Cell Lookup
      constReportFormatCellLookup: {
        0: "(None)",
        1: "%2.0n",
        2: "%2.1n",
        3: "%2.2n",
        4: "%2.3n",
        5: "dd/MM/yyyy",
        6: "dd/MM/yy",
        7: "dd-MM-yyyy",
        8: "dd-MM-yy",
        9: "dd/MM/yyyy HH:mm:ss",
        10: "dd/MM/yy HH:mm:ss",
        11: "dd/MM/yyyy HH:mm",
        12: "dd/MM/yy HH:mm",
        13: "HH:mm:ss",
        14: "HH:mm"
      },
      //const Format Font Cell Lookup
      constReportFormatFontCellLookup: {
        0: 'Arial',
        1: 'Tahoma',
        2: 'Verdana',
        3: 'Microsoft Sans Serif',
        4: 'Times New Roman',
        5: 'Comic Sans MS',
        6: 'Lucida Console'
      },
      //const Aligment Cell LookUp
      constAligmentCellLookUp: {
        0: 'Left',
        1: 'Right',
        2: 'Center'
      },
      //Const Is Ascending Lookup
      constIsAscendingCellLookUp: {
        '-1': 'ASC',
        '0': 'DESC'
      }
    };
  },
  beforeMount: function beforeMount() {
    this.gridOptions = {
      rowHeight: this.rowHeightDefault
    };
    this.gridOptions2 = {
      rowHeight: this.rowHeightDefault
    };
    this.gridOptions3 = {
      rowHeight: this.rowHeightDefault
    };
    this.gridOptions4 = {
      rowHeight: this.rowHeightDefault
    };
    this.gridOptions5 = {
      rowHeight: this.rowHeightDefault
    }; //Ag grid

    this.defaultColDef = {
      // sortable: true,
      // filter: true,
      resizable: true
    }; //Ag grid 1

    this.columnDefs = [{
      headerName: '',
      valueGetter: "'Drag'",
      dndSource: true,
      width: 40
    }, {
      headerName: 'Available Field List',
      field: 'field_name',
      width: 170
    }]; //Ag grid 2

    this.columnDefs2 = [{
      headerName: 'Group Field Name',
      field: 'field_name',
      width: 180,
      rowDrag: true
    }]; //Ag grid 3

    this.columnDefs3 = [{
      headerName: 'Order Field Name',
      field: 'field_name',
      width: 120,
      rowDrag: true
    }, {
      headerName: '',
      field: 'is_ascending',
      width: 60,
      editable: true,
      cellEditor: 'agRichSelectCellEditor',
      cellEditorParams: {
        values: this.extractValues(this.constIsAscendingCellLookUp)
      },
      refData: this.constIsAscendingCellLookUp
    }]; //Ag grid 4

    this.columnDefs4 = [{
      headerName: 'Report Grouping',
      field: 'field_name',
      width: 180,
      rowDrag: true
    }]; //Ag grid 5

    this.columnDefs5 = [{
      headerName: 'Field Name',
      field: 'field_name',
      width: 120,
      rowDrag: true
    }, {
      headerName: 'Header Name',
      field: 'header_name',
      width: 120,
      editable: true
    }, {
      headerName: 'Footer Type',
      field: 'footer_type',
      width: 120,
      editable: true,
      cellEditor: 'agRichSelectCellEditor',
      cellEditorParams: {
        values: this.extractValues(this.footerTypeCellLookUp)
      },
      refData: this.footerTypeCellLookUp
    }, {
      headerName: 'Format',
      field: 'format_code',
      width: 120,
      editable: true,
      cellEditor: 'agRichSelectCellEditor',
      cellEditorParams: {
        values: this.extractValues(this.constReportFormatCellLookup)
      },
      refData: this.constReportFormatCellLookup
    }, {
      headerName: 'Width',
      field: 'width',
      width: 120,
      editable: true
    }, {
      headerName: 'Font',
      field: 'font',
      width: 120,
      editable: true,
      cellEditor: 'agRichSelectCellEditor',
      cellEditorParams: {
        values: this.extractValues(this.constReportFormatFontCellLookup)
      },
      refData: this.constReportFormatFontCellLookup
    }, {
      headerName: 'Font Size',
      field: 'font_size',
      width: 120,
      editable: true
    }, {
      headerName: 'Font Color',
      field: 'font_color',
      width: 120
    }, {
      headerName: 'Aligment',
      field: 'alignment',
      width: 120,
      editable: true,
      cellEditor: 'agRichSelectCellEditor',
      cellEditorParams: {
        values: this.extractValues(this.constAligmentCellLookUp)
      },
      refData: this.constAligmentCellLookUp
    }, {
      headerName: 'Header Font Size',
      field: 'header_font_size',
      width: 150,
      editable: true
    }, {
      headerName: 'Header Font Color',
      field: 'header_font_color',
      width: 150
    }, {
      headerName: 'Header Aligment',
      field: 'header_alignment',
      width: 150,
      editable: true,
      cellEditor: 'agRichSelectCellEditor',
      cellEditorParams: {
        values: this.extractValues(this.constAligmentCellLookUp)
      },
      refData: this.constAligmentCellLookUp
    }];
  },
  methods: {
    onDragOver: function onDragOver(event) {
      var dragSupported = event.dataTransfer.length;

      if (dragSupported) {
        event.dataTransfer.dropEffect = 'move';
      }

      event.preventDefault();
    },
    onDropReportGroup: function onDropReportGroup(event) {
      var userAgent = window.navigator.userAgent;
      var isIE = userAgent.indexOf('Trident/') >= 0;
      var jsonData = event.dataTransfer.getData(isIE ? 'text' : 'application/json');
      var data = JSON.parse(jsonData);
      var newData = {
        field_name: data.field_name
      };
      var transaction = {
        add: [newData]
      };
      this.gridApi2.applyTransaction(transaction);
      event.preventDefault();
    },
    onDropReportOrder: function onDropReportOrder(event) {
      var userAgent = window.navigator.userAgent;
      var isIE = userAgent.indexOf('Trident/') >= 0;
      var jsonData = event.dataTransfer.getData(isIE ? 'text' : 'application/json');
      var data = JSON.parse(jsonData);
      var newData = {
        field_name: data.field_name,
        is_ascending: '-1'
      };
      var transaction = {
        add: [newData]
      };
      this.gridApi3.applyTransaction(transaction);
      event.preventDefault();
    },
    onDropReportGrouping: function onDropReportGrouping(event) {
      var userAgent = window.navigator.userAgent;
      var isIE = userAgent.indexOf('Trident/') >= 0;
      var jsonData = event.dataTransfer.getData(isIE ? 'text' : 'application/json');
      var data = JSON.parse(jsonData);
      var newData = {
        field_name: data.field_name
      };
      var transaction = {
        add: [newData]
      };
      this.gridApi4.applyTransaction(transaction);
      event.preventDefault();
    },
    onDropReportField: function onDropReportField(event) {
      var userAgent = window.navigator.userAgent;
      var isIE = userAgent.indexOf('Trident/') >= 0;
      var jsonData = event.dataTransfer.getData(isIE ? 'text' : 'application/json');
      var data = JSON.parse(jsonData);
      var newData = {
        field_name: data.field_name,
        header_name: data.field_name,
        footer_type: 0,
        format_code: 0,
        width: 100,
        font: 0,
        font_size: 9,
        font_color: 0,
        alignment: 0,
        header_font_size: 9,
        header_font_color: 0,
        header_alignment: 0
      };
      var transaction = {
        add: [newData]
      };
      this.gridApi5.applyTransaction(transaction);
      event.preventDefault();
    },
    onGridReady: function onGridReady(params) {},
    editReportEditor: function () {
      var _editReportEditor = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var _ref, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return reportResource.editReportEditor({
                  id_log: this.idLogTemplate
                });

              case 3:
                _ref = _context.sent;
                data = _ref.data;
                this.vModel = data.reportTemplate;
                this.vModelShowFooter = this.vModel.show_footer == '-1' ? true : false;
                this.vModelHorizontalBorder = this.vModel.horizontal_border == '-1' ? true : false;
                this.vModelVerticalBorder = this.vModel.vertical_border == '-1' ? true : false;
                this.disabledPaperHeightWidth = this.vModel.paper_size !== 0; //Set data Ag Grid

                this.rowData = data.reportDefaultField;

                if (this.modeDataEditor == this.modeData.edit || this.modeDataEditor == this.modeData.duplicate) {
                  this.rowData2 = data.reportGroupField;
                  this.rowData3 = data.reportOrderField;
                  this.rowData4 = data.reportGroupingField;
                  this.rowData5 = data.reportTemplateField;
                }

                if (this.modeDataEditor == this.modeData.insert) {
                  this.rowData2 = [];
                  this.rowData3 = [];
                  this.rowData4 = [];
                  this.rowData5 = [];
                  this.vModel.group_level = 0;
                  this.vModelShowFooter = true;
                  this.vModelHorizontalBorder = false;
                  this.vModelVerticalBorder = false;
                  this.vModel.paper_size = 1;
                  this.vModel.is_portrait = '-1';
                }

                _context.next = 18;
                break;

              case 15:
                _context.prev = 15;
                _context.t0 = _context["catch"](0);
                this.$refs.dialogthree.showDialogWarning(this.$t('message.informationTitle'), this.$t('message.errorFetchData'), 'dialog-three');

              case 18:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 15]]);
      }));

      function editReportEditor() {
        return _editReportEditor.apply(this, arguments);
      }

      return editReportEditor;
    }(),
    handleInputPaperSize: function handleInputPaperSize() {
      this.disabledPaperHeightWidth = this.vModel.paper_size !== 0;
    },
    setAsDefaultTemplate: function () {
      var _setAsDefaultTemplate = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                this.$vs.loading({
                  container: '#button-default-template',
                  scale: this.scaleLoadingButton
                });
                _context2.prev = 1;
                _context2.next = 4;
                return reportResource.setAsDefaultTemplate({
                  report_code: this.reportCodeInt,
                  id_log: this.idLogTemplate,
                  user_id: this.userInfo.code
                });

              case 4:
                this.$vs.loading.close('#button-default-template>.con-vs-loading');
                _utils_alert_js__WEBPACK_IMPORTED_MODULE_4__["default"].acceptAlertSucces();
                _context2.next = 11;
                break;

              case 8:
                _context2.prev = 8;
                _context2.t0 = _context2["catch"](1);
                this.$vs.loading.close('#button-default-template>.con-vs-loading');

              case 11:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[1, 8]]);
      }));

      function setAsDefaultTemplate() {
        return _setAsDefaultTemplate.apply(this, arguments);
      }

      return setAsDefaultTemplate;
    }(),
    setAsSystemDefaultTemplate: function () {
      var _setAsSystemDefaultTemplate = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(isSystem) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                if (isSystem == '-1') {
                  this.$vs.loading({
                    container: '#button-default-system',
                    scale: this.scaleLoadingButton
                  });
                } else {
                  this.$vs.loading({
                    container: '#button-default-system-clear',
                    scale: this.scaleLoadingButton
                  });
                }

                _context3.prev = 1;
                _context3.next = 4;
                return reportResource.setAsSystemDefaultTemplate({
                  report_code: this.reportCodeInt,
                  is_system: isSystem,
                  id_log: this.idLogTemplate,
                  user_id: this.userInfo.code
                });

              case 4:
                _utils_alert_js__WEBPACK_IMPORTED_MODULE_4__["default"].acceptAlertSucces();
                this.$vs.loading.close('#button-default-system>.con-vs-loading');
                this.$vs.loading.close('#button-default-system-clear>.con-vs-loading');
                _context3.next = 13;
                break;

              case 9:
                _context3.prev = 9;
                _context3.t0 = _context3["catch"](1);
                this.$vs.loading.close('#button-default-system>.con-vs-loading');
                this.$vs.loading.close('#button-default-system-clear>.con-vs-loading');

              case 13:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[1, 9]]);
      }));

      function setAsSystemDefaultTemplate(_x) {
        return _setAsSystemDefaultTemplate.apply(this, arguments);
      }

      return setAsSystemDefaultTemplate;
    }(),
    saveAtributReportTemplate: function () {
      var _saveAtributReportTemplate = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4(templateId) {
        var reportGroup, reportOrder, reportGrouping, reportField;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                //Report Group
                reportGroup = [];
                this.gridApi2.forEachNode(function (node, index) {
                  node.data.template_id = templateId;
                  node.data.id_sort = index + 1;
                  reportGroup.push(node.data);
                }); //Report Order

                reportOrder = [];
                this.gridApi3.forEachNode(function (node, index) {
                  node.data.template_id = templateId;
                  node.data.id_sort = index + 1;
                  reportOrder.push(node.data);
                }); //Report Grouping

                reportGrouping = [];
                this.gridApi4.forEachNode(function (node, index) {
                  node.data.template_id = templateId;
                  node.data.id_sort = index + 1;
                  reportGrouping.push(node.data);
                }); //Report Default Field

                reportField = [];
                this.gridApi5.forEachNode(function (node, index) {
                  node.data.template_id = templateId;
                  node.data.id_sort = index + 1;
                  node.data.alignment = node.data.alignment.toString();
                  node.data.header_alignment = node.data.header_alignment.toString();
                  reportField.push(node.data);
                });
                _context4.prev = 8;
                _context4.next = 11;
                return reportResource.updateTemplateDefaultReport({
                  templateId: templateId,
                  reportGroup: reportGroup,
                  reportOrder: reportOrder,
                  reportGrouping: reportGrouping,
                  reportField: reportField
                });

              case 11:
                this.$vs.loading.close('#button-save-main>.con-vs-loading');
                _utils_alert_js__WEBPACK_IMPORTED_MODULE_4__["default"].acceptAlertSucces();
                this.closeReportTemplateEditor();
                this.closeModalReportParent();
                this.disabledButtonSave = false;
                _context4.next = 22;
                break;

              case 18:
                _context4.prev = 18;
                _context4.t0 = _context4["catch"](8);
                this.$vs.loading.close('#button-save-main>.con-vs-loading');
                this.disabledButtonSave = false;

              case 22:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this, [[8, 18]]);
      }));

      function saveAtributReportTemplate(_x2) {
        return _saveAtributReportTemplate.apply(this, arguments);
      }

      return saveAtributReportTemplate;
    }(),
    saveReportTemplate: function () {
      var _saveReportTemplate = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee6() {
        var _this = this;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                if (this.gridApi4.getDisplayedRowCount() != this.vModel.group_level) {
                  this.$refs.dialogthree.showDialogWarning(this.$t('message.informationTitle'), this.$t('message.reportGroupLevel'), 'dialog-three');
                } else {
                  this.$validator.validateAll().then(
                  /*#__PURE__*/
                  function () {
                    var _ref2 = _asyncToGenerator(
                    /*#__PURE__*/
                    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5(result) {
                      var _ref3, data, _ref4, _data;

                      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
                        while (1) {
                          switch (_context5.prev = _context5.next) {
                            case 0:
                              if (!result) {
                                _context5.next = 25;
                                break;
                              }

                              _this.disabledButtonSave = true; //Change Variable Report Template

                              _this.$vs.loading({
                                container: '#button-save-main',
                                scale: _this.scaleLoadingButton
                              });

                              _this.vModel.show_footer = _this.vModelShowFooter ? '-1' : '0';
                              _this.vModel.horizontal_border = _this.vModelHorizontalBorder ? '-1' : '0';
                              _this.vModel.vertical_border = _this.vModelVerticalBorder ? '-1' : '0';
                              _this.vModel.user_id = _this.userInfo.code;

                              if (!(_this.modeDataEditor == _this.modeData.edit)) {
                                _context5.next = 15;
                                break;
                              }

                              _context5.next = 10;
                              return reportResource.updateTemplateReport(_this.vModel);

                            case 10:
                              _ref3 = _context5.sent;
                              data = _ref3.data;

                              if (data.status == 0) {
                                _this.saveAtributReportTemplate(_this.idLogTemplate);
                              }

                              _context5.next = 23;
                              break;

                            case 15:
                              if (!(_this.modeDataEditor == _this.modeData.insert || _this.modeDataEditor == _this.modeData.duplicate)) {
                                _context5.next = 23;
                                break;
                              }

                              _context5.next = 18;
                              return reportResource.insertTemplateReport(_this.vModel);

                            case 18:
                              _ref4 = _context5.sent;
                              _data = _ref4.data;

                              if (!(_data.status == 0)) {
                                _context5.next = 23;
                                break;
                              }

                              _context5.next = 23;
                              return _this.saveAtributReportTemplate(_data.templateId);

                            case 23:
                              _context5.next = 26;
                              break;

                            case 25:
                              _this.$refs.dialogthree.showDialogWarning(_this.$t('message.informationTitle'), _this.$t('message.required'), 'dialog-three');

                            case 26:
                            case "end":
                              return _context5.stop();
                          }
                        }
                      }, _callee5);
                    }));

                    return function (_x3) {
                      return _ref2.apply(this, arguments);
                    };
                  }());
                }

              case 1:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function saveReportTemplate() {
        return _saveReportTemplate.apply(this, arguments);
      }

      return saveReportTemplate;
    }(),
    closeReportTemplateEditor: function closeReportTemplateEditor() {
      this.$emit('showReportEditor');
    },
    closeModalReportParent: function closeModalReportParent() {
      this.$emit('closeModalReport');
    },
    getContextMenuItems2: function getContextMenuItems2(params) {
      var vm = this;
      var result = [{
        name: 'Delete Field',
        action: function action() {
          var dataSelected = [];
          dataSelected.push(params.node.data);
          vm.gridApi2.applyTransaction({
            remove: dataSelected
          });
        }
      }];
      return result;
    },
    getContextMenuItems3: function getContextMenuItems3(params) {
      var vm = this;
      var result = [{
        name: 'Delete Field',
        action: function action() {
          var dataSelected = [];
          dataSelected.push(params.node.data);
          vm.gridApi3.applyTransaction({
            remove: dataSelected
          });
        }
      }];
      return result;
    },
    getContextMenuItems4: function getContextMenuItems4(params) {
      var vm = this;
      var result = [{
        name: 'Delete Field',
        action: function action() {
          var dataSelected = [];
          dataSelected.push(params.node.data);
          vm.gridApi4.applyTransaction({
            remove: dataSelected
          });
        }
      }];
      return result;
    },
    getContextMenuItems5: function getContextMenuItems5(params) {
      var vm = this;
      var result = [{
        name: 'Delete Field',
        action: function action() {
          var dataSelected = [];
          dataSelected.push(params.node.data);
          vm.gridApi5.applyTransaction({
            remove: dataSelected
          });
        }
      }];
      return result;
    },
    extractValues: function extractValues(mappings) {
      return Object.keys(mappings);
    }
  },
  created: function () {
    var _created = _asyncToGenerator(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee7() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              _context7.next = 2;
              return this.editReportEditor();

            case 2:
            case "end":
              return _context7.stop();
          }
        }
      }, _callee7, this);
    }));

    function created() {
      return _created.apply(this, arguments);
    }

    return created;
  }(),
  mounted: function mounted() {
    this.gridApi = this.gridOptions.api;
    this.ColumnApi = this.gridOptions.columnApi;
    this.gridApi2 = this.gridOptions2.api;
    this.ColumnApi2 = this.gridOptions2.columnApi;
    this.gridApi3 = this.gridOptions3.api;
    this.ColumnApi3 = this.gridOptions3.columnApi;
    this.gridApi4 = this.gridOptions4.api;
    this.ColumnApi4 = this.gridOptions4.columnApi;
    this.gridApi5 = this.gridOptions5.api;
    this.ColumnApi5 = this.gridOptions5.columnApi;
  }
});

window.extractValues = function extractValues(mappings) {
  return Object.keys(mappings);
};

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/report/components/report-filter1.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/report/components/report-filter1.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _api_report_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/api/report.js */ "./resources/js/src/api/report.js");


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

var reportResource = new _api_report_js__WEBPACK_IMPORTED_MODULE_1__["default"]();
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['reportCodeInt'],
  data: function data() {
    return {
      vModelGuestType: 1,
      vModelOptionArrivalList: 1,
      dataLookGuestGroup: [],
      dataLookConstGuestStatus: [],
      dataLookCompany: [],
      dataLookCompanyType: [],
      dataLookUser: [],
      dataLookSubDepartment: [],
      dataLookBusinessSource: [],
      dataLookShift: [],
      dataLookAccount: [],
      dataLookMarket: [],
      dataLookSubAccount: [],
      dataLookNationality: [],
      dataLookBookingSource: [],
      dataLookBuilding: [],
      dataLookFloor: [],
      dataLookRoomStatus: [],
      dataLookPhoneBookType: [],
      dataLookLogUserAction: [],
      vModelLookUp: {},
      radios: {
        status: 1
      },
      checkBox: {
        folioStatusOpen: true,
        folioStatusClosed: true,
        guestFolio: true,
        deskFolio: true,
        masterFolio: true
      }
    };
  },
  methods: {
    getDataLookUpReportFilter1: function () {
      var _getDataLookUpReportFilter = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var _ref, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return reportResource.ReportDataLookUpFilter1();

              case 2:
                _ref = _context.sent;
                data = _ref.data;
                this.dataLookGuestGroup = data.guestGroup;
                this.dataLookConstGuestStatus = data.constGuestStatus;
                this.dataLookCompany = data.company;
                this.dataLookCompanyType = data.companyType;
                this.dataLookBookingSource = data.bookingSource;
                this.dataLookBusinessSource = data.businessSource;
                this.dataLookAccount = data.account;
                this.dataLookSubAccount = data.subAccount;
                this.dataLookNationality = data.nationality;
                this.dataLookSubDepartment = data.subDepartment;
                this.dataLookMarket = data.market;
                this.dataLookUser = data.user;
                this.dataLookShift = data.shift;
                this.dataLookBuilding = data.building;
                this.dataLookFloor = data.floor;
                this.dataLookRoomStatus = data.roomStatus;
                this.dataLookPhoneBookType = data.phoneBookType;
                this.dataLookLogUserAction = data.logUserAction;

              case 22:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getDataLookUpReportFilter1() {
        return _getDataLookUpReportFilter.apply(this, arguments);
      }

      return getDataLookUpReportFilter1;
    }(),
    onSelectGuestType: function onSelectGuestType(param) {
      this.vModelGuestType = param;
    }
  },
  created: function () {
    var _created = _asyncToGenerator(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              this.getDataLookUpReportFilter1();

            case 1:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, this);
    }));

    function created() {
      return _created.apply(this, arguments);
    }

    return created;
  }(),
  mounted: function mounted() {//
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/report/Report.vue?vue&type=style&index=0&id=87a41f2c&lang=scss&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/report/Report.vue?vue&type=style&index=0&id=87a41f2c&lang=scss&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".is_system[data-v-87a41f2c] {\n  color: rgba(var(--vs-danger));\n}\n#filter-string[data-v-87a41f2c] {\n  padding-bottom: 10px;\n}\n#filter-string div[data-v-87a41f2c] {\n  height: 100%;\n}\n#filter-string .vx-card[data-v-87a41f2c] {\n  height: 100%;\n}\n@media only screen and (min-width: 900px) {\n#filter-string[data-v-87a41f2c] {\n    padding-left: 10px;\n}\n.customize-dropdown[data-v-87a41f2c] {\n    cursor: pointer;\n    display: initial;\n}\n}\n@media only screen and (max-width: 899px) {\n.customize-dropdown[data-v-87a41f2c] {\n    display: none;\n}\n}\n#filter-date[data-v-87a41f2c] {\n  padding-bottom: 10px;\n}\n#filter-date div[data-v-87a41f2c] {\n  height: 100%;\n}\n#filter-date div .small-device[data-v-87a41f2c] {\n  height: 100%;\n}\n#filter-date .large-device div[data-v-87a41f2c] {\n  height: 100%;\n}\n#filter-date .large-device div .vx-card[data-v-87a41f2c] {\n  height: 100%;\n}\n.customize-dropdown[data-v-87a41f2c] {\n  cursor: pointer;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/report/components/ReportEditor.vue?vue&type=style&index=0&id=1e992d14&scoped=true&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/report/components/ReportEditor.vue?vue&type=style&index=0&id=1e992d14&scoped=true&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".drop-col[data-v-1e992d14] {\n  padding-left: 10px;\n  box-sizing: border-box;\n  flex: 1 1 0px;\n  display: flex;\n  flex-direction: column;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/report/Report.vue?vue&type=style&index=0&id=87a41f2c&lang=scss&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/report/Report.vue?vue&type=style&index=0&id=87a41f2c&lang=scss&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Report.vue?vue&type=style&index=0&id=87a41f2c&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/report/Report.vue?vue&type=style&index=0&id=87a41f2c&lang=scss&scoped=true&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/report/components/ReportEditor.vue?vue&type=style&index=0&id=1e992d14&scoped=true&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/report/components/ReportEditor.vue?vue&type=style&index=0&id=1e992d14&scoped=true&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../node_modules/css-loader??ref--7-1!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ReportEditor.vue?vue&type=style&index=0&id=1e992d14&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/report/components/ReportEditor.vue?vue&type=style&index=0&id=1e992d14&scoped=true&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/components/DialogSecond.vue?vue&type=template&id=59ed4970&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/components/DialogSecond.vue?vue&type=template&id=59ed4970& ***!
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
  return _c(
    "vs-prompt",
    {
      class: _vm.classDialog,
      attrs: {
        type: "confirm",
        active: _vm.showDialog,
        color: "warning",
        title: _vm.title,
        "buttons-hidden": true
      },
      on: {
        "update:active": function($event) {
          _vm.showDialog = $event
        }
      }
    },
    [
      _c(
        "vs-row",
        {
          attrs: {
            "vs-align": "center",
            "vs-type": "flex",
            "vs-justify": "center",
            "vs-w": "w-full"
          }
        },
        [
          _c("vs-icon", {
            attrs: { icon: "warning", size: "large", color: "warning" }
          })
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
            "vs-justify": "center",
            "vs-w": "w-full"
          }
        },
        [
          _c("p", { staticStyle: { "text-align": "center" } }, [
            _vm._v(_vm._s(_vm.text))
          ])
        ]
      ),
      _vm._v(" "),
      _c(
        "vs-row",
        {
          staticClass: "mt-4",
          attrs: {
            "vs-align": "center",
            "vs-type": "flex",
            "vs-justify": "center",
            "vs-w": "w-full"
          }
        },
        [_c("vs-divider", { attrs: { color: "warning" } })],
        1
      ),
      _vm._v(" "),
      _c(
        "vs-row",
        {
          staticClass: "w-full",
          attrs: {
            "vs-align": "center",
            "vs-type": "flex",
            "vs-justify": "center"
          }
        },
        [
          _c(
            "vs-button",
            {
              staticClass: "w-full md:w-1/3 ml-1 mr-1 mt-1",
              attrs: {
                disabled: _vm.btnDisabled,
                "vs-type": "flex",
                color: "warning"
              },
              on: {
                click: [
                  function($event) {
                    return _vm.$emit("event")
                  },
                  function($event) {
                    _vm.showDialog = false
                  }
                ]
              }
            },
            [_vm._v(_vm._s(_vm.acceptText))]
          ),
          _vm._v(" "),
          _c(
            "vs-button",
            {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: _vm.showCancelButton,
                  expression: "showCancelButton"
                }
              ],
              staticClass: "w-full md:w-1/3 ml-1 mr-1 mt-1",
              attrs: { "vs-type": "flex", color: "grey" },
              on: {
                click: function($event) {
                  _vm.showDialog = false
                }
              }
            },
            [_vm._v(_vm._s(_vm.cancelText))]
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/report/Report.vue?vue&type=template&id=87a41f2c&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/report/Report.vue?vue&type=template&id=87a41f2c&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************/
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
    {
      staticClass: "vs-con-loading__container",
      attrs: { id: "main-container" }
    },
    [
      _c(
        "vx-card",
        { staticClass: "box mb-2" },
        [
          _c(
            "vs-row",
            {
              staticClass: "mb-2",
              attrs: {
                "vs-align": "flext-start",
                "vs-type": "flex",
                "vs-justify": "flext-start",
                "vs-w": "12"
              }
            },
            [
              _c(
                "vs-col",
                { attrs: { "vs-type": "flex", "vs-align": "center" } },
                [
                  _c("vs-input", {
                    attrs: { placeholder: "Search..." },
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
                        return _vm.search($event)
                      }
                    },
                    model: {
                      value: _vm.searchword,
                      callback: function($$v) {
                        _vm.searchword = $$v
                      },
                      expression: "searchword"
                    }
                  }),
                  _vm._v(" "),
                  _c(
                    "vs-button",
                    {
                      staticClass: "ml-2",
                      attrs: { color: "primary", type: "filled" },
                      on: { click: _vm.search }
                    },
                    [_vm._v("Search")]
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
              staticClass: "mb-2",
              attrs: {
                "vs-align": "flext-start",
                "vs-type": "flex",
                "vs-justify": "flext-start",
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
                    { attrs: { "vs-lg": "12", "vs-sm": "12", "vs-xs": "12" } },
                    [
                      _c("v-tree", {
                        ref: "tree",
                        attrs: {
                          data: _vm.treeData,
                          multiple: false,
                          radio: true
                        },
                        on: {
                          "node-click": function($event) {
                            return _vm.nodeclick()
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
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "vs-prompt",
        {
          class:
            _vm.element > 0 || _vm.resolutionWidth < 900
              ? "options-report"
              : "",
          attrs: {
            id: _vm.firstDialog,
            type: _vm.dialog.typeDialog,
            "buttons-hidden": true,
            active: _vm.showModal,
            title: _vm.modalTitle
          },
          on: {
            "update:active": function($event) {
              _vm.showModal = $event
            }
          }
        },
        [
          _c(
            _vm.scrollbarTag,
            {
              tag: "component",
              staticClass: "scroll-area p-4",
              attrs: { settings: _vm.perfectScrollbarSettings }
            },
            [
              _c(
                "vs-row",
                { attrs: { "vs-type": "flex" } },
                [
                  _c(
                    "vs-col",
                    {
                      class: { "vs-lg-6": _vm.element > 0 },
                      attrs: { id: "filter-date", "vs-sm": "12" }
                    },
                    [
                      _c(
                        "vx-card",
                        { staticClass: "box", attrs: { height: "300" } },
                        [
                          _vm.resolutionWidth < 900
                            ? _c(
                                "div",
                                { staticClass: "small-device" },
                                [
                                  _c(
                                    "vs-row",
                                    { staticClass: "box-body mb-2" },
                                    [
                                      _c(
                                        "vs-col",
                                        {
                                          attrs: {
                                            "vs-order": "1",
                                            "vs-type": "flex",
                                            "vs-justify": "flex-start",
                                            "vs-align": "center",
                                            "vs-lg": "2",
                                            "vs-sm": "3",
                                            "vs-xs": "3"
                                          }
                                        },
                                        [
                                          _c("span", [
                                            _c("b", [_vm._v("Template")])
                                          ])
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "vs-col",
                                        {
                                          attrs: {
                                            "vs-order": "2",
                                            "vs-type": "flex",
                                            "vs-justify": "flex-start",
                                            "vs-align": "center",
                                            "vs-lg": "10",
                                            "vs-sm": "10",
                                            "vs-xs": "9"
                                          }
                                        },
                                        [
                                          _c("v-select", {
                                            attrs: {
                                              disabled:
                                                _vm.optionDisableTemplate,
                                              clearable: false,
                                              reduce: function(
                                                dataLookUpTemplate
                                              ) {
                                                return dataLookUpTemplate.id_log
                                              },
                                              label: "name",
                                              options: _vm.dataLookUpTemplate
                                            },
                                            scopedSlots: _vm._u(
                                              [
                                                {
                                                  key: "option",
                                                  fn: function(
                                                    dataLookUpTemplate
                                                  ) {
                                                    return [
                                                      dataLookUpTemplate.is_default ===
                                                        "-1" &&
                                                      dataLookUpTemplate.is_system ===
                                                        "-1"
                                                        ? _c(
                                                            "vs-row",
                                                            {
                                                              attrs: {
                                                                "vs-align":
                                                                  "center",
                                                                "vs-justify":
                                                                  "flex-start",
                                                                "vs-w": "w-full"
                                                              }
                                                            },
                                                            [
                                                              _c(
                                                                "feather-icon",
                                                                {
                                                                  attrs: {
                                                                    icon:
                                                                      "FileTextIcon",
                                                                    svgClasses:
                                                                      "stroke-current text-warning"
                                                                  }
                                                                }
                                                              ),
                                                              _vm._v(" "),
                                                              _c("span", [
                                                                _c("b", [
                                                                  _vm._v(
                                                                    " " +
                                                                      _vm._s(
                                                                        dataLookUpTemplate.name
                                                                      )
                                                                  )
                                                                ])
                                                              ])
                                                            ],
                                                            1
                                                          )
                                                        : dataLookUpTemplate.is_default ===
                                                            "-1" &&
                                                          dataLookUpTemplate.is_system ===
                                                            "0"
                                                        ? _c(
                                                            "vs-row",
                                                            {
                                                              attrs: {
                                                                "vs-align":
                                                                  "center",
                                                                "vs-justify":
                                                                  "flex-start",
                                                                "vs-w": "w-full"
                                                              }
                                                            },
                                                            [
                                                              _c(
                                                                "feather-icon",
                                                                {
                                                                  attrs: {
                                                                    icon:
                                                                      "FileTextIcon"
                                                                  }
                                                                }
                                                              ),
                                                              _vm._v(" "),
                                                              _c("span", [
                                                                _c("b", [
                                                                  _vm._v(
                                                                    " " +
                                                                      _vm._s(
                                                                        dataLookUpTemplate.name
                                                                      )
                                                                  )
                                                                ])
                                                              ])
                                                            ],
                                                            1
                                                          )
                                                        : dataLookUpTemplate.is_default ===
                                                            "0" &&
                                                          dataLookUpTemplate.is_system ===
                                                            "-1"
                                                        ? _c(
                                                            "vs-row",
                                                            {
                                                              attrs: {
                                                                "vs-align":
                                                                  "center",
                                                                "vs-justify":
                                                                  "flex-start",
                                                                "vs-w": "w-full"
                                                              }
                                                            },
                                                            [
                                                              _c(
                                                                "feather-icon",
                                                                {
                                                                  attrs: {
                                                                    icon:
                                                                      "FileTextIcon",
                                                                    svgClasses:
                                                                      "stroke-current text-warning"
                                                                  }
                                                                }
                                                              ),
                                                              _vm._v(" "),
                                                              _c("span", [
                                                                _vm._v(
                                                                  " " +
                                                                    _vm._s(
                                                                      dataLookUpTemplate.name
                                                                    )
                                                                )
                                                              ])
                                                            ],
                                                            1
                                                          )
                                                        : dataLookUpTemplate.is_default ===
                                                            "0" &&
                                                          dataLookUpTemplate.is_system ===
                                                            "0"
                                                        ? _c(
                                                            "vs-row",
                                                            {
                                                              attrs: {
                                                                "vs-align":
                                                                  "center",
                                                                "vs-justify":
                                                                  "flex-start",
                                                                "vs-w": "w-full"
                                                              }
                                                            },
                                                            [
                                                              _c(
                                                                "feather-icon",
                                                                {
                                                                  attrs: {
                                                                    icon:
                                                                      "FileTextIcon"
                                                                  }
                                                                }
                                                              ),
                                                              _vm._v(" "),
                                                              _c("span", [
                                                                _vm._v(
                                                                  " " +
                                                                    _vm._s(
                                                                      dataLookUpTemplate.name
                                                                    )
                                                                )
                                                              ])
                                                            ],
                                                            1
                                                          )
                                                        : _vm._e()
                                                    ]
                                                  }
                                                }
                                              ],
                                              null,
                                              false,
                                              4162197443
                                            ),
                                            model: {
                                              value: _vm.vModelLookUpIdTemplate,
                                              callback: function($$v) {
                                                _vm.vModelLookUpIdTemplate = $$v
                                              },
                                              expression:
                                                "vModelLookUpIdTemplate"
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
                                    { staticClass: "box-body mb-2" },
                                    [
                                      _c(
                                        "vs-col",
                                        {
                                          attrs: {
                                            "vs-order": "2",
                                            "vs-type": "flex",
                                            "vs-justify": "flex-start",
                                            "vs-align": "center",
                                            "vs-lg": "2",
                                            "vs-sm": "3",
                                            "vs-xs": "3"
                                          }
                                        },
                                        [
                                          _c("span", [
                                            _c("b", [_vm._v("Option")])
                                          ])
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "vs-col",
                                        {
                                          attrs: {
                                            "vs-order": "3",
                                            "vs-type": "flex",
                                            "vs-justify": "flex-start",
                                            "vs-align": "center",
                                            "vs-lg": "10",
                                            "vs-sm": "10",
                                            "vs-xs": "9"
                                          }
                                        },
                                        [
                                          _c("v-select", {
                                            attrs: {
                                              clearable: false,
                                              reduce: function(
                                                dataLookUpOptionDate
                                              ) {
                                                return dataLookUpOptionDate.value
                                              },
                                              label: "text",
                                              options: _vm.dataLookUpOptionDate
                                            },
                                            model: {
                                              value: _vm.vModelOptions,
                                              callback: function($$v) {
                                                _vm.vModelOptions = $$v
                                              },
                                              expression: "vModelOptions"
                                            }
                                          })
                                        ],
                                        1
                                      )
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _vm.vModelOptions == 1
                                    ? _c(
                                        "div",
                                        [
                                          _c(
                                            "vs-row",
                                            { staticClass: "box-body mb-2" },
                                            [
                                              _c(
                                                "vs-col",
                                                {
                                                  attrs: {
                                                    "vs-order": "1",
                                                    "vs-type": "flex",
                                                    "vs-justify": "flex-start",
                                                    "vs-align": "center",
                                                    "vs-lg": "2",
                                                    "vs-sm": "3",
                                                    "vs-xs": "3"
                                                  }
                                                },
                                                [_c("span", [_vm._v("Date")])]
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "vs-col",
                                                {
                                                  attrs: {
                                                    "vs-order": "2",
                                                    "vs-type": "flex",
                                                    "vs-justify": "flex-start",
                                                    "vs-align": "center",
                                                    "vs-lg": "5",
                                                    "vs-sm": "5",
                                                    "vs-xs": "5"
                                                  }
                                                },
                                                [
                                                  _c("date-picker", {
                                                    attrs: {
                                                      disabled:
                                                        _vm.optionDisable.date,
                                                      clearable: false,
                                                      lang: _vm.$t("lang"),
                                                      "value-type":
                                                        "YYYY-MM-DD",
                                                      placeholder: "DD/MM/YYYY",
                                                      format: "DD/MM/YYYY",
                                                      label: "name"
                                                    },
                                                    model: {
                                                      value:
                                                        _vm.vModelDateSelected,
                                                      callback: function($$v) {
                                                        _vm.vModelDateSelected = $$v
                                                      },
                                                      expression:
                                                        "vModelDateSelected"
                                                    }
                                                  })
                                                ],
                                                1
                                              ),
                                              _vm._v(" "),
                                              _c("vs-col", {
                                                attrs: {
                                                  "vs-order": "3",
                                                  "vs-type": "flex",
                                                  "vs-justify": "flex-start",
                                                  "vs-align": "center",
                                                  "vs-lg": "5",
                                                  "vs-sm": "4",
                                                  "vs-xs": "4"
                                                }
                                              })
                                            ],
                                            1
                                          )
                                        ],
                                        1
                                      )
                                    : _vm._e(),
                                  _vm._v(" "),
                                  _vm.vModelOptions == 2
                                    ? _c(
                                        "div",
                                        [
                                          _c(
                                            "vs-row",
                                            { staticClass: "box-body mb-2" },
                                            [
                                              _c(
                                                "vs-col",
                                                {
                                                  attrs: {
                                                    "vs-order": "1",
                                                    "vs-type": "flex",
                                                    "vs-justify": "flex-start",
                                                    "vs-align": "center",
                                                    "vs-lg": "2",
                                                    "vs-sm": "3",
                                                    "vs-xs": "3"
                                                  }
                                                },
                                                [_c("span", [_vm._v("Range")])]
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "vs-col",
                                                {
                                                  attrs: {
                                                    "vs-order": "2",
                                                    "vs-type": "flex",
                                                    "vs-justify": "flex-start",
                                                    "vs-align": "center",
                                                    "vs-lg": "5",
                                                    "vs-sm": "5",
                                                    "vs-xs": "5"
                                                  }
                                                },
                                                [
                                                  _c("date-picker", {
                                                    attrs: {
                                                      clearable: false,
                                                      lang: _vm.$t("lang"),
                                                      "value-type":
                                                        "YYYY-MM-DD",
                                                      placeholder: "DD/MM/YYYY",
                                                      format: "DD/MM/YYYY",
                                                      label: "name"
                                                    },
                                                    on: {
                                                      input: function($event) {
                                                        return _vm.setRadioCheck(
                                                          undefined,
                                                          1
                                                        )
                                                      }
                                                    },
                                                    model: {
                                                      value:
                                                        _vm.vModelDateStart,
                                                      callback: function($$v) {
                                                        _vm.vModelDateStart = $$v
                                                      },
                                                      expression:
                                                        "vModelDateStart"
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
                                                    "vs-order": "3",
                                                    "vs-type": "flex",
                                                    "vs-justify": "flex-start",
                                                    "vs-align": "center",
                                                    "vs-lg": "5",
                                                    "vs-sm": "4",
                                                    "vs-xs": "4"
                                                  }
                                                },
                                                [
                                                  _c("date-picker", {
                                                    attrs: {
                                                      clearable: false,
                                                      lang: _vm.$t("lang"),
                                                      "value-type":
                                                        "YYYY-MM-DD",
                                                      placeholder: "DD/MM/YYYY",
                                                      format: "DD/MM/YYYY",
                                                      label: "name"
                                                    },
                                                    on: {
                                                      input: function($event) {
                                                        return _vm.setRadioCheck(
                                                          undefined,
                                                          2
                                                        )
                                                      }
                                                    },
                                                    model: {
                                                      value: _vm.vModelDateEnd,
                                                      callback: function($$v) {
                                                        _vm.vModelDateEnd = $$v
                                                      },
                                                      expression:
                                                        "vModelDateEnd"
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
                                    : _vm._e(),
                                  _vm._v(" "),
                                  _vm.vModelOptions == 3
                                    ? _c(
                                        "div",
                                        [
                                          _c(
                                            "vs-row",
                                            { staticClass: "box-body mb-2" },
                                            [
                                              _c(
                                                "vs-col",
                                                {
                                                  attrs: {
                                                    "vs-order": "1",
                                                    "vs-type": "flex",
                                                    "vs-justify": "flex-start",
                                                    "vs-align": "center",
                                                    "vs-lg": "2",
                                                    "vs-sm": "3",
                                                    "vs-xs": "3"
                                                  }
                                                },
                                                [_c("span", [_vm._v("Week")])]
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "vs-col",
                                                {
                                                  attrs: {
                                                    "vs-order": "2",
                                                    "vs-type": "flex",
                                                    "vs-justify": "flex-start",
                                                    "vs-align": "center",
                                                    "vs-lg": "10",
                                                    "vs-sm": "10",
                                                    "vs-xs": "9"
                                                  }
                                                },
                                                [
                                                  _c("v-select", {
                                                    staticStyle: {
                                                      width: "90px",
                                                      "min-width": "80px",
                                                      "padding-right": "10px"
                                                    },
                                                    attrs: {
                                                      clearable: false,
                                                      reduce: function(
                                                        dataLookUpWeek
                                                      ) {
                                                        return dataLookUpWeek.value
                                                      },
                                                      label: "text",
                                                      options:
                                                        _vm.dataLookUpWeek
                                                    },
                                                    model: {
                                                      value:
                                                        _vm.vModelLookUp.week,
                                                      callback: function($$v) {
                                                        _vm.$set(
                                                          _vm.vModelLookUp,
                                                          "week",
                                                          $$v
                                                        )
                                                      },
                                                      expression:
                                                        "vModelLookUp.week"
                                                    }
                                                  }),
                                                  _vm._v(" "),
                                                  _c("v-select", {
                                                    staticStyle: {
                                                      width: "90px",
                                                      "min-width": "80px",
                                                      "padding-left": "10px"
                                                    },
                                                    attrs: {
                                                      clearable: false,
                                                      reduce: function(
                                                        dataLookUpYear
                                                      ) {
                                                        return dataLookUpYear.value
                                                      },
                                                      label: "text",
                                                      options:
                                                        _vm.dataLookUpYear
                                                    },
                                                    model: {
                                                      value:
                                                        _vm.vModelLookUp
                                                          .yearWeek,
                                                      callback: function($$v) {
                                                        _vm.$set(
                                                          _vm.vModelLookUp,
                                                          "yearWeek",
                                                          $$v
                                                        )
                                                      },
                                                      expression:
                                                        "vModelLookUp.yearWeek"
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
                                    : _vm._e(),
                                  _vm._v(" "),
                                  _vm.vModelOptions == 4
                                    ? _c(
                                        "div",
                                        [
                                          _c(
                                            "vs-row",
                                            { staticClass: "box-body mb-2" },
                                            [
                                              _c(
                                                "vs-col",
                                                {
                                                  attrs: {
                                                    "vs-order": "1",
                                                    "vs-type": "flex",
                                                    "vs-justify": "flex-start",
                                                    "vs-align": "center",
                                                    "vs-lg": "2",
                                                    "vs-sm": "3",
                                                    "vs-xs": "3"
                                                  }
                                                },
                                                [_c("span", [_vm._v("Month")])]
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "vs-col",
                                                {
                                                  attrs: {
                                                    "vs-order": "2",
                                                    "vs-type": "flex",
                                                    "vs-justify": "flex-start",
                                                    "vs-align": "flex-start",
                                                    "vs-lg": "10",
                                                    "vs-sm": "10",
                                                    "vs-xs": "9"
                                                  }
                                                },
                                                [
                                                  _c("v-select", {
                                                    staticStyle: {
                                                      width: "90px",
                                                      "min-width": "80px",
                                                      "padding-right": "10px"
                                                    },
                                                    attrs: {
                                                      clearable: false,
                                                      reduce: function(
                                                        dataLookUpMonth
                                                      ) {
                                                        return dataLookUpMonth.value
                                                      },
                                                      label: "text",
                                                      options:
                                                        _vm.dataLookUpMonth
                                                    },
                                                    model: {
                                                      value:
                                                        _vm.vModelLookUp.month,
                                                      callback: function($$v) {
                                                        _vm.$set(
                                                          _vm.vModelLookUp,
                                                          "month",
                                                          $$v
                                                        )
                                                      },
                                                      expression:
                                                        "vModelLookUp.month"
                                                    }
                                                  }),
                                                  _vm._v(" "),
                                                  _c("v-select", {
                                                    staticStyle: {
                                                      width: "90px",
                                                      "min-width": "80px",
                                                      "padding-left": "10px"
                                                    },
                                                    attrs: {
                                                      clearable: false,
                                                      reduce: function(
                                                        dataLookUpYear
                                                      ) {
                                                        return dataLookUpYear.value
                                                      },
                                                      label: "text",
                                                      options:
                                                        _vm.dataLookUpYear
                                                    },
                                                    model: {
                                                      value:
                                                        _vm.vModelLookUp
                                                          .yearMonth,
                                                      callback: function($$v) {
                                                        _vm.$set(
                                                          _vm.vModelLookUp,
                                                          "yearMonth",
                                                          $$v
                                                        )
                                                      },
                                                      expression:
                                                        "vModelLookUp.yearMonth"
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
                                    : _vm._e(),
                                  _vm._v(" "),
                                  _vm.vModelOptions == 5
                                    ? _c(
                                        "div",
                                        [
                                          _c(
                                            "vs-row",
                                            { staticClass: "box-body mb-2" },
                                            [
                                              _c(
                                                "vs-col",
                                                {
                                                  attrs: {
                                                    "vs-order": "1",
                                                    "vs-type": "flex",
                                                    "vs-justify": "flex-start",
                                                    "vs-align": "center",
                                                    "vs-lg": "2",
                                                    "vs-sm": "3",
                                                    "vs-xs": "3"
                                                  }
                                                },
                                                [
                                                  _c("span", [
                                                    _vm._v("Quarter")
                                                  ])
                                                ]
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "vs-col",
                                                {
                                                  attrs: {
                                                    "vs-order": "2",
                                                    "vs-type": "flex",
                                                    "vs-justify": "flex-start",
                                                    "vs-align": "flex-start",
                                                    "vs-lg": "10",
                                                    "vs-sm": "10",
                                                    "vs-xs": "9"
                                                  }
                                                },
                                                [
                                                  _c("v-select", {
                                                    staticStyle: {
                                                      width: "90px",
                                                      "min-width": "80px",
                                                      "padding-right": "10px"
                                                    },
                                                    attrs: {
                                                      clearable: false,
                                                      reduce: function(
                                                        dataLookUpQuarter
                                                      ) {
                                                        return dataLookUpQuarter.value
                                                      },
                                                      label: "text",
                                                      options:
                                                        _vm.dataLookUpQuarter
                                                    },
                                                    model: {
                                                      value:
                                                        _vm.vModelLookUp
                                                          .quarter,
                                                      callback: function($$v) {
                                                        _vm.$set(
                                                          _vm.vModelLookUp,
                                                          "quarter",
                                                          $$v
                                                        )
                                                      },
                                                      expression:
                                                        "vModelLookUp.quarter"
                                                    }
                                                  }),
                                                  _vm._v(" "),
                                                  _c("v-select", {
                                                    staticStyle: {
                                                      width: "90px",
                                                      "min-width": "80px",
                                                      "padding-left": "10px"
                                                    },
                                                    attrs: {
                                                      clearable: false,
                                                      reduce: function(
                                                        dataLookUpYear
                                                      ) {
                                                        return dataLookUpYear.value
                                                      },
                                                      label: "text",
                                                      options:
                                                        _vm.dataLookUpYear
                                                    },
                                                    model: {
                                                      value:
                                                        _vm.vModelLookUp
                                                          .yearQuarter,
                                                      callback: function($$v) {
                                                        _vm.$set(
                                                          _vm.vModelLookUp,
                                                          "yearQuarter",
                                                          $$v
                                                        )
                                                      },
                                                      expression:
                                                        "vModelLookUp.yearQuarter"
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
                                    : _vm._e(),
                                  _vm._v(" "),
                                  _vm.vModelOptions == 6
                                    ? _c(
                                        "div",
                                        [
                                          _c(
                                            "vs-row",
                                            { staticClass: "box-body mb-2" },
                                            [
                                              _c(
                                                "vs-col",
                                                {
                                                  attrs: {
                                                    "vs-order": "1",
                                                    "vs-type": "flex",
                                                    "vs-justify": "flex-start",
                                                    "vs-align": "center",
                                                    "vs-lg": "2",
                                                    "vs-sm": "3",
                                                    "vs-xs": "3"
                                                  }
                                                },
                                                [
                                                  _c("span", [
                                                    _vm._v("Semester")
                                                  ])
                                                ]
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "vs-col",
                                                {
                                                  attrs: {
                                                    "vs-order": "2",
                                                    "vs-type": "flex",
                                                    "vs-justify": "flex-start",
                                                    "vs-align": "flex-start",
                                                    "vs-lg": "10",
                                                    "vs-sm": "10",
                                                    "vs-xs": "9"
                                                  }
                                                },
                                                [
                                                  _c("v-select", {
                                                    staticStyle: {
                                                      width: "90px",
                                                      "min-width": "80px",
                                                      "padding-right": "10px"
                                                    },
                                                    attrs: {
                                                      clearable: false,
                                                      reduce: function(
                                                        dataLookUpSemester
                                                      ) {
                                                        return dataLookUpSemester.value
                                                      },
                                                      label: "text",
                                                      options:
                                                        _vm.dataLookUpSemester
                                                    },
                                                    model: {
                                                      value:
                                                        _vm.vModelLookUp
                                                          .semester,
                                                      callback: function($$v) {
                                                        _vm.$set(
                                                          _vm.vModelLookUp,
                                                          "semester",
                                                          $$v
                                                        )
                                                      },
                                                      expression:
                                                        "vModelLookUp.semester"
                                                    }
                                                  }),
                                                  _vm._v(" "),
                                                  _c("v-select", {
                                                    staticStyle: {
                                                      width: "90px",
                                                      "min-width": "80px",
                                                      "padding-left": "10px"
                                                    },
                                                    attrs: {
                                                      clearable: false,
                                                      reduce: function(
                                                        dataLookUpYear
                                                      ) {
                                                        return dataLookUpYear.value
                                                      },
                                                      label: "text",
                                                      options:
                                                        _vm.dataLookUpYear
                                                    },
                                                    model: {
                                                      value:
                                                        _vm.vModelLookUp
                                                          .yearSemester,
                                                      callback: function($$v) {
                                                        _vm.$set(
                                                          _vm.vModelLookUp,
                                                          "yearSemester",
                                                          $$v
                                                        )
                                                      },
                                                      expression:
                                                        "vModelLookUp.yearSemester"
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
                                    : _vm._e(),
                                  _vm._v(" "),
                                  _vm.vModelOptions == 7
                                    ? _c(
                                        "div",
                                        [
                                          _c(
                                            "vs-row",
                                            { staticClass: "box-body mb-2" },
                                            [
                                              _c(
                                                "vs-col",
                                                {
                                                  attrs: {
                                                    "vs-order": "1",
                                                    "vs-type": "flex",
                                                    "vs-justify": "flex-start",
                                                    "vs-align": "center",
                                                    "vs-lg": "2",
                                                    "vs-sm": "3",
                                                    "vs-xs": "3"
                                                  }
                                                },
                                                [_c("span", [_vm._v("Year")])]
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "vs-col",
                                                {
                                                  attrs: {
                                                    "vs-order": "2",
                                                    "vs-type": "flex",
                                                    "vs-justify": "flex-start",
                                                    "vs-align": "flex-start",
                                                    "vs-lg": "10",
                                                    "vs-sm": "10",
                                                    "vs-xs": "9"
                                                  }
                                                },
                                                [
                                                  _c("v-select", {
                                                    staticStyle: {
                                                      width: "115px",
                                                      "min-width": "120px"
                                                    },
                                                    attrs: {
                                                      clearable: false,
                                                      reduce: function(
                                                        dataLookUpYear
                                                      ) {
                                                        return dataLookUpYear.value
                                                      },
                                                      label: "text",
                                                      options:
                                                        _vm.dataLookUpYear
                                                    },
                                                    model: {
                                                      value:
                                                        _vm.vModelLookUp.year,
                                                      callback: function($$v) {
                                                        _vm.$set(
                                                          _vm.vModelLookUp,
                                                          "year",
                                                          $$v
                                                        )
                                                      },
                                                      expression:
                                                        "vModelLookUp.year"
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
                                    : _vm._e()
                                ],
                                1
                              )
                            : _c(
                                "div",
                                { staticClass: "large-device" },
                                [
                                  _c(
                                    "vs-row",
                                    { staticClass: "box-body mb-2" },
                                    [
                                      _c(
                                        "vs-col",
                                        {
                                          attrs: {
                                            "vs-order": "1",
                                            "vs-type": "flex",
                                            "vs-justify": "flex-start",
                                            "vs-align": "center",
                                            "vs-lg": "3",
                                            "vs-sm": "3",
                                            "vs-xs": "3"
                                          }
                                        },
                                        [_c("span", [_vm._v("Template")])]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "vs-col",
                                        {
                                          attrs: {
                                            "vs-order": "2",
                                            "vs-type": "flex",
                                            "vs-justify": "flex-start",
                                            "vs-align": "center",
                                            "vs-lg": "9",
                                            "vs-sm": "9",
                                            "vs-xs": "9"
                                          }
                                        },
                                        [
                                          _c("v-select", {
                                            attrs: {
                                              disabled:
                                                _vm.optionDisableTemplate,
                                              clearable: false,
                                              reduce: function(
                                                dataLookUpTemplate
                                              ) {
                                                return dataLookUpTemplate.id_log
                                              },
                                              label: "name",
                                              options: _vm.dataLookUpTemplate
                                            },
                                            scopedSlots: _vm._u([
                                              {
                                                key: "option",
                                                fn: function(
                                                  dataLookUpTemplate
                                                ) {
                                                  return [
                                                    dataLookUpTemplate.is_default ===
                                                      "-1" &&
                                                    dataLookUpTemplate.is_system ===
                                                      "-1"
                                                      ? _c(
                                                          "vs-row",
                                                          {
                                                            attrs: {
                                                              "vs-align":
                                                                "center",
                                                              "vs-justify":
                                                                "flex-start",
                                                              "vs-w": "w-full"
                                                            }
                                                          },
                                                          [
                                                            _c(
                                                              "span",
                                                              {
                                                                staticStyle: {
                                                                  color: "red"
                                                                }
                                                              },
                                                              [
                                                                _c("b", [
                                                                  _vm._v(
                                                                    " " +
                                                                      _vm._s(
                                                                        dataLookUpTemplate.name
                                                                      )
                                                                  )
                                                                ])
                                                              ]
                                                            )
                                                          ]
                                                        )
                                                      : dataLookUpTemplate.is_default ===
                                                          "-1" &&
                                                        dataLookUpTemplate.is_system ===
                                                          "0"
                                                      ? _c(
                                                          "vs-row",
                                                          {
                                                            attrs: {
                                                              "vs-align":
                                                                "center",
                                                              "vs-justify":
                                                                "flex-start",
                                                              "vs-w": "w-full"
                                                            }
                                                          },
                                                          [
                                                            _c("span", [
                                                              _c("b", [
                                                                _vm._v(
                                                                  " " +
                                                                    _vm._s(
                                                                      dataLookUpTemplate.name
                                                                    )
                                                                )
                                                              ])
                                                            ])
                                                          ]
                                                        )
                                                      : dataLookUpTemplate.is_default ===
                                                          "0" &&
                                                        dataLookUpTemplate.is_system ===
                                                          "-1"
                                                      ? _c(
                                                          "vs-row",
                                                          {
                                                            attrs: {
                                                              "vs-align":
                                                                "center",
                                                              "vs-justify":
                                                                "flex-start",
                                                              "vs-w": "w-full"
                                                            }
                                                          },
                                                          [
                                                            _c(
                                                              "span",
                                                              {
                                                                staticStyle: {
                                                                  color: "red"
                                                                }
                                                              },
                                                              [
                                                                _vm._v(
                                                                  " " +
                                                                    _vm._s(
                                                                      dataLookUpTemplate.name
                                                                    )
                                                                )
                                                              ]
                                                            )
                                                          ]
                                                        )
                                                      : dataLookUpTemplate.is_default ===
                                                          "0" &&
                                                        dataLookUpTemplate.is_system ===
                                                          "0"
                                                      ? _c(
                                                          "vs-row",
                                                          {
                                                            attrs: {
                                                              "vs-align":
                                                                "center",
                                                              "vs-justify":
                                                                "flex-start",
                                                              "vs-w": "w-full"
                                                            }
                                                          },
                                                          [
                                                            _c("span", [
                                                              _vm._v(
                                                                " " +
                                                                  _vm._s(
                                                                    dataLookUpTemplate.name
                                                                  )
                                                              )
                                                            ])
                                                          ]
                                                        )
                                                      : _vm._e()
                                                  ]
                                                }
                                              }
                                            ]),
                                            model: {
                                              value: _vm.vModelLookUpIdTemplate,
                                              callback: function($$v) {
                                                _vm.vModelLookUpIdTemplate = $$v
                                              },
                                              expression:
                                                "vModelLookUpIdTemplate"
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
                                    { staticClass: "box-body mb-2" },
                                    [
                                      _c(
                                        "vs-col",
                                        {
                                          attrs: {
                                            "vs-order": "1",
                                            "vs-type": "flex",
                                            "vs-justify": "flex-start",
                                            "vs-align": "flex-start",
                                            "vs-w": "3"
                                          }
                                        },
                                        [
                                          _c(
                                            "vs-radio",
                                            {
                                              attrs: {
                                                disabled:
                                                  _vm.optionDisable.date,
                                                "vs-name": "radios1",
                                                "vs-value": "1"
                                              },
                                              model: {
                                                value: _vm.vModelOptions,
                                                callback: function($$v) {
                                                  _vm.vModelOptions = $$v
                                                },
                                                expression: "vModelOptions"
                                              }
                                            },
                                            [_vm._v("Date")]
                                          )
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "vs-col",
                                        {
                                          attrs: {
                                            "vs-order": "2",
                                            "vs-type": "flex",
                                            "vs-justify": "flex-start",
                                            "vs-align": "flex-start",
                                            "vs-w": "5"
                                          }
                                        },
                                        [
                                          _c("date-picker", {
                                            attrs: {
                                              disabled: _vm.optionDisable.date,
                                              clearable: false,
                                              lang: _vm.$t("lang"),
                                              "value-type": "YYYY-MM-DD",
                                              placeholder: "DD/MM/YYYY",
                                              format: "DD/MM/YYYY",
                                              label: "name"
                                            },
                                            on: {
                                              input: function($event) {
                                                return _vm.setRadioCheck(1)
                                              }
                                            },
                                            model: {
                                              value: _vm.vModelDateSelected,
                                              callback: function($$v) {
                                                _vm.vModelDateSelected = $$v
                                              },
                                              expression: "vModelDateSelected"
                                            }
                                          })
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c("vs-col", {
                                        attrs: {
                                          "vs-order": "3",
                                          "vs-type": "flex",
                                          "vs-justify": "flex-start",
                                          "vs-align": "flex-start",
                                          "vs-w": "4"
                                        }
                                      })
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "vs-row",
                                    { staticClass: "box-body mb-2" },
                                    [
                                      _c(
                                        "vs-col",
                                        {
                                          attrs: {
                                            "vs-order": "1",
                                            "vs-type": "flex",
                                            "vs-justify": "flex-start",
                                            "vs-align": "flex-start",
                                            "vs-w": "3"
                                          }
                                        },
                                        [
                                          _c(
                                            "vs-radio",
                                            {
                                              attrs: {
                                                disabled:
                                                  _vm.optionDisable.range,
                                                "vs-name": "radios1",
                                                "vs-value": "2"
                                              },
                                              model: {
                                                value: _vm.vModelOptions,
                                                callback: function($$v) {
                                                  _vm.vModelOptions = $$v
                                                },
                                                expression: "vModelOptions"
                                              }
                                            },
                                            [_vm._v("Range")]
                                          )
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "vs-col",
                                        {
                                          attrs: {
                                            "vs-order": "2",
                                            "vs-type": "flex",
                                            "vs-justify": "flex-start",
                                            "vs-align": "flex-start",
                                            "vs-w": "5"
                                          }
                                        },
                                        [
                                          _c("date-picker", {
                                            attrs: {
                                              disabled: _vm.optionDisable.range,
                                              clearable: false,
                                              lang: _vm.$t("lang"),
                                              "value-type": "YYYY-MM-DD",
                                              placeholder: "DD/MM/YYYY",
                                              format: "DD/MM/YYYY",
                                              label: "name"
                                            },
                                            on: {
                                              input: function($event) {
                                                return _vm.setRadioCheck(2, 1)
                                              }
                                            },
                                            model: {
                                              value: _vm.vModelDateStart,
                                              callback: function($$v) {
                                                _vm.vModelDateStart = $$v
                                              },
                                              expression: "vModelDateStart"
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
                                            "vs-order": "3",
                                            "vs-type": "flex",
                                            "vs-justify": "flex-start",
                                            "vs-align": "flex-end",
                                            "vs-w": "4"
                                          }
                                        },
                                        [
                                          _c("date-picker", {
                                            attrs: {
                                              disabled: _vm.optionDisable.range,
                                              clearable: false,
                                              lang: _vm.$t("lang"),
                                              "value-type": "YYYY-MM-DD",
                                              placeholder: "DD/MM/YYYY",
                                              format: "DD/MM/YYYY",
                                              label: "name"
                                            },
                                            on: {
                                              input: function($event) {
                                                return _vm.setRadioCheck(2, 2)
                                              }
                                            },
                                            model: {
                                              value: _vm.vModelDateEnd,
                                              callback: function($$v) {
                                                _vm.vModelDateEnd = $$v
                                              },
                                              expression: "vModelDateEnd"
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
                                    { staticClass: "box-body mb-2" },
                                    [
                                      _c(
                                        "vs-col",
                                        {
                                          attrs: {
                                            "vs-order": "1",
                                            "vs-type": "flex",
                                            "vs-justify": "flex-start",
                                            "vs-align": "flex-start",
                                            "vs-w": "3"
                                          }
                                        },
                                        [
                                          _c(
                                            "vs-radio",
                                            {
                                              attrs: {
                                                disabled:
                                                  _vm.optionDisable.week,
                                                "vs-name": "radios1",
                                                "vs-value": "3"
                                              },
                                              model: {
                                                value: _vm.vModelOptions,
                                                callback: function($$v) {
                                                  _vm.vModelOptions = $$v
                                                },
                                                expression: "vModelOptions"
                                              }
                                            },
                                            [_vm._v("Week")]
                                          )
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "vs-col",
                                        {
                                          attrs: {
                                            "vs-order": "2",
                                            "vs-type": "flex",
                                            "vs-justify": "flex-start",
                                            "vs-align": "flex-start",
                                            "vs-w": "5"
                                          }
                                        },
                                        [
                                          _c("v-select", {
                                            staticStyle: {
                                              width: "115px",
                                              "min-width": "120px"
                                            },
                                            attrs: {
                                              disabled: _vm.optionDisable.week,
                                              clearable: false,
                                              reduce: function(dataLookUpWeek) {
                                                return dataLookUpWeek.value
                                              },
                                              label: "text",
                                              options: _vm.dataLookUpWeek
                                            },
                                            on: {
                                              input: function($event) {
                                                return _vm.setRadioCheck(3)
                                              }
                                            },
                                            model: {
                                              value: _vm.vModelLookUp.week,
                                              callback: function($$v) {
                                                _vm.$set(
                                                  _vm.vModelLookUp,
                                                  "week",
                                                  $$v
                                                )
                                              },
                                              expression: "vModelLookUp.week"
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
                                            "vs-order": "3",
                                            "vs-type": "flex",
                                            "vs-justify": "flex-start",
                                            "vs-align": "flex-start",
                                            "vs-w": "4"
                                          }
                                        },
                                        [
                                          _c("v-select", {
                                            staticStyle: {
                                              width: "115px",
                                              "min-width": "120px"
                                            },
                                            attrs: {
                                              disabled: _vm.optionDisable.week,
                                              clearable: false,
                                              reduce: function(dataLookUpYear) {
                                                return dataLookUpYear.value
                                              },
                                              label: "text",
                                              options: _vm.dataLookUpYear
                                            },
                                            on: {
                                              input: function($event) {
                                                return _vm.setRadioCheck(3)
                                              }
                                            },
                                            model: {
                                              value: _vm.vModelLookUp.yearWeek,
                                              callback: function($$v) {
                                                _vm.$set(
                                                  _vm.vModelLookUp,
                                                  "yearWeek",
                                                  $$v
                                                )
                                              },
                                              expression:
                                                "vModelLookUp.yearWeek"
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
                                    { staticClass: "box-body mb-2" },
                                    [
                                      _c(
                                        "vs-col",
                                        {
                                          attrs: {
                                            "vs-order": "1",
                                            "vs-type": "flex",
                                            "vs-justify": "flex-start",
                                            "vs-align": "flex-start",
                                            "vs-w": "3"
                                          }
                                        },
                                        [
                                          _c(
                                            "vs-radio",
                                            {
                                              attrs: {
                                                disabled:
                                                  _vm.optionDisable.month,
                                                "vs-name": "radios1",
                                                "vs-value": "4"
                                              },
                                              model: {
                                                value: _vm.vModelOptions,
                                                callback: function($$v) {
                                                  _vm.vModelOptions = $$v
                                                },
                                                expression: "vModelOptions"
                                              }
                                            },
                                            [_vm._v("Month")]
                                          )
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "vs-col",
                                        {
                                          attrs: {
                                            "vs-order": "2",
                                            "vs-type": "flex",
                                            "vs-justify": "flex-start",
                                            "vs-align": "flex-start",
                                            "vs-w": "5"
                                          }
                                        },
                                        [
                                          _c("v-select", {
                                            staticStyle: {
                                              width: "115px",
                                              "min-width": "120px"
                                            },
                                            attrs: {
                                              disabled: _vm.optionDisable.month,
                                              clearable: false,
                                              reduce: function(
                                                dataLookUpMonth
                                              ) {
                                                return dataLookUpMonth.value
                                              },
                                              label: "text",
                                              options: _vm.dataLookUpMonth
                                            },
                                            on: {
                                              input: function($event) {
                                                return _vm.setRadioCheck(4)
                                              }
                                            },
                                            model: {
                                              value: _vm.vModelLookUp.month,
                                              callback: function($$v) {
                                                _vm.$set(
                                                  _vm.vModelLookUp,
                                                  "month",
                                                  $$v
                                                )
                                              },
                                              expression: "vModelLookUp.month"
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
                                            "vs-order": "3",
                                            "vs-type": "flex",
                                            "vs-justify": "flex-start",
                                            "vs-align": "flex-start",
                                            "vs-w": "4"
                                          }
                                        },
                                        [
                                          _c("v-select", {
                                            staticStyle: {
                                              width: "115px",
                                              "min-width": "120px"
                                            },
                                            attrs: {
                                              disabled: _vm.optionDisable.month,
                                              clearable: false,
                                              reduce: function(dataLookUpYear) {
                                                return dataLookUpYear.value
                                              },
                                              label: "text",
                                              options: _vm.dataLookUpYear
                                            },
                                            on: {
                                              input: function($event) {
                                                return _vm.setRadioCheck(4)
                                              }
                                            },
                                            model: {
                                              value: _vm.vModelLookUp.yearMonth,
                                              callback: function($$v) {
                                                _vm.$set(
                                                  _vm.vModelLookUp,
                                                  "yearMonth",
                                                  $$v
                                                )
                                              },
                                              expression:
                                                "vModelLookUp.yearMonth"
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
                                    { staticClass: "box-body mb-2" },
                                    [
                                      _c(
                                        "vs-col",
                                        {
                                          attrs: {
                                            "vs-order": "1",
                                            "vs-type": "flex",
                                            "vs-justify": "flex-start",
                                            "vs-align": "flex-start",
                                            "vs-w": "3"
                                          }
                                        },
                                        [
                                          _c(
                                            "vs-radio",
                                            {
                                              attrs: {
                                                disabled:
                                                  _vm.optionDisable.quarter,
                                                "vs-name": "radios1",
                                                "vs-value": "5"
                                              },
                                              model: {
                                                value: _vm.vModelOptions,
                                                callback: function($$v) {
                                                  _vm.vModelOptions = $$v
                                                },
                                                expression: "vModelOptions"
                                              }
                                            },
                                            [_vm._v("Quarter")]
                                          )
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "vs-col",
                                        {
                                          attrs: {
                                            "vs-order": "2",
                                            "vs-type": "flex",
                                            "vs-justify": "flex-start",
                                            "vs-align": "flex-start",
                                            "vs-w": "5"
                                          }
                                        },
                                        [
                                          _c("v-select", {
                                            staticStyle: {
                                              width: "115px",
                                              "min-width": "120px"
                                            },
                                            attrs: {
                                              disabled:
                                                _vm.optionDisable.quarter,
                                              clearable: false,
                                              reduce: function(
                                                dataLookUpQuarter
                                              ) {
                                                return dataLookUpQuarter.value
                                              },
                                              label: "text",
                                              options: _vm.dataLookUpQuarter
                                            },
                                            on: {
                                              input: function($event) {
                                                return _vm.setRadioCheck(5)
                                              }
                                            },
                                            model: {
                                              value: _vm.vModelLookUp.quarter,
                                              callback: function($$v) {
                                                _vm.$set(
                                                  _vm.vModelLookUp,
                                                  "quarter",
                                                  $$v
                                                )
                                              },
                                              expression: "vModelLookUp.quarter"
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
                                            "vs-order": "3",
                                            "vs-type": "flex",
                                            "vs-justify": "flex-start",
                                            "vs-align": "flex-start",
                                            "vs-w": "4"
                                          }
                                        },
                                        [
                                          _c("v-select", {
                                            staticStyle: {
                                              width: "115px",
                                              "min-width": "120px"
                                            },
                                            attrs: {
                                              disabled:
                                                _vm.optionDisable.quarter,
                                              clearable: false,
                                              reduce: function(dataLookUpYear) {
                                                return dataLookUpYear.value
                                              },
                                              label: "text",
                                              options: _vm.dataLookUpYear
                                            },
                                            on: {
                                              input: function($event) {
                                                return _vm.setRadioCheck(5)
                                              }
                                            },
                                            model: {
                                              value:
                                                _vm.vModelLookUp.yearQuarter,
                                              callback: function($$v) {
                                                _vm.$set(
                                                  _vm.vModelLookUp,
                                                  "yearQuarter",
                                                  $$v
                                                )
                                              },
                                              expression:
                                                "vModelLookUp.yearQuarter"
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
                                    { staticClass: "box-body mb-2" },
                                    [
                                      _c(
                                        "vs-col",
                                        {
                                          attrs: {
                                            "vs-order": "1",
                                            "vs-type": "flex",
                                            "vs-justify": "flex-start",
                                            "vs-align": "flex-start",
                                            "vs-w": "3"
                                          }
                                        },
                                        [
                                          _c(
                                            "vs-radio",
                                            {
                                              attrs: {
                                                disabled:
                                                  _vm.optionDisable.semester,
                                                "vs-name": "radios1",
                                                "vs-value": "6"
                                              },
                                              model: {
                                                value: _vm.vModelOptions,
                                                callback: function($$v) {
                                                  _vm.vModelOptions = $$v
                                                },
                                                expression: "vModelOptions"
                                              }
                                            },
                                            [_vm._v("Semester")]
                                          )
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "vs-col",
                                        {
                                          attrs: {
                                            "vs-order": "2",
                                            "vs-type": "flex",
                                            "vs-justify": "flex-start",
                                            "vs-align": "flex-start",
                                            "vs-w": "5"
                                          }
                                        },
                                        [
                                          _c("v-select", {
                                            staticStyle: {
                                              width: "115px",
                                              "min-width": "120px"
                                            },
                                            attrs: {
                                              disabled:
                                                _vm.optionDisable.semester,
                                              clearable: false,
                                              reduce: function(
                                                dataLookUpSemester
                                              ) {
                                                return dataLookUpSemester.value
                                              },
                                              label: "text",
                                              options: _vm.dataLookUpSemester
                                            },
                                            on: {
                                              input: function($event) {
                                                return _vm.setRadioCheck(6)
                                              }
                                            },
                                            model: {
                                              value: _vm.vModelLookUp.semester,
                                              callback: function($$v) {
                                                _vm.$set(
                                                  _vm.vModelLookUp,
                                                  "semester",
                                                  $$v
                                                )
                                              },
                                              expression:
                                                "vModelLookUp.semester"
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
                                            "vs-order": "3",
                                            "vs-type": "flex",
                                            "vs-justify": "flex-start",
                                            "vs-align": "flex-start",
                                            "vs-w": "4"
                                          }
                                        },
                                        [
                                          _c("v-select", {
                                            staticStyle: {
                                              width: "115px",
                                              "min-width": "120px"
                                            },
                                            attrs: {
                                              disabled:
                                                _vm.optionDisable.semester,
                                              clearable: false,
                                              reduce: function(dataLookUpYear) {
                                                return dataLookUpYear.value
                                              },
                                              label: "text",
                                              options: _vm.dataLookUpYear
                                            },
                                            on: {
                                              input: function($event) {
                                                return _vm.setRadioCheck(6)
                                              }
                                            },
                                            model: {
                                              value:
                                                _vm.vModelLookUp.yearSemester,
                                              callback: function($$v) {
                                                _vm.$set(
                                                  _vm.vModelLookUp,
                                                  "yearSemester",
                                                  $$v
                                                )
                                              },
                                              expression:
                                                "vModelLookUp.yearSemester"
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
                                    { staticClass: "box-body mb-2" },
                                    [
                                      _c(
                                        "vs-col",
                                        {
                                          attrs: {
                                            "vs-order": "1",
                                            "vs-type": "flex",
                                            "vs-justify": "flex-start",
                                            "vs-align": "flex-start",
                                            "vs-w": "3"
                                          }
                                        },
                                        [
                                          _c(
                                            "vs-radio",
                                            {
                                              attrs: {
                                                disabled:
                                                  _vm.optionDisable.year,
                                                "vs-name": "radios1",
                                                "vs-value": "7"
                                              },
                                              model: {
                                                value: _vm.vModelOptions,
                                                callback: function($$v) {
                                                  _vm.vModelOptions = $$v
                                                },
                                                expression: "vModelOptions"
                                              }
                                            },
                                            [_vm._v("Year")]
                                          )
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "vs-col",
                                        {
                                          attrs: {
                                            "vs-order": "2",
                                            "vs-type": "flex",
                                            "vs-justify": "flex-start",
                                            "vs-align": "flex-start",
                                            "vs-w": "5"
                                          }
                                        },
                                        [
                                          _c("v-select", {
                                            staticStyle: {
                                              width: "115px",
                                              "min-width": "120px"
                                            },
                                            attrs: {
                                              disabled: _vm.optionDisable.year,
                                              clearable: false,
                                              reduce: function(dataLookUpYear) {
                                                return dataLookUpYear.value
                                              },
                                              label: "text",
                                              options: _vm.dataLookUpYear
                                            },
                                            on: {
                                              input: function($event) {
                                                return _vm.setRadioCheck(7)
                                              }
                                            },
                                            model: {
                                              value: _vm.vModelLookUp.year,
                                              callback: function($$v) {
                                                _vm.$set(
                                                  _vm.vModelLookUp,
                                                  "year",
                                                  $$v
                                                )
                                              },
                                              expression: "vModelLookUp.year"
                                            }
                                          })
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c("vs-col", {
                                        attrs: {
                                          "vs-order": "3",
                                          "vs-type": "flex",
                                          "vs-justify": "flex-start",
                                          "vs-align": "flex-start",
                                          "vs-w": "4"
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
                      attrs: {
                        id: "filter-string",
                        "vs-lg": "6",
                        "vs-sm": "12"
                      }
                    },
                    [
                      _vm.reportCodeInt == _vm.reportList.ReservationList ||
                      _vm.reportCodeInt ==
                        _vm.reportList.CancelledReservation ||
                      _vm.reportCodeInt == _vm.reportList.NoShowReservation ||
                      _vm.reportCodeInt == _vm.reportList.VoidedReservation ||
                      _vm.reportCodeInt == _vm.reportList.GroupReservation ||
                      _vm.reportCodeInt == _vm.reportList.ExpectedArrival ||
                      _vm.reportCodeInt == _vm.reportList.ArrivalList ||
                      _vm.reportCodeInt == _vm.reportList.SamedayReservation ||
                      _vm.reportCodeInt == _vm.reportList.BalanceDeposit ||
                      _vm.reportCodeInt == _vm.reportList.WaitListReservation ||
                      _vm.reportCodeInt ==
                        _vm.reportList.AdvancedPaymentDeposit ||
                      _vm.reportCodeInt == _vm.reportList.CurrentInHouse ||
                      _vm.reportCodeInt == _vm.reportList.GuestInHouse ||
                      _vm.reportCodeInt ==
                        _vm.reportList.GuestInHousebyBusinessSource ||
                      _vm.reportCodeInt ==
                        _vm.reportList.GuestInHousebyMarket ||
                      _vm.reportCodeInt ==
                        _vm.reportList.GuestInHousebyBookingSource ||
                      _vm.reportCodeInt ==
                        _vm.reportList.GuestInHousebyGuestType ||
                      _vm.reportCodeInt ==
                        _vm.reportList.GuestInHousebyCountry ||
                      _vm.reportCodeInt == _vm.reportList.GuestInHousebyState ||
                      _vm.reportCodeInt == _vm.reportList.GuestInHousebyCity ||
                      _vm.reportCodeInt ==
                        _vm.reportList.GuestInHousebyNationality ||
                      _vm.reportCodeInt ==
                        _vm.reportList.GuestInHouseForecast ||
                      _vm.reportCodeInt == _vm.reportList.EarlyCheckIn ||
                      _vm.reportCodeInt == _vm.reportList.ComplimentGuest ||
                      _vm.reportCodeInt == _vm.reportList.HouseUseGuest ||
                      _vm.reportCodeInt == this.reportList.DayUse ||
                      _vm.reportCodeInt == this.reportList.EarlyDeparture ||
                      _vm.reportCodeInt == this.reportList.ExpectedDeparture ||
                      _vm.reportCodeInt == this.reportList.ExtendedDeparture ||
                      _vm.reportCodeInt == this.reportList.DepartureList ||
                      _vm.reportCodeInt ==
                        this.reportList.ActualDepartureGuestList ||
                      _vm.reportCodeInt == _vm.reportList.FolioTransaction ||
                      _vm.reportCodeInt == _vm.reportList.FolioList ||
                      _vm.reportCodeInt == _vm.reportList.MasterFolio ||
                      _vm.reportCodeInt == _vm.reportList.DeskFolio ||
                      _vm.reportCodeInt ==
                        _vm.reportList.DailyFolioTransaction ||
                      _vm.reportCodeInt ==
                        _vm.reportList.MonthlyFolioTransaction ||
                      _vm.reportCodeInt == _vm.reportList.YearlyTransaction ||
                      _vm.reportCodeInt == _vm.reportList.ChargeList ||
                      _vm.reportCodeInt == _vm.reportList.DailyChargeList ||
                      _vm.reportCodeInt == _vm.reportList.MonthlyChargeList ||
                      _vm.reportCodeInt == _vm.reportList.YearlyChargeList ||
                      _vm.reportCodeInt == _vm.reportList.CashierReport ||
                      _vm.reportCodeInt ==
                        _vm.reportList.CashierReportReprint ||
                      _vm.reportCodeInt == _vm.reportList.CashSummaryReport ||
                      _vm.reportCodeInt == _vm.reportList.PaymentList ||
                      _vm.reportCodeInt == _vm.reportList.DailyPaymentList ||
                      _vm.reportCodeInt == _vm.reportList.MonthlyPaymentList ||
                      _vm.reportCodeInt == _vm.reportList.YearlyPaymentList ||
                      _vm.reportCodeInt == _vm.reportList.DailySales ||
                      _vm.reportCodeInt == _vm.reportList.TransactionByStaff ||
                      _vm.reportCodeInt ==
                        _vm.reportList.TaxBreakdownDetailed ||
                      _vm.reportCodeInt == _vm.reportList.VoidList ||
                      _vm.reportCodeInt == _vm.reportList.RoomRate ||
                      _vm.reportCodeInt == _vm.reportList.Package ||
                      _vm.reportCodeInt == _vm.reportList.RoomStatus ||
                      _vm.reportCodeInt == _vm.reportList.Company ||
                      _vm.reportCodeInt == _vm.reportList.PhoneBook ||
                      _vm.reportCodeInt == _vm.reportList.LogUser ||
                      _vm.reportCodeInt == _vm.reportList.LogShift ||
                      _vm.reportCodeInt == _vm.reportList.LogMoveRoom ||
                      _vm.reportCodeInt ==
                        _vm.reportList.LogTransferTransaction ||
                      _vm.reportCodeInt == _vm.reportList.LogSpecialAccess ||
                      _vm.reportCodeInt == _vm.reportList.KeyLockHistory ||
                      _vm.reportCodeInt == _vm.reportList.LogVoidTransaction ||
                      _vm.reportCodeInt == _vm.reportList.LogVoidTransaction ||
                      _vm.reportCodeInt == _vm.reportList.LogHouseKeeping ||
                      _vm.reportCodeInt == _vm.reportList.LogPABX
                        ? _c(
                            "div",
                            [
                              _c("ReportFilter1", {
                                ref: "ReportFilter1",
                                attrs: { reportCodeInt: _vm.reportCodeInt }
                              })
                            ],
                            1
                          )
                        : _vm._e()
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
            [
              _c(
                "vs-col",
                { staticClass: "w-full flex box-body" },
                [
                  _vm.vModelLookUpIdTemplate > 0 &&
                  _vm.customizeReportAccess == 1
                    ? _c(
                        "div",
                        [
                          _vm.resolutionWidth >= 900
                            ? _c(
                                "vs-dropdown",
                                {
                                  staticClass: "customize-dropdown",
                                  attrs: { "vs-trigger-click": "" }
                                },
                                [
                                  _c(
                                    "vs-button",
                                    {
                                      staticClass: "mb-3 ml-3",
                                      on: {
                                        click: function($event) {
                                          return _vm.showReportEditor(
                                            _vm.modeData.edit
                                          )
                                        }
                                      }
                                    },
                                    [_vm._v("Customize Template")]
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
                                              return _vm.showReportEditor(
                                                _vm.modeData.insert
                                              )
                                            }
                                          }
                                        },
                                        [
                                          _c("vs-icon", {
                                            attrs: {
                                              icon: "add",
                                              size: "small",
                                              color: "success"
                                            }
                                          }),
                                          _vm._v(" Insert Template")
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "vs-dropdown-item",
                                        {
                                          on: {
                                            click: function($event) {
                                              return _vm.showReportEditor(
                                                _vm.modeData.edit
                                              )
                                            }
                                          }
                                        },
                                        [
                                          _c("vs-icon", {
                                            attrs: {
                                              icon: "edit",
                                              size: "small",
                                              color: "success"
                                            }
                                          }),
                                          _vm._v(" Edit Template")
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "vs-dropdown-item",
                                        {
                                          on: {
                                            click: function($event) {
                                              return _vm.showReportEditor(
                                                _vm.modeData.duplicate
                                              )
                                            }
                                          }
                                        },
                                        [
                                          _c("vs-icon", {
                                            attrs: {
                                              icon: "content_copy",
                                              size: "small",
                                              color: "blue"
                                            }
                                          }),
                                          _vm._v(" Duplicate Template")
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "vs-dropdown-item",
                                        {
                                          attrs: { color: "danger" },
                                          on: {
                                            click: function($event) {
                                              return _vm.showReportEditor(
                                                _vm.modeData.delete
                                              )
                                            }
                                          }
                                        },
                                        [
                                          _c("vs-icon", {
                                            attrs: {
                                              icon: "delete_forever",
                                              size: "small",
                                              color: "danger"
                                            }
                                          }),
                                          _vm._v(" Delete Template")
                                        ],
                                        1
                                      )
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
                    : _vm._e(),
                  _vm._v(" "),
                  _c(
                    "vs-button",
                    {
                      staticClass: "ml-auto mr-3 mb-3",
                      attrs: {
                        "vs-align": "flex-end",
                        color: "primary",
                        type: "filled"
                      },
                      on: {
                        click: function($event) {
                          return _vm.previewReport()
                        }
                      }
                    },
                    [_vm._v("Preview")]
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
        "vs-prompt",
        {
          staticClass: "dialog-second editor-report",
          attrs: {
            id: _vm.secondDialog,
            type: _vm.dialog.typeDialog,
            active: _vm.showModalSecond,
            "buttons-hidden": true,
            title: "Report Template Editor"
          },
          on: {
            "update:active": function($event) {
              _vm.showModalSecond = $event
            }
          }
        },
        [
          _c(
            _vm.scrollbarTag,
            {
              tag: "component",
              staticClass: "scroll-area p-4",
              attrs: { settings: _vm.perfectScrollbarSettings }
            },
            [
              _c("ReportEditor", {
                ref: "ReportEditor",
                attrs: {
                  modeDataEditor: this.modeDataEditor,
                  idLogTemplate: _vm.vModelLookUpIdTemplate,
                  reportCodeInt: _vm.reportCodeInt
                },
                on: {
                  showReportEditor: function($event) {
                    return _vm.showReportEditor()
                  },
                  closeModalReport: function($event) {
                    return _vm.closeModalReport()
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
      _c("report", { ref: "report" }),
      _vm._v(" "),
      _c("dialog-second", { ref: "dialogsecond" })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/report/components/ReportEditor.vue?vue&type=template&id=1e992d14&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/report/components/ReportEditor.vue?vue&type=template&id=1e992d14&scoped=true& ***!
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
    {
      staticClass: "vs-con-loading__container",
      attrs: { id: "main-report-editor" }
    },
    [
      _c(
        "vs-card",
        { staticClass: "box" },
        [
          _c(
            "vs-row",
            { staticClass: "box-body" },
            [
              _c(
                "vs-col",
                {
                  attrs: {
                    "vs-justify": "center",
                    "vs-align": "center",
                    "vs-w": "3"
                  }
                },
                [
                  _c(
                    "vs-row",
                    { staticClass: "mb-2" },
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
                        attrs: {
                          name: "name",
                          "label-placeholder": "Template Name"
                        },
                        model: {
                          value: _vm.vModel.name,
                          callback: function($$v) {
                            _vm.$set(_vm.vModel, "name", $$v)
                          },
                          expression: "vModel.name"
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
                              value: _vm.errors.has("name"),
                              expression: "errors.has('name')"
                            }
                          ],
                          staticClass: "text-danger text-sm"
                        },
                        [_vm._v(_vm._s(_vm.errors.first("name")))]
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "vs-row",
                    [
                      _c("vs-input", {
                        attrs: { "label-placeholder": "Header Remark" },
                        model: {
                          value: _vm.vModel.header_remark,
                          callback: function($$v) {
                            _vm.$set(_vm.vModel, "header_remark", $$v)
                          },
                          expression: "vModel.header_remark"
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
                    "vs-justify": "center",
                    "vs-align": "center",
                    "vs-w": "3"
                  }
                },
                [
                  _c("vs-row", { staticClass: "mb-1" }, [
                    _c("span", [_vm._v("Page Size")])
                  ]),
                  _vm._v(" "),
                  _c(
                    "vs-row",
                    { staticClass: "mb-1" },
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
                        attrs: {
                          name: "paper_size",
                          clearable: false,
                          reduce: function(dataLookUpPageSize) {
                            return dataLookUpPageSize.value
                          },
                          label: "text",
                          options: _vm.dataLookUpPageSize
                        },
                        on: {
                          input: function($event) {
                            return _vm.handleInputPaperSize()
                          }
                        },
                        model: {
                          value: _vm.vModel.paper_size,
                          callback: function($$v) {
                            _vm.$set(_vm.vModel, "paper_size", $$v)
                          },
                          expression: "vModel.paper_size"
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
                              value: _vm.errors.has("paper_size"),
                              expression: "errors.has('paper_size')"
                            }
                          ],
                          staticClass: "text-danger text-sm"
                        },
                        [_vm._v(_vm._s(_vm.errors.first("paper_size")))]
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "vs-row",
                    [
                      _c("vs-input-number", {
                        directives: [
                          {
                            name: "validate",
                            rawName: "v-validate",
                            value: "required",
                            expression: "'required'"
                          }
                        ],
                        attrs: {
                          name: "paper_width",
                          min: "0",
                          label: "Width:"
                        },
                        model: {
                          value: _vm.vModel.paper_width,
                          callback: function($$v) {
                            _vm.$set(_vm.vModel, "paper_width", $$v)
                          },
                          expression: "vModel.paper_width"
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
                              value: _vm.errors.has("paper_width"),
                              expression: "errors.has('paper_width')"
                            }
                          ],
                          staticClass: "text-danger text-sm"
                        },
                        [_vm._v(_vm._s(_vm.errors.first("paper_width")))]
                      ),
                      _vm._v(" "),
                      _c("vs-input-number", {
                        directives: [
                          {
                            name: "validate",
                            rawName: "v-validate",
                            value: "required",
                            expression: "'required'"
                          }
                        ],
                        attrs: {
                          name: "paper_height",
                          min: "0",
                          label: "Height:"
                        },
                        model: {
                          value: _vm.vModel.paper_height,
                          callback: function($$v) {
                            _vm.$set(_vm.vModel, "paper_height", $$v)
                          },
                          expression: "vModel.paper_height"
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
                              value: _vm.errors.has("paper_height"),
                              expression: "errors.has('paper_height')"
                            }
                          ],
                          staticClass: "text-danger text-sm"
                        },
                        [_vm._v(_vm._s(_vm.errors.first("paper_heigh")))]
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
                    "vs-justify": "center",
                    "vs-align": "center",
                    "vs-w": "3"
                  }
                },
                [
                  _c(
                    "vs-row",
                    { staticClass: "mb-2 pt-5" },
                    [
                      _c("vs-input-number", {
                        directives: [
                          {
                            name: "validate",
                            rawName: "v-validate",
                            value: "required",
                            expression: "'required'"
                          }
                        ],
                        attrs: {
                          name: "header_height",
                          min: "0",
                          label: "Header Height"
                        },
                        model: {
                          value: _vm.vModel.header_row_height,
                          callback: function($$v) {
                            _vm.$set(_vm.vModel, "header_row_height", $$v)
                          },
                          expression: "vModel.header_row_height"
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
                              value: _vm.errors.has("header_height"),
                              expression: "errors.has('header_height')"
                            }
                          ],
                          staticClass: "text-danger text-sm"
                        },
                        [_vm._v(_vm._s(_vm.errors.first("header_height")))]
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "vs-row",
                    [
                      _c("vs-input-number", {
                        directives: [
                          {
                            name: "validate",
                            rawName: "v-validate",
                            value: "required",
                            expression: "'required'"
                          }
                        ],
                        attrs: {
                          name: "data_height",
                          min: "0",
                          label: "Row Height"
                        },
                        model: {
                          value: _vm.vModel.row_height,
                          callback: function($$v) {
                            _vm.$set(_vm.vModel, "row_height", $$v)
                          },
                          expression: "vModel.row_height"
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
                              value: _vm.errors.has("data_height"),
                              expression: "errors.has('data_height')"
                            }
                          ],
                          staticClass: "text-danger text-sm"
                        },
                        [_vm._v(_vm._s(_vm.errors.first("data_height")))]
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
                    "vs-justify": "center",
                    "vs-align": "center",
                    "vs-w": "3"
                  }
                },
                [
                  _c(
                    "vs-row",
                    { staticClass: "pt-5 mb-2" },
                    [
                      _c(
                        "vs-checkbox",
                        {
                          model: {
                            value: _vm.vModelShowFooter,
                            callback: function($$v) {
                              _vm.vModelShowFooter = $$v
                            },
                            expression: "vModelShowFooter"
                          }
                        },
                        [_vm._v("Show Footer")]
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "vs-row",
                    { staticClass: "mb-1" },
                    [
                      _c(
                        "vs-checkbox",
                        {
                          model: {
                            value: _vm.vModelHorizontalBorder,
                            callback: function($$v) {
                              _vm.vModelHorizontalBorder = $$v
                            },
                            expression: "vModelHorizontalBorder"
                          }
                        },
                        [_vm._v("Horizontal Border")]
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "vs-row",
                    { staticClass: "mb-2" },
                    [
                      _c(
                        "vs-checkbox",
                        {
                          model: {
                            value: _vm.vModelVerticalBorder,
                            callback: function($$v) {
                              _vm.vModelVerticalBorder = $$v
                            },
                            expression: "vModelVerticalBorder"
                          }
                        },
                        [_vm._v("Vertical Border")]
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "vs-row",
                    { attrs: { "vs-type": "flex" } },
                    [
                      _c(
                        "vs-radio",
                        {
                          staticClass: "ml-1 mr-3",
                          attrs: { "vs-name": "radios1", "vs-value": "-1" },
                          model: {
                            value: _vm.vModel.is_portrait,
                            callback: function($$v) {
                              _vm.$set(_vm.vModel, "is_portrait", $$v)
                            },
                            expression: "vModel.is_portrait"
                          }
                        },
                        [_vm._v("portrait")]
                      ),
                      _vm._v(" "),
                      _c(
                        "vs-radio",
                        {
                          attrs: { "vs-name": "radios1", "vs-value": "0" },
                          model: {
                            value: _vm.vModel.is_portrait,
                            callback: function($$v) {
                              _vm.$set(_vm.vModel, "is_portrait", $$v)
                            },
                            expression: "vModel.is_portrait"
                          }
                        },
                        [_vm._v("Landscape")]
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
        "vs-row",
        [
          _c(
            "vs-row",
            {
              attrs: {
                "vs-type": "flex",
                "vs-justify": "center",
                "vs-align": "center",
                "vs-w": "3"
              }
            },
            [
              _c("ag-grid-vue", {
                class: _vm.themeAgGrid,
                staticStyle: { width: "95%", height: "495px" },
                attrs: {
                  id: "Grid1",
                  gridOptions: _vm.gridOptions,
                  columnDefs: _vm.columnDefs,
                  defaultColDef: _vm.defaultColDef,
                  rowData: _vm.rowData,
                  rowDragManaged: true,
                  animateRows: true
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "vs-row",
            {
              attrs: {
                "vs-justify": "center",
                "vs-align": "center",
                "vs-w": "3"
              }
            },
            [
              _c("vs-row", { staticClass: "mb-2" }, [
                _c(
                  "div",
                  {
                    staticStyle: { width: "98%", height: "140px" },
                    on: {
                      dragover: function($event) {
                        return _vm.onDragOver($event)
                      },
                      drop: function($event) {
                        return _vm.onDropReportGroup($event)
                      }
                    }
                  },
                  [
                    _c("ag-grid-vue", {
                      class: _vm.themeAgGrid,
                      staticStyle: { width: "98%", height: "140px" },
                      attrs: {
                        id: "Grid21",
                        gridOptions: _vm.gridOptions2,
                        columnDefs: _vm.columnDefs2,
                        defaultColDef: _vm.defaultColDef,
                        rowData: _vm.rowData2,
                        rowDragManaged: true,
                        animateRows: true,
                        allowContextMenuWithControlKey: true,
                        getContextMenuItems: _vm.getContextMenuItems2
                      }
                    })
                  ],
                  1
                )
              ]),
              _vm._v(" "),
              _c("vs-row", { staticClass: "mb-2" }, [
                _c(
                  "div",
                  {
                    staticStyle: { width: "98%", height: "155px" },
                    on: {
                      dragover: function($event) {
                        return _vm.onDragOver($event)
                      },
                      drop: function($event) {
                        return _vm.onDropReportOrder($event)
                      }
                    }
                  },
                  [
                    _c("ag-grid-vue", {
                      class: _vm.themeAgGrid,
                      staticStyle: { width: "98%", height: "155px" },
                      attrs: {
                        id: "Grid22",
                        gridOptions: _vm.gridOptions3,
                        columnDefs: _vm.columnDefs3,
                        defaultColDef: _vm.defaultColDef,
                        rowData: _vm.rowData3,
                        rowDragManaged: true,
                        animateRows: true,
                        allowContextMenuWithControlKey: true,
                        getContextMenuItems: _vm.getContextMenuItems3
                      }
                    })
                  ],
                  1
                )
              ]),
              _vm._v(" "),
              _c(
                "vs-row",
                { staticClass: "mb-2" },
                [
                  _c("vs-input-number", {
                    attrs: { min: "0", max: "3", label: "Grouping Level:" },
                    model: {
                      value: _vm.vModel.group_level,
                      callback: function($$v) {
                        _vm.$set(_vm.vModel, "group_level", $$v)
                      },
                      expression: "vModel.group_level"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c("vs-row", [
                _c(
                  "div",
                  {
                    staticStyle: { width: "98%", height: "140px" },
                    on: {
                      dragover: function($event) {
                        return _vm.onDragOver($event)
                      },
                      drop: function($event) {
                        return _vm.onDropReportGrouping($event)
                      }
                    }
                  },
                  [
                    _c("ag-grid-vue", {
                      class: _vm.themeAgGrid,
                      staticStyle: { width: "98%", height: "140px" },
                      attrs: {
                        id: "Grid23",
                        gridOptions: _vm.gridOptions4,
                        columnDefs: _vm.columnDefs4,
                        defaultColDef: _vm.defaultColDef,
                        rowData: _vm.rowData4,
                        rowDragManaged: true,
                        animateRows: true,
                        allowContextMenuWithControlKey: true,
                        getContextMenuItems: _vm.getContextMenuItems4
                      }
                    })
                  ],
                  1
                )
              ])
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "vs-row",
            {
              attrs: {
                "vs-type": "flex",
                "vs-justify": "center",
                "vs-align": "center",
                "vs-w": "6"
              }
            },
            [
              _c(
                "div",
                {
                  staticStyle: { width: "100%", height: "495px" },
                  on: {
                    dragover: function($event) {
                      return _vm.onDragOver($event)
                    },
                    drop: function($event) {
                      return _vm.onDropReportField($event)
                    }
                  }
                },
                [
                  _c("ag-grid-vue", {
                    class: _vm.themeAgGrid,
                    staticStyle: { width: "100%", height: "495px" },
                    attrs: {
                      id: "Grid3",
                      gridOptions: _vm.gridOptions5,
                      columnDefs: _vm.columnDefs5,
                      defaultColDef: _vm.defaultColDef,
                      rowSelection: _vm.rowSelection5,
                      rowData: _vm.rowData5,
                      rowDragManaged: true,
                      animateRows: true,
                      allowContextMenuWithControlKey: true,
                      getContextMenuItems: _vm.getContextMenuItems5
                    }
                  })
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
        "vs-row",
        [
          _c(
            "vs-col",
            {
              attrs: {
                "vs-type": "flex",
                "vs-justify": "flex-start",
                "vs-align": "center",
                "vs-w": "9"
              }
            },
            [
              _vm.modeDataEditor == 1
                ? _c(
                    "vs-button",
                    {
                      staticClass: "vs-con-loading__container mt-4",
                      attrs: {
                        id: "button-default-template",
                        color: "primary",
                        type: "filled"
                      },
                      on: {
                        click: function($event) {
                          return _vm.setAsDefaultTemplate()
                        }
                      }
                    },
                    [_vm._v("Set as Default")]
                  )
                : _vm._e(),
              _vm._v(" "),
              _vm.modeDataEditor == 1 && _vm.userInfo.groupCode == "SYSTEM"
                ? _c(
                    "vs-button",
                    {
                      staticClass: "vs-con-loading__container mt-4 ml-2 mr-2",
                      attrs: {
                        id: "button-default-system",
                        color: "primary",
                        type: "filled"
                      },
                      on: {
                        click: function($event) {
                          return _vm.setAsSystemDefaultTemplate("-1")
                        }
                      }
                    },
                    [_vm._v("Set as System Default")]
                  )
                : _vm._e(),
              _vm._v(" "),
              _vm.modeDataEditor == 1 && _vm.userInfo.groupCode == "SYSTEM"
                ? _c(
                    "vs-button",
                    {
                      staticClass: "vs-con-loading__container mt-4",
                      attrs: {
                        id: "button-default-system-clear",
                        color: "primary",
                        type: "filled"
                      },
                      on: {
                        click: function($event) {
                          return _vm.setAsSystemDefaultTemplate("0")
                        }
                      }
                    },
                    [_vm._v("Clear as System Default")]
                  )
                : _vm._e()
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "vs-col",
            {
              attrs: {
                "vs-type": "flex",
                "vs-justify": "flex-end",
                "vs-align": "center",
                "vs-w": "3"
              }
            },
            [
              _c(
                "vs-button",
                {
                  staticClass: "vs-con-loading__container mt-4 mr-3",
                  attrs: {
                    disabled: _vm.disabledButtonSave,
                    id: "button-save-main",
                    color: "primary",
                    type: "filled"
                  },
                  on: {
                    click: function($event) {
                      return _vm.saveReportTemplate()
                    }
                  }
                },
                [_vm._v("Save")]
              ),
              _vm._v(" "),
              _c(
                "vs-button",
                {
                  staticClass: "mt-4",
                  attrs: { color: "primary", type: "filled" },
                  on: {
                    click: function($event) {
                      return _vm.closeReportTemplateEditor()
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
      _c("dialog-three", { ref: "dialogthree" })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/report/components/report-filter1.vue?vue&type=template&id=060f0313&":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/report/components/report-filter1.vue?vue&type=template&id=060f0313& ***!
  \****************************************************************************************************************************************************************************************************************************************/
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
  return _c("vx-card", { staticClass: "filter-string box" }, [
    _vm.reportCodeInt == _vm.reportList.ReservationList ||
    _vm.reportCodeInt == _vm.reportList.CancelledReservation ||
    _vm.reportCodeInt == _vm.reportList.NoShowReservation ||
    _vm.reportCodeInt == _vm.reportList.VoidedReservation ||
    _vm.reportCodeInt == _vm.reportList.GroupReservation ||
    _vm.reportCodeInt == _vm.reportList.ExpectedArrival ||
    _vm.reportCodeInt == _vm.reportList.SamedayReservation ||
    _vm.reportCodeInt == _vm.reportList.BalanceDeposit ||
    _vm.reportCodeInt == _vm.reportList.WaitListReservation ||
    _vm.reportCodeInt == _vm.reportList.CurrentInHouse ||
    _vm.reportCodeInt == _vm.reportList.GuestInHouse ||
    _vm.reportCodeInt == _vm.reportList.GuestInHousebyBusinessSource ||
    _vm.reportCodeInt == _vm.reportList.GuestInHousebyMarket ||
    _vm.reportCodeInt == _vm.reportList.GuestInHousebyGuestType ||
    _vm.reportCodeInt == _vm.reportList.GuestInHousebyCountry ||
    _vm.reportCodeInt == _vm.reportList.GuestInHousebyState ||
    _vm.reportCodeInt == _vm.reportList.GuestInHousebyCity ||
    _vm.reportCodeInt == _vm.reportList.GuestInHouseForecast ||
    _vm.reportCodeInt == _vm.reportList.EarlyCheckIn ||
    _vm.reportCodeInt == this.reportList.DayUse ||
    _vm.reportCodeInt == this.reportList.EarlyDeparture ||
    _vm.reportCodeInt == this.reportList.ExpectedDeparture ||
    _vm.reportCodeInt == this.reportList.ExtendedDeparture ||
    _vm.reportCodeInt == this.reportList.DepartureList ||
    _vm.reportCodeInt == this.reportList.ActualDepartureGuestList
      ? _c(
          "div",
          [
            _c(
              "vs-row",
              { staticClass: "box-body  mb-2" },
              [
                _c(
                  "vs-col",
                  {
                    attrs: {
                      "vs-order": "1",
                      "vs-type": "flex",
                      "vs-justify": "flex-start",
                      "vs-align": "flex-start",
                      "vs-lg": "12",
                      "vs-sm": "12",
                      "vs-xs": "12"
                    }
                  },
                  [
                    _vm.reportCodeInt != _vm.reportList.GroupReservation
                      ? _c("div", [
                          _c("span", [_c("b", [_vm._v("Filter Guest Type")])])
                        ])
                      : _c("div", [
                          _c("span", [_c("b", [_vm._v("Filter Group")])])
                        ])
                  ]
                )
              ],
              1
            ),
            _vm._v(" "),
            _vm.reportCodeInt != _vm.reportList.GroupReservation
              ? _c(
                  "div",
                  [
                    _c(
                      "vs-row",
                      { staticClass: "box-body  mb-2" },
                      [
                        _c(
                          "vs-col",
                          {
                            attrs: {
                              "vs-order": "1",
                              "vs-type": "flex",
                              "vs-justify": "flex-start",
                              "vs-align": "center",
                              "vs-lg": "3",
                              "vs-sm": "3",
                              "vs-xs": "3"
                            }
                          },
                          [
                            _c(
                              "vs-radio",
                              {
                                attrs: {
                                  "vs-name": "radioFilter",
                                  "vs-value": "1"
                                },
                                model: {
                                  value: _vm.vModelGuestType,
                                  callback: function($$v) {
                                    _vm.vModelGuestType = $$v
                                  },
                                  expression: "vModelGuestType"
                                }
                              },
                              [_vm._v("All")]
                            )
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "vs-col",
                          {
                            attrs: {
                              "vs-order": "2",
                              "vs-type": "flex",
                              "vs-justify": "flex-start",
                              "vs-align": "center",
                              "vs-lg": "9",
                              "vs-sm": "9",
                              "vs-xs": "9"
                            }
                          },
                          [
                            _c(
                              "vs-radio",
                              {
                                attrs: {
                                  "vs-name": "radioFilter",
                                  "vs-value": "2"
                                },
                                model: {
                                  value: _vm.vModelGuestType,
                                  callback: function($$v) {
                                    _vm.vModelGuestType = $$v
                                  },
                                  expression: "vModelGuestType"
                                }
                              },
                              [_vm._v("Individual")]
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
              : _vm._e(),
            _vm._v(" "),
            _c(
              "vs-row",
              { staticClass: "box-body  mb-2" },
              [
                _c(
                  "vs-col",
                  {
                    attrs: {
                      "vs-order": "1",
                      "vs-type": "flex",
                      "vs-justify": "flex-start",
                      "vs-align": "center",
                      "vs-lg": "3",
                      "vs-sm": "3",
                      "vs-xs": "3"
                    }
                  },
                  [
                    _vm.reportCodeInt != _vm.reportList.GroupReservation
                      ? _c(
                          "div",
                          [
                            _c(
                              "vs-radio",
                              {
                                attrs: {
                                  "vs-name": "radioFilter",
                                  "vs-value": "3"
                                },
                                model: {
                                  value: _vm.vModelGuestType,
                                  callback: function($$v) {
                                    _vm.vModelGuestType = $$v
                                  },
                                  expression: "vModelGuestType"
                                }
                              },
                              [_vm._v("Group")]
                            )
                          ],
                          1
                        )
                      : _c("div", [_c("span", [_vm._v("Group")])])
                  ]
                ),
                _vm._v(" "),
                _c(
                  "vs-col",
                  {
                    attrs: {
                      "vs-order": "2",
                      "vs-type": "flex",
                      "vs-justify": "flex-start",
                      "vs-align": "center",
                      "vs-lg": "9",
                      "vs-sm": "9",
                      "vs-xs": "9"
                    }
                  },
                  [
                    _c("v-select", {
                      staticClass: "w-full",
                      attrs: {
                        reduce: function(dataLookGuestGroup) {
                          return dataLookGuestGroup.code
                        },
                        label: "name",
                        options: _vm.dataLookGuestGroup
                      },
                      on: {
                        input: function($event) {
                          return _vm.onSelectGuestType(3)
                        }
                      },
                      model: {
                        value: _vm.vModelLookUp.guestGroup,
                        callback: function($$v) {
                          _vm.$set(_vm.vModelLookUp, "guestGroup", $$v)
                        },
                        expression: "vModelLookUp.guestGroup"
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
      : _vm._e(),
    _vm._v(" "),
    _vm.reportCodeInt == _vm.reportList.ArrivalList
      ? _c(
          "div",
          [
            _c(
              "vs-row",
              { staticClass: "box-body  mb-2" },
              [
                _c(
                  "vs-col",
                  {
                    attrs: {
                      "vs-order": "1",
                      "vs-type": "flex",
                      "vs-justify": "flex-start",
                      "vs-align": "flex-start",
                      "vs-lg": "12",
                      "vs-sm": "12",
                      "vs-xs": "12"
                    }
                  },
                  [
                    _vm.reportCodeInt == _vm.reportList.ArrivalList
                      ? _c("div", [
                          _c("span", [_c("b", [_vm._v("Filter Arrival List")])])
                        ])
                      : _vm._e()
                  ]
                )
              ],
              1
            ),
            _vm._v(" "),
            _vm.reportCodeInt == _vm.reportList.ArrivalList
              ? _c(
                  "div",
                  [
                    _c(
                      "vs-row",
                      { staticClass: "box-body  mb-2" },
                      [
                        _c(
                          "vs-col",
                          {
                            attrs: {
                              "vs-order": "1",
                              "vs-type": "flex",
                              "vs-justify": "flex-start",
                              "vs-align": "center",
                              "vs-lg": "4",
                              "vs-sm": "4",
                              "vs-xs": "4"
                            }
                          },
                          [
                            _c(
                              "vs-radio",
                              {
                                attrs: {
                                  "vs-name": "radioArrivalList",
                                  "vs-value": "1"
                                },
                                model: {
                                  value: _vm.vModelOptionArrivalList,
                                  callback: function($$v) {
                                    _vm.vModelOptionArrivalList = $$v
                                  },
                                  expression: "vModelOptionArrivalList"
                                }
                              },
                              [_vm._v("All")]
                            )
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "vs-col",
                          {
                            attrs: {
                              "vs-order": "2",
                              "vs-type": "flex",
                              "vs-justify": "flex-start",
                              "vs-align": "center",
                              "vs-lg": "4",
                              "vs-sm": "4",
                              "vs-xs": "4"
                            }
                          },
                          [
                            _c(
                              "vs-radio",
                              {
                                attrs: {
                                  "vs-name": "radioArrivalList",
                                  "vs-value": "2"
                                },
                                model: {
                                  value: _vm.vModelOptionArrivalList,
                                  callback: function($$v) {
                                    _vm.vModelOptionArrivalList = $$v
                                  },
                                  expression: "vModelOptionArrivalList"
                                }
                              },
                              [_vm._v("By Reservation")]
                            )
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "vs-col",
                          {
                            attrs: {
                              "vs-order": "3",
                              "vs-type": "flex",
                              "vs-justify": "flex-start",
                              "vs-align": "center",
                              "vs-lg": "4",
                              "vs-sm": "4",
                              "vs-xs": "4"
                            }
                          },
                          [
                            _c(
                              "vs-radio",
                              {
                                attrs: {
                                  "vs-name": "radioArrivalList",
                                  "vs-value": "3"
                                },
                                model: {
                                  value: _vm.vModelOptionArrivalList,
                                  callback: function($$v) {
                                    _vm.vModelOptionArrivalList = $$v
                                  },
                                  expression: "vModelOptionArrivalList"
                                }
                              },
                              [_vm._v("By Walk In")]
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
              : _vm._e()
          ],
          1
        )
      : _vm._e(),
    _vm._v(" "),
    _vm.reportCodeInt == _vm.reportList.ArrivalList
      ? _c(
          "div",
          [
            _c(
              "vs-row",
              { staticClass: "box-body  mb-2" },
              [
                _c(
                  "vs-col",
                  {
                    attrs: {
                      "vs-order": "1",
                      "vs-type": "flex",
                      "vs-justify": "flex-start",
                      "vs-align": "flex-start",
                      "vs-lg": "12",
                      "vs-sm": "12",
                      "vs-xs": "12"
                    }
                  },
                  [
                    _vm.reportCodeInt == _vm.reportList.ArrivalList
                      ? _c("div", [
                          _c("span", [_c("b", [_vm._v("Filter User ID")])])
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
              { staticClass: "box-body  mb-2" },
              [
                _c(
                  "vs-col",
                  {
                    attrs: {
                      "vs-order": "1",
                      "vs-type": "flex",
                      "vs-justify": "flex-start",
                      "vs-align": "center",
                      "vs-lg": "3",
                      "vs-sm": "3",
                      "vs-xs": "3"
                    }
                  },
                  [_c("span", [_vm._v("User ID")])]
                ),
                _vm._v(" "),
                _c(
                  "vs-col",
                  {
                    attrs: {
                      "vs-order": "2",
                      "vs-type": "flex",
                      "vs-justify": "flex-start",
                      "vs-align": "center",
                      "vs-lg": "9",
                      "vs-sm": "9",
                      "vs-xs": "9"
                    }
                  },
                  [
                    _c("v-select", {
                      staticClass: "w-full",
                      attrs: {
                        reduce: function(dataLookUser) {
                          return dataLookUser.code
                        },
                        label: "code",
                        options: _vm.dataLookUser
                      },
                      model: {
                        value: _vm.vModelLookUp.user,
                        callback: function($$v) {
                          _vm.$set(_vm.vModelLookUp, "user", $$v)
                        },
                        expression: "vModelLookUp.user"
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
      : _vm._e(),
    _vm._v(" "),
    _c("div", [
      _vm.reportCodeInt == _vm.reportList.ReservationList ||
      _vm.reportCodeInt == _vm.reportList.GroupReservation ||
      _vm.reportCodeInt == _vm.reportList.ExpectedArrival ||
      _vm.reportCodeInt == _vm.reportList.GuestInHouse ||
      _vm.reportCodeInt == _vm.reportList.GuestInHouseForecast ||
      _vm.reportCodeInt == _vm.reportList.EarlyCheckIn ||
      _vm.reportCodeInt == _vm.reportList.EarlyDeparture ||
      _vm.reportCodeInt == _vm.reportList.ExpectedDeparture ||
      _vm.reportCodeInt == _vm.reportList.ExtendedDeparture ||
      _vm.reportCodeInt == _vm.reportList.DepartureList ||
      _vm.reportCodeInt == _vm.reportList.ActualDepartureGuestList
        ? _c(
            "div",
            [
              _c(
                "vs-row",
                { staticClass: "box-body mb-2" },
                [
                  _c(
                    "vs-col",
                    {
                      attrs: {
                        "vs-order": "1",
                        "vs-type": "flex",
                        "vs-justify": "flex-start",
                        "vs-align": "flex-start",
                        "vs-lg": "12",
                        "vs-sm": "12",
                        "vs-xs": "12"
                      }
                    },
                    [
                      _vm.reportCodeInt == _vm.reportList.ReservationList
                        ? _c("div", [
                            _c("span", [
                              _c("b", [_vm._v("Filter Status, Company")])
                            ])
                          ])
                        : _vm.reportCodeInt == _vm.reportList.GroupReservation
                        ? _c("div", [
                            _c("span", [_c("b", [_vm._v("Filter Status")])])
                          ])
                        : _vm.reportCodeInt == _vm.reportList.ExpectedArrival ||
                          _vm.reportCodeInt == _vm.reportList.GuestInHouse ||
                          _vm.reportCodeInt ==
                            _vm.reportList.GuestInHouseForecast ||
                          _vm.reportCodeInt == _vm.reportList.EarlyCheckIn ||
                          _vm.reportCodeInt == _vm.reportList.EarlyDeparture ||
                          _vm.reportCodeInt == this.reportList.DayUse ||
                          _vm.reportCodeInt ==
                            _vm.reportList.ExpectedDeparture ||
                          _vm.reportCodeInt ==
                            _vm.reportList.ExtendedDeparture ||
                          _vm.reportCodeInt == _vm.reportList.DepartureList ||
                          _vm.reportCodeInt ==
                            _vm.reportList.ActualDepartureGuestList
                        ? _c("div", [
                            _c("span", [_c("b", [_vm._v("Filter Company")])])
                          ])
                        : _vm._e()
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
      _vm.reportCodeInt == _vm.reportList.ReservationList ||
      _vm.reportCodeInt == _vm.reportList.GroupReservation
        ? _c(
            "div",
            [
              _c(
                "vs-row",
                { staticClass: "box-body mb-2" },
                [
                  _c(
                    "vs-col",
                    {
                      attrs: {
                        "vs-order": "1",
                        "vs-type": "flex",
                        "vs-justify": "flex-start",
                        "vs-align": "center",
                        "vs-lg": "3",
                        "vs-sm": "3",
                        "vs-xs": "3"
                      }
                    },
                    [_c("span", [_vm._v("Status")])]
                  ),
                  _vm._v(" "),
                  _c(
                    "vs-col",
                    {
                      attrs: {
                        "vs-order": "2",
                        "vs-type": "flex",
                        "vs-justify": "flex-start",
                        "vs-align": "center",
                        "vs-lg": "9",
                        "vs-sm": "9",
                        "vs-xs": "9"
                      }
                    },
                    [
                      _c("v-select", {
                        staticClass: "w-full",
                        attrs: {
                          reduce: function(dataLookConstGuestStatus) {
                            return dataLookConstGuestStatus.code
                          },
                          label: "name",
                          options: _vm.dataLookConstGuestStatus
                        },
                        model: {
                          value: _vm.vModelLookUp.constGuestStatus,
                          callback: function($$v) {
                            _vm.$set(_vm.vModelLookUp, "constGuestStatus", $$v)
                          },
                          expression: "vModelLookUp.constGuestStatus"
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
        : _vm._e(),
      _vm._v(" "),
      _vm.reportCodeInt == _vm.reportList.ReservationList ||
      _vm.reportCodeInt == _vm.reportList.ExpectedArrival ||
      _vm.reportCodeInt == _vm.reportList.GuestInHouse ||
      _vm.reportCodeInt == _vm.reportList.GuestInHouseForecast ||
      _vm.reportCodeInt == _vm.reportList.EarlyCheckIn ||
      _vm.reportCodeInt == this.reportList.DayUse ||
      _vm.reportCodeInt == _vm.reportList.EarlyDeparture ||
      _vm.reportCodeInt == _vm.reportList.ExpectedDeparture ||
      _vm.reportCodeInt == _vm.reportList.ExtendedDeparture ||
      _vm.reportCodeInt == _vm.reportList.DepartureList ||
      _vm.reportCodeInt == _vm.reportList.ActualDepartureGuestList
        ? _c(
            "div",
            [
              _c(
                "vs-row",
                { staticClass: "box-body mb-2" },
                [
                  _c(
                    "vs-col",
                    {
                      attrs: {
                        "vs-order": "1",
                        "vs-type": "flex",
                        "vs-justify": "flex-start",
                        "vs-align": "center",
                        "vs-lg": "3",
                        "vs-sm": "3",
                        "vs-xs": "3"
                      }
                    },
                    [_c("span", [_vm._v("Company")])]
                  ),
                  _vm._v(" "),
                  _c(
                    "vs-col",
                    {
                      attrs: {
                        "vs-order": "2",
                        "vs-type": "flex",
                        "vs-justify": "flex-start",
                        "vs-align": "center",
                        "vs-lg": "9",
                        "vs-sm": "9",
                        "vs-xs": "9"
                      }
                    },
                    [
                      _c("v-select", {
                        staticClass: "w-full",
                        attrs: {
                          reduce: function(dataLookCompany) {
                            return dataLookCompany.code
                          },
                          label: "name",
                          options: _vm.dataLookCompany
                        },
                        model: {
                          value: _vm.vModelLookUp.company,
                          callback: function($$v) {
                            _vm.$set(_vm.vModelLookUp, "company", $$v)
                          },
                          expression: "vModelLookUp.company"
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
        : _vm._e()
    ]),
    _vm._v(" "),
    _vm.reportCodeInt == _vm.reportList.GuestInHousebyBusinessSource ||
    _vm.reportCodeInt == _vm.reportList.GuestInHousebyMarket ||
    _vm.reportCodeInt == _vm.reportList.GuestInHousebyBookingSource ||
    _vm.reportCodeInt == _vm.reportList.GuestInHousebyNationality
      ? _c(
          "div",
          [
            _c(
              "vs-row",
              { staticClass: "box-body mb-2" },
              [
                _c(
                  "vs-col",
                  {
                    attrs: {
                      "vs-order": "1",
                      "vs-type": "flex",
                      "vs-justify": "flex-start",
                      "vs-align": "flex-start",
                      "vs-lg": "12",
                      "vs-sm": "12",
                      "vs-xs": "12"
                    }
                  },
                  [
                    _c("div", [
                      _c("span", [_c("b", [_vm._v("Filter Options")])])
                    ])
                  ]
                )
              ],
              1
            ),
            _vm._v(" "),
            _vm.reportCodeInt == _vm.reportList.GuestInHousebyBusinessSource
              ? _c(
                  "div",
                  [
                    _c(
                      "vs-row",
                      { staticClass: "box-body mb-2" },
                      [
                        _c(
                          "vs-col",
                          {
                            attrs: {
                              "vs-order": "1",
                              "vs-type": "flex",
                              "vs-justify": "flex-start",
                              "vs-align": "center",
                              "vs-lg": "3",
                              "vs-sm": "3",
                              "vs-xs": "3"
                            }
                          },
                          [_c("span", [_vm._v("Business Source")])]
                        ),
                        _vm._v(" "),
                        _c(
                          "vs-col",
                          {
                            attrs: {
                              "vs-order": "2",
                              "vs-type": "flex",
                              "vs-justify": "flex-start",
                              "vs-align": "center",
                              "vs-lg": "9",
                              "vs-sm": "9",
                              "vs-xs": "9"
                            }
                          },
                          [
                            _c("v-select", {
                              staticClass: "w-full",
                              attrs: {
                                reduce: function(data) {
                                  return data.code
                                },
                                label: "name",
                                options: _vm.dataLookBusinessSource
                              },
                              model: {
                                value: _vm.vModelLookUp.businessSource,
                                callback: function($$v) {
                                  _vm.$set(
                                    _vm.vModelLookUp,
                                    "businessSource",
                                    $$v
                                  )
                                },
                                expression: "vModelLookUp.businessSource"
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
              : _vm._e(),
            _vm._v(" "),
            _vm.reportCodeInt == _vm.reportList.GuestInHousebyMarket
              ? _c(
                  "div",
                  [
                    _c(
                      "vs-row",
                      { staticClass: "box-body mb-2" },
                      [
                        _c(
                          "vs-col",
                          {
                            attrs: {
                              "vs-order": "1",
                              "vs-type": "flex",
                              "vs-justify": "flex-start",
                              "vs-align": "center",
                              "vs-lg": "3",
                              "vs-sm": "3",
                              "vs-xs": "3"
                            }
                          },
                          [_c("span", [_vm._v("Market List")])]
                        ),
                        _vm._v(" "),
                        _c(
                          "vs-col",
                          {
                            attrs: {
                              "vs-order": "2",
                              "vs-type": "flex",
                              "vs-justify": "flex-start",
                              "vs-align": "center",
                              "vs-lg": "9",
                              "vs-sm": "9",
                              "vs-xs": "9"
                            }
                          },
                          [
                            _c("v-select", {
                              staticClass: "w-full",
                              attrs: {
                                reduce: function(data) {
                                  return data.code
                                },
                                label: "name",
                                options: _vm.dataLookMarket
                              },
                              model: {
                                value: _vm.vModelLookUp.market,
                                callback: function($$v) {
                                  _vm.$set(_vm.vModelLookUp, "market", $$v)
                                },
                                expression: "vModelLookUp.market"
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
              : _vm._e(),
            _vm._v(" "),
            _vm.reportCodeInt == _vm.reportList.GuestInHousebyBookingSource
              ? _c(
                  "div",
                  [
                    _c(
                      "vs-row",
                      { staticClass: "box-body mb-2" },
                      [
                        _c(
                          "vs-col",
                          {
                            attrs: {
                              "vs-order": "1",
                              "vs-type": "flex",
                              "vs-justify": "flex-start",
                              "vs-align": "center",
                              "vs-lg": "3",
                              "vs-sm": "3",
                              "vs-xs": "3"
                            }
                          },
                          [_c("span", [_vm._v("Booking Src")])]
                        ),
                        _vm._v(" "),
                        _c(
                          "vs-col",
                          {
                            attrs: {
                              "vs-order": "2",
                              "vs-type": "flex",
                              "vs-justify": "flex-start",
                              "vs-align": "center",
                              "vs-lg": "9",
                              "vs-sm": "9",
                              "vs-xs": "9"
                            }
                          },
                          [
                            _c("v-select", {
                              staticClass: "w-full",
                              attrs: {
                                reduce: function(data) {
                                  return data.code
                                },
                                label: "name",
                                options: _vm.dataLookBookingSource
                              },
                              model: {
                                value: _vm.vModelLookUp.bookingSource,
                                callback: function($$v) {
                                  _vm.$set(
                                    _vm.vModelLookUp,
                                    "bookingSource",
                                    $$v
                                  )
                                },
                                expression: "vModelLookUp.bookingSource"
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
              : _vm._e(),
            _vm._v(" "),
            _vm.reportCodeInt == _vm.reportList.GuestInHousebyNationality
              ? _c(
                  "div",
                  [
                    _c(
                      "vs-row",
                      { staticClass: "box-body mb-2" },
                      [
                        _c(
                          "vs-col",
                          {
                            attrs: {
                              "vs-order": "1",
                              "vs-type": "flex",
                              "vs-justify": "flex-start",
                              "vs-align": "center",
                              "vs-lg": "3",
                              "vs-sm": "3",
                              "vs-xs": "3"
                            }
                          },
                          [_c("span", [_vm._v("Nationality")])]
                        ),
                        _vm._v(" "),
                        _c(
                          "vs-col",
                          {
                            attrs: {
                              "vs-order": "2",
                              "vs-type": "flex",
                              "vs-justify": "flex-start",
                              "vs-align": "center",
                              "vs-lg": "9",
                              "vs-sm": "9",
                              "vs-xs": "9"
                            }
                          },
                          [
                            _c("v-select", {
                              staticClass: "w-full",
                              attrs: {
                                reduce: function(data) {
                                  return data.code
                                },
                                label: "name",
                                options: _vm.dataLookNationality
                              },
                              model: {
                                value: _vm.vModelLookUp.nationality,
                                callback: function($$v) {
                                  _vm.$set(_vm.vModelLookUp, "nationality", $$v)
                                },
                                expression: "vModelLookUp.nationality"
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
              : _vm._e()
          ],
          1
        )
      : _vm._e(),
    _vm._v(" "),
    _vm.reportCodeInt == _vm.reportList.GuestInHouse ||
    _vm.reportCodeInt == _vm.reportList.GuestInHousebyBusinessSource ||
    _vm.reportCodeInt == _vm.reportList.GuestInHousebyMarket ||
    _vm.reportCodeInt == _vm.reportList.GuestInHousebyBookingSource ||
    _vm.reportCodeInt == _vm.reportList.GuestInHousebyGuestType ||
    _vm.reportCodeInt == _vm.reportList.GuestInHousebyCountry ||
    _vm.reportCodeInt == _vm.reportList.GuestInHousebyState ||
    _vm.reportCodeInt == _vm.reportList.GuestInHousebyCity ||
    _vm.reportCodeInt == _vm.reportList.GuestInHousebyNationality
      ? _c(
          "div",
          [
            _c(
              "vs-row",
              { staticClass: "box-body  mb-2" },
              [
                _c(
                  "vs-col",
                  {
                    attrs: {
                      "vs-order": "1",
                      "vs-type": "flex",
                      "vs-justify": "flex-start",
                      "vs-align": "center",
                      "vs-lg": "3",
                      "vs-sm": "3",
                      "vs-xs": "3"
                    }
                  },
                  [_c("span")]
                ),
                _vm._v(" "),
                _c(
                  "vs-col",
                  {
                    attrs: {
                      "vs-order": "2",
                      "vs-type": "flex",
                      "vs-justify": "flex-start",
                      "vs-align": "center",
                      "vs-lg": "9",
                      "vs-sm": "9",
                      "vs-xs": "9"
                    }
                  },
                  [
                    _c(
                      "vs-checkbox",
                      {
                        model: {
                          value: _vm.checkBox.showHouseUse,
                          callback: function($$v) {
                            _vm.$set(_vm.checkBox, "showHouseUse", $$v)
                          },
                          expression: "checkBox.showHouseUse"
                        }
                      },
                      [_vm._v("Show House Use")]
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
      : _vm._e(),
    _vm._v(" "),
    _vm.reportCodeInt == _vm.reportList.AdvancedPaymentDeposit ||
    _vm.reportCodeInt == _vm.reportList.FolioTransaction ||
    _vm.reportCodeInt == _vm.reportList.DailyFolioTransaction ||
    _vm.reportCodeInt == _vm.reportList.MonthlyFolioTransaction ||
    _vm.reportCodeInt == _vm.reportList.YearlyTransaction ||
    _vm.reportCodeInt == _vm.reportList.ChargeList ||
    _vm.reportCodeInt == _vm.reportList.DailyChargeList ||
    _vm.reportCodeInt == _vm.reportList.MonthlyChargeList ||
    _vm.reportCodeInt == _vm.reportList.YearlyChargeList ||
    _vm.reportCodeInt == _vm.reportList.CashierReport ||
    _vm.reportCodeInt == _vm.reportList.CashierReportReprint ||
    _vm.reportCodeInt == _vm.reportList.CashSummaryReport ||
    _vm.reportCodeInt == _vm.reportList.PaymentList ||
    _vm.reportCodeInt == _vm.reportList.DailyPaymentList ||
    _vm.reportCodeInt == _vm.reportList.MonthlyPaymentList ||
    _vm.reportCodeInt == _vm.reportList.YearlyPaymentList ||
    _vm.reportCodeInt == _vm.reportList.DailySales ||
    _vm.reportCodeInt == _vm.reportList.TransactionReportByStaff ||
    _vm.reportCodeInt == _vm.reportList.TaxBreakdownDetailed ||
    _vm.reportCodeInt == _vm.reportList.VoidList
      ? _c(
          "div",
          [
            _c(
              "vs-row",
              { staticClass: "box-body  mb-2" },
              [
                _c(
                  "vs-col",
                  {
                    attrs: {
                      "vs-order": "1",
                      "vs-type": "flex",
                      "vs-justify": "flex-start",
                      "vs-align": "flex-start",
                      "vs-lg": "12",
                      "vs-sm": "12",
                      "vs-xs": "12"
                    }
                  },
                  [
                    _c("div", [
                      _c("span", [_c("b", [_vm._v("Filter Option")])])
                    ])
                  ]
                )
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "vs-row",
              { staticClass: "box-body  mb-2" },
              [
                _c(
                  "vs-col",
                  {
                    attrs: {
                      "vs-order": "1",
                      "vs-type": "flex",
                      "vs-justify": "flex-start",
                      "vs-align": "center",
                      "vs-lg": "3",
                      "vs-sm": "3",
                      "vs-xs": "3"
                    }
                  },
                  [_c("span", [_vm._v("User ID")])]
                ),
                _vm._v(" "),
                _c(
                  "vs-col",
                  {
                    attrs: {
                      "vs-order": "2",
                      "vs-type": "flex",
                      "vs-justify": "flex-start",
                      "vs-align": "center",
                      "vs-lg": "9",
                      "vs-sm": "9",
                      "vs-xs": "9"
                    }
                  },
                  [
                    _c("v-select", {
                      staticClass: "w-full",
                      attrs: {
                        reduce: function(dataLookUser) {
                          return dataLookUser.code
                        },
                        label: "code",
                        options: _vm.dataLookUser
                      },
                      model: {
                        value: _vm.vModelLookUp.user,
                        callback: function($$v) {
                          _vm.$set(_vm.vModelLookUp, "user", $$v)
                        },
                        expression: "vModelLookUp.user"
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
              { staticClass: "box-body  mb-2" },
              [
                _c(
                  "vs-col",
                  {
                    attrs: {
                      "vs-order": "1",
                      "vs-type": "flex",
                      "vs-justify": "flex-start",
                      "vs-align": "center",
                      "vs-lg": "3",
                      "vs-sm": "3",
                      "vs-xs": "3"
                    }
                  },
                  [_c("span", [_vm._v("Shift")])]
                ),
                _vm._v(" "),
                _c(
                  "vs-col",
                  {
                    attrs: {
                      "vs-order": "2",
                      "vs-type": "flex",
                      "vs-justify": "flex-start",
                      "vs-align": "center",
                      "vs-lg": "9",
                      "vs-sm": "9",
                      "vs-xs": "9"
                    }
                  },
                  [
                    _c("v-select", {
                      staticClass: "w-full",
                      attrs: {
                        reduce: function(data) {
                          return data.shift
                        },
                        label: "shift",
                        options: _vm.dataLookShift
                      },
                      model: {
                        value: _vm.vModelLookUp.shift,
                        callback: function($$v) {
                          _vm.$set(_vm.vModelLookUp, "shift", $$v)
                        },
                        expression: "vModelLookUp.shift"
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
              { staticClass: "box-body  mb-2" },
              [
                _c(
                  "vs-col",
                  {
                    attrs: {
                      "vs-order": "1",
                      "vs-type": "flex",
                      "vs-justify": "flex-start",
                      "vs-align": "center",
                      "vs-lg": "3",
                      "vs-sm": "3",
                      "vs-xs": "3"
                    }
                  },
                  [_c("span", [_vm._v("Sub Dept.")])]
                ),
                _vm._v(" "),
                _c(
                  "vs-col",
                  {
                    attrs: {
                      "vs-order": "2",
                      "vs-type": "flex",
                      "vs-justify": "flex-start",
                      "vs-align": "center",
                      "vs-lg": "9",
                      "vs-sm": "9",
                      "vs-xs": "9"
                    }
                  },
                  [
                    _c("v-select", {
                      staticClass: "w-full",
                      attrs: {
                        reduce: function(data) {
                          return data.code
                        },
                        label: "name",
                        options: _vm.dataLookSubDepartment
                      },
                      model: {
                        value: _vm.vModelLookUp.subDepartment,
                        callback: function($$v) {
                          _vm.$set(_vm.vModelLookUp, "subDepartment", $$v)
                        },
                        expression: "vModelLookUp.subDepartment"
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
              { staticClass: "box-body  mb-2" },
              [
                _c(
                  "vs-col",
                  {
                    attrs: {
                      "vs-order": "1",
                      "vs-type": "flex",
                      "vs-justify": "flex-start",
                      "vs-align": "center",
                      "vs-lg": "3",
                      "vs-sm": "3",
                      "vs-xs": "3"
                    }
                  },
                  [_c("span", [_vm._v("Account")])]
                ),
                _vm._v(" "),
                _c(
                  "vs-col",
                  {
                    attrs: {
                      "vs-order": "2",
                      "vs-type": "flex",
                      "vs-justify": "flex-start",
                      "vs-align": "center",
                      "vs-lg": "9",
                      "vs-sm": "9",
                      "vs-xs": "9"
                    }
                  },
                  [
                    _c("v-select", {
                      staticClass: "w-full",
                      attrs: {
                        reduce: function(data) {
                          return data.code
                        },
                        label: "name",
                        options: _vm.dataLookAccount
                      },
                      model: {
                        value: _vm.vModelLookUp.account,
                        callback: function($$v) {
                          _vm.$set(_vm.vModelLookUp, "account", $$v)
                        },
                        expression: "vModelLookUp.account"
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
              { staticClass: "box-body  mb-2" },
              [
                _c(
                  "vs-col",
                  {
                    attrs: {
                      "vs-order": "1",
                      "vs-type": "flex",
                      "vs-justify": "flex-start",
                      "vs-align": "center",
                      "vs-lg": "3",
                      "vs-sm": "3",
                      "vs-xs": "3"
                    }
                  },
                  [_c("span", [_vm._v("Sub Group Account")])]
                ),
                _vm._v(" "),
                _c(
                  "vs-col",
                  {
                    attrs: {
                      "vs-order": "2",
                      "vs-type": "flex",
                      "vs-justify": "flex-start",
                      "vs-align": "center",
                      "vs-lg": "9",
                      "vs-sm": "9",
                      "vs-xs": "9"
                    }
                  },
                  [
                    _c("v-select", {
                      staticClass: "w-full",
                      attrs: {
                        reduce: function(data) {
                          return data.code
                        },
                        label: "name",
                        options: _vm.dataLookSubAccount
                      },
                      model: {
                        value: _vm.vModelLookUp.accountSubGroup,
                        callback: function($$v) {
                          _vm.$set(_vm.vModelLookUp, "accountSubGroup", $$v)
                        },
                        expression: "vModelLookUp.accountSubGroup"
                      }
                    })
                  ],
                  1
                )
              ],
              1
            ),
            _vm._v(" "),
            _vm.reportCodeInt == _vm.reportList.ChargeList
              ? _c(
                  "vs-row",
                  { staticClass: "box-body  mb-2" },
                  [
                    _c(
                      "vs-col",
                      {
                        attrs: {
                          "vs-order": "1",
                          "vs-type": "flex",
                          "vs-justify": "flex-start",
                          "vs-align": "center",
                          "vs-lg": "3",
                          "vs-sm": "3",
                          "vs-xs": "3"
                        }
                      },
                      [_c("span", [_vm._v("Company")])]
                    ),
                    _vm._v(" "),
                    _c(
                      "vs-col",
                      {
                        attrs: {
                          "vs-order": "2",
                          "vs-type": "flex",
                          "vs-justify": "flex-start",
                          "vs-align": "center",
                          "vs-lg": "9",
                          "vs-sm": "9",
                          "vs-xs": "9"
                        }
                      },
                      [
                        _c("v-select", {
                          staticClass: "w-full",
                          attrs: {
                            reduce: function(data) {
                              return data.code
                            },
                            label: "name",
                            options: _vm.dataLookCompany
                          },
                          model: {
                            value: _vm.vModelLookUp.company,
                            callback: function($$v) {
                              _vm.$set(_vm.vModelLookUp, "company", $$v)
                            },
                            expression: "vModelLookUp.company"
                          }
                        })
                      ],
                      1
                    )
                  ],
                  1
                )
              : _vm._e(),
            _vm._v(" "),
            _vm.reportCodeInt == _vm.reportList.ChargeList
              ? _c(
                  "vs-row",
                  { staticClass: "box-body  mb-2" },
                  [
                    _c(
                      "vs-col",
                      {
                        attrs: {
                          "vs-order": "1",
                          "vs-type": "flex",
                          "vs-justify": "flex-start",
                          "vs-align": "center",
                          "vs-lg": "3",
                          "vs-sm": "3",
                          "vs-xs": "3"
                        }
                      },
                      [_c("span", [_vm._v("Business Source")])]
                    ),
                    _vm._v(" "),
                    _c(
                      "vs-col",
                      {
                        attrs: {
                          "vs-order": "2",
                          "vs-type": "flex",
                          "vs-justify": "flex-start",
                          "vs-align": "center",
                          "vs-lg": "9",
                          "vs-sm": "9",
                          "vs-xs": "9"
                        }
                      },
                      [
                        _c("v-select", {
                          staticClass: "w-full",
                          attrs: {
                            reduce: function(data) {
                              return data.code
                            },
                            label: "name",
                            options: _vm.dataLookBusinessSource
                          },
                          model: {
                            value: _vm.vModelLookUp.businessSource,
                            callback: function($$v) {
                              _vm.$set(_vm.vModelLookUp, "businessSource", $$v)
                            },
                            expression: "vModelLookUp.businessSource"
                          }
                        })
                      ],
                      1
                    )
                  ],
                  1
                )
              : _vm._e(),
            _vm._v(" "),
            _vm.reportCodeInt == _vm.reportList.ChargeList ||
            _vm.reportCodeInt == _vm.reportList.YearlyChargeList
              ? _c(
                  "vs-row",
                  { staticClass: "box-body  mb-2" },
                  [
                    _c(
                      "vs-col",
                      {
                        attrs: {
                          "vs-order": "1",
                          "vs-type": "flex",
                          "vs-justify": "flex-start",
                          "vs-align": "center",
                          "vs-lg": "3",
                          "vs-sm": "3",
                          "vs-xs": "3"
                        }
                      },
                      [_c("span")]
                    ),
                    _vm._v(" "),
                    _c(
                      "vs-col",
                      {
                        attrs: {
                          "vs-order": "2",
                          "vs-type": "flex",
                          "vs-justify": "flex-start",
                          "vs-align": "center",
                          "vs-lg": "9",
                          "vs-sm": "9",
                          "vs-xs": "9"
                        }
                      },
                      [
                        _c(
                          "vs-checkbox",
                          {
                            model: {
                              value: _vm.checkBox.showAccountPayable,
                              callback: function($$v) {
                                _vm.$set(
                                  _vm.checkBox,
                                  "showAccountPayable",
                                  $$v
                                )
                              },
                              expression: "checkBox.showAccountPayable"
                            }
                          },
                          [_vm._v("Show Account Payable")]
                        )
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
      : _vm._e(),
    _vm._v(" "),
    _vm.reportCodeInt == _vm.reportList.FolioTransaction ||
    _vm.reportCodeInt == _vm.reportList.DailyFolioTransaction ||
    _vm.reportCodeInt == _vm.reportList.MonthlyFolioTransaction ||
    _vm.reportCodeInt == _vm.reportList.YearlyTransaction ||
    _vm.reportCodeInt == _vm.reportList.ChargeList ||
    _vm.reportCodeInt == _vm.reportList.DailyChargeList ||
    _vm.reportCodeInt == _vm.reportList.MonthlyChargeList ||
    _vm.reportCodeInt == _vm.reportList.YearlyChargeList ||
    _vm.reportCodeInt == _vm.reportList.CashierReport ||
    _vm.reportCodeInt == _vm.reportList.CashierReportReprint ||
    _vm.reportCodeInt == _vm.reportList.CashSummaryReport ||
    _vm.reportCodeInt == _vm.reportList.PaymentList ||
    _vm.reportCodeInt == _vm.reportList.DailyPaymentList ||
    _vm.reportCodeInt == _vm.reportList.MonthlyPaymentList ||
    _vm.reportCodeInt == _vm.reportList.YearlyPaymentList ||
    _vm.reportCodeInt == _vm.reportList.TransactionReportByStaff ||
    _vm.reportCodeInt == _vm.reportList.TaxBreakdownDetailed ||
    _vm.reportCodeInt == _vm.reportList.VoidList
      ? _c(
          "div",
          [
            _c(
              "vs-row",
              { staticClass: "box-body  mb-2" },
              [
                _c(
                  "vs-col",
                  {
                    attrs: {
                      "vs-order": "1",
                      "vs-type": "flex",
                      "vs-justify": "flex-start"
                    }
                  },
                  [_c("span", [_c("b", [_vm._v("Folio Type Options")])])]
                )
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "vs-row",
              {
                staticClass: "box-body  mb-2",
                attrs: { "vs-type": "flex", "vs-justify": "space-between" }
              },
              [
                _c(
                  "vs-col",
                  {
                    attrs: {
                      "vs-order": "2",
                      "vs-type": "flex",
                      "vs-justify": "flex-start",
                      "vs-align": "center",
                      "vs-lg": "4",
                      "vs-sm": "4",
                      "vs-xs": "4"
                    }
                  },
                  [
                    _c(
                      "vs-checkbox",
                      {
                        model: {
                          value: _vm.checkBox.guestFolio,
                          callback: function($$v) {
                            _vm.$set(_vm.checkBox, "guestFolio", $$v)
                          },
                          expression: "checkBox.guestFolio"
                        }
                      },
                      [_vm._v("Guest Folio")]
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "vs-col",
                  {
                    attrs: {
                      "vs-order": "2",
                      "vs-type": "flex",
                      "vs-justify": "flex-start",
                      "vs-align": "center",
                      "vs-lg": "4",
                      "vs-sm": "4",
                      "vs-xs": "4"
                    }
                  },
                  [
                    _c(
                      "vs-checkbox",
                      {
                        model: {
                          value: _vm.checkBox.deskFolio,
                          callback: function($$v) {
                            _vm.$set(_vm.checkBox, "deskFolio", $$v)
                          },
                          expression: "checkBox.deskFolio"
                        }
                      },
                      [_vm._v("Desk Folio")]
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "vs-col",
                  {
                    attrs: {
                      "vs-order": "2",
                      "vs-type": "flex",
                      "vs-justify": "flex-start",
                      "vs-align": "center",
                      "vs-lg": "4",
                      "vs-sm": "4",
                      "vs-xs": "4"
                    }
                  },
                  [
                    _c(
                      "vs-checkbox",
                      {
                        model: {
                          value: _vm.checkBox.masterFolio,
                          callback: function($$v) {
                            _vm.$set(_vm.checkBox, "masterFolio", $$v)
                          },
                          expression: "checkBox.masterFolio"
                        }
                      },
                      [_vm._v("Master Folio")]
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
      : _vm._e(),
    _vm._v(" "),
    _vm.reportCodeInt == _vm.reportList.FolioTransaction ||
    _vm.reportCodeInt == _vm.reportList.FolioList ||
    _vm.reportCodeInt == _vm.reportList.MasterFolio ||
    _vm.reportCodeInt == _vm.reportList.DeskFolio ||
    _vm.reportCodeInt == _vm.reportList.DailyFolioTransaction ||
    _vm.reportCodeInt == _vm.reportList.MonthlyFolioTransaction ||
    _vm.reportCodeInt == _vm.reportList.YearlyTransaction ||
    _vm.reportCodeInt == _vm.reportList.ChargeList ||
    _vm.reportCodeInt == _vm.reportList.DailyChargeList ||
    _vm.reportCodeInt == _vm.reportList.MonthlyChargeList ||
    _vm.reportCodeInt == _vm.reportList.YearlyChargeList ||
    _vm.reportCodeInt == _vm.reportList.CashierReport ||
    _vm.reportCodeInt == _vm.reportList.CashierReportReprint ||
    _vm.reportCodeInt == _vm.reportList.CashSummaryReport ||
    _vm.reportCodeInt == _vm.reportList.PaymentList ||
    _vm.reportCodeInt == _vm.reportList.DailyPaymentList ||
    _vm.reportCodeInt == _vm.reportList.MonthlyPaymentList ||
    _vm.reportCodeInt == _vm.reportList.YearlyPaymentList ||
    _vm.reportCodeInt == _vm.reportList.TransactionByStaff ||
    _vm.reportCodeInt == _vm.reportList.TaxBreakdownDetailed
      ? _c(
          "div",
          [
            _c(
              "vs-row",
              { staticClass: "box-body  mb-2" },
              [
                _c(
                  "vs-col",
                  {
                    attrs: {
                      "vs-order": "1",
                      "vs-type": "flex",
                      "vs-justify": "flex-start"
                    }
                  },
                  [_c("span", [_c("b", [_vm._v("Folio Status Options")])])]
                )
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "vs-row",
              {
                staticClass: "box-body mb-2",
                attrs: { "vs-type": "flex", "vs-justify": "flex-start" }
              },
              [
                _c(
                  "vs-col",
                  {
                    attrs: {
                      "vs-order": "2",
                      "vs-type": "flex",
                      "vs-justify": "flex-start",
                      "vs-align": "center",
                      "vs-lg": "4",
                      "vs-sm": "4",
                      "vs-xs": "4"
                    }
                  },
                  [
                    _c(
                      "vs-checkbox",
                      {
                        model: {
                          value: _vm.checkBox.folioStatusOpen,
                          callback: function($$v) {
                            _vm.$set(_vm.checkBox, "folioStatusOpen", $$v)
                          },
                          expression: "checkBox.folioStatusOpen"
                        }
                      },
                      [_vm._v("Open")]
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "vs-col",
                  {
                    staticClass: "ml-5",
                    attrs: {
                      "vs-order": "2",
                      "vs-type": "flex",
                      "vs-justify": "flex-start",
                      "vs-align": "center",
                      "vs-lg": "4",
                      "vs-sm": "4",
                      "vs-xs": "4"
                    }
                  },
                  [
                    _c(
                      "vs-checkbox",
                      {
                        model: {
                          value: _vm.checkBox.folioStatusClosed,
                          callback: function($$v) {
                            _vm.$set(_vm.checkBox, "folioStatusClosed", $$v)
                          },
                          expression: "checkBox.folioStatusClosed"
                        }
                      },
                      [_vm._v("Closed")]
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
      : _vm._e(),
    _vm._v(" "),
    _vm.reportCodeInt == _vm.reportList.RoomRate ||
    _vm.reportCodeInt == _vm.reportList.Package
      ? _c(
          "div",
          [
            _c(
              "vs-row",
              { staticClass: "box-body  mb-2" },
              [
                _c(
                  "vs-col",
                  {
                    attrs: {
                      "vs-order": "1",
                      "vs-type": "flex",
                      "vs-justify": "flex-start"
                    }
                  },
                  [_c("span", [_c("b", [_vm._v("Status")])])]
                )
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "vs-row",
              {
                staticClass: "box-body mb-2",
                attrs: { "vs-type": "flex", "vs-justify": "flex-start" }
              },
              [
                _c(
                  "vs-col",
                  {
                    attrs: {
                      "vs-order": "1",
                      "vs-type": "flex",
                      "vs-justify": "flex-start",
                      "vs-align": "center",
                      "vs-lg": "4",
                      "vs-sm": "4",
                      "vs-xs": "4"
                    }
                  },
                  [
                    _c(
                      "vs-radio",
                      {
                        attrs: { "vs-name": "radiosStatus", "vs-value": "1" },
                        model: {
                          value: _vm.radios.status,
                          callback: function($$v) {
                            _vm.$set(_vm.radios, "status", $$v)
                          },
                          expression: "radios.status"
                        }
                      },
                      [_vm._v("All")]
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "vs-col",
                  {
                    attrs: {
                      "vs-order": "2",
                      "vs-type": "flex",
                      "vs-justify": "flex-start",
                      "vs-align": "center",
                      "vs-lg": "4",
                      "vs-sm": "4",
                      "vs-xs": "4"
                    }
                  },
                  [
                    _c(
                      "vs-radio",
                      {
                        attrs: { "vs-name": "radiosStatus", "vs-value": "2" },
                        model: {
                          value: _vm.radios.status,
                          callback: function($$v) {
                            _vm.$set(_vm.radios, "status", $$v)
                          },
                          expression: "radios.status"
                        }
                      },
                      [_vm._v("Active")]
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "vs-col",
                  {
                    attrs: {
                      "vs-order": "3",
                      "vs-type": "flex",
                      "vs-justify": "flex-start",
                      "vs-align": "center",
                      "vs-lg": "4",
                      "vs-sm": "4",
                      "vs-xs": "4"
                    }
                  },
                  [
                    _c(
                      "vs-radio",
                      {
                        attrs: { "vs-name": "radiosStatus", "vs-value": "3" },
                        model: {
                          value: _vm.radios.status,
                          callback: function($$v) {
                            _vm.$set(_vm.radios, "status", $$v)
                          },
                          expression: "radios.status"
                        }
                      },
                      [_vm._v("Non Active")]
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
      : _vm._e(),
    _vm._v(" "),
    _vm.reportCodeInt == _vm.reportList.RoomStatus
      ? _c(
          "div",
          [
            _c(
              "vs-row",
              { staticClass: "box-body  mb-2" },
              [
                _c(
                  "vs-col",
                  {
                    attrs: {
                      "vs-order": "1",
                      "vs-type": "flex",
                      "vs-justify": "flex-start",
                      "vs-align": "center",
                      "vs-lg": "3",
                      "vs-sm": "3",
                      "vs-xs": "3"
                    }
                  },
                  [_c("span", [_vm._v("Building")])]
                ),
                _vm._v(" "),
                _c(
                  "vs-col",
                  {
                    attrs: {
                      "vs-order": "2",
                      "vs-type": "flex",
                      "vs-justify": "flex-start",
                      "vs-align": "center",
                      "vs-lg": "9",
                      "vs-sm": "9",
                      "vs-xs": "9"
                    }
                  },
                  [
                    _c("v-select", {
                      staticClass: "w-full",
                      attrs: {
                        reduce: function(data) {
                          return data.building
                        },
                        label: "building",
                        options: _vm.dataLookBuilding
                      },
                      model: {
                        value: _vm.vModelLookUp.building,
                        callback: function($$v) {
                          _vm.$set(_vm.vModelLookUp, "building", $$v)
                        },
                        expression: "vModelLookUp.building"
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
              { staticClass: "box-body  mb-2" },
              [
                _c(
                  "vs-col",
                  {
                    attrs: {
                      "vs-order": "1",
                      "vs-type": "flex",
                      "vs-justify": "flex-start",
                      "vs-align": "center",
                      "vs-lg": "3",
                      "vs-sm": "3",
                      "vs-xs": "3"
                    }
                  },
                  [_c("span", [_vm._v("Floor")])]
                ),
                _vm._v(" "),
                _c(
                  "vs-col",
                  {
                    attrs: {
                      "vs-order": "2",
                      "vs-type": "flex",
                      "vs-justify": "flex-start",
                      "vs-align": "center",
                      "vs-lg": "9",
                      "vs-sm": "9",
                      "vs-xs": "9"
                    }
                  },
                  [
                    _c("v-select", {
                      staticClass: "w-full",
                      attrs: {
                        reduce: function(data) {
                          return data.floor
                        },
                        label: "floor",
                        options: _vm.dataLookFloor
                      },
                      model: {
                        value: _vm.vModelLookUp.floor,
                        callback: function($$v) {
                          _vm.$set(_vm.vModelLookUp, "floor", $$v)
                        },
                        expression: "vModelLookUp.floor"
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
              { staticClass: "box-body  mb-2" },
              [
                _c(
                  "vs-col",
                  {
                    attrs: {
                      "vs-order": "1",
                      "vs-type": "flex",
                      "vs-justify": "flex-start",
                      "vs-align": "center",
                      "vs-lg": "3",
                      "vs-sm": "3",
                      "vs-xs": "3"
                    }
                  },
                  [_c("span", [_vm._v("Status")])]
                ),
                _vm._v(" "),
                _c(
                  "vs-col",
                  {
                    attrs: {
                      "vs-order": "2",
                      "vs-type": "flex",
                      "vs-justify": "flex-start",
                      "vs-align": "center",
                      "vs-lg": "9",
                      "vs-sm": "9",
                      "vs-xs": "9"
                    }
                  },
                  [
                    _c("v-select", {
                      staticClass: "w-full",
                      attrs: {
                        reduce: function(data) {
                          return data.code
                        },
                        label: "name",
                        options: _vm.dataLookRoomStatus
                      },
                      model: {
                        value: _vm.vModelLookUp.roomStatus,
                        callback: function($$v) {
                          _vm.$set(_vm.vModelLookUp, "roomStatus", $$v)
                        },
                        expression: "vModelLookUp.roomStatus"
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
      : _vm._e(),
    _vm._v(" "),
    _vm.reportCodeInt == _vm.reportList.Company
      ? _c(
          "div",
          [
            _c(
              "vs-row",
              { staticClass: "box-body  mb-2" },
              [
                _c(
                  "vs-col",
                  {
                    attrs: {
                      "vs-order": "1",
                      "vs-type": "flex",
                      "vs-justify": "flex-start"
                    }
                  },
                  [_c("span", [_c("b", [_vm._v("Filter Options")])])]
                )
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "vs-row",
              { staticClass: "box-body  mb-2" },
              [
                _c(
                  "vs-col",
                  {
                    attrs: {
                      "vs-order": "1",
                      "vs-type": "flex",
                      "vs-justify": "flex-start",
                      "vs-align": "center",
                      "vs-lg": "3",
                      "vs-sm": "3",
                      "vs-xs": "3"
                    }
                  },
                  [_c("span", [_vm._v("Company Type")])]
                ),
                _vm._v(" "),
                _c(
                  "vs-col",
                  {
                    attrs: {
                      "vs-order": "2",
                      "vs-type": "flex",
                      "vs-justify": "flex-start",
                      "vs-align": "center",
                      "vs-lg": "9",
                      "vs-sm": "9",
                      "vs-xs": "9"
                    }
                  },
                  [
                    _c("v-select", {
                      staticClass: "w-full",
                      attrs: {
                        reduce: function(data) {
                          return data.code
                        },
                        label: "name",
                        options: _vm.dataLookCompanyType
                      },
                      model: {
                        value: _vm.vModelLookUp.companyType,
                        callback: function($$v) {
                          _vm.$set(_vm.vModelLookUp, "companyType", $$v)
                        },
                        expression: "vModelLookUp.companyType"
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
      : _vm._e(),
    _vm._v(" "),
    _vm.reportCodeInt == _vm.reportList.PhoneBook
      ? _c(
          "div",
          [
            _c(
              "vs-row",
              { staticClass: "box-body  mb-2" },
              [
                _c(
                  "vs-col",
                  {
                    attrs: {
                      "vs-order": "1",
                      "vs-type": "flex",
                      "vs-justify": "flex-start"
                    }
                  },
                  [_c("span", [_c("b", [_vm._v("Filter Options")])])]
                )
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "vs-row",
              { staticClass: "box-body  mb-2" },
              [
                _c(
                  "vs-col",
                  {
                    attrs: {
                      "vs-order": "1",
                      "vs-type": "flex",
                      "vs-justify": "flex-start",
                      "vs-align": "center",
                      "vs-lg": "3",
                      "vs-sm": "3",
                      "vs-xs": "3"
                    }
                  },
                  [_c("span", [_vm._v("Phone Book Type")])]
                ),
                _vm._v(" "),
                _c(
                  "vs-col",
                  {
                    attrs: {
                      "vs-order": "2",
                      "vs-type": "flex",
                      "vs-justify": "flex-start",
                      "vs-align": "center",
                      "vs-lg": "9",
                      "vs-sm": "9",
                      "vs-xs": "9"
                    }
                  },
                  [
                    _c("v-select", {
                      staticClass: "w-full",
                      attrs: {
                        reduce: function(data) {
                          return data.code
                        },
                        label: "name",
                        options: _vm.dataLookPhoneBookType
                      },
                      model: {
                        value: _vm.vModelLookUp.phoneBookType,
                        callback: function($$v) {
                          _vm.$set(_vm.vModelLookUp, "phoneBookType", $$v)
                        },
                        expression: "vModelLookUp.phoneBookType"
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
      : _vm._e(),
    _vm._v(" "),
    _vm.reportCodeInt == _vm.reportList.LogUser ||
    _vm.reportCodeInt == _vm.reportList.LogShift ||
    _vm.reportCodeInt == _vm.reportList.LogMoveRoom ||
    _vm.reportCodeInt == _vm.reportList.LogTransferTransaction ||
    _vm.reportCodeInt == _vm.reportList.LogSpecialAccess ||
    _vm.reportCodeInt == _vm.reportList.KeyLockHistory ||
    _vm.reportCodeInt == _vm.reportList.LogVoidTransaction ||
    _vm.reportCodeInt == _vm.reportList.LogVoidTransaction ||
    _vm.reportCodeInt == _vm.reportList.LogHouseKeeping ||
    _vm.reportCodeInt == _vm.reportList.LogPABX
      ? _c(
          "div",
          [
            _c(
              "vs-row",
              { staticClass: "box-body  mb-2" },
              [
                _c(
                  "vs-col",
                  {
                    attrs: {
                      "vs-order": "1",
                      "vs-type": "flex",
                      "vs-justify": "flex-start"
                    }
                  },
                  [_c("span", [_c("b", [_vm._v("Filter Options")])])]
                )
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "vs-row",
              { staticClass: "box-body  mb-2" },
              [
                _c(
                  "vs-col",
                  {
                    attrs: {
                      "vs-order": "1",
                      "vs-type": "flex",
                      "vs-justify": "flex-start",
                      "vs-align": "center",
                      "vs-lg": "3",
                      "vs-sm": "3",
                      "vs-xs": "3"
                    }
                  },
                  [_c("span", [_vm._v("User ID")])]
                ),
                _vm._v(" "),
                _c(
                  "vs-col",
                  {
                    attrs: {
                      "vs-order": "2",
                      "vs-type": "flex",
                      "vs-justify": "flex-start",
                      "vs-align": "center",
                      "vs-lg": "9",
                      "vs-sm": "9",
                      "vs-xs": "9"
                    }
                  },
                  [
                    _c("v-select", {
                      staticClass: "w-full",
                      attrs: {
                        reduce: function(data) {
                          return data.code
                        },
                        label: "code",
                        options: _vm.dataLookUser
                      },
                      model: {
                        value: _vm.vModelLookUp.user,
                        callback: function($$v) {
                          _vm.$set(_vm.vModelLookUp, "user", $$v)
                        },
                        expression: "vModelLookUp.user"
                      }
                    })
                  ],
                  1
                )
              ],
              1
            ),
            _vm._v(" "),
            _vm.reportCodeInt == _vm.reportList.LogUser
              ? _c(
                  "vs-row",
                  { staticClass: "box-body  mb-2" },
                  [
                    _c(
                      "vs-col",
                      {
                        attrs: {
                          "vs-order": "1",
                          "vs-type": "flex",
                          "vs-justify": "flex-start",
                          "vs-align": "center",
                          "vs-lg": "3",
                          "vs-sm": "3",
                          "vs-xs": "3"
                        }
                      },
                      [_c("span", [_vm._v("Action")])]
                    ),
                    _vm._v(" "),
                    _c(
                      "vs-col",
                      {
                        attrs: {
                          "vs-order": "2",
                          "vs-type": "flex",
                          "vs-justify": "flex-start",
                          "vs-align": "center",
                          "vs-lg": "9",
                          "vs-sm": "9",
                          "vs-xs": "9"
                        }
                      },
                      [
                        _c("v-select", {
                          staticClass: "w-full",
                          attrs: {
                            reduce: function(data) {
                              return data.id
                            },
                            label: "name",
                            options: _vm.dataLookLogUserAction
                          },
                          model: {
                            value: _vm.vModelLookUp.logUserAction,
                            callback: function($$v) {
                              _vm.$set(_vm.vModelLookUp, "logUserAction", $$v)
                            },
                            expression: "vModelLookUp.logUserAction"
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
      : _vm._e()
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/utils/alert.js":
/*!*****************************************!*\
  !*** ./resources/js/src/utils/alert.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lang__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/lang */ "./resources/js/src/lang/index.js");
/* harmony import */ var _store_store_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/store/store.js */ "./resources/js/src/store/store.js");
/* harmony import */ var _utils_dialog_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/utils/dialog.js */ "./resources/js/src/utils/dialog.js");



var vm = new Vue({
  i18n: _lang__WEBPACK_IMPORTED_MODULE_0__["default"],
  methods: {
    acceptAlertSucces: function acceptAlertSucces() {
      var _this = this;

      setTimeout(function () {
        return _this.$vs.notify({
          color: 'success',
          title: _this.$t('message.saveTitleSuccess'),
          text: _this.$t('message.saveSuccess'),
          position: _this.notifPosition
        });
      }, 1000);
    },
    acceptAlertSuccesCancelCheckIn: function acceptAlertSuccesCancelCheckIn() {
      var _this2 = this;

      setTimeout(function () {
        return _this2.$vs.notify({
          color: 'success',
          title: _this2.$t('message.saveTitleSuccess'),
          text: _this2.$t('message.saveSuccessCancelCheckIn'),
          position: _this2.notifPosition
        });
      }, 1000);
    },
    acceptAlertSuccesWithText: function acceptAlertSuccesWithText(text) {
      var _this3 = this;

      setTimeout(function () {
        return _this3.$vs.notify({
          color: 'success',
          title: _this3.$t('message.saveTitleSuccess'),
          text: text,
          position: _this3.notifPosition
        });
      }, 1000);
    },
    inputRequiredAlert: function inputRequiredAlert() {
      this.$vs.notify({
        color: 'warning',
        title: this.$t('message.informationTitle'),
        text: this.$t('message.inputRequired'),
        position: this.notifPosition
      });
    },
    deleteAlertSuccess: function deleteAlertSuccess() {
      var _this4 = this;

      setTimeout(function () {
        return _this4.$vs.notify({
          color: 'danger',
          title: _this4.$t('message.informationTitle'),
          text: _this4.$t('message.deleteSuccess'),
          position: _this4.notifPosition
        });
      }, 1000);
    },
    errorFetchDataAlert: function errorFetchDataAlert(error) {
      this.$vs.notify({
        color: 'danger',
        title: this.$t('message.errorTitle'),
        text: error,
        // || this.$t('message.errorFetchData'),
        position: this.notifPosition
      });
    },
    errorSaveDataAlert: function errorSaveDataAlert(message) {
      this.$vs.notify({
        color: 'danger',
        title: this.$t('message.informationTitle'),
        text: message ? message : this.$t('message.errorSaveData'),
        position: this.notifPosition
      });
    },
    errorSaveExistAccountData: function errorSaveExistAccountData(message) {
      this.$vs.notify({
        color: 'danger',
        title: this.$t('message.informationTitle'),
        text: message ? message : this.$t('message.errorSaveExistAccountData'),
        position: this.notifPosition
      });
    },
    errorDeleteDataAlert: function errorDeleteDataAlert(message) {
      this.$vs.notify({
        color: 'danger',
        title: this.$t('message.errorTitle'),
        text: message ? message : this.$t('message.errorDeleteData'),
        position: this.notifPosition
      });
    },
    errorModifyingDataAlert: function errorModifyingDataAlert(message) {
      this.$vs.notify({
        color: 'danger',
        title: this.$t('message.errorTitle'),
        text: message ? message : this.$t('message.errorModifyingData'),
        position: this.notifPosition
      });
    },
    errorCashRefundAlert: function errorCashRefundAlert(message) {
      this.$vs.notify({
        color: 'danger',
        title: this.$t('message.errorTitle'),
        text: message ? message : this.$t('message.errorModifyingData'),
        position: this.notifPosition
      });
    }
  }
});
/* harmony default export */ __webpack_exports__["default"] = (vm);

/***/ }),

/***/ "./resources/js/src/utils/dialog.js":
/*!******************************************!*\
  !*** ./resources/js/src/utils/dialog.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lang__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lang */ "./resources/js/src/lang/index.js");


var vm = new vue__WEBPACK_IMPORTED_MODULE_0___default.a({
  i18n: _lang__WEBPACK_IMPORTED_MODULE_1__["default"],
  methods: {
    completeField: function completeField(message) {
      var text = message ? message : this.$t("message.completeText");
      this.$vs.dialog({
        color: "danger",
        title: this.$t("message.informationTitle"),
        text: text,
        acceptText: "Ok"
      });
    },
    selectField: function selectField(message) {
      var text = message ? message : this.$t("message.selectData");
      this.$vs.dialog({
        color: "danger",
        title: this.$t("message.informationTitle"),
        text: text,
        acceptText: "Ok"
      });
    },
    noRoomAvailable: function noRoomAvailable(message) {
      var text = message ? message : this.$t("message.roomNotAvailable");
      this.$vs.dialog({
        color: "danger",
        title: this.$t("message.informationTitle"),
        text: text,
        acceptText: "Ok"
      });
    },
    roomNumberNotAvailable: function roomNumberNotAvailable(message) {
      var text = message ? message : this.$t("message.roomNumberNotAvailable");
      this.$vs.dialog({
        color: "danger",
        title: this.$t("message.informationTitle"),
        text: text,
        acceptText: "Ok"
      });
    },
    existAccount: function existAccount(message) {
      var text = message ? message : this.$t("message.existAccount");
      this.$vs.dialog({
        color: "danger",
        title: this.$t("message.informationTitle"),
        text: text,
        acceptText: "Ok"
      });
    },
    existData: function existData(message, procedure) {
      var text = message ? message : this.$t("message.existAccount");
      this.$vs.dialog({
        color: "danger",
        type: "confirm",
        title: this.$t("message.informationTitle"),
        text: text,
        acceptText: "Yes",
        accept: function accept() {
          procedure;
        }
      });
    },
    dialogInsertMasterSuccessfully: function dialogInsertMasterSuccessfully(message, data) {
      var text = message ? message : this.$t("message.insertMasterSuccessfully") + data;
      this.$vs.dialog({
        color: "primary",
        title: this.$t("message.informationTitle"),
        text: text,
        acceptText: "OK"
      });
    },
    roomNumberCannotExtend: function roomNumberCannotExtend(message, data) {
      var text = message ? message : this.$t("message.roomNumberCannotExtend") + data;
      this.$vs.dialog({
        color: "primary",
        title: this.$t("message.informationTitle"),
        text: text,
        acceptText: "OK"
      });
    },
    information: function information(message, procedure) {
      var text = message ? message : this.$t("message.informationTitle");
      this.$vs.dialog({
        color: "danger",
        title: this.$t("message.informationTitle"),
        text: text,
        acceptText: "OK",
        accept: function accept() {
          procedure;
        }
      });
    },
    confirmation: function confirmation(thisData, event, data1, data2) {
      this.$vs.dialog({
        type: "confirm",
        color: "primary",
        title: this.$t("message.confirmTitle"),
        text: this.$t("message.confirmation"),
        acceptText: this.$t("message.yes"),
        cancelText: this.$t("message.no"),
        accept: function accept() {
          thisData[event](data1, data2);
        }
      });
    },
    confirmationDelete: function confirmationDelete(thisData, event, data1, data2) {
      this.$vs.dialog({
        type: "confirm",
        color: "danger",
        title: this.$t("message.confirmTitle"),
        text: this.$t("message.deleteConfirm"),
        acceptText: this.$t("message.yes"),
        cancelText: this.$t("message.no"),
        accept: function accept() {
          thisData[event](data1, data2);
        }
      });
    },
    informationNoDetail: function informationNoDetail(message) {
      var text = message ? message : this.$t("message.informationNoDetailData");
      this.$vs.dialog({
        color: "warning",
        title: this.$t("message.informationTitle"),
        text: text,
        acceptText: "OK"
      });
    },
    roomNotAvailable: function roomNotAvailable(message, data) {
      var text = message ? message : this.$t("message.roomNotAvailable") + data;
      this.$vs.dialog({
        color: "primary",
        title: this.$t("message.informationTitle"),
        text: text,
        acceptText: "OK"
      });
    },
    statusCheckInReservation: function statusCheckInReservation(message) {
      this.$vs.dialog({
        color: "danger",
        title: this.$t("message.informationTitle"),
        text: message,
        acceptText: "OK"
      });
    },
    reservationSaveSuccess: function reservationSaveSuccess(message, data, procedure) {
      this.$vs.dialog({
        color: "primary",
        type: "confirm",
        title: this.$t("message.informationTitle"),
        text: "Reservation successfully saved, continue?",
        acceptText: "Yes",
        cancelText: "No",
        cancel: function cancel() {
          procedure;
        }
      });
    },
    reportDataNotFound: function reportDataNotFound(message, data) {
      var text = message ? message : this.$t("message.reportDataNotFound");
      this.$vs.dialog({
        color: "warning",
        title: this.$t("message.informationTitle"),
        text: text,
        acceptText: "OK"
      });
    },
    unauthorized: function unauthorized(message, data) {
      var text = message ? message : this.$t("message.unauthorized") + data;
      this.$vs.dialog({
        color: "warning",
        title: "Unauthorized",
        text: text,
        acceptText: "OK"
      });
    }
  }
});
/* harmony default export */ __webpack_exports__["default"] = (vm);

/***/ }),

/***/ "./resources/js/src/views/pages/components/DialogSecond.vue":
/*!******************************************************************!*\
  !*** ./resources/js/src/views/pages/components/DialogSecond.vue ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DialogSecond_vue_vue_type_template_id_59ed4970___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DialogSecond.vue?vue&type=template&id=59ed4970& */ "./resources/js/src/views/pages/components/DialogSecond.vue?vue&type=template&id=59ed4970&");
/* harmony import */ var _DialogSecond_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DialogSecond.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/components/DialogSecond.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _DialogSecond_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DialogSecond_vue_vue_type_template_id_59ed4970___WEBPACK_IMPORTED_MODULE_0__["render"],
  _DialogSecond_vue_vue_type_template_id_59ed4970___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/components/DialogSecond.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/components/DialogSecond.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/src/views/pages/components/DialogSecond.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DialogSecond_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./DialogSecond.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/components/DialogSecond.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DialogSecond_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/components/DialogSecond.vue?vue&type=template&id=59ed4970&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/components/DialogSecond.vue?vue&type=template&id=59ed4970& ***!
  \*************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DialogSecond_vue_vue_type_template_id_59ed4970___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./DialogSecond.vue?vue&type=template&id=59ed4970& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/components/DialogSecond.vue?vue&type=template&id=59ed4970&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DialogSecond_vue_vue_type_template_id_59ed4970___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DialogSecond_vue_vue_type_template_id_59ed4970___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/pages/report/Report.vue":
/*!********************************************************!*\
  !*** ./resources/js/src/views/pages/report/Report.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Report_vue_vue_type_template_id_87a41f2c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Report.vue?vue&type=template&id=87a41f2c&scoped=true& */ "./resources/js/src/views/pages/report/Report.vue?vue&type=template&id=87a41f2c&scoped=true&");
/* harmony import */ var _Report_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Report.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/report/Report.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Report_vue_vue_type_style_index_0_id_87a41f2c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Report.vue?vue&type=style&index=0&id=87a41f2c&lang=scss&scoped=true& */ "./resources/js/src/views/pages/report/Report.vue?vue&type=style&index=0&id=87a41f2c&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Report_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Report_vue_vue_type_template_id_87a41f2c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Report_vue_vue_type_template_id_87a41f2c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "87a41f2c",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/report/Report.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/report/Report.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/src/views/pages/report/Report.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Report_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Report.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/report/Report.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Report_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/report/Report.vue?vue&type=style&index=0&id=87a41f2c&lang=scss&scoped=true&":
/*!******************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/report/Report.vue?vue&type=style&index=0&id=87a41f2c&lang=scss&scoped=true& ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Report_vue_vue_type_style_index_0_id_87a41f2c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Report.vue?vue&type=style&index=0&id=87a41f2c&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/report/Report.vue?vue&type=style&index=0&id=87a41f2c&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Report_vue_vue_type_style_index_0_id_87a41f2c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Report_vue_vue_type_style_index_0_id_87a41f2c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Report_vue_vue_type_style_index_0_id_87a41f2c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Report_vue_vue_type_style_index_0_id_87a41f2c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Report_vue_vue_type_style_index_0_id_87a41f2c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/src/views/pages/report/Report.vue?vue&type=template&id=87a41f2c&scoped=true&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/report/Report.vue?vue&type=template&id=87a41f2c&scoped=true& ***!
  \***************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Report_vue_vue_type_template_id_87a41f2c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Report.vue?vue&type=template&id=87a41f2c&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/report/Report.vue?vue&type=template&id=87a41f2c&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Report_vue_vue_type_template_id_87a41f2c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Report_vue_vue_type_template_id_87a41f2c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/pages/report/components/ReportEditor.vue":
/*!*************************************************************************!*\
  !*** ./resources/js/src/views/pages/report/components/ReportEditor.vue ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ReportEditor_vue_vue_type_template_id_1e992d14_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ReportEditor.vue?vue&type=template&id=1e992d14&scoped=true& */ "./resources/js/src/views/pages/report/components/ReportEditor.vue?vue&type=template&id=1e992d14&scoped=true&");
/* harmony import */ var _ReportEditor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ReportEditor.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/report/components/ReportEditor.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _ReportEditor_vue_vue_type_style_index_0_id_1e992d14_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ReportEditor.vue?vue&type=style&index=0&id=1e992d14&scoped=true&lang=css& */ "./resources/js/src/views/pages/report/components/ReportEditor.vue?vue&type=style&index=0&id=1e992d14&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ReportEditor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ReportEditor_vue_vue_type_template_id_1e992d14_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ReportEditor_vue_vue_type_template_id_1e992d14_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "1e992d14",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/report/components/ReportEditor.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/report/components/ReportEditor.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/report/components/ReportEditor.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ReportEditor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ReportEditor.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/report/components/ReportEditor.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ReportEditor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/report/components/ReportEditor.vue?vue&type=style&index=0&id=1e992d14&scoped=true&lang=css&":
/*!**********************************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/report/components/ReportEditor.vue?vue&type=style&index=0&id=1e992d14&scoped=true&lang=css& ***!
  \**********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ReportEditor_vue_vue_type_style_index_0_id_1e992d14_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/style-loader!../../../../../../../node_modules/css-loader??ref--7-1!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ReportEditor.vue?vue&type=style&index=0&id=1e992d14&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/report/components/ReportEditor.vue?vue&type=style&index=0&id=1e992d14&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ReportEditor_vue_vue_type_style_index_0_id_1e992d14_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ReportEditor_vue_vue_type_style_index_0_id_1e992d14_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ReportEditor_vue_vue_type_style_index_0_id_1e992d14_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ReportEditor_vue_vue_type_style_index_0_id_1e992d14_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ReportEditor_vue_vue_type_style_index_0_id_1e992d14_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/src/views/pages/report/components/ReportEditor.vue?vue&type=template&id=1e992d14&scoped=true&":
/*!********************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/report/components/ReportEditor.vue?vue&type=template&id=1e992d14&scoped=true& ***!
  \********************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ReportEditor_vue_vue_type_template_id_1e992d14_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ReportEditor.vue?vue&type=template&id=1e992d14&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/report/components/ReportEditor.vue?vue&type=template&id=1e992d14&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ReportEditor_vue_vue_type_template_id_1e992d14_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ReportEditor_vue_vue_type_template_id_1e992d14_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/pages/report/components/report-filter1.vue":
/*!***************************************************************************!*\
  !*** ./resources/js/src/views/pages/report/components/report-filter1.vue ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _report_filter1_vue_vue_type_template_id_060f0313___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./report-filter1.vue?vue&type=template&id=060f0313& */ "./resources/js/src/views/pages/report/components/report-filter1.vue?vue&type=template&id=060f0313&");
/* harmony import */ var _report_filter1_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./report-filter1.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/report/components/report-filter1.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _report_filter1_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _report_filter1_vue_vue_type_template_id_060f0313___WEBPACK_IMPORTED_MODULE_0__["render"],
  _report_filter1_vue_vue_type_template_id_060f0313___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/report/components/report-filter1.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/report/components/report-filter1.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/report/components/report-filter1.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_report_filter1_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./report-filter1.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/report/components/report-filter1.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_report_filter1_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/report/components/report-filter1.vue?vue&type=template&id=060f0313&":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/report/components/report-filter1.vue?vue&type=template&id=060f0313& ***!
  \**********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_report_filter1_vue_vue_type_template_id_060f0313___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./report-filter1.vue?vue&type=template&id=060f0313& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/report/components/report-filter1.vue?vue&type=template&id=060f0313&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_report_filter1_vue_vue_type_template_id_060f0313___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_report_filter1_vue_vue_type_template_id_060f0313___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);