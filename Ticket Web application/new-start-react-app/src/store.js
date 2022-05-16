import { configureStore } from "@reduxjs/toolkit"
import authReducer from "./components/slice/user.slice"
import messageReducer from "./components/slice/message.slice"
import ticketReducer from "./components/slice/ticket.slice"

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
