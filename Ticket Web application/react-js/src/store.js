import { configureStore } from "@reduxjs/toolkit"
import authReducer from "./components/auth/authSlice"
import messageReducer from "./components/message/messageSlice"
import ticketReducer from "./components/Ticket/ticket"

const reducer = {
	auth: authReducer,
	message: messageReducer,
	ticket: ticketReducer,
}

const store = configureStore({
	reducer: reducer,
	devTools: true,
})

export default store
