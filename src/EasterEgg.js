import React, { useContext } from "react";
import Konami from "react-konami-code";
import Confetti from "react-confetti";
import { Context } from "./store.js";

function EasterEgg() {
  const { store, dispatch } = useContext(Context);

  const easterEggToggle = () => {
    dispatch({
      type: "setEasterEgg"
    });
  };

  return (
    <div>
      <Konami action={easterEggToggle} />
      {store.easteregg && <Confetti />}
    </div>
  );
}

export default EasterEgg;
