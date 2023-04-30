import { UserResponse } from 'src/apps/users/dto/responses/user.response.dto';
import { DataToEncodeDto } from '../dto/responses/data-encode.dto';

export function mapDataToEncode(user: UserResponse): DataToEncodeDto {
  return {
    id: user.id,
  };
}
