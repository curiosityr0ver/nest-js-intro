import { Injectable } from '@nestjs/common';
// import { CreateUserDto } from './dto/create-auth.dto';
// import { UpdateAuthDto } from './dto/update-auth.dto';
import { UserAuth } from './entities/auth.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UserAuth)
    private readonly userRepository: Repository<UserAuth>,
  ) {}

  async login(username: string, password: string) {
    const user = await this.userRepository.findOneBy({ username });
    if (user.password == password) {
      return 'logged in';
    } else {
      return 'failed';
    }
  }

  async register(username: string, password: string) {
    return this.userRepository.save({ username, password });
  }
}
