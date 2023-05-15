import { Injectable } from '@nestjs/common';

import Sags from 'sagdb';

export interface IUser {
  userId: number;
  username: string;
  password: string;
  email: string;
}

@Injectable()
export class UsersService {
  private readonly users = [
    {
      userId: 1,
      username: 'yiit',
      password: '123',
      email: 'yiit@gmail.com',
    },
    {
      userId: 2,
      username: 'maria',
      password: 'guess',
      email: 'maria@gmail.com',
    },
  ];

  findOne(username: string): IUser | undefined {
    return this.users.find((user) => user.username === username);
  }

  findWith(callback: (user: IUser) => void): IUser | undefined {
    return this.users.find(callback);
  }
}
