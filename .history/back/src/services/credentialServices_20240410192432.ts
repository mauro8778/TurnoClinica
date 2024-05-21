import { AppDataSource } from "../config/data-source";
import credentialDtos from "../dtos/credentialDtos";
import { credential } from "../entities/credential";
import iCredential from "../interface/iCredential";

const credentials:credential[]=[];

let credentialid : number =1;

export const createCredentialServices = async( credentialData : credentialDtos):Promise<credential>=>{

const newcredential : credential = new credential();

   newcredential.password=credentialData.password
   newcredential.username=credentialData.username
   AppDataSource.manager.save(newcredential);

return newcredential;
}
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
