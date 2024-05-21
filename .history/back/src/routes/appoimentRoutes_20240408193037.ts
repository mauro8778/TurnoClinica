import { Router } from "express";
import { agendarturn, cancelturn, getTurn, getTurnid } from "../controllers/appoimentController";


const router=Router();
router.get("/",getAppoiment);
router.get("/:id",getAppoiment);
router.post("/agendar",agendarAppoiment);
router.put("/cancel",cancelAppoiment);

export default router;