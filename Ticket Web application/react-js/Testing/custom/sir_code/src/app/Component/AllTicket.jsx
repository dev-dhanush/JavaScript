import react, { useState, useEffect } from 'react';
import { Table, TableHead, TableCell, Paper, TableRow, TableBody, Button, makeStyles } from '@material-ui/core'
import { getAllTicket, deleteTicket } from '../../Service/ticketService';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
    table: {
        width: '90%',
        margin: '50px 0 0 50px'
    },
    thead: {
        '& > *': {
            fontSize: 20,
            background: '#000000',
            color: '#FFFFFF'
        }
    },
    row: {
        '& > *': {
            fontSize: 18
        }
    }
})


const AllTickets = () => {
    const [Tickets, setTickets] = useState([]);
    const classes = useStyles();

    useEffect(() => {
        getAllTickets();
    }, []);

    const deleteTicketData = async (id) => {
        await deleteTicket(id);
        getAllTickets();
    }

    const getAllTickets = async () => {
        let response = await getAllTicket();
        setTickets(response.data.data);
    }

    return (
        <Table className={classes.table}>
            <TableHead>
                <TableRow className={classes.thead}>
                    <TableCell>Id</TableCell>
                    <TableCell>Title</TableCell>
                    <TableCell>Description</TableCell>
                    <TableCell>Author ID</TableCell>
                    <TableCell></TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {Tickets.map((Ticket) => (
                    <TableRow className={classes.row} key={Ticket.ticket_no}>
                        <TableCell>{Ticket.ticket_no}</TableCell>
                        <TableCell>{Ticket.ticket_title}</TableCell>
                        <TableCell>{Ticket.ticket_desc}</TableCell>
                        <TableCell>{Ticket.authorId}</TableCell>
                        <TableCell>
                            <Button color="primary" variant="contained" style={{marginRight:10}} component={Link} to={`/edit/${Ticket.id}`}>Edit</Button> 
                            <Button color="secondary" variant="contained" onClick={() => deleteTicketData(Ticket.id)}>Delete</Button>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}

export default AllTickets;