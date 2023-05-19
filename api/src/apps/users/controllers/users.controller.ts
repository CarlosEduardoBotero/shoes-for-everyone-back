import { Controller, Get, Post, Body, Patch, Param } from '@nestjs/common';
import { UsersService } from '../services/users.service';
import { CreateUserDto } from '../dto/payloads/create-user.dto';
import { UpdateUserDto } from '../dto/payloads/update-user.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { UserResponse } from '../dto/responses/user.response.dto';
import { Public } from 'src/apps/auth/decorators/public.decorator';

@ApiTags('users')
@Controller({
  path: 'users',
  version: '1',
})
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Public()
  @Post()
  async create(@Body() createUserDto: CreateUserDto): Promise<UserResponse> {
    return await this.usersService.create(createUserDto);
  }

  @ApiBearerAuth('access-token')
  @Get()
  async findAll() {
    return await this.usersService.findAll();
  }

  @ApiBearerAuth('access-token')
  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.usersService.findOne(id);
  }

  @ApiBearerAuth('access-token')
  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return await this.usersService.update(id, updateUserDto);
  }
}
