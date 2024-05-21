import { Router } from "express";
import { getUsers, getUsersID, postLoguin, postRegister } from "../controllers/usersController";


const router = Router();

router.get("/",getUsers);

router.get("/:id",getUsersID);
router.post("/register",postRegister);
router.post("/login",postLoguin);

export default router;