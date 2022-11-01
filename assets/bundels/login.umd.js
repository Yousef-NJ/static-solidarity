(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('rxjs/operators'), require('@angular/core'), require('@angular/forms'), require('@angular/material'), require('@angular/router'), require('@models/src/lib/models/models'), require('@shared/src/lib/services'), require('@angular/common'), require('@angular/common/http'), require('primeng/tooltip'), require('@shared/src/lib/shared-module')) :
    typeof define === 'function' && define.amd ? define('common/src/lib/components/login', ['exports', 'rxjs/operators', '@angular/core', '@angular/forms', '@angular/material', '@angular/router', '@models/src/lib/models/models', '@shared/src/lib/services', '@angular/common', '@angular/common/http', 'primeng/tooltip', '@shared/src/lib/shared-module'], factory) :
    (global = global || self, factory(global.login = {}, global.rxjs.operators, global.ng.core, global.ng.forms, global.ng.material, global.ng.router, global.models, global.services, global.ng.common, global.ng.common.http, global.tooltip, global.sharedModule));
}(this, (function (exports, operators, core, forms, material, router, models, services, common, http, tooltip, sharedModule) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var LoginComponent = /** @class */ (function () {
        function LoginComponent(translationService, datasourceService, menuService, router, route, snackBar) {
            this.translationService = translationService;
            this.datasourceService = datasourceService;
            this.menuService = menuService;
            this.router = router;
            this.route = route;
            this.snackBar = snackBar;
            this.eAuthenticationType = models.EAuthenticationType;
            this.loginPlaceHolder = 'Username';
            this.isByNationalId = false;
            this.loginForm = new forms.FormGroup({
                username: new forms.FormControl('', { validators: forms.Validators.required, updateOn: 'blur' }),
                password: new forms.FormControl('', [forms.Validators.required])
            });
            this.isSubmitted = false;
            this.error = false;
            this.signing = false;
        }
        /**
         * @return {?}
         */
        LoginComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            var _this = this;
            this.culture = this.data.moduleService.site.culture;
            this.checkLoginMethod();
            this._username.valueChanges.pipe(operators.distinctUntilChanged()).subscribe((/**
             * @param {?} res
             * @return {?}
             */
            function (res) {
                if (res) {
                    _this._username.setValue(_this._username.value.replace(/\s/g, ''));
                    _this._username.updateValueAndValidity();
                }
                _this.errorMsg = " ";
            }));
            this._password.valueChanges.pipe(operators.distinctUntilChanged()).subscribe((/**
             * @param {?} res
             * @return {?}
             */
            function (res) {
                if (res) {
                    _this._password.setValue(_this._password.value.replace(/\s/g, ''));
                    _this._password.updateValueAndValidity();
                }
                _this.errorMsg = " ";
            }));
        };
        /**
         * @return {?}
         */
        LoginComponent.prototype.checkLoginMethod = /**
         * @return {?}
         */
        function () {
            this.isByNationalId = false;
            switch (this.settings.loginType) {
                case 'Email': {
                    this.loginPlaceHolder = 'Email';
                    this.loginForm.controls["username"].setValidators([forms.Validators.required, forms.Validators.email]);
                    break;
                }
                case 'UserName': {
                    this.loginPlaceHolder = 'Username';
                    this.isByNationalId = this.settings.isLoginByNationalId;
                    if (this.settings.isLoginByNationalId) {
                        this.loginForm.controls["username"].setValidators([forms.Validators.required,
                            forms.Validators.maxLength(this.settings.maxlengthValidation || 10),
                            forms.Validators.minLength(this.settings.minlengthValidation || 10)]);
                    }
                    break;
                }
                case 'PhoneNumber': {
                    this.loginPlaceHolder = 'Phone number';
                    break;
                }
                case 'UsernameOrEmail': {
                    this.loginPlaceHolder = 'Username Or Email';
                    break;
                }
                case 'UsernameOrPhone': {
                    this.loginPlaceHolder = 'Username Or Phone number';
                    break;
                }
                case 'PhoneOrEmail': {
                    this.loginPlaceHolder = 'Email Or Phone Number';
                    break;
                }
                default: {
                    this.loginPlaceHolder = 'Email or Username';
                    break;
                }
            }
            this.loginForm.controls["username"].updateValueAndValidity();
        };
        /**
         * @param {?} message
         * @return {?}
         */
        LoginComponent.prototype.openSnackBar = /**
         * @param {?} message
         * @return {?}
         */
        function (message) {
            this.snackBar.open(message, '', {
                duration: 5000,
            });
        };
        /**
         * @param {?} form
         * @return {?}
         */
        LoginComponent.prototype.login = /**
         * @param {?} form
         * @return {?}
         */
        function (form) {
            this.error = false;
            this.isSubmitted = true;
            if (form.invalid) {
                return;
            }
            // Used only for CP if login by national ID
            if (this.loginForm.controls.username.value && this.loginForm.controls.username.value != ''
                && this.loginForm.controls.username.value.startsWith('7')) {
                this.settings.additionalInfoValue = 'SponsorID';
            }
            //  -----------------------------------------------------
            this.signing = true;
            // EskaMedica
            if (this.settings.useEskaMedicaIntegration) {
                this.invokeEskaMedica(this.settings);
            }
            else {
                this.dcmsLogin();
            }
        };
        /**
         * @return {?}
         */
        LoginComponent.prototype.dcmsLogin = /**
         * @return {?}
         */
        function () {
            var _this = this;
            this.data.authService
                .loggeIn(this.loginForm.controls.username.value, this.loginForm.controls.password.value, this.settings.loginType, this.settings.additionalInfoValue)
                .then((/**
             * @param {?} res
             * @return {?}
             */
            function (res) {
                if (res) {
                    if (!_this.settings) {
                        _this.openSnackBar("Something went wrong , please contact the administrators");
                        _this.errorMsg = "Something went wrong , please contact the administrators";
                    }
                    else {
                        /** @type {?} */
                        var returnUrl = _this.route.snapshot.queryParamMap.get('RedirectURL');
                        if (_this.settings.redirect && returnUrl) {
                            // location.href = JSON.parse(sessionStorage.getItem("RedirectURL"));
                            _this.router.navigate([returnUrl], { queryParamsHandling: 'merge' });
                        }
                        else if (_this.settings.redirect && _this.settings.redirectPage) {
                            _this.menuService.resetMenu();
                            _this.router.navigate([_this.settings.redirectPage]);
                        }
                        else {
                            _this.openSnackBar("Something went wrong , please contact the administrators");
                            _this.errorMsg = "Something went wrong , please contact the administrators";
                            _this.router.navigate(['/']);
                        }
                    }
                }
                else {
                    _this.error = true;
                    _this.openSnackBar(res);
                    _this.signing = false;
                }
            }), (/**
             * @param {?} error
             * @return {?}
             */
            function (error) {
                _this.signing = false;
                /** @type {?} */
                var err = _this.translationService.getTranslationByKey(error.message, _this.culture);
                _this.openSnackBar(err ? err : "Please check your credentials");
                _this.errorMsg = err ? err : "Please check your credentials";
            }));
        };
        /**
         * @param {?} settings
         * @return {?}
         */
        LoginComponent.prototype.invokeEskaMedica = /**
         * @param {?} settings
         * @return {?}
         */
        function (settings) {
            var _this = this;
            /** @type {?} */
            var data = {
                "Username": this.loginForm.controls.username.value,
                "Password": this.loginForm.controls.password.value,
                "BranchId": "1",
                "CompanyId": "1",
            };
            this.datasourceService.invoke(settings.loginSource, data).subscribe((/**
             * @param {?} res
             * @return {?}
             */
            function (res) {
                if (res && res.data && res.data.content && res.data.content.token) {
                    _this.dcmsLogin();
                    localStorage.setItem("provider", JSON.stringify({ token: res.data.content.token, sessionId: res.data.content.sessionId }));
                }
                else if (res && res.isError) {
                    _this.openSnackBar(res.apiMessage || "Something went wrong , please check your credentials");
                    _this.errorMsg = res.apiMessage || "Something went wrong , please check your credentials";
                    _this.error = true;
                    _this.signing = false;
                    _this.isSubmitted = false;
                }
                else if (res && res.data && res.data.isError && res.data.content) {
                    _this.openSnackBar(res.data.content.authMessage || "Something went wrong , please check your credentials");
                    _this.errorMsg = res.data.content.authMessage || "Something went wrong , please check your credentials";
                    _this.error = true;
                    _this.signing = false;
                    _this.isSubmitted = false;
                }
                else {
                    _this.openSnackBar("Something went wrong , please check your credentials");
                    _this.errorMsg = "Something went wrong , please check your credentials";
                    _this.error = true;
                    _this.signing = false;
                    _this.isSubmitted = false;
                }
            }));
        };
        /**
         * @param {?} url
         * @return {?}
         */
        LoginComponent.prototype.goToPage = /**
         * @param {?} url
         * @return {?}
         */
        function (url) {
            if (url)
                this.router.navigate([url]);
        };
        Object.defineProperty(LoginComponent.prototype, "_username", {
            get: /**
             * @return {?}
             */
            function () { return this.loginForm.get('username'); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(LoginComponent.prototype, "_password", {
            get: /**
             * @return {?}
             */
            function () { return this.loginForm.get('password'); },
            enumerable: true,
            configurable: true
        });
        LoginComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'lib-login',
                        template: "<form class=\"login-form\" [formGroup]=\"loginForm\" (ngSubmit)=\"login(loginForm)\">\n  <input *ngIf=\"!isByNationalId\" type=\"text\" class=\"input login-controls\"\n    [pTooltip]=\"settings.emailTitle || (settings.loginType || 'Username')\" id=\"user_login\" autocomplete=\"off\"\n    [placeholder]=\"settings.emailTitle || (settings.loginType || 'Username')\" formControlName=\"username\">\n  <input *ngIf=\"isByNationalId\" type=\"text\" class=\"input login-controls\"\n    [pTooltip]=\"settings.emailTitle || (settings.loginType || 'Username')\" id=\"user_login\" autocomplete=\"off\"\n    [maxlength]=\"settings.maxlengthValidation\" [minlength]=\"settings.minlengthValidation\"\n    [placeholder]=\"settings.emailTitle || (settings.loginType || 'Username')\" formControlName=\"username\">\n  <ng-container>\n    <span class=\"text-justify text-danger mx-1\"\n      *ngIf=\"loginForm.controls.username.errors?.required && (loginForm.controls.username.dirty || loginForm.controls.username.touched || isSubmitted)\">\n      {{settings.loginPlaceHolder || 'Username'}} {{this.culture === 'en-US'? ' is required':' \u0645\u0637\u0644\u0648\u0628 '}}\n    </span>\n\n    <span class=\"text-justify text-danger mx-1\" *ngIf=\"(loginForm.controls.username.errors?.minlength ||\n      loginForm.controls.username.errors?.maxlength) && !loginForm.controls.username.errors?.pattern\n      && (loginForm.controls.username.dirty || loginForm.controls.username.touched || isSubmitted)\">\n      {{settings.loginPlaceHolder || 'Username'}} {{this.culture === 'en-US'? ' length must be 10':' \u064A\u062C\u0628 \u0623\u0646\n      \u064A\u062A\u0643\u0648\u0646 \u0645\u0646 \u0639\u0634\u0631\u0629 \u0623\u0631\u0642\u0627\u0645 '}}\n    </span>\n    <span class=\"text-justify text-danger mx-1\"\n      *ngIf=\"loginForm.controls.username.errors?.invalidNationalID && (loginForm.controls.username.dirty || loginForm.controls.username.touched)\">\n      {{settings.loginPlaceHolder || 'Username'}} {{this.culture === 'en-US'? ' is invalid or not exist':'\n      \u063A\u064A\u0631\n      \u0635\u062D\u064A\u062D \u0623\u0648 \u063A\u064A\u0631 \u0645\u0648\u062C\u0648\u062F'}}\n    </span>\n    <span class=\"text-justify text-danger mx-1\"\n      *ngIf=\"loginForm.controls.username.errors?.pattern && !(loginForm.controls.username.errors?.invalidNationalID)&&(loginForm.controls.username.dirty || loginForm.controls.username.touched)\">\n      {{settings.loginPlaceHolder || 'Username'}} {{this.culture === 'en-US'? ' is invalid':'\n      \u063A\u064A\u0631 \u0635\u062D\u064A\u062D'}}\n    </span>\n  </ng-container>\n  <input type=\"password\" [pTooltip]=\"settings.passwordTitle || 'Password' \" class=\"input login-controls\" id=\"user_pass\"\n    autocomplete=\"off\" [placeholder]=\"settings.passwordTitle || 'Password'\" formControlName=\"password\">\n  <ng-container>\n    <span class=\"text-justify text-danger mx-1\"\n      *ngIf=\"loginForm.controls.password.errors?.required && (loginForm.controls.password.dirty || loginForm.controls.password.touched || isSubmitted)\">\n      {{settings.passwordTitle || 'Password'}}{{this.culture === 'en-US'? ' is\n      required':' \u0645\u0637\u0644\u0648\u0628 '}}\n    </span>\n  </ng-container>\n  <div class=\"alert alert-danger alert-dismissible\" role=\"alert\" *ngIf=\"error\">\n    <div class=\"alert-text\">\n      {{errorMsg || \"Login Failed ! , please check your username or password .\"}}\n    </div>\n    <div class=\"alert-close\" (click)=\"error=false\"> <i class=\"flaticon2-cross kt-icon-sm\" data-dismiss=\"alert\"></i>\n    </div>\n  </div>\n  <div *ngIf=\"settings.rememberMe\">\n    <input type=\"checkbox\" pTooltip=\"{{settings.rememberMeTitle || 'Remember Me'}}\" class=\"checkbox\" id=\"remember_me\">\n    <label for=\"remember_me\">{{settings.rememberMeTitle || 'Remember Me'}}</label>\n  </div>\n  <!-- <input type=\"submit\" class=\"button\" value=\"Login\"> -->\n  <button [disabled]=\"signing || loginForm.invalid\" type=\"submit\" id=\"login_signin_submit\"\n    class=\" loginhny-btn btn button\">\n    {{settings.loginBtnTitle || 'Login'}}\n    <span *ngIf=\"signing\" class=\"spinner-border spinner-border-sm\" role=\"status\" aria-hidden=\"true\"></span>\n  </button>\n</form>\n\n<div class=\"help-text\" *ngIf=\"settings.registrationRedirect\">\n  <p><a style=\"cursor: pointer;\" (click)=\"goToPage(settings.registrationRedirectUrl)\">\n      {{settings.loginReg || 'Not a member yet? Join Now!'}}</a></p>\n</div>\n<div class=\"help-text\" *ngIf=\"settings.ForgetPassword\">\n  <p><a style=\"cursor: pointer;\" (click)=\"goToPage(settings.forgotPasswordRedirectUrl)\">\n      {{settings.forgotPasswordTitle || 'Forgot your password?'}}</a></p>\n</div>",
                        styles: ["a{color:#666;text-decoration:none}a:hover{color:#4fda8c}input{font:16px/26px Raleway,sans-serif}body{color:#666;background-color:#f1f2f2;font:16px/26px Raleway,sans-serif}.form-wrap{background-color:#fff;width:320px;margin:3em auto;box-shadow:0 1px 8px #bebebe;-webkit-box-shadow:0 1px 8px #bebebe;-moz-box-shadow:0 1px 8px #bebebe}.form-wrap .tabs{overflow:hidden}.form-wrap .tabs h3{float:left;width:50%}.form-wrap .tabs h3 a{padding:.5em 0;text-align:center;font-weight:400;background-color:#e6e7e8;display:block;color:#666}.form-wrap .tabs h3 a.active{background-color:#fff}.form-wrap .tabs-content{padding:1.5em}.form-wrap .tabs-content .active{display:block!important}.form-wrap form .input{box-sizing:border-box;-moz-box-sizing:border-box;color:inherit;font-family:inherit;padding:.8em 2em 10px .8em;border:1px solid #cfcfcf;outline:0;display:inline-block;margin:0 0 .8em;width:100%}.form-wrap form .button{width:100%;padding:.8em 0 10px .8em;background-color:#28a55f;border:none;color:#fff;cursor:pointer;text-transform:uppercase}.form-wrap form .button:hover{background-color:#4fda8c}.form-wrap form .checkbox{visibility:hidden;padding:20px;margin:.5em 0 1.5em}.form-wrap form .checkbox:checked+label:after{opacity:1}.form-wrap form label[for]{position:relative;padding-left:20px;cursor:pointer}.form-wrap form label[for]:before{content:\"\";position:absolute;border:1px solid #cfcfcf;width:17px;height:17px;top:0;left:-14px}.form-wrap form label[for]:after{opacity:0;content:\"\";position:absolute;width:9px;height:5px;background-color:transparent;top:4px;left:-10px;border:3px solid #28a55f;border-top:none;border-right:none;transform:rotate(-45deg)}.form-wrap .help-text{margin-top:.6em}.form-wrap .help-text p{text-align:center;font-size:14px}"]
                    }] }
        ];
        /** @nocollapse */
        LoginComponent.ctorParameters = function () { return [
            { type: services.TranslationService },
            { type: services.DatasourceService },
            { type: services.MenuService },
            { type: router.Router },
            { type: router.ActivatedRoute },
            { type: material.MatSnackBar }
        ]; };
        LoginComponent.propDecorators = {
            settings: [{ type: core.Input }],
            data: [{ type: core.Input }]
        };
        return LoginComponent;
    }());
    if (false) {
        /** @type {?} */
        LoginComponent.prototype.settings;
        /** @type {?} */
        LoginComponent.prototype.data;
        /** @type {?} */
        LoginComponent.prototype.culture;
        /** @type {?} */
        LoginComponent.prototype.eAuthenticationType;
        /** @type {?} */
        LoginComponent.prototype.loginPlaceHolder;
        /** @type {?} */
        LoginComponent.prototype.isByNationalId;
        /** @type {?} */
        LoginComponent.prototype.loginForm;
        /** @type {?} */
        LoginComponent.prototype.isSubmitted;
        /** @type {?} */
        LoginComponent.prototype.error;
        /** @type {?} */
        LoginComponent.prototype.signing;
        /** @type {?} */
        LoginComponent.prototype.errorMsg;
        /**
         * @type {?}
         * @private
         */
        LoginComponent.prototype.translationService;
        /**
         * @type {?}
         * @private
         */
        LoginComponent.prototype.datasourceService;
        /** @type {?} */
        LoginComponent.prototype.menuService;
        /**
         * @type {?}
         * @private
         */
        LoginComponent.prototype.router;
        /**
         * @type {?}
         * @private
         */
        LoginComponent.prototype.route;
        /**
         * @type {?}
         * @private
         */
        LoginComponent.prototype.snackBar;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var LoginModule = /** @class */ (function () {
        function LoginModule() {
        }
        LoginModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [LoginComponent],
                        exports: [LoginComponent],
                        entryComponents: [LoginComponent],
                        schemas: [core.CUSTOM_ELEMENTS_SCHEMA],
                        imports: [
                            common.CommonModule,
                            http.HttpClientModule,
                            sharedModule.SharedModule,
                            router.RouterModule.forChild([]),
                            forms.FormsModule, forms.ReactiveFormsModule,
                            tooltip.TooltipModule
                        ],
                        providers: [],
                    },] }
        ];
        return LoginModule;
    }());

    exports.LoginComponent = LoginComponent;
    exports.LoginModule = LoginModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=login.umd.js.map
