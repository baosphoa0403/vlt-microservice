import { Module } from '@nestjs/common';
import {
  AppConfigModule,
  RmqModule,
  SharedModule,
} from '@vlt-microservices/shared';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    RmqModule.register({ name: 'AUTH' }),
    SharedModule,
    AppConfigModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
