"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.controller = void 0;
require("reflect-metadata");
var AppRouter_1 = require("../../AppRouter");
var MetaDataKeys_1 = require("./MetaDataKeys");
function controller(routePrefix) {
    return function (target) {
        var router = AppRouter_1.AppRouter.getInstance();
        for (var key in target.prototype) {
            var routeHandler = target.prototype[key];
            var path = Reflect.getMetadata(MetaDataKeys_1.MetaDataKeys.Path, target.prototype, key);
            var method = Reflect.getMetadata(MetaDataKeys_1.MetaDataKeys.Method, target.prototype, key);
            var middlewares = Reflect.getMetadata(MetaDataKeys_1.MetaDataKeys.Middleware, target.prototype, key) ||
                [];
            if (path) {
                router[method].apply(router, __spreadArrays(["" + routePrefix + path], middlewares, [routeHandler]));
            }
        }
    };
}
exports.controller = controller;
