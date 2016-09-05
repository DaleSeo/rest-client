"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var call_history_component_1 = require('./call-history.component');
var AppComponent = (function () {
    function AppComponent() {
        this.myValue = 2;
        this.methods = ['GET', 'POST', 'PUT', 'DELETE'];
    }
    AppComponent.prototype.addCall = function (event) {
        console.log(event);
        this.history.addCall(event);
    };
    AppComponent.prototype.myValueChange = function (event) {
        console.log(event);
    };
    __decorate([
        core_1.ViewChild(call_history_component_1.CallHistoryComponent), 
        __metadata('design:type', Object)
    ], AppComponent.prototype, "history", void 0);
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: 'app/app.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map