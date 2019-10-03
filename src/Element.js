import React, { useState, useContext } from "react";
import { Context } from "./store";
import "./Element.css";
import Infobox from "./Infobox.js";

/**
 * One Element of the Periodic Table
 */
function Element(props) {
  /**
   * @return Element is passed to the caller
   * @param props are passed to the div
   */
  const { store } = useContext(Context);
  const [showModal, setShowModal] = useState(false);

  let color;
  switch (props.properties) {
    case "Other nonmetals":
      color = "green";
      break;
    case "Noble gases":
      color = "gold";
      break;
    case "Alkali metals":
      color = "DeepPink";
      break;
    case "Alkaline earth metals":
      color = "MediumVioletRed";
      break;
    case "Metalloids":
      color = "Pink";
      break;
    case "Post-transition metals":
      color = "Magenta";
      break;
    case "Transition metals":
      color = "Lavender";
      break;
    case "Lanthanoids":
      color = "RoyalBlue";
      break;
    case "Actinoids":
      color = "Aqua";
      break;
    case "Unknown":
      color = "LightSlateGray";
      break;

    default:
      break;
  }
  return (
    <>
      <div
        className="Element"
        style={{ backgroundColor: color }}
        onClick={setShowModal(true)}
      >
        <div className="number">{props.number}</div>
        <div className="symbol">{props.symbol}</div>
        <div className="name">{props.name}</div>
      </div>
      {!store.minigame && showModal && (
        <Infobox
          name={props.name}
          number={props.number}
          properties={props.properties}
          group={props.group}
          weight={props.weight}
          setShowModal={setShowModal}
        />
      )}
    </>
  );
}

export default Element;
