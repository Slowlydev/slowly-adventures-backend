import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Product } from './product.entity';
import { ProductService } from './product.service';

@ApiTags('product')
@Controller('/product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  async getAllProducts(): Promise<Product[]> {
    return this.productService.findAll();
  }

  @Get(':id')
  async getOneProduct(id: Product['id']): Promise<Product> {
    return this.productService.findOne(id);
  }

  @Post()
  async postProduct(@Body() request: Product): Promise<Product> {
    return this.productService.create(request);
  }

  @Put()
  async putProduct(@Body() request: Product): Promise<Product> {
    return this.productService.update(request);
  }

  @Delete(':id')
  async deleteOneProduct(id: Product['id']): Promise<Product> {
    return this.productService.removeOne(id);
  }

  @Delete()
  async deleteAllProducts(): Promise<Product[]> {
    return this.productService.removeAll();
  }
}
