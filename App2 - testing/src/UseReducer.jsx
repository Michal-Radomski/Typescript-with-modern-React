// -Array.prototype.reduce()
// let arr=[0,1,2,3]
// function sum(a,b) { return a+b}
// let result =arr.reduce(sum, 0)
// console.log(result)

import React from "react";

const UseReducer = () => {
  const reducer = (state, action) => {
    // console.log(action, state);
    if (action === "ADD") {
      return state + 1;
    }
    if (action === "SUBTRACT") {
      return state - 1;
    }
    if (action === "RESET") {
      return (state = 0);
    }
    return state;
  };
  // const [value, setValue]=React.useState('')
  const [count, dispatch] = React.useReducer(reducer, 0);

  return (
    <React.Fragment>
      <div>{count}</div>
      <button onClick={() => dispatch("ADD")}> + </button>
      <button onClick={() => dispatch("SUBTRACT")}> - </button>
      <button onClick={() => dispatch("RESET")}> Reset </button>
    </React.Fragment>
  );
};

export default UseReducer;
