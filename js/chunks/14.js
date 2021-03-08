(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[14],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Tools/configurations/tab-components/Breakdown.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/Tools/configurations/tab-components/Breakdown.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_request_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/utils/request.js */ "./resources/js/src/utils/request.js");
/* harmony import */ var ag_grid_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ag-grid-vue */ "./node_modules/ag-grid-vue/main.js");
/* harmony import */ var ag_grid_vue__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ag_grid_vue__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _views_pages_Tools_configurations_tab_components_action_grid1__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/views/pages/Tools/configurations/tab-components/action_grid1 */ "./resources/js/src/views/pages/Tools/configurations/tab-components/action_grid1.js");
/* harmony import */ var _views_pages_components_Tracking_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/views/pages/components/Tracking.vue */ "./resources/js/src/views/pages/components/Tracking.vue");
/* harmony import */ var _views_pages_components_icon_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/views/pages/components/icon.js */ "./resources/js/src/views/pages/components/icon.js");
/* harmony import */ var _views_pages_components_smoke_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/views/pages/components/smoke.js */ "./resources/js/src/views/pages/components/smoke.js");
/* harmony import */ var _views_pages_components_checklist_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/views/pages/components/checklist.js */ "./resources/js/src/views/pages/components/checklist.js");
/* harmony import */ var _utils_format_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/utils/format.js */ "./resources/js/src/utils/format.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'Breakdown',
  props: ['titleForm', 'mainTableName', 'table', 'popupTracking', 'popupForm', 'data', 'dataLookUp'],
  components: {
    'ag-grid-vue': ag_grid_vue__WEBPACK_IMPORTED_MODULE_1__["AgGridVue"],
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
      width: 200
    }, {
      headerName: this.$t('table.subDepartment'),
      field: 'sub_department',
      width: 200
    }, {
      headerName: this.$t('table.account'),
      field: 'account',
      width: 150
    }, {
      headerName: this.$t('table.businessSource'),
      field: 'company',
      width: 250
    }, {
      headerName: this.$t('table.quantity'),
      field: 'quantity',
      width: 100,
      cellStyle: {
        textAlign: 'right'
      },
      valueFormatter: _utils_format_js__WEBPACK_IMPORTED_MODULE_7__["formatNumber"]
    }, {
      headerName: this.$t('table.amount'),
      field: 'amount',
      width: 100,
      cellStyle: {
        textAlign: 'right'
      },
      valueFormatter: _utils_format_js__WEBPACK_IMPORTED_MODULE_7__["formatNumber"]
    }, {
      headerName: this.$t('table.perPax'),
      field: 'per_pax',
      width: 90,
      cellStyle: {
        textAlign: 'center'
      },
      cellRenderer: 'checklistRenderer',
      cellRendererParams: 'params.data.per_pax'
    }, {
      headerName: this.$t('table.child'),
      field: 'include_child',
      width: 90,
      cellStyle: {
        textAlign: 'center'
      },
      cellRenderer: 'checklistRenderer',
      cellRendererParams: 'params.data.include_child'
    }, {
      headerName: this.$t('table.remark'),
      field: 'remark',
      width: 250
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
      width: 90
    }, {
      headerName: this.$t('table.extraPax'),
      field: 'extra_pax',
      width: 100,
      cellStyle: {
        textAlign: 'right'
      },
      valueFormatter: _utils_format_js__WEBPACK_IMPORTED_MODULE_7__["formatNumber"]
    }, {
      headerName: this.$t('table.perPax2'),
      field: 'per_pax_extra',
      width: 90,
      cellStyle: {
        textAlign: 'center'
      },
      cellRenderer: 'checklistRenderer',
      cellRendererParams: 'params.data.per_pax_extra'
    }, {
      headerName: this.$t('table.lastUpdate'),
      field: 'user_id',
      width: 100
    }]; //------------------end need setting manual for column table-----------------//

    this.context = {
      componentParent: this
    };
    this.frameworkComponents = {
      actionGrid: _views_pages_Tools_configurations_tab_components_action_grid1__WEBPACK_IMPORTED_MODULE_2__["default"],
      checklistRenderer: _views_pages_components_checklist_js__WEBPACK_IMPORTED_MODULE_6__["default"]
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
    "delete": function _delete(val) {
      this.$emit('delete', val);
    }
  },
  mounted: function mounted() {},
  watch: {},
  computed: {
    userId: {
      get: function get() {
        return this.$store.state.AppActiveUser.id;
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Tools/configurations/tab-components/BusinessSource.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/Tools/configurations/tab-components/BusinessSource.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_request_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/utils/request.js */ "./resources/js/src/utils/request.js");
/* harmony import */ var ag_grid_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ag-grid-vue */ "./node_modules/ag-grid-vue/main.js");
/* harmony import */ var ag_grid_vue__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ag_grid_vue__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _views_pages_Tools_configurations_tab_components_action_grid2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/views/pages/Tools/configurations/tab-components/action_grid2 */ "./resources/js/src/views/pages/Tools/configurations/tab-components/action_grid2.js");
/* harmony import */ var _views_pages_components_Tracking_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/views/pages/components/Tracking.vue */ "./resources/js/src/views/pages/components/Tracking.vue");
/* harmony import */ var _utils_format_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/utils/format.js */ "./resources/js/src/utils/format.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    'ag-grid-vue': ag_grid_vue__WEBPACK_IMPORTED_MODULE_1__["AgGridVue"],
    tracking: _views_pages_components_Tracking_vue__WEBPACK_IMPORTED_MODULE_3__["default"]
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
      width: 200
    }, {
      headerName: this.$t('table.account'),
      field: 'account',
      width: 150
    }, {
      headerName: this.$t('table.company'),
      field: 'company',
      width: 250
    }, {
      headerName: this.$t('table.commissionType'),
      field: 'commission_type',
      width: 150
    }, {
      headerName: this.$t('table.commissionValue'),
      field: 'commission_value',
      width: 100,
      cellStyle: {
        textAlign: 'right'
      },
      valueFormatter: _utils_format_js__WEBPACK_IMPORTED_MODULE_4__["formatNumber"]
    }, {
      headerName: this.$t('table.lastUpdate'),
      field: 'user_id',
      width: 100
    }]; //------------------end need setting manual for column table-----------------//

    this.context = {
      componentParent: this
    };
    this.frameworkComponents = {
      actionGrid: _views_pages_Tools_configurations_tab_components_action_grid2__WEBPACK_IMPORTED_MODULE_2__["default"]
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
    "delete": function _delete(val) {
      this.$emit('delete', val);
    } //------------------end need setting manual for crud-----------------//

  },
  mounted: function mounted() {},
  computed: {
    userId: {
      get: function get() {
        return this.$store.state.AppActiveUser.id;
      }
    }
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Tools/configurations/tab-components/Breakdown.vue?vue&type=template&id=378001ce&":
/*!*****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/Tools/configurations/tab-components/Breakdown.vue?vue&type=template&id=378001ce& ***!
  \*****************************************************************************************************************************************************************************************************************************************************/
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
                _c("span", [_vm._v("Breakdown")]),
                _vm._v(" "),
                _c(
                  "vs-button",
                  {
                    on: {
                      click: function($event) {
                        return _vm.showModal("", _vm.modeBreakdown.insert)
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
              style: _vm.StyleAgGridFrame2,
              attrs: {
                pagination: "true",
                paginationPageSize: _vm.paginationPageSize,
                suppressDragLeaveHidesColumns: true,
                suppressMakeColumnVisibleAfterUnGroup: true,
                rowGroupPanelShow: _vm.rowGroupPanelShow,
                enableRangeSelection: true,
                statusBar: _vm.statusBar,
                sideBar: _vm.sideBar,
                gridOptions: _vm.gridOptions,
                context: _vm.context,
                columnDefs: _vm.columnDefs,
                frameworkComponents: _vm.frameworkComponents,
                enableCellChangeFlash: true,
                rowSelection: _vm.rowSelection,
                rowData: _vm.data,
                defaultColDef: _vm.defColDef,
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Tools/configurations/tab-components/BusinessSource.vue?vue&type=template&id=e605239a&":
/*!**********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/Tools/configurations/tab-components/BusinessSource.vue?vue&type=template&id=e605239a& ***!
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
  return _c("div", [
    _vm.table
      ? _c(
          "div",
          [
            _c(
              "vs-row",
              { attrs: { "vs-type": "flex", "vs-justify": "space-between" } },
              [
                _c("span", [_vm._v("Business Source")]),
                _vm._v(" "),
                _c(
                  "vs-button",
                  {
                    on: {
                      click: function($event) {
                        return _vm.showModal("", _vm.modeBusinessSource.insert)
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
              style: _vm.StyleAgGridFrame2,
              attrs: {
                pagination: "true",
                paginationPageSize: _vm.paginationPageSize,
                suppressDragLeaveHidesColumns: true,
                suppressMakeColumnVisibleAfterUnGroup: true,
                rowGroupPanelShow: _vm.rowGroupPanelShow,
                enableRangeSelection: true,
                statusBar: _vm.statusBar,
                sideBar: _vm.sideBar,
                gridOptions: _vm.gridOptions,
                context: _vm.context,
                columnDefs: _vm.columnDefs,
                frameworkComponents: _vm.frameworkComponents,
                enableCellChangeFlash: true,
                rowSelection: _vm.rowSelection,
                rowData: _vm.data,
                defaultColDef: _vm.defColDef,
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

/***/ "./resources/js/src/views/pages/Tools/configurations/tab-components/Breakdown.vue":
/*!****************************************************************************************!*\
  !*** ./resources/js/src/views/pages/Tools/configurations/tab-components/Breakdown.vue ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Breakdown_vue_vue_type_template_id_378001ce___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Breakdown.vue?vue&type=template&id=378001ce& */ "./resources/js/src/views/pages/Tools/configurations/tab-components/Breakdown.vue?vue&type=template&id=378001ce&");
/* harmony import */ var _Breakdown_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Breakdown.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/Tools/configurations/tab-components/Breakdown.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Breakdown_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Breakdown_vue_vue_type_template_id_378001ce___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Breakdown_vue_vue_type_template_id_378001ce___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/Tools/configurations/tab-components/Breakdown.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/Tools/configurations/tab-components/Breakdown.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/Tools/configurations/tab-components/Breakdown.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Breakdown_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Breakdown.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Tools/configurations/tab-components/Breakdown.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Breakdown_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/Tools/configurations/tab-components/Breakdown.vue?vue&type=template&id=378001ce&":
/*!***********************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/Tools/configurations/tab-components/Breakdown.vue?vue&type=template&id=378001ce& ***!
  \***********************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Breakdown_vue_vue_type_template_id_378001ce___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Breakdown.vue?vue&type=template&id=378001ce& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Tools/configurations/tab-components/Breakdown.vue?vue&type=template&id=378001ce&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Breakdown_vue_vue_type_template_id_378001ce___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Breakdown_vue_vue_type_template_id_378001ce___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/pages/Tools/configurations/tab-components/BusinessSource.vue":
/*!*********************************************************************************************!*\
  !*** ./resources/js/src/views/pages/Tools/configurations/tab-components/BusinessSource.vue ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _BusinessSource_vue_vue_type_template_id_e605239a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BusinessSource.vue?vue&type=template&id=e605239a& */ "./resources/js/src/views/pages/Tools/configurations/tab-components/BusinessSource.vue?vue&type=template&id=e605239a&");
/* harmony import */ var _BusinessSource_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BusinessSource.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/Tools/configurations/tab-components/BusinessSource.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _BusinessSource_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _BusinessSource_vue_vue_type_template_id_e605239a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _BusinessSource_vue_vue_type_template_id_e605239a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/Tools/configurations/tab-components/BusinessSource.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/Tools/configurations/tab-components/BusinessSource.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/Tools/configurations/tab-components/BusinessSource.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BusinessSource_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./BusinessSource.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Tools/configurations/tab-components/BusinessSource.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BusinessSource_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/Tools/configurations/tab-components/BusinessSource.vue?vue&type=template&id=e605239a&":
/*!****************************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/Tools/configurations/tab-components/BusinessSource.vue?vue&type=template&id=e605239a& ***!
  \****************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BusinessSource_vue_vue_type_template_id_e605239a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./BusinessSource.vue?vue&type=template&id=e605239a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Tools/configurations/tab-components/BusinessSource.vue?vue&type=template&id=e605239a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BusinessSource_vue_vue_type_template_id_e605239a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BusinessSource_vue_vue_type_template_id_e605239a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/pages/Tools/configurations/tab-components/action_grid1.js":
/*!******************************************************************************************!*\
  !*** ./resources/js/src/views/pages/Tools/configurations/tab-components/action_grid1.js ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (vue__WEBPACK_IMPORTED_MODULE_0___default.a.extend({
  template: "\n                <div class=\"flex action-button\">\n                    <vs-dropdown vs-trigger-click class=\"cursor-pointer\">\n                        <vs-button :color=\"iconAction.menuColor\" type=\"flat\"><vs-icon icon=\"menu\" size=\"small\"></vs-icon></vs-button>\n                        <vs-dropdown-menu>\n                            <vs-dropdown-item @click=\"showPopUp(modeBreakdown.tracking)\"><img border=\"0\" width=\"20\" height=\"20\" src=\"/images/icons/tracking_icon24.png\"/>Tracking Data</vs-dropdown-item>\n                        </vs-dropdown-menu>\n                    </vs-dropdown>\n                    <vx-tooltip class=\"flex\" style=\"height:30px\" text=\"Edit data selected\"><vs-button @click=\"showPopUp(modeData.edit)\" :color=\"iconAction.editColor\" type=\"flat\"><img border=\"0\" width=\"20\" height=\"20\" src=\"/images/icons/edit_icon24.png\"/></vs-button></vx-tooltip>\n                    <vx-tooltip class=\"flex\" style=\"height:30px\" text=\"Delete data selected\"><vs-button @click=\"openAlert()\" :color=\"iconAction.deleteColor\" type=\"flat\"><img border=\"0\" width=\"20\" height=\"20\" src=\"/images/icons/delete_icon24.png\"/></vs-button></vx-tooltip>\n               </div>\n            ",
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

/***/ "./resources/js/src/views/pages/Tools/configurations/tab-components/action_grid2.js":
/*!******************************************************************************************!*\
  !*** ./resources/js/src/views/pages/Tools/configurations/tab-components/action_grid2.js ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (vue__WEBPACK_IMPORTED_MODULE_0___default.a.extend({
  template: "\n                <div class=\"flex action-button\">\n                    <vs-dropdown vs-trigger-click class=\"cursor-pointer\">\n                        <vs-button :color=\"iconAction.menuColor\" type=\"flat\"><vs-icon icon=\"menu\" size=\"small\"></vs-icon></vs-button>\n                        <vs-dropdown-menu>\n                            <vs-dropdown-item @click=\"showPopUp(modeBusinessSource.tracking)\"><img border=\"0\" width=\"20\" height=\"20\" src=\"/images/icons/tracking_icon24.png\"/>Tracking Data</vs-dropdown-item>\n                        </vs-dropdown-menu>\n                    </vs-dropdown>\n                    <vx-tooltip class=\"flex\" style=\"height:30px\" text=\"Edit data selected\"><vs-button @click=\"showPopUp(modeData.edit)\" :color=\"iconAction.editColor\" type=\"flat\"><img border=\"0\" width=\"20\" height=\"20\" src=\"/images/icons/edit_icon24.png\"/></vs-button></vx-tooltip>\n                    <vx-tooltip class=\"flex\" style=\"height:30px\" text=\"Delete data selected\"><vs-button @click=\"openAlert()\" :color=\"iconAction.deleteColor\" type=\"flat\"><img border=\"0\" width=\"20\" height=\"20\" src=\"/images/icons/delete_icon24.png\"/></vs-button></vx-tooltip>\n               </div>\n            ",
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

/***/ "./resources/js/src/views/pages/components/icon.js":
/*!*********************************************************!*\
  !*** ./resources/js/src/views/pages/components/icon.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_icon_IconClean__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/icon/IconClean */ "./resources/js/src/components/icon/IconClean.vue");
/* harmony import */ var _components_icon_IconReady__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/icon/IconReady */ "./resources/js/src/components/icon/IconReady.vue");
/* harmony import */ var _components_icon_IconDirty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/icon/IconDirty */ "./resources/js/src/components/icon/IconDirty.vue");
/* harmony import */ var vue_feather_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vue-feather-icons */ "./node_modules/vue-feather-icons/dist/vue-feather-icons.es.js");





/* harmony default export */ __webpack_exports__["default"] = (vue__WEBPACK_IMPORTED_MODULE_0___default.a.extend({
  components: {
    CheckIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_4__["CheckIcon"],
    IconClean: _components_icon_IconClean__WEBPACK_IMPORTED_MODULE_1__["default"],
    IconReady: _components_icon_IconReady__WEBPACK_IMPORTED_MODULE_2__["default"],
    IconDirty: _components_icon_IconDirty__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  template: "\n    <div style=\"margin-top:2px\">\n        <icon-clean v-if=\"data === 'Clean'\"></icon-clean>\n        <icon-ready v-else-if=\"data === 'Ready'\"></icon-ready>\n        <icon-dirty v-else></icon-dirty>\n    </div>\n         ",
  data: function data() {
    return {
      data: null
    };
  },
  computed: {},
  beforeMount: function beforeMount() {},
  created: function created() {},
  mounted: function mounted() {
    this.data = "".concat(this.params.data.status);
  },
  methods: {}
}));

/***/ })

}]);