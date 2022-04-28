import { configureStore } from "@reduxjs/toolkit"
import authReducer from "./slices/auth"
import messageReducer from "./slices/message"
import ticketReducer from "./slices/ticket"

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
