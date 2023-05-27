import { Controller, Get, UseGuards } from '@nestjs/common';
import { HttpCode, HttpStatus, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
import { User } from 'src/users/users.decorator';
import { ThrottlerGuard } from '@nestjs/throttler';
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(ThrottlerGuard)
  @HttpCode(HttpStatus.OK)
  @UseGuards(AuthGuard)
  @Get('profile')
  getProfile(@User() user) {
    return user;
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
