import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomColumnEntity } from 'src/database/entities/customColumns.entity';
import { CustomColumnController } from './custom_column.controller';
import { CustomColumnService } from './custom_column.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
        CustomColumnEntity
    ])
  ],
  controllers: [CustomColumnController],
  providers: [CustomColumnService],
  exports:[CustomColumnService]
})
export class CustomColumnModule {}
