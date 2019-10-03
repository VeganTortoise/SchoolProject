import React, { Component } from "react";
import Element from "./Element";
import "./PeriodicTable.css";
import firebase from "firebase";

/**
 * The Periodic Table creates and consists of all the Elements
 */
export class PeriodicTable extends Component {
  /**
   *An array is created as state which gets filled later on
   */
  state = {
    elements: []
  };
  /**
   *reads in the database and sets the data <br>
   *Makes sure the database is read before it continues with the code
   *Otherwise the Array can't return the values when needed
   *@param tmp used for storing the data
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
   * @param elements contains data passed as props to Element
   * @return creates the Periodic Table
   */
  render() {
    return (
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
      </div>
    );
  }
}

export default PeriodicTable;
