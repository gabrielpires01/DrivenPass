import * as userRepository from "../respositories/userRepository.js";
import errorsFunc from "../utils/errorUtil.js";

import bcrypt from "bcrypt";

const createUser =async (user: userRepository.NewUser) => {
	const existUser = await userRepository.findByEmail(user.email)
	if (existUser) errorsFunc("conflict")

	const hashedPassword = bcrypt.hashSync(user.password, 10);

	await userRepository.createUser({...user, password: hashedPassword})
	return
}

export {
	createUser,
}