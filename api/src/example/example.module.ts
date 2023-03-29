import { Module } from '@nestjs/common';
import { ExampleService } from './example.service';
import { ExampleController } from './example.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ExampleEntity } from './entities/example.entity';
import { ExampleRepository } from './example.repository';

@Module({
  imports: [TypeOrmModule.forFeature([ExampleEntity])],
  controllers: [ExampleController],
  providers: [ExampleRepository, ExampleService]
  // add this only if you use service and/or custom repo within another module/service
  // exports: [ExampleService, ExampleRepository]

})
export class ExampleModule {}
