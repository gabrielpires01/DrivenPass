import prisma from "../config/database.js"

const insertSession =async (token: string, id: number) => {
	await prisma.sessions.create({
		data: {
			token,
			userId: id
		}
	})
}

export {
	insertSession,
}