import credentialDtos from "../dtos/credentialDtos";
import iCredential from "../interface/iCredential";

const credential:iCredential[]=[];

let credentialid : number =1;

export const createCredential = async( credentialData : credentialDtos):Promise<number>=>{

const newcredential:iCredential={
   id:credentialid++,
   username:credentialData.username,
   password:credentialData.password
}
credential.push(newcredential)
return newcredential.id;
}