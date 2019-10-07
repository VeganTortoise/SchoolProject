import React, { useContext } from "react";
import { Context } from "./store.js";
import "./Navbar.css";
import { Switch } from "antd";

function Navbar() {
  const { dispatch } = useContext(Context);
  const switchToggle = name => {
    dispatch({
      type: name
    });
  };

  return (
    <nav className="Navbar">
      <ul className="SwitchList">
        <li className="SwitchItem">
          Symbol
          <Switch
            defaultChecked
            className="NumberSwitch"
            onChange={() => switchToggle("setShowSymbol")}
          />
        </li>
        <li className="SwitchItem">
          Name
          <Switch
            defaultChecked
            className="NumberSwitch"
            onChange={() => switchToggle("setShowName")}
          />
        </li>
        <li className="SwitchItem">
          Number
          <Switch
            defaultChecked
            className="NumberSwitch"
            onChange={() => switchToggle("setShowNumber")}
          />
        </li>
        <li className="SwitchItem">
          Weight
          <Switch
            className="NumberSwitch"
            onChange={() => switchToggle("setShowWeight")}
          />
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
