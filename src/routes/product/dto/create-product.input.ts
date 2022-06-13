import { InputType, Field, Float } from '@nestjs/graphql';

@InputType()
export class CreateProductInput {
  @Field(() => String!)
  title: string;

  @Field(() => Float!)
  price: number;
}
