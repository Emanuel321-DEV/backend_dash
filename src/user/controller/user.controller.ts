import { Body, Controller, Delete, Get, Param, ParseUUIDPipe, Post, Put, Req, Res } from '@nestjs/common';
import { CreateUserDTO } from '../models/user.dto';
import { UserService } from '../service/user.service';

@Controller('user')
export class UserController {

    constructor(
        private readonly userService: UserService
    ){}

    @Post()
    async add(@Body() user: CreateUserDTO): Promise<CreateUserDTO> {
        return await this.userService.add(user);
    }


    @Get()
    async findAll(): Promise<CreateUserDTO[]>{
        return await this.userService.findALl()
    }

    @Get(':id') // new ParseUUIDPipe === verifica se o id eh um UUID de fato, se nao for é retornado um erro
    async findOneById(@Param('id') id: string ): Promise<CreateUserDTO> {
        return await this.userService.findOneById(id);
    }
    
}
