import React from "react";
import TestComponent from "./TestComponent";

function App() {
  function sum(a: number, b: number): number {
    return a + b;
  }
  return (
    <React.Fragment>
      <p>Hello TypeScript!</p>
      <p>TSX Component</p>
      <p>Sum function: sum 2+15: {sum(2, 15)}</p>
      <TestComponent />
    </React.Fragment>
  );
}

export default App;
