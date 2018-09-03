import React from 'react';
import PropTypes from 'prop-types';
import "../css/filtersInputs.css";
import Slider from './slider';
class FiltersInputs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  
            selectedOption: 'filterradio-0',
            strength: props.strength
     };
    };

    handleOptionChange = (changeEvent) => {
        this.setState({
            selectedOption: changeEvent.target.id
        });
    }
    handleFilterStrength = (changeEvent) => {
        this.setState({
            strength: changeEvent.target.value
        });
    }

    render() {
      return (
        <div class="filtersinputs__container">
            <ul>
            <div class="filtersinputs">
                {Object.keys(this.props.filtersinputs).map((itemcss, i)=>
                    <li>
                    <div class="filterradio__wrapper">
                        <input id={"filterradio-"+i} 
                            name={"filterradio"} 
                            type="radio"
                            checked={this.state.selectedOption == ("filterradio-"+i)}
                            onChange={this.handleOptionChange} />
                            <div>
                                <div>
                                    <label for={"filterradio-"+i} class="filtersradio-label" 
                                     style={typeof this.props.filtersinputs[itemcss] == "object"?this.props.filtersinputs[itemcss]:{}}
                                    ></label>
                                </div>
                            </div>
                            <p>{itemcss}</p>
                            </div>
                    </li>)}
                </div>
            </ul>
            <Slider strength={this.state.strength}  handleFilterStrength={this.handleFilterStrength}></Slider>
            
        </div>
    );}
  }

FiltersInputs.propTypes = {
    filtersinputs: PropTypes.object,
    strength:PropTypes.number
};

export default FiltersInputs;