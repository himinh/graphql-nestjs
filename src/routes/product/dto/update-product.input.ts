import { Field, ID, InputType, PartialType } from '@nestjs/graphql';
import { Types } from 'mongoose';
import { CreateProductInput } from './create-product.input';

@InputType()
export class UpdateProductInput extends PartialType(CreateProductInput) {
  @Field(() => ID!)
  _id: Types.ObjectId;
}
