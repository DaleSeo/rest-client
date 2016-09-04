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
var call_1 = require('./call');
var CallFormComponent = (function () {
    function CallFormComponent() {
        this.historyAdded = new core_1.EventEmitter();
        this.submitted = false;
        this.active = true;
        this.model = new call_1.Call(0, "GET", "http://www.google.com");
    }
    CallFormComponent.prototype.newCall = function () {
        var _this = this;
        this.model = new call_1.Call(0, "GET", "");
        this.active = false;
        setTimeout(function () { return _this.active = true; }, 0);
    };
    CallFormComponent.prototype.onSubmit = function () { this.submitted = true; };
    Object.defineProperty(CallFormComponent.prototype, "diagnostic", {
        // TODO: Remove this when we're done
        get: function () { return JSON.stringify(this.model); },
        enumerable: true,
        configurable: true
    });
    CallFormComponent.prototype.send = function () {
        console.log(this.model);
        this.historyAdded.emit(this.model);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], CallFormComponent.prototype, "methods", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], CallFormComponent.prototype, "historyAdded", void 0);
    CallFormComponent = __decorate([
        core_1.Component({
            selector: 'call-form',
            templateUrl: 'app/call-form.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], CallFormComponent);
    return CallFormComponent;
}());
exports.CallFormComponent = CallFormComponent;
//# sourceMappingURL=call-form.component.js.map