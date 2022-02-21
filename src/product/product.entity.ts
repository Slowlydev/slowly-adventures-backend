import { ApiProperty } from '@nestjs/swagger';
import { Brand } from 'src/brand/brand.entity';
import { Category } from 'src/category/category.entity';
import { User } from 'src/user/user.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('product')
export class Product {
  @PrimaryGeneratedColumn({ name: 'id' })
  id: number;

  @ApiProperty()
  @Column({ name: 'name', nullable: false })
  name: string;

  @ApiProperty()
  @Column({ name: 'price' })
  price: number;

  @ManyToOne(() => Brand, (brand) => brand.products)
  @JoinColumn({ name: 'brand_id' })
  brand: string;

  @ApiProperty()
  @Column({ name: 'description', nullable: false })
  description: string;

  @ManyToMany(() => Category, (category) => category.products)
  categories: Category[];

  @ManyToMany(() => User, (user) => user.orders)
  users: User[];

  @CreateDateColumn({ nullable: false, name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ nullable: true, name: 'updated_at' })
  updatedAt: Date;

  @DeleteDateColumn({ nullable: true, name: 'deleted_at' })
  deletedAt: Date;
}
