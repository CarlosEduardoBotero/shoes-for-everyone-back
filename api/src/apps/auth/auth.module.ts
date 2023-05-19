import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { environment } from 'src/@shared/environment.config';
import { UsersRepository } from '../users/repositories/users.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from '../users/entities/user.entity';
import { ValidateLoginServiceImpl } from '../users/services-impl/user.validate-login.service-impl';
import { GetUserServiceImpl } from '../users/services-impl/user.get.service-impl';
import { JwtStrategy } from './jwt.strategy';

@Module({
  imports: [
    PassportModule,
    JwtModule.register({
      global: true,
      secret: environment.jwtConstants.secret,
      signOptions: { expiresIn: environment.jwtConstants.expiresIn },
    }),
    TypeOrmModule.forFeature([UserEntity]),
  ],
  controllers: [AuthController],
  providers: [
    AuthService,
    UsersRepository,
    ValidateLoginServiceImpl,
    GetUserServiceImpl,
    JwtModule,
    JwtStrategy,
  ],
  exports: [AuthService],
})
export class AuthModule {}
