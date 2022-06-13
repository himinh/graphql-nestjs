import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { PaginateModel } from 'mongoose';
import { BaseRepositoryService } from '~/base-inherit/base-repository.service';
import { Book, BookDocument } from './schema/book.schema';

@Injectable()
export class BookService extends BaseRepositoryService<BookDocument> {
  constructor(@InjectModel(Book.name) model: PaginateModel<BookDocument>) {
    super(model);
  }
}
