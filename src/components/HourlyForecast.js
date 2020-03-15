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
        this.props.getHourlyForecast();
        this.props.getCurrentHours();
    }

    render() {
        let hourlyForecast;
        if( this.props.currentHours && this.props.currentTemps[0] ) {
            hourlyForecast = this.props.currentHours.map((hour, index) => {
                let weatherIcon;
                switch(this.props.currentTemps[index].weather[0].icon) {
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
                
                return <HourForecast
                            hour={hour}
                            weatherIcon={weatherIcon}
                            temperature={Math.floor(this.props.currentTemps[index].main.temp)}
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

