import React from 'react';
import { connect } from 'react-redux';

import DailyForecast from '../components/DailyForecast';
import { getWeeklyForecast } from '../actions';
import weatherIcon from '../img/weather.svg';
import '../css/weeklyForecast.css';

class WeeklyForecast extends React.Component { 
    componentDidMount() {
        this.props.getWeeklyForecast();
    }

    render() {
        let daily;
        if( this.props.currentTemps[1] ) {
            daily = this.props.days.map((day, index) => {
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