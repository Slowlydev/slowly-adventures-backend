import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Membership } from './membership.entity';
import { MembershipService } from './membership.service';

@ApiTags('membership')
@Controller('/membership')
export class MembershipController {
  constructor(private readonly membershipService: MembershipService) {}

  @Get()
  async getAllMemberships(): Promise<Membership[]> {
    return this.membershipService.findAll();
  }

  @Get(':id')
  async getOneMembership(id: Membership['id']): Promise<Membership> {
    return this.membershipService.findOne(id);
  }

  @Post()
  async postMembership(@Body() request: Membership): Promise<Membership> {
    return this.membershipService.create(request);
  }

  @Put()
  async putMembership(@Body() request: Membership): Promise<Membership> {
    return this.membershipService.update(request);
  }

  @Delete(':id')
  async deleteOneMembership(id: Membership['id']): Promise<Membership> {
    return this.membershipService.removeOne(id);
  }

  @Delete()
  async deleteAllMemberships(): Promise<Membership[]> {
    return this.membershipService.removeAll();
  }
}
