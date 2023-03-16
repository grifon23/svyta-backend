import { UpdatePublishedProductDto } from './dto/update-status-product.dto';
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';

@Controller('products')
@ApiTags('Products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  findAll(@Query('published') published?: boolean) {
    return this.productService.findAll(published);
  }

  @Post()
  @ApiOkResponse({
    status: 201,
    type: CreateProductDto,
  })
  create(@Body() createProductDto: CreateProductDto) {
    return this.productService.create(createProductDto);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productService.findOne(+id);
  }

  @Patch(':id')
  @ApiOkResponse({
    status: 201,
    type: CreateProductDto,
  })
  update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
    return this.productService.update(+id, updateProductDto);
  }
  @Patch('published/:id')
  @ApiOkResponse({
    status: 201,
    type: CreateProductDto,
  })
  updateStatus(
    @Param('id') id: string,
    @Body() payload: UpdatePublishedProductDto,
  ) {
    return this.productService.update(+id, payload);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productService.remove(+id);
  }
}
