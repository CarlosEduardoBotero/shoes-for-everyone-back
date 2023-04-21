import { Injectable } from "@nestjs/common";
import { UsersRepository } from "../repositories/users.repository";
import { UpdateUserDto } from "../dto/update-user.dto";


@Injectable()
export class UpdateUserServiceImpl {
    constructor(
        private readonly usersRepository: UsersRepository
    ) {}

    execute(id: string, updateUserDto: UpdateUserDto) {
        return `This action updates a #${id} user`;
    }
}
