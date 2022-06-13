import { ArgsType, Field, InputType, PartialType } from '@nestjs/graphql';
import { PageParamsArgs } from '~/utils/args/page-params.args';
import { CreateAuthorInput } from './create-author.input';

@InputType()
export class AuthorFilterInput extends PartialType(CreateAuthorInput) {}

@ArgsType()
export class GetAuthorArgs extends PageParamsArgs {
  @Field({ nullable: true, defaultValue: {} })
  filter: AuthorFilterInput;
}
