import { useState } from "react";
function FunctionalCounter() {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(counter + 1);
  };
  return <div> 
    <h3>Counter: {counter}</h3>
    <button onClick={increment}>Click</button>
  </div>;
}
export default FunctionalCounter;
