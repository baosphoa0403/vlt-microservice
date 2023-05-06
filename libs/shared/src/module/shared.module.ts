import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { connectionMysql } from '../database/mysql.provider';
@Module({
  imports: [TypeOrmModule.forRoot(connectionMysql)],
})
export class SharedModule {}
