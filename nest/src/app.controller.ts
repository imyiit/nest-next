import { Controller, Get, Req, Post, UseGuards } from "@nestjs/common";
import { AppService } from "./app.service";
import type { Request } from "express";
import { LocalAuthGuard } from "./auth/auth.guard";
import { AuthService } from "./auth/auth.service";
import { JwtAuthGuard } from "./jwt/jwt.guard";

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private authService: AuthService
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get("token")
  getToken(@Req() req: Request) {
    const token = req.cookies["token"];
    return this.appService.getToken(token);
  }

  @UseGuards(LocalAuthGuard)
  @Post("auth/login")
  async login(@Req() req: Request) {
    return this.authService.login(req.user as any);
  }

  @UseGuards(JwtAuthGuard)
  @Get("profile")
  getProfile(@Req() req: Request) {
    return req.user;
  }
}
