import React from "react";
export const initialState = { minigame: false };

/*
stores the Global state of the minigame
*/
export const reducer = (state, action) => {
  switch (action.type) {
    case "setMinigame":
      return { minigame: action.value };
    default:
      return state;
  }
};

export const Context = React.createContext();
