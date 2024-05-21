import { Router } from "express";
import { agendarturn, cancelturn, getTurn, getTurnid } from "../controllers/appoimentController";


const router=Router();
router.get("/",getTurn);
router.get("/:id",getTurnid);
router.post("/agendar",agendarturn);
router.put("/cancel",cancelturn);

export default router;