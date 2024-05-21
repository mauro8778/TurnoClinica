import { Request , Response } from "express";



export const getUsers=( req:Request , res:Response )=>{

    res.send("obtener el listado de todos los usuarios");
}

export const getUsersID=( req:Request , res: Response )=>{

    res.send("obtener solo el id del usuario");
}

export const postRegister=( req:Request, res:Response )=>{

    res.send("se retistro 1 nuevo usuario");

}

export const postLoguin=( req :Request, res:Response )=>{

    res.send("se logueo el usuario");
}