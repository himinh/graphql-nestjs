"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.Paginated = exports.PageInfo = void 0;
var graphql_1 = require("@nestjs/graphql");
var PageInfo = /** @class */ (function () {
    function PageInfo() {
    }
    __decorate([
        (0, graphql_1.Field)(function () { return graphql_1.Int; })
    ], PageInfo.prototype, "totalDocs");
    __decorate([
        (0, graphql_1.Field)(function () { return graphql_1.Int; })
    ], PageInfo.prototype, "totalPages");
    __decorate([
        (0, graphql_1.Field)(function () { return graphql_1.Int; })
    ], PageInfo.prototype, "page");
    __decorate([
        (0, graphql_1.Field)(function () { return Boolean; })
    ], PageInfo.prototype, "hasPrevPage");
    __decorate([
        (0, graphql_1.Field)(function () { return Boolean; })
    ], PageInfo.prototype, "hasNextPage");
    __decorate([
        (0, graphql_1.Field)(function () { return graphql_1.Int; })
    ], PageInfo.prototype, "limit");
    __decorate([
        (0, graphql_1.Field)(function () { return graphql_1.Int; }, { nullable: true })
    ], PageInfo.prototype, "prevPage");
    __decorate([
        (0, graphql_1.Field)(function () { return graphql_1.Int; }, { nullable: true })
    ], PageInfo.prototype, "nextPage");
    PageInfo = __decorate([
        (0, graphql_1.ObjectType)()
    ], PageInfo);
    return PageInfo;
}());
exports.PageInfo = PageInfo;
function Paginated(classRef) {
    var PaginatedType = /** @class */ (function () {
        function PaginatedType() {
        }
        __decorate([
            (0, graphql_1.Field)(function () { return PageInfo; }, { nullable: true })
        ], PaginatedType.prototype, "pageInfo");
        __decorate([
            (0, graphql_1.Field)(function () { return [classRef]; }, { nullable: true })
        ], PaginatedType.prototype, "docs");
        PaginatedType = __decorate([
            (0, graphql_1.ObjectType)({ isAbstract: true })
        ], PaginatedType);
        return PaginatedType;
    }());
    return PaginatedType;
}
exports.Paginated = Paginated;
