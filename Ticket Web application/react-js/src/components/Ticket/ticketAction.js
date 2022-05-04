import { addTicketSuccess, addTicketFail, fetchTicketLoading, updateTicketFail, updateTicketSuccess, fetchTicketSuccess, fetchTicketFail, deleteTicket } from "./ticketSlice"

import { getAllTicket, deleteTicket as deleteTicketService, editTicketService, addTicketService } from "./ticketService"

const user = localStorage.getItem("user")

export const fetchAllTickets = () => async (dispatch) => {
	if (user) {
		dispatch(fetchTicketLoading())
		try {
			const result = await getAllTicket()
			result.data.length && dispatch(fetchTicketSuccess(result.data))
		} catch (error) {
			dispatch(fetchTicketFail(error.message))
		}
	} else {
		window.location.href = "/login"
	}
}

export const deleteTic = (id) => async (dispatch) => {
	dispatch(fetchTicketLoading())
	try {
		const result = await deleteTicketService(id)
		result.data.data && dispatch(deleteTicket(result.data.data.ticket_no))
	} catch (error) {}
}

export const updateTicketAction = (id, ticket) => async (dispatch) => {
	dispatch(fetchTicketLoading())
	try {
		const result = await editTicketService(id, ticket)
		result.data && dispatch(updateTicketSuccess(result.data.data))
	} catch (error) {
		dispatch(updateTicketFail())
	}
}

export const addTicketAction = (ticket) => async (dispatch) => {
	dispatch(fetchTicketLoading())
	try {
		const result = await addTicketService(ticket)
		result.data.data.author = JSON.parse(window.localStorage.getItem("user"))
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
