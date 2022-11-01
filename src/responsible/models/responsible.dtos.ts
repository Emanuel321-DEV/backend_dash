import { IsNotEmpty, IsOptional } from "class-validator";
import { CompanyEntity } from "src/company/models/company.entity";
import { LocalEntity } from "src/local/models/local.entity";

export class CreateResponsibleDTO {

    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    telephone: string;

    @IsNotEmpty()
    cep: string;

    @IsNotEmpty()
    houseNumber: string;

    @IsOptional()
    company ?: CompanyEntity;

    @IsOptional()
    local ?: LocalEntity;


}


export class UpdateResponsibleDTO extends CreateResponsibleDTO{
}