import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { from, Observable } from 'rxjs';
import {  Repository } from 'typeorm';
import { runInThisContext } from 'vm';
import { UserEntity } from '../models/user.entity';
import { CreateUserDTO } from '../models/user.dto';

interface FindOneOptions {
    id ?: string;
    email ?: string;
}

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(UserEntity)
        private readonly usersRepository: Repository<UserEntity>
    ){}

    

    async add(user: CreateUserDTO): Promise<UserEntity> {
        const createUser = this.usersRepository.create(user);
        return await this.usersRepository.save(createUser);
    }

    async findALl(): Promise<UserEntity[]> {
        return await this.usersRepository.find({
            select: ['id', 'email', 'createdAt', 'deletedAt', 'updatedAt'] // Nao retornara a senha
        })
    }

    async findOneById(id: string){
        try {
            return await this.usersRepository.findOneOrFail({ where: {
                id
            }});
        }
        catch(error){
            throw new NotFoundException(error.message)
        }

    }
}
