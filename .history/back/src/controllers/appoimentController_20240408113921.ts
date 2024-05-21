import { Request , Response } from "express"


export const getTurn= async(req:Request,res:Response)=>{

    res.send("obtenemos todos los turnos")
}
export const getTurnid= async(req:Request,res:Response)=>{

    res.send("obtenemos turnos x id")
}
export const agendarturn= async(req:Request,res:Response)=>{

    res.send("agendar un turno")
}
export const cancelturn= async(req:Request,res:Response)=>{

    res.send("cancelar un turno")
}


