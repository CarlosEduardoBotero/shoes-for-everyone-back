import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginPayloadDto } from '../users/dto/payloads/login.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/login')
  async login(@Body() payload: LoginPayloadDto) {
    return this.authService.login(payload);
  }
}
