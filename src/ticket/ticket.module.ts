import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TicketEntity } from './models/ticket.entity';

@Module({
    imports: [
      TypeOrmModule.forFeature([TicketEntity])
    ],
    providers: [],
    controllers: [],
})

export class TicketModule {}
