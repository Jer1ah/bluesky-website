import React from 'react';
import { connect } from 'react-redux';

import DailyForecast from '../components/DailyForecast';
import { getWeeklyForecast } from '../actions';
import '../css/weeklyForecast.css';

import sunnyIcon from '../img/sun.svg';
import moonIcon from '../img/moon.svg';
import cloudsIcon from '../img/clouds.svg';
import partlyCloudyIcon from '../img/cloudy.svg';
import partlyCloudyNightIcon from '../img/cloudy-night.svg';
import rainIcon from '../img/rain.svg';
import thunderstormIcon from '../img/thunderstorm.svg';
import snowIcon from '../img/snow.svg';

class WeeklyForecast extends React.Component { 
    componentDidMount() {
        this.props.getWeeklyForecast();
    }

    render() {
        let daily;
        if( this.props.currentTemps[1] ) {
            daily = this.props.days.map((day, index) => {
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
                return <DailyForecast 
                            day={day}
                            weatherIcon={weatherIcon}
                            highTemp={Math.ceil(this.props.currentTemps[index + 3].main.temp_max)}
                            lowTemp={Math.floor(this.props.currentTemps[index + 3].main.temp_min)}
                            wind={Math.floor(this.props.currentTemps[index + 3].wind.speed)}
                            humidity={Math.floor(this.props.currentTemps[index + 3].main.humidity)}
                        />
            });
        }

        return (
            <div className='weeklyForecast'>
                <h1>Next 5 Days</h1>
                <ul className='weeklyForecastList'>
                    { daily ? daily : null}
                </ul>
            </div>
        );
    }
};

const mapStateToProps = (state) => {
    return {
        days: state.days,
        currentTemps: state.hourlyForecast
    };
};

export default connect(mapStateToProps, {
    getWeeklyForecast
})(WeeklyForecast);