import React from "react"
import { useRef } from "react"
import Child from "./Child"

const Parent = () => {
	const ref = useRef()
	return (
		<div>
            <button onClick={()=>ref.current.increment()} >ParentCLick</button>
            <br />
            <br />
			<Child ref={ref} />
		</div>
	)
}

export default Parent
