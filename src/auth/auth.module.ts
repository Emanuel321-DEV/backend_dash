import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { PassportModule } from "@nestjs/passport";
import { UserModule } from 'src/user/user.module';
import { JwtModule } from "@nestjs/jwt";
import { ConfigModule } from '@nestjs/config';
import { AuthController } from './auth.controller';


@Module({
  imports: [
    ConfigModule.forRoot(),
    PassportModule, 
    UserModule, 
    JwtModule.register({
      privateKey: process.env.JWT_SECRET_KEY, // 
      signOptions: { expiresIn: '60s'} // tempo expiração token
    })],
  providers: [AuthService],
  controllers: [AuthController]
})
export class AuthModule {}
