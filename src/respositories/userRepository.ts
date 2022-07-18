import { users } from "@prisma/client"
import prisma from "../config/database.js"

export type NewUser = Omit<users, "id" | "createdAt">;

const createUser =async (newUser: NewUser) => {
	await prisma.users.create({
		data: newUser
	})
}

const findByEmail =async (email: string) => {
	const user = await prisma.users.findUnique({
		where: {
			email
		}
	})

	return user
}

export {
	findByEmail,
	createUser,
}