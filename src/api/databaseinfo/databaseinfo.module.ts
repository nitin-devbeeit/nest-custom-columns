import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomColumnEntity } from 'src/database/entities/customColumns.entity';
import { DatabaseInfoController } from './databaseinfo.controller';
import { DatabaseInfoService } from './databaseinfo.services';

@Module({
  imports: [
    TypeOrmModule.forFeature([
        CustomColumnEntity
    ])
  ],
  controllers: [DatabaseInfoController],
  providers: [DatabaseInfoService]
})
export class DatabaseInfoModule {}
