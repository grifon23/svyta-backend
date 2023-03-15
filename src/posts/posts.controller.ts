import { UpdatePublishedPostDto } from './dto/update-status-post.dto';
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
import { PostsService } from './posts.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';

@Controller('posts')
@ApiTags('Posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Get()
  findAll(@Query('published') published?: boolean) {
    return this.postsService.findAll(published);
  }

  @Post()
  @ApiOkResponse({
    status: 201,
    type: CreatePostDto,
  })
  create(@Body() createPostDto: CreatePostDto) {
    return this.postsService.create(createPostDto);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.postsService.findOne(+id);
  }

  @Patch(':id')
  @ApiOkResponse({
    status: 201,
    type: CreatePostDto,
  })
  update(@Param('id') id: string, @Body() updatePostDto: UpdatePostDto) {
    return this.postsService.update(+id, updatePostDto);
  }
  @Patch('published/:id')
  @ApiOkResponse({
    status: 201,
    type: CreatePostDto,
  })
  updateStatus(
    @Param('id') id: string,
    @Body() payload: UpdatePublishedPostDto,
  ) {
    return this.postsService.update(+id, payload);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.postsService.remove(+id);
  }
}
