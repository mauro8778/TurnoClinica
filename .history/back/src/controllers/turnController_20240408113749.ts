import { Request , Response } from "express"


export const getTurn= async(req:Request,res:Response)=>{

    res.send("obtenemos todos los turnos")
}