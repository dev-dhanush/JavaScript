import React, { useEffect, useRef } from "react"
import ForwardInput from "./Input"
const Parent = () => {
	const input1 = useRef(null)
	const input2 = useRef(null)
	const submit = useRef(null)

	useEffect(() => {
		input1.current.focus()
	}, [])

	const keyDownInput1 = (e) => {
		if (e.key === "Enter") return input2.current.focus()
	}

	const keyDownInput2 = (e) => {
		if (e.key === "Enter") return submit.current.focus()
	}

	const keyDownSubmit = (e) => {
		alert("submitted")
	}

	return (
		<>
			<ForwardInput onKeyDown={keyDownInput1} type="text" ref={input1} />
			<ForwardInput onKeyDown={keyDownInput2} type="text" ref={input2} />
			<ForwardInput onKeyDown={keyDownSubmit} type="submit" ref={submit} />
		</>
	)
}

export default Parent
