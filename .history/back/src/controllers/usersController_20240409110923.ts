import { Request , Response } from "express";
import { createUserServices, getUserServices } from "../services/userServices";
import iUsers from "../interface/iUsers";
import userDtos from "../dtos/userDtos";



export const getUsers = async ( req:Request , res:Response )=>{

    const users: iUsers[] = await getUserServices();
    res.status(200).json(users)
}

export const getUsersID=( req:Request , res: Response )=>{

    res.send("obtener solo el id del usuario");
}

export const postRegister = async( req:Request, res:Response )=>{
    try {
        const {name, email, username, password, birthdate, nDni}: userDtos = req.body;
        const user: iUsers = await createUserServices({name, email, username, password, birthdate, nDni})
        res.status(200).json(user);
    } catch (error: any) {
        res.status(400).json({ message: error.message });
    }
}