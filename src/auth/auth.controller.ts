import { Controller, Get, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  // @Get()
  // findAll() {
  //   return 'Arrived on auth';
  // }

  @Get()
  findAll() {
    return this.authService.findAll();
  }
  @Post('login')
  login(@Body() { username, password }) {
    return this.authService.login(username, password);
  }

  @Post('register')
  register(@Body() { username, password }) {
    return this.authService.register(username, password);
  }
}
