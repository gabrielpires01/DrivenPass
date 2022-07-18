import { Request, Response } from "express";
import { CrendentialsData } from "../respositories/credentialRepository.js";
import * as credentialService from "../services/credentialService.js"

const createCredential =async (req:Request, res:Response) => {
	const credential: CrendentialsData = req.body;
	const user = res.locals.user;
	
	await credentialService.createCredential({...credential, userId: user.id});

	return res.sendStatus(201)
}

const getOneCredential =async (req:Request, res:Response) => {
	const {id} = req.params;

	const credential = await credentialService.getSingleCredential(Number(id));

	return res.send(credential)
}

const getAllCredential =async (req:Request, res:Response) => {
	const user = res.locals.user

	const credentials = await credentialService.getAllUserCredentials(user.id)

	return res.send(credentials)
}

export {
	createCredential,
	getAllCredential,
	getOneCredential
}