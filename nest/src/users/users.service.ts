import { Injectable } from "@nestjs/common";

export type User = { userId: number; username: string; password: string };

@Injectable()
export class UsersService {
  public readonly users: User[] = [
    {
      userId: 1,
      username: "saghsu",
      password: "123xd",
    },
    {
      userId: 2,
      username: "yiit",
      password: "xd123",
    },
  ];

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find((user) => user.username === username);
  }
}
