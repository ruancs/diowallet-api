import { Router } from "express";
import transactionController from '../controllers/transactionController.js'
import { authMiddleware } from "../middlewares/authMiddleware.js";
import { validationSchemaMid } from "../middlewares/validationSchemaMid.js";
import { CreateTransaction } from "../schemas/validation/CreateTransaction.js";
const transactionRouter = Router();

transactionRouter.use(authMiddleware)

transactionRouter.post(
    "/transactions",
    validationSchemaMid(CreateTransaction),
    transactionController.create
    );

transactionRouter.get(
    "/transactions",
     transactionController.findAllByUser
    );

transactionRouter.patch(
    "/update",
        transactionController.updateTransaction
    );

transactionRouter.delete(
        "/delete",
            transactionController.deleteTransaction
        );

export default transactionRouter;