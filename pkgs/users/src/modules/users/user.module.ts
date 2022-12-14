import { Module } from '@nestjs/common';
import { UserQueryResolver } from 'src/modules/users/resolvers/user.query';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/modules/users/entities/user.entity';
import { UserRepository } from 'src/modules/users/repositories/user.repository';
import { UserService } from 'src/modules/users/services/user.service';

@Module({
  imports: [TypeOrmModule.forFeature([User, UserRepository])],
  providers: [UserQueryResolver, UserService],
})
export class UserModule {}
