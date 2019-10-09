import React, { Component } from "react";
import { Modal, Button } from "antd";
import BigElement from "./BigElement";
import "./Infobox.css";
import "./BigElement.css";

export class Infobox extends Component {
  state = {
    loading: false,
    visible: true
  };

  showModal = () => {
    this.setState({
      visible: true
    });
  };

  handleOk = () => {
    // this.setState({ visible: false });
    this.props.setShowModal();
  };

  render() {
    const { visible, loading } = this.state;
    return (
      <>
        <div>
          <Modal
            visible={visible}
            title={this.props.name}
            onOk={this.handleOk}
            footer={[
              <Button
                key="submit"
                type="primary"
                loading={loading}
                onClick={this.handleOk}
              >
                Ok
              </Button>
            ]}
          >
            <div className="TableNumber">
              <strong> Element number: </strong>
              {this.props.number}
            </div>
            <div className="ElementGroupName">
              <strong>Element group name: </strong>
              {this.props.properties}
            </div>
            <div className="ElementGroupNumber">
              <strong>Element group number: </strong>
              {this.props.group}
            </div>
            <div className="ElementWeight">
              <strong>Atomic weight: </strong>
              {this.props.weight} amu
            </div>
            <BigElement
              number={this.props.number}
              symbol={this.props.symbol}
              name={this.props.name}
              weight={this.props.weight}
            />
          </Modal>
        </div>
      </>
    );
  }
}

export default Infobox;
