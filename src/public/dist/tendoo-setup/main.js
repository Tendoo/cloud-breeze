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
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var src_modules_material_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/modules/material.module */ "./src/modules/material.module.ts");
/* harmony import */ var _components_do_setup_setup_home_setup_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/do-setup/setup-home/setup-home.component */ "./src/app/components/do-setup/setup-home/setup-home.component.ts");
/* harmony import */ var _components_do_setup_database_database_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/do-setup/database/database.component */ "./src/app/components/do-setup/database/database.component.ts");
/* harmony import */ var _components_do_setup_application_application_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/do-setup/application/application.component */ "./src/app/components/do-setup/application/application.component.ts");
/* harmony import */ var _components_auth_login_login_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/auth/login/login.component */ "./src/app/components/auth/login/login.component.ts");
/* harmony import */ var _components_auth_logout_logout_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/auth/logout/logout.component */ "./src/app/components/auth/logout/logout.component.ts");
/* harmony import */ var _components_auth_register_register_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/auth/register/register.component */ "./src/app/components/auth/register/register.component.ts");
/* harmony import */ var _components_dashboard_users_users_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/dashboard/users/users.component */ "./src/app/components/dashboard/users/users.component.ts");
/* harmony import */ var _components_dashboard_modules_modules_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/dashboard/modules/modules.component */ "./src/app/components/dashboard/modules/modules.component.ts");
/* harmony import */ var _components_dashboard_settings_settings_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/dashboard/settings/settings.component */ "./src/app/components/dashboard/settings/settings.component.ts");
/* harmony import */ var src_modules_routes_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/modules/routes.module */ "./src/modules/routes.module.ts");
/* harmony import */ var _components_dashboard_home_home_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/dashboard/home/home.component */ "./src/app/components/dashboard/home/home.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_fields_fields_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./shared/fields/fields.component */ "./src/app/shared/fields/fields.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_loader_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./services/loader.service */ "./src/app/services/loader.service.ts");
/* harmony import */ var _components_do_setup_do_setup_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/do-setup/do-setup.component */ "./src/app/components/do-setup/do-setup.component.ts");
/* harmony import */ var _components_auth_auth_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/auth/auth.component */ "./src/app/components/auth/auth.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/dashboard/dashboard.component */ "./src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var _components_dashboard_modules_upload_modules_upload_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/dashboard/modules-upload/modules-upload.component */ "./src/app/components/dashboard/modules-upload/modules-upload.component.ts");
/* harmony import */ var _shared_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./shared/confirm-dialog/confirm-dialog.component */ "./src/app/shared/confirm-dialog/confirm-dialog.component.ts");
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
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _components_do_setup_setup_home_setup_home_component__WEBPACK_IMPORTED_MODULE_7__["SetupHomeComponent"],
                _components_do_setup_database_database_component__WEBPACK_IMPORTED_MODULE_8__["DatabaseComponent"],
                _components_do_setup_application_application_component__WEBPACK_IMPORTED_MODULE_9__["ApplicationComponent"],
                _components_auth_login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"],
                _components_auth_logout_logout_component__WEBPACK_IMPORTED_MODULE_11__["LogoutComponent"],
                _components_auth_register_register_component__WEBPACK_IMPORTED_MODULE_12__["RegisterComponent"],
                _components_dashboard_users_users_component__WEBPACK_IMPORTED_MODULE_13__["UsersComponent"],
                _components_dashboard_modules_modules_component__WEBPACK_IMPORTED_MODULE_14__["ModulesComponent"],
                _components_dashboard_settings_settings_component__WEBPACK_IMPORTED_MODULE_15__["SettingsComponent"],
                _components_dashboard_home_home_component__WEBPACK_IMPORTED_MODULE_17__["DashboardHomeComponent"],
                _shared_fields_fields_component__WEBPACK_IMPORTED_MODULE_19__["FieldsComponent"],
                _components_do_setup_do_setup_component__WEBPACK_IMPORTED_MODULE_22__["DoSetupComponent"],
                _components_auth_auth_component__WEBPACK_IMPORTED_MODULE_23__["AuthComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_24__["HomeComponent"],
                _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_25__["DashboardComponent"],
                _components_dashboard_modules_upload_modules_upload_component__WEBPACK_IMPORTED_MODULE_26__["ModulesUploadComponent"],
                _shared_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_27__["ConfirmDialogComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["FlexLayoutModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_18__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_20__["HttpClientModule"],
                src_modules_material_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"],
                src_modules_routes_module__WEBPACK_IMPORTED_MODULE_16__["RoutesModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_18__["FormsModule"]
            ],
            entryComponents: [
                _shared_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_27__["ConfirmDialogComponent"]
            ],
            providers: [
                _services_loader_service__WEBPACK_IMPORTED_MODULE_21__["LoaderService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



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
            var finalRules_1 = [];
            var rules = validation.split('|');
            var minRule_1 = /(min)\:([0-9])+/g;
            var maxRule_1 = /(max)\:([0-9])+/g;
            var matchRule_1 = /(matches):(\w+)/g;
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
     * Build FormControl from Field object
     * create FormControl if it's not defined and call
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

module.exports = "<div fxFill fxLayout=\"row\" fxLayoutAlign=\"center center\" class=\"bg-content\">\r\n    <div \r\n        fxFlex.xs=\"90%\" \r\n        fxFlex.sm=\"70%\" \r\n        fxFlex.md=\"50%\" \r\n        fxFlex.lg=\"30%\" \r\n        fxFlex.xl=\"20%\">\r\n        <router-outlet></router-outlet>\r\n    </div>\r\n</div>"

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

module.exports = "<form [formGroup]=\"loginForm\">\r\n    <mat-card color=\"primary\">\r\n        <mat-card-title>Authenticating</mat-card-title>\r\n        <mat-card-content>\r\n            <app-fields [field]=\"field\" [group]=\"loginForm\" *ngFor=\"let field of fields\"></app-fields>\r\n        </mat-card-content>\r\n        <mat-divider *ngIf=\"!tendoo.isLoading\"></mat-divider>\r\n        <mat-progress-bar *ngIf=\"tendoo.auth.isLoading\" mode=\"indeterminate\" style=\"height: 1px;position: absolute;left: 0;\"></mat-progress-bar>\r\n        <mat-card-actions>\r\n            <button [disabled]=\"tendoo.auth.isLoading\" (click)=\"login()\" mat-button=\"\">\r\n                Login\r\n            </button>\r\n        </mat-card-actions>\r\n    </mat-card>\r\n</form>"

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
        this.login();
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
            _this.tendoo.auth.setCredentials(result.user.id, result.token);
            _this.snackbar.open(result.message, null, {
                duration: 3000
            });
            _this.router.navigateByUrl('dashboard/modules');
            /**
             * delay redirecting
             */
            setTimeout(function () {
            }, 100);
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
    function LogoutComponent() {
    }
    LogoutComponent.prototype.ngOnInit = function () {
    };
    LogoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-logout',
            template: __webpack_require__(/*! ./logout.component.html */ "./src/app/components/auth/logout/logout.component.html"),
            styles: [__webpack_require__(/*! ./logout.component.css */ "./src/app/components/auth/logout/logout.component.css")]
        }),
        __metadata("design:paramtypes", [])
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

module.exports = "<p>\r\n  register works!\r\n</p>\r\n"

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
    function RegisterComponent() {
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/components/auth/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/components/auth/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#aside-nav-list {\r\n    padding: 0%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0NBQ2YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNhc2lkZS1uYXYtbGlzdCB7XHJcbiAgICBwYWRkaW5nOiAwJTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\" fxFill>\r\n    <div>\r\n        <mat-toolbar color=\"primary\">\r\n            <span>Tendoo CMS</span>\r\n        </mat-toolbar>\r\n    </div>\r\n    \r\n    <div fxFlex fxLayout=\"row\">\r\n        <div fxFlex=\"250px\"  fxLayout=\"column\" class=\"aside-menu\">\r\n            <div fxFlex>\r\n                <mat-nav-list id=\"aside-nav-list\">\r\n                    <mat-list-item [routerLink]=\"link.href\" *ngFor=\"let link of asideLink\">\r\n                        <a matLine >{{ link.label }}</a>\r\n                    </mat-list-item>\r\n                </mat-nav-list>\r\n            </div>    \r\n        </div>\r\n        <mat-divider [vertical]=\"true\"></mat-divider>\r\n        <div fxFlex=\"auto\" fxLayout=\"column\">\r\n            <router-outlet></router-outlet>\r\n        </div>\r\n    </div>\r\n</div>"

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
    function DashboardComponent() {
        this.asideLink = [];
        this.asideLink = [
            {
                label: 'Dashboard',
                namespace: 'dashboard',
                href: '/dashboard',
            }, {
                label: 'Users',
                namespace: 'users',
                href: '/dashboard/users',
            }, {
                label: 'Modules',
                namespace: 'users',
                href: '/dashboard/modules',
            }
        ];
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/components/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/components/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [])
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

module.exports = "<div fxLayout=\"column\" fxFlex=\"100%\">\n    <div fxFlex=\"150px\" fxLayout=\"row\" class=\"bg-primary p-1\">\n        <div fxFlex>\n            <h1 class=\"mat-display-1 mb-0\">Upload a module</h1>\n            <span class=\"mat-headline\">upload a new module to extend Tendoo CMS features</span>\n        </div>\n        <div fxFlex=\"200px\" fxLayoutAlign=\"end start\">\n            <button routerLink=\"/dashboard/modules\" mat-button color=\"warn\">List of modules</button>\n        </div>\n    </div>\n    <mat-progress-bar color=\"warn\" style=\"height: 1px\" *ngIf=\"tendoo.modules.isLoading\" mode=\"indeterminate\"></mat-progress-bar>\n    <mat-divider *ngIf=\"!tendoo.modules.isLoading\"></mat-divider>\n    <div class=\"p-2 bg-content\" fxFlex>\n        <mat-card>\n            <mat-card-title>Upload a file</mat-card-title>\n            <mat-card-content>\n                <p>choose the file you would like to upload on Tendoo CMS</p>\n                <input (change)=\"handleFileInput($event.target.files)\" type=\"file\" name=\"\" id=\"\">\n            </mat-card-content>\n            <mat-card-actions>\n                <button [disabled]=\"tendoo.modules.isLoading\" (click)=\"upload()\" mat-button color=\"primary\">Upload</button>\n            </mat-card-actions>\n        </mat-card>\n    </div>\n</div>"

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

module.exports = "<div fxLayout=\"column\" fxFlex=\"100%\">\r\n    <div fxFlex=\"150px\" fxLayout=\"row\" class=\"bg-primary p-1\">\r\n        <div fxFlex>\r\n            <h1 class=\"mat-display-1 mb-0\">Modules</h1>\r\n            <span class=\"mat-headline\">Display and manage all available modules</span>\r\n        </div>\r\n        <div fxFlex=\"200px\" fxLayoutAlign=\"end start\">\r\n            <button routerLink=\"/dashboard/modules/upload\" mat-button color=\"warn\">Upload a module</button>\r\n        </div>\r\n    </div>\r\n    <mat-progress-bar color=\"warn\" style=\"height: 1px\" *ngIf=\"tendoo.modules.isLoading\" mode=\"indeterminate\"></mat-progress-bar>\r\n    <mat-divider  *ngIf=\"!tendoo.modules.isLoading\"></mat-divider>\r\n    <div class=\"p-2 bg-content\" fxFlex fxLayoutGap=\"3em\">\r\n        <div \r\n            style=\"height:200px\"\r\n            *ngFor=\"let module of modules\"\r\n            fxFlex.xs=\"100%\" \r\n            fxFlex.sm=\"50%\" \r\n            fxFlex.md=\"50%\" \r\n            fxFlex.lg=\"25%\" \r\n            fxFlex.xl=\"20%\">\r\n            <mat-card fxFill fxLayout=\"column\">\r\n                <mat-card-title>{{ module.name }}</mat-card-title>\r\n                <mat-card-content fxFlex>{{ module.description }}</mat-card-content>\r\n                <mat-card-actions fxLayoutAlign=\"space-between\">\r\n                    <button [disabled]=\"tendoo.modules.isLoading\" (click)=\"loadModules()\" mat-button color=\"primary\">Details</button>\r\n                    <button [disabled]=\"tendoo.modules.isLoading\" *ngIf=\"module.enabled\" (click)=\"setStatus( module, 'disable' )\"  mat-button color=\"primary\">Disable</button>\r\n                    <button [disabled]=\"tendoo.modules.isLoading\" *ngIf=\"! module.enabled\" (click)=\"setStatus( module, 'enable' )\"  mat-button color=\"accent\">Enable</button>\r\n                    <button [disabled]=\"tendoo.modules.isLoading\" (click)=\"delete( module )\" mat-button color=\"warn\">Delete</button>\r\n                </mat-card-actions>\r\n            </mat-card>\r\n        </div>\r\n        <div>\r\n            <mat-card *ngIf=\"modules.length === 0\">\r\n                <mat-card-title>No module has been yet uploaded</mat-card-title>\r\n            </mat-card>\r\n        </div>\r\n    </div>\r\n</div>"

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
    function ModulesComponent(tendoo, snackbar, dialog, responsive) {
        this.tendoo = tendoo;
        this.snackbar = snackbar;
        this.dialog = dialog;
        this.responsive = responsive;
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
            _this.loadModules();
            _this.dialog
                .getDialogById('confirm-enable-module')
                .close();
        }, function (result) {
            _this.snackbar.open(result.error.message, null, {
                duration: 4000
            });
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
            src_app_services_responsive_service__WEBPACK_IMPORTED_MODULE_4__["ResponsiveService"]])
    ], ModulesComponent);
    return ModulesComponent;
}());



/***/ }),

/***/ "./src/app/components/dashboard/settings/settings.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/dashboard/settings/settings.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZGFzaGJvYXJkL3NldHRpbmdzL3NldHRpbmdzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/dashboard/settings/settings.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/dashboard/settings/settings.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  settings works!\r\n</p>\r\n"

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
    function SettingsComponent() {
    }
    SettingsComponent.prototype.ngOnInit = function () {
    };
    SettingsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-settings',
            template: __webpack_require__(/*! ./settings.component.html */ "./src/app/components/dashboard/settings/settings.component.html"),
            styles: [__webpack_require__(/*! ./settings.component.css */ "./src/app/components/dashboard/settings/settings.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SettingsComponent);
    return SettingsComponent;
}());



/***/ }),

/***/ "./src/app/components/dashboard/users/users.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/dashboard/users/users.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\r\n    height: 100%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9kYXNoYm9hcmQvdXNlcnMvdXNlcnMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7Q0FDaEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2Rhc2hib2FyZC91c2Vycy91c2Vycy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/components/dashboard/users/users.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/dashboard/users/users.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\" fxFlex=\"100%\" style=\"overflow-y:auto\">\r\n    <div fxFlex=\"150px\" fxLayout=\"row\" class=\"bg-primary p-1\">\r\n        <div fxFlex>\r\n            <h1 class=\"mat-display-1 mb-0\">Users</h1>\r\n            <span class=\"mat-title\">Displays and manage all registered users</span>\r\n        </div>\r\n        <div fxFlex=\"200px\" fxLayoutAlign=\"end start\">\r\n            <button routerLink=\"/dashboard/modules/upload\" mat-button color=\"warn\">Create a user</button>\r\n        </div>\r\n    </div>\r\n    <mat-progress-bar color=\"warn\" style=\"height: 1px\" *ngIf=\"tendoo.users.isLoading\" mode=\"indeterminate\"></mat-progress-bar>\r\n    <mat-divider  *ngIf=\"!tendoo.modules.isLoading\"></mat-divider>\r\n    <div class=\"p-2 bg-content\" fxFlex=\"1 0 auto\" fxLayout=\"row\">\r\n        <table matSort (matSortChange)=\"sortData($event)\" mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\" fxFlex>\r\n            <!--- Note that these columns can be defined in any order.\r\n                The actual rendered columns are set as a property on the row definition\" -->\r\n                \r\n                <!-- Position Column -->\r\n                <ng-container matColumnDef=\"id\">\r\n                    <th mat-sort-header=\"name\" mat-header-cell *matHeaderCellDef style=\"width: 40px\">\r\n                        <mat-checkbox class=\"example-margin\" [(ngModel)]=\"indeterminate\"></mat-checkbox>\r\n                    </th>\r\n                    <td mat-cell *matCellDef=\"let element\" style=\"width: 40px\">\r\n                        <mat-checkbox class=\"example-margin\" [(ngModel)]=\"element.checked\">{{ element.checked }}</mat-checkbox>\r\n                    </td>\r\n                </ng-container>\r\n                \r\n                <ng-container matColumnDef=\"position\">\r\n                    <th mat-sort-header=\"position\" mat-header-cell *matHeaderCellDef> No. </th>\r\n                    <td mat-cell *matCellDef=\"let element\"> {{element.position}} </td>\r\n                </ng-container>\r\n                \r\n                <!-- Name Column -->\r\n                <ng-container matColumnDef=\"name\">\r\n                    <th mat-sort-header=\"name\" mat-header-cell *matHeaderCellDef> Name </th>\r\n                    <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\r\n                </ng-container>\r\n                \r\n                <!-- Weight Column -->\r\n                <ng-container matColumnDef=\"weight\">\r\n                    <th mat-sort-header=\"weight\" mat-header-cell *matHeaderCellDef> Weight </th>\r\n                    <td mat-cell *matCellDef=\"let element\"> {{element.weight}} </td>\r\n                </ng-container>\r\n                \r\n                <!-- Symbol Column -->\r\n                <ng-container matColumnDef=\"symbol\">\r\n                    <th [mat-sort-header]=\"symbol\" mat-header-cell *matHeaderCellDef> Symbol </th>\r\n                    <td mat-cell *matCellDef=\"let element\"> {{element.symbol}} </td>\r\n                </ng-container>\r\n                \r\n                <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n                <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n            </table>\r\n        </div>\r\n    </div>"

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
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ELEMENT_DATA = [
    { id: 1, position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
    { id: 1, position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
    { id: 1, position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
    { id: 1, position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
    { id: 1, position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
    { id: 1, position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
    { id: 1, position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
    { id: 1, position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
    { id: 1, position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
    { id: 1, position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
    { id: 1, position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
    { id: 1, position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
    { id: 1, position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
    { id: 1, position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
    { id: 1, position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
    { id: 1, position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
    { id: 1, position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
    { id: 1, position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
    { id: 1, position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
    { id: 1, position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
    { id: 1, position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
    { id: 1, position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];
var UsersComponent = /** @class */ (function () {
    function UsersComponent(tendoo) {
        this.tendoo = tendoo;
        this.displayedColumns = [];
        this.dataSource = ELEMENT_DATA;
    }
    UsersComponent.prototype.ngOnInit = function () {
        Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["forkJoin"])(this.tendoo.users.getUsers(), this.tendoo.tables.getColumns('dashboard.users'))
            .subscribe(function (response) {
            console.log(response);
        });
    };
    UsersComponent.prototype.sortData = function (event) {
        console.log(event);
    };
    UsersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-users',
            template: __webpack_require__(/*! ./users.component.html */ "./src/app/components/dashboard/users/users.component.html"),
            styles: [__webpack_require__(/*! ./users.component.css */ "./src/app/components/dashboard/users/users.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_tendoo_service__WEBPACK_IMPORTED_MODULE_1__["TendooService"]])
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
                        _this.router.navigateByUrl('');
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
        // return true;
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
    function RequireLoggedGuard(router) {
        this.router = router;
    }
    RequireLoggedGuard.prototype.canActivate = function (next, state) {
        if (Object.values(_services_loader_service__WEBPACK_IMPORTED_MODULE_2__["LoaderService"].headers).length === 0) {
            this.router.navigateByUrl('auth/login?notice=login-required');
            return false;
        }
        return true;
    };
    RequireLoggedGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], RequireLoggedGuard);
    return RequireLoggedGuard;
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
    function LoaderService(http) {
        this.http = http;
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
            return _this.http.post(url, data, {
                headers: LoaderService_1.headers
            }).subscribe(function (result) {
                _this.isLoading = false;
                observer.next(result);
                observer.complete();
            }, function (error) {
                _this.isLoading = false;
                observer.error(error);
            });
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
            }, function (error) {
                _this.isLoading = false;
                observer.error(error);
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
                _this.isLoading = false;
                observer.next(result);
                observer.complete();
            }, function (error) {
                _this.isLoading = false;
                observer.error(error);
            });
        });
    };
    var LoaderService_1;
    LoaderService.headers = {};
    LoaderService = LoaderService_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
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
    TendooAuthService.prototype.login = function (credentials) {
        return this.post(this.baseUrl + 'tendoo/auth/login', credentials);
    };
    TendooAuthService.prototype.setCredentials = function (id, token) {
        _loader_service__WEBPACK_IMPORTED_MODULE_1__["LoaderService"].headers = {
            'X-AUTH-TOKEN': token
        };
    };
    TendooAuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        })
    ], TendooAuthService);
    return TendooAuthService;
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
    TendooFieldsService.prototype.get = function (namespace) {
        return this.get(this.baseUrl + 'tendoo/fields/' + namespace);
    };
    TendooFieldsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        })
    ], TendooFieldsService);
    return TendooFieldsService;
}(_tendoo_auth_service__WEBPACK_IMPORTED_MODULE_1__["TendooAuthService"]));



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
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * get users
     * @return json
     */
    TendooUsersService.prototype.getUsers = function () {
        return this.get(this.baseUrl + 'tendoo/users');
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
    function TendooService(http, auth, fields, modules, users, tables) {
        var _this = _super.call(this, http) || this;
        _this.auth = auth;
        _this.fields = fields;
        _this.modules = modules;
        _this.users = users;
        _this.tables = tables;
        return _this;
    }
    TendooService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _tendoo_auth_service__WEBPACK_IMPORTED_MODULE_3__["TendooAuthService"],
            _tendoo_fields_service__WEBPACK_IMPORTED_MODULE_4__["TendooFieldsService"],
            _tendoo_modules_service__WEBPACK_IMPORTED_MODULE_5__["TendooModulesService"],
            _tendoo_users_service__WEBPACK_IMPORTED_MODULE_6__["TendooUsersService"],
            _tendoo_table_service__WEBPACK_IMPORTED_MODULE_7__["TendooTableService"]])
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

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb25maXJtLWRpYWxvZy9jb25maXJtLWRpYWxvZy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/shared/confirm-dialog/confirm-dialog.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/shared/confirm-dialog/confirm-dialog.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxFlex=\"auto\" FxLayout=\"column\" fxLayoutAlign=\"center center\">\n\t<div class=\"text-center\" fxFlex.lg=\"80%\" fxFlex.md=\"80%\" fxFlex.xs=\"100%\" fxFlex.sm=\"100%\">\n\t\t<p class=\"mat-display-1 m-0 py-3\">\n\t\t\t{{ data.title }}\n\t\t</p>\n\t\t<p class=\"mat-title\">{{ data.message }}</p>\n\t</div>\n</div>\n<mat-divider></mat-divider>\n<div fxLayout=\"row\" fxFlex=\"50px\" fxLayoutAlign=\"stretch stretch\">\n\t<ng-container *ngFor=\"let button of data.buttons\">\n\t\t<button (click)=\"handle( button )\" fxFlex=\"auto\" mat-button=\"\">\n\t\t\t<span  class=\"mat-subheading-2\">{{ button.label }}</span>\n\t\t</button>\n\t\t<mat-divider [vertical]=\"true\"></mat-divider>\n\t</ng-container>\n</div>"

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

module.exports = "<ng-container [formGroup]=\"group\">\r\n\t<!-- text field field -->\r\n\t\r\n\t<mat-form-field [appearance]=\"field.appearance || 'standard'\" *ngIf=\"[ 'text', 'password', 'email' ].indexOf( field.type ) != -1\" class=\"example-full-width w-100\">\r\n\t\t<mat-label>{{ field.label }}</mat-label>\r\n\t\t<input [readonly]=\"field.readonly\" [type]=\"field.type\" [formControlName]=\"field.name\" matInput [placeholder]=\"field.label\" [value]=\"field.value ? field.value : ''\">\r\n\t\t<mat-hint *ngIf=\"field.control.valid || field.control.untouched\">{{ field.description }}</mat-hint>\r\n\t\t<mat-error *ngIf=\"field.control.invalid && field.control.touched\">\r\n\t\t\t<span *ngIf=\"field.control.errors.required\">This field is required<br></span>\r\n\t\t\t<span *ngIf=\"field.control.errors.email\">This field is not a valid email<br></span>\r\n\t\t\t<span *ngIf=\"field.control.errors.minlength\">this field doesn't match the required length : {{field.control.errors.minlength.requiredLength }}<br></span>\r\n\t\t\t<span *ngIf=\"field.control.errors.matches\">this field doesn't match the field : {{ field.control.errors.matches.formControlName }}<br></span>\r\n\t\t\t<span *ngIf=\"field.control.errors.number\">this field require a valid number<br></span>\r\n\t\t\t<span *ngFor=\"let error of field?.errors\">{{ error }}<br></span>\r\n\t\t</mat-error>\r\n\t</mat-form-field>\r\n\t\r\n\t<!-- date time field -->\r\n\t\r\n\t<mat-form-field [appearance]=\"field.appearance || 'standard'\" *ngIf=\"field.type == 'datetime'\" class=\"w-100\">\r\n\t\t<mat-label>{{ field.label }}</mat-label>\r\n\t\t<input [readonly]=\"field.readonly\" [formControlName]=\"field.name\" matInput [matDatepicker]=\"picker\" [placeholder]=\"field.label\">\r\n\t\t<mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n\t\t<mat-datepicker #picker startView=\"year\" [startAt]=\"startDate\"></mat-datepicker>\r\n\t\t<mat-hint *ngIf=\"field.control.valid || field.control.untouched\">{{ field.description }}</mat-hint>\r\n\t\t<mat-error *ngIf=\"field.control.invalid && field.control.touched\">\r\n\t\t\t<span *ngIf=\"field.control.errors.required\">This field is required<br></span>\r\n\t\t\t<span *ngIf=\"field.control.errors.email\">This field is not a valid email<br></span>\r\n\t\t\t<span *ngIf=\"field.control.errors.minlength\">this field doesn't match the required length : {{field.control.errors.minlength.requiredLength }}<br></span>\r\n\t\t\t<span *ngIf=\"field.control.errors.matches\">this field doesn't match the field : {{ field.control.errors.matches.formControlName }}<br></span>\r\n\t\t\t<span *ngIf=\"field.control.errors.number\">this field require a valid number<br></span>\r\n\t\t\t<span *ngFor=\"let error of field?.errors\">{{ error }}<br></span>\r\n\t\t</mat-error>\r\n\t</mat-form-field>\r\n\t\r\n\t<!-- select field -->\r\n\t\r\n\t<mat-form-field [appearance]=\"field.appearance || 'standard'\" *ngIf=\"field.type == 'select'\" class=\"w-100\">\r\n\t\t<mat-label>{{ field.label }}</mat-label>\r\n\t\t<mat-select [formControlName]=\"field.name\" [placeholder]=\"field.label\">\r\n\t\t\t<mat-option *ngFor=\"let option of field.options\" [value]=\"option.value\">\r\n\t\t\t{{ option.label }}\r\n\t\t\t</mat-option>\r\n\t\t</mat-select>\r\n\t\t<mat-hint *ngIf=\"field.control.valid || field.control.untouched\">{{ field.description }}</mat-hint>\r\n\t\t<mat-error *ngIf=\"field.control.invalid && field.control.touched\">\r\n\t\t\t<span *ngIf=\"field.control.errors.required\">This field is required<br></span>\r\n\t\t\t<span *ngIf=\"field.control.errors.email\">This field is not a valid email<br></span>\r\n\t\t\t<span *ngIf=\"field.control.errors.minlength\">this field doesn't match the required length : {{field.control.errors.minlength.requiredLength }}<br></span>\r\n\t\t\t<span *ngIf=\"field.control.errors.matches\">this field doesn't match the field : {{ field.control.errors.matches.formControlName }}<br></span>\r\n\t\t\t<span *ngIf=\"field.control.errors.number\">this field require a valid number<br></span>\r\n\t\t\t<span *ngFor=\"let error of field?.errors\">{{ error }}<br></span>\r\n\t\t</mat-error>\r\n\t</mat-form-field>\r\n\t\r\n\t<mat-form-field [appearance]=\"field.appearance || 'standard'\" *ngIf=\"field.type == 'multiple_select'\" multiple class=\"w-100\">\r\n\t\t<mat-label>{{ field.label }}</mat-label>\r\n\t\t<mat-select [formControlName]=\"field.name\" [placeholder]=\"field.label\">\r\n\t\t\t<mat-option *ngFor=\"let option of field.options\" [value]=\"option.value\">\r\n\t\t\t{{ option.label }}\r\n\t\t\t</mat-option>\r\n\t\t</mat-select>\r\n\t\t<mat-hint *ngIf=\"field.control.valid || field.control.untouched\">{{ field.description }}</mat-hint>\r\n\t\t<mat-error *ngIf=\"field.control.invalid && field.control.touched\">\r\n\t\t\t<span *ngIf=\"field.control.errors.required\">This field is required<br></span>\r\n\t\t\t<span *ngIf=\"field.control.errors.email\">This field is not a valid email<br></span>\r\n\t\t\t<span *ngIf=\"field.control.errors.minlength\">this field doesn't match the required length : {{field.control.errors.minlength.requiredLength }}<br></span>\r\n\t\t\t<span *ngIf=\"field.control.errors.matches\">this field doesn't match the field : {{ field.control.errors.matches.formControlName }}<br></span>\r\n\t\t\t<span *ngIf=\"field.control.errors.number\">this field require a valid number<br></span>\r\n\t\t\t<span *ngFor=\"let error of field?.errors\">{{ error }}<br></span>\r\n\t\t</mat-error>\r\n\t</mat-form-field>\r\n\t\r\n\t<!-- textarea field -->\r\n\t\r\n\t<mat-form-field [appearance]=\"field.appearance || 'standard'\" *ngIf=\"field.type == 'textarea'\" class=\"w-100\">\r\n\t\t<mat-label>{{ field.label }}</mat-label>\r\n\t\t<textarea [formControlName]=\"field.name\" matInput [placeholder]=\"field.label\"></textarea>\r\n\t\t<mat-hint *ngIf=\"field.control.valid || field.control.untouched\">{{ field.description }}</mat-hint>\r\n\t\t<mat-error *ngIf=\"field.control.invalid && field.control.touched\">\r\n\t\t\t<span *ngIf=\"field.control.errors.required\">This field is required<br></span>\r\n\t\t\t<span *ngIf=\"field.control.errors.email\">This field is not a valid email<br></span>\r\n\t\t\t<span *ngIf=\"field.control.errors.minlength\">this field doesn't match the required length : {{field.control.errors.minlength.requiredLength }}<br></span>\r\n\t\t\t<span *ngIf=\"field.control.errors.matches\">this field doesn't match the field : {{ field.control.errors.matches.formControlName }}<br></span>\r\n\t\t\t<span *ngIf=\"field.control.errors.number\">this field require a valid number<br></span>\r\n\t\t\t<span *ngFor=\"let error of field?.errors\">{{ error }}<br></span>\r\n\t\t</mat-error>\r\n\t</mat-form-field>\r\n\t\r\n\t<!-- text field field -->\r\n\t\r\n\t<mat-form-field [appearance]=\"field.appearance || 'standard'\" *ngIf=\"[ 'number' ].indexOf( field.type ) != -1\" class=\"example-full-width w-100\">\r\n\t\t<mat-label>{{ field.label }}</mat-label>\r\n\t\t<input [readonly]=\"field.readonly\" [formControlName]=\"field.name\" matInput type=\"number\" [placeholder]=\"field.label\" [value]=\"field.value ? field.value : ''\">\r\n\t\t<mat-hint *ngIf=\"field.control.valid || field.control.untouched\">{{ field.description }}</mat-hint>\r\n\t\t<mat-error *ngIf=\"field.control.invalid && field.control.touched\">\r\n\t\t\t<span *ngIf=\"field.control.errors.required\">This field is required<br></span>\r\n\t\t\t<span *ngIf=\"field.control.errors.email\">This field is not a valid email<br></span>\r\n\t\t\t<span *ngIf=\"field.control.errors.minlength\">this field doesn't match the required length : {{field.control.errors.minlength.requiredLength }}<br></span>\r\n\t\t\t<span *ngIf=\"field.control.errors.matches\">this field doesn't match the field : {{ field.control.errors.matches.formControlName }}<br></span>\r\n\t\t\t<span *ngIf=\"field.control.errors.number\">this field require a valid number<br></span>\r\n\t\t\t<span *ngFor=\"let error of field?.errors\">{{ error }}<br></span>\r\n\t\t</mat-error>\t\t\r\n\t</mat-form-field>\r\n\r\n\t<!-- button -->\r\n\t<button [type]=\"field.type\" *ngIf=\"[ 'button' ].indexOf( field.type ) !== -1\" (click)=\"field.onClick( group )\" mat-raised-button color=\"primary\">{{ field.label }}</button>\r\n</ng-container>"

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
        if (['text', 'email', 'select', 'password', 'textarea', 'datetime', 'number', 'multiple_select', 'button'].indexOf(this.field.type) === -1) {
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
/* harmony import */ var src_app_components_home_home_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var src_app_components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/components/dashboard/dashboard.component */ "./src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var src_app_guards_require_logged_guard__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! src/app/guards/require-logged.guard */ "./src/app/guards/require-logged.guard.ts");
/* harmony import */ var src_app_components_dashboard_modules_upload_modules_upload_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! src/app/components/dashboard/modules-upload/modules-upload.component */ "./src/app/components/dashboard/modules-upload/modules-upload.component.ts");
/* harmony import */ var src_app_guards_check_app_installed_guard__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! src/app/guards/check-app-installed.guard */ "./src/app/guards/check-app-installed.guard.ts");
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
                        component: src_app_components_home_home_component__WEBPACK_IMPORTED_MODULE_15__["HomeComponent"]
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
                        canActivate: [src_app_guards_check_app_installed_guard__WEBPACK_IMPORTED_MODULE_19__["PreventAppNotInstalledGuard"]],
                        children: [
                            {
                                path: 'logout',
                                component: src_app_components_auth_logout_logout_component__WEBPACK_IMPORTED_MODULE_6__["LogoutComponent"]
                            }, {
                                path: 'register',
                                component: src_app_components_auth_register_register_component__WEBPACK_IMPORTED_MODULE_7__["RegisterComponent"]
                            }, {
                                path: 'login',
                                component: src_app_components_auth_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"]
                            }
                        ]
                    }, {
                        path: 'dashboard',
                        component: src_app_components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_16__["DashboardComponent"],
                        canActivate: [src_app_guards_require_logged_guard__WEBPACK_IMPORTED_MODULE_17__["RequireLoggedGuard"]],
                        children: [
                            {
                                path: '',
                                component: src_app_components_dashboard_home_home_component__WEBPACK_IMPORTED_MODULE_8__["DashboardHomeComponent"]
                            }, {
                                path: 'users',
                                component: src_app_components_dashboard_users_users_component__WEBPACK_IMPORTED_MODULE_9__["UsersComponent"]
                            }, {
                                path: 'modules',
                                component: src_app_components_dashboard_modules_modules_component__WEBPACK_IMPORTED_MODULE_10__["ModulesComponent"]
                            }, {
                                path: 'modules/upload',
                                component: src_app_components_dashboard_modules_upload_modules_upload_component__WEBPACK_IMPORTED_MODULE_18__["ModulesUploadComponent"]
                            }, {
                                path: 'settings',
                                component: src_app_components_dashboard_settings_settings_component__WEBPACK_IMPORTED_MODULE_11__["SettingsComponent"]
                            },
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