import { ObjectType } from '@nestjs/graphql';
import { Author } from '../schema/author.schema';
import { Paginated } from '~/utils/paginations/paginated-type';

@ObjectType()
export class AuthorsPaginated extends Paginated(Author) {}
