import { Injectable } from "@nestjs/common";
import { CreateUserDto } from "../dto/create-user.dto";
import { UsersRepository } from "../repositories/users.repository";


@Injectable()
export class CreateUserServiceImpl {
    constructor(
        private readonly usersRepository: UsersRepository
    ) {}

    async execute(createUserDto: CreateUserDto) {
        return await 'This action adds a new user';
    }
}
