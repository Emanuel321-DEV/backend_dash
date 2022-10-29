import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseUUIDPipe, Post, Put, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { LocalService } from './local.service';
import { CreateLocalDTO, UpdateLocalDTO } from './models/local.dtos';
import { LocalEntity } from './models/local.entity';

@Controller('local')
@UseGuards(AuthGuard('jwt'))
export class LocalController  {
    constructor(
        private readonly localService: LocalService
    ){}

    @Post()
    async add(@Body() data: CreateLocalDTO): Promise<LocalEntity> {
        return await this.localService.add(data);
    }


    @Get()
    async listAll(): Promise<LocalEntity[]> {
        return await this.localService.listAll()
    }

    @Get(':id')
    async listOne(@Param('id', new ParseUUIDPipe()) id: string): Promise<LocalEntity> {
        return await this.localService.listOne(id);
    }

    @Put(':id')
    async update(@Param('id', new ParseUUIDPipe()) id: string, @Body() data: UpdateLocalDTO): Promise<LocalEntity> {
        return await this.localService.update(id, data);
    }

    @Delete(':id')
    @HttpCode(HttpStatus.NO_CONTENT)
    async destroy(@Param('id') id: string): Promise<void> {
        await this.localService.destroy(id)
    }
}
