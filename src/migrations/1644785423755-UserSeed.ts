import { MigrationInterface, QueryRunner } from 'typeorm';
import { users } from './seed/user.seed';

export class UserSeed1644785423755 implements MigrationInterface {
  name = 'UserSeed1644785423755';

  public async up(queryRunner: QueryRunner): Promise<void> {
    users.map(
      async (user) =>
        await queryRunner.query(
          `INSERT INTO user (username, password, firstname, lastname, email, age, membership_id) VALUES ('${user.username}', '${user.password}', '${user.firstname}', '${user.lastname}', '${user.email}', ${user.age}, ${user.membershipId})`,
        ),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DELETE * FROM user`);
  }
}
