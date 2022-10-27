import { IsNotEmpty } from "class-validator";

export class CreateTicketDTO {
    
    @IsNotEmpty()
    title: string;
    
    @IsNotEmpty()
    createdBy: string;
    
    @IsNotEmpty()
    receivedBy: string;

    @IsNotEmpty()
    status: string;

}

export class UpdateTicketDTO {
    
    @IsNotEmpty()
    id: string;

    @IsNotEmpty()
    title: string;
    
    @IsNotEmpty()
    createdBy: string;
    
    @IsNotEmpty()
    receivedBy: string;

    @IsNotEmpty()
    status: string;

}