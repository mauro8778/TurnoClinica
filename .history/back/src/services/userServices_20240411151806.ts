import { AppDataSource, userModel,credentialModel } from "../config/data-source";
import credentialDtos from "../dtos/credentialDtos";
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
    if (!user) {
        throw new Error(`No existen usuarios con el ID ${id}`);
    }

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
export const loguinUserServices=async(params:credentialDtos)=>{
    
    const { username, password } = params; 
    const credential = await credentialModel.findOne({ where: {username} });
   
    if (!credential || credential.password !== password) {
        throw new Error('Credenciales inválidas');}

        const user = await userModel.findOne({ where: { id: credential.id }, relations: ['credential'] });

        if (!user) {
            throw new Error('Usuario no encontrado');
        }
    
        // Devolver el usuario
        return user;



}