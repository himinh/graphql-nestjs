"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.defaultPageInfoOptions = exports.PageInfoOptions = void 0;
var graphql_1 = require("@nestjs/graphql");
var PageInfoOptions = /** @class */ (function () {
    function PageInfoOptions() {
    }
    __decorate([
        (0, graphql_1.Field)(function () { return graphql_1.Int; }, { defaultValue: 1, nullable: true })
    ], PageInfoOptions.prototype, "page");
    __decorate([
        (0, graphql_1.Field)(function () { return graphql_1.Int; }, { defaultValue: 1, nullable: true })
    ], PageInfoOptions.prototype, "limit");
    __decorate([
        (0, graphql_1.Field)(function () { return String; }, { defaultValue: '-createdAt', nullable: true })
    ], PageInfoOptions.prototype, "sort");
    __decorate([
        (0, graphql_1.Field)(function () { return String; }, { defaultValue: '', nullable: true })
    ], PageInfoOptions.prototype, "populate");
    PageInfoOptions = __decorate([
        (0, graphql_1.InputType)()
    ], PageInfoOptions);
    return PageInfoOptions;
}());
exports.PageInfoOptions = PageInfoOptions;
exports.defaultPageInfoOptions = {
    page: 1,
    limit: 10,
    sort: '-createdAt'
};
