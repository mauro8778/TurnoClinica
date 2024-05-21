import { request , response } from "express";



export const getUsers=( req:Request , res:Response )=>{

    res.send("obtener el listado de todos los usuarios");
}