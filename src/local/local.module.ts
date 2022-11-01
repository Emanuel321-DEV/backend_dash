import { Module } from '@nestjs/common';

import { TypeOrmModule } from '@nestjs/typeorm';
import { LocalEntity } from './models/local.entity';
import { LocalService } from './local.service';
import { LocalController } from './local.controller';
import { ConfigModule } from '@nestjs/config';
import { TicketModule } from 'src/ticket/ticket.module';

@Module({
    imports: [
      TypeOrmModule.forFeature([LocalEntity]),
    ],
    providers: [LocalService],
    controllers: [LocalController],
    exports: [LocalService]
})

export class LocalModule {}
