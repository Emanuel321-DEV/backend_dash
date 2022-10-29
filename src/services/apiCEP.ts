import axios from "axios";

export const apiCEP = axios.create({
    baseURL: process.env.API_CEP_ENDPOINT
})