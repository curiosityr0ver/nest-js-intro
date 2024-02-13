import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  users = [];
  getHello(): string {
    return 'Hello World!';
  }
}
