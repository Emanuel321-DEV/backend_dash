import { IsNotEmpty } from "class-validator";

export class CreateResponsibleDTO {

    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    telephone: string;

    @IsNotEmpty()
    cep: string;

    @IsNotEmpty()
    houseNumber: string;


}


export class UpdateResponsibleDTO {

    @IsNotEmpty()
    id: string;

    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    telephone: string;

    @IsNotEmpty()
    cep: string;

    @IsNotEmpty()
    houseNumber: string;

}