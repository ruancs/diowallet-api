import { Router } from "express";
import { authMiddleware } from "../middlewares/authMiddleware.js";

import authController from "../controllers/authController.js";
import { validationSchemaMid } from "../middlewares/validationSchemaMid.js";
import { CreateUser } from "../schemas/validation/CreateUser.js";
import { AuthUser } from "../schemas/validation/authUser.js";

const authRouter = Router();

authRouter.post("/signup", validationSchemaMid(CreateUser), authController.signup);
authRouter.post("/signin", validationSchemaMid(AuthUser), authController.signin);
authRouter.get("/me", authMiddleware, authController.userLogged)

export default authRouter;