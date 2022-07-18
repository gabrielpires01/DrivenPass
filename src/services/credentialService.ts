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

export {
	createCredential
}