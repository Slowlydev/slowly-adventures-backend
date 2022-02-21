import { BadGatewayException, BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(@InjectRepository(User) private readonly userRepository: Repository<User>) {}

  async findAll(): Promise<User[]> {
    return this.userRepository.find({ relations: ['membership', 'orders', 'addresses'] });
  }

  async findOne(id: User['id']): Promise<User> {
    const user = await this.userRepository.findOne(id);

    if (!user) {
      throw new BadRequestException();
    }

    return user;
  }

  async create(user: User): Promise<User> {
    return this.userRepository.save(user);
  }

  async update(user: User): Promise<User> {
    return this.userRepository.save(user);
  }

  async removeOne(id: User['id']): Promise<User> {
    const user = await this.userRepository.findOne(id);

    if (!user) {
      throw new BadGatewayException();
    }

    await this.userRepository.delete(id);

    return user;
  }

  async removeAll(): Promise<User[]> {
    const users = await this.userRepository.find();
    const ids = users.map((u) => u.id);

    if (!users) {
      throw new BadGatewayException();
    }

    await this.userRepository.delete(ids);

    return users;
  }
}
