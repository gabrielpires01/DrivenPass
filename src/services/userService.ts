import * as userRepository from "../respositories/userRepository.js";
import * as authRepository from "../respositories/authRepository.js";
import errorsFunc from "../utils/errorUtil.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const createUser =async (user: userRepository.NewUser) => {
	const existUser = await userRepository.findByEmail(user.email)
	if (existUser) errorsFunc("conflict")

	const hashedPassword = bcrypt.hashSync(user.password, 10);

	await userRepository.createUser({...user, password: hashedPassword})
	return
}

const login =async (user: userRepository.NewUser) => {
	const userData = await getUser(user);

	const token = await createToken(userData.id)

	await authRepository.insertSession(token, userData.id)

	return token
}

const getUser =async (user: userRepository.NewUser) => {
	const users = await userRepository.findByEmail(user.email)
	if (!users) errorsFunc("dont-exist")

	const checkPassword = bcrypt.compareSync(user.password, users.password)
	if(!checkPassword) errorsFunc("not-acceptable");

	return users
}

const createToken =async (id: number) => {
	const data = {id}
	const jwtKey = process.env.JWT_SECRET;

	const token = jwt.sign(data, jwtKey)
	return token
}

export {
	createUser,
	login,
}