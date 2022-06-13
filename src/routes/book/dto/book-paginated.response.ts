import { ObjectType } from '@nestjs/graphql';
import { Paginated } from '~/utils/paginations/paginated-type';
import { Book } from '../schema/book.schema';

@ObjectType()
export class BooksPaginated extends Paginated(Book) {}
