import { ArgsType, Field, InputType, PartialType } from '@nestjs/graphql';
import { PageParamsArgs } from '~/utils/args/page-params.args';
import { CreateBookInput } from './create-book.input';

@InputType()
export class BookFilterInput extends PartialType(CreateBookInput) {}

@ArgsType()
export class GetBookArgs extends PageParamsArgs {
  @Field({ nullable: true, defaultValue: {} })
  filter: BookFilterInput;
}
