import { config } from 'dotenv';
import { Product } from 'src/product/entities/product.entity';
import { DataSourceOptions } from 'typeorm';

config();
export const typeOrmConfig: DataSourceOptions = {
  type: 'postgres',
  host: process.env.DATABASE_HOST,
  port: Number(process.env.POSTGRES_PORT),
  username: process.env.POSTGRES_USER,
  password: String(process.env.POSTGRES_PASSWORD),
  database: process.env.DATABASE_NAME,
  entities: [Product],
  migrationsRun: false,
  logging: true,
  migrationsTableName: 'migrations',
  migrations: [
    __dirname + '/migration/**/*.ts',
    __dirname + '/migrations/**/*.js',
  ],
  synchronize: false,
};
