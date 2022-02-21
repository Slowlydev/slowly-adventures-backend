import { MigrationInterface, QueryRunner } from 'typeorm';
import { products } from './seed/product.seed';

export class ProductSeed1644785423753 implements MigrationInterface {
  name = 'ProductSeed1644785423753';

  public async up(queryRunner: QueryRunner): Promise<void> {
    products.map(
      async (product) =>
        await queryRunner.query(
          `INSERT INTO product (name, price, brand_id, description) VALUES ('${product.name}', ${product.price}, ${product.brandId}, '${product.description}')`,
        ),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DELETE * FROM product`);
  }
}
