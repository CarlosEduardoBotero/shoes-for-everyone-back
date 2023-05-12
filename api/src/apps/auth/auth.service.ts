import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { mapDataToEncode } from './mappers/data-encode.mapper';
import { LoginPayloadDto } from '../users/dto/payloads/login.dto';
import { LoginResponseDto } from '../users/dto/responses/login.dto';
import { ValidateLoginServiceImpl } from '../users/services-impl/user.validate-login.service-impl';

@Injectable()
export class AuthService {
  constructor(
    private readonly validateLoginServiceImpl: ValidateLoginServiceImpl,
    private readonly jwtService: JwtService,
  ) {}

  async login(payload: LoginPayloadDto): Promise<LoginResponseDto> {
    const user = await this.validateLoginServiceImpl.execute(payload);
    if (!user) {
      throw new UnauthorizedException('Não autorizado');
    }
    const dataToEncode = mapDataToEncode(user);

    return {
      access_token: this.jwtService.sign(dataToEncode),
    };
  }
}
