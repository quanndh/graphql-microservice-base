import { Injectable } from '@nestjs/common';
import { CommonService } from 'src/modules/common/common.service';
import { User } from 'src/modules/users/entities/user.entity';
import { UserRepository } from 'src/modules/users/repositories/user.repository';

@Injectable()
export class UserService extends CommonService<User> {
  constructor(private readonly userRepo: UserRepository) {
    super(userRepo);
  }
}
