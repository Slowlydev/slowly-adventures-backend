import { ApiProperty } from '@nestjs/swagger';
import { User } from 'src/user/user.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  ManyToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('address')
export class Address {
  @PrimaryGeneratedColumn({ name: 'id' })
  id: number;

  @ApiProperty()
  @Column({ name: 'street_name', nullable: false })
  streetName: string;

  @ApiProperty()
  @Column({ name: 'street_number', nullable: false })
  streetNumber: number;

  @ApiProperty()
  @Column({ name: 'postal_code', nullable: false })
  postalCode: number;

  @ApiProperty()
  @Column({ name: 'city', nullable: false })
  city: string;

  @ApiProperty()
  @Column({ name: 'country', nullable: false })
  country: string;

  @ManyToMany(() => User, (user) => user.addresses)
  users: User[];

  @CreateDateColumn({ nullable: false, name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ nullable: true, name: 'updated_at' })
  updatedAt: Date;

  @DeleteDateColumn({ nullable: true, name: 'deleted_at' })
  deletedAt: Date;
}
