import React, { Component } from 'react';
import './App.css';
import CenteredModal from './Components/Modal';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        </header>

        <CenteredModal />
      </div>
    );
  }
}
