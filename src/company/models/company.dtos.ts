import { IsNotEmpty } from "class-validator";

export class CreateCompanyDTO {

    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    description: string;

    @IsNotEmpty()
    cnpj: string;

}


export class UpdateCompanyDTO extends CreateCompanyDTO {
}