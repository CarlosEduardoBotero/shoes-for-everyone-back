import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginPayloadDto } from '../users/dto/payloads/login.dto';
import {
  ApiOkResponse,
  ApiOperation,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import { LoginResponseDto } from '../users/dto/responses/login.dto';

@ApiTags('v1')
@Controller({
  path: 'auth',
  version: '1',
})
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/login')
  @ApiOperation({ summary: 'Log-in um usuario registrado' })
  @ApiOkResponse({
    description: 'Usuario logado com sucesso',
    type: LoginResponseDto,
  })
  @ApiUnauthorizedResponse({ description: 'Não autorizado' })
  async login(@Body() payload: LoginPayloadDto): Promise<LoginResponseDto> {
    return this.authService.login(payload);
  }
}
