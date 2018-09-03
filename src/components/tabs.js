import React from 'react';
import PropTypes from 'prop-types';
import "../css/tabs.css";

function Tabs(props) {
    return (
        <nav class="modal-window__header-tabs">
             {props.tabs.map((item, i)=>
                <li 
                id={"tab"+i} key={i} 
                className={props.selectedOption == "tab"+i?"active": ""}
                onClick={props.handleOptionChange}
                >{item}</li>)}
        </nav>
    );
  }

Tabs.propTypes = {
    tabs: PropTypes.array,
    selectedOption: PropTypes.string,
    handleOptionChange: PropTypes.func.isRequired
};

export default Tabs;