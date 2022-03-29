import React, { useState } from "react"
import { validPassword, validEmail, validPhone, validNumeric, validName } from "../js/regEx"
import { FormGroup, FormControl, InputLabel, Input, Typography, Button } from "@material-ui/core"
import { makeStyles } from "@material-ui/styles"

const initialValue = {
	name: "",
	email: "",
	phone: "",
	password: "",
}

const initialIsValidValue = {
	isname: "",
	isemail: "",
	isphone: "",
	ispassword: "",
}

const Validation = () => {
	const [user, setUser] = useState(initialValue)
	const { name, email, phone, password } = user
	const [input, setInput] = useState("")
	const [isValid, setIsValid] = useState(initialIsValidValue)
	const { isname, isemail, isphone, ispassword } = isValid

	const useStyles = makeStyles({
		container: {
			width: "50%",
			margin: "5% 0 0 25%",
		},
	})

	const classes = useStyles()

	const validationMessageCSS = { color: "red", marginBottom: "20px" }
	var flag = true

	const validateDetailsFlag = Object.values(isValid).every((value) => {
		if (value !== null && value !== "") {
			flag = false
		}
		return flag
	})
	// Common onChangeSetState()
	const onChangeSetState=(e)=>{
		setUser({...user, [e.target.name]: e.target.value});
	}
	function validateDetails() {
		if (validateDetailsFlag) {
			// Call API Here
		} else {
			alert("Invalid input..!!")
		}
	}

	
	const onValidate = (e, regEx) => {
		const RegExObj = new RegExp(regEx)
		const isValidKey = "is" + e.target.name;
			if (e.target.value === "" || RegExObj.test(e.target.value)) {
				setIsValid({ ...isValid, [isValidKey]: "" })
				setUser({ ...user, [e.target.name]: e.target.value })

			} else {
				setIsValid({ ...isValid, [isValidKey]: "Invalid input..!!" })
			}
	}

	return (
		<div>
			<FormGroup className={classes.container}>
				<Typography variant="h4">Add User</Typography>

				<FormControl>
					<InputLabel htmlFor="name">Name</InputLabel>
					<Input onChange={(e)=>onChangeSetState(e)} onBlur={(e) => onValidate(e, validName)} name="name" value={name} id="txtName" inputProps={{ maxLength: 40 }} />
					<div style={validationMessageCSS}>{isname}</div>
				</FormControl>
				<FormControl>
					<InputLabel htmlFor="email">Email</InputLabel>
					<Input onChange={(e)=>onChangeSetState(e)} onBlur={(e) => onValidate(e, validEmail)} name="email" value={email} id="txtEmailId" inputProps={{ maxLength: 50 }} />
					<div style={validationMessageCSS}>{isemail}</div>
				</FormControl>
				<FormControl>
					<InputLabel htmlFor="phone">Phone</InputLabel>
					<Input onBlur={(e) => onValidate(e, validPhone)} name="phone" value={phone} id="txtContactNo" inputProps={{ maxLength: 10 }} />
					<div style={validationMessageCSS}>{isphone}</div>
				</FormControl>
				<FormControl>
					<InputLabel htmlFor="password">Password</InputLabel>
					<Input type="password" onBlur={(e) => onValidate(e, validPassword)} name="password" value={password} id="txtPassword" inputProps={{ maxLength: 12 }} />
					<div style={validationMessageCSS}>{ispassword}</div>
				</FormControl>
				<br />
				<FormControl>
					<Button variant="contained" color="primary" disabled={name.length === 0 || phone.length === 0 || email.length === 0 || password.length === 0} onClick={() => validateDetails()}>
						Add User
					</Button>
				</FormControl>
			</FormGroup>
		</div>
	)
}

export default Validation
