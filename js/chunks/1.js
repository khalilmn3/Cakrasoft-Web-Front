(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

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

/***/ "./resources/js/src/utils/general.js":
/*!*******************************************!*\
  !*** ./resources/js/src/utils/general.js ***!
  \*******************************************/
/*! exports provided: dateDiff, getTime, cloneObject, removeArrayByKey, asyncForEach, rowSelectedAfterRefresh, getRowIndexBefore, generateIconContextMenuAgGrid */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dateDiff", function() { return dateDiff; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTime", function() { return getTime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cloneObject", function() { return cloneObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeArrayByKey", function() { return removeArrayByKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "asyncForEach", function() { return asyncForEach; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rowSelectedAfterRefresh", function() { return rowSelectedAfterRefresh; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRowIndexBefore", function() { return getRowIndexBefore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateIconContextMenuAgGrid", function() { return generateIconContextMenuAgGrid; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_format_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/utils/format.js */ "./resources/js/src/utils/format.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }




function dateDiff(dateStart, dateEnd) {
  var start = moment__WEBPACK_IMPORTED_MODULE_1___default()(Object(_utils_format_js__WEBPACK_IMPORTED_MODULE_2__["formatDateDatabase"])(dateStart));
  var end = moment__WEBPACK_IMPORTED_MODULE_1___default()(Object(_utils_format_js__WEBPACK_IMPORTED_MODULE_2__["formatDateDatabase"])(dateEnd)); //Difference in number of days

  return moment__WEBPACK_IMPORTED_MODULE_1___default.a.duration(end.diff(start)).asDays();
}

function getTime() {
  var date = new Date();
  var val = moment__WEBPACK_IMPORTED_MODULE_1___default()(date).format('HH:mm:ss');
  return val;
}

function cloneObject(object) {
  var clone = {};

  for (var key in object) {
    if (object.hasOwnProperty(key)) //ensure not adding inherited props
      clone[key] = object[key];
  }

  return clone;
}

function removeArrayByKey(arr) {
  var what,
      a = arguments,
      L = a.length,
      ax;

  while (L > 1 && arr.length) {
    what = a[--L];

    while ((ax = arr.indexOf(what)) !== -1) {
      arr.splice(ax, 1);
    }
  }

  return arr;
}

function asyncForEach(_x, _x2) {
  return _asyncForEach.apply(this, arguments);
} //function for ag grid


function _asyncForEach() {
  _asyncForEach = _asyncToGenerator(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(array, callback) {
    var index;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            index = 0;

          case 1:
            if (!(index < array.length)) {
              _context.next = 7;
              break;
            }

            _context.next = 4;
            return callback(array[index], index, array);

          case 4:
            index++;
            _context.next = 1;
            break;

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _asyncForEach.apply(this, arguments);
}

function rowSelectedAfterRefresh(thisData, model, key) {
  var countRowdata = thisData.gridApi.getDisplayedRowCount();
  var vm = thisData;
  vm.gridApi.forEachNode(function (node) {
    if ((model[key] == undefined || model[key] == null) && node.rowIndex === 0 && vm.modeDataValue !== vm.modeData["delete"]) {
      node.setSelected(true, true); // console.log("a :"+node.data[key])
      // console.log("1 :"+model[key])

      return false;
    } else if (node.data[key] === model[key]) {
      if (vm.modeDataValue !== vm.modeData["delete"]) {
        vm.gridApi.ensureIndexVisible(node.rowIndex, 'middle');
        node.setSelected(true, true); // console.log("b :"+node.data[key])
        // console.log("2 :"+model[key])

        return false;
      }
    } else if (vm.modeDataValue === vm.modeData["delete"] && countRowdata > 0 && (vm.rowIndexBeforeDelete === node.rowIndex || vm.rowIndexBeforeDelete - 1 === node.rowIndex)) {
      node.setSelected(true, true);
      vm.gridApi.ensureIndexVisible(node.rowIndex, 'middle'); // console.log("c :"+node.data[key])
      // console.log("3 :"+model[key])

      return false;
    }
  });
}

function getRowIndexBefore(thisData) {
  var vm = thisData;
  thisData.gridApi.forEachNode(function (node) {
    if (node.isSelected()) {
      vm.rowIndexBeforeDelete = node.rowIndex;
    }
  });
}

function generateIconContextMenuAgGrid(icon) {
  var rootUrl = window.location.origin;
  return '<img border="0" width="20" height="20" src="' + rootUrl + '/images/icons/' + icon + '.png"/>';
}



/***/ })

}]);