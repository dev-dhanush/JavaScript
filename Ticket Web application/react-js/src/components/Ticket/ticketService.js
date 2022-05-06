import axios from "axios"
import { authHeader } from "../auth/authSlice"

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

export const getAllTicket = async () => {
	return await axios
		.get(`${process.env.REACT_APP_API}ticket/getAll`, { headers: authHeader() })
		.then((res) => {
			return res.data
		})
		.catch((err) => {
			return err
		})
}

export const deleteTicket = async (id) => {
	return await axios.put(process.env.REACT_APP_API + "ticket/delete/" + id, { headers: authHeader() })
}

export const editTicketService = async (id, ticket) => {
	return await axios.put(process.env.REACT_APP_API + "ticket/update/" + id, ticket, { headers: authHeader() })
}

export const addTicketService = async ( ticket) => {
	return await axios.post(process.env.REACT_APP_API + "ticket/create", ticket, { headers: authHeader() })
}

