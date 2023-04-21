import { Injectable } from "@nestjs/common";
import { UsersRepository } from "../repositories/users.repository";


@Injectable()
export class GetUserServiceImpl {
    constructor(
        private readonly usersRepository: UsersRepository
    ) {}

    execute(id: string) {
        return `This action returns a #${id} user`;
    }
}
