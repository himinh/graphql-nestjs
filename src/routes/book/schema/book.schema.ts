import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Types } from 'mongoose';
import { Author } from '~/routes/author/schema/author.schema';

@ObjectType()
@Schema({ timestamps: true })
export class Book {
  @Field(() => ID)
  _id: string;

  @Field(() => String)
  @Prop({ required: true, type: String, trim: true })
  title: string;

  @Field(() => String)
  @Prop({ required: true, type: String, trim: true })
  isbn: string;

  @Field(() => Author)
  @Prop({ required: true, type: Types.ObjectId, ref: 'Author' })
  author: Types.ObjectId;
}

export type BookDocument = Book & Document;

export const BookSchema = SchemaFactory.createForClass(Book);
