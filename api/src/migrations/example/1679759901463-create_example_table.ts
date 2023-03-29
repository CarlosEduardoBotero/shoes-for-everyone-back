import { MigrationInterface, QueryRunner } from 'typeorm';

export class createExampleTable1679759901463 implements MigrationInterface {
  name = 'createExampleTable1679759901463';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE IF NOT EXISTS "example"."examples" (
        "id" character varying(16) NOT NULL,
        "name" character varying(32) NOT NULL,
        "description" character varying(128),
        CONSTRAINT "PK_ea56499b0a3a29593d3405080e8" PRIMARY KEY ("id")
      )`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    // reverts things made in "up" method
    await queryRunner.query(`DROP TABLE IF EXISTS "example"."examples";`);
  }
}
