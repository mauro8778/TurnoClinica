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

        appoiments:true,
        credential:true
    }
});

return users
}
export const getUserServicesID = async ( id : number ):Promise<user|null> => {

    const user= await userModel.findOne({
        where: { id },
        relations: ['credential','appoiments']
    })
    if (!user) {
        throw new Error(`No existen usuarios con el ID ${id}`);
    }

    return user
}

export const createUserServices = async(params: userDtos):Promise<user>=>{
    try {
       
        if (!params.username || !params.password || !params.email || !params.birthdate || !params.nDni) {
            throw new Error('Los datos proporcionados son incorrectos');
        }
    
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
}};
export const loguinUserServices=async(params:credentialDtos)=>{
    
    const { username, password } = params; 
    const credential = await credentialModel.findOne({ where: {username} });
   
    if (!credential) {
         const error = new Error('Usuario no encontrado');
        (error as any).statusCode = 400;  throw error;
      }
    
      if (credential.password !== password) {
      const error = new Error('Contraseña incorrecta');
        (error as any).statusCode = 403; throw error;
      }
    
      
      const user = await userModel.findOne({ where: { id: credential.id }, relations: ['credential'] });
    
      if (!user) {
        
        const error = new Error('Error al encontrar el usuario');
        (error as any).statusCode = 500; 
        throw error;
      }
    
      return user;

}