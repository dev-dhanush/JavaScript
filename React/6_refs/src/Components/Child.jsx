import React from "react"
import { useImperativeHandle } from "react"
import { forwardRef } from "react"
import { useRef } from "react"

const Child = (props) => {
	return <input type="text" ref={props.forwardedRef} />
}

const Parent = ()=>{
	const childRef = useRef(null);

	function handleClick() {
		console.log("child ref current ",childRef.current);
	}

	return(
		<Child forwardRef={childRef} onChange={handleClick} />
	)
}

export default Parent
