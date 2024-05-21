import userDtos from "../dtos/userDtos";
import iUsers from "../interface/iUsers";


const users: iUsers[]=[]

let id: number  = 1;

export const getUsersServices = async( userData : userDtos)=>{

    const newUsers:iUsers={

        id,
        name:userData.name,
        nDni:userData.nDni,
        email:userData.email,
        credentialsId:userData.credentialsId,
        birthdate:userData.birthdate,



    }

    
}

export const getUsersIDServices = async ()=>{}

export const postRegisterServices = async()=>{}