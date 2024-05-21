import { Router } from "express";
import userRoutes="./userRoutes";
const router = Router();

router.use("/users",userRoutes);