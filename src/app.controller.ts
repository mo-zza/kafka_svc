import { Controller, Get, Inject } from '@nestjs/common';
import { ClientKafka, MessagePattern, Payload } from '@nestjs/microservices';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(
    private readonly _appService: AppService,
  ) {}

  @MessagePattern('say.hello')
  async sayHello(
    @Payload()
    message: any
  ) {
    // await delay(60000);
    console.log(message)
    // return this._appService.getHello();
  }
}
