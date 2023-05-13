import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { CreateUserDTO } from './auth/dto/createUser.dto';
// import { CreateUser } from './auth/dto/createUser.dto';

@Injectable()
export class AppService {
  constructor(
    @Inject('AUTH') private authService: ClientProxy // @Inject('USER_SERVICE') private userService: ClientProxy
  ) {}

  private readonly users = [];

  getData(): { message: string } {
    return { message: 'Hello API' };
  }

  createUser(createUser: CreateUserDTO) {
    this.users.push(createUser);

    this.authService.emit('user_created', createUser);
    // this.userService.emit('user_created', createUser);
  }
}
