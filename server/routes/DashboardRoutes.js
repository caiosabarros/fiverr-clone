import { Router } from "express";

import { verifyToken } from "../middlewares/AuthMiddleware.js";
import { getPosterData } from "../controllers/DashboardController.js";

export const dashboardRoutes = Router();

dashboardRoutes.get("/poster", verifyToken, getPosterData);
