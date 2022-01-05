import { Controller, Get } from '@nestjs/common';
import { ParentService } from './parent.service';

@Controller()
export class ParentController {
  constructor(private readonly parentService: ParentService) {}

  @Get()
  getHello(): string {
    return this.parentService.getHello();
  }
}
