import { Controller, Get, UseGuards, Request } from '@nestjs/common';
import { HttpCode, HttpStatus, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
import { User } from 'src/users/users.decorator';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @UseGuards(AuthGuard)
  @Get('profile')
  getProfile(@User() user) {
    return user;
  }

  @HttpCode(HttpStatus.OK)
  @Post('login')
  postLogin(@Body() loginDTO: Record<string, any>) {
    return this.authService.login(loginDTO.username, loginDTO.password);
  }

  @HttpCode(HttpStatus.OK)
  @Post('register')
  postRegister(@Body() RegisterDTO: Record<string, any>) {
    return this.authService.register(
      RegisterDTO.username,
      RegisterDTO.password,
      RegisterDTO.email,
    );
  }
}
