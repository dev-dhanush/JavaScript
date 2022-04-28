import { fetchTicketLoading, updateTicketFail,updateTicketSuccess,deleteTicket, fetchTicketSuccess, fetchTicketFail, searchTickets, fetchSingleTicketLoading, fetchSingleTicketSuccess, fetchSingleTicketFail, replyTicketLoading, replyTicketSuccess, replyTicketFail, closeTicketLoading, closeTicketSuccess, closeTicketFail } from "./ticket"

import { getAllTicket, deleteTicket as deleteTicketService,editTicketService } from "../services/ticketService"

export const fetchAllTickets = () => async (dispatch) => {
	dispatch(fetchTicketLoading())
	try {
		const result = await getAllTicket()
		result.data.length && dispatch(fetchTicketSuccess(result.data))
	} catch (error) {
		dispatch(fetchTicketFail(error.message))
	}
}

export const deleteTic = (id) => async (dispatch) => {
	dispatch(fetchTicketLoading())
	try {
		const result = await deleteTicketService(id)
		console.log("result", result.data.data)
		result.data && dispatch(deleteTic(result.data.data.authorId))
	} catch (error) {
		dispatch()
	}
}

export const updateTicketAction = (id,ticket) => async (dispatch) => {
	dispatch(fetchTicketLoading())
	try {
		const result = await editTicketService(id,ticket)
		console.log("result", result)
		result.data && dispatch(updateTicketSuccess(result.data.data.authorId))
	} catch (error) {
		dispatch(updateTicketFail())
	}
}

// export const filterSerachTicket = (str) => (dispatch) => {
// 	dispatch(searchTickets(str))
// }

//   //Actions for single ticket only
//   export const fetchSingleTicket = (_id) => async (dispatch) => {
//     dispatch(fetchSingleTicketLoading());
//     try {
//       const result = await getSingleTicket(_id);
//       dispatch(
//         fetchSingleTicketSuccess(
//           result.data.result.length && result.data.result[0]
//         )
//       );
//     } catch (error) {
//       dispatch(fetchSingleTicketFail(error.message));
//     }
//   };

//   //Actions for replying on single ticket
//   export const replyOnTicket = (_id, msgObj) => async (dispatch) => {
//     dispatch(replyTicketLoading());
//     try {
//       const result = await updateReplyTicket(_id, msgObj);
//       console.log(result);
//       if (result.status === "error") {
//         return dispatch(replyTicketFail(result.message));
//       }

//       dispatch(fetchSingleTicket(_id));

//       dispatch(replyTicketSuccess(result.message));
//     } catch (error) {
//       console.log(error.message);
//       dispatch(replyTicketFail(error.message));
//     }
//   };
//   //Actions for closing ticket
//   export const closeTicket = (_id) => async (dispatch) => {
//     dispatch(closeTicketLoading());
//     try {
//       const result = await updateTicketStatusClosed(_id);
//       if (result.status === "error") {
//         return dispatch(closeTicketFail(result.message));
//       }

//       dispatch(fetchSingleTicket(_id));

//       dispatch(closeTicketSuccess("Status Updated successfully"));
//     } catch (error) {
//       console.log(error.message);
//       dispatch(closeTicketFail(error.message));
//     }
//   };
