import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getData(): { message: string } {
    return { message: 'Hello API' };
  }

  handleUserCreated(data) {
    console.log('handlerUserCreated - COMMUNICATIONS - USER_SERVICES', data);
    // TODO: Email the user...
  }
}
