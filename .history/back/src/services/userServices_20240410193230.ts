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

export const createUserServices=async(params: userDtos)=>{

    const newCredential: credential = await createCredentialServices({
        username: params.username,
        password: params.password,
      });
      const newUser = {
        name: params.name,
        email: params.email,
        birthdate: params.birthdate,
        nDni: params.nDni
      }
      const userCreated = userModel.create(newUser)
      
    userCreated.credential = newCredential;
    userModel.save(userCreated)
    return userCreated;

}
    