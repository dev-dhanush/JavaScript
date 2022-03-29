import React from "react"
import { useRef } from "react";
import { useState } from "react"

const Input = (props, refs) => {
	return <input {...props} ref={refs}></input>
}

const ForwardInput = React.forwardRef(Input)

// function Input(props, refs) {
// 	const [myVar, setMyVar] = useState("")
// 	const inputRef = useRef()

// 	// const trigger = () => props.keyDownInput1(inputRef);

// 	React.useImperativeHandle(refs, () => ({
// 		keyDownInput1() {
// 			props.keyDownInput2.focus()
// 		},
// 	}))
// 	return <input render={props.render} onKeyDown={props.onKeyDown} ref={refs}></input>
// }
// const ForwardInput = React.forwardRef(Input)

export default ForwardInput
