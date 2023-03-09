import { ProductEntity } from '../products/entity/product.entity';
import 'reflect-metadata';
import { DataSource } from 'typeorm';

const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 3303,
  username: 'root',
  password: 'admin',
  database: 'test',
  entities: [ProductEntity],
  synchronize: false,
  logging: false,
});

// to initialize initial connection with the database, register all entities
// and "synchronize" database schema, call "initialize()" method of a newly created database
// once in your application bootstrap
AppDataSource.initialize()
  .then(() => {
    console.log('Data Source has been initialized!');
  })
  .catch((error) => console.log(error));

export const dataSource = AppDataSource;
