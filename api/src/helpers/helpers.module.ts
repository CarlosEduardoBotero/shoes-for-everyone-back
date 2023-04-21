import { Module } from '@nestjs/common';
import { HelpersService } from './helpers.service';

@Module({
  imports: [],
  controllers: [],
  providers: [],
  // add this only if you use service and/or custom repo within another module/service
  exports: [HelpersService],
})
export class HelpersModule {}
