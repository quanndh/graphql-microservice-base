import { Directive, HideField, ObjectType } from '@nestjs/graphql';
import { UUIDEntity } from 'src/modules/common/base-entity';
import { Column, Entity } from 'typeorm';

@ObjectType()
@Directive('@key(fields: "id")')
@Entity({
  name: 'users',
})
export class User extends UUIDEntity {
  @Column()
  name: string;

  @Column()
  @HideField()
  password: string;

  @Column()
  @HideField()
  passwordSalt: string;
}
