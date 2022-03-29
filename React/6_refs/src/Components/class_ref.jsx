import React, { Component } from "react"

export default class Class_ref extends Component {
	constructor() {
		super()
		this.state = { count: 0 }
	}

	updateByUsingRef = () => {
		this.setState({ count: this.refs.counterRef.value })
	}

	render() {
		return (
			<div>
				<input type="text" ref="counterRef" onChange={this.updateByUsingRef.bind(this)} />
				<br />
                <div>{this.state.count}</div>
			</div>
		)
	}
}
