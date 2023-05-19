import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserEntity } from '../entities/user.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UsersRepository extends Repository<UserEntity> {
  constructor(
    @InjectRepository(UserEntity)
    private usersRepository: Repository<UserEntity>,
  ) {
    super(
      usersRepository.target,
      usersRepository.manager,
      usersRepository.queryRunner,
    );
  }

  async findByEmail(email: string): Promise<UserEntity> {
    try {
      return await this.usersRepository.findOneBy({ email });
    } catch (EntityNotFoundError) {
      throw new UnauthorizedException('Não autorizado');
    }
  }
}
