import React, { Component } from "react";
import firebase from "firebase";
import Element from "./Element";
import { Spin } from "antd";
import "./PeriodicTable.css";

export class PeriodicTable extends Component {
  state = {
    elements: []
  };

  componentDidMount() {
    let database = firebase.firestore();

    // the data from the database is being read and filled in an array
    database
      .collection("PeriodicTableOfElements")
      .orderBy("id")
      .get()
      .then(snapshot => {
        const tmp = snapshot.docs.map(doc => doc.data());
        this.setState({ elements: tmp });
      });
  }

  // The periodic table is being rendered
  render() {
    return this.state.elements.length === 0 ? (
      <Spin size="large" />
    ) : (
      <div className="PeriodicTable">
        {this.state.elements.map((e, i) => (
          //the Elements are filled with the values form the database
          <div className={`element-${i}`}>
            <Element
              number={i + 1}
              symbol={this.state.elements[i].symbol}
              name={this.state.elements[i].name}
              properties={this.state.elements[i].properties}
              group={this.state.elements[i].group}
              weight={this.state.elements[i].weight}
            />
          </div>
        ))}
      </div>
    );
  }
}

export default PeriodicTable;
