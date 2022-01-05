import { Body, Controller, Get, HttpStatus, Post, Query } from '@nestjs/common';
import { ApiBody, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AppResponse } from 'src/types/app-response.dto';
import { ResponseStatus } from 'src/types/response-status.enum';
import { StatusMessage } from 'src/types/status-message.dto';
import { filterColumnDto } from '../databaseinfo/dto/filterColumn.dto';
import { CustomColumnService } from './custom_column.service';
import { CreateCustomColumnDto } from './dto/createCustomColumnDto';

@ApiTags('Custom Columns')
@Controller('custom-columns')
export class CustomColumnController {
  constructor(private readonly custom_columnService: CustomColumnService) {}

  @Get()
  @ApiQuery({
    name: 'tableName',
    type:'string',
  })
  @ApiResponse({
    type: AppResponse,
    status: HttpStatus.OK,
    description: 'Custom Column fetch response',
  })
  async getcustomColumns(
    @Query()
    query?: filterColumnDto,
  ): Promise<AppResponse> {
    const result = await this.custom_columnService.getcustomColumns(query);
    return {
      status: true,
      statusText: ResponseStatus.SUCCESS,
      data: result,
    };
  }

  @Post()
  @ApiBody({ type: CreateCustomColumnDto , required: true })
  @ApiResponse({
    type: AppResponse,
    status: HttpStatus.CREATED,
    description: 'Custom Column created!',
  })
  async createCustomColumn(
    @Body() createCustomColumnData: CreateCustomColumnDto,
  ): Promise<AppResponse> {
    await this.custom_columnService.createCustomColumn(createCustomColumnData);
    return {
      status: true,
      statusText: ResponseStatus.SUCCESS,
      message: StatusMessage.CREATED,
    };
  }
}
