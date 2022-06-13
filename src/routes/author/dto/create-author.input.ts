import { InputType, Field, Int } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';

@InputType()
export class CreateAuthorInput {
  @IsNotEmpty()
  @Field(() => String!)
  name: string;

  @IsNotEmpty()
  @Field(() => Int!)
  age: string;
}
