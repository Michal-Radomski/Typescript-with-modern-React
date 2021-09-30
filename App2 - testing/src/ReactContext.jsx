import React from "react";

const {Provider, Consumer} = React.createContext();

export function Parent(props) {
  const text = "Random Text";
  return <Provider value={text}>{props.children} </Provider>;
}

export function Child() {
  return <Consumer>{(text) => <div>{text}</div>}</Consumer>;
}
