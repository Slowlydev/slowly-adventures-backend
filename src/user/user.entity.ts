import { ApiProperty } from '@nestjs/swagger';
import { Address } from 'src/address/address.entity';
import { Membership } from 'src/membership/membership.entity';
import { Product } from 'src/product/product.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('user')
export class User {
  @PrimaryGeneratedColumn({ name: 'id' })
  id: number;

  @ApiProperty()
  @Column({ nullable: false, name: 'username' })
  username: string;

  @ApiProperty()
  @Column({ nullable: false, name: 'password' })
  password: string;

  @ApiProperty()
  @Column({ nullable: false, name: 'firstname' })
  firstname: string;

  @ApiProperty()
  @Column({ nullable: false, name: 'lastname' })
  lastname: string;

  @ApiProperty()
  @Column({ nullable: true, name: 'email' })
  email: string;

  @ApiProperty()
  @Column({ nullable: true, name: 'age' })
  age: number;

  @ManyToOne(() => Membership, (membership) => membership.users)
  @JoinColumn({ name: 'membership_id' })
  membership: Membership;

  @ManyToMany(() => Product, (product) => product.users)
  @JoinTable({ name: 'users_products' })
  orders: Product[];

  @ManyToMany(() => Address, (address) => address.users)
  @JoinTable({ name: 'users_addresses' })
  addresses: Address[];

  @CreateDateColumn({ nullable: false, name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ nullable: true, name: 'updated_at' })
  updatedAt: Date;

  @DeleteDateColumn({ nullable: true, name: 'deleted_at' })
  deletedAt: Date;
}
