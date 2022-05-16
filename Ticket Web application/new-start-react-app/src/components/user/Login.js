import React, { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, Navigate } from "react-router-dom"
import { Formik, Field, Form, ErrorMessage } from "formik"
import * as Yup from "yup"
import "./login.css"
import { login_successful as login_fulfilled,login_failed as login_rejected } from "../slice/user.slice"
import { Login as LoginService } from "../slice/user.slice"
import { clearMessage, setMessage } from "../slice/message.slice"

const Login = (props) => {
	const [loading, setLoading] = useState(false)

	const { isLoggedIn } = useSelector((state) => state.auth)
	const { message } = useSelector((state) => state.message)

	const dispatch = useDispatch()
	const navigate = useNavigate()
	useEffect(() => {
		dispatch(clearMessage())
	}, [dispatch])

	useEffect(() => {
		if (isLoggedIn) {
			return <Navigate to="/" />
		}
	}, [])

	const initialValues = {
		username: "",
		password: "",
	}

	const validationSchema = Yup.object().shape({
		username: Yup.string().required("This field is required!"),
		password: Yup.string().required("This field is required!"),
	})

	const handleLogin = (formValue) => {
		const { username, password } = formValue
		setLoading(true)

		dispatch(LoginService({ username, password }))
			.unwrap()
			.then((data) => {
				console.log(data);
				dispatch(login_fulfilled())
				// navigate("/")
				// props.history.push("/")
			})
			.catch((error) => {
				dispatch(login_rejected())
				console.log(error.message)
				setLoading(false)
				setMessage(error.message)
			})
	}

	if (isLoggedIn) {
		return <Navigate to="/" />
	}

	return (
		<div className="col-md-12 login-form">
			<div className="card card-container">
				<img
					src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
					alt="profile-img"
					className="profile-img-card"
				/>
				<Formik
					initialValues={initialValues}
					validationSchema={validationSchema}
					onSubmit={handleLogin}
				>
					<Form>
						<div className="form-group">
							<label htmlFor="username">Username</label>
							<Field
								name="username"
								type="text"
								className="form-control"
							/>
							<ErrorMessage
								name="username"
								component="div"
								className="alert alert-danger"
							/>
						</div>

						<div className="form-group">
							<label htmlFor="password">Password</label>
							<Field
								name="password"
								type="password"
								className="form-control"
							/>
							<ErrorMessage
								name="password"
								component="div"
								className="alert alert-danger"
							/>
						</div>

						<div className="form-group">
							<button
								type="submit"
								className="btn btn-primary btn-block"
								disabled={loading}
							>
								{loading && (
									<span className="spinner-border spinner-border-sm"></span>
								)}
								<span>Login</span>
							</button>
						</div>
					</Form>
				</Formik>
			</div>

			{message && (
				<div className="form-group">
					<div className="alert alert-danger" role="alert">
						{message}
					</div>
				</div>
			)}
		</div>
	)
}

export default Login
