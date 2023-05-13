/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app/app.module';
import { RmqOptions } from '@nestjs/microservices';
import { ConfigService } from '@nestjs/config';
import { RmqService } from '@vlt-microservices/shared';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const rmqService = app.get<RmqService>(RmqService);
  app.connectMicroservice<RmqOptions>(rmqService.getOptions('AUTH', false));
  const configService = app.get(ConfigService);
  const port = configService.get('AUTH_PORT');
  await app.listen(port);
  await app.startAllMicroservices();
  Logger.log(`🚀 Auth Microservice is running ${port}`);
}

bootstrap();
