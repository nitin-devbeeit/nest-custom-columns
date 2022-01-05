import { Body, Controller, Get, HttpStatus, Post } from '@nestjs/common';
import { ApiBody, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AppResponse } from 'src/types/app-response.dto';
import { ResponseStatus } from 'src/types/response-status.enum';
import { StatusMessage } from 'src/types/status-message.dto';
import { CreateStudentDto } from './dto/createStudentDto';
import { StudentService } from './student.service';

@ApiTags('Student')
@Controller('student')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  @Get()
  @ApiResponse({
    type: AppResponse,
    status: HttpStatus.OK,
    description: 'Student fetch response',
  })
  async getStudents(): Promise<AppResponse> {
    const result = await this.studentService.getStudents();
    return {
      status: true,
      statusText: ResponseStatus.SUCCESS,
      data: result,
    };
  }

  @Post()
  @ApiBody({ type: CreateStudentDto, required: true })
  @ApiResponse({
    type: AppResponse,
    status: HttpStatus.CREATED,
    description: 'Student created!',
  })
  async createStudent(
    @Body() createStudentData: CreateStudentDto,
  ): Promise<AppResponse> {
    await this.studentService.createStudent(createStudentData);
    return {
      status: true,
      statusText: ResponseStatus.SUCCESS,
      message: StatusMessage.CREATED,
    };
  }
}
