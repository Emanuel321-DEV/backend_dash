import { apiCEP } from "src/services/apiCEP";

interface FindAddressDataProps {
    cep: string;
    logradouro: string;
    complemento: string;
    bairro: string;
    localidade: string;
    uf: string;
    ibge: string;
    gia: string;
    ddd: string;
    siafi: string;
}

interface AddressProps {
    road: string;
    neighborhood: string;
    homeNumber: string;
    city: string;
    state: string;
}


export async function findAndFormatAddress (cep: string, homeNumber: string): Promise<string> {

    try {
        
        const findAddressResponse = await apiCEP.get(`${cep}/json`);
    
        const { bairro, localidade, logradouro, uf }: FindAddressDataProps = await findAddressResponse.data;

        const addressFormated = `${logradouro}, Bairro: ${bairro}, ${homeNumber}. ${localidade} - ${uf}`


        return addressFormated;
    
    
    } catch(error){
        throw new Error(error);
    }



}