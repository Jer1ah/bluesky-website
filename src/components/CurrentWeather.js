import React from 'react';
import { connect } from 'react-redux';

import { getCurrentWeather } from '../actions';
import '../css/currentWeather.css';

import sunnyIcon from '../img/sun.svg';
import moonIcon from '../img/moon.svg';
import cloudsIcon from '../img/clouds.svg';
import partlyCloudyIcon from '../img/cloudy.svg';
import partlyCloudyNightIcon from '../img/cloudy-night.svg';
import rainIcon from '../img/rain.svg';
import thunderstormIcon from '../img/thunderstorm.svg';
import snowIcon from '../img/snow.svg';

class CurrentWeather extends React.Component {
    componentDidMount() {
        this.props.getCurrentWeather();
    }

    render() {
        let weatherIcon;
        switch(this.props.weatherIcon) {
            case '01d':
                weatherIcon = sunnyIcon;
                break;
            case '01n':
                weatherIcon = moonIcon;
                break;
            case '02d':
                weatherIcon = partlyCloudyIcon;
                break;
            case '02n':
                weatherIcon = partlyCloudyNightIcon;
                break;
            case '03d': 
                weatherIcon = cloudsIcon;
                break;
            case '03n':
                weatherIcon = cloudsIcon;
                break;
            case '04d':
                weatherIcon = cloudsIcon;
                break;
            case '04n':
                weatherIcon = cloudsIcon;
                break;
            case '09d':
                weatherIcon = rainIcon;
                break;
            case '09n':
                weatherIcon = rainIcon;
                break;
            case '10d':
                weatherIcon = rainIcon;
                break;
            case '10n':
                weatherIcon = rainIcon;
                break;
            case '11d':
                weatherIcon = thunderstormIcon;
                break;
            case '11n':
                weatherIcon = thunderstormIcon;
                break;
            case '13d':
                weatherIcon = snowIcon;
                break;
            case '13n':
                weatherIcon = snowIcon;
                break;
            case '50d':
                weatherIcon = rainIcon;
                break;
            case '50n':
                weatherIcon = rainIcon; 
                break;
            default:
                weatherIcon = sunnyIcon;
        }

        return (
            <div className='currentWeather'>
                <div className='currentWeatherMain'>
                    <img src={weatherIcon} alt='Weather Icon'/>
                    <div className='currentTemp'>
                        <h1>{this.props.currentTemp}&deg;</h1>
                        <h5>{this.props.currentCondition}</h5>
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
            currentCondition: state.currentWeather.weather[0].description,
            highTemp: Math.floor(state.currentWeather.main.temp_max),
            lowTemp: Math.floor(state.currentWeather.main.temp_min),
            wind: Math.floor(state.currentWeather.wind.speed),
            humidity: state.currentWeather.main.humidity,
            sunrise: sunriseString,
            sunset: sunsetString,
            weatherIcon: state.currentWeather.weather[0].icon,
        };
    } else {
        return {};
    }
};

export default connect(mapStateToProps, {
    getCurrentWeather
})(CurrentWeather);