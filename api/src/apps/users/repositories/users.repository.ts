import { Injectable } from '@nestjs/common';
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
}
