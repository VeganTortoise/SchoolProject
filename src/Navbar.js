import React, { useContext } from "react";
import { Context } from "./store.js";
import "./Navbar.css";
import { Switch, Divider, Button } from "antd";

function Navbar() {
  const { store, dispatch } = useContext(Context);
  const switchToggle = name => {
    dispatch({
      type: name
    });
  };
  const ResetEasterString = () => {
    dispatch({
      type: "ResetEasterString"
    });
  };

  return (
    <div>
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
      {store.easteregg && (
        <ul className="SwitchList">
          <li className="SwitchItem">{store.easterString}</li>
          <li className="SwitchItem">
            <Button onClick={ResetEasterString}>Reset</Button>
          </li>
        </ul>
      )}
    </div>
  );
}

export default Navbar;
