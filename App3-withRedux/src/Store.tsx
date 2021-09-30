import React from "react";
import {Action, State} from "./Interfaces";

const initialState: State = {
  episodes: [],
  favourites: [],
};

export const Store = React.createContext<State | any>(initialState);

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "FETCH_DATA":
      return {...state, episodes: action.payload};
    case "ADD_FAV":
      return {...state, favourites: [...state.favourites, action.payload]};
    default:
      return state;
  }
}

export function StoreProvider(props: any): JSX.Element {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  return <Store.Provider value={{state, dispatch}}>{props.children}</Store.Provider>;
}
