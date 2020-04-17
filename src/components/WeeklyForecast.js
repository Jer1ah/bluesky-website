import React from 'react';
import { connect } from 'react-redux';

import DailyForecast from '../components/DailyForecast';
import { getWeeklyForecast, getWeeklyWeather } from '../actions';
import '../css/weeklyForecast.css';

import sunnyIcon from '../img/sun.svg';
import cloudsIcon from '../img/clouds.svg';
import partlyCloudyIcon from '../img/cloudy.svg';
import rainIcon from '../img/rain.svg';
import thunderstormIcon from '../img/thunderstorm.svg';
import snowIcon from '../img/snow.svg';

class WeeklyForecast extends React.Component { 
    componentDidMount() {
        this.props.getWeeklyForecast();
        this.props.getWeeklyWeather("11727_PC");
    }

    render() {
        let daily;
        let weatherIcon;
        if( this.props.dailyConditions ) {
            daily = this.props.days.map((day, index) => {
                console.log(this.props.dailyConditions[index].Day.Icon);
                switch(this.props.dailyConditions[index].Day.Icon) {
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
                    default:
                        weatherIcon = partlyCloudyIcon;
                }
                return <DailyForecast 
                            day={day}
                            weatherIcon={weatherIcon}
                            lowTemp={this.props.dailyConditions[index].Temperature.Minimum.Value}
                            highTemp={this.props.dailyConditions[index].Temperature.Maximum.Value}
                            wind={Math.ceil(this.props.dailyConditions[index].Day.Wind.Speed.Value)}
                            rain={this.props.dailyConditions[index].Day.RainProbability}
                            weatherIcon={weatherIcon}
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
    if( state.weeklyForecast ) {
    return {
        days: state.days,
        dailyConditions: state.weeklyForecast.DailyForecasts
    };
    } else {
        return {};
    }
};

export default connect(mapStateToProps, {
    getWeeklyForecast,
    getWeeklyWeather
})(WeeklyForecast);