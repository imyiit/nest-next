import { Controller, Get, UseGuards } from '@nestjs/common';
import { HttpCode, HttpStatus, Post, Body } from '@nestjs/common';
import { ThrottlerGuard } from '@nestjs/throttler';

import { AuthService } from './auth.service';

import { AuthGuard, RolesGuard } from '../guard';
import { User, Roles } from '../decorators';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(ThrottlerGuard)
  @UseGuards(AuthGuard)
  @HttpCode(HttpStatus.OK)
  @Get('profile')
  getProfile(@User() user) {
    return user;
  }

  @UseGuards(RolesGuard)
  @Roles('admin')
  @Get('test')
  getTest() {
    return 'Test returned!';
  }

  @UseGuards(ThrottlerGuard)
  @HttpCode(HttpStatus.OK)
  @Post('login')
  postLogin(@Body() loginDTO: Record<string, string>) {
    return this.authService.login(loginDTO.username, loginDTO.password);
  }

  @HttpCode(HttpStatus.OK)
  @Post('register')
  postRegister(@Body() RegisterDTO: Record<string, string>) {
    return this.authService.register(
      RegisterDTO.username,
      RegisterDTO.password,
      RegisterDTO.email,
    );
  }
}
