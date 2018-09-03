import React from 'react';
import PropTypes from 'prop-types';
import Checkbox from "./checkbox";
import RadioButtonsContainer from "./radioButtonsContainer";
import Colorinputs from './colorInputs';
import FiltersInputs from './filtersInputs';
import '../css/backgroundSettingItem.css';

class BackgroundSettingsItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  checked: false };
    };

    handleOptionChange = (changeEvent) => {
        this.setState({
            checked: !this.state.checked
        });
    }
    switchFunction = (title, content) => {
        if(!this.state.checked)
            return "";
        switch (title) {
            case "scroll effects":
                return <RadioButtonsContainer radiobuttonsTitle={Object.values(content)}></RadioButtonsContainer>;
                break;
            case "filters":
                return <FiltersInputs filtersinputs={content.photoFilter} strength={content.strength}></FiltersInputs>;
                break;
            case "color behind image":
                return <Colorinputs item={0} colorinputs={content}></Colorinputs>;
                break;
            case "color overlay":
                return <Colorinputs item={1} colorinputs={content}></Colorinputs>;
                break;
            }
    }
    render() {
        return (
            <div class="settings-item">
                <Checkbox title={this.props.title} 
                checked={this.state.checked} 
                handleOptionChange={this.handleOptionChange}></Checkbox>
                { this.switchFunction(this.props.title, this.props.content) }
                <hr/>
            </div>
        );
    }
}

BackgroundSettingsItem.propTypes = {
    title: PropTypes.string,
    content: PropTypes.object
};

export default BackgroundSettingsItem;