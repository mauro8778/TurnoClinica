import { AppDataSource } from "../config/data-source";
import credentialDtos from "../dtos/credentialDtos";
import { credential } from "../entities/credential";

export const createCredentialServices = async (credentialData: credentialDtos): Promise<credential> => {
    try {
        const newCredential = AppDataSource.manager.create(credential, credentialData);
        const savedCredential = await AppDataSource.manager.save(newCredential);
        return savedCredential;
    } catch (error) {
        console.error("Error al crear la credencial:", error);
        throw error;
    }
};
export const checkCredentialServices= async(credentialData:credentialDtos)=>{
const{username,password}=credentialData
const foundcredential= credentials.find(
    (credential)=> credential.username=== username && credential.password===password
)
if(foundcredential&&foundcredential.username===username && foundcredential.password===password){
return foundcredential.id
}else{
    throw Error("credencial incorrecta");
}
};
