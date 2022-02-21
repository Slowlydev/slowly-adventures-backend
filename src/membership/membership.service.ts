import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Membership } from './membership.entity';

@Injectable()
export class MembershipService {
  constructor(@InjectRepository(Membership) private readonly membershipRepository: Repository<Membership>) {}

  async findAll(): Promise<Membership[]> {
    return this.membershipRepository.find();
  }

  async findOne(id: Membership['id']): Promise<Membership> {
    const membership = await this.membershipRepository.findOne(id);

    if (!membership) {
      throw new BadRequestException();
    }

    return membership;
  }

  async create(membership: Membership): Promise<Membership> {
    return this.membershipRepository.save(membership);
  }

  async update(membership: Membership): Promise<Membership> {
    return this.membershipRepository.save(membership);
  }

  async removeOne(id: Membership['id']): Promise<Membership> {
    const membership = await this.membershipRepository.findOne(id);

    if (!membership) {
      throw new BadRequestException();
    }

    await this.membershipRepository.delete(id);

    return membership;
  }

  async removeAll(): Promise<Membership[]> {
    const memberships = await this.membershipRepository.find();
    const ids = memberships.map((m) => m.id);

    if (!memberships) {
      throw new BadRequestException();
    }

    await this.membershipRepository.delete(ids);

    return memberships;
  }
}
