import React, { useContext } from "react";
import Konami from "react-konami-code";
import { Context } from "./store.js";
import Minigame from "./Minigame.js";

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
      {store.easteregg && <Minigame />}
    </div>
  );
}

export default EasterEgg;
