import { Router } from "express";

const router = Router();

router.get("/users",( req , res )=>{

    res.send("obtener el listado de todos los usuarios");
});

