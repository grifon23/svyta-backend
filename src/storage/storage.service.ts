import { Injectable, Logger, HttpException, HttpStatus } from '@nestjs/common';
import {Client} from 'minio'
import * as crypto from 'crypto';
import { BufferedFile } from './typing/file.model';

@Injectable()
export class StorageService {
  

  private readonly logger: Logger;
  private readonly bucketName = 'files';

  private readonly client = new Client({
    endPoint: process.env.MINIO_ENDPOINT,
    port: parseInt(process.env.MINIO_PORT),
    useSSL: false, // If on localhost, keep it at false. If deployed on https, change to true
    accessKey: process.env.MINIO_ACCESS_KEY,
    secretKey: process.env.MINIO_SECRET_KEY,
  })

  public async upload(
    file: BufferedFile,
    bucketName: string = this.bucketName,
  ) {
    console.log('FILE', file);
    if (!(file.mimetype.includes('jpeg') || file.mimetype.includes('png'))) {
      throw new HttpException(
        'File type not supported',
        HttpStatus.BAD_REQUEST,
      );
    }
    const timestamp = Date.now().toString();
    const hashedFileName = crypto
      .createHash('md5')
      .update(timestamp)
      .digest('hex');
    const extension = file.originalname.substring(
      file.originalname.lastIndexOf('.'),
      file.originalname.length,
    );
    // const metaData = { 'Content-Type': 'application/octet-stream' }
    const metaData = {
      'Content-Type': 'application/octet-stream',
    };
    // We need to append the extension at the end otherwise Minio will save it as a generic file
    const fileName = hashedFileName + extension;
    return new Promise((resolve, reject) => {
      this.client.putObject(
        bucketName,
        fileName,
        file.buffer,
        null,
        metaData,
        (err, etag) => {
          if (err) {
            throw new HttpException(
              'Error uploading file',
              HttpStatus.BAD_REQUEST,
            );
          }
          resolve({
            url: `${process.env.MINIO_ENDPOINT}:${process.env.MINIO_PORT}/${process.env.MINIO_BUCKET_NAME}/${fileName}`,
          });
        },
      );
    });

   
  }

  async delete(objetName: string, bucketName: string = this.bucketName) {
    this.client.removeObject(bucketName, objetName, (err) => {
      if (err)
        throw new HttpException(
          'An error occured when deleting!',
          HttpStatus.BAD_REQUEST,
        );
    });
  }
}
