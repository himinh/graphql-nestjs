import { Field, ID, InputType, PartialType } from '@nestjs/graphql';
import { Types } from 'mongoose';
import { CreateUserInput } from './create-user.input';

@InputType()
export class UpdateUserInput extends PartialType(CreateUserInput) {
  @Field(() => ID!)
  _id: Types.ObjectId;
}
