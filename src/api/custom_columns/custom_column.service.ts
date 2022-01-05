import { ConflictException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CustomColumnEntity } from 'src/database/entities/customColumns.entity';
import { Repository } from 'typeorm';
import { filterColumnDto } from '../databaseinfo/dto/filterColumn.dto';
import { CreateCustomColumnDto } from './dto/createCustomColumnDto';

@Injectable()
export class CustomColumnService {
  constructor(
    @InjectRepository(CustomColumnEntity)
    private customColumnRepository: Repository<CustomColumnEntity>,
  ) {}

  async getcustomColumns(query: filterColumnDto) {
    if (query.tableName) {
      const columnNames = await this.customColumnRepository.find({
        where: {
          tableName: query.tableName,
        },
        order:{
          id:"ASC",
          createdAt:"ASC"
        }
      });
      return columnNames;
    } else {
      const customColumns = await this.customColumnRepository.find();
      return customColumns;
    }
  }

  async createCustomColumn(createCustomColumnData: CreateCustomColumnDto) {
    const existingCustomColumn = await this.customColumnRepository.findOne({
      where: {
        tableName: createCustomColumnData.tableName,
        customColumnName: createCustomColumnData.customColumnName,
      },
    });

    if (existingCustomColumn) {
      throw new ConflictException(
        'Custom Column already exists',
        'custom_column_already_exists',
      );
    }

    const createCustomColumn = this.customColumnRepository.create({
      ...createCustomColumnData,
    });

    console.log(createCustomColumn)
    return await this.customColumnRepository.save(createCustomColumn);
  }
}
