import { Injectable } from '@nestjs/common';
import { CreateUserDto } from '../dto/payloads/create-user.dto';
import { UsersRepository } from '../repositories/users.repository';
import { mapUserEntityToUserResponse } from '../mappers/user.mapper';

@Injectable()
export class CreateUserServiceImpl {
  constructor(private readonly usersRepository: UsersRepository) {}

  async execute(createUserDto: CreateUserDto) {
    // find by email
    const userToSave = this.usersRepository.create(createUserDto);
    return mapUserEntityToUserResponse(
      await this.usersRepository.save(userToSave),
    );
  }
}
