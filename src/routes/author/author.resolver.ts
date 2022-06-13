import {
  Resolver,
  Query,
  ResolveField,
  Parent,
  Args,
  Mutation,
} from '@nestjs/graphql';
import { Book } from '~/routes/book/schema/book.schema';
import { BookService } from '~/routes/book/book.service';
import { AuthorService } from './author.service';
import { AuthorFilterInput, GetAuthorArgs } from './dto/author-filter.input';
import { AuthorsPaginated } from './dto/author-paginated.response';
import { Author } from './schema/author.schema';
import { CreateAuthorInput } from './dto/create-author.input';
import { UpdateAuthorInput } from './dto/update-author.input';
import { FindIdInput } from '~/utils/inputs/find-id.input';

@Resolver(() => Author)
export class AuthorResolver {
  constructor(
    private authorService: AuthorService,
    private bookService: BookService,
  ) {}

  // ------------------------------
  // ---------- QUERIES -----------
  // ------------------------------
  @Query(() => AuthorsPaginated)
  async findAllAuthors(@Args() query: GetAuthorArgs) {
    return this.authorService.paginate(query.filter, query.pageParams);
  }

  @Query(() => Author)
  async findAuthorById(@Args('input') { _id }: FindIdInput) {
    return this.authorService.findById(_id);
  }

  @Query(() => Author)
  async findOneAuthor(@Args('input') filter: AuthorFilterInput) {
    return this.authorService.findOne(filter);
  }

  // ------------------------------
  // ---------- MUTATIONS ---------
  // ------------------------------
  @Mutation(() => Author)
  async createAuthor(@Args('input') author: CreateAuthorInput) {
    return this.authorService.create(author);
  }

  @Mutation(() => Author)
  async updateAuthor(@Args('input') { _id, ...author }: UpdateAuthorInput) {
    return this.authorService.findByIdAndUpdate(_id, author, { new: true });
  }

  @Mutation(() => Author)
  async deleteAuthor(@Args('filter') { _id }: FindIdInput) {
    const author = await this.authorService.findByIdAndDelete(_id);

    await this.bookService.deleteMany({ author: author._id });

    return author;
  }

  // ------------------------------
  // ------- RESOLVER FIELD  ------
  // ------------------------------
  @ResolveField(() => [Book])
  async books(@Parent() parent: Author) {
    console.log({ parent });
    return this.bookService.find({ author: parent._id });
  }
}
