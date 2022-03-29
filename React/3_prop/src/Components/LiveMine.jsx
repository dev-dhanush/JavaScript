import React, { Component } from "react"

export default class GrandParents extends Component {
	render() {
		return <Parent render={(mouse) => <Child mouse={mouse}></Child>}></Parent>
	}
}

class Parent extends Component {
	constructor(props) {
		super(props)
		this.handelMouseMove = this.handelMouseMove.bind(this)
		this.state = {
			x: 0,
			y: 0,
		}
	}

	handelMouseMove(event) {
		this.setState({
			x: event.clientX,
			y: event.clientY,
		})
	}

	render() {
		return (
			<>
				<div style={{ height: "200px", width: "200px", backgroundColor: "Red" }} onMouseMove={this.handelMouseMove}>
					{this.props.render(this.state)}
				</div>
				<img src={process.env.PUBLIC_URL + "/sky9.png"} alt="Sky9" style={{ position: "absolute", left: this.state.x, top: this.state.y }} />
			</>
		)
	}
}

class Child extends Component {
	render() {
		return (
			<>
				<h2>
					{this.props.mouse.x} - {this.props.mouse.y}
				</h2>
			</>
		)
	}
}
