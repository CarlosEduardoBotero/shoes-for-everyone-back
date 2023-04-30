export class LoginResponseDto {
  access_token: string;
  // Improvement: add refresh token implementation
  refresh_token?: string;
}
