import { IsEmail, IsNotEmpty, Matches } from 'class-validator'
import { MessagesHelper } from 'src/helpers/messages.helper';
import { regexHelper } from 'src/helpers/regex-helper';

export class CreateUserDTO {
    
    @IsNotEmpty()
    @IsEmail({}, { message: MessagesHelper.EMAIL_MESSAGE})
    email: string;
    
    
    @IsNotEmpty()
    @Matches(regexHelper.regexPassword, { message: MessagesHelper.PASSWORD_MESSAGE}) // regex
    password: string;
}


