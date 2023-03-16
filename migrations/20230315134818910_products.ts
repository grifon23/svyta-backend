/* eslint-disable @typescript-eslint/naming-convention */
import { MigrationBuilder, ColumnDefinitions } from 'node-pg-migrate';

export const shorthands: ColumnDefinitions | undefined = undefined;

export async function up(pgm: MigrationBuilder): Promise<void> {
  return pgm.createTable('products', {
    id: 'id',
    name: { type: 'varchar(100)', notNull: false },
    price: { type: 'varchar(30)', notNull: false },
    description: { type: 'varchar(256)', notNull: false },
    size: { type: 'varchar(256)', notNull: false },
    published: { type: 'boolean', notNull: false },
    createdAt: {
      type: 'timestamp',
      notNull: true,
      default: pgm.func('current_timestamp'),
    },
  });
}

export async function down(pgm: MigrationBuilder): Promise<void> {
  return pgm.dropTable('products');
}
