import React, { Component } from "react";
import firebase from "firebase";
import Element from "./Element";
import Navbar from "./Navbar";
//import BigElement from "./BigElement";
import { Spin } from "antd";
import "./PeriodicTable.css";

/**
 * The Periodic Table creates and consists of all the Elements
 */
export class PeriodicTable extends Component {
  /**
   *An array is created as state which gets filled later on
   * @author Punzenberger Felix
   */
  state = {
    /**
     *contains data passed as props to Element
     */
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

    // the data from the database is being read and filled in an array
    database
      .collection("PeriodicTableOfElements")
      .orderBy("id")
      .get()
      .then(snapshot => {
        /**
         * @param tmp Used for storing the snapshots before adding to the database
         */
        const tmp = snapshot.docs.map(doc => doc.data());
        this.setState({ elements: tmp });
      });
  }

  /**
   * runs through a loop to create all the elements
   * @state contains the element array
   * @return creates the Periodic Table with all its elements
   */
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
