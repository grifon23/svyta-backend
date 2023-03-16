import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private productRepository: Repository<Product>,
  ) {}

  async create(createProductDto: CreateProductDto) {
    return await this.productRepository.save(createProductDto);
  }

  async findAll(payload?: boolean): Promise<Product[]> {
    return await this.productRepository.find({ where: { published: payload } });
  }

  async findOne(id: number) {
    return await this.productRepository.findOne({ where: { id } });
  }

  async update(id: number, updateProducttDto: UpdateProductDto) {
    let product = await this.productRepository.findOne({ where: { id } });
    product = this.productRepository.merge(product, updateProducttDto);

    await this.productRepository.update(id, updateProducttDto);
    return product;
  }

  async updatePublished(id: number, payload: boolean) {
    let product = await this.productRepository.findOne({ where: { id } });
    product = this.productRepository.merge(product, { published: payload });

    await this.productRepository.update(id, { published: payload });
    return product;
  }

  async remove(id: number) {
    return await this.productRepository.delete(id);
  }
}
