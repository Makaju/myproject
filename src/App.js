import logo from "./logo.svg";
import "./App.css";
import FunctionEvent from "./components/FunctionEvent";
import ClassEvent from "./components/ClassEvent";
import FunctionalCounter from "./components/FunctionalCounter";
import ConditionalComponent from "./components/ConditionalComponent";

function App() {
  return (
    <div className="App">
      <FunctionEvent></FunctionEvent>
      <ClassEvent></ClassEvent>
      <FunctionalCounter></FunctionalCounter>
      <ConditionalComponent></ConditionalComponent>
    </div>
  );
}

export default App;
