import { Request , Response } from "express";
import { createUserServices, getUserServices, getUserServicesID } from "../services/userServices";
import iUsers from "../interface/iUsers";
import userDtos from "../dtos/userDtos";



export const getUsers = async ( req:Request , res:Response )=>{

    const users: iUsers[] = await getUserServices();
    res.status(200).json(users)
}

export const getUsersID=async ( req:Request , res: Response )=>{
    try {
        const { id } = req.params;
        const usersID: iUsers = await getUserServicesID(Number(id));
        res.status(200).json(usersID);
      } catch (error: any) {
        res.status(400).json({ message: error.message });
      }
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

export const login = (req: Request, res: Response) => {
    res.send("Se acaba de loguear un usuario");
  };