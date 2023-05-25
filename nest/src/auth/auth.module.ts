import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsersModule } from '../users/users.module';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';

import jwtConstants from '../jwt/constants';
import { ThrottlerModule } from '@nestjs/throttler';

@Module({
  imports: [
    UsersModule,
    PassportModule,
    JwtModule.register({
      global: true,
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '1m' },
    }),
    ThrottlerModule.forRoot({
      ttl: 60, // Zaman aşımı süresi (saniye cinsinden)
      limit: 3, // İzin verilen maksimum istek sayısı
    }),
  ],
  providers: [AuthService],
  controllers: [AuthController],
})
export class AuthModule {}
