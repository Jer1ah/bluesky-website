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
    render() {
        let weatherIcon;
        switch(this.props.weatherIcon) {
            case 1:
                weatherIcon = sunnyIcon;
                break;
            case 2:
                weatherIcon = sunnyIcon;
                break;
            case 3:
                weatherIcon = sunnyIcon;
                break;
            case 4:
                weatherIcon = partlyCloudyIcon;
                break;
            case 5:
                weatherIcon = partlyCloudyIcon;
                break;
            case 6:
                weatherIcon = partlyCloudyIcon;
                break;
            case 7:
                weatherIcon = cloudsIcon;
                break;
            case 8:
                weatherIcon = cloudsIcon;
                break;
            case 11:
                weatherIcon = cloudsIcon;
                break;
            case 18:
                weatherIcon = rainIcon;
                break;
            case 12:
                weatherIcon = rainIcon;
                break;
            case 13:
                weatherIcon = rainIcon;
                break;
            case 14:
                weatherIcon = rainIcon;
                break;
            case 24:
                weatherIcon = rainIcon;
                break;
            case 25:
                weatherIcon = rainIcon;
                break;
            case 26:
                weatherIcon = rainIcon;
                break;
            case 29:
                weatherIcon = rainIcon;
                break;
            case 15:
                weatherIcon = thunderstormIcon;
                break;
            case 16:
                weatherIcon = thunderstormIcon;
                break;
            case 17:
                weatherIcon = thunderstormIcon;
                break;
            case 19:
                weatherIcon = snowIcon;
                break;
            case 20:
                weatherIcon = snowIcon;
                break;
            case 21:
                weatherIcon = snowIcon;
                break;
            case 22:
                weatherIcon = snowIcon;
                break;
            case 23:
                weatherIcon = snowIcon;
                break;
            case 33:
                weatherIcon = moonIcon;
                break;
            case 34:
                weatherIcon = moonIcon;
                break;
            case 35:
                weatherIcon = partlyCloudyNightIcon;
                break;
            case 36:
                weatherIcon = partlyCloudyNightIcon;
                break;
            case 37:
                weatherIcon = partlyCloudyNightIcon;
                break;
            case 38:
                weatherIcon = partlyCloudyNightIcon;
                break;
            case 39:
                weatherIcon = rainIcon;
                break;
            case 40:
                weatherIcon = rainIcon;
                break;
            case 41:
                weatherIcon = thunderstormIcon;
                break;
            case 42:
                weatherIcon = thunderstormIcon;
                break;
            case 43:
                weatherIcon = snowIcon;
                break;
            case 44:
                weatherIcon = snowIcon;
                break;
            default:
                weatherIcon = partlyCloudyIcon;
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
                        <li className="conditionItem">
                            <h3>{this.props.realfeel}&deg;</h3>
                            <h5>Real Feel</h5>
                        </li>
                        <li className='conditionItem'>
                            <h3>{this.props.wind}mph</h3>
                            <h5>Wind</h5>
                        </li>
                        <li className='conditionItem'>
                            <h3>{this.props.humidity}%</h3>
                            <h5>Humidity</h5>
                        </li>
                        <li className='conditionItem'>
                            <h3>{this.props.windGust}mph</h3>
                            <h5>Wind Gust</h5>
                        </li>
                    </ul>
                </div> {/* .currentAside end */}
            </div>
        );
    }
};

const mapStateToProps = (state) => {
    if(state.currentWeather.WeatherIcon) {
        return {
            currentTemp: state.currentWeather.Temperature.Imperial.Value,
            currentCondition: state.currentWeather.WeatherText,
            realfeel: state.currentWeather.RealFeelTemperature.Imperial.Value,
            wind: Math.ceil(state.currentWeather.Wind.Speed.Imperial.Value),
            windGust: Math.ceil(state.currentWeather.WindGust.Speed.Imperial.Value),
            humidity: state.currentWeather.RelativeHumidity,
            weatherIcon: state.currentWeather.WeatherIcon,
        };
    } else {
        return {};
    }
};

export default connect(mapStateToProps, {
    getCurrentWeather
})(CurrentWeather);