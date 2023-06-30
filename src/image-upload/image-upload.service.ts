import { Injectable } from '@nestjs/common';
import { StorageService } from 'src/storage/storage.service';
import { BufferedFile } from 'src/storage/typing/file.model';

@Injectable()
export class ImageUploadService {
  constructor(private minioClientService: StorageService) {}

  async uploadImage(image: BufferedFile) {
    const url = await this.minioClientService.upload(image);

    return {
      image_url: url,
      message: 'Image upload successful',
    };
  }
}