import { Injectable } from '@nestjs/common';
import { UsersRepository } from '../repositories/users.repository';
import { UserResponse } from '../dto/responses/user.response.dto';
import { mapUserEntityToUserResponse } from '../mappers/user.mapper';

@Injectable()
export class GetUserServiceImpl {
  constructor(private readonly usersRepository: UsersRepository) {}

  async execute(id): Promise<UserResponse | undefined> {
    const user = await this.usersRepository.findOneBy({ id });
    return mapUserEntityToUserResponse(user);
  }
}
