import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Brand } from './brand.entity';
import { BrandService } from './brand.service';

@ApiTags('brand')
@Controller('/brand')
export class BrandController {
  constructor(private readonly brandService: BrandService) {}

  @Get()
  async getAllBrands(): Promise<Brand[]> {
    return this.brandService.findAll();
  }

  @Get(':id')
  async getOneBrand(id: Brand['id']): Promise<Brand> {
    return this.brandService.findOne(id);
  }

  @Post()
  async postBrand(@Body() request: Brand): Promise<Brand> {
    return this.brandService.create(request);
  }

  @Put()
  async putBrand(@Body() request: Brand): Promise<Brand> {
    return this.brandService.update(request);
  }

  @Delete(':id')
  async deleteOneBrand(id: Brand['id']): Promise<Brand> {
    return this.brandService.removeOne(id);
  }

  @Delete()
  async deleteAllBrands(): Promise<Brand[]> {
    return this.brandService.removeAll();
  }
}
