import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { findAndFormatAddress } from 'src/helpers/findAndFormatAddress';
import { TicketService } from 'src/ticket/ticket.service';
import { Repository } from 'typeorm';
import { CreateLocalDTO, UpdateLocalDTO } from './models/local.dtos';
import { LocalEntity } from './models/local.entity';

@Injectable()
export class LocalService {
    constructor(
        @InjectRepository(LocalEntity)
        private readonly localRepository: Repository<LocalEntity>,
    ){}

    async add(data: CreateLocalDTO): Promise<LocalEntity>{
        
        try {
            const address = await findAndFormatAddress(data.cep, data.houseNumber);
            
            const local = {
                name: data.name,
                company: data.company,
                address: address
            }
    
    
            const createLocal = await this.localRepository.create(local);
            return await this.localRepository.save(createLocal);
        } catch(error){
            console.log(error)
        }


    }

    async listAll(): Promise<LocalEntity[]>{


        const local =  await this.localRepository.find({relations: ['company']});
        return local;
    }


    async listOne(id: string): Promise<LocalEntity>{
        
        const local = await this.localRepository.findOneOrFail({
            where: { id },
            relations: ['company']
        });

        return local;
    }


    async update(id: string, data: UpdateLocalDTO): Promise<LocalEntity>{
        
        const localExists = await this.localRepository.findOneOrFail({
            where: { id } 
        });

        const address = await findAndFormatAddress(data.cep, data.houseNumber);

        const localData = {
            name: data.name,
            company: data.company,
            address: address
        }

        await this.localRepository.merge(localExists, localData);


        // this.ticketService.add({createdBy: '', receivedBy: '', status: '', local: localExists);

        return await this.localRepository.save(localExists)
    }


    async destroy (id: string){
        
        await this.localRepository.findOneOrFail({
            where: { id } 
        });

        return await this.localRepository.softDelete({ id });

    }
    


}
