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
/* harmony import */ var _services_setup_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./services/setup.service */ "./src/app/services/setup.service.ts");
/* harmony import */ var _services_loader_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./services/loader.service */ "./src/app/services/loader.service.ts");
/* harmony import */ var _components_do_setup_do_setup_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/do-setup/do-setup.component */ "./src/app/components/do-setup/do-setup.component.ts");
/* harmony import */ var _components_auth_auth_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/auth/auth.component */ "./src/app/components/auth/auth.component.ts");
/* harmony import */ var _guards_app_state_guard__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./guards/app-state.guard */ "./src/app/guards/app-state.guard.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
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
                _components_do_setup_do_setup_component__WEBPACK_IMPORTED_MODULE_23__["DoSetupComponent"],
                _components_auth_auth_component__WEBPACK_IMPORTED_MODULE_24__["AuthComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_26__["HomeComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["FlexLayoutModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_18__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_20__["HttpClientModule"],
                src_modules_material_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"],
                src_modules_routes_module__WEBPACK_IMPORTED_MODULE_16__["RoutesModule"]
            ],
            providers: [
                _services_setup_service__WEBPACK_IMPORTED_MODULE_21__["SetupService"],
                _services_loader_service__WEBPACK_IMPORTED_MODULE_22__["LoaderService"],
                _guards_app_state_guard__WEBPACK_IMPORTED_MODULE_25__["AppStateGuard"]
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

module.exports = "<div fxFill fxLayout=\"row\" fxLayoutAlign=\"center center\">\n    <div \n        fxFlex.xs=\"90%\" \n        fxFlex.sm=\"70%\" \n        fxFlex.md=\"50%\" \n        fxFlex.lg=\"40%\" \n        fxFlex.xl=\"40%\">\n        <router-outlet></router-outlet>\n    </div>\n</div>"

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

module.exports = "<p>\n  login works!\n</p>\n"

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
    function LoginComponent() {
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/components/auth/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/components/auth/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [])
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

module.exports = "<p>\n  logout works!\n</p>\n"

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

module.exports = "<p>\n  register works!\n</p>\n"

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

/***/ "./src/app/components/dashboard/home/home.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/dashboard/home/home.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZGFzaGJvYXJkL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/dashboard/home/home.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/dashboard/home/home.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  home works!\n</p>\n"

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
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/components/dashboard/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DashboardHomeComponent);
    return DashboardHomeComponent;
}());



/***/ }),

/***/ "./src/app/components/dashboard/modules/modules.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/dashboard/modules/modules.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZGFzaGJvYXJkL21vZHVsZXMvbW9kdWxlcy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/dashboard/modules/modules.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/dashboard/modules/modules.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  modules works!\n</p>\n"

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
    function ModulesComponent() {
    }
    ModulesComponent.prototype.ngOnInit = function () {
    };
    ModulesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-modules',
            template: __webpack_require__(/*! ./modules.component.html */ "./src/app/components/dashboard/modules/modules.component.html"),
            styles: [__webpack_require__(/*! ./modules.component.css */ "./src/app/components/dashboard/modules/modules.component.css")]
        }),
        __metadata("design:paramtypes", [])
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

module.exports = "<p>\n  settings works!\n</p>\n"

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

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZGFzaGJvYXJkL3VzZXJzL3VzZXJzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/dashboard/users/users.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/dashboard/users/users.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  users works!\n</p>\n"

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
    function UsersComponent() {
    }
    UsersComponent.prototype.ngOnInit = function () {
    };
    UsersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-users',
            template: __webpack_require__(/*! ./users.component.html */ "./src/app/components/dashboard/users/users.component.html"),
            styles: [__webpack_require__(/*! ./users.component.css */ "./src/app/components/dashboard/users/users.component.css")]
        }),
        __metadata("design:paramtypes", [])
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

module.exports = "<form [formGroup]=\"applicationForm\">\n    <mat-card>\n        <mat-card-title>Configuring Application</mat-card-title>\n        <mat-divider></mat-divider>\n        <mat-card-content>\n            <p style=\"margin: 30px 0 20px\">The connexion with the database is successful. Now we need to setup the admin account.</p>\n            <app-fields [field]=\"field\" [group]=\"applicationForm\" *ngFor=\"let field of fields\"></app-fields>\n        </mat-card-content>\n        <mat-divider *ngIf=\"! setup.isLoading\"></mat-divider>\n        <mat-progress-bar *ngIf=\"setup.isLoading\" mode=\"indeterminate\" style=\"height: 1px;position: absolute;left: 0;\"></mat-progress-bar>\n        <mat-card-actions>\n            <button [disabled]=\"setup.isLoading\" (click)=\"setupApplication()\" mat-button>Setup Application</button>\n        </mat-card-actions>\n    </mat-card>\n</form>"

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

module.exports = "<form [formGroup]=\"setupForm\">\n    <mat-card>\n        <mat-card-title>Configuring Database</mat-card-title>\n        <mat-divider></mat-divider>\n        <mat-card-content>\n            <p style=\"margin: 30px 0 20px\">In order to install Tendoo CMS, please provide all the informations required to connect to the database.</p>\n            <app-fields [field]=\"field\" [group]=\"setupForm\" *ngFor=\"let field of fields\"></app-fields>\n        </mat-card-content>\n        <mat-divider *ngIf=\"! setup.isLoading\"></mat-divider>\n        <mat-progress-bar *ngIf=\"setup.isLoading\" mode=\"indeterminate\" style=\"height: 1px;position: absolute;left: 0;\"></mat-progress-bar>\n        <mat-card-actions>\n            <button [disabled]=\"setup.isLoading\" (click)=\"setupDatabase()\" mat-button>Setup Database</button>\n        </mat-card-actions>\n    </mat-card>\n</form>"

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

module.exports = "<div fxFill fxLayout=\"row\" fxLayoutAlign=\"center center\">\n    <div \n        fxFlex.xs=\"90%\" \n        fxFlex.sm=\"70%\" \n        fxFlex.md=\"50%\" \n        fxFlex.lg=\"40%\" \n        fxFlex.xl=\"40%\">\n        <router-outlet></router-outlet>\n    </div>\n</div>"

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

module.exports = "<mat-card>\n    <mat-card-title>Welcome on Tendoo CMS</mat-card-title>\n    <mat-card-content>\n        Tendoo CMS is ready to be installed. Let's get started\n    </mat-card-content>\n    <mat-divider></mat-divider>\n    <mat-card-actions>\n        <a routerLink=\"/do-setup/database\" mat-button>Database Configuration</a>\n    </mat-card-actions>\n</mat-card>"

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

module.exports = "<p>\n  home works!\n</p>\n<ul>\n  <li><a routerLink=\"do-setup\">Setup</a></li>\n</ul>"

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
/*! exports provided: AppStateGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppStateGuard", function() { return AppStateGuard; });
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




var AppStateGuard = /** @class */ (function () {
    function AppStateGuard(setup, router, snackbar) {
        this.setup = setup;
        this.router = router;
        this.snackbar = snackbar;
    }
    AppStateGuard.prototype.canActivate = function (next, state) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.setup.ping().subscribe(function (result) {
            }, function (result) {
                if (result.error.class === "Tendoo/Core/Exceptions/TendooInstalledException") {
                    _this.router.navigateByUrl('');
                    _this.snackbar.open(result.error.message, null, {
                        duration: 3000
                    });
                    return resolve(false);
                }
                resolve(true);
            });
        });
    };
    AppStateGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_services_setup_service__WEBPACK_IMPORTED_MODULE_2__["SetupService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]])
    ], AppStateGuard);
    return AppStateGuard;
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
    }
    /**
     * Submit post request
     * @param {string} url to access
     * @param data data to submit
     */
    LoaderService.prototype.post = function (url, data) {
        var _this = this;
        return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
            _this.isLoading = true;
            return _this.http.post(url, data).subscribe(function (result) {
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
            return _this.http.get(url).subscribe(function (result) {
                _this.isLoading = false;
                observer.next(result);
                observer.complete();
            }, function (error) {
                _this.isLoading = false;
                observer.error(error);
            });
        });
    };
    LoaderService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], LoaderService);
    return LoaderService;
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
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.baseUrl = tendoo.base_url;
        return _this;
    }
    /**
     * Send post request to the server for db configuration
     * @param fields form field for database configuration
     */
    SetupService.prototype.setupDatabase = function (fields) {
        return this.post(this.baseUrl + 'api/do-setup/database', fields);
    };
    SetupService.prototype.application = function (fields) {
        return this.post(this.baseUrl + 'api/do-setup/application', fields);
    };
    SetupService.prototype.ping = function () {
        return this.get(this.baseUrl + 'api/ping');
    };
    SetupService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        })
    ], SetupService);
    return SetupService;
}(_loader_service__WEBPACK_IMPORTED_MODULE_1__["LoaderService"]));



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
                        canActivate: [
                            src_app_guards_app_state_guard__WEBPACK_IMPORTED_MODULE_14__["AppStateGuard"]
                        ],
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