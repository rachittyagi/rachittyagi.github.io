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
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-about/app-about.component.css":
/*!***************************************************!*\
  !*** ./src/app/app-about/app-about.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".about {       \r\n    /* height : calc(100vh - 56px);\r\n    min-width : 100%;\r\n    background-size:100% 100%;\r\n    overflow-x: hidden;\r\n    padding: 95px 40px 100px 10px;    \r\n    margin-right: auto;\r\n    margin-left: auto; */    \r\n    overflow-x: hidden;\r\n    padding: 95px 40px 100px 10px; \r\n}\r\n.container-about .row {\r\n    margin-left: 25px;\r\n    margin-right: 25px;\r\n}\r\n.about h2 {\r\n\tfont-family: 'Roboto', sans-serif;\r\n\tcolor: #515151;\r\n\tfont-weight: 600;\r\n\tfont-size: 30px;\r\n\ttext-align: center;\r\n\tpadding-bottom: 15px;\r\n\ttext-transform: uppercase;\r\n}\r\n.about .p1 {\r\n\ttext-align: center;\r\n\tpadding-bottom: 60px;\r\n}\r\n.about .woman {\r\n\tbackground: url('woman.jpg') no-repeat;\r\n\theight: 625px;\r\n}\r\n.about .bgAbout1 {\r\n\tborder: 10px solid #efefef;\r\n\tbackground: #FFF;\r\n\twidth: 470px;\r\n\tfloat: left;\r\n\tpadding: 25px;\r\n\tposition: absolute;\r\n\tz-index: 9;\r\n\ttop: 475px;\r\n}\r\n.about .bgAbout1 h1 {\r\n\tfont-family: 'Roboto', sans-serif;\r\n\tcolor: #515151;\r\n\tfont-weight: 600;\r\n\tfont-size: 30px;\r\n\ttext-align: center;\r\n}\r\n.about .bgAbout1 .follow {\r\n\tposition: absolute;\r\n\tz-index: 9;\r\n    /* left: 435px; */\r\n    left: 397px;\r\n\tmargin-top: 10px;\r\n}\r\n.about .bgAbout1 .follow ul {\r\n\tlist-style: none;\r\n}\r\n.about .bgAbout1 .follow ul li {\r\n\ttext-align: center;\r\n}\r\n.about .bgAbout1 .follow ul li a {\r\n\tcolor: #ddd;\r\n}\r\n.blue1 {\r\n\tbackground: #efefef;\r\n\tborder-radius: 50px;\r\n\tpadding: 5px 9px;\r\n\tmargin: 10px 0;\r\n\tcursor: pointer;  \r\n transition: all 0.3s ease-out;\r\n}\r\n.blue1:hover {\r\n\tbackground: #1a237e;\r\n}\r\n.celestial {\r\n\tbackground: #efefef;\r\n\tborder-radius: 50px;\r\n\tpadding: 5px 9px;\r\n\tmargin: 10px 0;\r\n\tcursor: pointer;  \r\n transition: all 0.3s ease-out;\r\n}\r\n.celestial:hover {\r\n\tbackground: #00b0ff;\r\n}\r\n.red {\r\n\tbackground: #efefef;\r\n\tborder-radius: 50px;\r\n\tpadding: 5px 9px;\r\n\tmargin: 10px 0;\r\n\tcursor: pointer;  \r\n transition: all 0.3s ease-out;\r\n}\r\n.red:hover {\r\n\tbackground: #f4544a;\r\n}\r\n.blue2 {\r\n\tbackground: #efefef;\r\n\tborder-radius: 50px;\r\n\tpadding: 5px 9px;\r\n\tmargin: 10px 0;\r\n\tcursor: pointer;  \r\n transition: all 0.3s ease-out;\r\n}\r\n.blue2:hover {\r\n\tbackground: #1565c0;\r\n}\r\n.about .man {\r\n\tbackground: url('man.jpg') no-repeat;\r\n\twidth: 100%;\r\n\theight: 625px;\r\n}\r\n.about .bgAbout2 {\r\n\tborder: 10px solid #efefef;\r\n\tbackground: #FFF;\r\n\twidth: 470px;\r\n\tright: 0;\r\n\tpadding: 25px;\r\n\tposition: absolute;\r\n\tz-index: 9;\r\n\ttop: 475px;\r\n}\r\n.about .bgAbout2 h1 {\r\n\tcolor: #515151;\r\n\tfont-weight: 600;\r\n\tfont-size: 30px;\r\n\ttext-align: center;\r\n}\r\n.about .bgAbout2 .follow {\r\n\tposition: absolute;\r\n\tz-index: 9;\r\n\tleft: -63px;\r\n\tmargin-top: 10px;\r\n}\r\n.about .bgAbout2 .follow ul {\r\n\tlist-style: none;\r\n}\r\n.about .bgAbout2 .follow ul li {\r\n\ttext-align: center;\r\n}\r\n.about .bgAbout2 .follow ul li a {\r\n\tcolor: #ddd;\r\n}\r\n@media (min-width: 1200px) {\r\n\t\r\n\t\r\n\t.about .woman {\r\n\t\tfloat: right;\r\n\t\twidth: 370px;\r\n\t}\r\n\t\r\n\t.about .man {\r\n\t\tfloat: left;\r\n\t}\r\n\t\r\n\t.about {\r\n\t\tpadding: 97px 0 203px 0;\r\n\t}\r\n\r\n\t.text-center {\r\n\t\twidth: 600px;\r\n   \t\tmargin: 30px auto;\r\n\t}\r\n}\r\n@media (max-width: 1200px) {\r\n        \r\n    .about .bgAbout1, .about .bgAbout2 {\r\n\t\tdisplay: none;\r\n\t}\r\n}\r\n@media (min-width: 992px) and (max-width: 1199px) {\r\n\t\r\n\t.about .woman {\r\n\t\twidth: 370px;\r\n\t}\r\n\t\r\n\t.about {\r\n\t\tpadding: 97px 0 70px 0;\r\n\t}\r\n\r\n    .img-center1 {\r\n\t\twidth: 300px;\r\n\t\tmargin: 0 auto;\r\n\t}\r\n\r\n\t.text-center {\r\n\t\twidth: 600px;\r\n   \t\tmargin: 30px auto;\r\n\t}\r\n\r\n\t.img-center {\r\n\t\twidth: 300px;\r\n\t\tmargin: 0 auto;\r\n\t}\r\n}\r\n@media (min-width: 768px) and (max-width: 991px) {\r\n    \r\n\t.img-center {\r\n\t\twidth: 300px;\r\n\t\tmargin: 0 auto;\r\n\t}\r\n\t\r\n\t.about .woman {\r\n\t\twidth: 100%;\r\n\t}\r\n\t\r\n\t.about {\r\n\t\tpadding: 97px 0 100px 0;\r\n\t}\r\n\r\n\r\n\r\n\t.img-center1 {\r\n\t\twidth: 300px;\r\n\t\tmargin: 0 auto;\r\n\t}\r\n\r\n\t.text-center {\r\n\t\twidth: 600px;\r\n   \t\tmargin: 30px auto;\r\n\t}\r\n\r\n}\r\n@media (max-width: 768px) {\r\n    .text-center1 {\r\n        text-align: center;\r\n    }\r\n}\r\n@media (min-width: 480px) and (max-width: 767px) {\r\n    \r\n\t\r\n\t.img-center {\r\n\t\twidth: 300px;\r\n\t\tmargin: 0 auto;\r\n\t}\r\n\t\r\n\t.about .woman {\r\n\t\twidth: 100%;\r\n\t}\r\n\t\r\n\t.about {\r\n\t\tpadding: 97px 0 100px 0;\r\n\t}\r\n\r\n}\r\n@media (min-width: 300px) and (max-width: 489px) {\r\n    .about .woman {\r\n\t\twidth: 300px;\r\n\t\tmargin: 0 auto;\r\n\t}\r\n\t\r\n\t.img-center {\r\n\t\twidth: 300px;\r\n\t\tmargin: 0 auto;\r\n\t}\r\n\t\r\n\t.about .woman {\r\n\t\twidth: 100%;\r\n\t}\r\n\r\n\t.img-center1 {\r\n\t\twidth: 300px;\r\n\t\tmargin: 0 auto;\r\n\t}\r\n\t\r\n\t.about {\r\n\t\tpadding: 97px 0 100px 0;\r\n\t}\r\n\r\n}"

/***/ }),

/***/ "./src/app/app-about/app-about.component.html":
/*!****************************************************!*\
  !*** ./src/app/app-about/app-about.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"about\" class=\"about\">\n  <div class=\"container-about\">\n    <div class=\"text-center\">\n        <h2>ABOUT</h2>\n      </div>\n    <div class=\"row\">\n      <!-- <div class=\"col-xs-12 col-sm-12 col-md-10 col-md-offset-2 col-lg-10 col-lg-offset-2\">\n          <p class=\"p1 text-center\">Vestibulum pharetra, sapien eu vestibulum auctor, ligula lorem ornare ex, ut molestie dui mi in nisi. Donec dapibus posuere nulla, vel pharetra lorem.</p>\n      </div> -->\n      <div class=\"col-md-6 col-xs-12 padding-bottom\">\n          <div class=\"bgAbout1\">\n              <div class=\"follow\">\n                  <ul>\n                      <li class=\"blue1\"><a href=\"https://www.facebook.com/shivani.tyagi.1023\"><i class=\"fa fa-facebook\"></i></a></li>\n                      <!-- <li class=\"celestial\"><a href=\"#\"><i class=\"fa fa-twitter\"></i></a></li>\n                      <li class=\"red\"><a href=\"#\"><i class=\"fa fa-google-plus\"></i></a></li> -->\n                      <li class=\"blue2\"><a href=\"https://www.linkedin.com/in/shivani-tyagi-5a3b83156/\"><i class=\"fa fa-linkedin\"></i></a></li>\n                  </ul>\n              </div>\n              <h1>Shivani Tyagi</h1>\n              <p></p>\n          </div>\n          <div class=\"img-center\">\n              <div class=\"woman\"></div>\n          </div>\n      </div>\n      <div class=\"col-md-6 col-xs-12\">\n          <div class=\"bgAbout2\">\n              <div class=\"follow\">\n                  <ul>\n                      <li class=\"blue1\"><a href=\"https://www.facebook.com/rachittyagi\"><i class=\"fa fa-facebook\"></i></a></li>\n                      <!-- <li class=\"celestial\"><a href=\"#\"><i class=\"fa fa-twitter\"></i></a></li>\n                      <li class=\"red\"><a href=\"#\"><i class=\"fa fa-google-plus\"></i></a></li> -->\n                      <li class=\"blue2\"><a href=\"https://www.linkedin.com/in/tyagirachit/\"><i class=\"fa fa-linkedin\"></i></a></li>\n                  </ul>\n              </div>\n              <h1>Rachit Tyagi</h1>\n              <p></p>\n          </div>\n          <div class=\"img-center\">\n              <div class=\"man\"></div>\n          </div>\n      </div>\n  </div>\n  </div>\n</section>"

/***/ }),

/***/ "./src/app/app-about/app-about.component.ts":
/*!**************************************************!*\
  !*** ./src/app/app-about/app-about.component.ts ***!
  \**************************************************/
/*! exports provided: AppAboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppAboutComponent", function() { return AppAboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppAboutComponent = /** @class */ (function () {
    function AppAboutComponent() {
    }
    AppAboutComponent.prototype.ngOnInit = function () {
    };
    AppAboutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./app-about.component.html */ "./src/app/app-about/app-about.component.html"),
            styles: [__webpack_require__(/*! ./app-about.component.css */ "./src/app/app-about/app-about.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AppAboutComponent);
    return AppAboutComponent;
}());



/***/ }),

/***/ "./src/app/app-home/app-home.component.css":
/*!*************************************************!*\
  !*** ./src/app/app-home/app-home.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container-home {       \r\n    height : calc(100vh - 56px);\r\n    min-width : 100%;\r\n    background-size:100% 100%;\r\n    background-repeat:no-repeat;\r\n    overflow-y: hidden;\r\n    overflow-x: hidden;\r\n    background-image: url('bg-image.jpg')\r\n}\r\n\r\n.container-home h1{    \r\n    color: #ffffff;\r\n    padding-top : 10rem;\r\n    font-size: 70px;\r\n}\r\n\r\n.container-home .btn-custom {   \r\n    margin-top : 5rem;\r\n    background: #673ab7 none repeat scroll 0 0;\r\n    border:#673ab7;\r\n}\r\n\r\n.container-home .btn-custom:hover{   \r\n    background: #111111;\r\n    border:#111111;\r\n}"

/***/ }),

/***/ "./src/app/app-home/app-home.component.html":
/*!**************************************************!*\
  !*** ./src/app/app-home/app-home.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-home text-center\">       \n  <h1>Rachit & Shivani </h1>\n  <a routerLink='/about' class=\"btn btn-primary btn-custom btn-lg\" role=\"button\">Read More</a>\n</div>"

/***/ }),

/***/ "./src/app/app-home/app-home.component.ts":
/*!************************************************!*\
  !*** ./src/app/app-home/app-home.component.ts ***!
  \************************************************/
/*! exports provided: AppHomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppHomeComponent", function() { return AppHomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppHomeComponent = /** @class */ (function () {
    function AppHomeComponent() {
    }
    AppHomeComponent.prototype.ngOnInit = function () {
    };
    AppHomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./app-home.component.html */ "./src/app/app-home/app-home.component.html"),
            styles: [__webpack_require__(/*! ./app-home.component.css */ "./src/app/app-home/app-home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AppHomeComponent);
    return AppHomeComponent;
}());



/***/ }),

/***/ "./src/app/app-index/app-index.component.css":
/*!***************************************************!*\
  !*** ./src/app/app-index/app-index.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app-index/app-index.component.html":
/*!****************************************************!*\
  !*** ./src/app/app-index/app-index.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"custom-index\" class=\"custom-index\">\n    <app-home></app-home>  \n    <app-about></app-about>\n    <app-story></app-story>\n  </section> "

/***/ }),

/***/ "./src/app/app-index/app-index.component.ts":
/*!**************************************************!*\
  !*** ./src/app/app-index/app-index.component.ts ***!
  \**************************************************/
/*! exports provided: AppIndexComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppIndexComponent", function() { return AppIndexComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppIndexComponent = /** @class */ (function () {
    function AppIndexComponent() {
    }
    AppIndexComponent.prototype.ngOnInit = function () {
    };
    AppIndexComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-app-index',
            template: __webpack_require__(/*! ./app-index.component.html */ "./src/app/app-index/app-index.component.html"),
            styles: [__webpack_require__(/*! ./app-index.component.css */ "./src/app/app-index/app-index.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AppIndexComponent);
    return AppIndexComponent;
}());



/***/ }),

/***/ "./src/app/app-navbar/app-navbar.component.css":
/*!*****************************************************!*\
  !*** ./src/app/app-navbar/app-navbar.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n .navbar-custom {\r\n    background-color: #673ab7;\r\n}"

/***/ }),

/***/ "./src/app/app-navbar/app-navbar.component.html":
/*!******************************************************!*\
  !*** ./src/app/app-navbar/app-navbar.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-md navbar-dark navbar-custom sticky-top\">\n  <a class=\"navbar-brand\" routerLink=''>Rachit & Shivani</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarItems\" aria-controls=\"navbarsExampleDefault\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <div class=\"collapse navbar-collapse\" id=\"navbarItems\">\n    <ul class=\"navbar-nav ml-auto\">\n      <li class=\"nav-item active\">\n        <a class=\"nav-link\" (click)=\"goHome()\">Home<span class=\"sr-only\">(current)</span></a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" (click)=\"goAbout()\">We!!</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" (click)=\"goStory()\">Relationship</a>\n      </li>\n      <!-- <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\">Gallery</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\">Events</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\">Contact</a>\n      </li> -->\n    </ul>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/app-navbar/app-navbar.component.ts":
/*!****************************************************!*\
  !*** ./src/app/app-navbar/app-navbar.component.ts ***!
  \****************************************************/
/*! exports provided: AppNavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppNavbarComponent", function() { return AppNavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppNavbarComponent = /** @class */ (function () {
    function AppNavbarComponent(router) {
        this.router = router;
    }
    AppNavbarComponent.prototype.goHome = function () {
        this.router.navigate(['']);
    };
    AppNavbarComponent.prototype.goAbout = function () {
        this.router.navigate(['about']);
    };
    AppNavbarComponent.prototype.goStory = function () {
        this.router.navigate(['story']);
    };
    AppNavbarComponent.prototype.ngOnInit = function () {
    };
    AppNavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./app-navbar.component.html */ "./src/app/app-navbar/app-navbar.component.html"),
            styles: [__webpack_require__(/*! ./app-navbar.component.css */ "./src/app/app-navbar/app-navbar.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AppNavbarComponent);
    return AppNavbarComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_index_app_index_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-index/app-index.component */ "./src/app/app-index/app-index.component.ts");
/* harmony import */ var _app_home_app_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-home/app-home.component */ "./src/app/app-home/app-home.component.ts");
/* harmony import */ var _app_about_app_about_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-about/app-about.component */ "./src/app/app-about/app-about.component.ts");
/* harmony import */ var _app_story_app_story_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-story/app-story.component */ "./src/app/app-story/app-story.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    { path: '', component: _app_index_app_index_component__WEBPACK_IMPORTED_MODULE_2__["AppIndexComponent"] },
    { path: 'home', component: _app_home_app_home_component__WEBPACK_IMPORTED_MODULE_3__["AppHomeComponent"] },
    { path: 'about', component: _app_about_app_about_component__WEBPACK_IMPORTED_MODULE_4__["AppAboutComponent"] },
    { path: 'story', component: _app_story_app_story_component__WEBPACK_IMPORTED_MODULE_5__["AppStoryComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app-story/app-story.component.css":
/*!***************************************************!*\
  !*** ./src/app/app-story/app-story.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container-story {       \r\n    /* height : calc(100vh - 56px);\r\n    min-width : 100%; */\r\n    background-size:100% 100%;\r\n    /* overflow-y: hidden; */\r\n    overflow-x: hidden;\r\n    background: #181818 no-repeat;\r\n    padding: 95px 40px 100px 10px;    \r\n    margin-right: auto;\r\n    margin-left: auto;\r\n}\r\n\r\n\r\n.container-story h2 {\r\n\tfont-family: 'Roboto', sans-serif;\r\n\tcolor: #ffffff;\r\n\tfont-weight: 600;\r\n\tfont-size: 30px;\r\n\ttext-align: center;\r\n\tpadding-bottom: 15px;\r\n\ttext-transform: uppercase;\r\n}\r\n\r\n\r\n.container-story .padding-bottom{    \r\n    padding-bottom: 30px;\r\n}\r\n\r\n\r\n.container-story .p2 {\r\n\tcolor: #FFF;\r\n\ttext-align: center;\r\n\tpadding-bottom: 60px;\r\n}\r\n\r\n\r\n.container-story .row {\r\n    margin-left: 25px;\r\n    margin-right: 15px;\r\n}\r\n\r\n\r\n.container-story .imgStory1 {\r\n    background: url('story1.jpg') no-repeat;\r\n\twidth: 570px;\r\n\theight: 370px;\r\n}\r\n\r\n\r\n.container-story .bgStory1 {\r\n\tborder: 10px solid #efefef;\r\n\tbackground: #FFF;\r\n\tpadding: 50px;\r\n}\r\n\r\n\r\n.container-story .bgStory2 {\r\n\tborder: 10px solid #efefef;\r\n\tbackground: #FFF;\r\n\tpadding: 50px;\r\n}\r\n\r\n\r\n.container-story .bgStory1 h1 {\r\n\tfont-family: 'Roboto', sans-serif;\r\n\tcolor: #515151;\r\n\tfont-weight: 600;\r\n\tfont-size: 30px;\r\n\ttext-align: center;\r\n}\r\n\r\n\r\n.container-story .bgStory1 h3 {\r\n\tfont-family: 'Roboto', sans-serif;\r\n\tcolor: #515151;\r\n\tfont-size: 18px;\r\n\tfont-weight: 600;\r\n\ttext-align: right;\r\n\tpadding-bottom: 10px;\r\n}\r\n\r\n\r\n.container-story .bgStory2 h1 {\r\n\tfont-family: 'Roboto', sans-serif;\r\n\tcolor: #515151;\r\n\tfont-weight: 600;\r\n\tfont-size: 30px;\r\n\ttext-align: center;\r\n}\r\n\r\n\r\n.container-story .bgStory2 h3 {\r\n\tfont-family: 'Roboto', sans-serif;\r\n\tcolor: #515151;\r\n\tfont-size: 18px;\r\n\tfont-weight: 600;\r\n\ttext-align: right;\r\n\tpadding-bottom: 10px;\r\n}\r\n\r\n\r\n.container-story .imgStory2 {\r\n\tbackground: url('story2.jpg') no-repeat;\r\n\twidth: 570px;\r\n\theight: 370px;\r\n}\r\n\r\n\r\n.container-story .imgStory3 {\r\n\tbackground: url('story3.jpg') no-repeat;\r\n\twidth: 570px;\r\n\theight: 370px;\r\n}\r\n\r\n\r\n@media (min-width: 1200px) {\r\n    .container-story .story-row {\r\n        width: 1170px;\r\n    }\r\n    .container-story .bgStory1 {\r\n\t\twidth: 650px;\r\n\t\tmargin-left: -75px;\r\n\t\tmargin-top: 25px;\r\n\t\tposition: absolute;\r\n\t\tz-index: 9;\r\n\t}\r\n\r\n\t.container-story .bgStory2 {\r\n\t\twidth: 650px;\r\n\t\tmargin-left: -10px;\r\n\t\tmargin-top: 25px;\r\n\t\tposition: absolute;\r\n\t\tz-index: 9;\r\n\t}\r\n\r\n\t.container-story .date1 {\r\n\t\tmargin-top: 125px;\r\n\t\tmargin-left: -125px;\r\n\t}\r\n\r\n\t.container-story .date2 {\r\n\t\tmargin-top: 125px;\r\n\t\tmargin-left: 580px;\r\n\t}\r\n\r\n\t.storyRight {\r\n\t\tfloat: right;\r\n\t}\r\n\r\n\t.storyLeft {\r\n\t\tfloat: left;\r\n\t}\r\n\r\n}\r\n\r\n\r\n@media (min-width: 992px) and (max-width: 1199px) {\r\n    .container-story .story-row {\r\n        width: 970px;\r\n    }\r\n   .container-story .bgStory1 {\r\n       width: 100%;\r\n   }\r\n\r\n   .imgStory1, .date1, .imgStory2, .date2, .imgStory3 {\r\n       display: none;\r\n   }\r\n\r\n   .img-center1 {\r\n       width: 300px;\r\n       margin: 0 auto;\r\n   }\r\n}\r\n\r\n\r\n@media (min-width: 768px) and (max-width: 991px) {\r\n    .container-story .story-row {\r\n        width: 750px;\r\n    }\r\n    .container-story .bgStory1 {\r\n       width: 100%;\r\n   }\r\n\r\n   .imgStory1, .date1, .imgStory2, .date2, .imgStory3 {\r\n       display: none;\r\n   }\r\n\r\n   .img-center1 {\r\n       width: 300px;\r\n       margin: 0 auto;\r\n   }\r\n}\r\n\r\n\r\n@media (min-width: 480px) and (max-width: 767px) {  \r\n\r\n   .container-story .bgStory1 {\r\n       width: 100%;\r\n   }\r\n\r\n   .imgStory1, .date1, .imgStory2, .date2, .imgStory3 {\r\n       display: none;\r\n   }\r\n\r\n   .img-center1 {\r\n       width: 300px;\r\n       margin: 0 auto;\r\n   }\r\n}\r\n\r\n\r\n@media (min-width: 300px) and (max-width: 489px) {\r\n   .img-center1 {\r\n       width: 300px;\r\n       margin: 0 auto;\r\n   }\r\n\r\n   .container-story .bgStory1 {\r\n       width: 100%;\r\n   }\r\n\r\n   .imgStory1, .date1, .imgStory2, .date2, .imgStory3 {\r\n       display: none;\r\n   }\r\n\r\n}"

/***/ }),

/***/ "./src/app/app-story/app-story.component.html":
/*!****************************************************!*\
  !*** ./src/app/app-story/app-story.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"story\" class=\"story\">\n  <div class=\"container-story\">    \n      <div class=\"text-center\"><h2>Relationship</h2></div>\n      <div class=\"row story-row\">\n          <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n              <!-- <p class=\"p2\">Vestibulum pharetra, sapien eu vestibulum auctor, ligula lorem ornare ex, ut molestie dui mi in nisi. Donec dapibus posuere nulla, vel pharetra lorem.</p> -->\n          </div>\n          <div class=\"col-lg-12 col-sm-6 col-xs-12 padding-bottom\">\n                  <div class=\"col-lg-6 col-xs-12\">\n                      <div class=\"img-center1 storyRight\">\n                          <div class=\"bgStory1\">\n                              <h3>27 November 2017</h3>\n                              <h1>Kahani Line 1</h1>\n                              <p>Content 1</p>\n                          </div>\n                      </div>\n                  </div>\n                  <div class=\"imgStory1\"></div>\n          </div>\n          <div class=\"col-lg-12 col-sm-6 col-xs-12 padding-bottom\">\n               <div class=\"col-lg-6 col-xs-12\">\n                      <div class=\"img-center1\">\n                          <div class=\"bgStory2\">\n                              <h3>29 November 2017</h3>\n                              <h1>Kahani Line 2</h1>\n                              <p>Content 2</p>\n                          </div>\n                      </div>\n                  </div>\n                  <div class=\"imgStory2 storyRight\"></div>\n          </div>\n          <div class=\"col-lg-12 col-xs-12 padding-bottom\">\n                  <div class=\"col-lg-6 col-xs-12\">\n                      <div class=\"img-center1 storyRight\">\n                          <div class=\"bgStory1\">\n                              <h3>25 June 2018</h3>\n                              <h1>Kahani Line 3</h1>\n                              <p>Content 3</p>\n                          </div>\n                      </div>\n                  </div>\n                  <div class=\"imgStory3\"></div>\n          </div>      \n      </div>\n  </div>\n</section>"

/***/ }),

/***/ "./src/app/app-story/app-story.component.ts":
/*!**************************************************!*\
  !*** ./src/app/app-story/app-story.component.ts ***!
  \**************************************************/
/*! exports provided: AppStoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppStoryComponent", function() { return AppStoryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppStoryComponent = /** @class */ (function () {
    function AppStoryComponent() {
    }
    AppStoryComponent.prototype.ngOnInit = function () {
    };
    AppStoryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-story',
            template: __webpack_require__(/*! ./app-story.component.html */ "./src/app/app-story/app-story.component.html"),
            styles: [__webpack_require__(/*! ./app-story.component.css */ "./src/app/app-story/app-story.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AppStoryComponent);
    return AppStoryComponent;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar> \n<!-- <a routerLink='' class=\"scrolltotop\" style=\"display: inline;\"><i class=\"fa fa-long-arrow-up\"></i></a> -->\n<div class=\"container-custom\">  \n</div>\n\n<router-outlet></router-outlet>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Rachit & Shivani';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_navbar_app_navbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-navbar/app-navbar.component */ "./src/app/app-navbar/app-navbar.component.ts");
/* harmony import */ var _app_home_app_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-home/app-home.component */ "./src/app/app-home/app-home.component.ts");
/* harmony import */ var _app_about_app_about_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-about/app-about.component */ "./src/app/app-about/app-about.component.ts");
/* harmony import */ var _app_story_app_story_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-story/app-story.component */ "./src/app/app-story/app-story.component.ts");
/* harmony import */ var _app_index_app_index_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-index/app-index.component */ "./src/app/app-index/app-index.component.ts");
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
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _app_navbar_app_navbar_component__WEBPACK_IMPORTED_MODULE_4__["AppNavbarComponent"],
                _app_home_app_home_component__WEBPACK_IMPORTED_MODULE_5__["AppHomeComponent"],
                _app_about_app_about_component__WEBPACK_IMPORTED_MODULE_6__["AppAboutComponent"],
                _app_story_app_story_component__WEBPACK_IMPORTED_MODULE_7__["AppStoryComponent"],
                _app_index_app_index_component__WEBPACK_IMPORTED_MODULE_8__["AppIndexComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Repos\WedApp\ra-shi\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map