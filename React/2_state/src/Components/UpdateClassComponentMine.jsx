import React, { Component } from "react";

export default class UpdateClassComponentMine extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: "dhanush",
			phone: "000000",
		};
	}

	updateSalary = () => {
		this.setState({
			name: "dhaush patel",
			phone: "0000000000025",
		});
	};

	render() {
		return (
			<>
				<button onClick={this.updateSalary}>click here</button>

				<div>{this.state.name}</div>
				<div>{this.state.phone}</div>
			</>
		);
	}
}
