import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HealthCheckController } from './apps/health-check/health-check.controller';
import { databaseConfig } from './@shared/database';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ExampleEntity } from './apps/examples/entities/example.entity';
import { ExampleController } from './apps/examples/example.controller';
import { ExampleRepository } from './apps/examples/example.repository';
import { ExampleService } from './apps/examples/example.service';
import { HelpersService } from './helpers/helpers.service';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: () => databaseConfig(),
    }),
    TypeOrmModule.forFeature([ExampleEntity])
  ],
  controllers: [
    HealthCheckController,
    ExampleController
  ],
  providers: [
    HelpersService,
    ExampleRepository,
    ExampleService
  ]
})
export class AppModule {}
