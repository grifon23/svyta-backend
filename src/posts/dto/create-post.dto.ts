import { ApiProperty } from '@nestjs/swagger';

export class CreatePostDto {
  @ApiProperty()
  title: string;

  @ApiProperty({ required: true })
  description?: string;

  @ApiProperty({ required: false, default: false })
  published: boolean;
}
