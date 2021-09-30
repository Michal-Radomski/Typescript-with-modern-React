import React from "react";

const Store = React.createContext();

export function Parent2(props) {
  const text = "Random Text2";
  return <Store.Provider value={text}>{props.children} </Store.Provider>;
}

export function Child2() {
  const hook = React.useContext(Store);
  return <div>{hook}</div>;
}
