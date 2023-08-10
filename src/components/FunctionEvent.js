function FunctionEvent() {
  function handleCLick() {
    console.log("Hello");
  }
  return (
    <div>
      <h3>Functional FunctionEvent</h3>
      <button onClick={handleCLick}>Click</button>
    </div>
  );
}
export default FunctionEvent;
