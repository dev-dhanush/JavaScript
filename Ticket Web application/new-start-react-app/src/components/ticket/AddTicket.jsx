import React, { useState } from "react"
import { Button } from "@material-ui/core"
import { useNavigate } from "react-router-dom"
import TextField from "@material-ui/core/TextField"
import Dialog from "@material-ui/core/Dialog"
import DialogActions from "@material-ui/core/DialogActions"
import DialogContent from "@material-ui/core/DialogContent"
import DialogTitle from "@material-ui/core/DialogTitle"
import { addTicketAction, fetchAllTickets } from "../slice/ticket.slice"
import { useDispatch } from "react-redux"

export default function AddTicket(props) {
	const [open, setOpen] = React.useState(false)
	const [error, setError] = React.useState("")

	const initialValue = []

	const dispatch = useDispatch()
	const [ticket, setTicket] = useState(initialValue)
	const { ticket_title, ticket_desc } = ticket
	let navigate = useNavigate()

	const onValueChange = (e) => {
		if (e.target.value === "") {
			setError(e.target.name, " can not be empty")
		}
		setTicket({ ...ticket, [e.target.name]: e.target.value })
		setError("")
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
			dispatch(addTicketAction(ticket))
			dispatch(fetchAllTickets())
			navigate("/ticket")
			setOpen(false)
		} else {
			navigate("/signin")
		}
	}

	return (
		<div>
			<Button
				disabled={props.error ? true : false}
				variant="outlined"
				style={{ fontSize: 15 }}
				onClick={handleClickOpen}
				color="primary"
			>
				Add Ticket
			</Button>

			<Dialog
				open={open}
				onClose={handleClose}
				aria-labelledby="form-dialog-title"
			>
				<DialogTitle id="form-dialog-title">Add Ticket</DialogTitle>
				<DialogContent>
					<TextField
						onChange={(e) => onValueChange(e)}
						htmlFor="title"
						name="ticket_title"
						value={ticket_title}
						autoFocus
						margin="dense"
						id="ticket_title"
						label="Ticket Title"
						type="text"
						fullWidth
					/>
					{error !== "" ? (
						<div
							value="Title can not empty"
							name="ticket_title"
							htmlFor="ticket_title"
							style={{ width: "100%" }}
							component="TextField"
							className="alert alert-danger"
						></div>
					) : null}
					<TextField
						onChange={(e) => onValueChange(e)}
						htmlFor="desc"
						name="ticket_desc"
						value={ticket_desc}
						margin="dense"
						id="ticket_desc"
						label="Ticket Description"
						type="text"
						fullWidth
					/>
					{error !== "" ? (
						<div
							value="Desc can not be empty"
							name="ticket_desc"
							htmlFor="ticket_desc"
							component="TextField"
							style={{ width: "100%" }}
							className="alert alert-danger"
						></div>
					) : null}
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
