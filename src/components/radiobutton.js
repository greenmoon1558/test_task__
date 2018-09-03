import React from 'react';
import PropTypes from 'prop-types';
import "../css/radiobutton.css";

function RadioButton(props) {
    return (
        <div class="radio">
            <input id={"radio-"+props.numberItem} name="radio" type="radio" 
                checked={props.checked == ("radio-"+props.numberItem)} 
                onChange={props.handleOptionChange}  />
            <label for={"radio-"+props.numberItem} class="radio-label">{props.title}</label>
        </div>
    );
  }

RadioButton.propTypes = {
    title: PropTypes.string,
    numberItem: PropTypes.string,
    checked: PropTypes.string,
    handleOptionChange: PropTypes.func.isRequired,
};

export default RadioButton;