import express from "express";
import { create, deleteTask, read, readById, update } from "../controllers/task.controller.js";
import { validateCreateTask, validateUpdateTask } from "../middlewares/Validators.js";
import checkAuth from "../middlewares/checkAuth.js"

// Instancia del enrutador
const router = express.Router();

// Rutas
router.get("/", checkAuth, read);
router.post("/", checkAuth, validateCreateTask, create);
router.get("/:id", readById);
router.put("/:id", validateUpdateTask, update);
router.delete("/:id", deleteTask);

export default router;