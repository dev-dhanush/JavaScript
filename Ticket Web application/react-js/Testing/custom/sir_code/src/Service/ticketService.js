import axios from "axios"

const ticketUrl = "http://localhost:3000/api/ticket"

export const getTicket = async (id) => {
	id = id || ""
	return await axios.get(`${ticketUrl}/${id}`)
}

export const getAllTicket = async (id) => {
	id = id || ""
	return await axios.get(`${ticketUrl}/getAll`)
}

export const addTicket = async (ticket) => {
	return await axios.post(`${ticketUrl}/create`, ticket)
}

export const deleteTicket = async (id) => {
	return await axios.delete(`${ticketUrl}/delete/${id}`)
}

export const editTicket = async (id, ticket) => {
	return await axios.put(`${ticketUrl}/update/${id}`, ticket)
}
