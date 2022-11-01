(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@angular/router'), require('@angular/common/http'), require('@shared/src/lib/shared-module')) :
    typeof define === 'function' && define.amd ? define('common/src/lib/components/paragraph', ['exports', '@angular/core', '@angular/common', '@angular/router', '@angular/common/http', '@shared/src/lib/shared-module'], factory) :
    (global = global || self, factory(global.paragraph = {}, global.ng.core, global.ng.common, global.ng.router, global.ng.common.http, global.sharedModule));
}(this, (function (exports, core, common, router, http, sharedModule) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ParagraphComponent = /** @class */ (function () {
        function ParagraphComponent() {
        }
        /**
         * @return {?}
         */
        ParagraphComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            var _this = this;
            if (this.data.moduleService.site.HostName &&
                this.data.moduleService.site.HostName != "") {
                /** @type {?} */
                var replaceWith = 'href="/' +
                    decodeURIComponent(this.data.moduleService.site.HostName) +
                    "/";
                if (this.settings.paragraph && this.settings.paragraph.includes("href")) {
                    this.settings.paragraph = this.settings.paragraph
                        .split('href="/')
                        .join(replaceWith);
                }
            }
            setTimeout((/**
             * @return {?}
             */
            function () {
                _this.setBordersAndShadow();
            }), 500);
            this.settings.background_color =
                this.settings.background_color &&
                    this.settings.background_color.charAt(0) === "#"
                    ? this.settings.background_color
                    : this.getThemeColor(this.settings.background_color);
        };
        /**
         * @param {?} color
         * @return {?}
         */
        ParagraphComponent.prototype.getThemeColor = /**
         * @param {?} color
         * @return {?}
         */
        function (color) {
            if (this.data.moduleService &&
                this.data.moduleService.theme &&
                this.data.moduleService.theme.colors) {
                return this.data.moduleService.theme.colors[color];
            }
            else {
                return "initial";
            }
        };
        /**
         * @return {?}
         */
        ParagraphComponent.prototype.setBordersAndShadow = /**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var settings = this.settings;
            /** @type {?} */
            var submenu = $("#submenu-" + settings.id);
            if (this.settings.borderAll) {
                submenu.css("border", this.settings.bordersize +
                    "px " +
                    this.settings.borderType +
                    " " +
                    this.settings.bordercolor);
            }
            else {
                if (this.settings.borderTop) {
                    submenu.css("border-top", this.settings.borderTop +
                        "px " +
                        this.settings.borderType +
                        " " +
                        this.settings.bordercolor);
                }
                if (this.settings.borderTop) {
                    submenu.css("border-bottom", this.settings.borderBottom +
                        "px " +
                        this.settings.borderType +
                        " " +
                        this.settings.bordercolor);
                }
                if (this.settings.borderTop) {
                    submenu.css("border-left", this.settings.borderLeft +
                        "px " +
                        this.settings.borderType +
                        " " +
                        this.settings.bordercolor);
                }
                if (this.settings.borderTop) {
                    submenu.css("border-right", this.settings.borderRight +
                        "px " +
                        this.settings.borderType +
                        " " +
                        this.settings.bordercolor);
                }
            }
            submenu.css("box-shadow", this.settings.hoffset +
                "px " +
                this.settings.voffset +
                "px " +
                this.settings.blur +
                "px " +
                this.settings.spread +
                "px " +
                this.settings.boxcolor);
        };
        ParagraphComponent.decorators = [
            { type: core.Component, args: [{
                        selector: "app-paragraph",
                        template: "<div id=\"{{settings.divId}}\" class=\" wow {{settings.imgAnimate}} \" *ngIf=\"settings.borderAll\"\n  class=\" animated {{settings.paragraphAnimate}}\"\n  [style.background-image]=\"settings.paragrapImage?'url(' + settings.paragrapImage + ')':''\"\n  [style.background-repeat]=\"settings.repeatImage\" [style.background-position]=\"settings.positionImage\"\n  [attr.data-wow-delay]=\"settings.delay+'s'\" [innerHTML]=\"settings.paragraph|sanitizeHtml\"></div>\n\n\n<div id=\"{{settings.divId}}\" class=\" wow {{settings.imgAnimate}} \" *ngIf=\"!settings.borderAll\"\n  class=\" animated {{settings.paragraphAnimate}} \"\n  [style.background-image]=\"settings.paragrapImage?'url(' + settings.paragrapImage + ')':''\"\n  [style.background-repeat]=\"settings.repeatImage\" [style.background-position]=\"settings.positionImage\"\n  [attr.data-wow-delay]=\"settings.delay+'s'\" [innerHTML]=\"settings.paragraph|sanitizeHtml\"></div>",
                        styles: [""]
                    }] }
        ];
        /** @nocollapse */
        ParagraphComponent.ctorParameters = function () { return []; };
        ParagraphComponent.propDecorators = {
            settings: [{ type: core.Input }],
            data: [{ type: core.Input }]
        };
        return ParagraphComponent;
    }());
    if (false) {
        /** @type {?} */
        ParagraphComponent.prototype.settings;
        /** @type {?} */
        ParagraphComponent.prototype.data;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ParagraphModule = /** @class */ (function () {
        function ParagraphModule() {
        }
        ParagraphModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [ParagraphComponent],
                        exports: [ParagraphComponent],
                        entryComponents: [ParagraphComponent],
                        schemas: [core.CUSTOM_ELEMENTS_SCHEMA],
                        imports: [
                            common.CommonModule,
                            http.HttpClientModule,
                            sharedModule.SharedModule,
                            router.RouterModule.forChild([]),
                        ],
                        providers: [],
                    },] }
        ];
        return ParagraphModule;
    }());

    exports.ParagraphComponent = ParagraphComponent;
    exports.ParagraphModule = ParagraphModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=paragraph.umd.js.map
