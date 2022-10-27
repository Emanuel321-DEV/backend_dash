import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseUUIDPipe, Post, Put } from '@nestjs/common';
import { CompanyService } from './company.service';
import { CreateCompanyDTO, UpdateCompanyDTO } from './models/company.dtos';

@Controller('company')
export class CompanyController {

    constructor(private readonly companyService: CompanyService){}

    @Post()
    async add(@Body() data: CreateCompanyDTO){
        return await this.companyService.add(data)
    }


    @Get()
    async listAll(){
        return await this.companyService.listAll()
    }

    @Get(':id')
    async listOne(@Param('id') id: string){
        return await this.companyService.listOne(id)
    }


    @Put(':id')
    async update(@Param('id', new ParseUUIDPipe()) id: string, @Body() data: UpdateCompanyDTO){
        return await this.companyService.update(id, data);
    }

    @Delete(':id')
    @HttpCode(HttpStatus.NO_CONTENT)
    async destroy(@Param('id', new ParseUUIDPipe()) id: string){
        await this.companyService.destroy(id);
    }

}
