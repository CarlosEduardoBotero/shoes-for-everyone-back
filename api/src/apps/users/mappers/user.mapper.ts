import { UserResponse } from '../dto/responses/user.response.dto';
import { UserEntity } from '../entities/user.entity';

export function mapUserEntityToUserResponse(user: UserEntity): UserResponse {
  return {
    id: user.id,
    email: user.email,
  };
}
