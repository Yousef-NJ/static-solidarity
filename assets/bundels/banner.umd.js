(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/platform-browser'), require('ngx-owl-carousel'), require('@shared/src/lib/services'), require('@angular/common'), require('@angular/router'), require('@angular/common/http'), require('@shared/src/lib/shared-module')) :
    typeof define === 'function' && define.amd ? define('common/src/lib/components/banner', ['exports', '@angular/core', '@angular/platform-browser', 'ngx-owl-carousel', '@shared/src/lib/services', '@angular/common', '@angular/router', '@angular/common/http', '@shared/src/lib/shared-module'], factory) :
    (global = global || self, factory(global.banner = {}, global.ng.core, global.ng.platformBrowser, global.ngxOwlCarousel, global.services, global.ng.common, global.ng.router, global.ng.common.http, global.sharedModule));
}(this, (function (exports, core, platformBrowser, ngxOwlCarousel, services, common, router, http, sharedModule) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var BannerComponent = /** @class */ (function () {
        function BannerComponent(sinitizer, essentialsService) {
            this.sinitizer = sinitizer;
            this.essentialsService = essentialsService;
            this.slideNumber = 2;
            this.checkImg = false;
            this.posts = [];
        }
        /**
         * @return {?}
         */
        BannerComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            this.slides = this.settings.ImagesLink || [];
            this.nav = this.settings.nav ? true : false;
            this.carouselOptions = {
                nav: this.nav,
                slideBy: this.settings.slideby,
                dots: this.settings.dots,
                mouseDrag: this.settings.mouseDrag,
                touchDrag: this.settings.touchDrag,
                autoplay: this.settings.autoPlay,
                autoplayHoverPause: this.settings.autoPlayHoverPause,
                loop: this.settings.loop,
                rtl: this.settings.rtl,
                autoplayTimeout: this.settings.interval,
                autoplaySpeed: this.settings.autoSpeed,
                margin: this.settings.margin,
                navContainer: this.settings.navContainer,
                dotsContainer: this.settings.dotsContainer,
                navText: [
                    "<div class='prev-slide'><i class='fas fa-angle-left fa-2x'></i></div>",
                    "<div class='next-slide'><i class='fas fa-angle-right fa-2x'></i></div>",
                ],
                responsiveClass: true,
                responsive: {
                    0: {
                        items: 1,
                    },
                    600: {
                        items: 1,
                    },
                    1000: {
                        items: +this.settings.itemsPerPage,
                    },
                    1500: {
                        items: +this.settings.itemsPerPage,
                    },
                },
            };
            this.site = this.data.moduleService.site;
            if (this.settings.dataFrom === "blog") {
                this.getPosts(this.settings.selectedCategories);
            }
        };
        /**
         * @return {?}
         */
        BannerComponent.prototype.ngAfterViewInit = /**
         * @return {?}
         */
        function () {
            if (this.settings.cover) {
                $(".banner-image img").height($(window).innerHeight());
            }
        };
        /**
         * @param {?} i
         * @return {?}
         */
        BannerComponent.prototype.goToSlide = /**
         * @param {?} i
         * @return {?}
         */
        function (i) {
            this.owlElement.to(i);
        };
        /**
         * @param {?} el
         * @return {?}
         */
        BannerComponent.prototype.navigateToSection = /**
         * @param {?} el
         * @return {?}
         */
        function (el) {
            /** @type {?} */
            var elmnt = document.getElementById(el);
            elmnt.scrollIntoView();
        };
        /**
         * @param {?} ids
         * @return {?}
         */
        BannerComponent.prototype.getPosts = /**
         * @param {?} ids
         * @return {?}
         */
        function (ids) {
            var _this = this;
            this.essentialsService.getPosts(ids).subscribe((/**
             * @param {?} res
             * @return {?}
             */
            function (res) {
                _this.posts = res.PostsList;
            }));
        };
        /**
         * @param {?} item
         * @return {?}
         */
        BannerComponent.prototype.getThumbnailUrl = /**
         * @param {?} item
         * @return {?}
         */
        function (item) {
            if (item.mediaURLs.length) {
                return "/" + item.mediaURLs[0].url;
            }
            else {
                return "";
            }
        };
        /**
         * @param {?} url
         * @return {?}
         */
        BannerComponent.prototype.urlsafe = /**
         * @param {?} url
         * @return {?}
         */
        function (url) {
            return this.sinitizer.bypassSecurityTrustUrl(url);
        };
        /**
         * @param {?} url
         * @return {?}
         */
        BannerComponent.prototype.setPrefixInHref = /**
         * @param {?} url
         * @return {?}
         */
        function (url) {
            if (url && url.indexOf("/") == 0 && this.data.moduleService.site.HostName) {
                /** @type {?} */
                var replaceWith = "/" + decodeURIComponent(this.data.moduleService.site.HostName) + "/";
                return url.replace("/", replaceWith);
            }
            return url;
        };
        BannerComponent.decorators = [
            { type: core.Component, args: [{
                        selector: "app-banner",
                        template: "<!--OWL Carousel-->\n<div *ngIf=\"settings.dataFrom=='static'\" [style.background-size]=\"settings.sizeImage\"\n  [style.background-repeat]=\"settings.repeatImage\" [style.background-position]=\"settings.positionImage\"\n  [style.background-color]=\"settings.postBackgroundColor\"\n  [style.background-image]=\"settings.postBackgroundImage?'url(' + settings.postBackgroundImage + ')':''\">\n\n  <owl-carousel #owlElement [options]=\"carouselOptions\" [items]=\"settings.ImagesLink\" class=\"direction-ltr\"\n    [carouselClasses]=\"['owl-theme', 'row', 'sliding']\">\n\n    <div *ngFor=\"let slide of settings.ImagesLink;let i= index\">\n\n      <div class=\"carousel-container\" [style.justify-content]=\"settings.carouselPosition\">\n        <p class=\"waterMark\" *ngIf=\"settings.waterMarkOptions == 'text'\" [style.align-self]=\"settings.waterMarkPosition\"\n          [innerHtml]=\"settings.textWaterMark|sanitizeHtml\"></p>\n        <p class=\"waterMark\" *ngIf=\"settings.waterMarkOptions == 'image'\"\n          [style.align-self]=\"settings.waterMarkPosition\">\n          <img src=\"{{settings.waterMarkImage}}\"\n            [style.height]=\"settings.waterMarkHeight ? settings.waterMarkHeight+'px':'100%'\"\n            [style.width]=\"settings.waterMarkWidth ? settings.waterMarkWidth+'px':'100%'\" />\n        </p>\n        <!--No Links-->\n        <span style=\"width: 100%;\" *ngIf=\"!slide.bannerLinks && !slide.allBanner\">\n          <div class=\"banner-image\" [style.height]=\"slide.url === '' ? settings.height+'px':''\"\n            [style.width]=\"slide.url === '' ?settings.width+'px':''\">\n            <img *ngIf=\"slide.url\" class=\"slide-image\" src=\"{{slide.url}}\" alt=\"image\">\n\n            <div class=\"mbr-arrow mbr-arrow-floating\" aria-hidden=\"true\" *ngIf=\"settings.arrowDown && settings.cover\">\n              <a [attr.fragment]=\"settings.divId\" (click)=\"navigateToSection(settings.divId)\">\n                <i class=\"fas fa-arrow-down\"></i>\n              </a>\n            </div>\n\n            <div class=\"carousel-caption\" *ngIf=\"settings.showTitle||settings.showText||settings.showSubCaption\">\n              <div *ngIf=\"settings.showTitle&&slide.title\" class=\"title\" [innerHtml]=\"slide.title|sanitizeHtml\"></div>\n              <div *ngIf=\"settings.showText&&slide.text\" class=\"caption\" [innerHtml]=\"slide.text|sanitizeHtml\"></div>\n              <div *ngIf=\"settings.showSubCaption&&slide.description\" class=\"sub-caption\"\n                [innerHtml]=\"slide.description|sanitizeHtml\"></div>\n\n              <div *ngIf=\"slide.bannerButtonLink && slide.type=='1'\">\n                <a class=\"btn {{slide.bannerButtonLinkClass}}\" target=\"{{slide.NewTabLink?'_blank':'_self'}}\"\n                  [href]=\"slide.bannerLink\">{{slide.bannerButtonLinkName}}</a>\n              </div>\n              <div *ngIf=\"slide.bannerButtonLink&& slide.type=='2'\">\n                <a class=\"btn {{slide.bannerButtonLinkClass}}\"\n                  [routerLink]=\"slide.page\">{{slide.bannerButtonLinkName}}</a>\n              </div>\n            </div>\n          </div>\n\n        </span>\n\n        <!--Links on all banner or image-->\n        <span style=\"width: 100%;\" *ngIf=\" slide.bannerLinks && slide.allBanner && slide.type=='1'\">\n          <a style=\"width: 100%;\" [href]=\"urlsafe(slide.bannerLink)\" target=\"{{slide.NewTabLink?'_blank':'_self'}}\">\n\n            <div class=\"banner-image\" [style.height]=\"slide.url === '' ? settings.height+'px':''\"\n              [style.width]=\"slide.url === '' ?settings.width+'px':''\">\n              <img *ngIf=\"slide.url\" class=\"slide-image\" src=\"{{slide.url}}\" alt=\"image\">\n              <div class=\"mbr-arrow mbr-arrow-floating\" aria-hidden=\"true\" *ngIf=\"settings.arrowDown && settings.cover\">\n                <a [attr.fragment]=\"settings.divId\" (click)=\"navigateToSection(settings.divId)\">\n                  <i class=\"fas fa-arrow-down\"></i>\n                </a>\n              </div>\n\n              <div class=\"carousel-caption\" *ngIf=\"settings.showTitle||settings.showText||settings.showSubCaption\">\n                <div *ngIf=\"settings.showTitle&&slide.title\" class=\"title\" [innerHtml]=\"slide.title|sanitizeHtml\"></div>\n                <div *ngIf=\"settings.showText&&slide.text\" class=\"caption\" [innerHtml]=\"slide.text|sanitizeHtml\"></div>\n                <div *ngIf=\"settings.showSubCaption&&slide.description\" class=\"sub-caption\"\n                  [innerHtml]=\"slide.description|sanitizeHtml\"></div>\n              </div>\n            </div>\n\n          </a>\n\n          <div *ngIf=\"slide.bannerButtonLink\">\n            <a class=\"btn {{slide.bannerButtonLinkClass}}\" target=\"{{slide.NewTabLink?'_blank':'_self'}}\"\n              [href]=\"slide.bannerLink\">{{slide.bannerButtonLinkName}}</a>\n          </div>\n\n        </span>\n        <span style=\"width: 100%;\" *ngIf=\" slide.bannerLinks && slide.allBanner && slide.type=='2'\">\n          <a style=\"width: 100%;\" [routerLink]=\"'/'+slide.page\">\n\n            <div class=\"banner-image\" [style.height]=\"slide.url === '' ? settings.height+'px':''\"\n              [style.width]=\"slide.url === '' ?settings.width+'px':''\">\n              <img *ngIf=\"slide.url\" class=\"slide-image\" src=\"{{slide.url}}\" alt=\"image\">\n              <div class=\"mbr-arrow mbr-arrow-floating\" aria-hidden=\"true\" *ngIf=\"settings.arrowDown && settings.cover\">\n                <a [attr.fragment]=\"settings.divId\" (click)=\"navigateToSection(settings.divId)\">\n                  <i class=\"fas fa-arrow-down\"></i>\n                </a>\n              </div>\n\n              <div class=\"carousel-caption\" *ngIf=\"settings.showTitle||settings.showText||settings.showSubCaption\">\n                <div *ngIf=\"settings.showTitle&&slide.title\" class=\"title\" [innerHtml]=\"slide.title|sanitizeHtml\"></div>\n                <div *ngIf=\"settings.showText&&slide.text\" class=\"caption\" [innerHtml]=\"slide.text|sanitizeHtml\"></div>\n                <div *ngIf=\"settings.showSubCaption&&slide.description\" class=\"sub-caption\"\n                  [innerHtml]=\"slide.description|sanitizeHtml\"></div>\n              </div>\n            </div>\n\n          </a>\n\n\n          <div *ngIf=\"slide.bannerButtonLink&& slide.type=='2'\">\n            <a class=\"btn {{slide.bannerButtonLinkClass}}\"\n              [routerLink]=\"'/'+slide.page\">{{slide.bannerButtonLinkName}}</a>\n          </div>\n\n        </span>\n        <span style=\"width: 100%;\" *ngIf=\" slide.bannerLinks && slide.allBanner && slide.type=='5'\">\n          <a style=\"width: 100%;\">\n\n            <div class=\"banner-image\" [style.height]=\"slide.url === '' ? settings.height+'px':''\"\n              [style.width]=\"slide.url === '' ?settings.width+'px':''\">\n              <img *ngIf=\"slide.url\" class=\"slide-image\" src=\"{{slide.url}}\" alt=\"image\">\n              <div class=\"mbr-arrow mbr-arrow-floating\" aria-hidden=\"true\" *ngIf=\"settings.arrowDown && settings.cover\">\n                <a [attr.fragment]=\"settings.divId\" (click)=\"navigateToSection(settings.divId)\">\n                  <i class=\"fas fa-arrow-down\"></i>\n                </a>\n              </div>\n\n              <div class=\"carousel-caption\" *ngIf=\"settings.showTitle||settings.showText||settings.showSubCaption\">\n                <div *ngIf=\"settings.showTitle&&slide.title\" class=\"title\" [innerHtml]=\"slide.title|sanitizeHtml\"></div>\n                <div *ngIf=\"settings.showText&&slide.text\" class=\"caption\" [innerHtml]=\"slide.text|sanitizeHtml\"></div>\n                <div *ngIf=\"settings.showSubCaption&&slide.description\" class=\"sub-caption\"\n                  [innerHtml]=\"slide.description|sanitizeHtml\"></div>\n              </div>\n            </div>\n\n          </a>\n\n\n          <div *ngIf=\"slide.bannerButtonLink&& slide.type=='5'\">\n            <a class=\"btn {{slide.bannerButtonLinkClass}}\">{{slide.bannerButtonLinkName}}</a>\n          </div>\n\n        </span>\n        <!--Links on title or description-->\n\n        <span style=\"width: 100%;\" *ngIf=\" slide.bannerLinks && !slide.allBanner && slide.type=='1' \">\n\n          <div class=\"banner-image\" [style.height]=\"slide.url === '' ? settings.height+'px':''\"\n            [style.width]=\"slide.url === '' ?settings.width+'px':''\">\n            <img *ngIf=\"slide.url\" class=\"slide-image\" src=\"{{slide.url}}\" alt=\"image\">\n            <div class=\"mbr-arrow mbr-arrow-floating\" aria-hidden=\"true\" *ngIf=\"settings.arrowDown && settings.cover\">\n              <a [attr.fragment]=\"settings.divId\" (click)=\"navigateToSection(settings.divId)\">\n                <i class=\"fas fa-arrow-down\"></i>\n              </a>\n            </div>\n            <div class=\"carousel-caption\" *ngIf=\"settings.showTitle||settings.showText||settings.showSubCaption\">\n              <a *ngIf=\"slide.bannerTextLink\" class=\"nav-link\" target=\"{{slide.NewTabLink?'_blank':'_self'}}\"\n                [href]=\"urlsafe(slide.bannerLink)\">\n                <div *ngIf=\"settings.showTitle&&slide.title\" class=\"title\" [innerHtml]=\"slide.title|sanitizeHtml\">\n                </div>\n                <div *ngIf=\"settings.showText&&slide.text\" class=\"caption\" [innerHtml]=\"slide.text|sanitizeHtml\">\n                </div>\n                <div *ngIf=\"settings.showSubCaption&&slide.description\" class=\"sub-caption\"\n                  [innerHtml]=\"slide.description|sanitizeHtml\"></div>\n              </a>\n\n              <div *ngIf=\"settings.showTitle&&slide.title&& !slide.bannerTextLink\" class=\"title\"\n                [innerHtml]=\"slide.title|sanitizeHtml\"></div>\n              <div *ngIf=\"settings.showText&&slide.text&& !slide.bannerTextLink\" class=\"caption\"\n                [innerHtml]=\"slide.text|sanitizeHtml\"></div>\n              <div *ngIf=\"settings.showSubCaption&&slide.description&& !slide.bannerTextLink\" class=\"sub-caption\"\n                [innerHtml]=\"slide.description|sanitizeHtml\"></div>\n\n              <div *ngIf=\"slide.bannerButtonLink\">\n                <a class=\"btn {{slide.bannerButtonLinkClass}}\" target=\"{{slide.NewTabLink?'_blank':'_self'}}\"\n                  [href]=\"urlsafe(slide.bannerLink)\">{{slide.bannerButtonLinkName}}</a>\n              </div>\n            </div>\n          </div>\n\n\n\n\n        </span>\n        <span style=\"width: 100%;\" *ngIf=\" slide.bannerLinks && !slide.allBanner&& slide.type=='2' \">\n\n          <div class=\"banner-image\" [style.height]=\"slide.url === '' ? settings.height+'px':''\"\n            [style.width]=\"slide.url === '' ?settings.width+'px':''\">\n            <img *ngIf=\"slide.url\" class=\"slide-image\" src=\"{{slide.url}}\" alt=\"image\">\n            <div class=\"mbr-arrow mbr-arrow-floating\" aria-hidden=\"true\" *ngIf=\"settings.arrowDown && settings.cover\">\n              <a [attr.fragment]=\"settings.divId\" (click)=\"navigateToSection(settings.divId)\">\n                <i class=\"fas fa-arrow-down\"></i>\n              </a>\n            </div>\n            <div class=\"carousel-caption\" *ngIf=\"settings.showTitle||settings.showText||settings.showSubCaption\">\n              <a *ngIf=\"slide.bannerTextLink\" class=\"nav-link\" target=\"{{slide.NewTabLink?'_blank':'_self'}}\"\n                [routerLink]=\"slide.page\">\n                <div *ngIf=\"settings.showTitle&&slide.title\" class=\"title\" [innerHtml]=\"slide.title|sanitizeHtml\">\n                </div>\n                <div *ngIf=\"settings.showText&&slide.text\" class=\"caption\" [innerHtml]=\"slide.text|sanitizeHtml\">\n                </div>\n                <div *ngIf=\"settings.showSubCaption&&slide.description\" class=\"sub-caption\"\n                  [innerHtml]=\"slide.description|sanitizeHtml\"></div>\n              </a>\n\n              <div *ngIf=\"settings.showTitle&&slide.title&& !slide.bannerTextLink\" class=\"title\"\n                [innerHtml]=\"slide.title|sanitizeHtml\"></div>\n              <div *ngIf=\"settings.showText&&slide.text&& !slide.bannerTextLink\" class=\"caption\"\n                [innerHtml]=\"slide.text|sanitizeHtml\"></div>\n              <div *ngIf=\"settings.showSubCaption&&slide.description&& !slide.bannerTextLink\" class=\"sub-caption\"\n                [innerHtml]=\"slide.description|sanitizeHtml\"></div>\n\n              <div *ngIf=\"slide.bannerButtonLink\">\n                <a class=\"btn {{slide.bannerButtonLinkClass}}\" target=\"{{slide.NewTabLink?'_blank':'_self'}}\"\n                  [routerLink]=\"'/'+slide.page\">{{slide.bannerButtonLinkName}}</a>\n              </div>\n            </div>\n          </div>\n\n\n\n\n        </span>\n        <span style=\"width: 100%;\" *ngIf=\" slide.bannerLinks && !slide.allBanner&& slide.type=='5' \">\n\n          <div class=\"banner-image\" [style.height]=\"slide.url === '' ? settings.height+'px':''\"\n            [style.width]=\"slide.url === '' ?settings.width+'px':''\">\n            <img *ngIf=\"slide.url\" class=\"slide-image\" src=\"{{slide.url}}\" alt=\"image\">\n            <div class=\"mbr-arrow mbr-arrow-floating\" aria-hidden=\"true\" *ngIf=\"settings.arrowDown && settings.cover\">\n              <a [attr.fragment]=\"settings.divId\" (click)=\"navigateToSection(settings.divId)\">\n                <i class=\"fas fa-arrow-down\"></i>\n              </a>\n            </div>\n            <div class=\"carousel-caption\" *ngIf=\"settings.showTitle||settings.showText||settings.showSubCaption\">\n              <a *ngIf=\"slide.bannerTextLink\" class=\"nav-link\" target=\"{{slide.NewTabLink?'_blank':'_self'}}\">\n                <div *ngIf=\"settings.showTitle&&slide.title\" class=\"title\" [innerHtml]=\"slide.title|sanitizeHtml\">\n                </div>\n                <div *ngIf=\"settings.showText&&slide.text\" class=\"caption\" [innerHtml]=\"slide.text|sanitizeHtml\">\n                </div>\n                <div *ngIf=\"settings.showSubCaption&&slide.description\" class=\"sub-caption\"\n                  [innerHtml]=\"slide.description|sanitizeHtml\"></div>\n              </a>\n\n              <div *ngIf=\"settings.showTitle&&slide.title&& !slide.bannerTextLink\" class=\"title\"\n                [innerHtml]=\"slide.title|sanitizeHtml\"></div>\n              <div *ngIf=\"settings.showText&&slide.text&& !slide.bannerTextLink\" class=\"caption\"\n                [innerHtml]=\"slide.text|sanitizeHtml\"></div>\n              <div *ngIf=\"settings.showSubCaption&&slide.description&& !slide.bannerTextLink\" class=\"sub-caption\"\n                [innerHtml]=\"slide.description|sanitizeHtml\"></div>\n\n              <div *ngIf=\"slide.bannerButtonLink\">\n                <a class=\"btn {{slide.bannerButtonLinkClass}}\">{{slide.bannerButtonLinkName}}</a>\n              </div>\n            </div>\n          </div>\n\n\n\n\n        </span>\n\n      </div>\n    </div>\n  </owl-carousel>\n\n  <div *ngIf=\"settings.menu\" class=\"carousel-indicator-menu\">\n    <div *ngFor=\"let slide of settings.ImagesLink;let i= index\"\n      (mouseenter)=\"owlElement.trigger('stop.owl.autoplay');owlElement.to(i);   \"\n      (mouseleave)=\" settings.autoPlay?owlElement.trigger('play.owl.autoplay'):null\">\n      <a *ngIf=\"slide.bannerLinks&& slide.type=='1'\" [href]=\"setPrefixInHref(slide.bannerLink)\" class=\"nav-link\"\n        [innerHtml]=\"slide.title? slide.title:'slide '+i+1\"></a>\n      <a *ngIf=\"slide.bannerLinks&& slide.type=='2' \" [routerLink]=\"'/'+slide.page\" class=\"nav-link\"\n        [innerHtml]=\"slide.title? slide.title:'slide '+i+1\"></a>\n      <span *ngIf=\"!slide.bannerLinks\" \n      [innerHtml]=\"slide.title? slide.title:'slide '+i+1\"></span>  \n    </div>\n  </div>\n\n</div>\n\n<div *ngIf=\"settings.dataFrom=='blog'\" [style.background-size]=\"settings.sizeImage\"\n  [style.background-repeat]=\"settings.repeatImage\" [style.background-position]=\"settings.positionImage\"\n  [style.background-color]=\"settings.postBackgroundColor\"\n  [style.background-image]=\"settings.postBackgroundImage?'url(' + settings.postBackgroundImage + ')':''\">\n\n  <owl-carousel #owlElement [options]=\"carouselOptions\" [items]=\"posts\" class=\"direction-ltr\"\n    [carouselClasses]=\"['owl-theme', 'row', 'sliding']\">\n\n    <div *ngFor=\"let post of posts;let i= index\">\n\n      <div class=\"carousel-container\" [style.justify-content]=\"settings.carouselPosition\">\n        <p class=\"waterMark\" *ngIf=\"settings.waterMarkOptions == 'text'\" [style.align-self]=\"settings.waterMarkPosition\"\n          [innerHtml]=\"settings.textWaterMark|sanitizeHtml\"></p>\n        <p class=\"waterMark\" *ngIf=\"settings.waterMarkOptions == 'image'\"\n          [style.align-self]=\"settings.waterMarkPosition\">\n          <img src=\"{{settings.waterMarkImage}}\"\n            [style.height]=\"settings.waterMarkHeight ? settings.waterMarkHeight+'px':'100%'\"\n            [style.width]=\"settings.waterMarkWidth ? settings.waterMarkWidth+'px':'100%'\" />\n        </p>\n        <!--No Links-->\n        <span style=\"width: 100%;\">\n          <div class=\"banner-image\">\n            <img class=\"slide-image\" src=\"{{getThumbnailUrl(post)}}\" alt=\"image\">\n\n            <div class=\"mbr-arrow mbr-arrow-floating\" aria-hidden=\"true\" *ngIf=\"settings.arrowDown && settings.cover\">\n              <a [attr.fragment]=\"settings.divId\" (click)=\"navigateToSection(settings.divId)\">\n                <i class=\"fas fa-arrow-down\"></i>\n              </a>\n            </div>\n\n            <div class=\"carousel-caption\">\n              <div *ngIf=\"post.title\" class=\"title\" [innerHtml]=\"post.title|sanitizeHtml\"></div>\n              <div *ngIf=\"post.description\" class=\"sub-caption\" [innerHtml]=\"post.description|sanitizeHtml\"></div>\n            </div>\n          </div>\n\n        </span>\n      </div>\n    </div>\n  </owl-carousel>\n</div>",
                        styles: [".active,.carousel,.item{height:100%}.carousel-inner{height:100%;background:#000}h2{font-size:60px}p{padding:10px}.fill{width:100%;height:100%;background-position:center;background-size:cover;-o-background-size:cover;opacity:.6}.btn-transparent{background:0 0;color:#fff;border:2px solid #fff}.btn-transparent:hover{background-color:#fff}.btn-rounded{border-radius:70px}.btn-large{padding:11px 45px;font-size:18px}.typewriter h2{color:#fff;font-family:monospace;overflow:hidden;border-right:.15em solid orange;white-space:nowrap;margin:0 auto;letter-spacing:.15em;-webkit-animation:3.5s steps(30,end) typing,.5s step-end infinite blink-caret;animation:3.5s steps(30,end) typing,.5s step-end infinite blink-caret}@-webkit-keyframes typing{from{width:0}to{width:100%}}@keyframes typing{from{width:0}to{width:100%}}@-webkit-keyframes blink-caret{from,to{border-color:transparent}50%{border-color:orange}}@keyframes blink-caret{from,to{border-color:transparent}50%{border-color:orange}}.carousel-container{display:-webkit-box;display:flex;align-content:center}.waterMark{position:absolute;z-index:999999}.mbr-arrow{bottom:48px;left:0;position:absolute;text-align:center;width:100%}.mbr-arrow a{background:rgba(0,0,0,.2);border-radius:3px;color:#fff;display:inline-block;height:46px;outline-style:none!important;position:relative;text-decoration:none;-webkit-transition:.3s ease-in-out;transition:.3s ease-in-out;width:46px}#slider-thumbs .list-inline li{width:25%;padding:0;margin-right:-4px;cursor:pointer}#slider-thumbs .list-inline li:first-child{padding-left:5px}.slider-nav-arrow{text-align:center;margin-bottom:0;visibility:hidden}.selected .slider-nav-arrow{visibility:visible}.owl-theme .owl-nav{text-align:center;-webkit-tap-highlight-color:transparent}.carousel-indicator-menu{-webkit-box-align:center;align-items:center;padding:10px 0;margin-top:-10px;display:-webkit-box;display:flex;flex-wrap:nowrap}.carousel-indicator-menu>div{width:100px;margin:10px;text-align:center;line-height:75px;font-size:30px}.direction-ltr{direction:ltr}"]
                    }] }
        ];
        /** @nocollapse */
        BannerComponent.ctorParameters = function () { return [
            { type: platformBrowser.DomSanitizer },
            { type: services.EssentialService }
        ]; };
        BannerComponent.propDecorators = {
            data: [{ type: core.Input }],
            settings: [{ type: core.Input }],
            owlElement: [{ type: core.ViewChild, args: ["owlElement", { static: true },] }]
        };
        return BannerComponent;
    }());
    if (false) {
        /** @type {?} */
        BannerComponent.prototype.slides;
        /** @type {?} */
        BannerComponent.prototype.carouselOptions;
        /** @type {?} */
        BannerComponent.prototype.nav;
        /** @type {?} */
        BannerComponent.prototype.slideNumber;
        /** @type {?} */
        BannerComponent.prototype.checkImg;
        /** @type {?} */
        BannerComponent.prototype.site;
        /** @type {?} */
        BannerComponent.prototype.posts;
        /** @type {?} */
        BannerComponent.prototype.data;
        /** @type {?} */
        BannerComponent.prototype.settings;
        /** @type {?} */
        BannerComponent.prototype.owlElement;
        /**
         * @type {?}
         * @private
         */
        BannerComponent.prototype.sinitizer;
        /**
         * @type {?}
         * @private
         */
        BannerComponent.prototype.essentialsService;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    // import { EssentialService } from "@common/common-lib/src/services/essential.service";
    var BannerModule = /** @class */ (function () {
        function BannerModule() {
        }
        BannerModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [BannerComponent],
                        exports: [BannerComponent],
                        entryComponents: [BannerComponent],
                        schemas: [core.CUSTOM_ELEMENTS_SCHEMA],
                        imports: [
                            common.CommonModule,
                            http.HttpClientModule,
                            sharedModule.SharedModule,
                            ngxOwlCarousel.OwlModule,
                            router.RouterModule.forChild([]),
                        ],
                        providers: [],
                    },] }
        ];
        return BannerModule;
    }());

    exports.BannerComponent = BannerComponent;
    exports.BannerModule = BannerModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=banner.umd.js.map
