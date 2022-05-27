import { Router } from "express";
import userControllers from "../controllers/user_controller.js";

const router = Router();

//REGISTER USER
router.post("/register", userControllers.register);
//LOGIN USER
router.post("/login", userControllers.login);

export default router;
