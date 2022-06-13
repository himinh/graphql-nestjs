"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.PageParamsInput = exports.defaultPageParamsInput = void 0;
var graphql_1 = require("@nestjs/graphql");
exports.defaultPageParamsInput = {
    page: 1,
    limit: 10,
    sort: '-createdAt'
};
var PageParamsInput = /** @class */ (function () {
    function PageParamsInput() {
    }
    __decorate([
        (0, graphql_1.Field)(function () { return graphql_1.Int; }, { defaultValue: 1, nullable: true })
    ], PageParamsInput.prototype, "page");
    __decorate([
        (0, graphql_1.Field)(function () { return graphql_1.Int; }, { defaultValue: 1, nullable: true })
    ], PageParamsInput.prototype, "limit");
    __decorate([
        (0, graphql_1.Field)(function () { return String; }, { defaultValue: '-createdAt', nullable: true })
    ], PageParamsInput.prototype, "sort");
    __decorate([
        (0, graphql_1.Field)(function () { return String; }, { defaultValue: '', nullable: true })
    ], PageParamsInput.prototype, "populate");
    PageParamsInput = __decorate([
        (0, graphql_1.InputType)()
    ], PageParamsInput);
    return PageParamsInput;
}());
exports.PageParamsInput = PageParamsInput;
