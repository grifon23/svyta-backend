import { ApiProperty } from '@nestjs/swagger';

export class CreateProductDto {
  @ApiProperty()
  name: string;

  @ApiProperty({ required: true })
  price: string;

  @ApiProperty({ required: true })
  size: string;
  @ApiProperty({ required: true })
  description?: string;

  @ApiProperty({ required: false, default: false })
  published: boolean;
}
