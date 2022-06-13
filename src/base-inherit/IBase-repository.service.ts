import {
  Types,
  PaginateResult,
  PaginateDocument,
  PaginateOptions,
  QueryOptions,
} from 'mongoose';

export interface IBaseService<T> {
  create(payload: any): Promise<any>;

  find(query: object, paginateOpts?: PaginateOptions): Promise<any[]>;

  findById(id: Types.ObjectId): Promise<any>;

  findOne(query: object): Promise<any>;

  findByIdAndUpdate(
    id: Types.ObjectId,
    payload: any,
    options?: QueryOptions<T>,
  ): Promise<any>;

  findOneAndUpdate(
    query: object,
    payload: any,
    options?: QueryOptions<T>,
  ): Promise<any>;

  updateMany(
    query: object,
    payload: any,
    options?: QueryOptions<T>,
  ): Promise<any>;

  findByIdAndDelete(
    id?: Types.ObjectId,
    options?: QueryOptions<T>,
  ): Promise<any>;

  findOneAndDelete(query?: object, options?: QueryOptions<T>): Promise<any>;

  deleteMany(query?: object, options?: QueryOptions<T>): Promise<any>;

  paginate(
    query: object,
    paginateOpts?: PaginateOptions,
    ...args: any[]
  ): Promise<PaginateResult<PaginateDocument<T, {}, PaginateOptions>>>;
}
