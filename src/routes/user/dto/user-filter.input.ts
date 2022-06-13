import { ArgsType, Field, InputType, PartialType } from '@nestjs/graphql';
import { PageParamsArgs } from '~/utils/args/page-params.args';
import { CreateUserInput } from './create-user.input';

@InputType()
export class UserFilterInput extends PartialType(CreateUserInput) {}

@ArgsType()
export class GetUserArgs extends PageParamsArgs {
  @Field({ nullable: true, defaultValue: {} })
  filter: UserFilterInput;
}
