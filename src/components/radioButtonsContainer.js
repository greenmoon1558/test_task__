import React from 'react';
import PropTypes from 'prop-types';
import RadioButton from "./radiobutton";
import "../css/tabs.css";


class RadioButtonsContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  selectedOption: 'radio-0' };
    };

    handleOptionChange = (changeEvent) => {
        this.setState({
            selectedOption: changeEvent.target.id
        });
    }

    render() {
        return (
            <div class="radiobuttons_container">
                {this.props.radiobuttonsTitle.map((item, i)=><RadioButton 
                    title={item} numberItem={i} 
                    key={i} 
                    handleOptionChange={this.handleOptionChange}
                    checked={this.state.selectedOption} 
                    ></RadioButton>)}
            </div>
        );
    }
  }

RadioButtonsContainer.propTypes = {
    radiobuttonsTitle: PropTypes.array,
};

export default RadioButtonsContainer;