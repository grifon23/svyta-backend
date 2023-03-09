import { ProductEntity } from './entity/product.entity';
import { dataSource } from './../data-source/index';
import { IProduct } from './interfaces/product.interfaces';
import { Injectable } from '@nestjs/common';
import { prodoctsMock } from './mock-data';

@Injectable()
export class ProductsService {
  private products: IProduct[] = [];
  private productRepository = dataSource.getRepository(ProductEntity);

  async getAll(): Promise<IProduct[]> {
    const products = await this.productRepository.find();
    return products;
  }

  getOne(id: string): IProduct {
    return this.products.find((it) => it.id === id);
  }

  async createProduct(data: IProduct) {
    return await this.productRepository.save(data);
  }

  updateProduct(id: string, data: IProduct) {
    return (this.products = this.products.map((it) => {
      return it.id === id ? data : it;
    }));
  }

  deleteProduct(id: string) {
    return (this.products = this.products.filter((it) => it.id !== id));
  }
}
