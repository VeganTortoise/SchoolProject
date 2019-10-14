import React, { Component } from "react";
import firebase from "firebase";
import Element from "./Element";
import Navbar from "./Navbar";
import { Spin } from "antd";
import "./PeriodicTable.css";

/**
 * The Periodic Table creates and consists of all the Elements
 * @author Hagn Andreas
 * @author Punzenberger Felix
 * @return If the Table isn't loaded yet it returns a Spinner. For loading it runs through a loop to render all the Elements. The data is taken from the array created from the firebase data.
 */
export class PeriodicTable extends Component {
  state = {
    elements: []
  };
  /**
   *reads in the database and sets the data <br>
   *Makes sure the database is read before it continues with the code
   *Otherwise the Array can't return the values when needed
   *@author Punzenberger Felix
   */
  componentDidMount() {
    let database = firebase.firestore();

    database
      .collection("PeriodicTableOfElements")
      .orderBy("id")
      .get()
      .then(snapshot => {
        const tmp = snapshot.docs.map(doc => doc.data());
        this.setState({ elements: tmp });
      });
  }

  render() {
    return this.state.elements.length === 0 ? (
      <Spin size="large" />
    ) : (
      <>
        <Navbar />
        <div className="PeriodicTable">
          {this.state.elements.map((e, i) => (
            /** */
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
          {/* <div className="elementExample"></div> */}
        </div>
      </>
    );
  }
}

export default PeriodicTable;
