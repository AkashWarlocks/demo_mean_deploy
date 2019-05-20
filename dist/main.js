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

/***/ "./src/app/admin/admin-aim/admin-about.component.css":
/*!***********************************************************!*\
  !*** ./src/app/admin/admin-aim/admin-about.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\r\n    margin: 0;\r\n}\r\n\r\nh3 {\r\n    font-size: 150%;\r\n}\r\n\r\n.about {\r\n    background-color: #f4f4f4;\r\n    padding: 10px;\r\n}\r\n\r\nhr {\r\n    border: 1px solid #e67e22;\r\n    margin: 5px 0;\r\n}\r\n\r\n.about-body {\r\n    border: 1px solid #e67e22;\r\n    padding: 5px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vYWRtaW4tYWltL2FkbWluLWFib3V0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxTQUFTO0FBQ2I7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGFBQWE7QUFDakI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixZQUFZO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvYWRtaW4vYWRtaW4tYWltL2FkbWluLWFib3V0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqIHtcclxuICAgIG1hcmdpbjogMDtcclxufVxyXG5cclxuaDMge1xyXG4gICAgZm9udC1zaXplOiAxNTAlO1xyXG59XHJcblxyXG4uYWJvdXQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y0ZjRmNDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuXHJcbmhyIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlNjdlMjI7XHJcbiAgICBtYXJnaW46IDVweCAwO1xyXG59XHJcblxyXG4uYWJvdXQtYm9keSB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZTY3ZTIyO1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/admin/admin-aim/admin-about.component.html":
/*!************************************************************!*\
  !*** ./src/app/admin/admin-aim/admin-about.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n\r\n  <div class=\"col-md-4 col-sm-10 mx-auto mt-2\">\r\n    <div class=\"about\">\r\n      <div class=\"row\">\r\n        <div class=\"col-12\">\r\n          <button type=\"button\" routerLink=\"editaim\" class=\"btn-edit float-right\" skipLocationChange>Edit</button>\r\n          <h3>Aim</h3>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <hr>\r\n    <div class=\"about-body\">\r\n      <p>{{ about.aim }}</p>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"col-md-4 col-sm-10 mx-auto mt-2\">\r\n    <div class=\"about\">\r\n      <div class=\"row\">\r\n        <div class=\"col-12\">\r\n          <button type=\"button\" routerLink=\"edithistory\" class=\"btn-edit float-right\" skipLocationChange>Edit</button>\r\n          <h3>History</h3>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <hr>\r\n    <div class=\"about-body\">\r\n      <p>{{ about.history }}</p>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"col-md-4 col-sm-10 mx-auto mt-2\">\r\n    <div class=\"about\">\r\n      <div class=\"row\">\r\n        <div class=\"col-12\">\r\n          <button type=\"button\" routerLink=\"editphilosophy\" class=\"btn-edit float-right\" skipLocationChange>Edit</button>\r\n          <h3>Philosophy</h3>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <hr>\r\n    <div class=\"about-body\">\r\n      <p>{{ about.philosophy }}</p>\r\n    </div>\r\n  </div>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/admin/admin-aim/admin-about.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/admin/admin-aim/admin-about.component.ts ***!
  \**********************************************************/
/*! exports provided: AdminAboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminAboutComponent", function() { return AdminAboutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_about_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/about.service */ "./src/app/services/about.service.ts");



var AdminAboutComponent = /** @class */ (function () {
    function AdminAboutComponent(aboutService) {
        this.aboutService = aboutService;
    }
    AdminAboutComponent.prototype.ngOnInit = function () {
        this.about = this.aboutService.getAbout();
    };
    AdminAboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admin-about',
            template: __webpack_require__(/*! ./admin-about.component.html */ "./src/app/admin/admin-aim/admin-about.component.html"),
            styles: [__webpack_require__(/*! ./admin-about.component.css */ "./src/app/admin/admin-aim/admin-about.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_about_service__WEBPACK_IMPORTED_MODULE_2__["AboutService"]])
    ], AdminAboutComponent);
    return AdminAboutComponent;
}());



/***/ }),

/***/ "./src/app/admin/admin-aim/admin-edit-aim/admin-edit-aim.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/admin/admin-aim/admin-edit-aim/admin-edit-aim.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\r\n    margin: 0;\r\n}\r\n\r\nh3 {\r\n    font-size: 150%;\r\n}\r\n\r\n.edit-aim {\r\n    background-color: #f4f4f4;\r\n    padding: 10px;\r\n\r\n}\r\n\r\nhr {\r\n    border: 1px solid #e67e22;\r\n    margin:8px 0px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vYWRtaW4tYWltL2FkbWluLWVkaXQtYWltL2FkbWluLWVkaXQtYWltLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxTQUFTO0FBQ2I7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGFBQWE7O0FBRWpCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGNBQWM7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC9hZG1pbi9hZG1pbi1haW0vYWRtaW4tZWRpdC1haW0vYWRtaW4tZWRpdC1haW0uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIioge1xyXG4gICAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG5oMyB7XHJcbiAgICBmb250LXNpemU6IDE1MCU7XHJcbn1cclxuXHJcbi5lZGl0LWFpbSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjRmNGY0O1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuXHJcbn1cclxuXHJcbmhyIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlNjdlMjI7XHJcbiAgICBtYXJnaW46OHB4IDBweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/admin/admin-aim/admin-edit-aim/admin-edit-aim.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/admin/admin-aim/admin-edit-aim/admin-edit-aim.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row mt-2\">\r\n  <div class=\"edit-aim col-md-8 col-sm-10 mx-auto\">\r\n    <form (submit)=\"saveAim()\" [formGroup]=\"form\">\r\n      <div class=\"header\">\r\n        <h3>Aim</h3>\r\n      </div>\r\n      <hr>\r\n      <div class=\"body\">\r\n        <textarea class=\"aim\" name=\"aim\" id=\"aim\" rows=\"6\" formControlName=\"aim\" placeholder=\"Enter Aim\"></textarea>\r\n        <span *ngIf=\"!form.get('aim').valid && form.get('aim').touched\">*Please Enter Aim</span>\r\n      </div>\r\n      <hr>\r\n      <div class=\"footer\">\r\n        <div class=\"row\">\r\n          <div class=\"col-6\">\r\n            <button type=\"submit\" class=\"btn-save\">Save</button>\r\n          </div>\r\n          <div class=\"col-6\">\r\n            <button type=\"button\" class=\"btn-cancel float-right\" (click)=\"cancel()\">Cancel</button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/admin/admin-aim/admin-edit-aim/admin-edit-aim.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/admin/admin-aim/admin-edit-aim/admin-edit-aim.component.ts ***!
  \****************************************************************************/
/*! exports provided: AdminEditAimComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminEditAimComponent", function() { return AdminEditAimComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_about_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/about.service */ "./src/app/services/about.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var AdminEditAimComponent = /** @class */ (function () {
    function AdminEditAimComponent(aboutService, router, route) {
        this.aboutService = aboutService;
        this.router = router;
        this.route = route;
    }
    AdminEditAimComponent.prototype.ngOnInit = function () {
        this.aim = this.aboutService.getAbout().aim;
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            aim: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.aim, {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
            })
        });
    };
    AdminEditAimComponent.prototype.saveAim = function () {
        if (this.form.valid) {
            this.aboutService.saveAim(this.form.value.aim);
            this.form.reset();
            this.cancel();
        }
    };
    AdminEditAimComponent.prototype.cancel = function () {
        this.router.navigate(['/admin', 'about'], { relativeTo: this.route, skipLocationChange: true });
    };
    AdminEditAimComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admin-edit-aim',
            template: __webpack_require__(/*! ./admin-edit-aim.component.html */ "./src/app/admin/admin-aim/admin-edit-aim/admin-edit-aim.component.html"),
            styles: [__webpack_require__(/*! ./admin-edit-aim.component.css */ "./src/app/admin/admin-aim/admin-edit-aim/admin-edit-aim.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_about_service__WEBPACK_IMPORTED_MODULE_2__["AboutService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], AdminEditAimComponent);
    return AdminEditAimComponent;
}());



/***/ }),

/***/ "./src/app/admin/admin-aim/admin-edit-history/admin-edit-history.component.css":
/*!*************************************************************************************!*\
  !*** ./src/app/admin/admin-aim/admin-edit-history/admin-edit-history.component.css ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\r\n    margin: 0;\r\n}\r\n\r\nh3 {\r\n    font-size: 150%;\r\n}\r\n\r\n.edit-history {\r\n    background-color: #f4f4f4;\r\n    padding: 10px;\r\n\r\n}\r\n\r\nhr {\r\n    border: 1px solid #e67e22;\r\n    margin:8px 0px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vYWRtaW4tYWltL2FkbWluLWVkaXQtaGlzdG9yeS9hZG1pbi1lZGl0LWhpc3RvcnkuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsYUFBYTs7QUFFakI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsY0FBYztBQUNsQiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluLWFpbS9hZG1pbi1lZGl0LWhpc3RvcnkvYWRtaW4tZWRpdC1oaXN0b3J5LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqIHtcclxuICAgIG1hcmdpbjogMDtcclxufVxyXG5cclxuaDMge1xyXG4gICAgZm9udC1zaXplOiAxNTAlO1xyXG59XHJcblxyXG4uZWRpdC1oaXN0b3J5IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNGY0ZjQ7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG5cclxufVxyXG5cclxuaHIge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2U2N2UyMjtcclxuICAgIG1hcmdpbjo4cHggMHB4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/admin/admin-aim/admin-edit-history/admin-edit-history.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/admin/admin-aim/admin-edit-history/admin-edit-history.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row mt-2\">\r\n    <div class=\"edit-history col-md-8 col-sm-10 mx-auto\">\r\n      <form (submit)=\"saveHistory()\" [formGroup]=\"form\">\r\n        <div class=\"header\">\r\n          <h3>history</h3>\r\n        </div>\r\n        <hr>\r\n        <div class=\"body\">\r\n          <textarea class=\"history\" name=\"history\" id=\"history\" rows=\"6\" formControlName=\"history\" placeholder=\"Enter history\"></textarea>\r\n          <span *ngIf=\"!form.get('history').valid && form.get('history').touched\">*Please Enter History</span>\r\n        </div>\r\n        <hr>\r\n        <div class=\"footer\">\r\n          <div class=\"row\">\r\n            <div class=\"col-6\">\r\n              <button type=\"submit\" class=\"btn-save\">Save</button>\r\n            </div>\r\n            <div class=\"col-6\">\r\n              <button type=\"button\" class=\"btn-cancel float-right\" (click)=\"cancel()\">Cancel</button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>"

/***/ }),

/***/ "./src/app/admin/admin-aim/admin-edit-history/admin-edit-history.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/admin/admin-aim/admin-edit-history/admin-edit-history.component.ts ***!
  \************************************************************************************/
/*! exports provided: AdminEditHistoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminEditHistoryComponent", function() { return AdminEditHistoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_about_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/about.service */ "./src/app/services/about.service.ts");





var AdminEditHistoryComponent = /** @class */ (function () {
    function AdminEditHistoryComponent(aboutService, router, route) {
        this.aboutService = aboutService;
        this.router = router;
        this.route = route;
    }
    AdminEditHistoryComponent.prototype.ngOnInit = function () {
        this.history = this.aboutService.getAbout().history;
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            history: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.history, {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
            })
        });
    };
    AdminEditHistoryComponent.prototype.saveHistory = function () {
        if (this.form.valid) {
            this.aboutService.saveHistory(this.form.value.history);
            this.form.reset();
            this.cancel();
        }
    };
    AdminEditHistoryComponent.prototype.cancel = function () {
        this.router.navigate(['/admin', 'about'], { relativeTo: this.route, skipLocationChange: true });
    };
    AdminEditHistoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admin-edit-history',
            template: __webpack_require__(/*! ./admin-edit-history.component.html */ "./src/app/admin/admin-aim/admin-edit-history/admin-edit-history.component.html"),
            styles: [__webpack_require__(/*! ./admin-edit-history.component.css */ "./src/app/admin/admin-aim/admin-edit-history/admin-edit-history.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_about_service__WEBPACK_IMPORTED_MODULE_4__["AboutService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], AdminEditHistoryComponent);
    return AdminEditHistoryComponent;
}());



/***/ }),

/***/ "./src/app/admin/admin-aim/admin-edit-philosophy/admin-edit-philosophy.component.css":
/*!*******************************************************************************************!*\
  !*** ./src/app/admin/admin-aim/admin-edit-philosophy/admin-edit-philosophy.component.css ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\r\n    margin: 0;\r\n}\r\n\r\nh3 {\r\n    font-size: 150%;\r\n}\r\n\r\n.edit-philosophy {\r\n    background-color: #f4f4f4;\r\n    padding: 10px;\r\n\r\n}\r\n\r\nhr {\r\n    border: 1px solid #e67e22;\r\n    margin:8px 0px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vYWRtaW4tYWltL2FkbWluLWVkaXQtcGhpbG9zb3BoeS9hZG1pbi1lZGl0LXBoaWxvc29waHkuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsYUFBYTs7QUFFakI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsY0FBYztBQUNsQiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluLWFpbS9hZG1pbi1lZGl0LXBoaWxvc29waHkvYWRtaW4tZWRpdC1waGlsb3NvcGh5LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqIHtcclxuICAgIG1hcmdpbjogMDtcclxufVxyXG5cclxuaDMge1xyXG4gICAgZm9udC1zaXplOiAxNTAlO1xyXG59XHJcblxyXG4uZWRpdC1waGlsb3NvcGh5IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNGY0ZjQ7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG5cclxufVxyXG5cclxuaHIge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2U2N2UyMjtcclxuICAgIG1hcmdpbjo4cHggMHB4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/admin/admin-aim/admin-edit-philosophy/admin-edit-philosophy.component.html":
/*!********************************************************************************************!*\
  !*** ./src/app/admin/admin-aim/admin-edit-philosophy/admin-edit-philosophy.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row mt-2\">\r\n    <div class=\"edit-philosophy col-md-8 col-sm-10 mx-auto\">\r\n      <form (submit)=\"savePhilisophy()\" [formGroup]=\"form\">\r\n        <div class=\"header\">\r\n          <h3>philosophy</h3>\r\n        </div>\r\n        <hr>\r\n        <div class=\"body\">\r\n          <textarea class=\"philosophy\" name=\"philosophy\" id=\"philosophy\" rows=\"6\" formControlName=\"philosophy\" placeholder=\"Enter philosophy\"></textarea>\r\n          <span *ngIf=\"!form.get('philosophy').valid && form.get('philosophy').touched\">*Please Enter Philosophy</span>\r\n        </div>\r\n        <hr>\r\n        <div class=\"footer\">\r\n          <div class=\"row\">\r\n            <div class=\"col-6\">\r\n              <button type=\"submit\" class=\"btn-save\">Save</button>\r\n            </div>\r\n            <div class=\"col-6\">\r\n              <button type=\"button\" class=\"btn-cancel float-right\" (click)=\"cancel()\">Cancel</button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>"

/***/ }),

/***/ "./src/app/admin/admin-aim/admin-edit-philosophy/admin-edit-philosophy.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/admin/admin-aim/admin-edit-philosophy/admin-edit-philosophy.component.ts ***!
  \******************************************************************************************/
/*! exports provided: AdminEditPhilosophyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminEditPhilosophyComponent", function() { return AdminEditPhilosophyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_about_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/about.service */ "./src/app/services/about.service.ts");





var AdminEditPhilosophyComponent = /** @class */ (function () {
    function AdminEditPhilosophyComponent(aimService, router, route) {
        this.aimService = aimService;
        this.router = router;
        this.route = route;
    }
    AdminEditPhilosophyComponent.prototype.ngOnInit = function () {
        this.philosophy = this.aimService.getAbout().philosophy;
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            philosophy: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.philosophy, {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
            })
        });
    };
    AdminEditPhilosophyComponent.prototype.savePhilisophy = function () {
        if (this.form.valid) {
            this.aimService.savePhilosophy(this.form.value.philosophy);
            this.form.reset();
            this.cancel();
        }
    };
    AdminEditPhilosophyComponent.prototype.cancel = function () {
        this.router.navigate(['/admin', 'about'], { relativeTo: this.route, skipLocationChange: true });
    };
    AdminEditPhilosophyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admin-edit-philosophy',
            template: __webpack_require__(/*! ./admin-edit-philosophy.component.html */ "./src/app/admin/admin-aim/admin-edit-philosophy/admin-edit-philosophy.component.html"),
            styles: [__webpack_require__(/*! ./admin-edit-philosophy.component.css */ "./src/app/admin/admin-aim/admin-edit-philosophy/admin-edit-philosophy.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_about_service__WEBPACK_IMPORTED_MODULE_4__["AboutService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], AdminEditPhilosophyComponent);
    return AdminEditPhilosophyComponent;
}());



/***/ }),

/***/ "./src/app/admin/admin-article/admin-add-article/admin-add-article.component.css":
/*!***************************************************************************************!*\
  !*** ./src/app/admin/admin-article/admin-add-article/admin-add-article.component.css ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\r\n    margin: 0;\r\n}\r\nhr {\r\n    border: 1px solid #e67e22;\r\n    margin: 5px 0;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vYWRtaW4tYXJ0aWNsZS9hZG1pbi1hZGQtYXJ0aWNsZS9hZG1pbi1hZGQtYXJ0aWNsZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksU0FBUztBQUNiO0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIsYUFBYTtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluLWFydGljbGUvYWRtaW4tYWRkLWFydGljbGUvYWRtaW4tYWRkLWFydGljbGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIioge1xyXG4gICAgbWFyZ2luOiAwO1xyXG59XHJcbmhyIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlNjdlMjI7XHJcbiAgICBtYXJnaW46IDVweCAwO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/admin/admin-article/admin-add-article/admin-add-article.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/admin/admin-article/admin-add-article/admin-add-article.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row mt-2\">\r\n    <div class=\"col-10 mx-auto\">\r\n      <h4 class=\"text-center mb-3\">Add New Article</h4>\r\n      <form class=\"add_title\" (submit)=\"addArticle()\" [formGroup]=\"form\">\r\n        <div class=\"form-group\">\r\n          <label for=\"title\">Title : </label>\r\n          <input class=\"title\" type=\"text\" name=\"title\" id=\"title\" formControlName=\"title\" placeholder=\"Title\">\r\n          <span *ngIf=\"!form.get('title').valid && form.get('title').touched\">*Please enter Title</span>\r\n        </div>\r\n        \r\n        <div class=\"form-group\">\r\n          <label for=\"body\">Description : </label>\r\n          <textarea class=\"body\" name=\"body\" id=\"body\" rows=\"8\" formControlName=\"body\" placeholder=\"Description\"></textarea>\r\n          <span *ngIf=\"!form.get('body').valid && form.get('body').touched\">*Please enter Article Description</span>\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n          <label for=\"image\">Select Article Image : </label>\r\n          <input type=\"file\" id=\"image\" name=\"image\" formControlName=\"image\" (change)=\"onImagePicked($event)\">\r\n          <span *ngIf=\"!form.get('image').valid && form.get('image').touched\">*Please Select Image File</span>\r\n        </div>\r\n\r\n        <div class=\"row mt-1\" *ngIf=\"formError\">\r\n          <span>*Please Fill All Article Fields</span>\r\n        </div>\r\n        \r\n        <hr>\r\n        <button type=\"submit\" class=\"btn-add\">Save</button>\r\n        <button type=\"button\" class=\"btn-cancel float-right\" (click)=\"cancel()\">Cancel</button>\r\n      </form>\r\n    </div>\r\n  </div>"

/***/ }),

/***/ "./src/app/admin/admin-article/admin-add-article/admin-add-article.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/admin/admin-article/admin-add-article/admin-add-article.component.ts ***!
  \**************************************************************************************/
/*! exports provided: AdminAddArticleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminAddArticleComponent", function() { return AdminAddArticleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_articles_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/articles.service */ "./src/app/services/articles.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_image_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/image.service */ "./src/app/services/image.service.ts");
/* harmony import */ var _validators_form_validator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../validators/form.validator */ "./src/app/validators/form.validator.ts");







var AdminAddArticleComponent = /** @class */ (function () {
    function AdminAddArticleComponent(articleService, imageService, formValidator, router, route) {
        this.articleService = articleService;
        this.imageService = imageService;
        this.formValidator = formValidator;
        this.router = router;
        this.route = route;
        this.formError = false;
        this.imgExt = ['jpg', 'png'];
    }
    AdminAddArticleComponent.prototype.ngOnInit = function () {
        this.image = this.imageService.getNoImage();
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
            }),
            body: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
            }),
            image: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, {
                validators: [this.formValidator.imageValidate.bind(this)]
            })
        });
    };
    AdminAddArticleComponent.prototype.onImagePicked = function (event) {
        var _this = this;
        var file = event.target.files[0];
        if (file) {
            var ext = file.name.substring(file.name.lastIndexOf('.') + 1);
            if (!(this.imgExt.indexOf(ext) != -1)) {
                return;
            }
            var reader = new FileReader();
            reader.onload = function (event) {
                _this.image = event.target.result;
            };
            reader.readAsDataURL(file);
        }
    };
    AdminAddArticleComponent.prototype.addArticle = function () {
        if (this.form.invalid) {
            this.formError = true;
        }
        if (this.form.valid) {
            this.formError = false;
            this.articleService.addArticle(this.form.value.title, this.form.value.body, this.image);
            this.form.reset();
            this.cancel();
        }
    };
    AdminAddArticleComponent.prototype.cancel = function () {
        this.router.navigate(["/admin", "article"], { relativeTo: this.route, skipLocationChange: true });
    };
    AdminAddArticleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admin-add-article',
            template: __webpack_require__(/*! ./admin-add-article.component.html */ "./src/app/admin/admin-article/admin-add-article/admin-add-article.component.html"),
            styles: [__webpack_require__(/*! ./admin-add-article.component.css */ "./src/app/admin/admin-article/admin-add-article/admin-add-article.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_articles_service__WEBPACK_IMPORTED_MODULE_2__["ArticleService"],
            _services_image_service__WEBPACK_IMPORTED_MODULE_5__["ImageService"],
            _validators_form_validator__WEBPACK_IMPORTED_MODULE_6__["FormValidator"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], AdminAddArticleComponent);
    return AdminAddArticleComponent;
}());



/***/ }),

/***/ "./src/app/admin/admin-article/admin-article.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/admin/admin-article/admin-article.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\r\n    margin: 0;\r\n}\r\n\r\nh3 {\r\n    font-size: 150%;\r\n}\r\n\r\nhr {\r\n    border: 1px solid #e67e22;\r\n    margin: 5px auto;\r\n}\r\n\r\n.title {\r\n    text-decoration: none;\r\n    color: #000;\r\n    -webkit-text-decoration-color: transparent;\r\n            text-decoration-color: transparent;\r\n    transition: -webkit-text-decoration 0.2s, -webkit-text-decoration-color 0.2s;\r\n    transition: text-decoration 0.2s, text-decoration-color 0.2s;\r\n    transition: text-decoration 0.2s, text-decoration-color 0.2s, -webkit-text-decoration 0.2s, -webkit-text-decoration-color 0.2s;\r\n}\r\n\r\n.title:hover{\r\n    color: #000;\r\n    text-decoration: underline;\r\n    -webkit-text-decoration-color: #e67e22;\r\n            text-decoration-color: #e67e22;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vYWRtaW4tYXJ0aWNsZS9hZG1pbi1hcnRpY2xlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxTQUFTO0FBQ2I7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixXQUFXO0lBQ1gsMENBQWtDO1lBQWxDLGtDQUFrQztJQUNsQyw0RUFBNEQ7SUFBNUQsNERBQTREO0lBQTVELDhIQUE0RDtBQUNoRTs7QUFFQTtJQUNJLFdBQVc7SUFDWCwwQkFBMEI7SUFDMUIsc0NBQThCO1lBQTlCLDhCQUE4QjtBQUNsQyIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluLWFydGljbGUvYWRtaW4tYXJ0aWNsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XHJcbiAgICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbmgzIHtcclxuICAgIGZvbnQtc2l6ZTogMTUwJTtcclxufVxyXG5cclxuaHIge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2U2N2UyMjtcclxuICAgIG1hcmdpbjogNXB4IGF1dG87XHJcbn1cclxuXHJcbi50aXRsZSB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBjb2xvcjogIzAwMDtcclxuICAgIHRleHQtZGVjb3JhdGlvbi1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICB0cmFuc2l0aW9uOiB0ZXh0LWRlY29yYXRpb24gMC4ycywgdGV4dC1kZWNvcmF0aW9uLWNvbG9yIDAuMnM7XHJcbn1cclxuXHJcbi50aXRsZTpob3ZlcntcclxuICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICB0ZXh0LWRlY29yYXRpb24tY29sb3I6ICNlNjdlMjI7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/admin/admin-article/admin-article.component.html":
/*!******************************************************************!*\
  !*** ./src/app/admin/admin-article/admin-article.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n  <div class=\"row mt-2\">\r\n    <div class=\"col-10 mx-auto\">\r\n      <div class=\"row\">\r\n        <div class=\"col-6\">\r\n          <h3>Articles</h3>\r\n        </div>\r\n        <div class=\"col-6\">\r\n          <button class=\"new-btn float-right\" (click)=\"onNewArticle()\">Create New Article</button>\r\n        </div>\r\n      </div>\r\n      <hr>\r\n      <div class=\"table-responsive\" *ngIf=\"articles.length > 0; else empty_articles\">\r\n        <table class=\"table table-sm\">\r\n        <thead>\r\n          <tr>\r\n            <th>ID</th>\r\n            <th>Title</th>\r\n            <th>Edit</th>\r\n            <th>Delete</th>\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <tr class=\"article\" *ngFor=\"let article of articles, let i = index\">\r\n            <td>{{ i+1 }}</td>\r\n            <td>\r\n              <a class=\"title\" [routerLink]=\"article._id\" skipLocationChange>{{article.title}} </a>\r\n            </td>\r\n            <td>\r\n              <button type=\"button\" [routerLink]=\"[article._id, 'edit']\" class=\"btn-edit float-left\" skipLocationChange>Edit</button>\r\n            </td>\r\n            <td>\r\n              <button type=\"button\" class=\"btn-delete\" (click)=\"deleteArticle(article._id)\">Delete</button>\r\n            </td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n      </div>\r\n    <ng-template #empty_articles>\r\n      <h5 class=\"pl-3\">No Articles Available..</h5>\r\n    </ng-template>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/admin/admin-article/admin-article.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/admin/admin-article/admin-article.component.ts ***!
  \****************************************************************/
/*! exports provided: AdminArticleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminArticleComponent", function() { return AdminArticleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_articles_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/articles.service */ "./src/app/services/articles.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var AdminArticleComponent = /** @class */ (function () {
    function AdminArticleComponent(articleService, router, route) {
        this.articleService = articleService;
        this.router = router;
        this.route = route;
        this.articles = [];
    }
    AdminArticleComponent.prototype.ngOnInit = function () {
        this.articles = this.articleService.getArticles();
    };
    AdminArticleComponent.prototype.deleteArticle = function (id) {
        this.articleService.deleteArticle(id);
    };
    AdminArticleComponent.prototype.onNewArticle = function () {
        this.router.navigate(['new'], { relativeTo: this.route, skipLocationChange: true });
    };
    AdminArticleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admin-article',
            template: __webpack_require__(/*! ./admin-article.component.html */ "./src/app/admin/admin-article/admin-article.component.html"),
            styles: [__webpack_require__(/*! ./admin-article.component.css */ "./src/app/admin/admin-article/admin-article.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_articles_service__WEBPACK_IMPORTED_MODULE_2__["ArticleService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], AdminArticleComponent);
    return AdminArticleComponent;
}());



/***/ }),

/***/ "./src/app/admin/admin-article/admin-edit-article/admin-edit-article.component.css":
/*!*****************************************************************************************!*\
  !*** ./src/app/admin/admin-article/admin-edit-article/admin-edit-article.component.css ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\r\n    margin: 0;\r\n}\r\n\r\nhr {\r\n    border: 1px solid #e67e22;\r\n    margin: 8px 0;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vYWRtaW4tYXJ0aWNsZS9hZG1pbi1lZGl0LWFydGljbGUvYWRtaW4tZWRpdC1hcnRpY2xlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxTQUFTO0FBQ2I7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsYUFBYTtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluLWFydGljbGUvYWRtaW4tZWRpdC1hcnRpY2xlL2FkbWluLWVkaXQtYXJ0aWNsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XHJcbiAgICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbmhyIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlNjdlMjI7XHJcbiAgICBtYXJnaW46IDhweCAwO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/admin/admin-article/admin-edit-article/admin-edit-article.component.html":
/*!******************************************************************************************!*\
  !*** ./src/app/admin/admin-article/admin-edit-article/admin-edit-article.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row mt-2\">\r\n    <div class=\"col-10 mx-auto\">\r\n      <h4 class=\"text-center mb-3\">Edit Article</h4>\r\n      <form class=\"add_title\" (submit)=\"editArticle()\" [formGroup]=\"form\">\r\n        <div class=\"form-group\">\r\n           <label for=\"title\">Title : </label>\r\n            <input class=\"title\" type=\"text\" name=\"title\" id=\"title\" formControlName=\"title\" placeholder=\"Title\">\r\n          <span *ngIf=\"!form.get('title').valid && form.get('title').touched\">*Please enter Title</span>\r\n        </div>\r\n            \r\n        <div class=\"form-group\">\r\n          <label for=\"body\">Description : </label>\r\n          <textarea class=\"body\" name=\"body\" id=\"body\" rows=\"8\" formControlName=\"body\" placeholder=\"Description\"></textarea>\r\n          <span *ngIf=\"!form.get('body').valid && form.get('body').touched\">*Please enter Article Description</span>\r\n        </div>\r\n        \r\n        <div class=\"form-group\">\r\n          <label for=\"phone\">Select Article Image : </label>\r\n            <input type=\"file\" id=\"image\" name=\"image\" formControlName=\"image\" (change)=\"onImagePicked($event)\">\r\n          <span *ngIf=\"!form.get('image').valid && form.get('image').touched\">*Please Select Image File</span>\r\n\r\n        </div>\r\n\r\n        <div class=\"row mt-1\" *ngIf=\"formError\">\r\n          <span>*Please Fill All Article Fields</span>\r\n        </div>\r\n          \r\n        <hr>\r\n        <button type=\"submit\" class=\"btn-edit\">Save</button>\r\n        <button type=\"button\" class=\"btn-cancel float-right\" (click)=\"cancel()\">Cancel</button>\r\n      </form>\r\n    </div>\r\n  </div>"

/***/ }),

/***/ "./src/app/admin/admin-article/admin-edit-article/admin-edit-article.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/admin/admin-article/admin-edit-article/admin-edit-article.component.ts ***!
  \****************************************************************************************/
/*! exports provided: AdminEditArticleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminEditArticleComponent", function() { return AdminEditArticleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_articles_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/articles.service */ "./src/app/services/articles.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _validators_form_validator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../validators/form.validator */ "./src/app/validators/form.validator.ts");






var AdminEditArticleComponent = /** @class */ (function () {
    function AdminEditArticleComponent(articleService, formValidator, router, route) {
        this.articleService = articleService;
        this.formValidator = formValidator;
        this.router = router;
        this.route = route;
        this.imgExt = ['jpg', 'png'];
        this.formError = false;
    }
    AdminEditArticleComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .subscribe(function (params) {
            var id = params['id'];
            _this.article = _this.articleService.getArticle(id);
            _this.image = _this.article.image;
        });
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.article.title, {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
            }),
            body: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.article.body, {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
            }),
            image: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, {
                validators: [this.formValidator.imageValidate.bind(this)]
            })
        });
    };
    AdminEditArticleComponent.prototype.onImagePicked = function (event) {
        var _this = this;
        var file = event.target.files[0];
        if (file) {
            var ext = file.name.substring(file.name.lastIndexOf('.') + 1);
            if (!(this.imgExt.indexOf(ext) != -1)) {
                return;
            }
            var reader = new FileReader();
            reader.onload = function (event) {
                _this.image = event.target.result;
            };
            reader.readAsDataURL(file);
        }
    };
    AdminEditArticleComponent.prototype.editArticle = function () {
        if (this.form.invalid) {
            this.formError = true;
        }
        if (this.form.valid) {
            this.formError = false;
            var editedArticle = {
                _id: this.article._id,
                title: this.form.value.title,
                body: this.form.value.body,
                image: this.image
            };
            this.articleService.editArticle(editedArticle);
            this.cancel();
        }
    };
    AdminEditArticleComponent.prototype.cancel = function () {
        this.router.navigate(['/admin', 'article', this.article._id], { relativeTo: this.route, skipLocationChange: true });
    };
    AdminEditArticleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admin-edit-article',
            template: __webpack_require__(/*! ./admin-edit-article.component.html */ "./src/app/admin/admin-article/admin-edit-article/admin-edit-article.component.html"),
            styles: [__webpack_require__(/*! ./admin-edit-article.component.css */ "./src/app/admin/admin-article/admin-edit-article/admin-edit-article.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_articles_service__WEBPACK_IMPORTED_MODULE_2__["ArticleService"],
            _validators_form_validator__WEBPACK_IMPORTED_MODULE_5__["FormValidator"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], AdminEditArticleComponent);
    return AdminEditArticleComponent;
}());



/***/ }),

/***/ "./src/app/admin/admin-article/admin-show-article/admin-show-article.component.css":
/*!*****************************************************************************************!*\
  !*** ./src/app/admin/admin-article/admin-show-article/admin-show-article.component.css ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".article {\r\n    background-color: #f4f4f4;\r\n    padding: 5px;\r\n}\r\n\r\n.image {\r\n    width: 75%;\r\n    margin: auto;\r\n}\r\n\r\nh3{\r\n    font-size: 150%;\r\n    text-decoration: underline;\r\n    -webkit-text-decoration-color: #ffd000;\r\n            text-decoration-color: #ffd000;\r\n}\r\n\r\nhr {\r\n    border: 1px solid #e67e22;\r\n    margin: 5px 0;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vYWRtaW4tYXJ0aWNsZS9hZG1pbi1zaG93LWFydGljbGUvYWRtaW4tc2hvdy1hcnRpY2xlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx5QkFBeUI7SUFDekIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFVBQVU7SUFDVixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLDBCQUEwQjtJQUMxQixzQ0FBOEI7WUFBOUIsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGFBQWE7QUFDakIiLCJmaWxlIjoic3JjL2FwcC9hZG1pbi9hZG1pbi1hcnRpY2xlL2FkbWluLXNob3ctYXJ0aWNsZS9hZG1pbi1zaG93LWFydGljbGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hcnRpY2xlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNGY0ZjQ7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbn1cclxuXHJcbi5pbWFnZSB7XHJcbiAgICB3aWR0aDogNzUlO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG59XHJcblxyXG5oM3tcclxuICAgIGZvbnQtc2l6ZTogMTUwJTtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uLWNvbG9yOiAjZmZkMDAwO1xyXG59XHJcblxyXG5ociB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZTY3ZTIyO1xyXG4gICAgbWFyZ2luOiA1cHggMDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/admin/admin-article/admin-show-article/admin-show-article.component.html":
/*!******************************************************************************************!*\
  !*** ./src/app/admin/admin-article/admin-show-article/admin-show-article.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row mt-2\">\r\n  <div class=\"col-10 mx-auto\">\r\n\r\n    <div class=\"article p-3\">\r\n\r\n      <div class=\"row\">\r\n        <div class=\"col-12\">\r\n          <button type=\"button\" class=\"btn-close float-right\" (click)=\"cancel()\">X</button>\r\n          <h3>{{article.title}}</h3>\r\n        </div>\r\n      </div>\r\n\r\n      <hr>\r\n\r\n      <div class=\"row\">\r\n        <div class=\"col-md-4 col-sm-12\">\r\n          <div class=\"image\">\r\n            <img [src]=\"article.image\" [alt]=\"article.title\" width=\"100%\">\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-8 col-sm-12\">\r\n          <p>{{article.body}}</p>    \r\n        </div>\r\n      </div>\r\n\r\n      <hr>\r\n      <div class=\"row\">\r\n        <div class=\"col-11 mx-auto\">\r\n          <button type=\"button\" class=\"btn-edit ml-3\" (click)= \"edit()\">Edit</button>\r\n          <button type=\"button\" class=\"btn-delete mr-3 float-right\" (click)=\"delete()\">Delete</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/admin/admin-article/admin-show-article/admin-show-article.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/admin/admin-article/admin-show-article/admin-show-article.component.ts ***!
  \****************************************************************************************/
/*! exports provided: AdminShowArticleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminShowArticleComponent", function() { return AdminShowArticleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_articles_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/articles.service */ "./src/app/services/articles.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");





var AdminShowArticleComponent = /** @class */ (function () {
    function AdminShowArticleComponent(articleService, router, route, _location) {
        this.articleService = articleService;
        this.router = router;
        this.route = route;
        this._location = _location;
    }
    AdminShowArticleComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .subscribe(function (params) {
            var id = params['id'];
            _this.article = _this.articleService.getArticle(id);
        });
    };
    AdminShowArticleComponent.prototype.edit = function () {
        this.router.navigate(['edit'], { relativeTo: this.route, skipLocationChange: true });
    };
    AdminShowArticleComponent.prototype.delete = function () {
        this.articleService.deleteArticle(this.article._id);
        this.cancel();
    };
    AdminShowArticleComponent.prototype.cancel = function () {
        this.router.navigate(['/admin', 'article'], { relativeTo: this.route, skipLocationChange: true });
    };
    AdminShowArticleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admin-show-article',
            template: __webpack_require__(/*! ./admin-show-article.component.html */ "./src/app/admin/admin-article/admin-show-article/admin-show-article.component.html"),
            styles: [__webpack_require__(/*! ./admin-show-article.component.css */ "./src/app/admin/admin-article/admin-show-article/admin-show-article.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_articles_service__WEBPACK_IMPORTED_MODULE_2__["ArticleService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"]])
    ], AdminShowArticleComponent);
    return AdminShowArticleComponent;
}());



/***/ }),

/***/ "./src/app/admin/admin-branch/admin-add-branch/admin-add-branch.component.css":
/*!************************************************************************************!*\
  !*** ./src/app/admin/admin-branch/admin-add-branch/admin-add-branch.component.css ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\r\n    margin: 0;\r\n}\r\n\r\nhr {\r\n    border: 1px solid #e67e22;\r\n    margin: 10px 0;\r\n}\r\n\r\nth, td {\r\n    padding: 0 5px;\r\n}\r\n\r\ntr, thead {\r\n    margin-bottom: 5px;\r\n}\r\n\r\n.batches-border {\r\n    border: 1px solid #e67e22;\r\n    padding: 3px;\r\n}\r\n\r\n.weekDays-selector input {\r\n    display: none!important;\r\n  }\r\n\r\n.weekDays-selector input[type=checkbox] + label {\r\n    display: inline-block;\r\n    font-size: 70%;\r\n    border: 1px solid #e67e22;\r\n    border-radius: 50%;\r\n    background: #fff;\r\n    height: 35px;\r\n    width: 35px;\r\n    padding: 2px;\r\n    margin: 2px;\r\n    line-height: 30px;\r\n    text-align: center;\r\n    cursor: pointer;\r\n    transition: background 0.2s, color 0.2s;\r\n  }\r\n\r\n.weekDays-selector input[type=checkbox]:checked + label {\r\n    background: #e67e22;\r\n    color: #fff;\r\n  }\r\n\r\n.week {\r\n      padding-right: 10px;\r\n  }\r\n\r\n.schedule {\r\n      border: 1px solid #e67e22;\r\n      padding: 5px;\r\n  }\r\n\r\n.btn-delete {\r\n    font-size: 75%;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vYWRtaW4tYnJhbmNoL2FkbWluLWFkZC1icmFuY2gvYWRtaW4tYWRkLWJyYW5jaC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksU0FBUztBQUNiOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLFlBQVk7QUFDaEI7O0FBRUU7SUFDRSx1QkFBdUI7RUFDekI7O0FBRUE7SUFDRSxxQkFBcUI7SUFDckIsY0FBYztJQUNkLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixXQUFXO0lBQ1gsWUFBWTtJQUNaLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZix1Q0FBdUM7RUFDekM7O0FBRUE7SUFDRSxtQkFBbUI7SUFDbkIsV0FBVztFQUNiOztBQUVBO01BQ0ksbUJBQW1CO0VBQ3ZCOztBQUVBO01BQ0kseUJBQXlCO01BQ3pCLFlBQVk7RUFDaEI7O0FBRUE7SUFDRSxjQUFjO0VBQ2hCIiwiZmlsZSI6InNyYy9hcHAvYWRtaW4vYWRtaW4tYnJhbmNoL2FkbWluLWFkZC1icmFuY2gvYWRtaW4tYWRkLWJyYW5jaC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XHJcbiAgICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbmhyIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlNjdlMjI7XHJcbiAgICBtYXJnaW46IDEwcHggMDtcclxufVxyXG5cclxudGgsIHRkIHtcclxuICAgIHBhZGRpbmc6IDAgNXB4O1xyXG59XHJcblxyXG50ciwgdGhlYWQge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG59XHJcblxyXG4uYmF0Y2hlcy1ib3JkZXIge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2U2N2UyMjtcclxuICAgIHBhZGRpbmc6IDNweDtcclxufVxyXG5cclxuICAud2Vla0RheXMtc2VsZWN0b3IgaW5wdXQge1xyXG4gICAgZGlzcGxheTogbm9uZSFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIFxyXG4gIC53ZWVrRGF5cy1zZWxlY3RvciBpbnB1dFt0eXBlPWNoZWNrYm94XSArIGxhYmVsIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGZvbnQtc2l6ZTogNzAlO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2U2N2UyMjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBoZWlnaHQ6IDM1cHg7XHJcbiAgICB3aWR0aDogMzVweDtcclxuICAgIHBhZGRpbmc6IDJweDtcclxuICAgIG1hcmdpbjogMnB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDMwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuMnMsIGNvbG9yIDAuMnM7XHJcbiAgfVxyXG4gIFxyXG4gIC53ZWVrRGF5cy1zZWxlY3RvciBpbnB1dFt0eXBlPWNoZWNrYm94XTpjaGVja2VkICsgbGFiZWwge1xyXG4gICAgYmFja2dyb3VuZDogI2U2N2UyMjtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gIH1cclxuXHJcbiAgLndlZWsge1xyXG4gICAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG4gIH1cclxuXHJcbiAgLnNjaGVkdWxlIHtcclxuICAgICAgYm9yZGVyOiAxcHggc29saWQgI2U2N2UyMjtcclxuICAgICAgcGFkZGluZzogNXB4O1xyXG4gIH1cclxuXHJcbiAgLmJ0bi1kZWxldGUge1xyXG4gICAgZm9udC1zaXplOiA3NSU7XHJcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/admin/admin-branch/admin-add-branch/admin-add-branch.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/admin/admin-branch/admin-add-branch/admin-add-branch.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row mt-2\">\r\n  <div class=\"col-lg-8 col-md-8 col-sm-12 col-xs-12 col-12 mx-auto\">\r\n    <h4 class=\"text-center mb-3\">Add New Branch</h4>\r\n    <form class=\"\" (submit)=\"addAddress()\" [formGroup]=\"form\">\r\n\r\n      <div class=\"row\">\r\n\r\n        <div class=\"col-md-6 col-sm-12 \">\r\n          <div class=\"form-group\">\r\n            <label for=\"city\">City : </label>\r\n            <input class=\"city\" type=\"text\" name=\"city\" id=\"city\" formControlName=\"city\" placeholder=\"City\">\r\n            <span *ngIf=\"!form.get('city').valid && form.get('city').touched\">*Please enter City</span>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-md-6 col-sm-12 \">\r\n          <div class=\"form-group\">\r\n            <label for=\"branch\">Branch Name : </label>\r\n            <input class=\"branch\" type=\"text\" name=\"branch\" id=\"branch\" formControlName=\"branch\" placeholder=\"Branch\">\r\n            <span *ngIf=\"!form.get('branch').valid && form.get('branch').touched\">*Please enter Branch</span>\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n      \r\n      <div class=\"row\">\r\n          <div class=\"col-12\">\r\n            <div class=\"form-group \">\r\n              <label for=\"address\">Address : </label>\r\n              <textarea class=\"address\" name=\"address\" id=\"address\" rows=\"3\" formControlName=\"address\" placeholder=\"Address\"></textarea>\r\n              <span *ngIf=\"!form.get('address').valid && form.get('address').touched\">*Please enter Address</span>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n      <div class=\"row\">\r\n\r\n        <div class=\"col-md-6 col-sm-12 \">\r\n          <div class=\"form-group\">\r\n            <label for=\"email\">Email : </label>\r\n            <input class=\"email\" type=\"email\" name=\"email\" id=\"email\" formControlName=\"email\" placeholder=\"example@email.com\">\r\n            <span *ngIf=\"!form.get('email').valid && form.get('email').touched\">*Please enter valid Email</span>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-md-6 col-sm-12 \">\r\n          <div class=\"form-group\">\r\n            <label for=\"phone\">Phone : </label>\r\n            <input class=\"phone\" type=\"text\" pattern=\"\\d*\" name=\"phone\" id=\"phone\" maxlength=\"10\" minlength=\"10\" formControlName=\"phone\" placeholder=\"9876543210\">\r\n            <span *ngIf=\"!form.get('phone').valid && form.get('phone').touched\">*Please enter valid phone number</span>\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n\r\n      <div class=\"row\">\r\n          <div class=\"col-12\">\r\n            <div class=\"form-group \">\r\n              <label for=\"descripton\">Descripton : </label>\r\n              <textarea class=\"descripton\" name=\"descripton\" id=\"descripton\" rows=\"5\" formControlName=\"descripton\" placeholder=\"Descripton\"></textarea>\r\n              <span *ngIf=\"!form.get('descripton').valid && form.get('descripton').touched\">*Please enter Descripton</span>\r\n            </div>\r\n          </div>\r\n        \r\n      </div>\r\n\r\n      <div class=\"row\">\r\n        <div class=\"col-12\">\r\n          <div class=\"form-group \">\r\n            <label for=\"image\">Select Branch Images : </label>\r\n            <input type=\"file\" id=\"image\" name=\"image\" formControlName=\"image\" (change)=\"onImagePicked($event)\" multiple>\r\n            <span *ngIf=\"!form.get('image').valid && form.get('image').touched\">*Please Select Valid Image Files</span>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"row\">\r\n        <div class=\"col-12\">\r\n          <div class=\"form-group\">\r\n            <label for=\"batch\">Add Batches : </label>\r\n            <div class=\"batches-border\" id=\"batch\">\r\n              <form (submit)=\"addBatch()\" [formGroup]=\"batchForm\">\r\n                <div class=\"row\">\r\n                  <div class=\"col-md-4 col-sm-12 p-0\">\r\n                    <div class=\"form-group m-1\">\r\n                      <label for=\"week\">Week Type : </label>\r\n                      <select class=\"week\" name=\"week\" id=\"week\" formControlName=\"week\" (change)=\"scheduleChange()\">\r\n                        <option value=\"weekDays\" selected>Week Day</option>\r\n                        <option value=\"weekEnds\">Week End</option>\r\n                      </select>\r\n                      <span *ngIf=\"!batchForm.get('week').valid && batchForm.get('week').touched\">*Please Select Valid Week Type</span>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-md-8 col-sm-12 p-0\">\r\n                    <div class=\"form-group m-1\">\r\n                      <label>Select Days : </label>\r\n                      <div class=\"weekDays-selector batches-border\">\r\n                        <div formArrayName=\"weekDays\">\r\n                          <label *ngFor=\"let day of batchForm.get('weekDays').controls; let i = index\">\r\n                            <input type=\"checkbox\" [id]=\"week[i]\" class=\"weekday\" [formControlName]=\"i\" (change)=\"weekDay($event, i)\">\r\n                            <label [for]=\"week[i]\">{{week[i]}}</label>\r\n                          </label>\r\n                        </div>\r\n                      </div>\r\n                      <span *ngIf=\"!batchForm.get('weekDays').valid && weekdaysTouched\">*Please Select Week Days</span>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                  <div class=\"col-md-6 col-sm-12 p-0\">\r\n                    <div class=\"form-group m-1\">\r\n                      <label for=\"batchName\">Batch Name : </label>\r\n                      <input class=\"batchName\" type=\"text\" name=\"batchName\" id=\"batchName\" formControlName=\"batchName\" placeholder=\"Batch Name\">\r\n                      <span *ngIf=\"!batchForm.get('batchName').valid && batchForm.get('batchName').touched\">*Please Enter Batch Name</span>\r\n                    </div>  \r\n                  </div>\r\n                  <div class=\"col-md-6 col-sm-12 p-0\">\r\n                    <div class=\"form-group m-1\">\r\n                      <label for=\"fees\">Fees : </label>\r\n                      <input class=\"fees\" type=\"fees\" name=\"fees\" id=\"fees\" formControlName=\"fees\" placeholder=\"Fees\">\r\n                      <span *ngIf=\"!batchForm.get('fees').valid && batchForm.get('fees').touched\">*Please Enter Fees</span>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                  <div class=\"col-md-6 col-sm-12 p-0\">\r\n                    <div class=\"form-group m-1\">\r\n                      <label for=\"start_timming\">Time : </label>\r\n                      <div class=\"row\">\r\n                          <div class=\"col-5 p-0\">\r\n                            <input type=\"text\" name=\"start_timming\" id=\"start_timming\" formControlName=\"start_timming\" placeholder=\"From\">\r\n                          </div>\r\n                          <div class=\"col-2 text-center\">\r\n                            <p>-</p>\r\n                          </div>\r\n                          <div class=\"col-5 p-0\">\t\t\t\t\t\r\n                            <input type=\"text\" name=\"end_timming\" id=\"end_timming\" formControlName=\"end_timming\" placeholder=\"To\">\r\n                          </div>\r\n                        </div> \r\n                      <span *ngIf=\"(!batchForm.get('start_timming').valid && batchForm.get('start_timming').touched) || (!batchForm.get('end_timming').valid && batchForm.get('end_timming').touched)\">*Please Enter Timming</span>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-md-6 col-sm-12\">\r\n                    <br>\r\n                    <button type=\"submit\" class=\"btn-add\">Add</button>            \r\n                  </div>\r\n                </div>\r\n              </form>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"row\" *ngIf=\"isWeekType(weekType)\">\r\n        <div class=\"col-12\">\r\n          <label for=\"batches\">Batches : </label>\r\n          <div class=\"table-responsive batches-border\" id=\"batches\">\r\n            <table class=\"table table-sm\">\r\n              <thead class=\"text-center\">\r\n                <th>Batch</th>\r\n                <th>Timming</th>\r\n                <th>Fees</th>\r\n                <th>Days</th>\r\n                <th>Delete</th>\r\n              </thead>\r\n              <tbody>\r\n                <ng-container *ngFor=\"let batch of batches; let i = index\">\r\n                  <tr class=\"p-1 text-center\" *ngIf=\"batch.batchType === weekType\">\r\n                    <td class=\"text-left\">{{batch.batchName}}</td>\r\n                    <td>{{batch.time}}</td>\r\n                    <td>{{batch.fees}}</td>\r\n                    <td>{{batch.days}}</td>\r\n                    <td>\r\n                      <button type=\"button\" class=\"btn-delete\" (click)=\"deleteBatch(i)\">Delete</button>\r\n                    </td>\r\n                  </tr>\r\n                </ng-container>\r\n              </tbody>\r\n            </table>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"row\" *ngIf=\"formError\">\r\n        <div class=\"col-12\">\r\n          <span>{{formError}}</span>\r\n        </div>\r\n      </div>\r\n\r\n      <hr>\r\n      <div class=\"row\">\r\n          <div class=\"col-12\">\r\n            <button type=\"submit\" class=\"btn-add\">Save</button>\r\n            <button type=\"button\" class=\"btn-cancel float-right\" (click)=\"cancel()\">Cancel</button>\r\n          </div>\r\n        </div>\r\n    </form>\r\n  </div>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/admin/admin-branch/admin-add-branch/admin-add-branch.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/admin/admin-branch/admin-add-branch/admin-add-branch.component.ts ***!
  \***********************************************************************************/
/*! exports provided: AdminAddBranchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminAddBranchComponent", function() { return AdminAddBranchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_branch_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/branch.service */ "./src/app/services/branch.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _validators_form_validator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../validators/form.validator */ "./src/app/validators/form.validator.ts");






var AdminAddBranchComponent = /** @class */ (function () {
    function AdminAddBranchComponent(branchService, formValidator, router, route) {
        this.branchService = branchService;
        this.formValidator = formValidator;
        this.router = router;
        this.route = route;
        this.week = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
        this.weekDays = [];
        this.batches = [];
        this.weekdaysTouched = false;
        this.formError = null;
        this.weekType = "weekDays";
        this.images = [];
        this.imgExt = ['jpg', 'png'];
    }
    AdminAddBranchComponent.prototype.ngOnInit = function () {
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            city: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
            }),
            branch: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
            }),
            address: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
            }),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].email]
            }),
            phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
            }),
            descripton: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
            }),
            image: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, {
                validators: [this.formValidator.imageValidate.bind(this)]
            })
        });
        this.batchForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            week: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.weekType, {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
            }),
            batchName: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
            }),
            fees: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
            }),
            start_timming: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
            }),
            end_timming: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
            }),
            weekDays: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormArray"](this.week.map(function () { return new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null); }), {
                validators: [this.formValidator.daysValidator.bind(this)]
            })
        });
    };
    AdminAddBranchComponent.prototype.isWeekType = function (weekType) {
        var n = this.batches.length;
        for (var i = 0; i < n; i++) {
            if (this.batches[i].batchType === weekType) {
                return true;
            }
        }
        return false;
    };
    AdminAddBranchComponent.prototype.onImagePicked = function (event) {
        var _this = this;
        var file = event.target.files[0];
        if (file) {
            var ext = file.name.substring(file.name.lastIndexOf('.') + 1);
            if (!(this.imgExt.indexOf(ext) != -1)) {
                return;
            }
            var filesAmount = event.target.files.length;
            for (var i = 0; i < filesAmount; i++) {
                var reader = new FileReader();
                reader.onload = function (event) {
                    _this.images.push(event.target.result);
                };
                reader.readAsDataURL(event.target.files[i]);
            }
        }
    };
    AdminAddBranchComponent.prototype.addBatch = function () {
        if (this.batchForm.valid) {
            this.formError = null;
            var days = [];
            var week = this.weekDays.sort();
            for (var i = 0; i < week.length; i++) {
                days.push(this.week[week[i]]);
            }
            var batch = {
                batchType: this.weekType,
                days: days.join(', '),
                batchName: this.batchForm.value.batchName,
                time: this.batchForm.value.start_timming + ' - ' + this.batchForm.value.end_timming,
                fees: this.batchForm.value.fees
            };
            this.batches.push(batch);
            this.weekDays = [];
            this.batchForm.reset({ week: this.weekType });
        }
    };
    AdminAddBranchComponent.prototype.deleteBatch = function (i) {
        this.batches.splice(i, 1);
    };
    AdminAddBranchComponent.prototype.addAddress = function () {
        if (this.form.invalid) {
            return this.formError = "*Please Fill All Fields of Branch";
        }
        if (this.batches.length === 0) {
            return this.formError = "*Please Add Batches";
        }
        if (this.form.valid) {
            this.formError = null;
            this.branchService.addBranch(this.form.value.city, this.form.value.branch, this.form.value.address, this.form.value.email, this.form.value.phone, this.form.value.descripton, this.images, this.batches, "activated");
            this.form.reset();
            this.cancel();
        }
    };
    AdminAddBranchComponent.prototype.cancel = function () {
        this.router.navigate(["/admin", "branch"], { relativeTo: this.route, skipLocationChange: true });
    };
    AdminAddBranchComponent.prototype.scheduleChange = function () {
        this.weekType = this.batchForm.value.week;
        console.log(this.weekType);
    };
    AdminAddBranchComponent.prototype.weekDay = function (event, index) {
        this.weekdaysTouched = true;
        if (event.target.checked) {
            return this.weekDays.push(index);
        }
        this.weekDays.splice(this.weekDays.findIndex(function (day) { return day === index; }), 1);
    };
    AdminAddBranchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admin-add-branch',
            template: __webpack_require__(/*! ./admin-add-branch.component.html */ "./src/app/admin/admin-branch/admin-add-branch/admin-add-branch.component.html"),
            styles: [__webpack_require__(/*! ./admin-add-branch.component.css */ "./src/app/admin/admin-branch/admin-add-branch/admin-add-branch.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_branch_service__WEBPACK_IMPORTED_MODULE_2__["BranchService"],
            _validators_form_validator__WEBPACK_IMPORTED_MODULE_5__["FormValidator"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], AdminAddBranchComponent);
    return AdminAddBranchComponent;
}());



/***/ }),

/***/ "./src/app/admin/admin-branch/admin-branch.component.css":
/*!***************************************************************!*\
  !*** ./src/app/admin/admin-branch/admin-branch.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\r\n    margin: 0;\r\n}\r\n\r\nh3 {\r\n    font-size: 150%;\r\n}\r\n\r\nhr {\r\n    border-top: 2px solid #e67e22;\r\n    margin: 5px 0;\r\n}\r\n\r\n.branch-name {\r\n    text-decoration: none;\r\n    color: #000;\r\n    -webkit-text-decoration-color: transparent;\r\n            text-decoration-color: transparent;\r\n    transition: -webkit-text-decoration 0.2s, -webkit-text-decoration-color 0.2s;\r\n    transition: text-decoration 0.2s, text-decoration-color 0.2s;\r\n    transition: text-decoration 0.2s, text-decoration-color 0.2s, -webkit-text-decoration 0.2s, -webkit-text-decoration-color 0.2s; \r\n}\r\n\r\n.branch-name:hover {\r\n    color: #000;\r\n    text-decoration: underline;\r\n    -webkit-text-decoration-color: #e67e22;\r\n            text-decoration-color: #e67e22;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vYWRtaW4tYnJhbmNoL2FkbWluLWJyYW5jaC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksU0FBUztBQUNiOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLDZCQUE2QjtJQUM3QixhQUFhO0FBQ2pCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLFdBQVc7SUFDWCwwQ0FBa0M7WUFBbEMsa0NBQWtDO0lBQ2xDLDRFQUE0RDtJQUE1RCw0REFBNEQ7SUFBNUQsOEhBQTREO0FBQ2hFOztBQUVBO0lBQ0ksV0FBVztJQUNYLDBCQUEwQjtJQUMxQixzQ0FBOEI7WUFBOUIsOEJBQThCO0FBQ2xDIiwiZmlsZSI6InNyYy9hcHAvYWRtaW4vYWRtaW4tYnJhbmNoL2FkbWluLWJyYW5jaC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XHJcbiAgICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbmgzIHtcclxuICAgIGZvbnQtc2l6ZTogMTUwJTtcclxufVxyXG5cclxuaHIge1xyXG4gICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkICNlNjdlMjI7XHJcbiAgICBtYXJnaW46IDVweCAwO1xyXG59XHJcblxyXG4uYnJhbmNoLW5hbWUge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbiAgICB0ZXh0LWRlY29yYXRpb24tY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgdHJhbnNpdGlvbjogdGV4dC1kZWNvcmF0aW9uIDAuMnMsIHRleHQtZGVjb3JhdGlvbi1jb2xvciAwLjJzOyBcclxufVxyXG5cclxuLmJyYW5jaC1uYW1lOmhvdmVyIHtcclxuICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICB0ZXh0LWRlY29yYXRpb24tY29sb3I6ICNlNjdlMjI7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/admin/admin-branch/admin-branch.component.html":
/*!****************************************************************!*\
  !*** ./src/app/admin/admin-branch/admin-branch.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row mt-2\">\r\n  <div class=\"col-md-8 col-sm-10 mx-auto\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-6 col-sm-12\">\r\n        <h3>Branches</h3>\r\n      </div>\r\n      <div class=\"col-md-6 col-sm-12\">\r\n        <button class=\"new-btn float-right\" (click)=\"onNewBranch()\">Create New Branch</button>\r\n      </div>\r\n    </div>\r\n    <hr>\r\n    <div class=\"table-responsive\" *ngIf=\"branches.length > 0; else empty_branches\">\r\n      <table class=\"table table-sm\">\r\n        <thead>\r\n          <tr>\r\n            <th>ID</th>\r\n            <th>Branch</th>\r\n            <th>Contact</th>\r\n            <th>Status</th>\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <tr class=\"branch\" *ngFor=\"let branch of branches, let i = index\" routerLinkActive=\"active\">\r\n            <td>{{ i+1 }}</td>\r\n            <td>\r\n              <a [routerLink]=\"branch._id\" class=\"branch-name\" skipLocationChange>\r\n                {{ branch.branch }}\r\n              </a>\r\n            </td>\r\n            <td>\r\n              +91 {{ branch.phone }}\r\n            </td>\r\n            <td>\r\n              {{ branch.status | uppercase }}\r\n            </td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n    </div>\r\n    \r\n    <ng-template #empty_branches>\r\n      <h5 class=\"pl-3\">No Branches Available..</h5>\r\n    </ng-template>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/admin/admin-branch/admin-branch.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/admin/admin-branch/admin-branch.component.ts ***!
  \**************************************************************/
/*! exports provided: AdminBranchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminBranchComponent", function() { return AdminBranchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_branch_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/branch.service */ "./src/app/services/branch.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var AdminBranchComponent = /** @class */ (function () {
    function AdminBranchComponent(branchService, router, route) {
        this.branchService = branchService;
        this.router = router;
        this.route = route;
        this.branches = [];
    }
    AdminBranchComponent.prototype.ngOnInit = function () {
        this.branches = this.branchService.getBranches();
    };
    AdminBranchComponent.prototype.onNewBranch = function () {
        this.router.navigate(['new'], { relativeTo: this.route, skipLocationChange: true });
    };
    AdminBranchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admin-branch',
            template: __webpack_require__(/*! ./admin-branch.component.html */ "./src/app/admin/admin-branch/admin-branch.component.html"),
            styles: [__webpack_require__(/*! ./admin-branch.component.css */ "./src/app/admin/admin-branch/admin-branch.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_branch_service__WEBPACK_IMPORTED_MODULE_2__["BranchService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], AdminBranchComponent);
    return AdminBranchComponent;
}());



/***/ }),

/***/ "./src/app/admin/admin-branch/admin-edit-branch/admin-edit-branch.component.css":
/*!**************************************************************************************!*\
  !*** ./src/app/admin/admin-branch/admin-edit-branch/admin-edit-branch.component.css ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  * {\r\n      margin: 0;\r\n  }\r\n\r\n  hr {\r\n      border: 1px solid #e67e22;\r\n      margin: 10px 0;\r\n  }\r\n\r\n  th, td {\r\n      padding: 0 5px;\r\n  }\r\n\r\n  tr, thead {\r\n      margin-bottom: 5px;\r\n  }\r\n\r\n  .batches-border {\r\n    border: 1px solid #e67e22;\r\n    padding: 3px;\r\n}\r\n\r\n  .custom-table {\r\n      border: 1px solid #e67e22;\r\n      padding: 3px;\r\n  }\r\n\r\n  .weekDays-selector input {\r\n    display: none!important;\r\n  }\r\n\r\n  .weekDays-selector input[type=checkbox] + label {\r\n    display: inline-block;\r\n    font-size: 70%;\r\n    border: 1px solid #e67e22;\r\n    border-radius: 50%;\r\n    background: #fff;\r\n    color: #000;\r\n    height: 35px;\r\n    width: 35px;\r\n    padding: 2px;\r\n    margin: 2px;\r\n    line-height: 30px;\r\n    text-align: center;\r\n    cursor: pointer;\r\n    transition: background 0.2s, color 0.2s;\r\n  }\r\n\r\n  .weekDays-selector input[type=checkbox]:checked + label {\r\n    background: #e67e22;\r\n    color: #fff;\r\n  }\r\n\r\n  .week {\r\n      padding-right: 10px;\r\n  }\r\n\r\n  .schedule {\r\n      border: 1px solid #e67e22;\r\n      padding: 5px;\r\n  }\r\n\r\n  .btn-delete {\r\n    font-size: 75%;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vYWRtaW4tYnJhbmNoL2FkbWluLWVkaXQtYnJhbmNoL2FkbWluLWVkaXQtYnJhbmNoLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkVBQUU7TUFDSSxTQUFTO0VBQ2I7O0VBRUE7TUFDSSx5QkFBeUI7TUFDekIsY0FBYztFQUNsQjs7RUFFQTtNQUNJLGNBQWM7RUFDbEI7O0VBRUE7TUFDSSxrQkFBa0I7RUFDdEI7O0VBRUE7SUFDRSx5QkFBeUI7SUFDekIsWUFBWTtBQUNoQjs7RUFFRTtNQUNJLHlCQUF5QjtNQUN6QixZQUFZO0VBQ2hCOztFQUVBO0lBQ0UsdUJBQXVCO0VBQ3pCOztFQUVBO0lBQ0UscUJBQXFCO0lBQ3JCLGNBQWM7SUFDZCx5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsWUFBWTtJQUNaLFdBQVc7SUFDWCxZQUFZO0lBQ1osV0FBVztJQUNYLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLHVDQUF1QztFQUN6Qzs7RUFFQTtJQUNFLG1CQUFtQjtJQUNuQixXQUFXO0VBQ2I7O0VBRUE7TUFDSSxtQkFBbUI7RUFDdkI7O0VBRUE7TUFDSSx5QkFBeUI7TUFDekIsWUFBWTtFQUNoQjs7RUFFQTtJQUNFLGNBQWM7RUFDaEIiLCJmaWxlIjoic3JjL2FwcC9hZG1pbi9hZG1pbi1icmFuY2gvYWRtaW4tZWRpdC1icmFuY2gvYWRtaW4tZWRpdC1icmFuY2guY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiAgKiB7XHJcbiAgICAgIG1hcmdpbjogMDtcclxuICB9XHJcblxyXG4gIGhyIHtcclxuICAgICAgYm9yZGVyOiAxcHggc29saWQgI2U2N2UyMjtcclxuICAgICAgbWFyZ2luOiAxMHB4IDA7XHJcbiAgfVxyXG5cclxuICB0aCwgdGQge1xyXG4gICAgICBwYWRkaW5nOiAwIDVweDtcclxuICB9XHJcblxyXG4gIHRyLCB0aGVhZCB7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICB9XHJcblxyXG4gIC5iYXRjaGVzLWJvcmRlciB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZTY3ZTIyO1xyXG4gICAgcGFkZGluZzogM3B4O1xyXG59XHJcblxyXG4gIC5jdXN0b20tdGFibGUge1xyXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjZTY3ZTIyO1xyXG4gICAgICBwYWRkaW5nOiAzcHg7XHJcbiAgfVxyXG5cclxuICAud2Vla0RheXMtc2VsZWN0b3IgaW5wdXQge1xyXG4gICAgZGlzcGxheTogbm9uZSFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIFxyXG4gIC53ZWVrRGF5cy1zZWxlY3RvciBpbnB1dFt0eXBlPWNoZWNrYm94XSArIGxhYmVsIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGZvbnQtc2l6ZTogNzAlO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2U2N2UyMjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBjb2xvcjogIzAwMDtcclxuICAgIGhlaWdodDogMzVweDtcclxuICAgIHdpZHRoOiAzNXB4O1xyXG4gICAgcGFkZGluZzogMnB4O1xyXG4gICAgbWFyZ2luOiAycHg7XHJcbiAgICBsaW5lLWhlaWdodDogMzBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC4ycywgY29sb3IgMC4ycztcclxuICB9XHJcbiAgXHJcbiAgLndlZWtEYXlzLXNlbGVjdG9yIGlucHV0W3R5cGU9Y2hlY2tib3hdOmNoZWNrZWQgKyBsYWJlbCB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZTY3ZTIyO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgfVxyXG5cclxuICAud2VlayB7XHJcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbiAgfVxyXG5cclxuICAuc2NoZWR1bGUge1xyXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjZTY3ZTIyO1xyXG4gICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgfVxyXG5cclxuICAuYnRuLWRlbGV0ZSB7XHJcbiAgICBmb250LXNpemU6IDc1JTtcclxuICB9Il19 */"

/***/ }),

/***/ "./src/app/admin/admin-branch/admin-edit-branch/admin-edit-branch.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/admin/admin-branch/admin-edit-branch/admin-edit-branch.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row mt-2\">\r\n    <div class=\"col-lg-8 col-md-8 col-sm-12 col-xs-12 col-12 mx-auto\">\r\n      <h4 class=\"text-center mb-3\">Edit Branch - {{branchData.branch}}</h4>\r\n      <form class=\"\" (submit)=\"editAddress()\" [formGroup]=\"form\">\r\n  \r\n        <div class=\"row\">\r\n  \r\n          <div class=\"col-md-6 col-sm-12\">\r\n            <div class=\"form-group\">\r\n              <label for=\"city\">City : </label>\r\n              <input class=\"city\" type=\"text\" name=\"city\" id=\"city\" formControlName=\"city\" placeholder=\"City\">\r\n              <span *ngIf=\"!form.get('city').valid && form.get('city').touched\">*Please enter City</span>\r\n            </div>\r\n          </div>\r\n  \r\n          <div class=\"col-md-6 col-sm-12\">\r\n            <div class=\"form-group\">\r\n              <label for=\"branch\">Branch Name : </label>\r\n              <input class=\"branch\" type=\"text\" name=\"branch\" id=\"branch\" formControlName=\"branch\" placeholder=\"Branch\">\r\n              <span *ngIf=\"!form.get('branch').valid && form.get('branch').touched\">*Please enter Branch</span>\r\n            </div>\r\n          </div>\r\n  \r\n        </div>\r\n\r\n        <div class=\"row\">\r\n          <div class=\"col-12\"> \r\n            <div class=\"form-group\">\r\n              <label for=\"address\">Address : </label>\r\n              <textarea class=\"address\" name=\"address\" id=\"address\" rows=\"3\" formControlName=\"address\" placeholder=\"Address\"></textarea>\r\n              <span *ngIf=\"!form.get('address').valid && form.get('address').touched\">*Please enter Address</span>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        \r\n  \r\n        <div class=\"row\">\r\n  \r\n          <div class=\"col-md-6 col-sm-12\">\r\n            <div class=\"form-group\">\r\n              <label for=\"email\">Email : </label>\r\n              <input class=\"email\" type=\"email\" name=\"email\" id=\"email\" formControlName=\"email\" placeholder=\"example@email.com\">\r\n              <span *ngIf=\"!form.get('email').valid && form.get('email').touched\">*Please enter valid Email</span>\r\n            </div>\r\n          </div>\r\n  \r\n          <div class=\"col-md-6 col-sm-12\">\r\n            <div class=\"form-group\">\r\n              <label for=\"phone\">Phone : </label>\r\n              <input class=\"phone\" type=\"text\" pattern=\"\\d*\" name=\"phone\" id=\"phone\" maxlength=\"10\" minlength=\"10\" formControlName=\"phone\" placeholder=\"9876543210\">\r\n              <span *ngIf=\"!form.get('phone').valid && form.get('phone').touched\">*Please enter valid phone number</span>\r\n            </div>\r\n          </div>\r\n  \r\n        </div>\r\n\r\n        <div class=\"row\">\r\n          <div class=\"col-12\">  \r\n            <div class=\"form-group\">\r\n              <label for=\"descripton\">Descripton : </label>\r\n              <textarea class=\"descripton\" name=\"descripton\" id=\"descripton\" rows=\"5\" formControlName=\"descripton\" placeholder=\"Descripton\"></textarea>\r\n              <span *ngIf=\"!form.get('descripton').valid && form.get('descripton').touched\">*Please enter Descripton</span>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"row\">\r\n          <div class=\"col-12\"> \r\n            <div class=\"form-group\">\r\n              <label for=\"image\">Select Branch Images : </label>\r\n              <input type=\"file\" id=\"image\" name=\"image\" formControlName=\"image\" (change)=\"onImagePicked($event)\" multiple>\r\n              <span *ngIf=\"!form.get('image').valid && form.get('image').touched\">*Please Select Valid Image File</span>\r\n            </div>\r\n          </div>\r\n        </div>\r\n  \r\n        <div class=\"row\">\r\n          <div class=\"col-12\">\r\n            <div class=\"form-group\">\r\n              <label for=\"batch\">Add Batches : </label>\r\n              <div class=\"batches-border\" id=\"batch\">\r\n                <form (submit)=\"addBatch()\" [formGroup]=\"batchForm\">\r\n                  <div class=\"row\">\r\n                    <div class=\"col-md-4 col-sm-12 p-0\">\r\n                      <div class=\"form-group m-1\">\r\n                        <label for=\"week\">Week Type : </label>\r\n                        <select class=\"week\" name=\"week\" id=\"week\" formControlName=\"week\" (change)=\"scheduleChange()\">\r\n                          <option value=\"weekDays\" selected>Week Day</option>\r\n                          <option value=\"weekEnds\">Week End</option>\r\n                        </select>\r\n                        <span *ngIf=\"!batchForm.get('week').valid && batchForm.get('week').touched\">*Please Select Valid Week Type</span>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"col-md-8 col-sm-12 p-0\">\r\n                      <div class=\"form-group m-1\">\r\n                        <label>Select Days : </label>\r\n                        <div class=\"weekDays-selector batches-border\">\r\n                          <div formArrayName=\"weekDays\">\r\n                            <label *ngFor=\"let day of batchForm.get('weekDays').controls; let i = index\">\r\n                              <input type=\"checkbox\" [id]=\"week[i]\" class=\"weekday\" [formControlName]=\"i\" (change)=\"weekDay($event, i)\">\r\n                              <label [for]=\"week[i]\">{{week[i]}}</label>\r\n                            </label>\r\n                          </div>\r\n                        </div>\r\n                        <span *ngIf=\"!batchForm.get('weekDays').valid && weekdaysTouched\">*Please Select Week Days</span>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"row\">\r\n                    <div class=\"col-md-6 col-sm-12 p-0\">\r\n                      <div class=\"form-group m-1\">\r\n                        <label for=\"batchName\">Batch Name : </label>\r\n                        <input class=\"batchName\" type=\"text\" name=\"batchName\" id=\"batchName\" formControlName=\"batchName\" placeholder=\"Batch Name\">\r\n                        <span *ngIf=\"!batchForm.get('batchName').valid && batchForm.get('batchName').touched\">*Please Enter Batch Name</span>\r\n                      </div>  \r\n                    </div>\r\n                    <div class=\"col-md-6 col-sm-12 p-0\">\r\n                      <div class=\"form-group m-1\">\r\n                        <label for=\"fees\">Fees : </label>\r\n                        <input class=\"fees\" type=\"fees\" name=\"fees\" id=\"fees\" formControlName=\"fees\" placeholder=\"Fees\">\r\n                        <span *ngIf=\"!batchForm.get('fees').valid && batchForm.get('fees').touched\">*Please Enter Fees</span>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"row\">\r\n                    <div class=\"col-md-6 col-sm-12 p-0\">\r\n                      <div class=\"form-group m-1\">\r\n                        <label for=\"start_timming\">Time : </label>\r\n                        <div class=\"row\">\r\n                            <div class=\"col-5 p-0\">\r\n                              <input type=\"text\" name=\"start_timming\" id=\"start_timming\" formControlName=\"start_timming\" placeholder=\"From\">\r\n                            </div>\r\n                            <div class=\"col-2 text-center\">\r\n                              <p>-</p>\r\n                            </div>\r\n                            <div class=\"col-5 p-0\">\t\t\t\t\t\r\n                              <input type=\"text\" name=\"end_timming\" id=\"end_timming\" formControlName=\"end_timming\" placeholder=\"To\">\r\n                            </div>\r\n                          </div> \r\n                        <span *ngIf=\"(!batchForm.get('start_timming').valid && batchForm.get('start_timming').touched) || (!batchForm.get('end_timming').valid && batchForm.get('end_timming').touched)\">*Please Enter Timming</span>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"col-md-6 col-sm-12\">\r\n                      <br>\r\n                      <button type=\"submit\" class=\"btn-add\">Add</button>            \r\n                    </div>\r\n                  </div>\r\n                </form>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n  \r\n        <div class=\"row\" *ngIf=\"isWeekType(weekType)\">\r\n          <div class=\"col-12\">\r\n            <label for=\"batches\">Batches : </label>\r\n            <div class=\"table-responsive batches-border\" id=\"batches\">\r\n              <table class=\"table table-sm\">\r\n                <thead class=\"text-center\">\r\n                  <th>Batch</th>\r\n                  <th>Timming</th>\r\n                  <th>Fees</th>\r\n                  <th>Days</th>\r\n                  <th>Delete</th>\r\n                </thead>\r\n                <tbody>\r\n                  <ng-container *ngFor=\"let batch of batches; let i = index\">\r\n                    <tr class=\"p-1 text-center\" *ngIf=\"batch.batchType === weekType\">\r\n                      <td class=\"text-left\">{{batch.batchName}}</td>\r\n                      <td>{{batch.time}}</td>\r\n                      <td>{{batch.fees}}</td>\r\n                      <td>{{batch.days}}</td>\r\n                      <td>\r\n                        <button type=\"button\" class=\"btn-delete\" (click)=\"deleteBatch(i)\">Delete</button>\r\n                      </td>\r\n                    </tr>\r\n                  </ng-container>\r\n                </tbody>\r\n              </table>\r\n            </div>\r\n          </div>\r\n        </div>\r\n          \r\n        <hr>\r\n        \r\n        <div class=\"row\">\r\n          <div class=\"col-12\">\r\n            <button type=\"submit\" class=\"btn-save\">Save</button>\r\n      \r\n            <button type=\"button\" class=\"btn-cancel float-right\" (click)=\"cancel()\">Cancel</button>\r\n          </div>\r\n        </div>\r\n  \r\n      </form>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/admin/admin-branch/admin-edit-branch/admin-edit-branch.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/admin/admin-branch/admin-edit-branch/admin-edit-branch.component.ts ***!
  \*************************************************************************************/
/*! exports provided: AdminEditBranchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminEditBranchComponent", function() { return AdminEditBranchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_branch_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/branch.service */ "./src/app/services/branch.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _validators_form_validator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../validators/form.validator */ "./src/app/validators/form.validator.ts");






var AdminEditBranchComponent = /** @class */ (function () {
    function AdminEditBranchComponent(branchService, formValidator, router, route) {
        this.branchService = branchService;
        this.formValidator = formValidator;
        this.router = router;
        this.route = route;
        this.week = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
        this.weekDays = [];
        this.batches = [];
        this.weekdaysTouched = false;
        this.formError = null;
        this.weekType = "weekDays";
        this.images = [];
        this.imgExt = ['jpg', 'png'];
    }
    AdminEditBranchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .subscribe(function (params) {
            var id = params['id'];
            _this.branchData = _this.branchService.getBranch(id);
            _this.images = _this.branchData.images;
            _this.batches = _this.branchData.batch;
        });
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            city: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.branchData.city, {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
            }),
            branch: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.branchData.branch, {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
            }),
            address: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.branchData.address, {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
            }),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.branchData.email, {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].email]
            }),
            phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.branchData.phone, {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
            }),
            descripton: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.branchData.description, {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
            }),
            image: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, {
                validators: [this.formValidator.imageValidate.bind(this)]
            })
        });
        this.batchForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            week: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.weekType, {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
            }),
            batchName: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
            }),
            fees: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
            }),
            start_timming: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
            }),
            end_timming: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
            }),
            weekDays: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormArray"](this.week.map(function () { return new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null); }), {
                validators: [this.formValidator.daysValidator.bind(this)]
            })
        });
    };
    AdminEditBranchComponent.prototype.onImagePicked = function (event) {
        var _this = this;
        var file = event.target.files[0];
        if (file) {
            var ext = file.name.substring(file.name.lastIndexOf('.') + 1);
            if (!(this.imgExt.indexOf(ext) != -1)) {
                return;
            }
            var filesAmount = event.target.files.length;
            for (var i = 0; i < filesAmount; i++) {
                var reader = new FileReader();
                reader.onload = function (event) {
                    _this.images.push(event.target.result);
                };
                reader.readAsDataURL(event.target.files[i]);
            }
        }
    };
    AdminEditBranchComponent.prototype.addBatch = function () {
        if (this.batchForm.valid) {
            this.formError = null;
            var days = [];
            var week = this.weekDays.sort();
            for (var i = 0; i < week.length; i++) {
                days.push(this.week[week[i]]);
            }
            var batch = {
                batchType: this.weekType,
                days: days.join(', '),
                batchName: this.batchForm.value.batchName,
                time: this.batchForm.value.start_timming + ' - ' + this.batchForm.value.end_timming,
                fees: this.batchForm.value.fees
            };
            this.batches.push(batch);
            this.weekDays = [];
            this.batchForm.reset({ week: this.weekType });
        }
    };
    AdminEditBranchComponent.prototype.deleteBatch = function (i) {
        this.batches.splice(i, 1);
    };
    AdminEditBranchComponent.prototype.editAddress = function () {
        if (this.form.invalid) {
            return this.formError = "*Please Fill All Fields of Branch";
        }
        if (this.batches.length === 0) {
            return this.formError = "*Please Add Batches";
        }
        if (this.form.valid) {
            this.formError = null;
            var editedBranch = {
                _id: this.branchData._id,
                city: this.form.value.city,
                branch: this.form.value.branch,
                address: this.form.value.address,
                email: this.form.value.email,
                phone: this.form.value.phone,
                description: this.form.value.descripton,
                images: this.images,
                batch: this.batches,
                status: this.branchData.status
            };
            this.branchService.editBranch(editedBranch);
            this.form.reset();
            this.cancel();
        }
    };
    AdminEditBranchComponent.prototype.cancel = function () {
        this.router.navigate(["/admin", "branch", this.branchData._id], { relativeTo: this.route, skipLocationChange: true });
    };
    AdminEditBranchComponent.prototype.scheduleChange = function () {
        this.weekType = this.batchForm.value.week;
        console.log(this.weekType);
    };
    AdminEditBranchComponent.prototype.weekDay = function (event, index) {
        this.weekdaysTouched = true;
        if (event.target.checked) {
            return this.weekDays.push(index);
        }
        this.weekDays.splice(this.weekDays.findIndex(function (day) { return day === index; }), 1);
    };
    AdminEditBranchComponent.prototype.isWeekType = function (weekType) {
        var n = this.batches.length;
        for (var i = 0; i < n; i++) {
            if (this.batches[i].batchType === weekType) {
                return true;
            }
        }
        return false;
    };
    AdminEditBranchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admin-edit-branch',
            template: __webpack_require__(/*! ./admin-edit-branch.component.html */ "./src/app/admin/admin-branch/admin-edit-branch/admin-edit-branch.component.html"),
            styles: [__webpack_require__(/*! ./admin-edit-branch.component.css */ "./src/app/admin/admin-branch/admin-edit-branch/admin-edit-branch.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_branch_service__WEBPACK_IMPORTED_MODULE_2__["BranchService"],
            _validators_form_validator__WEBPACK_IMPORTED_MODULE_5__["FormValidator"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], AdminEditBranchComponent);
    return AdminEditBranchComponent;
}());



/***/ }),

/***/ "./src/app/admin/admin-branch/admin-show-branch/admin-show-branch.component.css":
/*!**************************************************************************************!*\
  !*** ./src/app/admin/admin-branch/admin-show-branch/admin-show-branch.component.css ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\r\n    margin: 0;\r\n}\r\n\r\nh3 {\r\n    font-size: 150%;\r\n}\r\n\r\nhr {\r\n    border: 1px solid #e67e22;\r\n    margin: 5px 0;\r\n}\r\n\r\n.branch {\r\n    background-color: #f4f4f4;\r\n    padding: 10px;\r\n}\r\n\r\nspan {\r\n    color: #000;\r\n    font-size: 80%;\r\n}\r\n\r\np {\r\n    font-size: 80%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vYWRtaW4tYnJhbmNoL2FkbWluLXNob3ctYnJhbmNoL2FkbWluLXNob3ctYnJhbmNoLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxTQUFTO0FBQ2I7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGFBQWE7QUFDakI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksY0FBYztBQUNsQiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluLWJyYW5jaC9hZG1pbi1zaG93LWJyYW5jaC9hZG1pbi1zaG93LWJyYW5jaC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XHJcbiAgICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbmgzIHtcclxuICAgIGZvbnQtc2l6ZTogMTUwJTtcclxufVxyXG5cclxuaHIge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2U2N2UyMjtcclxuICAgIG1hcmdpbjogNXB4IDA7XHJcbn1cclxuXHJcbi5icmFuY2gge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y0ZjRmNDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuXHJcbnNwYW4ge1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbiAgICBmb250LXNpemU6IDgwJTtcclxufVxyXG5cclxucCB7XHJcbiAgICBmb250LXNpemU6IDgwJTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/admin/admin-branch/admin-show-branch/admin-show-branch.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/admin/admin-branch/admin-show-branch/admin-show-branch.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n  <div class=\"row mt-2\">\r\n    <div class=\"col-10 mx-auto\">\r\n      <div class=\"branch\">\r\n        <div class=\"row\">\r\n          <div class=\"col-12\">\r\n            <button class=\"btn-close float-right\" (click)=\"cancel()\">&#215;</button>\r\n            <h3 class=\"text-center\"><strong>{{branch.branch}}</strong> - {{branch.city}}</h3>\r\n          </div>\r\n        </div>\r\n\r\n        <hr>\r\n\r\n        <div class=\"row\">\r\n          <div class=\"col-12\">\r\n            <div class=\"table-responsive\">\r\n              <table class=\"table table-sm\">\r\n                <tbody>\r\n                  <tr>\r\n                    <td>\r\n                      <strong>Description : </strong>\r\n                    </td>\r\n                    <td>\r\n                      <p>{{branch.description}}</p>\r\n                    </td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td>\r\n                      <strong>Address : </strong>\r\n                    </td>\r\n                    <td>\r\n                      <p>{{branch.address}}</p>\r\n                    </td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td>\r\n                      <strong><em>e</em>-mail : </strong>\r\n                    </td>\r\n                    <td>\r\n                      <p><a href=\"mailto:{{branch.email}}\">{{branch.email}}</a></p>   \r\n                    </td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td>\r\n                      <strong>Phone : </strong>\r\n                    </td>\r\n                    <td>\r\n                      <p>+91 {{branch.phone}}</p>\r\n                    </td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td colspan=\"2\">\r\n                      <strong>Schedule : </strong>\r\n                    </td>\r\n                  </tr>\r\n                  <tr *ngIf=\"isWeekDays()\">\r\n                    <td>\r\n                    </td>\r\n                    <td>\r\n                      <div class=\"row\">\r\n                        <strong>Week Day : </strong>\r\n                      </div>\r\n                      <div class=\"row table-responsive p-1\">\r\n                        <table class=\"table table-sm\">\r\n                          <thead class=\"text-center\">\r\n                            <th>Batch</th>\r\n                            <th>Timming</th>\r\n                            <th>Fees</th>\r\n                            <th>Days</th>\r\n                          </thead>\r\n                          <tbody>\r\n                            <ng-container *ngFor=\"let batch of batches\">\r\n                              <tr class=\"p-1 text-center\" *ngIf=\"batch.batchType === 'weekDays'\">\r\n                                <td class=\"text-left\">{{batch.batchName}}</td>\r\n                                <td>{{batch.time}}</td>\r\n                                <td>{{batch.fees}}</td>\r\n                                <td>{{batch.days}}</td>\r\n                              </tr>\r\n                            </ng-container>\r\n                          </tbody>\r\n                        </table>\r\n                      </div>\r\n                    </td>\r\n                  </tr>\r\n                  <tr *ngIf=\"isWeekEnds()\">\r\n                    <td>\r\n                    </td>\r\n                    <td>\r\n                      <div class=\"row\">\r\n                        <strong>Week End : </strong>\r\n                      </div>\r\n                      <div class=\"row table-responsive p-1\">\r\n                        <table class=\"table table-sm\">\r\n                          <thead class=\"text-center\">\r\n                            <th>Batch</th>\r\n                            <th>Timming</th>\r\n                            <th>Fees</th>\r\n                            <th>Days</th>\r\n                          </thead>\r\n                          <tbody>\r\n                            <ng-container *ngFor=\"let batch of batches\">\r\n                              <tr class=\"p-1 text-center\" *ngIf=\"batch.batchType === 'weekEnds'\">\r\n                                <td class=\"text-left\">{{batch.batchName}}</td>\r\n                                <td>{{batch.time}}</td>\r\n                                <td>{{batch.fees}}</td>\r\n                                <td>{{batch.days}}</td>\r\n                              </tr>\r\n                            </ng-container>\r\n                          </tbody>\r\n                        </table>\r\n                      </div>\r\n                    </td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td>\r\n                      <strong>Status : </strong>\r\n                    </td>\r\n                    <td>\r\n                      <p>{{branch.status | uppercase}}</p>              \r\n                    </td>\r\n                  </tr>\r\n                </tbody>\r\n              </table>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        \r\n        <hr>\r\n        \r\n        <div class=\".row\">\r\n          <div class=\"col-12\">\r\n            <button class=\"btn-edit\" (click)=\"editAddress()\">Edit</button>\r\n            <button class=\"btn-deactivate float-right\" (click)=\"changeStatus(branch._id, 'deactivated')\" *ngIf=\"branch.status === 'activated'\">Deactivate</button>\r\n            <button class=\"btn-activate float-right\" (click)=\"changeStatus(branch._id, 'activated')\" *ngIf=\"branch.status === 'deactivated'\">Activate</button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>"

/***/ }),

/***/ "./src/app/admin/admin-branch/admin-show-branch/admin-show-branch.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/admin/admin-branch/admin-show-branch/admin-show-branch.component.ts ***!
  \*************************************************************************************/
/*! exports provided: AdminShowBranchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminShowBranchComponent", function() { return AdminShowBranchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_branch_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/branch.service */ "./src/app/services/branch.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var AdminShowBranchComponent = /** @class */ (function () {
    function AdminShowBranchComponent(branchService, router, route) {
        this.branchService = branchService;
        this.router = router;
        this.route = route;
        this.batches = [];
        this.week = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
        this.days = [true, false, false, false, false, false, false];
    }
    AdminShowBranchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .subscribe(function (params) {
            var id = params['id'];
            _this.branch = Object.assign(_this.branchService.getBranch(id));
            _this.batches = _this.branch.batch;
        });
    };
    AdminShowBranchComponent.prototype.changeStatus = function (id, status) {
        this.branchService.changeStatus(id, status);
        this.cancel();
    };
    AdminShowBranchComponent.prototype.editAddress = function () {
        this.router.navigate(['edit'], { relativeTo: this.route, skipLocationChange: true });
    };
    AdminShowBranchComponent.prototype.cancel = function () {
        this.router.navigate(['/admin', 'branch'], { relativeTo: this.route, skipLocationChange: true });
    };
    AdminShowBranchComponent.prototype.isWeekDays = function () {
        var n = this.batches.length;
        for (var i = 0; i < n; i++) {
            if (this.batches[i].batchType === 'weekDays') {
                return true;
            }
        }
        return false;
    };
    AdminShowBranchComponent.prototype.isWeekEnds = function () {
        var n = this.batches.length;
        for (var i = 0; i < n; i++) {
            if (this.batches[i].batchType === 'weekEnds') {
                return true;
            }
        }
        return false;
    };
    AdminShowBranchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admin-show-branch',
            template: __webpack_require__(/*! ./admin-show-branch.component.html */ "./src/app/admin/admin-branch/admin-show-branch/admin-show-branch.component.html"),
            styles: [__webpack_require__(/*! ./admin-show-branch.component.css */ "./src/app/admin/admin-branch/admin-show-branch/admin-show-branch.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_branch_service__WEBPACK_IMPORTED_MODULE_2__["BranchService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], AdminShowBranchComponent);
    return AdminShowBranchComponent;
}());



/***/ }),

/***/ "./src/app/admin/admin-enquiry/admin-enquiry.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/admin/admin-enquiry/admin-enquiry.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h3 {\r\n    font-size: 150%;\r\n}\r\n\r\nhr {\r\n    border: 1px solid #e67e22;\r\n    margin: 5px 0;\r\n}\r\n\r\n.enquiry {\r\n    cursor: pointer;\r\n    outline: none;\r\n    background-color: transparent;\r\n    transition: background-color 0.2s;\r\n}\r\n\r\n.enquiry:hover {\r\n    background-color: rgba(255, 255, 255, 0.2);\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vYWRtaW4tZW5xdWlyeS9hZG1pbi1lbnF1aXJ5LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsYUFBYTtJQUNiLDZCQUE2QjtJQUM3QixpQ0FBaUM7QUFDckM7O0FBRUE7SUFDSSwwQ0FBMEM7QUFDOUMiLCJmaWxlIjoic3JjL2FwcC9hZG1pbi9hZG1pbi1lbnF1aXJ5L2FkbWluLWVucXVpcnkuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImgzIHtcclxuICAgIGZvbnQtc2l6ZTogMTUwJTtcclxufVxyXG5cclxuaHIge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2U2N2UyMjtcclxuICAgIG1hcmdpbjogNXB4IDA7XHJcbn1cclxuXHJcbi5lbnF1aXJ5IHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycztcclxufVxyXG5cclxuLmVucXVpcnk6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/admin/admin-enquiry/admin-enquiry.component.html":
/*!******************************************************************!*\
  !*** ./src/app/admin/admin-enquiry/admin-enquiry.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row mt-2\">\r\n  <div class=\"col-md-8 col-sm-12 mx-auto\">\r\n    <h3>Enquiries..</h3>\r\n    <hr>\r\n    <div class=\"table-responsive\" *ngIf=\"enquiries.length > 0; else empty_enquiries\">\r\n      <table class=\"table table-sm\">\r\n        <thead>\r\n          <tr>\r\n            <th>ID</th>\r\n            <th>Name</th>\r\n            <th>Email</th>\r\n            <th>Message</th>\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <tr class=\"enquiry\" *ngFor=\"let enquiry of enquiries, let i = index\" [routerLink]=\"enquiry._id\" routerLinkActive=\"active\" skipLocationChange>\r\n            <td>{{ i+1 }}</td>\r\n            <td>{{ enquiry.name }}</td>\r\n            <td class=\"email\">{{ enquiry.email }}</td>\r\n            <td>{{ limitData(enquiry.message) }}</td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n    </div>\r\n    <ng-template #empty_enquiries>\r\n      <h5 class=\"pl-3\">No Enquiries Available..</h5>\r\n    </ng-template>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/admin/admin-enquiry/admin-enquiry.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/admin/admin-enquiry/admin-enquiry.component.ts ***!
  \****************************************************************/
/*! exports provided: AdminEnquiryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminEnquiryComponent", function() { return AdminEnquiryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_enquiry_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/enquiry.service */ "./src/app/services/enquiry.service.ts");




var AdminEnquiryComponent = /** @class */ (function () {
    function AdminEnquiryComponent(enquiryService, router, route) {
        this.enquiryService = enquiryService;
        this.router = router;
        this.route = route;
    }
    AdminEnquiryComponent.prototype.ngOnInit = function () {
        this.enquiries = this.enquiryService.getEnquiries();
    };
    AdminEnquiryComponent.prototype.limitData = function (data, limit) {
        if (limit === void 0) { limit = 25; }
        if (data.length >= limit) {
            var newdata_1 = [];
            data.split(' ').reduce(function (acc, cur) {
                if (acc + cur.length <= limit) {
                    newdata_1.push(cur);
                }
                return acc + cur.length;
            }, 0);
            return newdata_1.join(' ') + "...";
        }
        return data;
    };
    AdminEnquiryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admin-enquiry',
            template: __webpack_require__(/*! ./admin-enquiry.component.html */ "./src/app/admin/admin-enquiry/admin-enquiry.component.html"),
            styles: [__webpack_require__(/*! ./admin-enquiry.component.css */ "./src/app/admin/admin-enquiry/admin-enquiry.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_enquiry_service__WEBPACK_IMPORTED_MODULE_3__["EnquiryService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], AdminEnquiryComponent);
    return AdminEnquiryComponent;
}());



/***/ }),

/***/ "./src/app/admin/admin-enquiry/admin-reply-enquiry/admin-reply-enquiry.component.css":
/*!*******************************************************************************************!*\
  !*** ./src/app/admin/admin-enquiry/admin-reply-enquiry/admin-reply-enquiry.component.css ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\r\n    margin: 0;\r\n}\r\n\r\nh3 {\r\n    font-size: 150px;\r\n}\r\n\r\nhr {\r\n    border: 1px solid #e67e22;\r\n    margin: 5px 0;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vYWRtaW4tZW5xdWlyeS9hZG1pbi1yZXBseS1lbnF1aXJ5L2FkbWluLXJlcGx5LWVucXVpcnkuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixhQUFhO0FBQ2pCIiwiZmlsZSI6InNyYy9hcHAvYWRtaW4vYWRtaW4tZW5xdWlyeS9hZG1pbi1yZXBseS1lbnF1aXJ5L2FkbWluLXJlcGx5LWVucXVpcnkuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIioge1xyXG4gICAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG5oMyB7XHJcbiAgICBmb250LXNpemU6IDE1MHB4O1xyXG59XHJcblxyXG5ociB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZTY3ZTIyO1xyXG4gICAgbWFyZ2luOiA1cHggMDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/admin/admin-enquiry/admin-reply-enquiry/admin-reply-enquiry.component.html":
/*!********************************************************************************************!*\
  !*** ./src/app/admin/admin-enquiry/admin-reply-enquiry/admin-reply-enquiry.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row mt-2\">\r\n  <div class=\"col-md-8 col-sm-12 mx-auto\">\r\n    <form class=\"\" (submit)=\"sendReply()\" [formGroup]=\"form\">\r\n      <div class=\"reply-header\">\r\n        <div class=\"reply-to\">\r\n          <p><strong>To : </strong>{{enquiry.email}}</p>\r\n        </div>\r\n        <hr>\r\n        <div class=\"reply-subject form-group\">\r\n          <label for=\"subject\">Subject : </label>\r\n          <input class=\"subject\" type=\"text\" id=\"subject\" name=\"subject\" placeholder=\"Subject\" formControlName=\"subject\">\r\n          <span *ngIf=\"!form.get('subject').valid && form.get('subject').touched\">*Please enter valid Subject</span>\r\n        </div>\r\n      </div>\r\n      <div class=\"reply-body form-group\">\r\n        <label for=\"subject\">Body : </label>\r\n        <textarea class=\"body\" name=\"body\" id=\"body\" rows=\"8\"placeholder=\"Body\" formControlName=\"body\"></textarea>\r\n        <span *ngIf=\"!form.get('body').valid && form.get('body').touched\">*Please enter reply Body</span>\r\n      </div>\r\n      <hr>\r\n      <div class=\"reply-footer\">\r\n        <button class=\"reply-btn\" type=\"submit\">Send</button>\r\n        <button class=\"btn-cancel float-right\" type=\"button\" (click)=\"cancel()\">Cancel</button>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/admin/admin-enquiry/admin-reply-enquiry/admin-reply-enquiry.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/admin/admin-enquiry/admin-reply-enquiry/admin-reply-enquiry.component.ts ***!
  \******************************************************************************************/
/*! exports provided: AdminReplyEnquiryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminReplyEnquiryComponent", function() { return AdminReplyEnquiryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_enquiry_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/enquiry.service */ "./src/app/services/enquiry.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");





var AdminReplyEnquiryComponent = /** @class */ (function () {
    function AdminReplyEnquiryComponent(enquiryService, router, route) {
        this.enquiryService = enquiryService;
        this.router = router;
        this.route = route;
    }
    AdminReplyEnquiryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .subscribe(function (params) {
            _this.id = params['id'];
            _this.enquiry = _this.enquiryService.getEnquiry(_this.id);
        });
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            subject: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
            }),
            body: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
            })
        });
    };
    AdminReplyEnquiryComponent.prototype.sendReply = function () {
        if (this.form.valid) {
            this.enquiryService.sendReply(this.enquiry.email, this.form.value.subject, this.form.value.body);
            this.form.reset();
        }
    };
    AdminReplyEnquiryComponent.prototype.cancel = function () {
        this.router.navigate(['/admin', 'enquiry', this.id], { relativeTo: this.route, skipLocationChange: true });
    };
    AdminReplyEnquiryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admin-reply-enquiry',
            template: __webpack_require__(/*! ./admin-reply-enquiry.component.html */ "./src/app/admin/admin-enquiry/admin-reply-enquiry/admin-reply-enquiry.component.html"),
            styles: [__webpack_require__(/*! ./admin-reply-enquiry.component.css */ "./src/app/admin/admin-enquiry/admin-reply-enquiry/admin-reply-enquiry.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_enquiry_service__WEBPACK_IMPORTED_MODULE_2__["EnquiryService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], AdminReplyEnquiryComponent);
    return AdminReplyEnquiryComponent;
}());



/***/ }),

/***/ "./src/app/admin/admin-enquiry/admin-show-enquiry/admin-show-enquiry.component.css":
/*!*****************************************************************************************!*\
  !*** ./src/app/admin/admin-enquiry/admin-show-enquiry/admin-show-enquiry.component.css ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\r\n    margin: 0;\r\n}\r\n\r\nh3 {\r\n    font-size: 150px;\r\n}\r\n\r\nhr {\r\n    border: 1px solid #e67e22;\r\n    margin: 5px 0;\r\n}\r\n\r\n.enquiry {\r\n    background-color: #f4f4f4;\r\n    padding: 10px;\r\n    margin: 10px;\r\n}\r\n\r\n.footer {\r\n    font-size: 90%;\r\n}\r\n\r\n.btn-cancel {\r\n    margin-top: 5px;\r\n}\r\n\r\n.reply {\r\n    text-decoration: none;\r\n    color: #000;\r\n    -webkit-text-decoration-color: transparent;\r\n            text-decoration-color: transparent;\r\n    transition: -webkit-text-decoration 0.2s, -webkit-text-decoration-color 0.2s;\r\n    transition: text-decoration 0.2s, text-decoration-color 0.2s;\r\n    transition: text-decoration 0.2s, text-decoration-color 0.2s, -webkit-text-decoration 0.2s, -webkit-text-decoration-color 0.2s;\r\n}\r\n\r\n.reply:hover{\r\n    color: #000;\r\n    text-decoration: underline;\r\n    -webkit-text-decoration-color: #e67e22;\r\n            text-decoration-color: #e67e22;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vYWRtaW4tZW5xdWlyeS9hZG1pbi1zaG93LWVucXVpcnkvYWRtaW4tc2hvdy1lbnF1aXJ5LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxTQUFTO0FBQ2I7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixhQUFhO0lBQ2IsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLFdBQVc7SUFDWCwwQ0FBa0M7WUFBbEMsa0NBQWtDO0lBQ2xDLDRFQUE0RDtJQUE1RCw0REFBNEQ7SUFBNUQsOEhBQTREO0FBQ2hFOztBQUVBO0lBQ0ksV0FBVztJQUNYLDBCQUEwQjtJQUMxQixzQ0FBOEI7WUFBOUIsOEJBQThCO0FBQ2xDIiwiZmlsZSI6InNyYy9hcHAvYWRtaW4vYWRtaW4tZW5xdWlyeS9hZG1pbi1zaG93LWVucXVpcnkvYWRtaW4tc2hvdy1lbnF1aXJ5LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqIHtcclxuICAgIG1hcmdpbjogMDtcclxufVxyXG5cclxuaDMge1xyXG4gICAgZm9udC1zaXplOiAxNTBweDtcclxufVxyXG5cclxuaHIge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2U2N2UyMjtcclxuICAgIG1hcmdpbjogNXB4IDA7XHJcbn1cclxuXHJcbi5lbnF1aXJ5IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNGY0ZjQ7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgbWFyZ2luOiAxMHB4O1xyXG59XHJcblxyXG4uZm9vdGVyIHtcclxuICAgIGZvbnQtc2l6ZTogOTAlO1xyXG59XHJcblxyXG4uYnRuLWNhbmNlbCB7XHJcbiAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbn1cclxuXHJcbi5yZXBseSB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBjb2xvcjogIzAwMDtcclxuICAgIHRleHQtZGVjb3JhdGlvbi1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICB0cmFuc2l0aW9uOiB0ZXh0LWRlY29yYXRpb24gMC4ycywgdGV4dC1kZWNvcmF0aW9uLWNvbG9yIDAuMnM7XHJcbn1cclxuXHJcbi5yZXBseTpob3ZlcntcclxuICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICB0ZXh0LWRlY29yYXRpb24tY29sb3I6ICNlNjdlMjI7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/admin/admin-enquiry/admin-show-enquiry/admin-show-enquiry.component.html":
/*!******************************************************************************************!*\
  !*** ./src/app/admin/admin-enquiry/admin-show-enquiry/admin-show-enquiry.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row mt-2\">\r\n  <div class=\"col-md-8 col-sm-12 mx-auto\">\r\n    <div class=\"enquiry\">\r\n        <div class=\"header\">\r\n          <p>\r\n            <strong>{{ enquiry.name }}</strong>\r\n            <span class=\"float-right\">\r\n              <a class=\"reply\" routerLink=\"reply\" skipLocationChange>Reply</a>\r\n            </span>\r\n          </p>\r\n        </div>\r\n        <hr>\r\n        <div class=\"body\">\r\n          <p>\r\n            {{ enquiry.message }}\r\n          </p>\r\n        </div>\r\n        <hr>\r\n        <div class=\"footer\">\r\n          <div class=\"row\">\r\n            <div class=\"col-md-9 col-sm-12\">\r\n              <p>\r\n                <a href=\"replyTo:{{enquiry.email}}\">{{ enquiry.email }}</a>\r\n              </p>\r\n              <p>\r\n                +91 {{ enquiry.phone }}\r\n              </p>\r\n            </div>\r\n            <div class=\"col-md-3 col-sm-12\">\r\n              <button type=\"button\" class=\"btn-cancel float-right\" (click)=\"cancel()\">Cancel</button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/admin/admin-enquiry/admin-show-enquiry/admin-show-enquiry.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/admin/admin-enquiry/admin-show-enquiry/admin-show-enquiry.component.ts ***!
  \****************************************************************************************/
/*! exports provided: AdminShowEnquiryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminShowEnquiryComponent", function() { return AdminShowEnquiryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_enquiry_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/enquiry.service */ "./src/app/services/enquiry.service.ts");




var AdminShowEnquiryComponent = /** @class */ (function () {
    function AdminShowEnquiryComponent(enquiryService, router, route) {
        this.enquiryService = enquiryService;
        this.router = router;
        this.route = route;
    }
    AdminShowEnquiryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .subscribe(function (params) {
            _this.id = params['id'];
            _this.enquiry = _this.enquiryService.getEnquiry(_this.id);
        });
    };
    AdminShowEnquiryComponent.prototype.cancel = function () {
        this.router.navigate(['/admin', 'enquiry'], { relativeTo: this.route, skipLocationChange: true });
    };
    AdminShowEnquiryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admin-show-enquiry',
            template: __webpack_require__(/*! ./admin-show-enquiry.component.html */ "./src/app/admin/admin-enquiry/admin-show-enquiry/admin-show-enquiry.component.html"),
            styles: [__webpack_require__(/*! ./admin-show-enquiry.component.css */ "./src/app/admin/admin-enquiry/admin-show-enquiry/admin-show-enquiry.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_enquiry_service__WEBPACK_IMPORTED_MODULE_3__["EnquiryService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], AdminShowEnquiryComponent);
    return AdminShowEnquiryComponent;
}());



/***/ }),

/***/ "./src/app/admin/admin-exam/admin-exam.component.css":
/*!***********************************************************!*\
  !*** ./src/app/admin/admin-exam/admin-exam.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluLWV4YW0vYWRtaW4tZXhhbS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/admin/admin-exam/admin-exam.component.html":
/*!************************************************************!*\
  !*** ./src/app/admin/admin-exam/admin-exam.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  exams works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/admin/admin-exam/admin-exam.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/admin/admin-exam/admin-exam.component.ts ***!
  \**********************************************************/
/*! exports provided: AdminExamComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminExamComponent", function() { return AdminExamComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AdminExamComponent = /** @class */ (function () {
    function AdminExamComponent() {
    }
    AdminExamComponent.prototype.ngOnInit = function () {
    };
    AdminExamComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admin-exam',
            template: __webpack_require__(/*! ./admin-exam.component.html */ "./src/app/admin/admin-exam/admin-exam.component.html"),
            styles: [__webpack_require__(/*! ./admin-exam.component.css */ "./src/app/admin/admin-exam/admin-exam.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AdminExamComponent);
    return AdminExamComponent;
}());



/***/ }),

/***/ "./src/app/admin/admin-faculty/admin-add-faculty/admin-add-faculty.component.css":
/*!***************************************************************************************!*\
  !*** ./src/app/admin/admin-faculty/admin-add-faculty/admin-add-faculty.component.css ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\r\n    margin: 0;\r\n}\r\n\r\nhr {\r\n    border: 1px solid #ffd000;\r\n    margin: 5px 0;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vYWRtaW4tZmFjdWx0eS9hZG1pbi1hZGQtZmFjdWx0eS9hZG1pbi1hZGQtZmFjdWx0eS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksU0FBUztBQUNiOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGFBQWE7QUFDakIiLCJmaWxlIjoic3JjL2FwcC9hZG1pbi9hZG1pbi1mYWN1bHR5L2FkbWluLWFkZC1mYWN1bHR5L2FkbWluLWFkZC1mYWN1bHR5LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqIHtcclxuICAgIG1hcmdpbjogMDtcclxufVxyXG5cclxuaHIge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2ZmZDAwMDtcclxuICAgIG1hcmdpbjogNXB4IDA7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/admin/admin-faculty/admin-add-faculty/admin-add-faculty.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/admin/admin-faculty/admin-add-faculty/admin-add-faculty.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  <div class=\"row mt-2\">\r\n    <div class=\"col-md-8 col-sm-10 mx-auto\">\r\n\r\n      <h4 class=\"text-center mb-3\">Add New Faculty</h4>\r\n\r\n      <form class=\"add_new-faulty\" (submit)=\"addFaculty()\" [formGroup]=\"form\">\r\n        \r\n        <div class=\"row\">\r\n\r\n          <div class=\"col-md-6 col-sm-12\">\r\n            <div class=\"form-group\">\r\n              <label for=\"name\">Name : </label>\r\n              <input class=\"name\" type=\"text\" name=\"name\" id=\"name\" formControlName=\"name\" placeholder=\"Name\">\r\n              <span *ngIf=\"!form.get('name').valid && form.get('name').touched\">*Please enter Faculty Name</span>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"col-md-6 col-sm-12\">\r\n            <div class=\"form-group\">\r\n              <label for=\"birthDate\">Birth Date : </label>\r\n              <input class=\"birth-date\" type=\"date\" name=\"birthDate\" id=\"birthDate\" formControlName=\"birthDate\">\r\n              <span *ngIf=\"!form.get('birthDate').valid && form.get('birthDate').touched\">*Please enter Birth Date</span>\r\n            </div>\r\n          </div>\r\n\r\n        </div>\r\n\r\n        <div class=\"row\">\r\n\r\n          <div class=\"col-md-6 col-sm-12\">\r\n            <div class=\"form-group\">\r\n              <label for=\"email\">Email : </label>\r\n              <input class=\"email\" type=\"email\" name=\"email\" id=\"email\" formControlName=\"email\" placeholder=\"example@email.com\">\r\n              <span *ngIf=\"!form.get('email').valid && form.get('email').touched\">*Please enter valid Email</span>\r\n            </div>\r\n          </div>\r\n          \r\n          <div class=\"col-md-6 col-sm-12\">\r\n            <div class=\"form-group\">\r\n              <label for=\"phone\">Phone : </label>\r\n              <input class=\"phone\" type=\"text\" pattern=\"\\d*\" name=\"phone\" id=\"phone\" formControlName=\"phone\" placeholder=\"9876543210\">\r\n              <span *ngIf=\"!form.get('phone').valid && form.get('phone').touched\">*Please enter valid Phone Number</span>\r\n            </div>\r\n          </div>\r\n\r\n        </div>\r\n        \r\n        <div class=\"row\">\r\n          <div class=\"col-12\">\r\n            <div class=\"form-group\">\r\n              <label for=\"description\">Description : </label>\r\n              <textarea type=\"text\" class=\"description\" name=\"description\" id=\"description\" rows=\"5\" formControlName=\"description\" placeholder=\"Description\"></textarea>\r\n              <span *ngIf=\"!form.get('description').valid && form.get('description').touched\">*Please enter Faculty Description</span>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"row\">\r\n          <div class=\"col-12\">\r\n            <div class=\"form-group\">\r\n              <label for=\"image\">Select Profile Image : </label>\r\n              <input type=\"file\" id=\"image\" name=\"image\" formControlName=\"image\" (change)=\"onImagePicked($event)\">\r\n              <span *ngIf=\"!form.get('image').valid && form.get('image').touched\">*Please Select Image File</span>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"row mt-1\" *ngIf=\"formError\">\r\n          <div class=\"col-12\">\r\n            <span>*Please Fill All Faculty Fields</span>\r\n          </div>\r\n        </div>\r\n\r\n        <hr>\r\n  \r\n        <div class=\"row\">\r\n          <div class=\"col-6\">\r\n            <button type=\"submit\" class=\"btn-add\">Save</button>\r\n          </div>\r\n          <div class=\"col-6\">\r\n            <button type=\"button\" class=\"btn-cancel float-right\" (click)=\"cancel()\">Cancel</button>\r\n          </div>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n  "

/***/ }),

/***/ "./src/app/admin/admin-faculty/admin-add-faculty/admin-add-faculty.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/admin/admin-faculty/admin-add-faculty/admin-add-faculty.component.ts ***!
  \**************************************************************************************/
/*! exports provided: AdminAddFacultyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminAddFacultyComponent", function() { return AdminAddFacultyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_faculty_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/faculty.service */ "./src/app/services/faculty.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_image_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/image.service */ "./src/app/services/image.service.ts");
/* harmony import */ var _validators_form_validator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../validators/form.validator */ "./src/app/validators/form.validator.ts");







var AdminAddFacultyComponent = /** @class */ (function () {
    function AdminAddFacultyComponent(facultyService, imageService, formValidator, router, route) {
        this.facultyService = facultyService;
        this.imageService = imageService;
        this.formValidator = formValidator;
        this.router = router;
        this.route = route;
        this.formError = false;
        this.imgExt = ['jpg', 'png'];
    }
    AdminAddFacultyComponent.prototype.ngOnInit = function () {
        this.image = this.imageService.getProfileImage();
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
            }),
            birthDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
            }),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email]
            }),
            phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(10)]
            }),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
            }),
            image: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, {
                validators: [this.formValidator.imageValidate.bind(this)]
            })
        });
    };
    AdminAddFacultyComponent.prototype.addFaculty = function () {
        if (this.form.invalid) {
            this.formError = true;
        }
        if (this.form.valid) {
            this.formError = false;
            this.facultyService.addFaculty(this.form.value.name, this.form.value.birthDate, this.form.value.description, this.image, this.form.value.email, this.form.value.phone, "activated");
            this.form.reset();
            this.cancel();
        }
    };
    AdminAddFacultyComponent.prototype.onImagePicked = function (event) {
        var _this = this;
        var file = event.target.files[0];
        if (file) {
            var ext = file.name.substring(file.name.lastIndexOf('.') + 1);
            if (!(this.imgExt.indexOf(ext) != -1)) {
                return;
            }
            var reader = new FileReader();
            reader.onload = function (event) {
                _this.image = event.target.result;
            };
            reader.readAsDataURL(file);
        }
    };
    AdminAddFacultyComponent.prototype.cancel = function () {
        this.router.navigate(['/admin', 'faculty'], { relativeTo: this.route, skipLocationChange: true });
    };
    AdminAddFacultyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admin-add-faculty',
            template: __webpack_require__(/*! ./admin-add-faculty.component.html */ "./src/app/admin/admin-faculty/admin-add-faculty/admin-add-faculty.component.html"),
            styles: [__webpack_require__(/*! ./admin-add-faculty.component.css */ "./src/app/admin/admin-faculty/admin-add-faculty/admin-add-faculty.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_faculty_service__WEBPACK_IMPORTED_MODULE_2__["FacultyService"],
            _services_image_service__WEBPACK_IMPORTED_MODULE_5__["ImageService"],
            _validators_form_validator__WEBPACK_IMPORTED_MODULE_6__["FormValidator"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], AdminAddFacultyComponent);
    return AdminAddFacultyComponent;
}());



/***/ }),

/***/ "./src/app/admin/admin-faculty/admin-edit-faculty/admin-edit-faculty.component.css":
/*!*****************************************************************************************!*\
  !*** ./src/app/admin/admin-faculty/admin-edit-faculty/admin-edit-faculty.component.css ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\r\n    margin: 0;\r\n}\r\n\r\nhr {\r\n    border: 1px solid #e67e22;\r\n    margin: 8px 0;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vYWRtaW4tZmFjdWx0eS9hZG1pbi1lZGl0LWZhY3VsdHkvYWRtaW4tZWRpdC1mYWN1bHR5LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxTQUFTO0FBQ2I7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsYUFBYTtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluLWZhY3VsdHkvYWRtaW4tZWRpdC1mYWN1bHR5L2FkbWluLWVkaXQtZmFjdWx0eS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XHJcbiAgICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbmhyIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlNjdlMjI7XHJcbiAgICBtYXJnaW46IDhweCAwO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/admin/admin-faculty/admin-edit-faculty/admin-edit-faculty.component.html":
/*!******************************************************************************************!*\
  !*** ./src/app/admin/admin-faculty/admin-edit-faculty/admin-edit-faculty.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row mt-2\">\r\n  <div class=\"col-md-8 col-sm-10 mx-auto\">\r\n\r\n    <h4 class=\"text-center mb-3\">Edit Faculty <strong>{{faculty.name}}</strong></h4>    \r\n\r\n    <form class=\"add_new-faulty\" (submit)=\"editFaculty()\" [formGroup]=\"form\">\r\n      \r\n      <div class=\"row\">\r\n\r\n        <div class=\"col-md-6 col-sm-12\">\r\n          <div class=\"form-group\">\r\n            <label for=\"name\">Name : </label>\r\n            <input class=\"name\" type=\"text\" name=\"name\" id=\"name\" formControlName=\"name\" placeholder=\"Name\">\r\n            <span *ngIf=\"!form.get('name').valid && form.get('name').touched\">*Please enter Faculty Name</span>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-md-6 col-sm-12\">\r\n          <div class=\"form-group\">\r\n            <label for=\"birthDate\">Birth Date : </label>\r\n            <input class=\"birth-date\" type=\"date\" name=\"birthDate\" id=\"birthDate\" formControlName=\"birthDate\">\r\n            <span *ngIf=\"!form.get('birthDate').valid && form.get('birthDate').touched\">*Please enter Birth Date</span>\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n\r\n      <div class=\"row\">\r\n\r\n        <div class=\"col-md-6 col-sm-12\">\r\n          <div class=\"form-group\">\r\n            <label for=\"email\">Email : </label>\r\n            <input class=\"email\" type=\"email\" name=\"email\" id=\"email\" formControlName=\"email\" placeholder=\"example@email.com\">\r\n            <span *ngIf=\"!form.get('email').valid && form.get('email').touched\">*Please enter valid Email</span>\r\n          </div>\r\n        </div>\r\n        \r\n        <div class=\"col-md-6 col-sm-12\">\r\n          <div class=\"form-group\">\r\n            <label for=\"phone\">Phone : </label>\r\n            <input class=\"phone\" type=\"text\" pattern=\"\\d*\" name=\"phone\" id=\"phone\" formControlName=\"phone\" placeholder=\"9876543210\">\r\n            <span *ngIf=\"!form.get('phone').valid && form.get('phone').touched\">*Please enter valid Phone Number</span>\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n      \r\n      <div class=\"row\">\r\n        <div class=\"col-12\">\r\n          <div class=\"form-group\">\r\n            <label for=\"description\">Description : </label>\r\n            <textarea type=\"text\" class=\"description\" name=\"description\" id=\"description\" rows=\"5\" formControlName=\"description\" placeholder=\"Description\"></textarea>\r\n            <span *ngIf=\"!form.get('description').valid && form.get('description').touched\">*Please enter Faculty Description</span>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"row\">\r\n        <div class=\"col-12\">\r\n          <div class=\"form-group\">\r\n            <label for=\"image\">Select Profile Image : </label>\r\n            <input type=\"file\" id=\"image\" name=\"image\" formControlName=\"image\" (change)=\"onImagePicked($event)\">\r\n            <span *ngIf=\"!form.get('image').valid && form.get('image').touched\">*Please Select Image File</span>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"row mt-1\" *ngIf=\"formError\">\r\n        <div class=\"col-12\">\r\n          <span>*Please Fill All Article Fields</span>\r\n        </div>\r\n      </div>\r\n        \r\n      <hr>\r\n\r\n      <div class=\"row\">\r\n        <div class=\"col-6\">\r\n          <button type=\"submit\" class=\"btn-edit\">Save</button>\r\n        </div>\r\n        <div class=\"col-6\">\r\n          <button type=\"button\" class=\"btn-cancel float-right\" (click)=\"cancel()\">Cancel</button>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/admin/admin-faculty/admin-edit-faculty/admin-edit-faculty.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/admin/admin-faculty/admin-edit-faculty/admin-edit-faculty.component.ts ***!
  \****************************************************************************************/
/*! exports provided: AdminEditFacultyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminEditFacultyComponent", function() { return AdminEditFacultyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_faculty_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/faculty.service */ "./src/app/services/faculty.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _validators_form_validator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../validators/form.validator */ "./src/app/validators/form.validator.ts");






var AdminEditFacultyComponent = /** @class */ (function () {
    function AdminEditFacultyComponent(facultyService, formValidator, router, route) {
        this.facultyService = facultyService;
        this.formValidator = formValidator;
        this.router = router;
        this.route = route;
        this.formError = false;
        this.imgExt = ['jpg', 'png'];
    }
    AdminEditFacultyComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .subscribe(function (params) {
            var id = params['id'];
            _this.faculty = _this.facultyService.getFaculty(id);
            _this.image = _this.faculty.image;
        });
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.faculty.name, {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
            }),
            birthDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.faculty.birthDate, {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
            }),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.faculty.email, {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].email]
            }),
            phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.faculty.phone, {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(10)]
            }),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.faculty.description, {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
            }),
            image: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, {
                validators: [this.formValidator.imageValidate.bind(this)]
            })
        });
    };
    AdminEditFacultyComponent.prototype.onImagePicked = function (event) {
        var _this = this;
        var file = event.target.files[0];
        if (file) {
            var ext = file.name.substring(file.name.lastIndexOf('.') + 1);
            if (!(this.imgExt.indexOf(ext) != -1)) {
                return;
            }
            var reader = new FileReader();
            reader.onload = function (event) {
                _this.image = event.target.result;
            };
            reader.readAsDataURL(file);
        }
    };
    AdminEditFacultyComponent.prototype.editFaculty = function () {
        if (this.form.invalid) {
            this.formError = true;
        }
        if (this.form.valid) {
            this.formError = false;
            var faculty = {
                _id: this.faculty._id,
                name: this.form.value.name,
                birthDate: this.form.value.birthDate,
                description: this.form.value.description,
                image: this.image,
                email: this.form.value.email,
                phone: this.form.value.phone,
                status: this.faculty.status
            };
            this.facultyService.editFaculty(faculty);
            this.form.reset();
            this.cancel();
        }
    };
    AdminEditFacultyComponent.prototype.cancel = function () {
        this.router.navigate(['/admin', 'faculty', this.faculty._id], { relativeTo: this.route, skipLocationChange: true });
    };
    AdminEditFacultyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admin-edit-faculty',
            template: __webpack_require__(/*! ./admin-edit-faculty.component.html */ "./src/app/admin/admin-faculty/admin-edit-faculty/admin-edit-faculty.component.html"),
            styles: [__webpack_require__(/*! ./admin-edit-faculty.component.css */ "./src/app/admin/admin-faculty/admin-edit-faculty/admin-edit-faculty.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_faculty_service__WEBPACK_IMPORTED_MODULE_2__["FacultyService"],
            _validators_form_validator__WEBPACK_IMPORTED_MODULE_5__["FormValidator"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], AdminEditFacultyComponent);
    return AdminEditFacultyComponent;
}());



/***/ }),

/***/ "./src/app/admin/admin-faculty/admin-faculty.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/admin/admin-faculty/admin-faculty.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\r\n    margin: 0;\r\n}\r\n\r\nh3 {\r\n    font-size: 150%;\r\n}\r\n\r\nhr {\r\n    border-top: 2px solid #e67e22;\r\n    margin: 5px 0;\r\n    padding: 0; \r\n}\r\n\r\n.faculty-image {\r\n    border-radius: 50%;\r\n}\r\n\r\n.faculty-name {\r\n    color: #000;\r\n    text-decoration: none;\r\n    -webkit-text-decoration-color: transparent;\r\n            text-decoration-color: transparent;\r\n    transition: -webkit-text-decoration 0.2s, -webkit-text-decoration-color 0.2s;\r\n    transition: text-decoration 0.2s, text-decoration-color 0.2s;\r\n    transition: text-decoration 0.2s, text-decoration-color 0.2s, -webkit-text-decoration 0.2s, -webkit-text-decoration-color 0.2s;\r\n}\r\n\r\n.faculty-name:hover {\r\n    color: #000;\r\n    text-decoration: underline;\r\n    -webkit-text-decoration-color: #e67e22;\r\n            text-decoration-color: #e67e22;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vYWRtaW4tZmFjdWx0eS9hZG1pbi1mYWN1bHR5LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxTQUFTO0FBQ2I7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksNkJBQTZCO0lBQzdCLGFBQWE7SUFDYixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gscUJBQXFCO0lBQ3JCLDBDQUFrQztZQUFsQyxrQ0FBa0M7SUFDbEMsNEVBQTREO0lBQTVELDREQUE0RDtJQUE1RCw4SEFBNEQ7QUFDaEU7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsMEJBQTBCO0lBQzFCLHNDQUE4QjtZQUE5Qiw4QkFBOEI7QUFDbEMiLCJmaWxlIjoic3JjL2FwcC9hZG1pbi9hZG1pbi1mYWN1bHR5L2FkbWluLWZhY3VsdHkuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIioge1xyXG4gICAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG5oMyB7XHJcbiAgICBmb250LXNpemU6IDE1MCU7XHJcbn1cclxuXHJcbmhyIHtcclxuICAgIGJvcmRlci10b3A6IDJweCBzb2xpZCAjZTY3ZTIyO1xyXG4gICAgbWFyZ2luOiA1cHggMDtcclxuICAgIHBhZGRpbmc6IDA7IFxyXG59XHJcblxyXG4uZmFjdWx0eS1pbWFnZSB7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbn1cclxuXHJcbi5mYWN1bHR5LW5hbWUge1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICB0ZXh0LWRlY29yYXRpb24tY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgdHJhbnNpdGlvbjogdGV4dC1kZWNvcmF0aW9uIDAuMnMsIHRleHQtZGVjb3JhdGlvbi1jb2xvciAwLjJzO1xyXG59XHJcblxyXG4uZmFjdWx0eS1uYW1lOmhvdmVyIHtcclxuICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICB0ZXh0LWRlY29yYXRpb24tY29sb3I6ICNlNjdlMjI7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/admin/admin-faculty/admin-faculty.component.html":
/*!******************************************************************!*\
  !*** ./src/app/admin/admin-faculty/admin-faculty.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  <div class=\"row mt-2\">\r\n    <div class=\"col-md-8 col-sm-10 mx-auto\">\r\n      <div class=\"row\">\r\n        <div class=\"col-6\">\r\n          <h3>Faculty</h3>\r\n        </div>\r\n        <div class=\"col-6\">\r\n          <button class=\"new-btn float-right\" (click)=\"onNewFaculty()\">Add New Faculty</button>\r\n        </div>\r\n      </div>\r\n      <hr>\r\n\r\n      <div class=\"table-responsive\" *ngIf=\"faculties.length > 0; else empty_faculties\">\r\n        <table class=\"table table-sm table-hover\">\r\n          <thead>\r\n            <tr>\r\n              <th>ID</th>\r\n              <th>Faculty Name</th>\r\n              <th>Status</th>\r\n            </tr>\r\n          </thead>\r\n          <tbody>\r\n            <tr class=\"faculty\" *ngFor=\"let faculty of faculties, let i = index\" routerLinkActive=\"active\">\r\n              <td>{{ i+1 }}</td>\r\n              <td>\r\n                <img class=\"faculty-image\" [src]=\"faculty.image\" [alt]=\"faculty.name\" width=\"40px\">              \r\n                &nbsp;\r\n                <a [routerLink]=\"faculty._id\" class=\"faculty-name\" skipLocationChange>\r\n                  {{ faculty.name }}\r\n                </a>\r\n              </td>\r\n              <td>\r\n                {{ faculty.status | uppercase }}\r\n              </td>\r\n            </tr>\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n      <ng-template #empty_faculties>\r\n        <h5 class=\"pl-3\">No Faculties Available..</h5>\r\n      </ng-template>\r\n\r\n    </div>\r\n  </div>"

/***/ }),

/***/ "./src/app/admin/admin-faculty/admin-faculty.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/admin/admin-faculty/admin-faculty.component.ts ***!
  \****************************************************************/
/*! exports provided: AdminFacultyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminFacultyComponent", function() { return AdminFacultyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_faculty_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/faculty.service */ "./src/app/services/faculty.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var AdminFacultyComponent = /** @class */ (function () {
    function AdminFacultyComponent(facultyService, router, route) {
        this.facultyService = facultyService;
        this.router = router;
        this.route = route;
        this.faculties = [];
    }
    AdminFacultyComponent.prototype.ngOnInit = function () {
        this.faculties = this.facultyService.getFaculties();
    };
    AdminFacultyComponent.prototype.onNewFaculty = function () {
        this.router.navigate(['new'], { relativeTo: this.route, skipLocationChange: true });
    };
    AdminFacultyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admin-faculty',
            template: __webpack_require__(/*! ./admin-faculty.component.html */ "./src/app/admin/admin-faculty/admin-faculty.component.html"),
            styles: [__webpack_require__(/*! ./admin-faculty.component.css */ "./src/app/admin/admin-faculty/admin-faculty.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_faculty_service__WEBPACK_IMPORTED_MODULE_2__["FacultyService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], AdminFacultyComponent);
    return AdminFacultyComponent;
}());



/***/ }),

/***/ "./src/app/admin/admin-faculty/admin-show-faculty/admin-show-faculty.component.css":
/*!*****************************************************************************************!*\
  !*** ./src/app/admin/admin-faculty/admin-show-faculty/admin-show-faculty.component.css ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\r\n    margin: 0;\r\n}\r\n\r\nh3 {\r\n    margin-left: 10px;\r\n}\r\n\r\n.faculty {\r\n    background-color: #F4F4F4;\r\n    padding: 10px;\r\n}\r\n\r\n.faculty-image {\r\n    width: 80%;\r\n    margin: auto;\r\n}\r\n\r\n.faculty-name {\r\n    text-align: center;\r\n    margin-bottom: 3px;\r\n    text-decoration: underline;\r\n    -webkit-text-decoration-color: #e67e22;\r\n            text-decoration-color: #e67e22;\r\n}\r\n\r\np {\r\n    font-size: 80%;\r\n}\r\n\r\nhr {\r\n    border: 1px solid #e67e22;\r\n    margin: 5px 0;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vYWRtaW4tZmFjdWx0eS9hZG1pbi1zaG93LWZhY3VsdHkvYWRtaW4tc2hvdy1mYWN1bHR5LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxTQUFTO0FBQ2I7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLFVBQVU7SUFDVixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQiwwQkFBMEI7SUFDMUIsc0NBQThCO1lBQTlCLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsYUFBYTtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluLWZhY3VsdHkvYWRtaW4tc2hvdy1mYWN1bHR5L2FkbWluLXNob3ctZmFjdWx0eS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XHJcbiAgICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbmgzIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG59XHJcblxyXG4uZmFjdWx0eSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjRGNEY0O1xyXG4gICAgcGFkZGluZzogMTBweDtcclxufVxyXG5cclxuLmZhY3VsdHktaW1hZ2Uge1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIG1hcmdpbjogYXV0bztcclxufVxyXG5cclxuLmZhY3VsdHktbmFtZSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzcHg7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICAgIHRleHQtZGVjb3JhdGlvbi1jb2xvcjogI2U2N2UyMjtcclxufVxyXG5cclxucCB7XHJcbiAgICBmb250LXNpemU6IDgwJTtcclxufVxyXG5cclxuaHIge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2U2N2UyMjtcclxuICAgIG1hcmdpbjogNXB4IDA7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/admin/admin-faculty/admin-show-faculty/admin-show-faculty.component.html":
/*!******************************************************************************************!*\
  !*** ./src/app/admin/admin-faculty/admin-show-faculty/admin-show-faculty.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "    <div class=\"row mt-2\">\r\n      <div class=\"col-10 mx-auto\">\r\n        <div class=\"faculty\">\r\n          <div class=\"row\">\r\n            <div class=\"col-12\">\r\n              <button class=\"btn-close float-right\" (click)=\"cancel()\">X</button>\r\n            </div>\r\n          </div>\r\n          <hr>\r\n          <div class=\"row\">\r\n            <div class=\"col-md-4 col-sm-10 mx-auto\">\r\n              <div class=\"faculty-name\">\r\n                <h4>{{faculty.name}}</h4>\r\n              </div>\r\n              <div class=\"faculty-image\">\r\n                <img [src]=\"faculty.image\" [alt]=\"faculty.name\" width=\"100%\">\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-8 col-sm-10 mx-auto\">\r\n              <div class=\"table-responsive\">\r\n                <table class=\"table table-sm\">\r\n                  <tbody>\r\n                    <tr>\r\n                      <td>\r\n                        <strong>Birth Date : </strong>\r\n                      </td>\r\n                      <td>\r\n                        <p>{{faculty.birthDate}}</p>\r\n                      </td>\r\n                    </tr>\r\n                    <tr>\r\n                      <td>\r\n                        <strong>Description : </strong>\r\n                      </td>\r\n                      <td>\r\n                        <p>{{faculty.description}}</p>\r\n                      </td>\r\n                    </tr>\r\n                    <tr>\r\n                      <td>\r\n                        <strong><em>E</em>-mail : </strong>\r\n                      </td>\r\n                      <td>\r\n                        <p><a href=\"mailto:{{faculty.email}}\">{{faculty.email}}</a></p>\r\n                      </td>\r\n                    </tr>\r\n                    <tr>\r\n                      <td>\r\n                        <strong>Phone : </strong>\r\n                      </td>\r\n                      <td>\r\n                        <p>+91 {{faculty.phone}}</p>\r\n                      </td>\r\n                    </tr>\r\n                    <tr>\r\n                      <td>\r\n                        <strong>Status : </strong>\r\n                      </td>\r\n                      <td>\r\n                        <p>{{faculty.status | uppercase}}</p>\r\n                      </td>\r\n                    </tr>\r\n                  </tbody>\r\n                </table>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <hr>\r\n          <div class=\"row\">\r\n            <div class=\"col-6\">\r\n              <button routerLink=\"edit\" class=\"btn-edit\" skipLocationChange>Edit</button>\r\n            </div>\r\n            <div class=\"col-6\">\r\n              <button class=\" btn-deactivate float-right pointer\" (click)=\"changeStatus(faculty._id, 'deactivated')\" *ngIf=\"faculty.status === 'activated'\">Deactivate</button>\r\n              <button class=\"btn-activate float-right pointer\" (click)=\"changeStatus(faculty._id, 'activated')\" *ngIf=\"faculty.status === 'deactivated'\">Activate</button>\r\n            </div>\r\n          </div>\r\n    \r\n        </div>\r\n      </div>\r\n    </div>"

/***/ }),

/***/ "./src/app/admin/admin-faculty/admin-show-faculty/admin-show-faculty.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/admin/admin-faculty/admin-show-faculty/admin-show-faculty.component.ts ***!
  \****************************************************************************************/
/*! exports provided: AdminShowFacultyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminShowFacultyComponent", function() { return AdminShowFacultyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_faculty_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/faculty.service */ "./src/app/services/faculty.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var AdminShowFacultyComponent = /** @class */ (function () {
    function AdminShowFacultyComponent(facultyService, route, router) {
        this.facultyService = facultyService;
        this.route = route;
        this.router = router;
    }
    AdminShowFacultyComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.
            subscribe(function (params) {
            var id = params['id'];
            _this.faculty = _this.facultyService.getFaculty(id);
        });
    };
    AdminShowFacultyComponent.prototype.changeStatus = function (id, status) {
        this.facultyService.changeStatus(id, status);
        this.cancel();
    };
    AdminShowFacultyComponent.prototype.cancel = function () {
        this.router.navigate(['/admin', 'faculty'], { relativeTo: this.route, skipLocationChange: true });
    };
    AdminShowFacultyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admin-show-faculty',
            template: __webpack_require__(/*! ./admin-show-faculty.component.html */ "./src/app/admin/admin-faculty/admin-show-faculty/admin-show-faculty.component.html"),
            styles: [__webpack_require__(/*! ./admin-show-faculty.component.css */ "./src/app/admin/admin-faculty/admin-show-faculty/admin-show-faculty.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_faculty_service__WEBPACK_IMPORTED_MODULE_2__["FacultyService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AdminShowFacultyComponent);
    return AdminShowFacultyComponent;
}());



/***/ }),

/***/ "./src/app/admin/admin-student/admin-add-student/admin-add-student.component.css":
/*!***************************************************************************************!*\
  !*** ./src/app/admin/admin-student/admin-add-student/admin-add-student.component.css ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\r\n    margin: 0;\r\n}\r\n\r\nhr {\r\n    border: 1px solid #ffd000;\r\n    margin: 10px 0;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vYWRtaW4tc3R1ZGVudC9hZG1pbi1hZGQtc3R1ZGVudC9hZG1pbi1hZGQtc3R1ZGVudC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksU0FBUztBQUNiOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGNBQWM7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC9hZG1pbi9hZG1pbi1zdHVkZW50L2FkbWluLWFkZC1zdHVkZW50L2FkbWluLWFkZC1zdHVkZW50LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqIHtcclxuICAgIG1hcmdpbjogMDtcclxufVxyXG5cclxuaHIge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2ZmZDAwMDtcclxuICAgIG1hcmdpbjogMTBweCAwO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/admin/admin-student/admin-add-student/admin-add-student.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/admin/admin-student/admin-add-student/admin-add-student.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row mt-2\">\r\n  <div class=\"col-lg-8 col-md-8 col-sm-12 col-xs-12 col-12 mx-auto\">\r\n    <h4 class=\"text-center mb-3\">Add New Student</h4>\r\n    <form class=\"\" (submit)=\"addStudent()\" [formGroup]=\"form\">\r\n\r\n      <div class=\"row\">\r\n\r\n        <div class=\"col-md-6 col-sm-12\">\r\n          <div class=\"form-group\">\r\n            <label for=\"name\">Name : </label>\r\n            <input class=\"name\" type=\"text\" name=\"name\" id=\"name\" formControlName=\"name\" placeholder=\"Name\">\r\n            <span *ngIf=\"!form.get('name').valid && form.get('name').touched\">*Please enter Name</span>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-md-6 col-sm-12\">\r\n          <div class=\"form-group\">\r\n            <label for=\"birthDate\">Birth Date : </label>\r\n            <input class=\"birthDate\" type=\"date\" name=\"birthDate\" id=\"birthDate\" formControlName=\"birthDate\">\r\n            <span *ngIf=\"!form.get('birthDate').valid && form.get('birthDate').touched\">*Please enter Birth Date</span>\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n\r\n      \r\n      <div class=\"row\">\r\n\r\n        <div class=\"col-md-6 col-sm-12\">\r\n          <div class=\"form-group\">\r\n            <label for=\"firstGuardianName\">First Guardian Name : </label>\r\n            <input class=\"firstGuardianName\" type=\"text\" name=\"firstGuardianName\" id=\"firstGuardianName\" formControlName=\"firstGuardianName\" placeholder=\"First Guardian Name\">\r\n            <span *ngIf=\"!form.get('firstGuardianName').valid && form.get('firstGuardianName').touched\">*Please enter first Guardian Name</span>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-md-6 col-sm-12\">\r\n          <div class=\"form-group\">\r\n            <label for=\"firstGuardianRelation\">First Guardian Relation : </label>\r\n            <input class=\"firstGuardianRelation\" type=\"text\" name=\"firstGuardianRelation\" id=\"firstGuardianRelation\" formControlName=\"firstGuardianRelation\" placeholder=\"First Guardian Relation\">\r\n            <span *ngIf=\"!form.get('firstGuardianRelation').valid && form.get('firstGuardianRelation').touched\">*Please enter first Guardian Relation</span>\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n\r\n      <div class=\"row\">\r\n\r\n        <div class=\"col-md-6 col-sm-12\">\r\n          <div class=\"form-group\">\r\n            <label for=\"secondGuardianName\">Second Guardian Name : </label>\r\n            <input class=\"secondGuardianName\" type=\"text\" name=\"secondGuardianName\" id=\"secondGuardianName\" formControlName=\"secondGuardianName\" placeholder=\"Second Guardian Name\">\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-md-6 col-sm-12\">\r\n          <div class=\"form-group\">\r\n            <label for=\"secondGuardianRelation\">Second Guardian Relation : </label>\r\n            <input class=\"secondGuardianRelation\" type=\"text\" name=\"secondGuardianRelation\" id=\"secondGuardianRelation\" formControlName=\"secondGuardianRelation\" placeholder=\"Second Guardian Relation\">\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n      \r\n      <div class=\"row\">\r\n        <div class=\"col-md-6 col-sm-12\">\r\n          <div class=\"form-group\">\r\n            <label for=\"workPlace\">School /College /Office (Optional) : </label>\r\n            <input class=\"workPlace\" type=\"text\" name=\"workPlace\" id=\"workPlace\" formControlName=\"workPlace\" placeholder=\"Work Place\">\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-md-6 col-sm-12\">\r\n          <div class=\"form-group\">\r\n            <label for=\"bloodGroup\">Blood Group (Optional) : </label>\r\n            <input class=\"bloodGroup\" type=\"text\" name=\"bloodGroup\" id=\"bloodGroup\" formControlName=\"bloodGroup\" placeholder=\"Blood Group\">\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"row\">\r\n        <div class=\"col-12\">\r\n          <div class=\"form-group\">\r\n            <label for=\"medicalHistory\">Medical History : </label>\r\n            <textarea class=\"medicalHistory\" name=\"medicalHistory\" id=\"medicalHistory\" rows=\"3\" formControlName=\"medicalHistory\" placeholder=\"Medicle History\"></textarea>\r\n            <span *ngIf=\"!form.get('medicalHistory').valid && form.get('medicalHistory').touched\">*Please enter Medical History</span>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"row\">\r\n\r\n        <div class=\"col-md-6 col-sm-12\">\r\n          <div class=\"form-group\">\r\n            <label for=\"email\">Email : </label>\r\n            <input class=\"email\" type=\"email\" name=\"email\" id=\"email\" formControlName=\"email\" placeholder=\"example@email.com\">\r\n            <span *ngIf=\"!form.get('email').valid && form.get('email').touched\">*Please enter valid Email</span>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-md-6 col-sm-12\">\r\n          <div class=\"form-group\">\r\n            <label for=\"phone\">Phone : </label>\r\n            <input class=\"phone\" type=\"text\" pattern=\"\\d*\" name=\"phone\" id=\"phone\" maxlength=\"10\" minlength=\"10\" formControlName=\"phone\" placeholder=\"Phone\">\r\n            <span *ngIf=\"!form.get('phone').valid && form.get('phone').touched\">*Please enter valid phone number</span>\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n\r\n      <div class=\"row\">\r\n          <div class=\"col-12\">\r\n            <div class=\"form-group\">\r\n              <label for=\"address\">Address : </label>\r\n              <textarea class=\"address\" name=\"address\" id=\"address\" rows=\"3\" formControlName=\"address\" placeholder=\"Name\"></textarea>\r\n              <span *ngIf=\"!form.get('address').valid && form.get('address').touched\">*Please enter Address</span>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n      <div class=\"row\">\r\n\r\n        <div class=\"col-md-6 col-sm-12\">\r\n          <div class=\"form-group\">\r\n            <label for=\"branch\">Select Branch : </label>\r\n            <select class=\"branch\" type=\"text\" name=\"branch\" id=\"branch\" formControlName=\"branch\" placeholder=\"Branch\" (change)=\"branchChanged()\">\r\n              <option value=\"\">Select Branch</option>\r\n              <option *ngFor=\"let branch of branches\" [value]=\"branch._id\">{{branch.branch}}</option>\r\n            </select>\r\n            <span *ngIf=\"!form.get('branch').valid && form.get('branch').touched\">*Please Select Branch</span>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-md-6 col-sm-12\">\r\n          <div class=\"form-group\">\r\n            <label for=\"batch\">Select Batch : </label>\r\n            <select class=\"batch\" type=\"date\" name=\"batch\" id=\"batch\" formControlName=\"batch\" (change)=\"changeWeekType()\">\r\n              <option value=\"weekDays\">Week Day</option>\r\n              <option value=\"weekEnds\">Week End</option>\r\n            </select>\r\n            <span *ngIf=\"!form.get('batch').valid && form.get('batch').touched\">*Please Select Batch</span>\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n\r\n      <div class=\"row\">\r\n\r\n        <div class=\"col-md-6 col-sm-12\">\r\n          <div class=\"form-group\">\r\n            <label for=\"Class\">Select Batch Name : </label>\r\n            <select class=\"batchName\" type=\"text\" name=\"batchName\" id=\"batchName\" formControlName=\"batchName\">\r\n              <option value=\"\">Select Batch</option>\r\n              <option *ngFor=\"let batch of batches\" [value]=\"batch.batchName\">{{batch.batchName}}</option>\r\n            </select>\r\n            <span *ngIf=\"!form.get('batchName').valid && form.get('batchName').touched\">*Please Select Batch Name</span>\r\n          </div>\r\n        </div>\r\n  \r\n        <div class=\"col-md-6 col-sm-12\">\r\n          <div class=\"form-group\">\r\n            <label for=\"image\">Select Profile Image : </label>\r\n            <input type=\"file\" id=\"image\" name=\"image\" formControlName=\"image\" (change)=\"onImagePicked($event)\">\r\n            <span *ngIf=\"!form.get('image').valid && form.get('image').touched\">*Please Select Valid Image File</span>\r\n          </div>\r\n        </div>\r\n  \r\n      </div>\r\n\r\n      <div class=\"row mt-1\" *ngIf=\"formError\">\r\n        <div class=\"col-12\">\r\n          <span>*Please Fill All Student Fields</span>\r\n        </div>\r\n      </div>\r\n        \r\n      <hr>\r\n\r\n      <div class=\"row\">\r\n        <div class=\"col-12\">\r\n          <button type=\"submit\" class=\"btn-add\">ADD</button>\r\n    \r\n          <button type=\"button\" class=\"btn-cancel float-right\" (click)=\"cancel()\">Cancel</button>\r\n        </div>\r\n      </div>\r\n\r\n\r\n    </form>\r\n  </div>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/admin/admin-student/admin-add-student/admin-add-student.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/admin/admin-student/admin-add-student/admin-add-student.component.ts ***!
  \**************************************************************************************/
/*! exports provided: AdminAddStudentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminAddStudentComponent", function() { return AdminAddStudentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_branch_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/branch.service */ "./src/app/services/branch.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_student_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/student.service */ "./src/app/services/student.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_image_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/image.service */ "./src/app/services/image.service.ts");
/* harmony import */ var _validators_form_validator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../validators/form.validator */ "./src/app/validators/form.validator.ts");








var AdminAddStudentComponent = /** @class */ (function () {
    function AdminAddStudentComponent(branchService, formValidator, imageService, studentService, router, route) {
        this.branchService = branchService;
        this.formValidator = formValidator;
        this.imageService = imageService;
        this.studentService = studentService;
        this.router = router;
        this.route = route;
        this.formError = false;
        this.imgExt = ['jpg', 'png'];
        this.branches = [];
        this.batches = [];
        this.weekType = "weekDays";
    }
    AdminAddStudentComponent.prototype.ngOnInit = function () {
        this.branches = this.branchService.getBranches();
        this.image = this.imageService.getProfileImage();
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
            }),
            birthDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
            }),
            firstGuardianName: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
            }),
            firstGuardianRelation: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
            }),
            secondGuardianName: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]("", {}),
            secondGuardianRelation: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]("", {}),
            workPlace: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]("", {}),
            bloodGroup: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]("", {}),
            medicalHistory: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
            }),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email]
            }),
            phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(10)]
            }),
            address: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
            }),
            branch: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]("", {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
            }),
            batch: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.weekType, {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
            }),
            batchName: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]("", {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
            }),
            image: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, {
                validators: [this.formValidator.imageValidate.bind(this)]
            })
        });
    };
    AdminAddStudentComponent.prototype.branchChanged = function () {
        var _this = this;
        this.batches = [];
        var branch = this.branches.find(function (branch) { return branch._id === _this.form.value.branch; });
        if (branch !== undefined) {
            var len = branch.batch.length;
            for (var i = 0; i < len; i++) {
                if (branch.batch[i].batchType === this.weekType) {
                    this.batches.push(branch.batch[i]);
                }
            }
        }
    };
    AdminAddStudentComponent.prototype.changeWeekType = function () {
        this.weekType = this.form.value.batch;
        this.branchChanged();
    };
    AdminAddStudentComponent.prototype.onImagePicked = function (event) {
        var _this = this;
        var file = event.target.files[0];
        if (file) {
            var ext = file.name.substring(file.name.lastIndexOf('.') + 1);
            if (!(this.imgExt.indexOf(ext) != -1)) {
                return;
            }
            var reader = new FileReader();
            reader.onload = function (event) {
                _this.image = event.target.result;
            };
            reader.readAsDataURL(file);
        }
    };
    AdminAddStudentComponent.prototype.addStudent = function () {
        if (this.form.invalid) {
            this.formError = true;
        }
        if (this.form.valid) {
            this.formError = false;
            this.studentService.addStudent(this.form.value.name, this.form.value.birthDate, this.form.value.bloodGroup, this.form.value.workPlace, this.image, this.form.value.firstGuardianName, this.form.value.firstGuardianRelation, this.form.value.secondGuardianName, this.form.value.secondGuardianRelation, this.form.value.medicalHistory, this.form.value.phone, this.form.value.email, this.form.value.address, this.form.value.branch, this.form.value.batch, this.form.value.batchName, "activated");
            this.cancel();
        }
    };
    AdminAddStudentComponent.prototype.cancel = function () {
        this.router.navigate(['/admin', 'student'], { relativeTo: this.route, skipLocationChange: true });
    };
    AdminAddStudentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admin-add-student',
            template: __webpack_require__(/*! ./admin-add-student.component.html */ "./src/app/admin/admin-student/admin-add-student/admin-add-student.component.html"),
            styles: [__webpack_require__(/*! ./admin-add-student.component.css */ "./src/app/admin/admin-student/admin-add-student/admin-add-student.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_branch_service__WEBPACK_IMPORTED_MODULE_2__["BranchService"],
            _validators_form_validator__WEBPACK_IMPORTED_MODULE_7__["FormValidator"],
            _services_image_service__WEBPACK_IMPORTED_MODULE_6__["ImageService"],
            _services_student_service__WEBPACK_IMPORTED_MODULE_4__["StudentService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]])
    ], AdminAddStudentComponent);
    return AdminAddStudentComponent;
}());



/***/ }),

/***/ "./src/app/admin/admin-student/admin-edit-student/admin-edit-student.component.css":
/*!*****************************************************************************************!*\
  !*** ./src/app/admin/admin-student/admin-edit-student/admin-edit-student.component.css ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\r\n    margin: 0;\r\n}\r\n\r\nhr {\r\n    border: 1px solid #ffd000;\r\n    margin: 10px 0;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vYWRtaW4tc3R1ZGVudC9hZG1pbi1lZGl0LXN0dWRlbnQvYWRtaW4tZWRpdC1zdHVkZW50LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxTQUFTO0FBQ2I7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsY0FBYztBQUNsQiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluLXN0dWRlbnQvYWRtaW4tZWRpdC1zdHVkZW50L2FkbWluLWVkaXQtc3R1ZGVudC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XHJcbiAgICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbmhyIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZmQwMDA7XHJcbiAgICBtYXJnaW46IDEwcHggMDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/admin/admin-student/admin-edit-student/admin-edit-student.component.html":
/*!******************************************************************************************!*\
  !*** ./src/app/admin/admin-student/admin-edit-student/admin-edit-student.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row mt-2\">\r\n  <div class=\"col-lg-8 col-md-8 col-sm-12 col-xs-12 col-12 mx-auto\">\r\n      <h4 class=\"text-center mb-3\">Edit Student - {{student.name}}</h4>    \r\n    <form class=\"\" (submit)=\"editStudent()\" [formGroup]=\"form\">\r\n\r\n      <div class=\"row\">\r\n\r\n        <div class=\"col-md-6 col-sm-12\">\r\n          <div class=\"form-group\">\r\n            <label for=\"name\">Name : </label>\r\n            <input class=\"name\" type=\"text\" name=\"name\" id=\"name\" formControlName=\"name\" placeholder=\"Name\">\r\n            <span *ngIf=\"!form.get('name').valid && form.get('name').touched\">*Please enter Name</span>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-md-6 col-sm-12\">\r\n          <div class=\"form-group\">\r\n            <label for=\"birthDate\">Birth Date : </label>\r\n            <input class=\"birthDate\" type=\"date\" name=\"birthDate\" id=\"birthDate\" formControlName=\"birthDate\">\r\n            <span *ngIf=\"!form.get('birthDate').valid && form.get('birthDate').touched\">*Please enter Birth Date</span>\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n\r\n      \r\n      <div class=\"row\">\r\n\r\n        <div class=\"col-md-6 col-sm-12\">\r\n          <div class=\"form-group\">\r\n            <label for=\"firstGuardianName\">First Guardian Name : </label>\r\n            <input class=\"firstGuardianName\" type=\"text\" name=\"firstGuardianName\" id=\"firstGuardianName\" formControlName=\"firstGuardianName\" placeholder=\"First Guardian Name\">\r\n            <span *ngIf=\"!form.get('firstGuardianName').valid && form.get('firstGuardianName').touched\">*Please enter first Guardian Name</span>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-md-6 col-sm-12\">\r\n          <div class=\"form-group\">\r\n            <label for=\"firstGuardianRelation\">First Guardian Relation : </label>\r\n            <input class=\"firstGuardianRelation\" type=\"text\" name=\"firstGuardianRelation\" id=\"firstGuardianRelation\" formControlName=\"firstGuardianRelation\" placeholder=\"First Guardian Relation\">\r\n            <span *ngIf=\"!form.get('firstGuardianRelation').valid && form.get('firstGuardianRelation').touched\">*Please enter first Guardian Relation</span>\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n\r\n      <div class=\"row\">\r\n\r\n        <div class=\"col-md-6 col-sm-12\">\r\n          <div class=\"form-group\">\r\n            <label for=\"secondGuardianName\">Second Guardian Name : </label>\r\n            <input class=\"secondGuardianName\" type=\"text\" name=\"secondGuardianName\" id=\"secondGuardianName\" formControlName=\"secondGuardianName\" placeholder=\"Second Guardian Name\">\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-md-6 col-sm-12\">\r\n          <div class=\"form-group\">\r\n            <label for=\"secondGuardianRelation\">Second Guardian Relation : </label>\r\n            <input class=\"secondGuardianRelation\" type=\"text\" name=\"secondGuardianRelation\" id=\"secondGuardianRelation\" formControlName=\"secondGuardianRelation\" placeholder=\"Second Guardian Relation\">\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n      \r\n      <div class=\"row\">\r\n        <div class=\"col-md-6 col-sm-12\">\r\n          <div class=\"form-group\">\r\n            <label for=\"workPlace\">School /College /Office (Optional) : </label>\r\n            <input class=\"workPlace\" type=\"text\" name=\"workPlace\" id=\"workPlace\" formControlName=\"workPlace\" placeholder=\"Work Place\">\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-md-6 col-sm-12\">\r\n          <div class=\"form-group\">\r\n            <label for=\"bloodGroup\">Blood Group (Optional) : </label>\r\n            <input class=\"bloodGroup\" type=\"text\" name=\"bloodGroup\" id=\"bloodGroup\" formControlName=\"bloodGroup\" placeholder=\"Blood Group\">\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"row\">\r\n        <div class=\"col-12\">\r\n          <div class=\"form-group\">\r\n            <label for=\"medicalHistory\">Medical History : </label>\r\n            <textarea class=\"medicalHistory\" name=\"medicalHistory\" id=\"medicalHistory\" rows=\"3\" formControlName=\"medicalHistory\" placeholder=\"Medicle History\"></textarea>\r\n            <span *ngIf=\"!form.get('medicalHistory').valid && form.get('medicalHistory').touched\">*Please enter Medical History</span>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n\r\n      <div class=\"row\">\r\n\r\n        <div class=\"col-md-6 col-sm-12\">\r\n          <div class=\"form-group\">\r\n            <label for=\"email\">Email : </label>\r\n            <input class=\"email\" type=\"email\" name=\"email\" id=\"email\" formControlName=\"email\" placeholder=\"example@email.com\">\r\n            <span *ngIf=\"!form.get('email').valid && form.get('email').touched\">*Please enter valid Email</span>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-md-6 col-sm-12\">\r\n          <div class=\"form-group\">\r\n            <label for=\"phone\">Phone : </label>\r\n            <input class=\"phone\" type=\"text\" pattern=\"\\d*\" name=\"phone\" id=\"phone\" maxlength=\"10\" minlength=\"10\" formControlName=\"phone\" placeholder=\"Phone\">\r\n            <span *ngIf=\"!form.get('phone').valid && form.get('phone').touched\">*Please enter valid phone number</span>\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n\r\n      <div class=\"row\">\r\n          <div class=\"col-12\">\r\n            <div class=\"form-group\">\r\n              <label for=\"address\">Address : </label>\r\n              <textarea class=\"address\" name=\"address\" id=\"address\" rows=\"3\" formControlName=\"address\" placeholder=\"Name\"></textarea>\r\n              <span *ngIf=\"!form.get('address').valid && form.get('address').touched\">*Please enter Address</span>\r\n            </div>\r\n          </div>\r\n      </div>\r\n\r\n\r\n      <div class=\"row\">\r\n\r\n        <div class=\"col-md-6 col-sm-12\">\r\n          <div class=\"form-group\">\r\n            <label for=\"branch\">Select Branch : </label>\r\n            <select class=\"branch\" type=\"text\" name=\"branch\" id=\"branch\" formControlName=\"branch\" placeholder=\"Branch\" (change)=\"branchChanged()\">\r\n              <option value=\"\">Select Branch</option>\r\n              <option *ngFor=\"let branch of branches\" [value]=\"branch._id\">{{branch.branch}}</option>\r\n            </select>\r\n            <span *ngIf=\"!form.get('branch').valid && form.get('branch').touched\">*Please Select Branch</span>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-md-6 col-sm-12\">\r\n          <div class=\"form-group\">\r\n            <label for=\"batch\">Select Batch : </label>\r\n            <select class=\"batch\" type=\"date\" name=\"batch\" id=\"batch\" formControlName=\"batch\" (change)=\"changeWeekType()\">\r\n              <option value=\"weekDays\">Week Day</option>\r\n              <option value=\"weekEnds\">Week End</option>\r\n              </select>\r\n            <span *ngIf=\"!form.get('batch').valid && form.get('batch').touched\">*Please Select Batch</span>\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n\r\n      <div class=\"row\">\r\n\r\n        <div class=\"col-md-6 col-sm-12\">\r\n          <div class=\"form-group\">\r\n            <label for=\"batchName\">Select Batch Name : </label>\r\n            <select class=\"batchName\" type=\"text\" name=\"batchName\" id=\"batchName\" formControlName=\"batchName\">\r\n              <option value=\"\">Select Batch</option>\r\n              <option *ngFor=\"let batch of batches\" [value]=\"batch.batchName\">{{batch.batchName}}</option>\r\n            </select>\r\n            <span *ngIf=\"!form.get('batchName').valid && form.get('batchName').touched\">*Please Select Batch Name</span>\r\n          </div>\r\n        </div>\r\n  \r\n        <div class=\"col-md-6 col-sm-12\">\r\n          <div class=\"form-group\">\r\n            <label for=\"image\">Select Article Image : </label>\r\n            <input type=\"file\" id=\"image\" name=\"image\" formControlName=\"image\" (change)=\"onImagePicked($event)\">\r\n            <span *ngIf=\"!form.get('image').valid && form.get('image').touched\">*Please Select Valid Image File</span>\r\n          </div>\r\n        </div>\r\n  \r\n      </div>\r\n\r\n      <div class=\"row mt-1\" *ngIf=\"formError\">\r\n        <div class=\"col-12\">\r\n          <span>*Please Fill All Student Fields</span>\r\n        </div>\r\n      </div>\r\n      \r\n      <hr>\r\n\r\n      <div class=\"row\">\r\n          <div class=\"col-12\">\r\n            <button type=\"submit\" class=\"btn-save\">Save</button>\r\n        \r\n            <button type=\"button\" class=\"btn-cancel float-right\" (click)=\"cancel()\">Cancel</button>\r\n          </div>\r\n        </div>\r\n\r\n\r\n    </form>\r\n  </div>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/admin/admin-student/admin-edit-student/admin-edit-student.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/admin/admin-student/admin-edit-student/admin-edit-student.component.ts ***!
  \****************************************************************************************/
/*! exports provided: AdminEditStudentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminEditStudentComponent", function() { return AdminEditStudentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_branch_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/branch.service */ "./src/app/services/branch.service.ts");
/* harmony import */ var _services_student_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/student.service */ "./src/app/services/student.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _validators_form_validator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../validators/form.validator */ "./src/app/validators/form.validator.ts");







var AdminEditStudentComponent = /** @class */ (function () {
    function AdminEditStudentComponent(branchService, studentService, formValidator, router, route) {
        this.branchService = branchService;
        this.studentService = studentService;
        this.formValidator = formValidator;
        this.router = router;
        this.route = route;
        this.formError = false;
        this.branches = [];
        this.imgExt = ['jpg', 'png'];
        this.batches = [];
        this.weekType = "weekDays";
    }
    AdminEditStudentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.branches = this.branchService.getBranches();
        this.route.params
            .subscribe(function (params) {
            var id = params['id'];
            _this.student = Object.assign(_this.studentService.getStudent(id));
            _this.branch = _this.branches.find(function (branch) { return branch._id === _this.student.branch; });
            _this.image = _this.student.image;
        });
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.student.name, {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
            }),
            birthDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.student.birthDate, {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
            }),
            firstGuardianName: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.student.firstGuardianName, {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
            }),
            firstGuardianRelation: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.student.firstGuardianRelation, {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
            }),
            secondGuardianName: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.student.secondGuardianName, {}),
            secondGuardianRelation: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.student.secondGuardianRelation, {}),
            workPlace: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.student.workPlace, {}),
            bloodGroup: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.student.bloodGroup, {}),
            medicalHistory: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.student.medicalHistory, {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
            }),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.student.email, {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].email]
            }),
            phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.student.phone, {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(10)]
            }),
            address: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.student.address, {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
            }),
            branch: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.student.branch, {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
            }),
            batch: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.student.batch, {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
            }),
            batchName: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.student.batchName, {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
            }),
            image: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, {
                validators: [this.formValidator.imageValidate.bind(this)]
            })
        });
        this.branchChanged();
    };
    AdminEditStudentComponent.prototype.branchChanged = function () {
        var _this = this;
        this.batches = [];
        var branch = this.branches.find(function (branch) { return branch._id === _this.form.value.branch; });
        if (branch !== undefined) {
            var len = branch.batch.length;
            for (var i = 0; i < len; i++) {
                if (branch.batch[i].batchType === this.weekType) {
                    this.batches.push(branch.batch[i]);
                }
            }
        }
    };
    AdminEditStudentComponent.prototype.changeWeekType = function () {
        this.weekType = this.form.value.batch;
        this.branchChanged();
    };
    AdminEditStudentComponent.prototype.onImagePicked = function (event) {
        var _this = this;
        var file = event.target.files[0];
        if (file) {
            var ext = file.name.substring(file.name.lastIndexOf('.') + 1);
            if (!(this.imgExt.indexOf(ext) != -1)) {
                return;
            }
            var reader = new FileReader();
            reader.onload = function (event) {
                _this.image = event.target.result;
            };
            reader.readAsDataURL(file);
        }
    };
    AdminEditStudentComponent.prototype.editStudent = function () {
        if (this.form.invalid) {
            this.formError = true;
        }
        if (this.form.valid) {
            this.formError = false;
            var student = {
                _id: this.student._id,
                name: this.form.value.name,
                birthDate: this.form.value.birthDate,
                bloodGroup: this.form.value.bloodGroup,
                workPlace: this.form.value.workPlace,
                image: this.image,
                firstGuardianName: this.form.value.firstGuardianName,
                firstGuardianRelation: this.form.value.firstGuardianRelation,
                secondGuardianName: this.form.value.secondGuardianName,
                secondGuardianRelation: this.form.value.secondGuardianRelation,
                medicalHistory: this.form.value.medicalHistory,
                phone: this.form.value.phone,
                email: this.form.value.email,
                address: this.form.value.address,
                branch: this.form.value.branch,
                batch: this.form.value.batch,
                batchName: this.form.value.batchName,
                status: this.student.status
            };
            this.studentService.editStudent(student);
            this.cancel();
        }
    };
    AdminEditStudentComponent.prototype.cancel = function () {
        this.router.navigate(['/admin', 'student', this.student._id], { relativeTo: this.route, skipLocationChange: true });
    };
    AdminEditStudentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admin-edit-student',
            template: __webpack_require__(/*! ./admin-edit-student.component.html */ "./src/app/admin/admin-student/admin-edit-student/admin-edit-student.component.html"),
            styles: [__webpack_require__(/*! ./admin-edit-student.component.css */ "./src/app/admin/admin-student/admin-edit-student/admin-edit-student.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_branch_service__WEBPACK_IMPORTED_MODULE_2__["BranchService"],
            _services_student_service__WEBPACK_IMPORTED_MODULE_3__["StudentService"],
            _validators_form_validator__WEBPACK_IMPORTED_MODULE_6__["FormValidator"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]])
    ], AdminEditStudentComponent);
    return AdminEditStudentComponent;
}());



/***/ }),

/***/ "./src/app/admin/admin-student/admin-show-student/admin-show-student.component.css":
/*!*****************************************************************************************!*\
  !*** ./src/app/admin/admin-student/admin-show-student/admin-show-student.component.css ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\r\n    margin: 0;\r\n}\r\n\r\nh3 {\r\n    font-size: 150%;\r\n}\r\n\r\nhr {\r\n    border: 1px solid #e67e22;\r\n    margin: 5px 0;\r\n}\r\n\r\n.student {\r\n    background-color: #f4f4f4;\r\n    padding: 10px;\r\n}\r\n\r\np {\r\n    font-size: 80%;\r\n}\r\n\r\n.student-image {\r\n    width: 80%;\r\n    margin: auto;\r\n}\r\n\r\n.student-name {\r\n    text-align: center;\r\n    margin-bottom: 3px;\r\n    text-decoration: underline;\r\n    -webkit-text-decoration-color: #ffd000;\r\n            text-decoration-color: #ffd000;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vYWRtaW4tc3R1ZGVudC9hZG1pbi1zaG93LXN0dWRlbnQvYWRtaW4tc2hvdy1zdHVkZW50LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxTQUFTO0FBQ2I7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGFBQWE7QUFDakI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsMEJBQTBCO0lBQzFCLHNDQUE4QjtZQUE5Qiw4QkFBOEI7QUFDbEMiLCJmaWxlIjoic3JjL2FwcC9hZG1pbi9hZG1pbi1zdHVkZW50L2FkbWluLXNob3ctc3R1ZGVudC9hZG1pbi1zaG93LXN0dWRlbnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIioge1xyXG4gICAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG5oMyB7XHJcbiAgICBmb250LXNpemU6IDE1MCU7XHJcbn1cclxuXHJcbmhyIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlNjdlMjI7XHJcbiAgICBtYXJnaW46IDVweCAwO1xyXG59XHJcblxyXG4uc3R1ZGVudCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjRmNGY0O1xyXG4gICAgcGFkZGluZzogMTBweDtcclxufVxyXG5cclxucCB7XHJcbiAgICBmb250LXNpemU6IDgwJTtcclxufVxyXG5cclxuLnN0dWRlbnQtaW1hZ2Uge1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIG1hcmdpbjogYXV0bztcclxufVxyXG5cclxuLnN0dWRlbnQtbmFtZSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzcHg7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICAgIHRleHQtZGVjb3JhdGlvbi1jb2xvcjogI2ZmZDAwMDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/admin/admin-student/admin-show-student/admin-show-student.component.html":
/*!******************************************************************************************!*\
  !*** ./src/app/admin/admin-student/admin-show-student/admin-show-student.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row mt-2\">\r\n    <div class=\"col-10 mx-auto\">\r\n\r\n      <div class=\"student\">\r\n        <div class=\"row\">\r\n          <div class=\"col-12\">\r\n            <button class=\"btn-close float-right\" (click)=\"cancel()\">X</button>\r\n            <h3>Student Details</h3>\r\n          </div>\r\n        </div>\r\n\r\n        <hr>\r\n\r\n        <div class=\"row\">\r\n\r\n          <div class=\"col-md-4 col-sm-10 mx-auto\">\r\n\r\n            <div>\r\n              <div class=\"student-name\">\r\n                <h4>{{student.name}}</h4>\r\n              </div>\r\n  \r\n              <div class=\"student-image\">\r\n                  <img [src]=\"student.image\" [alt]=\"student.name\" width=\"100%\">\r\n              </div>\r\n            </div>\r\n\r\n\r\n          </div>\r\n\r\n          <div class=\"col-md-8 col-sm-10 mx-auto\">\r\n\r\n            <div class=\"table-responsive\">\r\n              <table class=\"table table-sm\">\r\n                <tbody>\r\n                  <tr>\r\n                    <td>\r\n                      <strong>Birth Date : </strong>\r\n                    </td>\r\n                    <td>\r\n                      <p>{{student.birthDate}}</p>\r\n                    </td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td>\r\n                      \r\n                      <strong>Address : </strong>\r\n                    </td>\r\n                    <td>\r\n                      <p>{{student.address}}</p>\r\n                    </td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td>\r\n                      <strong>First Guardian Name : </strong>\r\n                    </td>\r\n                    <td>\r\n                      <p>{{student.firstGuardianName}}</p>\r\n                    </td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td>\r\n                      <strong>First Guardian Relation : </strong>\r\n                    </td>\r\n                    <td>  \r\n                      <p>{{student.firstGuardianRelation}}</p>\r\n                    </td>\r\n                  </tr>\r\n                  <tr *ngIf=\"student.secondGuardianName != ''\">\r\n                    <td>\r\n                      <strong>Second Guardian Name : </strong>\r\n                    </td>\r\n                    <td>\r\n                      <p>{{student.secondGuardianName}}</p>\r\n                    </td>\r\n                  </tr>\r\n                  <tr *ngIf=\"student.secondGuardianRelation != ''\">\r\n                    <td>\r\n                      <strong>Second Guardian Relation : </strong>\r\n                    </td>\r\n                    <td>\r\n                      <p>{{student.secondGuardianRelation}}</p>\r\n                    </td>\r\n                  </tr>\r\n                  <tr *ngIf=\"student.workPlace != ''\">\r\n                    <td>\r\n                      <strong>School/ College/ Office : </strong>\r\n                    </td>\r\n                    <td>\r\n                      <p>{{student.workPlace}}</p>\r\n                    </td>\r\n                  </tr>\r\n                  <tr *ngIf=\"student.bloodGroup != ''\">\r\n                    <td>\r\n                      <strong>Blood Group : </strong>\r\n                    </td>\r\n                    <td>\r\n                      <p>{{student.bloodGroup}}</p>                      \r\n                    </td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td>\r\n                      <strong>Medical History : </strong>\r\n                    </td>\r\n                    <td>\r\n                      <p>{{student.medicalHistory}}</p>\r\n                    </td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td>\r\n                      <strong><em>E-</em>mail : </strong>\r\n                    </td>\r\n                    <td>\r\n                      <p><a href=\"mailto:{{student.email}}\">{{student.email}}</a></p>\r\n                    </td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td>\r\n                      <strong>Phone : </strong>\r\n                    </td>\r\n                    <td>\r\n                      <p>+91 {{student.phone}}</p>\r\n                    </td>\r\n                  </tr>\r\n                </tbody>\r\n              </table>\r\n            </div>\r\n          </div> \r\n\r\n        </div>\r\n        <hr>\r\n        <div class=\"row\">\r\n          <div class=\"col-12\">\r\n            <h4>CLASS DETAILS</h4>\r\n            <div class=\"row\">\r\n              <div class=\"col-10 mx-auto\">\r\n                <table class=\"table table-sm\">\r\n                  <tbody>\r\n                    <tr>\r\n                      <td>\r\n                        <strong>Branch : </strong>\r\n                      </td>\r\n                      <td>\r\n                        <p>{{branch.branch}}</p>\r\n                      </td>\r\n                    </tr>\r\n                    <tr>\r\n                      <td>\r\n                        <strong>Batch : </strong>\r\n                      </td>\r\n                      <td>\r\n                        <p>{{student.batch}}</p>\r\n                      </td>\r\n                    </tr>\r\n                    <tr>\r\n                      <td>\r\n                        <strong>Batch Name : </strong>\r\n                      </td>\r\n                      <td>\r\n                        <p>{{batch.batchName}}</p> \r\n                      </td>\r\n                    </tr>\r\n                    <tr>\r\n                      <td>\r\n                        <strong>Fees : </strong>\r\n                      </td>\r\n                      <td>\r\n                        <p>Rs. {{batch.fees}}.00/-</p>      \r\n                      </td>\r\n                    </tr>\r\n                    <tr>\r\n                      <td>\r\n                        <strong>Time : </strong>\r\n                      </td>\r\n                      <td>\r\n                        <p>{{batch.time}}</p>                \r\n                      </td>\r\n                    </tr>\r\n                    <tr>\r\n                      <td>\r\n                        <strong>Status : </strong>\r\n                      </td>\r\n                      <td>\r\n                        <p>{{student.status | uppercase}}</p>\r\n                      </td>\r\n                    </tr>\r\n                  </tbody>\r\n                </table>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <hr>\r\n\r\n        <div class=\"row\">\r\n\r\n          <div class=\"col-6\">\r\n            <button routerLink=\"edit\" class=\"btn-edit\" skipLocationChange>Edit</button>\r\n          </div>\r\n\r\n          <div class=\"col-6\">\r\n              <button class=\"btn-deactivate float-right\" (click)=\"changeStatus(student._id, 'deactivated')\" *ngIf=\"student.status === 'activated'\">Deactivate</button>\r\n              <button class=\"btn-activate float-right\" (click)=\"changeStatus(student._id, 'activated')\" *ngIf=\"student.status === 'deactivated'\">Activate</button>\r\n          </div>\r\n\r\n        </div>\r\n      </div>\r\n       \r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/admin/admin-student/admin-show-student/admin-show-student.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/admin/admin-student/admin-show-student/admin-show-student.component.ts ***!
  \****************************************************************************************/
/*! exports provided: AdminShowStudentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminShowStudentComponent", function() { return AdminShowStudentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_student_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/student.service */ "./src/app/services/student.service.ts");
/* harmony import */ var _services_branch_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/branch.service */ "./src/app/services/branch.service.ts");





var AdminShowStudentComponent = /** @class */ (function () {
    function AdminShowStudentComponent(studentService, branchService, route, router) {
        this.studentService = studentService;
        this.branchService = branchService;
        this.route = route;
        this.router = router;
    }
    AdminShowStudentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.
            subscribe(function (params) {
            var id = params['id'];
            _this.student = _this.studentService.getStudent(id);
        });
        this.branch = this.branchService.getBranch(this.student.branch);
        this.batch = this.branch.batch.find(function (batch) { return (batch.batchName === _this.student.batchName && batch.batchType === _this.student.batch); });
    };
    AdminShowStudentComponent.prototype.changeStatus = function (id, status) {
        this.studentService.changeStatus(id, status);
        this.cancel();
    };
    AdminShowStudentComponent.prototype.cancel = function () {
        this.router.navigate(['/admin', 'student'], { relativeTo: this.route, skipLocationChange: true });
    };
    AdminShowStudentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admin-show-student',
            template: __webpack_require__(/*! ./admin-show-student.component.html */ "./src/app/admin/admin-student/admin-show-student/admin-show-student.component.html"),
            styles: [__webpack_require__(/*! ./admin-show-student.component.css */ "./src/app/admin/admin-student/admin-show-student/admin-show-student.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_student_service__WEBPACK_IMPORTED_MODULE_3__["StudentService"],
            _services_branch_service__WEBPACK_IMPORTED_MODULE_4__["BranchService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AdminShowStudentComponent);
    return AdminShowStudentComponent;
}());



/***/ }),

/***/ "./src/app/admin/admin-student/admin-student.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/admin/admin-student/admin-student.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\r\n    margin: 0;\r\n}\r\n\r\nh3 {\r\n    font-size: 150%;\r\n}\r\n\r\nhr {\r\n    border: 1px solid #e67e22;\r\n    margin: 5px 0;\r\n}\r\n\r\ninput, select {\r\n    width: 60%;\r\n    font-size: 80%;\r\n    padding: 1px 3px;\r\n    border-top-left-radius: 5px;\r\n    border-bottom-left-radius: 5px;\r\n    transition: background-color 0.2s;\r\n}\r\n\r\ninput:focus, select:focus, input:hover {\r\n    background-color: rgba(255, 255, 255, 0.75);\r\n    outline: none;\r\n}\r\n\r\n.btn-search {\r\n    outline: none;\r\n    padding: 1px 5px;\r\n    background-color: #e67e22;\r\n    border: 1px solid #e67e22;\r\n    color: #fff;\r\n    border-top-right-radius: 5px;\r\n    border-bottom-right-radius: 5px;\r\n    transition: background-color 0.2s, color 0.2s;\r\n\r\n}\r\n\r\n.btn-search:hover {\r\n    background-color: #e67e22;\r\n    color: #fff;\r\n}\r\n\r\n.student {\r\n    text-decoration: none;\r\n    color: #000;\r\n    -webkit-text-decoration-color: transparent;\r\n            text-decoration-color: transparent;\r\n    transition: -webkit-text-decoration 0.2s, -webkit-text-decoration-color 0.2s;\r\n    transition: text-decoration 0.2s, text-decoration-color 0.2s;\r\n    transition: text-decoration 0.2s, text-decoration-color 0.2s, -webkit-text-decoration 0.2s, -webkit-text-decoration-color 0.2s;\r\n}\r\n\r\n.student:hover{\r\n    color: #000;\r\n    text-decoration: underline;\r\n    -webkit-text-decoration-color: #e67e22;\r\n            text-decoration-color: #e67e22;\r\n}\r\n\r\nselect {\r\n    padding: 5px 3px;\r\n    border-radius: 5px;\r\n}\r\n\r\nselect.ng-invalid.ng-touched{\r\n  border: 1px solid #e67e22;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vYWRtaW4tc3R1ZGVudC9hZG1pbi1zdHVkZW50LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxTQUFTO0FBQ2I7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsY0FBYztJQUNkLGdCQUFnQjtJQUNoQiwyQkFBMkI7SUFDM0IsOEJBQThCO0lBQzlCLGlDQUFpQztBQUNyQzs7QUFFQTtJQUNJLDJDQUEyQztJQUMzQyxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGdCQUFnQjtJQUNoQix5QkFBeUI7SUFDekIseUJBQXlCO0lBQ3pCLFdBQVc7SUFDWCw0QkFBNEI7SUFDNUIsK0JBQStCO0lBQy9CLDZDQUE2Qzs7QUFFakQ7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsV0FBVztBQUNmOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLFdBQVc7SUFDWCwwQ0FBa0M7WUFBbEMsa0NBQWtDO0lBQ2xDLDRFQUE0RDtJQUE1RCw0REFBNEQ7SUFBNUQsOEhBQTREO0FBQ2hFOztBQUVBO0lBQ0ksV0FBVztJQUNYLDBCQUEwQjtJQUMxQixzQ0FBOEI7WUFBOUIsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0Qjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluLXN0dWRlbnQvYWRtaW4tc3R1ZGVudC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XHJcbiAgICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbmgzIHtcclxuICAgIGZvbnQtc2l6ZTogMTUwJTtcclxufVxyXG5cclxuaHIge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2U2N2UyMjtcclxuICAgIG1hcmdpbjogNXB4IDA7XHJcbn1cclxuXHJcbmlucHV0LCBzZWxlY3Qge1xyXG4gICAgd2lkdGg6IDYwJTtcclxuICAgIGZvbnQtc2l6ZTogODAlO1xyXG4gICAgcGFkZGluZzogMXB4IDNweDtcclxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDVweDtcclxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDVweDtcclxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycztcclxufVxyXG5cclxuaW5wdXQ6Zm9jdXMsIHNlbGVjdDpmb2N1cywgaW5wdXQ6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjc1KTtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuXHJcbi5idG4tc2VhcmNoIHtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBwYWRkaW5nOiAxcHggNXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U2N2UyMjtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlNjdlMjI7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA1cHg7XHJcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNXB4O1xyXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjJzLCBjb2xvciAwLjJzO1xyXG5cclxufVxyXG5cclxuLmJ0bi1zZWFyY2g6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U2N2UyMjtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG4uc3R1ZGVudCB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBjb2xvcjogIzAwMDtcclxuICAgIHRleHQtZGVjb3JhdGlvbi1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICB0cmFuc2l0aW9uOiB0ZXh0LWRlY29yYXRpb24gMC4ycywgdGV4dC1kZWNvcmF0aW9uLWNvbG9yIDAuMnM7XHJcbn1cclxuXHJcbi5zdHVkZW50OmhvdmVye1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICAgIHRleHQtZGVjb3JhdGlvbi1jb2xvcjogI2U2N2UyMjtcclxufVxyXG5cclxuc2VsZWN0IHtcclxuICAgIHBhZGRpbmc6IDVweCAzcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuXHJcbnNlbGVjdC5uZy1pbnZhbGlkLm5nLXRvdWNoZWR7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2U2N2UyMjtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/admin/admin-student/admin-student.component.html":
/*!******************************************************************!*\
  !*** ./src/app/admin/admin-student/admin-student.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row mt-2\">\r\n  <div class=\"col-12 mx-auto\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-6 col-sm-12\">\r\n        <h3>Students</h3>\r\n      </div>\r\n      <div class=\"col-md-6 col-sm-12\">\r\n        <button class=\"new-btn float-right\" (click)=\"onNewStudent()\">Add New student</button>\r\n      </div>\r\n    </div>\r\n    <hr>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-6 col-sm-12\">\r\n        <select class=\"branch\" type=\"text\" name=\"branch\" id=\"branch\" ngModel #branch=\"ngModel\" required (change)=\"onSelectBranch(branch.value)\">\r\n          <option value=\"\">Select Branch</option>\r\n          <option *ngFor=\"let branch of branches\" [value]=\"branch._id\">{{branch.branch}}</option>\r\n      </select>\r\n      </div>\r\n      <div class=\"col-md-6 col-sm-12\">\r\n        <div class=\"input-group mb-3\">\r\n          <input type=\"text\" placeholder=\"Search\" id=\"search\" name=\"search\" ngModel #search=\"ngModel\" (input)=\"onSearch(search.value)\">\r\n          <div class=\"input-group-append\">\r\n            <button class=\"btn-search\" type=\"submit\" [disabled]=\"search == ''\" (click)=\"onSearch(search.value)\">Go</button> \r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\" *ngIf=\"students.length > 0; else empty_students\">\r\n      <div class=\"table-responsive\">\r\n        <table class=\"table table-sm table-hover\">\r\n          <thead>\r\n            <tr>\r\n              <th>ID</th>\r\n              <th>Student</th>\r\n              <th>Contact</th>\r\n              <th>Status</th>\r\n            </tr>\r\n          </thead>\r\n          <tbody>\r\n            <tr class=\"student-tr\" *ngFor=\"let student of students, let i = index\" routerLinkActive=\"active\">\r\n              <td>{{ i+1 }}</td>\r\n              <td>\r\n                <a [routerLink]=\"student._id\" class=\"student\" skipLocationChange>\r\n                  {{ student.name }}\r\n                </a>\r\n              </td>\r\n              <td>\r\n                +91 {{ student.phone }}\r\n              </td>\r\n              <td>\r\n                {{ student.status | uppercase }}\r\n              </td>\r\n            </tr>\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n    </div>\r\n    <ng-template #empty_students>\r\n      <h5 class=\"pl-3\">{{noStudent}}</h5>\r\n    </ng-template>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/admin/admin-student/admin-student.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/admin/admin-student/admin-student.component.ts ***!
  \****************************************************************/
/*! exports provided: AdminStudentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminStudentComponent", function() { return AdminStudentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_student_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/student.service */ "./src/app/services/student.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_branch_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/branch.service */ "./src/app/services/branch.service.ts");





var AdminStudentComponent = /** @class */ (function () {
    function AdminStudentComponent(studentService, branchService, router, route) {
        this.studentService = studentService;
        this.branchService = branchService;
        this.router = router;
        this.route = route;
        this.allStudents = [];
        this.students = [];
        this.noStudent = 'Please Select Branch or Search Student Name..';
        this.branches = [];
    }
    AdminStudentComponent.prototype.ngOnInit = function () {
        this.allStudents = this.studentService.getStudents();
        if (this.allStudents.length > 0) {
            this.branches = this.branchService.getBranches();
        }
    };
    AdminStudentComponent.prototype.onNewStudent = function () {
        this.router.navigate(['new'], { relativeTo: this.route, skipLocationChange: true });
    };
    AdminStudentComponent.prototype.onSearch = function (search) {
        var _this = this;
        if (search != '') {
            var students = this.allStudents;
            this.students = [];
            students.forEach(function (student) {
                if (student.name.toLowerCase().includes(search.toLowerCase())) {
                    _this.students.push(student);
                }
            });
            if (this.students.length === 0) {
                this.noStudent = "No Students Found..";
            }
        }
    };
    AdminStudentComponent.prototype.onSelectBranch = function (branch) {
        var _this = this;
        if (branch != '') {
            var students = this.allStudents;
            this.students = [];
            students.forEach(function (student) {
                if (student.branch === branch) {
                    _this.students.push(student);
                }
            });
        }
    };
    AdminStudentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admin-student',
            template: __webpack_require__(/*! ./admin-student.component.html */ "./src/app/admin/admin-student/admin-student.component.html"),
            styles: [__webpack_require__(/*! ./admin-student.component.css */ "./src/app/admin/admin-student/admin-student.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_student_service__WEBPACK_IMPORTED_MODULE_2__["StudentService"],
            _services_branch_service__WEBPACK_IMPORTED_MODULE_4__["BranchService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], AdminStudentComponent);
    return AdminStudentComponent;
}());



/***/ }),

/***/ "./src/app/admin/admin.component.css":
/*!*******************************************!*\
  !*** ./src/app/admin/admin.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h3 {\r\n    font-size: 150%;\r\n}\r\n\r\nhr {\r\n    border: 1px solid #e67e22;\r\n    margin: 5px 0;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vYWRtaW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsYUFBYTtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMyB7XHJcbiAgICBmb250LXNpemU6IDE1MCU7XHJcbn1cclxuXHJcbmhyIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlNjdlMjI7XHJcbiAgICBtYXJnaW46IDVweCAwO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/admin/admin.component.html":
/*!********************************************!*\
  !*** ./src/app/admin/admin.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  admin works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/admin/admin.component.ts":
/*!******************************************!*\
  !*** ./src/app/admin/admin.component.ts ***!
  \******************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AdminComponent = /** @class */ (function () {
    function AdminComponent() {
    }
    AdminComponent.prototype.ngOnInit = function () {
    };
    AdminComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admin',
            template: __webpack_require__(/*! ./admin.component.html */ "./src/app/admin/admin.component.html"),
            styles: [__webpack_require__(/*! ./admin.component.css */ "./src/app/admin/admin.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AdminComponent);
    return AdminComponent;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "footer {\r\n    width: 100%;\r\n    position: absolute;\r\n    bottom: 0;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLFNBQVM7RUFDWCIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZm9vdGVyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n  <header class=\"header-bg\">\r\n    <app-header></app-header>\r\n  </header>\r\n  <div class=\"container\">\r\n    <router-outlet></router-outlet>\r\n  </div>\r\n  <footer class=\"footer-bg\">\r\n    <app-footer></app-footer>\r\n  </footer>"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Dancing Soul';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routes_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.routes.module */ "./src/app/app.routes.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_about_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/about.service */ "./src/app/services/about.service.ts");
/* harmony import */ var _services_articles_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/articles.service */ "./src/app/services/articles.service.ts");
/* harmony import */ var _services_branch_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/branch.service */ "./src/app/services/branch.service.ts");
/* harmony import */ var _services_enquiry_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/enquiry.service */ "./src/app/services/enquiry.service.ts");
/* harmony import */ var _services_faculty_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/faculty.service */ "./src/app/services/faculty.service.ts");
/* harmony import */ var _services_student_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/student.service */ "./src/app/services/student.service.ts");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _services_root_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/root.service */ "./src/app/services/root.service.ts");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var _auth_auth_guard__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./auth/auth.guard */ "./src/app/auth/auth.guard.ts");
/* harmony import */ var _services_image_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./services/image.service */ "./src/app/services/image.service.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./admin/admin.component */ "./src/app/admin/admin.component.ts");
/* harmony import */ var _admin_admin_aim_admin_about_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./admin/admin-aim/admin-about.component */ "./src/app/admin/admin-aim/admin-about.component.ts");
/* harmony import */ var _admin_admin_aim_admin_edit_aim_admin_edit_aim_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./admin/admin-aim/admin-edit-aim/admin-edit-aim.component */ "./src/app/admin/admin-aim/admin-edit-aim/admin-edit-aim.component.ts");
/* harmony import */ var _admin_admin_article_admin_article_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./admin/admin-article/admin-article.component */ "./src/app/admin/admin-article/admin-article.component.ts");
/* harmony import */ var _admin_admin_article_admin_add_article_admin_add_article_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./admin/admin-article/admin-add-article/admin-add-article.component */ "./src/app/admin/admin-article/admin-add-article/admin-add-article.component.ts");
/* harmony import */ var _admin_admin_article_admin_show_article_admin_show_article_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./admin/admin-article/admin-show-article/admin-show-article.component */ "./src/app/admin/admin-article/admin-show-article/admin-show-article.component.ts");
/* harmony import */ var _admin_admin_article_admin_edit_article_admin_edit_article_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./admin/admin-article/admin-edit-article/admin-edit-article.component */ "./src/app/admin/admin-article/admin-edit-article/admin-edit-article.component.ts");
/* harmony import */ var _admin_admin_branch_admin_branch_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./admin/admin-branch/admin-branch.component */ "./src/app/admin/admin-branch/admin-branch.component.ts");
/* harmony import */ var _admin_admin_branch_admin_add_branch_admin_add_branch_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./admin/admin-branch/admin-add-branch/admin-add-branch.component */ "./src/app/admin/admin-branch/admin-add-branch/admin-add-branch.component.ts");
/* harmony import */ var _admin_admin_branch_admin_show_branch_admin_show_branch_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./admin/admin-branch/admin-show-branch/admin-show-branch.component */ "./src/app/admin/admin-branch/admin-show-branch/admin-show-branch.component.ts");
/* harmony import */ var _admin_admin_branch_admin_edit_branch_admin_edit_branch_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./admin/admin-branch/admin-edit-branch/admin-edit-branch.component */ "./src/app/admin/admin-branch/admin-edit-branch/admin-edit-branch.component.ts");
/* harmony import */ var _admin_admin_enquiry_admin_enquiry_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./admin/admin-enquiry/admin-enquiry.component */ "./src/app/admin/admin-enquiry/admin-enquiry.component.ts");
/* harmony import */ var _admin_admin_enquiry_admin_show_enquiry_admin_show_enquiry_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./admin/admin-enquiry/admin-show-enquiry/admin-show-enquiry.component */ "./src/app/admin/admin-enquiry/admin-show-enquiry/admin-show-enquiry.component.ts");
/* harmony import */ var _admin_admin_enquiry_admin_reply_enquiry_admin_reply_enquiry_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./admin/admin-enquiry/admin-reply-enquiry/admin-reply-enquiry.component */ "./src/app/admin/admin-enquiry/admin-reply-enquiry/admin-reply-enquiry.component.ts");
/* harmony import */ var _admin_admin_faculty_admin_faculty_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./admin/admin-faculty/admin-faculty.component */ "./src/app/admin/admin-faculty/admin-faculty.component.ts");
/* harmony import */ var _admin_admin_faculty_admin_add_faculty_admin_add_faculty_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./admin/admin-faculty/admin-add-faculty/admin-add-faculty.component */ "./src/app/admin/admin-faculty/admin-add-faculty/admin-add-faculty.component.ts");
/* harmony import */ var _admin_admin_faculty_admin_show_faculty_admin_show_faculty_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./admin/admin-faculty/admin-show-faculty/admin-show-faculty.component */ "./src/app/admin/admin-faculty/admin-show-faculty/admin-show-faculty.component.ts");
/* harmony import */ var _admin_admin_faculty_admin_edit_faculty_admin_edit_faculty_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./admin/admin-faculty/admin-edit-faculty/admin-edit-faculty.component */ "./src/app/admin/admin-faculty/admin-edit-faculty/admin-edit-faculty.component.ts");
/* harmony import */ var _admin_admin_student_admin_student_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./admin/admin-student/admin-student.component */ "./src/app/admin/admin-student/admin-student.component.ts");
/* harmony import */ var _admin_admin_student_admin_add_student_admin_add_student_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./admin/admin-student/admin-add-student/admin-add-student.component */ "./src/app/admin/admin-student/admin-add-student/admin-add-student.component.ts");
/* harmony import */ var _admin_admin_student_admin_show_student_admin_show_student_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./admin/admin-student/admin-show-student/admin-show-student.component */ "./src/app/admin/admin-student/admin-show-student/admin-show-student.component.ts");
/* harmony import */ var _admin_admin_student_admin_edit_student_admin_edit_student_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./admin/admin-student/admin-edit-student/admin-edit-student.component */ "./src/app/admin/admin-student/admin-edit-student/admin-edit-student.component.ts");
/* harmony import */ var _admin_admin_exam_admin_exam_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./admin/admin-exam/admin-exam.component */ "./src/app/admin/admin-exam/admin-exam.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _admin_admin_aim_admin_edit_history_admin_edit_history_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./admin/admin-aim/admin-edit-history/admin-edit-history.component */ "./src/app/admin/admin-aim/admin-edit-history/admin-edit-history.component.ts");
/* harmony import */ var _admin_admin_aim_admin_edit_philosophy_admin_edit_philosophy_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./admin/admin-aim/admin-edit-philosophy/admin-edit-philosophy.component */ "./src/app/admin/admin-aim/admin-edit-philosophy/admin-edit-philosophy.component.ts");
/* harmony import */ var _validators_form_validator__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./validators/form.validator */ "./src/app/validators/form.validator.ts");















































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_17__["AppComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_19__["HeaderComponent"],
                _admin_admin_component__WEBPACK_IMPORTED_MODULE_20__["AdminComponent"],
                _admin_admin_aim_admin_about_component__WEBPACK_IMPORTED_MODULE_21__["AdminAboutComponent"],
                _admin_admin_aim_admin_edit_aim_admin_edit_aim_component__WEBPACK_IMPORTED_MODULE_22__["AdminEditAimComponent"],
                _admin_admin_aim_admin_edit_history_admin_edit_history_component__WEBPACK_IMPORTED_MODULE_44__["AdminEditHistoryComponent"],
                _admin_admin_aim_admin_edit_philosophy_admin_edit_philosophy_component__WEBPACK_IMPORTED_MODULE_45__["AdminEditPhilosophyComponent"],
                _admin_admin_article_admin_article_component__WEBPACK_IMPORTED_MODULE_23__["AdminArticleComponent"],
                _admin_admin_article_admin_add_article_admin_add_article_component__WEBPACK_IMPORTED_MODULE_24__["AdminAddArticleComponent"],
                _admin_admin_article_admin_edit_article_admin_edit_article_component__WEBPACK_IMPORTED_MODULE_26__["AdminEditArticleComponent"],
                _admin_admin_article_admin_show_article_admin_show_article_component__WEBPACK_IMPORTED_MODULE_25__["AdminShowArticleComponent"],
                _admin_admin_branch_admin_branch_component__WEBPACK_IMPORTED_MODULE_27__["AdminBranchComponent"],
                _admin_admin_branch_admin_add_branch_admin_add_branch_component__WEBPACK_IMPORTED_MODULE_28__["AdminAddBranchComponent"],
                _admin_admin_branch_admin_edit_branch_admin_edit_branch_component__WEBPACK_IMPORTED_MODULE_30__["AdminEditBranchComponent"],
                _admin_admin_branch_admin_show_branch_admin_show_branch_component__WEBPACK_IMPORTED_MODULE_29__["AdminShowBranchComponent"],
                _admin_admin_enquiry_admin_enquiry_component__WEBPACK_IMPORTED_MODULE_31__["AdminEnquiryComponent"],
                _admin_admin_enquiry_admin_show_enquiry_admin_show_enquiry_component__WEBPACK_IMPORTED_MODULE_32__["AdminShowEnquiryComponent"],
                _admin_admin_enquiry_admin_reply_enquiry_admin_reply_enquiry_component__WEBPACK_IMPORTED_MODULE_33__["AdminReplyEnquiryComponent"],
                _admin_admin_exam_admin_exam_component__WEBPACK_IMPORTED_MODULE_42__["AdminExamComponent"],
                _admin_admin_faculty_admin_faculty_component__WEBPACK_IMPORTED_MODULE_34__["AdminFacultyComponent"],
                _admin_admin_faculty_admin_add_faculty_admin_add_faculty_component__WEBPACK_IMPORTED_MODULE_35__["AdminAddFacultyComponent"],
                _admin_admin_faculty_admin_show_faculty_admin_show_faculty_component__WEBPACK_IMPORTED_MODULE_36__["AdminShowFacultyComponent"],
                _admin_admin_faculty_admin_edit_faculty_admin_edit_faculty_component__WEBPACK_IMPORTED_MODULE_37__["AdminEditFacultyComponent"],
                _admin_admin_student_admin_student_component__WEBPACK_IMPORTED_MODULE_38__["AdminStudentComponent"],
                _admin_admin_student_admin_add_student_admin_add_student_component__WEBPACK_IMPORTED_MODULE_39__["AdminAddStudentComponent"],
                _admin_admin_student_admin_show_student_admin_show_student_component__WEBPACK_IMPORTED_MODULE_40__["AdminShowStudentComponent"],
                _admin_admin_student_admin_edit_student_admin_edit_student_component__WEBPACK_IMPORTED_MODULE_41__["AdminEditStudentComponent"],
                _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_14__["PageNotFoundComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_18__["LoginComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_43__["FooterComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _app_routes_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutes"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"]
            ],
            providers: [
                _services_about_service__WEBPACK_IMPORTED_MODULE_6__["AboutService"],
                _services_articles_service__WEBPACK_IMPORTED_MODULE_7__["ArticleService"],
                _services_branch_service__WEBPACK_IMPORTED_MODULE_8__["BranchService"],
                _services_enquiry_service__WEBPACK_IMPORTED_MODULE_9__["EnquiryService"],
                _services_faculty_service__WEBPACK_IMPORTED_MODULE_10__["FacultyService"],
                _services_student_service__WEBPACK_IMPORTED_MODULE_11__["StudentService"],
                _auth_auth_guard__WEBPACK_IMPORTED_MODULE_15__["LoginAuthGuard"],
                _auth_auth_guard__WEBPACK_IMPORTED_MODULE_15__["AdminAuthGuard"],
                _auth_auth_guard__WEBPACK_IMPORTED_MODULE_15__["FacultuAuthGuard"],
                _auth_auth_guard__WEBPACK_IMPORTED_MODULE_15__["StudentAuthGuard"],
                _auth_auth_service__WEBPACK_IMPORTED_MODULE_12__["AuthService"],
                _services_image_service__WEBPACK_IMPORTED_MODULE_16__["ImageService"],
                _services_root_service__WEBPACK_IMPORTED_MODULE_13__["RootService"],
                _validators_form_validator__WEBPACK_IMPORTED_MODULE_46__["FormValidator"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_17__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routes.module.ts":
/*!**************************************!*\
  !*** ./src/app/app.routes.module.ts ***!
  \**************************************/
/*! exports provided: AppRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutes", function() { return AppRoutes; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _admin_admin_aim_admin_about_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./admin/admin-aim/admin-about.component */ "./src/app/admin/admin-aim/admin-about.component.ts");
/* harmony import */ var _admin_admin_aim_admin_edit_aim_admin_edit_aim_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./admin/admin-aim/admin-edit-aim/admin-edit-aim.component */ "./src/app/admin/admin-aim/admin-edit-aim/admin-edit-aim.component.ts");
/* harmony import */ var _admin_admin_aim_admin_edit_history_admin_edit_history_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./admin/admin-aim/admin-edit-history/admin-edit-history.component */ "./src/app/admin/admin-aim/admin-edit-history/admin-edit-history.component.ts");
/* harmony import */ var _admin_admin_aim_admin_edit_philosophy_admin_edit_philosophy_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./admin/admin-aim/admin-edit-philosophy/admin-edit-philosophy.component */ "./src/app/admin/admin-aim/admin-edit-philosophy/admin-edit-philosophy.component.ts");
/* harmony import */ var _admin_admin_article_admin_article_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./admin/admin-article/admin-article.component */ "./src/app/admin/admin-article/admin-article.component.ts");
/* harmony import */ var _admin_admin_article_admin_add_article_admin_add_article_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./admin/admin-article/admin-add-article/admin-add-article.component */ "./src/app/admin/admin-article/admin-add-article/admin-add-article.component.ts");
/* harmony import */ var _admin_admin_article_admin_show_article_admin_show_article_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./admin/admin-article/admin-show-article/admin-show-article.component */ "./src/app/admin/admin-article/admin-show-article/admin-show-article.component.ts");
/* harmony import */ var _admin_admin_article_admin_edit_article_admin_edit_article_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./admin/admin-article/admin-edit-article/admin-edit-article.component */ "./src/app/admin/admin-article/admin-edit-article/admin-edit-article.component.ts");
/* harmony import */ var _admin_admin_branch_admin_branch_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./admin/admin-branch/admin-branch.component */ "./src/app/admin/admin-branch/admin-branch.component.ts");
/* harmony import */ var _admin_admin_branch_admin_add_branch_admin_add_branch_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./admin/admin-branch/admin-add-branch/admin-add-branch.component */ "./src/app/admin/admin-branch/admin-add-branch/admin-add-branch.component.ts");
/* harmony import */ var _admin_admin_branch_admin_show_branch_admin_show_branch_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./admin/admin-branch/admin-show-branch/admin-show-branch.component */ "./src/app/admin/admin-branch/admin-show-branch/admin-show-branch.component.ts");
/* harmony import */ var _admin_admin_branch_admin_edit_branch_admin_edit_branch_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./admin/admin-branch/admin-edit-branch/admin-edit-branch.component */ "./src/app/admin/admin-branch/admin-edit-branch/admin-edit-branch.component.ts");
/* harmony import */ var _admin_admin_enquiry_admin_enquiry_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./admin/admin-enquiry/admin-enquiry.component */ "./src/app/admin/admin-enquiry/admin-enquiry.component.ts");
/* harmony import */ var _admin_admin_enquiry_admin_show_enquiry_admin_show_enquiry_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./admin/admin-enquiry/admin-show-enquiry/admin-show-enquiry.component */ "./src/app/admin/admin-enquiry/admin-show-enquiry/admin-show-enquiry.component.ts");
/* harmony import */ var _admin_admin_enquiry_admin_reply_enquiry_admin_reply_enquiry_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./admin/admin-enquiry/admin-reply-enquiry/admin-reply-enquiry.component */ "./src/app/admin/admin-enquiry/admin-reply-enquiry/admin-reply-enquiry.component.ts");
/* harmony import */ var _admin_admin_exam_admin_exam_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./admin/admin-exam/admin-exam.component */ "./src/app/admin/admin-exam/admin-exam.component.ts");
/* harmony import */ var _admin_admin_faculty_admin_faculty_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./admin/admin-faculty/admin-faculty.component */ "./src/app/admin/admin-faculty/admin-faculty.component.ts");
/* harmony import */ var _admin_admin_faculty_admin_add_faculty_admin_add_faculty_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./admin/admin-faculty/admin-add-faculty/admin-add-faculty.component */ "./src/app/admin/admin-faculty/admin-add-faculty/admin-add-faculty.component.ts");
/* harmony import */ var _admin_admin_faculty_admin_show_faculty_admin_show_faculty_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./admin/admin-faculty/admin-show-faculty/admin-show-faculty.component */ "./src/app/admin/admin-faculty/admin-show-faculty/admin-show-faculty.component.ts");
/* harmony import */ var _admin_admin_faculty_admin_edit_faculty_admin_edit_faculty_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./admin/admin-faculty/admin-edit-faculty/admin-edit-faculty.component */ "./src/app/admin/admin-faculty/admin-edit-faculty/admin-edit-faculty.component.ts");
/* harmony import */ var _admin_admin_student_admin_student_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./admin/admin-student/admin-student.component */ "./src/app/admin/admin-student/admin-student.component.ts");
/* harmony import */ var _admin_admin_student_admin_add_student_admin_add_student_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./admin/admin-student/admin-add-student/admin-add-student.component */ "./src/app/admin/admin-student/admin-add-student/admin-add-student.component.ts");
/* harmony import */ var _admin_admin_student_admin_show_student_admin_show_student_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./admin/admin-student/admin-show-student/admin-show-student.component */ "./src/app/admin/admin-student/admin-show-student/admin-show-student.component.ts");
/* harmony import */ var _admin_admin_student_admin_edit_student_admin_edit_student_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./admin/admin-student/admin-edit-student/admin-edit-student.component */ "./src/app/admin/admin-student/admin-edit-student/admin-edit-student.component.ts");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _auth_auth_guard__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./auth/auth.guard */ "./src/app/auth/auth.guard.ts");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./admin/admin.component */ "./src/app/admin/admin.component.ts");































var appRoutes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_28__["LoginComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_29__["LoginAuthGuard"]] },
    { path: 'login/:auth', component: _login_login_component__WEBPACK_IMPORTED_MODULE_28__["LoginComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_29__["LoginAuthGuard"]] },
    { path: 'admin', component: _admin_admin_component__WEBPACK_IMPORTED_MODULE_30__["AdminComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_29__["AdminAuthGuard"]] },
    { path: 'admin/about', component: _admin_admin_aim_admin_about_component__WEBPACK_IMPORTED_MODULE_3__["AdminAboutComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_29__["AdminAuthGuard"]] },
    { path: 'admin/about/editaim', component: _admin_admin_aim_admin_edit_aim_admin_edit_aim_component__WEBPACK_IMPORTED_MODULE_4__["AdminEditAimComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_29__["AdminAuthGuard"]] },
    { path: 'admin/about/edithistory', component: _admin_admin_aim_admin_edit_history_admin_edit_history_component__WEBPACK_IMPORTED_MODULE_5__["AdminEditHistoryComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_29__["AdminAuthGuard"]] },
    { path: 'admin/about/editphilosophy', component: _admin_admin_aim_admin_edit_philosophy_admin_edit_philosophy_component__WEBPACK_IMPORTED_MODULE_6__["AdminEditPhilosophyComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_29__["AdminAuthGuard"]] },
    { path: 'admin/faculty', component: _admin_admin_faculty_admin_faculty_component__WEBPACK_IMPORTED_MODULE_19__["AdminFacultyComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_29__["AdminAuthGuard"]] },
    { path: 'admin/faculty/new', component: _admin_admin_faculty_admin_add_faculty_admin_add_faculty_component__WEBPACK_IMPORTED_MODULE_20__["AdminAddFacultyComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_29__["AdminAuthGuard"]] },
    { path: 'admin/faculty/:id', component: _admin_admin_faculty_admin_show_faculty_admin_show_faculty_component__WEBPACK_IMPORTED_MODULE_21__["AdminShowFacultyComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_29__["AdminAuthGuard"]] },
    { path: 'admin/faculty/:id/edit', component: _admin_admin_faculty_admin_edit_faculty_admin_edit_faculty_component__WEBPACK_IMPORTED_MODULE_22__["AdminEditFacultyComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_29__["AdminAuthGuard"]] },
    { path: 'admin/branch', component: _admin_admin_branch_admin_branch_component__WEBPACK_IMPORTED_MODULE_11__["AdminBranchComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_29__["AdminAuthGuard"]] },
    { path: 'admin/branch/new', component: _admin_admin_branch_admin_add_branch_admin_add_branch_component__WEBPACK_IMPORTED_MODULE_12__["AdminAddBranchComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_29__["AdminAuthGuard"]] },
    { path: 'admin/branch/:id', component: _admin_admin_branch_admin_show_branch_admin_show_branch_component__WEBPACK_IMPORTED_MODULE_13__["AdminShowBranchComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_29__["AdminAuthGuard"]] },
    { path: 'admin/branch/:id/edit', component: _admin_admin_branch_admin_edit_branch_admin_edit_branch_component__WEBPACK_IMPORTED_MODULE_14__["AdminEditBranchComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_29__["AdminAuthGuard"]] },
    { path: 'admin/exams', component: _admin_admin_exam_admin_exam_component__WEBPACK_IMPORTED_MODULE_18__["AdminExamComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_29__["AdminAuthGuard"]] },
    { path: 'admin/article', component: _admin_admin_article_admin_article_component__WEBPACK_IMPORTED_MODULE_7__["AdminArticleComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_29__["AdminAuthGuard"]] },
    { path: 'admin/article/new', component: _admin_admin_article_admin_add_article_admin_add_article_component__WEBPACK_IMPORTED_MODULE_8__["AdminAddArticleComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_29__["AdminAuthGuard"]] },
    { path: 'admin/article/:id', component: _admin_admin_article_admin_show_article_admin_show_article_component__WEBPACK_IMPORTED_MODULE_9__["AdminShowArticleComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_29__["AdminAuthGuard"]] },
    { path: 'admin/article/:id/edit', component: _admin_admin_article_admin_edit_article_admin_edit_article_component__WEBPACK_IMPORTED_MODULE_10__["AdminEditArticleComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_29__["AdminAuthGuard"]] },
    { path: 'admin/student', component: _admin_admin_student_admin_student_component__WEBPACK_IMPORTED_MODULE_23__["AdminStudentComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_29__["AdminAuthGuard"]] },
    { path: 'admin/student/new', component: _admin_admin_student_admin_add_student_admin_add_student_component__WEBPACK_IMPORTED_MODULE_24__["AdminAddStudentComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_29__["AdminAuthGuard"]] },
    { path: 'admin/student/:id', component: _admin_admin_student_admin_show_student_admin_show_student_component__WEBPACK_IMPORTED_MODULE_25__["AdminShowStudentComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_29__["AdminAuthGuard"]] },
    { path: 'admin/student/:id/edit', component: _admin_admin_student_admin_edit_student_admin_edit_student_component__WEBPACK_IMPORTED_MODULE_26__["AdminEditStudentComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_29__["AdminAuthGuard"]] },
    { path: 'admin/enquiry', component: _admin_admin_enquiry_admin_enquiry_component__WEBPACK_IMPORTED_MODULE_15__["AdminEnquiryComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_29__["AdminAuthGuard"]] },
    { path: 'admin/enquiry/:id', component: _admin_admin_enquiry_admin_show_enquiry_admin_show_enquiry_component__WEBPACK_IMPORTED_MODULE_16__["AdminShowEnquiryComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_29__["AdminAuthGuard"]] },
    { path: 'admin/enquiry/:id/reply', component: _admin_admin_enquiry_admin_reply_enquiry_admin_reply_enquiry_component__WEBPACK_IMPORTED_MODULE_17__["AdminReplyEnquiryComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_29__["AdminAuthGuard"]] },
    { path: 'page-not-found', component: _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_27__["PageNotFoundComponent"] },
    { path: '**', redirectTo: 'page-not-found' }
];
var AppRoutes = /** @class */ (function () {
    function AppRoutes() {
    }
    AppRoutes = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(appRoutes, { useHash: true })
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutes);
    return AppRoutes;
}());



/***/ }),

/***/ "./src/app/auth/auth.guard.ts":
/*!************************************!*\
  !*** ./src/app/auth/auth.guard.ts ***!
  \************************************/
/*! exports provided: AdminAuthGuard, StudentAuthGuard, FacultuAuthGuard, LoginAuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminAuthGuard", function() { return AdminAuthGuard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentAuthGuard", function() { return StudentAuthGuard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FacultuAuthGuard", function() { return FacultuAuthGuard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginAuthGuard", function() { return LoginAuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth/auth.service.ts");





var AdminAuthGuard = /** @class */ (function () {
    function AdminAuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AdminAuthGuard.prototype.canActivate = function (next, state) {
        var _this = this;
        return this.authService.isLoggedIn.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (login) {
            if (!login.loginValidate && (login.user !== 'admin')) {
                _this.router.navigate(['/login']);
                return false;
            }
            return true;
        }));
    };
    AdminAuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AdminAuthGuard);
    return AdminAuthGuard;
}());

var StudentAuthGuard = /** @class */ (function () {
    function StudentAuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    StudentAuthGuard.prototype.canActivate = function (next, state) {
        var _this = this;
        return this.authService.isLoggedIn.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (login) {
            if (!login.loginValidate && (login.user !== 'student')) {
                _this.router.navigate(['/login']);
                return false;
            }
            return true;
        }));
    };
    StudentAuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], StudentAuthGuard);
    return StudentAuthGuard;
}());

var FacultuAuthGuard = /** @class */ (function () {
    function FacultuAuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    FacultuAuthGuard.prototype.canActivate = function (next, state) {
        var _this = this;
        return this.authService.isLoggedIn.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (login) {
            if (!login.loginValidate && (login.user !== 'faculty')) {
                _this.router.navigate(['/login']);
                return false;
            }
            return true;
        }));
    };
    FacultuAuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], FacultuAuthGuard);
    return FacultuAuthGuard;
}());

var LoginAuthGuard = /** @class */ (function () {
    function LoginAuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    LoginAuthGuard.prototype.canActivate = function (next, state) {
        var _this = this;
        return this.authService.isLoggedIn.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (login) {
            if (login.loginValidate && login.user) {
                _this.router.navigate(['/login']);
                return false;
            }
            return true;
        }));
    };
    LoginAuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], LoginAuthGuard);
    return LoginAuthGuard;
}());



/***/ }),

/***/ "./src/app/auth/auth.service.ts":
/*!**************************************!*\
  !*** ./src/app/auth/auth.service.ts ***!
  \**************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");




var AuthService = /** @class */ (function () {
    function AuthService(router, route) {
        this.router = router;
        this.route = route;
        this.loggedIn = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]({ user: null, loginValidate: false });
    }
    Object.defineProperty(AuthService.prototype, "isLoggedIn", {
        get: function () {
            return this.loggedIn.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    AuthService.prototype.login = function (userName, password) {
        var _this = this;
        setTimeout(function () {
            if (userName === 'admin' && password === 'admin') {
                _this.loggedIn.next({ user: 'admin', loginValidate: true });
                _this.router.navigate(['/admin'], { relativeTo: _this.route });
            }
            else if (userName === 'student' && password === 'student') {
                _this.loggedIn.next({ user: 'student', loginValidate: true });
                // this.router.navigate(['/student'], {relativeTo: this.route});
            }
            else if (userName === 'faculty' && password === 'faculty') {
                _this.loggedIn.next({ user: 'faculty', loginValidate: true });
                // this.router.navigate(['/faculty'], {relativeTo: this.route});
            }
            else {
                _this.loggedIn.next({ user: null, loginValidate: false });
                _this.router.navigate(['/login', 'false'], { relativeTo: _this.route, skipLocationChange: true });
            }
        }, 500);
    };
    AuthService.prototype.logout = function () {
        this.loggedIn.next({ user: null, loginValidate: false });
        this.router.navigate(['/login']);
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "p {\r\n    margin-top: 10px;\r\n    text-align: center;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0QiIsImZpbGUiOiJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInAge1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n  <p>Developed By <strong>TEAM</strong></p>"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".logo {\r\n    height: 50px;\r\n    width: auto;\r\n}\r\n\r\n.active {\r\n    border-bottom: 2px solid #e67e22;\r\n  }\r\n\r\n.pointer {\r\n      cursor: pointer;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGdDQUFnQztFQUNsQzs7QUFFQTtNQUNJLGVBQWU7RUFDbkIiLCJmaWxlIjoic3JjL2FwcC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9nbyB7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICB3aWR0aDogYXV0bztcclxufVxyXG5cclxuLmFjdGl2ZSB7XHJcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2U2N2UyMjtcclxuICB9XHJcblxyXG4gIC5wb2ludGVyIHtcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  <nav class=\"navbar navbar-expand-lg navbar-light\">\r\n    <div class=\"container\">\r\n      <div class=\"navbar-header\">\r\n        <a class=\"navbar-brand pointer\" (click)=\"goToHome()\">\r\n          <img src=\"../../assets/images/dancing-soul-logo.png\" alt=\"Dancing Soul\" class=\"logo\">\r\n        </a>\r\n      </div>\r\n \r\n        <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarResponsive\" aria-controls=\"navbarResponsive\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n          <span class=\"navbar-toggler-icon\"></span>\r\n        </button>\r\n        \r\n        <div class=\"collapse navbar-collapse\" id=\"navbarResponsive\">\r\n          <ul class=\"main-nav navbar-nav mr-auto\" *ngIf=\"isLoggedIn && user==='admin'\">\r\n\r\n            <li class=\"nav-item\">\r\n              <a class=\"nav-link\" routerLink=\"/admin/about\" routerLinkActive=\"active\" skipLocationChange>About</a>\r\n            </li>\r\n\r\n            <li class=\"nav-item\">\r\n              <a class=\"nav-link\" routerLink=\"/admin/faculty\" routerLinkActive=\"active\" skipLocationChange>Faculty</a>\r\n            </li>\r\n            \r\n            <li class=\"nav-item\">\r\n              <a class=\"nav-link\" routerLink=\"/admin/branch\" routerLinkActive=\"active\" skipLocationChange>Branch</a>\r\n            </li>\r\n\r\n            <li class=\"nav-item\">\r\n              <a class=\"nav-link\" routerLink=\"/admin/student\" routerLinkActive=\"active\" skipLocationChange>Student</a>\r\n            </li>\r\n\r\n            <li class=\"nav-item\">\r\n              <a class=\"nav-link\" routerLink=\"/admin/exams\" routerLinkActive=\"active\" skipLocationChange>Exams</a>\r\n            </li>\r\n\r\n            <li class=\"nav-item\">\r\n              <a class=\"nav-link\" routerLink=\"/admin/article\" routerLinkActive=\"active\" skipLocationChange>Article</a>\r\n            </li>\r\n\r\n            <li class=\"nav-item\">\r\n              <a class=\"nav-link\" routerLink=\"/admin/enquiry\" routerLinkActive=\"active\" skipLocationChange>Enquiries</a>\r\n            </li>\r\n\r\n          </ul>\r\n\r\n          <ul class=\"main-nav navbar-nav mr-auto\" *ngIf=\"!isLoggedIn && !user\">\r\n\r\n            <li class=\"nav-item\">\r\n              <a class=\"nav-link\" routerLink=\"/login\" routerLinkActive=\"active\">Login</a>\r\n            </li>\r\n\r\n          </ul>\r\n\r\n          <ul class=\"main-nav navbar-nav mr-auto\" *ngIf=\"isLoggedIn && (user === 'student')\">\r\n\r\n            <li class=\"nav-item\">\r\n              <!-- <a class=\"nav-link\" routerLink=\"/mystudent\" routerLinkActive=\"active\">Student</a> -->\r\n            </li>\r\n\r\n          </ul>\r\n\r\n          <ul class=\"main-nav navbar-nav mr-auto\" *ngIf=\"isLoggedIn\">\r\n\r\n            <li class=\"nav-item\">\r\n              <a class=\"nav-link\" routerLink=\"\" (click)=\"onLogout()\" routerLinkActive=\"active\">Logout</a>\r\n            </li>\r\n\r\n          </ul>\r\n\r\n\r\n        </div>\r\n\r\n    </div>\r\n  </nav>\r\n"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(authService, router, route) {
        this.authService = authService;
        this.router = router;
        this.route = route;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.isLoggedIn.subscribe(function (value) {
            _this.user = value.user;
            _this.isLoggedIn = value.loginValidate;
        });
    };
    HeaderComponent.prototype.onLogout = function () {
        this.authService.logout();
    };
    HeaderComponent.prototype.goToHome = function () {
        if (this.user === 'admin') {
            this.router.navigate(['/admin'], { relativeTo: this.route });
        }
        else if (this.user === 'faculty') {
            this.router.navigate(['/faculty'], { relativeTo: this.route });
        }
        else if (this.user === 'student') {
            this.router.navigate(['/student'], { relativeTo: this.route });
        }
        else {
            this.router.navigate(['/login'], { relativeTo: this.route });
        }
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\r\n    margin: 0;\r\n}\r\n\r\n.alert-danger {\r\n    border-radius: 0px;\r\n}\r\n\r\n.close {\r\n    outline: none;\r\n}\r\n\r\nhr {\r\n    border: 1px solid #e67e22;\r\n    margin: 5px 0;\r\n}\r\n\r\n.btn-login {\r\n    outline: none;\r\n    cursor: pointer;\r\n    border: 1px solid #e67e22;\r\n    border-radius: 50px;\r\n    background-color: #e67e22;\r\n    padding: 3px 12px;\r\n    color: #fff;\r\n    margin: 0 auto;\r\n    transition: background-color 0.2s, color 0.2s;\r\n}\r\n\r\n.btn-login:hover {\r\n    background-color: #e67e22;\r\n    color: #fff;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixlQUFlO0lBQ2YseUJBQXlCO0lBQ3pCLG1CQUFtQjtJQUNuQix5QkFBeUI7SUFDekIsaUJBQWlCO0lBQ2pCLFdBQVc7SUFDWCxjQUFjO0lBQ2QsNkNBQTZDO0FBQ2pEOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLFdBQVc7QUFDZiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqIHtcclxuICAgIG1hcmdpbjogMDtcclxufVxyXG5cclxuLmFsZXJ0LWRhbmdlciB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwcHg7XHJcbn1cclxuXHJcbi5jbG9zZSB7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG59XHJcblxyXG5ociB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZTY3ZTIyO1xyXG4gICAgbWFyZ2luOiA1cHggMDtcclxufVxyXG5cclxuLmJ0bi1sb2dpbiB7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2U2N2UyMjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTY3ZTIyO1xyXG4gICAgcGFkZGluZzogM3B4IDEycHg7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjJzLCBjb2xvciAwLjJzO1xyXG59XHJcblxyXG4uYnRuLWxvZ2luOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlNjdlMjI7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  <div class=\"row mt-3\" *ngIf=\"!loginAuth\">\r\n    <div class=\"col-10 mx-auto\">\r\n      <div class=\"alert alert-danger alert-dismissible\">\r\n        <button type=\"button\" class=\"close\" (click)=\"alertDismiss()\" data-dismiss=\"alert\">&times;</button>\r\n          <span>Invalid Username or Password</span>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  \r\n  <div class=\"row\">\r\n    <div class=\"col-md-6 col-sm-10 mx-auto\">\r\n      <h3 class=\"m-1\">Login</h3>\r\n      <form class=\"login-form\" (submit)=\"login()\" [formGroup]=\"form\">\r\n        \r\n        <div class=\"form-group\">\r\n          <label for=\"username\">User Name : </label>\r\n          <input type=\"text\" class=\"username\" name=\"username\" id=\"username\" formControlName=\"username\" placeholder=\"USERNAME\">\r\n          <span *ngIf=\"!form.get('username').valid && form.get('username').touched\">*Please enter User Name</span>\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n          <label for=\"password\">Password : </label>\r\n          <input type=\"password\" class=\"password\" name=\"password\" id=\"password\" formControlName=\"password\" placeholder=\"PASSWORD\">\r\n          <span *ngIf=\"!form.get('password').valid && form.get('password').touched\">*Please enter Password</span>\r\n        </div>\r\n        \r\n        <hr>\r\n        \r\n        <button type=\"submit\" class=\"btn-login\">Login</button>\r\n        \r\n      </form>\r\n    </div>\r\n  </div>"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService, roure) {
        this.authService = authService;
        this.roure = roure;
        this.loginAuth = true;
    }
    LoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.roure.params
            .subscribe(function (params) {
            if (params['auth'] === 'false') {
                _this.loginAuth = false;
            }
        });
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
            }),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
            })
        });
    };
    LoginComponent.prototype.login = function () {
        if (this.form.invalid) {
            return this.loginAuth = false;
        }
        if (this.form.valid) {
            this.loginAuth = true;
            this.authService.login(this.form.value.username, this.form.value.password);
        }
    };
    LoginComponent.prototype.alertDismiss = function () {
        this.loginAuth = true;
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/models/about.model.ts":
/*!***************************************!*\
  !*** ./src/app/models/about.model.ts ***!
  \***************************************/
/*! exports provided: AboutModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutModel", function() { return AboutModel; });
var AboutModel = /** @class */ (function () {
    function AboutModel(aim, history, phillosophy) {
        this.aim = aim;
        this.history = history;
        this.philosophy = phillosophy;
    }
    return AboutModel;
}());



/***/ }),

/***/ "./src/app/models/articles.model.ts":
/*!******************************************!*\
  !*** ./src/app/models/articles.model.ts ***!
  \******************************************/
/*! exports provided: Article */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Article", function() { return Article; });
var Article = /** @class */ (function () {
    function Article(_id, title, body, image) {
        this._id = _id;
        this.title = title;
        this.body = body;
        this.image = image;
    }
    return Article;
}());



/***/ }),

/***/ "./src/app/models/branch.model.ts":
/*!****************************************!*\
  !*** ./src/app/models/branch.model.ts ***!
  \****************************************/
/*! exports provided: Branch, BatchModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Branch", function() { return Branch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BatchModel", function() { return BatchModel; });
var Branch = /** @class */ (function () {
    function Branch(id, branch, city, address, email, phone, description, images, batch, status) {
        this._id = id;
        this.city = city;
        this.branch = branch;
        this.address = address;
        this.email = email;
        this.phone = phone;
        this.description = description;
        this.images = images;
        this.batch = batch;
        this.status = status;
    }
    return Branch;
}());

var BatchModel = /** @class */ (function () {
    function BatchModel(batchType, days, batchname, time, fees) {
        this.batchType = batchType;
        this.days = days;
        this.batchName = batchname;
        this.time = time;
        this.fees = fees;
    }
    return BatchModel;
}());



/***/ }),

/***/ "./src/app/models/enquiry.model.ts":
/*!*****************************************!*\
  !*** ./src/app/models/enquiry.model.ts ***!
  \*****************************************/
/*! exports provided: Enquiry */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Enquiry", function() { return Enquiry; });
var Enquiry = /** @class */ (function () {
    function Enquiry(_id, name, email, phone, message) {
        this._id = _id;
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.message = message;
    }
    return Enquiry;
}());



/***/ }),

/***/ "./src/app/models/faculty.model.ts":
/*!*****************************************!*\
  !*** ./src/app/models/faculty.model.ts ***!
  \*****************************************/
/*! exports provided: Faculty */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Faculty", function() { return Faculty; });
var Faculty = /** @class */ (function () {
    function Faculty(id, name, birthDate, description, image, email, phone, status) {
        this._id = id;
        this.name = name;
        this.birthDate = birthDate;
        this.description = description;
        this.image = image;
        this.email = email;
        this.phone = phone;
        this.status = status;
    }
    return Faculty;
}());



/***/ }),

/***/ "./src/app/models/student.model.ts":
/*!*****************************************!*\
  !*** ./src/app/models/student.model.ts ***!
  \*****************************************/
/*! exports provided: StudentModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentModel", function() { return StudentModel; });
var StudentModel = /** @class */ (function () {
    function StudentModel(id, name, birthDate, bloodGroup, workPlace, image, firstGuardianName, firstGuardianRelation, secondGuardianName, secondGuardianRelation, medicalHistory, phone, email, address, branch, batch, batchName, status) {
        this._id = id;
        this.name = name;
        this.birthDate = birthDate;
        this.bloodGroup = bloodGroup;
        this.workPlace = workPlace;
        this.image = image;
        this.firstGuardianName = firstGuardianName;
        this.firstGuardianRelation = firstGuardianRelation;
        this.secondGuardianName = secondGuardianName;
        this.secondGuardianRelation = secondGuardianRelation;
        this.medicalHistory = medicalHistory;
        this.phone = phone;
        this.email = email;
        this.address = address;
        this.branch = branch;
        this.batch = batch;
        this.batchName = batchName;
        this.status = status;
    }
    return StudentModel;
}());



/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.css":
/*!*************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h2 {\r\n    text-align: left;\r\n}\r\n\r\nh2::after {\r\n    display: none;\r\n}\r\n\r\nh3 {\r\n    font-size: 150%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZS1ub3QtZm91bmQvcGFnZS1ub3QtZm91bmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxlQUFlO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvcGFnZS1ub3QtZm91bmQvcGFnZS1ub3QtZm91bmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImgyIHtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuXHJcbmgyOjphZnRlciB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG5oMyB7XHJcbiAgICBmb250LXNpemU6IDE1MCU7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.html":
/*!**************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Error 404!!</h2>\r\n<h3>Page Not Found...</h3>"

/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.ts":
/*!************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.ts ***!
  \************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    PageNotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-page-not-found',
            template: __webpack_require__(/*! ./page-not-found.component.html */ "./src/app/page-not-found/page-not-found.component.html"),
            styles: [__webpack_require__(/*! ./page-not-found.component.css */ "./src/app/page-not-found/page-not-found.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "./src/app/services/about.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/about.service.ts ***!
  \*******************************************/
/*! exports provided: AboutService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutService", function() { return AboutService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _root_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./root.service */ "./src/app/services/root.service.ts");
/* harmony import */ var _models_about_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/about.model */ "./src/app/models/about.model.ts");




var AboutService = /** @class */ (function () {
    function AboutService(rootService) {
        this.rootService = rootService;
        this.about = new _models_about_model__WEBPACK_IMPORTED_MODULE_3__["AboutModel"]("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.");
    }
    AboutService.prototype.getAbout = function () {
        // const apiLink = 'http://localhost:3000/getAim';
        // this.rootService.callGet(apiLink).subscribe((response: string)=>{
        //     console.log(response);
        //     this.aim = response;
        //     console.log(this.aim) ;   
        // },(error)=>{
        //     console.log(error);
        // });
        return this.about;
    };
    AboutService.prototype.saveAim = function (aim) {
        // const data : { aim };
        // const apiLink = 'http://localhost:3000/editAim';
        // this.rootService.callPost(apiLink, data).subscribe((response)=>{
        //     console.log('Edited Data is', response);
        this.about.aim = aim;
        // },(error)=>{
        //   console.log('error during post is ', error);       
        // });      
    };
    AboutService.prototype.saveHistory = function (history) {
        // const data : { history };
        // const apiLink = 'http://localhost:3000/editHistory';
        // this.rootService.callPost(apiLink, data).subscribe((response)=>{
        //     console.log('Edited Data is', response);
        this.about.history = history;
        // },(error)=>{
        //   console.log('error during post is ', error);       
        // });      
    };
    AboutService.prototype.savePhilosophy = function (philosophy) {
        // const data : { phillosophy };
        // const apiLink = 'http://localhost:3000/editPhilosophy';
        // this.rootService.callPost(apiLink, data).subscribe((response)=>{
        //     console.log('Edited Data is', response);
        this.about.philosophy = philosophy;
        // },(error)=>{
        //   console.log('error during post is ', error);       
        // });      
    };
    AboutService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_root_service__WEBPACK_IMPORTED_MODULE_2__["RootService"]])
    ], AboutService);
    return AboutService;
}());



/***/ }),

/***/ "./src/app/services/articles.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/articles.service.ts ***!
  \**********************************************/
/*! exports provided: ArticleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticleService", function() { return ArticleService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _models_articles_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/articles.model */ "./src/app/models/articles.model.ts");
/* harmony import */ var _image_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./image.service */ "./src/app/services/image.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _root_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./root.service */ "./src/app/services/root.service.ts");





var ArticleService = /** @class */ (function () {
    function ArticleService(rootService, image) {
        this.rootService = rootService;
        this.image = image;
        this.articles = [new _models_articles_model__WEBPACK_IMPORTED_MODULE_1__["Article"]('0', 'What is Lorem Ipsum?', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.', this.image.getNoImage())];
    }
    ArticleService.prototype.getArticles = function () {
        // const apiLink = 'http://localhost:3000/getArticles';
        // this.rootService.callGet(apiLink).subscribe((response: Article[])=>{
        //     console.log(response);
        //     this.articles = response;
        //     console.log(this.articles) ;   
        // },(error)=>{
        //     console.log(error);
        // });
        return this.articles;
    };
    ArticleService.prototype.getArticle = function (articleId) {
        var article = this.articles.find(function (article) { return article._id === articleId; });
        return article;
    };
    ArticleService.prototype.uniqueId = function () {
        if (this.articles.length > 0) {
            return this.articles[this.articles.length - 1]._id + 1;
        }
        return '0';
    };
    ArticleService.prototype.addArticle = function (title, body, image) {
        var _id = this.uniqueId();
        var article = { _id: _id, title: title, body: body, image: image };
        // const apiLink = 'http://localhost:3000/addArticle';
        // this.rootService.callPost(apiLink, article).subscribe((response)=>{
        //     console.log(response);
        // },(error)=>{
        //     console.log(error);
        // });
        this.articles.push(article);
    };
    ArticleService.prototype.deleteArticle = function (_id) {
        var dltConfirm = confirm("do you really want to delete??");
        if (dltConfirm) {
            // const data = {
            //     _id
            // }
            // const apiLink = 'http://localhost:3000/deleteArticle';
            // this.rootService.callPost(apiLink, data).subscribe((response)=>{
            //     console.log('Deleted data is ',response);
            var i = this.articles.findIndex(function (faculty) { return faculty._id === _id; });
            this.articles.splice(i, 1);
            // },
            // (error)=>{
            //     console.log('error: ',error);
            // });
        }
    };
    ArticleService.prototype.editArticle = function (article) {
        // const apiLink = 'http://localhost:3000/editArticle';
        // this.rootService.callPost(apiLink, article).subscribe((response)=>{
        //     console.log('Edited Data is', response);
        var i = this.articles.findIndex(function (thisArticle) { return thisArticle._id === article._id; });
        this.articles[i] = article;
        // },
        // (error)=>{
        //   console.log('error during post is ', error);       
        // });         
    };
    ArticleService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_root_service__WEBPACK_IMPORTED_MODULE_4__["RootService"],
            _image_service__WEBPACK_IMPORTED_MODULE_2__["ImageService"]])
    ], ArticleService);
    return ArticleService;
}());



/***/ }),

/***/ "./src/app/services/branch.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/branch.service.ts ***!
  \********************************************/
/*! exports provided: BranchService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BranchService", function() { return BranchService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _models_branch_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/branch.model */ "./src/app/models/branch.model.ts");
/* harmony import */ var _root_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./root.service */ "./src/app/services/root.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _image_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./image.service */ "./src/app/services/image.service.ts");





var BranchService = /** @class */ (function () {
    function BranchService(rootService, image) {
        this.rootService = rootService;
        this.image = image;
        this.batch = [new _models_branch_model__WEBPACK_IMPORTED_MODULE_1__["BatchModel"]("weekDays", "mon, Tue", "Beginner", "5 - 8", "300"), new _models_branch_model__WEBPACK_IMPORTED_MODULE_1__["BatchModel"]("weekEnds", "sun", "Beginner", "6 - 9", "700")];
        this.images = [this.image.getNoImage()];
        this.branches = [
            new _models_branch_model__WEBPACK_IMPORTED_MODULE_1__["Branch"]('0', "Thane", "Thane", "Thane - 400607", "example@thane.com", "9876543210", 'desc', this.images, this.batch, "activated")
        ];
    }
    BranchService.prototype.getBranches = function () {
        // const apiLink = 'http://192.168.0.105:3000/getBranches';
        // this.rootService.callGet(apiLink).subscribe((response: Branch[])=>{
        //     console.log('response from post data is ', response);
        //     this.branches = response;
        // },
        // (error)=>{
        //     console.log('error during post is ', error);
        // });
        return this.branches;
    };
    BranchService.prototype.getBranch = function (id) {
        return this.branches.find(function (branch) { return branch._id === id; });
    };
    // This Function will be deleted
    BranchService.prototype.uniqueId = function () {
        if (this.branches.length > 0) {
            return (parseInt(this.branches[this.branches.length - 1]._id) + 1).toString();
        }
        return '0';
    };
    BranchService.prototype.addBranch = function (branch, city, address, email, phone, description, images, batch, status) {
        var _id = this.uniqueId();
        var newBranch = { _id: _id, branch: branch, city: city, address: address, email: email, phone: phone, description: description, images: images, batch: batch, status: status };
        // const apiLink = 'http://192.168.0.105:3000/addBranches';
        // this.rootService.callPost(apiLink, newBranch).subscribe((response)=>{
        //     console.log('response from post data is ', response);      
        //     console.log(newBranch);
        this.branches.push(newBranch);
        // },
        // (error)=>{
        //     console.log('error during post is ', error);
        // });
        // return _id;
    };
    //delete branch
    BranchService.prototype.changeStatus = function (_id, status) {
        var statusConfirm = true;
        if (status === "deactivated") {
            statusConfirm = confirm("do you really want to Deactivate Branch??");
        }
        if (statusConfirm) {
            // const data = {
            //     _id,
            //     status
            // }
            // const apiLink = 'http://192.168.0.105:3000/changeBranchStatus';
            // this.rootService.callPost(apiLink, data).subscribe((response)=>{
            //     console.log('Deleted data is ',response);
            var i = this.branches.findIndex(function (branch) { return branch._id === _id; });
            this.branches[i].status = status;
            // },
            // (error)=>{
            //     console.log('error: ',error);
            // }); 
        }
    };
    BranchService.prototype.editBranch = function (branch) {
        // const apiLink = 'http://192.168.0.105:3000/editBranch';
        // this.rootService.callPost(apiLink, branch).subscribe((response)=>{
        //     console.log('Edited Data is', response);
        var i = this.branches.findIndex(function (thisBranch) { return thisBranch._id === branch._id; });
        this.branches[i] = branch;
        // },
        // (error)=>{
        //     console.log('error during post is ', error);
        // });
    };
    BranchService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_root_service__WEBPACK_IMPORTED_MODULE_2__["RootService"],
            _image_service__WEBPACK_IMPORTED_MODULE_4__["ImageService"]])
    ], BranchService);
    return BranchService;
}());



/***/ }),

/***/ "./src/app/services/enquiry.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/enquiry.service.ts ***!
  \*********************************************/
/*! exports provided: EnquiryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnquiryService", function() { return EnquiryService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _models_enquiry_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/enquiry.model */ "./src/app/models/enquiry.model.ts");
/* harmony import */ var _root_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./root.service */ "./src/app/services/root.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");




var EnquiryService = /** @class */ (function () {
    function EnquiryService(rootService) {
        this.rootService = rootService;
        this.enquiries = [new _models_enquiry_model__WEBPACK_IMPORTED_MODULE_1__["Enquiry"]("0", "shubham", "shubham@gmail.com", "9876541230", "Hi this is shubham")];
    }
    EnquiryService.prototype.getEnquiries = function () {
        // const apiLink = 'http://localhost:3000/getEnquiries';
        // this.rootService.callGet(apiLink).subscribe((response: Enquiry[])=>{
        //     console.log(response);
        //     this.enquiries = response;
        //     console.log(this.enquiries);   
        // },(error)=>{
        //     console.log(error);
        // });
        return this.enquiries;
    };
    EnquiryService.prototype.getEnquiry = function (_id) {
        return this.enquiries.find(function (enquiry) { return enquiry._id === _id; });
    };
    EnquiryService.prototype.sendReply = function (sendTo, subject, body) {
        var mail = { sendTo: sendTo, subject: subject, body: body };
        // const apiLink = 'http://localhost:3000/sendMail';
        // this.rootService.callPost(apiLink, mail).subscribe((response)=>{
        //     console.log('Edited Data is', response);
        console.log(mail);
        // },
        // (error)=>{
        //     console.log('error during post is ', error);
        // });
    };
    EnquiryService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_root_service__WEBPACK_IMPORTED_MODULE_2__["RootService"]])
    ], EnquiryService);
    return EnquiryService;
}());



/***/ }),

/***/ "./src/app/services/faculty.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/faculty.service.ts ***!
  \*********************************************/
/*! exports provided: FacultyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FacultyService", function() { return FacultyService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _models_faculty_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/faculty.model */ "./src/app/models/faculty.model.ts");
/* harmony import */ var _root_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./root.service */ "./src/app/services/root.service.ts");
/* harmony import */ var _image_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./image.service */ "./src/app/services/image.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");





var FacultyService = /** @class */ (function () {
    function FacultyService(rootService, image) {
        this.rootService = rootService;
        this.image = image;
        this.faculties = [
            new _models_faculty_model__WEBPACK_IMPORTED_MODULE_1__["Faculty"]("0", "Faculty", "2019-04-11", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", this.image.getProfileImage(), "faculty@dance.com", "9875463210", "activated")
        ];
    }
    FacultyService.prototype.getFaculties = function () {
        // const apiLink = 'http://localhost:3000/getFaculties';
        // this.rootService.callGet(apiLink).subscribe((response: Faculty[])=>{
        //     console.log(response);
        //     this.faculties = response;
        //     console.log(this.faculties) ;   
        // },(error)=>{
        //     console.log(error);
        // });
        return this.faculties;
    };
    FacultyService.prototype.getFaculty = function (id) {
        return this.faculties.find(function (faculty) { return faculty._id === id; });
    };
    FacultyService.prototype.uniqueId = function () {
        if (this.faculties.length > 0) {
            return (parseInt(this.faculties[this.faculties.length - 1]._id) + 1).toString();
        }
        return '0';
    };
    FacultyService.prototype.addFaculty = function (name, birthDate, description, image, email, phone, status) {
        var _id = this.uniqueId();
        var faculty = { _id: _id, name: name, birthDate: birthDate, description: description, image: image, email: email, phone: phone, status: status };
        // const apiLink = 'http://localhost:3000/addFaculty';
        // this.rootService.callPost(apiLink, faculty).subscribe((response)=>{
        //     console.log(response);
        // },(error)=>{
        //     console.log(error);
        // });
        this.faculties.push(faculty);
    };
    FacultyService.prototype.changeStatus = function (_id, status) {
        var statusConfirm = true;
        if (status === "deactivated") {
            statusConfirm = confirm("do you really want to Deactivate Branch??");
        }
        if (statusConfirm) {
            // const data = {
            //     _id,
            //     status
            // }
            // const apiLink = 'http://localhost:3000/changeFacultyStatus';
            // this.rootService.callPost(apiLink, data).subscribe((response)=>{
            //     console.log('Deleted data is ',response);
            var i = this.faculties.findIndex(function (faculty) { return faculty._id === _id; });
            this.faculties[i].status = status;
            // this.branches.splice(index, 1);
            // },(error)=>{
            //     console.log('error: ',error);
            // });
        }
    };
    FacultyService.prototype.editFaculty = function (faculty) {
        // const apiLink = 'http://localhost:3000/editFaculty';
        // this.rootService.callPost(apiLink, faculty).subscribe((response)=>{
        //     console.log('Edited Data is', response);
        var i = this.faculties.findIndex(function (thisFaculty) { return thisFaculty._id === faculty._id; });
        this.faculties[i] = faculty;
        // },(error)=>{
        //   console.log('error during post is ', error);       
        // });      
    };
    FacultyService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_root_service__WEBPACK_IMPORTED_MODULE_2__["RootService"],
            _image_service__WEBPACK_IMPORTED_MODULE_3__["ImageService"]])
    ], FacultyService);
    return FacultyService;
}());



/***/ }),

/***/ "./src/app/services/image.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/image.service.ts ***!
  \*******************************************/
/*! exports provided: ImageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageService", function() { return ImageService; });
var ImageService = /** @class */ (function () {
    function ImageService() {
        this.profileImage = "data:image/png;base64,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";
        this.noImage = "data:image/jpeg;base64,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";
    }
    ImageService.prototype.getProfileImage = function () {
        return this.profileImage;
    };
    ImageService.prototype.getNoImage = function () {
        return this.noImage;
    };
    return ImageService;
}());



/***/ }),

/***/ "./src/app/services/root.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/root.service.ts ***!
  \******************************************/
/*! exports provided: RootService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RootService", function() { return RootService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var RootService = /** @class */ (function () {
    function RootService(http) {
        this.http = http;
    }
    RootService.prototype.callPost = function (apiLink, data) {
        return this.http.post(apiLink, data);
    };
    RootService.prototype.callGet = function (apiLink) {
        return this.http.get(apiLink);
    };
    RootService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], RootService);
    return RootService;
}());



/***/ }),

/***/ "./src/app/services/student.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/student.service.ts ***!
  \*********************************************/
/*! exports provided: StudentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentService", function() { return StudentService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _models_student_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/student.model */ "./src/app/models/student.model.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _image_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./image.service */ "./src/app/services/image.service.ts");




var StudentService = /** @class */ (function () {
    function StudentService(image) {
        this.image = image;
        this.students = [new _models_student_model__WEBPACK_IMPORTED_MODULE_1__["StudentModel"]('0', "Shubham", "1996-10-17", "A+", "Self Employed", this.image.getProfileImage(), "More", "Father", "", "", "medicle", "9876543210", "shubham@gmail.com", "1/202, Thane - 400605", "0", "weekDays", "Beginner", "activated")];
    }
    StudentService.prototype.getStudents = function () {
        // const apiLink = 'http://localhost:3000/getStudents';
        // this.rootService.callGet(apiLink).subscribe((response: Student[])=>{
        //     console.log(response);
        //     this.students = response;
        //     console.log(this.students);   
        // },(error)=>{
        //     console.log(error);
        // });
        return this.students;
    };
    StudentService.prototype.getStudent = function (id) {
        return this.students.find(function (student) { return student._id === id; });
    };
    StudentService.prototype.uniqueId = function () {
        if (this.students.length > 0) {
            return (parseInt(this.students[this.students.length - 1]._id) + 1).toString();
        }
        return '0';
    };
    StudentService.prototype.addStudent = function (name, birthDate, bloodGroup, workPlace, image, firstGuardianName, firstGuardianRelation, secondGuardianName, secondGuardianRelation, medicalHistory, phone, email, address, branch, batch, batchName, status) {
        var _id = this.uniqueId();
        var student = {
            _id: _id, name: name, birthDate: birthDate, bloodGroup: bloodGroup, workPlace: workPlace, image: image, firstGuardianName: firstGuardianName, firstGuardianRelation: firstGuardianRelation, secondGuardianName: secondGuardianName, secondGuardianRelation: secondGuardianRelation, medicalHistory: medicalHistory, phone: phone, email: email, address: address, branch: branch, batch: batch, batchName: batchName, status: status
        };
        // const apiLink = 'http://localhost:3000/addStudent';
        // this.rootService.callPost(apiLink, student).subscribe((response)=>{
        //     console.log(response);
        // },(error)=>{
        //     console.log(error);
        // });
        this.students.push(student);
    };
    //delete branch
    StudentService.prototype.changeStatus = function (_id, status) {
        var statusConfirm = true;
        if (status === "deactivated") {
            statusConfirm = confirm("do you really want to Deactivate Branch??");
        }
        if (statusConfirm) {
            // const data = {
            //     _id,
            //     status
            // }
            // const apiLink = 'http://localhost:3000/changeStudentStatus';
            // this.rootService.callPost(apiLink, data).subscribe((response)=>{
            //     console.log('Deleted data is ',response);
            var i = this.students.findIndex(function (student) { return student._id === _id; });
            this.students[i].status = status;
            // this.branches.splice(index, 1);
            // },(error)=>{
            //     console.log('error: ',error);
            // });
        }
    };
    StudentService.prototype.editStudent = function (student) {
        // const apiLink = 'http://localhost:3000/editStudent';
        // this.rootService.callPost(apiLink, student).subscribe((response)=>{
        //     console.log('Edited Data is', response);
        var i = this.students.findIndex(function (thisStudent) { return thisStudent._id === student._id; });
        this.students[i] = student;
        // },
        // (error)=>{
        //   console.log('error during post is ', error);       
        // });   
    };
    StudentService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_image_service__WEBPACK_IMPORTED_MODULE_3__["ImageService"]])
    ], StudentService);
    return StudentService;
}());



/***/ }),

/***/ "./src/app/validators/form.validator.ts":
/*!**********************************************!*\
  !*** ./src/app/validators/form.validator.ts ***!
  \**********************************************/
/*! exports provided: FormValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormValidator", function() { return FormValidator; });
var FormValidator = /** @class */ (function () {
    function FormValidator() {
        this.imgExt = ['jpg', 'png'];
    }
    FormValidator.prototype.imageValidate = function (control) {
        if (!control.value) {
            return null;
        }
        var ext = control.value.substring(control.value.lastIndexOf('.') + 1);
        if (!(this.imgExt.indexOf(ext) != -1)) {
            return { 'invalidImage': true };
        }
        return null;
    };
    FormValidator.prototype.daysValidator = function (formArray) {
        for (var x = 0; x < formArray.length; ++x) {
            if (formArray.at(x).value) {
                return null;
            }
        }
        return { 'invalidDays': true };
    };
    return FormValidator;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! F:\MEAN_stack\DANCING_SOUL\demo\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map