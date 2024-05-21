import { appoimentModel, userModel } from "../config/data-source";
import appoimentDtos from "../dtos/appoimentDtos";
import {  appoiments } from "../entities/appoiments";
import iAppoiment from "../interface/iAppoiment"
const appoiment:appoiments[]=[];
let turnid:number=1;

export const getAppoimentServices=async():Promise<appoiments[]> => {

const users = await appoimentModel.find({

    relations:{
        user:true
    }
});

return users
}
export const getAppoimentServicesID = async ( id:number):Promise<appoiments|null> => {

    const user= await appoimentModel.findOneBy({
        id
    })
    return user
}

export const createAppoiment = async (params : appoimentDtos ):Promise<appoiments>=>{

    const newappoiment = await appoimentModel.create(params)
    const result = await appoimentModel.save(newappoiment)
    

    const user= await userModel.findOneBy({

        id: params.userId
    })

    if(user){

        newappoiment.user=user;
        appoimentModel.save(newappoiment)
    }

    return newappoiment


}