// A mock function to mimic making an async request for data
// export function fetchCount(amount = 1) {
// 	return new Promise((resolve) => setTimeout(() => resolve({ data: amount }), 500))
// }

export function loginUser(email, password) {
	const requestOptions = {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify({ email, password }),
	}

	return fetch('http://localhost:3000/user', requestOptions)
		.then(handleResponse)
		.then((user) => {
			// store user details and jwt token in local storage to keep user logged in between page refreshes
			localStorage.setItem("user", JSON.stringify(user.data))
			localStorage.setItem("accessToken", JSON.stringify(user.accessToken))

			return user
		})
}
