import { MigrationInterface, QueryRunner } from 'typeorm';
import { categories } from './seed/category.seed';

export class CategorySeed1644785423751 implements MigrationInterface {
  name = 'CategorySeed1644785423751';

  public async up(queryRunner: QueryRunner): Promise<void> {
    categories.map(
      async (category) => await queryRunner.query(`INSERT INTO category (name) VALUES ('${category.name}')`),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DELETE * FROM category`);
  }
}
