import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { GraphQLModule } from '@nestjs/graphql';
import { AuthorModule } from '~/routes/author/author.module';
import { BookModule } from '~/routes/book/book.module';
import { UserModule } from '~/routes/user/user.module';
import { ProductModule } from '~/routes/product/product.module';
import mongoosePaginate from 'mongoose-paginate-v2';

mongoosePaginate.paginate.options = {
  lean: true,
  limit: 10,
  page: 1,
  customLabels: {
    meta: 'pageInfo',
  },
};

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://nestgraphql:nestgraphql@cluster0.lhvh7.mongodb.net/nest-grahqql?retryWrites=true&w=majority',
      {
        connectionFactory: (connection) => {
          connection.plugin(mongoosePaginate);
          return connection;
        },
      },
    ),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'schema.gql',
    }),
    BookModule,
    AuthorModule,
    UserModule,
    ProductModule,
  ],
})
export class AppModule {}
