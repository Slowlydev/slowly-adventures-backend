import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { getConnectionOptions } from 'typeorm';
import { AddressModule } from './address/address.module';
import { BrandModule } from './brand/brand.module';
import { CategoryModule } from './category/category.module';
import { MembershipModule } from './membership/membership.module';
import { ProductModule } from './product/product.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: async () =>
        Object.assign(await getConnectionOptions(), {
          autoLoadEntities: true,
        }),
    }),
    UserModule,
    BrandModule,
    AddressModule,
    ProductModule,
    CategoryModule,
    MembershipModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
