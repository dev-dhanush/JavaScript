const express = require("express")
const router = express.Router()
const { create, update, deleteTicket, getAll, getById } = require("../controllers/ticketController")

const auth = require("../middlewares/auth")
// const { userSignupValidator } = require("../validator")

// router.post("/create", create)
router.post("/create", auth, create)
router.put("/update/:id", auth, update)
router.delete("/delete/:id", auth, deleteTicket)
router.get("/getAll",auth, getAll)
router.get("/get/:id", auth, getById)

module.exports = router
