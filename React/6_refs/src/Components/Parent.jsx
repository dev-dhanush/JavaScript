import React from "react"
import { useImperativeHandle } from "react"
import { forwardRef } from "react"
import { useRef } from "react"

const Parent = () => {
	const childRef = useRef()

	return (
		<div>
			<button onClick={() => childRef.current.showAlert()}>Click me</button>
			<Child ref={childRef} />
		</div>
	)
}

const Child = forwardRef((props, ref) => {
	useImperativeHandle(ref, () => ({
		showAlert() {
			alert("hello from child component")
		},
	}))
    return <div>This is div from child </div>
})

export default Parent
