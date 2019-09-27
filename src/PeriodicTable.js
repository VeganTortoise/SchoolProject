import React, { Component } from "react";
import Element from "./Element";
import "./PeriodicTable.css";

export class PeriodicTable extends Component {
  render() {
    const n = 118; // Or something else

    return (
      <div className="PeriodicTable">
        {[...Array(n)].map((e, i) => (
          <div className={`element-${i}`}>
            <Element />
          </div>
        ))}
      </div>
    );
  }
}

export default PeriodicTable;
