import { Injectable } from '@nestjs/common';
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';
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
    private readonly updateUserServiceImpl: UpdateUserServiceImpl
  ) {}

  create(createUserDto: CreateUserDto) {
    return this.createUserServiceImpl.execute(createUserDto);
  }

  findAll() {
    return this.getAllUserServiceImpl.execute();
  }

  findOne(id: string) {
    return this.getUserServiceImpl.execute(id);
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    return this.updateUserServiceImpl.execute(id, updateUserDto);
  }
}
