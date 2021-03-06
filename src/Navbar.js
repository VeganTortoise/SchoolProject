import React, { useContext } from "react";
import { Context } from "./store.js";
import "./Navbar.css";
import { Switch, Button } from "antd";

/**
 * @author Hagn Andreas
 * @return The Navbar is created with different Switches. The Switches are set to either be default activated or deactivated. By Toggling them the view of an Element is changed.
 */
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
