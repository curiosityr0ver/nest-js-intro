import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'users', synchronize: false })
export class User {
  @PrimaryGeneratedColumn()
  userid: number;
  @Column()
  username: string;
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
