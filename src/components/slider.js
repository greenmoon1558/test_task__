import React from 'react';
import PropTypes from 'prop-types';
import "../css/slider.css";

function Slider(props) {
    return (
       <div class="filterstrength__container">
            <input id="filter__strength" type="range" 
            value={props.strength} 
            min="0" max="100" 
            onChange={props.handleFilterStrength} 
            style={{backgroundImage: "linear-gradient(to right, #165bfb "+props.strength+"%, #f2f4f7 "+props.strength+"%)" }} />
            <label for="filter__strength">{props.strength}%</label>
         </div>
    );
  }

Slider.propTypes = {

    strength: PropTypes.number,
    handleFilterStrength: PropTypes.func.isRequired,
};

export default Slider;