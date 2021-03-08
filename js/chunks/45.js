(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[45],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Tools/user-setting/UserGroup.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/Tools/user-setting/UserGroup.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_request_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/utils/request.js */ "./resources/js/src/utils/request.js");
/* harmony import */ var ag_grid_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ag-grid-vue */ "./node_modules/ag-grid-vue/main.js");
/* harmony import */ var ag_grid_vue__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ag_grid_vue__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _views_pages_components_action_grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/views/pages/components/action_grid */ "./resources/js/src/views/pages/components/action_grid.js");
/* harmony import */ var _components_FilterHeader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/FilterHeader */ "./resources/js/src/views/pages/Tools/components/FilterHeader.vue");
/* harmony import */ var _components_NavigationHeader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/NavigationHeader */ "./resources/js/src/views/pages/Tools/components/NavigationHeader.vue");
/* harmony import */ var _views_pages_components_Tracking_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/views/pages/components/Tracking.vue */ "./resources/js/src/views/pages/components/Tracking.vue");
/* harmony import */ var _utils_dialog_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/utils/dialog.js */ "./resources/js/src/utils/dialog.js");
/* harmony import */ var _utils_alert_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/utils/alert.js */ "./resources/js/src/utils/alert.js");
/* harmony import */ var _utils_general_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/utils/general.js */ "./resources/js/src/utils/general.js");
/* harmony import */ var vue_tree_halower__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! vue-tree-halower */ "./node_modules/vue-tree-halower/dist/v2-tree.js");
/* harmony import */ var vue_tree_halower__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(vue_tree_halower__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! vue-perfect-scrollbar */ "./node_modules/vue-perfect-scrollbar/dist/index.js");
/* harmony import */ var vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _api_tools_user_setting_userSetting_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @/api/tools/user-setting/userSetting.js */ "./resources/js/src/api/tools/user-setting/userSetting.js");


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












var userSetting = new _api_tools_user_setting_userSetting_js__WEBPACK_IMPORTED_MODULE_12__["default"]();
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'UserGroup',
  props: ['titleForm', 'routeApi', 'mainTableName'],
  components: {
    'ag-grid-vue': ag_grid_vue__WEBPACK_IMPORTED_MODULE_2__["AgGridVue"],
    FilterHeader: _components_FilterHeader__WEBPACK_IMPORTED_MODULE_4__["default"],
    NavigationHeader: _components_NavigationHeader__WEBPACK_IMPORTED_MODULE_5__["default"],
    tracking: _views_pages_components_Tracking_vue__WEBPACK_IMPORTED_MODULE_6__["default"],
    VTree: vue_tree_halower__WEBPACK_IMPORTED_MODULE_10__["VTree"],
    VSelectTree: vue_tree_halower__WEBPACK_IMPORTED_MODULE_10__["VSelectTree"],
    VuePerfectScrollbar: vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_11___default.a
  },
  data: function data() {
    return {
      //Filter Data on Page Size
      vModelDefaultSearchData: '0',
      searchFilterData: [{
        text: 'Code',
        value: '0'
      }],
      //query data search
      limitPageSize: 0,
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
      // sideBar: null,
      paginationPageSize: null,
      rowSelection: null,
      dataTracking: null,
      defColDef: null,
      rowIndexBeforeDelete: undefined,
      //Parameter From Child
      idData: '',
      paramsData: '',
      //Mode Edit Or Insert(assign insert from parent, update from child)
      modeDataValue: 0,
      modeDataValueTracking: 0,
      //Pop Up
      mainPopUp: false,
      trackingPopup: false,
      firstDialog: 'firstDialog',
      //------------------need setting manual for vModel-----------------//
      vModel: {},
      //Access Menu
      menuList: [],
      checkMenu: [],
      //1234567890123456789012345678901234567890123456789012
      defaultAccessForm: '0000000000000000000000000000000000000000000000000000',
      //Access Report
      reportList: [],
      checkReport: [],
      //123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345
      defaultAccessReport: '000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
      //SPECIAL ACCESS
      //    1234567890123456789012
      defaultAccessSpecial: '0000000000000000000000',
      checkSpecialAccess: [],
      specialAccessList: [],
      // OTHER ACCESS
      //    1234567890123456789012
      defaultOtherAccess: '0000000000000000000000',
      checkOtherAccess: [],
      otherAccessList: [],
      //data error handling from laravel validation//
      dbErrors: {},
      btnSaveDisabled: false
    };
  },
  beforeMount: function beforeMount() {
    this.gridOptions = {
      rowHeight: this.rowHeightDefault
    }; //------------------need setting manual for column table-----------------//

    this.columnDefs = [{
      headerName: this.$t('table.action'),
      field: 'code',
      cellRenderer: 'actionGrid',
      colId: 'params',
      width: 200
    }, {
      headerName: this.$t('table.code'),
      field: 'code',
      width: 200
    }, {
      headerName: this.$t('table.lastUpdate'),
      field: 'user_id',
      width: 120
    }]; //------------------end need setting manual for column table-----------------//

    this.context = {
      componentParent: this
    };
    this.frameworkComponents = {
      actionGrid: _views_pages_components_action_grid__WEBPACK_IMPORTED_MODULE_3__["default"]
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
    }; // this.sideBar = {
    //     toolPanels: [
    //         {id: 'columns', labelDefault: 'Columns', labelKey: 'columns', iconKey: 'columns', toolPanel: 'agColumnsToolPanel'},
    //         {id: 'filters', labelDefault: 'Filters', labelKey: 'filters', iconKey: 'filter', toolPanel: 'agFiltersToolPanel'}
    //     ]
    // };

    this.paginationPageSize = this.limitDefaultPageSize;
    this.rowSelection = 'single';
    this.rowModelType = 'serverSide';
    this.limitPageSize = this.limitDefaultPageSize;
  },
  methods: {
    addDialogCloseButton: function addDialogCloseButton(elementID) {
      if (this.dialog.typeDialog === 'confirm') {
        var firstDialog = document.getElementById(elementID);

        if (firstDialog !== null) {
          var headerDialog = firstDialog.getElementsByClassName('vs-dialog');
          var vm = this;
          var newElement = document.createElement('i');
          newElement.className = 'vs-icon notranslate icon-scale vs-dialog-cancel vs-dialog-cancel--icon notranslate material-icons null';
          newElement.id = 'first-icon-dialog-close';
          newElement.innerText = 'close';
          newElement.addEventListener('click', function () {
            vm.mainPopUp = false;
          });
          headerDialog[0].children[0].appendChild(newElement);
        }
      }
    },
    onGridReady: function onGridReady() {},
    onPageSizeChanged: function onPageSizeChanged(newPageSize) {
      this.gridApi.paginationSetPageSize(newPageSize);
    },
    //------------------------additional for context menu ag-Grid-----------//
    getContextMenu: function getContextMenu(params) {
      var _this = this;

      var node = params.node;

      if (node) {
        this.paramsData = node.data;
      }

      var result = [{
        name: this.$t('table.insert'),
        icon: Object(_utils_general_js__WEBPACK_IMPORTED_MODULE_9__["generateIconContextMenuAgGrid"])('add_icon24'),
        action: function action() {
          return _this.showModal('', 0);
        }
      }, {
        name: this.$t('table.update'),
        disabled: !node,
        icon: Object(_utils_general_js__WEBPACK_IMPORTED_MODULE_9__["generateIconContextMenuAgGrid"])('edit_icon24'),
        action: function action() {
          return _this.showModal(_this.paramsData, 1);
        }
      }, {
        name: this.$t('table.delete'),
        disabled: !node,
        icon: Object(_utils_general_js__WEBPACK_IMPORTED_MODULE_9__["generateIconContextMenuAgGrid"])('delete_icon24'),
        action: function action() {
          return _this.handleDeleteData(_this.paramsData);
        }
      }, 'separator', {
        name: this.$t('table.trackingData'),
        disabled: !node,
        icon: Object(_utils_general_js__WEBPACK_IMPORTED_MODULE_9__["generateIconContextMenuAgGrid"])('tracking_icon24'),
        action: function action() {
          return _this.showModal(_this.paramsData, 2);
        }
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
    rowSelectedAfterRefresh: function rowSelectedAfterRefresh() {
      var countRowdata = this.gridApi.getDisplayedRowCount();
      var vm = this;
      this.gridApi.forEachNode(function (node) {
        if ((vm.vModel.code === undefined || vm.vModel.code === null) && node.rowIndex === 0 && vm.modeDataValue !== vm.modeData["delete"]) {
          node.setSelected(true, true);
          return false;
        } else if (node.data.code === vm.vModel.code) {
          if (vm.modeDataValue !== vm.modeData["delete"]) {
            vm.gridApi.ensureIndexVisible(node.rowIndex, 'middle');
            node.setSelected(true, true);
            return false;
          }
        } else if (vm.modeDataValue === vm.modeData["delete"] && countRowdata > 0 && (vm.rowIndexBeforeDelete === node.rowIndex || vm.rowIndexBeforeDelete - 1 === node.rowIndex)) {
          node.setSelected(true, true);
          vm.gridApi.ensureIndexVisible(node.rowIndex, 'middle');
          return false;
        }
      });
    },
    getRowIndexBeforeDelete: function getRowIndexBeforeDelete() {
      var vm = this;
      this.gridApi.forEachNode(function (node) {
        if (node.isSelected()) {
          vm.rowIndexBeforeDelete = node.rowIndex;
        }
      });
    },
    //------------------need setting manual for crud-----------------//
    refreshData: function refreshData(search) {
      var _this2 = this;

      this.search = search;
      this.$vs.loading({
        container: '#layout--main',
        scale: this.scaleLoadingLayout
      });
      _utils_request_js__WEBPACK_IMPORTED_MODULE_1__["default"].get(this.routeApi + '/table/datagrid', {
        params: search
      }).then(function (result) {
        _this2.rowData = result.data.modelGrid;

        _this2.$vs.loading.close('#layout--main>.con-vs-loading');

        setTimeout(function () {
          _this2.rowSelectedAfterRefresh();
        }, 100);
      })["catch"](function () {
        _this2.$vs.loading.close('#layout--main>.con-vs-loading');

        _utils_alert_js__WEBPACK_IMPORTED_MODULE_8__["default"].errorFetchDataAlert();
      });
    },
    resetData: function resetData() {
      this.vModel = {
        code: '',
        name: '',
        id_sort: 0,
        tabIndex: 1
      };
      this.dbErrors = {};
      this.$validator.reset();
      this.dataTracking = null;
      this.btnSaveDisabled = false;
    },
    showModal: function showModal(idData, modeData) {
      var _this3 = this;

      this.$vs.loading({
        container: '#layout--main',
        scale: this.scaleLoadingMainLayout
      });
      this.resetData(this.search);
      this.idData = idData.code;
      this.modeDataValue = modeData;
      this.mainPopUp = modeData == this.modeData.insert;

      if (modeData == this.modeData.edit) {
        this.editData();
      } else if (modeData == this.modeData.tracking) {
        this.trackingData(idData);
      } else if (modeData == this.modeData.insert) {
        setTimeout(function () {
          _this3.setMenuList();

          _this3.setAccessSpecialList();

          _this3.setOtherAccessList();

          _this3.setReportList(_this3.userInfo.groupCode, true);

          _this3.vModel.tabIndex = 0;

          if (_this3.dialog.isAddHeaderCloseButton) {
            _this3.addDialogCloseButton(_this3.firstDialog);
          }

          _this3.$vs.loading.close('#layout--main>.con-vs-loading');
        }, 100);
      }
    },
    editData: function editData() {
      var _this4 = this;

      _utils_request_js__WEBPACK_IMPORTED_MODULE_1__["default"].get(this.routeApi + '/' + this.idData + '/edit').then(function (response) {
        _this4.vModel = response.data.data;
        _this4.vModel.access_form = response.data.accessMenu;
        _this4.vModel.access_report = response.data.accessReport;
        _this4.vModel.access_special = response.data.accessSpecial;
        _this4.vModel.access_preview_report = response.data.accessPreviewReport;

        _this4.setMenuList();

        _this4.setAccessSpecialList();

        _this4.setOtherAccessList();

        _this4.setReportList(_this4.idData, false);

        _this4.vModel.tabIndex = 0;
        _this4.mainPopUp = true;

        if (_this4.dialog.isAddHeaderCloseButton) {
          setTimeout(function () {
            _this4.addDialogCloseButton(_this4.firstDialog);
          }, 100);
        }

        _this4.$vs.loading.close('#layout--main>.con-vs-loading');
      })["catch"](function (error) {
        _this4.$vs.loading.close('#layout--main>.con-vs-loading');

        _utils_alert_js__WEBPACK_IMPORTED_MODULE_8__["default"].errorFetchDataAlert();
      });
    },
    updateData: function updateData() {
      var _this5 = this;

      _utils_request_js__WEBPACK_IMPORTED_MODULE_1__["default"].put(this.routeApi + '/' + this.idData, this.vModel).then(function () {
        _this5.refreshData(_this5.search);

        _utils_alert_js__WEBPACK_IMPORTED_MODULE_8__["default"].acceptAlertSucces();

        _this5.$vs.loading.close('#button-save-main>.con-vs-loading');

        _this5.mainPopUp = false;
      })["catch"](function (error) {
        _this5.btnSaveDisabled = false;
        var message = error.response.data.errors;
        _this5.dbErrors = message == undefined ? '' : message;

        _this5.$vs.loading.close('#button-save-main>.con-vs-loading');

        _utils_alert_js__WEBPACK_IMPORTED_MODULE_8__["default"].errorSaveDataAlert(message);
      });
    },
    insertData: function insertData() {
      var _this6 = this;

      _utils_request_js__WEBPACK_IMPORTED_MODULE_1__["default"].post(this.routeApi, this.vModel).then(function () {
        _this6.refreshData(_this6.search);

        _utils_alert_js__WEBPACK_IMPORTED_MODULE_8__["default"].acceptAlertSucces();

        _this6.$vs.loading.close('#button-save-main>.con-vs-loading');

        _this6.mainPopUp = false;
      })["catch"](function (error) {
        _this6.btnSaveDisabled = false;
        var message = error.response.data.errors;
        _this6.dbErrors = message == undefined ? '' : message;

        _this6.$vs.loading.close('#button-save-main>.con-vs-loading');

        _utils_alert_js__WEBPACK_IMPORTED_MODULE_8__["default"].errorSaveDataAlert(message);
      });
    },
    saveData: function saveData() {
      var _this7 = this;

      this.$validator.validateAll().then(function (result) {
        if (result) {
          _this7.btnSaveDisabled = true;
          _this7.vModel.user_id = _this7.userInfo.code;

          if (_this7.modeDataValue == 1) {
            _this7.$vs.loading({
              container: '#button-save-main',
              scale: _this7.scaleLoadingButton
            });

            _this7.updateData();
          } else {
            _this7.$vs.loading({
              container: '#button-save-main',
              scale: _this7.scaleLoadingButton
            });

            _this7.insertData();
          }
        }
      });
    },
    handleDeleteData: function handleDeleteData(data) {
      _utils_dialog_js__WEBPACK_IMPORTED_MODULE_7__["default"].confirmationDelete(this, 'deleteData', data);
    },
    deleteData: function deleteData(idData) {
      var _this8 = this;

      setTimeout(function () {
        _this8.modeDataValue = _this8.modeData["delete"];

        _this8.getRowIndexBeforeDelete();
      }, 100);
      var data = {
        code: idData.code,
        user_id: this.userInfo.code
      };
      this.$vs.loading({
        container: '#layout--main',
        scale: this.scaleLoadingMainLayout
      });
      _utils_request_js__WEBPACK_IMPORTED_MODULE_1__["default"].post(this.routeApi + '/delete', data).then(function () {
        _this8.refreshData(_this8.search);

        _this8.$vs.loading.close('#layout--main>.con-vs-loading');

        _utils_alert_js__WEBPACK_IMPORTED_MODULE_8__["default"].deleteAlertSuccess();
      })["catch"](function (error) {
        var message = error.response.data.errors;
        _this8.dbErrors = message == undefined ? '' : message;

        _this8.$vs.loading.close('#layout--main>.con-vs-loading');

        _utils_alert_js__WEBPACK_IMPORTED_MODULE_8__["default"].errorDeleteDataAlert(message);
      });
    },
    trackingData: function trackingData(idData) {
      var _this9 = this;

      var data = {
        id_log: idData.id_log,
        table: this.mainTableName
      };
      _utils_request_js__WEBPACK_IMPORTED_MODULE_1__["default"].post('tracking/datagrid', data).then(function (result) {
        _this9.dataTracking = result.data.modelGrid;
        _this9.trackingPopup = true;
        setTimeout(function () {
          _this9.$vs.loading.close('#layout--main>.con-vs-loading');
        }, 100);
      })["catch"](function () {
        _this9.$vs.loading.close('#layout--main>.con-vs-loading');

        _utils_alert_js__WEBPACK_IMPORTED_MODULE_8__["default"].errorFetchDataAlert();
      });
    },
    //Access main menu
    setMenuList: function setMenuList() {
      if (this.vModel.access_form == undefined || this.vModel.access_form == null) {
        this.vModel.access_form = this.defaultAccessForm;
      }

      this.menuList = [{
        id: 1000,
        title: 'Front Desk',
        expanded: true,
        children: [{
          id: this.accessUserMenuOrder.dashboard,
          title: this.$t('menuNameList.dashboard'),
          checked: this.vModel.access_form[this.accessUserMenuOrder.dashboard] === '1'
        }, {
          id: this.accessUserMenuOrder.availability,
          title: this.$t('menuNameList.availability'),
          checked: this.vModel.access_form[this.accessUserMenuOrder.availability] === '1'
        }, {
          id: this.accessUserMenuOrder.roomAvailability,
          title: this.$t('menuNameList.roomAvailability'),
          checked: this.vModel.access_form[this.accessUserMenuOrder.roomAvailability] === '1'
        }, {
          id: this.accessUserMenuOrder.reservation,
          title: this.$t('menuNameList.reservation'),
          checked: this.vModel.access_form[this.accessUserMenuOrder.reservation] === '1'
        }, {
          id: this.accessUserMenuOrder.guestGroup,
          title: this.$t('menuNameList.guestGroup'),
          checked: this.vModel.access_form[this.accessUserMenuOrder.guestGroup] === '1'
        }, {
          id: this.accessUserMenuOrder.guestInHouse,
          title: this.$t('menuNameList.guestInHouse'),
          checked: this.vModel.access_form[this.accessUserMenuOrder.guestInHouse] === '1'
        }, {
          id: this.accessUserMenuOrder.masterFolio,
          title: this.$t('menuNameList.masterFolio'),
          checked: this.vModel.access_form[this.accessUserMenuOrder.masterFolio] === '1'
        }, {
          id: this.accessUserMenuOrder.deskFolio,
          title: this.$t('menuNameList.deskFolio'),
          checked: this.vModel.access_form[this.accessUserMenuOrder.deskFolio] === '1'
        }, {
          id: this.accessUserMenuOrder.folioHistory,
          title: this.$t('menuNameList.folioHistory'),
          checked: this.vModel.access_form[this.accessUserMenuOrder.folioHistory] === '1'
        }, {
          id: this.accessUserMenuOrder.houseKeeping,
          title: this.$t('menuNameList.houseKeeping'),
          checked: this.vModel.access_form[this.accessUserMenuOrder.houseKeeping] === '1'
        }]
      }, {
        id: 1001,
        title: 'Night Audit',
        expanded: true,
        children: [{
          id: this.accessUserMenuOrder.autoPostTransaction,
          title: this.$t('menuNameList.autoPostTransaction'),
          checked: this.vModel.access_form[this.accessUserMenuOrder.autoPostTransaction] === '1'
        }, {
          id: this.accessUserMenuOrder.dayendClose,
          title: this.$t('menuNameList.dayendClose'),
          checked: this.vModel.access_form[this.accessUserMenuOrder.dayendClose] === '1'
        }]
      }, {
        id: 1002,
        title: 'Back Office',
        expanded: true,
        children: [{
          id: this.accessUserMenuOrder.report,
          title: this.$t('menuNameList.report'),
          checked: this.vModel.access_form[this.accessUserMenuOrder.report] === '1'
        }]
      }, {
        id: this.accessUserMenuOrder.cashierReport,
        title: this.$t('menuNameList.cashierReport'),
        checked: this.vModel.access_form[this.accessUserMenuOrder.cashierReport] === '1'
      }, {
        id: 1003,
        title: 'Tools',
        expanded: true,
        children: [{
          id: this.accessUserMenuOrder.user,
          title: this.$t('menuNameList.user'),
          checked: this.vModel.access_form[this.accessUserMenuOrder.user] === '1'
        }, {
          id: this.accessUserMenuOrder.userGroup,
          title: this.$t('menuNameList.userGroup'),
          checked: this.vModel.access_form[this.accessUserMenuOrder.userGroup] === '1'
        }, {
          id: this.accessUserMenuOrder.configuration,
          title: this.$t('menuNameList.configuration'),
          checked: this.vModel.access_form[this.accessUserMenuOrder.configuration] === '1'
        }]
      }]; //this.menuCheckTab1();
    },
    setAccessMenu: function setAccessMenu(menuChecked) {
      var tempAccesForm = this.defaultAccessForm;

      for (var i = 0; i < menuChecked.length; i++) {
        if (menuChecked[i].id < 1000) {
          //Filter root, we only get children
          var index = menuChecked[i].id;
          tempAccesForm = tempAccesForm.split("");
          tempAccesForm.splice(index, 1, '1');
          tempAccesForm = tempAccesForm.join("");
        }
      }

      if (tempAccesForm != this.defaultAccessForm) {
        this.vModel.access_form = tempAccesForm;
      }
    },
    menuCheckTab1: function menuCheckTab1() {
      this.checkMenu = this.$refs.tree.getCheckedNodes();
      this.setAccessMenu(this.checkMenu);
    },
    menuSelectTab1: function menuSelectTab1() {
      this.menuCheckTab1();
    },
    //Access Report
    setReportList: function () {
      var _setReportList = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(groupCode, isNew) {
        var _ref, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return userSetting.reportListData({
                  code: groupCode,
                  isNew: isNew
                });

              case 2:
                _ref = _context.sent;
                data = _ref.data;
                this.reportList = data.dataTree; //this.$vs.loading.close('#layout--main>.con-vs-loading');

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function setReportList(_x, _x2) {
        return _setReportList.apply(this, arguments);
      }

      return setReportList;
    }(),
    setAccessReport: function setAccessReport(reportChecked) {
      var tempAccesReport = this.defaultAccessReport;

      for (var i = 0; i < reportChecked.length; i++) {
        if (reportChecked[i].tagOrder < 1000) {
          //Filter root, we only get children
          var index = reportChecked[i].tagOrder;
          tempAccesReport = tempAccesReport.split("");
          tempAccesReport.splice(index, 1, '1');
          tempAccesReport = tempAccesReport.join("");
        }
      }

      if (tempAccesReport != this.defaultAccessReport) {
        this.vModel.access_report = tempAccesReport;
      }
    },
    menuCheckTab2: function menuCheckTab2() {
      this.checkReport = this.$refs.tree.getCheckedNodes();
      this.setAccessReport(this.checkReport);
    },
    menuSelectTab2: function menuSelectTab2() {
      this.menuCheckTab2();
    },
    //SPECIAL ACCESS
    setAccessSpecialList: function setAccessSpecialList() {
      if (this.vModel.access_special == undefined || this.vModel.access_special == null) {
        this.vModel.access_special = this.defaultAccessSpecial;
      }

      this.specialAccessList = [{
        id: this.accessSpecialOrder.unlockReservation,
        title: this.$t('specialAccessList.unlockReservation'),
        checked: this.vModel.access_special[this.accessSpecialOrder.unlockReservation] === '1'
      }, {
        id: this.accessSpecialOrder.voidReservation,
        title: this.$t('specialAccessList.voidReservation'),
        checked: this.vModel.access_special[this.accessSpecialOrder.voidReservation] === '1'
      }, {
        id: this.accessSpecialOrder.voidDeposit,
        title: this.$t('specialAccessList.voidDeposit'),
        checked: this.vModel.access_special[this.accessSpecialOrder.voidDeposit] === '1'
      }, {
        id: this.accessSpecialOrder.correctDeposit,
        title: this.$t('specialAccessList.correctDeposit'),
        checked: this.vModel.access_special[this.accessSpecialOrder.correctDeposit] === '1'
      }, {
        id: this.accessSpecialOrder.decreaseStay,
        title: this.$t('specialAccessList.decreaseStay'),
        checked: this.vModel.access_special[this.accessSpecialOrder.decreaseStay] === '1'
      }, {
        id: this.accessSpecialOrder.scheduledRate,
        title: this.$t('specialAccessList.scheduledRate'),
        checked: this.vModel.access_special[this.accessSpecialOrder.scheduledRate] === '1'
      }, {
        id: this.accessSpecialOrder.breakdown,
        title: this.$t('specialAccessList.breakdown'),
        checked: this.vModel.access_special[this.accessSpecialOrder.breakdown] === '1'
      }, {
        id: this.accessSpecialOrder.extraCharge,
        title: this.$t('specialAccessList.extraCharge'),
        checked: this.vModel.access_special[this.accessSpecialOrder.extraCharge] === '1'
      }, {
        id: this.accessSpecialOrder.complimentGuest,
        title: this.$t('specialAccessList.complimentGuest'),
        checked: this.vModel.access_special[this.accessSpecialOrder.complimentGuest] === '1'
      }, {
        id: this.accessSpecialOrder.houseUseGuest,
        title: this.$t('specialAccessList.houseUseGuest'),
        checked: this.vModel.access_special[this.accessSpecialOrder.houseUseGuest] === '1'
      }, {
        id: this.accessSpecialOrder.moveRoom,
        title: this.$t('specialAccessList.moveRoom'),
        checked: this.vModel.access_special[this.accessSpecialOrder.moveRoom] === '1'
      }, {
        id: this.accessSpecialOrder.voidSubFolio,
        title: this.$t('specialAccessList.voidSubFolio'),
        checked: this.vModel.access_special[this.accessSpecialOrder.voidSubFolio] === '1'
      }, {
        id: this.accessSpecialOrder.correctSubFolio,
        title: this.$t('specialAccessList.correctSubFolio'),
        checked: this.vModel.access_special[this.accessSpecialOrder.correctSubFolio] === '1'
      }, {
        id: this.accessSpecialOrder.cancelCheckIn,
        title: this.$t('specialAccessList.cancelCheckIn'),
        checked: this.vModel.access_special[this.accessSpecialOrder.cancelCheckIn] === '1'
      }, {
        id: this.accessSpecialOrder.cancelCheckOut,
        title: this.$t('specialAccessList.cancelCheckOut'),
        checked: this.vModel.access_special[this.accessSpecialOrder.cancelCheckOut] === '1'
      }, {
        id: this.accessSpecialOrder.createMasterFolio,
        title: this.$t('specialAccessList.createMasterFolio'),
        checked: this.vModel.access_special[this.accessSpecialOrder.createMasterFolio] === '1'
      }, {
        id: this.accessSpecialOrder.printMoreInvoice,
        title: this.$t('specialAccessList.printMoreInvoice'),
        checked: this.vModel.access_special[this.accessSpecialOrder.printMoreInvoice] === '1'
      }, {
        id: this.accessSpecialOrder.modifyClosedJournal,
        title: this.$t('specialAccessList.modifyClosedJournal'),
        checked: this.vModel.access_special[this.accessSpecialOrder.modifyClosedJournal] === '1'
      }, {
        id: this.accessSpecialOrder.transfertoDeskFolio,
        title: this.$t('specialAccessList.transfertoDeskFolio'),
        checked: this.vModel.access_special[this.accessSpecialOrder.transfertoDeskFolio] === '1'
      }, {
        id: this.accessSpecialOrder.transfertoMasterFolio,
        title: this.$t('specialAccessList.transfertoMasterFolio'),
        checked: this.vModel.access_special[this.accessSpecialOrder.transfertoMasterFolio] === '1'
      }, {
        id: this.accessSpecialOrder.businessSource,
        title: this.$t('specialAccessList.businessSource'),
        checked: this.vModel.access_special[this.accessSpecialOrder.businessSource] === '1'
      }, {
        id: this.accessSpecialOrder.overrideRateDiscount,
        title: this.$t('specialAccessList.overrideRateDiscount'),
        checked: this.vModel.access_special[this.accessSpecialOrder.overrideRateDiscount] === '1'
      }];
    },
    setAccessSpecial: function setAccessSpecial(checked) {
      var tempAccesSpecial = this.defaultAccessSpecial;

      for (var i = 0; i < checked.length; i++) {
        if (checked[i].id < 1000) {
          //Filter root, we only get children
          var index = checked[i].id;
          tempAccesSpecial = tempAccesSpecial.split("");
          tempAccesSpecial.splice(index, 1, '1');
          tempAccesSpecial = tempAccesSpecial.join("");
        }
      }

      if (tempAccesSpecial != this.defaultAccessSpecial) {
        this.vModel.access_special = tempAccesSpecial;
      }
    },
    menuCheckTab3: function menuCheckTab3() {
      this.checkSpecialAccess = this.$refs.tree.getCheckedNodes();
      this.setAccessSpecial(this.checkSpecialAccess);
    },
    menuSelectTab3: function menuSelectTab3() {
      this.menuCheckTab3();
    },
    // Other Access
    setOtherAccessList: function setOtherAccessList() {
      if (this.vModel.access_preview_report == undefined || this.vModel.access_preview_report == null) {
        this.vModel.access_preview_report = this.defaultOtherAccess.slice(0, 3);
      }

      this.otherAccessList = [{
        id: 2000,
        title: 'Preview Report',
        expanded: true,
        children: [// {id: this.otherAccessOrder.editReport, title: this.$t('otherAccessList.editReport'), checked: (this.vModel.access_preview_report[this.otherAccessOrder.editReport] === '1')},
        {
          id: this.otherAccessOrder.exportReport,
          title: this.$t('otherAccessList.exportReport'),
          checked: this.vModel.access_preview_report[this.otherAccessOrder.exportReport] === '1'
        }, {
          id: this.otherAccessOrder.customizeReport,
          title: this.$t('otherAccessList.customizeReport'),
          checked: this.vModel.access_preview_report[this.otherAccessOrder.customizeReport] === '1'
        }]
      }]; //this.menuCheckTab1();
    },
    setOtherAccess: function setOtherAccess(menuChecked) {
      var tempOtherAccess = this.defaultOtherAccess;

      for (var i = 0; i < menuChecked.length; i++) {
        if (menuChecked[i].id < 1000) {
          //Filter root, we only get children
          var index = menuChecked[i].id;
          tempOtherAccess = tempOtherAccess.split("");
          tempOtherAccess.splice(index, 1, '1');
          tempOtherAccess = tempOtherAccess.join("");
        }
      }

      if (tempOtherAccess != this.defaultOtherAccess) {
        this.vModel.access_preview_report = tempOtherAccess;
      }
    },
    menuCheckTab4: function menuCheckTab4() {
      this.checkOtherAccess = this.$refs.tree.getCheckedNodes();
      this.setOtherAccess(this.checkOtherAccess);
    },
    menuSelectTab4: function menuSelectTab4() {
      this.menuCheckTab4();
    },
    //
    back: function back() {
      this.mainPopUp = false;
    }
  },
  //------------------end need setting manual for crud-----------------//
  computed: {
    scrollbarTag: function scrollbarTag() {
      return this.$store.getters.scrollbarTag;
    }
  },
  created: function created() {
    var _this10 = this;

    //Handle Back Button & forward on browser create hook
    var unregisterRouterGuard = this.$router.beforeEach(function (to, from, next) {
      if (_this10.mainPopUp) {
        _this10.back();

        next(false);
      } else {
        next();
      }
    }); //Destroyed hook

    this.$once('hook:destroyed', function () {
      unregisterRouterGuard();
    });
  },
  mounted: function mounted() {
    this.gridApi = this.gridOptions.api;
    this.ColumnApi = this.gridOptions.columnApi;
    this.onPageSizeChanged(this.paginationDataPerPage);
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Tools/user-setting/UserGroup.vue?vue&type=style&index=0&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/Tools/user-setting/UserGroup.vue?vue&type=style&index=0&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".halo-tree #special-access-tree .tree-expand {\n  display: none !important;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Tools/user-setting/UserGroup.vue?vue&type=style&index=0&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/Tools/user-setting/UserGroup.vue?vue&type=style&index=0&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../node_modules/css-loader??ref--7-1!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./UserGroup.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Tools/user-setting/UserGroup.vue?vue&type=style&index=0&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Tools/user-setting/UserGroup.vue?vue&type=template&id=77e97b9c&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/Tools/user-setting/UserGroup.vue?vue&type=template&id=77e97b9c& ***!
  \************************************************************************************************************************************************************************************************************************************/
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
      _c("navigation-header", {
        on: {
          showModal: _vm.showModal,
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
              getContextMenuItems: _vm.getContextMenu
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
      _c(
        "vs-prompt",
        {
          staticClass: "editor-user-group dialog-body",
          attrs: {
            id: _vm.firstDialog,
            type: _vm.dialog.typeDialog,
            "buttons-hidden": true,
            active: _vm.mainPopUp,
            title:
              _vm.modeDataValue == 2
                ? _vm.modeDataName.tracking + _vm.idData
                : (_vm.modeDataValue == 0
                    ? _vm.modeDataName.insert
                    : _vm.modeDataName.edit) + _vm.titleForm
          },
          on: {
            "update:active": function($event) {
              _vm.mainPopUp = $event
            }
          }
        },
        [
          _c(
            "div",
            { staticClass: "vs-con-loading__container p-4" },
            [
              _c(
                "vs-row",
                {
                  staticClass: "mt-2 ml-4",
                  attrs: {
                    "vs-type": "flex",
                    "vs-align": "center",
                    "vs-justify": "flex-start"
                  }
                },
                [
                  _c("vs-col", { attrs: { "vs-lg": "1" } }, [
                    _c("span", [_vm._v(_vm._s(_vm.$t("table.code")))])
                  ]),
                  _vm._v(" "),
                  _c(
                    "vs-col",
                    { attrs: { "vs-lg": "6" } },
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
                          maxLength: 20,
                          disabled: _vm.modeDataValue == _vm.modeData.edit,
                          type: "text",
                          "description-text": _vm._f("toString")(
                            _vm.errors.first("code") || _vm.dbErrors.code
                          ),
                          name: "code"
                        },
                        on: {
                          input: function(v) {
                            _vm.vModel.code = v.toUpperCase()
                          }
                        },
                        model: {
                          value: _vm.vModel.code,
                          callback: function($$v) {
                            _vm.$set(_vm.vModel, "code", $$v)
                          },
                          expression: "vModel.code"
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
                [
                  _c(
                    "vs-col",
                    { staticClass: "w-full" },
                    [
                      _c(
                        "vs-tabs",
                        {
                          model: {
                            value: _vm.vModel.tabIndex,
                            callback: function($$v) {
                              _vm.$set(_vm.vModel, "tabIndex", $$v)
                            },
                            expression: "vModel.tabIndex"
                          }
                        },
                        [
                          _c(
                            "vs-tab",
                            { attrs: { label: "Menu Access", value: "0" } },
                            [
                              _c(
                                _vm.scrollbarTag,
                                {
                                  tag: "component",
                                  staticClass: "scroll-area",
                                  attrs: {
                                    settings: _vm.perfectScrollbarSettings
                                  }
                                },
                                [
                                  _c(
                                    "vs-row",
                                    [
                                      _c(
                                        "vs-col",
                                        { staticClass: "w-full ml-4 pr-4" },
                                        [
                                          _c("v-tree", {
                                            ref: "tree",
                                            attrs: {
                                              data: _vm.menuList,
                                              halfcheck: true,
                                              radio: true,
                                              multiple: true
                                            },
                                            on: {
                                              "node-select": function($event) {
                                                return _vm.menuSelectTab1()
                                              },
                                              "node-check": function($event) {
                                                return _vm.menuCheckTab1()
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
                            "vs-tab",
                            { attrs: { label: "Report Access", value: "1" } },
                            [
                              _c(
                                _vm.scrollbarTag,
                                {
                                  tag: "component",
                                  staticClass: "scroll-area",
                                  attrs: {
                                    settings: _vm.perfectScrollbarSettings
                                  }
                                },
                                [
                                  _c(
                                    "vs-row",
                                    [
                                      _c(
                                        "vs-col",
                                        { staticClass: "w-full ml-4 pr-4" },
                                        [
                                          _c("v-tree", {
                                            ref: "tree",
                                            attrs: {
                                              data: _vm.reportList,
                                              halfcheck: true,
                                              radio: true,
                                              multiple: true
                                            },
                                            on: {
                                              "node-select": function($event) {
                                                return _vm.menuSelectTab2()
                                              },
                                              "node-check": function($event) {
                                                return _vm.menuCheckTab2()
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
                            "vs-tab",
                            { attrs: { label: "Special Access", value: "2" } },
                            [
                              _c(
                                _vm.scrollbarTag,
                                {
                                  tag: "component",
                                  staticClass: "scroll-area",
                                  attrs: {
                                    settings: _vm.perfectScrollbarSettings
                                  }
                                },
                                [
                                  _c(
                                    "vs-row",
                                    [
                                      _c(
                                        "vs-col",
                                        { staticClass: "w-full ml-4 pr-4" },
                                        [
                                          _c("v-tree", {
                                            ref: "tree",
                                            attrs: {
                                              id: "special-access-tree",
                                              data: _vm.specialAccessList,
                                              halfcheck: true,
                                              radio: true,
                                              multiple: true
                                            },
                                            on: {
                                              "node-select": function($event) {
                                                return _vm.menuSelectTab3()
                                              },
                                              "node-check": function($event) {
                                                return _vm.menuCheckTab3()
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
                            "vs-tab",
                            { attrs: { label: "Other Access", value: "3" } },
                            [
                              _c(
                                _vm.scrollbarTag,
                                {
                                  tag: "component",
                                  staticClass: "scroll-area",
                                  attrs: {
                                    settings: _vm.perfectScrollbarSettings
                                  }
                                },
                                [
                                  _c(
                                    "vs-row",
                                    [
                                      _c(
                                        "vs-col",
                                        { staticClass: "w-full ml-4 pr-4" },
                                        [
                                          _c("v-tree", {
                                            ref: "tree",
                                            attrs: {
                                              id: "other-access-tree",
                                              data: _vm.otherAccessList,
                                              halfcheck: true,
                                              radio: true,
                                              multiple: true
                                            },
                                            on: {
                                              "node-select": function($event) {
                                                return _vm.menuSelectTab4()
                                              },
                                              "node-check": function($event) {
                                                return _vm.menuCheckTab4()
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
                    "vs-col",
                    {
                      staticClass: "w-full flex mt-2",
                      attrs: { "vs-justify": "flex-end" }
                    },
                    [
                      _c(
                        "vs-button",
                        {
                          staticClass: "vs-con-loading__container",
                          attrs: {
                            disabled: _vm.btnSaveDisabled,
                            id: "button-save-main",
                            icon: "save",
                            color: "primary"
                          },
                          on: {
                            click: function($event) {
                              return _vm.saveData()
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
                              _vm.mainPopUp = false
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
          staticClass: "editor-user-group dialog-body",
          attrs: {
            active: _vm.trackingPopup,
            title: _vm.modeDataValue == 2 ? _vm.modeDataName.tracking : ""
          },
          on: {
            "update:active": function($event) {
              _vm.trackingPopup = $event
            }
          }
        },
        [
          _vm.modeDataValue == _vm.modeData.tracking
            ? _c(
                "div",
                { staticClass: "vs-con-loading__container p-4" },
                [
                  _c("tracking", {
                    attrs: {
                      idData: _vm.idData,
                      rowData: _vm.dataTracking,
                      theData: _vm.dataTracking,
                      tableName: _vm.mainTableName
                    }
                  })
                ],
                1
              )
            : _vm._e(),
          _vm._v(" "),
          _c(
            "footer",
            { staticClass: "footer" },
            [
              _c(
                "vs-col",
                { staticClass: "w-full flex" },
                [
                  _c(
                    "vs-button",
                    {
                      staticClass: "ml-auto",
                      attrs: { icon: "close", color: "grey" },
                      on: {
                        click: function($event) {
                          _vm.trackingPopup = false
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
        ]
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/views/pages/Tools/user-setting/UserGroup.vue":
/*!***********************************************************************!*\
  !*** ./resources/js/src/views/pages/Tools/user-setting/UserGroup.vue ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _UserGroup_vue_vue_type_template_id_77e97b9c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UserGroup.vue?vue&type=template&id=77e97b9c& */ "./resources/js/src/views/pages/Tools/user-setting/UserGroup.vue?vue&type=template&id=77e97b9c&");
/* harmony import */ var _UserGroup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UserGroup.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/Tools/user-setting/UserGroup.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _UserGroup_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UserGroup.vue?vue&type=style&index=0&lang=css& */ "./resources/js/src/views/pages/Tools/user-setting/UserGroup.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _UserGroup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _UserGroup_vue_vue_type_template_id_77e97b9c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _UserGroup_vue_vue_type_template_id_77e97b9c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/Tools/user-setting/UserGroup.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/Tools/user-setting/UserGroup.vue?vue&type=script&lang=js&":
/*!************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/Tools/user-setting/UserGroup.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserGroup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./UserGroup.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Tools/user-setting/UserGroup.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserGroup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/Tools/user-setting/UserGroup.vue?vue&type=style&index=0&lang=css&":
/*!********************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/Tools/user-setting/UserGroup.vue?vue&type=style&index=0&lang=css& ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_UserGroup_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/style-loader!../../../../../../../node_modules/css-loader??ref--7-1!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./UserGroup.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Tools/user-setting/UserGroup.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_UserGroup_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_UserGroup_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_UserGroup_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_UserGroup_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_UserGroup_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/src/views/pages/Tools/user-setting/UserGroup.vue?vue&type=template&id=77e97b9c&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/Tools/user-setting/UserGroup.vue?vue&type=template&id=77e97b9c& ***!
  \******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserGroup_vue_vue_type_template_id_77e97b9c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./UserGroup.vue?vue&type=template&id=77e97b9c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Tools/user-setting/UserGroup.vue?vue&type=template&id=77e97b9c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserGroup_vue_vue_type_template_id_77e97b9c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserGroup_vue_vue_type_template_id_77e97b9c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);