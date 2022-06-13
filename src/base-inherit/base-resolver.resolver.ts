import { Type } from '@nestjs/common';
import { Query, Resolver } from '@nestjs/graphql';

export function BaseResolver<T extends Type<unknown>>(classRef: T): any {
  @Resolver({ isAbstract: true })
  abstract class BaseResolverHost {
    @Query(() => [classRef], { name: `findAll${classRef.name}` })
    async findAll(): Promise<T[]> {
      return [];
    }

    @Query(() => classRef, { name: `findBy${classRef.name}id` })
    async findById(): Promise<T> {
      return null;
    }

    @Query(() => classRef, { name: `findOne${classRef.name}` })
    async findOne(): Promise<T> {
      return null;
    }
  }
  return BaseResolverHost;
}
