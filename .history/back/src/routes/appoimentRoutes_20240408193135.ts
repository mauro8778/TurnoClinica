import { Router } from "express";
import { agendarAppoiment, cancelAppoiment, getAppoiment, getAppoimentid } from "../controllers/appoimentController";


const router=Router();
router.get("/",getAppoiment);
router.get("/:id",getAppoimentid);
router.post("/agendar",agendarAppoiment);
router.put("/cancel",cancelAppoiment);

export default router;