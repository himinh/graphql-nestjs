import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { PaginateModel } from 'mongoose';
import { User, UserDocument } from './schema/user.schema';
import { CookieOptions } from 'express';
import { BaseRepositoryService } from '~/base-inherit/base-repository.service';

const cookieOptions: CookieOptions = {
  // domain: 'localhost', // <== Change to your client domain
  secure: false, // <== Should be true if !development
  sameSite: 'strict',
  httpOnly: true,
  // path: '/',
};

@Injectable()
export class UserService extends BaseRepositoryService<UserDocument> {
  constructor(@InjectModel(User.name) model: PaginateModel<UserDocument>) {
    super(model);
  }

  async login() {}

  async register() {}
}
