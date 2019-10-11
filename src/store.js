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

/**
 * sets the global states for manipulating the view
 * @author Punzenberger Felix
 * @author Hagn Andreas
 * @param {*} state the state is a global variable for changing certain condition (e.g. what is shown in an element)
 * @param {*} action the type of the action decides which state to change
 * @return the new changed state is returned
 */
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
