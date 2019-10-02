import React from "react";
import PeriodicTable from "./PeriodicTable";
import firebase from "firebase";

import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Periodic Table of Elements</h1>
      <PeriodicTable />
    </div>
  );
}
//the connection to the database is set up
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

export default App;
