import { Field, ID, InputType, PartialType } from '@nestjs/graphql';
import { Types } from 'mongoose';
import { CreateAuthorInput } from './create-author.input';

@InputType()
export class UpdateAuthorInput extends PartialType(CreateAuthorInput) {
  @Field(() => ID!)
  _id: Types.ObjectId;
}
