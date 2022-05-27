import { Router } from "express";
import orderControllers from "../controllers/orders_controller.js";

const router = Router();

//CREATE ORDER
router.post("/", orderControllers.createOrder);
//ASSIGNED ORDER
router.put("/:id", orderControllers.assignedOrder);
//GET ALL ORDERS
router.get("/", orderControllers.getAllOrders);
//GET ORDER BY ID
router.get("/:id", orderControllers.getOrderById);

export default router;
