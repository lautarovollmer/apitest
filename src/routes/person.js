import { Router } from "express";
import personController from "../controllers/person_controller.js";

const router = Router();

//CREATE PERSON
router.post("/", personController.createPerson);
//GET ALL PERSONS
router.get("/", personController.getAllPerson);
//GET PERSON BY ID
router.get("/:id", personController.getPersonById);

export default router;
