import React from "react";
import "./BigElement.css";

function BigElement(props) {
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
        className="BigElement"
        style={{ backgroundColor: color }}
        number={props.number}
        symbol={props.symbol}
        name={props.name}
        properties={props.properties}
        group={props.group}
        weight={props.weight}
      >
        <div className="upperLineBig">
          <div className="weightBig">{props.weight}</div>
          <div className="numberBig">{props.number}</div>
        </div>
        <div className="symbolBig">{props.symbol}</div>
        <div className="nameBig">{props.name}</div>
      </div>
    </>
  );
}

export default BigElement;
