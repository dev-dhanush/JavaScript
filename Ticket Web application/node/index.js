const { Prisma, PrismaClient } = require("@prisma/client")
const express = require("express")
const cors = require("cors")
const prisma = new PrismaClient()
const morgan = require('morgan')
const expressValidator = require('express-validator');
const app = express()


app.use(morgan("dev"));
app.use(express.json());
app.use(expressValidator());
app.use(cors());

//import routes
const userRoutes = require("./routes/userRoutes")
const ticketRoutes = require("./routes/ticketRoutes")

app.use("/api/user", userRoutes)
app.use("/api/ticket", ticketRoutes)

const server = app.listen(3000, () => console.log(`🚀 Server ready at: http://localhost:3000`))
