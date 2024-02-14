import { Injectable } from '@nestjs/common';
// import { CreateUserDto } from './dto/create-auth.dto';
// import { UpdateAuthDto } from './dto/update-auth.dto';
import { UserAuth } from './entities/auth.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UserAuth)
    private readonly userRepository: Repository<UserAuth>,
    private jwtService: JwtService,
  ) {}

  findAll() {
    return this.userRepository.find();
  }

  async login(username: string, password: string) {
    const user = await this.userRepository.findOneBy({ username });
    if (user.password == password) {
      const token = await this.jwtService.signAsync({ username });
      return { username, token };
    } else {
      return 'failed';
    }
  }

  async register(username: string, password: string) {
    return this.userRepository.save({ username, password });
  }
}
