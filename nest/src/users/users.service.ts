import { Injectable } from '@nestjs/common';

export interface IUser {
  userId: number;
  username: string;
  password: string;
}

@Injectable()
export class UsersService {
  private readonly users = [
    {
      userId: 1,
      username: 'yiit',
      password: '123',
    },
    {
      userId: 2,
      username: 'maria',
      password: 'guess',
    },
  ];

  findOne(username: string): IUser | undefined {
    return this.users.find((user) => user.username === username);
  }
}
