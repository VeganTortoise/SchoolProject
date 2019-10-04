import React from "react";
import PeriodicTable from "./PeriodicTable";
import firebase from "firebase";

import "./App.css";

/**
 * The App is the overall container of the web App which builds the PeriodicTable Component
 */
function App() {
  return (
    <div className="App">
      <h1>Periodic Table of Elements</h1>
      <PeriodicTable />
    </div>
  );
}
/**
 * the configuration for the database is saved in here
 * for example the apiKey and the databaseURL
 */
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
/**
 * Initializing firebase
 * @param firebase is imported from the firebase package
 * @param firebaseConfig passes on the data like the apiKey
 */
firebase.initializeApp(firebaseConfig);
console.log(firebase);

export default App;
