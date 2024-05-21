import { Router } from "express";

const router = Router();

router.get("/",( req , res )=>{

    res.send("obtener el listado de todos los usuarios");
});

export default router;