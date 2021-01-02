(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "/YaV":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/categories-page/categories-form/positions-form/positions-form.component.html ***!
  \************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\n  <div class=\"col s12\">\n    <div class=\"page-subtitle\">\n      <h4>Позиции:</h4>\n      <button\n        class=\"waves-effect waves-light btn grey darken-1 btn-small\"\n        (click)=\"onAddPosition()\"\n      >\n        Добавить позицию\n      </button>\n    </div>\n\n    <div *ngIf=\"!loading; else loader\">\n      <div class=\"collection\" *ngIf=\"positions.length !== 0; else empty\">\n        <a\n          *ngFor=\"let position of positions\"\n          class=\"collection-item collection-item-icon\"\n          (click)=\"onSelectPosition(position)\"\n        >\n          <span>\n              {{position.name}} <strong>{{position.cost}} руб.</strong>\n          </span>\n          <span>\n              <i class=\"material-icons\" (click)=\"onDeletePosition($event, position)\">delete</i>\n          </span>\n        </a>\n      </div>\n      <ng-template #empty>\n        <div class=\"center\">В категории позиций нет</div>\n      </ng-template>\n    </div>\n    <ng-template #loader>\n      <app-loader></app-loader>\n    </ng-template>\n  </div>\n</div>\n\n\n<form [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\">\n  <div class=\"modal\" #modal>\n    <div class=\"modal-content\">\n      <h4 class=\"mb1\">Добавить позицию</h4>\n      <div class=\"input-field\">\n        <input\n          formControlName=\"name\"\n          id=\"pos-name\"\n          type=\"text\"\n          [ngClass]=\"{'invalid': form.get('name').invalid && form.get('name').touched}\"\n        >\n        <label for=\"pos-name\">Название</label>\n        <span\n          *ngIf=\"form.get('name').invalid && form.get('name').touched\"\n          class=\"helper-text red-text\"\n        >\n          Название не должно быть пустым.\n        </span>\n      </div>\n      <div class=\"input-field\">\n        <input\n          id=\"pos-cost\"\n          type=\"number\"\n          min=\"1\"\n          formControlName=\"cost\"\n          [ngClass]=\"{'invalid': form.get('cost').invalid && form.get('cost').touched}\"\n        >\n        <label for=\"pos-cost\">Цена</label>\n        <span\n          *ngIf=\"form.get('cost').invalid && form.get('cost').touched\"\n          class=\"helper-text red-text\"\n        >\n          Введите корректную цену. Минимальное значение 1.\n        </span>\n      </div>\n    </div>\n    <div class=\"modal-footer\">\n      <button\n        type=\"button\"\n        (click)=\"onCancel()\"\n        class=\"modal-action waves-effect waves-black btn-flat\"\n        [disabled]=\"form.disabled\"\n      >\n        Отмена\n      </button>\n      <button\n        class=\"modal-action btn waves-effect\"\n        type=\"submit\"\n        [disabled]=\"form.invalid || form.disabled\"\n      >\n        Сохранить\n      </button>\n    </div>\n  </div>\n</form>\n");

/***/ }),

/***/ "/yY+":
/*!******************************************************!*\
  !*** ./src/app/shared/services/analytics.service.ts ***!
  \******************************************************/
/*! exports provided: AnalyticsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnalyticsService", function() { return AnalyticsService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AnalyticsService = /** @class */ (function () {
    function AnalyticsService(http) {
        this.http = http;
    }
    AnalyticsService.prototype.getOverview = function () {
        return this.http.get('/api/analytics/overview');
    };
    AnalyticsService.prototype.getAnalytics = function () {
        return this.http.get('/api/analytics/analytics');
    };
    AnalyticsService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }
    ]; };
    AnalyticsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]])
    ], AnalyticsService);
    return AnalyticsService;
}());



/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! d:\VSProjects\heroku\client\src\main.ts */"zUnb");


/***/ }),

/***/ "0tAP":
/*!******************************************************************************!*\
  !*** ./src/app/categories-page/categories-form/categories-form.component.ts ***!
  \******************************************************************************/
/*! exports provided: CategoriesFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesFormComponent", function() { return CategoriesFormComponent; });
/* harmony import */ var _raw_loader_categories_form_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./categories-form.component.html */ "cc8B");
/* harmony import */ var _categories_form_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./categories-form.component.css */ "222H");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _shared_services_categories_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/services/categories.service */ "U5Sr");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _shared_classes_material_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/classes/material.service */ "O+p6");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var CategoriesFormComponent = /** @class */ (function () {
    function CategoriesFormComponent(route, categoriesService, router) {
        this.route = route;
        this.categoriesService = categoriesService;
        this.router = router;
        this.imagePreview = '';
        this.isNew = true;
    }
    CategoriesFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required)
        });
        this.form.disable();
        this.route.params
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])(function (params) {
            if (params['id']) {
                _this.isNew = false;
                return _this.categoriesService.getById(params['id']);
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["of"])(null);
        }))
            .subscribe(function (category) {
            if (category) {
                _this.category = category;
                _this.form.patchValue({
                    name: category.name
                });
                _this.imagePreview = category.imageSrc;
                _shared_classes_material_service__WEBPACK_IMPORTED_MODULE_8__["MaterialService"].updateTextInputs();
            }
            _this.form.enable();
        }, function (error) { return _shared_classes_material_service__WEBPACK_IMPORTED_MODULE_8__["MaterialService"].toast(error.error.message); });
    };
    CategoriesFormComponent.prototype.triggerClick = function () {
        this.inputRef.nativeElement.click();
    };
    CategoriesFormComponent.prototype.deleteCategory = function () {
        var _this = this;
        var decision = window.confirm("\u0412\u044B \u0443\u0432\u0435\u0440\u0435\u043D\u044B, \u0447\u0442\u043E \u0445\u043E\u0442\u0438\u0442\u0435 \u0443\u0434\u0430\u043B\u0438\u0442\u044C \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044E \"" + this.category.name + "\"");
        if (decision) {
            this.categoriesService.delete(this.category._id)
                .subscribe(function (response) { return _shared_classes_material_service__WEBPACK_IMPORTED_MODULE_8__["MaterialService"].toast(response.message); }, function (error) { return _shared_classes_material_service__WEBPACK_IMPORTED_MODULE_8__["MaterialService"].toast(error.error.message); }, function () { return _this.router.navigate(['/categories']); });
        }
    };
    CategoriesFormComponent.prototype.onFileUpload = function (event) {
        var _this = this;
        var file = event.target.files[0];
        this.image = file;
        var reader = new FileReader();
        reader.onload = function () {
            if (typeof reader.result === "string") {
                _this.imagePreview = reader.result;
            }
        };
        reader.readAsDataURL(file);
    };
    CategoriesFormComponent.prototype.onSubmit = function () {
        var _this = this;
        var obs$;
        this.form.disable();
        if (this.isNew) {
            obs$ = this.categoriesService.create(this.form.value.name, this.image);
        }
        else {
            obs$ = this.categoriesService.update(this.category._id, this.form.value.name, this.image);
        }
        obs$.subscribe(function (category) {
            _this.category = category;
            _shared_classes_material_service__WEBPACK_IMPORTED_MODULE_8__["MaterialService"].toast('Изменения сохранены.');
            _this.form.enable();
        }, function (error) {
            _shared_classes_material_service__WEBPACK_IMPORTED_MODULE_8__["MaterialService"].toast(error.error.message);
            _this.form.enable();
        });
    };
    CategoriesFormComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _shared_services_categories_service__WEBPACK_IMPORTED_MODULE_5__["CategoriesService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    CategoriesFormComponent.propDecorators = {
        inputRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ['input',] }]
    };
    CategoriesFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-categories-form',
            template: _raw_loader_categories_form_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_categories_form_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _shared_services_categories_service__WEBPACK_IMPORTED_MODULE_5__["CategoriesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], CategoriesFormComponent);
    return CategoriesFormComponent;
}());



/***/ }),

/***/ "0wQc":
/*!**********************************************************************!*\
  !*** ./src/app/shared/layouts/auth-layout/auth-layout.component.css ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhdXRoLWxheW91dC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "1/z6":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/history-page/history-filter/history-filter.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"filter\">\n  <div class=\"fr\">\n    <div class=\"col order\">\n      <div class=\"input-field inline order-position-input\">\n        <input type=\"number\" id=\"number\" min=\"1\" [(ngModel)]=\"order\">\n        <label for=\"number\">Номер заказа</label>\n      </div>\n    </div>\n    <div class=\"col filter-pickers\">\n      <div class=\"input-field\">\n        <input type=\"text\" #start>\n        <label>Начало</label>\n      </div>\n\n      <div class=\"input-field\">\n        <input type=\"text\" #end>\n        <label>Конец</label>\n      </div>\n    </div>\n  </div>\n\n  <button\n    class=\"btn waves-effect wavers-light btn-small\"\n    (click)=\"submitFilter()\"\n    [disabled]=\"!isValid\"\n  >Применить фильтр</button>\n</div>\n");

/***/ }),

/***/ "222H":
/*!*******************************************************************************!*\
  !*** ./src/app/categories-page/categories-form/categories-form.component.css ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".dn {\r\n  display: none;\r\n}\r\n\r\n\r\n.h200 {\r\n  height: 200px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhdGVnb3JpZXMtZm9ybS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtBQUNmOzs7QUFHQTtFQUNFLGFBQWE7QUFDZiIsImZpbGUiOiJjYXRlZ29yaWVzLWZvcm0uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kbiB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuXHJcbi5oMjAwIHtcclxuICBoZWlnaHQ6IDIwMHB4O1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "421p":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/analytics-page/analytics-page.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"page-title\">\n  <h4>Аналитика</h4>\n</div>\n\n<div [style.display]=\"pending ? 'none' : 'block'\">\n  <div class=\"average-price\">\n    <p>Средний чек <strong>{{average}} р.</strong></p>\n  </div>\n\n  <div class=\"analytics-block pb3\">\n    <h5>Выручка</h5>\n    <canvas #gain></canvas>\n  </div>\n\n  <div class=\"analytics-block\">\n    <h5>Заказы</h5>\n    <canvas #order></canvas>\n  </div>\n</div>\n\n<app-loader *ngIf=\"pending\"></app-loader>\n");

/***/ }),

/***/ "5sb5":
/*!**********************************************************!*\
  !*** ./src/app/overview-page/overview-page.component.ts ***!
  \**********************************************************/
/*! exports provided: OverviewPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OverviewPageComponent", function() { return OverviewPageComponent; });
/* harmony import */ var _raw_loader_overview_page_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./overview-page.component.html */ "Un/M");
/* harmony import */ var _overview_page_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./overview-page.component.css */ "O8V4");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_services_analytics_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/services/analytics.service */ "/yY+");
/* harmony import */ var _shared_classes_material_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/classes/material.service */ "O+p6");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var OverviewPageComponent = /** @class */ (function () {
    function OverviewPageComponent(service) {
        this.service = service;
        this.yesterday = new Date();
    }
    OverviewPageComponent.prototype.ngOnInit = function () {
        this.data$ = this.service.getOverview();
        this.yesterday.setDate(this.yesterday.getDate() - 1);
    };
    OverviewPageComponent.prototype.ngAfterViewInit = function () {
        this.tapTarget = _shared_classes_material_service__WEBPACK_IMPORTED_MODULE_4__["MaterialService"].initTapTarget(this.tapTargetRef);
    };
    OverviewPageComponent.prototype.ngOnDestroy = function () {
        this.tapTarget.destroy();
    };
    OverviewPageComponent.prototype.openInfo = function () {
        this.tapTarget.open();
    };
    OverviewPageComponent.ctorParameters = function () { return [
        { type: _shared_services_analytics_service__WEBPACK_IMPORTED_MODULE_3__["AnalyticsService"] }
    ]; };
    OverviewPageComponent.propDecorators = {
        tapTargetRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ['tapTarget',] }]
    };
    OverviewPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-overview-page',
            template: _raw_loader_overview_page_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_overview_page_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_shared_services_analytics_service__WEBPACK_IMPORTED_MODULE_3__["AnalyticsService"]])
    ], OverviewPageComponent);
    return OverviewPageComponent;
}());



/***/ }),

/***/ "668k":
/*!**************************************************************!*\
  !*** ./src/app/shared/components/loader/loader.component.ts ***!
  \**************************************************************/
/*! exports provided: LoaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderComponent", function() { return LoaderComponent; });
/* harmony import */ var _raw_loader_loader_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./loader.component.html */ "dO0u");
/* harmony import */ var _loader_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loader.component.css */ "xHJT");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LoaderComponent = /** @class */ (function () {
    function LoaderComponent() {
    }
    LoaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-loader',
            template: _raw_loader_loader_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_loader_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        })
    ], LoaderComponent);
    return LoaderComponent;
}());



/***/ }),

/***/ "8eXg":
/*!**************************************************************************!*\
  !*** ./src/app/history-page/history-filter/history-filter.component.css ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJoaXN0b3J5LWZpbHRlci5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "Apnu":
/*!*****************************************************!*\
  !*** ./src/app/order-page/order-page.component.css ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJvcmRlci1wYWdlLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "B3fL":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/layouts/auth-layout/auth-layout.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav>\n  <div class=\"nav-wrapper grey darken-1\">\n    <a routerLink=\"/\" class=\"brand-logo\">Redox</a>\n    <ul id=\"nav-mobile\" class=\"right hide-on-med-and-down\">\n      <li routerLinkActive=\"active\">\n        <a routerLink=\"/login\">Вход</a>\n      </li>\n      <li routerLinkActive=\"active\">\n        <a routerLink=\"/register\">Регистрация</a>\n      </li>\n    </ul>\n  </div>\n</nav>\n\n<div class=\"auth-block\">\n  <router-outlet></router-outlet>\n</div>\n");

/***/ }),

/***/ "Be1P":
/*!*********************************************!*\
  !*** ./src/app/order-page/order.service.ts ***!
  \*********************************************/
/*! exports provided: OrderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderService", function() { return OrderService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var OrderService = /** @class */ (function () {
    function OrderService() {
        this.list = [];
        this.price = 0;
    }
    OrderService.prototype.add = function (position) {
        var orderPosition = Object.assign({}, {
            name: position.name,
            cost: position.cost,
            quantity: position.quantity,
            _id: position._id
        });
        var candidate = this.list.find(function (p) { return p._id === orderPosition._id; });
        if (candidate) {
            // Изменяем кол-во
            candidate.quantity += orderPosition.quantity;
        }
        else {
            this.list.push(orderPosition);
        }
        this.computePrice();
    };
    OrderService.prototype.remove = function (orderPosition) {
        var idx = this.list.findIndex(function (p) { return p._id === orderPosition._id; });
        this.list.splice(idx, 1);
        this.computePrice();
    };
    OrderService.prototype.clear = function () {
        this.list = [];
        this.price = 0;
    };
    OrderService.prototype.computePrice = function () {
        this.price = this.list.reduce(function (total, item) {
            return total += item.quantity * item.cost;
        }, 0);
    };
    OrderService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], OrderService);
    return OrderService;
}());



/***/ }),

/***/ "E32o":
/*!*********************************************************************!*\
  !*** ./src/app/history-page/history-list/history-list.component.ts ***!
  \*********************************************************************/
/*! exports provided: HistoryListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoryListComponent", function() { return HistoryListComponent; });
/* harmony import */ var _raw_loader_history_list_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./history-list.component.html */ "hfOh");
/* harmony import */ var _history_list_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./history-list.component.css */ "h5eY");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_classes_material_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/classes/material.service */ "O+p6");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var HistoryListComponent = /** @class */ (function () {
    function HistoryListComponent() {
    }
    HistoryListComponent.prototype.ngOnDestroy = function () {
        this.modal.destroy();
    };
    HistoryListComponent.prototype.ngAfterViewInit = function () {
        this.modal = _shared_classes_material_service__WEBPACK_IMPORTED_MODULE_3__["MaterialService"].initModal(this.modalRef);
    };
    HistoryListComponent.prototype.computePrice = function (order) {
        return order.list.reduce(function (total, item) {
            return total += item.quantity * item.cost;
        }, 0);
    };
    HistoryListComponent.prototype.selectOrder = function (order) {
        this.selectedOrder = order;
        this.modal.open();
    };
    HistoryListComponent.prototype.closeModal = function () {
        this.modal.close();
    };
    HistoryListComponent.propDecorators = {
        orders: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        modalRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ['modal',] }]
    };
    HistoryListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-history-list',
            template: _raw_loader_history_list_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_history_list_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        })
    ], HistoryListComponent);
    return HistoryListComponent;
}());



/***/ }),

/***/ "E3d2":
/*!**************************************************************!*\
  !*** ./src/app/categories-page/categories-page.component.ts ***!
  \**************************************************************/
/*! exports provided: CategoriesPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesPageComponent", function() { return CategoriesPageComponent; });
/* harmony import */ var _raw_loader_categories_page_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./categories-page.component.html */ "n7Yf");
/* harmony import */ var _categories_page_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./categories-page.component.css */ "V2QK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_services_categories_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/services/categories.service */ "U5Sr");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CategoriesPageComponent = /** @class */ (function () {
    function CategoriesPageComponent(categoriesService) {
        this.categoriesService = categoriesService;
    }
    CategoriesPageComponent.prototype.ngOnInit = function () {
        this.categories$ = this.categoriesService.fetch();
    };
    CategoriesPageComponent.ctorParameters = function () { return [
        { type: _shared_services_categories_service__WEBPACK_IMPORTED_MODULE_3__["CategoriesService"] }
    ]; };
    CategoriesPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-categories-page',
            template: _raw_loader_categories_page_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_categories_page_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_shared_services_categories_service__WEBPACK_IMPORTED_MODULE_3__["CategoriesService"]])
    ], CategoriesPageComponent);
    return CategoriesPageComponent;
}());



/***/ }),

/***/ "EVyl":
/*!**********************************************!*\
  !*** ./src/app/shared/classes/auth.guard.ts ***!
  \**********************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ "IYfF");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthGuard = /** @class */ (function () {
    function AuthGuard(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        if (this.auth.isAuthenticated()) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(true);
        }
        else {
            this.router.navigate(['/login'], {
                queryParams: {
                    accessDenied: true
                }
            });
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(false);
        }
    };
    AuthGuard.prototype.canActivateChild = function (route, state) {
        return this.canActivate(route, state);
    };
    AuthGuard.ctorParameters = function () { return [
        { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"] }
    ]; };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "Ediq":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/order-page/order-positions/order-positions.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"positions$ | async as positions; else loader\">\n  <table class=\"highlight\" *ngIf=\"positions.length !== 0; else empty\">\n    <thead>\n    <tr>\n      <th>Название</th>\n      <th>Стоимость</th>\n      <th>Количество</th>\n      <th></th>\n    </tr>\n    </thead>\n\n    <tbody>\n    <tr *ngFor=\"let position of positions\">\n      <td>{{position.name}}</td>\n      <td>{{position.cost}} руб.</td>\n      <td>\n        <div class=\"input-field inline order-position-input\">\n          <input type=\"number\" value=\"1\" min=\"1\" [(ngModel)]=\"position.quantity\">\n        </div>\n      </td>\n      <td>\n        <button\n          class=\"btn waves-effect wavers-light btn-small\"\n          (click)=\"addToOrder(position)\"\n          [disabled]=\"!position.quantity\"\n        >Добавить</button>\n      </td>\n    </tr>\n    </tbody>\n  </table>\n\n  <ng-template #empty>\n    <div class=\"center\">В данной категории пока нет позиций.</div>\n  </ng-template>\n</div>\n\n<ng-template #loader>\n  <app-loader></app-loader>\n</ng-template>\n");

/***/ }),

/***/ "G5qy":
/*!*********************************************************!*\
  !*** ./src/app/history-page/history-page.component.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJoaXN0b3J5LXBhZ2UuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "GHRa":
/*!********************************************************!*\
  !*** ./src/app/history-page/history-page.component.ts ***!
  \********************************************************/
/*! exports provided: HistoryPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoryPageComponent", function() { return HistoryPageComponent; });
/* harmony import */ var _raw_loader_history_page_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./history-page.component.html */ "SIo+");
/* harmony import */ var _history_page_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./history-page.component.css */ "G5qy");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_classes_material_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/classes/material.service */ "O+p6");
/* harmony import */ var _shared_services_orders_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/services/orders.service */ "pmbY");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var STEP = 2;
var HistoryPageComponent = /** @class */ (function () {
    function HistoryPageComponent(ordersService) {
        this.ordersService = ordersService;
        this.isFilterVisible = false;
        this.orders = [];
        this.filter = {};
        this.offset = 0;
        this.limit = STEP;
        this.loading = false;
        this.reloading = false;
        this.noMoreOrders = false;
    }
    HistoryPageComponent.prototype.ngOnInit = function () {
        this.reloading = true;
        this.fetch();
    };
    HistoryPageComponent.prototype.fetch = function () {
        var _this = this;
        var params = Object.assign({}, this.filter, {
            offset: this.offset,
            limit: this.limit
        });
        this.oSub = this.ordersService.fetch(params).subscribe(function (orders) {
            _this.orders = _this.orders.concat(orders);
            _this.noMoreOrders = orders.length < STEP;
            _this.loading = false;
            _this.reloading = false;
        });
    };
    HistoryPageComponent.prototype.loadMore = function () {
        this.offset += STEP;
        this.loading = true;
        this.fetch();
    };
    HistoryPageComponent.prototype.ngOnDestroy = function () {
        this.tooltip.destroy();
        this.oSub.unsubscribe();
    };
    HistoryPageComponent.prototype.applyFilter = function (filter) {
        this.orders = [];
        this.offset = 0;
        this.filter = filter;
        this.reloading = true;
        this.fetch();
    };
    HistoryPageComponent.prototype.ngAfterViewInit = function () {
        this.tooltip = _shared_classes_material_service__WEBPACK_IMPORTED_MODULE_3__["MaterialService"].initTooltip(this.tooltipRef);
    };
    HistoryPageComponent.prototype.isFiltered = function () {
        return Object.keys(this.filter).length !== 0;
    };
    HistoryPageComponent.ctorParameters = function () { return [
        { type: _shared_services_orders_service__WEBPACK_IMPORTED_MODULE_4__["OrdersService"] }
    ]; };
    HistoryPageComponent.propDecorators = {
        tooltipRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ['tooltip',] }]
    };
    HistoryPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-history-page',
            template: _raw_loader_history_page_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_history_page_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_shared_services_orders_service__WEBPACK_IMPORTED_MODULE_4__["OrdersService"]])
    ], HistoryPageComponent);
    return HistoryPageComponent;
}());



/***/ }),

/***/ "IYfF":
/*!*************************************************!*\
  !*** ./src/app/shared/services/auth.service.ts ***!
  \*************************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
        this.token = null;
    }
    AuthService.prototype.register = function (user) {
        return this.http.post('/api/auth/register', user);
    };
    AuthService.prototype.login = function (user) {
        var _this = this;
        return this.http.post('/api/auth/login', user)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (_a) {
            var token = _a.token;
            localStorage.setItem('auth-token', token);
            _this.setToken(token);
        }));
    };
    AuthService.prototype.setToken = function (token) {
        this.token = token;
    };
    AuthService.prototype.getToken = function () {
        return this.token;
    };
    AuthService.prototype.isAuthenticated = function () {
        return !!this.token;
    };
    AuthService.prototype.logout = function () {
        this.setToken(null);
        localStorage.clear();
    };
    AuthService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "KSnv":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/register-page/register-page.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form\n  class=\"card\"\n  [formGroup]=\"form\"\n  (ngSubmit)=\"onSubmit()\"\n>\n  <div class=\"card-content\">\n    <span class=\"card-title\">Создать аккаунт</span>\n    <div class=\"input-field\">\n      <input\n        formControlName=\"email\"\n        id=\"email\"\n        type=\"email\"\n        [ngClass]=\"{'invalid': form.get('email').invalid && form.get('email').touched}\"\n      >\n      <label for=\"email\">Email:</label>\n      <span\n        class=\"helper-text red-text\"\n        *ngIf=\"form.get('email').invalid && form.get('email').touched\"\n      >\n        <span *ngIf=\"form.get('email').errors['required']\">Email не должен быть пустым</span>\n        <span *ngIf=\"form.get('email').errors['email']\">Введите корректный email адрес</span>\n      </span>\n    </div>\n    <div class=\"input-field\">\n      <input\n        id=\"password\"\n        type=\"password\"\n        formControlName=\"password\"\n        [ngClass]=\"{'invalid': form.get('password').invalid && form.get('password').touched}\"\n      >\n      <label for=\"password\">Пароль:</label>\n      <span\n        class=\"helper-text red-text\"\n        *ngIf=\"form.get('password').invalid && form.get('password').touched\"\n      >\n        <span *ngIf=\"form.get('password').errors['required']\">Пароль не должен быть пустым</span>\n        <span *ngIf=\"form.get('password').errors['minlength'] && form.get('password').errors['minlength']['requiredLength']\">\n          Пароль должен быть больше {{form.get('password').errors['minlength']['requiredLength']}} символов.\n          Сейчас {{form.get('password').errors['minlength']['actualLength']}}\n        </span>\n      </span>\n    </div>\n  </div>\n  <div class=\"card-action\">\n    <button\n      type=\"submit\"\n      class=\"modal-action btn waves-effect\"\n      [disabled]=\"form.invalid || form.disabled\"\n    >\n      Создать\n    </button>\n  </div>\n</form>\n\n");

/***/ }),

/***/ "O+p6":
/*!****************************************************!*\
  !*** ./src/app/shared/classes/material.service.ts ***!
  \****************************************************/
/*! exports provided: MaterialService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialService", function() { return MaterialService; });
var MaterialService = /** @class */ (function () {
    function MaterialService() {
    }
    MaterialService.toast = function (message) {
        M.toast({ html: message });
    };
    MaterialService.initializeFloatingButton = function (ref) {
        M.FloatingActionButton.init(ref.nativeElement);
    };
    MaterialService.updateTextInputs = function () {
        M.updateTextFields();
    };
    MaterialService.initModal = function (ref) {
        return M.Modal.init(ref.nativeElement);
    };
    MaterialService.initTooltip = function (ref) {
        return M.Tooltip.init(ref.nativeElement);
    };
    MaterialService.initDatepicker = function (ref, onClose) {
        return M.Datepicker.init(ref.nativeElement, {
            format: 'dd.mm.yyyy',
            showClearBtn: true,
            onClose: onClose
        });
    };
    MaterialService.initTapTarget = function (ref) {
        return M.TapTarget.init(ref.nativeElement);
    };
    return MaterialService;
}());



/***/ }),

/***/ "O8V4":
/*!***********************************************************!*\
  !*** ./src/app/overview-page/overview-page.component.css ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJvdmVydmlldy1wYWdlLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "Pibp":
/*!**************************************************************************!*\
  !*** ./src/app/order-page/order-positions/order-positions.component.css ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJvcmRlci1wb3NpdGlvbnMuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "RnhZ":
/*!**************************************************!*\
  !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "K/tc",
	"./af.js": "K/tc",
	"./ar": "jnO4",
	"./ar-dz": "o1bE",
	"./ar-dz.js": "o1bE",
	"./ar-kw": "Qj4J",
	"./ar-kw.js": "Qj4J",
	"./ar-ly": "HP3h",
	"./ar-ly.js": "HP3h",
	"./ar-ma": "CoRJ",
	"./ar-ma.js": "CoRJ",
	"./ar-sa": "gjCT",
	"./ar-sa.js": "gjCT",
	"./ar-tn": "bYM6",
	"./ar-tn.js": "bYM6",
	"./ar.js": "jnO4",
	"./az": "SFxW",
	"./az.js": "SFxW",
	"./be": "H8ED",
	"./be.js": "H8ED",
	"./bg": "hKrs",
	"./bg.js": "hKrs",
	"./bm": "p/rL",
	"./bm.js": "p/rL",
	"./bn": "kEOa",
	"./bn-bd": "loYQ",
	"./bn-bd.js": "loYQ",
	"./bn.js": "kEOa",
	"./bo": "0mo+",
	"./bo.js": "0mo+",
	"./br": "aIdf",
	"./br.js": "aIdf",
	"./bs": "JVSJ",
	"./bs.js": "JVSJ",
	"./ca": "1xZ4",
	"./ca.js": "1xZ4",
	"./cs": "PA2r",
	"./cs.js": "PA2r",
	"./cv": "A+xa",
	"./cv.js": "A+xa",
	"./cy": "l5ep",
	"./cy.js": "l5ep",
	"./da": "DxQv",
	"./da.js": "DxQv",
	"./de": "tGlX",
	"./de-at": "s+uk",
	"./de-at.js": "s+uk",
	"./de-ch": "u3GI",
	"./de-ch.js": "u3GI",
	"./de.js": "tGlX",
	"./dv": "WYrj",
	"./dv.js": "WYrj",
	"./el": "jUeY",
	"./el.js": "jUeY",
	"./en-au": "Dmvi",
	"./en-au.js": "Dmvi",
	"./en-ca": "OIYi",
	"./en-ca.js": "OIYi",
	"./en-gb": "Oaa7",
	"./en-gb.js": "Oaa7",
	"./en-ie": "4dOw",
	"./en-ie.js": "4dOw",
	"./en-il": "czMo",
	"./en-il.js": "czMo",
	"./en-in": "7C5Q",
	"./en-in.js": "7C5Q",
	"./en-nz": "b1Dy",
	"./en-nz.js": "b1Dy",
	"./en-sg": "t+mt",
	"./en-sg.js": "t+mt",
	"./eo": "Zduo",
	"./eo.js": "Zduo",
	"./es": "iYuL",
	"./es-do": "CjzT",
	"./es-do.js": "CjzT",
	"./es-mx": "tbfe",
	"./es-mx.js": "tbfe",
	"./es-us": "Vclq",
	"./es-us.js": "Vclq",
	"./es.js": "iYuL",
	"./et": "7BjC",
	"./et.js": "7BjC",
	"./eu": "D/JM",
	"./eu.js": "D/JM",
	"./fa": "jfSC",
	"./fa.js": "jfSC",
	"./fi": "gekB",
	"./fi.js": "gekB",
	"./fil": "1ppg",
	"./fil.js": "1ppg",
	"./fo": "ByF4",
	"./fo.js": "ByF4",
	"./fr": "nyYc",
	"./fr-ca": "2fjn",
	"./fr-ca.js": "2fjn",
	"./fr-ch": "Dkky",
	"./fr-ch.js": "Dkky",
	"./fr.js": "nyYc",
	"./fy": "cRix",
	"./fy.js": "cRix",
	"./ga": "USCx",
	"./ga.js": "USCx",
	"./gd": "9rRi",
	"./gd.js": "9rRi",
	"./gl": "iEDd",
	"./gl.js": "iEDd",
	"./gom-deva": "qvJo",
	"./gom-deva.js": "qvJo",
	"./gom-latn": "DKr+",
	"./gom-latn.js": "DKr+",
	"./gu": "4MV3",
	"./gu.js": "4MV3",
	"./he": "x6pH",
	"./he.js": "x6pH",
	"./hi": "3E1r",
	"./hi.js": "3E1r",
	"./hr": "S6ln",
	"./hr.js": "S6ln",
	"./hu": "WxRl",
	"./hu.js": "WxRl",
	"./hy-am": "1rYy",
	"./hy-am.js": "1rYy",
	"./id": "UDhR",
	"./id.js": "UDhR",
	"./is": "BVg3",
	"./is.js": "BVg3",
	"./it": "bpih",
	"./it-ch": "bxKX",
	"./it-ch.js": "bxKX",
	"./it.js": "bpih",
	"./ja": "B55N",
	"./ja.js": "B55N",
	"./jv": "tUCv",
	"./jv.js": "tUCv",
	"./ka": "IBtZ",
	"./ka.js": "IBtZ",
	"./kk": "bXm7",
	"./kk.js": "bXm7",
	"./km": "6B0Y",
	"./km.js": "6B0Y",
	"./kn": "PpIw",
	"./kn.js": "PpIw",
	"./ko": "Ivi+",
	"./ko.js": "Ivi+",
	"./ku": "JCF/",
	"./ku.js": "JCF/",
	"./ky": "lgnt",
	"./ky.js": "lgnt",
	"./lb": "RAwQ",
	"./lb.js": "RAwQ",
	"./lo": "sp3z",
	"./lo.js": "sp3z",
	"./lt": "JvlW",
	"./lt.js": "JvlW",
	"./lv": "uXwI",
	"./lv.js": "uXwI",
	"./me": "KTz0",
	"./me.js": "KTz0",
	"./mi": "aIsn",
	"./mi.js": "aIsn",
	"./mk": "aQkU",
	"./mk.js": "aQkU",
	"./ml": "AvvY",
	"./ml.js": "AvvY",
	"./mn": "lYtQ",
	"./mn.js": "lYtQ",
	"./mr": "Ob0Z",
	"./mr.js": "Ob0Z",
	"./ms": "6+QB",
	"./ms-my": "ZAMP",
	"./ms-my.js": "ZAMP",
	"./ms.js": "6+QB",
	"./mt": "G0Uy",
	"./mt.js": "G0Uy",
	"./my": "honF",
	"./my.js": "honF",
	"./nb": "bOMt",
	"./nb.js": "bOMt",
	"./ne": "OjkT",
	"./ne.js": "OjkT",
	"./nl": "+s0g",
	"./nl-be": "2ykv",
	"./nl-be.js": "2ykv",
	"./nl.js": "+s0g",
	"./nn": "uEye",
	"./nn.js": "uEye",
	"./oc-lnc": "Fnuy",
	"./oc-lnc.js": "Fnuy",
	"./pa-in": "8/+R",
	"./pa-in.js": "8/+R",
	"./pl": "jVdC",
	"./pl.js": "jVdC",
	"./pt": "8mBD",
	"./pt-br": "0tRk",
	"./pt-br.js": "0tRk",
	"./pt.js": "8mBD",
	"./ro": "lyxo",
	"./ro.js": "lyxo",
	"./ru": "lXzo",
	"./ru.js": "lXzo",
	"./sd": "Z4QM",
	"./sd.js": "Z4QM",
	"./se": "//9w",
	"./se.js": "//9w",
	"./si": "7aV9",
	"./si.js": "7aV9",
	"./sk": "e+ae",
	"./sk.js": "e+ae",
	"./sl": "gVVK",
	"./sl.js": "gVVK",
	"./sq": "yPMs",
	"./sq.js": "yPMs",
	"./sr": "zx6S",
	"./sr-cyrl": "E+lV",
	"./sr-cyrl.js": "E+lV",
	"./sr.js": "zx6S",
	"./ss": "Ur1D",
	"./ss.js": "Ur1D",
	"./sv": "X709",
	"./sv.js": "X709",
	"./sw": "dNwA",
	"./sw.js": "dNwA",
	"./ta": "PeUW",
	"./ta.js": "PeUW",
	"./te": "XLvN",
	"./te.js": "XLvN",
	"./tet": "V2x9",
	"./tet.js": "V2x9",
	"./tg": "Oxv6",
	"./tg.js": "Oxv6",
	"./th": "EOgW",
	"./th.js": "EOgW",
	"./tk": "Wv91",
	"./tk.js": "Wv91",
	"./tl-ph": "Dzi0",
	"./tl-ph.js": "Dzi0",
	"./tlh": "z3Vd",
	"./tlh.js": "z3Vd",
	"./tr": "DoHr",
	"./tr.js": "DoHr",
	"./tzl": "z1FC",
	"./tzl.js": "z1FC",
	"./tzm": "wQk9",
	"./tzm-latn": "tT3J",
	"./tzm-latn.js": "tT3J",
	"./tzm.js": "wQk9",
	"./ug-cn": "YRex",
	"./ug-cn.js": "YRex",
	"./uk": "raLr",
	"./uk.js": "raLr",
	"./ur": "UpQW",
	"./ur.js": "UpQW",
	"./uz": "Loxo",
	"./uz-latn": "AQ68",
	"./uz-latn.js": "AQ68",
	"./uz.js": "Loxo",
	"./vi": "KSF8",
	"./vi.js": "KSF8",
	"./x-pseudo": "/X5v",
	"./x-pseudo.js": "/X5v",
	"./yo": "fzPg",
	"./yo.js": "fzPg",
	"./zh-cn": "XDpg",
	"./zh-cn.js": "XDpg",
	"./zh-hk": "SatO",
	"./zh-hk.js": "SatO",
	"./zh-mo": "OmwH",
	"./zh-mo.js": "OmwH",
	"./zh-tw": "kOpN",
	"./zh-tw.js": "kOpN"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "RnhZ";

/***/ }),

/***/ "SGNI":
/*!***************************************************************************!*\
  !*** ./src/app/order-page/order-categories/order-categories.component.ts ***!
  \***************************************************************************/
/*! exports provided: OrderCategoriesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderCategoriesComponent", function() { return OrderCategoriesComponent; });
/* harmony import */ var _raw_loader_order_categories_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./order-categories.component.html */ "yvfK");
/* harmony import */ var _order_categories_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./order-categories.component.css */ "vrme");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_services_categories_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/services/categories.service */ "U5Sr");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var OrderCategoriesComponent = /** @class */ (function () {
    function OrderCategoriesComponent(categoriesService) {
        this.categoriesService = categoriesService;
    }
    OrderCategoriesComponent.prototype.ngOnInit = function () {
        this.categories$ = this.categoriesService.fetch();
    };
    OrderCategoriesComponent.ctorParameters = function () { return [
        { type: _shared_services_categories_service__WEBPACK_IMPORTED_MODULE_3__["CategoriesService"] }
    ]; };
    OrderCategoriesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-order-categories',
            template: _raw_loader_order_categories_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_order_categories_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_shared_services_categories_service__WEBPACK_IMPORTED_MODULE_3__["CategoriesService"]])
    ], OrderCategoriesComponent);
    return OrderCategoriesComponent;
}());



/***/ }),

/***/ "SIo+":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/history-page/history-page.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"page-title\">\n  <h4>История заказов</h4>\n  <button\n    (click)=\"isFilterVisible = !isFilterVisible\"\n    class=\"btn btn-small\"\n    [ngClass]=\"{\n      'active': isFilterVisible,\n      'red': isFiltered()\n    }\"\n    data-tooltip=\"Открыть фильтр\"\n    data-position=\"left\"\n    #tooltip\n  >\n    <i class=\"material-icons\">filter_list</i>\n  </button>\n</div>\n\n<app-history-filter\n  *ngIf=\"isFilterVisible\"\n  (onFilter)=\"applyFilter($event)\"\n></app-history-filter>\n\n<div *ngIf=\"!reloading; else reloadingBlock\">\n  <div *ngIf=\"orders.length > 0; else empty\">\n    <app-history-list [orders]=\"orders\"></app-history-list>\n    <div\n      class=\"center mb2\"\n      *ngIf=\"!noMoreOrders\"\n    >\n      <button\n        class=\"btn waves-effect grey darken-1 btn-small\"\n        (click)=\"loadMore()\"\n        *ngIf=\"!loading; else loader\"\n      >\n        Загрузить еще\n      </button>\n      <ng-template #loader>\n        <app-loader></app-loader>\n      </ng-template>\n    </div>\n  </div>\n  <ng-template #empty>\n    <div class=\"center\">Заказов пока нет.</div>\n  </ng-template>\n</div>\n\n<ng-template #reloadingBlock>\n  <app-loader></app-loader>\n</ng-template>\n\n\n");

/***/ }),

/***/ "Si0A":
/*!******************************************************!*\
  !*** ./src/app/shared/services/positions.service.ts ***!
  \******************************************************/
/*! exports provided: PositionsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PositionsService", function() { return PositionsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PositionsService = /** @class */ (function () {
    function PositionsService(http) {
        this.http = http;
    }
    PositionsService.prototype.fetch = function (categoryId) {
        return this.http.get("/api/position/" + categoryId);
    };
    PositionsService.prototype.create = function (position) {
        return this.http.post('/api/position', position);
    };
    PositionsService.prototype.update = function (position) {
        return this.http.patch("/api/position/" + position._id, position);
    };
    PositionsService.prototype.delete = function (position) {
        return this.http.delete("/api/position/" + position._id);
    };
    PositionsService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    PositionsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], PositionsService);
    return PositionsService;
}());



/***/ }),

/***/ "Ssqb":
/*!*********************************************************************!*\
  !*** ./src/app/shared/layouts/auth-layout/auth-layout.component.ts ***!
  \*********************************************************************/
/*! exports provided: AuthLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthLayoutComponent", function() { return AuthLayoutComponent; });
/* harmony import */ var _raw_loader_auth_layout_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./auth-layout.component.html */ "B3fL");
/* harmony import */ var _auth_layout_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth-layout.component.css */ "0wQc");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthLayoutComponent = /** @class */ (function () {
    function AuthLayoutComponent() {
    }
    AuthLayoutComponent.prototype.ngOnInit = function () {
    };
    AuthLayoutComponent.ctorParameters = function () { return []; };
    AuthLayoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-auth-layout',
            template: _raw_loader_auth_layout_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_auth_layout_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [])
    ], AuthLayoutComponent);
    return AuthLayoutComponent;
}());



/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/services/auth.service */ "IYfF");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(auth) {
        this.auth = auth;
    }
    AppComponent.prototype.ngOnInit = function () {
        var potentialToken = localStorage.getItem('auth-token');
        if (potentialToken !== null) {
            this.auth.setToken(potentialToken);
        }
    };
    AppComponent.ctorParameters = function () { return [
        { type: _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }
    ]; };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: '<router-outlet></router-outlet>'
        }),
        __metadata("design:paramtypes", [_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "U5Sr":
/*!*******************************************************!*\
  !*** ./src/app/shared/services/categories.service.ts ***!
  \*******************************************************/
/*! exports provided: CategoriesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesService", function() { return CategoriesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CategoriesService = /** @class */ (function () {
    function CategoriesService(http) {
        this.http = http;
    }
    CategoriesService.prototype.fetch = function () {
        return this.http.get('/api/category');
    };
    CategoriesService.prototype.getById = function (id) {
        return this.http.get("/api/category/" + id);
    };
    CategoriesService.prototype.create = function (name, image) {
        var fd = new FormData();
        if (image) {
            fd.append('image', image, image.name);
        }
        fd.append('name', name);
        return this.http.post('/api/category', fd);
    };
    CategoriesService.prototype.update = function (id, name, image) {
        var fd = new FormData();
        if (image) {
            fd.append('image', image, image.name);
        }
        fd.append('name', name);
        return this.http.patch("/api/category/" + id, fd);
    };
    CategoriesService.prototype.delete = function (id) {
        return this.http.delete("/api/category/" + id);
    };
    CategoriesService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    CategoriesService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], CategoriesService);
    return CategoriesService;
}());



/***/ }),

/***/ "Un/M":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/overview-page/overview-page.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"page-title\">\n  <h4>\n    Обзор за вчера\n    ({{yesterday | date:'dd.MM.yyyy'}})\n    <i class=\"material-icons black-text pointer\" (click)=\"openInfo()\">\n      info_outline\n    </i>\n  </h4>\n</div>\n\n<div\n  class=\"row\"\n  *ngIf=\"data$ | async as data; else loader\"\n>\n  <div class=\"col s12 l6\">\n    <div class=\"card light-blue lighten-2 white-text\">\n      <div class=\"card-content\">\n        <span class=\"card-title\">Выручка:</span>\n        <h3>{{data.gain.yesterday}} руб.</h3>\n        <h3\n          class=\"m0 mb1\"\n          [ngClass]=\"{\n            'green-text text-darken-2': data.gain.isHigher,\n            'red-text': !data.gain.isHigher\n          }\"\n        >\n          <i class=\"material-icons\">\n            {{data.gain.isHigher ? 'arrow_upward' : 'arrow_downward'}}\n          </i>\n          {{data.gain.percent}}%\n        </h3>\n        <p>\n          Выручка вашего бизнеса вчера на\n          {{data.gain.percent}}%\n          {{data.gain.isHigher ? 'выше' : 'ниже'}}\n          среднего:\n          {{data.gain.compare}}\n          руб. в день\n        </p>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"col s12 l6\">\n    <div class=\"card orange lighten-2 white-text\">\n      <div class=\"card-content\">\n        <span class=\"card-title\">Заказы:</span>\n        <h3>{{data.orders.yesterday}} зак.</h3>\n        <h3\n          class=\"m0 mb1\"\n          [ngClass]=\"{\n            'green-text text-darken-2': data.orders.isHigher,\n            'red-text': !data.orders.isHigher\n          }\"\n        >\n          <i class=\"material-icons\">\n            {{data.orders.isHigher ? 'arrow_upward' : 'arrow_downward'}}\n          </i>\n          {{data.orders.percent}}%\n        </h3>\n        <p>\n          Число заказов вчера на {{data.orders.percent}}%\n          {{data.orders.isHigher ? 'выше' : 'ниже'}}\n          среднего значения:\n          {{data.orders.compare}}\n          зак. в день\n        </p>\n      </div>\n    </div>\n  </div>\n</div>\n\n<ng-template #loader>\n  <app-loader></app-loader>\n</ng-template>\n\n\n<div class=\"tap-target\" data-target=\"menu\" #tapTarget>\n  <div class=\"tap-target-content\">\n    <h5>Зачем нужна эта страница?</h5>\n    <p>Страница “Обзор” покажет динамику продаж за предыдущий день. Сравнение со средним значениями поможет вам понять, как идут дела у Вашего бизнеса.</p>\n  </div>\n</div>\n");

/***/ }),

/***/ "V2QK":
/*!***************************************************************!*\
  !*** ./src/app/categories-page/categories-page.component.css ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYXRlZ29yaWVzLXBhZ2UuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "VNhK":
/*!**********************************************************************!*\
  !*** ./src/app/shared/layouts/site-layout/site-layout.component.css ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaXRlLWxheW91dC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "Vd4+":
/*!*************************************************************************!*\
  !*** ./src/app/order-page/order-positions/order-positions.component.ts ***!
  \*************************************************************************/
/*! exports provided: OrderPositionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderPositionsComponent", function() { return OrderPositionsComponent; });
/* harmony import */ var _raw_loader_order_positions_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./order-positions.component.html */ "Ediq");
/* harmony import */ var _order_positions_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./order-positions.component.css */ "Pibp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_services_positions_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/services/positions.service */ "Si0A");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _order_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../order.service */ "Be1P");
/* harmony import */ var _shared_classes_material_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/classes/material.service */ "O+p6");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var OrderPositionsComponent = /** @class */ (function () {
    function OrderPositionsComponent(route, positionsService, order) {
        this.route = route;
        this.positionsService = positionsService;
        this.order = order;
    }
    OrderPositionsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.positions$ = this.route.params
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function (params) {
            return _this.positionsService.fetch(params['id']);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (positions) {
            return positions.map(function (position) {
                position.quantity = 1;
                return position;
            });
        }));
    };
    OrderPositionsComponent.prototype.addToOrder = function (position) {
        _shared_classes_material_service__WEBPACK_IMPORTED_MODULE_7__["MaterialService"].toast("\u0414\u043E\u0431\u0430\u0432\u043B\u0435\u043D\u043E x" + position.quantity);
        this.order.add(position);
    };
    OrderPositionsComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _shared_services_positions_service__WEBPACK_IMPORTED_MODULE_4__["PositionsService"] },
        { type: _order_service__WEBPACK_IMPORTED_MODULE_6__["OrderService"] }
    ]; };
    OrderPositionsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-order-positions',
            template: _raw_loader_order_positions_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_order_positions_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _shared_services_positions_service__WEBPACK_IMPORTED_MODULE_4__["PositionsService"],
            _order_service__WEBPACK_IMPORTED_MODULE_6__["OrderService"]])
    ], OrderPositionsComponent);
    return OrderPositionsComponent;
}());



/***/ }),

/***/ "Wj/w":
/*!*********************************************************************!*\
  !*** ./src/app/shared/layouts/site-layout/site-layout.component.ts ***!
  \*********************************************************************/
/*! exports provided: SiteLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SiteLayoutComponent", function() { return SiteLayoutComponent; });
/* harmony import */ var _raw_loader_site_layout_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./site-layout.component.html */ "dYf6");
/* harmony import */ var _site_layout_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./site-layout.component.css */ "VNhK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth.service */ "IYfF");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _classes_material_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../classes/material.service */ "O+p6");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SiteLayoutComponent = /** @class */ (function () {
    function SiteLayoutComponent(auth, router) {
        this.auth = auth;
        this.router = router;
        this.links = [
            { url: '/overview', name: 'Обзор' },
            { url: '/analytics', name: 'Аналитика' },
            { url: '/history', name: 'История' },
            { url: '/order', name: 'Добавить заказ' },
            { url: '/categories', name: 'Ассортимент' }
        ];
    }
    SiteLayoutComponent.prototype.ngAfterViewInit = function () {
        _classes_material_service__WEBPACK_IMPORTED_MODULE_5__["MaterialService"].initializeFloatingButton(this.floatingRef);
    };
    SiteLayoutComponent.prototype.logout = function (event) {
        event.preventDefault();
        this.auth.logout();
        this.router.navigate(['/login']);
    };
    SiteLayoutComponent.ctorParameters = function () { return [
        { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
    ]; };
    SiteLayoutComponent.propDecorators = {
        floatingRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ['floating',] }]
    };
    SiteLayoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-site-layout',
            template: _raw_loader_site_layout_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_site_layout_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], SiteLayoutComponent);
    return SiteLayoutComponent;
}());



/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _login_page_login_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login-page/login-page.component */ "pT+O");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _shared_layouts_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/layouts/auth-layout/auth-layout.component */ "Ssqb");
/* harmony import */ var _shared_layouts_site_layout_site_layout_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared/layouts/site-layout/site-layout.component */ "Wj/w");
/* harmony import */ var _register_page_register_page_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./register-page/register-page.component */ "lH1B");
/* harmony import */ var _shared_classes_token_interceptor__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shared/classes/token.interceptor */ "rGb8");
/* harmony import */ var _overview_page_overview_page_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./overview-page/overview-page.component */ "5sb5");
/* harmony import */ var _analytics_page_analytics_page_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./analytics-page/analytics-page.component */ "p4ES");
/* harmony import */ var _history_page_history_page_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./history-page/history-page.component */ "GHRa");
/* harmony import */ var _order_page_order_page_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./order-page/order-page.component */ "rTIa");
/* harmony import */ var _categories_page_categories_page_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./categories-page/categories-page.component */ "E3d2");
/* harmony import */ var _shared_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./shared/components/loader/loader.component */ "668k");
/* harmony import */ var _categories_page_categories_form_categories_form_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./categories-page/categories-form/categories-form.component */ "0tAP");
/* harmony import */ var _categories_page_categories_form_positions_form_positions_form_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./categories-page/categories-form/positions-form/positions-form.component */ "st15");
/* harmony import */ var _order_page_order_categories_order_categories_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./order-page/order-categories/order-categories.component */ "SGNI");
/* harmony import */ var _order_page_order_positions_order_positions_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./order-page/order-positions/order-positions.component */ "Vd4+");
/* harmony import */ var _history_page_history_list_history_list_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./history-page/history-list/history-list.component */ "E32o");
/* harmony import */ var _history_page_history_filter_history_filter_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./history-page/history-filter/history-filter.component */ "o4wE");
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
                _login_page_login_page_component__WEBPACK_IMPORTED_MODULE_5__["LoginPageComponent"],
                _shared_layouts_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_7__["AuthLayoutComponent"],
                _shared_layouts_site_layout_site_layout_component__WEBPACK_IMPORTED_MODULE_8__["SiteLayoutComponent"],
                _register_page_register_page_component__WEBPACK_IMPORTED_MODULE_9__["RegisterPageComponent"],
                _overview_page_overview_page_component__WEBPACK_IMPORTED_MODULE_11__["OverviewPageComponent"],
                _analytics_page_analytics_page_component__WEBPACK_IMPORTED_MODULE_12__["AnalyticsPageComponent"],
                _history_page_history_page_component__WEBPACK_IMPORTED_MODULE_13__["HistoryPageComponent"],
                _order_page_order_page_component__WEBPACK_IMPORTED_MODULE_14__["OrderPageComponent"],
                _categories_page_categories_page_component__WEBPACK_IMPORTED_MODULE_15__["CategoriesPageComponent"],
                _shared_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_16__["LoaderComponent"],
                _categories_page_categories_form_categories_form_component__WEBPACK_IMPORTED_MODULE_17__["CategoriesFormComponent"],
                _categories_page_categories_form_positions_form_positions_form_component__WEBPACK_IMPORTED_MODULE_18__["PositionsFormComponent"],
                _order_page_order_categories_order_categories_component__WEBPACK_IMPORTED_MODULE_19__["OrderCategoriesComponent"],
                _order_page_order_positions_order_positions_component__WEBPACK_IMPORTED_MODULE_20__["OrderPositionsComponent"],
                _history_page_history_list_history_list_component__WEBPACK_IMPORTED_MODULE_21__["HistoryListComponent"],
                _history_page_history_filter_history_filter_component__WEBPACK_IMPORTED_MODULE_22__["HistoryFilterComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]
            ],
            providers: [
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"],
                    multi: true,
                    useClass: _shared_classes_token_interceptor__WEBPACK_IMPORTED_MODULE_10__["TokenInterceptor"]
                }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "b+Yd":
/*!*********************************************************************************************!*\
  !*** ./src/app/categories-page/categories-form/positions-form/positions-form.component.css ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwb3NpdGlvbnMtZm9ybS5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "bA+m":
/*!*****************************************************!*\
  !*** ./src/app/login-page/login-page.component.css ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2dpbi1wYWdlLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "cc8B":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/categories-page/categories-form/categories-form.component.html ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"page-title\">\n  <h4>\n    <a routerLink=\"/categories\">Категории</a>\n    <i class=\"material-icons\">keyboard_arrow_right</i>\n    {{isNew ? 'Добавить' : 'Редактировать'}} категорию\n  </h4>\n  <span>\n    <button\n      *ngIf=\"!isNew\"\n      class=\"btn btn-small red\"\n      (click)=\"deleteCategory()\"\n    >\n      <i class=\"material-icons\">delete</i>\n    </button>\n  </span>\n</div>\n\n<div class=\"row\">\n  <form class=\"col s12 l6\" [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\">\n    <div class=\"input-field\">\n      <input\n        formControlName=\"name\"\n        id=\"name\"\n        type=\"text\"\n        [ngClass]=\"{'invalid': form.get('name').invalid && form.get('name').touched}\"\n      >\n      <label for=\"name\">Название</label>\n      <span\n        class=\"helper-text red-text\"\n        *ngIf=\"form.get('name').invalid && form.get('name').touched\"\n      >\n        <span *ngIf=\"form.get('name').errors['required']\">\n          Имя категории не может быть пустым.\n        </span>\n      </span>\n    </div>\n\n    <div>\n      <input\n        type=\"file\"\n        class=\"dn\"\n        (change)=\"onFileUpload($event)\"\n        #input\n      >\n      <button\n        (click)=\"triggerClick()\"\n        [disabled]=\"form.disabled\"\n        type=\"button\"\n        class=\"waves-effect waves-light btn orange lighten-2 mb2\"\n      >\n        <i class=\"material-icons left\">backup</i>\n        Загрузить изображение\n      </button>\n    </div>\n\n    <div>\n      <button\n        type=\"submit\"\n        [disabled]=\"form.invalid || form.disabled\"\n        class=\"waves-effect waves-light btn\"\n      >\n        Сохранить изменения\n      </button>\n    </div>\n  </form>\n\n  <div class=\"col s12 l4 center\">\n    <img\n      class=\"responsive-img h200\"\n      [src]=\"imagePreview\"\n      *ngIf=\"imagePreview\"\n    >\n  </div>\n</div>\n\n<app-positions-form\n  *ngIf=\"category?._id\"\n  [categoryId]=\"category._id\"\n>\n</app-positions-form>\n");

/***/ }),

/***/ "crnd":
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
webpackEmptyAsyncContext.id = "crnd";

/***/ }),

/***/ "dO0u":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/loader/loader.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\n  <div class=\"col s12 center\">\n    <div class=\"preloader-wrapper active\">\n      <div class=\"spinner-layer spinner-red-only\">\n        <div class=\"circle-clipper left\">\n          <div class=\"circle\"></div>\n        </div>\n        <div class=\"gap-patch\">\n          <div class=\"circle\"></div>\n        </div>\n        <div class=\"circle-clipper right\">\n          <div class=\"circle\"></div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "dX9Q":
/*!*************************************************************!*\
  !*** ./src/app/analytics-page/analytics-page.component.css ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhbmFseXRpY3MtcGFnZS5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "dYf6":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/layouts/site-layout/site-layout.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ul class=\"sidenav sidenav-fixed a-sidenav\">\n  <h4>Redox</h4>\n\n  <li\n    class=\"bold\"\n    *ngFor=\"let link of links\"\n    routerLinkActive=\"active\"\n  >\n    <a [routerLink]=\"[link.url]\" class=\"waves-effect waves-orange\">\n      {{link.name}}\n    </a>\n  </li>\n\n  <li class=\"bold last\">\n    <a href=\"#\" class=\"waves-effect waves-orange\" (click)=\"logout($event)\">Выйти</a>\n  </li>\n</ul>\n\n<main class=\"content\">\n  <router-outlet></router-outlet>\n</main>\n\n<div class=\"fixed-action-btn\" #floating>\n  <a class=\"btn-floating btn-large red\">\n    <i class=\"large material-icons\">add</i>\n  </a>\n  <ul>\n    <li>\n      <a class=\"btn-floating green\" routerLink=\"/order\">\n        <i class=\"material-icons\">assignment</i>\n      </a>\n    </li>\n    <li>\n      <a class=\"btn-floating blue\" routerLink=\"/categories/new\">\n        <i class=\"material-icons\">list</i>\n      </a>\n    </li>\n  </ul>\n</div>\n\n\n<a id=\"menu\" class=\"waves-effect waves-light btn btn-floating\"><i class=\"material-icons\">info</i></a>\n\n\n");

/***/ }),

/***/ "h5eY":
/*!**********************************************************************!*\
  !*** ./src/app/history-page/history-list/history-list.component.css ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJoaXN0b3J5LWxpc3QuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "hfOh":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/history-page/history-list/history-list.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<table class=\"highlight mb2\">\n  <thead>\n  <tr>\n    <th>№</th>\n    <th>Дата</th>\n    <th>Время</th>\n    <th>Сумма</th>\n    <th></th>\n  </tr>\n  </thead>\n\n  <tbody>\n  <tr *ngFor=\"let order of orders\">\n    <td>{{order.order}}</td>\n    <td>{{order.date | date:'dd.MM.yyyy'}}</td>\n    <td>{{order.date | date:'HH:mm:ss'}}</td>\n    <td>{{computePrice(order)}} руб.</td>\n    <td>\n      <button class=\"btn btn-small grey darken-1\" (click)=\"selectOrder(order)\">\n        <i class=\"material-icons\">open_in_new</i>\n      </button>\n    </td>\n  </tr>\n  </tbody>\n</table>\n\n\n<div class=\"modal modal-fixed-footer\" #modal>\n  <div class=\"modal-content\" *ngIf=\"selectedOrder\">\n    <h4 class=\"mb1\">Заказ №{{selectedOrder.order}}</h4>\n    <table class=\"highlight\">\n      <thead>\n      <tr>\n        <th>Название</th>\n        <th>Количество</th>\n        <th>Цена</th>\n      </tr>\n      </thead>\n\n      <tbody>\n      <tr *ngFor=\"let item of selectedOrder.list\">\n        <td>{{item.name}}</td>\n        <td>{{item.quantity}}</td>\n        <td>{{item.cost}}</td>\n      </tr>\n      </tbody>\n    </table>\n    <div class=\"order-summary\">\n      <p>Общая стоимость <strong>{{computePrice(selectedOrder)}} руб.</strong></p>\n    </div>\n  </div>\n  <div class=\"modal-footer\">\n    <button\n      class=\"modal-action waves-effect waves-black btn-flat\"\n      (click)=\"closeModal()\"\n    >\n      Закрыть\n    </button>\n  </div>\n</div>\n");

/***/ }),

/***/ "kU5O":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/order-page/order-page.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"page-title\">\n  <h4 *ngIf=\"isRoot\">Заказ</h4>\n  <h4 *ngIf=\"!isRoot\">\n    <a routerLink=\"/order\">Заказ</a>\n    <i class=\"material-icons\">keyboard_arrow_right</i>\n    Добавить продукцию\n  </h4>\n  <button\n    class=\"waves-effect btn grey darken-1\"\n    (click)=\"open()\"\n    [disabled]=\"order.list.length === 0\"\n  >\n    Завершить\n  </button>\n</div>\n\n<router-outlet></router-outlet>\n\n\n<div #modal class=\"modal modal-fixed-footer\">\n  <div class=\"modal-content\">\n    <h4 class=\"mb1\">Ваш заказ</h4>\n    <table class=\"highlight\">\n      <thead>\n      <tr>\n        <th>Название</th>\n        <th>Количество</th>\n        <th>Цена</th>\n        <th></th>\n      </tr>\n      </thead>\n\n      <tbody>\n      <tr *ngFor=\"let item of order.list\">\n        <td>{{item.name}}</td>\n        <td>{{item.quantity}}</td>\n        <td>{{item.cost}}</td>\n        <td><i class=\"material-icons pointer\" (click)=\"removePosition(item)\">delete</i></td>\n      </tr>\n      </tbody>\n    </table>\n    <div class=\"order-summary\">\n      <p>Общая стоимость <strong>{{order.price}} руб.</strong></p>\n    </div>\n  </div>\n  <div class=\"modal-footer\">\n    <button\n      class=\"modal-action waves-effect waves-black btn-flat\"\n      (click)=\"cancel()\"\n      [disabled]=\"pending\"\n    >Отмена</button>\n    <button\n      class=\"modal-action btn waves-effect\"\n      (click)=\"submit()\"\n      [disabled]=\"order.list.length === 0 || pending\"\n    >Подтвердить</button>\n  </div>\n</div>\n");

/***/ }),

/***/ "lH1B":
/*!**********************************************************!*\
  !*** ./src/app/register-page/register-page.component.ts ***!
  \**********************************************************/
/*! exports provided: RegisterPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageComponent", function() { return RegisterPageComponent; });
/* harmony import */ var _raw_loader_register_page_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./register-page.component.html */ "KSnv");
/* harmony import */ var _register_page_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register-page.component.css */ "xFRQ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/services/auth.service */ "IYfF");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_classes_material_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/classes/material.service */ "O+p6");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var RegisterPageComponent = /** @class */ (function () {
    function RegisterPageComponent(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    RegisterPageComponent.prototype.ngOnInit = function () {
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(6)])
        });
    };
    RegisterPageComponent.prototype.ngOnDestroy = function () {
        if (this.aSub) {
            this.aSub.unsubscribe();
        }
    };
    RegisterPageComponent.prototype.onSubmit = function () {
        var _this = this;
        this.form.disable();
        this.aSub = this.auth.register(this.form.value).subscribe(function () {
            _this.router.navigate(['/login'], {
                queryParams: {
                    registered: true
                }
            });
        }, function (error) {
            _shared_classes_material_service__WEBPACK_IMPORTED_MODULE_6__["MaterialService"].toast(error.error.message);
            _this.form.enable();
        });
    };
    RegisterPageComponent.ctorParameters = function () { return [
        { type: _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
    ]; };
    RegisterPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-register-page',
            template: _raw_loader_register_page_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_register_page_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], RegisterPageComponent);
    return RegisterPageComponent;
}());



/***/ }),

/***/ "n7Yf":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/categories-page/categories-page.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"page-title\">\n  <h4>Категории</h4>\n  <button\n    class=\"waves-effect waves-light btn grey darken-1\"\n    routerLink=\"/categories/new\"\n  >\n    Добавить категорию\n  </button>\n</div>\n\n<div\n  class=\"row\"\n  *ngIf=\"categories$ | async as categories; else loader\"\n>\n  <div class=\"col s12\">\n    <div class=\"collection\" *ngIf=\"categories.length !== 0; else empty\">\n      <a\n        *ngFor=\"let category of categories\"\n        [routerLink]=\"['/categories', category._id]\"\n        class=\"collection-item\"\n      >\n        {{category.name}}\n      </a>\n    </div>\n    <ng-template #empty>\n      <div class=\"center\">\n        У вас нет ни одной категории\n      </div>\n    </ng-template>\n  </div>\n</div>\n\n<ng-template #loader>\n  <app-loader></app-loader>\n</ng-template>\n\n");

/***/ }),

/***/ "o4wE":
/*!*************************************************************************!*\
  !*** ./src/app/history-page/history-filter/history-filter.component.ts ***!
  \*************************************************************************/
/*! exports provided: HistoryFilterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoryFilterComponent", function() { return HistoryFilterComponent; });
/* harmony import */ var _raw_loader_history_filter_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./history-filter.component.html */ "1/z6");
/* harmony import */ var _history_filter_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./history-filter.component.css */ "8eXg");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_classes_material_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/classes/material.service */ "O+p6");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var HistoryFilterComponent = /** @class */ (function () {
    function HistoryFilterComponent() {
        this.onFilter = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.isValid = true;
    }
    HistoryFilterComponent.prototype.ngOnDestroy = function () {
        this.start.destroy();
        this.end.destroy();
    };
    HistoryFilterComponent.prototype.ngAfterViewInit = function () {
        this.start = _shared_classes_material_service__WEBPACK_IMPORTED_MODULE_3__["MaterialService"].initDatepicker(this.startRef, this.validate.bind(this));
        this.end = _shared_classes_material_service__WEBPACK_IMPORTED_MODULE_3__["MaterialService"].initDatepicker(this.endRef, this.validate.bind(this));
    };
    HistoryFilterComponent.prototype.validate = function () {
        if (!this.start.date || !this.end.date) {
            this.isValid = true;
            return;
        }
        this.isValid = this.start.date < this.end.date;
    };
    HistoryFilterComponent.prototype.submitFilter = function () {
        var filter = {};
        if (this.order) {
            filter.order = this.order;
        }
        if (this.start.date) {
            filter.start = this.start.date;
        }
        if (this.end.date) {
            filter.end = this.end.date;
        }
        this.onFilter.emit(filter);
    };
    HistoryFilterComponent.propDecorators = {
        onFilter: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }],
        startRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ['start',] }],
        endRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ['end',] }]
    };
    HistoryFilterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-history-filter',
            template: _raw_loader_history_filter_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_history_filter_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        })
    ], HistoryFilterComponent);
    return HistoryFilterComponent;
}());



/***/ }),

/***/ "p4ES":
/*!************************************************************!*\
  !*** ./src/app/analytics-page/analytics-page.component.ts ***!
  \************************************************************/
/*! exports provided: AnalyticsPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnalyticsPageComponent", function() { return AnalyticsPageComponent; });
/* harmony import */ var _raw_loader_analytics_page_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./analytics-page.component.html */ "421p");
/* harmony import */ var _analytics_page_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./analytics-page.component.css */ "dX9Q");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_services_analytics_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/services/analytics.service */ "/yY+");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! chart.js */ "MO+k");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(chart_js__WEBPACK_IMPORTED_MODULE_4__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AnalyticsPageComponent = /** @class */ (function () {
    function AnalyticsPageComponent(service) {
        this.service = service;
        this.pending = true;
    }
    AnalyticsPageComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        var gainConfig = {
            label: 'Выручка',
            color: 'rgb(255, 99, 132)'
        };
        var orderConfig = {
            label: 'Заказы',
            color: 'rgb(54, 162, 235)'
        };
        this.aSub = this.service.getAnalytics().subscribe(function (data) {
            _this.average = data.average;
            gainConfig.labels = data.chart.map(function (item) { return item.label; });
            gainConfig.data = data.chart.map(function (item) { return item.gain; });
            orderConfig.labels = data.chart.map(function (item) { return item.label; });
            orderConfig.data = data.chart.map(function (item) { return item.order; });
            // **** Gain ****
            // gainConfig.labels.push('08.05.2018')
            // gainConfig.labels.push('09.05.2018')
            // gainConfig.data.push(1500)
            // gainConfig.data.push(700)
            // **** /Gain ****
            // **** Order ****
            // orderConfig.labels.push('08.05.2018')
            // orderConfig.labels.push('09.05.2018')
            // orderConfig.data.push(5)
            // orderConfig.data.push(12)
            // **** /Order ****
            var gainCtx = _this.gainRef.nativeElement.getContext('2d');
            var orderCtx = _this.orderRef.nativeElement.getContext('2d');
            gainCtx.canvas.height = '300px';
            orderCtx.canvas.height = '300px';
            new chart_js__WEBPACK_IMPORTED_MODULE_4__["Chart"](gainCtx, createChartConfig(gainConfig));
            new chart_js__WEBPACK_IMPORTED_MODULE_4__["Chart"](orderCtx, createChartConfig(orderConfig));
            _this.pending = false;
        });
    };
    AnalyticsPageComponent.prototype.ngOnDestroy = function () {
        if (this.aSub) {
            this.aSub.unsubscribe();
        }
    };
    AnalyticsPageComponent.ctorParameters = function () { return [
        { type: _shared_services_analytics_service__WEBPACK_IMPORTED_MODULE_3__["AnalyticsService"] }
    ]; };
    AnalyticsPageComponent.propDecorators = {
        gainRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ['gain',] }],
        orderRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ['order',] }]
    };
    AnalyticsPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-analytics-page',
            template: _raw_loader_analytics_page_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_analytics_page_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_shared_services_analytics_service__WEBPACK_IMPORTED_MODULE_3__["AnalyticsService"]])
    ], AnalyticsPageComponent);
    return AnalyticsPageComponent;
}());

function createChartConfig(_a) {
    var labels = _a.labels, data = _a.data, label = _a.label, color = _a.color;
    return {
        type: 'line',
        options: {
            responsive: true
        },
        data: {
            labels: labels,
            datasets: [
                {
                    label: label, data: data,
                    borderColor: color,
                    steppedLine: false,
                    fill: false
                }
            ]
        }
    };
}


/***/ }),

/***/ "pT+O":
/*!****************************************************!*\
  !*** ./src/app/login-page/login-page.component.ts ***!
  \****************************************************/
/*! exports provided: LoginPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageComponent", function() { return LoginPageComponent; });
/* harmony import */ var _raw_loader_login_page_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./login-page.component.html */ "qqSv");
/* harmony import */ var _login_page_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login-page.component.css */ "bA+m");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/services/auth.service */ "IYfF");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_classes_material_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/classes/material.service */ "O+p6");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var LoginPageComponent = /** @class */ (function () {
    function LoginPageComponent(auth, router, route) {
        this.auth = auth;
        this.router = router;
        this.route = route;
    }
    LoginPageComponent.prototype.ngOnInit = function () {
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(6)])
        });
        this.route.queryParams.subscribe(function (params) {
            if (params['registered']) {
                _shared_classes_material_service__WEBPACK_IMPORTED_MODULE_6__["MaterialService"].toast('Теперь вы можете зайти в систему используя свои данные');
            }
            else if (params['accessDenied']) {
                _shared_classes_material_service__WEBPACK_IMPORTED_MODULE_6__["MaterialService"].toast('Для начала авторизуйтесь в системе');
            }
            else if (params['sessionFailed']) {
                _shared_classes_material_service__WEBPACK_IMPORTED_MODULE_6__["MaterialService"].toast('Пожалуйста войдите в систему заного');
            }
        });
    };
    LoginPageComponent.prototype.ngOnDestroy = function () {
        if (this.aSub) {
            this.aSub.unsubscribe();
        }
    };
    LoginPageComponent.prototype.onSubmit = function () {
        var _this = this;
        this.form.disable();
        this.aSub = this.auth.login(this.form.value).subscribe(function () { return _this.router.navigate(['/overview']); }, function (error) {
            _shared_classes_material_service__WEBPACK_IMPORTED_MODULE_6__["MaterialService"].toast(error.error.message);
            _this.form.enable();
        });
    };
    LoginPageComponent.ctorParameters = function () { return [
        { type: _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }
    ]; };
    LoginPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-login-page',
            template: _raw_loader_login_page_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_login_page_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]])
    ], LoginPageComponent);
    return LoginPageComponent;
}());



/***/ }),

/***/ "pmbY":
/*!***************************************************!*\
  !*** ./src/app/shared/services/orders.service.ts ***!
  \***************************************************/
/*! exports provided: OrdersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersService", function() { return OrdersService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var OrdersService = /** @class */ (function () {
    function OrdersService(http) {
        this.http = http;
    }
    OrdersService.prototype.create = function (order) {
        return this.http.post('/api/order', order);
    };
    OrdersService.prototype.fetch = function (params) {
        if (params === void 0) { params = {}; }
        return this.http.get('/api/order', {
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]({
                fromObject: params
            })
        });
    };
    OrdersService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }
    ]; };
    OrdersService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]])
    ], OrdersService);
    return OrdersService;
}());



/***/ }),

/***/ "qqSv":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login-page/login-page.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form\n  class=\"card\"\n  [formGroup]=\"form\"\n  (ngSubmit)=\"onSubmit()\"\n>\n  <div class=\"card-content\">\n    <span class=\"card-title\">Войти в систему</span>\n    <div class=\"input-field\">\n      <input\n        formControlName=\"email\"\n        id=\"email\"\n        type=\"email\"\n        [ngClass]=\"{'invalid': form.get('email').invalid && form.get('email').touched}\"\n      >\n      <label for=\"email\">Email:</label>\n      <span\n        class=\"helper-text red-text\"\n        *ngIf=\"form.get('email').invalid && form.get('email').touched\"\n      >\n        <span *ngIf=\"form.get('email').errors['required']\">Email не должен быть пустым</span>\n        <span *ngIf=\"form.get('email').errors['email']\">Введите корректный email адрес</span>\n      </span>\n    </div>\n    <div class=\"input-field\">\n      <input\n        id=\"password\"\n        type=\"password\"\n        formControlName=\"password\"\n        [ngClass]=\"{'invalid': form.get('password').invalid && form.get('password').touched}\"\n      >\n      <label for=\"password\">Пароль:</label>\n      <span\n        class=\"helper-text red-text\"\n        *ngIf=\"form.get('password').invalid && form.get('password').touched\"\n      >\n        <span *ngIf=\"form.get('password').errors['required']\">Пароль не должен быть пустым</span>\n        <span *ngIf=\"form.get('password').errors['minlength'] && form.get('password').errors['minlength']['requiredLength']\">\n          Пароль должен быть больше {{form.get('password').errors['minlength']['requiredLength']}} символов.\n          Сейчас {{form.get('password').errors['minlength']['actualLength']}}\n        </span>\n      </span>\n    </div>\n  </div>\n  <div class=\"card-action\">\n    <button\n      type=\"submit\"\n      class=\"modal-action btn waves-effect\"\n      [disabled]=\"form.invalid || form.disabled\"\n    >\n      Войти\n    </button>\n  </div>\n</form>\n");

/***/ }),

/***/ "rGb8":
/*!*****************************************************!*\
  !*** ./src/app/shared/classes/token.interceptor.ts ***!
  \*****************************************************/
/*! exports provided: TokenInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenInterceptor", function() { return TokenInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/auth.service */ "IYfF");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TokenInterceptor = /** @class */ (function () {
    function TokenInterceptor(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    TokenInterceptor.prototype.intercept = function (req, next) {
        var _this = this;
        if (this.auth.isAuthenticated()) {
            req = req.clone({
                setHeaders: {
                    Authorization: this.auth.getToken()
                }
            });
        }
        return next.handle(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) { return _this.handleAuthError(error); }));
    };
    TokenInterceptor.prototype.handleAuthError = function (error) {
        if (error.status === 401) {
            this.router.navigate(['/login'], {
                queryParams: {
                    sessionFailed: true
                }
            });
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error);
    };
    TokenInterceptor.ctorParameters = function () { return [
        { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
    ]; };
    TokenInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], TokenInterceptor);
    return TokenInterceptor;
}());



/***/ }),

/***/ "rTIa":
/*!****************************************************!*\
  !*** ./src/app/order-page/order-page.component.ts ***!
  \****************************************************/
/*! exports provided: OrderPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderPageComponent", function() { return OrderPageComponent; });
/* harmony import */ var _raw_loader_order_page_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./order-page.component.html */ "kU5O");
/* harmony import */ var _order_page_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./order-page.component.css */ "Apnu");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_classes_material_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/classes/material.service */ "O+p6");
/* harmony import */ var _order_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./order.service */ "Be1P");
/* harmony import */ var _shared_services_orders_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/services/orders.service */ "pmbY");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var OrderPageComponent = /** @class */ (function () {
    function OrderPageComponent(router, order, ordersService) {
        this.router = router;
        this.order = order;
        this.ordersService = ordersService;
        this.pending = false;
    }
    OrderPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isRoot = this.router.url === '/order';
        this.router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationEnd"]) {
                _this.isRoot = _this.router.url === '/order';
            }
        });
    };
    OrderPageComponent.prototype.ngOnDestroy = function () {
        this.modal.destroy();
        if (this.oSub) {
            this.oSub.unsubscribe();
        }
    };
    OrderPageComponent.prototype.ngAfterViewInit = function () {
        this.modal = _shared_classes_material_service__WEBPACK_IMPORTED_MODULE_4__["MaterialService"].initModal(this.modalRef);
    };
    OrderPageComponent.prototype.removePosition = function (orderPosition) {
        this.order.remove(orderPosition);
    };
    OrderPageComponent.prototype.open = function () {
        this.modal.open();
    };
    OrderPageComponent.prototype.cancel = function () {
        this.modal.close();
    };
    OrderPageComponent.prototype.submit = function () {
        var _this = this;
        this.pending = true;
        var order = {
            list: this.order.list.map(function (item) {
                delete item._id;
                return item;
            })
        };
        this.oSub = this.ordersService.create(order).subscribe(function (newOrder) {
            _shared_classes_material_service__WEBPACK_IMPORTED_MODULE_4__["MaterialService"].toast("\u0417\u0430\u043A\u0430\u0437 \u2116" + newOrder.order + " \u0431\u044B\u043B \u0434\u043E\u0431\u0430\u0432\u043B\u0435\u043D.");
            _this.order.clear();
        }, function (error) { return _shared_classes_material_service__WEBPACK_IMPORTED_MODULE_4__["MaterialService"].toast(error.error.message); }, function () {
            _this.modal.close();
            _this.pending = false;
        });
    };
    OrderPageComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _order_service__WEBPACK_IMPORTED_MODULE_5__["OrderService"] },
        { type: _shared_services_orders_service__WEBPACK_IMPORTED_MODULE_6__["OrdersService"] }
    ]; };
    OrderPageComponent.propDecorators = {
        modalRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ['modal',] }]
    };
    OrderPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-order-page',
            template: _raw_loader_order_page_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            providers: [_order_service__WEBPACK_IMPORTED_MODULE_5__["OrderService"]],
            styles: [_order_page_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _order_service__WEBPACK_IMPORTED_MODULE_5__["OrderService"],
            _shared_services_orders_service__WEBPACK_IMPORTED_MODULE_6__["OrdersService"]])
    ], OrderPageComponent);
    return OrderPageComponent;
}());



/***/ }),

/***/ "st15":
/*!********************************************************************************************!*\
  !*** ./src/app/categories-page/categories-form/positions-form/positions-form.component.ts ***!
  \********************************************************************************************/
/*! exports provided: PositionsFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PositionsFormComponent", function() { return PositionsFormComponent; });
/* harmony import */ var _raw_loader_positions_form_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./positions-form.component.html */ "/YaV");
/* harmony import */ var _positions_form_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./positions-form.component.css */ "b+Yd");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_services_positions_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/services/positions.service */ "Si0A");
/* harmony import */ var _shared_classes_material_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/classes/material.service */ "O+p6");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var PositionsFormComponent = /** @class */ (function () {
    function PositionsFormComponent(positionsService) {
        this.positionsService = positionsService;
        this.positions = [];
        this.loading = false;
        this.positionId = null;
    }
    PositionsFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required),
            cost: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](1, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].min(1)])
        });
        this.loading = true;
        this.positionsService.fetch(this.categoryId).subscribe(function (positions) {
            _this.positions = positions;
            _this.loading = false;
        });
    };
    PositionsFormComponent.prototype.ngOnDestroy = function () {
        this.modal.destroy();
    };
    PositionsFormComponent.prototype.ngAfterViewInit = function () {
        this.modal = _shared_classes_material_service__WEBPACK_IMPORTED_MODULE_4__["MaterialService"].initModal(this.modalRef);
    };
    PositionsFormComponent.prototype.onSelectPosition = function (position) {
        this.positionId = position._id;
        this.form.patchValue({
            name: position.name,
            cost: position.cost
        });
        this.modal.open();
        _shared_classes_material_service__WEBPACK_IMPORTED_MODULE_4__["MaterialService"].updateTextInputs();
    };
    PositionsFormComponent.prototype.onAddPosition = function () {
        this.positionId = null;
        this.form.reset({ name: null, cost: 1 });
        this.modal.open();
        _shared_classes_material_service__WEBPACK_IMPORTED_MODULE_4__["MaterialService"].updateTextInputs();
    };
    PositionsFormComponent.prototype.onDeletePosition = function (event, position) {
        var _this = this;
        event.stopPropagation();
        var decision = window.confirm("\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u043F\u043E\u0437\u0438\u0446\u0438\u044E \"" + position.name + "\"?");
        if (decision) {
            this.positionsService.delete(position).subscribe(function (response) {
                var idx = _this.positions.findIndex(function (p) { return p._id === position._id; });
                _this.positions.splice(idx, 1);
                _shared_classes_material_service__WEBPACK_IMPORTED_MODULE_4__["MaterialService"].toast(response.message);
            }, function (error) { return _shared_classes_material_service__WEBPACK_IMPORTED_MODULE_4__["MaterialService"].toast(error.error.message); });
        }
    };
    PositionsFormComponent.prototype.onCancel = function () {
        this.modal.close();
    };
    PositionsFormComponent.prototype.onSubmit = function () {
        var _this = this;
        this.form.disable();
        var newPosition = {
            name: this.form.value.name,
            cost: this.form.value.cost,
            category: this.categoryId
        };
        var completed = function () {
            _this.modal.close();
            _this.form.reset({ name: '', cost: 1 });
            _this.form.enable();
        };
        if (this.positionId) {
            newPosition._id = this.positionId;
            this.positionsService.update(newPosition).subscribe(function (position) {
                var idx = _this.positions.findIndex(function (p) { return p._id === position._id; });
                _this.positions[idx] = position;
                _shared_classes_material_service__WEBPACK_IMPORTED_MODULE_4__["MaterialService"].toast('Изменения сохранены');
            }, function (error) { return _shared_classes_material_service__WEBPACK_IMPORTED_MODULE_4__["MaterialService"].toast(error.error.message); }, completed);
        }
        else {
            this.positionsService.create(newPosition).subscribe(function (position) {
                _shared_classes_material_service__WEBPACK_IMPORTED_MODULE_4__["MaterialService"].toast('Позиция создана');
                _this.positions.push(position);
            }, function (error) { return _shared_classes_material_service__WEBPACK_IMPORTED_MODULE_4__["MaterialService"].toast(error.error.message); }, completed);
        }
    };
    PositionsFormComponent.ctorParameters = function () { return [
        { type: _shared_services_positions_service__WEBPACK_IMPORTED_MODULE_3__["PositionsService"] }
    ]; };
    PositionsFormComponent.propDecorators = {
        categoryId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"], args: ['categoryId',] }],
        modalRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ['modal',] }]
    };
    PositionsFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-positions-form',
            template: _raw_loader_positions_form_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_positions_form_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_shared_services_positions_service__WEBPACK_IMPORTED_MODULE_3__["PositionsService"]])
    ], PositionsFormComponent);
    return PositionsFormComponent;
}());



/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _login_page_login_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login-page/login-page.component */ "pT+O");
/* harmony import */ var _shared_layouts_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/layouts/auth-layout/auth-layout.component */ "Ssqb");
/* harmony import */ var _shared_layouts_site_layout_site_layout_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/layouts/site-layout/site-layout.component */ "Wj/w");
/* harmony import */ var _register_page_register_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./register-page/register-page.component */ "lH1B");
/* harmony import */ var _shared_classes_auth_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/classes/auth.guard */ "EVyl");
/* harmony import */ var _overview_page_overview_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./overview-page/overview-page.component */ "5sb5");
/* harmony import */ var _analytics_page_analytics_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./analytics-page/analytics-page.component */ "p4ES");
/* harmony import */ var _history_page_history_page_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./history-page/history-page.component */ "GHRa");
/* harmony import */ var _order_page_order_page_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./order-page/order-page.component */ "rTIa");
/* harmony import */ var _categories_page_categories_page_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./categories-page/categories-page.component */ "E3d2");
/* harmony import */ var _categories_page_categories_form_categories_form_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./categories-page/categories-form/categories-form.component */ "0tAP");
/* harmony import */ var _order_page_order_categories_order_categories_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./order-page/order-categories/order-categories.component */ "SGNI");
/* harmony import */ var _order_page_order_positions_order_positions_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./order-page/order-positions/order-positions.component */ "Vd4+");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var routes = [
    {
        path: '', component: _shared_layouts_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_3__["AuthLayoutComponent"], children: [
            { path: '', redirectTo: '/login', pathMatch: 'full' },
            { path: 'login', component: _login_page_login_page_component__WEBPACK_IMPORTED_MODULE_2__["LoginPageComponent"] },
            { path: 'register', component: _register_page_register_page_component__WEBPACK_IMPORTED_MODULE_5__["RegisterPageComponent"] }
        ]
    },
    {
        path: '', component: _shared_layouts_site_layout_site_layout_component__WEBPACK_IMPORTED_MODULE_4__["SiteLayoutComponent"], canActivate: [_shared_classes_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]], children: [
            { path: 'overview', component: _overview_page_overview_page_component__WEBPACK_IMPORTED_MODULE_7__["OverviewPageComponent"] },
            { path: 'analytics', component: _analytics_page_analytics_page_component__WEBPACK_IMPORTED_MODULE_8__["AnalyticsPageComponent"] },
            { path: 'history', component: _history_page_history_page_component__WEBPACK_IMPORTED_MODULE_9__["HistoryPageComponent"] },
            { path: 'order', component: _order_page_order_page_component__WEBPACK_IMPORTED_MODULE_10__["OrderPageComponent"], children: [
                    { path: '', component: _order_page_order_categories_order_categories_component__WEBPACK_IMPORTED_MODULE_13__["OrderCategoriesComponent"] },
                    { path: ':id', component: _order_page_order_positions_order_positions_component__WEBPACK_IMPORTED_MODULE_14__["OrderPositionsComponent"] }
                ] },
            { path: 'categories', component: _categories_page_categories_page_component__WEBPACK_IMPORTED_MODULE_11__["CategoriesPageComponent"] },
            { path: 'categories/new', component: _categories_page_categories_form_categories_form_component__WEBPACK_IMPORTED_MODULE_12__["CategoriesFormComponent"] },
            { path: 'categories/:id', component: _categories_page_categories_form_categories_form_component__WEBPACK_IMPORTED_MODULE_12__["CategoriesFormComponent"] }
        ]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
            ]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "vrme":
/*!****************************************************************************!*\
  !*** ./src/app/order-page/order-categories/order-categories.component.css ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJvcmRlci1jYXRlZ29yaWVzLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "xFRQ":
/*!***********************************************************!*\
  !*** ./src/app/register-page/register-page.component.css ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWdpc3Rlci1wYWdlLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "xHJT":
/*!***************************************************************!*\
  !*** ./src/app/shared/components/loader/loader.component.css ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2FkZXIuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "yvfK":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/order-page/order-categories/order-categories.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"categories$ | async as categories; else loader\">\n  <div class=\"frow order-row\" *ngIf=\"categories.length !== 0; else empty\">\n    <div\n      *ngFor=\"let category of categories\"\n      class=\"card waves-effect pointer\"\n      [routerLink]=\"['/order', category._id]\"\n    >\n      <div class=\"center\">\n        <img\n          [src]=\"category.imageSrc\"\n          class=\"responsive-img order-img\"\n        >\n      </div>\n      <div class=\"card-content center p10\">\n        <h5 class=\"m0\">{{category.name}}</h5>\n      </div>\n    </div>\n  </div>\n  <ng-template #empty>\n    <div class=\"center\">Категорий пока нет.</div>\n  </ng-template>\n</div>\n\n<ng-template #loader>\n  <app-loader></app-loader>\n</ng-template>\n");

/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "a3Wg");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var materialize_css_dist_js_materialize_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! materialize-css/dist/js/materialize.js */ "TVxV");
/* harmony import */ var materialize_css_dist_js_materialize_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(materialize_css_dist_js_materialize_js__WEBPACK_IMPORTED_MODULE_4__);





if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map