import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import * as authRepository from "../respositories/authRepository.js"
import errorsFunc from "../utils/errorUtil.js";

const validateToken =async (req:Request, res: Response, next: NextFunction) => {
	let data;
	const auth= (req.headers["authorization"] || req.headers["authorization"]) as string;
	const token = auth?.replace("Bearer ", "")

	if(!token) errorsFunc("forbidden")

	try {
		data = jwt.verify(token, process.env.JWT_SECRET)
	} catch (err) {
		errorsFunc("not-found")
	}

	const session = await authRepository.getSession(token);
	if (!session) errorsFunc("not-found")
	
	res.locals.user = data;
	next();
}

export default validateToken