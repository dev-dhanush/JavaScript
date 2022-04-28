import React from "react"
import { Redirect } from "react-router-dom"
import { useSelector } from "react-redux"

const Profile = () => {
	const { user: currentUser } = useSelector((state) => state.auth)
	console.log(currentUser)
	// if (!currentUser) {
	// 	return <Redirect to="/login" />
	// }

	return (
		<div className="container">
			<header className="jumbotron">
				<h3>
					<strong>{currentUser? currentUser.data.username : "Null"}</strong> Profile
				</h3>
			</header>
			{/* <p>
				<strong>Token:</strong> {currentUser.data.accessToken.substring(8)} ... {currentUser.accessToken.substr(currentUser.accessToken.length - 20)}
			</p>
			<p>
				<strong>Id:</strong> {currentUser.data.id}
			</p>
			<p>
				<strong>Email:</strong> {currentUser.data.email}
			</p> */}
			{/* <strong>Authorities:</strong>
      <ul>
        {currentUser.roles &&
          currentUser.roles.map((role, index) => <li key={index}>{role}</li>)}
      </ul> */}
		</div>
	)
}

export default Profile
