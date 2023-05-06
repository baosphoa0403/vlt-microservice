import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import * as entities from '../entities/index';

export const connectionMysql: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'songohan',
  database: 'VLT',
  entities: Object.values(entities),
  autoLoadEntities: true,
  synchronize: true,
};
