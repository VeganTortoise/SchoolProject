import React from "react";
import "./Element.css";
import Infobox from "./Infobox.js";

/**
 * One Element of the Periodic Table
 */
export class Element extends React.Component {
  /**
   * @return Element is passed to the caller
   * @param props are passed to the div
   */
  state = {
    showModal: false
  };

  setShowModal = () => {
    this.setState(state => ({
      showModal: !state.showModal
    }));
  };

  render() {
    let color;
    switch (this.props.properties) {
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
          onClick={this.setShowModal}
        >
          <div className="number">{this.props.number}</div>
          <div className="symbol">{this.props.symbol}</div>
          <div className="name">{this.props.name}</div>
        </div>
        {this.state.showModal && (
          <Infobox
            name={this.props.name}
            number={this.props.number}
            properties={this.props.properties}
            group={this.props.group}
            weight={this.props.weight}
            setShowModal={this.setShowModal}
          />
        )}
      </>
    );
  }
}

export default Element;
