import React, { Component } from "react";
import { Modal, Button } from "antd";
import BigElement from "./BigElement";
import "./Infobox.css";
import "./BigElement.css";

/**
 * The Infobox is a class-based component for adding the Information in the Modal Dialog.
 * @author Punzenberger Felix
 * @author Andreas Hagn
 * @render The modal is created in here with the data of the clicked on Element. It's buttons handle the clicks for closing.
 */
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
            onCancel={this.handleOk}
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
              <strong>Element properties: </strong>
              {this.props.properties}
            </div>
            <div className="ElementGroupNumber">
              {this.props.group !== 0 ? (
                <div>
                  <strong>Element group number: </strong>
                  {this.props.group}
                </div>
              ) : (
                ""
              )}
            </div>
            <div className="ElementWeight">
              <strong>Atomic weight: </strong>
              {this.props.weight} amu
            </div>
            <BigElement
              number={this.props.number}
              symbol={this.props.symbol}
              name={this.props.name}
              properties={this.props.properties}
              group={this.props.group}
              weight={this.props.weight}
            />
          </Modal>
        </div>
      </>
    );
  }
}

export default Infobox;
