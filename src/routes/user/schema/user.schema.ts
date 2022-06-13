import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as argon2 from 'argon2';
import { CallbackWithoutResultAndOptionalError, Document } from 'mongoose';

@Schema()
@ObjectType()
export class User {
  @Field(() => ID)
  _id: string;

  @Prop({ required: true, unique: true })
  @Field(() => String)
  email: string;

  @Prop({ required: true })
  @Field(() => String)
  name: string;

  @Prop({ required: true })
  password: string;

  @Prop({ required: true })
  confirmToken: string;

  @Prop({ required: true, default: false })
  active: boolean;

  comparePassword: (candidatePassword: string) => boolean;
}

export type UserDocument = User & Document;

export const UserSchema = SchemaFactory.createForClass(User);

UserSchema.index({ email: 1 });

UserSchema.pre(
  'save',
  async function (next: CallbackWithoutResultAndOptionalError) {
    let user = this as UserDocument;

    // Only hash the password if it has been modified (or is new)
    if (!user.isModified('password')) {
      return next();
    }

    // Hash password
    user.password = await argon2.hash(user.password);

    return next();
  },
);

UserSchema.methods.comparePassword = async function (
  candidatePassword: string,
) {
  const user = this as UserDocument;

  return argon2.verify(user.password, candidatePassword).catch(() => false);
};

@InputType()
export class ConfirmUserInput {
  @Field(() => String)
  email: string;

  @Field(() => String)
  confirmToken: string;
}

@InputType()
export class LoginInput {
  @Field(() => String)
  email: string;

  @Field(() => String)
  password: string;
}
