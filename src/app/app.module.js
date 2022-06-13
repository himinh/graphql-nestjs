"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var apollo_1 = require("@nestjs/apollo");
var common_1 = require("@nestjs/common");
var mongoose_1 = require("@nestjs/mongoose");
var graphql_1 = require("@nestjs/graphql");
var author_module_1 = require("../routes/author/author.module");
var book_module_1 = require("../routes/book/book.module");
var user_module_1 = require("../routes/user/user.module");
var product_module_1 = require("../routes/product/product.module");
var mongoose_paginate_v2_1 = require("mongoose-paginate-v2");
mongoose_paginate_v2_1["default"].paginate.options = {
    lean: true,
    limit: 10,
    page: 1,
    customLabels: {
        meta: 'pageInfo'
    }
};
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        (0, common_1.Module)({
            imports: [
                mongoose_1.MongooseModule.forRoot('mongodb+srv://nestgraphql:nestgraphql@cluster0.lhvh7.mongodb.net/nest-grahqql?retryWrites=true&w=majority', {
                    connectionFactory: function (connection) {
                        connection.plugin(mongoose_paginate_v2_1["default"]);
                        return connection;
                    }
                }),
                graphql_1.GraphQLModule.forRoot({
                    driver: apollo_1.ApolloDriver,
                    autoSchemaFile: 'schema.gql'
                }),
                book_module_1.BookModule,
                author_module_1.AuthorModule,
                user_module_1.UserModule,
                product_module_1.ProductModule,
            ]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
