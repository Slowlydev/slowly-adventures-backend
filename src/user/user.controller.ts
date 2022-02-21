import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { User } from './user.entity';
import { UserService } from './user.service';

@ApiTags('user')
@Controller('/user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async getAllUsers(): Promise<User[]> {
    return this.userService.findAll();
  }

  @Get(':id')
  async getOneUser(id: User['id']): Promise<User> {
    return this.userService.findOne(id);
  }

  @Post()
  async postUser(@Body() request: User): Promise<User> {
    return this.userService.create(request);
  }

  @Put()
  async putUser(@Body() request: User): Promise<User> {
    return this.userService.update(request);
  }

  @Delete(':id')
  async deleteOneUser(id: User['id']): Promise<User> {
    return this.userService.removeOne(id);
  }

  @Delete()
  async deleteAllUsers(): Promise<User[]> {
    return this.userService.removeAll();
  }
}
