import { MigrationInterface, QueryRunner } from 'typeorm';
import { addresses } from './seed/address.seed';

export class AddressSeed1644785423754 implements MigrationInterface {
  name = 'AddressSeed1644785423754';

  public async up(queryRunner: QueryRunner): Promise<void> {
    addresses.map(
      async (address) =>
        await queryRunner.query(
          `INSERT INTO address (street_name, street_number, postal_code, city, country) VALUES ('${address.streetName}', ${address.streetNumber}, ${address.postalCode}, '${address.city}', '${address.country}')`,
        ),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DELETE * FROM address`);
  }
}
