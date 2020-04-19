import React from 'react';
import { connect } from 'react-redux';

import HourForecast from '../components/HourForecast';
import { getCurrentHours, getHourlyForecast } from '../actions';
import '../css/hourlyForecast.css';

import sunnyIcon from '../img/sun.svg';
import moonIcon from '../img/moon.svg';
import cloudsIcon from '../img/clouds.svg';
import partlyCloudyIcon from '../img/cloudy.svg';
import partlyCloudyNightIcon from '../img/cloudy-night.svg';
import rainIcon from '../img/rain.svg';
import thunderstormIcon from '../img/thunderstorm.svg';
import snowIcon from '../img/snow.svg';

class HourlyForecast extends React.Component {
    componentDidMount() {
        this.props.getHourlyForecast("11727_PC");
        this.props.getCurrentHours();
    }

    render() {
        let hourlyForecast;
        if( this.props.currentHours && this.props.currentTemps[1] ) {
            hourlyForecast = this.props.currentHours.map((hour, index) => {
                let weatherIcon;
                switch(this.props.currentTemps[index].WeatherIcon) {
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
                return <HourForecast
                            hour={hour}
                            weatherIcon={weatherIcon}
                            temperature={Math.floor(this.props.currentTemps[index].Temperature.Value)}
                            key={this.props.currentTemps[index].EpochDateTime}
                        />
                });
        }

        return (
            <div className='hourlyForecast'>
                <h1>Hourly Forecast</h1>
                <ul className='hourlyForecastList'>
                    { hourlyForecast ? hourlyForecast : null }
                </ul>
            </div>
        );
    }   
};

const mapStateToProps = (state) => {
    return {
        currentHours: state.currentHours,
        currentTemps: state.hourlyForecast,
    } 
};

export default connect(mapStateToProps, {
    getCurrentHours,
    getHourlyForecast
})(HourlyForecast);

