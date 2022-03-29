import React from "react"
import { forwardRef } from "react"
import { useImperativeHandle } from "react"
import { useState } from "react"

let Child = (props,ref) => {
	const [count, setCount] = useState(0)
	useImperativeHandle(ref, () => ({
		increment,
	}))
	const increment = () => {
		setCount(count + 1)
	}
	return (
		<div>
			<button onClick={increment}>Child Click</button>
			<h1>{count}</h1>
		</div>
	)
}
Child = forwardRef(Child)
export default Child
