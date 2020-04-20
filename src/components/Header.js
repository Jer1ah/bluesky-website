import React from 'react';
import { connect } from 'react-redux';

import { 
    getCurrentDate, 
    getCurrentWeather, 
    getHourlyForecast,
    updateZipcode,
    getLocationInfo,
    getWeeklyWeather,
    updateLocationKey
 } from '../actions';

import '../css/header.css';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.textInput = React.createRef();
    }

    componentDidMount() {
        this.props.getCurrentDate();
        this.props.getLocationInfo(28202);
        this.props.getCurrentWeather("11727_PC");
    }

    componentWillReceiveProps(nextProps) {
        this.props.getWeeklyWeather(nextProps.locationKey);
        this.props.getCurrentWeather(nextProps.locationKey);
        this.props.getHourlyForecast(nextProps.locationKey);
    }

    getWeather = (zipcode) => {
        this.props.getLocationInfo(zipcode);
    };

    render() {
        return (
            <div className='header'>
                <div className='headerMain'>
                    <h1>{this.props.currentCity}, {this.props.currentState}</h1>
                    <h3>{this.props.currentDate}</h3>
                </div>
                <div className='headerInput'>
                    <input type='text' 
                           placeholder='Enter zipcode' 
                           ref={this.textInput} 
                    />
                    <button onClick={() => this.getWeather(this.textInput.current.value)}>Get Weather</button>
                </div>
            </div>
        );
    }
};

const mapStateToProps = (state) => {
    if(state.locationInfo.AdministrativeArea) {
        return {
            currentDate: state.currentDate,
            currentCity: state.locationInfo.LocalizedName,
            currentState: state.locationInfo.AdministrativeArea.ID,
            userInput: state.userInput,
            locationKey: state.locationInfo.Key
        }
    } else {
        return {};
    }
};

export default connect(mapStateToProps, {
    getCurrentDate,
    getCurrentWeather,
    getHourlyForecast,
    updateZipcode,
    getLocationInfo,
    getWeeklyWeather,
    updateLocationKey
})(Header);