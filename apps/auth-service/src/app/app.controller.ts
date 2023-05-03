import { Controller, Get } from '@nestjs/common';
import { EventPattern } from '@nestjs/microservices';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getData() {
    return this.appService.getData();
  }

  @EventPattern('user_created')
  handleUserCreated(data) {
    this.appService.handleUserCreated(data);
  }
}
