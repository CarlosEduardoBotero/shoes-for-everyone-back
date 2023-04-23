import {
  Controller,
  Get,
  HttpStatus,
  Res,
  VERSION_NEUTRAL,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Response } from 'express';

@ApiTags('health')
@Controller({
  path: 'health',
  version: VERSION_NEUTRAL,
})
export class HealthCheckController {
  @Get()
  async healthCheck(@Res({ passthrough: true }) res: Response) {
    res.status(HttpStatus.OK);
    return { status: 'up and running' };
  }
}
