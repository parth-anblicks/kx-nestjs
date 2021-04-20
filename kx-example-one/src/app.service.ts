import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getKXString():string{
    return 'API Development with NextJS'
  }
}
