import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateLocalDTO, UpdateLocalDTO } from './models/local.dtos';
import { LocalEntity } from './models/local.entity';

@Injectable()
export class LocalService {
    constructor(
        @InjectRepository(LocalEntity)
        private readonly localRepository: Repository<LocalEntity>
    ){}

    async add(data: CreateLocalDTO): Promise<LocalEntity>{
        const local = await this.localRepository.create(data);
        return await this.localRepository.save(local);
    }

    async listAll(): Promise<LocalEntity[]>{
        const local = await this.localRepository.find();
        return local;
    }


    async listOne(id: string): Promise<LocalEntity>{
        
        const local = await this.localRepository.findOneOrFail({
            where: { id } 
        });

        return local;
    }


    async update(id: string, data: UpdateLocalDTO): Promise<LocalEntity>{
        
        const local = await this.localRepository.findOneOrFail({
            where: { id } 
        });

        await this.localRepository.merge(local, data);

        return await this.localRepository.save(local)
    }


    async destroy (id: string){
        
        await this.localRepository.findOneOrFail({
            where: { id } 
        });

        return await this.localRepository.softDelete({ id });

    }
    


}
