import { Controller, Get, HttpStatus, Query } from '@nestjs/common';
import { ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AppResponse } from 'src/types/app-response.dto';
import { ResponseStatus } from 'src/types/response-status.enum';
import { DatabaseInfoService } from './databaseinfo.services';
import { filterColumnDto } from './dto/filterColumn.dto';

@ApiTags('Database Info')
@Controller('database-info')
export class DatabaseInfoController {
  constructor(private readonly database_infoService: DatabaseInfoService) {}

  @Get('tables')
  @ApiResponse({
    type: AppResponse,
    status: HttpStatus.OK,
    description: 'Tables fetch response',
  })
  async getTablesName(): Promise<AppResponse> {
    const result = await this.database_infoService.getTablesName();
    return {
      status: true,
      statusText: ResponseStatus.SUCCESS,
      data: result,
    };
  }

  @Get('columns')
  @ApiQuery({
    name: 'tableName',
    type:'string'
  })
  @ApiResponse({
    type: AppResponse,
    status: HttpStatus.OK,
    description: 'Columns fetch response',
  })
  async getColumnsName(
    @Query()
    query: filterColumnDto,
  ): Promise<AppResponse> {
    const result = await this.database_infoService.getColumnsName(query);
    return {
      status: true,
      statusText: ResponseStatus.SUCCESS,
      data: result,
    };
  }
}
