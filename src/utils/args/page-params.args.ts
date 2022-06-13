import { ArgsType, Field } from '@nestjs/graphql';
import {
  defaultPageParamsInput,
  PageParamsInput,
} from '../inputs/page-params.input';

@ArgsType()
export class PageParamsArgs {
  @Field({ nullable: true, defaultValue: defaultPageParamsInput })
  pageParams: PageParamsInput;
}
