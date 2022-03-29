import React from "react";

class Person extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name: "Dhanush Patel",
			contactNo: "000000000",
			salary: 100000,
		};
	}

	updateSalary = () => {
		this.setState({ salary: 200000 });
	};
	render() {
		return (
			<div>
				<h1>My name is {this.state.name}</h1>
				<p>My contact no. is {this.state.contactNo}</p>
				<p>My salary/month is {this.state.salary}</p>
				<button type="button" onClick={this.updateSalary}>
					Update Salary
				</button>
			</div>
		);
	}
}

export default Person;
