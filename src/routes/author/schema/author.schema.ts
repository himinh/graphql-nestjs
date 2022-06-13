import { Field, ID, Int, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Types } from 'mongoose';
import { Book } from 'src/routes/book/schema/book.schema';

export type AuthorDocument = Author & mongoose.Document;

@Schema({ timestamps: true })
@ObjectType()
export class Author {
  @Field(() => ID)
  _id: string;

  @Prop({ required: true })
  @Field()
  name: string;

  @Prop({ type: Number })
  @Field(() => Int)
  age: number;

  @Prop({ type: { type: mongoose.SchemaTypes.ObjectId, ref: 'Book' } })
  @Field(() => [Book])
  books: string[];
}

export const AuthorSchema = SchemaFactory.createForClass(Author);
