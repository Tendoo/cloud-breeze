(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'tendoo-setup';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var ngx_dropzone_wrapper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-dropzone-wrapper */ "./node_modules/ngx-dropzone-wrapper/dist/ngx-dropzone-wrapper.es5.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var src_modules_material_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/modules/material.module */ "./src/modules/material.module.ts");
/* harmony import */ var _components_do_setup_setup_home_setup_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/do-setup/setup-home/setup-home.component */ "./src/app/components/do-setup/setup-home/setup-home.component.ts");
/* harmony import */ var _components_do_setup_database_database_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/do-setup/database/database.component */ "./src/app/components/do-setup/database/database.component.ts");
/* harmony import */ var _components_do_setup_application_application_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/do-setup/application/application.component */ "./src/app/components/do-setup/application/application.component.ts");
/* harmony import */ var _components_auth_login_login_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/auth/login/login.component */ "./src/app/components/auth/login/login.component.ts");
/* harmony import */ var _components_auth_logout_logout_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/auth/logout/logout.component */ "./src/app/components/auth/logout/logout.component.ts");
/* harmony import */ var _components_auth_register_register_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/auth/register/register.component */ "./src/app/components/auth/register/register.component.ts");
/* harmony import */ var _components_dashboard_users_users_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/dashboard/users/users.component */ "./src/app/components/dashboard/users/users.component.ts");
/* harmony import */ var _components_dashboard_modules_modules_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/dashboard/modules/modules.component */ "./src/app/components/dashboard/modules/modules.component.ts");
/* harmony import */ var _components_dashboard_settings_settings_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/dashboard/settings/settings.component */ "./src/app/components/dashboard/settings/settings.component.ts");
/* harmony import */ var src_modules_routes_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! src/modules/routes.module */ "./src/modules/routes.module.ts");
/* harmony import */ var _components_dashboard_home_home_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/dashboard/home/home.component */ "./src/app/components/dashboard/home/home.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_fields_fields_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./shared/fields/fields.component */ "./src/app/shared/fields/fields.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_loader_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./services/loader.service */ "./src/app/services/loader.service.ts");
/* harmony import */ var _components_do_setup_do_setup_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/do-setup/do-setup.component */ "./src/app/components/do-setup/do-setup.component.ts");
/* harmony import */ var _components_auth_auth_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/auth/auth.component */ "./src/app/components/auth/auth.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/dashboard/dashboard.component */ "./src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var _components_dashboard_modules_upload_modules_upload_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/dashboard/modules-upload/modules-upload.component */ "./src/app/components/dashboard/modules-upload/modules-upload.component.ts");
/* harmony import */ var _shared_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./shared/confirm-dialog/confirm-dialog.component */ "./src/app/shared/confirm-dialog/confirm-dialog.component.ts");
/* harmony import */ var _components_dashboard_users_edit_users_edit_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/dashboard/users-edit/users-edit.component */ "./src/app/components/dashboard/users-edit/users-edit.component.ts");
/* harmony import */ var _components_dashboard_users_create_users_create_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./components/dashboard/users-create/users-create.component */ "./src/app/components/dashboard/users-create/users-create.component.ts");
/* harmony import */ var _components_dashboard_profile_profile_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./components/dashboard/profile/profile.component */ "./src/app/components/dashboard/profile/profile.component.ts");
/* harmony import */ var _components_dashboard_medias_medias_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./components/dashboard/medias/medias.component */ "./src/app/components/dashboard/medias/medias.component.ts");
/* harmony import */ var _components_dashboard_medias_upload_medias_upload_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./components/dashboard/medias-upload/medias-upload.component */ "./src/app/components/dashboard/medias-upload/medias-upload.component.ts");
/* harmony import */ var _shared_menu_list_menu_list_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./shared/menu-list/menu-list.component */ "./src/app/shared/menu-list/menu-list.component.ts");
/* harmony import */ var _shared_sub_menu_list_sub_menu_list_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./shared/sub-menu-list/sub-menu-list.component */ "./src/app/shared/sub-menu-list/sub-menu-list.component.ts");
/* harmony import */ var _classes_core_event_class__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./classes/core-event.class */ "./src/app/classes/core-event.class.ts");
/* harmony import */ var _components_dashboard_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./components/dashboard/not-found/not-found.component */ "./src/app/components/dashboard/not-found/not-found.component.ts");
/* harmony import */ var _components_dashboard_crud_crud_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./components/dashboard/crud/crud.component */ "./src/app/components/dashboard/crud/crud.component.ts");
/* harmony import */ var _shared_crud_table_crud_table_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./shared/crud-table/crud-table.component */ "./src/app/shared/crud-table/crud-table.component.ts");
/* harmony import */ var _components_dashboard_crud_create_crud_create_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./components/dashboard/crud-create/crud-create.component */ "./src/app/components/dashboard/crud-create/crud-create.component.ts");
/* harmony import */ var _components_dashboard_crud_edit_crud_edit_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./components/dashboard/crud-edit/crud-edit.component */ "./src/app/components/dashboard/crud-edit/crud-edit.component.ts");
/* harmony import */ var _components_migration_dialog_migration_dialog_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./components/migration-dialog/migration-dialog.component */ "./src/app/components/migration-dialog/migration-dialog.component.ts");
/* harmony import */ var _components_dashboard_access_denied_access_denied_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./components/dashboard/access-denied/access-denied.component */ "./src/app/components/dashboard/access-denied/access-denied.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _components_do_setup_setup_home_setup_home_component__WEBPACK_IMPORTED_MODULE_8__["SetupHomeComponent"],
                _components_do_setup_database_database_component__WEBPACK_IMPORTED_MODULE_9__["DatabaseComponent"],
                _components_do_setup_application_application_component__WEBPACK_IMPORTED_MODULE_10__["ApplicationComponent"],
                _components_auth_login_login_component__WEBPACK_IMPORTED_MODULE_11__["LoginComponent"],
                _components_auth_logout_logout_component__WEBPACK_IMPORTED_MODULE_12__["LogoutComponent"],
                _components_auth_register_register_component__WEBPACK_IMPORTED_MODULE_13__["RegisterComponent"],
                _components_dashboard_users_users_component__WEBPACK_IMPORTED_MODULE_14__["UsersComponent"],
                _components_dashboard_modules_modules_component__WEBPACK_IMPORTED_MODULE_15__["ModulesComponent"],
                _components_dashboard_settings_settings_component__WEBPACK_IMPORTED_MODULE_16__["SettingsComponent"],
                _components_dashboard_home_home_component__WEBPACK_IMPORTED_MODULE_18__["DashboardHomeComponent"],
                _shared_fields_fields_component__WEBPACK_IMPORTED_MODULE_20__["FieldsComponent"],
                _components_do_setup_do_setup_component__WEBPACK_IMPORTED_MODULE_23__["DoSetupComponent"],
                _components_auth_auth_component__WEBPACK_IMPORTED_MODULE_24__["AuthComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_25__["HomeComponent"],
                _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_26__["DashboardComponent"],
                _components_dashboard_modules_upload_modules_upload_component__WEBPACK_IMPORTED_MODULE_27__["ModulesUploadComponent"],
                _shared_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_28__["ConfirmDialogComponent"],
                _components_dashboard_users_edit_users_edit_component__WEBPACK_IMPORTED_MODULE_29__["UsersEditComponent"],
                _components_dashboard_users_create_users_create_component__WEBPACK_IMPORTED_MODULE_30__["UsersCreateComponent"],
                _components_dashboard_profile_profile_component__WEBPACK_IMPORTED_MODULE_31__["ProfileComponent"],
                _components_dashboard_medias_medias_component__WEBPACK_IMPORTED_MODULE_32__["MediasComponent"],
                _components_dashboard_medias_upload_medias_upload_component__WEBPACK_IMPORTED_MODULE_33__["MediasUploadComponent"],
                _shared_menu_list_menu_list_component__WEBPACK_IMPORTED_MODULE_34__["MenuListComponent"],
                _shared_sub_menu_list_sub_menu_list_component__WEBPACK_IMPORTED_MODULE_35__["SubMenuListComponent"],
                _components_dashboard_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_37__["NotFoundComponent"],
                _components_dashboard_crud_crud_component__WEBPACK_IMPORTED_MODULE_38__["CrudComponent"],
                _shared_crud_table_crud_table_component__WEBPACK_IMPORTED_MODULE_39__["CrudTableComponent"],
                _components_dashboard_crud_create_crud_create_component__WEBPACK_IMPORTED_MODULE_40__["CrudCreateComponent"],
                _components_dashboard_crud_edit_crud_edit_component__WEBPACK_IMPORTED_MODULE_41__["CrudEditComponent"],
                _components_migration_dialog_migration_dialog_component__WEBPACK_IMPORTED_MODULE_42__["MigrationDialogComponent"],
                _components_dashboard_access_denied_access_denied_component__WEBPACK_IMPORTED_MODULE_43__["AccessDeniedComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["FlexLayoutModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_19__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_21__["HttpClientModule"],
                src_modules_material_module__WEBPACK_IMPORTED_MODULE_7__["MaterialModule"],
                src_modules_routes_module__WEBPACK_IMPORTED_MODULE_17__["RoutesModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_19__["FormsModule"],
                ngx_dropzone_wrapper__WEBPACK_IMPORTED_MODULE_3__["DropzoneModule"]
            ],
            entryComponents: [
                _shared_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_28__["ConfirmDialogComponent"],
                _components_migration_dialog_migration_dialog_component__WEBPACK_IMPORTED_MODULE_42__["MigrationDialogComponent"]
            ],
            providers: [
                _services_loader_service__WEBPACK_IMPORTED_MODULE_22__["LoaderService"],
                {
                    provide: _classes_core_event_class__WEBPACK_IMPORTED_MODULE_36__["CoreEvent"],
                    useValue: new _classes_core_event_class__WEBPACK_IMPORTED_MODULE_36__["CoreEvent"]
                }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/classes/core-event.class.ts":
/*!*********************************************!*\
  !*** ./src/app/classes/core-event.class.ts ***!
  \*********************************************/
/*! exports provided: CoreEvent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreEvent", function() { return CoreEvent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CoreEvent = /** @class */ (function (_super) {
    __extends(CoreEvent, _super);
    function CoreEvent() {
        return _super.call(this, true) || this;
    }
    CoreEvent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], CoreEvent);
    return CoreEvent;
}(_angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]));



/***/ }),

/***/ "./src/app/classes/validation-generator.class.ts":
/*!*******************************************************!*\
  !*** ./src/app/classes/validation-generator.class.ts ***!
  \*******************************************************/
/*! exports provided: ValidationGenerator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidationGenerator", function() { return ValidationGenerator; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _validators_matches_validator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../validators/matches.validator */ "./src/app/validators/matches.validator.ts");
/* harmony import */ var _validators_number_validator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../validators/number.validator */ "./src/app/validators/number.validator.ts");



var ValidationGenerator = /** @class */ (function () {
    function ValidationGenerator() {
    }
    /**
     * generate a validator from field validation property
     * @param string validation string;
     * @return array of validaiton
     */
    ValidationGenerator.from = function (validation) {
        if (validation) {
            /**
             * make sure to skip
             * validation of object
             */
            if (typeof validation !== 'string') {
                validation = validation.filter(function (rule) {
                    return typeof rule === 'string';
                });
                validation = validation.join('|');
            }
            var finalRules_1 = [];
            var rules = validation.split('|');
            var minRule_1 = /(min)\:([0-9])+/g;
            var maxRule_1 = /(max)\:([0-9])+/g;
            var matchRule_1 = /(same):(\w+)/g;
            var result_1;
            /**
             * Loop and parses the rules
             */
            rules.forEach(function (rule) {
                if (rule == 'required') {
                    finalRules_1.push(_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required);
                }
                else if (rule == 'email') {
                    finalRules_1.push(_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].email);
                }
                else if (result_1 = minRule_1.exec(rule)) {
                    finalRules_1.push(_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(result_1[2]));
                }
                else if (result_1 = maxRule_1.exec(rule)) {
                    finalRules_1.push(_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].maxLength(result_1[2]));
                }
                else if (result_1 = matchRule_1.exec(rule)) {
                    finalRules_1.push(Object(_validators_matches_validator__WEBPACK_IMPORTED_MODULE_1__["MatchesValidator"])(result_1[2]));
                }
                else if (rule == 'number') {
                    finalRules_1.push(Object(_validators_number_validator__WEBPACK_IMPORTED_MODULE_2__["Numbervalidator"])());
                }
            });
            return finalRules_1;
        }
        return null;
    };
    /**
     * Extract FormControl from Field object
     * @param array fields
     * @return object of FormControl
     */
    ValidationGenerator.extractControls = function (fields, ignoreEmpty) {
        var _this = this;
        if (ignoreEmpty === void 0) { ignoreEmpty = false; }
        var formControl = {};
        fields.forEach(function (field) {
            /**
             * the field.control is required in order to extract a control
             * unless if that should ignore empty controls
             */
            if (field.control === undefined && ignoreEmpty == false) {
                throw "Unable to use the validation control for the field : \"" + field.name + "\". Please make sure to define the '.control' property for this field.";
            }
            if (field.control) {
                field.control.setValidators(_this.from(field.validation));
                formControl[field.name] = field.control;
            }
        });
        return formControl;
    };
    /**
     * Build FormControl from Field object
     * create FormControl if it's not defined and call
     * extractControls to build the FormControl
     * @param Field object
     * @return FormControl
     */
    ValidationGenerator.buildFormControls = function (fields) {
        var formControls = {};
        fields.forEach(function (field) {
            if (field.control == undefined) {
                field.control = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](field.value ? field.value : null);
            }
            else {
                field.control.setValue(field.value);
            }
        });
        return this.extractControls(fields);
    };
    /**
     * Build FormControl from Field object.
     * Create FormControl if it's not defined and call
     * extractControls to build the FormControl
     * @param Field object
     * @return FormControl
     */
    ValidationGenerator.buildFormControl = function (field) {
        if (field.control == undefined) {
            field.control = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](field.value || null);
        }
        else {
            field.control.setValue(field.value || null);
        }
        return this.extractControls([field])[field.name];
    };
    /**
     * touch all fields of a provided FormGroup
     * @param form
     */
    ValidationGenerator.touchAllFields = function (form) {
        /**
         * Trigger touch even on all fields.
         * Start by looping tabs
         */
        Object.keys(form.controls).forEach(function (field) {
            form.get(field).markAsTouched();
        });
    };
    /**
     * Build From Field Array
     * @param array Field[]
     * @return FormGroup
     */
    ValidationGenerator.buildFormGroup = function (fields) {
        fields.forEach(function (field) {
            field.control = ValidationGenerator.buildFormControl(field);
        });
        return {
            fields: fields,
            formGroup: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"](ValidationGenerator.extractControls(fields))
        };
    };
    /**
     * Disable all field provided as an array of Field.
     * @param array Field[]
     * @return void
     */
    ValidationGenerator.deactivateFields = function (fields) {
        fields.forEach(function (field) { return field.control.disable(); });
    };
    /**
     * Enable all field provided as an array of Field.
     * @param array Field[]
     * @return void
     */
    ValidationGenerator.enableFields = function (fields) {
        fields.forEach(function (field) { return field.control.enable(); });
    };
    /**
     * Throw custom errors on fields and FormGroup
     * @param array Field[]
     * @param error FieldError
     * @return void
     */
    ValidationGenerator.throwFieldsError = function (group, fields, errors) {
        var _loop_1 = function (error) {
            group.get(error).setErrors({ error: true });
            fields.forEach(function (field) {
                if (field.name === error) {
                    field.errors = errors[field.name];
                }
            });
        };
        for (var error in errors) {
            _loop_1(error);
        }
    };
    /**
     * Get valid value from FromGroup.
     * This skip null value from the final object
     * @param object FormGroup value
     * @return object result
     */
    ValidationGenerator.noNullValue = function (group) {
        var finalData = {};
        for (var key in group.value) {
            if (group.value[key] !== null) {
                finalData[key] = group.value[key];
            }
        }
        return finalData;
    };
    return ValidationGenerator;
}());



/***/ }),

/***/ "./src/app/components/auth/auth.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/auth/auth.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYXV0aC9hdXRoLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/auth/auth.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/auth/auth.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxFill fxLayout=\"row\" fxLayoutAlign=\"center center\" class=\"bg-content\">\r\n    <div \r\n        fxLayoutAlign=\"center\"\r\n        fxFlex.xs=\"90%\" \r\n        fxFlex.sm=\"70%\" \r\n        fxFlex.md=\"50%\" \r\n        fxFlex.lg=\"30%\" \r\n        fxFlex.xl=\"20%\">\r\n        <router-outlet></router-outlet>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/auth/auth.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/auth/auth.component.ts ***!
  \***************************************************/
/*! exports provided: AuthComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthComponent", function() { return AuthComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AuthComponent = /** @class */ (function () {
    function AuthComponent() {
    }
    AuthComponent.prototype.ngOnInit = function () {
    };
    AuthComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-auth',
            template: __webpack_require__(/*! ./auth.component.html */ "./src/app/components/auth/auth.component.html"),
            styles: [__webpack_require__(/*! ./auth.component.css */ "./src/app/components/auth/auth.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AuthComponent);
    return AuthComponent;
}());



/***/ }),

/***/ "./src/app/components/auth/login/login.component.css":
/*!***********************************************************!*\
  !*** ./src/app/components/auth/login/login.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYXV0aC9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/auth/login/login.component.html":
/*!************************************************************!*\
  !*** ./src/app/components/auth/login/login.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"loginForm\">\r\n    <mat-card color=\"primary\">\r\n        <mat-card-title>Authenticating</mat-card-title>\r\n        <mat-card-content>\r\n            <app-fields [field]=\"field\" [group]=\"loginForm\" *ngFor=\"let field of fields\"></app-fields>\r\n        </mat-card-content>\r\n        <mat-divider *ngIf=\"!tendoo.isLoading\"></mat-divider>\r\n        <mat-progress-bar *ngIf=\"tendoo.auth.isLoading\" mode=\"indeterminate\" style=\"height: 1px;position: absolute;left: 0;\"></mat-progress-bar>\r\n        <mat-card-actions fxLayoutAlign=\"space-between\">\r\n            <button [disabled]=\"tendoo.auth.isLoading\" (click)=\"login()\" mat-button=\"\">\r\n                Login\r\n            </button>\r\n            <button [disabled]=\"tendoo.auth.isLoading\" routerLink=\"/auth/register\" mat-button=\"\">\r\n                Register\r\n            </button>\r\n        </mat-card-actions>\r\n    </mat-card>\r\n</form>"

/***/ }),

/***/ "./src/app/components/auth/login/login.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/components/auth/login/login.component.ts ***!
  \**********************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_tendoo_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/tendoo.service */ "./src/app/services/tendoo.service.ts");
/* harmony import */ var src_app_classes_validation_generator_class__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/classes/validation-generator.class */ "./src/app/classes/validation-generator.class.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginComponent = /** @class */ (function () {
    function LoginComponent(tendoo, snackbar, router) {
        this.tendoo = tendoo;
        this.snackbar = snackbar;
        this.router = router;
        this.fields = [];
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.fields = [
            {
                label: 'Username',
                name: 'username',
                type: 'text',
                value: 'admin',
                description: 'Username saved during the registration.',
            }, {
                label: 'Password',
                name: 'password',
                type: 'password',
                value: 'sanches',
                description: 'Only you knows what is the password',
            }
        ];
        var fields = src_app_classes_validation_generator_class__WEBPACK_IMPORTED_MODULE_2__["ValidationGenerator"].buildFormControls(this.fields);
        this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"](fields);
        // this.login();
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        src_app_classes_validation_generator_class__WEBPACK_IMPORTED_MODULE_2__["ValidationGenerator"].touchAllFields(this.loginForm);
        if (!this.loginForm.valid) {
            return this.snackbar.open('Unable to login, the login form as some erors', 'OK', {
                duration: 3000
            });
        }
        this.tendoo.auth.login(this.loginForm.value).subscribe(function (result) {
            /**
             * once the user is connected
             * let's save the credential on
             * each outgoing request
             */
            _this.tendoo.auth.setCredentials(result.user, result.token);
            _this.snackbar.open(result.message, null, {
                duration: 3000
            });
            /**
             * if the intented has been defined.
             * let's redirect the user to that location
             */
            var path = _this.tendoo.auth.intented;
            if (path !== undefined) {
                return _this.router.navigateByUrl(path);
            }
            _this.router.navigateByUrl('dashboard/users');
        }, function (result) {
            _this.snackbar.open(result.error.message);
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/components/auth/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/components/auth/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_tendoo_service__WEBPACK_IMPORTED_MODULE_1__["TendooService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/auth/logout/logout.component.css":
/*!*************************************************************!*\
  !*** ./src/app/components/auth/logout/logout.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYXV0aC9sb2dvdXQvbG9nb3V0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/auth/logout/logout.component.html":
/*!**************************************************************!*\
  !*** ./src/app/components/auth/logout/logout.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  logout works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/components/auth/logout/logout.component.ts":
/*!************************************************************!*\
  !*** ./src/app/components/auth/logout/logout.component.ts ***!
  \************************************************************/
/*! exports provided: LogoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoutComponent", function() { return LogoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_tendoo_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/tendoo-auth.service */ "./src/app/services/tendoo-auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LogoutComponent = /** @class */ (function () {
    function LogoutComponent(auth, route) {
        this.auth = auth;
        this.route = route;
    }
    LogoutComponent.prototype.ngOnInit = function () {
        this.auth.logout();
        this.route.navigateByUrl('/auth/login');
    };
    LogoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-logout',
            template: __webpack_require__(/*! ./logout.component.html */ "./src/app/components/auth/logout/logout.component.html"),
            styles: [__webpack_require__(/*! ./logout.component.css */ "./src/app/components/auth/logout/logout.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_tendoo_auth_service__WEBPACK_IMPORTED_MODULE_1__["TendooAuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], LogoutComponent);
    return LogoutComponent;
}());



/***/ }),

/***/ "./src/app/components/auth/register/register.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/components/auth/register/register.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYXV0aC9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/auth/register/register.component.html":
/*!******************************************************************!*\
  !*** ./src/app/components/auth/register/register.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"registerForm\" *ngIf=\"registerForm\">\r\n    <mat-card color=\"primary\">\r\n        <mat-card-title>Register</mat-card-title>\r\n        <mat-card-content>\r\n            <app-fields [field]=\"field\" [group]=\"registerForm\" *ngFor=\"let field of fields\"></app-fields>\r\n        </mat-card-content>\r\n        <mat-divider *ngIf=\"!tendoo.isLoading\"></mat-divider>\r\n        <mat-progress-bar *ngIf=\"tendoo.auth.isLoading\" mode=\"indeterminate\" style=\"height: 1px;position: absolute;left: 0;\"></mat-progress-bar>\r\n        <mat-card-actions fxLayoutAlign=\"space-between\">\r\n            <button [disabled]=\"tendoo.auth.isLoading\" (click)=\"register()\" mat-button=\"\">\r\n                Create an account\r\n            </button>\r\n            <button [disabled]=\"tendoo.auth.isLoading\" routerLink=\"/auth/login\" mat-button=\"\">\r\n                Login\r\n            </button>\r\n        </mat-card-actions>\r\n    </mat-card>\r\n</form>\r\n<mat-spinner *ngIf=\"! registerForm\"></mat-spinner>"

/***/ }),

/***/ "./src/app/components/auth/register/register.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/components/auth/register/register.component.ts ***!
  \****************************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_tendoo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/tendoo.service */ "./src/app/services/tendoo.service.ts");
/* harmony import */ var src_app_classes_validation_generator_class__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/classes/validation-generator.class */ "./src/app/classes/validation-generator.class.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(tendoo, snackbar, router) {
        this.tendoo = tendoo;
        this.snackbar = snackbar;
        this.router = router;
        this.fields = [];
    }
    RegisterComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.tendoo.fields.getPublicFields('auth.register').subscribe(function (fields) {
            _this.fields = fields;
            var controls = src_app_classes_validation_generator_class__WEBPACK_IMPORTED_MODULE_3__["ValidationGenerator"].buildFormControls(_this.fields);
            _this.registerForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"](controls);
        });
    };
    RegisterComponent.prototype.register = function () {
        var _this = this;
        src_app_classes_validation_generator_class__WEBPACK_IMPORTED_MODULE_3__["ValidationGenerator"].touchAllFields(this.registerForm);
        if (!this.registerForm.valid) {
            return this.snackbar.open('Unable to proceed, the form is not valid.', 'OK', { duration: 5000 });
        }
        src_app_classes_validation_generator_class__WEBPACK_IMPORTED_MODULE_3__["ValidationGenerator"].deactivateFields(this.fields);
        this.tendoo.auth.register(this.registerForm.value).subscribe(function (result) {
            /**
             * when the registration is successful
             * let's redirect back to the login page.
             */
            _this.router.navigateByUrl('auth/login');
            _this.snackbar.open(result.message, 'OK', { duration: 5000 });
        }, function (result) {
            _this.snackbar.open(result.error.message, 'OK', { duration: 5000 });
            src_app_classes_validation_generator_class__WEBPACK_IMPORTED_MODULE_3__["ValidationGenerator"].enableFields(_this.fields);
            var _loop_1 = function (error) {
                _this.registerForm.get(error).setErrors({ error: true });
                _this.fields.forEach(function (field) {
                    if (field.name === error) {
                        field.errors = result.error.errors[field.name];
                    }
                });
            };
            /**
             * loop all the field to show the
             * error on the component.
             */
            for (var error in result.error.errors) {
                _loop_1(error);
            }
        });
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/components/auth/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/components/auth/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_tendoo_service__WEBPACK_IMPORTED_MODULE_2__["TendooService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/components/dashboard/access-denied/access-denied.component.css":
/*!********************************************************************************!*\
  !*** ./src/app/components/dashboard/access-denied/access-denied.component.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\r\n    height: 100%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9kYXNoYm9hcmQvYWNjZXNzLWRlbmllZC9hY2Nlc3MtZGVuaWVkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0NBQ2hCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9kYXNoYm9hcmQvYWNjZXNzLWRlbmllZC9hY2Nlc3MtZGVuaWVkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/dashboard/access-denied/access-denied.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/components/dashboard/access-denied/access-denied.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxFlex fxFill fxLayoutAlign=\"center center\" class=\"bg-content\">\n    <div fxFlex=\"400px\" class=\"text-center\">\n        <h1>Oh no !!!</h1>\n        <p>Looks like you're attempting to access to a page which is not allowed to you. How bad this is... </p>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/components/dashboard/access-denied/access-denied.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/components/dashboard/access-denied/access-denied.component.ts ***!
  \*******************************************************************************/
/*! exports provided: AccessDeniedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccessDeniedComponent", function() { return AccessDeniedComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AccessDeniedComponent = /** @class */ (function () {
    function AccessDeniedComponent() {
    }
    AccessDeniedComponent.prototype.ngOnInit = function () {
    };
    AccessDeniedComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-access-denied',
            template: __webpack_require__(/*! ./access-denied.component.html */ "./src/app/components/dashboard/access-denied/access-denied.component.html"),
            styles: [__webpack_require__(/*! ./access-denied.component.css */ "./src/app/components/dashboard/access-denied/access-denied.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AccessDeniedComponent);
    return AccessDeniedComponent;
}());



/***/ }),

/***/ "./src/app/components/dashboard/crud-create/crud-create.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/components/dashboard/crud-create/crud-create.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\r\n    height: 100%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9kYXNoYm9hcmQvY3J1ZC1jcmVhdGUvY3J1ZC1jcmVhdGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7Q0FDaEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2Rhc2hib2FyZC9jcnVkLWNyZWF0ZS9jcnVkLWNyZWF0ZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/components/dashboard/crud-create/crud-create.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/components/dashboard/crud-create/crud-create.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\" class=\"bg-content\" fxFlex=\"100%\" style=\"overflow-y:auto\">\n    <ng-container *ngIf=\"crudConfig\">\n        <mat-progress-bar color=\"warn\" style=\"height: 2px; position: absolute\" *ngIf=\"tendoo.crud.isLoading\" mode=\"indeterminate\"></mat-progress-bar>\n        <div fxLayout=\"row\" class=\"p-3 pb-0\">\n            <div fxFlex>\n                <h1 class=\"mat-display-1 mb-0\">{{ crudConfig.labels.create_title }}</h1>\n                <span class=\"mat-title\">{{ crudConfig.labels.create_description }}</span>\n            </div>\n            <div fxFlex=\"200px\" fxLayoutAlign=\"end start\">\n                <button [routerLink]=\"crudConfig.links.list\" mat-button color=\"warn\">{{ crudConfig.labels.back_to_list }}</button>\n            </div>\n        </div>\n        <div class=\"p-3\" fxLayout=\"row\" fxFlex=\"1 0 auto\" fxLayout=\"column\">\n            <mat-card>\n                <mat-card-title>\n                    {{ crudConfig.labels.create_title }}\n                </mat-card-title>\n                <mat-card-content>\n                    <form [formGroup]=\"crudForm\" *ngIf=\"crudForm\">\n                        <app-fields *ngFor=\"let field of crudConfig.fields\" [field]=\"field\" [group]=\"crudForm\"></app-fields>\n                    </form>\n                </mat-card-content>\n                <mat-divider></mat-divider>\n                <mat-card-actions>\n                    <button [disabled]=\"tendoo.crud.isLoading\" mat-button (click)=\"submit()\" color=\"primary\">Submit</button>\n                </mat-card-actions>\n            </mat-card>\n        </div>\n    </ng-container>\n    <div fxFlex fxFill *ngIf=\"! crudForm\" fxLayoutAlign=\"center center\">\n        <mat-spinner [diameter]=\"50\"></mat-spinner>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/components/dashboard/crud-create/crud-create.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/dashboard/crud-create/crud-create.component.ts ***!
  \***************************************************************************/
/*! exports provided: CrudCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrudCreateComponent", function() { return CrudCreateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_tendoo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/tendoo.service */ "./src/app/services/tendoo.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_classes_validation_generator_class__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/classes/validation-generator.class */ "./src/app/classes/validation-generator.class.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CrudCreateComponent = /** @class */ (function () {
    function CrudCreateComponent(route, tendoo, snackbar, router) {
        this.route = route;
        this.tendoo = tendoo;
        this.snackbar = snackbar;
        this.router = router;
    }
    CrudCreateComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap.subscribe(function (params) {
            var namespace = params.get('namespace');
            _this.tendoo.crud.getCreateConfig(namespace).subscribe(function (config) {
                _this.crudConfig = config;
                var formControls = src_app_classes_validation_generator_class__WEBPACK_IMPORTED_MODULE_5__["ValidationGenerator"].buildFormControls(_this.crudConfig.fields);
                _this.crudForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"](formControls);
            });
        });
    };
    CrudCreateComponent.prototype.submit = function () {
        var _this = this;
        src_app_classes_validation_generator_class__WEBPACK_IMPORTED_MODULE_5__["ValidationGenerator"].touchAllFields(this.crudForm);
        if (this.crudForm.invalid) {
            return this.snackbar.open(this.crudConfig.labels['create_form_invalid'] || 'Unable to proceed, the form is not valid', 'OK', {
                duration: 3000
            });
        }
        /**
         * let's disable all the field
         * before proceed submitting
         */
        src_app_classes_validation_generator_class__WEBPACK_IMPORTED_MODULE_5__["ValidationGenerator"].deactivateFields(this.crudConfig.fields);
        /**
         * submit the form to the
         * server
         */
        this.tendoo.crud.postForm(this.crudConfig.namespace, this.crudForm.value).subscribe(function (result) {
            /**
             * Enable back all disabled fields
             */
            src_app_classes_validation_generator_class__WEBPACK_IMPORTED_MODULE_5__["ValidationGenerator"].enableFields(_this.crudConfig.fields);
            /**
             * generate a notification and
             * redirect back to the list
             */
            _this.snackbar.open(result.message, 'OK', { duration: 3000 });
            _this.router.navigateByUrl(_this.crudConfig.links.list);
        }, function (result) {
            /**
             * Enable back all disabled fields
             */
            src_app_classes_validation_generator_class__WEBPACK_IMPORTED_MODULE_5__["ValidationGenerator"].enableFields(_this.crudConfig.fields);
            /**
             * An error has occured, let's show why the
             * error has occured
             */
            _this.snackbar.open(result.error.message, 'OK', { duration: 5000 });
        });
    };
    CrudCreateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-crud-create',
            template: __webpack_require__(/*! ./crud-create.component.html */ "./src/app/components/dashboard/crud-create/crud-create.component.html"),
            styles: [__webpack_require__(/*! ./crud-create.component.css */ "./src/app/components/dashboard/crud-create/crud-create.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            src_app_services_tendoo_service__WEBPACK_IMPORTED_MODULE_2__["TendooService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], CrudCreateComponent);
    return CrudCreateComponent;
}());



/***/ }),

/***/ "./src/app/components/dashboard/crud-edit/crud-edit.component.css":
/*!************************************************************************!*\
  !*** ./src/app/components/dashboard/crud-edit/crud-edit.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZGFzaGJvYXJkL2NydWQtZWRpdC9jcnVkLWVkaXQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/dashboard/crud-edit/crud-edit.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/dashboard/crud-edit/crud-edit.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  crud-edit works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/dashboard/crud-edit/crud-edit.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/dashboard/crud-edit/crud-edit.component.ts ***!
  \***********************************************************************/
/*! exports provided: CrudEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrudEditComponent", function() { return CrudEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CrudEditComponent = /** @class */ (function () {
    function CrudEditComponent() {
    }
    CrudEditComponent.prototype.ngOnInit = function () {
    };
    CrudEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-crud-edit',
            template: __webpack_require__(/*! ./crud-edit.component.html */ "./src/app/components/dashboard/crud-edit/crud-edit.component.html"),
            styles: [__webpack_require__(/*! ./crud-edit.component.css */ "./src/app/components/dashboard/crud-edit/crud-edit.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CrudEditComponent);
    return CrudEditComponent;
}());



/***/ }),

/***/ "./src/app/components/dashboard/crud/crud.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/dashboard/crud/crud.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\r\n    height: 100%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9kYXNoYm9hcmQvY3J1ZC9jcnVkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0NBQ2hCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9kYXNoYm9hcmQvY3J1ZC9jcnVkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/dashboard/crud/crud.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/dashboard/crud/crud.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"crud\" class=\"bg-content\" fxLayout=\"column\" fxFlex=\"100%\" style=\"overflow-y:auto\">\n    <div fxLayout=\"row\" class=\"p-3 pb-0\">\n        <div fxFlex>\n            <h1 class=\"mat-display-1 mb-0\">{{ crud.labels.list_title }}</h1>\n            <span class=\"mat-title\">{{ crud.labels.list_description }}</span>\n        </div>\n    </div>\n    <div fxFlex class=\"p-3\">\n        <app-crud-table\n            *ngIf=\"crud.results.data.length > 0\"\n            [crud]=\"crud\"\n\n            (sort)=\"sortData( $event )\"\n            (delete)=\"deleteEntries( $event )\"\n            (action)=\"doAction( $event )\"\n            (search)=\"searh( $event )\"\n        ></app-crud-table>\n        <div *ngIf=\"crud.results.data.length === 0\" fxFlex fxFill fxLayoutAlign=\"center center\">\n            <div fxFlex=\"400px\">\n                <h3 style=\"text-align: center\">\n                    {{ crud.labels.no_entry ? crud.labels.no_entry : 'Hum... it\\'s quite empty here.' }}. \n                    <a [routerLink]=\"crud?.links.create\">{{ crud.labels.create_new ? crud.labels.create_new : 'Create a new entry?' }}</a>\n                </h3>\n            </div>\n        </div>\n    </div>\n</div>\n<div class=\"bg-content\"  *ngIf=\"! crud\" fxFlex fxFill fxLayoutAlign=\"center center\">\n    <mat-spinner [diameter]=\"50\"></mat-spinner>\n</div>"

/***/ }),

/***/ "./src/app/components/dashboard/crud/crud.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/dashboard/crud/crud.component.ts ***!
  \*************************************************************/
/*! exports provided: CrudComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrudComponent", function() { return CrudComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_tendoo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/tendoo.service */ "./src/app/services/tendoo.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CrudComponent = /** @class */ (function () {
    function CrudComponent(route, tendoo, snackbar) {
        this.route = route;
        this.tendoo = tendoo;
        this.snackbar = snackbar;
    }
    CrudComponent.prototype.ngOnInit = function () {
        this.loadCrud();
    };
    CrudComponent.prototype.loadCrud = function () {
        var _this = this;
        this.route.paramMap.subscribe(function (route) {
            _this.namespace = route.get('namespace');
            _this.page = +route.get('page');
            _this.tendoo.crud.getConfig(_this.namespace).subscribe(function (crud) {
                _this.crud = crud;
            }, function (error) {
                _this.snackbar
                    .open('Unable to load the crud component.', 'TRY AGAIN')
                    .afterDismissed()
                    .subscribe(function (observer) {
                    _this.loadCrud();
                });
            });
        });
    };
    /**
     *
    **/
    CrudComponent.prototype.sortData = function (data) {
        console.log(data);
    };
    /**
     *
    **/
    CrudComponent.prototype.deleteEntries = function (data) {
        console.log(data);
    };
    /**
     *
    **/
    CrudComponent.prototype.doAction = function (data) {
        console.log(data);
    };
    /**
     *
    **/
    CrudComponent.prototype.searh = function (data) {
        console.log(data);
    };
    CrudComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-crud',
            template: __webpack_require__(/*! ./crud.component.html */ "./src/app/components/dashboard/crud/crud.component.html"),
            styles: [__webpack_require__(/*! ./crud.component.css */ "./src/app/components/dashboard/crud/crud.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            src_app_services_tendoo_service__WEBPACK_IMPORTED_MODULE_2__["TendooService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]])
    ], CrudComponent);
    return CrudComponent;
}());



/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#aside-nav-list {\r\n    padding: 0%;\r\n}\r\nmat-list-item div > div > i {\r\n    margin-right: 16px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0NBQ2Y7QUFDRDtJQUNJLG1CQUFtQjtDQUN0QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2FzaWRlLW5hdi1saXN0IHtcclxuICAgIHBhZGRpbmc6IDAlO1xyXG59XHJcbm1hdC1saXN0LWl0ZW0gZGl2ID4gZGl2ID4gaSB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDE2cHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\" fxFill>\r\n    <div>\r\n        <mat-toolbar color=\"primary\" fxFlex fxLayoutAlign=\"space-between center\">\r\n            <div [fxFlex]=\"logoWidth + 'px'\" fxLayout=\"row\" \r\n                fxLayoutAlign.xl=\"center center\"\r\n                fxLayoutAlign.lg=\"center center\"\r\n                >\r\n                <span *ngIf=\"showDefaultAside\">TRex Server</span>\r\n                <span *ngIf=\"! showDefaultAside\">TRex</span>\r\n            </div>\r\n            <div>\r\n                <button mat-icon-button [matMenuTriggerFor]=\"profileMenu\">\r\n                    <mat-icon aria-label=\"Example icon-button with a heart icon\">person</mat-icon>\r\n                </button>\r\n                <mat-menu #profileMenu=\"matMenu\">\r\n                    <button routerLink=\"/dashboard/profile\" mat-menu-item>Profile</button>\r\n                    <button routerLink=\"/auth/logout\" mat-menu-item>Logout</button>\r\n                </mat-menu>\r\n            </div>\r\n        </mat-toolbar>\r\n    </div>\r\n    \r\n    <div fxFlex fxLayout=\"row\">\r\n        <ng-container *ngIf=\"showDefaultAside\">\r\n            <div fxFlex=\"250px\"  fxLayout=\"column\" class=\"aside-menu\">\r\n                <div fxFlex>\r\n                    <app-menu-list [menus]=\"asideMenus\"></app-menu-list>\r\n                </div>    \r\n            </div>\r\n            <mat-divider [vertical]=\"true\"></mat-divider>\r\n        </ng-container>\r\n        <div fxFlex=\"auto\" fxLayout=\"column\">\r\n            <router-outlet></router-outlet>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.ts ***!
  \*************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_tendoo_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/tendoo.service */ "./src/app/services/tendoo.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_classes_core_event_class__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/classes/core-event.class */ "./src/app/classes/core-event.class.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(tendoo, snackbar, mediaObserver, router, coreEvent) {
        var _this = this;
        this.tendoo = tendoo;
        this.snackbar = snackbar;
        this.mediaObserver = mediaObserver;
        this.router = router;
        this.coreEvent = coreEvent;
        this.asideMenus = [];
        this.showDefaultAside = true;
        this.logoWidth = 0;
        this.mediaObserver.media$.subscribe(function (media) {
            switch (media.mqAlias) {
                case 'xs':
                case 'sm':
                    _this.showDefaultAside = false;
                    _this.logoWidth = 80;
                    break;
                default:
                    _this.showDefaultAside = true;
                    _this.logoWidth = (250 - (16 * 2));
                    break;
            }
        });
        this.coreEvent.subscribe(function (event) {
            if (['module.enabled', 'module.deleted', 'module.disabled'].includes(event.type)) {
                _this.ngOnInit();
            }
        });
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.tendoo.menus.getMenus('dashboard.aside').subscribe(function (menus) {
            _this.asideMenus = menus;
        }, function (error) {
            _this.snackbar.open('Unable to load the dashboard aside bar');
        });
    };
    /**
     * Open/close current menu
     * @param object menu
     * @todo probably a bad pratice
     */
    DashboardComponent.prototype.toggle = function (index) {
        this.asideMenus.forEach(function (menu, __index) {
            if (__index === index) {
                menu.open = menu.open ? !menu.open : true;
            }
            else {
                menu.open = false;
            }
        });
    };
    /**
     * Close All menus
     * @return void
     */
    DashboardComponent.prototype.closeAll = function () {
        this.asideMenus.forEach(function (menu) {
            menu.open = false;
        });
    };
    /**
     * GoTo
     * @return void
     */
    DashboardComponent.prototype.goTo = function (menu) {
        // navigate to the menu path
        this.router.navigateByUrl(menu.href);
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/components/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/components/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_tendoo_service__WEBPACK_IMPORTED_MODULE_1__["TendooService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["MediaObserver"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            src_app_classes_core_event_class__WEBPACK_IMPORTED_MODULE_5__["CoreEvent"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/components/dashboard/home/home.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/dashboard/home/home.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\r\n    height: 100%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9kYXNoYm9hcmQvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0NBQ2hCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9kYXNoYm9hcmQvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/dashboard/home/home.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/dashboard/home/home.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxFill fxFlex=\"row\" class=\"bg-content\">\r\n    Hellow\r\n</div>"

/***/ }),

/***/ "./src/app/components/dashboard/home/home.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/dashboard/home/home.component.ts ***!
  \*************************************************************/
/*! exports provided: DashboardHomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardHomeComponent", function() { return DashboardHomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashboardHomeComponent = /** @class */ (function () {
    function DashboardHomeComponent() {
    }
    DashboardHomeComponent.prototype.ngOnInit = function () {
    };
    DashboardHomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/dashboard/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/components/dashboard/home/home.component.css")],
        }),
        __metadata("design:paramtypes", [])
    ], DashboardHomeComponent);
    return DashboardHomeComponent;
}());



/***/ }),

/***/ "./src/app/components/dashboard/medias-upload/medias-upload.component.css":
/*!********************************************************************************!*\
  !*** ./src/app/components/dashboard/medias-upload/medias-upload.component.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\r\n    height: 100%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9kYXNoYm9hcmQvbWVkaWFzLXVwbG9hZC9tZWRpYXMtdXBsb2FkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0NBQ2hCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9kYXNoYm9hcmQvbWVkaWFzLXVwbG9hZC9tZWRpYXMtdXBsb2FkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/dashboard/medias-upload/medias-upload.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/components/dashboard/medias-upload/medias-upload.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\" fxFlex=\"100%\" style=\"overflow-y:auto\">\n    <!-- <mat-progress-bar color=\"warn\" style=\"height: 2px; position: absolute\" *ngIf=\"tendoo.users.isLoading\" mode=\"indeterminate\"></mat-progress-bar> -->\n    <div fxLayout=\"row\" class=\"bg-content p-3 pb-0\">\n        <div fxFlex>\n            <h1 class=\"mat-display-1 mb-0\">Media</h1>\n            <small class=\"mat-title\">upload a new file</small>\n        </div>\n        <div fxFlex fxLayoutAlign=\"end start\">\n            <div>\n                <button mat-button [routerLink]=\"'/dashboard/medias'\">Back</button>\n            </div>\n        </div>    \n    </div>\n    <div fxFlex class=\"bg-content p-3\" fxFlexLayout=\"row\" fxLayoutAlign=\"center center\">\n        <div fxLayout=\"column\" fxFlex.lg=\"40%\" fxFlex.md=\"40%\" fxFlex.xl=\"40%\" id=\"drag-zone\">\n            <mat-card [fxFlex]=\"dragState === 'over' ? '100px': 'auto'\">\n                <mat-card-content>\n                    <h3>{{ dragMessage }}</h3>\n                    <dropzone [config]=\"dropzoneConfig\" [message]=\"dragMessage\"></dropzone>\n                </mat-card-content>\n            </mat-card>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/components/dashboard/medias-upload/medias-upload.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/components/dashboard/medias-upload/medias-upload.component.ts ***!
  \*******************************************************************************/
/*! exports provided: MediasUploadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MediasUploadComponent", function() { return MediasUploadComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_tendoo_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/tendoo.service */ "./src/app/services/tendoo.service.ts");
/* harmony import */ var src_app_services_loader_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/loader.service */ "./src/app/services/loader.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MediasUploadComponent = /** @class */ (function () {
    function MediasUploadComponent(tendoo) {
        this.tendoo = tendoo;
    }
    MediasUploadComponent.prototype.ngOnInit = function () {
        this.dropzoneConfig = {
            url: this.tendoo.medias.baseUrl + "tendoo/medias",
            maxFilesize: 50,
            headers: src_app_services_loader_service__WEBPACK_IMPORTED_MODULE_2__["LoaderService"].headers
        };
        this.setDragState();
    };
    MediasUploadComponent.prototype.setDragState = function (state) {
        switch (state) {
            case 'over':
                this.dragMessage = 'Drop the file to upload it...';
                break;
            default:
                this.dragMessage = 'Click here if you want to select a file';
                break;
        }
        this.dragState = state;
    };
    MediasUploadComponent.prototype.preventDefault = function (e) {
        e.preventDefault();
        e.stopPropagation();
        this.setDragState('over');
    };
    MediasUploadComponent.prototype.handleDrop = function (event) {
        event.preventDefault();
    };
    MediasUploadComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-medias-upload',
            template: __webpack_require__(/*! ./medias-upload.component.html */ "./src/app/components/dashboard/medias-upload/medias-upload.component.html"),
            styles: [__webpack_require__(/*! ./medias-upload.component.css */ "./src/app/components/dashboard/medias-upload/medias-upload.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_tendoo_service__WEBPACK_IMPORTED_MODULE_1__["TendooService"]])
    ], MediasUploadComponent);
    return MediasUploadComponent;
}());



/***/ }),

/***/ "./src/app/components/dashboard/medias/medias.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/dashboard/medias/medias.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\r\n    height: 100%;\r\n}\r\n\r\n.mat-grid-tile {\r\n    border: solid 1px #EFEFEF;\r\n    background: #EFEFEF;\r\n}\r\n\r\n.overlay {\r\n    width: 100%;\r\n    height: 100%;\r\n    position: absolute;\r\n    background: rgba(51, 51, 51, 0.29);\r\n    top: 0;\r\n    left: 0;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9kYXNoYm9hcmQvbWVkaWFzL21lZGlhcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtDQUNoQjs7QUFFRDtJQUNJLDBCQUEwQjtJQUMxQixvQkFBb0I7Q0FDdkI7O0FBRUQ7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixtQ0FBbUM7SUFDbkMsT0FBTztJQUNQLFFBQVE7Q0FDWCIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZGFzaGJvYXJkL21lZGlhcy9tZWRpYXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLm1hdC1ncmlkLXRpbGUge1xyXG4gICAgYm9yZGVyOiBzb2xpZCAxcHggI0VGRUZFRjtcclxuICAgIGJhY2tncm91bmQ6ICNFRkVGRUY7XHJcbn1cclxuXHJcbi5vdmVybGF5IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSg1MSwgNTEsIDUxLCAwLjI5KTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/dashboard/medias/medias.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/dashboard/medias/medias.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\" fxFlex=\"100%\" style=\"overflow-y:auto\">\n    <!-- <mat-progress-bar color=\"warn\" style=\"height: 2px; position: absolute\" *ngIf=\"tendoo.users.isLoading\" mode=\"indeterminate\"></mat-progress-bar> -->\n    <div fxLayout=\"row\" fxFlex=\"0 0 auto\" class=\"bg-content p-3 pb-0\">\n        <div fxFlex>\n            <h1 class=\"mat-display-1 mb-0\">Media</h1>\n            <small class=\"mat-title\">display all the medias by type</small>\n        </div>\n        <div fxFlex fxLayoutAlign=\"end start\">\n            <div>\n                <button mat-button [routerLink]=\"'/dashboard/medias/upload'\">Upload</button>\n            </div>\n        </div>    \n    </div>\n    <div fxFlex *ngIf=\"medias.length === 0\" class=\"p-3 bg-content\" fxLayoutAlign=\"center center\">\n        <span>It seems quite empty right here. <a routerLink=\"/dashboard/medias/upload\">Upload new content ?</a></span>\n    </div>\n    <div fxFlex *ngIf=\"medias.length > 0\" class=\"p-3 bg-content\">\n        <mat-card class=\"p-0\">\n            <mat-card-title class=\"p-1 mb-0\">\n                <div fxFlex fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n                    <div fxLayoutAlign=\"start center\">\n                        <button *ngIf=\"selectedMediasCount > 0\" (click)=\"reset()\" mat-icon-button color=\"warn\">\n                            <mat-icon>arrow_back</mat-icon>\n                        </button>\n                        <span *ngIf=\"selectedMediasCount > 0\">\n                            {{ selectedMediasCount }} <span>selected</span>\n                        </span>\n                    </div>\n                    <div>\n                        <button *ngIf=\"selectedMediasCount > 0\" (click)=\"deleteSelected()\" mat-icon-button color=\"warn\">\n                            <mat-icon>delete</mat-icon>\n                        </button>\n                        <button (click)=\"selectAll()\" mat-icon-button color=\"primary\">\n                            <mat-icon>check</mat-icon>\n                        </button>\n                    </div>\n                </div>\n            </mat-card-title>\n            <mat-divider></mat-divider>\n            <div class=\"p-2\">\n                <mat-grid-list [cols]=\"gridCols\" gutterSize=\"1em\" rowHeight=\"140px\">\n                    <mat-grid-tile\n                        (mousedown)=\"handle( media )\"\n                        (mouseup)=\"cancelBulkSelect()\"\n                        (click)=\"openSingle( media )\"\n                        *ngFor=\"let media of medias\"\n                        [colspan]=\"1\"\n                        [rowspan]=\"1\">\n                        <div *ngIf=\"[ 'zip' ].indexOf( media.extension ) === -1\">\n                            <img [src]=\"media.sizes.thumb\" [alt]=\"media.name\">\n                        </div>\n                        <div *ngIf=\"[ 'zip' ].indexOf( media.extension ) !== -1\">\n                            <mat-icon>archive</mat-icon>\n                        </div>\n                        <div class=\"overlay\" fxLayoutAlign=\"end start\" *ngIf=\"media.selected\">\n                            <i class=\"material-icons m-1\" style=\"color: white\">\n                            check_circle\n                            </i>\n                        </div>\n                    </mat-grid-tile>\n                </mat-grid-list>\n            </div>\n        </mat-card>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/components/dashboard/medias/medias.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/dashboard/medias/medias.component.ts ***!
  \*****************************************************************/
/*! exports provided: MediasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MediasComponent", function() { return MediasComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_tendoo_medias_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/tendoo-medias.service */ "./src/app/services/tendoo-medias.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_app_shared_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/confirm-dialog/confirm-dialog.component */ "./src/app/shared/confirm-dialog/confirm-dialog.component.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MediasComponent = /** @class */ (function () {
    function MediasComponent(mediaService, dialog, snackbar, mediaObserver) {
        this.mediaService = mediaService;
        this.dialog = dialog;
        this.snackbar = snackbar;
        this.mediaObserver = mediaObserver;
        this.medias = [];
        this.bulkSelectEnabled = false;
        this.hasJustEnabled = false;
        this.gridCols = 5;
    }
    MediasComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loadMedias();
        this.mediaObserver.media$.subscribe(function (result) {
            console.log(result.mqAlias);
            switch (result.mqAlias) {
                case 'xs':
                    _this.gridCols = 2;
                    break;
                case 'md':
                    _this.gridCols = 4;
                    break;
                case 'sm':
                    _this.gridCols = 3;
                    break;
                case 'lg':
                    _this.gridCols = 6;
                    break;
                case 'xl':
                    _this.gridCols = 8;
                    break;
            }
        });
    };
    /**
     * init by loading the medias
     * @return void
     */
    MediasComponent.prototype.loadMedias = function () {
        var _this = this;
        Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["forkJoin"])([
            this.mediaService.getMedias()
        ]).subscribe(function (results) {
            _this.pagination = results[0];
            _this.medias = _this.pagination.data.map(function (media) {
                media.selected = false;
                return media;
            });
        });
    };
    /**
     * watch bulk select or open media
     * @param Media object to select
     * @return void
     */
    MediasComponent.prototype.handle = function (media) {
        var _this = this;
        if (!this.bulkSelectEnabled) {
            this.bulkSelectTimeout = setTimeout(function () {
                _this.bulkSelectEnabled = true;
                _this.hasJustEnabled = true;
                _this.toggleSelected(media);
            }, 700);
        }
        else {
            this.hasJustEnabled = false;
        }
    };
    MediasComponent.prototype.reset = function () {
        this.medias.forEach(function (media) { return media.selected = false; });
        this.bulkSelectEnabled = false;
        this.hasJustEnabled = false;
    };
    MediasComponent.prototype.cancelBulkSelect = function () {
        console.log('has canceled');
        clearTimeout(this.bulkSelectTimeout);
    };
    MediasComponent.prototype.toggleSelected = function (media) {
        media.selected = media.selected === undefined ? true : !media.selected;
        /**
         * if no more medias are selected
         * let's disable the selectedMediasCount
         */
        if (this.selectedMediasCount === 0) {
            this.bulkSelectEnabled = false;
        }
    };
    /**
     * Redirect to a single page where a media can
     * be managed
     * @param media object media
     */
    MediasComponent.prototype.openSingle = function (media) {
        if (!this.bulkSelectEnabled) {
            console.log('should redirect');
        }
        else if (!this.hasJustEnabled) {
            this.toggleSelected(media);
        }
    };
    /**
     * allow to select all displayed
     * medias.
     */
    MediasComponent.prototype.selectAll = function () {
        this.medias.forEach(function (media) { return media.selected = true; });
        this.bulkSelectEnabled = true;
        this.hasJustEnabled = false;
    };
    MediasComponent.prototype.deleteSelected = function () {
        var _this = this;
        this.dialog.open(src_app_shared_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_4__["ConfirmDialogComponent"], {
            id: 'delete.medias',
            width: '50%',
            height: '30%',
            data: {
                title: 'Confirm Your Action',
                message: this.selectedMediasCount == 1 ?
                    'Would you like to delete this image ?' :
                    'Would you like to delete the # selected images ?'.replace('#', this.selectedMediasCount.toString()),
                buttons: [
                    {
                        label: 'Yes',
                        namespace: 'confirm',
                        onClick: function () {
                            _this.confirmDeleteSelected();
                        }
                    }, {
                        label: 'No',
                        namespace: 'no',
                        onClick: function () {
                            _this.dialog.getDialogById('delete.medias').close();
                        }
                    }
                ]
            }
        });
    };
    MediasComponent.prototype.confirmDeleteSelected = function () {
        var _this = this;
        this.mediaService.deleteMedia(this.selectedMedias).subscribe(function (result) {
            _this.snackbar.open(result.message, 'OK', { duration: 3000 });
            _this.dialog.getDialogById('delete.medias').close();
            _this.loadMedias();
        }, function (error) {
            _this.snackbar.open('An error has occured', null, { duration: 4000 });
            _this.dialog.getDialogById('delete.medias').close();
        });
    };
    Object.defineProperty(MediasComponent.prototype, "selectedMediasCount", {
        /**
         * Computed property to a count of
         * selected medias.
         * @return number
         */
        get: function () {
            return this.selectedMedias.length;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MediasComponent.prototype, "selectedMedias", {
        /**
         * Computed property to get all
         * selected medias
         * @return Media[]
         */
        get: function () {
            return this.medias.filter(function (media) { return media.selected; });
        },
        enumerable: true,
        configurable: true
    });
    MediasComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-medias',
            template: __webpack_require__(/*! ./medias.component.html */ "./src/app/components/dashboard/medias/medias.component.html"),
            styles: [__webpack_require__(/*! ./medias.component.css */ "./src/app/components/dashboard/medias/medias.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_tendoo_medias_service__WEBPACK_IMPORTED_MODULE_1__["TendooMediasService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["MediaObserver"]])
    ], MediasComponent);
    return MediasComponent;
}());



/***/ }),

/***/ "./src/app/components/dashboard/modules-upload/modules-upload.component.css":
/*!**********************************************************************************!*\
  !*** ./src/app/components/dashboard/modules-upload/modules-upload.component.css ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\r\n    height: 100%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9kYXNoYm9hcmQvbW9kdWxlcy11cGxvYWQvbW9kdWxlcy11cGxvYWQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7Q0FDaEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2Rhc2hib2FyZC9tb2R1bGVzLXVwbG9hZC9tb2R1bGVzLXVwbG9hZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/components/dashboard/modules-upload/modules-upload.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/components/dashboard/modules-upload/modules-upload.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\" fxFlex=\"100%\">\r\n    <mat-progress-bar color=\"warn\" style=\"height: 2px; position: relative;margin-bottom: -2px\" *ngIf=\"tendoo.modules.isLoading\" mode=\"indeterminate\"></mat-progress-bar>\r\n    <div fxLayout=\"row\" class=\"bg-content p-3\">\r\n        <div fxFlex>\r\n            <h1 class=\"mat-display-1 mb-0\">Upload a module</h1>\r\n            <span class=\"mat-headline\">improve or adjust features.</span>\r\n        </div>\r\n        <div fxFlex=\"200px\" fxLayoutAlign=\"end start\">\r\n            <button routerLink=\"/dashboard/modules\" mat-button color=\"warn\">List of modules</button>\r\n        </div>\r\n    </div>\r\n    <div class=\"p-3 pt-0 bg-content\" fxFlex>\r\n        <mat-card>\r\n            <mat-card-title>Upload a file</mat-card-title>\r\n            <mat-card-content>\r\n                <p>choose the file you would like to upload on Tendoo CMS</p>\r\n                <input (change)=\"handleFileInput($event.target.files)\" type=\"file\" name=\"\" id=\"\">\r\n            </mat-card-content>\r\n            <mat-card-actions>\r\n                <button [disabled]=\"tendoo.modules.isLoading\" (click)=\"upload()\" mat-button color=\"primary\">Upload</button>\r\n            </mat-card-actions>\r\n        </mat-card>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/dashboard/modules-upload/modules-upload.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/components/dashboard/modules-upload/modules-upload.component.ts ***!
  \*********************************************************************************/
/*! exports provided: ModulesUploadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModulesUploadComponent", function() { return ModulesUploadComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/confirm-dialog/confirm-dialog.component */ "./src/app/shared/confirm-dialog/confirm-dialog.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_app_services_responsive_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/responsive.service */ "./src/app/services/responsive.service.ts");
/* harmony import */ var src_app_services_tendoo_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/tendoo.service */ "./src/app/services/tendoo.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ModulesUploadComponent = /** @class */ (function () {
    function ModulesUploadComponent(dialog, responsive, snackbar, tendoo, router) {
        this.dialog = dialog;
        this.responsive = responsive;
        this.snackbar = snackbar;
        this.tendoo = tendoo;
        this.router = router;
    }
    ModulesUploadComponent.prototype.ngOnInit = function () {
    };
    ModulesUploadComponent.prototype.handleFileInput = function (file) {
        this.file = file;
    };
    /**
     * Trigger when the user want's to upload
     * a module
     * @return void
     */
    ModulesUploadComponent.prototype.upload = function () {
        var _this = this;
        if (this.file === undefined || this.file.length === 0) {
            return this.snackbar.open('You need to select a file before uploading.', null, {
                duration: 3000
            });
        }
        this.dialog.open(src_app_shared_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_1__["ConfirmDialogComponent"], {
            id: 'upload.module',
            data: {
                title: 'Would you like to confirm ?',
                message: 'Would you like to upload this module.',
                buttons: [{
                        label: 'Ok',
                        onClick: function () {
                            _this.dialog
                                .getDialogById('upload.module')
                                .close();
                            _this.handleUpload();
                        }
                    }, {
                        label: 'Cancel',
                        color: 'warn',
                        onClick: function () {
                            _this.dialog
                                .getDialogById('upload.module')
                                .close();
                        }
                    }]
            },
            height: this.responsive.define({
                lg: '60%',
                xl: '60%',
                md: '70%',
                sm: '70%',
                xs: '70%'
            }),
            width: this.responsive.define({
                lg: '60%',
                xl: '60%',
                md: '70%',
                sm: '70%',
                xs: '70%'
            }),
        });
    };
    /**
     * Handled uploaded file
     * @return void
     */
    ModulesUploadComponent.prototype.handleUpload = function () {
        var _this = this;
        this.tendoo.modules.uploadFile(this.file.item(0)).subscribe(function (result) {
            /**
             * check if a module require a migration
             */
            if (result.action === 'check-migration') {
            }
            _this.snackbar.open(result.message, null, {
                duration: 3000
            });
            _this.router.navigateByUrl('dashboard/modules');
        }, function (result) {
            /**
             * An erru ash occured, let's
             * display what happened
             */
            _this.snackbar.open(result.error.message, null, {
                duration: 5000
            });
        });
    };
    ModulesUploadComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-modules-upload',
            template: __webpack_require__(/*! ./modules-upload.component.html */ "./src/app/components/dashboard/modules-upload/modules-upload.component.html"),
            styles: [__webpack_require__(/*! ./modules-upload.component.css */ "./src/app/components/dashboard/modules-upload/modules-upload.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"],
            src_app_services_responsive_service__WEBPACK_IMPORTED_MODULE_3__["ResponsiveService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"],
            src_app_services_tendoo_service__WEBPACK_IMPORTED_MODULE_4__["TendooService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], ModulesUploadComponent);
    return ModulesUploadComponent;
}());



/***/ }),

/***/ "./src/app/components/dashboard/modules/modules.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/dashboard/modules/modules.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\r\n    height: 100%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9kYXNoYm9hcmQvbW9kdWxlcy9tb2R1bGVzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0NBQ2hCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9kYXNoYm9hcmQvbW9kdWxlcy9tb2R1bGVzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/dashboard/modules/modules.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/dashboard/modules/modules.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\" fxFlex=\"100%\">\r\n    <mat-progress-bar color=\"warn\" style=\"height: 2px; position: relative;margin-bottom: -2px\" *ngIf=\"tendoo.modules.isLoading\" mode=\"indeterminate\"></mat-progress-bar>\r\n    <div fxLayout=\"row\" class=\"bg-content p-3\">\r\n        <div fxFlex>\r\n            <h1 class=\"mat-h1 mb-0\">Modules</h1>\r\n            <span>Display and manage all available modules</span>\r\n        </div>\r\n        <div fxFlex=\"200px\" fxLayoutAlign=\"end start\">\r\n            <button routerLink=\"/dashboard/modules/upload\" mat-button color=\"warn\">Upload a module</button>\r\n        </div>\r\n    </div>\r\n    <div class=\"p-3 pt-0 bg-content\" fxFlex fxLayoutGap=\"3em\">\r\n        <div \r\n            style=\"height:150px\"\r\n            *ngFor=\"let module of modules\"\r\n            fxFlex.xs=\"100%\" \r\n            fxFlex.sm=\"50%\" \r\n            fxFlex.md=\"50%\" \r\n            fxFlex.lg=\"25%\" \r\n            fxFlex.xl=\"20%\">\r\n            <mat-card>\r\n                <mat-card-title>\r\n                    <h2 class=\"mat-h2\">{{ module.name }}</h2>\r\n                </mat-card-title>\r\n                <mat-card-content style=\"height: 50px;\">{{ module.description }}</mat-card-content>\r\n                <mat-divider></mat-divider>\r\n                <mat-card-actions>\r\n                    <div fxFill fxLayout=\"row\" fxLayoutAlign=\"space-between\" fxFlex=\"0 0 auto\">\r\n                        <button class=\"m-0\" [disabled]=\"tendoo.modules.isLoading\" (click)=\"loadModules()\" mat-button color=\"primary\">Details</button>\r\n                        <button class=\"m-0\" [disabled]=\"tendoo.modules.isLoading\" *ngIf=\"module.enabled\" (click)=\"setStatus( module, 'disable' )\"  mat-button color=\"primary\">Disable</button>\r\n                        <button class=\"m-0\" [disabled]=\"tendoo.modules.isLoading\" *ngIf=\"! module.enabled\" (click)=\"setStatus( module, 'enable' )\"  mat-button color=\"accent\">Enable</button>\r\n                    </div>\r\n                </mat-card-actions>\r\n            </mat-card>\r\n        </div>\r\n        <div *ngIf=\"modules.length === 0\" fxFlex fxFill fxLayoutAlign=\"center center\">\r\n            <span>No module has been added yet. <a routerLink=\"/dashboard/modules/upload\"   >Upload a module ?</a></span>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/dashboard/modules/modules.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/dashboard/modules/modules.component.ts ***!
  \*******************************************************************/
/*! exports provided: ModulesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModulesComponent", function() { return ModulesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_tendoo_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/tendoo.service */ "./src/app/services/tendoo.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_app_shared_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/confirm-dialog/confirm-dialog.component */ "./src/app/shared/confirm-dialog/confirm-dialog.component.ts");
/* harmony import */ var src_app_services_responsive_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/responsive.service */ "./src/app/services/responsive.service.ts");
/* harmony import */ var src_app_classes_core_event_class__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/classes/core-event.class */ "./src/app/classes/core-event.class.ts");
/* harmony import */ var _migration_dialog_migration_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../migration-dialog/migration-dialog.component */ "./src/app/components/migration-dialog/migration-dialog.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ModulesComponent = /** @class */ (function () {
    function ModulesComponent(tendoo, snackbar, dialog, responsive, coreEvent) {
        this.tendoo = tendoo;
        this.snackbar = snackbar;
        this.dialog = dialog;
        this.responsive = responsive;
        this.coreEvent = coreEvent;
        this.modules = [];
    }
    ModulesComponent.prototype.ngOnInit = function () {
        this.loadModules();
    };
    ModulesComponent.prototype.loadModules = function () {
        var _this = this;
        this.tendoo.modules.getAll().subscribe(function (modules) {
            _this.modules = Object.values(modules);
        });
    };
    ModulesComponent.prototype.__deleteModule = function (module) {
        var _this = this;
        this.tendoo.modules.deleteModule(module.namespace).subscribe(function (result) {
            _this.snackbar.open(result.message);
            /**
             * emit a new event when a module
             * is deleted
             */
            _this.coreEvent.emit({
                type: 'module.deleted',
                data: module
            });
            _this.loadModules();
        }, function (result) {
            console.log(result);
        });
    };
    /**
     * delete a module
     * @return void
     */
    ModulesComponent.prototype.delete = function (module) {
        var _this = this;
        this.dialog.open(src_app_shared_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_3__["ConfirmDialogComponent"], {
            id: 'delete.module',
            data: {
                title: 'Confirm Your Action',
                message: 'Would you like to delete this module ? This action can\'t be cancelled.',
                buttons: [{
                        label: 'Ok',
                        onClick: function () {
                            _this.dialog
                                .getDialogById('delete.module')
                                .close();
                            _this.__deleteModule(module);
                        }
                    }, {
                        label: 'Cancel',
                        color: 'warn',
                        onClick: function () {
                            _this.dialog
                                .getDialogById('delete.module')
                                .close();
                        }
                    }]
            },
            height: this.responsive.define({
                lg: '30%',
                xl: '30%',
                md: '40%',
                sm: '60%',
                xs: '80%'
            }),
            width: this.responsive.define({
                lg: '40%',
                xl: '40%',
                md: '40%',
                sm: '70%',
                xs: '95%'
            }),
        });
    };
    /**
     * Change a module
     * status
     * @return void
     */
    ModulesComponent.prototype.setStatus = function (module, status) {
        switch (status) {
            case 'enable':
                this.__proceedEnableModule(module);
                break;
            case 'disable':
                this.__proceedDisableModule(module);
                break;
        }
    };
    /**
     * Proceed Enable Module
     * @return void
     */
    ModulesComponent.prototype.__proceedEnableModule = function (module) {
        var _this = this;
        this.dialog.open(src_app_shared_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_3__["ConfirmDialogComponent"], {
            data: {
                title: 'Please confirm your action',
                message: 'Would you like to enable this module ?',
                buttons: [
                    {
                        label: 'Yes',
                        namespace: 'yes',
                        onClick: function () {
                            _this.__enableModule(module);
                        }
                    }, {
                        label: 'No',
                        namespace: 'no',
                        onClick: function () {
                            _this.dialog
                                .getDialogById('confirm-enable-module')
                                .close();
                        }
                    }
                ]
            },
            id: 'confirm-enable-module'
        });
    };
    /**
     * Proceed Disable Module
     * @return void
     */
    ModulesComponent.prototype.__proceedDisableModule = function (module) {
        var _this = this;
        this.dialog.open(src_app_shared_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_3__["ConfirmDialogComponent"], {
            data: {
                title: 'Please confirm your action',
                message: 'Would you like to disable this module ?',
                buttons: [
                    {
                        label: 'Yes',
                        namespace: 'yes',
                        onClick: function () {
                            _this.__disableModule(module);
                        }
                    }, {
                        label: 'No',
                        namespace: 'no',
                        onClick: function () {
                            _this.dialog
                                .getDialogById('disable-enable-module')
                                .close();
                        }
                    }
                ]
            },
            id: 'disable-enable-module'
        });
    };
    /**
     * Enable module after
     * the action has been confirmed
     * @return void
     */
    ModulesComponent.prototype.__enableModule = function (module) {
        var _this = this;
        this.tendoo.modules.enable(module.namespace).subscribe(function (response) {
            /**
             * emit a new event when a module
             * is enabled
             */
            _this.coreEvent.emit({
                type: 'module.enabled',
                data: module
            });
            _this.loadModules();
            _this.dialog
                .getDialogById('confirm-enable-module')
                .close();
        }, function (result) {
            console.log(result);
            if (result.error.class === 'Tendoo/Core/Exceptions/ModuleMigrationRequiredException') {
                _this.dialog.open(_migration_dialog_migration_dialog_component__WEBPACK_IMPORTED_MODULE_6__["MigrationDialogComponent"], {
                    id: 'migration-dialog',
                    data: {
                        migration: result.error.migration
                    },
                    closeOnNavigation: false,
                    disableClose: true,
                });
            }
            else {
                _this.snackbar.open(result.error.message, null, {
                    duration: 4000
                });
            }
            _this.dialog
                .getDialogById('confirm-enable-module')
                .close();
        });
    };
    /**
     * Enable module after
     * the action has been confirmed
     * @return void
     */
    ModulesComponent.prototype.__disableModule = function (module) {
        var _this = this;
        this.tendoo.modules.disable(module.namespace).subscribe(function (response) {
            /**
             * emit a new event when a module
             * is disabled
             */
            _this.coreEvent.emit({
                type: 'module.disabled',
                data: module
            });
            _this.loadModules();
            _this.dialog
                .getDialogById('disable-enable-module')
                .close();
        }, function (result) {
            _this.snackbar.open(result.error.message, null, {
                duration: 4000
            });
            _this.dialog
                .getDialogById('disable-enable-module')
                .close();
        });
    };
    ModulesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-modules',
            template: __webpack_require__(/*! ./modules.component.html */ "./src/app/components/dashboard/modules/modules.component.html"),
            styles: [__webpack_require__(/*! ./modules.component.css */ "./src/app/components/dashboard/modules/modules.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_tendoo_service__WEBPACK_IMPORTED_MODULE_1__["TendooService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"],
            src_app_services_responsive_service__WEBPACK_IMPORTED_MODULE_4__["ResponsiveService"],
            src_app_classes_core_event_class__WEBPACK_IMPORTED_MODULE_5__["CoreEvent"]])
    ], ModulesComponent);
    return ModulesComponent;
}());



/***/ }),

/***/ "./src/app/components/dashboard/not-found/not-found.component.css":
/*!************************************************************************!*\
  !*** ./src/app/components/dashboard/not-found/not-found.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\r\n    height: 100%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9kYXNoYm9hcmQvbm90LWZvdW5kL25vdC1mb3VuZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtDQUNoQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZGFzaGJvYXJkL25vdC1mb3VuZC9ub3QtZm91bmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICAgIGhlaWdodDogMTAwJTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/dashboard/not-found/not-found.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/dashboard/not-found/not-found.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxFlex fxFill fxLayoutAlign=\"center center\" class=\"bg-content\">\n    <div fxFlex=\"400px\" class=\"text-center\">\n        <h1>You're Lost !</h1>\n        <p>The page you're looking for doesn't exists or is not handled by the system. Please call the police or the FBI, the earth is in danger.</p>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/components/dashboard/not-found/not-found.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/dashboard/not-found/not-found.component.ts ***!
  \***********************************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotFoundComponent = /** @class */ (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent.prototype.ngOnInit = function () {
    };
    NotFoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-not-found',
            template: __webpack_require__(/*! ./not-found.component.html */ "./src/app/components/dashboard/not-found/not-found.component.html"),
            styles: [__webpack_require__(/*! ./not-found.component.css */ "./src/app/components/dashboard/not-found/not-found.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NotFoundComponent);
    return NotFoundComponent;
}());



/***/ }),

/***/ "./src/app/components/dashboard/profile/profile.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/dashboard/profile/profile.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".avatar-image {\r\n    width: 100px;\r\n    border-radius: 50px;\r\n}\r\n.profile-container {\r\n    position: relative;\r\n    top: -53px;\r\n}\r\n.profile-background {\r\n    background: #EEE;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9kYXNoYm9hcmQvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2Isb0JBQW9CO0NBQ3ZCO0FBQ0Q7SUFDSSxtQkFBbUI7SUFDbkIsV0FBVztDQUNkO0FBQ0Q7SUFDSSxpQkFBaUI7Q0FDcEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2Rhc2hib2FyZC9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hdmF0YXItaW1hZ2Uge1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcclxufVxyXG4ucHJvZmlsZS1jb250YWluZXIge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdG9wOiAtNTNweDtcclxufVxyXG4ucHJvZmlsZS1iYWNrZ3JvdW5kIHtcclxuICAgIGJhY2tncm91bmQ6ICNFRUU7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/dashboard/profile/profile.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/dashboard/profile/profile.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\" fxFlex=\"100%\" style=\"overflow-y:auto\">\r\n    <div fxFlex=\"200px\" fxLayout=\"row\" class=\"bg-primary p-3\">\r\n        <div fxFlex fxLayout=\"row\">\r\n            <div style=\"margin-right: 20px\">\r\n                <img class=\"avatar-image\" src=\"http://laravel-5703.go/tendoo/assets/images/avatar.png\" alt=\"\">\r\n            </div>\r\n            <div>\r\n                <h1 class=\"mat-display-1 mb-0\">{{ auth.getUser().username }}</h1>\r\n                <span class=\"mat-title\">{{ auth.getUser().role.name }}</span>\r\n            </div>\r\n        </div>\r\n        <div fxFlex=\"200px\" fxLayoutAlign=\"end start\">\r\n        </div>\r\n    </div>\r\n    <div fxFlex fxLayout=\"row\" class=\"profile-background\" fxFill fxLayoutAlign=\"center\">\r\n        <div fxFlex=\"97%\" class=\"profile-container\">\r\n            <mat-card class=\"p-0\" *ngIf=\"tabs\">\r\n                <mat-card-title class=\"p-1 mb-0\">Profile Settings</mat-card-title>\r\n                <mat-divider></mat-divider>\r\n                <mat-card-content class=\"p-0\">\r\n                    <mat-tab-group (selectedIndexChange)=\"setTabActive($event)\">\r\n                        <mat-tab *ngFor=\"let tab of tabs\" [label]=\"tab.label\">\r\n                            <form [formGroup]=\"tab.form\">\r\n                                <div class=\"p-2\">\r\n                                    <app-fields *ngFor=\"let field of tab.fields\" [field]=\"field\" [group]=\"tab.form\"></app-fields>\r\n                                </div>\r\n                            </form>\r\n                        </mat-tab>\r\n                    </mat-tab-group>\r\n                </mat-card-content>\r\n                <mat-divider></mat-divider>\r\n                <mat-card-actions class=\"p-1 m-0\">\r\n                    <button mat-button (click)=\"saveTabSettings( activeTab )\" color=\"primary\">Save</button>\r\n                </mat-card-actions>\r\n            </mat-card>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/dashboard/profile/profile.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/dashboard/profile/profile.component.ts ***!
  \*******************************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_tendoo_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/tendoo.service */ "./src/app/services/tendoo.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_classes_validation_generator_class__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/classes/validation-generator.class */ "./src/app/classes/validation-generator.class.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(tendoo, snackbar) {
        this.tendoo = tendoo;
        this.snackbar = snackbar;
        this.auth = this.tendoo.auth;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["forkJoin"])(this.tendoo.tabs.getTabs('dashboard.profile')).subscribe(function (results) {
            _this.tabs = results[0];
            _this.tabs.forEach(function (tab, index) {
                index === 0 ? tab.active = true : tab.active = false;
                var fields = src_app_classes_validation_generator_class__WEBPACK_IMPORTED_MODULE_4__["ValidationGenerator"].buildFormControls(tab.fields);
                tab.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"](fields);
            });
        });
    };
    /**
     * set a tab as active
     * @param tab Tab Object
     * @return void
     */
    ProfileComponent.prototype.setTabActive = function (index) {
        this.tabs.forEach(function (_tab, _index) {
            _tab.active = false;
            if (index === _index) {
                _tab.active = true;
            }
        });
    };
    ProfileComponent.prototype.saveTabSettings = function (tab) {
        var _this = this;
        src_app_classes_validation_generator_class__WEBPACK_IMPORTED_MODULE_4__["ValidationGenerator"].touchAllFields(tab.form);
        if (!tab.form.valid) {
            return this.snackbar.open('Unable to proceed the form is not valid.', 'OK', {
                duration: 3000
            });
        }
        /**
         * Save the settings to the database
         */
        src_app_classes_validation_generator_class__WEBPACK_IMPORTED_MODULE_4__["ValidationGenerator"].deactivateFields(tab.fields);
        this.tendoo.forms
            .saveForm(this.activeTab.namespace, src_app_classes_validation_generator_class__WEBPACK_IMPORTED_MODULE_4__["ValidationGenerator"].noNullValue(tab.form)).subscribe(function (response) {
            /**
             * Enable back field and show success
             * message
             */
            src_app_classes_validation_generator_class__WEBPACK_IMPORTED_MODULE_4__["ValidationGenerator"].enableFields(tab.fields);
            _this.snackbar.open(response.message, 'OK', {
                duration: 3000
            });
        }, function (result) {
            src_app_classes_validation_generator_class__WEBPACK_IMPORTED_MODULE_4__["ValidationGenerator"].enableFields(tab.fields);
            src_app_classes_validation_generator_class__WEBPACK_IMPORTED_MODULE_4__["ValidationGenerator"].throwFieldsError(tab.form, tab.fields, result.error.errors);
            _this.snackbar.open(result.error.message, 'OK', {
                duration: 3000
            });
        });
    };
    Object.defineProperty(ProfileComponent.prototype, "activeTab", {
        /**
         * get active tab
         * @return object;
         */
        get: function () {
            return this.tabs.filter(function (tab) { return tab.active; })[0];
        },
        enumerable: true,
        configurable: true
    });
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/components/dashboard/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/components/dashboard/profile/profile.component.css")],
            host: {
                style: "height: 100%"
            }
        }),
        __metadata("design:paramtypes", [src_app_services_tendoo_service__WEBPACK_IMPORTED_MODULE_1__["TendooService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/components/dashboard/settings/settings.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/dashboard/settings/settings.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\r\n    height: 100%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9kYXNoYm9hcmQvc2V0dGluZ3Mvc2V0dGluZ3MuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7Q0FDaEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2Rhc2hib2FyZC9zZXR0aW5ncy9zZXR0aW5ncy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/components/dashboard/settings/settings.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/dashboard/settings/settings.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\" fxFlex=\"100%\" style=\"overflow-y:auto\">\r\n    <!-- <mat-progress-bar color=\"warn\" style=\"height: 2px; position: absolute\" *ngIf=\"tendoo.users.isLoading\" mode=\"indeterminate\"></mat-progress-bar> -->\r\n    <div fxLayout=\"row\" fxFlex=\"0 0 auto\" class=\"bg-content p-3 pb-0\">\r\n        <div fxFlex>\r\n            <h1 class=\"mat-display-1 mb-0\">Settings</h1>\r\n            <span class=\"mat-title\">configure how Tendoo CMS should be used</span>\r\n        </div>\r\n    </div>\r\n    <div class=\"p-3 bg-content\" fxFlex=\"1 0 auto\" fxLayout=\"column\">\r\n        <mat-card class=\"p-0\">\r\n            <mat-card-content>\r\n                <mat-tab-group (selectedIndexChange)=\"setTabActive($event)\">\r\n                    <mat-tab  *ngFor=\"let tab of tabs\" [label]=\"tab.label\">\r\n                        <div class=\"p-2\">\r\n                            <form [formGroup]=\"tab.form\">\r\n                                <app-fields *ngFor=\"let field of tab.fields\" [field]=\"field\" [group]=\"tab.form\"></app-fields>\r\n                            </form>\r\n                        </div>\r\n                    </mat-tab>\r\n                </mat-tab-group>\r\n            </mat-card-content>\r\n            <mat-divider></mat-divider>\r\n            <mat-card-actions class=\"p-1 m-0\">\r\n                <button [disabled]=\"tendoo.forms.isLoading\" mat-button (click)=\"saveSettings( activeTab )\" color=\"primary\">Save</button>\r\n            </mat-card-actions>\r\n        </mat-card>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/dashboard/settings/settings.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/dashboard/settings/settings.component.ts ***!
  \*********************************************************************/
/*! exports provided: SettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsComponent", function() { return SettingsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_tendoo_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/tendoo.service */ "./src/app/services/tendoo.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_classes_validation_generator_class__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/classes/validation-generator.class */ "./src/app/classes/validation-generator.class.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SettingsComponent = /** @class */ (function () {
    function SettingsComponent(tendoo, snackbar) {
        this.tendoo = tendoo;
        this.snackbar = snackbar;
    }
    SettingsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.tendoo.tabs.getTabs('dashboard.settings').subscribe(function (tabs) {
            tabs.forEach(function (tab, index) {
                index === 0 ? tab.active = true : tab.active = false;
                var fields = src_app_classes_validation_generator_class__WEBPACK_IMPORTED_MODULE_4__["ValidationGenerator"].buildFormControls(tab.fields);
                tab.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"](fields);
            });
            _this.tabs = tabs;
        });
    };
    /**
     * Save the current tab settings
     * @return any
     */
    SettingsComponent.prototype.saveSettings = function () {
        var _this = this;
        console.log(this.activeTab);
        src_app_classes_validation_generator_class__WEBPACK_IMPORTED_MODULE_4__["ValidationGenerator"].touchAllFields(this.activeTab.form);
        if (!this.activeTab.form.valid) {
            return this.snackbar.open('Unable to proceed, the form is invalid', 'OK', {
                duration: 3000
            });
        }
        /**
         * let's save the form
         * to the database
         */
        src_app_classes_validation_generator_class__WEBPACK_IMPORTED_MODULE_4__["ValidationGenerator"].deactivateFields(this.activeTab.fields);
        this.tendoo.forms
            .saveForm(this.activeTab.namespace, this.activeTab.form.value)
            .subscribe(function (result) {
            src_app_classes_validation_generator_class__WEBPACK_IMPORTED_MODULE_4__["ValidationGenerator"].enableFields(_this.activeTab.fields);
            _this.snackbar.open(result.message, 'OK', {
                duration: 3000
            });
        }, function (result) {
            src_app_classes_validation_generator_class__WEBPACK_IMPORTED_MODULE_4__["ValidationGenerator"].enableFields(_this.activeTab.fields);
            _this.snackbar.open(result.error.message);
        });
    };
    /**
     * set a tab as active
     * @param $event
     */
    SettingsComponent.prototype.setTabActive = function (index) {
        this.tabs.forEach(function (_tab, _index) {
            _tab.active = false;
            if (index === _index) {
                _tab.active = true;
            }
        });
        console.log(this.activeTab);
    };
    Object.defineProperty(SettingsComponent.prototype, "activeTab", {
        /**
         * get the current active tab
         */
        get: function () {
            return this.tabs.filter(function (tab) { return tab.active; })[0];
        },
        enumerable: true,
        configurable: true
    });
    SettingsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-settings',
            template: __webpack_require__(/*! ./settings.component.html */ "./src/app/components/dashboard/settings/settings.component.html"),
            styles: [__webpack_require__(/*! ./settings.component.css */ "./src/app/components/dashboard/settings/settings.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_tendoo_service__WEBPACK_IMPORTED_MODULE_1__["TendooService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"]])
    ], SettingsComponent);
    return SettingsComponent;
}());



/***/ }),

/***/ "./src/app/components/dashboard/users-create/users-create.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/components/dashboard/users-create/users-create.component.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\r\n    height: 100%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9kYXNoYm9hcmQvdXNlcnMtY3JlYXRlL3VzZXJzLWNyZWF0ZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtDQUNoQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZGFzaGJvYXJkL3VzZXJzLWNyZWF0ZS91c2Vycy1jcmVhdGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICAgIGhlaWdodDogMTAwJTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/dashboard/users-create/users-create.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/components/dashboard/users-create/users-create.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\" class=\"bg-content\" fxFlex=\"100%\" style=\"overflow-y:auto\">\r\n    <mat-progress-bar color=\"warn\" style=\"height: 2px; position: absolute\" *ngIf=\"tendoo.users.isLoading\" mode=\"indeterminate\"></mat-progress-bar>\r\n    <div fxLayout=\"row\" class=\"p-3 pb-0\">\r\n        <div fxFlex>\r\n            <h1 class=\"mat-display-1 mb-0\">Users</h1>\r\n            <span class=\"mat-title\">create new users</span>\r\n        </div>\r\n        <div fxFlex=\"200px\" fxLayoutAlign=\"end start\">\r\n            <button routerLink=\"/dashboard/users\" mat-button color=\"warn\">Back to users</button>\r\n        </div>\r\n    </div>\r\n    <div class=\"p-3\" fxLayout=\"row\" fxFlex=\"1 0 auto\" fxLayout=\"column\">\r\n        <mat-card>\r\n            <mat-card-title>\r\n                Create a new user\r\n            </mat-card-title>\r\n            <mat-card-content>\r\n                <form [formGroup]=\"form\" *ngIf=\"form\">\r\n                    <app-fields *ngFor=\"let field of fields\" [field]=\"field\" [group]=\"form\"></app-fields>\r\n                </form>\r\n            </mat-card-content>\r\n            <mat-divider></mat-divider>\r\n            <mat-card-actions>\r\n                <button [disabled]=\"tendoo.isLoading\" mat-button (click)=\"submit()\" color=\"primary\">Submit</button>\r\n            </mat-card-actions>\r\n        </mat-card>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/dashboard/users-create/users-create.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components/dashboard/users-create/users-create.component.ts ***!
  \*****************************************************************************/
/*! exports provided: UsersCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersCreateComponent", function() { return UsersCreateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_tendoo_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/tendoo.service */ "./src/app/services/tendoo.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var src_app_classes_validation_generator_class__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/classes/validation-generator.class */ "./src/app/classes/validation-generator.class.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var UsersCreateComponent = /** @class */ (function () {
    function UsersCreateComponent(tendoo, snackbar, router) {
        this.tendoo = tendoo;
        this.snackbar = snackbar;
        this.router = router;
        this.fields = [];
    }
    UsersCreateComponent.prototype.ngOnInit = function () {
        var _this = this;
        Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["forkJoin"])(this.tendoo.forms.getForm('dashboard.users.create')).subscribe(function (forkResult) {
            _this.fields = forkResult[0]['fields'];
            _this.formConfig = forkResult[0]['url'];
            var fields = src_app_classes_validation_generator_class__WEBPACK_IMPORTED_MODULE_3__["ValidationGenerator"].buildFormControls(_this.fields);
            _this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"](fields);
        });
    };
    /**
     * Submit the current form
     * @return void
     */
    UsersCreateComponent.prototype.submit = function () {
        var _this = this;
        src_app_classes_validation_generator_class__WEBPACK_IMPORTED_MODULE_3__["ValidationGenerator"].touchAllFields(this.form);
        if (!this.form.valid) {
            this.snackbar.open('The form has some error(s). Please check the form and try again.');
        }
        src_app_classes_validation_generator_class__WEBPACK_IMPORTED_MODULE_3__["ValidationGenerator"].deactivateFields(this.fields);
        this.tendoo.users.create(this.form.value).subscribe(function (result) {
            /**
             * enable back fields since they might be edited
             */
            src_app_classes_validation_generator_class__WEBPACK_IMPORTED_MODULE_3__["ValidationGenerator"].enableFields(_this.fields);
            _this.snackbar.open(result.message, 'OK', {
                duration: 4000
            });
            _this.router.navigateByUrl('dashboard/users');
        }, function (result) {
            /**
             * enable back fields since they might be edited
             */
            src_app_classes_validation_generator_class__WEBPACK_IMPORTED_MODULE_3__["ValidationGenerator"].enableFields(_this.fields);
            _this.snackbar.open(result.error.message, 'OK', {
                duration: 4000
            });
            /**
             * make sure to hightlight
             * the fields which has a problem
             */
            var errors = result.error.errors;
            var _loop_1 = function (error) {
                _this.form.get(error).setErrors({ error: true });
                _this.fields.forEach(function (field) {
                    if (field.name === error) {
                        field.errors = errors[field.name];
                    }
                });
            };
            for (var error in errors) {
                _loop_1(error);
            }
        });
    };
    UsersCreateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-users-create',
            template: __webpack_require__(/*! ./users-create.component.html */ "./src/app/components/dashboard/users-create/users-create.component.html"),
            styles: [__webpack_require__(/*! ./users-create.component.css */ "./src/app/components/dashboard/users-create/users-create.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_tendoo_service__WEBPACK_IMPORTED_MODULE_1__["TendooService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]])
    ], UsersCreateComponent);
    return UsersCreateComponent;
}());



/***/ }),

/***/ "./src/app/components/dashboard/users-edit/users-edit.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/components/dashboard/users-edit/users-edit.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZGFzaGJvYXJkL3VzZXJzLWVkaXQvdXNlcnMtZWRpdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/dashboard/users-edit/users-edit.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/components/dashboard/users-edit/users-edit.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\" class=\"bg-content\" fxFlex=\"100%\" style=\"overflow-y:auto\">\r\n    <mat-progress-bar color=\"warn\" style=\"height: 2px; position: absolute\" *ngIf=\"tendoo.isLoading\" mode=\"indeterminate\"></mat-progress-bar>\r\n    <div fxLayout=\"row\" class=\"p-3 pb-0\">\r\n        <div fxFlex>\r\n            <h1 class=\"mat-display-1 mb-0\">Users</h1>\r\n            <span class=\"mat-title\">create new users</span>\r\n        </div>\r\n        <div fxFlex=\"200px\" fxLayoutAlign=\"end start\">\r\n            <button routerLink=\"/dashboard/users\" mat-button color=\"warn\">Back to users</button>\r\n        </div>\r\n    </div>\r\n    <div class=\"p-2\" fxLayout=\"row\" fxFlex=\"1 0 auto\" fxLayout=\"row\">\r\n        <mat-card fxFlex>\r\n            <mat-card-title>\r\n                Edit a user\r\n            </mat-card-title>\r\n            <mat-card-content>\r\n                <form [formGroup]=\"form\" *ngIf=\"form\">\r\n                    <app-fields *ngFor=\"let field of fields\" [field]=\"field\" [group]=\"form\"></app-fields>\r\n                </form>\r\n            </mat-card-content>\r\n            <mat-divider></mat-divider>\r\n            <mat-card-actions>\r\n                <button [disabled]=\"tendoo.users.isLoading\" mat-button (click)=\"submit()\" color=\"primary\">Update</button>\r\n                <button [disabled]=\"tendoo.users.isLoading\" mat-button (click)=\"submit( true )\" color=\"primary\">Update & Return</button>\r\n            </mat-card-actions>\r\n        </mat-card>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/dashboard/users-edit/users-edit.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/dashboard/users-edit/users-edit.component.ts ***!
  \*************************************************************************/
/*! exports provided: UsersEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersEditComponent", function() { return UsersEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var src_app_services_tendoo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/tendoo.service */ "./src/app/services/tendoo.service.ts");
/* harmony import */ var src_app_classes_validation_generator_class__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/classes/validation-generator.class */ "./src/app/classes/validation-generator.class.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var UsersEditComponent = /** @class */ (function () {
    function UsersEditComponent(tendoo, activeRoute, snackbar, route) {
        this.tendoo = tendoo;
        this.activeRoute = activeRoute;
        this.snackbar = snackbar;
        this.route = route;
        this.fields = [];
    }
    UsersEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.id = +this.activeRoute.snapshot.paramMap.get('id');
        Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["forkJoin"])(this.tendoo.forms.getForm('dashboard.users.edit', this.id)).subscribe(function (forkResult) {
            _this.fields = forkResult[0]['fields'];
            _this.formConfig = forkResult[0]['url'];
            var fields = src_app_classes_validation_generator_class__WEBPACK_IMPORTED_MODULE_3__["ValidationGenerator"].buildFormControls(_this.fields);
            _this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"](fields);
        });
    };
    UsersEditComponent.prototype.submit = function (shouldReturn) {
        var _this = this;
        src_app_classes_validation_generator_class__WEBPACK_IMPORTED_MODULE_3__["ValidationGenerator"].touchAllFields(this.form);
        if (!this.form.valid) {
            this.snackbar.open('The form has some errors, please check it and try again ! ', 'OK', {
                duration: 4000
            });
        }
        this.tendoo.users.edit(this.id, this.form.value).subscribe(function (result) {
            _this.snackbar.open(result.message, 'OK', {
                duration: 3000
            });
            /**
             * if the user has requested, let's take him back where he has been
             */
            if (shouldReturn) {
                _this.route.navigateByUrl('/dashboard/users');
            }
        }, function (response) {
            _this.snackbar.open(response.error.message);
            /**
             * make sure to hightlight
             * the fields which has a problem
             */
            var errors = response.error.errors;
            var _loop_1 = function (error) {
                _this.form.get(error).setErrors({ error: true });
                _this.fields.forEach(function (field) {
                    if (field.name === error) {
                        field.errors = errors[field.name];
                    }
                });
            };
            for (var error in errors) {
                _loop_1(error);
            }
        });
    };
    UsersEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-users-edit',
            template: __webpack_require__(/*! ./users-edit.component.html */ "./src/app/components/dashboard/users-edit/users-edit.component.html"),
            styles: [__webpack_require__(/*! ./users-edit.component.css */ "./src/app/components/dashboard/users-edit/users-edit.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_tendoo_service__WEBPACK_IMPORTED_MODULE_2__["TendooService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], UsersEditComponent);
    return UsersEditComponent;
}());



/***/ }),

/***/ "./src/app/components/dashboard/users/users.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/dashboard/users/users.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\r\n    height: 100%;\r\n}\r\n#search-field {\r\n    height: 35px;\r\n    border-radius: 5px;\r\n    border: solid 1px #DDD;\r\n    background: #FFF;\r\n    width: 100%;\r\n    font-size: 18px;\r\n    padding: 0 10px;\r\n    margin-right: 10px;\r\n    margin-left: 10px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9kYXNoYm9hcmQvdXNlcnMvdXNlcnMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7Q0FDaEI7QUFDRDtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsa0JBQWtCO0NBQ3JCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9kYXNoYm9hcmQvdXNlcnMvdXNlcnMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG4jc2VhcmNoLWZpZWxkIHtcclxuICAgIGhlaWdodDogMzVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGJvcmRlcjogc29saWQgMXB4ICNEREQ7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRkZGO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBwYWRkaW5nOiAwIDEwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/dashboard/users/users.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/dashboard/users/users.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\" fxFlex=\"100%\" style=\"overflow-y:auto\">\r\n    <div fxLayout=\"row\" class=\"bg-content p-3 pb-0\">\r\n        <div fxFlex>\r\n            <h1 class=\"mat-display-1 mb-0\">Users</h1>\r\n            <span class=\"mat-title\">Displays and manage all registered users</span>\r\n        </div>\r\n    </div>\r\n    <div class=\"p-3 bg-content\" fxFlex=\"1 0 auto\" fxLayout=\"column\">\r\n        <mat-card class=\"p-0\">\r\n            <mat-card-title class=\"p-2 mb-0\" *ngIf=\"searchEnabled\" color=\"warn\">\r\n                <div fxFlex=\"100%\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n                    <button (click)=\"toggleSearch( false )\" mat-icon-button>\r\n                        <mat-icon>close</mat-icon>\r\n                    </button>\r\n                    <input id=\"search-field\" [placeholder]=\"tableConfig.search.placeholder\" type=\"text\" #searchField>\r\n                    <button (click)=\"search( searchField )\" mat-icon-button>\r\n                        <mat-icon>search</mat-icon>\r\n                    </button>\r\n                </div>\r\n            </mat-card-title>\r\n            <mat-card-title class=\"p-2 mb-0\" *ngIf=\"! searchEnabled\" fxLayoutAlign=\"space-between\">\r\n                <div fxFlex=\"100%\" *ngIf=\"! hasSelectedEntries\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n                    <button mat-icon-button routerLink=\"/dashboard/users/create\" mat-button color=\"primary\">\r\n                        <mat-icon>add</mat-icon>\r\n                    </button>\r\n                    <button mat-icon-button (click)=\"toggleSearch( true )\">\r\n                        <mat-icon>search</mat-icon>\r\n                    </button>\r\n                </div>\r\n                <div fxFlex=\"100%\" *ngIf=\"hasSelectedEntries\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n                    <div fxLayoutAlign=\"start center\" fxLayout=\"row\">\r\n                        <button (click)=\"cancel()\" mat-icon-button>\r\n                            <mat-icon>arrow_back</mat-icon>\r\n                        </button>\r\n                        <span style=\"padding: 5px 10px\">{{ selectedEntries.length }} selected</span>\r\n                    </div>\r\n                    <div>\r\n                        <button mat-icon-button color=\"primary\">\r\n                            <mat-icon>import_export</mat-icon>\r\n                        </button>\r\n                        <button (click)=\"deleteSelectedEntries()\" *ngIf=\"hasSelectedEntries\" mat-icon-button color=\"warn\">\r\n                            <mat-icon>delete</mat-icon>\r\n                        </button>\r\n                    </div>\r\n                </div>\r\n            </mat-card-title>\r\n            <mat-divider *ngIf=\"! tendoo.crud.isLoading\"></mat-divider>\r\n            <mat-progress-bar color=\"warn\" style=\"height: 1px;position: absolute;left: 0;\" *ngIf=\"tendoo.crud.isLoading\" mode=\"indeterminate\"></mat-progress-bar>\r\n            <mat-card-content>\r\n                <table matSort (matSortChange)=\"sortData($event)\" mat-table [dataSource]=\"crudResult[ 'data' ]\" fxFlex>\r\n                    <!--- Note that these columns can be defined in any order.\r\n                        The actual rendered columns are set as a property on the row definition\" -->\r\n                    <ng-container *ngFor=\"let column of columns\" [matColumnDef]=\"column\">\r\n                        <ng-container  *ngIf=\"column === 'id'\">\r\n                            <th mat-header-cell *matHeaderCellDef style=\"width: 40px\">\r\n                                <mat-checkbox class=\"example-margin\" (change)=\"checkAllCheckboxes()\" [(ngModel)]=\"checkAll\"></mat-checkbox>\r\n                            </th>\r\n                            <td mat-cell *matCellDef=\"let element\" style=\"width: 40px\">\r\n                                <mat-checkbox class=\"example-margin\" [(ngModel)]=\"element.$checked\"></mat-checkbox>\r\n                            </td>\r\n                        </ng-container>\r\n                        <ng-container *ngIf=\"column === '$actions'\">\r\n                            <th mat-header-cell *matHeaderCellDef width=\"80\">{{ rawColumns[ column ].label }}</th>\r\n                            <td mat-cell *matCellDef=\"let element\">\r\n                                <mat-menu #tableEntryMenu=\"matMenu\">\r\n                                    <button (click)=\"triggerMenu( menu, element )\" *ngFor=\"let menu of element.$actions\" mat-menu-item>{{ menu.label }}</button>\r\n                                </mat-menu>\r\n                                \r\n                                <button mat-icon-button [matMenuTriggerFor]=\"tableEntryMenu\">\r\n                                    <mat-icon>more_vert</mat-icon>\r\n                                </button>\r\n                            </td>\r\n                        </ng-container>    \r\n                        <ng-container *ngIf=\"reservedColumns.indexOf( column ) === -1\">\r\n                            <th [mat-sort-header]=\"column\" mat-header-cell *matHeaderCellDef>{{ rawColumns[ column ].label }}</th>\r\n                            <td mat-cell *matCellDef=\"let element\"> \r\n                                <!--\r\n                                    this help to replace the provided value with a replace value\r\n                                    provided on the column definition\r\n                                -->\r\n                                <ng-container *ngIf=\"rawColumns[ column ].replace !== undefined\">\r\n                                    <ng-container *ngIf=\"rawColumns[ column ].type === 'boolean'\">\r\n                                        <ng-container *ngIf=\"element[ column ] === false\">\r\n                                            {{ rawColumns[ column ].replace[0] }}\r\n                                        </ng-container>\r\n                                        <ng-container *ngIf=\"element[ column ] === true\">\r\n                                            {{ rawColumns[ column ].replace[1] }}\r\n                                        </ng-container>\r\n                                        <ng-container *ngIf=\"element[ column ] !== true && element[ column ] !== false\">\r\n                                            {{ rawColumns[ column ].replace[ '$default' ] ? rawColumns[ column ].replace[ '$default' ] : 'N/A' }}\r\n                                        </ng-container>\r\n                                    </ng-container>\r\n                                </ng-container>\r\n                                <ng-container *ngIf=\"rawColumns[ column ].replace === undefined\">\r\n                                    {{ element[ column ] }} \r\n                                </ng-container>\r\n                            </td>\r\n                        </ng-container>\r\n                    </ng-container>\r\n                    \r\n                    <tr mat-header-row *matHeaderRowDef=\"columns\"></tr>\r\n                    <tr mat-row *matRowDef=\"let row; columns: columns;\"></tr>\r\n                </table>\r\n            </mat-card-content>\r\n        </mat-card>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/dashboard/users/users.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/dashboard/users/users.component.ts ***!
  \***************************************************************/
/*! exports provided: UsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersComponent", function() { return UsersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_tendoo_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/tendoo.service */ "./src/app/services/tendoo.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_app_shared_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/confirm-dialog/confirm-dialog.component */ "./src/app/shared/confirm-dialog/confirm-dialog.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var UsersComponent = /** @class */ (function () {
    function UsersComponent(tendoo, router, dialog, snackbar) {
        this.tendoo = tendoo;
        this.router = router;
        this.dialog = dialog;
        this.snackbar = snackbar;
        this.columns = [];
        this.rawColumns = {};
        this.crudResult = {};
        this.searchEnabled = false;
        this.reservedColumns = ['$actions'];
        this.searchValue = '';
    }
    UsersComponent.prototype.ngOnInit = function () {
        this.tableConfig = {
            search: {
                placeholder: 'Search a user'
            }
        };
        this.loadUsers();
    };
    UsersComponent.prototype.serialize = function (obj) {
        var str = [];
        for (var p in obj) {
            if (obj.hasOwnProperty(p)) {
                str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
            }
        }
        return str.join('&');
    };
    UsersComponent.prototype.search = function (field) {
        var _this = this;
        if (field.value.length !== 0) {
            return this.tendoo.crud.getEntries('tendoo.dashboard.users', {
                search: field.value
            }).subscribe(function (entries) {
                _this.crudResult = entries;
            });
        }
        return this.snackbar.open('You need to input something to search.', 'OK', { duration: 3000 });
    };
    /**
     * init the users component
     * and load all data
     */
    UsersComponent.prototype.loadUsers = function () {
        var _this = this;
        Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["forkJoin"])(this.tendoo.crud.getEntries('tendoo.dashboard.users'), this.tendoo.crud.getColumns('tendoo.dashboard.users'))
            .subscribe(function (response) {
            _this.rawColumns = response[1];
            _this.columns = Object.keys(_this.rawColumns);
            _this.crudResult = response[0];
        });
    };
    UsersComponent.prototype.sortData = function (event) {
        var _this = this;
        this.tendoo
            .crud
            .getEntries('tendoo.dashboard.users', event)
            .subscribe(function (response) {
            _this.crudResult = response;
        });
    };
    /**
     * trigger menu
     * @param object menu
     * @return void
     */
    UsersComponent.prototype.triggerMenu = function (menu, row) {
        var _this = this;
        /**
         * build the url based on the
         * configuration.
         */
        var url = menu.url.replace("#", row[menu.index || 'id']);
        if (menu.confirm !== undefined) {
            console.log(menu.namespace);
            this.dialog.open(src_app_shared_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_5__["ConfirmDialogComponent"], {
                id: menu.namespace,
                data: {
                    title: menu.confirm.title,
                    message: menu.confirm.message,
                    buttons: [
                        {
                            label: 'Ok',
                            namespace: 'ok',
                            onClick: function () {
                                _this.__proceedAction(menu, url);
                            }
                        }, {
                            label: 'Cancel',
                            namespace: 'cancel',
                            onClick: function () {
                                _this.dialog.getDialogById(menu.namespace)
                                    .close();
                            }
                        }
                    ]
                }
            });
        }
        else {
            this.__proceedAction(menu, url);
        }
    };
    /**
     * Proceed action after having
     * checked if that action require a confirmation
     * @param object menu
     * @return void
     */
    UsersComponent.prototype.__proceedAction = function (menu, url) {
        var _this = this;
        switch (menu.type) {
            case 'DELETE':
                this.tendoo.delete(url).subscribe(function (result) {
                    _this.ngOnInit();
                    _this.dialog.getDialogById(menu.namespace).close();
                    return _this.snackbar.open(result.message, 'OK', {
                        duration: 4000
                    });
                }, function (result) {
                    _this.dialog.getDialogById(menu.namespace).close();
                    return _this.snackbar.open(result.error.message, 'OK', {
                        duration: 4000
                    });
                });
                break;
            case 'GET':
                this.tendoo.get(url);
                break;
            case 'GOTO':
                this.router.navigateByUrl(url);
                break;
        }
    };
    /**
     * Make sure to toggle all
     * checkboxes when the main checkbox
     * is clicked
     * @return void
     */
    UsersComponent.prototype.checkAllCheckboxes = function () {
        var _this = this;
        this.crudResult['data'].forEach(function (checkbox) {
            checkbox.$checked = _this.checkAll;
        });
    };
    /**
     * delete selected entries
     * @param entries
     * @return void
     */
    UsersComponent.prototype.deleteSelectedEntries = function (entries) {
        var _this = this;
        this.dialog.open(src_app_shared_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_5__["ConfirmDialogComponent"], {
            id: 'delete.all.popup',
            data: {
                title: 'Please Confirm Your Action',
                message: 'Would you like to delete all the selected users ? This action can\'t be canceled !',
                buttons: [
                    {
                        label: 'Delete',
                        namespace: 'delete.all',
                        onClick: function () {
                            _this.dialog.getDialogById('delete.all.popup').close();
                            var result = _this.confirmDeleteSelected();
                            /**
                             * if no error has been thrown
                             */
                            if (result instanceof rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"]) {
                                result.subscribe(function (response) {
                                    /**
                                     * reload the users to
                                     * reflect the changes
                                     */
                                    _this.loadUsers();
                                    _this.snackbar.open(response.message, 'OK', {
                                        duration: 3000
                                    });
                                }, function (result) {
                                    _this.snackbar.open(result.error.message);
                                });
                            }
                            else {
                                /**
                                 * this happen when there is a misconfiguration
                                 * of an entity, for instance TendooUsersService.
                                 */
                                _this.snackbar.open('A misconfiguration of an entity has occured ! ', 'OK', {
                                    duration: 10000
                                });
                            }
                        }
                    }, {
                        label: 'Cancel',
                        namespace: 'cancel',
                        onClick: function () {
                            _this.dialog.getDialogById('delete.all.popup').close();
                        }
                    }
                ]
            }
        });
    };
    /**
     * Confirm delete all selected entries
     * @return void
     */
    UsersComponent.prototype.confirmDeleteSelected = function () {
        return this.tendoo.crud.deleteBulkEntries('tendoo.dashboard.users', this.selectedEntries.map(function (entry) { return entry.id; }));
    };
    Object.defineProperty(UsersComponent.prototype, "hasSelectedEntries", {
        /**
         * get if it has a selected entries
         * @return boolean
         */
        get: function () {
            return this.selectedEntries.length > 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UsersComponent.prototype, "selectedEntries", {
        /**
         * return selected entries
         * @return array
         */
        get: function () {
            return this.crudResult['data'] !== undefined ? this.crudResult['data'].filter(function (entry) { return entry.$checked; }) : [];
        },
        enumerable: true,
        configurable: true
    });
    /**
     * canceled all selected entries
     * @return void
     */
    UsersComponent.prototype.cancel = function () {
        this.crudResult['data'].forEach(function (entry) { return entry.$checked = false; });
        this.checkAll = false;
    };
    /**
     * toggle search. Enable /disable according
     * to the provided parameter
     * @return void
     */
    UsersComponent.prototype.toggleSearch = function (param) {
        if (param) {
            this.searchEnabled = true;
            setTimeout(function () {
                document.getElementById('search-field').focus();
            }, 100);
        }
        else {
            this.searchEnabled = false;
            this.searchValue = '';
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('searchField'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], UsersComponent.prototype, "searchField", void 0);
    UsersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-users',
            template: __webpack_require__(/*! ./users.component.html */ "./src/app/components/dashboard/users/users.component.html"),
            styles: [__webpack_require__(/*! ./users.component.css */ "./src/app/components/dashboard/users/users.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_tendoo_service__WEBPACK_IMPORTED_MODULE_1__["TendooService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]])
    ], UsersComponent);
    return UsersComponent;
}());



/***/ }),

/***/ "./src/app/components/do-setup/application/application.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/components/do-setup/application/application.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZG8tc2V0dXAvYXBwbGljYXRpb24vYXBwbGljYXRpb24uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/do-setup/application/application.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/components/do-setup/application/application.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"applicationForm\">\r\n    <mat-card>\r\n        <mat-card-title>Configuring Application</mat-card-title>\r\n        <mat-divider></mat-divider>\r\n        <mat-card-content>\r\n            <p style=\"margin: 30px 0 20px\">The connexion with the database is successful. Now we need to setup the admin account.</p>\r\n            <app-fields [field]=\"field\" [group]=\"applicationForm\" *ngFor=\"let field of fields\"></app-fields>\r\n        </mat-card-content>\r\n        <mat-divider *ngIf=\"! setup.isLoading\"></mat-divider>\r\n        <mat-progress-bar *ngIf=\"setup.isLoading\" mode=\"indeterminate\" style=\"height: 1px;position: absolute;left: 0;\"></mat-progress-bar>\r\n        <mat-card-actions>\r\n            <button [disabled]=\"setup.isLoading\" (click)=\"setupApplication()\" mat-button>Setup Application</button>\r\n        </mat-card-actions>\r\n    </mat-card>\r\n</form>"

/***/ }),

/***/ "./src/app/components/do-setup/application/application.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/components/do-setup/application/application.component.ts ***!
  \**************************************************************************/
/*! exports provided: ApplicationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplicationComponent", function() { return ApplicationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_classes_validation_generator_class__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/classes/validation-generator.class */ "./src/app/classes/validation-generator.class.ts");
/* harmony import */ var src_app_services_setup_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/setup.service */ "./src/app/services/setup.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ApplicationComponent = /** @class */ (function () {
    function ApplicationComponent(setup, snackbar, router) {
        this.setup = setup;
        this.snackbar = snackbar;
        this.router = router;
        this.fields = [];
    }
    ApplicationComponent.prototype.ngOnInit = function () {
        this.fields = [
            {
                name: 'application_name',
                value: 'Tendoo CMS',
                type: 'text',
                validation: 'required',
                description: 'What will be the name of your new installation ?',
                label: 'Application Name'
            }, {
                name: 'username',
                value: 'admin',
                type: 'text',
                validation: 'required|min:5',
                description: 'What is the main account username ?',
                label: 'Username'
            }, {
                name: 'password',
                value: '',
                type: 'password',
                validation: 'required|min:6',
                description: 'Provide a unique and unpredictable password for the main user.',
                label: 'Password'
            }, {
                name: 'password_confirm',
                value: '',
                type: 'password',
                validation: 'required|matches:password',
                description: 'Must be the same as password.',
                label: 'Confirm'
            }, {
                name: 'email',
                value: '',
                type: 'email',
                validation: 'required|email',
                description: 'What is the email used for the main user ?',
                label: 'Email'
            }
        ];
        var fields = src_app_classes_validation_generator_class__WEBPACK_IMPORTED_MODULE_2__["ValidationGenerator"].buildFormControls(this.fields);
        this.applicationForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"](fields);
    };
    ApplicationComponent.prototype.setupApplication = function () {
        var _this = this;
        src_app_classes_validation_generator_class__WEBPACK_IMPORTED_MODULE_2__["ValidationGenerator"].touchAllFields(this.applicationForm);
        if (!this.applicationForm.valid) {
            return this.snackbar.open('Unable to proceed, the form has one or more errors.', null, {
                duration: 3000
            });
        }
        this.setup.application(this.applicationForm.value).subscribe(function (result) {
            _this.snackbar.open(result.message);
            _this.router.navigateByUrl('/auth/login');
        }, function (result) {
            _this.snackbar.open(result.error.message);
            _this.fields.forEach(function (field) {
                var formCtrl;
                if (result.error.errors[field.name] !== undefined) {
                    field.control.setErrors({ error: true });
                    field.errors = result.error.errors[field.name];
                }
            });
        });
    };
    ApplicationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-application',
            template: __webpack_require__(/*! ./application.component.html */ "./src/app/components/do-setup/application/application.component.html"),
            styles: [__webpack_require__(/*! ./application.component.css */ "./src/app/components/do-setup/application/application.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_setup_service__WEBPACK_IMPORTED_MODULE_3__["SetupService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], ApplicationComponent);
    return ApplicationComponent;
}());



/***/ }),

/***/ "./src/app/components/do-setup/database/database.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/components/do-setup/database/database.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZG8tc2V0dXAvZGF0YWJhc2UvZGF0YWJhc2UuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/do-setup/database/database.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/components/do-setup/database/database.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"setupForm\">\r\n    <mat-card>\r\n        <mat-card-title>Configuring Database</mat-card-title>\r\n        <mat-divider></mat-divider>\r\n        <mat-card-content>\r\n            <p style=\"margin: 30px 0 20px\">In order to install Tendoo CMS, please provide all the informations required to connect to the database.</p>\r\n            <app-fields [field]=\"field\" [group]=\"setupForm\" *ngFor=\"let field of fields\"></app-fields>\r\n        </mat-card-content>\r\n        <mat-divider *ngIf=\"! setup.isLoading\"></mat-divider>\r\n        <mat-progress-bar *ngIf=\"setup.isLoading\" mode=\"indeterminate\" style=\"height: 1px;position: absolute;left: 0;\"></mat-progress-bar>\r\n        <mat-card-actions>\r\n            <button [disabled]=\"setup.isLoading\" (click)=\"setupDatabase()\" mat-button>Setup Database</button>\r\n        </mat-card-actions>\r\n    </mat-card>\r\n</form>"

/***/ }),

/***/ "./src/app/components/do-setup/database/database.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/components/do-setup/database/database.component.ts ***!
  \********************************************************************/
/*! exports provided: DatabaseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatabaseComponent", function() { return DatabaseComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_classes_validation_generator_class__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/classes/validation-generator.class */ "./src/app/classes/validation-generator.class.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_app_services_setup_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/setup.service */ "./src/app/services/setup.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var DatabaseComponent = /** @class */ (function () {
    function DatabaseComponent(snackbar, setup, router) {
        this.snackbar = snackbar;
        this.setup = setup;
        this.router = router;
        this.fields = [];
    }
    DatabaseComponent.prototype.ngOnInit = function () {
        this.fields = [
            {
                appearance: 'fill',
                name: 'hostname',
                label: 'Host',
                description: 'provide a url to the host',
                type: 'text',
                validation: 'required',
                value: 'localhost',
            }, {
                appearance: 'fill',
                name: 'username',
                label: 'Username',
                description: 'provide a username for the host',
                type: 'text',
                validation: 'required',
                value: 'root',
            }, {
                appearance: 'fill',
                name: 'password',
                label: 'Password',
                description: 'provide a password for the host',
                type: 'password',
            }, {
                appearance: 'fill',
                name: 'db_name',
                label: 'Database',
                description: 'provide the database name',
                type: 'text',
                validation: 'required',
                value: 'laravel-ng'
            }, {
                appearance: 'fill',
                name: 'db_prefix',
                label: 'Tables Prefix',
                description: 'provide a unique table prefix',
                type: 'text',
                value: 'tendoo_'
            }
        ];
        var fields = src_app_classes_validation_generator_class__WEBPACK_IMPORTED_MODULE_2__["ValidationGenerator"].buildFormControls(this.fields);
        this.setupForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"](fields);
    };
    /**
     * Setup database
     * @return void
     */
    DatabaseComponent.prototype.setupDatabase = function () {
        src_app_classes_validation_generator_class__WEBPACK_IMPORTED_MODULE_2__["ValidationGenerator"].touchAllFields(this.setupForm);
        if (!this.setupForm.valid) {
            return this.snackbar.open('Unable to proceed, the database form is invalid !', null, {
                duration: 3000
            });
        }
        this.__submitForm();
    };
    /**
     * Submit Form
     * @return void
     */
    DatabaseComponent.prototype.__submitForm = function () {
        var _this = this;
        this.setup.setupDatabase(this.setupForm.value).subscribe(function (result) {
            _this.snackbar.open(result.message);
            _this.router.navigateByUrl('/do-setup/application');
        }, function (response) {
            _this.snackbar.open(response.error.message, null, {
                duration: 3000
            });
        });
    };
    DatabaseComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-database',
            template: __webpack_require__(/*! ./database.component.html */ "./src/app/components/do-setup/database/database.component.html"),
            styles: [__webpack_require__(/*! ./database.component.css */ "./src/app/components/do-setup/database/database.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"],
            src_app_services_setup_service__WEBPACK_IMPORTED_MODULE_4__["SetupService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], DatabaseComponent);
    return DatabaseComponent;
}());



/***/ }),

/***/ "./src/app/components/do-setup/do-setup.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/do-setup/do-setup.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZG8tc2V0dXAvZG8tc2V0dXAuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/do-setup/do-setup.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/do-setup/do-setup.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxFill fxLayout=\"row\" fxLayoutAlign=\"center center\" class=\"bg-content\">\r\n    <div \r\n        fxFlex.xs=\"90%\" \r\n        fxFlex.sm=\"70%\" \r\n        fxFlex.md=\"50%\" \r\n        fxFlex.lg=\"40%\" \r\n        fxFlex.xl=\"40%\">\r\n        <router-outlet></router-outlet>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/do-setup/do-setup.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/do-setup/do-setup.component.ts ***!
  \***********************************************************/
/*! exports provided: DoSetupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DoSetupComponent", function() { return DoSetupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DoSetupComponent = /** @class */ (function () {
    function DoSetupComponent() {
    }
    DoSetupComponent.prototype.ngOnInit = function () {
    };
    DoSetupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-do-setup',
            template: __webpack_require__(/*! ./do-setup.component.html */ "./src/app/components/do-setup/do-setup.component.html"),
            styles: [__webpack_require__(/*! ./do-setup.component.css */ "./src/app/components/do-setup/do-setup.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DoSetupComponent);
    return DoSetupComponent;
}());



/***/ }),

/***/ "./src/app/components/do-setup/setup-home/setup-home.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/components/do-setup/setup-home/setup-home.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZG8tc2V0dXAvc2V0dXAtaG9tZS9zZXR1cC1ob21lLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/do-setup/setup-home/setup-home.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/components/do-setup/setup-home/setup-home.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\r\n    <mat-card-title>Welcome on Tendoo CMS</mat-card-title>\r\n    <mat-card-content>\r\n        Tendoo CMS is ready to be installed. Let's get started\r\n    </mat-card-content>\r\n    <mat-divider></mat-divider>\r\n    <mat-card-actions>\r\n        <a routerLink=\"/do-setup/database\" mat-button>Database Configuration</a>\r\n    </mat-card-actions>\r\n</mat-card>"

/***/ }),

/***/ "./src/app/components/do-setup/setup-home/setup-home.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/components/do-setup/setup-home/setup-home.component.ts ***!
  \************************************************************************/
/*! exports provided: SetupHomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetupHomeComponent", function() { return SetupHomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SetupHomeComponent = /** @class */ (function () {
    function SetupHomeComponent() {
    }
    SetupHomeComponent.prototype.ngOnInit = function () {
    };
    SetupHomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-setup-home',
            template: __webpack_require__(/*! ./setup-home.component.html */ "./src/app/components/do-setup/setup-home/setup-home.component.html"),
            styles: [__webpack_require__(/*! ./setup-home.component.css */ "./src/app/components/do-setup/setup-home/setup-home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SetupHomeComponent);
    return SetupHomeComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/home/home.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  home works!\r\n</p>\r\n<ul>\r\n  <li><a routerLink=\"do-setup\">Setup</a></li>\r\n  <li><a routerLink=\"auth/login\">Login</a></li>\r\n</ul>"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/components/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/migration-dialog/migration-dialog.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/components/migration-dialog/migration-dialog.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWlncmF0aW9uLWRpYWxvZy9taWdyYXRpb24tZGlhbG9nLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/migration-dialog/migration-dialog.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/components/migration-dialog/migration-dialog.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  migration-dialog works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/components/migration-dialog/migration-dialog.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/migration-dialog/migration-dialog.component.ts ***!
  \***************************************************************************/
/*! exports provided: MigrationDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MigrationDialogComponent", function() { return MigrationDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_app_services_tendoo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/tendoo.service */ "./src/app/services/tendoo.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var MigrationDialogComponent = /** @class */ (function () {
    function MigrationDialogComponent(dialog, tendoo, data) {
        this.dialog = dialog;
        this.tendoo = tendoo;
        this.data = data;
        console.log(this.data);
    }
    MigrationDialogComponent.prototype.ngOnInit = function () {
    };
    MigrationDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-migration-dialog',
            template: __webpack_require__(/*! ./migration-dialog.component.html */ "./src/app/components/migration-dialog/migration-dialog.component.html"),
            styles: [__webpack_require__(/*! ./migration-dialog.component.css */ "./src/app/components/migration-dialog/migration-dialog.component.css")]
        }),
        __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"],
            src_app_services_tendoo_service__WEBPACK_IMPORTED_MODULE_2__["TendooService"], Object])
    ], MigrationDialogComponent);
    return MigrationDialogComponent;
}());



/***/ }),

/***/ "./src/app/guards/app-state.guard.ts":
/*!*******************************************!*\
  !*** ./src/app/guards/app-state.guard.ts ***!
  \*******************************************/
/*! exports provided: PreventAppInstalledGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreventAppInstalledGuard", function() { return PreventAppInstalledGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_setup_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/setup.service */ "./src/app/services/setup.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PreventAppInstalledGuard = /** @class */ (function () {
    function PreventAppInstalledGuard(setup, router, snackbar) {
        this.setup = setup;
        this.router = router;
        this.snackbar = snackbar;
    }
    PreventAppInstalledGuard.prototype.canActivate = function (next, state) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            // return resolve( true );
            _this.setup.ping().subscribe(function (result) {
            }, function (result) {
                switch (result.error.class) {
                    case 'Tendoo/Core/Exceptions/TendooInstalledException':
                        _this.router.navigateByUrl('auth/login');
                        _this.snackbar.open(result.error.message, null, {
                            duration: 3000
                        });
                        return resolve(false);
                }
                return resolve(true);
            });
        });
    };
    PreventAppInstalledGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_services_setup_service__WEBPACK_IMPORTED_MODULE_2__["SetupService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]])
    ], PreventAppInstalledGuard);
    return PreventAppInstalledGuard;
}());



/***/ }),

/***/ "./src/app/guards/check-app-installed.guard.ts":
/*!*****************************************************!*\
  !*** ./src/app/guards/check-app-installed.guard.ts ***!
  \*****************************************************/
/*! exports provided: PreventAppNotInstalledGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreventAppNotInstalledGuard", function() { return PreventAppNotInstalledGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_setup_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/setup.service */ "./src/app/services/setup.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PreventAppNotInstalledGuard = /** @class */ (function () {
    function PreventAppNotInstalledGuard(setup, router, snackbar) {
        this.setup = setup;
        this.router = router;
        this.snackbar = snackbar;
    }
    PreventAppNotInstalledGuard.prototype.canActivate = function (next, state) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.setup.ping().subscribe(function (result) {
            }, function (result) {
                switch (result.error.class) {
                    case 'Tendoo/Core/Exceptions/TendooNotInstalledException':
                        _this.router.navigateByUrl('do-setup');
                        _this.snackbar.open(result.error.message, null, {
                            duration: 3000
                        });
                        return resolve(false);
                }
                return resolve(true);
            });
        });
    };
    PreventAppNotInstalledGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_services_setup_service__WEBPACK_IMPORTED_MODULE_3__["SetupService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"]])
    ], PreventAppNotInstalledGuard);
    return PreventAppNotInstalledGuard;
}());



/***/ }),

/***/ "./src/app/guards/check-registration-status.guard.ts":
/*!***********************************************************!*\
  !*** ./src/app/guards/check-registration-status.guard.ts ***!
  \***********************************************************/
/*! exports provided: CheckRegistrationStatusGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckRegistrationStatusGuard", function() { return CheckRegistrationStatusGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _services_tendoo_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/tendoo.service */ "./src/app/services/tendoo.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CheckRegistrationStatusGuard = /** @class */ (function () {
    function CheckRegistrationStatusGuard(tendoo, snackbar, route) {
        this.tendoo = tendoo;
        this.snackbar = snackbar;
        this.route = route;
    }
    CheckRegistrationStatusGuard.prototype.canActivate = function (next, state) {
        var _this = this;
        return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
            _this.tendoo.options.getOption('allow_registration').subscribe(function (result) {
                if (result.value === null) {
                    _this.snackbar.open('The registration are closed on this website.', 'OK', { duration: 3000 });
                    _this.route.navigateByUrl('auth/login');
                    observer.next(false);
                }
                else {
                    observer.next(true);
                }
                observer.complete();
            });
        });
    };
    CheckRegistrationStatusGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_services_tendoo_service__WEBPACK_IMPORTED_MODULE_3__["TendooService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], CheckRegistrationStatusGuard);
    return CheckRegistrationStatusGuard;
}());



/***/ }),

/***/ "./src/app/guards/crud-create.guard.ts":
/*!*********************************************!*\
  !*** ./src/app/guards/crud-create.guard.ts ***!
  \*********************************************/
/*! exports provided: CrudCreateGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrudCreateGuard", function() { return CrudCreateGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_tendoo_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/tendoo.service */ "./src/app/services/tendoo.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CrudCreateGuard = /** @class */ (function () {
    function CrudCreateGuard(tendoo, router, snackbar) {
        this.tendoo = tendoo;
        this.router = router;
        this.snackbar = snackbar;
    }
    CrudCreateGuard.prototype.canActivate = function (next, state) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var namespace = next.paramMap.get('namespace');
            _this.tendoo.crud.canAccess({
                type: 'crud.create',
                namespace: namespace
            }).subscribe(function (result) {
                resolve(true);
            }, function (result) {
                if (result.error.class === 'Tendoo/Core/Exceptions/AccessDenied') {
                    _this.router.navigateByUrl('dashboard/access-denied');
                }
                else {
                    _this.snackbar.open(result.error.message || 'Unable to access to the requested page. You may not have access to that page.', 'OK', { duration: 5000 });
                }
                resolve(false);
            });
        });
    };
    CrudCreateGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_services_tendoo_service__WEBPACK_IMPORTED_MODULE_3__["TendooService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"]])
    ], CrudCreateGuard);
    return CrudCreateGuard;
}());



/***/ }),

/***/ "./src/app/guards/crud-edit.guard.ts":
/*!*******************************************!*\
  !*** ./src/app/guards/crud-edit.guard.ts ***!
  \*******************************************/
/*! exports provided: CrudEditGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrudEditGuard", function() { return CrudEditGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_tendoo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/tendoo.service */ "./src/app/services/tendoo.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CrudEditGuard = /** @class */ (function () {
    function CrudEditGuard(tendoo, snackbar, router) {
        this.tendoo = tendoo;
        this.snackbar = snackbar;
        this.router = router;
    }
    CrudEditGuard.prototype.canActivate = function (next, state) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var namespace = next.paramMap.get('namespace');
            _this.tendoo.crud.canAccess({
                type: 'crud.edit',
                namespace: namespace
            }).subscribe(function (result) {
                resolve(true);
            }, function (result) {
                if (result.error.class === 'Tendoo/Core/Exceptions/AccessDenied') {
                    _this.router.navigateByUrl('dashboard/access-denied');
                }
                else {
                    _this.snackbar.open(result.error.message || 'Unable to access to the requested page. You may not have access to that page.', 'OK', { duration: 5000 });
                }
                resolve(false);
            });
        });
    };
    CrudEditGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_services_tendoo_service__WEBPACK_IMPORTED_MODULE_2__["TendooService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], CrudEditGuard);
    return CrudEditGuard;
}());



/***/ }),

/***/ "./src/app/guards/crud-list.guard.ts":
/*!*******************************************!*\
  !*** ./src/app/guards/crud-list.guard.ts ***!
  \*******************************************/
/*! exports provided: CrudListGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrudListGuard", function() { return CrudListGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_tendoo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/tendoo.service */ "./src/app/services/tendoo.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CrudListGuard = /** @class */ (function () {
    function CrudListGuard(tendoo, snackbar, router) {
        this.tendoo = tendoo;
        this.snackbar = snackbar;
        this.router = router;
    }
    CrudListGuard.prototype.canActivate = function (next, state) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var namespace = next.paramMap.get('namespace');
            _this.tendoo.crud.canAccess({
                type: 'crud.list',
                namespace: namespace
            }).subscribe(function (result) {
                resolve(true);
            }, function (result) {
                if (result.error.class === 'Tendoo/Core/Exceptions/AccessDenied') {
                    _this.router.navigateByUrl('dashboard/access-denied');
                }
                else {
                    _this.snackbar.open(result.error.message || 'Unable to access to the requested page. You may not have access to that page.', 'OK', { duration: 5000 });
                }
                resolve(false);
            });
        });
    };
    CrudListGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_services_tendoo_service__WEBPACK_IMPORTED_MODULE_2__["TendooService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], CrudListGuard);
    return CrudListGuard;
}());



/***/ }),

/***/ "./src/app/guards/require-logged.guard.ts":
/*!************************************************!*\
  !*** ./src/app/guards/require-logged.guard.ts ***!
  \************************************************/
/*! exports provided: RequireLoggedGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequireLoggedGuard", function() { return RequireLoggedGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_loader_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/loader.service */ "./src/app/services/loader.service.ts");
/* harmony import */ var _services_tendoo_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/tendoo.service */ "./src/app/services/tendoo.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RequireLoggedGuard = /** @class */ (function () {
    function RequireLoggedGuard(router, tendoo) {
        this.router = router;
        this.tendoo = tendoo;
    }
    RequireLoggedGuard.prototype.canActivate = function (next, state) {
        if (Object.values(_services_loader_service__WEBPACK_IMPORTED_MODULE_2__["LoaderService"].headers).length === 0) {
            this.tendoo.auth.intented = state.url;
            this.router.navigateByUrl('auth/login?notice=login-required');
            return true;
        }
        return true;
    };
    RequireLoggedGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_tendoo_service__WEBPACK_IMPORTED_MODULE_3__["TendooService"]])
    ], RequireLoggedGuard);
    return RequireLoggedGuard;
}());



/***/ }),

/***/ "./src/app/services/http-response-parser.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/services/http-response-parser.service.ts ***!
  \**********************************************************/
/*! exports provided: HttpResponseParserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpResponseParserService", function() { return HttpResponseParserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



var HttpResponseParserService = /** @class */ (function () {
    function HttpResponseParserService(route, activeRoute, snackbar) {
        var _this = this;
        this.route = route;
        this.activeRoute = activeRoute;
        this.snackbar = snackbar;
        this.pipes = [];
        this.pipes.push(function (response) {
            return new Promise(function (resolve) {
                if (resolve instanceof ProgressEvent) {
                    _this.snackbar.open('Unable to reach the server right now.');
                }
                resolve(response);
            });
        });
        this.pipes.push(function (response) {
            return new Promise(function (resolve) {
                if (response.class !== undefined && [
                    'Tendoo/Core/Exceptions/TendooNotInstalledException',
                    'Tendoo/Core/Exceptions/TendooInstalledException',
                ].indexOf(response.class) !== -1) {
                    _this.snackbar.open(response.message, 'OK', {
                        duration: 4000
                    });
                }
                return resolve(response);
            });
        });
    }
    /**
     * Parse Http Response
     * @param http: AsyncResponse
     */
    HttpResponseParserService.prototype.parse = function (response) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.pipes.forEach(function (parser) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, parser(response)];
                        case 1:
                            response = _a.sent();
                            return [2 /*return*/];
                    }
                });
            }); });
            resolve(response);
        });
    };
    /**
     * push http response parser
     * @param any
     * @return void
     */
    HttpResponseParserService.prototype.pushParser = function (parser) {
        this.pipes.push(parser);
    };
    HttpResponseParserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"]])
    ], HttpResponseParserService);
    return HttpResponseParserService;
}());



/***/ }),

/***/ "./src/app/services/loader.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/loader.service.ts ***!
  \********************************************/
/*! exports provided: LoaderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderService", function() { return LoaderService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _http_response_parser_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./http-response-parser.service */ "./src/app/services/http-response-parser.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoaderService = /** @class */ (function () {
    function LoaderService(http, httpParser, snackbar) {
        this.http = http;
        this.httpParser = httpParser;
        this.snackbar = snackbar;
        this.isLoading = false;
        this.baseUrl = tendoo.base_url;
    }
    LoaderService_1 = LoaderService;
    /**
     * Submit post request
     * @param {string} url to access
     * @param data data to submit
     */
    LoaderService.prototype.post = function (url, data) {
        var _this = this;
        return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
            _this.isLoading = true;
            return _this.__formDataResponse(_this.http.post(url, data, {
                headers: LoaderService_1.headers
            }), observer);
        });
    };
    LoaderService.prototype.__formDataResponse = function (http, observer) {
        var _this = this;
        return http.subscribe(function (result) {
            _this.httpParser.parse(result).then(function () {
                _this.isLoading = false;
                observer.next(result);
                observer.complete();
            });
        }, function (result) {
            _this.httpParser.parse(result.error).then(function () {
                _this.isLoading = false;
                observer.error(result);
            });
        });
    };
    /**
     * Submit put request
     * @param {string} url to access
     * @param data data to submit
     */
    LoaderService.prototype.put = function (url, data) {
        var _this = this;
        return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
            _this.isLoading = true;
            return _this.__formDataResponse(_this.http.put(url, data, {
                headers: LoaderService_1.headers
            }), observer);
        });
    };
    /**
     * Submit DELETE request
     * @param {string} url to access
     * @param data data to submit
     */
    LoaderService.prototype.delete = function (url) {
        var _this = this;
        return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
            _this.isLoading = true;
            return _this.http.delete(url, {
                headers: LoaderService_1.headers
            }).subscribe(function (result) {
                _this.isLoading = false;
                observer.next(result);
                observer.complete();
            }, function (result) {
                _this.httpParser.parse(result.error).then(function () {
                    _this.isLoading = false;
                    observer.error(result);
                });
            });
        });
    };
    /**
     * Submit get request
     * @param {string} url to access
     * @param data data to submit
     */
    LoaderService.prototype.get = function (url) {
        var _this = this;
        return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
            _this.isLoading = true;
            return _this.http.get(url, {
                headers: LoaderService_1.headers
            }).subscribe(function (result) {
                _this.httpParser.parse(result).then(function () {
                    _this.isLoading = false;
                    observer.next(result);
                    observer.complete();
                });
            }, function (result) {
                _this.httpParser.parse(result.error).then(function () {
                    _this.isLoading = false;
                    observer.error(result);
                });
            });
        });
    };
    /**
     * delete Selected entries
     * @param array of id
     * @return AyncResponse
     */
    LoaderService.prototype.deleteSelected = function (ids) {
        console.log(this.bulkDeletePath);
        if (this.bulkDeletePath !== undefined) {
            return this.post(this.baseUrl + this.bulkDeletePath, {
                ids: ids
            });
        }
        return false;
    };
    var LoaderService_1;
    LoaderService.headers = {};
    LoaderService = LoaderService_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _http_response_parser_service__WEBPACK_IMPORTED_MODULE_3__["HttpResponseParserService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]])
    ], LoaderService);
    return LoaderService;
}());



/***/ }),

/***/ "./src/app/services/responsive.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/responsive.service.ts ***!
  \************************************************/
/*! exports provided: ResponsiveService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResponsiveService", function() { return ResponsiveService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/* TYPESCRIPT */

var ResponsiveService = /** @class */ (function () {
    function ResponsiveService() {
        var _this = this;
        this.callbacks = [];
        // taken from bootstrap's grid system
        this.breakpoints = {
            xs: '(max-width:575px)',
            sm: '(min-width:576px) and (max-width:767px)',
            md: '(min-width:768px) and (max-width:991px)',
            lg: '(min-width:992px) and (max-width:1199px)',
            xl: '(min-width:1200px)'
        };
        this.xsOrs = this.breakpoints.xs + ',' + this.breakpoints.sm;
        this.isXS = function () { return _this.ruleIsMet(_this.breakpoints.xs); };
        this.isSM = function () { return _this.ruleIsMet(_this.breakpoints.sm); };
        this.isMD = function () { return _this.ruleIsMet(_this.breakpoints.md); };
        this.isLG = function () { return _this.ruleIsMet(_this.breakpoints.lg); };
        this.isXL = function () { return _this.ruleIsMet(_this.breakpoints.xl); };
        this.isSmallScreen = function () { return _this.ruleIsMet(_this.xsOrs); };
        this.registerChangeCallback = function (f) {
            _this.callbacks.push(f);
        };
        this.ruleIsMet = function (rule) { return window.matchMedia(rule).matches; };
        this.callSubscribers = function () {
            var len = _this.callbacks.length;
            if (len == 0) {
                return;
            }
            var i = 0;
            for (; i < len; i++) {
                _this.callbacks[i]();
            }
        };
        window.onresize = this.callSubscribers;
    }
    /**
     * define values
     * @param object
     */
    ResponsiveService.prototype.define = function (values) {
        if (this.isXS()) {
            return values.xs;
        }
        else if (this.isSM()) {
            return values.sm;
        }
        else if (this.isMD()) {
            return values.md;
        }
        else if (this.isLG()) {
            return values.lg;
        }
        else if (this.isXL()) {
            return values.xl;
        }
    };
    ResponsiveService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], ResponsiveService);
    return ResponsiveService;
}());



/***/ }),

/***/ "./src/app/services/setup.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/setup.service.ts ***!
  \*******************************************/
/*! exports provided: SetupService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetupService", function() { return SetupService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _loader_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loader.service */ "./src/app/services/loader.service.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var SetupService = /** @class */ (function (_super) {
    __extends(SetupService, _super);
    function SetupService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Send post request to the server for db configuration
     * @param fields form field for database configuration
     */
    SetupService.prototype.setupDatabase = function (fields) {
        return this.post(this.baseUrl + 'tendoo/do-setup/database', fields);
    };
    SetupService.prototype.application = function (fields) {
        return this.post(this.baseUrl + 'tendoo/do-setup/application', fields);
    };
    SetupService.prototype.ping = function () {
        return this.get(this.baseUrl + 'tendoo/ping');
    };
    SetupService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        })
    ], SetupService);
    return SetupService;
}(_loader_service__WEBPACK_IMPORTED_MODULE_1__["LoaderService"]));



/***/ }),

/***/ "./src/app/services/tendoo-auth.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/tendoo-auth.service.ts ***!
  \*************************************************/
/*! exports provided: TendooAuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TendooAuthService", function() { return TendooAuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _loader_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loader.service */ "./src/app/services/loader.service.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var TendooAuthService = /** @class */ (function (_super) {
    __extends(TendooAuthService, _super);
    function TendooAuthService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * register a new user from the register UI
     * @param data form data
     */
    TendooAuthService.prototype.register = function (data) {
        return this.post(this.baseUrl + "tendoo/auth/registration", data);
    };
    /**
     * attempt to log the user.
     * @param credentials object user credentials
     */
    TendooAuthService.prototype.login = function (credentials) {
        return this.post(this.baseUrl + 'tendoo/auth/login', credentials);
    };
    /**
     * Store the user credentials
     * @param user User Object
     * @param token session token
     */
    TendooAuthService.prototype.setCredentials = function (user, token) {
        _loader_service__WEBPACK_IMPORTED_MODULE_1__["LoaderService"].headers = {
            'X-AUTH-TOKEN': token
        };
        this.user = user;
    };
    /**
     * Logout the logged user
     * @return void
     */
    TendooAuthService.prototype.logout = function () {
        this.user = undefined;
        _loader_service__WEBPACK_IMPORTED_MODULE_1__["LoaderService"].headers = {};
    };
    /**
     * return the logged user
     * @return User
     */
    TendooAuthService.prototype.getUser = function () {
        return this.user;
    };
    TendooAuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        })
    ], TendooAuthService);
    return TendooAuthService;
}(_loader_service__WEBPACK_IMPORTED_MODULE_1__["LoaderService"]));



/***/ }),

/***/ "./src/app/services/tendoo-crud.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/tendoo-crud.service.ts ***!
  \*************************************************/
/*! exports provided: TendooCrudService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TendooCrudService", function() { return TendooCrudService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _loader_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loader.service */ "./src/app/services/loader.service.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var TendooCrudService = /** @class */ (function (_super) {
    __extends(TendooCrudService, _super);
    function TendooCrudService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TendooCrudService.prototype.getColumns = function (namespace) {
        return this.get(this.baseUrl + 'tendoo/crud/' + namespace + '/columns');
    };
    TendooCrudService.prototype.serialize = function (obj) {
        var str = [];
        for (var p in obj) {
            if (obj.hasOwnProperty(p)) {
                str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
            }
        }
        return str.join('&');
    };
    /**
     * Get entries for a defined Crud Resource
     * @param namespace crud namespace
     * @return Observable<TableEntries>
     */
    TendooCrudService.prototype.getEntries = function (namespace, params) {
        if (params === void 0) { params = null; }
        return this.get(this.baseUrl + 'tendoo/crud/' + namespace + (params !== null ? '?' + this.serialize(params) : ''));
    };
    /**
     * Get a CRUD configuration along with entries
     * @param namespace crud namespace
     * @param params route parameters
     */
    TendooCrudService.prototype.getConfig = function (namespace, params) {
        if (params === void 0) { params = null; }
        return this.get(this.baseUrl + 'tendoo/crud/' + namespace + '/config' + (params !== null ? '?' + this.serialize(params) : ''));
    };
    /**
     * delete selected entries
     * @param array of id
     * @return Observable<AsyncResponse>
     */
    TendooCrudService.prototype.deleteBulkEntries = function (namespace, ids) {
        return this.post(this.baseUrl + 'tendoo/crud/' + namespace + '/bulk-actions', {
            entries_id: ids,
            action: 'bulk-delete'
        });
    };
    /**
     * Get form create config
     * @param string namespace
     * @return observable
     */
    TendooCrudService.prototype.getCreateConfig = function (namespace) {
        return this.get(this.baseUrl + "tendoo/crud/" + namespace + "/create-config");
    };
    /**
     * post form
     * @param string namespace
     * @param object data
     * @return observable.
     */
    TendooCrudService.prototype.postForm = function (namespace, data) {
        return this.post(this.baseUrl + "tendoo/crud/" + namespace, data);
    };
    /**
     * act as a guard to proceed a crud instance
     * @param object {type: string, namespace: string }
     * @return Observable<AsyncResponse>
     */
    TendooCrudService.prototype.canAccess = function (data) {
        var namespace = data.namespace, type = data.type;
        return this.post(this.baseUrl + "tendoo/crud/" + namespace + "/can-access", { type: type });
    };
    TendooCrudService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        })
    ], TendooCrudService);
    return TendooCrudService;
}(_loader_service__WEBPACK_IMPORTED_MODULE_1__["LoaderService"]));



/***/ }),

/***/ "./src/app/services/tendoo-fields.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/tendoo-fields.service.ts ***!
  \***************************************************/
/*! exports provided: TendooFieldsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TendooFieldsService", function() { return TendooFieldsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _tendoo_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tendoo-auth.service */ "./src/app/services/tendoo-auth.service.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var TendooFieldsService = /** @class */ (function (_super) {
    __extends(TendooFieldsService, _super);
    function TendooFieldsService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Get fieds for a specific namespace
     * @param string field namespace
     * @return Objservable.
     */
    TendooFieldsService.prototype.getFields = function (namespace) {
        return this.get(this.baseUrl + 'tendoo/fields/' + namespace);
    };
    /**
     * get public fields using the
     * provided namespace
     * @param string fields namespace
     * @return {Objservable<Field[]>} fields
     */
    TendooFieldsService.prototype.getPublicFields = function (namespace) {
        return this.get(this.baseUrl + 'tendoo/public/fields/' + namespace);
    };
    TendooFieldsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        })
    ], TendooFieldsService);
    return TendooFieldsService;
}(_tendoo_auth_service__WEBPACK_IMPORTED_MODULE_1__["TendooAuthService"]));



/***/ }),

/***/ "./src/app/services/tendoo-forms.service.ts":
/*!**************************************************!*\
  !*** ./src/app/services/tendoo-forms.service.ts ***!
  \**************************************************/
/*! exports provided: TendooFormsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TendooFormsService", function() { return TendooFormsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _loader_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loader.service */ "./src/app/services/loader.service.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var TendooFormsService = /** @class */ (function (_super) {
    __extends(TendooFormsService, _super);
    function TendooFormsService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * get a form
     * @param namespace form namespace
     * @param index entry index
     */
    TendooFormsService.prototype.getForm = function (namespace, index) {
        var url = this.baseUrl + 'tendoo/forms/' + namespace;
        if (index !== undefined) {
            url += '/' + index;
        }
        return this.get(url);
    };
    /**
     * return a public form available for the frontend
     * @param string namespace
     * @param int number
     * @reutrn Form;
     */
    TendooFormsService.prototype.getPublicForm = function (namespace, index) {
        var url = this.baseUrl + 'tendoo/public/forms/' + namespace;
        if (index !== undefined) {
            url += '/' + index;
        }
        return this.get(url);
    };
    /**
     * save a form
     * @param string namespace
     * @param array data[ key: any ]
     * @param number index
     */
    TendooFormsService.prototype.saveForm = function (namespace, data, index) {
        var url = this.baseUrl + 'tendoo/forms/' + namespace;
        return this.post(url, data);
    };
    TendooFormsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        })
    ], TendooFormsService);
    return TendooFormsService;
}(_loader_service__WEBPACK_IMPORTED_MODULE_1__["LoaderService"]));



/***/ }),

/***/ "./src/app/services/tendoo-medias.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/tendoo-medias.service.ts ***!
  \***************************************************/
/*! exports provided: TendooMediasService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TendooMediasService", function() { return TendooMediasService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _loader_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loader.service */ "./src/app/services/loader.service.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var TendooMediasService = /** @class */ (function (_super) {
    __extends(TendooMediasService, _super);
    function TendooMediasService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TendooMediasService.prototype.getMedias = function () {
        return this.get(this.baseUrl + 'tendoo/medias');
    };
    /**
     * delete a specific media provided
     * @param Media media object to delete
     * @return observable<AsyncResponse>
     */
    TendooMediasService.prototype.deleteMedia = function (medias) {
        return this.post(this.baseUrl + 'tendoo/medias/delete', { medias: medias });
    };
    TendooMediasService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        })
    ], TendooMediasService);
    return TendooMediasService;
}(_loader_service__WEBPACK_IMPORTED_MODULE_1__["LoaderService"]));



/***/ }),

/***/ "./src/app/services/tendoo-menu.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/tendoo-menu.service.ts ***!
  \*************************************************/
/*! exports provided: TendooMenusService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TendooMenusService", function() { return TendooMenusService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _loader_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loader.service */ "./src/app/services/loader.service.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var TendooMenusService = /** @class */ (function (_super) {
    __extends(TendooMenusService, _super);
    function TendooMenusService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * get menu
     * @return observable of link
     */
    TendooMenusService.prototype.getMenus = function (namespace) {
        return this.get(this.baseUrl + 'tendoo/menus/dashboard.aside');
    };
    TendooMenusService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        })
    ], TendooMenusService);
    return TendooMenusService;
}(_loader_service__WEBPACK_IMPORTED_MODULE_1__["LoaderService"]));



/***/ }),

/***/ "./src/app/services/tendoo-modules.service.ts":
/*!****************************************************!*\
  !*** ./src/app/services/tendoo-modules.service.ts ***!
  \****************************************************/
/*! exports provided: TendooModulesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TendooModulesService", function() { return TendooModulesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _tendoo_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tendoo-auth.service */ "./src/app/services/tendoo-auth.service.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var TendooModulesService = /** @class */ (function (_super) {
    __extends(TendooModulesService, _super);
    function TendooModulesService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TendooModulesService.prototype.getAll = function () {
        return this.get(this.baseUrl + 'tendoo/modules');
    };
    /**
     * upload a zip file to Tendoo CMS
     * server
     * @param file
     * @return void
     */
    TendooModulesService.prototype.uploadFile = function (file) {
        var endpoint = 'your-destination-url';
        var formData = new FormData();
        formData.append('module', file, file.name);
        return this.post(this.baseUrl + 'tendoo/modules/upload', formData);
    };
    /**
     * delete a module
     * @param string module namespace
     * @return void
     */
    TendooModulesService.prototype.deleteModule = function (namespace) {
        return this.delete(this.baseUrl + 'tendoo/modules/' + namespace);
    };
    /**
     * Enable a module
     * @param string module namespace
     * @return {Observable} AsyncResponse
     */
    TendooModulesService.prototype.enable = function (module) {
        return this.post(this.baseUrl + 'tendoo/modules/enable', { module: module });
    };
    /**
     * Disable a module
     * @param string module namespace
     * @return {Observable} AsyncReponse
     */
    TendooModulesService.prototype.disable = function (module) {
        return this.post(this.baseUrl + 'tendoo/modules/disable', { module: module });
    };
    TendooModulesService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        })
    ], TendooModulesService);
    return TendooModulesService;
}(_tendoo_auth_service__WEBPACK_IMPORTED_MODULE_1__["TendooAuthService"]));



/***/ }),

/***/ "./src/app/services/tendoo-options.service.ts":
/*!****************************************************!*\
  !*** ./src/app/services/tendoo-options.service.ts ***!
  \****************************************************/
/*! exports provided: TendooOptionsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TendooOptionsService", function() { return TendooOptionsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _loader_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loader.service */ "./src/app/services/loader.service.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var TendooOptionsService = /** @class */ (function (_super) {
    __extends(TendooOptionsService, _super);
    function TendooOptionsService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TendooOptionsService.prototype.getOption = function (key) {
        return this.get(this.baseUrl + "tendoo/options/" + key);
    };
    TendooOptionsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        })
    ], TendooOptionsService);
    return TendooOptionsService;
}(_loader_service__WEBPACK_IMPORTED_MODULE_1__["LoaderService"]));



/***/ }),

/***/ "./src/app/services/tendoo-table.service.ts":
/*!**************************************************!*\
  !*** ./src/app/services/tendoo-table.service.ts ***!
  \**************************************************/
/*! exports provided: TendooTableService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TendooTableService", function() { return TendooTableService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _tendoo_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tendoo-auth.service */ "./src/app/services/tendoo-auth.service.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var TendooTableService = /** @class */ (function (_super) {
    __extends(TendooTableService, _super);
    function TendooTableService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TendooTableService.prototype.getColumns = function (table) {
        return this.get(this.baseUrl + 'tendoo/tables/' + table);
    };
    TendooTableService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        })
    ], TendooTableService);
    return TendooTableService;
}(_tendoo_auth_service__WEBPACK_IMPORTED_MODULE_1__["TendooAuthService"]));



/***/ }),

/***/ "./src/app/services/tendoo-tabs.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/tendoo-tabs.service.ts ***!
  \*************************************************/
/*! exports provided: TendooTabsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TendooTabsService", function() { return TendooTabsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _loader_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loader.service */ "./src/app/services/loader.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var TendooTabsService = /** @class */ (function (_super) {
    __extends(TendooTabsService, _super);
    function TendooTabsService() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.slug = 'tendoo/tabs';
        return _this;
    }
    TendooTabsService.prototype.getTabs = function (name) {
        var _this = this;
        return this.get("" + this.baseUrl + this.slug + "/" + name).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (entries) { return entries; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (result) {
            _this.snackbar.open(result.error.message);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(result);
        }));
    };
    TendooTabsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        })
    ], TendooTabsService);
    return TendooTabsService;
}(_loader_service__WEBPACK_IMPORTED_MODULE_1__["LoaderService"]));



/***/ }),

/***/ "./src/app/services/tendoo-users.service.ts":
/*!**************************************************!*\
  !*** ./src/app/services/tendoo-users.service.ts ***!
  \**************************************************/
/*! exports provided: TendooUsersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TendooUsersService", function() { return TendooUsersService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _tendoo_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tendoo-auth.service */ "./src/app/services/tendoo-auth.service.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var TendooUsersService = /** @class */ (function (_super) {
    __extends(TendooUsersService, _super);
    function TendooUsersService() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * bulk delete path
         */
        _this.bulkDeletePath = 'tendoo/users/delete-selected';
        return _this;
    }
    /**
     * get users
     * @return json
     */
    TendooUsersService.prototype.getUsers = function (param) {
        if (param === void 0) { param = ''; }
        return this.get(this.baseUrl + 'tendoo/users?' + param);
    };
    /**
     * edit a user using a provided id
     * @param int user id
     * @param object data to update
     * @return Objservable of AsyncResponse
     */
    TendooUsersService.prototype.edit = function (id, data) {
        return this.put(this.baseUrl + 'tendoo/users/' + id, data);
    };
    /**
     * create a users using provided data
     * @param data
     * @return Observable<AsyncReponse>
     */
    TendooUsersService.prototype.create = function (data) {
        return this.post(this.baseUrl + 'tendoo/users', data);
    };
    TendooUsersService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        })
    ], TendooUsersService);
    return TendooUsersService;
}(_tendoo_auth_service__WEBPACK_IMPORTED_MODULE_1__["TendooAuthService"]));



/***/ }),

/***/ "./src/app/services/tendoo.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/tendoo.service.ts ***!
  \********************************************/
/*! exports provided: TendooService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TendooService", function() { return TendooService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _loader_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loader.service */ "./src/app/services/loader.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _tendoo_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tendoo-auth.service */ "./src/app/services/tendoo-auth.service.ts");
/* harmony import */ var _tendoo_fields_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tendoo-fields.service */ "./src/app/services/tendoo-fields.service.ts");
/* harmony import */ var _tendoo_modules_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tendoo-modules.service */ "./src/app/services/tendoo-modules.service.ts");
/* harmony import */ var _tendoo_users_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tendoo-users.service */ "./src/app/services/tendoo-users.service.ts");
/* harmony import */ var _tendoo_table_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tendoo-table.service */ "./src/app/services/tendoo-table.service.ts");
/* harmony import */ var _tendoo_forms_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./tendoo-forms.service */ "./src/app/services/tendoo-forms.service.ts");
/* harmony import */ var _http_response_parser_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./http-response-parser.service */ "./src/app/services/http-response-parser.service.ts");
/* harmony import */ var _tendoo_tabs_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./tendoo-tabs.service */ "./src/app/services/tendoo-tabs.service.ts");
/* harmony import */ var _tendoo_menu_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./tendoo-menu.service */ "./src/app/services/tendoo-menu.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _tendoo_medias_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./tendoo-medias.service */ "./src/app/services/tendoo-medias.service.ts");
/* harmony import */ var _tendoo_crud_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./tendoo-crud.service */ "./src/app/services/tendoo-crud.service.ts");
/* harmony import */ var _tendoo_options_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./tendoo-options.service */ "./src/app/services/tendoo-options.service.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
















var TendooService = /** @class */ (function (_super) {
    __extends(TendooService, _super);
    function TendooService(http, httpParser, snackbar, auth, fields, modules, users, tables, forms, tabs, menus, medias, crud, options) {
        var _this = _super.call(this, http, httpParser, snackbar) || this;
        _this.auth = auth;
        _this.fields = fields;
        _this.modules = modules;
        _this.users = users;
        _this.tables = tables;
        _this.forms = forms;
        _this.tabs = tabs;
        _this.menus = menus;
        _this.medias = medias;
        _this.crud = crud;
        _this.options = options;
        return _this;
    }
    TendooService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _http_response_parser_service__WEBPACK_IMPORTED_MODULE_9__["HttpResponseParserService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatSnackBar"],
            _tendoo_auth_service__WEBPACK_IMPORTED_MODULE_3__["TendooAuthService"],
            _tendoo_fields_service__WEBPACK_IMPORTED_MODULE_4__["TendooFieldsService"],
            _tendoo_modules_service__WEBPACK_IMPORTED_MODULE_5__["TendooModulesService"],
            _tendoo_users_service__WEBPACK_IMPORTED_MODULE_6__["TendooUsersService"],
            _tendoo_table_service__WEBPACK_IMPORTED_MODULE_7__["TendooTableService"],
            _tendoo_forms_service__WEBPACK_IMPORTED_MODULE_8__["TendooFormsService"],
            _tendoo_tabs_service__WEBPACK_IMPORTED_MODULE_10__["TendooTabsService"],
            _tendoo_menu_service__WEBPACK_IMPORTED_MODULE_11__["TendooMenusService"],
            _tendoo_medias_service__WEBPACK_IMPORTED_MODULE_13__["TendooMediasService"],
            _tendoo_crud_service__WEBPACK_IMPORTED_MODULE_14__["TendooCrudService"],
            _tendoo_options_service__WEBPACK_IMPORTED_MODULE_15__["TendooOptionsService"]])
    ], TendooService);
    return TendooService;
}(_loader_service__WEBPACK_IMPORTED_MODULE_1__["LoaderService"]));



/***/ }),

/***/ "./src/app/shared/confirm-dialog/confirm-dialog.component.css":
/*!********************************************************************!*\
  !*** ./src/app/shared/confirm-dialog/confirm-dialog.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dialog-text {\r\n    text-align: center;\r\n}\r\n:host {\r\n    width: 100%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbmZpcm0tZGlhbG9nL2NvbmZpcm0tZGlhbG9nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxtQkFBbUI7Q0FDdEI7QUFDRDtJQUNJLFlBQVk7Q0FDZiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb25maXJtLWRpYWxvZy9jb25maXJtLWRpYWxvZy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRpYWxvZy10ZXh0IHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG46aG9zdCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/shared/confirm-dialog/confirm-dialog.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/shared/confirm-dialog/confirm-dialog.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\">\r\n\t<div fxFlex=\"auto\" fxLayout=\"column\" fxLayoutAlign=\"start start\">\r\n\t\t<div class=\"dialog-text p-2\" fxFlex.lg=\"80%\" fxFlex.md=\"80%\" fxFlex.xs=\"100%\" fxFlex.sm=\"100%\">\r\n\t\t\t<p class=\"mat-display-1 m-0 py-3\">\r\n\t\t\t\t{{ data.title }}\r\n\t\t\t</p>\r\n\t\t\t<p class=\"mat-title\">{{ data.message }}</p>\r\n\t\t</div>\r\n\t</div>\r\n\t<mat-divider></mat-divider>\r\n\t<div fxLayout=\"row\" fxFlex=\"50px\" fxLayoutAlign=\"stretch stretch\">\r\n\t\t<ng-container *ngFor=\"let button of data.buttons\">\r\n\t\t\t<button (click)=\"handle( button )\" fxFlex=\"auto\" mat-button=\"\">\r\n\t\t\t\t<span  class=\"mat-subheading-2\">{{ button.label }}</span>\r\n\t\t\t</button>\r\n\t\t\t<mat-divider [vertical]=\"true\"></mat-divider>\r\n\t\t</ng-container>\r\n\t</div>\r\n</div>"

/***/ }),

/***/ "./src/app/shared/confirm-dialog/confirm-dialog.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/shared/confirm-dialog/confirm-dialog.component.ts ***!
  \*******************************************************************/
/*! exports provided: ConfirmDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmDialogComponent", function() { return ConfirmDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var ConfirmDialogComponent = /** @class */ (function () {
    function ConfirmDialogComponent(dialog, data, snackBar) {
        this.dialog = dialog;
        this.data = data;
        this.snackBar = snackBar;
    }
    ConfirmDialogComponent.prototype.ngOnInit = function () {
    };
    /**
     * Handle Press Events
     * @param Button
     * @return void
     */
    ConfirmDialogComponent.prototype.handle = function (button) {
        if (typeof button.onClick == 'function') {
            button.onClick();
        }
    };
    ConfirmDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-confirm-dialog',
            template: __webpack_require__(/*! ./confirm-dialog.component.html */ "./src/app/shared/confirm-dialog/confirm-dialog.component.html"),
            styles: [__webpack_require__(/*! ./confirm-dialog.component.css */ "./src/app/shared/confirm-dialog/confirm-dialog.component.css")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            host: {
                style: 'flex-direction: column; box-sizing: border-box; display: flex; height: 100%;',
            }
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object, _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"]])
    ], ConfirmDialogComponent);
    return ConfirmDialogComponent;
}());



/***/ }),

/***/ "./src/app/shared/crud-table/crud-table.component.css":
/*!************************************************************!*\
  !*** ./src/app/shared/crud-table/crud-table.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\r\n    height: 100%;\r\n}\r\n#search-field {\r\n    height: 35px;\r\n    border-radius: 5px;\r\n    border: solid 1px #DDD;\r\n    background: #FFF;\r\n    width: 100%;\r\n    font-size: 18px;\r\n    padding: 0 10px;\r\n    margin-right: 10px;\r\n    margin-left: 10px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NydWQtdGFibGUvY3J1ZC10YWJsZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtDQUNoQjtBQUNEO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixrQkFBa0I7Q0FDckIiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvY3J1ZC10YWJsZS9jcnVkLXRhYmxlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuI3NlYXJjaC1maWVsZCB7XHJcbiAgICBoZWlnaHQ6IDM1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBib3JkZXI6IHNvbGlkIDFweCAjREREO1xyXG4gICAgYmFja2dyb3VuZDogI0ZGRjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgcGFkZGluZzogMCAxMHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/shared/crud-table/crud-table.component.html":
/*!*************************************************************!*\
  !*** ./src/app/shared/crud-table/crud-table.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"p-0\">\n    <mat-card-title class=\"p-2 mb-0\" *ngIf=\"searchEnabled\" color=\"warn\">\n        <div fxFlex=\"100%\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n            <button (click)=\"toggleSearch( false )\" mat-icon-button>\n                <mat-icon>close</mat-icon>\n            </button>\n            <input id=\"search-field\" [placeholder]=\"labels.search\" type=\"text\" #searchField>\n            <button (click)=\"search( searchField )\" mat-icon-button>\n                <mat-icon>search</mat-icon>\n            </button>\n        </div>\n    </mat-card-title>\n    <mat-card-title class=\"p-2 mb-0\" *ngIf=\"! searchEnabled\" fxLayoutAlign=\"space-between\">\n        <div fxFlex=\"100%\" *ngIf=\"! hasSelectedEntries\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n            <button mat-icon-button routerLink=\"/dashboard/users/create\" mat-button color=\"primary\">\n                <mat-icon>add</mat-icon>\n            </button>\n            <button mat-icon-button (click)=\"toggleSearch( true )\">\n                <mat-icon>search</mat-icon>\n            </button>\n        </div>\n        <div fxFlex=\"100%\" *ngIf=\"hasSelectedEntries\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n            <div fxLayoutAlign=\"start center\" fxLayout=\"row\">\n                <button (click)=\"cancel()\" mat-icon-button>\n                    <mat-icon>arrow_back</mat-icon>\n                </button>\n                <span style=\"padding: 5px 10px\">{{ selectedEntries.length }} selected</span>\n            </div>\n            <div>\n                <button mat-icon-button color=\"primary\">\n                    <mat-icon>import_export</mat-icon>\n                </button>\n                <button (click)=\"deleteSelectedEntries()\" *ngIf=\"hasSelectedEntries\" mat-icon-button color=\"warn\">\n                    <mat-icon>delete</mat-icon>\n                </button>\n            </div>\n        </div>\n    </mat-card-title>\n    <mat-divider *ngIf=\"! tendoo.crud.isLoading\"></mat-divider>\n    <mat-progress-bar color=\"warn\" style=\"height: 1px;position: absolute;left: 0;\" *ngIf=\"tendoo.crud.isLoading\" mode=\"indeterminate\"></mat-progress-bar>\n    <mat-card-content>\n        <table matSort (matSortChange)=\"sortData($event)\" mat-table [dataSource]=\"crud.results[ 'data' ]\" fxFlex>\n            <!--- Note that these columns can be defined in any order.\n                The actual rendered columns are set as a property on the row definition\" -->\n            <ng-container *ngFor=\"let column of columnsNames\" [matColumnDef]=\"column\">\n                <ng-container  *ngIf=\"column === 'id'\">\n                    <th mat-header-cell *matHeaderCellDef style=\"width: 40px\">\n                        <mat-checkbox class=\"example-margin\" (change)=\"checkAllCheckboxes()\" [(ngModel)]=\"checkAll\"></mat-checkbox>\n                    </th>\n                    <td mat-cell *matCellDef=\"let element\" style=\"width: 40px\">\n                        <mat-checkbox class=\"example-margin\" [(ngModel)]=\"element.$checked\"></mat-checkbox>\n                    </td>\n                </ng-container>\n                <ng-container *ngIf=\"column === '$actions'\">\n                    <th mat-header-cell *matHeaderCellDef width=\"80\">{{ columns[ column ].label }}</th>\n                    <td mat-cell *matCellDef=\"let element\">\n                        <mat-menu #tableEntryMenu=\"matMenu\">\n                            <button (click)=\"triggerMenu( menu, element )\" *ngFor=\"let menu of element.$actions\" mat-menu-item>{{ menu.label }}</button>\n                        </mat-menu>\n                        \n                        <button mat-icon-button [matMenuTriggerFor]=\"tableEntryMenu\">\n                            <mat-icon>more_vert</mat-icon>\n                        </button>\n                    </td>\n                </ng-container>    \n                <ng-container *ngIf=\"reservedColumns.indexOf( column ) === -1\">\n                    <th [mat-sort-header]=\"column\" mat-header-cell *matHeaderCellDef>{{ columns[ column ].label }}</th>\n                    <td mat-cell *matCellDef=\"let element\"> \n                        <!--\n                            this help to replace the provided value with a replace value\n                            provided on the column definition\n                        -->\n                        <ng-container *ngIf=\"columns[ column ].replace !== undefined\">\n                            <ng-container *ngIf=\"columns[ column ].type === 'boolean'\">\n                                <ng-container *ngIf=\"element[ column ] === false\">\n                                    {{ columns[ column ].replace[0] }}\n                                </ng-container>\n                                <ng-container *ngIf=\"element[ column ] === true\">\n                                    {{ columns[ column ].replace[1] }}\n                                </ng-container>\n                                <ng-container *ngIf=\"element[ column ] !== true && element[ column ] !== false\">\n                                    {{ columns[ column ].replace[ '$default' ] ? columns[ column ].replace[ '$default' ] : 'N/A' }}\n                                </ng-container>\n                            </ng-container>\n                        </ng-container>\n                        <ng-container *ngIf=\"columns[ column ].replace === undefined\">\n                            {{ element[ column ] }} \n                        </ng-container>\n                    </td>\n                </ng-container>\n            </ng-container>\n            \n            <tr mat-header-row *matHeaderRowDef=\"columnsNames\"></tr>\n            <tr mat-row *matRowDef=\"let row; columns: columnsNames;\"></tr>\n        </table>\n    </mat-card-content>\n</mat-card>"

/***/ }),

/***/ "./src/app/shared/crud-table/crud-table.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/shared/crud-table/crud-table.component.ts ***!
  \***********************************************************/
/*! exports provided: CrudTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrudTableComponent", function() { return CrudTableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../confirm-dialog/confirm-dialog.component */ "./src/app/shared/confirm-dialog/confirm-dialog.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_tendoo_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/tendoo.service */ "./src/app/services/tendoo.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CrudTableComponent = /** @class */ (function () {
    function CrudTableComponent(dialog, router, snackbar, tendoo) {
        this.dialog = dialog;
        this.router = router;
        this.snackbar = snackbar;
        this.tendoo = tendoo;
        this.sort = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.delete = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.action = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.searchEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.columnsNames = [];
        this.searchEnabled = false;
        this.reservedColumns = ['$actions'];
        this.searchValue = '';
    }
    CrudTableComponent.prototype.ngOnInit = function () {
        this.columnsNames = Object.keys(this.crud.columns);
        console.log(this.columnsNames);
    };
    CrudTableComponent.prototype.sortData = function (event) {
        this.sort.emit(event);
    };
    CrudTableComponent.prototype.search = function (field) {
        if (field.value.length !== 0) {
            this.searchEvent.emit(field.value.length);
        }
        return this.snackbar.open('You need to input something to search.', 'OK', { duration: 3000 });
    };
    /**
     * trigger menu
     * @param object menu
     * @return void
     */
    CrudTableComponent.prototype.triggerMenu = function (menu, row) {
        var _this = this;
        /**
         * build the url based on the
         * configuration.
         */
        var url = menu.url.replace("#", row[menu.index || 'id']);
        if (menu.confirm !== undefined) {
            console.log(menu.namespace);
            this.dialog.open(_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_2__["ConfirmDialogComponent"], {
                id: menu.namespace,
                data: {
                    title: menu.confirm.title,
                    message: menu.confirm.message,
                    buttons: [
                        {
                            label: 'Ok',
                            namespace: 'ok',
                            onClick: function () {
                                _this.__proceedAction(menu, url);
                            }
                        }, {
                            label: 'Cancel',
                            namespace: 'cancel',
                            onClick: function () {
                                _this.dialog.getDialogById(menu.namespace)
                                    .close();
                            }
                        }
                    ]
                }
            });
        }
        else {
            this.__proceedAction(menu, url);
        }
    };
    /**
     * Proceed action after having
     * checked if that action require a confirmation
     * @param object menu
     * @return void
     */
    CrudTableComponent.prototype.__proceedAction = function (menu, url) {
        this.action.emit({ menu: menu, url: url });
    };
    /**
     * Make sure to toggle all
     * checkboxes when the main checkbox
     * is clicked
     * @return void
     */
    CrudTableComponent.prototype.checkAllCheckboxes = function () {
        var _this = this;
        this.crud.results['data'].forEach(function (checkbox) {
            checkbox.$checked = _this.checkAll;
        });
    };
    /**
     * delete selected entries
     * @param entries
     * @return void
     */
    CrudTableComponent.prototype.deleteSelectedEntries = function (entries) {
        var _this = this;
        this.dialog.open(_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_2__["ConfirmDialogComponent"], {
            id: 'delete.all.popup',
            data: {
                title: 'Please Confirm Your Action',
                message: 'Would you like to delete all the selected users ? This action can\'t be canceled !',
                buttons: [
                    {
                        label: 'Delete',
                        namespace: 'delete.selected',
                        onClick: function () {
                            _this.delete.emit({
                                entries: _this.selectedEntries,
                                dialog: 'delete.all.popup'
                            });
                        }
                    }, {
                        label: 'Cancel',
                        namespace: 'cancel',
                        onClick: function () {
                            _this.dialog.getDialogById('delete.all.popup').close();
                        }
                    }
                ]
            }
        });
    };
    /**
     * canceled all selected entries
     * @return void
     */
    CrudTableComponent.prototype.cancel = function () {
        this.crud.results['data'].forEach(function (entry) { return entry.$checked = false; });
        this.checkAll = false;
    };
    /**
     * toggle search. Enable /disable according
     * to the provided parameter
     * @return void
     */
    CrudTableComponent.prototype.toggleSearch = function (param) {
        if (param) {
            this.searchEnabled = true;
            setTimeout(function () {
                document.getElementById('search-field').focus();
            }, 100);
        }
        else {
            this.searchEnabled = false;
            this.searchValue = '';
        }
    };
    Object.defineProperty(CrudTableComponent.prototype, "hasSelectedEntries", {
        /**
         * get if it has a selected entries
         * @return boolean
         */
        get: function () {
            return this.selectedEntries.length > 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CrudTableComponent.prototype, "selectedEntries", {
        /**
         * return selected entries
         * @return array
         */
        get: function () {
            return this.crud.results['data'] !== undefined ? this.crud.results['data'].filter(function (entry) { return entry.$checked; }) : [];
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('crud'),
        __metadata("design:type", Object)
    ], CrudTableComponent.prototype, "crud", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])('sort'),
        __metadata("design:type", Object)
    ], CrudTableComponent.prototype, "sort", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])('delete'),
        __metadata("design:type", Object)
    ], CrudTableComponent.prototype, "delete", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])('action'),
        __metadata("design:type", Object)
    ], CrudTableComponent.prototype, "action", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])('search'),
        __metadata("design:type", Object)
    ], CrudTableComponent.prototype, "searchEvent", void 0);
    CrudTableComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-crud-table',
            template: __webpack_require__(/*! ./crud-table.component.html */ "./src/app/shared/crud-table/crud-table.component.html"),
            styles: [__webpack_require__(/*! ./crud-table.component.css */ "./src/app/shared/crud-table/crud-table.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"],
            src_app_services_tendoo_service__WEBPACK_IMPORTED_MODULE_4__["TendooService"]])
    ], CrudTableComponent);
    return CrudTableComponent;
}());



/***/ }),

/***/ "./src/app/shared/fields/fields.component.css":
/*!****************************************************!*\
  !*** ./src/app/shared/fields/fields.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-form-field {\r\n    margin-bottom: 10px;\r\n    width: 100%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2ZpZWxkcy9maWVsZHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG9CQUFvQjtJQUNwQixZQUFZO0NBQ2YiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvZmllbGRzL2ZpZWxkcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LWZvcm0tZmllbGQge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/shared/fields/fields.component.html":
/*!*****************************************************!*\
  !*** ./src/app/shared/fields/fields.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-container [formGroup]=\"group\">\r\n\t<!-- text field field -->\r\n\t\r\n\t<mat-form-field [appearance]=\"field.appearance || 'standard'\" *ngIf=\"[ 'text', 'password', 'email' ].indexOf( field.type ) != -1\" class=\"example-full-width w-100\">\r\n\t\t<mat-label>{{ field.label }}</mat-label>\r\n\t\t<input [readonly]=\"field.readonly\" [type]=\"field.type\" [formControlName]=\"field.name\" matInput [placeholder]=\"field.label\" [value]=\"field.value ? field.value : ''\">\r\n\t\t<mat-hint *ngIf=\"field.control.valid || field.control.untouched\">{{ field.description }}</mat-hint>\r\n\t\t<mat-error *ngIf=\"field.control.invalid && field.control.touched\">\r\n\t\t\t<span *ngIf=\"field.control.errors.required\">This field is required<br></span>\r\n\t\t\t<span *ngIf=\"field.control.errors.email\">This field is not a valid email<br></span>\r\n\t\t\t<span *ngIf=\"field.control.errors.minlength\">this field doesn't match the required length : {{field.control.errors.minlength.requiredLength }}<br></span>\r\n\t\t\t<span *ngIf=\"field.control.errors.matches\">this field doesn't match the field : {{ field.control.errors.matches.formControlName }}<br></span>\r\n\t\t\t<span *ngIf=\"field.control.errors.number\">this field require a valid number<br></span>\r\n\t\t\t<span *ngFor=\"let error of field?.errors\">{{ error }}<br></span>\r\n\t\t</mat-error>\r\n\t</mat-form-field>\r\n\t\r\n\t<!-- date time field -->\r\n\t\r\n\t<mat-form-field [appearance]=\"field.appearance || 'standard'\" *ngIf=\"field.type == 'datetime'\" class=\"w-100\">\r\n\t\t<mat-label>{{ field.label }}</mat-label>\r\n\t\t<input [readonly]=\"field.readonly\" [formControlName]=\"field.name\" matInput [matDatepicker]=\"picker\" [placeholder]=\"field.label\">\r\n\t\t<mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n\t\t<mat-datepicker #picker startView=\"year\" [startAt]=\"startDate\"></mat-datepicker>\r\n\t\t<mat-hint *ngIf=\"field.control.valid || field.control.untouched\">{{ field.description }}</mat-hint>\r\n\t\t<mat-error *ngIf=\"field.control.invalid && field.control.touched\">\r\n\t\t\t<span *ngIf=\"field.control.errors.required\">This field is required<br></span>\r\n\t\t\t<span *ngIf=\"field.control.errors.email\">This field is not a valid email<br></span>\r\n\t\t\t<span *ngIf=\"field.control.errors.minlength\">this field doesn't match the required length : {{field.control.errors.minlength.requiredLength }}<br></span>\r\n\t\t\t<span *ngIf=\"field.control.errors.matches\">this field doesn't match the field : {{ field.control.errors.matches.formControlName }}<br></span>\r\n\t\t\t<span *ngIf=\"field.control.errors.number\">this field require a valid number<br></span>\r\n\t\t\t<span *ngFor=\"let error of field?.errors\">{{ error }}<br></span>\r\n\t\t</mat-error>\r\n\t</mat-form-field>\r\n\t\r\n\t<!-- select field -->\r\n\t\r\n\t<mat-form-field [appearance]=\"field.appearance || 'standard'\" *ngIf=\"field.type == 'select'\" class=\"w-100\">\r\n\t\t<mat-label>{{ field.label }}</mat-label>\r\n\t\t<mat-select [formControlName]=\"field.name\" [placeholder]=\"field.label\">\r\n\t\t\t<mat-option *ngFor=\"let option of field.options\" [value]=\"option.value\">\r\n\t\t\t{{ option.label }}\r\n\t\t\t</mat-option>\r\n\t\t</mat-select>\r\n\t\t<mat-hint *ngIf=\"field.control.valid || field.control.untouched\">{{ field.description }}</mat-hint>\r\n\t\t<mat-error *ngIf=\"field.control.invalid && field.control.touched\">\r\n\t\t\t<span *ngIf=\"field.control.errors.required\">This field is required<br></span>\r\n\t\t\t<span *ngIf=\"field.control.errors.email\">This field is not a valid email<br></span>\r\n\t\t\t<span *ngIf=\"field.control.errors.minlength\">this field doesn't match the required length : {{field.control.errors.minlength.requiredLength }}<br></span>\r\n\t\t\t<span *ngIf=\"field.control.errors.matches\">this field doesn't match the field : {{ field.control.errors.matches.formControlName }}<br></span>\r\n\t\t\t<span *ngIf=\"field.control.errors.number\">this field require a valid number<br></span>\r\n\t\t\t<span *ngFor=\"let error of field?.errors\">{{ error }}<br></span>\r\n\t\t</mat-error>\r\n\t</mat-form-field>\r\n\t\r\n\t<mat-form-field [appearance]=\"field.appearance || 'standard'\" *ngIf=\"field.type == 'multiple_select'\" multiple class=\"w-100\">\r\n\t\t<mat-label>{{ field.label }}</mat-label>\r\n\t\t<mat-select [formControlName]=\"field.name\" [placeholder]=\"field.label\">\r\n\t\t\t<mat-option *ngFor=\"let option of field.options\" [value]=\"option.value\">\r\n\t\t\t{{ option.label }}\r\n\t\t\t</mat-option>\r\n\t\t</mat-select>\r\n\t\t<mat-hint *ngIf=\"field.control.valid || field.control.untouched\">{{ field.description }}</mat-hint>\r\n\t\t<mat-error *ngIf=\"field.control.invalid && field.control.touched\">\r\n\t\t\t<span *ngIf=\"field.control.errors.required\">This field is required<br></span>\r\n\t\t\t<span *ngIf=\"field.control.errors.email\">This field is not a valid email<br></span>\r\n\t\t\t<span *ngIf=\"field.control.errors.minlength\">this field doesn't match the required length : {{field.control.errors.minlength.requiredLength }}<br></span>\r\n\t\t\t<span *ngIf=\"field.control.errors.matches\">this field doesn't match the field : {{ field.control.errors.matches.formControlName }}<br></span>\r\n\t\t\t<span *ngIf=\"field.control.errors.number\">this field require a valid number<br></span>\r\n\t\t\t<span *ngFor=\"let error of field?.errors\">{{ error }}<br></span>\r\n\t\t</mat-error>\r\n\t</mat-form-field>\r\n\t\r\n\t<!-- textarea field -->\r\n\t\r\n\t<mat-form-field [appearance]=\"field.appearance || 'standard'\" *ngIf=\"field.type == 'textarea'\" class=\"w-100\">\r\n\t\t<mat-label>{{ field.label }}</mat-label>\r\n\t\t<textarea [formControlName]=\"field.name\" matInput [placeholder]=\"field.label\"></textarea>\r\n\t\t<mat-hint *ngIf=\"field.control.valid || field.control.untouched\">{{ field.description }}</mat-hint>\r\n\t\t<mat-error *ngIf=\"field.control.invalid && field.control.touched\">\r\n\t\t\t<span *ngIf=\"field.control.errors.required\">This field is required<br></span>\r\n\t\t\t<span *ngIf=\"field.control.errors.email\">This field is not a valid email<br></span>\r\n\t\t\t<span *ngIf=\"field.control.errors.minlength\">this field doesn't match the required length : {{field.control.errors.minlength.requiredLength }}<br></span>\r\n\t\t\t<span *ngIf=\"field.control.errors.matches\">this field doesn't match the field : {{ field.control.errors.matches.formControlName }}<br></span>\r\n\t\t\t<span *ngIf=\"field.control.errors.number\">this field require a valid number<br></span>\r\n\t\t\t<span *ngFor=\"let error of field?.errors\">{{ error }}<br></span>\r\n\t\t</mat-error>\r\n\t</mat-form-field>\r\n\t\r\n\t<!-- text field field -->\r\n\t\r\n\t<mat-form-field [appearance]=\"field.appearance || 'standard'\" *ngIf=\"[ 'number' ].indexOf( field.type ) != -1\" class=\"example-full-width w-100\">\r\n\t\t<mat-label>{{ field.label }}</mat-label>\r\n\t\t<input [readonly]=\"field.readonly\" [formControlName]=\"field.name\" matInput type=\"number\" [placeholder]=\"field.label\" [value]=\"field.value ? field.value : ''\">\r\n\t\t<mat-hint *ngIf=\"field.control.valid || field.control.untouched\">{{ field.description }}</mat-hint>\r\n\t\t<mat-error *ngIf=\"field.control.invalid && field.control.touched\">\r\n\t\t\t<span *ngIf=\"field.control.errors.required\">This field is required<br></span>\r\n\t\t\t<span *ngIf=\"field.control.errors.email\">This field is not a valid email<br></span>\r\n\t\t\t<span *ngIf=\"field.control.errors.minlength\">this field doesn't match the required length : {{field.control.errors.minlength.requiredLength }}<br></span>\r\n\t\t\t<span *ngIf=\"field.control.errors.matches\">this field doesn't match the field : {{ field.control.errors.matches.formControlName }}<br></span>\r\n\t\t\t<span *ngIf=\"field.control.errors.number\">this field require a valid number<br></span>\r\n\t\t\t<span *ngFor=\"let error of field?.errors\">{{ error }}<br></span>\r\n\t\t</mat-error>\t\t\r\n\t</mat-form-field>\r\n\r\n\t<!-- switch field -->\r\n\t<ng-container *ngIf=\"[ 'switch' ].indexOf( field.type ) != -1\">\r\n\t\t<mat-slide-toggle [formControlName]=\"field.name\" [checked]=\"field.value\">{{ field.label }}</mat-slide-toggle>\r\n\t\t<mat-error *ngIf=\"field.control.invalid && field.control.touched\">\r\n\t\t\t<br>\r\n\t\t\t<span *ngIf=\"field.control.errors.required\">This field is required<br></span>\r\n\t\t\t<span *ngIf=\"field.control.errors.email\">This field is not a valid email<br></span>\r\n\t\t\t<span *ngIf=\"field.control.errors.minlength\">this field doesn't match the required length : {{field.control.errors.minlength.requiredLength }}<br></span>\r\n\t\t\t<span *ngIf=\"field.control.errors.matches\">this field doesn't match the field : {{ field.control.errors.matches.formControlName }}<br></span>\r\n\t\t\t<span *ngIf=\"field.control.errors.number\">this field require a valid number<br></span>\r\n\t\t\t<span *ngFor=\"let error of field?.errors\">{{ error }}<br></span>\r\n\t\t</mat-error>\r\n\t\t<br>\r\n\t\t<small *ngIf=\"field.control.valid || field.control.untouched\">{{ field.description }}</small>\r\n\t\t<br>\r\n\t\t<br>\r\n\t</ng-container>\r\n\r\n\t<!-- button -->\r\n\t<button [type]=\"field.type\" *ngIf=\"[ 'button' ].indexOf( field.type ) !== -1\" (click)=\"field.onClick( group )\" mat-raised-button color=\"primary\">{{ field.label }}</button>\r\n</ng-container>"

/***/ }),

/***/ "./src/app/shared/fields/fields.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/fields/fields.component.ts ***!
  \***************************************************/
/*! exports provided: FieldsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FieldsComponent", function() { return FieldsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FieldsComponent = /** @class */ (function () {
    function FieldsComponent() {
    }
    /**
     * Check change state
     */
    FieldsComponent.prototype.change = function () {
        // console.log( this.field.control );
    };
    FieldsComponent.prototype.ngOnInit = function () {
        if (['text', 'email', 'select', 'password', 'textarea', 'datetime', 'number', 'multiple_select', 'button', 'switch'].indexOf(this.field.type) === -1) {
            throw ("Unable to render the field '" + this.field.name + "' with the field type : '" + this.field.type + "'. This type is not supported.");
        }
        if (!(this.group.get(this.field.name) instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_1__["AbstractControl"])) {
            throw "Unable to retreive the field \"" + this.field.name + "\" from the [group] provided to the \"app-fields\" component.";
        }
        this[this.field.name] = this.field.control;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('field'),
        __metadata("design:type", Object)
    ], FieldsComponent.prototype, "field", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('group'),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"])
    ], FieldsComponent.prototype, "group", void 0);
    FieldsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-fields',
            template: __webpack_require__(/*! ./fields.component.html */ "./src/app/shared/fields/fields.component.html"),
            styles: [__webpack_require__(/*! ./fields.component.css */ "./src/app/shared/fields/fields.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FieldsComponent);
    return FieldsComponent;
}());



/***/ }),

/***/ "./src/app/shared/menu-list/menu-list.component.css":
/*!**********************************************************!*\
  !*** ./src/app/shared/menu-list/menu-list.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-list-item div > div > i {\r\n    margin-right: 16px;\r\n}\r\nmat-nav-list {\r\n    padding-top: 0;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL21lbnUtbGlzdC9tZW51LWxpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG1CQUFtQjtDQUN0QjtBQUNEO0lBQ0ksZUFBZTtDQUNsQiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9tZW51LWxpc3QvbWVudS1saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtbGlzdC1pdGVtIGRpdiA+IGRpdiA+IGkge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xyXG59XHJcbm1hdC1uYXYtbGlzdCB7XHJcbiAgICBwYWRkaW5nLXRvcDogMDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/shared/menu-list/menu-list.component.html":
/*!***********************************************************!*\
  !*** ./src/app/shared/menu-list/menu-list.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-nav-list>\n\t<ng-container *ngFor=\"let menu of sidebarMenus; index as index\">\n\t\t<div *ngIf=\"menu.childrens?.length > 0\" matLine href=\"javascript:void(0)\" (click)=\"toggle( index )\">\n\t\t\t<mat-list-item>\n\t\t\t\t<div fxLayout=\"row\" fxLayoutAlign=\"space-around center\" fxFill>\n\t\t\t\t\t<div fxFlex=\"auto\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n\t\t\t\t\t\t<i class=\"material-icons\">{{ menu.icon ? menu.icon : 'star' }}</i>\n\t\t\t\t\t\t<span>{{ menu.text }}</span>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div fxFlex=\"24px\">\n\t\t\t\t\t\t<i *ngIf=\"menu.open\"class=\"material-icons\">arrow_drop_up</i>\n\t\t\t\t\t\t<i *ngIf=\"! menu.open\" class=\"material-icons\">arrow_drop_down</i>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</mat-list-item>\n\t\t\t<app-sub-menu-list *ngIf=\"menu.childrens?.length > 0 && menu.open\" [childrens]=\"menu.childrens\"></app-sub-menu-list>\n\t\t</div>\n\t\t<a *ngIf=\"! menu.childrens\" matLine (click)=\"goTo( menu )\">\n\t\t\t<mat-list-item >\n\t\t\t\t<div fxLayout=\"row\" fxLayoutAlign=\"space-around center\" class=\"w-100\">\n\t\t\t\t\t<div fxFlex=\"auto\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n\t\t\t\t\t\t<i class=\"material-icons\">{{ menu.icon ? menu.icon : 'star' }}</i>\n\t\t\t\t\t\t<span>{{ menu.text }}</span>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</mat-list-item>\n\t\t</a>\n\t</ng-container>\n</mat-nav-list>"

/***/ }),

/***/ "./src/app/shared/menu-list/menu-list.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/shared/menu-list/menu-list.component.ts ***!
  \*********************************************************/
/*! exports provided: MenuListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuListComponent", function() { return MenuListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MenuListComponent = /** @class */ (function () {
    function MenuListComponent(router) {
        this.router = router;
        this.sidebarMenus = [];
    }
    MenuListComponent.prototype.ngOnInit = function () {
    };
    /**
     * Open/close current menu
     * @param object menu
     * @todo probably a bad pratice
     */
    MenuListComponent.prototype.toggle = function (index) {
        this.sidebarMenus.forEach(function (menu, __index) {
            if (__index === index) {
                menu.open = menu.open ? !menu.open : true;
            }
            else {
                menu.open = false;
            }
        });
    };
    /**
     * Close All menus
     * @return void
     */
    MenuListComponent.prototype.closeAll = function () {
        this.sidebarMenus.forEach(function (menu) {
            menu.open = false;
        });
    };
    /**
     * GoTo
     * @return void
     */
    MenuListComponent.prototype.goTo = function (menu) {
        // navigate to the menu path
        this.router.navigateByUrl(menu.href);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('menus'),
        __metadata("design:type", Array)
    ], MenuListComponent.prototype, "sidebarMenus", void 0);
    MenuListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-menu-list',
            template: __webpack_require__(/*! ./menu-list.component.html */ "./src/app/shared/menu-list/menu-list.component.html"),
            styles: [__webpack_require__(/*! ./menu-list.component.css */ "./src/app/shared/menu-list/menu-list.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], MenuListComponent);
    return MenuListComponent;
}());



/***/ }),

/***/ "./src/app/shared/sub-menu-list/sub-menu-list.component.css":
/*!******************************************************************!*\
  !*** ./src/app/shared/sub-menu-list/sub-menu-list.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-nav-list {\r\n    background: rgba(233, 233, 233, 0.5);\r\n    border-top: solid 1px #e0e0e0;\r\n    border-bottom: solid 1px #e0e0e0;\r\n}\r\n\r\nmat-list-item span {\r\n    padding-left: 40px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3N1Yi1tZW51LWxpc3Qvc3ViLW1lbnUtbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kscUNBQXFDO0lBQ3JDLDhCQUE4QjtJQUM5QixpQ0FBaUM7Q0FDcEM7O0FBRUQ7SUFDSSxtQkFBbUI7Q0FDdEIiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvc3ViLW1lbnUtbGlzdC9zdWItbWVudS1saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtbmF2LWxpc3Qge1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgyMzMsIDIzMywgMjMzLCAwLjUpO1xyXG4gICAgYm9yZGVyLXRvcDogc29saWQgMXB4ICNlMGUwZTA7XHJcbiAgICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggI2UwZTBlMDtcclxufVxyXG5cclxubWF0LWxpc3QtaXRlbSBzcGFuIHtcclxuICAgIHBhZGRpbmctbGVmdDogNDBweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/shared/sub-menu-list/sub-menu-list.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/shared/sub-menu-list/sub-menu-list.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-nav-list class=\"pt-0\">\n\t<a *ngFor=\"let menu of subMenus\" matLine (click)=\"goTo( menu )\">\n\t\t<mat-list-item >\n\t\t\t<span>{{ menu.text }}</span>\n\t\t</mat-list-item>\n\t</a>\n</mat-nav-list>"

/***/ }),

/***/ "./src/app/shared/sub-menu-list/sub-menu-list.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/shared/sub-menu-list/sub-menu-list.component.ts ***!
  \*****************************************************************/
/*! exports provided: SubMenuListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubMenuListComponent", function() { return SubMenuListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SubMenuListComponent = /** @class */ (function () {
    function SubMenuListComponent(router) {
        this.router = router;
    }
    SubMenuListComponent.prototype.ngOnInit = function () {
    };
    /**
     * GoTo
     * @return void
     */
    SubMenuListComponent.prototype.goTo = function (menu) {
        this.router.navigateByUrl(menu.href);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('childrens'),
        __metadata("design:type", Array)
    ], SubMenuListComponent.prototype, "subMenus", void 0);
    SubMenuListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sub-menu-list',
            template: __webpack_require__(/*! ./sub-menu-list.component.html */ "./src/app/shared/sub-menu-list/sub-menu-list.component.html"),
            styles: [__webpack_require__(/*! ./sub-menu-list.component.css */ "./src/app/shared/sub-menu-list/sub-menu-list.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], SubMenuListComponent);
    return SubMenuListComponent;
}());



/***/ }),

/***/ "./src/app/validators/matches.validator.ts":
/*!*************************************************!*\
  !*** ./src/app/validators/matches.validator.ts ***!
  \*************************************************/
/*! exports provided: MatchesValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatchesValidator", function() { return MatchesValidator; });
function MatchesValidator(matches) {
    return function (control) {
        if (control.value !== control.parent.get(matches).value) {
            return {
                'matches': {
                    'formControl': control.parent.get(matches),
                    'formControlName': matches
                }
            };
        }
        return null;
    };
}


/***/ }),

/***/ "./src/app/validators/number.validator.ts":
/*!************************************************!*\
  !*** ./src/app/validators/number.validator.ts ***!
  \************************************************/
/*! exports provided: Numbervalidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Numbervalidator", function() { return Numbervalidator; });
function Numbervalidator() {
    return function (control) {
        if (!/^\d+$/.exec(control.value)) {
            return {
                'number': true
            };
        }
        return null;
    };
}


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
var environment = {
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
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ "./src/modules/material.module.ts":
/*!****************************************!*\
  !*** ./src/modules/material.module.ts ***!
  \****************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var MaterialModules = [
    _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCheckboxModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDatepickerModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatFormFieldModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatInputModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatRadioModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSelectModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSliderModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSlideToggleModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatMenuModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSidenavModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatToolbarModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCardModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDividerModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatExpansionModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatGridListModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatListModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTabsModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatProgressSpinnerModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatProgressBarModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatRippleModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBarModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginatorModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSortModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableModule"]
];
var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: MaterialModules,
            exports: MaterialModules,
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/modules/routes.module.ts":
/*!**************************************!*\
  !*** ./src/modules/routes.module.ts ***!
  \**************************************/
/*! exports provided: RoutesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoutesModule", function() { return RoutesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_components_do_setup_setup_home_setup_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/do-setup/setup-home/setup-home.component */ "./src/app/components/do-setup/setup-home/setup-home.component.ts");
/* harmony import */ var src_app_components_do_setup_database_database_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/components/do-setup/database/database.component */ "./src/app/components/do-setup/database/database.component.ts");
/* harmony import */ var src_app_components_do_setup_application_application_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/components/do-setup/application/application.component */ "./src/app/components/do-setup/application/application.component.ts");
/* harmony import */ var src_app_components_auth_login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/components/auth/login/login.component */ "./src/app/components/auth/login/login.component.ts");
/* harmony import */ var src_app_components_auth_logout_logout_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/components/auth/logout/logout.component */ "./src/app/components/auth/logout/logout.component.ts");
/* harmony import */ var src_app_components_auth_register_register_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/auth/register/register.component */ "./src/app/components/auth/register/register.component.ts");
/* harmony import */ var src_app_components_dashboard_home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/components/dashboard/home/home.component */ "./src/app/components/dashboard/home/home.component.ts");
/* harmony import */ var src_app_components_dashboard_users_users_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/components/dashboard/users/users.component */ "./src/app/components/dashboard/users/users.component.ts");
/* harmony import */ var src_app_components_dashboard_modules_modules_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/components/dashboard/modules/modules.component */ "./src/app/components/dashboard/modules/modules.component.ts");
/* harmony import */ var src_app_components_dashboard_settings_settings_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/components/dashboard/settings/settings.component */ "./src/app/components/dashboard/settings/settings.component.ts");
/* harmony import */ var src_app_components_do_setup_do_setup_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/components/do-setup/do-setup.component */ "./src/app/components/do-setup/do-setup.component.ts");
/* harmony import */ var src_app_components_auth_auth_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/components/auth/auth.component */ "./src/app/components/auth/auth.component.ts");
/* harmony import */ var src_app_guards_app_state_guard__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/guards/app-state.guard */ "./src/app/guards/app-state.guard.ts");
/* harmony import */ var src_app_components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/components/dashboard/dashboard.component */ "./src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var src_app_guards_require_logged_guard__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/guards/require-logged.guard */ "./src/app/guards/require-logged.guard.ts");
/* harmony import */ var src_app_components_dashboard_modules_upload_modules_upload_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! src/app/components/dashboard/modules-upload/modules-upload.component */ "./src/app/components/dashboard/modules-upload/modules-upload.component.ts");
/* harmony import */ var src_app_guards_check_app_installed_guard__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! src/app/guards/check-app-installed.guard */ "./src/app/guards/check-app-installed.guard.ts");
/* harmony import */ var src_app_components_dashboard_users_create_users_create_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! src/app/components/dashboard/users-create/users-create.component */ "./src/app/components/dashboard/users-create/users-create.component.ts");
/* harmony import */ var src_app_components_dashboard_users_edit_users_edit_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! src/app/components/dashboard/users-edit/users-edit.component */ "./src/app/components/dashboard/users-edit/users-edit.component.ts");
/* harmony import */ var src_app_components_dashboard_profile_profile_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! src/app/components/dashboard/profile/profile.component */ "./src/app/components/dashboard/profile/profile.component.ts");
/* harmony import */ var src_app_components_dashboard_medias_medias_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! src/app/components/dashboard/medias/medias.component */ "./src/app/components/dashboard/medias/medias.component.ts");
/* harmony import */ var src_app_components_dashboard_medias_upload_medias_upload_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! src/app/components/dashboard/medias-upload/medias-upload.component */ "./src/app/components/dashboard/medias-upload/medias-upload.component.ts");
/* harmony import */ var src_app_components_dashboard_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! src/app/components/dashboard/not-found/not-found.component */ "./src/app/components/dashboard/not-found/not-found.component.ts");
/* harmony import */ var src_app_components_dashboard_crud_crud_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! src/app/components/dashboard/crud/crud.component */ "./src/app/components/dashboard/crud/crud.component.ts");
/* harmony import */ var src_app_components_dashboard_crud_create_crud_create_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! src/app/components/dashboard/crud-create/crud-create.component */ "./src/app/components/dashboard/crud-create/crud-create.component.ts");
/* harmony import */ var src_app_components_dashboard_crud_edit_crud_edit_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! src/app/components/dashboard/crud-edit/crud-edit.component */ "./src/app/components/dashboard/crud-edit/crud-edit.component.ts");
/* harmony import */ var src_app_guards_crud_create_guard__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! src/app/guards/crud-create.guard */ "./src/app/guards/crud-create.guard.ts");
/* harmony import */ var src_app_components_dashboard_access_denied_access_denied_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! src/app/components/dashboard/access-denied/access-denied.component */ "./src/app/components/dashboard/access-denied/access-denied.component.ts");
/* harmony import */ var src_app_guards_crud_list_guard__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! src/app/guards/crud-list.guard */ "./src/app/guards/crud-list.guard.ts");
/* harmony import */ var src_app_guards_crud_edit_guard__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! src/app/guards/crud-edit.guard */ "./src/app/guards/crud-edit.guard.ts");
/* harmony import */ var src_app_guards_check_registration_status_guard__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! src/app/guards/check-registration-status.guard */ "./src/app/guards/check-registration-status.guard.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

































var RoutesModule = /** @class */ (function () {
    function RoutesModule() {
    }
    RoutesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot([
                    {
                        path: '',
                        redirectTo: 'auth/login',
                        pathMatch: 'full',
                    }, {
                        path: 'do-setup',
                        component: src_app_components_do_setup_do_setup_component__WEBPACK_IMPORTED_MODULE_12__["DoSetupComponent"],
                        canActivate: [src_app_guards_app_state_guard__WEBPACK_IMPORTED_MODULE_14__["PreventAppInstalledGuard"]],
                        children: [
                            {
                                path: '',
                                component: src_app_components_do_setup_setup_home_setup_home_component__WEBPACK_IMPORTED_MODULE_2__["SetupHomeComponent"]
                            }, {
                                path: 'database',
                                component: src_app_components_do_setup_database_database_component__WEBPACK_IMPORTED_MODULE_3__["DatabaseComponent"]
                            }, {
                                path: 'application',
                                component: src_app_components_do_setup_application_application_component__WEBPACK_IMPORTED_MODULE_4__["ApplicationComponent"]
                            }
                        ]
                    }, {
                        path: 'auth',
                        component: src_app_components_auth_auth_component__WEBPACK_IMPORTED_MODULE_13__["AuthComponent"],
                        canActivate: [src_app_guards_check_app_installed_guard__WEBPACK_IMPORTED_MODULE_18__["PreventAppNotInstalledGuard"]],
                        children: [
                            {
                                path: 'logout',
                                component: src_app_components_auth_logout_logout_component__WEBPACK_IMPORTED_MODULE_6__["LogoutComponent"]
                            }, {
                                path: 'register',
                                component: src_app_components_auth_register_register_component__WEBPACK_IMPORTED_MODULE_7__["RegisterComponent"],
                                canActivate: [src_app_guards_check_registration_status_guard__WEBPACK_IMPORTED_MODULE_32__["CheckRegistrationStatusGuard"]]
                            }, {
                                path: 'login',
                                component: src_app_components_auth_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"]
                            }
                        ]
                    }, {
                        path: 'dashboard',
                        component: src_app_components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_15__["DashboardComponent"],
                        canActivate: [src_app_guards_require_logged_guard__WEBPACK_IMPORTED_MODULE_16__["RequireLoggedGuard"]],
                        children: [
                            {
                                path: '',
                                component: src_app_components_dashboard_home_home_component__WEBPACK_IMPORTED_MODULE_8__["DashboardHomeComponent"]
                            }, {
                                path: 'users',
                                component: src_app_components_dashboard_users_users_component__WEBPACK_IMPORTED_MODULE_9__["UsersComponent"]
                            }, {
                                path: 'users/edit/:id',
                                component: src_app_components_dashboard_users_edit_users_edit_component__WEBPACK_IMPORTED_MODULE_20__["UsersEditComponent"]
                            }, {
                                path: 'users/create',
                                component: src_app_components_dashboard_users_create_users_create_component__WEBPACK_IMPORTED_MODULE_19__["UsersCreateComponent"]
                            }, {
                                path: 'profile',
                                component: src_app_components_dashboard_profile_profile_component__WEBPACK_IMPORTED_MODULE_21__["ProfileComponent"]
                            }, {
                                path: 'modules',
                                component: src_app_components_dashboard_modules_modules_component__WEBPACK_IMPORTED_MODULE_10__["ModulesComponent"]
                            }, {
                                path: 'modules/upload',
                                component: src_app_components_dashboard_modules_upload_modules_upload_component__WEBPACK_IMPORTED_MODULE_17__["ModulesUploadComponent"]
                            }, {
                                path: 'settings',
                                component: src_app_components_dashboard_settings_settings_component__WEBPACK_IMPORTED_MODULE_11__["SettingsComponent"]
                            }, {
                                path: 'medias',
                                component: src_app_components_dashboard_medias_medias_component__WEBPACK_IMPORTED_MODULE_22__["MediasComponent"]
                            }, {
                                path: 'medias/upload',
                                component: src_app_components_dashboard_medias_upload_medias_upload_component__WEBPACK_IMPORTED_MODULE_23__["MediasUploadComponent"]
                            }, {
                                path: 'crud/:namespace',
                                component: src_app_components_dashboard_crud_crud_component__WEBPACK_IMPORTED_MODULE_25__["CrudComponent"],
                                canActivate: [
                                    src_app_guards_crud_list_guard__WEBPACK_IMPORTED_MODULE_30__["CrudListGuard"]
                                ]
                            }, {
                                path: 'crud/:namespace/create',
                                component: src_app_components_dashboard_crud_create_crud_create_component__WEBPACK_IMPORTED_MODULE_26__["CrudCreateComponent"],
                                canActivate: [
                                    src_app_guards_crud_create_guard__WEBPACK_IMPORTED_MODULE_28__["CrudCreateGuard"]
                                ]
                            }, {
                                path: 'crud/:namespace/edit/:id',
                                component: src_app_components_dashboard_crud_edit_crud_edit_component__WEBPACK_IMPORTED_MODULE_27__["CrudEditComponent"],
                                canActivate: [
                                    src_app_guards_crud_edit_guard__WEBPACK_IMPORTED_MODULE_31__["CrudEditGuard"]
                                ]
                            }, {
                                path: 'access-denied',
                                component: src_app_components_dashboard_access_denied_access_denied_component__WEBPACK_IMPORTED_MODULE_29__["AccessDeniedComponent"]
                            }, {
                                path: '**',
                                component: src_app_components_dashboard_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_24__["NotFoundComponent"]
                            }
                        ]
                    }
                ])
            ]
        })
    ], RoutesModule);
    return RoutesModule;
}());



/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\public_html\cms\src\public\tendoo-setup\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map