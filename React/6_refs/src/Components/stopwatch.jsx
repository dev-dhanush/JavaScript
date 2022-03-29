import { useRef, useState, useEffect } from 'react';
function StopwatchDemo() {

  const timerIdRef = useRef(0);
  const [count, setCount] = useState(0);
  const handlerFunction = () => {
    if (timerIdRef.current) 
    { 
      return; 
    }
    timerIdRef.current = setInterval(() => setCount(c => c+1), 1000);
  };
  const stopHandler = () => {
    clearInterval(timerIdRef.current);
    timerIdRef.current = 0;
  };
  
  // There are two common kinds of side effects in React components: those that don’t require cleanup, and those that do. Let’s look at this distinction in more detail.
  useEffect(() => {
    return () => clearInterval(timerIdRef.current);
  }, []);

  return (
    <div>
      <div>Timer: {count}s</div>
      <div>
        <button onClick={handlerFunction}>Start</button>
        <button onClick={stopHandler}>Stop</button>
      </div>
    </div>
  );
}

export default StopwatchDemo;