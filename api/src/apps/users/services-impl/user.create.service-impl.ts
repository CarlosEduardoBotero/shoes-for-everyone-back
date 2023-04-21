import { Injectable } from "@nestjs/common";
import { CreateUserDto } from "../dto/create-user.dto";
import { UsersRepository } from "../repositories/users.repository";


@Injectable()
export class CreateUserServiceImpl {
    constructor(
        private readonly usersRepository: UsersRepository
    ) {}

    execute(createUserDto: CreateUserDto) {
        return 'This action adds a new user';
    }
}
