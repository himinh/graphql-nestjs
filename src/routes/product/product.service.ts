import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { PaginateModel } from 'mongoose';
import { BaseRepositoryService } from '~/base-inherit/base-repository.service';
import { Product, ProductDocument } from './schema/product.schema';

@Injectable()
export class ProductService extends BaseRepositoryService<ProductDocument> {
  constructor(
    @InjectModel(Product.name) model: PaginateModel<ProductDocument>,
  ) {
    super(model);
  }
}
