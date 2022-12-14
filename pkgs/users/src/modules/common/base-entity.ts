import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Node } from 'src/graphql/types/common.interface.entity';
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@ObjectType({ isAbstract: true, implements: [Node] })
export class UUIDEntity extends BaseEntity implements Node {
  @Field(() => ID)
  @Column('bigint', {
    primary: true,
    unsigned: true,
  })
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field()
  @CreateDateColumn()
  createdAt: Date;

  @Field()
  @UpdateDateColumn()
  updatedAt: Date;
}
