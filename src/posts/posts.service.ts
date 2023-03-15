import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { Post } from './entities/post.entity';

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(Post)
    private postsRepository: Repository<Post>,
  ) {}

  async create(createPostDto: CreatePostDto) {
    return await this.postsRepository.save(createPostDto);
  }

  async findAll(payload?: boolean): Promise<Post[]> {
    return await this.postsRepository.find({ where: { published: payload } });
  }

  async findOne(id: number) {
    return await this.postsRepository.findOne({ where: { id } });
  }

  async update(id: number, updatePostDto: UpdatePostDto) {
    let post = await this.postsRepository.findOne({ where: { id } });
    post = this.postsRepository.merge(post, updatePostDto);

    await this.postsRepository.update(id, updatePostDto);
    return post;
  }

  async updatePublished(id: number, payload: boolean) {
    let post = await this.postsRepository.findOne({ where: { id } });
    post = this.postsRepository.merge(post, { published: payload });

    await this.postsRepository.update(id, { published: payload });
    return post;
  }

  async remove(id: number) {
    return await this.postsRepository.delete(id);
  }
}
