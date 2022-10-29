import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseUUIDPipe, Post, Put } from '@nestjs/common';
import { CreateResponsibleDTO, UpdateResponsibleDTO } from './models/responsible.dtos';
import { ResponsibleEntity } from './models/responsible.entity';
import { ResponsibleService } from './responsible.service';

@Controller('responsible')
export class ResponsibleController {
    constructor(
        private readonly responsibleService: ResponsibleService
    ){}

    @Post()
    async add(@Body() data: CreateResponsibleDTO): Promise<ResponsibleEntity> {
        return await this.responsibleService.add(data);
    }
    
    @Get()
    async listAll(): Promise<ResponsibleEntity[]> {
        return await this.responsibleService.listAll();
    }
    
    @Get(':id')
    async listOne(@Param('id', new ParseUUIDPipe()) id: string): Promise<ResponsibleEntity> {
        return await this.responsibleService.listOne(id);
    }
    
    @Put(':id')
    async update(@Param('id', new ParseUUIDPipe()) id: string, @Body() data: UpdateResponsibleDTO): Promise<ResponsibleEntity> {
        return await this.responsibleService.update(id, data);
    }
    

    
    @Delete(':id')
    @HttpCode(HttpStatus.NO_CONTENT)
    async destroy(@Param('id') id: string): Promise<void> {
        await this.responsibleService.destroy(id)
    }

}
