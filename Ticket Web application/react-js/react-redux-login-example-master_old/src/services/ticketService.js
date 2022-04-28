import axios from "axios"
import authHeader from "./auth-header"

const ticketUrl = "http://localhost:3000/api/ticket"

export const getTicket = async (id) => {
	id = id || ""
	return await axios
		.get(`${ticketUrl}/${id}`, { headers: authHeader() })
		.then((res) => {
			return res.data
		})
		.catch((err) => {
			return err
		})
}

export const getAllTicket = async () => {
	return await axios
		.get(`${ticketUrl}/getAll`, { headers: authHeader() })
		.then((res) => {
			return res.data
		})
		.catch((err) => {
			return err
		})
}

export const addTicket = async (ticket) => {
	return await axios.post(`${ticketUrl}/create`, ticket, { headers: authHeader() })
}

export const deleteTicket = async (id) => {
	return await axios.delete(`${ticketUrl}/delete/${id}`, { headers: authHeader() })
}

export const editTicketService = async (id, ticket) => {
	return await axios.put(`${ticketUrl}/update/${id}`, ticket, { headers: authHeader() })
}
