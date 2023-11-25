import { BadRequestException, Injectable } from '@nestjs/common';

@Injectable()
export class HelpersService {
  checkIdPrefix(id: string, prefix: string) {
    if (!id.startsWith(prefix)) {
      throw new BadRequestException(`ID não começa com ${prefix}`);
    }
  }
}
