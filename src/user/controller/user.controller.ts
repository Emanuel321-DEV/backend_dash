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

    @Get(':email')
    async findOneById(@Param('email') email: string ): Promise<CreateUserDTO> {
        return await this.userService.findOneByEmail(email);
    }
    
}
