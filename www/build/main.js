webpackJsonp([8],{

/***/ 143:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DescAttr; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_web_scraper__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the DescAttr page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var DescAttr = (function () {
    function DescAttr(navCtrl, navParams, loadingCtrl, scraper) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.scraper = scraper;
    }
    DescAttr.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('sto qua');
        this.image = this.navParams.get("img");
        this.name = this.navParams.get("nome");
        this.title = this.navParams.get("nome");
        //this.name = this.name.replace(" ","_")
        this.name = replaceAll(this.name, " ", "+");
        this.name = replaceAll(this.name, "'", "%27");
        console.log(this.name);
        var loading = this.loadingCtrl.create({
            content: 'Caricamento...'
        });
        loading.present();
        this.scraper.getDescrAttrazioni(this.name).subscribe(function (data) {
            loading.dismiss();
            console.log('controllo data');
            console.log(data);
            _this.dataContainer.nativeElement.innerHTML = data[0].attr;
        }, function (error) {
            loading.dismiss();
            console.log(error);
        });
    };
    return DescAttr;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('ionDataContainer'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
], DescAttr.prototype, "dataContainer", void 0);
DescAttr = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-desc-attr',template:/*ion-inline-start:"C:\Users\vicec\Desktop\idwProject\src\pages\desc-attr\desc-attr.html"*/'<!--\n  Generated template for the DescAttr page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>DiscoverItaly</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <img *ngIf= "(image != \'noimg\')" src = "{{image}}" />\n  <h3 id="salve">{{title}}</h3>\n  <div #ionDataContainer>\n\n  </div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\vicec\Desktop\idwProject\src\pages\desc-attr\desc-attr.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_2__providers_web_scraper__["a" /* WebScraper */]])
], DescAttr);

function replaceAll(str, find, replace) {
    return str.replace(new RegExp(find, 'g'), replace);
}
//# sourceMappingURL=desc-attr.js.map

/***/ }),

/***/ 144:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_web_scraper__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_share_service__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__desc_attr_desc_attr__ = __webpack_require__(143);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ListPage = (function () {
    function ListPage(navCtrl, navParams, scraper, loadingCtrl, share) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.scraper = scraper;
        this.loadingCtrl = loadingCtrl;
        this.share = share;
    }
    ListPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.page = 0;
        var loading = this.loadingCtrl.create({
            content: 'Caricamento...'
        });
        if (this.share.isPlaceSelected()) {
            loading.present();
            // this.scraper.getLuoghi()
            //   .subscribe(data => {
            //     loading.dismiss();
            //     this.places = data.places;
            //     this.placeid = data.placeid;
            //     this.hasNext = data.hasNext;
            //   })
            this.scraper.getLuoghiPromise()
                .then(function (data) {
                console.log('hi');
                loading.dismiss();
                _this.places = data.places;
                _this.placeid = data.placeid;
                _this.hasNext = data.hasNext;
            })
                .catch(function (_) { return console.log('error'); });
        }
    };
    ListPage.prototype.scrapeNext = function (infiniteScroll) {
        var _this = this;
        if (this.hasNext) {
            this.page += 30;
            this.scraper.getNextLuoghi(this.placeid, this.page)
                .subscribe(function (data) {
                _this.places = _this.places.concat(data.places);
                _this.hasNext = data.hasNext;
                infiniteScroll.complete();
            });
        }
        else
            infiniteScroll.complete();
    };
    ListPage.prototype.openDescr = function (luogo) {
        console.log(luogo);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__desc_attr_desc_attr__["a" /* DescAttr */], luogo);
    };
    return ListPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('ionDataContainer'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
], ListPage.prototype, "dataContainer", void 0);
ListPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-list',template:/*ion-inline-start:"C:\Users\vicec\Desktop\idwProject\src\pages\list\list.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Luoghi di interesse</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="card-background-page">\n  <ion-item *ngIf="share.isPlaceSelected() && places != undefined && places.length == 0">\n    <span text-wrap>Nessun luogo di interesse trovato!</span>\n  </ion-item>\n  <ion-item *ngIf="!share.isPlaceSelected()">\n    <span text-wrap>Nessun luogo selezionato!</span>\n  </ion-item>\n  <ion-list>\n    <ion-item *ngFor="let luogo of places" (click)="openDescr(luogo)">\n      <ion-thumbnail item-start>\n        <img [src]="(luogo.img == undefined) ? \'assets/noimg.png\' : luogo.img" >\n      </ion-thumbnail>\n      <h2 text-wrap>{{luogo.nome}}</h2>\n      <p>{{luogo.tipologia}}</p>\n    </ion-item>\n  </ion-list>\n  <ion-infinite-scroll (ionInfinite)="scrapeNext($event)" threshold="2500px">\n    <ion-infinite-scroll-content></ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n</ion-content>\n'/*ion-inline-end:"C:\Users\vicec\Desktop\idwProject\src\pages\list\list.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__providers_web_scraper__["a" /* WebScraper */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_3__providers_share_service__["a" /* ShareService */]])
], ListPage);

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 145:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DescrProd; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_web_scraper__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the DescrProd page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var DescrProd = (function () {
    function DescrProd(navCtrl, navParams, loadingCtrl, scraper) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.scraper = scraper;
    }
    DescrProd.prototype.ionViewDidLoad = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Caricamento...'
        });
        loading.present();
        this.scraper.getDescrProdottiTipici(this.navParams.get('link')).subscribe(function (data) {
            loading.dismiss();
            _this.dataContainer.nativeElement.innerHTML = data.body;
        });
    };
    return DescrProd;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('ionDataContainer'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
], DescrProd.prototype, "dataContainer", void 0);
DescrProd = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-descr-prod',template:/*ion-inline-start:"C:\Users\vicec\Desktop\idwProject\src\pages\descr-prod\descr-prod.html"*/'<!--\n  Generated template for the DescrProd page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title text-wrap>{{navParams.get("nome")}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <div #ionDataContainer>\n  </div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\vicec\Desktop\idwProject\src\pages\descr-prod\descr-prod.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_2__providers_web_scraper__["a" /* WebScraper */]])
], DescrProd);

//# sourceMappingURL=descr-prod.js.map

/***/ }),

/***/ 146:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Users; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_share_service__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_web_scraper__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__descr_prod_descr_prod__ = __webpack_require__(145);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the Users page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var Users = (function () {
    function Users(navCtrl, navParams, events, share, scraper, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.events = events;
        this.share = share;
        this.scraper = scraper;
        this.loadingCtrl = loadingCtrl;
    }
    Users.prototype.ionViewDidLoad = function () {
        var _this = this;
        if (this.share.isPlaceSelected()) {
            var loading_1 = this.loadingCtrl.create({
                content: 'Caricamento...'
            });
            loading_1.present();
            // this.scraper.getProdottiTipici()
            //   .subscribe(data => {
            //     loading.dismiss();
            //     this.prodotti = data;
            //   }, error => {
            //     loading.dismiss();
            //   })
            this.scraper.getQcPromise()
                .then(function (data) {
                loading_1.dismiss();
                _this.prodotti = data;
            })
                .catch(function (_) { return loading_1.dismiss(); });
        }
    };
    Users.prototype.openDescr = function (prodotto) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__descr_prod_descr_prod__["a" /* DescrProd */], prodotto);
    };
    return Users;
}());
Users = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-users',template:/*ion-inline-start:"C:\Users\vicec\Desktop\idwProject\src\pages\users\users.html"*/'<!--\n  Generated template for the Users page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Prodotti Tipici</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n  <ion-item *ngIf="!share.isPlaceSelected()">\n    <span text-wrap>Nessun luogo selezionato!</span>\n  </ion-item>\n  <ion-list>\n    <ion-item *ngFor="let prodotto of prodotti" (click)="openDescr(prodotto)">\n      <img *ngIf="prodotto.merceologia != \'\'" [src]="\'assets/custom_icons/\' + prodotto.merceologia.toLowerCase() + \'.png\'" item-start>\n      <img *ngIf="prodotto.merceologia == \'\'" [src]="\'assets/custom_icons/altri prodotti.png\'" item-start>\n      <h2 text-wrap>{{prodotto.nome}}</h2>\n      <h3>{{prodotto.merceologia}}</h3>\n      <h3>{{prodotto.tipologia}}</h3>\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\Users\vicec\Desktop\idwProject\src\pages\users\users.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Events */], __WEBPACK_IMPORTED_MODULE_2__providers_share_service__["a" /* ShareService */], __WEBPACK_IMPORTED_MODULE_3__providers_web_scraper__["a" /* WebScraper */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
], Users);

//# sourceMappingURL=users.js.map

/***/ }),

/***/ 147:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DescSagra; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_web_scraper__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the DescSagra page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var DescSagra = (function () {
    function DescSagra(navCtrl, navParams, loadingCtrl, scraper) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.scraper = scraper;
    }
    DescSagra.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.url = this.navParams.get("href");
        this.trovato = false;
        var loading = this.loadingCtrl.create({
            content: 'Caricamento...'
        });
        loading.present();
        this.scraper.getDescrSagre(this.navParams.get('href')).subscribe(function (data) {
            loading.dismiss();
            _this.dataContainer.nativeElement.innerHTML = data[0].body;
            _this.sap = data[0].sapevate;
            console.log(_this.sap);
            if (_this.sap != null)
                _this.sapevate.nativeElement.style.backgroundColor = 'rgb(' + 240 + ',' + 230 + ',' + 140 + ')';
            _this.sapevate.nativeElement.innerHTML = data[0].sapevate;
            console.log(data);
        });
    };
    return DescSagra;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('ionDataContainer'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
], DescSagra.prototype, "dataContainer", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('ionSapevate'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
], DescSagra.prototype, "sapevate", void 0);
DescSagra = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-desc-sagra',template:/*ion-inline-start:"C:\Users\vicec\Desktop\idwProject\src\pages\desc-sagra\desc-sagra.html"*/'<!--\n  Generated template for the DescrProd page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>DiscoverItaly</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding id="content">\n  <div #ionDataContainer id= "body">\n  </div>\n  <div #ionSapevate id = "sapevate">\n\n  </div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\vicec\Desktop\idwProject\src\pages\desc-sagra\desc-sagra.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_2__providers_web_scraper__["a" /* WebScraper */]])
], DescSagra);

//# sourceMappingURL=desc-sagra.js.map

/***/ }),

/***/ 148:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Sagre; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_web_scraper__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__desc_sagra_desc_sagra__ = __webpack_require__(147);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the Sagre page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var Sagre = (function () {
    function Sagre(navCtrl, navParams, loadingCtrl, scraper) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.scraper = scraper;
    }
    Sagre.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.bool = true;
        this.index = 0;
        var mesi = ["gennaio", "febbraio", "marzo", "aprile", "maggio", "giugno", "luglio", "agosto", "settembre", "ottobre", "novembre", "dicembre"];
        this.myDate = new Date();
        console.log(mesi[this.myDate.getMonth()]);
        var loading = this.loadingCtrl.create({
            content: 'Caricamento...'
        });
        loading.present();
        this.index++;
        console.log("index " + this.index);
        this.scraper.getSagre("campania", "napoli", mesi[this.myDate.getMonth()], this.index).subscribe(function (data) {
            loading.dismiss();
            _this.sagre = data;
            console.log(data);
        });
    };
    Sagre.prototype.doInfinite = function (infiniteScroll) {
        var _this = this;
        var mesi = ["gennaio", "febbraio", "marzo", "aprile", "maggio", "giugno", "luglio", "agosto", "settembre", "ottobre", "novembre", "dicembre"];
        this.myDate = new Date();
        console.log(mesi[this.myDate.getMonth()]);
        setTimeout(function () {
            console.log("prima " + _this.index);
            _this.index++;
            console.log("dopo " + _this.index);
            _this.scraper.getSagre("campania", "napoli", mesi[_this.myDate.getMonth()], _this.index).subscribe(function (data) {
                console.log(data);
                console.log(data.img);
                if (data.length < 10) {
                    _this.bool = false;
                }
                var elem;
                for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
                    elem = data_1[_i];
                    console.log(elem);
                    _this.sagre.push(elem);
                }
            });
            console.log('Async operation has ended' + _this.bool);
            infiniteScroll.complete();
        }, 5000);
    };
    Sagre.prototype.openDescr = function (sagra) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__desc_sagra_desc_sagra__["a" /* DescSagra */], sagra);
        // console.log(ristorante)
    };
    return Sagre;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('ionDataContainer'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
], Sagre.prototype, "dataContainer", void 0);
Sagre = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-sagre',template:/*ion-inline-start:"C:\Users\vicec\Desktop\idwProject\src\pages\sagre\sagre.html"*/'<!--\n  Generated template for the DescrProd page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Sagre</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n\n  <ion-content class="card-background-page">\n\n   <ion-list>\n\n     <ion-card *ngFor = "let sagra of sagre"  (click)="openDescr(sagra)">\n        <div class="card-country">{{sagra.name}}</div>\n          <div class="card-country">{{sagra.date}}</div>\n\n        <!--<img src= "({{sagra.img}} != undefined) ?\n       \'{{sagra.img}}\' : \'http://stamforduniversity.edu.bd/PRD/PRDNewsImage/no-img.jpg\'"\n       (load)="loaded = true"\n       [ngClass]="{\'img-loaded\':loaded}"\n       [hidden]="!loaded"/> -->\n\n   <div class="card-country">{{sagra.country}}</div>\n\n </ion-card>\n\n    <ion-infinite-scroll *ngIf="bool" (ionInfinite)="doInfinite($event)" >\n      <ion-infinite-scroll-content>\n        <ion-card *ngFor = "let sagra of sagre"  (click)="openDescr(sagra)">\n\n          <img src= "assets/img/sagre.jpg " />\n      <div class="card-country">{{sagra.country}}</div>\n\n    </ion-card>\n      </ion-infinite-scroll-content>\n    </ion-infinite-scroll>\n\n   </ion-list>\n\n\n\n\n\n  <div #ionDataContainer>\n\n  </div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\vicec\Desktop\idwProject\src\pages\sagre\sagre.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_2__providers_web_scraper__["a" /* WebScraper */]])
], Sagre);

//# sourceMappingURL=sagre.js.map

/***/ }),

/***/ 149:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DescrRistPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_web_scraper__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_google_maps__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_call_number__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_launch_navigator__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_photo_viewer__ = __webpack_require__(231);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








/**
 * Generated class for the DescrRistPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var DescrRistPage = (function () {
    function DescrRistPage(navCtrl, navParams, scraper, platform, googleMaps, callNumber, launchNavigator, photoViewer) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.scraper = scraper;
        this.platform = platform;
        this.googleMaps = googleMaps;
        this.callNumber = callNumber;
        this.launchNavigator = launchNavigator;
        this.photoViewer = photoViewer;
        this.view = 'info';
        this.reviews = [];
    }
    DescrRistPage.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.platform.ready().then(function () {
            _this.loadMap();
        });
    };
    DescrRistPage.prototype.loadMap = function () {
        var _this = this;
        this.map = this.googleMaps.create(this.mapDiv.nativeElement);
        this.mapPromise = this.map.one(__WEBPACK_IMPORTED_MODULE_3__ionic_native_google_maps__["b" /* GoogleMapsEvent */].MAP_READY)
            .then(function (_) {
            _this.map.setClickable(true);
            _this.map.setVisible(true);
        });
    };
    DescrRistPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.page = 0;
        this.loaded = false;
        this.scraper.getDescrRistoranti(this.navParams.get('placeId'))
            .subscribe(function (data) {
            _this.details = data;
            _this.reviews = _this.details.reviews;
            _this.mapPromise.then(function (_) {
                var position = {
                    target: {
                        lat: data.lat,
                        lng: data.lng
                    },
                    zoom: 18,
                    tilt: 30
                };
                var latlng = {
                    lat: data.lat,
                    lng: data.lng
                };
                var markerOptions = {
                    position: latlng
                };
                _this.map.clear();
                _this.map.addMarker(markerOptions).then(function (_) { return _this.map.animateCamera(position); });
            });
        });
        this.scraper.getTaReviews(this.navParams.get('name'))
            .subscribe(function (data) {
            if (data != "no data") {
                _this.placeId = data.placeId;
                _this.risId = data.risId;
                _this.hasNext = data.hasNext;
                _this.rating = data.avgRating;
                setTimeout(function (_) { return _this.reviews = _this.reviews.concat(data.reviews); }, 1000);
            }
            _this.loaded = true;
        });
    };
    DescrRistPage.prototype.scrapeNext = function (infiniteScroll) {
        var _this = this;
        if (this.hasNext && this.loaded) {
            this.page++;
            this.scraper.getTaNextPage(this.placeId, this.risId, this.page)
                .subscribe(function (data) {
                _this.hasNext = data.hasNext;
                _this.reviews = _this.reviews.concat(data.reviews);
                infiniteScroll.complete();
            });
        }
        else
            infiniteScroll.complete();
    };
    DescrRistPage.prototype.refreshMap = function () {
        if (this.view == "info") {
            this.loadMap();
        }
    };
    DescrRistPage.prototype.call = function () {
        this.callNumber.callNumber(this.details.phone, true);
    };
    DescrRistPage.prototype.navigateTo = function () {
        var _this = this;
        this.map.getMyLocation()
            .then(function (loc) {
            var options = {
                start: [loc.latLng.lat, loc.latLng.lng]
            };
            _this.launchNavigator.navigate([_this.details.lat, _this.details.lng], options)
                .then(function (success) { return console.log('Launched navigator'); }, function (error) { return console.log('Error launching navigator', error); });
        });
    };
    DescrRistPage.prototype.openImg = function (event) {
        this.photoViewer.show(event.path[0].currentSrc);
    };
    return DescrRistPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('map2'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
], DescrRistPage.prototype, "mapDiv", void 0);
DescrRistPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-descr-rist',template:/*ion-inline-start:"C:\Users\vicec\Desktop\idwProject\src\pages\descr-rist\descr-rist.html"*/'<!--\n  Generated template for the DescrRistPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{navParams.get(\'name\')}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-segment [(ngModel)]="view">\n    <ion-segment-button value="info">\n      Info\n    </ion-segment-button>\n    <ion-segment-button value="recensioni">\n      Recensioni\n    </ion-segment-button>\n  </ion-segment>\n\n  <div [ngSwitch]="view">\n    <div id="info">\n      <div *ngSwitchCase="\'info\'">\n        <div class="flexBox">\n          <div class="isOpen">\n            <div *ngIf="details != undefined" [style.background]="(details.open_now) ? \'green\' : \'red\'"></div>\n            <span *ngIf="details != undefined && details.open_now">Aperto</span>\n            <span *ngIf="details != undefined && !details.open_now">Chiuso</span>\n          </div>\n          <ion-icon name="call" (click)="call()"></ion-icon>\n          <ion-icon name="navigate" (click)="navigateTo()"></ion-icon>\n        </div>\n      </div>\n      <div #map2 [style.height]="(view == \'info\') ? \'35vh\' : \'0px\'"></div>\n      <div *ngSwitchCase="\'info\'" id="slides">\n        <ion-slides *ngIf="details != undefined">\n          <ion-slide *ngFor="let img of details.photos" (click)="openImg($event)">\n            <img [src]="\'https://maps.googleapis.com/maps/api/place/photo?key=AIzaSyD_9bj_Ao6nklX7PWrM_1E-iDH4EPVWV6A&maxwidth=1600&photoreference=\' + img.photo_reference" />\n          </ion-slide>\n        </ion-slides>\n      </div>\n    </div>\n\n    <div id="rec">\n      <div *ngSwitchCase="\'recensioni\'">\n        <ion-list-header>\n          <div id="avg">\n            <div>\n              <span item-start text-wrap>Voto Google: </span>\n              <span item-end text-wrap class="end" *ngIf="navParams.get(\'rating\') != undefined">{{navParams.get(\'rating\')}}/5</span>\n              <span item-end text-wrap class="end" *ngIf="navParams.get(\'rating\') == undefined">Nessuna valutazione!</span>\n            </div>\n            <div>\n              <span item-start text-wrap class="start">Voto Tripadvisor: </span>\n              <ion-spinner item-end text-wrap class="end" *ngIf="!loaded" name="dots"></ion-spinner>\n              <span item-end text-wrap class="end" *ngIf="loaded && rating != undefined">{{rating}}/5</span>\n              <span item-end text-wrap class="end" *ngIf="loaded && rating == undefined">Nessuna valutazione!</span>\n            </div>\n          </div>\n        </ion-list-header>\n        <ion-list>\n          <ion-item *ngFor="let recensione of reviews">\n            <div class="center">\n              <ion-avatar>\n                <img [src]="recensione.profile_photo_url">\n              </ion-avatar>\n            </div>\n            <p class="name">{{recensione.author_name}}</p>\n            <div class="rating">\n              <div class="star-ratings-sprite">\n                <span [style.width]="(100*recensione.rating/5) + \'%\'" class="star-ratings-sprite-rating"></span>\n              </div>\n            </div>\n            <div *ngIf="recensione.title != undefined" class="title">\n              <span text-wrap>{{recensione.title}}</span>\n            </div>\n            <span class="review" text-wrap>{{recensione.text}}</span>\n            <div class="date">\n              <p>{{recensione.relative_time_description}}</p>\n            </div>\n          </ion-item>\n        </ion-list>\n        <ion-spinner *ngIf="!loaded"></ion-spinner>\n        <ion-infinite-scroll (ionInfinite)="scrapeNext($event)" threshold="1000px">\n          <ion-infinite-scroll-content></ion-infinite-scroll-content>\n        </ion-infinite-scroll>\n      </div>\n    </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\vicec\Desktop\idwProject\src\pages\descr-rist\descr-rist.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__providers_web_scraper__["a" /* WebScraper */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_google_maps__["a" /* GoogleMaps */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_call_number__["a" /* CallNumber */],
        __WEBPACK_IMPORTED_MODULE_5__ionic_native_launch_navigator__["a" /* LaunchNavigator */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_photo_viewer__["a" /* PhotoViewer */]])
], DescrRistPage);

//# sourceMappingURL=descr-rist.js.map

/***/ }),

/***/ 150:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Ristoranti; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_web_scraper__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_share_service__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__descr_rist_descr_rist__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_native_page_transitions__ = __webpack_require__(232);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the Ristoranti page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var Ristoranti = (function () {
    function Ristoranti(navCtrl, navParams, scraper, loadingCtrl, nativePageTransitions, share) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.scraper = scraper;
        this.loadingCtrl = loadingCtrl;
        this.nativePageTransitions = nativePageTransitions;
        this.share = share;
    }
    Ristoranti.prototype.ionViewDidLoad = function () {
        var _this = this;
        if (this.share.isPlaceSelected()) {
            var loading_1 = this.loadingCtrl.create({
                content: 'Caricamento...'
            });
            loading_1.present();
            // this.scraper.getRistoranti(2000)
            //   .subscribe(data => {
            //     loading.dismiss();
            //     this.ristoranti = data
            //   })
            this.scraper.getRistPromise()
                .then(function (data) {
                loading_1.dismiss();
                _this.ristoranti = data;
            })
                .catch(function (_) { return loading_1.dismiss(); });
        }
    };
    Ristoranti.prototype.openDescr = function (ristorante) {
        var options = {
            direction: 'right',
            duration: 1000,
            slowdownfactor: 1,
            slidePixels: 20,
            iosdelay: 0,
            androiddelay: 0,
            fixedPixelsTop: 0,
            fixedPixelsBottom: 60
        };
        this.nativePageTransitions.flip(options);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__descr_rist_descr_rist__["a" /* DescrRistPage */], ristorante);
    };
    return Ristoranti;
}());
Ristoranti = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-ristoranti',template:/*ion-inline-start:"C:\Users\vicec\Desktop\idwProject\src\pages\ristoranti\ristoranti.html"*/'<!--\n  Generated template for the Ristoranti page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Ristoranti</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-item *ngIf="!share.isPlaceSelected()">\n    <span text-wrap>Nessun luogo selezionato!</span>\n  </ion-item>\n  <ion-card *ngFor="let ristorante of ristoranti" (click)="openDescr(ristorante)">\n    <div class="card-title">\n      {{ristorante.name}}\n    </div>\n\n    <!-- enabled imgs -->\n    <img [src]= "(ristorante.photo != undefined) ?\n    \'https://maps.googleapis.com/maps/api/place/photo?key=AIzaSyD_9bj_Ao6nklX7PWrM_1E-iDH4EPVWV6A&maxwidth=1600&photoreference=\'\n    + ristorante.photo : \'assets/noimg.png\'"\n    (load)="loaded = true"\n    [ngClass]="{\'img-loaded\':loaded}"\n    [hidden]="!loaded"/>\n\n    <!-- disabled imgs to reduce api consumption -->\n    <!-- <img src= \'assets/noimg.png\'\n    (load)="loaded = true"\n    [ngClass]="{\'img-loaded\':loaded}"\n    [hidden]="!loaded"/> -->\n\n    <ion-spinner [ngClass]="{\'center\':true}" *ngIf="!loaded"></ion-spinner>\n    <div class="rating">\n      <div *ngIf="ristorante.rating != undefined" class="star-ratings-sprite">\n        <span [style.width]="(100*ristorante.rating/5) + \'%\'" class="star-ratings-sprite-rating"></span>\n      </div>\n      <div *ngIf="ristorante.rating != undefined" class="textRating">Valutazione: {{ristorante.rating}}</div>\n      <div *ngIf="ristorante.rating == undefined" class="textRating">Nessuna valutazione</div>\n    </div>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"C:\Users\vicec\Desktop\idwProject\src\pages\ristoranti\ristoranti.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__providers_web_scraper__["a" /* WebScraper */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_5__ionic_native_native_page_transitions__["a" /* NativePageTransitions */], __WEBPACK_IMPORTED_MODULE_3__providers_share_service__["a" /* ShareService */]])
], Ristoranti);

//# sourceMappingURL=ristoranti.js.map

/***/ }),

/***/ 161:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 161;

/***/ }),

/***/ 204:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/desc-attr/desc-attr.module": [
		635,
		7
	],
	"../pages/desc-sagra/desc-sagra.module": [
		639,
		6
	],
	"../pages/descr-prod/descr-prod.module": [
		637,
		5
	],
	"../pages/descr-rist/descr-rist.module": [
		641,
		4
	],
	"../pages/list/list.module": [
		636,
		3
	],
	"../pages/ristoranti/ristoranti.module": [
		642,
		2
	],
	"../pages/sagre/sagre.module": [
		640,
		1
	],
	"../pages/users/users.module": [
		638,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
module.exports = webpackAsyncContext;
webpackAsyncContext.id = 204;

/***/ }),

/***/ 27:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebScraper; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__share_service__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_cache__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_retry__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_retry___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_retry__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_socket_io_client__ = __webpack_require__(335);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_socket_io_client__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








/*
  Generated class for the WebScraper provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
var WebScraper = (function () {
    function WebScraper(http, share, cache) {
        this.http = http;
        this.share = share;
        this.cache = cache;
        this.hostname = 'http://ec2-34-211-229-249.us-west-2.compute.amazonaws.com';
        this.socket = __WEBPACK_IMPORTED_MODULE_7_socket_io_client__(this.hostname + ':8090');
    }
    WebScraper.prototype.getRevData = function (lat, lng) {
        this.socket.emit('getRevData', {
            lat: lat,
            lng: lng
        });
        this.share.setLat(lat);
        this.share.setLng(lng);
        this.generatePromises();
        this.share.setPlaceSelected();
    };
    WebScraper.prototype.getData = function (placeid) {
        this.socket.emit('getData', {
            placeid: placeid
        });
        this.generatePromises();
        this.share.setPlaceSelected();
    };
    WebScraper.prototype.generatePromises = function () {
        var _this = this;
        this.pdPromise = new Promise(function (resolve, reject) {
            _this.socket.on('placeDetails', function (data) {
                var data = JSON.parse(data);
                resolve(data);
                _this.share.setLat(data.lat);
                _this.share.setLng(data.lng);
                _this.share.setCitta(data.citta);
            });
        });
        this.ristPromise = new Promise(function (resolve, reject) {
            _this.socket.on('ristoranti', function (data) { return resolve(JSON.parse(data)); });
        });
        this.qcPromise = new Promise(function (resolve, reject) {
            _this.socket.on('qc', function (data) { return resolve(data); });
        });
        this.luoghiPromise = new Promise(function (resolve, reject) {
            _this.socket.on('taAttr', function (data) { return resolve(JSON.parse(data)); });
        });
    };
    WebScraper.prototype.getProdottiTipici = function () {
        // return this.http.get(this.hostname + ':8090/qc?regione=' + this.share.regione.toLowerCase()).map(res => res.json()).retry(2);
        var request = this.http.get(this.hostname + ':8090/qc?regione=' + this.share.regione.toLowerCase()).map(function (res) { return res.json(); }).retry(2);
        return this.cache.loadFromObservable(this.share.regione.toLowerCase(), request);
    };
    WebScraper.prototype.getDescrProdottiTipici = function (link) {
        // return this.http.get(this.hostname + ':8090/qcpage?link=' + link).map(res => res.json()).retry(2);
        var request = this.http.get(this.hostname + ':8090/qcpage?link=' + link).map(function (res) { return res.json(); }).retry(2);
        return this.cache.loadFromObservable(link, request);
    };
    WebScraper.prototype.getLuoghi = function () {
        this.luoghiPromise = this.http.get(this.hostname + ':8090/taattr?loc=' + this.share.citta).map(function (res) { return res.json(); }).retry().toPromise();
    };
    WebScraper.prototype.getLuoghiPromise = function () {
        return this.luoghiPromise;
    };
    WebScraper.prototype.getRistPromise = function () {
        return this.ristPromise;
    };
    WebScraper.prototype.getPdPromise = function () {
        return this.pdPromise;
    };
    WebScraper.prototype.getQcPromise = function () {
        return this.qcPromise;
    };
    WebScraper.prototype.getNextLuoghi = function (placeid, page) {
        return this.http.get(this.hostname + ':8090/taattr?placeid=' + placeid + '&page=' + page).map(function (res) { return res.json(); }).retry();
    };
    WebScraper.prototype.getRistoranti = function (radius) {
        var request = this.http.get(this.hostname + ':8090/ris?lat=' + this.share.getLat() + '&lng=' + this.share.getLng() + '&radius=' + radius).map(function (res) { return res.json(); }).retry(2);
        return this.cache.loadFromObservable(this.share.getLat() + "-" + this.share.getLng(), request);
    };
    WebScraper.prototype.getDescrRistoranti = function (place_id) {
        return this.http.get(this.hostname + ':8090/risdescr?placeid=' + place_id).map(function (res) { return res.json(); }).retry(2);
    };
    WebScraper.prototype.getTaReviews = function (ris) {
        var request = this.http.get(this.hostname + ':8090/tarev?ris=' + ris + '&citta=' + this.share.getProvincia()).map(function (res) { return res.json(); }).retry();
        return this.cache.loadFromObservable(ris + "-" + this.share.getProvincia(), request);
        // return this.http.get(this.hostname + ':8090/tarev?ris=' + ris + '&citta=' + this.share.getProvincia()).map(res => res.json()).retry();
    };
    WebScraper.prototype.getTaNextPage = function (place_id, ris_id, page) {
        return this.http.get(this.hostname + ':8090/tarev?placeid=' + place_id + '&risid=' + ris_id + "&page=" + page).map(function (res) { return res.json(); }).retry();
    };
    WebScraper.prototype.getPlaceDetails = function (place_id) {
        return this.http.get(this.hostname + ':8090/placedet?placeid=' + place_id).map(function (res) { return res.json(); }).retry(2);
    };
    WebScraper.prototype.getReverseGeocoding = function (lat, lng) {
        return this.http.get(this.hostname + ':8090/placedetrev?lat=' + lat + "&lng=" + lng).map(function (res) { return res.json(); }).retry(2);
    };
    WebScraper.prototype.getDescrAttrazioni = function (attr) {
        // return this.http.get(this.hostname + ':8090/wiki?loc=' + this.share.citta.toLowerCase() + '&attr=' + attr).map(res => res.json());
        var request = this.http.get(this.hostname + ':8090/wiki?loc=' + this.share.citta.toLowerCase() + '&attr=' + attr).map(function (res) { return res.json(); });
        return this.cache.loadFromObservable(this.share.citta.toLowerCase() + "-" + attr, request);
    };
    WebScraper.prototype.getSagre = function (regione, provincia, mese, index) {
        console.log('num = ' + index);
        // return this.http.get(this.hostname + ':3000/sagre?regione='+regione+'&provincia='+provincia+'&mese='+mese+'&num='+index).map(res => res.json());
        return this.http.get(this.hostname + ':8090/sagre?regione=' + this.share.getRegione() + '&provincia=' + this.share.getProvincia() + '&mese=' + mese + '&num=' + index).map(function (res) { return res.json(); });
    };
    WebScraper.prototype.getDescrSagre = function (url) {
        // return this.http.get(this.hostname + ':8081/descr?url=' + url).map(res => res.json());
        return this.http.get(this.hostname + ':8090/sagredescr?url=' + url).map(function (res) { return res.json(); });
    };
    return WebScraper;
}());
WebScraper = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_2__share_service__["a" /* ShareService */], __WEBPACK_IMPORTED_MODULE_3_ionic_cache__["b" /* CacheService */]])
], WebScraper);

//# sourceMappingURL=web-scraper.js.map

/***/ }),

/***/ 295:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Repos; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__ = __webpack_require__(296);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_share_service__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_web_scraper__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_autocomplete__ = __webpack_require__(298);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_google_maps__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_toast__ = __webpack_require__(299);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










/**
 * Generated class for the Repos page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
// @IonicPage()
var Repos = (function () {
    function Repos(navCtrl, navParams, events, platform, geo, share, scraper, autocomplete, googleMaps, toast, splashScreen) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.events = events;
        this.platform = platform;
        this.geo = geo;
        this.share = share;
        this.scraper = scraper;
        this.autocomplete = autocomplete;
        this.googleMaps = googleMaps;
        this.toast = toast;
        this.splashScreen = splashScreen;
        this.events.subscribe("menu:open", function (data) {
            _this.map.setClickable(false);
        });
        this.events.subscribe("menu:close", function (data) {
            _this.map.setClickable(true);
        });
    }
    Repos.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.platform.ready().then(function () {
            _this.loadMap();
            _this.splashScreen.hide();
        });
    };
    Repos.prototype.loadMap = function () {
        var _this = this;
        var element = document.getElementById('map');
        this.map = this.googleMaps.create(element);
        this.map.one(__WEBPACK_IMPORTED_MODULE_7__ionic_native_google_maps__["b" /* GoogleMapsEvent */].MAP_READY)
            .then(function (_) {
            _this.map.setClickable(true);
            if (!_this.share.isPlaceSelected())
                _this.moveCamera(42.2215152, 12.809727, 5.4, false);
            if (_this.share.getLat() == undefined)
                _this.gpsRefresh();
            else {
                _this.moveMarker(_this.share.getLat(), _this.share.getLng())
                    .then(function (_) { return _this.moveCamera(_this.share.getLat(), _this.share.getLng(), 18, true); });
            }
        });
    };
    Repos.prototype.buttonListener = function (item) {
        var _this = this;
        this.scraper.getData(item.place_id);
        this.scraper.getPdPromise()
            .then(function (data) {
            _this.moveMarker(data.lat, data.lng)
                .then(function (_) { return _this.moveCamera(data.lat, data.lng, 18, true); });
            _this.share.setLat(data.lat);
            _this.share.setLng(data.lng);
            _this.share.setCitta(data.citta);
            _this.share.setProvincia(data.provincia);
            _this.share.setRegione(data.regione);
        });
        // this.scraper.getPlaceDetails(item.place_id)
        //   .subscribe(data => {
        //     this.moveMarker(data.lat, data.lng)
        //       .then(_ => this.moveCamera(data.lat, data.lng))
        //     this.share.setLat(data.lat);
        //     this.share.setLng(data.lng);
        //     this.share.setCitta(data.citta);
        //     this.share.setProvincia(data.provincia);
        //     this.share.setRegione(data.regione);
        //     this.scraper.getLuoghi();
        //   })
    };
    Repos.prototype.moveMarker = function (lat, lng) {
        this.map.clear();
        var latlng = {
            lat: lat,
            lng: lng
        };
        var markerOptions = {
            position: latlng
        };
        return this.map.addMarker(markerOptions);
    };
    Repos.prototype.gpsRefresh = function () {
        var _this = this;
        this.map.getMyLocation()
            .then(function (loc) {
            var lat = loc.latLng.lat;
            var lng = loc.latLng.lng;
            _this.moveMarker(lat, lng)
                .then(function (_) { return _this.moveCamera(lat, lng, 18, true); });
            // this.scraper.getReverseGeocoding(lat, lng)
            //   .subscribe(data => {
            //     this.share.setCitta(data.citta);
            //     this.share.setProvincia(data.provincia);
            //     this.share.setRegione(data.regione);
            //     this.scraper.getLuoghi();
            //   })
            // this.share.setLat(lat);
            // this.share.setLng(lng);
            _this.scraper.getRevData(lat, lng);
        }, function (_) {
            _this.toast.show('GPS disattivato', '5000', 'center').subscribe(function (toast) {
                console.log(toast);
            });
        });
    };
    Repos.prototype.moveCamera = function (lat, lng, zoom, animate) {
        var position = {
            target: {
                lat: lat,
                lng: lng
            },
            zoom: zoom,
            tilt: 30
        };
        if (animate)
            this.map.animateCamera(position);
        else
            this.map.moveCamera(position);
    };
    Repos.prototype.lockMap = function (event) {
        this.map.setClickable(false);
    };
    Repos.prototype.unlockMap = function (event) {
        this.map.setClickable(true);
    };
    return Repos;
}());
Repos = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-repos',template:/*ion-inline-start:"C:\Users\vicec\Desktop\idwProject\src\pages\repos\repos.html"*/'<!--\n  Generated template for the Repos page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Seleziona Luogo</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  <ion-grid>\n    <ion-row>\n      <ion-col col-2 style="display: flex; justify-content: center; align-items: center; width: 30px; padding-right: 0px">\n        <button ion-button icon-only round small (click)="gpsRefresh()">\n            <ion-icon name="locate"></ion-icon>\n        </button>\n      </ion-col>\n      <ion-col col-10>\n        <ion-auto-complete [dataProvider]="autocomplete" [options]="{ placeholder : \'Cerca\' }" (itemSelected) = buttonListener($event) (itemsShown) = lockMap($event) (itemsHidden) = unlockMap($event)></ion-auto-complete>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <div #map id="map" style="height: 85%"></div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\vicec\Desktop\idwProject\src\pages\repos\repos.html"*/
    }),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        providers: [
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__["a" /* Geolocation */]
        ]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Events */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__["a" /* Geolocation */],
        __WEBPACK_IMPORTED_MODULE_4__providers_share_service__["a" /* ShareService */], __WEBPACK_IMPORTED_MODULE_5__providers_web_scraper__["a" /* WebScraper */],
        __WEBPACK_IMPORTED_MODULE_6__providers_autocomplete__["a" /* Autocomplete */], __WEBPACK_IMPORTED_MODULE_7__ionic_native_google_maps__["a" /* GoogleMaps */],
        __WEBPACK_IMPORTED_MODULE_8__ionic_native_toast__["a" /* Toast */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], Repos);

//# sourceMappingURL=repos.js.map

/***/ }),

/***/ 298:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Autocomplete; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*
  Generated class for the Autocomplete provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
var Autocomplete = (function () {
    function Autocomplete(http) {
        this.http = http;
        this.labelAttribute = "description";
        this.autocomplete = new google.maps.places.AutocompleteService();
    }
    Autocomplete.prototype.getResults = function (keyword) {
        var _this = this;
        var request = {
            input: keyword,
            componentRestrictions: { country: 'it' }
        };
        return new __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"](function (observer) {
            _this.autocomplete.getPlacePredictions(request, function (pred, status) {
                if (pred != null)
                    observer.next(pred);
            });
        });
    };
    return Autocomplete;
}());
Autocomplete = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
], Autocomplete);

//# sourceMappingURL=autocomplete.js.map

/***/ }),

/***/ 300:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(301);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(305);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 305:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic2_auto_complete__ = __webpack_require__(378);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_cache__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(633);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(634);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_list_list__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_users_users__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_repos_repos__ = __webpack_require__(295);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_descr_prod_descr_prod__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_ristoranti_ristoranti__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_descr_rist_descr_rist__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_desc_sagra_desc_sagra__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_sagre_sagre__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_desc_attr_desc_attr__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_status_bar__ = __webpack_require__(294);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_splash_screen__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_geolocation__ = __webpack_require__(296);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__angular_http__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__providers_web_scraper__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__providers_autocomplete__ = __webpack_require__(298);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__ionic_native_google_maps__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__ionic_native_toast__ = __webpack_require__(299);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__ionic_native_call_number__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__ionic_native_launch_navigator__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__ionic_native_native_page_transitions__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__ionic_native_photo_viewer__ = __webpack_require__(231);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




























var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_list_list__["a" /* ListPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_users_users__["a" /* Users */],
            __WEBPACK_IMPORTED_MODULE_9__pages_repos_repos__["a" /* Repos */],
            __WEBPACK_IMPORTED_MODULE_10__pages_descr_prod_descr_prod__["a" /* DescrProd */],
            __WEBPACK_IMPORTED_MODULE_11__pages_ristoranti_ristoranti__["a" /* Ristoranti */],
            __WEBPACK_IMPORTED_MODULE_12__pages_descr_rist_descr_rist__["a" /* DescrRistPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_desc_sagra_desc_sagra__["a" /* DescSagra */],
            __WEBPACK_IMPORTED_MODULE_15__pages_desc_attr_desc_attr__["a" /* DescAttr */],
            __WEBPACK_IMPORTED_MODULE_14__pages_sagre_sagre__["a" /* Sagre */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/desc-attr/desc-attr.module#DescAttrModule', name: 'DescAttr', segment: 'desc-attr', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/list/list.module#ReposModule', name: 'ListPage', segment: 'list', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/descr-prod/descr-prod.module#DescrProdModule', name: 'DescrProd', segment: 'descr-prod', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/users/users.module#UsersModule', name: 'Users', segment: 'users', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/desc-sagra/desc-sagra.module#DescSagraModule', name: 'DescSagra', segment: 'desc-sagra', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/sagre/sagre.module#SagreModule', name: 'Sagre', segment: 'sagre', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/descr-rist/descr-rist.module#DescrRistPageModule', name: 'DescrRistPage', segment: 'descr-rist', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/ristoranti/ristoranti.module#RistorantiModule', name: 'Ristoranti', segment: 'ristoranti', priority: 'low', defaultHistory: [] }
                ]
            }),
            __WEBPACK_IMPORTED_MODULE_19__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_3_ionic2_auto_complete__["a" /* AutoCompleteModule */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_cache__["a" /* CacheModule */].forRoot()
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_list_list__["a" /* ListPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_users_users__["a" /* Users */],
            __WEBPACK_IMPORTED_MODULE_9__pages_repos_repos__["a" /* Repos */],
            __WEBPACK_IMPORTED_MODULE_10__pages_descr_prod_descr_prod__["a" /* DescrProd */],
            __WEBPACK_IMPORTED_MODULE_11__pages_ristoranti_ristoranti__["a" /* Ristoranti */],
            __WEBPACK_IMPORTED_MODULE_12__pages_descr_rist_descr_rist__["a" /* DescrRistPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_desc_sagra_desc_sagra__["a" /* DescSagra */],
            __WEBPACK_IMPORTED_MODULE_15__pages_desc_attr_desc_attr__["a" /* DescAttr */],
            __WEBPACK_IMPORTED_MODULE_14__pages_sagre_sagre__["a" /* Sagre */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_16__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_17__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_18__ionic_native_geolocation__["a" /* Geolocation */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_20__providers_web_scraper__["a" /* WebScraper */],
            __WEBPACK_IMPORTED_MODULE_21__providers_autocomplete__["a" /* Autocomplete */],
            __WEBPACK_IMPORTED_MODULE_22__ionic_native_google_maps__["a" /* GoogleMaps */],
            __WEBPACK_IMPORTED_MODULE_23__ionic_native_toast__["a" /* Toast */],
            __WEBPACK_IMPORTED_MODULE_24__ionic_native_call_number__["a" /* CallNumber */],
            __WEBPACK_IMPORTED_MODULE_25__ionic_native_launch_navigator__["a" /* LaunchNavigator */],
            __WEBPACK_IMPORTED_MODULE_26__ionic_native_native_page_transitions__["a" /* NativePageTransitions */],
            __WEBPACK_IMPORTED_MODULE_27__ionic_native_photo_viewer__["a" /* PhotoViewer */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 354:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShareService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the ShareService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
var ShareService = (function () {
    function ShareService(http) {
        this.http = http;
        this.placeSelected = false;
    }
    ShareService.prototype.getCitta = function () {
        return this.citta;
    };
    ShareService.prototype.setCitta = function (citta) {
        this.citta = citta;
    };
    ShareService.prototype.getProvincia = function () {
        return this.provincia;
    };
    ShareService.prototype.setProvincia = function (provincia) {
        this.provincia = provincia;
    };
    ShareService.prototype.getRegione = function () {
        return this.regione;
    };
    ShareService.prototype.setRegione = function (regione) {
        this.regione = regione;
    };
    ShareService.prototype.getLat = function () {
        return this.lat;
    };
    ShareService.prototype.setLat = function (lat) {
        this.lat = lat;
    };
    ShareService.prototype.getLng = function () {
        return this.lng;
    };
    ShareService.prototype.setLng = function (lng) {
        this.lng = lng;
    };
    ShareService.prototype.isPlaceSelected = function () {
        return this.placeSelected;
    };
    ShareService.prototype.setPlaceSelected = function () {
        this.placeSelected = true;
    };
    return ShareService;
}());
ShareService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
], ShareService);

//# sourceMappingURL=share-service.js.map

/***/ }),

/***/ 633:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(294);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_cache__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_list_list__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_users_users__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_repos_repos__ = __webpack_require__(295);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_sagre_sagre__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_ristoranti_ristoranti__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_share_service__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_web_scraper__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var MyApp = (function () {
    function MyApp(platform, statusBar, events, cache) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.events = events;
        this.cache = cache;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_repos_repos__["a" /* Repos */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Seleziona luogo', component: __WEBPACK_IMPORTED_MODULE_6__pages_repos_repos__["a" /* Repos */] },
            // { title: 'Home', component: HomePage },
            { title: 'Luoghi di interesse', component: __WEBPACK_IMPORTED_MODULE_4__pages_list_list__["a" /* ListPage */] },
            { title: 'Ristoranti', component: __WEBPACK_IMPORTED_MODULE_8__pages_ristoranti_ristoranti__["a" /* Ristoranti */] },
            { title: 'Prodotti Tipici', component: __WEBPACK_IMPORTED_MODULE_5__pages_users_users__["a" /* Users */] },
            { title: 'Sagre', component: __WEBPACK_IMPORTED_MODULE_7__pages_sagre_sagre__["a" /* Sagre */] }
        ];
        cache.setDefaultTTL(60 * 60);
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    MyApp.prototype.menuClosed = function () {
        this.events.publish('menu:close');
    };
    MyApp.prototype.menuOpened = function () {
        this.events.publish('menu:open');
    };
    return MyApp;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */])
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\Users\vicec\Desktop\idwProject\src\app\app.html"*/'<ion-menu [content]="content" (ionClose)="menuClosed()" (ionOpen)="menuOpened()">\n\n  <ion-header>\n\n    <ion-toolbar>\n\n      <ion-title>Menu</ion-title>\n\n    </ion-toolbar>\n\n  </ion-header>\n\n\n\n  <ion-content>\n\n    <ion-list>\n\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n\n        {{p.title}}\n\n      </button>\n\n    </ion-list>\n\n  </ion-content>\n\n\n\n</ion-menu>\n\n\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n\n'/*ion-inline-end:"C:\Users\vicec\Desktop\idwProject\src\app\app.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_9__providers_share_service__["a" /* ShareService */], __WEBPACK_IMPORTED_MODULE_10__providers_web_scraper__["a" /* WebScraper */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Events */], __WEBPACK_IMPORTED_MODULE_3_ionic_cache__["b" /* CacheService */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 634:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePage = (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"C:\Users\vicec\Desktop\idwProject\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Home</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <h3>Prova di un commit</h3>\n\n\n\n  <p>\n\n    If you get lost, the <a href="http://ionicframework.com/docs/v2">docs</a> will show you the way.\n\n  </p>\n\n\n\n  <button ion-button secondary menuToggle>Toggle Menu</button>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\vicec\Desktop\idwProject\src\pages\home\home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ })

},[300]);
//# sourceMappingURL=main.js.map