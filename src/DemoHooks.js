import { useState, useEffect, useCallback } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  useEffect(() => {
    if (count === 10) {
      alert("10");
    }
  }, [count]);

  const increment = useCallback(() => {
    setCount((value) => value + 1);
  }, []);
  const decrement = useCallback(() => {
    setCount(count - 1);
  }, [count]);
  return (
    <div>
      <div> Сейчас {time.toLocaleTimeString()}</div>
      <div>{count}</div>
      <button type="button" onClick={increment}>
        +
      </button>
      <button type="button" onClick={decrement}>
        -
      </button>
    </div>
  );
}

export default App;
