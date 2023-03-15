/* eslint-disable @typescript-eslint/naming-convention */
import { MigrationBuilder, ColumnDefinitions } from 'node-pg-migrate';

export const shorthands: ColumnDefinitions | undefined = undefined;

export async function up(pgm: MigrationBuilder): Promise<void> {
  return await pgm.addColumn('post', {
    description: { type: 'varchar(30)', notNull: false },
  });
}

export async function down(pgm: MigrationBuilder): Promise<void> {
  return await pgm.dropColumn('post', ['description']);
}
