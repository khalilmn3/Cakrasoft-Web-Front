(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/components/report/Template.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/components/report/Template.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_alert_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/utils/alert.js */ "./resources/js/src/utils/alert.js");
/* harmony import */ var _utils_dialog_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/utils/dialog.js */ "./resources/js/src/utils/dialog.js");
/* harmony import */ var _api_report_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/api/report.js */ "./resources/js/src/api/report.js");
/* harmony import */ var _utils_format_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/utils/format.js */ "./resources/js/src/utils/format.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_icon_IconComp__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/icon/IconComp */ "./resources/js/src/components/icon/IconComp.vue");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//






var reportResource = new _api_report_js__WEBPACK_IMPORTED_MODULE_3__["default"]();
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    query: Object
  },
  components: {
    IconComp: _components_icon_IconComp__WEBPACK_IMPORTED_MODULE_6__["default"]
  },
  data: function data() {
    return {
      showReport: false,
      jsonObjectReport: {},
      exportReportAccess: ''
    };
  },
  methods: {
    print: function () {
      var _print = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(params, reportDirectory) {
        var report, options, viewer, dataSet, _ref, data, jsonData, dataCompany, dataReport, listDataSource, dataSource, i, dataColumn, page, pageWidth, pageHeight, pageDifferent, marginLeft, marginRight, marginTop, marginBottom, pageWidthSizeHalf, reportTitleBand, reportTitle, reportDescription, companyName, companyStreet, divColumnWidth, headerBand, groupHeaderBand1, textGroupHeader1, valueGroupHeader1, groupHeaderBand2, textGroupHeader2, valueGroupHeader2, groupHeaderBand3, textGroupHeader3, valueGroupHeader3, dataBand, groupFooterBand3, groupFooterBand2, groupFooterBand1, footerBand, pos, columnWidth, posFooter, columnWidthFooter, groupFooterBorderSide, isTextTotalFooter, nameIndex, index, headerText, dataText, dataTextValue, footerText, footerTextValue, footerTextTotal, groupFooterTextTotal3, groupFooterTextTotal2, groupFooterTextTotal1, textGroupFooter3, textGroupFooter2, textGroupFooter1, pageFooterBand, pageFooterPrinter, pageFooterPages, _ref2, _data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                // this.$vs.loading({container:'#layout--main',scale:this.scaleLoadingMainLayout});
                report = new Stimulsoft.Report.StiReport();
                options = new Stimulsoft.Viewer.StiViewerOptions();
                options.appearance.backgroundColor = Stimulsoft.System.Drawing.Color.gray;
                options.appearance.pageBorderColor = Stimulsoft.System.Drawing.Color.yellow;
                options.appearance.fullScreenMode = this.mStimulsoftReportSetting.fullScreenMode;
                options.appearance.scrollbarsMode = this.mStimulsoftReportSetting.scrollbarsMode;
                options.appearance.showTooltips = this.mStimulsoftReportSetting.showTooltips;
                options.toolbar.printDestination = Stimulsoft.Viewer.StiPrintDestination.Pdf;
                options.toolbar.backgroundColor = Stimulsoft.System.Drawing.Color.white;
                options.toolbar.borderColor = Stimulsoft.System.Drawing.Color.gray;
                options.toolbar.viewMode = Stimulsoft.Viewer.StiWebViewMode.Continuous;
                options.toolbar.showPrintButton = this.mStimulsoftReportSetting.showPrintButton;
                options.toolbar.showDesignButton = this.mStimulsoftReportSetting.showDesignButton;
                options.toolbar.showAboutButton = this.mStimulsoftReportSetting.showAboutButton;
                options.toolbar.showOpenButton = this.mStimulsoftReportSetting.showOpenButton;
                options.toolbar.showSaveButton = this.mStimulsoftReportSetting.showSaveButton;
                options.toolbar.showSendEmailButton = this.mStimulsoftReportSetting.showSendEmailButton;
                options.exports.showExportToPdf = this.mStimulsoftReportSetting.showExportToPdf;
                options.exports.showExportToDocument = this.mStimulsoftReportSetting.showExportToDocument;
                options.exports.showExportToHtml = this.mStimulsoftReportSetting.showExportToHtml;
                options.exports.showExportToHtml5 = this.mStimulsoftReportSetting.showExportToHtml5;
                options.exports.ShowExportToWord2007 = this.mStimulsoftReportSetting.ShowExportToWord2007;
                options.exports.showExportToExcel2007 = this.mStimulsoftReportSetting.showExportToExcel2007;
                viewer = new window.Stimulsoft.Viewer.StiViewer(options, 'StiViewer', false);
                report.dictionary.databases.clear();
                _context.prev = 25;
                dataSet = new Stimulsoft.System.Data.DataSet();

                if (!(params.templateID > 0)) {
                  _context.next = 35;
                  break;
                }

                _context.next = 30;
                return reportResource.processReportTemplate(params);

              case 30:
                _ref = _context.sent;
                data = _ref.data;

                //console.log(data);
                if (data.data.length > 0) {
                  //data.fieldData[0] = Header Title
                  //data.fieldData[1] = Databand Text
                  //data.fieldData[2] = Format Code Databand
                  //data.fieldData[3] = Format Value Databand
                  //data.fieldData[4] = width Header & Databand & Footer
                  //data.fieldData[5] = Header Font Size
                  //data.fieldData[6] = Data Band Font Size
                  //data.fieldData[7] = Header Font Color
                  //data.fieldData[8] = Data Band Font Color
                  //data.fieldData[9] = Header Aligment
                  //data.fieldData[10] = Data Band Aligment
                  //data.fieldData[11] = Font Header & data band & Footer
                  //data.fieldData[12] = Footer
                  //data.template[0] = Template report
                  jsonData = data;
                  dataSet.readJson(jsonData);
                  dataCompany = dataSet.tables.getByIndex(0);
                  dataReport = dataSet.tables.getByIndex(1); // Add data to datastore

                  report.regData("dataReport", "", dataSet);
                  listDataSource = {
                    data1: dataReport.tableName,
                    data2: dataReport.tableName,
                    data3: dataReport.tableName,
                    data4: dataReport.tableName,
                    data5: dataReport.tableName,
                    data6: dataReport.tableName,
                    data7: dataReport.tableName,
                    data8: dataReport.tableName,
                    data9: dataReport.tableName,
                    data10: dataReport.tableName,
                    data11: dataReport.tableName,
                    data12: dataReport.tableName,
                    data13: dataReport.tableName,
                    data14: dataReport.tableName,
                    data15: dataReport.tableName,
                    data16: dataReport.tableName,
                    data17: dataReport.tableName,
                    data18: dataReport.tableName,
                    data19: dataReport.tableName,
                    data20: dataReport.tableName
                  }; // Fill dictionary Max 20 Column Allowed

                  dataSource = new Stimulsoft.Report.Dictionary.StiDataTableSource(listDataSource.data1, listDataSource.data2, listDataSource.data3, listDataSource.data4, listDataSource.data5, listDataSource.data6, listDataSource.data7, listDataSource.data8, listDataSource.data9, listDataSource.data10, listDataSource.data11, listDataSource.data12, listDataSource.data13, listDataSource.data14, listDataSource.data15, listDataSource.data16, listDataSource.data17, listDataSource.data18, listDataSource.data19, listDataSource.data20); // Add All Column Select Field

                  for (i in dataReport.columns.list) {
                    dataColumn = dataReport.columns.list[i];
                    dataSource.columns.add(new Stimulsoft.Report.Dictionary.StiDataColumn(dataColumn.columnName, dataColumn.columnName, dataColumn.columnName));
                  } //Asign to datasource


                  report.dictionary.dataSources.add(dataSource);
                  page = report.pages.getByIndex(0); //Setup Paper Size

                  pageWidth = data.template[0].pageWidth;
                  pageHeight = data.template[0].pageHeight;
                  pageDifferent = 0; //page.paperSize 0 = Custom, 1 = A4, 2=Letter, 3=Legal 4=Folio;

                  if (data.template[0].pageSize == 1) {
                    page.paperSize = Stimulsoft.System.Drawing.Printing.PaperKind.A4;
                  } else if (data.template[0].pageSize == 2) {
                    page.paperSize = Stimulsoft.System.Drawing.Printing.PaperKind.Letter;
                  } else if (data.template[0].pageSize == 3) {
                    page.paperSize = Stimulsoft.System.Drawing.Printing.PaperKind.Legal;
                  } else if (data.template[0].pageSize == 4) {
                    page.paperSize = Stimulsoft.System.Drawing.Printing.PaperKind.Folio;
                  } else {
                    page.paperSize = Stimulsoft.System.Drawing.Printing.PaperKind.Custom;
                  } //Orientation '-1' = Portrait, '0' = Landscape


                  if (data.template[0].orientation == '-1') {
                    page.orientation = Stimulsoft.Report.Components.StiPageOrientation.Portrait;

                    if (data.template[0].pageSize == 0) {
                      page.pageHeight = parseFloat(pageHeight);
                      page.PageWidth = parseFloat(pageWidth);
                    }

                    pageWidth = page.pageWidth;
                    pageHeight = page.pageHeight;
                  } else {
                    page.orientation = Stimulsoft.Report.Components.StiPageOrientation.Landscape;

                    if (data.template[0].pageSize == 0) {
                      page.pageHeight = parseFloat(pageWidth);
                      page.pageWidth = parseFloat(pageHeight);
                    }

                    pageWidth = page.pageWidth;
                    pageHeight = page.pageHeight;
                    pageDifferent = pageWidth - pageHeight - (marginLeft + marginRight);
                  } //Setup page Margin


                  marginLeft = 1;
                  marginRight = 1;
                  marginTop = 1;
                  marginBottom = 1;
                  page.margins.left = marginLeft;
                  page.margins.right = marginRight;
                  page.margins.top = marginTop;
                  page.margins.bottom = marginBottom;
                  pageWidthSizeHalf = (pageWidth - marginLeft - marginRight) / 2; //Create ReportTitleBand1

                  reportTitleBand = new Stimulsoft.Report.Components.StiReportTitleBand();
                  reportTitleBand.height = 1.8;
                  reportTitleBand.name = "ReportTitleBand";
                  page.components.add(reportTitleBand); //Create stiText Title Report

                  reportTitle = new Stimulsoft.Report.Components.StiText();
                  reportTitle.clientRectangle = new Stimulsoft.Base.Drawing.RectangleD(0, 0, pageWidthSizeHalf, 0.6);
                  reportTitle.font = new Font('Arial', 12, Stimulsoft.System.Drawing.FontStyle.Bold);
                  reportTitle.horAlignment = Stimulsoft.Base.Drawing.StiTextHorAlignment.Left;
                  reportTitle.text = data.template[0].reportName;
                  reportTitle.name = "reportTitle";
                  reportTitle.border.side = Stimulsoft.Base.Drawing.StiBorderSides.None;
                  reportTitle.growToHeight = true;
                  reportTitle.wordWrap = true;
                  reportTitleBand.components.add(reportTitle); //Create stitext Description Report

                  reportDescription = new Stimulsoft.Report.Components.StiText();
                  reportDescription.clientRectangle = new Stimulsoft.Base.Drawing.RectangleD(0, 0.6, pageWidthSizeHalf, 0.8);
                  reportDescription.font = new Font('Arial', 9);
                  reportDescription.horAlignment = Stimulsoft.Base.Drawing.StiTextHorAlignment.Left;
                  reportDescription.text = params.dateDescription;
                  reportDescription.name = "reportDescription";
                  reportDescription.border.side = Stimulsoft.Base.Drawing.StiBorderSides.None;
                  reportDescription.growToHeight = true;
                  reportDescription.wordWrap = true;
                  reportTitleBand.components.add(reportDescription); //Create stiText company name

                  companyName = new Stimulsoft.Report.Components.StiText();
                  companyName.clientRectangle = new Stimulsoft.Base.Drawing.RectangleD(pageWidthSizeHalf, 0, pageWidthSizeHalf, 0.6);
                  companyName.font = new Font('Arial', 12, Stimulsoft.System.Drawing.FontStyle.Bold);
                  companyName.horAlignment = Stimulsoft.Base.Drawing.StiTextHorAlignment.Right;
                  companyName.text = data.company.name;
                  companyName.name = "companyName";
                  companyName.border.side = Stimulsoft.Base.Drawing.StiBorderSides.None;
                  companyName.growToHeight = true;
                  companyName.wordWrap = true;
                  reportTitleBand.components.add(companyName); //Create stitext Street company

                  companyStreet = new Stimulsoft.Report.Components.StiText();
                  companyStreet.clientRectangle = new Stimulsoft.Base.Drawing.RectangleD(pageWidthSizeHalf, 0.6, pageWidthSizeHalf, 0.8);
                  companyStreet.font = new Font('Arial', 9);
                  companyStreet.horAlignment = Stimulsoft.Base.Drawing.StiTextHorAlignment.Right;
                  companyStreet.text = data.company.CityStreet;
                  companyStreet.name = "companyStreet";
                  companyStreet.border.side = Stimulsoft.Base.Drawing.StiBorderSides.None;
                  companyStreet.growToHeight = true;
                  companyStreet.wordWrap = true;
                  reportTitleBand.components.add(companyStreet);
                  divColumnWidth = 37.8; // Create HeaderBand

                  headerBand = new Stimulsoft.Report.Components.StiHeaderBand();
                  headerBand.height = data.template[0].headerHeight / divColumnWidth;
                  headerBand.name = "HeaderBand";
                  page.components.add(headerBand); //Group Header Band 1

                  if (data.template[0].reportGroupLevel > 0) {
                    groupHeaderBand1 = new Stimulsoft.Report.Components.StiGroupHeaderBand();
                    groupHeaderBand1.dataSourceName = dataReport.tableName;
                    groupHeaderBand1.height = 0.8; //data.template[0].headerHeight/divColumnWidth;

                    groupHeaderBand1.condition = data.groupingField[0].match(' ') == null ? '{data.' + data.groupingField[0] + '}' : '{data.[' + data.groupingField[0] + ']}';
                    groupHeaderBand1.name = "GroupHeaderBand1";
                    page.components.add(groupHeaderBand1); //Add stitext

                    textGroupHeader1 = new Stimulsoft.Report.Components.StiText();
                    textGroupHeader1.clientRectangle = new Stimulsoft.Base.Drawing.RectangleD(0, 0, pageWidth - marginLeft - marginRight, groupHeaderBand1.height);
                    textGroupHeader1.font = new Font('Arial', 9, Stimulsoft.System.Drawing.FontStyle.Bold);
                    textGroupHeader1.horAlignment = Stimulsoft.Base.Drawing.StiTextHorAlignment.Left;
                    textGroupHeader1.vertAlignment = Stimulsoft.Base.Drawing.StiTextHorAlignment.Bottom;
                    valueGroupHeader1 = data.groupingField[0].match(' ') == null ? '{data.' + data.groupingField[0] + '}' : '{data.[' + data.groupingField[0] + ']}';
                    textGroupHeader1.text = data.groupingField[0] + ': ' + valueGroupHeader1;
                    textGroupHeader1.name = "textGroupHeader1";

                    if (data.template[0].verticalBorder == '-1') {
                      textGroupHeader1.border.side = Stimulsoft.Base.Drawing.StiBorderSides.Left | Stimulsoft.Base.Drawing.StiBorderSides.Right;
                    } else {
                      textGroupHeader1.border.side = Stimulsoft.Base.Drawing.StiBorderSides.Top;
                    }

                    groupHeaderBand1.components.add(textGroupHeader1);
                  } //Group Header Band 2


                  if (data.template[0].reportGroupLevel > 1) {
                    groupHeaderBand2 = new Stimulsoft.Report.Components.StiGroupHeaderBand();
                    groupHeaderBand2.dataSourceName = groupHeaderBand1.dataSourceName;
                    groupHeaderBand2.height = groupHeaderBand1.height;
                    groupHeaderBand2.condition = data.groupingField[1].match(' ') == null ? '{data.' + data.groupingField[1] + '}' : '{data.[' + data.groupingField[1] + ']}';
                    groupHeaderBand2.name = "groupHeaderBand2";
                    page.components.add(groupHeaderBand2); //Add stitext

                    textGroupHeader2 = new Stimulsoft.Report.Components.StiText();
                    textGroupHeader2.clientRectangle = textGroupHeader1.clientRectangle;
                    textGroupHeader2.font = textGroupHeader1.font;
                    textGroupHeader2.horAlignment = textGroupHeader1.horAlignment;
                    textGroupHeader2.vertAlignment = textGroupHeader1.vertAlignment;
                    valueGroupHeader2 = data.groupingField[1].match(' ') == null ? '{data.' + data.groupingField[1] + '}' : '{data.[' + data.groupingField[1] + ']}';
                    textGroupHeader2.text = '     ' + data.groupingField[1] + ': ' + valueGroupHeader2;
                    textGroupHeader2.name = "textGroupHeader2";
                    textGroupHeader2.border.side = textGroupHeader1.border.side;
                    groupHeaderBand2.components.add(textGroupHeader2);
                  } //Group Header Band 3


                  if (data.template[0].reportGroupLevel > 2) {
                    groupHeaderBand3 = new Stimulsoft.Report.Components.StiGroupHeaderBand();
                    groupHeaderBand3.dataSourceName = groupHeaderBand1.dataSourceName;
                    groupHeaderBand3.height = groupHeaderBand1.height;
                    groupHeaderBand3.condition = data.groupingField[2].match(' ') == null ? '{data.' + data.groupingField[2] + '}' : '{data.[' + data.groupingField[2] + ']}';
                    groupHeaderBand3.name = "groupHeaderBand3";
                    page.components.add(groupHeaderBand3); //Add stitext

                    textGroupHeader3 = new Stimulsoft.Report.Components.StiText();
                    textGroupHeader3.clientRectangle = textGroupHeader1.clientRectangle;
                    textGroupHeader3.font = textGroupHeader1.font;
                    textGroupHeader3.horAlignment = textGroupHeader1.horAlignment;
                    textGroupHeader3.vertAlignment = textGroupHeader1.vertAlignment;
                    valueGroupHeader3 = data.groupingField[2].match(' ') == null ? '{data.' + data.groupingField[2] + '}' : '{data.[' + data.groupingField[2] + ']}';
                    textGroupHeader3.text = '          ' + data.groupingField[2] + ': ' + valueGroupHeader3;
                    textGroupHeader3.name = "textGroupHeader3";
                    textGroupHeader3.border.side = textGroupHeader1.border.side;
                    groupHeaderBand3.components.add(textGroupHeader3);
                  } // Create Databand


                  dataBand = new Stimulsoft.Report.Components.StiDataBand();
                  dataBand.dataSourceName = dataReport.tableName;
                  dataBand.height = data.template[0].rowHeight / divColumnWidth;
                  dataBand.name = "DataBand";
                  page.components.add(dataBand); // Create Group Footer Band 3

                  if (data.template[0].reportGroupLevel > 2) {
                    groupFooterBand3 = new Stimulsoft.Report.Components.StiGroupFooterBand();
                    groupFooterBand3.dataSourceName = dataReport.tableName;
                    groupFooterBand3.height = dataBand.height;
                    groupFooterBand3.name = "groupFooterBand3";
                    page.components.add(groupFooterBand3);
                  } // Create Group Footer Band 2


                  if (data.template[0].reportGroupLevel > 1) {
                    groupFooterBand2 = new Stimulsoft.Report.Components.StiGroupFooterBand();
                    groupFooterBand2.dataSourceName = dataReport.tableName;
                    groupFooterBand2.height = dataBand.height;
                    groupFooterBand2.name = "groupFooterBand2";
                    page.components.add(groupFooterBand2);
                  } // Create Group Footer Band 1


                  if (data.template[0].reportGroupLevel > 0) {
                    groupFooterBand1 = new Stimulsoft.Report.Components.StiGroupFooterBand();
                    groupFooterBand1.dataSourceName = dataReport.tableName;
                    groupFooterBand1.height = dataBand.height;
                    groupFooterBand1.name = "groupFooterBand1";
                    page.components.add(groupFooterBand1);
                  } // Create FooterBand


                  footerBand = new Stimulsoft.Report.Components.StiFooterBand();
                  footerBand.height = data.template[0].rowHeight / divColumnWidth;
                  footerBand.name = "FooterBand";
                  page.components.add(footerBand);
                  pos = 0;
                  columnWidth = 0;
                  posFooter = 0;
                  columnWidthFooter = 0;
                  groupFooterBorderSide = data.template[0].verticalBorder == '-1' ? Stimulsoft.Base.Drawing.StiBorderSides.All : Stimulsoft.Base.Drawing.StiBorderSides.None;
                  isTextTotalFooter = false;
                  nameIndex = 1;

                  for (index in data.fieldData[0]) {
                    //---------------------Header-------------------------------------------------------------------------------
                    if (pos < pageWidth - (marginLeft + marginRight) && index == data.fieldData[0].length - 1) {
                      //Last column
                      columnWidth = pageWidth - pos - (marginLeft + marginRight);
                    } else {
                      columnWidth = data.fieldData[4][index] / divColumnWidth;
                    }

                    headerText = new Stimulsoft.Report.Components.StiText();
                    headerText.clientRectangle = new Stimulsoft.Base.Drawing.RectangleD(pos, 0, columnWidth, headerBand.height);
                    headerText.text = data.fieldData[0][index];

                    if (data.fieldData[9][index] == 0) {
                      headerText.horAlignment = Stimulsoft.Base.Drawing.StiTextHorAlignment.Left;
                    } else if (data.fieldData[9][index] == 1) {
                      headerText.horAlignment = Stimulsoft.Base.Drawing.StiTextHorAlignment.Right;
                    } else {
                      headerText.horAlignment = Stimulsoft.Base.Drawing.StiTextHorAlignment.Center;
                    }

                    if (data.template[0].verticalBorder == '-1') {
                      headerText.border.side = Stimulsoft.Base.Drawing.StiBorderSides.All;
                    } else {
                      headerText.border.side = Stimulsoft.Base.Drawing.StiBorderSides.Bottom | Stimulsoft.Base.Drawing.StiBorderSides.Top;
                    }

                    headerText.vertAlignment = Stimulsoft.Base.Drawing.StiTextHorAlignment.Center;
                    headerText.margins.top = 1;
                    headerText.margins.bottom = 1;
                    headerText.margins.left = 3;
                    headerText.margins.right = 3;
                    headerText.font = new Font(data.fieldData[11][index], data.fieldData[5][index]);
                    headerText.name = "HeaderText" + nameIndex.toString();
                    headerText.growToHeight = true;
                    headerText.wordWrap = true;
                    headerBand.components.add(headerText); //---------------------DataBand-------------------------------------------------------------------------------

                    dataText = new Stimulsoft.Report.Components.StiText();
                    dataText.clientRectangle = new Stimulsoft.Base.Drawing.RectangleD(pos, 0, columnWidth, dataBand.height);
                    dataTextValue = '';

                    if (data.fieldData[1][index] == '(Number)') {
                      dataTextValue = '{Line}';
                    } else if (data.fieldData[1][index] != '(EmptyField)') {
                      dataTextValue = data.fieldData[1][index].match(' ') == null ? '{' + dataReport.tableName + '.' + data.fieldData[1][index] + '}' : '{' + dataReport.tableName + '.[' + data.fieldData[1][index] + ']}';

                      if (data.fieldData[2][index] >= 1 && data.fieldData[2][index] <= 4) {
                        //Numeric
                        dataText.textFormat = new Stimulsoft.Report.Components.TextFormats.StiNumberFormatService(0, 3, ',', data.fieldData[2][index] - 1, '.', 3, true, false, 0);
                      } else if (data.fieldData[2][index] >= 5 && data.fieldData[2][index] <= 14) {
                        //DateTime
                        dataText.textFormat = new Stimulsoft.Report.Components.TextFormats.StiDateFormatService(data.fieldData[3][index], '');
                      }
                    }

                    dataText.text = dataTextValue;

                    if (data.fieldData[10][index] == 0) {
                      dataText.horAlignment = Stimulsoft.Base.Drawing.StiTextHorAlignment.Left;
                    } else if (data.fieldData[10][index] == 1) {
                      dataText.horAlignment = Stimulsoft.Base.Drawing.StiTextHorAlignment.Right;
                    } else {
                      dataText.horAlignment = Stimulsoft.Base.Drawing.StiTextHorAlignment.Center;
                    }

                    if (data.template[0].verticalBorder == '-1' && data.template[0].horizontalBorder == '-1') {
                      dataText.border.side = Stimulsoft.Base.Drawing.StiBorderSides.All;
                    } else if (data.template[0].horizontalBorder == '-1') {
                      dataText.border.side = Stimulsoft.Base.Drawing.StiBorderSides.Bottom | Stimulsoft.Base.Drawing.StiBorderSides.Top;
                    } else if (data.template[0].verticalBorder == '-1') {
                      dataText.border.side = Stimulsoft.Base.Drawing.StiBorderSides.Left | Stimulsoft.Base.Drawing.StiBorderSides.Right;
                    } else {
                      dataText.border.side = Stimulsoft.Base.Drawing.StiBorderSides.None;
                    }

                    dataText.font = new Font(data.fieldData[11][index], data.fieldData[6][index]);
                    dataText.margins.top = 1;
                    dataText.margins.bottom = 1;
                    dataText.margins.left = 3;
                    dataText.margins.right = 3;
                    dataText.name = "DataText" + nameIndex.toString();
                    dataText.growToHeight = true;
                    dataText.wordWrap = true;
                    dataBand.components.add(dataText); //---------------------Footer-------------------------------------------------------------------------------

                    if (data.template[0].showFooter == '-1') {
                      columnWidthFooter = columnWidthFooter + columnWidth;

                      if (data.fieldData[12][index] == 1) {
                        isTextTotalFooter = true;
                      }

                      if (data.fieldData[12][index] > 1 || index == data.fieldData[0].length - 1) {
                        //Footer Component
                        footerText = new Stimulsoft.Report.Components.StiText();
                        footerTextValue = '';

                        if (data.fieldData[12][index] > 1) {
                          if (data.fieldData[12][index] == 2) {
                            footerText.textFormat = new Stimulsoft.Report.Components.TextFormats.StiNumberFormatService(0, 3, ',', data.fieldData[2][index] - 1, '.', 3, true, false, 0);
                            footerTextValue = data.fieldData[1][index].match(' ') == null ? '{Sum(DataBand, data.' + data.fieldData[1][index] + ')}' : '{Sum(DataBand, data.[' + data.fieldData[1][index] + '])}';
                          } else if (data.fieldData[12][index] == 3) {
                            footerTextValue = '{Count()}';
                          } else if (data.fieldData[12][index] == 4) {
                            footerTextValue = data.fieldData[1][index].match(' ') == null ? '{CountIf(DataBand, data.' + data.fieldData[1][index] + ' != "")}' : '{CountIf(DataBand, data.[' + data.fieldData[1][index] + '] != "")}';
                          } else if (data.fieldData[12][index] == 5) {
                            footerTextValue = data.fieldData[1][index].match(' ') == null ? '{CountIf(DataBand, data.' + data.fieldData[1][index] + ' != 0)}' : '{CountIf(DataBand, data.[' + data.fieldData[1][index] + '] != 0)}';
                          }
                        }

                        if (data.fieldData[10][index] == 0) {
                          footerText.horAlignment = Stimulsoft.Base.Drawing.StiTextHorAlignment.Left;
                        } else if (data.fieldData[10][index] == 1) {
                          footerText.horAlignment = Stimulsoft.Base.Drawing.StiTextHorAlignment.Right;
                        } else {
                          footerText.horAlignment = Stimulsoft.Base.Drawing.StiTextHorAlignment.Center;
                        }

                        if (data.template[0].verticalBorder == '-1') {
                          footerText.border.side = Stimulsoft.Base.Drawing.StiBorderSides.All;
                        } else {
                          footerText.border.side = Stimulsoft.Base.Drawing.StiBorderSides.Bottom | Stimulsoft.Base.Drawing.StiBorderSides.Top;
                        }

                        footerText.vertAlignment = Stimulsoft.Base.Drawing.StiTextHorAlignment.Center;
                        footerText.font = new Font(data.fieldData[11][index], data.fieldData[6][index], Stimulsoft.System.Drawing.FontStyle.Bold);
                        footerText.text = footerTextValue;
                        footerText.margins.top = 1;
                        footerText.margins.bottom = 1;
                        footerText.margins.left = 3;
                        footerText.margins.right = 3;
                        footerText.name = "FooterText" + nameIndex.toString();
                        footerText.growToHeight = true;
                        footerText.wordWrap = true; //Setup Text Total & Sub Total

                        if (isTextTotalFooter) {
                          isTextTotalFooter = false; //Footer Total Text

                          footerTextTotal = new Stimulsoft.Report.Components.StiText();
                          footerTextTotal.border.side = footerText.border.side;
                          footerTextTotal.clientRectangle = new Stimulsoft.Base.Drawing.RectangleD(posFooter, 0, columnWidthFooter - columnWidth, footerBand.height);
                          footerTextTotal.font = footerText.font;
                          footerTextTotal.horAlignment = Stimulsoft.Base.Drawing.StiTextHorAlignment.Center;
                          footerTextTotal.vertAlignment = footerText.vertAlignment;
                          footerTextTotal.growToHeight = true;
                          footerTextTotal.wordWrap = true;
                          footerTextTotal.margins.top = footerText.margins.top;
                          footerTextTotal.margins.bottom = footerText.margins.bottom;
                          footerTextTotal.margins.left = footerText.margins.left;
                          footerTextTotal.margins.right = footerText.margins.right;
                          footerTextTotal.text = 'Total';
                          footerTextTotal.name = "FooterTextTotal" + nameIndex.toString();
                          footerBand.components.add(footerTextTotal); //Group Footer Sub Total 3

                          if (data.template[0].reportGroupLevel > 2) {
                            groupFooterTextTotal3 = new Stimulsoft.Report.Components.StiText();
                            groupFooterTextTotal3.border.side = groupFooterBorderSide;
                            groupFooterTextTotal3.clientRectangle = footerTextTotal.clientRectangle;
                            groupFooterTextTotal3.font = footerText.font;
                            groupFooterTextTotal3.horAlignment = Stimulsoft.Base.Drawing.StiTextHorAlignment.Center;
                            groupFooterTextTotal3.vertAlignment = footerTextTotal.vertAlignment;
                            groupFooterTextTotal3.growToHeight = true;
                            groupFooterTextTotal3.wordWrap = true;
                            groupFooterTextTotal3.margins.top = footerText.margins.top;
                            groupFooterTextTotal3.margins.bottom = footerText.margins.bottom;
                            groupFooterTextTotal3.margins.left = footerText.margins.left;
                            groupFooterTextTotal3.margins.right = footerText.margins.right;
                            groupFooterTextTotal3.text = 'Sub Total(' + textGroupHeader3.text + ')';
                            groupFooterTextTotal3.name = "groupFooterTextTotal3" + nameIndex.toString();
                            groupFooterBand3.components.add(groupFooterTextTotal3);
                          } //Group Footer Sub Total 2


                          if (data.template[0].reportGroupLevel > 1) {
                            groupFooterTextTotal2 = new Stimulsoft.Report.Components.StiText();
                            groupFooterTextTotal2.border.side = groupFooterBorderSide;
                            groupFooterTextTotal2.clientRectangle = footerTextTotal.clientRectangle;
                            groupFooterTextTotal2.font = footerText.font;
                            groupFooterTextTotal2.horAlignment = Stimulsoft.Base.Drawing.StiTextHorAlignment.Center;
                            groupFooterTextTotal2.vertAlignment = footerTextTotal.vertAlignment;
                            groupFooterTextTotal2.growToHeight = true;
                            groupFooterTextTotal2.wordWrap = true;
                            groupFooterTextTotal2.margins.top = footerText.margins.top;
                            groupFooterTextTotal2.margins.bottom = footerText.margins.bottom;
                            groupFooterTextTotal2.margins.left = footerText.margins.left;
                            groupFooterTextTotal2.margins.right = footerText.margins.right;
                            groupFooterTextTotal2.text = 'Sub Total(' + textGroupHeader2.text + ')';
                            groupFooterTextTotal2.name = "groupFooterTextTotal2" + nameIndex.toString();
                            groupFooterBand2.components.add(groupFooterTextTotal2);
                          } //Group Footer Sub Total 1


                          if (data.template[0].reportGroupLevel > 0) {
                            groupFooterTextTotal1 = new Stimulsoft.Report.Components.StiText();
                            groupFooterTextTotal1.border.side = groupFooterBorderSide;
                            groupFooterTextTotal1.clientRectangle = footerTextTotal.clientRectangle;
                            groupFooterTextTotal1.font = footerText.font;
                            groupFooterTextTotal1.horAlignment = Stimulsoft.Base.Drawing.StiTextHorAlignment.Center;
                            groupFooterTextTotal1.vertAlignment = footerTextTotal.vertAlignment;
                            groupFooterTextTotal1.growToHeight = true;
                            groupFooterTextTotal1.wordWrap = true;
                            groupFooterTextTotal1.margins.top = footerText.margins.top;
                            groupFooterTextTotal1.margins.bottom = footerText.margins.bottom;
                            groupFooterTextTotal1.margins.left = footerText.margins.left;
                            groupFooterTextTotal1.margins.right = footerText.margins.right;
                            groupFooterTextTotal1.text = 'Sub Total(' + textGroupHeader1.text + ')';
                            groupFooterTextTotal1.name = "groupFooterTextTotal1" + nameIndex.toString();
                            groupFooterBand1.components.add(groupFooterTextTotal1);
                          }

                          posFooter = posFooter + (columnWidthFooter - columnWidth);
                          columnWidthFooter = columnWidth;
                        } //Add Footer (Wait position left & width from text total, position must be below from Text)


                        footerText.clientRectangle = new Stimulsoft.Base.Drawing.RectangleD(posFooter, 0, columnWidthFooter, footerBand.height);
                        footerBand.components.add(footerText); //Group Footer 3

                        if (data.template[0].reportGroupLevel > 2) {
                          textGroupFooter3 = new Stimulsoft.Report.Components.StiText();
                          textGroupFooter3.clientRectangle = footerText.clientRectangle;
                          textGroupFooter3.font = footerText.font;
                          textGroupFooter3.horAlignment = footerText.horAlignment;
                          textGroupFooter3.vertAlignment = footerText.vertAlignment;
                          textGroupFooter3.text = footerText.text;
                          textGroupFooter3.name = "textGroupFooter3" + nameIndex.toString();
                          textGroupFooter3.margins.top = footerText.margins.top;
                          textGroupFooter3.margins.bottom = footerText.margins.bottom;
                          textGroupFooter3.margins.left = footerText.margins.left;
                          textGroupFooter3.margins.right = footerText.margins.right;
                          textGroupFooter3.textFormat = dataText.textFormat;
                          textGroupFooter3.border.side = groupFooterBorderSide;
                          groupFooterBand3.components.add(textGroupFooter3);
                        } //Group Footer 2


                        if (data.template[0].reportGroupLevel > 1) {
                          textGroupFooter2 = new Stimulsoft.Report.Components.StiText();
                          textGroupFooter2.clientRectangle = footerText.clientRectangle;
                          textGroupFooter2.font = footerText.font;
                          textGroupFooter2.horAlignment = footerText.horAlignment;
                          textGroupFooter2.vertAlignment = footerText.vertAlignment;
                          textGroupFooter2.text = footerText.text;
                          textGroupFooter2.name = "textGroupFooter2" + nameIndex.toString();
                          textGroupFooter2.margins.top = footerText.margins.top;
                          textGroupFooter2.margins.bottom = footerText.margins.bottom;
                          textGroupFooter2.margins.left = footerText.margins.left;
                          textGroupFooter2.margins.right = footerText.margins.right;
                          textGroupFooter2.textFormat = dataText.textFormat;
                          textGroupFooter2.border.side = groupFooterBorderSide;
                          groupFooterBand2.components.add(textGroupFooter2);
                        } //Group Footer 1


                        if (data.template[0].reportGroupLevel > 0) {
                          textGroupFooter1 = new Stimulsoft.Report.Components.StiText();
                          textGroupFooter1.clientRectangle = footerText.clientRectangle;
                          textGroupFooter1.font = footerText.font;
                          textGroupFooter1.horAlignment = footerText.horAlignment;
                          textGroupFooter1.vertAlignment = footerText.vertAlignment;
                          textGroupFooter1.text = footerText.text;
                          textGroupFooter1.name = "textGroupFooter1" + nameIndex.toString();
                          textGroupFooter1.margins.top = footerText.margins.top;
                          textGroupFooter1.margins.bottom = footerText.margins.bottom;
                          textGroupFooter1.margins.left = footerText.margins.left;
                          textGroupFooter1.margins.right = footerText.margins.right;
                          textGroupFooter1.textFormat = dataText.textFormat;
                          textGroupFooter1.border.side = groupFooterBorderSide;
                          groupFooterBand1.components.add(textGroupFooter1);
                        }

                        posFooter = posFooter + columnWidthFooter;
                        columnWidthFooter = 0;
                      }
                    }

                    pos = pos + columnWidth;
                    nameIndex++;
                  } // Create Page Footer Band


                  pageFooterBand = new Stimulsoft.Report.Components.StiPageFooterBand();
                  pageFooterBand.height = data.template[0].rowHeight / divColumnWidth;
                  pageFooterBand.name = "PageFooterBand";
                  page.components.add(pageFooterBand); // Create stiText Printed page footer band

                  pageFooterPrinter = new Stimulsoft.Report.Components.StiText();
                  pageFooterPrinter.clientRectangle = new Stimulsoft.Base.Drawing.RectangleD(0, 0, pageWidthSizeHalf, 0.6);
                  pageFooterPrinter.font = new Font('Arial', 8);
                  pageFooterPrinter.horAlignment = Stimulsoft.Base.Drawing.StiTextHorAlignment.Left;
                  pageFooterPrinter.text = 'Printed: {Format("{0:dd/MM/yyyy hh:mm:ss}", Today)}';
                  pageFooterPrinter.name = "pageFooterPrinter";
                  pageFooterPrinter.border.side = Stimulsoft.Base.Drawing.StiBorderSides.None;
                  pageFooterBand.components.add(pageFooterPrinter); // Create Stitext Page count Page Footer band

                  pageFooterPages = new Stimulsoft.Report.Components.StiText();
                  pageFooterPages.clientRectangle = new Stimulsoft.Base.Drawing.RectangleD(pageWidthSizeHalf, 0, pageWidthSizeHalf, 0.6);
                  pageFooterPages.font = new Font('Arial', 8);
                  pageFooterPages.horAlignment = Stimulsoft.Base.Drawing.StiTextHorAlignment.Right;
                  pageFooterPages.text = 'page {PageNumber} of {TotalPageCount}';
                  pageFooterPages.name = "pageFooterPages";
                  pageFooterPages.border.side = Stimulsoft.Base.Drawing.StiBorderSides.None;
                  pageFooterBand.components.add(pageFooterPages); // Render Report

                  viewer.report = report;
                  viewer.renderHtml('report-viewer');
                } else {
                  _utils_dialog_js__WEBPACK_IMPORTED_MODULE_2__["default"].reportDataNotFound();
                }

                _context.next = 53;
                break;

              case 35:
                report.loadFile(reportDirectory);
                _context.next = 38;
                return reportResource.preview(params);

              case 38:
                _ref2 = _context.sent;
                _data = _ref2.data;

                if (!_data.data) {
                  _context.next = 52;
                  break;
                }

                if (!(params.reportId == this.mReportId.folio)) {
                  _context.next = 45;
                  break;
                }

                if (!(_data.other.transaction == null || _data.other.transaction == '')) {
                  _context.next = 45;
                  break;
                }

                _utils_dialog_js__WEBPACK_IMPORTED_MODULE_2__["default"].reportDataNotFound();
                return _context.abrupt("return");

              case 45:
                this.showReport = true;
                dataSet.readJson(_data);
                report.regData(dataSet.dataSetName, "", dataSet);
                viewer.report = report;
                viewer.renderHtml('report-viewer');
                _context.next = 53;
                break;

              case 52:
                _utils_dialog_js__WEBPACK_IMPORTED_MODULE_2__["default"].reportDataNotFound();

              case 53:
                this.$vs.loading.close('#layout--main>.con-vs-loading');
                _context.next = 61;
                break;

              case 56:
                _context.prev = 56;
                _context.t0 = _context["catch"](25);
                _utils_alert_js__WEBPACK_IMPORTED_MODULE_1__["default"].errorFetchDataAlert();
                this.$vs.loading.close('#layout--main>.con-vs-loading');
                return _context.abrupt("return");

              case 61:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[25, 56]]);
      }));

      function print(_x, _x2) {
        return _print.apply(this, arguments);
      }

      return print;
    }(),
    // Preview report access
    getPreviewReportAccess: function () {
      var _getPreviewReportAccess = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var _ref3, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return reportResource.getPreviewReportAccess({
                  code: this.userID
                });

              case 2:
                _ref3 = _context2.sent;
                data = _ref3.data;

                if (data.accessPreviewReport != undefined && data.accessPreviewReport != null && data.accessPreviewReport != '') {
                  this.exportReportAccess = data.accessPreviewReport[this.otherAccessOrder.exportReport];
                  this.setExportReportAccess(this.exportReportAccess);
                }

              case 5:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function getPreviewReportAccess() {
        return _getPreviewReportAccess.apply(this, arguments);
      }

      return getPreviewReportAccess;
    }(),
    setExportReportAccess: function setExportReportAccess(access) {
      this.mStimulsoftReportSetting.showExportToPdf = access == 1;
      this.mStimulsoftReportSetting.showExportToDocument = access == 1;
      this.mStimulsoftReportSetting.showExportToHtml = access == 1;
      this.mStimulsoftReportSetting.showExportToHtml5 = access == 1;
      this.mStimulsoftReportSetting.showExportToExcel2007 = access == 1;
      this.mStimulsoftReportSetting.showSaveButton = access == 1;
      this.mStimulsoftReportSetting.showSendEmailButton = access == 1;
    }
  },
  mounted: function () {
    var _mounted = _asyncToGenerator(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
      var data, template;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              //Setup Licenci Stimulsoft
              // Stimulsoft.Base.StiLicense.key = "";
              data = this.$route.query;
              template = data.template;
              _context3.next = 4;
              return this.getPreviewReportAccess();

            case 4:
              if (data.reportId != undefined && data.reportId != null) {
                if (template != undefined && data.reportId != null) {
                  this.print(data, template);
                } else {
                  this.print(data, '');
                }
              }

            case 5:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, this);
    }));

    function mounted() {
      return _mounted.apply(this, arguments);
    }

    return mounted;
  }(),
  computed: {
    userID: function userID() {
      return this.$store.state.auth.accountCode;
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/icon/IconComp.vue?vue&type=template&id=08bd33a4&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/components/icon/IconComp.vue?vue&type=template&id=08bd33a4& ***!
  \********************************************************************************************************************************************************************************************************************/
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
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAABGdBTUEAALGPC/xhBQAAACBjSFJN\nAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAB7FBMVEUAAAABTHMATXYGQV8A\nbq//GgAAUX8tR2gBTHMBTHMBTHMBTHMBTHMBTHMBTHMBTHMBTHMBTHMBTHMBTHMBTHMBTHMBTHMB\nTHMBTHMBTHMBTHMBTHMBTHMBTHMBTHMBTHMBTHMBTHMBTHMBTHMBTHMBTHMBTHMBTHMBTHMBTHMB\nTHMBTHMBTHMBTHMBTHMBTHMBTHMBTHMBTHMBTHMBTHMBTHMBTHMBTHMBTHMBTHMBTHMBTHMBTHMB\nTHMBTHMBTHMBTHMBTHMBTHMBTHMBTHMBTHMBTHMBTHMBTHMBTHMBTHMBTHMBTHMBTHMATHQATnkB\nTHMBTHMBTHMKS3ENS3ACTncBTHMBTHOpOkh8PlQwR2gBTHOJPVEHS3IBTHMBTHMjSGoATXUBTHMB\nTHMATHQBTHMBTHMBTHMATHMBTHMBTHMBTHMBTHMBTHMBTHMBTHMBTHMBTHMBTHMBTHMBTHMBTHMB\nTHMBTHMBTHMBTHMBTHMBTHMBTHMBTHMBTHMBTHMBTHMBTHMATHMZSW15P1WwOUcPS3CgOkvwMjbx\nMjbnMzkATHRERWLuMjftMjfvMjbMNj9YQl3cNDsrR2gvR2fZNDy4OEQSSm8DTHJoQVnbNDzvMjfK\nNkBDRWIETHIzRmZlQVpdQlwkSGr///9DguDDAAAAgXRSTlMAAAAAAAAAAAEvkNf199ybOgMGZN3+\n5XYLAm/0+oY/6lYFpr4OJeLwOUVfUPtr/Vkd2jCSrAgr2ec+TuTtY7v4xw1Hsfn8UhEnfO7xzocw\nAxN43uaIGyq1/sQ4zNpCIMTWLweasg9M8vquxRIx9khng60EqwywyKO9CZ9RbCHb6TTdPPG8AAAA\nAWJLR0Sjx9rvGgAAAAd0SU1FB+MLDQgQCn26gLcAAAGGSURBVDjLdZFVQwJBFIW55hrYqAiCnZiY\n2IHd3d0tdjuYiK7d7S91F2UZmN3vZR7Ot3dmzxWJOIBycXVzF3t4enmDiAfw8fWTIBb/gEAeA6RB\nMvSPPNiHMAAUSsQhCwFbA0LDEEZ4BCFERuFCdAwhxIpxQRJHCPEqXEAJhKCQ4XliEiEkp+CCMpUQ\npGpcSEsni8jItORZ2cDTlCbHnOfmUXxdU4p8dzYuKNTwbgugqLikFCFteFk5zwCgKioLq+TsBFV1\nTW1dvZ3N1w2NTRLujXrU3NJq74Dnbe1ayz/oDw6POjq7HJ0seWo31oH++OTUYDjr6XUGc97Xj5dk\nPD+7oOnLq4HB/zJgaNhqT8ZrmuHi5nZkFP4GjI1bC3f3pzRteHic8DWNgPRJZM3T88sr/fauR1PT\nJmFGaSOgj8+v7x/mnJ0D9oZ5RGBkYM8F5g4ANRJkUccI3kvCQv8yI+hWhIXVIkag1oSF9Q32DQvC\nwia7d9gqFRS22aZgZ1eixVBxaPf2QfQL+I0b1L7mMk8AAAAldEVYdGRhdGU6Y3JlYXRlADIwMTkt\nMTEtMTNUMDg6MTY6MTArMDM6MDCAdQo6AAAAJXRFWHRkYXRlOm1vZGlmeQAyMDE5LTExLTEzVDA4\nOjE2OjEwKzAzOjAw8SiyhgAAAABJRU5ErkJggg=="
        }
      })
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/components/report/Template.vue?vue&type=template&id=67951e5e&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/components/report/Template.vue?vue&type=template&id=67951e5e& ***!
  \**********************************************************************************************************************************************************************************************************************************/
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
  return _vm._m(0)
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [_c("div", { attrs: { id: "report-viewer" } })])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/api/report.js":
/*!****************************************!*\
  !*** ./resources/js/src/api/report.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ReportResource; });
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



var uri = '/report/';

var ReportResource =
/*#__PURE__*/
function (_Resource) {
  _inherits(ReportResource, _Resource);

  function ReportResource() {
    _classCallCheck(this, ReportResource);

    return _possibleConstructorReturn(this, _getPrototypeOf(ReportResource).call(this, uri));
  }

  _createClass(ReportResource, [{
    key: "sendEmail",
    value: function sendEmail(params) {
      return Object(_utils_request__WEBPACK_IMPORTED_MODULE_1__["default"])({
        url: uri + 'email',
        method: 'get',
        params: params
      });
    }
  }, {
    key: "preview",
    value: function preview(params) {
      return Object(_utils_request__WEBPACK_IMPORTED_MODULE_1__["default"])({
        url: uri + 'preview',
        method: 'get',
        params: params
      });
    }
  }, {
    key: "processReportTemplate",
    value: function processReportTemplate(params) {
      return Object(_utils_request__WEBPACK_IMPORTED_MODULE_1__["default"])({
        url: uri + 'processreporttemplate',
        method: 'get',
        params: params
      });
    }
  }, {
    key: "reportListData",
    value: function reportListData(params) {
      return Object(_utils_request__WEBPACK_IMPORTED_MODULE_1__["default"])({
        url: uri + 'reportlistdata',
        method: 'get',
        params: params
      });
    }
  }, {
    key: "reportTemplate",
    value: function reportTemplate(params) {
      return Object(_utils_request__WEBPACK_IMPORTED_MODULE_1__["default"])({
        url: uri + 'reporttemplate',
        method: 'get',
        params: params
      });
    }
  }, {
    key: "ReportDataLookUpFilter1",
    value: function ReportDataLookUpFilter1(params) {
      return Object(_utils_request__WEBPACK_IMPORTED_MODULE_1__["default"])({
        url: uri + 'reportdatalookupfilter1',
        method: 'get',
        params: params
      });
    }
  }, {
    key: "getPreviewReportAccess",
    value: function getPreviewReportAccess(data) {
      return Object(_utils_request__WEBPACK_IMPORTED_MODULE_1__["default"])({
        url: 'usersetting/get-preview-report-access',
        method: 'post',
        data: data
      });
    } //Report Template Editor

  }, {
    key: "editReportEditor",
    value: function editReportEditor(params) {
      return Object(_utils_request__WEBPACK_IMPORTED_MODULE_1__["default"])({
        url: uri + 'editreporteditor',
        method: 'get',
        params: params
      });
    }
  }, {
    key: "insertTemplateReport",
    value: function insertTemplateReport(params) {
      return Object(_utils_request__WEBPACK_IMPORTED_MODULE_1__["default"])({
        url: uri + 'inserttemplatereport',
        method: 'post',
        params: params
      });
    }
  }, {
    key: "updateTemplateReport",
    value: function updateTemplateReport(params) {
      return Object(_utils_request__WEBPACK_IMPORTED_MODULE_1__["default"])({
        url: uri + 'updatetemplatereport',
        method: 'post',
        params: params
      });
    }
  }, {
    key: "updateTemplateDefaultReport",
    value: function updateTemplateDefaultReport(data) {
      return Object(_utils_request__WEBPACK_IMPORTED_MODULE_1__["default"])({
        url: uri + 'updatetemplatedefaultreport',
        method: 'post',
        data: data
      });
    }
  }, {
    key: "deleteTemplateReport",
    value: function deleteTemplateReport(params) {
      return Object(_utils_request__WEBPACK_IMPORTED_MODULE_1__["default"])({
        url: uri + 'deletetemplatereport',
        method: 'post',
        params: params
      });
    }
  }, {
    key: "isTemplateSystemDefault",
    value: function isTemplateSystemDefault(params) {
      return Object(_utils_request__WEBPACK_IMPORTED_MODULE_1__["default"])({
        url: uri + 'istemplatesystemdefault',
        method: 'get',
        params: params
      });
    }
  }, {
    key: "setAsDefaultTemplate",
    value: function setAsDefaultTemplate(params) {
      return Object(_utils_request__WEBPACK_IMPORTED_MODULE_1__["default"])({
        url: uri + 'setasdefaulttemplate',
        method: 'get',
        params: params
      });
    }
  }, {
    key: "setAsSystemDefaultTemplate",
    value: function setAsSystemDefaultTemplate(params) {
      return Object(_utils_request__WEBPACK_IMPORTED_MODULE_1__["default"])({
        url: uri + 'setassystemdefaulttemplate',
        method: 'get',
        params: params
      });
    } //End Report Template Editor

  }]);

  return ReportResource;
}(_api_resource__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./resources/js/src/components/icon/IconComp.vue":
/*!*******************************************************!*\
  !*** ./resources/js/src/components/icon/IconComp.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _IconComp_vue_vue_type_template_id_08bd33a4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./IconComp.vue?vue&type=template&id=08bd33a4& */ "./resources/js/src/components/icon/IconComp.vue?vue&type=template&id=08bd33a4&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  script,
  _IconComp_vue_vue_type_template_id_08bd33a4___WEBPACK_IMPORTED_MODULE_0__["render"],
  _IconComp_vue_vue_type_template_id_08bd33a4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/components/icon/IconComp.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/components/icon/IconComp.vue?vue&type=template&id=08bd33a4&":
/*!**************************************************************************************!*\
  !*** ./resources/js/src/components/icon/IconComp.vue?vue&type=template&id=08bd33a4& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_IconComp_vue_vue_type_template_id_08bd33a4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./IconComp.vue?vue&type=template&id=08bd33a4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/icon/IconComp.vue?vue&type=template&id=08bd33a4&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_IconComp_vue_vue_type_template_id_08bd33a4___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_IconComp_vue_vue_type_template_id_08bd33a4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/pages/components/report/Template.vue":
/*!*********************************************************************!*\
  !*** ./resources/js/src/views/pages/components/report/Template.vue ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Template_vue_vue_type_template_id_67951e5e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Template.vue?vue&type=template&id=67951e5e& */ "./resources/js/src/views/pages/components/report/Template.vue?vue&type=template&id=67951e5e&");
/* harmony import */ var _Template_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Template.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/components/report/Template.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Template_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Template_vue_vue_type_template_id_67951e5e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Template_vue_vue_type_template_id_67951e5e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/components/report/Template.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/components/report/Template.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/src/views/pages/components/report/Template.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Template_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Template.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/components/report/Template.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Template_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/components/report/Template.vue?vue&type=template&id=67951e5e&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/components/report/Template.vue?vue&type=template&id=67951e5e& ***!
  \****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Template_vue_vue_type_template_id_67951e5e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Template.vue?vue&type=template&id=67951e5e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/components/report/Template.vue?vue&type=template&id=67951e5e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Template_vue_vue_type_template_id_67951e5e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Template_vue_vue_type_template_id_67951e5e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);