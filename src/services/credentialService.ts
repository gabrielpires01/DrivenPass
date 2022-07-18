import * as credentialRepository from "../respositories/credentialRepository.js";
import errorsFunc from "../utils/errorUtil.js";
import { cryptr } from "../index.js";

const createCredential =async (credential: credentialRepository.CrendentialsData) => {
	const credentialExist = await credentialRepository.findByTitleAndId(credential.title, credential.userId);
	if(credentialExist) errorsFunc("conflict")

	const hashedPassword = cryptr.encrypt(credential.password);
	await credentialRepository.createCredential({...credential, password: hashedPassword})
	
	return 
}

// fix security problem
const getSingleCredential =async (id: number) => {
	const credential = await credentialRepository.findById(id);
	if(!credential) errorsFunc("not-found")
	
	const password = cryptr.decrypt(credential.password)
	const decryptedCredential = {...credential, password}

	return decryptedCredential
}

const getAllUserCredentials =async (userId: number) => { 
	const credentials = await credentialRepository.findAll(userId);
	if (!credentials.length) return

	const decryptedCredentials = credentials.map(item => {
		const password = cryptr.decrypt(item.password)
		const decryptedCredential = {...item, password}
		return decryptedCredential
	})

	return decryptedCredentials
}

const deleteCredential =async (id:number, userId: number) => {
	const credential = await credentialRepository.findById(id);
	if(!credential) errorsFunc("not-found")
	if(credential.userId !== userId) errorsFunc("forbidden")

	await credentialRepository.deleteCredential(id)

	return
}

export {
	createCredential,
	getSingleCredential,
	getAllUserCredentials,
	deleteCredential,
}