import React from 'react'

// The term “render prop” refers to a technique for sharing code between React components using a prop whose value is a function.
// A component with a render prop takes a function that returns a React element and calls it instead of implementing its own render logic.
// Its like a function pass as a prop in child component from parent component.

// Parent component sending render props to the child
class ParentSampleRenderProps extends React.Component {
    render() {
      return (
        <ChildSampleRenderProps
          // Passing render props to the child component
          render={() => {
            return (
              <div>
                <h3> 
                    I am coming from parent sample render props.
                </h3>
              </div>
            )
          }}
        />
      )
    }
  }

// Child component getting render props
class ChildSampleRenderProps extends React.Component {
    render() {
      return (
        <div>
          <h2>I am Child Render Prop Component</h2>
          {this.props.render()}
        </div>
      )
    }
  }
    
  
    
  export default ParentSampleRenderProps;