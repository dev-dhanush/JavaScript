import React from "react"
import { useState } from "react"

const Counter = (props) => {
	let [count, setCount] = useState(0)

	const handelCount = () => {
		return setCount((count += 1))
	}

	return <div>{props.render(count, handelCount)}</div>
}

export default Counter
