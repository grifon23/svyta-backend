import { ApiProperty } from '@nestjs/swagger';

export class UpdatePublishedPostDto {
  @ApiProperty({ required: true, nullable: false })
  published: boolean;
}
