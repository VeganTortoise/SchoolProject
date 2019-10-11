import React, { useReducer } from "react";
import { Context, initialState, reducer } from "./store";
import PeriodicTable from "./PeriodicTable";
import firebase from "firebase";
import EasterEgg from "./EasterEgg";

import "./App.css";

/**
 * The App is the overall container of the web App which builds the PeriodicTable Component
 * It is a function based component so it doesn't have a render function anymore
 * @author Punzenberger Felix
 * @return Provides the PeriodicTable Component and the EasterEgg
 */
function App() {
  const [store, dispatch] = useReducer(reducer, initialState);

  return (
    <Context.Provider value={{ store, dispatch }}>
      <div className="App">
        <h1>Periodic Table of Elements</h1>
        <PeriodicTable />
        <EasterEgg />
      </div>
    </Context.Provider>
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

firebase.initializeApp(firebaseConfig);
console.log(firebase);

export default App;
