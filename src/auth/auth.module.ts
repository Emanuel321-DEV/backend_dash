import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { PassportModule } from "@nestjs/passport";
import { UserModule } from '../user/user.module';
import { JwtModule } from "@nestjs/jwt";
import { ConfigModule } from '@nestjs/config';
import { AuthController } from './auth.controller';
import { LocalStrategy } from './strategies/local.strategy';


@Module({
  imports: [
    ConfigModule.forRoot(),
    UserModule, 
    PassportModule, 
    JwtModule.register({
      privateKey: process.env.JWT_SECRET_KEY, // 
      signOptions: { expiresIn: '60s'} // tempo expiração token
    })],
    controllers: [AuthController],
    providers: [AuthService, LocalStrategy],
})
export class AuthModule {}
