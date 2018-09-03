import React from 'react';
import PropTypes from 'prop-types';
import "../css/button.css";
import Icon from "./icon";
function Button(props) {
    return (
        <button>{props.icon_type?<Icon type={props.icon_type}></Icon>:""}<span>{props.title}</span></button>
    );
  }

Button.propTypes = {
    icon_type: PropTypes.string,
    title: PropTypes.string
};

export default Button;