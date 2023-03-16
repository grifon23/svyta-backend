import { ApiProperty } from '@nestjs/swagger';

export class UpdatePublishedProductDto {
  @ApiProperty({ required: true, nullable: false })
  published: boolean;
}
