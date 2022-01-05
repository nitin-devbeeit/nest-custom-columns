import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import {  IsDefined, IsNotEmpty, IsOptional, IsString } from "class-validator";


export class RestParameters {
  [key: string]: string
}

export class CreateStudentDto {

  @ApiProperty()
  @IsDefined()
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty()
  @IsDefined()
  @IsNotEmpty()
  @IsString()
  age: string;

  @ApiPropertyOptional()
  @IsOptional()
  rest: RestParameters
  
}
