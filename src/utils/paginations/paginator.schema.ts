import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Pagination {
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
