(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/router'), require('@shared/src/lib/services'), require('@angular/common'), require('@angular/common/http'), require('@angular/forms'), require('@angular/material'), require('ngx-bootstrap/popover'), require('@shared/src/lib/shared-module')) :
    typeof define === 'function' && define.amd ? define('common/src/lib/components/header', ['exports', '@angular/core', '@angular/router', '@shared/src/lib/services', '@angular/common', '@angular/common/http', '@angular/forms', '@angular/material', 'ngx-bootstrap/popover', '@shared/src/lib/shared-module'], factory) :
    (global = global || self, factory(global.header = {}, global.ng.core, global.ng.router, global.services, global.ng.common, global.ng.common.http, global.ng.forms, global.ng.material, global.popover, global.sharedModule));
}(this, (function (exports, core, router, services, common, http, forms, material, popover, sharedModule) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __rest(s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
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
    }

    function __createBinding(o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        o[k2] = m[k];
    }

    function __exportStar(m, exports) {
        for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
    }

    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m) return m.call(o);
        if (o && typeof o.length === "number") return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    }

    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    };

    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
    }

    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }

    function __asyncValues(o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
    }

    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    };

    function __importStar(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
        result.default = mod;
        return result;
    }

    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to get private field on non-instance");
        }
        return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to set private field on non-instance");
        }
        privateMap.set(receiver, value);
        return value;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ChildsMenusComponent = /** @class */ (function () {
        function ChildsMenusComponent(router, menuService) {
            this.router = router;
            this.menuService = menuService;
        }
        /**
         * @return {?}
         */
        ChildsMenusComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
        };
        /**
         * @param {?} slug
         * @param {?} el
         * @return {?}
         */
        ChildsMenusComponent.prototype.navigateTo = /**
         * @param {?} slug
         * @param {?} el
         * @return {?}
         */
        function (slug, el) {
            if (!el) {
                this.router.navigate([slug]);
            }
            if (el && slug) {
                this.router.navigate([slug]);
                setTimeout((/**
                 * @return {?}
                 */
                function () {
                    /** @type {?} */
                    var elmnt = document.getElementById(el);
                    if (elmnt && elmnt != null) {
                        elmnt.scrollIntoView();
                    }
                }), 200);
            }
        };
        ChildsMenusComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'app-childs-menus',
                        template: '',
                        providers: [],
                        styles: ["#sidebar-wrapper{min-height:100vh;transition:margin .25s ease-out}#sidebar-wrapper .sidebar-heading{padding:.875rem 1.25rem;font-size:1.2rem}#wrapper.toggled #sidebar-wrapper{margin-left:0}#wrapper{z-index:999;position:absolute;width:100%}.video{position:absolute;top:0;left:0;width:100%;height:100%;-o-object-fit:cover;object-fit:cover;-o-object-position:center;object-position:center}.dropdown-submenu{position:relative;width:100%;cursor:pointer}.dropdown-submenu>a:after{transform:rotate(0);float:right;top:11px;position:relative;transition:.2s}.dropdown-submenu>a.opend:after{transform:rotate(-90deg)}.dropdown-submenu>a.opend-left:after{transform:rotate(90deg)}.dropdown-submenu>.dropdown-menu{top:0;left:100%;margin-top:0;margin-left:0}.dropdown-submenu>.dropdown-menu.show.left{left:-100%}.dropdown-submenu>.dropdown-menu.show.left .show{left:-100%!important}.list-group-item{background-color:transparent}.nav-item{cursor:pointer}.bottom-gd{transition:2s;-webkit-transition:2s;-moz-transition:2s;-ms-transition:2s all;-o-transition:2s}.dropdown-item:focus,.dropdown-item:hover{background-color:transparent!important}.abs-center-x{position:absolute;left:50%;transform:translateX(-50%)}::ng-deep .popover-body{padding:0}::ng-deep .popover{max-width:374px}.modal-header{background:linear-gradient(90deg,rgba(67,91,189,1) 0,rgba(46,69,173,1) 100%);color:#fff;height:60px}.modal-footer{display:inherit}.btn.btn-pill{border-radius:2rem}"]
                    }] }
        ];
        /** @nocollapse */
        ChildsMenusComponent.ctorParameters = function () { return [
            { type: router.Router },
            { type: services.MenuService }
        ]; };
        ChildsMenusComponent.propDecorators = {
            parentId: [{ type: core.Input }],
            settings: [{ type: core.Input }]
        };
        return ChildsMenusComponent;
    }());
    if (false) {
        /** @type {?} */
        ChildsMenusComponent.prototype.parentId;
        /** @type {?} */
        ChildsMenusComponent.prototype.settings;
        /**
         * @type {?}
         * @private
         */
        ChildsMenusComponent.prototype.router;
        /** @type {?} */
        ChildsMenusComponent.prototype.menuService;
    }
    var HeaderComponent = /** @class */ (function () {
        function HeaderComponent(router, essentialsService, menuService, route) {
            this.router = router;
            this.essentialsService = essentialsService;
            this.menuService = menuService;
            this.route = route;
            this.selectedBlock = {};
            this.allPages = [];
            this.menuContentTheme = 'all';
        }
        /**
         * @return {?}
         */
        HeaderComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            var _this = this;
            this.site = this.data.moduleService.site;
            this.GetCategoryMenus(this.settings.selectedCategory);
            this.GetAllPages();
            // if (this.data.authService && this.data.authService.isLoggedIn()) {
            //   this.user = this.data.authService.getLoggedUser();
            // }
            this.settings.nav_background_color = this.settings.nav_background_color && this.settings.nav_background_color.charAt(0) === '#' ? this.settings.nav_background_color : this.getThemeColor(this.settings.nav_background_color);
            this.settings.nav_text_color = this.settings.nav_text_color && this.settings.nav_text_color.charAt(0) === '#' ? this.settings.nav_text_color : this.getThemeColor(this.settings.nav_text_color);
            this.settings.child_background_color = this.settings.child_background_color && this.settings.child_background_color.charAt(0) === '#' ? this.settings.child_background_color : this.getThemeColor(this.settings.child_background_color);
            this.settings.child_text_color = this.settings.child_text_color && this.settings.child_text_color.charAt(0) === '#' ? this.settings.child_text_color : this.getThemeColor(this.settings.child_text_color);
            this.settings.blocks.forEach((/**
             * @param {?} element
             * @return {?}
             */
            function (element) {
                if (element.element.type == 'menu') {
                    _this.menuContentTheme = _this.settings.menuTheme || 'all';
                    /** @type {?} */
                    var allParams = Object.values(_this.route.snapshot.paramMap["params"]);
                    /** @type {?} */
                    var slug = void 0;
                    if (allParams.length == 0) {
                        slug = "";
                    }
                    else {
                        slug = allParams[allParams.length - 1].toString();
                    }
                    _this.menuService.getMenu(element.menuCat, _this.data, slug);
                    _this.data.route.paramMap.subscribe((/**
                     * @param {?} route
                     * @return {?}
                     */
                    function (route) {
                        // slug = this.data.route.data['value'].data[0].slug;
                        /** @type {?} */
                        var allParams = Object.values(_this.route.snapshot.paramMap["params"]);
                        /** @type {?} */
                        var slug;
                        if (allParams.length == 0) {
                            slug = "";
                        }
                        else {
                            slug = allParams[allParams.length - 1].toString();
                        }
                        _this.menuService.setActiveLink(_this.settings.selectedCategory, slug);
                    }));
                }
            }));
            if (this.data.authService && this.data.authService.isLoggedIn()
                && this.data.authService.getUserData()) {
                this.userInfoSubscription = this.data.authService.getUserData().subscribe((/**
                 * @param {?} res
                 * @return {?}
                 */
                function (res) {
                    if (res) {
                        _this.user = res;
                    }
                }));
            }
            if (this.settings.nav_background_color) {
                this.settings.nav_background_color = this.settings.nav_background_color && this.settings.nav_background_color.charAt(0) === '#' ? this.settings.nav_background_color : this.getThemeColor(this.settings.nav_background_color);
            }
            if (this.settings.nav_background_color) {
                this.settings.nav_text_color = this.settings.nav_text_color && this.settings.nav_text_color.charAt(0) === '#' ? this.settings.nav_text_color : this.getThemeColor(this.settings.nav_text_color);
            }
        };
        // ngOnDestroy() {
        //   this.userInfoSubscription.unsubscribe();
        // }
        // ngOnDestroy() {
        //   this.userInfoSubscription.unsubscribe();
        // }
        /**
         * @param {?} color
         * @return {?}
         */
        HeaderComponent.prototype.getThemeColor = 
        // ngOnDestroy() {
        //   this.userInfoSubscription.unsubscribe();
        // }
        /**
         * @param {?} color
         * @return {?}
         */
        function (color) {
            if (this.data.moduleService && this.data.moduleService.theme && this.data.moduleService.theme.colors) {
                return this.data.moduleService.theme.colors[color];
            }
            else {
                return 'initial';
            }
        };
        /**
         * @return {?}
         */
        HeaderComponent.prototype.logOut = /**
         * @return {?}
         */
        function () {
            this.user = this.data.authService.loggeOut();
            this.menuService.resetMenu();
            this.router.navigate(['/']);
        };
        /**
         * @param {?} funcName
         * @param {?=} params
         * @return {?}
         */
        HeaderComponent.prototype.callActions = /**
         * @param {?} funcName
         * @param {?=} params
         * @return {?}
         */
        function (funcName, params) {
            console.log('search funcName', funcName);
            console.log('search params', params);
            this[funcName](params);
        };
        /**
         * @param {?} el
         * @return {?}
         */
        HeaderComponent.prototype.navigateToSection = /**
         * @param {?} el
         * @return {?}
         */
        function (el) {
            /** @type {?} */
            var elmnt = document.getElementById(el);
            elmnt.scrollIntoView();
        };
        /**
         * @return {?}
         */
        HeaderComponent.prototype.setJquryAndStyles = /**
         * @return {?}
         */
        function () {
            var e_1, _a;
            var _this = this;
            $('#player').prop('muted', true);
            try {
                for (var _b = __values(this.settings.blocks), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var element = _c.value;
                    if (element.box_shadow) {
                        $('.bottom-gd').css('box-shadow', '7px 7px 10px 0 rgba(76, 110, 245, .1)');
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
            }
            /** @type {?} */
            var settings = this.settings;
            $('ul.dropdown-menu.menu-' + settings.id + ' [data-toggle=\'dropdown\']').on('click', (/**
             * @param {?} event
             * @return {?}
             */
            function (event) {
                event.preventDefault();
                event.stopPropagation();
                /** @type {?} */
                var directionLeft = false;
                /** @type {?} */
                var opend = 'opend';
                if ($(_this).offset().left > 1000) {
                    directionLeft = true;
                    opend = 'opend-left';
                }
                if ($(_this).hasClass(opend)) {
                    $(_this).removeClass(opend);
                }
                else {
                    $(_this).toggleClass(opend);
                }
                if (directionLeft) {
                    if ($(_this).siblings().hasClass('left')) {
                        $(_this).siblings().removeClass('left');
                    }
                    $(_this).siblings().toggleClass('left');
                }
                $(_this).siblings().toggleClass('show');
                $(_this).siblings().toggleClass(opend);
                if (!$(_this).next().hasClass('show')) {
                    $(_this).parents('.dropdown-menu.menu-' + settings.id).first().find('.show').removeClass('show');
                    $(_this).parents('.dropdown-menu.menu-' + settings.id).first().find('.left').removeClass('left');
                    $(_this).parents('.dropdown-menu.menu-' + settings.id).first().find('.' + opend).removeClass(opend);
                }
                $(_this).parents('li.nav-item.dropdown.' + 'show').on('hidden.bs.dropdown', (/**
                 * @return {?}
                 */
                function () {
                    $('.dropdown-submenu .show').removeClass('show');
                    $('.dropdown-submenu .show.left').removeClass('left');
                    $('.dropdown-submenu .' + opend).removeClass(opend);
                }));
            }));
            /** @type {?} */
            var nav = $('#nav-' + settings.id);
            if (settings.navcolorFrom === 'new') {
                nav.css('background', settings.nav_new_background_color);
                $('#nav-' + settings.id + ' a').css('color', settings.nav_new_text_color);
            }
        };
        /**
         * @return {?}
         */
        HeaderComponent.prototype.setBordersAndShadow = /**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var settings = this.settings;
            /** @type {?} */
            var submenu = $('#submenu-' + settings.id);
            if (this.settings.borderAll) {
                submenu.css('border', this.settings.bordersize + 'px ' + this.settings.borderType + ' ' + this.settings.bordercolor);
            }
            else {
                if (this.settings.borderTop) {
                    submenu.css('border-top', this.settings.borderTop + 'px ' + this.settings.borderType + ' ' + this.settings.bordercolor);
                }
                if (this.settings.borderTop) {
                    submenu.css('border-bottom', this.settings.borderBottom + 'px ' + this.settings.borderType + ' ' + this.settings.bordercolor);
                }
                if (this.settings.borderTop) {
                    submenu.css('border-left', this.settings.borderLeft + 'px ' + this.settings.borderType + ' ' + this.settings.bordercolor);
                }
                if (this.settings.borderTop) {
                    submenu.css('border-right', this.settings.borderRight + 'px ' + this.settings.borderType + ' ' + this.settings.bordercolor);
                }
            }
            submenu.css('box-shadow', this.settings.hoffset + 'px ' + this.settings.voffset + 'px ' + this.settings.blur + 'px ' + this.settings.spread + 'px ' + this.settings.boxcolor);
        };
        /**
         * @param {?} id
         * @return {?}
         */
        HeaderComponent.prototype.GetCategoryMenus = /**
         * @param {?} id
         * @return {?}
         */
        function (id) {
            var _this = this;
            if (id) {
                if (this.data.dataChashingService && this.data.dataChashingService.menusCategories[id]) {
                    this.menus = this.data.dataChashingService.menusCategories[id];
                    this.data.SharedService.setCurrentMenu(id);
                    setTimeout((/**
                     * @return {?}
                     */
                    function () {
                        _this.setJquryAndStyles();
                    }), 500);
                }
                else {
                    this.essentialsService.getCategoryMenus(id).subscribe((/**
                     * @param {?} res
                     * @return {?}
                     */
                    function (res) {
                        _this.data.dataChashingService.menusCategories[id] = res;
                        _this.menus = res;
                        _this.sortMenu(_this.menus);
                        _this.data.SharedService.setCurrentMenu(id);
                        setTimeout((/**
                         * @return {?}
                         */
                        function () {
                            _this.setJquryAndStyles();
                        }), 500);
                    }));
                }
            }
            else {
            }
        };
        /**
         * @param {?} menuItems
         * @return {?}
         */
        HeaderComponent.prototype.sortMenu = /**
         * @param {?} menuItems
         * @return {?}
         */
        function (menuItems) {
            var _this = this;
            menuItems.sort((/**
             * @param {?} a
             * @param {?} b
             * @return {?}
             */
            function (a, b) {
                return a.order - b.order;
            }));
            menuItems.forEach((/**
             * @param {?} element
             * @return {?}
             */
            function (element) {
                if (element.childs.length > 1) {
                    _this.sortMenu(element.childs);
                }
            }));
        };
        /**
         * @return {?}
         */
        HeaderComponent.prototype.GetAllPages = /**
         * @return {?}
         */
        function () {
            if (this.data.dataChashingService && this.data.dataChashingService.pagesList) {
                this.allPages = this.data.dataChashingService.pagesList;
            }
            else if (this.data.moduleService && this.data.moduleService.siteSlugs) {
                this.allPages = this.data.moduleService.siteSlugs;
                this.data.dataChashingService.pagesList = this.data.moduleService.siteSlugs;
            }
        };
        /**
         * @param {?} id
         * @return {?}
         */
        HeaderComponent.prototype.getPageSlug = /**
         * @param {?} id
         * @return {?}
         */
        function (id) {
            /** @type {?} */
            var slug = this.allPages.find((/**
             * @param {?} s
             * @return {?}
             */
            function (s) { return s.id === id; }));
            return slug ? '/' + slug.slug : this.allPages[0] ? this.allPages[0].slug : null;
        };
        /**
         * @return {?}
         */
        HeaderComponent.prototype.navigateToPage = /**
         * @return {?}
         */
        function () {
            var _this = this;
            this.settings.blocks.forEach((/**
             * @param {?} element
             * @return {?}
             */
            function (element) {
                if (element.element.type == 'Button') {
                    /** @type {?} */
                    var link = _this.getPageSlug(element.pageId);
                    _this.router.navigate([link]);
                    if (_this.settings.divId) {
                        setTimeout((/**
                         * @return {?}
                         */
                        function () {
                            _this.navigateToSection(element.divId);
                        }), 200);
                    }
                }
            }));
        };
        /**
         * @param {?} id
         * @param {?} culture
         * @return {?}
         */
        HeaderComponent.prototype.getCultureLinkedBlog = /**
         * @param {?} id
         * @param {?} culture
         * @return {?}
         */
        function (id, culture) {
            /** @type {?} */
            var currentPage = this.data.dataChashingService.blogs[id];
            if (currentPage.addtionalMetaTags && currentPage.addtionalMetaTags != null) {
                /** @type {?} */
                var temp = JSON.parse(currentPage.addtionalMetaTags);
                for (var i = 0; i < temp.length; i++) {
                    /** @type {?} */
                    var element = temp[i];
                    if (element.property == culture) {
                        return this.setNewRoute(this.settings.prefix || '', element.content);
                    }
                }
            }
            return '/';
        };
        /**
         * @param {?} prefix
         * @param {?} newRoute
         * @return {?}
         */
        HeaderComponent.prototype.setNewRoute = /**
         * @param {?} prefix
         * @param {?} newRoute
         * @return {?}
         */
        function (prefix, newRoute) {
            this.router.config = [];
            this.data.moduleService.site.HostName = prefix.replace("/", '');
            this.data.routerService.getRoute();
            return '/' + prefix + newRoute;
        };
        /**
         * @param {?} Culture
         * @return {?}
         */
        HeaderComponent.prototype.setsiteCss = /**
         * @param {?} Culture
         * @return {?}
         */
        function (Culture) {
            /** @type {?} */
            var css = JSON.parse(this.data.moduleService.site.css);
            /** @type {?} */
            var head = document.getElementsByTagName('head')[0];
            if (css[Culture]) {
                /** @type {?} */
                var oldCss = document.getElementsByTagName('style');
                for (var index = 0; index < oldCss.length; index++) {
                    /** @type {?} */
                    var element = oldCss[index];
                    if (element.id.indexOf(this.data.moduleService.site.culture + '-style') !== -1) {
                        head.removeChild(element);
                        index = index - 1;
                    }
                }
                /** @type {?} */
                var culture_css = document.createElement('style');
                culture_css.type = 'text/css';
                culture_css.id = Culture + '-style';
                culture_css.appendChild(document.createTextNode(css[this.settings.Culture]));
                head.appendChild(culture_css);
            }
        };
        /**
         * @param {?} id
         * @param {?} culture
         * @return {?}
         */
        HeaderComponent.prototype.getCultureLinkedPage = /**
         * @param {?} id
         * @param {?} culture
         * @return {?}
         */
        function (id, culture) {
            var _this = this;
            this.settings.blocks.forEach((/**
             * @param {?} element
             * @return {?}
             */
            function (element) {
                if (element.element.type == 'Button') {
                    /** @type {?} */
                    var currentPage = _this.data.dataChashingService.pages[id];
                    if (currentPage.addtionalMetaTags && currentPage.addtionalMetaTags != null) {
                        /** @type {?} */
                        var temp = JSON.parse(currentPage.addtionalMetaTags);
                        for (var i = 0; i < temp.length; i++) {
                            /** @type {?} */
                            var element_1 = temp[i];
                            if (element_1.property == culture) {
                                return _this.setNewRoute(_this.settings.prefix || '', element_1.content);
                            }
                        }
                    }
                }
            }));
            return '/';
        };
        /**
         * @return {?}
         */
        HeaderComponent.prototype.navigateToCulture = /**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var link = '';
            /** @type {?} */
            var slugData = localStorage.getItem(JSON.stringify('slugData'));
            if (slugData.type == 1)
                link = this.getCultureLinkedPage(slugData.id, this.settings.Culture);
            else
                link = this.getCultureLinkedBlog(slugData.id, this.settings.Culture);
            if (link != '/' && this.data.moduleService.site.css) {
                this.setsiteCss(this.settings.Culture);
                this.data.moduleService.site.culture = this.settings.Culture;
                this.router.navigate([link]);
            }
        };
        HeaderComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'app-header',
                        template: "<video\n  *ngIf=\"settings.headerimagevideo && (settings.headerimagevideo.indexOf('.mp4')!==-1 || settings.headerimagevideo.indexOf('.webm')!==-1)\"\n  class=\"video\" id=\"player\" playsinline autoplay muted loop>\n  <source src=\"{{settings.headerimagevideo}}\" type=\"video/webm\">\n  <source src=\"{{settings.headerimagevideo}}\" type=\"video/mp4\">\n</video>\n<div\n  class=\"row header-element-container {{settings.headerFixed?'fixed-top':''}}  {{settings.bold?'font-weight-bold':''}} {{settings.italic?'font-style-italic':''}} {{settings.cssClass}}\"\n  [style.background-position]=\"'center'\" [style.background-size]=\"'cover'\" [style.background-repeat]=\"'no-repeat'\"\n  [style.background-image]=\"settings.headerimagevideo?'url('+settings.headerimagevideo+')':''\">\n  <div class=\"col-md-{{block.size}}\" *ngFor=\"let block of settings.blocks; let i=index\">\n\n    <div *ngIf=\"block.element&&block.element.type=='logo'\">\n      <div *ngIf=\"!block.cover\"\n        class=\" img-section {{block.blockid}} {{block.blockclass}}  {{settings.cssClass}} {{block.textAlign}}\">\n        <a *ngIf=\"block.navLinkRedirect=='url'\" [href]=\"block.imageUrl\">\n          <figure class=\"{{block.imageHover2}} \">\n            <img *ngIf=\"block.imgsrc\" alt=\"{{block.imgsrc}}\" [style.height]=\"block.Height ? block.Height+'px':'100%'\"\n              [style.width]=\"block.Width ? block.Width+'px':'100%'\"\n              class=\"img-responsive wow {{settings.imgAnimate}} {{settings.imageBorderd ? 'img-thumbnail':''}}\"\n              src=\"{{block.imgsrc}}\">\n            <img *ngIf=\"!settings.imgsrc\" alt=\"no img src\"\n              class=\"img-responsive wow {{settings.imgAnimate}} {{settings.imageBorderd ? 'img-thumbnail':''}}\"\n              src=\"./assets/img/Gallery.png\" [style.width.px]=\"block.imageWidth\">\n\n            <figcaption>\n              <div [innerHtml]=\"block.imgDescription|sanitizeHtml\"></div>\n            </figcaption>\n          </figure>\n        </a>\n        <a *ngIf=\"block.navLinkRedirect=='page'\" [routerLink]=\"'/'+block.imageRoute\">\n          <figure class=\"{{block.imageHover2}} \">\n            <img *ngIf=\"block.imgsrc\" alt=\"{{block.imgsrc}}\" [style.height]=\"block.Height ? block.Height+'px':'100%'\"\n              [style.width]=\"block.Width ? block.Width+'px':'100%'\"\n              class=\"img-responsive wow {{settings.imgAnimate}} {{settings.imageBorderd ? 'img-thumbnail':''}}\"\n              src=\"{{block.imgsrc}}\">\n            <img *ngIf=\"!block.imgsrc\" alt=\"no img src\"\n              class=\"img-responsive wow {{settings.imgAnimate}} {{settings.imageBorderd ? 'img-thumbnail':''}}\"\n              src=\"./assets/img/Gallery.png\">\n\n            <figcaption>\n              <div [innerHtml]=\"block.imgDescription|sanitizeHtml\"></div>\n            </figcaption>\n          </figure>\n        </a>\n        <a *ngIf=\"block.navLinkRedirect=='none'\" [ngClass]=\"{'isDisabled':!settings.imageUrl&& !settings.imageRoute}\">\n          <figure class=\"{{block.imageHover2}} \">\n            <img *ngIf=\"block.imgsrc\" alt=\"{{block.imgsrc}}\" [style.height]=\"block.Height ? block.Height+'px':'100%'\"\n              [style.width]=\"block.Width ? block.Width+'px':'100%'\"\n              class=\"img-responsive wow {{block.imgAnimate}} {{block.imageBorderd ? 'img-thumbnail':''}}\"\n              src=\"{{block.imgsrc}}\">\n            <img *ngIf=\"!block.imgsrc\" alt=\"no img src\"\n              class=\"img-responsive wow {{block.imgAnimate}} {{block.imageBorderd ? 'img-thumbnail':''}}\"\n              src=\"./assets/img/Gallery.png\">\n\n            <figcaption>\n              <div [innerHtml]=\"block.imgDescription|sanitizeHtml\"></div>\n            </figcaption>\n          </figure>\n        </a>\n      </div>\n\n      <!-- <img class=\"{{block.imgShapes}} {{block.imgAlign}} wow {{block.logoAnimate}} {{block.blockclass}}\" alt=\"logo\"\n        src=\"{{block.logoUrl}}\" height=\"{{block.logoHeight||100}}\" width=\"{{block.logoWidth||100}}\"> -->\n\n      <div class=\"img-section {{block.blockid}} {{block.blockclass}} {settings.textAlign}}\" *ngIf=\"block.cover\"\n        [style.height.px]=\"height\" [style.background]=\"'url('+block.imgsrc+')'\" [style.width.%]=\"'100'\"\n        [style.background-size]=\"'cover'\">\n        <div style=\"\n    margin: 0;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    -ms-transform: translate(-50%, -50%);\n    transform: translate(-50%, -50%);\" [innerHtml]=\"block.textImage|sanitizeHtml\">\n        </div>\n\n        <div class=\"mbr-arrow mbr-arrow-floating\" aria-hidden=\"true\" *ngIf=\"settings.arrowDown && settings.cover\">\n          <a [attr.fragment]=\"block.divId\" (click)=\"navigateToSection(block.divId)\">\n            <i class=\"fas fa-arrow-down\"></i>\n          </a>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"row user_info\" *ngIf=\"block.element&&block.element.type=='user'\">\n      <div class=\"col\" *ngIf=\"user&& block.full_name\">\n        <!--  -->\n        <ng-template #popTemplate class=\"\">\n          <ul class=\"dropdown-menu dropdown-menu-right show\">\n            <!-- User image -->\n            <li class=\"dropdown-header\">\n              <img class=\"kt-font-success img-fluid\"\n                onerror=\"this.onerror=null;this.src='assets/assets/images/user.jpg';\" [src]=\"user.image\" />\n              <div class=\"d-inline-block\">\n                {{user.fullName}} <small class=\"pt-1\">{{user.email}}</small>\n              </div>\n            </li>\n            <li>\n              <a *ngIf=\"block.profile && user\" [routerLink]=\"'/'+block.ProfilePage\" class=\"\"><i\n                  class=\"fas fa-user-alt\"></i>\n                {{block.profilepageTxt}} </a>\n            </li>\n\n            <li class=\"dropdown-footer\">\n              <a (click)=\"logOut()\" class=\"\"> <i class=\"fas fa-sign-out-alt\"></i> {{block.logoutTxt}}</a>\n            </li>\n          </ul>\n        </ng-template>\n\n        <span *ngIf=\"block.prefix\"><i class=\"fas fa-user-circle\"></i>{{block.prefix}}</span>&nbsp;\n        <span [popover]=\"popTemplate\" [outsideClick]=\"true\" placement=\"bottom\">{{user.fullName}}&nbsp;<i\n            class=\"fas fa-chevron-down\"></i></span>\n\n      </div>\n      <div class=\"float-right\">\n        <a *ngIf=\"block.regestration && !user\" id=\"sign-up\" class=\"sign-up\"\n          [routerLink]=\"'/'+block.RegestrationPage\">{{block.regestrationTxt}} , &nbsp;</a>\n        <a *ngIf=\"block.showLoginLogout&& !user\" id=\"sign-in\" class=\"sign-in\" [routerLink]=\"'/'+block.LoginPage\">\n          {{block.loginTxt}}\n        </a>\n        <!-- <a *ngIf=\"block.showLoginLogout&& user\" id=\"sign-out\" class=\"sign-out\" (click)='logOut()'>\n          {{block.logoutTxt}}\n        </a> -->\n      </div>\n    </div>\n\n    <div *ngIf=\"block.element&&block.element.type=='menu'\" class=\"  {{block.blockid}} {{block.blockclass}} \">\n      <!-- <nav id=\"nav-{{block.index}}\" [hidden]=\"block.RequireLogin&&!user\"\n        class=\"navbar navbar-expand-md navbar-light {{settings.cssClass}}    {{block.fixedTop?'fixed-top':''}}\">\n\n        <a class=\"navbar-brand\" *ngIf=\"block.navLogoOptions=='text'&&block.navLinkRedirect=='none'\"\n          [innerHTML]=\"block.navText|sanitizeHtml\">\n        </a>\n\n        <a *ngIf=\"block.navLogoOptions=='text'&&block.navLinkRedirect=='url'\" [href]=\"block.nav_logo_url\"\n          [innerHTML]=\"block.navText|sanitizeHtml\" class=\"navbar-brand\">\n        </a>\n\n        <a *ngIf=\"block.navLogoOptions=='text'&&block.navLinkRedirect=='page'\" [routerLink]=\"['/'+block.nav_logo_page]\"\n          [innerHTML]=\"block.navText|sanitizeHtml\" class=\"navbar-brand\">\n        </a>\n\n        <a *ngIf=\"block.navLogoOptions=='text'&&block.navLinkRedirect=='samePage'\"\n          [attr.fragment]=\"block.nav_logo_divId\" (click)=\"menuService.navigateToSection(block.nav_logo_divId)\"\n          [innerHTML]=\"block.navText|sanitizeHtml\" class=\"navbar-brand\">\n        </a>\n\n      logo  \n        <a class=\"navbar-brand\" *ngIf=\"block.navLogoOptions=='logo'&&block.navLinkRedirect=='none'\">\n          <img [src]=\"block.navLogoSrc\" [width]=\"block.navLogoWidth\" [height]=\"block.navLogoHeight\">\n        </a>\n\n        <a *ngIf=\"block.navLogoOptions=='logo'&&block.navLinkRedirect=='url'\" [href]=\"block.nav_logo_url\"\n          class=\"navbar-brand\">\n          <img [src]=\"block.navLogoSrc\" [width]=\"block.navLogoWidth\" [height]=\"block.navLogoHeight\">\n        </a>\n\n        <a *ngIf=\"block.navLogoOptions=='logo'&&block.navLinkRedirect=='page'\" [routerLink]=\"['/'+block.nav_logo_page]\"\n          class=\"navbar-brand\">\n          <img [src]=\"block.navLogoSrc\" [width]=\"block.navLogoWidth\" [height]=\"block.navLogoHeight\">\n        </a>\n\n        <a *ngIf=\"block.navLogoOptions=='logo'&&block.navLinkRedirect=='samePage'\"\n          [attr.fragment]=\"block.nav_logo_divId\" (click)=\"menuService.navigateToSection(block.nav_logo_divId)\"\n          class=\"navbar-brand\">\n          <img [src]=\"block.navLogoSrc\" [width]=\"block.navLogoWidth\" [height]=\"block.navLogoHeight\">\n        </a>\n\n        <button class=\"navbar-toggler\" type=\"button\" *ngIf=\"block.noToggle\" data-toggle=\"collapse\"\n          [attr.data-target]=\"'#dropdown-'+block.id\">\n          <i class=\"fa fa-bars fa-lg py-1 text-white\"></i>\n        </button>\n\n        <div class=\"navbar-collapse collapse{{block.noToggle?'':' show'}}  \" id=\"dropdown-{{block.index}}\">\n          <ul class=\"navbar-nav {{block.linksPosition=='right'?'ml-auto':''}}    \">\n            <li *ngFor=\"let menu of menuService.getRootMenu(settings.selectedCategory); let i = index\"\n              id=\"nav-item-{{i}}\" class=\"nav-item\" routerLinkActive=\"active\" routerLinkActiveOptions=\"{exact : true}\"\n              [class.dropdown]=\"menu.childs&&menu.childs.length\">\n\n              <a *ngIf=\"menu.type == 1\" [href]=\"menu.url\"\n                target=\"{{menu.url.includes('.pdf')||menu.url.includes('http')?'_blank':'_self'}}\" class=\"nav-link  \"\n                aria-haspopup=\"true\" aria-expanded=\"false\" matTooltip=\"{{block.tooltipmenu?menu.name:''}}\">\n                <i class=\"fa fa-{{menu.icon}}\"></i> <span>{{menu.name}}</span>\n              </a>\n\n              <a *ngIf=\"menu.type ==2\" [routerLink]=\"['/'+ menu.slug]\" class=\"nav-link\" aria-haspopup=\"true\"\n                aria-expanded=\"false\" matTooltip=\"{{block.tooltipmenu?menu.name:''}}\">\n                <i class=\"fa fa-{{menu.icon}}\"></i><span>{{menu.name}}</span>\n              </a>\n\n              <a *ngIf=\"menu.type == 4\" [routerLink]=\"['/'+ menu.slug]\" class=\"nav-link \" aria-haspopup=\"true\"\n                aria-expanded=\"false\" matTooltip=\"{{block.tooltipmenu?menu.name:''}}\">\n                <i class=\"fa fa-{{menu.icon}}\"></i> <span>{{menu.name}}</span>\n              </a>\n\n              <a *ngIf=\"menu.type ==5\" href=\"javascript:;\"\n                class=\"nav-link {{menu.childs&&menu.childs.length ?'dropdown-toggle' : ''}}  \" data-toggle=\"dropdown\"\n                aria-haspopup=\"true\" aria-expanded=\"false\" matTooltip=\"{{block.tooltipmenu?menu.name:''}}\">\n                <i class=\"fa fa-{{menu.icon}}\"></i> <span>{{menu.name}}</span>\n              </a>\n\n              <a *ngIf=\"menu.type == 6\" [routerLink]=\"['/'+ menu.slug]\" class=\"nav-link  \" aria-haspopup=\"true\"\n                aria-expanded=\"false\" matTooltip=\"{{block.tooltipmenu?menu.name:''}}\">\n                <i class=\"fa fa-{{menu.icon}}\"></i> <span>{{menu.name}}</span>\n              </a>\n\n              <ul *ngIf=\"menuService.isHaveChildren(settings.selectedCategory, menu.id)\" aria-labelledby=\"dropdownMenu1\"\n                class=\"dropdown-menu menu-{{block.index}}   \" aria-labelledby=\"dropdownMenu1\">\n\n\n                <lib-child-menu class=\"childs-menu {{block.linksPosition=='right'?'text-right':''}}\"\n                  [parentId]=\"menu.id\" [settings]=\"settings\"></lib-child-menu>\n\n              </ul>\n            </li>\n\n            <li class=\"nav-item  \" id=\"nav-item-lang\" *ngIf=\"block.langConverter\">\n              <a class=\"nav-link\" aria-haspopup=\"true\" aria-expanded=\"false\" (click)=\"navigateToCulture()\">\n                <span>{{block.langButtonLabel}}</span>\n              </a>\n            </li>\n          </ul>\n        </div>\n      </nav> -->\n\n\n      <nav id=\"nav-{{settings.id}}\" [hidden]=\"block.RequireLogin&&!user\"\n        class=\"navbar navbar-expand-md navbar-light {{settings.cssClass}}  {{block.fixedTop?'fixed-top':''}}\">\n\n        <a class=\"navbar-brand\" *ngIf=\"block.navLogoOptions=='text'&&block.navLinkRedirect=='none'\"\n          [innerHTML]=\"block.navText|sanitizeHtml\">\n        </a>\n\n        <a *ngIf=\"block.navLogoOptions=='text'&&block.navLinkRedirect=='url'\" [href]=\"block.nav_logo_url\"\n          [innerHTML]=\"block.navText|sanitizeHtml\" class=\"navbar-brand\">\n        </a>\n\n        <a *ngIf=\"block.navLogoOptions=='text'&&block.navLinkRedirect=='page'\" [routerLink]=\"['/'+block.nav_logo_page]\"\n          [innerHTML]=\"block.navText|sanitizeHtml\" class=\"navbar-brand\">\n        </a>\n\n        <a *ngIf=\"block.navLogoOptions=='text'&&block.navLinkRedirect=='samePage'\"\n          [attr.fragment]=\"block.nav_logo_divId\" (click)=\"menuService.navigateToSection(block.nav_logo_divId)\"\n          [innerHTML]=\"block.navText|sanitizeHtml\" class=\"navbar-brand\">\n        </a>\n\n        <!-- logo -->\n        <a class=\"navbar-brand\" *ngIf=\"block.navLogoOptions=='logo'&&block.navLinkRedirect=='none'\">\n          <img [src]=\"block.navLogoSrc\" [width]=\"block.navLogoWidth\" [height]=\"block.navLogoHeight\">\n        </a>\n\n        <a *ngIf=\"block.navLogoOptions=='logo'&&block.navLinkRedirect=='url'\" [href]=\"block.nav_logo_url\"\n          class=\"navbar-brand\">\n          <img [src]=\"block.navLogoSrc\" [width]=\"block.navLogoWidth\" [height]=\"block.navLogoHeight\">\n        </a>\n\n        <a *ngIf=\"block.navLogoOptions=='logo'&&block.navLinkRedirect=='page'\" [routerLink]=\"['/'+block.nav_logo_page]\"\n          class=\"navbar-brand\">\n          <img [src]=\"block.navLogoSrc\" [width]=\"block.navLogoWidth\" [height]=\"block.navLogoHeight\">\n        </a>\n\n        <a *ngIf=\"block.navLogoOptions=='logo'&&block.navLinkRedirect=='samePage'\"\n          [attr.fragment]=\"block.nav_logo_divId\" (click)=\"menuService.navigateToSection(block.nav_logo_divId)\"\n          class=\"navbar-brand\">\n          <img [src]=\"block.navLogoSrc\" [width]=\"block.navLogoWidth\" [height]=\"block.navLogoHeight\">\n        </a>\n\n        <button class=\"navbar-toggler\" type=\"button\" *ngIf=\"block.noToggle\" data-toggle=\"collapse\"\n          [attr.data-target]=\"'#dropdown-'+block.id\">\n          <i class=\"fa fa-bars fa-lg py-1 text-white\"></i>\n        </button>\n\n        <div class=\"navbar-collapse collapse{{block.noToggle?'':' show'}}\" id=\"dropdown-{{settings.id}}\">\n          <ul class=\"navbar-nav {{block.linksPosition=='right'?'ml-auto':''}}\">\n            <li *ngFor=\"let menu of menuService.getRootMenu(block.selectedCategory); let i = index\" id=\"nav-item-{{i}}\"\n              class=\"nav-item\" routerLinkActive=\"active\" routerLinkActiveOptions=\"{exact : true}\"\n              [class.dropdown]=\"menu.childs&&menu.childs.length\">\n\n              <a *ngIf=\"menu.type == 1\" [href]=\"menu.url\"\n                target=\"{{menu.url.includes('.pdf')||menu.url.includes('http')?'_blank':'_self'}}\" class=\"nav-link  \"\n                aria-haspopup=\"true\" aria-expanded=\"false\" matTooltip=\"{{block.tooltipmenu?menu.name:''}}\">\n                <i class=\"fa fa-{{menu.icon}}\"></i> <span>{{menu.name}}</span>\n              </a>\n\n              <a *ngIf=\"menu.type ==2\" [routerLink]=\"['/'+ menu.slug]\" class=\"nav-link\" aria-haspopup=\"true\"\n                aria-expanded=\"false\" matTooltip=\"{{block.tooltipmenu?menu.name:''}}\">\n                <i class=\"fa fa-{{menu.icon}}\"></i><span>{{menu.name}}</span>\n              </a>\n\n              <a *ngIf=\"menu.type == 4\" [routerLink]=\"['/'+ menu.slug]\" class=\"nav-link \" aria-haspopup=\"true\"\n                aria-expanded=\"false\" matTooltip=\"{{block.tooltipmenu?menu.name:''}}\">\n                <i class=\"fa fa-{{menu.icon}}\"></i> <span>{{menu.name}}</span>\n              </a>\n\n              <a *ngIf=\"menu.type ==5\" href=\"javascript:;\"\n                class=\"nav-link {{menu.childs&&menu.childs.length ?'dropdown-toggle' : ''}}  \" data-toggle=\"dropdown\"\n                aria-haspopup=\"true\" aria-expanded=\"false\" matTooltip=\"{{block.tooltipmenu?menu.name:''}}\">\n                <i class=\"fa fa-{{menu.icon}}\"></i> <span>{{menu.name}}</span>\n              </a>\n\n              <a *ngIf=\"menu.type == 6\" [routerLink]=\"['/'+ menu.slug]\" class=\"nav-link  \" aria-haspopup=\"true\"\n                aria-expanded=\"false\" matTooltip=\"{{block.tooltipmenu?menu.name:''}}\">\n                <i class=\"fa fa-{{menu.icon}}\"></i> <span>{{menu.name}}</span>\n              </a>\n\n              <ul *ngIf=\"menuService.isHaveChildren(block.selectedCategory, menu.id)\" aria-labelledby=\"dropdownMenu1\"\n                class=\"dropdown-menu menu-{{settings.id}}\" aria-labelledby=\"dropdownMenu1\">\n\n\n                <lib-child-menu class=\"childs-menu {{block.linksPosition=='right'?'text-right':''}}\"\n                  [parentId]=\"menu.id\" [settings]=\"block\"></lib-child-menu>\n\n              </ul>\n            </li>\n\n            <li class=\"nav-item\" id=\"nav-item-lang\" *ngIf=\"block.langConverter\">\n              <a class=\"nav-link\" aria-haspopup=\"true\" aria-expanded=\"false\" (click)=\"navigateToCulture()\">\n                <span>{{block.langButtonLabel}}</span>\n              </a>\n            </li>\n          </ul>\n        </div>\n      </nav>\n\n      <!-- <nav *ngIf=\"settings.menuTheme=='allLeft'\" id=\"nav-{{settings.id}}\"\n        class=\"navbar navbar-expand-md navbar-dark {{settings.cssClass}}  {{settings.fixedTop?'fixed-top':''}} navbar-custom-style\">\n        <a class=\"navbar-brand\" *ngIf=\"settings.navLogoOptions=='text'&&settings.navLinkRedirect=='none'\"\n          [innerHTML]=\"settings.navText|sanitizeHtml\">\n        </a>\n        <a *ngIf=\"settings.navLogoOptions=='text'&&settings.navLinkRedirect=='url'\" [href]=\"settings.nav_logo_url\"\n          [innerHTML]=\"settings.navText|sanitizeHtml\" class=\"navbar-brand\">\n        </a>\n        <a *ngIf=\"settings.navLogoOptions=='text'&&settings.navLinkRedirect=='page'\"\n          [routerLink]=\"'/'+settings.nav_logo_page\" [innerHTML]=\"settings.navText|sanitizeHtml\" class=\"navbar-brand\">\n        </a>\n        <a *ngIf=\"settings.navLogoOptions=='text'&&settings.navLinkRedirect=='samePage'\"\n          [attr.fragment]=\"settings.nav_logo_divId\" (click)=\"navigateToSection(settings.nav_logo_divId)\"\n          [innerHTML]=\"settings.navText|sanitizeHtml\" class=\"navbar-brand\">\n        </a>\n         logo  \n        <a class=\"navbar-brand\" *ngIf=\"settings.navLogoOptions=='logo'&&settings.navLinkRedirect=='none'\">\n          <img [src]=\"settings.navLogoSrc\">\n        </a>\n        <a *ngIf=\"settings.navLogoOptions=='logo'&&settings.navLinkRedirect=='url'\" [href]=\"settings.nav_logo_url\"\n          class=\"navbar-brand\">\n          <img [src]=\"settings.navLogoSrc\">\n        </a>\n        <a *ngIf=\"settings.navLogoOptions=='logo'&&settings.navLinkRedirect=='page'\"\n          [routerLink]=\"'/'+settings.nav_logo_page\" class=\"navbar-brand\">\n          <img [src]=\"settings.navLogoSrc\">\n        </a>\n        <a *ngIf=\"settings.navLogoOptions=='logo'&&settings.navLinkRedirect=='samePage'\"\n          [attr.fragment]=\"settings.nav_logo_divId\" (click)=\"navigateToSection(settings.nav_logo_divId)\"\n          class=\"navbar-brand\">\n          <img [src]=\"settings.navLogoSrc\">\n        </a>\n        <button class=\"navbar-toggler\" type=\"button\" *ngIf=\"settings.noToggle\" data-toggle=\"collapse\"\n          [attr.data-target]=\"'#dropdown-'+settings.id\">\n          <i class=\"fa fa-bars fa-lg py-1 text-white\"></i>\n        </button>\n        <div class=\"{{settings.noToggle?'navbar-collapse collapse':''}}\" id=\"dropdown-{{settings.id}}\">\n          <ul class=\"navbar-nav\">\n            <li *ngFor=\"let menu of menus;let i=index\" id=\"nav-item-{{i}}\"\n              class=\"nav-item {{menu.childs&&menu.childs.length? 'dropdown':''}}\">\n              <a *ngIf=\"menu.type == 1\" [href]=\"menu.url\" class=\"nav-link \" aria-haspopup=\"true\" aria-expanded=\"false\">\n                <i class=\"fa fa-{{menu.icon}}\"></i> {{menu.name}}\n              </a>\n\n              <a *ngIf=\"menu.type ==2\" [routerLink]=\"getPageSlug(menu.pageId)\" class=\"nav-link \" aria-haspopup=\"true\"\n                aria-expanded=\"false\">\n                <i class=\"fa fa-{{menu.icon}}\"></i> {{menu.name}}\n              </a>\n\n              <a *ngIf=\"menu.type == 3\" [attr.fragment]=\"menu.url\" (click)=\"navigateToSection(menu.url)\"\n                class=\"nav-link  \" aria-haspopup=\"true\" aria-expanded=\"false\">\n                <i class=\"fa fa-{{menu.icon}}\"></i> {{menu.name}}\n              </a>\n\n              <a *ngIf=\"menu.type == 4\" [routerLink]=\"'/'+menu.slug\" class=\"nav-link  \" aria-haspopup=\"true\"\n                aria-expanded=\"false\">\n                <i class=\"fa fa-{{menu.icon}}\"></i> {{menu.name}}\n              </a>\n\n              <a *ngIf=\"menu.type ==5\" class=\"nav-link {{menu.childs&&menu.childs.length ?'dropdown-toggle' : ''}}\"\n                data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                <i class=\"fa fa-{{menu.icon}}\"></i> {{menu.name}}\n              </a>\n\n              <a *ngIf=\"menu.type == 6\" [routerLink]=\"'/' +menu.slug\" class=\"nav-link\" aria-haspopup=\"true\"\n                aria-expanded=\"false\">\n                <i class=\"fa fa-{{menu.icon}}\"></i> {{menu.name}}\n              </a>\n              <ul *ngIf=\"menu.childs&&menu.childs.length\" aria-labelledby=\"dropdownMenu1\"\n                class=\"dropdown-menu menu-{{settings.id}}\">\n                <app-childs-menu [allPages]=\"allPages\" class=\"childs-menu\" [settings]=\"settings\" [childs]=\"menu.childs\">\n                </app-childs-menu>\n              </ul>\n            </li>\n          </ul>\n           <ul class=\"navbar-nav ml-auto\" *ngIf=\"settings.userConfig\">\n              <li class=\"nav-item\" *ngIf=\"block.full_name&&user\">\n                  <a class=\"nav-link\"><span *ngIf=\"block.prefix\">{{block.element.prefix}}</span> {{user.fullName}}</a>\n              </li>\n              <li class=\"nav-item\" *ngIf=\"block.regestration && !user\">\n                  <a class=\"nav-link\" [routerLink]=\"'/'+block.RegestrationPage\">Registration</a>\n              </li>\n              <li class=\"nav-item\" *ngIf=\"block.showLoginLogout&& !user\">\n                  <a class=\"nav-link\" [routerLink]=\"'/'+block.LoginPage\">Login</a>\n              </li>\n              <li class=\"nav-item\" *ngIf=\"block.showLoginLogout&& user\">\n                  <a class=\"nav-link\" (click)='logOut()'>Logout\n                  </a>\n              </li>\n\n          </ul>  \n\n        </div>\n      </nav> -->\n\n      <!-- <nav *ngIf=\"settings.menuTheme=='bcLinksLeft'\" id=\"nav-{{settings.id}}\"\n        class=\"navbar navbar-dark {{settings.cssClass}} navbar-expand-md justify-content-between {{settings.fixedTop?'fixed-top':''}} navbar-custom-style\">\n        <div class=\"container-fluid\">\n          <button class=\"navbar-toggler\" type=\"button\" *ngIf=\"settings.noToggle\" data-toggle=\"collapse\"\n            [attr.data-target]=\"'.dropdown-'+settings.id\">\n            <span class=\"navbar-toggler-icon\"></span>\n          </button>\n          <div\n            class=\"{{settings.noToggle?'navbar-collapse collapse':''}} dropdown-{{settings.id}} w-50 order-1 order-md-0\">\n            <ul class=\"navbar-nav\">\n              <li *ngFor=\"let menu of menus;let i=index\" id=\"nav-item-{{i}}\"\n                class=\"nav-item {{menu.childs&&menu.childs.length? 'dropdown':''}}\">\n                <a *ngIf=\"menu.type == 1\" [href]=\"menu.url\" class=\"nav-link -italic':''}}\" aria-haspopup=\"true\"\n                  aria-expanded=\"false\">\n                  <i class=\"fa fa-{{menu.icon}}\"></i> {{menu.name}}\n                </a>\n\n                <a *ngIf=\"menu.type ==2\" [routerLink]=\"getPageSlug(menu.pageId)\" class=\"nav-link \" aria-haspopup=\"true\"\n                  aria-expanded=\"false\">\n                  <i class=\"fa fa-{{menu.icon}}\"></i> {{menu.name}}\n                </a>\n\n                <a *ngIf=\"menu.type == 3\" [attr.fragment]=\"menu.url\" (click)=\"navigateToSection(menu.url)\"\n                  class=\"nav-link  \" aria-haspopup=\"true\" aria-expanded=\"false\">\n                  <i class=\"fa fa-{{menu.icon}}\"></i> {{menu.name}}\n                </a>\n\n                <a *ngIf=\"menu.type == 4\" [routerLink]=\"'/'+menu.slug\" class=\"nav-link   \" aria-haspopup=\"true\"\n                  aria-expanded=\"false\">\n                  <i class=\"fa fa-{{menu.icon}}\"></i> {{menu.name}}\n                </a>\n\n                <a *ngIf=\"menu.type ==5\" class=\"nav-link {{menu.childs&&menu.childs.length ?'dropdown-toggle' : ''}} \"\n                  data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                  <i class=\"fa fa-{{menu.icon}}\"></i> {{menu.name}}\n                </a>\n                <a *ngIf=\"menu.type == 6\" [routerLink]=\"'/' +menu.slug\" class=\"nav-link\" aria-haspopup=\"true\"\n                  aria-expanded=\"false\">\n                  <i class=\"fa fa-{{menu.icon}}\"></i> {{menu.name}}\n                </a>\n                <ul *ngIf=\"menu.childs&&menu.childs.length\" aria-labelledby=\"dropdownMenu1\"\n                  class=\"dropdown-menu menu-{{settings.id}}\">\n                  <app-childs-menu [allPages]=\"allPages\" class=\"childs-menu\" [settings]=\"settings\"\n                    [childs]=\"menu.childs\">\n                  </app-childs-menu>\n                </ul>\n              </li>\n            </ul>\n          </div>\n\n\n          <a class=\"navbar-brand mx-auto d-block text-center order-0 order-md-1 w-25\"\n            *ngIf=\"settings.navLogoOptions=='text'&&settings.navLinkRedirect=='none'\"\n            [innerHTML]=\"settings.navText|sanitizeHtml\">\n          </a>\n          <a *ngIf=\"settings.navLogoOptions=='text'&&settings.navLinkRedirect=='url'\" [href]=\"settings.nav_logo_url\"\n            [innerHTML]=\"settings.navText|sanitizeHtml\"\n            class=\"navbar-brand mx-auto d-block text-center order-0 order-md-1 w-25\">\n          </a>\n          <a *ngIf=\"settings.navLogoOptions=='text'&&settings.navLinkRedirect=='page'\"\n            [routerLink]=\"'/'+settings.nav_logo_page\" [innerHTML]=\"settings.navText|sanitizeHtml\"\n            class=\"navbar-brand mx-auto d-block text-center order-0 order-md-1 w-25\">\n          </a>\n          <a *ngIf=\"settings.navLogoOptions=='text'&&settings.navLinkRedirect=='samePage'\"\n            [attr.fragment]=\"settings.nav_logo_divId\" (click)=\"navigateToSection(settings.nav_logo_divId)\"\n            [innerHTML]=\"settings.navText|sanitizeHtml\"\n            class=\"navbar-brand mx-auto d-block text-center order-0 order-md-1 w-25\">\n          </a>\n          logo  \n          <a class=\"navbar-brand mx-auto d-block text-center order-0 order-md-1 w-25\n          \" *ngIf=\"settings.navLogoOptions=='logo'&&settings.navLinkRedirect=='none'\">\n            <img [src]=\"settings.navLogoSrc\">\n          </a>\n          <a *ngIf=\"settings.navLogoOptions=='logo'&&settings.navLinkRedirect=='url'\" [href]=\"settings.nav_logo_url\"\n            class=\"navbar-brand mx-auto d-block text-center order-0 order-md-1 w-25\n            \">\n            <img [src]=\"settings.navLogoSrc\">\n          </a>\n          <a *ngIf=\"settings.navLogoOptions=='logo'&&settings.navLinkRedirect=='page'\"\n            [routerLink]=\"'/'+settings.nav_logo_page\" class=\"navbar-brand mx-auto d-block text-center order-0 order-md-1 w-25\n            \">\n            <img [src]=\"settings.navLogoSrc\">\n          </a>\n          <a *ngIf=\"settings.navLogoOptions=='logo'&&settings.navLinkRedirect=='samePage'\"\n            [attr.fragment]=\"settings.nav_logo_divId\" (click)=\"navigateToSection(settings.nav_logo_divId)\" class=\"navbar-brand mx-auto d-block text-center order-0 order-md-1 w-25\n            \">\n            <img [src]=\"settings.navLogoSrc\">\n          </a>\n          <div class=\"{{settings.noToggle?'navbar-collapse collapse':''}} dropdown-{{settings.id}} w-50 order-2\">\n\n              <ul class=\"nav navbar-nav ml-auto\" *ngIf=\"settings.userConfig\">\n                  <li class=\"nav-item\" *ngIf=\"block.full_name&&user\">\n                      <a class=\"nav-link\"><span *ngIf=\"block.prefix\">{{block.element.prefix}}</span> {{user.fullName}}</a>\n                  </li>\n                  <li class=\"nav-item\" *ngIf=\"block.regestration && !user\">\n                      <a class=\"nav-link\" [routerLink]=\"'/'+block.RegestrationPage\">Registration</a>\n                  </li>\n                  <li class=\"nav-item\" *ngIf=\"block.showLoginLogout&& !user\">\n                      <a class=\"nav-link\" [routerLink]=\"'/'+block.LoginPage\">Login</a>\n                  </li>\n                  <li class=\"nav-item\" *ngIf=\"block.showLoginLogout&& user\">\n                      <a class=\"nav-link\" (click)='logOut()'>Logout\n                      </a>\n                  </li>\n\n              </ul>\n          </div>  \n        </div>\n      </nav> -->\n\n      <!-- <nav *ngIf=\"settings.menuTheme=='bcLinksRight'\" id=\"nav-{{settings.id}}\"\n        class=\"navbar navbar-dark {{settings.cssClass}} navbar-expand-md justify-content-between {{settings.fixedTop?'fixed-top':''}} navbar-custom-style\">\n        <div class=\"container-fluid\">\n          <button class=\"navbar-toggler\" type=\"button\" *ngIf=\"settings.noToggle\" data-toggle=\"collapse\"\n            [attr.data-target]=\"'.dropdown-'+settings.id\">\n            <span class=\"navbar-toggler-icon\"></span>\n          </button>\n          <div class=\"{{settings.noToggle?'navbar-collapse collapse':''}} dropdown-{{settings.id}} w-50 order-1 order-md-0\">\n              <ul class=\"navbar-nav\" *ngIf=\"settings.userConfig\">\n                  <li class=\"nav-item\" *ngIf=\"block.full_name&&user\">\n                      <a class=\"nav-link\"><span *ngIf=\"block.prefix\">{{block.element.prefix}}</span> {{user.fullName}}</a>\n                  </li>\n                  <li class=\"nav-item\" *ngIf=\"block.regestration && !user\">\n                      <a class=\"nav-link\" [routerLink]=\"'/'+block.RegestrationPage\">Registration</a>\n                  </li>\n                  <li class=\"nav-item\" *ngIf=\"block.showLoginLogout&& !user\">\n                      <a class=\"nav-link\" [routerLink]=\"'/'+block.LoginPage\">Login</a>\n                  </li>\n                  <li class=\"nav-item\" *ngIf=\"block.showLoginLogout&& user\">\n                      <a class=\"nav-link\" (click)='logOut()'>Logout\n                      </a>\n                  </li>\n              </ul>\n          </div>  \n\n          <a class=\"navbar-brand mx-auto d-block text-center order-0 order-md-1 w-25\"\n            *ngIf=\"settings.navLogoOptions=='text'&&settings.navLinkRedirect=='none'\"\n            [innerHTML]=\"settings.navText|sanitizeHtml\">\n          </a>\n          <a *ngIf=\"settings.navLogoOptions=='text'&&settings.navLinkRedirect=='url'\" [href]=\"settings.nav_logo_url\"\n            [innerHTML]=\"settings.navText|sanitizeHtml\"\n            class=\"navbar-brand mx-auto d-block text-center order-0 order-md-1 w-25\">\n          </a>\n          <a *ngIf=\"settings.navLogoOptions=='text'&&settings.navLinkRedirect=='page'\"\n            [routerLink]=\"'/'+settings.nav_logo_page\" [innerHTML]=\"settings.navText|sanitizeHtml\"\n            class=\"navbar-brand mx-auto d-block text-center order-0 order-md-1 w-25\">\n          </a>\n          <a *ngIf=\"settings.navLogoOptions=='text'&&settings.navLinkRedirect=='samePage'\"\n            [attr.fragment]=\"settings.nav_logo_divId\" (click)=\"navigateToSection(settings.nav_logo_divId)\"\n            [innerHTML]=\"settings.navText|sanitizeHtml\"\n            class=\"navbar-brand mx-auto d-block text-center order-0 order-md-1 w-25\">\n          </a>\n           logo \n          <a class=\"navbar-brand mx-auto d-block text-center order-0 order-md-1 w-25\"\n            *ngIf=\"settings.navLogoOptions=='logo'&&settings.navLinkRedirect=='none'\">\n            <img [src]=\"settings.navLogoSrc\">\n          </a>\n          <a *ngIf=\"settings.navLogoOptions=='logo'&&settings.navLinkRedirect=='url'\" [href]=\"settings.nav_logo_url\"\n            class=\"navbar-brand mx-auto d-block text-center order-0 order-md-1 w-25\">\n            <img [src]=\"settings.navLogoSrc\">\n          </a>\n          <a *ngIf=\"settings.navLogoOptions=='logo'&&settings.navLinkRedirect=='page'\"\n            [routerLink]=\"'/'+settings.nav_logo_page\"\n            class=\"navbar-brand mx-auto d-block text-center order-0 order-md-1 w-25\">\n            <img [src]=\"settings.navLogoSrc\">\n          </a>\n          <a *ngIf=\"settings.navLogoOptions=='logo'&&settings.navLinkRedirect=='samePage'\"\n            [attr.fragment]=\"settings.nav_logo_divId\" (click)=\"navigateToSection(settings.nav_logo_divId)\"\n            class=\"navbar-brand mx-auto d-block text-center order-0 order-md-1 w-25\">\n            <img [src]=\"settings.navLogoSrc\">\n          </a>\n          <div class=\"{{settings.noToggle?'navbar-collapse collapse':''}} dropdown-{{settings.id}} w-50 order-2\">\n\n            <ul class=\"nav navbar-nav ml-auto\">\n              <li *ngFor=\"let menu of menus;let i=index\" id=\"nav-item-{{i}}\"\n                class=\"nav-item {{menu.childs&&menu.childs.length? 'dropdown':''}}\">\n                <a *ngIf=\"menu.type == 1\" [href]=\"menu.url\" class=\"nav-link  \" aria-haspopup=\"true\"\n                  aria-expanded=\"false\">\n                  <i class=\"fa fa-{{menu.icon}}\"></i> {{menu.name}}\n                </a>\n\n                <a *ngIf=\"menu.type ==2\" [routerLink]=\"getPageSlug(menu.pageId)\" class=\"nav-link  \" aria-haspopup=\"true\"\n                  aria-expanded=\"false\">\n                  <i class=\"fa fa-{{menu.icon}}\"></i> {{menu.name}}\n                </a>\n\n                <a *ngIf=\"menu.type == 3\" [attr.fragment]=\"menu.url\" (click)=\"navigateToSection(menu.url)\"\n                  class=\"nav-link   \" aria-haspopup=\"true\" aria-expanded=\"false\">\n                  <i class=\"fa fa-{{menu.icon}}\"></i> {{menu.name}}\n                </a>\n\n                <a *ngIf=\"menu.type == 4\" [routerLink]=\"'/'+menu.slug\" class=\"nav-link  \" aria-haspopup=\"true\"\n                  aria-expanded=\"false\">\n                  <i class=\"fa fa-{{menu.icon}}\"></i> {{menu.name}}\n                </a>\n\n                <a *ngIf=\"menu.type ==5\" class=\"nav-link {{menu.childs&&menu.childs.length ?'dropdown-toggle' : ''}}  \"\n                  data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                  <i class=\"fa fa-{{menu.icon}}\"></i> {{menu.name}}\n                </a>\n\n                <a *ngIf=\"menu.type == 6\" [routerLink]=\"'/' +menu.slug\" class=\"nav-link\" aria-haspopup=\"true\"\n                  aria-expanded=\"false\">\n                  <i class=\"fa fa-{{menu.icon}}\"></i> {{menu.name}}\n                </a>\n                <ul *ngIf=\"menu.childs&&menu.childs.length\" aria-labelledby=\"dropdownMenu1\"\n                  class=\"dropdown-menu menu-{{settings.id}}\">\n                  <app-childs-menu [allPages]=\"allPages\" class=\"childs-menu\" [settings]=\"settings\"\n                    [childs]=\"menu.childs\">\n                  </app-childs-menu>\n                </ul>\n              </li>\n            </ul>\n          </div>\n        </div>\n      </nav> -->\n\n      <!-- <nav class=\"navbar navbar-expand-sm navbar-dark  {{settings.fixedTop?'fixed-top':''}} navbar-custom-style\"\n        data-toggle=\"affix\" *ngIf=\"settings.menuTheme=='bcLinksCenter'\" id=\"nav-{{settings.id}}\">\n\n        <div class=\"mx-auto\">\n          <a class=\"navbar-brand mx-auto d-block text-center order-0 order-md-1 w-100\"\n            *ngIf=\"settings.navLogoOptions=='text'&&settings.navLinkRedirect=='none'\"\n            [innerHTML]=\"settings.navText|sanitizeHtml\">\n          </a>\n          <a *ngIf=\"settings.navLogoOptions=='text'&&settings.navLinkRedirect=='url'\" [href]=\"settings.nav_logo_url\"\n            [innerHTML]=\"settings.navText|sanitizeHtml\"\n            class=\"navbar-brand mx-auto d-block text-center order-0 order-md-1 w-100\">\n          </a>\n          <a *ngIf=\"settings.navLogoOptions=='text'&&settings.navLinkRedirect=='page'\"\n            [routerLink]=\"'/'+settings.nav_logo_page\" [innerHTML]=\"settings.navText|sanitizeHtml\"\n            class=\"navbar-brand mx-auto d-block text-center order-0 order-md-1 w-100\">\n          </a>\n          <a *ngIf=\"settings.navLogoOptions=='text'&&settings.navLinkRedirect=='samePage'\"\n            [attr.fragment]=\"settings.nav_logo_divId\" (click)=\"navigateToSection(settings.nav_logo_divId)\"\n            [innerHTML]=\"settings.navText|sanitizeHtml\"\n            class=\"navbar-brand mx-auto d-block text-center order-0 order-md-1 w-100\">\n          </a>\n           logo \n          <a class=\"navbar-brand mx-auto d-block text-center order-0 order-md-1 w-100\"\n            *ngIf=\"settings.navLogoOptions=='logo'&&settings.navLinkRedirect=='none'\">\n            <img [src]=\"settings.navLogoSrc\">\n          </a>\n          <a *ngIf=\"settings.navLogoOptions=='logo'&&settings.navLinkRedirect=='url'\" [href]=\"settings.nav_logo_url\"\n            class=\"navbar-brand mx-auto d-block text-center order-0 order-md-1 w-100\">\n            <img [src]=\"settings.navLogoSrc\">\n          </a>\n          <a *ngIf=\"settings.navLogoOptions=='logo'&&settings.navLinkRedirect=='page'\"\n            [routerLink]=\"'/'+settings.nav_logo_page\"\n            class=\"navbar-brand mx-auto d-block text-center order-0 order-md-1 w-100\">\n            <img [src]=\"settings.navLogoSrc\">\n          </a>\n          <a *ngIf=\"settings.navLogoOptions=='logo'&&settings.navLinkRedirect=='samePage'\"\n            [attr.fragment]=\"settings.nav_logo_divId\" (click)=\"navigateToSection(settings.nav_logo_divId)\"\n            class=\"navbar-brand mx-auto d-block text-center order-0 order-md-1 w-100\">\n            <img [src]=\"settings.navLogoSrc\">\n          </a>\n          <button class=\"navbar-toggler w-100\" type=\"button\" *ngIf=\"settings.noToggle\" data-toggle=\"collapse\"\n            [attr.data-target]=\"'#dropdown-'+settings.id\">\n            <i class=\"fa fa-bars fa-lg py-1 text-white\"></i>\n          </button>\n          <div class=\"{{settings.noToggle?'navbar-collapse collapse':''}} text-center \" id=\"dropdown-{{settings.id}}\">\n            <ul class=\"navbar-nav\">\n              <li *ngFor=\"let menu of menus;let i=index\" id=\"nav-item-{{i}}\"\n                class=\"nav-item {{menu.childs&&menu.childs.length? 'dropdown':''}}\">\n                <a *ngIf=\"menu.type == 1\" [href]=\"menu.url\" class=\"nav-link  \" aria-haspopup=\"true\"\n                  aria-expanded=\"false\">\n                  <i class=\"fa fa-{{menu.icon}}\"></i> {{menu.name}}\n                </a>\n\n                <a *ngIf=\"menu.type ==2\" [routerLink]=\"getPageSlug(menu.pageId)\" class=\"nav-link  \" aria-haspopup=\"true\"\n                  aria-expanded=\"false\">\n                  <i class=\"fa fa-{{menu.icon}}\"></i> {{menu.name}}\n                </a>\n\n                <a *ngIf=\"menu.type == 3\" [attr.fragment]=\"menu.url\" (click)=\"navigateToSection(menu.url)\"\n                  class=\"nav-link   \" aria-haspopup=\"true\" aria-expanded=\"false\">\n                  <i class=\"fa fa-{{menu.icon}}\"></i> {{menu.name}}\n                </a>\n\n                <a *ngIf=\"menu.type == 4\" [routerLink]=\"'/'+menu.slug\" class=\"nav-link  \" aria-haspopup=\"true\"\n                  aria-expanded=\"false\">\n                  <i class=\"fa fa-{{menu.icon}}\"></i> {{menu.name}}\n                </a>\n\n                <a *ngIf=\"menu.type ==5\" class=\"nav-link {{menu.childs&&menu.childs.length ?'dropdown-toggle' : ''}}  \"\n                  data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                  <i class=\"fa fa-{{menu.icon}}\"></i> {{menu.name}}\n                </a>\n\n                <a *ngIf=\"menu.type == 6\" [routerLink]=\"'/' +menu.slug\" class=\"nav-link\" aria-haspopup=\"true\"\n                  aria-expanded=\"false\">\n                  <i class=\"fa fa-{{menu.icon}}\"></i> {{menu.name}}\n                </a>\n                <ul *ngIf=\"menu.childs&&menu.childs.length\" aria-labelledby=\"dropdownMenu1\"\n                  class=\"dropdown-menu menu-{{settings.id}}\">\n                  <app-childs-menu [allPages]=\"allPages\" class=\"childs-menu\" [settings]=\"settings\"\n                    [childs]=\"menu.childs\">\n                  </app-childs-menu>\n                </ul>\n              </li>\n            </ul>\n              <ul class=\"navbar-nav\" *ngIf=\"settings.userConfig\">\n                  <li class=\"nav-item\" *ngIf=\"block.full_name&&user\">\n                      <a class=\"nav-link\"><span *ngIf=\"block.prefix\">{{block.element.prefix}}</span> {{user.fullName}}</a>\n                  </li>\n                  <li class=\"nav-item\" *ngIf=\"block.regestration && !user\">\n                      <a class=\"nav-link\" [routerLink]=\"'/'+block.RegestrationPage\">Registration</a>\n                  </li>\n                  <li class=\"nav-item\" *ngIf=\"block.showLoginLogout&& !user\">\n                      <a class=\"nav-link\" [routerLink]=\"'/'+block.LoginPage\">Login</a>\n                  </li>\n                  <li class=\"nav-item\" *ngIf=\"block.showLoginLogout&& user\">\n                      <a class=\"nav-link\" (click)='logOut()'>Logout\n                      </a>\n                  </li>\n              </ul>  \n          </div>\n        </div>\n      </nav> -->\n\n      <!-- <nav *ngIf=\"settings.menuTheme=='blLinksRight'\" id=\"nav-{{settings.id}}\"\n        class=\"navbar navbar-expand-sm navbar-dark {{settings.cssClass}} justify-content-end {{settings.fixedTop?'fixed-top':''}} navbar-custom-style\">\n           Text  \n        <a class=\"navbar-brand\" *ngIf=\"settings.navLogoOptions=='text'&&settings.navLinkRedirect=='none'\"\n          [innerHTML]=\"settings.navText|sanitizeHtml\">\n        </a>\n        <a *ngIf=\"settings.navLogoOptions=='text'&&settings.navLinkRedirect=='url'\" [href]=\"settings.nav_logo_url\"\n          [innerHTML]=\"settings.navText|sanitizeHtml\" class=\"navbar-brand\">\n        </a>\n        <a *ngIf=\"settings.navLogoOptions=='text'&&settings.navLinkRedirect=='page'\"\n          [routerLink]=\"'/'+settings.nav_logo_page\" [innerHTML]=\"settings.navText|sanitizeHtml\" class=\"navbar-brand\">\n        </a>\n        <a *ngIf=\"settings.navLogoOptions=='text'&&settings.navLinkRedirect=='samePage'\"\n          [attr.fragment]=\"settings.nav_logo_divId\" (click)=\"navigateToSection(settings.nav_logo_divId)\"\n          [innerHTML]=\"settings.navText|sanitizeHtml\" class=\"navbar-brand\">\n        </a>\n         Logo  >\n        <a class=\"navbar-brand\" *ngIf=\"settings.navLogoOptions=='logo'&&settings.navLinkRedirect=='none'\">\n          <img [src]=\"settings.navLogoSrc\">\n        </a>\n        <a *ngIf=\"settings.navLogoOptions=='logo'&&settings.navLinkRedirect=='url'\" [href]=\"settings.nav_logo_url\"\n          class=\"navbar-brand\">\n          <img [src]=\"settings.navLogoSrc\">\n        </a>\n        <a *ngIf=\"settings.navLogoOptions=='logo'&&settings.navLinkRedirect=='page'\"\n          [routerLink]=\"'/'+settings.nav_logo_page\" class=\"navbar-brand\">\n          <img [src]=\"settings.navLogoSrc\">\n        </a>\n        <a *ngIf=\"settings.navLogoOptions=='logo'&&settings.navLinkRedirect=='samePage'\"\n          [attr.fragment]=\"settings.nav_logo_divId\" (click)=\"navigateToSection(settings.nav_logo_divId)\"\n          class=\"navbar-brand\">\n          <img [src]=\"settings.navLogoSrc\">\n        </a>\n        <span class=\"ml-auto mr-2\">&nbsp;</span>\n        <button class=\"navbar-toggler w-100\" type=\"button\" *ngIf=\"settings.noToggle\" data-toggle=\"collapse\"\n          [attr.data-target]=\"'#dropdown-'+settings.id\">\n          <i class=\"fa fa-bars fa-lg py-1 text-white\"></i>\n        </button>\n\n        <div class=\"{{settings.noToggle?'navbar-collapse collapse':''}} flex-grow-0\" id=\"dropdown-{{settings.id}}\">\n          <ul class=\"navbar-nav text-right\">\n            <li *ngFor=\"let menu of menus;let i=index\" id=\"nav-item-{{i}}\"\n              class=\"nav-item {{menu.childs&&menu.childs.length? 'dropdown':''}}\">\n              <a *ngIf=\"menu.type == 1\" [href]=\"menu.url\" class=\"nav-link \" aria-haspopup=\"true\" aria-expanded=\"false\">\n                <i class=\"fa fa-{{menu.icon}}\"></i> {{menu.name}}\n              </a>\n\n              <a *ngIf=\"menu.type ==2\" [routerLink]=\"getPageSlug(menu.pageId)\" class=\"nav-link \" aria-haspopup=\"true\"\n                aria-expanded=\"false\">\n                <i class=\"fa fa-{{menu.icon}}\"></i> {{menu.name}}\n              </a>\n\n              <a *ngIf=\"menu.type == 3\" [attr.fragment]=\"menu.url\" (click)=\"navigateToSection(menu.url)\"\n                class=\"nav-link \" aria-haspopup=\"true\" aria-expanded=\"false\">\n                <i class=\"fa fa-{{menu.icon}}\"></i> {{menu.name}}\n              </a>\n\n              <a *ngIf=\"menu.type == 4\" [routerLink]=\"'/'+menu.slug\" class=\"nav-link   \" aria-haspopup=\"true\"\n                aria-expanded=\"false\">\n                <i class=\"fa fa-{{menu.icon}}\"></i> {{menu.name}}\n              </a>\n\n              <a *ngIf=\"menu.type ==5\" class=\"nav-link {{menu.childs&&menu.childs.length ?'dropdown-toggle' : ''}}  \"\n                data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                <i class=\"fa fa-{{menu.icon}}\"></i> {{menu.name}}\n              </a>\n              <a *ngIf=\"menu.type == 6\" [routerLink]=\"'/' +menu.slug\" class=\"nav-link\" aria-haspopup=\"true\"\n                aria-expanded=\"false\">\n                <i class=\"fa fa-{{menu.icon}}\"></i> {{menu.name}}\n              </a>\n              <ul *ngIf=\"menu.childs&&menu.childs.length\" aria-labelledby=\"dropdownMenu1\"\n                class=\"dropdown-menu menu-{{settings.id}}\">\n                <app-childs-menu [allPages]=\"allPages\" class=\"childs-menu\" [settings]=\"settings\" [childs]=\"menu.childs\">\n                </app-childs-menu>\n              </ul>\n            </li>\n          </ul>\n           <ul class=\"navbar-nav text-right\" *ngIf=\"settings.userConfig\">\n              <li class=\"nav-item\" *ngIf=\"block.full_name&&user\">\n                  <a class=\"nav-link\"><span *ngIf=\"block.prefix\">{{block.element.prefix}}</span> {{user.fullName}}</a>\n              </li>\n              <li class=\"nav-item\" *ngIf=\"block.regestration && !user\">\n                  <a class=\"nav-link\" [routerLink]=\"'/'+block.RegestrationPage\">Registration</a>\n              </li>\n              <li class=\"nav-item\" *ngIf=\"block.showLoginLogout&& !user\">\n                  <a class=\"nav-link\" [routerLink]=\"'/'+block.LoginPage\">Login</a>\n              </li>\n              <li class=\"nav-item\" *ngIf=\"block.showLoginLogout&& user\">\n                  <a class=\"nav-link\" (click)='logOut()'>Logout\n                  </a>\n              </li>\n          </ul> \n        </div>\n      </nav> -->\n\n      <!-- <nav\n        class=\"navbar navbar-dark {{settings.nav_background_color?'':'bg-dark'}}    {{settings.fixedTop?'fixed-top':''}} navbar-custom-style\"\n        *ngIf=\"settings.menuTheme=='fullToggle'\" id=\"nav-{{settings.id}}\">\n\n        Text  \n        <a class=\"navbar-brand\" *ngIf=\"settings.navLogoOptions=='text'&&settings.navLinkRedirect=='none'\"\n          [innerHTML]=\"settings.navText|sanitizeHtml\">\n        </a>\n        <a *ngIf=\"settings.navLogoOptions=='text'&&settings.navLinkRedirect=='url'\" [href]=\"settings.nav_logo_url\"\n          [innerHTML]=\"settings.navText|sanitizeHtml\" class=\"navbar-brand\">\n        </a>\n        <a *ngIf=\"settings.navLogoOptions=='text'&&settings.navLinkRedirect=='page'\"\n          [routerLink]=\"'/'+settings.nav_logo_page\" [innerHTML]=\"settings.navText|sanitizeHtml\" class=\"navbar-brand\">\n        </a>\n        <a *ngIf=\"settings.navLogoOptions=='text'&&settings.navLinkRedirect=='samePage'\"\n          [attr.fragment]=\"settings.nav_logo_divId\" (click)=\"navigateToSection(settings.nav_logo_divId)\"\n          [innerHTML]=\"settings.navText|sanitizeHtml\" class=\"navbar-brand\">\n        </a>\n          Logo  \n        <a class=\"navbar-brand\" *ngIf=\"settings.navLogoOptions=='logo'&&settings.navLinkRedirect=='none'\">\n          <img [src]=\"settings.navLogoSrc\">\n        </a>\n        <a *ngIf=\"settings.navLogoOptions=='logo'&&settings.navLinkRedirect=='url'\" [href]=\"settings.nav_logo_url\"\n          class=\"navbar-brand\">\n          <img [src]=\"settings.navLogoSrc\">\n        </a>\n        <a *ngIf=\"settings.navLogoOptions=='logo'&&settings.navLinkRedirect=='page'\"\n          [routerLink]=\"'/'+settings.nav_logo_page\" class=\"navbar-brand\">\n          <img [src]=\"settings.navLogoSrc\">\n        </a>\n        <a *ngIf=\"settings.navLogoOptions=='logo'&&settings.navLinkRedirect=='samePage'\"\n          [attr.fragment]=\"settings.nav_logo_divId\" (click)=\"navigateToSection(settings.nav_logo_divId)\"\n          class=\"navbar-brand\">\n          <img [src]=\"settings.navLogoSrc\">\n        </a>\n        <button class=\"navbar-toggler collapsed\" type=\"button\" *ngIf=\"settings.noToggle\" data-toggle=\"collapse\"\n          [attr.data-target]=\"'#dropdown-'+settings.id\" [attr.aria-controls]=\"'#dropdown-'+settings.id\"\n          [attr.aria-expanded]=\"'false'\" [attr.aria-label]=\"'Toggle navigation'\">\n          <i class=\"fa fa-bars fa-lg py-1 text-white\"></i>\n        </button>\n\n        <div class=\"{{settings.noToggle?'navbar-collapse collapse':''}}\" id=\"dropdown-{{settings.id}}\">\n          <ul class=\"navbar-nav mr-auto\">\n            <li *ngFor=\"let menu of menus;let i=index\" id=\"nav-item-{{i}}\"\n              class=\"nav-item {{menu.childs&&menu.childs.length? 'dropdown':''}}\">\n              <a *ngIf=\"menu.type == 1\" [href]=\"menu.url\" class=\"nav-link  \" aria-haspopup=\"true\" aria-expanded=\"false\">\n                <i class=\"fa fa-{{menu.icon}}\"></i> {{menu.name}}\n              </a>\n\n              <a *ngIf=\"menu.type ==2\" [routerLink]=\"getPageSlug(menu.pageId)\" class=\"nav-link  \" aria-haspopup=\"true\"\n                aria-expanded=\"false\">\n                <i class=\"fa fa-{{menu.icon}}\"></i> {{menu.name}}\n              </a>\n\n              <a *ngIf=\"menu.type == 3\" [attr.fragment]=\"menu.url\" (click)=\"navigateToSection(menu.url)\"\n                class=\"nav-link  \" aria-haspopup=\"true\" aria-expanded=\"false\">\n                <i class=\"fa fa-{{menu.icon}}\"></i> {{menu.name}}\n              </a>\n\n              <a *ngIf=\"menu.type == 4\" [routerLink]=\"'/'+menu.slug\" class=\"nav-link  \" aria-haspopup=\"true\"\n                aria-expanded=\"false\">\n                <i class=\"fa fa-{{menu.icon}}\"></i> {{menu.name}}\n              </a>\n\n              <a *ngIf=\"menu.type ==5\" class=\"nav-link {{menu.childs&&menu.childs.length ?'dropdown-toggle' : ''}}  \"\n                data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                <i class=\"fa fa-{{menu.icon}}\"></i> {{menu.name}}\n              </a>\n              <a *ngIf=\"menu.type == 6\" [routerLink]=\"'/' +menu.slug\" class=\"nav-link\" aria-haspopup=\"true\"\n                aria-expanded=\"false\">\n                <i class=\"fa fa-{{menu.icon}}\"></i> {{menu.name}}\n              </a>\n              <ul *ngIf=\"menu.childs&&menu.childs.length\" aria-labelledby=\"dropdownMenu1\"\n                class=\"dropdown-menu menu-{{settings.id}}\">\n                <app-childs-menu [allPages]=\"allPages\" class=\"childs-menu\" [settings]=\"settings\" [childs]=\"menu.childs\">\n                </app-childs-menu>\n              </ul>\n            </li>\n          </ul>\n\n        </div>\n      </nav> -->\n    </div>\n\n    <!-- <div *ngIf=\"block.element&&block.element.type=='HTML'\">\n      <div [innerHTML]=\"block.content|sanitizeHtml\"></div>\n    </div> -->\n\n    <div *ngIf=\"block.element&&block.element.type=='Text'\">\n      <div class=\"wow {{block.textAnimate}} {{settings.cssClass}} {{block.blockid}} {{block.blockclass}} \">\n        <div [innerHTML]=\"block.headerText|sanitizeHtml\"></div>\n      </div>\n\n    </div>\n\n    <div *ngIf=\"block.element&&block.element.type=='Button'\">\n      <div class=\"{{block.btnposition}} {{block.blockid}} {{block.blockclass}} \">\n        <a *ngIf=\"block.btnOption==1\" href=\"{{block.btnLink}}\" target=\"_self\" class=\"btn  \">\n          {{block.btnLabel}}\n        </a>\n\n        <button type=\"button\" *ngIf=\"block.btnOption==2\" class=\"btn x\" (click)=\"navigateToPage()\">\n          {{block.btnLabel}}\n        </button>\n\n        <button *ngIf=\"block.btnOption==3\"\n          class=\"btn  {{settings.cssClass}}  {{settings.bold ? 'font-weight-bold':''}}  {{settings.italic ? 'font-style-italic':''}} {{settings.imgAnimate ? 'animated wow '+settings.imgAnimate : ''}}\">\n          {{block.btnLabel}}\n        </button>\n        <nav id=\"nav-{{settings.id}}\" *ngIf=\"block.btnOption==4\"\n          class=\"navbar navbar-expand-md navbar-dark {{block.blockclass}} {{block.fixedTop?'fixed-top':''}} navbar-custom-style\">\n          <div class=\"navbar-collapse collapse show\" id=\"dropdown-{{settings.id}}\">\n            <ul class=\"navbar-nav\">\n              <li class=\"nav-item\">\n                <a class=\"nav-link\" aria-haspopup=\"true\" aria-expanded=\"false\" (click)=\"navigateToCulture()\">\n                  <span>{{block.btnLabel}}</span>\n                </a>\n              </li>\n            </ul>\n          </div>\n        </nav>\n      </div>\n\n    </div>\n\n    <div *ngIf=\"block.element&&block.element.type=='featured-box'\" class=\"container\">\n      <div class=\"bottom-gd fea {{block.align_box_text}}\">\n        <span class=\"{{block.icon}}\" aria-hidden=\"true\"></span>\n        <p class=\"px-lg-3\" [innerHTML]=\"block.box_desc|sanitizeHtml\"></p>\n      </div>\n    </div>\n    <div *ngIf=\"block.element&&block.element.type=='Actions'\">\n\n    </div>\n    <div *ngIf=\"block.element&&block.element.type=='Search'\">\n      <div class=\"input-group\">\n        <input type=\"text\" class=\"form-control\" placeholder=\"Search...\" [(ngModel)]=\"searchText\">\n        <!-- <div class=\"input-group-append\">\n          <button class=\"btn btn-secondary\" type=\"button\" (click)=\"Search(searchText)\">\n            <i class=\"fa fa-search\"></i>\n          </button>\n        </div> -->\n      </div>\n    </div>\n  </div>\n</div>\n\n\n<button *ngIf=\"settings.topScroll\" onclick=\"topFunction()\" id=\"scrollTopBtn\" title=\"Go to top\">\n  <i class=\"{{settings.icon}} fa-lg btn\"></i>\n</button>",
                        styles: ["#sidebar-wrapper{min-height:100vh;transition:margin .25s ease-out}#sidebar-wrapper .sidebar-heading{padding:.875rem 1.25rem;font-size:1.2rem}#wrapper.toggled #sidebar-wrapper{margin-left:0}#wrapper{z-index:999;position:absolute;width:100%}.video{position:absolute;top:0;left:0;width:100%;height:100%;-o-object-fit:cover;object-fit:cover;-o-object-position:center;object-position:center}.dropdown-submenu{position:relative;width:100%;cursor:pointer}.dropdown-submenu>a:after{transform:rotate(0);float:right;top:11px;position:relative;transition:.2s}.dropdown-submenu>a.opend:after{transform:rotate(-90deg)}.dropdown-submenu>a.opend-left:after{transform:rotate(90deg)}.dropdown-submenu>.dropdown-menu{top:0;left:100%;margin-top:0;margin-left:0}.dropdown-submenu>.dropdown-menu.show.left{left:-100%}.dropdown-submenu>.dropdown-menu.show.left .show{left:-100%!important}.list-group-item{background-color:transparent}.nav-item{cursor:pointer}.bottom-gd{transition:2s;-webkit-transition:2s;-moz-transition:2s;-ms-transition:2s all;-o-transition:2s}.dropdown-item:focus,.dropdown-item:hover{background-color:transparent!important}.abs-center-x{position:absolute;left:50%;transform:translateX(-50%)}::ng-deep .popover-body{padding:0}::ng-deep .popover{max-width:374px}.modal-header{background:linear-gradient(90deg,rgba(67,91,189,1) 0,rgba(46,69,173,1) 100%);color:#fff;height:60px}.modal-footer{display:inherit}.btn.btn-pill{border-radius:2rem}"]
                    }] }
        ];
        /** @nocollapse */
        HeaderComponent.ctorParameters = function () { return [
            { type: router.Router },
            { type: services.EssentialService },
            { type: services.MenuService },
            { type: router.ActivatedRoute }
        ]; };
        HeaderComponent.propDecorators = {
            settings: [{ type: core.Input }],
            blocks: [{ type: core.Input }],
            data: [{ type: core.Input }],
            selectedBlock: [{ type: core.Input }]
        };
        return HeaderComponent;
    }());
    if (false) {
        /** @type {?} */
        HeaderComponent.prototype.settings;
        /** @type {?} */
        HeaderComponent.prototype.blocks;
        /** @type {?} */
        HeaderComponent.prototype.data;
        /** @type {?} */
        HeaderComponent.prototype.selectedBlock;
        /** @type {?} */
        HeaderComponent.prototype.allPages;
        /** @type {?} */
        HeaderComponent.prototype.height;
        /** @type {?} */
        HeaderComponent.prototype.userInfoSubscription;
        /** @type {?} */
        HeaderComponent.prototype.menus;
        /** @type {?} */
        HeaderComponent.prototype.searchText;
        /** @type {?} */
        HeaderComponent.prototype.site;
        /** @type {?} */
        HeaderComponent.prototype.user;
        /** @type {?} */
        HeaderComponent.prototype.title;
        /** @type {?} */
        HeaderComponent.prototype.menuContentTheme;
        /**
         * @type {?}
         * @private
         */
        HeaderComponent.prototype.router;
        /**
         * @type {?}
         * @private
         */
        HeaderComponent.prototype.essentialsService;
        /** @type {?} */
        HeaderComponent.prototype.menuService;
        /**
         * @type {?}
         * @private
         */
        HeaderComponent.prototype.route;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var HeaderModule = /** @class */ (function () {
        function HeaderModule() {
        }
        HeaderModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [HeaderComponent, ChildsMenusComponent],
                        exports: [HeaderComponent, ChildsMenusComponent],
                        entryComponents: [HeaderComponent, ChildsMenusComponent],
                        schemas: [core.CUSTOM_ELEMENTS_SCHEMA],
                        imports: [
                            common.CommonModule,
                            http.HttpClientModule,
                            sharedModule.SharedModule,
                            router.RouterModule.forChild([]),
                            forms.FormsModule,
                            material.MatTooltipModule,
                            popover.PopoverModule
                        ],
                        providers: [],
                    },] }
        ];
        return HeaderModule;
    }());

    exports.ChildsMenusComponent = ChildsMenusComponent;
    exports.HeaderComponent = HeaderComponent;
    exports.HeaderModule = HeaderModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=header.umd.js.map
