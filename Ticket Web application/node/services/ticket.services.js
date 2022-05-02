const { PrismaClient } = require("@prisma/client")
const prisma = new PrismaClient({ rejectOnNotFound: true })
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
		console.log(error)
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
		console.log(error)
		throw createError.NotAcceptable("Ticket is not updated. Try again later..")
	}
}

exports.deleteTicket = async (id) => {
	try {
		let ticket = await prisma.ticket.update({
			where: {
				ticket_no: Number(id),
			},
			data: { isDeleted: true },
		})
		return ticket
	} catch (error) {
		console.log(error)
		throw createError.NotAcceptable("Ticket is not deleted. Try again later..")
	}
}

exports.getAll = async () => {
	try {
		let ticket = await prisma.ticket.findMany({
			where: {
				isDeleted: false,
			},
		})
		console.log(ticket)
		return ticket
	} catch (error) {
		console.log(error)
		throw createError.NotFound("NO Ticket is available. Try again later..")
	}
}

exports.getById = async (id) => {
	try {
		let ticket = await prisma.ticket.findUnique({ where: { ticket_no: Number(id), isDeleted: false } })
		return ticket
	} catch (error) {
		console.log(error)
		throw createError.NotFound("Ticket is not available. Create and Try again..")
	}
}
