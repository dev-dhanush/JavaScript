import React from "react"

const HoverCounts = (props) => {
	return <div onMouseOver={props.incrementCount}>ClickCounts {props.count} times</div>
}

export default HoverCounts
