const { PrismaClient } = require("@prisma/client")
const prisma = new PrismaClient({ log: ["query"], errorFormat: "pretty", rejectOnNotFound: true })
const createError = require("http-errors")
require("dotenv").config()
const bcrypt = require("bcryptjs")
const jwt = require("../utils/jwt")

// class AuthService {
exports.register = async (data) => {
	data.password = bcrypt.hashSync(data.password, 8)
	let user = await prisma.user.create({
		data: data,
	})

	data.accessToken = await jwt.signAccessToken(user)

	return data
}

exports.login = async (data) => {
	const { email, password } = data
	console.log(data)
	const user = await prisma.user.findUnique({
		where: {
			email: email,
		},
	})
	if (!user) {
		throw createError.NotFound("User not registered")
	}
	const checkPassword = bcrypt.compareSync(password, user.password)
	if (!checkPassword) throw createError.Unauthorized("Email address or password not valid")
	delete user.password
	const accessToken = await jwt.signAccessToken(user)
	return { ...user, accessToken }
}

exports.all = async () => {
	const allUsers = await prisma.user.findMany()
	return allUsers
}
// }

// module.exports = AuthService
