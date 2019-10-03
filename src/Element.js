import React from "react";
import "./Element.css";

/**
 * One Element of the Periodic Table
 */
export class Element extends React.Component {
  /**
   * @return Element is passed to the caller
   * @param props are passed to the div
   */
  render() {
    return (
      <div className="Element">
        <div className="number">{this.props.number}</div>
        <div className="symbol">{this.props.symbol}</div>
        <div className="name">{this.props.name}</div>
      </div>
    );
  }
}

export default Element;
