import React from 'react';
import { connect } from 'react-redux';

import { getCurrentWeather } from '../actions';
import weatherIcon from '../img/weather.svg';
import '../css/currentWeather.css';

class CurrentWeather extends React.Component {
    componentDidMount() {
        this.props.getCurrentWeather();
    }

    render() {
        return (
            <div className='currentWeather'>
                <div className='currentWeatherMain'>
                    <img src={weatherIcon} alt='Weather Icon'/>
                    <div className='currentTemp'>
                        <h1>{this.props.currentTemp}&deg;</h1>
                        <h5>Mostly Sunny</h5>
                    </div> {/* .currentTemp end */}
                </div> {/* .currentMain end */}
                <div className='currentWeatherAside'>
                    <ul className='conditionsList'>
                        <li className='conditionItem'>
                            <h3>{this.props.highTemp}&deg;</h3>
                            <h5>High</h5>
                        </li>
                        <li className='conditionItem'>
                            <h3>{this.props.wind}mph</h3>
                            <h5>Wind</h5>
                        </li>
                        <li className='conditionItem'>
                            <h3>{this.props.sunrise}</h3>
                            <h5>Sunrise</h5>
                        </li>
                        <li className='conditionItem'>
                            <h3>{this.props.lowTemp}&deg;</h3>
                            <h5>Low</h5>
                        </li>
                        <li className='conditionItem'>
                            <h3>{this.props.humidity}%</h3>
                            <h5>Humidity</h5>
                        </li>
                        <li className='conditionItem'>
                            <h3>{this.props.sunset}</h3>
                            <h5>Sunset</h5>
                        </li>
                    </ul>
                </div> {/* .currentAside end */}
            </div>
        );
    }
};

const mapStateToProps = (state) => {
    let sunriseString;
    let sunsetString;
    if(state.currentWeather.main) {
        let sunrise = new Date(state.currentWeather.sys.sunrise * 1000).toLocaleTimeString().split('');
        sunrise.splice(4,4);
        sunriseString = sunrise.join('').toLowerCase();

        let sunset = new Date(state.currentWeather.sys.sunset * 1000).toLocaleTimeString().split('');
        sunset.splice(4,4);
        sunsetString = sunset.join('').toLowerCase();
    }

    if(state.currentWeather.main) {
        return {
            currentTemp: Math.floor(state.currentWeather.main.temp),
            highTemp: Math.floor(state.currentWeather.main.temp_max),
            lowTemp: Math.floor(state.currentWeather.main.temp_min),
            wind: Math.floor(state.currentWeather.wind.speed),
            humidity: state.currentWeather.main.humidity,
            sunrise: sunriseString,
            sunset: sunsetString
        };
    } else {
        return {};
    }
};

export default connect(mapStateToProps, {
    getCurrentWeather
})(CurrentWeather);