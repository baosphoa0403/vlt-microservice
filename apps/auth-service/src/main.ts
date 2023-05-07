/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app/app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const configService = new ConfigService();

  const user = configService.get('RABBITMQ_USER');

  const password = configService.get('RABBITMQ_PASSWORD');

  const host = configService.get('RABBITMQ_HOST');

  const queueName = configService.get('RABBITMQ_QUEUE_AUTH');

  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.RMQ,
      options: {
        urls: [`amqp://${user}:${password}@${host}`],
        queue: queueName,
        queueOptions: {
          durable: true,
        },
        noAck: false,
        prefetchCount: 1,
      },
    }
  );
  await app.listen();

  Logger.log(`🚀 Auth Microservice is running`);
}

bootstrap();
