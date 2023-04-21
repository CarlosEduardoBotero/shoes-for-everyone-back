import { Injectable } from "@nestjs/common";
import { UsersRepository } from "../repositories/users.repository";


@Injectable()
export class GetAllUserServiceImpl {
    constructor(
        private readonly usersRepository: UsersRepository
    ) {}

    async execute() {
        return await 'This action returns all users';
    }
}
