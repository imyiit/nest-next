import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import * as bcrypt from 'bcrypt';
import Sags from 'sagdb';

export interface IUser {
  userId: string;
  username: string;
  password: string;
  email: string;
}

@Injectable()
export class UsersService {
  private Database = () => new Sags<IUser, IUser[]>({ name: 'users' });

  private users() {
    return this.Database().get('users') || [];
  }

  findWithId(userId: string): IUser | undefined {
    return this.users().find((user) => user.userId === userId);
  }

  findWith(callback: (user: IUser) => void): IUser | undefined {
    return this.users().find(callback);
  }

  saveUser(user: Omit<IUser, 'userId'>): IUser {
    const userData: IUser = {
      ...user,
      password: bcrypt.hashSync(user.password, 10),
      userId: uuidv4(),
    };

    this.Database().push('users', userData);
    return userData;
  }
}
