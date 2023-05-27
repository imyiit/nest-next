import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import * as bcrypt from 'bcrypt';
import Sags from 'sagdb';
import { UserDTO } from './users.dto';

@Injectable()
export class UsersService {
  private Database = () => new Sags<UserDTO, UserDTO[]>({ name: 'users' });

  private users() {
    return this.Database().get('users') || [];
  }

  findOne(userId: string): UserDTO | undefined {
    return this.users().find((user) => user.userId === userId);
  }

  find(callback: (user: UserDTO) => void): UserDTO | undefined {
    return this.users().find(callback);
  }

  save(user: UserDTO): UserDTO {
    const _user: UserDTO = {
      ...user,
      password: bcrypt.hashSync(user.password, 10),
      userId: uuidv4(),
    };
    this.Database().push('users', _user);
    return _user;
  }
}
