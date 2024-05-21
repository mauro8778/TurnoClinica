import { Router } from "express";
import { agendarturn, cancelturn, getTurn, getTurnid } from "../controllers/turnController";


const router=Router();
router.get("/",getTurn);
router.get("/",getTurnid);
router.post("/",agendarturn);
router.put("/",cancelturn);

export default router;