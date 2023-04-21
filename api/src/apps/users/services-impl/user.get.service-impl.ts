import { Injectable } from '@nestjs/common';
import { UsersRepository } from '../repositories/users.repository';

@Injectable()
export class GetUserServiceImpl {
  constructor(private readonly usersRepository: UsersRepository) {}

  async execute(id: string) {
    return await `This action returns a #${id} user`;
  }
}
