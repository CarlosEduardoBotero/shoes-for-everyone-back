import { Injectable } from '@nestjs/common';
import { CreateUserDto } from '../dto/payloads/create-user.dto';
import { UpdateUserDto } from '../dto/payloads/update-user.dto';
import { CreateUserServiceImpl } from '../services-impl/user.create.service-impl';
import { GetAllUserServiceImpl } from '../services-impl/user.get-all.service-impl';
import { GetUserServiceImpl } from '../services-impl/user.get.service-impl';
import { UpdateUserServiceImpl } from '../services-impl/user.update.service-impl';
import { ValidateLoginServiceImpl } from '../services-impl/user.validate-login.service-impl';
import { LoginPayloadDto } from '../dto/payloads/login.dto';
import { UserResponse } from '../dto/responses/user.response.dto';

@Injectable()
export class UsersService {
  constructor(
    private readonly createUserServiceImpl: CreateUserServiceImpl,
    private readonly getAllUserServiceImpl: GetAllUserServiceImpl,
    private readonly getUserServiceImpl: GetUserServiceImpl,
    private readonly updateUserServiceImpl: UpdateUserServiceImpl,
    private readonly validateLoginServiceImpl: ValidateLoginServiceImpl,
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

  async findByLogin(
    payload: LoginPayloadDto,
  ): Promise<UserResponse | undefined> {
    return await this.validateLoginServiceImpl.execute(payload);
  }
}
