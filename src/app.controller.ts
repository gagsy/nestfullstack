import { Controller, Get, Render } from '@nestjs/common';
//import { AppService } from './app.service';

@Controller()
export class AppController {
  @Get()
  @Render('Home')
  getHello() {
    return { message: 'NestJS ❤ Svelte' };
  }

  @Get('/about')
  @Render('About')
  getAbout() {
  }
}