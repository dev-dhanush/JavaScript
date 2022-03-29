import * as React from "react";
import ReactDOM from "react-dom";
 
const InputText = React.forwardRef((props, ref) => (
 <h2 ref={ref} {...props} />
));

export default function App() {
  
  const ref = React.useRef();
  
  function changeValue() {
    ref.current.value = "i have done it"
  }
  
  return (
    <div className="App">
      <InputText ref={ref} placeholder="my input" />
      <button onClick={changeValue}>Focus</button>
    </div>
  );
 }
  
 const rootElement = document.getElementById("root");
 ReactDOM.render(<App />, rootElement);