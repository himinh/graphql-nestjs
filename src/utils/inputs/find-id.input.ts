import { IsNotEmpty, IsMongoId } from 'class-validator';
import { Field, ID, InputType } from '@nestjs/graphql';
import { Types } from 'mongoose';

@InputType()
export class FindIdInput {
  @Field(() => ID!)
  @IsNotEmpty()
  @IsMongoId()
  _id: Types.ObjectId;
}
