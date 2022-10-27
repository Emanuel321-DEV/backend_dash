import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCompanyDTO, UpdateCompanyDTO } from './models/company.dtos';
import { CompanyEntity } from './models/company.entity';

@Injectable()
export class CompanyService {
    constructor(
        @InjectRepository(CompanyEntity)
        private readonly companyRepository: Repository<CompanyEntity>
    ){}


    async add(data: CreateCompanyDTO): Promise<CompanyEntity>{
        const company = await this.companyRepository.create(data);
        return await this.companyRepository.save(company);
    }

    async listAll(): Promise<CompanyEntity[]>{
        const companies = await this.companyRepository.find();
        return companies;
    }


    async listOne(id: string): Promise<CompanyEntity>{
        
        const company = await this.companyRepository.findOneOrFail({
            where: { id } 
        });

        return company;
    }


    async update(id: string, data: UpdateCompanyDTO): Promise<CompanyEntity>{
        
        const company = await this.companyRepository.findOneOrFail({
            where: { id } 
        });

        await this.companyRepository.merge(company, data);

        return await this.companyRepository.save(company)
    }


    async destroy (id: string){
        
        await this.companyRepository.findOneOrFail({
            where: { id } 
        });

        return await this.companyRepository.softDelete({ id });

    }

}
