import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class LoginPayloadDto {
  @ApiProperty({
    example: 'lorem-ipsum@email.com',
  })
  @IsNotEmpty()
  readonly email: string;

  @ApiProperty({
    example: 'secret-password',
  })
  @IsNotEmpty()
  readonly password: string;
}
