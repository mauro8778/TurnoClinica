import credentialDtos from "../dtos/credentialDtos";
import iCredential from "../interface/iCredential";

const credential:iCredential[]=[];

let credentialid : number =1;

export const createCredentialServices = async( credentialData : credentialDtos):Promise<number>=>{

const newcredential:iCredential={
   id:credentialid++,
   username:credentialData.username,
   password:credentialData.password
}
credential.push(newcredential)
return newcredential.id;
}
export const checkCredentialServices= async(credentialData:credentialDtos):Promise<number>=>{
const{username,password}=credentialData
const foundcredential= credential.find(
    (credential)=> credential.username=== username && credential.password===password
)
if(foundcredential&&foundcredential.username===username && foundcredential.password===password){
return foundcredential.id
}else{
    throw Error("credencial incorrecta");
}
};
