import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getToken(token: string): string {
    return 'tokenimiz :' + token;
  }
}
