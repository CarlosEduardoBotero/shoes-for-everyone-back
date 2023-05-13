import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserResponse } from '../users/dto/responses/user.response.dto';
import { environment } from 'src/@shared/environment.config';
import { GetUserServiceImpl } from '../users/services-impl/user.get.service-impl';
import { JwtTokenDto } from './dto/payloads/jwt-token.dto';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly getUserServiceImpl: GetUserServiceImpl) {
    super({
      //decode token
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: environment.jwtConstants.secret,
    });
  }

  async validate(payload: JwtTokenDto): Promise<UserResponse> {
    const user = await this.getUserServiceImpl.execute(payload.sub);
    if (!user) {
      throw new UnauthorizedException('Não autorizado');
    }

    return user;
  }
}
