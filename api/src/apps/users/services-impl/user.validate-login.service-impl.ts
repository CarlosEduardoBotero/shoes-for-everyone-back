import { Injectable } from '@nestjs/common';
import { UsersRepository } from '../repositories/users.repository';
import { LoginPayloadDto } from '../dto/payloads/login.dto';
import { UserResponse } from '../dto/responses/user.response.dto';

@Injectable()
export class ValidateLoginServiceImpl {
  constructor(private readonly usersRepository: UsersRepository) {}

  async execute(payload: LoginPayloadDto): Promise<UserResponse | undefined> {
    let result = undefined;
    const email = payload.email;
    const user = await this.usersRepository.findOneBy({ email });

    if (user && user.password === payload.password) {
      result = user;
    }
    return result;
  }
}
