import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Category } from './category.entity';
import { CategoryService } from './category.service';

@ApiTags('category')
@Controller('/category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Get()
  async getAllCategories(): Promise<Category[]> {
    return this.categoryService.findAll();
  }

  @Get(':id')
  async getOneCategory(id: Category['id']): Promise<Category> {
    return this.categoryService.findOne(id);
  }

  @Post()
  async postCategory(@Body() request: Category): Promise<Category> {
    return this.categoryService.create(request);
  }

  @Put()
  async putCategory(@Body() request: Category): Promise<Category> {
    return this.categoryService.update(request);
  }

  @Delete(':id')
  async deleteOneCategory(id: Category['id']): Promise<Category> {
    return this.categoryService.removeOne(id);
  }

  @Delete()
  async deleteAllCategories(): Promise<Category[]> {
    return this.categoryService.removeAll();
  }
}
