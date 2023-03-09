import { IProduct } from './../interfaces/product.interfaces';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ProductEntity implements IProduct {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  sizes: string;

  @Column()
  cost: string;
}
