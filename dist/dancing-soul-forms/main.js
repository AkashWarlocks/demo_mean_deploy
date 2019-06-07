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

/***/ "./src/app/admin/admin-about/admin-about.component.css":
/*!*************************************************************!*\
  !*** ./src/app/admin/admin-about/admin-about.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\r\n    margin: 0;\r\n}\r\n\r\nh3 {\r\n    font-size: 150%;\r\n}\r\n\r\n.about {\r\n    background-color: #f4f4f4;\r\n    padding: 10px;\r\n}\r\n\r\nhr {\r\n    border: 1px solid #e67e22;\r\n    margin: 5px 0;\r\n}\r\n\r\n.about-body {\r\n    border: 1px solid #e67e22;\r\n    padding: 5px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vYWRtaW4tYWJvdXQvYWRtaW4tYWJvdXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixhQUFhO0FBQ2pCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLFlBQVk7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9hZG1pbi9hZG1pbi1hYm91dC9hZG1pbi1hYm91dC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XHJcbiAgICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbmgzIHtcclxuICAgIGZvbnQtc2l6ZTogMTUwJTtcclxufVxyXG5cclxuLmFib3V0IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNGY0ZjQ7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcblxyXG5ociB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZTY3ZTIyO1xyXG4gICAgbWFyZ2luOiA1cHggMDtcclxufVxyXG5cclxuLmFib3V0LWJvZHkge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2U2N2UyMjtcclxuICAgIHBhZGRpbmc6IDVweDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/admin/admin-about/admin-about.component.html":
/*!**************************************************************!*\
  !*** ./src/app/admin/admin-about/admin-about.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<img class=\"loading\" src=\"../../../assets/images/Reload-1.3s-78px.svg\" *ngIf=\"loading\">\r\n\r\n<div class=\"row mt-2\" *ngIf=\"!loading\">\r\n\r\n  <div class=\"col-10 mx-auto\">\r\n    <div class=\"about\">\r\n      <div class=\"row\">\r\n        <div class=\"col-12\">\r\n          <button type=\"button\" routerLink=\"edit\" class=\"btn-edit float-right\" skipLocationChange>Edit</button>\r\n          <h3>Aim</h3>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <hr>\r\n    <div class=\"about-body\">\r\n      <p>{{ about.aim }}</p>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/admin/admin-about/admin-about.component.ts":
/*!************************************************************!*\
  !*** ./src/app/admin/admin-about/admin-about.component.ts ***!
  \************************************************************/
/*! exports provided: AdminAboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminAboutComponent", function() { return AdminAboutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_httpPost_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/httpPost.service */ "./src/app/services/httpPost.service.ts");



var AdminAboutComponent = /** @class */ (function () {
    function AdminAboutComponent(httpPostService) {
        this.httpPostService = httpPostService;
        this.loading = true;
    }
    AdminAboutComponent.prototype.ngOnInit = function () {
        var _this = this;
        var data = { api: "getAbout", data: {} };
        this.httpPostService.httpPost(data).subscribe(function (val) {
            _this.about = val[0];
            _this.loading = false;
        }, function (error) {
        });
    };
    AdminAboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admin-about',
            template: __webpack_require__(/*! ./admin-about.component.html */ "./src/app/admin/admin-about/admin-about.component.html"),
            styles: [__webpack_require__(/*! ./admin-about.component.css */ "./src/app/admin/admin-about/admin-about.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_httpPost_service__WEBPACK_IMPORTED_MODULE_2__["HttpPostService"]])
    ], AdminAboutComponent);
    return AdminAboutComponent;
}());



/***/ }),

/***/ "./src/app/admin/admin-about/admin-edit-aim/admin-edit-aim.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/admin/admin-about/admin-edit-aim/admin-edit-aim.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\r\n    margin: 0;\r\n}\r\n\r\nh3 {\r\n    font-size: 150%;\r\n}\r\n\r\n.edit-aim {\r\n    background-color: #f4f4f4;\r\n    padding: 10px;\r\n\r\n}\r\n\r\nhr {\r\n    border: 1px solid #e67e22;\r\n    margin:8px 0px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vYWRtaW4tYWJvdXQvYWRtaW4tZWRpdC1haW0vYWRtaW4tZWRpdC1haW0uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsYUFBYTs7QUFFakI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsY0FBYztBQUNsQiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluLWFib3V0L2FkbWluLWVkaXQtYWltL2FkbWluLWVkaXQtYWltLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqIHtcclxuICAgIG1hcmdpbjogMDtcclxufVxyXG5cclxuaDMge1xyXG4gICAgZm9udC1zaXplOiAxNTAlO1xyXG59XHJcblxyXG4uZWRpdC1haW0ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y0ZjRmNDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcblxyXG59XHJcblxyXG5ociB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZTY3ZTIyO1xyXG4gICAgbWFyZ2luOjhweCAwcHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/admin/admin-about/admin-edit-aim/admin-edit-aim.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/admin/admin-about/admin-edit-aim/admin-edit-aim.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<img class=\"loading\" src=\"../../../assets/images/Reload-1.3s-78px.svg\" *ngIf=\"loading\">\r\n\r\n<div class=\"row mt-2\" *ngIf=\"!loading\">\r\n  <div class=\"edit-aim col-md-8 col-sm-10 mx-auto\">\r\n    <form (submit)=\"saveAim()\" [formGroup]=\"form\">\r\n      <div class=\"header\">\r\n        <h3>Aim</h3>\r\n      </div>\r\n      <hr>\r\n      <div class=\"body\">\r\n        <textarea class=\"aim\" name=\"aim\" id=\"aim\" rows=\"6\" formControlName=\"aim\" placeholder=\"Enter Aim\"></textarea>\r\n        <span *ngIf=\"!form.get('aim').valid && form.get('aim').touched\">*Please Enter Aim</span>\r\n      </div>\r\n      <hr>\r\n      <div class=\"footer\">\r\n        <div class=\"row\">\r\n          <div class=\"col-6\">\r\n            <button type=\"submit\" class=\"btn-save\">Save</button>\r\n          </div>\r\n          <div class=\"col-6\">\r\n            <button type=\"button\" class=\"btn-cancel float-right\" (click)=\"cancel()\">Cancel</button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/admin/admin-about/admin-edit-aim/admin-edit-aim.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/admin/admin-about/admin-edit-aim/admin-edit-aim.component.ts ***!
  \******************************************************************************/
/*! exports provided: AdminEditAimComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminEditAimComponent", function() { return AdminEditAimComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_httpPost_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/httpPost.service */ "./src/app/services/httpPost.service.ts");





var AdminEditAimComponent = /** @class */ (function () {
    function AdminEditAimComponent(httpPostService, router, route) {
        this.httpPostService = httpPostService;
        this.router = router;
        this.route = route;
        this.loading = true;
    }
    AdminEditAimComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            aim: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
            })
        });
        var data = { api: "getAbout", data: {} };
        this.httpPostService.httpPost(data).subscribe(function (val) {
            _this.aim = val[0].aim;
            _this.form.patchValue({ aim: _this.aim });
            _this.loading = false;
        }, function (error) {
        });
    };
    AdminEditAimComponent.prototype.saveAim = function () {
        var _this = this;
        if (this.form.valid) {
            this.loading = true;
            var data = { api: "saveAim", data: { aim: this.form.value.aim } };
            this.httpPostService.httpPost(data).subscribe(function (val) {
                _this.form.reset();
                _this.cancel();
            }, function (error) {
                _this.loading = false;
            });
        }
    };
    AdminEditAimComponent.prototype.cancel = function () {
        this.loading = true;
        this.router.navigate(['/admin', 'about', 'aim'], { relativeTo: this.route, skipLocationChange: true });
    };
    AdminEditAimComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admin-edit-aim',
            template: __webpack_require__(/*! ./admin-edit-aim.component.html */ "./src/app/admin/admin-about/admin-edit-aim/admin-edit-aim.component.html"),
            styles: [__webpack_require__(/*! ./admin-edit-aim.component.css */ "./src/app/admin/admin-about/admin-edit-aim/admin-edit-aim.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_httpPost_service__WEBPACK_IMPORTED_MODULE_4__["HttpPostService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], AdminEditAimComponent);
    return AdminEditAimComponent;
}());



/***/ }),

/***/ "./src/app/admin/admin-about/admin-edit-history/admin-edit-history.component.css":
/*!***************************************************************************************!*\
  !*** ./src/app/admin/admin-about/admin-edit-history/admin-edit-history.component.css ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\r\n    margin: 0;\r\n}\r\n\r\nh3 {\r\n    font-size: 150%;\r\n}\r\n\r\n.edit-history {\r\n    background-color: #f4f4f4;\r\n    padding: 10px;\r\n\r\n}\r\n\r\nhr {\r\n    border: 1px solid #e67e22;\r\n    margin:8px 0px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vYWRtaW4tYWJvdXQvYWRtaW4tZWRpdC1oaXN0b3J5L2FkbWluLWVkaXQtaGlzdG9yeS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksU0FBUztBQUNiOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixhQUFhOztBQUVqQjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixjQUFjO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvYWRtaW4vYWRtaW4tYWJvdXQvYWRtaW4tZWRpdC1oaXN0b3J5L2FkbWluLWVkaXQtaGlzdG9yeS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XHJcbiAgICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbmgzIHtcclxuICAgIGZvbnQtc2l6ZTogMTUwJTtcclxufVxyXG5cclxuLmVkaXQtaGlzdG9yeSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjRmNGY0O1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuXHJcbn1cclxuXHJcbmhyIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlNjdlMjI7XHJcbiAgICBtYXJnaW46OHB4IDBweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/admin/admin-about/admin-edit-history/admin-edit-history.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/admin/admin-about/admin-edit-history/admin-edit-history.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  <img class=\"loading\" src=\"../../../assets/images/Reload-1.3s-78px.svg\" *ngIf=\"loading\">\n\n  <div class=\"row mt-2\" *ngIf=\"!loading\">\n    <div class=\"edit-history col-md-8 col-sm-10 mx-auto\">\n      <form (submit)=\"saveHistory()\" [formGroup]=\"form\">\n        <div class=\"header\">\n          <h3>history</h3>\n        </div>\n        <hr>\n        <div class=\"body\">\n          <textarea class=\"history\" name=\"history\" id=\"history\" rows=\"6\" formControlName=\"history\" placeholder=\"Enter history\"></textarea>\n          <span *ngIf=\"!form.get('history').valid && form.get('history').touched\">*Please Enter History</span>\n        </div>\n        <hr>\n        <div class=\"footer\">\n          <div class=\"row\">\n            <div class=\"col-6\">\n              <button type=\"submit\" class=\"btn-save\">Save</button>\n            </div>\n            <div class=\"col-6\">\n              <button type=\"button\" class=\"btn-cancel float-right\" (click)=\"cancel()\">Cancel</button>\n            </div>\n          </div>\n        </div>\n      </form>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/admin/admin-about/admin-edit-history/admin-edit-history.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/admin/admin-about/admin-edit-history/admin-edit-history.component.ts ***!
  \**************************************************************************************/
/*! exports provided: AdminEditHistoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminEditHistoryComponent", function() { return AdminEditHistoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_httpPost_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/httpPost.service */ "./src/app/services/httpPost.service.ts");





var AdminEditHistoryComponent = /** @class */ (function () {
    function AdminEditHistoryComponent(httpPostService, router, route) {
        this.httpPostService = httpPostService;
        this.router = router;
        this.route = route;
        this.loading = true;
    }
    AdminEditHistoryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            history: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.history, {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
            })
        });
        var data = { api: "getAbout", data: {} };
        this.httpPostService.httpPost(data).subscribe(function (val) {
            _this.history = val[0].history;
            _this.form.patchValue({ history: _this.history });
            _this.loading = false;
        }, function (error) {
        });
    };
    AdminEditHistoryComponent.prototype.saveHistory = function () {
        var _this = this;
        if (this.form.valid) {
            this.loading = true;
            var data = { api: "saveHistory", data: { history: this.form.value.history } };
            this.httpPostService.httpPost(data).subscribe(function (val) {
                _this.form.reset();
                _this.cancel();
            }, function (error) {
                _this.loading = true;
            });
        }
    };
    AdminEditHistoryComponent.prototype.cancel = function () {
        this.loading = true;
        this.router.navigate(['/admin', 'about', 'history'], { relativeTo: this.route, skipLocationChange: true });
    };
    AdminEditHistoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admin-edit-history',
            template: __webpack_require__(/*! ./admin-edit-history.component.html */ "./src/app/admin/admin-about/admin-edit-history/admin-edit-history.component.html"),
            styles: [__webpack_require__(/*! ./admin-edit-history.component.css */ "./src/app/admin/admin-about/admin-edit-history/admin-edit-history.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_httpPost_service__WEBPACK_IMPORTED_MODULE_4__["HttpPostService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], AdminEditHistoryComponent);
    return AdminEditHistoryComponent;
}());



/***/ }),

/***/ "./src/app/admin/admin-about/admin-edit-philosophy/admin-edit-philosophy.component.css":
/*!*********************************************************************************************!*\
  !*** ./src/app/admin/admin-about/admin-edit-philosophy/admin-edit-philosophy.component.css ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\r\n    margin: 0;\r\n}\r\n\r\nh3 {\r\n    font-size: 150%;\r\n}\r\n\r\n.edit-philosophy {\r\n    background-color: #f4f4f4;\r\n    padding: 10px;\r\n\r\n}\r\n\r\nhr {\r\n    border: 1px solid #e67e22;\r\n    margin:8px 0px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vYWRtaW4tYWJvdXQvYWRtaW4tZWRpdC1waGlsb3NvcGh5L2FkbWluLWVkaXQtcGhpbG9zb3BoeS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksU0FBUztBQUNiOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixhQUFhOztBQUVqQjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixjQUFjO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvYWRtaW4vYWRtaW4tYWJvdXQvYWRtaW4tZWRpdC1waGlsb3NvcGh5L2FkbWluLWVkaXQtcGhpbG9zb3BoeS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XHJcbiAgICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbmgzIHtcclxuICAgIGZvbnQtc2l6ZTogMTUwJTtcclxufVxyXG5cclxuLmVkaXQtcGhpbG9zb3BoeSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjRmNGY0O1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuXHJcbn1cclxuXHJcbmhyIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlNjdlMjI7XHJcbiAgICBtYXJnaW46OHB4IDBweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/admin/admin-about/admin-edit-philosophy/admin-edit-philosophy.component.html":
/*!**********************************************************************************************!*\
  !*** ./src/app/admin/admin-about/admin-edit-philosophy/admin-edit-philosophy.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  <img class=\"loading\" src=\"../../../assets/images/Reload-1.3s-78px.svg\" *ngIf=\"loading\">\n\n  <div class=\"row mt-2\" *ngIf=\"!loading\">\n    <div class=\"edit-philosophy col-md-8 col-sm-10 mx-auto\">\n      <form (submit)=\"savePhilisophy()\" [formGroup]=\"form\">\n        <div class=\"header\">\n          <h3>philosophy</h3>\n        </div>\n        <hr>\n        <div class=\"body\">\n          <textarea class=\"philosophy\" name=\"philosophy\" id=\"philosophy\" rows=\"6\" formControlName=\"philosophy\" placeholder=\"Enter philosophy\"></textarea>\n          <span *ngIf=\"!form.get('philosophy').valid && form.get('philosophy').touched\">*Please Enter Philosophy</span>\n        </div>\n        <hr>\n        <div class=\"footer\">\n          <div class=\"row\">\n            <div class=\"col-6\">\n              <button type=\"submit\" class=\"btn-save\">Save</button>\n            </div>\n            <div class=\"col-6\">\n              <button type=\"button\" class=\"btn-cancel float-right\" (click)=\"cancel()\">Cancel</button>\n            </div>\n          </div>\n        </div>\n      </form>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/admin/admin-about/admin-edit-philosophy/admin-edit-philosophy.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/admin/admin-about/admin-edit-philosophy/admin-edit-philosophy.component.ts ***!
  \********************************************************************************************/
/*! exports provided: AdminEditPhilosophyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminEditPhilosophyComponent", function() { return AdminEditPhilosophyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_httpPost_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/httpPost.service */ "./src/app/services/httpPost.service.ts");





var AdminEditPhilosophyComponent = /** @class */ (function () {
    function AdminEditPhilosophyComponent(httpPostService, router, route) {
        this.httpPostService = httpPostService;
        this.router = router;
        this.route = route;
        this.loading = true;
    }
    AdminEditPhilosophyComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            philosophy: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.philosophy, {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
            })
        });
        var data = { api: "getAbout", data: {} };
        this.httpPostService.httpPost(data).subscribe(function (val) {
            _this.philosophy = val[0].philosophy;
            _this.form.patchValue({ philosophy: _this.philosophy });
            _this.loading = false;
        }, function (error) {
        });
    };
    AdminEditPhilosophyComponent.prototype.savePhilisophy = function () {
        var _this = this;
        if (this.form.valid) {
            this.loading = true;
            var data = { api: "savePhillosophy", data: { philosophy: this.form.value.philosophy } };
            this.httpPostService.httpPost(data).subscribe(function (val) {
                _this.form.reset();
                _this.cancel();
            }, function (error) {
                _this.loading = false;
            });
        }
    };
    AdminEditPhilosophyComponent.prototype.cancel = function () {
        this.loading = true;
        this.router.navigate(['/admin', 'about', 'philosophy'], { relativeTo: this.route, skipLocationChange: true });
    };
    AdminEditPhilosophyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admin-edit-philosophy',
            template: __webpack_require__(/*! ./admin-edit-philosophy.component.html */ "./src/app/admin/admin-about/admin-edit-philosophy/admin-edit-philosophy.component.html"),
            styles: [__webpack_require__(/*! ./admin-edit-philosophy.component.css */ "./src/app/admin/admin-about/admin-edit-philosophy/admin-edit-philosophy.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_httpPost_service__WEBPACK_IMPORTED_MODULE_4__["HttpPostService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], AdminEditPhilosophyComponent);
    return AdminEditPhilosophyComponent;
}());



/***/ }),

/***/ "./src/app/admin/admin-about/admin-history/admin-history.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/admin/admin-about/admin-history/admin-history.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\r\n    margin: 0;\r\n}\r\n\r\nh3 {\r\n    font-size: 150%;\r\n}\r\n\r\n.about {\r\n    background-color: #f4f4f4;\r\n    padding: 10px;\r\n}\r\n\r\nhr {\r\n    border: 1px solid #e67e22;\r\n    margin: 5px 0;\r\n}\r\n\r\n.about-body {\r\n    border: 1px solid #e67e22;\r\n    padding: 5px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vYWRtaW4tYWJvdXQvYWRtaW4taGlzdG9yeS9hZG1pbi1oaXN0b3J5LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxTQUFTO0FBQ2I7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGFBQWE7QUFDakI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixZQUFZO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvYWRtaW4vYWRtaW4tYWJvdXQvYWRtaW4taGlzdG9yeS9hZG1pbi1oaXN0b3J5LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqIHtcclxuICAgIG1hcmdpbjogMDtcclxufVxyXG5cclxuaDMge1xyXG4gICAgZm9udC1zaXplOiAxNTAlO1xyXG59XHJcblxyXG4uYWJvdXQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y0ZjRmNDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuXHJcbmhyIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlNjdlMjI7XHJcbiAgICBtYXJnaW46IDVweCAwO1xyXG59XHJcblxyXG4uYWJvdXQtYm9keSB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZTY3ZTIyO1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/admin/admin-about/admin-history/admin-history.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/admin/admin-about/admin-history/admin-history.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<img class=\"loading\" src=\"../../../assets/images/Reload-1.3s-78px.svg\" *ngIf=\"loading\">\n\n<div class=\"row mt-2\" *ngIf=\"!loading\">\n\n  <div class=\"col-10 mx-auto\">\n    <div class=\"about\">\n      <div class=\"row\">\n        <div class=\"col-12\">\n          <button type=\"button\" routerLink=\"edit\" class=\"btn-edit float-right\" skipLocationChange>Edit</button>\n          <h3>History</h3>\n        </div>\n      </div>\n    </div>\n    <hr>\n    <div class=\"about-body\">\n      <p>{{ about.history }}</p>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/admin/admin-about/admin-history/admin-history.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/admin/admin-about/admin-history/admin-history.component.ts ***!
  \****************************************************************************/
/*! exports provided: AdminHistoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminHistoryComponent", function() { return AdminHistoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_httpPost_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/httpPost.service */ "./src/app/services/httpPost.service.ts");



var AdminHistoryComponent = /** @class */ (function () {
    function AdminHistoryComponent(httpPostService) {
        this.httpPostService = httpPostService;
        this.loading = true;
    }
    AdminHistoryComponent.prototype.ngOnInit = function () {
        var _this = this;
        var data = { api: "getAbout", data: {} };
        this.httpPostService.httpPost(data).subscribe(function (val) {
            _this.about = val[0];
            _this.loading = false;
        }, function (error) {
        });
    };
    AdminHistoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admin-history',
            template: __webpack_require__(/*! ./admin-history.component.html */ "./src/app/admin/admin-about/admin-history/admin-history.component.html"),
            styles: [__webpack_require__(/*! ./admin-history.component.css */ "./src/app/admin/admin-about/admin-history/admin-history.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_httpPost_service__WEBPACK_IMPORTED_MODULE_2__["HttpPostService"]])
    ], AdminHistoryComponent);
    return AdminHistoryComponent;
}());



/***/ }),

/***/ "./src/app/admin/admin-about/admin-philosophy/admin-philosophy.component.css":
/*!***********************************************************************************!*\
  !*** ./src/app/admin/admin-about/admin-philosophy/admin-philosophy.component.css ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\r\n    margin: 0;\r\n}\r\n\r\nh3 {\r\n    font-size: 150%;\r\n}\r\n\r\n.about {\r\n    background-color: #f4f4f4;\r\n    padding: 10px;\r\n}\r\n\r\nhr {\r\n    border: 1px solid #e67e22;\r\n    margin: 5px 0;\r\n}\r\n\r\n.about-body {\r\n    border: 1px solid #e67e22;\r\n    padding: 5px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vYWRtaW4tYWJvdXQvYWRtaW4tcGhpbG9zb3BoeS9hZG1pbi1waGlsb3NvcGh5LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxTQUFTO0FBQ2I7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGFBQWE7QUFDakI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixZQUFZO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvYWRtaW4vYWRtaW4tYWJvdXQvYWRtaW4tcGhpbG9zb3BoeS9hZG1pbi1waGlsb3NvcGh5LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqIHtcclxuICAgIG1hcmdpbjogMDtcclxufVxyXG5cclxuaDMge1xyXG4gICAgZm9udC1zaXplOiAxNTAlO1xyXG59XHJcblxyXG4uYWJvdXQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y0ZjRmNDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuXHJcbmhyIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlNjdlMjI7XHJcbiAgICBtYXJnaW46IDVweCAwO1xyXG59XHJcblxyXG4uYWJvdXQtYm9keSB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZTY3ZTIyO1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/admin/admin-about/admin-philosophy/admin-philosophy.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/admin/admin-about/admin-philosophy/admin-philosophy.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<img class=\"loading\" src=\"../../../assets/images/Reload-1.3s-78px.svg\" *ngIf=\"loading\">\n\n<div class=\"row mt-2\" *ngIf=\"!loading\">\n\n  <div class=\"col-10 mx-auto\">\n    <div class=\"about\">\n      <div class=\"row\">\n        <div class=\"col-12\">\n          <button type=\"button\" routerLink=\"edit\" class=\"btn-edit float-right\" skipLocationChange>Edit</button>\n          <h3>Philosophy</h3>\n        </div>\n      </div>\n    </div>\n    <hr>\n    <div class=\"about-body\">\n      <p>{{ about.philosophy }}</p>\n    </div>\n  </div>\n\n</div>"

/***/ }),

/***/ "./src/app/admin/admin-about/admin-philosophy/admin-philosophy.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/admin/admin-about/admin-philosophy/admin-philosophy.component.ts ***!
  \**********************************************************************************/
/*! exports provided: AdminPhilosophyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminPhilosophyComponent", function() { return AdminPhilosophyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_httpPost_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/httpPost.service */ "./src/app/services/httpPost.service.ts");



var AdminPhilosophyComponent = /** @class */ (function () {
    function AdminPhilosophyComponent(httpPostService) {
        this.httpPostService = httpPostService;
        this.loading = true;
    }
    AdminPhilosophyComponent.prototype.ngOnInit = function () {
        var _this = this;
        var data = { api: "getAbout", data: {} };
        this.httpPostService.httpPost(data).subscribe(function (val) {
            _this.about = val[0];
            _this.loading = false;
        }, function (error) {
        });
    };
    AdminPhilosophyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admin-philosophy',
            template: __webpack_require__(/*! ./admin-philosophy.component.html */ "./src/app/admin/admin-about/admin-philosophy/admin-philosophy.component.html"),
            styles: [__webpack_require__(/*! ./admin-philosophy.component.css */ "./src/app/admin/admin-about/admin-philosophy/admin-philosophy.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_httpPost_service__WEBPACK_IMPORTED_MODULE_2__["HttpPostService"]])
    ], AdminPhilosophyComponent);
    return AdminPhilosophyComponent;
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

module.exports = "  <img class=\"loading\" src=\"../../../assets/images/Reload-1.3s-78px.svg\" *ngIf=\"loading\">\r\n\r\n  <div class=\"row mt-2\" *ngIf=\"!loading\">\r\n    <div class=\"col-10 mx-auto\">\r\n      <h4 class=\"text-center mb-3\">Add New Article</h4>\r\n      <form class=\"add_title\" (submit)=\"addArticle()\" [formGroup]=\"form\">\r\n        <div class=\"form-group\">\r\n          <label for=\"title\">Title : </label>\r\n          <input class=\"title\" type=\"text\" name=\"title\" id=\"title\" formControlName=\"title\" placeholder=\"Title\">\r\n          <span *ngIf=\"!form.get('title').valid && form.get('title').touched\">*Please enter Title</span>\r\n        </div>\r\n        \r\n        <div class=\"form-group\">\r\n          <label for=\"body\">Description : </label>\r\n          <textarea class=\"body\" name=\"body\" id=\"body\" rows=\"8\" formControlName=\"body\" placeholder=\"Description\"></textarea>\r\n          <span *ngIf=\"!form.get('body').valid && form.get('body').touched\">*Please enter Article Description</span>\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n          <label for=\"image\">Select Article Image : </label>\r\n          <input type=\"file\" id=\"image\" name=\"image\" formControlName=\"image\" (change)=\"onImagePicked($event)\">\r\n          <span *ngIf=\"!form.get('image').valid && form.get('image').touched\">*Please Select Image File</span>\r\n        </div>\r\n\r\n        <div class=\"row mt-1\" *ngIf=\"formError\">\r\n          <span>*Please Fill All Article Fields</span>\r\n        </div>\r\n        \r\n        <hr>\r\n        <button type=\"submit\" class=\"btn-add\">Save</button>\r\n        <button type=\"button\" class=\"btn-cancel float-right\" (click)=\"cancel()\">Cancel</button>\r\n      </form>\r\n    </div>\r\n  </div>"

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _validators_form_validator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../validators/form.validator */ "./src/app/validators/form.validator.ts");
/* harmony import */ var _services_httpPost_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/httpPost.service */ "./src/app/services/httpPost.service.ts");






var AdminAddArticleComponent = /** @class */ (function () {
    function AdminAddArticleComponent(httpPostService, formValidator, router, route) {
        this.httpPostService = httpPostService;
        this.formValidator = formValidator;
        this.router = router;
        this.route = route;
        this.loading = true;
        this.formError = false;
        this.imgExt = ['jpg', 'png'];
    }
    AdminAddArticleComponent.prototype.ngOnInit = function () {
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
            }),
            body: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
            }),
            image: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, {
                validators: [this.formValidator.imageValidate.bind(this)]
            })
        });
        this.loading = false;
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
        var _this = this;
        if (this.form.invalid) {
            this.formError = true;
        }
        if (this.form.valid) {
            this.formError = false;
            this.loading = true;
            var article = { title: this.form.value.title, body: this.form.value.body, image: "image" };
            var data = { api: "addArticle", data: article };
            this.httpPostService.httpPost(data).subscribe(function (val) {
                _this.form.reset();
                _this.cancel();
            }, function (error) {
                _this.loading = false;
            });
        }
    };
    AdminAddArticleComponent.prototype.cancel = function () {
        this.loading = true;
        this.router.navigate(["/admin", "article"], { relativeTo: this.route, skipLocationChange: true });
    };
    AdminAddArticleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admin-add-article',
            template: __webpack_require__(/*! ./admin-add-article.component.html */ "./src/app/admin/admin-article/admin-add-article/admin-add-article.component.html"),
            styles: [__webpack_require__(/*! ./admin-add-article.component.css */ "./src/app/admin/admin-article/admin-add-article/admin-add-article.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_httpPost_service__WEBPACK_IMPORTED_MODULE_5__["HttpPostService"],
            _validators_form_validator__WEBPACK_IMPORTED_MODULE_4__["FormValidator"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
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

module.exports = "  <img class=\"loading\" src=\"../../../assets/images/Reload-1.3s-78px.svg\" *ngIf=\"loading\">\r\n\r\n  <div class=\"row mt-2\" *ngIf=\"!loading\">\r\n    <div class=\"col-12 mx-auto\">\r\n      <div class=\"row\">\r\n        <div class=\"col-6\">\r\n          <h3>Articles</h3>\r\n        </div>\r\n        <div class=\"col-6\">\r\n          <button class=\"new-btn float-right\" (click)=\"onNewArticle()\">Create New Article</button>\r\n        </div>\r\n      </div>\r\n      <hr>\r\n      <div class=\"table-responsive\" *ngIf=\"articles.length > 0; else empty_articles\">\r\n        <table class=\"table table-sm\">\r\n        <thead>\r\n          <tr>\r\n            <th>ID</th>\r\n            <th>Title</th>\r\n            <th>Edit</th>\r\n            <th>Delete</th>\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <tr class=\"article\" *ngFor=\"let article of articles, let i = index\">\r\n            <td>{{ i+1 }}</td>\r\n            <td>\r\n              <a class=\"title\" [routerLink]=\"article._id\" skipLocationChange>{{article.title}} </a>\r\n            </td>\r\n            <td>\r\n              <button type=\"button\" [routerLink]=\"[article._id, 'edit']\" class=\"btn-edit float-left\" skipLocationChange>Edit</button>\r\n            </td>\r\n            <td>\r\n              <button type=\"button\" class=\"btn-delete\" (click)=\"deleteArticle(article._id)\">Delete</button>\r\n            </td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n      </div>\r\n    <ng-template #empty_articles>\r\n      <h5 class=\"pl-3\">No Articles Available..</h5>\r\n    </ng-template>\r\n  </div>\r\n</div>"

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_httpPost_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/httpPost.service */ "./src/app/services/httpPost.service.ts");




var AdminArticleComponent = /** @class */ (function () {
    function AdminArticleComponent(httpPostService, router, route) {
        this.httpPostService = httpPostService;
        this.router = router;
        this.route = route;
        this.articles = [];
        this.loading = true;
    }
    AdminArticleComponent.prototype.ngOnInit = function () {
        var _this = this;
        var data = { api: "getArticles", data: {} };
        this.httpPostService.httpPost(data).subscribe(function (val) {
            _this.articles = val;
            _this.loading = false;
        }, function (error) {
        });
    };
    AdminArticleComponent.prototype.deleteArticle = function (_id) {
        var _this = this;
        var deleteConfirm = confirm("do you really want to Delete Article??");
        if (deleteConfirm) {
            this.loading = true;
            var data = { api: "deleteArticle", data: { _id: _id } };
            this.httpPostService.httpPost(data).subscribe(function (val) {
                _this.loading = false;
            }, function (error) {
                _this.loading = false;
            });
        }
    };
    AdminArticleComponent.prototype.onNewArticle = function () {
        this.loading = true;
        this.router.navigate(['new'], { relativeTo: this.route, skipLocationChange: true });
    };
    AdminArticleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admin-article',
            template: __webpack_require__(/*! ./admin-article.component.html */ "./src/app/admin/admin-article/admin-article.component.html"),
            styles: [__webpack_require__(/*! ./admin-article.component.css */ "./src/app/admin/admin-article/admin-article.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_httpPost_service__WEBPACK_IMPORTED_MODULE_3__["HttpPostService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
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

module.exports = "  <img class=\"loading\" src=\"../../../assets/images/Reload-1.3s-78px.svg\" *ngIf=\"loading\">\r\n\r\n  <div class=\"row mt-2\" *ngIf=\"!loading\">\r\n    <div class=\"col-10 mx-auto\">\r\n      <h4 class=\"text-center mb-3\">Edit Article</h4>\r\n      <form class=\"add_title\" (submit)=\"editArticle()\" [formGroup]=\"form\">\r\n        <div class=\"form-group\">\r\n           <label for=\"title\">Title : </label>\r\n            <input class=\"title\" type=\"text\" name=\"title\" id=\"title\" formControlName=\"title\" placeholder=\"Title\">\r\n          <span *ngIf=\"!form.get('title').valid && form.get('title').touched\">*Please enter Title</span>\r\n        </div>\r\n            \r\n        <div class=\"form-group\">\r\n          <label for=\"body\">Description : </label>\r\n          <textarea class=\"body\" name=\"body\" id=\"body\" rows=\"8\" formControlName=\"body\" placeholder=\"Description\"></textarea>\r\n          <span *ngIf=\"!form.get('body').valid && form.get('body').touched\">*Please enter Article Description</span>\r\n        </div>\r\n        \r\n        <div class=\"form-group\">\r\n          <label for=\"phone\">Select Article Image : </label>\r\n            <input type=\"file\" id=\"image\" name=\"image\" formControlName=\"image\" (change)=\"onImagePicked($event)\">\r\n          <span *ngIf=\"!form.get('image').valid\">*Please Select Image File</span>\r\n\r\n        </div>\r\n\r\n        <div class=\"row mt-1\" *ngIf=\"formError\">\r\n          <span>*Please Fill All Article Fields</span>\r\n        </div>\r\n          \r\n        <hr>\r\n        <button type=\"submit\" class=\"btn-edit\">Save</button>\r\n        <button type=\"button\" class=\"btn-cancel float-right\" (click)=\"cancel()\">Cancel</button>\r\n      </form>\r\n    </div>\r\n  </div>"

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _validators_form_validator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../validators/form.validator */ "./src/app/validators/form.validator.ts");
/* harmony import */ var _services_httpPost_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/httpPost.service */ "./src/app/services/httpPost.service.ts");






var AdminEditArticleComponent = /** @class */ (function () {
    function AdminEditArticleComponent(httpPostService, formValidator, router, route) {
        this.httpPostService = httpPostService;
        this.formValidator = formValidator;
        this.router = router;
        this.route = route;
        this.loading = true;
        this.imgExt = ['jpg', 'png'];
        this.formError = false;
    }
    AdminEditArticleComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
            }),
            body: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
            }),
            image: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, {
                validators: [this.formValidator.imageValidate.bind(this)]
            })
        });
        this.route.params
            .subscribe(function (params) {
            var _id = params['id'];
            var data = { api: "getArticle", data: { _id: _id } };
            _this.httpPostService.httpPost(data).subscribe(function (val) {
                _this.article = val[0];
                _this.image = _this.article.image;
                _this.form.setValue({
                    title: _this.article.title,
                    body: _this.article.body,
                    image: null
                });
                _this.loading = false;
            }, function (error) {
            });
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
        var _this = this;
        if (this.form.invalid) {
            this.formError = true;
        }
        if (this.form.valid) {
            this.loading = true;
            this.formError = false;
            var editedArticle = {
                _id: this.article._id,
                title: this.form.value.title,
                body: this.form.value.body,
                image: this.image
            };
            var data = { api: "editArticle", data: editedArticle };
            this.httpPostService.httpPost(data).subscribe(function (val) {
                _this.cancel();
            }, function (error) {
                _this.loading = false;
            });
        }
    };
    AdminEditArticleComponent.prototype.cancel = function () {
        this.loading = true;
        this.router.navigate(['/admin', 'article', this.article._id], { relativeTo: this.route, skipLocationChange: true });
    };
    AdminEditArticleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admin-edit-article',
            template: __webpack_require__(/*! ./admin-edit-article.component.html */ "./src/app/admin/admin-article/admin-edit-article/admin-edit-article.component.html"),
            styles: [__webpack_require__(/*! ./admin-edit-article.component.css */ "./src/app/admin/admin-article/admin-edit-article/admin-edit-article.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_httpPost_service__WEBPACK_IMPORTED_MODULE_5__["HttpPostService"],
            _validators_form_validator__WEBPACK_IMPORTED_MODULE_4__["FormValidator"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
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

module.exports = "<img class=\"loading\" src=\"../../../assets/images/Reload-1.3s-78px.svg\" *ngIf=\"loading\">\r\n\r\n<div class=\"row mt-2\" *ngIf=\"!loading\">\r\n  <div class=\"col-10 mx-auto\">\r\n\r\n    <div class=\"article p-3\">\r\n\r\n      <div class=\"row\">\r\n        <div class=\"col-12\">\r\n          <button type=\"button\" class=\"btn-close float-right\" (click)=\"cancel()\">X</button>\r\n          <h3>{{article.title}}</h3>\r\n        </div>\r\n      </div>\r\n\r\n      <hr>\r\n\r\n      <div class=\"row\">\r\n        <div class=\"col-md-4 col-sm-12\">\r\n          <div class=\"image\">\r\n            <img [src]=\"article.image\" [alt]=\"article.title\" width=\"100%\">\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-8 col-sm-12\">\r\n          <p>{{article.body}}</p>    \r\n        </div>\r\n      </div>\r\n\r\n      <hr>\r\n      <div class=\"row\">\r\n        <div class=\"col-11 mx-auto\">\r\n          <button type=\"button\" class=\"btn-edit ml-3\" (click)= \"edit()\">Edit</button>\r\n          <button type=\"button\" class=\"btn-delete mr-3 float-right\" (click)=\"delete()\">Delete</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_httpPost_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/httpPost.service */ "./src/app/services/httpPost.service.ts");




var AdminShowArticleComponent = /** @class */ (function () {
    function AdminShowArticleComponent(httpPostService, router, route) {
        this.httpPostService = httpPostService;
        this.router = router;
        this.route = route;
        this.loading = true;
    }
    AdminShowArticleComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .subscribe(function (params) {
            var _id = params['id'];
            var data = { api: "getArticle", data: { _id: _id } };
            _this.httpPostService.httpPost(data).subscribe(function (val) {
                _this.article = val[0];
                _this.loading = false;
            }, function (error) {
            });
        });
    };
    AdminShowArticleComponent.prototype.edit = function () {
        this.loading = true;
        this.router.navigate(['edit'], { relativeTo: this.route, skipLocationChange: true });
    };
    AdminShowArticleComponent.prototype.delete = function () {
        var _this = this;
        var dltConfirm = confirm("do you really want to delete??");
        if (dltConfirm) {
            this.loading = true;
            var data = { api: "deleteArticle", data: { _id: this.article._id } };
            this.httpPostService.httpPost(data).subscribe(function (val) {
                _this.cancel();
            }, function (error) {
                _this.loading = false;
            });
        }
    };
    AdminShowArticleComponent.prototype.cancel = function () {
        this.loading = true;
        this.router.navigate(['/admin', 'article'], { relativeTo: this.route, skipLocationChange: true });
    };
    AdminShowArticleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admin-show-article',
            template: __webpack_require__(/*! ./admin-show-article.component.html */ "./src/app/admin/admin-article/admin-show-article/admin-show-article.component.html"),
            styles: [__webpack_require__(/*! ./admin-show-article.component.css */ "./src/app/admin/admin-article/admin-show-article/admin-show-article.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_httpPost_service__WEBPACK_IMPORTED_MODULE_3__["HttpPostService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], AdminShowArticleComponent);
    return AdminShowArticleComponent;
}());



/***/ }),

/***/ "./src/app/admin/admin-attendance/admin-attendance.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/admin/admin-attendance/admin-attendance.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\r\n    margin: 0;\r\n}\r\n\r\nh3 {\r\n    font-size: 150%;\r\n}\r\n\r\nhr {\r\n    border: 1px solid #e67e22;\r\n    margin: 5px 0;\r\n}\r\n\r\ninput .search {\r\n    width: 60%;\r\n    font-size: 80%;\r\n    padding: 1px 3px;\r\n    border-top-left-radius: 5px;\r\n    border-bottom-left-radius: 5px;\r\n    transition: background-color 0.2s;\r\n}\r\n\r\ninput:focus, select:focus, input:hover {\r\n    background-color: rgba(255, 255, 255, 0.75);\r\n    outline: none;\r\n}\r\n\r\n.btn-search {\r\n    outline: none;\r\n    padding: 1px 5px;\r\n    background-color: #e67e22;\r\n    border: 1px solid #e67e22;\r\n    color: #fff;\r\n    border-top-right-radius: 5px;\r\n    border-bottom-right-radius: 5px;\r\n    transition: background-color 0.2s, color 0.2s;\r\n\r\n}\r\n\r\n.btn-search:hover {\r\n    background-color: #e67e22;\r\n    color: #fff;\r\n}\r\n\r\n.student {\r\n    text-decoration: none;\r\n    color: #000;\r\n    -webkit-text-decoration-color: transparent;\r\n            text-decoration-color: transparent;\r\n    transition: -webkit-text-decoration 0.2s, -webkit-text-decoration-color 0.2s;\r\n    transition: text-decoration 0.2s, text-decoration-color 0.2s;\r\n    transition: text-decoration 0.2s, text-decoration-color 0.2s, -webkit-text-decoration 0.2s, -webkit-text-decoration-color 0.2s;\r\n}\r\n\r\n.student:hover{\r\n    color: #000;\r\n    text-decoration: underline;\r\n    -webkit-text-decoration-color: #e67e22;\r\n            text-decoration-color: #e67e22;\r\n}\r\n\r\nselect {\r\n    padding: 5px 3px;\r\n    border-radius: 5px;\r\n}\r\n\r\nselect.ng-invalid.ng-touched{\r\n  border: 1px solid #e67e22;\r\n}\r\n\r\n.attendance-selector input {\r\n    display: none!important;\r\n}\r\n\r\n.attendance-selector input[type=checkbox] + label {\r\n    display: inline-block;\r\n    font-size: 70%;\r\n    border: 1px solid #e67e22;\r\n    border-radius: 50%;\r\n    background: #fff;\r\n    height: 35px;\r\n    width: 35px;\r\n    padding: 2px;\r\n    margin: 2px;\r\n    line-height: 30px;\r\n    text-align: center;\r\n    cursor: pointer;\r\n    transition: background 0.2s, color 0.2s;\r\n}\r\n\r\n.attendance-selector input[type=checkbox]:checked + label {\r\n    background: #e67e22;\r\n    color: #fff;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vYWRtaW4tYXR0ZW5kYW5jZS9hZG1pbi1hdHRlbmRhbmNlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxTQUFTO0FBQ2I7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsY0FBYztJQUNkLGdCQUFnQjtJQUNoQiwyQkFBMkI7SUFDM0IsOEJBQThCO0lBQzlCLGlDQUFpQztBQUNyQzs7QUFHQTtJQUNJLDJDQUEyQztJQUMzQyxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGdCQUFnQjtJQUNoQix5QkFBeUI7SUFDekIseUJBQXlCO0lBQ3pCLFdBQVc7SUFDWCw0QkFBNEI7SUFDNUIsK0JBQStCO0lBQy9CLDZDQUE2Qzs7QUFFakQ7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsV0FBVztBQUNmOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLFdBQVc7SUFDWCwwQ0FBa0M7WUFBbEMsa0NBQWtDO0lBQ2xDLDRFQUE0RDtJQUE1RCw0REFBNEQ7SUFBNUQsOEhBQTREO0FBQ2hFOztBQUVBO0lBQ0ksV0FBVztJQUNYLDBCQUEwQjtJQUMxQixzQ0FBOEI7WUFBOUIsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0Qjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtJQUNJLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixjQUFjO0lBQ2QseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLFdBQVc7SUFDWCxZQUFZO0lBQ1osV0FBVztJQUNYLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLHVDQUF1QztBQUMzQzs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixXQUFXO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC9hZG1pbi9hZG1pbi1hdHRlbmRhbmNlL2FkbWluLWF0dGVuZGFuY2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIioge1xyXG4gICAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG5oMyB7XHJcbiAgICBmb250LXNpemU6IDE1MCU7XHJcbn1cclxuXHJcbmhyIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlNjdlMjI7XHJcbiAgICBtYXJnaW46IDVweCAwO1xyXG59XHJcblxyXG5pbnB1dCAuc2VhcmNoIHtcclxuICAgIHdpZHRoOiA2MCU7XHJcbiAgICBmb250LXNpemU6IDgwJTtcclxuICAgIHBhZGRpbmc6IDFweCAzcHg7XHJcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA1cHg7XHJcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA1cHg7XHJcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMnM7XHJcbn1cclxuXHJcblxyXG5pbnB1dDpmb2N1cywgc2VsZWN0OmZvY3VzLCBpbnB1dDpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNzUpO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxufVxyXG5cclxuLmJ0bi1zZWFyY2gge1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIHBhZGRpbmc6IDFweCA1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTY3ZTIyO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2U2N2UyMjtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDVweDtcclxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA1cHg7XHJcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMnMsIGNvbG9yIDAuMnM7XHJcblxyXG59XHJcblxyXG4uYnRuLXNlYXJjaDpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTY3ZTIyO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbi5zdHVkZW50IHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIHRyYW5zaXRpb246IHRleHQtZGVjb3JhdGlvbiAwLjJzLCB0ZXh0LWRlY29yYXRpb24tY29sb3IgMC4ycztcclxufVxyXG5cclxuLnN0dWRlbnQ6aG92ZXJ7XHJcbiAgICBjb2xvcjogIzAwMDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uLWNvbG9yOiAjZTY3ZTIyO1xyXG59XHJcblxyXG5zZWxlY3Qge1xyXG4gICAgcGFkZGluZzogNXB4IDNweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxufVxyXG5cclxuc2VsZWN0Lm5nLWludmFsaWQubmctdG91Y2hlZHtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZTY3ZTIyO1xyXG59XHJcblxyXG4uYXR0ZW5kYW5jZS1zZWxlY3RvciBpbnB1dCB7XHJcbiAgICBkaXNwbGF5OiBub25lIWltcG9ydGFudDtcclxufVxyXG5cclxuLmF0dGVuZGFuY2Utc2VsZWN0b3IgaW5wdXRbdHlwZT1jaGVja2JveF0gKyBsYWJlbCB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBmb250LXNpemU6IDcwJTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlNjdlMjI7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgaGVpZ2h0OiAzNXB4O1xyXG4gICAgd2lkdGg6IDM1cHg7XHJcbiAgICBwYWRkaW5nOiAycHg7XHJcbiAgICBtYXJnaW46IDJweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjJzLCBjb2xvciAwLjJzO1xyXG59XHJcbiAgXHJcbi5hdHRlbmRhbmNlLXNlbGVjdG9yIGlucHV0W3R5cGU9Y2hlY2tib3hdOmNoZWNrZWQgKyBsYWJlbCB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZTY3ZTIyO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/admin/admin-attendance/admin-attendance.component.html":
/*!************************************************************************!*\
  !*** ./src/app/admin/admin-attendance/admin-attendance.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<img class=\"loading\" src=\"../../../assets/images/Reload-1.3s-78px.svg\" *ngIf=\"loading\">\n\n<div class=\"row mt-2\" *ngIf=\"!loading\">\n  <div class=\"col-12 mx-auto\">\n    <div class=\"row\">\n      <div class=\"col-md-6 col-sm-12\">\n        <h3>Attendance</h3>\n      </div>\n    </div>\n    <hr>\n    <form (submit)=\"addAttendance()\" [formGroup]=\"form\">\n      <div class=\"row\">\n        <div class=\"col-md-4 col-sm-12\">\n          <select class=\"branch\" type=\"text\" name=\"branch\" id=\"branch\" formControlName=\"branch\" (change)=\"onSelectBranch()\">\n            <option value=\"\">Select Branch</option>\n            <option *ngFor=\"let branch of branches\" [value]=\"branch._id\">{{branch.branch}}</option>\n          </select>\n        </div>\n        <div class=\"col-md-4 col-sm-12\">\n          <select class=\"batchName\" type=\"text\" name=\"batchName\" id=\"batchName\" formControlName=\"batch\" (change)=\"onSelectBatchName()\">\n            <option value=\"\">Select Batch Name</option>\n            <ng-container *ngFor=\"let batch of batches\">\n              <option [value]=\"batch.batchName\" *ngIf=\"batch.batchType === weekType\">{{batch.batchName}}</option>\n            </ng-container>\n          </select>\n        </div>\n        <div class=\"col-md-4 col-sm-12\">\n          <select class=\"batchType\" type=\"text\" name=\"batchType\" id=\"batchType\" formControlName=\"weekType\" (change)=\"onSelectBatchType()\">\n            <option value=\"weekDays\">Week Day</option>\n            <option value=\"weekEnds\">Week End</option>\n        </select>\n        </div>\n      </div>\n      <br>\n      <div class=\"row\">\n        <div class=\"col-md-6 col-sm-12\">\n          <div class=\"form-group m-1\">\n            <label for=\"date\">Select Date : </label>\n            <input class=\"date\" type=\"date\" name=\"date\" id=\"date\" formControlName=\"date\">\n          </div>\n        </div>\n        <div class=\"col-md-6 col-sm-12\">\n          <br>\n          <button type=\"submit\" class=\"btn-submit\">Submit</button>\n        </div>\n      </div>\n    </form>\n    <br>\n    <div class=\"row\" *ngIf=\"students.length > 0; else empty_students\">\n      <div class=\"table-responsive\">\n        <table class=\"table table-sm table-hover\">\n          <thead>\n            <tr>\n              <th>ID</th>\n              <th>Student</th>\n              <th>Present</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr class=\"student-tr\" *ngFor=\"let student of students, let i = index\">\n              <td>{{ i+1 }}</td>\n              <td>\n                  {{ student.name }}\n              </td>\n              <td>\n                <div class=\"attendance-selector\">\n                    <input type=\"checkbox\" [id]=\"student._id\" class=\"attendance\" (change)=\"markAttendance($event, student._id, i)\">\n                    <label [for]=\"student._id\">{{attendance[i]}}</label>\n                </div>\n              </td>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n    </div>\n    <ng-template #empty_students>\n      <h5 class=\"pl-3\">{{noStudent}}</h5>\n    </ng-template>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/admin/admin-attendance/admin-attendance.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/admin/admin-attendance/admin-attendance.component.ts ***!
  \**********************************************************************/
/*! exports provided: AdminAttendanceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminAttendanceComponent", function() { return AdminAttendanceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_httpPost_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/httpPost.service */ "./src/app/services/httpPost.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");





var AdminAttendanceComponent = /** @class */ (function () {
    function AdminAttendanceComponent(httpPostService, router, route) {
        this.httpPostService = httpPostService;
        this.router = router;
        this.route = route;
        this.weekType = "weekDays";
        this.loading = true;
        this.allStudents = [];
        this.students = [];
        this.attendance = [];
        this.present = [];
        this.absent = [];
        this.noStudent = 'Please Select Branch';
        this.branches = [];
        this.branch = '';
        this.batches = [];
        this.batch = '';
    }
    AdminAttendanceComponent.prototype.ngOnInit = function () {
        var _this = this;
        var date = new Date();
        this.date = date.getFullYear() + "-" + this.zeroAppend(date.getMonth() + 1) + "-" + this.zeroAppend(date.getDate());
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            branch: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]("", {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
            }),
            batch: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]("", {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
            }),
            weekType: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.weekType, {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
            }),
            date: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.date, {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
            })
        });
        var branchData = { api: "getBranches", data: {} };
        this.httpPostService.httpPost(branchData).subscribe(function (val) {
            _this.branches = val;
            if (_this.branches.length > 0) {
                var studentData = { api: "getStudents", data: {} };
                _this.httpPostService.httpPost(studentData).subscribe(function (val) {
                    _this.allStudents = val;
                    _this.loading = false;
                }, function (error) {
                });
            }
        }, function (error) {
        });
    };
    AdminAttendanceComponent.prototype.zeroAppend = function (n) {
        if (n < 10) {
            return ("0" + n).toString();
        }
        return n.toString();
    };
    AdminAttendanceComponent.prototype.onSelectBranch = function () {
        var id = this.form.value.branch;
        if (id !== '') {
            this.branch = id;
            this.batches = this.branches.find(function (branch) { return (branch._id === id); }).batch;
            this.noStudent = 'Please Select ' + this.weekType + ' Batch';
        }
    };
    AdminAttendanceComponent.prototype.onSelectBatchName = function () {
        var batch = this.form.value.batch;
        if (batch !== '') {
            this.batch = batch;
            this.searchStudent();
        }
    };
    AdminAttendanceComponent.prototype.onSelectBatchType = function () {
        var weekType = this.form.value.weekType;
        if (this.batch !== '') {
            this.weekType = weekType;
            this.searchStudent();
        }
    };
    AdminAttendanceComponent.prototype.searchStudent = function () {
        var _this = this;
        this.loading = true;
        var students = [];
        this.allStudents.forEach(function (student) {
            if ((student.branch === _this.branch) && (student.batchName === _this.batch) && (student.batch === _this.weekType)) {
                students.push(student);
            }
        });
        if (students.length > 0) {
            this.students = students;
            students.forEach(function (student) {
                _this.absent.push(student._id);
                _this.attendance.push("A");
            });
        }
        else {
            this.noStudent = "No Students Found";
            this.students = [];
        }
        this.loading = false;
    };
    AdminAttendanceComponent.prototype.addAttendance = function () {
        var _this = this;
        if (this.form.valid) {
            this.loading = true;
            console.log(this.form.value, this.present, this.absent);
            var data = { api: "saveAttendance", data: {} };
            this.httpPostService.httpPost(data).subscribe(function (val) {
                _this.loading = false;
            }, function (error) {
                _this.loading = false;
            });
        }
    };
    AdminAttendanceComponent.prototype.markAttendance = function (event, student, index) {
        if (event.target.checked) {
            var i = this.absent.findIndex(function (absentStudent) { return absentStudent === student; });
            if (i !== undefined) {
                this.absent.splice(i, 1);
                this.present.push(student);
                this.attendance[index] = "P";
            }
        }
        else {
            var i = this.present.findIndex(function (presentStudent) { return presentStudent === student; });
            if (i !== undefined) {
                this.present.splice(i, 1);
                this.absent.push(student);
                this.attendance[index] = "A";
            }
        }
    };
    AdminAttendanceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admin-attendance',
            template: __webpack_require__(/*! ./admin-attendance.component.html */ "./src/app/admin/admin-attendance/admin-attendance.component.html"),
            styles: [__webpack_require__(/*! ./admin-attendance.component.css */ "./src/app/admin/admin-attendance/admin-attendance.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_httpPost_service__WEBPACK_IMPORTED_MODULE_2__["HttpPostService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], AdminAttendanceComponent);
    return AdminAttendanceComponent;
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

module.exports = "<img class=\"loading\" src=\"../../../assets/images/Reload-1.3s-78px.svg\" *ngIf=\"loading\">\n\n<div class=\"row mt-2\" *ngIf=\"!loading\">\n  <div class=\"col-lg-8 col-md-8 col-sm-12 col-xs-12 col-12 mx-auto\">\n    <h4 class=\"text-center mb-3\">Add New Branch</h4>\n    <form class=\"\" (submit)=\"addAddress()\" [formGroup]=\"form\">\n\n      <div class=\"row\">\n\n        <div class=\"col-md-6 col-sm-12 \">\n          <div class=\"form-group\">\n            <label for=\"city\">City : </label>\n            <input class=\"city\" type=\"text\" name=\"city\" id=\"city\" formControlName=\"city\" placeholder=\"City\">\n            <span *ngIf=\"!form.get('city').valid && form.get('city').touched\">*Please enter City</span>\n          </div>\n        </div>\n\n        <div class=\"col-md-6 col-sm-12 \">\n          <div class=\"form-group\">\n            <label for=\"branch\">Branch Name : </label>\n            <input class=\"branch\" type=\"text\" name=\"branch\" id=\"branch\" formControlName=\"branch\" placeholder=\"Branch\">\n            <span *ngIf=\"!form.get('branch').valid && form.get('branch').touched\">*Please enter Branch</span>\n          </div>\n        </div>\n\n      </div>\n      \n      <div class=\"row\">\n          <div class=\"col-12\">\n            <div class=\"form-group \">\n              <label for=\"address\">Address : </label>\n              <textarea class=\"address\" name=\"address\" id=\"address\" rows=\"3\" formControlName=\"address\" placeholder=\"Address\"></textarea>\n              <span *ngIf=\"!form.get('address').valid && form.get('address').touched\">*Please enter Address</span>\n            </div>\n          </div>\n        </div>\n\n      <div class=\"row\">\n\n        <div class=\"col-md-6 col-sm-12 \">\n          <div class=\"form-group\">\n            <label for=\"email\">Email : </label>\n            <input class=\"email\" type=\"email\" name=\"email\" id=\"email\" formControlName=\"email\" placeholder=\"example@email.com\">\n            <span *ngIf=\"!form.get('email').valid && form.get('email').touched\">*Please enter valid Email</span>\n          </div>\n        </div>\n\n        <div class=\"col-md-6 col-sm-12 \">\n          <div class=\"form-group\">\n            <label for=\"phone\">Phone : </label>\n            <input class=\"phone\" type=\"text\" pattern=\"\\d*\" name=\"phone\" id=\"phone\" maxlength=\"10\" minlength=\"10\" formControlName=\"phone\" placeholder=\"9876543210\">\n            <span *ngIf=\"!form.get('phone').valid && form.get('phone').touched\">*Please enter valid phone number</span>\n          </div>\n        </div>\n\n      </div>\n\n      <div class=\"row\">\n          <div class=\"col-12\">\n            <div class=\"form-group \">\n              <label for=\"descripton\">Descripton : </label>\n              <textarea class=\"descripton\" name=\"descripton\" id=\"descripton\" rows=\"5\" formControlName=\"descripton\" placeholder=\"Descripton\"></textarea>\n              <span *ngIf=\"!form.get('descripton').valid && form.get('descripton').touched\">*Please enter Descripton</span>\n            </div>\n          </div>\n        \n      </div>\n\n      <div class=\"row\">\n        <div class=\"col-12\">\n          <div class=\"form-group \">\n            <label for=\"image\">Select Branch Images : </label>\n            <input type=\"file\" id=\"image\" name=\"image\" formControlName=\"image\" (change)=\"onImagePicked($event)\" multiple>\n            <span *ngIf=\"!form.get('image').valid && form.get('image').touched\">*Please Select Valid Image Files</span>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"row\">\n        <div class=\"col-12\">\n          <div class=\"form-group\">\n            <label for=\"batch\">Add Batches : </label>\n            <div class=\"batches-border\" id=\"batch\">\n              <form (submit)=\"addBatch()\" [formGroup]=\"batchForm\">\n                <div class=\"row\">\n                  <div class=\"col-md-4 col-sm-12 p-0\">\n                    <div class=\"form-group m-1\">\n                      <label for=\"week\">Week Type : </label>\n                      <select class=\"week\" name=\"week\" id=\"week\" formControlName=\"week\" (change)=\"scheduleChange()\">\n                        <option value=\"weekDays\" selected>Week Day</option>\n                        <option value=\"weekEnds\">Week End</option>\n                      </select>\n                      <span *ngIf=\"!batchForm.get('week').valid && batchForm.get('week').touched\">*Please Select Valid Week Type</span>\n                    </div>\n                  </div>\n                  <div class=\"col-md-8 col-sm-12 p-0\">\n                    <div class=\"form-group m-1\">\n                      <label>Select Days : </label>\n                      <div class=\"weekDays-selector batches-border\">\n                        <div formArrayName=\"weekDays\">\n                          <label *ngFor=\"let day of batchForm.get('weekDays').controls; let i = index\">\n                            <input type=\"checkbox\" [id]=\"week[i]\" class=\"weekday\" [formControlName]=\"i\" (change)=\"weekDay($event, i)\">\n                            <label [for]=\"week[i]\">{{week[i]}}</label>\n                          </label>\n                        </div>\n                      </div>\n                      <span *ngIf=\"!batchForm.get('weekDays').valid && weekdaysTouched\">*Please Select Week Days</span>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"row\">\n                  <div class=\"col-md-6 col-sm-12 p-0\">\n                    <div class=\"form-group m-1\">\n                      <label for=\"batchName\">Batch Name : </label>\n                      <input class=\"batchName\" type=\"text\" name=\"batchName\" id=\"batchName\" formControlName=\"batchName\" placeholder=\"Batch Name\">\n                      <span *ngIf=\"!batchForm.get('batchName').valid && batchForm.get('batchName').touched\">*Please Enter Batch Name</span>\n                    </div>  \n                  </div>\n                  <div class=\"col-md-6 col-sm-12 p-0\">\n                    <div class=\"form-group m-1\">\n                      <label for=\"fees\">Fees : </label>\n                      <input class=\"fees\" type=\"fees\" name=\"fees\" id=\"fees\" formControlName=\"fees\" placeholder=\"Fees\">\n                      <span *ngIf=\"!batchForm.get('fees').valid && batchForm.get('fees').touched\">*Please Enter Fees</span>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"row\">\n                  <div class=\"col-md-6 col-sm-12 p-0\">\n                    <div class=\"form-group m-1\">\n                      <label for=\"start_timming\">Time : </label>\n                      <div class=\"row\">\n                          <div class=\"col-5 p-0\">\n                            <input type=\"text\" name=\"start_timming\" id=\"start_timming\" formControlName=\"start_timming\" placeholder=\"From\">\n                          </div>\n                          <div class=\"col-2 text-center\">\n                            <p>-</p>\n                          </div>\n                          <div class=\"col-5 p-0\">\t\t\t\t\t\n                            <input type=\"text\" name=\"end_timming\" id=\"end_timming\" formControlName=\"end_timming\" placeholder=\"To\">\n                          </div>\n                        </div> \n                      <span *ngIf=\"(!batchForm.get('start_timming').valid && batchForm.get('start_timming').touched) || (!batchForm.get('end_timming').valid && batchForm.get('end_timming').touched)\">*Please Enter Timming</span>\n                    </div>\n                  </div>\n                  <div class=\"col-md-6 col-sm-12\">\n                    <br>\n                    <button type=\"submit\" class=\"btn-add\">Add</button>            \n                  </div>\n                </div>\n              </form>\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"row\" *ngIf=\"isWeekType(weekType)\">\n        <div class=\"col-12\">\n          <label for=\"batches\">Batches : </label>\n          <div class=\"table-responsive batches-border\" id=\"batches\">\n            <table class=\"table table-sm\">\n              <thead class=\"text-center\">\n                <th>Batch</th>\n                <th>Timming</th>\n                <th>Fees</th>\n                <th>Days</th>\n                <th>Delete</th>\n              </thead>\n              <tbody>\n                <ng-container *ngFor=\"let batch of batches; let i = index\">\n                  <tr class=\"p-1 text-center\" *ngIf=\"batch.batchType === weekType\">\n                    <td class=\"text-left\">{{batch.batchName}}</td>\n                    <td>{{batch.time}}</td>\n                    <td>{{batch.fees}}</td>\n                    <td>{{batch.days}}</td>\n                    <td>\n                      <button type=\"button\" class=\"btn-delete\" (click)=\"deleteBatch(i)\">Delete</button>\n                    </td>\n                  </tr>\n                </ng-container>\n              </tbody>\n            </table>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"row\" *ngIf=\"formError\">\n        <div class=\"col-12\">\n          <span>{{formError}}</span>\n        </div>\n      </div>\n\n      <hr>\n      <div class=\"row\">\n          <div class=\"col-12\">\n            <button type=\"submit\" class=\"btn-add\">Save</button>\n            <button type=\"button\" class=\"btn-cancel float-right\" (click)=\"cancel()\">Cancel</button>\n          </div>\n        </div>\n    </form>\n  </div>\n\n</div>"

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _validators_form_validator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../validators/form.validator */ "./src/app/validators/form.validator.ts");
/* harmony import */ var _services_httpPost_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/httpPost.service */ "./src/app/services/httpPost.service.ts");






var AdminAddBranchComponent = /** @class */ (function () {
    function AdminAddBranchComponent(httpPostService, formValidator, router, route) {
        this.httpPostService = httpPostService;
        this.formValidator = formValidator;
        this.router = router;
        this.route = route;
        this.loading = true;
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
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            city: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
            }),
            branch: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
            }),
            address: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
            }),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email]
            }),
            phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
            }),
            descripton: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
            }),
            image: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, {
                validators: [this.formValidator.imageValidate.bind(this)]
            })
        });
        this.batchForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            week: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.weekType, {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
            }),
            batchName: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
            }),
            fees: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
            }),
            start_timming: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
            }),
            end_timming: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
            }),
            weekDays: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormArray"](this.week.map(function () { return new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null); }), {
                validators: [this.formValidator.daysValidator.bind(this)]
            })
        });
        this.loading = false;
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
            this.weekdaysTouched = false;
        }
    };
    AdminAddBranchComponent.prototype.deleteBatch = function (i) {
        this.batches.splice(i, 1);
    };
    AdminAddBranchComponent.prototype.addAddress = function () {
        var _this = this;
        if (this.form.invalid) {
            return this.formError = "*Please Fill All Fields of Branch";
        }
        if (this.batches.length === 0) {
            return this.formError = "*Please Add Batches";
        }
        if (this.form.valid) {
            this.loading = true;
            this.formError = null;
            var branch = {
                city: this.form.value.city,
                branch: this.form.value.branch,
                address: this.form.value.address,
                email: this.form.value.email,
                phone: this.form.value.phone,
                description: this.form.value.descripton,
                images: this.images,
                batch: this.batches,
                status: "activated"
            };
            var data = { api: "addBranch", data: branch };
            this.httpPostService.httpPost(data).subscribe(function (val) {
                _this.form.reset();
                _this.cancel();
            }, function (error) {
                _this.loading = false;
            });
        }
    };
    AdminAddBranchComponent.prototype.cancel = function () {
        this.loading = true;
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
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_httpPost_service__WEBPACK_IMPORTED_MODULE_5__["HttpPostService"],
            _validators_form_validator__WEBPACK_IMPORTED_MODULE_4__["FormValidator"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
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

module.exports = "<img class=\"loading\" src=\"../../../assets/images/Reload-1.3s-78px.svg\" *ngIf=\"loading\">\n\n<div class=\"row mt-2\" *ngIf=\"!loading\">\n  <div class=\"col-12 mx-auto\">\n    <div class=\"row\">\n      <div class=\"col-md-6 col-sm-12\">\n        <h3>Branches</h3>\n      </div>\n      <div class=\"col-md-6 col-sm-12\">\n        <button class=\"new-btn float-right\" (click)=\"onNewBranch()\">Create New Branch</button>\n      </div>\n    </div>\n    <hr>\n    <div class=\"table-responsive\" *ngIf=\"branches.length > 0; else empty_branches\">\n      <table class=\"table table-sm\">\n        <thead>\n          <tr>\n            <th>ID</th>\n            <th>Branch</th>\n            <th>Contact</th>\n            <th>Status</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr class=\"branch\" *ngFor=\"let branch of branches, let i = index\" routerLinkActive=\"active\">\n            <td>{{ i+1 }}</td>\n            <td>\n              <a [routerLink]=\"branch._id\" class=\"branch-name\" skipLocationChange>\n                {{ branch.branch }}\n              </a>\n            </td>\n            <td>\n              +91 {{ branch.phone }}\n            </td>\n            <td>\n              {{ branch.status | uppercase }}\n            </td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n    \n    <ng-template #empty_branches>\n      <h5 class=\"pl-3\">No Branches Available..</h5>\n    </ng-template>\n  </div>\n</div>"

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_httpPost_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/httpPost.service */ "./src/app/services/httpPost.service.ts");




var AdminBranchComponent = /** @class */ (function () {
    function AdminBranchComponent(httpPostService, router, route) {
        this.httpPostService = httpPostService;
        this.router = router;
        this.route = route;
        this.branches = [];
        this.loading = true;
    }
    AdminBranchComponent.prototype.ngOnInit = function () {
        var _this = this;
        var data = { api: "getBranches", data: {} };
        this.httpPostService.httpPost(data).subscribe(function (val) {
            _this.branches = val;
            _this.loading = false;
        }, function (error) {
        });
        ;
    };
    AdminBranchComponent.prototype.onNewBranch = function () {
        this.loading = true;
        this.router.navigate(['new'], { relativeTo: this.route, skipLocationChange: true });
    };
    AdminBranchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admin-branch',
            template: __webpack_require__(/*! ./admin-branch.component.html */ "./src/app/admin/admin-branch/admin-branch.component.html"),
            styles: [__webpack_require__(/*! ./admin-branch.component.css */ "./src/app/admin/admin-branch/admin-branch.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_httpPost_service__WEBPACK_IMPORTED_MODULE_3__["HttpPostService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
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

module.exports = "  <img class=\"loading\" src=\"../../../assets/images/Reload-1.3s-78px.svg\" *ngIf=\"loading\">\n\n  <div class=\"row mt-2\" *ngIf=\"!loading\">\n    <div class=\"col-lg-8 col-md-8 col-sm-12 col-xs-12 col-12 mx-auto\">\n      <h4 class=\"text-center mb-3\">Edit Branch - {{branchData.branch}}</h4>\n      <form class=\"\" (submit)=\"editAddress()\" [formGroup]=\"form\">\n  \n        <div class=\"row\">\n  \n          <div class=\"col-md-6 col-sm-12\">\n            <div class=\"form-group\">\n              <label for=\"city\">City : </label>\n              <input class=\"city\" type=\"text\" name=\"city\" id=\"city\" formControlName=\"city\" placeholder=\"City\">\n              <span *ngIf=\"!form.get('city').valid && form.get('city').touched\">*Please enter City</span>\n            </div>\n          </div>\n  \n          <div class=\"col-md-6 col-sm-12\">\n            <div class=\"form-group\">\n              <label for=\"branch\">Branch Name : </label>\n              <input class=\"branch\" type=\"text\" name=\"branch\" id=\"branch\" formControlName=\"branch\" placeholder=\"Branch\">\n              <span *ngIf=\"!form.get('branch').valid && form.get('branch').touched\">*Please enter Branch</span>\n            </div>\n          </div>\n  \n        </div>\n\n        <div class=\"row\">\n          <div class=\"col-12\"> \n            <div class=\"form-group\">\n              <label for=\"address\">Address : </label>\n              <textarea class=\"address\" name=\"address\" id=\"address\" rows=\"3\" formControlName=\"address\" placeholder=\"Address\"></textarea>\n              <span *ngIf=\"!form.get('address').valid && form.get('address').touched\">*Please enter Address</span>\n            </div>\n          </div>\n        </div>\n        \n  \n        <div class=\"row\">\n  \n          <div class=\"col-md-6 col-sm-12\">\n            <div class=\"form-group\">\n              <label for=\"email\">Email : </label>\n              <input class=\"email\" type=\"email\" name=\"email\" id=\"email\" formControlName=\"email\" placeholder=\"example@email.com\">\n              <span *ngIf=\"!form.get('email').valid && form.get('email').touched\">*Please enter valid Email</span>\n            </div>\n          </div>\n  \n          <div class=\"col-md-6 col-sm-12\">\n            <div class=\"form-group\">\n              <label for=\"phone\">Phone : </label>\n              <input class=\"phone\" type=\"text\" pattern=\"\\d*\" name=\"phone\" id=\"phone\" maxlength=\"10\" minlength=\"10\" formControlName=\"phone\" placeholder=\"9876543210\">\n              <span *ngIf=\"!form.get('phone').valid && form.get('phone').touched\">*Please enter valid phone number</span>\n            </div>\n          </div>\n  \n        </div>\n\n        <div class=\"row\">\n          <div class=\"col-12\">  \n            <div class=\"form-group\">\n              <label for=\"description\">Description : </label>\n              <textarea class=\"description\" name=\"description\" id=\"description\" rows=\"5\" formControlName=\"description\" placeholder=\"Description\"></textarea>\n              <span *ngIf=\"!form.get('description').valid && form.get('description').touched\">*Please enter Description</span>\n            </div>\n          </div>\n        </div>\n\n        <div class=\"row\">\n          <div class=\"col-12\"> \n            <div class=\"form-group\">\n              <label for=\"image\">Select Branch Images : </label>\n              <input type=\"file\" id=\"image\" name=\"image\" formControlName=\"image\" (change)=\"onImagePicked($event)\" multiple>\n              <span *ngIf=\"!form.get('image').valid && form.get('image').touched\">*Please Select Valid Image File</span>\n            </div>\n          </div>\n        </div>\n  \n        <div class=\"row\">\n          <div class=\"col-12\">\n            <div class=\"form-group\">\n              <label for=\"batch\">Add Batches : </label>\n              <div class=\"batches-border\" id=\"batch\">\n                <form (submit)=\"addBatch()\" [formGroup]=\"batchForm\">\n                  <div class=\"row\">\n                    <div class=\"col-md-4 col-sm-12 p-0\">\n                      <div class=\"form-group m-1\">\n                        <label for=\"week\">Week Type : </label>\n                        <select class=\"week\" name=\"week\" id=\"week\" formControlName=\"week\" (change)=\"scheduleChange()\">\n                          <option value=\"weekDays\" selected>Week Day</option>\n                          <option value=\"weekEnds\">Week End</option>\n                        </select>\n                        <span *ngIf=\"!batchForm.get('week').valid && batchForm.get('week').touched\">*Please Select Valid Week Type</span>\n                      </div>\n                    </div>\n                    <div class=\"col-md-8 col-sm-12 p-0\">\n                      <div class=\"form-group m-1\">\n                        <label>Select Days : </label>\n                        <div class=\"weekDays-selector batches-border\">\n                          <div formArrayName=\"weekDays\">\n                            <label *ngFor=\"let day of batchForm.get('weekDays').controls; let i = index\">\n                              <input type=\"checkbox\" [id]=\"week[i]\" class=\"weekday\" [formControlName]=\"i\" (change)=\"weekDay($event, i)\">\n                              <label [for]=\"week[i]\">{{week[i]}}</label>\n                            </label>\n                          </div>\n                        </div>\n                        <span *ngIf=\"!batchForm.get('weekDays').valid && weekdaysTouched\">*Please Select Week Days</span>\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"row\">\n                    <div class=\"col-md-6 col-sm-12 p-0\">\n                      <div class=\"form-group m-1\">\n                        <label for=\"batchName\">Batch Name : </label>\n                        <input class=\"batchName\" type=\"text\" name=\"batchName\" id=\"batchName\" formControlName=\"batchName\" placeholder=\"Batch Name\">\n                        <span *ngIf=\"!batchForm.get('batchName').valid && batchForm.get('batchName').touched\">*Please Enter Batch Name</span>\n                      </div>  \n                    </div>\n                    <div class=\"col-md-6 col-sm-12 p-0\">\n                      <div class=\"form-group m-1\">\n                        <label for=\"fees\">Fees : </label>\n                        <input class=\"fees\" type=\"fees\" name=\"fees\" id=\"fees\" formControlName=\"fees\" placeholder=\"Fees\">\n                        <span *ngIf=\"!batchForm.get('fees').valid && batchForm.get('fees').touched\">*Please Enter Fees</span>\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"row\">\n                    <div class=\"col-md-6 col-sm-12 p-0\">\n                      <div class=\"form-group m-1\">\n                        <label for=\"start_timming\">Time : </label>\n                        <div class=\"row\">\n                            <div class=\"col-5 p-0\">\n                              <input type=\"text\" name=\"start_timming\" id=\"start_timming\" formControlName=\"start_timming\" placeholder=\"From\">\n                            </div>\n                            <div class=\"col-2 text-center\">\n                              <p>-</p>\n                            </div>\n                            <div class=\"col-5 p-0\">\t\t\t\t\t\n                              <input type=\"text\" name=\"end_timming\" id=\"end_timming\" formControlName=\"end_timming\" placeholder=\"To\">\n                            </div>\n                          </div> \n                        <span *ngIf=\"(!batchForm.get('start_timming').valid && batchForm.get('start_timming').touched) || (!batchForm.get('end_timming').valid && batchForm.get('end_timming').touched)\">*Please Enter Timming</span>\n                      </div>\n                    </div>\n                    <div class=\"col-md-6 col-sm-12\">\n                      <br>\n                      <button type=\"submit\" class=\"btn-add\">Add</button>            \n                    </div>\n                  </div>\n                </form>\n              </div>\n            </div>\n          </div>\n        </div>\n  \n        <div class=\"row\" *ngIf=\"isWeekType(weekType)\">\n          <div class=\"col-12\">\n            <label for=\"batches\">Batches : </label>\n            <div class=\"table-responsive batches-border\" id=\"batches\">\n              <table class=\"table table-sm\">\n                <thead class=\"text-center\">\n                  <th>Batch</th>\n                  <th>Timming</th>\n                  <th>Fees</th>\n                  <th>Days</th>\n                  <th>Delete</th>\n                </thead>\n                <tbody>\n                  <ng-container *ngFor=\"let batch of batches; let i = index\">\n                    <tr class=\"p-1 text-center\" *ngIf=\"batch.batchType === weekType\">\n                      <td class=\"text-left\">{{batch.batchName}}</td>\n                      <td>{{batch.time}}</td>\n                      <td>{{batch.fees}}</td>\n                      <td>{{batch.days}}</td>\n                      <td>\n                        <button type=\"button\" class=\"btn-delete\" (click)=\"deleteBatch(i)\">Delete</button>\n                      </td>\n                    </tr>\n                  </ng-container>\n                </tbody>\n              </table>\n            </div>\n          </div>\n        </div>\n          \n        <hr>\n        \n        <div class=\"row\">\n          <div class=\"col-12\">\n            <button type=\"submit\" class=\"btn-save\">Save</button>\n      \n            <button type=\"button\" class=\"btn-cancel float-right\" (click)=\"cancel()\">Cancel</button>\n          </div>\n        </div>\n  \n      </form>\n    </div>\n</div>"

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _validators_form_validator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../validators/form.validator */ "./src/app/validators/form.validator.ts");
/* harmony import */ var _services_httpPost_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/httpPost.service */ "./src/app/services/httpPost.service.ts");






var AdminEditBranchComponent = /** @class */ (function () {
    function AdminEditBranchComponent(httpPostService, formValidator, router, route) {
        this.httpPostService = httpPostService;
        this.formValidator = formValidator;
        this.router = router;
        this.route = route;
        this.loading = true;
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
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            city: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
            }),
            branch: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
            }),
            address: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
            }),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email]
            }),
            phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
            }),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
            }),
            image: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, {
                validators: [this.formValidator.imageValidate.bind(this)]
            })
        });
        this.batchForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            week: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.weekType, {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
            }),
            batchName: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
            }),
            fees: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
            }),
            start_timming: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
            }),
            end_timming: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
            }),
            weekDays: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormArray"](this.week.map(function () { return new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null); }), {
                validators: [this.formValidator.daysValidator.bind(this)]
            })
        });
        this.route.params
            .subscribe(function (params) {
            var _id = params['id'];
            var data = { api: "getBranch", data: { _id: _id } };
            _this.httpPostService.httpPost(data).subscribe(function (val) {
                _this.branchData = val;
                _this.images = _this.branchData.images;
                _this.batches = _this.branchData.batch;
                _this.form.patchValue({
                    city: _this.branchData.city,
                    branch: _this.branchData.branch,
                    address: _this.branchData.address,
                    email: _this.branchData.email,
                    phone: _this.branchData.phone,
                    description: _this.branchData.description,
                    image: null
                });
                _this.loading = false;
            }, function (error) {
            });
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
            this.weekdaysTouched = false;
        }
    };
    AdminEditBranchComponent.prototype.deleteBatch = function (i) {
        this.batches.splice(i, 1);
    };
    AdminEditBranchComponent.prototype.editAddress = function () {
        var _this = this;
        if (this.form.invalid) {
            return this.formError = "*Please Fill All Fields of Branch";
        }
        if (this.batches.length === 0) {
            return this.formError = "*Please Add Batches";
        }
        if (this.form.valid) {
            this.loading = true;
            this.formError = null;
            var editedBranch = {
                _id: this.branchData._id,
                city: this.form.value.city,
                branch: this.form.value.branch,
                address: this.form.value.address,
                email: this.form.value.email,
                phone: this.form.value.phone,
                description: this.form.value.description,
                images: this.images,
                batch: this.batches,
                status: this.branchData.status
            };
            var data = { api: "editBranch", data: editedBranch };
            this.httpPostService.httpPost(data).subscribe(function (val) {
                _this.form.reset();
                _this.cancel();
            }, function (error) {
                _this.loading = false;
            });
        }
    };
    AdminEditBranchComponent.prototype.cancel = function () {
        this.loading = true;
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
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_httpPost_service__WEBPACK_IMPORTED_MODULE_5__["HttpPostService"],
            _validators_form_validator__WEBPACK_IMPORTED_MODULE_4__["FormValidator"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
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

module.exports = "  <img class=\"loading\" src=\"../../../assets/images/Reload-1.3s-78px.svg\" *ngIf=\"loading\">\n\n  <div class=\"row mt-2\" *ngIf=\"!loading\">\n    <div class=\"col-10 mx-auto\">\n      <div class=\"branch\">\n        <div class=\"row\">\n          <div class=\"col-12\">\n            <button class=\"btn-close float-right\" (click)=\"cancel()\">&#215;</button>\n            <h3 class=\"text-center\"><strong>{{branch.branch}}</strong> - {{branch.city}}</h3>\n          </div>\n        </div>\n\n        <hr>\n\n        <div class=\"row\">\n          <div class=\"col-12\">\n            <div class=\"table-responsive\">\n              <table class=\"table table-sm\">\n                <tbody>\n                  <tr>\n                    <td>\n                      <strong>Description : </strong>\n                    </td>\n                    <td>\n                      <p>{{branch.description}}</p>\n                    </td>\n                  </tr>\n                  <tr>\n                    <td>\n                      <strong>Address : </strong>\n                    </td>\n                    <td>\n                      <p>{{branch.address}}</p>\n                    </td>\n                  </tr>\n                  <tr>\n                    <td>\n                      <strong><em>e</em>-mail : </strong>\n                    </td>\n                    <td>\n                      <p><a href=\"mailto:{{branch.email}}\">{{branch.email}}</a></p>   \n                    </td>\n                  </tr>\n                  <tr>\n                    <td>\n                      <strong>Phone : </strong>\n                    </td>\n                    <td>\n                      <p>+91 {{branch.phone}}</p>\n                    </td>\n                  </tr>\n                  <tr>\n                    <td colspan=\"2\">\n                      <strong>Schedule : </strong>\n                    </td>\n                  </tr>\n                  <tr *ngIf=\"isWeekDays()\">\n                    <td>\n                    </td>\n                    <td>\n                      <div class=\"row\">\n                        <strong>Week Day : </strong>\n                      </div>\n                      <div class=\"row table-responsive p-1\">\n                        <table class=\"table table-sm\">\n                          <thead class=\"text-center\">\n                            <th>Batch</th>\n                            <th>Timming</th>\n                            <th>Fees</th>\n                            <th>Days</th>\n                          </thead>\n                          <tbody>\n                            <ng-container *ngFor=\"let batch of batches\">\n                              <tr class=\"p-1 text-center\" *ngIf=\"batch.batchType === 'weekDays'\">\n                                <td class=\"text-left\">{{batch.batchName}}</td>\n                                <td>{{batch.time}}</td>\n                                <td>{{batch.fees}}</td>\n                                <td>{{batch.days}}</td>\n                              </tr>\n                            </ng-container>\n                          </tbody>\n                        </table>\n                      </div>\n                    </td>\n                  </tr>\n                  <tr *ngIf=\"isWeekEnds()\">\n                    <td>\n                    </td>\n                    <td>\n                      <div class=\"row\">\n                        <strong>Week End : </strong>\n                      </div>\n                      <div class=\"row table-responsive p-1\">\n                        <table class=\"table table-sm\">\n                          <thead class=\"text-center\">\n                            <th>Batch</th>\n                            <th>Timming</th>\n                            <th>Fees</th>\n                            <th>Days</th>\n                          </thead>\n                          <tbody>\n                            <ng-container *ngFor=\"let batch of batches\">\n                              <tr class=\"p-1 text-center\" *ngIf=\"batch.batchType === 'weekEnds'\">\n                                <td class=\"text-left\">{{batch.batchName}}</td>\n                                <td>{{batch.time}}</td>\n                                <td>{{batch.fees}}</td>\n                                <td>{{batch.days}}</td>\n                              </tr>\n                            </ng-container>\n                          </tbody>\n                        </table>\n                      </div>\n                    </td>\n                  </tr>\n                  <tr>\n                    <td>\n                      <strong>Status : </strong>\n                    </td>\n                    <td>\n                      <p>{{branch.status | uppercase}}</p>              \n                    </td>\n                  </tr>\n                </tbody>\n              </table>\n            </div>\n          </div>\n        </div>\n        \n        <hr>\n        \n        <div class=\".row\">\n          <div class=\"col-12\">\n            <button class=\"btn-edit\" (click)=\"editAddress()\">Edit</button>\n            <button class=\"btn-deactivate float-right\" (click)=\"changeStatus(branch._id, 'deactivated')\" *ngIf=\"branch.status === 'activated'\">Deactivate</button>\n            <button class=\"btn-activate float-right\" (click)=\"changeStatus(branch._id, 'activated')\" *ngIf=\"branch.status === 'deactivated'\">Activate</button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>"

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_httpPost_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/httpPost.service */ "./src/app/services/httpPost.service.ts");




var AdminShowBranchComponent = /** @class */ (function () {
    function AdminShowBranchComponent(httpPostService, router, route) {
        this.httpPostService = httpPostService;
        this.router = router;
        this.route = route;
        this.batches = [];
        this.loading = true;
        this.week = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
        this.days = [true, false, false, false, false, false, false];
    }
    AdminShowBranchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .subscribe(function (params) {
            var _id = params['id'];
            var data = { api: "getBranch", data: { _id: _id } };
            _this.httpPostService.httpPost(data).subscribe(function (val) {
                _this.branch = val[0];
                _this.batches = _this.branch.batch;
                _this.loading = false;
            }, function (error) {
            });
        });
    };
    AdminShowBranchComponent.prototype.changeStatus = function (_id, status) {
        var _this = this;
        var statusConfirm = true;
        if (status === "deactivated") {
            statusConfirm = confirm("do you really want to Deactivate Branch??");
        }
        if (statusConfirm) {
            this.loading = true;
            var data = { api: "changeBranchStatus", data: { _id: _id, status: status } };
            this.httpPostService.httpPost(data).subscribe(function (val) {
                _this.cancel();
            }, function (error) {
                _this.loading = false;
            });
        }
    };
    AdminShowBranchComponent.prototype.editAddress = function () {
        this.loading = true;
        this.router.navigate(['edit'], { relativeTo: this.route, skipLocationChange: true });
    };
    AdminShowBranchComponent.prototype.cancel = function () {
        this.loading = true;
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
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_httpPost_service__WEBPACK_IMPORTED_MODULE_3__["HttpPostService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], AdminShowBranchComponent);
    return AdminShowBranchComponent;
}());



/***/ }),

/***/ "./src/app/admin/admin-dashboard/admin-dashboard.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/admin/admin-dashboard/admin-dashboard.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluLWRhc2hib2FyZC9hZG1pbi1kYXNoYm9hcmQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/admin/admin-dashboard/admin-dashboard.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/admin/admin-dashboard/admin-dashboard.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-12\">\n    <div class=\"row\">\n      <h3>ADMIN DASHBOARD</h3>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-4 col-sm-10 mx-auto\">\n        <div class=\"card m-3 shadow\">\n          <div class=\"card-header\">Branches</div>\n          <div class=\"card-body\">Basic card</div>            \n        </div>\n      </div>\n      <div class=\"col-md-4 col-sm-10 mx-auto\">\n        <div class=\"card m-3 shadow\">\n          <div class=\"card-header\">Faculties</div>\n          <div class=\"card-body\">Basic card</div>\n        </div>\n      </div>\n      <div class=\"col-md-4 col-sm-10 mx-auto\">\n        <div class=\"card m-3 shadow\">\n          <div class=\"card-header\">Students</div>\n          <div class=\"card-body\">Basic card</div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/admin/admin-dashboard/admin-dashboard.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/admin/admin-dashboard/admin-dashboard.component.ts ***!
  \********************************************************************/
/*! exports provided: AdminDashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminDashboardComponent", function() { return AdminDashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AdminDashboardComponent = /** @class */ (function () {
    function AdminDashboardComponent() {
    }
    AdminDashboardComponent.prototype.ngOnInit = function () {
    };
    AdminDashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admin-dashboard',
            template: __webpack_require__(/*! ./admin-dashboard.component.html */ "./src/app/admin/admin-dashboard/admin-dashboard.component.html"),
            styles: [__webpack_require__(/*! ./admin-dashboard.component.css */ "./src/app/admin/admin-dashboard/admin-dashboard.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AdminDashboardComponent);
    return AdminDashboardComponent;
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

module.exports = "<img class=\"loading\" src=\"../../../assets/images/Reload-1.3s-78px.svg\" *ngIf=\"loading\">\r\n\r\n<div class=\"row mt-2\" *ngIf=\"!loading\">\r\n  <div class=\"col-12 mx-auto\">\r\n    <h3>Enquiries..</h3>\r\n    <hr>\r\n    <div class=\"table-responsive\" *ngIf=\"enquiries.length > 0; else empty_enquiries\">\r\n      <table class=\"table table-sm\">\r\n        <thead>\r\n          <tr>\r\n            <th>ID</th>\r\n            <th>Name</th>\r\n            <th>Email</th>\r\n            <th>Message</th>\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <tr class=\"enquiry\" *ngFor=\"let enquiry of enquiries, let i = index\" [routerLink]=\"enquiry._id\" routerLinkActive=\"active\" skipLocationChange>\r\n            <td>{{ i+1 }}</td>\r\n            <td>{{ enquiry.name }}</td>\r\n            <td class=\"email\">{{ enquiry.email }}</td>\r\n            <td>{{ limitData(enquiry.message) }}</td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n    </div>\r\n    <ng-template #empty_enquiries>\r\n      <h5 class=\"pl-3\">No Enquiries Available..</h5>\r\n    </ng-template>\r\n  </div>\r\n</div>"

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
/* harmony import */ var _services_httpPost_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/httpPost.service */ "./src/app/services/httpPost.service.ts");




var AdminEnquiryComponent = /** @class */ (function () {
    function AdminEnquiryComponent(httpPostService, router, route) {
        this.httpPostService = httpPostService;
        this.router = router;
        this.route = route;
        this.loading = true;
    }
    AdminEnquiryComponent.prototype.ngOnInit = function () {
        var _this = this;
        var data = { api: "getEnquiries", data: {} };
        this.httpPostService.httpPost(data).subscribe(function (val) {
            _this.enquiries = val;
            _this.loading = false;
        }, function (error) {
        });
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
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_httpPost_service__WEBPACK_IMPORTED_MODULE_3__["HttpPostService"],
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

module.exports = "<img class=\"loading\" src=\"../../../assets/images/Reload-1.3s-78px.svg\" *ngIf=\"loading\">\r\n\r\n<div class=\"row mt-2\" *ngIf=\"!loading\">\r\n  <div class=\"col-md-8 col-sm-12 mx-auto\">\r\n    <form class=\"\" (submit)=\"sendReply()\" [formGroup]=\"form\">\r\n      <div class=\"reply-header\">\r\n        <div class=\"reply-to\">\r\n          <p><strong>To : </strong>{{enquiry.email}}</p>\r\n        </div>\r\n        <hr>\r\n        <div class=\"reply-subject form-group\">\r\n          <label for=\"subject\">Subject : </label>\r\n          <input class=\"subject\" type=\"text\" id=\"subject\" name=\"subject\" placeholder=\"Subject\" formControlName=\"subject\">\r\n          <span *ngIf=\"!form.get('subject').valid && form.get('subject').touched\">*Please enter valid Subject</span>\r\n        </div>\r\n      </div>\r\n      <div class=\"reply-body form-group\">\r\n        <label for=\"subject\">Body : </label>\r\n        <textarea class=\"body\" name=\"body\" id=\"body\" rows=\"8\"placeholder=\"Body\" formControlName=\"body\"></textarea>\r\n        <span *ngIf=\"!form.get('body').valid && form.get('body').touched\">*Please enter reply Body</span>\r\n      </div>\r\n      <hr>\r\n      <div class=\"reply-footer\">\r\n        <button class=\"reply-btn\" type=\"submit\">Send</button>\r\n        <button class=\"btn-cancel float-right\" type=\"button\" (click)=\"cancel()\">Cancel</button>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</div>\r\n"

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_httpPost_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/httpPost.service */ "./src/app/services/httpPost.service.ts");





var AdminReplyEnquiryComponent = /** @class */ (function () {
    function AdminReplyEnquiryComponent(httpPostService, router, route) {
        this.httpPostService = httpPostService;
        this.router = router;
        this.route = route;
        this.loading = true;
    }
    AdminReplyEnquiryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            subject: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
            }),
            body: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
            })
        });
        this.route.params
            .subscribe(function (params) {
            _this.id = params['id'];
            _this.httpPostService.httpPost(_this.id).subscribe(function (val) {
                _this.enquiry = val[0];
                _this.loading = false;
            }, function (error) {
            });
        });
    };
    AdminReplyEnquiryComponent.prototype.sendReply = function () {
        var _this = this;
        if (this.form.valid) {
            this.loading = true;
            var reply = { email: this.enquiry.email, subject: this.form.value.subject, body: this.form.value.body };
            var data = { api: "sendEnquiryReply", data: reply };
            this.httpPostService.httpPost(data).subscribe(function (val) {
                _this.form.reset();
                _this.loading = false;
            }, function (error) {
                _this.loading = false;
            });
        }
    };
    AdminReplyEnquiryComponent.prototype.cancel = function () {
        this.loading = true;
        this.router.navigate(['/admin', 'enquiry', this.id], { relativeTo: this.route, skipLocationChange: true });
    };
    AdminReplyEnquiryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admin-reply-enquiry',
            template: __webpack_require__(/*! ./admin-reply-enquiry.component.html */ "./src/app/admin/admin-enquiry/admin-reply-enquiry/admin-reply-enquiry.component.html"),
            styles: [__webpack_require__(/*! ./admin-reply-enquiry.component.css */ "./src/app/admin/admin-enquiry/admin-reply-enquiry/admin-reply-enquiry.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_httpPost_service__WEBPACK_IMPORTED_MODULE_4__["HttpPostService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
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

module.exports = "<img class=\"loading\" src=\"../../../assets/images/Reload-1.3s-78px.svg\" *ngIf=\"loading\">\r\n\r\n<div class=\"row mt-2\" *ngIf=\"!loading\">\r\n  <div class=\"col-md-8 col-sm-12 mx-auto\">\r\n    <div class=\"enquiry\">\r\n        <div class=\"header\">\r\n          <p>\r\n            <strong>{{ enquiry.name }}</strong>\r\n            <span class=\"float-right\">\r\n              <a class=\"reply\" routerLink=\"reply\" skipLocationChange>Reply</a>\r\n            </span>\r\n          </p>\r\n        </div>\r\n        <hr>\r\n        <div class=\"body\">\r\n          <p>\r\n            {{ enquiry.message }}\r\n          </p>\r\n        </div>\r\n        <hr>\r\n        <div class=\"footer\">\r\n          <div class=\"row\">\r\n            <div class=\"col-md-9 col-sm-12\">\r\n              <p>\r\n                <a href=\"replyTo:{{enquiry.email}}\">{{ enquiry.email }}</a>\r\n              </p>\r\n              <p>\r\n                +91 {{ enquiry.phone }}\r\n              </p>\r\n            </div>\r\n            <div class=\"col-md-3 col-sm-12\">\r\n              <button type=\"button\" class=\"btn-cancel float-right\" (click)=\"cancel()\">Cancel</button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n    </div>\r\n  </div>\r\n</div>"

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
/* harmony import */ var _services_httpPost_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/httpPost.service */ "./src/app/services/httpPost.service.ts");




var AdminShowEnquiryComponent = /** @class */ (function () {
    function AdminShowEnquiryComponent(httpPostService, router, route) {
        this.httpPostService = httpPostService;
        this.router = router;
        this.route = route;
        this.loading = true;
    }
    AdminShowEnquiryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .subscribe(function (params) {
            var _id = params['id'];
            var data = { api: "getEnquiry", data: { _id: _id } };
            _this.httpPostService.httpPost(data).subscribe(function (val) {
                _this.enquiry = val[0];
                _this.loading = false;
            }, function (error) {
            });
        });
    };
    AdminShowEnquiryComponent.prototype.cancel = function () {
        this.loading = true;
        this.router.navigate(['/admin', 'enquiry'], { relativeTo: this.route, skipLocationChange: true });
    };
    AdminShowEnquiryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admin-show-enquiry',
            template: __webpack_require__(/*! ./admin-show-enquiry.component.html */ "./src/app/admin/admin-enquiry/admin-show-enquiry/admin-show-enquiry.component.html"),
            styles: [__webpack_require__(/*! ./admin-show-enquiry.component.css */ "./src/app/admin/admin-enquiry/admin-show-enquiry/admin-show-enquiry.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_httpPost_service__WEBPACK_IMPORTED_MODULE_3__["HttpPostService"],
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

module.exports = "  <img class=\"loading\" src=\"../../../assets/images/Reload-1.3s-78px.svg\" *ngIf=\"loading\">\n\n  <div class=\"row mt-2\" *ngIf=\"!loading\">\n    <div class=\"col-md-8 col-sm-10 mx-auto\">\n\n      <h4 class=\"text-center mb-3\">Add New Faculty</h4>\n\n      <form class=\"add_new-faulty\" (submit)=\"addFaculty()\" [formGroup]=\"form\">\n        \n        <div class=\"row\">\n\n          <div class=\"col-md-6 col-sm-12\">\n            <div class=\"form-group\">\n              <label for=\"name\">Name : </label>\n              <input class=\"name\" type=\"text\" name=\"name\" id=\"name\" formControlName=\"name\" placeholder=\"Name\">\n              <span *ngIf=\"!form.get('name').valid && form.get('name').touched\">*Please enter Faculty Name</span>\n            </div>\n          </div>\n\n          <div class=\"col-md-6 col-sm-12\">\n            <div class=\"form-group\">\n              <label for=\"birthDate\">Birth Date : </label>\n              <input class=\"birth-date\" type=\"date\" name=\"birthDate\" id=\"birthDate\" formControlName=\"birthDate\">\n              <span *ngIf=\"!form.get('birthDate').valid && form.get('birthDate').touched\">*Please enter Birth Date</span>\n            </div>\n          </div>\n\n        </div>\n\n        <div class=\"row\">\n\n          <div class=\"col-md-6 col-sm-12\">\n            <div class=\"form-group\">\n              <label for=\"email\">Email : </label>\n              <input class=\"email\" type=\"email\" name=\"email\" id=\"email\" formControlName=\"email\" placeholder=\"example@email.com\">\n              <span *ngIf=\"!form.get('email').valid && form.get('email').touched\">*Please enter valid Email</span>\n            </div>\n          </div>\n          \n          <div class=\"col-md-6 col-sm-12\">\n            <div class=\"form-group\">\n              <label for=\"phone\">Phone : </label>\n              <input class=\"phone\" type=\"text\" pattern=\"\\d*\" name=\"phone\" id=\"phone\" formControlName=\"phone\" placeholder=\"9876543210\">\n              <span *ngIf=\"!form.get('phone').valid && form.get('phone').touched\">*Please enter valid Phone Number</span>\n            </div>\n          </div>\n\n        </div>\n        \n        <div class=\"row\">\n          <div class=\"col-12\">\n            <div class=\"form-group\">\n              <label for=\"description\">Description : </label>\n              <textarea type=\"text\" class=\"description\" name=\"description\" id=\"description\" rows=\"5\" formControlName=\"description\" placeholder=\"Description\"></textarea>\n              <span *ngIf=\"!form.get('description').valid && form.get('description').touched\">*Please enter Faculty Description</span>\n            </div>\n          </div>\n        </div>\n\n        <div class=\"row\">\n          <div class=\"col-12\">\n            <div class=\"form-group\">\n              <label for=\"image\">Select Profile Image : </label>\n              <input type=\"file\" id=\"image\" name=\"image\" formControlName=\"image\" (change)=\"onImagePicked($event)\">\n              <span *ngIf=\"!form.get('image').valid && form.get('image').touched\">*Please Select Image File</span>\n            </div>\n          </div>\n        </div>\n\n        <div class=\"row mt-1\" *ngIf=\"formError\">\n          <div class=\"col-12\">\n            <span>*Please Fill All Faculty Fields</span>\n          </div>\n        </div>\n\n        <hr>\n  \n        <div class=\"row\">\n          <div class=\"col-6\">\n            <button type=\"submit\" class=\"btn-add\">Save</button>\n          </div>\n          <div class=\"col-6\">\n            <button type=\"button\" class=\"btn-cancel float-right\" (click)=\"cancel()\">Cancel</button>\n          </div>\n        </div>\n      </form>\n    </div>\n  </div>\n"

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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _validators_form_validator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../validators/form.validator */ "./src/app/validators/form.validator.ts");
/* harmony import */ var _services_httpPost_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/httpPost.service */ "./src/app/services/httpPost.service.ts");






var AdminAddFacultyComponent = /** @class */ (function () {
    function AdminAddFacultyComponent(httpPostService, formValidator, router, route) {
        this.httpPostService = httpPostService;
        this.formValidator = formValidator;
        this.router = router;
        this.route = route;
        this.loading = true;
        this.formError = false;
        this.imgExt = ['jpg', 'png'];
    }
    AdminAddFacultyComponent.prototype.ngOnInit = function () {
        this.image = "Image";
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
            }),
            birthDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
            }),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]
            }),
            phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(10)]
            }),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
            }),
            image: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, {
                validators: [this.formValidator.imageValidate.bind(this)]
            })
        });
        this.loading = false;
    };
    AdminAddFacultyComponent.prototype.addFaculty = function () {
        var _this = this;
        if (this.form.invalid) {
            this.formError = true;
        }
        if (this.form.valid) {
            this.formError = false;
            this.loading = true;
            var faculty = {
                facultyName: this.form.value.name,
                facultyBirthDate: this.form.value.birthDate,
                facultyDescription: this.form.value.description,
                facultyImage: this.image,
                email: this.form.value.email,
                facultyPhone: this.form.value.phone,
                facultyStatus: "activated"
            };
            var data = { api: "addFaculty", data: faculty };
            this.httpPostService.httpPost(data).subscribe(function (val) {
                _this.form.reset();
                _this.cancel();
            }, function (error) {
                console.log(error);
                _this.loading = false;
            });
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
        this.loading = true;
        this.router.navigate(['/admin', 'faculty'], { relativeTo: this.route, skipLocationChange: true });
    };
    AdminAddFacultyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admin-add-faculty',
            template: __webpack_require__(/*! ./admin-add-faculty.component.html */ "./src/app/admin/admin-faculty/admin-add-faculty/admin-add-faculty.component.html"),
            styles: [__webpack_require__(/*! ./admin-add-faculty.component.css */ "./src/app/admin/admin-faculty/admin-add-faculty/admin-add-faculty.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_httpPost_service__WEBPACK_IMPORTED_MODULE_5__["HttpPostService"],
            _validators_form_validator__WEBPACK_IMPORTED_MODULE_4__["FormValidator"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
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

module.exports = "  <img class=\"loading\" src=\"../../../assets/images/Reload-1.3s-78px.svg\" *ngIf=\"loading\">\n\n  <div class=\"row mt-2\" *ngIf=\"!loading\">\n    <div class=\"col-md-8 col-sm-10 mx-auto\">\n\n      <div *ngIf=\"faculty !== null\">\n        <h4 class=\"text-center mb-3\">Edit Faculty <strong>{{faculty.facultyName}}</strong></h4>    \n        <form class=\"add_new-faulty\" (submit)=\"editFaculty()\" [formGroup]=\"form\">\n          \n          <div class=\"row\">\n    \n            <div class=\"col-md-6 col-sm-12\">\n              <div class=\"form-group\">\n                <label for=\"name\">Name : </label>\n                <input class=\"name\" type=\"text\" name=\"name\" id=\"name\" formControlName=\"name\" placeholder=\"Name\">\n                <span *ngIf=\"!form.get('name').valid && form.get('name').touched\">*Please enter Faculty Name</span>\n              </div>\n            </div>\n    \n            <div class=\"col-md-6 col-sm-12\">\n              <div class=\"form-group\">\n                <label for=\"birthDate\">Birth Date : </label>\n                <input class=\"birth-date\" type=\"date\" name=\"birthDate\" id=\"birthDate\" formControlName=\"birthDate\">\n                <span *ngIf=\"!form.get('birthDate').valid && form.get('birthDate').touched\">*Please enter Birth Date</span>\n              </div>\n            </div>\n    \n          </div>\n    \n          <div class=\"row\">\n    \n            <div class=\"col-md-6 col-sm-12\">\n              <div class=\"form-group\">\n                <label for=\"email\">Email : </label>\n                <input class=\"email\" type=\"email\" name=\"email\" id=\"email\" formControlName=\"email\" placeholder=\"example@email.com\">\n                <span *ngIf=\"!form.get('email').valid && form.get('email').touched\">*Please enter valid Email</span>\n              </div>\n            </div>\n            \n            <div class=\"col-md-6 col-sm-12\">\n              <div class=\"form-group\">\n                <label for=\"phone\">Phone : </label>\n                <input class=\"phone\" type=\"text\" pattern=\"\\d*\" name=\"phone\" id=\"phone\" formControlName=\"phone\" placeholder=\"9876543210\">\n                <span *ngIf=\"!form.get('phone').valid && form.get('phone').touched\">*Please enter valid Phone Number</span>\n              </div>\n            </div>\n    \n          </div>\n          \n          <div class=\"row\">\n            <div class=\"col-12\">\n              <div class=\"form-group\">\n                <label for=\"description\">Description : </label>\n                <textarea type=\"text\" class=\"description\" name=\"description\" id=\"description\" rows=\"5\" formControlName=\"description\" placeholder=\"Description\"></textarea>\n                <span *ngIf=\"!form.get('description').valid && form.get('description').touched\">*Please enter Faculty Description</span>\n              </div>\n            </div>\n          </div>\n    \n          <div class=\"row\">\n            <div class=\"col-12\">\n              <div class=\"form-group\">\n                <label for=\"image\">Select Profile Image : </label>\n                <input type=\"file\" id=\"image\" name=\"image\" formControlName=\"image\" (change)=\"onImagePicked($event)\">\n                <span *ngIf=\"!form.get('image').valid && form.get('image').touched\">*Please Select Image File</span>\n              </div>\n            </div>\n          </div>\n    \n          <div class=\"row mt-1\" *ngIf=\"formError\">\n            <div class=\"col-12\">\n              <span>*Please Fill All Article Fields</span>\n            </div>\n          </div>\n            \n          <hr>\n    \n          <div class=\"row\">\n            <div class=\"col-6\">\n              <button type=\"submit\" class=\"btn-edit\">Save</button>\n            </div>\n            <div class=\"col-6\">\n              <button type=\"button\" class=\"btn-cancel float-right\" (click)=\"cancel()\">Cancel</button>\n            </div>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>"

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _validators_form_validator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../validators/form.validator */ "./src/app/validators/form.validator.ts");
/* harmony import */ var _services_httpPost_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/httpPost.service */ "./src/app/services/httpPost.service.ts");






var AdminEditFacultyComponent = /** @class */ (function () {
    function AdminEditFacultyComponent(httpPostService, formValidator, router, route) {
        this.httpPostService = httpPostService;
        this.formValidator = formValidator;
        this.router = router;
        this.route = route;
        this.faculty = null;
        this.loading = true;
        this.formError = false;
        this.imgExt = ['jpg', 'png'];
    }
    AdminEditFacultyComponent.prototype.ngOnInit = function () {
        var _this = this;
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
        this.route.params
            .subscribe(function (params) {
            var _id = params['id'];
            var data = { api: "getFaculty", data: { _id: _id } };
            _this.httpPostService.httpPost(data).subscribe(function (val) {
                _this.faculty = val[0];
                _this.image = _this.faculty.facultyImage;
                _this.form.setValue({
                    name: _this.faculty.facultyName,
                    birthDate: _this.faculty.facultyBirthDate,
                    email: _this.faculty.email,
                    phone: _this.faculty.facultyPhone,
                    description: _this.faculty.facultyDescription,
                    image: null
                });
                _this.loading = false;
            }, function (error) {
            });
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
        var _this = this;
        if (this.form.invalid) {
            this.formError = true;
        }
        if (this.form.valid) {
            this.formError = false;
            this.loading = true;
            var faculty = {
                _id: this.faculty._id,
                facultyName: this.form.value.name,
                facultyBirthDate: this.form.value.birthDate,
                facultyDescription: this.form.value.description,
                facultyImage: this.image,
                email: this.form.value.email,
                facultyPhone: this.form.value.phone,
                facultyStatus: this.faculty.facultyStatus
            };
            this.loading = true;
            var data = { api: "editFaculty", data: faculty };
            this.httpPostService.httpPost(data).subscribe(function (val) {
                _this.form.reset();
                _this.cancel();
            }, function (error) {
                _this.loading = false;
            });
        }
    };
    AdminEditFacultyComponent.prototype.cancel = function () {
        this.loading = true;
        this.router.navigate(['/admin', 'faculty', this.faculty._id], { relativeTo: this.route, skipLocationChange: true });
    };
    AdminEditFacultyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admin-edit-faculty',
            template: __webpack_require__(/*! ./admin-edit-faculty.component.html */ "./src/app/admin/admin-faculty/admin-edit-faculty/admin-edit-faculty.component.html"),
            styles: [__webpack_require__(/*! ./admin-edit-faculty.component.css */ "./src/app/admin/admin-faculty/admin-edit-faculty/admin-edit-faculty.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_httpPost_service__WEBPACK_IMPORTED_MODULE_5__["HttpPostService"],
            _validators_form_validator__WEBPACK_IMPORTED_MODULE_4__["FormValidator"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
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

module.exports = "  <img class=\"loading\" src=\"../../../assets/images/Reload-1.3s-78px.svg\" *ngIf=\"loading\">\n\n  <div class=\"row mt-2\" *ngIf=\"!loading\">\n    <div class=\"col-12 mx-auto\">\n      <div class=\"row\">\n        <div class=\"col-6\">\n          <h3>Faculty</h3>\n        </div>\n        <div class=\"col-6\">\n          <button class=\"new-btn float-right\" (click)=\"onNewFaculty()\">Add New Faculty</button>\n        </div>\n      </div>\n      <hr>\n\n      <div class=\"table-responsive\" *ngIf=\"faculties.length > 0; else empty_faculties\">\n        <table class=\"table table-sm table-hover\">\n          <thead>\n            <tr>\n              <th>ID</th>\n              <th>Faculty Name</th>\n              <th>Status</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr class=\"faculty\" *ngFor=\"let faculty of faculties, let i = index\" routerLinkActive=\"active\">\n              <td>{{ i+1 }}</td>\n              <td>\n                <img class=\"faculty-image\" [src]=\"faculty.image\" [alt]=\"faculty.name\" width=\"40px\">              \n                &nbsp;\n                <a [routerLink]=\"faculty._id\" class=\"faculty-name\" skipLocationChange>\n                  {{ faculty.name }}\n                </a>\n              </td>\n              <td>\n                {{ faculty.status | uppercase }}\n              </td>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n      <ng-template #empty_faculties>\n        <h5 class=\"pl-3\">No Faculties Available..</h5>\n      </ng-template>\n\n    </div>\n  </div>"

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_httpPost_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/httpPost.service */ "./src/app/services/httpPost.service.ts");




var AdminFacultyComponent = /** @class */ (function () {
    function AdminFacultyComponent(httpPostService, router, route) {
        this.httpPostService = httpPostService;
        this.router = router;
        this.route = route;
        this.faculties = [];
        this.loading = true;
    }
    AdminFacultyComponent.prototype.ngOnInit = function () {
        var _this = this;
        var data = { api: "getFaculties", data: {} };
        this.httpPostService.httpPost(data).subscribe(function (val) {
            _this.faculties = val;
            _this.loading = false;
        }, function (error) {
            // this.router.navigate(["/server-not-found"], {relativeTo:this.route});
        });
    };
    AdminFacultyComponent.prototype.onNewFaculty = function () {
        this.loading = true;
        this.router.navigate(['new'], { relativeTo: this.route, skipLocationChange: true });
    };
    AdminFacultyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admin-faculty',
            template: __webpack_require__(/*! ./admin-faculty.component.html */ "./src/app/admin/admin-faculty/admin-faculty.component.html"),
            styles: [__webpack_require__(/*! ./admin-faculty.component.css */ "./src/app/admin/admin-faculty/admin-faculty.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_httpPost_service__WEBPACK_IMPORTED_MODULE_3__["HttpPostService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
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

module.exports = "  <img class=\"loading\" src=\"../../../assets/images/Reload-1.3s-78px.svg\" *ngIf=\"loading\">\n\n  <div class=\"row mt-2\" *ngIf=\"!loading\">\n    <div class=\"col-10 mx-auto\">\n      <div class=\"faculty\" *ngIf=\"faculty !== null\">\n        <div class=\"row\">\n          <div class=\"col-12\">\n            <button class=\"btn-close float-right\" (click)=\"cancel()\">X</button>\n          </div>\n        </div>\n        <hr>\n        <div class=\"row\">\n          <div class=\"col-md-4 col-sm-10 mx-auto\">\n            <div class=\"faculty-name\">\n              <h4>{{faculty.facultyName}}</h4>\n            </div>\n            <div class=\"faculty-image\">\n              <img [src]=\"faculty.image\" [alt]=\"faculty.name\" width=\"100%\">\n            </div>\n          </div>\n          <div class=\"col-md-8 col-sm-10 mx-auto\">\n            <div class=\"table-responsive\">\n              <table class=\"table table-sm\">\n                <tbody>\n                  <tr>\n                    <td>\n                      <strong>Birth Date : </strong>\n                    </td>\n                    <td>\n                      <p>{{faculty.facultyBirthDate}}</p>\n                    </td>\n                  </tr>\n                  <tr>\n                    <td>\n                      <strong>Description : </strong>\n                    </td>\n                    <td>\n                      <p>{{faculty.facultyDescription}}</p>\n                    </td>\n                  </tr>\n                  <tr>\n                    <td>\n                      <strong><em>E</em>-mail : </strong>\n                    </td>\n                    <td>\n                      <p><a href=\"mailto:{{faculty.email}}\">{{faculty.email}}</a></p>\n                    </td>\n                  </tr>\n                  <tr>\n                    <td>\n                      <strong>Phone : </strong>\n                    </td>\n                    <td>\n                      <p>+91 {{faculty.facultyPhone}}</p>\n                    </td>\n                  </tr>\n                  <tr>\n                    <td>\n                      <strong>Status : </strong>\n                    </td>\n                    <td>\n                      <p>{{faculty.facultyStatus | uppercase}}</p>\n                    </td>\n                  </tr>\n                </tbody>\n              </table>\n            </div>\n          </div>\n        </div>\n        <hr>\n        <div class=\"row\">\n          <div class=\"col-6\">\n            <button routerLink=\"edit\" class=\"btn-edit\" skipLocationChange>Edit</button>\n          </div>\n          <div class=\"col-6\">\n            <button class=\" btn-deactivate float-right pointer\" (click)=\"changeStatus(faculty._id, 'deactivated')\" *ngIf=\"faculty.status === 'activated'\">Deactivate</button>\n            <button class=\"btn-activate float-right pointer\" (click)=\"changeStatus(faculty._id, 'activated')\" *ngIf=\"faculty.status === 'deactivated'\">Activate</button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>"

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_httpPost_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/httpPost.service */ "./src/app/services/httpPost.service.ts");




var AdminShowFacultyComponent = /** @class */ (function () {
    function AdminShowFacultyComponent(httpPostService, route, router) {
        this.httpPostService = httpPostService;
        this.route = route;
        this.router = router;
        this.faculty = null;
        this.loading = true;
    }
    AdminShowFacultyComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.
            subscribe(function (params) {
            var _id = params['id'];
            var data = { api: "getFaculty", data: { _id: _id } };
            _this.httpPostService.httpPost(data).subscribe(function (val) {
                _this.faculty = val[0];
                _this.loading = false;
            }, function (error) {
            });
        });
    };
    AdminShowFacultyComponent.prototype.changeStatus = function (_id, status) {
        var _this = this;
        var statusConfirm = true;
        if (status === "deactivated") {
            statusConfirm = confirm("do you really want to Deactivate Faculty??");
        }
        if (statusConfirm) {
            this.loading = true;
            var data = { api: "changeFacultyStatus", data: { _id: _id, status: status } };
            this.httpPostService.httpPost(data).subscribe(function (val) {
                _this.cancel();
            }, function (error) {
                _this.loading = false;
            });
        }
    };
    AdminShowFacultyComponent.prototype.cancel = function () {
        this.loading = true;
        this.router.navigate(['/admin', 'faculty'], { relativeTo: this.route, skipLocationChange: true });
    };
    AdminShowFacultyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admin-show-faculty',
            template: __webpack_require__(/*! ./admin-show-faculty.component.html */ "./src/app/admin/admin-faculty/admin-show-faculty/admin-show-faculty.component.html"),
            styles: [__webpack_require__(/*! ./admin-show-faculty.component.css */ "./src/app/admin/admin-faculty/admin-show-faculty/admin-show-faculty.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_httpPost_service__WEBPACK_IMPORTED_MODULE_3__["HttpPostService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AdminShowFacultyComponent);
    return AdminShowFacultyComponent;
}());



/***/ }),

/***/ "./src/app/admin/admin-gallary/admin-add-photos/admin-add-photos.component.css":
/*!*************************************************************************************!*\
  !*** ./src/app/admin/admin-gallary/admin-add-photos/admin-add-photos.component.css ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  * {\r\n    margin: 0;\r\n  }\r\n\r\n  h3 {\r\n    font-size: 150%;\r\n  }\r\n\r\n  hr {\r\n    border-top: 2px solid #e67e22;\r\n    margin: 5px 0;\r\n    padding: 0; \r\n  }\r\n\r\n  input[type=\"file\"] {\r\n    visibility: hidden;\r\n  }\r\n\r\n  input.ng-invalid.ng-touched {\r\n    border-color: #ff0000;\r\n  }\r\n\r\n  span {\r\n    font-size: 15px;\r\n    color: #ff0000;\r\n  }\r\n\r\n  .preview-image {\r\n    position: relative;\r\n    width: 100px;\r\n  }\r\n\r\n  .preview-image img{\r\n    width: 100px;\r\n    height: 75px;\r\n    border-radius: 5px;\r\n    border: 1px solid #555;\r\n  }\r\n\r\n  .remove-image {\r\n    display: inline;\r\n    position: absolute;\r\n    top: -10px;\r\n    right: -10px;\r\n    border-radius: 25px;\r\n    padding: 1px 6px 2px 6px;\r\n    text-decoration: none;\r\n    font-size: 15px;\r\n    background-color: #fff;\r\n    border: 2px solid #ff0000;\r\n    cursor: pointer;\r\n    transition: background-color 0.2s;\r\n  }\r\n\r\n  .remove-image:hover {\r\n    background-color: #ff0000;\r\n  }\r\n\r\n  .remove {\r\n    color: #000;\r\n    transition: color 0.2s;\r\n  }\r\n\r\n  .remove:hover {\r\n    color: #fff;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vYWRtaW4tZ2FsbGFyeS9hZG1pbi1hZGQtcGhvdG9zL2FkbWluLWFkZC1waG90b3MuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiRUFBRTtJQUNFLFNBQVM7RUFDWDs7RUFFQTtJQUNFLGVBQWU7RUFDakI7O0VBRUE7SUFDRSw2QkFBNkI7SUFDN0IsYUFBYTtJQUNiLFVBQVU7RUFDWjs7RUFFQTtJQUNFLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLHFCQUFxQjtFQUN2Qjs7RUFFQTtJQUNFLGVBQWU7SUFDZixjQUFjO0VBQ2hCOztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLFlBQVk7RUFDZDs7RUFFQTtJQUNFLFlBQVk7SUFDWixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLHNCQUFzQjtFQUN4Qjs7RUFDQTtJQUNFLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsd0JBQXdCO0lBQ3hCLHFCQUFxQjtJQUNyQixlQUFlO0lBQ2Ysc0JBQXNCO0lBQ3RCLHlCQUF5QjtJQUN6QixlQUFlO0lBQ2YsaUNBQWlDO0VBQ25DOztFQUVBO0lBQ0UseUJBQXlCO0VBQzNCOztFQUVBO0lBQ0UsV0FBVztJQUNYLHNCQUFzQjtFQUN4Qjs7RUFFQTtJQUNFLFdBQVc7RUFDYiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluLWdhbGxhcnkvYWRtaW4tYWRkLXBob3Rvcy9hZG1pbi1hZGQtcGhvdG9zLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIgICoge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gIH1cclxuXHJcbiAgaDMge1xyXG4gICAgZm9udC1zaXplOiAxNTAlO1xyXG4gIH1cclxuXHJcbiAgaHIge1xyXG4gICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkICNlNjdlMjI7XHJcbiAgICBtYXJnaW46IDVweCAwO1xyXG4gICAgcGFkZGluZzogMDsgXHJcbiAgfVxyXG5cclxuICBpbnB1dFt0eXBlPVwiZmlsZVwiXSB7XHJcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgfVxyXG5cclxuICBpbnB1dC5uZy1pbnZhbGlkLm5nLXRvdWNoZWQge1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjZmYwMDAwO1xyXG4gIH1cclxuXHJcbiAgc3BhbiB7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBjb2xvcjogI2ZmMDAwMDtcclxuICB9XHJcblxyXG4gIC5wcmV2aWV3LWltYWdlIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiAxMDBweDtcclxuICB9XHJcblxyXG4gIC5wcmV2aWV3LWltYWdlIGltZ3tcclxuICAgIHdpZHRoOiAxMDBweDtcclxuICAgIGhlaWdodDogNzVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM1NTU7XHJcbiAgfVxyXG4gIC5yZW1vdmUtaW1hZ2Uge1xyXG4gICAgZGlzcGxheTogaW5saW5lO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAtMTBweDtcclxuICAgIHJpZ2h0OiAtMTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbiAgICBwYWRkaW5nOiAxcHggNnB4IDJweCA2cHg7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgI2ZmMDAwMDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycztcclxuICB9XHJcblxyXG4gIC5yZW1vdmUtaW1hZ2U6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmMDAwMDtcclxuICB9XHJcblxyXG4gIC5yZW1vdmUge1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbiAgICB0cmFuc2l0aW9uOiBjb2xvciAwLjJzO1xyXG4gIH1cclxuXHJcbiAgLnJlbW92ZTpob3ZlciB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICB9Il19 */"

/***/ }),

/***/ "./src/app/admin/admin-gallary/admin-add-photos/admin-add-photos.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/admin/admin-gallary/admin-add-photos/admin-add-photos.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<img class=\"loading\" src=\"../../../assets/images/Reload-1.3s-78px.svg\" *ngIf=\"loading\">\n\n<div class=\"row mt-2\" *ngIf=\"!loading\">\n  <div class=\"col-12\">\n    <div class=\"row\">\n      <div class=\"col-6\">\n        <h3>Add Images</h3>\n      </div>\n      <div class=\"col-6\">\n        <button class=\"btn-cancel float-right\" (click)=\"cancel()\">Cancel</button>\n      </div>\n    </div>\n    <hr>\n    <div class=\"row\">\n      <div class=\"col-12\">\n        <form [formGroup]=\"form\" (submit)=\"onSavePost()\">\n          <div class=\"row\">\n            <div class=\"col-md-6 cpl-sm-12\">\n              <div class=\"form-group\">\n                  <label for=\"title\">Enter Title for an Images : </label>\n                  <input type=\"text\" formControlName=\"title\" id=\"title\" placeholder=\"Title\">\n              </div>\n              <span *ngIf=\"form.get('title').invalid && form.get('title').touched\">*Please enter a Title for an Image</span>\n            </div>\n          </div>\n          <div class=\"row\">\n\n            <div class=\"col-md-6 col-sm-12\">\n              <div class=\"form-group\">\n                <label for=\"images\">Pick Images to Upload : </label><br>\n                <input type=\"file\" #filePicker (change)=\"onImagePicked($event)\" multiple>\n                <button class=\"btn-add\" type=\"button\" id=\"images\" (click)=\"filePicker.click()\">Click Here to Pick Image</button>\n              </div>\n              <span *ngIf=\"invalidImage\">*Please Select a Valid Image File</span>\n            </div>\n            \n            <div class=\"col-md-6 col-sm-12\">\n              <button class=\"btn-save float-right\" type=\"submit\">Upload Images</button>\n            </div>\n\n          </div>\n        </form>       \n      </div>\n\n      <hr>\n      \n      <div class=\"row\">\n        <div class=\"col-12\">\n          <div *ngIf=\"imagePreview.length > 0; else noImagePicked\">\n              <h4>Image To Upload : </h4>\n\n              <div class=\"row\">\n                  <span class=\"m-2\" *ngFor=\"let image of imagePreview; let i = index;\">\n                      <div class=\"preview-image\">\n                          <img [src]=\"image\" alt=\"Preview\">\n                          <a class=\"remove-image\"(click)=\"cancelImage(i)\"><i class=\"fa fa-remove remove\"></i></a>\n                      </div>\n                  </span>\n              </div>\n          \n          </div>\n          <ng-template #noImagePicked><p>No Image Picked yet</p></ng-template>\n        </div>\n      </div> \n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/admin/admin-gallary/admin-add-photos/admin-add-photos.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/admin/admin-gallary/admin-add-photos/admin-add-photos.component.ts ***!
  \************************************************************************************/
/*! exports provided: AdminAddPhotosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminAddPhotosComponent", function() { return AdminAddPhotosComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_httpPost_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/httpPost.service */ "./src/app/services/httpPost.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var AdminAddPhotosComponent = /** @class */ (function () {
    function AdminAddPhotosComponent(httpPostService, router, route) {
        this.httpPostService = httpPostService;
        this.router = router;
        this.route = route;
        this.imagePreview = [];
        this.uploadImages = [];
        this.loading = true;
        this.invalidImage = false;
    }
    AdminAddPhotosComponent.prototype.ngOnInit = function () {
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
            })
        });
        this.loading = false;
    };
    AdminAddPhotosComponent.prototype.onImagePicked = function (event) {
        var _this = this;
        var files = event.target.files;
        var imgExt = ["jpg", "png"];
        var ext = null;
        for (var i = 0; i < files.length; i++) {
            ext = files[i].name.substring(files[i].name.lastIndexOf('.') + 1);
            if (!(imgExt.indexOf(ext) != -1)) {
                return this.invalidImage = true;
            }
        }
        this.invalidImage = false;
        var _loop_1 = function (i) {
            this_1.uploadImages.push(files[i]);
            var reader = new FileReader();
            reader.onload = function () {
                _this.imagePreview.push(reader.result);
            };
            reader.readAsDataURL(files[i]);
        };
        var this_1 = this;
        for (var i = 0; i < files.length; i++) {
            _loop_1(i);
        }
        this.form.patchValue({ image: null });
    };
    AdminAddPhotosComponent.prototype.onSavePost = function () {
        var _this = this;
        if (this.form.invalid) {
            return;
        }
        this.loading = true;
        var title = this.form.value.title;
        var imgData = { title: title };
        var postData = new FormData();
        postData.append("title", JSON.stringify(imgData));
        for (var i = 0; i < this.uploadImages.length; i++) {
            postData.append("image", this.uploadImages[i], title + i);
        }
        var data = { api: "addImages", data: postData };
        this.httpPostService.httpImagePost(data.api, postData)
            .subscribe(function (responseData) {
            _this.imagePreview = [];
            _this.uploadImages = [];
            _this.form.reset();
            _this.cancel();
        }, function (error) {
            _this.loading = false;
            console.log(error);
        });
    };
    AdminAddPhotosComponent.prototype.cancelImage = function (index) {
        this.imagePreview.splice(index, 1);
        this.uploadImages.splice(index, 1);
    };
    AdminAddPhotosComponent.prototype.cancel = function () {
        this.loading = true;
        this.router.navigate(['/admin', 'gallery'], { relativeTo: this.route, skipLocationChange: true });
    };
    AdminAddPhotosComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admin-add-photos',
            template: __webpack_require__(/*! ./admin-add-photos.component.html */ "./src/app/admin/admin-gallary/admin-add-photos/admin-add-photos.component.html"),
            styles: [__webpack_require__(/*! ./admin-add-photos.component.css */ "./src/app/admin/admin-gallary/admin-add-photos/admin-add-photos.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_httpPost_service__WEBPACK_IMPORTED_MODULE_3__["HttpPostService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], AdminAddPhotosComponent);
    return AdminAddPhotosComponent;
}());



/***/ }),

/***/ "./src/app/admin/admin-gallary/admin-gallary.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/admin/admin-gallary/admin-gallary.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  * {\r\n    margin: 0;\r\n  }\r\n\r\n  h3 {\r\n    font-size: 150%;\r\n  }\r\n\r\n  hr {\r\n    border-top: 2px solid #e67e22;\r\n    margin: 5px 0;\r\n    padding: 0; \r\n  }\r\n\r\n  .image-container {\r\n    position: relative;\r\n    width: 150px;    \r\n  }\r\n\r\n  .image {\r\n    border-radius: 5px;\r\n    opacity: 1;\r\n    display: block;\r\n    width: 150px;\r\n    height: 100px;\r\n    transition: .5s ease;\r\n    -webkit-backface-visibility: hidden;\r\n            backface-visibility: hidden;\r\n  }\r\n\r\n  .middle {\r\n    transition: .5s ease;\r\n    opacity: 0;\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    -webkit-transform: translate(-50%, -50%);\r\n            transform: translate(-50%, -50%);\r\n    -ms-transform: translate(-50%, -50%);\r\n    text-align: center;\r\n  }\r\n\r\n  .image-container:hover .image {\r\n    opacity: 0.3;\r\n  }\r\n\r\n  .image-container:hover .middle {\r\n    opacity: 1;\r\n  }\r\n\r\n  .delete {\r\n    color: white;\r\n    font-size: 16px;\r\n    padding: 16px 32px;\r\n  }\r\n\r\n  .trash {\r\n    font-size: 25px;\r\n    color: #000;\r\n    cursor: pointer;\r\n    -webkit-transform: scale(1);\r\n            transform: scale(1);\r\n    transition: color 0.2s, -webkit-transform 0.2s;\r\n    transition: transform 0.2s, color 0.2s;\r\n    transition: transform 0.2s, color 0.2s, -webkit-transform 0.2s;\r\n  }\r\n\r\n  .trash:hover {\r\n    -webkit-transform: scale(1.2);\r\n            transform: scale(1.2);\r\n    color: #ff0000;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vYWRtaW4tZ2FsbGFyeS9hZG1pbi1nYWxsYXJ5LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkVBQUU7SUFDRSxTQUFTO0VBQ1g7O0VBRUE7SUFDRSxlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsNkJBQTZCO0lBQzdCLGFBQWE7SUFDYixVQUFVO0VBQ1o7O0VBRUE7SUFDRSxrQkFBa0I7SUFDbEIsWUFBWTtFQUNkOztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixjQUFjO0lBQ2QsWUFBWTtJQUNaLGFBQWE7SUFDYixvQkFBb0I7SUFDcEIsbUNBQTJCO1lBQTNCLDJCQUEyQjtFQUM3Qjs7RUFFQTtJQUNFLG9CQUFvQjtJQUNwQixVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixTQUFTO0lBQ1Qsd0NBQWdDO1lBQWhDLGdDQUFnQztJQUNoQyxvQ0FBb0M7SUFDcEMsa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0UsWUFBWTtFQUNkOztFQUVBO0lBQ0UsVUFBVTtFQUNaOztFQUVBO0lBQ0UsWUFBWTtJQUNaLGVBQWU7SUFDZixrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxlQUFlO0lBQ2YsV0FBVztJQUNYLGVBQWU7SUFDZiwyQkFBbUI7WUFBbkIsbUJBQW1CO0lBQ25CLDhDQUFzQztJQUF0QyxzQ0FBc0M7SUFBdEMsOERBQXNDO0VBQ3hDOztFQUVBO0lBQ0UsNkJBQXFCO1lBQXJCLHFCQUFxQjtJQUNyQixjQUFjO0VBQ2hCIiwiZmlsZSI6InNyYy9hcHAvYWRtaW4vYWRtaW4tZ2FsbGFyeS9hZG1pbi1nYWxsYXJ5LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIgICoge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gIH1cclxuXHJcbiAgaDMge1xyXG4gICAgZm9udC1zaXplOiAxNTAlO1xyXG4gIH1cclxuXHJcbiAgaHIge1xyXG4gICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkICNlNjdlMjI7XHJcbiAgICBtYXJnaW46IDVweCAwO1xyXG4gICAgcGFkZGluZzogMDsgXHJcbiAgfVxyXG5cclxuICAuaW1hZ2UtY29udGFpbmVyIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiAxNTBweDsgICAgXHJcbiAgfVxyXG4gIFxyXG4gIC5pbWFnZSB7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDogMTUwcHg7XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgdHJhbnNpdGlvbjogLjVzIGVhc2U7XHJcbiAgICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgfVxyXG4gIFxyXG4gIC5taWRkbGUge1xyXG4gICAgdHJhbnNpdGlvbjogLjVzIGVhc2U7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbiAgXHJcbiAgLmltYWdlLWNvbnRhaW5lcjpob3ZlciAuaW1hZ2Uge1xyXG4gICAgb3BhY2l0eTogMC4zO1xyXG4gIH1cclxuICBcclxuICAuaW1hZ2UtY29udGFpbmVyOmhvdmVyIC5taWRkbGUge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcbiAgXHJcbiAgLmRlbGV0ZSB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBwYWRkaW5nOiAxNnB4IDMycHg7XHJcbiAgfVxyXG5cclxuICAudHJhc2gge1xyXG4gICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnMsIGNvbG9yIDAuMnM7XHJcbiAgfVxyXG5cclxuICAudHJhc2g6aG92ZXIge1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xyXG4gICAgY29sb3I6ICNmZjAwMDA7XHJcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/admin/admin-gallary/admin-gallary.component.html":
/*!******************************************************************!*\
  !*** ./src/app/admin/admin-gallary/admin-gallary.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<img class=\"loading\" src=\"../../../assets/images/Reload-1.3s-78px.svg\" *ngIf=\"loading\">\n\n<div class=\"row mt-2\" *ngIf=\"!loading\">\n  <div class=\"col-12\">\n    <div class=\"row\">\n      <div class=\"col-6\">\n        <h3>Gallery</h3>\n      </div>\n      <div class=\"col-6\">\n        <button class=\"new-btn float-right\" routerLink=\"new\" skipLocationChange>Add New Images</button>\n      </div>\n    </div>\n  \n    <hr>\n    \n    <div class=\"row\">\n        <div class=\"col-12\">\n          <div *ngIf=\"images.length > 0; else noImages\">\n              <h3>Images : </h3>\n              <div class=\"row\">\n                  <span class=\"m-2\" *ngFor=\"let image of images; let i = index;\">\n                      <div class=\"image-container\" >\n                          <img [src]=\"image\" class=\"image\" [alt]=\"i\">\n                          <div class=\"middle\">\n                              <a class=\"delete\" (click)=\"deleteImage(i)\"><i class=\"fa fa-trash-o trash\"></i></a>\n                          </div>\n                      </div>\n                  </span>\n              </div>\n          </div>\n          <ng-template #noImages><h4>No Images Available</h4></ng-template>   \n        </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/admin/admin-gallary/admin-gallary.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/admin/admin-gallary/admin-gallary.component.ts ***!
  \****************************************************************/
/*! exports provided: AdminGallaryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminGallaryComponent", function() { return AdminGallaryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_httpPost_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/httpPost.service */ "./src/app/services/httpPost.service.ts");



var AdminGallaryComponent = /** @class */ (function () {
    function AdminGallaryComponent(httpPostService) {
        this.httpPostService = httpPostService;
        this.images = [];
        this.loading = true;
    }
    AdminGallaryComponent.prototype.ngOnInit = function () {
        // const data = { api : "getImages", data : {}}    
        // this.httpPostService.httpImagePost(data.api, data.data)
        // .subscribe(responseData => {
        //   this.images = responseData[0].imagePath;
        //   this.loading = false;
        // },
        // (error) => {
        //   this.loading = false;
        //   console.log(error);
        // });
        this.loading = false;
    };
    AdminGallaryComponent.prototype.deleteImage = function (index) {
        var _this = this;
        var changeImgs = this.images;
        var image = changeImgs[index].substring(changeImgs[index].lastIndexOf('/') + 1);
        changeImgs.splice(index, 1);
        var imgData = {
            image: image,
            imagePath: changeImgs
        };
        var postData = new FormData();
        postData.append("data", JSON.stringify(imgData));
        this.loading = true;
        var data = { api: "deleteImage", data: imgData };
        this.httpPostService.httpImagePost(data.api, data.data)
            .subscribe(function (res) {
            _this.ngOnInit();
        }, function (error) {
            _this.loading = false;
            console.log(error);
        });
    };
    AdminGallaryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admin-gallary',
            template: __webpack_require__(/*! ./admin-gallary.component.html */ "./src/app/admin/admin-gallary/admin-gallary.component.html"),
            styles: [__webpack_require__(/*! ./admin-gallary.component.css */ "./src/app/admin/admin-gallary/admin-gallary.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_httpPost_service__WEBPACK_IMPORTED_MODULE_2__["HttpPostService"]])
    ], AdminGallaryComponent);
    return AdminGallaryComponent;
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

module.exports = "<img class=\"loading\" src=\"../../../assets/images/Reload-1.3s-78px.svg\" *ngIf=\"loading\">\n\n<div class=\"row mt-2\" *ngIf=\"!loading\">\n  <div class=\"col-lg-8 col-md-8 col-sm-12 col-xs-12 col-12 mx-auto\">\n    <h4 class=\"text-center mb-3\">Add New Student</h4>\n    <form class=\"\" (submit)=\"addStudent()\" [formGroup]=\"form\">\n\n      <div class=\"row\">\n\n        <div class=\"col-md-6 col-sm-12\">\n          <div class=\"form-group\">\n            <label for=\"name\">Name : </label>\n            <input class=\"name\" type=\"text\" name=\"name\" id=\"name\" formControlName=\"name\" placeholder=\"Name\">\n            <span *ngIf=\"!form.get('name').valid && form.get('name').touched\">*Please enter Name</span>\n          </div>\n        </div>\n\n        <div class=\"col-md-6 col-sm-12\">\n          <div class=\"form-group\">\n            <label for=\"birthDate\">Birth Date : </label>\n            <input class=\"birthDate\" type=\"date\" name=\"birthDate\" id=\"birthDate\" formControlName=\"birthDate\">\n            <span *ngIf=\"!form.get('birthDate').valid && form.get('birthDate').touched\">*Please enter Birth Date</span>\n          </div>\n        </div>\n\n      </div>\n\n      \n      <div class=\"row\">\n\n        <div class=\"col-md-6 col-sm-12\">\n          <div class=\"form-group\">\n            <label for=\"firstGuardianName\">First Guardian Name : </label>\n            <input class=\"firstGuardianName\" type=\"text\" name=\"firstGuardianName\" id=\"firstGuardianName\" formControlName=\"firstGuardianName\" placeholder=\"First Guardian Name\">\n            <span *ngIf=\"!form.get('firstGuardianName').valid && form.get('firstGuardianName').touched\">*Please enter first Guardian Name</span>\n          </div>\n        </div>\n\n        <div class=\"col-md-6 col-sm-12\">\n          <div class=\"form-group\">\n            <label for=\"firstGuardianRelation\">First Guardian Relation : </label>\n            <input class=\"firstGuardianRelation\" type=\"text\" name=\"firstGuardianRelation\" id=\"firstGuardianRelation\" formControlName=\"firstGuardianRelation\" placeholder=\"First Guardian Relation\">\n            <span *ngIf=\"!form.get('firstGuardianRelation').valid && form.get('firstGuardianRelation').touched\">*Please enter first Guardian Relation</span>\n          </div>\n        </div>\n\n      </div>\n\n      <div class=\"row\">\n\n        <div class=\"col-md-6 col-sm-12\">\n          <div class=\"form-group\">\n            <label for=\"secondGuardianName\">Second Guardian Name : </label>\n            <input class=\"secondGuardianName\" type=\"text\" name=\"secondGuardianName\" id=\"secondGuardianName\" formControlName=\"secondGuardianName\" placeholder=\"Second Guardian Name\">\n          </div>\n        </div>\n\n        <div class=\"col-md-6 col-sm-12\">\n          <div class=\"form-group\">\n            <label for=\"secondGuardianRelation\">Second Guardian Relation : </label>\n            <input class=\"secondGuardianRelation\" type=\"text\" name=\"secondGuardianRelation\" id=\"secondGuardianRelation\" formControlName=\"secondGuardianRelation\" placeholder=\"Second Guardian Relation\">\n          </div>\n        </div>\n\n      </div>\n      \n      <div class=\"row\">\n        <div class=\"col-md-6 col-sm-12\">\n          <div class=\"form-group\">\n            <label for=\"workPlace\">School /College /Office (Optional) : </label>\n            <input class=\"workPlace\" type=\"text\" name=\"workPlace\" id=\"workPlace\" formControlName=\"workPlace\" placeholder=\"Work Place\">\n          </div>\n        </div>\n\n        <div class=\"col-md-6 col-sm-12\">\n          <div class=\"form-group\">\n            <label for=\"bloodGroup\">Blood Group (Optional) : </label>\n            <input class=\"bloodGroup\" type=\"text\" name=\"bloodGroup\" id=\"bloodGroup\" formControlName=\"bloodGroup\" placeholder=\"Blood Group\">\n          </div>\n        </div>\n      </div>\n\n      <div class=\"row\">\n        <div class=\"col-12\">\n          <div class=\"form-group\">\n            <label for=\"medicalHistory\">Medical History : </label>\n            <textarea class=\"medicalHistory\" name=\"medicalHistory\" id=\"medicalHistory\" rows=\"3\" formControlName=\"medicalHistory\" placeholder=\"Medicle History\"></textarea>\n            <span *ngIf=\"!form.get('medicalHistory').valid && form.get('medicalHistory').touched\">*Please enter Medical History</span>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"row\">\n\n        <div class=\"col-md-6 col-sm-12\">\n          <div class=\"form-group\">\n            <label for=\"email\">Email : </label>\n            <input class=\"email\" type=\"email\" name=\"email\" id=\"email\" formControlName=\"email\" placeholder=\"example@email.com\">\n            <span *ngIf=\"!form.get('email').valid && form.get('email').touched\">*Please enter valid Email</span>\n          </div>\n        </div>\n\n        <div class=\"col-md-6 col-sm-12\">\n          <div class=\"form-group\">\n            <label for=\"phone\">Phone : </label>\n            <input class=\"phone\" type=\"text\" pattern=\"\\d*\" name=\"phone\" id=\"phone\" maxlength=\"10\" minlength=\"10\" formControlName=\"phone\" placeholder=\"Phone\">\n            <span *ngIf=\"!form.get('phone').valid && form.get('phone').touched\">*Please enter valid phone number</span>\n          </div>\n        </div>\n\n      </div>\n\n      <div class=\"row\">\n          <div class=\"col-12\">\n            <div class=\"form-group\">\n              <label for=\"address\">Address : </label>\n              <textarea class=\"address\" name=\"address\" id=\"address\" rows=\"3\" formControlName=\"address\" placeholder=\"Name\"></textarea>\n              <span *ngIf=\"!form.get('address').valid && form.get('address').touched\">*Please enter Address</span>\n            </div>\n          </div>\n        </div>\n\n      <div class=\"row\">\n\n        <div class=\"col-md-6 col-sm-12\">\n          <div class=\"form-group\">\n            <label for=\"branch\">Select Branch : </label>\n            <select class=\"branch\" type=\"text\" name=\"branch\" id=\"branch\" formControlName=\"branch\" placeholder=\"Branch\" (change)=\"branchChanged()\">\n              <option value=\"\">Select Branch</option>\n              <option *ngFor=\"let branch of branches\" [value]=\"branch._id\">{{branch.branch}}</option>\n            </select>\n            <span *ngIf=\"!form.get('branch').valid && form.get('branch').touched\">*Please Select Branch</span>\n          </div>\n        </div>\n\n        <div class=\"col-md-6 col-sm-12\">\n          <div class=\"form-group\">\n            <label for=\"batch\">Select Batch : </label>\n            <select class=\"batch\" type=\"text\" name=\"batch\" id=\"batch\" formControlName=\"batch\" (change)=\"changeWeekType()\">\n              <option value=\"weekDays\">Week Day</option>\n              <option value=\"weekEnds\">Week End</option>\n            </select>\n            <span *ngIf=\"!form.get('batch').valid && form.get('batch').touched\">*Please Select Batch</span>\n          </div>\n        </div>\n\n      </div>\n\n      <div class=\"row\">\n\n        <div class=\"col-md-6 col-sm-12\">\n          <div class=\"form-group\">\n            <label for=\"Class\">Select Batch Name : </label>\n            <select class=\"batchName\" type=\"text\" name=\"batchName\" id=\"batchName\" formControlName=\"batchName\">\n              <option value=\"\">Select Batch</option>\n              <option *ngFor=\"let batch of batches\" [value]=\"batch.batchName\">{{batch.batchName}}</option>\n            </select>\n            <span *ngIf=\"!form.get('batchName').valid && form.get('batchName').touched\">*Please Select Batch Name</span>\n          </div>\n        </div>\n  \n        <div class=\"col-md-6 col-sm-12\">\n          <div class=\"form-group\">\n            <label for=\"image\">Select Profile Image : </label>\n            <input type=\"file\" id=\"image\" name=\"image\" formControlName=\"image\" (change)=\"onImagePicked($event)\">\n            <span *ngIf=\"!form.get('image').valid && form.get('image').touched\">*Please Select Valid Image File</span>\n          </div>\n        </div>\n  \n      </div>\n\n      <div class=\"row mt-1\" *ngIf=\"formError\">\n        <div class=\"col-12\">\n          <span>*Please Fill All Student Fields</span>\n        </div>\n      </div>\n        \n      <hr>\n\n      <div class=\"row\">\n        <div class=\"col-12\">\n          <button type=\"submit\" class=\"btn-add\">ADD</button>\n    \n          <button type=\"button\" class=\"btn-cancel float-right\" (click)=\"cancel()\">Cancel</button>\n        </div>\n      </div>\n\n\n    </form>\n  </div>\n\n</div>"

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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _validators_form_validator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../validators/form.validator */ "./src/app/validators/form.validator.ts");
/* harmony import */ var _services_httpPost_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/httpPost.service */ "./src/app/services/httpPost.service.ts");






var AdminAddStudentComponent = /** @class */ (function () {
    function AdminAddStudentComponent(httpPostService, formValidator, router, route) {
        this.httpPostService = httpPostService;
        this.formValidator = formValidator;
        this.router = router;
        this.route = route;
        this.formError = false;
        this.loading = true;
        this.imgExt = ['jpg', 'png'];
        this.branches = [];
        this.batches = [];
        this.weekType = "weekDays";
    }
    AdminAddStudentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
            }),
            birthDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
            }),
            firstGuardianName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
            }),
            firstGuardianRelation: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
            }),
            secondGuardianName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", {}),
            secondGuardianRelation: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", {}),
            workPlace: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", {}),
            bloodGroup: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", {}),
            medicalHistory: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
            }),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]
            }),
            phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(10)]
            }),
            address: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
            }),
            branch: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
            }),
            batch: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.weekType, {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
            }),
            batchName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
            }),
            image: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, {
                validators: [this.formValidator.imageValidate.bind(this)]
            })
        });
        var data = { api: "getBranches", data: {} };
        this.httpPostService.httpPost(data).subscribe(function (val) {
            _this.branches = val;
            _this.loading = false;
        }, function (error) {
        });
        this.image = "Image";
        this.loading = false;
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
        var _this = this;
        if (this.form.invalid) {
            this.formError = true;
        }
        if (this.form.valid) {
            this.formError = false;
            this.loading = true;
            var student = {
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
                status: "activated"
            };
            var data = { api: "addStudent", data: student };
            this.httpPostService.httpPost(data).subscribe(function (val) {
                _this.cancel();
            }, function (error) {
                _this.loading = false;
            });
        }
    };
    AdminAddStudentComponent.prototype.cancel = function () {
        this.loading = true;
        this.router.navigate(['/admin', 'student'], { relativeTo: this.route, skipLocationChange: true });
    };
    AdminAddStudentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admin-add-student',
            template: __webpack_require__(/*! ./admin-add-student.component.html */ "./src/app/admin/admin-student/admin-add-student/admin-add-student.component.html"),
            styles: [__webpack_require__(/*! ./admin-add-student.component.css */ "./src/app/admin/admin-student/admin-add-student/admin-add-student.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_httpPost_service__WEBPACK_IMPORTED_MODULE_5__["HttpPostService"],
            _validators_form_validator__WEBPACK_IMPORTED_MODULE_4__["FormValidator"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
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

module.exports = "* {\r\n    margin: 0;\r\n}\r\n\r\nhr {\r\n    border: 1px solid #e67e22;\r\n    margin: 10px 0;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vYWRtaW4tc3R1ZGVudC9hZG1pbi1lZGl0LXN0dWRlbnQvYWRtaW4tZWRpdC1zdHVkZW50LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxTQUFTO0FBQ2I7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsY0FBYztBQUNsQiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluLXN0dWRlbnQvYWRtaW4tZWRpdC1zdHVkZW50L2FkbWluLWVkaXQtc3R1ZGVudC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XHJcbiAgICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbmhyIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlNjdlMjI7XHJcbiAgICBtYXJnaW46IDEwcHggMDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/admin/admin-student/admin-edit-student/admin-edit-student.component.html":
/*!******************************************************************************************!*\
  !*** ./src/app/admin/admin-student/admin-edit-student/admin-edit-student.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<img class=\"loading\" src=\"../../../assets/images/Reload-1.3s-78px.svg\" *ngIf=\"loading\">\n\n<div class=\"row mt-2\" *ngIf=\"!loading\">\n  <div class=\"col-lg-8 col-md-8 col-sm-12 col-xs-12 col-12 mx-auto\">\n      <h4 class=\"text-center mb-3\">Edit Student - {{student.name}}</h4>    \n    <form class=\"\" (submit)=\"editStudent()\" [formGroup]=\"form\">\n\n      <div class=\"row\">\n\n        <div class=\"col-md-6 col-sm-12\">\n          <div class=\"form-group\">\n            <label for=\"name\">Name : </label>\n            <input class=\"name\" type=\"text\" name=\"name\" id=\"name\" formControlName=\"name\" placeholder=\"Name\">\n            <span *ngIf=\"!form.get('name').valid && form.get('name').touched\">*Please enter Name</span>\n          </div>\n        </div>\n\n        <div class=\"col-md-6 col-sm-12\">\n          <div class=\"form-group\">\n            <label for=\"birthDate\">Birth Date : </label>\n            <input class=\"birthDate\" type=\"date\" name=\"birthDate\" id=\"birthDate\" formControlName=\"birthDate\">\n            <span *ngIf=\"!form.get('birthDate').valid && form.get('birthDate').touched\">*Please enter Birth Date</span>\n          </div>\n        </div>\n\n      </div>\n\n      \n      <div class=\"row\">\n\n        <div class=\"col-md-6 col-sm-12\">\n          <div class=\"form-group\">\n            <label for=\"firstGuardianName\">First Guardian Name : </label>\n            <input class=\"firstGuardianName\" type=\"text\" name=\"firstGuardianName\" id=\"firstGuardianName\" formControlName=\"firstGuardianName\" placeholder=\"First Guardian Name\">\n            <span *ngIf=\"!form.get('firstGuardianName').valid && form.get('firstGuardianName').touched\">*Please enter first Guardian Name</span>\n          </div>\n        </div>\n\n        <div class=\"col-md-6 col-sm-12\">\n          <div class=\"form-group\">\n            <label for=\"firstGuardianRelation\">First Guardian Relation : </label>\n            <input class=\"firstGuardianRelation\" type=\"text\" name=\"firstGuardianRelation\" id=\"firstGuardianRelation\" formControlName=\"firstGuardianRelation\" placeholder=\"First Guardian Relation\">\n            <span *ngIf=\"!form.get('firstGuardianRelation').valid && form.get('firstGuardianRelation').touched\">*Please enter first Guardian Relation</span>\n          </div>\n        </div>\n\n      </div>\n\n      <div class=\"row\">\n\n        <div class=\"col-md-6 col-sm-12\">\n          <div class=\"form-group\">\n            <label for=\"secondGuardianName\">Second Guardian Name : </label>\n            <input class=\"secondGuardianName\" type=\"text\" name=\"secondGuardianName\" id=\"secondGuardianName\" formControlName=\"secondGuardianName\" placeholder=\"Second Guardian Name\">\n          </div>\n        </div>\n\n        <div class=\"col-md-6 col-sm-12\">\n          <div class=\"form-group\">\n            <label for=\"secondGuardianRelation\">Second Guardian Relation : </label>\n            <input class=\"secondGuardianRelation\" type=\"text\" name=\"secondGuardianRelation\" id=\"secondGuardianRelation\" formControlName=\"secondGuardianRelation\" placeholder=\"Second Guardian Relation\">\n          </div>\n        </div>\n\n      </div>\n      \n      <div class=\"row\">\n        <div class=\"col-md-6 col-sm-12\">\n          <div class=\"form-group\">\n            <label for=\"workPlace\">School /College /Office (Optional) : </label>\n            <input class=\"workPlace\" type=\"text\" name=\"workPlace\" id=\"workPlace\" formControlName=\"workPlace\" placeholder=\"Work Place\">\n          </div>\n        </div>\n\n        <div class=\"col-md-6 col-sm-12\">\n          <div class=\"form-group\">\n            <label for=\"bloodGroup\">Blood Group (Optional) : </label>\n            <input class=\"bloodGroup\" type=\"text\" name=\"bloodGroup\" id=\"bloodGroup\" formControlName=\"bloodGroup\" placeholder=\"Blood Group\">\n          </div>\n        </div>\n      </div>\n\n      <div class=\"row\">\n        <div class=\"col-12\">\n          <div class=\"form-group\">\n            <label for=\"medicalHistory\">Medical History : </label>\n            <textarea class=\"medicalHistory\" name=\"medicalHistory\" id=\"medicalHistory\" rows=\"3\" formControlName=\"medicalHistory\" placeholder=\"Medicle History\"></textarea>\n            <span *ngIf=\"!form.get('medicalHistory').valid && form.get('medicalHistory').touched\">*Please enter Medical History</span>\n          </div>\n        </div>\n      </div>\n\n\n      <div class=\"row\">\n\n        <div class=\"col-md-6 col-sm-12\">\n          <div class=\"form-group\">\n            <label for=\"email\">Email : </label>\n            <input class=\"email\" type=\"email\" name=\"email\" id=\"email\" formControlName=\"email\" placeholder=\"example@email.com\">\n            <span *ngIf=\"!form.get('email').valid && form.get('email').touched\">*Please enter valid Email</span>\n          </div>\n        </div>\n\n        <div class=\"col-md-6 col-sm-12\">\n          <div class=\"form-group\">\n            <label for=\"phone\">Phone : </label>\n            <input class=\"phone\" type=\"text\" pattern=\"\\d*\" name=\"phone\" id=\"phone\" maxlength=\"10\" minlength=\"10\" formControlName=\"phone\" placeholder=\"Phone\">\n            <span *ngIf=\"!form.get('phone').valid && form.get('phone').touched\">*Please enter valid phone number</span>\n          </div>\n        </div>\n\n      </div>\n\n      <div class=\"row\">\n          <div class=\"col-12\">\n            <div class=\"form-group\">\n              <label for=\"address\">Address : </label>\n              <textarea class=\"address\" name=\"address\" id=\"address\" rows=\"3\" formControlName=\"address\" placeholder=\"Name\"></textarea>\n              <span *ngIf=\"!form.get('address').valid && form.get('address').touched\">*Please enter Address</span>\n            </div>\n          </div>\n      </div>\n\n\n      <div class=\"row\">\n\n        <div class=\"col-md-6 col-sm-12\">\n          <div class=\"form-group\">\n            <label for=\"branch\">Select Branch : </label>\n            <select class=\"branch\" type=\"text\" name=\"branch\" id=\"branch\" formControlName=\"branch\" placeholder=\"Branch\" (change)=\"branchChanged()\">\n              <option value=\"\">Select Branch</option>\n              <option *ngFor=\"let branch of branches\" [value]=\"branch._id\">{{branch.branch}}</option>\n            </select>\n            <span *ngIf=\"!form.get('branch').valid && form.get('branch').touched\">*Please Select Branch</span>\n          </div>\n        </div>\n\n        <div class=\"col-md-6 col-sm-12\">\n          <div class=\"form-group\">\n            <label for=\"batch\">Select Batch : </label>\n            <select class=\"batch\" type=\"date\" name=\"batch\" id=\"batch\" formControlName=\"batch\" (change)=\"changeWeekType()\">\n              <option value=\"weekDays\">Week Day</option>\n              <option value=\"weekEnds\">Week End</option>\n              </select>\n            <span *ngIf=\"!form.get('batch').valid && form.get('batch').touched\">*Please Select Batch</span>\n          </div>\n        </div>\n\n      </div>\n\n      <div class=\"row\">\n\n        <div class=\"col-md-6 col-sm-12\">\n          <div class=\"form-group\">\n            <label for=\"batchName\">Select Batch Name : </label>\n            <select class=\"batchName\" type=\"text\" name=\"batchName\" id=\"batchName\" formControlName=\"batchName\">\n              <option value=\"\">Select Batch</option>\n              <option *ngFor=\"let batch of batches\" [value]=\"batch.batchName\">{{batch.batchName}}</option>\n            </select>\n            <span *ngIf=\"!form.get('batchName').valid && form.get('batchName').touched\">*Please Select Batch Name</span>\n          </div>\n        </div>\n  \n        <div class=\"col-md-6 col-sm-12\">\n          <div class=\"form-group\">\n            <label for=\"image\">Select Article Image : </label>\n            <input type=\"file\" id=\"image\" name=\"image\" formControlName=\"image\" (change)=\"onImagePicked($event)\">\n            <span *ngIf=\"!form.get('image').valid && form.get('image').touched\">*Please Select Valid Image File</span>\n          </div>\n        </div>\n  \n      </div>\n\n      <div class=\"row mt-1\" *ngIf=\"formError\">\n        <div class=\"col-12\">\n          <span>*Please Fill All Student Fields</span>\n        </div>\n      </div>\n      \n      <hr>\n\n      <div class=\"row\">\n          <div class=\"col-12\">\n            <button type=\"submit\" class=\"btn-save\">Save</button>\n        \n            <button type=\"button\" class=\"btn-cancel float-right\" (click)=\"cancel()\">Cancel</button>\n          </div>\n        </div>\n\n\n    </form>\n  </div>\n\n</div>"

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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _validators_form_validator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../validators/form.validator */ "./src/app/validators/form.validator.ts");
/* harmony import */ var _services_httpPost_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/httpPost.service */ "./src/app/services/httpPost.service.ts");






var AdminEditStudentComponent = /** @class */ (function () {
    function AdminEditStudentComponent(httpPostService, formValidator, router, route) {
        this.httpPostService = httpPostService;
        this.formValidator = formValidator;
        this.router = router;
        this.route = route;
        this.loading = true;
        this.formError = false;
        this.branches = [];
        this.imgExt = ['jpg', 'png'];
        this.batches = [];
        this.weekType = "weekDays";
    }
    AdminEditStudentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
            }),
            birthDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
            }),
            firstGuardianName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
            }),
            firstGuardianRelation: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
            }),
            secondGuardianName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, {}),
            secondGuardianRelation: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, {}),
            workPlace: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, {}),
            bloodGroup: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, {}),
            medicalHistory: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
            }),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]
            }),
            phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(10)]
            }),
            address: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
            }),
            branch: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
            }),
            batch: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
            }),
            batchName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
            }),
            image: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, {
                validators: [this.formValidator.imageValidate.bind(this)]
            })
        });
        this.route.params
            .subscribe(function (params) {
            var _id = params['id'];
            var data = { api: "getBranches", data: {} };
            _this.httpPostService.httpPost(data).subscribe(function (val) {
                _this.branches = val;
                var data = { api: "getStudent", data: { _id: _id } };
                _this.httpPostService.httpPost(data).subscribe(function (val) {
                    _this.student = val[0];
                    _this.branch = _this.branches.find(function (branch) { return branch._id === _this.student.branch; });
                    _this.image = _this.student.image;
                    _this.form.patchValue({
                        name: _this.student.name,
                        birthDate: _this.student.birthDate,
                        firstGuardianName: _this.student.firstGuardianName,
                        firstGuardianRelation: _this.student.firstGuardianRelation,
                        secondGuardianName: _this.student.secondGuardianName,
                        secondGuardianRelation: _this.student.secondGuardianRelation,
                        workplace: _this.student.workPlace,
                        bloodGroup: _this.student.bloodGroup,
                        medicalHistory: _this.student.medicalHistory,
                        email: _this.student.email,
                        phone: _this.student.phone,
                        address: _this.student.address,
                        branch: _this.student.branch,
                        batch: _this.student.batch,
                        batchName: _this.student.batchName,
                        image: null
                    });
                    _this.branchChanged();
                    _this.loading = false;
                }, function (error) {
                });
            }, function (error) {
            });
        });
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
        var _this = this;
        if (this.form.invalid) {
            this.formError = true;
        }
        if (this.form.valid) {
            this.formError = false;
            this.loading = true;
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
            var data = { api: "editStudent", data: student };
            this.httpPostService.httpPost(data).subscribe(function (val) {
                _this.cancel();
            }, function (error) {
                _this.loading = false;
            });
        }
    };
    AdminEditStudentComponent.prototype.cancel = function () {
        this.loading = true;
        this.router.navigate(['/admin', 'student', this.student._id], { relativeTo: this.route, skipLocationChange: true });
    };
    AdminEditStudentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admin-edit-student',
            template: __webpack_require__(/*! ./admin-edit-student.component.html */ "./src/app/admin/admin-student/admin-edit-student/admin-edit-student.component.html"),
            styles: [__webpack_require__(/*! ./admin-edit-student.component.css */ "./src/app/admin/admin-student/admin-edit-student/admin-edit-student.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_httpPost_service__WEBPACK_IMPORTED_MODULE_5__["HttpPostService"],
            _validators_form_validator__WEBPACK_IMPORTED_MODULE_4__["FormValidator"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
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

module.exports = "  <img class=\"loading\" src=\"../../../assets/images/Reload-1.3s-78px.svg\" *ngIf=\"loading\">\r\n\r\n  <div class=\"row mt-2\" *ngIf=\"!loading\">\r\n    <div class=\"col-10 mx-auto\">\r\n\r\n      <div class=\"student\">\r\n        <div class=\"row\">\r\n          <div class=\"col-12\">\r\n            <button class=\"btn-close float-right\" (click)=\"cancel()\">X</button>\r\n            <h3>Student Details</h3>\r\n          </div>\r\n        </div>\r\n\r\n        <hr>\r\n\r\n        <div class=\"row\">\r\n\r\n          <div class=\"col-md-4 col-sm-10 mx-auto\">\r\n\r\n            <div>\r\n              <div class=\"student-name\">\r\n                <h4>{{student.name}}</h4>\r\n              </div>\r\n  \r\n              <div class=\"student-image\">\r\n                  <img [src]=\"student.image\" [alt]=\"student.name\" width=\"100%\">\r\n              </div>\r\n            </div>\r\n\r\n\r\n          </div>\r\n\r\n          <div class=\"col-md-8 col-sm-10 mx-auto\">\r\n\r\n            <div class=\"table-responsive\">\r\n              <table class=\"table table-sm\">\r\n                <tbody>\r\n                  <tr>\r\n                    <td>\r\n                      <strong>Birth Date : </strong>\r\n                    </td>\r\n                    <td>\r\n                      <p>{{student.birthDate}}</p>\r\n                    </td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td>\r\n                      \r\n                      <strong>Address : </strong>\r\n                    </td>\r\n                    <td>\r\n                      <p>{{student.address}}</p>\r\n                    </td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td>\r\n                      <strong>First Guardian Name : </strong>\r\n                    </td>\r\n                    <td>\r\n                      <p>{{student.firstGuardianName}}</p>\r\n                    </td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td>\r\n                      <strong>First Guardian Relation : </strong>\r\n                    </td>\r\n                    <td>  \r\n                      <p>{{student.firstGuardianRelation}}</p>\r\n                    </td>\r\n                  </tr>\r\n                  <tr *ngIf=\"student.secondGuardianName != ''\">\r\n                    <td>\r\n                      <strong>Second Guardian Name : </strong>\r\n                    </td>\r\n                    <td>\r\n                      <p>{{student.secondGuardianName}}</p>\r\n                    </td>\r\n                  </tr>\r\n                  <tr *ngIf=\"student.secondGuardianRelation != ''\">\r\n                    <td>\r\n                      <strong>Second Guardian Relation : </strong>\r\n                    </td>\r\n                    <td>\r\n                      <p>{{student.secondGuardianRelation}}</p>\r\n                    </td>\r\n                  </tr>\r\n                  <tr *ngIf=\"student.workPlace != ''\">\r\n                    <td>\r\n                      <strong>School/ College/ Office : </strong>\r\n                    </td>\r\n                    <td>\r\n                      <p>{{student.workPlace}}</p>\r\n                    </td>\r\n                  </tr>\r\n                  <tr *ngIf=\"student.bloodGroup != ''\">\r\n                    <td>\r\n                      <strong>Blood Group : </strong>\r\n                    </td>\r\n                    <td>\r\n                      <p>{{student.bloodGroup}}</p>                      \r\n                    </td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td>\r\n                      <strong>Medical History : </strong>\r\n                    </td>\r\n                    <td>\r\n                      <p>{{student.medicalHistory}}</p>\r\n                    </td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td>\r\n                      <strong><em>E-</em>mail : </strong>\r\n                    </td>\r\n                    <td>\r\n                      <p><a href=\"mailto:{{student.email}}\">{{student.email}}</a></p>\r\n                    </td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td>\r\n                      <strong>Phone : </strong>\r\n                    </td>\r\n                    <td>\r\n                      <p>+91 {{student.phone}}</p>\r\n                    </td>\r\n                  </tr>\r\n                </tbody>\r\n              </table>\r\n            </div>\r\n          </div> \r\n\r\n        </div>\r\n        <hr>\r\n        <div class=\"row\">\r\n          <div class=\"col-12\">\r\n            <h4>CLASS DETAILS</h4>\r\n            <div class=\"row\">\r\n              <div class=\"col-10 mx-auto\">\r\n                <table class=\"table table-sm\">\r\n                  <tbody>\r\n                    <tr>\r\n                      <td>\r\n                        <strong>Branch : </strong>\r\n                      </td>\r\n                      <td>\r\n                        <p>{{branch.branch}}</p>\r\n                      </td>\r\n                    </tr>\r\n                    <tr>\r\n                      <td>\r\n                        <strong>Batch : </strong>\r\n                      </td>\r\n                      <td>\r\n                        <p>{{student.batch}}</p>\r\n                      </td>\r\n                    </tr>\r\n                    <tr>\r\n                      <td>\r\n                        <strong>Batch Name : </strong>\r\n                      </td>\r\n                      <td>\r\n                        <p>{{batch.batchName}}</p> \r\n                      </td>\r\n                    </tr>\r\n                    <tr>\r\n                      <td>\r\n                        <strong>Fees : </strong>\r\n                      </td>\r\n                      <td>\r\n                        <p>Rs. {{batch.fees}}.00/-</p>      \r\n                      </td>\r\n                    </tr>\r\n                    <tr>\r\n                      <td>\r\n                        <strong>Time : </strong>\r\n                      </td>\r\n                      <td>\r\n                        <p>{{batch.time}}</p>                \r\n                      </td>\r\n                    </tr>\r\n                    <tr>\r\n                      <td>\r\n                        <strong>Status : </strong>\r\n                      </td>\r\n                      <td>\r\n                        <p>{{student.status | uppercase}}</p>\r\n                      </td>\r\n                    </tr>\r\n                  </tbody>\r\n                </table>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <hr>\r\n\r\n        <div class=\"row\">\r\n\r\n          <div class=\"col-6\">\r\n            <button routerLink=\"edit\" class=\"btn-edit\" skipLocationChange>Edit</button>\r\n          </div>\r\n\r\n          <div class=\"col-6\">\r\n              <button class=\"btn-deactivate float-right\" (click)=\"changeStatus(student._id, 'deactivated')\" *ngIf=\"student.status === 'activated'\">Deactivate</button>\r\n              <button class=\"btn-activate float-right\" (click)=\"changeStatus(student._id, 'activated')\" *ngIf=\"student.status === 'deactivated'\">Activate</button>\r\n          </div>\r\n\r\n        </div>\r\n      </div>\r\n       \r\n    </div>\r\n</div>"

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
/* harmony import */ var _services_httpPost_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/httpPost.service */ "./src/app/services/httpPost.service.ts");




var AdminShowStudentComponent = /** @class */ (function () {
    function AdminShowStudentComponent(httpPostService, route, router) {
        this.httpPostService = httpPostService;
        this.route = route;
        this.router = router;
        this.loading = true;
    }
    AdminShowStudentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.
            subscribe(function (params) {
            var _id = params['id'];
            var studentData = { api: "getStudent", data: { _id: _id } };
            _this.httpPostService.httpPost(studentData).subscribe(function (val) {
                _this.student = val[0];
                var branchData = { api: "getBranch", data: { _id: _this.student.branch } };
                _this.httpPostService.httpPost(branchData).subscribe(function (val) {
                    _this.branch = val[0];
                    _this.batch = _this.branch.batch.find(function (batch) { return (batch.batchName === _this.student.batchName && batch.batchType === _this.student.batch); });
                    _this.loading = false;
                }, function (error) {
                });
            }, function (error) {
            });
        });
    };
    AdminShowStudentComponent.prototype.changeStatus = function (_id, status) {
        var _this = this;
        var statusConfirm = true;
        if (status === "deactivated") {
            statusConfirm = confirm("do you really want to Deactivate Branch??");
        }
        if (statusConfirm) {
            this.loading = true;
            var data = { api: "changeStudentStatus", data: { _id: _id, status: status } };
            this.httpPostService.httpPost(data).subscribe(function (val) {
                _this.cancel();
            }, function (error) {
                _this.loading = false;
            });
        }
    };
    AdminShowStudentComponent.prototype.cancel = function () {
        this.loading = true;
        this.router.navigate(['/admin', 'student'], { relativeTo: this.route, skipLocationChange: true });
    };
    AdminShowStudentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admin-show-student',
            template: __webpack_require__(/*! ./admin-show-student.component.html */ "./src/app/admin/admin-student/admin-show-student/admin-show-student.component.html"),
            styles: [__webpack_require__(/*! ./admin-show-student.component.css */ "./src/app/admin/admin-student/admin-show-student/admin-show-student.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_httpPost_service__WEBPACK_IMPORTED_MODULE_3__["HttpPostService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AdminShowStudentComponent);
    return AdminShowStudentComponent;
}());



/***/ }),

/***/ "./src/app/admin/admin-student/admin-student-generate-receipt/admin-student-generate-receipt.component.css":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/admin/admin-student/admin-student-generate-receipt/admin-student-generate-receipt.component.css ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  * {\r\n    margin: 0;\r\n  }\r\n\r\n  .receipt {\r\n    background-color: #f4f4f4;\r\n  }\r\n\r\n  p {\r\n    margin: 0;\r\n  }\r\n\r\n  form hr {\r\n    border: 1px solid #e67e22;\r\n    margin: 10px 0;\r\n  }\r\n\r\n  .months-selector input {\r\n    display: none!important;\r\n  }\r\n\r\n  .months-selector input[type=checkbox] + label {\r\n    display: inline-block;\r\n    font-size: 70%;\r\n    border: 1px solid #e67e22;\r\n    border-radius: 50%;\r\n    background: #fff;\r\n    height: 35px;\r\n    width: 35px;\r\n    padding: 2px;\r\n    margin: 2px;\r\n    line-height: 30px;\r\n    text-align: center;\r\n    cursor: pointer;\r\n    transition: background 0.2s, color 0.2s;\r\n  }\r\n\r\n  .months-selector input[type=checkbox]:checked + label {\r\n    background: #e67e22;\r\n    color: #fff;\r\n  }\r\n\r\n  .month {\r\n      padding-right: 10px;\r\n  }\r\n\r\n  .btn-pay {\r\n    outline: none;\r\n    border: 1px solid #e67e22;\r\n    border-radius: 50px;\r\n    background-color: #e67e22;\r\n    padding: 3px 12px;\r\n    color: #fff;\r\n    margin: 0 auto;\r\n    transition: background-color 0.2s, color 0.2s;\r\n  }\r\n\r\n  .btn-pay:hover {\r\n    background-color: #e67e22;\r\n    color: #fff;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vYWRtaW4tc3R1ZGVudC9hZG1pbi1zdHVkZW50LWdlbmVyYXRlLXJlY2VpcHQvYWRtaW4tc3R1ZGVudC1nZW5lcmF0ZS1yZWNlaXB0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkVBQUU7SUFDRSxTQUFTO0VBQ1g7O0VBRUE7SUFDRSx5QkFBeUI7RUFDM0I7O0VBRUE7SUFDRSxTQUFTO0VBQ1g7O0VBRUE7SUFDRSx5QkFBeUI7SUFDekIsY0FBYztFQUNoQjs7RUFFQTtJQUNFLHVCQUF1QjtFQUN6Qjs7RUFFQTtJQUNFLHFCQUFxQjtJQUNyQixjQUFjO0lBQ2QseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLFdBQVc7SUFDWCxZQUFZO0lBQ1osV0FBVztJQUNYLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLHVDQUF1QztFQUN6Qzs7RUFFQTtJQUNFLG1CQUFtQjtJQUNuQixXQUFXO0VBQ2I7O0VBRUE7TUFDSSxtQkFBbUI7RUFDdkI7O0VBRUE7SUFDRSxhQUFhO0lBQ2IseUJBQXlCO0lBQ3pCLG1CQUFtQjtJQUNuQix5QkFBeUI7SUFDekIsaUJBQWlCO0lBQ2pCLFdBQVc7SUFDWCxjQUFjO0lBQ2QsNkNBQTZDO0VBQy9DOztFQUVBO0lBQ0UseUJBQXlCO0lBQ3pCLFdBQVc7RUFDYiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluLXN0dWRlbnQvYWRtaW4tc3R1ZGVudC1nZW5lcmF0ZS1yZWNlaXB0L2FkbWluLXN0dWRlbnQtZ2VuZXJhdGUtcmVjZWlwdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiICAqIHtcclxuICAgIG1hcmdpbjogMDtcclxuICB9XHJcblxyXG4gIC5yZWNlaXB0IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNGY0ZjQ7XHJcbiAgfVxyXG5cclxuICBwIHtcclxuICAgIG1hcmdpbjogMDtcclxuICB9XHJcblxyXG4gIGZvcm0gaHIge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2U2N2UyMjtcclxuICAgIG1hcmdpbjogMTBweCAwO1xyXG4gIH1cclxuXHJcbiAgLm1vbnRocy1zZWxlY3RvciBpbnB1dCB7XHJcbiAgICBkaXNwbGF5OiBub25lIWltcG9ydGFudDtcclxuICB9XHJcbiAgXHJcbiAgLm1vbnRocy1zZWxlY3RvciBpbnB1dFt0eXBlPWNoZWNrYm94XSArIGxhYmVsIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGZvbnQtc2l6ZTogNzAlO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2U2N2UyMjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBoZWlnaHQ6IDM1cHg7XHJcbiAgICB3aWR0aDogMzVweDtcclxuICAgIHBhZGRpbmc6IDJweDtcclxuICAgIG1hcmdpbjogMnB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDMwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuMnMsIGNvbG9yIDAuMnM7XHJcbiAgfVxyXG4gIFxyXG4gIC5tb250aHMtc2VsZWN0b3IgaW5wdXRbdHlwZT1jaGVja2JveF06Y2hlY2tlZCArIGxhYmVsIHtcclxuICAgIGJhY2tncm91bmQ6ICNlNjdlMjI7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICB9XHJcblxyXG4gIC5tb250aCB7XHJcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbiAgfVxyXG5cclxuICAuYnRuLXBheSB7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2U2N2UyMjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTY3ZTIyO1xyXG4gICAgcGFkZGluZzogM3B4IDEycHg7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjJzLCBjb2xvciAwLjJzO1xyXG4gIH1cclxuICBcclxuICAuYnRuLXBheTpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTY3ZTIyO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/admin/admin-student/admin-student-generate-receipt/admin-student-generate-receipt.component.html":
/*!******************************************************************************************************************!*\
  !*** ./src/app/admin/admin-student/admin-student-generate-receipt/admin-student-generate-receipt.component.html ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<img class=\"loading\" src=\"../../../assets/images/Reload-1.3s-78px.svg\" *ngIf=\"loading\">\n\n<div class=\"row mt-2\" *ngIf=\"!loading\">\n  <div class=\"col-lg-8 col-md-8 col-sm-12 col-xs-12 col-12 mx-auto\">\n    <h4 class=\"text-center mb-3\">Pay Fees</h4>\n    <div class=\"row\">\n      <div class=\"col-12\">\n        <form class=\"\" (submit)=\"payFees()\" [formGroup]=\"form\">\n          \n          <div class=\"row\">\n            <div class=\"col-12\">\n              <div class=\"table-responsive\">\n                <table class=\"table table-sm table-borderless\">\n                  <tbody>\n                    <tr>\n                      <td>\n                        <strong>Student Name : </strong>\n                      </td>\n                      <td>\n                        <p>{{student.name}}</p>\n                      </td>\n                    </tr>\n                    <tr>\n                      <td>\n                        <strong>Branch : </strong>\n                      </td>\n                      <td>\n                        <p>{{branch.branch}}</p>\n                      </td>\n                    </tr>\n                    <tr>\n                      <td>\n                        <strong>Batch : </strong>\n                      </td>\n                      <td>\n                        <p>{{student.batch}}</p>\n                      </td>\n                    </tr>\n                    <tr>\n                      <td>\n                        <strong>Batch Name : </strong>\n                      </td>\n                      <td>\n                        <p>{{batch.batchName}}</p>\n                      </td>\n                    </tr>\n                    <tr>\n                      <td>\n                        <strong>Fees : </strong>\n                      </td>\n                      <td>\n                        <p>Rs. {{batch.fees}}.00/-</p>      \n                      </td>\n                    </tr>\n                  </tbody>\n                </table>\n              </div>\n            </div>\n          </div>\n\n          <hr>\n\n          <div class=\"row\">\n            <div class=\"col-12\">\n              <div class=\"form-group\">\n                <label>Select Months : </label>\n                <div class=\"months-selector\">\n                  <div formArrayName=\"months\">\n                    <label *ngFor=\"let m of form.get('months').controls; let i = index\">\n                      <input type=\"checkbox\" [id]=\"month[i]\" class=\"month\" [formControlName]=\"i\" (change)=\"addMonth($event, i)\">\n                      <label [for]=\"month[i]\">{{month[i]}}</label>\n                    </label>\n                  </div>\n                </div>  \n                <span *ngIf=\"!form.get('months').valid && monthsTouched\">*Please Select Months</span>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"pt-2\">\n            <div class=\"row\">\n              <div class=\"col-md-6 col-sm-12\">\n                <label for=\"paymentMode\">Payment Mode : </label>\n              </div>\n              <div class=\"col-md-6 col-sm-12\">\n                <select class=\"paymentMode\" type=\"text\" name=\"paymentMode\" id=\"paymentMode\" formControlName=\"payment_mode\">\n                  <option value=\"\">Select Payment Mode</option>\n                  <option value=\"cash\">Cash</option>\n                  <option value=\"cheque\">Cheque</option>\n                  <option value=\"card\">Card</option>\n                  <option value=\"ewallet\">E-Wallet</option>\n                </select>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-12\">\n                <span *ngIf=\"!form.get('payment_mode').valid && form.get('payment_mode').touched\">*Please Select Payment Mode</span>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"row pt-2\">\n            <div class=\"col-12\">\n              <label>Amount : Rs. {{amount}}.00/-</label>\n            </div>\n          </div>\n\n          <div class=\"row mt-1\" *ngIf=\"formError\">\n            <div class=\"col-12\">\n              <span>*Please Fill All Receipt Fields</span>\n            </div>\n          </div>\n            \n          <hr>\n    \n          <div class=\"row\">\n            <div class=\"col-6\">\n              <button type=\"submit\" class=\"btn-pay\">Pay</button>\n            </div>\n            <div class=\"col-6\">\n              <button type=\"button\" class=\"btn-cancel float-right\" (click)=\"cancel()\">Cancel</button>\n            </div>\n          </div>\n\n        </form>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/admin/admin-student/admin-student-generate-receipt/admin-student-generate-receipt.component.ts":
/*!****************************************************************************************************************!*\
  !*** ./src/app/admin/admin-student/admin-student-generate-receipt/admin-student-generate-receipt.component.ts ***!
  \****************************************************************************************************************/
/*! exports provided: AdminStudentGenerateReceiptComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminStudentGenerateReceiptComponent", function() { return AdminStudentGenerateReceiptComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _validators_form_validator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../validators/form.validator */ "./src/app/validators/form.validator.ts");
/* harmony import */ var _services_httpPost_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/httpPost.service */ "./src/app/services/httpPost.service.ts");






var AdminStudentGenerateReceiptComponent = /** @class */ (function () {
    function AdminStudentGenerateReceiptComponent(httpPostService, formValidator, route, router) {
        this.httpPostService = httpPostService;
        this.formValidator = formValidator;
        this.route = route;
        this.router = router;
        this.loading = true;
        this.amount = 0;
        this.month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        this.months = [];
        this.monthsTouched = false;
        this.formError = null;
    }
    AdminStudentGenerateReceiptComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            payment_mode: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]("", {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
            }),
            months: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormArray"](this.month.map(function () { return new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null); }), {
                validators: [this.formValidator.monthsValidator.bind(this)]
            })
        });
        this.route.params.
            subscribe(function (params) {
            var _id = params['id'];
            var studentData = { api: "getStudent", data: { _id: _id } };
            _this.httpPostService.httpPost(studentData).subscribe(function (val) {
                _this.student = val;
                var branchData = { api: "getBranch", data: { _id: _this.student.branch } };
                _this.httpPostService.httpPost(branchData).subscribe(function (val) {
                    _this.branch = val;
                    _this.batch = _this.branch.batch.find(function (batch) { return ((batch.batchName === _this.student.batchName) && (batch.batchType === _this.student.batch)); });
                    _this.loading = false;
                }, function (error) {
                });
            }, function (error) {
            });
        });
    };
    AdminStudentGenerateReceiptComponent.prototype.date = function () {
        var today = new Date();
        var date = this.dateMonthCreator(today.getDate()) + '-' + this.dateMonthCreator(today.getMonth() + 1) + '-' + today.getFullYear().toString();
        return date;
    };
    AdminStudentGenerateReceiptComponent.prototype.dateMonthCreator = function (dm) {
        if (dm < 10) {
            return '0' + dm.toString();
        }
        return dm.toString();
    };
    AdminStudentGenerateReceiptComponent.prototype.payFees = function () {
        var _this = this;
        if (this.form.invalid) {
            return this.formError = "*Please Fill All Fields of Receipt";
        }
        else {
            this.formError = null;
            this.loading = true;
            var months = [];
            var month = this.months.sort();
            for (var i = 0; i < month.length; i++) {
                months.push(this.month[month[i]]);
            }
            var receipt = {
                student: this.student._id,
                amount: this.amount.toString(),
                months: months.join(', '),
                receiptDate: this.date(),
                paymentMode: this.form.value.payment_mode
            };
            var data = { api: "addReceipt", data: receipt };
            this.httpPostService.httpPost(data).subscribe(function (val) {
                _this.monthsTouched = false;
                _this.amount = 0;
                _this.form.reset({ payment_mode: "" });
                _this.loading = false;
            }, function (error) {
                _this.loading = false;
            });
        }
    };
    AdminStudentGenerateReceiptComponent.prototype.cancel = function () {
        this.loading = true;
        this.router.navigate(['/admin', 'student'], { relativeTo: this.route, skipLocationChange: true });
    };
    AdminStudentGenerateReceiptComponent.prototype.addMonth = function (event, index) {
        this.monthsTouched = true;
        if (event.target.checked) {
            this.amount += parseInt(this.batch.fees);
            return this.months.push(index);
        }
        this.amount -= parseInt(this.batch.fees);
        this.months.splice(this.months.findIndex(function (month) { return month === index; }), 1);
    };
    AdminStudentGenerateReceiptComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admin-student-generate-receipt',
            template: __webpack_require__(/*! ./admin-student-generate-receipt.component.html */ "./src/app/admin/admin-student/admin-student-generate-receipt/admin-student-generate-receipt.component.html"),
            styles: [__webpack_require__(/*! ./admin-student-generate-receipt.component.css */ "./src/app/admin/admin-student/admin-student-generate-receipt/admin-student-generate-receipt.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_httpPost_service__WEBPACK_IMPORTED_MODULE_5__["HttpPostService"],
            _validators_form_validator__WEBPACK_IMPORTED_MODULE_4__["FormValidator"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AdminStudentGenerateReceiptComponent);
    return AdminStudentGenerateReceiptComponent;
}());



/***/ }),

/***/ "./src/app/admin/admin-student/admin-student-receipts/admin-student-receipts.component.css":
/*!*************************************************************************************************!*\
  !*** ./src/app/admin/admin-student/admin-student-receipts/admin-student-receipts.component.css ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\r\n    margin: 0;\r\n}\r\n\r\nh3 {\r\n    font-size: 150%;\r\n}\r\n\r\nhr {\r\n    border: 1px solid #e67e22;\r\n    margin: 5px 0;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vYWRtaW4tc3R1ZGVudC9hZG1pbi1zdHVkZW50LXJlY2VpcHRzL2FkbWluLXN0dWRlbnQtcmVjZWlwdHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsYUFBYTtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluLXN0dWRlbnQvYWRtaW4tc3R1ZGVudC1yZWNlaXB0cy9hZG1pbi1zdHVkZW50LXJlY2VpcHRzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqIHtcclxuICAgIG1hcmdpbjogMDtcclxufVxyXG5cclxuaDMge1xyXG4gICAgZm9udC1zaXplOiAxNTAlO1xyXG59XHJcblxyXG5ociB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZTY3ZTIyO1xyXG4gICAgbWFyZ2luOiA1cHggMDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/admin/admin-student/admin-student-receipts/admin-student-receipts.component.html":
/*!**************************************************************************************************!*\
  !*** ./src/app/admin/admin-student/admin-student-receipts/admin-student-receipts.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  <img class=\"loading\" src=\"../../../assets/images/Reload-1.3s-78px.svg\" *ngIf=\"loading\">\n\n  <div class=\"row mt-2\" *ngIf=\"!loading\"> \n    <div class=\"col-md-10 col-sm-12 mx-auto\">\n      <h3>Receipts</h3>\n      <hr>\n      <div class=\"row\" *ngIf=\"receipts.length > 0; else empty_receipts\">\n        <div class=\"table-responsive\">\n          <table class=\"table table-sm table-hover\">\n            <tbody>\n              <tr>\n                <th>ID</th>\n                <th>Amount</th>\n                <th>Month</th>\n                <th>Payment Mode</th>\n                <th>Delete</th>\n              </tr>\n              <tr class=\"receipt\" *ngFor=\"let receipt of receipts; let i = index\" routerLinkActive=\"active\">\n                <td>{{ i+1 }}</td>\n                <td>\n                  Rs. {{ receipt.amount }}.00/-\n                </td>\n                <td>\n                  {{ receipt.months }}\n                </td>\n                <td>\n                  {{ receipt.paymentMode | uppercase }}\n                </td>\n                <td>\n                  <button type=\"button\" class=\"btn-delete\" (click)=\"delete(receipt.id)\">Delete</button>                \n                </td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n      </div>\n      <ng-template #empty_receipts>\n        <h5 class=\"pl-3\">No Receipts Available</h5>\n      </ng-template>\n    </div>\n  </div>\n"

/***/ }),

/***/ "./src/app/admin/admin-student/admin-student-receipts/admin-student-receipts.component.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/admin/admin-student/admin-student-receipts/admin-student-receipts.component.ts ***!
  \************************************************************************************************/
/*! exports provided: AdminStudentReceiptsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminStudentReceiptsComponent", function() { return AdminStudentReceiptsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_httpPost_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/httpPost.service */ "./src/app/services/httpPost.service.ts");




var AdminStudentReceiptsComponent = /** @class */ (function () {
    function AdminStudentReceiptsComponent(httpPostService, route, router) {
        this.httpPostService = httpPostService;
        this.route = route;
        this.router = router;
        this.receipts = [];
        this.loading = true;
    }
    AdminStudentReceiptsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.
            subscribe(function (params) {
            _this.studentId = params['id'];
            var data = { api: "getReceipts", data: { student: _this.studentId } };
            _this.httpPostService.httpPost(data).subscribe(function (val) {
                _this.receipts = val;
                _this.loading = false;
            }, function (error) {
            });
        });
    };
    AdminStudentReceiptsComponent.prototype.delete = function (_id) {
        var _this = this;
        var dltConfirm = confirm("do you really want to delete??");
        if (dltConfirm) {
            this.loading = true;
            var data = { api: "deleteReceipt", data: { _id: _id } };
            this.httpPostService.httpPost(data).subscribe(function (val) {
                var data = { api: "getReceipts", data: { student: _this.studentId } };
                _this.httpPostService.httpPost(data).subscribe(function (val) {
                    _this.receipts = val;
                    _this.loading = false;
                }, function (error) {
                });
            }, function (error) {
                _this.loading = false;
            });
        }
    };
    AdminStudentReceiptsComponent.prototype.cancel = function () {
        this.loading = true;
        this.router.navigate(['/admin', 'student'], { relativeTo: this.route, skipLocationChange: true });
    };
    AdminStudentReceiptsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admin-student-receipts',
            template: __webpack_require__(/*! ./admin-student-receipts.component.html */ "./src/app/admin/admin-student/admin-student-receipts/admin-student-receipts.component.html"),
            styles: [__webpack_require__(/*! ./admin-student-receipts.component.css */ "./src/app/admin/admin-student/admin-student-receipts/admin-student-receipts.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_httpPost_service__WEBPACK_IMPORTED_MODULE_3__["HttpPostService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AdminStudentReceiptsComponent);
    return AdminStudentReceiptsComponent;
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

module.exports = "<img class=\"loading\" src=\"../../../assets/images/Reload-1.3s-78px.svg\" *ngIf=\"loading\">\n\n<div class=\"row mt-2\" *ngIf=\"!loading\">\n  <div class=\"col-12 mx-auto\">\n    <div class=\"row\">\n      <div class=\"col-md-6 col-sm-12\">\n        <h3>Students</h3>\n      </div>\n      <div class=\"col-md-6 col-sm-12\">\n        <button class=\"new-btn float-right\" (click)=\"onNewStudent()\">Add New student</button>\n      </div>\n    </div>\n    <hr>\n    <div class=\"row\">\n      <div class=\"col-md-4 col-sm-12\">\n        <select class=\"branch\" type=\"text\" name=\"branch\" id=\"branch\" ngModel #branch=\"ngModel\" required (change)=\"onSelectBranch(branch.value)\">\n          <option value=\"\">Select Branch</option>\n          <option *ngFor=\"let branch of branches\" [value]=\"branch._id\">{{branch.branch}}</option>\n      </select>\n      </div>\n      <div class=\"col-md-4 col-sm-12\">\n        <select class=\"batchName\" type=\"text\" name=\"batchName\" id=\"batchName\" ngModel #batchName=\"ngModel\" required (change)=\"onSelectBatchName(batchName.value)\">\n          <option value=\"\">Select Batch Name</option>\n          <ng-container *ngFor=\"let batch of batches\">\n            <option [value]=\"batch.batchName\" *ngIf=\"batch.batchType === weekType\">{{batch.batchName}}</option>\n          </ng-container>\n      </select>\n      </div>\n      <div class=\"col-md-4 col-sm-12\">\n        <select class=\"batchType\" type=\"text\" name=\"batchType\" id=\"batchType\" [(ngModel)]=\"weekType\" #batchType=\"ngModel\" (change)=\"onSelectBatchType(batchType.value)\">\n          <option value=\"weekDays\">Week Day</option>\n          <option value=\"weekEnds\">Week End</option>\n      </select>\n      </div>\n      <!-- <div class=\"col-md-3 col-sm-12\">\n        <div class=\"input-group mb-3\">\n          <input type=\"text\" placeholder=\"Search\" id=\"search\" name=\"search\" ngModel #search=\"ngModel\" (input)=\"onSearch(search.value)\">\n          <div class=\"input-group-append\">\n            <button class=\"btn-search\" type=\"submit\" [disabled]=\"search == ''\" (click)=\"onSearch(search.value)\">Go</button> \n          </div>\n        </div>\n      </div> -->\n    </div>\n    <br>\n    <div class=\"row\" *ngIf=\"students.length > 0; else empty_students\">\n      <div class=\"table-responsive\">\n        <table class=\"table table-sm table-hover\">\n          <thead>\n            <tr>\n              <th>ID</th>\n              <th>Student</th>\n              <th>Contact</th>\n              <th>Status</th>\n              <th>Pay Fees</th>\n              <th>Receipts</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr class=\"student-tr\" *ngFor=\"let student of students, let i = index\" routerLinkActive=\"active\">\n              <td>{{ i+1 }}</td>\n              <td>\n                <a [routerLink]=\"student._id\" class=\"student\" skipLocationChange>\n                  {{ student.name }}\n                </a>\n              </td>\n              <td>\n                +91 {{ student.phone }}\n              </td>\n              <td>\n                {{ student.status | uppercase }}\n              </td>\n              <td>\n                <button type=\"button\" [routerLink]=\"[student._id, 'generate']\" class=\"btn-edit\" skipLocationChange>Pay Fees</button>                \n              </td>\n              <td>\n                <button type=\"button\" [routerLink]=\"[student._id, 'receipts']\" class=\"btn-edit\" skipLocationChange>Receipts</button>                \n              </td>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n    </div>\n    <ng-template #empty_students>\n      <h5 class=\"pl-3\">{{noStudent}}</h5>\n    </ng-template>\n  </div>\n</div>"

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_httpPost_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/httpPost.service */ "./src/app/services/httpPost.service.ts");




var AdminStudentComponent = /** @class */ (function () {
    function AdminStudentComponent(httpPostService, router, route) {
        this.httpPostService = httpPostService;
        this.router = router;
        this.route = route;
        this.weekType = "weekDays";
        this.loading = true;
        this.allStudents = [];
        this.students = [];
        this.noStudent = 'Please Select Branch';
        this.branches = [];
        this.branch = '';
        this.batches = [];
        this.batch = '';
    }
    AdminStudentComponent.prototype.ngOnInit = function () {
        var _this = this;
        var branchData = { api: "getBranches", data: {} };
        this.httpPostService.httpPost(branchData).subscribe(function (val) {
            _this.branches = val;
            if (_this.branches.length > 0) {
                var studentData = { api: "getStudents", data: {} };
                _this.httpPostService.httpPost(studentData).subscribe(function (val) {
                    _this.allStudents = val;
                    _this.loading = false;
                }, function (error) {
                });
            }
        }, function (error) {
        });
    };
    AdminStudentComponent.prototype.onNewStudent = function () {
        this.loading = true;
        this.router.navigate(['new'], { relativeTo: this.route, skipLocationChange: true });
    };
    AdminStudentComponent.prototype.onSelectBranch = function (id) {
        if (id !== '') {
            this.branch = id;
            this.batches = this.branches.find(function (branch) { return (branch._id === id); }).batch;
            this.noStudent = 'Please Select ' + this.weekType + ' Batch';
        }
    };
    AdminStudentComponent.prototype.onSelectBatchName = function (batch) {
        if (batch !== '') {
            this.batch = batch;
            this.searchStudent();
        }
    };
    AdminStudentComponent.prototype.onSelectBatchType = function (weekType) {
        if (this.batch !== '') {
            this.weekType = weekType;
            this.searchStudent();
        }
    };
    AdminStudentComponent.prototype.searchStudent = function () {
        var _this = this;
        this.loading = true;
        var students = [];
        this.allStudents.forEach(function (student) {
            if ((student.branch === _this.branch) && (student.batchName === _this.batch) && (student.batch === _this.weekType)) {
                students.push(student);
            }
        });
        if (students.length > 0) {
            this.students = students;
        }
        else {
            this.noStudent = "No Students Found";
            this.students = [];
        }
        this.loading = false;
    };
    AdminStudentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admin-student',
            template: __webpack_require__(/*! ./admin-student.component.html */ "./src/app/admin/admin-student/admin-student.component.html"),
            styles: [__webpack_require__(/*! ./admin-student.component.css */ "./src/app/admin/admin-student/admin-student.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_httpPost_service__WEBPACK_IMPORTED_MODULE_3__["HttpPostService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
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

module.exports = "h3 {\r\n    font-size: 150%;\r\n}\r\n\r\nhr {\r\n    border: 1px solid #e67e22;\r\n    margin: 5px 0;\r\n}\r\n\r\na {\r\n    color: inherit;\r\n    text-decoration: none;\r\n    transition: all 0.3s;\r\n}\r\n\r\n/* ---------------------------------------------------\r\n    SIDEBAR STYLE\r\n----------------------------------------------------- */\r\n\r\n.wrapper {\r\n    display: flex;\r\n    width: 100%;\r\n    align-items: stretch;\r\n}\r\n\r\n.sidebar {\r\n    width: 250px;\r\n    min-height: 78.3vh;\r\n    background-color: #e67e22;\r\n    color: #fff;\r\n    font-size: 90%;\r\n    text-transform: uppercase;\r\n    transition: all 0.3s;\r\n}\r\n\r\n.sidebar.hide {\r\n    margin-left: -250px;\r\n}\r\n\r\n.sidebar li {\r\n    border-bottom: 1px solid #d47f35;\r\n}\r\n\r\n.sidebar ul li a {\r\n    padding: 10px;\r\n    font-size: 1.1em;\r\n    display: block;\r\n}\r\n\r\n.sidebar ul li a:hover {\r\n    background-color: #f0f0f0;\r\n    color: #e67e22;\r\n}\r\n\r\na[data-toggle=\"collapse\"] {\r\n    position: relative;\r\n}\r\n\r\n.dropdown-toggle::after {\r\n    display: block;\r\n    position: absolute;\r\n    top: 50%;\r\n    right: 20px;\r\n    -webkit-transform: translateY(-50%);\r\n            transform: translateY(-50%);\r\n}\r\n\r\nul ul a {\r\n    font-size: 0.9em !important;\r\n    padding-left: 30px !important;\r\n    /* background-color: #dd7316; */\r\n}\r\n\r\n.toggle-btn {\r\n  height: 35px;\r\n  outline: none;\r\n  border: 1px solid transparent;\r\n  border-radius: 50px;\r\n  background-color: #e67e22;\r\n  padding: 3px 12px;\r\n  color: #fff;\r\n  margin: 0 auto;\r\n  transition: background-color 0.2s, color 0.2s;\r\n}\r\n\r\n.toggle-btn:hover {\r\n    background-color: #f0f0f0;\r\n    color: #e67e22;\r\n}\r\n\r\n.active {\r\n    background-color: #f0f0f0;\r\n    color: #e67e22;\r\n}\r\n\r\n/* @media(width: 230px */\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vYWRtaW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxxQkFBcUI7SUFDckIsb0JBQW9CO0FBQ3hCOztBQUNBOzt1REFFdUQ7O0FBRXZEO0lBQ0ksYUFBYTtJQUNiLFdBQVc7SUFDWCxvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLHlCQUF5QjtJQUN6QixXQUFXO0lBQ1gsY0FBYztJQUNkLHlCQUF5QjtJQUN6QixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxnQ0FBZ0M7QUFDcEM7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsY0FBYztBQUNsQjs7QUFHQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFdBQVc7SUFDWCxtQ0FBMkI7WUFBM0IsMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksMkJBQTJCO0lBQzNCLDZCQUE2QjtJQUM3QiwrQkFBK0I7QUFDbkM7O0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLDZCQUE2QjtFQUM3QixtQkFBbUI7RUFDbkIseUJBQXlCO0VBQ3pCLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gsY0FBYztFQUNkLDZDQUE2QztBQUMvQzs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixjQUFjO0FBQ2xCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGNBQWM7QUFDbEI7O0FBRUEsd0JBQXdCIiwiZmlsZSI6InNyYy9hcHAvYWRtaW4vYWRtaW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImgzIHtcclxuICAgIGZvbnQtc2l6ZTogMTUwJTtcclxufVxyXG5cclxuaHIge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2U2N2UyMjtcclxuICAgIG1hcmdpbjogNXB4IDA7XHJcbn1cclxuXHJcbmEge1xyXG4gICAgY29sb3I6IGluaGVyaXQ7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcclxufVxyXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgIFNJREVCQVIgU1RZTEVcclxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuXHJcbi53cmFwcGVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xyXG59XHJcblxyXG4uc2lkZWJhciB7XHJcbiAgICB3aWR0aDogMjUwcHg7XHJcbiAgICBtaW4taGVpZ2h0OiA3OC4zdmg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTY3ZTIyO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBmb250LXNpemU6IDkwJTtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcclxufVxyXG5cclxuLnNpZGViYXIuaGlkZSB7XHJcbiAgICBtYXJnaW4tbGVmdDogLTI1MHB4O1xyXG59XHJcblxyXG4uc2lkZWJhciBsaSB7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2Q0N2YzNTtcclxufVxyXG5cclxuLnNpZGViYXIgdWwgbGkgYSB7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgZm9udC1zaXplOiAxLjFlbTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4uc2lkZWJhciB1bCBsaSBhOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMGYwZjA7XHJcbiAgICBjb2xvcjogI2U2N2UyMjtcclxufVxyXG5cclxuXHJcbmFbZGF0YS10b2dnbGU9XCJjb2xsYXBzZVwiXSB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5kcm9wZG93bi10b2dnbGU6OmFmdGVyIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICByaWdodDogMjBweDtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxufVxyXG5cclxudWwgdWwgYSB7XHJcbiAgICBmb250LXNpemU6IDAuOWVtICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDMwcHggIWltcG9ydGFudDtcclxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6ICNkZDczMTY7ICovXHJcbn1cclxuXHJcbi50b2dnbGUtYnRuIHtcclxuICBoZWlnaHQ6IDM1cHg7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlNjdlMjI7XHJcbiAgcGFkZGluZzogM3B4IDEycHg7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjJzLCBjb2xvciAwLjJzO1xyXG59XHJcblxyXG4udG9nZ2xlLWJ0bjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGYwO1xyXG4gICAgY29sb3I6ICNlNjdlMjI7XHJcbn1cclxuXHJcbi5hY3RpdmUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjBmMDtcclxuICAgIGNvbG9yOiAjZTY3ZTIyO1xyXG59XHJcblxyXG4vKiBAbWVkaWEod2lkdGg6IDIzMHB4ICovIl19 */"

/***/ }),

/***/ "./src/app/admin/admin.component.html":
/*!********************************************!*\
  !*** ./src/app/admin/admin.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n  <!-- Sidebar  -->\n  <nav class=\"sidebar\" [ngClass]=\"{'hide' : sidenav}\">\n    \n    <ul class=\"list-unstyled components\">\n\n      <li>\n        <a routerLink=\"/admin/dashboard\" routerLinkActive=\"active\" skipLocationChange>Dashboard</a>\n      </li>\n      \n      <li>\n        <a href=\"#aboutSubmenu\" data-toggle=\"collapse\" aria-expanded=\"false\" class=\"dropdown-toggle\">About</a>\n        <ul class=\"collapse list-unstyled\" id=\"aboutSubmenu\">\n          <li>\n            <a routerLink=\"/admin/about/aim\" routerLinkActive=\"active\" skipLocationChange>Aim</a>\n          </li>\n           <li>\n            <a routerLink=\"/admin/about/history\" routerLinkActive=\"active\" skipLocationChange>History</a>\n          </li>\n          <li>\n            <a routerLink=\"/admin/about/philosophy\" routerLinkActive=\"active\" skipLocationChange>Philosophy</a>\n          </li>\n        </ul>\n      </li>\n\n      <li>\n        <a routerLink=\"/admin/faculty\" routerLinkActive=\"active\" skipLocationChange>Faculty</a>\n      </li>\n      \n      <li>\n        <a routerLink=\"/admin/branch\" routerLinkActive=\"active\" skipLocationChange>Branch</a>\n      </li>\n      \n      <li>\n        <a routerLink=\"/admin/student\" routerLinkActive=\"active\" skipLocationChange>Student</a>\n      </li>\n      <li>\n\n        <a routerLink=\"/admin/attendance\" routerLinkActive=\"active\" skipLocationChange>Attendance</a>\n      </li>\n\n      <li>\n        <a routerLink=\"/admin/gallery\" routerLinkActive=\"active\" skipLocationChange>Gallery</a>\n      </li>\n\n      <li>\n        <a routerLink=\"/admin/exams\" routerLinkActive=\"active\" skipLocationChange>Exams</a>\n      </li>\n\n      <li>\n        <a routerLink=\"/admin/article\" routerLinkActive=\"active\" skipLocationChange>Article</a>\n      </li>\n\n      <li>\n        <a routerLink=\"/admin/enquiry\" routerLinkActive=\"active\" skipLocationChange>Enquiries</a>\n      </li>\n    </ul>\n\n  </nav>\n  \n  <!-- Page Content  -->\n  <button type=\"button\" class=\"toggle-btn m-1\" (click)=\"toggle()\">\n    <i class=\"fa fa-align-justify\"></i>\n  </button>\n  <div class=\"container\">\n    <div class=\"row m-2\">\n      <div class=\"col-12\">\n        <router-outlet></router-outlet>\n      </div>\n    </div>\n  </div>\n</div>"

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var AdminComponent = /** @class */ (function () {
    function AdminComponent(router, route) {
        this.router = router;
        this.route = route;
        this.sidenav = false;
    }
    AdminComponent.prototype.ngOnInit = function () {
    };
    AdminComponent.prototype.toggle = function () {
        this.sidenav = !this.sidenav;
    };
    AdminComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admin',
            template: __webpack_require__(/*! ./admin.component.html */ "./src/app/admin/admin.component.html"),
            styles: [__webpack_require__(/*! ./admin.component.css */ "./src/app/admin/admin.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
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

module.exports = "\r\n  <header class=\"header-bg\">\r\n    <app-header></app-header>\r\n  </header>\r\n  <div class=\"\">\r\n    <router-outlet></router-outlet>\r\n  </div>\r\n  <footer class=\"footer-bg\">\r\n    <app-footer></app-footer>\r\n  </footer>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
/* harmony import */ var angular2_image_gallery__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular2-image-gallery */ "./node_modules/angular2-image-gallery/fesm5/angular2-image-gallery.js");
/* harmony import */ var _app_routes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.routes.module */ "./src/app/app.routes.module.ts");
/* harmony import */ var _auth_auth_guard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./auth/auth.guard */ "./src/app/auth/auth.guard.ts");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _content_content_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./content/content.component */ "./src/app/content/content.component.ts");
/* harmony import */ var _content_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./content/home-page/home-page.component */ "./src/app/content/home-page/home-page.component.ts");
/* harmony import */ var _content_about_page_about_page_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./content/about-page/about-page.component */ "./src/app/content/about-page/about-page.component.ts");
/* harmony import */ var _content_contact_us_page_contact_us_page_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./content/contact-us-page/contact-us-page.component */ "./src/app/content/contact-us-page/contact-us-page.component.ts");
/* harmony import */ var _content_gallery_page_gallery_page_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./content/gallery-page/gallery-page.component */ "./src/app/content/gallery-page/gallery-page.component.ts");
/* harmony import */ var _content_branches_page_branches_page_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./content/branches-page/branches-page.component */ "./src/app/content/branches-page/branches-page.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _login_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./login/forgot-password/forgot-password.component */ "./src/app/login/forgot-password/forgot-password.component.ts");
/* harmony import */ var _login_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./login/reset-password/reset-password.component */ "./src/app/login/reset-password/reset-password.component.ts");
/* harmony import */ var _login_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./login/change-password/change-password.component */ "./src/app/login/change-password/change-password.component.ts");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./admin/admin.component */ "./src/app/admin/admin.component.ts");
/* harmony import */ var _admin_admin_dashboard_admin_dashboard_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./admin/admin-dashboard/admin-dashboard.component */ "./src/app/admin/admin-dashboard/admin-dashboard.component.ts");
/* harmony import */ var _admin_admin_about_admin_about_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./admin/admin-about/admin-about.component */ "./src/app/admin/admin-about/admin-about.component.ts");
/* harmony import */ var _admin_admin_about_admin_edit_aim_admin_edit_aim_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./admin/admin-about/admin-edit-aim/admin-edit-aim.component */ "./src/app/admin/admin-about/admin-edit-aim/admin-edit-aim.component.ts");
/* harmony import */ var _admin_admin_about_admin_history_admin_history_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./admin/admin-about/admin-history/admin-history.component */ "./src/app/admin/admin-about/admin-history/admin-history.component.ts");
/* harmony import */ var _admin_admin_about_admin_edit_history_admin_edit_history_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./admin/admin-about/admin-edit-history/admin-edit-history.component */ "./src/app/admin/admin-about/admin-edit-history/admin-edit-history.component.ts");
/* harmony import */ var _admin_admin_about_admin_philosophy_admin_philosophy_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./admin/admin-about/admin-philosophy/admin-philosophy.component */ "./src/app/admin/admin-about/admin-philosophy/admin-philosophy.component.ts");
/* harmony import */ var _admin_admin_about_admin_edit_philosophy_admin_edit_philosophy_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./admin/admin-about/admin-edit-philosophy/admin-edit-philosophy.component */ "./src/app/admin/admin-about/admin-edit-philosophy/admin-edit-philosophy.component.ts");
/* harmony import */ var _admin_admin_article_admin_article_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./admin/admin-article/admin-article.component */ "./src/app/admin/admin-article/admin-article.component.ts");
/* harmony import */ var _admin_admin_article_admin_add_article_admin_add_article_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./admin/admin-article/admin-add-article/admin-add-article.component */ "./src/app/admin/admin-article/admin-add-article/admin-add-article.component.ts");
/* harmony import */ var _admin_admin_article_admin_show_article_admin_show_article_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./admin/admin-article/admin-show-article/admin-show-article.component */ "./src/app/admin/admin-article/admin-show-article/admin-show-article.component.ts");
/* harmony import */ var _admin_admin_article_admin_edit_article_admin_edit_article_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./admin/admin-article/admin-edit-article/admin-edit-article.component */ "./src/app/admin/admin-article/admin-edit-article/admin-edit-article.component.ts");
/* harmony import */ var _admin_admin_branch_admin_branch_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./admin/admin-branch/admin-branch.component */ "./src/app/admin/admin-branch/admin-branch.component.ts");
/* harmony import */ var _admin_admin_branch_admin_add_branch_admin_add_branch_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./admin/admin-branch/admin-add-branch/admin-add-branch.component */ "./src/app/admin/admin-branch/admin-add-branch/admin-add-branch.component.ts");
/* harmony import */ var _admin_admin_branch_admin_show_branch_admin_show_branch_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./admin/admin-branch/admin-show-branch/admin-show-branch.component */ "./src/app/admin/admin-branch/admin-show-branch/admin-show-branch.component.ts");
/* harmony import */ var _admin_admin_branch_admin_edit_branch_admin_edit_branch_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./admin/admin-branch/admin-edit-branch/admin-edit-branch.component */ "./src/app/admin/admin-branch/admin-edit-branch/admin-edit-branch.component.ts");
/* harmony import */ var _admin_admin_enquiry_admin_enquiry_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./admin/admin-enquiry/admin-enquiry.component */ "./src/app/admin/admin-enquiry/admin-enquiry.component.ts");
/* harmony import */ var _admin_admin_enquiry_admin_show_enquiry_admin_show_enquiry_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./admin/admin-enquiry/admin-show-enquiry/admin-show-enquiry.component */ "./src/app/admin/admin-enquiry/admin-show-enquiry/admin-show-enquiry.component.ts");
/* harmony import */ var _admin_admin_enquiry_admin_reply_enquiry_admin_reply_enquiry_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./admin/admin-enquiry/admin-reply-enquiry/admin-reply-enquiry.component */ "./src/app/admin/admin-enquiry/admin-reply-enquiry/admin-reply-enquiry.component.ts");
/* harmony import */ var _admin_admin_faculty_admin_faculty_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./admin/admin-faculty/admin-faculty.component */ "./src/app/admin/admin-faculty/admin-faculty.component.ts");
/* harmony import */ var _admin_admin_faculty_admin_add_faculty_admin_add_faculty_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./admin/admin-faculty/admin-add-faculty/admin-add-faculty.component */ "./src/app/admin/admin-faculty/admin-add-faculty/admin-add-faculty.component.ts");
/* harmony import */ var _admin_admin_faculty_admin_show_faculty_admin_show_faculty_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./admin/admin-faculty/admin-show-faculty/admin-show-faculty.component */ "./src/app/admin/admin-faculty/admin-show-faculty/admin-show-faculty.component.ts");
/* harmony import */ var _admin_admin_faculty_admin_edit_faculty_admin_edit_faculty_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./admin/admin-faculty/admin-edit-faculty/admin-edit-faculty.component */ "./src/app/admin/admin-faculty/admin-edit-faculty/admin-edit-faculty.component.ts");
/* harmony import */ var _admin_admin_exam_admin_exam_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./admin/admin-exam/admin-exam.component */ "./src/app/admin/admin-exam/admin-exam.component.ts");
/* harmony import */ var _admin_admin_gallary_admin_gallary_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./admin/admin-gallary/admin-gallary.component */ "./src/app/admin/admin-gallary/admin-gallary.component.ts");
/* harmony import */ var _admin_admin_gallary_admin_add_photos_admin_add_photos_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./admin/admin-gallary/admin-add-photos/admin-add-photos.component */ "./src/app/admin/admin-gallary/admin-add-photos/admin-add-photos.component.ts");
/* harmony import */ var _admin_admin_attendance_admin_attendance_component__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./admin/admin-attendance/admin-attendance.component */ "./src/app/admin/admin-attendance/admin-attendance.component.ts");
/* harmony import */ var _admin_admin_student_admin_student_component__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./admin/admin-student/admin-student.component */ "./src/app/admin/admin-student/admin-student.component.ts");
/* harmony import */ var _admin_admin_student_admin_add_student_admin_add_student_component__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./admin/admin-student/admin-add-student/admin-add-student.component */ "./src/app/admin/admin-student/admin-add-student/admin-add-student.component.ts");
/* harmony import */ var _admin_admin_student_admin_show_student_admin_show_student_component__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./admin/admin-student/admin-show-student/admin-show-student.component */ "./src/app/admin/admin-student/admin-show-student/admin-show-student.component.ts");
/* harmony import */ var _admin_admin_student_admin_edit_student_admin_edit_student_component__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ./admin/admin-student/admin-edit-student/admin-edit-student.component */ "./src/app/admin/admin-student/admin-edit-student/admin-edit-student.component.ts");
/* harmony import */ var _admin_admin_student_admin_student_receipts_admin_student_receipts_component__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ./admin/admin-student/admin-student-receipts/admin-student-receipts.component */ "./src/app/admin/admin-student/admin-student-receipts/admin-student-receipts.component.ts");
/* harmony import */ var _admin_admin_student_admin_student_generate_receipt_admin_student_generate_receipt_component__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ./admin/admin-student/admin-student-generate-receipt/admin-student-generate-receipt.component */ "./src/app/admin/admin-student/admin-student-generate-receipt/admin-student-generate-receipt.component.ts");
/* harmony import */ var _errors_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ./errors/page-not-found/page-not-found.component */ "./src/app/errors/page-not-found/page-not-found.component.ts");
/* harmony import */ var _errors_server_error_server_error_component__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! ./errors/server-error/server-error.component */ "./src/app/errors/server-error/server-error.component.ts");
/* harmony import */ var _student_student_component__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! ./student/student.component */ "./src/app/student/student.component.ts");
/* harmony import */ var _student_student_dashboard_student_dashboard_component__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! ./student/student-dashboard/student-dashboard.component */ "./src/app/student/student-dashboard/student-dashboard.component.ts");
/* harmony import */ var _student_student_attendance_student_attendance_component__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! ./student/student-attendance/student-attendance.component */ "./src/app/student/student-attendance/student-attendance.component.ts");
/* harmony import */ var _student_student_receipts_student_receipts_component__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! ./student/student-receipts/student-receipts.component */ "./src/app/student/student-receipts/student-receipts.component.ts");
/* harmony import */ var _faculty_faculty_component__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! ./faculty/faculty.component */ "./src/app/faculty/faculty.component.ts");
/* harmony import */ var _validators_form_validator__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(/*! ./validators/form.validator */ "./src/app/validators/form.validator.ts");
/* harmony import */ var _services_httpPost_service__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(/*! ./services/httpPost.service */ "./src/app/services/httpPost.service.ts");
/* harmony import */ var _student_student_receipts_student_show_receipt_student_show_receipt_component__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(/*! ./student/student-receipts/student-show-receipt/student-show-receipt.component */ "./src/app/student/student-receipts/student-show-receipt/student-show-receipt.component.ts");


//MODULES





//ROUTES

//GUARDS

//SERVICES

//COMPONENTS
























































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_11__["HeaderComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_12__["FooterComponent"],
                _content_content_component__WEBPACK_IMPORTED_MODULE_13__["ContentComponent"],
                _content_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_14__["HomePageComponent"],
                _content_about_page_about_page_component__WEBPACK_IMPORTED_MODULE_15__["AboutPageComponent"],
                _content_contact_us_page_contact_us_page_component__WEBPACK_IMPORTED_MODULE_16__["ContactUsPageComponent"],
                _content_branches_page_branches_page_component__WEBPACK_IMPORTED_MODULE_18__["BranchesPageComponent"],
                _content_gallery_page_gallery_page_component__WEBPACK_IMPORTED_MODULE_17__["GalleryPageComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_19__["LoginComponent"],
                _login_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_20__["ForgotPasswordComponent"],
                _login_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_21__["ResetPasswordComponent"],
                _login_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_22__["ChangePasswordComponent"],
                _admin_admin_component__WEBPACK_IMPORTED_MODULE_23__["AdminComponent"],
                _admin_admin_dashboard_admin_dashboard_component__WEBPACK_IMPORTED_MODULE_24__["AdminDashboardComponent"],
                _admin_admin_about_admin_about_component__WEBPACK_IMPORTED_MODULE_25__["AdminAboutComponent"],
                _admin_admin_about_admin_edit_aim_admin_edit_aim_component__WEBPACK_IMPORTED_MODULE_26__["AdminEditAimComponent"],
                _admin_admin_about_admin_history_admin_history_component__WEBPACK_IMPORTED_MODULE_27__["AdminHistoryComponent"],
                _admin_admin_about_admin_edit_history_admin_edit_history_component__WEBPACK_IMPORTED_MODULE_28__["AdminEditHistoryComponent"],
                _admin_admin_about_admin_philosophy_admin_philosophy_component__WEBPACK_IMPORTED_MODULE_29__["AdminPhilosophyComponent"],
                _admin_admin_about_admin_edit_philosophy_admin_edit_philosophy_component__WEBPACK_IMPORTED_MODULE_30__["AdminEditPhilosophyComponent"],
                _admin_admin_article_admin_article_component__WEBPACK_IMPORTED_MODULE_31__["AdminArticleComponent"],
                _admin_admin_article_admin_add_article_admin_add_article_component__WEBPACK_IMPORTED_MODULE_32__["AdminAddArticleComponent"],
                _admin_admin_article_admin_edit_article_admin_edit_article_component__WEBPACK_IMPORTED_MODULE_34__["AdminEditArticleComponent"],
                _admin_admin_article_admin_show_article_admin_show_article_component__WEBPACK_IMPORTED_MODULE_33__["AdminShowArticleComponent"],
                _admin_admin_branch_admin_branch_component__WEBPACK_IMPORTED_MODULE_35__["AdminBranchComponent"],
                _admin_admin_branch_admin_add_branch_admin_add_branch_component__WEBPACK_IMPORTED_MODULE_36__["AdminAddBranchComponent"],
                _admin_admin_branch_admin_edit_branch_admin_edit_branch_component__WEBPACK_IMPORTED_MODULE_38__["AdminEditBranchComponent"],
                _admin_admin_branch_admin_show_branch_admin_show_branch_component__WEBPACK_IMPORTED_MODULE_37__["AdminShowBranchComponent"],
                _admin_admin_enquiry_admin_enquiry_component__WEBPACK_IMPORTED_MODULE_39__["AdminEnquiryComponent"],
                _admin_admin_enquiry_admin_show_enquiry_admin_show_enquiry_component__WEBPACK_IMPORTED_MODULE_40__["AdminShowEnquiryComponent"],
                _admin_admin_enquiry_admin_reply_enquiry_admin_reply_enquiry_component__WEBPACK_IMPORTED_MODULE_41__["AdminReplyEnquiryComponent"],
                _admin_admin_exam_admin_exam_component__WEBPACK_IMPORTED_MODULE_46__["AdminExamComponent"],
                _admin_admin_gallary_admin_gallary_component__WEBPACK_IMPORTED_MODULE_47__["AdminGallaryComponent"],
                _admin_admin_gallary_admin_add_photos_admin_add_photos_component__WEBPACK_IMPORTED_MODULE_48__["AdminAddPhotosComponent"],
                _admin_admin_attendance_admin_attendance_component__WEBPACK_IMPORTED_MODULE_49__["AdminAttendanceComponent"],
                _admin_admin_faculty_admin_faculty_component__WEBPACK_IMPORTED_MODULE_42__["AdminFacultyComponent"],
                _admin_admin_faculty_admin_add_faculty_admin_add_faculty_component__WEBPACK_IMPORTED_MODULE_43__["AdminAddFacultyComponent"],
                _admin_admin_faculty_admin_show_faculty_admin_show_faculty_component__WEBPACK_IMPORTED_MODULE_44__["AdminShowFacultyComponent"],
                _admin_admin_faculty_admin_edit_faculty_admin_edit_faculty_component__WEBPACK_IMPORTED_MODULE_45__["AdminEditFacultyComponent"],
                _admin_admin_student_admin_student_component__WEBPACK_IMPORTED_MODULE_50__["AdminStudentComponent"],
                _admin_admin_student_admin_add_student_admin_add_student_component__WEBPACK_IMPORTED_MODULE_51__["AdminAddStudentComponent"],
                _admin_admin_student_admin_show_student_admin_show_student_component__WEBPACK_IMPORTED_MODULE_52__["AdminShowStudentComponent"],
                _admin_admin_student_admin_edit_student_admin_edit_student_component__WEBPACK_IMPORTED_MODULE_53__["AdminEditStudentComponent"],
                _admin_admin_student_admin_student_receipts_admin_student_receipts_component__WEBPACK_IMPORTED_MODULE_54__["AdminStudentReceiptsComponent"],
                _admin_admin_student_admin_student_generate_receipt_admin_student_generate_receipt_component__WEBPACK_IMPORTED_MODULE_55__["AdminStudentGenerateReceiptComponent"],
                _errors_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_56__["PageNotFoundComponent"],
                _errors_server_error_server_error_component__WEBPACK_IMPORTED_MODULE_57__["ServerErrorComponent"],
                _faculty_faculty_component__WEBPACK_IMPORTED_MODULE_62__["FacultyComponent"],
                _student_student_component__WEBPACK_IMPORTED_MODULE_58__["StudentComponent"],
                _student_student_dashboard_student_dashboard_component__WEBPACK_IMPORTED_MODULE_59__["StudentDashboardComponent"],
                _student_student_receipts_student_receipts_component__WEBPACK_IMPORTED_MODULE_61__["StudentReceiptsComponent"],
                _student_student_attendance_student_attendance_component__WEBPACK_IMPORTED_MODULE_60__["StudentAttendanceComponent"],
                _student_student_receipts_student_show_receipt_student_show_receipt_component__WEBPACK_IMPORTED_MODULE_65__["StudentShowReceiptComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _app_routes_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutes"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                angular2_image_gallery__WEBPACK_IMPORTED_MODULE_6__["Angular2ImageGalleryModule"],
                _agm_core__WEBPACK_IMPORTED_MODULE_5__["AgmCoreModule"].forRoot({
                    apiKey: 'AIzaSyCkUOdZ5y7hMm0yrcCQoCvLwzdM6M8s5qk'
                })
            ],
            providers: [
                _services_httpPost_service__WEBPACK_IMPORTED_MODULE_64__["HttpPostService"],
                _auth_auth_guard__WEBPACK_IMPORTED_MODULE_8__["LoginAuthGuard"],
                _auth_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AdminAuthGuard"],
                _auth_auth_guard__WEBPACK_IMPORTED_MODULE_8__["FacultuAuthGuard"],
                _auth_auth_guard__WEBPACK_IMPORTED_MODULE_8__["StudentAuthGuard"],
                _auth_auth_service__WEBPACK_IMPORTED_MODULE_9__["AuthService"],
                _validators_form_validator__WEBPACK_IMPORTED_MODULE_63__["FormValidator"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]]
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
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./admin/admin.component */ "./src/app/admin/admin.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _login_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login/forgot-password/forgot-password.component */ "./src/app/login/forgot-password/forgot-password.component.ts");
/* harmony import */ var _login_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login/reset-password/reset-password.component */ "./src/app/login/reset-password/reset-password.component.ts");
/* harmony import */ var _login_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./login/change-password/change-password.component */ "./src/app/login/change-password/change-password.component.ts");
/* harmony import */ var _admin_admin_dashboard_admin_dashboard_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./admin/admin-dashboard/admin-dashboard.component */ "./src/app/admin/admin-dashboard/admin-dashboard.component.ts");
/* harmony import */ var _admin_admin_about_admin_about_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./admin/admin-about/admin-about.component */ "./src/app/admin/admin-about/admin-about.component.ts");
/* harmony import */ var _admin_admin_about_admin_edit_aim_admin_edit_aim_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./admin/admin-about/admin-edit-aim/admin-edit-aim.component */ "./src/app/admin/admin-about/admin-edit-aim/admin-edit-aim.component.ts");
/* harmony import */ var _admin_admin_about_admin_history_admin_history_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./admin/admin-about/admin-history/admin-history.component */ "./src/app/admin/admin-about/admin-history/admin-history.component.ts");
/* harmony import */ var _admin_admin_about_admin_edit_history_admin_edit_history_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./admin/admin-about/admin-edit-history/admin-edit-history.component */ "./src/app/admin/admin-about/admin-edit-history/admin-edit-history.component.ts");
/* harmony import */ var _admin_admin_about_admin_philosophy_admin_philosophy_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./admin/admin-about/admin-philosophy/admin-philosophy.component */ "./src/app/admin/admin-about/admin-philosophy/admin-philosophy.component.ts");
/* harmony import */ var _admin_admin_about_admin_edit_philosophy_admin_edit_philosophy_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./admin/admin-about/admin-edit-philosophy/admin-edit-philosophy.component */ "./src/app/admin/admin-about/admin-edit-philosophy/admin-edit-philosophy.component.ts");
/* harmony import */ var _admin_admin_article_admin_article_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./admin/admin-article/admin-article.component */ "./src/app/admin/admin-article/admin-article.component.ts");
/* harmony import */ var _admin_admin_article_admin_add_article_admin_add_article_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./admin/admin-article/admin-add-article/admin-add-article.component */ "./src/app/admin/admin-article/admin-add-article/admin-add-article.component.ts");
/* harmony import */ var _admin_admin_article_admin_show_article_admin_show_article_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./admin/admin-article/admin-show-article/admin-show-article.component */ "./src/app/admin/admin-article/admin-show-article/admin-show-article.component.ts");
/* harmony import */ var _admin_admin_article_admin_edit_article_admin_edit_article_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./admin/admin-article/admin-edit-article/admin-edit-article.component */ "./src/app/admin/admin-article/admin-edit-article/admin-edit-article.component.ts");
/* harmony import */ var _admin_admin_branch_admin_branch_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./admin/admin-branch/admin-branch.component */ "./src/app/admin/admin-branch/admin-branch.component.ts");
/* harmony import */ var _admin_admin_branch_admin_add_branch_admin_add_branch_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./admin/admin-branch/admin-add-branch/admin-add-branch.component */ "./src/app/admin/admin-branch/admin-add-branch/admin-add-branch.component.ts");
/* harmony import */ var _admin_admin_branch_admin_show_branch_admin_show_branch_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./admin/admin-branch/admin-show-branch/admin-show-branch.component */ "./src/app/admin/admin-branch/admin-show-branch/admin-show-branch.component.ts");
/* harmony import */ var _admin_admin_branch_admin_edit_branch_admin_edit_branch_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./admin/admin-branch/admin-edit-branch/admin-edit-branch.component */ "./src/app/admin/admin-branch/admin-edit-branch/admin-edit-branch.component.ts");
/* harmony import */ var _admin_admin_enquiry_admin_enquiry_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./admin/admin-enquiry/admin-enquiry.component */ "./src/app/admin/admin-enquiry/admin-enquiry.component.ts");
/* harmony import */ var _admin_admin_enquiry_admin_show_enquiry_admin_show_enquiry_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./admin/admin-enquiry/admin-show-enquiry/admin-show-enquiry.component */ "./src/app/admin/admin-enquiry/admin-show-enquiry/admin-show-enquiry.component.ts");
/* harmony import */ var _admin_admin_enquiry_admin_reply_enquiry_admin_reply_enquiry_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./admin/admin-enquiry/admin-reply-enquiry/admin-reply-enquiry.component */ "./src/app/admin/admin-enquiry/admin-reply-enquiry/admin-reply-enquiry.component.ts");
/* harmony import */ var _admin_admin_exam_admin_exam_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./admin/admin-exam/admin-exam.component */ "./src/app/admin/admin-exam/admin-exam.component.ts");
/* harmony import */ var _admin_admin_gallary_admin_gallary_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./admin/admin-gallary/admin-gallary.component */ "./src/app/admin/admin-gallary/admin-gallary.component.ts");
/* harmony import */ var _admin_admin_gallary_admin_add_photos_admin_add_photos_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./admin/admin-gallary/admin-add-photos/admin-add-photos.component */ "./src/app/admin/admin-gallary/admin-add-photos/admin-add-photos.component.ts");
/* harmony import */ var _admin_admin_attendance_admin_attendance_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./admin/admin-attendance/admin-attendance.component */ "./src/app/admin/admin-attendance/admin-attendance.component.ts");
/* harmony import */ var _admin_admin_faculty_admin_faculty_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./admin/admin-faculty/admin-faculty.component */ "./src/app/admin/admin-faculty/admin-faculty.component.ts");
/* harmony import */ var _admin_admin_faculty_admin_add_faculty_admin_add_faculty_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./admin/admin-faculty/admin-add-faculty/admin-add-faculty.component */ "./src/app/admin/admin-faculty/admin-add-faculty/admin-add-faculty.component.ts");
/* harmony import */ var _admin_admin_faculty_admin_show_faculty_admin_show_faculty_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./admin/admin-faculty/admin-show-faculty/admin-show-faculty.component */ "./src/app/admin/admin-faculty/admin-show-faculty/admin-show-faculty.component.ts");
/* harmony import */ var _admin_admin_faculty_admin_edit_faculty_admin_edit_faculty_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./admin/admin-faculty/admin-edit-faculty/admin-edit-faculty.component */ "./src/app/admin/admin-faculty/admin-edit-faculty/admin-edit-faculty.component.ts");
/* harmony import */ var _admin_admin_student_admin_student_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./admin/admin-student/admin-student.component */ "./src/app/admin/admin-student/admin-student.component.ts");
/* harmony import */ var _admin_admin_student_admin_add_student_admin_add_student_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./admin/admin-student/admin-add-student/admin-add-student.component */ "./src/app/admin/admin-student/admin-add-student/admin-add-student.component.ts");
/* harmony import */ var _admin_admin_student_admin_show_student_admin_show_student_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./admin/admin-student/admin-show-student/admin-show-student.component */ "./src/app/admin/admin-student/admin-show-student/admin-show-student.component.ts");
/* harmony import */ var _admin_admin_student_admin_edit_student_admin_edit_student_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./admin/admin-student/admin-edit-student/admin-edit-student.component */ "./src/app/admin/admin-student/admin-edit-student/admin-edit-student.component.ts");
/* harmony import */ var _errors_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./errors/page-not-found/page-not-found.component */ "./src/app/errors/page-not-found/page-not-found.component.ts");
/* harmony import */ var _errors_server_error_server_error_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./errors/server-error/server-error.component */ "./src/app/errors/server-error/server-error.component.ts");
/* harmony import */ var _admin_admin_student_admin_student_receipts_admin_student_receipts_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./admin/admin-student/admin-student-receipts/admin-student-receipts.component */ "./src/app/admin/admin-student/admin-student-receipts/admin-student-receipts.component.ts");
/* harmony import */ var _admin_admin_student_admin_student_generate_receipt_admin_student_generate_receipt_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./admin/admin-student/admin-student-generate-receipt/admin-student-generate-receipt.component */ "./src/app/admin/admin-student/admin-student-generate-receipt/admin-student-generate-receipt.component.ts");
/* harmony import */ var _auth_auth_guard__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./auth/auth.guard */ "./src/app/auth/auth.guard.ts");
/* harmony import */ var _student_student_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./student/student.component */ "./src/app/student/student.component.ts");
/* harmony import */ var _student_student_dashboard_student_dashboard_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./student/student-dashboard/student-dashboard.component */ "./src/app/student/student-dashboard/student-dashboard.component.ts");
/* harmony import */ var _student_student_attendance_student_attendance_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./student/student-attendance/student-attendance.component */ "./src/app/student/student-attendance/student-attendance.component.ts");
/* harmony import */ var _student_student_receipts_student_receipts_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./student/student-receipts/student-receipts.component */ "./src/app/student/student-receipts/student-receipts.component.ts");
/* harmony import */ var _student_student_receipts_student_show_receipt_student_show_receipt_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./student/student-receipts/student-show-receipt/student-show-receipt.component */ "./src/app/student/student-receipts/student-show-receipt/student-show-receipt.component.ts");
/* harmony import */ var _faculty_faculty_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./faculty/faculty.component */ "./src/app/faculty/faculty.component.ts");
/* harmony import */ var _content_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./content/home-page/home-page.component */ "./src/app/content/home-page/home-page.component.ts");
/* harmony import */ var _content_about_page_about_page_component__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./content/about-page/about-page.component */ "./src/app/content/about-page/about-page.component.ts");
/* harmony import */ var _content_contact_us_page_contact_us_page_component__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./content/contact-us-page/contact-us-page.component */ "./src/app/content/contact-us-page/contact-us-page.component.ts");
/* harmony import */ var _content_branches_page_branches_page_component__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./content/branches-page/branches-page.component */ "./src/app/content/branches-page/branches-page.component.ts");
/* harmony import */ var _content_gallery_page_gallery_page_component__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ./content/gallery-page/gallery-page.component */ "./src/app/content/gallery-page/gallery-page.component.ts");






















































var appRoutes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: _content_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_49__["HomePageComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_42__["LoginAuthGuard"]] },
    { path: 'about', component: _content_about_page_about_page_component__WEBPACK_IMPORTED_MODULE_50__["AboutPageComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_42__["LoginAuthGuard"]] },
    { path: 'contactUs', component: _content_contact_us_page_contact_us_page_component__WEBPACK_IMPORTED_MODULE_51__["ContactUsPageComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_42__["LoginAuthGuard"]] },
    { path: 'branches', component: _content_branches_page_branches_page_component__WEBPACK_IMPORTED_MODULE_52__["BranchesPageComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_42__["LoginAuthGuard"]] },
    { path: 'gallery', component: _content_gallery_page_gallery_page_component__WEBPACK_IMPORTED_MODULE_53__["GalleryPageComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_42__["LoginAuthGuard"]] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_42__["LoginAuthGuard"]] },
    { path: 'forgot_password', component: _login_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_5__["ForgotPasswordComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_42__["LoginAuthGuard"]] },
    { path: 'reset_password', component: _login_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_6__["ResetPasswordComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_42__["LoginAuthGuard"]] },
    { path: 'change_password', component: _login_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_7__["ChangePasswordComponent"], canActivate: [] },
    { path: 'admin', component: _admin_admin_component__WEBPACK_IMPORTED_MODULE_3__["AdminComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_42__["AdminAuthGuard"]], canActivateChild: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_42__["AdminAuthGuard"]], children: [
            { path: '', redirectTo: "dashboard", pathMatch: 'full' },
            { path: 'dashboard', component: _admin_admin_dashboard_admin_dashboard_component__WEBPACK_IMPORTED_MODULE_8__["AdminDashboardComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_42__["AdminAuthGuard"]] },
            { path: 'about', redirectTo: "about/aim", pathMatch: 'full' },
            { path: 'about/aim', component: _admin_admin_about_admin_about_component__WEBPACK_IMPORTED_MODULE_9__["AdminAboutComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_42__["AdminAuthGuard"]] },
            { path: 'about/aim/edit', component: _admin_admin_about_admin_edit_aim_admin_edit_aim_component__WEBPACK_IMPORTED_MODULE_10__["AdminEditAimComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_42__["AdminAuthGuard"]] },
            { path: 'about/history', component: _admin_admin_about_admin_history_admin_history_component__WEBPACK_IMPORTED_MODULE_11__["AdminHistoryComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_42__["AdminAuthGuard"]] },
            { path: 'about/history/edit', component: _admin_admin_about_admin_edit_history_admin_edit_history_component__WEBPACK_IMPORTED_MODULE_12__["AdminEditHistoryComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_42__["AdminAuthGuard"]] },
            { path: 'about/philosophy', component: _admin_admin_about_admin_philosophy_admin_philosophy_component__WEBPACK_IMPORTED_MODULE_13__["AdminPhilosophyComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_42__["AdminAuthGuard"]] },
            { path: 'about/philosophy/edit', component: _admin_admin_about_admin_edit_philosophy_admin_edit_philosophy_component__WEBPACK_IMPORTED_MODULE_14__["AdminEditPhilosophyComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_42__["AdminAuthGuard"]] },
            { path: 'faculty', component: _admin_admin_faculty_admin_faculty_component__WEBPACK_IMPORTED_MODULE_30__["AdminFacultyComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_42__["AdminAuthGuard"]] },
            { path: 'faculty/new', component: _admin_admin_faculty_admin_add_faculty_admin_add_faculty_component__WEBPACK_IMPORTED_MODULE_31__["AdminAddFacultyComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_42__["AdminAuthGuard"]] },
            { path: 'faculty/:id', component: _admin_admin_faculty_admin_show_faculty_admin_show_faculty_component__WEBPACK_IMPORTED_MODULE_32__["AdminShowFacultyComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_42__["AdminAuthGuard"]] },
            { path: 'faculty/:id/edit', component: _admin_admin_faculty_admin_edit_faculty_admin_edit_faculty_component__WEBPACK_IMPORTED_MODULE_33__["AdminEditFacultyComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_42__["AdminAuthGuard"]] },
            { path: 'branch', component: _admin_admin_branch_admin_branch_component__WEBPACK_IMPORTED_MODULE_19__["AdminBranchComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_42__["AdminAuthGuard"]] },
            { path: 'branch/new', component: _admin_admin_branch_admin_add_branch_admin_add_branch_component__WEBPACK_IMPORTED_MODULE_20__["AdminAddBranchComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_42__["AdminAuthGuard"]] },
            { path: 'branch/:id', component: _admin_admin_branch_admin_show_branch_admin_show_branch_component__WEBPACK_IMPORTED_MODULE_21__["AdminShowBranchComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_42__["AdminAuthGuard"]] },
            { path: 'branch/:id/edit', component: _admin_admin_branch_admin_edit_branch_admin_edit_branch_component__WEBPACK_IMPORTED_MODULE_22__["AdminEditBranchComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_42__["AdminAuthGuard"]] },
            { path: 'exams', component: _admin_admin_exam_admin_exam_component__WEBPACK_IMPORTED_MODULE_26__["AdminExamComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_42__["AdminAuthGuard"]] },
            { path: 'gallery', component: _admin_admin_gallary_admin_gallary_component__WEBPACK_IMPORTED_MODULE_27__["AdminGallaryComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_42__["AdminAuthGuard"]] },
            { path: 'gallery/new', component: _admin_admin_gallary_admin_add_photos_admin_add_photos_component__WEBPACK_IMPORTED_MODULE_28__["AdminAddPhotosComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_42__["AdminAuthGuard"]] },
            { path: 'article', component: _admin_admin_article_admin_article_component__WEBPACK_IMPORTED_MODULE_15__["AdminArticleComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_42__["AdminAuthGuard"]] },
            { path: 'article/new', component: _admin_admin_article_admin_add_article_admin_add_article_component__WEBPACK_IMPORTED_MODULE_16__["AdminAddArticleComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_42__["AdminAuthGuard"]] },
            { path: 'article/:id', component: _admin_admin_article_admin_show_article_admin_show_article_component__WEBPACK_IMPORTED_MODULE_17__["AdminShowArticleComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_42__["AdminAuthGuard"]] },
            { path: 'article/:id/edit', component: _admin_admin_article_admin_edit_article_admin_edit_article_component__WEBPACK_IMPORTED_MODULE_18__["AdminEditArticleComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_42__["AdminAuthGuard"]] },
            { path: 'student', component: _admin_admin_student_admin_student_component__WEBPACK_IMPORTED_MODULE_34__["AdminStudentComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_42__["AdminAuthGuard"]] },
            { path: 'student/new', component: _admin_admin_student_admin_add_student_admin_add_student_component__WEBPACK_IMPORTED_MODULE_35__["AdminAddStudentComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_42__["AdminAuthGuard"]] },
            { path: 'student/:id', component: _admin_admin_student_admin_show_student_admin_show_student_component__WEBPACK_IMPORTED_MODULE_36__["AdminShowStudentComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_42__["AdminAuthGuard"]] },
            { path: 'student/:id/edit', component: _admin_admin_student_admin_edit_student_admin_edit_student_component__WEBPACK_IMPORTED_MODULE_37__["AdminEditStudentComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_42__["AdminAuthGuard"]] },
            { path: 'student/:id/generate', component: _admin_admin_student_admin_student_generate_receipt_admin_student_generate_receipt_component__WEBPACK_IMPORTED_MODULE_41__["AdminStudentGenerateReceiptComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_42__["AdminAuthGuard"]] },
            { path: 'student/:id/receipts', component: _admin_admin_student_admin_student_receipts_admin_student_receipts_component__WEBPACK_IMPORTED_MODULE_40__["AdminStudentReceiptsComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_42__["AdminAuthGuard"]] },
            { path: 'attendance', component: _admin_admin_attendance_admin_attendance_component__WEBPACK_IMPORTED_MODULE_29__["AdminAttendanceComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_42__["AdminAuthGuard"]] },
            { path: 'enquiry', component: _admin_admin_enquiry_admin_enquiry_component__WEBPACK_IMPORTED_MODULE_23__["AdminEnquiryComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_42__["AdminAuthGuard"]] },
            { path: 'enquiry/:id', component: _admin_admin_enquiry_admin_show_enquiry_admin_show_enquiry_component__WEBPACK_IMPORTED_MODULE_24__["AdminShowEnquiryComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_42__["AdminAuthGuard"]] },
            { path: 'enquiry/:id/reply', component: _admin_admin_enquiry_admin_reply_enquiry_admin_reply_enquiry_component__WEBPACK_IMPORTED_MODULE_25__["AdminReplyEnquiryComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_42__["AdminAuthGuard"]] },
        ] },
    { path: 'student', component: _student_student_component__WEBPACK_IMPORTED_MODULE_43__["StudentComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_42__["StudentAuthGuard"]], canActivateChild: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_42__["StudentAuthGuard"]], children: [
            { path: '', redirectTo: "dashboard", pathMatch: 'full' },
            { path: 'dashboard', component: _student_student_dashboard_student_dashboard_component__WEBPACK_IMPORTED_MODULE_44__["StudentDashboardComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_42__["StudentAuthGuard"]] },
            { path: 'attendance', component: _student_student_attendance_student_attendance_component__WEBPACK_IMPORTED_MODULE_45__["StudentAttendanceComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_42__["StudentAuthGuard"]] },
            { path: 'receipts', component: _student_student_receipts_student_receipts_component__WEBPACK_IMPORTED_MODULE_46__["StudentReceiptsComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_42__["StudentAuthGuard"]] },
            { path: 'receipt', component: _student_student_receipts_student_show_receipt_student_show_receipt_component__WEBPACK_IMPORTED_MODULE_47__["StudentShowReceiptComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_42__["StudentAuthGuard"]] },
        ] },
    { path: 'faculty', component: _faculty_faculty_component__WEBPACK_IMPORTED_MODULE_48__["FacultyComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_42__["FacultuAuthGuard"]] },
    { path: 'page-not-found', component: _errors_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_38__["PageNotFoundComponent"] },
    { path: 'server-not-found', component: _errors_server_error_server_error_component__WEBPACK_IMPORTED_MODULE_39__["ServerErrorComponent"] },
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
    AdminAuthGuard.prototype.canActivate = function (route, state) {
        var _this = this;
        return this.authService.isLoggedIn.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (login) {
            if (!login.loginValidate && (login.user !== 'admin')) {
                _this.router.navigate(['/login']);
                return false;
            }
            return true;
        }));
    };
    AdminAuthGuard.prototype.canActivateChild = function (route, state) {
        return this.canActivate(route, state);
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
    StudentAuthGuard.prototype.canActivate = function (route, state) {
        var _this = this;
        return this.authService.isLoggedIn.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (login) {
            if (!login.loginValidate && (login.user !== 'student')) {
                _this.router.navigate(['/login']);
                return false;
            }
            return true;
        }));
    };
    StudentAuthGuard.prototype.canActivateChild = function (route, state) {
        return this.canActivate(route, state);
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
    FacultuAuthGuard.prototype.canActivate = function (route, state) {
        var _this = this;
        return this.authService.isLoggedIn.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (login) {
            if (!login.loginValidate && (login.user !== 'faculty')) {
                _this.router.navigate(['/login']);
                return false;
            }
            return true;
        }));
    };
    FacultuAuthGuard.prototype.canActivateChild = function (route, state) {
        return this.canActivate(route, state);
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
    LoginAuthGuard.prototype.canActivate = function (route, state) {
        var _this = this;
        return this.authService.isLoggedIn.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (login) {
            if (login.loginValidate && login.user) {
                _this.router.navigate(['/login']);
                return false;
            }
            return true;
        }));
    };
    LoginAuthGuard.prototype.canActivateChild = function (route, state) {
        return this.canActivate(route, state);
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
/* harmony import */ var _services_httpPost_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/httpPost.service */ "./src/app/services/httpPost.service.ts");





var AuthService = /** @class */ (function () {
    function AuthService(httpPostService, router, route) {
        this.httpPostService = httpPostService;
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
        var data = { api: "login", data: { userName: userName, password: password } };
        this.httpPostService.httpPost(data).subscribe(function (response) {
            var userType = response[0].userType;
            if (userType === "admin") {
                _this.loggedIn.next({ user: 'admin', loginValidate: true });
                _this.router.navigate(['/admin'], { relativeTo: _this.route });
            }
            else if (userType === "student") {
                _this.loggedIn.next({ user: 'student', loginValidate: true });
                _this.router.navigate(['/student'], { relativeTo: _this.route, queryParams: { id: response[0].student } });
            }
            else if (userType === "faculty") {
                _this.loggedIn.next({ user: 'faculty', loginValidate: true });
                _this.router.navigate(['/faculty'], { relativeTo: _this.route });
            }
            else {
                _this.loggedIn.next({ user: null, loginValidate: false });
                _this.router.navigate(['/login'], { relativeTo: _this.route, queryParams: { status: 'false' }, skipLocationChange: true });
            }
        }, function (error) {
            _this.loggedIn.next({ user: null, loginValidate: false });
            _this.router.navigate(['/login'], { relativeTo: _this.route, queryParams: { status: 'false' }, skipLocationChange: true });
        });
    };
    AuthService.prototype.logout = function () {
        this.loggedIn.next({ user: null, loginValidate: false });
        this.router.navigate([''], { relativeTo: this.route });
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_httpPost_service__WEBPACK_IMPORTED_MODULE_4__["HttpPostService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/content/about-page/about-page.component.css":
/*!*************************************************************!*\
  !*** ./src/app/content/about-page/about-page.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".about-image{\r\n  background-image: url('/assets/images/back.jpg');\r\n  background-position: 50% 70%;\r\n  background-repeat: no-repeat; \r\n  background-image: linear-gradient(rgba(0, 0, 0, 0.4),rgba(0, 0, 0, 0.4)),url('historyBackground.jpg');\r\n  background-size: cover;\r\n  height: 65vh;\r\n  width: 100%;\r\n  background-attachment: fixed;\r\n}\r\n\r\n.info-box {\r\n flex:1;\r\n background-color:#fff;\r\n margin-left: auto;\r\n margin-right: auto;\r\n text-align: center;\r\n color: #000;\r\n padding-top: 20px;\r\n line-height: 160%;\r\n font-weight: 350;\r\n padding: 30px 50px;\r\n}\r\n\r\n/*---------------Faculty------------*/\r\n\r\n.faculty-container{\r\n background-color:#f4f4f4;\r\n padding: 40px 0;\r\n}\r\n\r\n.faculty-card{\r\n margin: 20px;\r\n background-color: #fff;\r\n flex-basis: 300px;\r\n height: 450px;\r\n box-shadow: 0 .125rem .25rem rgba(0,0,0,.075)!important;\r\n transition: box-shadow 0.5s;\r\n}\r\n\r\n.faculty-card:hover,\r\n.faculty-card:active{\r\n box-shadow: 0 .1rem 3rem rgba(0,0,0,0.175)!important;\r\n}\r\n\r\n.faculty-pic{\r\n height: 170px;\r\n padding:10px;\r\n text-align: center;\r\n}\r\n\r\n.faculty-pic img{\r\n vertical-align: middle;\r\n margin-top: 10px;\r\n height:150px;\r\n width: 150px;\r\n border-radius: 50%;\r\n}\r\n\r\n.faculty-desc{\r\n margin-top: 10px;\r\n text-align: center;\r\n padding: 10px;\r\n}\r\n\r\n.faculty-desc h5{\r\n color:#e67e22\r\n}\r\n\r\n.faculty-desc h5:after{\r\n display: block;\r\n height: 2px;\r\n background-color: #e67e22;\r\n content: \" \";\r\n width: 100px;\r\n margin: 0 auto;\r\n margin-top: 10px;\r\n}\r\n\r\n@media (min-width: 768px) {\r\n  /* show 3 items */\r\n  .carousel-inner .active,\r\n  .carousel-inner .active + .carousel-item,\r\n  .carousel-inner .active + .carousel-item + .carousel-item {\r\n    display: block;\r\n  }\r\n\r\n  .carousel-inner .carousel-item.active:not(.carousel-item-right):not(.carousel-item-left),\r\n  .carousel-inner .carousel-item.active:not(.carousel-item-right):not(.carousel-item-left) + .carousel-item,\r\n  .carousel-inner .carousel-item.active:not(.carousel-item-right):not(.carousel-item-left) + .carousel-item + .carousel-item {\r\n    transition: none;\r\n  }\r\n\r\n  .carousel-inner .carousel-item-next,\r\n  .carousel-inner .carousel-item-prev {\r\n    position: relative;\r\n    -webkit-transform: translate3d(0, 0, 0);\r\n            transform: translate3d(0, 0, 0);\r\n  }\r\n\r\n  .carousel-inner .active.carousel-item + .carousel-item + .carousel-item + .carousel-item {\r\n    position: absolute;\r\n    top: 0;\r\n    right: -33.3333%;\r\n    z-index: -1;\r\n    display: block;\r\n    visibility: visible;\r\n  }\r\n\r\n  /* left or forward direction */\r\n  .active.carousel-item-left + .carousel-item-next.carousel-item-left,\r\n  .carousel-item-next.carousel-item-left + .carousel-item,\r\n  .carousel-item-next.carousel-item-left + .carousel-item + .carousel-item,\r\n  .carousel-item-next.carousel-item-left + .carousel-item + .carousel-item + .carousel-item {\r\n    position: relative;\r\n    -webkit-transform: translate3d(-100%, 0, 0);\r\n            transform: translate3d(-100%, 0, 0);\r\n    visibility: visible;\r\n  }\r\n\r\n  /* farthest right hidden item must be abso position for animations */\r\n  .carousel-inner .carousel-item-prev.carousel-item-right {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    z-index: -1;\r\n    display: block;\r\n    visibility: visible;\r\n  }\r\n\r\n  /* right or prev direction */\r\n  .active.carousel-item-right + .carousel-item-prev.carousel-item-right,\r\n  .carousel-item-prev.carousel-item-right + .carousel-item,\r\n  .carousel-item-prev.carousel-item-right + .carousel-item + .carousel-item,\r\n  .carousel-item-prev.carousel-item-right + .carousel-item + .carousel-item + .carousel-item {\r\n    position: relative;\r\n    -webkit-transform: translate3d(100%, 0, 0);\r\n            transform: translate3d(100%, 0, 0);\r\n    visibility: visible;\r\n    display: block;\r\n    visibility: visible;\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGVudC9hYm91dC1wYWdlL2Fib3V0LXBhZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdEQUFnRDtFQUNoRCw0QkFBNEI7RUFDNUIsNEJBQTRCO0VBQzVCLHFHQUFxSDtFQUNySCxzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLFdBQVc7RUFDWCw0QkFBNEI7QUFDOUI7O0FBRUE7Q0FDQyxNQUFNO0NBQ04scUJBQXFCO0NBQ3JCLGlCQUFpQjtDQUNqQixrQkFBa0I7Q0FDbEIsa0JBQWtCO0NBQ2xCLFdBQVc7Q0FDWCxpQkFBaUI7Q0FDakIsaUJBQWlCO0NBQ2pCLGdCQUFnQjtDQUNoQixrQkFBa0I7QUFDbkI7O0FBQ0EscUNBQXFDOztBQUNyQztDQUNDLHdCQUF3QjtDQUN4QixlQUFlO0FBQ2hCOztBQUNBO0NBQ0MsWUFBWTtDQUNaLHNCQUFzQjtDQUN0QixpQkFBaUI7Q0FDakIsYUFBYTtDQUNiLHVEQUF1RDtDQUN2RCwyQkFBMkI7QUFDNUI7O0FBQ0E7O0NBRUMsb0RBQW9EO0FBQ3JEOztBQUNBO0NBQ0MsYUFBYTtDQUNiLFlBQVk7Q0FDWixrQkFBa0I7QUFDbkI7O0FBQ0E7Q0FDQyxzQkFBc0I7Q0FDdEIsZ0JBQWdCO0NBQ2hCLFlBQVk7Q0FDWixZQUFZO0NBQ1osa0JBQWtCO0FBQ25COztBQUNBO0NBQ0MsZ0JBQWdCO0NBQ2hCLGtCQUFrQjtDQUNsQixhQUFhO0FBQ2Q7O0FBQ0E7Q0FDQztBQUNEOztBQUNBO0NBQ0MsY0FBYztDQUNkLFdBQVc7Q0FDWCx5QkFBeUI7Q0FDekIsWUFBWTtDQUNaLFlBQVk7Q0FDWixjQUFjO0NBQ2QsZ0JBQWdCO0FBQ2pCOztBQUtDO0VBQ0MsaUJBQWlCO0VBQ2pCOzs7SUFHRSxjQUFjO0VBQ2hCOztFQUVBOzs7SUFHRSxnQkFBZ0I7RUFDbEI7O0VBRUE7O0lBRUUsa0JBQWtCO0lBQ2xCLHVDQUErQjtZQUEvQiwrQkFBK0I7RUFDakM7O0VBRUE7SUFDRSxrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsY0FBYztJQUNkLG1CQUFtQjtFQUNyQjs7RUFFQSw4QkFBOEI7RUFDOUI7Ozs7SUFJRSxrQkFBa0I7SUFDbEIsMkNBQW1DO1lBQW5DLG1DQUFtQztJQUNuQyxtQkFBbUI7RUFDckI7O0VBRUEsb0VBQW9FO0VBQ3BFO0lBQ0Usa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixPQUFPO0lBQ1AsV0FBVztJQUNYLGNBQWM7SUFDZCxtQkFBbUI7RUFDckI7O0VBRUEsNEJBQTRCO0VBQzVCOzs7O0lBSUUsa0JBQWtCO0lBQ2xCLDBDQUFrQztZQUFsQyxrQ0FBa0M7SUFDbEMsbUJBQW1CO0lBQ25CLGNBQWM7SUFDZCxtQkFBbUI7RUFDckI7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbnRlbnQvYWJvdXQtcGFnZS9hYm91dC1wYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWJvdXQtaW1hZ2V7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvYXNzZXRzL2ltYWdlcy9iYWNrLmpwZycpO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IDUwJSA3MCU7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDsgXHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHJnYmEoMCwgMCwgMCwgMC40KSxyZ2JhKDAsIDAsIDAsIDAuNCkpLHVybChzcmMvYXNzZXRzL2ltYWdlcy9oaXN0b3J5QmFja2dyb3VuZC5qcGcpO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgaGVpZ2h0OiA2NXZoO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XHJcbn1cclxuXHJcbi5pbmZvLWJveCB7XHJcbiBmbGV4OjE7XHJcbiBiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7XHJcbiBtYXJnaW4tbGVmdDogYXV0bztcclxuIG1hcmdpbi1yaWdodDogYXV0bztcclxuIHRleHQtYWxpZ246IGNlbnRlcjtcclxuIGNvbG9yOiAjMDAwO1xyXG4gcGFkZGluZy10b3A6IDIwcHg7XHJcbiBsaW5lLWhlaWdodDogMTYwJTtcclxuIGZvbnQtd2VpZ2h0OiAzNTA7XHJcbiBwYWRkaW5nOiAzMHB4IDUwcHg7XHJcbn1cclxuLyotLS0tLS0tLS0tLS0tLS1GYWN1bHR5LS0tLS0tLS0tLS0tKi9cclxuLmZhY3VsdHktY29udGFpbmVye1xyXG4gYmFja2dyb3VuZC1jb2xvcjojZjRmNGY0O1xyXG4gcGFkZGluZzogNDBweCAwO1xyXG59XHJcbi5mYWN1bHR5LWNhcmR7XHJcbiBtYXJnaW46IDIwcHg7XHJcbiBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gZmxleC1iYXNpczogMzAwcHg7XHJcbiBoZWlnaHQ6IDQ1MHB4O1xyXG4gYm94LXNoYWRvdzogMCAuMTI1cmVtIC4yNXJlbSByZ2JhKDAsMCwwLC4wNzUpIWltcG9ydGFudDtcclxuIHRyYW5zaXRpb246IGJveC1zaGFkb3cgMC41cztcclxufVxyXG4uZmFjdWx0eS1jYXJkOmhvdmVyLFxyXG4uZmFjdWx0eS1jYXJkOmFjdGl2ZXtcclxuIGJveC1zaGFkb3c6IDAgLjFyZW0gM3JlbSByZ2JhKDAsMCwwLDAuMTc1KSFpbXBvcnRhbnQ7XHJcbn1cclxuLmZhY3VsdHktcGlje1xyXG4gaGVpZ2h0OiAxNzBweDtcclxuIHBhZGRpbmc6MTBweDtcclxuIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uZmFjdWx0eS1waWMgaW1ne1xyXG4gdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuIG1hcmdpbi10b3A6IDEwcHg7XHJcbiBoZWlnaHQ6MTUwcHg7XHJcbiB3aWR0aDogMTUwcHg7XHJcbiBib3JkZXItcmFkaXVzOiA1MCU7XHJcbn1cclxuLmZhY3VsdHktZGVzY3tcclxuIG1hcmdpbi10b3A6IDEwcHg7XHJcbiB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiBwYWRkaW5nOiAxMHB4O1xyXG59XHJcbi5mYWN1bHR5LWRlc2MgaDV7XHJcbiBjb2xvcjojZTY3ZTIyXHJcbn1cclxuLmZhY3VsdHktZGVzYyBoNTphZnRlcntcclxuIGRpc3BsYXk6IGJsb2NrO1xyXG4gaGVpZ2h0OiAycHg7XHJcbiBiYWNrZ3JvdW5kLWNvbG9yOiAjZTY3ZTIyO1xyXG4gY29udGVudDogXCIgXCI7XHJcbiB3aWR0aDogMTAwcHg7XHJcbiBtYXJnaW46IDAgYXV0bztcclxuIG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbiBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAvKiBzaG93IDMgaXRlbXMgKi9cclxuICAuY2Fyb3VzZWwtaW5uZXIgLmFjdGl2ZSxcclxuICAuY2Fyb3VzZWwtaW5uZXIgLmFjdGl2ZSArIC5jYXJvdXNlbC1pdGVtLFxyXG4gIC5jYXJvdXNlbC1pbm5lciAuYWN0aXZlICsgLmNhcm91c2VsLWl0ZW0gKyAuY2Fyb3VzZWwtaXRlbSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcblxyXG4gIC5jYXJvdXNlbC1pbm5lciAuY2Fyb3VzZWwtaXRlbS5hY3RpdmU6bm90KC5jYXJvdXNlbC1pdGVtLXJpZ2h0KTpub3QoLmNhcm91c2VsLWl0ZW0tbGVmdCksXHJcbiAgLmNhcm91c2VsLWlubmVyIC5jYXJvdXNlbC1pdGVtLmFjdGl2ZTpub3QoLmNhcm91c2VsLWl0ZW0tcmlnaHQpOm5vdCguY2Fyb3VzZWwtaXRlbS1sZWZ0KSArIC5jYXJvdXNlbC1pdGVtLFxyXG4gIC5jYXJvdXNlbC1pbm5lciAuY2Fyb3VzZWwtaXRlbS5hY3RpdmU6bm90KC5jYXJvdXNlbC1pdGVtLXJpZ2h0KTpub3QoLmNhcm91c2VsLWl0ZW0tbGVmdCkgKyAuY2Fyb3VzZWwtaXRlbSArIC5jYXJvdXNlbC1pdGVtIHtcclxuICAgIHRyYW5zaXRpb246IG5vbmU7XHJcbiAgfVxyXG5cclxuICAuY2Fyb3VzZWwtaW5uZXIgLmNhcm91c2VsLWl0ZW0tbmV4dCxcclxuICAuY2Fyb3VzZWwtaW5uZXIgLmNhcm91c2VsLWl0ZW0tcHJldiB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xyXG4gIH1cclxuXHJcbiAgLmNhcm91c2VsLWlubmVyIC5hY3RpdmUuY2Fyb3VzZWwtaXRlbSArIC5jYXJvdXNlbC1pdGVtICsgLmNhcm91c2VsLWl0ZW0gKyAuY2Fyb3VzZWwtaXRlbSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICByaWdodDogLTMzLjMzMzMlO1xyXG4gICAgei1pbmRleDogLTE7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbiAgfVxyXG5cclxuICAvKiBsZWZ0IG9yIGZvcndhcmQgZGlyZWN0aW9uICovXHJcbiAgLmFjdGl2ZS5jYXJvdXNlbC1pdGVtLWxlZnQgKyAuY2Fyb3VzZWwtaXRlbS1uZXh0LmNhcm91c2VsLWl0ZW0tbGVmdCxcclxuICAuY2Fyb3VzZWwtaXRlbS1uZXh0LmNhcm91c2VsLWl0ZW0tbGVmdCArIC5jYXJvdXNlbC1pdGVtLFxyXG4gIC5jYXJvdXNlbC1pdGVtLW5leHQuY2Fyb3VzZWwtaXRlbS1sZWZ0ICsgLmNhcm91c2VsLWl0ZW0gKyAuY2Fyb3VzZWwtaXRlbSxcclxuICAuY2Fyb3VzZWwtaXRlbS1uZXh0LmNhcm91c2VsLWl0ZW0tbGVmdCArIC5jYXJvdXNlbC1pdGVtICsgLmNhcm91c2VsLWl0ZW0gKyAuY2Fyb3VzZWwtaXRlbSB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0xMDAlLCAwLCAwKTtcclxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbiAgfVxyXG5cclxuICAvKiBmYXJ0aGVzdCByaWdodCBoaWRkZW4gaXRlbSBtdXN0IGJlIGFic28gcG9zaXRpb24gZm9yIGFuaW1hdGlvbnMgKi9cclxuICAuY2Fyb3VzZWwtaW5uZXIgLmNhcm91c2VsLWl0ZW0tcHJldi5jYXJvdXNlbC1pdGVtLXJpZ2h0IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB6LWluZGV4OiAtMTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxuICB9XHJcblxyXG4gIC8qIHJpZ2h0IG9yIHByZXYgZGlyZWN0aW9uICovXHJcbiAgLmFjdGl2ZS5jYXJvdXNlbC1pdGVtLXJpZ2h0ICsgLmNhcm91c2VsLWl0ZW0tcHJldi5jYXJvdXNlbC1pdGVtLXJpZ2h0LFxyXG4gIC5jYXJvdXNlbC1pdGVtLXByZXYuY2Fyb3VzZWwtaXRlbS1yaWdodCArIC5jYXJvdXNlbC1pdGVtLFxyXG4gIC5jYXJvdXNlbC1pdGVtLXByZXYuY2Fyb3VzZWwtaXRlbS1yaWdodCArIC5jYXJvdXNlbC1pdGVtICsgLmNhcm91c2VsLWl0ZW0sXHJcbiAgLmNhcm91c2VsLWl0ZW0tcHJldi5jYXJvdXNlbC1pdGVtLXJpZ2h0ICsgLmNhcm91c2VsLWl0ZW0gKyAuY2Fyb3VzZWwtaXRlbSArIC5jYXJvdXNlbC1pdGVtIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMTAwJSwgMCwgMCk7XHJcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4gIH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/content/about-page/about-page.component.html":
/*!**************************************************************!*\
  !*** ./src/app/content/about-page/about-page.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"about-page\">\r\n     <div class=\"about-image\">\r\n    </div>\r\n    <div class=\"flex-container\">\r\n      <div class=\"info-box\">\r\n          <h2>AIM</h2>\r\n          <p>\r\n              Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a \r\n          </p>\r\n      </div>\r\n      <div class=\"info-box\">\r\n          <h2>Our History</h2>\r\n          <p>\r\n              It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).\r\n          </p>\r\n      </div>\r\n      <div class=\"info-box\">\r\n          <h2>Philosophy</h2>\r\n          <p>\r\n              Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a \r\n          </p>\r\n        </div>\r\n        \r\n    </div>\r\n    <div class=\"faculty-container\">\r\n      <h2>Our faculty</h2>\r\n      <div class=\"flex-container\">\r\n        <div class=\"faculty-card\">\r\n            <div class=\"faculty-pic\">\r\n              <img class=\"shadow-lg\" src=\"http://lorempixel.com/640/480/people/\" onerror=\"this.src='/assets/images/faculty.png'\">\r\n            </div>\r\n            <div class=\"faculty-desc\">\r\n              <h5>John Doe</h5>\r\n              There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised wo\r\n            </div>\r\n        </div>\r\n        <div class=\"faculty-card\">\r\n          <div class=\"faculty-pic\">\r\n            <img class=\"shadow-lg\" src=\"http://lorempixel.com/640/480/people/\" onerror=\"this.src='/assets/images/faculty.png'\">\r\n          </div>\r\n          <div class=\"faculty-desc\">\r\n            <h5>John Doe</h5>\r\n            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised wo\r\n          </div>\r\n      </div>\r\n      <div class=\"faculty-card\">\r\n        <div class=\"faculty-pic\">\r\n          <img class=\"shadow-lg\" src=\"http://lorempixel.com/640/480/people/\" onerror=\"this.src='/assets/images/faculty.png'\">\r\n        </div>\r\n        <div class=\"faculty-desc\">\r\n          <h5>John Doe</h5>\r\n          There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised wo\r\n        </div>\r\n    </div>\r\n    <div class=\"faculty-card\">\r\n      <div class=\"faculty-pic\">\r\n        <img class=\"shadow-lg\" src=\"http://lorempixel.com/640/480/people/\" onerror=\"this.src='/assets/images/faculty.png'\">\r\n      </div>\r\n      <div class=\"faculty-desc\">\r\n        <h5>John Doe</h5>\r\n        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised wo\r\n      </div>\r\n  </div>\r\n        <div class=\"faculty-card\">\r\n            <div class=\"faculty-pic\">\r\n              <img class=\"shadow-lg\" src=\"http://lorempixel.com/640/480/people/\" onerror=\"this.src='/assets/images/faculty.png'\">\r\n            </div>\r\n            <div class=\"faculty-desc\">\r\n              <h5>John Doe</h5>\r\n              There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised wo\r\n            </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    \r\n</div>"

/***/ }),

/***/ "./src/app/content/about-page/about-page.component.ts":
/*!************************************************************!*\
  !*** ./src/app/content/about-page/about-page.component.ts ***!
  \************************************************************/
/*! exports provided: AboutPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutPageComponent", function() { return AboutPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AboutPageComponent = /** @class */ (function () {
    function AboutPageComponent() {
    }
    AboutPageComponent.prototype.ngOnInit = function () {
        document.body.classList.add('bg-about');
    };
    AboutPageComponent.prototype.ngOnDestroy = function () {
        document.body.classList.remove('bg-about');
    };
    AboutPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-about-page',
            template: __webpack_require__(/*! ./about-page.component.html */ "./src/app/content/about-page/about-page.component.html"),
            styles: [__webpack_require__(/*! ./about-page.component.css */ "./src/app/content/about-page/about-page.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AboutPageComponent);
    return AboutPageComponent;
}());



/***/ }),

/***/ "./src/app/content/branches-page/branches-page.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/content/branches-page/branches-page.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".branches-page{\r\n    padding: 40px;\r\n}\r\n.branch-card{\r\n    margin: 20px;\r\n    background-color: #fff;\r\n    flex-basis: 300px;\r\n    height: 550px;\r\n    box-shadow: 0 .125rem .25rem rgba(0,0,0,.075)!important;\r\n    transition: box-shadow 0.5s;\r\n}\r\n.branch-card:hover,\r\n.branch-card:active{\r\n box-shadow: 0 .1rem 3rem rgba(0,0,0,0.175)!important;\r\n}\r\n.branch-img{\r\n    flex:1;\r\n    height: 550px;\r\n    background-color: #f4f4f4;\r\n}\r\n.branch-details{\r\n    flex:1;\r\n    height: 100%;\r\n    background-color: yellow;\r\n}\r\n.branch-details .description{\r\n    height: 20%;\r\n    padding : 5px 20px;\r\n    text-align: center;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGVudC9icmFuY2hlcy1wYWdlL2JyYW5jaGVzLXBhZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7QUFDakI7QUFDQTtJQUNJLFlBQVk7SUFDWixzQkFBc0I7SUFDdEIsaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYix1REFBdUQ7SUFDdkQsMkJBQTJCO0FBQy9CO0FBQ0E7O0NBRUMsb0RBQW9EO0FBQ3JEO0FBRUE7SUFDSSxNQUFNO0lBQ04sYUFBYTtJQUNiLHlCQUF5QjtBQUM3QjtBQUVBO0lBQ0ksTUFBTTtJQUNOLFlBQVk7SUFDWix3QkFBd0I7QUFDNUI7QUFFQTtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsa0JBQWtCO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvY29udGVudC9icmFuY2hlcy1wYWdlL2JyYW5jaGVzLXBhZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5icmFuY2hlcy1wYWdle1xyXG4gICAgcGFkZGluZzogNDBweDtcclxufVxyXG4uYnJhbmNoLWNhcmR7XHJcbiAgICBtYXJnaW46IDIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgZmxleC1iYXNpczogMzAwcHg7XHJcbiAgICBoZWlnaHQ6IDU1MHB4O1xyXG4gICAgYm94LXNoYWRvdzogMCAuMTI1cmVtIC4yNXJlbSByZ2JhKDAsMCwwLC4wNzUpIWltcG9ydGFudDtcclxuICAgIHRyYW5zaXRpb246IGJveC1zaGFkb3cgMC41cztcclxufVxyXG4uYnJhbmNoLWNhcmQ6aG92ZXIsXHJcbi5icmFuY2gtY2FyZDphY3RpdmV7XHJcbiBib3gtc2hhZG93OiAwIC4xcmVtIDNyZW0gcmdiYSgwLDAsMCwwLjE3NSkhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYnJhbmNoLWltZ3tcclxuICAgIGZsZXg6MTtcclxuICAgIGhlaWdodDogNTUwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjRmNGY0O1xyXG59XHJcblxyXG4uYnJhbmNoLWRldGFpbHN7XHJcbiAgICBmbGV4OjE7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XHJcbn1cclxuXHJcbi5icmFuY2gtZGV0YWlscyAuZGVzY3JpcHRpb257XHJcbiAgICBoZWlnaHQ6IDIwJTtcclxuICAgIHBhZGRpbmcgOiA1cHggMjBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/content/branches-page/branches-page.component.html":
/*!********************************************************************!*\
  !*** ./src/app/content/branches-page/branches-page.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"branches-page\">\r\n    <h2>Our Branches</h2>\r\n    <div class=\"branch-card\">\r\n      <div class=\"flex-container\">\r\n        <div class=\"branch-img\">\r\n\r\n        </div>\r\n        <div class=\"branch-details\">\r\n          <div class=\"description\">\r\n            Fully air conditioned and spacious\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/content/branches-page/branches-page.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/content/branches-page/branches-page.component.ts ***!
  \******************************************************************/
/*! exports provided: BranchesPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BranchesPageComponent", function() { return BranchesPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BranchesPageComponent = /** @class */ (function () {
    function BranchesPageComponent() {
    }
    BranchesPageComponent.prototype.ngOnInit = function () {
    };
    BranchesPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-branches-page',
            template: __webpack_require__(/*! ./branches-page.component.html */ "./src/app/content/branches-page/branches-page.component.html"),
            styles: [__webpack_require__(/*! ./branches-page.component.css */ "./src/app/content/branches-page/branches-page.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BranchesPageComponent);
    return BranchesPageComponent;
}());



/***/ }),

/***/ "./src/app/content/contact-us-page/contact-us-page.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/content/contact-us-page/contact-us-page.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* .flex-container, .image-box, .map-box,.details-box,.form-box{\r\n    border:1px #ccc solid;\r\n    padding:10px;\r\n  } */\r\n\r\n  .image-box{\r\n    background-image: url('/assets/images/contactUsImage.jpg');\r\n    height: 40vh;\r\n    background-position: center;\r\n    flex-basis: 100%;\r\n}\r\n\r\n  .map-box{\r\n    flex: 1;\r\n    height: 50vh;\r\n}\r\n\r\n  .details-box{\r\n    padding: 10px;\r\n    flex: 1;\r\n}\r\n\r\n  .flex-container .details-box li{\r\n    list-style: none;\r\n    padding: 10px;\r\n}\r\n\r\n  .flex-container .details-box i{\r\n    margin-right: 25px;\r\n}\r\n\r\n  .form-box{\r\n    position: relative;\r\n    background: #f4f4f4;\r\n    flex: 1;\r\n    padding: 10px;\r\n}\r\n\r\n  .form-box .input-box{\r\n    float: left;\r\n    color: #e67e22;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGVudC9jb250YWN0LXVzLXBhZ2UvY29udGFjdC11cy1wYWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztLQUdLOztFQUVIO0lBQ0UsMERBQTBEO0lBQzFELFlBQVk7SUFDWiwyQkFBMkI7SUFDM0IsZ0JBQWdCO0FBQ3BCOztFQUNBO0lBQ0ksT0FBTztJQUNQLFlBQVk7QUFDaEI7O0VBQ0E7SUFDSSxhQUFhO0lBQ2IsT0FBTztBQUNYOztFQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGFBQWE7QUFDakI7O0VBQ0E7SUFDSSxrQkFBa0I7QUFDdEI7O0VBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLE9BQU87SUFDUCxhQUFhO0FBQ2pCOztFQUNBO0lBQ0ksV0FBVztJQUNYLGNBQWM7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC9jb250ZW50L2NvbnRhY3QtdXMtcGFnZS9jb250YWN0LXVzLXBhZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIC5mbGV4LWNvbnRhaW5lciwgLmltYWdlLWJveCwgLm1hcC1ib3gsLmRldGFpbHMtYm94LC5mb3JtLWJveHtcclxuICAgIGJvcmRlcjoxcHggI2NjYyBzb2xpZDtcclxuICAgIHBhZGRpbmc6MTBweDtcclxuICB9ICovXHJcblxyXG4gIC5pbWFnZS1ib3h7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9hc3NldHMvaW1hZ2VzL2NvbnRhY3RVc0ltYWdlLmpwZycpO1xyXG4gICAgaGVpZ2h0OiA0MHZoO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgZmxleC1iYXNpczogMTAwJTtcclxufVxyXG4ubWFwLWJveHtcclxuICAgIGZsZXg6IDE7XHJcbiAgICBoZWlnaHQ6IDUwdmg7XHJcbn1cclxuLmRldGFpbHMtYm94e1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGZsZXg6IDE7XHJcbn1cclxuLmZsZXgtY29udGFpbmVyIC5kZXRhaWxzLWJveCBsaXtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcbi5mbGV4LWNvbnRhaW5lciAuZGV0YWlscy1ib3ggaXtcclxuICAgIG1hcmdpbi1yaWdodDogMjVweDtcclxufVxyXG4uZm9ybS1ib3h7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjRmNGY0O1xyXG4gICAgZmxleDogMTtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuLmZvcm0tYm94IC5pbnB1dC1ib3h7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIGNvbG9yOiAjZTY3ZTIyO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/content/contact-us-page/contact-us-page.component.html":
/*!************************************************************************!*\
  !*** ./src/app/content/contact-us-page/contact-us-page.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"flex-container\">\r\n    <div class=\"image-box\">\r\n        \r\n    </div>\r\n    <div class=\"map-box\">\r\n        Maps Loading....\r\n        <agm-map [latitude]='latitude' [longitude]='longitude' \r\n        [mapTypeId]='mapType'>\r\n        <agm-marker [latitude]=\"lat\" [longitude]=\"lng\">\r\n            </agm-marker> \r\n      </agm-map>\r\n    </div>\r\n    <div class=\"details-box\">\r\n        <h1>Contact Us</h1>\r\n        <ul>\r\n            <li><i class=\"fa fa-phone\" aria-hidden=\"true\"></i>9876543210</li>\r\n            <li> <i class=\"fa fa-envelope\" aria-hidden=\"true\"></i>dancingSoul.mail.com</li>\r\n            <li><i class=\"fa fa-map-marker\" aria-hidden=\"true\"></i>kasarvadavali,Thane</li>\r\n        </ul>\r\n    </div>\r\n    <div class=\"form-box\">\r\n        <h1>Pitch Us</h1>\r\n            Hello,<br>\r\n            <br>\r\n            <div style=\"float: left;\">My name is&nbsp;</div>\r\n            <div contenteditable=\"true\" class=\"input-box\"\r\n                 [textContent]=\"userName\" (input)=\"model=$event.target.textContent\" \r\n                 (click)=\"clearText($event)\" \r\n                 (focusout)=\"checkIfEmpty($event,'userName')\">\r\n            </div>\r\n            <div>&nbsp;and my email address is&nbsp;</div>\r\n            <div contenteditable=\"true\" class=\"input-box\"\r\n                 [textContent]=\"emailId\" (input)=\"model=$event.target.textContent\"\r\n                 (click)=\"clearText($event)\"\r\n                 (focusout)=\"checkIfEmpty($event,'emailId')\">\r\n            </div>\r\n            <div>&nbsp;and i would like to discuss about&nbsp;</div>\r\n            <div contenteditable=\"true\" class=\"input-box\"\r\n                 [textContent]=\"message\" (input)=\"model=$event.target.textContent\" \r\n                 (click)=\"clearText($event)\"\r\n                 (focusout)=\"checkIfEmpty($event,'message')\">\r\n            </div>\r\n            <div class=\"clearfix\"></div>\r\n            <div class=\"btn\">\r\n                Submit\r\n            </div>\r\n            \r\n            \r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/content/contact-us-page/contact-us-page.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/content/contact-us-page/contact-us-page.component.ts ***!
  \**********************************************************************/
/*! exports provided: ContactUsPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactUsPageComponent", function() { return ContactUsPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ContactUsPageComponent = /** @class */ (function () {
    function ContactUsPageComponent() {
        this.yourName = "your name";
        this.yourEmail = "your e-mail";
        this.yourMessage = "message";
        this.latitude = -28.68352;
        this.longitude = -147.20785;
        this.mapType = 'satellite';
        this.userName = this.yourName;
        this.emailId = this.yourEmail;
        this.message = this.yourMessage;
    }
    ContactUsPageComponent.prototype.clearText = function (event) {
        if (this.yourName === event.srcElement.innerHTML) {
            this.userName = "";
        }
        if (this.yourEmail === event.srcElement.innerHTML) {
            this.emailId = "";
        }
        if (this.yourMessage === event.srcElement.innerHTML) {
            this.message = "";
        }
    };
    ContactUsPageComponent.prototype.checkIfEmpty = function (event, inputName) {
        console.log(this.userName);
        if (inputName === "userName" && event.srcElement.innerHTML === "") {
            this.userName = this.yourName;
        }
        if (inputName === "emailId" && event.srcElement.innerHTML === "") {
            this.emailId = this.yourEmail;
        }
        if (inputName === "message" && event.srcElement.innerHTML === "") {
            this.message = this.yourMessage;
        }
    };
    ContactUsPageComponent.prototype.ngOnInit = function () {
    };
    ContactUsPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contact-us-page',
            template: __webpack_require__(/*! ./contact-us-page.component.html */ "./src/app/content/contact-us-page/contact-us-page.component.html"),
            styles: [__webpack_require__(/*! ./contact-us-page.component.css */ "./src/app/content/contact-us-page/contact-us-page.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ContactUsPageComponent);
    return ContactUsPageComponent;
}());



/***/ }),

/***/ "./src/app/content/content.component.css":
/*!***********************************************!*\
  !*** ./src/app/content/content.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRlbnQvY29udGVudC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/content/content.component.html":
/*!************************************************!*\
  !*** ./src/app/content/content.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <app-home-page></app-home-page> -->\r\n<app-about-page></app-about-page>\r\n"

/***/ }),

/***/ "./src/app/content/content.component.ts":
/*!**********************************************!*\
  !*** ./src/app/content/content.component.ts ***!
  \**********************************************/
/*! exports provided: ContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentComponent", function() { return ContentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ContentComponent = /** @class */ (function () {
    function ContentComponent() {
    }
    ContentComponent.prototype.ngOnInit = function () {
    };
    ContentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-content',
            template: __webpack_require__(/*! ./content.component.html */ "./src/app/content/content.component.html"),
            styles: [__webpack_require__(/*! ./content.component.css */ "./src/app/content/content.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ContentComponent);
    return ContentComponent;
}());



/***/ }),

/***/ "./src/app/content/gallery-page/gallery-page.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/content/gallery-page/gallery-page.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRlbnQvZ2FsbGVyeS1wYWdlL2dhbGxlcnktcGFnZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/content/gallery-page/gallery-page.component.html":
/*!******************************************************************!*\
  !*** ./src/app/content/gallery-page/gallery-page.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<gallery \r\n    [flexBorderSize]=\"3\" \r\n    [flexImageSize]=\"7\"\r\n    [maxRowsPerPage]=\"100\">\r\n</gallery>"

/***/ }),

/***/ "./src/app/content/gallery-page/gallery-page.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/content/gallery-page/gallery-page.component.ts ***!
  \****************************************************************/
/*! exports provided: GalleryPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleryPageComponent", function() { return GalleryPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var GalleryPageComponent = /** @class */ (function () {
    function GalleryPageComponent() {
        this.yourGalleryName = 'assets/img/gallery/';
    }
    GalleryPageComponent.prototype.ngOnInit = function () {
    };
    GalleryPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-gallery-page',
            template: __webpack_require__(/*! ./gallery-page.component.html */ "./src/app/content/gallery-page/gallery-page.component.html"),
            styles: [__webpack_require__(/*! ./gallery-page.component.css */ "./src/app/content/gallery-page/gallery-page.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], GalleryPageComponent);
    return GalleryPageComponent;
}());



/***/ }),

/***/ "./src/app/content/home-page/home-page.component.css":
/*!***********************************************************!*\
  !*** ./src/app/content/home-page/home-page.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".home-page-text{\r\n    width: 50%;\r\n    color: #fff;\r\n    padding: 200px 0;\r\n}\r\n.bg-home-img\r\n{\r\n    background-position: center;\r\n    background-repeat: no-repeat; \r\n    background-image: linear-gradient(rgba(0, 0, 0, 0.0),rgba(0, 0, 0, 0.7)),url('homePage.jpg');\r\n    background-size: cover;\r\n    height: 100vh;\r\n    background-attachment: fixed;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGVudC9ob21lLXBhZ2UvaG9tZS1wYWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxVQUFVO0lBQ1YsV0FBVztJQUNYLGdCQUFnQjtBQUNwQjtBQUNBOztJQUVJLDJCQUEyQjtJQUMzQiw0QkFBNEI7SUFDNUIsNEZBQTRHO0lBQzVHLHNCQUFzQjtJQUN0QixhQUFhO0lBQ2IsNEJBQTRCO0FBQ2hDIiwiZmlsZSI6InNyYy9hcHAvY29udGVudC9ob21lLXBhZ2UvaG9tZS1wYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaG9tZS1wYWdlLXRleHR7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBwYWRkaW5nOiAyMDBweCAwO1xyXG59XHJcbi5iZy1ob21lLWltZ1xyXG57XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0OyBcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChyZ2JhKDAsIDAsIDAsIDAuMCkscmdiYSgwLCAwLCAwLCAwLjcpKSx1cmwoc3JjL2Fzc2V0cy9pbWFnZXMvaG9tZVBhZ2UuanBnKTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcclxufVxyXG5cclxuIl19 */"

/***/ }),

/***/ "./src/app/content/home-page/home-page.component.html":
/*!************************************************************!*\
  !*** ./src/app/content/home-page/home-page.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"bg-home-img\">\r\n  <div class=\"container\">\r\n    <div class=\"home-page-text\">\r\n      <h1>The Dancing Soul</h1>\r\n      <p> A fun introduction to the world of dance focusing on creative movement, classroom environment, and rhythm.This dace style is characterised by a       linear form of the body without any pronounced movement \r\n          of the upper body and linear spatial patterns, which make the dance form extremely dynamic and powerful.\r\n      </p>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/content/home-page/home-page.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/content/home-page/home-page.component.ts ***!
  \**********************************************************/
/*! exports provided: HomePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageComponent", function() { return HomePageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomePageComponent = /** @class */ (function () {
    function HomePageComponent() {
    }
    HomePageComponent.prototype.ngOnInit = function () {
    };
    HomePageComponent.prototype.ngOnDestroy = function () {
    };
    HomePageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home-page',
            template: __webpack_require__(/*! ./home-page.component.html */ "./src/app/content/home-page/home-page.component.html"),
            styles: [__webpack_require__(/*! ./home-page.component.css */ "./src/app/content/home-page/home-page.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomePageComponent);
    return HomePageComponent;
}());



/***/ }),

/***/ "./src/app/errors/page-not-found/page-not-found.component.css":
/*!********************************************************************!*\
  !*** ./src/app/errors/page-not-found/page-not-found.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h2 {\r\n    text-align: left;\r\n}\r\n\r\nh2::after {\r\n    display: none;\r\n}\r\n\r\nh3 {\r\n    font-size: 150%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXJyb3JzL3BhZ2Utbm90LWZvdW5kL3BhZ2Utbm90LWZvdW5kLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL2Vycm9ycy9wYWdlLW5vdC1mb3VuZC9wYWdlLW5vdC1mb3VuZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDIge1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG5cclxuaDI6OmFmdGVyIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbmgzIHtcclxuICAgIGZvbnQtc2l6ZTogMTUwJTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/errors/page-not-found/page-not-found.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/errors/page-not-found/page-not-found.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-12\">\r\n        <h2>Error 404!!</h2>\r\n        <h3>Page Not Found...</h3>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/errors/page-not-found/page-not-found.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/errors/page-not-found/page-not-found.component.ts ***!
  \*******************************************************************/
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
            template: __webpack_require__(/*! ./page-not-found.component.html */ "./src/app/errors/page-not-found/page-not-found.component.html"),
            styles: [__webpack_require__(/*! ./page-not-found.component.css */ "./src/app/errors/page-not-found/page-not-found.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "./src/app/errors/server-error/server-error.component.css":
/*!****************************************************************!*\
  !*** ./src/app/errors/server-error/server-error.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h2 {\r\n    text-align: left;\r\n}\r\n\r\nh2::after {\r\n    display: none;\r\n}\r\n\r\nh3 {\r\n    font-size: 150%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXJyb3JzL3NlcnZlci1lcnJvci9zZXJ2ZXItZXJyb3IuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxlQUFlO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvZXJyb3JzL3NlcnZlci1lcnJvci9zZXJ2ZXItZXJyb3IuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImgyIHtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuXHJcbmgyOjphZnRlciB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG5oMyB7XHJcbiAgICBmb250LXNpemU6IDE1MCU7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/errors/server-error/server-error.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/errors/server-error/server-error.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-12\">\n        <h2>Error 500</h2>\n        <h3>Server Not Found...</h3>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/errors/server-error/server-error.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/errors/server-error/server-error.component.ts ***!
  \***************************************************************/
/*! exports provided: ServerErrorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServerErrorComponent", function() { return ServerErrorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ServerErrorComponent = /** @class */ (function () {
    function ServerErrorComponent() {
    }
    ServerErrorComponent.prototype.ngOnInit = function () {
    };
    ServerErrorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-server-error',
            template: __webpack_require__(/*! ./server-error.component.html */ "./src/app/errors/server-error/server-error.component.html"),
            styles: [__webpack_require__(/*! ./server-error.component.css */ "./src/app/errors/server-error/server-error.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ServerErrorComponent);
    return ServerErrorComponent;
}());



/***/ }),

/***/ "./src/app/faculty/faculty.component.css":
/*!***********************************************!*\
  !*** ./src/app/faculty/faculty.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZhY3VsdHkvZmFjdWx0eS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/faculty/faculty.component.html":
/*!************************************************!*\
  !*** ./src/app/faculty/faculty.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <p>\n    faculty works!\n  </p>\n</div>\n\n"

/***/ }),

/***/ "./src/app/faculty/faculty.component.ts":
/*!**********************************************!*\
  !*** ./src/app/faculty/faculty.component.ts ***!
  \**********************************************/
/*! exports provided: FacultyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FacultyComponent", function() { return FacultyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FacultyComponent = /** @class */ (function () {
    function FacultyComponent() {
    }
    FacultyComponent.prototype.ngOnInit = function () {
    };
    FacultyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-faculty',
            template: __webpack_require__(/*! ./faculty.component.html */ "./src/app/faculty/faculty.component.html"),
            styles: [__webpack_require__(/*! ./faculty.component.css */ "./src/app/faculty/faculty.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FacultyComponent);
    return FacultyComponent;
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

module.exports = "\n  <p>Developed By <strong>TEAM</strong></p>"

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

module.exports = "  <nav class=\"navbar navbar-expand-lg navbar-light\">\r\n    <div class=\"container\">\r\n      <div class=\"navbar-header\">\r\n        <a class=\"navbar-brand pointer\" (click)=\"goToHome()\">\r\n          <img src=\"../../assets/images/dancing-soul-logo.png\" alt=\"Dancing Soul\" class=\"logo\">\r\n        </a>\r\n      </div>\r\n \r\n        <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarResponsive\" aria-controls=\"navbarResponsive\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n          <span class=\"navbar-toggler-icon\"></span>\r\n        </button>\r\n        \r\n        <div class=\"collapse navbar-collapse\" id=\"navbarResponsive\">\r\n\r\n          <ul class=\"main-nav navbar-nav mr-auto\" *ngIf=\"!isLoggedIn && !user\">\r\n            <li class=\"nav-item\">\r\n              <a class=\"nav-link\" routerLink=\"about\">About Us</a>\r\n            </li>\r\n\r\n            <li class=\"nav-item\">\r\n              <a class=\"nav-link\" routerLink=\"branches\">Branches</a>\r\n            </li>\r\n\r\n            <li class=\"nav-item\">\r\n              <a class=\"nav-link\"  routerLink=\"\">Articles</a>\r\n            </li>\r\n            \r\n            <li class=\"nav-item\">\r\n              <a class=\"nav-link\"  routerLink=\"\">News Shelter</a>\r\n            </li>\r\n\r\n            <li class=\"nav-item\">\r\n              <a class=\"nav-link\" routerLink=\"gallery\">Photos/Videos</a>\r\n            </li>\r\n\r\n            <li class=\"nav-item\">\r\n              <a class=\"nav-link\" routerLink=\"contactUs\">Contact Us</a>\r\n            </li>\r\n\r\n            <li class=\"nav-item\">\r\n              <a class=\"nav-link\"  routerLink=\"\">Exams</a>\r\n            </li>\r\n\r\n            <li class=\"nav-item\">\r\n              <a class=\"nav-link\" routerLink=\"/login\" routerLinkActive=\"active\">Login</a>\r\n            </li>\r\n\r\n          </ul>\r\n\r\n          <ul class=\"main-nav navbar-nav mr-auto\" *ngIf=\"isLoggedIn && (user === 'admin')\">\r\n\r\n          </ul>\r\n\r\n          <ul class=\"main-nav navbar-nav mr-auto\" *ngIf=\"isLoggedIn && (user === 'student')\">\r\n            \r\n          </ul>\r\n\r\n          <ul class=\"main-nav navbar-nav mr-auto\" *ngIf=\"isLoggedIn && (user === 'faculty')\">\r\n\r\n          </ul>\r\n\r\n          <ul class=\"main-nav navbar-nav mr-auto\" *ngIf=\"isLoggedIn\">\r\n\r\n            <li class=\"nav-item\">\r\n              <a class=\"nav-link\" routerLink=\"\" (click)=\"onLogout()\" routerLinkActive=\"active\">Logout</a>\r\n            </li>\r\n\r\n          </ul>\r\n\r\n        </div>\r\n\r\n    </div>\r\n  </nav>"

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
            this.router.navigate(['/admin/dashboard'], { relativeTo: this.route });
        }
        else if (this.user === 'faculty') {
            this.router.navigate(['/faculty'], { relativeTo: this.route });
        }
        else if (this.user === 'student') {
            this.router.navigate(['/student/dashboard'], { relativeTo: this.route, queryParamsHandling: "preserve" });
        }
        else {
            this.router.navigate(['/'], { relativeTo: this.route });
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

/***/ "./src/app/login/change-password/change-password.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/login/change-password/change-password.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\r\n    margin: 0;\r\n}\r\n\r\n.alert-danger {\r\n    border-radius: 0px;\r\n}\r\n\r\n.close {\r\n    outline: none;\r\n}\r\n\r\nhr {\r\n    border: 1px solid #e67e22;\r\n    margin: 5px 0;\r\n}\r\n\r\n.btn-login {\r\n    outline: none;\r\n    cursor: pointer;\r\n    border: 1px solid #e67e22;\r\n    border-radius: 50px;\r\n    background-color: #e67e22;\r\n    padding: 3px 12px;\r\n    color: #fff;\r\n    margin: 0 auto;\r\n    transition: background-color 0.2s, color 0.2s;\r\n}\r\n\r\n.btn-login:hover {\r\n    background-color: #e67e22;\r\n    color: #fff;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vY2hhbmdlLXBhc3N3b3JkL2NoYW5nZS1wYXNzd29yZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksU0FBUztBQUNiOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGVBQWU7SUFDZix5QkFBeUI7SUFDekIsbUJBQW1CO0lBQ25CLHlCQUF5QjtJQUN6QixpQkFBaUI7SUFDakIsV0FBVztJQUNYLGNBQWM7SUFDZCw2Q0FBNkM7QUFDakQ7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsV0FBVztBQUNmIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vY2hhbmdlLXBhc3N3b3JkL2NoYW5nZS1wYXNzd29yZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XHJcbiAgICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbi5hbGVydC1kYW5nZXIge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMHB4O1xyXG59XHJcblxyXG4uY2xvc2Uge1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxufVxyXG5cclxuaHIge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2U2N2UyMjtcclxuICAgIG1hcmdpbjogNXB4IDA7XHJcbn1cclxuXHJcbi5idG4tbG9naW4ge1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlNjdlMjI7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U2N2UyMjtcclxuICAgIHBhZGRpbmc6IDNweCAxMnB4O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycywgY29sb3IgMC4ycztcclxufVxyXG5cclxuLmJ0bi1sb2dpbjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTY3ZTIyO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/login/change-password/change-password.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/login/change-password/change-password.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<img class=\"loading\" src=\"../../../assets/images/Reload-1.3s-78px.svg\" *ngIf=\"loading\">\n\n<div class=\"row mt-2\" *ngIf=\"!loading\">\n  <div class=\"col-md-6 col-sm-10 mx-auto\">\n    <h3 class=\"m-1\">Change Password</h3>\n    <form class=\"login-form\" (submit)=\"changePassword()\" [formGroup]=\"form\">\n      \n      <div class=\"form-group\">\n        <label for=\"username\">Current Password : </label>\n        <input type=\"password\" class=\"password\" name=\"current_password\" id=\"current_password\" formControlName=\"currentPassword\" placeholder=\"CURRENT PASSWORD\">\n        <span *ngIf=\"!form.get('currentPassword').valid && form.get('currentPassword').touched\">*Please enter Current Password</span>\n      </div>\n\n      <div class=\"form-group\">\n        <label for=\"username\">New Password : </label>\n        <input type=\"password\" class=\"password\" name=\"new_password\" id=\"new_password\" formControlName=\"newPassword\" placeholder=\"NEW PASSWORD\">\n        <span *ngIf=\"!form.get('newPassword').valid && form.get('newPassword').touched\">*Please enter New Password</span>\n      </div>\n      \n      <div class=\"form-group\">\n        <label for=\"password\">Confirm New Password : </label>\n        <input type=\"password\" class=\"password\" name=\"confirm_password\" id=\"confirm_password\" formControlName=\"confirmPassword\" placeholder=\"PASSWORD\">\n        <span *ngIf=\"!form.get('confirmPassword').valid && form.get('confirmPassword').touched\">*Please enter Confirm Password</span>\n      </div>\n      <span *ngIf=\"!form.get('confirmPassword').valid && form.get('confirmPassword').touched\">*New Password and Confirm Password Does Not Match</span>\n\n\n      \n      <hr>\n      \n      <button type=\"submit\" class=\"btn-login\">Login</button>\n      \n    </form>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/login/change-password/change-password.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/login/change-password/change-password.component.ts ***!
  \********************************************************************/
/*! exports provided: ChangePasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangePasswordComponent", function() { return ChangePasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _services_httpPost_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/httpPost.service */ "./src/app/services/httpPost.service.ts");






var ChangePasswordComponent = /** @class */ (function () {
    function ChangePasswordComponent(httpPostService, authService, roure, router) {
        this.httpPostService = httpPostService;
        this.authService = authService;
        this.roure = roure;
        this.router = router;
        this.loading = true;
    }
    ChangePasswordComponent.prototype.ngOnInit = function () {
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            currentPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
            }),
            newPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
            }),
            confirmPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
            })
        });
        this.user = "";
        this.loading = false;
    };
    ChangePasswordComponent.prototype.changePassword = function () {
        var _this = this;
        if (this.form.valid) {
            this.loading = true;
            var changedPassword = {
                user: this.user,
                password: this.form.value.password,
                newPassword: this.form.value.newPassword
            };
            var data = { api: "changePassword", data: changedPassword };
            this.httpPostService.httpPost(data).subscribe(function (val) {
                _this.loading = false;
            }, function (error) {
                _this.loading = false;
            });
        }
    };
    ChangePasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-change-password',
            template: __webpack_require__(/*! ./change-password.component.html */ "./src/app/login/change-password/change-password.component.html"),
            styles: [__webpack_require__(/*! ./change-password.component.css */ "./src/app/login/change-password/change-password.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_httpPost_service__WEBPACK_IMPORTED_MODULE_5__["HttpPostService"],
            _auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], ChangePasswordComponent);
    return ChangePasswordComponent;
}());



/***/ }),

/***/ "./src/app/login/forgot-password/forgot-password.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/login/forgot-password/forgot-password.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\r\n    margin: 0;\r\n}\r\n\r\n.alert-danger {\r\n    border-radius: 0px;\r\n}\r\n\r\n.close {\r\n    outline: none;\r\n}\r\n\r\n.text-green {\r\n    color: #75a27f;\r\n}\r\n\r\nhr {\r\n    border: 1px solid #e67e22;\r\n    margin: 5px 0;\r\n}\r\n\r\n.btn-login {\r\n    outline: none;\r\n    cursor: pointer;\r\n    border: 1px solid #e67e22;\r\n    border-radius: 50px;\r\n    background-color: #e67e22;\r\n    padding: 3px 12px;\r\n    color: #fff;\r\n    margin: 0 auto;\r\n    transition: background-color 0.2s, color 0.2s;\r\n}\r\n\r\n.btn-login:hover {\r\n    background-color: #e67e22;\r\n    color: #fff;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vZm9yZ290LXBhc3N3b3JkL2ZvcmdvdC1wYXNzd29yZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksU0FBUztBQUNiOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixlQUFlO0lBQ2YseUJBQXlCO0lBQ3pCLG1CQUFtQjtJQUNuQix5QkFBeUI7SUFDekIsaUJBQWlCO0lBQ2pCLFdBQVc7SUFDWCxjQUFjO0lBQ2QsNkNBQTZDO0FBQ2pEOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLFdBQVc7QUFDZiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2ZvcmdvdC1wYXNzd29yZC9mb3Jnb3QtcGFzc3dvcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIioge1xyXG4gICAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4uYWxlcnQtZGFuZ2VyIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDBweDtcclxufVxyXG5cclxuLmNsb3NlIHtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuXHJcbi50ZXh0LWdyZWVuIHtcclxuICAgIGNvbG9yOiAjNzVhMjdmO1xyXG59XHJcblxyXG5ociB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZTY3ZTIyO1xyXG4gICAgbWFyZ2luOiA1cHggMDtcclxufVxyXG5cclxuLmJ0bi1sb2dpbiB7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2U2N2UyMjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTY3ZTIyO1xyXG4gICAgcGFkZGluZzogM3B4IDEycHg7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjJzLCBjb2xvciAwLjJzO1xyXG59XHJcblxyXG4uYnRuLWxvZ2luOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlNjdlMjI7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/login/forgot-password/forgot-password.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/login/forgot-password/forgot-password.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<img class=\"loading\" src=\"../../../assets/images/Reload-1.3s-78px.svg\" *ngIf=\"loading\">\n\n<div class=\"row mt-2\" *ngIf=\"!loading\">\n  <div class=\"col-12\">\n    <div class=\"row mt-3\" *ngIf=\"!loginAuth\">\n      <div class=\"col-10 mx-auto\">\n        <div class=\"alert alert-danger alert-dismissible\">\n          <button type=\"button\" class=\"close\" (click)=\"alertDismiss()\" data-dismiss=\"alert\">&times;</button>\n            <span>Invalid Username</span>\n        </div>\n      </div>\n    </div>\n  \n    <div class=\"row mt-3\" *ngIf=\"linkSend\">\n      <div class=\"col-10 mx-auto\">\n        <div class=\"alert alert-success alert-dismissible\">\n          <button type=\"button\" class=\"close\" (click)=\"alertDismiss()\" data-dismiss=\"alert\">&times;</button>\n            <span class=\"text-green\">Reset Password Link Send to your email <strong>Successfully!!!</strong></span>\n        </div>\n      </div>\n    </div>\n    \n    <div class=\"row\">\n      <div class=\"col-md-6 col-sm-10 mx-auto\">\n        <h3 class=\"m-1\">Forgot your Password?</h3>\n        <form class=\"login-form\" (submit)=\"forgotPassword()\" [formGroup]=\"form\">\n          \n          <div class=\"form-group mb-3\">\n            <label for=\"username\">Enter User Name : </label>\n            <input type=\"text\" class=\"username\" name=\"username\" id=\"username\" formControlName=\"forgotPassword\" placeholder=\"USERNAME\">\n            <span *ngIf=\"!form.get('forgotPassword').valid && form.get('forgotPassword').touched\">*Please enter User Name</span>\n          </div>\n          \n          <hr>\n          \n          <button type=\"submit\" class=\"btn-login\">Send Reset Link</button>\n          \n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/login/forgot-password/forgot-password.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/login/forgot-password/forgot-password.component.ts ***!
  \********************************************************************/
/*! exports provided: ForgotPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordComponent", function() { return ForgotPasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _services_httpPost_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/httpPost.service */ "./src/app/services/httpPost.service.ts");





var ForgotPasswordComponent = /** @class */ (function () {
    function ForgotPasswordComponent(httpPostService, authService) {
        this.httpPostService = httpPostService;
        this.authService = authService;
        this.loginAuth = true;
        this.loading = true;
        this.linkSend = false;
    }
    ForgotPasswordComponent.prototype.ngOnInit = function () {
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            forgotPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
            })
        });
        this.loading = false;
    };
    ForgotPasswordComponent.prototype.forgotPassword = function () {
        var _this = this;
        if (this.form.invalid) {
            return this.loginAuth = false;
        }
        if (this.form.valid) {
            this.loginAuth = true;
            this.loading = true;
            var data = { api: "forgotPassword", data: { mail: this.form.value.forgotPassword } };
            this.httpPostService.httpPost(data).subscribe(function (val) {
                _this.linkSend = true;
                _this.loading = false;
            }, function (error) {
                _this.loading = false;
            });
        }
    };
    ForgotPasswordComponent.prototype.alertDismiss = function () {
        this.loginAuth = true;
        this.linkSend = false;
    };
    ForgotPasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-forgot-password',
            template: __webpack_require__(/*! ./forgot-password.component.html */ "./src/app/login/forgot-password/forgot-password.component.html"),
            styles: [__webpack_require__(/*! ./forgot-password.component.css */ "./src/app/login/forgot-password/forgot-password.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_httpPost_service__WEBPACK_IMPORTED_MODULE_4__["HttpPostService"],
            _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], ForgotPasswordComponent);
    return ForgotPasswordComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\r\n    margin: 0;\r\n}\r\n\r\n.alert-danger {\r\n    border-radius: 0px;\r\n}\r\n\r\n.close {\r\n    outline: none;\r\n}\r\n\r\nhr {\r\n    border: 1px solid #e67e22;\r\n    margin: 5px 0;\r\n}\r\n\r\n.btn-login {\r\n    outline: none;\r\n    cursor: pointer;\r\n    border: 1px solid #e67e22;\r\n    border-radius: 50px;\r\n    background-color: #e67e22;\r\n    padding: 3px 12px;\r\n    color: #fff;\r\n    margin: 0 auto;\r\n    transition: background-color 0.2s, color 0.2s;\r\n}\r\n\r\n.btn-login:hover {\r\n    background-color: #e67e22;\r\n    color: #fff;\r\n}\r\n\r\na {\r\n    font-size: 80%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixlQUFlO0lBQ2YseUJBQXlCO0lBQ3pCLG1CQUFtQjtJQUNuQix5QkFBeUI7SUFDekIsaUJBQWlCO0lBQ2pCLFdBQVc7SUFDWCxjQUFjO0lBQ2QsNkNBQTZDO0FBQ2pEOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGNBQWM7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XHJcbiAgICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbi5hbGVydC1kYW5nZXIge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMHB4O1xyXG59XHJcblxyXG4uY2xvc2Uge1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxufVxyXG5cclxuaHIge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2U2N2UyMjtcclxuICAgIG1hcmdpbjogNXB4IDA7XHJcbn1cclxuXHJcbi5idG4tbG9naW4ge1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlNjdlMjI7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U2N2UyMjtcclxuICAgIHBhZGRpbmc6IDNweCAxMnB4O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycywgY29sb3IgMC4ycztcclxufVxyXG5cclxuLmJ0bi1sb2dpbjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTY3ZTIyO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbmEge1xyXG4gICAgZm9udC1zaXplOiA4MCU7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<img class=\"loading\" src=\"../../../assets/images/Reload-1.3s-78px.svg\" *ngIf=\"loading\">\n\n<div class=\"row mt-2\" *ngIf=\"!loading\">\n  <div class=\"col-12\">\n    \n    <div class=\"row mt-3\" *ngIf=\"!loginAuth\">\n      <div class=\"col-10 mx-auto\">\n        <div class=\"alert alert-danger alert-dismissible\">\n          <button type=\"button\" class=\"close\" (click)=\"alertDismiss()\" data-dismiss=\"alert\">&times;</button>\n            <span>Invalid Username or Password</span>\n        </div>\n      </div>\n    </div>\n    \n    <div class=\"row\">\n      <div class=\"col-md-5 col-sm-10 mx-auto\">\n        <h3 class=\"m-1\">Login</h3>\n        <form class=\"login-form\" (submit)=\"login()\" [formGroup]=\"form\">\n  \n          <div class=\"row\">\n            <div class=\"col-12\">\n              <div class=\"form-group\">\n                <label for=\"username\">User Name : </label>\n                <input type=\"text\" class=\"username\" name=\"username\" id=\"username\" formControlName=\"username\" placeholder=\"USERNAME\">\n                <span *ngIf=\"!form.get('username').valid && form.get('username').touched\">*Please enter User Name</span>\n              </div>\n            </div>\n          </div>\n          \n          \n          <div class=\"row\">\n            <div class=\"col-12\">\n              <div class=\"form-group\">\n                <label for=\"password\">Password : </label>\n                <input type=\"password\" class=\"password\" name=\"password\" id=\"password\" formControlName=\"password\" placeholder=\"PASSWORD\">\n                <span *ngIf=\"!form.get('password').valid && form.get('password').touched\">*Please enter Password</span>\n              </div>\n            </div>\n          </div>\n          \n          <hr>\n  \n          <div class=\"row\">\n            <div class=\"col-md-6 col-sm-12\">\n              <button type=\"submit\" class=\"btn-login\">Login</button>\n            </div>\n            <div class=\"col-md-6 col-sm-12\">\n              <a routerLink=\"/forgot_password\">Forgot Password</a>\n            </div>\n          </div>\n          \n        </form>\n      </div>\n    </div>\n    \n  </div>\n</div>"

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
        this.loading = true;
    }
    LoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.roure.queryParams
            .subscribe(function (params) {
            if (params.status == 'false') {
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
        this.loading = false;
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

/***/ "./src/app/login/reset-password/reset-password.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/login/reset-password/reset-password.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\r\n    margin: 0;\r\n}\r\n\r\n.alert-danger {\r\n    border-radius: 0px;\r\n}\r\n\r\n.close {\r\n    outline: none;\r\n}\r\n\r\nhr {\r\n    border: 1px solid #e67e22;\r\n    margin: 5px 0;\r\n}\r\n\r\n.btn-login {\r\n    outline: none;\r\n    cursor: pointer;\r\n    border: 1px solid #e67e22;\r\n    border-radius: 50px;\r\n    background-color: #e67e22;\r\n    padding: 3px 12px;\r\n    color: #fff;\r\n    margin: 0 auto;\r\n    transition: background-color 0.2s, color 0.2s;\r\n}\r\n\r\n.btn-login:hover {\r\n    background-color: #e67e22;\r\n    color: #fff;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vcmVzZXQtcGFzc3dvcmQvcmVzZXQtcGFzc3dvcmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixlQUFlO0lBQ2YseUJBQXlCO0lBQ3pCLG1CQUFtQjtJQUNuQix5QkFBeUI7SUFDekIsaUJBQWlCO0lBQ2pCLFdBQVc7SUFDWCxjQUFjO0lBQ2QsNkNBQTZDO0FBQ2pEOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLFdBQVc7QUFDZiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL3Jlc2V0LXBhc3N3b3JkL3Jlc2V0LXBhc3N3b3JkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqIHtcclxuICAgIG1hcmdpbjogMDtcclxufVxyXG5cclxuLmFsZXJ0LWRhbmdlciB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwcHg7XHJcbn1cclxuXHJcbi5jbG9zZSB7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG59XHJcblxyXG5ociB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZTY3ZTIyO1xyXG4gICAgbWFyZ2luOiA1cHggMDtcclxufVxyXG5cclxuLmJ0bi1sb2dpbiB7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2U2N2UyMjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTY3ZTIyO1xyXG4gICAgcGFkZGluZzogM3B4IDEycHg7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjJzLCBjb2xvciAwLjJzO1xyXG59XHJcblxyXG4uYnRuLWxvZ2luOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlNjdlMjI7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/login/reset-password/reset-password.component.html":
/*!********************************************************************!*\
  !*** ./src/app/login/reset-password/reset-password.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<img class=\"loading\" src=\"../../../assets/images/Reload-1.3s-78px.svg\" *ngIf=\"loading\">\n\n<div class=\"row mt-2\" *ngIf=\"!loading\">\n  <div class=\"col-md-6 col-sm-10 mx-auto\">\n    <h3 class=\"m-1\">Reset Password</h3>\n    <form class=\"login-form\" (submit)=\"resetPassword()\" [formGroup]=\"form\">\n      \n      <div class=\"form-group\">\n        <label for=\"username\">New Password : </label>\n        <input type=\"password\" class=\"password\" name=\"new_password\" id=\"new_password\" formControlName=\"newPassword\" placeholder=\"NEW PASSWORD\">\n        <span *ngIf=\"!form.get('newPassword').valid && form.get('newPassword').touched\">*Please enter New Password</span>\n      </div>\n      \n      <div class=\"form-group\">\n        <label for=\"password\">Confirm New Password : </label>\n        <input type=\"password\" class=\"password\" name=\"confirm_password\" id=\"confirm_password\" formControlName=\"confirmPassword\" placeholder=\"PASSWORD\">\n        <span *ngIf=\"!form.get('confirmPassword').valid && form.get('confirmPassword').touched\">*Please enter Confirm Password</span>\n      </div>\n      <span *ngIf=\"!form.get('confirmPassword').valid && form.get('confirmPassword').touched\">*New Password and Confirm Password Does Not Match</span>\n          \n      <hr>\n      \n      <button type=\"submit\" class=\"btn-login\">Send Reset Link</button>\n      \n    </form>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/login/reset-password/reset-password.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/login/reset-password/reset-password.component.ts ***!
  \******************************************************************/
/*! exports provided: ResetPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetPasswordComponent", function() { return ResetPasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _services_httpPost_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/httpPost.service */ "./src/app/services/httpPost.service.ts");






var ResetPasswordComponent = /** @class */ (function () {
    function ResetPasswordComponent(httpPostService, authService, roure, router) {
        this.httpPostService = httpPostService;
        this.authService = authService;
        this.roure = roure;
        this.router = router;
        this.loading = true;
    }
    ResetPasswordComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            newPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
            }),
            confirmPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
            })
        });
        this.roure.queryParams
            .subscribe(function (params) {
            if (params.token === undefined) {
                _this.router.navigate(['/page_not_found'], { relativeTo: _this.roure });
            }
            else {
                _this.token = params.token;
                var data = { api: "validateToken", data: { token: _this.token } };
                _this.httpPostService.httpPost(data).subscribe(function (val) {
                    _this.user = val[0].user;
                    _this.loading = false;
                }, function (error) {
                });
            }
        });
    };
    ResetPasswordComponent.prototype.resetPassword = function () {
        var _this = this;
        if (this.form.valid) {
            this.loading = true;
            var resetPassword = {
                user: this.user,
                password: this.form.value.password,
                token: this.token
            };
            var data = { api: "resetPassword", data: resetPassword };
            this.httpPostService.httpPost(data).subscribe(function (val) {
                _this.form.reset();
                _this.router.navigate(["/login"], { relativeTo: _this.roure });
            }, function (error) {
                _this.loading = false;
            });
        }
    };
    ResetPasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-reset-password',
            template: __webpack_require__(/*! ./reset-password.component.html */ "./src/app/login/reset-password/reset-password.component.html"),
            styles: [__webpack_require__(/*! ./reset-password.component.css */ "./src/app/login/reset-password/reset-password.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_httpPost_service__WEBPACK_IMPORTED_MODULE_5__["HttpPostService"],
            _auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], ResetPasswordComponent);
    return ResetPasswordComponent;
}());



/***/ }),

/***/ "./src/app/services/httpPost.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/httpPost.service.ts ***!
  \**********************************************/
/*! exports provided: HttpPostService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpPostService", function() { return HttpPostService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");





var HttpPostService = /** @class */ (function () {
    function HttpPostService(http) {
        this.http = http;
    }
    HttpPostService.prototype.httpPost = function (data) {
        return this.http.post("/dancingSoul", data)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) {
            console.log(response);
            return response;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (err) {
            console.log(err);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])("SOMETHING BAD HAPPENED");
        }));
        ;
    };
    HttpPostService.prototype.httpImagePost = function (api, data) {
        return this.http.post("/dancingSoul", data)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) {
            return response;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (err) {
            console.log(err);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])("SOMETHING BAD HAPPENED");
        }));
        ;
    };
    HttpPostService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Injectable"])({
            providedIn: "root"
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], HttpPostService);
    return HttpPostService;
}());



/***/ }),

/***/ "./src/app/student/student-attendance/student-attendance.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/student/student-attendance/student-attendance.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\r\n    margin: 0;\r\n}\r\n\r\nh3 {\r\n    font-size: 150%;\r\n}\r\n\r\nhr {\r\n    border: 1px solid #e67e22;\r\n    margin: 5px 0;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3R1ZGVudC9zdHVkZW50LWF0dGVuZGFuY2Uvc3R1ZGVudC1hdHRlbmRhbmNlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxTQUFTO0FBQ2I7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGFBQWE7QUFDakIiLCJmaWxlIjoic3JjL2FwcC9zdHVkZW50L3N0dWRlbnQtYXR0ZW5kYW5jZS9zdHVkZW50LWF0dGVuZGFuY2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIioge1xyXG4gICAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG5oMyB7XHJcbiAgICBmb250LXNpemU6IDE1MCU7XHJcbn1cclxuXHJcbmhyIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlNjdlMjI7XHJcbiAgICBtYXJnaW46IDVweCAwO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/student/student-attendance/student-attendance.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/student/student-attendance/student-attendance.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  student-attendance works!\n</p>\n"

/***/ }),

/***/ "./src/app/student/student-attendance/student-attendance.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/student/student-attendance/student-attendance.component.ts ***!
  \****************************************************************************/
/*! exports provided: StudentAttendanceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentAttendanceComponent", function() { return StudentAttendanceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var StudentAttendanceComponent = /** @class */ (function () {
    function StudentAttendanceComponent(route, router) {
        this.route = route;
        this.router = router;
    }
    StudentAttendanceComponent.prototype.ngOnInit = function () {
        this.route.queryParams.
            subscribe(function (params) {
            var _id = params["id"];
        });
    };
    StudentAttendanceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-student-attendance',
            template: __webpack_require__(/*! ./student-attendance.component.html */ "./src/app/student/student-attendance/student-attendance.component.html"),
            styles: [__webpack_require__(/*! ./student-attendance.component.css */ "./src/app/student/student-attendance/student-attendance.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], StudentAttendanceComponent);
    return StudentAttendanceComponent;
}());



/***/ }),

/***/ "./src/app/student/student-dashboard/student-dashboard.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/student/student-dashboard/student-dashboard.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N0dWRlbnQvc3R1ZGVudC1kYXNoYm9hcmQvc3R1ZGVudC1kYXNoYm9hcmQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/student/student-dashboard/student-dashboard.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/student/student-dashboard/student-dashboard.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  student-dashboard works!\n</p>\n"

/***/ }),

/***/ "./src/app/student/student-dashboard/student-dashboard.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/student/student-dashboard/student-dashboard.component.ts ***!
  \**************************************************************************/
/*! exports provided: StudentDashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentDashboardComponent", function() { return StudentDashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_httpPost_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/httpPost.service */ "./src/app/services/httpPost.service.ts");




var StudentDashboardComponent = /** @class */ (function () {
    function StudentDashboardComponent(httpPostService, route, router) {
        this.httpPostService = httpPostService;
        this.route = route;
        this.router = router;
        this.loading = true;
    }
    StudentDashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.queryParams.
            subscribe(function (params) {
            var _id = params["id"];
            var studentData = { api: "getStudent", data: { _id: _id } };
            _this.httpPostService.httpPost(studentData).subscribe(function (val) {
                _this.student = val[0];
                var branchData = { api: "getBranch", data: { _id: _this.student.branch } };
                _this.httpPostService.httpPost(branchData).subscribe(function (val) {
                    _this.branch = val[0];
                    _this.loading = false;
                }, function (error) {
                });
            }, function (error) {
            });
        });
    };
    StudentDashboardComponent.prototype.cancel = function () {
        this.loading = true;
        this.router.navigate(['/admin', 'student'], { relativeTo: this.route, skipLocationChange: true });
    };
    StudentDashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-student-dashboard',
            template: __webpack_require__(/*! ./student-dashboard.component.html */ "./src/app/student/student-dashboard/student-dashboard.component.html"),
            styles: [__webpack_require__(/*! ./student-dashboard.component.css */ "./src/app/student/student-dashboard/student-dashboard.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_httpPost_service__WEBPACK_IMPORTED_MODULE_3__["HttpPostService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], StudentDashboardComponent);
    return StudentDashboardComponent;
}());



/***/ }),

/***/ "./src/app/student/student-receipts/student-receipts.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/student/student-receipts/student-receipts.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\r\n    margin: 0;\r\n}\r\n\r\nh3 {\r\n    font-size: 150%;\r\n}\r\n\r\nhr {\r\n    border: 1px solid #e67e22;\r\n    margin: 5px 0;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3R1ZGVudC9zdHVkZW50LXJlY2VpcHRzL3N0dWRlbnQtcmVjZWlwdHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsYUFBYTtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL3N0dWRlbnQvc3R1ZGVudC1yZWNlaXB0cy9zdHVkZW50LXJlY2VpcHRzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqIHtcclxuICAgIG1hcmdpbjogMDtcclxufVxyXG5cclxuaDMge1xyXG4gICAgZm9udC1zaXplOiAxNTAlO1xyXG59XHJcblxyXG5ociB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZTY3ZTIyO1xyXG4gICAgbWFyZ2luOiA1cHggMDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/student/student-receipts/student-receipts.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/student/student-receipts/student-receipts.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<img class=\"loading\" src=\"../../../assets/images/Reload-1.3s-78px.svg\" *ngIf=\"loading\">\n\n<div class=\"row mt-2\" *ngIf=\"!loading\"> \n  <div class=\"col-12 mx-auto\">\n    <h3>Receipts</h3>\n    <hr>\n    <div class=\"row\" *ngIf=\"receipts.length > 0; else empty_receipts\">\n      <div class=\"table-responsive\">\n        <table class=\"table table-sm table-hover\">\n          <tbody>\n            <tr>\n              <th>ID</th>\n              <th>Amount</th>\n              <th>Month</th>\n              <th>Payment Mode</th>\n            </tr>\n            <tr class=\"receipt\" *ngFor=\"let receipt of receipts; let i = index\" routerLinkActive=\"active\">\n              <td>{{ i+1 }}</td>\n              <td>\n                Rs. {{ receipt.amount }}.00/-\n              </td>\n              <td>\n                {{ receipt.months }}\n              </td>\n              <td>\n                {{ receipt.paymentMode | uppercase }}\n              </td>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n    </div>\n    <ng-template #empty_receipts>\n      <h5 class=\"pl-3\">No Receipts Available</h5>\n    </ng-template>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/student/student-receipts/student-receipts.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/student/student-receipts/student-receipts.component.ts ***!
  \************************************************************************/
/*! exports provided: StudentReceiptsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentReceiptsComponent", function() { return StudentReceiptsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_httpPost_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/httpPost.service */ "./src/app/services/httpPost.service.ts");




var StudentReceiptsComponent = /** @class */ (function () {
    function StudentReceiptsComponent(httpPostService, route, router) {
        this.httpPostService = httpPostService;
        this.route = route;
        this.router = router;
        this.receipts = [];
        this.loading = true;
    }
    StudentReceiptsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.queryParams.
            subscribe(function (params) {
            var _id = params["id"];
            _this.loading = false;
        });
    };
    StudentReceiptsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-student-receipts',
            template: __webpack_require__(/*! ./student-receipts.component.html */ "./src/app/student/student-receipts/student-receipts.component.html"),
            styles: [__webpack_require__(/*! ./student-receipts.component.css */ "./src/app/student/student-receipts/student-receipts.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_httpPost_service__WEBPACK_IMPORTED_MODULE_3__["HttpPostService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], StudentReceiptsComponent);
    return StudentReceiptsComponent;
}());



/***/ }),

/***/ "./src/app/student/student-receipts/student-show-receipt/student-show-receipt.component.css":
/*!**************************************************************************************************!*\
  !*** ./src/app/student/student-receipts/student-show-receipt/student-show-receipt.component.css ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N0dWRlbnQvc3R1ZGVudC1yZWNlaXB0cy9zdHVkZW50LXNob3ctcmVjZWlwdC9zdHVkZW50LXNob3ctcmVjZWlwdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/student/student-receipts/student-show-receipt/student-show-receipt.component.html":
/*!***************************************************************************************************!*\
  !*** ./src/app/student/student-receipts/student-show-receipt/student-show-receipt.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  student-show-receipt works!\n</p>\n"

/***/ }),

/***/ "./src/app/student/student-receipts/student-show-receipt/student-show-receipt.component.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/student/student-receipts/student-show-receipt/student-show-receipt.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: StudentShowReceiptComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentShowReceiptComponent", function() { return StudentShowReceiptComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var StudentShowReceiptComponent = /** @class */ (function () {
    function StudentShowReceiptComponent() {
    }
    StudentShowReceiptComponent.prototype.ngOnInit = function () {
    };
    StudentShowReceiptComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-student-show-receipt',
            template: __webpack_require__(/*! ./student-show-receipt.component.html */ "./src/app/student/student-receipts/student-show-receipt/student-show-receipt.component.html"),
            styles: [__webpack_require__(/*! ./student-show-receipt.component.css */ "./src/app/student/student-receipts/student-show-receipt/student-show-receipt.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], StudentShowReceiptComponent);
    return StudentShowReceiptComponent;
}());



/***/ }),

/***/ "./src/app/student/student.component.css":
/*!***********************************************!*\
  !*** ./src/app/student/student.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\r\n    margin: 0;\r\n}\r\n\r\nh3 {\r\n    font-size: 150%;\r\n}\r\n\r\nhr {\r\n    border: 1px solid #e67e22;\r\n    margin: 5px 0;\r\n}\r\n\r\na {\r\n    color : #000;\r\n    transition: all 0.2s;\r\n}\r\n\r\na:hover {\r\n    background-color: #e67e22;\r\n    color: #fff;\r\n}\r\n\r\n.nav-item .active {\r\n    background-color: #e67e22;\r\n    color: #fff;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3R1ZGVudC9zdHVkZW50LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxTQUFTO0FBQ2I7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixXQUFXO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC9zdHVkZW50L3N0dWRlbnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIioge1xyXG4gICAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG5oMyB7XHJcbiAgICBmb250LXNpemU6IDE1MCU7XHJcbn1cclxuXHJcbmhyIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlNjdlMjI7XHJcbiAgICBtYXJnaW46IDVweCAwO1xyXG59XHJcblxyXG5hIHtcclxuICAgIGNvbG9yIDogIzAwMDtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzO1xyXG59XHJcblxyXG5hOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlNjdlMjI7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxufVxyXG5cclxuLm5hdi1pdGVtIC5hY3RpdmUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U2N2UyMjtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/student/student.component.html":
/*!************************************************!*\
  !*** ./src/app/student/student.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-10 mx-auto\">\n    <div class=\"row\">\n      <div class=\"col-12\">\n        <nav>\n          <ul class=\"nav nav-tabs mt-2\">\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" routerLink=\"dashboard\" routerLinkActive=\"active\" queryParamsHandling=\"preserve\">Dashboard</a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" routerLink=\"attendance\" routerLinkActive=\"active\" queryParamsHandling=\"preserve\">Attendance</a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" routerLink=\"receipts\" routerLinkActive=\"active\" queryParamsHandling=\"preserve\">Receipts</a>      \n            </li>\n          </ul>\n        </nav>\n      </div>\n    </div>\n    \n    <div class=\"row\">\n      <div class=\"col-12\">\n        <router-outlet></router-outlet>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/student/student.component.ts":
/*!**********************************************!*\
  !*** ./src/app/student/student.component.ts ***!
  \**********************************************/
/*! exports provided: StudentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentComponent", function() { return StudentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var StudentComponent = /** @class */ (function () {
    function StudentComponent(route, router) {
        this.route = route;
        this.router = router;
    }
    StudentComponent.prototype.ngOnInit = function () {
        var id;
        this.route.queryParams.
            subscribe(function (params) {
            id = params["id"];
        });
        this.router.navigate(['dashboard'], { relativeTo: this.route, queryParamsHandling: "preserve" });
    };
    StudentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-student',
            template: __webpack_require__(/*! ./student.component.html */ "./src/app/student/student.component.html"),
            styles: [__webpack_require__(/*! ./student.component.css */ "./src/app/student/student.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], StudentComponent);
    return StudentComponent;
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
    FormValidator.prototype.monthsValidator = function (formArray) {
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

module.exports = __webpack_require__(/*! E:\Projects\Angular Projects\Dancing Soul\dancing soul git\dancing-soul\admin-front-end\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map