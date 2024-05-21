import { Request , Response } from "express"
import { createAppoiment, getAppoimentServices } from "../services/appoimentServices"


export const getAppoiment= async(req:Request,res:Response)=>{

    res.send("obtenemos todos los turnos")
}
export const getAppoimentid= async(req:Request,res:Response)=>{

    res.send("obtenemos turnos x id")
}
export const agendarAppoiment= async(req:Request,res:Response)=>{
const {data,time,status}=req.body
const newAppoiment= await createAppoiment({

    date,
    time,
    status
});
}
export const cancelAppoiment= async(req:Request,res:Response)=>{

    res.send("cancelar un turno")
}


