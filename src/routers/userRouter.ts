import { Router } from "express";
import { createUser, login } from "../controllers/usersController.js";
import { validateSchema } from "../middlewares/validateSchemas.js";
import { newUserSchema } from "../schemas/userSchema.js";

const userRouter = Router();

userRouter.post("/signup", validateSchema(newUserSchema), createUser);
userRouter.post("/login", login);

export default userRouter;