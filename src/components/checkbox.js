import React from 'react';
import PropTypes from 'prop-types';
import "../css/checkbox.css";
function Checkbox(props) {

    return (
        <div class="checkbox__wrapper">
            <label class="switch switch_type" role="switch">
                <input type="checkbox" class="switch__toggle" 
                checked={props.checked} 
                onChange={props.handleOptionChange} />
                <span class="switch__label"></span>
            </label>
            <p onClick={props.handleOptionChange}>{props.title}</p> 
        </div>
    );
  }

Checkbox.propTypes = {
    title: PropTypes.string,
    checked: PropTypes.bool,
    handleOptionChange: PropTypes.func.isRequired,
};

export default Checkbox;