import React from "react";
import {Parent, Child} from "./ReactContext";
import {Parent2, Child2} from "./ReactContext2";
import UseReducer from "./UseReducer";
import UseReducer2 from "./UseReducer2";

function App() {
  return (
    <div>
      ReactContext:
      <Parent>
        <Child />
      </Parent>
      <hr />
      ReactContext2
      <Parent2>
        <Child2 />
      </Parent2>
      <hr />
      UseReducer
      <UseReducer />
      <hr />
      UseReducer2
      <UseReducer2 />
    </div>
  );
}

export default App;
