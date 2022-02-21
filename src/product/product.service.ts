import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './product.entity';

@Injectable()
export class ProductService {
  constructor(@InjectRepository(Product) private readonly productRepository: Repository<Product>) {}

  async findAll(): Promise<Product[]> {
    return this.productRepository.find({ relations: ['brand', 'categories'] });
  }

  async findOne(id: Product['id']): Promise<Product> {
    const product = await this.productRepository.findOne(id, { relations: ['brand', 'category'] });

    if (!product) {
      throw new BadRequestException();
    }

    return product;
  }

  async create(product: Product): Promise<Product> {
    return this.productRepository.save(product);
  }

  async update(product: Product): Promise<Product> {
    return this.productRepository.save(product);
  }

  async removeOne(id: Product['id']): Promise<Product> {
    const product = this.productRepository.findOne(id);

    if (!product) {
      throw new BadRequestException();
    }

    await this.productRepository.delete(id);

    return product;
  }

  async removeAll(): Promise<Product[]> {
    const products = await this.productRepository.find();
    const ids = products.map((p) => p.id);

    if (!products) {
      throw new BadRequestException();
    }

    await this.productRepository.delete(ids);

    return products;
  }
}
