import axios from "axios"

const register = async (username, email, password) => {
	try {
		return await axios.post(process.env.REACT_APP_API + "user/signup", {
			username,
			email,
			password,
		})
	} catch (error) {
		return error.response.data
	}
}

const login = async (email, password) => {
	const response = await axios.post(process.env.REACT_APP_API + "user/signin", {
		email,
		password,
	})
	if (response.data.data.accessToken) {
		localStorage.setItem("user", JSON.stringify(response.data.data))
	}
	return response.data
}

const logout = () => {
	localStorage.removeItem("user")
}

const authService = {
	register,
	login,
	logout,
}

export default authService
