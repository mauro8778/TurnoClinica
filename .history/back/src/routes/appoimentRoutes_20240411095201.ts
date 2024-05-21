import { Router } from "express";
import { agendarAppoiment, getAppoiment, getAppoimentid } from "../controllers/appoimentController";


const router=Router();
router.get("/",getAppoiment);
router.get("/:id",getAppoimentid);
router.post("/agendar",agendarAppoiment);

export default router;