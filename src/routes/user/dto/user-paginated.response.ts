import { ObjectType } from '@nestjs/graphql';
import { Paginated } from '~/utils/paginations/paginated-type';
import { User } from '../schema/user.schema';

@ObjectType()
export class UsersPaginated extends Paginated(User) {}
