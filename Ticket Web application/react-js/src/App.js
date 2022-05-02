import React, { useCallback } from "react"
import { useDispatch, useSelector } from "react-redux"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"

import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"

import Login from "./components/auth/Login"
import Register from "./components/auth/Register"
import Home from "./components/Home"
import Profile from "./components/auth/Profile"

import { logout } from "./components/auth/authSlice"

const App = () => {
	const { user: currentUser } = useSelector((state) => state.auth)
	const dispatch = useDispatch()

	const logOut = useCallback(() => {
		dispatch(logout())
	}, [dispatch])

	return (
		<Router>
			<div>
				<nav className="navbar navbar-expand navbar-dark bg-dark">
					<Link to={"/"} className="navbar-brand">
						Ticket APP
					</Link>
					<div className="navbar-nav mr-auto">
						<li className="nav-item">
							<Link to={"/ticket"} className="nav-link">
								Tickets
							</Link>
						</li>
					</div>

					{currentUser ? (
						<div className="navbar-nav ml-auto">
							<li className="nav-item">
								<Link to={"/profile"} className="nav-link">
									{currentUser.username}
								</Link>
							</li>
							<li className="nav-item">
								<a href="/login" className="nav-link" onClick={logOut}>
									LogOut
								</a>
							</li>
						</div>
					) : (
						<div className="navbar-nav ml-auto">
							<li className="nav-item">
								<Link to={"/login"} className="nav-link">
									Login
								</Link>
							</li>

							<li className="nav-item">
								<Link to={"/register"} className="nav-link">
									Sign Up
								</Link>
							</li>
						</div>
					)}
				</nav>

				<div className="container mt-3">
					<Switch>
						<Route exact path={["/", "/ticket"]} component={Home} />
						<Route exact path="/login" component={Login} />
						<Route exact path="/register" component={Register} />
						<Route exact path="/profile" component={Profile} />
					</Switch>
				</div>
			</div>
		</Router>
	)
}

export default App
