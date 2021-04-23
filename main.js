(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/ole/FireflySemantics/Repository/fireflysemantics/700-CSV/new-csv/csv/src/main.ts */"zUnb");


/***/ }),

/***/ 1:
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ "7d2G":
/*!********************************************************!*\
  !*** ./src/app/services/process/processSingleTable.ts ***!
  \********************************************************/
/*! exports provided: processSingleTable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "processSingleTable", function() { return processSingleTable; });
function processSingleTable(dataMap, s, v) {
    const keyHeader = s.keySnapshot();
    if (keyHeader) {
        if (!v.validate(v.singleTableValidators, dataMap, s.OS.S.LOAD_AND_PROCESSING_ERRORS)) {
            return false;
        }
    }
    //======================================
    // The mappedData property 
    // on the selectionData
    // reference is what we will return
    //======================================
    const CSD = dataMap.get(0);
    //======================================
    // Map the Data
    //======================================
    CSD.mapData();
    if (CSD.getSelectedHeaders().length) {
        CSD.mappedData.stickyHeaders =
            keyHeader ?
                [keyHeader] : [];
        s.OS.put(s.OS.S.PROCESS_RESULT, CSD.mappedData);
    }
    return true;
}


/***/ }),

/***/ "9X8r":
/*!***********************************************************************************!*\
  !*** ./src/app/components/csv-header-selection/csv-header-selection.component.ts ***!
  \***********************************************************************************/
/*! exports provided: CsvHeaderSelectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CsvHeaderSelectionComponent", function() { return CsvHeaderSelectionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngneat/until-destroy */ "VfN6");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_state_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/state.service */ "ndxW");
/* harmony import */ var _services_component_data_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/component-data.service */ "buDW");
/* harmony import */ var _services_csv_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/csv.service */ "vUMC");
/* harmony import */ var _fireflysemantics_csv_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fireflysemantics/csv-components */ "pbtI");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _csv_header_table_csv_header_table_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./csv-header-table/csv-header-table.component */ "QIbE");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/core */ "FKr1");


















function CsvHeaderSelectionComponent_div_8_mat_option_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-option", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const key_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", key_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", key_r3, " ");
} }
function CsvHeaderSelectionComponent_div_8_ng_container_6_mat_icon_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-icon", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "check_circle");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function CsvHeaderSelectionComponent_div_8_ng_container_6_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "mat-icon", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "bug_report");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "Key Missing");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function CsvHeaderSelectionComponent_div_8_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, CsvHeaderSelectionComponent_div_8_ng_container_6_mat_icon_1_Template, 2, 0, "mat-icon", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, CsvHeaderSelectionComponent_div_8_ng_container_6_div_3_Template, 6, 0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](4, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r2.index != 0 && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 2, ctx_r2.headersContainKey$));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r2.index != 0 && !_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](4, 4, ctx_r2.headersContainKey$));
} }
function CsvHeaderSelectionComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "mat-form-field", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Selected Join Key");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "mat-select", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, CsvHeaderSelectionComponent_div_8_mat_option_5_Template, 2, 2, "mat-option", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](6, CsvHeaderSelectionComponent_div_8_ng_container_6_Template, 5, 6, "ng-container", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formControl", ctx_r0.keyControl)("disabled", ctx_r0.index != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r0.headers);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.isSelectionDataLoaded);
} }
let CsvHeaderSelectionComponent = class CsvHeaderSelectionComponent {
    /**
     * The CSV Service
     * is inject into the load
     * csv component.
     */
    constructor(s, cds, csv) {
        this.s = s;
        this.cds = cds;
        this.csv = csv;
        /**
         * The name of the CSV file
         */
        this.csvFileName = '';
        /**
         * The headers to select the key from.
         */
        this.headers = null;
        /**
         * The select key
         */
        this.keyControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]();
        this.isSelectionDataLoaded = false;
        /**
         * The meta property
         * that we assign to the
         * load csv component.
         *
         * It contains the index.
         *
         * The csv load component
         * takes a meta property
         * in order to make this into
         * a generic component.  The meta
         * property can then be passed
         * to the CSV Service and it
         * can retrieve the index.
         *
         * The meta index is initialized
         * in ngOnInit()
         */
        this.meta = {};
        this.headersContainKey$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["combineLatest"])([this.s.selectedKey$, this.s.csvDataMap$]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((arr) => {
            const key = arr[0];
            if (key) {
                if (this.headers && this.headers.length) {
                    return this.headers.includes(key);
                }
            }
            return false;
        }));
        this.s.csvDataMap$.pipe(Object(_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_1__["untilDestroyed"])(this)).
            subscribe((map) => {
            if (map && !isNaN(this.index)) {
                const csvData = map.get(this.index);
                if (csvData) {
                    this.csvFileName = csvData.meta.name;
                    const headers = csvData.rows.map(r => r.HEADER);
                    this.headers = headers;
                    this.isSelectionDataLoaded = true;
                }
                else {
                    this.headers = null;
                    this.csvFileName = '';
                    this.isSelectionDataLoaded = false;
                }
            }
        });
        this.s.selectedKey$.pipe(Object(_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_1__["untilDestroyed"])(this)).subscribe(sk => {
            if (this.index != 0 && sk) {
                this.keyControl.setValue(sk);
            }
        });
    }
    ngOnInit() {
        this.meta.index = this.index;
        this.keyControl.valueChanges.subscribe(k => {
            if (this.index == 0)
                this.s.OS.put(this.s.OS.S.SELECTED_KEY, k);
        });
    }
    loadCSVFile(file) {
        this.csv.loadCSV(file);
    }
    /**
     * Destroy the corresponding
     * CsvSelectionData instance.
     */
    delete() {
        this.cds.destroyComponent(this.index);
    }
};
CsvHeaderSelectionComponent.ɵfac = function CsvHeaderSelectionComponent_Factory(t) { return new (t || CsvHeaderSelectionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_state_service__WEBPACK_IMPORTED_MODULE_6__["StateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_component_data_service__WEBPACK_IMPORTED_MODULE_7__["ComponentDataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_csv_service__WEBPACK_IMPORTED_MODULE_8__["CsvService"])); };
CsvHeaderSelectionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: CsvHeaderSelectionComponent, selectors: [["app-csv-header-selection"]], inputs: { index: "index" }, decls: 10, vars: 4, consts: [[1, "CsvHeaderSelectionContainer"], ["icon", "view_column", 3, "meta", "onFileLoad"], ["mat-icon-button", "", "aria-label", "Delete CSV Column Selection Component", 3, "click"], [2, "color", "gray", "font-family", "'Courier New', Courier, monospace"], ["style", "display: flex; align-items: center;", 4, "ngIf"], [3, "index"], [2, "display", "flex", "align-items", "center"], ["appearance", "fill"], [3, "formControl", "disabled"], [3, "value", 4, "ngFor", "ngForOf"], [4, "ngIf"], [3, "value"], ["class", "CheckBoxIcon", 4, "ngIf"], ["style", "display:flex; align-items: center;", 4, "ngIf"], [1, "CheckBoxIcon"], [1, "MissingErrorContainer"], [1, "KeyMissingErrorIcon"]], template: function CsvHeaderSelectionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "fs-csv-load", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("onFileLoad", function CsvHeaderSelectionComponent_Template_fs_csv_load_onFileLoad_2_listener($event) { return ctx.loadCSVFile($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CsvHeaderSelectionComponent_Template_button_click_3_listener() { return ctx.delete(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "indeterminate_check_box");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](8, CsvHeaderSelectionComponent_div_8_Template, 7, 4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](9, "app-csv-header-table", 5);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("meta", ctx.meta);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx.csvFileName, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !!(ctx.headers && ctx.headers.length));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("index", ctx.index);
    } }, directives: [_fireflysemantics_csv_components__WEBPACK_IMPORTED_MODULE_9__["CsvLoadComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], _csv_header_table_csv_header_table_component__WEBPACK_IMPORTED_MODULE_13__["CsvHeaderTableComponent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_15__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgForOf"], _angular_material_core__WEBPACK_IMPORTED_MODULE_16__["MatOption"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_12__["AsyncPipe"]], styles: ["[_nghost-%COMP%] {\n  min-width: 500px;\n}\n\n.CsvHeaderSelectionContainer[_ngcontent-%COMP%] {\n  padding: 1rem;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.CheckBoxIcon[_ngcontent-%COMP%] {\n  color: greenyellow;\n  font-size: 44px;\n  width: 44px;\n  height: 44px;\n  margin-left: 1rem;\n  position: relative;\n  bottom: 10px;\n}\n\n.MissingErrorContainer[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  position: relative;\n  bottom: 10px;\n  color: gray;\n  font-family: \"Courier New\", Courier, monospace;\n}\n\n.KeyMissingErrorIcon[_ngcontent-%COMP%] {\n  color: red;\n  font-size: 44px;\n  width: 44px;\n  height: 44px;\n  margin-left: 1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2Nzdi1oZWFkZXItc2VsZWN0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsZ0JBQUE7QUFBRjs7QUFHQTtFQUNFLGFBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtBQUFGOztBQUdBO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQUFGOztBQUdBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLDhDQUFBO0FBQUY7O0FBR0E7RUFDRSxVQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUFBRiIsImZpbGUiOiJjc3YtaGVhZGVyLXNlbGVjdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuOmhvc3Qge1xuICBtaW4td2lkdGg6IDUwMHB4O1xufVxuXG4uQ3N2SGVhZGVyU2VsZWN0aW9uQ29udGFpbmVyIHtcbiAgcGFkZGluZzogMXJlbTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4uQ2hlY2tCb3hJY29uIHtcbiAgY29sb3I6IGdyZWVueWVsbG93O1xuICBmb250LXNpemU6IDQ0cHg7XG4gIHdpZHRoOiA0NHB4O1xuICBoZWlnaHQ6IDQ0cHg7XG4gIG1hcmdpbi1sZWZ0OiAxcmVtO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvdHRvbTogMTBweDtcbn1cblxuLk1pc3NpbmdFcnJvckNvbnRhaW5lciB7XG4gIGRpc3BsYXk6ZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3R0b206IDEwcHg7XG4gIGNvbG9yOiBncmF5OyBcbiAgZm9udC1mYW1pbHk6ICdDb3VyaWVyIE5ldycsIENvdXJpZXIsIG1vbm9zcGFjZTtcbn1cblxuLktleU1pc3NpbmdFcnJvckljb24ge1xuICBjb2xvcjogcmVkO1xuICBmb250LXNpemU6IDQ0cHg7XG4gIHdpZHRoOiA0NHB4O1xuICBoZWlnaHQ6IDQ0cHg7XG4gIG1hcmdpbi1sZWZ0OiAxcmVtO1xuIH0iXX0= */"] });
CsvHeaderSelectionComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_1__["UntilDestroy"])()
], CsvHeaderSelectionComponent);



/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "BcK6":
/*!*********************************************************************!*\
  !*** ./src/app/services/validation/validateReferentialIntegrity.ts ***!
  \*********************************************************************/
/*! exports provided: validateReferentialIntegrity */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateReferentialIntegrity", function() { return validateReferentialIntegrity; });
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models */ "VHTt");
/* harmony import */ var _models_error__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/error */ "yFkK");


/**
 * Make sure to refresh state on the CsvSelectionData
 * instance so that the compound keys are generated.
 *
 * Also make sure at least one key and header from each table
 * is selected before running this method.  There should
 * be something to index on and something selected in each
 * table.
 *
 * Use `isAtLeastOneKeySelected`
 *
 * @param dataMap
 * @param errorChannel
 */
function validateReferentialIntegrity(dataMap, config) {
    //======================================
    // Map the Data for 
    // each CsvSelectionData instance.
    //======================================
    dataMap.forEach(v => {
        v.indexAndMapData(config.keyHeader);
    });
    const IME = new _models__WEBPACK_IMPORTED_MODULE_0__["IndexedMetaError"]();
    IME.tableData.headers = _models_error__WEBPACK_IMPORTED_MODULE_1__["MISSING_OBJECT_ERROR_COLUMNS"];
    IME.type = _models_error__WEBPACK_IMPORTED_MODULE_1__["ERROR_TYPE_KEYS"].REFERENTIAL_INTEGRITY_ERROR;
    let keyArray = [];
    dataMap.forEach((CSD) => {
        //console.log("COMPOUND KEYS from map")
        //console.log([...CSD.compoundKeyMap.keys()])
        keyArray = [
            ...keyArray,
            ...CSD.keyMap.keys()
        ];
    });
    //console.log("COMPOUND KEY ARRAY")
    //console.log(compoundKeyArray)
    const globalKeySet = new Set(keyArray);
    //console.log("GLOBAL KEYSET")
    //console.log(globalKeySet)
    //console.log(globalKeySet.size)
    dataMap.forEach((CSD, CSK) => {
        const missingObjects = [];
        globalKeySet.forEach(k => {
            if (!CSD.keyMap.get(k)) {
                const unMatched = new _models__WEBPACK_IMPORTED_MODULE_0__["MissingObject"](k, CSD.meta.name);
                missingObjects.push(unMatched);
            }
        });
        IME.indexErrors.set(CSK, missingObjects);
        IME.indexedMeta.set(CSK, CSD.meta);
        IME.tableData.rows = [...IME.tableData.rows, ...missingObjects];
    });
    return IME.tableData.rows.length ? IME : null;
}


/***/ }),

/***/ "Bs6f":
/*!*******************************************************************************************!*\
  !*** ./node_modules/worker-plugin/dist/loader.js?name=0!./src/app/services/csv.worker.ts ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "0.worker.js"

/***/ }),

/***/ "BuFo":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _fireflysemantics_amplify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fireflysemantics/amplify */ "GzBa");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _fireflysemantics_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fireflysemantics/material */ "n0aL");




class HomeComponent {
    constructor(as) {
        this.as = as;
        as.onSignInRedirectToApplication();
        as.onSignInInitializeUser();
    }
    ngOnInit() {
    }
    login() {
        this.as.signInWithGoogle();
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_fireflysemantics_amplify__WEBPACK_IMPORTED_MODULE_1__["AuthService"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 35, vars: 0, consts: [[1, "FSLetterLogo", 2, "margin-bottom", "2rem"], [1, "CSVLetterLogo"], ["mat-button", "", "href", "https://medium.com/@ole.ersoy/introducing-firefly-semantics-csv-4e7028af5ca4", "target", "_blank"], [3, "onSignIn"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "FS ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "CSV");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Combine Data from Different CSV Files\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Match the rows of multiple CSV files by key or compound key and select the result columns that the output file should have.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Reorder Columns\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Drag and Drop the columns to reorder them.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Parser Error Detection\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Detects and displays parser errors in your CSV files on load.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Key Validation\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Verify that the columns that hold key values have value that are defined.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Compound or Single Header Key Uniqueness\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " Verify that compound or single header keys are unqiue.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " Cross Table Referential Integrity\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " Verify that the keys in one table having matching keys in another.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " Click here for a ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "basic tutorial");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "fs-tos-login", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onSignIn", function HomeComponent_Template_fs_tos_login_onSignIn_34_listener() { return ctx.as.signInWithGoogle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatAnchor"], _fireflysemantics_material__WEBPACK_IMPORTED_MODULE_3__["TOSLoginComponent"]], styles: [".mat-list-base[_ngcontent-%COMP%]   .mat-list-item[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.75);\n}\n\n.FSLetterLogo[_ngcontent-%COMP%] {\n  color: #d3d3d3;\n  letter-spacing: 2px;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n}\n\n.CSVLetterLogo[_ngcontent-%COMP%] {\n  letter-spacing: 3px;\n  color: black;\n  opacity: 0.8;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n}\n\nh2[_ngcontent-%COMP%] {\n  opacity: 0.7;\n  font-family: \"Libre Baskerville\", serif !important;\n}\n\np[_ngcontent-%COMP%] {\n  font-family: \"Cutive Mono\", monospace !important;\n  margin-bottom: 2.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2hvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBZ0MsMEJBQUE7QUFFaEM7O0FBQUE7RUFDRSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxpREFBQTtBQUdGOztBQUFBO0VBQ0UsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGlEQUFBO0FBR0Y7O0FBQUE7RUFDRSxZQUFBO0VBQ0Esa0RBQUE7QUFHRjs7QUFBQTtFQUNFLGdEQUFBO0VBQ0EscUJBQUE7QUFHRiIsImZpbGUiOiJob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdC1saXN0LWJhc2UgLm1hdC1saXN0LWl0ZW0geyBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjc1KTsgfVxuXG4uRlNMZXR0ZXJMb2dvIHtcbiAgY29sb3I6ICNkM2QzZDM7XG4gIGxldHRlci1zcGFjaW5nOiAycHg7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIixzYW5zLXNlcmlmXG59XG5cbi5DU1ZMZXR0ZXJMb2dvIHtcbiAgbGV0dGVyLXNwYWNpbmc6IDNweDtcbiAgY29sb3I6IGJsYWNrO1xuICBvcGFjaXR5OiAwLjg7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIixzYW5zLXNlcmlmXG59XG5cbmgyIHtcbiAgb3BhY2l0eTogMC43O1xuICBmb250LWZhbWlseTogXCJMaWJyZSBCYXNrZXJ2aWxsZVwiLCBzZXJpZiAhaW1wb3J0YW50O1xufVxuXG5wIHtcbiAgZm9udC1mYW1pbHk6IFwiQ3V0aXZlIE1vbm9cIiwgbW9ub3NwYWNlICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1ib3R0b206IDIuNXJlbTtcbn0iXX0= */"] });


/***/ }),

/***/ "M6SW":
/*!***********************************************************!*\
  !*** ./src/app/services/validation/validation.service.ts ***!
  \***********************************************************/
/*! exports provided: ValidationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidationService", function() { return ValidationService; });
/* harmony import */ var _validateKeyValues__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validateKeyValues */ "e93x");
/* harmony import */ var _validateUniqueKeyValues__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./validateUniqueKeyValues */ "fjHL");
/* harmony import */ var _validateReferentialIntegrity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./validateReferentialIntegrity */ "BcK6");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_state_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/state.service */ "ndxW");





class ValidationService {
    constructor(s) {
        this.s = s;
        this.key = this.s.keySnapshot();
        /**
        * Sequenced array of validators when just a single table is being validated
        */
        this.singleTableValidators = [_validateKeyValues__WEBPACK_IMPORTED_MODULE_0__["validateDefinedKeyValues"], _validateUniqueKeyValues__WEBPACK_IMPORTED_MODULE_1__["validateUniqueKeyValues"], _validateReferentialIntegrity__WEBPACK_IMPORTED_MODULE_2__["validateReferentialIntegrity"]];
        /**
         * Sequenced array of validators when multiple tables are validated
         */
        this.multiTableValidators = [_validateKeyValues__WEBPACK_IMPORTED_MODULE_0__["validateDefinedKeyValues"], _validateUniqueKeyValues__WEBPACK_IMPORTED_MODULE_1__["validateUniqueKeyValues"]];
    }
    /**
     * Iterates through the validators invoking each one
     * by one, unless an IndexMetaError instance error
     * is returned.  Then it stops and emits the error.
     *
     * @param dataMap The data map
     * @param errorChannel The error channel
     */
    validate(validators, dataMap, errorChannel) {
        const config = { keyHeader: this.s.keySnapshot() };
        let validationIndex = 0;
        let valid = true;
        let IME;
        while (valid && validationIndex < validators.length) {
            const validator = validators[validationIndex];
            IME = validator(dataMap, config);
            valid = !IME;
            validationIndex++;
        }
        if (!valid) {
            this.emitError(IME, errorChannel);
        }
        return valid;
    }
    /**
     * Emit the errors if there are any.
     * @return true if an error is emitted, false otherwise
     */
    emitError(IME, errorChannel) {
        if (IME && IME.tableData.rows.length && errorChannel) {
            this.s.OS.put(errorChannel, IME);
            return true;
        }
        return false;
    }
}
ValidationService.ɵfac = function ValidationService_Factory(t) { return new (t || ValidationService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_services_state_service__WEBPACK_IMPORTED_MODULE_4__["StateService"])); };
ValidationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: ValidationService, factory: ValidationService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "QIbE":
/*!************************************************************************************************!*\
  !*** ./src/app/components/csv-header-selection/csv-header-table/csv-header-table.component.ts ***!
  \************************************************************************************************/
/*! exports provided: CsvHeaderTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CsvHeaderTableComponent", function() { return CsvHeaderTableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "5+WD");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/collections */ "0EQZ");
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngneat/until-destroy */ "VfN6");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../models */ "VHTt");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_state_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../services/state.service */ "ndxW");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
















function CsvHeaderTableComponent_mat_header_cell_3_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-header-cell", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "mat-checkbox", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("change", function CsvHeaderTableComponent_mat_header_cell_3_Template_mat_checkbox_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return $event && ctx_r6.masterToggle(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("checked", ctx_r0.selection.hasValue() && ctx_r0.isAllSelected())("indeterminate", ctx_r0.selection.hasValue() && !ctx_r0.isAllSelected());
} }
function CsvHeaderTableComponent_mat_cell_4_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-cell", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "mat-checkbox", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function CsvHeaderTableComponent_mat_cell_4_Template_mat_checkbox_ngModelChange_1_listener($event) { const row_r8 = ctx.$implicit; return row_r8.INCLUDE = $event; })("click", function CsvHeaderTableComponent_mat_cell_4_Template_mat_checkbox_click_1_listener($event) { return $event.stopPropagation(); })("change", function CsvHeaderTableComponent_mat_cell_4_Template_mat_checkbox_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r12); const row_r8 = ctx.$implicit; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return $event && ctx_r11.selection.toggle(row_r8); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r8 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", row_r8.INCLUDE)("checked", ctx_r1.selection.isSelected(row_r8));
} }
function CsvHeaderTableComponent_mat_header_cell_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-header-cell", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r2.HEADER_COLUMN, " ");
} }
function CsvHeaderTableComponent_mat_cell_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-cell", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r13 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", row_r13[ctx_r3.HEADER_COLUMN], " ");
} }
function CsvHeaderTableComponent_mat_header_row_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "mat-header-row");
} }
function CsvHeaderTableComponent_mat_row_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "mat-row", 17);
} if (rf & 2) {
    const row_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("cdkDragData", row_r14);
} }
const _c0 = function () { return [5, 10, 15, 20]; };
let CsvHeaderTableComponent = class CsvHeaderTableComponent {
    constructor(s) {
        this.s = s;
        /**
         * The index of this component.  The index is
         * created by the factory We added the `@Input`
         * annotation for declarative component testing purposes
         */
        this.index = 0;
        /** CDK SelectionModel instance */
        this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_3__["SelectionModel"](true, []);
        this.HEADER_COLUMN = 'HEADER';
        this.COLUMNS = _models__WEBPACK_IMPORTED_MODULE_6__["CSV_HEADER_META_ROW_COLUMNS"];
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"]([]);
    }
    drop(event) {
        if (event.previousContainer === event.container) {
            Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["moveItemInArray"])(event.container.data, event.previousIndex, event.currentIndex);
            //=========================================
            // Retreive the CsvSelectionData
            // so that we an update the rows 
            // property.
            //=========================================
            const map = this.s.csvDataMapSnapshot();
            const csvData = map.get(this.index);
            //=========================================
            // Set the rows on csvData to the 
            //newly reordered rows
            //=========================================
            csvData.rows = [...event.container.data];
            //=========================================
            // Trigger rerendering of the table
            //=========================================
            this.s.OS.put(this.s.OS.S.CSV_DATA_MAP, map);
            //============================
            //This is taken care of by emitting the data
            //============================
            //this.table.renderRows();
            //==============================
        }
        else {
            Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["transferArrayItem"])(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
        }
    }
    /**
     * Whether the number of selected
     * elements matches the total number of rows.
     */
    isAllSelected() {
        const numRows = this.dataSource.data.length;
        return this.selection.selected.length === numRows;
    }
    /** Selects all rows if they are not all selected; otherwise clear selection. */
    masterToggle() {
        if (this.isAllSelected()) {
            this.selection.clear();
            this.dataSource.data.forEach(row => {
                row.INCLUDE = false;
            });
        }
        else {
            this.dataSource.data.forEach(row => {
                this.selection.select(row);
                row.INCLUDE = true;
            });
        }
    }
    ngOnInit() {
        this.s.OS.S.CSV_DATA_MAP.obs.pipe(Object(_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__["untilDestroyed"])(this)).
            subscribe((map) => {
            if (map) {
                const CSD = map.get(this.index);
                if (CSD) {
                    const rows = CSD.rows;
                    this.dataSource.data = rows;
                }
                else {
                    this.dataSource.data = [];
                }
            }
        });
        //=============================================
        // Subscribe to selection changes:
        // this.selection.changed.subscribe(v => console.log(v))
        //=============================================
    }
    ngAfterViewInit() {
        //=============================================
        // We don't use sorting
        //=============================================
        // this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
    }
};
CsvHeaderTableComponent.ɵfac = function CsvHeaderTableComponent_Factory(t) { return new (t || CsvHeaderTableComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_services_state_service__WEBPACK_IMPORTED_MODULE_8__["StateService"])); };
CsvHeaderTableComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: CsvHeaderTableComponent, selectors: [["app-csv-header-table"]], viewQuery: function CsvHeaderTableComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTable"], 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_5__["MatPaginator"], 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.table = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
    } }, inputs: { index: "index" }, decls: 11, vars: 8, consts: [[2, "max-width", "40rem"], ["cdkDropList", "", "matSort", "", 1, "mat-elevation-z8", 2, "min-width", "22rem", 3, "dataSource", "cdkDropListData", "cdkDropListDropped"], ["matColumnDef", "SELECT"], ["mat-header-cell", "", "style", "justify-content: center; max-width: 6rem;", 4, "matHeaderCellDef"], ["mat-cell", "", "style", "justify-content: center; max-width: 6rem; ", 4, "matCellDef"], [3, "matColumnDef"], ["style", "max-width: 14rem;", "mat-sort-header", "", 4, "matHeaderCellDef"], ["style", "max-width: 14rem;", 4, "matCellDef"], [4, "matHeaderRowDef"], ["cdkDrag", "", 3, "cdkDragData", 4, "matRowDef", "matRowDefColumns"], ["showFirstLastButtons", "", 3, "pageSizeOptions", "pageSize"], ["mat-header-cell", "", 2, "justify-content", "center", "max-width", "6rem"], [3, "checked", "indeterminate", "change"], ["mat-cell", "", 2, "justify-content", "center", "max-width", "6rem"], [3, "ngModel", "checked", "ngModelChange", "click", "change"], ["mat-sort-header", "", 2, "max-width", "14rem"], [2, "max-width", "14rem"], ["cdkDrag", "", 3, "cdkDragData"]], template: function CsvHeaderTableComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "mat-table", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("cdkDropListDropped", function CsvHeaderTableComponent_Template_mat_table_cdkDropListDropped_1_listener($event) { return ctx.drop($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](2, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, CsvHeaderTableComponent_mat_header_cell_3_Template, 2, 2, "mat-header-cell", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](4, CsvHeaderTableComponent_mat_cell_4_Template, 2, 2, "mat-cell", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](5, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](6, CsvHeaderTableComponent_mat_header_cell_6_Template, 2, 1, "mat-header-cell", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](7, CsvHeaderTableComponent_mat_cell_7_Template, 2, 1, "mat-cell", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](8, CsvHeaderTableComponent_mat_header_row_8_Template, 1, 0, "mat-header-row", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](9, CsvHeaderTableComponent_mat_row_9_Template, 1, 1, "mat-row", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](10, "mat-paginator", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("dataSource", ctx.dataSource)("cdkDropListData", ctx.dataSource.data);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("matColumnDef", ctx.HEADER_COLUMN);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("matHeaderRowDef", ctx.COLUMNS);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("matRowDefColumns", ctx.COLUMNS);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](7, _c0))("pageSize", 5);
    } }, directives: [_angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTable"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["CdkDropList"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_9__["MatSort"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatRowDef"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_5__["MatPaginator"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderCell"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_10__["MatCheckbox"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatCell"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgModel"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_9__["MatSortHeader"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatRow"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["CdkDrag"]], styles: ["app-csv-header-selection[_ngcontent-%COMP%]:not(:first-of-type) {\n  margin-left: 2rem;\n}\n\napp-csv-header-selection[_ngcontent-%COMP%] {\n  min-width: 500px;\n}\n\n.CsvHeaderSelectionContainer[_ngcontent-%COMP%] {\n  display: flex;\n  overflow-x: auto;\n}\n\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.cdk-drag-preview[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  border-radius: 4px;\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n\n.cdk-drag-placeholder[_ngcontent-%COMP%] {\n  opacity: 0;\n}\n\n.cdk-drag-animating[_ngcontent-%COMP%] {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n.example-box[_ngcontent-%COMP%]:last-child {\n  border: none;\n}\n\n.example-list.cdk-drop-list-dragging[_ngcontent-%COMP%]   .example-box[_ngcontent-%COMP%]:not(.cdk-drag-placeholder) {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2Nzdi1oZWFkZXItdGFibGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBQTtBQUNGOztBQUVBO0VBQ0UsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UsV0FBQTtBQUNGOztBQUNBO0VBQ0Usc0JBQUE7RUFDQSxrQkFBQTtFQUNBLHFIQUFBO0FBRUY7O0FBRUE7RUFDRSxVQUFBO0FBQ0Y7O0FBRUE7RUFDRSxzREFBQTtBQUNGOztBQUVBO0VBQ0UsWUFBQTtBQUNGOztBQUVBO0VBQ0Usc0RBQUE7QUFDRiIsImZpbGUiOiJjc3YtaGVhZGVyLXRhYmxlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYXBwLWNzdi1oZWFkZXItc2VsZWN0aW9uOm5vdCg6Zmlyc3Qtb2YtdHlwZSkge1xuICBtYXJnaW4tbGVmdDogMnJlbTtcbn1cblxuYXBwLWNzdi1oZWFkZXItc2VsZWN0aW9uIHtcbiAgbWluLXdpZHRoOjUwMHB4O1xufVxuXG4uQ3N2SGVhZGVyU2VsZWN0aW9uQ29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgb3ZlcmZsb3cteDogYXV0bztcbn1cblxudGFibGUge1xuICB3aWR0aDogMTAwJTtcbn1cbi5jZGstZHJhZy1wcmV2aWV3IHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBib3gtc2hhZG93OiAwIDVweCA1cHggLTNweCByZ2JhKDAsIDAsIDAsIDAuMiksXG4gICAgMCA4cHggMTBweCAxcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCAzcHggMTRweCAycHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcbn1cblxuLmNkay1kcmFnLXBsYWNlaG9sZGVyIHtcbiAgb3BhY2l0eTogMDtcbn1cblxuLmNkay1kcmFnLWFuaW1hdGluZyB7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAyNTBtcyBjdWJpYy1iZXppZXIoMCwgMCwgMC4yLCAxKTtcbn1cblxuLmV4YW1wbGUtYm94Omxhc3QtY2hpbGQge1xuICBib3JkZXI6IG5vbmU7XG59XG5cbi5leGFtcGxlLWxpc3QuY2RrLWRyb3AtbGlzdC1kcmFnZ2luZyAuZXhhbXBsZS1ib3g6bm90KC5jZGstZHJhZy1wbGFjZWhvbGRlcikge1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMjUwbXMgY3ViaWMtYmV6aWVyKDAsIDAsIDAuMiwgMSk7XG59XG4iXX0= */"] });
CsvHeaderTableComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__["UntilDestroy"])()
], CsvHeaderTableComponent);



/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_state_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/state.service */ "ndxW");
/* harmony import */ var _fireflysemantics_amplify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fireflysemantics/amplify */ "GzBa");
/* harmony import */ var _fireflysemantics_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fireflysemantics/material */ "n0aL");
/* harmony import */ var _fireflysemantics_analytics__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fireflysemantics/analytics */ "V/qj");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "ofXK");











const _c0 = function (a0) { return [a0]; };
const _c1 = function (a0) { return { "CenterContent": a0 }; };
class AppComponent {
    constructor(s, a, as, localStorageTOSService, analytics) {
        this.s = s;
        this.a = a;
        this.as = as;
        this.localStorageTOSService = localStorageTOSService;
        this.analytics = analytics;
        this.ROUTES = _app_routing_module__WEBPACK_IMPORTED_MODULE_0__["ROUTES"];
        const tosAccepted = localStorageTOSService.OS.snapshot(localStorageTOSService.OS.S.IS_TOS_ACCEPTED);
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_state_service__WEBPACK_IMPORTED_MODULE_2__["StateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_fireflysemantics_amplify__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_fireflysemantics_amplify__WEBPACK_IMPORTED_MODULE_3__["AuthStateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_fireflysemantics_material__WEBPACK_IMPORTED_MODULE_4__["LocalStorageTOSService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_fireflysemantics_analytics__WEBPACK_IMPORTED_MODULE_5__["AnalyticsService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 11, vars: 14, consts: [["mat-button", "", 2, "padding", "1rem", 3, "routerLink"], [2, "width", "42px", "height", "42px", "font-size", "42px"], [3, "isTOSAccepted", "isAuthenticated", "onLogout", "onLogin"], [2, "margin", "2rem", 3, "ngClass"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-toolbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-icon", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "view_column");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " \u00A0 \u00A0 CSV ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "fs-toolbar-menu", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onLogout", function AppComponent_Template_fs_toolbar_menu_onLogout_5_listener() { return ctx.a.signOut(); })("onLogin", function AppComponent_Template_fs_toolbar_menu_onLogin_5_listener() { return ctx.a.signInWithGoogle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](6, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](7, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "main", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](9, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](10, _c0, ctx.ROUTES.APPLICATION));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("isTOSAccepted", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](6, 4, ctx.localStorageTOSService.isTOSAccepted$))("isAuthenticated", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](7, 6, ctx.as.isAuthenticated$));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](12, _c1, !_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](9, 8, ctx.s.isApplicationShowing$)));
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__["MatToolbar"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterLink"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIcon"], _fireflysemantics_material__WEBPACK_IMPORTED_MODULE_4__["ToolbarMenuComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgClass"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterOutlet"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["AsyncPipe"]], styles: ["mat-toolbar[_ngcontent-%COMP%] {\n  justify-content: space-between;\n}\n\n.CenterContent[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  max-width: 32rem;\n  margin: auto !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDhCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7QUFDRiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtdG9vbGJhciB7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLkNlbnRlckNvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXgtd2lkdGg6IDMycmVtO1xuICBtYXJnaW46IGF1dG8gIWltcG9ydGFudDtcbn1cbiJdfQ== */"] });


/***/ }),

/***/ "TmVo":
/*!********************************************!*\
  !*** ./src/app/models/CsvSelectionData.ts ***!
  \********************************************/
/*! exports provided: CsvSelectionData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CsvSelectionData", function() { return CsvSelectionData; });
/* harmony import */ var _fireflysemantics_collections__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fireflysemantics/collections */ "iq7m");
/* harmony import */ var _fireflysemantics_cdk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fireflysemantics/cdk */ "sqjU");


class CsvSelectionData {
    /**
     * We drop in instances of `CsvHeaderMetaRow`
     * after having read in the CSV file.  We grab
     * the headers from that and create the
     * `CsvHeaderMetaRow` instances.
     */
    constructor(meta, rows, tableData) {
        this.meta = meta;
        this.rows = rows;
        this.tableData = tableData;
        /**
         * The CSV entities mapped by their key.
         */
        this.keyMap = new Map();
    }
    getSelectedHeaders() {
        return this.rows.filter(r => r.INCLUDE).
            map(r => r.HEADER.trim());
    }
    getHeaders() {
        return this.rows.map(r => r.HEADER.trim());
    }
    isKeyIncludedInHeaders(key) {
        return this.getHeaders().includes(key);
    }
    /**
     * This maps the CSV data
     * to the headers fields selected,
     *
     * Once complete the mappedData:TableData
     * fields are initialized.
     *
     * These include:
     * mappedData.rows
     * mappedData.headers
     *
     * The `mappedData.rows` objects
     * can now be assembled with the other
     * tables or saved if there is just one table.
     *
     * Note that for assembly to occur keys should be
     * selected.  We do support the use case of just saving
     * columns.
     *
     * This is only when operating on a single table.
     */
    mapData() {
        //==========================================
        // Support the use case where
        // we only have a single table and we 
        // want to map columns only.
        //==========================================
        this.mappedData = new _fireflysemantics_cdk__WEBPACK_IMPORTED_MODULE_1__["TableData"]();
        if (this.getSelectedHeaders().length) {
            const rows = [];
            this.mappedData.headers = this.getSelectedHeaders();
            this.tableData.rows.forEach(v => {
                rows.push(Object(_fireflysemantics_collections__WEBPACK_IMPORTED_MODULE_0__["mapObject"])(v, this.getSelectedHeaders()));
            });
            this.mappedData.rows = rows;
        }
        else {
            this.mappedData.rows = [];
        }
    }
    /**
     * Creates the key to entity map
     * of the CSV data rows.
     */
    indexAndMapData(keyHeader) {
        if (keyHeader) {
            this.keyMap = new Map();
            this.tableData.rows.forEach(r => {
                this.keyMap.set(r[keyHeader], Object(_fireflysemantics_collections__WEBPACK_IMPORTED_MODULE_0__["mapObject"])(r, this.getSelectedHeaders()));
            });
        }
    }
}


/***/ }),

/***/ "VHTt":
/*!*********************************!*\
  !*** ./src/app/models/index.ts ***!
  \*********************************/
/*! exports provided: rowConverter, ERROR_TYPES, ERROR_TYPE_KEYS, FILE_ROW_KEY_ERROR_COLUMNS, FileRowKeyError, FILE_ROW_DUPLICATES_ERROR_COLUMNS, FileRowDuplicatesError, IndexedMetaError, MISSING_KEY_HEADER_ERROR_COLUMNS, MissingKeyHeaderError, DUPLICATE_SELECTED_HEADER_ERROR_COLUMNS, DuplicateSelectedHeaderError, MISSING_OBJECT_ERROR_COLUMNS, MissingObject, CsvSelectionData, CsvSelectionDataAssemblyContainer, CSV_HEADER_META_ROW_COLUMNS, CsvHeaderMetaRow, LOCAL_STORAGE_KEYS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_validation_rowConverter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/validation/rowConverter */ "hGxX");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "rowConverter", function() { return _services_validation_rowConverter__WEBPACK_IMPORTED_MODULE_0__["rowConverter"]; });

/* harmony import */ var _error__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./error */ "yFkK");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ERROR_TYPES", function() { return _error__WEBPACK_IMPORTED_MODULE_1__["ERROR_TYPES"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ERROR_TYPE_KEYS", function() { return _error__WEBPACK_IMPORTED_MODULE_1__["ERROR_TYPE_KEYS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FILE_ROW_KEY_ERROR_COLUMNS", function() { return _error__WEBPACK_IMPORTED_MODULE_1__["FILE_ROW_KEY_ERROR_COLUMNS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FileRowKeyError", function() { return _error__WEBPACK_IMPORTED_MODULE_1__["FileRowKeyError"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FILE_ROW_DUPLICATES_ERROR_COLUMNS", function() { return _error__WEBPACK_IMPORTED_MODULE_1__["FILE_ROW_DUPLICATES_ERROR_COLUMNS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FileRowDuplicatesError", function() { return _error__WEBPACK_IMPORTED_MODULE_1__["FileRowDuplicatesError"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IndexedMetaError", function() { return _error__WEBPACK_IMPORTED_MODULE_1__["IndexedMetaError"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MISSING_KEY_HEADER_ERROR_COLUMNS", function() { return _error__WEBPACK_IMPORTED_MODULE_1__["MISSING_KEY_HEADER_ERROR_COLUMNS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MissingKeyHeaderError", function() { return _error__WEBPACK_IMPORTED_MODULE_1__["MissingKeyHeaderError"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DUPLICATE_SELECTED_HEADER_ERROR_COLUMNS", function() { return _error__WEBPACK_IMPORTED_MODULE_1__["DUPLICATE_SELECTED_HEADER_ERROR_COLUMNS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DuplicateSelectedHeaderError", function() { return _error__WEBPACK_IMPORTED_MODULE_1__["DuplicateSelectedHeaderError"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MISSING_OBJECT_ERROR_COLUMNS", function() { return _error__WEBPACK_IMPORTED_MODULE_1__["MISSING_OBJECT_ERROR_COLUMNS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MissingObject", function() { return _error__WEBPACK_IMPORTED_MODULE_1__["MissingObject"]; });

/* harmony import */ var _CsvSelectionData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CsvSelectionData */ "TmVo");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CsvSelectionData", function() { return _CsvSelectionData__WEBPACK_IMPORTED_MODULE_2__["CsvSelectionData"]; });

/* harmony import */ var _CsvSelectionDataAssemblyContainer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CsvSelectionDataAssemblyContainer */ "lJk9");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CsvSelectionDataAssemblyContainer", function() { return _CsvSelectionDataAssemblyContainer__WEBPACK_IMPORTED_MODULE_3__["CsvSelectionDataAssemblyContainer"]; });

/* harmony import */ var _CsvHeaderMetaRow__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CsvHeaderMetaRow */ "YsQe");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CSV_HEADER_META_ROW_COLUMNS", function() { return _CsvHeaderMetaRow__WEBPACK_IMPORTED_MODULE_4__["CSV_HEADER_META_ROW_COLUMNS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CsvHeaderMetaRow", function() { return _CsvHeaderMetaRow__WEBPACK_IMPORTED_MODULE_4__["CsvHeaderMetaRow"]; });

/* harmony import */ var _localstorage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./localstorage */ "ZOee");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LOCAL_STORAGE_KEYS", function() { return _localstorage__WEBPACK_IMPORTED_MODULE_5__["LOCAL_STORAGE_KEYS"]; });









/***/ }),

/***/ "W3Zi":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _fireflysemantics_amplify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fireflysemantics/amplify */ "GzBa");
/* harmony import */ var _fireflysemantics_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fireflysemantics/material */ "n0aL");



class LoginComponent {
    constructor(as) {
        this.as = as;
    }
    ngOnInit() {
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_fireflysemantics_amplify__WEBPACK_IMPORTED_MODULE_1__["AuthService"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 1, vars: 0, consts: [[3, "onSignIn"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "fs-tos-login", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onSignIn", function LoginComponent_Template_fs_tos_login_onSignIn_0_listener() { return ctx.as.signInWithGoogle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_fireflysemantics_material__WEBPACK_IMPORTED_MODULE_2__["TOSLoginComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2dpbi5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ "Xxz2":
/*!*****************************************************************!*\
  !*** ./src/app/components/application/application.component.ts ***!
  \*****************************************************************/
/*! exports provided: ApplicationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplicationComponent", function() { return ApplicationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _fireflysemantics_amplify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fireflysemantics/amplify */ "GzBa");
/* harmony import */ var _services_component_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/component-data.service */ "buDW");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _csv_process_csv_process_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../csv-process/csv-process.component */ "sS0W");







const _c0 = ["vcr"];
class ApplicationComponent {
    constructor(as, cds) {
        this.as = as;
        this.cds = cds;
    }
    ngAfterViewInit() {
        this.cds.VCR = this.VCR;
    }
    createComponent() {
        this.cds.createComponent();
    }
    ngOnDestroy() {
        this.cds.reset();
    }
    ngOnInit() { }
    clearContainer() {
        this.VCR.clear();
    }
    logout() {
        this.as.signOut();
    }
}
ApplicationComponent.ɵfac = function ApplicationComponent_Factory(t) { return new (t || ApplicationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_fireflysemantics_amplify__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_component_data_service__WEBPACK_IMPORTED_MODULE_2__["ComponentDataService"])); };
ApplicationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ApplicationComponent, selectors: [["app-application"]], viewQuery: function ApplicationComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.VCR = _t.first);
    } }, decls: 7, vars: 0, consts: [["mat-icon-button", "", "aria-label", "Load CSV Dialog", 3, "click"], [1, "CsvHeaderSelectionContainer"], ["vcr", ""]], template: function ApplicationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ApplicationComponent_Template_button_click_0_listener() { return ctx.createComponent(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "add_box");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", null, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-csv-composite");
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIcon"], _csv_process_csv_process_component__WEBPACK_IMPORTED_MODULE_5__["CsvProcessComponent"]], styles: [".CsvHeaderSelectionContainer[_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2FwcGxpY2F0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7QUFDSiIsImZpbGUiOiJhcHBsaWNhdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5Dc3ZIZWFkZXJTZWxlY3Rpb25Db250YWluZXIge1xuICAgIG92ZXJmbG93LXg6IGF1dG87XG59Il19 */"] });


/***/ }),

/***/ "YsQe":
/*!********************************************!*\
  !*** ./src/app/models/CsvHeaderMetaRow.ts ***!
  \********************************************/
/*! exports provided: CSV_HEADER_META_ROW_COLUMNS, CsvHeaderMetaRow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CSV_HEADER_META_ROW_COLUMNS", function() { return CSV_HEADER_META_ROW_COLUMNS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CsvHeaderMetaRow", function() { return CsvHeaderMetaRow; });
/**
 * The columns headers for the table
 * that renders CsvHeaderMetaRow instances.
 */
const CSV_HEADER_META_ROW_COLUMNS = ['SELECT', 'HEADER'];
/**
 * Instances of this class are rendered by the
 * table contained in the `CsvHeaderTableComponent`.
 *
 * @example
 * [{ INCLUDE: false, HEADER: 'salesPrice'},
 *  { INCLUDE: true, HEADER: 'quantity'}]
 */
class CsvHeaderMetaRow {
    constructor(HEADER) {
        this.HEADER = HEADER;
        this.INCLUDE = false;
    }
}


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "5+WD");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/home/home.component */ "BuFo");
/* harmony import */ var _fireflysemantics_material_base_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fireflysemantics/material-base-module */ "mjan");
/* harmony import */ var _fireflysemantics_csv_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fireflysemantics/csv-components */ "pbtI");
/* harmony import */ var _fireflysemantics_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fireflysemantics/material */ "n0aL");
/* harmony import */ var _fireflysemantics_assets__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fireflysemantics/assets */ "hSxq");
/* harmony import */ var _components_application_application_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/application/application.component */ "Xxz2");
/* harmony import */ var _components_csv_header_selection_csv_header_selection_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/csv-header-selection/csv-header-selection.component */ "9X8r");
/* harmony import */ var _components_csv_header_selection_csv_header_table_csv_header_table_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/csv-header-selection/csv-header-table/csv-header-table.component */ "QIbE");
/* harmony import */ var _components_csv_process_csv_process_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/csv-process/csv-process.component */ "sS0W");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/login/login.component */ "W3Zi");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @scullyio/ng-lib */ "sbAP");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/core */ "fXoL");


















const FS_MODULES = [_fireflysemantics_material__WEBPACK_IMPORTED_MODULE_8__["DataTableComponentModule"], _fireflysemantics_material__WEBPACK_IMPORTED_MODULE_8__["ErrorComponentModule"], _fireflysemantics_csv_components__WEBPACK_IMPORTED_MODULE_7__["CsvLoadModule"], _fireflysemantics_material__WEBPACK_IMPORTED_MODULE_8__["ToolbarMenuModule"], _fireflysemantics_material_base_module__WEBPACK_IMPORTED_MODULE_6__["MaterialBaseModule"], _fireflysemantics_material__WEBPACK_IMPORTED_MODULE_8__["TOSLoginModule"], _fireflysemantics_assets__WEBPACK_IMPORTED_MODULE_9__["AssetsModule"]];
class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["DragDropModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
            _fireflysemantics_material_base_module__WEBPACK_IMPORTED_MODULE_6__["MaterialBaseModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_15__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormsModule"],
            ...FS_MODULES,
            _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_16__["ScullyLibModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _components_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
        _components_application_application_component__WEBPACK_IMPORTED_MODULE_10__["ApplicationComponent"],
        _components_csv_header_selection_csv_header_selection_component__WEBPACK_IMPORTED_MODULE_11__["CsvHeaderSelectionComponent"],
        _components_csv_header_selection_csv_header_table_csv_header_table_component__WEBPACK_IMPORTED_MODULE_12__["CsvHeaderTableComponent"],
        _components_csv_process_csv_process_component__WEBPACK_IMPORTED_MODULE_13__["CsvProcessComponent"],
        _components_login_login_component__WEBPACK_IMPORTED_MODULE_14__["LoginComponent"]], imports: [_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["DragDropModule"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
        _fireflysemantics_material_base_module__WEBPACK_IMPORTED_MODULE_6__["MaterialBaseModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_15__["ReactiveFormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormsModule"], _fireflysemantics_material__WEBPACK_IMPORTED_MODULE_8__["DataTableComponentModule"], _fireflysemantics_material__WEBPACK_IMPORTED_MODULE_8__["ErrorComponentModule"], _fireflysemantics_csv_components__WEBPACK_IMPORTED_MODULE_7__["CsvLoadModule"], _fireflysemantics_material__WEBPACK_IMPORTED_MODULE_8__["ToolbarMenuModule"], _fireflysemantics_material_base_module__WEBPACK_IMPORTED_MODULE_6__["MaterialBaseModule"], _fireflysemantics_material__WEBPACK_IMPORTED_MODULE_8__["TOSLoginModule"], _fireflysemantics_assets__WEBPACK_IMPORTED_MODULE_9__["AssetsModule"], _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_16__["ScullyLibModule"]] }); })();


/***/ }),

/***/ "ZOee":
/*!****************************************!*\
  !*** ./src/app/models/localstorage.ts ***!
  \****************************************/
/*! exports provided: LOCAL_STORAGE_KEYS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOCAL_STORAGE_KEYS", function() { return LOCAL_STORAGE_KEYS; });
const LOCAL_STORAGE_KEYS = {
    APPLICATION_CONFIG: 'APPLICATION_CONFIG'
};


/***/ }),

/***/ "buDW":
/*!****************************************************!*\
  !*** ./src/app/services/component-data.service.ts ***!
  \****************************************************/
/*! exports provided: ComponentDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentDataService", function() { return ComponentDataService; });
/* harmony import */ var _components_csv_header_selection_csv_header_selection_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/csv-header-selection/csv-header-selection.component */ "9X8r");
/* harmony import */ var _fireflysemantics_collections__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fireflysemantics/collections */ "iq7m");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _state_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./state.service */ "ndxW");




class ComponentDataService {
    constructor(resolver, s) {
        this.resolver = resolver;
        this.s = s;
        //==================================
        // The index that can be assigned
        // to a newly created component
        //==================================
        this.index = 0;
        //==================================
        // Map of index to ComponentRef instance
        //==================================
        this.map = new Map();
    }
    /**
     * Creates a `CsvHeaderSelectionComponent`.
     * Each time we create a component we increment
     * the `index` used to store the component
     * in the map.
     *
     * Note that if we delete a component, we deleteAndDecrement
     * from the map correspondingly.
     */
    createComponent() {
        const factory = this.resolver.resolveComponentFactory(_components_csv_header_selection_csv_header_selection_component__WEBPACK_IMPORTED_MODULE_0__["CsvHeaderSelectionComponent"]);
        const componentRef = this.VCR.createComponent(factory);
        componentRef.instance.index = this.index;
        this.map.set(this.index, componentRef);
        this.index++;
    }
    destroyComponent(index) {
        if (index == 0) {
            this.reset();
            return;
        }
        const componentRef = this.map.get(index);
        componentRef.destroy();
        Object(_fireflysemantics_collections__WEBPACK_IMPORTED_MODULE_1__["deleteAndDecrement"])(this.map, index);
        //====================================
        // Remap the component indexes also
        //====================================
        this.map.forEach((v, k) => {
            v.instance.index = k;
        });
        const dataMap = this.s.OS.snapshot(this.s.OS.S.CSV_DATA_MAP);
        //====================================
        // Update the data map.
        // We check if it is created
        // because components can be displayed
        // but they may not have loaded data
        //====================================
        if (dataMap && dataMap.size) {
            if (dataMap.get(index)) {
                Object(_fireflysemantics_collections__WEBPACK_IMPORTED_MODULE_1__["deleteAndDecrement"])(dataMap, index);
            }
        }
        //====================================
        // Decrement the index because we 
        // removed a component
        //====================================
        this.index--;
        //====================================
        // Update events that depend on observing
        // changes to the dataMap
        //====================================
        this.s.OS.put(this.s.OS.S.CSV_DATA_MAP, dataMap);
    }
    /**
     * Destroy all table header container components
     * and clear the data map.
     *
     * This is called by the application component
     * in the ngOnDestroy method.
     */
    reset() {
        this.map &&
            this.map.forEach((ref) => {
                ref && ref.destroy();
            });
        this.map && this.map.clear();
        const dataMap = this.s.OS.snapshot(this.s.OS.S.CSV_DATA_MAP);
        dataMap && dataMap.clear();
    }
}
ComponentDataService.ɵfac = function ComponentDataService_Factory(t) { return new (t || ComponentDataService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ComponentFactoryResolver"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_state_service__WEBPACK_IMPORTED_MODULE_3__["StateService"])); };
ComponentDataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: ComponentDataService, factory: ComponentDataService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "caJQ":
/*!*********************************************************************************!*\
  !*** ./src/app/services/validation/validateAllTablesContainPrimaryKeyHeader.ts ***!
  \*********************************************************************************/
/*! exports provided: validateAllTablesContainPrimaryKeyHeader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateAllTablesContainPrimaryKeyHeader", function() { return validateAllTablesContainPrimaryKeyHeader; });
/**
 * Validate that the key headers match across all the tables.
 *
 * @return true if there is only one table or all the tables have the primary key
 */
function validateAllTablesContainPrimaryKeyHeader(dataMap, key) {
    //====================================
    // Only process when there are at least
    // Two tables.
    //====================================
    if (dataMap.size == 1) {
        return true;
    }
    if (dataMap.size > 1) {
        let valid = true;
        dataMap.forEach(CSD => {
            if (!CSD.isKeyIncludedInHeaders(key)) {
                valid = false;
            }
        });
        return valid;
    }
    return false;
}


/***/ }),

/***/ "dGXY":
/*!**********************************************************!*\
  !*** ./src/app/services/process/data-process.service.ts ***!
  \**********************************************************/
/*! exports provided: DataProcessService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataProcessService", function() { return DataProcessService; });
/* harmony import */ var _processSingleTable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./processSingleTable */ "7d2G");
/* harmony import */ var _processMultipleTables__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./processMultipleTables */ "zuPC");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _state_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../state.service */ "ndxW");
/* harmony import */ var _validation_validation_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../validation/validation.service */ "M6SW");





class DataProcessService {
    constructor(s, v) {
        this.s = s;
        this.v = v;
    }
    /**
     * Processes the CSV Data.
     * @return true, then there were no validation errors, false otherwise.
     */
    process() {
        //===================================
        // Set the result to null such that
        // the table component is destroyed 
        // and recreated by the ngIf statement.
        //
        // Also the save enabled state is reset.
        //===================================
        this.s.resetResultState();
        this.s.resetErrorState();
        //========================================
        // Retrieve the selection data
        //========================================
        const dataMap = this.s.csvDataMapSnapshot();
        if (dataMap.size == 1) {
            return Object(_processSingleTable__WEBPACK_IMPORTED_MODULE_0__["processSingleTable"])(dataMap, this.s, this.v);
        }
        return Object(_processMultipleTables__WEBPACK_IMPORTED_MODULE_1__["processMultipleTables"])(dataMap, this.s, this.v);
    }
}
DataProcessService.ɵfac = function DataProcessService_Factory(t) { return new (t || DataProcessService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_state_service__WEBPACK_IMPORTED_MODULE_3__["StateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_validation_validation_service__WEBPACK_IMPORTED_MODULE_4__["ValidationService"])); };
DataProcessService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: DataProcessService, factory: DataProcessService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "e93x":
/*!**********************************************************!*\
  !*** ./src/app/services/validation/validateKeyValues.ts ***!
  \**********************************************************/
/*! exports provided: validateDefinedKeyValues */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateDefinedKeyValues", function() { return validateDefinedKeyValues; });
/* harmony import */ var _fireflysemantics_error__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fireflysemantics/error */ "avuZ");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models */ "VHTt");


/**
 * Validate the key fields in data set are defined.
 *
 * Values including '', '   ', null or undefined are flagged.
 *
 * This operation only completes if there are
 * CSV rows to operate on and selected keys.
 *
 * @param dataMap The map containing the CSV Entities
 * @param errorChannel The error channel
 * @return The IME if there are errors otherwise null
 *
  //========================================
  // Validate the key fields for each table
  //========================================
  // EXAMPLE
  //========================================
  // Suppose Table 1 has SKU marked as a key.
  // Row 3 has undefined or null for SKU
  // Row 3 now has a validation error created
  // for it.
  //========================================
 */
function validateDefinedKeyValues(dataMap, config) {
    const keyHeader = config.keyHeader;
    const IME = new _models__WEBPACK_IMPORTED_MODULE_1__["IndexedMetaError"]();
    IME.tableData.headers = _models__WEBPACK_IMPORTED_MODULE_1__["FILE_ROW_KEY_ERROR_COLUMNS"];
    IME.type = _models__WEBPACK_IMPORTED_MODULE_1__["ERROR_TYPE_KEYS"].UNDEFINED_KEY_VALUE_ERROR;
    dataMap.forEach((CSD, k) => {
        const FRKES = [];
        if (keyHeader && CSD.tableData.rows.length) {
            const RKES = Object(_fireflysemantics_error__WEBPACK_IMPORTED_MODULE_0__["undefinedRowKeys"])(CSD.tableData.rows, [keyHeader], _models__WEBPACK_IMPORTED_MODULE_1__["rowConverter"]);
            RKES.forEach(e => {
                const FRKE = new _models__WEBPACK_IMPORTED_MODULE_1__["FileRowKeyError"](e.FIELD, e.ROW, CSD.meta.name);
                FRKES.push(FRKE);
            });
            IME.indexErrors.set(k, FRKES);
            IME.indexedMeta.set(k, CSD.meta);
            IME.tableData.rows = [...IME.tableData.rows, ...FRKES];
        }
    });
    return IME.tableData.rows.length ? IME : null;
}


/***/ }),

/***/ "fjHL":
/*!****************************************************************!*\
  !*** ./src/app/services/validation/validateUniqueKeyValues.ts ***!
  \****************************************************************/
/*! exports provided: validateUniqueKeyValues */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateUniqueKeyValues", function() { return validateUniqueKeyValues; });
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models */ "VHTt");
/* harmony import */ var _fireflysemantics_collections__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fireflysemantics/collections */ "iq7m");
/* harmony import */ var _models_error__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/error */ "yFkK");
/* harmony import */ var _rowConverter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./rowConverter */ "hGxX");




/**
 * This will check whether the
 * key is unique across all records
 * in each table.
 *
 * @param dataMap The map of CsvSelectionData instances
 * @return An `IndexedMetaError` instance or null if there are no errors
 */
function validateUniqueKeyValues(dataMap, config) {
    const keyHeader = config.keyHeader;
    const IME = new _models__WEBPACK_IMPORTED_MODULE_0__["IndexedMetaError"]();
    IME.type = _models_error__WEBPACK_IMPORTED_MODULE_2__["ERROR_TYPE_KEYS"].DUPLICATE_KEY_ERROR;
    IME.tableData.headers = _models_error__WEBPACK_IMPORTED_MODULE_2__["FILE_ROW_DUPLICATES_ERROR_COLUMNS"];
    dataMap.forEach((CSD, k) => {
        if (keyHeader) {
            const duplicates = Object(_fireflysemantics_collections__WEBPACK_IMPORTED_MODULE_1__["duplicateCompoundKeys"])(CSD.tableData.rows, [keyHeader]);
            const duplicateEntities = duplicates.map(d => {
                const rowString = Object(_rowConverter__WEBPACK_IMPORTED_MODULE_3__["rowConverter"])(d);
                const duplicateEntity = new _models_error__WEBPACK_IMPORTED_MODULE_2__["FileRowDuplicatesError"](rowString, CSD.meta.name);
                return duplicateEntity;
            });
            IME.indexErrors.set(k, duplicateEntities);
            IME.indexedMeta.set(k, CSD.meta);
            IME.tableData.rows = [...IME.tableData.rows, ...duplicateEntities];
        }
    });
    return IME.tableData.rows.length ? IME : null;
}


/***/ }),

/***/ "hGxX":
/*!*****************************************************!*\
  !*** ./src/app/services/validation/rowConverter.ts ***!
  \*****************************************************/
/*! exports provided: rowConverter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rowConverter", function() { return rowConverter; });
/**
 * Convert the object key value pairs to a string.
 *
 * We are using a custom converters to format
 * objects strings where the key is undefined, null,
 * or missing.
 *
 * @param o
 * @return The key value pair string
 */
function rowConverter(o) {
    const keyValuePairs = [];
    const keys = Object.keys(o);
    keys.forEach(k => {
        const keyValue = `[ ${k} = ${o[k]} ]`;
        keyValuePairs.push(keyValue);
    });
    const str = keyValuePairs.join(``);
    return str;
}


/***/ }),

/***/ "lJk9":
/*!*************************************************************!*\
  !*** ./src/app/models/CsvSelectionDataAssemblyContainer.ts ***!
  \*************************************************************/
/*! exports provided: CsvSelectionDataAssemblyContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CsvSelectionDataAssemblyContainer", function() { return CsvSelectionDataAssemblyContainer; });
/* harmony import */ var _fireflysemantics_cdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fireflysemantics/cdk */ "sqjU");

/**
 * The `CsvSelectionDataAssemblyContainer`
 * should be used when there is more than one
 * table.
 *
 * This calls createAssemblyHeaders (All the headers contained
 * in the result table) ) in the constructor
 * so that they will be availble on `assembly`.
 *
 * Note that `CsvSelectionData.refreshState()`
 * should be called on each instance contained
 * in the `dataMap` before the `dataMap` is passed in.
 */
class CsvSelectionDataAssemblyContainer {
    constructor(dataMap) {
        this.dataMap = dataMap;
        this.assembly = new _fireflysemantics_cdk__WEBPACK_IMPORTED_MODULE_0__["TableData"]();
        if (dataMap && dataMap.size) {
            //=====================================
            // Keys come from the first
            // CsvSelectionData instance on the map
            //
            // The compound keys should be the same
            // across the CsvSelectionData instances.
            //=====================================
            this.keys = [...this.dataMap.get(0).keyMap.keys()];
            this.createAssemblyHeaders();
            if (this.hasAssemblyHeaders()) {
                this.assembly.rows = this.createAssemblyRows();
            }
        }
    }
    createAssemblyRows() {
        const assemblyRows = [];
        this.keys.forEach(k => {
            let assemblyObject = {};
            this.dataMap.forEach(v => {
                console.log(`The selected headers o is ${v.getSelectedHeaders()}`);
                if (v.getSelectedHeaders().length) {
                    const o = v.keyMap.get(k);
                    console.log(`The o is ${JSON.stringify(o)}`);
                    assemblyObject = Object.assign(Object.assign({}, assemblyObject), o);
                }
            });
            assemblyRows.push(assemblyObject);
        });
        return assemblyRows;
    }
    /**
     * Creates the assembly headers or
     * the headers that were welected to
     * form the final table.
     *
     * @returns The array of headers
     */
    createAssemblyHeaders() {
        let headers = [];
        this.dataMap && this.dataMap.forEach(v => {
            headers = [...headers, ...v.getSelectedHeaders()];
        });
        this.assembly.headers = headers;
        return headers;
    }
    /**
     * This method can be called to
     * check whether assembly headers exists.
     *
     * If they don't no assembly is created so
     * the result does not need to be emitted.
     */
    hasAssemblyHeaders() {
        return !!this.assembly.headers.length;
    }
}


/***/ }),

/***/ "ndxW":
/*!*******************************************!*\
  !*** ./src/app/services/state.service.ts ***!
  \*******************************************/
/*! exports provided: OSK, StateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OSK", function() { return OSK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StateService", function() { return StateService; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _fireflysemantics_slice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fireflysemantics/slice */ "bX0s");
/* harmony import */ var _fireflysemantics_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fireflysemantics/constants */ "7C6b");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _validation_validateAllTablesContainPrimaryKeyHeader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./validation/validateAllTablesContainPrimaryKeyHeader */ "caJQ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");








const OSK = {
    //=================================
    // CONFIGURATION
    //=================================
    APPLICATION_CONFIG: { value: null },
    //=================================
    // SELECTED KEY
    //=================================
    SELECTED_KEY: { value: null },
    //=================================
    // DATA MANAGEMENT
    //=================================
    IS_CSV_DATA_LOADING: { value: false },
    IS_CSV_DATA_BATCH_RUNNING: { value: false },
    ON_CSV_DATA_BATCH_UPDATE: { value: 0 },
    CSV_DATA_MAP: { value: null },
    PROCESS_RESULT: { value: null },
    //=================================
    // ERROR MANAGEMENT
    //=================================
    LOAD_AND_PROCESSING_ERRORS: { value: null },
    //=================================
    // UI EVENTS
    //=================================
    KEY_HEADER_CHECKBOX_TOGGLE_EVENT: { value: false },
};
class StateService {
    constructor(r) {
        this.r = r;
        this.APPLICATION_ROUTE = `/${_fireflysemantics_constants__WEBPACK_IMPORTED_MODULE_2__["APPLICATION_NAVIGATION"].APPLICATION.path}`;
        this.OS = new _fireflysemantics_slice__WEBPACK_IMPORTED_MODULE_1__["OStore"](OSK);
        //=================================
        //=================================
        // ALIASES
        //=================================
        //=================================
        this.selectedKey$ = this.OS.S.SELECTED_KEY.obs;
        this.csvDataMap$ = this.OS.S.CSV_DATA_MAP.obs;
        //=================================
        //=================================
        // DERIVED STATE
        //=================================
        //=================================
        //---------------------------------
        // APPLICATION SHOWING
        //---------------------------------
        this.isApplicationShowing$ = this.r.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_0__["NavigationEnd"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((event) => event.url == this.APPLICATION_ROUTE));
        //---------------------------------
        // RESULT READY
        //---------------------------------
        this.isResultReady$ = this.OS.S.PROCESS_RESULT.obs.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(r => {
            return !!r;
        }));
        //---------------------------------
        // PROCESS BUTTON ENABLED
        //---------------------------------
        this.processButtonEnabled$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["combineLatest"])([
            this.selectedKey$,
            this.csvDataMap$
        ]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((arr) => {
            const selectedKey = arr[0];
            const dataMap = arr[1];
            if (dataMap && dataMap.size == 1) {
                return true;
            }
            if (dataMap && dataMap.size > 1 && !selectedKey) {
                return false;
            }
            if (dataMap && dataMap.size > 1) {
                return Object(_validation_validateAllTablesContainPrimaryKeyHeader__WEBPACK_IMPORTED_MODULE_5__["validateAllTablesContainPrimaryKeyHeader"])(dataMap, selectedKey);
            }
            return false;
        }));
        //---------------------------------
        // SAVE BUTTON ENABLED
        //---------------------------------
        this.saveButtonEnabled$ = this.OS.S.PROCESS_RESULT.obs.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(r => {
            return !!r;
        }));
        //---------------------------------
        // LOAD AND PROCESSING ERORS
        //---------------------------------
        this.hasLoadAndProcessingErrorOccured$ = this.OS.S.LOAD_AND_PROCESSING_ERRORS.obs.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(r => {
            return !!r;
        }));
    }
    //---------------------------------
    // IS THE KEY SLEECTED
    //---------------------------------
    isKeySelected$() {
        return this.OS.S.SELECTED_KEY.obs.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(v => !!v));
    }
    //=================================
    //=================================
    // UTILITY METHODS
    //=================================
    //=================================
    resetResultState() {
        this.OS.put(this.OS.S.PROCESS_RESULT, null);
    }
    resetErrorState() {
        this.OS.put(this.OS.S.LOAD_AND_PROCESSING_ERRORS, null);
    }
    csvDataMapSnapshot() {
        return this.OS.snapshot(this.OS.S.CSV_DATA_MAP);
    }
    keySnapshot() {
        return this.OS.snapshot(this.OS.S.SELECTED_KEY);
    }
    csvSelectionDataSnapshot(index) {
        const csvDataMap = this.csvDataMapSnapshot();
        if (csvDataMap) {
            return csvDataMap.get(index);
        }
    }
}
StateService.ɵfac = function StateService_Factory(t) { return new (t || StateService)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"])); };
StateService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({ token: StateService, factory: StateService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "rzrB":
/*!****************************!*\
  !*** ./src/aws-exports.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* eslint-disable */
// WARNING: DO NOT EDIT. This file is automatically generated by AWS Amplify. It will be overwritten.

const awsmobile = {
    "aws_project_region": "us-east-1",
    "aws_cognito_identity_pool_id": "us-east-1:485bc07d-2ee3-4e34-8c3a-6e73b6db22fc",
    "aws_cognito_region": "us-east-1",
    "aws_user_pools_id": "us-east-1_z5PA9UXM6",
    "aws_user_pools_web_client_id": "u5e8quees6mvrm241n3ng8j6m",
    "oauth": {
        "domain": "csvfd66a523-fd66a523-production.auth.us-east-1.amazoncognito.com",
        "scope": [
            "phone",
            "email",
            "openid",
            "profile",
            "aws.cognito.signin.user.admin"
        ],
        "redirectSignIn": "https://csv.fireflysemantics.com/",
        "redirectSignOut": "https://csv.fireflysemantics.com/",
        "responseType": "code"
    },
    "federationTarget": "COGNITO_USER_POOLS"
};

/* harmony default export */ __webpack_exports__["default"] = (awsmobile);


/***/ }),

/***/ "sS0W":
/*!*****************************************************************!*\
  !*** ./src/app/components/csv-process/csv-process.component.ts ***!
  \*****************************************************************/
/*! exports provided: CsvProcessComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CsvProcessComponent", function() { return CsvProcessComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _models_error__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/error */ "yFkK");
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngneat/until-destroy */ "VfN6");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_state_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/state.service */ "ndxW");
/* harmony import */ var _services_process_data_process_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/process/data-process.service */ "dGXY");
/* harmony import */ var _services_csv_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/csv.service */ "vUMC");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _fireflysemantics_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @fireflysemantics/material */ "n0aL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "ofXK");












function CsvProcessComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Result");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "fs-data-table", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("tableData$", ctx_r0.resultData$);
} }
let CsvProcessComponent = class CsvProcessComponent {
    constructor(s, c, csv) {
        this.s = s;
        this.c = c;
        this.csv = csv;
        this.errorTypes = _models_error__WEBPACK_IMPORTED_MODULE_1__["ERROR_TYPES"];
        this.errorKey$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(null);
    }
    ngOnInit() {
        this.resultData$ = this.s.OS.S.PROCESS_RESULT.obs;
    }
    ngAfterViewInit() {
        this.s.OS.S.LOAD_AND_PROCESSING_ERRORS.obs.pipe(Object(_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_2__["untilDestroyed"])(this)).
            subscribe((IME) => {
            if (IME) {
                this.errorKey$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(IME.type);
                this.errorData$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(IME.tableData);
            }
            else {
                //=========================================
                //We reset the errorKey$ to null such that
                //the error component does not display
                //=========================================
                this.errorKey$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(null);
            }
        });
    }
    process() {
        this.c.process();
    }
};
CsvProcessComponent.ɵfac = function CsvProcessComponent_Factory(t) { return new (t || CsvProcessComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_state_service__WEBPACK_IMPORTED_MODULE_5__["StateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_process_data_process_service__WEBPACK_IMPORTED_MODULE_6__["DataProcessService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_csv_service__WEBPACK_IMPORTED_MODULE_7__["CsvService"])); };
CsvProcessComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: CsvProcessComponent, selectors: [["app-csv-composite"]], decls: 13, vars: 12, consts: [["mat-stroked-button", "", "color", "accent", 2, "margin-bottom", "1rem", 3, "disabled", "click"], ["mat-stroked-button", "", "color", "accent", 1, "Button", 3, "disabled", "click"], [3, "error$", "errorTypes", "tableData$"], [4, "ngIf"], [3, "tableData$"]], template: function CsvProcessComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CsvProcessComponent_Template_button_click_0_listener() { return ctx.process(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](1, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "api");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, " PROCESS\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CsvProcessComponent_Template_button_click_5_listener() { return ctx.csv.saveCSV(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](6, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "save");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, " SAVE\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](10, "fs-error", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](11, CsvProcessComponent_div_11_Template, 4, 1, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](12, "async");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", !_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](1, 6, ctx.s.processButtonEnabled$));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", !_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](6, 8, ctx.s.saveButtonEnabled$));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("error$", ctx.errorKey$)("errorTypes", ctx.errorTypes)("tableData$", ctx.errorData$);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](12, 10, ctx.s.isResultReady$));
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIcon"], _fireflysemantics_material__WEBPACK_IMPORTED_MODULE_10__["ErrorsComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _fireflysemantics_material__WEBPACK_IMPORTED_MODULE_10__["DataTableComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_11__["AsyncPipe"]], styles: ["mat-icon[_ngcontent-%COMP%] {\n  margin-right: 1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2Nzdi1wcm9jZXNzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7QUFDRiIsImZpbGUiOiJjc3YtcHJvY2Vzcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC1pY29uIHtcbiAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xufVxuIl19 */"] });
CsvProcessComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_2__["UntilDestroy"])()
], CsvProcessComponent);



/***/ }),

/***/ "vUMC":
/*!*****************************************!*\
  !*** ./src/app/services/csv.service.ts ***!
  \*****************************************/
/*! exports provided: CsvService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__webpack__worker__0) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CsvService", function() { return CsvService; });
/* harmony import */ var _fireflysemantics_csv__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fireflysemantics/csv */ "J/Kp");
/* harmony import */ var _fireflysemantics_cdk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fireflysemantics/cdk */ "sqjU");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models */ "VHTt");
/* harmony import */ var nanoid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! nanoid */ "4b23");
/* harmony import */ var _fireflysemantics_collections__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fireflysemantics/collections */ "iq7m");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_state_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/state.service */ "ndxW");







//=====================================
//Test parser errors locally
//=====================================
//import { parserError } from 'CSV-TEST-FILES/test-errors';
class CsvService {
    constructor(s) {
        this.s = s;
        this.csvDataMap = new Map();
    }
    saveCSV() {
        const fileName = `csv-${Object(nanoid__WEBPACK_IMPORTED_MODULE_3__["nanoid"])()}.csv`;
        const result = this.s.OS.snapshot(this.s.OS.S.PROCESS_RESULT);
        Object(_fireflysemantics_csv__WEBPACK_IMPORTED_MODULE_0__["save"])(fileName, result.rows);
    }
    loadCSV(csvFile) {
        const index = csvFile.meta.index;
        const worker = new Worker(__webpack__worker__0, undefined);
        let parseResult;
        //====================================
        // Reset the error state
        // by emitting null
        //====================================
        this.s.resetErrorState();
        worker.postMessage(csvFile.data);
        worker.onmessage = ({ data }) => {
            parseResult = data;
            const parseErrors = data.errors;
            //====================================
            // Check for parser errors
            //====================================
            if (parseErrors.length) {
                //====================================
                // Set the index to null in case
                // we have already loaded data 
                // successfully
                //====================================
                this.csvDataMap.set(index, null);
                //====================================
                // Emit the datamap so that we 
                // can reset the table in case 
                // there's something in it.
                //====================================
                this.s.OS.put(this.s.OS.S.CSV_DATA_MAP, this.csvDataMap);
                const IME = new _models__WEBPACK_IMPORTED_MODULE_2__["IndexedMetaError"]();
                IME.type = _models__WEBPACK_IMPORTED_MODULE_2__["ERROR_TYPE_KEYS"].PARSER_ERROR;
                IME.tableData.rows = parseErrors;
                IME.tableData.headers = _fireflysemantics_csv__WEBPACK_IMPORTED_MODULE_0__["CSV_PARSE_ERROR_COLUMNS"];
                this.s.OS.put(this.s.OS.S.LOAD_AND_PROCESSING_ERRORS, IME);
                return data;
            }
            const headers = data.meta.fields;
            const csvHeaderMetaRows = [];
            headers.forEach(h => {
                csvHeaderMetaRows.push(new _models__WEBPACK_IMPORTED_MODULE_2__["CsvHeaderMetaRow"](h));
            });
            csvFile.rowCount = data.data.length;
            //====================================
            // Trim string values
            //====================================
            data.data.forEach((entity) => {
                Object(_fireflysemantics_collections__WEBPACK_IMPORTED_MODULE_4__["trimObjectValues"])(entity);
            });
            const csvData = new _models__WEBPACK_IMPORTED_MODULE_2__["CsvSelectionData"](csvFile, csvHeaderMetaRows, new _fireflysemantics_cdk__WEBPACK_IMPORTED_MODULE_1__["TableData"](data.data, headers));
            this.csvDataMap.set(index, csvData);
            this.s.resetErrorState();
            this.s.OS.put(this.s.OS.S.CSV_DATA_MAP, this.csvDataMap);
        };
        return parseResult;
    }
}
CsvService.ɵfac = function CsvService_Factory(t) { return new (t || CsvService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_services_state_service__WEBPACK_IMPORTED_MODULE_6__["StateService"])); };
CsvService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: CsvService, factory: CsvService.ɵfac, providedIn: 'root' });

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/worker-plugin/dist/loader.js?name=0!./csv.worker */ "Bs6f")))

/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: ROUTES, AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTES", function() { return ROUTES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/home/home.component */ "BuFo");
/* harmony import */ var _fireflysemantics_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fireflysemantics/constants */ "7C6b");
/* harmony import */ var _components_application_application_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/application/application.component */ "Xxz2");
/* harmony import */ var _fireflysemantics_amplify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fireflysemantics/amplify */ "GzBa");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/login/login.component */ "W3Zi");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");








const ROUTES = {
    HOME: '',
    APPLICATION: _fireflysemantics_constants__WEBPACK_IMPORTED_MODULE_2__["APPLICATION_NAVIGATION"].APPLICATION.path,
    LOGIN: _fireflysemantics_constants__WEBPACK_IMPORTED_MODULE_2__["APPLICATION_NAVIGATION"].LOGIN.path,
    FAQ: _fireflysemantics_constants__WEBPACK_IMPORTED_MODULE_2__["APPLICATION_NAVIGATION"].FAQ.path,
    SUPPORT: _fireflysemantics_constants__WEBPACK_IMPORTED_MODULE_2__["APPLICATION_NAVIGATION"].SUPPORT.path
};
const routes = [
    { path: ROUTES.HOME, component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"] },
    { path: ROUTES.APPLICATION,
        component: _components_application_application_component__WEBPACK_IMPORTED_MODULE_3__["ApplicationComponent"],
        canActivate: [_fireflysemantics_amplify__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]] },
    { path: ROUTES.LOGIN, component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"] },
    { path: ROUTES.FAQ, component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"] },
    { path: ROUTES.SUPPORT, component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"] },
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "yFkK":
/*!*********************************!*\
  !*** ./src/app/models/error.ts ***!
  \*********************************/
/*! exports provided: ERROR_TYPES, ERROR_TYPE_KEYS, FILE_ROW_KEY_ERROR_COLUMNS, FileRowKeyError, FILE_ROW_DUPLICATES_ERROR_COLUMNS, FileRowDuplicatesError, IndexedMetaError, MISSING_KEY_HEADER_ERROR_COLUMNS, MissingKeyHeaderError, DUPLICATE_SELECTED_HEADER_ERROR_COLUMNS, DuplicateSelectedHeaderError, MISSING_OBJECT_ERROR_COLUMNS, MissingObject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ERROR_TYPES", function() { return ERROR_TYPES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ERROR_TYPE_KEYS", function() { return ERROR_TYPE_KEYS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FILE_ROW_KEY_ERROR_COLUMNS", function() { return FILE_ROW_KEY_ERROR_COLUMNS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileRowKeyError", function() { return FileRowKeyError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FILE_ROW_DUPLICATES_ERROR_COLUMNS", function() { return FILE_ROW_DUPLICATES_ERROR_COLUMNS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileRowDuplicatesError", function() { return FileRowDuplicatesError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexedMetaError", function() { return IndexedMetaError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MISSING_KEY_HEADER_ERROR_COLUMNS", function() { return MISSING_KEY_HEADER_ERROR_COLUMNS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MissingKeyHeaderError", function() { return MissingKeyHeaderError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DUPLICATE_SELECTED_HEADER_ERROR_COLUMNS", function() { return DUPLICATE_SELECTED_HEADER_ERROR_COLUMNS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DuplicateSelectedHeaderError", function() { return DuplicateSelectedHeaderError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MISSING_OBJECT_ERROR_COLUMNS", function() { return MISSING_OBJECT_ERROR_COLUMNS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MissingObject", function() { return MissingObject; });
/* harmony import */ var _fireflysemantics_error__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fireflysemantics/error */ "avuZ");
/* harmony import */ var _fireflysemantics_cdk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fireflysemantics/cdk */ "sqjU");


const ERROR_TYPES = {
    PARSER_ERROR: 'Parser Error',
    UNMATCHED_KEY_HEADER_ERROR: "Unmatched Key Header Error",
    DUPLICATE_SELECTED_HEADER_ERROR: "Duplicate Selected Header Error",
    UNDEFINED_KEY_VALUE_ERROR: "Undefined Key Value Error",
    DUPLICATE_KEY_ERROR: "Duplicate Key Error",
    DUPLICATES_ERROR: "Duplicate Row Error",
    REFERENTIAL_INTEGRITY_ERROR: "Referential Integrity Error",
    DATA_ERROR: "Data Error"
};
/**
 * Enumerated list of validation errors that can occur.
 *
 * PARSER_ERROR: Captures parser errors
 *
 * UNMATCHED_KEY_HEADER_ERROR: The CSV file is missing one or more key headers
 *
 * DUPLICATE_SELECTED_HEADER_ERROR: The headers selected have to be unique across the dataset
 *
 * DUPLICATES_ERROR: Whether there are duplicates in the record set
 *
 * UNDEFINED_KEY_VALUE_ERROR: All the keys have to be defined
 *
 * REFERENTIAL_INTEGRITY_ERROR: An object match could not be made
 *
 * DATA_ERROR
 */
const ERROR_TYPE_KEYS = {
    PARSER_ERROR: "PARSER_ERROR",
    UNMATCHED_KEY_HEADER_ERROR: "UNMATCHED_KEY_HEADER_ERROR",
    DUPLICATE_SELECTED_HEADER_ERROR: "DUPLICATE_SELECTED_HEADER_ERROR",
    UNDEFINED_KEY_VALUE_ERROR: "UNDEFINED_KEY_VALUE_ERROR",
    DUPLICATE_KEY_ERROR: "DUPLICATE_KEY_ERROR",
    DUPLICATES_ERROR: "DUPLICATES_ERROR",
    REFERENTIAL_INTEGRITY_ERROR: "REFERENTIAL_INTEGRITY_ERROR",
    DATA_ERROR: "DATA_ERROR"
};
/**
 * The columns for `FileRowKeyError` entities.
 */
const FILE_ROW_KEY_ERROR_COLUMNS = ['FILE_NAME', 'FIELD', 'ROW'];
/**
 * Instances of this class are created when
 * the column value used as a key
 * has empty strings ('', '    '), is `null`, or is `undefined`.
 */
class FileRowKeyError extends _fireflysemantics_error__WEBPACK_IMPORTED_MODULE_0__["RowKeyError"] {
    /**
     *
     * @param FIELD The property used as the key
     * @param ROW The entity row formatted as a string
     * @param FILE_NAME The name of the file containing the row with the key error
     * @example
     * [{ FILE_NAME: 'data.csv', FIELD: 'the_primary_key', ROW: '[the_primary_key = null'][name = joe]'}
     */
    constructor(FIELD, ROW, FILE_NAME) {
        super(FIELD, ROW);
        this.FIELD = FIELD;
        this.ROW = ROW;
        this.FILE_NAME = FILE_NAME;
    }
}
/**
 * If a row is a duplicate of another then this error captures
 * that.
 */
const FILE_ROW_DUPLICATES_ERROR_COLUMNS = ['FILE_NAME', 'ROW'];
class FileRowDuplicatesError {
    constructor(ROW, FILE_NAME) {
        this.ROW = ROW;
        this.FILE_NAME = FILE_NAME;
    }
}
/**
 * Container of the errors of a certain type from all the tables.
 */
class IndexedMetaError {
    constructor() {
        this.indexedMeta = new Map();
        this.indexErrors = new Map();
        this.tableData = new _fireflysemantics_cdk__WEBPACK_IMPORTED_MODULE_1__["TableData"]();
    }
}
/**
 * In order to check for missing column keys
 * in tables, we first produce a global set
 * from all the checked keys.
 *
 * Then we check if each table has them all.
 *
 * If a table is missing a key, this error will reflect hat.
 */
const MISSING_KEY_HEADER_ERROR_COLUMNS = ['FILE_NAME', 'HEADER'];
class MissingKeyHeaderError {
    constructor(FILE_NAME, HEADER) {
        this.FILE_NAME = FILE_NAME;
        this.HEADER = HEADER;
    }
}
const DUPLICATE_SELECTED_HEADER_ERROR_COLUMNS = ['FILE_NAME', 'HEADER'];
/**
 * If the user has selected two columns with the same header value.
 */
class DuplicateSelectedHeaderError {
    constructor(FILE_NAME, HEADER) {
        this.FILE_NAME = FILE_NAME;
        this.HEADER = HEADER;
    }
}
/**
 * We produce a global set of entity keys that spans all tables.
 *
 * The we check if each table has an object that matches
 * the key.  If a table is missing the object, this error
 * capture that.
 */
const MISSING_OBJECT_ERROR_COLUMNS = ['FILE_NAME', 'KEY'];
class MissingObject {
    constructor(KEY, FILE_NAME) {
        this.KEY = KEY;
        this.FILE_NAME = FILE_NAME;
    }
}


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @aws-amplify/auth */ "AO/9");
/* harmony import */ var _aws_exports__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./aws-exports */ "rzrB");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


_aws_amplify_auth__WEBPACK_IMPORTED_MODULE_4__["default"].configure(_aws_exports__WEBPACK_IMPORTED_MODULE_5__["default"]);


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ }),

/***/ "zuPC":
/*!***********************************************************!*\
  !*** ./src/app/services/process/processMultipleTables.ts ***!
  \***********************************************************/
/*! exports provided: processMultipleTables */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "processMultipleTables", function() { return processMultipleTables; });
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models */ "VHTt");

function processMultipleTables(dataMap, s, v) {
    const keyHeader = s.keySnapshot();
    if (!v.validate(v.multiTableValidators, dataMap, s.OS.S.LOAD_AND_PROCESSING_ERRORS)) {
        return false;
    }
    //========================================
    // No errors so reset error state
    //========================================
    s.resetErrorState();
    //========================================
    // Index and map all the CsvSelectionData
    // instances.
    //========================================
    dataMap.forEach(CSV => {
        CSV.indexAndMapData(keyHeader);
    });
    //========================================
    // Perform the Assembly
    //========================================
    const CSDAC = new _models__WEBPACK_IMPORTED_MODULE_0__["CsvSelectionDataAssemblyContainer"](dataMap);
    //========================================
    // Initialize the sticky headers
    //========================================
    CSDAC.assembly.stickyHeaders =
        [keyHeader];
    if (CSDAC.hasAssemblyHeaders()) {
        s.OS.put(s.OS.S.PROCESS_RESULT, CSDAC.assembly);
    }
    return true;
}


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map