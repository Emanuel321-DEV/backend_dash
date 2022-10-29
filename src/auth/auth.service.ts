import { Injectable } from '@nestjs/common';
import { compare, compareSync } from 'bcrypt';
import { UserEntity } from 'src/user/models/user.entity';
import { UserService } from 'src/user/service/user.service';

@Injectable()
export class AuthService {
    constructor(private userService: UserService){}


    async validateUser(email: string, password: string){
        let user: UserEntity;
    
        try {  
            user = await this.userService.findOneByEmail(email);

        } catch(error){
            return null;
        } 

        const passwordMatch = compareSync(password, user.password);

        if(!passwordMatch){
            return null;
        }

        return user;
        
    }



}
