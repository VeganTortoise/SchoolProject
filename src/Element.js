import React, { useContext, useState } from "react";
import { Context } from "./store.js";
import "./Element.css";
import Infobox from "./Infobox.js";

/**
 * One Element of the Periodic Table is created
 * @author Punzenberger
 * @param {*} props Props are the Properties given to the Element like Name Symbol and so on
 * @returns An element with it's different parts is created. The props are for filling the Box, the Modal is for showing the data in a Dialog.
 */
function Element(props) {
  const { store } = useContext(Context);
  const [showModal, setShowModal] = useState(false);

  /**
   * @author Punzenberger Felix
   */
  const setShowModalAction = () => {
    if (!store.easteregg) {
      setShowModal(!showModal);
    }
  };

  /**
   * The color of the Element is chosen by its properties
   * @author Punzenberger Felix
   */
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
        onClick={setShowModalAction}
      >
        <div className="upperLine">
          <div className="weight">{store.showWeight ? props.weight : " "}</div>
          <div className="number">{store.showNumber ? props.number : " "}</div>
        </div>
        <div className="symbol">{store.showSymbol ? props.symbol : " "}</div>
        <div className="name">{store.showName ? props.name : " "}</div>
      </div>
      {showModal && (
        <Infobox
          symbol={props.symbol}
          name={props.name}
          number={props.number}
          properties={props.properties}
          group={props.group}
          weight={props.weight}
          setShowModal={setShowModalAction}
        />
      )}
    </>
  );
}

export default Element;
