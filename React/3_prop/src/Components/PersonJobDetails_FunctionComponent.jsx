import React from 'react';
import ReactDOM from 'react-dom';
import Person from './PersonBasicDetails';

function PersonJobDetails() {
  const personJobInfo = { designation: "Sr. Front End Developer", salary: 100000 };
  return (
    <>
	    <Person personJobData={personJobInfo} />
    </>
  );
}

ReactDOM.render(<PersonJobDetails />, document.getElementById('root'));

export default PersonJobDetails