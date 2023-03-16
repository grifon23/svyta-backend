import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
} from 'typeorm';

@Entity('products')
export class Product {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @Column()
  price: string;
  @Column()
  description: string;
  @Column()
  size: string;
  @Column()
  published: boolean;
  @CreateDateColumn()
  createdAt?: Date;
}
