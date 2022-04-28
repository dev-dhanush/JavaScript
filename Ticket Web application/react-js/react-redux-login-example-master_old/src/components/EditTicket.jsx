import { getTicket as getTicketService } from "../services/ticketService"
import React, { useState, useEffect } from "react"
import { Button, makeStyles } from "@material-ui/core"
import { useHistory } from "react-router-dom"
import TextField from "@material-ui/core/TextField"
import Dialog from "@material-ui/core/Dialog"
import DialogActions from "@material-ui/core/DialogActions"
import DialogContent from "@material-ui/core/DialogContent"
import DialogContentText from "@material-ui/core/DialogContentText"
import DialogTitle from "@material-ui/core/DialogTitle"
import EditCircleRoundedIcon from "@material-ui/icons/Edit"
import { useDispatch } from "react-redux"
import { updateTicketAction } from "../slices/ticketAction"

const EditTicket = (props) => {
	const [open, setOpen] = React.useState(false)
	const initialValue = []

	const useStyles = makeStyles({
		container: {
			width: "50%",
			margin: "5% 0 0 25%",
			"& > *": {
				marginTop: 20,
			},
		},
	})

	const [ticket, setTicket] = useState(initialValue)
	const { ticket_title, ticket_desc } = ticket
	const classes = useStyles()
	let history = useHistory()
	const dispatch = useDispatch()

	const id = props.ticket_no
	const onValueChange = (e) => {
		// try {
		// 	console.log(id);
		// 	const existingTicket = getTicketService(id)
		// 	setTicket(existingTicket)
		// } catch (error) {
		// 	console.log("ticket with that id does not exist", error)
		// }
		setTicket({ ...ticket, [e.target.name]: e.target.value })
	}

	const handleClickOpen = () => {
		setOpen(true)
	}

	const handleClose = () => {
		setOpen(false)
	}

	const updateTicketDetails = () => {
		dispatch(updateTicketAction(id, ticket))
		window.location.reload()
	}

	useEffect(() => {
		if (open) {
			const existingTicket = getTicketService(id)
			existingTicket.then((data) => console.log(setTicket(data))).catch((err) => console.log(err))
		}
		// console.log(existingTicket)
		// setTicket(existingTicket)
	}, [])

	// onClick={() => {
	// 	handleUpdate(row.ticket_no)
	// }}

	return (
		<div>
			<EditCircleRoundedIcon style={{ fontSize: 25 }} color="action" onClick={handleClickOpen} />
			<Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
				<DialogTitle id="form-dialog-title">Update Ticket</DialogTitle>
				<DialogContent>
					<TextField onChange={(e) => onValueChange(e)} name="ticket_title" value={ticket_title} autoFocus margin="dense" id="ticket_title" label="Ticket Title" type="text" fullWidth />
					<TextField onChange={(e) => onValueChange(e)} name="ticket_desc" value={ticket_desc} autoFocus margin="dense" id="ticket_desc" label="Ticket Description" type="text" fullWidth />
				</DialogContent>
				<DialogActions>
					<Button onClick={handleClose} color="primary">
						Cancel
					</Button>
					<Button onClick={updateTicketDetails} color="primary">
						Update Ticket
					</Button>
				</DialogActions>
			</Dialog>
		</div>
	)
}

export default EditTicket
