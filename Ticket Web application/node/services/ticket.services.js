const { PrismaClient } = require("@prisma/client")
const prisma = new PrismaClient()
const createError = require("http-errors")
require("dotenv").config()

exports.create = async (data) => {
	console.log(data)
	try {
		let ticket = await prisma.ticket.create({
			data: {
				ticket_title: data.ticket_title,
				ticket_desc: data.ticket_desc,
				authorId: data.authorId,
			},
		})
		return ticket
	} catch (error) {
		console.log(error);
		throw createError.NotAcceptable("Ticket is not created. Try again later..")
	}
}

exports.update = async (id, data) => {
	try {
		let ticket = await prisma.ticket.update({
			where: {
				ticket_no: Number(id),
			},
			data: data,
		})
		return ticket
	} catch (error) {
		console.log(error);
		throw createError.NotAcceptable("Ticket is not updated. Try again later..")
	}
}

exports.deleteTicket = async (id) => {
	try {
		let ticket = await prisma.ticket.delete({
			where: {
				ticket_no: Number(id),
			},
		})
		return ticket
	} catch (error) {
		console.log(error);
		throw createError.NotAcceptable("Ticket is not deleted. Try again later..")
	}
}

exports.getAll = async () => {
	try {
		let ticket = await prisma.ticket.findMany({})
		console.log(ticket);
		return ticket
	} catch (error) {
		console.log(error);
		throw createError.NotFound("NO Ticket is available. Try again later..")
	}
}

exports.getById = async (id) => {
	try {
		let ticket = await prisma.ticket.findUnique({ where: { ticket_no: Number(id) } })
		return ticket
	} catch (error) {
		console.log(error);
		throw createError.NotFound("Ticket is not available. Create and Try again..")
	}
}
