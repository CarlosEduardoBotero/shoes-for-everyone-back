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
import { UsersController } from './apps/users/controllers/users.controller';
import { UsersService } from './apps/users/services/users.service';
import { UserEntity } from './apps/users/entities/user.entity';
import { UsersRepository } from './apps/users/repositories/users.repository';
import { CreateUserServiceImpl } from './apps/users/services-impl/user.create.service-impl';
import { GetAllUserServiceImpl } from './apps/users/services-impl/user.get-all.service-impl';
import { GetUserServiceImpl } from './apps/users/services-impl/user.get.service-impl';
import { UpdateUserServiceImpl } from './apps/users/services-impl/user.update.service-impl';
import { CreateExampleServiceImpl } from './apps/examples/services-impl/example.create.service-impl';
import { GetAllExampleServiceImpl } from './apps/examples/services-impl/example.get-all.service-impl';
import { GetExampleServiceImpl } from './apps/examples/services-impl/example.get.service-impl';
import { UpdateExamplerServiceImpl } from './apps/examples/services-impl/example.update.service-impl';
import { AuthModule } from './apps/auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: () => databaseConfig(),
    }),
    TypeOrmModule.forFeature([
      ExampleEntity,
      UserEntity
    ]),
    AuthModule,
  ],
  controllers: [
    HealthCheckController,
    ExampleController,
    UsersController
  ],
  providers: [
    HelpersService,
    ExampleRepository,
    ExampleService,
    CreateExampleServiceImpl,
    GetAllExampleServiceImpl,
    GetExampleServiceImpl,
    UpdateExamplerServiceImpl,
    UsersService,
    UsersRepository,
    CreateUserServiceImpl,
    GetAllUserServiceImpl,
    GetUserServiceImpl,
    UpdateUserServiceImpl,
  ],
})
export class AppModule {}
