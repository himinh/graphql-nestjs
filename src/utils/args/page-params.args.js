"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.PageParamsArgs = void 0;
var graphql_1 = require("@nestjs/graphql");
var page_params_input_1 = require("../inputs/page-params.input");
var PageParamsArgs = /** @class */ (function () {
    function PageParamsArgs() {
    }
    __decorate([
        (0, graphql_1.Field)({ nullable: true, defaultValue: page_params_input_1.defaultPageParamsInput })
    ], PageParamsArgs.prototype, "pageParams");
    PageParamsArgs = __decorate([
        (0, graphql_1.ArgsType)()
    ], PageParamsArgs);
    return PageParamsArgs;
}());
exports.PageParamsArgs = PageParamsArgs;
