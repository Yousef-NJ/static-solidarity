(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@angular/router'), require('@angular/common/http'), require('@shared/src/lib/shared-module')) :
    typeof define === 'function' && define.amd ? define('common/src/lib/components/image', ['exports', '@angular/core', '@angular/common', '@angular/router', '@angular/common/http', '@shared/src/lib/shared-module'], factory) :
    (global = global || self, factory(global.image = {}, global.ng.core, global.ng.common, global.ng.router, global.ng.common.http, global.sharedModule));
}(this, (function (exports, core, common, router, http, sharedModule) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ImageComponent = /** @class */ (function () {
        function ImageComponent() {
        }
        /**
         * @return {?}
         */
        ImageComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () { };
        /**
         * @return {?}
         */
        ImageComponent.prototype.ngAfterViewInit = /**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var id = this.settings.id;
            if (this.settings.cover) {
                this.height = $(".img-section-" + id).height($(window).innerHeight());
                $(".img-section-" + id).height($(window).innerHeight() - $("nav:first-child").innerHeight());
            }
        };
        /**
         * @param {?} el
         * @return {?}
         */
        ImageComponent.prototype.navigateToSection = /**
         * @param {?} el
         * @return {?}
         */
        function (el) {
            /** @type {?} */
            var elmnt = document.getElementById(el);
            elmnt.scrollIntoView();
        };
        ImageComponent.decorators = [
            { type: core.Component, args: [{
                        selector: "app-image",
                        template: "<div *ngIf=\"!settings.cover\" class=\" img-section-{{settings.id}} {{settings.textAlign}}\"  >\n\n    <a *ngIf=\"settings.navLinkRedirect=='url'\" [href]=\"settings.imageUrl\">\n        <figure class=\"{{settings.imageHover2}} \">\n            <img *ngIf=\"settings.imgsrc\" alt=\"{{settings.imgsrc}}\"   [style.height]=\"settings.Height ? settings.Height+'px':'100%'\"\n            [style.width]=\"settings.Width ? settings.Width+'px':'100%'\"\n                class=\"img-responsive wow {{settings.imgAnimate}} {{settings.imageBorderd ? 'img-thumbnail':''}}\"\n                src=\"{{settings.imgsrc}}\">\n            <img *ngIf=\"!settings.imgsrc\" alt=\"no img src\"\n                class=\"img-responsive wow {{settings.imgAnimate}} {{settings.imageBorderd ? 'img-thumbnail':''}}\"\n                src=\"./assets/img/Gallery.png\" [style.width.px]=\"settings.imageWidth\">\n\n            <figcaption>\n                <div [innerHtml]=\"settings.imgDescription|sanitizeHtml\"></div>\n            </figcaption>\n        </figure>\n    </a>\n    <a *ngIf=\"settings.navLinkRedirect=='page'\" [routerLink]=\"'/'+settings.imageRoute\">\n        <figure class=\"{{settings.imageHover2}} \">\n            <img *ngIf=\"settings.imgsrc\" alt=\"{{settings.imgsrc}}\"  [style.height]=\"settings.Height ? settings.Height+'px':'100%'\"\n            [style.width]=\"settings.Width ? settings.Width+'px':'100%'\"\n                class=\"img-responsive wow {{settings.imgAnimate}} {{settings.imageBorderd ? 'img-thumbnail':''}}\"\n                src=\"{{settings.imgsrc}}\">\n            <img *ngIf=\"!settings.imgsrc\" alt=\"no img src\"\n                class=\"img-responsive wow {{settings.imgAnimate}} {{settings.imageBorderd ? 'img-thumbnail':''}}\"\n                src=\"./assets/img/Gallery.png\">\n\n            <figcaption>\n                <div [innerHtml]=\"settings.imgDescription|sanitizeHtml\"></div>\n            </figcaption>\n        </figure>\n    </a>\n    <a *ngIf=\"settings.navLinkRedirect=='none'\" [ngClass]=\"{'isDisabled':!settings.imageUrl&& !settings.imageRoute}\">\n        <figure class=\"{{settings.imageHover2}} \">\n            <img *ngIf=\"settings.imgsrc\" alt=\"{{settings.imgsrc}}\"  [style.height]=\"settings.Height ? settings.Height+'px':'100%'\"\n            [style.width]=\"settings.Width ? settings.Width+'px':'100%'\"\n                class=\"img-responsive wow {{settings.imgAnimate}} {{settings.imageBorderd ? 'img-thumbnail':''}}\"\n                src=\"{{settings.imgsrc}}\">\n            <img *ngIf=\"!settings.imgsrc\" alt=\"no img src\"\n                class=\"img-responsive wow {{settings.imgAnimate}} {{settings.imageBorderd ? 'img-thumbnail':''}}\"\n                src=\"./assets/img/Gallery.png\">\n\n            <figcaption>\n                <div [innerHtml]=\"settings.imgDescription|sanitizeHtml\"></div>\n            </figcaption>\n        </figure>\n    </a>\n\n</div>\n<div class=\"{{settings.cssClass}} img-section-{{settings.id}} {{settings.textAlign}}\" *ngIf=\"settings.cover\"\n    [style.height.px]=\"height\" [style.background]=\"'url('+settings.imgsrc+')'\" [style.width.%]=\"'100'\"\n    [style.background-size]=\"'cover'\">\n    <div style=\"\n    margin: 0;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    -ms-transform: translate(-50%, -50%);\n    transform: translate(-50%, -50%);\" [innerHtml]=\"settings.textImage|sanitizeHtml\">\n    </div>\n\n    <div class=\"mbr-arrow mbr-arrow-floating\" aria-hidden=\"true\" *ngIf=\"settings.arrowDown && settings.cover\">\n        <a [attr.fragment]=\"settings.divId\" (click)=\"navigateToSection(settings.divId)\">\n            <i class=\"fas fa-arrow-down\"></i>\n        </a>\n    </div>\n</div>\n",
                        styles: [".mbr-arrow{bottom:48px;left:0;position:absolute;text-align:center;width:100%}.mbr-arrow a{background:rgba(0,0,0,.2);border-radius:3px;color:#fff;display:inline-block;height:46px;outline-style:none!important;position:relative;text-decoration:none;-webkit-transition:.3s ease-in-out;transition:.3s ease-in-out;width:46px}"]
                    }] }
        ];
        /** @nocollapse */
        ImageComponent.ctorParameters = function () { return []; };
        ImageComponent.propDecorators = {
            settings: [{ type: core.Input }]
        };
        return ImageComponent;
    }());
    if (false) {
        /** @type {?} */
        ImageComponent.prototype.settings;
        /** @type {?} */
        ImageComponent.prototype.height;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ImageModule = /** @class */ (function () {
        function ImageModule() {
        }
        ImageModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [ImageComponent],
                        exports: [ImageComponent],
                        entryComponents: [ImageComponent],
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
        return ImageModule;
    }());

    exports.ImageComponent = ImageComponent;
    exports.ImageModule = ImageModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=image.umd.js.map
