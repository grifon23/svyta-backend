import { MigrationInterface, QueryRunner } from 'typeorm';

export class migration1678455480567 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const sql = `CREATE TABLE "post"("id" INT PRIMARY KEY, "title" TEXT)`;
    await queryRunner.query(sql);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('post', true);
  }
}
