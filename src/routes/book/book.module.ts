import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Author, AuthorSchema } from '~/routes/author/schema/author.schema';
import { AuthorService } from '~/routes/author/author.service';
import { BookResolver } from './book.resolver';
import { Book, BookSchema } from './schema/book.schema';
import { BookService } from './book.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Author.name, schema: AuthorSchema }]),
    MongooseModule.forFeature([{ name: Book.name, schema: BookSchema }]),
  ],
  providers: [BookResolver, BookService, AuthorService],
})
export class BookModule {}
