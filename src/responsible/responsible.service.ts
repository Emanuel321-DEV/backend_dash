import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { findAndFormatAddress } from 'src/helpers/findAndFormatAddress';
import { Repository, UpdateResult } from 'typeorm';
import { CreateResponsibleDTO, UpdateResponsibleDTO } from './models/responsible.dtos';
import { ResponsibleEntity } from './models/responsible.entity';

@Injectable()
export class ResponsibleService{

    constructor(
        @InjectRepository(ResponsibleEntity)
        private readonly responsibleRepository: Repository<ResponsibleEntity>
    ){}
    
    
    async add(data: CreateResponsibleDTO): Promise<ResponsibleEntity> {
        
        const telephoneAlreadyExists = this.responsibleRepository.findOne({
            where: {
                telephone: data.telephone
            }
        })

        if(telephoneAlreadyExists){
            throw new Error("Telephone already exists. ")
        }

        const address = await findAndFormatAddress(data.cep, data.houseNumber);

        const responsible = {
            name: data.name,
            telephone: data.telephone,
            address,
            company: data.company,
            local: data.local
        }
            


        const createResponsible = await this.responsibleRepository.create(responsible);

        return await this.responsibleRepository.save(createResponsible);


    }
    
    async listAll(): Promise<ResponsibleEntity[]> {
        return await this.responsibleRepository.find();
    }
    
    async listOne(id: string): Promise<ResponsibleEntity> {
        const responsibleExists = await this.responsibleRepository.findOneOrFail({
            where: { id } 
        });

        return responsibleExists;
    }
    
    async update(id: string, data: UpdateResponsibleDTO): Promise<ResponsibleEntity> {
        const responsibleAlreadyExists = await this.responsibleRepository.findOneOrFail({
            where: { id } 
        });

        const address = await findAndFormatAddress(data.cep, data.houseNumber);

        const responsibleData = {
            name: data.name,
            telehpne: data.telephone,
            address: address
        }

        await this.responsibleRepository.merge(responsibleAlreadyExists, responsibleData);

        return await this.responsibleRepository.save(responsibleAlreadyExists)
    }
    
    async destroy (id: string){
        
        await this.responsibleRepository.findOneOrFail({
            where: { id } 
        });

        return await this.responsibleRepository.softDelete({ id });

    }
}
