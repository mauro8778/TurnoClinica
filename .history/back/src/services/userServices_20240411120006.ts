import { AppDataSource, userModel } from "../config/data-source";
import userDtos from "../dtos/userDtos";
import { appoiments } from "../entities/appoiments";
import { credential } from "../entities/credential";
import { user } from "../entities/user";
import { createCredentialServices } from "./credentialServices";

const users:user[]=[];
let userID:number =1

export const getUserServices=async():Promise<user[]> => {

const users = await userModel.find({

    relations:{
        appoiments:true
    }
});

return users
}
export const getUserServicesID = async ( id : number ):Promise<user|null> => {

    const user= await userModel.findOneBy({
        id
    })
    return user
}

export const createUserServices = async(params: userDtos):Promise<user>=>{

    try{
        const newCredential: credential = await createCredentialServices({
            username: params.username,
            password: params.password,
          });

    const user = await userModel.create(params);

    user.credential=newCredential;
    
    await userModel.save(user)
   
    return user
}catch(error){
    console.error("Error al crear usuario:", error);
        throw error;
}
}
    