import { Injectable } from '@nestjs/common';

@Injectable()
export class ParentService {
  getHello(): string {
    return 'Hello World!';
  }
}
