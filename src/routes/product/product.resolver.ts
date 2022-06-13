import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { FindIdInput } from '~/utils/inputs/find-id.input';
import { CreateProductInput } from './dto/create-product.input';
import { GetProductArgs, ProductFilterInput } from './dto/product-filter.input';
import { ProductsPaginated } from './dto/product-paginated.response';
import { UpdateProductInput } from './dto/update-product.input';

import { ProductService } from './product.service';
import { Product } from './schema/product.schema';

@Resolver()
export class ProductResolver {
  constructor(private productService: ProductService) {}

  // ------------------------------
  // ---------- QUERIES -----------
  // ------------------------------
  @Query(() => ProductsPaginated)
  async findAllProducts(@Args() query: GetProductArgs) {
    return this.productService.paginate(query.filter, query.pageParams);
  }

  @Query(() => Product)
  async findProductById(@Args('input') { _id }: FindIdInput) {
    return this.productService.findById(_id);
  }

  @Query(() => Product)
  async findOneProduct(@Args('input') filter: ProductFilterInput) {
    return this.productService.findOne(filter);
  }

  // ------------------------------
  // ---------- MUTATIONS ---------
  // ------------------------------
  @Mutation(() => Product)
  async createProduct(@Args('input') product: CreateProductInput) {
    return this.productService.create(product);
  }

  @Mutation(() => Product)
  async updateProduct(@Args('input') { _id, ...product }: UpdateProductInput) {
    return this.productService.findByIdAndUpdate(_id, product, { new: true });
  }

  @Mutation(() => Product)
  async deleteProduct(@Args('filter') { _id }: FindIdInput) {
    const product = await this.productService.findByIdAndDelete(_id);

    return product;
  }

  // ------------------------------
  // ------- RESOLVER FIELD  ------
  // ------------------------------
}
