import React from "react";
import PeriodicTable from "./PeriodicTable";
import firebase from "firebase";
import { Spin } from "antd";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Spin />
      <h1>Periodic Table of Elements</h1>
      <PeriodicTable />
    </div>
  );
}
var firebaseConfig = {
  apiKey: "AIzaSyCn1FfRT6qVBWwkmVj6L-R351WSFX0sq6g",
  authDomain: "periodictable-af684.firebaseapp.com",
  databaseURL: "https://periodictable-af684.firebaseio.com",
  projectId: "periodictable-af684",
  storageBucket: "periodictable-af684.appspot.com",
  messagingSenderId: "821428636191",
  appId: "1:821428636191:web:11908fe1afd384429b632a",
  measurementId: "G-2Y1BN0FZXG"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
console.log(firebase);

var database = firebase.firestore();
database
  .collection("PeriodicTableOfElements")
  .get()
  .then(snapshot => {
    snapshot.docs.forEach(doc => {
      console.log(doc.data());
    });
  });

export default App;
