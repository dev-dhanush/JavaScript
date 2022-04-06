import React, { Component } from "react"

export default function Hoc(App) {
	return class extends Component {
		render() {
			return (
				<div>
					<h1>this is from hoc</h1>
					<App></App>
				</div>
			)
		}
	}
}
