import { MigrationInterface, QueryRunner } from 'typeorm';
import { memberships } from './seed/membership.seed';

export class MembershipSeed1644785423750 implements MigrationInterface {
  name = 'MembershipSeed1644785423750';

  public async up(queryRunner: QueryRunner): Promise<void> {
    memberships.map(
      async (membership) => await queryRunner.query(`INSERT INTO membership (name) VALUES ('${membership.name}')`),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DELETE * FROM membership`);
  }
}
