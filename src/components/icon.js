import React from 'react';
import PropTypes from 'prop-types';
import "../css/icon.css";

function Icon(props) {
    return (
        <i class={"icon "+props.type+"-icon"}></i>
    );
  }

Icon.propTypes = {
    type: PropTypes.string,
};

export default Icon;