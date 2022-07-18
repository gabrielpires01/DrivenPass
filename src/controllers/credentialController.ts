import { Request, Response } from "express";
import { CrendentialsData } from "../respositories/credentialRepository.js";
import * as credentialService from "../services/credentialService.js"

const createCredential =async (req:Request, res:Response) => {
	const credential: CrendentialsData = req.body;
	const user = res.locals.user;
	
	await credentialService.createCredential({...credential, userId: user.id});

	return res.sendStatus(201)
}

export {
	createCredential,
}