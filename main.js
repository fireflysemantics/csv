(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/worker-plugin/dist/loader.js?name=0!./src/app/shared/csv.worker.ts":
/*!*****************************************************************************************!*\
  !*** ./node_modules/worker-plugin/dist/loader.js?name=0!./src/app/shared/csv.worker.ts ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "0.worker.js"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_asset_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/asset.service */ "./src/app/shared/asset.service.ts");
/* harmony import */ var _shared_state_play_state_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/state/play.state.service */ "./src/app/shared/state/play.state.service.ts");
/* harmony import */ var _shared_state_router_state_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/state/router.state.service */ "./src/app/shared/state/router.state.service.ts");
/* harmony import */ var _components_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/toolbar/toolbar.component */ "./src/app/components/toolbar/toolbar.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");








const _c0 = function (a0) { return { "CenterContent": a0 }; };
class AppComponent {
    constructor(a, p, rss) {
        this.a = a;
        this.rss = rss;
        this.title = 'csv';
        //    rss.applicationShowing$.subscribe(v=>console.log("IS IT SHOWING: ", v))
        //  rss.applicationNotShowing$.subscribe(v=>console.log("IS IT NOT SHOWING: ", v))
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_asset_service__WEBPACK_IMPORTED_MODULE_1__["AssetService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_state_play_state_service__WEBPACK_IMPORTED_MODULE_2__["PlayService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_state_router_state_service__WEBPACK_IMPORTED_MODULE_3__["RouterStateService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 4, vars: 5, consts: [[2, "margin", "2rem", 3, "ngClass"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-toolbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "main", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, ctx.rss.applicationNotShowing$)));
    } }, directives: [_components_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_4__["ToolbarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterOutlet"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["AsyncPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], function () { return [{ type: _shared_asset_service__WEBPACK_IMPORTED_MODULE_1__["AssetService"] }, { type: _shared_state_play_state_service__WEBPACK_IMPORTED_MODULE_2__["PlayService"] }, { type: _shared_state_router_state_service__WEBPACK_IMPORTED_MODULE_3__["RouterStateService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _shared_material_modules__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/material.modules */ "./src/app/shared/material.modules.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _components_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/toolbar/toolbar.component */ "./src/app/components/toolbar/toolbar.component.ts");
/* harmony import */ var _components_toolbar_toolbar_menu_toolbar_menu_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/toolbar/toolbar-menu/toolbar-menu.component */ "./src/app/components/toolbar/toolbar-menu/toolbar-menu.component.ts");
/* harmony import */ var _components_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/welcome/welcome.component */ "./src/app/components/welcome/welcome.component.ts");
/* harmony import */ var _components_application_application_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/application/application.component */ "./src/app/components/application/application.component.ts");
/* harmony import */ var _components_csv_header_selection_csv_header_table_csv_header_table_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/csv-header-selection/csv-header-table/csv-header-table.component */ "./src/app/components/csv-header-selection/csv-header-table/csv-header-table.component.ts");
/* harmony import */ var _components_csv_header_selection_csv_load_csv_load_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/csv-header-selection/csv-load/csv-load.component */ "./src/app/components/csv-header-selection/csv-load/csv-load.component.ts");
/* harmony import */ var _components_csv_header_selection_csv_header_selection_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/csv-header-selection/csv-header-selection.component */ "./src/app/components/csv-header-selection/csv-header-selection.component.ts");
/* harmony import */ var _components_csv_process_csv_process_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/csv-process/csv-process.component */ "./src/app/components/csv-process/csv-process.component.ts");
/* harmony import */ var _components_csv_errors_csv_errors_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/csv-errors/csv-errors.component */ "./src/app/components/csv-errors/csv-errors.component.ts");
/* harmony import */ var _components_data_table_data_table_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/data-table/data-table.component */ "./src/app/components/data-table/data-table.component.ts");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/drag-drop.js");
/* harmony import */ var _shared_auth_guard__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./shared/auth.guard */ "./src/app/shared/auth.guard.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_faq_faq_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/faq/faq.component */ "./src/app/components/faq/faq.component.ts");
/* harmony import */ var _components_support_support_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/support/support.component */ "./src/app/components/support/support.component.ts");
/* harmony import */ var _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @scullyio/ng-lib */ "./node_modules/@scullyio/ng-lib/__ivy_ngcc__/fesm2015/scullyio-ng-lib.js");


























const routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'welcome'
    },
    {
        path: 'welcome',
        component: _components_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_10__["WelcomeComponent"]
    },
    {
        path: 'application',
        component: _components_application_application_component__WEBPACK_IMPORTED_MODULE_11__["ApplicationComponent"],
        canActivate: [_shared_auth_guard__WEBPACK_IMPORTED_MODULE_19__["AuthGuard"]]
    },
    {
        path: 'login',
        component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_20__["LoginComponent"]
    },
    {
        path: 'faq',
        component: _components_faq_faq_component__WEBPACK_IMPORTED_MODULE_21__["FaqComponent"]
    },
    {
        path: 'support',
        component: _components_support_support_component__WEBPACK_IMPORTED_MODULE_22__["SupportComponent"]
    },
    {
        path: '**', redirectTo: 'welcome'
    }
];
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"].forRoot(routes),
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
            _shared_material_modules__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_18__["DragDropModule"],
            _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_23__["ScullyLibModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_components_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_10__["WelcomeComponent"],
        _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _components_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_8__["ToolbarComponent"],
        _components_toolbar_toolbar_menu_toolbar_menu_component__WEBPACK_IMPORTED_MODULE_9__["ToolbarMenuComponent"],
        _components_application_application_component__WEBPACK_IMPORTED_MODULE_11__["ApplicationComponent"],
        _components_csv_header_selection_csv_header_table_csv_header_table_component__WEBPACK_IMPORTED_MODULE_12__["CsvHeaderTableComponent"],
        _components_csv_header_selection_csv_load_csv_load_component__WEBPACK_IMPORTED_MODULE_13__["CsvLoadComponent"],
        _components_csv_header_selection_csv_header_selection_component__WEBPACK_IMPORTED_MODULE_14__["CsvHeaderSelectionComponent"],
        _components_csv_process_csv_process_component__WEBPACK_IMPORTED_MODULE_15__["CsvProcessComponent"],
        _components_csv_errors_csv_errors_component__WEBPACK_IMPORTED_MODULE_16__["CsvErrorsComponent"],
        _components_data_table_data_table_component__WEBPACK_IMPORTED_MODULE_17__["DataTableComponent"],
        _components_login_login_component__WEBPACK_IMPORTED_MODULE_20__["LoginComponent"],
        _components_support_support_component__WEBPACK_IMPORTED_MODULE_22__["SupportComponent"]], imports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
        _shared_material_modules__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
        _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_18__["DragDropModule"],
        _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_23__["ScullyLibModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _components_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_10__["WelcomeComponent"],
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                    _components_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_8__["ToolbarComponent"],
                    _components_toolbar_toolbar_menu_toolbar_menu_component__WEBPACK_IMPORTED_MODULE_9__["ToolbarMenuComponent"],
                    _components_application_application_component__WEBPACK_IMPORTED_MODULE_11__["ApplicationComponent"],
                    _components_csv_header_selection_csv_header_table_csv_header_table_component__WEBPACK_IMPORTED_MODULE_12__["CsvHeaderTableComponent"],
                    _components_csv_header_selection_csv_load_csv_load_component__WEBPACK_IMPORTED_MODULE_13__["CsvLoadComponent"],
                    _components_csv_header_selection_csv_header_selection_component__WEBPACK_IMPORTED_MODULE_14__["CsvHeaderSelectionComponent"],
                    _components_csv_process_csv_process_component__WEBPACK_IMPORTED_MODULE_15__["CsvProcessComponent"],
                    _components_csv_errors_csv_errors_component__WEBPACK_IMPORTED_MODULE_16__["CsvErrorsComponent"],
                    _components_data_table_data_table_component__WEBPACK_IMPORTED_MODULE_17__["DataTableComponent"],
                    _components_login_login_component__WEBPACK_IMPORTED_MODULE_20__["LoginComponent"],
                    _components_support_support_component__WEBPACK_IMPORTED_MODULE_22__["SupportComponent"]
                ],
                imports: [
                    _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"].forRoot(routes),
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                    _shared_material_modules__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                    _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_18__["DragDropModule"],
                    _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_23__["ScullyLibModule"]
                ],
                entryComponents: [_components_csv_header_selection_csv_header_selection_component__WEBPACK_IMPORTED_MODULE_14__["CsvHeaderSelectionComponent"]],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/components/application/application.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/application/application.component.ts ***!
  \*****************************************************************/
/*! exports provided: ApplicationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplicationComponent", function() { return ApplicationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_component_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/component-data.service */ "./src/app/shared/component-data.service.ts");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _csv_process_csv_process_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../csv-process/csv-process.component */ "./src/app/components/csv-process/csv-process.component.ts");






const _c0 = ["vcr"];
class ApplicationComponent {
    constructor(cds) {
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
    ngOnInit() {
    }
    clearContainer() {
        this.VCR.clear();
    }
}
ApplicationComponent.ɵfac = function ApplicationComponent_Factory(t) { return new (t || ApplicationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_component_data_service__WEBPACK_IMPORTED_MODULE_1__["ComponentDataService"])); };
ApplicationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ApplicationComponent, selectors: [["app-application"]], viewQuery: function ApplicationComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]);
    } if (rf & 2) {
        var _t;
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
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIcon"], _csv_process_csv_process_component__WEBPACK_IMPORTED_MODULE_4__["CsvProcessComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYXBwbGljYXRpb24vYXBwbGljYXRpb24uY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ApplicationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-application',
                templateUrl: './application.component.html',
                styleUrls: ['./application.component.scss']
            }]
    }], function () { return [{ type: _shared_component_data_service__WEBPACK_IMPORTED_MODULE_1__["ComponentDataService"] }]; }, { VCR: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ["vcr", { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] }]
        }] }); })();


/***/ }),

/***/ "./src/app/components/csv-errors/csv-errors.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/csv-errors/csv-errors.component.ts ***!
  \***************************************************************/
/*! exports provided: CsvErrorsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CsvErrorsComponent", function() { return CsvErrorsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngneat/until-destroy */ "./node_modules/@ngneat/until-destroy/__ivy_ngcc__/fesm2015/ngneat-until-destroy.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var src_app_shared_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/model */ "./src/app/shared/model/index.ts");
/* harmony import */ var _shared_state___WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/state/ */ "./src/app/shared/state/index.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _data_table_data_table_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../data-table/data-table.component */ "./src/app/components/data-table/data-table.component.ts");









function CsvErrorsComponent_div_0_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Parser Errors");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "app-data-table", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("tableData$", ctx_r1.tableData$);
} }
function CsvErrorsComponent_div_0_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Unmatched Key Header Errors");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "app-data-table", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("tableData$", ctx_r2.tableData$);
} }
function CsvErrorsComponent_div_0_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Duplicate Header Selection Errors");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "app-data-table", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("tableData$", ctx_r3.tableData$);
} }
function CsvErrorsComponent_div_0_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Invalid Key Errors");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "app-data-table", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("tableData$", ctx_r4.tableData$);
} }
function CsvErrorsComponent_div_0_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Duplicate Record Errors");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "app-data-table", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("tableData$", ctx_r5.tableData$);
} }
function CsvErrorsComponent_div_0_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Referential Integrity Errors");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "app-data-table", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("tableData$", ctx_r6.tableData$);
} }
function CsvErrorsComponent_div_0_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Data Errors");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "app-data-table", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("tableData$", ctx_r7.tableData$);
} }
function CsvErrorsComponent_div_0_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div");
} }
function CsvErrorsComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, CsvErrorsComponent_div_0_div_2_Template, 4, 1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, CsvErrorsComponent_div_0_div_3_Template, 4, 1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, CsvErrorsComponent_div_0_div_4_Template, 4, 1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, CsvErrorsComponent_div_0_div_5_Template, 4, 1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, CsvErrorsComponent_div_0_div_6_Template, 4, 1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, CsvErrorsComponent_div_0_div_7_Template, 4, 1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, CsvErrorsComponent_div_0_div_8_Template, 4, 1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, CsvErrorsComponent_div_0_div_9_Template, 1, 0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitch", ctx_r0.LOAD_AND_PROCESSING_ERROR);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", ctx_r0.ERROR_TYPE_ENUM.PARSER_ERROR);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", ctx_r0.ERROR_TYPE_ENUM.KEY_HEADER_ERROR);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", ctx_r0.ERROR_TYPE_ENUM.SELECTED_HEADER_ERROR);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", ctx_r0.ERROR_TYPE_ENUM.UNDEFINED_KEY_VALUE_ERROR);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", ctx_r0.ERROR_TYPE_ENUM.DUPLICATES_ERROR);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", ctx_r0.ERROR_TYPE_ENUM.REFERENTIAL_INTEGRITY_ERROR);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", ctx_r0.ERROR_TYPE_ENUM.DATA_ERROR);
} }
let CsvErrorsComponent = class CsvErrorsComponent {
    constructor(s) {
        this.s = s;
        //==========================
        // Template ENUM Access
        //==========================
        this.ERROR_TYPE_ENUM = src_app_shared_model__WEBPACK_IMPORTED_MODULE_4__["ERROR_TYPE_ENUM"];
        //==========================
        // The enum retrie ed from 
        // the IndexedMetaError 
        //==========================
        this.HAS_LOAD_AND_PROCESSING_ERROR_OCCURRED = false;
    }
    ngOnInit() { }
    ngAfterViewInit() {
        this.s.os.S.LOAD_AND_PROCESSING_ERRORS.obs.pipe(Object(_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_2__["untilDestroyed"])(this)).
            subscribe((IME) => {
            if (IME) {
                /**
                 * Note that we are not using
                 * derived state.  We were using
                 * !!LOAD_AND_PROCESSING_ERROR but
                 * LOAD_AND_PROCESSING_ERROR can be 0, and
                 * then that expression fails.
                 */
                this.HAS_LOAD_AND_PROCESSING_ERROR_OCCURRED = !isNaN(IME.type);
                this.LOAD_AND_PROCESSING_ERROR = IME.type;
                this.tableData$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(IME.tableData);
            }
            else {
                this.HAS_LOAD_AND_PROCESSING_ERROR_OCCURRED = false;
            }
        });
    }
};
CsvErrorsComponent.ɵfac = function CsvErrorsComponent_Factory(t) { return new (t || CsvErrorsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_state___WEBPACK_IMPORTED_MODULE_5__["StateService"])); };
CsvErrorsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CsvErrorsComponent, selectors: [["app-csv-errors"]], inputs: { tableData$: "tableData$" }, decls: 1, vars: 1, consts: [[4, "ngIf"], [3, "ngSwitch"], [4, "ngSwitchCase"], [4, "ngSwitchDefault"], [3, "tableData$"]], template: function CsvErrorsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, CsvErrorsComponent_div_0_Template, 10, 8, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.HAS_LOAD_AND_PROCESSING_ERROR_OCCURRED);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgSwitchDefault"], _data_table_data_table_component__WEBPACK_IMPORTED_MODULE_7__["DataTableComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY3N2LWVycm9ycy9jc3YtZXJyb3JzLmNvbXBvbmVudC5zY3NzIn0= */"] });
CsvErrorsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_2__["UntilDestroy"])()
], CsvErrorsComponent);

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CsvErrorsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-csv-errors',
                templateUrl: './csv-errors.component.html',
                styleUrls: ['./csv-errors.component.scss']
            }]
    }], function () { return [{ type: _shared_state___WEBPACK_IMPORTED_MODULE_5__["StateService"] }]; }, { tableData$: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/components/csv-header-selection/csv-header-selection.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/components/csv-header-selection/csv-header-selection.component.ts ***!
  \***********************************************************************************/
/*! exports provided: CsvHeaderSelectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CsvHeaderSelectionComponent", function() { return CsvHeaderSelectionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngneat/until-destroy */ "./node_modules/@ngneat/until-destroy/__ivy_ngcc__/fesm2015/ngneat-until-destroy.js");
/* harmony import */ var src_app_shared_state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/state */ "./src/app/shared/state/index.ts");
/* harmony import */ var _shared_component_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/component-data.service */ "./src/app/shared/component-data.service.ts");
/* harmony import */ var src_app_shared_csv_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/csv.service */ "./src/app/shared/csv.service.ts");
/* harmony import */ var _csv_load_csv_load_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./csv-load/csv-load.component */ "./src/app/components/csv-header-selection/csv-load/csv-load.component.ts");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _csv_header_table_csv_header_table_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./csv-header-table/csv-header-table.component */ "./src/app/components/csv-header-selection/csv-header-table/csv-header-table.component.ts");











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
        this.csvFileName = '';
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
        this.s.os.S.CSV_DATA.obs.pipe(Object(_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_2__["untilDestroyed"])(this)).
            subscribe((map) => {
            if (map && !isNaN(this.index)) {
                const csvData = map.get(this.index);
                if (csvData) {
                    this.csvFileName = csvData.meta.name;
                }
            }
        });
    }
    ngOnInit() {
        this.meta.index = this.index;
    }
    delete() {
        this.cds.destroyComponent(this.index);
    }
};
CsvHeaderSelectionComponent.ɵfac = function CsvHeaderSelectionComponent_Factory(t) { return new (t || CsvHeaderSelectionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_shared_state__WEBPACK_IMPORTED_MODULE_3__["StateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_component_data_service__WEBPACK_IMPORTED_MODULE_4__["ComponentDataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_shared_csv_service__WEBPACK_IMPORTED_MODULE_5__["CsvService"])); };
CsvHeaderSelectionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CsvHeaderSelectionComponent, selectors: [["app-csv-header-selection"]], inputs: { index: "index" }, decls: 9, vars: 4, consts: [[2, "padding", "1rem", "display", "flex", "align-items", "center", "justify-content", "space-between"], [3, "meta", "service"], ["mat-icon-button", "", "aria-label", "Delete CSV Column Selection Component", 3, "click"], [2, "color", "gray", "font-family", "'Courier New', Courier, monospace"], [3, "index"]], template: function CsvHeaderSelectionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "app-csv-load", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CsvHeaderSelectionComponent_Template_button_click_3_listener() { return ctx.delete(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "indeterminate_check_box");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "app-csv-header-table", 4);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("meta", ctx.meta)("service", ctx.csv);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.csvFileName, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("index", ctx.index);
    } }, directives: [_csv_load_csv_load_component__WEBPACK_IMPORTED_MODULE_6__["CsvLoadComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIcon"], _csv_header_table_csv_header_table_component__WEBPACK_IMPORTED_MODULE_9__["CsvHeaderTableComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY3N2LWhlYWRlci1zZWxlY3Rpb24vY3N2LWhlYWRlci1zZWxlY3Rpb24uY29tcG9uZW50LnNjc3MifQ== */"] });
CsvHeaderSelectionComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_2__["UntilDestroy"])()
], CsvHeaderSelectionComponent);

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CsvHeaderSelectionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-csv-header-selection',
                templateUrl: './csv-header-selection.component.html',
                styleUrls: ['./csv-header-selection.component.scss']
            }]
    }], function () { return [{ type: src_app_shared_state__WEBPACK_IMPORTED_MODULE_3__["StateService"] }, { type: _shared_component_data_service__WEBPACK_IMPORTED_MODULE_4__["ComponentDataService"] }, { type: src_app_shared_csv_service__WEBPACK_IMPORTED_MODULE_5__["CsvService"] }]; }, { index: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/components/csv-header-selection/csv-header-table/csv-header-table.component.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/components/csv-header-selection/csv-header-table/csv-header-table.component.ts ***!
  \************************************************************************************************/
/*! exports provided: CsvHeaderTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CsvHeaderTableComponent", function() { return CsvHeaderTableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/drag-drop.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/collections.js");
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngneat/until-destroy */ "./node_modules/@ngneat/until-destroy/__ivy_ngcc__/fesm2015/ngneat-until-destroy.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
/* harmony import */ var src_app_shared_state__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/state */ "./src/app/shared/state/index.ts");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sort.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
















function CsvHeaderTableComponent_mat_header_cell_3_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-header-cell", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-checkbox", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function CsvHeaderTableComponent_mat_header_cell_3_Template_mat_checkbox_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return $event && ctx_r8.masterToggle(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("checked", ctx_r0.selection.hasValue() && ctx_r0.isAllSelected())("indeterminate", ctx_r0.selection.hasValue() && !ctx_r0.isAllSelected());
} }
function CsvHeaderTableComponent_mat_cell_4_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-cell", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-checkbox", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CsvHeaderTableComponent_mat_cell_4_Template_mat_checkbox_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12); const row_r10 = ctx.$implicit; return row_r10.INCLUDE = $event; })("click", function CsvHeaderTableComponent_mat_cell_4_Template_mat_checkbox_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12); return $event.stopPropagation(); })("change", function CsvHeaderTableComponent_mat_cell_4_Template_mat_checkbox_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12); const row_r10 = ctx.$implicit; const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return $event && ctx_r14.selection.toggle(row_r10); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r10 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", row_r10.INCLUDE)("checked", ctx_r1.selection.isSelected(row_r10));
} }
function CsvHeaderTableComponent_mat_header_cell_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-header-cell", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r2.HEADER_COLUMN, " ");
} }
function CsvHeaderTableComponent_mat_cell_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-cell", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r15 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", row_r15[ctx_r3.HEADER_COLUMN], " ");
} }
function CsvHeaderTableComponent_mat_header_cell_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-header-cell", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r4.HEADER_KEY, " ");
} }
function CsvHeaderTableComponent_mat_cell_10_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-cell", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-checkbox", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CsvHeaderTableComponent_mat_cell_10_Template_mat_checkbox_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r18); const row_r16 = ctx.$implicit; return row_r16.KEY = $event; })("click", function CsvHeaderTableComponent_mat_cell_10_Template_mat_checkbox_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r18); return $event.stopPropagation(); })("change", function CsvHeaderTableComponent_mat_cell_10_Template_mat_checkbox_change_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r18); const row_r16 = ctx.$implicit; const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r20.checkboxToggleEvent(row_r16); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", row_r16.KEY)("checked", row_r16.KEY);
} }
function CsvHeaderTableComponent_mat_header_row_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "mat-header-row");
} }
function CsvHeaderTableComponent_mat_row_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "mat-row", 21);
} if (rf & 2) {
    const row_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("cdkDragData", row_r21);
} }
const _c0 = function () { return [5, 10, 15, 20]; };
let CsvHeaderTableComponent = class CsvHeaderTableComponent {
    constructor(s) {
        this.s = s;
        this.index = 0;
        this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_4__["SelectionModel"](true, []);
        this.HEADER_COLUMN = 'HEADER';
        this.HEADER_KEY = 'KEY';
        this.COLUMNS = ['SELECT', 'HEADER', 'KEY'];
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"]([]);
    }
    drop(event) {
        if (event.previousContainer === event.container) {
            Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["moveItemInArray"])(event.container.data, event.previousIndex, event.currentIndex);
            const map = this.s.os.snapshot(this.s.os.S.CSV_DATA);
            const csvData = map.get(this.index);
            csvData.rows = [...event.container.data];
            this.s.os.put(this.s.os.S.CSV_DATA, map);
            //============================
            //This is taken care of by emitting the data
            //============================
            //this.table.renderRows();
            //==============================
        }
        else {
            Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["transferArrayItem"])(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
        }
    }
    /** Whether the number of selected elements matches the total number of rows. */
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
    /**
     * Notifies whever theres is a checkbox toggle event.
     *
     * Sets the at AT_LEAST_ONE_KEY_IN_EACH_TABLE_SELECTED
     * state.
     *
     * @param row
     */
    checkboxToggleEvent(row) {
        this.s.os.put(this.s.os.S.KEY_HEADER_CHECKBOX_TOGGLE_EVENT, true);
    }
    ngOnInit() {
        this.s.os.S.CSV_DATA.obs.pipe(Object(_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__["untilDestroyed"])(this)).
            subscribe((map) => {
            if (map) {
                const CSD = map.get(this.index);
                if (CSD) {
                    const rows = CSD.rows;
                    this.dataSource.data = rows;
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
CsvHeaderTableComponent.ɵfac = function CsvHeaderTableComponent_Factory(t) { return new (t || CsvHeaderTableComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_shared_state__WEBPACK_IMPORTED_MODULE_7__["StateService"])); };
CsvHeaderTableComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CsvHeaderTableComponent, selectors: [["app-csv-header-table"]], viewQuery: function CsvHeaderTableComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTable"], true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_6__["MatPaginator"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.table = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
    } }, inputs: { index: "index" }, decls: 14, vars: 9, consts: [[2, "max-width", "40rem"], ["cdkDropList", "", "matSort", "", 1, "mat-elevation-z8", 2, "min-width", "22rem", 3, "dataSource", "cdkDropListData", "cdkDropListDropped"], ["matColumnDef", "SELECT"], ["mat-header-cell", "", "style", "justify-content: center; max-width: 6rem;", 4, "matHeaderCellDef"], ["mat-cell", "", "style", "justify-content: center; max-width: 6rem; ", 4, "matCellDef"], [3, "matColumnDef"], ["style", "max-width: 14rem;", "mat-sort-header", "", 4, "matHeaderCellDef"], ["style", "max-width: 14rem;", 4, "matCellDef"], ["style", "max-width: 2rem;", "mat-sort-header", "", 4, "matHeaderCellDef"], ["style", "max-width: 2rem;", 4, "matCellDef"], [4, "matHeaderRowDef"], ["cdkDrag", "", 3, "cdkDragData", 4, "matRowDef", "matRowDefColumns"], ["showFirstLastButtons", "", 3, "pageSizeOptions", "pageSize"], ["mat-header-cell", "", 2, "justify-content", "center", "max-width", "6rem"], [3, "checked", "indeterminate", "change"], ["mat-cell", "", 2, "justify-content", "center", "max-width", "6rem"], [3, "ngModel", "checked", "ngModelChange", "click", "change"], ["mat-sort-header", "", 2, "max-width", "14rem"], [2, "max-width", "14rem"], ["mat-sort-header", "", 2, "max-width", "2rem"], [2, "max-width", "2rem"], ["cdkDrag", "", 3, "cdkDragData"]], template: function CsvHeaderTableComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-table", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("cdkDropListDropped", function CsvHeaderTableComponent_Template_mat_table_cdkDropListDropped_1_listener($event) { return ctx.drop($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](2, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, CsvHeaderTableComponent_mat_header_cell_3_Template, 2, 2, "mat-header-cell", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, CsvHeaderTableComponent_mat_cell_4_Template, 2, 2, "mat-cell", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](5, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, CsvHeaderTableComponent_mat_header_cell_6_Template, 2, 1, "mat-header-cell", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, CsvHeaderTableComponent_mat_cell_7_Template, 2, 1, "mat-cell", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](8, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, CsvHeaderTableComponent_mat_header_cell_9_Template, 2, 1, "mat-header-cell", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, CsvHeaderTableComponent_mat_cell_10_Template, 2, 2, "mat-cell", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, CsvHeaderTableComponent_mat_header_row_11_Template, 1, 0, "mat-header-row", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, CsvHeaderTableComponent_mat_row_12_Template, 1, 1, "mat-row", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "mat-paginator", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dataSource", ctx.dataSource)("cdkDropListData", ctx.dataSource.data);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matColumnDef", ctx.HEADER_COLUMN);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matColumnDef", ctx.HEADER_KEY);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matHeaderRowDef", ctx.COLUMNS);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matRowDefColumns", ctx.COLUMNS);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](8, _c0))("pageSize", 5);
    } }, directives: [_angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTable"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["CdkDropList"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_8__["MatSort"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatRowDef"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_6__["MatPaginator"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderCell"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_9__["MatCheckbox"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatCell"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgModel"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_8__["MatSortHeader"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatRow"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["CdkDrag"]], styles: ["app-csv-header-selection[_ngcontent-%COMP%]:not(:first-of-type) {\n  margin-left: 2rem;\n}\n\n.CsvHeaderSelectionContainer[_ngcontent-%COMP%] {\n  display: flex;\n  overflow-x: auto;\n}\n\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.cdk-drag-preview[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  border-radius: 4px;\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n\n.cdk-drag-placeholder[_ngcontent-%COMP%] {\n  opacity: 0;\n}\n\n.cdk-drag-animating[_ngcontent-%COMP%] {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n.example-box[_ngcontent-%COMP%]:last-child {\n  border: none;\n}\n\n.example-list.cdk-drop-list-dragging[_ngcontent-%COMP%]   .example-box[_ngcontent-%COMP%]:not(.cdk-drag-placeholder) {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jc3YtaGVhZGVyLXNlbGVjdGlvbi9jc3YtaGVhZGVyLXRhYmxlL2Nzdi1oZWFkZXItdGFibGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUhBQUE7QUFFRjs7QUFFQTtFQUNFLFVBQUE7QUFDRjs7QUFFQTtFQUNFLHNEQUFBO0FBQ0Y7O0FBRUE7RUFDRSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSxzREFBQTtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jc3YtaGVhZGVyLXNlbGVjdGlvbi9jc3YtaGVhZGVyLXRhYmxlL2Nzdi1oZWFkZXItdGFibGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhcHAtY3N2LWhlYWRlci1zZWxlY3Rpb246bm90KDpmaXJzdC1vZi10eXBlKSB7XG4gIG1hcmdpbi1sZWZ0OiAycmVtO1xufVxuXG4uQ3N2SGVhZGVyU2VsZWN0aW9uQ29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgb3ZlcmZsb3cteDogYXV0bztcbn1cblxudGFibGUge1xuICB3aWR0aDogMTAwJTtcbn1cbi5jZGstZHJhZy1wcmV2aWV3IHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBib3gtc2hhZG93OiAwIDVweCA1cHggLTNweCByZ2JhKDAsIDAsIDAsIDAuMiksXG4gICAgMCA4cHggMTBweCAxcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCAzcHggMTRweCAycHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcbn1cblxuLmNkay1kcmFnLXBsYWNlaG9sZGVyIHtcbiAgb3BhY2l0eTogMDtcbn1cblxuLmNkay1kcmFnLWFuaW1hdGluZyB7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAyNTBtcyBjdWJpYy1iZXppZXIoMCwgMCwgMC4yLCAxKTtcbn1cblxuLmV4YW1wbGUtYm94Omxhc3QtY2hpbGQge1xuICBib3JkZXI6IG5vbmU7XG59XG5cbi5leGFtcGxlLWxpc3QuY2RrLWRyb3AtbGlzdC1kcmFnZ2luZyAuZXhhbXBsZS1ib3g6bm90KC5jZGstZHJhZy1wbGFjZWhvbGRlcikge1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMjUwbXMgY3ViaWMtYmV6aWVyKDAsIDAsIDAuMiwgMSk7XG59XG4iXX0= */"] });
CsvHeaderTableComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__["UntilDestroy"])()
], CsvHeaderTableComponent);

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CsvHeaderTableComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-csv-header-table',
                templateUrl: './csv-header-table.component.html',
                styleUrls: ['./csv-header-table.component.scss']
            }]
    }], function () { return [{ type: src_app_shared_state__WEBPACK_IMPORTED_MODULE_7__["StateService"] }]; }, { table: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: [_angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTable"], { static: false }]
        }], paginator: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_6__["MatPaginator"], { static: false }]
        }], index: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/components/csv-header-selection/csv-load/csv-load.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/components/csv-header-selection/csv-load/csv-load.component.ts ***!
  \********************************************************************************/
/*! exports provided: CsvLoadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CsvLoadComponent", function() { return CsvLoadComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _fireflysemantics_csv__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fireflysemantics/csv */ "./node_modules/@fireflysemantics/csv/__ivy_ngcc__/fesm2015/fireflysemantics-csv.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");





class CsvLoadComponent {
    /**
     * The constructor checks to see if the browser
     * has file reader support before constructing a FileReader
     * instance.
     *
     * Consider adding an error state to the state manager
     * in the event that there is no support.
     */
    constructor() {
        this.meta = {};
        this.fileReader = new FileReader();
    }
    onFileChanged(event) {
        const file = event.target.files[0];
        const csvFile = new _fireflysemantics_csv__WEBPACK_IMPORTED_MODULE_1__["CsvFile"]();
        csvFile.meta = this.meta;
        csvFile.name = file.name;
        csvFile.size = file.size;
        this.fileReader.onload = (e) => {
            csvFile.data = this.fileReader.result.toString().trim();
            this.service.loadCSV(csvFile);
        };
        this.fileReader.readAsText(file);
    }
    ngOnInit() { }
}
CsvLoadComponent.ɵfac = function CsvLoadComponent_Factory(t) { return new (t || CsvLoadComponent)(); };
CsvLoadComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CsvLoadComponent, selectors: [["app-csv-load"]], inputs: { meta: "meta", service: "service" }, decls: 5, vars: 0, consts: [["mat-stroked-button", "", "color", "accent", 1, "FileButton", "Button", 2, "margin-bottom", "1rem"], [2, "margin-right", "1rem"], ["type", "file", "accept", ".csv", 3, "change"]], template: function CsvLoadComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "view_column");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " LOAD ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function CsvLoadComponent_Template_input_change_4_listener($event) { return ctx.onFileChanged($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIcon"]], styles: [".FileButton[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n}\n\n.FileButton[_ngcontent-%COMP%]   input[type=file][_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  right: 0;\n  min-width: 100%;\n  min-height: 100%;\n  font-size: 100px;\n  text-align: right;\n  filter: alpha(opacity=0);\n  opacity: 0;\n  outline: none;\n  background: white;\n  cursor: inherit;\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jc3YtaGVhZGVyLXNlbGVjdGlvbi9jc3YtbG9hZC9jc3YtbG9hZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFFBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esd0JBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY3N2LWhlYWRlci1zZWxlY3Rpb24vY3N2LWxvYWQvY3N2LWxvYWQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuRmlsZUJ1dHRvbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLkZpbGVCdXR0b24gaW5wdXRbdHlwZT1cImZpbGVcIl0ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIG1pbi13aWR0aDogMTAwJTtcbiAgbWluLWhlaWdodDogMTAwJTtcbiAgZm9udC1zaXplOiAxMDBweDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIGZpbHRlcjogYWxwaGEob3BhY2l0eT0wKTtcbiAgb3BhY2l0eTogMDtcbiAgb3V0bGluZTogbm9uZTtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGN1cnNvcjogaW5oZXJpdDtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4iXX0= */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CsvLoadComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-csv-load',
                templateUrl: './csv-load.component.html',
                styleUrls: ['./csv-load.component.scss'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
            }]
    }], function () { return []; }, { meta: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], service: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/components/csv-process/csv-process.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/csv-process/csv-process.component.ts ***!
  \*****************************************************************/
/*! exports provided: CsvProcessComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CsvProcessComponent", function() { return CsvProcessComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngneat/until-destroy */ "./node_modules/@ngneat/until-destroy/__ivy_ngcc__/fesm2015/ngneat-until-destroy.js");
/* harmony import */ var src_app_shared_state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/state */ "./src/app/shared/state/index.ts");
/* harmony import */ var _shared_process_data_process_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/process/data-process.service */ "./src/app/shared/process/data-process.service.ts");
/* harmony import */ var _shared_state_enabled_state_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/state/enabled.state.service */ "./src/app/shared/state/enabled.state.service.ts");
/* harmony import */ var src_app_shared_csv_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/csv.service */ "./src/app/shared/csv.service.ts");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _csv_errors_csv_errors_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../csv-errors/csv-errors.component */ "./src/app/components/csv-errors/csv-errors.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _data_table_data_table_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../data-table/data-table.component */ "./src/app/components/data-table/data-table.component.ts");













function CsvProcessComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Result");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "app-data-table", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("tableData$", ctx_r0.tableData$);
} }
let CsvProcessComponent = class CsvProcessComponent {
    constructor(s, c, e, a, csv) {
        this.s = s;
        this.c = c;
        this.e = e;
        this.a = a;
        this.csv = csv;
    }
    ngOnInit() {
        //this.a.isResultReady$.subscribe(v => console.log('result ready is', v))
        this.tableData$ = this.s.os.S.PROCESS_RESULT.obs;
    }
    ngAfterViewInit() { }
    process() {
        this.c.process();
    }
};
CsvProcessComponent.ɵfac = function CsvProcessComponent_Factory(t) { return new (t || CsvProcessComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_shared_state__WEBPACK_IMPORTED_MODULE_3__["StateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_process_data_process_service__WEBPACK_IMPORTED_MODULE_4__["DataProcessService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_state_enabled_state_service__WEBPACK_IMPORTED_MODULE_5__["EnabledStateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_shared_state__WEBPACK_IMPORTED_MODULE_3__["ActionStateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_shared_csv_service__WEBPACK_IMPORTED_MODULE_6__["CsvService"])); };
CsvProcessComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CsvProcessComponent, selectors: [["app-csv-composite"]], decls: 13, vars: 9, consts: [["mat-stroked-button", "", "color", "accent", 1, "FileButton", "Button", 2, "margin-bottom", "1rem", 3, "disabled", "click"], [2, "margin-right", "1rem"], ["mat-stroked-button", "", "color", "accent", 1, "Button", 3, "disabled", "click"], [4, "ngIf"], [3, "tableData$"]], template: function CsvProcessComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CsvProcessComponent_Template_button_click_0_listener() { return ctx.process(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-icon", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "api");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " PROCESS\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CsvProcessComponent_Template_button_click_5_listener() { return ctx.csv.save(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](6, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "mat-icon", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "save");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, " SAVE\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "app-csv-errors");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, CsvProcessComponent_div_11_Template, 4, 1, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](12, "async");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 3, ctx.e.processButtonEnabled$));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](6, 5, ctx.e.saveButtonEnabled$));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](12, 7, ctx.a.isResultReady$));
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIcon"], _csv_errors_csv_errors_component__WEBPACK_IMPORTED_MODULE_9__["CsvErrorsComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _data_table_data_table_component__WEBPACK_IMPORTED_MODULE_11__["DataTableComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["AsyncPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY3N2LXByb2Nlc3MvY3N2LXByb2Nlc3MuY29tcG9uZW50LnNjc3MifQ== */"] });
CsvProcessComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_2__["UntilDestroy"])()
], CsvProcessComponent);

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CsvProcessComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-csv-composite',
                templateUrl: './csv-process.component.html',
                styleUrls: ['./csv-process.component.scss']
            }]
    }], function () { return [{ type: src_app_shared_state__WEBPACK_IMPORTED_MODULE_3__["StateService"] }, { type: _shared_process_data_process_service__WEBPACK_IMPORTED_MODULE_4__["DataProcessService"] }, { type: _shared_state_enabled_state_service__WEBPACK_IMPORTED_MODULE_5__["EnabledStateService"] }, { type: src_app_shared_state__WEBPACK_IMPORTED_MODULE_3__["ActionStateService"] }, { type: src_app_shared_csv_service__WEBPACK_IMPORTED_MODULE_6__["CsvService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/data-table/data-table.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/data-table/data-table.component.ts ***!
  \***************************************************************/
/*! exports provided: DataTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataTableComponent", function() { return DataTableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngneat/until-destroy */ "./node_modules/@ngneat/until-destroy/__ivy_ngcc__/fesm2015/ngneat-until-destroy.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sort.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
/* harmony import */ var _fireflysemantics_cdk__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fireflysemantics/cdk */ "./node_modules/@fireflysemantics/cdk/__ivy_ngcc__/fesm2015/fireflysemantics-cdk.js");
/* harmony import */ var _shared_state_state_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/state/state.service */ "./src/app/shared/state/state.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

/**
 * Generic TableData component
 */












function DataTableComponent_ng_container_2_mat_header_cell_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-header-cell", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const c_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](c_r3.toUpperCase().split("_").join(" "));
} }
function DataTableComponent_ng_container_2_mat_cell_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r7 = ctx.$implicit;
    const c_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", row_r7[c_r3.toLowerCase()] ? row_r7[c_r3.toLowerCase()] : row_r7[c_r3.toUpperCase()], " ");
} }
function DataTableComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0, 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, DataTableComponent_ng_container_2_mat_header_cell_1_Template, 2, 1, "mat-header-cell", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, DataTableComponent_ng_container_2_mat_cell_2_Template, 2, 1, "mat-cell", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const c_r3 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("matColumnDef", c_r3.toUpperCase());
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("sticky", ctx_r0.isSticky(c_r3));
} }
function DataTableComponent_mat_header_row_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "mat-header-row");
} }
function DataTableComponent_mat_row_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "mat-row");
} }
let DataTableComponent = class DataTableComponent {
    constructor(s) {
        this.s = s;
        /**
         * This property contains the
         * default consideration settings
         * for the pager.  This allows the
         * table to render initially.
         */
        this.tableData = new _fireflysemantics_cdk__WEBPACK_IMPORTED_MODULE_6__["TableData"]();
        this.COLUMNS = [];
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"]([]);
    }
    ngOnInit() {
        this.tableData$.pipe(Object(_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_3__["untilDestroyed"])(this)).subscribe((td) => {
            if (td) {
                this.tableData = td;
                this.COLUMNS = td.headers;
                this.dataSource.data = td.rows;
            }
        });
    }
    ngAfterViewInit() {
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
    }
    isSticky(column) {
        return this.tableData.stickyHeaders.includes(column) ? true : false;
    }
};
DataTableComponent.ɵfac = function DataTableComponent_Factory(t) { return new (t || DataTableComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_state_state_service__WEBPACK_IMPORTED_MODULE_7__["StateService"])); };
DataTableComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: DataTableComponent, selectors: [["app-data-table"]], viewQuery: function DataTableComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_4__["MatSort"], true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_5__["MatPaginator"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
    } }, inputs: { tableData$: "tableData$" }, decls: 6, vars: 6, consts: [[1, "table-container"], ["matSort", "", 1, "mat-elevation-z8", 3, "dataSource"], [3, "matColumnDef", "sticky", 4, "ngFor", "ngForOf"], [4, "matHeaderRowDef"], [4, "matRowDef", "matRowDefColumns"], ["showFirstLastButtons", "", 3, "pageSizeOptions", "pageSize"], [3, "matColumnDef", "sticky"], ["mat-sort-header", "", 4, "matHeaderCellDef"], [4, "matCellDef"], ["mat-sort-header", ""]], template: function DataTableComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-table", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, DataTableComponent_ng_container_2_Template, 3, 2, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, DataTableComponent_mat_header_row_3_Template, 1, 0, "mat-header-row", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, DataTableComponent_mat_row_4_Template, 1, 0, "mat-row", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "mat-paginator", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.COLUMNS);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matHeaderRowDef", ctx.COLUMNS);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matRowDefColumns", ctx.COLUMNS);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("pageSizeOptions", ctx.tableData.pageSizeOptions)("pageSize", ctx.tableData.pageSizeDefault);
    } }, directives: [_angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTable"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_4__["MatSort"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatRowDef"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_5__["MatPaginator"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderCell"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_4__["MatSortHeader"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatRow"]], styles: [".mat-footer-row[_ngcontent-%COMP%], .mat-header-row[_ngcontent-%COMP%], .mat-row[_ngcontent-%COMP%] {\n  display: inline-flex;\n  min-width: 100%;\n}\n.table-container[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  overflow: auto;\n}\n.mat-header-cell[_ngcontent-%COMP%] {\n  justify-content: left;\n  white-space: nowrap;\n  min-width: 12rem;\n}\n.mat-cell[_ngcontent-%COMP%] {\n  justify-content: left;\n  white-space: nowrap;\n  min-width: 12rem;\n}\n.mat-table[_ngcontent-%COMP%] {\n  overflow-x: scroll;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9kYXRhLXRhYmxlL2RhdGEtdGFibGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsc0ZBQUE7QUFFQTs7O0VBR0ksb0JBQUE7RUFDQSxlQUFBO0FBQUo7QUFHQTtFQUNFLGNBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtBQUFGO0FBR0E7RUFDRSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUFBRjtBQUdBO0VBQ0UscUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FBQUY7QUFHQTtFQUNFLGtCQUFBO0FBQUYiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2RhdGEtdGFibGUvZGF0YS10YWJsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzUwODI0NjE3L2FuZ3VsYXItbWF0ZXJpYWwtdGFibGUtc2l6aW5nLXNjcm9sbCAqL1xuXG4ubWF0LWZvb3Rlci1yb3csXG4ubWF0LWhlYWRlci1yb3csXG4ubWF0LXJvdyB7XG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgbWluLXdpZHRoOiAxMDAlO1xufVxuXG4udGFibGUtY29udGFpbmVyIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBvdmVyZmxvdzogYXV0bztcbn1cblxuLm1hdC1oZWFkZXItY2VsbCB7XG4gIGp1c3RpZnktY29udGVudDogbGVmdDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgbWluLXdpZHRoOiAxMnJlbTtcbn1cblxuLm1hdC1jZWxsIHtcbiAganVzdGlmeS1jb250ZW50OiBsZWZ0O1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBtaW4td2lkdGg6IDEycmVtO1xufVxuXG4ubWF0LXRhYmxlIHtcbiAgb3ZlcmZsb3cteDogc2Nyb2xsO1xufSJdfQ== */"] });
DataTableComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_3__["UntilDestroy"])()
], DataTableComponent);

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DataTableComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-data-table',
                templateUrl: './data-table.component.html',
                styleUrls: ['./data-table.component.scss']
            }]
    }], function () { return [{ type: _shared_state_state_service__WEBPACK_IMPORTED_MODULE_7__["StateService"] }]; }, { tableData$: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], sort: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_4__["MatSort"], { static: false }]
        }], paginator: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_5__["MatPaginator"], { static: false }]
        }] }); })();


/***/ }),

/***/ "./src/app/components/faq/faq.component.ts":
/*!*************************************************!*\
  !*** ./src/app/components/faq/faq.component.ts ***!
  \*************************************************/
/*! exports provided: FaqComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FaqComponent", function() { return FaqComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class FaqComponent {
    constructor() { }
    ngOnInit() {
    }
}
FaqComponent.ɵfac = function FaqComponent_Factory(t) { return new (t || FaqComponent)(); };
FaqComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FaqComponent, selectors: [["app-faq"]], decls: 10, vars: 0, template: function FaqComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "FAQ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Is CVS file data transferred to your servers?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " None of the CSV file data used by the application transferred to our servers. The work is performed in the browser.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "How much does the service cost?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " We are currently offering the application and service for free.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".mat-list-base[_ngcontent-%COMP%]   .mat-list-item[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.75);\n}\n\nh2[_ngcontent-%COMP%] {\n  opacity: 0.7;\n  font-family: \"Libre Baskerville\", serif !important;\n}\n\np[_ngcontent-%COMP%] {\n  font-family: \"Cutive Mono\", monospace !important;\n  margin-bottom: 2.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mYXEvZmFxLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsMEJBQUE7QUFDRjs7QUFFQTtFQUNFLFlBQUE7RUFDQSxrREFBQTtBQUNGOztBQUVBO0VBQ0UsZ0RBQUE7RUFDQSxxQkFBQTtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9mYXEvZmFxLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdC1saXN0LWJhc2UgLm1hdC1saXN0LWl0ZW0ge1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjc1KTtcbn1cblxuaDIge1xuICBvcGFjaXR5OiAwLjc7XG4gIGZvbnQtZmFtaWx5OiBcIkxpYnJlIEJhc2tlcnZpbGxlXCIsIHNlcmlmICFpbXBvcnRhbnQ7XG59XG5cbnAge1xuICBmb250LWZhbWlseTogXCJDdXRpdmUgTW9ub1wiLCBtb25vc3BhY2UgIWltcG9ydGFudDtcbiAgbWFyZ2luLWJvdHRvbTogMi41cmVtO1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FaqComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-faq',
                templateUrl: './faq.component.html',
                styleUrls: ['./faq.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _fireflysemantics_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fireflysemantics/constants */ "./node_modules/@fireflysemantics/constants/__ivy_ngcc__/fesm2015/fireflysemantics-constants.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngneat/until-destroy */ "./node_modules/@ngneat/until-destroy/__ivy_ngcc__/fesm2015/ngneat-until-destroy.js");
/* harmony import */ var src_app_shared_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/data.service */ "./src/app/shared/data.service.ts");
/* harmony import */ var _shared_state___WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/state/ */ "./src/app/shared/state/index.ts");
/* harmony import */ var src_app_shared_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/auth.service */ "./src/app/shared/auth.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");














function LoginComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "mat-checkbox", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "p", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "I Have Reviewed and Agreed to the \u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Terms of Service");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "\u00A0 and \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Privacy Policy");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx_r0.tosControl);
} }
function LoginComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LoginComponent_div_4_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r2.login(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "mat-icon", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " \u00A0 \u00A0 Login With Google ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 2, ctx_r1.isTOSAccepted()));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("svgIcon", ctx_r1.SVG_CONSTANTS.GOOGLE_LOGO.name);
} }
let LoginComponent = class LoginComponent {
    constructor(ds, s, auth) {
        this.ds = ds;
        this.s = s;
        this.auth = auth;
        this.SVG_CONSTANTS = _fireflysemantics_constants__WEBPACK_IMPORTED_MODULE_2__["SVG"];
        this.tosControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](false);
        this.tosControl.
            valueChanges.pipe(Object(_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__["untilDestroyed"])(this)).
            subscribe((accepted) => {
            this.acceptTOS();
        });
    }
    /**Accept TOS And Track the Event with GA */
    acceptTOS() {
        this.ds.saveTermsOfServiceAccepted();
        this.s.os.put(this.s.os.S.IS_TERMS_OF_SERVICE_ACCEPTED, true);
    }
    isTOSAccepted() {
        return this.s.os.S.IS_TERMS_OF_SERVICE_ACCEPTED.obs;
    }
    login() {
        this.auth.signInWithGoogle();
    }
    isAuthenticated() {
        return this.s.os.S.IS_AUTHENTICATED.obs;
    }
    ngOnInit() { }
};
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_shared_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_state___WEBPACK_IMPORTED_MODULE_6__["StateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_shared_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 6, vars: 6, consts: [["style", "display: flex;", 4, "ngIf"], [4, "ngIf"], [2, "display", "flex"], [1, "TermsOfServiceCheckBox"], [3, "formControl"], [1, "u-font-cutive-mono"], ["color", "primary", "mat-stroked-button", "", "href", "https://legal.fireflysemantics.com/terms-of-service/", "target", "_blank"], ["color", "primary", "mat-stroked-button", "", "href", "https://legal.fireflysemantics.com/privacy-policy/", "target", "_blank"], ["mat-button", "", 2, "padding", "1rem", 3, "disabled", "click"], [1, "GoogleIcon", 3, "svgIcon"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "main");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, LoginComponent_div_1_Template, 12, 1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, LoginComponent_div_4_Template, 5, 4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 2, ctx.isTOSAccepted()));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](5, 4, ctx.isAuthenticated()));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_9__["MatCheckbox"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatAnchor"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIcon"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["AsyncPipe"]], styles: [".TermsOfServiceCheckBox[_ngcontent-%COMP%] {\n  padding: 2rem;\n  padding-left: 18px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLlRlcm1zT2ZTZXJ2aWNlQ2hlY2tCb3gge1xuICAgIHBhZGRpbmc6IDJyZW07XG4gICAgcGFkZGluZy1sZWZ0OiAxOHB4O1xuICAgIGRpc3BsYXk6ZmxleDsgXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn0iXX0= */"] });
LoginComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__["UntilDestroy"])()
], LoginComponent);

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.scss']
            }]
    }], function () { return [{ type: src_app_shared_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"] }, { type: _shared_state___WEBPACK_IMPORTED_MODULE_6__["StateService"] }, { type: src_app_shared_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/support/support.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/support/support.component.ts ***!
  \*********************************************************/
/*! exports provided: ISSUES_URL, SupportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ISSUES_URL", function() { return ISSUES_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SupportComponent", function() { return SupportComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");



const ISSUES_URL = 'https://github.com/fireflysemantics/csv-discussion/issues';
class SupportComponent {
    constructor() { }
    ngOnInit() {
    }
    issuesTab(e) {
        e.stopPropagation();
        window.open(ISSUES_URL, '_blank');
    }
}
SupportComponent.ɵfac = function SupportComponent_Factory(t) { return new (t || SupportComponent)(); };
SupportComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SupportComponent, selectors: [["app-support"]], decls: 7, vars: 0, consts: [[1, "u-font-cutive-mono"], ["mat-button", "", "color", "primary", 3, "click"]], template: function SupportComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Support");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " For questions or support please create an issue in our publicly viewable discussion ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SupportComponent_Template_button_click_4_listener($event) { return ctx.issuesTab($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Discussion");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Github Repository.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButton"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc3VwcG9ydC9zdXBwb3J0LmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SupportComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-support',
                templateUrl: './support.component.html',
                styleUrls: ['./support.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/toolbar/toolbar-menu/toolbar-menu.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/toolbar/toolbar-menu/toolbar-menu.component.ts ***!
  \***************************************************************************/
/*! exports provided: ToolbarMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolbarMenuComponent", function() { return ToolbarMenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/model */ "./src/app/shared/model/index.ts");
/* harmony import */ var _shared_state_state_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/state/state.service */ "./src/app/shared/state/state.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _shared_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/auth.service */ "./src/app/shared/auth.service.ts");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");










function ToolbarMenuComponent_button_8_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ToolbarMenuComponent_button_8_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.onMenuClick(ctx_r4.menuItems.LOGIN); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHtml", ctx_r1.menuItems.LOGIN, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
function ToolbarMenuComponent_button_10_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ToolbarMenuComponent_button_10_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.onMenuClick(ctx_r6.menuItems.LOGOUT); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHtml", ctx_r2.menuItems.LOGOUT, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
class ToolbarMenuComponent {
    constructor(s, r, auth) {
        this.s = s;
        this.r = r;
        this.auth = auth;
        this.menuItems = _shared_model__WEBPACK_IMPORTED_MODULE_1__["MenuItems"];
        this.ROUTES = _shared_model__WEBPACK_IMPORTED_MODULE_1__["ROUTES"];
    }
    isAuthenticated() {
        return this.s.os.S.IS_AUTHENTICATED.obs;
    }
    onMenuClick(menu) {
        switch (menu) {
            case _shared_model__WEBPACK_IMPORTED_MODULE_1__["MenuItems"].APPLICATION:
                this.r.navigate([_shared_model__WEBPACK_IMPORTED_MODULE_1__["ROUTES"].APPLICATION]);
                break;
            case _shared_model__WEBPACK_IMPORTED_MODULE_1__["MenuItems"].WELCOME:
                this.r.navigate([_shared_model__WEBPACK_IMPORTED_MODULE_1__["ROUTES"].WELCOME]);
                break;
            case _shared_model__WEBPACK_IMPORTED_MODULE_1__["MenuItems"].LOGIN:
                this.login();
                break;
            case _shared_model__WEBPACK_IMPORTED_MODULE_1__["MenuItems"].LOGOUT:
                this.logout();
                break;
        }
        //IN case anything else needs to react 
        //to the currently active menu.
        this.s.os.put(this.s.os.S.ACTIVE_MENU, menu);
    }
    login() {
        const isTermOfServiceAccepted = this.s.os.snapshot(this.s.os.S.IS_TERMS_OF_SERVICE_ACCEPTED);
        isTermOfServiceAccepted
            ?
                this.auth.signInWithGoogle()
            :
                this.r.navigate([_shared_model__WEBPACK_IMPORTED_MODULE_1__["ROUTES"].LOGIN]);
    }
    logout() {
        this.auth.signOut();
    }
    ngOnInit() {
    }
}
ToolbarMenuComponent.ɵfac = function ToolbarMenuComponent_Factory(t) { return new (t || ToolbarMenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_state_state_service__WEBPACK_IMPORTED_MODULE_2__["StateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"])); };
ToolbarMenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ToolbarMenuComponent, selectors: [["app-toolbar-menu"]], decls: 24, vars: 17, consts: [["mat-icon-button", "", 3, "matMenuTriggerFor"], ["menu", "matMenu"], ["mat-menu-item", "", 3, "disabled", "innerHtml", "click"], ["mat-menu-item", "", 3, "innerHtml", "click"], ["mat-menu-item", "", 3, "innerHtml", "click", 4, "ngIf"], ["mat-menu-item", "", 3, "routerLink", "innerHtml", "click"], ["mat-menu-item", "", 3, "matMenuTriggerFor"], ["policies", "matMenu"], ["href", "https://legal.fireflysemantics.com/privacy-policy/", "target", "_blank"], ["mat-menu-item", ""], ["href", "https://legal.fireflysemantics.com/terms-of-service/", "target", "_blank"]], template: function ToolbarMenuComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "more_vert");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-menu", null, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ToolbarMenuComponent_Template_button_click_5_listener() { return ctx.onMenuClick(ctx.menuItems.APPLICATION); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ToolbarMenuComponent_Template_button_click_7_listener() { return ctx.onMenuClick(ctx.menuItems.WELCOME); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ToolbarMenuComponent_button_8_Template, 1, 1, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ToolbarMenuComponent_button_10_Template, 1, 1, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ToolbarMenuComponent_Template_button_click_12_listener() { return ctx.onMenuClick(ctx.menuItems.FAQ); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ToolbarMenuComponent_Template_button_click_13_listener() { return ctx.onMenuClick(ctx.menuItems.SUPPORT); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Policies");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-menu", null, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Privacy Policy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Terms of Service");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 11, ctx.isAuthenticated()))("innerHtml", ctx.menuItems.APPLICATION, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHtml", ctx.menuItems.WELCOME, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 13, ctx.isAuthenticated()));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 15, ctx.isAuthenticated()));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", ctx.ROUTES.FAQ)("innerHtml", ctx.menuItems.FAQ, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", ctx.ROUTES.SUPPORT)("innerHtml", ctx.menuItems.SUPPORT, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r3);
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__["MatMenuTrigger"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIcon"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__["_MatMenu"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__["MatMenuItem"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["AsyncPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdG9vbGJhci90b29sYmFyLW1lbnUvdG9vbGJhci1tZW51LmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ToolbarMenuComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-toolbar-menu',
                templateUrl: './toolbar-menu.component.html',
                styleUrls: ['./toolbar-menu.component.scss']
            }]
    }], function () { return [{ type: _shared_state_state_service__WEBPACK_IMPORTED_MODULE_2__["StateService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _shared_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/toolbar/toolbar.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/toolbar/toolbar.component.ts ***!
  \*********************************************************/
/*! exports provided: ToolbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolbarComponent", function() { return ToolbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _fireflysemantics_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fireflysemantics/constants */ "./node_modules/@fireflysemantics/constants/__ivy_ngcc__/fesm2015/fireflysemantics-constants.js");
/* harmony import */ var _shared_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/model */ "./src/app/shared/model/index.ts");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _toolbar_menu_toolbar_menu_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./toolbar-menu/toolbar-menu.component */ "./src/app/components/toolbar/toolbar-menu/toolbar-menu.component.ts");









const _c0 = function (a0) { return [a0]; };
class ToolbarComponent {
    constructor() {
        this.SVG_CONSTANTS = _fireflysemantics_constants__WEBPACK_IMPORTED_MODULE_1__["SVG"];
        this.ROUTES = _shared_model__WEBPACK_IMPORTED_MODULE_2__["ROUTES"];
    }
    ngOnInit() {
    }
}
ToolbarComponent.ɵfac = function ToolbarComponent_Factory(t) { return new (t || ToolbarComponent)(); };
ToolbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ToolbarComponent, selectors: [["app-toolbar"]], decls: 6, vars: 3, consts: [[2, "justify-content", "space-between"], ["mat-button", "", 2, "padding", "1rem", 3, "routerLink"], [2, "width", "42px", "height", "42px", "font-size", "42px"]], template: function ToolbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "view_column");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " \u00A0 \u00A0 CSV ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-toolbar-menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, ctx.ROUTES.APPLICATION));
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbar"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLink"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIcon"], _toolbar_menu_toolbar_menu_component__WEBPACK_IMPORTED_MODULE_7__["ToolbarMenuComponent"]], styles: ["mat-toolbar[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90b29sYmFyL3Rvb2xiYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxtQkFBQTtBQUNKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy90b29sYmFyL3Rvb2xiYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtdG9vbGJhciB7XG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ToolbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-toolbar',
                templateUrl: './toolbar.component.html',
                styleUrls: ['./toolbar.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/welcome/welcome.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/welcome/welcome.component.ts ***!
  \*********************************************************/
/*! exports provided: WelcomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomeComponent", function() { return WelcomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/model */ "./src/app/shared/model/index.ts");
/* harmony import */ var _shared_state_state_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/state/state.service */ "./src/app/shared/state/state.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../login/login.component */ "./src/app/components/login/login.component.ts");







class WelcomeComponent {
    constructor(s, r) {
        this.s = s;
        this.r = r;
    }
    ngOnInit() { }
    goToApplication() {
        this.r.navigate([_shared_model__WEBPACK_IMPORTED_MODULE_1__["ROUTES"].APPLICATION]);
    }
}
WelcomeComponent.ɵfac = function WelcomeComponent_Factory(t) { return new (t || WelcomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_state_state_service__WEBPACK_IMPORTED_MODULE_2__["StateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
WelcomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WelcomeComponent, selectors: [["app-welcome"]], decls: 35, vars: 0, consts: [[1, "FSLetterLogo", 2, "margin-bottom", "2rem"], [1, "CSVLetterLogo"], ["mat-button", "", "href", "https://medium.com/@ole.ersoy/introducing-firefly-semantics-csv-4e7028af5ca4", "target", "_blank"]], template: function WelcomeComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Drag and Drop the coluns to reorder them.\n");
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "app-login");
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatAnchor"], _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"]], styles: [".mat-list-base[_ngcontent-%COMP%]   .mat-list-item[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.75);\n}\n\n.FSLetterLogo[_ngcontent-%COMP%] {\n  color: #d3d3d3;\n  letter-spacing: 2px;\n}\n\n.CSVLetterLogo[_ngcontent-%COMP%] {\n  letter-spacing: 3px;\n  color: black;\n  opacity: 0.8;\n}\n\nh2[_ngcontent-%COMP%] {\n  opacity: 0.7;\n  font-family: \"Libre Baskerville\", serif !important;\n}\n\np[_ngcontent-%COMP%] {\n  font-family: \"Cutive Mono\", monospace !important;\n  margin-bottom: 2.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy93ZWxjb21lL3dlbGNvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwwQkFBQTtBQUNGOztBQUVBO0VBQ0UsY0FBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSxZQUFBO0VBQ0Esa0RBQUE7QUFDRjs7QUFFQTtFQUNFLGdEQUFBO0VBQ0EscUJBQUE7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvd2VsY29tZS93ZWxjb21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdC1saXN0LWJhc2UgLm1hdC1saXN0LWl0ZW0ge1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjc1KTtcbn1cblxuLkZTTGV0dGVyTG9nbyB7XG4gIGNvbG9yOiAjZDNkM2QzO1xuICBsZXR0ZXItc3BhY2luZzogMnB4O1xufVxuXG4uQ1NWTGV0dGVyTG9nbyB7XG4gIGxldHRlci1zcGFjaW5nOiAzcHg7XG4gIGNvbG9yOiBibGFjaztcbiAgb3BhY2l0eTogMC44O1xufVxuXG5oMiB7XG4gIG9wYWNpdHk6IDAuNztcbiAgZm9udC1mYW1pbHk6IFwiTGlicmUgQmFza2VydmlsbGVcIiwgc2VyaWYgIWltcG9ydGFudDtcbn1cblxucCB7XG4gIGZvbnQtZmFtaWx5OiBcIkN1dGl2ZSBNb25vXCIsIG1vbm9zcGFjZSAhaW1wb3J0YW50O1xuICBtYXJnaW4tYm90dG9tOiAyLjVyZW07XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WelcomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-welcome',
                templateUrl: './welcome.component.html',
                styleUrls: ['./welcome.component.scss']
            }]
    }], function () { return [{ type: _shared_state_state_service__WEBPACK_IMPORTED_MODULE_2__["StateService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/asset.service.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/asset.service.ts ***!
  \*****************************************/
/*! exports provided: AssetService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssetService", function() { return AssetService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _fireflysemantics_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fireflysemantics/constants */ "./node_modules/@fireflysemantics/constants/__ivy_ngcc__/fesm2015/fireflysemantics-constants.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");





class AssetService {
    constructor(matIconRegistry, domSanitizer) {
        this.matIconRegistry = matIconRegistry;
        this.domSanitizer = domSanitizer;
        {
            this.matIconRegistry.addSvgIcon(_fireflysemantics_constants__WEBPACK_IMPORTED_MODULE_1__["SVG"].GOOGLE_LOGO.name, this.domSanitizer.bypassSecurityTrustResourceUrl(_fireflysemantics_constants__WEBPACK_IMPORTED_MODULE_1__["SVG"].GOOGLE_LOGO.url));
        }
    }
}
AssetService.ɵfac = function AssetService_Factory(t) { return new (t || AssetService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIconRegistry"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"])); };
AssetService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AssetService, factory: AssetService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AssetService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIconRegistry"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/auth.guard.ts":
/*!**************************************!*\
  !*** ./src/app/shared/auth.guard.ts ***!
  \**************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _state___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./state/ */ "./src/app/shared/state/index.ts");
/**
 * When someone arrives to the application
 * before they are allowed to proceed to the
 * application they must be authenticated.
 */





class AuthGuard {
    constructor(router, s) {
        this.router = router;
        this.s = s;
    }
    canActivate(next, state) {
        return this.s.os.S.IS_AUTHENTICATED.obs.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(authenticated => {
            if (!authenticated) {
                this.router.navigate(['']);
                return false;
            }
            return true;
        }));
    }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_state___WEBPACK_IMPORTED_MODULE_3__["StateService"])); };
AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _state___WEBPACK_IMPORTED_MODULE_3__["StateService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/auth.service.ts":
/*!****************************************!*\
  !*** ./src/app/shared/auth.service.ts ***!
  \****************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @aws-amplify/auth */ "./node_modules/@aws-amplify/auth/lib-esm/index.js");
/* harmony import */ var _aws_amplify_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @aws-amplify/core */ "./node_modules/@aws-amplify/core/lib-esm/index.js");
/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./model */ "./src/app/shared/model/index.ts");
/* harmony import */ var _fireflysemantics_amplify__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fireflysemantics/amplify */ "./node_modules/@fireflysemantics/amplify/__ivy_ngcc__/fesm2015/fireflysemantics-amplify.js");
/* harmony import */ var _state_state_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./state/state.service */ "./src/app/shared/state/state.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");









class AuthService {
    constructor(s, r) {
        this.s = s;
        this.r = r;
        this.initializeAuthState();
        this.initializeUser();
        this.redirectToApplication();
    }
    signOut() {
        return _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_2__["default"].signOut()
            .then(() => this.s.os.post(this.s.os.S.IS_AUTHENTICATED, false));
    }
    socialSignIn(provider) {
        return _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_2__["default"].federatedSignIn({
            'provider': provider
        });
    }
    signInWithGoogle() {
        this.socialSignIn(AuthService.GOOGLE);
    }
    initializeAuthState() {
        _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_2__["default"].currentAuthenticatedUser().
            then((u) => {
            this.s.os.put(this.s.os.S.IS_AUTHENTICATED, true);
        }).catch(() => {
            _aws_amplify_core__WEBPACK_IMPORTED_MODULE_3__["Hub"].listen('auth', (data) => {
                const { channel, payload } = data;
                if (channel === 'auth') {
                    this.s.os.put(this.s.os.S.IS_AUTHENTICATED, payload.event == _fireflysemantics_amplify__WEBPACK_IMPORTED_MODULE_5__["AMPLIFY_HUB_EVENTS"].SIGN_OUT ? false : true);
                }
            });
        });
    }
    redirectToApplication() {
        this.s.os.S.IS_AUTHENTICATED.obs.subscribe(auth => {
            auth && this.r.navigate([_model__WEBPACK_IMPORTED_MODULE_4__["ROUTES"].APPLICATION]);
            //        auth && this.r.navigate([{outlets: { application: 'application'}}])
        });
    }
    initializeUser() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const user = yield _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_2__["default"].currentUserInfo();
            if (user) {
                const { email, name, given_name, family_name } = user.attributes;
                const u = { email, name, given_name, family_name };
                this.s.os.put(this.s.os.S.USER, u);
            }
        });
    }
    /**
     * We need to keep the user session
     * fresh so that credit card transactions
     * are guaranteed to connect.
     */
    keepSessionFresh() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            /*
            const cognitoUser = await Auth.currentAuthenticatedUser();
            const currentSession = await Auth.currentSession();
            await cognitoUser.refreshSession(
                currentSession.refreshToken,
                (err, session) => {});*/
        });
    }
}
AuthService.GOOGLE = _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_2__["CognitoHostedUIIdentityProvider"].Google;
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_state_state_service__WEBPACK_IMPORTED_MODULE_6__["StateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"])); };
AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _state_state_service__WEBPACK_IMPORTED_MODULE_6__["StateService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/component-data.service.ts":
/*!**************************************************!*\
  !*** ./src/app/shared/component-data.service.ts ***!
  \**************************************************/
/*! exports provided: ComponentDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentDataService", function() { return ComponentDataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _components_csv_header_selection_csv_header_selection_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/csv-header-selection/csv-header-selection.component */ "./src/app/components/csv-header-selection/csv-header-selection.component.ts");
/* harmony import */ var _fireflysemantics_collections__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fireflysemantics/collections */ "./node_modules/@fireflysemantics/collections/__ivy_ngcc__/fesm2015/fireflysemantics-collections.js");
/* harmony import */ var _state_state_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./state/state.service */ "./src/app/shared/state/state.service.ts");





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
    createComponent() {
        const factory = this.resolver.resolveComponentFactory(_components_csv_header_selection_csv_header_selection_component__WEBPACK_IMPORTED_MODULE_1__["CsvHeaderSelectionComponent"]);
        const componentRef = this.VCR.createComponent(factory);
        componentRef.instance.index = this.index;
        this.map.set(this.index, componentRef);
        this.index++;
    }
    destroyComponent(index) {
        const componentRef = this.map.get(index);
        componentRef.destroy();
        Object(_fireflysemantics_collections__WEBPACK_IMPORTED_MODULE_2__["deleteAndDecrement"])(this.map, index);
        //====================================
        // Remap the component indexes also
        //====================================
        this.map.forEach((v, k) => {
            v.instance.index = k;
        });
        const dataMap = this.s.os.snapshot(this.s.os.S.CSV_DATA);
        //====================================
        // Update the data map.
        // We check if it is created
        // because components can be display
        // but they may not have loaded data
        //====================================
        if (dataMap && dataMap.size) {
            if (dataMap.get(index)) {
                Object(_fireflysemantics_collections__WEBPACK_IMPORTED_MODULE_2__["deleteAndDecrement"])(dataMap, index);
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
        this.s.os.put(this.s.os.S.CSV_DATA, dataMap);
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
        const dataMap = this.s.os.snapshot(this.s.os.S.CSV_DATA);
        dataMap && dataMap.clear();
    }
}
ComponentDataService.ɵfac = function ComponentDataService_Factory(t) { return new (t || ComponentDataService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_state_state_service__WEBPACK_IMPORTED_MODULE_3__["StateService"])); };
ComponentDataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ComponentDataService, factory: ComponentDataService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ComponentDataService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"] }, { type: _state_state_service__WEBPACK_IMPORTED_MODULE_3__["StateService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/csv.service.ts":
/*!***************************************!*\
  !*** ./src/app/shared/csv.service.ts ***!
  \***************************************/
/*! exports provided: CsvService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__webpack__worker__0) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CsvService", function() { return CsvService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _fireflysemantics_csv__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fireflysemantics/csv */ "./node_modules/@fireflysemantics/csv/__ivy_ngcc__/fesm2015/fireflysemantics-csv.js");
/* harmony import */ var _fireflysemantics_cdk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fireflysemantics/cdk */ "./node_modules/@fireflysemantics/cdk/__ivy_ngcc__/fesm2015/fireflysemantics-cdk.js");
/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./model */ "./src/app/shared/model/index.ts");
/* harmony import */ var _fireflysemantics_cuid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fireflysemantics/cuid */ "./node_modules/@fireflysemantics/cuid/__ivy_ngcc__/fesm2015/fireflysemantics-cuid.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! file-saver */ "./node_modules/file-saver/dist/FileSaver.min.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _fireflysemantics_collections__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fireflysemantics/collections */ "./node_modules/@fireflysemantics/collections/__ivy_ngcc__/fesm2015/fireflysemantics-collections.js");
/* harmony import */ var _state_state_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./state/state.service */ "./src/app/shared/state/state.service.ts");









//=====================================
//Test parser errors locally
//=====================================
//import { parserError } from 'CSV-TEST-FILES/test-errors';
class CsvService {
    constructor(s) {
        this.s = s;
        this.csvDataMap = new Map();
    }
    save() {
        const result = this.s.os.snapshot(this.s.os.S.PROCESS_RESULT);
        //==============================
        // Create the CSV String
        //===============================
        const csv = Object(_fireflysemantics_csv__WEBPACK_IMPORTED_MODULE_1__["writeCSV"])(result.rows);
        //console.log(csv)
        const blob = new Blob([csv], { type: "text/plain;charset=utf-8" });
        const fileName = `csv-${Object(_fireflysemantics_cuid__WEBPACK_IMPORTED_MODULE_4__["cuidSlug"])()}.csv`;
        Object(file_saver__WEBPACK_IMPORTED_MODULE_5__["saveAs"])(blob, fileName);
    }
    loadCSV(csvFile) {
        const index = csvFile.meta.index;
        const worker = new Worker(__webpack__worker__0, undefined);
        let parseResult;
        worker.postMessage(csvFile.data);
        worker.onmessage = ({ data }) => {
            parseResult = data; //====================================
            this.s.resetErrorState();
            const parseErrors = data.errors;
            //====================================
            // Check for parser errors
            //====================================
            if (parseErrors.length) {
                const IME = new _model__WEBPACK_IMPORTED_MODULE_3__["IndexedMetaError"]();
                IME.type = _model__WEBPACK_IMPORTED_MODULE_3__["ERROR_TYPE_ENUM"].PARSER_ERROR;
                IME.tableData.rows = parseErrors;
                IME.tableData.headers = _fireflysemantics_csv__WEBPACK_IMPORTED_MODULE_1__["CSV_PARSE_ERROR_COLUMNS"];
                this.s.os.put(this.s.os.S.LOAD_AND_PROCESSING_ERRORS, IME);
                return data;
            }
            const headers = data.meta.fields;
            const csvHeaderRows = [];
            headers.forEach(h => {
                csvHeaderRows.push(new _model__WEBPACK_IMPORTED_MODULE_3__["CsvHeaderMetaRow"](h));
            });
            csvFile.rowCount = data.data.length;
            //====================================
            // Trim string values
            //====================================
            data.data.forEach((entity) => {
                Object(_fireflysemantics_collections__WEBPACK_IMPORTED_MODULE_6__["trimObjectValues"])(entity);
            });
            const csvData = new _model__WEBPACK_IMPORTED_MODULE_3__["CsvSelectionData"](csvFile, csvHeaderRows, new _fireflysemantics_cdk__WEBPACK_IMPORTED_MODULE_2__["TableData"](data.data, headers));
            this.csvDataMap.set(index, csvData);
            this.s.resetErrorState();
            this.s.os.put(this.s.os.S.CSV_DATA, this.csvDataMap);
        };
        return parseResult;
    }
}
CsvService.ɵfac = function CsvService_Factory(t) { return new (t || CsvService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_state_state_service__WEBPACK_IMPORTED_MODULE_7__["StateService"])); };
CsvService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CsvService, factory: CsvService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CsvService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _state_state_service__WEBPACK_IMPORTED_MODULE_7__["StateService"] }]; }, null); })();

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/worker-plugin/dist/loader.js?name=0!./csv.worker */ "./node_modules/worker-plugin/dist/loader.js?name=0!./src/app/shared/csv.worker.ts")))

/***/ }),

/***/ "./src/app/shared/data.service.ts":
/*!****************************************!*\
  !*** ./src/app/shared/data.service.ts ***!
  \****************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _model___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./model/ */ "./src/app/shared/model/index.ts");
/* harmony import */ var _state___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./state/ */ "./src/app/shared/state/index.ts");




class DataService {
    /**
     * Initializes the sku string
     * for creating the save when
     * the `IOptimizationParameters` have
     * been completed.
     */
    constructor(s) {
        this.s = s;
        this.initializeTermsOfServiceAccepted();
    }
    saveTermsOfServiceAccepted() {
        localStorage.setItem(_model___WEBPACK_IMPORTED_MODULE_1__["LOCAL_STORAGE_KEYS"].TOS_ACCEPTED, 'true');
    }
    isTermsOfServiceAccepted() {
        return !!localStorage.getItem(_model___WEBPACK_IMPORTED_MODULE_1__["LOCAL_STORAGE_KEYS"].TOS_ACCEPTED);
    }
    ngOnDestroy() { }
    initializeTermsOfServiceAccepted() {
        if (this.isTermsOfServiceAccepted()) {
            this.s.os.put(this.s.os.S.IS_TERMS_OF_SERVICE_ACCEPTED, true);
        }
    }
}
DataService.ɵfac = function DataService_Factory(t) { return new (t || DataService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_state___WEBPACK_IMPORTED_MODULE_2__["StateService"])); };
DataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DataService, factory: DataService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _state___WEBPACK_IMPORTED_MODULE_2__["StateService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/material.modules.ts":
/*!********************************************!*\
  !*** ./src/app/shared/material.modules.ts ***!
  \********************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/autocomplete.js");
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/badge */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/badge.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button-toggle */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button-toggle.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/chips */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/chips.js");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/stepper */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/stepper.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/datepicker.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/expansion.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/grid-list.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-bar.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/radio.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/slider */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slider.js");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/slide-toggle */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slide-toggle.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sort.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
/* harmony import */ var _angular_material_tree__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/tree */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tree.js");
// material.module.ts






































const mm = [
    _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_3__["MatAutocompleteModule"],
    _angular_material_badge__WEBPACK_IMPORTED_MODULE_4__["MatBadgeModule"],
    _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
    _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_6__["MatButtonToggleModule"],
    _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"],
    _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_8__["MatCheckboxModule"],
    _angular_material_chips__WEBPACK_IMPORTED_MODULE_9__["MatChipsModule"],
    _angular_material_stepper__WEBPACK_IMPORTED_MODULE_10__["MatStepperModule"],
    _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__["MatDatepickerModule"],
    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__["MatDialogModule"],
    _angular_material_expansion__WEBPACK_IMPORTED_MODULE_13__["MatExpansionModule"],
    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatFormFieldModule"],
    _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_15__["MatGridListModule"],
    _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
    _angular_material_input__WEBPACK_IMPORTED_MODULE_16__["MatInputModule"],
    _angular_material_list__WEBPACK_IMPORTED_MODULE_17__["MatListModule"],
    _angular_material_menu__WEBPACK_IMPORTED_MODULE_18__["MatMenuModule"],
    _angular_material_paginator__WEBPACK_IMPORTED_MODULE_19__["MatPaginatorModule"],
    _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_20__["MatProgressBarModule"],
    _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_21__["MatProgressSpinnerModule"],
    _angular_material_radio__WEBPACK_IMPORTED_MODULE_22__["MatRadioModule"],
    _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatRippleModule"],
    _angular_material_select__WEBPACK_IMPORTED_MODULE_23__["MatSelectModule"],
    _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_24__["MatSidenavModule"],
    _angular_material_slider__WEBPACK_IMPORTED_MODULE_25__["MatSliderModule"],
    _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_26__["MatSlideToggleModule"],
    _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_27__["MatSnackBarModule"],
    _angular_material_sort__WEBPACK_IMPORTED_MODULE_28__["MatSortModule"],
    _angular_material_table__WEBPACK_IMPORTED_MODULE_29__["MatTableModule"],
    _angular_material_tabs__WEBPACK_IMPORTED_MODULE_30__["MatTabsModule"],
    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_31__["MatToolbarModule"],
    _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_32__["MatTooltipModule"],
    _angular_material_tree__WEBPACK_IMPORTED_MODULE_33__["MatTreeModule"],
    _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatNativeDateModule"]
];
class MaterialModule {
    constructor(matIconRegistry) {
        this.matIconRegistry = matIconRegistry;
        // matIconRegistry.registerFontClassAlias('fontawesome', 'fa');
    }
    static forRoot() {
        return {
            ngModule: MaterialModule,
            providers: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIconRegistry"]]
        };
    }
}
MaterialModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MaterialModule });
MaterialModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MaterialModule_Factory(t) { return new (t || MaterialModule)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIconRegistry"])); }, providers: [], imports: [[...mm], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_3__["MatAutocompleteModule"],
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_4__["MatBadgeModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_6__["MatButtonToggleModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_8__["MatCheckboxModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_9__["MatChipsModule"],
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_10__["MatStepperModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__["MatDatepickerModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__["MatDialogModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_13__["MatExpansionModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatFormFieldModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_15__["MatGridListModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_16__["MatInputModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_17__["MatListModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_18__["MatMenuModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_19__["MatPaginatorModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_20__["MatProgressBarModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_21__["MatProgressSpinnerModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_22__["MatRadioModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatRippleModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_23__["MatSelectModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_24__["MatSidenavModule"],
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_25__["MatSliderModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_26__["MatSlideToggleModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_27__["MatSnackBarModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_28__["MatSortModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_29__["MatTableModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_30__["MatTabsModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_31__["MatToolbarModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_32__["MatTooltipModule"],
        _angular_material_tree__WEBPACK_IMPORTED_MODULE_33__["MatTreeModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatNativeDateModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MaterialModule, { imports: [_angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_3__["MatAutocompleteModule"],
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_4__["MatBadgeModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_6__["MatButtonToggleModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_8__["MatCheckboxModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_9__["MatChipsModule"],
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_10__["MatStepperModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__["MatDatepickerModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__["MatDialogModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_13__["MatExpansionModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatFormFieldModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_15__["MatGridListModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_16__["MatInputModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_17__["MatListModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_18__["MatMenuModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_19__["MatPaginatorModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_20__["MatProgressBarModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_21__["MatProgressSpinnerModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_22__["MatRadioModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatRippleModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_23__["MatSelectModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_24__["MatSidenavModule"],
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_25__["MatSliderModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_26__["MatSlideToggleModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_27__["MatSnackBarModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_28__["MatSortModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_29__["MatTableModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_30__["MatTabsModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_31__["MatToolbarModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_32__["MatTooltipModule"],
        _angular_material_tree__WEBPACK_IMPORTED_MODULE_33__["MatTreeModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatNativeDateModule"]], exports: [_angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_3__["MatAutocompleteModule"],
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_4__["MatBadgeModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_6__["MatButtonToggleModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_8__["MatCheckboxModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_9__["MatChipsModule"],
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_10__["MatStepperModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__["MatDatepickerModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__["MatDialogModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_13__["MatExpansionModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatFormFieldModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_15__["MatGridListModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_16__["MatInputModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_17__["MatListModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_18__["MatMenuModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_19__["MatPaginatorModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_20__["MatProgressBarModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_21__["MatProgressSpinnerModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_22__["MatRadioModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatRippleModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_23__["MatSelectModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_24__["MatSidenavModule"],
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_25__["MatSliderModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_26__["MatSlideToggleModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_27__["MatSnackBarModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_28__["MatSortModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_29__["MatTableModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_30__["MatTabsModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_31__["MatToolbarModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_32__["MatTooltipModule"],
        _angular_material_tree__WEBPACK_IMPORTED_MODULE_33__["MatTreeModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatNativeDateModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MaterialModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [...mm],
                exports: [...mm
                ],
                providers: []
            }]
    }], function () { return [{ type: _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIconRegistry"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/model/CsvHeaderMetaRow.ts":
/*!**************************************************!*\
  !*** ./src/app/shared/model/CsvHeaderMetaRow.ts ***!
  \**************************************************/
/*! exports provided: CsvHeaderMetaRow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CsvHeaderMetaRow", function() { return CsvHeaderMetaRow; });
class CsvHeaderMetaRow {
    constructor(HEADER) {
        this.HEADER = HEADER;
        this.KEY = false;
        this.INCLUDE = false;
    }
}


/***/ }),

/***/ "./src/app/shared/model/CsvSelectionData.ts":
/*!**************************************************!*\
  !*** ./src/app/shared/model/CsvSelectionData.ts ***!
  \**************************************************/
/*! exports provided: CsvSelectionData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CsvSelectionData", function() { return CsvSelectionData; });
/* harmony import */ var _fireflysemantics_collections__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fireflysemantics/collections */ "./node_modules/@fireflysemantics/collections/__ivy_ngcc__/fesm2015/fireflysemantics-collections.js");
/* harmony import */ var _fireflysemantics_cdk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fireflysemantics/cdk */ "./node_modules/@fireflysemantics/cdk/__ivy_ngcc__/fesm2015/fireflysemantics-cdk.js");


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
        this.compoundKeyMap = new Map();
    }
    getKeyHeaders() {
        return this.rows.filter(r => r.KEY).
            map(r => r.HEADER).map(h => h && h.trim());
    }
    getSelectedHeaders() {
        return this.rows.filter(r => r.INCLUDE).
            map(r => r.HEADER).map(h => h && h.trim());
    }
    /**
     * We should refresh the state any time we
     *
     * Run validateKeys before initializing the state because
     * we want to make sure the loaded CSV has valid keys for all
     * the rows prior to creating compound keys and
     * mapping the objects.
     */
    indexAndMap() {
        this.indexData();
        this.mapData();
        return this;
    }
    /**
     * This method can be called with
     * or without keys selected.
     *
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
        if (this.compoundKeyMap && this.compoundKeyMap.size) {
            if (this.getSelectedHeaders().length) {
                [...this.compoundKeyMap.keys()].forEach(k => {
                    const v = this.compoundKeyMap.get(k);
                    const mapped = Object(_fireflysemantics_collections__WEBPACK_IMPORTED_MODULE_0__["mapObject"])(v, this.getSelectedHeaders());
                    this.compoundKeyMap.set(k, mapped);
                });
                this.mappedData = new _fireflysemantics_cdk__WEBPACK_IMPORTED_MODULE_1__["TableData"]();
                this.mappedData.rows = [...this.compoundKeyMap.values()];
                this.mappedData.headers = this.getSelectedHeaders();
            }
        }
        //==========================================
        // Support the use case where
        // we only have a single table and we 
        // want to map columns only.
        //==========================================
        else if (this.getSelectedHeaders().length) {
            const rows = [];
            this.mappedData = new _fireflysemantics_cdk__WEBPACK_IMPORTED_MODULE_1__["TableData"]();
            this.mappedData.headers = this.getSelectedHeaders();
            this.tableData.rows.forEach(v => {
                rows.push(Object(_fireflysemantics_collections__WEBPACK_IMPORTED_MODULE_0__["mapObject"])(v, this.getSelectedHeaders()));
            });
        }
    }
    /**
     * Creates the compound key map
     * of the original CSV data rows.
     */
    indexData() {
        if (this.getKeyHeaders().length) {
            this.compoundKeyMap = Object(_fireflysemantics_collections__WEBPACK_IMPORTED_MODULE_0__["arrayToMap"])(this.tableData.rows, this.getKeyHeaders());
        }
    }
}


/***/ }),

/***/ "./src/app/shared/model/CsvSelectionDataAssemblyContainer.ts":
/*!*******************************************************************!*\
  !*** ./src/app/shared/model/CsvSelectionDataAssemblyContainer.ts ***!
  \*******************************************************************/
/*! exports provided: CsvSelectionDataAssemblyContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CsvSelectionDataAssemblyContainer", function() { return CsvSelectionDataAssemblyContainer; });
/* harmony import */ var _fireflysemantics_cdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fireflysemantics/cdk */ "./node_modules/@fireflysemantics/cdk/__ivy_ngcc__/fesm2015/fireflysemantics-cdk.js");

/**
 * The `CsvSelectionDataAssemblyContainer`
 * should be used when there is more than one
 * table.
 *
 * This calls createAssemblyHeaders in the constructor
 * so that they will be availble on `assembly`.
 *
 * Note that `CsvSelectionData.refreshState()`
 * should be called on the `dataMap` instance
 * before it is passed in.
 */
class CsvSelectionDataAssemblyContainer {
    constructor(dataMap) {
        this.dataMap = dataMap;
        this.assembly = new _fireflysemantics_cdk__WEBPACK_IMPORTED_MODULE_0__["TableData"]();
        if (dataMap && dataMap.size) {
            //=====================================
            // Compound Keys come from the first
            // CsvSelectionData instance on the map
            //
            // The compound keys should be the same
            // across the CsvSelectionData instances.
            //=====================================
            this.compoundKeys = [...this.dataMap.get(0).compoundKeyMap.keys()];
            this.createAssemblyHeaders();
            if (this.hasAssemblyHeaders()) {
                this.assembly.rows = this.createAssemblyRows();
            }
        }
    }
    createAssemblyRows() {
        const assemblyRows = [];
        this.compoundKeys.forEach(ck => {
            let assemblyObject = {};
            this.dataMap.forEach(v => {
                if (v.getSelectedHeaders().length) {
                    const o = v.compoundKeyMap.get(ck);
                    assemblyObject = Object.assign(Object.assign({}, assemblyObject), o);
                }
            });
            console.log(assemblyObject);
            assemblyRows.push(assemblyObject);
        });
        console.log(assemblyRows);
        return assemblyRows;
    }
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

/***/ "./src/app/shared/model/error.ts":
/*!***************************************!*\
  !*** ./src/app/shared/model/error.ts ***!
  \***************************************/
/*! exports provided: ERROR_TYPE_ENUM, FILE_ROW_KEY_ERROR_COLUMNS, FileRowKeyError, FILE_ROW_DULICATES_ERROR_COLUMNS, FileRowDuplicatesError, IndexedMetaError, MISSING_KEY_HEADER_ERROR_COLUMNS, MissingKeyHeaderError, DUPLICATE_SELECTED_HEADER_ERROR_COLUMNS, DuplicateSelectedHeaderError, MISSING_OBJECT_ERROR_COLUMNS, MissingObject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ERROR_TYPE_ENUM", function() { return ERROR_TYPE_ENUM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FILE_ROW_KEY_ERROR_COLUMNS", function() { return FILE_ROW_KEY_ERROR_COLUMNS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileRowKeyError", function() { return FileRowKeyError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FILE_ROW_DULICATES_ERROR_COLUMNS", function() { return FILE_ROW_DULICATES_ERROR_COLUMNS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileRowDuplicatesError", function() { return FileRowDuplicatesError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexedMetaError", function() { return IndexedMetaError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MISSING_KEY_HEADER_ERROR_COLUMNS", function() { return MISSING_KEY_HEADER_ERROR_COLUMNS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MissingKeyHeaderError", function() { return MissingKeyHeaderError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DUPLICATE_SELECTED_HEADER_ERROR_COLUMNS", function() { return DUPLICATE_SELECTED_HEADER_ERROR_COLUMNS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DuplicateSelectedHeaderError", function() { return DuplicateSelectedHeaderError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MISSING_OBJECT_ERROR_COLUMNS", function() { return MISSING_OBJECT_ERROR_COLUMNS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MissingObject", function() { return MissingObject; });
/* harmony import */ var _fireflysemantics_error__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fireflysemantics/error */ "./node_modules/@fireflysemantics/error/__ivy_ngcc__/fesm2015/fireflysemantics-error.js");
/* harmony import */ var _fireflysemantics_cdk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fireflysemantics/cdk */ "./node_modules/@fireflysemantics/cdk/__ivy_ngcc__/fesm2015/fireflysemantics-cdk.js");


/**
 * Enum for tables containing dimension data.
 */
var ERROR_TYPE_ENUM;
(function (ERROR_TYPE_ENUM) {
    ERROR_TYPE_ENUM[ERROR_TYPE_ENUM["PARSER_ERROR"] = 0] = "PARSER_ERROR";
    ERROR_TYPE_ENUM[ERROR_TYPE_ENUM["KEY_HEADER_ERROR"] = 1] = "KEY_HEADER_ERROR";
    ERROR_TYPE_ENUM[ERROR_TYPE_ENUM["SELECTED_HEADER_ERROR"] = 2] = "SELECTED_HEADER_ERROR";
    ERROR_TYPE_ENUM[ERROR_TYPE_ENUM["DUPLICATES_ERROR"] = 3] = "DUPLICATES_ERROR";
    ERROR_TYPE_ENUM[ERROR_TYPE_ENUM["UNDEFINED_KEY_VALUE_ERROR"] = 4] = "UNDEFINED_KEY_VALUE_ERROR";
    ERROR_TYPE_ENUM[ERROR_TYPE_ENUM["REFERENTIAL_INTEGRITY_ERROR"] = 5] = "REFERENTIAL_INTEGRITY_ERROR";
    ERROR_TYPE_ENUM[ERROR_TYPE_ENUM["DATA_ERROR"] = 6] = "DATA_ERROR";
})(ERROR_TYPE_ENUM || (ERROR_TYPE_ENUM = {}));
/**
 * When we are checking that
 * column values used as keys
 * are not empty strings ('', '    '),
 * or null or undefined.
 */
const FILE_ROW_KEY_ERROR_COLUMNS = ['FILE_NAME', 'FIELD', 'ROW'];
class FileRowKeyError extends _fireflysemantics_error__WEBPACK_IMPORTED_MODULE_0__["RowKeyError"] {
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
const FILE_ROW_DULICATES_ERROR_COLUMNS = ['FILE_NAME', 'ROW'];
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
 * Same as the MissingKeyHeaderError
 * ad shares the columns.
 */
class DuplicateSelectedHeaderError {
    constructor(FILE_NAME, HEADER) {
        this.FILE_NAME = FILE_NAME;
        this.HEADER = HEADER;
    }
}
/**
 * We produce a global set of keys that spans all tables.
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

/***/ "./src/app/shared/model/index.ts":
/*!***************************************!*\
  !*** ./src/app/shared/model/index.ts ***!
  \***************************************/
/*! exports provided: ROUTES, MenuItems, rowConverter, ERROR_TYPE_ENUM, FILE_ROW_KEY_ERROR_COLUMNS, FileRowKeyError, FILE_ROW_DULICATES_ERROR_COLUMNS, FileRowDuplicatesError, IndexedMetaError, MISSING_KEY_HEADER_ERROR_COLUMNS, MissingKeyHeaderError, DUPLICATE_SELECTED_HEADER_ERROR_COLUMNS, DuplicateSelectedHeaderError, MISSING_OBJECT_ERROR_COLUMNS, MissingObject, CsvSelectionData, CsvSelectionDataAssemblyContainer, CsvHeaderMetaRow, LOCAL_STORAGE_KEYS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./routes */ "./src/app/shared/model/routes.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ROUTES", function() { return _routes__WEBPACK_IMPORTED_MODULE_0__["ROUTES"]; });

/* harmony import */ var _menus__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menus */ "./src/app/shared/model/menus.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MenuItems", function() { return _menus__WEBPACK_IMPORTED_MODULE_1__["MenuItems"]; });

/* harmony import */ var _validation_rowConverter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../validation/rowConverter */ "./src/app/shared/validation/rowConverter.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "rowConverter", function() { return _validation_rowConverter__WEBPACK_IMPORTED_MODULE_2__["rowConverter"]; });

/* harmony import */ var _error__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./error */ "./src/app/shared/model/error.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ERROR_TYPE_ENUM", function() { return _error__WEBPACK_IMPORTED_MODULE_3__["ERROR_TYPE_ENUM"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FILE_ROW_KEY_ERROR_COLUMNS", function() { return _error__WEBPACK_IMPORTED_MODULE_3__["FILE_ROW_KEY_ERROR_COLUMNS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FileRowKeyError", function() { return _error__WEBPACK_IMPORTED_MODULE_3__["FileRowKeyError"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FILE_ROW_DULICATES_ERROR_COLUMNS", function() { return _error__WEBPACK_IMPORTED_MODULE_3__["FILE_ROW_DULICATES_ERROR_COLUMNS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FileRowDuplicatesError", function() { return _error__WEBPACK_IMPORTED_MODULE_3__["FileRowDuplicatesError"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IndexedMetaError", function() { return _error__WEBPACK_IMPORTED_MODULE_3__["IndexedMetaError"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MISSING_KEY_HEADER_ERROR_COLUMNS", function() { return _error__WEBPACK_IMPORTED_MODULE_3__["MISSING_KEY_HEADER_ERROR_COLUMNS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MissingKeyHeaderError", function() { return _error__WEBPACK_IMPORTED_MODULE_3__["MissingKeyHeaderError"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DUPLICATE_SELECTED_HEADER_ERROR_COLUMNS", function() { return _error__WEBPACK_IMPORTED_MODULE_3__["DUPLICATE_SELECTED_HEADER_ERROR_COLUMNS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DuplicateSelectedHeaderError", function() { return _error__WEBPACK_IMPORTED_MODULE_3__["DuplicateSelectedHeaderError"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MISSING_OBJECT_ERROR_COLUMNS", function() { return _error__WEBPACK_IMPORTED_MODULE_3__["MISSING_OBJECT_ERROR_COLUMNS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MissingObject", function() { return _error__WEBPACK_IMPORTED_MODULE_3__["MissingObject"]; });

/* harmony import */ var _CsvSelectionData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CsvSelectionData */ "./src/app/shared/model/CsvSelectionData.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CsvSelectionData", function() { return _CsvSelectionData__WEBPACK_IMPORTED_MODULE_4__["CsvSelectionData"]; });

/* harmony import */ var _CsvSelectionDataAssemblyContainer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./CsvSelectionDataAssemblyContainer */ "./src/app/shared/model/CsvSelectionDataAssemblyContainer.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CsvSelectionDataAssemblyContainer", function() { return _CsvSelectionDataAssemblyContainer__WEBPACK_IMPORTED_MODULE_5__["CsvSelectionDataAssemblyContainer"]; });

/* harmony import */ var _CsvHeaderMetaRow__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./CsvHeaderMetaRow */ "./src/app/shared/model/CsvHeaderMetaRow.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CsvHeaderMetaRow", function() { return _CsvHeaderMetaRow__WEBPACK_IMPORTED_MODULE_6__["CsvHeaderMetaRow"]; });

/* harmony import */ var _localstorage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./localstorage */ "./src/app/shared/model/localstorage.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LOCAL_STORAGE_KEYS", function() { return _localstorage__WEBPACK_IMPORTED_MODULE_7__["LOCAL_STORAGE_KEYS"]; });











/***/ }),

/***/ "./src/app/shared/model/localstorage.ts":
/*!**********************************************!*\
  !*** ./src/app/shared/model/localstorage.ts ***!
  \**********************************************/
/*! exports provided: LOCAL_STORAGE_KEYS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOCAL_STORAGE_KEYS", function() { return LOCAL_STORAGE_KEYS; });
const LOCAL_STORAGE_KEYS = {
    APPLICATION_CONFIG: 'APPLICATION_CONFIG',
    TOS_ACCEPTED: 'TOS_ACCEPTED'
};


/***/ }),

/***/ "./src/app/shared/model/menus.ts":
/*!***************************************!*\
  !*** ./src/app/shared/model/menus.ts ***!
  \***************************************/
/*! exports provided: MenuItems */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuItems", function() { return MenuItems; });
/**
 * The model for menu items
 * has to live here so that we
 * don't get circular dependency
 * warnings.
 */
var MenuItems;
(function (MenuItems) {
    MenuItems["NONE"] = "none";
    MenuItems["APPLICATION"] = "Application";
    MenuItems["WELCOME"] = "Welcome";
    MenuItems["LOGIN"] = "Login";
    MenuItems["LOGOUT"] = "Logout";
    MenuItems["TRANSACTIONS"] = "Transactions";
    MenuItems["FAQ"] = "FAQ";
    MenuItems["SUPPORT"] = "Support";
    MenuItems["SAVE"] = "Save";
})(MenuItems || (MenuItems = {}));


/***/ }),

/***/ "./src/app/shared/model/routes.ts":
/*!****************************************!*\
  !*** ./src/app/shared/model/routes.ts ***!
  \****************************************/
/*! exports provided: ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTES", function() { return ROUTES; });
var ROUTES;
(function (ROUTES) {
    ROUTES["APPLICATION"] = "/application";
    ROUTES["WELCOME"] = "/welcome";
    ROUTES["LOGIN"] = "/login";
    ROUTES["FAQ"] = "/faq";
    ROUTES["SUPPORT"] = "/support";
})(ROUTES || (ROUTES = {}));


/***/ }),

/***/ "./src/app/shared/process/data-process.service.ts":
/*!********************************************************!*\
  !*** ./src/app/shared/process/data-process.service.ts ***!
  \********************************************************/
/*! exports provided: DataProcessService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataProcessService", function() { return DataProcessService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _processSingleTable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./processSingleTable */ "./src/app/shared/process/processSingleTable.ts");
/* harmony import */ var _processMultipleTables__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./processMultipleTables */ "./src/app/shared/process/processMultipleTables.ts");
/* harmony import */ var _state_state_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../state/state.service */ "./src/app/shared/state/state.service.ts");
/* harmony import */ var _validation_validation_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../validation/validation.service */ "./src/app/shared/validation/validation.service.ts");






class DataProcessService {
    constructor(s, v) {
        this.s = s;
        this.v = v;
    }
    /**
     * Processes the CSV Data
     */
    process() {
        //===================================
        // Set the result to null such that
        // the table component is destroyed 
        // and recreated by the ngIf statement.
        //
        // Also the save enabled state is reset.
        //===================================
        this.s.os.put(this.s.os.S.PROCESS_RESULT, null);
        //========================================
        // Retrieve the selection data
        //========================================
        const dataMap = this.s.os.snapshot(this.s.os.S.CSV_DATA);
        if (dataMap.size == 1) {
            return Object(_processSingleTable__WEBPACK_IMPORTED_MODULE_1__["processSingleTable"])(dataMap, this.s, this.v);
        }
        return Object(_processMultipleTables__WEBPACK_IMPORTED_MODULE_2__["processMultipleTables"])(dataMap, this.s, this.v);
    }
}
DataProcessService.ɵfac = function DataProcessService_Factory(t) { return new (t || DataProcessService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_state_state_service__WEBPACK_IMPORTED_MODULE_3__["StateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_validation_validation_service__WEBPACK_IMPORTED_MODULE_4__["ValidationService"])); };
DataProcessService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DataProcessService, factory: DataProcessService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataProcessService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _state_state_service__WEBPACK_IMPORTED_MODULE_3__["StateService"] }, { type: _validation_validation_service__WEBPACK_IMPORTED_MODULE_4__["ValidationService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/process/processMultipleTables.ts":
/*!*********************************************************!*\
  !*** ./src/app/shared/process/processMultipleTables.ts ***!
  \*********************************************************/
/*! exports provided: processMultipleTables */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "processMultipleTables", function() { return processMultipleTables; });
/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../model */ "./src/app/shared/model/index.ts");
/* harmony import */ var _validation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../validation */ "./src/app/shared/validation/index.ts");


function processMultipleTables(dataMap, s, v) {
    //======================================
    // Check that the key headers match
    //======================================
    // DESCRIPTION
    //========================================
    // We do this by producing a cross section
    // set of keys and then checking that keyset
    // across all the tables.
    //========================================
    // EXAMPLE
    //========================================
    // Table 1 has the key SKU
    // Table 2 has the key LOCATION
    // The cross section keyset is [LOCATION, SKU]
    // Table 1 is missing LOCATION
    // Table 2 is missing SKU
    //========================================
    if (v.checkMatchingKeyHeaders(dataMap, s.os.S.LOAD_AND_PROCESSING_ERRORS)) {
        return false;
    }
    //======================================
    // Check that the headers selected 
    // are unique across tables.
    //======================================
    if (v.checkUnqiueSelectedHeaders(dataMap, s.os.S.LOAD_AND_PROCESSING_ERRORS)) {
        return false;
    }
    //======================================
    // Check that the key values are defined
    //======================================
    if (v.checkKeyValues(dataMap, s.os.S.LOAD_AND_PROCESSING_ERRORS)) {
        return false;
    }
    //========================================
    // Check for duplicate compound keys
    //========================================
    // EXAMPLE
    //========================================
    // Suppose table 1 has two keys
    // ChicagoFS1
    // ChicagoFS1
    // This would cause incorrect mapping so it
    // is flagged
    //========================================
    //======================================
    // Check the compound keys are unique 
    //======================================
    if (v.checkCompoundKeyUniqueness(dataMap, s.os.S.LOAD_AND_PROCESSING_ERRORS)) {
        return false;
    }
    //======================================
    // Map the Data
    //======================================
    dataMap.forEach(v => {
        v.indexAndMap();
    });
    //======================================
    // Check referential integrity 
    //======================================
    if (v.checkReferentialIntegrity(dataMap, s.os.S.LOAD_AND_PROCESSING_ERRORS)) {
        return false;
    }
    //======================================
    // Toaster Notification
    // that the referential integrity
    // check passed.
    //======================================
    const onlyKeysSelected = Object(_validation__WEBPACK_IMPORTED_MODULE_1__["isAtLeastOneKeySelected"])(dataMap) &&
        !Object(_validation__WEBPACK_IMPORTED_MODULE_1__["isAtLeastOneHeaderSelected"])(dataMap);
    if (onlyKeysSelected) {
    }
    //========================================
    // No errors so reset error state
    //========================================
    s.os.put(s.os.S.LOAD_AND_PROCESSING_ERRORS, null);
    //========================================
    // Perform the Assembly
    //========================================
    const CSDAC = new _model__WEBPACK_IMPORTED_MODULE_0__["CsvSelectionDataAssemblyContainer"](dataMap);
    //========================================
    // Initialize the sticky headers
    //========================================
    CSDAC.assembly.stickyHeaders =
        dataMap.get(0).getKeyHeaders();
    if (CSDAC.hasAssemblyHeaders()) {
        s.os.put(s.os.S.PROCESS_RESULT, CSDAC.assembly);
    }
    return true;
}


/***/ }),

/***/ "./src/app/shared/process/processSingleTable.ts":
/*!******************************************************!*\
  !*** ./src/app/shared/process/processSingleTable.ts ***!
  \******************************************************/
/*! exports provided: processSingleTable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "processSingleTable", function() { return processSingleTable; });
function processSingleTable(dataMap, s, v) {
    //======================================
    // Check that the key values are defined
    //======================================
    if (v.checkKeyValues(dataMap, s.os.S.LOAD_AND_PROCESSING_ERRORS)) {
        return false;
    }
    //======================================
    // Check that compound keys are unique 
    //======================================
    // EXAMPLE
    //========================================
    // Suppose table 1 has two keys
    // ChicagoFS1
    // ChicagoFS1
    // This would cause incorrect mapping so it
    // is flagged
    //========================================
    if (v.checkCompoundKeyUniqueness(dataMap, s.os.S.LOAD_AND_PROCESSING_ERRORS)) {
        return false;
    }
    //======================================
    // Map the Data
    //======================================
    dataMap.forEach(v => {
        v.indexAndMap();
    });
    const selectionData = dataMap.get(0);
    if (selectionData.getSelectedHeaders().length) {
        selectionData.mappedData.stickyHeaders =
            selectionData.getKeyHeaders() ?
                selectionData.getKeyHeaders() : [];
        s.os.put(s.os.S.PROCESS_RESULT, selectionData.mappedData);
    }
    return true;
}


/***/ }),

/***/ "./src/app/shared/state/action.state.service.ts":
/*!******************************************************!*\
  !*** ./src/app/shared/state/action.state.service.ts ***!
  \******************************************************/
/*! exports provided: ActionStateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionStateService", function() { return ActionStateService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _state_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./state.service */ "./src/app/shared/state/state.service.ts");




class ActionStateService {
    constructor(s) {
        this.s = s;
        this.isResultReady();
    }
    /**
     * The save button will
     * be enabled if
     * there is exists a PROCESS_RESULT.
     */
    isResultReady() {
        this.isResultReady$ =
            this.s.os.S.PROCESS_RESULT.obs.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(r => {
                return !!r;
            }));
    }
}
ActionStateService.ɵfac = function ActionStateService_Factory(t) { return new (t || ActionStateService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_state_service__WEBPACK_IMPORTED_MODULE_2__["StateService"])); };
ActionStateService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ActionStateService, factory: ActionStateService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ActionStateService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _state_service__WEBPACK_IMPORTED_MODULE_2__["StateService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/state/enabled.state.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/shared/state/enabled.state.service.ts ***!
  \*******************************************************/
/*! exports provided: EnabledStateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnabledStateService", function() { return EnabledStateService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _validation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../validation */ "./src/app/shared/validation/index.ts");
/* harmony import */ var _state_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./state.service */ "./src/app/shared/state/state.service.ts");






class EnabledStateService {
    constructor(s) {
        this.s = s;
        this.isProcessButtonEnabled();
        this.isSaveButtonEnabled();
    }
    /**
     * The process button will
     * be enabled if the data map size is 1
     */
    isProcessButtonEnabled() {
        this.processButtonEnabled$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["combineLatest"])(this.s.os.S.CSV_DATA.obs, this.s.os.S.KEY_HEADER_CHECKBOX_TOGGLE_EVENT.obs, (dataMap) => {
            if (dataMap && dataMap.size == 1) {
                return true;
            }
            if (dataMap && dataMap.size > 1) {
                return Object(_validation__WEBPACK_IMPORTED_MODULE_3__["isAtLeastOneKeySelected"])(dataMap);
            }
            return false;
        });
    }
    /**
     * The save button will
     * be enabled if
     * there is exists a PROCESS_RESULT.
     */
    isSaveButtonEnabled() {
        this.saveButtonEnabled$ =
            this.s.os.S.PROCESS_RESULT.obs.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(r => {
                return !!r;
            }));
    }
}
EnabledStateService.ɵfac = function EnabledStateService_Factory(t) { return new (t || EnabledStateService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_state_service__WEBPACK_IMPORTED_MODULE_4__["StateService"])); };
EnabledStateService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: EnabledStateService, factory: EnabledStateService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EnabledStateService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _state_service__WEBPACK_IMPORTED_MODULE_4__["StateService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/state/index.ts":
/*!***************************************!*\
  !*** ./src/app/shared/state/index.ts ***!
  \***************************************/
/*! exports provided: PlayService, EnabledStateService, OSK, StateService, ActionStateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _play_state_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./play.state.service */ "./src/app/shared/state/play.state.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PlayService", function() { return _play_state_service__WEBPACK_IMPORTED_MODULE_0__["PlayService"]; });

/* harmony import */ var _enabled_state_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./enabled.state.service */ "./src/app/shared/state/enabled.state.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EnabledStateService", function() { return _enabled_state_service__WEBPACK_IMPORTED_MODULE_1__["EnabledStateService"]; });

/* harmony import */ var _state_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./state.service */ "./src/app/shared/state/state.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OSK", function() { return _state_service__WEBPACK_IMPORTED_MODULE_2__["OSK"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StateService", function() { return _state_service__WEBPACK_IMPORTED_MODULE_2__["StateService"]; });

/* harmony import */ var _action_state_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./action.state.service */ "./src/app/shared/state/action.state.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ActionStateService", function() { return _action_state_service__WEBPACK_IMPORTED_MODULE_3__["ActionStateService"]; });







/***/ }),

/***/ "./src/app/shared/state/play.state.service.ts":
/*!****************************************************!*\
  !*** ./src/app/shared/state/play.state.service.ts ***!
  \****************************************************/
/*! exports provided: PlayService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayService", function() { return PlayService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _state_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./state.service */ "./src/app/shared/state/state.service.ts");
/* harmony import */ var _csv_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../csv.service */ "./src/app/shared/csv.service.ts");
/* harmony import */ var _enabled_state_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./enabled.state.service */ "./src/app/shared/state/enabled.state.service.ts");
/**
 * Tab Event Changes
 * https://stackoverflow.com/questions/52589504/angular-how-to-catch-mat-tab-changed-event
 */





const ss = `
LOCATION, SKU, LEAD_TIME_DAYS, SERVICE_LEVEL, FORECAST_BUCKET, MAD
Chicago,  FS1,     30,           0.9,               WEEK,       10
New York, FS2,     42,           0.9,               WEEK,       10
Boston,   FS3,     42,           0.9,               WEEK,       10
`;
class PlayService {
    constructor(s, cs, e) {
        //    this.s.os.S.LOAD_AND_PROCESSING_ERRORS.obs.subscribe(e=>{console.log("IM GETTING THE E HERE: ", e)})
        this.s = s;
        this.cs = cs;
        this.e = e;
        //    this.e.processButtonEnabled$.subscribe(e => console.log("ENABLED: ", e))
        /*
        this.es.emitError(
          [],
          CSV_DIMENSION_ERROR_TYPE_ENUM.REFERENTIAL_INTEGRITY_ERROR,
          this.s.os.S.LOAD_AND_PROCESSING_ERRORS, [])
    
          Demonstrates parsing errors
            const csFile = new CsvFile()
            csFile.data = parserError
            cs.loadCSV(csFile, 1)
        */
        //    this.s.os.S.CSV_DATA.obs.subscribe((d: any) => {
        //     console.log("GIVE ME THE D: ", d)    })
        /*
    
        const safetyStockData = new SafetyStockData()
        safetyStockData.data = ssRows
    
        this.s.os.put(this.s.os.S.SAFETY_STOCK_DATA, safetyStockData)
    
        this.s.os.S.SAFETY_STOCK_DATA.obs.subscribe((d: SafetyStockData) => {
          console.log("GIVE ME THE D: ", d)
            o.runSafetyStockOptimization()
        })
    */
    }
}
PlayService.ɵfac = function PlayService_Factory(t) { return new (t || PlayService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_state_service__WEBPACK_IMPORTED_MODULE_1__["StateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_csv_service__WEBPACK_IMPORTED_MODULE_2__["CsvService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_enabled_state_service__WEBPACK_IMPORTED_MODULE_3__["EnabledStateService"])); };
PlayService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PlayService, factory: PlayService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PlayService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _state_service__WEBPACK_IMPORTED_MODULE_1__["StateService"] }, { type: _csv_service__WEBPACK_IMPORTED_MODULE_2__["CsvService"] }, { type: _enabled_state_service__WEBPACK_IMPORTED_MODULE_3__["EnabledStateService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/state/router.state.service.ts":
/*!******************************************************!*\
  !*** ./src/app/shared/state/router.state.service.ts ***!
  \******************************************************/
/*! exports provided: RouterStateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouterStateService", function() { return RouterStateService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../model */ "./src/app/shared/model/index.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _state_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./state.service */ "./src/app/shared/state/state.service.ts");







class RouterStateService {
    constructor(s, r) {
        this.s = s;
        this.r = r;
        this.applicationShowing$ = this.s.os.S.IS_APPLICATION_SHOWING.obs;
        this.applicationNotShowing$ = this.s.os.S.IS_APPLICATION_SHOWING.obs.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(v => !v));
        this.isApplicationShowing();
    }
    /**
     * The process button will
     * be enabled if the data map size is 1
     */
    isApplicationShowing() {
        const navEndEvents = this.r.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationEnd"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((event) => event.url));
        navEndEvents.subscribe(url => {
            switch (url) {
                case _model__WEBPACK_IMPORTED_MODULE_1__["ROUTES"].APPLICATION:
                    this.s.os.put(this.s.os.S.IS_APPLICATION_SHOWING, true);
                    break;
                default: {
                    this.s.os.put(this.s.os.S.IS_APPLICATION_SHOWING, false);
                }
            }
        });
    }
}
RouterStateService.ɵfac = function RouterStateService_Factory(t) { return new (t || RouterStateService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_state_service__WEBPACK_IMPORTED_MODULE_4__["StateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
RouterStateService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: RouterStateService, factory: RouterStateService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RouterStateService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _state_service__WEBPACK_IMPORTED_MODULE_4__["StateService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/state/state.service.ts":
/*!***********************************************!*\
  !*** ./src/app/shared/state/state.service.ts ***!
  \***********************************************/
/*! exports provided: OSK, StateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OSK", function() { return OSK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StateService", function() { return StateService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _fireflysemantics_slice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fireflysemantics/slice */ "./node_modules/@fireflysemantics/slice/__ivy_ngcc__/fesm2015/fireflysemantics-slice.js");



const OSK = {
    //=================================
    // CONFIGURATION
    //=================================
    APPLICATION_CONFIG: { value: null },
    LOCAL_STORAGE_TERMS_OF_SERVICE_KEY: { value: null },
    IS_TERMS_OF_SERVICE_ACCEPTED: { value: false },
    //=================================
    // USER IDENTITY
    //=================================
    ON_SIGN_IN: { value: null },
    ON_SIGN_OUT: { value: null },
    AMPLIFY_USER: { value: null },
    USER: { value: null },
    USER_EMAIL: { value: null },
    IS_AUTHENTICATED: { value: false },
    //=================================
    // DATA MANAGEMENT
    //=================================
    IS_CSV_DATA_LOADING: { value: false },
    IS_CSV_DATA_BATCH_RUNNING: { value: false },
    ON_CSV_DATA_BATCH_UPDATE: { value: 0 },
    CSV_DATA: { value: null },
    PROCESS_RESULT: { value: null },
    //=================================
    // ERROR MANAGEMENT
    //=================================
    LOAD_AND_PROCESSING_ERRORS: { value: null },
    //=================================
    // UI EVENTS
    //=================================
    ACTIVE_MENU: { value: null },
    KEY_HEADER_CHECKBOX_TOGGLE_EVENT: { value: false },
    TAB_INDEX: { value: 0 },
    //=================================
    // ROUTER EVENTS
    //=================================
    IS_APPLICATION_SHOWING: { value: false }
};
class StateService {
    constructor() {
        this.os = new _fireflysemantics_slice__WEBPACK_IMPORTED_MODULE_1__["OStore"](OSK);
    }
    resetErrorState() {
        this.os.put(this.os.S.LOAD_AND_PROCESSING_ERRORS, null);
    }
}
StateService.ɵfac = function StateService_Factory(t) { return new (t || StateService)(); };
StateService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: StateService, factory: StateService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StateService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/shared/validation/index.ts":
/*!********************************************!*\
  !*** ./src/app/shared/validation/index.ts ***!
  \********************************************/
/*! exports provided: isAtLeastOneHeaderSelected, isAtLeastOneKeySelected, rowConverter, validateKeyValues, validateMatchingKeyHeaders, validateReferentialIntegrity, validateUniqueCompoundKeys, validateSelectedHeadersUnique, ValidationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _isAtLeastOneHeaderSelected__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isAtLeastOneHeaderSelected */ "./src/app/shared/validation/isAtLeastOneHeaderSelected.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isAtLeastOneHeaderSelected", function() { return _isAtLeastOneHeaderSelected__WEBPACK_IMPORTED_MODULE_0__["isAtLeastOneHeaderSelected"]; });

/* harmony import */ var _isAtLeastOneKeySelected__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isAtLeastOneKeySelected */ "./src/app/shared/validation/isAtLeastOneKeySelected.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isAtLeastOneKeySelected", function() { return _isAtLeastOneKeySelected__WEBPACK_IMPORTED_MODULE_1__["isAtLeastOneKeySelected"]; });

/* harmony import */ var _rowConverter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./rowConverter */ "./src/app/shared/validation/rowConverter.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "rowConverter", function() { return _rowConverter__WEBPACK_IMPORTED_MODULE_2__["rowConverter"]; });

/* harmony import */ var _validateKeyValues__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./validateKeyValues */ "./src/app/shared/validation/validateKeyValues.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "validateKeyValues", function() { return _validateKeyValues__WEBPACK_IMPORTED_MODULE_3__["validateKeyValues"]; });

/* harmony import */ var _validateMatchingKeyHeaders__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./validateMatchingKeyHeaders */ "./src/app/shared/validation/validateMatchingKeyHeaders.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "validateMatchingKeyHeaders", function() { return _validateMatchingKeyHeaders__WEBPACK_IMPORTED_MODULE_4__["validateMatchingKeyHeaders"]; });

/* harmony import */ var _validateReferentialIntegrity__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./validateReferentialIntegrity */ "./src/app/shared/validation/validateReferentialIntegrity.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "validateReferentialIntegrity", function() { return _validateReferentialIntegrity__WEBPACK_IMPORTED_MODULE_5__["validateReferentialIntegrity"]; });

/* harmony import */ var _validateUniqueCompoundKeys__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./validateUniqueCompoundKeys */ "./src/app/shared/validation/validateUniqueCompoundKeys.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "validateUniqueCompoundKeys", function() { return _validateUniqueCompoundKeys__WEBPACK_IMPORTED_MODULE_6__["validateUniqueCompoundKeys"]; });

/* harmony import */ var _validateSelectedHeadersUnique__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./validateSelectedHeadersUnique */ "./src/app/shared/validation/validateSelectedHeadersUnique.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "validateSelectedHeadersUnique", function() { return _validateSelectedHeadersUnique__WEBPACK_IMPORTED_MODULE_7__["validateSelectedHeadersUnique"]; });

/* harmony import */ var _validation_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./validation.service */ "./src/app/shared/validation/validation.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ValidationService", function() { return _validation_service__WEBPACK_IMPORTED_MODULE_8__["ValidationService"]; });












/***/ }),

/***/ "./src/app/shared/validation/isAtLeastOneHeaderSelected.ts":
/*!*****************************************************************!*\
  !*** ./src/app/shared/validation/isAtLeastOneHeaderSelected.ts ***!
  \*****************************************************************/
/*! exports provided: isAtLeastOneHeaderSelected */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isAtLeastOneHeaderSelected", function() { return isAtLeastOneHeaderSelected; });
/**
  * Check whether at least one header has been selected
  * from each table.
  */
function isAtLeastOneHeaderSelected(dataMap) {
    let selected = true;
    dataMap.forEach(v => {
        if (!v.getSelectedHeaders().length) {
            selected = false;
        }
    });
    return selected;
}


/***/ }),

/***/ "./src/app/shared/validation/isAtLeastOneKeySelected.ts":
/*!**************************************************************!*\
  !*** ./src/app/shared/validation/isAtLeastOneKeySelected.ts ***!
  \**************************************************************/
/*! exports provided: isAtLeastOneKeySelected */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isAtLeastOneKeySelected", function() { return isAtLeastOneKeySelected; });
/**
 * Check whether at least one key has been selected
 * from each table.
 */
function isAtLeastOneKeySelected(dataMap) {
    let selected = true;
    dataMap.forEach(v => {
        if (!v.getKeyHeaders().length) {
            selected = false;
        }
    });
    return selected;
}


/***/ }),

/***/ "./src/app/shared/validation/rowConverter.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/validation/rowConverter.ts ***!
  \***************************************************/
/*! exports provided: rowConverter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rowConverter", function() { return rowConverter; });
/**
 * Convert the object key value pairs to a string.
 *
 * We are using a custom converted to format
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

/***/ "./src/app/shared/validation/validateKeyValues.ts":
/*!********************************************************!*\
  !*** ./src/app/shared/validation/validateKeyValues.ts ***!
  \********************************************************/
/*! exports provided: validateKeyValues */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateKeyValues", function() { return validateKeyValues; });
/* harmony import */ var _fireflysemantics_error__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fireflysemantics/error */ "./node_modules/@fireflysemantics/error/__ivy_ngcc__/fesm2015/fireflysemantics-error.js");
/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../model */ "./src/app/shared/model/index.ts");


/**
 * Validate the key fields in data set have a valid value.
 *
 * Values including '', '   ', null or undefined are flagged.
 *
 * This operation only completes if there are
 * CSV rows to operate on and selected keys.
 */
function validateKeyValues(dataMap) {
    const IME = new _model__WEBPACK_IMPORTED_MODULE_1__["IndexedMetaError"]();
    IME.tableData.headers = _model__WEBPACK_IMPORTED_MODULE_1__["FILE_ROW_KEY_ERROR_COLUMNS"];
    IME.type = _model__WEBPACK_IMPORTED_MODULE_1__["ERROR_TYPE_ENUM"].UNDEFINED_KEY_VALUE_ERROR;
    dataMap.forEach((CSD, k) => {
        const FRKES = [];
        if (CSD.getKeyHeaders().length && CSD.tableData.rows.length) {
            const RKES = Object(_fireflysemantics_error__WEBPACK_IMPORTED_MODULE_0__["undefinedRowKeys"])(CSD.tableData.rows, CSD.getKeyHeaders(), _model__WEBPACK_IMPORTED_MODULE_1__["rowConverter"]);
            RKES.forEach(e => {
                const FRKE = new _model__WEBPACK_IMPORTED_MODULE_1__["FileRowKeyError"](e.FIELD, e.ROW, CSD.meta.name);
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

/***/ "./src/app/shared/validation/validateMatchingKeyHeaders.ts":
/*!*****************************************************************!*\
  !*** ./src/app/shared/validation/validateMatchingKeyHeaders.ts ***!
  \*****************************************************************/
/*! exports provided: validateMatchingKeyHeaders */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateMatchingKeyHeaders", function() { return validateMatchingKeyHeaders; });
/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../model */ "./src/app/shared/model/index.ts");
/* harmony import */ var _fireflysemantics_collections__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fireflysemantics/collections */ "./node_modules/@fireflysemantics/collections/__ivy_ngcc__/fesm2015/fireflysemantics-collections.js");
/* harmony import */ var _model_error__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../model/error */ "./src/app/shared/model/error.ts");



/**
 * Validate that the key headers match across all the tables.
 */
function validateMatchingKeyHeaders(dataMap) {
    //====================================
    // Only process when there are at least
    // Two tables.
    //====================================
    if (dataMap.size < 2) {
        return null;
    }
    //====================================
    //  Calculate the header superset
    //====================================
    const allHeaders = [];
    dataMap.forEach(v => {
        allHeaders.push(v.getKeyHeaders());
    });
    const superset = Object(_fireflysemantics_collections__WEBPACK_IMPORTED_MODULE_1__["keyUnion"])(allHeaders);
    //====================================
    //  Initialize the error
    //====================================
    const IME = new _model__WEBPACK_IMPORTED_MODULE_0__["IndexedMetaError"]();
    IME.type = _model_error__WEBPACK_IMPORTED_MODULE_2__["ERROR_TYPE_ENUM"].KEY_HEADER_ERROR;
    IME.tableData.headers = _model_error__WEBPACK_IMPORTED_MODULE_2__["MISSING_KEY_HEADER_ERROR_COLUMNS"];
    //====================================
    //  Check for missing headers
    //====================================
    dataMap.forEach((data, k) => {
        const headers = data.getKeyHeaders();
        const MKHES = [];
        let missing = Object(_fireflysemantics_collections__WEBPACK_IMPORTED_MODULE_1__["findMissingStrings"])([...superset], headers);
        if (missing && missing.length) {
            missing.forEach(m => {
                const error = new _model__WEBPACK_IMPORTED_MODULE_0__["MissingKeyHeaderError"](data.meta.name, m);
                MKHES.push(error);
            });
            IME.indexedMeta.set(k, data.meta);
            IME.indexErrors.set(k, MKHES);
            IME.tableData.rows = [...IME.tableData.rows, ...MKHES];
        }
    });
    return IME.tableData.rows.length ? IME : null;
}


/***/ }),

/***/ "./src/app/shared/validation/validateReferentialIntegrity.ts":
/*!*******************************************************************!*\
  !*** ./src/app/shared/validation/validateReferentialIntegrity.ts ***!
  \*******************************************************************/
/*! exports provided: validateReferentialIntegrity */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateReferentialIntegrity", function() { return validateReferentialIntegrity; });
/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../model */ "./src/app/shared/model/index.ts");
/* harmony import */ var _model_error__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../model/error */ "./src/app/shared/model/error.ts");


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
function validateReferentialIntegrity(dataMap) {
    const IME = new _model__WEBPACK_IMPORTED_MODULE_0__["IndexedMetaError"]();
    IME.tableData.headers = _model_error__WEBPACK_IMPORTED_MODULE_1__["MISSING_OBJECT_ERROR_COLUMNS"];
    IME.type = _model_error__WEBPACK_IMPORTED_MODULE_1__["ERROR_TYPE_ENUM"].REFERENTIAL_INTEGRITY_ERROR;
    let compoundKeyArray = [];
    dataMap.forEach((CSD) => {
        //console.log("COMPOUND KEYS from map")
        //console.log([...CSD.compoundKeyMap.keys()])
        compoundKeyArray = [
            ...compoundKeyArray,
            ...CSD.compoundKeyMap.keys()
        ];
    });
    //console.log("COMPOUND KEY ARRAY")
    //console.log(compoundKeyArray)
    const globalKeySet = new Set(compoundKeyArray);
    //console.log("GLOBAL KEYSET")
    //console.log(globalKeySet)
    //console.log(globalKeySet.size)
    dataMap.forEach((CSD, CSK) => {
        const missingObjects = [];
        globalKeySet.forEach(k => {
            if (!CSD.compoundKeyMap.get(k)) {
                console.log(CSD.compoundKeyMap);
                const unMatched = new _model__WEBPACK_IMPORTED_MODULE_0__["MissingObject"](k, CSD.meta.name);
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

/***/ "./src/app/shared/validation/validateSelectedHeadersUnique.ts":
/*!********************************************************************!*\
  !*** ./src/app/shared/validation/validateSelectedHeadersUnique.ts ***!
  \********************************************************************/
/*! exports provided: validateSelectedHeadersUnique */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateSelectedHeadersUnique", function() { return validateSelectedHeadersUnique; });
/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../model */ "./src/app/shared/model/index.ts");
/* harmony import */ var _fireflysemantics_collections__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fireflysemantics/collections */ "./node_modules/@fireflysemantics/collections/__ivy_ngcc__/fesm2015/fireflysemantics-collections.js");


/**
 * Angular Material Data Table
 * will throw getTableDuplicateColumnNameError
 * if there are duplicate column names select across tables.
 *
 * @param dataMap
 * @return The IndexMetaError instance if there were errors null otherwise.
 */
function validateSelectedHeadersUnique(dataMap) {
    //====================================
    // Only process when there are at least
    // Two tables.
    //====================================
    if (dataMap.size < 2) {
        return null;
    }
    //====================================
    //  Calculate the header superset
    //====================================
    const allHeaders = [];
    dataMap.forEach(v => {
        allHeaders.push(v.getSelectedHeaders());
    });
    const superset = Object(_fireflysemantics_collections__WEBPACK_IMPORTED_MODULE_1__["keyUnion"])(allHeaders);
    //====================================
    //  Initialize the error
    //====================================
    const IME = new _model__WEBPACK_IMPORTED_MODULE_0__["IndexedMetaError"]();
    IME.type = _model__WEBPACK_IMPORTED_MODULE_0__["ERROR_TYPE_ENUM"].SELECTED_HEADER_ERROR;
    IME.tableData.headers = _model__WEBPACK_IMPORTED_MODULE_0__["DUPLICATE_SELECTED_HEADER_ERROR_COLUMNS"];
    //====================================
    //  Check for duplicate selected headers
    //====================================
    const headersSet = new Set();
    dataMap.forEach((data, k) => {
        const DSHE = [];
        data.getSelectedHeaders().
            forEach(h => {
            if (!headersSet.has(h)) {
                headersSet.add(h);
            }
            else {
                const error = new _model__WEBPACK_IMPORTED_MODULE_0__["DuplicateSelectedHeaderError"](data.meta.name, h);
                DSHE.push(error);
            }
        });
        IME.indexedMeta.set(k, data.meta);
        IME.indexErrors.set(k, DSHE);
        IME.tableData.rows = [...IME.tableData.rows, ...DSHE];
    });
    return IME.tableData.rows.length ? IME : null;
}


/***/ }),

/***/ "./src/app/shared/validation/validateUniqueCompoundKeys.ts":
/*!*****************************************************************!*\
  !*** ./src/app/shared/validation/validateUniqueCompoundKeys.ts ***!
  \*****************************************************************/
/*! exports provided: validateUniqueCompoundKeys */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateUniqueCompoundKeys", function() { return validateUniqueCompoundKeys; });
/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../model */ "./src/app/shared/model/index.ts");
/* harmony import */ var _fireflysemantics_collections__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fireflysemantics/collections */ "./node_modules/@fireflysemantics/collections/__ivy_ngcc__/fesm2015/fireflysemantics-collections.js");
/* harmony import */ var _model_error__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../model/error */ "./src/app/shared/model/error.ts");
/* harmony import */ var _rowConverter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./rowConverter */ "./src/app/shared/validation/rowConverter.ts");




/**
 * This will check whether the
 * compound key is unique across all records
 * in each table.
 *
 * If they are not then the combine operation
 * will overwrite one row with another
 * as it uses maps to perform the operation.
 *
 * @param dataMap The map of CsvSelectionData instances
 * @return An `IndexedMetaError` instance or null if there are no errors
 */
function validateUniqueCompoundKeys(dataMap) {
    const IME = new _model__WEBPACK_IMPORTED_MODULE_0__["IndexedMetaError"]();
    IME.type = _model_error__WEBPACK_IMPORTED_MODULE_2__["ERROR_TYPE_ENUM"].DUPLICATES_ERROR;
    IME.tableData.headers = _model_error__WEBPACK_IMPORTED_MODULE_2__["FILE_ROW_DULICATES_ERROR_COLUMNS"];
    dataMap.forEach((CSD, k) => {
        if (CSD.getKeyHeaders().length) {
            const duplicates = Object(_fireflysemantics_collections__WEBPACK_IMPORTED_MODULE_1__["duplicateCompoundKeys"])(CSD.tableData.rows, CSD.getKeyHeaders());
            const duplicateEntities = duplicates.map(d => {
                const rowString = Object(_rowConverter__WEBPACK_IMPORTED_MODULE_3__["rowConverter"])(d);
                const duplicateEntity = new _model_error__WEBPACK_IMPORTED_MODULE_2__["FileRowDuplicatesError"](rowString, CSD.meta.name);
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

/***/ "./src/app/shared/validation/validation.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/shared/validation/validation.service.ts ***!
  \*********************************************************/
/*! exports provided: ValidationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidationService", function() { return ValidationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _validateKeyValues__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./validateKeyValues */ "./src/app/shared/validation/validateKeyValues.ts");
/* harmony import */ var _validateSelectedHeadersUnique__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./validateSelectedHeadersUnique */ "./src/app/shared/validation/validateSelectedHeadersUnique.ts");
/* harmony import */ var _validateMatchingKeyHeaders__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./validateMatchingKeyHeaders */ "./src/app/shared/validation/validateMatchingKeyHeaders.ts");
/* harmony import */ var _validateUniqueCompoundKeys__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./validateUniqueCompoundKeys */ "./src/app/shared/validation/validateUniqueCompoundKeys.ts");
/* harmony import */ var _validateReferentialIntegrity__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./validateReferentialIntegrity */ "./src/app/shared/validation/validateReferentialIntegrity.ts");
/* harmony import */ var _state_state_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../state/state.service */ "./src/app/shared/state/state.service.ts");








class ValidationService {
    constructor(s) {
        this.s = s;
    }
    /**
     * Validate the key fields of the csv data.
     * Validate the key fields of each
     * each set of CSV entities.
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
    checkKeyValues(dataMap, errorChannel) {
        const IME = Object(_validateKeyValues__WEBPACK_IMPORTED_MODULE_1__["validateKeyValues"])(dataMap);
        return this.emitError(IME, errorChannel);
    }
    /**
     * Validate that the key headers match across all the tables.
     * @param dataMap The map containing the CSV Entities
     * @param errorChannel The error channel
     * @return The IME if there are errors otherwise null
   
     */
    checkMatchingKeyHeaders(dataMap, errorChannel) {
        const IME = Object(_validateMatchingKeyHeaders__WEBPACK_IMPORTED_MODULE_3__["validateMatchingKeyHeaders"])(dataMap);
        return this.emitError(IME, errorChannel);
    }
    checkUnqiueSelectedHeaders(dataMap, errorChannel) {
        const IME = Object(_validateSelectedHeadersUnique__WEBPACK_IMPORTED_MODULE_2__["validateSelectedHeadersUnique"])(dataMap);
        return this.emitError(IME, errorChannel);
    }
    /**
     * Validate the compound key fields
     * are unique.
     * @param dataMap The map containing the CSV Entities
     * @param errorChannel The error channel
     * @return The IME if there are errors otherwise null
     *
      // EXAMPLE
      //========================================
      // Suppose Table 1 has SKU and LOCATION
      // marked as keys.
      // Row 1: FS1CHICAGO
      // ROW 2: FS!CHICAGO
      // Rows 1 and 2 have duplicate compound keys.
      //========================================
     */
    checkCompoundKeyUniqueness(dataMap, errorChannel) {
        const IME = Object(_validateUniqueCompoundKeys__WEBPACK_IMPORTED_MODULE_4__["validateUniqueCompoundKeys"])(dataMap);
        return this.emitError(IME, errorChannel);
    }
    /**
     * Check referential integrity
     *
     * @param dataMap The data map
     * @param errorChannel The error channel
     * @return The IME if there are errors otherwise null
     */
    checkReferentialIntegrity(dataMap, errorChannel) {
        const IME = Object(_validateReferentialIntegrity__WEBPACK_IMPORTED_MODULE_5__["validateReferentialIntegrity"])(dataMap);
        return this.emitError(IME, errorChannel);
    }
    /**
     * Emit the errors if there are any.
     * @return true if an error is emitted, false otherwise
     */
    emitError(IME, errorChannel) {
        if (IME && IME.tableData.rows.length && errorChannel) {
            this.s.os.put(errorChannel, IME);
            return true;
        }
        return false;
    }
}
ValidationService.ɵfac = function ValidationService_Factory(t) { return new (t || ValidationService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_state_state_service__WEBPACK_IMPORTED_MODULE_6__["StateService"])); };
ValidationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ValidationService, factory: ValidationService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ValidationService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _state_state_service__WEBPACK_IMPORTED_MODULE_6__["StateService"] }]; }, null); })();


/***/ }),

/***/ "./src/aws-exports.js":
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

/***/ "./src/environments/environment.ts":
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

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var aws_amplify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! aws-amplify */ "./node_modules/aws-amplify/lib-esm/index.js");
/* harmony import */ var _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @aws-amplify/auth */ "./node_modules/@aws-amplify/auth/lib-esm/index.js");
/* harmony import */ var _aws_exports__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./aws-exports */ "./src/aws-exports.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");







if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_5__["AppModule"])
    .catch(err => console.error(err));
aws_amplify__WEBPACK_IMPORTED_MODULE_2__["default"].configure(_aws_exports__WEBPACK_IMPORTED_MODULE_4__["default"]);
_aws_amplify_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].configure(_aws_exports__WEBPACK_IMPORTED_MODULE_4__["default"]);


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/ole/FireflySemantics/Repository/fireflysemantics/700-CSV/csv/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map