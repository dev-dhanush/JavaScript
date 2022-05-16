import React, { useState, useEffect } from "react"
import { useDispatch } from "react-redux"
import { Button } from "@material-ui/core"
import TextField from "@material-ui/core/TextField"
import Dialog from "@material-ui/core/Dialog"
import DialogActions from "@material-ui/core/DialogActions"
import DialogContent from "@material-ui/core/DialogContent"
import DialogTitle from "@material-ui/core/DialogTitle"
import EditCircleRoundedIcon from "@material-ui/icons/Edit"
import { getTicket as getTicketService,updateTicketAction } from "../slice/ticket.slice"

const EditTicket = (props) => {
	const [open, setOpen] = React.useState(false)
	const initialValue = {
		ticket_no: "",
		ticket_desc: "",
	}

	const [ticket, setTicket] = useState(initialValue)
	const { ticket_title, ticket_desc } = ticket
	const dispatch = useDispatch()

	const id = props.ticket_no
	const onValueChange = (e) => {
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
		handleClose()
	}

	useEffect(() => {
		if (open) {
			const existingTicket = getTicketService(id)
			existingTicket
				.then((data) => {
					const { ticket_title, ticket_desc } = data.data[0]
					setTicket({ ticket_title, ticket_desc })
				})
				.catch((err) => console.log(err))
		}
	}, [id, open])

	return (
		<div>
			<EditCircleRoundedIcon style={{ fontSize: 25 }} color="action" onClick={handleClickOpen} />
			<Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
				<DialogTitle id="form-dialog-title">Update Ticket</DialogTitle>
				<DialogContent>
					<TextField onChange={(e) => onValueChange(e)} name="ticket_title" value={ticket_title} autoFocus margin="dense" id="ticket_title" label="Ticket Title" type="text" fullWidth />
					<TextField onChange={(e) => onValueChange(e)} name="ticket_desc" value={ticket_desc} margin="dense" id="ticket_desc" label="Ticket Description" type="text" fullWidth />
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
