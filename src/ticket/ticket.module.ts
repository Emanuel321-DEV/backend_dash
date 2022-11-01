import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TicketEntity } from './models/ticket.entity';
import { TicketService } from './ticket.service';
import { TicketController } from './ticket.controller';
import { LocalModule } from 'src/local/local.module';

@Module({
    imports: [
      TypeOrmModule.forFeature([TicketEntity]),
      LocalModule
    ],
    providers: [TicketService],
    controllers: [TicketController],
})

export class TicketModule {}
