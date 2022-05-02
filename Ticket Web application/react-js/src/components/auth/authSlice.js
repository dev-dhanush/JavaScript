import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { setMessage } from "../message/messageSlice"

import AuthService from "../auth/auth.service"

const user = JSON.parse(localStorage.getItem("user"))

export const authHeader = () => {
	const user = JSON.parse(localStorage.getItem("user"))

	if (user && user.accessToken) {
		return { Authorization: "Bearer " + user.accessToken }
	} else {
		return {}
	}
}


export const register = createAsyncThunk("auth/register", ({ username, email, password }, thunkAPI) => {
	AuthService.register(username, email, password).then((data) => {
		if (data.data) {
			thunkAPI.dispatch(setMessage(data.data.message))
			return data.data
		} else {
			thunkAPI.dispatch(setMessage(data[Object.keys(data)[0]]))
			return thunkAPI.rejectWithValue()
		}
	})
})

export const login = createAsyncThunk("auth/login", async ({ username, password }, thunkAPI) => {
	try {
		const data = await AuthService.login(username, password)
		return { user: data }
	} catch (error) {
		thunkAPI.dispatch(setMessage(error.toString()))
		return thunkAPI.rejectWithValue()
	}
})

export const logout = createAsyncThunk("auth/logout", () => {
	return AuthService.logout()
})

const initialState = user ? { isLoggedIn: true, user } : { isLoggedIn: false, user: null }

const authSlice = createSlice({
	name: "auth",
	initialState,
	extraReducers: {
		[register.fulfilled]: (state, action) => {
			state.isLoggedIn = false
		},
		[register.rejected]: (state, action) => {
			state.isLoggedIn = false
		},
		[login.fulfilled]: (state, action) => {
			state.isLoggedIn = true
			state.user = action.payload.user
		},
		[login.rejected]: (state, action) => {
			state.isLoggedIn = false
			state.user = null
		},
		[logout.fulfilled]: (state, action) => {
			state.isLoggedIn = false
			state.user = null
		},
	},
})

const { reducer } = authSlice
export default reducer
