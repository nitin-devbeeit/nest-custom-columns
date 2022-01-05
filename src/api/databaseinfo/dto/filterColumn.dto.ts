import { IsOptional, IsString } from 'class-validator';

export class filterColumnDto {
  @IsOptional()
  @IsString()
  tableName?: string;
}
