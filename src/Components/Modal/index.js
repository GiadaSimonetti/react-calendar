import React, { Component } from 'react';
import Modal from 'react-responsive-modal';
import './centeredModal.css';
import Calendar from '../Calendar';


const style = {
  position: "relative",
  margin: "50px auto"
};


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

  onDayClick = (e, day) => {
    alert("You select day " + day)
  }

  render() {
    const { open } = this.state;
    return (
      <div className="modal">
        <h4>Calendar</h4>
        <button className="btn btn-action" onClick={this.onOpenModal}>
          Open
        </button>{' '}
        <div className="modal-wrapper">
          <Modal open={open} onClose={this.onCloseModal} center>
          <div className="modal-header">
          </div>
          <div className="modal-content">

          <Calendar
            onDayClick={(e, day) => this.onDayClick(e, day)}
          />

          </div>
          <div className="modal-footer">
          </div>
          </Modal>
        </div>
      </div>
    );
  }
}
