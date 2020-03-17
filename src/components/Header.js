import React from 'react';
import { connect } from 'react-redux';

import { getCurrentDate, getCustomCurrentWeather, getCustomHourlyForecast, updateZipcode } from '../actions';

import '../css/header.css';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.textInput = React.createRef();
    }

    componentDidMount() {
        this.props.getCurrentDate();
    }

    getWeather = (zipcode) => {
        this.props.getCustomCurrentWeather(zipcode);
        this.props.getCustomHourlyForecast(zipcode);
    };

    render() {
        return (
            <div className='header'>
                <div className='headerMain'>
                    <h1>{this.props.currentCity}</h1>
                    <h3>{ this.props.currentDate }</h3>
                </div>
                <div className='headerInput'>
                    <input type='text' 
                           placeholder='Enter zipcode' 
                           ref={this.textInput} 
                           onKeyUp={() => {this.props.updateZipcode(this.textInput.current.value)}} />
                    <button onClick={() => {this.getWeather(this.props.userInput)}}>Get Weather</button>
                </div>
            </div>
        );
    }
};

const mapStateToProps = (state) => {
    return {
        currentDate: state.currentDate,
        currentCity: state.currentWeather.name,
        userInput: state.userInput
    }
};

export default connect(mapStateToProps, {
    getCurrentDate,
    getCustomCurrentWeather,
    getCustomHourlyForecast,
    updateZipcode
})(Header);