import { IsEmail, IsNotEmpty } from 'class-validator';

export class UserResponse {
  @IsNotEmpty() id: string;
  @IsNotEmpty() @IsEmail() email: string;
}
