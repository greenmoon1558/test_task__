import React from 'react';
import PropTypes from 'prop-types';
import "../css/colorinputs.css";

class Colorinputs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  selectedOption: 'colorradio-000' };
    };

    handleOptionChange = (changeEvent) => {
        this.setState({
            selectedOption: changeEvent.target.id
        });
    }
    render() {
    return (
        <div class="colorinputs__container">
            <ul>
                {Object.keys(this.props.colorinputs).map((item, i)=>
                    <li>
                        <p>{item}</p>
                        <div class="colorinputs">
                         {this.props.colorinputs[item].map((color, j)=>
                            <div class="colorradio__wrapper">
                                <input id={"colorradio-"+this.props.item+i*10+j} 
                                name={"colorradio"+this.props.item} 
                                type="radio"
                                checked={this.state.selectedOption == ("colorradio-"+this.props.item+i*10+j)}
                                onChange={this.handleOptionChange} 
                                />
                                <div>
                                    <label for={"colorradio-"+this.props.item+i*10+j} class="colorradio-label" style={color}></label>
                                </div>
                            </div>)}
                            <div class="colorradio__wrapper-last">
                                <input id={"colorradio-"+this.props.item+i*10+this.props.colorinputs[item].length} 
                                name={"colorradio"+this.props.item} 
                                checked={this.state.selectedOption == ("colorradio-"+this.props.item+i*10+this.props.colorinputs[item].length)}
                                onChange={this.handleOptionChange} 
                                type="radio"/>
                                <div>
                                    <label for={"colorradio-"+i*10+this.props.colorinputs[item].length} class="colorradio-label">
                                        <i class="fills-icon"></i>
                                    </label>
                                </div> 
                            </div>
                        </div>
                    </li>)}
            </ul>
        </div>
    );}
  }

Colorinputs.propTypes = {
    colorinputs: PropTypes.object,
    item: PropTypes.number
};

export default Colorinputs;