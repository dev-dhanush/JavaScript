import React from "react"

import AllTickets from "./ticket/AllTicket"

const Home = () => {
	return (
		<div className="container">
			<header className="jumbotron">{<AllTickets />}</header>
		</div>
	)
}

export default Home
