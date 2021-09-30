import React from "react";

const UseReducer2 = () => {
  const reducer = (state, action) => {
    // const obj = {
    //   ADD: state + 1,
    //   SUBTRACT: state - 1,
    //   RESET: (state = 0),
    // };
    // // console.log(state, action, obj);
    // return obj[action];
    // - To samo co wyżej
    switch (action) {
      case "ADD":
        return state + 1;
      case "SUBTRACT":
        return state - 1;
      case "RESET":
        return (state = 0);
      default:
        return state;
    }
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

export default UseReducer2;
