import React, { Component } from "react";
import { Modal, Button } from "antd";
import "./Infobox.css";

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
    this.setState({ visible: false });
  };

  render() {
    const { visible, loading } = this.state;
    return (
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
          <div ClassName="TableNumber">
            <strong> Element number: </strong>
            {this.props.number}
          </div>
          <div ClassName="ElementGroupName">
            <strong>Element group name: </strong>
            {this.props.properties}
          </div>
          <div ClassName="ElementGroupNumber">
            <strong>Element group number: </strong>
            {this.props.group}
          </div>
          <div ClassName="ElementWeight">
            <strong>Atomic weight: </strong>
            {this.props.weight} amu
          </div>
        </Modal>
      </div>
    );
  }
}

export default Infobox;
