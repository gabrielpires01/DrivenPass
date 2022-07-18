import { NextFunction, Request, Response } from "express";

interface Error {
	status?: number;
	type?: string;
	message: string;
}

const errorHandler = (error: Error, req: Request, res: Response, next: NextFunction) => {
	if (error.type) return res.status(error.status).send(error.message)
	
	return res.sendStatus(500)
}

export default errorHandler