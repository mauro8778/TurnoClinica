import { Router } from "express";
import { agendarAppoiment, cancelarAppoiment, getAppoiment, getAppoimentid } from "../controllers/appoimentController";


const router=Router();
router.get("/",getAppoiment);
router.get("/:id",getAppoimentid);
router.post("/agendar",agendarAppoiment);
router.put("/cancelar",cancelarAppoiment);


export default router;