(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Projects\Full Stack Development Course\genshin-calculator-app\genshin-app\src\main.ts */"zUnb");


/***/ }),

/***/ "1gck":
/*!***********************************************!*\
  !*** ./src/app/characters/character.model.ts ***!
  \***********************************************/
/*! exports provided: Character */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Character", function() { return Character; });
class Character {
    constructor(_id, name, weaponType, element) {
        this._id = _id;
        this.name = name;
        this.weaponType = weaponType;
        this.element = element;
    }
}


/***/ }),

/***/ "5wjq":
/*!***********************************************!*\
  !*** ./src/app/characters/ascension.model.ts ***!
  \***********************************************/
/*! exports provided: Ascension */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ascension", function() { return Ascension; });
class Ascension {
    constructor(_id, char_id, rank, level_req, cost, mat1, mat1_quan, mat2, mat2_quan, mat3, mat3_quan, mat4, mat4_quan) {
        this._id = _id;
        this.char_id = char_id;
        this.rank = rank;
        this.level_req = level_req;
        this.cost = cost;
        this.mat1 = mat1;
        this.mat1_quan = mat1_quan;
        this.mat2 = mat2;
        this.mat2_quan = mat2_quan;
        this.mat3 = mat3;
        this.mat3_quan = mat3_quan;
        this.mat4 = mat4;
        this.mat4_quan = mat4_quan;
    }
}


/***/ }),

/***/ "84zG":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class AboutComponent {
    constructor() { }
    ngOnInit() {
    }
}
AboutComponent.??fac = function AboutComponent_Factory(t) { return new (t || AboutComponent)(); };
AboutComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: AboutComponent, selectors: [["app-about"]], decls: 10, vars: 0, template: function AboutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "About");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "Thank you for visiting the myGenshin website!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "This project was completed as a Senior Project and works as a proof of concept for a website that may appear in the future.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "The main goal with this project was to learn the ins and outs of Angular, MongoDB, Typescript, and a few other things to really see how I could bring to life a few ideas that I always wanted to see from other websites about Genshin Impact.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, "There aren't any current plans to make this website current with the content of the game as it is live. There are a few things that need to be completed before that can take place.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhYm91dC5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ "8gid":
/*!*************************************************!*\
  !*** ./src/app/characters/character.service.ts ***!
  \*************************************************/
/*! exports provided: CharacterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CharacterService", function() { return CharacterService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");





class CharacterService {
    constructor(http) {
        this.http = http;
        this.characters = [];
        this.characterSelectedEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.characterListChangedEvent = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    getCharacters() {
        this.http
            .get('http://index.html/api/characters')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((characterData) => {
            return characterData.characters.map(character => {
                return {
                    name: character.name,
                    weaponType: character.weaponType,
                    element: character.element,
                    _id: character._id
                };
            });
        }))
            .subscribe(characters => {
            this.characters = characters;
            this.characterListChangedEvent.next([...this.characters.sort((a, b) => a.name > b.name ? 1 : b.name > a.name ? -1 : 0).slice()]);
        });
    }
    getCharacter(_id) {
        return this.http.get("http://index.html/api/characters/" + _id);
    }
    deleteCharacter(characterId) {
        this.http.delete("http://index.html/api/characters/" + characterId)
            .subscribe(() => {
            this.characters = this.characters.filter(character => character._id !== characterId);
            this.characterListChangedEvent.next([...this.characters.sort((a, b) => a.name > b.name ? 1 : b.name > a.name ? -1 : 0).slice()]);
        });
    }
    addCharacter(newCharacter) {
        if (!newCharacter) {
            return;
        }
        return this.http
            .post("http://index.html/api/characters", newCharacter)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])((responseData) => {
            this.characters.push(responseData.createdCharacter);
            this.characterListChangedEvent.next([...this.characters.sort((a, b) => a.name > b.name ? 1 : b.name > a.name ? -1 : 0)]);
        }));
        // .subscribe((responseData) => {
        //     console.log("Created Character: " + responseData.createdCharacter._id);
        //     console.log("Message: " + responseData.message);
        //     this.characters.push(responseData.createdCharacter);
        //     console.log(responseData.createdCharacter);
        //     console.log(this.characters);
        //     this.characterListChangedEvent.next([...this.characters.sort((a, b) => a.name > b.name ? 1: b.name > a.name ? -1 : 0)]);
        //     return responseData.createdCharacter._id;
        // });
    }
    updateCharacter(character) {
        this.http
            .put("http://index.html/api/characters/" + character._id, character)
            .subscribe(response => {
            const updatedCharacters = [...this.characters];
            const oldCharacterIndex = updatedCharacters.findIndex(c => c._id === character._id);
            updatedCharacters[oldCharacterIndex] = character;
            this.characters = updatedCharacters;
            this.characterListChangedEvent.next([...this.characters.sort((a, b) => a.name > b.name ? 1 : b.name > a.name ? -1 : 0).slice()]);
        });
    }
}
CharacterService.??fac = function CharacterService_Factory(t) { return new (t || CharacterService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
CharacterService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({ token: CharacterService, factory: CharacterService.??fac, providedIn: 'root' });


/***/ }),

/***/ "9vUh":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _banner_banner_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../banner/banner.component */ "NH0R");


class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
}
HomeComponent.??fac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 3, vars: 0, template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "myGENSHIN");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "app-banner");
    } }, directives: [_banner_banner_component__WEBPACK_IMPORTED_MODULE_1__["BannerComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lLmNvbXBvbmVudC5jc3MifQ== */"] });


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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
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

/***/ "E/Nl":
/*!*************************************!*\
  !*** ./src/app/leveling.service.ts ***!
  \*************************************/
/*! exports provided: LevelingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LevelingService", function() { return LevelingService; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




class LevelingService {
    constructor(http) {
        this.http = http;
        this.leveling = [];
        this.levelingLoadedEvent = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    getLevelingTable() {
        this.http
            .get('http://index.html/api/leveling')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])((levelingData) => {
            return levelingData.leveling.map(level => {
                return {
                    _id: level._id,
                    level: level.level,
                    exp: level.exp,
                    cost: level.cost,
                    mat1t1: level.mat1t1,
                    mat1t2: level.mat1t2,
                    mat1t3: level.mat1t3,
                    mat1t4: level.mat1t4,
                    mat2: level.mat2,
                    mat3: level.mat3,
                    mat4t1: level.mat4t1,
                    mat4t2: level.mat4t2,
                    mat4t3: level.mat4t3
                };
            });
        }))
            .subscribe(leveling => {
            this.leveling = leveling;
            this.levelingLoadedEvent.next([...this.leveling.slice()]);
        });
    }
}
LevelingService.??fac = function LevelingService_Factory(t) { return new (t || LevelingService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["????inject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
LevelingService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineInjectable"]({ token: LevelingService, factory: LevelingService.??fac, providedIn: 'root' });


/***/ }),

/***/ "Hym6":
/*!***********************************************************************!*\
  !*** ./src/app/characters/character-item/character-item.component.ts ***!
  \***********************************************************************/
/*! exports provided: CharacterItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CharacterItemComponent", function() { return CharacterItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _character_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../character.service */ "8gid");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");




const _c0 = function (a0) { return [a0]; };
class CharacterItemComponent {
    constructor(characterService, route, router) {
        this.characterService = characterService;
        this.route = route;
        this.router = router;
        this.selectedCharacterEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
        // console.log(this.character);
        // console.log(this.character._id);
    }
    onSelected() {
        this.selectedCharacterEvent.emit();
    }
}
CharacterItemComponent.??fac = function CharacterItemComponent_Factory(t) { return new (t || CharacterItemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_character_service__WEBPACK_IMPORTED_MODULE_1__["CharacterService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
CharacterItemComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: CharacterItemComponent, selectors: [["app-character-item"]], inputs: { character: "character" }, outputs: { selectedCharacterEvent: "selectedCharacterEvent" }, decls: 4, vars: 8, consts: [["routerLinkActive", "active", 1, "char-icon", "clearfix", 2, "cursor", "pointer", 3, "routerLink"], ["alt", "", 3, "src"]], template: function CharacterItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](6, _c0, ctx.character._id));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classMap"](ctx.character.element);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate1"]("src", "assets/character-icons/", ctx.character.name, "-Icon.png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.character.name);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"]], styles: [".char-icon[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    border-radius: 50%;\r\n    width: 100px;\r\n}\r\n\r\n.char-icon[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    margin: 15px 0 5px;\r\n}\r\n\r\n.char-icon[_ngcontent-%COMP%] {\r\n    margin: 15px;\r\n    background-color: #454d55;\r\n    border-radius: 5%;\r\n    padding: 10px;\r\n    color: white;\r\n    text-align: center;\r\n}\r\n\r\n\r\n\r\n.Anemo[_ngcontent-%COMP%] { background-color: #5bdfb3; }\r\n\r\n.Cryo[_ngcontent-%COMP%] { background-color: #93fcff; }\r\n\r\n.Dendro[_ngcontent-%COMP%] { background-color: #b1ea27; }\r\n\r\n.Electro[_ngcontent-%COMP%] { background-color: #d79afc; }\r\n\r\n.Geo[_ngcontent-%COMP%] { background-color: #ffd656; }\r\n\r\n.Hydro[_ngcontent-%COMP%] { background-color: #0de3ff; }\r\n\r\n.Pyro[_ngcontent-%COMP%] { background-color: #feaa72; }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXJhY3Rlci1pdGVtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2IsWUFBWTtJQUNaLGtCQUFrQjtBQUN0Qjs7QUFFQSxtQkFBbUI7O0FBQ25CLFNBQVMseUJBQXlCLEVBQUU7O0FBRXBDLFFBQVEseUJBQXlCLEVBQUU7O0FBRW5DLFVBQVUseUJBQXlCLEVBQUU7O0FBRXJDLFdBQVcseUJBQXlCLEVBQUU7O0FBRXRDLE9BQU8seUJBQXlCLEVBQUU7O0FBRWxDLFNBQVMseUJBQXlCLEVBQUU7O0FBRXBDLFFBQVEseUJBQXlCLEVBQUU7O0FBRW5DLFlBQVkiLCJmaWxlIjoiY2hhcmFjdGVyLWl0ZW0uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jaGFyLWljb24gaW1nIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIHdpZHRoOiAxMDBweDtcclxufVxyXG5cclxuLmNoYXItaWNvbiBwIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbjogMTVweCAwIDVweDtcclxufVxyXG5cclxuLmNoYXItaWNvbiB7XHJcbiAgICBtYXJnaW46IDE1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDU0ZDU1O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNSU7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4vKiBFbGVtZW50IENvbG9ycyAqL1xyXG4uQW5lbW8geyBiYWNrZ3JvdW5kLWNvbG9yOiAjNWJkZmIzOyB9XHJcblxyXG4uQ3J5byB7IGJhY2tncm91bmQtY29sb3I6ICM5M2ZjZmY7IH1cclxuXHJcbi5EZW5kcm8geyBiYWNrZ3JvdW5kLWNvbG9yOiAjYjFlYTI3OyB9XHJcblxyXG4uRWxlY3RybyB7IGJhY2tncm91bmQtY29sb3I6ICNkNzlhZmM7IH1cclxuXHJcbi5HZW8geyBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZkNjU2OyB9XHJcblxyXG4uSHlkcm8geyBiYWNrZ3JvdW5kLWNvbG9yOiAjMGRlM2ZmOyB9XHJcblxyXG4uUHlybyB7IGJhY2tncm91bmQtY29sb3I6ICNmZWFhNzI7IH1cclxuXHJcbi8qICMzNDNhNDAgKi8iXX0= */"] });


/***/ }),

/***/ "NH0R":
/*!********************************************!*\
  !*** ./src/app/banner/banner.component.ts ***!
  \********************************************/
/*! exports provided: BannerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BannerComponent", function() { return BannerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class BannerComponent {
    constructor() { }
    ngOnInit() {
    }
}
BannerComponent.??fac = function BannerComponent_Factory(t) { return new (t || BannerComponent)(); };
BannerComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: BannerComponent, selectors: [["app-banner"]], decls: 1, vars: 0, consts: [["src", "../../assets/img/mondstadt.png", "alt", ""]], template: function BannerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "img", 0);
    } }, styles: ["img[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    margin: 0 auto;\r\n}\r\n\r\n@media only screen and (max-width: 1091px) {\r\n    img[_ngcontent-%COMP%] {\r\n        display: none;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJhbm5lci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztJQUNYLGNBQWM7QUFDbEI7O0FBRUE7SUFDSTtRQUNJLGFBQWE7SUFDakI7QUFDSiIsImZpbGUiOiJiYW5uZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImltZyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwOTFweCkge1xyXG4gICAgaW1nIHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG59ICJdfQ== */"] });


/***/ }),

/***/ "NnYK":
/*!****************************************************!*\
  !*** ./src/app/characters/characters.component.ts ***!
  \****************************************************/
/*! exports provided: CharactersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CharactersComponent", function() { return CharactersComponent; });
/* harmony import */ var _character_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./character.service */ "8gid");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _character_list_character_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./character-list/character-list.component */ "jygX");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");





class CharactersComponent {
    constructor(characterService) {
        this.characterService = characterService;
    }
    ngOnInit() {
        this.characterService.characterSelectedEvent.subscribe((character) => {
            this.selectedCharacter = character;
        });
    }
}
CharactersComponent.??fac = function CharactersComponent_Factory(t) { return new (t || CharactersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_character_service__WEBPACK_IMPORTED_MODULE_0__["CharacterService"])); };
CharactersComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineComponent"]({ type: CharactersComponent, selectors: [["app-characters"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["????ProvidersFeature"]([_character_service__WEBPACK_IMPORTED_MODULE_0__["CharacterService"]])], decls: 8, vars: 0, consts: [[1, "row"], [1, "col-xs-12"]], template: function CharactersComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, "Characters");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](4, "app-character-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](5, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](6, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](7, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    } }, directives: [_character_list_character_list_component__WEBPACK_IMPORTED_MODULE_2__["CharacterListComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]], styles: ["h1[_ngcontent-%COMP%] {\r\n    margin-top: 15px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXJhY3RlcnMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtBQUNwQiIsImZpbGUiOiJjaGFyYWN0ZXJzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMSB7XHJcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG59Il19 */"] });


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
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header/header.component */ "fECr");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AppComponent {
    constructor() {
        this.title = 'genshin-app';
    }
}
AppComponent.??fac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 5, vars: 0, consts: [[1, "container"], [1, "row"], [1, "col-xs-12"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "YA4t":
/*!*******************************************************************!*\
  !*** ./src/app/characters/level-detail/level-detail.component.ts ***!
  \*******************************************************************/
/*! exports provided: LevelDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LevelDetailComponent", function() { return LevelDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _character_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../character.service */ "8gid");
/* harmony import */ var _ascension_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ascension.service */ "kZRd");
/* harmony import */ var src_app_leveling_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/leveling.service */ "E/Nl");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");







function LevelDetailComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "button", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function LevelDetailComponent_div_0_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r2.toggleCalcDisplay(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Level Up Calculator");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function LevelDetailComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Level Up Calculator:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, "This calculator assumes that if you hit a level that has an ascension level with it, you will want to calculate the materials for that ascension.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "form", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngSubmit", function LevelDetailComponent_div_1_Template_form_ngSubmit_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r4.onCalculateLevelUp(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "label", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "Starting Level");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](9, "input", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "label", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, "Target Level");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](13, "input", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16, "Calculate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "button", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function LevelDetailComponent_div_1_Template_button_click_17_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r5); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r6.onCancelCalc(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "table");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](23, "Starting Level");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25, "Target Level");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](27, "Hero's Wit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](29, "Adventurer's ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](30, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](31, "Experience");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](33, "Wanderer's ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](34, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](35, "Advice");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](37, "Mora Cost");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](52, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](53, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](55, "Total Exp");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](56, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](57, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](58, "Material 1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](59, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](60, "Material 2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](61, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](62, "Material 3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](63, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](64, "Material 4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](65, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](66, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](67, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](69, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](70, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](71, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](73, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](75, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](76);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](77, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](79, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](80);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](81, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](83, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](84, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](85);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](86, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](87);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](88, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](89);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("formGroup", ctx_r1.levelingForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classMapInterpolate1"]("table table-dark ", ctx_r1.character == null ? null : ctx_r1.character.element, "Table");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx_r1.levelCalcData == null ? null : ctx_r1.levelCalcData.startingLevel);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx_r1.levelCalcData == null ? null : ctx_r1.levelCalcData.targetLevel);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx_r1.levelCalcData == null ? null : ctx_r1.levelCalcData.heroWit);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx_r1.levelCalcData == null ? null : ctx_r1.levelCalcData.advExp);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx_r1.levelCalcData == null ? null : ctx_r1.levelCalcData.wanAdv);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx_r1.levelCalcData == null ? null : ctx_r1.levelCalcData.moraCost);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx_r1.levelCalcData == null ? null : ctx_r1.levelCalcData.totalExp);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx_r1.levelCalcData == null ? null : ctx_r1.levelCalcData.mat1t1, " Sliver(s) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx_r1.levelCalcData == null ? null : ctx_r1.levelCalcData.mat1t2, " Fragment(s) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx_r1.levelCalcData == null ? null : ctx_r1.levelCalcData.mat1t3, " Chunk(s) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx_r1.levelCalcData == null ? null : ctx_r1.levelCalcData.mat1t4, " Gemstone(s) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate2"]("", ctx_r1.levelCalcData == null ? null : ctx_r1.levelCalcData.mat2, " ", ctx_r1.rank2 == null ? null : ctx_r1.rank2.mat2, "(s)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate2"]("", ctx_r1.levelCalcData == null ? null : ctx_r1.levelCalcData.mat3, " ", ctx_r1.rank1 == null ? null : ctx_r1.rank1.mat3, "(s)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate2"](" ", ctx_r1.levelCalcData == null ? null : ctx_r1.levelCalcData.mat4t1, " ", ctx_r1.rank1 == null ? null : ctx_r1.rank1.mat4, "(s) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate2"](" ", ctx_r1.levelCalcData == null ? null : ctx_r1.levelCalcData.mat4t2, " ", ctx_r1.rank3 == null ? null : ctx_r1.rank3.mat4, "(s) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate2"](" ", ctx_r1.levelCalcData == null ? null : ctx_r1.levelCalcData.mat4t3, " ", ctx_r1.rank5 == null ? null : ctx_r1.rank5.mat4, "(s) ");
} }
class LevelDetailComponent {
    constructor(characterService, ascensionService, levelingService, fb, router, route) {
        this.characterService = characterService;
        this.ascensionService = ascensionService;
        this.levelingService = levelingService;
        this.fb = fb;
        this.router = router;
        this.route = route;
        this.leveling = [];
        this.displayCalculator = false;
        this.levelCalcData = {
            startingLevel: 1,
            targetLevel: 1,
            totalExp: 0,
            heroWit: 0,
            advExp: 0,
            wanAdv: 0,
            moraCost: 0,
            mat1t1: 0,
            mat1t2: 0,
            mat1t3: 0,
            mat1t4: 0,
            mat2: 0,
            mat3: 0,
            mat4t1: 0,
            mat4t2: 0,
            mat4t3: 0,
        };
        this.levelingForm = this.fb.group({
            startLevel: [''],
            targetLevel: [''],
        });
    }
    ngOnInit() {
        this.levelingService.getLevelingTable();
        this.subscription = this.levelingService.levelingLoadedEvent.subscribe((leveling) => {
            this.leveling = leveling;
        });
        this.route.params.subscribe((params) => {
            this.characterService
                .getCharacter(params.id)
                .subscribe((characterData) => {
                this.character = characterData.character;
                this.ascensionService
                    .getAscensionByCharId(params.id)
                    .subscribe((a) => {
                    this.rank1 = a.ascensions[0];
                    this.rank2 = a.ascensions[1];
                    this.rank3 = a.ascensions[2];
                    this.rank4 = a.ascensions[3];
                    this.rank5 = a.ascensions[4];
                    this.rank6 = a.ascensions[5];
                });
            });
        });
    }
    onCalculateLevelUp() {
        const value = this.levelingForm.value;
        console.log(value);
        if (value.invalid) {
            console.log('Invalid Data!');
            return;
        }
        this.levelCalcData.totalExp = 0;
        this.levelCalcData.moraCost = 0;
        this.levelCalcData.mat1t1 = 0;
        this.levelCalcData.mat1t2 = 0;
        this.levelCalcData.mat1t3 = 0;
        this.levelCalcData.mat1t4 = 0;
        this.levelCalcData.mat2 = 0;
        this.levelCalcData.mat3 = 0;
        this.levelCalcData.mat4t1 = 0;
        this.levelCalcData.mat4t2 = 0;
        this.levelCalcData.mat4t3 = 0;
        this.levelCalcData.heroWit = 0;
        this.levelCalcData.advExp = 0;
        this.levelCalcData.wanAdv = 0;
        this.levelCalcData.startingLevel = value.startLevel;
        this.levelCalcData.targetLevel = value.targetLevel;
        let tempExp = 0;
        for (let i = 0; i < 90; i++) {
            // Make sure we are within the starting level and target level range
            if (this.leveling[i].level >= this.levelCalcData.startingLevel &&
                this.leveling[i].level <= this.levelCalcData.targetLevel) {
                // Check if we need to ascend
                if (this.leveling[i].level == 20 ||
                    this.leveling[i].level == 40 ||
                    this.leveling[i].level == 50 ||
                    this.leveling[i].level == 60 ||
                    this.leveling[i].level == 70 ||
                    this.leveling[i].level == 80 ||
                    this.leveling[i].level == 90 ||
                    this.leveling[i].level == this.levelCalcData.targetLevel) {
                    // Calculate the amount of leveling books before we continue
                    // Divide the tempExp to see how many books of Hero's Wit
                    // Find the amount of books by whole number
                    let tempFloor = Math.floor(tempExp / 20000);
                    this.levelCalcData.heroWit += tempFloor;
                    // Find the remainder
                    tempExp = tempExp % 20000;
                    // Find the amount of books for Adventurer's Experience
                    tempFloor = Math.floor(tempExp / 5000);
                    this.levelCalcData.advExp += tempFloor;
                    // Find the remainder
                    tempExp = tempExp % 5000;
                    // Find the amount of books for Wanderer's Advice
                    tempFloor = Math.floor(tempExp / 1000);
                    this.levelCalcData.wanAdv += tempFloor;
                    // Find the remainder
                    tempExp = tempExp % 1000;
                    // If there is anything remaining to level, add one Wanderer's Advice
                    if (tempExp > 0) {
                        this.levelCalcData.wanAdv += 1;
                    }
                    // Reset tempExp after we are done
                    tempExp = 0;
                }
                tempExp += this.leveling[i].exp;
                this.levelCalcData.totalExp += this.leveling[i].exp;
                this.levelCalcData.moraCost += this.leveling[i].cost;
                this.levelCalcData.mat1t1 += this.leveling[i].mat1t1;
                this.levelCalcData.mat1t2 += this.leveling[i].mat1t2;
                this.levelCalcData.mat1t3 += this.leveling[i].mat1t3;
                this.levelCalcData.mat1t4 += this.leveling[i].mat1t4;
                this.levelCalcData.mat2 += this.leveling[i].mat2;
                this.levelCalcData.mat3 += this.leveling[i].mat3;
                this.levelCalcData.mat4t1 += this.leveling[i].mat4t1;
                this.levelCalcData.mat4t2 += this.leveling[i].mat4t2;
                this.levelCalcData.mat4t3 += this.leveling[i].mat4t3;
            }
        }
    }
    toggleCalcDisplay() {
        if (this.displayCalculator) {
            this.displayCalculator = false;
        }
        else {
            this.displayCalculator = true;
        }
    }
    onCancelCalc() {
        this.displayCalculator = false;
    }
}
LevelDetailComponent.??fac = function LevelDetailComponent_Factory(t) { return new (t || LevelDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_character_service__WEBPACK_IMPORTED_MODULE_1__["CharacterService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_ascension_service__WEBPACK_IMPORTED_MODULE_2__["AscensionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_leveling_service__WEBPACK_IMPORTED_MODULE_3__["LevelingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"])); };
LevelDetailComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: LevelDetailComponent, selectors: [["app-level-detail"]], decls: 2, vars: 2, consts: [[4, "ngIf"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], [3, "formGroup", "ngSubmit"], [1, "form-group"], ["for", "startLevel"], ["type", "number", "id", "startLevel", "formControlName", "startLevel", "min", "1", "max", "90", 1, "form-control"], ["for", "targetLevel"], ["type", "number", "id", "targetLevel", "formControlName", "targetLevel", "min", "2", "max", "90", 1, "form-control"], [1, "form-group", 2, "width", "100%"], ["type", "submit", 1, "btn", "btn-success"]], template: function LevelDetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](0, LevelDetailComponent_div_0_Template, 3, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, LevelDetailComponent_div_1_Template, 90, 25, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.displayCalculator);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !ctx.displayCalculator);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["??angular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControlName"]], styles: [".btn[_ngcontent-%COMP%] {\r\n    margin: 0 15px 0 0;\r\n}\r\n\r\ninput[_ngcontent-%COMP%] {\r\n    width: 25%;\r\n}\r\n\r\n\r\n\r\n.Anemo[_ngcontent-%COMP%] { background-color: #5bdfb3; }\r\n\r\n.AnemoTable[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] { border-color: #5bdfb3; }\r\n\r\n.Cryo[_ngcontent-%COMP%] { background-color: #93fcff; }\r\n\r\n.CryoTable[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] { border-color: #93fcff; }\r\n\r\n.Dendro[_ngcontent-%COMP%] { background-color: #b1ea27; }\r\n\r\n.DendroTable[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] { border-color: #b1ea27; }\r\n\r\n.Electro[_ngcontent-%COMP%] { background-color: #d79afc; }\r\n\r\n.ElectroTable[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] { border-color: #d79afc; }\r\n\r\n.Geo[_ngcontent-%COMP%] { background-color: #ffd656; }\r\n\r\n.GeoTable[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] { border-color: #ffd656; }\r\n\r\n.Hydro[_ngcontent-%COMP%] { background-color: #0de3ff; }\r\n\r\n.HydroTable[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] { border-color: #0de3ff; }\r\n\r\n.Pyro[_ngcontent-%COMP%] { background-color: #feaa72; }\r\n\r\n.PyroTable[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] { border-color: #feaa72; }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxldmVsLWRldGFpbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksVUFBVTtBQUNkOztBQUVBLG1CQUFtQjs7QUFDbkIsU0FBUyx5QkFBeUIsRUFBRTs7QUFDcEMsZ0JBQWdCLHFCQUFxQixFQUFFOztBQUV2QyxRQUFRLHlCQUF5QixFQUFFOztBQUNuQyxlQUFlLHFCQUFxQixFQUFFOztBQUV0QyxVQUFVLHlCQUF5QixFQUFFOztBQUNyQyxpQkFBaUIscUJBQXFCLEVBQUU7O0FBRXhDLFdBQVcseUJBQXlCLEVBQUU7O0FBQ3RDLGtCQUFrQixxQkFBcUIsRUFBRTs7QUFFekMsT0FBTyx5QkFBeUIsRUFBRTs7QUFDbEMsY0FBYyxxQkFBcUIsRUFBRTs7QUFFckMsU0FBUyx5QkFBeUIsRUFBRTs7QUFDcEMsZ0JBQWdCLHFCQUFxQixFQUFFOztBQUV2QyxRQUFRLHlCQUF5QixFQUFFOztBQUNuQyxlQUFlLHFCQUFxQixFQUFFIiwiZmlsZSI6ImxldmVsLWRldGFpbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ0biB7XHJcbiAgICBtYXJnaW46IDAgMTVweCAwIDA7XHJcbn1cclxuXHJcbmlucHV0IHtcclxuICAgIHdpZHRoOiAyNSU7XHJcbn1cclxuXHJcbi8qIEVsZW1lbnQgQ29sb3JzICovXHJcbi5BbmVtbyB7IGJhY2tncm91bmQtY29sb3I6ICM1YmRmYjM7IH1cclxuLkFuZW1vVGFibGUgKiB7IGJvcmRlci1jb2xvcjogIzViZGZiMzsgfVxyXG5cclxuLkNyeW8geyBiYWNrZ3JvdW5kLWNvbG9yOiAjOTNmY2ZmOyB9XHJcbi5DcnlvVGFibGUgKiB7IGJvcmRlci1jb2xvcjogIzkzZmNmZjsgfVxyXG5cclxuLkRlbmRybyB7IGJhY2tncm91bmQtY29sb3I6ICNiMWVhMjc7IH1cclxuLkRlbmRyb1RhYmxlICogeyBib3JkZXItY29sb3I6ICNiMWVhMjc7IH1cclxuXHJcbi5FbGVjdHJvIHsgYmFja2dyb3VuZC1jb2xvcjogI2Q3OWFmYzsgfVxyXG4uRWxlY3Ryb1RhYmxlICogeyBib3JkZXItY29sb3I6ICNkNzlhZmM7IH1cclxuXHJcbi5HZW8geyBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZkNjU2OyB9XHJcbi5HZW9UYWJsZSAqIHsgYm9yZGVyLWNvbG9yOiAjZmZkNjU2OyB9XHJcblxyXG4uSHlkcm8geyBiYWNrZ3JvdW5kLWNvbG9yOiAjMGRlM2ZmOyB9XHJcbi5IeWRyb1RhYmxlICogeyBib3JkZXItY29sb3I6ICMwZGUzZmY7IH1cclxuXHJcbi5QeXJvIHsgYmFja2dyb3VuZC1jb2xvcjogI2ZlYWE3MjsgfVxyXG4uUHlyb1RhYmxlICogeyBib3JkZXItY29sb3I6ICNmZWFhNzI7IH0iXX0= */"] });


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
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./header/header.component */ "fECr");
/* harmony import */ var _characters_characters_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./characters/characters.component */ "NnYK");
/* harmony import */ var _characters_character_list_character_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./characters/character-list/character-list.component */ "jygX");
/* harmony import */ var _characters_character_item_character_item_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./characters/character-item/character-item.component */ "Hym6");
/* harmony import */ var _characters_character_detail_character_detail_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./characters/character-detail/character-detail.component */ "pomm");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./footer/footer.component */ "fp1T");
/* harmony import */ var _characters_character_edit_character_edit_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./characters/character-edit/character-edit.component */ "cBNv");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _characters_level_detail_level_detail_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./characters/level-detail/level-detail.component */ "YA4t");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./about/about.component */ "84zG");
/* harmony import */ var _banner_banner_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./banner/banner.component */ "NH0R");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/core */ "fXoL");

















class AppModule {
}
AppModule.??fac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_16__["????defineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_16__["????defineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_16__["????setNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"],
        _characters_characters_component__WEBPACK_IMPORTED_MODULE_4__["CharactersComponent"],
        _characters_character_list_character_list_component__WEBPACK_IMPORTED_MODULE_5__["CharacterListComponent"],
        _characters_character_item_character_item_component__WEBPACK_IMPORTED_MODULE_6__["CharacterItemComponent"],
        _characters_character_detail_character_detail_component__WEBPACK_IMPORTED_MODULE_7__["CharacterDetailComponent"],
        _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"],
        _characters_character_edit_character_edit_component__WEBPACK_IMPORTED_MODULE_9__["CharacterEditComponent"],
        _characters_level_detail_level_detail_component__WEBPACK_IMPORTED_MODULE_12__["LevelDetailComponent"],
        _about_about_component__WEBPACK_IMPORTED_MODULE_13__["AboutComponent"],
        _banner_banner_component__WEBPACK_IMPORTED_MODULE_14__["BannerComponent"],
        _home_home_component__WEBPACK_IMPORTED_MODULE_15__["HomeComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"]] }); })();


/***/ }),

/***/ "cBNv":
/*!***********************************************************************!*\
  !*** ./src/app/characters/character-edit/character-edit.component.ts ***!
  \***********************************************************************/
/*! exports provided: CharacterEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CharacterEditComponent", function() { return CharacterEditComponent; });
/* harmony import */ var _ascension_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ascension.model */ "5wjq");
/* harmony import */ var _character_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../character.model */ "1gck");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _character_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../character.service */ "8gid");
/* harmony import */ var _ascension_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ascension.service */ "kZRd");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");







class CharacterEditComponent {
    constructor(characterService, ascensionService, fb, router, route) {
        this.characterService = characterService;
        this.ascensionService = ascensionService;
        this.fb = fb;
        this.router = router;
        this.route = route;
        this.editMode = false;
        this.newChar_id = '';
        this.characterForm = this.fb.group({
            name: [''],
            weaponType: [''],
            element: [''],
            ascensionMats: this.fb.group({
                mat1: [''],
                mat2: [''],
                mat3: [''],
                mat4t1: [''],
                mat4t2: [''],
                mat4t3: [''],
            })
        });
    }
    ngOnInit() {
        this.route.params.subscribe((params) => {
            let id = params.id;
            if (!id) {
                console.log('Adding a new character!');
                this.editMode = false;
                return;
            }
            this.characterService.getCharacter(id).subscribe((characterData) => {
                this.originalCharacter = characterData.character;
                if (!this.originalCharacter) {
                    console.log("This character doesn't exist!");
                    return;
                }
                this.editMode = true;
                this.character = JSON.parse(JSON.stringify(this.originalCharacter));
                this.ascensionService.getAscensionByCharId(params.id).subscribe((a) => {
                    this.rank1 = a.ascensions[0];
                    this.rank2 = a.ascensions[1];
                    this.rank3 = a.ascensions[2];
                    this.rank4 = a.ascensions[3];
                    this.rank5 = a.ascensions[4];
                    this.rank6 = a.ascensions[5];
                });
            });
        });
    }
    onSubmit() {
        const value = this.characterForm.value;
        // console.log(value);
        if (value.invalid) {
            console.log('Invalid Data!');
            return;
        }
        if (this.editMode) {
            const updatedCharacter = new _character_model__WEBPACK_IMPORTED_MODULE_1__["Character"](this.character._id, value.name, value.weaponType, value.element);
            // Ascension Rank 1 data
            this.rank1 = new _ascension_model__WEBPACK_IMPORTED_MODULE_0__["Ascension"]('', value.char_id, 1, 20, 20000, value.ascensionMats.mat1, 1, "none", 0, value.ascensionMats.mat3, 3, value.ascensionMats.mat4t1, 3);
            // Ascension Rank 2 data
            this.rank2 = new _ascension_model__WEBPACK_IMPORTED_MODULE_0__["Ascension"]('', value.char_id, 2, 40, 40000, value.ascensionMats.mat1, 3, value.ascensionMats.mat2, 2, value.ascensionMats.mat3, 10, value.ascensionMats.mat4t1, 15);
            // Ascension Rank 3 data
            this.rank3 = new _ascension_model__WEBPACK_IMPORTED_MODULE_0__["Ascension"]('', value.char_id, 3, 50, 60000, value.ascensionMats.mat1, 6, value.ascensionMats.mat2, 4, value.ascensionMats.mat3, 20, value.ascensionMats.mat4t2, 12);
            // Ascension Rank 4 data
            this.rank4 = new _ascension_model__WEBPACK_IMPORTED_MODULE_0__["Ascension"]('', value.char_id, 4, 60, 80000, value.ascensionMats.mat1, 3, value.ascensionMats.mat2, 8, value.ascensionMats.mat3, 30, value.ascensionMats.mat4t2, 18);
            // Ascension Rank 5 data
            this.rank5 = new _ascension_model__WEBPACK_IMPORTED_MODULE_0__["Ascension"]('', value.char_id, 5, 70, 100000, value.ascensionMats.mat1, 6, value.ascensionMats.mat2, 12, value.ascensionMats.mat3, 45, value.ascensionMats.mat4t3, 12);
            // Ascension Rank 6 data
            this.rank6 = new _ascension_model__WEBPACK_IMPORTED_MODULE_0__["Ascension"]('', value.char_id, 6, 80, 120000, value.ascensionMats.mat1, 6, value.ascensionMats.mat2, 20, value.ascensionMats.mat3, 60, value.ascensionMats.mat4t3, 24);
            // Update character and their ascension
            this.characterService.updateCharacter(updatedCharacter);
            this.ascensionService.updateAscension(this.rank1);
            this.ascensionService.updateAscension(this.rank2);
            this.ascensionService.updateAscension(this.rank3);
            this.ascensionService.updateAscension(this.rank4);
            this.ascensionService.updateAscension(this.rank5);
            this.ascensionService.updateAscension(this.rank6);
        }
        else {
            // console.log(value);
            const newCharacter = new _character_model__WEBPACK_IMPORTED_MODULE_1__["Character"]('', value.name, value.weaponType, value.element);
            this.characterService.addCharacter(newCharacter).subscribe((data) => {
                this.newChar_id = data.createdCharacter._id;
                // Ascension Rank 1 data
                const rank1 = new _ascension_model__WEBPACK_IMPORTED_MODULE_0__["Ascension"]('', this.newChar_id, 1, 20, 20000, value.ascensionMats.mat1, 1, "none", 0, value.ascensionMats.mat3, 3, value.ascensionMats.mat4t1, 3);
                // Ascension Rank 2 data
                const rank2 = new _ascension_model__WEBPACK_IMPORTED_MODULE_0__["Ascension"]('', this.newChar_id, 2, 40, 40000, value.ascensionMats.mat1, 3, value.ascensionMats.mat2, 2, value.ascensionMats.mat3, 10, value.ascensionMats.mat4t1, 15);
                // Ascension Rank 3 data
                const rank3 = new _ascension_model__WEBPACK_IMPORTED_MODULE_0__["Ascension"]('', this.newChar_id, 3, 50, 60000, value.ascensionMats.mat1, 6, value.ascensionMats.mat2, 4, value.ascensionMats.mat3, 20, value.ascensionMats.mat4t2, 12);
                // Ascension Rank 4 data
                const rank4 = new _ascension_model__WEBPACK_IMPORTED_MODULE_0__["Ascension"]('', this.newChar_id, 4, 60, 80000, value.ascensionMats.mat1, 3, value.ascensionMats.mat2, 8, value.ascensionMats.mat3, 30, value.ascensionMats.mat4t2, 18);
                // Ascension Rank 5 data
                const rank5 = new _ascension_model__WEBPACK_IMPORTED_MODULE_0__["Ascension"]('', this.newChar_id, 5, 70, 100000, value.ascensionMats.mat1, 6, value.ascensionMats.mat2, 12, value.ascensionMats.mat3, 45, value.ascensionMats.mat4t3, 12);
                // Ascension Rank 6 data
                const rank6 = new _ascension_model__WEBPACK_IMPORTED_MODULE_0__["Ascension"]('', this.newChar_id, 6, 80, 120000, value.ascensionMats.mat1, 6, value.ascensionMats.mat2, 20, value.ascensionMats.mat3, 60, value.ascensionMats.mat4t3, 24);
                // Add the Ascension ranks through the ascension service
                console.log(rank1);
                this.ascensionService.addAscension(rank1);
                this.ascensionService.addAscension(rank2);
                this.ascensionService.addAscension(rank3);
                this.ascensionService.addAscension(rank4);
                this.ascensionService.addAscension(rank5);
                this.ascensionService.addAscension(rank6);
                this.router.navigate(['/characters'], { relativeTo: this.route });
            });
        }
    }
    onCancel() {
        this.router.navigate(['/characters'], { relativeTo: this.route });
    }
    isValidCharacter(newCharacter) {
        if (!newCharacter) {
            return true;
        }
        if (this.character && newCharacter._id === this.character._id) {
            return true;
        }
        return false;
    }
}
CharacterEditComponent.??fac = function CharacterEditComponent_Factory(t) { return new (t || CharacterEditComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](_character_service__WEBPACK_IMPORTED_MODULE_3__["CharacterService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](_ascension_service__WEBPACK_IMPORTED_MODULE_4__["AscensionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"])); };
CharacterEditComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineComponent"]({ type: CharacterEditComponent, selectors: [["app-character-edit"]], decls: 47, vars: 10, consts: [[1, "row"], [1, "col-xs-12"], [3, "formGroup", "ngSubmit"], [1, "form-group"], ["for", "name"], ["type", "text", "formControlName", "name", 1, "form-control", 3, "value"], ["for", "weaponType"], ["type", "text", "formControlName", "weaponType", 1, "form-control", 3, "value"], ["for", "element"], ["type", "text", "formControlName", "element", 1, "form-control", 3, "value"], ["formGroupName", "ascensionMats"], ["for", "mat1"], ["type", "text", "formControlName", "mat1", 1, "form-control", 3, "value"], ["for", "mat2"], ["type", "text", "formControlName", "mat2", 1, "form-control", 3, "value"], ["for", "mat3"], ["type", "text", "formControlName", "mat3", 1, "form-control", 3, "value"], ["for", "mat4t1"], ["type", "text", "formControlName", "mat4t1", 1, "form-control", 3, "value"], ["for", "mat4t2"], ["type", "text", "formControlName", "mat4t2", 1, "form-control", 3, "value"], ["for", "mat4t3"], ["type", "text", "formControlName", "mat4t3", 1, "form-control", 3, "value"], [1, "form-group", 2, "width", "100%"], ["type", "submit", 1, "btn", "btn-success"], ["type", "button", 1, "btn", "btn-primary", 3, "click"]], template: function CharacterEditComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](2, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("ngSubmit", function CharacterEditComponent_Template_form_ngSubmit_2_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](4, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](5, "Name:");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](6, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](8, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](9, "Weapon Type:");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](10, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](11, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](12, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](13, "Element:");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](14, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](15, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](16, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](17, "Rank 1 Ascension Materials");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](18, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](19, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](20, "Material 1:");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](21, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](22, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](23, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](24, "Material 2:");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](25, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](26, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](27, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](28, "Material 3:");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](29, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](30, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](31, "label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](32, "Material 4, Ranks 1-2:");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](33, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](34, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](35, "label", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](36, "Material 4, Ranks 3-4:");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](37, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](38, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](39, "label", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](40, "Material 4, Ranks 5-6:");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](41, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](42, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](43, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](44, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](45, "button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("click", function CharacterEditComponent_Template_button_click_45_listener() { return ctx.onCancel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](46, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("formGroup", ctx.characterForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????propertyInterpolate"]("value", ctx.character == null ? null : ctx.character.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????propertyInterpolate"]("value", ctx.character == null ? null : ctx.character.weaponType);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????propertyInterpolate"]("value", ctx.character == null ? null : ctx.character.element);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????propertyInterpolate"]("value", ctx.rank1 == null ? null : ctx.rank1.mat1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????propertyInterpolate"]("value", ctx.rank2 == null ? null : ctx.rank2.mat2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????propertyInterpolate"]("value", ctx.rank1 == null ? null : ctx.rank1.mat3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????propertyInterpolate"]("value", ctx.rank1 == null ? null : ctx.rank1.mat1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????propertyInterpolate"]("value", ctx.rank3 == null ? null : ctx.rank3.mat1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????propertyInterpolate"]("value", ctx.rank5 == null ? null : ctx.rank5.mat1);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["??angular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroupName"]], styles: [".img-right[_ngcontent-%COMP%] {\r\n    float: right;\r\n    clear: right;\r\n    padding-right: 50px;\r\n    \r\n}\r\n\r\n\r\n\r\n.Anemo[_ngcontent-%COMP%] { background-color: #5bdfb3; }\r\n\r\n.Cryo[_ngcontent-%COMP%] { background-color: #93fcff; }\r\n\r\n.Dendro[_ngcontent-%COMP%] { background-color: #b1ea27; }\r\n\r\n.Electro[_ngcontent-%COMP%] { background-color: #d79afc; }\r\n\r\n.Geo[_ngcontent-%COMP%] { background-color: #ffd656; }\r\n\r\n.Hydro[_ngcontent-%COMP%] { background-color: #0de3ff; }\r\n\r\n.Pyro[_ngcontent-%COMP%] { background-color: #feaa72; }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXJhY3Rlci1lZGl0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLG1CQUFtQjs7QUFFdkI7O0FBRUEsbUJBQW1COztBQUNuQixTQUFTLHlCQUF5QixFQUFFOztBQUVwQyxRQUFRLHlCQUF5QixFQUFFOztBQUVuQyxVQUFVLHlCQUF5QixFQUFFOztBQUVyQyxXQUFXLHlCQUF5QixFQUFFOztBQUV0QyxPQUFPLHlCQUF5QixFQUFFOztBQUVsQyxTQUFTLHlCQUF5QixFQUFFOztBQUVwQyxRQUFRLHlCQUF5QixFQUFFIiwiZmlsZSI6ImNoYXJhY3Rlci1lZGl0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW1nLXJpZ2h0IHtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIGNsZWFyOiByaWdodDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDUwcHg7XHJcbiAgICBcclxufVxyXG5cclxuLyogRWxlbWVudCBDb2xvcnMgKi9cclxuLkFuZW1vIHsgYmFja2dyb3VuZC1jb2xvcjogIzViZGZiMzsgfVxyXG5cclxuLkNyeW8geyBiYWNrZ3JvdW5kLWNvbG9yOiAjOTNmY2ZmOyB9XHJcblxyXG4uRGVuZHJvIHsgYmFja2dyb3VuZC1jb2xvcjogI2IxZWEyNzsgfVxyXG5cclxuLkVsZWN0cm8geyBiYWNrZ3JvdW5kLWNvbG9yOiAjZDc5YWZjOyB9XHJcblxyXG4uR2VvIHsgYmFja2dyb3VuZC1jb2xvcjogI2ZmZDY1NjsgfVxyXG5cclxuLkh5ZHJvIHsgYmFja2dyb3VuZC1jb2xvcjogIzBkZTNmZjsgfVxyXG5cclxuLlB5cm8geyBiYWNrZ3JvdW5kLWNvbG9yOiAjZmVhYTcyOyB9Il19 */"] });


/***/ }),

/***/ "ccyI":
/*!*********************************!*\
  !*** ./src/app/auth.service.ts ***!
  \*********************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class AuthService {
    constructor() {
        this.userID = "noob";
        if (this.userID == "admin") {
            this.accessLevel = 0;
        }
        else {
            this.accessLevel = 1;
        }
    }
}
AuthService.??fac = function AuthService_Factory(t) { return new (t || AuthService)(); };
AuthService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({ token: AuthService, factory: AuthService.??fac, providedIn: 'root' });


/***/ }),

/***/ "fECr":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


const _c0 = function () { return [""]; };
const _c1 = function () { return ["characters"]; };
const _c2 = function () { return ["about"]; };
class HeaderComponent {
    constructor() { }
    ngOnInit() {
    }
}
HeaderComponent.??fac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(); };
HeaderComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 16, vars: 8, consts: [[1, "navbar", "navbar-expand-lg", "navbar-default"], ["href", "#", 1, "navbar-brand", 3, "routerLink"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarSupportedContent", "aria-controls", "navbarSupportedContent", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "mr-auto"], [1, "nav-item"], ["href", "#", 1, "nav-link", 3, "routerLink"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "myGENSHIN");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "ul", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, "Characters");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, "About");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](4, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](5, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](6, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](7, _c2));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: [".navbar[_ngcontent-%COMP%] {\r\n    background-color: #454d55;\r\n    color: white;\r\n}\r\n\r\na.navbar-brand[_ngcontent-%COMP%], .nav-link[_ngcontent-%COMP%] {\r\n    color: white;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kseUJBQXlCO0lBQ3pCLFlBQVk7QUFDaEI7O0FBRUE7O0lBRUksWUFBWTtBQUNoQiIsImZpbGUiOiJoZWFkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXZiYXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQ1NGQ1NTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuYS5uYXZiYXItYnJhbmQsXHJcbi5uYXYtbGluayB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "fp1T":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.??fac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 2, vars: 0, template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "footer works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb290ZXIuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "jygX":
/*!***********************************************************************!*\
  !*** ./src/app/characters/character-list/character-list.component.ts ***!
  \***********************************************************************/
/*! exports provided: CharacterListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CharacterListComponent", function() { return CharacterListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _character_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../character.service */ "8gid");
/* harmony import */ var src_app_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/auth.service */ "ccyI");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _character_item_character_item_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../character-item/character-item.component */ "Hym6");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");






function CharacterListComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function CharacterListComponent_div_3_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r4.onSelected(true); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "Show Characters");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function CharacterListComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function CharacterListComponent_div_4_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r6.onSelected(false); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "Hide Characters");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function CharacterListComponent_div_5_app_character_item_1_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "app-character-item", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function CharacterListComponent_div_5_app_character_item_1_Template_app_character_item_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2); return ctx_r11.onSelected(false); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const character_r10 = ctx.$implicit;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("character", character_r10)("levelingTable", ctx_r8.levelingTable);
} }
function CharacterListComponent_div_5_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "Add Character");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function CharacterListComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, CharacterListComponent_div_5_app_character_item_1_Template, 1, 2, "app-character-item", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](2, CharacterListComponent_div_5_div_2_Template, 4, 0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx_r2.characters);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r2.accessLevel == 0);
} }
function CharacterListComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function CharacterListComponent_div_6_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r13.onSelected(false); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "Hide Characters");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
class CharacterListComponent {
    constructor(characterService, authService) {
        this.characterService = characterService;
        this.authService = authService;
        this.characters = [];
        this.showList = true;
    }
    ngOnInit() {
        this.accessLevel = this.authService.accessLevel;
        this.characterService.getCharacters();
        this.subscription =
            this.characterService.characterListChangedEvent.subscribe((characterList) => {
                this.characters = characterList;
            });
    }
    onSelected(toggle) {
        this.showList = toggle;
    }
    ngOnDestroy() { }
}
CharacterListComponent.??fac = function CharacterListComponent_Factory(t) { return new (t || CharacterListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_character_service__WEBPACK_IMPORTED_MODULE_1__["CharacterService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"])); };
CharacterListComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: CharacterListComponent, selectors: [["app-character-list"]], decls: 7, vars: 4, consts: [[1, "row"], [1, "col-xs-12"], [1, "container-fluid"], ["class", "row", 4, "ngIf"], [1, "btn", "btn-primary", 3, "click"], [3, "character", "levelingTable", "click", 4, "ngFor", "ngForOf"], ["class", "char-icon clearfix", "style", "cursor: pointer", "routerLink", "new", "routerLinkActive", "active", 4, "ngIf"], [3, "character", "levelingTable", "click"], ["routerLink", "new", "routerLinkActive", "active", 1, "char-icon", "clearfix", 2, "cursor", "pointer"], ["src", "assets/character-icons/Plus-Icon.png", "alt", ""]], template: function CharacterListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](3, CharacterListComponent_div_3_Template, 4, 0, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](4, CharacterListComponent_div_4_Template, 4, 0, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](5, CharacterListComponent_div_5_Template, 3, 2, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](6, CharacterListComponent_div_6_Template, 4, 0, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !ctx.showList);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.showList);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.showList);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.showList);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _character_item_character_item_component__WEBPACK_IMPORTED_MODULE_4__["CharacterItemComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkActive"]], styles: [".container-fluid[_ngcontent-%COMP%] {\r\n    padding: 15px;\r\n    margin: 0 auto;\r\n}\r\n\r\n.char-icon[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    border-radius: 50%;\r\n    width: 100px;\r\n}\r\n\r\n.char-icon[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    margin: 15px 0 5px;\r\n}\r\n\r\n.char-icon[_ngcontent-%COMP%] {\r\n    margin: 15px;\r\n    background-color: #454d55;\r\n    border-radius: 5%;\r\n    padding: 10px;\r\n    color: white;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%] {\r\n    margin-left: 15px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXJhY3Rlci1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2IsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWix5QkFBeUI7SUFDekIsaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCIiwiZmlsZSI6ImNoYXJhY3Rlci1saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyLWZsdWlkIHtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxufVxyXG5cclxuLmNoYXItaWNvbiBpbWcge1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG59XHJcblxyXG4uY2hhci1pY29uIHAge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luOiAxNXB4IDAgNXB4O1xyXG59XHJcblxyXG4uY2hhci1pY29uIHtcclxuICAgIG1hcmdpbjogMTVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0NTRkNTU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1JTtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbmJ1dHRvbiB7XHJcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcclxufSJdfQ== */"] });


/***/ }),

/***/ "kZRd":
/*!*************************************************!*\
  !*** ./src/app/characters/ascension.service.ts ***!
  \*************************************************/
/*! exports provided: AscensionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AscensionService", function() { return AscensionService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");


class AscensionService {
    constructor(http) {
        this.http = http;
        this.ascensions = [];
    }
    deleteAscensionByCharId(char_id) {
        console.log("Deleting ascensions!");
        this.http.delete("http://index.html/api/ascensions/character/" + char_id).subscribe(() => {
        });
    }
    getAscension(_id) {
        this.http.get("http://index.html/api/ascensions");
    }
    getAscensionByCharId(char_id) {
        return this.http.get("http://index.html/api/ascensions/character/" + char_id);
    }
    addAscension(newAscension) {
        if (!newAscension) {
            return;
        }
        console.log(newAscension);
        this.http
            .post('http://index.html/api/ascensions', newAscension)
            .subscribe((responseData) => {
            this.ascensions.push(responseData.createdAscension);
        });
    }
    updateAscension(ascension) {
        this.http
            .put("http://index.html/api/ascensions" + ascension._id, ascension)
            .subscribe(response => {
            const updatedAscensions = [...this.ascensions];
            const oldAscensionIndex = updatedAscensions.findIndex(a => a._id === ascension._id);
            updatedAscensions[oldAscensionIndex] = ascension;
            this.ascensions = updatedAscensions;
        });
    }
}
AscensionService.??fac = function AscensionService_Factory(t) { return new (t || AscensionService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
AscensionService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({ token: AscensionService, factory: AscensionService.??fac, providedIn: 'root' });


/***/ }),

/***/ "pomm":
/*!***************************************************************************!*\
  !*** ./src/app/characters/character-detail/character-detail.component.ts ***!
  \***************************************************************************/
/*! exports provided: CharacterDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CharacterDetailComponent", function() { return CharacterDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _character_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../character.service */ "8gid");
/* harmony import */ var _ascension_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ascension.service */ "kZRd");
/* harmony import */ var src_app_leveling_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/leveling.service */ "E/Nl");
/* harmony import */ var src_app_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/auth.service */ "ccyI");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _level_detail_level_detail_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../level-detail/level-detail.component */ "YA4t");








const _c0 = function () { return ["./edit"]; };
function CharacterDetailComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "Edit Character");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function CharacterDetailComponent_div_12_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r1.onDelete(ctx_r1.character == null ? null : ctx_r1.character._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "Delete Character");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](7, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](1, _c0));
} }
class CharacterDetailComponent {
    constructor(characterService, ascensionService, levelingService, authService, route, router) {
        this.characterService = characterService;
        this.ascensionService = ascensionService;
        this.levelingService = levelingService;
        this.authService = authService;
        this.route = route;
        this.router = router;
    }
    ngOnInit() {
        this.route.params.subscribe((params) => {
            this.characterService
                .getCharacter(params.id)
                .subscribe((characterData) => {
                this.character = characterData.character;
                this.ascensionService.getAscensionByCharId(params.id).subscribe((a) => {
                    this.rank1 = a.ascensions[0];
                    this.rank2 = a.ascensions[1];
                    this.rank3 = a.ascensions[2];
                    this.rank4 = a.ascensions[3];
                    this.rank5 = a.ascensions[4];
                    this.rank6 = a.ascensions[5];
                });
            });
            this.accessLevel = this.authService.accessLevel;
        });
    }
    onDelete(_id) {
        this.characterService.deleteCharacter(_id);
        this.ascensionService.deleteAscensionByCharId(_id);
        this.router.navigate(['/characters'], { relativeTo: this.route });
    }
}
CharacterDetailComponent.??fac = function CharacterDetailComponent_Factory(t) { return new (t || CharacterDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_character_service__WEBPACK_IMPORTED_MODULE_1__["CharacterService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_ascension_service__WEBPACK_IMPORTED_MODULE_2__["AscensionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_leveling_service__WEBPACK_IMPORTED_MODULE_3__["LevelingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"])); };
CharacterDetailComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: CharacterDetailComponent, selectors: [["app-character-detail"]], decls: 280, vars: 60, consts: [[1, "card"], [1, "card-header"], [1, "row"], [1, "col-xs-4", "img-container"], ["alt", "", 3, "src"], [1, "col-xs-8", "detail-container"], ["class", "row", 4, "ngIf"], [1, "card-body"], [1, "container"], [1, "card-text"], [1, "col-xs-12", "admin-char-btns"], [1, "btn", "btn-primary", "edit-char-btn", 3, "routerLink"], [1, "btn", "btn-danger", "delete-char-btn", 3, "click"]], template: function CharacterDetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](12, CharacterDetailComponent_div_12_Template, 8, 2, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](14, "app-level-detail");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](15, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18, "Ascension Materials");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, "TODO: Add item icons above the table categories for visual reference.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25, "Rank");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](27, "Level");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](29, "Mora Cost");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](31, "Material 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](33, "Material 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](35, "Material 3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](37, "Material 4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](41, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](43, "20");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](45, "20,000");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](49, "n/a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](52, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](55, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](56, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](57, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](58, "40");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](59, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](60, "40,000");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](61, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](63, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](65, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](67, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](69, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](70, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](71, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](72, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](73, "50");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](74, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](75, "60,000");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](76, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](77);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](78, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](79);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](80, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](81);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](82, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](83);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](84, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](85, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](86, "4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](87, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](88, "60");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](89, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](90, "80,000");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](91, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](92);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](93, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](94);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](95, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](96);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](97, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](98);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](99, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](100, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](101, "5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](102, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](103, "70");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](104, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](105, "100,000");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](106, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](107);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](108, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](109);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](110, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](111);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](112, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](113);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](114, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](115, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](116, "6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](117, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](118, "80");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](119, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](120, "120,000");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](121, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](122);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](123, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](124);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](125, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](126);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](127, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](128);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](129, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](130, "Leveling Costs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](131, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](132, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](133, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](134, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](135, "Level Range");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](136, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](137, "Hero's Wit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](138, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](139, "Adventurer's ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](140, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](141, "Experience");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](142, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](143, "Wanderer's ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](144, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](145, "Advice");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](146, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](147, "Experience ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](148, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](149, "Needed");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](150, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](151, "Experience ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](152, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](153, "Wasted");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](154, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](155, "Mora Cost");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](156, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](157, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](158, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](159, "1 - 20");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](160, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](161, "6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](162, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](163, "0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](164, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](165, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](166, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](167, "120175");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](168, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](169, "825");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](170, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](171, "24200");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](172, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](173, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](174, "20 - 40");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](175, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](176, "28");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](177, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](178, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](179, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](180, "4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](181, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](182, "578325");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](183, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](184, "675");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](185, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](186, "115800");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](187, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](188, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](189, "40 - 50");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](190, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](191, "28");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](192, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](193, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](194, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](195, "5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](196, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](197, "579100");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](198, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](199, "900");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](200, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](201, "116000");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](202, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](203, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](204, "50 - 60");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](205, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](206, "42");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](207, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](208, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](209, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](210, "5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](211, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](212, "854125");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](213, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](214, "875");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](215, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](216, "171000");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](217, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](218, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](219, "60 - 70");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](220, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](221, "59");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](222, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](223, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](224, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](225, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](226, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](227, "1195925");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](228, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](229, "75");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](230, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](231, "239200");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](232, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](233, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](234, "70 - 80");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](235, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](236, "80");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](237, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](238, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](239, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](240, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](241, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](242, "1611875");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](243, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](244, "125");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](245, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](246, "322400");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](247, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](248, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](249, "80 - 90");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](250, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](251, "171");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](252, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](253, "0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](254, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](255, "4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](256, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](257, "3423125");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](258, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](259, "875");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](260, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](261, "684800");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](262, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](263, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](264, "Total (1 - 90)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](265, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](266, "414");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](267, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](268, "15");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](269, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](270, "12");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](271, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](272, "8362650");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](273, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](274, "4350");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](275, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](276, "1673400");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](277, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](278, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](279, "Eventually, this area will be available for the other character information about their skills, talents, and other static data that can be displayed for user convenience.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classMap"](ctx.character == null ? null : ctx.character.element);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate1"]("src", "assets/character-icons/", ctx.character == null ? null : ctx.character.name, "-Icon.png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.character == null ? null : ctx.character.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("Element: ", ctx.character == null ? null : ctx.character.element, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("Weapon Type: ", ctx.character == null ? null : ctx.character.weaponType, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.accessLevel == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classMapInterpolate1"]("table table-dark ", ctx.character == null ? null : ctx.character.element, "Table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate2"]("", ctx.rank1 == null ? null : ctx.rank1.mat1_quan, " ", ctx.rank1 == null ? null : ctx.rank1.mat1, " Sliver");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate2"]("", ctx.rank1 == null ? null : ctx.rank1.mat3_quan, " ", ctx.rank1 == null ? null : ctx.rank1.mat3, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate2"]("", ctx.rank1 == null ? null : ctx.rank1.mat4_quan, " ", ctx.rank1 == null ? null : ctx.rank1.mat4, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate2"]("", ctx.rank2 == null ? null : ctx.rank2.mat1_quan, " ", ctx.rank2 == null ? null : ctx.rank2.mat1, " Fragment");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate2"]("", ctx.rank2 == null ? null : ctx.rank2.mat2_quan, " ", ctx.rank2 == null ? null : ctx.rank2.mat2, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate2"]("", ctx.rank2 == null ? null : ctx.rank2.mat3_quan, " ", ctx.rank2 == null ? null : ctx.rank2.mat3, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate2"]("", ctx.rank2 == null ? null : ctx.rank2.mat4_quan, " ", ctx.rank2 == null ? null : ctx.rank2.mat4, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate2"]("", ctx.rank3 == null ? null : ctx.rank3.mat1_quan, " ", ctx.rank3 == null ? null : ctx.rank3.mat1, " Fragment");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate2"]("", ctx.rank3 == null ? null : ctx.rank3.mat2_quan, " ", ctx.rank3 == null ? null : ctx.rank3.mat2, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate2"]("", ctx.rank3 == null ? null : ctx.rank3.mat3_quan, " ", ctx.rank3 == null ? null : ctx.rank3.mat3, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate2"]("", ctx.rank3 == null ? null : ctx.rank3.mat4_quan, " ", ctx.rank3 == null ? null : ctx.rank3.mat4, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate2"]("", ctx.rank4 == null ? null : ctx.rank4.mat1_quan, " ", ctx.rank4 == null ? null : ctx.rank4.mat1, " Chunk");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate2"]("", ctx.rank4 == null ? null : ctx.rank4.mat2_quan, " ", ctx.rank4 == null ? null : ctx.rank4.mat2, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate2"]("", ctx.rank4 == null ? null : ctx.rank4.mat3_quan, " ", ctx.rank4 == null ? null : ctx.rank4.mat3, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate2"]("", ctx.rank4 == null ? null : ctx.rank4.mat4_quan, " ", ctx.rank4 == null ? null : ctx.rank4.mat4, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate2"]("", ctx.rank5 == null ? null : ctx.rank5.mat1_quan, " ", ctx.rank5 == null ? null : ctx.rank5.mat1, " Chunk");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate2"]("", ctx.rank5 == null ? null : ctx.rank5.mat2_quan, " ", ctx.rank5 == null ? null : ctx.rank5.mat2, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate2"]("", ctx.rank5 == null ? null : ctx.rank5.mat3_quan, " ", ctx.rank5 == null ? null : ctx.rank5.mat3, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate2"]("", ctx.rank5 == null ? null : ctx.rank5.mat4_quan, " ", ctx.rank5 == null ? null : ctx.rank5.mat4, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate2"]("", ctx.rank6 == null ? null : ctx.rank6.mat1_quan, " ", ctx.rank6 == null ? null : ctx.rank6.mat1, " Gemstone");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate2"]("", ctx.rank6 == null ? null : ctx.rank6.mat2_quan, " ", ctx.rank6 == null ? null : ctx.rank6.mat2, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate2"]("", ctx.rank6 == null ? null : ctx.rank6.mat3_quan, " ", ctx.rank6 == null ? null : ctx.rank6.mat3, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate2"]("", ctx.rank6 == null ? null : ctx.rank6.mat4_quan, " ", ctx.rank6 == null ? null : ctx.rank6.mat4, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classMapInterpolate1"]("table table-dark ", ctx.character == null ? null : ctx.character.element, "Table");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _level_detail_level_detail_component__WEBPACK_IMPORTED_MODULE_7__["LevelDetailComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLink"]], styles: [".card-header[_ngcontent-%COMP%] {\r\n    background-color: #343a40;\r\n    padding: 0px;\r\n}\r\n\r\n.card-body[_ngcontent-%COMP%] {\r\n    background-color: #454d55;\r\n}\r\n\r\n.card[_ngcontent-%COMP%] {\r\n    border-color: #454d55;\r\n}\r\n\r\n.card-header[_ngcontent-%COMP%]   .img-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    border: 1px solid #454d55;\r\n    width: 125px;\r\n    margin-left: 15px;\r\n}\r\n\r\n.card-header[_ngcontent-%COMP%]   .detail-container[_ngcontent-%COMP%] {\r\n    padding: 10px 10px 0;\r\n}\r\n\r\n.admin-char-btns[_ngcontent-%COMP%] {\r\n    display: block;\r\n    margin: 0 auto;\r\n}\r\n\r\n.edit-char-btn[_ngcontent-%COMP%], .delete-char-btn[_ngcontent-%COMP%] {\r\n    margin: 0 7.5px;\r\n}\r\n\r\n\r\n\r\n.Anemo[_ngcontent-%COMP%] { background-color: #5bdfb3; }\r\n\r\n.AnemoTable[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] { border-color: #5bdfb3; }\r\n\r\n.Cryo[_ngcontent-%COMP%] { background-color: #93fcff; }\r\n\r\n.CryoTable[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] { border-color: #93fcff; }\r\n\r\n.Dendro[_ngcontent-%COMP%] { background-color: #b1ea27; }\r\n\r\n.DendroTable[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] { border-color: #b1ea27; }\r\n\r\n.Electro[_ngcontent-%COMP%] { background-color: #d79afc; }\r\n\r\n.ElectroTable[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] { border-color: #d79afc; }\r\n\r\n.Geo[_ngcontent-%COMP%] { background-color: #ffd656; }\r\n\r\n.GeoTable[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] { border-color: #ffd656; }\r\n\r\n.Hydro[_ngcontent-%COMP%] { background-color: #0de3ff; }\r\n\r\n.HydroTable[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] { border-color: #0de3ff; }\r\n\r\n.Pyro[_ngcontent-%COMP%] { background-color: #feaa72; }\r\n\r\n.PyroTable[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] { border-color: #feaa72; }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXJhY3Rlci1kZXRhaWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHlCQUF5QjtJQUN6QixZQUFZO0FBQ2hCOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsY0FBYztBQUNsQjs7QUFFQTs7SUFFSSxlQUFlO0FBQ25COztBQUVBLG1CQUFtQjs7QUFDbkIsU0FBUyx5QkFBeUIsRUFBRTs7QUFDcEMsZ0JBQWdCLHFCQUFxQixFQUFFOztBQUV2QyxRQUFRLHlCQUF5QixFQUFFOztBQUNuQyxlQUFlLHFCQUFxQixFQUFFOztBQUV0QyxVQUFVLHlCQUF5QixFQUFFOztBQUNyQyxpQkFBaUIscUJBQXFCLEVBQUU7O0FBRXhDLFdBQVcseUJBQXlCLEVBQUU7O0FBQ3RDLGtCQUFrQixxQkFBcUIsRUFBRTs7QUFFekMsT0FBTyx5QkFBeUIsRUFBRTs7QUFDbEMsY0FBYyxxQkFBcUIsRUFBRTs7QUFFckMsU0FBUyx5QkFBeUIsRUFBRTs7QUFDcEMsZ0JBQWdCLHFCQUFxQixFQUFFOztBQUV2QyxRQUFRLHlCQUF5QixFQUFFOztBQUNuQyxlQUFlLHFCQUFxQixFQUFFIiwiZmlsZSI6ImNoYXJhY3Rlci1kZXRhaWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkLWhlYWRlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzQzYTQwO1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG59XHJcblxyXG4uY2FyZC1ib2R5IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0NTRkNTU7XHJcbn1cclxuXHJcbi5jYXJkIHtcclxuICAgIGJvcmRlci1jb2xvcjogIzQ1NGQ1NTtcclxufVxyXG5cclxuLmNhcmQtaGVhZGVyIC5pbWctY29udGFpbmVyIGltZyB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNDU0ZDU1O1xyXG4gICAgd2lkdGg6IDEyNXB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbn1cclxuXHJcbi5jYXJkLWhlYWRlciAuZGV0YWlsLWNvbnRhaW5lciB7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDEwcHggMDtcclxufVxyXG5cclxuLmFkbWluLWNoYXItYnRucyB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG59XHJcblxyXG4uZWRpdC1jaGFyLWJ0bixcclxuLmRlbGV0ZS1jaGFyLWJ0biB7XHJcbiAgICBtYXJnaW46IDAgNy41cHg7XHJcbn1cclxuXHJcbi8qIEVsZW1lbnQgQ29sb3JzICovXHJcbi5BbmVtbyB7IGJhY2tncm91bmQtY29sb3I6ICM1YmRmYjM7IH1cclxuLkFuZW1vVGFibGUgKiB7IGJvcmRlci1jb2xvcjogIzViZGZiMzsgfVxyXG5cclxuLkNyeW8geyBiYWNrZ3JvdW5kLWNvbG9yOiAjOTNmY2ZmOyB9XHJcbi5DcnlvVGFibGUgKiB7IGJvcmRlci1jb2xvcjogIzkzZmNmZjsgfVxyXG5cclxuLkRlbmRybyB7IGJhY2tncm91bmQtY29sb3I6ICNiMWVhMjc7IH1cclxuLkRlbmRyb1RhYmxlICogeyBib3JkZXItY29sb3I6ICNiMWVhMjc7IH1cclxuXHJcbi5FbGVjdHJvIHsgYmFja2dyb3VuZC1jb2xvcjogI2Q3OWFmYzsgfVxyXG4uRWxlY3Ryb1RhYmxlICogeyBib3JkZXItY29sb3I6ICNkNzlhZmM7IH1cclxuXHJcbi5HZW8geyBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZkNjU2OyB9XHJcbi5HZW9UYWJsZSAqIHsgYm9yZGVyLWNvbG9yOiAjZmZkNjU2OyB9XHJcblxyXG4uSHlkcm8geyBiYWNrZ3JvdW5kLWNvbG9yOiAjMGRlM2ZmOyB9XHJcbi5IeWRyb1RhYmxlICogeyBib3JkZXItY29sb3I6ICMwZGUzZmY7IH1cclxuXHJcbi5QeXJvIHsgYmFja2dyb3VuZC1jb2xvcjogI2ZlYWE3MjsgfVxyXG4uUHlyb1RhYmxlICogeyBib3JkZXItY29sb3I6ICNmZWFhNzI7IH0iXX0= */"] });


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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about/about.component */ "84zG");
/* harmony import */ var _characters_character_detail_character_detail_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./characters/character-detail/character-detail.component */ "pomm");
/* harmony import */ var _characters_character_edit_character_edit_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./characters/character-edit/character-edit.component */ "cBNv");
/* harmony import */ var _characters_characters_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./characters/characters.component */ "NnYK");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");








const routes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"] },
    { path: 'characters', component: _characters_characters_component__WEBPACK_IMPORTED_MODULE_4__["CharactersComponent"], children: [
            { path: 'new', component: _characters_character_edit_character_edit_component__WEBPACK_IMPORTED_MODULE_3__["CharacterEditComponent"] },
            { path: ':id', component: _characters_character_detail_character_detail_component__WEBPACK_IMPORTED_MODULE_2__["CharacterDetailComponent"] },
            { path: ':id/edit', component: _characters_character_edit_character_edit_component__WEBPACK_IMPORTED_MODULE_3__["CharacterEditComponent"] }
        ] },
    { path: 'about', component: _about_about_component__WEBPACK_IMPORTED_MODULE_1__["AboutComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.??fac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????defineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????defineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["????setNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map