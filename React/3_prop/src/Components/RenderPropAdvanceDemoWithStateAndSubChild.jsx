import React from 'react';


//MAIN CLASS - GRAND PARENT CLASS.
class PersonCompany extends React.Component {
    // The term “render prop” refers to a technique for sharing code between React components using a prop whose value is a function.
    // A component with a render prop takes a function that returns a React element and calls it instead of implementing its own render logic.
    render() {
      return (
        <div>
          
          <h1>Move the mouse around!</h1>
            {/* Company is a CHILD component */}
            {/* Person is a Parent component */}
            {/* PersonCompany is a GRAND PARENT component */}

            {/* Company CHILD component tagged in to the PersonCompany Component (Perent)*/}
            {/* We use render props as an props value from grand parent to child calling. */}
            {/* Inside render prop we pass function as a props named mouse. */}
            {/* Inside this functional props we pass Person as a component. */}
            {/* Inside this Person component calling we pass mouse as a props and the value of a rendered mouse will be passed as a prop value. */}
            <Company render={mouse=>(<Person mouse={mouse} />)}/>
        </div>
      );
    }
  }

    //PARENT CLASS
    class Company extends React.Component {
      constructor(props) {
        super(props);
        this.handleMouseMove = this.handleMouseMove.bind(this);
        this.state = { x: 0, y: 0 };
      }
    
      handleMouseMove(event) {
        this.setState({
          x: event.clientX,
          y: event.clientY
        });
      }
    
      render() {
        return (
          // Render Props
          <div style={{ height: '200px' }} onMouseMove={this.handleMouseMove}>
            {this.props.render(this.state)}
          </div>
        );
      }
    }
    
  

//CHILD CLASS
class Person extends React.Component {
    render() {
      const mouse = this.props.mouse;
      return (
          <>
            <div>{mouse.x} - {mouse.y}</div>
            <img src={process.env.PUBLIC_URL + '/sky9.png'} style={{ position: 'absolute', left: mouse.x, top: mouse.y }} alt='Sky9' />
         </>
      );
    }
  }
  
  

  export default PersonCompany