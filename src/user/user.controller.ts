import { Body, Controller, Delete, Get, Param, ParseUUIDPipe, Post, Put, Req, Res, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { CreateUserDTO } from './models/user.dto';
import { UserService } from './user.service';

@Controller('user')
@UseGuards(AuthGuard('jwt'))
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
