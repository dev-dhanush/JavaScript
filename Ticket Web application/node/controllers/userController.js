const { register, login, all } = require("../services/auth.services")
const createError = require("http-errors")

exports.registerUser = async (req, res, next) => {
	try {
		const user = await register(req.body)
		res.status(200).json({
			status: true,
			message: "User Created successfully",
			data: user,
		})
	} catch (error) {
		next(createError(error.statusCode, error.message))
	}
}

exports.login = async (req, res, next) => {
	try {
		const data = await login(req.body)
		res.status(200).json({
			status: true,
			message: "Account login successfully",
			data,
		})
	} catch (error) {
		res.status(400).json({ error: error })
	}
}

exports.getAllUser = async (req, res, next) => {
	try {
		const user = await all()
		res.status(200).json({
			status: true,
			message: "",
			data: user,
		})
	} catch (e) {
		next(createError(e.statusCode, e.message))
	}
}

exports.signout = async (req, res, next) => {
	try {
		res.clearCookie()
		res.json({ message: "Signout success" })
	} catch (error) {}
}

exports.isAuth = (req, res, next) => {
	let user = req.profile && req.auth && req.profile._id == req.auth._id
	if (!user) {
		return res.status(403).json({
			error: "Access denied",
		})
	}
	next()
}
