import { MigrationInterface, QueryRunner } from 'typeorm';
import { brands } from './seed/brand.seed';

export class BrandSeed1644785423753 implements MigrationInterface {
  name = 'BrandSeed1644785423753';

  public async up(queryRunner: QueryRunner): Promise<void> {
    brands.map(async (product) => await queryRunner.query(`INSERT INTO brand (name) VALUES ('${product.name}')`));
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DELETE * FROM brand`);
  }
}
