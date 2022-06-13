import {
  PaginateDocument,
  PaginateModel,
  PaginateOptions,
  PaginateResult,
  QueryOptions,
  Types,
} from 'mongoose';
import { IBaseService } from './IBase-repository.service';

import { NotFoundException } from '@nestjs/common';

export class BaseRepositoryService<T> implements IBaseService<T> {
  private model: PaginateModel<T>;

  constructor(model: PaginateModel<T>) {
    this.model = model;
  }

  async create(payload: any): Promise<any> {
    const createdItem = await this.model.create(payload);
    return createdItem.toObject() as any;
  }

  async find(
    query?: object,
    paginateOpts?: PaginateOptions,
  ): Promise<any[] | []> {
    if (paginateOpts && paginateOpts.limit && paginateOpts.page) {
      const skips = paginateOpts.limit * (paginateOpts.page - 1);

      paginateOpts.limit = +paginateOpts.limit;

      const res = this.model
        .find(query)
        .skip(skips)
        .limit(paginateOpts.limit)
        .lean();

      return res;
    }

    return this.model.find(query || {}).lean();
  }

  async findById(id: Types.ObjectId): Promise<any> {
    const item = await this.model.findById(id).lean();

    if (!item) throw new NotFoundException();

    return item;
  }

  async findOne(query: object): Promise<any> {
    const item = await this.model.findOne(query).lean();

    if (!item) throw new NotFoundException();

    return item;
  }

  async findByIdAndUpdate(
    id: Types.ObjectId,
    updates: any,
    options?: QueryOptions<T> | null,
  ): Promise<any | null> {
    const updated = this.model.findByIdAndUpdate(id, updates, options).lean();

    return updated;
  }

  async findOneAndUpdate(
    query: object,
    payload: any,
    options?: QueryOptions<T>,
  ): Promise<any | null> {
    const updated = this.model.findOneAndUpdate(query, payload, options).lean();

    return updated;
  }

  async updateMany(
    query: object,
    payload: any,
    options?: QueryOptions<T>,
  ): Promise<any> {
    const rs = this.model.updateMany(query, payload, options).lean();

    return rs;
  }

  async findByIdAndDelete(
    id?: Types.ObjectId,
    options?: QueryOptions<T>,
  ): Promise<any> {
    const rs = this.model.findByIdAndDelete(id, options).lean();

    return rs;
  }

  async findOneAndDelete(
    query: object,
    options?: QueryOptions<T>,
  ): Promise<any | null> {
    const rs = this.model.findOneAndDelete(query, options).lean();

    return rs;
  }

  async deleteMany(
    query?: object,
    options?: QueryOptions<T>,
  ): Promise<any | null> {
    const rs = this.model.deleteMany(query || {}, options).lean();

    return rs;
  }

  async paginate(
    query: object,
    paginateOpts: PaginateOptions,
  ): Promise<PaginateResult<PaginateDocument<T, {}, PaginateOptions>>> {
    return this.model.paginate(query, {
      page: paginateOpts.page,
      limit: paginateOpts.limit,
      sort: paginateOpts.sort,
      projection: paginateOpts.projection,
      populate: paginateOpts.populate,
    });
  }
}
