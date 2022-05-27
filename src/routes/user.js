import { Router } from "express";
import userControllers from "../controllers/user_controller.js";

const router = Router();

//GET ALL USERS
router.get("/", userControllers.getAllUsers);
//GET USER BY ID
router.get("/:id", userControllers.getUserById);
//UPDATE USER
router.put("/:id", userControllers.updateUser);

export default router;
