import React, { Component } from "react";
import "./Navbar.css";
import { Switch } from "antd";

export class Navbar extends Component {
  render() {
    return (
      <nav className="Navbar">
        <ul className="SwitchList">
          <li className="SwitchItem">
            Symbol
            <Switch />
          </li>
          {/* <li className="SwitchItem">
            Name
            <Switch />
          </li> */}
          <li className="SwitchItem">
            Number
            <Switch />
          </li>
          <li className="SwitchItem">
            Properties
            <Switch />
          </li>
          <li className="SwitchItem">
            Weight
            <Switch />
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
