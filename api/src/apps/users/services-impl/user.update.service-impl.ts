import { Injectable } from '@nestjs/common';
import { UsersRepository } from '../repositories/users.repository';
import { UpdateUserDto } from '../dto/payloads/update-user.dto';

@Injectable()
export class UpdateUserServiceImpl {
  constructor(private readonly usersRepository: UsersRepository) {}

  async execute(id: string, updateUserDto: UpdateUserDto) {
    return await `This action updates a #${id} user`;
  }
}
