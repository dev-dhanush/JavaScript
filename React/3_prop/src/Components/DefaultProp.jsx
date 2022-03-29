import React, { Component } from 'react';
  
class PersonDefaultDemo extends Component {
  render() {
    return (
      <div>
        <p>Name: {this.props.name} </p>
        <p>Gender: {this.props.gender}</p>
        <hr/>
      </div>
    )
  }
}

PersonDefaultDemo.defaultProps = {
  name: "ABC XYZ",
  gender:"Male"
}
  
export default PersonDefaultDemo;