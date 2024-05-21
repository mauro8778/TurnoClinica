import { Request , Response } from "express"


export const getAppoiment= async(req:Request,res:Response)=>{

    res.send("obtenemos todos los turnos")
}
export const getAppoimentid= async(req:Request,res:Response)=>{

    res.send("obtenemos turnos x id")
}
export const agendarAppoiment= async(req:Request,res:Response)=>{

    res.send("agendar un turno")
}
export const cancelAppoiment= async(req:Request,res:Response)=>{

    res.send("cancelar un turno")
}


