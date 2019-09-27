import React from "react";
import "./Element.css";

export class Element extends React.Component {
  render() {
    return (
      <div>
        <div className="number">1</div>
        <div className="symbol">H</div>
        <div className="name">Hydrogen</div>
      </div>
    );
  }
}

export default Element;
