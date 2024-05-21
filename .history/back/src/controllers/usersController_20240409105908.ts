import { Request , Response } from "express";
import { createUserServices, getUserServices } from "../services/userServices";
import iUsers from "../interface/iUsers";



export const getUsers = async ( req:Request , res:Response )=>{

    const users: iUsers[] = await getUserServices();
    res.status(200).json(users)
}

export const getUsersID=( req:Request , res: Response )=>{

    res.send("obtener solo el id del usuario");
}

export const postRegister = async( req:Request, res:Response )=>{

    const{name,email,birthdate,nDni,credentialsId}
    const newUser:iUsers=await createUserServices();
    res.status(201).json(newUser)
}