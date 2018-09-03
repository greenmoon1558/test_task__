import React from 'react';
import PropTypes from 'prop-types';
import BackgroundSettings from './backgroundSettings';
import Tabs from "./tabs";
import "../css/modal.css";

class Modal extends React.Component {
   constructor(props) {
        super(props);
        this.state = {  selectedOption: 'tab0',  modalTitle: "Layout" };
    };

    handleOptionChange = (clickEvent) => {
        this.setState({
            selectedOption: clickEvent.target.id,
            modalTitle: clickEvent.target.innerHTML
        });
    }

  render() {
    if(!this.props.show) {
      return null;
    }

    return (
      <section class="modal-window">
        <div class="modal-content">
          <header class="modal-window__header">
          <div class="modal-window__header-content">
            <h1>{this.props.title}</h1>
           <Tabs 
           tabs={this.props.tabs} 
           handleOptionChange={this.handleOptionChange} 
           selectedOption={this.state.selectedOption}></Tabs>
          </div>
            <button class="modal-window__close-button" onClick={this.props.onClose}>
             <i class="close-icon"></i>
             </button>
          </header>
          <BackgroundSettings type={this.state.modalTitle}>
          </BackgroundSettings>
          <footer class="modal-window__footer">
           <i class="paint2-icon"></i>
           <p>{this.props.footerTitle}</p>
          </footer>
        </div>
      </section>
    );
  }
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  show: PropTypes.bool,
  title: PropTypes.string,
  tabs: PropTypes.array,
  footerTitle: PropTypes.string,
  backgroundSettings: PropTypes.object
};

export default Modal;