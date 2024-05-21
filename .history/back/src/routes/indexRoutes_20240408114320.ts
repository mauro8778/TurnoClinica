import { Router } from "express";
import userRoutes from "./userRoutes";
import turnRoutes from "./turnRoutes";

const router = Router();

router.use("/users",userRoutes);
router.use("/turns",turnRoutes
)

export default router;