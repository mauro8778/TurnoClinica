import { Router } from "express";
import { getUsers, getUsersID, postRegister } from "../controllers/usersController";


const router = Router();

router.get("/",getUsers);
router.get("/:id",getUsersID);
router.post("/register",postRegister);


export default router;