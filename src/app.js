import React, { Component } from 'react';
import Modal from './components/modal';
import './app.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { 
      isOpen: false,
      title: "Block settings",
      tabs: Array("Layout","Background"),
      footerTitle: "Positioning Settings",
     };
  }

  toggleModal = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.toggleModal}>
          Open the modal
        </button>
        <Modal show={this.state.isOpen}
          onClose={this.toggleModal} 
          {...this.state}>
        </Modal>
      </div>
    );
  }
}

export default App;