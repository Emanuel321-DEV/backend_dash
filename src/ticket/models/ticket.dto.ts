import { IsNotEmpty } from "class-validator";
import { LocalEntity } from "src/local/models/local.entity";

export class CreateTicketDTO {
    
    @IsNotEmpty()
    createdBy: string;
    
    @IsNotEmpty()
    receivedBy: string;

    @IsNotEmpty()
    status: string;

    @IsNotEmpty()
    local: LocalEntity;

}

export class UpdateTicketDTO extends CreateTicketDTO{
    
}