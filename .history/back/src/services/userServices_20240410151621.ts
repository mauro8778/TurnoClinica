import { AppDataSource, userModel } from "../config/data-source";
import userDtos from "../dtos/userDtos";
import { user } from "../entities/user";
import iCredential from "../interface/iCredential";
import iUsers from "../interface/iUsers"
import { createCredentialServices } from "./credentialServices";

const users:iUsers[]=[];
let userID:number =1

export const getUserServices=async():Promise<iUsers[]> => {

const users = await userModel.find()

return users
}
export const getUserServicesID = async ( id : number ) => {

    const foundUsers : iUsers | undefined = users.find ( user => user.id === id);
    
    if( !foundUsers )
        {
            throw Error("no se encontro ningun usuario con ese id")

        }
        return foundUsers;
}

export const createUserServices=async(params: userDtos):Promise<iUsers>=>{
const newcredential:number = await createCredentialServices({

    username:params.username,
    password:params.password
})
const newUser:iUsers={
    id:userID++,
    name:params.name,
    email:params.email,
    birthdate:params.birthdate,
    nDni:params.nDni,
    credentialsId:newcredential
}
users.push(newUser);
return newUser
}
    