import React, { useState } from "react"

// Time to execute our TRACKS query from React! To do that, we'll use Apollo Client's useQuery hook in src/pages/tracks. js .
// The useQuery React hook is the primary API for executing queries in an Apollo application.

// Apollo Client is a comprehensive state management library for JavaScript that enables you to manage both local and remote data with GraphQL
import { useQuery,useMutation } from "@apollo/react-hooks"
import { GET_USERS, VIEW_USERS, ADD_USER } from "./Queries"
import { Card, CardBody, CardHeader, CardSubtitle, Input, Spinner } from "reactstrap"

function App() {
	const [user, setUser] = useState({
		name: "",
		email: "",
		job_title: "",
	})
  const [allUser,setAllUser] = useState({})
  // const { mutate, isLoading } = useMutation(variables => startLogin(variables))
  const [addedUser, { data,loading,error}] = useMutation(ADD_USER)

	const { name, email, job_title } = user

	const handleChange = (name) => (e) => {
    setUser({ ...user, [name]: e.target.value })
	}

	const handleSubmit = () => {
    addedUser({variables : user})
    setAllUser(data)
	}

	const getAllUsers = useQuery(GET_USERS)
	const userInfo = useQuery(VIEW_USERS, { variables: { id: 3 } })
	if (getAllUsers.loading || userInfo.loading) return <Spinner color="dark" />
	if (getAllUsers.error || userInfo.error) return <>Error :(</>

	return (
		<div className="container">
			<Card>
				<CardHeader>Query - Displaying all data</CardHeader>
				<CardBody>
					<pre>{JSON.stringify(getAllUsers.data)}</pre>
				</CardBody>
			</Card>
			<Card>
				<CardHeader>Query - Displaying data with args</CardHeader>
				<CardBody>
					<CardSubtitle>Viewing a user by id</CardSubtitle>
					<pre>{allUser? JSON.stringify(allUser) : JSON.stringify(userInfo.data)}</pre>
				</CardBody>

				<Input type="text" onChange={handleChange("name")} placeholder="name" value={name} />
				<Input type="text" onChange={handleChange("email")} placeholder="email" value={email} />
				<Input type="text" onChange={handleChange("job_title")} placeholder="job_title" value={job_title} />
				<button onClick={handleSubmit}>Submit</button>
			</Card>
		</div>
	)
}

export default App
