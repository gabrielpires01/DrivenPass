import { Router } from "express";
import { createUser } from "../controllers/usersController.js";
import { validateSchema } from "../middlewares/validateSchemas.js";
import { newUserSchema } from "../schemas/userSchema.js";

const userRouter = Router();

userRouter.post("/signup", validateSchema(newUserSchema), createUser)

export default userRouter;