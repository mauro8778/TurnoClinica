import { Request , Response } from "express"
import { createAppoiment, getAppoimentServices, getAppoimentServicesID } from "../services/appoimentServices"
import { appoiments } from "../entities/appoiments";


export const getAppoiment= async(req:Request,res:Response)=>{
    const users: appoiments[] = await getAppoimentServices();
    res.status(200).json(users)
}
export const getAppoimentid= async(req:Request,res:Response)=>{

    try {
        const { id } =  req.params;
        const appoimentid: appoiments | null = await getAppoimentServicesID(Number(id));
        res.status(200).json(appoimentid);
      } catch (error: any) {
        res.status(400).json({ message: error.message });
      }
}
export const agendarAppoiment= async(req:Request,res:Response)=>{

try{
    const {date,time,status,description}=req.body
    const newAppoiment= await createAppoiment({ date, time,status, description});
return res.status(201).json(newAppoiment)
} catch (error: any) {
    res.status(400).json({ message: error.message });
}

}


