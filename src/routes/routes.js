import { Router } from "express";
import authRoutes from "./auth.js";
import personRoutes from "./person.js";
import userRoutes from "./user.js";
import orderRoutes from "./order.js";

const router = Router();

router.use("/auth", authRoutes);
router.use("/person", personRoutes);
router.use("/user", userRoutes);
router.use("/order", orderRoutes);

export default router;
