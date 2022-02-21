import { BadGatewayException, BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Brand } from './brand.entity';

@Injectable()
export class BrandService {
  constructor(@InjectRepository(Brand) private readonly brandRepository: Repository<Brand>) {}

  async findAll(): Promise<Brand[]> {
    return this.brandRepository.find();
  }

  async findOne(id: Brand['id']): Promise<Brand> {
    const brand = await this.brandRepository.findOne(id);

    if (!brand) {
      throw new BadGatewayException();
    }

    return brand;
  }

  async create(brand: Brand): Promise<Brand> {
    return this.brandRepository.save(brand);
  }

  async update(brand: Brand): Promise<Brand> {
    return this.brandRepository.save(brand);
  }

  async removeOne(id: Brand['id']): Promise<Brand> {
    const brand = await this.brandRepository.findOne(id);

    if (!brand) {
      throw new BadRequestException();
    }

    await this.brandRepository.delete(id);

    return brand;
  }

  async removeAll(): Promise<Brand[]> {
    const brands = await this.brandRepository.find();
    const ids = brands.map((b) => b.id);

    if (!brands) {
      throw new BadRequestException();
    }

    await this.brandRepository.delete(ids);

    return brands;
  }
}
