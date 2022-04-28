import { createSlice } from "@reduxjs/toolkit"

const initialState = {
	tickets: [],
	isLoading: false,
	error: "",
	replyTicketError: "",
	selectedTicket: {},
	replyMsg: "",
}

const ticketListSlice = createSlice({
	name: "ticketList",
	initialState,
	reducers: {
		fetchTicketLoading: (state) => {
			state.isLoading = true
		},
		deleteTicket: (state, action) => {
			state.tickets = state.tickets.filter((tic) => tic === action.payload.ticket)
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
			state.tickets = state.tickets.map(ticket => {
				if(ticket.authorId === action.payload.authorId){
					ticket = action.payload
				}
			})
			state.isLoading = false
		},
		updateTicketFail: (state, { payload }) => {
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

export const { updateTicketFail, updateTicketSuccess,fetchTicketLoading, deleteTicket, fetchTicketSuccess, fetchTicketFail, fetchSingleTicketLoading, fetchSingleTicketSuccess, fetchSingleTicketFail, replyTicketLoading, replyTicketSuccess, replyTicketFail, closeTicketLoading, closeTicketSuccess, closeTicketFail, resetResponseMsg } = actions

export default reducer