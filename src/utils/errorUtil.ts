const errorsFunc = (type: string) => {
	if (type === "bad-request") throw { type: type, status: 400, message: "Request bad fomating"}
	if (type === "dont-exist") throw { type: type, status: 401, message: "Doenst exist"}
	if (type === "forbidden") throw { type: type, status: 403, message: "Forbidden request"}
	if (type === "not-found") throw { type: type, status: 404, message: "Not Found"}
	if (type === "not-acceptable") throw { type: type, status: 406, message: "Request not acceptable"}
	if (type === "conflict") throw { type: type, status: 409, message: "conflict error"}
}

export default errorsFunc