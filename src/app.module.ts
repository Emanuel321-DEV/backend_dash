import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { AuthService } from './auth/auth.service';
import { CompanyModule } from './company/company.module';
import { LocalModule } from './local/local.module';
import { ResponsibleModule } from './responsible/responsible.module';
import { TicketModule } from './ticket/ticket.module';
import { JwtService } from '@nestjs/jwt';


@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: process.env.DATABASE_URL, 
      ssl: { rejectUnauthorized: false },
      autoLoadEntities: true,
      synchronize: true,
      entities: [__dirname + '/**/models/*.entity{.js, .ts}']
    }),
    UserModule,
    AuthModule,
    CompanyModule,
    LocalModule,
    ResponsibleModule,
    TicketModule
  ],
  controllers: [AppController],
  providers: [AppService, AuthService, JwtService],
})
export class AppModule {}
