import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Address } from './address.entity';
import { AddressService } from './address.service';

@ApiTags('address')
@Controller('/address')
export class AddressController {
  constructor(private readonly addressService: AddressService) {}

  @Get()
  async getAllAddresses(): Promise<Address[]> {
    return this.addressService.findAll();
  }

  @Get(':id')
  async getOneAddress(id: Address['id']): Promise<Address> {
    return this.addressService.findOne(id);
  }

  @Post()
  async postAddress(@Body() request: Address): Promise<Address> {
    return this.addressService.create(request);
  }

  @Put()
  async putAddress(@Body() request: Address): Promise<Address> {
    return this.addressService.update(request);
  }

  @Delete(':id')
  async deleteOneAddress(id: Address['id']): Promise<Address> {
    return this.addressService.removeOne(id);
  }

  @Delete()
  async deleteAllAddresses(): Promise<Address[]> {
    return this.addressService.removeAll();
  }
}
