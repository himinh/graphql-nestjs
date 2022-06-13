import { ObjectType } from '@nestjs/graphql';
import { Product } from '../schema/product.schema';
import { Paginated } from '~/utils/paginations/paginated-type';

@ObjectType()
export class ProductsPaginated extends Paginated(Product) {}
