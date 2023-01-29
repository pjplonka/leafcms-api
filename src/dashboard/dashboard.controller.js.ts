import { Controller, Get } from '@nestjs/common';

@Controller()
export class DashboardController {
  @Get('dashboard')
  index(): Array<any> {
    return [];
  }
}
