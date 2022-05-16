import { createSlice } from "@reduxjs/toolkit"
import axios from "axios"
import { authHeader } from "./user.slice"
const user = localStorage.getItem("user")
const initialState = {
	tickets: [],
	isLoading: false,
	error: "",
	replyTicketError: "",
	selectedTicket: {},
	replyMsg: "",
}

export const fetchAllTickets = () => async (dispatch) => {
	if (user) {
		dispatch(fetchTicketLoading())
		try {
			const result = await axios
				.get(`${process.env.REACT_APP_API}ticket/getAll`, {
					headers: authHeader(),
				})
				.then((res) => {
					return res.data
				})
				.catch((err) => {
					return err
				})
			if (result.data === undefined && result.isAxiosError) {
				// console.log("result", result.response.statusText)
				// console.log("result", result.toJSON())
				return dispatch(fetchTicketFail(result.response.statusText))
			} else {
				result.data.length && dispatch(fetchTicketSuccess(result.data))
			}
		} catch (error) {
			console.log("error", error)
			dispatch(fetchTicketFail(error.message))
		}
	} else {
		window.location.href = "/login"
	}
}

// export const getAllTicket = async () => {
// 	return await axios
// 		.get(`${process.env.REACT_APP_API}ticket/getAll`, {
// 			headers: authHeader(),
// 		})
// 		.then((res) => {
// 			return res.data
// 		})
// 		.catch((err) => {
// 			return err
// 		})
// }

export const deleteTic = (id) => async (dispatch) => {
	dispatch(fetchTicketLoading())
	try {
		const result = await axios.delete(
			process.env.REACT_APP_API + "ticket/delete/" + id,
			{ headers: authHeader() }
		)
		result.data.data && dispatch(deleteTicket(result.data.data.ticket_no))
	} catch (error) {}
}

export const updateTicketAction = (id, ticket) => async (dispatch) => {
	dispatch(fetchTicketLoading())
	try {
		const result = await axios.put(
			process.env.REACT_APP_API + "ticket/update/" + id,
			ticket,
			{ headers: authHeader() }
		)
		result.data && dispatch(updateTicketSuccess(result.data.data))
	} catch (error) {
		dispatch(updateTicketFail())
	}
}

export const getTicket = async (id) => {
	id = id || ""
	return await axios
		.get(`${process.env.REACT_APP_API}ticket/get/${id}`, { headers: authHeader() })
		.then((res) => {
			return res.data
		})
		.catch((err) => {
			return err
		})
}

export const addTicketAction = (ticket) => async (dispatch) => {
	dispatch(fetchTicketLoading())
	try {
		const result = await axios.post(
			process.env.REACT_APP_API + "ticket/create",
			ticket,
			{ headers: authHeader() }
		)
		result.data.data.author = JSON.parse(
			window.localStorage.getItem("user")
		)
		delete result.data.data.author.delete_at
		delete result.data.data.author.created_at
		delete result.data.data.author.updated_at
		delete result.data.data.author.isDeleted
		delete result.data.data.author.accessToken
		delete result.data.data.author.authorId

		result.data && dispatch(addTicketSuccess(result.data.data))
	} catch (error) {
		dispatch(addTicketFail(error))
	}
}

const ticketListSlice = createSlice({
	name: "ticketList",
	initialState,
	reducers: {
		fetchTicketLoading: (state) => {
			state.isLoading = true
		},
		deleteTicket: (state, action) => {
			state.tickets = state.tickets.filter(
				(tic) => tic.ticket_no !== action.payload
			)
		},
		fetchTicketSuccess: (state, action) => {
			state.tickets = action.payload
			state.isLoading = false
		},
		fetchTicketFail: (state, { payload }) => {
			state.isLoading = false
			state.error = payload
		},
		updateTicketSuccess: (state, action) => {
			state.tickets = state.tickets.map((ticket) => {
				if (ticket.ticket_no === action.payload.ticket_no) {
					return { ...ticket, ...action.payload }
				} else {
					return ticket
				}
			})
			state.isLoading = false
		},
		updateTicketFail: (state, { payload }) => {
			state.isLoading = false
			state.error = payload
		},
		addTicketSuccess: (state, action) => {
			state.tickets.push(action.payload)
		},
		addTicketFail: (state, { payload }) => {
			state.isLoading = false
			state.error = payload
		},
		fetchSingleTicketLoading: (state) => {
			state.isLoading = true
		},
		fetchSingleTicketSuccess: (state, { payload }) => {
			state.selectedTicket = payload
			state.isLoading = false
			state.error = ""
		},
		fetchSingleTicketFail: (state, { payload }) => {
			state.isLoading = false
			state.error = payload
		},
		replyTicketLoading: (state) => {
			state.isLoading = true
		},
		replyTicketSuccess: (state, { payload }) => {
			state.isLoading = false
			state.error = ""
			state.replyMsg = payload
		},
		replyTicketFail: (state, { payload }) => {
			state.isLoading = false
			state.replyTicketError = payload
		},
		closeTicketLoading: (state) => {
			state.isLoading = true
		},
		closeTicketSuccess: (state, { payload }) => {
			state.isLoading = false
			state.error = ""
			state.replyMsg = payload
		},
		closeTicketFail: (state, { payload }) => {
			state.isLoading = false
			state.error = payload
		},
		resetResponseMsg: (state) => {
			state.isLoading = false
			state.replyTicketError = ""
			state.replyMsg = ""
		},
	},
})

const { reducer, actions } = ticketListSlice

export const {
	updateTicketFail,
	updateTicketSuccess,
	fetchTicketLoading,
	addTicketFail,
	addTicketSuccess,
	deleteTicket,
	fetchTicketSuccess,
	fetchTicketFail,
	fetchSingleTicketLoading,
	fetchSingleTicketSuccess,
	fetchSingleTicketFail,
	replyTicketLoading,
	replyTicketSuccess,
	replyTicketFail,
	closeTicketLoading,
	closeTicketSuccess,
	closeTicketFail,
	resetResponseMsg,
} = actions

export default reducer
