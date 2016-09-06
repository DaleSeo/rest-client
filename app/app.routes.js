"use strict";
var router_1 = require('@angular/router');
var app_component_1 = require('./app.component');
var about_component_1 = require('./about.component');
exports.routes = [
    { path: '', component: app_component_1.AppComponent },
    { path: 'call', component: app_component_1.AppComponent },
    { path: 'about', component: about_component_1.AboutComponent }
];
exports.APP_ROUTER_PROVIDERS = [
    router_1.provideRouter(exports.routes)
];
//# sourceMappingURL=app.routes.js.map