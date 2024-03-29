import Joi from "joi";
import { NewUser } from "../respositories/userRepository.js";

export const newUserSchema = Joi.object<NewUser>({
	email: Joi.string().email().required(),
	password: Joi.string().min(10).required()
})