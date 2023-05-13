import { ApiProperty } from '@nestjs/swagger';

export class LoginResponseDto {
  @ApiProperty({
    example:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ1c3Jfc2pIcmZzRkVUTExVIiwiaWF0IjoxNjgzOTM3Nzk3LCJleHAiOjE2ODM5NzM3OTd9.ujh3EnB1YzHlBWF0exsb_yh4VFE4nMGMCV5aIWIHw8U',
  })
  access_token: string;
  // Improvement: add refresh token implementation
  refresh_token?: string;
}
