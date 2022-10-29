import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseUUIDPipe, Post, Put, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { CreateTicketDTO, UpdateTicketDTO } from './models/ticket.dto';
import { TicketEntity } from './models/ticket.entity';
import { TicketService } from './ticket.service';

@Controller('ticket')
@UseGuards(AuthGuard('jwt'))
export class TicketController {

    constructor(
        private readonly ticketService: TicketService
    ){}

    @Post()
    async add(@Body() data: CreateTicketDTO): Promise<TicketEntity> {
        return await this.ticketService.add(data);
    }


    @Get()
    async listAll(): Promise<TicketEntity[]> {
        return await this.ticketService.listAll();
    }

    @Get(':id')
    async listOne(@Param('id', new ParseUUIDPipe()) id: string): Promise<TicketEntity> {
        return await this.ticketService.listOne(id);
    }

    @Put(':id')
    async update(@Param('id', new ParseUUIDPipe()) id: string, @Body() data: UpdateTicketDTO): Promise<TicketEntity> {
        return await this.ticketService.update(id, data);
    }

    @Delete(':id')
    @HttpCode(HttpStatus.NO_CONTENT)
    async destroy(@Param('id') id: string): Promise<void> {
        await this.ticketService.destroy(id);
    }
}
