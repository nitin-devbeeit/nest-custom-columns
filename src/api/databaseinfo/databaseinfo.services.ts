import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CustomColumnEntity } from 'src/database/entities/customColumns.entity';
import { Repository } from 'typeorm';
import { filterColumnDto } from './dto/filterColumn.dto';

@Injectable()
export class DatabaseInfoService {
  constructor(
    @InjectRepository(CustomColumnEntity)
    private customColumnRepository: Repository<CustomColumnEntity>,
  ) {}

  async getTablesName() {
    const tableNames = await this.customColumnRepository.query(
      `SELECT table_name FROM information_schema.tables	where table_schema = 'public';`,
    );
    const filteredTables = tableNames.filter((table: any) => {
      if (
        table.table_name === 'migrations' ||
        table.table_name === 'typeorm_metadata' ||
        table.table_name === 'custom_columns'
      ) {
      } else {
        return table.table_name;
      }
    });

    // console.log(filteredTables);
    return filteredTables;
  }

  async getColumnsName(query: filterColumnDto) {
    console.log(query);

    const columnNames = await this.customColumnRepository.query(
      `SELECT column_name FROM information_schema.columns 
       WHERE table_schema = 'public' AND table_name = '${query.tableName}' AND column_name LIKE 'customColumn%';`,
    );

    // console.log(columnNames)
    return columnNames

  }
}
