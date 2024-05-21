import credentialDtos from "../dtos/credentialDtos";
import iCredential from "../interface/iCredential";

const credential:iCredential[]=[];

let credentialid : number =1;

export const createCredential = async( credentialData : credentialDtos)=>{

const newcredential:iCredential={
   id:credentialid++,
   username:credentialData.username,
   password:credentialData.password
}

}