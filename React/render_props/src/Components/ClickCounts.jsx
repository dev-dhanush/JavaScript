import React from "react"

const ClickCounts = (props) => {
	return <button onClick={props.incrementCount}>ClickCounts {props.count} times</button>
}

export default ClickCounts
