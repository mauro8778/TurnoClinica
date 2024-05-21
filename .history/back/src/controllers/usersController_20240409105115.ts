import { Request , Response } from "express";
import { getUserServices } from "../services/userServices";
import iUsers from "../interface/iUsers";



export const getUsers = async ( req:Request , res:Response )=>{

    const users:iUsers[]= await getUserServices();
    res.status(200).json(users)
}

export const getUsersID=( req:Request , res: Response )=>{

    res.send("obtener solo el id del usuario");
}

export const postRegister=( req:Request, res:Response )=>{

    res.send("se retistro 1 nuevo usuario");

}