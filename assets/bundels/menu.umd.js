(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/router'), require('@shared/src/lib/services'), require('@angular/common'), require('@angular/common/http'), require('@angular/material'), require('@angular/platform-browser/animations'), require('@shared/src/lib/shared-module')) :
    typeof define === 'function' && define.amd ? define('common/src/lib/components/menu', ['exports', '@angular/core', '@angular/router', '@shared/src/lib/services', '@angular/common', '@angular/common/http', '@angular/material', '@angular/platform-browser/animations', '@shared/src/lib/shared-module'], factory) :
    (global = global || self, factory(global.menu = {}, global.ng.core, global.ng.router, global.services, global.ng.common, global.ng.common.http, global.ng.material, global.ng.platformBrowser.animations, global.sharedModule));
}(this, (function (exports, core, router, services, common, http, material, animations, sharedModule) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var MenuComponent = /** @class */ (function () {
        function MenuComponent(router, menuService, route) {
            this.router = router;
            this.menuService = menuService;
            this.route = route;
            this.menuSiblings = [];
            this.allPages = [];
            this.parenMenu = {};
            this.menuContentTheme = 'all';
            this.flatMenu = [];
            this.menus = [];
            this.activeClass = false;
        }
        /**
         * @return {?}
         */
        MenuComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            var _this = this;
            if (this.data.authService && this.data.authService.isLoggedIn()) {
                this.user = this.data.authService.getLoggedUser();
            }
            this.settings.nav_background_color = this.settings.nav_background_color && this.settings.nav_background_color.charAt(0) === '#' ? this.settings.nav_background_color : this.getThemeColor(this.settings.nav_background_color);
            this.settings.nav_text_color = this.settings.nav_text_color && this.settings.nav_text_color.charAt(0) === '#' ? this.settings.nav_text_color : this.getThemeColor(this.settings.nav_text_color);
            this.settings.child_background_color = this.settings.child_background_color && this.settings.child_background_color.charAt(0) === '#' ? this.settings.child_background_color : this.getThemeColor(this.settings.child_background_color);
            this.settings.child_text_color = this.settings.child_text_color && this.settings.child_text_color.charAt(0) === '#' ? this.settings.child_text_color : this.getThemeColor(this.settings.child_text_color);
            this.menuContentTheme = this.settings.menuContentTheme || 'all';
            /** @type {?} */
            var allParams = Object.values(this.route.snapshot.paramMap["params"]);
            /** @type {?} */
            var slug;
            if (allParams.length == 0) {
                slug = "";
            }
            else {
                slug = allParams[allParams.length - 1].toString();
            }
            this.menuService.getMenu(this.settings.selectedCategory, this.data, slug);
            this.data.route.paramMap.subscribe((/**
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
        };
        /**
         * @param {?} menu
         * @return {?}
         */
        MenuComponent.prototype.goToPage = /**
         * @param {?} menu
         * @return {?}
         */
        function (menu) {
            this.menuService.navigateTo(this.data.moduleService.site.HostName + '/' + menu.slug, menu.url);
        };
        /**
         * @param {?} color
         * @return {?}
         */
        MenuComponent.prototype.getThemeColor = /**
         * @param {?} color
         * @return {?}
         */
        function (color) {
            if (this.data && this.data.moduleService && this.data.moduleService.theme && this.data.moduleService.theme.colors) {
                return this.data.moduleService.theme.colors[color];
            }
            else {
                return 'initial';
            }
        };
        /**
         * @return {?}
         */
        MenuComponent.prototype.navigateToCulture = /**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var link = ''
            //Customer portal
            ;
            //Customer portal
            /** @type {?} */
            var cpProductOutput = localStorage.getItem('cpProductOutput');
            if (this.data.moduleService.pageSettings.slugType == 1)
                link = this.getCultureLinkedPage(this.data.moduleService.pageSettings.id, this.settings.Culture);
            else
                link = this.getCultureLinkedBlog(this.data.moduleService.pageSettings.id, this.settings.Culture);
            if (link != '/' && this.data.moduleService.site.css) {
                /** @type {?} */
                var oldCulture = this.data.moduleService.site.culture;
                this.data.moduleService.site.culture = this.settings.Culture;
                this.setsiteCss(this.settings.Culture, oldCulture, link);
            }
            else {
                this.router.navigate([link]);
            }
            if (cpProductOutput) {
                cpProductOutput = JSON.parse(cpProductOutput);
                link = link + ("/productpreview?step=" + cpProductOutput.step + "&userPropertiesId=" + cpProductOutput.userPropertiesId);
                localStorage.removeItem('cpProductOutput'); //cpProductOutput
                this.router.navigate([link]);
            }
        };
        /**
         * @param {?} id
         * @param {?} culture
         * @return {?}
         */
        MenuComponent.prototype.getCultureLinkedPage = /**
         * @param {?} id
         * @param {?} culture
         * @return {?}
         */
        function (id, culture) {
            /** @type {?} */
            var currentPage = this.data.dataChashingService.pages[id];
            if (currentPage.addtionalMetaTags && currentPage.addtionalMetaTags != null) {
                /** @type {?} */
                var temp = JSON.parse(currentPage.addtionalMetaTags);
                for (var i = 0; i < temp.length; i++) {
                    /** @type {?} */
                    var element = temp[i];
                    if (element.property == culture) {
                        // localStorage.setItem('culturePrefix',this.settings.prefix)
                        return this.setNewRoute(!!this.settings.prefix &&
                            this.settings.prefix !== " " ? this.settings.prefix : '', element.content);
                    }
                }
            }
            return this.setNewRoute(!!this.settings.prefix &&
                this.settings.prefix !== " " ? this.settings.prefix : '', '');
        };
        /**
         * @param {?} id
         * @param {?} culture
         * @return {?}
         */
        MenuComponent.prototype.getCultureLinkedBlog = /**
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
                        localStorage.setItem('culturePrefix', this.settings.prefix);
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
        MenuComponent.prototype.setNewRoute = /**
         * @param {?} prefix
         * @param {?} newRoute
         * @return {?}
         */
        function (prefix, newRoute) {
            // this.router.config = [];
            this.data.moduleService.site.HostName = prefix.replace("/", '');
            // this.data.moduleService.writeRoute(prefix);
            return '/' + prefix + newRoute;
        };
        /**
         * @param {?} Culture
         * @param {?} oldCulture
         * @param {?} link
         * @return {?}
         */
        MenuComponent.prototype.setsiteCss = /**
         * @param {?} Culture
         * @param {?} oldCulture
         * @param {?} link
         * @return {?}
         */
        function (Culture, oldCulture, link) {
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
                    if (element.id.indexOf(oldCulture + '-style') !== -1) {
                        head.removeChild(element);
                        index = index - 1;
                    }
                }
                /** @type {?} */
                var timeOut = window['config'].refreshTimeOut || 0;
                /** @type {?} */
                var culture_css_1 = document.createElement('style');
                culture_css_1.type = 'text/css';
                culture_css_1.id = Culture + '-style';
                culture_css_1.appendChild(document.createTextNode(css[this.settings.Culture]));
                setTimeout((/**
                 * @return {?}
                 */
                function () {
                    head.appendChild(culture_css_1);
                }), timeOut);
                this.router.navigate([link]);
            }
        };
        MenuComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'app-menu',
                        template: "<nav id=\"nav-{{settings.id}}\" [hidden]=\"settings.RequireLogin&&!user\"\n  class=\"navbar navbar-expand-md navbar-light {{settings.cssClass}}  {{settings.fixedTop?'fixed-top':''}}\">\n\n  <a class=\"navbar-brand\" *ngIf=\"settings.navLogoOptions=='text'&&settings.navLinkRedirect=='none'\"\n    [innerHTML]=\"settings.navText|sanitizeHtml\">\n  </a>\n\n  <a *ngIf=\"settings.navLogoOptions=='text'&&settings.navLinkRedirect=='url'\" [href]=\"settings.nav_logo_url\"\n    [innerHTML]=\"settings.navText|sanitizeHtml\" class=\"navbar-brand\">\n  </a>\n\n  <a *ngIf=\"settings.navLogoOptions=='text'&&settings.navLinkRedirect=='page'\"\n    [routerLink]=\"['/'+settings.nav_logo_page]\" [innerHTML]=\"settings.navText|sanitizeHtml\" class=\"navbar-brand\">\n  </a>\n\n  <a *ngIf=\"settings.navLogoOptions=='text'&&settings.navLinkRedirect=='samePage'\"\n    [attr.fragment]=\"settings.nav_logo_divId\" (click)=\"menuService.navigateToSection(settings.nav_logo_divId)\"\n    [innerHTML]=\"settings.navText|sanitizeHtml\" class=\"navbar-brand\">\n  </a>\n\n  <!-- logo -->\n  <a class=\"navbar-brand\" *ngIf=\"settings.navLogoOptions=='logo'&&settings.navLinkRedirect=='none'\">\n    <img [src]=\"settings.navLogoSrc\" [width]=\"settings.navLogoWidth\" [height]=\"settings.navLogoHeight\">\n  </a>\n\n  <a *ngIf=\"settings.navLogoOptions=='logo'&&settings.navLinkRedirect=='url'\" [href]=\"settings.nav_logo_url\"\n    class=\"navbar-brand\">\n    <img [src]=\"settings.navLogoSrc\" [width]=\"settings.navLogoWidth\" [height]=\"settings.navLogoHeight\">\n  </a>\n\n  <a *ngIf=\"settings.navLogoOptions=='logo'&&settings.navLinkRedirect=='page'\"\n  (click)=\"menuService.navigateTo(data.moduleService.site.HostName+'/'+settings.nav_logo_page,null)\"\n    class=\"navbar-brand\">\n    <img [src]=\"settings.navLogoSrc\" [width]=\"settings.navLogoWidth\" [height]=\"settings.navLogoHeight\">\n  </a>\n\n  <a *ngIf=\"settings.navLogoOptions=='logo'&&settings.navLinkRedirect=='samePage'\"\n    [attr.fragment]=\"settings.nav_logo_divId\" (click)=\"menuService.navigateToSection(settings.nav_logo_divId)\"\n    class=\"navbar-brand\">\n    <img [src]=\"settings.navLogoSrc\" [width]=\"settings.navLogoWidth\" [height]=\"settings.navLogoHeight\">\n  </a>\n\n  <button class=\"navbar-toggler\" type=\"button\" *ngIf=\"settings.noToggle\" data-toggle=\"collapse\"\n    [attr.data-target]=\"'#dropdown-'+settings.id\">\n    <i class=\"fa fa-bars fa-lg py-1 text-white\"></i>\n  </button>\n\n  <div class=\"navbar-collapse collapse{{settings.noToggle?'':' show'}}\" id=\"dropdown-{{settings.id}}\">\n    <ul class=\"navbar-nav {{settings.linksPosition=='right'?'ml-auto':''}}\">\n      <li *ngFor=\"let menu of menuService.getRootMenu(settings.selectedCategory); let i = index\" id=\"nav-item-{{i}}\"\n        class=\"nav-item\" routerLinkActive=\"active\" routerLinkActiveOptions=\"{exact : true}\"\n        [class.dropdown]=\"menu.childs&&menu.childs.length\"\n        [class.active]=\"menuService.menuData[settings.selectedCategory].activeLinkParents.includes(menu.id)\">\n\n        <a *ngIf=\"menu.type == 1\" [href]=\"menu.url\"\n          target=\"{{menu.url.includes('.pdf')||menu.url.includes('http')?'_blank':'_self'}}\" class=\"nav-link  \"\n          aria-haspopup=\"true\" aria-expanded=\"false\" matTooltip=\"{{settings.tooltipmenu?menu.name:''}}\">\n          <i class=\"fa fa-{{menu.icon}}\"></i> <span>{{menu.name}}</span>\n        </a>\n\n        <a *ngIf=\"menu.type ==2\"\n          (click)=\"goToPage(menu)\" class=\"nav-link\"\n          aria-haspopup=\"true\" aria-expanded=\"false\" matTooltip=\"{{settings.tooltipmenu?menu.name:''}}\">\n          <i class=\"fa fa-{{menu.icon}}\"></i><span>{{menu.name}}</span>\n        </a>\n\n        <a *ngIf=\"menu.type == 4\" [routerLink]=\"['/'+ menu.slug]\" class=\"nav-link \" aria-haspopup=\"true\"\n          aria-expanded=\"false\" matTooltip=\"{{settings.tooltipmenu?menu.name:''}}\">\n          <i class=\"fa fa-{{menu.icon}}\"></i> <span>{{menu.name}}</span>\n        </a>\n\n        <a *ngIf=\"menu.type ==5\" href=\"javascript:;\"\n          class=\"nav-link {{menu.childs&&menu.childs.length ?'dropdown-toggle' : ''}}  \" data-toggle=\"dropdown\"\n          aria-haspopup=\"true\" aria-expanded=\"false\" matTooltip=\"{{settings.tooltipmenu?menu.name:''}}\">\n          <i class=\"fa fa-{{menu.icon}}\"></i> <span>{{menu.name}}</span>\n        </a>\n\n        <a *ngIf=\"menu.type == 6\" [routerLink]=\"['/'+ menu.slug]\" class=\"nav-link  \" aria-haspopup=\"true\"\n          aria-expanded=\"false\" matTooltip=\"{{settings.tooltipmenu?menu.name:''}}\">\n          <i class=\"fa fa-{{menu.icon}}\"></i> <span>{{menu.name}}</span>\n        </a>\n\n        <ul *ngIf=\"menuService.isHaveChildren(settings.selectedCategory, menu.id)\" aria-labelledby=\"dropdownMenu1\"\n          class=\"dropdown-menu menu-{{settings.id}}\" aria-labelledby=\"dropdownMenu1\">\n\n\n          <lib-child-menu class=\"childs-menu {{settings.linksPosition=='right'?'text-right':''}}\" [parentId]=\"menu.id\"\n            [settings]=\"settings\" [data]=\"data\"></lib-child-menu>\n\n        </ul>\n      </li>\n\n      <li class=\"nav-item\" id=\"nav-item-lang\" *ngIf=\"settings.langConverter\">\n        <a class=\"nav-link\" aria-haspopup=\"true\" aria-expanded=\"false\" (click)=\"navigateToCulture()\">\n          <span>{{settings.langButtonLabel}}</span>\n        </a>\n      </li>\n    </ul>\n  </div>\n</nav>",
                        styles: [".dropdown-submenu{position:relative;width:100%;cursor:pointer}.dropdown-submenu>a:after{transform:rotate(0);float:right;top:11px;position:relative;transition:.2s}.dropdown-submenu>a.opend:after{transform:rotate(-90deg)}.dropdown-submenu>a.opend-left:after{transform:rotate(90deg)}.dropdown-submenu>.dropdown-menu{top:0;left:100%;margin-top:0;margin-left:0}.dropdown-submenu>.dropdown-menu.show.left{left:-100%}.dropdown-submenu>.dropdown-menu.show.left .show{left:-100%!important}.list-group-item{background-color:transparent}.nav-item{cursor:pointer}.dropdown-item:focus,.dropdown-item:hover{background-color:transparent!important}.dropdown-item{padding:.25rem .5rem!important}"]
                    }] }
        ];
        /** @nocollapse */
        MenuComponent.ctorParameters = function () { return [
            { type: router.Router },
            { type: services.MenuService },
            { type: router.ActivatedRoute }
        ]; };
        MenuComponent.propDecorators = {
            settings: [{ type: core.Input }],
            data: [{ type: core.Input }]
        };
        return MenuComponent;
    }());
    if (false) {
        /** @type {?} */
        MenuComponent.prototype.settings;
        /** @type {?} */
        MenuComponent.prototype.data;
        /** @type {?} */
        MenuComponent.prototype.menuSiblings;
        /** @type {?} */
        MenuComponent.prototype.allPages;
        /** @type {?} */
        MenuComponent.prototype.parenMenu;
        /** @type {?} */
        MenuComponent.prototype.menuContentTheme;
        /** @type {?} */
        MenuComponent.prototype.activeMenu;
        /** @type {?} */
        MenuComponent.prototype.flatMenu;
        /** @type {?} */
        MenuComponent.prototype.searchText;
        /** @type {?} */
        MenuComponent.prototype.menus;
        /** @type {?} */
        MenuComponent.prototype.site;
        /** @type {?} */
        MenuComponent.prototype.user;
        /** @type {?} */
        MenuComponent.prototype.activeClass;
        /**
         * @type {?}
         * @private
         */
        MenuComponent.prototype.router;
        /** @type {?} */
        MenuComponent.prototype.menuService;
        /**
         * @type {?}
         * @private
         */
        MenuComponent.prototype.route;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ChildMenuComponent = /** @class */ (function () {
        function ChildMenuComponent(menuService, router, route) {
            this.menuService = menuService;
            this.router = router;
            this.route = route;
        }
        /**
         * @return {?}
         */
        ChildMenuComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
        };
        /**
         * @param {?} slug
         * @param {?} el
         * @return {?}
         */
        ChildMenuComponent.prototype.navigateTo = /**
         * @param {?} slug
         * @param {?} el
         * @return {?}
         */
        function (slug, el) {
            localStorage.removeItem('cpProductOutput');
            if (!el) {
                this.router.navigate([this.data.moduleService.site.HostName + '/' + slug]);
            }
            if (el && slug) {
                this.router.navigate([this.data.moduleService.site.HostName + '/' + slug]);
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
        ChildMenuComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'lib-child-menu',
                        template: "<!-- 'active': menuService.menuData[settings.selectedCategory].activeLinkId === menu.id, -->\n<li *ngFor=\"let menu of menuService.getActiveLinkChildren(settings.selectedCategory, parentId);let i=index\"\n    [ngClass]=\"{\n      'dropdown-submenu': menu.childs && menu.childs.length,\n      'active': menuService.menuData[settings.selectedCategory].activeLinkParents.includes(menu.id)\n    }\"\n    class=\"child-item-{{i}}\">\n\n        <a *ngIf=\"menu.type == 1\" [href]=\"menu.url\" target=\"{{menu.url.includes('.pdf')||menu.url.includes('http')?'_blank':'_self'}}\"\n          class=\"dropdown-item\" [style.color]=\"settings.child_text_color\" aria-haspopup=\"true\" aria-expanded=\"false\"\n          matTooltip=\"{{settings.tooltipmenu?menu.name:''}}\">\n          <i class=\"fa fa-{{menu.icon}}\"></i> <span>{{menu.name}}</span>\n        </a>\n\n        <a *ngIf=\"menu.type == 2\" (click)=\"navigateTo(menu.slug,menu.url)\" class=\"dropdown-item\" [style.color]=\"settings.child_text_color\"\n          aria-haspopup=\"true\" aria-expanded=\"false\" matTooltip=\"{{settings.tooltipmenu?menu.name:''}}\">\n          <i class=\"fa fa-{{menu.icon}}\"></i> <span>{{menu.name}}</span>\n        </a>\n      <!-- <ng-container *ngSwitchCase=\"3\"></ng-container> -->\n\n        <a *ngIf=\"menu.type == 4\" [routerLink]=\"['/' + menu.slug]\" class=\"dropdown-item\" [style.color]=\"settings.child_text_color\"\n          aria-haspopup=\"true\" aria-expanded=\"false\" matTooltip=\"{{settings.tooltipmenu?menu.name:''}}\">\n          <i class=\"fa fa-{{menu.icon}}\"></i> <span>{{menu.name}}</span>\n        </a>\n\n        <a *ngIf=\"menu.type == 5\" [ngClass]=\"{ 'dropdown-toggle': menu.childs && menu.childs.length }\" class=\"dropdown-item\"\n          [style.color]=\"settings.child_text_color\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\"\n          matTooltip=\"{{settings.tooltipmenu?menu.name:''}}\">\n          <i class=\"fa fa-{{menu.icon}}\"></i> <span>{{menu.name}}</span>\n        </a>\n\n        <a *ngIf=\"menu.type == 6\" [routerLink]=\"['/' + menu.slug]\"\n          [ngClass]=\"{'font-weight-bold': settings.bold, 'font-italic': settings.italic}\"\n          class=\"nav-link {{settings.hoverStyle}} dropdown-item\" [style.color]=\"settings.child_text_color\"\n          aria-haspopup=\"true\" aria-expanded=\"false\" matTooltip=\"{{settings.tooltipmenu?menu.name:''}}\">\n          <i class=\"fa fa-{{menu.icon}}\"></i> <span>{{menu.name}}</span>\n        </a>\n\n      <ul *ngIf=\"menu.childs.length\" [style.background]=\"settings.child_background_color\" class=\"dropdown-menu menu-{{settings.id}}\"\n        style=\"width: max-content;\">\n\n        <lib-child-menu class=\"childs-menu {{settings.linksPosition=='right'?'text-right':''}}\"\n                              [parentId]=\"menu.id\"\n                              [settings]=\"settings\"\n                              [data]=\"data\"\n                             \n                              ></lib-child-menu>\n\n      </ul>\n\n\n  </li>\n",
                        styles: [""]
                    }] }
        ];
        /** @nocollapse */
        ChildMenuComponent.ctorParameters = function () { return [
            { type: services.MenuService },
            { type: router.Router },
            { type: router.ActivatedRoute }
        ]; };
        ChildMenuComponent.propDecorators = {
            parentId: [{ type: core.Input }],
            settings: [{ type: core.Input }],
            data: [{ type: core.Input }]
        };
        return ChildMenuComponent;
    }());
    if (false) {
        /** @type {?} */
        ChildMenuComponent.prototype.parentId;
        /** @type {?} */
        ChildMenuComponent.prototype.settings;
        /** @type {?} */
        ChildMenuComponent.prototype.data;
        /** @type {?} */
        ChildMenuComponent.prototype.menuService;
        /**
         * @type {?}
         * @private
         */
        ChildMenuComponent.prototype.router;
        /**
         * @type {?}
         * @private
         */
        ChildMenuComponent.prototype.route;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var MenuModule = /** @class */ (function () {
        function MenuModule() {
        }
        MenuModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [MenuComponent, ChildMenuComponent],
                        exports: [MenuComponent, ChildMenuComponent],
                        entryComponents: [MenuComponent, ChildMenuComponent],
                        schemas: [core.CUSTOM_ELEMENTS_SCHEMA],
                        imports: [
                            common.CommonModule,
                            http.HttpClientModule,
                            animations.BrowserAnimationsModule,
                            sharedModule.SharedModule,
                            router.RouterModule.forChild([]),
                            material.MatTooltipModule
                        ],
                        providers: [],
                    },] }
        ];
        return MenuModule;
    }());

    exports.MenuComponent = MenuComponent;
    exports.MenuModule = MenuModule;
    exports.ɵa = ChildMenuComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=menu.umd.js.map
