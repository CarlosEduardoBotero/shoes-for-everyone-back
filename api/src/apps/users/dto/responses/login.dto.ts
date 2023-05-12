import { ApiProperty } from '@nestjs/swagger';

export class LoginResponseDto {
  @ApiProperty()
  access_token: string;
  // Improvement: add refresh token implementation
  refresh_token?: string;
}
