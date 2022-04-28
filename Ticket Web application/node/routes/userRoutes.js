const express = require("express")
const router = express.Router()

const { login, registerUser, getAllUser, signout } = require("../controllers/userController")
const auth = require("../middlewares/auth")
const { userSignupValidator } = require("../validator")

router.post("/signup", userSignupValidator, registerUser)
router.post("/signin", login)
router.get("/signout", signout)
router.get("/getAll", auth, getAllUser)

module.exports = router
