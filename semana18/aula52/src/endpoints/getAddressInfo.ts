import { Request, Response } from "express";
import { address } from "../types/address";
import { getAddressByCep } from "../services/addressManager";

export async function getAddressInfo(req: Request, res:Response) {
    let errorCode: number = 400
    try {
        const cep = req.params.cep;
        if(isNaN(Number(req.params.cep)) || req.params.cep.includes("-")){
            errorCode = 422
            throw new Error("Somente valores númericos.")
        }

        const address: address = await getAddressByCep(cep)

        res.status(200).send(address)
        
    } catch (error) {
        res.status(errorCode).send({message: error.message})
    }
}