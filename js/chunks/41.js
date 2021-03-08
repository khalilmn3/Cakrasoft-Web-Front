(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[41],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Tools/configurations/reservation1/RoomAmenities.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/Tools/configurations/reservation1/RoomAmenities.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_request_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/utils/request.js */ "./resources/js/src/utils/request.js");
/* harmony import */ var ag_grid_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ag-grid-vue */ "./node_modules/ag-grid-vue/main.js");
/* harmony import */ var ag_grid_vue__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ag_grid_vue__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _views_pages_components_action_grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/views/pages/components/action_grid */ "./resources/js/src/views/pages/components/action_grid.js");
/* harmony import */ var _components_FilterHeader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/FilterHeader */ "./resources/js/src/views/pages/Tools/components/FilterHeader.vue");
/* harmony import */ var _components_NavigationHeader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/NavigationHeader */ "./resources/js/src/views/pages/Tools/components/NavigationHeader.vue");
/* harmony import */ var _views_pages_components_Tracking_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/views/pages/components/Tracking.vue */ "./resources/js/src/views/pages/components/Tracking.vue");
/* harmony import */ var _utils_alert_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/utils/alert.js */ "./resources/js/src/utils/alert.js");
/* harmony import */ var _utils_dialog_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/utils/dialog.js */ "./resources/js/src/utils/dialog.js");
/* harmony import */ var _utils_general_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/utils/general.js */ "./resources/js/src/utils/general.js");
/* harmony import */ var _views_pages_components_Number__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/views/pages/components/Number */ "./resources/js/src/views/pages/components/Number.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//








 //inputnumber//


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'CreditCardCharge',
  props: ['titleForm', 'routeApi', 'mainTableName'],
  components: {
    'ag-grid-vue': ag_grid_vue__WEBPACK_IMPORTED_MODULE_1__["AgGridVue"],
    FilterHeader: _components_FilterHeader__WEBPACK_IMPORTED_MODULE_3__["default"],
    NavigationHeader: _components_NavigationHeader__WEBPACK_IMPORTED_MODULE_4__["default"],
    tracking: _views_pages_components_Tracking_vue__WEBPACK_IMPORTED_MODULE_5__["default"],
    InputNumber: _views_pages_components_Number__WEBPACK_IMPORTED_MODULE_9__["default"]
  },
  data: function data() {
    return {
      //Filter Data on Page Size
      vModelDefaultSearchData: '0',
      searchFilterData: [{
        text: this.$t('table.code'),
        value: '0'
      }, {
        text: this.$t('table.name'),
        value: '1'
      }, {
        text: this.$t('table.description'),
        value: '2'
      }, {
        text: this.$t('table.lastUpdate'),
        value: '3'
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
      sideBar: null,
      paginationPageSize: null,
      rowSelection: null,
      dataTracking: null,
      defColDef: null,
      //Parameter From Child
      idData: '',
      paramsData: '',
      //Mode Edit Or Insert(assign insert from parent, update from child)
      modeDataValue: 0,
      modeDataValueTracking: 0,
      //Pop Up
      mainPopUp: false,
      //------------------need setting manual for vModel-----------------//
      vModel: {},
      codes: [],
      imageUrl: '',
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
      width: 110
    }, {
      headerName: this.$t('table.name'),
      field: 'name',
      width: 300
    }, {
      headerName: this.$t('table.description'),
      field: 'description',
      width: 300
    }, {
      headerName: this.$t('table.lastUpdate'),
      field: 'user_id',
      width: 110
    }]; //------------------end need setting manual for column table-----------------//

    this.context = {
      componentParent: this
    };
    this.frameworkComponents = {
      actionGrid: _views_pages_components_action_grid__WEBPACK_IMPORTED_MODULE_2__["default"]
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
    //------------------------additional for context menu ag-Grid-----------//
    getContextMenu: function getContextMenu(params) {
      var _this = this;

      var node = params.node;

      if (node) {
        this.paramsData = node.data;
      }

      var result = [{
        name: this.$t('table.insert'),
        icon: Object(_utils_general_js__WEBPACK_IMPORTED_MODULE_8__["generateIconContextMenuAgGrid"])('add_icon24'),
        action: function action() {
          return _this.showModal('', 0);
        }
      }, {
        name: this.$t('table.update'),
        disabled: !node,
        icon: Object(_utils_general_js__WEBPACK_IMPORTED_MODULE_8__["generateIconContextMenuAgGrid"])('edit_icon24'),
        action: function action() {
          return _this.showModal(_this.paramsData, 1);
        }
      }, {
        name: this.$t('table.delete'),
        disabled: !node,
        icon: Object(_utils_general_js__WEBPACK_IMPORTED_MODULE_8__["generateIconContextMenuAgGrid"])('delete_icon24'),
        action: function action() {
          return _this.handleDeleteData(_this.paramsData);
        }
      }, 'separator', {
        name: this.$t('table.trackingData'),
        disabled: !node,
        icon: Object(_utils_general_js__WEBPACK_IMPORTED_MODULE_8__["generateIconContextMenuAgGrid"])('tracking_icon24'),
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
    //------------------need setting manual for crud-----------------//
    refreshData: function refreshData(search) {
      var _this2 = this;

      this.search = search;
      var selectedNodes = this.gridApi != null ? this.gridApi.getSelectedRows() : [];
      selectedNodes = selectedNodes.length > 0 ? selectedNodes[0] : {};
      this.$vs.loading({
        container: '#layout--main',
        scale: this.scaleLoadingMainLayout
      });
      _utils_request_js__WEBPACK_IMPORTED_MODULE_0__["default"].get(this.routeApi + '/table/datagrid', {
        params: search
      }).then(function (result) {
        _this2.rowData = result.data.modelGrid;

        _this2.$vs.loading.close('#layout--main>.con-vs-loading');

        _this2.$nextTick(function () {
          Object(_utils_general_js__WEBPACK_IMPORTED_MODULE_8__["rowSelectedAfterRefresh"])(_this2, selectedNodes, 'id_log');
        });
      })["catch"](function () {
        _utils_alert_js__WEBPACK_IMPORTED_MODULE_6__["default"].errorFetchDataAlert();
      });
    },
    getDataLookUp: function getDataLookUp() {
      var _this3 = this;

      _utils_request_js__WEBPACK_IMPORTED_MODULE_0__["default"].get(this.routeApi + '/form/datalookup').then(function (response) {
        _this3.codes = response.data;
      })["catch"](function () {});
    },
    resetData: function resetData() {
      this.vModel = {
        code: '',
        name: '',
        description: '',
        image: '',
        user_id: this.userInfo.code
      };
      this.imageUrl = '';
      this.dbErrors = {};
      this.$validator.reset();
      this.dataTracking = null;
      this.btnSaveDisabled = false;
    },
    showModal: function showModal(idData, modeData) {
      var _this4 = this;

      this.$vs.loading({
        container: '#layout--main',
        scale: this.scaleLoadingMainLayout
      });
      this.resetData(this.search);
      this.idData = idData;
      this.modeDataValue = modeData;
      this.mainPopUp = modeData == this.modeData.insert || modeData == this.modeData.tracking;

      if (modeData == this.modeData.edit) {
        this.getDataLookUp();
        this.editData();
      } else if (modeData == this.modeData.tracking) {
        this.trackingData(idData);
      } else if (modeData == this.modeData.insert) {
        this.getDataLookUp();
        setTimeout(function () {
          _this4.$vs.loading.close('#layout--main>.con-vs-loading');
        }, 100);
      }
    },
    editData: function editData() {
      var _this5 = this;

      _utils_request_js__WEBPACK_IMPORTED_MODULE_0__["default"].get(this.routeApi + '/' + this.idData.code + '/edit').then(function (response) {
        var data = response.data;
        _this5.vModel = data;
        _this5.mainPopUp = true;

        if (data.image !== null) {
          _this5.imageUrl = 'data:image/jpeg;base64, ' + data.image;
        }

        _this5.$vs.loading.close('#layout--main>.con-vs-loading');
      })["catch"](function (error) {
        _this5.$vs.loading.close('#layout--main>.con-vs-loading');

        _utils_alert_js__WEBPACK_IMPORTED_MODULE_6__["default"].errorFetchDataAlert();
      });
    },
    updateData: function updateData(data) {
      var _this6 = this;

      data.append('_method', 'PUT');
      _utils_request_js__WEBPACK_IMPORTED_MODULE_0__["default"].post(this.routeApi + '/' + this.idData.code, data).then(function () {
        _this6.refreshData(_this6.search);

        _utils_alert_js__WEBPACK_IMPORTED_MODULE_6__["default"].acceptAlertSucces();

        _this6.$vs.loading.close('#button-save-main>.con-vs-loading');

        _this6.mainPopUp = false;
      })["catch"](function (error) {
        _this6.btnSaveDisabled = false;
        var message = error.response.data.errors;
        _this6.dbErrors = message == undefined ? '' : message;

        _this6.$vs.loading.close('#button-save-main>.con-vs-loading');

        _utils_alert_js__WEBPACK_IMPORTED_MODULE_6__["default"].errorSaveDataAlert(message);
      });
    },
    insertData: function insertData(data) {
      var _this7 = this;

      _utils_request_js__WEBPACK_IMPORTED_MODULE_0__["default"].post(this.routeApi, data).then(function () {
        _this7.refreshData(_this7.search);

        _utils_alert_js__WEBPACK_IMPORTED_MODULE_6__["default"].acceptAlertSucces();

        _this7.$vs.loading.close('#button-save-main>.con-vs-loading');

        _this7.mainPopUp = false;
      })["catch"](function (error) {
        _this7.btnSaveDisabled = false;
        var message = error.response.data.errors;
        _this7.dbErrors = message == undefined ? '' : message;

        _this7.$vs.loading.close('#button-save-main>.con-vs-loading');

        _utils_alert_js__WEBPACK_IMPORTED_MODULE_6__["default"].errorSaveDataAlert(message);
      });
    },
    saveData: function saveData() {
      var _this8 = this;

      this.vModel.image = this.vModel.image == 'null' ? '' : this.vModel.image;
      var formData = new FormData();
      formData.append('code', this.vModel.code.code);
      formData.append('name', this.vModel.name);
      formData.append('description', this.vModel.description);
      formData.append('image', this.vModel.image);
      formData.append('user_id', this.vModel.user_id);
      this.$validator.validateAll().then(function (result) {
        if (result) {
          _this8.btnSaveDisabled = true;
          _this8.vModel.user_id = _this8.userInfo.code;

          if (_this8.modeDataValue == 1) {
            _this8.$vs.loading({
              container: '#button-save-main',
              scale: _this8.scaleLoadingButton
            });

            _this8.updateData(formData);
          } else {
            _this8.$vs.loading({
              container: '#button-save-main',
              scale: _this8.scaleLoadingButton
            });

            _this8.insertData(formData);
          }
        }
      });
    },
    handleDeleteData: function handleDeleteData(data) {
      _utils_dialog_js__WEBPACK_IMPORTED_MODULE_7__["default"].confirmationDelete(this, 'deleteData', data);
    },
    deleteData: function deleteData(idData) {
      var _this9 = this;

      this.$nextTick(function () {
        _this9.modeDataValue = _this9.modeData["delete"];
        Object(_utils_general_js__WEBPACK_IMPORTED_MODULE_8__["getRowIndexBefore"])(_this9);
      });
      var data = {
        code: idData.code,
        user_id: this.userInfo.code
      };
      this.$vs.loading({
        container: '#layout--main',
        scale: this.scaleLoadingMainLayout
      });
      _utils_request_js__WEBPACK_IMPORTED_MODULE_0__["default"].post(this.routeApi + '/delete', data).then(function () {
        _this9.refreshData(_this9.search);

        _this9.$vs.loading.close('#layout--main>.con-vs-loading');

        _utils_alert_js__WEBPACK_IMPORTED_MODULE_6__["default"].deleteAlertSuccess();
      })["catch"](function (error) {
        var message = error.response.data.errors;
        _this9.dbErrors = message == undefined ? '' : message;

        _this9.$vs.loading.close('#layout--main>.con-vs-loading');

        _utils_alert_js__WEBPACK_IMPORTED_MODULE_6__["default"].errorDeleteDataAlert(message);
      });
    },
    trackingData: function trackingData(idData) {
      var _this10 = this;

      var data = {
        id_log: idData.id_log,
        table: this.mainTableName
      };
      _utils_request_js__WEBPACK_IMPORTED_MODULE_0__["default"].post('tracking/datagrid', data).then(function (result) {
        _this10.dataTracking = result.data.modelGrid;
        setTimeout(function () {
          _this10.$vs.loading.close('#layout--main>.con-vs-loading');
        }, 100);
      })["catch"](function () {
        _this10.$vs.loading.close('#layout--main>.con-vs-loading');

        _utils_alert_js__WEBPACK_IMPORTED_MODULE_6__["default"].errorFetchDataAlert();
      });
    },
    changeCode: function changeCode(value) {
      this.vModel.name = value.name;
    },
    //------------------method image uploader----------------------------//
    handleAddImage: function handleAddImage(e) {
      var file = e.target.files[0];
      var isJPG = file.type === 'image/jpeg';
      var isPNG = file.type === 'image/png';

      if (isJPG || isPNG) {
        this.imageUrl = URL.createObjectURL(file);
        this.vModel.image = file;
      } else {
        this.$vs.notify({
          color: 'danger',
          title: this.$t('message.errorTitle'),
          text: this.$t('message.imageFormat')
        });
      }
    },
    deleteImage: function deleteImage() {
      this.imageUrl = '';
      this.vModel.image = '';
    }
  },
  beforeRouteLeave: function beforeRouteLeave(to, from, next) {
    if (this.mainPopUp) {
      this.mainPopUp = false;
      next(false);
    } else {
      next();
    }
  },
  computed: {
    userId: {
      get: function get() {
        return this.$store.state.AppActiveUser.id;
      }
    }
  },
  //------------------end need setting manual for crud-----------------//
  mounted: function mounted() {
    this.gridApi = this.gridOptions.api;
    this.ColumnApi = this.gridOptions.columnApi;
    this.onPageSizeChanged(this.paginationDataPerPage);
  }
});

/***/ }),

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Tools/configurations/reservation1/RoomAmenities.vue?vue&type=template&id=02c8380b&":
/*!*******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/Tools/configurations/reservation1/RoomAmenities.vue?vue&type=template&id=02c8380b& ***!
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
          class: { "width-600p": _vm.modeDataValue == _vm.modeData.tracking },
          attrs: {
            "buttons-hidden": "",
            active: _vm.mainPopUp,
            title:
              _vm.modeDataValue == 2
                ? _vm.modeDataName.tracking + _vm.idData.code
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
          _vm.modeDataValue == _vm.modeData.tracking
            ? _c(
                "div",
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
            : _c(
                "div",
                { staticClass: "popup-body vs-con-loading__container" },
                [
                  _c(
                    "div",
                    {
                      staticClass: "popup-container",
                      staticStyle: { padding: "20px", "padding-top": "0px" }
                    },
                    [
                      _c(
                        "vs-row",
                        { staticClass: "mb-3" },
                        [
                          _c(
                            "vs-col",
                            { staticClass: "w-full", attrs: { "vs-lg": "3" } },
                            [_c("span", [_vm._v(_vm._s(_vm.$t("table.code")))])]
                          ),
                          _vm._v(" "),
                          _c(
                            "vs-col",
                            {
                              staticClass: "wrap-form-select w-full",
                              attrs: { "vs-lg": "5" }
                            },
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
                                  disabled:
                                    _vm.modeDataValue == _vm.modeData.edit,
                                  label: "code",
                                  options: _vm.codes,
                                  name: "code"
                                },
                                on: {
                                  input: function($event) {
                                    _vm.vModel.name = _vm.vModel.code.name
                                  }
                                },
                                scopedSlots: _vm._u([
                                  {
                                    key: "option",
                                    fn: function(option) {
                                      return [
                                        _vm._v(
                                          "\n                            " +
                                            _vm._s(option.code) +
                                            " | " +
                                            _vm._s(option.name) +
                                            "\n                        "
                                        )
                                      ]
                                    }
                                  }
                                ]),
                                model: {
                                  value: _vm.vModel.code,
                                  callback: function($$v) {
                                    _vm.$set(_vm.vModel, "code", $$v)
                                  },
                                  expression: "vModel.code"
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
                                      value: _vm.errors.has("code"),
                                      expression: "errors.has('code')"
                                    }
                                  ],
                                  staticClass: "error-text text-danger"
                                },
                                [
                                  _vm._v(
                                    _vm._s(
                                      _vm._f("toString")(
                                        _vm.errors.first("code") ||
                                          _vm.dbErrors.code
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
                          staticClass: "mb-3",
                          attrs: {
                            "vs-type": "flex",
                            "vs-justify": "flex-start",
                            "vs-w": "12"
                          }
                        },
                        [
                          _c(
                            "vs-col",
                            { staticClass: "w-full", attrs: { "vs-lg": "3" } },
                            [_c("span", [_vm._v(_vm._s(_vm.$t("table.name")))])]
                          ),
                          _vm._v(" "),
                          _c(
                            "vs-col",
                            { staticClass: "w-full", attrs: { "vs-lg": "9" } },
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
                                  maxLength: 100,
                                  type: "text",
                                  "description-text": _vm._f("toString")(
                                    _vm.errors.first("name") ||
                                      _vm.dbErrors.name
                                  ),
                                  name: "name"
                                },
                                model: {
                                  value: _vm.vModel.name,
                                  callback: function($$v) {
                                    _vm.$set(_vm.vModel, "name", $$v)
                                  },
                                  expression: "vModel.name"
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
                          staticClass: "mb-3",
                          attrs: {
                            "vs-type": "flex",
                            "vs-justify": "flex-start",
                            "vs-w": "12"
                          }
                        },
                        [
                          _c(
                            "vs-col",
                            { staticClass: "w-full", attrs: { "vs-lg": "3" } },
                            [
                              _c("span", [
                                _vm._v(_vm._s(_vm.$t("table.description")))
                              ])
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "vs-col",
                            {
                              staticClass: "w-full vs-input",
                              attrs: { "vs-lg": "9" }
                            },
                            [
                              _c("vs-textarea", {
                                staticClass: "w-full",
                                attrs: { type: "text" },
                                model: {
                                  value: _vm.vModel.description,
                                  callback: function($$v) {
                                    _vm.$set(_vm.vModel, "description", $$v)
                                  },
                                  expression: "vModel.description"
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
                          staticClass: "mt-3",
                          attrs: {
                            "vs-w": "12",
                            "vs-type": "flex",
                            "vs-justify": "center"
                          }
                        },
                        [
                          _c(
                            "vs-col",
                            { staticClass: "w-full", attrs: { "vs-lg": "3" } },
                            [
                              _c("span", [
                                _vm._v(_vm._s(_vm.$t("table.image")))
                              ])
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "vs-col",
                            {
                              staticClass: "w-full vs-input",
                              attrs: { "vs-lg": "9" }
                            },
                            [
                              _c(
                                "div",
                                {
                                  staticClass: "text-center image-container-64"
                                },
                                [
                                  _vm.imageUrl
                                    ? _c("img", {
                                        staticClass: "image-content-64",
                                        attrs: { src: _vm.imageUrl }
                                      })
                                    : _vm._e(),
                                  _vm._v(" "),
                                  !_vm.imageUrl
                                    ? _c(
                                        "span",
                                        {
                                          staticClass: "upload-text",
                                          attrs: {
                                            onclick:
                                              "document.getElementById('image-upload').click()"
                                          }
                                        },
                                        [
                                          _c("vs-icon", {
                                            attrs: {
                                              "icon-pack": "feather",
                                              icon: "icon-plus"
                                            }
                                          })
                                        ],
                                        1
                                      )
                                    : _vm._e(),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    {
                                      staticClass: "delete-image",
                                      on: { click: _vm.deleteImage }
                                    },
                                    [
                                      _vm.imageUrl
                                        ? _c("vs-icon", {
                                            attrs: { icon: "clear" }
                                          })
                                        : _vm._e()
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c("vs-input", {
                                    attrs: { id: "image-upload", type: "file" },
                                    on: { change: _vm.handleAddImage }
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
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



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

/***/ "./resources/js/src/views/pages/Tools/configurations/reservation1/RoomAmenities.vue":
/*!******************************************************************************************!*\
  !*** ./resources/js/src/views/pages/Tools/configurations/reservation1/RoomAmenities.vue ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _RoomAmenities_vue_vue_type_template_id_02c8380b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RoomAmenities.vue?vue&type=template&id=02c8380b& */ "./resources/js/src/views/pages/Tools/configurations/reservation1/RoomAmenities.vue?vue&type=template&id=02c8380b&");
/* harmony import */ var _RoomAmenities_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RoomAmenities.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/Tools/configurations/reservation1/RoomAmenities.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _RoomAmenities_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _RoomAmenities_vue_vue_type_template_id_02c8380b___WEBPACK_IMPORTED_MODULE_0__["render"],
  _RoomAmenities_vue_vue_type_template_id_02c8380b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/Tools/configurations/reservation1/RoomAmenities.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/Tools/configurations/reservation1/RoomAmenities.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/Tools/configurations/reservation1/RoomAmenities.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RoomAmenities_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./RoomAmenities.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Tools/configurations/reservation1/RoomAmenities.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RoomAmenities_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/Tools/configurations/reservation1/RoomAmenities.vue?vue&type=template&id=02c8380b&":
/*!*************************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/Tools/configurations/reservation1/RoomAmenities.vue?vue&type=template&id=02c8380b& ***!
  \*************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RoomAmenities_vue_vue_type_template_id_02c8380b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./RoomAmenities.vue?vue&type=template&id=02c8380b& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Tools/configurations/reservation1/RoomAmenities.vue?vue&type=template&id=02c8380b&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RoomAmenities_vue_vue_type_template_id_02c8380b___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RoomAmenities_vue_vue_type_template_id_02c8380b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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



/***/ })

}]);