import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import {fetchUser} from './userAPI'

const initialState = {
	value: 0,
	status: "idle",
}

export const signup = createAsyncThunk("user/signup", async (user) => {
	const response = await signup(user)
	return response.data
})

export const userSlice = createSlice({
    name : 'user',
    reducers:{
        signup: (state) => {
            state.user
        }
    }
})