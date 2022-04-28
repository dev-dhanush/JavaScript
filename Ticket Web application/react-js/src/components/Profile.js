import React from "react"

import { useSelector } from "react-redux"

const Profile = () => {
	const { user:currentUser } = useSelector((state) => state.auth)

	return (
		<div className="container">
			<header className="jumbotron">
				<h3>
					{console.log(currentUser)}
					<strong>{currentUser.data?currentUser.data.username:currentUser.username}</strong> Profile
				</h3>
			</header>
			<p>
				<strong>Token:</strong> {currentUser.data?currentUser.data.accessToken.substring(0, 20):currentUser.accessToken.substring(0, 20)} ... {/* {currentUser.data.accessToken.substr(currentUser.data.accessToken.length - 20)} */}
			</p>
			<p>
				<strong>Id:</strong> {currentUser.data?currentUser.data.id:currentUser.id}
			</p>
			<p>
				<strong>Email:</strong> {currentUser.data?currentUser.data.email:currentUser.email}
			</p>
		</div>
	)
}

export default Profile
