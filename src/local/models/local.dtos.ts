import { IsNotEmpty } from "class-validator";
import { CompanyEntity } from "src/company/models/company.entity";

export class CreateLocalDTO {
    
    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    cep: string;

    @IsNotEmpty()
    houseNumber: string;

    @IsNotEmpty()
    company: CompanyEntity;

}


export class UpdateLocalDTO extends CreateLocalDTO {}