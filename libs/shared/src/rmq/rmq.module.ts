import { DynamicModule, Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { AppConfigModule } from '../common/config/config.module';
import { RmqService } from './rmq.service';

interface IRabbitMqOption {
  name: string;
}

@Module({
  providers: [RmqService],
  exports: [RmqService],
})
export class RmqModule {
  static register({ name }: IRabbitMqOption): DynamicModule {
    return {
      module: RmqModule,
      imports: [
        ClientsModule.registerAsync([
          {
            name: name,
            imports: [AppConfigModule],
            useFactory: (configService: ConfigService) => ({
              transport: Transport.RMQ,
              options: {
                urls: [`${configService.get('RABBIT_MQ_URI')}`],
                queue: `${configService.get(`RABBIT_MQ_${name}_QUEUE`)}`,
                queueOptions: {
                  durable: true,
                },
              },
            }),
            inject: [ConfigService],
          },
        ]),
      ],
      exports: [ClientsModule],
    };
  }
}
