import { Router } from "express";

const router = Router();

router.get("/",);

router.get("/:id",( req , res )=>{

    res.send("obtener solo el id del usuario");
});
router.post("/register",( req , res )=>{

    res.send("se retistro 1 nuevo usuario");
});
router.post("/login",( req , res )=>{

    res.send("se logueo el usuario");
});

export default router;