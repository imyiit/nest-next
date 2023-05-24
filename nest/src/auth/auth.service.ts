import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
@Injectable()
export class AuthService {
  constructor(
    private userService: UsersService,
    private jwtService: JwtService,
  ) {}

  async login(username: string, pass: string) {
    const user = this.userService.findWith(
      (user) => user.username === username,
    );
    if (user?.password !== pass) {
      throw new UnauthorizedException('Password not correct!');
    }

    const payload = { username: user.username, sub: user.userId };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }

  async register(username: string, pass: string, email: string) {
    const user = this.userService.findWith(
      (user) => user.username === username,
    );

    if (user) {
      throw new UnauthorizedException('This username already taked!');
    }

    if (this.userService.findWith((u) => u.email === email)) {
      throw new UnauthorizedException('This email already taked!');
    }
  }
}
