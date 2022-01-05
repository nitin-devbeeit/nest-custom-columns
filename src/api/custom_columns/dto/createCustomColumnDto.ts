import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsDefined, IsNotEmpty, IsOptional, IsString, ValidateNested } from 'class-validator';

export class OptionalDataDto {
  @ApiPropertyOptional()
  @IsOptional()
  @Type(() => String)
  options: String[];
}

export class CreateCustomColumnDto {
  @ApiProperty()
  @IsDefined()
  @IsNotEmpty()
  @IsString()
  tableName: string;

  @ApiProperty()
  @IsDefined()
  @IsNotEmpty()
  @IsString()
  customColumnName: string;

  @ApiProperty()
  @IsDefined()
  @IsNotEmpty()
  @IsString()
  displayName: string;

  @ApiProperty()
  @IsDefined()
  @IsNotEmpty()
  @IsString()
  type: string;

  @ApiPropertyOptional()
  @IsOptional()
  @ValidateNested({ each: true })
  @Type(() => OptionalDataDto)
  optionalData: OptionalDataDto;

}
