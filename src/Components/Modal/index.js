import React, { Component } from 'react';
import Modal from 'react-responsive-modal';
import './centeredModal.css';
import Calendar from '../Calendar';


export default class CenteredModal extends Component {
  state = {
    open: false,
  };

  onOpenModal = () => {
    this.setState({ open: true })
  }

  onCloseModal = () => {
    this.setState({ open: false });
  };

  render() {
    const { open } = this.state;
    return (
      <div className="modal">
        <h4>Centered modal</h4>
        <button className="btn btn-action" onClick={this.onOpenModal}>
          Open
        </button>{' '}
        <div className="modal-wrapper">
          <Modal open={open} onClose={this.onCloseModal} center>
          <div className="modal-header">
          {"I'm the Modal header"}
          </div>
          <div className="modal-content">
          {"I'm the Modal body"}

          <Calendar />

          </div>
          <div className="modal-footer">
            {"I'm the Modal footer"}
          </div>
          </Modal>
        </div>
      </div>
    );
  }
}
