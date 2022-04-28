import React, { useState, useEffect } from "react"
import { FormGroup, FormControl, InputLabel, Input, Button, makeStyles, Typography } from "@material-ui/core"
import { addTicket } from "../services/ticketService"
import { useHistory } from "react-router-dom"
import TextField from "@material-ui/core/TextField"
import Dialog from "@material-ui/core/Dialog"
import DialogActions from "@material-ui/core/DialogActions"
import DialogContent from "@material-ui/core/DialogContent"
import DialogContentText from "@material-ui/core/DialogContentText"
import DialogTitle from "@material-ui/core/DialogTitle"
import AddCircleRoundedIcon from "@material-ui/icons/AddCircleRounded"

export default function AddTicket() {
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
	const { ticket_title, ticket_desc, authorId } = ticket
	const classes = useStyles()
	let history = useHistory()

	const onValueChange = (e) => {
		setTicket({ ...ticket, [e.target.name]: e.target.value })
	}

	const handleClickOpen = () => {
		setOpen(true)
	}

	const handleClose = () => {
		setOpen(false)
	}

	const addTicketDetails = async () => {
		const user = JSON.parse(localStorage.getItem("user"))
		if (user) {
			ticket.authorId = user.id
			await addTicket(ticket)
			// console.log(ticket)
			window.location.reload()
		} else {
			history.push("/signin")
		}
	}

	return (
			<div>
				<AddCircleRoundedIcon style={{ fontSize: 60 }} color="primary" onClick={handleClickOpen} />
				<Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
					<DialogTitle id="form-dialog-title">Add Ticket</DialogTitle>
					<DialogContent>
						{/* <DialogContentText>To add </DialogContentText> */}
						<TextField onChange={(e) => onValueChange(e)} name="ticket_title" value={ticket_title} autoFocus margin="dense" id="ticket_title" label="Ticket Title" type="text" fullWidth />
						<TextField onChange={(e) => onValueChange(e)} name="ticket_desc" value={ticket_desc} autoFocus margin="dense" id="ticket_desc" label="Ticket Description" type="text" fullWidth />
					</DialogContent>
					<DialogActions>
						<Button onClick={handleClose} color="primary">
							Cancel
						</Button>
						<Button onClick={addTicketDetails} color="primary">
							Add Ticket
						</Button>
					</DialogActions>
				</Dialog>
			</div>
	)
}
