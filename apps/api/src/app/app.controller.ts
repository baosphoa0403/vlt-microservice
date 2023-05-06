import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { AppService } from './app.service';
import { CreateUserDTO } from './auth/dto/createUser.dto';

@ApiTags('cats')
@Controller('cats')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getData() {
    return this.appService.getData();
  }

  @Post()
  createUser(@Body() createUser: CreateUserDTO) {
    return this.appService.createUser(createUser);
  }
}
