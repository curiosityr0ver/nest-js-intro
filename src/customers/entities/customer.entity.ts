import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'customers', synchronize: false })
export class Customer {
  @PrimaryGeneratedColumn()
  userid: number;
  @Column()
  username: string;
  @Column()
  password: string;
  @Column()
  email: string;
  @Column()
  address?: string;
  @Column()
  occupation?: string;
  @Column()
  phoneNumber?: number;
  @Column()
  createdAt?: string;
  @Column()
  updatedAt?: string;
}
