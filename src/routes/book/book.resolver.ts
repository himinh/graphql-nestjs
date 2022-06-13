import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { Author } from '~/routes/author/schema/author.schema';
import { AuthorService } from '~/routes/author/author.service';
import { Book } from './schema/book.schema';
import { BookService } from './book.service';
import { BookFilterInput, GetBookArgs } from './dto/book-filter.input';
import { CreateBookInput } from './dto/create-book.input';
import { UpdateBookInput } from './dto/update-book.input';
import { BooksPaginated } from './dto/book-paginated.response';
import { FindIdInput } from '~/utils/inputs/find-id.input';

@Resolver(() => Book)
export class BookResolver {
  constructor(
    private bookService: BookService,
    private authorService: AuthorService,
  ) {}

  // ------------------------------
  // ---------- QUERIES -----------
  // ------------------------------
  @Query(() => BooksPaginated)
  async findAllBooks(@Args() query: GetBookArgs) {
    return this.bookService.paginate(query.filter, query.pageParams);
  }

  @Query(() => Book)
  async findBookById(@Args('input') { _id }: FindIdInput) {
    return this.bookService.findById(_id);
  }

  @Query(() => Book)
  async findOneBook(@Args('input') filter: BookFilterInput) {
    return this.bookService.findOne(filter);
  }

  // ------------------------------
  // ---------- MUTATIONS ---------
  // ------------------------------
  @Mutation(() => Book)
  async createBook(@Args('input') book: CreateBookInput) {
    return this.bookService.create(book);
  }

  @Mutation(() => Book)
  async updateBook(@Args('input') { _id, ...book }: UpdateBookInput) {
    return this.bookService.findByIdAndUpdate(_id, book, { new: true });
  }

  @Mutation(() => Book)
  async deleteBook(@Args('filter') { _id }: FindIdInput) {
    return this.bookService.findByIdAndDelete(_id);
  }

  // ------------------------------
  // ------- RESOLVER FIELD  ------
  // ------------------------------
  @ResolveField(() => Author)
  async author(@Parent() book: Book) {
    return this.authorService.findById(book.author);
  }
}
