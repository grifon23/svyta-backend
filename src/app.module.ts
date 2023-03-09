import { Module } from '@nestjs/common';
import { ProductsModule } from './products/products.module';
import 'reflect-metadata';

@Module({
  imports: [ProductsModule],
})
export class AppModule {}
