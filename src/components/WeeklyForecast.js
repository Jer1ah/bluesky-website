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
        const daily = this.props.days.map((day) => {
            return <DailyForecast 
                        day={day}
                        weatherIcon={weatherIcon}
                    />
        });

        return (
            <div className='weeklyForecast'>
                <h1>Next 5 Days</h1>
                <ul className='weeklyForecastList'>
                    { daily }
                </ul>
            </div>
        );
    }
};

const mapStateToProps = (state) => {
    return {
        days: state.days
    };
};

export default connect(mapStateToProps, {
    getWeeklyForecast
})(WeeklyForecast);