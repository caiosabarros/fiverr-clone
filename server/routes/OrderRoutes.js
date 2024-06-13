import { Router } from "express";

import { verifyToken } from "../middlewares/AuthMiddleware.js";
import {
  confirmOrder,
  createOrder,
  getPosterOrders,
  getTaskerOrders,
} from "../controllers/OrdersControllers.js";

export const orderRoutes = Router();

orderRoutes.post("/create", verifyToken, createOrder);
orderRoutes.put("/success", verifyToken, confirmOrder);
orderRoutes.get("/get-buyer-orders", verifyToken, getTaskerOrders);
orderRoutes.get("/get-seller-orders", verifyToken, getPosterOrders);
