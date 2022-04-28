import React, { useState, useEffect } from "react"
import { useDispatch } from "react-redux"
import { fetchAllTickets } from "../slices/ticketAction"
// import {getAllTicket, deleteTicket } from '../services/ticketService';
import EnhancedTable from "./Table"

const AllTickets = (props) => {
	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(fetchAllTickets())
	}, [dispatch])
	// const [Tickets, setTickets] = useState([])
	// useEffect(() => {
	// 	getAllTickets()
	// }, [])

	// const deleteTicketData = async (id) => {
	// 	await deleteTicket(id)
	// 	getAllTickets()
	// }

	// const getAllTickets = async () => {
	// 	let response = await getAllTicket()
	// 	console.log(response.data);
	// 	setTickets(response.data)
	// }

	return <EnhancedTable />
}

export default AllTickets
