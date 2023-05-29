import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import * as bcrypt from 'bcrypt';
import Sags from 'sagdb';
import { CreateUserDTO } from '../dto';

@Injectable()
export class UsersService {
  private Database = () =>
    new Sags<CreateUserDTO, CreateUserDTO[]>({ name: 'users' });

  private users() {
    return this.Database().get('users') || [];
  }

  find(callback: (user: CreateUserDTO) => void): CreateUserDTO | undefined {
    return this.users().find(callback);
  }

  findOne(userId: string): CreateUserDTO | undefined {
    return this.users().find((user) => user.id === userId);
  }

  save(user: Omit<CreateUserDTO, 'id'>): CreateUserDTO {
    const _user: CreateUserDTO = {
      ...user,
      password: bcrypt.hashSync(user.password, 10),
      id: uuidv4(),
    };
    this.Database().push('users', _user);
    return _user;
  }
}
