import { Controller, Get, HttpStatus, Res } from '@nestjs/common';
import { Response } from 'express';

@Controller('health')
export class HealthCheckController {
  @Get()
  async healthCheck(@Res({ passthrough: true }) res: Response) {
    res.status(HttpStatus.OK);
    return { status: 'up and running' };
  }
}
