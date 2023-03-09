import { ProductsService } from './products.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { IProduct } from './interfaces';

@Controller('products')
export class ProductsController {
  constructor(private readonly productService: ProductsService) {}

  @Get()
  async getAllProducts(): Promise<IProduct[]> {
    return await this.productService.getAll();
  }

  @Get(':id')
  getOneProduct(@Param('id') id: string): IProduct {
    return this.productService.getOne(id);
  }

  @Post()
  async create(@Body() data: IProduct) {
    return await this.productService.createProduct(data);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() data: IProduct) {
    return this.productService.updateProduct(id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productService.deleteProduct(id);
  }
}
