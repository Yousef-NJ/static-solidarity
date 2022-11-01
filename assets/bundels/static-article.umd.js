(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/router'), require('@angular/common'), require('@angular/common/http'), require('@shared/src/lib/shared-module')) :
    typeof define === 'function' && define.amd ? define('common/src/lib/components/static-article', ['exports', '@angular/core', '@angular/router', '@angular/common', '@angular/common/http', '@shared/src/lib/shared-module'], factory) :
    (global = global || self, factory(global['static-article'] = {}, global.ng.core, global.ng.router, global.ng.common, global.ng.common.http, global.sharedModule));
}(this, (function (exports, core, router, common, http, sharedModule) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var StaticArticleComponent = /** @class */ (function () {
        function StaticArticleComponent(router, routing) {
            this.router = router;
            this.routing = routing;
        }
        /**
         * @return {?}
         */
        StaticArticleComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            for (var i = 0; i < this.settings.ImagesLink.length; i++) {
                this.settings.ImagesLink[i].articaltitle =
                    this.settings.ImagesLink[i].articaltitle ||
                        this.settings.ImagesLink[i].articalsTitle;
                this.settings.articaltitle =
                    this.settings.articaltitle || this.settings.articalsTitle;
            }
            this.site = this.data.moduleService.site;
            this.prefix = "/" + this.data.moduleService.site.HostName;
        };
        /**
         * @param {?} artical
         * @return {?}
         */
        StaticArticleComponent.prototype.navigateToPage = /**
         * @param {?} artical
         * @return {?}
         */
        function (artical) {
            var _this = this;
            this.router.navigate(["/" + artical.page]);
            if (artical.sectionId) {
                setTimeout((/**
                 * @return {?}
                 */
                function () {
                    _this.navigateToSection(artical.sectionId);
                }), 200);
            }
        };
        /**
         * @param {?} artical
         * @return {?}
         */
        StaticArticleComponent.prototype.GoTopage = /**
         * @param {?} artical
         * @return {?}
         */
        function (artical) {
            this.routing.navigate([this.prefix + "/" + artical.blog]);
        };
        /**
         * @param {?} el
         * @return {?}
         */
        StaticArticleComponent.prototype.navigateToSection = /**
         * @param {?} el
         * @return {?}
         */
        function (el) {
            /** @type {?} */
            var elmnt = document.getElementById(el);
            if (elmnt && elmnt != null) {
                elmnt.scrollIntoView();
            }
        };
        StaticArticleComponent.decorators = [
            { type: core.Component, args: [{
                        selector: "app-static-article",
                        template: "<div class=\"container-fluid {{ settings.cssClass }}\">\n  <div class=\"row\" *ngIf=\"settings.templateOptions == 'default'\">\n    <div\n      class=\"col-md-{{ settings.numberColumns }}\"\n      *ngFor=\"let artical of settings.ImagesLink; let i = index\"\n    >\n      <div class=\"card\" *ngIf=\"settings.articalButtonLink\">\n        <img\n          *ngIf=\"settings.articalImage\"\n          class=\"card-img-top {{\n            settings.imageBorderd ? 'img-thumbnail' : ''\n          }}\"\n          src=\"{{ artical.artical_image }}\"\n          alt=\"{{ artical.articaltitle }}\"\n        />\n\n        <div class=\"card-body\">\n          <h4\n            *ngIf=\"settings.articaltitle\"\n            class=\"card-title linkable\"\n            (click)=\"navigateToPage(artical)\"\n          >\n            {{ artical.articaltitle }}\n          </h4>\n          <h5\n            *ngIf=\"settings.articalCaption\"\n            class=\"card-caption\"\n            [innerHTML]=\"artical.articalCaption\"\n          ></h5>\n          <h6\n            *ngIf=\"settings.articalSubCaption\"\n            class=\"card-sub-caption\"\n            [innerHTML]=\"artical.articalSubCaption | sanitizeHtml\"\n          ></h6>\n          <p\n            *ngIf=\"settings.articalDesc\"\n            class=\"card-text\"\n            [innerHTML]=\"artical.artical_description | sanitizeHtml\"\n          ></p>\n          <a\n            *ngIf=\"settings.articalButtonLink && artical.type == '1'\"\n            [href]=\"artical.articalurl\"\n            target=\"{{ artical.NewTabLink ? '_blank' : '_self' }}\"\n            rel=\"{{ artical.NewTabLink ? 'noopener' : 'next' }}\"\n            class=\"{{ settings.class ? settings.class : 'btn btn-primary' }}\"\n            >{{ settings.label ? settings.label : \"More\" }}</a\n          >\n          <a\n            *ngIf=\"settings.articalButtonLink && artical.type == '2'\"\n            (click)=\"navigateToPage(artical)\"\n            rel=\"{{ artical.NewTabLink ? 'noopener' : 'next' }}\"\n            class=\"{{ settings.class ? settings.class : 'btn btn-primary' }}\"\n            >{{ settings.label ? settings.label : \"More\" }}</a\n          >\n          <a\n            *ngIf=\"settings.articalButtonLink && artical.type == '3'\"\n            (click)=\"GoTopage(artical)\"\n            rel=\"{{ artical.NewTabLink ? 'noopener' : 'next' }}\"\n            class=\"{{ settings.class ? settings.class : 'btn btn-primary' }}\"\n            >{{ settings.label ? settings.label : \"More\" }}</a\n          >\n          <a\n            *ngIf=\"settings.articalButtonLink && artical.type == '5'\"\n            class=\"{{ settings.class ? settings.class : 'btn btn-primary' }}\"\n            >{{ settings.label ? settings.label : \"More\" }}</a\n          >\n        </div>\n      </div>\n      <div *ngIf=\"artical.type == '1'\">\n        <a\n          [href]=\"artical.articalurl\"\n          [ngClass]=\"{ isDisabled: !artical.articalurl }\"\n          target=\"{{ artical.NewTabLink ? '_blank' : '_self' }}\"\n          rel=\"{{ artical.NewTabLink ? 'noopener' : 'next' }}\"\n          class=\"card\"\n          *ngIf=\"!settings.articalButtonLink\"\n        >\n          <img\n            *ngIf=\"settings.articalImage\"\n            class=\"card-img-top {{\n              settings.imageBorderd ? 'img-thumbnail' : ''\n            }}\"\n            src=\"{{ artical.artical_image }}\"\n            alt=\"{{ artical.articaltitle }}\"\n          />\n\n          <div class=\"card-body\">\n            <h4 *ngIf=\"settings.articaltitle\" class=\"card-title\">\n              {{ artical.articaltitle }}\n            </h4>\n            <h5\n              *ngIf=\"settings.articalCaption\"\n              class=\"card-caption\"\n              [innerHTML]=\"artical.articalCaption | sanitizeHtml\"\n            ></h5>\n            <h6\n              *ngIf=\"settings.articalSubCaption\"\n              class=\"card-sub-caption\"\n              [innerHTML]=\"artical.articalSubCaption | sanitizeHtml\"\n            ></h6>\n            <p\n              *ngIf=\"settings.articalDesc\"\n              class=\"card-text\"\n              [innerHTML]=\"artical.artical_description | sanitizeHtml\"\n            ></p>\n          </div>\n        </a>\n      </div>\n      <div *ngIf=\"artical.type == '2'\">\n        <a\n          (click)=\"navigateToPage(artical)\"\n          rel=\"{{ artical.NewTabLink ? 'noopener' : 'next' }}\"\n          class=\"card\"\n          *ngIf=\"!settings.articalButtonLink\"\n        >\n          <img\n            *ngIf=\"settings.articalImage\"\n            class=\"card-img-top {{\n              settings.imageBorderd ? 'img-thumbnail' : ''\n            }}\"\n            src=\"{{ artical.artical_image }}\"\n            alt=\"{{ artical.articaltitle }}\"\n          />\n\n          <div class=\"card-body\">\n            <h4 *ngIf=\"settings.articaltitle\" class=\"card-title\">\n              {{ artical.articaltitle }}\n            </h4>\n            <h5\n              *ngIf=\"settings.articalCaption\"\n              class=\"card-caption\"\n              [innerHTML]=\"artical.articalCaption | sanitizeHtml\"\n            ></h5>\n            <h6\n              *ngIf=\"settings.articalSubCaption\"\n              class=\"card-sub-caption\"\n              [innerHTML]=\"artical.articalSubCaption | sanitizeHtml\"\n            ></h6>\n            <p\n              *ngIf=\"settings.articalDesc\"\n              class=\"card-text\"\n              [innerHTML]=\"artical.artical_description | sanitizeHtml\"\n            ></p>\n          </div>\n        </a>\n      </div>\n      <div *ngIf=\"artical.type == '3'\">\n        <a\n          (click)=\"GoTopage(artical)\"\n          rel=\"{{ artical.NewTabLink ? 'noopener' : 'next' }}\"\n          class=\"card\"\n          *ngIf=\"!settings.articalButtonLink\"\n        >\n          <img\n            *ngIf=\"settings.articalImage\"\n            class=\"card-img-top {{\n              settings.imageBorderd ? 'img-thumbnail' : ''\n            }}\"\n            src=\"{{ artical.artical_image }}\"\n            alt=\"{{ artical.articaltitle }}\"\n          />\n\n          <div class=\"card-body\">\n            <h4 *ngIf=\"settings.articaltitle\" class=\"card-title\">\n              {{ artical.articaltitle }}\n            </h4>\n            <h5\n              *ngIf=\"settings.articalCaption\"\n              class=\"card-caption\"\n              [innerHTML]=\"artical.articalCaption | sanitizeHtml\"\n            ></h5>\n            <h6\n              *ngIf=\"settings.articalSubCaption\"\n              class=\"card-sub-caption\"\n              [innerHTML]=\"artical.articalSubCaption | sanitizeHtml\"\n            ></h6>\n            <p\n              *ngIf=\"settings.articalDesc\"\n              class=\"card-text\"\n              [innerHTML]=\"artical.artical_description | sanitizeHtml\"\n            ></p>\n          </div>\n        </a>\n      </div>\n      <div *ngIf=\"artical.type == '5'\">\n        <a\n          [ngClass]=\"{ isDisabled: !artical.articalurl && !artical.page }\"\n          target=\"{{ artical.NewTabLink ? '_blank' : '_self' }}\"\n          rel=\"{{ artical.NewTabLink ? 'noopener' : 'next' }}\"\n          class=\"row nav-link\"\n          *ngIf=\"!settings.articalButtonLink\"\n        >\n          <div\n            class=\"col-md-{{ block.size }}\"\n            *ngFor=\"let block of settings.blocks; let i = index\"\n          >\n            <div\n              class=\"img-block\"\n              *ngIf=\"\n                block.element &&\n                block.element.type == 'image' &&\n                settings.articalImage\n              \"\n            >\n              <img\n                class=\"card-img-top {{\n                  settings.imageBorderd ? 'img-thumbnail' : ''\n                }}\"\n                [style.width]=\"\n                  settings.imageWidth ? settings.imageWidth + 'px' : '100%'\n                \"\n                [style.height]=\"\n                  settings.imageHeight ? settings.imageHeight + 'px' : '100%'\n                \"\n                src=\"{{ artical.artical_image }}\"\n                alt=\"{{ artical.articaltitle }}\"\n              />\n            </div>\n\n            <div\n              class=\"title-block\"\n              *ngIf=\"\n                block.element &&\n                block.element.type == 'title' &&\n                settings.articaltitle\n              \"\n            >\n              <span class=\"card-title\"> {{ artical.articaltitle }}</span>\n            </div>\n\n            <div\n              class=\"caption-block\"\n              *ngIf=\"\n                block.element &&\n                block.element.type == 'caption' &&\n                settings.articalCaption\n              \"\n            >\n              <span\n                class=\"card-caption\"\n                [innerHTML]=\"artical.articalCaption | sanitizeHtml\"\n              ></span>\n            </div>\n\n            <div\n              class=\"sub-caption-block\"\n              *ngIf=\"\n                block.element &&\n                block.element.type == 'sub caption' &&\n                settings.articalSubCaption\n              \"\n            >\n              <span\n                class=\"card-sub-caption\"\n                [innerHTML]=\"artical.articalSubCaption | sanitizeHtml\"\n              ></span>\n            </div>\n\n            <div\n              class=\"desc-block\"\n              *ngIf=\"\n                block.element &&\n                block.element.type == 'description' &&\n                settings.articalDesc\n              \"\n            >\n              <span\n                class=\"card-text\"\n                [innerHTML]=\"artical.artical_description | sanitizeHtml\"\n              >\n              </span>\n            </div>\n\n            <div\n              *ngIf=\"\n                block.element &&\n                block.element.type == 'button' &&\n                settings.articalButtonLink\n              \"\n            >\n              <a\n                class=\"{{\n                  settings.class ? settings.class : 'btn btn-primary'\n                }}\"\n                >{{ settings.label ? settings.label : \"More\" }}</a\n              >\n            </div>\n          </div>\n        </a>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"row\" *ngIf=\"settings.templateOptions == 'custom'\">\n    <div\n      class=\"col-md-{{ settings.numberColumns }}\"\n      *ngFor=\"let artical of settings.ImagesLink; let i = index\"\n    >\n      <div class=\"card\">\n        <div class=\"row\" *ngIf=\"settings.articalButtonLink\">\n          <div\n            class=\"col-md-{{ block.size }}\"\n            *ngFor=\"let block of settings.blocks; let i = index\"\n          >\n            <div\n              class=\"img-block\"\n              *ngIf=\"\n                block.element &&\n                block.element.type == 'image' &&\n                settings.articalImage\n              \"\n            >\n              <img\n                class=\"card-img-top {{\n                  settings.imageBorderd ? 'img-thumbnail' : ''\n                }}\"\n                [style.width]=\"\n                  settings.imageWidth ? settings.imageWidth + 'px' : '100%'\n                \"\n                [style.height]=\"\n                  settings.imageHeight ? settings.imageHeight + 'px' : '100%'\n                \"\n                src=\"{{ artical.artical_image }}\"\n                alt=\"{{ artical.articaltitle }}\"\n              />\n            </div>\n\n            <div\n              class=\"title-block linkable\"\n              *ngIf=\"\n                block.element &&\n                block.element.type == 'title' &&\n                settings.articaltitle\n              \"\n            >\n              <span\n                class=\"card-title\"\n                *ngIf=\"settings.articalButtonLink && artical.type == '5'\"\n              >\n                {{ artical.articaltitle }}\n              </span>\n\n              <a\n                *ngIf=\"settings.articalButtonLink && artical.type == '1'\"\n                [href]=\"artical.articalurl\"\n                target=\"{{ artical.NewTabLink ? '_blank' : '_self' }}\"\n                rel=\"{{ artical.NewTabLink ? 'noopener' : 'next' }}\"\n              >\n                {{ artical.articaltitle }}\n              </a>\n\n              <a\n                *ngIf=\"settings.articalButtonLink && artical.type == '2'\"\n                (click)=\"navigateToPage(artical)\"\n              >\n                {{ artical.articaltitle }}\n              </a>\n              <a\n                *ngIf=\"settings.articalButtonLink && artical.type == '3'\"\n                (click)=\"GoTopage(artical)\"\n              >\n                {{ artical.articaltitle }}\n              </a>\n            </div>\n\n            <div\n              class=\"caption-block\"\n              *ngIf=\"\n                block.element &&\n                block.element.type == 'caption' &&\n                settings.articalCaption\n              \"\n            >\n              <span\n                class=\"card-caption\"\n                [innerHTML]=\"artical.articalCaption | sanitizeHtml\"\n              ></span>\n            </div>\n\n            <div\n              class=\"sub-caption-block\"\n              *ngIf=\"\n                block.element &&\n                block.element.type == 'sub caption' &&\n                settings.articalSubCaption\n              \"\n            >\n              <span\n                class=\"card-sub-caption\"\n                [innerHTML]=\"artical.articalSubCaption | sanitizeHtml\"\n              ></span>\n            </div>\n\n            <div\n              class=\"desc-block\"\n              *ngIf=\"\n                block.element &&\n                block.element.type == 'description' &&\n                settings.articalDesc\n              \"\n            >\n              <span\n                class=\"card-text\"\n                [innerHTML]=\"artical.artical_description | sanitizeHtml\"\n              >\n              </span>\n            </div>\n\n            <div\n              *ngIf=\"\n                block.element &&\n                block.element.type == 'button' &&\n                settings.articalButtonLink &&\n                artical.type == '1'\n              \"\n            >\n              <a\n                [href]=\"artical.articalurl\"\n                target=\"{{ artical.NewTabLink ? '_blank' : '_self' }}\"\n                rel=\"{{ artical.NewTabLink ? 'noopener' : 'next' }}\"\n                class=\"{{\n                  settings.class ? settings.class : 'btn btn-primary'\n                }}\"\n                >{{ settings.label ? settings.label : \"More\" }}</a\n              >\n            </div>\n            <div\n              *ngIf=\"\n                block.element &&\n                block.element.type == 'button' &&\n                settings.articalButtonLink &&\n                artical.type == '2'\n              \"\n            >\n              <a\n                (click)=\"navigateToPage(artical)\"\n                rel=\"{{ artical.NewTabLink ? 'noopener' : 'next' }}\"\n                class=\"{{\n                  settings.class ? settings.class : 'btn btn-primary'\n                }}\"\n                >{{ settings.label ? settings.label : \"More\" }}</a\n              >\n            </div>\n            <div\n              *ngIf=\"\n                block.element &&\n                block.element.type == 'button' &&\n                settings.articalButtonLink &&\n                artical.type == '3'\n              \"\n            >\n              <a\n                (click)=\"GoTopage(artical)\"\n                rel=\"{{ artical.NewTabLink ? 'noopener' : 'next' }}\"\n                class=\"{{\n                  settings.class ? settings.class : 'btn btn-primary'\n                }}\"\n                >{{ settings.label ? settings.label : \"More\" }}</a\n              >\n            </div>\n            <div\n              *ngIf=\"\n                block.element &&\n                block.element.type == 'button' &&\n                settings.articalButtonLink &&\n                artical.type == '5'\n              \"\n            >\n              <a\n                class=\"{{\n                  settings.class ? settings.class : 'btn btn-primary'\n                }}\"\n                >{{ settings.label ? settings.label : \"More\" }}</a\n              >\n            </div>\n          </div>\n        </div>\n        <div *ngIf=\"artical.type == '1'\">\n          <a\n            [href]=\"artical.articalurl\"\n            [ngClass]=\"{ isDisabled: !artical.articalurl }\"\n            target=\"{{ artical.NewTabLink ? '_blank' : '_self' }}\"\n            rel=\"{{ artical.NewTabLink ? 'noopener' : 'next' }}\"\n            class=\"row nav-link\"\n            *ngIf=\"!settings.articalButtonLink\"\n          >\n            <div\n              class=\"col-md-{{ block.size }}\"\n              *ngFor=\"let block of settings.blocks; let i = index\"\n            >\n              <div\n                class=\"img-block\"\n                *ngIf=\"\n                  block.element &&\n                  block.element.type == 'image' &&\n                  settings.articalImage\n                \"\n              >\n                <img\n                  class=\"card-img-top {{\n                    settings.imageBorderd ? 'img-thumbnail' : ''\n                  }}\"\n                  [style.width]=\"\n                    settings.imageWidth ? settings.imageWidth + 'px' : '100%'\n                  \"\n                  [style.height]=\"\n                    settings.imageHeight ? settings.imageHeight + 'px' : '100%'\n                  \"\n                  src=\"{{ artical.artical_image }}\"\n                  alt=\"{{ artical.articaltitle }}\"\n                />\n              </div>\n\n              <div\n                class=\"title-block\"\n                *ngIf=\"\n                  block.element &&\n                  block.element.type == 'title' &&\n                  settings.articaltitle\n                \"\n              >\n                <span class=\"card-title\"> {{ artical.articaltitle }}</span>\n              </div>\n\n              <div\n                class=\"caption-block\"\n                *ngIf=\"\n                  block.element &&\n                  block.element.type == 'caption' &&\n                  settings.articalCaption\n                \"\n              >\n                <span\n                  class=\"card-caption\"\n                  [innerHTML]=\"artical.articalCaption | sanitizeHtml\"\n                ></span>\n              </div>\n\n              <div\n                class=\"sub-caption-block\"\n                *ngIf=\"\n                  block.element &&\n                  block.element.type == 'sub caption' &&\n                  settings.articalSubCaption\n                \"\n              >\n                <span\n                  class=\"card-sub-caption\"\n                  [innerHTML]=\"artical.articalSubCaption | sanitizeHtml\"\n                ></span>\n              </div>\n\n              <div\n                class=\"desc-block\"\n                *ngIf=\"\n                  block.element &&\n                  block.element.type == 'description' &&\n                  settings.articalDesc\n                \"\n              >\n                <span\n                  class=\"card-text\"\n                  [innerHTML]=\"artical.artical_description | sanitizeHtml\"\n                >\n                </span>\n              </div>\n\n              <div\n                *ngIf=\"\n                  block.element &&\n                  block.element.type == 'button' &&\n                  settings.articalButtonLink\n                \"\n              >\n                <a\n                  [href]=\"artical.articalurl\"\n                  target=\"{{ artical.NewTabLink ? '_blank' : '_self' }}\"\n                  rel=\"{{ artical.NewTabLink ? 'noopener' : 'next' }}\"\n                  class=\"{{\n                    settings.class ? settings.class : 'btn btn-primary'\n                  }}\"\n                  >{{ settings.label ? settings.label : \"More\" }}</a\n                >\n              </div>\n            </div>\n          </a>\n        </div>\n        <div *ngIf=\"artical.type == '2'\">\n          <a\n            (click)=\"navigateToPage(artical)\"\n            rel=\"{{ artical.NewTabLink ? 'noopener' : 'next' }}\"\n            class=\"row nav-link\"\n            *ngIf=\"!settings.articalButtonLink\"\n          >\n            <div\n              class=\"col-md-{{ block.size }}\"\n              *ngFor=\"let block of settings.blocks; let i = index\"\n            >\n              <div\n                class=\"img-block\"\n                *ngIf=\"\n                  block.element &&\n                  block.element.type == 'image' &&\n                  settings.articalImage\n                \"\n              >\n                <img\n                  class=\"card-img-top {{\n                    settings.imageBorderd ? 'img-thumbnail' : ''\n                  }}\"\n                  [style.width]=\"\n                    settings.imageWidth ? settings.imageWidth + 'px' : '100%'\n                  \"\n                  [style.height]=\"\n                    settings.imageHeight ? settings.imageHeight + 'px' : '100%'\n                  \"\n                  src=\"{{ artical.artical_image }}\"\n                  alt=\"{{ artical.articaltitle }}\"\n                />\n              </div>\n\n              <div\n                class=\"title-block\"\n                *ngIf=\"\n                  block.element &&\n                  block.element.type == 'title' &&\n                  settings.articaltitle\n                \"\n              >\n                <span class=\"card-title\"> {{ artical.articaltitle }}</span>\n              </div>\n\n              <div\n                class=\"caption-block\"\n                *ngIf=\"\n                  block.element &&\n                  block.element.type == 'caption' &&\n                  settings.articalCaption\n                \"\n              >\n                <span\n                  class=\"card-caption\"\n                  [innerHTML]=\"artical.articalCaption | sanitizeHtml\"\n                ></span>\n              </div>\n\n              <div\n                class=\"sub-caption-block\"\n                *ngIf=\"\n                  block.element &&\n                  block.element.type == 'sub caption' &&\n                  settings.articalSubCaption\n                \"\n              >\n                <span\n                  class=\"card-sub-caption\"\n                  [innerHTML]=\"artical.articalSubCaption | sanitizeHtml\"\n                ></span>\n              </div>\n\n              <div\n                class=\"desc-block\"\n                *ngIf=\"\n                  block.element &&\n                  block.element.type == 'description' &&\n                  settings.articalDesc\n                \"\n              >\n                <span\n                  class=\"card-text\"\n                  [innerHTML]=\"artical.artical_description | sanitizeHtml\"\n                >\n                </span>\n              </div>\n\n              <div\n                *ngIf=\"\n                  block.element &&\n                  block.element.type == 'button' &&\n                  settings.articalButtonLink\n                \"\n              >\n                <a\n                  (click)=\"navigateToPage(artical)\"\n                  rel=\"{{ artical.NewTabLink ? 'noopener' : 'next' }}\"\n                  class=\"{{\n                    settings.class ? settings.class : 'btn btn-primary'\n                  }}\"\n                  >{{ settings.label ? settings.label : \"More\" }}</a\n                >\n              </div>\n            </div>\n          </a>\n        </div>\n        <div *ngIf=\"artical.type == '3'\">\n          <a\n            (click)=\"GoTopage(artical)\"\n            rel=\"{{ artical.NewTabLink ? 'noopener' : 'next' }}\"\n            class=\"row nav-link\"\n            *ngIf=\"!settings.articalButtonLink\"\n          >\n            <div\n              class=\"col-md-{{ block.size }}\"\n              *ngFor=\"let block of settings.blocks; let i = index\"\n            >\n              <div\n                class=\"img-block\"\n                *ngIf=\"\n                  block.element &&\n                  block.element.type == 'image' &&\n                  settings.articalImage\n                \"\n              >\n                <img\n                  class=\"card-img-top {{\n                    settings.imageBorderd ? 'img-thumbnail' : ''\n                  }}\"\n                  [style.width]=\"\n                    settings.imageWidth ? settings.imageWidth + 'px' : '100%'\n                  \"\n                  [style.height]=\"\n                    settings.imageHeight ? settings.imageHeight + 'px' : '100%'\n                  \"\n                  src=\"{{ artical.artical_image }}\"\n                  alt=\"{{ artical.articaltitle }}\"\n                />\n              </div>\n\n              <div\n                class=\"title-block\"\n                *ngIf=\"\n                  block.element &&\n                  block.element.type == 'title' &&\n                  settings.articaltitle\n                \"\n              >\n                <span class=\"card-title\"> {{ artical.articaltitle }}</span>\n              </div>\n\n              <div\n                class=\"caption-block\"\n                *ngIf=\"\n                  block.element &&\n                  block.element.type == 'caption' &&\n                  settings.articalCaption\n                \"\n              >\n                <span\n                  class=\"card-caption\"\n                  [innerHTML]=\"artical.articalCaption | sanitizeHtml\"\n                ></span>\n              </div>\n\n              <div\n                class=\"sub-caption-block\"\n                *ngIf=\"\n                  block.element &&\n                  block.element.type == 'sub caption' &&\n                  settings.articalSubCaption\n                \"\n              >\n                <span\n                  class=\"card-sub-caption\"\n                  [innerHTML]=\"artical.articalSubCaption | sanitizeHtml\"\n                ></span>\n              </div>\n\n              <div\n                class=\"desc-block\"\n                *ngIf=\"\n                  block.element &&\n                  block.element.type == 'description' &&\n                  settings.articalDesc\n                \"\n              >\n                <span\n                  class=\"card-text\"\n                  [innerHTML]=\"artical.artical_description | sanitizeHtml\"\n                >\n                </span>\n              </div>\n\n              <div\n                *ngIf=\"\n                  block.element &&\n                  block.element.type == 'button' &&\n                  settings.articalButtonLink\n                \"\n              >\n                <a\n                  (click)=\"navigateToPage(artical)\"\n                  rel=\"{{ artical.NewTabLink ? 'noopener' : 'next' }}\"\n                  class=\"{{\n                    settings.class ? settings.class : 'btn btn-primary'\n                  }}\"\n                  >{{ settings.label ? settings.label : \"More\" }}</a\n                >\n              </div>\n            </div>\n          </a>\n        </div>\n        <div *ngIf=\"artical.type == '5'\">\n          <a\n            [ngClass]=\"{ isDisabled: !artical.articalurl && !artical.page }\"\n            target=\"{{ artical.NewTabLink ? '_blank' : '_self' }}\"\n            rel=\"{{ artical.NewTabLink ? 'noopener' : 'next' }}\"\n            class=\"row nav-link\"\n            *ngIf=\"!settings.articalButtonLink\"\n          >\n            <div\n              class=\"col-md-{{ block.size }}\"\n              *ngFor=\"let block of settings.blocks; let i = index\"\n            >\n              <div\n                class=\"img-block\"\n                *ngIf=\"\n                  block.element &&\n                  block.element.type == 'image' &&\n                  settings.articalImage\n                \"\n              >\n                <img\n                  class=\"card-img-top {{\n                    settings.imageBorderd ? 'img-thumbnail' : ''\n                  }}\"\n                  [style.width]=\"\n                    settings.imageWidth ? settings.imageWidth + 'px' : '100%'\n                  \"\n                  [style.height]=\"\n                    settings.imageHeight ? settings.imageHeight + 'px' : '100%'\n                  \"\n                  src=\"{{ artical.artical_image }}\"\n                  alt=\"{{ artical.articaltitle }}\"\n                />\n              </div>\n\n              <div\n                class=\"title-block\"\n                *ngIf=\"\n                  block.element &&\n                  block.element.type == 'title' &&\n                  settings.articaltitle\n                \"\n              >\n                <span class=\"card-title\"> {{ artical.articaltitle }}</span>\n              </div>\n\n              <div\n                class=\"caption-block\"\n                *ngIf=\"\n                  block.element &&\n                  block.element.type == 'caption' &&\n                  settings.articalCaption\n                \"\n              >\n                <span\n                  class=\"card-caption\"\n                  [innerHTML]=\"artical.articalCaption | sanitizeHtml\"\n                ></span>\n              </div>\n\n              <div\n                class=\"sub-caption-block\"\n                *ngIf=\"\n                  block.element &&\n                  block.element.type == 'sub caption' &&\n                  settings.articalSubCaption\n                \"\n              >\n                <span\n                  class=\"card-sub-caption\"\n                  [innerHTML]=\"artical.articalSubCaption | sanitizeHtml\"\n                ></span>\n              </div>\n\n              <div\n                class=\"desc-block\"\n                *ngIf=\"\n                  block.element &&\n                  block.element.type == 'description' &&\n                  settings.articalDesc\n                \"\n              >\n                <span\n                  class=\"card-text\"\n                  [innerHTML]=\"artical.artical_description | sanitizeHtml\"\n                >\n                </span>\n              </div>\n\n              <div\n                *ngIf=\"\n                  block.element &&\n                  block.element.type == 'button' &&\n                  settings.articalButtonLink\n                \"\n              >\n                <a\n                  [ngClass]=\"{\n                    isDisabled: !artical.articalurl && !settings.page\n                  }\"\n                  target=\"{{ artical.NewTabLink ? '_blank' : '_self' }}\"\n                  rel=\"{{ artical.NewTabLink ? 'noopener' : 'next' }}\"\n                  class=\"{{\n                    settings.class ? settings.class : 'btn btn-primary'\n                  }}\"\n                  >{{ settings.label ? settings.label : \"More\" }}</a\n                >\n              </div>\n            </div>\n          </a>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n",
                        styles: [".cut-desc{max-width:20em;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.isDisabled{color:currentColor;cursor:not-allowed;pointer-events:none;text-decoration:none}"]
                    }] }
        ];
        /** @nocollapse */
        StaticArticleComponent.ctorParameters = function () { return [
            { type: router.Router },
            { type: router.Router }
        ]; };
        StaticArticleComponent.propDecorators = {
            settings: [{ type: core.Input }],
            data: [{ type: core.Input }]
        };
        return StaticArticleComponent;
    }());
    if (false) {
        /** @type {?} */
        StaticArticleComponent.prototype.settings;
        /** @type {?} */
        StaticArticleComponent.prototype.data;
        /** @type {?} */
        StaticArticleComponent.prototype.site;
        /** @type {?} */
        StaticArticleComponent.prototype.prefix;
        /**
         * @type {?}
         * @private
         */
        StaticArticleComponent.prototype.router;
        /**
         * @type {?}
         * @private
         */
        StaticArticleComponent.prototype.routing;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var StaticArticleModule = /** @class */ (function () {
        function StaticArticleModule() {
        }
        StaticArticleModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [StaticArticleComponent],
                        exports: [StaticArticleComponent],
                        entryComponents: [StaticArticleComponent],
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
        return StaticArticleModule;
    }());

    exports.StaticArticleComponent = StaticArticleComponent;
    exports.StaticArticleModule = StaticArticleModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=static-article.umd.js.map