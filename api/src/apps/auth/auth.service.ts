import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { LoginPayloadDto } from './dto/payloads/login.dto';
import { LoginResponseDto } from './dto/responses/login.dto';
import { mapDataToEncode } from './mappers/data-encode.mapper';
import { UserResponse } from '../users/dto/responses/user.response.dto';
import { UsersRepository } from '../users/repositories/users.repository';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersRepository: UsersRepository,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(payload: LoginPayloadDto): Promise<UserResponse | undefined> {
    let result = undefined;
    const email = payload.email;
    const user = await this.usersRepository.findOneBy({ email });

    if (user && user.password === payload.password) {
      result = user;
    }
    return result;
  }

  async login(payload: LoginPayloadDto): Promise<LoginResponseDto> {
    const user = await this.validateUser(payload);
    if (!user) {
      throw new UnauthorizedException('Não autorizado');
    }
    const dataToEncode = mapDataToEncode(user);

    return {
      access_token: this.jwtService.sign(dataToEncode),
    };
  }
}
