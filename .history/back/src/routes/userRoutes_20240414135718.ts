import { Router } from "express";
import { getUsers, getUsersID, postLogin, postRegister } from "../controllers/usersController";
import { loguinUserServices } from "../services/userServices";
import { loguinError } from "../middlewares/errorloguin";


const router = Router();

router.get("/",getUsers);
router.get("/:id",getUsersID);
router.post("/register",postRegister);
router.post("/loguin",postLogin);


export default router;