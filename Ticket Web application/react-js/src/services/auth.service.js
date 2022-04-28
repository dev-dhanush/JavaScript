import axios from "axios"

const API_URL = "http://localhost:3000/api/user/"

const register = async (username, email, password) => {
	try {
		return await axios.post(API_URL + "signup", {
			username,
			email,
			password,
		})
	} catch (error) {
		console.log(error.response.data)
		return error.response.data
	}

	// user.catch((error) => console.log(error))
}

const login = async (email, password) => {
	const response = await axios.post(API_URL + "signin", {
		email,
		password,
	})
	console.log(response)
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
