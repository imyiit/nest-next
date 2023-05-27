import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private userService: UsersService,
    private jwtService: JwtService,
  ) {}

  async login(username: string, pass: string) {
    const user = this.userService.find((user) => user.username === username);

    if (!user) {
      throw new UnauthorizedException("Don't find this user. Pls register!");
    }

    if (!bcrypt.compareSync(pass, user.password)) {
      throw new UnauthorizedException('Password not correct!');
    }

    //Return user data without password, Generate accsess key
    const { password, ...userData } = user;
    return {
      access_token: await this.jwtService.signAsync(userData),
    };
  }

  async register(username: string, password: string, email: string) {
    if (this.userService.find((user) => user.username === username)) {
      throw new UnauthorizedException('This username already taked!');
    }

    if (this.userService.find((u) => u.email === email)) {
      throw new UnauthorizedException('This email already taked!');
    }

    if (password.length < 8) {
      throw new UnauthorizedException('Password must bigger then 8!');
    }

    if (this.userService.find((user) => user.email === email)) {
      throw new UnauthorizedException('This email is already taked!');
    }

    return this.userService.save({ email, password, username });
  }
}
