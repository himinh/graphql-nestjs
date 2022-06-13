import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { FindIdInput } from '~/utils/inputs/find-id.input';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { GetUserArgs, UserFilterInput } from './dto/user-filter.input';
import { UsersPaginated } from './dto/user-paginated.response';
import { User } from './schema/user.schema';
import { UserService } from './user.service';

@Resolver()
export class UserResolver {
  constructor(private userService: UserService) {}

  // ------------------------------
  // ---------- QUERIES -----------
  // ------------------------------
  @Query(() => UsersPaginated)
  async findAllUsers(@Args() query: GetUserArgs) {
    return this.userService.paginate(query.filter, query.pageParams);
  }

  @Query(() => User)
  async findUserById(@Args('input') { _id }: FindIdInput) {
    return this.userService.findById(_id);
  }

  @Query(() => User)
  async findOneUser(@Args('input') filter: UserFilterInput) {
    return this.userService.findOne(filter);
  }

  // ------------------------------
  // ---------- MUTATIONS ---------
  // ------------------------------
  @Mutation(() => User)
  async createUser(@Args('input') user: CreateUserInput) {
    return this.userService.create(user);
  }

  @Mutation(() => User)
  async updateUser(@Args('input') { _id, ...user }: UpdateUserInput) {
    return this.userService.findByIdAndUpdate(_id, user, { new: true });
  }

  @Mutation(() => User)
  async deleteUser(@Args('filter') { _id }: FindIdInput) {
    return this.userService.findByIdAndDelete(_id);
  }

  // ------------------------------
  // ------- RESOLVER FIELD  ------
  // ------------------------------
}
