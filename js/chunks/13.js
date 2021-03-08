(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[13],{

/***/ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./resources/sass/vuexy/pages/configurations/general.scss":
/*!***************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./resources/sass/vuexy/pages/configurations/general.scss ***!
  \***************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".configuration {\n  font-size: 0.8rem;\n}\n\n.configuration .vs-input--input.normal {\n  font-size: 0.8rem;\n}\n\n.configuration .wrap-form-select {\n  margin-top: 4px;\n  position: relative;\n  padding-left: 0.5rem;\n  padding-right: 0.5rem;\n}\n\n.configuration .vs__search, .configuration .vs__search:focus {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  line-height: 2;\n}\n\n.configuration .vs__selected-options {\n  display: flex;\n  flex-basis: 100%;\n  flex-grow: 1;\n  flex-wrap: initial;\n  padding: 0 2px;\n  position: relative;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  width: 100%;\n  white-space: nowrap;\n}\n\n.configuration .vs__selected {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  width: 100%;\n  min-width: 1px;\n}", ""]);

// exports


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

/***/ "./resources/sass/vuexy/pages/configurations/general.scss":
/*!****************************************************************!*\
  !*** ./resources/sass/vuexy/pages/configurations/general.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader!../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!./general.scss */ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./resources/sass/vuexy/pages/configurations/general.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ })

}]);