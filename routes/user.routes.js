import express from "express";
import { createToken } from "../controllers/user.controller.js";

// Instancia del enrutador
const router = express.Router();

// Rutas
router.get("/get-token", createToken);

export default router;