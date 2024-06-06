import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getNowDate(): object {
    return {
      datetime: new Date(),
    };
  }
}
