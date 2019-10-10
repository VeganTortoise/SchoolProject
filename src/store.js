import React from "react";
export const initialState = {
  showSymbol: true,
  showName: true,
  showNumber: true,
  showWeight: false,
  easterString: "",
  easteregg: false
  // isHovered: false
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "setShowSymbol":
      return { ...state, showSymbol: !state.showSymbol };
    case "setShowName":
      return { ...state, showName: !state.showName };
    case "setShowNumber":
      return { ...state, showNumber: !state.showNumber };
    case "setShowWeight":
      return { ...state, showWeight: !state.showWeight };
    case "setEasterString":
      return { ...state, easterString: state.easterString + action.value };
    case "ResetEasterString":
      return { ...state, easterString: "" };
    case "setEasterEgg":
      return { ...state, easteregg: !state.easteregg };
    // case "setIsHovered":
    //   return { ...state, isHovered: !state.isHovered };

    default:
      return state;
  }
};

export const Context = React.createContext();
