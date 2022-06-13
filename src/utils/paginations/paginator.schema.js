"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.Pagination = void 0;
var graphql_1 = require("@nestjs/graphql");
var Pagination = /** @class */ (function () {
    function Pagination() {
    }
    __decorate([
        (0, graphql_1.Field)(function () { return graphql_1.Int; })
    ], Pagination.prototype, "totalDocs");
    __decorate([
        (0, graphql_1.Field)(function () { return graphql_1.Int; })
    ], Pagination.prototype, "totalPages");
    __decorate([
        (0, graphql_1.Field)(function () { return graphql_1.Int; })
    ], Pagination.prototype, "page");
    __decorate([
        (0, graphql_1.Field)(function () { return Boolean; })
    ], Pagination.prototype, "hasPrevPage");
    __decorate([
        (0, graphql_1.Field)(function () { return Boolean; })
    ], Pagination.prototype, "hasNextPage");
    __decorate([
        (0, graphql_1.Field)(function () { return graphql_1.Int; })
    ], Pagination.prototype, "limit");
    __decorate([
        (0, graphql_1.Field)(function () { return graphql_1.Int; }, { nullable: true })
    ], Pagination.prototype, "prevPage");
    __decorate([
        (0, graphql_1.Field)(function () { return graphql_1.Int; }, { nullable: true })
    ], Pagination.prototype, "nextPage");
    Pagination = __decorate([
        (0, graphql_1.ObjectType)()
    ], Pagination);
    return Pagination;
}());
exports.Pagination = Pagination;
