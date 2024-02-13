import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'auth', synchronize: false })
export class UserAuth {
  @PrimaryGeneratedColumn()
  userid: number;
  @Column()
  username: string;
  @Column()
  password: string;
}
