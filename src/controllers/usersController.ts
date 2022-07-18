import { Request, Response } from "express";
import * as userService from "../services/userService.js"

const createUser =async (req:Request, res: Response) => {
	const { name, email, password} = req.body;

	await userService.createUser({name, email, password});

	return res.sendStatus(201)
}

export {
	createUser,
}