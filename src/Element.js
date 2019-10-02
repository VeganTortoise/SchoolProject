import React from "react";
import "./Element.css";

export class Element extends React.Component {
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
