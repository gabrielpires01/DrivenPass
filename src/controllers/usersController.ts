import { Request, Response } from "express";
import { NewUser } from "../respositories/userRepository.js";
import * as userService from "../services/userService.js"

const createUser =async (req:Request, res: Response) => {
	const user: NewUser = req.body;

	await userService.createUser(user);

	return res.sendStatus(201)
}

const login =async (req:Request, res: Response) => {
	const user: NewUser = req.body;

	const token = await userService.login(user);

	return res.send({token})
}

export {
	createUser,
	login
}