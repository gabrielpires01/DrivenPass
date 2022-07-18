import prisma from "../config/database.js"

const insertSession =async (token: string, id: number) => {
	await prisma.sessions.create({
		data: {
			token,
			userId: id
		}
	})
}

const getSession =async (token:string) => {
	const session = await prisma.sessions.findUnique({
		where: {
			token
		}
	})

	return session
}

export {
	insertSession,
	getSession,
}