/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

import { AppModule } from './app/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const configService = app.get(ConfigService);

  const globalPrefix = 'api';

  app.setGlobalPrefix(globalPrefix);

  const port = configService.get('SERVER_PORT') || 3000;

  const config = new DocumentBuilder()
    .setTitle('Vlt example')
    .setDescription('The Vlt API description')
    .setVersion('1.0')
    .addTag('Vlt')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(port);
  Logger.log(
    `🚀 Application VLT is running on: http://localhost:${port}/${globalPrefix}`
  );
}

bootstrap();
