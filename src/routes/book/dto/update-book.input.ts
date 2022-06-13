import { Field, ID, InputType, PartialType } from '@nestjs/graphql';
import { Types } from 'mongoose';
import { CreateBookInput } from './create-book.input';

@InputType()
export class UpdateBookInput extends PartialType(CreateBookInput) {
  @Field(() => ID!)
  _id: Types.ObjectId;
}
