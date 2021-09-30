import React from "react";

const App = (): JSX.Element => {
  const sum = (a: number, b: number): number => {
    return a + b;
  };
  return (
    <React.Fragment>
      <h1>Hello TS!</h1>
      <h2>{sum(3, 4)}</h2>
    </React.Fragment>
  );
};

export default App;
