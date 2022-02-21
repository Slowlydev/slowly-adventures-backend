import { ApiProperty } from '@nestjs/swagger';
import { Product } from 'src/product/product.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('category')
export class Category {
  @PrimaryGeneratedColumn({ name: 'id' })
  id: number;

  @ApiProperty()
  @Column({ name: 'name', nullable: false })
  name: string;

  @ManyToMany(() => Product, (product) => product.categories)
  @JoinTable({ name: 'categories_products' })
  products: Product[];

  @CreateDateColumn({ nullable: false, name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ nullable: true, name: 'updated_at' })
  updatedAt: Date;

  @DeleteDateColumn({ nullable: true, name: 'deleted_at' })
  deletedAt: Date;
}
