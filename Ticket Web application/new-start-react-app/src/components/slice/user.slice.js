import { createSlice } from "@reduxjs/toolkit"
import axios from "axios"
import { useDispatch } from "react-redux"
import { setMessage } from "./message.slice"
const initialState = {
	isLoggedIn: false,
	user: null,
}

export const Register = ({ username, email, password }) => {
	const dispatch = useDispatch()
	try {
		if (!username && !email && !password) {
			return dispatch(setMessage("all fields are required.."))
		}
		return axios
			.post(process.env.REACT_APP_API + "user/signup", {
				username,
				email,
				password,
			})
			.then((data) => {
				if (data.data) {
					dispatch(setMessage(data.data.message))
					// dispatch(register_successful(data.data))
					return data.data
				} else {
					// dispatch(register_failed())
					return dispatch(setMessage(data[Object.keys(data)[0]]))
				}
			})
	} catch (error) {
		return dispatch(setMessage(error))
	}
}
// const register = async (username, email, password) => {
// 	try {
// 		return await axios.post(process.env.REACT_APP_API + "user/signup", {
// 			username,
// 			email,
// 			password,
// 		})
// 	} catch (error) {
// 		return error.response.data
// 	}
// }
export const authHeader = () => {
	const user = JSON.parse(localStorage.getItem("user"))

	if (user && user.accessToken) {
		return { Authorization: "Bearer " + user.accessToken }
	} else {
		return {}
	}
}
const isAuthenticated = () => {
	if (typeof window == "undefined") {
		return false
	}
	if (localStorage.getItem("jwt")) {
		return JSON.parse(localStorage.getItem("jwt"))
	} else {
		return false
	}
}

export const Login = async ({ email, password }) => {
	const dispatch = useDispatch()
	try {
		const response = await axios.post(
			process.env.REACT_APP_API + "user/signin",
			{
				email,
				password,
			}
		)
		console.log(response.data)
		if (response.data.data.accessToken) {
			localStorage.setItem("user", JSON.stringify(response.data.data))
		}
		// dispatch(login_successful(response.data))
		return response.data
	} catch (error) {
		// dispatch(login_failed())
		return dispatch(setMessage(error.toString()))
	}
}

// const login = async (email, password) => {
// 	try {
// 		const response = await axios.post(
// 			process.env.REACT_APP_API + "user/signin",
// 			{
// 				email,
// 				password,
// 			}
// 		)
// 		console.log(response.data)
// 		if (response.data.data.accessToken) {
// 			localStorage.setItem("user", JSON.stringify(response.data.data))
// 		}
// 		return response.data
// 	} catch (error) {
// 		console.log(error)
// 		return error
// 	}
// }

export const logout = () => {
	return localStorage.removeItem("user")
}
// const logout = () => {
// 	localStorage.removeItem("user")
// }

const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		setUser: (state, action) => {
			state.user = action.payload
			state.isLoggedIn = true
		},
		getUser: (state, action) => {
			return state.user
		},
		removeUser: (state, action) => {
			state.user = null
			state.isLoggedIn = false
		},
		login_successful: (state, action) => {
			state.user = action.payload
			state.isLoggedIn = true
		},
		login_failed: (state, action) => {
			state.user = null
			state.isLoggedIn = false
		},
		register_successful: (state, { payload }) => {
			state.user = {
				...payload.email,
				...payload.id,
				...payload.username,
				...payload.accessToken,
			}
			state.isLoggedIn = true
		},
		register_failed: (state, action) => {
			state.isLoggedIn = false
		},
	},
})

const { actions, reducers } = userSlice
export const { setUser,getUser,login_failed,login_successful,register_failed,register_successful,removeUser } = actions
export default userSlice.reducer
