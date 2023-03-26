import { MigrationInterface, QueryRunner } from 'typeorm';

export class createExampleTable1679759901463 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    // await queryRunner.query(`
    //         CREATE TABLE IF NOT EXISTS examples (
    //             id VARCHAR(16) PRIMARY KEY,
    //             name VARCHAR(32) NOT NULL
    //             description
    //         );
    //     `);
    await queryRunner.query(
        `CREATE TABLE IF NOT EXISTS "example.examples" (
            "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
            "name" character varying(32) NOT NULL,
            "description" character varying(32) NOT NULL,
            CONSTRAINT "PK_5a5d5b2e8b44c5b14c603cd9c71" PRIMARY KEY ("id")
        )`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    // reverts things made in "up" method
    await queryRunner.query(`DROP TABLE IF EXISTS examples;`);
  }
}
