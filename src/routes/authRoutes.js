import { Router } from "express";
import { authMiddleware } from "../middlewares/authMiddleware.js";

import authController from "../controllers/authController.js";

const authRouter = Router();

authRouter.post("/signup", authController.signup);
authRouter.post("/signin", authController.signin);
authRouter.get("/me", authMiddleware, authController.userLogged)

export default authRouter;