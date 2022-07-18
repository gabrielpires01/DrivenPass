import { credential } from "@prisma/client";
import prisma from "../config/database.js";

export type CrendentialsData = Omit<credential, "id">;

const createCredential =async (credential:CrendentialsData) => {
	await prisma.credential.create({
		data: credential
	})
	return
}

const findByTitleAndId =async (title:string, id: number) => {
	const credentials = await prisma.credential.findMany({
		where: {
			title,
			userId: id
		}
	})

	return credentials[0]
}

export {
	createCredential,
	findByTitleAndId
}