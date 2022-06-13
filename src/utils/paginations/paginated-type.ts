import { Field, ObjectType, Int } from '@nestjs/graphql';
import { Type } from '@nestjs/common';

@ObjectType()
export class PageInfo {
  @Field(() => Int)
  totalDocs: number;

  @Field(() => Int)
  totalPages: number;

  @Field(() => Int)
  page: number;

  @Field(() => Boolean)
  hasPrevPage: boolean;

  @Field(() => Boolean)
  hasNextPage: boolean;

  @Field(() => Int)
  limit: number;

  @Field(() => Int, { nullable: true })
  prevPage: number | null;

  @Field(() => Int, { nullable: true })
  nextPage: number | null;
}

export interface IPaginatedType<T> {
  docs: T[];
  pageInfo: PageInfo;
}

export function Paginated<T>(classRef: Type<T>): Type<IPaginatedType<T>> {
  @ObjectType({ isAbstract: true })
  abstract class PaginatedType implements IPaginatedType<T> {
    @Field(() => PageInfo, { nullable: true })
    pageInfo: PageInfo;

    @Field(() => [classRef], { nullable: true })
    docs: T[];
  }
  return PaginatedType as Type<IPaginatedType<T>>;
}
