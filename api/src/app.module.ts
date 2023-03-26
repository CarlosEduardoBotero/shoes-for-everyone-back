import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HealthCheckController } from './health-check/health-check.controller';
import { databaseConfig } from './@shared/database';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ExampleModule } from './example/example.module';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: () => databaseConfig(),
    }),
    ExampleModule,
  ],
  controllers: [HealthCheckController],
  providers: [],
})
export class AppModule {}
