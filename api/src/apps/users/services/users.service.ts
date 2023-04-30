import { Injectable } from '@nestjs/common';
import { CreateUserDto } from '../dto/payloads/create-user.dto';
import { UpdateUserDto } from '../dto/payloads/update-user.dto';
import { CreateUserServiceImpl } from '../services-impl/user.create.service-impl';
import { GetAllUserServiceImpl } from '../services-impl/user.get-all.service-impl';
import { GetUserServiceImpl } from '../services-impl/user.get.service-impl';
import { UpdateUserServiceImpl } from '../services-impl/user.update.service-impl';

@Injectable()
export class UsersService {
  constructor(
    private readonly createUserServiceImpl: CreateUserServiceImpl,
    private readonly getAllUserServiceImpl: GetAllUserServiceImpl,
    private readonly getUserServiceImpl: GetUserServiceImpl,
    private readonly updateUserServiceImpl: UpdateUserServiceImpl,
  ) {}

  async create(createUserDto: CreateUserDto) {
    return await this.createUserServiceImpl.execute(createUserDto);
  }

  async findAll() {
    return await this.getAllUserServiceImpl.execute();
  }

  async findOne(id: string) {
    return await this.getUserServiceImpl.execute(id);
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    return await this.updateUserServiceImpl.execute(id, updateUserDto);
  }
}
