import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Membership } from './membership.entity';
import { MembershipController } from './membership.controller';
import { MembershipService } from './membership.service';

@Module({
  imports: [TypeOrmModule.forFeature([Membership])],
  providers: [MembershipService],
  controllers: [MembershipController],
})
export class MembershipModule {}
