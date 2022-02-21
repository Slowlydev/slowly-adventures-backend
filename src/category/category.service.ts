import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Category } from './category.entity';

@Injectable()
export class CategoryService {
  constructor(@InjectRepository(Category) private readonly categoryRepository: Repository<Category>) {}

  async findAll(): Promise<Category[]> {
    return this.categoryRepository.find();
  }

  async findOne(id: Category['id']): Promise<Category> {
    const category = await this.categoryRepository.findOne(id);

    if (!category) {
      throw new BadRequestException();
    }

    return category;
  }

  async create(category: Category): Promise<Category> {
    return this.categoryRepository.save(category);
  }

  async update(category: Category): Promise<Category> {
    return this.categoryRepository.save(category);
  }

  async removeOne(id: Category['id']): Promise<Category> {
    const category = await this.categoryRepository.findOne(id);

    if (!category) {
      throw new BadRequestException();
    }

    await this.categoryRepository.delete(id);

    return category;
  }

  async removeAll(): Promise<Category[]> {
    const categories = await this.categoryRepository.find();
    const ids = categories.map((c) => c.id);

    if (!categories) {
      throw new BadRequestException();
    }

    await this.categoryRepository.delete(ids);

    return categories;
  }
}
