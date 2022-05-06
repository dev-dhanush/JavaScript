import React from "react"

import { useSelector } from "react-redux"

const Profile = () => {
	const { user: currentUser } = useSelector((state) => state.auth)

	return (
		<div className="container">
			<header className="jumbotron">
				<h2>Profile</h2>
				<br />
				<h4>
					<strong>{currentUser.data ? currentUser.data.username : currentUser.username}</strong>
				</h4>
				<h4>
					<strong>Email:</strong> {currentUser.data ? currentUser.data.email : currentUser.email}
				</h4>
			</header>
		</div>
	)
}

export default Profile
