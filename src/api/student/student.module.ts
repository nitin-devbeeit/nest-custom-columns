import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudentEntity } from 'src/database/entities/student.entity';
import { CustomColumnModule } from '../custom_columns/customColumn.module';
import { StudentController } from './student.controller';
import { StudentService } from './student.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
        StudentEntity
    ]),
    CustomColumnModule
  ],
  controllers: [StudentController],
  providers: [StudentService],
})
export class StudentModule {}
