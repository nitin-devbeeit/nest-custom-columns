import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomColumnModule } from './api/custom_columns/customColumn.module';
import { DatabaseInfoModule } from './api/databaseinfo/databaseinfo.module';
import { ParentModule } from './api/parent/parent.module';
import { StudentModule } from './api/student/student.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Config } from './config/app.config';
import { DatabaseConfig } from './config/db.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load:[Config]
    }),
    TypeOrmModule.forRootAsync({
      imports:[ConfigModule],
      useClass: DatabaseConfig
    }),
    StudentModule,
    ParentModule,
    CustomColumnModule,
    DatabaseInfoModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
