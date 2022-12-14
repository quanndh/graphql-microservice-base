import { Query, Resolver } from '@nestjs/graphql';
import { User } from 'src/modules/users/entities/user.entity';
import { UserService } from 'src/modules/users/services/user.service';

@Resolver()
export class UserQueryResolver {
  constructor(private readonly userService: UserService) {}

  @Query(() => User)
  test() {
    return this.userService.findOne({});
  }
}
