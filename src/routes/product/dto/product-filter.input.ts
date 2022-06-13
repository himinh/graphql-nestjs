import { ArgsType, Field, InputType, PartialType } from '@nestjs/graphql';
import { PageParamsArgs } from '~/utils/args/page-params.args';
import { CreateProductInput } from './create-product.input';

@InputType()
export class ProductFilterInput extends PartialType(CreateProductInput) {}

@ArgsType()
export class GetProductArgs extends PageParamsArgs {
  @Field({ nullable: true, defaultValue: {} })
  filter: ProductFilterInput;
}
