import { Field, Float, ID, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Types } from 'mongoose';

@Schema({ timestamps: true })
@ObjectType()
export class Product {
  @Field(() => ID)
  _id: Types.ObjectId;

  @Prop({ type: String, required: true, trim: true })
  @Field(() => String)
  title: string;

  @Prop({ type: Number, required: true })
  @Field(() => Float)
  price: number;
}

export type ProductDocument = Product & Document;

export const ProductSchema = SchemaFactory.createForClass(Product);
