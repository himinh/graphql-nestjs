import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { PaginateModel } from 'mongoose';
import { BaseRepositoryService } from '~/base-inherit/base-repository.service';
import { Author, AuthorDocument } from './schema/author.schema';

@Injectable()
export class AuthorService extends BaseRepositoryService<AuthorDocument> {
  constructor(@InjectModel(Author.name) model: PaginateModel<AuthorDocument>) {
    super(model);
  }
}
