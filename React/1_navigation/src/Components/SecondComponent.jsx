import React from 'react';

class SecondComponent extends React.Component {
  render() {
    const internalCssDemo = {fontSize:'80px',color:'red'}

    return <h1 style={internalCssDemo}>Second Component.</h1>;
  }
}

export default SecondComponent;