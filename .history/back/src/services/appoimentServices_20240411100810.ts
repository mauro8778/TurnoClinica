import { appoimentModel } from "../config/data-source";
import appoimentDtos from "../dtos/appoimentDtos";
import {  appoiments } from "../entities/appoiments";
import iAppoiment from "../interface/iAppoiment"
const appoiment:iAppoiment[]=[];
let turnid:number=1;

export const getAppoimentServices=async():Promise<appoiments[]> => {

const users = await appoimentModel.find();

return users
}
export const getAppoimentServicesID = async ( id : number ) => {

    const foundUsers : appoiments | undefined = appoiment.find ( appoiment => appoiment.id === id);
    
    if( !foundUsers )
        {
            throw Error("no se encontro ningun turno con ese usuario")

        }
        return foundUsers;
}

export const createAppoiment = async (params : appoimentDtos ):Promise<appoiments>=>{

    const newappoiment = await appoimentModel.create(params)
    const result = await appoimentModel.save(newappoiment)
    return newappoiment


}