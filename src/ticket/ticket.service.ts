import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ResponsibleEntity } from 'src/responsible/models/responsible.entity';
import { Repository, UpdateResult } from 'typeorm';
import { CreateTicketDTO, UpdateTicketDTO } from './models/ticket.dto';
import { TicketEntity } from './models/ticket.entity';

@Injectable()
export class TicketService {
    
    constructor(
        @InjectRepository(TicketEntity)
        private readonly ticketRepository: Repository<TicketEntity>
    ){}

    
    async add(data: CreateTicketDTO): Promise<TicketEntity> {


        const ticket = {
            title: data.local.name,
            createdBy: data.createdBy,
            receivedBy: data.receivedBy,
            status: data.status,
            local: data.local
        }

        const createTicket = await this.ticketRepository.create(ticket);

        const ticketUpdate = {
            ...createTicket,
            title: `${createTicket.title} - ${createTicket.id} `
        };


        return await this.ticketRepository.save(ticketUpdate);

    }
    
    async listAll(): Promise<TicketEntity[]> {
        return  await this.ticketRepository.find({relations: ['local']});
    }
    
    async listOne(id: string): Promise<TicketEntity> {
        const ticket = await this.ticketRepository.findOneOrFail({
            where: { id } 
        });

        return ticket;
    }
    
    async update(id: string, data: UpdateTicketDTO): Promise<TicketEntity> {
        
        const ticket = await this.ticketRepository.findOneOrFail({
            where: { id },
            relations: ['local']
        });
        

        const updateTicket = {
            ...ticket,
            status: data.status,
            receivedBy: data.receivedBy
        }

        await this.ticketRepository.merge(ticket, updateTicket);

        return await this.ticketRepository.save(ticket);
    }
    
    async destroy(id: string) {

        await this.ticketRepository.findOneOrFail({
            where: { id } 
        });

        return await this.ticketRepository.softDelete({ id });


    }

}
