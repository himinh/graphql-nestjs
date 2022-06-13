import { Field, InputType, Int } from '@nestjs/graphql';

export const defaultPageParamsInput = {
  page: 1,
  limit: 10,
  sort: '-createdAt',
};

@InputType()
export class PageParamsInput {
  @Field(() => Int, { defaultValue: 1, nullable: true })
  page: number;

  @Field(() => Int, { defaultValue: 1, nullable: true })
  limit: number;

  @Field(() => String, { defaultValue: '-createdAt', nullable: true })
  sort: string;

  @Field(() => String, { defaultValue: '', nullable: true })
  populate: string;
}
