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
var call_service_1 = require('./call.service');
var CallListComponent = (function () {
    function CallListComponent(callService) {
        this.callService = callService;
        this.currentCall = new call_1.Call(0, "GET", "http://");
        this.calls = callService.getCalls();
    }
    CallListComponent.prototype.setCall = function (call) {
        this.currentCall = call;
    };
    CallListComponent = __decorate([
        core_1.Component({
            selector: 'call-list',
            templateUrl: 'app/call-list.component.html',
            providers: [call_service_1.CallService]
        }), 
        __metadata('design:paramtypes', [call_service_1.CallService])
    ], CallListComponent);
    return CallListComponent;
}());
exports.CallListComponent = CallListComponent;
//# sourceMappingURL=call-list.component.js.map