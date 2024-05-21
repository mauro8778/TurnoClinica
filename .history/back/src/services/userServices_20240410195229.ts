import { AppDataSource, userModel } from "../config/data-source";
import userDtos from "../dtos/userDtos";
import { credential } from "../entities/credential";
import { user } from "../entities/user";
import { createCredentialServices } from "./credentialServices";

const users:user[]=[];
let userID:number =1

export const getUserServices=async():Promise<user[]> => {

const users = await userModel.find();

return users
}
export const getUserServicesID = async ( id : number ):Promise<user|null> => {

    const user= await userModel.findOneBy({
        id
    })
    return user
}

export const createUserServices = async(params: userDtos)=>{
    const newCredential: credential = await createCredentialServices({
        username: params.username,
        password: params.password,
      });

    const user = await userModel.create(params)
    user.credential=newCredential;
    
    userModel.save(user)
   
    return user

}
    