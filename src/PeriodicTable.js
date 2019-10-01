import React, { Component } from "react";
import Element from "./Element";
import "./PeriodicTable.css";
import firebase from "firebase";

export class PeriodicTable extends Component {
  render() {
    const n = 118; // Or something else
    let elements = [];
    var database = firebase.firestore();
    database
      .collection("PeriodicTableOfElements")
      .orderBy("id")
      .get()
      .then(snapshot => {
        snapshot.docs.forEach(doc => {
          console.log(doc.data());
          elements.push(doc.data());
        });
      });
    console.log("THIS IS THE ARRAY ELEMENTS");
    console.log(elements);
    return (
      <div className="PeriodicTable">
        {[...Array(n)].map((e, i) => {
          //console.log(i);
          database
            .collection("PeriodicTableOfElements")
            .orderBy("id")
            .get();
          return (
            <div className={`element-${i}`}>
              <Element />
            </div>
          );
        })}
      </div>
    );
  }
}

export default PeriodicTable;
