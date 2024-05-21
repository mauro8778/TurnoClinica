import createCredentialdtos form "./createCredentialdtos";
import iCredential from "../interface/iCredential";

let id: number=6;

const credential=iCredential[]=[
{id:1,username:"mauro",password:"12345"},
{id:2,username:"mauro1",password:"12345"},
{id:3,username:"mauro2",password:"12345"},
{id:4,username:"mauro3",password:"12345"},
{id:5,username:"mauro4",password:"12345"},

]
export const createCredential= async (createCredentialdtos:createCredentialdtos):promise<number>=>{
    const newCredential: idcredential={

            id,
            username:createCredentialdtos.username,
            password:createCredentialdtos.password

    }
    credential.push(newCredential)
}

