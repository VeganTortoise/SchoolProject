import React, { useContext } from "react";
import Konami from "react-konami-code";
import { Context } from "./store.js";
import Minigame from "./Minigame.js";

/**
 * Takes care of the EasterEgg's activation
 * with the Konami Code Up, Up, Down, Down, Left, Right, Left, Right, B, A
 * @author Punzenberger Felix
 */
function EasterEgg() {
  const { store, dispatch } = useContext(Context);
  /**
   * Toggles between activated and deactivated
   * @author Punzenberger Felix
   */
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
