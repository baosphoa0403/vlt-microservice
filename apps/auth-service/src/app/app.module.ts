import { Module } from '@nestjs/common';
import { AppConfigModule, RmqModule } from '@vlt-microservices/shared';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [AppConfigModule, RmqModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
