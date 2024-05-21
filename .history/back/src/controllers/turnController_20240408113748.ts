import { Request , Response } from "express"


export const geTurn= async(req:Request,res:Response)=>{

    res.send("obtenemos todos los turnos")
}