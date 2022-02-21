import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Address } from './address.entity';

@Injectable()
export class AddressService {
  constructor(@InjectRepository(Address) private readonly addressRepository: Repository<Address>) {}

  async findAll(): Promise<Address[]> {
    return this.addressRepository.find();
  }

  async findOne(id: Address['id']): Promise<Address> {
    const address = await this.addressRepository.findOne(id);

    if (!address) {
      throw new BadRequestException();
    }

    return address;
  }

  async create(address: Address): Promise<Address> {
    return this.addressRepository.save(address);
  }

  async update(address: Address): Promise<Address> {
    return this.addressRepository.save(address);
  }

  async removeOne(id: Address['id']): Promise<Address> {
    const address = await this.addressRepository.findOne(id);

    if (!address) {
      throw new BadRequestException();
    }

    await this.addressRepository.delete(id);

    return address;
  }

  async removeAll(): Promise<Address[]> {
    const addresses = await this.addressRepository.find();
    const ids = addresses.map((a) => a.id);

    if (!addresses) {
      throw new BadRequestException();
    }

    await this.addressRepository.delete(ids);

    return addresses;
  }
}
