import React, { useRef } from "react";
import "./styles.css";

function FancyInput(props, ref) {
  const inputRef = useRef();

  React.useImperativeHandle(ref, () => {
    return {
      focus() {
        inputRef.current.focus();
      }
    };
  });

  return <input {...props} ref={inputRef} />;
}
FancyInput = React.forwardRef(FancyInput);

export default function App() {
  const fancyInputRef = useRef();
  const focusInput = () => {
    fancyInputRef.current.focus();
  };

  return (
    <div className="App">
      <button onClick={focusInput}>focus</button>
      <FancyInput defaultValue="hi.." ref={fancyInputRef} />
    </div>
  );
}