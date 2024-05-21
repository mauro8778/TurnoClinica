import { Request , Response } from "express";



export const getUsers=( req , res )=>{

    res.send("obtener el listado de todos los usuarios");
}